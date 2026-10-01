const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch10_common");

function buildEx2() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Find the coordinates of the focus, axis of the parabola, the equation of the directrix and the length of the latus rectum for: y<sup>2</sup> = 12x.",
    `<div>The given equation is <i>y</i><sup>2</sup> = 12<i>x</i>.</div>
     <div>Since the coefficient of <i>x</i> is positive, the parabola opens towards the right.</div>
     <div>Comparing with the standard equation <i>y</i><sup>2</sup> = 4<i>ax</i>:</div>
     <div>&rArr; 4<i>a</i> = 12 &rArr; <b><i>a</i> = 3</b></div>
     <div>1. <b>Coordinates of focus:</b> (<i>a</i>, 0) = <b>(3, 0)</b></div>
     <div>2. <b>Axis of the parabola:</b> Along the <b><i>x</i>-axis</b> (<i>y</i> = 0)</div>
     <div>3. <b>Equation of directrix:</b> <i>x</i> = &minus;<i>a</i> &rArr; <i>x</i> = &minus;3 &rArr; <b><i>x</i> + 3 = 0</b></div>
     <div>4. <b>Length of latus rectum:</b> 4<i>a</i> = 4(3) = <b>12</b></div>`,
    "Focus: (3, 0), Axis: x-axis, Directrix: x + 3 = 0, Latus Rectum: 12"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "Find the coordinates of the focus, axis of the parabola, the equation of the directrix and the length of the latus rectum for: x<sup>2</sup> = 6y.",
    `<div>The given equation is <i>x</i><sup>2</sup> = 6<i>y</i>.</div>
     <div>Since the coefficient of <i>y</i> is positive, the parabola opens upwards.</div>
     <div>Comparing with the standard equation <i>x</i><sup>2</sup> = 4<i>ay</i>:</div>
     <div>&rArr; 4<i>a</i> = 6 &rArr; <b><i>a</i> = ${frac("6", "4")} = ${frac("3", "2")}</b></div>
     <div>1. <b>Coordinates of focus:</b> (0, <i>a</i>) = <b>(0, ${frac("3", "2")})</b></div>
     <div>2. <b>Axis of the parabola:</b> Along the <b><i>y</i>-axis</b> (<i>x</i> = 0)</div>
     <div>3. <b>Equation of directrix:</b> <i>y</i> = &minus;<i>a</i> &rArr; <i>y</i> = &minus;${frac("3", "2")} &rArr; <b>2<i>y</i> + 3 = 0</b></div>
     <div>4. <b>Length of latus rectum:</b> 4<i>a</i> = 6</div>`,
    `Focus: (0, ${frac("3", "2")}), Axis: y-axis, Directrix: y = &minus;${frac("3", "2")}, Latus Rectum: 6`
  ));

  // Q3
  cards.push(qCard(
    "3",
    "Find the coordinates of the focus, axis of the parabola, the equation of the directrix and the length of the latus rectum for: y<sup>2</sup> = &minus;8x.",
    `<div>The given equation is <i>y</i><sup>2</sup> = &minus;8<i>x</i>.</div>
     <div>Since the coefficient of <i>x</i> is negative, the parabola opens towards the left.</div>
     <div>Comparing with the standard equation <i>y</i><sup>2</sup> = &minus;4<i>ax</i>:</div>
     <div>&rArr; 4<i>a</i> = 8 &rArr; <b><i>a</i> = 2</b></div>
     <div>1. <b>Coordinates of focus:</b> (&minus;<i>a</i>, 0) = <b>(&minus;2, 0)</b></div>
     <div>2. <b>Axis of the parabola:</b> Along the <b><i>x</i>-axis</b> (<i>y</i> = 0)</div>
     <div>3. <b>Equation of directrix:</b> <i>x</i> = <i>a</i> &rArr; <b><i>x</i> = 2</b> (or <i>x</i> &minus; 2 = 0)</div>
     <div>4. <b>Length of latus rectum:</b> 4<i>a</i> = 4(2) = <b>8</b></div>`,
    "Focus: (&minus;2, 0), Axis: x-axis, Directrix: x = 2, Latus Rectum: 8"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the coordinates of the focus, axis of the parabola, the equation of the directrix and the length of the latus rectum for: x<sup>2</sup> = &minus;16y.",
    `<div>The given equation is <i>x</i><sup>2</sup> = &minus;16<i>y</i>.</div>
     <div>Since the coefficient of <i>y</i> is negative, the parabola opens downwards.</div>
     <div>Comparing with the standard equation <i>x</i><sup>2</sup> = &minus;4<i>ay</i>:</div>
     <div>&rArr; 4<i>a</i> = 16 &rArr; <b><i>a</i> = 4</b></div>
     <div>1. <b>Coordinates of focus:</b> (0, &minus;<i>a</i>) = <b>(0, &minus;4)</b></div>
     <div>2. <b>Axis of the parabola:</b> Along the <b><i>y</i>-axis</b> (<i>x</i> = 0)</div>
     <div>3. <b>Equation of directrix:</b> <i>y</i> = <i>a</i> &rArr; <b><i>y</i> = 4</b> (or <i>y</i> &minus; 4 = 0)</div>
     <div>4. <b>Length of latus rectum:</b> 4<i>a</i> = 4(4) = <b>16</b></div>`,
    "Focus: (0, &minus;4), Axis: y-axis, Directrix: y = 4, Latus Rectum: 16"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Find the coordinates of the focus, axis of the parabola, the equation of the directrix and the length of the latus rectum for: y<sup>2</sup> = 10x.",
    `<div>The given equation is <i>y</i><sup>2</sup> = 10<i>x</i>.</div>
     <div>Since the coefficient of <i>x</i> is positive, the parabola opens towards the right.</div>
     <div>Comparing with the standard equation <i>y</i><sup>2</sup> = 4<i>ax</i>:</div>
     <div>&rArr; 4<i>a</i> = 10 &rArr; <b><i>a</i> = ${frac("10", "4")} = ${frac("5", "2")}</b></div>
     <div>1. <b>Coordinates of focus:</b> (<i>a</i>, 0) = <b>(${frac("5", "2")}, 0)</b></div>
     <div>2. <b>Axis of the parabola:</b> Along the <b><i>x</i>-axis</b> (<i>y</i> = 0)</div>
     <div>3. <b>Equation of directrix:</b> <i>x</i> = &minus;<i>a</i> &rArr; <i>x</i> = &minus;${frac("5", "2")} &rArr; <b>2<i>x</i> + 5 = 0</b></div>
     <div>4. <b>Length of latus rectum:</b> 4<i>a</i> = 10</div>`,
    `Focus: (${frac("5", "2")}, 0), Axis: x-axis, Directrix: x = &minus;${frac("5", "2")}, Latus Rectum: 10`
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Find the coordinates of the focus, axis of the parabola, the equation of the directrix and the length of the latus rectum for: x<sup>2</sup> = &minus;9y.",
    `<div>The given equation is <i>x</i><sup>2</sup> = &minus;9<i>y</i>.</div>
     <div>Since the coefficient of <i>y</i> is negative, the parabola opens downwards.</div>
     <div>Comparing with the standard equation <i>x</i><sup>2</sup> = &minus;4<i>ay</i>:</div>
     <div>&rArr; 4<i>a</i> = 9 &rArr; <b><i>a</i> = ${frac("9", "4")}</b></div>
     <div>1. <b>Coordinates of focus:</b> (0, &minus;<i>a</i>) = <b>(0, &minus;${frac("9", "4")})</b></div>
     <div>2. <b>Axis of the parabola:</b> Along the <b><i>y</i>-axis</b> (<i>x</i> = 0)</div>
     <div>3. <b>Equation of directrix:</b> <i>y</i> = <i>a</i> &rArr; <b><i>y</i> = ${frac("9", "4")}</b> &rArr; <b>4<i>y</i> &minus; 9 = 0</b></div>
     <div>4. <b>Length of latus rectum:</b> 4<i>a</i> = 9</div>`,
    `Focus: (0, &minus;${frac("9", "4")}), Axis: y-axis, Directrix: y = ${frac("9", "4")}, Latus Rectum: 9`
  ));

  // Q7
  cards.push(qCard(
    "7",
    "Find the equation of the parabola with Focus (6, 0); directrix x = &minus;6.",
    `<div>Given: Focus = (6, 0) and Directrix <i>x</i> = &minus;6.</div>
     <div>The focus lies on the positive <i>x</i>-axis, and the directrix is to the left of the <i>y</i>-axis.</div>
     <div>Hence, the axis of the parabola is the <i>x</i>-axis and it opens towards the right.</div>
     <div>The standard form is:</div>
     <div>&nbsp;&nbsp;<i>y</i><sup>2</sup> = 4<i>ax</i></div>
     <div>Comparing the focus (<i>a</i>, 0) with (6, 0), we get <b><i>a</i> = 6</b>.</div>
     <div>Substituting <i>a</i> = 6:</div>
     <div>&rArr; <i>y</i><sup>2</sup> = 4(6)<i>x</i></div>
     <div>&rArr; <i>y</i><sup>2</sup> = 24<i>x</i></div>`,
    "y<sup>2</sup> = 24x"
  ));

  // Q8
  cards.push(qCard(
    "8",
    "Find the equation of the parabola with Focus (0, &minus;3); directrix y = 3.",
    `<div>Given: Focus = (0, &minus;3) and Directrix <i>y</i> = 3.</div>
     <div>The focus lies on the negative <i>y</i>-axis, and the directrix is above the <i>x</i>-axis.</div>
     <div>Hence, the axis of the parabola is the <i>y</i>-axis and it opens downwards.</div>
     <div>The standard form is:</div>
     <div>&nbsp;&nbsp;<i>x</i><sup>2</sup> = &minus;4<i>ay</i></div>
     <div>Comparing the focus (0, &minus;<i>a</i>) with (0, &minus;3), we get <b><i>a</i> = 3</b>.</div>
     <div>Substituting <i>a</i> = 3:</div>
     <div>&rArr; <i>x</i><sup>2</sup> = &minus;4(3)<i>y</i></div>
     <div>&rArr; <i>x</i><sup>2</sup> = &minus;12<i>y</i></div>`,
    "x<sup>2</sup> = &minus;12y"
  ));

  // Q9
  cards.push(qCard(
    "9",
    "Find the equation of the parabola with Vertex (0, 0); focus (3, 0).",
    `<div>Given: Vertex = (0, 0) and Focus = (3, 0).</div>
     <div>Since the vertex is at the origin and the focus lies on the positive <i>x</i>-axis:</div>
     <div>&rArr; The axis of the parabola is the <i>x</i>-axis and it opens towards the right.</div>
     <div>The standard equation is:</div>
     <div>&nbsp;&nbsp;<i>y</i><sup>2</sup> = 4<i>ax</i></div>
     <div>Comparing (<i>a</i>, 0) = (3, 0), we have <b><i>a</i> = 3</b>.</div>
     <div>&rArr; <i>y</i><sup>2</sup> = 4 &times; 3 &times; <i>x</i></div>
     <div>&rArr; <i>y</i><sup>2</sup> = 12<i>x</i></div>`,
    "y<sup>2</sup> = 12x"
  ));

  // Q10
  cards.push(qCard(
    "10",
    "Find the equation of the parabola with Vertex (0, 0); focus (&minus;2, 0).",
    `<div>Given: Vertex = (0, 0) and Focus = (&minus;2, 0).</div>
     <div>Since the vertex is at the origin and the focus lies on the negative <i>x</i>-axis:</div>
     <div>&rArr; The axis of the parabola is the <i>x</i>-axis and it opens towards the left.</div>
     <div>The standard equation is:</div>
     <div>&nbsp;&nbsp;<i>y</i><sup>2</sup> = &minus;4<i>ax</i></div>
     <div>Comparing (&minus;<i>a</i>, 0) = (&minus;2, 0), we get <b><i>a</i> = 2</b>.</div>
     <div>&rArr; <i>y</i><sup>2</sup> = &minus;4 &times; 2 &times; <i>x</i></div>
     <div>&rArr; <i>y</i><sup>2</sup> = &minus;8<i>x</i></div>`,
    "y<sup>2</sup> = &minus;8x"
  ));

  // Q11
  cards.push(qCard(
    "11",
    "Find the equation of the parabola with Vertex (0, 0) passing through (2, 3) and axis is along x-axis.",
    `<div>Since the vertex is (0, 0) and the axis is along the <i>x</i>-axis, the equation is either <i>y</i><sup>2</sup> = 4<i>ax</i> or <i>y</i><sup>2</sup> = &minus;4<i>ax</i>.</div>
     <div>The point (2, 3) lies in the first quadrant (where <i>x</i> &gt; 0).</div>
     <div>Hence, the parabola opens towards the right:</div>
     <div>&nbsp;&nbsp;<i>y</i><sup>2</sup> = 4<i>ax</i> &hellip; (1)</div>
     <div>Since the parabola passes through (2, 3), substitute <i>x</i> = 2 and <i>y</i> = 3:</div>
     <div>&rArr; 3<sup>2</sup> = 4<i>a</i>(2)</div>
     <div>&rArr; 9 = 8<i>a</i> &rArr; <b><i>a</i> = ${frac("9", "8")}</b></div>
     <div>Substitute <i>a</i> = ${frac("9", "8")} into (1):</div>
     <div>&rArr; <i>y</i><sup>2</sup> = 4(${frac("9", "8")})<i>x</i></div>
     <div>&rArr; <i>y</i><sup>2</sup> = ${frac("9", "2")}<i>x</i></div>
     <div>&rArr; 2<i>y</i><sup>2</sup> = 9<i>x</i></div>`,
    "2y<sup>2</sup> = 9x"
  ));

  // Q12
  cards.push(qCard(
    "12",
    "Find the equation of the parabola with Vertex (0, 0), passing through (5, 2) and symmetric with respect to y-axis.",
    `<div>Since the vertex is (0, 0) and the curve is symmetric with respect to the <i>y</i>-axis:</div>
     <div>The equation is of the form <i>x</i><sup>2</sup> = 4<i>ay</i> or <i>x</i><sup>2</sup> = &minus;4<i>ay</i>.</div>
     <div>Since the point (5, 2) lies in the first quadrant (where <i>y</i> &gt; 0), the parabola opens upwards:</div>
     <div>&nbsp;&nbsp;<i>x</i><sup>2</sup> = 4<i>ay</i> &hellip; (1)</div>
     <div>Since the parabola passes through (5, 2), substitute <i>x</i> = 5 and <i>y</i> = 2:</div>
     <div>&rArr; 5<sup>2</sup> = 4<i>a</i>(2)</div>
     <div>&rArr; 25 = 8<i>a</i> &rArr; <b><i>a</i> = ${frac("25", "8")}</b></div>
     <div>Substitute <i>a</i> = ${frac("25", "8")} into (1):</div>
     <div>&rArr; <i>x</i><sup>2</sup> = 4(${frac("25", "8")})<i>y</i></div>
     <div>&rArr; <i>x</i><sup>2</sup> = ${frac("25", "2")}<i>y</i></div>
     <div>&rArr; 2<i>x</i><sup>2</sup> = 25<i>y</i></div>`,
    "2x<sup>2</sup> = 25y"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 10.2", "Foci, Directrices & Standard Equations of Parabolas")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx2 };
