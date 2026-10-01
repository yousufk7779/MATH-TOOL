const { styleBlock, themeColor } = require('./ch4_common');

function getExercise4_2() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF9100; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF9100;">
      📘 Exercise 4.2 &bull; Modulus, Argument &amp; Polar Representation in the Complex Plane
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Standalone Argand Plane SVG Diagram Card -->
  <div class="diagram-wrapper">
    <svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg">
      <rect width="380" height="230" fill="#FFFFFF" rx="8" />
      <text x="190" y="22" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#E65100" text-anchor="middle">Argand Plane: Polar Coordinates z = r(cos θ + i sin θ)</text>
      
      <!-- Coordinate Axes -->
      <line x1="40" y1="170" x2="340" y2="170" stroke="#333333" stroke-width="1.8" />
      <line x1="100" y1="35" x2="100" y2="210" stroke="#333333" stroke-width="1.8" />
      
      <!-- Axis Labels -->
      <text x="345" y="175" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#333">Real Axis (x)</text>
      <text x="100" y="28" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#333" text-anchor="middle">Imaginary Axis (iy)</text>

      <!-- Origin O -->
      <circle cx="100" cy="170" r="3.5" fill="#333" />
      <text x="88" y="185" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#333">O</text>

      <!-- Modulus Ray OP to (250, 70) -->
      <line x1="100" y1="170" x2="250" y2="70" stroke="#FF9100" stroke-width="2.5" />
      <circle cx="250" cy="70" r="5" fill="#E65100" />
      <text x="256" y="66" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#BF360C">P(x, y) = z</text>

      <!-- Projections -->
      <line x1="250" y1="70" x2="250" y2="170" stroke="#7C4DFF" stroke-width="1.8" stroke-dasharray="3,3" />
      <line x1="100" y1="70" x2="250" y2="70" stroke="#7C4DFF" stroke-width="1.8" stroke-dasharray="3,3" />

      <!-- Dimension labels -->
      <text x="175" y="186" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#2E7D32" text-anchor="middle">x = r cos θ</text>
      <text x="258" y="125" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#1565C0">y = r sin θ</text>
      <text x="165" y="112" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#E65100">r = |z|</text>

      <!-- Angle Arc -->
      <path d="M 140 170 A 40 40 0 0 0 132 149" fill="none" stroke="#E91E63" stroke-width="2" />
      <text x="146" y="156" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#C2185B">θ</text>
    </svg>
    <div class="diagram-caption">💡 Geometric Architecture: Modulus r = √(x² + y²) &bull; Principal Argument &minus;&pi; &lt; &theta; &le; &pi;</div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Find the modulus and the argument of the complex number: <b><i>z</i> = &minus;1 &minus; <i>i</i>&radic;3</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: <i>z</i> = &minus;1 &minus; <i>i</i>&radic;3.</div>
        <div>Comparing with <i>z</i> = <i>x</i> + <i>iy</i>: <b><i>x</i> = &minus;1</b>, &nbsp; <b><i>y</i> = &minus;&radic;3</b>.</div>
        <div style="margin-top: 6px;"><b>1. Modulus:</b></div>
        <div>&rArr; <i>r</i> = |<i>z</i>| = &radic;(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) = &radic;[ (&minus;1)<sup>2</sup> + (&minus;&radic;3)<sup>2</sup> ] = &radic;(1 + 3) = &radic;4 = <b>2</b></div>
        <div style="margin-top: 8px;"><b>2. Argument:</b></div>
        <div>Let <i>r</i> cos &theta; = &minus;1 &nbsp;and&nbsp; <i>r</i> sin &theta; = &minus;&radic;3:</div>
        <div>&rArr; cos &theta; = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span> &nbsp;and&nbsp; sin &theta; = &minus;<span class="frac"><span class="num">&radic;3</span><span class="den">2</span></span></div>
        <div>Since both cos &theta; and sin &theta; are negative, &theta; lies in <b>Quadrant III</b>.</div>
        <div>Acute reference angle &alpha; = tan<sup>&minus;1</sup>|<span class="frac"><span class="num"><i>y</i></span><span class="den"><i>x</i></span></span>| = tan<sup>&minus;1</sup>(&radic;3) = <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>.</div>
        <div>&rArr; In Quadrant III, principal argument &theta; = &minus;(&pi; &minus; &alpha;):</div>
        <div>&rArr; &theta; = &minus;(&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>) = <b>&minus;<span class="frac"><span class="num">2&pi;</span><span class="den">3</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Modulus = 2, &nbsp; Argument = −2π/3</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Find the modulus and the argument of the complex number: <b><i>z</i> = &minus;&radic;3 + <i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: <i>z</i> = &minus;&radic;3 + <i>i</i> &rArr; <i>x</i> = &minus;&radic;3, &nbsp; <i>y</i> = 1.</div>
        <div style="margin-top: 6px;"><b>1. Modulus:</b></div>
        <div>&rArr; <i>r</i> = |<i>z</i>| = &radic;[ (&minus;&radic;3)<sup>2</sup> + 1<sup>2</sup> ] = &radic;(3 + 1) = &radic;4 = <b>2</b></div>
        <div style="margin-top: 8px;"><b>2. Argument:</b></div>
        <div>&rArr; cos &theta; = &minus;<span class="frac"><span class="num">&radic;3</span><span class="den">2</span></span> &nbsp;and&nbsp; sin &theta; = <span class="frac"><span class="num">1</span><span class="den">2</span></span></div>
        <div>Since cos &theta; &lt; 0 and sin &theta; &gt; 0, &theta; lies in <b>Quadrant II</b>.</div>
        <div>Reference angle &alpha; = tan<sup>&minus;1</sup>|<span class="frac"><span class="num">1</span><span class="den">&minus;&radic;3</span></span>| = <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>.</div>
        <div>&rArr; In Quadrant II, &theta; = &pi; &minus; &alpha; = &pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = <b><span class="frac"><span class="num">5&pi;</span><span class="den">6</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Modulus = 2, &nbsp; Argument = 5π/6</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Convert into polar form: <b>1 &minus; <i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = 1 &minus; <i>i</i>.</div>
        <div>• Modulus <i>r</i> = &radic;[ 1<sup>2</sup> + (&minus;1)<sup>2</sup> ] = <b>&radic;2</b></div>
        <div>• Let <i>r</i> cos &theta; = 1 and <i>r</i> sin &theta; = &minus;1:</div>
        <div>&rArr; cos &theta; = <span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>, &nbsp; sin &theta; = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span></div>
        <div>Since cos &theta; &gt; 0 and sin &theta; &lt; 0, &theta; lies in <b>Quadrant IV</b>.</div>
        <div>&rArr; &theta; = &minus;<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span></div>
        <div style="margin-top: 6px;">Writing in polar form <i>z</i> = <i>r</i>(cos &theta; + <i>i</i> sin &theta;):</div>
        <div>&rArr; <b><i>z</i> = &radic;2 [ cos(&minus;<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span>) + <i>i</i> sin(&minus;<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span>) ]</b></div>
        <div class="ans-box"><span class="ans-label">✓ Polar Form: </span><span class="ans-val">√2 [cos(−π/4) + i sin(−π/4)]</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Convert into polar form: <b>&minus;1 + <i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = &minus;1 + <i>i</i>.</div>
        <div>• Modulus <i>r</i> = &radic;[ (&minus;1)<sup>2</sup> + 1<sup>2</sup> ] = <b>&radic;2</b></div>
        <div>• cos &theta; = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>, &nbsp; sin &theta; = <span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span> &rArr; &theta; lies in <b>Quadrant II</b>.</div>
        <div>&rArr; &theta; = &pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> = <b><span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></b></div>
        <div style="margin-top: 6px;">Polar form:</div>
        <div>&rArr; <b><i>z</i> = &radic;2 [ cos(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) + <i>i</i> sin(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) ]</b></div>
        <div class="ans-box"><span class="ans-label">✓ Polar Form: </span><span class="ans-val">√2 [cos(3π/4) + i sin(3π/4)]</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Convert into polar form: <b>&minus;1 &minus; <i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = &minus;1 &minus; <i>i</i>.</div>
        <div>• Modulus <i>r</i> = &radic;[ (&minus;1)<sup>2</sup> + (&minus;1)<sup>2</sup> ] = <b>&radic;2</b></div>
        <div>• cos &theta; = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>, &nbsp; sin &theta; = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span> &rArr; &theta; lies in <b>Quadrant III</b>.</div>
        <div>&rArr; Principal argument &theta; = &minus;(&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span>) = <b>&minus;<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></b></div>
        <div style="margin-top: 6px;">Polar form:</div>
        <div>&rArr; <b><i>z</i> = &radic;2 [ cos(&minus;<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) + <i>i</i> sin(&minus;<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) ]</b></div>
        <div class="ans-box"><span class="ans-label">✓ Polar Form: </span><span class="ans-val">√2 [cos(−3π/4) + i sin(−3π/4)]</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Convert into polar form: <b>&minus;3</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = &minus;3 = &minus;3 + 0<i>i</i>.</div>
        <div>• Modulus <i>r</i> = &radic;[ (&minus;3)<sup>2</sup> + 0<sup>2</sup> ] = <b>3</b></div>
        <div>• cos &theta; = &minus;1, &nbsp; sin &theta; = 0 &rArr; &theta; lies along the negative real axis: <b>&theta; = &pi;</b>.</div>
        <div style="margin-top: 6px;">Polar form:</div>
        <div>&rArr; <b><i>z</i> = 3 (cos &pi; + <i>i</i> sin &pi;)</b></div>
        <div class="ans-box"><span class="ans-label">✓ Polar Form: </span><span class="ans-val">3 (cos π + i sin π)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Convert into polar form: <b>&radic;3 + <i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = &radic;3 + <i>i</i>.</div>
        <div>• Modulus <i>r</i> = &radic;[ (&radic;3)<sup>2</sup> + 1<sup>2</sup> ] = &radic;(3 + 1) = <b>2</b></div>
        <div>• cos &theta; = <span class="frac"><span class="num">&radic;3</span><span class="den">2</span></span>, &nbsp; sin &theta; = <span class="frac"><span class="num">1</span><span class="den">2</span></span> &rArr; &theta; lies in <b>Quadrant I</b>.</div>
        <div>&rArr; &theta; = <b><span class="frac"><span class="num">&pi;</span><span class="den">6</span></span></b></div>
        <div style="margin-top: 6px;">Polar form:</div>
        <div>&rArr; <b><i>z</i> = 2 [ cos(<span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) + <i>i</i> sin(<span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) ]</b></div>
        <div class="ans-box"><span class="ans-label">✓ Polar Form: </span><span class="ans-val">2 [cos(π/6) + i sin(π/6)]</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Convert into polar form: <b><i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = <i>i</i> = 0 + 1<i>i</i>.</div>
        <div>• Modulus <i>r</i> = &radic;(0<sup>2</sup> + 1<sup>2</sup>) = <b>1</b></div>
        <div>• cos &theta; = 0, &nbsp; sin &theta; = 1 &rArr; &theta; lies along the positive imaginary axis: <b>&theta; = <span class="frac"><span class="num">&pi;</span><span class="den">2</span></span></b>.</div>
        <div style="margin-top: 6px;">Polar form:</div>
        <div>&rArr; <b><i>z</i> = 1 [ cos(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span>) + <i>i</i> sin(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span>) ]</b> = <b>cos(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span>) + <i>i</i> sin(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span>)</b></div>
        <div class="ans-box"><span class="ans-label">✓ Polar Form: </span><span class="ans-val">cos(π/2) + i sin(π/2)</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise4_2
};
