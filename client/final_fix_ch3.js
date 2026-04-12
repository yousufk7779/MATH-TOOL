const fs = require('fs');
const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(path, 'utf8');

console.log('Original length:', content.length);

// 1. Fix the "bo" />"," corruption (partial shadow)
// It looks like: ...border: 1px solid #e9ecef; bo" />",
// Should be: ...border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\" />",
content = content.replace(/border: 1px solid #e9ecef; bo" \/>",/g, 'border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\\" />",');

// 2. Fix the "r: 1px solid #e9ecef; bo" />",r: 1px sol" corruption
content = content.replace(/r: 1px solid #e9ecef; bo" \/>",/g, '');

// 3. Fix the duplicated segments like: ,0.05);\" />",x 6px rgba(0,0,0,0.05);\" />",
// Note: It might be escaped as \\" or \" depending on the context in the file.
// In the .ts file, it's usually \" for string literal contents.
content = content.replace(/,0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g, '');
content = content.replace(/0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g, '0.05);\\" />",');

// 4. Specifically look for the TSC error pattern: "ion:",,0.05...
content = content.replace(/"ion:",,0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g, '"ion:",');
content = content.replace(/"ution:",,0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g, '"ution:",');

// 5. Fix double commas or trailing commas that might have been left
content = content.replace(/"Solution:",,/g, '"Solution:",');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed length:', content.length);
