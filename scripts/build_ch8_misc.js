const { styleBlock, frac, makeBanner, qCard } = require('./ch8_common');

function generateEx8Misc() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Show that the sum of <b>(<i>m</i> + <i>n</i>)<sup>th</sup></b> and <b>(<i>m</i> &minus; <i>n</i>)<sup>th</sup></b> terms of an A.P. is equal to <b>twice the <i>m</i><sup>th</sup> term</b>.`,
    `<div>Let <i>a</i> be the first term and <i>d</i> be the common difference of the A.P.</div>
     <div>• (<i>m</i> + <i>n</i>)<sup>th</sup> term: &nbsp; <i>a</i><sub><i>m</i>+<i>n</i></sub> = <i>a</i> + (<i>m</i> + <i>n</i> &minus; 1)<i>d</i></div>
     <div>• (<i>m</i> &minus; <i>n</i>)<sup>th</sup> term: &nbsp; <i>a</i><sub><i>m</i>&minus;<i>n</i></sub> = <i>a</i> + (<i>m</i> &minus; <i>n</i> &minus; 1)<i>d</i></div>
     <div style="margin-top: 8px;">Adding both terms:</div>
     <div>&rArr; <i>a</i><sub><i>m</i>+<i>n</i></sub> + <i>a</i><sub><i>m</i>&minus;<i>n</i></sub> = [<i>a</i> + (<i>m</i> + <i>n</i> &minus; 1)<i>d</i>] + [<i>a</i> + (<i>m</i> &minus; <i>n</i> &minus; 1)<i>d</i>]</div>
     <div>&rArr; = 2<i>a</i> + (<i>m</i> + <i>n</i> &minus; 1 + <i>m</i> &minus; <i>n</i> &minus; 1)<i>d</i></div>
     <div>&rArr; = 2<i>a</i> + (2<i>m</i> &minus; 2)<i>d</i> = 2 [ <i>a</i> + (<i>m</i> &minus; 1)<i>d</i> ] = <b>2<i>a<sub>m</sub></i></b></div>`,
    `<i>a</i><sub><i>m</i>+<i>n</i></sub> + <i>a</i><sub><i>m</i>&minus;<i>n</i></sub> = 2<i>a<sub>m</sub></i> &nbsp; (Hence Proved)`
  ));

  // Q2
  cards.push(qCard(
    2,
    `If the sum of three numbers in A.P. is <b>24</b> and their product is <b>440</b>, find the numbers.`,
    `<div>Let the three numbers in A.P. be: <b><i>a</i> &minus; <i>d</i>, <i>a</i>, <i>a</i> + <i>d</i></b>.</div>
     <div>1. Sum of numbers = 24:</div>
     <div>&rArr; (<i>a</i> &minus; <i>d</i>) + <i>a</i> + (<i>a</i> + <i>d</i>) = 24 &rArr; 3<i>a</i> = 24 &rArr; <b><i>a</i> = 8</b></div>
     <div style="margin-top: 6px;">2. Product of numbers = 440:</div>
     <div>&rArr; (8 &minus; <i>d</i>)(8)(8 + <i>d</i>) = 440</div>
     <div>&rArr; (64 &minus; <i>d</i><sup>2</sup>) = ${frac('440', '8')} = 55</div>
     <div>&rArr; <i>d</i><sup>2</sup> = 64 &minus; 55 = 9 &rArr; <b><i>d</i> = &plusmn;3</b></div>
     <div style="margin-top: 8px; color: #FFE082; font-weight: 700;">Finding the numbers:</div>
     <div>• When <i>d</i> = 3: &nbsp; 8 &minus; 3, 8, 8 + 3 &rArr; <b>5, 8, 11</b></div>
     <div>• When <i>d</i> = &minus;3: &nbsp; 8 &minus; (&minus;3), 8, 8 + (&minus;3) &rArr; <b>11, 8, 5</b></div>`,
    `5, 8, 11`
  ));

  // Q3
  cards.push(qCard(
    3,
    `Let the sum of <i>n</i>, 2<i>n</i>, 3<i>n</i> terms of an A.P. be <i>S</i><sub>1</sub>, <i>S</i><sub>2</sub> and <i>S</i><sub>3</sub>, respectively. Show that <b><i>S</i><sub>3</sub> = 3(<i>S</i><sub>2</sub> &minus; <i>S</i><sub>1</sub>)</b>.`,
    `<div>Let <i>a</i> be the first term and <i>d</i> be the common difference.</div>
     <div>• <i>S</i><sub>1</sub> = ${frac('<i>n</i>', '2')} [ 2<i>a</i> + (<i>n</i> &minus; 1)<i>d</i> ] &nbsp; ... (1)</div>
     <div>• <i>S</i><sub>2</sub> = ${frac('2<i>n</i>', '2')} [ 2<i>a</i> + (2<i>n</i> &minus; 1)<i>d</i> ] = <i>n</i> [ 2<i>a</i> + (2<i>n</i> &minus; 1)<i>d</i> ] &nbsp; ... (2)</div>
     <div>• <i>S</i><sub>3</sub> = ${frac('3<i>n</i>', '2')} [ 2<i>a</i> + (3<i>n</i> &minus; 1)<i>d</i> ] &nbsp; ... (3)</div>
     <div style="margin-top: 8px;">Evaluating (<i>S</i><sub>2</sub> &minus; <i>S</i><sub>1</sub>):</div>
     <div>&rArr; <i>S</i><sub>2</sub> &minus; <i>S</i><sub>1</sub> = ${frac('<i>n</i>', '2')} [ 2(2<i>a</i> + (2<i>n</i> &minus; 1)<i>d</i>) &minus; (2<i>a</i> + (<i>n</i> &minus; 1)<i>d</i>) ]</div>
     <div>&rArr; = ${frac('<i>n</i>', '2')} [ 4<i>a</i> + (4<i>n</i> &minus; 2)<i>d</i> &minus; 2<i>a</i> &minus; (<i>n</i> &minus; 1)<i>d</i> ]</div>
     <div>&rArr; = ${frac('<i>n</i>', '2')} [ 2<i>a</i> + (3<i>n</i> &minus; 1)<i>d</i> ]</div>
     <div style="margin-top: 8px;">Multiplying by 3:</div>
     <div>&rArr; 3(<i>S</i><sub>2</sub> &minus; <i>S</i><sub>1</sub>) = ${frac('3<i>n</i>', '2')} [ 2<i>a</i> + (3<i>n</i> &minus; 1)<i>d</i> ] = <b><i>S</i><sub>3</sub></b></div>`,
    `<i>S</i><sub>3</sub> = 3(<i>S</i><sub>2</sub> &minus; <i>S</i><sub>1</sub>) &nbsp; (Hence Proved)`
  ));

  // Q4
  cards.push(qCard(
    4,
    `Find the sum of all numbers <b>between 200 and 400</b>, which are <b>divisible by 7</b>.`,
    `<div>The numbers strictly between 200 and 400 divisible by 7 are: <b>203, 210, 217, ..., 399</b>.</div>
     <div>This is an A.P. where:</div>
     <div>• First term: <i>a</i> = 203</div>
     <div>• Common difference: <i>d</i> = 7</div>
     <div>• Last term: <i>l</i> = 399</div>
     <div style="margin-top: 8px;">Finding <i>n</i>:</div>
     <div>&rArr; 203 + (<i>n</i> &minus; 1)(7) = 399</div>
     <div>&rArr; 7(<i>n</i> &minus; 1) = 399 &minus; 203 = 196 &rArr; <i>n</i> &minus; 1 = 28 &rArr; <b><i>n</i> = 29</b></div>
     <div style="margin-top: 8px;">Sum:</div>
     <div>&rArr; <i>S</i><sub>29</sub> = ${frac('29', '2')}(203 + 399) = ${frac('29', '2')} &times; 602 = 29 &times; 301 = <b>8729</b></div>`,
    `8729`
  ));

  // Q5
  cards.push(qCard(
    5,
    `Find the sum of integers from <b>1 to 100</b> that are <b>divisible by 2 or 5</b>.`,
    `<div>By the principle of inclusion-exclusion:</div>
     <div>&rArr; Sum = (Sum of multiples of 2) + (Sum of multiples of 5) &minus; (Sum of multiples of 10)</div>
     <div style="margin-top: 6px;">1. Multiples of 2 (2, 4, ..., 100): <i>n</i> = 50</div>
     <div>&rArr; <i>S</i><sub>2</sub> = ${frac('50', '2')}(2 + 100) = 25 &times; 102 = <b>2550</b></div>
     <div style="margin-top: 6px;">2. Multiples of 5 (5, 10, ..., 100): <i>n</i> = 20</div>
     <div>&rArr; <i>S</i><sub>5</sub> = ${frac('20', '2')}(5 + 100) = 10 &times; 105 = <b>1050</b></div>
     <div style="margin-top: 6px;">3. Multiples of 10 (10, 20, ..., 100): <i>n</i> = 10</div>
     <div>&rArr; <i>S</i><sub>10</sub> = ${frac('10', '2')}(10 + 100) = 5 &times; 110 = <b>550</b></div>
     <div style="margin-top: 8px;">Total Sum:</div>
     <div>&rArr; Sum = 2550 + 1050 &minus; 550 = <b>3050</b></div>`,
    `3050`
  ));

  // Q6
  cards.push(qCard(
    6,
    `Find the sum of all <b>two-digit numbers</b>, which, when divided by 4, yields <b>1 as the remainder</b>.`,
    `<div>Two-digit numbers are between 10 and 99.</div>
     <div>Numbers leaving remainder 1 when divided by 4 have the form 4<i>k</i> + 1:</div>
     <div>The numbers are: <b>13, 17, 21, ..., 97</b>.</div>
     <div>• First term: <i>a</i> = 13</div>
     <div>• Common difference: <i>d</i> = 4</div>
     <div>• Last term: <i>a<sub>n</sub></i> = 97</div>
     <div style="margin-top: 8px;">Finding <i>n</i>:</div>
     <div>&rArr; 13 + (<i>n</i> &minus; 1)(4) = 97 &rArr; 4(<i>n</i> &minus; 1) = 84 &rArr; <i>n</i> &minus; 1 = 21 &rArr; <b><i>n</i> = 22</b></div>
     <div style="margin-top: 8px;">Sum:</div>
     <div>&rArr; <i>S</i><sub>22</sub> = ${frac('22', '2')}(13 + 97) = 11 &times; 110 = <b>1210</b></div>`,
    `1210`
  ));

  // Q7
  cards.push(qCard(
    7,
    `If <i>f</i> is a function satisfying <b><i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>)<i>f</i>(<i>y</i>)</b> for all <i>x</i>, <i>y</i> &isin; &naturals; such that <b><i>f</i>(1) = 3</b> and <b>&sum;<sub><i>x</i>=1</sub><sup><i>n</i></sup> <i>f</i>(<i>x</i>) = 120</b>, find the value of <b><i>n</i></b>.`,
    `<div>Given: <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) &times; <i>f</i>(<i>y</i>) and <i>f</i>(1) = 3</div>
     <div>• <i>f</i>(2) = <i>f</i>(1 + 1) = <i>f</i>(1) &times; <i>f</i>(1) = 3 &times; 3 = 3<sup>2</sup> = 9</div>
     <div>• <i>f</i>(3) = <i>f</i>(2 + 1) = <i>f</i>(2) &times; <i>f</i>(1) = 9 &times; 3 = 3<sup>3</sup> = 27</div>
     <div>• In general: <i>f</i>(<i>x</i>) = 3<sup><i>x</i></sup></div>
     <div style="margin-top: 8px;">The series &sum;<sub><i>x</i>=1</sub><sup><i>n</i></sup> <i>f</i>(<i>x</i>) is a G.P. with <i>a</i> = 3, <i>r</i> = 3:</div>
     <div>&rArr; &sum;<sub><i>x</i>=1</sub><sup><i>n</i></sup> 3<sup><i>x</i></sup> = ${frac('3(3<sup><i>n</i></sup> &minus; 1)', '3 &minus; 1')} = 120</div>
     <div>&rArr; ${frac('3(3<sup><i>n</i></sup> &minus; 1)', '2')} = 120 &rArr; 3(3<sup><i>n</i></sup> &minus; 1) = 240 &rArr; 3<sup><i>n</i></sup> &minus; 1 = 80</div>
     <div>&rArr; 3<sup><i>n</i></sup> = 81 = 3<sup>4</sup> &rArr; <b><i>n</i> = 4</b></div>`,
    `<i>n</i> = 4`
  ));

  // Q8
  cards.push(qCard(
    8,
    `The sum of some terms of G.P. is <b>315</b>, whose first term and the common ratio are <b>5 and 2</b>, respectively. Find the last term and the number of terms.`,
    `<div>Given: <i>S<sub>n</sub></i> = 315, <i>a</i> = 5, <i>r</i> = 2</div>
     <div>Using sum formula <i>S<sub>n</sub></i> = ${frac('<i>a</i>(<i>r<sup>n</sup></i> &minus; 1)', '<i>r</i> &minus; 1')}:</div>
     <div>&rArr; 315 = ${frac('5(2<sup><i>n</i></sup> &minus; 1)', '2 &minus; 1')} = 5(2<sup><i>n</i></sup> &minus; 1)</div>
     <div>&rArr; 2<sup><i>n</i></sup> &minus; 1 = ${frac('315', '5')} = 63</div>
     <div>&rArr; 2<sup><i>n</i></sup> = 64 = 2<sup>6</sup> &rArr; <b><i>n</i> = 6</b></div>
     <div style="margin-top: 8px;">Finding the last term (<i>a</i><sub>6</sub>):</div>
     <div>&rArr; <i>l</i> = <i>a</i><sub>6</sub> = <i>ar</i><sup>5</sup> = 5 &times; 2<sup>5</sup> = 5 &times; 32 = <b>160</b></div>`,
    `<i>n</i> = 6, &nbsp; Last term = 160`
  ));

  // Q9
  cards.push(qCard(
    9,
    `The first term of a G.P. is <b>1</b>. The sum of the third term and fifth term is <b>90</b>. Find the common ratio of G.P.`,
    `<div>Given: <i>a</i> = 1 and <i>a</i><sub>3</sub> + <i>a</i><sub>5</sub> = 90</div>
     <div>• <i>a</i><sub>3</sub> = <i>ar</i><sup>2</sup> = <i>r</i><sup>2</sup></div>
     <div>• <i>a</i><sub>5</sub> = <i>ar</i><sup>4</sup> = <i>r</i><sup>4</sup></div>
     <div>&rArr; <i>r</i><sup>4</sup> + <i>r</i><sup>2</sup> = 90 &rArr; <i>r</i><sup>4</sup> + <i>r</i><sup>2</sup> &minus; 90 = 0</div>
     <div>Factoring the quadratic in <i>r</i><sup>2</sup>:</div>
     <div>&rArr; (<i>r</i><sup>2</sup> + 10)(<i>r</i><sup>2</sup> &minus; 9) = 0</div>
     <div>Since <i>r</i> is real, <i>r</i><sup>2</sup> + 10 &ne; 0:</div>
     <div>&rArr; <i>r</i><sup>2</sup> &minus; 9 = 0 &rArr; <i>r</i><sup>2</sup> = 9 &rArr; <b><i>r</i> = &plusmn;3</b></div>`,
    `<i>r</i> = &plusmn;3`
  ));

  // Q10
  cards.push(qCard(
    10,
    `The sum of three numbers in G.P. is <b>56</b>. If we subtract <b>1, 7, and 21</b> from these numbers in that order, we obtain an arithmetic progression. Find the numbers.`,
    `<div>Let the three numbers in G.P. be: <i>a</i>, <i>ar</i>, <i>ar</i><sup>2</sup>.</div>
     <div>1. Sum = 56: &nbsp; <i>a</i>(1 + <i>r</i> + <i>r</i><sup>2</sup>) = 56 &rArr; <i>a</i> = ${frac('56', '1 + <i>r</i> + <i>r</i><sup>2</sup>')} &nbsp; ... (1)</div>
     <div>2. Resulting A.P.: (<i>a</i> &minus; 1), (<i>ar</i> &minus; 7), (<i>ar</i><sup>2</sup> &minus; 21)</div>
     <div>&rArr; 2(<i>ar</i> &minus; 7) = (<i>a</i> &minus; 1) + (<i>ar</i><sup>2</sup> &minus; 21)</div>
     <div>&rArr; 2<i>ar</i> &minus; 14 = <i>a</i> + <i>ar</i><sup>2</sup> &minus; 22</div>
     <div>&rArr; <i>ar</i><sup>2</sup> &minus; 2<i>ar</i> + <i>a</i> = 8 &rArr; <i>a</i>(<i>r</i> &minus; 1)<sup>2</sup> = 8 &nbsp; ... (2)</div>
     <div style="margin-top: 8px;">Dividing (1) by (2):</div>
     <div>&rArr; ${frac('1 + <i>r</i> + <i>r</i><sup>2</sup>', '(<i>r</i> &minus; 1)<sup>2</sup>')} = ${frac('56', '8')} = 7</div>
     <div>&rArr; 1 + <i>r</i> + <i>r</i><sup>2</sup> = 7(<i>r</i><sup>2</sup> &minus; 2<i>r</i> + 1) = 7<i>r</i><sup>2</sup> &minus; 14<i>r</i> + 7</div>
     <div>&rArr; 6<i>r</i><sup>2</sup> &minus; 15<i>r</i> + 6 = 0 &rArr; 2<i>r</i><sup>2</sup> &minus; 5<i>r</i> + 2 = 0</div>
     <div>&rArr; (2<i>r</i> &minus; 1)(<i>r</i> &minus; 2) = 0 &rArr; <b><i>r</i> = 2</b> &nbsp; or &nbsp; <b><i>r</i> = ${frac('1', '2')}</b></div>
     <div style="margin-top: 6px;">• If <i>r</i> = 2: <i>a</i> = ${frac('8', '(2&minus;1)<sup>2</sup>')} = 8 &rArr; numbers are <b>8, 16, 32</b></div>
     <div>• If <i>r</i> = ${frac('1', '2')}: <i>a</i> = ${frac('8', '(1/2&minus;1)<sup>2</sup>')} = 32 &rArr; numbers are <b>32, 16, 8</b></div>`,
    `8, 16, 32`
  ));

  // Q11
  cards.push(qCard(
    11,
    `A G.P. consists of an even number of terms. If the sum of all the terms is <b>5 times the sum of terms occupying odd places</b>, then find its common ratio.`,
    `<div>Let the G.P. have 2<i>n</i> terms: <i>a</i>, <i>ar</i>, <i>ar</i><sup>2</sup>, ..., <i>ar</i><sup>2<i>n</i>&minus;1</sup>.</div>
     <div>• Sum of all terms: &nbsp; <i>S</i> = <i>T</i><sub>1</sub> + <i>T</i><sub>2</sub> + ... + <i>T</i><sub>2<i>n</i></sub></div>
     <div>• Sum of odd-positioned terms: &nbsp; <i>S</i><sub>odd</sub> = <i>T</i><sub>1</sub> + <i>T</i><sub>3</sub> + ... + <i>T</i><sub>2<i>n</i>&minus;1</sub></div>
     <div>• Sum of even-positioned terms: &nbsp; <i>S</i><sub>even</sub> = <i>T</i><sub>2</sub> + <i>T</i><sub>4</sub> + ... + <i>T</i><sub>2<i>n</i></sub> = <i>r</i> &times; <i>S</i><sub>odd</sub></div>
     <div style="margin-top: 8px;">Given condition: <i>S</i> = 5 <i>S</i><sub>odd</sub></div>
     <div>&rArr; <i>S</i><sub>odd</sub> + <i>S</i><sub>even</sub> = 5 <i>S</i><sub>odd</sub></div>
     <div>&rArr; <i>S</i><sub>even</sub> = 4 <i>S</i><sub>odd</sub></div>
     <div>&rArr; <i>r</i> &times; <i>S</i><sub>odd</sub> = 4 <i>S</i><sub>odd</sub></div>
     <div>Since <i>S</i><sub>odd</sub> &ne; 0:</div>
     <div>&rArr; <b><i>r</i> = 4</b></div>`,
    `<i>r</i> = 4`
  ));

  // Q12
  cards.push(qCard(
    12,
    `The sum of the first four terms of an A.P. is <b>56</b>. The sum of the last four terms is <b>112</b>. If its first term is <b>11</b>, then find the number of terms.`,
    `<div>Let the A.P. have <i>n</i> terms with first term <i>a</i> = 11 and common difference <i>d</i>.</div>
     <div>1. Sum of first four terms = 56:</div>
     <div>&rArr; <i>a</i> + (<i>a</i> + <i>d</i>) + (<i>a</i> + 2<i>d</i>) + (<i>a</i> + 3<i>d</i>) = 56</div>
     <div>&rArr; 4<i>a</i> + 6<i>d</i> = 56 &rArr; 4(11) + 6<i>d</i> = 56 &rArr; 44 + 6<i>d</i> = 56 &rArr; 6<i>d</i> = 12 &rArr; <b><i>d</i> = 2</b></div>
     <div style="margin-top: 8px;">2. Sum of last four terms = 112:</div>
     <div>&rArr; <i>a</i><sub><i>n</i>&minus;3</sub> + <i>a</i><sub><i>n</i>&minus;2</sub> + <i>a</i><sub><i>n</i>&minus;1</sub> + <i>a<sub>n</sub></i> = 112</div>
     <div>&rArr; 4<i>a</i> + [ (<i>n</i> &minus; 4) + (<i>n</i> &minus; 3) + (<i>n</i> &minus; 2) + (<i>n</i> &minus; 1) ]<i>d</i> = 112</div>
     <div>&rArr; 4(11) + (4<i>n</i> &minus; 10)(2) = 112</div>
     <div>&rArr; 44 + 8<i>n</i> &minus; 20 = 112 &rArr; 8<i>n</i> + 24 = 112 &rArr; 8<i>n</i> = 88 &rArr; <b><i>n</i> = 11</b></div>`,
    `<i>n</i> = 11 terms`
  ));

  // Q13
  cards.push(qCard(
    13,
    `If <b>${frac('<i>a</i> + <i>bx</i>', '<i>a</i> &minus; <i>bx</i>')} = ${frac('<i>b</i> + <i>cx</i>', '<i>b</i> &minus; <i>cx</i>')} = ${frac('<i>c</i> + <i>dx</i>', '<i>c</i> &minus; <i>dx</i>')} &nbsp; (<i>x</i> &ne; 0)</b>, then show that <i>a</i>, <i>b</i>, <i>c</i> and <i>d</i> are in G.P.`,
    `<div>Applying Componendo and Dividendo to each ratio:</div>
     <div>&rArr; ${frac('(<i>a</i> + <i>bx</i>) + (<i>a</i> &minus; <i>bx</i>)', '(<i>a</i> + <i>bx</i>) &minus; (<i>a</i> &minus; <i>bx</i>)')} = ${frac('(<i>b</i> + <i>cx</i>) + (<i>b</i> &minus; <i>cx</i>)', '(<i>b</i> + <i>cx</i>) &minus; (<i>b</i> &minus; <i>cx</i>)')} = ${frac('(<i>c</i> + <i>dx</i>) + (<i>c</i> &minus; <i>dx</i>)', '(<i>c</i> + <i>dx</i>) &minus; (<i>c</i> &minus; <i>dx</i>)')}</div>
     <div>&rArr; ${frac('2<i>a</i>', '2<i>bx</i>')} = ${frac('2<i>b</i>', '2<i>cx</i>')} = ${frac('2<i>c</i>', '2<i>dx</i>')}</div>
     <div>&rArr; ${frac('<i>a</i>', '<i>bx</i>')} = ${frac('<i>b</i>', '<i>cx</i>')} = ${frac('<i>c</i>', '<i>dx</i>')}</div>
     <div>Multiplying throughout by <i>x</i> (since <i>x</i> &ne; 0):</div>
     <div>&rArr; <b>${frac('<i>a</i>', '<i>b</i>')} = ${frac('<i>b</i>', '<i>c</i>')} = ${frac('<i>c</i>', '<i>d</i>')}</b></div>
     <div style="margin-top: 6px;">Taking reciprocals:</div>
     <div>&rArr; ${frac('<i>b</i>', '<i>a</i>')} = ${frac('<i>c</i>', '<i>b</i>')} = ${frac('<i>d</i>', '<i>c</i>')}</div>
     <div>Therefore, <b><i>a</i>, <i>b</i>, <i>c</i> and <i>d</i> are in G.P.</b></div>`,
    `<i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> are in G.P. &nbsp; (Hence Proved)`
  ));

  // Q14
  cards.push(qCard(
    14,
    `Let <i>S</i> be the sum, <i>P</i> the product and <i>R</i> the sum of reciprocals of <i>n</i> terms in a G.P. Prove that <b><i>P</i><sup>2</sup><i>R<sup>n</sup></i> = <i>S<sup>n</sup></i></b>.`,
    `<div>Let the G.P. be <i>a</i>, <i>ar</i>, <i>ar</i><sup>2</sup>, ..., <i>ar</i><sup><i>n</i>&minus;1</sup>.</div>
     <div>1. <i>S</i> = ${frac('<i>a</i>(<i>r<sup>n</sup></i> &minus; 1)', '<i>r</i> &minus; 1')}</div>
     <div>2. <i>P</i> = <i>a<sup>n</sup></i> <i>r</i><sup><i>n</i>(<i>n</i>&minus;1)/2</sup> &rArr; <i>P</i><sup>2</sup> = <i>a</i><sup>2<i>n</i></sup> <i>r</i><sup><i>n</i>(<i>n</i>&minus;1)</sup></div>
     <div>3. <i>R</i> = ${frac('1', '<i>a</i>')} + ${frac('1', '<i>ar</i>')} + ... + ${frac('1', '<i>ar</i><sup><i>n</i>&minus;1</sup>')} = ${frac('1', '<i>a</i>')} [ ${frac('1 &minus; (1/<i>r</i>)<sup><i>n</i></sup>', '1 &minus; 1/<i>r</i>')} ] = ${frac('1', '<i>a</i>')} [ ${frac('<i>r<sup>n</sup></i> &minus; 1', '<i>r<sup>n</sup></i>')} &times; ${frac('<i>r</i>', '<i>r</i> &minus; 1')} ] = ${frac('<i>r<sup>n</sup></i> &minus; 1', '<i>a</i> <i>r</i><sup><i>n</i>&minus;1</sup> (<i>r</i> &minus; 1)')}</div>
     <div style="margin-top: 6px;">Notice that <i>R</i> = ${frac('<i>S</i>', '<i>a</i><sup>2</sup> <i>r</i><sup><i>n</i>&minus;1</sup>')}</div>
     <div>&rArr; <i>R<sup>n</sup></i> = ${frac('<i>S<sup>n</sup></i>', '<i>a</i><sup>2<i>n</i></sup> <i>r</i><sup><i>n</i>(<i>n</i>&minus;1)</sup>')}</div>
     <div style="margin-top: 8px;">Multiplying by <i>P</i><sup>2</sup>:</div>
     <div>&rArr; <i>P</i><sup>2</sup> <i>R<sup>n</sup></i> = (<i>a</i><sup>2<i>n</i></sup> <i>r</i><sup><i>n</i>(<i>n</i>&minus;1)</sup>) &times; ${frac('<i>S<sup>n</sup></i>', '<i>a</i><sup>2<i>n</i></sup> <i>r</i><sup><i>n</i>(<i>n</i>&minus;1)</sup>')} = <b><i>S<sup>n</sup></i></b></div>`,
    `<i>P</i><sup>2</sup><i>R<sup>n</sup></i> = <i>S<sup>n</sup></i> &nbsp; (Hence Proved)`
  ));

  // Q15
  cards.push(qCard(
    15,
    `The <i>p</i><sup>th</sup>, <i>q</i><sup>th</sup> and <i>r</i><sup>th</sup> terms of an A.P. are <i>a</i>, <i>b</i>, <i>c</i>, respectively. Show that:<br/>
     <b>(<i>q</i> &minus; <i>r</i>)<i>a</i> + (<i>r</i> &minus; <i>p</i>)<i>b</i> + (<i>p</i> &minus; <i>q</i>)<i>c</i> = 0</b>.`,
    `<div>Let <i>A</i> be first term and <i>D</i> be common difference of the A.P.</div>
     <div>• <i>a</i> = <i>A</i> + (<i>p</i> &minus; 1)<i>D</i> &nbsp; ... (1)</div>
     <div>• <i>b</i> = <i>A</i> + (<i>q</i> &minus; 1)<i>D</i> &nbsp; ... (2)</div>
     <div>• <i>c</i> = <i>A</i> + (<i>r</i> &minus; 1)<i>D</i> &nbsp; ... (3)</div>
     <div style="margin-top: 8px;">Subtracting consecutively:</div>
     <div>&rArr; <i>a</i> &minus; <i>b</i> = (<i>p</i> &minus; <i>q</i>)<i>D</i> &nbsp; ... (4)</div>
     <div>&rArr; <i>b</i> &minus; <i>c</i> = (<i>q</i> &minus; <i>r</i>)<i>D</i> &nbsp; ... (5)</div>
     <div>&rArr; <i>c</i> &minus; <i>a</i> = (<i>r</i> &minus; <i>p</i>)<i>D</i> &nbsp; ... (6)</div>
     <div style="margin-top: 8px;">Expanding the given expression L.H.S.:</div>
     <div>&rArr; <i>a</i>(<i>q</i> &minus; <i>r</i>) + <i>b</i>(<i>r</i> &minus; <i>p</i>) + <i>c</i>(<i>p</i> &minus; <i>q</i>)</div>
     <div>&rArr; = <i>A</i> [(<i>q</i> &minus; <i>r</i>) + (<i>r</i> &minus; <i>p</i>) + (<i>p</i> &minus; <i>q</i>)] + <i>D</i> [(<i>p</i> &minus; 1)(<i>q</i> &minus; <i>r</i>) + (<i>q</i> &minus; 1)(<i>r</i> &minus; <i>p</i>) + (<i>r</i> &minus; 1)(<i>p</i> &minus; <i>q</i>)]</div>
     <div>&rArr; = <i>A</i>(0) + <i>D</i> [ <i>p</i>(<i>q</i> &minus; <i>r</i>) + <i>q</i>(<i>r</i> &minus; <i>p</i>) + <i>r</i>(<i>p</i> &minus; <i>q</i>) &minus; 0 ] = 0 + <i>D</i>(0) = <b>0</b></div>`,
    `0 &nbsp; (Hence Proved)`
  ));

  // Q16
  cards.push(qCard(
    16,
    `If <b><i>a</i>(${frac('1', '<i>b</i>')} + ${frac('1', '<i>c</i>')}), &nbsp; <i>b</i>(${frac('1', '<i>c</i>')} + ${frac('1', '<i>a</i>')}), &nbsp; <i>c</i>(${frac('1', '<i>a</i>')} + ${frac('1', '<i>b</i>')})</b> are in A.P., prove that <b><i>a</i>, <i>b</i>, <i>c</i> are in A.P.</b>`,
    `<div>Given that:</div>
     <div>${frac('<i>a</i>(<i>b</i> + <i>c</i>)', '<i>bc</i>')}, &nbsp; ${frac('<i>b</i>(<i>c</i> + <i>a</i>)', '<i>ca</i>')}, &nbsp; ${frac('<i>c</i>(<i>a</i> + <i>b</i>)', '<i>ab</i>')} are in A.P.</div>
     <div>Adding 1 to each term (which preserves the A.P.):</div>
     <div>&rArr; ${frac('<i>ab</i> + <i>ac</i> + <i>bc</i>', '<i>bc</i>')}, &nbsp; ${frac('<i>bc</i> + <i>ab</i> + <i>ca</i>', '<i>ca</i>')}, &nbsp; ${frac('<i>ca</i> + <i>bc</i> + <i>ab</i>', '<i>ab</i>')} are in A.P.</div>
     <div style="margin-top: 6px;">Dividing each term by the constant (<i>ab</i> + <i>bc</i> + <i>ca</i>):</div>
     <div>&rArr; ${frac('1', '<i>bc</i>')}, &nbsp; ${frac('1', '<i>ca</i>')}, &nbsp; ${frac('1', '<i>ab</i>')} are in A.P.</div>
     <div style="margin-top: 6px;">Multiplying each term by <i>abc</i>:</div>
     <div>&rArr; ${frac('<i>abc</i>', '<i>bc</i>')}, &nbsp; ${frac('<i>abc</i>', '<i>ca</i>')}, &nbsp; ${frac('<i>abc</i>', '<i>ab</i>')} are in A.P.</div>
     <div>&rArr; <b><i>a</i>, <i>b</i>, <i>c</i> are in A.P.</b></div>`,
    `<i>a</i>, <i>b</i>, <i>c</i> are in A.P. &nbsp; (Hence Proved)`
  ));

  // Q17
  cards.push(qCard(
    17,
    `If <i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> are in G.P., prove that <b>(<i>a<sup>n</sup></i> + <i>b<sup>n</sup></i>), (<i>b<sup>n</sup></i> + <i>c<sup>n</sup></i>), (<i>c<sup>n</sup></i> + <i>d<sup>n</sup></i>) are in G.P.</b>`,
    `<div>Since <i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> are in G.P., let common ratio be <i>r</i>:</div>
     <div>• <i>b</i> = <i>ar</i>, &nbsp; <i>c</i> = <i>ar</i><sup>2</sup>, &nbsp; <i>d</i> = <i>ar</i><sup>3</sup></div>
     <div style="margin-top: 6px;">Evaluating each term:</div>
     <div>• <i>T</i><sub>1</sub> = <i>a<sup>n</sup></i> + <i>b<sup>n</sup></i> = <i>a<sup>n</sup></i> + (<i>ar</i>)<sup><i>n</i></sup> = <b><i>a<sup>n</sup></i>(1 + <i>r<sup>n</sup></i>)</b></div>
     <div>• <i>T</i><sub>2</sub> = <i>b<sup>n</sup></i> + <i>c<sup>n</sup></i> = (<i>ar</i>)<sup><i>n</i></sup> + (<i>ar</i><sup>2</sup>)<sup><i>n</i></sup> = <b><i>a<sup>n</sup></i> <i>r<sup>n</sup></i>(1 + <i>r<sup>n</sup></i>)</b></div>
     <div>• <i>T</i><sub>3</sub> = <i>c<sup>n</sup></i> + <i>d<sup>n</sup></i> = (<i>ar</i><sup>2</sup>)<sup><i>n</i></sup> + (<i>ar</i><sup>3</sup>)<sup><i>n</i></sup> = <b><i>a<sup>n</sup></i> <i>r</i><sup>2<i>n</i></sup>(1 + <i>r<sup>n</sup></i>)</b></div>
     <div style="margin-top: 8px;">Finding common ratios:</div>
     <div>&rArr; ${frac('<i>T</i><sub>2</sub>', '<i>T</i><sub>1</sub>')} = ${frac('<i>a<sup>n</sup></i> <i>r<sup>n</sup></i>(1 + <i>r<sup>n</sup></i>)', '<i>a<sup>n</sup></i>(1 + <i>r<sup>n</sup></i>)')} = <b><i>r<sup>n</sup></i></b></div>
     <div>&rArr; ${frac('<i>T</i><sub>3</sub>', '<i>T</i><sub>2</sub>')} = ${frac('<i>a<sup>n</sup></i> <i>r</i><sup>2<i>n</i></sup>(1 + <i>r<sup>n</sup></i>)', '<i>a<sup>n</sup></i> <i>r<sup>n</sup></i>(1 + <i>r<sup>n</sup></i>)')} = <b><i>r<sup>n</sup></i></b></div>
     <div>Since the ratio between consecutive terms is equal to <i>r<sup>n</sup></i>, the terms are in G.P.</div>`,
    `In G.P. with common ratio <i>r<sup>n</sup></i> &nbsp; (Hence Proved)`
  ));

  // Q18
  cards.push(qCard(
    18,
    `If <i>a</i> and <i>b</i> are the roots of <b><i>x</i><sup>2</sup> &minus; 3<i>x</i> + <i>p</i> = 0</b> and <i>c</i>, <i>d</i> are roots of <b><i>x</i><sup>2</sup> &minus; 12<i>x</i> + <i>q</i> = 0</b>, where <i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> form a G.P., prove that <b>(<i>q</i> + <i>p</i>) : (<i>q</i> &minus; <i>p</i>) = 17 : 15</b>.`,
    `<div>Let the four roots in G.P. be: <i>a</i>, <i>ar</i>, <i>ar</i><sup>2</sup>, <i>ar</i><sup>3</sup>.</div>
     <div>• For <i>x</i><sup>2</sup> &minus; 3<i>x</i> + <i>p</i> = 0:</div>
     <div>&nbsp; <i>a</i> + <i>b</i> = <i>a</i>(1 + <i>r</i>) = 3 &nbsp; ... (1)</div>
     <div>&nbsp; <i>ab</i> = <i>a</i><sup>2</sup><i>r</i> = <i>p</i> &nbsp; ... (2)</div>
     <div>• For <i>x</i><sup>2</sup> &minus; 12<i>x</i> + <i>q</i> = 0:</div>
     <div>&nbsp; <i>c</i> + <i>d</i> = <i>ar</i><sup>2</sup>(1 + <i>r</i>) = 12 &nbsp; ... (3)</div>
     <div>&nbsp; <i>cd</i> = <i>a</i><sup>2</sup><i>r</i><sup>5</sup> = <i>q</i> &nbsp; ... (4)</div>
     <div style="margin-top: 8px;">Dividing (3) by (1):</div>
     <div>&rArr; ${frac('<i>ar</i><sup>2</sup>(1 + <i>r</i>)', '<i>a</i>(1 + <i>r</i>)')} = ${frac('12', '3')} &rArr; <b><i>r</i><sup>2</sup> = 4</b> &rArr; <i>r</i><sup>4</sup> = 16</div>
     <div style="margin-top: 8px;">Evaluating the ratio:</div>
     <div>&rArr; ${frac('<i>q</i> + <i>p</i>', '<i>q</i> &minus; <i>p</i>')} = ${frac('<i>a</i><sup>2</sup><i>r</i><sup>5</sup> + <i>a</i><sup>2</sup><i>r</i>', '<i>a</i><sup>2</sup><i>r</i><sup>5</sup> &minus; <i>a</i><sup>2</sup><i>r</i>')} = ${frac('<i>r</i><sup>4</sup> + 1', '<i>r</i><sup>4</sup> &minus; 1')}</div>
     <div>&rArr; = ${frac('16 + 1', '16 &minus; 1')} = <b>${frac('17', '15')}</b></div>`,
    `17 : 15 &nbsp; (Hence Proved)`
  ));

  // Q19
  cards.push(qCard(
    19,
    `The ratio of the A.M. and G.M. of two positive numbers, <i>a</i> and <i>b</i>, is <b><i>m</i> : <i>n</i></b>. Show that:<br/>
     <b><i>a</i> : <i>b</i> = (<i>m</i> + &radic;[<i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>]) : (<i>m</i> &minus; &radic;[<i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>])</b>.`,
    `<div>Given: ${frac('A.M.', 'G.M.')} = ${frac('<i>a</i> + <i>b</i>', '2&radic;<i>ab</i>')} = ${frac('<i>m</i>', '<i>n</i>')}</div>
     <div>Applying Componendo and Dividendo:</div>
     <div>&rArr; ${frac('(<i>a</i> + <i>b</i>) + 2&radic;<i>ab</i>', '(<i>a</i> + <i>b</i>) &minus; 2&radic;<i>ab</i>')} = ${frac('<i>m</i> + <i>n</i>', '<i>m</i> &minus; <i>n</i>')}</div>
     <div>&rArr; ${frac('(&radic;<i>a</i> + &radic;<i>b</i>)<sup>2</sup>', '(&radic;<i>a</i> &minus; &radic;<i>b</i>)<sup>2</sup>')} = ${frac('<i>m</i> + <i>n</i>', '<i>m</i> &minus; <i>n</i>')}</div>
     <div>Taking square roots:</div>
     <div>&rArr; ${frac('&radic;<i>a</i> + &radic;<i>b</i>', '&radic;<i>a</i> &minus; &radic;<i>b</i>')} = ${frac('&radic;[<i>m</i> + <i>n</i>]', '&radic;[<i>m</i> &minus; <i>n</i>]')}</div>
     <div>Applying Componendo and Dividendo again:</div>
     <div>&rArr; ${frac('2&radic;<i>a</i>', '2&radic;<i>b</i>')} = ${frac('&radic;[<i>m</i> + <i>n</i>] + &radic;[<i>m</i> &minus; <i>n</i>]', '&radic;[<i>m</i> + <i>n</i>] &minus; &radic;[<i>m</i> &minus; <i>n</i>]')}</div>
     <div>Squaring both sides:</div>
     <div>&rArr; ${frac('<i>a</i>', '<i>b</i>')} = ${frac('(<i>m</i> + <i>n</i>) + (<i>m</i> &minus; <i>n</i>) + 2&radic;[(<i>m</i>+<i>n</i>)(<i>m</i>&minus;<i>n</i>)]', '(<i>m</i> + <i>n</i>) + (<i>m</i> &minus; <i>n</i>) &minus; 2&radic;[(<i>m</i>+<i>n</i>)(<i>m</i>&minus;<i>n</i>)]')} = ${frac('2<i>m</i> + 2&radic;[<i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>]', '2<i>m</i> &minus; 2&radic;[<i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>]')} = <b>${frac('<i>m</i> + &radic;[<i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>]', '<i>m</i> &minus; &radic;[<i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>]')}</b></div>`,
    `(<i>m</i> + &radic;[<i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>]) : (<i>m</i> &minus; &radic;[<i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>]) &nbsp; (Hence Proved)`
  ));

  // Q20
  cards.push(qCard(
    20,
    `If <b><i>a</i>, <i>b</i>, <i>c</i> are in A.P.</b>; <b><i>b</i>, <i>c</i>, <i>d</i> are in G.P.</b>; and <b>${frac('1', '<i>c</i>')}, ${frac('1', '<i>d</i>')}, ${frac('1', '<i>e</i>')} are in A.P.</b>, prove that <b><i>a</i>, <i>c</i>, <i>e</i> are in G.P.</b>`,
    `<div>From given conditions:</div>
     <div>1. <i>a</i>, <i>b</i>, <i>c</i> in A.P. &rArr; <b><i>b</i> = ${frac('<i>a</i> + <i>c</i>', '2')}</b> &nbsp; ... (1)</div>
     <div>2. <i>b</i>, <i>c</i>, <i>d</i> in G.P. &rArr; <i>c</i><sup>2</sup> = <i>bd</i> &rArr; <b><i>d</i> = ${frac('<i>c</i><sup>2</sup>', '<i>b</i>')} = ${frac('2<i>c</i><sup>2</sup>', '<i>a</i> + <i>c</i>')}</b> &nbsp; ... (2)</div>
     <div>3. ${frac('1', '<i>c</i>')}, ${frac('1', '<i>d</i>')}, ${frac('1', '<i>e</i>')} in A.P. &rArr; ${frac('2', '<i>d</i>')} = ${frac('1', '<i>c</i>')} + ${frac('1', '<i>e</i>')} = ${frac('<i>c</i> + <i>e</i>', '<i>ce</i>')} &nbsp; ... (3)</div>
     <div style="margin-top: 8px;">Substituting (2) into (3):</div>
     <div>&rArr; ${frac('2(<i>a</i> + <i>c</i>)', '2<i>c</i><sup>2</sup>')} = ${frac('<i>c</i> + <i>e</i>', '<i>ce</i>')}</div>
     <div>&rArr; ${frac('<i>a</i> + <i>c</i>', '<i>c</i><sup>2</sup>')} = ${frac('<i>c</i> + <i>e</i>', '<i>ce</i>')}</div>
     <div>Multiplying both sides by <i>c</i>:</div>
     <div>&rArr; ${frac('<i>a</i> + <i>c</i>', '<i>c</i>')} = ${frac('<i>c</i> + <i>e</i>', '<i>e</i>')}</div>
     <div>Cross-multiplying:</div>
     <div>&rArr; <i>e</i>(<i>a</i> + <i>c</i>) = <i>c</i>(<i>c</i> + <i>e</i>)</div>
     <div>&rArr; <i>ae</i> + <i>ce</i> = <i>c</i><sup>2</sup> + <i>ce</i></div>
     <div>&rArr; <b><i>c</i><sup>2</sup> = <i>ae</i></b></div>
     <div>Therefore, <b><i>a</i>, <i>c</i>, <i>e</i> are in G.P.</b></div>`,
    `<i>c</i><sup>2</sup> = <i>ae</i> &rArr; <i>a</i>, <i>c</i>, <i>e</i> in G.P. &nbsp; (Hence Proved)`
  ));

  // Q21
  cards.push(qCard(
    21,
    `Find the sum of the following series up to <i>n</i> terms:<br/>
     <b>(i) 5 + 55 + 555 + ...</b><br/>
     <b>(ii) 0.6 + 0.66 + 0.666 + ...</b>`,
    `<div><b>Part (i): 5 + 55 + 555 + ... to <i>n</i> terms</b></div>
     <div>&rArr; <i>S<sub>n</sub></i> = 5 (1 + 11 + 111 + ...) = ${frac('5', '9')} (9 + 99 + 999 + ...)</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('5', '9')} [ (10 &minus; 1) + (10<sup>2</sup> &minus; 1) + ... + (10<sup><i>n</i></sup> &minus; 1) ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('5', '9')} [ ${frac('10(10<sup><i>n</i></sup> &minus; 1)', '9')} &minus; <i>n</i> ] = <b>${frac('50', '81')}(10<sup><i>n</i></sup> &minus; 1) &minus; ${frac('5<i>n</i>', '9')}</b></div>
     <div style="margin-top: 10px;"><b>Part (ii): 0.6 + 0.66 + 0.666 + ... to <i>n</i> terms</b></div>
     <div>&rArr; <i>S<sub>n</sub></i> = 6 (0.1 + 0.11 + 0.111 + ...) = ${frac('6', '9')} (0.9 + 0.99 + 0.999 + ...)</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('2', '3')} [ (1 &minus; 0.1) + (1 &minus; 0.01) + ... + (1 &minus; 10<sup>&minus;<i>n</i></sup>) ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('2', '3')} [ <i>n</i> &minus; ${frac('0.1(1 &minus; 10<sup>&minus;<i>n</i></sup>)', '1 &minus; 0.1')} ] = ${frac('2', '3')} [ <i>n</i> &minus; ${frac('1', '9')}(1 &minus; 10<sup>&minus;<i>n</i></sup>) ]</div>
     <div>&rArr; <b><i>S<sub>n</sub></i> = ${frac('2', '3')}<i>n</i> &minus; ${frac('2', '27')}(1 &minus; 10<sup>&minus;<i>n</i></sup>)</b></div>`,
    `(i) ${frac('50', '81')}(10<sup><i>n</i></sup> &minus; 1) &minus; ${frac('5<i>n</i>', '9')}, &nbsp; (ii) ${frac('2', '3')}<i>n</i> &minus; ${frac('2', '27')}(1 &minus; 10<sup>&minus;<i>n</i></sup>)`
  ));

  // Q22
  cards.push(qCard(
    22,
    `Find the <b>20<sup>th</sup> term</b> of the series: &nbsp; <b>2 &times; 4 + 4 &times; 6 + 6 &times; 8 + ... + <i>n</i> terms</b>.`,
    `<div>The <i>n</i><sup>th</sup> term of the series is:</div>
     <div>&rArr; <i>a<sub>n</sub></i> = (2<i>n</i>)(2<i>n</i> + 2) = 4<i>n</i><sup>2</sup> + 4<i>n</i></div>
     <div style="margin-top: 8px;">Finding the 20<sup>th</sup> term (substituting <i>n</i> = 20):</div>
     <div>&rArr; <i>a</i><sub>20</sub> = 4(20)<sup>2</sup> + 4(20)</div>
     <div>&rArr; <i>a</i><sub>20</sub> = 4(400) + 80 = 1600 + 80 = <b>1680</b></div>`,
    `<i>a</i><sub>20</sub> = 1680`
  ));

  // Q23
  cards.push(qCard(
    23,
    `Find the sum of the first <i>n</i> terms of the series: &nbsp; <b>3 + 7 + 13 + 21 + 31 + ...</b>`,
    `<div>Let <i>S</i> = 3 + 7 + 13 + 21 + ... + <i>a</i><sub><i>n</i>&minus;1</sub> + <i>a<sub>n</sub></i></div>
     <div>Writing with terms shifted by one position:</div>
     <div><i>S</i> = &nbsp; &nbsp; 3 + &nbsp; 7 + 13 + ... + <i>a</i><sub><i>n</i>&minus;1</sub> + <i>a<sub>n</sub></i></div>
     <div>Subtracting the two equations:</div>
     <div>&rArr; 0 = 3 + [ (7 &minus; 3) + (13 &minus; 7) + (21 &minus; 13) + ... (<i>n</i> &minus; 1 terms) ] &minus; <i>a<sub>n</sub></i></div>
     <div>&rArr; <i>a<sub>n</sub></i> = 3 + [ 4 + 6 + 8 + ... to (<i>n</i> &minus; 1) terms ]</div>
     <div>The bracketed sum is an A.P. with <i>a</i> = 4, <i>d</i> = 2:</div>
     <div>&rArr; <i>a<sub>n</sub></i> = 3 + ${frac('<i>n</i> &minus; 1', '2')} [ 2(4) + (<i>n</i> &minus; 2)(2) ] = 3 + (<i>n</i> &minus; 1)(<i>n</i> + 2) = <i>n</i><sup>2</sup> + <i>n</i> + 1</div>
     <div style="margin-top: 8px;">Now, summing <i>a<sub>k</sub></i>:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = &sum; <i>k</i><sup>2</sup> + &sum; <i>k</i> + &sum; 1</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} + ${frac('<i>n</i>(<i>n</i> + 1)', '2')} + <i>n</i> = ${frac('<i>n</i>', '6')} [ (<i>n</i> + 1)(2<i>n</i> + 1) + 3(<i>n</i> + 1) + 6 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '6')} [ 2<i>n</i><sup>2</sup> + 6<i>n</i> + 10 ] = <b>${frac('<i>n</i>(<i>n</i><sup>2</sup> + 3<i>n</i> + 5)', '3')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i><sup>2</sup> + 3<i>n</i> + 5)', '3')}`
  ));

  // Q24
  cards.push(qCard(
    24,
    `If <i>S</i><sub>1</sub>, <i>S</i><sub>2</sub>, <i>S</i><sub>3</sub> are the sum of the first <i>n</i> natural numbers, their squares and their cubes, respectively, show that:<br/>
     <b>9<i>S</i><sub>2</sub><sup>2</sup> = <i>S</i><sub>3</sub>(1 + 8<i>S</i><sub>1</sub>)</b>.`,
    `<div>Standard formulas:</div>
     <div>• <i>S</i><sub>1</sub> = ${frac('<i>n</i>(<i>n</i> + 1)', '2')}</div>
     <div>• <i>S</i><sub>2</sub> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')}</div>
     <div>• <i>S</i><sub>3</sub> = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')}</div>
     <div style="margin-top: 8px;">1. Evaluating R.H.S.:</div>
     <div>&rArr; 1 + 8<i>S</i><sub>1</sub> = 1 + 8 [ ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ] = 1 + 4<i>n</i>(<i>n</i> + 1) = 4<i>n</i><sup>2</sup> + 4<i>n</i> + 1 = (2<i>n</i> + 1)<sup>2</sup></div>
     <div>&rArr; <i>S</i><sub>3</sub>(1 + 8<i>S</i><sub>1</sub>) = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')} &times; (2<i>n</i> + 1)<sup>2</sup> = <b>${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>(2<i>n</i> + 1)<sup>2</sup>', '4')}</b></div>
     <div style="margin-top: 8px;">2. Evaluating L.H.S.:</div>
     <div>&rArr; 9<i>S</i><sub>2</sub><sup>2</sup> = 9 [ ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} ]<sup>2</sup> = 9 &times; ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>(2<i>n</i> + 1)<sup>2</sup>', '36')} = <b>${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>(2<i>n</i> + 1)<sup>2</sup>', '4')}</b></div>
     <div>Since L.H.S. = R.H.S., the relation is proved.</div>`,
    `9<i>S</i><sub>2</sub><sup>2</sup> = <i>S</i><sub>3</sub>(1 + 8<i>S</i><sub>1</sub>) &nbsp; (Hence Proved)`
  ));

  // Q25
  cards.push(qCard(
    25,
    `Find the sum of the following series up to <i>n</i> terms:<br/>
     <b>${frac('1<sup>3</sup>', '1')} + ${frac('1<sup>3</sup> + 2<sup>3</sup>', '1 + 3')} + ${frac('1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup>', '1 + 3 + 5')} + ...</b>`,
    `<div>Let <i>a<sub>n</sub></i> be the <i>n</i><sup>th</sup> term of the series:</div>
     <div>• Numerator: Sum of cubes = &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i><sup>3</sup> = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')}</div>
     <div>• Denominator: Sum of first <i>n</i> odd integers = 1 + 3 + 5 + ... + (2<i>n</i> &minus; 1) = <i>n</i><sup>2</sup></div>
     <div style="margin-top: 6px;">&rArr; <i>a<sub>n</sub></i> = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup> / 4', '<i>n</i><sup>2</sup>')} = ${frac('(<i>n</i> + 1)<sup>2</sup>', '4')} = ${frac('<i>n</i><sup>2</sup> + 2<i>n</i> + 1', '4')}</div>
     <div style="margin-top: 8px;">Summing to <i>n</i> terms:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('1', '4')} [ &sum; <i>k</i><sup>2</sup> + 2&sum; <i>k</i> + &sum; 1 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('1', '4')} [ ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} + 2(${frac('<i>n</i>(<i>n</i> + 1)', '2')}) + <i>n</i> ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '24')} [ (<i>n</i> + 1)(2<i>n</i> + 1) + 6(<i>n</i> + 1) + 6 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '24')} [ 2<i>n</i><sup>2</sup> + 3<i>n</i> + 1 + 6<i>n</i> + 6 + 6 ] = <b>${frac('<i>n</i>(2<i>n</i><sup>2</sup> + 9<i>n</i> + 13)', '24')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(2<i>n</i><sup>2</sup> + 9<i>n</i> + 13)', '24')}`
  ));

  // Q26
  cards.push(qCard(
    26,
    `Show that: &nbsp; <b>${frac('1 &times; 2<sup>2</sup> + 2 &times; 3<sup>2</sup> + ... + <i>n</i> &times; (<i>n</i> + 1)<sup>2</sup>', '1<sup>2</sup> &times; 2 + 2<sup>2</sup> &times; 3 + ... + <i>n</i><sup>2</sup> &times; (<i>n</i> + 1)')} = ${frac('3<i>n</i> + 5', '3<i>n</i> + 1')}</b>.`,
    `<div>1. Numerator series: <i>T<sub>k</sub></i> = <i>k</i>(<i>k</i> + 1)<sup>2</sup> = <i>k</i><sup>3</sup> + 2<i>k</i><sup>2</sup> + <i>k</i></div>
     <div>&rArr; &sum; <i>T<sub>k</sub></i> = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')} + 2 [ ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} ] + ${frac('<i>n</i>(<i>n</i> + 1)', '2')}</div>
     <div>&rArr; = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} [ 3<i>n</i>(<i>n</i> + 1) + 4(2<i>n</i> + 1) + 6 ] = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} (3<i>n</i><sup>2</sup> + 11<i>n</i> + 10) = <b>${frac('<i>n</i>(<i>n</i> + 1)(<i>n</i> + 2)(3<i>n</i> + 5)', '12')}</b></div>
     <div style="margin-top: 8px;">2. Denominator series: <i>T'<sub>k</sub></i> = <i>k</i><sup>2</sup>(<i>k</i> + 1) = <i>k</i><sup>3</sup> + <i>k</i><sup>2</sup></div>
     <div>&rArr; &sum; <i>T'<sub>k</sub></i> = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')} + ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')}</div>
     <div>&rArr; = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} [ 3<i>n</i>(<i>n</i> + 1) + 2(2<i>n</i> + 1) ] = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} (3<i>n</i><sup>2</sup> + 7<i>n</i> + 2) = <b>${frac('<i>n</i>(<i>n</i> + 1)(<i>n</i> + 2)(3<i>n</i> + 1)', '12')}</b></div>
     <div style="margin-top: 8px;">Dividing Numerator by Denominator:</div>
     <div>&rArr; Ratio = ${frac('<sup><i>n</i>(<i>n</i>+1)(<i>n</i>+2)(3<i>n</i>+5)</sup>/<sub>12</sub>', '<sup><i>n</i>(<i>n</i>+1)(<i>n</i>+2)(3<i>n</i>+1)</sup>/<sub>12</sub>')} = <b>${frac('3<i>n</i> + 5', '3<i>n</i> + 1')}</b></div>`,
    `${frac('3<i>n</i> + 5', '3<i>n</i> + 1')} &nbsp; (Hence Proved)`
  ));

  // Q27
  cards.push(qCard(
    27,
    `A farmer buys a used tractor for <b>Rs 12,000</b>. He pays <b>Rs 6,000 cash</b> and agrees to pay the balance in <b>annual instalments of Rs 500 plus 12% interest on the unpaid amount</b>. How much will the tractor cost him?`,
    `<div>• Total cost: Rs 12,000</div>
     <div>• Cash payment: Rs 6,000</div>
     <div>• Unpaid balance = 12,000 &minus; 6,000 = Rs 6,000</div>
     <div>Number of annual instalments = ${frac('6000', '500')} = <b>12 instalments</b></div>
     <div style="margin-top: 8px;">Interest paid each year (12% on remaining balance):</div>
     <div>• Year 1: 12% of 6,000</div>
     <div>• Year 2: 12% of 5,500</div>
     <div>• ...</div>
     <div>• Year 12: 12% of 500</div>
     <div style="margin-top: 6px;">Total Interest = 12% &times; (6000 + 5500 + ... + 500)</div>
     <div>Inside brackets is an A.P. of 12 terms with <i>a</i> = 500, <i>l</i> = 6000:</div>
     <div>&rArr; Sum = ${frac('12', '2')}(500 + 6000) = 6 &times; 6500 = Rs 39,000</div>
     <div>&rArr; Total Interest = ${frac('12', '100')} &times; 39,000 = <b>Rs 4,680</b></div>
     <div style="margin-top: 8px;">Total cost of tractor = Initial Cost + Total Interest = 12,000 + 4,680 = <b>Rs 16,680</b></div>`,
    `Rs 16,680`
  ));

  // Q28
  cards.push(qCard(
    28,
    `Shamshad Ali buys a scooter for <b>Rs 22,000</b>. He pays <b>Rs 4,000 cash</b> and agrees to pay the balance in <b>annual instalments of Rs 1,000 plus 10% interest on the unpaid amount</b>. How much will the scooter cost him?`,
    `<div>• Scooter price: Rs 22,000</div>
     <div>• Cash down-payment: Rs 4,000</div>
     <div>• Unpaid balance = 22,000 &minus; 4,000 = Rs 18,000</div>
     <div>Number of annual instalments = ${frac('18000', '1000')} = <b>18 instalments</b></div>
     <div style="margin-top: 8px;">Interest paid each year (10% on remaining balance):</div>
     <div>Total Interest = 10% &times; (18000 + 17000 + ... + 1000)</div>
     <div>Sum of A.P. (18 terms, <i>a</i> = 1000, <i>l</i> = 18000):</div>
     <div>&rArr; Sum = ${frac('18', '2')}(1000 + 18000) = 9 &times; 19000 = Rs 171,000</div>
     <div>&rArr; Total Interest = ${frac('10', '100')} &times; 171,000 = <b>Rs 17,100</b></div>
     <div style="margin-top: 8px;">Total amount paid = 22,000 + 17,100 = <b>Rs 39,100</b></div>`,
    `Rs 39,100`
  ));

  // Q29
  cards.push(qCard(
    29,
    `A person writes a letter to four of his friends. He asks each one of them to copy the letter and mail it to four different persons with the instruction that they move the chain similarly. Assuming that the chain is not broken and that it costs <b>50 paise</b> to mail one letter, find the amount spent on the postage when the <b>8<sup>th</sup> set of the letter</b> is mailed.`,
    `<div>The number of letters in each set forms a G.P.:</div>
     <div><b>4, 4<sup>2</sup>, 4<sup>3</sup>, ..., 4<sup>8</sup></b></div>
     <div>• First term: <i>a</i> = 4</div>
     <div>• Common ratio: <i>r</i> = 4</div>
     <div>• Number of sets: <i>n</i> = 8</div>
     <div style="margin-top: 8px;">Total number of letters mailed:</div>
     <div>&rArr; <i>S</i><sub>8</sub> = ${frac('4(4<sup>8</sup> &minus; 1)', '4 &minus; 1')} = ${frac('4(65536 &minus; 1)', '3')} = ${frac('4 &times; 65535', '3')} = 4 &times; 21845 = <b>87,380 letters</b></div>
     <div style="margin-top: 8px;">Cost of mailing 1 letter = 50 paise = Rs 0.50:</div>
     <div>&rArr; Total Postage Cost = 87,380 &times; Rs ${frac('1', '2')} = <b>Rs 43,690</b></div>`,
    `Rs 43,690`
  ));

  // Q30
  cards.push(qCard(
    30,
    `A man deposited <b>Rs 10,000</b> in a bank at the rate of <b>5% simple interest annually</b>. Find the amount in the <b>15<sup>th</sup> year</b> since he deposited the amount and also calculate the <b>total amount after 20 years</b>.`,
    `<div>Principal: <i>P</i> = Rs 10,000, Annual simple interest rate: <i>R</i> = 5%</div>
     <div>Annual interest earned:</div>
     <div>&rArr; <i>I</i> = ${frac('10000 &times; 5', '100')} = <b>Rs 500 per year</b></div>
     <div style="margin-top: 8px;">1. Amount in the 15<sup>th</sup> year (i.e. at the start of year 15 / after 14 completed years):</div>
     <div>&rArr; <i>A</i><sub>15</sub> = 10,000 + 14 &times; 500 = 10,000 + 7,000 = <b>Rs 17,000</b></div>
     <div style="margin-top: 8px;">2. Total amount after 20 years:</div>
     <div>&rArr; <i>A</i><sub>after 20 yrs</sub> = 10,000 + 20 &times; 500 = 10,000 + 10,000 = <b>Rs 20,000</b></div>`,
    `In 15<sup>th</sup> year: Rs 17,000 &nbsp;|&nbsp; After 20 years: Rs 20,000`
  ));

  // Q31
  cards.push(qCard(
    31,
    `A manufacturer reckons that the value of a machine, which costs him <b>Rs 15,625</b>, will <b>depreciate each year by 20%</b>. Find the estimated value at the end of <b>5 years</b>.`,
    `<div>Initial cost: <i>V</i><sub>0</sub> = Rs 15,625</div>
     <div>Annual rate of depreciation: 20%</div>
     <div>Value after each year = 100% &minus; 20% = 80% = ${frac('4', '5')} of previous year's value.</div>
     <div style="margin-top: 8px;">Value at the end of 5 years:</div>
     <div>&rArr; <i>V</i><sub>5</sub> = 15625 &times; (${frac('4', '5')})<sup>5</sup></div>
     <div>&rArr; <i>V</i><sub>5</sub> = 15625 &times; ${frac('1024', '3125')}</div>
     <div>Since 15625 &divide; 3125 = 5:</div>
     <div>&rArr; <i>V</i><sub>5</sub> = 5 &times; 1024 = <b>Rs 5,120</b></div>`,
    `Rs 5,120`
  ));

  // Q32
  cards.push(qCard(
    32,
    `150 workers were engaged to finish a job in a certain number of days. <b>4 workers dropped out on the second day, 4 more workers dropped out on the third day and so on</b>. It took <b>8 more days</b> to finish the work. Find the number of days in which the work was completed.`,
    `<div>Let <i>x</i> be the originally planned number of days for 150 workers.</div>
     <div>Total work (in worker-days) = <b>150<i>x</i></b>.</div>
     <div>Since 4 workers drop out daily, the number of workers working each day forms an A.P.:</div>
     <div>• Day 1: 150</div>
     <div>• Day 2: 146</div>
     <div>• Day 3: 142, ... for (<i>x</i> + 8) days.</div>
     <div>Here, <i>a</i> = 150, <i>d</i> = &minus;4, <i>n</i> = <i>x</i> + 8.</div>
     <div style="margin-top: 8px;">Equating total work done:</div>
     <div>&rArr; 150<i>x</i> = ${frac('<i>x</i> + 8', '2')} [ 2(150) + (<i>x</i> + 8 &minus; 1)(&minus;4) ]</div>
     <div>&rArr; 150<i>x</i> = ${frac('<i>x</i> + 8', '2')} [ 300 &minus; 4<i>x</i> &minus; 28 ] = ${frac('<i>x</i> + 8', '2')} [ 272 &minus; 4<i>x</i> ]</div>
     <div>&rArr; 150<i>x</i> = (<i>x</i> + 8)(136 &minus; 2<i>x</i>)</div>
     <div>Dividing by 2:</div>
     <div>&rArr; 75<i>x</i> = (<i>x</i> + 8)(68 &minus; <i>x</i>) = 68<i>x</i> &minus; <i>x</i><sup>2</sup> + 544 &minus; 8<i>x</i></div>
     <div>&rArr; 75<i>x</i> = &minus;<i>x</i><sup>2</sup> + 60<i>x</i> + 544</div>
     <div>&rArr; <i>x</i><sup>2</sup> + 15<i>x</i> &minus; 544 = 0</div>
     <div>Factoring: 544 = 32 &times; 17, with 32 &minus; 17 = 15:</div>
     <div>&rArr; (<i>x</i> + 32)(<i>x</i> &minus; 17) = 0</div>
     <div>Since days cannot be negative, <b><i>x</i> = 17</b>.</div>
     <div style="margin-top: 8px;">Total days taken to complete the work = <i>x</i> + 8 = 17 + 8 = <b>25 days</b>.</div>`,
    `25 days`
  ));

  const banner = makeBanner("Miscellaneous Exercise", "Advanced Sequences, Geometric Series & Arithmetic Applications");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx8Misc };
