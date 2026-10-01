const { themeColor, accentColor, styleBlock, frac } = require('./ch5_common');

function makeNumberLineSvg(minVal, maxVal, ticks, highlightStart, highlightEnd, isRayLeft, isRayRight, startOpen, endOpen, labelText) {
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
    ticksSvg += `<text x="${tx}" y="${lineY + 22}" fill="#334155" font-size="12" font-weight="600" text-anchor="middle" font-family="sans-serif">${t}</text>`;
  });

  let raySvg = '';
  const rayColor = "#00C853";
  if (isRayLeft) {
    const endPt = getX(highlightEnd);
    raySvg += `<line x1="${startX - 15}" y1="${lineY}" x2="${endPt}" stroke="${rayColor}" stroke-width="4.5" stroke-linecap="round" />`;
    raySvg += `<polygon points="${startX - 22},${lineY} ${startX - 10},${lineY - 5} ${startX - 10},${lineY + 5}" fill="${rayColor}" />`;
    if (endOpen) {
      raySvg += `<circle cx="${endPt}" cy="${lineY}" r="6" fill="#FFFFFF" stroke="${rayColor}" stroke-width="3" />`;
    } else {
      raySvg += `<circle cx="${endPt}" cy="${lineY}" r="6" fill="${rayColor}" stroke="#1E293B" stroke-width="1.5" />`;
    }
  } else if (isRayRight) {
    const startPt = getX(highlightStart);
    raySvg += `<line x1="${startPt}" y1="${lineY}" x2="${endX + 15}" stroke="${rayColor}" stroke-width="4.5" stroke-linecap="round" />`;
    raySvg += `<polygon points="${endX + 22},${lineY} ${endX + 10},${lineY - 5} ${endX + 10},${lineY + 5}" fill="${rayColor}" />`;
    if (startOpen) {
      raySvg += `<circle cx="${startPt}" cy="${lineY}" r="6" fill="#FFFFFF" stroke="${rayColor}" stroke-width="3" />`;
    } else {
      raySvg += `<circle cx="${startPt}" cy="${lineY}" r="6" fill="${rayColor}" stroke="#1E293B" stroke-width="1.5" />`;
    }
  }

  return `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Base Axis Line -->
      <line x1="${startX - 20}" y1="${lineY}" x2="${endX + 20}" stroke="#1E293B" stroke-width="2" />
      <polygon points="${startX - 25},${lineY} ${startX - 18},${lineY - 4} ${startX - 18},${lineY + 4}" fill="#1E293B" />
      <polygon points="${endX + 25},${lineY} ${endX + 18},${lineY - 4} ${endX + 18},${lineY + 4}" fill="#1E293B" />
      <!-- Tick Marks and Labels -->
      ${ticksSvg}
      <!-- Highlighted Ray -->
      ${raySvg}
    </svg>
    <div class="diagram-caption">📌 Number Line Representation: <span style="color: ${themeColor}; font-weight:700;">${labelText}</span></div>
  </div>`;
}

function getExercise5_1() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Linear Inequalities &bull; Exercise 5.1
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Linear Inequalities in One Variable &bull; Algebraic Solutions &bull; Number Line Graphs &bull; Real-Life Applications
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Solve <b>24<i>x</i> &lt; 100</b>, when:<br/>
      <b>(i)</b> <i>x</i> is a natural number.<br/>
      <b>(ii)</b> <i>x</i> is an integer.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>24<i>x</i> &lt; 100</b></div>
        <div>Dividing both sides by 24:</div>
        <div>&rArr; <i>x</i> &lt; ${frac('100', '24')} &rArr; <i>x</i> &lt; ${frac('25', '6')} <span class="reason">[Dividing by positive number preserves inequality sign]</span></div>
        <div>Note that ${frac('25', '6')} = 4.166...</div>
        <div style="margin-top: 10px;"><b style="color: ${themeColor};">(i) When <i>x</i> is a natural number (<i>x</i> &isin; N):</b></div>
        <div>The natural numbers less than ${frac('25', '6')} are 1, 2, 3, and 4.</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val">{1, 2, 3, 4}</span>
        </div>
        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) When <i>x</i> is an integer (<i>x</i> &isin; Z):</b></div>
        <div>The integers less than ${frac('25', '6')} are ..., &minus;3, &minus;2, &minus;1, 0, 1, 2, 3, 4.</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val">{..., &minus;3, &minus;2, &minus;1, 0, 1, 2, 3, 4}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Solve <b>&minus;12<i>x</i> &gt; 30</b>, when:<br/>
      <b>(i)</b> <i>x</i> is a natural number.<br/>
      <b>(ii)</b> <i>x</i> is an integer.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>&minus;12<i>x</i> &gt; 30</b></div>
        <div>Dividing both sides by &minus;12 reverses the inequality symbol:</div>
        <div>&rArr; <i>x</i> &lt; ${frac('30', '&minus;12')} &rArr; <i>x</i> &lt; &minus;${frac('5', '2')} <span class="reason">[Rule: dividing by a negative number inverts the sign]</span></div>
        <div>Note that &minus;${frac('5', '2')} = &minus;2.5.</div>
        <div style="margin-top: 10px;"><b style="color: ${themeColor};">(i) When <i>x</i> is a natural number (<i>x</i> &isin; N):</b></div>
        <div>Natural numbers are positive integers {1, 2, 3, ...}. There is no natural number less than &minus;2.5.</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val">No solution (&empty;)</span>
        </div>
        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) When <i>x</i> is an integer (<i>x</i> &isin; Z):</b></div>
        <div>The integers less than &minus;2.5 are ..., &minus;5, &minus;4, &minus;3.</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val">{..., &minus;5, &minus;4, &minus;3}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Solve <b>5<i>x</i> &minus; 3 &lt; 7</b>, when:<br/>
      <b>(i)</b> <i>x</i> is an integer.<br/>
      <b>(ii)</b> <i>x</i> is a real number.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>5<i>x</i> &minus; 3 &lt; 7</b></div>
        <div>Adding 3 to both sides:</div>
        <div>&rArr; 5<i>x</i> &lt; 7 + 3 &rArr; 5<i>x</i> &lt; 10</div>
        <div>Dividing both sides by 5:</div>
        <div>&rArr; <i>x</i> &lt; 2</div>
        <div style="margin-top: 10px;"><b style="color: ${themeColor};">(i) When <i>x</i> is an integer (<i>x</i> &isin; Z):</b></div>
        <div>The integers less than 2 are ..., &minus;2, &minus;1, 0, 1.</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val">{..., &minus;2, &minus;1, 0, 1}</span>
        </div>
        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) When <i>x</i> is a real number (<i>x</i> &isin; R):</b></div>
        <div>All real numbers strictly less than 2 form the open interval (&minus;&infin;, 2).</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, 2)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Solve <b>3<i>x</i> + 8 &gt; 2</b>, when:<br/>
      <b>(i)</b> <i>x</i> is an integer.<br/>
      <b>(ii)</b> <i>x</i> is a real number.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>3<i>x</i> + 8 &gt; 2</b></div>
        <div>Subtracting 8 from both sides:</div>
        <div>&rArr; 3<i>x</i> &gt; 2 &minus; 8 &rArr; 3<i>x</i> &gt; &minus;6</div>
        <div>Dividing both sides by 3:</div>
        <div>&rArr; <i>x</i> &gt; &minus;2</div>
        <div style="margin-top: 10px;"><b style="color: ${themeColor};">(i) When <i>x</i> is an integer (<i>x</i> &isin; Z):</b></div>
        <div>The integers strictly greater than &minus;2 are &minus;1, 0, 1, 2, ...</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val">{&minus;1, 0, 1, 2, ...}</span>
        </div>
        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) When <i>x</i> is a real number (<i>x</i> &isin; R):</b></div>
        <div>All real numbers strictly greater than &minus;2 form the open interval (&minus;2, &infin;).</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;2, &infin;)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>4<i>x</i> + 3 &lt; 5<i>x</i> + 7</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>4<i>x</i> + 3 &lt; 5<i>x</i> + 7</b></div>
        <div>Subtracting 5<i>x</i> from both sides:</div>
        <div>&rArr; 4<i>x</i> &minus; 5<i>x</i> + 3 &lt; 7</div>
        <div>&rArr; &minus;<i>x</i> + 3 &lt; 7</div>
        <div>Subtracting 3 from both sides:</div>
        <div>&rArr; &minus;<i>x</i> &lt; 7 &minus; 3</div>
        <div>&rArr; &minus;<i>x</i> &lt; 4</div>
        <div>Multiplying both sides by &minus;1 (reverses the sign):</div>
        <div>&rArr; <i>x</i> &gt; &minus;4</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;4, &infin;)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>3<i>x</i> &minus; 7 &gt; 5<i>x</i> &minus; 1</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>3<i>x</i> &minus; 7 &gt; 5<i>x</i> &minus; 1</b></div>
        <div>Adding 7 to both sides:</div>
        <div>&rArr; 3<i>x</i> &gt; 5<i>x</i> &minus; 1 + 7 &rArr; 3<i>x</i> &gt; 5<i>x</i> + 6</div>
        <div>Subtracting 5<i>x</i> from both sides:</div>
        <div>&rArr; 3<i>x</i> &minus; 5<i>x</i> &gt; 6 &rArr; &minus;2<i>x</i> &gt; 6</div>
        <div>Dividing both sides by &minus;2 (reverses inequality sign):</div>
        <div>&rArr; <i>x</i> &lt; ${frac('6', '&minus;2')} &rArr; <i>x</i> &lt; &minus;3</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, &minus;3)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>3(<i>x</i> &minus; 1) &le; 2(<i>x</i> &minus; 3)</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>3(<i>x</i> &minus; 1) &le; 2(<i>x</i> &minus; 3)</b></div>
        <div>Expanding brackets:</div>
        <div>&rArr; 3<i>x</i> &minus; 3 &le; 2<i>x</i> &minus; 6</div>
        <div>Adding 3 to both sides:</div>
        <div>&rArr; 3<i>x</i> &le; 2<i>x</i> &minus; 6 + 3 &rArr; 3<i>x</i> &le; 2<i>x</i> &minus; 3</div>
        <div>Subtracting 2<i>x</i> from both sides:</div>
        <div>&rArr; 3<i>x</i> &minus; 2<i>x</i> &le; &minus;3 &rArr; <i>x</i> &le; &minus;3</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, &minus;3]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>3(2 &minus; <i>x</i>) &ge; 2(1 &minus; <i>x</i>)</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>3(2 &minus; <i>x</i>) &ge; 2(1 &minus; <i>x</i>)</b></div>
        <div>Expanding brackets:</div>
        <div>&rArr; 6 &minus; 3<i>x</i> &ge; 2 &minus; 2<i>x</i></div>
        <div>Adding 2<i>x</i> to both sides:</div>
        <div>&rArr; 6 &minus; <i>x</i> &ge; 2</div>
        <div>Subtracting 6 from both sides:</div>
        <div>&rArr; &minus;<i>x</i> &ge; 2 &minus; 6 &rArr; &minus;<i>x</i> &ge; &minus;4</div>
        <div>Multiplying by &minus;1 (reverses sign):</div>
        <div>&rArr; <i>x</i> &le; 4</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, 4]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b><i>x</i> + ${frac('<i>x</i>', '2')} + ${frac('<i>x</i>', '3')} &lt; 11</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <i>x</i> + ${frac('<i>x</i>', '2')} + ${frac('<i>x</i>', '3')} &lt; 11</div>
        <div>Factoring out <i>x</i>:</div>
        <div>&rArr; <i>x</i> (1 + ${frac('1', '2')} + ${frac('1', '3')}) &lt; 11</div>
        <div>Taking LCM of denominators (LCM = 6):</div>
        <div>&rArr; <i>x</i> (${frac('6 + 3 + 2', '6')}) &lt; 11</div>
        <div>&rArr; <i>x</i> (${frac('11', '6')}) &lt; 11</div>
        <div>Dividing both sides by 11:</div>
        <div>&rArr; ${frac('<i>x</i>', '6')} &lt; 1</div>
        <div>Multiplying both sides by 6:</div>
        <div>&rArr; <i>x</i> &lt; 6</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, 6)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>${frac('<i>x</i>', '3')} &gt; ${frac('<i>x</i>', '2')} + 1</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: ${frac('<i>x</i>', '3')} &gt; ${frac('<i>x</i>', '2')} + 1</div>
        <div>Transposing ${frac('<i>x</i>', '2')} to LHS:</div>
        <div>&rArr; ${frac('<i>x</i>', '3')} &minus; ${frac('<i>x</i>', '2')} &gt; 1</div>
        <div>Taking LCM = 6:</div>
        <div>&rArr; ${frac('2<i>x</i> &minus; 3<i>x</i>', '6')} &gt; 1</div>
        <div>&rArr; ${frac('&minus;<i>x</i>', '6')} &gt; 1</div>
        <div>Multiplying both sides by 6:</div>
        <div>&rArr; &minus;<i>x</i> &gt; 6</div>
        <div>Multiplying both sides by &minus;1 (reverses sign):</div>
        <div>&rArr; <i>x</i> &lt; &minus;6</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, &minus;6)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>${frac('3(<i>x</i> &minus; 2)', '5')} &le; ${frac('5(2 &minus; <i>x</i>)', '3')}</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: ${frac('3(<i>x</i> &minus; 2)', '5')} &le; ${frac('5(2 &minus; <i>x</i>)', '3')}</div>
        <div>Multiplying both sides by 15 (LCM of 5 and 3):</div>
        <div>&rArr; 3 &times; 3(<i>x</i> &minus; 2) &le; 5 &times; 5(2 &minus; <i>x</i>)</div>
        <div>&rArr; 9(<i>x</i> &minus; 2) &le; 25(2 &minus; <i>x</i>)</div>
        <div>&rArr; 9<i>x</i> &minus; 18 &le; 50 &minus; 25<i>x</i></div>
        <div>Adding 25<i>x</i> to both sides:</div>
        <div>&rArr; 9<i>x</i> + 25<i>x</i> &minus; 18 &le; 50 &rArr; 34<i>x</i> &minus; 18 &le; 50</div>
        <div>Adding 18 to both sides:</div>
        <div>&rArr; 34<i>x</i> &le; 68</div>
        <div>Dividing both sides by 34:</div>
        <div>&rArr; <i>x</i> &le; 2</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, 2]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>${frac('1', '2')} (${frac('3<i>x</i>', '5')} + 4) &ge; ${frac('1', '3')} (<i>x</i> &minus; 6)</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: ${frac('1', '2')} (${frac('3<i>x</i>', '5')} + 4) &ge; ${frac('1', '3')} (<i>x</i> &minus; 6)</div>
        <div>Multiplying both sides by 6:</div>
        <div>&rArr; 3 (${frac('3<i>x</i>', '5')} + 4) &ge; 2 (<i>x</i> &minus; 6)</div>
        <div>&rArr; ${frac('9<i>x</i>', '5')} + 12 &ge; 2<i>x</i> &minus; 12</div>
        <div>Rearranging terms:</div>
        <div>&rArr; 12 + 12 &ge; 2<i>x</i> &minus; ${frac('9<i>x</i>', '5')}</div>
        <div>&rArr; 24 &ge; ${frac('10<i>x</i> &minus; 9<i>x</i>', '5')} &rArr; 24 &ge; ${frac('<i>x</i>', '5')}</div>
        <div>Multiplying both sides by 5:</div>
        <div>&rArr; 120 &ge; <i>x</i> &rArr; <i>x</i> &le; 120</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, 120]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 13 -->
  <div class="q-card">
    <div class="q-title">Question 13</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>2(2<i>x</i> + 3) &minus; 10 &lt; 6(<i>x</i> &minus; 2)</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: 2(2<i>x</i> + 3) &minus; 10 &lt; 6(<i>x</i> &minus; 2)</div>
        <div>Expanding brackets:</div>
        <div>&rArr; 4<i>x</i> + 6 &minus; 10 &lt; 6<i>x</i> &minus; 12</div>
        <div>&rArr; 4<i>x</i> &minus; 4 &lt; 6<i>x</i> &minus; 12</div>
        <div>Rearranging terms:</div>
        <div>&rArr; 4<i>x</i> &minus; 6<i>x</i> &lt; &minus;12 + 4</div>
        <div>&rArr; &minus;2<i>x</i> &lt; &minus;8</div>
        <div>Dividing both sides by &minus;2 (reversing sign):</div>
        <div>&rArr; <i>x</i> &gt; 4</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (4, &infin;)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 14 -->
  <div class="q-card">
    <div class="q-title">Question 14</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>37 &minus; (3<i>x</i> + 5) &ge; 9<i>x</i> &minus; 8(<i>x</i> &minus; 3)</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: 37 &minus; (3<i>x</i> + 5) &ge; 9<i>x</i> &minus; 8(<i>x</i> &minus; 3)</div>
        <div>Expanding both sides:</div>
        <div>&rArr; 37 &minus; 3<i>x</i> &minus; 5 &ge; 9<i>x</i> &minus; 8<i>x</i> + 24</div>
        <div>&rArr; 32 &minus; 3<i>x</i> &ge; <i>x</i> + 24</div>
        <div>Rearranging terms:</div>
        <div>&rArr; 32 &minus; 24 &ge; <i>x</i> + 3<i>x</i></div>
        <div>&rArr; 8 &ge; 4<i>x</i> &rArr; 2 &ge; <i>x</i> &rArr; <i>x</i> &le; 2</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, 2]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 15 -->
  <div class="q-card">
    <div class="q-title">Question 15</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>${frac('<i>x</i>', '4')} &lt; ${frac('5<i>x</i> &minus; 2', '3')} &minus; ${frac('7<i>x</i> &minus; 3', '5')}</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: ${frac('<i>x</i>', '4')} &lt; ${frac('5<i>x</i> &minus; 2', '3')} &minus; ${frac('7<i>x</i> &minus; 3', '5')}</div>
        <div>Simplifying RHS with LCM = 15:</div>
        <div>&rArr; ${frac('<i>x</i>', '4')} &lt; ${frac('5(5<i>x</i> &minus; 2) &minus; 3(7<i>x</i> &minus; 3)', '15')}</div>
        <div>&rArr; ${frac('<i>x</i>', '4')} &lt; ${frac('25<i>x</i> &minus; 10 &minus; 21<i>x</i> + 9', '15')}</div>
        <div>&rArr; ${frac('<i>x</i>', '4')} &lt; ${frac('4<i>x</i> &minus; 1', '15')}</div>
        <div>Cross multiplying by 60 (or multiplying both sides by 60):</div>
        <div>&rArr; 15<i>x</i> &lt; 4(4<i>x</i> &minus; 1)</div>
        <div>&rArr; 15<i>x</i> &lt; 16<i>x</i> &minus; 4</div>
        <div>&rArr; 4 &lt; 16<i>x</i> &minus; 15<i>x</i> &rArr; 4 &lt; <i>x</i> &rArr; <i>x</i> &gt; 4</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (4, &infin;)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 16 -->
  <div class="q-card">
    <div class="q-title">Question 16</div>
    <div class="q-text">
      Solve the inequality for real <i>x</i>: <b>${frac('2<i>x</i> &minus; 1', '3')} &ge; ${frac('3<i>x</i> &minus; 2', '4')} &minus; ${frac('2 &minus; <i>x</i>', '5')}</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: ${frac('2<i>x</i> &minus; 1', '3')} &ge; ${frac('3<i>x</i> &minus; 2', '4')} &minus; ${frac('2 &minus; <i>x</i>', '5')}</div>
        <div>Simplifying RHS with LCM = 20:</div>
        <div>&rArr; ${frac('2<i>x</i> &minus; 1', '3')} &ge; ${frac('5(3<i>x</i> &minus; 2) &minus; 4(2 &minus; <i>x</i>)', '20')}</div>
        <div>&rArr; ${frac('2<i>x</i> &minus; 1', '3')} &ge; ${frac('15<i>x</i> &minus; 10 &minus; 8 + 4<i>x</i>', '20')}</div>
        <div>&rArr; ${frac('2<i>x</i> &minus; 1', '3')} &ge; ${frac('19<i>x</i> &minus; 18', '20')}</div>
        <div>Cross-multiplying by positive numbers 3 and 20:</div>
        <div>&rArr; 20(2<i>x</i> &minus; 1) &ge; 3(19<i>x</i> &minus; 18)</div>
        <div>&rArr; 40<i>x</i> &minus; 20 &ge; 57<i>x</i> &minus; 54</div>
        <div>&rArr; &minus;20 + 54 &ge; 57<i>x</i> &minus; 40<i>x</i></div>
        <div>&rArr; 34 &ge; 17<i>x</i> &rArr; 2 &ge; <i>x</i> &rArr; <i>x</i> &le; 2</div>
        <div class="ans-box">
          <span class="ans-label">Solution Set:</span>
          <span class="ans-val"><i>x</i> &isin; (&minus;&infin;, 2]</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 17 -->
  <div class="q-card">
    <div class="q-title">Question 17</div>
    <div class="q-text">
      Solve the inequality and show the graph of the solution on the number line:<br/>
      <b>3<i>x</i> &minus; 2 &lt; 2<i>x</i> + 1</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>3<i>x</i> &minus; 2 &lt; 2<i>x</i> + 1</b></div>
        <div>Subtracting 2<i>x</i> from both sides:</div>
        <div>&rArr; 3<i>x</i> &minus; 2<i>x</i> &minus; 2 &lt; 1</div>
        <div>&rArr; <i>x</i> &minus; 2 &lt; 1</div>
        <div>Adding 2 to both sides:</div>
        <div>&rArr; <i>x</i> &lt; 3</div>
        <div>Thus, the solution set is the open interval <b>(&minus;&infin;, 3)</b>.</div>
        ${makeNumberLineSvg(-4, 5, [-4, -3, -2, -1, 0, 1, 2, 3, 4], 0, 3, true, false, false, true, "x < 3 (Open circle at 3, extending left to -∞)")}
        <div class="ans-box">
          <span class="ans-label">Solution:</span>
          <span class="ans-val"><i>x</i> &lt; 3 &rArr; <i>x</i> &isin; (&minus;&infin;, 3)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 18 -->
  <div class="q-card">
    <div class="q-title">Question 18</div>
    <div class="q-text">
      Solve the inequality and show the graph of the solution on the number line:<br/>
      <b>5<i>x</i> &minus; 3 &ge; 3<i>x</i> &minus; 5</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>5<i>x</i> &minus; 3 &ge; 3<i>x</i> &minus; 5</b></div>
        <div>Rearranging terms:</div>
        <div>&rArr; 5<i>x</i> &minus; 3<i>x</i> &ge; &minus;5 + 3</div>
        <div>&rArr; 2<i>x</i> &ge; &minus;2</div>
        <div>Dividing both sides by 2:</div>
        <div>&rArr; <i>x</i> &ge; &minus;1</div>
        <div>Thus, the solution set is the half-closed interval <b>[&minus;1, &infin;)</b>.</div>
        ${makeNumberLineSvg(-4, 4, [-4, -3, -2, -1, 0, 1, 2, 3, 4], -1, 0, false, true, false, false, "x ≥ -1 (Solid circle at -1, extending right to +∞)")}
        <div class="ans-box">
          <span class="ans-label">Solution:</span>
          <span class="ans-val"><i>x</i> &ge; &minus;1 &rArr; <i>x</i> &isin; [&minus;1, &infin;)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 19 -->
  <div class="q-card">
    <div class="q-title">Question 19</div>
    <div class="q-text">
      Solve the inequality and show the graph of the solution on the number line:<br/>
      <b>3(1 &minus; <i>x</i>) &lt; 2(<i>x</i> + 4)</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>3(1 &minus; <i>x</i>) &lt; 2(<i>x</i> + 4)</b></div>
        <div>Expanding brackets:</div>
        <div>&rArr; 3 &minus; 3<i>x</i> &lt; 2<i>x</i> + 8</div>
        <div>Rearranging terms:</div>
        <div>&rArr; 3 &minus; 8 &lt; 2<i>x</i> + 3<i>x</i></div>
        <div>&rArr; &minus;5 &lt; 5<i>x</i></div>
        <div>Dividing both sides by 5:</div>
        <div>&rArr; &minus;1 &lt; <i>x</i> &rArr; <i>x</i> &gt; &minus;1</div>
        <div>Thus, the solution set is the open interval <b>(&minus;1, &infin;)</b>.</div>
        ${makeNumberLineSvg(-4, 4, [-4, -3, -2, -1, 0, 1, 2, 3, 4], -1, 0, false, true, true, false, "x > -1 (Open circle at -1, extending right to +∞)")}
        <div class="ans-box">
          <span class="ans-label">Solution:</span>
          <span class="ans-val"><i>x</i> &gt; &minus;1 &rArr; <i>x</i> &isin; (&minus;1, &infin;)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 20 -->
  <div class="q-card">
    <div class="q-title">Question 20</div>
    <div class="q-text">
      Solve the inequality and show the graph of the solution on the number line:<br/>
      <b>${frac('<i>x</i>', '2')} &ge; ${frac('5<i>x</i> &minus; 2', '3')} &minus; ${frac('7<i>x</i> &minus; 3', '5')}</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: ${frac('<i>x</i>', '2')} &ge; ${frac('5<i>x</i> &minus; 2', '3')} &minus; ${frac('7<i>x</i> &minus; 3', '5')}</div>
        <div>Simplifying RHS with LCM = 15:</div>
        <div>&rArr; ${frac('<i>x</i>', '2')} &ge; ${frac('5(5<i>x</i> &minus; 2) &minus; 3(7<i>x</i> &minus; 3)', '15')}</div>
        <div>&rArr; ${frac('<i>x</i>', '2')} &ge; ${frac('25<i>x</i> &minus; 10 &minus; 21<i>x</i> + 9', '15')}</div>
        <div>&rArr; ${frac('<i>x</i>', '2')} &ge; ${frac('4<i>x</i> &minus; 1', '15')}</div>
        <div>Cross multiplying by positive numbers 2 and 15:</div>
        <div>&rArr; 15<i>x</i> &ge; 2(4<i>x</i> &minus; 1)</div>
        <div>&rArr; 15<i>x</i> &ge; 8<i>x</i> &minus; 2</div>
        <div>&rArr; 15<i>x</i> &minus; 8<i>x</i> &ge; &minus;2</div>
        <div>&rArr; 7<i>x</i> &ge; &minus;2 &rArr; <i>x</i> &ge; &minus;${frac('2', '7')}</div>
        <div>Note that &minus;${frac('2', '7')} &asymp; &minus;0.286.</div>
        <div>Thus, the solution set is <b>[&minus;${frac('2', '7')}, &infin;)</b>.</div>
        ${makeNumberLineSvg(-4, 4, [-4, -3, -2, -1, 0, 1, 2, 3, 4], -0.286, 0, false, true, false, false, "x ≥ -2/7 (Solid circle at -2/7, extending right to +∞)")}
        <div class="ans-box">
          <span class="ans-label">Solution:</span>
          <span class="ans-val"><i>x</i> &ge; &minus;${frac('2', '7')} &rArr; <i>x</i> &isin; [&minus;${frac('2', '7')}, &infin;)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 21 -->
  <div class="q-card">
    <div class="q-title">Question 21</div>
    <div class="q-text">
      Ravi obtained 70 and 75 marks in the first two unit tests. Find the minimum marks he should get in the third test to have an average of at least 60 marks.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>x</i> be the marks obtained by Ravi in the third unit test.</div>
        <div>According to the given condition, the average marks across all 3 tests must be at least 60:</div>
        <div>&rArr; ${frac('70 + 75 + <i>x</i>', '3')} &ge; 60</div>
        <div>&rArr; ${frac('145 + <i>x</i>', '3')} &ge; 60</div>
        <div>Multiplying both sides by 3:</div>
        <div>&rArr; 145 + <i>x</i> &ge; 180</div>
        <div>Subtracting 145 from both sides:</div>
        <div>&rArr; <i>x</i> &ge; 180 &minus; 145</div>
        <div>&rArr; <i>x</i> &ge; 35</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">Ravi must obtain a minimum of 35 marks in the third test.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 22 -->
  <div class="q-card">
    <div class="q-title">Question 22</div>
    <div class="q-text">
      To receive Grade &lsquo;A&rsquo; in a course, one must obtain an average of 90 marks or more in five examinations (each of 100 marks). If Sunita&rsquo;s marks in the first four examinations are 87, 92, 94 and 95, find the minimum marks that Sunita must obtain in the fifth examination to get Grade &lsquo;A&rsquo; in the course.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>x</i> be Sunita&rsquo;s marks in the fifth examination.</div>
        <div>To obtain Grade &lsquo;A&rsquo;, the mean of all five examinations must be &ge; 90:</div>
        <div>&rArr; ${frac('87 + 92 + 94 + 95 + <i>x</i>', '5')} &ge; 90</div>
        <div>&rArr; ${frac('368 + <i>x</i>', '5')} &ge; 90</div>
        <div>Multiplying both sides by 5:</div>
        <div>&rArr; 368 + <i>x</i> &ge; 450</div>
        <div>Subtracting 368 from both sides:</div>
        <div>&rArr; <i>x</i> &ge; 450 &minus; 368 &rArr; <i>x</i> &ge; 82</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">Sunita must obtain at least 82 marks in the fifth examination.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 23 -->
  <div class="q-card">
    <div class="q-title">Question 23</div>
    <div class="q-text">
      Find all pairs of consecutive odd positive integers both of which are smaller than 10 such that their sum is more than 11.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>x</i> be the smaller odd positive integer.</div>
        <div>Then the next consecutive odd positive integer is (<i>x</i> + 2).</div>
        <div><b>Condition 1:</b> Both integers are smaller than 10.</div>
        <div>Since (<i>x</i> + 2) is the larger integer:</div>
        <div>&rArr; <i>x</i> + 2 &lt; 10 &rArr; <i>x</i> &lt; 8 &nbsp;&nbsp;...(1)</div>
        <div><b>Condition 2:</b> Their sum is strictly greater than 11:</div>
        <div>&rArr; <i>x</i> + (<i>x</i> + 2) &gt; 11</div>
        <div>&rArr; 2<i>x</i> + 2 &gt; 11 &rArr; 2<i>x</i> &gt; 9 &rArr; <i>x</i> &gt; ${frac('9', '2')} = 4.5 &nbsp;&nbsp;...(2)</div>
        <div>Combining (1) and (2):</div>
        <div>&rArr; 4.5 &lt; <i>x</i> &lt; 8</div>
        <div>Since <i>x</i> is an odd positive integer, the possible values for <i>x</i> are <b>5</b> and <b>7</b>.</div>
        <div>• When <i>x</i> = 5, the pair is (5, 5 + 2) = (5, 7).</div>
        <div>• When <i>x</i> = 7, the pair is (7, 7 + 2) = (7, 9).</div>
        <div>Note that for (7, 9), both 7 &lt; 10 and 9 &lt; 10, and 7 + 9 = 16 &gt; 11, which satisfies all conditions.</div>
        <div class="ans-box">
          <span class="ans-label">Possible Pairs:</span>
          <span class="ans-val">(5, 7) and (7, 9)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 24 -->
  <div class="q-card">
    <div class="q-title">Question 24</div>
    <div class="q-text">
      Find all pairs of consecutive even positive integers, both of which are larger than 5 such that their sum is less than 23.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>x</i> be the smaller even positive integer.</div>
        <div>Then the next consecutive even positive integer is (<i>x</i> + 2).</div>
        <div><b>Condition 1:</b> Both integers are larger than 5:</div>
        <div>Since <i>x</i> is the smaller integer:</div>
        <div>&rArr; <i>x</i> &gt; 5 &nbsp;&nbsp;...(1)</div>
        <div><b>Condition 2:</b> Their sum is less than 23:</div>
        <div>&rArr; <i>x</i> + (<i>x</i> + 2) &lt; 23</div>
        <div>&rArr; 2<i>x</i> + 2 &lt; 23 &rArr; 2<i>x</i> &lt; 21 &rArr; <i>x</i> &lt; ${frac('21', '2')} = 10.5 &nbsp;&nbsp;...(2)</div>
        <div>Combining (1) and (2):</div>
        <div>&rArr; 5 &lt; <i>x</i> &lt; 10.5</div>
        <div>Since <i>x</i> must be an even positive integer, <i>x</i> can take values: <b>6, 8, 10</b>.</div>
        <div>• For <i>x</i> = 6: pair is (6, 8) [Sum = 14 &lt; 23, both &gt; 5]</div>
        <div>• For <i>x</i> = 8: pair is (8, 10) [Sum = 18 &lt; 23, both &gt; 5]</div>
        <div>• For <i>x</i> = 10: pair is (10, 12) [Sum = 22 &lt; 23, both &gt; 5]</div>
        <div class="ans-box">
          <span class="ans-label">Possible Pairs:</span>
          <span class="ans-val">(6, 8), (8, 10), and (10, 12)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 25 -->
  <div class="q-card">
    <div class="q-title">Question 25</div>
    <div class="q-text">
      The longest side of a triangle is 3 times the shortest side and the third side is 2 cm shorter than the longest side. If the perimeter of the triangle is at least 61 cm, find the minimum length of the shortest side.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let the length of the shortest side be <b><i>x</i> cm</b>.</div>
        <div>Then:</div>
        <div>• Longest side = <b>3<i>x</i> cm</b></div>
        <div>• Third side = <b>(3<i>x</i> &minus; 2) cm</b></div>
        <div>Perimeter of the triangle is the sum of its three sides:</div>
        <div>Perimeter = <i>x</i> + 3<i>x</i> + (3<i>x</i> &minus; 2) = <b>(7<i>x</i> &minus; 2) cm</b></div>
        <div>Given that perimeter is at least 61 cm:</div>
        <div>&rArr; 7<i>x</i> &minus; 2 &ge; 61</div>
        <div>Adding 2 to both sides:</div>
        <div>&rArr; 7<i>x</i> &ge; 63</div>
        <div>Dividing both sides by 7:</div>
        <div>&rArr; <i>x</i> &ge; 9</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">The minimum length of the shortest side is 9 cm.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 26 -->
  <div class="q-card">
    <div class="q-title">Question 26</div>
    <div class="q-text">
      A man wants to cut three lengths from a single piece of board of length 91 cm. The second length is to be 3 cm longer than the shortest and the third length is to be twice as long as the shortest. What are the possible lengths of the shortest board if the third piece is to be at least 5 cm longer than the second?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let the length of the shortest piece be <b><i>x</i> cm</b>.</div>
        <div>Then:</div>
        <div>• Second piece length = <b>(<i>x</i> + 3) cm</b></div>
        <div>• Third piece length = <b>2<i>x</i> cm</b></div>
        <div><b>Condition 1:</b> The total length cut from the 91 cm board cannot exceed 91 cm:</div>
        <div>&rArr; <i>x</i> + (<i>x</i> + 3) + 2<i>x</i> &le; 91</div>
        <div>&rArr; 4<i>x</i> + 3 &le; 91 &rArr; 4<i>x</i> &le; 88 &rArr; <i>x</i> &le; 22 &nbsp;&nbsp;...(1)</div>
        <div><b>Condition 2:</b> The third piece is at least 5 cm longer than the second piece:</div>
        <div>&rArr; 2<i>x</i> &ge; (<i>x</i> + 3) + 5</div>
        <div>&rArr; 2<i>x</i> &ge; <i>x</i> + 8 &rArr; <i>x</i> &ge; 8 &nbsp;&nbsp;...(2)</div>
        <div>Combining inequalities (1) and (2):</div>
        <div>&rArr; <b>8 &le; <i>x</i> &le; 22</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">The length of the shortest board is between 8 cm and 22 cm, i.e., 8 &le; x &le; 22 cm.</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise5_1
};
