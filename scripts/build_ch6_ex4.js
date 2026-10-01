const { themeColor, accentColor, styleBlock, frac } = require('./ch6_common');

function makeCircleChordsSvg() {
  const width = 360;
  const height = 240;
  const cx = 180;
  const cy = 120;
  const r = 85;
  const numPts = 10; // visual representation of circle with chords
  const pts = [];

  for (let i = 0; i < numPts; i++) {
    const angle = (i * 2 * Math.PI) / numPts;
    pts.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      label: `P${i + 1}`
    });
  }

  let chordsSvg = '';
  // sample chords
  const samplePairs = [[0, 3], [0, 5], [1, 4], [2, 7], [3, 8], [5, 9]];
  samplePairs.forEach(([i, j]) => {
    chordsSvg += `<line x1="${pts[i].x}" y1="${pts[i].y}" x2="${pts[j].x}" y2="${pts[j].y}" stroke="rgba(255, 0, 127, 0.45)" stroke-width="1.8" />`;
  });

  let ptsSvg = '';
  pts.forEach(p => {
    ptsSvg += `<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="#E11D48" stroke="#FFFFFF" stroke-width="1.5" />`;
  });

  return `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#FFFFFF" rx="8" />
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#64748B" stroke-width="1.8" stroke-dasharray="4,3" />
      ${chordsSvg}
      ${ptsSvg}
      <text x="${cx}" y="${cy + 5}" fill="#0F172A" font-size="11" font-weight="700" text-anchor="middle">Every 2 points form 1 chord</text>
      <text x="${cx}" y="${height - 12}" fill="#64748B" font-size="10.5" font-weight="600" text-anchor="middle">Total Chords = <sup>n</sup>C<sub>2</sub> = <sup>21</sup>C<sub>2</sub> = 210</text>
    </svg>
    <div class="diagram-caption">📌 Circle Combinations: <span style="color: ${themeColor}; font-weight:700;">Choosing 2 points from 21 yields <sup>21</sup>C<sub>2</sub> Chords</span></div>
  </div>`;
}

function getExercise6_4() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Permutations and Combinations &bull; Exercise 6.4
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Combinations (<sup>n</sup>C<sub>r</sub>) &bull; Selections from Groups &bull; Committees, Cards, Sports Teams &amp; Chords
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      If <b><sup><i>n</i></sup>C<sub>8</sub> = <sup><i>n</i></sup>C<sub>2</sub></b>, find <b><sup><i>n</i></sup>C<sub>2</sub></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: <b><sup><i>n</i></sup>C<sub>8</sub> = <sup><i>n</i></sup>C<sub>2</sub></b></div>
        <div>By the fundamental complementary theorem of combinations:</div>
        <div style="margin: 6px 0; color: #CBD5E1;">If <b><sup><i>n</i></sup>C<sub><i>a</i></sub> = <sup><i>n</i></sup>C<sub><i>b</i></sub></b>, then either <i>a</i> = <i>b</i> or <b><i>a</i> + <i>b</i> = <i>n</i></b>.</div>
        <div>Since 8 &ne; 2:</div>
        <div>&rArr; <i>n</i> = 8 + 2 = <b>10</b></div>
        <div style="margin-top: 10px;">Now, finding <sup><i>n</i></sup>C<sub>2</sub> with <i>n</i> = 10:</div>
        <div>&rArr; <sup>10</sup>C<sub>2</sub> = ${frac('10!', '2! &times; (10 &minus; 2)!')} = ${frac('10!', '2! &times; 8!')}</div>
        <div>&rArr; ${frac('10 &times; 9 &times; 8!', '2 &times; 1 &times; 8!')} = ${frac('90', '2')} = <b>45</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val"><sup>n</sup>C<sub>2</sub> = <sup>10</sup>C<sub>2</sub> = 45</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Determine <i>n</i> if:<br/>
      <b>(i)</b> <sup>2<i>n</i></sup>C<sub>3</sub> : <sup><i>n</i></sup>C<sub>3</sub> = 12 : 1<br/>
      <b>(ii)</b> <sup>2<i>n</i></sup>C<sub>3</sub> : <sup><i>n</i></sup>C<sub>3</sub> = 11 : 1
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Recall combination formula: <sup>n</sup>C<sub>3</sub> = ${frac('<i>n</i>(<i>n</i> &minus; 1)(<i>n</i> &minus; 2)', '3 &times; 2 &times; 1')} = ${frac('<i>n</i>(<i>n</i> &minus; 1)(<i>n</i> &minus; 2)', '6')}</div>
        <div>Therefore:</div>
        <div>• <sup>2<i>n</i></sup>C<sub>3</sub> = ${frac('2<i>n</i>(2<i>n</i> &minus; 1)(2<i>n</i> &minus; 2)', '6')} = ${frac('2<i>n</i>(2<i>n</i> &minus; 1) &times; 2(<i>n</i> &minus; 1)', '6')} = ${frac('4<i>n</i>(2<i>n</i> &minus; 1)(<i>n</i> &minus; 1)', '6')}</div>
        <div>Dividing <sup>2<i>n</i></sup>C<sub>3</sub> by <sup><i>n</i></sup>C<sub>3</sub>:</div>
        <div>&rArr; ${frac('<sup>2<i>n</i></sup>C<sub>3</sub>', '<sup><i>n</i></sup>C<sub>3</sub>')} = ${frac('4<i>n</i>(2<i>n</i> &minus; 1)(<i>n</i> &minus; 1)', '6')} &times; ${frac('6', '<i>n</i>(<i>n</i> &minus; 1)(<i>n</i> &minus; 2)')}</div>
        <div>Cancelling 6, <i>n</i>, and (<i>n</i> &minus; 1) since <i>n</i> &gt; 2:</div>
        <div>&rArr; ${frac('<sup>2<i>n</i></sup>C<sub>3</sub>', '<sup><i>n</i></sup>C<sub>3</sub>')} = ${frac('4(2<i>n</i> &minus; 1)', '<i>n</i> &minus; 2')}</div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">(i) For ratio 12 : 1:</b></div>
        <div>&rArr; ${frac('4(2<i>n</i> &minus; 1)', '<i>n</i> &minus; 2')} = 12</div>
        <div>Dividing both sides by 4:</div>
        <div>&rArr; ${frac('2<i>n</i> &minus; 1', '<i>n</i> &minus; 2')} = 3</div>
        <div>&rArr; 2<i>n</i> &minus; 1 = 3(<i>n</i> &minus; 2)</div>
        <div>&rArr; 2<i>n</i> &minus; 1 = 3<i>n</i> &minus; 6</div>
        <div>&rArr; 6 &minus; 1 = 3<i>n</i> &minus; 2<i>n</i> &rArr; <b><i>n</i> = 5</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (i) Answer:</span>
          <span class="ans-val">n = 5</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) For ratio 11 : 1:</b></div>
        <div>&rArr; ${frac('4(2<i>n</i> &minus; 1)', '<i>n</i> &minus; 2')} = 11</div>
        <div>&rArr; 4(2<i>n</i> &minus; 1) = 11(<i>n</i> &minus; 2)</div>
        <div>&rArr; 8<i>n</i> &minus; 4 = 11<i>n</i> &minus; 22</div>
        <div>&rArr; 22 &minus; 4 = 11<i>n</i> &minus; 8<i>n</i></div>
        <div>&rArr; 18 = 3<i>n</i> &rArr; <b><i>n</i> = 6</b></div>
        <div class="ans-box">
          <span class="ans-label">Part (ii) Answer:</span>
          <span class="ans-val">n = 6</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      How many chords can be drawn through 21 points on a circle?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>A chord of a circle is uniquely determined by joining any <b>2 distinct points</b> on the circle.</div>
        <div>The total number of points on the circle is <b>21</b>.</div>
        <div>Since the order of selecting the two points does not change the chord (joining A to B is the same chord as B to A), this is a combination of 21 objects taken 2 at a time:</div>
        <div>&rArr; Number of chords = <sup>21</sup>C<sub>2</sub></div>
        <div>&rArr; <sup>21</sup>C<sub>2</sub> = ${frac('21!', '2! &times; (21 &minus; 2)!')} = ${frac('21!', '2! &times; 19!')}</div>
        <div>&rArr; ${frac('21 &times; 20 &times; 19!', '2 &times; 1 &times; 19!')} = ${frac('420', '2')} = <b>210</b></div>
        ${makeCircleChordsSvg()}
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">210 chords can be drawn</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      In how many ways can a team of 3 boys and 3 girls be selected from 5 boys and 4 girls?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>• Total boys available = 5; Boys to select = 3.</div>
        <div>• Total girls available = 4; Girls to select = 3.</div>
        <div>• Number of ways to select 3 boys from 5 boys:</div>
        <div>&rArr; <sup>5</sup>C<sub>3</sub> = ${frac('5!', '3! &times; 2!')} = ${frac('5 &times; 4', '2 &times; 1')} = <b>10 ways</b>.</div>
        <div>• Number of ways to select 3 girls from 4 girls:</div>
        <div>&rArr; <sup>4</sup>C<sub>3</sub> = <sup>4</sup>C<sub>1</sub> = <b>4 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total ways = <sup>5</sup>C<sub>3</sub> &times; <sup>4</sup>C<sub>3</sub> = 10 &times; 4 = <b>40</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">40 ways</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Find the number of ways of selecting 9 balls from 6 red balls, 5 white balls and 5 blue balls if each selection consists of 3 balls of each colour.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Available balls:</div>
        <div>• 6 Red balls &bull; 5 White balls &bull; 5 Blue balls (Total 16 balls).</div>
        <div>The required selection contains exactly 3 balls of each color (total = 3 + 3 + 3 = 9 balls):</div>
        <div>• Ways to select 3 red balls from 6:</div>
        <div>&rArr; <sup>6</sup>C<sub>3</sub> = ${frac('6 &times; 5 &times; 4', '3 &times; 2 &times; 1')} = <b>20 ways</b>.</div>
        <div>• Ways to select 3 white balls from 5:</div>
        <div>&rArr; <sup>5</sup>C<sub>3</sub> = ${frac('5 &times; 4', '2 &times; 1')} = <b>10 ways</b>.</div>
        <div>• Ways to select 3 blue balls from 5:</div>
        <div>&rArr; <sup>5</sup>C<sub>3</sub> = <b>10 ways</b>.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total number of ways = <sup>6</sup>C<sub>3</sub> &times; <sup>5</sup>C<sub>3</sub> &times; <sup>5</sup>C<sub>3</sub></div>
        <div>= 20 &times; 10 &times; 10 = <b>2000</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">2000 ways</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Determine the number of 5 card combinations out of a deck of 52 cards if there is exactly one ace in each combination.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In a standard deck of 52 playing cards:</div>
        <div>• Number of Ace cards = <b>4</b></div>
        <div>• Number of Non-Ace cards = 52 &minus; 4 = <b>48</b></div>
        <div>Each 5-card combination must contain:</div>
        <div>1 Ace card and (5 &minus; 1) = 4 Non-Ace cards.</div>
        <div>• Ways to choose 1 Ace from 4: <sup>4</sup>C<sub>1</sub> = <b>4 ways</b>.</div>
        <div>• Ways to choose 4 Non-Ace cards from 48:</div>
        <div>&rArr; <sup>48</sup>C<sub>4</sub> = ${frac('48 &times; 47 &times; 46 &times; 45', '4 &times; 3 &times; 2 &times; 1')} = ${frac('4669920', '24')} = <b>194580 ways</b>.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total 5-card combinations = <sup>4</sup>C<sub>1</sub> &times; <sup>48</sup>C<sub>4</sub> = 4 &times; 194580 = <b>778320</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">778320 combinations</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      In how many ways can one select a cricket team of eleven from 17 players in which only 5 players can bowl if each cricket team of 11 must include exactly 4 bowlers?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total players = <b>17</b>.</div>
        <div>Composition: <b>5 bowlers</b> and (17 &minus; 5) = <b>12 non-bowlers</b>.</div>
        <div>A team of 11 players must contain exactly 4 bowlers:</div>
        <div>• Bowlers required = <b>4</b> (out of 5 bowlers).</div>
        <div>• Non-bowlers required = 11 &minus; 4 = <b>7</b> (out of 12 non-bowlers).</div>
        <div>• Ways to select 4 bowlers from 5:</div>
        <div>&rArr; <sup>5</sup>C<sub>4</sub> = <sup>5</sup>C<sub>1</sub> = <b>5 ways</b>.</div>
        <div>• Ways to select 7 other players from 12:</div>
        <div>&rArr; <sup>12</sup>C<sub>7</sub> = <sup>12</sup>C<sub>5</sub> = ${frac('12 &times; 11 &times; 10 &times; 9 &times; 8', '5 &times; 4 &times; 3 &times; 2 &times; 1')} = ${frac('95040', '120')} = <b>792 ways</b>.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total ways to form the cricket team = <sup>5</sup>C<sub>4</sub> &times; <sup>12</sup>C<sub>7</sub> = 5 &times; 792 = <b>3960</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">3960 ways</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      A bag contains 5 black and 6 red balls. Determine the number of ways in which 2 black and 3 red balls can be selected.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given:</div>
        <div>• Black balls = 5; Red balls = 6.</div>
        <div>• We need to select 2 black balls and 3 red balls.</div>
        <div>• Ways to choose 2 black balls from 5:</div>
        <div>&rArr; <sup>5</sup>C<sub>2</sub> = ${frac('5 &times; 4', '2 &times; 1')} = <b>10 ways</b>.</div>
        <div>• Ways to choose 3 red balls from 6:</div>
        <div>&rArr; <sup>6</sup>C<sub>3</sub> = ${frac('6 &times; 5 &times; 4', '3 &times; 2 &times; 1')} = <b>20 ways</b>.</div>
        <div>By Multiplication Principle:</div>
        <div>&rArr; Total ways = <sup>5</sup>C<sub>2</sub> &times; <sup>6</sup>C<sub>3</sub> = 10 &times; 20 = <b>200</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">200 ways</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      In how many ways can a student choose a programme of 5 courses if 9 courses are available and 2 specific courses are compulsory for every student?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total courses available = <b>9</b>.</div>
        <div>Total courses to be chosen = <b>5</b>.</div>
        <div>• Since 2 specific courses are strictly compulsory, they must be included in every student's programme:</div>
        <div>&rArr; Ways to select compulsory courses = <sup>2</sup>C<sub>2</sub> = <b>1 way</b>.</div>
        <div>• Remaining courses to be selected = 5 &minus; 2 = <b>3 courses</b>.</div>
        <div>• Remaining elective courses to choose from = 9 &minus; 2 = <b>7 courses</b>.</div>
        <div>The student can choose 3 courses from the remaining 7 courses in:</div>
        <div>&rArr; <sup>7</sup>C<sub>3</sub> = ${frac('7 &times; 6 &times; 5', '3 &times; 2 &times; 1')} = ${frac('210', '6')} = <b>35 ways</b>.</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">35 ways</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise6_4
};
