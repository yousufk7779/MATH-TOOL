const { THEME_COLOR, ACCENT_COLOR, STYLES, frac, qCard, exBanner } = require("./ch13_common");

function buildEx3() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "From the data given below, state which group is more variable, A or B?<br/>" +
    "<b>Marks:</b> 10&ndash;20, 20&ndash;30, 30&ndash;40, 40&ndash;50, 50&ndash;60, 60&ndash;70, 70&ndash;80<br/>" +
    "<b>Group A:</b> 9, 17, 32, 33, 40, 10, 9<br/>" +
    "<b>Group B:</b> 10, 20, 30, 25, 43, 15, 7",
    `<div>To compare variability, we compute the Coefficient of Variation: <i>CV</i> = [${frac("&sigma;", "x̄")}] &times; 100.</div>
     <div>Let Assumed Mean <i>A</i> = 45 and class width <i>h</i> = 10. Midpoints <i>x</i><sub>i</sub>: 15, 25, 35, 45, 55, 65, 75.</div>
     <div>Step deviations <i>y</i><sub>i</sub> = ${frac("x<sub>i</sub> &minus; 45", "10")}: &minus;3, &minus;2, &minus;1, 0, 1, 2, 3.</div>
     
     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">For Group A:</b></div>
     <div>&sum; <i>f</i><sub>i</sub> = 150, &sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub> = &minus;6, &sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> = 342.</div>
     <div>&rArr; Mean (<i>x̄</i><sub>A</sub>) = 45 + [${frac("&minus;6", "150")}] &times; 10 = 45 &minus; 0.4 = <b>44.6</b></div>
     <div>&rArr; Variance (&sigma;<sub>A</sub><sup>2</sup>) = ${frac("10<sup>2</sup>", "150<sup>2</sup>")} [150(342) &minus; (&minus;6)<sup>2</sup>] = ${frac("100", "22500")} [51300 &minus; 36] = ${frac("51264", "225")} = <b>227.84</b></div>
     <div>&rArr; &sigma;<sub>A</sub> = &radic;227.84 &approx; <b>15.09</b></div>
     <div>&rArr; <i>CV</i><sub>A</sub> = [${frac("15.09", "44.6")}] &times; 100 &approx; <b>33.83%</b></div>

     <div style="margin-top: 12px;">• <b style="color: ${THEME_COLOR};">For Group B:</b></div>
     <div>&sum; <i>f</i><sub>i</sub> = 150, &sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub> = &minus;6, &sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> = 366.</div>
     <div>&rArr; Mean (<i>x̄</i><sub>B</sub>) = 45 + [${frac("&minus;6", "150")}] &times; 10 = <b>44.6</b></div>
     <div>&rArr; Variance (&sigma;<sub>B</sub><sup>2</sup>) = ${frac("10<sup>2</sup>", "150<sup>2</sup>")} [150(366) &minus; (&minus;6)<sup>2</sup>] = ${frac("100", "22500")} [54900 &minus; 36] = ${frac("54864", "225")} = <b>243.84</b></div>
     <div>&rArr; &sigma;<sub>B</sub> = &radic;243.84 &approx; <b>15.61</b></div>
     <div>&rArr; <i>CV</i><sub>B</sub> = [${frac("15.61", "44.6")}] &times; 100 &approx; <b>35.00%</b></div>

     <div style="margin-top: 10px;">Since <i>CV</i><sub>B</sub> (35.00%) &gt; <i>CV</i><sub>A</sub> (33.83%), <b>Group B shows greater variability</b>.</div>`,
    "Group B is more variable (CV_B = 35.00% > CV_A = 33.83%)"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "From the prices of shares X and Y below, find out which is more stable in value:<br/>" +
    "<b>X:</b> 35, 54, 52, 53, 56, 58, 52, 50, 51, 49<br/>" +
    "<b>Y:</b> 108, 107, 105, 105, 106, 107, 104, 103, 104, 101",
    `<div>The share with the lower coefficient of variation (<i>CV</i>) is more stable in value. Number of values <i>n</i> = 10.</div>
     
     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">For Share X:</b></div>
     <div>&sum; <i>x</i><sub>i</sub> = 510 &rArr; <i>x̄</i> = ${frac("510", "10")} = <b>51</b></div>
     <div>&sum; <i>x</i><sub>i</sub><sup>2</sup> = 26360</div>
     <div>&rArr; Variance (&sigma;<sub>X</sub><sup>2</sup>) = ${frac("1", "n")} &sum; <i>x</i><sub>i</sub><sup>2</sup> &minus; (<i>x̄</i>)<sup>2</sup> = ${frac("26360", "10")} &minus; 51<sup>2</sup> = 2636 &minus; 2601 = <b>35</b></div>
     <div>&rArr; Standard Deviation &sigma;<sub>X</sub> = &radic;35 &approx; <b>5.91</b></div>
     <div>&rArr; <i>CV</i><sub>X</sub> = [${frac("5.91", "51")}] &times; 100 &approx; <b>11.58%</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">For Share Y:</b></div>
     <div>&sum; <i>y</i><sub>i</sub> = 1050 &rArr; <i>ȳ</i> = ${frac("1050", "10")} = <b>105</b></div>
     <div>&sum; <i>y</i><sub>i</sub><sup>2</sup> = 110290</div>
     <div>&rArr; Variance (&sigma;<sub>Y</sub><sup>2</sup>) = ${frac("110290", "10")} &minus; 105<sup>2</sup> = 11029 &minus; 11025 = <b>4</b></div>
     <div>&rArr; Standard Deviation &sigma;<sub>Y</sub> = &radic;4 = <b>2</b></div>
     <div>&rArr; <i>CV</i><sub>Y</sub> = [${frac("2", "105")}] &times; 100 &approx; <b>1.90%</b></div>

     <div style="margin-top: 10px;">Since <i>CV</i><sub>Y</sub> (1.90%) &lt; <i>CV</i><sub>X</sub> (11.58%), <b>Share Y is significantly more stable in value</b>.</div>`,
    "Share Y is more stable in value (CV_Y = 1.90% < CV_X = 11.58%)"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "An analysis of monthly wages paid to workers in two firms, A and B, belonging to the same industry, gives the following results:<br/>" +
    "&bull; <b>No. of wage earners:</b> Firm A = 586, Firm B = 648<br/>" +
    "&bull; <b>Mean monthly wages:</b> Firm A = ₹5253, Firm B = ₹5253<br/>" +
    "&bull; <b>Variance of distribution of wages:</b> Firm A = 100, Firm B = 121<br/>" +
    "(i) Which firm, A or B, pays a larger amount as monthly wages?<br/>" +
    "(ii) Which firm, A or B, shows greater variability in individual wages?",
    `<div>• <b style="color: ${THEME_COLOR};">(i) Total Monthly Wages Paid:</b></div>
     <div>For Firm A: Total wages = <i>N</i><sub>A</sub> &times; <i>x̄</i><sub>A</sub> = 586 &times; 5253 = <b>₹30,78,258</b></div>
     <div>For Firm B: Total wages = <i>N</i><sub>B</sub> &times; <i>x̄</i><sub>B</sub> = 648 &times; 5253 = <b>₹34,03,944</b></div>
     <div>&rArr; <b>Firm B pays a larger total amount as monthly wages.</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) Variability in Individual Wages:</b></div>
     <div>Since the mean monthly wage is identical for both firms (₹5253), variability depends solely on the standard deviation:</div>
     <div>&sigma;<sub>A</sub> = &radic;100 = <b>10</b> &nbsp;|&nbsp; &sigma;<sub>B</sub> = &radic;121 = <b>11</b></div>
     <div>Since &sigma;<sub>B</sub> &gt; &sigma;<sub>A</sub> (and hence <i>CV</i><sub>B</sub> &gt; <i>CV</i><sub>A</sub>):</div>
     <div>&rArr; <b>Firm B shows greater variability in individual wages.</b></div>`,
    "(i) Firm B pays larger amount (₹34,03,944 > ₹30,78,258) &nbsp;|&nbsp; (ii) Firm B shows greater variability (σ_B = 11 > σ_A = 10)"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "The following is the record of goals scored by team A in a football session:<br/>" +
    "<b>No. of goals scored (x<sub>i</sub>):</b> 0, 1, 2, 3, 4<br/>" +
    "<b>No. of matches (f<sub>i</sub>):</b> 1, 9, 7, 5, 3<br/>" +
    "For team B, the mean number of goals scored per match was 2, with a standard deviation 1.25 goals. Find which team may be considered more consistent?",
    `<div>Let us calculate the mean and standard deviation for Team A:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Goals (<i>x</i><sub>i</sub>)</th>
             <th>Matches (<i>f</i><sub>i</sub>)</th>
             <th><i>f</i><sub>i</sub><i>x</i><sub>i</sub></th>
             <th><i>x</i><sub>i</sub><sup>2</sup></th>
             <th><i>f</i><sub>i</sub><i>x</i><sub>i</sub><sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
           <tr><td>1</td><td>9</td><td>9</td><td>1</td><td>9</td></tr>
           <tr><td>2</td><td>7</td><td>14</td><td>4</td><td>28</td></tr>
           <tr><td>3</td><td>5</td><td>15</td><td>9</td><td>45</td></tr>
           <tr><td>4</td><td>3</td><td>12</td><td>16</td><td>48</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 25</td><td>&sum; <i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 50</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub><i>x</i><sub>i</sub><sup>2</sup> = 130</td></tr>
         </tbody>
       </table>
     </div>
     <div>• <b>For Team A:</b></div>
     <div>&rArr; Mean (<i>x̄</i><sub>A</sub>) = ${frac("50", "25")} = <b>2</b></div>
     <div>&rArr; Variance (&sigma;<sub>A</sub><sup>2</sup>) = ${frac("1", "N")} &sum; <i>f</i><sub>i</sub><i>x</i><sub>i</sub><sup>2</sup> &minus; (<i>x̄</i><sub>A</sub>)<sup>2</sup> = ${frac("130", "25")} &minus; 2<sup>2</sup> = 5.2 &minus; 4 = <b>1.2</b></div>
     <div>&rArr; Standard Deviation &sigma;<sub>A</sub> = &radic;1.2 &approx; <b>1.095</b></div>
     <div>&rArr; <i>CV</i><sub>A</sub> = [${frac("1.095", "2")}] &times; 100 &approx; <b>54.75%</b></div>

     <div style="margin-top: 10px;">• <b>For Team B:</b></div>
     <div>Given: Mean (<i>x̄</i><sub>B</sub>) = 2, Standard Deviation &sigma;<sub>B</sub> = 1.25</div>
     <div>&rArr; <i>CV</i><sub>B</sub> = [${frac("1.25", "2")}] &times; 100 = <b>62.50%</b></div>

     <div style="margin-top: 10px;">Since <i>CV</i><sub>A</sub> (54.75%) &lt; <i>CV</i><sub>B</sub> (62.50%), <b>Team A is more consistent</b>.</div>`,
    "Team A is more consistent (CV_A = 54.75% < CV_B = 62.50%)"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "The sum and sum of squares corresponding to length x (in cm) and weight y (in gm) of 50 plant products are given below:<br/>" +
    "&sum;<sub>i=1</sub><sup>50</sup> x<sub>i</sub> = 212, &nbsp; &sum;<sub>i=1</sub><sup>50</sup> x<sub>i</sub><sup>2</sup> = 902.8, &nbsp; &sum;<sub>i=1</sub><sup>50</sup> y<sub>i</sub> = 261, &nbsp; &sum;<sub>i=1</sub><sup>50</sup> y<sub>i</sub><sup>2</sup> = 1457.6<br/>" +
    "Which is more varying, the length or weight?",
    `<div>Number of plant products <i>n</i> = 50.</div>
     
     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">For Length x:</b></div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; x<sub>i</sub>", "n")} = ${frac("212", "50")} = <b>4.24 cm</b></div>
     <div>&rArr; Variance (&sigma;<sub>x</sub><sup>2</sup>) = ${frac("1", "n")} &sum; <i>x</i><sub>i</sub><sup>2</sup> &minus; (<i>x̄</i>)<sup>2</sup> = ${frac("902.8", "50")} &minus; (4.24)<sup>2</sup> = 18.056 &minus; 17.9776 = <b>0.0784</b></div>
     <div>&rArr; Standard Deviation &sigma;<sub>x</sub> = &radic;0.0784 = <b>0.28 cm</b></div>
     <div>&rArr; <i>CV</i><sub>x</sub> = [${frac("0.28", "4.24")}] &times; 100 &approx; <b>6.60%</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">For Weight y:</b></div>
     <div>&rArr; Mean (<i>ȳ</i>) = ${frac("&sum; y<sub>i</sub>", "n")} = ${frac("261", "50")} = <b>5.22 gm</b></div>
     <div>&rArr; Variance (&sigma;<sub>y</sub><sup>2</sup>) = ${frac("1", "n")} &sum; <i>y</i><sub>i</sub><sup>2</sup> &minus; (<i>ȳ</i>)<sup>2</sup> = ${frac("1457.6", "50")} &minus; (5.22)<sup>2</sup> = 29.152 &minus; 27.2484 = <b>1.9036</b></div>
     <div>&rArr; Standard Deviation &sigma;<sub>y</sub> = &radic;1.9036 &approx; <b>1.38 gm</b></div>
     <div>&rArr; <i>CV</i><sub>y</sub> = [${frac("1.38", "5.22")}] &times; 100 &approx; <b>26.44%</b></div>

     <div style="margin-top: 10px;">Since <i>CV</i><sub>y</sub> (26.44%) &gt; <i>CV</i><sub>x</sub> (6.60%), <b>the weight is much more varying than the length</b>.</div>`,
    "Weight is more varying (CV_weight = 26.44% > CV_length = 6.60%)"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 13.3", "Analysis of Frequency Distributions &amp; Coefficient of Variation (Variability vs Consistency)")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx3 };
