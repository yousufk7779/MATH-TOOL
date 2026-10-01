const { styleBlock, frac, makeBanner, qCard } = require('./ch8_common');

function generateEx81() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Write the first five terms of the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = <i>n</i>(<i>n</i> + 2)</b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = <i>n</i>(<i>n</i> + 2)</div>
     <div>Substituting <i>n</i> = 1, 2, 3, 4, 5:</div>
     <div>• For <i>n</i> = 1: &nbsp; <i>a</i><sub>1</sub> = 1(1 + 2) = 1 &times; 3 = <b>3</b></div>
     <div>• For <i>n</i> = 2: &nbsp; <i>a</i><sub>2</sub> = 2(2 + 2) = 2 &times; 4 = <b>8</b></div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = 3(3 + 2) = 3 &times; 5 = <b>15</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = 4(4 + 2) = 4 &times; 6 = <b>24</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = 5(5 + 2) = 5 &times; 7 = <b>35</b></div>`,
    `3, 8, 15, 24, 35`
  ));

  // Q2
  cards.push(qCard(
    2,
    `Write the first five terms of the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = ${frac('<i>n</i>', '<i>n</i> + 1')}</b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = ${frac('<i>n</i>', '<i>n</i> + 1')}</div>
     <div>Substituting <i>n</i> = 1, 2, 3, 4, 5:</div>
     <div>• For <i>n</i> = 1: &nbsp; <i>a</i><sub>1</sub> = ${frac('1', '1 + 1')} = <b>${frac('1', '2')}</b></div>
     <div>• For <i>n</i> = 2: &nbsp; <i>a</i><sub>2</sub> = ${frac('2', '2 + 1')} = <b>${frac('2', '3')}</b></div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = ${frac('3', '3 + 1')} = <b>${frac('3', '4')}</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = ${frac('4', '4 + 1')} = <b>${frac('4', '5')}</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = ${frac('5', '5 + 1')} = <b>${frac('5', '6')}</b></div>`,
    `${frac('1', '2')}, ${frac('2', '3')}, ${frac('3', '4')}, ${frac('4', '5')}, ${frac('5', '6')}`
  ));

  // Q3
  cards.push(qCard(
    3,
    `Write the first five terms of the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = 2<sup><i>n</i></sup></b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = 2<sup><i>n</i></sup></div>
     <div>Substituting <i>n</i> = 1, 2, 3, 4, 5:</div>
     <div>• For <i>n</i> = 1: &nbsp; <i>a</i><sub>1</sub> = 2<sup>1</sup> = <b>2</b></div>
     <div>• For <i>n</i> = 2: &nbsp; <i>a</i><sub>2</sub> = 2<sup>2</sup> = <b>4</b></div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = 2<sup>3</sup> = <b>8</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = 2<sup>4</sup> = <b>16</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = 2<sup>5</sup> = <b>32</b></div>`,
    `2, 4, 8, 16, 32`
  ));

  // Q4
  cards.push(qCard(
    4,
    `Write the first five terms of the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = ${frac('2<i>n</i> &minus; 3', '6')}</b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = ${frac('2<i>n</i> &minus; 3', '6')}</div>
     <div>Substituting <i>n</i> = 1, 2, 3, 4, 5:</div>
     <div>• For <i>n</i> = 1: &nbsp; <i>a</i><sub>1</sub> = ${frac('2(1) &minus; 3', '6')} = <b>&minus;${frac('1', '6')}</b></div>
     <div>• For <i>n</i> = 2: &nbsp; <i>a</i><sub>2</sub> = ${frac('2(2) &minus; 3', '6')} = <b>${frac('1', '6')}</b></div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = ${frac('2(3) &minus; 3', '6')} = ${frac('3', '6')} = <b>${frac('1', '2')}</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = ${frac('2(4) &minus; 3', '6')} = <b>${frac('5', '6')}</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = ${frac('2(5) &minus; 3', '6')} = <b>${frac('7', '6')}</b></div>`,
    `&minus;${frac('1', '6')}, ${frac('1', '6')}, ${frac('1', '2')}, ${frac('5', '6')}, ${frac('7', '6')}`
  ));

  // Q5
  cards.push(qCard(
    5,
    `Write the first five terms of the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = (&minus;1)<sup><i>n</i>&minus;1</sup> 5<sup><i>n</i>+1</sup></b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = (&minus;1)<sup><i>n</i>&minus;1</sup> 5<sup><i>n</i>+1</sup></div>
     <div>Substituting <i>n</i> = 1, 2, 3, 4, 5:</div>
     <div>• For <i>n</i> = 1: &nbsp; <i>a</i><sub>1</sub> = (&minus;1)<sup>1&minus;1</sup> 5<sup>1+1</sup> = (1)(5<sup>2</sup>) = <b>25</b></div>
     <div>• For <i>n</i> = 2: &nbsp; <i>a</i><sub>2</sub> = (&minus;1)<sup>2&minus;1</sup> 5<sup>2+1</sup> = (&minus;1)(5<sup>3</sup>) = <b>&minus;125</b></div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = (&minus;1)<sup>3&minus;1</sup> 5<sup>3+1</sup> = (1)(5<sup>4</sup>) = <b>625</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = (&minus;1)<sup>4&minus;1</sup> 5<sup>4+1</sup> = (&minus;1)(5<sup>5</sup>) = <b>&minus;3125</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = (&minus;1)<sup>5&minus;1</sup> 5<sup>5+1</sup> = (1)(5<sup>6</sup>) = <b>15625</b></div>`,
    `25, &minus;125, 625, &minus;3125, 15625`
  ));

  // Q6
  cards.push(qCard(
    6,
    `Write the first five terms of the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = <i>n</i> &times; ${frac('<i>n</i><sup>2</sup> + 5', '4')}</b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = <i>n</i> &times; ${frac('<i>n</i><sup>2</sup> + 5', '4')}</div>
     <div>Substituting <i>n</i> = 1, 2, 3, 4, 5:</div>
     <div>• For <i>n</i> = 1: &nbsp; <i>a</i><sub>1</sub> = 1 &times; ${frac('1<sup>2</sup> + 5', '4')} = ${frac('6', '4')} = <b>${frac('3', '2')}</b></div>
     <div>• For <i>n</i> = 2: &nbsp; <i>a</i><sub>2</sub> = 2 &times; ${frac('2<sup>2</sup> + 5', '4')} = 2 &times; ${frac('9', '4')} = <b>${frac('9', '2')}</b></div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = 3 &times; ${frac('3<sup>2</sup> + 5', '4')} = 3 &times; ${frac('14', '4')} = 3 &times; ${frac('7', '2')} = <b>${frac('21', '2')}</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = 4 &times; ${frac('4<sup>2</sup> + 5', '4')} = 4 &times; ${frac('21', '4')} = <b>21</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = 5 &times; ${frac('5<sup>2</sup> + 5', '4')} = 5 &times; ${frac('30', '4')} = 5 &times; ${frac('15', '2')} = <b>${frac('75', '2')}</b></div>`,
    `${frac('3', '2')}, ${frac('9', '2')}, ${frac('21', '2')}, 21, ${frac('75', '2')}`
  ));

  // Q7
  cards.push(qCard(
    7,
    `Find the indicated terms in the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = 4<i>n</i> &minus; 3; &nbsp; <i>a</i><sub>17</sub>, <i>a</i><sub>24</sub></b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = 4<i>n</i> &minus; 3</div>
     <div>• To find <i>a</i><sub>17</sub>, substitute <i>n</i> = 17:</div>
     <div>&rArr; <i>a</i><sub>17</sub> = 4(17) &minus; 3 = 68 &minus; 3 = <b>65</b></div>
     <div style="margin-top: 8px;">• To find <i>a</i><sub>24</sub>, substitute <i>n</i> = 24:</div>
     <div>&rArr; <i>a</i><sub>24</sub> = 4(24) &minus; 3 = 96 &minus; 3 = <b>93</b></div>`,
    `<i>a</i><sub>17</sub> = 65, &nbsp; <i>a</i><sub>24</sub> = 93`
  ));

  // Q8
  cards.push(qCard(
    8,
    `Find the indicated term in the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = ${frac('<i>n</i><sup>2</sup>', '2<sup><i>n</i></sup>')}; &nbsp; <i>a</i><sub>7</sub></b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = ${frac('<i>n</i><sup>2</sup>', '2<sup><i>n</i></sup>')}</div>
     <div>Substituting <i>n</i> = 7:</div>
     <div>&rArr; <i>a</i><sub>7</sub> = ${frac('7<sup>2</sup>', '2<sup>7</sup>')}</div>
     <div>&rArr; <i>a</i><sub>7</sub> = <b>${frac('49', '128')}</b> <span class="reason">[since 7<sup>2</sup> = 49 and 2<sup>7</sup> = 128]</span></div>`,
    `<i>a</i><sub>7</sub> = ${frac('49', '128')}`
  ));

  // Q9
  cards.push(qCard(
    9,
    `Find the indicated term in the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = (&minus;1)<sup><i>n</i>&minus;1</sup> <i>n</i><sup>3</sup>; &nbsp; <i>a</i><sub>9</sub></b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = (&minus;1)<sup><i>n</i>&minus;1</sup> <i>n</i><sup>3</sup></div>
     <div>Substituting <i>n</i> = 9:</div>
     <div>&rArr; <i>a</i><sub>9</sub> = (&minus;1)<sup>9&minus;1</sup> (9)<sup>3</sup></div>
     <div>&rArr; <i>a</i><sub>9</sub> = (&minus;1)<sup>8</sup> &times; 729 = (1) &times; 729 = <b>729</b></div>`,
    `<i>a</i><sub>9</sub> = 729`
  ));

  // Q10
  cards.push(qCard(
    10,
    `Find the indicated term in the sequence whose <i>n</i><sup>th</sup> term is: &nbsp; <b><i>a<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> &minus; 2)', '<i>n</i> + 3')}; &nbsp; <i>a</i><sub>20</sub></b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> &minus; 2)', '<i>n</i> + 3')}</div>
     <div>Substituting <i>n</i> = 20:</div>
     <div>&rArr; <i>a</i><sub>20</sub> = ${frac('20(20 &minus; 2)', '20 + 3')} = ${frac('20 &times; 18', '23')} = <b>${frac('360', '23')}</b></div>`,
    `<i>a</i><sub>20</sub> = ${frac('360', '23')}`
  ));

  // Q11
  cards.push(qCard(
    11,
    `Write the first five terms of the sequence and obtain the corresponding series:<br/>
     <b><i>a</i><sub>1</sub> = 3, &nbsp; <i>a<sub>n</sub></i> = 3<i>a</i><sub><i>n</i>&minus;1</sub> + 2</b> for all <i>n</i> &gt; 1.`,
    `<div>Given: <i>a</i><sub>1</sub> = 3 and <i>a<sub>n</sub></i> = 3<i>a</i><sub><i>n</i>&minus;1</sub> + 2 for <i>n</i> &gt; 1</div>
     <div>Computing successive terms:</div>
     <div>• For <i>n</i> = 2: &nbsp; <i>a</i><sub>2</sub> = 3<i>a</i><sub>1</sub> + 2 = 3(3) + 2 = 9 + 2 = <b>11</b></div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = 3<i>a</i><sub>2</sub> + 2 = 3(11) + 2 = 33 + 2 = <b>35</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = 3<i>a</i><sub>3</sub> + 2 = 3(35) + 2 = 105 + 2 = <b>107</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = 3<i>a</i><sub>4</sub> + 2 = 3(107) + 2 = 321 + 2 = <b>323</b></div>
     <div style="margin-top: 8px;">Thus, the first 5 terms are <b>3, 11, 35, 107, 323</b>.</div>
     <div>The corresponding series is: <b>3 + 11 + 35 + 107 + 323 + ...</b></div>`,
    `Terms: 3, 11, 35, 107, 323 &nbsp;|&nbsp; Series: 3 + 11 + 35 + 107 + 323 + ...`
  ));

  // Q12
  cards.push(qCard(
    12,
    `Write the first five terms of the sequence and obtain the corresponding series:<br/>
     <b><i>a</i><sub>1</sub> = &minus;1, &nbsp; <i>a<sub>n</sub></i> = ${frac('<i>a</i><sub><i>n</i>&minus;1</sub>', '<i>n</i>')}, &nbsp; <i>n</i> &ge; 2</b>.`,
    `<div>Given: <i>a</i><sub>1</sub> = &minus;1 and <i>a<sub>n</sub></i> = ${frac('<i>a</i><sub><i>n</i>&minus;1</sub>', '<i>n</i>')} for <i>n</i> &ge; 2</div>
     <div>Computing successive terms:</div>
     <div>• For <i>n</i> = 2: &nbsp; <i>a</i><sub>2</sub> = ${frac('<i>a</i><sub>1</sub>', '2')} = <b>&minus;${frac('1', '2')}</b></div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = ${frac('<i>a</i><sub>2</sub>', '3')} = ${frac('&minus;1/2', '3')} = <b>&minus;${frac('1', '6')}</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = ${frac('<i>a</i><sub>3</sub>', '4')} = ${frac('&minus;1/6', '4')} = <b>&minus;${frac('1', '24')}</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = ${frac('<i>a</i><sub>4</sub>', '5')} = ${frac('&minus;1/24', '5')} = <b>&minus;${frac('1', '120')}</b></div>
     <div style="margin-top: 8px;">The first 5 terms are <b>&minus;1, &minus;${frac('1', '2')}, &minus;${frac('1', '6')}, &minus;${frac('1', '24')}, &minus;${frac('1', '120')}</b>.</div>
     <div>The corresponding series is: <b>(&minus;1) + (&minus;${frac('1', '2')}) + (&minus;${frac('1', '6')}) + (&minus;${frac('1', '24')}) + (&minus;${frac('1', '120')}) + ...</b></div>`,
    `Terms: &minus;1, &minus;${frac('1', '2')}, &minus;${frac('1', '6')}, &minus;${frac('1', '24')}, &minus;${frac('1', '120')}`
  ));

  // Q13
  cards.push(qCard(
    13,
    `Write the first five terms of the sequence and obtain the corresponding series:<br/>
     <b><i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> = 2, &nbsp; <i>a<sub>n</sub></i> = <i>a</i><sub><i>n</i>&minus;1</sub> &minus; 1, &nbsp; <i>n</i> &gt; 2</b>.`,
    `<div>Given: <i>a</i><sub>1</sub> = 2, <i>a</i><sub>2</sub> = 2, and <i>a<sub>n</sub></i> = <i>a</i><sub><i>n</i>&minus;1</sub> &minus; 1 for <i>n</i> &gt; 2</div>
     <div>Computing successive terms:</div>
     <div>• For <i>n</i> = 3: &nbsp; <i>a</i><sub>3</sub> = <i>a</i><sub>2</sub> &minus; 1 = 2 &minus; 1 = <b>1</b></div>
     <div>• For <i>n</i> = 4: &nbsp; <i>a</i><sub>4</sub> = <i>a</i><sub>3</sub> &minus; 1 = 1 &minus; 1 = <b>0</b></div>
     <div>• For <i>n</i> = 5: &nbsp; <i>a</i><sub>5</sub> = <i>a</i><sub>4</sub> &minus; 1 = 0 &minus; 1 = <b>&minus;1</b></div>
     <div style="margin-top: 8px;">The first 5 terms are <b>2, 2, 1, 0, &minus;1</b>.</div>
     <div>The corresponding series is: <b>2 + 2 + 1 + 0 + (&minus;1) + ...</b></div>`,
    `Terms: 2, 2, 1, 0, &minus;1 &nbsp;|&nbsp; Series: 2 + 2 + 1 + 0 + (&minus;1) + ...`
  ));

  // Q14
  cards.push(qCard(
    14,
    `The Fibonacci sequence is defined by:<br/>
     <b>1 = <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub></b> and <b><i>a<sub>n</sub></i> = <i>a</i><sub><i>n</i>&minus;1</sub> + <i>a</i><sub><i>n</i>&minus;2</sub>, &nbsp; <i>n</i> &gt; 2</b>.<br/>
     Find <b>${frac('<i>a</i><sub><i>n</i>+1</sub>', '<i>a<sub>n</sub></i>')}</b> for <b><i>n</i> = 1, 2, 3, 4, 5</b>.`,
    `<div>Given: <i>a</i><sub>1</sub> = 1, <i>a</i><sub>2</sub> = 1, and <i>a<sub>n</sub></i> = <i>a</i><sub><i>n</i>&minus;1</sub> + <i>a</i><sub><i>n</i>&minus;2</sub></div>
     <div>Generating Fibonacci numbers up to <i>a</i><sub>6</sub>:</div>
     <div>• <i>a</i><sub>3</sub> = <i>a</i><sub>2</sub> + <i>a</i><sub>1</sub> = 1 + 1 = <b>2</b></div>
     <div>• <i>a</i><sub>4</sub> = <i>a</i><sub>3</sub> + <i>a</i><sub>2</sub> = 2 + 1 = <b>3</b></div>
     <div>• <i>a</i><sub>5</sub> = <i>a</i><sub>4</sub> + <i>a</i><sub>3</sub> = 3 + 2 = <b>5</b></div>
     <div>• <i>a</i><sub>6</sub> = <i>a</i><sub>5</sub> + <i>a</i><sub>4</sub> = 5 + 3 = <b>8</b></div>
     <div style="margin-top: 10px; color: #FFE082; font-weight: 700;">Evaluating the required ratios ${frac('<i>a</i><sub><i>n</i>+1</sub>', '<i>a<sub>n</sub></i>')}:</div>
     <div>• For <i>n</i> = 1: &nbsp; ${frac('<i>a</i><sub>2</sub>', '<i>a</i><sub>1</sub>')} = ${frac('1', '1')} = <b>1</b></div>
     <div>• For <i>n</i> = 2: &nbsp; ${frac('<i>a</i><sub>3</sub>', '<i>a</i><sub>2</sub>')} = ${frac('2', '1')} = <b>2</b></div>
     <div>• For <i>n</i> = 3: &nbsp; ${frac('<i>a</i><sub>4</sub>', '<i>a</i><sub>3</sub>')} = <b>${frac('3', '2')}</b></div>
     <div>• For <i>n</i> = 4: &nbsp; ${frac('<i>a</i><sub>5</sub>', '<i>a</i><sub>4</sub>')} = <b>${frac('5', '3')}</b></div>
     <div>• For <i>n</i> = 5: &nbsp; ${frac('<i>a</i><sub>6</sub>', '<i>a</i><sub>5</sub>')} = <b>${frac('8', '5')}</b></div>`,
    `1, &nbsp; 2, &nbsp; ${frac('3', '2')}, &nbsp; ${frac('5', '3')}, &nbsp; ${frac('8', '5')}`
  ));

  const banner = makeBanner("Exercise 8.1", "Sequences, General Terms & Fibonacci Recurrence");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx81 };
