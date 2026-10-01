const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch11_common");

function buildEx1() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "A point is on the x-axis. What are its y-coordinate and z-coordinates?",
    `<div>In three-dimensional space, the coordinate axes are three mutually perpendicular reference lines intersecting at the origin (0, 0, 0).</div>
     <div>&rArr; Every point lying on the <i>x</i>-axis has zero perpendicular displacement from the <i>xy</i>-plane and the <i>xz</i>-plane.</div>
     <div>&rArr; Therefore, for any point on the <i>x</i>-axis, both its <b><i>y</i>-coordinate</b> and <b><i>z</i>-coordinate</b> are strictly <b>0</b>.</div>
     <div>The coordinates of such a point are of the general form <b>(<i>x</i>, 0, 0)</b>.</div>`,
    "y-coordinate = 0 and z-coordinate = 0; Point is (x, 0, 0)"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "A point is in the XZ-plane. What can you say about its y-coordinate?",
    `<div>The <i>XZ</i>-plane is formed by the <i>x</i>-axis and the <i>z</i>-axis taken together.</div>
     <div>&rArr; Any point situated on this plane has no vertical or perpendicular elevation along the direction of the <i>y</i>-axis.</div>
     <div>&rArr; Consequently, the <b><i>y</i>-coordinate of any point in the <i>XZ</i>-plane is always 0</b>.</div>
     <div>The coordinates of any arbitrary point in the <i>XZ</i>-plane are represented as <b>(<i>x</i>, 0, <i>z</i>)</b>.</div>`,
    "y-coordinate is 0; Coordinates are of the form (x, 0, z)"
  ));

  // Q3 with full Octant Sign Table
  const octantTableHtml = `
  <div style="overflow-x: auto; margin: 14px 0;">
    <table class="octant-table">
      <thead>
        <tr>
          <th>Octant &rarr;</th>
          <th>I</th>
          <th>II</th>
          <th>III</th>
          <th>IV</th>
          <th>V</th>
          <th>VI</th>
          <th>VII</th>
          <th>VIII</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>x</b></td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>+</td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>+</td>
        </tr>
        <tr>
          <td><b>y</b></td>
          <td>+</td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>+</td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
        </tr>
        <tr>
          <td><b>z</b></td>
          <td>+</td>
          <td>+</td>
          <td>+</td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>&minus;</td>
        </tr>
      </tbody>
    </table>
  </div>`;

  cards.push(qCard(
    "3",
    "Name the octants in which the following points lie:<br/>" +
    "(1, 2, 3), (4, &minus;2, 3), (4, &minus;2, &minus;5), (4, 2, &minus;5), (&minus;4, 2, &minus;5), (&minus;4, 2, 5), (&minus;3, &minus;1, 6), (2, &minus;4, &minus;7).",
    `<div>The signs of coordinates across the eight spatial octants are determined by the 3D sign convention:</div>
     ${octantTableHtml}
     <div>Analyzing the signs of (<i>x</i>, <i>y</i>, <i>z</i>) for each point:</div>
     <div>• <b style="color: ${THEME_COLOR};">(i) (1, 2, 3):</b> <i>x</i> &gt; 0, <i>y</i> &gt; 0, <i>z</i> &gt; 0 &rArr; (+, +, +) &rArr; <b>Octant I</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(ii) (4, &minus;2, 3):</b> <i>x</i> &gt; 0, <i>y</i> &lt; 0, <i>z</i> &gt; 0 &rArr; (+, &minus;, +) &rArr; <b>Octant IV</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(iii) (4, &minus;2, &minus;5):</b> <i>x</i> &gt; 0, <i>y</i> &lt; 0, <i>z</i> &lt; 0 &rArr; (+, &minus;, &minus;) &rArr; <b>Octant VIII</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(iv) (4, 2, &minus;5):</b> <i>x</i> &gt; 0, <i>y</i> &gt; 0, <i>z</i> &lt; 0 &rArr; (+, +, &minus;) &rArr; <b>Octant V</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(v) (&minus;4, 2, &minus;5):</b> <i>x</i> &lt; 0, <i>y</i> &gt; 0, <i>z</i> &lt; 0 &rArr; (&minus;, +, &minus;) &rArr; <b>Octant VI</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(vi) (&minus;4, 2, 5):</b> <i>x</i> &lt; 0, <i>y</i> &gt; 0, <i>z</i> &gt; 0 &rArr; (&minus;, +, +) &rArr; <b>Octant II</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(vii) (&minus;3, &minus;1, 6):</b> <i>x</i> &lt; 0, <i>y</i> &lt; 0, <i>z</i> &gt; 0 &rArr; (&minus;, &minus;, +) &rArr; <b>Octant III</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(viii) (2, &minus;4, &minus;7):</b> <i>x</i> &gt; 0, <i>y</i> &lt; 0, <i>z</i> &lt; 0 &rArr; (+, &minus;, &minus;) &rArr; <b>Octant VIII</b></div>`,
    "(i) I, (ii) IV, (iii) VIII, (iv) V, (v) VI, (vi) II, (vii) III, (viii) VIII"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Fill in the blanks:<br/>" +
    "(i) The x-axis and y-axis, taken together, determine a plane known as ________.<br/>" +
    "(ii) The coordinates of points in the XY-plane are of the form ________.<br/>" +
    "(iii) Coordinate planes divide the space into ________ octants.",
    `<div><b>(i) Statement:</b> The <i>x</i>-axis and <i>y</i>-axis taken together determine the plane containing both axes, which is formally defined as the <b>XY-plane</b> (or <i>z</i> = 0 plane).</div>
     <div><b>(ii) Statement:</b> Since any point on the <i>XY</i>-plane has zero perpendicular elevation along the <i>z</i>-axis, its <i>z</i>-coordinate is 0. Thus, coordinates of points in the <i>XY</i>-plane are of the form <b>(<i>x</i>, <i>y</i>, 0)</b>.</div>
     <div><b>(iii) Statement:</b> The three mutually perpendicular coordinate planes (<i>XY</i>-plane, <i>YZ</i>-plane, and <i>ZX</i>-plane) divide the entire three-dimensional space into <b>eight</b> distinct spatial compartments termed <b>octants</b>.</div>`,
    "(i) XY-plane &nbsp;|&nbsp; (ii) (x, y, 0) &nbsp;|&nbsp; (iii) eight"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 11.1", "Coordinate Axes, Coordinate Planes & Spatial Octants")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx1 };
