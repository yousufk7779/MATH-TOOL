const { styleBlock, frac, makeBanner, qCard } = require('./ch8_common');

function generateEx82() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Find the sum of odd integers from <b>1 to 2001</b>.`,
    `<div>The odd integers from 1 to 2001 are: <b>1, 3, 5, ..., 1999, 2001</b>.</div>
     <div>This sequence forms an Arithmetic Progression (A.P.) with:</div>
     <div>• First term: <i>a</i> = 1</div>
     <div>• Common difference: <i>d</i> = 3 &minus; 1 = 2</div>
     <div>• Last term: <i>l</i> = <i>a<sub>n</sub></i> = 2001</div>
     <div style="margin-top: 8px;">Finding the number of terms <i>n</i>:</div>
     <div>&rArr; <i>a</i> + (<i>n</i> &minus; 1)<i>d</i> = 2001</div>
     <div>&rArr; 1 + (<i>n</i> &minus; 1)(2) = 2001</div>
     <div>&rArr; 2(<i>n</i> &minus; 1) = 2000</div>
     <div>&rArr; <i>n</i> &minus; 1 = 1000 &rArr; <b><i>n</i> = 1001</b></div>
     <div style="margin-top: 8px;">Applying sum formula <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '2')}(<i>a</i> + <i>l</i>):</div>
     <div>&rArr; <i>S</i><sub>1001</sub> = ${frac('1001', '2')}(1 + 2001) = ${frac('1001', '2')} &times; 2002 = 1001 &times; 1001 = <b>1,002,001</b></div>`,
    `1,002,001`
  ));

  // Q2
  cards.push(qCard(
    2,
    `Find the sum of all natural numbers lying <b>between 100 and 1000</b>, which are <b>multiples of 5</b>.`,
    `<div>The natural numbers strictly between 100 and 1000 that are multiples of 5 are: <b>105, 110, 115, ..., 995</b>.</div>
     <div>This forms an A.P. where:</div>
     <div>• First term: <i>a</i> = 105</div>
     <div>• Common difference: <i>d</i> = 5</div>
     <div>• Last term: <i>l</i> = <i>a<sub>n</sub></i> = 995</div>
     <div style="margin-top: 8px;">Finding <i>n</i>:</div>
     <div>&rArr; <i>a</i> + (<i>n</i> &minus; 1)<i>d</i> = 995</div>
     <div>&rArr; 105 + (<i>n</i> &minus; 1)(5) = 995</div>
     <div>&rArr; 5(<i>n</i> &minus; 1) = 995 &minus; 105 = 890</div>
     <div>&rArr; <i>n</i> &minus; 1 = 178 &rArr; <b><i>n</i> = 179</b></div>
     <div style="margin-top: 8px;">Sum of <i>n</i> terms:</div>
     <div>&rArr; <i>S</i><sub>179</sub> = ${frac('179', '2')}(105 + 995) = ${frac('179', '2')} &times; 1100 = 179 &times; 550 = <b>98,450</b></div>`,
    `98,450`
  ));

  // Q3
  cards.push(qCard(
    3,
    `In an A.P., the first term is <b>2</b>, and the sum of the first five terms is <b>one-fourth of the next five terms</b>. Show that the 20<sup>th</sup> term is <b>&minus;112</b>.`,
    `<div>Given: First term <i>a</i> = 2. Let common difference be <i>d</i>.</div>
     <div>• Sum of first 5 terms:</div>
     <div>&rArr; <i>S</i><sub>5</sub> = ${frac('5', '2')}[2(2) + (5 &minus; 1)<i>d</i>] = ${frac('5', '2')}(4 + 4<i>d</i>) = 5(2 + 2<i>d</i>) = <b>10 + 10<i>d</i></b></div>
     <div style="margin-top: 6px;">• Sum of first 10 terms:</div>
     <div>&rArr; <i>S</i><sub>10</sub> = ${frac('10', '2')}[2(2) + (10 &minus; 1)<i>d</i>] = 5(4 + 9<i>d</i>) = <b>20 + 45<i>d</i></b></div>
     <div style="margin-top: 6px;">• Sum of next five terms (terms 6 to 10):</div>
     <div>&rArr; <i>S</i><sub>next 5</sub> = <i>S</i><sub>10</sub> &minus; <i>S</i><sub>5</sub> = (20 + 45<i>d</i>) &minus; (10 + 10<i>d</i>) = <b>10 + 35<i>d</i></b></div>
     <div style="margin-top: 8px;">According to the given condition:</div>
     <div>&rArr; <i>S</i><sub>5</sub> = ${frac('1', '4')} &times; (<i>S</i><sub>next 5</sub>)</div>
     <div>&rArr; 10 + 10<i>d</i> = ${frac('1', '4')}(10 + 35<i>d</i>)</div>
     <div>&rArr; 4(10 + 10<i>d</i>) = 10 + 35<i>d</i></div>
     <div>&rArr; 40 + 40<i>d</i> = 10 + 35<i>d</i></div>
     <div>&rArr; 40<i>d</i> &minus; 35<i>d</i> = 10 &minus; 40 &rArr; 5<i>d</i> = &minus;30 &rArr; <b><i>d</i> = &minus;6</b></div>
     <div style="margin-top: 8px;">Finding the 20<sup>th</sup> term (<i>a</i><sub>20</sub>):</div>
     <div>&rArr; <i>a</i><sub>20</sub> = <i>a</i> + (20 &minus; 1)<i>d</i> = 2 + 19(&minus;6) = 2 &minus; 114 = <b>&minus;112</b></div>`,
    `<i>a</i><sub>20</sub> = &minus;112 &nbsp; (Hence Proved)`
  ));

  // Q4
  cards.push(qCard(
    4,
    `How many terms of the A.P. <b>&minus;6, &minus;${frac('11', '2')}, &minus;5, ...</b> are needed to give the sum <b>&minus;25</b>?`,
    `<div>Given A.P.: &minus;6, &minus;${frac('11', '2')}, &minus;5, ...</div>
     <div>• First term: <i>a</i> = &minus;6</div>
     <div>• Common difference: <i>d</i> = &minus;${frac('11', '2')} &minus; (&minus;6) = &minus;${frac('11', '2')} + 6 = <b>${frac('1', '2')}</b></div>
     <div>• Sum: <i>S<sub>n</sub></i> = &minus;25</div>
     <div style="margin-top: 8px;">Using sum formula <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '2')}[2<i>a</i> + (<i>n</i> &minus; 1)<i>d</i>]:</div>
     <div>&rArr; &minus;25 = ${frac('<i>n</i>', '2')} [ 2(&minus;6) + (<i>n</i> &minus; 1)(${frac('1', '2')}) ]</div>
     <div>&rArr; &minus;50 = <i>n</i> [ &minus;12 + ${frac('<i>n</i> &minus; 1', '2')} ]</div>
     <div>&rArr; &minus;50 = <i>n</i> [ ${frac('&minus;24 + <i>n</i> &minus; 1', '2')} ] = <i>n</i> [ ${frac('<i>n</i> &minus; 25', '2')} ]</div>
     <div>&rArr; &minus;100 = <i>n</i>(<i>n</i> &minus; 25)</div>
     <div>&rArr; <i>n</i><sup>2</sup> &minus; 25<i>n</i> + 100 = 0</div>
     <div>&rArr; (<i>n</i> &minus; 5)(<i>n</i> &minus; 20) = 0</div>
     <div>&rArr; <b><i>n</i> = 5</b> &nbsp; or &nbsp; <b><i>n</i> = 20</b></div>
     <div class="reason" style="margin-top: 6px;">[Both values are valid natural numbers; the sum of terms from 6th to 20th is 0 as negative and positive terms cancel.]</div>`,
    `<i>n</i> = 5 &nbsp; or &nbsp; <i>n</i> = 20`
  ));

  // Q5
  cards.push(qCard(
    5,
    `In an A.P., if <i>p</i><sup>th</sup> term is <b>${frac('1', '<i>q</i>')}</b> and <i>q</i><sup>th</sup> term is <b>${frac('1', '<i>p</i>')}</b>, prove that the sum of first <i>pq</i> terms is <b>${frac('1', '2')}(<i>pq</i> + 1)</b>, where <i>p</i> &ne; <i>q</i>.`,
    `<div>Let the first term be <i>a</i> and the common difference be <i>d</i>.</div>
     <div>• <i>a<sub>p</sub></i> = <i>a</i> + (<i>p</i> &minus; 1)<i>d</i> = ${frac('1', '<i>q</i>')} &nbsp; ... (1)</div>
     <div>• <i>a<sub>q</sub></i> = <i>a</i> + (<i>q</i> &minus; 1)<i>d</i> = ${frac('1', '<i>p</i>')} &nbsp; ... (2)</div>
     <div style="margin-top: 8px;">Subtracting (2) from (1):</div>
     <div>&rArr; (<i>p</i> &minus; <i>q</i>)<i>d</i> = ${frac('1', '<i>q</i>')} &minus; ${frac('1', '<i>p</i>')} = ${frac('<i>p</i> &minus; <i>q</i>', '<i>pq</i>')}</div>
     <div>Since <i>p</i> &ne; <i>q</i>, dividing by (<i>p</i> &minus; <i>q</i>):</div>
     <div>&rArr; <b><i>d</i> = ${frac('1', '<i>pq</i>')}</b></div>
     <div style="margin-top: 6px;">Substituting <i>d</i> into (1):</div>
     <div>&rArr; <i>a</i> + (<i>p</i> &minus; 1) &times; ${frac('1', '<i>pq</i>')} = ${frac('1', '<i>q</i>')}</div>
     <div>&rArr; <i>a</i> = ${frac('1', '<i>q</i>')} &minus; ${frac('<i>p</i> &minus; 1', '<i>pq</i>')} = ${frac('<i>p</i> &minus; (<i>p</i> &minus; 1)', '<i>pq</i>')} = <b>${frac('1', '<i>pq</i>')}</b></div>
     <div style="margin-top: 8px;">Now, finding the sum of first <i>pq</i> terms (<i>S<sub>pq</sub></i>):</div>
     <div>&rArr; <i>S<sub>pq</sub></i> = ${frac('<i>pq</i>', '2')} [ 2<i>a</i> + (<i>pq</i> &minus; 1)<i>d</i> ]</div>
     <div>&rArr; <i>S<sub>pq</sub></i> = ${frac('<i>pq</i>', '2')} [ 2(${frac('1', '<i>pq</i>')}) + (<i>pq</i> &minus; 1)(${frac('1', '<i>pq</i>')}) ]</div>
     <div>&rArr; <i>S<sub>pq</sub></i> = ${frac('<i>pq</i>', '2')} &times; ${frac('1', '<i>pq</i>')} [ 2 + <i>pq</i> &minus; 1 ] = <b>${frac('1', '2')}(<i>pq</i> + 1)</b></div>`,
    `<i>S<sub>pq</sub></i> = ${frac('1', '2')}(<i>pq</i> + 1) &nbsp; (Hence Proved)`
  ));

  // Q6
  cards.push(qCard(
    6,
    `If the sum of a certain number of terms of the A.P. <b>25, 22, 19, ...</b> is <b>116</b>, find the last term.`,
    `<div>Given A.P.: 25, 22, 19, ...</div>
     <div>• First term: <i>a</i> = 25</div>
     <div>• Common difference: <i>d</i> = 22 &minus; 25 = &minus;3</div>
     <div>• Sum: <i>S<sub>n</sub></i> = 116</div>
     <div style="margin-top: 8px;">Using sum formula <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '2')}[2<i>a</i> + (<i>n</i> &minus; 1)<i>d</i>]:</div>
     <div>&rArr; 116 = ${frac('<i>n</i>', '2')}[2(25) + (<i>n</i> &minus; 1)(&minus;3)]</div>
     <div>&rArr; 232 = <i>n</i>[50 &minus; 3<i>n</i> + 3] = <i>n</i>(53 &minus; 3<i>n</i>)</div>
     <div>&rArr; 3<i>n</i><sup>2</sup> &minus; 53<i>n</i> + 232 = 0</div>
     <div>&rArr; 3<i>n</i><sup>2</sup> &minus; 24<i>n</i> &minus; 29<i>n</i> + 232 = 0</div>
     <div>&rArr; 3<i>n</i>(<i>n</i> &minus; 8) &minus; 29(<i>n</i> &minus; 8) = 0</div>
     <div>&rArr; (3<i>n</i> &minus; 29)(<i>n</i> &minus; 8) = 0</div>
     <div>&rArr; <i>n</i> = ${frac('29', '3')} &nbsp; or &nbsp; <b><i>n</i> = 8</b></div>
     <div style="margin-top: 6px;">Since the number of terms must be a positive integer, we have <b><i>n</i> = 8</b>.</div>
     <div style="margin-top: 6px;">Finding the last term (<i>a</i><sub>8</sub>):</div>
     <div>&rArr; <i>l</i> = <i>a</i><sub>8</sub> = <i>a</i> + 7<i>d</i> = 25 + 7(&minus;3) = 25 &minus; 21 = <b>4</b></div>`,
    `Last term = 4`
  ));

  // Q7
  cards.push(qCard(
    7,
    `Find the sum to <i>n</i> terms of the A.P., whose <i>k</i><sup>th</sup> term is <b>5<i>k</i> + 1</b>.`,
    `<div>Given: <i>a<sub>k</sub></i> = 5<i>k</i> + 1</div>
     <div>• First term (<i>k</i> = 1): &nbsp; <i>a</i><sub>1</sub> = 5(1) + 1 = 6</div>
     <div>• Last / <i>n</i><sup>th</sup> term (<i>k</i> = <i>n</i>): &nbsp; <i>a<sub>n</sub></i> = 5<i>n</i> + 1</div>
     <div style="margin-top: 8px;">Applying sum formula <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '2')}(<i>a</i><sub>1</sub> + <i>a<sub>n</sub></i>):</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '2')} [ 6 + (5<i>n</i> + 1) ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '2')} (5<i>n</i> + 7) = <b>${frac('<i>n</i>(5<i>n</i> + 7)', '2')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(5<i>n</i> + 7)', '2')}`
  ));

  // Q8
  cards.push(qCard(
    8,
    `If the sum of <i>n</i> terms of an A.P. is <b>(<i>pn</i> + <i>qn</i><sup>2</sup>)</b>, where <i>p</i> and <i>q</i> are constants, find the common difference.`,
    `<div>Given: <i>S<sub>n</sub></i> = <i>pn</i> + <i>qn</i><sup>2</sup></div>
     <div>• For <i>n</i> = 1: &nbsp; <i>S</i><sub>1</sub> = <i>a</i><sub>1</sub> = <i>p</i>(1) + <i>q</i>(1)<sup>2</sup> = <b><i>p</i> + <i>q</i></b></div>
     <div>• For <i>n</i> = 2: &nbsp; <i>S</i><sub>2</sub> = <i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> = <i>p</i>(2) + <i>q</i>(2)<sup>2</sup> = <b>2<i>p</i> + 4<i>q</i></b></div>
     <div style="margin-top: 8px;">Finding the second term <i>a</i><sub>2</sub>:</div>
     <div>&rArr; <i>a</i><sub>2</sub> = <i>S</i><sub>2</sub> &minus; <i>S</i><sub>1</sub> = (2<i>p</i> + 4<i>q</i>) &minus; (<i>p</i> + <i>q</i>) = <b><i>p</i> + 3<i>q</i></b></div>
     <div style="margin-top: 8px;">Finding the common difference <i>d</i>:</div>
     <div>&rArr; <i>d</i> = <i>a</i><sub>2</sub> &minus; <i>a</i><sub>1</sub> = (<i>p</i> + 3<i>q</i>) &minus; (<i>p</i> + <i>q</i>) = <b>2<i>q</i></b></div>`,
    `Common difference = 2<i>q</i>`
  ));

  // Q9
  cards.push(qCard(
    9,
    `The sums of <i>n</i> terms of two arithmetic progressions are in the ratio <b>(5<i>n</i> + 4) : (9<i>n</i> + 6)</b>. Find the ratio of their <b>18<sup>th</sup> terms</b>.`,
    `<div>Let the first terms and common differences of the two A.P.s be <i>a</i><sub>1</sub>, <i>d</i><sub>1</sub> and <i>a</i><sub>2</sub>, <i>d</i><sub>2</sub> respectively.</div>
     <div>Given:</div>
     <div>&rArr; ${frac('<i>S<sub>n</sub></i>', "<i>S'<sub>n</sub></i>")} = ${frac('<sup><i>n</i></sup>/<sub>2</sub> [2<i>a</i><sub>1</sub> + (<i>n</i> &minus; 1)<i>d</i><sub>1</sub>]', '<sup><i>n</i></sup>/<sub>2</sub> [2<i>a</i><sub>2</sub> + (<i>n</i> &minus; 1)<i>d</i><sub>2</sub>]')} = ${frac('2<i>a</i><sub>1</sub> + (<i>n</i> &minus; 1)<i>d</i><sub>1</sub>', '2<i>a</i><sub>2</sub> + (<i>n</i> &minus; 1)<i>d</i><sub>2</sub>')} = ${frac('5<i>n</i> + 4', '9<i>n</i> + 6')} &nbsp; ... (1)</div>
     <div style="margin-top: 8px;">The ratio of their 18<sup>th</sup> terms is:</div>
     <div>&rArr; ${frac('<i>T</i><sub>18</sub>', "<i>T'</i><sub>18</sub>")} = ${frac('<i>a</i><sub>1</sub> + 17<i>d</i><sub>1</sub>', '<i>a</i><sub>2</sub> + 17<i>d</i><sub>2</sub>')} = ${frac('2<i>a</i><sub>1</sub> + 34<i>d</i><sub>1</sub>', '2<i>a</i><sub>2</sub> + 34<i>d</i><sub>2</sub>')}</div>
     <div style="margin-top: 8px;">Comparing with (1), we substitute <i>n</i> &minus; 1 = 34 &rArr; <b><i>n</i> = 35</b>:</div>
     <div>&rArr; ${frac('<i>T</i><sub>18</sub>', "<i>T'</i><sub>18</sub>")} = ${frac('5(35) + 4', '9(35) + 6')} = ${frac('175 + 4', '315 + 6')} = ${frac('179', '321')}</div>`,
    `179 : 321`
  ));

  // Q10
  cards.push(qCard(
    10,
    `If the sum of the first <i>p</i> terms of an A.P. is equal to the sum of the first <i>q</i> terms, then find the sum of the first <b>(<i>p</i> + <i>q</i>)</b> terms.`,
    `<div>Let <i>a</i> be the first term and <i>d</i> be the common difference.</div>
     <div>Given: <i>S<sub>p</sub></i> = <i>S<sub>q</sub></i></div>
     <div>&rArr; ${frac('<i>p</i>', '2')}[2<i>a</i> + (<i>p</i> &minus; 1)<i>d</i>] = ${frac('<i>q</i>', '2')}[2<i>a</i> + (<i>q</i> &minus; 1)<i>d</i>]</div>
     <div>&rArr; 2<i>ap</i> + <i>p</i>(<i>p</i> &minus; 1)<i>d</i> = 2<i>aq</i> + <i>q</i>(<i>q</i> &minus; 1)<i>d</i></div>
     <div>&rArr; 2<i>a</i>(<i>p</i> &minus; <i>q</i>) + <i>d</i> [ <i>p</i><sup>2</sup> &minus; <i>p</i> &minus; (<i>q</i><sup>2</sup> &minus; <i>q</i>) ] = 0</div>
     <div>&rArr; 2<i>a</i>(<i>p</i> &minus; <i>q</i>) + <i>d</i> [ (<i>p</i><sup>2</sup> &minus; <i>q</i><sup>2</sup>) &minus; (<i>p</i> &minus; <i>q</i>) ] = 0</div>
     <div>&rArr; 2<i>a</i>(<i>p</i> &minus; <i>q</i>) + <i>d</i> (<i>p</i> &minus; <i>q</i>)(<i>p</i> + <i>q</i> &minus; 1) = 0</div>
     <div style="margin-top: 6px;">Since <i>p</i> &ne; <i>q</i>, dividing through by (<i>p</i> &minus; <i>q</i>):</div>
     <div>&rArr; <b>2<i>a</i> + (<i>p</i> + <i>q</i> &minus; 1)<i>d</i> = 0</b> &nbsp; ... (1)</div>
     <div style="margin-top: 8px;">Now, evaluating <i>S</i><sub><i>p</i>+<i>q</i></sub>:</div>
     <div>&rArr; <i>S</i><sub><i>p</i>+<i>q</i></sub> = ${frac('<i>p</i> + <i>q</i>', '2')} [ 2<i>a</i> + (<i>p</i> + <i>q</i> &minus; 1)<i>d</i> ]</div>
     <div>&rArr; <i>S</i><sub><i>p</i>+<i>q</i></sub> = ${frac('<i>p</i> + <i>q</i>', '2')} &times; 0 = <b>0</b> <span class="reason">[using (1)]</span></div>`,
    `<i>S</i><sub><i>p</i>+<i>q</i></sub> = 0`
  ));

  // Q11
  cards.push(qCard(
    11,
    `Sum of the first <i>p</i>, <i>q</i> and <i>r</i> terms of an A.P. are <i>a</i>, <i>b</i> and <i>c</i>, respectively.<br/>
     Prove that: &nbsp; <b>${frac('<i>a</i>', '<i>p</i>')}(<i>q</i> &minus; <i>r</i>) + ${frac('<i>b</i>', '<i>q</i>')}(<i>r</i> &minus; <i>p</i>) + ${frac('<i>c</i>', '<i>r</i>')}(<i>p</i> &minus; <i>q</i>) = 0</b>.`,
    `<div>Let <i>A</i> be the first term and <i>D</i> be the common difference of the A.P.</div>
     <div>• <i>S<sub>p</sub></i> = <i>a</i> &rArr; ${frac('<i>p</i>', '2')}[2<i>A</i> + (<i>p</i> &minus; 1)<i>D</i>] = <i>a</i> &rArr; ${frac('<i>a</i>', '<i>p</i>')} = <i>A</i> + ${frac('<i>p</i> &minus; 1', '2')}<i>D</i> &nbsp; ... (1)</div>
     <div>• <i>S<sub>q</sub></i> = <i>b</i> &rArr; ${frac('<i>b</i>', '<i>q</i>')} = <i>A</i> + ${frac('<i>q</i> &minus; 1', '2')}<i>D</i> &nbsp; ... (2)</div>
     <div>• <i>S<sub>r</sub></i> = <i>c</i> &rArr; ${frac('<i>c</i>', '<i>r</i>')} = <i>A</i> + ${frac('<i>r</i> &minus; 1', '2')}<i>D</i> &nbsp; ... (3)</div>
     <div style="margin-top: 8px;">Multiplying (1) by (<i>q</i> &minus; <i>r</i>), (2) by (<i>r</i> &minus; <i>p</i>), (3) by (<i>p</i> &minus; <i>q</i>) and adding:</div>
     <div>&rArr; L.H.S. = <i>A</i> [ (<i>q</i> &minus; <i>r</i>) + (<i>r</i> &minus; <i>p</i>) + (<i>p</i> &minus; <i>q</i>) ] + ${frac('<i>D</i>', '2')} [ (<i>p</i> &minus; 1)(<i>q</i> &minus; <i>r</i>) + (<i>q</i> &minus; 1)(<i>r</i> &minus; <i>p</i>) + (<i>r</i> &minus; 1)(<i>p</i> &minus; <i>q</i>) ]</div>
     <div>• Sum of coefficients of <i>A</i>: &nbsp; <i>q</i> &minus; <i>r</i> + <i>r</i> &minus; <i>p</i> + <i>p</i> &minus; <i>q</i> = <b>0</b></div>
     <div>• Sum of coefficients of ${frac('<i>D</i>', '2')}:</div>
     <div>&nbsp; [ <i>p</i>(<i>q</i> &minus; <i>r</i>) + <i>q</i>(<i>r</i> &minus; <i>p</i>) + <i>r</i>(<i>p</i> &minus; <i>q</i>) ] &minus; [ (<i>q</i> &minus; <i>r</i>) + (<i>r</i> &minus; <i>p</i>) + (<i>p</i> &minus; <i>q</i>) ]</div>
     <div>&nbsp; = [ <i>pq</i> &minus; <i>pr</i> + <i>qr</i> &minus; <i>pq</i> + <i>pr</i> &minus; <i>qr</i> ] &minus; 0 = <b>0</b></div>
     <div>&rArr; L.H.S. = <i>A</i>(0) + ${frac('<i>D</i>', '2')}(0) = <b>0 = R.H.S.</b></div>`,
    `0 &nbsp; (Hence Proved)`
  ));

  // Q12
  cards.push(qCard(
    12,
    `The ratio of the sums of <i>m</i> and <i>n</i> terms of an A.P. is <b><i>m</i><sup>2</sup> : <i>n</i><sup>2</sup></b>. Show that the ratio of the <i>m</i><sup>th</sup> and the <i>n</i><sup>th</sup> term is <b>(2<i>m</i> &minus; 1) : (2<i>n</i> &minus; 1)</b>.`,
    `<div>Let <i>a</i> be the first term and <i>d</i> be the common difference.</div>
     <div>Given: ${frac('<i>S<sub>m</sub></i>', '<i>S<sub>n</sub></i>')} = ${frac('<i>m</i><sup>2</sup>', '<i>n</i><sup>2</sup>')}</div>
     <div>&rArr; ${frac('<sup><i>m</i></sup>/<sub>2</sub> [2<i>a</i> + (<i>m</i> &minus; 1)<i>d</i>]', '<sup><i>n</i></sup>/<sub>2</sub> [2<i>a</i> + (<i>n</i> &minus; 1)<i>d</i>]')} = ${frac('<i>m</i><sup>2</sup>', '<i>n</i><sup>2</sup>')}</div>
     <div>Dividing by ${frac('<i>m</i>', '<i>n</i>')}:</div>
     <div>&rArr; ${frac('2<i>a</i> + (<i>m</i> &minus; 1)<i>d</i>', '2<i>a</i> + (<i>n</i> &minus; 1)<i>d</i>')} = ${frac('<i>m</i>', '<i>n</i>')} &nbsp; ... (1)</div>
     <div style="margin-top: 8px;">The ratio of the <i>m</i><sup>th</sup> and <i>n</i><sup>th</sup> terms is:</div>
     <div>&rArr; ${frac('<i>T<sub>m</sub></i>', '<i>T<sub>n</sub></i>')} = ${frac('<i>a</i> + (<i>m</i> &minus; 1)<i>d</i>', '<i>a</i> + (<i>n</i> &minus; 1)<i>d</i>')} = ${frac('2<i>a</i> + (2<i>m</i> &minus; 2)<i>d</i>', '2<i>a</i> + (2<i>n</i> &minus; 2)<i>d</i>')}</div>
     <div style="margin-top: 6px;">Substituting <i>m</i> &rarr; 2<i>m</i> &minus; 1 and <i>n</i> &rarr; 2<i>n</i> &minus; 1 in (1):</div>
     <div>&rArr; ${frac('2<i>a</i> + (2<i>m</i> &minus; 1 &minus; 1)<i>d</i>', '2<i>a</i> + (2<i>n</i> &minus; 1 &minus; 1)<i>d</i>')} = ${frac('2<i>m</i> &minus; 1', '2<i>n</i> &minus; 1')}</div>
     <div>&rArr; ${frac('<i>a</i> + (<i>m</i> &minus; 1)<i>d</i>', '<i>a</i> + (<i>n</i> &minus; 1)<i>d</i>')} = <b>${frac('2<i>m</i> &minus; 1', '2<i>n</i> &minus; 1')}</b></div>`,
    `(2<i>m</i> &minus; 1) : (2<i>n</i> &minus; 1) &nbsp; (Hence Proved)`
  ));

  // Q13
  cards.push(qCard(
    13,
    `If the sum of <i>n</i> terms of an A.P. is <b>3<i>n</i><sup>2</sup> + 5<i>n</i></b> and its <i>m</i><sup>th</sup> term is <b>164</b>, find the value of <b><i>m</i></b>.`,
    `<div>Given: <i>S<sub>n</sub></i> = 3<i>n</i><sup>2</sup> + 5<i>n</i></div>
     <div>• <i>S</i><sub>1</sub> = <i>a</i><sub>1</sub> = 3(1)<sup>2</sup> + 5(1) = 8</div>
     <div>• <i>S</i><sub>2</sub> = 3(2)<sup>2</sup> + 5(2) = 12 + 10 = 22</div>
     <div>• <i>a</i><sub>2</sub> = <i>S</i><sub>2</sub> &minus; <i>S</i><sub>1</sub> = 22 &minus; 8 = 14</div>
     <div>• Common difference: <i>d</i> = <i>a</i><sub>2</sub> &minus; <i>a</i><sub>1</sub> = 14 &minus; 8 = <b>6</b></div>
     <div style="margin-top: 8px;">The <i>m</i><sup>th</sup> term is given by:</div>
     <div>&rArr; <i>a<sub>m</sub></i> = <i>a</i> + (<i>m</i> &minus; 1)<i>d</i> = 164</div>
     <div>&rArr; 8 + (<i>m</i> &minus; 1)(6) = 164</div>
     <div>&rArr; 6(<i>m</i> &minus; 1) = 164 &minus; 8 = 156</div>
     <div>&rArr; <i>m</i> &minus; 1 = 26 &rArr; <b><i>m</i> = 27</b></div>`,
    `<i>m</i> = 27`
  ));

  // Q14
  cards.push(qCard(
    14,
    `Insert five numbers between <b>8 and 26</b> such that the resulting sequence is an A.P.`,
    `<div>Let <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, <i>A</i><sub>3</sub>, <i>A</i><sub>4</sub>, <i>A</i><sub>5</sub> be five arithmetic means inserted between 8 and 26.</div>
     <div>The sequence <b>8, <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, <i>A</i><sub>3</sub>, <i>A</i><sub>4</sub>, <i>A</i><sub>5</sub>, 26</b> forms an A.P. with 7 terms:</div>
     <div>• First term: <i>a</i> = 8</div>
     <div>• Total terms: <i>n</i> = 7</div>
     <div>• 7<sup>th</sup> term: <i>a</i><sub>7</sub> = 26</div>
     <div style="margin-top: 6px;">Finding common difference <i>d</i>:</div>
     <div>&rArr; <i>a</i> + 6<i>d</i> = 26 &rArr; 8 + 6<i>d</i> = 26 &rArr; 6<i>d</i> = 18 &rArr; <b><i>d</i> = 3</b></div>
     <div style="margin-top: 8px; color: #FFE082; font-weight: 700;">Calculating the five numbers:</div>
     <div>• <i>A</i><sub>1</sub> = <i>a</i> + <i>d</i> = 8 + 3 = <b>11</b></div>
     <div>• <i>A</i><sub>2</sub> = <i>a</i> + 2<i>d</i> = 8 + 6 = <b>14</b></div>
     <div>• <i>A</i><sub>3</sub> = <i>a</i> + 3<i>d</i> = 8 + 9 = <b>17</b></div>
     <div>• <i>A</i><sub>4</sub> = <i>a</i> + 4<i>d</i> = 8 + 12 = <b>20</b></div>
     <div>• <i>A</i><sub>5</sub> = <i>a</i> + 5<i>d</i> = 8 + 15 = <b>23</b></div>`,
    `11, 14, 17, 20, 23`
  ));

  // Q15
  cards.push(qCard(
    15,
    `If <b>${frac('<i>a<sup>n</sup></i> + <i>b<sup>n</sup></i>', '<i>a</i><sup><i>n</i>&minus;1</sup> + <i>b</i><sup><i>n</i>&minus;1</sup>')}</b> is the A.M. between <i>a</i> and <i>b</i>, then find the value of <b><i>n</i></b>.`,
    `<div>The Arithmetic Mean (A.M.) between <i>a</i> and <i>b</i> is: ${frac('<i>a</i> + <i>b</i>', '2')}</div>
     <div>Equating the given expression to the A.M.:</div>
     <div>&rArr; ${frac('<i>a<sup>n</sup></i> + <i>b<sup>n</sup></i>', '<i>a</i><sup><i>n</i>&minus;1</sup> + <i>b</i><sup><i>n</i>&minus;1</sup>')} = ${frac('<i>a</i> + <i>b</i>', '2')}</div>
     <div>Cross-multiplying:</div>
     <div>&rArr; 2(<i>a<sup>n</sup></i> + <i>b<sup>n</sup></i>) = (<i>a</i> + <i>b</i>)(<i>a</i><sup><i>n</i>&minus;1</sup> + <i>b</i><sup><i>n</i>&minus;1</sup>)</div>
     <div>&rArr; 2<i>a<sup>n</sup></i> + 2<i>b<sup>n</sup></i> = <i>a<sup>n</sup></i> + <i>ab</i><sup><i>n</i>&minus;1</sup> + <i>a</i><sup><i>n</i>&minus;1</sup><i>b</i> + <i>b<sup>n</sup></i></div>
     <div>&rArr; <i>a<sup>n</sup></i> + <i>b<sup>n</sup></i> &minus; <i>ab</i><sup><i>n</i>&minus;1</sup> &minus; <i>a</i><sup><i>n</i>&minus;1</sup><i>b</i> = 0</div>
     <div>&rArr; <i>a</i><sup><i>n</i>&minus;1</sup>(<i>a</i> &minus; <i>b</i>) &minus; <i>b</i><sup><i>n</i>&minus;1</sup>(<i>a</i> &minus; <i>b</i>) = 0</div>
     <div>&rArr; (<i>a</i> &minus; <i>b</i>)(<i>a</i><sup><i>n</i>&minus;1</sup> &minus; <i>b</i><sup><i>n</i>&minus;1</sup>) = 0</div>
     <div>Since <i>a</i> &ne; <i>b</i>, we divide by (<i>a</i> &minus; <i>b</i>):</div>
     <div>&rArr; <i>a</i><sup><i>n</i>&minus;1</sup> = <i>b</i><sup><i>n</i>&minus;1</sup> &rArr; (${frac('<i>a</i>', '<i>b</i>')})<sup><i>n</i>&minus;1</sup> = 1 = (${frac('<i>a</i>', '<i>b</i>')})<sup>0</sup></div>
     <div>Equating exponents:</div>
     <div>&rArr; <i>n</i> &minus; 1 = 0 &rArr; <b><i>n</i> = 1</b></div>`,
    `<i>n</i> = 1`
  ));

  // Q16
  cards.push(qCard(
    16,
    `Between <b>1 and 31</b>, <i>m</i> numbers have been inserted in such a way that the resulting sequence is an A.P. and the ratio of <b>7<sup>th</sup> and (<i>m</i> &minus; 1)<sup>th</sup> numbers is 5 : 9</b>. Find the value of <b><i>m</i></b>.`,
    `<div>Let the inserted numbers be <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, ..., <i>A<sub>m</sub></i> between 1 and 31.</div>
     <div>The sequence 1, <i>A</i><sub>1</sub>, ..., <i>A<sub>m</sub></i>, 31 has total terms <i>N</i> = <i>m</i> + 2:</div>
     <div>• First term: <i>a</i> = 1, Last term: <i>l</i> = 31</div>
     <div>&rArr; 31 = 1 + (<i>m</i> + 2 &minus; 1)<i>d</i> = 1 + (<i>m</i> + 1)<i>d</i></div>
     <div>&rArr; <b><i>d</i> = ${frac('30', '<i>m</i> + 1')}</b> &nbsp; ... (1)</div>
     <div style="margin-top: 8px;">Finding the 7<sup>th</sup> and (<i>m</i> &minus; 1)<sup>th</sup> inserted numbers:</div>
     <div>• <i>A</i><sub>7</sub> = <i>a</i> + 7<i>d</i> = 1 + 7(${frac('30', '<i>m</i> + 1')}) = ${frac('<i>m</i> + 1 + 210', '<i>m</i> + 1')} = ${frac('<i>m</i> + 211', '<i>m</i> + 1')}</div>
     <div>• <i>A</i><sub><i>m</i>&minus;1</sub> = <i>a</i> + (<i>m</i> &minus; 1)<i>d</i> = 1 + (<i>m</i> &minus; 1)(${frac('30', '<i>m</i> + 1')}) = ${frac('<i>m</i> + 1 + 30<i>m</i> &minus; 30', '<i>m</i> + 1')} = ${frac('31<i>m</i> &minus; 29', '<i>m</i> + 1')}</div>
     <div style="margin-top: 8px;">Given ratio ${frac('<i>A</i><sub>7</sub>', '<i>A</i><sub><i>m</i>&minus;1</sub>')} = ${frac('5', '9')}:</div>
     <div>&rArr; ${frac('<i>m</i> + 211', '31<i>m</i> &minus; 29')} = ${frac('5', '9')}</div>
     <div>&rArr; 9(<i>m</i> + 211) = 5(31<i>m</i> &minus; 29)</div>
     <div>&rArr; 9<i>m</i> + 1899 = 155<i>m</i> &minus; 145</div>
     <div>&rArr; 155<i>m</i> &minus; 9<i>m</i> = 1899 + 145 &rArr; 146<i>m</i> = 2044 &rArr; <b><i>m</i> = 14</b></div>`,
    `<i>m</i> = 14`
  ));

  // Q17
  cards.push(qCard(
    17,
    `A man starts repaying a loan as the first instalment of <b>Rs. 100</b>. If he increases the instalment by <b>Rs. 5 every month</b>, what amount will he pay in the <b>30<sup>th</sup> instalment</b>?`,
    `<div>The monthly instalments form an A.P.: 100, 105, 110, ...</div>
     <div>• First term: <i>a</i> = 100</div>
     <div>• Common difference: <i>d</i> = 5</div>
     <div>• Instalment number: <i>n</i> = 30</div>
     <div style="margin-top: 8px;">Finding the 30<sup>th</sup> term (<i>a</i><sub>30</sub>):</div>
     <div>&rArr; <i>a</i><sub>30</sub> = <i>a</i> + (30 &minus; 1)<i>d</i></div>
     <div>&rArr; <i>a</i><sub>30</sub> = 100 + 29(5) = 100 + 145 = <b>245</b></div>
     <div style="margin-top: 6px;">Therefore, the amount paid in the 30<sup>th</sup> instalment is <b>Rs. 245</b>.</div>`,
    `Rs. 245`
  ));

  // Q18
  cards.push(qCard(
    18,
    `The difference between any two consecutive interior angles of a polygon is <b>5&deg;</b>. If the smallest angle is <b>120&deg;</b>, find the <b>number of sides</b> of the polygon.`,
    `<div>Let the number of sides of the polygon be <i>n</i>.</div>
     <div>The interior angles form an A.P. where:</div>
     <div>• Smallest angle (first term): <i>a</i> = 120&deg;</div>
     <div>• Common difference: <i>d</i> = 5&deg;</div>
     <div>The sum of interior angles of an <i>n</i>-sided polygon is: <b><i>S<sub>n</sub></i> = (<i>n</i> &minus; 2) &times; 180&deg;</b></div>
     <div style="margin-top: 8px;">Using the A.P. sum formula:</div>
     <div>&rArr; ${frac('<i>n</i>', '2')} [ 2(120) + (<i>n</i> &minus; 1)(5) ] = 180(<i>n</i> &minus; 2)</div>
     <div>&rArr; <i>n</i> (240 + 5<i>n</i> &minus; 5) = 360(<i>n</i> &minus; 2)</div>
     <div>&rArr; <i>n</i> (5<i>n</i> + 235) = 360<i>n</i> &minus; 720</div>
     <div>&rArr; 5<i>n</i><sup>2</sup> + 235<i>n</i> &minus; 360<i>n</i> + 720 = 0</div>
     <div>&rArr; 5<i>n</i><sup>2</sup> &minus; 125<i>n</i> + 720 = 0</div>
     <div>Dividing by 5:</div>
     <div>&rArr; <i>n</i><sup>2</sup> &minus; 25<i>n</i> + 144 = 0</div>
     <div>&rArr; (<i>n</i> &minus; 9)(<i>n</i> &minus; 16) = 0 &rArr; <b><i>n</i> = 9</b> &nbsp; or &nbsp; <b><i>n</i> = 16</b></div>
     <div style="margin-top: 8px; color: #FFE082; font-weight: 700;">Verification of geometric validity:</div>
     <div>• For <i>n</i> = 16: &nbsp; <i>a</i><sub>16</sub> = 120&deg; + 15(5&deg;) = 120&deg; + 75&deg; = 195&deg; &gt; 180&deg;, which is impossible for a convex polygon.</div>
     <div>• For <i>n</i> = 9: &nbsp; <i>a</i><sub>9</sub> = 120&deg; + 8(5&deg;) = 160&deg; &lt; 180&deg; (valid).</div>
     <div>Therefore, <b><i>n</i> = 9</b>.</div>`,
    `<i>n</i> = 9 sides`
  ));

  const banner = makeBanner("Exercise 8.2", "Arithmetic Progressions (A.P.), Sum of Terms & Arithmetic Mean");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx82 };
