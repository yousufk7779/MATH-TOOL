const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch11_common");

function buildMisc() {
  const cards = [];

  // Q1 with SVG
  const svgQ1 = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 420 220" style="width: 100%; max-width: 380px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Parallelogram ABCD -->
        <polygon points="100,170 300,170 350,50 150,50" fill="rgba(255, 61, 0, 0.12)" stroke="#EA580C" stroke-width="2.2"/>
        <!-- Diagonals AC and BD -->
        <line x1="100" y1="170" x2="350" y2="50" stroke="#0284C7" stroke-width="1.8" stroke-dasharray="4,4"/>
        <line x1="300" y1="170" x2="150" y2="50" stroke="#0284C7" stroke-width="1.8" stroke-dasharray="4,4"/>
        <!-- Intersection M -->
        <circle cx="225" cy="110" r="4.5" fill="#DC2626"/>
        <text x="233" y="114" font-size="12" font-weight="700" fill="#DC2626">M(1, 0, 2)</text>
        <!-- Vertices -->
        <circle cx="100" cy="170" r="4" fill="#0F172A"/>
        <text x="45" y="185" font-size="11" font-weight="700" fill="#0F172A">A(3, -1, 2)</text>
        <circle cx="300" cy="170" r="4" fill="#0F172A"/>
        <text x="305" y="185" font-size="11" font-weight="700" fill="#0F172A">B(1, 2, -4)</text>
        <circle cx="350" cy="50" r="4" fill="#0F172A"/>
        <text x="340" y="40" font-size="11" font-weight="700" fill="#0F172A">C(-1, 1, 2)</text>
        <circle cx="150" cy="50" r="4" fill="#0F172A"/>
        <text x="90" y="40" font-size="11" font-weight="700" fill="#0F172A">D(x, y, z)</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Parallelogram ABCD: Diagonals AC and BD bisect each other at common midpoint M.</div>
  </div>`;

  cards.push(qCard(
    "1",
    "Three vertices of a parallelogram ABCD are A(3, &minus;1, 2), B(1, 2, &minus;4) and C(&minus;1, 1, 2). Find the coordinates of the fourth vertex.",
    `<div>Let the coordinates of the fourth vertex be <i>D</i>(<i>x</i>, <i>y</i>, <i>z</i>).</div>
     <div>In any parallelogram, the diagonals bisect each other at their common midpoint.</div>
     <div>&rArr; Midpoint of diagonal <i>AC</i> = Midpoint of diagonal <i>BD</i> &hellip; (1)</div>
     ${svgQ1}
     <div>Using the midpoint formula for <i>A</i>(3, &minus;1, 2) and <i>C</i>(&minus;1, 1, 2):</div>
     <div>&rArr; Midpoint of <i>AC</i> = (${frac("3 + (&minus;1)", "2")}, ${frac("&minus;1 + 1", "2")}, ${frac("2 + 2", "2")}) = (${frac("2", "2")}, ${frac("0", "2")}, ${frac("4", "2")}) = <b>(1, 0, 2)</b></div>
     <div>Using the midpoint formula for <i>B</i>(1, 2, &minus;4) and <i>D</i>(<i>x</i>, <i>y</i>, <i>z</i>):</div>
     <div>&rArr; Midpoint of <i>BD</i> = (${frac("1 + x", "2")}, ${frac("2 + y", "2")}, ${frac("&minus;4 + z", "2")})</div>
     <div>Equating corresponding coordinates with (1, 0, 2):</div>
     <div>&rArr; ${frac("1 + x", "2")} = 1 &rArr; 1 + <i>x</i> = 2 &rArr; <b><i>x</i> = 1</b></div>
     <div>&rArr; ${frac("2 + y", "2")} = 0 &rArr; 2 + <i>y</i> = 0 &rArr; <b><i>y</i> = &minus;2</b></div>
     <div>&rArr; ${frac("&minus;4 + z", "2")} = 2 &rArr; &minus;4 + <i>z</i> = 4 &rArr; <b><i>z</i> = 8</b></div>
     <div>Therefore, the coordinates of the fourth vertex are <b><i>D</i>(1, &minus;2, 8)</b>.</div>`,
    "D(1, &minus;2, 8)"
  ));

  // Q2 with SVG
  const svgQ2 = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 420 220" style="width: 100%; max-width: 380px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Triangle ABC -->
        <polygon points="210,30 70,180 350,180" fill="rgba(255, 61, 0, 0.12)" stroke="#EA580C" stroke-width="2.2"/>
        <!-- Midpoints D, E, F -->
        <!-- D on BC (210, 180) -->
        <!-- E on AC (280, 105) -->
        <!-- F on AB (140, 105) -->
        <!-- Medians AD, BE, CF -->
        <line x1="210" y1="30" x2="210" y2="180" stroke="#EA580C" stroke-width="2" stroke-dasharray="3,3"/>
        <line x1="70" y1="180" x2="280" y2="105" stroke="#2563EB" stroke-width="2" stroke-dasharray="3,3"/>
        <line x1="350" y1="180" x2="140" y2="105" stroke="#9333EA" stroke-width="2" stroke-dasharray="3,3"/>
        <!-- Vertices -->
        <circle cx="210" cy="30" r="4" fill="#0F172A"/>
        <text x="215" y="25" font-size="11" font-weight="700" fill="#0F172A">A(0, 0, 6)</text>
        <circle cx="70" cy="180" r="4" fill="#0F172A"/>
        <text x="15" y="195" font-size="11" font-weight="700" fill="#0F172A">B(0, 4, 0)</text>
        <circle cx="350" cy="180" r="4" fill="#0F172A"/>
        <text x="345" y="195" font-size="11" font-weight="700" fill="#0F172A">C(6, 0, 0)</text>
        <!-- Midpoint labels -->
        <text x="215" y="195" font-size="11" font-weight="700" fill="#EA580C">D(3, 2, 0)</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Triangle ABC &amp; Medians: AD, BE, and CF connecting vertices to opposite midpoints.</div>
  </div>`;

  cards.push(qCard(
    "2",
    "Find the lengths of the medians of the triangle with vertices A (0, 0, 6), B (0, 4, 0) and C (6, 0, 0).",
    `<div>Let <i>D</i>, <i>E</i>, and <i>F</i> be the midpoints of sides <i>BC</i>, <i>AC</i>, and <i>AB</i> respectively.</div>
     ${svgQ2}
     <div>Calculating the midpoint coordinates:</div>
     <div>&rArr; <b>D</b> (midpoint of <i>BC</i>): (${frac("0 + 6", "2")}, ${frac("4 + 0", "2")}, ${frac("0 + 0", "2")}) = <b>(3, 2, 0)</b></div>
     <div>&rArr; <b>E</b> (midpoint of <i>AC</i>): (${frac("0 + 6", "2")}, ${frac("0 + 0", "2")}, ${frac("6 + 0", "2")}) = <b>(3, 0, 3)</b></div>
     <div>&rArr; <b>F</b> (midpoint of <i>AB</i>): (${frac("0 + 0", "2")}, ${frac("0 + 4", "2")}, ${frac("6 + 0", "2")}) = <b>(0, 2, 3)</b></div>
     <div>Now calculating the lengths of the three medians <i>AD</i>, <i>BE</i>, and <i>CF</i>:</div>
     <div>• <b>Length of AD:</b> &radic;[(3 &minus; 0)<sup>2</sup> + (2 &minus; 0)<sup>2</sup> + (0 &minus; 6)<sup>2</sup>] = &radic;[9 + 4 + 36] = &radic;49 = <b>7 units</b></div>
     <div>• <b>Length of BE:</b> &radic;[(3 &minus; 0)<sup>2</sup> + (0 &minus; 4)<sup>2</sup> + (3 &minus; 0)<sup>2</sup>] = &radic;[9 + 16 + 9] = <b>&radic;34 units</b></div>
     <div>• <b>Length of CF:</b> &radic;[(0 &minus; 6)<sup>2</sup> + (2 &minus; 0)<sup>2</sup> + (3 &minus; 0)<sup>2</sup>] = &radic;[36 + 4 + 9] = &radic;49 = <b>7 units</b></div>`,
    "Lengths of medians are 7, &radic;34, and 7 units"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "If the origin is the centroid of the triangle PQR with vertices P (2a, 2, 6), Q (&minus;4, 3b, &minus;10) and R (8, 14, 2c), then find the values of a, b and c.",
    `<div>The coordinates of the centroid of a triangle with vertices (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>z</i><sub>1</sub>), (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>, <i>z</i><sub>2</sub>), (<i>x</i><sub>3</sub>, <i>y</i><sub>3</sub>, <i>z</i><sub>3</sub>) are:</div>
     <div>&nbsp;&nbsp;<i>G</i> = (${frac("x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub>", "3")}, ${frac("y<sub>1</sub> + y<sub>2</sub> + y<sub>3</sub>", "3")}, ${frac("z<sub>1</sub> + z<sub>2</sub> + z<sub>3</sub>", "3")})</div>
     <div>Given: <i>G</i> = (0, 0, 0) and vertices are <i>P</i>(2<i>a</i>, 2, 6), <i>Q</i>(&minus;4, 3<i>b</i>, &minus;10), and <i>R</i>(8, 14, 2<i>c</i>).</div>
     <div>Equating each coordinate of the centroid to 0:</div>
     <div>• <b>For x-coordinate:</b></div>
     <div>&rArr; ${frac("2a &minus; 4 + 8", "3")} = 0 &rArr; 2<i>a</i> + 4 = 0 &rArr; 2<i>a</i> = &minus;4 &rArr; <b><i>a</i> = &minus;2</b></div>
     <div>• <b>For y-coordinate:</b></div>
     <div>&rArr; ${frac("2 + 3b + 14", "3")} = 0 &rArr; 3<i>b</i> + 16 = 0 &rArr; 3<i>b</i> = &minus;16 &rArr; <b><i>b</i> = &minus;${frac("16", "3")}</b></div>
     <div>• <b>For z-coordinate:</b></div>
     <div>&rArr; ${frac("6 &minus; 10 + 2c", "3")} = 0 &rArr; 2<i>c</i> &minus; 4 = 0 &rArr; 2<i>c</i> = 4 &rArr; <b><i>c</i> = 2</b></div>`,
    `a = &minus;2, b = &minus;${frac("16", "3")}, c = 2`
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the coordinates of a point on the y-axis, which are at a distance of 5&radic;2 from the point P (3, &minus;2, 5).",
    `<div>Any arbitrary point lying on the <i>y</i>-axis has both its <i>x</i> and <i>z</i> coordinates equal to 0:</div>
     <div>&rArr; Let the point be <i>A</i>(0, <i>y</i>, 0).</div>
     <div>Given: The distance from <i>A</i> to <i>P</i>(3, &minus;2, 5) is 5&radic;2:</div>
     <div>&rArr; <i>AP</i> = 5&radic;2 &rArr; <i>AP</i><sup>2</sup> = (5&radic;2)<sup>2</sup> = 50</div>
     <div>Using the distance formula:</div>
     <div>&rArr; (3 &minus; 0)<sup>2</sup> + (&minus;2 &minus; <i>y</i>)<sup>2</sup> + (5 &minus; 0)<sup>2</sup> = 50</div>
     <div>&rArr; 3<sup>2</sup> + [(&minus;1)(2 + <i>y</i>)]<sup>2</sup> + 5<sup>2</sup> = 50</div>
     <div>&rArr; 9 + (<i>y</i> + 2)<sup>2</sup> + 25 = 50</div>
     <div>&rArr; (<i>y</i> + 2)<sup>2</sup> + 34 = 50</div>
     <div>&rArr; (<i>y</i> + 2)<sup>2</sup> = 50 &minus; 34 = 16</div>
     <div>Taking square roots on both sides:</div>
     <div>&rArr; <i>y</i> + 2 = &plusmn; 4</div>
     <div>&rArr; <b>Case 1:</b> <i>y</i> = 4 &minus; 2 = <b>2</b></div>
     <div>&rArr; <b>Case 2:</b> <i>y</i> = &minus;4 &minus; 2 = <b>&minus;6</b></div>
     <div>Therefore, the required points on the <i>y</i>-axis are <b>(0, 2, 0)</b> and <b>(0, &minus;6, 0)</b>.</div>`,
    "(0, 2, 0) &nbsp;and&nbsp; (0, &minus;6, 0)"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "A point R with x-coordinate 4 lies on the line segment joining the points P (2, &minus;3, 4) and Q (8, 0, 10). Find the coordinates of the point R.",
    `<div>Let point <i>R</i> divide the line segment joining <i>P</i>(2, &minus;3, 4) and <i>Q</i>(8, 0, 10) in the ratio <i>k</i> : 1.</div>
     <div>By the section formula, the coordinates of <i>R</i> are:</div>
     <div>&nbsp;&nbsp;<i>R</i> = (${frac("8k + 2", "k + 1")}, ${frac("k(0) + 1(&minus;3)", "k + 1")}, ${frac("10k + 4", "k + 1")}) = (${frac("8k + 2", "k + 1")}, ${frac("&minus;3", "k + 1")}, ${frac("10k + 4", "k + 1")})</div>
     <div>We are given that the <i>x</i>-coordinate of <i>R</i> is 4:</div>
     <div>&rArr; ${frac("8k + 2", "k + 1")} = 4</div>
     <div>&rArr; 8<i>k</i> + 2 = 4(<i>k</i> + 1)</div>
     <div>&rArr; 8<i>k</i> + 2 = 4<i>k</i> + 4</div>
     <div>&rArr; 4<i>k</i> = 2 &rArr; <b><i>k</i> = ${frac("2", "4")} = ${frac("1", "2")}</b></div>
     <div>Substituting <i>k</i> = ${frac("1", "2")} into the <i>y</i> and <i>z</i> coordinates:</div>
     <div>&rArr; <i>y</i> = ${frac("&minus;3", frac("1", "2") + 1)} = ${frac("&minus;3", frac("3", "2"))} = &minus;3 &times; ${frac("2", "3")} = <b>&minus;2</b></div>
     <div>&rArr; <i>z</i> = ${frac("10(1/2) + 4", frac("1", "2") + 1)} = ${frac("5 + 4", frac("3", "2"))} = ${frac("9", frac("3", "2"))} = 9 &times; ${frac("2", "3")} = <b>6</b></div>
     <div>Thus, the coordinates of point <i>R</i> are <b>(4, &minus;2, 6)</b>.</div>`,
    "(4, &minus;2, 6)"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "If A and B be the points (3, 4, 5) and (&minus;1, 3, &minus;7), respectively, find the equation of the set of points P such that PA<sup>2</sup> + PB<sup>2</sup> = k<sup>2</sup>, where k is a constant.",
    `<div>Let the coordinates of point <i>P</i> be (<i>x</i>, <i>y</i>, <i>z</i>).</div>
     <div>Given points: <i>A</i>(3, 4, 5) and <i>B</i>(&minus;1, 3, &minus;7).</div>
     <div>Using the 3D distance formula squared:</div>
     <div>&rArr; <i>PA</i><sup>2</sup> = (<i>x</i> &minus; 3)<sup>2</sup> + (<i>y</i> &minus; 4)<sup>2</sup> + (<i>z</i> &minus; 5)<sup>2</sup></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= (<i>x</i><sup>2</sup> &minus; 6<i>x</i> + 9) + (<i>y</i><sup>2</sup> &minus; 8<i>y</i> + 16) + (<i>z</i><sup>2</sup> &minus; 10<i>z</i> + 25)</div>
     <div>&rArr; <i>PB</i><sup>2</sup> = (<i>x</i> + 1)<sup>2</sup> + (<i>y</i> &minus; 3)<sup>2</sup> + (<i>z</i> + 7)<sup>2</sup></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= (<i>x</i><sup>2</sup> + 2<i>x</i> + 1) + (<i>y</i><sup>2</sup> &minus; 6<i>y</i> + 9) + (<i>z</i><sup>2</sup> + 14<i>z</i> + 49)</div>
     <div>Adding <i>PA</i><sup>2</sup> and <i>PB</i><sup>2</sup>:</div>
     <div>&rArr; <i>PA</i><sup>2</sup> + <i>PB</i><sup>2</sup> = [<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> &minus; 6<i>x</i> &minus; 8<i>y</i> &minus; 10<i>z</i> + 50] + [<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> + 2<i>x</i> &minus; 6<i>y</i> + 14<i>z</i> + 59]</div>
     <div>&rArr; <i>PA</i><sup>2</sup> + <i>PB</i><sup>2</sup> = 2<i>x</i><sup>2</sup> + 2<i>y</i><sup>2</sup> + 2<i>z</i><sup>2</sup> &minus; 4<i>x</i> &minus; 14<i>y</i> + 4<i>z</i> + 109</div>
     <div>Given: <i>PA</i><sup>2</sup> + <i>PB</i><sup>2</sup> = <i>k</i><sup>2</sup></div>
     <div>&rArr; 2<i>x</i><sup>2</sup> + 2<i>y</i><sup>2</sup> + 2<i>z</i><sup>2</sup> &minus; 4<i>x</i> &minus; 14<i>y</i> + 4<i>z</i> + 109 = <i>k</i><sup>2</sup></div>
     <div>&rArr; 2(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> &minus; 2<i>x</i> &minus; 7<i>y</i> + 2<i>z</i>) = <i>k</i><sup>2</sup> &minus; 109</div>
     <div>&rArr; <b><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> &minus; 2<i>x</i> &minus; 7<i>y</i> + 2<i>z</i> = ${frac("k<sup>2</sup> &minus; 109", "2")}</b></div>`,
    "2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> &minus; 4x &minus; 14y + 4z + 109 = k<sup>2</sup>"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Miscellaneous Exercise", "Parallelogram Properties, Triangle Medians, Centroid & 3D Loci")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildMisc };
