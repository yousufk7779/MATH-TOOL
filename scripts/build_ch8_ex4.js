const { styleBlock, frac, makeBanner, qCard } = require('./ch8_common');

function generateEx84() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Find the sum to <i>n</i> terms of the series: &nbsp; <b>1 &times; 2 + 2 &times; 3 + 3 &times; 4 + 4 &times; 5 + ...</b>`,
    `<div>The <i>n</i><sup>th</sup> term of the series is:</div>
     <div>&rArr; <i>a<sub>n</sub></i> = <i>n</i>(<i>n</i> + 1) = <i>n</i><sup>2</sup> + <i>n</i></div>
     <div style="margin-top: 8px;">The sum of <i>n</i> terms is:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>a<sub>k</sub></i> = &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> (<i>k</i><sup>2</sup> + <i>k</i>) = &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i><sup>2</sup> + &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i></div>
     <div>Using standard sum formulas: &sum; <i>k</i><sup>2</sup> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} &nbsp; and &nbsp; &sum; <i>k</i> = ${frac('<i>n</i>(<i>n</i> + 1)', '2')}</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} + ${frac('<i>n</i>(<i>n</i> + 1)', '2')}</div>
     <div>Factoring out ${frac('<i>n</i>(<i>n</i> + 1)', '2')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '2')} [ ${frac('2<i>n</i> + 1', '3')} + 1 ] = ${frac('<i>n</i>(<i>n</i> + 1)', '2')} [ ${frac('2<i>n</i> + 4', '3')} ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '2')} &times; ${frac('2(<i>n</i> + 2)', '3')} = <b>${frac('<i>n</i>(<i>n</i> + 1)(<i>n</i> + 2)', '3')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(<i>n</i> + 2)', '3')}`
  ));

  // Q2
  cards.push(qCard(
    2,
    `Find the sum to <i>n</i> terms of the series: &nbsp; <b>1 &times; 2 &times; 3 + 2 &times; 3 &times; 4 + 3 &times; 4 &times; 5 + ...</b>`,
    `<div>The <i>n</i><sup>th</sup> term of the series is:</div>
     <div>&rArr; <i>a<sub>n</sub></i> = <i>n</i>(<i>n</i> + 1)(<i>n</i> + 2) = (<i>n</i><sup>2</sup> + <i>n</i>)(<i>n</i> + 2) = <i>n</i><sup>3</sup> + 3<i>n</i><sup>2</sup> + 2<i>n</i></div>
     <div style="margin-top: 8px;">Summing from <i>k</i> = 1 to <i>n</i>:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = &sum; <i>k</i><sup>3</sup> + 3&sum; <i>k</i><sup>2</sup> + 2&sum; <i>k</i></div>
     <div>&rArr; <i>S<sub>n</sub></i> = [ ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ]<sup>2</sup> + 3 [ ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} ] + 2 [ ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')} + ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '2')} + <i>n</i>(<i>n</i> + 1)</div>
     <div>Factoring out ${frac('<i>n</i>(<i>n</i> + 1)', '4')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '4')} [ <i>n</i>(<i>n</i> + 1) + 2(2<i>n</i> + 1) + 4 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '4')} [ <i>n</i><sup>2</sup> + <i>n</i> + 4<i>n</i> + 2 + 4 ] = ${frac('<i>n</i>(<i>n</i> + 1)', '4')} (<i>n</i><sup>2</sup> + 5<i>n</i> + 6)</div>
     <div>Factoring (<i>n</i><sup>2</sup> + 5<i>n</i> + 6) = (<i>n</i> + 2)(<i>n</i> + 3):</div>
     <div>&rArr; <b><i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(<i>n</i> + 2)(<i>n</i> + 3)', '4')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(<i>n</i> + 2)(<i>n</i> + 3)', '4')}`
  ));

  // Q3
  cards.push(qCard(
    3,
    `Find the sum to <i>n</i> terms of the series: &nbsp; <b>3 &times; 1<sup>2</sup> + 5 &times; 2<sup>2</sup> + 7 &times; 3<sup>2</sup> + ...</b>`,
    `<div>The <i>n</i><sup>th</sup> term of 3, 5, 7, ... is (2<i>n</i> + 1).</div>
     <div>The <i>n</i><sup>th</sup> term of 1<sup>2</sup>, 2<sup>2</sup>, 3<sup>2</sup>, ... is <i>n</i><sup>2</sup>.</div>
     <div>&rArr; <i>a<sub>n</sub></i> = (2<i>n</i> + 1)<i>n</i><sup>2</sup> = 2<i>n</i><sup>3</sup> + <i>n</i><sup>2</sup></div>
     <div style="margin-top: 8px;">Summing from <i>k</i> = 1 to <i>n</i>:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = 2&sum; <i>k</i><sup>3</sup> + &sum; <i>k</i><sup>2</sup></div>
     <div>&rArr; <i>S<sub>n</sub></i> = 2 [ ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')} ] + ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '2')} + ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')}</div>
     <div>Factoring out ${frac('<i>n</i>(<i>n</i> + 1)', '6')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '6')} [ 3<i>n</i>(<i>n</i> + 1) + (2<i>n</i> + 1) ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '6')} [ 3<i>n</i><sup>2</sup> + 3<i>n</i> + 2<i>n</i> + 1 ] = <b>${frac('<i>n</i>(<i>n</i> + 1)(3<i>n</i><sup>2</sup> + 5<i>n</i> + 1)', '6')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(3<i>n</i><sup>2</sup> + 5<i>n</i> + 1)', '6')}`
  ));

  // Q4
  cards.push(qCard(
    4,
    `Find the sum to <i>n</i> terms of the series: &nbsp; <b>${frac('1', '1 &times; 2')} + ${frac('1', '2 &times; 3')} + ${frac('1', '3 &times; 4')} + ...</b>`,
    `<div>The <i>n</i><sup>th</sup> term of the series is:</div>
     <div>&rArr; <i>a<sub>n</sub></i> = ${frac('1', '<i>n</i>(<i>n</i> + 1)')}</div>
     <div>Resolving into partial fractions:</div>
     <div>&rArr; <i>a<sub>n</sub></i> = ${frac('1', '<i>n</i>')} &minus; ${frac('1', '<i>n</i> + 1')}</div>
     <div style="margin-top: 8px;">Summing telescopically:</div>
     <div>• <i>a</i><sub>1</sub> = 1 &minus; ${frac('1', '2')}</div>
     <div>• <i>a</i><sub>2</sub> = ${frac('1', '2')} &minus; ${frac('1', '3')}</div>
     <div>• <i>a</i><sub>3</sub> = ${frac('1', '3')} &minus; ${frac('1', '4')}</div>
     <div>• ...</div>
     <div>• <i>a<sub>n</sub></i> = ${frac('1', '<i>n</i>')} &minus; ${frac('1', '<i>n</i> + 1')}</div>
     <div style="margin-top: 6px;">Adding all terms (all intermediate terms cancel):</div>
     <div>&rArr; <i>S<sub>n</sub></i> = 1 &minus; ${frac('1', '<i>n</i> + 1')} = ${frac('<i>n</i> + 1 &minus; 1', '<i>n</i> + 1')} = <b>${frac('<i>n</i>', '<i>n</i> + 1')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>', '<i>n</i> + 1')}`
  ));

  // Q5
  cards.push(qCard(
    5,
    `Find the sum to <i>n</i> terms of the series: &nbsp; <b>5<sup>2</sup> + 6<sup>2</sup> + 7<sup>2</sup> + ... + 20<sup>2</sup></b>.`,
    `<div>The given series is: 5<sup>2</sup> + 6<sup>2</sup> + 7<sup>2</sup> + ... + 20<sup>2</sup></div>
     <div>This can be expressed as the difference of two standard sums of squares:</div>
     <div>&rArr; <i>S</i> = &sum;<sub><i>k</i>=1</sub><sup>20</sup> <i>k</i><sup>2</sup> &minus; &sum;<sub><i>k</i>=1</sub><sup>4</sup> <i>k</i><sup>2</sup></div>
     <div style="margin-top: 8px;">Using &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i><sup>2</sup> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')}:</div>
     <div>• For <i>n</i> = 20: &nbsp; ${frac('20(21)(41)', '6')} = ${frac('17220', '6')} = <b>2870</b></div>
     <div>• For <i>n</i> = 4: &nbsp; ${frac('4(5)(9)', '6')} = ${frac('180', '6')} = <b>30</b></div>
     <div style="margin-top: 8px;">Subtracting:</div>
     <div>&rArr; <i>S</i> = 2870 &minus; 30 = <b>2840</b></div>`,
    `2840`
  ));

  // Q6
  cards.push(qCard(
    6,
    `Find the sum to <i>n</i> terms of the series: &nbsp; <b>3 &times; 8 + 6 &times; 11 + 9 &times; 14 + ...</b>`,
    `<div>The factors in each term form two arithmetic progressions:</div>
     <div>• First factor: 3, 6, 9, ... with <i>n</i><sup>th</sup> term = 3<i>n</i></div>
     <div>• Second factor: 8, 11, 14, ... with <i>n</i><sup>th</sup> term = 8 + (<i>n</i> &minus; 1)(3) = 3<i>n</i> + 5</div>
     <div>&rArr; <i>a<sub>n</sub></i> = (3<i>n</i>)(3<i>n</i> + 5) = 9<i>n</i><sup>2</sup> + 15<i>n</i></div>
     <div style="margin-top: 8px;">Summing to <i>n</i> terms:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = 9&sum; <i>k</i><sup>2</sup> + 15&sum; <i>k</i></div>
     <div>&rArr; <i>S<sub>n</sub></i> = 9 [ ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} ] + 15 [ ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('3<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '2')} + ${frac('15<i>n</i>(<i>n</i> + 1)', '2')}</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('3<i>n</i>(<i>n</i> + 1)', '2')} [ (2<i>n</i> + 1) + 5 ] = ${frac('3<i>n</i>(<i>n</i> + 1)', '2')} [ 2<i>n</i> + 6 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('3<i>n</i>(<i>n</i> + 1)', '2')} &times; 2(<i>n</i> + 3) = <b>3<i>n</i>(<i>n</i> + 1)(<i>n</i> + 3)</b></div>`,
    `<i>S<sub>n</sub></i> = 3<i>n</i>(<i>n</i> + 1)(<i>n</i> + 3)`
  ));

  // Q7
  cards.push(qCard(
    7,
    `Find the sum to <i>n</i> terms of the series: &nbsp; <b>1<sup>2</sup> + (1<sup>2</sup> + 2<sup>2</sup>) + (1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup>) + ...</b>`,
    `<div>The <i>n</i><sup>th</sup> term is the sum of squares of the first <i>n</i> natural numbers:</div>
     <div>&rArr; <i>a<sub>n</sub></i> = &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i><sup>2</sup> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} = ${frac('2<i>n</i><sup>3</sup> + 3<i>n</i><sup>2</sup> + <i>n</i>', '6')}</div>
     <div style="margin-top: 8px;">Summing <i>a<sub>k</sub></i> from <i>k</i> = 1 to <i>n</i>:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('1', '6')} [ 2&sum; <i>k</i><sup>3</sup> + 3&sum; <i>k</i><sup>2</sup> + &sum; <i>k</i> ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('1', '6')} [ 2 &times; ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')} + 3 &times; ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} + ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ]</div>
     <div>Factoring out ${frac('<i>n</i>(<i>n</i> + 1)', '12')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} [ <i>n</i>(<i>n</i> + 1) + (2<i>n</i> + 1) + 1 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} [ <i>n</i><sup>2</sup> + <i>n</i> + 2<i>n</i> + 2 ] = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} (<i>n</i><sup>2</sup> + 3<i>n</i> + 2)</div>
     <div>Since <i>n</i><sup>2</sup> + 3<i>n</i> + 2 = (<i>n</i> + 1)(<i>n</i> + 2):</div>
     <div>&rArr; <b><i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)<sup>2</sup>(<i>n</i> + 2)', '12')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)<sup>2</sup>(<i>n</i> + 2)', '12')}`
  ));

  // Q8
  cards.push(qCard(
    8,
    `Find the sum to <i>n</i> terms of the series whose <i>n</i><sup>th</sup> term is given by <b><i>n</i>(<i>n</i> + 1)(<i>n</i> + 4)</b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = <i>n</i>(<i>n</i> + 1)(<i>n</i> + 4)</div>
     <div>Expanding: <i>a<sub>n</sub></i> = <i>n</i>(<i>n</i><sup>2</sup> + 5<i>n</i> + 4) = <i>n</i><sup>3</sup> + 5<i>n</i><sup>2</sup> + 4<i>n</i></div>
     <div style="margin-top: 8px;">Summing to <i>n</i> terms:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = &sum; <i>k</i><sup>3</sup> + 5&sum; <i>k</i><sup>2</sup> + 4&sum; <i>k</i></div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i><sup>2</sup>(<i>n</i> + 1)<sup>2</sup>', '4')} + 5 [ ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} ] + 4 [ ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ]</div>
     <div>Factoring out ${frac('<i>n</i>(<i>n</i> + 1)', '12')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} [ 3<i>n</i>(<i>n</i> + 1) + 10(2<i>n</i> + 1) + 24 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)', '12')} [ 3<i>n</i><sup>2</sup> + 3<i>n</i> + 20<i>n</i> + 10 + 24 ]</div>
     <div>&rArr; <b><i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(3<i>n</i><sup>2</sup> + 23<i>n</i> + 34)', '12')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(3<i>n</i><sup>2</sup> + 23<i>n</i> + 34)', '12')}`
  ));

  // Q9
  cards.push(qCard(
    9,
    `Find the sum to <i>n</i> terms of the series whose <i>n</i><sup>th</sup> term is given by <b><i>n</i><sup>2</sup> + 2<sup><i>n</i></sup></b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = <i>n</i><sup>2</sup> + 2<sup><i>n</i></sup></div>
     <div style="margin-top: 8px;">Summing to <i>n</i> terms:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> (<i>k</i><sup>2</sup> + 2<sup><i>k</i></sup>) = &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i><sup>2</sup> + &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> 2<sup><i>k</i></sup></div>
     <div>• &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i><sup>2</sup> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')}</div>
     <div>• &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> 2<sup><i>k</i></sup> = 2<sup>1</sup> + 2<sup>2</sup> + ... + 2<sup><i>n</i></sup> = ${frac('2(2<sup><i>n</i></sup> &minus; 1)', '2 &minus; 1')} = 2(2<sup><i>n</i></sup> &minus; 1)</div>
     <div style="margin-top: 8px;">Combining both components:</div>
     <div>&rArr; <b><i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} + 2(2<sup><i>n</i></sup> &minus; 1)</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} + 2(2<sup><i>n</i></sup> &minus; 1)`
  ));

  // Q10
  cards.push(qCard(
    10,
    `Find the sum to <i>n</i> terms of the series whose <i>n</i><sup>th</sup> term is given by <b>(2<i>n</i> &minus; 1)<sup>2</sup></b>.`,
    `<div>Given: <i>a<sub>n</sub></i> = (2<i>n</i> &minus; 1)<sup>2</sup></div>
     <div>Expanding: <i>a<sub>n</sub></i> = 4<i>n</i><sup>2</sup> &minus; 4<i>n</i> + 1</div>
     <div style="margin-top: 8px;">Summing to <i>n</i> terms:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = 4&sum; <i>k</i><sup>2</sup> &minus; 4&sum; <i>k</i> + &sum; 1</div>
     <div>&rArr; <i>S<sub>n</sub></i> = 4 [ ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')} ] &minus; 4 [ ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ] + <i>n</i></div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('2<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '3')} &minus; 2<i>n</i>(<i>n</i> + 1) + <i>n</i></div>
     <div>Factoring out ${frac('<i>n</i>', '3')}:</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '3')} [ 2(2<i>n</i><sup>2</sup> + 3<i>n</i> + 1) &minus; 6(<i>n</i> + 1) + 3 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '3')} [ 4<i>n</i><sup>2</sup> + 6<i>n</i> + 2 &minus; 6<i>n</i> &minus; 6 + 3 ]</div>
     <div>&rArr; <i>S<sub>n</sub></i> = ${frac('<i>n</i>', '3')} [ 4<i>n</i><sup>2</sup> &minus; 1 ] = <b>${frac('<i>n</i>(2<i>n</i> &minus; 1)(2<i>n</i> + 1)', '3')}</b></div>`,
    `<i>S<sub>n</sub></i> = ${frac('<i>n</i>(2<i>n</i> &minus; 1)(2<i>n</i> + 1)', '3')}`
  ));

  const banner = makeBanner("Exercise 8.4", "Special Series: Sum of First n Natural Numbers, Squares & Cubes");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx84 };
