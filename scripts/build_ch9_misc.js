const { styleBlock, frac, makeBanner, qCard } = require('./ch9_common');

function generateEx9Misc() {
  const cards = [];

  // Q1
  cards.push(qCard(
    1,
    `Find the values of <i>k</i> for which the line <b>(<i>k</i> &minus; 3)<i>x</i> &minus; (4 &minus; <i>k</i><sup>2</sup>)<i>y</i> + <i>k</i><sup>2</sup> &minus; 7<i>k</i> + 6 = 0</b> is:<br/>
     <b>(a) Parallel to the <i>x</i>-axis</b><br/>
     <b>(b) Parallel to the <i>y</i>-axis</b><br/>
     <b>(c) Passing through the origin</b>.`,
    `<div>Given line equation: (<i>k</i> &minus; 3)<i>x</i> &minus; (4 &minus; <i>k</i><sup>2</sup>)<i>y</i> + <i>k</i><sup>2</sup> &minus; 7<i>k</i> + 6 = 0</div>
     <div>Expressing in slope form: (4 &minus; <i>k</i><sup>2</sup>)<i>y</i> = (<i>k</i> &minus; 3)<i>x</i> + (<i>k</i><sup>2</sup> &minus; 7<i>k</i> + 6)</div>
     <div>&rArr; Slope: <i>m</i> = ${frac('<i>k</i> &minus; 3', '4 &minus; <i>k</i><sup>2</sup>')}</div>
     <div style="margin-top: 8px;"><b>(a) Line parallel to the <i>x</i>-axis:</b></div>
     <div>Slope of <i>x</i>-axis = 0 &rArr; ${frac('<i>k</i> &minus; 3', '4 &minus; <i>k</i><sup>2</sup>')} = 0 &rArr; <i>k</i> &minus; 3 = 0 &rArr; <b><i>k</i> = 3</b> &nbsp; (and 4 &minus; 3<sup>2</sup> &ne; 0).</div>
     <div style="margin-top: 8px;"><b>(b) Line parallel to the <i>y</i>-axis:</b></div>
     <div>A vertical line has undefined slope &rArr; Denominator = 0 &rArr; 4 &minus; <i>k</i><sup>2</sup> = 0 &rArr; <b><i>k</i> = &plusmn;2</b>.</div>
     <div style="margin-top: 8px;"><b>(c) Line passing through the origin (0, 0):</b></div>
     <div>Substituting (0, 0) into the line equation:</div>
     <div>&rArr; (<i>k</i> &minus; 3)(0) &minus; (4 &minus; <i>k</i><sup>2</sup>)(0) + <i>k</i><sup>2</sup> &minus; 7<i>k</i> + 6 = 0</div>
     <div>&rArr; <i>k</i><sup>2</sup> &minus; 7<i>k</i> + 6 = 0 &rArr; (<i>k</i> &minus; 1)(<i>k</i> &minus; 6) = 0 &rArr; <b><i>k</i> = 1 &nbsp; or &nbsp; <i>k</i> = 6</b></div>`,
    `(a) <i>k</i> = 3 &nbsp;|&nbsp; (b) <i>k</i> = &plusmn;2 &nbsp;|&nbsp; (c) <i>k</i> = 1 or 6`
  ));

  // Q2
  cards.push(qCard(
    2,
    `Find the values of <b>&theta; and <i>p</i></b>, if the equation <b><i>x</i> cos &theta; + <i>y</i> sin &theta; = <i>p</i></b> is the normal form of the line <b>&radic;3<i>x</i> + <i>y</i> + 2 = 0</b>.`,
    `<div>Given line: &radic;3<i>x</i> + <i>y</i> + 2 = 0</div>
     <div>Rewriting with a positive constant on the RHS:</div>
     <div>&rArr; &minus;&radic;3<i>x</i> &minus; <i>y</i> = 2</div>
     <div>Dividing both sides by &radic;[(&minus;&radic;3)<sup>2</sup> + (&minus;1)<sup>2</sup>] = &radic;(3 + 1) = 2:</div>
     <div>&rArr; (&minus;${frac('&radic;3', '2')})<i>x</i> + (&minus;${frac('1', '2')})<i>y</i> = ${frac('2', '2')} = 1</div>
     <div>Comparing with <i>x</i> cos &theta; + <i>y</i> sin &theta; = <i>p</i>:</div>
     <div>• cos &theta; = &minus;${frac('&radic;3', '2')} &lt; 0</div>
     <div>• sin &theta; = &minus;${frac('1', '2')} &lt; 0</div>
     <div>• <i>p</i> = <b>1</b></div>
     <div>Since both sin &theta; and cos &theta; are negative, &theta; lies in Quadrant III:</div>
     <div>&rArr; &theta; = &pi; + ${frac('&pi;', '6')} = <b>${frac('7&pi;', '6')} &nbsp; (or 210&deg;)</b></div>`,
    `&theta; = ${frac('7&pi;', '6')} &nbsp; (210&deg;), &nbsp; <i>p</i> = 1`
  ));

  // Q3
  cards.push(qCard(
    3,
    `Find the equations of the lines which cut off intercepts on the axes whose <b>sum and product are 1 and &minus;6</b>, respectively.`,
    `<div>Let the intercepts on the <i>x</i>- and <i>y</i>-axes be <i>a</i> and <i>b</i>.</div>
     <div>• Sum of intercepts: <i>a</i> + <i>b</i> = 1 &nbsp; ... (1)</div>
     <div>• Product of intercepts: <i>ab</i> = &minus;6 &nbsp; ... (2)</div>
     <div><i>a</i> and <i>b</i> are roots of <i>t</i><sup>2</sup> &minus; <i>t</i> &minus; 6 = 0 &rArr; (<i>t</i> &minus; 3)(<i>t</i> + 2) = 0.</div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">Case I: <i>a</i> = 3 and <i>b</i> = &minus;2:</div>
     <div>Using intercept form: ${frac('<i>x</i>', '3')} + ${frac('<i>y</i>', '&minus;2')} = 1 &rArr; 2<i>x</i> &minus; 3<i>y</i> = 6 &rArr; <b>2<i>x</i> &minus; 3<i>y</i> &minus; 6 = 0</b></div>
     <div style="margin-top: 8px; color: #EA80FC; font-weight: 700;">Case II: <i>a</i> = &minus;2 and <i>b</i> = 3:</div>
     <div>Using intercept form: ${frac('<i>x</i>', '&minus;2')} + ${frac('<i>y</i>', '3')} = 1 &rArr; &minus;3<i>x</i> + 2<i>y</i> = 6 &rArr; <b>3<i>x</i> &minus; 2<i>y</i> + 6 = 0</b></div>`,
    `2<i>x</i> &minus; 3<i>y</i> &minus; 6 = 0 &nbsp; OR &nbsp; 3<i>x</i> &minus; 2<i>y</i> + 6 = 0`
  ));

  // Q4
  cards.push(qCard(
    4,
    `What are the points on the <b><i>y</i>-axis</b> whose distance from the line <b>${frac('<i>x</i>', '3')} + ${frac('<i>y</i>', '4')} = 1</b> is <b>4 units</b>?`,
    `<div>Writing the line equation in general form: <b>4<i>x</i> + 3<i>y</i> &minus; 12 = 0</b>.</div>
     <div>Let any point on the <i>y</i>-axis be <b><i>P</i>(0, <i>b</i>)</b>.</div>
     <div style="margin-top: 8px;">The perpendicular distance from (0, <i>b</i>) is 4 units:</div>
     <div>&rArr; ${frac('|4(0) + 3(<i>b</i>) &minus; 12|', '&radic;(4<sup>2</sup> + 3<sup>2</sup>)')} = 4</div>
     <div>&rArr; ${frac('|3<i>b</i> &minus; 12|', '5')} = 4 &rArr; |3<i>b</i> &minus; 12| = 20</div>
     <div>• 3<i>b</i> &minus; 12 = 20 &rArr; 3<i>b</i> = 32 &rArr; <b><i>b</i> = ${frac('32', '3')}</b></div>
     <div>• 3<i>b</i> &minus; 12 = &minus;20 &rArr; 3<i>b</i> = &minus;8 &rArr; <b><i>b</i> = &minus;${frac('8', '3')}</b></div>
     <div>Therefore, the points on the <i>y</i>-axis are <b>(0, ${frac('32', '3')}) and (0, &minus;${frac('8', '3')})</b>.</div>`,
    `(0, ${frac('32', '3')}) &nbsp; and &nbsp; (0, &minus;${frac('8', '3')})`
  ));

  // Q5
  cards.push(qCard(
    5,
    `Find the perpendicular distance from the origin to the line joining the points <b>(cos &theta;, sin &theta;) and (cos &phi;, sin &phi;)</b>.`,
    `<div>Equation of the line passing through (cos &theta;, sin &theta;) and (cos &phi;, sin &phi;):</div>
     <div>&rArr; <i>y</i> &minus; sin &theta; = ${frac('sin &phi; &minus; sin &theta;', 'cos &phi; &minus; cos &theta;')}(<i>x</i> &minus; cos &theta;)</div>
     <div>Cross-multiplying and expanding:</div>
     <div>&rArr; (cos &phi; &minus; cos &theta;)<i>y</i> &minus; sin &theta; cos &phi; + sin &theta; cos &theta; = (sin &phi; &minus; sin &theta;)<i>x</i> &minus; cos &theta; sin &phi; + sin &theta; cos &theta;</div>
     <div>&rArr; (sin &theta; &minus; sin &phi;)<i>x</i> + (cos &phi; &minus; cos &theta;)<i>y</i> + (sin &phi; cos &theta; &minus; cos &phi; sin &theta;) = 0</div>
     <div>&rArr; (sin &theta; &minus; sin &phi;)<i>x</i> + (cos &phi; &minus; cos &theta;)<i>y</i> + sin(&phi; &minus; &theta;) = 0</div>
     <div style="margin-top: 8px;">Perpendicular distance from origin (0, 0):</div>
     <div>&rArr; <i>d</i> = ${frac('|sin(&phi; &minus; &theta;)|', '&radic;[(sin &theta; &minus; sin &phi;)<sup>2</sup> + (cos &phi; &minus; cos &theta;)<sup>2</sup>]')}</div>
     <div>Denom<sup>2</sup> = sin<sup>2</sup>&theta; + sin<sup>2</sup>&phi; &minus; 2 sin &theta; sin &phi; + cos<sup>2</sup>&phi; + cos<sup>2</sup>&theta; &minus; 2 cos &theta; cos &phi; = 2 &minus; 2 cos(&phi; &minus; &theta;) = 4 sin<sup>2</sup>(${frac('&phi; &minus; &theta;', '2')})</div>
     <div>&rArr; <i>d</i> = ${frac('|2 sin(<sup>(&phi;&minus;&theta;)</sup>/<sub>2</sub>) cos(<sup>(&phi;&minus;&theta;)</sup>/<sub>2</sub>)|', '2 |sin(<sup>(&phi;&minus;&theta;)</sup>/<sub>2</sub>)|')} = <b>|cos(${frac('&phi; &minus; &theta;', '2')})|</b></div>`,
    `|cos(${frac('&phi; &minus; &theta;', '2')})|`
  ));

  // Q6
  cards.push(qCard(
    6,
    `Find the equation of the line parallel to the <i>y</i>-axis and drawn through the point of intersection of the lines <b><i>x</i> &minus; 7<i>y</i> + 5 = 0 and 3<i>x</i> + <i>y</i> = 0</b>.`,
    `<div>1. Finding the point of intersection:</div>
     <div>From second line: <i>y</i> = &minus;3<i>x</i>.</div>
     <div>Substituting into first line: <i>x</i> &minus; 7(&minus;3<i>x</i>) + 5 = 0</div>
     <div>&rArr; <i>x</i> + 21<i>x</i> + 5 = 0 &rArr; 22<i>x</i> = &minus;5 &rArr; <b><i>x</i> = &minus;${frac('5', '22')}</b></div>
     <div>&rArr; <i>y</i> = &minus;3(&minus;${frac('5', '22')}) = ${frac('15', '22')}</div>
     <div style="margin-top: 8px;">2. Equation of line parallel to the <i>y</i>-axis:</div>
     <div>Any line parallel to the <i>y</i>-axis has the equation <i>x</i> = constant.</div>
     <div>Since it passes through <i>x</i> = &minus;${frac('5', '22')}:</div>
     <div>&rArr; <i>x</i> = &minus;${frac('5', '22')} &rArr; <b>22<i>x</i> + 5 = 0</b></div>`,
    `22<i>x</i> + 5 = 0`
  ));

  // Q7
  cards.push(qCard(
    7,
    `Find the equation of a line drawn perpendicular to the line <b>${frac('<i>x</i>', '4')} + ${frac('<i>y</i>', '6')} = 1</b> through the point where it meets the <i>y</i>-axis.`,
    `<div>1. General form of given line: &nbsp; 3<i>x</i> + 2<i>y</i> &minus; 12 = 0</div>
     <div>Slope <i>m</i><sub>1</sub> = &minus;${frac('3', '2')}.</div>
     <div>Perpendicular slope <i>m</i> = &minus;${frac('1', '<i>m</i><sub>1</sub>')} = <b>${frac('2', '3')}</b>.</div>
     <div style="margin-top: 8px;">2. Point of intersection with <i>y</i>-axis (putting <i>x</i> = 0):</div>
     <div>&rArr; ${frac('0', '4')} + ${frac('<i>y</i>', '6')} = 1 &rArr; <i>y</i> = 6 &rArr; Point is <b>(0, 6)</b>.</div>
     <div style="margin-top: 8px;">3. Equation of the line with slope ${frac('2', '3')} through (0, 6):</div>
     <div>&rArr; <i>y</i> &minus; 6 = ${frac('2', '3')}(<i>x</i> &minus; 0)</div>
     <div>&rArr; 3(<i>y</i> &minus; 6) = 2<i>x</i> &rArr; 3<i>y</i> &minus; 18 = 2<i>x</i></div>
     <div>&rArr; <b>2<i>x</i> &minus; 3<i>y</i> + 18 = 0</b></div>`,
    `2<i>x</i> &minus; 3<i>y</i> + 18 = 0`
  ));

  // Q8
  cards.push(qCard(
    8,
    `Find the area of the triangle formed by the lines <b><i>y</i> &minus; <i>x</i> = 0, &nbsp; <i>x</i> + <i>y</i> = 0, &nbsp; and &nbsp; <i>x</i> &minus; <i>k</i> = 0</b>.`,
    `<div>Finding the three vertices of intersection:</div>
     <div>• Lines <i>y</i> &minus; <i>x</i> = 0 and <i>x</i> + <i>y</i> = 0 intersect at origin <b><i>A</i>(0, 0)</b>.</div>
     <div>• Lines <i>x</i> + <i>y</i> = 0 and <i>x</i> = <i>k</i> intersect at <b><i>B</i>(<i>k</i>, &minus;<i>k</i>)</b>.</div>
     <div>• Lines <i>y</i> &minus; <i>x</i> = 0 and <i>x</i> = <i>k</i> intersect at <b><i>C</i>(<i>k</i>, <i>k</i>)</b>.</div>
     <div style="margin-top: 8px;">Area of triangle with vertices (0, 0), (<i>k</i>, &minus;<i>k</i>), and (<i>k</i>, <i>k</i>):</div>
     <div>&rArr; Area = ${frac('1', '2')} | 0(&minus;<i>k</i> &minus; <i>k</i>) + <i>k</i>(<i>k</i> &minus; 0) + <i>k</i>(0 &minus; (&minus;<i>k</i>)) |</div>
     <div>&rArr; Area = ${frac('1', '2')} | 0 + <i>k</i><sup>2</sup> + <i>k</i><sup>2</sup> | = ${frac('1', '2')} | 2<i>k</i><sup>2</sup> | = <b><i>k</i><sup>2</sup> sq. units</b></div>`,
    `<i>k</i><sup>2</sup> sq. units`
  ));

  // Q9
  cards.push(qCard(
    9,
    `Find the value of <i>p</i> so that the three lines <b>3<i>x</i> + <i>y</i> &minus; 2 = 0, &nbsp; <i>px</i> + 2<i>y</i> &minus; 3 = 0 &nbsp; and &nbsp; 2<i>x</i> &minus; <i>y</i> &minus; 3 = 0</b> may intersect at one point.`,
    `<div>The three lines are concurrent (intersect at a single point).</div>
     <div>1. Solving 3<i>x</i> + <i>y</i> &minus; 2 = 0 and 2<i>x</i> &minus; <i>y</i> &minus; 3 = 0:</div>
     <div>Adding both equations:</div>
     <div>&rArr; (3<i>x</i> + 2<i>x</i>) + (<i>y</i> &minus; <i>y</i>) &minus; 5 = 0 &rArr; 5<i>x</i> = 5 &rArr; <b><i>x</i> = 1</b></div>
     <div>Substituting <i>x</i> = 1 into first line: 3(1) + <i>y</i> &minus; 2 = 0 &rArr; <b><i>y</i> = &minus;1</b></div>
     <div>Point of intersection: <b>(1, &minus;1)</b></div>
     <div style="margin-top: 8px;">2. Since the third line <i>px</i> + 2<i>y</i> &minus; 3 = 0 passes through (1, &minus;1):</div>
     <div>&rArr; <i>p</i>(1) + 2(&minus;1) &minus; 3 = 0</div>
     <div>&rArr; <i>p</i> &minus; 2 &minus; 3 = 0 &rArr; <i>p</i> &minus; 5 = 0 &rArr; <b><i>p</i> = 5</b></div>`,
    `<i>p</i> = 5`
  ));

  // Q10
  cards.push(qCard(
    10,
    `If three lines whose equations are <b><i>y</i> = <i>m</i><sub>1</sub><i>x</i> + <i>c</i><sub>1</sub>, &nbsp; <i>y</i> = <i>m</i><sub>2</sub><i>x</i> + <i>c</i><sub>2</sub> &nbsp; and &nbsp; <i>y</i> = <i>m</i><sub>3</sub><i>x</i> + <i>c</i><sub>3</sub></b> are concurrent, then show that:<br/>
     <b><i>m</i><sub>1</sub>(<i>c</i><sub>2</sub> &minus; <i>c</i><sub>3</sub>) + <i>m</i><sub>2</sub>(<i>c</i><sub>3</sub> &minus; <i>c</i><sub>1</sub>) + <i>m</i><sub>3</sub>(<i>c</i><sub>1</sub> &minus; <i>c</i><sub>2</sub>) = 0</b>.`,
    `<div>1. Finding the intersection of the first two lines:</div>
     <div><i>m</i><sub>1</sub><i>x</i> + <i>c</i><sub>1</sub> = <i>m</i><sub>2</sub><i>x</i> + <i>c</i><sub>2</sub> &rArr; (<i>m</i><sub>1</sub> &minus; <i>m</i><sub>2</sub>)<i>x</i> = <i>c</i><sub>2</sub> &minus; <i>c</i><sub>1</sub></div>
     <div>&rArr; <i>x</i> = ${frac('<i>c</i><sub>2</sub> &minus; <i>c</i><sub>1</sub>', '<i>m</i><sub>1</sub> &minus; <i>m</i><sub>2</sub>')}</div>
     <div>&rArr; <i>y</i> = <i>m</i><sub>1</sub>(${frac('<i>c</i><sub>2</sub> &minus; <i>c</i><sub>1</sub>', '<i>m</i><sub>1</sub> &minus; <i>m</i><sub>2</sub>')}) + <i>c</i><sub>1</sub> = ${frac('<i>m</i><sub>1</sub><i>c</i><sub>2</sub> &minus; <i>m</i><sub>2</sub><i>c</i><sub>1</sub>', '<i>m</i><sub>1</sub> &minus; <i>m</i><sub>2</sub>')}</div>
     <div style="margin-top: 8px;">2. Since the three lines are concurrent, this point satisfies the third line:</div>
     <div>&rArr; ${frac('<i>m</i><sub>1</sub><i>c</i><sub>2</sub> &minus; <i>m</i><sub>2</sub><i>c</i><sub>1</sub>', '<i>m</i><sub>1</sub> &minus; <i>m</i><sub>2</sub>')} = <i>m</i><sub>3</sub>(${frac('<i>c</i><sub>2</sub> &minus; <i>c</i><sub>1</sub>', '<i>m</i><sub>1</sub> &minus; <i>m</i><sub>2</sub>')}) + <i>c</i><sub>3</sub></div>
     <div>Multiplying throughout by (<i>m</i><sub>1</sub> &minus; <i>m</i><sub>2</sub>):</div>
     <div>&rArr; <i>m</i><sub>1</sub><i>c</i><sub>2</sub> &minus; <i>m</i><sub>2</sub><i>c</i><sub>1</sub> = <i>m</i><sub>3</sub>(<i>c</i><sub>2</sub> &minus; <i>c</i><sub>1</sub>) + <i>c</i><sub>3</sub>(<i>m</i><sub>1</sub> &minus; <i>m</i><sub>2</sub>)</div>
     <div>&rArr; <i>m</i><sub>1</sub><i>c</i><sub>2</sub> &minus; <i>m</i><sub>2</sub><i>c</i><sub>1</sub> &minus; <i>m</i><sub>3</sub><i>c</i><sub>2</sub> + <i>m</i><sub>3</sub><i>c</i><sub>1</sub> &minus; <i>m</i><sub>1</sub><i>c</i><sub>3</sub> + <i>m</i><sub>2</sub><i>c</i><sub>3</sub> = 0</div>
     <div>Regrouping by <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, and <i>m</i><sub>3</sub>:</div>
     <div>&rArr; <b><i>m</i><sub>1</sub>(<i>c</i><sub>2</sub> &minus; <i>c</i><sub>3</sub>) + <i>m</i><sub>2</sub>(<i>c</i><sub>3</sub> &minus; <i>c</i><sub>1</sub>) + <i>m</i><sub>3</sub>(<i>c</i><sub>1</sub> &minus; <i>c</i><sub>2</sub>) = 0</b></div>`,
    `<i>m</i><sub>1</sub>(<i>c</i><sub>2</sub> &minus; <i>c</i><sub>3</sub>) + <i>m</i><sub>2</sub>(<i>c</i><sub>3</sub> &minus; <i>c</i><sub>1</sub>) + <i>m</i><sub>3</sub>(<i>c</i><sub>1</sub> &minus; <i>c</i><sub>2</sub>) = 0 &nbsp; (Hence Proved)`
  ));

  // Q11
  cards.push(qCard(
    11,
    `Find the equation of the lines through the point <b>(3, 2)</b>, which make an angle of <b>45&deg; with the line <i>x</i> &minus; 2<i>y</i> = 3</b>.`,
    `<div>Let <i>m</i> be the slope of the required line.</div>
     <div>The slope of <i>x</i> &minus; 2<i>y</i> = 3 is <i>m</i><sub>2</sub> = ${frac('1', '2')}. Angle &theta; = 45&deg;.</div>
     <div>&rArr; tan 45&deg; = | ${frac('<i>m</i> &minus; 1/2', '1 + <i>m</i>/2')} | = | ${frac('2<i>m</i> &minus; 1', '2 + <i>m</i>')} | = 1</div>
     <div style="margin-top: 6px;">• Case I: ${frac('2<i>m</i> &minus; 1', '2 + <i>m</i>')} = 1 &rArr; 2<i>m</i> &minus; 1 = 2 + <i>m</i> &rArr; <b><i>m</i> = 3</b></div>
     <div>Equation through (3, 2): <i>y</i> &minus; 2 = 3(<i>x</i> &minus; 3) &rArr; <i>y</i> &minus; 2 = 3<i>x</i> &minus; 9 &rArr; <b>3<i>x</i> &minus; <i>y</i> &minus; 7 = 0</b></div>
     <div style="margin-top: 6px;">• Case II: ${frac('2<i>m</i> &minus; 1', '2 + <i>m</i>')} = &minus;1 &rArr; 2<i>m</i> &minus; 1 = &minus;2 &minus; <i>m</i> &rArr; 3<i>m</i> = &minus;1 &rArr; <b><i>m</i> = &minus;${frac('1', '3')}</b></div>
     <div>Equation through (3, 2): <i>y</i> &minus; 2 = &minus;${frac('1', '3')}(<i>x</i> &minus; 3) &rArr; 3<i>y</i> &minus; 6 = &minus;<i>x</i> + 3 &rArr; <b><i>x</i> + 3<i>y</i> &minus; 9 = 0</b></div>`,
    `3<i>x</i> &minus; <i>y</i> &minus; 7 = 0 &nbsp; OR &nbsp; <i>x</i> + 3<i>y</i> &minus; 9 = 0`
  ));

  // Q12
  cards.push(qCard(
    12,
    `Find the equation of the line passing through the point of intersection of the lines <b>4<i>x</i> + 7<i>y</i> &minus; 3 = 0 and 2<i>x</i> &minus; 3<i>y</i> + 1 = 0</b> that has <b>equal intercepts on the axes</b>.`,
    `<div>1. Solving 4<i>x</i> + 7<i>y</i> &minus; 3 = 0 and 2<i>x</i> &minus; 3<i>y</i> + 1 = 0:</div>
     <div>Multiplying second equation by 2: 4<i>x</i> &minus; 6<i>y</i> + 2 = 0</div>
     <div>Subtracting: 13<i>y</i> &minus; 5 = 0 &rArr; <b><i>y</i> = ${frac('5', '13')}</b></div>
     <div>&rArr; 2<i>x</i> = 3(${frac('5', '13')}) &minus; 1 = ${frac('15 &minus; 13', '13')} = ${frac('2', '13')} &rArr; <b><i>x</i> = ${frac('1', '13')}</b></div>
     <div>Intersection point: <b>(${frac('1', '13')}, ${frac('5', '13')})</b></div>
     <div style="margin-top: 8px;">2. A line with equal intercepts has equation <i>x</i> + <i>y</i> = <i>a</i>:</div>
     <div>&rArr; <i>a</i> = ${frac('1', '13')} + ${frac('5', '13')} = ${frac('6', '13')}</div>
     <div>&rArr; <i>x</i> + <i>y</i> = ${frac('6', '13')} &rArr; <b>13<i>x</i> + 13<i>y</i> = 6</b></div>`,
    `13<i>x</i> + 13<i>y</i> = 6`
  ));

  // Q13
  cards.push(qCard(
    13,
    `Show that the equation of the line passing through the origin and making an angle &theta; with the line <i>y</i> = <i>mx</i> + <i>c</i> is <b>${frac('<i>y</i>', '<i>x</i>')} = ${frac('<i>m</i> &plusmn; tan &theta;', '1 &mp; <i>m</i> tan &theta;')}</b>.`,
    `<div>Let the equation of the line passing through the origin (0, 0) be <b><i>y</i> = <i>m</i><sub>1</sub><i>x</i></b>, so <i>m</i><sub>1</sub> = ${frac('<i>y</i>', '<i>x</i>')}.</div>
     <div>The angle between <i>y</i> = <i>m</i><sub>1</sub><i>x</i> and <i>y</i> = <i>mx</i> + <i>c</i> is &theta;:</div>
     <div>&rArr; tan &theta; = | ${frac('<i>m</i><sub>1</sub> &minus; <i>m</i>', '1 + <i>m</i><sub>1</sub><i>m</i>')} |</div>
     <div>&rArr; ${frac('<i>m</i><sub>1</sub> &minus; <i>m</i>', '1 + <i>m</i><sub>1</sub><i>m</i>')} = &plusmn; tan &theta;</div>
     <div style="margin-top: 6px;">Solving for <i>m</i><sub>1</sub>:</div>
     <div>• Case (+): <i>m</i><sub>1</sub> &minus; <i>m</i> = tan &theta; + <i>m</i><sub>1</sub> <i>m</i> tan &theta; &rArr; <i>m</i><sub>1</sub>(1 &minus; <i>m</i> tan &theta;) = <i>m</i> + tan &theta; &rArr; <i>m</i><sub>1</sub> = ${frac('<i>m</i> + tan &theta;', '1 &minus; <i>m</i> tan &theta;')}</div>
     <div>• Case (&minus;): <i>m</i><sub>1</sub> &minus; <i>m</i> = &minus;tan &theta; &minus; <i>m</i><sub>1</sub> <i>m</i> tan &theta; &rArr; <i>m</i><sub>1</sub>(1 + <i>m</i> tan &theta;) = <i>m</i> &minus; tan &theta; &rArr; <i>m</i><sub>1</sub> = ${frac('<i>m</i> &minus; tan &theta;', '1 + <i>m</i> tan &theta;')}</div>
     <div style="margin-top: 8px;">Combining both cases and substituting <i>m</i><sub>1</sub> = ${frac('<i>y</i>', '<i>x</i>')}:</div>
     <div>&rArr; <b>${frac('<i>y</i>', '<i>x</i>')} = ${frac('<i>m</i> &plusmn; tan &theta;', '1 &mp; <i>m</i> tan &theta;')}</b></div>`,
    `${frac('<i>y</i>', '<i>x</i>')} = ${frac('<i>m</i> &plusmn; tan &theta;', '1 &mp; <i>m</i> tan &theta;')} &nbsp; (Hence Proved)`
  ));

  // Q14
  cards.push(qCard(
    14,
    `In what ratio, the line joining <b>(&minus;1, 1) and (5, 7)</b> is divided by the line <b><i>x</i> + <i>y</i> = 4</b>?`,
    `<div>Let the line <i>x</i> + <i>y</i> = 4 divide the segment joining <i>A</i>(&minus;1, 1) and <i>B</i>(5, 7) in the ratio <b><i>k</i> : 1</b>.</div>
     <div>By section formula, the point of division <i>P</i> is:</div>
     <div>&rArr; <i>P</i> = (${frac('5<i>k</i> &minus; 1', '<i>k</i> + 1')}, ${frac('7<i>k</i> + 1', '<i>k</i> + 1')})</div>
     <div style="margin-top: 8px;">Since <i>P</i> lies on the line <i>x</i> + <i>y</i> = 4:</div>
     <div>&rArr; ${frac('5<i>k</i> &minus; 1', '<i>k</i> + 1')} + ${frac('7<i>k</i> + 1', '<i>k</i> + 1')} = 4</div>
     <div>&rArr; ${frac('12<i>k</i>', '<i>k</i> + 1')} = 4</div>
     <div>&rArr; 12<i>k</i> = 4(<i>k</i> + 1) = 4<i>k</i> + 4</div>
     <div>&rArr; 8<i>k</i> = 4 &rArr; <b><i>k</i> = ${frac('1', '2')}</b></div>
     <div>Therefore, the line divides the segment in the ratio <b>1 : 2 internally</b>.</div>`,
    `1 : 2 internally`
  ));

  // Q15
  cards.push(qCard(
    15,
    `Find the distance of the line <b>4<i>x</i> + 7<i>y</i> + 5 = 0</b> from the point <b>(1, 2) along the line 2<i>x</i> &minus; <i>y</i> = 0</b>.`,
    `<div>Let <i>A</i>(1, 2). Point <i>A</i> satisfies 2(1) &minus; 2 = 0, so <i>A</i> lies on the line 2<i>x</i> &minus; <i>y</i> = 0.</div>
     <div>Let <i>B</i> be the intersection of 2<i>x</i> &minus; <i>y</i> = 0 and 4<i>x</i> + 7<i>y</i> + 5 = 0:</div>
     <div>&rArr; <i>y</i> = 2<i>x</i></div>
     <div>Substituting into 4<i>x</i> + 7<i>y</i> + 5 = 0:</div>
     <div>&rArr; 4<i>x</i> + 7(2<i>x</i>) + 5 = 0 &rArr; 18<i>x</i> = &minus;5 &rArr; <b><i>x</i> = &minus;${frac('5', '18')}</b></div>
     <div>&rArr; <i>y</i> = 2(&minus;${frac('5', '18')}) = <b>&minus;${frac('5', '9')}</b></div>
     <div style="margin-top: 8px;">Finding the distance <i>AB</i>:</div>
     <div>&rArr; <i>AB</i> = &radic;[ (1 &minus; (&minus;${frac('5', '18')}))<sup>2</sup> + (2 &minus; (&minus;${frac('5', '9')}))<sup>2</sup> ]</div>
     <div>&rArr; = &radic;[ (${frac('23', '18')})<sup>2</sup> + (${frac('23', '9')})<sup>2</sup> ] = &radic;[ (${frac('23', '18')})<sup>2</sup> + (${frac('46', '18')})<sup>2</sup> ]</div>
     <div>&rArr; = ${frac('23', '18')} &radic;[1 + 4] = <b>${frac('23&radic;5', '18')} units</b></div>`,
    `${frac('23&radic;5', '18')} units`
  ));

  // Q16
  cards.push(qCard(
    16,
    `Find the direction in which a straight line must be drawn through the point <b>(&minus;1, 2)</b> so that its point of intersection with the line <b><i>x</i> + <i>y</i> = 4</b> may be at a distance of <b>3 units</b> from this point.`,
    `<div>Let the line through <i>P</i>(&minus;1, 2) make an angle &theta; with the positive <i>x</i>-axis.</div>
     <div>Parametric coordinates of a point <i>Q</i> at distance <i>r</i> = 3 along the line are:</div>
     <div>&rArr; <i>x</i> = &minus;1 + 3 cos &theta; &nbsp; and &nbsp; <i>y</i> = 2 + 3 sin &theta;</div>
     <div style="margin-top: 8px;">Since <i>Q</i> lies on <i>x</i> + <i>y</i> = 4:</div>
     <div>&rArr; (&minus;1 + 3 cos &theta;) + (2 + 3 sin &theta;) = 4</div>
     <div>&rArr; 1 + 3(cos &theta; + sin &theta;) = 4</div>
     <div>&rArr; 3(cos &theta; + sin &theta;) = 3 &rArr; <b>cos &theta; + sin &theta; = 1</b></div>
     <div>Squaring both sides:</div>
     <div>&rArr; cos<sup>2</sup>&theta; + sin<sup>2</sup>&theta; + 2 sin &theta; cos &theta; = 1</div>
     <div>&rArr; 1 + sin 2&theta; = 1 &rArr; sin 2&theta; = 0</div>
     <div>&rArr; 2&theta; = 0&deg; or 180&deg; &rArr; <b>&theta; = 0&deg; or 90&deg;</b></div>
     <div>Hence, the line must be drawn <b>parallel to the <i>x</i>-axis (&theta; = 0&deg;)</b> or <b>parallel to the <i>y</i>-axis (&theta; = 90&deg;)</b>.</div>`,
    `Parallel to <i>x</i>-axis (&theta; = 0&deg;) &nbsp; or &nbsp; Parallel to <i>y</i>-axis (&theta; = 90&deg;)`
  ));

  // Q17
  cards.push(qCard(
    17,
    `The hypotenuse of a right-angled triangle has its ends at points <b>(1, 3) and (&minus;4, 1)</b>. Find the equation of the legs (perpendicular sides) of the triangle.`,
    `<div>Let the ends of the hypotenuse be <i>A</i>(1, 3) and <i>B</i>(&minus;4, 1).</div>
     <div>Let the third vertex forming the right angle be <i>C</i>(<i>x</i>, <i>y</i>).</div>
     <div>If the legs are chosen parallel to the coordinate axes:</div>
     <div>• <b>Case I:</b> Vertex <i>C</i> has coordinates <b>(&minus;4, 3)</b>:</div>
     <div>&nbsp; - Leg <i>AC</i> (horizontal): <b><i>y</i> &minus; 3 = 0</b></div>
     <div>&nbsp; - Leg <i>BC</i> (vertical): <b><i>x</i> + 4 = 0</b></div>
     <div style="margin-top: 6px;">• <b>Case II:</b> Vertex <i>C</i> has coordinates <b>(1, 1)</b>:</div>
     <div>&nbsp; - Leg <i>AC</i> (vertical): <b><i>x</i> &minus; 1 = 0</b></div>
     <div>&nbsp; - Leg <i>BC</i> (horizontal): <b><i>y</i> &minus; 1 = 0</b></div>`,
    `<i>x</i> + 4 = 0 and <i>y</i> &minus; 3 = 0 &nbsp; OR &nbsp; <i>x</i> &minus; 1 = 0 and <i>y</i> &minus; 1 = 0`
  ));

  // Q18
  cards.push(qCard(
    18,
    `Find the image of the point <b>(3, 8)</b> with respect to the line <b><i>x</i> + 3<i>y</i> = 7</b>, assuming the line to be a plane mirror.`,
    `<div>Let the given point be <i>P</i>(3, 8) and its image be <b><i>Q</i>(<i>h</i>, <i>k</i>)</b>.</div>
     <div>Using the reflection formula: &nbsp; <b>${frac('<i>h</i> &minus; <i>x</i><sub>1</sub>', '<i>A</i>')} = ${frac('<i>k</i> &minus; <i>y</i><sub>1</sub>', '<i>B</i>')} = &minus;2 ${frac('<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>', '<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>')}</b></div>
     <div>For the line <i>x</i> + 3<i>y</i> &minus; 7 = 0: <i>A</i> = 1, <i>B</i> = 3, <i>C</i> = &minus;7:</div>
     <div>&rArr; <i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> = 1<sup>2</sup> + 3<sup>2</sup> = 10</div>
     <div>&rArr; <i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i> = 1(3) + 3(8) &minus; 7 = 3 + 24 &minus; 7 = 20</div>
     <div>&rArr; ${frac('<i>h</i> &minus; 3', '1')} = ${frac('<i>k</i> &minus; 8', '3')} = &minus;2(${frac('20', '10')}) = &minus;4</div>
     <div style="margin-top: 8px;">Solving for <i>h</i> and <i>k</i>:</div>
     <div>• <i>h</i> &minus; 3 = &minus;4 &rArr; <b><i>h</i> = &minus;1</b></div>
     <div>• <i>k</i> &minus; 8 = 3(&minus;4) = &minus;12 &rArr; <b><i>k</i> = &minus;4</b></div>
     <div>Therefore, the image point is <b>(&minus;1, &minus;4)</b>.</div>`,
    `(&minus;1, &minus;4)`
  ));

  // Q19
  cards.push(qCard(
    19,
    `If the lines <b><i>y</i> = 3<i>x</i> + 1</b> and <b>2<i>y</i> = <i>x</i> + 3</b> are equally inclined to the line <b><i>y</i> = <i>mx</i> + 4</b>, find the value of <b><i>m</i></b>.`,
    `<div>• Slope of line 1: <i>m</i><sub>1</sub> = 3</div>
     <div>• Slope of line 2: <i>m</i><sub>2</sub> = ${frac('1', '2')}</div>
     <div>• Slope of line 3: <i>m</i><sub>3</sub> = <i>m</i></div>
     <div>Lines 1 and 2 are equally inclined to line 3 &rArr; | ${frac('<i>m</i><sub>1</sub> &minus; <i>m</i>', '1 + <i>m</i><sub>1</sub><i>m</i>')} | = | ${frac('<i>m</i><sub>2</sub> &minus; <i>m</i>', '1 + <i>m</i><sub>2</sub><i>m</i>')} |</div>
     <div>&rArr; | ${frac('3 &minus; <i>m</i>', '1 + 3<i>m</i>')} | = | ${frac('1/2 &minus; <i>m</i>', '1 + <i>m</i>/2')} | = | ${frac('1 &minus; 2<i>m</i>', '2 + <i>m</i>')} |</div>
     <div style="margin-top: 6px;">Taking the negative branch (as the positive branch yields 5<i>m</i><sup>2</sup> + 5 = 0 which has no real roots):</div>
     <div>&rArr; ${frac('3 &minus; <i>m</i>', '1 + 3<i>m</i>')} = &minus;${frac('1 &minus; 2<i>m</i>', '2 + <i>m</i>')} = ${frac('2<i>m</i> &minus; 1', '2 + <i>m</i>')}</div>
     <div>&rArr; (3 &minus; <i>m</i>)(2 + <i>m</i>) = (2<i>m</i> &minus; 1)(1 + 3<i>m</i>)</div>
     <div>&rArr; 6 + <i>m</i> &minus; <i>m</i><sup>2</sup> = 2<i>m</i> + 6<i>m</i><sup>2</sup> &minus; 1 &minus; 3<i>m</i> = 6<i>m</i><sup>2</sup> &minus; <i>m</i> &minus; 1</div>
     <div>&rArr; 7<i>m</i><sup>2</sup> &minus; 2<i>m</i> &minus; 7 = 0</div>
     <div>Applying the quadratic formula:</div>
     <div>&rArr; <i>m</i> = ${frac('2 &plusmn; &radic;[(&minus;2)<sup>2</sup> &minus; 4(7)(&minus;7)]', '2(7)')} = ${frac('2 &plusmn; &radic;[4 + 196]', '14')} = ${frac('2 &plusmn; &radic;200', '14')} = ${frac('2 &plusmn; 10&radic;2', '14')} = <b>${frac('1 &plusmn; 5&radic;2', '7')}</b></div>`,
    `<i>m</i> = ${frac('1 &plusmn; 5&radic;2', '7')}`
  ));

  // Q20
  cards.push(qCard(
    20,
    `If the sum of the perpendicular distances of a variable point <b><i>P</i>(<i>x</i>, <i>y</i>)</b> from the lines <b><i>x</i> + <i>y</i> &minus; 5 = 0 and 3<i>x</i> &minus; 2<i>y</i> + 7 = 0</b> is always <b>10</b>, show that <i>P</i> must move on a line.`,
    `<div>Perpendicular distances of <i>P</i>(<i>x</i>, <i>y</i>):</div>
     <div>• <i>d</i><sub>1</sub> = ${frac('|<i>x</i> + <i>y</i> &minus; 5|', '&radic;(1<sup>2</sup> + 1<sup>2</sup>)')} = ${frac('|<i>x</i> + <i>y</i> &minus; 5|', '&radic;2')}</div>
     <div>• <i>d</i><sub>2</sub> = ${frac('|3<i>x</i> &minus; 2<i>y</i> + 7|', '&radic;(3<sup>2</sup> + (&minus;2)<sup>2</sup>)')} = ${frac('|3<i>x</i> &minus; 2<i>y</i> + 7|', '&radic;13')}</div>
     <div style="margin-top: 8px;">Given condition: <i>d</i><sub>1</sub> + <i>d</i><sub>2</sub> = 10</div>
     <div>&rArr; ${frac('|<i>x</i> + <i>y</i> &minus; 5|', '&radic;2')} + ${frac('|3<i>x</i> &minus; 2<i>y</i> + 7|', '&radic;13')} = 10</div>
     <div>&rArr; &radic;13 |<i>x</i> + <i>y</i> &minus; 5| + &radic;2 |3<i>x</i> &minus; 2<i>y</i> + 7| = 10&radic;26</div>
     <div style="margin-top: 6px;">In any given region determined by the signs of the absolute values:</div>
     <div>&rArr; &plusmn;&radic;13 (<i>x</i> + <i>y</i> &minus; 5) &plusmn; &radic;2 (3<i>x</i> &minus; 2<i>y</i> + 7) = 10&radic;26</div>
     <div>This is an algebraic equation of first degree in <i>x</i> and <i>y</i> of the form <b><i>Ax</i> + <i>By</i> + <i>C</i> = 0</b>.</div>
     <div>Since every first-degree equation in <i>x</i> and <i>y</i> represents a straight line, the locus of <i>P</i> consists of straight line segments.</div>
     <div>Hence, <b><i>P</i> must move on a line</b>.</div>`,
    `Locus is a straight line &nbsp; (Hence Proved)`
  ));

  // Q21
  cards.push(qCard(
    21,
    `Find the equation of the line which is <b>equidistant from parallel lines 9<i>x</i> + 6<i>y</i> &minus; 7 = 0 and 3<i>x</i> + 2<i>y</i> + 6 = 0</b>.`,
    `<div>Writing both equations with identical <i>x</i> and <i>y</i> coefficients:</div>
     <div>• Line 1: 9<i>x</i> + 6<i>y</i> &minus; 7 = 0</div>
     <div>• Line 2: 3(3<i>x</i> + 2<i>y</i> + 6) = 0 &rArr; <b>9<i>x</i> + 6<i>y</i> + 18 = 0</b></div>
     <div style="margin-top: 8px;">Any line parallel to both has the form: <b>9<i>x</i> + 6<i>y</i> + <i>C</i> = 0</b>.</div>
     <div>Since it is midway between the two parallel lines, constant <i>C</i> is the arithmetic mean of <i>C</i><sub>1</sub> and <i>C</i><sub>2</sub>:</div>
     <div>&rArr; <i>C</i> = ${frac('&minus;7 + 18', '2')} = ${frac('11', '2')}</div>
     <div>&rArr; 9<i>x</i> + 6<i>y</i> + ${frac('11', '2')} = 0</div>
     <div>Multiplying by 2:</div>
     <div>&rArr; <b>18<i>x</i> + 12<i>y</i> + 11 = 0</b></div>`,
    `18<i>x</i> + 12<i>y</i> + 11 = 0`
  ));

  // Q22
  cards.push(qCard(
    22,
    `A ray of light passing through the point <b>(1, 2) reflects on the <i>x</i>-axis at point <i>A</i></b>, and the reflected ray passes through the point <b>(5, 3)</b>. Find the coordinates of <i>A</i>.`,
    `<div>Let the coordinates of point <i>A</i> on the <i>x</i>-axis be <b>(<i>a</i>, 0)</b>.</div>
     <div>Let <i>P</i>(1, 2) and <i>Q</i>(5, 3).</div>
     <div>By the optical law of reflection, the reflected ray <i>AQ</i> appears to come from the mirror image <i>P'</i> of point <i>P</i> in the <i>x</i>-axis.</div>
     <div>• Image of <i>P</i>(1, 2) in the <i>x</i>-axis: <b><i>P'</i>(1, &minus;2)</b>.</div>
     <div>Therefore, points <i>P'</i>(1, &minus;2), <i>A</i>(<i>a</i>, 0), and <i>Q</i>(5, 3) are collinear.</div>
     <div style="margin-top: 8px;">Equating slopes:</div>
     <div>&rArr; Slope of <i>P'A</i> = Slope of <i>P'Q</i></div>
     <div>&rArr; ${frac('0 &minus; (&minus;2)', '<i>a</i> &minus; 1')} = ${frac('3 &minus; (&minus;2)', '5 &minus; 1')}</div>
     <div>&rArr; ${frac('2', '<i>a</i> &minus; 1')} = ${frac('5', '4')}</div>
     <div>Cross-multiplying:</div>
     <div>&rArr; 5(<i>a</i> &minus; 1) = 8 &rArr; 5<i>a</i> &minus; 5 = 8 &rArr; 5<i>a</i> = 13 &rArr; <b><i>a</i> = ${frac('13', '5')}</b></div>
     <div>Therefore, the coordinates of <i>A</i> are <b>(${frac('13', '5')}, 0)</b>.</div>`,
    `(${frac('13', '5')}, 0)`
  ));

  // Q23
  cards.push(qCard(
    23,
    `Prove that the product of the lengths of the perpendiculars drawn from points <b>(&radic;[<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>], 0) and (&minus;&radic;[<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>], 0)</b> to the line <b>${frac('<i>x</i>', '<i>a</i>')} cos &theta; + ${frac('<i>y</i>', '<i>b</i>')} sin &theta; = 1</b> is <b><i>b</i><sup>2</sup></b>.`,
    `<div>Writing the line equation in general form:</div>
     <div>&rArr; <b><i>bx</i> cos &theta; + <i>ay</i> sin &theta; &minus; <i>ab</i> = 0</b></div>
     <div>Let <i>c</i> = &radic;[<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>]. The points are (<i>c</i>, 0) and (&minus;<i>c</i>, 0).</div>
     <div style="margin-top: 6px;">1. Perpendicular distance <i>p</i><sub>1</sub> from (<i>c</i>, 0):</div>
     <div>&rArr; <i>p</i><sub>1</sub> = ${frac('|<i>bc</i> cos &theta; &minus; <i>ab</i>|', '&radic;(<i>b</i><sup>2</sup> cos<sup>2</sup>&theta; + <i>a</i><sup>2</sup> sin<sup>2</sup>&theta;)')}</div>
     <div style="margin-top: 6px;">2. Perpendicular distance <i>p</i><sub>2</sub> from (&minus;<i>c</i>, 0):</div>
     <div>&rArr; <i>p</i><sub>2</sub> = ${frac('|&minus;<i>bc</i> cos &theta; &minus; <i>ab</i>|', '&radic;(<i>b</i><sup>2</sup> cos<sup>2</sup>&theta; + <i>a</i><sup>2</sup> sin<sup>2</sup>&theta;)')} = ${frac('|<i>bc</i> cos &theta; + <i>ab</i>|', '&radic;(<i>b</i><sup>2</sup> cos<sup>2</sup>&theta; + <i>a</i><sup>2</sup> sin<sup>2</sup>&theta;)')}</div>
     <div style="margin-top: 8px;">3. Evaluating the product <i>p</i><sub>1</sub> &times; <i>p</i><sub>2</sub>:</div>
     <div>&rArr; <i>p</i><sub>1</sub> <i>p</i><sub>2</sub> = ${frac('|(<i>bc</i> cos &theta; &minus; <i>ab</i>)(<i>bc</i> cos &theta; + <i>ab</i>)|', '<i>b</i><sup>2</sup> cos<sup>2</sup>&theta; + <i>a</i><sup>2</sup> sin<sup>2</sup>&theta;')} = ${frac('|<i>b</i><sup>2</sup> <i>c</i><sup>2</sup> cos<sup>2</sup>&theta; &minus; <i>a</i><sup>2</sup> <i>b</i><sup>2</sup>|', '<i>b</i><sup>2</sup> cos<sup>2</sup>&theta; + <i>a</i><sup>2</sup> sin<sup>2</sup>&theta;')}</div>
     <div>Substituting <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>:</div>
     <div>&rArr; Numerator = <i>b</i><sup>2</sup> | (<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>)cos<sup>2</sup>&theta; &minus; <i>a</i><sup>2</sup> | = <i>b</i><sup>2</sup> | <i>a</i><sup>2</sup>(cos<sup>2</sup>&theta; &minus; 1) &minus; <i>b</i><sup>2</sup> cos<sup>2</sup>&theta; |</div>
     <div>&rArr; = <i>b</i><sup>2</sup> | &minus;<i>a</i><sup>2</sup> sin<sup>2</sup>&theta; &minus; <i>b</i><sup>2</sup> cos<sup>2</sup>&theta; | = <i>b</i><sup>2</sup>(<i>a</i><sup>2</sup> sin<sup>2</sup>&theta; + <i>b</i><sup>2</sup> cos<sup>2</sup>&theta;)</div>
     <div>&rArr; <i>p</i><sub>1</sub> <i>p</i><sub>2</sub> = ${frac('<i>b</i><sup>2</sup>(<i>a</i><sup>2</sup> sin<sup>2</sup>&theta; + <i>b</i><sup>2</sup> cos<sup>2</sup>&theta;)', '<i>b</i><sup>2</sup> cos<sup>2</sup>&theta; + <i>a</i><sup>2</sup> sin<sup>2</sup>&theta;')} = <b><i>b</i><sup>2</sup></b></div>`,
    `<i>p</i><sub>1</sub><i>p</i><sub>2</sub> = <i>b</i><sup>2</sup> &nbsp; (Hence Proved)`
  ));

  // Q24
  cards.push(qCard(
    24,
    `A person standing at the junction of two straight paths represented by <b>2<i>x</i> &minus; 3<i>y</i> + 4 = 0 and 3<i>x</i> + 4<i>y</i> &minus; 5 = 0</b> wants to reach the path <b>6<i>x</i> &minus; 7<i>y</i> + 8 = 0</b> in the least time. Find the equation of the path that he should follow.`,
    `<div>1. The person starts from the intersection of 2<i>x</i> &minus; 3<i>y</i> + 4 = 0 and 3<i>x</i> + 4<i>y</i> &minus; 5 = 0:</div>
     <div>Multiplying (1) by 4 and (2) by 3:</div>
     <div>&rArr; 8<i>x</i> &minus; 12<i>y</i> + 16 = 0 &nbsp; and &nbsp; 9<i>x</i> + 12<i>y</i> &minus; 15 = 0</div>
     <div>Adding: 17<i>x</i> + 1 = 0 &rArr; <b><i>x</i> = &minus;${frac('1', '17')}</b></div>
     <div>From (1): 3<i>y</i> = 2(&minus;${frac('1', '17')}) + 4 = ${frac('&minus;2 + 68', '17')} = ${frac('66', '17')} &rArr; <b><i>y</i> = ${frac('22', '17')}</b></div>
     <div>Starting point: <b><i>P</i>(&minus;${frac('1', '17')}, ${frac('22', '17')})</b></div>
     <div style="margin-top: 8px;">2. The shortest distance/time path to a line is along the perpendicular:</div>
     <div>Slope of target line 6<i>x</i> &minus; 7<i>y</i> + 8 = 0 is <i>m</i><sub>1</sub> = ${frac('6', '7')}.</div>
     <div>Slope of perpendicular path: <i>m</i> = &minus;${frac('1', '<i>m</i><sub>1</sub>')} = <b>&minus;${frac('7', '6')}</b>.</div>
     <div style="margin-top: 8px;">3. Equation of the path through <i>P</i> with slope &minus;${frac('7', '6')}:</div>
     <div>&rArr; <i>y</i> &minus; ${frac('22', '17')} = &minus;${frac('7', '6')}[<i>x</i> &minus; (&minus;${frac('1', '17')})]</div>
     <div>&rArr; ${frac('17<i>y</i> &minus; 22', '17')} = &minus;${frac('7', '6')}[ ${frac('17<i>x</i> + 1', '17')} ]</div>
     <div>Multiplying by 17 &times; 6:</div>
     <div>&rArr; 6(17<i>y</i> &minus; 22) = &minus;7(17<i>x</i> + 1)</div>
     <div>&rArr; 102<i>y</i> &minus; 132 = &minus;119<i>x</i> &minus; 7</div>
     <div>&rArr; <b>119<i>x</i> + 102<i>y</i> &minus; 125 = 0</b></div>`,
    `119<i>x</i> + 102<i>y</i> &minus; 125 = 0`
  ));

  const banner = makeBanner("Miscellaneous Exercise", "Straight Lines Comprehensive Review & Advanced Loci");
  return `${styleBlock}\n<div style="padding: 4px 2px;">\n${banner}\n${cards.join('\n')}\n</div>`;
}

module.exports = { generateEx9Misc };
