
const fs = require('fs');
const path = r"d:\All NCERT SOLUTIONS\client\data\content\math-ch11.ts";
let c = fs.readFileSync(path, 'utf8');

function fixSvg(svg) {
    svg = svg.replace(/stroke="stroke=" ([^"]+)"=""/g, 'stroke="$1"');
    svg = svg.replace(/stroke="stroke=" stroke=""/g, 'stroke="currentColor"');
    svg = svg.replace(/ "=""/g, '');
    return svg;
}

const res = c.replace(/(src="data:image\/svg\+xml;base64,)([^"]+)/g, (m, p, d) => {
    try {
        let dec = Buffer.from(d, 'base64').toString('utf8');
        let fxd = fixSvg(dec);
        let enc = Buffer.from(fxd).toString('base64');
        return p + enc;
    } catch(e) {
        return m;
    }
});

fs.writeFileSync(path, res, 'utf8');
console.log("done");
