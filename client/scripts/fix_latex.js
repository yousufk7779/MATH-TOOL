const fs = require('fs');
const path = require('path');

const chapters = ['ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14'];

function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
}

chapters.forEach(ch => {
    const file = path.join(__dirname, '..', 'data', 'content', `math-${ch}.ts`);
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Clean up LaTeX formatting
    content = replaceAll(content, '\\\\\\\\(', '');
    content = replaceAll(content, '\\\\\\\\)', '');
    content = replaceAll(content, '\\\\\\(', '');
    content = replaceAll(content, '\\\\\\)', '');
    content = replaceAll(content, '\\\\(', '');
    content = replaceAll(content, '\\\\)', '');

    content = replaceAll(content, '\\\\\\\\tan^2', 'tan²');
    content = replaceAll(content, '\\\\\\\\sec^2', 'sec²');
    content = replaceAll(content, '\\\\\\\\cot^2', 'cot²');
    content = replaceAll(content, '\\\\\\\\sin^2', 'sin²');
    content = replaceAll(content, '\\\\\\\\cos^2', 'cos²');
    content = replaceAll(content, '\\\\tan^2', 'tan²');
    content = replaceAll(content, '\\\\sec^2', 'sec²');
    content = replaceAll(content, '\\\\cot^2', 'cot²');
    content = replaceAll(content, '\\\\sin^2', 'sin²');
    content = replaceAll(content, '\\\\cos^2', 'cos²');

    content = replaceAll(content, '\\\\\\\\tan', 'tan');
    content = replaceAll(content, '\\\\\\\\cos', 'cos');
    content = replaceAll(content, '\\\\\\\\sin', 'sin');
    content = replaceAll(content, '\\\\\\\\sec', 'sec');
    content = replaceAll(content, '\\\\\\\\cot', 'cot');
    content = replaceAll(content, '\\\\tan', 'tan');
    content = replaceAll(content, '\\\\cos', 'cos');
    content = replaceAll(content, '\\\\sin', 'sin');
    content = replaceAll(content, '\\\\sec', 'sec');
    content = replaceAll(content, '\\\\cot', 'cot');

    content = replaceAll(content, '\\\\\\\\text{cosec }', 'cosec ');
    content = replaceAll(content, '\\\\\\\\text{cosec}', 'cosec');
    content = replaceAll(content, '\\\\text{cosec }', 'cosec ');
    content = replaceAll(content, '\\\\text{cosec}', 'cosec');

    content = replaceAll(content, '\\\\\\\\theta', 'θ');
    content = replaceAll(content, '\\\\theta', 'θ');
    content = replaceAll(content, '\\\\\\\\alpha', 'α');
    content = replaceAll(content, '\\\\alpha', 'α');
    content = replaceAll(content, '\\\\\\\\circ', '°');
    content = replaceAll(content, '\\\\circ', '°');

    content = replaceAll(content, '\\\\\\\\sqrt{3}', '√3');
    content = replaceAll(content, '\\\\sqrt{3}', '√3');
    content = replaceAll(content, '\\\\\\\\sqrt{7}', '√7');
    content = replaceAll(content, '\\\\sqrt{7}', '√7');
    content = replaceAll(content, '\\\\\\\\sqrt{2}', '√2');
    content = replaceAll(content, '\\\\sqrt{2}', '√2');

    // Generic fraction formatting
    content = content.replace(/\\\\\\\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
    content = content.replace(/\\\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');

    // Recursive fractions in case content had nested ones
    while (content.includes('\\\\\\\\frac') || content.includes('\\\\frac')) {
        let old = content;
        content = content.replace(/\\\\\\\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
        content = content.replace(/\\\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
        if (content === old) break;
    }

    // Spacing cleanup
    content = replaceAll(content, 'tan θ', 'tan θ');
    content = replaceAll(content, 'sin θ', 'sin θ');
    content = replaceAll(content, 'cos θ', 'cos θ');
    content = replaceAll(content, 'sec θ', 'sec θ');
    content = replaceAll(content, 'cot θ', 'cot θ');
    content = replaceAll(content, 'cosec θ', 'cosec θ');
    content = replaceAll(content, '  θ', ' θ');
    content = replaceAll(content, '^°', '°');

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Successfully fixed LaTeX rendering in math-ch8 to math-ch14 MCQs!');
