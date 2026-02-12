
$chapters = 1..10

foreach ($i in $chapters) {
    $srcDir = "client\assets\JIGUU_Chapter${i}_Output"
    $destDir = "client\assets\chapter${i}"

    if (Test-Path $srcDir) {
        Write-Host "Processing Chapter $i..."
        
        # Move all contents to destination
        Get-ChildItem "$srcDir\*" | Move-Item -Destination $destDir -Force
        
        # Remove source directory
        Remove-Item "$srcDir" -Force
        
        # Rename HTML files
        Get-ChildItem "$destDir\*.html" | ForEach-Object {
            $newName = ""
            if ($_.Name -match "Overview") { $newName = "overview.html" }
            elseif ($_.Name -match "Examples") { $newName = "examples.html" }
            elseif ($_.Name -match "Exercise.*\.1\.html") { $newName = "exercise1.html" }
            elseif ($_.Name -match "Exercise.*\.2\.html") { $newName = "exercise2.html" }
            elseif ($_.Name -match "Exercise.*\.3\.html") { $newName = "exercise3.html" }
            elseif ($_.Name -match "Exercise.*\.4\.html") { $newName = "exercise4.html" }
            elseif ($_.Name -match "MCQs") { $newName = "mcqs.html" }
            elseif ($_.Name -match "Theorems") { $newName = "theorems.html" }

            if ($newName -ne "") {
                Rename-Item -Path $_.FullName -NewName $newName -Force
            }
        }
        
        # Fix Image Paths in HTML files
        # Only if images folder exists in destination (which it should if it was in source)
        if (Test-Path "$destDir\images") {
            $htmlFiles = Get-ChildItem "$destDir\*.html"
            foreach ($file in $htmlFiles) {
                $content = Get-Content $file.FullName -Raw
                # Regex to find src="filename.svg" (not images/...) and replace with src="images/filename.svg"
                # We assume images are NOT already prefixed if they were flat in source or if HTML was broken.
                # But we should be careful not to double prefix.
                # Look for src="something" where something does NOT start with 'images/' or 'http' or '/'
                $newContent = $content -replace 'src="(?!(images/|http|/))([^"]+\.(svg|png|jpg|jpeg))"', 'src="images/$2"'
                
                if ($content -ne $newContent) {
                    Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
                    Write-Host "Updated image paths in $($file.Name)"
                }
            }
        } else {
             # If no images folder, maybe create one empty? User said "images/ fig1.svg".
             # If no images, maybe no need.
             Write-Host "No images folder for Chapter $i"
        }
    } else {
        Write-Host "Source directory for Chapter $i not found: $srcDir"
    }
}
