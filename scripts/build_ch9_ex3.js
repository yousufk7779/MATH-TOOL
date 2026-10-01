const { styleBlock, frac, makeBanner, qCard } = require('./ch9_common');

function generateEx93() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Reduce the following equations into <b>slope-intercept form</b> (<i>y</i> = <i>mx</i> + <i>c</i>) and find their slopes and the <i>y</i>-intercepts:<br/>
     <b>(i) <i>x</i> + 7<i>y</i> = 0</b><br/>
     <b>(ii) 6<i>x</i> + 3<i>y</i> &minus; 5 = 0</b><br/>
     <b>(iii) <i>y</i> = 0</b>`,
    `<div><b>(i) <i>x</i> + 7<i>y</i> = 0:</b></div>
     <div>&rArr; 7<i>y</i> = &minus;<i>x</i> &rArr; <i>y</i> = &minus;${frac('1', '7')}<i>x</i> + 0</div>
     <div>&rArr; Slope: <b><i>m</i> = &minus;${frac('1', '7')}</b>, &nbsp; <i>y</i>-intercept: <b><i>c</i> = 0</b></div>
     <div style="margin-top: 8px;"><b>(ii) 6<i>x</i> + 3<i>y</i> &minus; 5 = 0:</b></div>
     <div>&rArr; 3<i>y</i> = &minus;6<i>x</i> + 5 &rArr; <i>y</i> = &minus;2<i>x</i> + ${frac('5', '3')}</div>
     <div>&rArr; Slope: <b><i>m</i> = &minus;2</b>, &nbsp; <i>y</i>-intercept: <b><i>c</i> = ${frac('5', '3')}</b></div>
     <div style="margin-top: 8px;"><b>(iii) <i>y</i> = 0:</b></div>
     <div>&rArr; <i>y</i> = 0 &times; <i>x</i> + 0</div>
     <div>&rArr; Slope: <b><i>m</i> = 0</b>, &nbsp; <i>y</i>-intercept: <b><i>c</i> = 0</b></div>`,
    `(i) <i>m</i> = &minus;${frac('1', '7')}, <i>c</i> = 0 &nbsp;|&nbsp; (ii) <i>m</i> = &minus;2, <i>c</i> = ${frac('5', '3')} &nbsp;|&nbsp; (iii) <i>m</i> = 0, <i>c</i> = 0`
  ));

  // Q2
  cards.push(qCard(
    2,
    `Reduce the following equations into <b>intercept form</b> (${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 1) and find their intercepts on the axes:<br/>
     <b>(i) 3<i>x</i> + 2<i>y</i> &minus; 12 = 0</b><br/>
     <b>(ii) 4<i>x</i> &minus; 3<i>y</i> = 6</b><br/>
     <b>(iii) 3<i>y</i> + 2 = 0</b>`,
    `<div><b>(i) 3<i>x</i> + 2<i>y</i> &minus; 12 = 0:</b></div>
     <div>&rArr; 3<i>x</i> + 2<i>y</i> = 12</div>
     <div>Dividing by 12: &nbsp; ${frac('3<i>x</i>', '12')} + ${frac('2<i>y</i>', '12')} = 1 &rArr; <b>${frac('<i>x</i>', '4')} + ${frac('<i>y</i>', '6')} = 1</b></div>
     <div>&rArr; <i>x</i>-intercept: <b><i>a</i> = 4</b>, &nbsp; <i>y</i>-intercept: <b><i>b</i> = 6</b></div>
     <div style="margin-top: 8px;"><b>(ii) 4<i>x</i> &minus; 3<i>y</i> = 6:</b></div>
     <div>Dividing by 6: &nbsp; ${frac('4<i>x</i>', '6')} &minus; ${frac('3<i>y</i>', '6')} = 1 &rArr; ${frac('2<i>x</i>', '3')} &minus; ${frac('<i>y</i>', '2')} = 1 &rArr; <b>${frac('<i>x</i>', '3/2')} + ${frac('<i>y</i>', '&minus;2')} = 1</b></div>
     <div>&rArr; <i>x</i>-intercept: <b><i>a</i> = ${frac('3', '2')}</b>, &nbsp; <i>y</i>-intercept: <b><i>b</i> = &minus;2</b></div>
     <div style="margin-top: 8px;"><b>(iii) 3<i>y</i> + 2 = 0:</b></div>
     <div>&rArr; 3<i>y</i> = &minus;2 &rArr; ${frac('<i>y</i>', '&minus;2/3')} = 1</div>
     <div>&rArr; <i>x</i>-intercept: <b>None (parallel to <i>x</i>-axis)</b>, &nbsp; <i>y</i>-intercept: <b><i>b</i> = &minus;${frac('2', '3')}</b></div>`,
    `(i) <i>a</i> = 4, <i>b</i> = 6 &nbsp;|&nbsp; (ii) <i>a</i> = ${frac('3', '2')}, <i>b</i> = &minus;2 &nbsp;|&nbsp; (iii) No <i>x</i>-int, <i>b</i> = &minus;${frac('2', '3')}`
  ));

  // Q3
  cards.push(qCard(
    3,
    `Reduce the following equations into <b>normal form</b>. Find their perpendicular distances from the origin (<i>p</i>) and the angle between the perpendicular and positive <i>x</i>-axis (&omega;):<br/>
     <b>(i) <i>x</i> &minus; &radic;3<i>y</i> + 8 = 0</b><br/>
     <b>(ii) <i>y</i> &minus; 2 = 0</b><br/>
     <b>(iii) <i>x</i> &minus; <i>y</i> = 4</b>`,
    `<div><b>(i) <i>x</i> &minus; &radic;3<i>y</i> + 8 = 0:</b></div>
     <div>Rewriting with positive RHS constant: &nbsp; &minus;<i>x</i> + &radic;3<i>y</i> = 8</div>
     <div>Dividing by &radic;[(&minus;1)<sup>2</sup> + (&radic;3)<sup>2</sup>] = &radic;4 = 2:</div>
     <div>&rArr; (&minus;${frac('1', '2')})<i>x</i> + (${frac('&radic;3', '2')})<i>y</i> = 4</div>
     <div>Since cos &omega; = &minus;${frac('1', '2')} &lt; 0 and sin &omega; = ${frac('&radic;3', '2')} &gt; 0, &omega; is in Quadrant II:</div>
     <div>&rArr; &omega; = 180&deg; &minus; 60&deg; = <b>120&deg;</b>, and <b><i>p</i> = 4</b></div>
     <div>Normal form: <b><i>x</i> cos 120&deg; + <i>y</i> sin 120&deg; = 4</b></div>
     <div style="margin-top: 10px;"><b>(ii) <i>y</i> &minus; 2 = 0:</b></div>
     <div>&rArr; 0 &times; <i>x</i> + 1 &times; <i>y</i> = 2</div>
     <div>&rArr; cos &omega; = 0, sin &omega; = 1 &rArr; <b>&omega; = 90&deg;</b>, and <b><i>p</i> = 2</b></div>
     <div>Normal form: <b><i>x</i> cos 90&deg; + <i>y</i> sin 90&deg; = 2</b></div>
     <div style="margin-top: 10px;"><b>(iii) <i>x</i> &minus; <i>y</i> = 4:</b></div>
     <div>Dividing by &radic;[1<sup>2</sup> + (&minus;1)<sup>2</sup>] = &radic;2:</div>
     <div>&rArr; (${frac('1', '&radic;2')})<i>x</i> &minus; (${frac('1', '&radic;2')})<i>y</i> = ${frac('4', '&radic;2')} = 2&radic;2</div>
     <div>Since cos &omega; = ${frac('1', '&radic;2')} &gt; 0 and sin &omega; = &minus;${frac('1', '&radic;2')} &lt; 0, &omega; is in Quadrant IV:</div>
     <div>&rArr; &omega; = 360&deg; &minus; 45&deg; = <b>315&deg;</b>, and <b><i>p</i> = 2&radic;2</b></div>
     <div>Normal form: <b><i>x</i> cos 315&deg; + <i>y</i> sin 315&deg; = 2&radic;2</b></div>`,
    `(i) <i>p</i> = 4, &omega; = 120&deg; &nbsp;|&nbsp; (ii) <i>p</i> = 2, &omega; = 90&deg; &nbsp;|&nbsp; (iii) <i>p</i> = 2&radic;2, &omega; = 315&deg;`
  ));

  // Q4
  cards.push(qCard(
    4,
    `Find the distance of the point <b>(&minus;1, 1)</b> from the line <b>12(<i>x</i> + 6) = 5(<i>y</i> &minus; 2)</b>.`,
    `<div>Expanding and rewriting the line equation in standard form <i>Ax</i> + <i>By</i> + <i>C</i> = 0:</div>
     <div>&rArr; 12<i>x</i> + 72 = 5<i>y</i> &minus; 10</div>
     <div>&rArr; <b>12<i>x</i> &minus; 5<i>y</i> + 82 = 0</b></div>
     <div>Here, <i>A</i> = 12, <i>B</i> = &minus;5, <i>C</i> = 82, and (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) = (&minus;1, 1).</div>
     <div style="margin-top: 8px;">Using perpendicular distance formula <i>d</i> = ${frac('|<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>|', '&radic;(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)')}:</div>
     <div>&rArr; <i>d</i> = ${frac('|12(&minus;1) &minus; 5(1) + 82|', '&radic;[12<sup>2</sup> + (&minus;5)<sup>2</sup>]')} = ${frac('|&minus;12 &minus; 5 + 82|', '&radic;(144 + 25)')} = ${frac('|65|', '&radic;169')} = ${frac('65', '13')} = <b>5 units</b></div>`,
    `5 units`
  ));

  // Q5
  cards.push(qCard(
    5,
    `Find the points on the <b><i>x</i>-axis</b> whose distances from the line <b>${frac('<i>x</i>', '3')} + ${frac('<i>y</i>', '4')} = 1</b> are <b>4 units</b>.`,
    `<div>Writing the line equation in general form:</div>
     <div>Multiplying by 12: &nbsp; <b>4<i>x</i> + 3<i>y</i> &minus; 12 = 0</b></div>
     <div>Let any point on the <i>x</i>-axis be <b>(<i>a</i>, 0)</b>.</div>
     <div style="margin-top: 8px;">The perpendicular distance from (<i>a</i>, 0) to 4<i>x</i> + 3<i>y</i> &minus; 12 = 0 is 4 units:</div>
     <div>&rArr; ${frac('|4(<i>a</i>) + 3(0) &minus; 12|', '&radic;(4<sup>2</sup> + 3<sup>2</sup>)')} = 4</div>
     <div>&rArr; ${frac('|4<i>a</i> &minus; 12|', '5')} = 4 &rArr; |4<i>a</i> &minus; 12| = 20</div>
     <div style="margin-top: 6px;">Splitting into two cases:</div>
     <div>• 4<i>a</i> &minus; 12 = 20 &rArr; 4<i>a</i> = 32 &rArr; <b><i>a</i> = 8</b></div>
     <div>• 4<i>a</i> &minus; 12 = &minus;20 &rArr; 4<i>a</i> = &minus;8 &rArr; <b><i>a</i> = &minus;2</b></div>
     <div>Therefore, the required points on the <i>x</i>-axis are <b>(8, 0) and (&minus;2, 0)</b>.</div>`,
    `(8, 0) &nbsp; and &nbsp; (&minus;2, 0)`
  ));

  // Q6
  cards.push(qCard(
    6,
    `Find the distance between parallel lines:<br/>
     <b>(i) 15<i>x</i> + 8<i>y</i> &minus; 34 = 0 &nbsp; and &nbsp; 15<i>x</i> + 8<i>y</i> + 31 = 0</b><br/>
     <b>(ii) <i>l</i>(<i>x</i> + <i>y</i>) + <i>p</i> = 0 &nbsp; and &nbsp; <i>l</i>(<i>x</i> + <i>y</i>) &minus; <i>r</i> = 0</b>`,
    `<div>The distance between two parallel lines <i>Ax</i> + <i>By</i> + <i>C</i><sub>1</sub> = 0 and <i>Ax</i> + <i>By</i> + <i>C</i><sub>2</sub> = 0 is:</div>
     <div>&rArr; <b><i>d</i> = ${frac('|<i>C</i><sub>1</sub> &minus; <i>C</i><sub>2</sub>|', '&radic;(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)')}</b></div>
     <div style="margin-top: 8px;"><b>(i) 15<i>x</i> + 8<i>y</i> &minus; 34 = 0 and 15<i>x</i> + 8<i>y</i> + 31 = 0:</b></div>
     <div>&rArr; <i>d</i> = ${frac('|&minus;34 &minus; 31|', '&radic;(15<sup>2</sup> + 8<sup>2</sup>)')} = ${frac('|&minus;65|', '&radic;(225 + 64)')} = ${frac('65', '&radic;289')} = <b>${frac('65', '17')} units</b></div>
     <div style="margin-top: 10px;"><b>(ii) <i>lx</i> + <i>ly</i> + <i>p</i> = 0 and <i>lx</i> + <i>ly</i> &minus; <i>r</i> = 0:</b></div>
     <div>Here <i>A</i> = <i>l</i>, <i>B</i> = <i>l</i>, <i>C</i><sub>1</sub> = <i>p</i>, <i>C</i><sub>2</sub> = &minus;<i>r</i>:</div>
     <div>&rArr; <i>d</i> = ${frac('|<i>p</i> &minus; (&minus;<i>r</i>)|', '&radic;(<i>l</i><sup>2</sup> + <i>l</i><sup>2</sup>)')} = <b>${frac('|<i>p</i> + <i>r</i>|', '|<i>l</i>|&radic;2')} units</b></div>`,
    `(i) ${frac('65', '17')} units &nbsp;|&nbsp; (ii) ${frac('|<i>p</i> + <i>r</i>|', '|<i>l</i>|&radic;2')} units`
  ));

  // Q7
  cards.push(qCard(
    7,
    `Find the equation of the line <b>parallel to the line 3<i>x</i> &minus; 4<i>y</i> + 2 = 0</b> and passing through the point <b>(&minus;2, 3)</b>.`,
    `<div>The slope of 3<i>x</i> &minus; 4<i>y</i> + 2 = 0 is: <i>m</i> = &minus;${frac('3', '&minus;4')} = <b>${frac('3', '4')}</b>.</div>
     <div>Any line parallel to it has the same slope: <i>m</i> = ${frac('3', '4')}.</div>
     <div style="margin-top: 8px;">Using point-slope form with point (&minus;2, 3):</div>
     <div>&rArr; <i>y</i> &minus; 3 = ${frac('3', '4')}[<i>x</i> &minus; (&minus;2)]</div>
     <div>&rArr; 4(<i>y</i> &minus; 3) = 3(<i>x</i> + 2)</div>
     <div>&rArr; 4<i>y</i> &minus; 12 = 3<i>x</i> + 6</div>
     <div>&rArr; <b>3<i>x</i> &minus; 4<i>y</i> + 18 = 0</b></div>`,
    `3<i>x</i> &minus; 4<i>y</i> + 18 = 0`
  ));

  // Q8
  cards.push(qCard(
    8,
    `Find the equation of the line <b>perpendicular to the line <i>x</i> &minus; 7<i>y</i> + 5 = 0</b> and having <b><i>x</i>-intercept 3</b>.`,
    `<div>1. Finding the slope of <i>x</i> &minus; 7<i>y</i> + 5 = 0:</div>
     <div>&rArr; 7<i>y</i> = <i>x</i> + 5 &rArr; <i>y</i> = ${frac('1', '7')}<i>x</i> + ${frac('5', '7')} &rArr; <i>m</i><sub>1</sub> = ${frac('1', '7')}</div>
     <div>Slope of perpendicular line: <i>m</i> = &minus;${frac('1', '<i>m</i><sub>1</sub>')} = &minus;${frac('1', '1/7')} = <b>&minus;7</b></div>
     <div style="margin-top: 8px;">2. The line has <i>x</i>-intercept <i>d</i> = 3, so it passes through <b>(3, 0)</b>:</div>
     <div>Using <i>y</i> = <i>m</i>(<i>x</i> &minus; <i>d</i>):</div>
     <div>&rArr; <i>y</i> = &minus;7(<i>x</i> &minus; 3) = &minus;7<i>x</i> + 21</div>
     <div>&rArr; <b>7<i>x</i> + <i>y</i> &minus; 21 = 0</b></div>`,
    `7<i>x</i> + <i>y</i> &minus; 21 = 0`
  ));

  // Q9
  cards.push(qCard(
    9,
    `Find the angles between the lines <b>&radic;3<i>x</i> + <i>y</i> = 1</b> and <b><i>x</i> + &radic;3<i>y</i> = 1</b>.`,
    `<div>Finding the slopes of the two lines:</div>
     <div>• Line 1: <i>y</i> = &minus;&radic;3<i>x</i> + 1 &rArr; <b><i>m</i><sub>1</sub> = &minus;&radic;3</b></div>
     <div>• Line 2: <i>y</i> = &minus;${frac('1', '&radic;3')}<i>x</i> + ${frac('1', '&radic;3')} &rArr; <b><i>m</i><sub>2</sub> = &minus;${frac('1', '&radic;3')}</b></div>
     <div style="margin-top: 8px;">Using angle formula tan &theta; = | ${frac('<i>m</i><sub>2</sub> &minus; <i>m</i><sub>1</sub>', '1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub>')} |:</div>
     <div>&rArr; tan &theta; = | ${frac('&minus;1/&radic;3 &minus; (&minus;&radic;3)', '1 + (&minus;&radic;3)(&minus;1/&radic;3)')} | = | ${frac('&minus;1/&radic;3 + &radic;3', '1 + 1')} | = | ${frac('2/&radic;3', '2')} | = <b>${frac('1', '&radic;3')}</b></div>
     <div>&rArr; Acute angle: &theta; = <b>30&deg;</b></div>
     <div>&rArr; Obtuse angle: 180&deg; &minus; 30&deg; = <b>150&deg;</b></div>`,
    `30&deg; &nbsp; or &nbsp; 150&deg;`
  ));

  // Q10
  cards.push(qCard(
    10,
    `The line through the points <b>(<i>h</i>, 3) and (4, 1)</b> intersects the line <b>7<i>x</i> &minus; 9<i>y</i> &minus; 19 = 0</b> at right angle. Find the value of <b><i>h</i></b>.`,
    `<div>• Slope of line through (<i>h</i>, 3) and (4, 1):</div>
     <div>&rArr; <i>m</i><sub>1</sub> = ${frac('1 &minus; 3', '4 &minus; <i>h</i>')} = ${frac('&minus;2', '4 &minus; <i>h</i>')}</div>
     <div>• Slope of line 7<i>x</i> &minus; 9<i>y</i> &minus; 19 = 0:</div>
     <div>&rArr; 9<i>y</i> = 7<i>x</i> &minus; 19 &rArr; <i>m</i><sub>2</sub> = <b>${frac('7', '9')}</b></div>
     <div style="margin-top: 8px;">Since the lines intersect at right angles: <i>m</i><sub>1</sub> &times; <i>m</i><sub>2</sub> = &minus;1</div>
     <div>&rArr; (${frac('&minus;2', '4 &minus; <i>h</i>')}) &times; (${frac('7', '9')}) = &minus;1</div>
     <div>&rArr; ${frac('&minus;14', '9(4 &minus; <i>h</i>)')} = &minus;1 &rArr; 14 = 9(4 &minus; <i>h</i>)</div>
     <div>&rArr; 14 = 36 &minus; 9<i>h</i> &rArr; 9<i>h</i> = 36 &minus; 14 = 22 &rArr; <b><i>h</i> = ${frac('22', '9')}</b></div>`,
    `<i>h</i> = ${frac('22', '9')}`
  ));

  // Q11
  cards.push(qCard(
    11,
    `Prove that the line through the point <b>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</b> and <b>parallel to the line <i>Ax</i> + <i>By</i> + <i>C</i> = 0</b> is <b><i>A</i>(<i>x</i> &minus; <i>x</i><sub>1</sub>) + <i>B</i>(<i>y</i> &minus; <i>y</i><sub>1</sub>) = 0</b>.`,
    `<div>The given line is <i>Ax</i> + <i>By</i> + <i>C</i> = 0.</div>
     <div>Its slope is: <i>m</i> = &minus;${frac('<i>A</i>', '<i>B</i>')}.</div>
     <div>Since the required line is parallel, its slope is also <b><i>m</i> = &minus;${frac('<i>A</i>', '<i>B</i>')}</b>.</div>
     <div style="margin-top: 8px;">Using point-slope form through (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>):</div>
     <div>&rArr; <i>y</i> &minus; <i>y</i><sub>1</sub> = &minus;${frac('<i>A</i>', '<i>B</i>')}(<i>x</i> &minus; <i>x</i><sub>1</sub>)</div>
     <div>Multiplying both sides by <i>B</i>:</div>
     <div>&rArr; <i>B</i>(<i>y</i> &minus; <i>y</i><sub>1</sub>) = &minus;<i>A</i>(<i>x</i> &minus; <i>x</i><sub>1</sub>)</div>
     <div>&rArr; <b><i>A</i>(<i>x</i> &minus; <i>x</i><sub>1</sub>) + <i>B</i>(<i>y</i> &minus; <i>y</i><sub>1</sub>) = 0</b></div>`,
    `<i>A</i>(<i>x</i> &minus; <i>x</i><sub>1</sub>) + <i>B</i>(<i>y</i> &minus; <i>y</i><sub>1</sub>) = 0 &nbsp; (Hence Proved)`
  ));

  // Q12
  cards.push(qCard(
    12,
    `Two lines passing through point <b>(2, 3)</b> intersect each other at an angle of <b>60&deg;</b>. If the slope of one line is <b>2</b>, find the equation of the other line.`,
    `<div>Let <i>m</i><sub>1</sub> = 2 and <i>m</i><sub>2</sub> be the slope of the other line. Angle &theta; = 60&deg;.</div>
     <div>&rArr; tan 60&deg; = | ${frac('<i>m</i><sub>2</sub> &minus; 2', '1 + 2<i>m</i><sub>2</sub>')} | &rArr; &radic;3 = &plusmn; ${frac('<i>m</i><sub>2</sub> &minus; 2', '1 + 2<i>m</i><sub>2</sub>')}</div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">Case I: When ${frac('<i>m</i><sub>2</sub> &minus; 2', '1 + 2<i>m</i><sub>2</sub>')} = &radic;3:</div>
     <div>&rArr; <i>m</i><sub>2</sub> &minus; 2 = &radic;3 + 2&radic;3<i>m</i><sub>2</sub> &rArr; <i>m</i><sub>2</sub>(1 &minus; 2&radic;3) = 2 + &radic;3 &rArr; <i>m</i><sub>2</sub> = ${frac('&minus;(2 + &radic;3)', '2&radic;3 &minus; 1')}</div>
     <div>Equation through (2, 3): <i>y</i> &minus; 3 = ${frac('&minus;(2 + &radic;3)', '2&radic;3 &minus; 1')}(<i>x</i> &minus; 2)</div>
     <div>&rArr; <b>(2 + &radic;3)<i>x</i> + (2&radic;3 &minus; 1)<i>y</i> &minus; (8&radic;3 + 1) = 0</b></div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">Case II: When ${frac('<i>m</i><sub>2</sub> &minus; 2', '1 + 2<i>m</i><sub>2</sub>')} = &minus;&radic;3:</div>
     <div>&rArr; <i>m</i><sub>2</sub> &minus; 2 = &minus;&radic;3 &minus; 2&radic;3<i>m</i><sub>2</sub> &rArr; <i>m</i><sub>2</sub>(1 + 2&radic;3) = 2 &minus; &radic;3 &rArr; <i>m</i><sub>2</sub> = ${frac('2 &minus; &radic;3', '2&radic;3 + 1')}</div>
     <div>Equation through (2, 3): <i>y</i> &minus; 3 = ${frac('2 &minus; &radic;3', '2&radic;3 + 1')}(<i>x</i> &minus; 2)</div>
     <div>&rArr; <b>(&radic;3 &minus; 2)<i>x</i> + (2&radic;3 + 1)<i>y</i> &minus; (8&radic;3 &minus; 1) = 0</b></div>`,
    `(2 + &radic;3)<i>x</i> + (2&radic;3 &minus; 1)<i>y</i> = 8&radic;3 + 1 &nbsp; OR &nbsp; (&radic;3 &minus; 2)<i>x</i> + (2&radic;3 + 1)<i>y</i> = 8&radic;3 &minus; 1`
  ));

  // Q13
  cards.push(qCard(
    13,
    `Find the equation of the <b>right bisector</b> of the line segment joining the points <b>(3, 4) and (&minus;1, 2)</b>.`,
    `<div>The right bisector passes through the midpoint of the segment and is perpendicular to it.</div>
     <div style="margin-top: 6px;">1. Coordinates of the midpoint:</div>
     <div>&rArr; <i>M</i> = (${frac('3 + (&minus;1)', '2')}, ${frac('4 + 2', '2')}) = (${frac('2', '2')}, ${frac('6', '2')}) = <b>(1, 3)</b></div>
     <div style="margin-top: 6px;">2. Slope of the line segment joining (3, 4) and (&minus;1, 2):</div>
     <div>&rArr; <i>m</i><sub>1</sub> = ${frac('2 &minus; 4', '&minus;1 &minus; 3')} = ${frac('&minus;2', '&minus;4')} = <b>${frac('1', '2')}</b></div>
     <div>Slope of the right bisector: <i>m</i> = &minus;${frac('1', '<i>m</i><sub>1</sub>')} = &minus;${frac('1', '1/2')} = <b>&minus;2</b></div>
     <div style="margin-top: 8px;">3. Equation of the right bisector through (1, 3) with slope &minus;2:</div>
     <div>&rArr; <i>y</i> &minus; 3 = &minus;2(<i>x</i> &minus; 1)</div>
     <div>&rArr; <i>y</i> &minus; 3 = &minus;2<i>x</i> + 2</div>
     <div>&rArr; <b>2<i>x</i> + <i>y</i> &minus; 5 = 0</b></div>`,
    `2<i>x</i> + <i>y</i> &minus; 5 = 0`
  ));

  // Q14
  cards.push(qCard(
    14,
    `Find the coordinates of the <b>foot of the perpendicular</b> from the point <b>(&minus;1, 3)</b> to the line <b>3<i>x</i> &minus; 4<i>y</i> &minus; 16 = 0</b>.`,
    `<div>Let the foot of the perpendicular be <b>(<i>h</i>, <i>k</i>)</b>.</div>
     <div>Using the foot of perpendicular formula: &nbsp; <b>${frac('<i>h</i> &minus; <i>x</i><sub>1</sub>', '<i>A</i>')} = ${frac('<i>k</i> &minus; <i>y</i><sub>1</sub>', '<i>B</i>')} = &minus;${frac('<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>', '<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>')}</b></div>
     <div>Here (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) = (&minus;1, 3), and line is 3<i>x</i> &minus; 4<i>y</i> &minus; 16 = 0 (<i>A</i> = 3, <i>B</i> = &minus;4, <i>C</i> = &minus;16):</div>
     <div>&rArr; <i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> = 3<sup>2</sup> + (&minus;4)<sup>2</sup> = 9 + 16 = 25</div>
     <div>&rArr; <i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i> = 3(&minus;1) &minus; 4(3) &minus; 16 = &minus;3 &minus; 12 &minus; 16 = &minus;31</div>
     <div>&rArr; ${frac('<i>h</i> &minus; (&minus;1)', '3')} = ${frac('<i>k</i> &minus; 3', '&minus;4')} = &minus;${frac('&minus;31', '25')} = <b>${frac('31', '25')}</b></div>
     <div style="margin-top: 8px;">Solving for <i>h</i> and <i>k</i>:</div>
     <div>• <i>h</i> + 1 = 3 &times; ${frac('31', '25')} = ${frac('93', '25')} &rArr; <i>h</i> = ${frac('93', '25')} &minus; 1 = <b>${frac('68', '25')}</b></div>
     <div>• <i>k</i> &minus; 3 = &minus;4 &times; ${frac('31', '25')} = &minus;${frac('124', '25')} &rArr; <i>k</i> = 3 &minus; ${frac('124', '25')} = <b>&minus;${frac('49', '25')}</b></div>`,
    `(${frac('68', '25')}, &minus;${frac('49', '25')})`
  ));

  // Q15
  cards.push(qCard(
    15,
    `The perpendicular from the origin to the line <b><i>y</i> = <i>mx</i> + <i>c</i></b> meets it at the point <b>(&minus;1, 2)</b>. Find the values of <b><i>m</i> and <i>c</i></b>.`,
    `<div>Let <i>O</i>(0, 0) and <i>P</i>(&minus;1, 2). The line segment <i>OP</i> is perpendicular to the given line.</div>
     <div>• Slope of <i>OP</i>: &nbsp; <i>m</i><sub>1</sub> = ${frac('2 &minus; 0', '&minus;1 &minus; 0')} = &minus;2</div>
     <div>Since the line is perpendicular to <i>OP</i>:</div>
     <div>&rArr; <i>m</i> &times; <i>m</i><sub>1</sub> = &minus;1 &rArr; <i>m</i>(&minus;2) = &minus;1 &rArr; <b><i>m</i> = ${frac('1', '2')}</b></div>
     <div style="margin-top: 8px;">Since (&minus;1, 2) lies on the line <i>y</i> = <i>mx</i> + <i>c</i>:</div>
     <div>&rArr; 2 = (${frac('1', '2')})(&minus;1) + <i>c</i></div>
     <div>&rArr; 2 = &minus;${frac('1', '2')} + <i>c</i> &rArr; <i>c</i> = 2 + ${frac('1', '2')} = <b>${frac('5', '2')}</b></div>`,
    `<i>m</i> = ${frac('1', '2')}, &nbsp; <i>c</i> = ${frac('5', '2')}`
  ));

  // Q16
  cards.push(qCard(
    16,
    `If <i>p</i> and <i>q</i> are the lengths of perpendiculars from the origin to the lines <b><i>x</i> cos &theta; &minus; <i>y</i> sin &theta; = <i>k</i> cos 2&theta;</b> and <b><i>x</i> sec &theta; + <i>y</i> cosec &theta; = <i>k</i></b>, respectively, prove that <b><i>p</i><sup>2</sup> + 4<i>q</i><sup>2</sup> = <i>k</i><sup>2</sup></b>.`,
    `<div>1. For the first line: <i>x</i> cos &theta; &minus; <i>y</i> sin &theta; &minus; <i>k</i> cos 2&theta; = 0</div>
     <div>&rArr; <i>p</i> = ${frac('|0 &minus; 0 &minus; <i>k</i> cos 2&theta;|', '&radic;(cos<sup>2</sup>&theta; + sin<sup>2</sup>&theta;)')} = ${frac('<i>k</i> cos 2&theta;', '1')} = <i>k</i> cos 2&theta;</div>
     <div>&rArr; <b><i>p</i><sup>2</sup> = <i>k</i><sup>2</sup> cos<sup>2</sup> 2&theta;</b> &nbsp; ... (1)</div>
     <div style="margin-top: 8px;">2. For the second line: ${frac('<i>x</i>', 'cos &theta;')} + ${frac('<i>y</i>', 'sin &theta;')} = <i>k</i> &rArr; <i>x</i> sin &theta; + <i>y</i> cos &theta; &minus; <i>k</i> sin &theta; cos &theta; = 0</div>
     <div>&rArr; <i>q</i> = ${frac('|&minus;<i>k</i> sin &theta; cos &theta;|', '&radic;(sin<sup>2</sup>&theta; + cos<sup>2</sup>&theta;)')} = <i>k</i> sin &theta; cos &theta; = ${frac('<i>k</i>(2 sin &theta; cos &theta;)', '2')} = ${frac('<i>k</i> sin 2&theta;', '2')}</div>
     <div>&rArr; 2<i>q</i> = <i>k</i> sin 2&theta; &rArr; <b>4<i>q</i><sup>2</sup> = <i>k</i><sup>2</sup> sin<sup>2</sup> 2&theta;</b> &nbsp; ... (2)</div>
     <div style="margin-top: 8px;">Adding (1) and (2):</div>
     <div>&rArr; <i>p</i><sup>2</sup> + 4<i>q</i><sup>2</sup> = <i>k</i><sup>2</sup> cos<sup>2</sup> 2&theta; + <i>k</i><sup>2</sup> sin<sup>2</sup> 2&theta; = <i>k</i><sup>2</sup>(cos<sup>2</sup> 2&theta; + sin<sup>2</sup> 2&theta;) = <b><i>k</i><sup>2</sup></b></div>`,
    `<i>p</i><sup>2</sup> + 4<i>q</i><sup>2</sup> = <i>k</i><sup>2</sup> &nbsp; (Hence Proved)`
  ));

  // Q17
  cards.push(qCard(
    17,
    `In the triangle <i>ABC</i> with vertices <b><i>A</i>(2, 3), <i>B</i>(4, &minus;1) and <i>C</i>(1, 2)</b>, find the equation and length of altitude from vertex <i>A</i>.`,
    `<div>Altitude <i>AD</i> from <i>A</i> is perpendicular to side <i>BC</i>.</div>
     <div>1. Slope of line <i>BC</i>:</div>
     <div>&rArr; <i>m</i><sub>1</sub> = ${frac('2 &minus; (&minus;1)', '1 &minus; 4')} = ${frac('3', '&minus;3')} = <b>&minus;1</b></div>
     <div>Slope of altitude <i>AD</i>: <i>m</i> = &minus;${frac('1', '<i>m</i><sub>1</sub>')} = &minus;${frac('1', '&minus;1')} = <b>1</b></div>
     <div style="margin-top: 6px;">Equation of altitude <i>AD</i> passing through <i>A</i>(2, 3):</div>
     <div>&rArr; <i>y</i> &minus; 3 = 1(<i>x</i> &minus; 2) &rArr; <i>y</i> &minus; 3 = <i>x</i> &minus; 2 &rArr; <b><i>x</i> &minus; <i>y</i> + 1 = 0</b></div>
     <div style="margin-top: 8px;">2. Finding the length of altitude <i>AD</i>:</div>
     <div>Equation of <i>BC</i>: <i>y</i> &minus; 2 = &minus;1(<i>x</i> &minus; 1) &rArr; <i>y</i> &minus; 2 = &minus;<i>x</i> + 1 &rArr; <b><i>x</i> + <i>y</i> &minus; 3 = 0</b></div>
     <div>Length of perpendicular from <i>A</i>(2, 3) to <i>x</i> + <i>y</i> &minus; 3 = 0:</div>
     <div>&rArr; <i>d</i> = ${frac('|2 + 3 &minus; 3|', '&radic;(1<sup>2</sup> + 1<sup>2</sup>)')} = ${frac('2', '&radic;2')} = <b>&radic;2 units</b></div>`,
    `Equation: <i>x</i> &minus; <i>y</i> + 1 = 0 &nbsp;|&nbsp; Length = &radic;2 units`
  ));

  // Q18
  cards.push(qCard(
    18,
    `If <i>p</i> is the length of the perpendicular from the origin to the line whose intercepts on the axes are <i>a</i> and <i>b</i>, then show that <b>${frac('1', '<i>p</i><sup>2</sup>')} = ${frac('1', '<i>a</i><sup>2</sup>')} + ${frac('1', '<i>b</i><sup>2</sup>')}</b>.`,
    `<div>The equation of the line in intercept form is:</div>
     <div>&rArr; ${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 1 &rArr; <b><i>bx</i> + <i>ay</i> &minus; <i>ab</i> = 0</b></div>
     <div style="margin-top: 8px;">The perpendicular distance <i>p</i> from the origin (0, 0) to <i>bx</i> + <i>ay</i> &minus; <i>ab</i> = 0 is:</div>
     <div>&rArr; <i>p</i> = ${frac('|<i>b</i>(0) + <i>a</i>(0) &minus; <i>ab</i>|', '&radic;(<i>b</i><sup>2</sup> + <i>a</i><sup>2</sup>)')} = ${frac('|&minus;<i>ab</i>|', '&radic;(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)')} = ${frac('<i>ab</i>', '&radic;(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)')}</div>
     <div style="margin-top: 8px;">Squaring both sides:</div>
     <div>&rArr; <i>p</i><sup>2</sup> = ${frac('<i>a</i><sup>2</sup> <i>b</i><sup>2</sup>', '<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>')}</div>
     <div>Taking reciprocals:</div>
     <div>&rArr; ${frac('1', '<i>p</i><sup>2</sup>')} = ${frac('<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>', '<i>a</i><sup>2</sup> <i>b</i><sup>2</sup>')} = ${frac('<i>a</i><sup>2</sup>', '<i>a</i><sup>2</sup> <i>b</i><sup>2</sup>')} + ${frac('<i>b</i><sup>2</sup>', '<i>a</i><sup>2</sup> <i>b</i><sup>2</sup>')} = <b>${frac('1', '<i>b</i><sup>2</sup>')} + ${frac('1', '<i>a</i><sup>2</sup>')}</b></div>
     <div>&rArr; <b>${frac('1', '<i>p</i><sup>2</sup>')} = ${frac('1', '<i>a</i><sup>2</sup>')} + ${frac('1', '<i>b</i><sup>2</sup>')}</b></div>`,
    `${frac('1', '<i>p</i><sup>2</sup>')} = ${frac('1', '<i>a</i><sup>2</sup>')} + ${frac('1', '<i>b</i><sup>2</sup>')} &nbsp; (Hence Proved)`
  ));

  const banner = makeBanner("Exercise 9.3", "General Equation of a Line, Distance from Point & Distance Between Parallel Lines");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx93 };
