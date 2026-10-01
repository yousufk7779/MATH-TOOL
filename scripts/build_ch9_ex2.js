const { styleBlock, frac, makeBanner, qCard } = require('./ch9_common');

function generateEx92() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Write the equations for the <b><i>x</i>- and <i>y</i>-axes</b>.`,
    `<div>1. For the <i>x</i>-axis:</div>
     <div>Every point on the <i>x</i>-axis has its <i>y</i>-coordinate equal to 0.</div>
     <div>&rArr; Equation of <i>x</i>-axis: <b><i>y</i> = 0</b></div>
     <div style="margin-top: 8px;">2. For the <i>y</i>-axis:</div>
     <div>Every point on the <i>y</i>-axis has its <i>x</i>-coordinate equal to 0.</div>
     <div>&rArr; Equation of <i>y</i>-axis: <b><i>x</i> = 0</b></div>`,
    `<i>x</i>-axis: <i>y</i> = 0, &nbsp; <i>y</i>-axis: <i>x</i> = 0`
  ));

  // Q2
  cards.push(qCard(
    2,
    `Find the equation of the line passing through the point <b>(&minus;4, 3)</b> with slope <b>${frac('1', '2')}</b>.`,
    `<div>Given point: (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) = (&minus;4, 3) and slope <i>m</i> = ${frac('1', '2')}</div>
     <div>Using point-slope form: <b><i>y</i> &minus; <i>y</i><sub>0</sub> = <i>m</i>(<i>x</i> &minus; <i>x</i><sub>0</sub>)</b></div>
     <div>&rArr; <i>y</i> &minus; 3 = ${frac('1', '2')}[<i>x</i> &minus; (&minus;4)]</div>
     <div>&rArr; <i>y</i> &minus; 3 = ${frac('1', '2')}(<i>x</i> + 4)</div>
     <div>Multiplying both sides by 2:</div>
     <div>&rArr; 2(<i>y</i> &minus; 3) = <i>x</i> + 4</div>
     <div>&rArr; 2<i>y</i> &minus; 6 = <i>x</i> + 4</div>
     <div>&rArr; <b><i>x</i> &minus; 2<i>y</i> + 10 = 0</b></div>`,
    `<i>x</i> &minus; 2<i>y</i> + 10 = 0`
  ));

  // Q3
  cards.push(qCard(
    3,
    `Find the equation of the line passing through <b>(0, 0)</b> with slope <b><i>m</i></b>.`,
    `<div>Given point: (0, 0) and slope = <i>m</i></div>
     <div>Using point-slope form: <i>y</i> &minus; <i>y</i><sub>0</sub> = <i>m</i>(<i>x</i> &minus; <i>x</i><sub>0</sub>)</div>
     <div>&rArr; <i>y</i> &minus; 0 = <i>m</i>(<i>x</i> &minus; 0)</div>
     <div>&rArr; <i>y</i> = <i>mx</i> &rArr; <b><i>mx</i> &minus; <i>y</i> = 0</b></div>`,
    `<i>y</i> = <i>mx</i> &nbsp; (or <i>mx</i> &minus; <i>y</i> = 0)`
  ));

  // Q4
  cards.push(qCard(
    4,
    `Find the equation of the line passing through <b>(2, 2&radic;3)</b> and inclined with the <i>x</i>-axis at an angle of <b>75&deg;</b>.`,
    `<div>Given point: (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) = (2, 2&radic;3) and inclination &theta; = 75&deg;</div>
     <div style="margin-top: 6px;">1. Finding the slope <i>m</i> = tan 75&deg;:</div>
     <div>&rArr; tan 75&deg; = tan (45&deg; + 30&deg;) = ${frac('tan 45&deg; + tan 30&deg;', '1 &minus; tan 45&deg; tan 30&deg;')} = ${frac('1 + 1/&radic;3', '1 &minus; 1/&radic;3')} = ${frac('&radic;3 + 1', '&radic;3 &minus; 1')}</div>
     <div>Rationalizing: ${frac('(&radic;3 + 1)<sup>2</sup>', '(&radic;3 &minus; 1)(&radic;3 + 1)')} = ${frac('3 + 1 + 2&radic;3', '2')} = ${frac('4 + 2&radic;3', '2')} = <b>2 + &radic;3</b></div>
     <div style="margin-top: 8px;">2. Using point-slope form: <i>y</i> &minus; <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> &minus; <i>x</i><sub>1</sub>)</div>
     <div>&rArr; <i>y</i> &minus; 2&radic;3 = (2 + &radic;3)(<i>x</i> &minus; 2)</div>
     <div>&rArr; <i>y</i> &minus; 2&radic;3 = (2 + &radic;3)<i>x</i> &minus; 2(2 + &radic;3) = (2 + &radic;3)<i>x</i> &minus; 4 &minus; 2&radic;3</div>
     <div>Cancelling &minus;2&radic;3 from both sides:</div>
     <div>&rArr; <b>(2 + &radic;3)<i>x</i> &minus; <i>y</i> &minus; 4 = 0</b></div>`,
    `(2 + &radic;3)<i>x</i> &minus; <i>y</i> &minus; 4 = 0`
  ));

  // Q5
  cards.push(qCard(
    5,
    `Find the equation of the line intersecting the <b><i>x</i>-axis at a distance of 3 units to the left of origin</b> with slope <b>&minus;2</b>.`,
    `<div>• Intersecting <i>x</i>-axis at 3 units to the left of origin &rArr; <i>x</i>-intercept <i>d</i> = &minus;3, point = <b>(&minus;3, 0)</b>.</div>
     <div>• Slope: <i>m</i> = &minus;2</div>
     <div style="margin-top: 8px;">Using intercept/point-slope form: <i>y</i> = <i>m</i>(<i>x</i> &minus; <i>d</i>)</div>
     <div>&rArr; <i>y</i> = &minus;2[<i>x</i> &minus; (&minus;3)] = &minus;2(<i>x</i> + 3)</div>
     <div>&rArr; <i>y</i> = &minus;2<i>x</i> &minus; 6</div>
     <div>&rArr; <b>2<i>x</i> + <i>y</i> + 6 = 0</b></div>`,
    `2<i>x</i> + <i>y</i> + 6 = 0`
  ));

  // Q6
  cards.push(qCard(
    6,
    `Find the equation of the line intersecting the <b><i>y</i>-axis at a distance of 2 units above the origin</b> and making an angle of <b>30&deg; with the positive direction of the <i>x</i>-axis</b>.`,
    `<div>• <i>y</i>-intercept: <i>c</i> = 2 &rArr; point = (0, 2)</div>
     <div>• Angle with positive <i>x</i>-axis: &theta; = 30&deg; &rArr; slope <i>m</i> = tan 30&deg; = <b>${frac('1', '&radic;3')}</b></div>
     <div style="margin-top: 8px;">Using slope-intercept form: <i>y</i> = <i>mx</i> + <i>c</i></div>
     <div>&rArr; <i>y</i> = (${frac('1', '&radic;3')})<i>x</i> + 2</div>
     <div>Multiplying by &radic;3:</div>
     <div>&rArr; &radic;3<i>y</i> = <i>x</i> + 2&radic;3</div>
     <div>&rArr; <b><i>x</i> &minus; &radic;3<i>y</i> + 2&radic;3 = 0</b></div>`,
    `<i>x</i> &minus; &radic;3<i>y</i> + 2&radic;3 = 0`
  ));

  // Q7
  cards.push(qCard(
    7,
    `Find the equation of the line passing through the points <b>(&minus;1, 1) and (2, &minus;4)</b>.`,
    `<div>Given points: (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) = (&minus;1, 1) and (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>) = (2, &minus;4)</div>
     <div>Using two-point form: <b><i>y</i> &minus; <i>y</i><sub>1</sub> = ${frac('<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>', '<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>')}(<i>x</i> &minus; <i>x</i><sub>1</sub>)</b></div>
     <div>&rArr; <i>y</i> &minus; 1 = ${frac('&minus;4 &minus; 1', '2 &minus; (&minus;1)')}[<i>x</i> &minus; (&minus;1)]</div>
     <div>&rArr; <i>y</i> &minus; 1 = ${frac('&minus;5', '3')}(<i>x</i> + 1)</div>
     <div>Cross-multiplying:</div>
     <div>&rArr; 3(<i>y</i> &minus; 1) = &minus;5(<i>x</i> + 1)</div>
     <div>&rArr; 3<i>y</i> &minus; 3 = &minus;5<i>x</i> &minus; 5</div>
     <div>&rArr; <b>5<i>x</i> + 3<i>y</i> + 2 = 0</b></div>`,
    `5<i>x</i> + 3<i>y</i> + 2 = 0`
  ));

  // Q8
  cards.push(qCard(
    8,
    `Find the equation of the line whose <b>perpendicular distance from the origin is 5 units</b>, and the angle made by the perpendicular with the positive <i>x</i>-axis is <b>30&deg;</b>.`,
    `<div>Given normal parameters: <i>p</i> = 5 and &omega; = 30&deg;</div>
     <div>Using normal form of the line equation: <b><i>x</i> cos &omega; + <i>y</i> sin &omega; = <i>p</i></b></div>
     <div>&rArr; <i>x</i> cos 30&deg; + <i>y</i> sin 30&deg; = 5</div>
     <div>Substituting trigonometric values: cos 30&deg; = ${frac('&radic;3', '2')}, &nbsp; sin 30&deg; = ${frac('1', '2')}</div>
     <div>&rArr; <i>x</i> (${frac('&radic;3', '2')}) + <i>y</i> (${frac('1', '2')}) = 5</div>
     <div>Multiplying throughout by 2:</div>
     <div>&rArr; <b>&radic;3<i>x</i> + <i>y</i> &minus; 10 = 0</b></div>`,
    `&radic;3<i>x</i> + <i>y</i> &minus; 10 = 0`
  ));

  // Q9
  cards.push(qCard(
    9,
    `The vertices of &Delta;<i>PQR</i> are <b><i>P</i>(2, 1), <i>Q</i>(&minus;2, 3) and <i>R</i>(4, 5)</b>. Find the equation of the <b>median through the vertex <i>R</i></b>.`,
    `<div>The median from <i>R</i> intersects the opposite side <i>PQ</i> at its midpoint <i>L</i>.</div>
     <div style="margin-top: 6px;">1. Coordinates of midpoint <i>L</i> of <i>PQ</i>:</div>
     <div>&rArr; <i>L</i> = (${frac('2 + (&minus;2)', '2')}, ${frac('1 + 3', '2')}) = (0, 2)</div>
     <div style="margin-top: 8px;">2. Finding the equation of line <i>RL</i> passing through <i>R</i>(4, 5) and <i>L</i>(0, 2):</div>
     <div>Slope of <i>RL</i>: <i>m</i> = ${frac('2 &minus; 5', '0 &minus; 4')} = ${frac('&minus;3', '&minus;4')} = <b>${frac('3', '4')}</b></div>
     <div>Using point-slope form with <i>L</i>(0, 2):</div>
     <div>&rArr; <i>y</i> &minus; 2 = ${frac('3', '4')}(<i>x</i> &minus; 0)</div>
     <div>&rArr; 4(<i>y</i> &minus; 2) = 3<i>x</i></div>
     <div>&rArr; 4<i>y</i> &minus; 8 = 3<i>x</i> &rArr; <b>3<i>x</i> &minus; 4<i>y</i> + 8 = 0</b></div>`,
    `3<i>x</i> &minus; 4<i>y</i> + 8 = 0`
  ));

  // Q10
  cards.push(qCard(
    10,
    `Find the equation of the line passing through <b>(&minus;3, 5)</b> and <b>perpendicular to the line through the points (2, 5) and (&minus;3, 6)</b>.`,
    `<div>1. Finding the slope <i>m</i><sub>1</sub> of the line joining (2, 5) and (&minus;3, 6):</div>
     <div>&rArr; <i>m</i><sub>1</sub> = ${frac('6 &minus; 5', '&minus;3 &minus; 2')} = ${frac('1', '&minus;5')} = &minus;${frac('1', '5')}</div>
     <div style="margin-top: 8px;">2. Finding the slope <i>m</i> of the perpendicular line:</div>
     <div>Since the lines are perpendicular: <i>m</i> &times; <i>m</i><sub>1</sub> = &minus;1</div>
     <div>&rArr; <i>m</i> = &minus;${frac('1', '<i>m</i><sub>1</sub>')} = &minus;${frac('1', '&minus;1/5')} = <b>5</b></div>
     <div style="margin-top: 8px;">3. Equation of line through (&minus;3, 5) with slope 5:</div>
     <div>&rArr; <i>y</i> &minus; 5 = 5[<i>x</i> &minus; (&minus;3)] = 5(<i>x</i> + 3)</div>
     <div>&rArr; <i>y</i> &minus; 5 = 5<i>x</i> + 15</div>
     <div>&rArr; <b>5<i>x</i> &minus; <i>y</i> + 20 = 0</b></div>`,
    `5<i>x</i> &minus; <i>y</i> + 20 = 0`
  ));

  // Q11
  cards.push(qCard(
    11,
    `A line perpendicular to the line segment joining the points <b>(1, 0) and (2, 3)</b> divides it in the <b>ratio 1 : <i>n</i></b>. Find the equation of the line.`,
    `<div>1. Finding the point of division <i>P</i> dividing segment (1, 0) to (2, 3) in ratio 1 : <i>n</i>:</div>
     <div>Using section formula:</div>
     <div>&rArr; <i>x</i> = ${frac('1(2) + <i>n</i>(1)', '1 + <i>n</i>')} = ${frac('<i>n</i> + 2', '<i>n</i> + 1')}</div>
     <div>&rArr; <i>y</i> = ${frac('1(3) + <i>n</i>(0)', '1 + <i>n</i>')} = ${frac('3', '<i>n</i> + 1')}</div>
     <div style="margin-top: 8px;">2. Slope of the given line segment:</div>
     <div>&rArr; <i>m</i><sub>1</sub> = ${frac('3 &minus; 0', '2 &minus; 1')} = 3</div>
     <div>Slope of the perpendicular line: <i>m</i> = &minus;${frac('1', '<i>m</i><sub>1</sub>')} = <b>&minus;${frac('1', '3')}</b></div>
     <div style="margin-top: 8px;">3. Finding the equation of the line:</div>
     <div>&rArr; <i>y</i> &minus; ${frac('3', '<i>n</i> + 1')} = &minus;${frac('1', '3')} [ <i>x</i> &minus; ${frac('<i>n</i> + 2', '<i>n</i> + 1')} ]</div>
     <div>Multiplying both sides by 3(<i>n</i> + 1):</div>
     <div>&rArr; 3(<i>n</i> + 1)<i>y</i> &minus; 9 = &minus;(<i>n</i> + 1)<i>x</i> + (<i>n</i> + 2)</div>
     <div>&rArr; <b>(1 + <i>n</i>)<i>x</i> + 3(1 + <i>n</i>)<i>y</i> &minus; <i>n</i> &minus; 11 = 0</b></div>`,
    `(1 + <i>n</i>)<i>x</i> + 3(1 + <i>n</i>)<i>y</i> &minus; <i>n</i> &minus; 11 = 0`
  ));

  // Q12
  cards.push(qCard(
    12,
    `Find the equation of a line that cuts off <b>equal intercepts on the coordinate axes</b> and passes through the point <b>(2, 3)</b>.`,
    `<div>Let the equal intercepts on the axes be <i>a</i> and <i>b</i> with <i>a</i> = <i>b</i>.</div>
     <div>Using intercept form: ${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 1</div>
     <div>&rArr; ${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>a</i>')} = 1 &rArr; <b><i>x</i> + <i>y</i> = <i>a</i></b> &nbsp; ... (1)</div>
     <div style="margin-top: 8px;">Since the line passes through (2, 3):</div>
     <div>&rArr; 2 + 3 = <i>a</i> &rArr; <b><i>a</i> = 5</b></div>
     <div>Substituting <i>a</i> = 5 into (1):</div>
     <div>&rArr; <b><i>x</i> + <i>y</i> &minus; 5 = 0</b></div>`,
    `<i>x</i> + <i>y</i> &minus; 5 = 0`
  ));

  // Q13
  cards.push(qCard(
    13,
    `Find the equation of the line passing through the point <b>(2, 2)</b> and cutting off <b>intercepts on the axes whose sum is 9</b>.`,
    `<div>Let the intercepts on the <i>x</i>- and <i>y</i>-axes be <i>a</i> and <i>b</i>.</div>
     <div>Given: <i>a</i> + <i>b</i> = 9 &rArr; <b><i>b</i> = 9 &minus; <i>a</i></b></div>
     <div>Equation of the line in intercept form:</div>
     <div>&rArr; ${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '9 &minus; <i>a</i>')} = 1</div>
     <div style="margin-top: 8px;">Since the line passes through (2, 2):</div>
     <div>&rArr; ${frac('2', '<i>a</i>')} + ${frac('2', '9 &minus; <i>a</i>')} = 1</div>
     <div>&rArr; ${frac('2(9 &minus; <i>a</i>) + 2<i>a</i>', '<i>a</i>(9 &minus; <i>a</i>)')} = 1 &rArr; ${frac('18', '9<i>a</i> &minus; <i>a</i><sup>2</sup>')} = 1</div>
     <div>&rArr; 9<i>a</i> &minus; <i>a</i><sup>2</sup> = 18 &rArr; <i>a</i><sup>2</sup> &minus; 9<i>a</i> + 18 = 0</div>
     <div>&rArr; (<i>a</i> &minus; 3)(<i>a</i> &minus; 6) = 0 &rArr; <b><i>a</i> = 3</b> &nbsp; or &nbsp; <b><i>a</i> = 6</b></div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">Finding line equations:</div>
     <div>• If <i>a</i> = 3: <i>b</i> = 9 &minus; 3 = 6 &rArr; ${frac('<i>x</i>', '3')} + ${frac('<i>y</i>', '6')} = 1 &rArr; <b>2<i>x</i> + <i>y</i> &minus; 6 = 0</b></div>
     <div>• If <i>a</i> = 6: <i>b</i> = 9 &minus; 6 = 3 &rArr; ${frac('<i>x</i>', '6')} + ${frac('<i>y</i>', '3')} = 1 &rArr; <b><i>x</i> + 2<i>y</i> &minus; 6 = 0</b></div>`,
    `2<i>x</i> + <i>y</i> &minus; 6 = 0 &nbsp; OR &nbsp; <i>x</i> + 2<i>y</i> &minus; 6 = 0`
  ));

  // Q14
  cards.push(qCard(
    14,
    `Find the equation of the line through the point <b>(0, 2)</b>, making an angle <b>${frac('2&pi;', '3')} with the positive <i>x</i>-axis</b>. Also, find the equation of the line <b>parallel to it and crossing the <i>y</i>-axis at a distance of 2 units below the origin</b>.`,
    `<div>1. For the first line through (0, 2):</div>
     <div>Angle &theta; = ${frac('2&pi;', '3')} = 120&deg;</div>
     <div>&rArr; Slope <i>m</i> = tan 120&deg; = tan (180&deg; &minus; 60&deg;) = &minus;tan 60&deg; = <b>&minus;&radic;3</b></div>
     <div>Using point-slope form with (0, 2):</div>
     <div>&rArr; <i>y</i> &minus; 2 = &minus;&radic;3(<i>x</i> &minus; 0)</div>
     <div>&rArr; <b>&radic;3<i>x</i> + <i>y</i> &minus; 2 = 0</b></div>
     <div style="margin-top: 8px;">2. For the parallel line crossing <i>y</i>-axis 2 units below the origin:</div>
     <div>Point = (0, &minus;2) and parallel slope <i>m</i> = &minus;&radic;3</div>
     <div>&rArr; <i>y</i> &minus; (&minus;2) = &minus;&radic;3(<i>x</i> &minus; 0)</div>
     <div>&rArr; <i>y</i> + 2 = &minus;&radic;3<i>x</i> &rArr; <b>&radic;3<i>x</i> + <i>y</i> + 2 = 0</b></div>`,
    `Line 1: &radic;3<i>x</i> + <i>y</i> &minus; 2 = 0 &nbsp;|&nbsp; Line 2: &radic;3<i>x</i> + <i>y</i> + 2 = 0`
  ));

  // Q15
  cards.push(qCard(
    15,
    `The perpendicular from the origin to a line meets it at the point <b>(&minus;2, 9)</b>. Find the equation of the line.`,
    `<div>Let <i>O</i>(0, 0) and <i>P</i>(&minus;2, 9).</div>
     <div>The line segment <i>OP</i> is perpendicular to the required line.</div>
     <div>• Slope of <i>OP</i>: &nbsp; <i>m</i><sub>1</sub> = ${frac('9 &minus; 0', '&minus;2 &minus; 0')} = &minus;${frac('9', '2')}</div>
     <div>• Slope of the required line <i>m</i>: &nbsp; <i>m</i> &times; <i>m</i><sub>1</sub> = &minus;1</div>
     <div>&rArr; <i>m</i> = &minus;${frac('1', '&minus;9/2')} = <b>${frac('2', '9')}</b></div>
     <div style="margin-top: 8px;">The line passes through (&minus;2, 9) with slope ${frac('2', '9')}:</div>
     <div>&rArr; <i>y</i> &minus; 9 = ${frac('2', '9')}[<i>x</i> &minus; (&minus;2)] = ${frac('2', '9')}(<i>x</i> + 2)</div>
     <div>&rArr; 9(<i>y</i> &minus; 9) = 2(<i>x</i> + 2)</div>
     <div>&rArr; 9<i>y</i> &minus; 81 = 2<i>x</i> + 4</div>
     <div>&rArr; <b>2<i>x</i> &minus; 9<i>y</i> + 85 = 0</b></div>`,
    `2<i>x</i> &minus; 9<i>y</i> + 85 = 0`
  ));

  // Q16
  cards.push(qCard(
    16,
    `The length <i>L</i> (in centimetres) of a copper rod is a linear function of its Celsius temperature <i>C</i>. In an experiment, if <b><i>L</i> = 124.942 when <i>C</i> = 20</b> and <b><i>L</i> = 125.134 when <i>C</i> = 110</b>, express <i>L</i> in terms of <i>C</i>.`,
    `<div>We have two data points in the (<i>C</i>, <i>L</i>) plane:</div>
     <div>(<i>C</i><sub>1</sub>, <i>L</i><sub>1</sub>) = (20, 124.942) &nbsp; and &nbsp; (<i>C</i><sub>2</sub>, <i>L</i><sub>2</sub>) = (110, 125.134)</div>
     <div style="margin-top: 6px;">Finding the slope:</div>
     <div>&rArr; <i>m</i> = ${frac('<i>L</i><sub>2</sub> &minus; <i>L</i><sub>1</sub>', '<i>C</i><sub>2</sub> &minus; <i>C</i><sub>1</sub>')} = ${frac('125.134 &minus; 124.942', '110 &minus; 20')} = ${frac('0.192', '90')}</div>
     <div style="margin-top: 8px;">Using two-point form:</div>
     <div>&rArr; <i>L</i> &minus; <i>L</i><sub>1</sub> = <i>m</i>(<i>C</i> &minus; <i>C</i><sub>1</sub>)</div>
     <div>&rArr; <i>L</i> &minus; 124.942 = ${frac('0.192', '90')}(<i>C</i> &minus; 20)</div>
     <div>&rArr; <b><i>L</i> = ${frac('0.192', '90')}(<i>C</i> &minus; 20) + 124.942</b></div>`,
    `<i>L</i> = ${frac('0.192', '90')}(<i>C</i> &minus; 20) + 124.942`
  ));

  // Q17
  cards.push(qCard(
    17,
    `The owner of a milk store finds that he can sell <b>980 litres of milk each week at Rs. 14/litre</b> and <b>1220 litres of milk each week at Rs. 16/litre</b>. Assuming a linear relationship between the selling price and demand, how many litres could he sell weekly at <b>Rs. 17/litre</b>?`,
    `<div>Let selling price per litre be <i>x</i> (Rs) and weekly demand be <i>y</i> (litres).</div>
     <div>Given two data points: (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) = (14, 980) &nbsp; and &nbsp; (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>) = (16, 1220).</div>
     <div style="margin-top: 6px;">Finding slope <i>m</i>:</div>
     <div>&rArr; <i>m</i> = ${frac('1220 &minus; 980', '16 &minus; 14')} = ${frac('240', '2')} = <b>120</b></div>
     <div style="margin-top: 8px;">Linear demand equation:</div>
     <div>&rArr; <i>y</i> &minus; 980 = 120(<i>x</i> &minus; 14)</div>
     <div>When selling price <i>x</i> = Rs 17/litre:</div>
     <div>&rArr; <i>y</i> &minus; 980 = 120(17 &minus; 14) = 120(3) = 360</div>
     <div>&rArr; <i>y</i> = 980 + 360 = <b>1340 litres</b></div>`,
    `1340 litres`
  ));

  // Q18
  cards.push(qCard(
    18,
    `<b><i>P</i>(<i>a</i>, <i>b</i>)</b> is the mid-point of a line segment between axes. Show that the equation of the line is <b>${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 2</b>.`,
    `<div>Let the line intersect the <i>x</i>-axis at <i>A</i>(<i>x</i><sub>0</sub>, 0) and the <i>y</i>-axis at <i>B</i>(0, <i>y</i><sub>0</sub>).</div>
     <div>Since <i>P</i>(<i>a</i>, <i>b</i>) is the midpoint of segment <i>AB</i>:</div>
     <div>&rArr; (${frac('<i>x</i><sub>0</sub> + 0', '2')}, ${frac('0 + <i>y</i><sub>0</sub>', '2')}) = (<i>a</i>, <i>b</i>)</div>
     <div>&rArr; ${frac('<i>x</i><sub>0</sub>', '2')} = <i>a</i> &rArr; <b><i>x</i><sub>0</sub> = 2<i>a</i></b> &nbsp; (<i>x</i>-intercept)</div>
     <div>&rArr; ${frac('<i>y</i><sub>0</sub>', '2')} = <i>b</i> &rArr; <b><i>y</i><sub>0</sub> = 2<i>b</i></b> &nbsp; (<i>y</i>-intercept)</div>
     <div style="margin-top: 8px;">Writing the equation of the line in intercept form:</div>
     <div>&rArr; ${frac('<i>x</i>', '<i>x</i><sub>0</sub>')} + ${frac('<i>y</i>', '<i>y</i><sub>0</sub>')} = 1</div>
     <div>&rArr; ${frac('<i>x</i>', '2<i>a</i>')} + ${frac('<i>y</i>', '2<i>b</i>')} = 1</div>
     <div>Multiplying both sides by 2:</div>
     <div>&rArr; <b>${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 2</b></div>`,
    `${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 2 &nbsp; (Hence Proved)`
  ));

  // Q19
  cards.push(qCard(
    19,
    `Point <b><i>R</i>(<i>h</i>, <i>k</i>)</b> divides a line segment between the axes in the <b>ratio 1 : 2</b>. Find the equation of the line.`,
    `<div>Let the line segment meet the <i>x</i>-axis at <i>A</i>(<i>a</i>, 0) and <i>y</i>-axis at <i>B</i>(0, <i>b</i>).</div>
     <div>The point <i>R</i>(<i>h</i>, <i>k</i>) divides <i>AB</i> in the ratio 1 : 2:</div>
     <div>Using the section formula:</div>
     <div>&rArr; <i>h</i> = ${frac('1(0) + 2(<i>a</i>)', '1 + 2')} = ${frac('2<i>a</i>', '3')} &rArr; <b><i>a</i> = ${frac('3<i>h</i>', '2')}</b></div>
     <div>&rArr; <i>k</i> = ${frac('1(<i>b</i>) + 2(0)', '1 + 2')} = ${frac('<i>b</i>', '3')} &rArr; <b><i>b</i> = 3<i>k</i></b></div>
     <div style="margin-top: 8px;">Using the intercept form ${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 1:</div>
     <div>&rArr; ${frac('<i>x</i>', '3<i>h</i>/2')} + ${frac('<i>y</i>', '3<i>k</i>')} = 1</div>
     <div>&rArr; <b>${frac('2<i>x</i>', '3<i>h</i>')} + ${frac('<i>y</i>', '3<i>k</i>')} = 1</b> &nbsp; or &nbsp; <b>2<i>kx</i> + <i>hy</i> = 3<i>hk</i></b></div>`,
    `${frac('2<i>x</i>', '3<i>h</i>')} + ${frac('<i>y</i>', '3<i>k</i>')} = 1`
  ));

  // Q20
  cards.push(qCard(
    20,
    `By using the concept of the equation of a line, prove that the three points <b>(3, 0), (&minus;2, &minus;2) and (8, 2)</b> are collinear.`,
    `<div>Let <i>A</i>(3, 0), <i>B</i>(&minus;2, &minus;2), and <i>C</i>(8, 2).</div>
     <div style="margin-top: 6px;">1. Equation of the line passing through <i>A</i>(3, 0) and <i>B</i>(&minus;2, &minus;2):</div>
     <div>Slope <i>m</i> = ${frac('&minus;2 &minus; 0', '&minus;2 &minus; 3')} = ${frac('&minus;2', '&minus;5')} = <b>${frac('2', '5')}</b></div>
     <div>Equation: <i>y</i> &minus; 0 = ${frac('2', '5')}(<i>x</i> &minus; 3)</div>
     <div>&rArr; 5<i>y</i> = 2<i>x</i> &minus; 6 &rArr; <b>2<i>x</i> &minus; 5<i>y</i> &minus; 6 = 0</b></div>
     <div style="margin-top: 8px;">2. Checking if point <i>C</i>(8, 2) satisfies this equation:</div>
     <div>L.H.S. = 2(8) &minus; 5(2) &minus; 6 = 16 &minus; 10 &minus; 6 = 16 &minus; 16 = <b>0 = R.H.S.</b></div>
     <div>Since the coordinates of <i>C</i>(8, 2) satisfy the line equation, point <i>C</i> lies on the line joining <i>A</i> and <i>B</i>.</div>
     <div>Therefore, <b>the three points are collinear</b>.</div>`,
    `Points are collinear &nbsp; (Hence Proved)`
  ));

  const banner = makeBanner("Exercise 9.2", "Various Forms of Equations of a Line");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx92 };
