const { styleBlock, themeColor } = require('./ch3_common');

function getExercise3_1() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #7C4DFF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #7C4DFF;">
      📘 Exercise 3.1 &bull; Angles, Degrees &amp; Radian Measures
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Find the radian measures corresponding to the following degree measures:<br/>
      <b>(i)</b> 25&deg; &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(ii)</b> &minus;47&deg; 30&prime; &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(iii)</b> 240&deg; &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(iv)</b> 520&deg;
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>We know the standard conversion relation between degrees and radians:</div>
        <div>&rArr; <b>180&deg; = &pi; radian</b> &nbsp;&rArr;&nbsp; <b>1&deg; = <span class="frac"><span class="num">&pi;</span><span class="den">180</span></span> radian</b></div>

        <div style="margin-top: 10px; color: #B388FF; font-weight: 700;">(i) 25&deg;:</div>
        <div>&rArr; Radian measure = 25 &times; <span class="frac"><span class="num">&pi;</span><span class="den">180</span></span> = <span class="frac"><span class="num">5&pi;</span><span class="den">36</span></span> radian</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">5π</span><span class="den">36</span></span> radian</span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(ii) &minus;47&deg; 30&prime;:</div>
        <div>&rArr; Since 60&prime; = 1&deg;, we have 30&prime; = <span class="frac"><span class="num">30</span><span class="den">60</span></span>&deg; = <span class="frac"><span class="num">1</span><span class="den">2</span></span>&deg;.</div>
        <div>&rArr; &minus;47&deg; 30&prime; = &minus;(47 + <span class="frac"><span class="num">1</span><span class="den">2</span></span>)&deg; = &minus;<span class="frac"><span class="num">95</span><span class="den">2</span></span>&deg;</div>
        <div>&rArr; Radian measure = &minus;<span class="frac"><span class="num">95</span><span class="den">2</span></span> &times; <span class="frac"><span class="num">&pi;</span><span class="den">180</span></span> = &minus;<span class="frac"><span class="num">19&pi;</span><span class="den">2 &times; 36</span></span> = <b>&minus;<span class="frac"><span class="num">19&pi;</span><span class="den">72</span></span> radian</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">−<span class="frac"><span class="num">19π</span><span class="den">72</span></span> radian</span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(iii) 240&deg;:</div>
        <div>&rArr; Radian measure = 240 &times; <span class="frac"><span class="num">&pi;</span><span class="den">180</span></span> = <span class="frac"><span class="num">4&pi;</span><span class="den">3</span></span> radian</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">4π</span><span class="den">3</span></span> radian</span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(iv) 520&deg;:</div>
        <div>&rArr; Radian measure = 520 &times; <span class="frac"><span class="num">&pi;</span><span class="den">180</span></span> = <span class="frac"><span class="num">26&pi;</span><span class="den">9</span></span> radian</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">26π</span><span class="den">9</span></span> radian</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Find the degree measures corresponding to the following radian measures (Use &pi; = <span class="frac"><span class="num">22</span><span class="den">7</span></span>):<br/>
      <b>(i)</b> <span class="frac"><span class="num">11</span><span class="den">16</span></span> &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(ii)</b> &minus;4 &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(iii)</b> <span class="frac"><span class="num">5&pi;</span><span class="den">3</span></span> &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(iv)</b> <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>We know the standard conversion relation from radians to degrees:</div>
        <div>&rArr; <b>1 radian = <span class="frac"><span class="num">180&deg;</span><span class="den">&pi;</span></span></b></div>

        <div style="margin-top: 10px; color: #B388FF; font-weight: 700;">(i) <span class="frac"><span class="num">11</span><span class="den">16</span></span> radian:</div>
        <div>&rArr; Degree measure = <span class="frac"><span class="num">11</span><span class="den">16</span></span> &times; <span class="frac"><span class="num">180</span><span class="den">&pi;</span></span> = <span class="frac"><span class="num">11</span><span class="den">16</span></span> &times; <span class="frac"><span class="num">180 &times; 7</span><span class="den">22</span></span></div>
        <div>&rArr; = <span class="frac"><span class="num">45 &times; 7</span><span class="den">8</span></span> = <span class="frac"><span class="num">315</span><span class="den">8</span></span>&deg; = 39<span class="frac"><span class="num">3</span><span class="den">8</span></span>&deg;</div>
        <div>&rArr; Converting fractional degrees to minutes (1&deg; = 60&prime;):</div>
        <div>&nbsp;&nbsp;&bull; <span class="frac"><span class="num">3</span><span class="den">8</span></span> &times; 60&prime; = <span class="frac"><span class="num">45</span><span class="den">2</span></span>&prime; = 22<span class="frac"><span class="num">1</span><span class="den">2</span></span>&prime;</div>
        <div>&rArr; Converting fractional minutes to seconds (1&prime; = 60&Prime;):</div>
        <div>&nbsp;&nbsp;&bull; <span class="frac"><span class="num">1</span><span class="den">2</span></span> &times; 60&Prime; = 30&Prime;</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">39° 22′ 30″</span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(ii) &minus;4 radian:</div>
        <div>&rArr; Degree measure = &minus;4 &times; <span class="frac"><span class="num">180</span><span class="den">&pi;</span></span> = &minus;4 &times; <span class="frac"><span class="num">180 &times; 7</span><span class="den">22</span></span> = &minus;<span class="frac"><span class="num">2520</span><span class="den">11</span></span>&deg;</div>
        <div>&rArr; = &minus;(229 + <span class="frac"><span class="num">1</span><span class="den">11</span></span>)&deg;</div>
        <div>&rArr; Converting fraction to minutes: <span class="frac"><span class="num">1</span><span class="den">11</span></span> &times; 60&prime; = <span class="frac"><span class="num">60</span><span class="den">11</span></span>&prime; = 5<span class="frac"><span class="num">5</span><span class="den">11</span></span>&prime;</div>
        <div>&rArr; Converting fraction to seconds: <span class="frac"><span class="num">5</span><span class="den">11</span></span> &times; 60&Prime; = <span class="frac"><span class="num">300</span><span class="den">11</span></span>&Prime; &approx; 27.27&Prime; &approx; 27&Prime;</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">−229° 5′ 27″ (approx.)</span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(iii) <span class="frac"><span class="num">5&pi;</span><span class="den">3</span></span> radian:</div>
        <div>&rArr; Degree measure = <span class="frac"><span class="num">5&pi;</span><span class="den">3</span></span> &times; <span class="frac"><span class="num">180</span><span class="den">&pi;</span></span> = 5 &times; 60&deg; = <b>300&deg;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">300°</span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(iv) <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span> radian:</div>
        <div>&rArr; Degree measure = <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span> &times; <span class="frac"><span class="num">180</span><span class="den">&pi;</span></span> = 7 &times; 30&deg; = <b>210&deg;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">210°</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      A wheel makes <b>360 revolutions</b> in one minute. Through how many radians does it turn in one second?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>&rArr; Number of revolutions in 1 minute (60 seconds) = 360</div>
        <div>&rArr; Number of revolutions in 1 second = <span class="frac"><span class="num">360</span><span class="den">60</span></span> = <b>6 revolutions</b></div>
        <div style="margin-top: 8px;">We know that in one complete revolution:</div>
        <div>&rArr; Angle turned = <b>2&pi; radians</b></div>
        <div style="margin-top: 6px;">Therefore, in 6 revolutions:</div>
        <div>&rArr; Total radians turned in 1 second = 6 &times; 2&pi; = <b>12&pi; radians</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">12π radians in one second.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Find the degree measure of the angle subtended at the centre of a circle of <b>radius 100 cm</b> by an arc of <b>length 22 cm</b> (Use &pi; = <span class="frac"><span class="num">22</span><span class="den">7</span></span>).
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>&rArr; Radius of circle, <b><i>r</i> = 100 cm</b></div>
        <div>&rArr; Arc length, <b><i>l</i> = 22 cm</b></div>
        <div style="margin-top: 6px;">By the arc-length formula: <b>&theta; = <span class="frac"><span class="num"><i>l</i></span><span class="den"><i>r</i></span></span></b> (where &theta; is in radians):</div>
        <div>&rArr; &theta; = <span class="frac"><span class="num">22</span><span class="den">100</span></span> radian</div>
        <div style="margin-top: 8px;">Converting &theta; to degrees:</div>
        <div>&rArr; &theta; = <span class="frac"><span class="num">22</span><span class="den">100</span></span> &times; <span class="frac"><span class="num">180</span><span class="den">&pi;</span></span> = <span class="frac"><span class="num">22</span><span class="den">100</span></span> &times; <span class="frac"><span class="num">180 &times; 7</span><span class="den">22</span></span></div>
        <div>&rArr; &theta; = <span class="frac"><span class="num">1260</span><span class="den">100</span></span>&deg; = <span class="frac"><span class="num">126</span><span class="den">10</span></span>&deg; = 12<span class="frac"><span class="num">3</span><span class="den">5</span></span>&deg;</div>
        <div>&rArr; Converting fraction to minutes (1&deg; = 60&prime;):</div>
        <div>&nbsp;&nbsp;&bull; <span class="frac"><span class="num">3</span><span class="den">5</span></span> &times; 60&prime; = 36&prime;</div>
        <div>&rArr; &theta; = <b>12&deg; 36&prime;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">12° 36′</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      In a circle of <b>diameter 40 cm</b>, the length of a chord is <b>20 cm</b>. Find the length of minor arc of the chord.
    </div>

    <!-- Standalone Circle Chord SVG Diagram -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="220" fill="#FFFFFF" rx="8" />
        <text x="160" y="22" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#4A148C" text-anchor="middle">Equilateral Triangle in Circle: Chord = Radius</text>
        
        <!-- Circle -->
        <circle cx="160" cy="120" r="80" fill="#F3E5F5" stroke="#7C4DFF" stroke-width="2.5" />
        
        <!-- Center O -->
        <circle cx="160" cy="120" r="4" fill="#4A148C" />
        <text x="160" y="112" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#4A148C" text-anchor="middle">O</text>

        <!-- Points A and B on Circle -->
        <!-- Center is (160, 120), radius 80. Angle -30 deg and +30 deg from bottom -->
        <circle cx="120" cy="189" r="4.5" fill="#7C4DFF" />
        <text x="110" y="202" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#4A148C">A</text>

        <circle cx="200" cy="189" r="4.5" fill="#7C4DFF" />
        <text x="206" y="202" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#4A148C">B</text>

        <!-- Radii OA and OB -->
        <line x1="160" y1="120" x2="120" y2="189" stroke="#7C4DFF" stroke-width="2" />
        <line x1="160" y1="120" x2="200" y2="189" stroke="#7C4DFF" stroke-width="2" />

        <!-- Chord AB -->
        <line x1="120" y1="189" x2="200" y2="189" stroke="#E91E63" stroke-width="2.5" />
        <text x="160" y="182" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="bold" fill="#C2185B" text-anchor="middle">Chord = 20 cm</text>

        <!-- Angle Arc at Center -->
        <path d="M 148 140 A 25 25 0 0 0 172 140" fill="none" stroke="#FF5722" stroke-width="2" />
        <text x="160" y="156" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#E64A19" text-anchor="middle">θ = 60°</text>

        <!-- Radii labels -->
        <text x="130" y="150" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="bold" fill="#7C4DFF" text-anchor="middle">20 cm</text>
        <text x="190" y="150" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="bold" fill="#7C4DFF" text-anchor="middle">20 cm</text>
      </svg>
      <div class="diagram-caption">💡 Equilateral Triangle: OA = OB = AB = 20 cm &rArr; Central Angle θ = 60° = π/3 rad</div>
    </div>

    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given circle specifications:</div>
        <div>&rArr; Diameter = 40 cm &rArr; Radius, <b><i>r</i> = <span class="frac"><span class="num">40</span><span class="den">2</span></span> = 20 cm</b></div>
        <div>&rArr; Length of chord AB = <b>20 cm</b></div>
        <div style="margin-top: 6px;">In &Delta;OAB:</div>
        <div>&rArr; OA = OB = 20 cm <span class="reason">(Radii of circle)</span></div>
        <div>&rArr; AB = 20 cm <span class="reason">(Given chord length)</span></div>
        <div>&rArr; Since all three sides are equal, <b>&Delta;OAB is an equilateral triangle</b>.</div>
        <div>&rArr; Therefore, central angle &theta; = 60&deg; = 60 &times; <span class="frac"><span class="num">&pi;</span><span class="den">180</span></span> = <b><span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> radian</b>.</div>
        <div style="margin-top: 8px;">By the arc-length formula <b><i>l</i> = <i>r</i>&theta;</b>:</div>
        <div>&rArr; Arc length = 20 &times; <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = <b><span class="frac"><span class="num">20&pi;</span><span class="den">3</span></span> cm</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Length of minor arc = <span class="frac"><span class="num">20π</span><span class="den">3</span></span> cm</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      If in two circles, arcs of the same length subtend angles <b>60&deg;</b> and <b>75&deg;</b> at the centre, find the ratio of their radii.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let the radii of the two circles be <i>r</i><sub>1</sub> and <i>r</i><sub>2</sub>, and let the common arc length be <i>l</i>.</div>
        <div style="margin-top: 6px;">Converting subtended angles into radians:</div>
        <div>&rArr; &theta;<sub>1</sub> = 60&deg; = 60 &times; <span class="frac"><span class="num">&pi;</span><span class="den">180</span></span> = <b><span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> radian</b></div>
        <div>&rArr; &theta;<sub>2</sub> = 75&deg; = 75 &times; <span class="frac"><span class="num">&pi;</span><span class="den">180</span></span> = <b><span class="frac"><span class="num">5&pi;</span><span class="den">12</span></span> radian</b></div>
        <div style="margin-top: 8px;">Using the formula <i>l</i> = <i>r</i>&theta;:</div>
        <div>&rArr; <i>l</i> = <i>r</i><sub>1</sub> &theta;<sub>1</sub> = <i>r</i><sub>1</sub>(<span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>)</div>
        <div>&rArr; <i>l</i> = <i>r</i><sub>2</sub> &theta;<sub>2</sub> = <i>r</i><sub>2</sub>(<span class="frac"><span class="num">5&pi;</span><span class="den">12</span></span>)</div>
        <div style="margin-top: 8px;">Equating the two expressions for <i>l</i>:</div>
        <div>&rArr; <i>r</i><sub>1</sub> &times; <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = <i>r</i><sub>2</sub> &times; <span class="frac"><span class="num">5&pi;</span><span class="den">12</span></span></div>
        <div>&rArr; <span class="frac"><span class="num"><i>r</i><sub>1</sub></span><span class="den"><i>r</i><sub>2</sub></span></span> = <span class="frac"><span class="num">5&pi; / 12</span><span class="den">&pi; / 3</span></span> = <span class="frac"><span class="num">5</span><span class="den">12</span></span> &times; <span class="frac"><span class="num">3</span><span class="den">1</span></span> = <span class="frac"><span class="num">5</span><span class="den">4</span></span></div>
        <div>&rArr; <b><i>r</i><sub>1</sub> : <i>r</i><sub>2</sub> = 5 : 4</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Ratio of radii = 5 : 4</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Find the angle in radian through which a pendulum swings if its length is <b>75 cm</b> and the tip describes an arc of length:<br/>
      <b>(i)</b> 10 cm &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(ii)</b> 15 cm &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(iii)</b> 21 cm
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>The pendulum acts as the radius of the circular path described by its tip:</div>
        <div>&rArr; Radius, <b><i>r</i> = 75 cm</b></div>
        <div>By arc-length formula: <b>&theta; = <span class="frac"><span class="num"><i>l</i></span><span class="den"><i>r</i></span></span> radian</b></div>

        <div style="margin-top: 10px; color: #B388FF; font-weight: 700;">(i) For arc length <i>l</i> = 10 cm:</div>
        <div>&rArr; &theta; = <span class="frac"><span class="num">10</span><span class="den">75</span></span> = <b><span class="frac"><span class="num">2</span><span class="den">15</span></span> radian</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">2</span><span class="den">15</span></span> radian</span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(ii) For arc length <i>l</i> = 15 cm:</div>
        <div>&rArr; &theta; = <span class="frac"><span class="num">15</span><span class="den">75</span></span> = <b><span class="frac"><span class="num">1</span><span class="den">5</span></span> radian</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">1</span><span class="den">5</span></span> radian</span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(iii) For arc length <i>l</i> = 21 cm:</div>
        <div>&rArr; &theta; = <span class="frac"><span class="num">21</span><span class="den">75</span></span> = <b><span class="frac"><span class="num">7</span><span class="den">25</span></span> radian</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">7</span><span class="den">25</span></span> radian</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise3_1
};
