const fs = require('fs');
const path = require('path');

const srcDir = 'd:/MATH-T-new/client/assets/chapters';

function processFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processFiles(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Normalize the spans to single lines for easier regex match
            content = content.replace(/<span\s+class="fraction"\s*>\s*<span\s+class="numerator"\s*>([\s\S]*?)<\/span>\s*<span\s+class="denominator"\s*>([\s\S]*?)<\/span>\s*<\/span>/g, '<span class="fraction"><span class="numerator">$1</span><span class="denominator">$2</span></span>');

            // 1. First, find all \( ... \) blocks and replace fractions INSIDE them with raw \frac{A}{B}
            content = content.replace(/\\\([\s\S]*?\\\)/g, (match) => {
                return match.replace(/<span class="fraction"><span class="numerator">([\s\S]*?)<\/span><span class="denominator">([\s\S]*?)<\/span><\/span>/g, '\\frac{$1}{$2}');
            });

            // 2. Do the same for \[ ... \] blocks
            content = content.replace(/\\\[[\s\S]*?\\\]/g, (match) => {
                return match.replace(/<span class="fraction"><span class="numerator">([\s\S]*?)<\/span><span class="denominator">([\s\S]*?)<\/span><\/span>/g, '\\frac{$1}{$2}');
            });

            // 3. Now, any remaining <span class="fraction"> tags are OUTSIDE math blocks. Replace them with \(\frac{A}{B}\)
            content = content.replace(/<span class="fraction"><span class="numerator">([\s\S]*?)<\/span><span class="denominator">([\s\S]*?)<\/span><\/span>/g, '\\(\\frac{$1}{$2}\\)');

            // Are there any other stray HTML tags that got injected into math?
            // E.g., <br> or <b> inside \(... \)? Let's just strip HTML tags entirely IF THEY ARE INSIDE \(...\) or \[...\]?
            // Wait, stripping all HTML might remove <b> which katex might not support, but katex has \mathbf. Let's just stick to fixing the known <span class="fraction">.

            // There might be <span class="false-text"> or <span class="true-text"> inside math.
            // Let's check if the user said "html tags are rendering". Maybe there are <div class="step"> showing?
            // We can also strip ALL <span...> and </span> from INSIDE math blocks just in case they are there.
            content = content.replace(/\\\([\s\S]*?\\\)/g, (match) => {
                // If there's a <span> inside a math block, it's definitely going to render as text in Katex
                if (match.includes('<span') || match.includes('</span>')) {
                    return match.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '');
                }
                return match;
            });
            content = content.replace(/\\\[[\s\S]*?\\\]/g, (match) => {
                if (match.includes('<span') || match.includes('</span>')) {
                    return match.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '');
                }
                return match;
            });

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed math HTML tags in:', fullPath);
            }
        }
    }
}

processFiles(srcDir);
