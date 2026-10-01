const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch10_common");

function buildEx1() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Find the equation of the circle with centre (0, 2) and radius 2.",
    `<div>The standard equation of a circle with centre (<i>h</i>, <i>k</i>) and radius <i>r</i> is:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></div>
     <div>Given: (<i>h</i>, <i>k</i>) = (0, 2) and <i>r</i> = 2</div>
     <div>Substituting the given values:</div>
     <div>&rArr; (<i>x</i> &minus; 0)<sup>2</sup> + (<i>y</i> &minus; 2)<sup>2</sup> = 2<sup>2</sup></div>
     <div>&rArr; <i>x</i><sup>2</sup> + (<i>y</i><sup>2</sup> &minus; 4<i>y</i> + 4) = 4</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 4<i>y</i> + 4 &minus; 4 = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 4<i>y</i> = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> &minus; 4y = 0"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "Find the equation of the circle with centre (&minus;2, 3) and radius 4.",
    `<div>The standard equation of a circle with centre (<i>h</i>, <i>k</i>) and radius <i>r</i> is:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></div>
     <div>Given: (<i>h</i>, <i>k</i>) = (&minus;2, 3) and <i>r</i> = 4</div>
     <div>Substituting the given values:</div>
     <div>&rArr; (<i>x</i> &minus; (&minus;2))<sup>2</sup> + (<i>y</i> &minus; 3)<sup>2</sup> = 4<sup>2</sup></div>
     <div>&rArr; (<i>x</i> + 2)<sup>2</sup> + (<i>y</i> &minus; 3)<sup>2</sup> = 16</div>
     <div>&rArr; <i>x</i><sup>2</sup> + 4<i>x</i> + 4 + <i>y</i><sup>2</sup> &minus; 6<i>y</i> + 9 = 16</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 4<i>x</i> &minus; 6<i>y</i> + 13 &minus; 16 = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 4<i>x</i> &minus; 6<i>y</i> &minus; 3 = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> + 4x &minus; 6y &minus; 3 = 0"
  ));

  // Q3
  cards.push(qCard(
    "3",
    `Find the equation of the circle with centre (${frac("1", "2")}, ${frac("1", "4")}) and radius ${frac("1", "12")}.`,
    `<div>The standard equation of a circle with centre (<i>h</i>, <i>k</i>) and radius <i>r</i> is:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></div>
     <div>Given: (<i>h</i>, <i>k</i>) = (${frac("1", "2")}, ${frac("1", "4")}) and <i>r</i> = ${frac("1", "12")}</div>
     <div>Substituting the given values:</div>
     <div>&rArr; (<i>x</i> &minus; ${frac("1", "2")})<sup>2</sup> + (<i>y</i> &minus; ${frac("1", "4")})<sup>2</sup> = (${frac("1", "12")})<sup>2</sup></div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; <i>x</i> + ${frac("1", "4")} + <i>y</i><sup>2</sup> &minus; ${frac("1", "2")}<i>y</i> + ${frac("1", "16")} = ${frac("1", "144")}</div>
     <div>Multiplying the entire equation by the LCM 144:</div>
     <div>&rArr; 144<i>x</i><sup>2</sup> &minus; 144<i>x</i> + 36 + 144<i>y</i><sup>2</sup> &minus; 72<i>y</i> + 9 = 1</div>
     <div>&rArr; 144<i>x</i><sup>2</sup> + 144<i>y</i><sup>2</sup> &minus; 144<i>x</i> &minus; 72<i>y</i> + 45 &minus; 1 = 0</div>
     <div>&rArr; 144<i>x</i><sup>2</sup> + 144<i>y</i><sup>2</sup> &minus; 144<i>x</i> &minus; 72<i>y</i> + 44 = 0</div>
     <div>Dividing the equation by 4:</div>
     <div>&rArr; 36<i>x</i><sup>2</sup> + 36<i>y</i><sup>2</sup> &minus; 36<i>x</i> &minus; 18<i>y</i> + 11 = 0</div>`,
    "36x<sup>2</sup> + 36y<sup>2</sup> &minus; 36x &minus; 18y + 11 = 0"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the equation of the circle with centre (1, 1) and radius &radic;2.",
    `<div>The standard equation of a circle with centre (<i>h</i>, <i>k</i>) and radius <i>r</i> is:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></div>
     <div>Given: (<i>h</i>, <i>k</i>) = (1, 1) and <i>r</i> = &radic;2</div>
     <div>Substituting the values:</div>
     <div>&rArr; (<i>x</i> &minus; 1)<sup>2</sup> + (<i>y</i> &minus; 1)<sup>2</sup> = (&radic;2)<sup>2</sup></div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; 2<i>x</i> + 1 + <i>y</i><sup>2</sup> &minus; 2<i>y</i> + 1 = 2</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 2<i>x</i> &minus; 2<i>y</i> + 2 &minus; 2 = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 2<i>x</i> &minus; 2<i>y</i> = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> &minus; 2x &minus; 2y = 0"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Find the equation of the circle with centre (&minus;a, &minus;b) and radius &radic;(a<sup>2</sup> &minus; b<sup>2</sup>).",
    `<div>The standard equation of a circle with centre (<i>h</i>, <i>k</i>) and radius <i>r</i> is:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></div>
     <div>Given: (<i>h</i>, <i>k</i>) = (&minus;<i>a</i>, &minus;<i>b</i>) and <i>r</i> = &radic;(<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>)</div>
     <div>Substituting the values:</div>
     <div>&rArr; (<i>x</i> &minus; (&minus;<i>a</i>))<sup>2</sup> + (<i>y</i> &minus; (&minus;<i>b</i>))<sup>2</sup> = (&radic;(<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>))<sup>2</sup></div>
     <div>&rArr; (<i>x</i> + <i>a</i>)<sup>2</sup> + (<i>y</i> + <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup></div>
     <div>&rArr; <i>x</i><sup>2</sup> + 2<i>ax</i> + <i>a</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>by</i> + <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup></div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>ax</i> + 2<i>by</i> + <i>b</i><sup>2</sup> + <i>b</i><sup>2</sup> = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>ax</i> + 2<i>by</i> + 2<i>b</i><sup>2</sup> = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> + 2ax + 2by + 2b<sup>2</sup> = 0"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Find the centre and radius of the circle: (x + 5)<sup>2</sup> + (y &minus; 3)<sup>2</sup> = 36.",
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;(<i>x</i> + 5)<sup>2</sup> + (<i>y</i> &minus; 3)<sup>2</sup> = 36</div>
     <div>Rewriting in the standard form (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>:</div>
     <div>&rArr; [<i>x</i> &minus; (&minus;5)]<sup>2</sup> + (<i>y</i> &minus; 3)<sup>2</sup> = 6<sup>2</sup></div>
     <div>Comparing with the standard equation:</div>
     <div>&rArr; <i>h</i> = &minus;5, &nbsp;<i>k</i> = 3, &nbsp;<i>r</i> = 6</div>
     <div>Thus, Centre = (<i>h</i>, <i>k</i>) = (&minus;5, 3) and Radius = 6 units.</div>`,
    "Centre = (&minus;5, 3), Radius = 6"
  ));

  // Q7
  cards.push(qCard(
    "7",
    "Find the centre and radius of the circle: x<sup>2</sup> + y<sup>2</sup> &minus; 4x &minus; 8y &minus; 45 = 0.",
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 4<i>x</i> &minus; 8<i>y</i> &minus; 45 = 0</div>
     <div>Grouping <i>x</i> and <i>y</i> terms and transposing constant:</div>
     <div>&rArr; (<i>x</i><sup>2</sup> &minus; 4<i>x</i>) + (<i>y</i><sup>2</sup> &minus; 8<i>y</i>) = 45</div>
     <div>Completing the squares by adding [(-4)/2]<sup>2</sup> = 4 and [(-8)/2]<sup>2</sup> = 16 to both sides:</div>
     <div>&rArr; (<i>x</i><sup>2</sup> &minus; 4<i>x</i> + 4) + (<i>y</i><sup>2</sup> &minus; 8<i>y</i> + 16) = 45 + 4 + 16</div>
     <div>&rArr; (<i>x</i> &minus; 2)<sup>2</sup> + (<i>y</i> &minus; 4)<sup>2</sup> = 65</div>
     <div>&rArr; (<i>x</i> &minus; 2)<sup>2</sup> + (<i>y</i> &minus; 4)<sup>2</sup> = (&radic;65)<sup>2</sup></div>
     <div>Comparing with (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>:</div>
     <div>&rArr; Centre = (2, 4) and Radius = &radic;65</div>`,
    "Centre = (2, 4), Radius = &radic;65"
  ));

  // Q8
  cards.push(qCard(
    "8",
    "Find the centre and radius of the circle: x<sup>2</sup> + y<sup>2</sup> &minus; 8x + 10y &minus; 12 = 0.",
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 8<i>x</i> + 10<i>y</i> &minus; 12 = 0</div>
     <div>Grouping terms:</div>
     <div>&rArr; (<i>x</i><sup>2</sup> &minus; 8<i>x</i>) + (<i>y</i><sup>2</sup> + 10<i>y</i>) = 12</div>
     <div>Completing squares: adding 4<sup>2</sup> = 16 and 5<sup>2</sup> = 25 to both sides:</div>
     <div>&rArr; (<i>x</i><sup>2</sup> &minus; 8<i>x</i> + 16) + (<i>y</i><sup>2</sup> + 10<i>y</i> + 25) = 12 + 16 + 25</div>
     <div>&rArr; (<i>x</i> &minus; 4)<sup>2</sup> + (<i>y</i> + 5)<sup>2</sup> = 53</div>
     <div>&rArr; (<i>x</i> &minus; 4)<sup>2</sup> + [<i>y</i> &minus; (&minus;5)]<sup>2</sup> = (&radic;53)<sup>2</sup></div>
     <div>Comparing with the standard equation:</div>
     <div>&rArr; Centre = (4, &minus;5) and Radius = &radic;53</div>`,
    "Centre = (4, &minus;5), Radius = &radic;53"
  ));

  // Q9
  cards.push(qCard(
    "9",
    "Find the centre and radius of the circle: 2x<sup>2</sup> + 2y<sup>2</sup> &minus; x = 0.",
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;2<i>x</i><sup>2</sup> + 2<i>y</i><sup>2</sup> &minus; <i>x</i> = 0</div>
     <div>Dividing the entire equation by 2 to make leading coefficients 1:</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; ${frac("1", "2")}<i>x</i> = 0</div>
     <div>Grouping terms:</div>
     <div>&rArr; (<i>x</i><sup>2</sup> &minus; ${frac("1", "2")}<i>x</i>) + <i>y</i><sup>2</sup> = 0</div>
     <div>Completing the square in <i>x</i> by adding [${frac("1", "4")}]<sup>2</sup> = ${frac("1", "16")} to both sides:</div>
     <div>&rArr; (<i>x</i><sup>2</sup> &minus; 2 &times; ${frac("1", "4")}<i>x</i> + (${frac("1", "4")})<sup>2</sup>) + (<i>y</i> &minus; 0)<sup>2</sup> = (${frac("1", "4")})<sup>2</sup></div>
     <div>&rArr; (<i>x</i> &minus; ${frac("1", "4")})<sup>2</sup> + (<i>y</i> &minus; 0)<sup>2</sup> = (${frac("1", "4")})<sup>2</sup></div>
     <div>Comparing with (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>:</div>
     <div>&rArr; Centre = (${frac("1", "4")}, 0) and Radius = ${frac("1", "4")}</div>`,
    `Centre = (${frac("1", "4")}, 0), Radius = ${frac("1", "4")}`
  ));

  // Q10
  cards.push(qCard(
    "10",
    "Find the equation of the circle passing through the points (4, 1) and (6, 5) and whose centre is on the line 4x + y = 16.",
    `<div>Let the equation of the circle be:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> &hellip; (1)</div>
     <div>Since it passes through (4, 1):</div>
     <div>&rArr; (4 &minus; <i>h</i>)<sup>2</sup> + (1 &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> &hellip; (2)</div>
     <div>Since it passes through (6, 5):</div>
     <div>&rArr; (6 &minus; <i>h</i>)<sup>2</sup> + (5 &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> &hellip; (3)</div>
     <div>Equating (2) and (3):</div>
     <div>&rArr; (4 &minus; <i>h</i>)<sup>2</sup> + (1 &minus; <i>k</i>)<sup>2</sup> = (6 &minus; <i>h</i>)<sup>2</sup> + (5 &minus; <i>k</i>)<sup>2</sup></div>
     <div>&rArr; 16 &minus; 8<i>h</i> + <i>h</i><sup>2</sup> + 1 &minus; 2<i>k</i> + <i>k</i><sup>2</sup> = 36 &minus; 12<i>h</i> + <i>h</i><sup>2</sup> + 25 &minus; 10<i>k</i> + <i>k</i><sup>2</sup></div>
     <div>&rArr; &minus;8<i>h</i> &minus; 2<i>k</i> + 17 = &minus;12<i>h</i> &minus; 10<i>k</i> + 61</div>
     <div>&rArr; 4<i>h</i> + 8<i>k</i> = 44 &rArr; <i>h</i> + 2<i>k</i> = 11 &hellip; (4)</div>
     <div>Also, the centre (<i>h</i>, <i>k</i>) lies on the line 4<i>x</i> + <i>y</i> = 16:</div>
     <div>&rArr; 4<i>h</i> + <i>k</i> = 16 &hellip; (5)</div>
     <div>From (4), <i>h</i> = 11 &minus; 2<i>k</i>. Substituting into (5):</div>
     <div>&rArr; 4(11 &minus; 2<i>k</i>) + <i>k</i> = 16</div>
     <div>&rArr; 44 &minus; 8<i>k</i> + <i>k</i> = 16 &rArr; &minus;7<i>k</i> = &minus;28 &rArr; <b><i>k</i> = 4</b></div>
     <div>&rArr; <i>h</i> = 11 &minus; 2(4) = 11 &minus; 8 &rArr; <b><i>h</i> = 3</b></div>
     <div>Finding radius <i>r</i> using (2):</div>
     <div>&rArr; <i>r</i><sup>2</sup> = (4 &minus; 3)<sup>2</sup> + (1 &minus; 4)<sup>2</sup> = 1<sup>2</sup> + (&minus;3)<sup>2</sup> = 1 + 9 = 10</div>
     <div>Substituting <i>h</i> = 3, <i>k</i> = 4, <i>r</i><sup>2</sup> = 10 into (1):</div>
     <div>&rArr; (<i>x</i> &minus; 3)<sup>2</sup> + (<i>y</i> &minus; 4)<sup>2</sup> = 10</div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; 6<i>x</i> + 9 + <i>y</i><sup>2</sup> &minus; 8<i>y</i> + 16 = 10</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 6<i>x</i> &minus; 8<i>y</i> + 15 = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> &minus; 6x &minus; 8y + 15 = 0"
  ));

  // Q11
  cards.push(qCard(
    "11",
    "Find the equation of the circle passing through the points (2, 3) and (&minus;1, 1) and whose centre is on the line x &minus; 3y &minus; 11 = 0.",
    `<div>Let the equation of the circle be:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> &hellip; (1)</div>
     <div>Since the circle passes through (2, 3) and (&minus;1, 1):</div>
     <div>&rArr; (2 &minus; <i>h</i>)<sup>2</sup> + (3 &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> &hellip; (2)</div>
     <div>&rArr; (&minus;1 &minus; <i>h</i>)<sup>2</sup> + (1 &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> &hellip; (3)</div>
     <div>Equating (2) and (3):</div>
     <div>&rArr; 4 &minus; 4<i>h</i> + <i>h</i><sup>2</sup> + 9 &minus; 6<i>k</i> + <i>k</i><sup>2</sup> = 1 + 2<i>h</i> + <i>h</i><sup>2</sup> + 1 &minus; 2<i>k</i> + <i>k</i><sup>2</sup></div>
     <div>&rArr; 13 &minus; 4<i>h</i> &minus; 6<i>k</i> = 2 + 2<i>h</i> &minus; 2<i>k</i></div>
     <div>&rArr; 6<i>h</i> + 4<i>k</i> = 11 &hellip; (4)</div>
     <div>Since centre (<i>h</i>, <i>k</i>) lies on <i>x</i> &minus; 3<i>y</i> &minus; 11 = 0:</div>
     <div>&rArr; <i>h</i> &minus; 3<i>k</i> = 11 &rArr; <i>h</i> = 11 + 3<i>k</i> &hellip; (5)</div>
     <div>Substitute (5) in (4):</div>
     <div>&rArr; 6(11 + 3<i>k</i>) + 4<i>k</i> = 11</div>
     <div>&rArr; 66 + 18<i>k</i> + 4<i>k</i> = 11 &rArr; 22<i>k</i> = &minus;55 &rArr; <b><i>k</i> = &minus;${frac("5", "2")}</b></div>
     <div>&rArr; <i>h</i> = 11 + 3(&minus;${frac("5", "2")}) = 11 &minus; ${frac("15", "2")} = <b>${frac("7", "2")}</b></div>
     <div>Finding radius <i>r</i><sup>2</sup>:</div>
     <div>&rArr; <i>r</i><sup>2</sup> = (2 &minus; ${frac("7", "2")})<sup>2</sup> + (3 &minus; (&minus;${frac("5", "2")}))<sup>2</sup> = (&minus;${frac("3", "2")})<sup>2</sup> + (${frac("11", "2")})<sup>2</sup> = ${frac("9", "4")} + ${frac("121", "4")} = ${frac("130", "4")}</div>
     <div>Equation of the circle:</div>
     <div>&rArr; (<i>x</i> &minus; ${frac("7", "2")})<sup>2</sup> + (<i>y</i> + ${frac("5", "2")})<sup>2</sup> = ${frac("130", "4")}</div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; 7<i>x</i> + ${frac("49", "4")} + <i>y</i><sup>2</sup> + 5<i>y</i> + ${frac("25", "4")} = ${frac("130", "4")}</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 7<i>x</i> + 5<i>y</i> + ${frac("74", "4")} &minus; ${frac("130", "4")} = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 7<i>x</i> + 5<i>y</i> &minus; ${frac("56", "4")} = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 7<i>x</i> + 5<i>y</i> &minus; 14 = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> &minus; 7x + 5y &minus; 14 = 0"
  ));

  // Q12
  cards.push(qCard(
    "12",
    "Find the equation of the circle with radius 5 whose centre lies on x-axis and passes through the point (2, 3).",
    `<div>Since the centre lies on the <i>x</i>-axis, its coordinates are (<i>h</i>, 0).</div>
     <div>The radius is <i>r</i> = 5.</div>
     <div>The standard equation is:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; 0)<sup>2</sup> = 5<sup>2</sup> &rArr; (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + <i>y</i><sup>2</sup> = 25 &hellip; (1)</div>
     <div>Since the circle passes through (2, 3):</div>
     <div>&rArr; (2 &minus; <i>h</i>)<sup>2</sup> + 3<sup>2</sup> = 25</div>
     <div>&rArr; (2 &minus; <i>h</i>)<sup>2</sup> + 9 = 25</div>
     <div>&rArr; (2 &minus; <i>h</i>)<sup>2</sup> = 16</div>
     <div>&rArr; 2 &minus; <i>h</i> = &plusmn; 4</div>
     <div><b>Case 1:</b> 2 &minus; <i>h</i> = 4 &rArr; <i>h</i> = &minus;2</div>
     <div>Equation: (<i>x</i> + 2)<sup>2</sup> + <i>y</i><sup>2</sup> = 25 &rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 4<i>x</i> &minus; 21 = 0</div>
     <div><b>Case 2:</b> 2 &minus; <i>h</i> = &minus;4 &rArr; <i>h</i> = 6</div>
     <div>Equation: (<i>x</i> &minus; 6)<sup>2</sup> + <i>y</i><sup>2</sup> = 25 &rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 12<i>x</i> + 11 = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> + 4x &minus; 21 = 0 &nbsp;and&nbsp; x<sup>2</sup> + y<sup>2</sup> &minus; 12x + 11 = 0"
  ));

  // Q13
  cards.push(qCard(
    "13",
    "Find the equation of the circle passing through (0, 0) and making intercepts a and b on the coordinate axes.",
    `<div>Let the equation of the circle be:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> &hellip; (1)</div>
     <div>Since the circle passes through the origin (0, 0):</div>
     <div>&rArr; (0 &minus; <i>h</i>)<sup>2</sup> + (0 &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> &rArr; <i>h</i><sup>2</sup> + <i>k</i><sup>2</sup> = <i>r</i><sup>2</sup></div>
     <div>Substituting <i>r</i><sup>2</sup> = <i>h</i><sup>2</sup> + <i>k</i><sup>2</sup> into (1):</div>
     <div>&rArr; (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>h</i><sup>2</sup> + <i>k</i><sup>2</sup></div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; 2<i>hx</i> + <i>y</i><sup>2</sup> &minus; 2<i>ky</i> = 0 &hellip; (2)</div>
     <div>Since the circle intercepts <i>a</i> on the <i>x</i>-axis, it passes through (<i>a</i>, 0):</div>
     <div>&rArr; <i>a</i><sup>2</sup> &minus; 2<i>ha</i> + 0 = 0 &rArr; <i>a</i>(<i>a</i> &minus; 2<i>h</i>) = 0</div>
     <div>Since <i>a</i> &ne; 0, we have <i>a</i> &minus; 2<i>h</i> = 0 &rArr; <b><i>h</i> = ${frac("a", "2")}</b></div>
     <div>Since the circle intercepts <i>b</i> on the <i>y</i>-axis, it passes through (0, <i>b</i>):</div>
     <div>&rArr; 0 &minus; 0 + <i>b</i><sup>2</sup> &minus; 2<i>kb</i> = 0 &rArr; <i>b</i>(<i>b</i> &minus; 2<i>k</i>) = 0</div>
     <div>Since <i>b</i> &ne; 0, we have <i>b</i> &minus; 2<i>k</i> = 0 &rArr; <b><i>k</i> = ${frac("b", "2")}</b></div>
     <div>Substituting <i>h</i> = ${frac("a", "2")} and <i>k</i> = ${frac("b", "2")} into equation (2):</div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; 2(${frac("a", "2")})<i>x</i> + <i>y</i><sup>2</sup> &minus; 2(${frac("b", "2")})<i>y</i> = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; <i>ax</i> &minus; <i>by</i> = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> &minus; ax &minus; by = 0"
  ));

  // Q14
  cards.push(qCard(
    "14",
    "Find the equation of a circle with centre (2, 2) and passes through the point (4, 5).",
    `<div>Given: Centre (<i>h</i>, <i>k</i>) = (2, 2) and the circle passes through (4, 5).</div>
     <div>The radius <i>r</i> is the distance between the centre and (4, 5):</div>
     <div>&rArr; <i>r</i><sup>2</sup> = (4 &minus; 2)<sup>2</sup> + (5 &minus; 2)<sup>2</sup></div>
     <div>&rArr; <i>r</i><sup>2</sup> = 2<sup>2</sup> + 3<sup>2</sup> = 4 + 9 = 13</div>
     <div>The equation of the circle is:</div>
     <div>&nbsp;&nbsp;(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></div>
     <div>&rArr; (<i>x</i> &minus; 2)<sup>2</sup> + (<i>y</i> &minus; 2)<sup>2</sup> = 13</div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; 4<i>x</i> + 4 + <i>y</i><sup>2</sup> &minus; 4<i>y</i> + 4 = 13</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 4<i>x</i> &minus; 4<i>y</i> + 8 &minus; 13 = 0</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 4<i>x</i> &minus; 4<i>y</i> &minus; 5 = 0</div>`,
    "x<sup>2</sup> + y<sup>2</sup> &minus; 4x &minus; 4y &minus; 5 = 0"
  ));

  // Q15
  cards.push(qCard(
    "15",
    "Does the point (&minus;2.5, 3.5) lie inside, outside or on the circle x<sup>2</sup> + y<sup>2</sup> = 25?",
    `<div>The equation of the given circle is:</div>
     <div>&nbsp;&nbsp;<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25 &rArr; (<i>x</i> &minus; 0)<sup>2</sup> + (<i>y</i> &minus; 0)<sup>2</sup> = 5<sup>2</sup></div>
     <div>Here, Centre = (0, 0) and Radius <i>r</i> = 5.</div>
     <div>The distance <i>d</i> of the point <i>P</i>(&minus;2.5, 3.5) from the centre (0, 0) is:</div>
     <div>&rArr; <i>d</i> = &radic;[(&minus;2.5 &minus; 0)<sup>2</sup> + (3.5 &minus; 0)<sup>2</sup>]</div>
     <div>&rArr; <i>d</i> = &radic;[6.25 + 12.25] = &radic;18.5 &asymp; 4.301</div>
     <div>Since <i>d</i> &asymp; 4.301 &lt; 5 (the radius), the distance of the point from the centre is less than the radius.</div>
     <div>Therefore, the point (&minus;2.5, 3.5) lies <b>inside</b> the circle.</div>`,
    "The point (&minus;2.5, 3.5) lies inside the circle"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 10.1", "Standard Form & Equations of Circles")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx1 };
