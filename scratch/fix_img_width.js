const fs = require('fs');

try {
    const targetFile = 'client/data/content/c9-sci-chem-2.ts';
    let content = fs.readFileSync(targetFile, 'utf8');

    // Replace the specific style string
    const oldStyle = "style='max-width: 100%; height: auto;' /></div>\"";
    const newStyle = "width='100%' style='width: 100%;' /></div>\"";
    
    if (content.includes(oldStyle)) {
        content = content.replace(oldStyle, newStyle);
        fs.writeFileSync(targetFile, content);
        console.log('Image style updated to width 100% successfully!');
    } else {
        console.error('Old style not found. Maybe it was already updated?');
        // fallback search
        const imgStart = "<div style='text-align: center;'><img src='data:image/png;base64,";
        if (content.includes(imgStart)) {
            console.log("Image tag found, applying more robust replacement");
            // Find the image tag and replace its end
            // We'll just do a regex replace on the style part of this specific tag
            const regex = /(<img src='data:image\/png;base64,[^']+')\s+style='max-width: 100%; height: auto;'\s*\/>/g;
            content = content.replace(regex, "$1 width='100%' style='width: 100%;' />");
            fs.writeFileSync(targetFile, content);
            console.log('Image style updated via regex!');
        } else {
             console.error('Image tag completely not found!');
        }
    }
} catch (e) {
    console.error('Error:', e);
    process.exit(1);
}
