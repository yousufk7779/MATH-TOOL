const fs = require('fs');
const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Fix the corrupted Example 8 string
content = content.replace(/0\^\\°\s+B/g, '0° < A + B ≤ 90°, A > B');

// 2. Remove duplicated examples inside q5.solution
// From "Example 6." to "Hence Proved." but only inside that specific solution.
// We know it starts at index 12 of the solution array.
// Let's do a more surgical replacement.
const q5Duplication = /"Example 6\.[\s\S]*?Hence Proved\."\s*,\s*/g;
// Wait, this might match other things. 
// Let's find q5 and only operate on its solution.
const q5Match = content.match(/"id": "q5"[\s\S]*?"solution": \[([\s\S]*?)\]/);
if (q5Match) {
    let solution = q5Match[1];
    if (solution.includes('Example 6.')) {
        // Cut everything after the first "Therefore..." line
        let endMatch = solution.match(/("\*\*Therefore, the required values are [\s\S]*?\.\*\*")/);
        if (endMatch) {
            let cleanSolution = solution.substring(0, solution.indexOf(endMatch[1]) + endMatch[1].length);
            content = content.replace(solution, cleanSolution);
        }
    }
}

// 3. Cleanup backslashes
// High priority: tags and trig
content = content.replace(/\\<(sup|sub|\/sup|\/sub)/g, '<$1');
content = content.replace(/\\(sin|cos|tan|cot|sec|cosec)/g, '$1');
content = content.replace(/\\(theta|θ|alpha|alpha|beta|gamma)/g, '$1');

// Symbols
content = content.replace(/\\(∠|∆|√|⇒|×|≠|≤|≥|±|π|·|°)/g, '$1');
content = content.replace(/\\θ/g, 'θ');
content = content.replace(/\\∠/g, '∠');
content = content.replace(/\\∆/g, '∆');
content = content.replace(/\\√/g, '√');
content = content.replace(/\\⇒/g, '⇒');
content = content.replace(/\\×/g, '×');
content = content.replace(/\\≠/g, '≠');
content = content.replace(/\\≤/g, '≤');
content = content.replace(/\\≥/g, '≥');
content = content.replace(/\\±/g, '±');
content = content.replace(/\\π/g, 'π');
content = content.replace(/\\·/g, '·');

// LaTeX remnants
content = content.replace(/\\circ/g, '°');
content = content.replace(/\\Rightarrow/g, '⇒');
content = content.replace(/\\triangle/g, '∆');
content = content.replace(/\\angle/g, '∠');
content = content.replace(/\\sim/g, '~');
content = content.replace(/\\pm/g, '±');
content = content.replace(/\\pi/g, 'π');
content = content.replace(/\\times/g, '×');
content = content.replace(/\\ne/g, '≠');
content = content.replace(/\\leq/g, '≤');
content = content.replace(/\\geq/g, '≥');
content = content.replace(/\\cdot/g, '·');
content = content.replace(/\\theta/g, 'θ');

// Concepts
content = content.replace(/\\(Perp|Base|Hyp|Adj|Perpendicular|Base|Hypotenuse)/g, '$1');

// 4. Fix some broken fractions and double backslashes
content = content.replace(/\\<sup>/g, '<sup>');
content = content.replace(/\\<sub>/g, '<sub>');
content = content.replace(/\\\/sup>/g, '</sup>');
content = content.replace(/\\\/sub>/g, '</sub>');

// 5. Final Answer Theme Color
// If there's a specific instruction about "final answer theme color", usually they want **...** and maybe a specific color if requested.
// But mostly they just want the bold part at the end.

// Check for duplicated / in tags line 668 etc
content = content.replace(/<\/sub>_<\/sub>/g, '</sub>'); // just in case

fs.writeFileSync(path, content, 'utf8');
console.log('math-ch8.ts cleaned');
