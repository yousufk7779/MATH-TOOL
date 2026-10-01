const { THEME_COLOR, ACCENT_COLOR, STYLES, frac, qCard, exBanner } = require("./ch13_common");

function buildEx1() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Find the mean deviation about the mean for the data:<br/><b>4, 7, 8, 9, 10, 12, 13, 17</b>",
    `<div>Let the given observations be <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, ..., <i>x</i><sub>8</sub>. Number of observations <i>n</i> = 8.</div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; x<sub>i</sub>", "n")} = ${frac("4 + 7 + 8 + 9 + 10 + 12 + 13 + 17", "8")} = ${frac("80", "8")} = <b>10</b></div>
     <div style="margin-top: 10px;">Deviations of each observation from the mean (<i>x</i><sub>i</sub> &minus; <i>x̄</i>) are:</div>
     <div>(4 &minus; 10), (7 &minus; 10), (8 &minus; 10), (9 &minus; 10), (10 &minus; 10), (12 &minus; 10), (13 &minus; 10), (17 &minus; 10)</div>
     <div>&rArr; &minus;6, &minus;3, &minus;2, &minus;1, 0, 2, 3, 7</div>
     <div style="margin-top: 8px;">Absolute deviations |<i>x</i><sub>i</sub> &minus; <i>x̄</i>|:</div>
     <div>6, 3, 2, 1, 0, 2, 3, 7</div>
     <div>&rArr; &sum; |<i>x</i><sub>i</sub> &minus; <i>x̄</i>| = 6 + 3 + 2 + 1 + 0 + 2 + 3 + 7 = <b>24</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Mean, <i>MD</i>(<i>x̄</i>) = ${frac("&sum; |x<sub>i</sub> &minus; x̄|", "n")} = ${frac("24", "8")} = <b>3</b></div>`,
    "3"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "Find the mean deviation about the mean for the data:<br/><b>38, 70, 48, 40, 42, 55, 63, 46, 54, 44</b>",
    `<div>Number of observations <i>n</i> = 10.</div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; x<sub>i</sub>", "n")} = ${frac("38 + 70 + 48 + 40 + 42 + 55 + 63 + 46 + 54 + 44", "10")} = ${frac("500", "10")} = <b>50</b></div>
     <div style="margin-top: 10px;">Deviations (<i>x</i><sub>i</sub> &minus; <i>x̄</i>):</div>
     <div>&minus;12, 20, &minus;2, &minus;10, &minus;8, 5, 13, &minus;4, 4, &minus;6</div>
     <div style="margin-top: 8px;">Absolute deviations |<i>x</i><sub>i</sub> &minus; <i>x̄</i>|:</div>
     <div>12, 20, 2, 10, 8, 5, 13, 4, 4, 6</div>
     <div>&rArr; &sum; |<i>x</i><sub>i</sub> &minus; <i>x̄</i>| = 12 + 20 + 2 + 10 + 8 + 5 + 13 + 4 + 4 + 6 = <b>84</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Mean, <i>MD</i>(<i>x̄</i>) = ${frac("&sum; |x<sub>i</sub> &minus; x̄|", "n")} = ${frac("84", "10")} = <b>8.4</b></div>`,
    "8.4"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "Find the mean deviation about the median for the data:<br/><b>13, 17, 16, 14, 11, 13, 10, 16, 11, 18, 12, 17</b>",
    `<div>Arranging the given observations in ascending order:</div>
     <div><b>10, 11, 11, 12, 13, 13, 14, 16, 16, 17, 17, 18</b></div>
     <div>Number of observations <i>n</i> = 12 (even).</div>
     <div>&rArr; Median (<i>M</i>) = ${frac("6<sup>th</sup> observation + 7<sup>th</sup> observation", "2")} = ${frac("13 + 14", "2")} = ${frac("27", "2")} = <b>13.5</b></div>
     <div style="margin-top: 10px;">Absolute deviations |<i>x</i><sub>i</sub> &minus; <i>M</i>|:</div>
     <div>|10 &minus; 13.5| = 3.5, |11 &minus; 13.5| = 2.5, |11 &minus; 13.5| = 2.5, |12 &minus; 13.5| = 1.5, |13 &minus; 13.5| = 0.5, |13 &minus; 13.5| = 0.5,</div>
     <div>|14 &minus; 13.5| = 0.5, |16 &minus; 13.5| = 2.5, |16 &minus; 13.5| = 2.5, |17 &minus; 13.5| = 3.5, |17 &minus; 13.5| = 3.5, |18 &minus; 13.5| = 4.5</div>
     <div>&rArr; &sum; |<i>x</i><sub>i</sub> &minus; <i>M</i>| = 3.5 + 2.5 + 2.5 + 1.5 + 0.5 + 0.5 + 0.5 + 2.5 + 2.5 + 3.5 + 3.5 + 4.5 = <b>28</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Median, <i>MD</i>(<i>M</i>) = ${frac("&sum; |x<sub>i</sub> &minus; M|", "n")} = ${frac("28", "12")} = ${frac("7", "3")} &approx; <b>2.33</b></div>`,
    "2.33"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the mean deviation about the median for the data:<br/><b>36, 72, 46, 42, 60, 45, 53, 46, 51, 49</b>",
    `<div>Arranging the given observations in ascending order:</div>
     <div><b>36, 42, 45, 46, 46, 49, 51, 53, 60, 72</b></div>
     <div>Number of observations <i>n</i> = 10 (even).</div>
     <div>&rArr; Median (<i>M</i>) = ${frac("5<sup>th</sup> observation + 6<sup>th</sup> observation", "2")} = ${frac("46 + 49", "2")} = ${frac("95", "2")} = <b>47.5</b></div>
     <div style="margin-top: 10px;">Absolute deviations |<i>x</i><sub>i</sub> &minus; <i>M</i>|:</div>
     <div>|36 &minus; 47.5| = 11.5, |42 &minus; 47.5| = 5.5, |45 &minus; 47.5| = 2.5, |46 &minus; 47.5| = 1.5, |46 &minus; 47.5| = 1.5,</div>
     <div>|49 &minus; 47.5| = 1.5, |51 &minus; 47.5| = 3.5, |53 &minus; 47.5| = 5.5, |60 &minus; 47.5| = 12.5, |72 &minus; 47.5| = 24.5</div>
     <div>&rArr; &sum; |<i>x</i><sub>i</sub> &minus; <i>M</i>| = 11.5 + 5.5 + 2.5 + 1.5 + 1.5 + 1.5 + 3.5 + 5.5 + 12.5 + 24.5 = <b>70</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Median, <i>MD</i>(<i>M</i>) = ${frac("&sum; |x<sub>i</sub> &minus; M|", "n")} = ${frac("70", "10")} = <b>7</b></div>`,
    "7"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Find the mean deviation about the mean for the data:<br/>" +
    "<b>x<sub>i</sub>:</b> 5, 10, 15, 20, 25<br/>" +
    "<b>f<sub>i</sub>:</b> 7, 4, 6, 3, 5",
    `<div>Let us construct the calculation table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub> <i>x</i><sub>i</sub></th>
             <th>|<i>x</i><sub>i</sub> &minus; <i>x̄</i>|</th>
             <th><i>f</i><sub>i</sub> |<i>x</i><sub>i</sub> &minus; <i>x̄</i>|</th>
           </tr>
         </thead>
         <tbody>
           <tr><td>5</td><td>7</td><td>35</td><td>|5 &minus; 14| = 9</td><td>63</td></tr>
           <tr><td>10</td><td>4</td><td>40</td><td>|10 &minus; 14| = 4</td><td>16</td></tr>
           <tr><td>15</td><td>6</td><td>90</td><td>|15 &minus; 14| = 1</td><td>6</td></tr>
           <tr><td>20</td><td>3</td><td>60</td><td>|20 &minus; 14| = 6</td><td>18</td></tr>
           <tr><td>25</td><td>5</td><td>125</td><td>|25 &minus; 14| = 11</td><td>55</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 25</td><td>&sum; <i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 350</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> &minus; <i>x̄</i>| = 158</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> x<sub>i</sub>", "N")} = ${frac("350", "25")} = <b>14</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Mean, <i>MD</i>(<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; x̄|", "N")} = ${frac("158", "25")} = <b>6.32</b></div>`,
    "6.32"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Find the mean deviation about the mean for the data:<br/>" +
    "<b>x<sub>i</sub>:</b> 10, 30, 50, 70, 90<br/>" +
    "<b>f<sub>i</sub>:</b> 4, 24, 28, 16, 8",
    `<div>Let us construct the calculation table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub> <i>x</i><sub>i</sub></th>
             <th>|<i>x</i><sub>i</sub> &minus; <i>x̄</i>|</th>
             <th><i>f</i><sub>i</sub> |<i>x</i><sub>i</sub> &minus; <i>x̄</i>|</th>
           </tr>
         </thead>
         <tbody>
           <tr><td>10</td><td>4</td><td>40</td><td>|10 &minus; 50| = 40</td><td>160</td></tr>
           <tr><td>30</td><td>24</td><td>720</td><td>|30 &minus; 50| = 20</td><td>480</td></tr>
           <tr><td>50</td><td>28</td><td>1400</td><td>|50 &minus; 50| = 0</td><td>0</td></tr>
           <tr><td>70</td><td>16</td><td>1120</td><td>|70 &minus; 50| = 20</td><td>320</td></tr>
           <tr><td>90</td><td>8</td><td>720</td><td>|90 &minus; 50| = 40</td><td>320</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 80</td><td>&sum; <i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 4000</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> &minus; <i>x̄</i>| = 1280</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> x<sub>i</sub>", "N")} = ${frac("4000", "80")} = <b>50</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Mean, <i>MD</i>(<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; x̄|", "N")} = ${frac("1280", "80")} = <b>16</b></div>`,
    "16"
  ));

  // Q7
  cards.push(qCard(
    "7",
    "Find the mean deviation about the median for the data:<br/>" +
    "<b>x<sub>i</sub>:</b> 5, 7, 9, 10, 12, 15<br/>" +
    "<b>f<sub>i</sub>:</b> 8, 6, 2, 2, 2, 6",
    `<div>Let us construct the cumulative frequency table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub></th>
             <th>c.f.</th>
             <th>|<i>x</i><sub>i</sub> &minus; <i>M</i>|</th>
             <th><i>f</i><sub>i</sub> |<i>x</i><sub>i</sub> &minus; <i>M</i>|</th>
           </tr>
         </thead>
         <tbody>
           <tr><td>5</td><td>8</td><td>8</td><td>|5 &minus; 7| = 2</td><td>16</td></tr>
           <tr><td>7</td><td>6</td><td>14</td><td>|7 &minus; 7| = 0</td><td>0</td></tr>
           <tr><td>9</td><td>2</td><td>16</td><td>|9 &minus; 7| = 2</td><td>4</td></tr>
           <tr><td>10</td><td>2</td><td>18</td><td>|10 &minus; 7| = 3</td><td>6</td></tr>
           <tr><td>12</td><td>2</td><td>20</td><td>|12 &minus; 7| = 5</td><td>10</td></tr>
           <tr><td>15</td><td>6</td><td>26</td><td>|15 &minus; 7| = 8</td><td>48</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 26</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> &minus; <i>M</i>| = 84</td></tr>
         </tbody>
       </table>
     </div>
     <div>Here, <i>N</i> = 26 (even).</div>
     <div>Median is the average of ${frac("N", "2")} = 13<sup>th</sup> and (${frac("N", "2")} + 1) = 14<sup>th</sup> observations.</div>
     <div>Both 13<sup>th</sup> and 14<sup>th</sup> observations fall in the cumulative frequency of 14, where <i>x</i><sub>i</sub> = 7.</div>
     <div>&rArr; Median (<i>M</i>) = ${frac("7 + 7", "2")} = <b>7</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Median, <i>MD</i>(<i>M</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; M|", "N")} = ${frac("84", "26")} = ${frac("42", "13")} &approx; <b>3.23</b></div>`,
    "3.23"
  ));

  // Q8
  cards.push(qCard(
    "8",
    "Find the mean deviation about the median for the data:<br/>" +
    "<b>x<sub>i</sub>:</b> 15, 21, 27, 30, 35<br/>" +
    "<b>f<sub>i</sub>:</b> 3, 5, 6, 7, 8",
    `<div>Let us construct the cumulative frequency table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th><i>x</i><sub>i</sub></th>
             <th><i>f</i><sub>i</sub></th>
             <th>c.f.</th>
             <th>|<i>x</i><sub>i</sub> &minus; <i>M</i>|</th>
             <th><i>f</i><sub>i</sub> |<i>x</i><sub>i</sub> &minus; <i>M</i>|</th>
           </tr>
         </thead>
         <tbody>
           <tr><td>15</td><td>3</td><td>3</td><td>|15 &minus; 30| = 15</td><td>45</td></tr>
           <tr><td>21</td><td>5</td><td>8</td><td>|21 &minus; 30| = 9</td><td>45</td></tr>
           <tr><td>27</td><td>6</td><td>14</td><td>|27 &minus; 30| = 3</td><td>18</td></tr>
           <tr><td>30</td><td>7</td><td>21</td><td>|30 &minus; 30| = 0</td><td>0</td></tr>
           <tr><td>35</td><td>8</td><td>29</td><td>|35 &minus; 30| = 5</td><td>40</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 29</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> &minus; <i>M</i>| = 148</td></tr>
         </tbody>
       </table>
     </div>
     <div>Here, <i>N</i> = 29 (odd).</div>
     <div>Median is the (${frac("N + 1", "2")}) = (${frac("29 + 1", "2")}) = 15<sup>th</sup> observation.</div>
     <div>The cumulative frequency just greater than 15 is 21, which corresponds to <i>x</i><sub>i</sub> = 30.</div>
     <div>&rArr; Median (<i>M</i>) = <b>30</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Median, <i>MD</i>(<i>M</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; M|", "N")} = ${frac("148", "29")} &approx; <b>5.1</b></div>`,
    "5.1"
  ));

  // Q9
  cards.push(qCard(
    "9",
    "Find the mean deviation about the mean for the data:<br/>" +
    "<b>Income per day (₹):</b> 0&ndash;100, 100&ndash;200, 200&ndash;300, 300&ndash;400, 400&ndash;500, 500&ndash;600, 600&ndash;700, 700&ndash;800<br/>" +
    "<b>Number of persons:</b> 4, 8, 9, 10, 7, 5, 4, 3",
    `<div>Let us construct the calculation table using class midpoints:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Class</th>
             <th><i>f</i><sub>i</sub></th>
             <th>Midpoint (<i>x</i><sub>i</sub>)</th>
             <th><i>f</i><sub>i</sub> <i>x</i><sub>i</sub></th>
             <th>|<i>x</i><sub>i</sub> &minus; <i>x̄</i>|</th>
             <th><i>f</i><sub>i</sub> |<i>x</i><sub>i</sub> &minus; <i>x̄</i>|</th>
           </tr>
         </thead>
         <tbody>
           <tr><td>0&ndash;100</td><td>4</td><td>50</td><td>200</td><td>|50 &minus; 358| = 308</td><td>1232</td></tr>
           <tr><td>100&ndash;200</td><td>8</td><td>150</td><td>1200</td><td>|150 &minus; 358| = 208</td><td>1664</td></tr>
           <tr><td>200&ndash;300</td><td>9</td><td>250</td><td>2250</td><td>|250 &minus; 358| = 108</td><td>972</td></tr>
           <tr><td>300&ndash;400</td><td>10</td><td>350</td><td>3500</td><td>|350 &minus; 358| = 8</td><td>80</td></tr>
           <tr><td>400&ndash;500</td><td>7</td><td>450</td><td>3150</td><td>|450 &minus; 358| = 92</td><td>644</td></tr>
           <tr><td>500&ndash;600</td><td>5</td><td>550</td><td>2750</td><td>|550 &minus; 358| = 192</td><td>960</td></tr>
           <tr><td>600&ndash;700</td><td>4</td><td>650</td><td>2600</td><td>|650 &minus; 358| = 292</td><td>1160</td></tr>
           <tr><td>700&ndash;800</td><td>3</td><td>750</td><td>2250</td><td>|750 &minus; 358| = 392</td><td>1176</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 50</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 17900</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> &minus; <i>x̄</i>| = 7896</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> x<sub>i</sub>", "N")} = ${frac("17900", "50")} = <b>358</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Mean, <i>MD</i>(<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; x̄|", "N")} = ${frac("7896", "50")} = <b>157.92</b></div>`,
    "157.92"
  ));

  // Q10
  cards.push(qCard(
    "10",
    "Find the mean deviation about the mean for the data:<br/>" +
    "<b>Height (cm):</b> 95&ndash;105, 105&ndash;115, 115&ndash;125, 125&ndash;135, 135&ndash;145, 145&ndash;155<br/>" +
    "<b>Number of boys:</b> 9, 13, 26, 30, 12, 10",
    `<div>Let us construct the calculation table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Height (cm)</th>
             <th><i>f</i><sub>i</sub></th>
             <th>Midpoint (<i>x</i><sub>i</sub>)</th>
             <th><i>f</i><sub>i</sub> <i>x</i><sub>i</sub></th>
             <th>|<i>x</i><sub>i</sub> &minus; <i>x̄</i>|</th>
             <th><i>f</i><sub>i</sub> |<i>x</i><sub>i</sub> &minus; <i>x̄</i>|</th>
           </tr>
         </thead>
         <tbody>
           <tr><td>95&ndash;105</td><td>9</td><td>100</td><td>900</td><td>|100 &minus; 125.3| = 25.3</td><td>227.7</td></tr>
           <tr><td>105&ndash;115</td><td>13</td><td>110</td><td>1430</td><td>|110 &minus; 125.3| = 15.3</td><td>198.9</td></tr>
           <tr><td>115&ndash;125</td><td>26</td><td>120</td><td>3120</td><td>|120 &minus; 125.3| = 5.3</td><td>137.8</td></tr>
           <tr><td>125&ndash;135</td><td>30</td><td>130</td><td>3900</td><td>|130 &minus; 125.3| = 4.7</td><td>141.0</td></tr>
           <tr><td>135&ndash;145</td><td>12</td><td>140</td><td>1680</td><td>|140 &minus; 125.3| = 14.7</td><td>176.4</td></tr>
           <tr><td>145&ndash;155</td><td>10</td><td>150</td><td>1500</td><td>|150 &minus; 125.3| = 24.7</td><td>247.0</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 100</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub><i>x</i><sub>i</sub> = 12530</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> &minus; <i>x̄</i>| = 1128.8</td></tr>
         </tbody>
       </table>
     </div>
     <div>&rArr; Mean (<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> x<sub>i</sub>", "N")} = ${frac("12530", "100")} = <b>125.3</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Mean, <i>MD</i>(<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; x̄|", "N")} = ${frac("1128.8", "100")} = <b>11.28</b></div>`,
    "11.28"
  ));

  // Q11
  cards.push(qCard(
    "11",
    "Find the mean deviation about median for the following data:<br/>" +
    "<b>Marks:</b> 0&ndash;10, 10&ndash;20, 20&ndash;30, 30&ndash;40, 40&ndash;50, 50&ndash;60<br/>" +
    "<b>Number of girls:</b> 6, 8, 14, 16, 4, 2",
    `<div>Let us construct the cumulative frequency table:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Marks</th>
             <th><i>f</i><sub>i</sub></th>
             <th>c.f.</th>
             <th>Midpoint (<i>x</i><sub>i</sub>)</th>
             <th>|<i>x</i><sub>i</sub> &minus; <i>M</i>|</th>
             <th><i>f</i><sub>i</sub> |<i>x</i><sub>i</sub> &minus; <i>M</i>|</th>
           </tr>
         </thead>
         <tbody>
           <tr><td>0&ndash;10</td><td>6</td><td>6</td><td>5</td><td>|5 &minus; 27.86| = 22.86</td><td>137.16</td></tr>
           <tr><td>10&ndash;20</td><td>8</td><td>14</td><td>15</td><td>|15 &minus; 27.86| = 12.86</td><td>102.88</td></tr>
           <tr><td>20&ndash;30</td><td>14</td><td>28</td><td>25</td><td>|25 &minus; 27.86| = 2.86</td><td>40.04</td></tr>
           <tr><td>30&ndash;40</td><td>16</td><td>44</td><td>35</td><td>|35 &minus; 27.86| = 7.14</td><td>114.24</td></tr>
           <tr><td>40&ndash;50</td><td>4</td><td>48</td><td>45</td><td>|45 &minus; 27.86| = 17.14</td><td>68.56</td></tr>
           <tr><td>50&ndash;60</td><td>2</td><td>50</td><td>55</td><td>|55 &minus; 27.86| = 27.14</td><td>54.28</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 50</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> &minus; <i>M</i>| = 517.16</td></tr>
         </tbody>
       </table>
     </div>
     <div>Here, <i>N</i> = 50 &rArr; ${frac("N", "2")} = 25.</div>
     <div>The cumulative frequency greater than 25 is 28, corresponding to class <b>20&ndash;30</b> (Median class).</div>
     <div>Where: lower limit <i>l</i> = 20, cumulative frequency of preceding class <i>C</i> = 14, frequency <i>f</i> = 14, class width <i>h</i> = 10.</div>
     <div>&rArr; Median (<i>M</i>) = <i>l</i> + [${frac("(N/2) &minus; C", "f")}] &times; <i>h</i> = 20 + [${frac("25 &minus; 14", "14")}] &times; 10 = 20 + ${frac("110", "14")} = 20 + 7.857 = <b>27.86</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Median, <i>MD</i>(<i>M</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; M|", "N")} = ${frac("517.16", "50")} = <b>10.34</b></div>`,
    "10.34"
  ));

  // Q12
  cards.push(qCard(
    "12",
    "Calculate the mean deviation about median age for the age distribution of 100 persons given below:<br/>" +
    "<b>Age (years):</b> 16&ndash;20, 21&ndash;25, 26&ndash;30, 31&ndash;35, 36&ndash;40, 41&ndash;45, 46&ndash;50, 51&ndash;55<br/>" +
    "<b>Number:</b> 5, 6, 12, 14, 26, 12, 16, 9",
    `<div>Converting the discrete classes into continuous boundaries by subtracting 0.5 from lower limits and adding 0.5 to upper limits:</div>
     <div class="stat-table-wrapper">
       <table class="stat-table">
         <thead>
           <tr>
             <th>Class Interval</th>
             <th><i>f</i><sub>i</sub></th>
             <th>c.f.</th>
             <th>Midpoint (<i>x</i><sub>i</sub>)</th>
             <th>|<i>x</i><sub>i</sub> &minus; <i>M</i>|</th>
             <th><i>f</i><sub>i</sub> |<i>x</i><sub>i</sub> &minus; <i>M</i>|</th>
           </tr>
         </thead>
         <tbody>
           <tr><td>15.5&ndash;20.5</td><td>5</td><td>5</td><td>18</td><td>|18 &minus; 38| = 20</td><td>100</td></tr>
           <tr><td>20.5&ndash;25.5</td><td>6</td><td>11</td><td>23</td><td>|23 &minus; 38| = 15</td><td>90</td></tr>
           <tr><td>25.5&ndash;30.5</td><td>12</td><td>23</td><td>28</td><td>|28 &minus; 38| = 10</td><td>120</td></tr>
           <tr><td>30.5&ndash;35.5</td><td>14</td><td>37</td><td>33</td><td>|33 &minus; 38| = 5</td><td>70</td></tr>
           <tr><td>35.5&ndash;40.5</td><td>26</td><td>63</td><td>38</td><td>|38 &minus; 38| = 0</td><td>0</td></tr>
           <tr><td>40.5&ndash;45.5</td><td>12</td><td>75</td><td>43</td><td>|43 &minus; 38| = 5</td><td>60</td></tr>
           <tr><td>45.5&ndash;50.5</td><td>16</td><td>91</td><td>48</td><td>|48 &minus; 38| = 10</td><td>160</td></tr>
           <tr><td>50.5&ndash;55.5</td><td>9</td><td>100</td><td>53</td><td>|53 &minus; 38| = 15</td><td>135</td></tr>
           <tr class="total-row"><td>Total</td><td><i>N</i> = 100</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&sum; <i>f</i><sub>i</sub>|<i>x</i><sub>i</sub> &minus; <i>M</i>| = 735</td></tr>
         </tbody>
       </table>
     </div>
     <div>Here, <i>N</i> = 100 &rArr; ${frac("N", "2")} = 50.</div>
     <div>The cumulative frequency just greater than 50 is 63, corresponding to class <b>35.5&ndash;40.5</b>.</div>
     <div>Where: <i>l</i> = 35.5, <i>C</i> = 37, <i>f</i> = 26, <i>h</i> = 5.</div>
     <div>&rArr; Median (<i>M</i>) = 35.5 + [${frac("50 &minus; 37", "26")}] &times; 5 = 35.5 + [${frac("13", "26")}] &times; 5 = 35.5 + 2.5 = <b>38</b></div>
     <div style="margin-top: 8px;">&rArr; Mean Deviation about Median, <i>MD</i>(<i>M</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; M|", "N")} = ${frac("735", "100")} = <b>7.35</b></div>`,
    "7.35"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 13.1", "Mean Deviation about Mean &amp; Median for Raw, Discrete &amp; Continuous Data")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx1 };
