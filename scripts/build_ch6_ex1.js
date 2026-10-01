const { themeColor, accentColor, styleBlock, frac } = require('./ch6_common');

function makeSlotsSvg(slots, label) {
  const width = 420;
  const height = 110;
  const numSlots = slots.length;
  const slotWidth = 70;
  const slotHeight = 55;
  const gap = 20;
  const totalW = numSlots * slotWidth + (numSlots - 1) * gap;
  const startX = (width - totalW) / 2;
  const startY = 25;

  let slotsSvg = '';
  slots.forEach((s, i) => {
    const x = startX + i * (slotWidth + gap);
    slotsSvg += `
      <rect x="${x}" y="${startY}" width="${slotWidth}" height="${slotHeight}" rx="8" fill="#F8FAFC" stroke="${themeColor}" stroke-width="2" />
      <text x="${x + slotWidth / 2}" y="${startY + 26}" fill="${themeColor}" font-size="16" font-weight="800" text-anchor="middle" font-family="sans-serif">${s.ways}</text>
      <text x="${x + slotWidth / 2}" y="${startY + 44}" fill="#64748B" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">${s.name}</text>
    `;
    if (i < numSlots - 1) {
      slotsSvg += `<text x="${x + slotWidth + gap / 2}" y="${startY + 34}" fill="#0F172A" font-size="16" font-weight="800" text-anchor="middle">&times;</text>`;
    }
  });

  return `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#FFFFFF" rx="8" />
      ${slotsSvg}
      <text x="${width / 2}" y="${height - 10}" fill="#334155" font-size="11" font-weight="600" text-anchor="middle" font-family="sans-serif">Total Possibilities = ${slots.map(s => s.ways).join(' &times; ')} = ${slots.reduce((acc, s) => acc * parseInt(s.ways), 1)}</text>
    </svg>
    <div class="diagram-caption">📌 Multiplication Principle Slots: <span style="color: ${themeColor}; font-weight:700;">${label}</span></div>
  </div>`;
}

function getExercise6_1() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Permutations and Combinations &bull; Exercise 6.1
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Fundamental Principle of Counting (Multiplication &amp; Addition Rules) &bull; Digits &amp; Letter Arrangements
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      How many 3-digit numbers can be formed from the digits 1, 2, 3, 4 and 5, assuming that:<br/>
      <b>(i)</b> Repetition of the digits is allowed?<br/>
      <b>(ii)</b> Repetition of the digits is not allowed?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given digits: <b>{1, 2, 3, 4, 5}</b> (Total 5 digits).</div>
        <div>A 3-digit number has three positions: Hundreds (H), Tens (T), and Units (U).</div>
        
        <div style="margin-top: 10px;"><b style="color: ${themeColor};">(i) When repetition of digits is allowed:</b></div>
        <div>• The units place can be filled by any of the 5 digits: <b>5 ways</b>.</div>
        <div>• The tens place can also be filled by any of the 5 digits: <b>5 ways</b>.</div>
        <div>• The hundreds place can also be filled by any of the 5 digits: <b>5 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total 3-digit numbers = 5 &times; 5 &times; 5 = <b>125</b></div>
        ${makeSlotsSvg([{ ways: "5", name: "Hundreds" }, { ways: "5", name: "Tens" }, { ways: "5", name: "Units" }], "Repetition Allowed (5 × 5 × 5 = 125)")}
        <div class="ans-box">
          <span class="ans-label">Part (i) Answer:</span>
          <span class="ans-val">125 numbers</span>
        </div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">(ii) When repetition of digits is NOT allowed:</b></div>
        <div>• The units place can be filled by any of the 5 digits: <b>5 ways</b>.</div>
        <div>• The tens place can be filled by any of the remaining 4 digits: <b>4 ways</b>.</div>
        <div>• The hundreds place can be filled by any of the remaining 3 digits: <b>3 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total 3-digit numbers = 5 &times; 4 &times; 3 = <b>60</b></div>
        ${makeSlotsSvg([{ ways: "3", name: "Hundreds" }, { ways: "4", name: "Tens" }, { ways: "5", name: "Units" }], "No Repetition (3 × 4 × 5 = 60)")}
        <div class="ans-box">
          <span class="ans-label">Part (ii) Answer:</span>
          <span class="ans-val">60 numbers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      How many 3-digit even numbers can be formed from the digits 1, 2, 3, 4, 5, 6 if the digits can be repeated?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given digits: <b>{1, 2, 3, 4, 5, 6}</b> (Total 6 digits).</div>
        <div>Let the 3-digit number be represented by three places: [Hundreds][Tens][Units].</div>
        <div>• <b>Condition for even number:</b> The units place must be occupied by an even digit, i.e., <b>2, 4, or 6</b>.</div>
        <div>&rArr; Number of ways to fill units place = <b>3 ways</b>.</div>
        <div>• <b>Repetition is allowed:</b></div>
        <div>&rArr; The tens place can be filled by any of the 6 given digits = <b>6 ways</b>.</div>
        <div>&rArr; The hundreds place can also be filled by any of the 6 given digits = <b>6 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total 3-digit even numbers = 6 &times; 6 &times; 3 = <b>108</b></div>
        ${makeSlotsSvg([{ ways: "6", name: "Hundreds" }, { ways: "6", name: "Tens" }, { ways: "3", name: "Even Units" }], "3-Digit Even Numbers with Repetition")}
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">108 even numbers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      How many 4-letter codes can be formed using the first 10 letters of the English alphabet, if no letter can be repeated?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total letters available = <b>10</b> (first 10 letters: A through J).</div>
        <div>We need to form a 4-letter code without repetition: [1st][2nd][3rd][4th].</div>
        <div>• The 1st place can be filled by any of the 10 letters = <b>10 ways</b>.</div>
        <div>• The 2nd place can be filled by any of the remaining 9 letters = <b>9 ways</b>.</div>
        <div>• The 3rd place can be filled by any of the remaining 8 letters = <b>8 ways</b>.</div>
        <div>• The 4th place can be filled by any of the remaining 7 letters = <b>7 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total 4-letter codes = 10 &times; 9 &times; 8 &times; 7 = <b>5040</b></div>
        <div><span class="reason">[Alternatively: <sup>10</sup>P<sub>4</sub> = ${frac('10!', '(10 &minus; 4)!')} = ${frac('10!', '6!')} = 10 &times; 9 &times; 8 &times; 7 = 5040]</span></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">5040 codes</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      How many 5-digit telephone numbers can be constructed using the digits 0 to 9 if each number starts with 67 and no digit appears more than once?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total digits available: <b>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</b> (Total 10 digits).</div>
        <div>A 5-digit telephone number is represented by five places: [1st][2nd][3rd][4th][5th].</div>
        <div>• <b>First two digits are fixed:</b> The 1st digit must be <b>6</b> and the 2nd digit must be <b>7</b>:</div>
        <div>&rArr; Number of ways to fill 1st and 2nd places = 1 &times; 1 = <b>1 way</b>.</div>
        <div>• <b>Remaining digits:</b> Since 6 and 7 are already used and no digit can repeat:</div>
        <div>&rArr; Number of digits left = 10 &minus; 2 = <b>8 digits</b> {0, 1, 2, 3, 4, 5, 8, 9}.</div>
        <div>• 3rd place can be filled in <b>8 ways</b>.</div>
        <div>• 4th place can be filled in <b>7 ways</b>.</div>
        <div>• 5th place can be filled in <b>6 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total 5-digit telephone numbers = 1 &times; 1 &times; 8 &times; 7 &times; 6 = <b>336</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">336 telephone numbers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      A coin is tossed 3 times, and the outcomes are recorded. How many possible outcomes are there?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In a single toss of a fair coin, there are 2 possible outcomes: <b>Head (H)</b> or <b>Tail (T)</b>.</div>
        <div>• 1st toss has <b>2 possible outcomes</b>.</div>
        <div>• 2nd toss has <b>2 possible outcomes</b>.</div>
        <div>• 3rd toss has <b>2 possible outcomes</b>.</div>
        <div>By the Fundamental Principle of Counting (Multiplication Rule):</div>
        <div>&rArr; Total number of outcomes = 2 &times; 2 &times; 2 = <b>2<sup>3</sup> = 8</b></div>
        <div>The sample space is: {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}.</div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">8 possible outcomes</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Given 5 flags of different colours, how many different signals can be generated if each signal requires the use of 2 flags, one below the other?
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Total number of different flags available = <b>5</b>.</div>
        <div>A signal is formed by placing 2 flags vertically: [Upper Flag] and [Lower Flag].</div>
        <div>• The upper position can be filled by any of the 5 flags = <b>5 ways</b>.</div>
        <div>• Since the two flags must be distinct (a flag cannot be used twice simultaneously), the lower position can be filled by any of the remaining 4 flags = <b>4 ways</b>.</div>
        <div>By the Fundamental Principle of Multiplication:</div>
        <div>&rArr; Total number of signals = 5 &times; 4 = <b>20</b></div>
        <div><span class="reason">[Or <sup>5</sup>P<sub>2</sub> = ${frac('5!', '(5 &minus; 2)!')} = ${frac('5!', '3!')} = 5 &times; 4 = 20]</span></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">20 different signals</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise6_1
};
