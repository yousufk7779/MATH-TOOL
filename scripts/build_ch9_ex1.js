const { styleBlock, frac, makeBanner, qCard } = require('./ch9_common');

function generateEx91() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Draw a quadrilateral in the Cartesian plane whose vertices are <b>(&minus;4, 5), (0, 7), (5, &minus;5) and (&minus;4, &minus;2)</b>. Also, find its area.`,
    `<div>Let the vertices of the quadrilateral be <b><i>A</i>(&minus;4, 5), <i>B</i>(0, 7), <i>C</i>(5, &minus;5), and <i>D</i>(&minus;4, &minus;2)</b>.</div>
     <div>Dividing the quadrilateral into two triangles by drawing diagonal <i>AC</i>:</div>
     <div>&rArr; Area(<i>ABCD</i>) = Area(&Delta;<i>ABC</i>) + Area(&Delta;<i>ACD</i>)</div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">1. Area of &Delta;<i>ABC</i>:</div>
     <div>Using Area = ${frac('1', '2')} | <i>x</i><sub>1</sub>(<i>y</i><sub>2</sub> &minus; <i>y</i><sub>3</sub>) + <i>x</i><sub>2</sub>(<i>y</i><sub>3</sub> &minus; <i>y</i><sub>1</sub>) + <i>x</i><sub>3</sub>(<i>y</i><sub>1</sub> &minus; <i>y</i><sub>2</sub>) |:</div>
     <div>&rArr; Area(&Delta;<i>ABC</i>) = ${frac('1', '2')} | (&minus;4)[7 &minus; (&minus;5)] + 0[(&minus;5) &minus; 5] + 5[5 &minus; 7] |</div>
     <div>&rArr; = ${frac('1', '2')} | (&minus;4)(12) + 0 + 5(&minus;2) | = ${frac('1', '2')} | &minus;48 &minus; 10 | = ${frac('1', '2')} | &minus;58 | = <b>29 sq. units</b></div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">2. Area of &Delta;<i>ACD</i>:</div>
     <div>&rArr; Area(&Delta;<i>ACD</i>) = ${frac('1', '2')} | (&minus;4)[(&minus;5) &minus; (&minus;2)] + 5[(&minus;2) &minus; 5] + (&minus;4)[5 &minus; (&minus;5)] |</div>
     <div>&rArr; = ${frac('1', '2')} | (&minus;4)(&minus;3) + 5(&minus;7) &minus; 4(10) | = ${frac('1', '2')} | 12 &minus; 35 &minus; 40 | = ${frac('1', '2')} | &minus;63 | = <b>${frac('63', '2')} sq. units</b></div>
     <div style="margin-top: 8px;">Total Area of Quadrilateral <i>ABCD</i>:</div>
     <div>&rArr; Area(<i>ABCD</i>) = 29 + ${frac('63', '2')} = ${frac('58 + 63', '2')} = <b>${frac('121', '2')} = 60.5 sq. units</b></div>`,
    `${frac('121', '2')} sq. units &nbsp; (60.5 sq. units)`
  ));

  // Q2
  cards.push(qCard(
    2,
    `The base of an equilateral triangle with side <b>2<i>a</i></b> lies along the <b><i>y</i>-axis</b> such that the mid-point of the base is at the origin. Find the vertices of the triangle.`,
    `<div>Let <i>ABC</i> be the equilateral triangle with side 2<i>a</i>.</div>
     <div>The base <i>BC</i> of length 2<i>a</i> lies along the <i>y</i>-axis with its midpoint at the origin (0, 0):</div>
     <div>• <i>BO</i> = <i>OC</i> = <i>a</i></div>
     <div>• Coordinates of <i>B</i> = <b>(0, &minus;<i>a</i>)</b></div>
     <div>• Coordinates of <i>C</i> = <b>(0, <i>a</i>)</b></div>
     <div style="margin-top: 8px;">In an equilateral triangle, the altitude from vertex <i>A</i> to base <i>BC</i> bisects the base perpendicularly.</div>
     <div>Since the midpoint is the origin (0, 0), vertex <i>A</i> must lie on the <i>x</i>-axis: <i>A</i>(<i>x</i>, 0).</div>
     <div>In right triangle &Delta;<i>AOC</i>:</div>
     <div>&rArr; <i>OA</i><sup>2</sup> + <i>OC</i><sup>2</sup> = <i>AC</i><sup>2</sup></div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>a</i><sup>2</sup> = (2<i>a</i>)<sup>2</sup> = 4<i>a</i><sup>2</sup></div>
     <div>&rArr; <i>x</i><sup>2</sup> = 4<i>a</i><sup>2</sup> &minus; <i>a</i><sup>2</sup> = 3<i>a</i><sup>2</sup> &rArr; <b><i>x</i> = &plusmn;&radic;3<i>a</i></b></div>
     <div style="margin-top: 6px;">Therefore, the vertices are:</div>
     <div><b>(0, <i>a</i>), (0, &minus;<i>a</i>), (&radic;3<i>a</i>, 0)</b> &nbsp; OR &nbsp; <b>(0, <i>a</i>), (0, &minus;<i>a</i>), (&minus;&radic;3<i>a</i>, 0)</b></div>`,
    `(0, <i>a</i>), (0, &minus;<i>a</i>), (&plusmn;&radic;3<i>a</i>, 0)`
  ));

  // Q3
  cards.push(qCard(
    3,
    `Find the distance between <b><i>P</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</b> and <b><i>Q</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</b> when:<br/>
     <b>(i) <i>PQ</i> is parallel to the <i>y</i>-axis</b><br/>
     <b>(ii) <i>PQ</i> is parallel to the <i>x</i>-axis</b>.`,
    `<div>The distance formula is: <i>d</i> = &radic;[ (<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>)<sup>2</sup> ]</div>
     <div style="margin-top: 8px;"><b>(i) When <i>PQ</i> is parallel to the <i>y</i>-axis:</b></div>
     <div>The <i>x</i>-coordinates of all points on the line are equal, so <b><i>x</i><sub>1</sub> = <i>x</i><sub>2</sub></b>.</div>
     <div>&rArr; <i>d</i> = &radic;[ (0)<sup>2</sup> + (<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>)<sup>2</sup> ] = &radic;[ (<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>)<sup>2</sup> ] = <b>|<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>|</b></div>
     <div style="margin-top: 8px;"><b>(ii) When <i>PQ</i> is parallel to the <i>x</i>-axis:</b></div>
     <div>The <i>y</i>-coordinates of all points on the line are equal, so <b><i>y</i><sub>1</sub> = <i>y</i><sub>2</sub></b>.</div>
     <div>&rArr; <i>d</i> = &radic;[ (<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>)<sup>2</sup> + (0)<sup>2</sup> ] = &radic;[ (<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>)<sup>2</sup> ] = <b>|<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>|</b></div>`,
    `(i) |<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>|, &nbsp; (ii) |<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>|`
  ));

  // Q4
  cards.push(qCard(
    4,
    `Find a point on the <b><i>x</i>-axis</b> which is equidistant from points <b>(7, 6)</b> and <b>(3, 4)</b>.`,
    `<div>Let the point on the <i>x</i>-axis be <b><i>P</i>(<i>a</i>, 0)</b>.</div>
     <div>Given points: <i>A</i>(7, 6) and <i>B</i>(3, 4).</div>
     <div>Since <i>P</i> is equidistant from <i>A</i> and <i>B</i>: &nbsp; <b><i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup></b></div>
     <div>&rArr; (<i>a</i> &minus; 7)<sup>2</sup> + (0 &minus; 6)<sup>2</sup> = (<i>a</i> &minus; 3)<sup>2</sup> + (0 &minus; 4)<sup>2</sup></div>
     <div>&rArr; <i>a</i><sup>2</sup> &minus; 14<i>a</i> + 49 + 36 = <i>a</i><sup>2</sup> &minus; 6<i>a</i> + 9 + 16</div>
     <div>&rArr; <i>a</i><sup>2</sup> &minus; 14<i>a</i> + 85 = <i>a</i><sup>2</sup> &minus; 6<i>a</i> + 25</div>
     <div>Subtracting <i>a</i><sup>2</sup> from both sides:</div>
     <div>&rArr; &minus;14<i>a</i> + 6<i>a</i> = 25 &minus; 85</div>
     <div>&rArr; &minus;8<i>a</i> = &minus;60 &rArr; <i>a</i> = ${frac('&minus;60', '&minus;8')} = <b>${frac('15', '2')}</b></div>
     <div>Therefore, the required point is <b>(${frac('15', '2')}, 0)</b>.</div>`,
    `(${frac('15', '2')}, 0)`
  ));

  // Q5
  cards.push(qCard(
    5,
    `Find the slope of a line, which passes through the <b>origin</b>, and the <b>mid-point of the line segment joining the points <i>P</i>(0, &minus;4) and <i>B</i>(8, 0)</b>.`,
    `<div>1. Finding the midpoint <i>M</i> of line segment <i>PB</i>:</div>
     <div>&rArr; <i>M</i> = (${frac('0 + 8', '2')}, ${frac('&minus;4 + 0', '2')}) = (${frac('8', '2')}, ${frac('&minus;4', '2')}) = <b>(4, &minus;2)</b></div>
     <div style="margin-top: 8px;">2. Finding the slope of the line passing through origin (0, 0) and <i>M</i>(4, &minus;2):</div>
     <div>Using slope formula <i>m</i> = ${frac('<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>', '<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>')}:</div>
     <div>&rArr; <i>m</i> = ${frac('&minus;2 &minus; 0', '4 &minus; 0')} = ${frac('&minus;2', '4')} = <b>&minus;${frac('1', '2')}</b></div>`,
    `<i>m</i> = &minus;${frac('1', '2')}`
  ));

  // Q6
  cards.push(qCard(
    6,
    `Without using Pythagoras' theorem, show that the points <b>(4, 4), (3, 5) and (&minus;1, &minus;1)</b> are the vertices of a right-angled triangle.`,
    `<div>Let the vertices be <b><i>A</i>(4, 4), <i>B</i>(3, 5), and <i>C</i>(&minus;1, &minus;1)</b>.</div>
     <div>Computing the slopes of the three sides:</div>
     <div>• Slope of <i>AB</i> (<i>m</i><sub>1</sub>) = ${frac('5 &minus; 4', '3 &minus; 4')} = ${frac('1', '&minus;1')} = <b>&minus;1</b></div>
     <div>• Slope of <i>BC</i> (<i>m</i><sub>2</sub>) = ${frac('&minus;1 &minus; 5', '&minus;1 &minus; 3')} = ${frac('&minus;6', '&minus;4')} = <b>${frac('3', '2')}</b></div>
     <div>• Slope of <i>CA</i> (<i>m</i><sub>3</sub>) = ${frac('4 &minus; (&minus;1)', '4 &minus; (&minus;1)')} = ${frac('5', '5')} = <b>1</b></div>
     <div style="margin-top: 8px;">Examining the product of slopes:</div>
     <div>&rArr; <i>m</i><sub>1</sub> &times; <i>m</i><sub>3</sub> = (&minus;1) &times; 1 = <b>&minus;1</b></div>
     <div>Since the product of their slopes is &minus;1, line segment <i>AB</i> is perpendicular to line segment <i>CA</i>:</div>
     <div>&rArr; <b><i>AB</i> &perp; <i>CA</i></b></div>
     <div>Thus, &Delta;<i>ABC</i> is a right-angled triangle with the right angle at <b><i>A</i>(4, 4)</b>.</div>`,
    `Right-angled at <i>A</i>(4, 4) &nbsp; (Hence Proved)`
  ));

  // Q7
  cards.push(qCard(
    7,
    `Find the slope of the line, which makes an angle of <b>30&deg; with the positive direction of the <i>y</i>-axis measured anticlockwise</b>.`,
    `<div>Let &theta; be the angle of inclination of the line with the positive direction of the <i>x</i>-axis measured anticlockwise.</div>
     <div>The positive <i>y</i>-axis itself is inclined at 90&deg; to the positive <i>x</i>-axis.</div>
     <div>Since the line makes 30&deg; anticlockwise with the positive <i>y</i>-axis:</div>
     <div>&rArr; &theta; = 90&deg; + 30&deg; = <b>120&deg;</b></div>
     <div style="margin-top: 8px;">Finding the slope <i>m</i>:</div>
     <div>&rArr; <i>m</i> = tan &theta; = tan 120&deg; = tan (180&deg; &minus; 60&deg;)</div>
     <div>&rArr; <i>m</i> = &minus;tan 60&deg; = <b>&minus;&radic;3</b></div>`,
    `<i>m</i> = &minus;&radic;3`
  ));

  // Q8
  cards.push(qCard(
    8,
    `Find the value of <i>x</i> for which the points <b>(<i>x</i>, &minus;1), (2, 1) and (4, 5)</b> are collinear.`,
    `<div>Let the points be <i>A</i>(<i>x</i>, &minus;1), <i>B</i>(2, 1), and <i>C</i>(4, 5).</div>
     <div>Three points are collinear if and only if: &nbsp; <b>Slope of <i>AB</i> = Slope of <i>BC</i></b></div>
     <div>• Slope of <i>AB</i> = ${frac('1 &minus; (&minus;1)', '2 &minus; <i>x</i>')} = ${frac('2', '2 &minus; <i>x</i>')}</div>
     <div>• Slope of <i>BC</i> = ${frac('5 &minus; 1', '4 &minus; 2')} = ${frac('4', '2')} = 2</div>
     <div style="margin-top: 8px;">Equating slopes:</div>
     <div>&rArr; ${frac('2', '2 &minus; <i>x</i>')} = 2</div>
     <div>&rArr; 2 = 2(2 &minus; <i>x</i>)</div>
     <div>&rArr; 1 = 2 &minus; <i>x</i> &rArr; <b><i>x</i> = 1</b></div>`,
    `<i>x</i> = 1`
  ));

  // Q9
  cards.push(qCard(
    9,
    `Without using the distance formula, show that points <b>(&minus;2, &minus;1), (4, 0), (3, 3) and (&minus;3, 2)</b> are the vertices of a parallelogram.`,
    `<div>Let the vertices be <b><i>A</i>(&minus;2, &minus;1), <i>B</i>(4, 0), <i>C</i>(3, 3), and <i>D</i>(&minus;3, 2)</b> in order.</div>
     <div>A quadrilateral is a parallelogram if its opposite sides are parallel (i.e. have equal slopes):</div>
     <div style="margin-top: 6px;">1. Slopes of opposite sides <i>AB</i> and <i>CD</i>:</div>
     <div>• Slope of <i>AB</i> = ${frac('0 &minus; (&minus;1)', '4 &minus; (&minus;2)')} = <b>${frac('1', '6')}</b></div>
     <div>• Slope of <i>CD</i> = ${frac('2 &minus; 3', '&minus;3 &minus; 3')} = ${frac('&minus;1', '&minus;6')} = <b>${frac('1', '6')}</b></div>
     <div>&rArr; Slope(<i>AB</i>) = Slope(<i>CD</i>) &rArr; <b><i>AB</i> &parallel; <i>CD</i></b></div>
     <div style="margin-top: 6px;">2. Slopes of opposite sides <i>BC</i> and <i>AD</i>:</div>
     <div>• Slope of <i>BC</i> = ${frac('3 &minus; 0', '3 &minus; 4')} = ${frac('3', '&minus;1')} = <b>&minus;3</b></div>
     <div>• Slope of <i>AD</i> = ${frac('2 &minus; (&minus;1)', '&minus;3 &minus; (&minus;2)')} = ${frac('3', '&minus;1')} = <b>&minus;3</b></div>
     <div>&rArr; Slope(<i>BC</i>) = Slope(<i>AD</i>) &rArr; <b><i>BC</i> &parallel; <i>AD</i></b></div>
     <div style="margin-top: 8px;">Since both pairs of opposite sides are parallel, <i>ABCD</i> is a parallelogram.</div>`,
    `<i>ABCD</i> is a parallelogram &nbsp; (Hence Proved)`
  ));

  // Q10
  cards.push(qCard(
    10,
    `Find the angle between the <b><i>x</i>-axis</b> and the line joining the points <b>(3, &minus;1) and (4, &minus;2)</b>.`,
    `<div>The slope <i>m</i> of the line joining (3, &minus;1) and (4, &minus;2) is:</div>
     <div>&rArr; <i>m</i> = ${frac('&minus;2 &minus; (&minus;1)', '4 &minus; 3')} = ${frac('&minus;2 + 1', '1')} = <b>&minus;1</b></div>
     <div style="margin-top: 8px;">Let &theta; be the angle of inclination with the positive direction of the <i>x</i>-axis:</div>
     <div>&rArr; tan &theta; = <i>m</i> = &minus;1</div>
     <div>&rArr; tan &theta; = &minus;tan 45&deg; = tan (180&deg; &minus; 45&deg;) = tan 135&deg;</div>
     <div>&rArr; <b>&theta; = 135&deg;</b></div>`,
    `&theta; = 135&deg;`
  ));

  // Q11
  cards.push(qCard(
    11,
    `The slope of a line is double the slope of another line. If the tangent of the angle between them is <b>${frac('1', '3')}</b>, find the slopes of the lines.`,
    `<div>Let the slope of one line be <i>m</i>, so the slope of the other line is <b>2<i>m</i></b>.</div>
     <div>The angle &theta; between two lines with slopes <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> satisfies:</div>
     <div>&rArr; tan &theta; = | ${frac('2<i>m</i> &minus; <i>m</i>', '1 + (2<i>m</i>)(<i>m</i>)')} | = | ${frac('<i>m</i>', '1 + 2<i>m</i><sup>2</sup>')} | = ${frac('1', '3')}</div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">Case I: When ${frac('<i>m</i>', '1 + 2<i>m</i><sup>2</sup>')} = ${frac('1', '3')}:</div>
     <div>&rArr; 3<i>m</i> = 1 + 2<i>m</i><sup>2</sup> &rArr; 2<i>m</i><sup>2</sup> &minus; 3<i>m</i> + 1 = 0</div>
     <div>&rArr; (2<i>m</i> &minus; 1)(<i>m</i> &minus; 1) = 0 &rArr; <b><i>m</i> = ${frac('1', '2')}</b> &nbsp; or &nbsp; <b><i>m</i> = 1</b></div>
     <div>• If <i>m</i> = ${frac('1', '2')}: slopes are <b>${frac('1', '2')} and 1</b></div>
     <div>• If <i>m</i> = 1: slopes are <b>1 and 2</b></div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">Case II: When ${frac('<i>m</i>', '1 + 2<i>m</i><sup>2</sup>')} = &minus;${frac('1', '3')}:</div>
     <div>&rArr; &minus;3<i>m</i> = 1 + 2<i>m</i><sup>2</sup> &rArr; 2<i>m</i><sup>2</sup> + 3<i>m</i> + 1 = 0</div>
     <div>&rArr; (2<i>m</i> + 1)(<i>m</i> + 1) = 0 &rArr; <b><i>m</i> = &minus;${frac('1', '2')}</b> &nbsp; or &nbsp; <b><i>m</i> = &minus;1</b></div>
     <div>• If <i>m</i> = &minus;${frac('1', '2')}: slopes are <b>&minus;${frac('1', '2')} and &minus;1</b></div>
     <div>• If <i>m</i> = &minus;1: slopes are <b>&minus;1 and &minus;2</b></div>`,
    `(${frac('1', '2')}, 1) &nbsp; OR &nbsp; (1, 2) &nbsp; OR &nbsp; (&minus;${frac('1', '2')}, &minus;1) &nbsp; OR &nbsp; (&minus;1, &minus;2)`
  ));

  // Q12
  cards.push(qCard(
    12,
    `A line passes through <b>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</b> and <b>(<i>h</i>, <i>k</i>)</b>. If the slope of the line is <i>m</i>, show that <b><i>k</i> &minus; <i>y</i><sub>1</sub> = <i>m</i>(<i>h</i> &minus; <i>x</i><sub>1</sub>)</b>.`,
    `<div>Given that the line passes through (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) and (<i>h</i>, <i>k</i>).</div>
     <div>The slope of the line joining these two points is:</div>
     <div>&rArr; Slope = ${frac('<i>k</i> &minus; <i>y</i><sub>1</sub>', '<i>h</i> &minus; <i>x</i><sub>1</sub>')}</div>
     <div>Since the slope is given to be <i>m</i>:</div>
     <div>&rArr; ${frac('<i>k</i> &minus; <i>y</i><sub>1</sub>', '<i>h</i> &minus; <i>x</i><sub>1</sub>')} = <i>m</i></div>
     <div>Cross-multiplying:</div>
     <div>&rArr; <b><i>k</i> &minus; <i>y</i><sub>1</sub> = <i>m</i>(<i>h</i> &minus; <i>x</i><sub>1</sub>)</b></div>`,
    `<i>k</i> &minus; <i>y</i><sub>1</sub> = <i>m</i>(<i>h</i> &minus; <i>x</i><sub>1</sub>) &nbsp; (Hence Proved)`
  ));

  // Q13
  cards.push(qCard(
    13,
    `If three points <b>(<i>h</i>, 0), (<i>a</i>, <i>b</i>) and (0, <i>k</i>)</b> lie on a line, show that <b>${frac('<i>a</i>', '<i>h</i>')} + ${frac('<i>b</i>', '<i>k</i>')} = 1</b>.`,
    `<div>Let the points be <i>A</i>(<i>h</i>, 0), <i>B</i>(<i>a</i>, <i>b</i>), and <i>C</i>(0, <i>k</i>).</div>
     <div>Since the points are collinear: &nbsp; <b>Slope of <i>AB</i> = Slope of <i>BC</i></b></div>
     <div>• Slope of <i>AB</i> = ${frac('<i>b</i> &minus; 0', '<i>a</i> &minus; <i>h</i>')} = ${frac('<i>b</i>', '<i>a</i> &minus; <i>h</i>')}</div>
     <div>• Slope of <i>BC</i> = ${frac('<i>k</i> &minus; <i>b</i>', '0 &minus; <i>a</i>')} = ${frac('<i>k</i> &minus; <i>b</i>', '&minus;<i>a</i>')} = ${frac('<i>b</i> &minus; <i>k</i>', '<i>a</i>')}</div>
     <div style="margin-top: 8px;">Equating slopes:</div>
     <div>&rArr; ${frac('<i>b</i>', '<i>a</i> &minus; <i>h</i>')} = ${frac('<i>b</i> &minus; <i>k</i>', '<i>a</i>')}</div>
     <div>Cross-multiplying:</div>
     <div>&rArr; <i>ab</i> = (<i>a</i> &minus; <i>h</i>)(<i>b</i> &minus; <i>k</i>) = <i>ab</i> &minus; <i>ak</i> &minus; <i>bh</i> + <i>hk</i></div>
     <div>Cancelling <i>ab</i> from both sides:</div>
     <div>&rArr; 0 = &minus;<i>ak</i> &minus; <i>bh</i> + <i>hk</i></div>
     <div>&rArr; <i>ak</i> + <i>bh</i> = <i>hk</i></div>
     <div>Dividing both sides by <i>hk</i>:</div>
     <div>&rArr; ${frac('<i>ak</i>', '<i>hk</i>')} + ${frac('<i>bh</i>', '<i>hk</i>')} = ${frac('<i>hk</i>', '<i>hk</i>')} &rArr; <b>${frac('<i>a</i>', '<i>h</i>')} + ${frac('<i>b</i>', '<i>k</i>')} = 1</b></div>`,
    `${frac('<i>a</i>', '<i>h</i>')} + ${frac('<i>b</i>', '<i>k</i>')} = 1 &nbsp; (Hence Proved)`
  ));

  // Q14
  cards.push(qCard(
    14,
    `Consider the population and year graph: line passes through <b><i>A</i>(1985, 92)</b> and <b><i>B</i>(1995, 97)</b>. Find the slope of the line <i>AB</i> and using it, find what will be the <b>population in the year 2010</b>.`,
    `<div>Given two points on the linear trajectory: <i>A</i>(1985, 92) and <i>B</i>(1995, 97).</div>
     <div style="margin-top: 6px;">1. Finding the slope of line <i>AB</i>:</div>
     <div>&rArr; Slope <i>m</i> = ${frac('97 &minus; 92', '1995 &minus; 1985')} = ${frac('5', '10')} = <b>${frac('1', '2')}</b></div>
     <div style="margin-top: 8px;">2. Finding the population in the year 2010:</div>
     <div>Let <i>y</i> be the population (in crores) in the year 2010.</div>
     <div>The point <i>C</i>(2010, <i>y</i>) lies on the same straight line <i>AB</i>, so:</div>
     <div>&rArr; Slope of <i>BC</i> = Slope of <i>AB</i></div>
     <div>&rArr; ${frac('<i>y</i> &minus; 97', '2010 &minus; 1995')} = ${frac('1', '2')}</div>
     <div>&rArr; ${frac('<i>y</i> &minus; 97', '15')} = ${frac('1', '2')}</div>
     <div>&rArr; <i>y</i> &minus; 97 = ${frac('15', '2')} = 7.5</div>
     <div>&rArr; <i>y</i> = 97 + 7.5 = <b>104.5 crores</b></div>`,
    `Slope = ${frac('1', '2')}, &nbsp; Population in 2010 = 104.5 crores`
  ));

  const banner = makeBanner("Exercise 9.1", "Cartesian Coordinate System, Slopes of Lines & Collinearity");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx91 };
