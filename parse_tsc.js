const fs = require('fs');

try {
  const content = fs.readFileSync('tsc_errors.log', 'utf16le');
  const lines = content.split('\n');
  const errors = [];
  for (const line of lines) {
    if (line.includes('error TS')) {
      // Keep only lines having error TS but we should avoid dumping huge base64 strings.
      // E.g. client/data/content/sci-bio-3.ts(123,45): error TS1234: Blah
      const match = line.match(/^(.*?\(\d+,\d+\): error TS\d+: .*?)$/);
      if (match) {
        errors.push(line.substring(0, 300)); // limit length
      } else {
        errors.push(line.substring(0, 300));
      }
    }
  }
  fs.writeFileSync('clean_tsc_errors.txt', errors.join('\n'));
} catch (e) {
  console.log(e);
}
