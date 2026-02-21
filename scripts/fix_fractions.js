const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const chaptersDir = 'd:/MATH-T-new/client/assets/chapters';

function processFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processFiles(fullPath);
        } else if (item.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Simple replace outside of HTML tags using regex
            // It matches parts of strings that are not between < and >
            // Example match: "1/2", "x/y", "a/b", "AB/QR"
            // We want to replace these with `<span class="fraction"><span class="numerator">a</span><span class="denominator">b</span></span>`

            // To be safe and purely update text nodes, we use Cheerio:
            const $ = cheerio.load(content, { decodeEntities: false, recognizeSelfClosing: true });

            const regex = /\b([0-9a-zA-Z]+)\s*\/\s*([0-9a-zA-Z]+)\b/g;

            function processNode(node) {
                if (node.type === 'text') {
                    if (regex.test(node.data)) {
                        node.data = node.data.replace(regex, (match, n, d) => {
                            // Exceptions: skip typical URL keywords or if it's already part of a URL (though Cheerio splits tags/text)
                            if (match === 'p/q' || match === 'a/b' || !isNaN(n)) {
                                modified = true;
                                return `<span class="fraction"><span class="numerator">${n}</span><span class="denominator">${d}</span></span>`;
                            }
                            modified = true;
                            return `<span class="fraction"><span class="numerator">${n}</span><span class="denominator">${d}</span></span>`;
                        });
                    }
                } else if (node.type === 'tag') {
                    // skip scripts and styles
                    if (node.name === 'script' || node.name === 'style') return;
                    // skip if this is already a fraction span
                    if (node.name === 'span') {
                        const cls = $(node).attr('class');
                        if (cls && (cls.includes('fraction') || cls.includes('numerator') || cls.includes('denominator'))) {
                            return;
                        }
                    }
                    if (node.children) {
                        for (let i = 0; i < node.children.length; i++) {
                            processNode(node.children[i]);
                        }
                    }
                }
            }

            $('body').contents().each((_, elem) => {
                processNode(elem);
            });

            if (modified) {
                // Because cheerio encodes HTML sometimes or messes up DOCTYPE, we re-parse using regex on the raw string for safety, but ONLY if we saw matches in Cheerio?
                // Actually Cheerio with decodeEntities: false is reasonably safe.
                // However, HTML text is updated in DOM. Let's get the whole body out.
                // Reassemble exact html to avoid breaking html structure
                fs.writeFileSync(fullPath, $.html());
                console.log('Fixed fractions in:', fullPath);
            }
        }
    }
}

processFiles(chaptersDir);
