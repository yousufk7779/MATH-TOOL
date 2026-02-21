const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../client/assets/chapters/chapter3');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    // 1. Remove all <hr> and <hr/> tags
    content = content.replace(/<hr\s*\/?>/gi, '');

    // 2. Remove all `border-bottom` that might be causing unwanted lines from <style>
    // Just remove any border bottom except for the numerator
    content = content.replace(/border-bottom:\s*[^;]+;/gi, (match) => {
        if (match.includes('1px solid #333') || match.includes('1px solid #000')) {
            return match; // keep fraction line
        }
        return '';
    });

    const $ = cheerio.load(content);

    // Replace color `#000` with nothing or remove color styles that might be invisible on dark mode, 
    // actually, let's remove the inline style completely where it's black
    $('*').each(function () {
        const style = $(this).attr('style');
        if (style) {
            let newStyle = style.replace(/color:\s*(#000|#333|black);/gi, '');
            // For fraction inline border, keep it, but others remove
            if (newStyle.trim() === '') {
                $(this).removeAttr('style');
            } else {
                $(this).attr('style', newStyle);
            }
        }
    });

    // Fix exercise1.html missing content-box and question 1
    if (file === 'exercise1.html') {
        const p1 = $('div.sub-question:contains("(i) 10 students")');
        if (p1.length > 0 && !p1.closest('.content-box').length) {
            // Find all nodes until the next content-box
            let current = p1.get(0);
            let nodesToWrap = [];
            while (current && !$(current).hasClass('content-box')) {
                nodesToWrap.push(current);
                current = current.nextSibling;
            }

            // Wrap them
            const wrapper = $('<div class="content-box"><div class="question">1. Form the pair of linear equations in the following problems, and find their solutions graphically.</div></div>');
            $(nodesToWrap[0]).before(wrapper);
            nodesToWrap.forEach(node => wrapper.append(node));
        }
    }

    fs.writeFileSync(p, $.html(), 'utf8');
    console.log(`Cleaned ${file}`);
}
