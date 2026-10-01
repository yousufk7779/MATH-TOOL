const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch11_common");

function buildEx3() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Find the coordinates of the point which divides the line segment joining the points (&minus;2, 3, 5) and (1, &minus;4, 6) in the ratio:<br/>" +
    "(i) 2:3 internally<br/>" +
    "(ii) 2:3 externally",
    `<div>Let <i>P</i>(&minus;2, 3, 5) and <i>Q</i>(1, &minus;4, 6) be the given points.</div>
     <div>Here, <i>x</i><sub>1</sub> = &minus;2, <i>y</i><sub>1</sub> = 3, <i>z</i><sub>1</sub> = 5; &nbsp;<i>x</i><sub>2</sub> = 1, <i>y</i><sub>2</sub> = &minus;4, <i>z</i><sub>2</sub> = 6 and <i>m</i> : <i>n</i> = 2 : 3.</div>
     
     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(i) 2:3 Internally:</b></div>
     <div>Using the internal section formula:</div>
     <div>&nbsp;&nbsp;<i>R</i> = (${frac("mx<sub>2</sub> + nx<sub>1</sub>", "m + n")}, ${frac("my<sub>2</sub> + ny<sub>1</sub>", "m + n")}, ${frac("mz<sub>2</sub> + nz<sub>1</sub>", "m + n")})</div>
     <div>&rArr; <i>x</i> = ${frac("2(1) + 3(&minus;2)", "2 + 3")} = ${frac("2 &minus; 6", "5")} = <b>&minus;${frac("4", "5")}</b></div>
     <div>&rArr; <i>y</i> = ${frac("2(&minus;4) + 3(3)", "2 + 3")} = ${frac("&minus;8 + 9", "5")} = <b>${frac("1", "5")}</b></div>
     <div>&rArr; <i>z</i> = ${frac("2(6) + 3(5)", "2 + 3")} = ${frac("12 + 15", "5")} = <b>${frac("27", "5")}</b></div>
     <div>Thus, the internal division point is <b>(&minus;${frac("4", "5")}, ${frac("1", "5")}, ${frac("27", "5")})</b>.</div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) 2:3 Externally:</b></div>
     <div>Using the external section formula:</div>
     <div>&nbsp;&nbsp;<i>R</i>' = (${frac("mx<sub>2</sub> &minus; nx<sub>1</sub>", "m &minus; n")}, ${frac("my<sub>2</sub> &minus; ny<sub>1</sub>", "m &minus; n")}, ${frac("mz<sub>2</sub> &minus; nz<sub>1</sub>", "m &minus; n")})</div>
     <div>&rArr; <i>x</i> = ${frac("2(1) &minus; 3(&minus;2)", "2 &minus; 3")} = ${frac("2 + 6", "&minus;1")} = <b>&minus;8</b></div>
     <div>&rArr; <i>y</i> = ${frac("2(&minus;4) &minus; 3(3)", "2 &minus; 3")} = ${frac("&minus;8 &minus; 9", "&minus;1")} = ${frac("&minus;17", "&minus;1")} = <b>17</b></div>
     <div>&rArr; <i>z</i> = ${frac("2(6) &minus; 3(5)", "2 &minus; 3")} = ${frac("12 &minus; 15", "&minus;1")} = ${frac("&minus;3", "&minus;1")} = <b>3</b></div>
     <div>Thus, the external division point is <b>(&minus;8, 17, 3)</b>.</div>`,
    `(i) (&minus;${frac("4", "5")}, ${frac("1", "5")}, ${frac("27", "5")}) &nbsp;|&nbsp; (ii) (&minus;8, 17, 3)`
  ));

  // Q2
  cards.push(qCard(
    "2",
    "Given that P (3, 2, &minus;4), Q (5, 4, &minus;6) and R (9, 8, &minus;10) are collinear. Find the ratio in which Q divides PR.",
    `<div>Let point <i>Q</i>(5, 4, &minus;6) divide the line segment <i>PR</i> in the ratio <i>k</i> : 1.</div>
     <div>Here, <i>P</i>(3, 2, &minus;4) and <i>R</i>(9, 8, &minus;10).</div>
     <div>By the section formula, the coordinates of the dividing point are:</div>
     <div>&nbsp;&nbsp;(${frac("9k + 3", "k + 1")}, ${frac("8k + 2", "k + 1")}, ${frac("&minus;10k &minus; 4", "k + 1")})</div>
     <div>Equating the <i>x</i>-coordinate to 5:</div>
     <div>&rArr; ${frac("9k + 3", "k + 1")} = 5</div>
     <div>&rArr; 9<i>k</i> + 3 = 5(<i>k</i> + 1)</div>
     <div>&rArr; 9<i>k</i> + 3 = 5<i>k</i> + 5</div>
     <div>&rArr; 4<i>k</i> = 2 &rArr; <b><i>k</i> = ${frac("2", "4")} = ${frac("1", "2")}</b></div>
     <div>Verifying with <i>y</i> and <i>z</i> coordinates for <i>k</i> = ${frac("1", "2")}:</div>
     <div>&rArr; <i>y</i> = ${frac("8(1/2) + 2", "1/2 + 1")} = ${frac("4 + 2", "3/2")} = ${frac("6", "3/2")} = 4 &nbsp;(Matches)</div>
     <div>&rArr; <i>z</i> = ${frac("&minus;10(1/2) &minus; 4", "1/2 + 1")} = ${frac("&minus;5 &minus; 4", "3/2")} = ${frac("&minus;9", "3/2")} = &minus;6 &nbsp;(Matches)</div>
     <div>Hence, <i>Q</i> divides <i>PR</i> in the ratio <b>1 : 2</b> internally.</div>`,
    "1 : 2 internally"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "Find the ratio in which the YZ-plane divides the line segment formed by joining the points (&minus;2, 4, 7) and (3, &minus;5, 8).",
    `<div>Let the <i>YZ</i>-plane divide the segment joining <i>P</i>(&minus;2, 4, 7) and <i>Q</i>(3, &minus;5, 8) in the ratio <i>k</i> : 1 at point <i>R</i>.</div>
     <div>We know that any point lying on the <i>YZ</i>-plane has its <i>x</i>-coordinate equal to 0, so <i>R</i> = (0, <i>y</i>, <i>z</i>).</div>
     <div>By the section formula, the <i>x</i>-coordinate of <i>R</i> is:</div>
     <div>&nbsp;&nbsp;<i>x</i> = ${frac("3k &minus; 2", "k + 1")}</div>
     <div>Since <i>x</i> = 0 on the <i>YZ</i>-plane:</div>
     <div>&rArr; ${frac("3k &minus; 2", "k + 1")} = 0</div>
     <div>&rArr; 3<i>k</i> &minus; 2 = 0</div>
     <div>&rArr; 3<i>k</i> = 2 &rArr; <b><i>k</i> = ${frac("2", "3")}</b></div>
     <div>Hence, the <i>YZ</i>-plane divides the line segment in the ratio <b>2 : 3</b> internally.</div>`,
    "2 : 3 internally"
  ));

  // Q4
  cards.push(qCard(
    "4",
    `Using the section formula, show that the points A (2, &minus;3, 4), B (&minus;1, 2, 1) and C (0, ${frac("1", "3")}, 2) are collinear.`,
    `<div>Let a point <i>P</i> divide the line segment joining <i>A</i>(2, &minus;3, 4) and <i>B</i>(&minus;1, 2, 1) in the ratio <i>k</i> : 1.</div>
     <div>By the section formula, the coordinates of <i>P</i> are:</div>
     <div>&nbsp;&nbsp;<i>P</i> = (${frac("&minus;k + 2", "k + 1")}, ${frac("2k &minus; 3", "k + 1")}, ${frac("k + 4", "k + 1")})</div>
     <div>To check if <i>P</i> can coincide with point <i>C</i>(0, ${frac("1", "3")}, 2), equate the <i>x</i>-coordinate to 0:</div>
     <div>&rArr; ${frac("&minus;k + 2", "k + 1")} = 0 &rArr; &minus;<i>k</i> + 2 = 0 &rArr; <b><i>k</i> = 2</b></div>
     <div>Now substitute <i>k</i> = 2 into the <i>y</i> and <i>z</i> coordinates of <i>P</i>:</div>
     <div>&rArr; <i>y</i> = ${frac("2(2) &minus; 3", "2 + 1")} = ${frac("4 &minus; 3", "3")} = <b>${frac("1", "3")}</b></div>
     <div>&rArr; <i>z</i> = ${frac("2 + 4", "2 + 1")} = ${frac("6", "3")} = <b>2</b></div>
     <div>Since the point obtained (${frac("&minus;2+2", "3")}, ${frac("1", "3")}, 2) = (0, ${frac("1", "3")}, 2) coincides exactly with <i>C</i>, point <i>C</i> divides <i>AB</i> internally in the ratio <b>2 : 1</b>.</div>
     <div>Therefore, points <i>A</i>, <i>B</i>, and <i>C</i> are <b>collinear</b>.</div>`,
    "Point C divides AB in the ratio 2 : 1 &rArr; A, B, C are Collinear"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Find the coordinates of the points which trisect the line segment joining the points P (4, 2, &minus;6) and Q (10, &minus;16, 6).",
    `<div>Let <i>A</i> and <i>B</i> be the two points of trisection of the line segment <i>PQ</i>.</div>
     <div>&rArr; Point <i>A</i> divides <i>PQ</i> in the ratio <b>1 : 2</b> internally.</div>
     <div>&rArr; Point <i>B</i> divides <i>PQ</i> in the ratio <b>2 : 1</b> internally (or is the midpoint of <i>AQ</i>).</div>
     <div>Here, <i>P</i>(4, 2, &minus;6) and <i>Q</i>(10, &minus;16, 6).</div>

     <div style="margin-top: 10px;">• <b>Coordinates of Point A (ratio 1 : 2):</b></div>
     <div>&rArr; <i>x</i> = ${frac("1(10) + 2(4)", "1 + 2")} = ${frac("10 + 8", "3")} = ${frac("18", "3")} = <b>6</b></div>
     <div>&rArr; <i>y</i> = ${frac("1(&minus;16) + 2(2)", "1 + 2")} = ${frac("&minus;16 + 4", "3")} = ${frac("&minus;12", "3")} = <b>&minus;4</b></div>
     <div>&rArr; <i>z</i> = ${frac("1(6) + 2(&minus;6)", "1 + 2")} = ${frac("6 &minus; 12", "3")} = ${frac("&minus;6", "3")} = <b>&minus;2</b></div>
     <div>Thus, <b><i>A</i> = (6, &minus;4, &minus;2)</b>.</div>

     <div style="margin-top: 10px;">• <b>Coordinates of Point B (ratio 2 : 1):</b></div>
     <div>&rArr; <i>x</i> = ${frac("2(10) + 1(4)", "2 + 1")} = ${frac("20 + 4", "3")} = ${frac("24", "3")} = <b>8</b></div>
     <div>&rArr; <i>y</i> = ${frac("2(&minus;16) + 1(2)", "2 + 1")} = ${frac("&minus;32 + 2", "3")} = ${frac("&minus;30", "3")} = <b>&minus;10</b></div>
     <div>&rArr; <i>z</i> = ${frac("2(6) + 1(&minus;6)", "2 + 1")} = ${frac("12 &minus; 6", "3")} = ${frac("6", "3")} = <b>2</b></div>
     <div>Thus, <b><i>B</i> = (8, &minus;10, 2)</b>.</div>`,
    "(6, &minus;4, &minus;2) &nbsp;and&nbsp; (8, &minus;10, 2)"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 11.3", "3D Section Formula, Internal/External Division & Trisection")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx3 };
