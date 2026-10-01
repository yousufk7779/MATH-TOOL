const { styleBlock, frac, makeBanner, qCard } = require('./ch8_common');

function generateEx83() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Find the 20<sup>th</sup> and <i>n</i><sup>th</sup> terms of the G.P.: &nbsp; <b>${frac('5', '2')}, ${frac('5', '4')}, ${frac('5', '8')}, ...</b>`,
    `<div>Given G.P.: ${frac('5', '2')}, ${frac('5', '4')}, ${frac('5', '8')}, ...</div>
     <div>• First term: <i>a</i> = ${frac('5', '2')}</div>
     <div>• Common ratio: <i>r</i> = ${frac('5/4', '5/2')} = ${frac('5', '4')} &times; ${frac('2', '5')} = <b>${frac('1', '2')}</b></div>
     <div style="margin-top: 8px;">Finding 20<sup>th</sup> term (<i>a</i><sub>20</sub>):</div>
     <div>&rArr; <i>a</i><sub>20</sub> = <i>a</i> &times; <i>r</i><sup>19</sup> = (${frac('5', '2')})(${frac('1', '2')})<sup>19</sup> = ${frac('5', '2 &times; 2<sup>19</sup>')} = <b>${frac('5', '2<sup>20</sup>')}</b></div>
     <div style="margin-top: 8px;">Finding <i>n</i><sup>th</sup> term (<i>a<sub>n</sub></i>):</div>
     <div>&rArr; <i>a<sub>n</sub></i> = <i>a</i> &times; <i>r</i><sup><i>n</i>&minus;1</sup> = (${frac('5', '2')})(${frac('1', '2')})<sup><i>n</i>&minus;1</sup> = ${frac('5', '2 &times; 2<sup><i>n</i>&minus;1</sup>')} = <b>${frac('5', '2<sup><i>n</i></sup>')}</b></div>`,
    `<i>a</i><sub>20</sub> = ${frac('5', '2<sup>20</sup>')}, &nbsp; <i>a<sub>n</sub></i> = ${frac('5', '2<sup><i>n</i></sup>')}`
  ));

  // Q2
  cards.push(qCard(
    2,
    `Find the 12<sup>th</sup> term of a G.P. whose <b>8<sup>th</sup> term is 192</b>, and the <b>common ratio is 2</b>.`,
    `<div>Given: <i>r</i> = 2, and <i>a</i><sub>8</sub> = 192</div>
     <div>• <i>a</i><sub>8</sub> = <i>a</i> &times; <i>r</i><sup>7</sup> = 192</div>
     <div>&rArr; <i>a</i> &times; 2<sup>7</sup> = 192 &rArr; <i>a</i> &times; 128 = 192</div>
     <div>&rArr; <i>a</i> = ${frac('192', '128')} = <b>${frac('3', '2')}</b></div>
     <div style="margin-top: 8px;">Finding 12<sup>th</sup> term (<i>a</i><sub>12</sub>):</div>
     <div>&rArr; <i>a</i><sub>12</sub> = <i>a</i> &times; <i>r</i><sup>11</sup> = (${frac('3', '2')}) &times; 2<sup>11</sup> = 3 &times; 2<sup>10</sup> = 3 &times; 1024 = <b>3072</b></div>`,
    `<i>a</i><sub>12</sub> = 3072`
  ));

  // Q3
  cards.push(qCard(
    3,
    `The 5<sup>th</sup>, 8<sup>th</sup> and 11<sup>th</sup> terms of a G.P. are <b><i>p</i>, <i>q</i> and <i>s</i></b>, respectively. Show that <b><i>q</i><sup>2</sup> = <i>ps</i></b>.`,
    `<div>Let <i>a</i> be the first term and <i>r</i> be the common ratio of the G.P.</div>
     <div>• <i>a</i><sub>5</sub> = <i>ar</i><sup>4</sup> = <i>p</i> &nbsp; ... (1)</div>
     <div>• <i>a</i><sub>8</sub> = <i>ar</i><sup>7</sup> = <i>q</i> &nbsp; ... (2)</div>
     <div>• <i>a</i><sub>11</sub> = <i>ar</i><sup>10</sup> = <i>s</i> &nbsp; ... (3)</div>
     <div style="margin-top: 8px;">Dividing (2) by (1): &nbsp; ${frac('<i>ar</i><sup>7</sup>', '<i>ar</i><sup>4</sup>')} = ${frac('<i>q</i>', '<i>p</i>')} &rArr; <b><i>r</i><sup>3</sup> = ${frac('<i>q</i>', '<i>p</i>')}</b></div>
     <div>Dividing (3) by (2): &nbsp; ${frac('<i>ar</i><sup>10</sup>', '<i>ar</i><sup>7</sup>')} = ${frac('<i>s</i>', '<i>q</i>')} &rArr; <b><i>r</i><sup>3</sup> = ${frac('<i>s</i>', '<i>q</i>')}</b></div>
     <div style="margin-top: 8px;">Equating the two values of <i>r</i><sup>3</sup>:</div>
     <div>&rArr; ${frac('<i>q</i>', '<i>p</i>')} = ${frac('<i>s</i>', '<i>q</i>')} &rArr; <b><i>q</i><sup>2</sup> = <i>ps</i></b></div>`,
    `<i>q</i><sup>2</sup> = <i>ps</i> &nbsp; (Hence Proved)`
  ));

  // Q4
  cards.push(qCard(
    4,
    `The 4<sup>th</sup> term of a G.P. is the <b>square of its second term</b>, and the first term is <b>&minus;3</b>. Determine its <b>7<sup>th</sup> term</b>.`,
    `<div>Given: First term <i>a</i> = &minus;3. Let common ratio be <i>r</i>.</div>
     <div>• <i>a</i><sub>4</sub> = <i>ar</i><sup>3</sup> = (&minus;3)<i>r</i><sup>3</sup></div>
     <div>• <i>a</i><sub>2</sub> = <i>ar</i> = (&minus;3)<i>r</i></div>
     <div style="margin-top: 6px;">Given condition: <i>a</i><sub>4</sub> = (<i>a</i><sub>2</sub>)<sup>2</sup></div>
     <div>&rArr; (&minus;3)<i>r</i><sup>3</sup> = [ (&minus;3)<i>r</i> ]<sup>2</sup></div>
     <div>&rArr; &minus;3<i>r</i><sup>3</sup> = 9<i>r</i><sup>2</sup></div>
     <div>Dividing by &minus;3<i>r</i><sup>2</sup> (since <i>r</i> &ne; 0):</div>
     <div>&rArr; <b><i>r</i> = &minus;3</b></div>
     <div style="margin-top: 8px;">Finding 7<sup>th</sup> term (<i>a</i><sub>7</sub>):</div>
     <div>&rArr; <i>a</i><sub>7</sub> = <i>ar</i><sup>6</sup> = (&minus;3) &times; (&minus;3)<sup>6</sup> = &minus;(3)<sup>7</sup> = <b>&minus;2187</b></div>`,
    `<i>a</i><sub>7</sub> = &minus;2187`
  ));

  // Q5
  cards.push(qCard(
    5,
    `Which term of the following sequences:<br/>
     <b>(a)</b> 2, 2&radic;2, 4, ... is <b>128</b>?<br/>
     <b>(b)</b> &radic;3, 3, 3&radic;3, ... is <b>729</b>?<br/>
     <b>(c)</b> ${frac('1', '3')}, ${frac('1', '9')}, ${frac('1', '27')}, ...$ is <b>${frac('1', '19683')}</b>?`,
    `<div><b>Part (a):</b> 2, 2&radic;2, 4, ...</div>
     <div>• <i>a</i> = 2, &nbsp; <i>r</i> = ${frac('2&radic;2', '2')} = &radic;2</div>
     <div>&rArr; <i>a<sub>n</sub></i> = <i>ar</i><sup><i>n</i>&minus;1</sup> = 2(&radic;2)<sup><i>n</i>&minus;1</sup> = 128</div>
     <div>&rArr; (&radic;2)<sup><i>n</i>&minus;1</sup> = 64 = 2<sup>6</sup> = (&radic;2)<sup>12</sup> &rArr; <i>n</i> &minus; 1 = 12 &rArr; <b><i>n</i> = 13</b></div>
     <div style="margin-top: 8px;"><b>Part (b):</b> &radic;3, 3, 3&radic;3, ...</div>
     <div>• <i>a</i> = &radic;3, &nbsp; <i>r</i> = ${frac('3', '&radic;3')} = &radic;3</div>
     <div>&rArr; <i>a<sub>n</sub></i> = (&radic;3)(&radic;3)<sup><i>n</i>&minus;1</sup> = (&radic;3)<sup><i>n</i></sup> = 729</div>
     <div>&rArr; (3)<sup><i>n</i>/2</sup> = 3<sup>6</sup> &rArr; ${frac('<i>n</i>', '2')} = 6 &rArr; <b><i>n</i> = 12</b></div>
     <div style="margin-top: 8px;"><b>Part (c):</b> ${frac('1', '3')}, ${frac('1', '9')}, ${frac('1', '27')}, ...</div>
     <div>• <i>a</i> = ${frac('1', '3')}, &nbsp; <i>r</i> = ${frac('1', '3')}</div>
     <div>&rArr; <i>a<sub>n</sub></i> = (${frac('1', '3')})<sup><i>n</i></sup> = ${frac('1', '19683')} = (${frac('1', '3')})<sup>9</sup> &rArr; <b><i>n</i> = 9</b></div>`,
    `(a) 13<sup>th</sup> term, &nbsp; (b) 12<sup>th</sup> term, &nbsp; (c) 9<sup>th</sup> term`
  ));

  // Q6
  cards.push(qCard(
    6,
    `For what values of <i>x</i>, the numbers <b>&minus;${frac('2', '7')}, <i>x</i>, &minus;${frac('7', '2')}</b> are in G.P.?`,
    `<div>Three numbers <i>a</i>, <i>b</i>, <i>c</i> are in G.P. if and only if <b><i>b</i><sup>2</sup> = <i>ac</i></b>.</div>
     <div>Here, <i>a</i> = &minus;${frac('2', '7')}, &nbsp; <i>b</i> = <i>x</i>, &nbsp; <i>c</i> = &minus;${frac('7', '2')}</div>
     <div>&rArr; <i>x</i><sup>2</sup> = (&minus;${frac('2', '7')}) &times; (&minus;${frac('7', '2')})</div>
     <div>&rArr; <i>x</i><sup>2</sup> = 1</div>
     <div>&rArr; <b><i>x</i> = &plusmn;1</b></div>`,
    `<i>x</i> = &plusmn;1`
  ));

  // Q7
  cards.push(qCard(
    7,
    `Find the sum to <b>20 terms</b> in the geometric progression: &nbsp; <b>0.15, 0.015, 0.0015, ...</b>`,
    `<div>Given G.P.: 0.15, 0.015, 0.0015, ...</div>
     <div>• First term: <i>a</i> = 0.15 = ${frac('15', '100')} = ${frac('3', '20')}</div>
     <div>• Common ratio: <i>r</i> = ${frac('0.015', '0.15')} = 0.1 = ${frac('1', '10')} &lt; 1</div>
     <div style="margin-top: 8px;">Applying sum formula <i>S<sub>n</sub></i> = ${frac('<i>a</i>(1 &minus; <i>r<sup>n</sup></i>)', '1 &minus; <i>r</i>')}:</div>
     <div>&rArr; <i>S</i><sub>20</sub> = ${frac('0.15 [1 &minus; (0.1)<sup>20</sup>]', '1 &minus; 0.1')} = ${frac('0.15', '0.9')} [1 &minus; (0.1)<sup>20</sup>]</div>
     <div>&rArr; <i>S</i><sub>20</sub> = ${frac('15', '90')} [1 &minus; (0.1)<sup>20</sup>] = <b>${frac('1', '6')} [1 &minus; (0.1)<sup>20</sup>]</b></div>`,
    `${frac('1', '6')} [1 &minus; (0.1)<sup>20</sup>]`
  ));

  // Q8
  cards.push(qCard(
    8,
    `Find the sum to <i>n</i> terms in the geometric progression: &nbsp; <b>&radic;7, &radic;21, 3&radic;7, ...</b>`,
    `<div>Given G.P.: &radic;7, &radic;21, 3&radic;7, ...</div>
     <div>• First term: <i>a</i> = &radic;7</div>
     <div>• Common ratio: <i>r</i> = ${frac('&radic;21', '&radic;7')} = &radic;3 &gt; 1</div>
     <div style="margin-top: 8px;">Using sum formula <i>S<sub>n</sub></i> = ${frac('<i>a</i>(<i>r<sup>n</sup></i> &minus; 1)', '<i>r</i> &minus; 1')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('&radic;7 [(&radic;3)<sup><i>n</i></sup> &minus; 1]', '&radic;3 &minus; 1')}</div>
     <div>Rationalizing the denominator by multiplying numerator and denominator by (&radic;3 + 1):</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('&radic;7 (&radic;3 + 1) [3<sup><i>n</i>/2</sup> &minus; 1]', '(&radic;3 &minus; 1)(&radic;3 + 1)')} = <b>${frac('&radic;7 (&radic;3 + 1)', '2')} [3<sup><i>n</i>/2</sup> &minus; 1]</b></div>`,
    `${frac('&radic;7 (&radic;3 + 1)', '2')} [3<sup><i>n</i>/2</sup> &minus; 1]`
  ));

  // Q9
  cards.push(qCard(
    9,
    `Find the sum to <i>n</i> terms in the geometric progression: &nbsp; <b>1, &minus;<i>a</i>, <i>a</i><sup>2</sup>, &minus;<i>a</i><sup>3</sup>, ... (if <i>a</i> &ne; &minus;1)</b>.`,
    `<div>Given G.P.: 1, &minus;<i>a</i>, <i>a</i><sup>2</sup>, &minus;<i>a</i><sup>3</sup>, ...</div>
     <div>• First term: <i>a</i><sub>1</sub> = 1</div>
     <div>• Common ratio: <i>r</i> = ${frac('&minus;<i>a</i>', '1')} = &minus;<i>a</i></div>
     <div style="margin-top: 8px;">Using sum formula <i>S<sub>n</sub></i> = ${frac('<i>a</i><sub>1</sub>(1 &minus; <i>r<sup>n</sup></i>)', '1 &minus; <i>r</i>')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('1 [1 &minus; (&minus;<i>a</i>)<sup><i>n</i></sup>]', '1 &minus; (&minus;<i>a</i>)')} = <b>${frac('1 &minus; (&minus;<i>a</i>)<sup><i>n</i></sup>', '1 + <i>a</i>')}</b></div>`,
    `${frac('1 &minus; (&minus;<i>a</i>)<sup><i>n</i></sup>', '1 + <i>a</i>')}`
  ));

  // Q10
  cards.push(qCard(
    10,
    `Find the sum to <i>n</i> terms in the geometric progression: &nbsp; <b><i>x</i><sup>3</sup>, <i>x</i><sup>5</sup>, <i>x</i><sup>7</sup>, ... (if <i>x</i> &ne; &plusmn;1)</b>.`,
    `<div>Given G.P.: <i>x</i><sup>3</sup>, <i>x</i><sup>5</sup>, <i>x</i><sup>7</sup>, ...</div>
     <div>• First term: <i>a</i> = <i>x</i><sup>3</sup></div>
     <div>• Common ratio: <i>r</i> = ${frac('<i>x</i><sup>5</sup>', '<i>x</i><sup>3</sup>')} = <i>x</i><sup>2</sup></div>
     <div style="margin-top: 8px;">Using sum formula <i>S<sub>n</sub></i> = ${frac('<i>a</i>(1 &minus; <i>r<sup>n</sup></i>)', '1 &minus; <i>r</i>')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>x</i><sup>3</sup> [1 &minus; (<i>x</i><sup>2</sup>)<sup><i>n</i></sup>]', '1 &minus; <i>x</i><sup>2</sup>')} = <b>${frac('<i>x</i><sup>3</sup> (1 &minus; <i>x</i><sup>2<i>n</i></sup>)', '1 &minus; <i>x</i><sup>2</sup>')}</b></div>`,
    `${frac('<i>x</i><sup>3</sup> (1 &minus; <i>x</i><sup>2<i>n</i></sup>)', '1 &minus; <i>x</i><sup>2</sup>')}`
  ));

  // Q11
  cards.push(qCard(
    11,
    `Evaluate: &nbsp; <b>&sum;<sub><i>k</i>=1</sub><sup>11</sup> (2 + 3<sup><i>k</i></sup>)</b>.`,
    `<div>Splitting the summation into two distinct parts:</div>
     <div>&rArr; &sum;<sub><i>k</i>=1</sub><sup>11</sup> (2 + 3<sup><i>k</i></sup>) = &sum;<sub><i>k</i>=1</sub><sup>11</sup> 2 + &sum;<sub><i>k</i>=1</sub><sup>11</sup> 3<sup><i>k</i></sup></div>
     <div>• First part: &sum;<sub><i>k</i>=1</sub><sup>11</sup> 2 = 2 &times; 11 = <b>22</b></div>
     <div>• Second part: &sum;<sub><i>k</i>=1</sub><sup>11</sup> 3<sup><i>k</i></sup> = 3<sup>1</sup> + 3<sup>2</sup> + 3<sup>3</sup> + ... + 3<sup>11</sup></div>
     <div style="margin-left: 10px;">This is a G.P. with <i>a</i> = 3, <i>r</i> = 3, <i>n</i> = 11:</div>
     <div style="margin-left: 10px;">&rArr; <i>S</i><sub>11</sub> = ${frac('3(3<sup>11</sup> &minus; 1)', '3 &minus; 1')} = ${frac('3', '2')}(3<sup>11</sup> &minus; 1)</div>
     <div style="margin-top: 8px;">Combining both parts:</div>
     <div>&rArr; Sum = <b>22 + ${frac('3', '2')}(3<sup>11</sup> &minus; 1)</b></div>`,
    `22 + ${frac('3', '2')}(3<sup>11</sup> &minus; 1)`
  ));

  // Q12
  cards.push(qCard(
    12,
    `The sum of the first three terms of a G.P. is <b>${frac('39', '10')}</b>, and their product is <b>1</b>. Find the common ratio and the terms.`,
    `<div>Let the first three terms of the G.P. be ${frac('<i>a</i>', '<i>r</i>')}, <i>a</i>, <i>ar</i>.</div>
     <div>1. Product of the terms:</div>
     <div>&rArr; (${frac('<i>a</i>', '<i>r</i>')}) &times; <i>a</i> &times; (<i>ar</i>) = 1 &rArr; <i>a</i><sup>3</sup> = 1 &rArr; <b><i>a</i> = 1</b></div>
     <div style="margin-top: 6px;">2. Sum of the terms:</div>
     <div>&rArr; ${frac('1', '<i>r</i>')} + 1 + <i>r</i> = ${frac('39', '10')}</div>
     <div>&rArr; ${frac('1 + <i>r</i> + <i>r</i><sup>2</sup>', '<i>r</i>')} = ${frac('39', '10')}</div>
     <div>&rArr; 10(1 + <i>r</i> + <i>r</i><sup>2</sup>) = 39<i>r</i></div>
     <div>&rArr; 10<i>r</i><sup>2</sup> &minus; 29<i>r</i> + 10 = 0</div>
     <div>&rArr; 10<i>r</i><sup>2</sup> &minus; 25<i>r</i> &minus; 4<i>r</i> + 10 = 0</div>
     <div>&rArr; 5<i>r</i>(2<i>r</i> &minus; 5) &minus; 2(2<i>r</i> &minus; 5) = 0</div>
     <div>&rArr; (2<i>r</i> &minus; 5)(5<i>r</i> &minus; 2) = 0 &rArr; <b><i>r</i> = ${frac('5', '2')}</b> &nbsp; or &nbsp; <b><i>r</i> = ${frac('2', '5')}</b></div>
     <div style="margin-top: 8px; color: #FFE082; font-weight: 700;">Finding the terms:</div>
     <div>• If <i>r</i> = ${frac('5', '2')}: terms are ${frac('1', '5/2')}, 1, 1(${frac('5', '2')}) &rArr; <b>${frac('2', '5')}, 1, ${frac('5', '2')}</b></div>
     <div>• If <i>r</i> = ${frac('2', '5')}: terms are ${frac('1', '2/5')}, 1, 1(${frac('2', '5')}) &rArr; <b>${frac('5', '2')}, 1, ${frac('2', '5')}</b></div>`,
    `<i>r</i> = ${frac('5', '2')} or ${frac('2', '5')} &nbsp;|&nbsp; Terms: ${frac('2', '5')}, 1, ${frac('5', '2')}`
  ));

  // Q13
  cards.push(qCard(
    13,
    `How many terms of G.P. <b>3, 3<sup>2</sup>, 3<sup>3</sup>, ...</b> are needed to give the sum <b>120</b>?`,
    `<div>Given G.P.: 3, 3<sup>2</sup>, 3<sup>3</sup>, ...</div>
     <div>• First term: <i>a</i> = 3</div>
     <div>• Common ratio: <i>r</i> = 3 &gt; 1</div>
     <div>• Sum: <i>S<sub>n</sub></i> = 120</div>
     <div style="margin-top: 8px;">Using sum formula <i>S<sub>n</sub></i> = ${frac('<i>a</i>(<i>r<sup>n</sup></i> &minus; 1)', '<i>r</i> &minus; 1')}:</div>
     <div>&rArr; 120 = ${frac('3(3<sup><i>n</i></sup> &minus; 1)', '3 &minus; 1')} = ${frac('3(3<sup><i>n</i></sup> &minus; 1)', '2')}</div>
     <div>&rArr; 120 &times; 2 = 3(3<sup><i>n</i></sup> &minus; 1)</div>
     <div>&rArr; 240 = 3(3<sup><i>n</i></sup> &minus; 1) &rArr; 3<sup><i>n</i></sup> &minus; 1 = 80</div>
     <div>&rArr; 3<sup><i>n</i></sup> = 81 = 3<sup>4</sup> &rArr; <b><i>n</i> = 4</b></div>`,
    `<i>n</i> = 4 terms`
  ));

  // Q14
  cards.push(qCard(
    14,
    `The sum of the first three terms of a G.P. is <b>16</b>, and the sum of the next three terms is <b>128</b>. Determine the first term, the common ratio and the sum to <i>n</i> terms of the G.P.`,
    `<div>Let the G.P. be <i>a</i>, <i>ar</i>, <i>ar</i><sup>2</sup>, <i>ar</i><sup>3</sup>, ...</div>
     <div>• Sum of first 3 terms: &nbsp; <i>a</i> + <i>ar</i> + <i>ar</i><sup>2</sup> = 16 &rArr; <i>a</i>(1 + <i>r</i> + <i>r</i><sup>2</sup>) = 16 &nbsp; ... (1)</div>
     <div>• Sum of next 3 terms: &nbsp; <i>ar</i><sup>3</sup> + <i>ar</i><sup>4</sup> + <i>ar</i><sup>5</sup> = 128 &rArr; <i>ar</i><sup>3</sup>(1 + <i>r</i> + <i>r</i><sup>2</sup>) = 128 &nbsp; ... (2)</div>
     <div style="margin-top: 8px;">Dividing (2) by (1):</div>
     <div>&rArr; ${frac('<i>ar</i><sup>3</sup>(1 + <i>r</i> + <i>r</i><sup>2</sup>)', '<i>a</i>(1 + <i>r</i> + <i>r</i><sup>2</sup>)')} = ${frac('128', '16')}</div>
     <div>&rArr; <i>r</i><sup>3</sup> = 8 = 2<sup>3</sup> &rArr; <b><i>r</i> = 2</b></div>
     <div style="margin-top: 6px;">Substituting <i>r</i> = 2 into (1):</div>
     <div>&rArr; <i>a</i>(1 + 2 + 4) = 16 &rArr; 7<i>a</i> = 16 &rArr; <b><i>a</i> = ${frac('16', '7')}</b></div>
     <div style="margin-top: 8px;">Finding the sum to <i>n</i> terms:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>a</i>(<i>r<sup>n</sup></i> &minus; 1)', '<i>r</i> &minus; 1')} = ${frac('<sup>16</sup>/<sub>7</sub> (2<sup><i>n</i></sup> &minus; 1)', '2 &minus; 1')} = <b>${frac('16', '7')}(2<sup><i>n</i></sup> &minus; 1)</b></div>`,
    `<i>a</i> = ${frac('16', '7')}, &nbsp; <i>r</i> = 2, &nbsp; <i>S<sub>n</sub></i> = ${frac('16', '7')}(2<sup><i>n</i></sup> &minus; 1)`
  ));

  // Q15
  cards.push(qCard(
    15,
    `Given a G.P. with <b><i>a</i> = 729</b> and <b>7<sup>th</sup> term 64</b>, determine <b><i>S</i><sub>7</sub></b>.`,
    `<div>Given: <i>a</i> = 729 and <i>a</i><sub>7</sub> = 64</div>
     <div>• <i>a</i><sub>7</sub> = <i>ar</i><sup>6</sup> = 64</div>
     <div>&rArr; 729<i>r</i><sup>6</sup> = 64 &rArr; <i>r</i><sup>6</sup> = ${frac('64', '729')} = (${frac('2', '3')})<sup>6</sup> &rArr; <b><i>r</i> = ${frac('2', '3')}</b></div>
     <div style="margin-top: 8px;">Finding <i>S</i><sub>7</sub> using <i>S<sub>n</sub></i> = ${frac('<i>a</i>(1 &minus; <i>r<sup>n</sup></i>)', '1 &minus; <i>r</i>')}:</div>
     <div>&rArr; <i>S</i><sub>7</sub> = ${frac('729 [1 &minus; (2/3)<sup>7</sup>]', '1 &minus; 2/3')} = ${frac('729', '1/3')} [ 1 &minus; ${frac('128', '2187')} ]</div>
     <div>&rArr; <i>S</i><sub>7</sub> = 3 &times; 729 &times; [ ${frac('2187 &minus; 128', '2187')} ] = 2187 &times; ${frac('2059', '2187')} = <b>2059</b></div>`,
    `<i>S</i><sub>7</sub> = 2059`
  ));

  // Q16
  cards.push(qCard(
    16,
    `Find a G.P. for which the <b>sum of the first two terms is &minus;4</b> and the <b>fifth term is 4 times the third term</b>.`,
    `<div>Let the first term be <i>a</i> and the common ratio be <i>r</i>.</div>
     <div>1. Sum of first two terms: &nbsp; <i>S</i><sub>2</sub> = <i>a</i> + <i>ar</i> = <i>a</i>(1 + <i>r</i>) = &minus;4 &nbsp; ... (1)</div>
     <div>2. Fifth term is 4 times third term: &nbsp; <i>a</i><sub>5</sub> = 4<i>a</i><sub>3</sub></div>
     <div>&rArr; <i>ar</i><sup>4</sup> = 4<i>ar</i><sup>2</sup> &rArr; <i>r</i><sup>2</sup> = 4 &rArr; <b><i>r</i> = &plusmn;2</b></div>
     <div style="margin-top: 8px; color: #FFE082; font-weight: 700;">Case I: When <i>r</i> = 2:</div>
     <div>&rArr; <i>a</i>(1 + 2) = &minus;4 &rArr; 3<i>a</i> = &minus;4 &rArr; <b><i>a</i> = &minus;${frac('4', '3')}</b></div>
     <div>Sequence: <b>&minus;${frac('4', '3')}, &minus;${frac('8', '3')}, &minus;${frac('16', '3')}, ...</b></div>
     <div style="margin-top: 8px; color: #FFE082; font-weight: 700;">Case II: When <i>r</i> = &minus;2:</div>
     <div>&rArr; <i>a</i>(1 &minus; 2) = &minus;4 &rArr; &minus;<i>a</i> = &minus;4 &rArr; <b><i>a</i> = 4</b></div>
     <div>Sequence: <b>4, &minus;8, 16, &minus;32, ...</b></div>`,
    `&minus;${frac('4', '3')}, &minus;${frac('8', '3')}, &minus;${frac('16', '3')}, ... &nbsp; OR &nbsp; 4, &minus;8, 16, &minus;32, ...`
  ));

  // Q17
  cards.push(qCard(
    17,
    `If the 4<sup>th</sup>, 10<sup>th</sup> and 16<sup>th</sup> terms of a G.P. are <b><i>x</i>, <i>y</i> and <i>z</i></b>, respectively, prove that <b><i>x</i>, <i>y</i>, <i>z</i> are in G.P.</b>`,
    `<div>Let <i>a</i> be the first term and <i>r</i> be the common ratio.</div>
     <div>• <i>a</i><sub>4</sub> = <i>ar</i><sup>3</sup> = <i>x</i> &nbsp; ... (1)</div>
     <div>• <i>a</i><sub>10</sub> = <i>ar</i><sup>9</sup> = <i>y</i> &nbsp; ... (2)</div>
     <div>• <i>a</i><sub>16</sub> = <i>ar</i><sup>15</sup> = <i>z</i> &nbsp; ... (3)</div>
     <div style="margin-top: 8px;">Dividing (2) by (1): &nbsp; ${frac('<i>y</i>', '<i>x</i>')} = ${frac('<i>ar</i><sup>9</sup>', '<i>ar</i><sup>3</sup>')} = <b><i>r</i><sup>6</sup></b></div>
     <div>Dividing (3) by (2): &nbsp; ${frac('<i>z</i>', '<i>y</i>')} = ${frac('<i>ar</i><sup>15</sup>', '<i>ar</i><sup>9</sup>')} = <b><i>r</i><sup>6</sup></b></div>
     <div style="margin-top: 8px;">Since ${frac('<i>y</i>', '<i>x</i>')} = ${frac('<i>z</i>', '<i>y</i>')} = <i>r</i><sup>6</sup>, the successive ratios are equal.</div>
     <div>&rArr; <b><i>x</i>, <i>y</i>, <i>z</i> are in G.P.</b></div>`,
    `<i>y</i><sup>2</sup> = <i>xz</i> &nbsp; (Hence Proved)`
  ));

  // Q18
  cards.push(qCard(
    18,
    `Find the sum to <i>n</i> terms of the sequence: &nbsp; <b>8, 88, 888, 8888, ...</b>`,
    `<div>Let <i>S<sub>n</sub></i> = 8 + 88 + 888 + 8888 + ... to <i>n</i> terms.</div>
     <div>Factoring out 8:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = 8 [ 1 + 11 + 111 + ... to <i>n</i> terms ]</div>
     <div>Multiplying and dividing by 9:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('8', '9')} [ 9 + 99 + 999 + ... to <i>n</i> terms ]</div>
     <div>Writing each term as (10<sup><i>k</i></sup> &minus; 1):</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('8', '9')} [ (10 &minus; 1) + (10<sup>2</sup> &minus; 1) + (10<sup>3</sup> &minus; 1) + ... + (10<sup><i>n</i></sup> &minus; 1) ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('8', '9')} [ (10 + 10<sup>2</sup> + 10<sup>3</sup> + ... + 10<sup><i>n</i></sup>) &minus; (1 + 1 + ... to <i>n</i> terms) ]</div>
     <div style="margin-top: 6px;">The geometric series inside has <i>a</i> = 10, <i>r</i> = 10:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('8', '9')} [ ${frac('10(10<sup><i>n</i></sup> &minus; 1)', '10 &minus; 1')} &minus; <i>n</i> ] = ${frac('8', '9')} [ ${frac('10(10<sup><i>n</i></sup> &minus; 1)', '9')} &minus; <i>n</i> ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = <b>${frac('80', '81')}(10<sup><i>n</i></sup> &minus; 1) &minus; ${frac('8<i>n</i>', '9')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('80', '81')}(10<sup><i>n</i></sup> &minus; 1) &minus; ${frac('8<i>n</i>', '9')}`
  ));

  // Q19
  cards.push(qCard(
    19,
    `Find the sum of the products of the corresponding terms of the sequences:<br/>
     <b>2, 4, 8, 16, 32</b> &nbsp; and &nbsp; <b>128, 32, 8, 2, ${frac('1', '2')}</b>.`,
    `<div>Taking the pairwise products of corresponding terms:</div>
     <div>• 1<sup>st</sup> term: 2 &times; 128 = <b>256</b></div>
     <div>• 2<sup>nd</sup> term: 4 &times; 32 = <b>128</b></div>
     <div>• 3<sup>rd</sup> term: 8 &times; 8 = <b>64</b></div>
     <div>• 4<sup>th</sup> term: 16 &times; 2 = <b>32</b></div>
     <div>• 5<sup>th</sup> term: 32 &times; ${frac('1', '2')} = <b>16</b></div>
     <div style="margin-top: 8px;">The resulting sequence is: <b>256, 128, 64, 32, 16</b></div>
     <div>This forms a G.P. with:</div>
     <div>• First term: <i>a</i> = 256</div>
     <div>• Common ratio: <i>r</i> = ${frac('128', '256')} = ${frac('1', '2')}</div>
     <div>• Number of terms: <i>n</i> = 5</div>
     <div style="margin-top: 8px;">Sum: <i>S</i><sub>5</sub> = ${frac('<i>a</i>(1 &minus; <i>r</i><sup>5</sup>)', '1 &minus; <i>r</i>')}</div>
     <div>&rArr; <i>S</i><sub>5</sub> = ${frac('256 [1 &minus; (1/2)<sup>5</sup>]', '1 &minus; 1/2')} = ${frac('256 [1 &minus; 1/32]', '1/2')} = 512 &times; ${frac('31', '32')} = 16 &times; 31 = <b>496</b></div>`,
    `496`
  ));

  // Q20
  cards.push(qCard(
    20,
    `Show that the products of the corresponding terms of the sequences <b><i>a</i>, <i>ar</i>, <i>ar</i><sup>2</sup>, ... <i>ar</i><sup><i>n</i>&minus;1</sup></b> and <b><i>A</i>, <i>AR</i>, <i>AR</i><sup>2</sup>, ... <i>AR</i><sup><i>n</i>&minus;1</sup></b> form a G.P., and find the common ratio.`,
    `<div>The product of the corresponding terms yields the sequence:</div>
     <div><b><i>aA</i>, (<i>ar</i>)(<i>AR</i>), (<i>ar</i><sup>2</sup>)(<i>AR</i><sup>2</sup>), ..., (<i>ar</i><sup><i>n</i>&minus;1</sup>)(<i>AR</i><sup><i>n</i>&minus;1</sup>)</b></div>
     <div>Let the <i>k</i><sup>th</sup> term be <i>T<sub>k</sub></i> = (<i>ar</i><sup><i>k</i>&minus;1</sup>)(<i>AR</i><sup><i>k</i>&minus;1</sup>).</div>
     <div style="margin-top: 8px;">Finding the ratio of consecutive terms:</div>
     <div>&rArr; ${frac('<i>T</i><sub><i>k</i>+1</sub>', '<i>T<sub>k</sub></i>')} = ${frac('(<i>ar<sup>k</sup></i>)(<i>AR<sup>k</sup></i>)', '(<i>ar</i><sup><i>k</i>&minus;1</sup>)(<i>AR</i><sup><i>k</i>&minus;1</sup>)')} = ${frac('<i>a</i>', '<i>a</i>')} &times; ${frac('<i>r<sup>k</sup></i>', '<i>r</i><sup><i>k</i>&minus;1</sup>')} &times; ${frac('<i>A</i>', '<i>A</i>')} &times; ${frac('<i>R<sup>k</sup></i>', '<i>R</i><sup><i>k</i>&minus;1</sup>')} = <b><i>rR</i></b></div>
     <div style="margin-top: 6px;">Since the ratio ${frac('<i>T</i><sub><i>k</i>+1</sub>', '<i>T<sub>k</sub></i>')} is constant and independent of <i>k</i>:</div>
     <div>&rArr; The sequence forms a G.P. with common ratio <b><i>rR</i></b>.</div>`,
    `Common ratio = <i>rR</i> &nbsp; (Hence Proved)`
  ));

  // Q21
  cards.push(qCard(
    21,
    `Find four numbers forming a geometric progression in which the <b>third term is greater than the first term by 9</b>, and the <b>second term is greater than the 4<sup>th</sup> by 18</b>.`,
    `<div>Let the four numbers in G.P. be <i>a</i>, <i>ar</i>, <i>ar</i><sup>2</sup>, <i>ar</i><sup>3</sup>.</div>
     <div>• Given condition 1: <i>a</i><sub>3</sub> = <i>a</i><sub>1</sub> + 9</div>
     <div>&rArr; <i>ar</i><sup>2</sup> = <i>a</i> + 9 &rArr; <i>a</i>(<i>r</i><sup>2</sup> &minus; 1) = 9 &nbsp; ... (1)</div>
     <div>• Given condition 2: <i>a</i><sub>2</sub> = <i>a</i><sub>4</sub> + 18</div>
     <div>&rArr; <i>ar</i> = <i>ar</i><sup>3</sup> + 18 &rArr; <i>ar</i>(1 &minus; <i>r</i><sup>2</sup>) = 18 &rArr; &minus;<i>ar</i>(<i>r</i><sup>2</sup> &minus; 1) = 18 &nbsp; ... (2)</div>
     <div style="margin-top: 8px;">Dividing equation (2) by (1):</div>
     <div>&rArr; ${frac('&minus;<i>ar</i>(<i>r</i><sup>2</sup> &minus; 1)', '<i>a</i>(<i>r</i><sup>2</sup> &minus; 1)')} = ${frac('18', '9')} &rArr; &minus;<i>r</i> = 2 &rArr; <b><i>r</i> = &minus;2</b></div>
     <div style="margin-top: 6px;">Substituting <i>r</i> = &minus;2 into (1):</div>
     <div>&rArr; <i>a</i>[(&minus;2)<sup>2</sup> &minus; 1] = 9 &rArr; <i>a</i>(4 &minus; 1) = 9 &rArr; 3<i>a</i> = 9 &rArr; <b><i>a</i> = 3</b></div>
     <div style="margin-top: 8px; color: #FFE082; font-weight: 700;">Finding the four numbers:</div>
     <div>• <i>T</i><sub>1</sub> = <i>a</i> = <b>3</b></div>
     <div>• <i>T</i><sub>2</sub> = <i>ar</i> = 3(&minus;2) = <b>&minus;6</b></div>
     <div>• <i>T</i><sub>3</sub> = <i>ar</i><sup>2</sup> = 3(&minus;2)<sup>2</sup> = <b>12</b></div>
     <div>• <i>T</i><sub>4</sub> = <i>ar</i><sup>3</sup> = 3(&minus;2)<sup>3</sup> = <b>&minus;24</b></div>`,
    `3, &minus;6, 12, &minus;24`
  ));

  // Q22
  cards.push(qCard(
    22,
    `If the <i>p</i><sup>th</sup>, <i>q</i><sup>th</sup> and <i>r</i><sup>th</sup> terms of a G.P. are <i>a</i>, <i>b</i> and <i>c</i>, respectively, prove that:<br/>
     <b><i>a</i><sup><i>q</i>&minus;<i>r</i></sup> <i>b</i><sup><i>r</i>&minus;<i>p</i></sup> <i>c</i><sup><i>p</i>&minus;<i>q</i></sup> = 1</b>.`,
    `<div>Let <i>A</i> be the first term and <i>R</i> be the common ratio of the G.P.</div>
     <div>• <i>a</i> = <i>AR</i><sup><i>p</i>&minus;1</sup></div>
     <div>• <i>b</i> = <i>AR</i><sup><i>q</i>&minus;1</sup></div>
     <div>• <i>c</i> = <i>AR</i><sup><i>r</i>&minus;1</sup></div>
     <div style="margin-top: 8px;">Substituting into the expression:</div>
     <div>&rArr; <i>a</i><sup><i>q</i>&minus;<i>r</i></sup> <i>b</i><sup><i>r</i>&minus;<i>p</i></sup> <i>c</i><sup><i>p</i>&minus;<i>q</i></sup> = (<i>AR</i><sup><i>p</i>&minus;1</sup>)<sup><i>q</i>&minus;<i>r</i></sup> &times; (<i>AR</i><sup><i>q</i>&minus;1</sup>)<sup><i>r</i>&minus;<i>p</i></sup> &times; (<i>AR</i><sup><i>r</i>&minus;1</sup>)<sup><i>p</i>&minus;<i>q</i></sup></div>
     <div>&rArr; = <i>A</i><sup>(<i>q</i>&minus;<i>r</i>) + (<i>r</i>&minus;<i>p</i>) + (<i>p</i>&minus;<i>q</i>)</sup> &times; <i>R</i><sup>(<i>p</i>&minus;1)(<i>q</i>&minus;<i>r</i>) + (<i>q</i>&minus;1)(<i>r</i>&minus;<i>p</i>) + (<i>r</i>&minus;1)(<i>p</i>&minus;<i>q</i>)</sup></div>
     <div>• Exponent of <i>A</i>: &nbsp; <i>q</i> &minus; <i>r</i> + <i>r</i> &minus; <i>p</i> + <i>p</i> &minus; <i>q</i> = <b>0</b></div>
     <div>• Exponent of <i>R</i>:</div>
     <div>&nbsp; <i>p</i>(<i>q</i> &minus; <i>r</i>) + <i>q</i>(<i>r</i> &minus; <i>p</i>) + <i>r</i>(<i>p</i> &minus; <i>q</i>) &minus; (<i>q</i> &minus; <i>r</i> + <i>r</i> &minus; <i>p</i> + <i>p</i> &minus; <i>q</i>)</div>
     <div>&nbsp; = (<i>pq</i> &minus; <i>pr</i> + <i>qr</i> &minus; <i>pq</i> + <i>pr</i> &minus; <i>qr</i>) &minus; 0 = <b>0</b></div>
     <div>&rArr; = <i>A</i><sup>0</sup> &times; <i>R</i><sup>0</sup> = 1 &times; 1 = <b>1</b></div>`,
    `1 &nbsp; (Hence Proved)`
  ));

  // Q23
  cards.push(qCard(
    23,
    `If the first and the <i>n</i><sup>th</sup> term of a G.P. are <i>a</i> and <i>b</i>, respectively, and if <i>P</i> is the product of <i>n</i> terms, prove that: &nbsp; <b><i>P</i><sup>2</sup> = (<i>ab</i>)<sup><i>n</i></sup></b>.`,
    `<div>Given: First term = <i>a</i>, &nbsp; <i>n</i><sup>th</sup> term = <i>b</i> = <i>ar</i><sup><i>n</i>&minus;1</sup> &nbsp; ... (1)</div>
     <div>The product of <i>n</i> terms is:</div>
     <div>&rArr; <i>P</i> = (<i>a</i>)(<i>ar</i>)(<i>ar</i><sup>2</sup>) ... (<i>ar</i><sup><i>n</i>&minus;1</sup>)</div>
     <div>&rArr; <i>P</i> = <i>a<sup>n</sup></i> &times; <i>r</i><sup>1 + 2 + 3 + ... + (<i>n</i> &minus; 1)</sup></div>
     <div>Using the sum formula 1 + 2 + ... + (<i>n</i> &minus; 1) = ${frac('<i>n</i>(<i>n</i> &minus; 1)', '2')}:</div>
     <div>&rArr; <i>P</i> = <i>a<sup>n</sup></i> &times; <i>r</i><sup><i>n</i>(<i>n</i>&minus;1)/2</sup></div>
     <div style="margin-top: 8px;">Squaring both sides:</div>
     <div>&rArr; <i>P</i><sup>2</sup> = [ <i>a<sup>n</sup></i> <i>r</i><sup><i>n</i>(<i>n</i>&minus;1)/2</sup> ]<sup>2</sup> = <i>a</i><sup>2<i>n</i></sup> <i>r</i><sup><i>n</i>(<i>n</i>&minus;1)</sup></div>
     <div>&rArr; <i>P</i><sup>2</sup> = [ <i>a</i><sup>2</sup> <i>r</i><sup><i>n</i>&minus;1</sup> ]<sup><i>n</i></sup> = [ <i>a</i> &times; (<i>ar</i><sup><i>n</i>&minus;1</sup>) ]<sup><i>n</i></sup></div>
     <div>Substituting <i>b</i> = <i>ar</i><sup><i>n</i>&minus;1</sup> from (1):</div>
     <div>&rArr; <b><i>P</i><sup>2</sup> = (<i>ab</i>)<sup><i>n</i></sup></b></div>`,
    `<i>P</i><sup>2</sup> = (<i>ab</i>)<sup><i>n</i></sup> &nbsp; (Hence Proved)`
  ));

  // Q24
  cards.push(qCard(
    24,
    `Show that the ratio of the sum of the first <i>n</i> terms of a G.P. to the sum of terms from <b>(<i>n</i> + 1)<sup>th</sup> to (2<i>n</i>)<sup>th</sup></b> term is <b>${frac('1', '<i>r<sup>n</sup></i>')}</b>.`,
    `<div>Let <i>a</i> be the first term and <i>r</i> be the common ratio.</div>
     <div>• Sum of first <i>n</i> terms:</div>
     <div>&rArr; <i>S</i><sub>1</sub> = ${frac('<i>a</i>(1 &minus; <i>r<sup>n</sup></i>)', '1 &minus; <i>r</i>')}</div>
     <div style="margin-top: 6px;">• The terms from (<i>n</i> + 1)<sup>th</sup> to (2<i>n</i>)<sup>th</sup> are also <i>n</i> terms in G.P. with:</div>
     <div>&nbsp; - First term: <i>a</i><sub><i>n</i>+1</sub> = <i>ar<sup>n</sup></i></div>
     <div>&nbsp; - Common ratio: <i>r</i></div>
     <div>&nbsp; - Number of terms: <i>n</i></div>
     <div>&rArr; <i>S</i><sub>2</sub> = ${frac('<i>a</i><sub><i>n</i>+1</sub>(1 &minus; <i>r<sup>n</sup></i>)', '1 &minus; <i>r</i>')} = ${frac('<i>ar<sup>n</sup></i>(1 &minus; <i>r<sup>n</sup></i>)', '1 &minus; <i>r</i>')} = <i>r<sup>n</sup></i> &times; <i>S</i><sub>1</sub></div>
     <div style="margin-top: 8px;">Finding the ratio:</div>
     <div>&rArr; ${frac('<i>S</i><sub>1</sub>', '<i>S</i><sub>2</sub>')} = ${frac('<i>S</i><sub>1</sub>', '<i>r<sup>n</sup></i> <i>S</i><sub>1</sub>')} = <b>${frac('1', '<i>r<sup>n</sup></i>')}</b></div>`,
    `${frac('1', '<i>r<sup>n</sup></i>')} &nbsp; (Hence Proved)`
  ));

  // Q25
  cards.push(qCard(
    25,
    `If <i>a</i>, <i>b</i>, <i>c</i> and <i>d</i> are in G.P., show that:<br/>
     <b>(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>)(<i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>) = (<i>ab</i> + <i>bc</i> + <i>cd</i>)<sup>2</sup></b>.`,
    `<div>Let <i>r</i> be the common ratio of the G.P.</div>
     <div>Then: <i>b</i> = <i>ar</i>, &nbsp; <i>c</i> = <i>ar</i><sup>2</sup>, &nbsp; <i>d</i> = <i>ar</i><sup>3</sup></div>
     <div style="margin-top: 6px;">1. Evaluating L.H.S.:</div>
     <div>&rArr; (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>) = <i>a</i><sup>2</sup> + <i>a</i><sup>2</sup><i>r</i><sup>2</sup> + <i>a</i><sup>2</sup><i>r</i><sup>4</sup> = <i>a</i><sup>2</sup>(1 + <i>r</i><sup>2</sup> + <i>r</i><sup>4</sup>)</div>
     <div>&rArr; (<i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>) = <i>a</i><sup>2</sup><i>r</i><sup>2</sup> + <i>a</i><sup>2</sup><i>r</i><sup>4</sup> + <i>a</i><sup>2</sup><i>r</i><sup>6</sup> = <i>a</i><sup>2</sup><i>r</i><sup>2</sup>(1 + <i>r</i><sup>2</sup> + <i>r</i><sup>4</sup>)</div>
     <div>&rArr; L.H.S. = <i>a</i><sup>2</sup>(1 + <i>r</i><sup>2</sup> + <i>r</i><sup>4</sup>) &times; <i>a</i><sup>2</sup><i>r</i><sup>2</sup>(1 + <i>r</i><sup>2</sup> + <i>r</i><sup>4</sup>) = <b><i>a</i><sup>4</sup> <i>r</i><sup>2</sup> (1 + <i>r</i><sup>2</sup> + <i>r</i><sup>4</sup>)<sup>2</sup></b></div>
     <div style="margin-top: 8px;">2. Evaluating R.H.S.:</div>
     <div>&rArr; <i>ab</i> + <i>bc</i> + <i>cd</i> = <i>a</i>(<i>ar</i>) + (<i>ar</i>)(<i>ar</i><sup>2</sup>) + (<i>ar</i><sup>2</sup>)(<i>ar</i><sup>3</sup>) = <i>a</i><sup>2</sup><i>r</i> + <i>a</i><sup>2</sup><i>r</i><sup>3</sup> + <i>a</i><sup>2</sup><i>r</i><sup>5</sup> = <i>a</i><sup>2</sup><i>r</i>(1 + <i>r</i><sup>2</sup> + <i>r</i><sup>4</sup>)</div>
     <div>&rArr; R.H.S. = [ <i>a</i><sup>2</sup><i>r</i>(1 + <i>r</i><sup>2</sup> + <i>r</i><sup>4</sup>) ]<sup>2</sup> = <b><i>a</i><sup>4</sup> <i>r</i><sup>2</sup> (1 + <i>r</i><sup>2</sup> + <i>r</i><sup>4</sup>)<sup>2</sup></b></div>
     <div style="margin-top: 6px;">Since L.H.S. = R.H.S., the identity is proved.</div>`,
    `L.H.S. = R.H.S. &nbsp; (Hence Proved)`
  ));

  // Q26
  cards.push(qCard(
    26,
    `Insert two numbers between <b>3 and 81</b> so that the resulting sequence is a G.P.`,
    `<div>Let <i>G</i><sub>1</sub> and <i>G</i><sub>2</sub> be two geometric means inserted between 3 and 81.</div>
     <div>The sequence <b>3, <i>G</i><sub>1</sub>, <i>G</i><sub>2</sub>, 81</b> forms a G.P. with 4 terms:</div>
     <div>• First term: <i>a</i> = 3</div>
     <div>• 4<sup>th</sup> term: <i>a</i><sub>4</sub> = <i>ar</i><sup>3</sup> = 81</div>
     <div>&rArr; 3<i>r</i><sup>3</sup> = 81 &rArr; <i>r</i><sup>3</sup> = 27 = 3<sup>3</sup> &rArr; <b><i>r</i> = 3</b></div>
     <div style="margin-top: 8px; color: #FFE082; font-weight: 700;">Finding the two numbers:</div>
     <div>• <i>G</i><sub>1</sub> = <i>ar</i> = 3 &times; 3 = <b>9</b></div>
     <div>• <i>G</i><sub>2</sub> = <i>ar</i><sup>2</sup> = 3 &times; 3<sup>2</sup> = 3 &times; 9 = <b>27</b></div>`,
    `9 and 27`
  ));

  // Q27
  cards.push(qCard(
    27,
    `Find the value of <i>n</i> so that <b>${frac('<i>a</i><sup><i>n</i>+1</sup> + <i>b</i><sup><i>n</i>+1</sup>', '<i>a<sup>n</sup></i> + <i>b<sup>n</sup></i>')}</b> may be the geometric mean between <i>a</i> and <i>b</i>.`,
    `<div>The Geometric Mean (G.M.) between <i>a</i> and <i>b</i> is: &radic;<i>ab</i> = <i>a</i><sup>1/2</sup> <i>b</i><sup>1/2</sup></div>
     <div>Equating to the given expression:</div>
     <div>&rArr; ${frac('<i>a</i><sup><i>n</i>+1</sup> + <i>b</i><sup><i>n</i>+1</sup>', '<i>a<sup>n</sup></i> + <i>b<sup>n</sup></i>')} = <i>a</i><sup>1/2</sup> <i>b</i><sup>1/2</sup></div>
     <div>Cross-multiplying:</div>
     <div>&rArr; <i>a</i><sup><i>n</i>+1</sup> + <i>b</i><sup><i>n</i>+1</sup> = <i>a</i><sup>1/2</sup> <i>b</i><sup>1/2</sup> (<i>a<sup>n</sup></i> + <i>b<sup>n</sup></i>)</div>
     <div>&rArr; <i>a</i><sup><i>n</i>+1</sup> + <i>b</i><sup><i>n</i>+1</sup> = <i>a</i><sup><i>n</i>+1/2</sup> <i>b</i><sup>1/2</sup> + <i>a</i><sup>1/2</sup> <i>b</i><sup><i>n</i>+1/2</sup></div>
     <div>&rArr; <i>a</i><sup><i>n</i>+1</sup> &minus; <i>a</i><sup><i>n</i>+1/2</sup> <i>b</i><sup>1/2</sup> = <i>a</i><sup>1/2</sup> <i>b</i><sup><i>n</i>+1/2</sup> &minus; <i>b</i><sup><i>n</i>+1</sup></div>
     <div>&rArr; <i>a</i><sup><i>n</i>+1/2</sup> (<i>a</i><sup>1/2</sup> &minus; <i>b</i><sup>1/2</sup>) = <i>b</i><sup><i>n</i>+1/2</sup> (<i>a</i><sup>1/2</sup> &minus; <i>b</i><sup>1/2</sup>)</div>
     <div>Dividing by (<i>a</i><sup>1/2</sup> &minus; <i>b</i><sup>1/2</sup>) (since <i>a</i> &ne; <i>b</i>):</div>
     <div>&rArr; <i>a</i><sup><i>n</i>+1/2</sup> = <i>b</i><sup><i>n</i>+1/2</sup> &rArr; (${frac('<i>a</i>', '<i>b</i>')})<sup><i>n</i>+1/2</sup> = 1 = (${frac('<i>a</i>', '<i>b</i>')})<sup>0</sup></div>
     <div>&rArr; <i>n</i> + ${frac('1', '2')} = 0 &rArr; <b><i>n</i> = &minus;${frac('1', '2')}</b></div>`,
    `<i>n</i> = &minus;${frac('1', '2')}`
  ));

  // Q28
  cards.push(qCard(
    28,
    `The sum of two numbers is 6 times their geometric mean; show that the numbers are in the ratio <b>(3 + 2&radic;2) : (3 &minus; 2&radic;2)</b>.`,
    `<div>Let the two positive numbers be <i>a</i> and <i>b</i>.</div>
     <div>Given: <i>a</i> + <i>b</i> = 6&radic;<i>ab</i></div>
     <div>&rArr; ${frac('<i>a</i> + <i>b</i>', '2&radic;<i>ab</i>')} = ${frac('3', '1')}</div>
     <div>Applying Componendo and Dividendo:</div>
     <div>&rArr; ${frac('(<i>a</i> + <i>b</i>) + 2&radic;<i>ab</i>', '(<i>a</i> + <i>b</i>) &minus; 2&radic;<i>ab</i>')} = ${frac('3 + 1', '3 &minus; 1')}</div>
     <div>&rArr; ${frac('(&radic;<i>a</i> + &radic;<i>b</i>)<sup>2</sup>', '(&radic;<i>a</i> &minus; &radic;<i>b</i>)<sup>2</sup>')} = ${frac('4', '2')} = 2</div>
     <div>Taking square root on both sides:</div>
     <div>&rArr; ${frac('&radic;<i>a</i> + &radic;<i>b</i>', '&radic;<i>a</i> &minus; &radic;<i>b</i>')} = ${frac('&radic;2', '1')}</div>
     <div>Applying Componendo and Dividendo again:</div>
     <div>&rArr; ${frac('(&radic;<i>a</i> + &radic;<i>b</i>) + (&radic;<i>a</i> &minus; &radic;<i>b</i>)', '(&radic;<i>a</i> + &radic;<i>b</i>) &minus; (&radic;<i>a</i> &minus; &radic;<i>b</i>)')} = ${frac('&radic;2 + 1', '&radic;2 &minus; 1')}</div>
     <div>&rArr; ${frac('2&radic;<i>a</i>', '2&radic;<i>b</i>')} = ${frac('&radic;<i>a</i>', '&radic;<i>b</i>')} = ${frac('&radic;2 + 1', '&radic;2 &minus; 1')}</div>
     <div>Squaring both sides:</div>
     <div>&rArr; ${frac('<i>a</i>', '<i>b</i>')} = ${frac('(&radic;2 + 1)<sup>2</sup>', '(&radic;2 &minus; 1)<sup>2</sup>')} = ${frac('2 + 1 + 2&radic;2', '2 + 1 &minus; 2&radic;2')} = <b>${frac('3 + 2&radic;2', '3 &minus; 2&radic;2')}</b></div>`,
    `(3 + 2&radic;2) : (3 &minus; 2&radic;2) &nbsp; (Hence Proved)`
  ));

  // Q29
  cards.push(qCard(
    29,
    `If <i>A</i> and <i>G</i> be A.M. and G.M., respectively, between two positive numbers, prove that the numbers are <b><i>A</i> &plusmn; &radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)]</b>.`,
    `<div>Let the two positive numbers be <i>a</i> and <i>b</i>.</div>
     <div>• A.M. = <i>A</i> = ${frac('<i>a</i> + <i>b</i>', '2')} &rArr; <b><i>a</i> + <i>b</i> = 2<i>A</i></b> &nbsp; ... (1)</div>
     <div>• G.M. = <i>G</i> = &radic;<i>ab</i> &rArr; <b><i>ab</i> = <i>G</i><sup>2</sup></b> &nbsp; ... (2)</div>
     <div style="margin-top: 8px;">Using identity (<i>a</i> &minus; <i>b</i>)<sup>2</sup> = (<i>a</i> + <i>b</i>)<sup>2</sup> &minus; 4<i>ab</i>:</div>
     <div>&rArr; (<i>a</i> &minus; <i>b</i>)<sup>2</sup> = (2<i>A</i>)<sup>2</sup> &minus; 4<i>G</i><sup>2</sup> = 4<i>A</i><sup>2</sup> &minus; 4<i>G</i><sup>2</sup> = 4(<i>A</i><sup>2</sup> &minus; <i>G</i><sup>2</sup>)</div>
     <div>&rArr; (<i>a</i> &minus; <i>b</i>)<sup>2</sup> = 4(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)</div>
     <div>&rArr; <b><i>a</i> &minus; <i>b</i> = 2&radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)]</b> &nbsp; ... (3)</div>
     <div style="margin-top: 8px;">Adding and subtracting (1) and (3):</div>
     <div>• Adding: 2<i>a</i> = 2<i>A</i> + 2&radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)] &rArr; <i>a</i> = <i>A</i> + &radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)]</div>
     <div>• Subtracting: 2<i>b</i> = 2<i>A</i> &minus; 2&radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)] &rArr; <i>b</i> = <i>A</i> &minus; &radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)]</div>
     <div>Hence, the numbers are <b><i>A</i> &plusmn; &radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)]</b>.</div>`,
    `<i>A</i> &plusmn; &radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)] &nbsp; (Hence Proved)`
  ));

  // Q30
  cards.push(qCard(
    30,
    `The number of bacteria in a certain culture doubles every hour. If there were <b>30 bacteria</b> present in the culture originally, how many bacteria will be present at the end of the <b>2<sup>nd</sup> hour, 4<sup>th</sup> hour and <i>n</i><sup>th</sup> hour</b>?`,
    `<div>Original count (at <i>t</i> = 0): <i>a</i> = 30</div>
     <div>Since the population doubles every hour, common ratio <i>r</i> = 2.</div>
     <div>• At end of 1<sup>st</sup> hour: 30 &times; 2 = 60</div>
     <div>• At end of 2<sup>nd</sup> hour: 30 &times; 2<sup>2</sup> = 30 &times; 4 = <b>120</b></div>
     <div>• At end of 3<sup>rd</sup> hour: 30 &times; 2<sup>3</sup> = 30 &times; 8 = 240</div>
     <div>• At end of 4<sup>th</sup> hour: 30 &times; 2<sup>4</sup> = 30 &times; 16 = <b>480</b></div>
     <div style="margin-top: 8px;">Following this geometric progression, at the end of the <i>n</i><sup>th</sup> hour:</div>
     <div>&rArr; Bacteria count = <b>30(2)<sup><i>n</i></sup></b></div>`,
    `2<sup>nd</sup> hr: 120, &nbsp; 4<sup>th</sup> hr: 480, &nbsp; <i>n</i><sup>th</sup> hr: 30(2)<sup><i>n</i></sup>`
  ));

  // Q31
  cards.push(qCard(
    31,
    `What will <b>Rs 500</b> amount to in <b>10 years</b> after its deposit in a bank which pays an annual interest rate of <b>10% compounded annually</b>?`,
    `<div>Principal: <i>P</i> = Rs 500, Rate of interest: <i>R</i> = 10% per annum.</div>
     <div>• Amount at the end of 1<sup>st</sup> year: &nbsp; 500(1 + 0.1) = 500(1.1)</div>
     <div>• Amount at the end of 2<sup>nd</sup> year: &nbsp; 500(1.1)<sup>2</sup></div>
     <div>• Amount at the end of 3<sup>rd</sup> year: &nbsp; 500(1.1)<sup>3</sup></div>
     <div style="margin-top: 8px;">Continuing this geometric progression for 10 years:</div>
     <div>&rArr; Amount at the end of 10 years = <b>Rs 500(1.1)<sup>10</sup></b></div>`,
    `Rs 500(1.1)<sup>10</sup>`
  ));

  // Q32
  cards.push(qCard(
    32,
    `If A.M. and G.M. of roots of a quadratic equation are <b>8 and 5</b>, respectively, then obtain the quadratic equation.`,
    `<div>Let the roots of the quadratic equation be <i>a</i> and <i>b</i>.</div>
     <div>• A.M. = ${frac('<i>a</i> + <i>b</i>', '2')} = 8 &rArr; <b><i>a</i> + <i>b</i> = 16</b> &nbsp; (Sum of roots)</div>
     <div>• G.M. = &radic;<i>ab</i> = 5 &rArr; <b><i>ab</i> = 25</b> &nbsp; (Product of roots)</div>
     <div style="margin-top: 8px;">A quadratic equation with given roots is:</div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; (Sum of roots)<i>x</i> + (Product of roots) = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; (<i>a</i> + <i>b</i>)<i>x</i> + <i>ab</i> = 0</div>
     <div>&rArr; <b><i>x</i><sup>2</sup> &minus; 16<i>x</i> + 25 = 0</b></div>`,
    `<i>x</i><sup>2</sup> &minus; 16<i>x</i> + 25 = 0`
  ));

  const banner = makeBanner("Exercise 8.3", "Geometric Progressions (G.P.), Sum of GP, Geometric Mean & AM-GM Applications");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx83 };
