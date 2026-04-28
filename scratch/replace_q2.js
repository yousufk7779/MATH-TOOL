const fs = require('fs');
const imagePath = 'C:/Users/hp/.gemini/antigravity/brain/c69d9760-01da-460c-8be3-549fcb77d4dd/media__1777385506998.png';
const tsPath = 'd:/All NCERT SOLUTIONS/client/data/content/c9-sci-chem-2.ts';

const buffer = fs.readFileSync(imagePath);
const b64 = 'data:image/png;base64,' + buffer.toString('base64');

// The replacement line for the image
const imgHTML = `<div style='text-align: center; width: 100%; overflow: hidden;'><img src='${b64}' style='width: 100%; max-width: 100%; height: auto; object-fit: contain;' /></div>`;

let content = fs.readFileSync(tsPath, 'utf8');

// Find the section to replace:
const searchString = `"<div style='margin-top: 10px; overflow-x: auto;'><table style='width: 100%; border-collapse: collapse; color: #FFFFFF; text-align: justify; border: 1px solid #777;'><thead><tr style='background-color: rgba(255,255,255,0.1);'><th style='padding: 8px; border: 1px solid #777;'>Property</th><th style='padding: 8px; border: 1px solid #777;'>Solution</th><th style='padding: 8px; border: 1px solid #777;'>Colloid (Sol)</th><th style='padding: 8px; border: 1px solid #777;'>Suspension</th></tr></thead><tbody><tr><td style='padding: 8px; border: 1px solid #777;'>Nature</td><td style='padding: 8px; border: 1px solid #777;'>Homogeneous</td><td style='padding: 8px; border: 1px solid #777;'>Heterogeneous</td><td style='padding: 8px; border: 1px solid #777;'>Heterogeneous</td></tr><tr><td style='padding: 8px; border: 1px solid #777;'>Particle size</td><td style='padding: 8px; border: 1px solid #777;'>Very small</td><td style='padding: 8px; border: 1px solid #777;'>Intermediate</td><td style='padding: 8px; border: 1px solid #777;'>Large</td></tr><tr><td style='padding: 8px; border: 1px solid #777;'>Visibility</td><td style='padding: 8px; border: 1px solid #777;'>Not visible</td><td style='padding: 8px; border: 1px solid #777;'>Not visible</td><td style='padding: 8px; border: 1px solid #777;'>Visible</td></tr><tr><td style='padding: 8px; border: 1px solid #777;'>Stability</td><td style='padding: 8px; border: 1px solid #777;'>Stable</td><td style='padding: 8px; border: 1px solid #777;'>Stable</td><td style='padding: 8px; border: 1px solid #777;'>Unstable</td></tr><tr><td style='padding: 8px; border: 1px solid #777;'>Settling</td><td style='padding: 8px; border: 1px solid #777;'>Do not settle</td><td style='padding: 8px; border: 1px solid #777;'>Do not settle</td><td style='padding: 8px; border: 1px solid #777;'>Settle down</td></tr></tbody></table></div>",`;
const newString = `"${imgHTML}",`;

if (content.includes(searchString)) {
    content = content.replace(searchString, newString);
    fs.writeFileSync(tsPath, content);
    console.log('Successfully replaced table with image.');
} else {
    console.log('Could not find the target string to replace.');
}
