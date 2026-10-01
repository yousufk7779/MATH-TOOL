const { THEME_COLOR, ACCENT_COLOR, STYLES, frac, qCard, exBanner } = require("./ch13_common");

function buildEx2() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Find the mean and variance for the data:<br/><b>6, 7, 10, 12, 13, 4, 8, 12</b>",
    `<div>Number of observations <i>n</i> = 8.</div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; x<sub>i</sub>", "n")} = ${frac("6 + 7 + 10 + 12 + 13 + 4 + 8 + 12", "8")} = ${frac("72", "8")} = <b>9</b></div>
     <div style="margin-top: 10px;">Let us construct the deviation and squared deviation table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>) = (<i>x</i><sub>i</sub> &minus; 9)</th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>6</td><td>&minus;3</td><td>9</td></tr>
           <tr><td>7</td><td>&minus;2</td><td>4</td></tr>
           <tr><td>10</td><td>1</td><td>1</td></tr>
           <tr><td>12</td><td>3</td><td>9</td></tr>
           <tr><td>13</td><td>4</td><td>16</td></tr>
           <tr><td>4</td><td>&minus;5</td><td>25</td></tr>
           <tr><td>8</td><td>&minus;1</td><td>1</td></tr>
           <tr><td>12</td><td>3</td><td>9</td></tr>
           <tr class="total-row"><td>Total</td><td>0</td><td>&sum; (<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup> = 74</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Variance (&sigma;<sup>2</sup>) = ${frac("&sum; (x<sub>i</sub> &minus; x̄)<sup>2</sup>", "n")} = ${frac("74", "8")} = <b>9.25</b></div>`,
    "Mean = 9 &nbsp;|&nbsp; Variance = 9.25"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "Find the mean and variance for the <b>first n natural numbers</b>.",
    `<div>The first <i>n</i> natural numbers are 1, 2, 3, ..., <i>n</i>.</div>
     <div>• <b>Mean (<i>x̄</i>):</b></div>
     <div>&rArr; <i>x̄</i> = ${frac("&sum; x<sub>i</sub>", "n")} = ${frac("1 + 2 + ... + n", "n")} = ${frac("n(n + 1)", "2n")} = <b>${frac("n + 1", "2")}</b></div>
     
     <div style="margin-top: 12px;">• <b>Variance (&sigma;<sup>2</sup>):</b></div>
     <div>Using the formula: &sigma;<sup>2</sup> = ${frac("1", "n")} &sum; <i>x</i><sub>i</sub><sup>2</sup> &minus; (<i>x̄</i>)<sup>2</sup></div>
     <div>Since &sum; <i>x</i><sub>i</sub><sup>2</sup> = ${frac("n(n + 1)(2n + 1)", "6")}:</div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("1", "n")} &times; ${frac("n(n + 1)(2n + 1)", "6")} &minus; [${frac("n + 1", "2")}]<sup>2</sup></div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("(n + 1)(2n + 1)", "6")} &minus; ${frac("(n + 1)<sup>2</sup>", "4")}</div>
     <div>Taking common factor ${frac("n + 1", "2")}:</div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("n + 1", "2")} [${frac("2n + 1", "3")} &minus; ${frac("n + 1", "2")}]</div>
     <div>Taking LCM = 6 inside the bracket:</div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("n + 1", "2")} [${frac("2(2n + 1) &minus; 3(n + 1)", "6")}] = ${frac("n + 1", "2")} [${frac("4n + 2 &minus; 3n &minus; 3", "6")}]</div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("n + 1", "2")} &times; ${frac("n &minus; 1", "6")} = <b>${frac("n<sup>2</sup> &minus; 1", "12")}</b></div>`,
    `Mean = ${frac("n + 1", "2")} &nbsp;|&nbsp; Variance = ${frac("n<sup>2</sup> &minus; 1", "12")}`
  ));

  // Q3
  cards.push(qCard(
    "3",
    "Find the mean and variance for the <b>first 10 multiples of 3</b>.",
    `<div>The first 10 multiples of 3 are: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Number of terms <i>n</i> = 10.</div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("3 + 6 + 9 + 12 + 15 + 18 + 21 + 24 + 27 + 30", "10")} = ${frac("165", "10")} = <b>16.5</b></div>
     <div style="margin-top: 10px;">Calculation Table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th>(<i>x</i><sub>i</sub> &minus; 16.5)</th>
             <th>(<i>x</i><sub>i</sub> &minus; 16.5)<sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>3</td><td>&minus;13.5</td><td>182.25</td></tr>
           <tr><td>6</td><td>&minus;10.5</td><td>110.25</td></tr>
           <tr><td>9</td><td>&minus;7.5</td><td>56.25</td></tr>
           <tr><td>12</td><td>&minus;4.5</td><td>20.25</td></tr>
           <tr><td>15</td><td>&minus;1.5</td><td>2.25</td></tr>
           <tr><td>18</td><td>1.5</td><td>2.25</td></tr>
           <tr><td>21</td><td>4.5</td><td>20.25</td></tr>
           <tr><td>24</td><td>7.5</td><td>56.25</td></tr>
           <tr><td>27</td><td>10.5</td><td>110.25</td></tr>
           <tr><td>30</td><td>13.5</td><td>182.25</td></tr>
           <tr class="total-row"><td>Total</td><td>0</td><td>&sum; (<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup> = 742.5</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Variance (&sigma;<sup>2</sup>) = ${frac("&sum; (x<sub>i</sub> &minus; x̄)<sup>2</sup>", "n")} = ${frac("742.5", "10")} = <b>74.25</b></div>`,
    "Mean = 16.5 &nbsp;|&nbsp; Variance = 74.25"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the mean and variance for the data:<br/>" +
    "<b>x<sub>i</sub>:</b> 6, 10, 14, 18, 24, 28, 30<br/>" +
    "<b>f<sub>i</sub>:</b> 2, 4, 7, 12, 8, 4, 3",
    `<div>Let us construct the calculation table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub> <i>x</i><sub>i</sub></th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)</th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
             <th><i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>6</td><td>2</td><td>12</td><td>6 &minus; 19 = &minus;13</td><td>169</td><td>338</td></tr>
           <tr><td>10</td><td>4</td><td>40</td><td>10 &minus; 19 = &minus;9</td><td>81</td><td>324</td></tr>
           <tr><td>14</td><td>7</td><td>98</td><td>14 &minus; 19 = &minus;5</td><td>25</td><td>175</td></tr>
           <tr><td>18</td><td>12</td><td>216</td><td>18 &minus; 19 = &minus;1</td><td>1</td><td>12</td></tr>
           <tr><td>24</td><td>8</td><td>192</td><td>24 &minus; 19 = 5</td><td>25</td><td>200</td></tr>
           <tr><td>28</td><td>4</td><td>112</td><td>28 &minus; 19 = 9</td><td>81</td><td>324</td></tr>
           <tr><td>30</td><td>3</td><td>90</td><td>30 &minus; 19 = 11</td><td>121</td><td>363</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 40</td><td>760</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup> = 1736</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> x<sub>i</sub>", "N")} = ${frac("760", "40")} = <b>19</b></div>
     <div style="margin-top: 8px;">&rArr; Variance (&sigma;<sup>2</sup>) = ${frac("&sum; f<sub>i</sub> (x<sub>i</sub> &minus; x̄)<sup>2</sup>", "N")} = ${frac("1736", "40")} = <b>43.4</b></div>`,
    "Mean = 19 &nbsp;|&nbsp; Variance = 43.4"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Find the mean and variance for the data:<br/>" +
    "<b>x<sub>i</sub>:</b> 92, 93, 97, 98, 102, 104, 109<br/>" +
    "<b>f<sub>i</sub>:</b> 3, 2, 3, 2, 6, 3, 3",
    `<div>Let us construct the calculation table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub> <i>x</i><sub>i</sub></th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)</th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
             <th><i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>92</td><td>3</td><td>276</td><td>92 &minus; 100 = &minus;8</td><td>64</td><td>192</td></tr>
           <tr><td>93</td><td>2</td><td>186</td><td>93 &minus; 100 = &minus;7</td><td>49</td><td>98</td></tr>
           <tr><td>97</td><td>3</td><td>291</td><td>97 &minus; 100 = &minus;3</td><td>9</td><td>27</td></tr>
           <tr><td>98</td><td>2</td><td>196</td><td>98 &minus; 100 = &minus;2</td><td>4</td><td>8</td></tr>
           <tr><td>102</td><td>6</td><td>612</td><td>102 &minus; 100 = 2</td><td>4</td><td>24</td></tr>
           <tr><td>104</td><td>3</td><td>312</td><td>104 &minus; 100 = 4</td><td>16</td><td>48</td></tr>
           <tr><td>109</td><td>3</td><td>327</td><td>109 &minus; 100 = 9</td><td>81</td><td>243</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 22</td><td>2200</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup> = 640</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> x<sub>i</sub>", "N")} = ${frac("2200", "22")} = <b>100</b></div>
     <div style="margin-top: 8px;">&rArr; Variance (&sigma;<sup>2</sup>) = ${frac("&sum; f<sub>i</sub> (x<sub>i</sub> &minus; x̄)<sup>2</sup>", "N")} = ${frac("640", "22")} = ${frac("320", "11")} &approx; <b>29.09</b></div>`,
    "Mean = 100 &nbsp;|&nbsp; Variance = 29.09"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Find the mean and standard deviation using the <b>short-cut method</b> for the data:<br/>" +
    "<b>x<sub>i</sub>:</b> 60, 61, 62, 63, 64, 65, 66, 67, 68<br/>" +
    "<b>f<sub>i</sub>:</b> 2, 1, 12, 29, 25, 12, 10, 4, 5",
    `<div>Let Assumed Mean <i>A</i> = 64 and class step size <i>h</i> = 1.</div>
     <div>Let step deviation <i>y</i><sub>i</sub> = ${frac("x<sub>i</sub> &minus; A", "h")} = <i>x</i><sub>i</sub> &minus; 64.</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub></th>
             <th><i>y</i><sub>i</sub></th>
             <th><i>y</i><sub>i</sub><sup>2</sup></th>
             <th><i>f</i><sub>i</sub><i>y</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>60</td><td>2</td><td>&minus;4</td><td>16</td><td>&minus;8</td><td>32</td></tr>
           <tr><td>61</td><td>1</td><td>&minus;3</td><td>9</td><td>&minus;3</td><td>9</td></tr>
           <tr><td>62</td><td>12</td><td>&minus;2</td><td>4</td><td>&minus;24</td><td>48</td></tr>
           <tr><td>63</td><td>29</td><td>&minus;1</td><td>1</td><td>&minus;29</td><td>29</td></tr>
           <tr><td>64</td><td>25</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
           <tr><td>65</td><td>12</td><td>1</td><td>1</td><td>12</td><td>12</td></tr>
           <tr><td>66</td><td>10</td><td>2</td><td>4</td><td>20</td><td>40</td></tr>
           <tr><td>67</td><td>4</td><td>3</td><td>9</td><td>12</td><td>36</td></tr>
           <tr><td>68</td><td>5</td><td>4</td><td>16</td><td>20</td><td>80</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 100</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub> = 0</td><td>&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> = 286</td></tr>
         </tbody>
       </table>
     </div>
     <div>• <b>Mean (<i>x̄</i>):</b></div>
     <div>&rArr; <i>x̄</i> = <i>A</i> + [${frac("&sum; f<sub>i</sub> y<sub>i</sub>", "N")}] &times; <i>h</i> = 64 + [${frac("0", "100")}] &times; 1 = <b>64</b></div>
     <div style="margin-top: 10px;">• <b>Variance (&sigma;<sup>2</sup>):</b></div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("h<sup>2</sup>", "N<sup>2</sup>")} [<i>N</i> &sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> &minus; (&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub>)<sup>2</sup>]</div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("1<sup>2</sup>", "100<sup>2</sup>")} [100(286) &minus; 0<sup>2</sup>] = ${frac("28600", "10000")} = <b>2.86</b></div>
     <div style="margin-top: 10px;">• <b>Standard Deviation (&sigma;):</b></div>
     <div>&rArr; &sigma; = &radic;2.86 &approx; <b>1.691</b></div>`,
    "Mean = 64 &nbsp;|&nbsp; Variance = 2.86 &nbsp;|&nbsp; Standard Deviation = 1.691"
  ));

  // Q7
  cards.push(qCard(
    "7",
    "Find the mean and variance for the frequency distribution:<br/>" +
    "<b>Classes:</b> 0&ndash;30, 30&ndash;60, 60&ndash;90, 90&ndash;120, 120&ndash;150, 150&ndash;180, 180&ndash;210<br/>" +
    "<b>Frequencies:</b> 2, 3, 5, 10, 3, 5, 2",
    `<div>Let us calculate midpoints (<i>x</i><sub>i</sub>) and form the table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Class</th>
             <th><i>f</i><sub>i</sub></th>
             <th>Midpoint (<i>x</i><sub>i</sub>)</th>
             <th><i>f</i><sub>i</sub> <i>x</i><sub>i</sub></th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)</th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
             <th><i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>0&ndash;30</td><td>2</td><td>15</td><td>30</td><td>15 &minus; 107 = &minus;92</td><td>8464</td><td>16928</td></tr>
           <tr><td>30&ndash;60</td><td>3</td><td>45</td><td>135</td><td>45 &minus; 107 = &minus;62</td><td>3844</td><td>11532</td></tr>
           <tr><td>60&ndash;90</td><td>5</td><td>75</td><td>375</td><td>75 &minus; 107 = &minus;32</td><td>1024</td><td>5120</td></tr>
           <tr><td>90&ndash;120</td><td>10</td><td>105</td><td>1050</td><td>105 &minus; 107 = &minus;2</td><td>4</td><td>40</td></tr>
           <tr><td>120&ndash;150</td><td>3</td><td>135</td><td>405</td><td>135 &minus; 107 = 28</td><td>784</td><td>2352</td></tr>
           <tr><td>150&ndash;180</td><td>5</td><td>165</td><td>825</td><td>165 &minus; 107 = 58</td><td>3364</td><td>16820</td></tr>
           <tr><td>180&ndash;210</td><td>2</td><td>195</td><td>390</td><td>195 &minus; 107 = 88</td><td>7744</td><td>15488</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 30</td><td>&mdash;</td><td>3210</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup> = 68280</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> x<sub>i</sub>", "N")} = ${frac("3210", "30")} = <b>107</b></div>
     <div style="margin-top: 8px;">&rArr; Variance (&sigma;<sup>2</sup>) = ${frac("&sum; f<sub>i</sub> (x<sub>i</sub> &minus; x̄)<sup>2</sup>", "N")} = ${frac("68280", "30")} = <b>2276</b></div>`,
    "Mean = 107 &nbsp;|&nbsp; Variance = 2276"
  ));

  // Q8
  cards.push(qCard(
    "8",
    "Find the mean and variance for the frequency distribution:<br/>" +
    "<b>Classes:</b> 0&ndash;10, 10&ndash;20, 20&ndash;30, 30&ndash;40, 40&ndash;50<br/>" +
    "<b>Frequencies:</b> 5, 8, 15, 16, 6",
    `<div>Let us calculate midpoints (<i>x</i><sub>i</sub>) and form the table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Class</th>
             <th><i>f</i><sub>i</sub></th>
             <th>Midpoint (<i>x</i><sub>i</sub>)</th>
             <th><i>f</i><sub>i</sub> <i>x</i><sub>i</sub></th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)</th>
             <th>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
             <th><i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>0&ndash;10</td><td>5</td><td>5</td><td>25</td><td>5 &minus; 27 = &minus;22</td><td>484</td><td>2420</td></tr>
           <tr><td>10&ndash;20</td><td>8</td><td>15</td><td>120</td><td>15 &minus; 27 = &minus;12</td><td>144</td><td>1152</td></tr>
           <tr><td>20&ndash;30</td><td>15</td><td>25</td><td>375</td><td>25 &minus; 27 = &minus;2</td><td>4</td><td>60</td></tr>
           <tr><td>30&ndash;40</td><td>16</td><td>35</td><td>560</td><td>35 &minus; 27 = 8</td><td>64</td><td>1024</td></tr>
           <tr><td>40&ndash;50</td><td>6</td><td>45</td><td>270</td><td>45 &minus; 27 = 18</td><td>324</td><td>1944</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 50</td><td>&mdash;</td><td>1350</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>(<i>x</i><sub>i</sub> &minus; <i>x̄</i>)<sup>2</sup> = 6600</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> x<sub>i</sub>", "N")} = ${frac("1350", "50")} = <b>27</b></div>
     <div style="margin-top: 8px;">&rArr; Variance (&sigma;<sup>2</sup>) = ${frac("&sum; f<sub>i</sub> (x<sub>i</sub> &minus; x̄)<sup>2</sup>", "N")} = ${frac("6600", "50")} = <b>132</b></div>`,
    "Mean = 27 &nbsp;|&nbsp; Variance = 132"
  ));

  // Q9
  cards.push(qCard(
    "9",
    "Find the mean, variance and standard deviation using the <b>short-cut method</b>:<br/>" +
    "<b>Height (cm):</b> 70&ndash;75, 75&ndash;80, 80&ndash;85, 85&ndash;90, 90&ndash;95, 95&ndash;100, 100&ndash;105, 105&ndash;110, 110&ndash;115<br/>" +
    "<b>Frequencies:</b> 3, 4, 7, 7, 15, 9, 6, 6, 3",
    `<div>Let Assumed Mean <i>A</i> = 92.5 and class width <i>h</i> = 5.</div>
     <div>Step deviation <i>y</i><sub>i</sub> = ${frac("x<sub>i</sub> &minus; 92.5", "5")}.</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Class</th>
             <th><i>f</i><sub>i</sub></th>
             <th><i>x</i><sub>i</sub></th>
             <th><i>y</i><sub>i</sub></th>
             <th><i>y</i><sub>i</sub><sup>2</sup></th>
             <th><i>f</i><sub>i</sub><i>y</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>70&ndash;75</td><td>3</td><td>72.5</td><td>&minus;4</td><td>16</td><td>&minus;12</td><td>48</td></tr>
           <tr><td>75&ndash;80</td><td>4</td><td>77.5</td><td>&minus;3</td><td>9</td><td>&minus;12</td><td>36</td></tr>
           <tr><td>80&ndash;85</td><td>7</td><td>82.5</td><td>&minus;2</td><td>4</td><td>&minus;14</td><td>28</td></tr>
           <tr><td>85&ndash;90</td><td>7</td><td>87.5</td><td>&minus;1</td><td>1</td><td>&minus;7</td><td>7</td></tr>
           <tr><td>90&ndash;95</td><td>15</td><td>92.5</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
           <tr><td>95&ndash;100</td><td>9</td><td>97.5</td><td>1</td><td>1</td><td>9</td><td>9</td></tr>
           <tr><td>100&ndash;105</td><td>6</td><td>102.5</td><td>2</td><td>4</td><td>12</td><td>24</td></tr>
           <tr><td>105&ndash;110</td><td>6</td><td>107.5</td><td>3</td><td>9</td><td>18</td><td>54</td></tr>
           <tr><td>110&ndash;115</td><td>3</td><td>112.5</td><td>4</td><td>16</td><td>12</td><td>48</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 60</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub> = 6</td><td>&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> = 254</td></tr>
         </tbody>
       </table>
     </div>
     <div>• <b>Mean (<i>x̄</i>):</b></div>
     <div>&rArr; <i>x̄</i> = <i>A</i> + [${frac("&sum; f<sub>i</sub> y<sub>i</sub>", "N")}] &times; <i>h</i> = 92.5 + [${frac("6", "60")}] &times; 5 = 92.5 + 0.5 = <b>93</b></div>
     <div style="margin-top: 10px;">• <b>Variance (&sigma;<sup>2</sup>):</b></div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("h<sup>2</sup>", "N<sup>2</sup>")} [<i>N</i> &sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> &minus; (&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub>)<sup>2</sup>]</div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("5<sup>2</sup>", "60<sup>2</sup>")} [60(254) &minus; 6<sup>2</sup>] = ${frac("25", "3600")} [15240 &minus; 36] = ${frac("1", "144")} &times; 15204 = ${frac("1267", "12")} &approx; <b>105.583</b></div>
     <div style="margin-top: 10px;">• <b>Standard Deviation (&sigma;):</b></div>
     <div>&rArr; &sigma; = &radic;105.583 &approx; <b>10.275</b></div>`,
    "Mean = 93 &nbsp;|&nbsp; Variance = 105.583 &nbsp;|&nbsp; Standard Deviation = 10.275"
  ));

  // Q10
  cards.push(qCard(
    "10",
    "The diameters of circles (in mm) drawn in a design are given below:<br/>" +
    "<b>Diameters:</b> 33&ndash;36, 37&ndash;40, 41&ndash;44, 45&ndash;48, 49&ndash;52<br/>" +
    "<b>No. of circles:</b> 15, 17, 21, 22, 25<br/>" +
    "Calculate the standard deviation and mean diameter of the circles.",
    `<div>Converting into continuous class boundaries by subtracting 0.5 from lower limits and adding 0.5 to upper limits:</div>
     <div>Let Assumed Mean <i>A</i> = 42.5 and <i>h</i> = 4. Step deviation <i>y</i><sub>i</sub> = ${frac("x<sub>i</sub> &minus; 42.5", "4")}.</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Class Interval</th>
             <th><i>f</i><sub>i</sub></th>
             <th>Midpoint (<i>x</i><sub>i</sub>)</th>
             <th><i>y</i><sub>i</sub></th>
             <th><i>y</i><sub>i</sub><sup>2</sup></th>
             <th><i>f</i><sub>i</sub><i>y</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup></th>
           </tr>
         </thead>
         <tbody>
           <tr><td>32.5&ndash;36.5</td><td>15</td><td>34.5</td><td>&minus;2</td><td>4</td><td>&minus;30</td><td>60</td></tr>
           <tr><td>36.5&ndash;40.5</td><td>17</td><td>38.5</td><td>&minus;1</td><td>1</td><td>&minus;17</td><td>17</td></tr>
           <tr><td>40.5&ndash;44.5</td><td>21</td><td>42.5</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
           <tr><td>44.5&ndash;48.5</td><td>22</td><td>46.5</td><td>1</td><td>1</td><td>22</td><td>22</td></tr>
           <tr><td>48.5&ndash;52.5</td><td>25</td><td>50.5</td><td>2</td><td>4</td><td>50</td><td>100</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 100</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub> = 25</td><td>&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> = 199</td></tr>
         </tbody>
       </table>
     </div>
     <div>• <b>Mean Diameter (<i>x̄</i>):</b></div>
     <div>&rArr; <i>x̄</i> = <i>A</i> + [${frac("&sum; f<sub>i</sub> y<sub>i</sub>", "N")}] &times; <i>h</i> = 42.5 + [${frac("25", "100")}] &times; 4 = 42.5 + 1 = <b>43.5 mm</b></div>
     <div style="margin-top: 10px;">• <b>Variance (&sigma;<sup>2</sup>):</b></div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("h<sup>2</sup>", "N<sup>2</sup>")} [<i>N</i> &sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> &minus; (&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub>)<sup>2</sup>]</div>
     <div>&rArr; &sigma;<sup>2</sup> = ${frac("4<sup>2</sup>", "100<sup>2</sup>")} [100(199) &minus; 25<sup>2</sup>] = ${frac("16", "10000")} [19900 &minus; 625] = ${frac("1", "625")} &times; 19275 = ${frac("771", "25")} = <b>30.84</b></div>
     <div style="margin-top: 10px;">• <b>Standard Deviation (&sigma;):</b></div>
     <div>&rArr; &sigma; = &radic;30.84 &approx; <b>5.553 mm</b></div>`,
    "Mean Diameter = 43.5 mm &nbsp;|&nbsp; Variance = 30.84 &nbsp;|&nbsp; Standard Deviation = 5.553 mm"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 13.2", "Mean, Variance &amp; Standard Deviation for Raw, Discrete &amp; Continuous Distributions")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx2 };
