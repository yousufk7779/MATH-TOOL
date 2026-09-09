function sanitizeMath(str) {
  let s = str;
  let prev;
  
  // 1. Replace \times with &times;
  s = s.replace(/\\times\s*/g, '&times; ');

  // 2. Replace \implies with &rArr;
  s = s.replace(/\\implies\s*/g, '&rArr; ');

  // 3. Replace \approx with &approx;
  s = s.replace(/\\approx\s*/g, '&approx; ');

  // 4. Replace \propto with &prop;
  s = s.replace(/\\propto\s*/g, '&prop; ');

  // 5. Replace integration sub/sup
  s = s.replace(/\\int_0\^\\theta/g, '&int;<sub>0</sub><sup>&theta;</sup>');
  s = s.replace(/_0\^\\theta/g, '<sub>0</sub><sup>&theta;</sup>');
  s = s.replace(/\\int_0\^([a-zA-Z0-9]+)/g, '&int;<sub>0</sub><sup>$1</sup>');
  s = s.replace(/_0\^([a-zA-Z0-9]+)/g, '<sub>0</sub><sup>$1</sup>');

  // 6. Replace Greek letters
  s = s.replace(/\\alpha\b/g, '&alpha;');
  s = s.replace(/\\beta\b/g, '&beta;');
  s = s.replace(/\\theta\b/g, '&theta;');
  s = s.replace(/\\phi\b/g, '&phi;');
  s = s.replace(/\\pi\b/g, '&pi;');
  s = s.replace(/\\nu\b/g, '&nu;');
  s = s.replace(/\\gamma\b/g, '&gamma;');
  s = s.replace(/\\rho\b/g, '&rho;');
  s = s.replace(/\\eta\b/g, '&eta;');
  s = s.replace(/\\lambda\b/g, '&lambda;');
  s = s.replace(/\\tau\b/g, '&tau;');
  s = s.replace(/\\sigma\b/g, '&sigma;');
  s = s.replace(/\\mu\b/g, '&mu;');
  s = s.replace(/\\varepsilon\b/g, '&epsilon;');
  s = s.replace(/\\Omega\b/g, '&Omega;');
  s = s.replace(/\\omega\b/g, '&omega;');

  // 6b. Replace common math symbols
  s = s.replace(/\\cdot\s*/g, '&middot; ');
  s = s.replace(/\\le\b/g, '&le;');
  s = s.replace(/\\ge\b/g, '&ge;');
  s = s.replace(/\\ll\b/g, '&ll;');
  s = s.replace(/\\gg\b/g, '&gg;');
  s = s.replace(/\\infty\b/g, '&infin;');
  s = s.replace(/\\circ\b/g, '&deg;');

  // 7. Replace \Delta
  s = s.replace(/\\Delta\\nu_\{Cs\}/g, '&Delta;&nu;<sub>Cs</sub>');
  s = s.replace(/\\Delta\s*([a-zA-Z])/g, '&Delta;$1');
  s = s.replace(/\\Delta\b/g, '&Delta;');

  // 8. Replace \vec{...}
  do {
    prev = s;
    s = s.replace(/\\vec\{([^{}]+)\}/g, '<b>$1</b>');
  } while (s !== prev && s.includes('\\vec{'));

  // 9. Replace \text{...}
  do {
    prev = s;
    s = s.replace(/\\text\{([^{}]+)\}/g, '$1');
  } while (s !== prev && s.includes('\\text{'));

  // 10. Replace \sqrt{...}
  do {
    prev = s;
    s = s.replace(/\\sqrt\{([^{}]+)\}/g, '&radic;($1)');
  } while (s !== prev && s.includes('\\sqrt{'));

  // 11. Replace \frac{...}{...}
  do {
    prev = s;
    s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)');
  } while (s !== prev && s.includes('\\frac{'));

  // 12. Replace \left[ and \right]
  s = s.replace(/\\left\[/g, '[').replace(/\\right\]/g, ']');
  s = s.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');

  // Clean any stray \frac or \vec
  s = s.replace(/\\frac/g, '').replace(/\\vec/g, '').replace(/\\sqrt/g, '&radic;');

  // 13. Remove dollar signs $...$
  s = s.replace(/\$([^$]+)\$/g, '$1');

  // 14. Replace ^{...} with <sup>...</sup>
  do {
    prev = s;
    s = s.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>');
  } while (s !== prev && s.includes('^{'));

  // 15. Replace single character or entity exponents
  s = s.replace(/\^(&[a-zA-Z]+;)/g, '<sup>$1</sup>');
  s = s.replace(/\^(-?\d+)/g, '<sup>$1</sup>');
  s = s.replace(/\^([a-zA-Z])/g, '<sup>$1</sup>');
  s = s.replace(/\^([0-9a-zA-Z\-\+\/\.]+)/g, '<sup>$1</sup>');

  // 16. Catch any stray carets
  s = s.replace(/\^/g, '');

  return s;
}

module.exports = { sanitizeMath };
