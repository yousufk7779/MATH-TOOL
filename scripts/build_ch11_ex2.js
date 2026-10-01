const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch11_common");

function buildEx2() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Find the distance between the following pairs of points:<br/>" +
    "(i) (2, 3, 5) and (4, 3, 1)<br/>" +
    "(ii) (&minus;3, 7, 2) and (2, 4, &minus;1)<br/>" +
    "(iii) (&minus;1, 3, &minus;4) and (1, &minus;3, 4)<br/>" +
    "(iv) (2, &minus;1, 3) and (&minus;2, 1, 3)",
    `<div>The distance <i>d</i> between two points <i>P</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>z</i><sub>1</sub>) and <i>Q</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>, <i>z</i><sub>2</sub>) in 3D space is given by:</div>
     <div>&nbsp;&nbsp;<i>d</i> = &radic;[(<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>)<sup>2</sup> + (<i>z</i><sub>2</sub> &minus; <i>z</i><sub>1</sub>)<sup>2</sup>]</div>
     
     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(i) Points (2, 3, 5) and (4, 3, 1):</b></div>
     <div>&rArr; <i>d</i> = &radic;[(4 &minus; 2)<sup>2</sup> + (3 &minus; 3)<sup>2</sup> + (1 &minus; 5)<sup>2</sup>]</div>
     <div>&rArr; <i>d</i> = &radic;[2<sup>2</sup> + 0<sup>2</sup> + (&minus;4)<sup>2</sup>] = &radic;[4 + 0 + 16] = &radic;20 = <b>2&radic;5 units</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) Points (&minus;3, 7, 2) and (2, 4, &minus;1):</b></div>
     <div>&rArr; <i>d</i> = &radic;[(2 &minus; (&minus;3))<sup>2</sup> + (4 &minus; 7)<sup>2</sup> + (&minus;1 &minus; 2)<sup>2</sup>]</div>
     <div>&rArr; <i>d</i> = &radic;[5<sup>2</sup> + (&minus;3)<sup>2</sup> + (&minus;3)<sup>2</sup>] = &radic;[25 + 9 + 9] = <b>&radic;43 units</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(iii) Points (&minus;1, 3, &minus;4) and (1, &minus;3, 4):</b></div>
     <div>&rArr; <i>d</i> = &radic;[(1 &minus; (&minus;1))<sup>2</sup> + (&minus;3 &minus; 3)<sup>2</sup> + (4 &minus; (&minus;4))<sup>2</sup>]</div>
     <div>&rArr; <i>d</i> = &radic;[2<sup>2</sup> + (&minus;6)<sup>2</sup> + 8<sup>2</sup>] = &radic;[4 + 36 + 64] = &radic;104 = <b>2&radic;26 units</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(iv) Points (2, &minus;1, 3) and (&minus;2, 1, 3):</b></div>
     <div>&rArr; <i>d</i> = &radic;[(&minus;2 &minus; 2)<sup>2</sup> + (1 &minus; (&minus;1))<sup>2</sup> + (3 &minus; 3)<sup>2</sup>]</div>
     <div>&rArr; <i>d</i> = &radic;[(&minus;4)<sup>2</sup> + 2<sup>2</sup> + 0<sup>2</sup>] = &radic;[16 + 4 + 0] = &radic;20 = <b>2&radic;5 units</b></div>`,
    "(i) 2&radic;5 &nbsp;|&nbsp; (ii) &radic;43 &nbsp;|&nbsp; (iii) 2&radic;26 &nbsp;|&nbsp; (iv) 2&radic;5"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "Show that the points (&minus;2, 3, 5), (1, 2, 3) and (7, 0, &minus;1) are collinear.",
    `<div>Let the given points be <i>P</i>(&minus;2, 3, 5), <i>Q</i>(1, 2, 3), and <i>R</i>(7, 0, &minus;1).</div>
     <div>We calculate the distances <i>PQ</i>, <i>QR</i>, and <i>PR</i>:</div>
     <div>&rArr; <b>PQ</b> = &radic;[(1 &minus; (&minus;2))<sup>2</sup> + (2 &minus; 3)<sup>2</sup> + (3 &minus; 5)<sup>2</sup>] = &radic;[3<sup>2</sup> + (&minus;1)<sup>2</sup> + (&minus;2)<sup>2</sup>] = &radic;[9 + 1 + 4] = <b>&radic;14</b></div>
     <div>&rArr; <b>QR</b> = &radic;[(7 &minus; 1)<sup>2</sup> + (0 &minus; 2)<sup>2</sup> + (&minus;1 &minus; 3)<sup>2</sup>] = &radic;[6<sup>2</sup> + (&minus;2)<sup>2</sup> + (&minus;4)<sup>2</sup>] = &radic;[36 + 4 + 16] = &radic;56 = <b>2&radic;14</b></div>
     <div>&rArr; <b>PR</b> = &radic;[(7 &minus; (&minus;2))<sup>2</sup> + (0 &minus; 3)<sup>2</sup> + (&minus;1 &minus; 5)<sup>2</sup>] = &radic;[9<sup>2</sup> + (&minus;3)<sup>2</sup> + (&minus;6)<sup>2</sup>] = &radic;[81 + 9 + 36] = &radic;126 = <b>3&radic;14</b></div>
     <div>Notice that:</div>
     <div>&nbsp;&nbsp;<i>PQ</i> + <i>QR</i> = &radic;14 + 2&radic;14 = 3&radic;14 = <i>PR</i></div>
     <div>Since the sum of the distances between two pairs equals the third distance, the points <i>P</i>, <i>Q</i>, and <i>R</i> lie on the same straight line.</div>
     <div>Hence, the points <i>P</i>, <i>Q</i>, and <i>R</i> are <b>collinear</b>.</div>`,
    "PQ + QR = &radic;14 + 2&radic;14 = 3&radic;14 = PR &rArr; Points are Collinear"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "Verify the following:<br/>" +
    "(i) (0, 7, &minus;10), (1, 6, &minus;6), and (4, 9, &minus;6) are the vertices of an isosceles triangle.<br/>" +
    "(ii) (0, 7, 10), (&minus;1, 6, 6), and (&minus;4, 9, 6) are the vertices of a right-angled triangle.<br/>" +
    "(iii) (&minus;1, 2, 1), (1, &minus;2, 5), (4, &minus;7, 8), and (2, &minus;3, 4) are the vertices of a parallelogram.",
    `<div><b>(i) Let the vertices be A(0, 7, &minus;10), B(1, 6, &minus;6), and C(4, 9, &minus;6):</b></div>
     <div>&rArr; <i>AB</i><sup>2</sup> = (1 &minus; 0)<sup>2</sup> + (6 &minus; 7)<sup>2</sup> + (&minus;6 &minus; (&minus;10))<sup>2</sup> = 1<sup>2</sup> + (&minus;1)<sup>2</sup> + 4<sup>2</sup> = 1 + 1 + 16 = 18</div>
     <div>&rArr; <i>BC</i><sup>2</sup> = (4 &minus; 1)<sup>2</sup> + (9 &minus; 6)<sup>2</sup> + (&minus;6 &minus; (&minus;6))<sup>2</sup> = 3<sup>2</sup> + 3<sup>2</sup> + 0 = 9 + 9 + 0 = 18</div>
     <div>&rArr; <i>CA</i><sup>2</sup> = (0 &minus; 4)<sup>2</sup> + (7 &minus; 9)<sup>2</sup> + (&minus;10 &minus; (&minus;6))<sup>2</sup> = (&minus;4)<sup>2</sup> + (&minus;2)<sup>2</sup> + (&minus;4)<sup>2</sup> = 16 + 4 + 16 = 36</div>
     <div>Since <i>AB</i> = <i>BC</i> = &radic;18 &ne; <i>CA</i>, &Delta;<i>ABC</i> has two equal sides and is an <b>isosceles triangle</b>.</div>

     <div style="margin-top: 12px;"><b>(ii) Let the vertices be P(0, 7, 10), Q(&minus;1, 6, 6), and R(&minus;4, 9, 6):</b></div>
     <div>&rArr; <i>PQ</i><sup>2</sup> = (&minus;1 &minus; 0)<sup>2</sup> + (6 &minus; 7)<sup>2</sup> + (6 &minus; 10)<sup>2</sup> = 1 + 1 + 16 = 18</div>
     <div>&rArr; <i>QR</i><sup>2</sup> = (&minus;4 &minus; (&minus;1))<sup>2</sup> + (9 &minus; 6)<sup>2</sup> + (6 &minus; 6)<sup>2</sup> = 9 + 9 + 0 = 18</div>
     <div>&rArr; <i>PR</i><sup>2</sup> = (&minus;4 &minus; 0)<sup>2</sup> + (9 &minus; 7)<sup>2</sup> + (6 &minus; 10)<sup>2</sup> = 16 + 4 + 16 = 36</div>
     <div>Since <i>PQ</i><sup>2</sup> + <i>QR</i><sup>2</sup> = 18 + 18 = 36 = <i>PR</i><sup>2</sup>, by the converse of Pythagoras' Theorem, &Delta;<i>PQR</i> is a <b>right-angled triangle</b> with right angle at <i>Q</i>.</div>

     <div style="margin-top: 12px;"><b>(iii) Let the vertices be A(&minus;1, 2, 1), B(1, &minus;2, 5), C(4, &minus;7, 8), and D(2, &minus;3, 4):</b></div>
     <div>&rArr; <i>AB</i> = &radic;[(1 + 1)<sup>2</sup> + (&minus;2 &minus; 2)<sup>2</sup> + (5 &minus; 1)<sup>2</sup>] = &radic;[4 + 16 + 16] = &radic;36 = <b>6</b></div>
     <div>&rArr; <i>BC</i> = &radic;[(4 &minus; 1)<sup>2</sup> + (&minus;7 + 2)<sup>2</sup> + (8 &minus; 5)<sup>2</sup>] = &radic;[9 + 25 + 9] = <b>&radic;43</b></div>
     <div>&rArr; <i>CD</i> = &radic;[(2 &minus; 4)<sup>2</sup> + (&minus;3 + 7)<sup>2</sup> + (4 &minus; 8)<sup>2</sup>] = &radic;[4 + 16 + 16] = &radic;36 = <b>6</b></div>
     <div>&rArr; <i>DA</i> = &radic;[(&minus;1 &minus; 2)<sup>2</sup> + (2 + 3)<sup>2</sup> + (1 &minus; 4)<sup>2</sup>] = &radic;[9 + 25 + 9] = <b>&radic;43</b></div>
     <div>Since opposite sides are equal (<i>AB</i> = <i>CD</i> = 6 and <i>BC</i> = <i>DA</i> = &radic;43), <i>ABCD</i> is a <b>parallelogram</b>.</div>`,
    "All three geometric properties verified successfully"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the equation of the set of points which are equidistant from the points (1, 2, 3) and (3, 2, &minus;1).",
    `<div>Let <i>A</i>(1, 2, 3) and <i>B</i>(3, 2, &minus;1) be the given points.</div>
     <div>Let <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>) be any point equidistant from <i>A</i> and <i>B</i>.</div>
     <div>&rArr; <i>PA</i> = <i>PB</i> &rArr; <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup></div>
     <div>Using the 3D distance formula:</div>
     <div>&rArr; (<i>x</i> &minus; 1)<sup>2</sup> + (<i>y</i> &minus; 2)<sup>2</sup> + (<i>z</i> &minus; 3)<sup>2</sup> = (<i>x</i> &minus; 3)<sup>2</sup> + (<i>y</i> &minus; 2)<sup>2</sup> + (<i>z</i> &minus; (&minus;1))<sup>2</sup></div>
     <div>Cancelling the common term (<i>y</i> &minus; 2)<sup>2</sup> from both sides:</div>
     <div>&rArr; (<i>x</i> &minus; 1)<sup>2</sup> + (<i>z</i> &minus; 3)<sup>2</sup> = (<i>x</i> &minus; 3)<sup>2</sup> + (<i>z</i> + 1)<sup>2</sup></div>
     <div>Expanding the remaining binomial squares:</div>
     <div>&rArr; (<i>x</i><sup>2</sup> &minus; 2<i>x</i> + 1) + (<i>z</i><sup>2</sup> &minus; 6<i>z</i> + 9) = (<i>x</i><sup>2</sup> &minus; 6<i>x</i> + 9) + (<i>z</i><sup>2</sup> + 2<i>z</i> + 1)</div>
     <div>&rArr; <i>x</i><sup>2</sup> + <i>z</i><sup>2</sup> &minus; 2<i>x</i> &minus; 6<i>z</i> + 10 = <i>x</i><sup>2</sup> + <i>z</i><sup>2</sup> &minus; 6<i>x</i> + 2<i>z</i> + 10</div>
     <div>Cancelling <i>x</i><sup>2</sup>, <i>z</i><sup>2</sup>, and 10 from both sides:</div>
     <div>&rArr; &minus;2<i>x</i> &minus; 6<i>z</i> = &minus;6<i>x</i> + 2<i>z</i></div>
     <div>&rArr; &minus;2<i>x</i> + 6<i>x</i> &minus; 6<i>z</i> &minus; 2<i>z</i> = 0</div>
     <div>&rArr; 4<i>x</i> &minus; 8<i>z</i> = 0</div>
     <div>Dividing by 4:</div>
     <div>&rArr; <b><i>x</i> &minus; 2<i>z</i> = 0</b></div>`,
    "x &minus; 2z = 0"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Find the equation of the set of points P, the sum of whose distances from A(4, 0, 0) and B(&minus;4, 0, 0) is equal to 10.",
    `<div>Let <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>) be the point such that <i>PA</i> + <i>PB</i> = 10.</div>
     <div>Here, <i>A</i>(4, 0, 0) and <i>B</i>(&minus;4, 0, 0).</div>
     <div>&rArr; <i>PA</i> = &radic;[(<i>x</i> &minus; 4)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>]</div>
     <div>&rArr; <i>PB</i> = &radic;[(<i>x</i> + 4)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>]</div>
     <div>Given: <i>PA</i> = 10 &minus; <i>PB</i></div>
     <div>Squaring both sides:</div>
     <div>&rArr; <i>PA</i><sup>2</sup> = 100 + <i>PB</i><sup>2</sup> &minus; 20 <i>PB</i></div>
     <div>&rArr; <i>PA</i><sup>2</sup> &minus; <i>PB</i><sup>2</sup> = 100 &minus; 20 <i>PB</i></div>
     <div>Calculating <i>PA</i><sup>2</sup> &minus; <i>PB</i><sup>2</sup>:</div>
     <div>&rArr; [(<i>x</i> &minus; 4)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>] &minus; [(<i>x</i> + 4)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>]</div>
     <div>&rArr; (<i>x</i><sup>2</sup> &minus; 8<i>x</i> + 16) &minus; (<i>x</i><sup>2</sup> + 8<i>x</i> + 16) = &minus;16<i>x</i></div>
     <div>Substitute back:</div>
     <div>&rArr; &minus;16<i>x</i> = 100 &minus; 20 <i>PB</i></div>
     <div>&rArr; 20 <i>PB</i> = 16<i>x</i> + 100</div>
     <div>Dividing by 4:</div>
     <div>&rArr; 5 <i>PB</i> = 4<i>x</i> + 25</div>
     <div>Squaring both sides again:</div>
     <div>&rArr; 25 <i>PB</i><sup>2</sup> = (4<i>x</i> + 25)<sup>2</sup></div>
     <div>&rArr; 25 [(<i>x</i> + 4)<sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>] = 16<i>x</i><sup>2</sup> + 200<i>x</i> + 625</div>
     <div>&rArr; 25 [<i>x</i><sup>2</sup> + 8<i>x</i> + 16 + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>] = 16<i>x</i><sup>2</sup> + 200<i>x</i> + 625</div>
     <div>&rArr; 25<i>x</i><sup>2</sup> + 200<i>x</i> + 400 + 25<i>y</i><sup>2</sup> + 25<i>z</i><sup>2</sup> = 16<i>x</i><sup>2</sup> + 200<i>x</i> + 625</div>
     <div>&rArr; (25<i>x</i><sup>2</sup> &minus; 16<i>x</i><sup>2</sup>) + 25<i>y</i><sup>2</sup> + 25<i>z</i><sup>2</sup> + (400 &minus; 625) = 0</div>
     <div>&rArr; <b>9<i>x</i><sup>2</sup> + 25<i>y</i><sup>2</sup> + 25<i>z</i><sup>2</sup> &minus; 225 = 0</b></div>`,
    "9x<sup>2</sup> + 25y<sup>2</sup> + 25z<sup>2</sup> &minus; 225 = 0"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 11.2", "3D Distance Formula, Collinearity & Geometric Loci")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx2 };
