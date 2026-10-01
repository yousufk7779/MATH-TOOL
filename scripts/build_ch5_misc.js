const { themeColor, accentColor, styleBlock, frac } = require('./ch5_common');

function makeSegmentNumberLineSvg(minVal, maxVal, ticks, segStart, segEnd, isStartOpen, isEndOpen, isRayRight, labelText) {
  const width = 500;
  const height = 90;
  const lineY = 45;
  const startX = 40;
  const endX = 460;
  const scale = (endX - startX) / (maxVal - minVal);
  const getX = (val) => startX + (val - minVal) * scale;

  let ticksSvg = '';
  ticks.forEach(t => {
    const tx = getX(t);
    ticksSvg += `<line x1="${tx}" y1="${lineY - 6}" x2="${tx}" y2="${lineY + 6}" stroke="#64748B" stroke-width="1.5" />`;
    ticksSvg += `<text x="${tx}" y="${lineY + 22}" fill="#334155" font-size="11" font-weight="600" text-anchor="middle" font-family="sans-serif">${t}</text>`;
  });

  let segSvg = '';
  const rayColor = "#00C853";
  const x1 = getX(segStart);

  if (isRayRight) {
    segSvg += `<line x1="${x1}" y1="${lineY}" x2="${endX + 15}" stroke="${rayColor}" stroke-width="4.5" stroke-linecap="round" />`;
    segSvg += `<polygon points="${endX + 22},${lineY} ${endX + 10},${lineY - 5} ${endX + 10},${lineY + 5}" fill="${rayColor}" />`;
    if (isStartOpen) {
      segSvg += `<circle cx="${x1}" cy="${lineY}" r="6" fill="#FFFFFF" stroke="${rayColor}" stroke-width="3" />`;
    } else {
      segSvg += `<circle cx="${x1}" cy="${lineY}" r="6" fill="${rayColor}" stroke="#1E293B" stroke-width="1.5" />`;
    }
  } else {
    const x2 = getX(segEnd);
    segSvg += `<line x1="${x1}" y1="${lineY}" x2="${x2}" stroke="${rayColor}" stroke-width="4.5" stroke-linecap="round" />`;
    if (isStartOpen) {
      segSvg += `<circle cx="${x1}" cy="${lineY}" r="6" fill="#FFFFFF" stroke="${rayColor}" stroke-width="3" />`;
    } else {
      segSvg += `<circle cx="${x1}" cy="${lineY}" r="6" fill="${rayColor}" stroke="#1E293B" stroke-width="1.5" />`;
    }
    if (isEndOpen) {
      segSvg += `<circle cx="${x2}" cy="${lineY}" r="6" fill="#FFFFFF" stroke="${rayColor}" stroke-width="3" />`;
    } else {
      segSvg += `<circle cx="${x2}" cy="${lineY}" r="6" fill="${rayColor}" stroke="#1E293B" stroke-width="1.5" />`;
    }
  }

  return `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <line x1="${startX - 20}" y1="${lineY}" x2="${endX + 20}" stroke="#1E293B" stroke-width="2" />
      <polygon points="${startX - 25},${lineY} ${startX - 18},${lineY - 4} ${startX - 18},${lineY + 4}" fill="#1E293B" />
      <polygon points="${endX + 25},${lineY} ${endX + 18},${lineY - 4} ${endX + 18},${lineY + 4}" fill="#1E293B" />
      ${ticksSvg}
      ${segSvg}
    </svg>
    <div class="diagram-caption">📌 Number Line Graph: <span style="color: ${themeColor}; font-weight:700;">${labelText}</span></div>
  </div>`;
}

function getMiscellaneousExercise() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Linear Inequalities &bull; Miscellaneous Exercise
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Double Inequalities &bull; Simultaneous One-Variable Systems &bull; Mixture Problems &bull; Real-World Modeling
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Solve the inequality: <b>2 &le; 3<i>x</i> &minus; 4 &le; 5</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given double inequality: <b>2 &le; 3<i>x</i> &minus; 4 &le; 5</b></div>
        <div>Adding 4 to all parts:</div>
        <div>&rArr; 2 + 4 &le; 3<i>x</i> &minus; 4 + 4 &le; 5 + 4</div>
        <div>&rArr; 6 &le; 3<i>x</i> &le; 9</div>
        <div>Dividing all parts by 3:</div>
        <div>&rArr; ${frac('6', '3')} &le; ${frac('3<i>x</i>', '3')} &le; ${frac('9', '3')}</div>
        <div>&rArr; <b>2 &le; <i>x</i> &le; 3</b></div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; [2, 3]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Solve the inequality: <b>6 &le; &minus;3(2<i>x</i> &minus; 4) &lt; 12</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given double inequality: <b>6 &le; &minus;3(2<i>x</i> &minus; 4) &lt; 12</b></div>
        <div>Dividing throughout by 3:</div>
        <div>&rArr; 2 &le; &minus;(2<i>x</i> &minus; 4) &lt; 4</div>
        <div>Multiplying throughout by &minus;1 (reverses the inequality signs):</div>
        <div>&rArr; &minus;2 &ge; 2<i>x</i> &minus; 4 &gt; &minus;4</div>
        <div>Rewriting in standard ascending order:</div>
        <div>&rArr; &minus;4 &lt; 2<i>x</i> &minus; 4 &le; &minus;2</div>
        <div>Adding 4 to all parts:</div>
        <div>&rArr; &minus;4 + 4 &lt; 2<i>x</i> &minus; 4 + 4 &le; &minus;2 + 4</div>
        <div>&rArr; 0 &lt; 2<i>x</i> &le; 2</div>
        <div>Dividing throughout by 2:</div>
        <div>&rArr; <b>0 &lt; <i>x</i> &le; 1</b></div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (0, 1]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Solve the inequality: <b>&minus;3 &le; 4 &minus; ${frac('7<i>x</i>', '2')} &le; 18</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given double inequality: <b>&minus;3 &le; 4 &minus; ${frac('7<i>x</i>', '2')} &le; 18</b></div>
        <div>Subtracting 4 from all parts:</div>
        <div>&rArr; &minus;3 &minus; 4 &le; &minus;${frac('7<i>x</i>', '2')} &le; 18 &minus; 4</div>
        <div>&rArr; &minus;7 &le; &minus;${frac('7<i>x</i>', '2')} &le; 14</div>
        <div>Multiplying throughout by &minus;2 (reversing inequality signs):</div>
        <div>&rArr; (&minus;7) &times; (&minus;2) &ge; 7<i>x</i> &ge; 14 &times; (&minus;2)</div>
        <div>&rArr; 14 &ge; 7<i>x</i> &ge; &minus;28</div>
        <div>Rewriting in standard ascending order:</div>
        <div>&rArr; &minus;28 &le; 7<i>x</i> &le; 14</div>
        <div>Dividing throughout by 7:</div>
        <div>&rArr; <b>&minus;4 &le; <i>x</i> &le; 2</b></div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; [&minus;4, 2]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Solve the inequality: <b>&minus;15 &lt; ${frac('3(<i>x</i> &minus; 2)', '5')} &le; 0</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given double inequality: <b>&minus;15 &lt; ${frac('3(<i>x</i> &minus; 2)', '5')} &le; 0</b></div>
        <div>Multiplying throughout by 5:</div>
        <div>&rArr; &minus;15 &times; 5 &lt; 3(<i>x</i> &minus; 2) &le; 0 &times; 5</div>
        <div>&rArr; &minus;75 &lt; 3(<i>x</i> &minus; 2) &le; 0</div>
        <div>Dividing throughout by 3:</div>
        <div>&rArr; &minus;25 &lt; <i>x</i> &minus; 2 &le; 0</div>
        <div>Adding 2 to all parts:</div>
        <div>&rArr; &minus;25 + 2 &lt; <i>x</i> &le; 0 + 2</div>
        <div>&rArr; <b>&minus;23 &lt; <i>x</i> &le; 2</b></div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;23, 2]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Solve the inequality: <b>&minus;12 &lt; 4 &minus; ${frac('3<i>x</i>', '&minus;5')} &le; 2</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Note that &minus;${frac('3<i>x</i>', '&minus;5')} = +${frac('3<i>x</i>', '5')}.</div>
        <div>Thus, the inequality simplifies to:</div>
        <div>&minus;12 &lt; 4 + ${frac('3<i>x</i>', '5')} &le; 2</div>
        <div>Subtracting 4 from all parts:</div>
        <div>&rArr; &minus;12 &minus; 4 &lt; ${frac('3<i>x</i>', '5')} &le; 2 &minus; 4</div>
        <div>&rArr; &minus;16 &lt; ${frac('3<i>x</i>', '5')} &le; &minus;2</div>
        <div>Multiplying throughout by 5:</div>
        <div>&rArr; &minus;80 &lt; 3<i>x</i> &le; &minus;10</div>
        <div>Dividing throughout by 3:</div>
        <div>&rArr; &minus;${frac('80', '3')} &lt; <i>x</i> &le; &minus;${frac('10', '3')}</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;${frac('80', '3')}, &minus;${frac('10', '3')}]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Solve the inequality: <b>7 &le; ${frac('3<i>x</i> + 11', '2')} &le; 11</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given double inequality: <b>7 &le; ${frac('3<i>x</i> + 11', '2')} &le; 11</b></div>
        <div>Multiplying throughout by 2:</div>
        <div>&rArr; 14 &le; 3<i>x</i> + 11 &le; 22</div>
        <div>Subtracting 11 from all parts:</div>
        <div>&rArr; 14 &minus; 11 &le; 3<i>x</i> &le; 22 &minus; 11</div>
        <div>&rArr; 3 &le; 3<i>x</i> &le; 11</div>
        <div>Dividing throughout by 3:</div>
        <div>&rArr; <b>1 &le; <i>x</i> &le; ${frac('11', '3')}</b></div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; [1, ${frac('11', '3')}]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Solve the inequalities and represent the solution graphically on the number line:<br/>
      <b>5<i>x</i> + 1 &gt; &minus;24, &nbsp; 5<i>x</i> &minus; 1 &lt; 24</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Solving the first inequality:</div>
        <div>5<i>x</i> + 1 &gt; &minus;24 &rArr; 5<i>x</i> &gt; &minus;25 &rArr; <b><i>x</i> &gt; &minus;5</b> &nbsp;&nbsp;...(1)</div>
        <div>Solving the second inequality:</div>
        <div>5<i>x</i> &minus; 1 &lt; 24 &rArr; 5<i>x</i> &lt; 25 &rArr; <b><i>x</i> &lt; 5</b> &nbsp;&nbsp;...(2)</div>
        <div>Combining (1) and (2), the simultaneous solution is:</div>
        <div>&rArr; <b>&minus;5 &lt; <i>x</i> &lt; 5</b></div>
        ${makeSegmentNumberLineSvg(-8, 8, [-8, -6, -5, -4, -2, 0, 2, 4, 5, 6, 8], -5, 5, true, true, false, "(-5, 5) Open interval")}
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;5, 5)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Solve the inequalities and represent the solution graphically on the number line:<br/>
      <b>2(<i>x</i> &minus; 1) &lt; <i>x</i> + 5, &nbsp; 3(<i>x</i> + 2) &gt; 2 &minus; <i>x</i></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Solving the first inequality:</div>
        <div>2(<i>x</i> &minus; 1) &lt; <i>x</i> + 5 &rArr; 2<i>x</i> &minus; 2 &lt; <i>x</i> + 5 &rArr; <b><i>x</i> &lt; 7</b> &nbsp;&nbsp;...(1)</div>
        <div>Solving the second inequality:</div>
        <div>3(<i>x</i> + 2) &gt; 2 &minus; <i>x</i> &rArr; 3<i>x</i> + 6 &gt; 2 &minus; <i>x</i> &rArr; 4<i>x</i> &gt; &minus;4 &rArr; <b><i>x</i> &gt; &minus;1</b> &nbsp;&nbsp;...(2)</div>
        <div>Combining (1) and (2):</div>
        <div>&rArr; <b>&minus;1 &lt; <i>x</i> &lt; 7</b></div>
        ${makeSegmentNumberLineSvg(-4, 9, [-4, -2, -1, 0, 2, 4, 6, 7, 8], -1, 7, true, true, false, "(-1, 7) Open interval")}
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;1, 7)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Solve the inequalities and represent the solution graphically on the number line:<br/>
      <b>3<i>x</i> &minus; 7 &gt; 2(<i>x</i> &minus; 6), &nbsp; 6 &minus; <i>x</i> &gt; 11 &minus; 2<i>x</i></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Solving the first inequality:</div>
        <div>3<i>x</i> &minus; 7 &gt; 2<i>x</i> &minus; 12 &rArr; <b><i>x</i> &gt; &minus;5</b> &nbsp;&nbsp;...(1)</div>
        <div>Solving the second inequality:</div>
        <div>6 &minus; <i>x</i> &gt; 11 &minus; 2<i>x</i> &rArr; 2<i>x</i> &minus; <i>x</i> &gt; 11 &minus; 6 &rArr; <b><i>x</i> &gt; 5</b> &nbsp;&nbsp;...(2)</div>
        <div>The intersection of <i>x</i> &gt; &minus;5 and <i>x</i> &gt; 5 is:</div>
        <div>&rArr; <b><i>x</i> &gt; 5</b></div>
        ${makeSegmentNumberLineSvg(-6, 10, [-6, -5, -4, -2, 0, 2, 4, 5, 6, 8, 10], 5, 10, true, false, true, "(5, ∞) Ray extending right")}
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (5, &infin;)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Solve the inequalities and represent the solution graphically on the number line:<br/>
      <b>5(2<i>x</i> &minus; 7) &minus; 3(2<i>x</i> + 3) &le; 0, &nbsp; 2<i>x</i> + 19 &le; 6<i>x</i> + 47</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Solving the first inequality:</div>
        <div>10<i>x</i> &minus; 35 &minus; 6<i>x</i> &minus; 9 &le; 0</div>
        <div>&rArr; 4<i>x</i> &minus; 44 &le; 0 &rArr; 4<i>x</i> &le; 44 &rArr; <b><i>x</i> &le; 11</b> &nbsp;&nbsp;...(1)</div>
        <div>Solving the second inequality:</div>
        <div>2<i>x</i> + 19 &le; 6<i>x</i> + 47</div>
        <div>&rArr; 19 &minus; 47 &le; 6<i>x</i> &minus; 2<i>x</i></div>
        <div>&rArr; &minus;28 &le; 4<i>x</i> &rArr; <b><i>x</i> &ge; &minus;7</b> &nbsp;&nbsp;...(2)</div>
        <div>Combining (1) and (2):</div>
        <div>&rArr; <b>&minus;7 &le; <i>x</i> &le; 11</b></div>
        ${makeSegmentNumberLineSvg(-9, 13, [-8, -7, -6, -4, -2, 0, 2, 4, 6, 8, 10, 11, 12], -7, 11, false, false, false, "[-7, 11] Closed interval")}
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; [&minus;7, 11]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      A solution is to be kept between 68&deg; F and 77&deg; F. What is the range in temperature in degree Celsius (C) if the Celsius / Fahrenheit (F) conversion formula is given by <b>F = ${frac('9', '5')} C + 32</b>?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>According to the given condition:</div>
        <div>68 &lt; F &lt; 77</div>
        <div>Substituting F = ${frac('9', '5')} C + 32:</div>
        <div>&rArr; 68 &lt; ${frac('9', '5')} C + 32 &lt; 77</div>
        <div>Subtracting 32 from all parts:</div>
        <div>&rArr; 68 &minus; 32 &lt; ${frac('9', '5')} C &lt; 77 &minus; 32</div>
        <div>&rArr; 36 &lt; ${frac('9', '5')} C &lt; 45</div>
        <div>Multiplying throughout by ${frac('5', '9')}:</div>
        <div>&rArr; 36 &times; ${frac('5', '9')} &lt; C &lt; 45 &times; ${frac('5', '9')}</div>
        <div>&rArr; 4 &times; 5 &lt; C &lt; 5 &times; 5</div>
        <div>&rArr; <b>20&deg; C &lt; C &lt; 25&deg; C</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">The range in temperature in degree Celsius is between 20&deg;C and 25&deg;C (i.e., 20 &lt; C &lt; 25).</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      A solution of 8% boric acid is to be diluted by adding a 2% boric acid solution to it. The resulting mixture is to be more than 4%, but less than 6% boric acid. If we have 640 litres of the 8% solution, how many litres of the 2% solution will have to be added?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <b><i>x</i> litres</b> of 2% boric acid solution be added.</div>
        <div>Total volume of the resulting mixture = <b>(640 + <i>x</i>) litres</b>.</div>
        <div>Total acid content in the mixture = 8% of 640 + 2% of <i>x</i>:</div>
        <div>= ${frac('8', '100')} &times; 640 + ${frac('2', '100')} &times; <i>x</i> = ${frac('5120 + 2<i>x</i>', '100')}</div>
        <div>The resulting mixture must have acid concentration between 4% and 6%:</div>
        <div><b>4% of (640 + <i>x</i>) &lt; Total Acid &lt; 6% of (640 + <i>x</i>)</b></div>
        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Part 1: Left Inequality:</b></div>
        <div>${frac('4', '100')} (640 + <i>x</i>) &lt; ${frac('5120 + 2<i>x</i>', '100')}</div>
        <div>&rArr; 4(640 + <i>x</i>) &lt; 5120 + 2<i>x</i></div>
        <div>&rArr; 2560 + 4<i>x</i> &lt; 5120 + 2<i>x</i></div>
        <div>&rArr; 2<i>x</i> &lt; 2560 &rArr; <b><i>x</i> &lt; 1280</b> &nbsp;&nbsp;...(1)</div>
        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Part 2: Right Inequality:</b></div>
        <div>${frac('5120 + 2<i>x</i>', '100')} &lt; ${frac('6', '100')} (640 + <i>x</i>)</div>
        <div>&rArr; 5120 + 2<i>x</i> &lt; 6(640 + <i>x</i>)</div>
        <div>&rArr; 5120 + 2<i>x</i> &lt; 3840 + 6<i>x</i></div>
        <div>&rArr; 5120 &minus; 3840 &lt; 6<i>x</i> &minus; 2<i>x</i></div>
        <div>&rArr; 1280 &lt; 4<i>x</i> &rArr; <b><i>x</i> &gt; 320</b> &nbsp;&nbsp;...(2)</div>
        <div>Combining (1) and (2):</div>
        <div>&rArr; <b>320 &lt; <i>x</i> &lt; 1280</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">The number of litres of 2% boric acid solution added must be between 320 litres and 1280 litres.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 13 -->
  <div class="q-card">
    <div class="q-title">Question 13</div>
    <div class="q-text">
      How many litres of water will have to be added to 1125 litres of the 45% solution of acid so that the resulting mixture will contain more than 25% but less than 30% acid content?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <b><i>x</i> litres</b> of water be added. (Water contains 0% acid).</div>
        <div>Total volume of new mixture = <b>(1125 + <i>x</i>) litres</b>.</div>
        <div>Amount of pure acid present = 45% of 1125 = ${frac('45', '100')} &times; 1125 = 506.25 litres.</div>
        <div>The acid percentage must be between 25% and 30%:</div>
        <div>&rArr; <b>25% of (1125 + <i>x</i>) &lt; 45% of 1125 &lt; 30% of (1125 + <i>x</i>)</b></div>
        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Part 1: From 25% of (1125 + <i>x</i>) &lt; 45% of 1125:</b></div>
        <div>${frac('25', '100')} (1125 + <i>x</i>) &lt; ${frac('45', '100')} &times; 1125</div>
        <div>&rArr; 25(1125 + <i>x</i>) &lt; 45 &times; 1125</div>
        <div>&rArr; 1125 + <i>x</i> &lt; ${frac('45 &times; 1125', '25')} = 45 &times; 45 = 2025</div>
        <div>&rArr; <i>x</i> &lt; 2025 &minus; 1125 &rArr; <b><i>x</i> &lt; 900</b> &nbsp;&nbsp;...(1)</div>
        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Part 2: From 45% of 1125 &lt; 30% of (1125 + <i>x</i>):</b></div>
        <div>45 &times; 1125 &lt; 30(1125 + <i>x</i>)</div>
        <div>&rArr; ${frac('45 &times; 1125', '30')} &lt; 1125 + <i>x</i></div>
        <div>&rArr; 1.5 &times; 1125 &lt; 1125 + <i>x</i></div>
        <div>&rArr; 1687.5 &lt; 1125 + <i>x</i> &rArr; <b><i>x</i> &gt; 562.5</b> &nbsp;&nbsp;...(2)</div>
        <div>Combining (1) and (2):</div>
        <div>&rArr; <b>562.5 &lt; <i>x</i> &lt; 900</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">The amount of water added must be more than 562.5 litres and less than 900 litres.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 14 -->
  <div class="q-card">
    <div class="q-title">Question 14</div>
    <div class="q-text">
      IQ of a person is given by the formula:<br/>
      <div style="text-align: center; margin: 8px 0; font-size: 16px;"><b>IQ = ${frac('MA', 'CA')} &times; 100</b></div>
      where <b>MA</b> is mental age and <b>CA</b> is chronological age. If <b>80 &le; IQ &le; 140</b> for a group of 12-year-old children, find the range of their mental age.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>• Chronological age: <b>CA = 12 years</b></div>
        <div>• Range of IQ: <b>80 &le; IQ &le; 140</b></div>
        <div>Substituting IQ = ${frac('MA', '12')} &times; 100 into the inequality:</div>
        <div>&rArr; 80 &le; ${frac('MA', '12')} &times; 100 &le; 140</div>
        <div>Multiplying throughout by 12:</div>
        <div>&rArr; 80 &times; 12 &le; 100 &times; MA &le; 140 &times; 12</div>
        <div>&rArr; 960 &le; 100 &times; MA &le; 1680</div>
        <div>Dividing throughout by 100:</div>
        <div>&rArr; ${frac('960', '100')} &le; MA &le; ${frac('1680', '100')}</div>
        <div>&rArr; <b>9.6 &le; MA &le; 16.8</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">The range of mental age of the 12-year-old children is 9.6 &le; MA &le; 16.8 years.</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getMiscellaneousExercise
};
