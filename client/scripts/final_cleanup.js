const fs = require('fs');

let content = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts', 'utf8');

// The file literally has strings like: \<sup>4</sup>/<sub>3</sub> -> we want <sup>4</sup>/<sub>3</sub>.
// It literally has \tan, \cos, \sin, \theta -> we want tan, cos, sin, θ.
// It has \\"> -> we want \">.

content = content.replace(/\\\\tan/g, 'tan');
content = content.replace(/\\\\cos/g, 'cos');
content = content.replace(/\\\\sin/g, 'sin');
content = content.replace(/\\\\sec/g, 'sec');
content = content.replace(/\\\\cot/g, 'cot');
content = content.replace(/\\\\cosec/g, 'cosec');
content = content.replace(/\\\\theta/g, 'θ');

content = content.replace(/\\\\</g, '<');
content = content.replace(/\\\\>/g, '>');
content = content.replace(/\\\\=/g, '=');
content = content.replace(/\\\\"([^,\n]+)/g, '\\"$1'); // specifically \"> to \"> but wait, if it's \\"> we want \">

// Actually just removing any backslash that precedes another backslash or character that is not valid escape
content = content.replace(/\\\\([^nrt"'\\\/])/g, '$1');

// What about `\\">` ?
// `\\">` is `\\\\">` in the source file because it was `\>` or something?
// Let's replace any `\\"` that is immediately followed by `>` with `\"`
content = content.replace(/\\\\">/g, '\\">');
content = content.replace(/\\\\"/g, '\\"'); // Actually, if we just have double backslash quote, make it single backslash.
// Wait, if it's \\", it means the string literally has \". Which is `\"`. But in TS string, it should be `\"` to escape. 
// If it's `\\"` in the file, it compiles to `\"`. Meaning it is NOT an un-ended string! 
// Wait, if it's `\\">`, it evaluates to `\">`. The `"` is NOT escaped! That's why TS complains!
// Yes! `\\"` is a literal backslash followed by a string-ending quote! We need `\"`!

content = content.replace(/\\\\"/g, '\\"');

fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts', content, 'utf8');
console.log('Final cleanup of math-ch8.ts executed!');
