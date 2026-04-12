const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

// Normalize all image tags that might be missing quotes or have extra garbage at the start of src
// Look for <img src= and then any text until data:image/png;base64, and normalize it
content = content.replace(/<img src=([^"]*?)data:image\/png;base64,/g, (match) => {
    // We want the result to be <img src=\"data:image/png;base64,
    return '<img src=\\"data:image/png;base64,';
});

// Also handle the unescaped " after "src=" if it occurred
content = content.replace(/<img src="data:image\/png;base64,/g, '<img src=\\"data:image/png;base64,');

// Re-check for the one I found in the terminal earlier:
// iVBORw0"data:image/png...
content = content.replace(/iVBORw0"data:image\/png;base64,iVBORw/g, 'iVBORw');

fs.writeFileSync(file, content, 'utf8');
console.log('Final normalized length:', content.length);
