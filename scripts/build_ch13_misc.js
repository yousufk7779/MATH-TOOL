const { THEME_COLOR, ACCENT_COLOR, STYLES, frac, qCard, exBanner } = require("./ch13_common");

function buildMisc() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "The mean and variance of eight observations are 9 and 9.25, respectively. If six of the observations are 6, 7, 10, 12, 12 and 13, find the remaining two observations.",
    `<div>Let the remaining two unknown observations be <i>x</i> and <i>y</i>. Total observations <i>n</i> = 8.</div>
     <div>Given: Mean (<i>x̄</i>) = 9, Variance (&sigma;<sup>2</sup>) = 9.25</div>
     
     <div style="margin-top: 8px;">• <b>From Mean formula:</b></div>
     <div>&rArr; <i>x̄</i> = ${frac("6 + 7 + 10 + 12 + 12 + 13 + x + y", "8")} = 9</div>
     <div>&rArr; 60 + <i>x</i> + <i>y</i> = 72</div>
     <div>&rArr; <b>x + y = 12</b> &nbsp;&nbsp;&nbsp;...(1)</div>

     <div style="margin-top: 10px;">• <b>From Variance formula:</b></div>
     <div>&sigma;<sup>2</sup> = ${frac("1", "n")} &sum; (<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></div>
     <div>&rArr; 9.25 = ${frac("1", "8")} [(6 &minus; 9)<sup>2</sup> + (7 &minus; 9)<sup>2</sup> + (10 &minus; 9)<sup>2</sup> + (12 &minus; 9)<sup>2</sup> + (12 &minus; 9)<sup>2</sup> + (13 &minus; 9)<sup>2</sup> + (<i>x</i> &minus; 9)<sup>2</sup> + (<i>y</i> &minus; 9)<sup>2</sup>]</div>
     <div>&rArr; 9.25 &times; 8 = [(&minus;3)<sup>2</sup> + (&minus;2)<sup>2</sup> + 1<sup>2</sup> + 3<sup>2</sup> + 3<sup>2</sup> + 4<sup>2</sup> + (<i>x</i> &minus; 9)<sup>2</sup> + (<i>y</i> &minus; 9)<sup>2</sup>]</div>
     <div>&rArr; 74 = [9 + 4 + 1 + 9 + 9 + 16 + <i>x</i><sup>2</sup> &minus; 18<i>x</i> + 81 + <i>y</i><sup>2</sup> &minus; 18<i>y</i> + 81]</div>
     <div>&rArr; 74 = [48 + <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 18(<i>x</i> + <i>y</i>) + 162]</div>
     <div>Substituting <i>x</i> + <i>y</i> = 12 from equation (1):</div>
     <div>&rArr; 74 = [210 + <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 18(12)] = 210 + <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 216 = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 6</div>
     <div>&rArr; <b>x<sup>2</sup> + y<sup>2</sup> = 80</b> &nbsp;&nbsp;&nbsp;...(2)</div>

     <div style="margin-top: 10px;">• <b>Solving for x and y:</b></div>
     <div>From (<i>x</i> + <i>y</i>)<sup>2</sup> = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>xy</i>:</div>
     <div>&rArr; 12<sup>2</sup> = 80 + 2<i>xy</i> &rArr; 144 &minus; 80 = 2<i>xy</i> &rArr; 2<i>xy</i> = 64</div>
     <div>Now consider (<i>x</i> &minus; <i>y</i>)<sup>2</sup>:</div>
     <div>&rArr; (<i>x</i> &minus; <i>y</i>)<sup>2</sup> = (<i>x</i> + <i>y</i>)<sup>2</sup> &minus; 4<i>xy</i> = 144 &minus; 128 = 16</div>
     <div>&rArr; <b>x &minus; y = &plusmn;4</b> &nbsp;&nbsp;&nbsp;...(3)</div>
     <div>Adding equations (1) and (3):</div>
     <div>Case I: If <i>x</i> &minus; <i>y</i> = 4 &rArr; 2<i>x</i> = 16 &rArr; <i>x</i> = 8, <i>y</i> = 4</div>
     <div>Case II: If <i>x</i> &minus; <i>y</i> = &minus;4 &rArr; 2<i>x</i> = 8 &rArr; <i>x</i> = 4, <i>y</i> = 8</div>
     <div>Thus, the remaining two observations are <b>4 and 8</b>.</div>`,
    "The remaining two observations are 4 and 8"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "The mean and variance of 7 observations are 8 and 16, respectively. If five of the observations are 2, 4, 10, 12, 14, find the remaining two observations.",
    `<div>Let the two unknown observations be <i>x</i> and <i>y</i>. Total observations <i>n</i> = 7.</div>
     <div>Given: Mean (<i>x̄</i>) = 8, Variance (&sigma;<sup>2</sup>) = 16</div>

     <div style="margin-top: 8px;">• <b>From Mean formula:</b></div>
     <div>&rArr; <i>x̄</i> = ${frac("2 + 4 + 10 + 12 + 14 + x + y", "7")} = 8</div>
     <div>&rArr; 42 + <i>x</i> + <i>y</i> = 56</div>
     <div>&rArr; <b>x + y = 14</b> &nbsp;&nbsp;&nbsp;...(1)</div>

     <div style="margin-top: 10px;">• <b>From Variance formula:</b></div>
     <div>&sigma;<sup>2</sup> = ${frac("1", "n")} &sum; (<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></div>
     <div>&rArr; 16 = ${frac("1", "7")} [(2 &minus; 8)<sup>2</sup> + (4 &minus; 8)<sup>2</sup> + (10 &minus; 8)<sup>2</sup> + (12 &minus; 8)<sup>2</sup> + (14 &minus; 8)<sup>2</sup> + (<i>x</i> &minus; 8)<sup>2</sup> + (<i>y</i> &minus; 8)<sup>2</sup>]</div>
     <div>&rArr; 16 &times; 7 = [(&minus;6)<sup>2</sup> + (&minus;4)<sup>2</sup> + 2<sup>2</sup> + 4<sup>2</sup> + 6<sup>2</sup> + (<i>x</i> &minus; 8)<sup>2</sup> + (<i>y</i> &minus; 8)<sup>2</sup>]</div>
     <div>&rArr; 112 = [36 + 16 + 4 + 16 + 36 + <i>x</i><sup>2</sup> &minus; 16<i>x</i> + 64 + <i>y</i><sup>2</sup> &minus; 16<i>y</i> + 64]</div>
     <div>&rArr; 112 = [108 + 128 + <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 16(<i>x</i> + <i>y</i>)]</div>
     <div>Substituting <i>x</i> + <i>y</i> = 14 from equation (1):</div>
     <div>&rArr; 112 = 236 + <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 16(14) = 236 + <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 224 = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 12</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 112 &minus; 12 = <b>100</b> &nbsp;&nbsp;&nbsp;...(2)</div>

     <div style="margin-top: 10px;">• <b>Solving for x and y:</b></div>
     <div>From (<i>x</i> + <i>y</i>)<sup>2</sup> = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>xy</i>:</div>
     <div>&rArr; 14<sup>2</sup> = 100 + 2<i>xy</i> &rArr; 196 &minus; 100 = 2<i>xy</i> &rArr; 2<i>xy</i> = 96</div>
     <div>Now: (<i>x</i> &minus; <i>y</i>)<sup>2</sup> = (<i>x</i> + <i>y</i>)<sup>2</sup> &minus; 4<i>xy</i> = 196 &minus; 192 = 4</div>
     <div>&rArr; <b>x &minus; y = &plusmn;2</b> &nbsp;&nbsp;&nbsp;...(3)</div>
     <div>Combining with <i>x</i> + <i>y</i> = 14:</div>
     <div>Case I: <i>x</i> &minus; <i>y</i> = 2 &rArr; <i>x</i> = 8, <i>y</i> = 6</div>
     <div>Case II: <i>x</i> &minus; <i>y</i> = &minus;2 &rArr; <i>x</i> = 6, <i>y</i> = 8</div>
     <div>Thus, the remaining two observations are <b>6 and 8</b>.</div>`,
    "The remaining two observations are 6 and 8"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "The mean and standard deviation of six observations are 8 and 4, respectively. If each observation is multiplied by 3, find the new mean and new standard deviation of the resulting observations.",
    `<div>Let the initial observations be <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, ..., <i>x</i><sub>6</sub>.</div>
     <div>Given: <i>n</i> = 6, Mean (<i>x̄</i>) = 8, Standard Deviation (&sigma;<sub>x</sub>) = 4 &rArr; Variance (&sigma;<sub>x</sub><sup>2</sup>) = 16</div>
     <div>Let the new observations be <i>y</i><sub>i</sub> = 3<i>x</i><sub>i</sub> (for <i>i</i> = 1 to 6).</div>

     <div style="margin-top: 10px;">• <b>New Mean (<i>ȳ</i>):</b></div>
     <div>&rArr; <i>ȳ</i> = ${frac("&sum; y<sub>i</sub>", "n")} = ${frac("&sum; 3x<sub>i</sub>", "6")} = 3 [${frac("&sum; x<sub>i</sub>", "6")}] = 3<i>x̄</i></div>
     <div>&rArr; <i>ȳ</i> = 3 &times; 8 = <b>24</b></div>

     <div style="margin-top: 12px;">• <b>New Variance (&sigma;<sub>y</sub><sup>2</sup>):</b></div>
     <div>&rArr; &sigma;<sub>y</sub><sup>2</sup> = ${frac("1", "6")} &sum;<sub>i=1</sub><sup>6</sup> (<i>y</i><sub>i</sub> &minus; <i>ȳ</i>)<sup>2</sup> = ${frac("1", "6")} &sum;<sub>i=1</sub><sup>6</sup> (3<i>x</i><sub>i</sub> &minus; 3<i>x̄</i>)<sup>2</sup></div>
     <div>&rArr; &sigma;<sub>y</sub><sup>2</sup> = ${frac("1", "6")} &times; 9 &sum;<sub>i=1</sub><sup>6</sup> (<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup> = 9 &times; &sigma;<sub>x</sub><sup>2</sup> = 9 &times; 16 = <b>144</b></div>

     <div style="margin-top: 10px;">• <b>New Standard Deviation (&sigma;<sub>y</sub>):</b></div>
     <div>&rArr; &sigma;<sub>y</sub> = &radic;144 = <b>12</b> (or simply |3| &times; &sigma;<sub>x</sub> = 3 &times; 4 = 12)</div>`,
    "New Mean = 24 &nbsp;|&nbsp; New Standard Deviation = 12"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Given that x̄ is the mean and &sigma;<sup>2</sup> is the variance of n observations x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>. Prove that the mean and variance of the observations ax<sub>1</sub>, ax<sub>2</sub>, ax<sub>3</sub>, ..., ax<sub>n</sub> are ax̄ and a<sup>2</sup>&sigma;<sup>2</sup>, respectively (a &ne; 0).",
    `<div>Let the original observations be <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, ..., <i>x</i><sub>n</sub> with mean <i>x̄</i> and variance &sigma;<sup>2</sup>.</div>
     <div>Let the transformed observations be <i>y</i><sub>i</sub> = <i>ax</i><sub>i</sub> (<i>i</i> = 1, 2, ..., <i>n</i>).</div>

     <div style="margin-top: 10px;">• <b>1. Proof for Mean of y<sub>i</sub>:</b></div>
     <div>&rArr; <i>ȳ</i> = ${frac("&sum;<sub>i=1</sub><sup>n</sup> y<sub>i</sub>", "n")} = ${frac("&sum;<sub>i=1</sub><sup>n</sup> (ax<sub>i</sub>)", "n")} = ${frac("a &sum;<sub>i=1</sub><sup>n</sup> x<sub>i</sub>", "n")} = <i>a</i> [${frac("&sum; x<sub>i</sub>", "n")}]</div>
     <div>&rArr; <b>ȳ = ax̄</b> &nbsp;&nbsp;[Proved]</div>

     <div style="margin-top: 12px;">• <b>2. Proof for Variance of y<sub>i</sub>:</b></div>
     <div>By definition of variance:</div>
     <div>&rArr; &sigma;<sub>y</sub><sup>2</sup> = ${frac("1", "n")} &sum;<sub>i=1</sub><sup>n</sup> (<i>y</i><sub>i</sub> &minus; <i>ȳ</i>)<sup>2</sup></div>
     <div>Substituting <i>y</i><sub>i</sub> = <i>ax</i><sub>i</sub> and <i>ȳ</i> = <i>ax̄</i>:</div>
     <div>&rArr; &sigma;<sub>y</sub><sup>2</sup> = ${frac("1", "n")} &sum;<sub>i=1</sub><sup>n</sup> (<i>ax</i><sub>i</sub> &minus; <i>ax̄</i>)<sup>2</sup> = ${frac("1", "n")} &sum;<sub>i=1</sub><sup>n</sup> [<i>a</i>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)]<sup>2</sup></div>
     <div>&rArr; &sigma;<sub>y</sub><sup>2</sup> = ${frac("1", "n")} &sum;<sub>i=1</sub><sup>n</sup> <i>a</i><sup>2</sup>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup> = <i>a</i><sup>2</sup> [${frac("1", "n")} &sum;<sub>i=1</sub><sup>n</sup> (<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup>]</div>
     <div>Since &sigma;<sup>2</sup> = ${frac("1", "n")} &sum;<sub>i=1</sub><sup>n</sup> (<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup>:</div>
     <div>&rArr; <b>&sigma;<sub>y</sub><sup>2</sup> = a<sup>2</sup>&sigma;<sup>2</sup></b> &nbsp;&nbsp;[Proved]</div>`,
    "Mean = ax̄ &nbsp;and&nbsp; Variance = a²σ² (Proved)"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "The mean and standard deviation of 20 observations are found to be 10 and 2, respectively. On rechecking, it was found that an observation 8 was incorrect. Calculate the correct mean and standard deviation in each of the following cases:<br/>" +
    "(i) If wrong item is omitted.<br/>" +
    "(ii) If it is replaced by 12.",
    `<div>Given: <i>n</i> = 20, Incorrect Mean (<i>x̄</i>) = 10, Incorrect Standard Deviation (&sigma;) = 2 &rArr; &sigma;<sup>2</sup> = 4</div>
     <div>&rArr; Incorrect &sum; <i>x</i><sub>i</sub> = <i>n</i> &times; <i>x̄</i> = 20 &times; 10 = <b>200</b></div>
     <div>From &sigma;<sup>2</sup> = ${frac("&sum; x<sub>i</sub><sup>2</sup>", "n")} &minus; (<i>x̄</i>)<sup>2</sup>:</div>
     <div>&rArr; 4 = ${frac("&sum; x<sub>i</sub><sup>2</sup>", "20")} &minus; 10<sup>2</sup> &rArr; ${frac("&sum; x<sub>i</sub><sup>2</sup>", "20")} = 104 &rArr; Incorrect &sum; <i>x</i><sub>i</sub><sup>2</sup> = 20 &times; 104 = <b>2080</b></div>

     <div style="margin-top: 12px;">• <b style="color: ${THEME_COLOR};">(i) When incorrect observation 8 is omitted:</b></div>
     <div>New number of observations <i>n</i>' = 20 &minus; 1 = 19.</div>
     <div>Correct &sum; <i>x</i><sub>i</sub> = 200 &minus; 8 = 192</div>
     <div>&rArr; <b>Correct Mean</b> = ${frac("192", "19")} &approx; <b>10.10</b></div>
     <div>Correct &sum; <i>x</i><sub>i</sub><sup>2</sup> = 2080 &minus; 8<sup>2</sup> = 2080 &minus; 64 = 2016</div>
     <div>&rArr; Correct Variance = ${frac("2016", "19")} &minus; (10.105)<sup>2</sup> = 106.105 &minus; 102.116 = <b>3.989</b></div>
     <div>&rArr; <b>Correct Standard Deviation</b> = &radic;3.989 &approx; <b>2.02</b></div>

     <div style="margin-top: 14px;">• <b style="color: ${THEME_COLOR};">(ii) When incorrect observation 8 is replaced by 12:</b></div>
     <div>Total number of observations remains <i>n</i> = 20.</div>
     <div>Correct &sum; <i>x</i><sub>i</sub> = 200 &minus; 8 + 12 = 204</div>
     <div>&rArr; <b>Correct Mean</b> = ${frac("204", "20")} = <b>10.2</b></div>
     <div>Correct &sum; <i>x</i><sub>i</sub><sup>2</sup> = 2080 &minus; 8<sup>2</sup> + 12<sup>2</sup> = 2080 &minus; 64 + 144 = 2160</div>
     <div>&rArr; Correct Variance = ${frac("2160", "20")} &minus; (10.2)<sup>2</sup> = 108 &minus; 104.04 = <b>3.96</b></div>
     <div>&rArr; <b>Correct Standard Deviation</b> = &radic;3.96 &approx; <b>1.98</b></div>`,
    "(i) Omitted: Mean = 10.1, SD = 2.02 &nbsp;|&nbsp; (ii) Replaced by 12: Mean = 10.2, SD = 1.98"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "The mean and standard deviation of marks obtained by 50 students of a class in three subjects, Mathematics, Physics and Chemistry, are given below:<br/>" +
    "&bull; <b>Mathematics:</b> Mean = 42, Standard Deviation = 12<br/>" +
    "&bull; <b>Physics:</b> Mean = 32, Standard Deviation = 15<br/>" +
    "&bull; <b>Chemistry:</b> Mean = 40.9, Standard Deviation = 20<br/>" +
    "Which of the three subjects shows the highest variability in marks, and which shows the lowest?",
    `<div>Variability is evaluated by comparing the Coefficient of Variation: <i>CV</i> = [${frac("&sigma;", "x̄")}] &times; 100</div>

     <div style="margin-top: 8px;">• <b>1. For Mathematics:</b></div>
     <div>Mean <i>x̄</i> = 42, &sigma; = 12</div>
     <div>&rArr; <i>CV</i><sub>Maths</sub> = [${frac("12", "42")}] &times; 100 &approx; <b>28.57%</b></div>

     <div style="margin-top: 8px;">• <b>2. For Physics:</b></div>
     <div>Mean <i>x̄</i> = 32, &sigma; = 15</div>
     <div>&rArr; <i>CV</i><sub>Physics</sub> = [${frac("15", "32")}] &times; 100 &approx; <b>46.88%</b></div>

     <div style="margin-top: 8px;">• <b>3. For Chemistry:</b></div>
     <div>Mean <i>x̄</i> = 40.9, &sigma; = 20</div>
     <div>&rArr; <i>CV</i><sub>Chemistry</sub> = [${frac("20", "40.9")}] &times; 100 &approx; <b>48.90%</b></div>

     <div style="margin-top: 10px;">Comparing the three coefficients:</div>
     <div><b>28.57% &lt; 46.88% &lt; 48.90%</b></div>
     <div>&rArr; <b>Highest variability in marks:</b> Chemistry (48.90%)</div>
     <div>&rArr; <b>Lowest variability in marks:</b> Mathematics (28.57%)</div>`,
    "Highest variability: Chemistry (48.90%) &nbsp;|&nbsp; Lowest variability: Mathematics (28.57%)"
  ));

  // Q7
  cards.push(qCard(
    "7",
    "The mean and standard deviation of a group of 100 observations were found to be 20 and 3, respectively. Later on, it was found that three observations were incorrect, which were recorded as 21, 21 and 18. Find the mean and standard deviation if the incorrect observations are omitted.",
    `<div>Given: <i>n</i> = 100, Incorrect Mean (<i>x̄</i>) = 20, Incorrect Standard Deviation (&sigma;) = 3 &rArr; &sigma;<sup>2</sup> = 9</div>
     <div>&rArr; Incorrect &sum; <i>x</i><sub>i</sub> = 100 &times; 20 = <b>2000</b></div>
     <div>From &sigma;<sup>2</sup> = ${frac("&sum; x<sub>i</sub><sup>2</sup>", "n")} &minus; (<i>x̄</i>)<sup>2</sup>:</div>
     <div>&rArr; 9 = ${frac("&sum; x<sub>i</sub><sup>2</sup>", "100")} &minus; 20<sup>2</sup> &rArr; ${frac("&sum; x<sub>i</sub><sup>2</sup>", "100")} = 409 &rArr; Incorrect &sum; <i>x</i><sub>i</sub><sup>2</sup> = <b>40900</b></div>

     <div style="margin-top: 10px;">Omitting the three incorrect observations (21, 21, 18):</div>
     <div>New number of observations <i>n</i>' = 100 &minus; 3 = <b>97</b>.</div>
     
     <div style="margin-top: 8px;">• <b>Correct Mean:</b></div>
     <div>Correct &sum; <i>x</i><sub>i</sub> = 2000 &minus; (21 + 21 + 18) = 2000 &minus; 60 = <b>1940</b></div>
     <div>&rArr; <b>Correct Mean</b> = ${frac("1940", "97")} = <b>20</b></div>

     <div style="margin-top: 10px;">• <b>Correct Standard Deviation:</b></div>
     <div>Sum of squares of incorrect observations = 21<sup>2</sup> + 21<sup>2</sup> + 18<sup>2</sup> = 441 + 441 + 324 = 1206</div>
     <div>Correct &sum; <i>x</i><sub>i</sub><sup>2</sup> = 40900 &minus; 1206 = <b>39694</b></div>
     <div>&rArr; Correct Variance = ${frac("39694", "97")} &minus; (20)<sup>2</sup> = 409.2165 &minus; 400 = <b>9.2165</b></div>
     <div>&rArr; <b>Correct Standard Deviation</b> = &radic;9.2165 &approx; <b>3.036</b></div>`,
    "Correct Mean = 20 &nbsp;|&nbsp; Correct Standard Deviation = 3.036"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Miscellaneous Exercise", "Advanced Dispersion Analysis, Correction of Data &amp; Property Proofs")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildMisc };
