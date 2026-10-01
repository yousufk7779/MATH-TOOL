const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch10_common");

function buildMisc() {
  const cards = [];

  // Q1 with SVG
  const svgQ1 = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 420 220" style="width: 100%; max-width: 380px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Axes -->
        <line x1="40" y1="110" x2="380" y2="110" stroke="#475569" stroke-width="1.8" marker-end="url(#arr-q1)"/>
        <line x1="80" y1="20" x2="80" y2="200" stroke="#475569" stroke-width="1.8"/>
        <!-- Parabola Curve y^2 = 20x -->
        <path d="M 280 20 Q 80 110 280 200" fill="none" stroke="#D81B60" stroke-width="2.5"/>
        <!-- Diameter line across x = 5 (scaled x=280) -->
        <line x1="280" y1="20" x2="280" y2="200" stroke="#8E24AA" stroke-width="2" stroke-dasharray="4,4"/>
        <!-- Focus F(5, 0) -->
        <circle cx="280" cy="110" r="4.5" fill="#D81B60"/>
        <text x="286" y="105" font-size="12" font-weight="700" fill="#1E293B">Focus (5, 0)</text>
        <circle cx="80" cy="110" r="4" fill="#1E293B"/>
        <text x="64" y="126" font-size="12" font-weight="700" fill="#1E293B">O</text>
        <!-- Annotations -->
        <text x="290" y="35" font-size="12" font-weight="700" fill="#D81B60">A (5, 10)</text>
        <text x="290" y="195" font-size="12" font-weight="700" fill="#D81B60">B (5, -10)</text>
        <!-- Dimension arrow for depth -->
        <line x1="80" y1="140" x2="280" y2="140" stroke="#0284C7" stroke-width="1.5"/>
        <text x="160" y="135" font-size="11" font-weight="700" fill="#0284C7">depth = 5 cm</text>
        <!-- Dimension arrow for diameter -->
        <text x="310" y="115" font-size="11" font-weight="700" fill="#8E24AA">20 cm</text>
        <defs>
          <marker id="arr-q1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569"/>
          </marker>
        </defs>
      </svg>
    </div>
    <div class="diagram-caption">💡 Parabolic Reflector: Vertex at origin, depth 5 cm along axis, opening diameter 20 cm.</div>
  </div>`;

  cards.push(qCard(
    "1",
    "If a parabolic reflector is 20 cm in diameter and 5 cm deep, find the focus.",
    `<div>Let the vertex of the parabolic reflector be taken at the origin (0, 0), with its axis along the positive <i>x</i>-axis.</div>
     <div>The standard equation of the parabola is:</div>
     <div>&nbsp;&nbsp;<i>y</i><sup>2</sup> = 4<i>ax</i> &hellip; (1)</div>
     ${svgQ1}
     <div>Since the reflector is 20 cm in diameter and 5 cm deep:</div>
     <div>&rArr; Depth along the <i>x</i>-axis: <i>x</i> = 5 cm</div>
     <div>&rArr; Radius of the opening: <i>y</i> = ${frac("20", "2")} = 10 cm</div>
     <div>Therefore, the rim point <i>A</i>(5, 10) lies on the parabola.</div>
     <div>Substituting <i>x</i> = 5 and <i>y</i> = 10 into equation (1):</div>
     <div>&rArr; 10<sup>2</sup> = 4<i>a</i>(5)</div>
     <div>&rArr; 100 = 20<i>a</i> &rArr; <b><i>a</i> = ${frac("100", "20")} = 5 cm</b></div>
     <div>The coordinates of the focus are (<i>a</i>, 0) = <b>(5, 0)</b>.</div>
     <div>Hence, the focus is at a distance of 5 cm from the vertex, located exactly at the mid-point of the circular opening diameter.</div>`,
    "Focus is at (5, 0), i.e., 5 cm from the vertex"
  ));

  // Q2 with SVG
  const svgQ2 = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 420 230" style="width: 100%; max-width: 380px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="200" x2="390" y2="200" stroke="#475569" stroke-width="1.8"/>
        <line x1="210" y1="15" x2="210" y2="215" stroke="#475569" stroke-width="1.8"/>
        <!-- Parabola x^2 = 4ay opening upwards -->
        <path d="M 90 30 Q 210 200 330 30" fill="none" stroke="#0284C7" stroke-width="2.5"/>
        <!-- Base line at y = 10 (top in this orientation) -->
        <line x1="90" y1="30" x2="330" y2="30" stroke="#E11D48" stroke-width="1.8" stroke-dasharray="4,4"/>
        <text x="215" y="25" font-size="12" font-weight="700" fill="#E11D48">Base = 5 m (height 10 m)</text>
        <!-- Horizontal level at y = 2 m -->
        <line x1="172" y1="166" x2="248" y2="166" stroke="#16A34A" stroke-width="2"/>
        <text x="254" y="170" font-size="11" font-weight="700" fill="#16A34A">width at 2 m</text>
        <circle cx="210" cy="200" r="4" fill="#1E293B"/>
        <text x="215" y="215" font-size="12" font-weight="700" fill="#1E293B">Vertex O(0,0)</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Parabolic Arch: Vertex at origin, vertical axis, 10 m high and 5 m wide at base.</div>
  </div>`;

  cards.push(qCard(
    "2",
    "An arch is in the form of a parabola with its axis vertical. The arch is 10 m high and 5 m wide at the base. How wide is it 2 m from the vertex of the parabola?",
    `<div>Let the vertex of the parabolic arch be at the origin (0, 0), with its vertical axis along the positive <i>y</i>-axis.</div>
     <div>The equation of the parabola opening upwards is:</div>
     <div>&nbsp;&nbsp;<i>x</i><sup>2</sup> = 4<i>ay</i> &hellip; (1)</div>
     ${svgQ2}
     <div>At the base of the arch:</div>
     <div>&rArr; Height <i>y</i> = 10 m</div>
     <div>&rArr; Total base width = 5 m &rArr; <i>x</i>-coordinate of the boundary point = ${frac("5", "2")} = 2.5 m</div>
     <div>Thus, the point (${frac("5", "2")}, 10) lies on the parabola.</div>
     <div>Substituting into (1):</div>
     <div>&rArr; (${frac("5", "2")})<sup>2</sup> = 4<i>a</i>(10)</div>
     <div>&rArr; ${frac("25", "4")} = 40<i>a</i> &rArr; 4<i>a</i> = ${frac("25", "40")} = ${frac("5", "8")}</div>
     <div>Equation of the arch parabola:</div>
     <div>&rArr; <i>x</i><sup>2</sup> = ${frac("5", "8")}<i>y</i></div>
     <div>We need to find the total width at a distance of 2 m from the vertex (i.e. at <i>y</i> = 2 m):</div>
     <div>&rArr; <i>x</i><sup>2</sup> = ${frac("5", "8")}(2) = ${frac("5", "4")}</div>
     <div>&rArr; <i>x</i> = &radic;(${frac("5", "4")}) = ${frac("&radic;5", "2")} m</div>
     <div>Total width of the arch at 2 m = 2<i>x</i>:</div>
     <div>&rArr; Width = 2 &times; ${frac("&radic;5", "2")} = <b>&radic;5 m &asymp; 2.23 m</b></div>`,
    "&radic;5 m &asymp; 2.23 m"
  ));

  // Q3 with SVG
  const svgQ3 = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 420 220" style="width: 100%; max-width: 380px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Roadway line -->
        <line x1="30" y1="190" x2="390" y2="190" stroke="#334155" stroke-width="2"/>
        <text x="200" y="208" font-size="11" font-weight="700" fill="#334155">Roadway = 100 m</text>
        <!-- Central tower/support line -->
        <line x1="210" y1="140" x2="210" y2="190" stroke="#0284C7" stroke-width="2"/>
        <text x="215" y="165" font-size="11" font-weight="700" fill="#0284C7">6 m</text>
        <!-- End vertical wires 30 m -->
        <line x1="60" y1="40" x2="60" y2="190" stroke="#0284C7" stroke-width="2"/>
        <line x1="360" y1="40" x2="360" y2="190" stroke="#0284C7" stroke-width="2"/>
        <text x="65" y="70" font-size="11" font-weight="700" fill="#0284C7">30 m</text>
        <!-- Cable parabola -->
        <path d="M 60 40 Q 210 140 360 40" fill="none" stroke="#D97706" stroke-width="2.5"/>
        <!-- Supporting wire at x = 18 m from center (scaled x = 210 + 54 = 264) -->
        <line x1="264" y1="120" x2="264" y2="190" stroke="#DC2626" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="270" y="150" font-size="11" font-weight="700" fill="#DC2626">18 m wire</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Suspension Bridge Cable: Parabolic curve hanging above a 100 m horizontal roadway.</div>
  </div>`;

  cards.push(qCard(
    "3",
    "The cable of a uniformly loaded suspension bridge hangs in the form of a parabola. The roadway which is horizontal and 100 m long is supported by vertical wires attached to the cable, the longest wire being 30 m and the shortest being 6 m. Find the length of a supporting wire attached to the roadway 18 m from the middle.",
    `<div>Let the vertex of the parabola be at the lowest point of the cable, taking it as the origin (0, 0).</div>
     <div>The roadway is horizontal and 6 m below the vertex.</div>
     <div>The equation of the parabola is:</div>
     <div>&nbsp;&nbsp;<i>x</i><sup>2</sup> = 4<i>ay</i> &hellip; (1)</div>
     ${svgQ3}
     <div>Total length of roadway = 100 m. From the middle, each end is at <i>x</i> = 50 m.</div>
     <div>Longest wire = 30 m. Since vertex is 6 m above roadway:</div>
     <div>&rArr; Height of cable above vertex at the end: <i>y</i> = 30 &minus; 6 = 24 m</div>
     <div>Thus, point (50, 24) lies on the parabola:</div>
     <div>&rArr; 50<sup>2</sup> = 4<i>a</i>(24)</div>
     <div>&rArr; 2500 = 96<i>a</i> &rArr; 4<i>a</i> = ${frac("2500", "24")} = ${frac("625", "6")}</div>
     <div>&rArr; Equation of the parabola: 6<i>x</i><sup>2</sup> = 625<i>y</i></div>
     <div>We need the length of wire 18 m from the middle (i.e. at <i>x</i> = 18):</div>
     <div>&rArr; 6(18)<sup>2</sup> = 625<i>y</i></div>
     <div>&rArr; 6 &times; 324 = 625<i>y</i> &rArr; 1944 = 625<i>y</i></div>
     <div>&rArr; <i>y</i> = ${frac("1944", "625")} &asymp; 3.11 m</div>
     <div>Length of the supporting wire = height above vertex + height of vertex above roadway:</div>
     <div>&rArr; Length = 3.11 + 6 = <b>9.11 m</b></div>`,
    "Approximately 9.11 m"
  ));

  // Q4 with SVG
  const svgQ4 = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 420 200" style="width: 100%; max-width: 380px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="170" x2="390" y2="170" stroke="#475569" stroke-width="1.8"/>
        <line x1="210" y1="20" x2="210" y2="185" stroke="#475569" stroke-width="1.8"/>
        <!-- Semi-ellipse: a = 140 (4m), b = 100 (2m) -->
        <path d="M 70 170 A 140 100 0 0 1 350 170" fill="none" stroke="#7C3AED" stroke-width="2.5"/>
        <text x="215" y="60" font-size="12" font-weight="700" fill="#7C3AED">2 m high</text>
        <text x="185" y="185" font-size="12" font-weight="700" fill="#1E293B">O(0,0)</text>
        <text x="330" y="185" font-size="11" font-weight="700" fill="#475569">4 m</text>
        <!-- 1.5 m from end (x = 2.5 m, scaled 210 + 87.5 = 297.5) -->
        <line x1="298" y1="92" x2="298" y2="170" stroke="#059669" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="303" y="130" font-size="11" font-weight="700" fill="#059669">h &asymp; 1.56 m</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Semi-Elliptical Arch: Span 8 m, height at centre 2 m.</div>
  </div>`;

  cards.push(qCard(
    "4",
    "An arch is in the form of a semi-ellipse. It is 8 m wide and 2 m high at the centre. Find the height of the arch at a point 1.5 m from one end.",
    `<div>Let the centre of the ellipse be at the origin (0, 0), with the major axis along the <i>x</i>-axis.</div>
     <div>Length of major axis = 2<i>a</i> = 8 m &rArr; <b><i>a</i> = 4 m</b></div>
     <div>Height at centre = semi-minor axis: <b><i>b</i> = 2 m</b></div>
     <div>Equation of the semi-ellipse (for <i>y</i> &ge; 0):</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "16")} + ${frac("y<sup>2</sup>", "4")} = 1 &hellip; (1)</div>
     ${svgQ4}
     <div>Let point <i>A</i> be 1.5 m from one end (<i>x</i> = 4):</div>
     <div>&rArr; <i>x</i>-coordinate = 4 &minus; 1.5 = <b>2.5 m</b></div>
     <div>Substituting <i>x</i> = 2.5 into equation (1):</div>
     <div>&rArr; ${frac("(2.5)<sup>2</sup>", "16")} + ${frac("y<sup>2</sup>", "4")} = 1</div>
     <div>&rArr; ${frac("6.25", "16")} + ${frac("y<sup>2</sup>", "4")} = 1</div>
     <div>&rArr; ${frac("y<sup>2</sup>", "4")} = 1 &minus; ${frac("6.25", "16")} = ${frac("9.75", "16")}</div>
     <div>&rArr; <i>y</i><sup>2</sup> = 4 &times; ${frac("9.75", "16")} = ${frac("9.75", "4")} = 2.4375</div>
     <div>&rArr; <i>y</i> = &radic;2.4375 &asymp; <b>1.56 m</b></div>
     <div>Hence, the height of the arch at a point 1.5 m from one end is approximately 1.56 m.</div>`,
    "Approximately 1.56 m"
  ));

  // Q5 with SVG
  const svgQ5 = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 420 220" style="width: 100%; max-width: 380px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="180" x2="380" y2="180" stroke="#475569" stroke-width="1.8"/>
        <line x1="70" y1="20" x2="70" y2="200" stroke="#475569" stroke-width="1.8"/>
        <!-- Rod AB -->
        <line x1="320" y1="180" x2="70" y2="50" stroke="#EA580C" stroke-width="3"/>
        <circle cx="320" cy="180" r="4.5" fill="#EA580C"/>
        <text x="325" y="195" font-size="12" font-weight="700" fill="#EA580C">A</text>
        <circle cx="70" cy="50" r="4.5" fill="#EA580C"/>
        <text x="50" y="45" font-size="12" font-weight="700" fill="#EA580C">B</text>
        <!-- Point P on rod -->
        <circle cx="257.5" cy="147.5" r="4.5" fill="#2563EB"/>
        <text x="265" y="145" font-size="12" font-weight="700" fill="#2563EB">P(x, y)</text>
        <text x="285" y="170" font-size="11" font-weight="700" fill="#1E293B">3 cm</text>
        <text x="140" y="100" font-size="11" font-weight="700" fill="#1E293B">9 cm</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Moving Rod Locus: 12 cm rod with ends on axes, point P at 3 cm from x-axis.</div>
  </div>`;

  cards.push(qCard(
    "5",
    "A rod of length 12 cm moves with its ends always touching the coordinate axes. Determine the equation of the locus of a point P on the rod, which is 3 cm from the end in contact with the x-axis.",
    `<div>Let <i>AB</i> be the rod of length 12 cm with <i>A</i> on the <i>x</i>-axis and <i>B</i> on the <i>y</i>-axis.</div>
     <div>Let <i>P</i>(<i>x</i>, <i>y</i>) be a point on the rod such that <i>AP</i> = 3 cm.</div>
     <div>Then <i>PB</i> = <i>AB</i> &minus; <i>AP</i> = 12 &minus; 3 = 9 cm.</div>
     ${svgQ5}
     <div>Let the rod make an angle &theta; with the positive <i>x</i>-axis.</div>
     <div>From <i>P</i>, draw perpendiculars to both axes:</div>
     <div>In &Delta;<i>PBQ</i> (horizontal component):</div>
     <div>&rArr; cos &theta; = ${frac("x", "PB")} = ${frac("x", "9")}</div>
     <div>In &Delta;<i>PAR</i> (vertical component):</div>
     <div>&rArr; sin &theta; = ${frac("y", "AP")} = ${frac("y", "3")}</div>
     <div>Using the fundamental trigonometric identity cos<sup>2</sup> &theta; + sin<sup>2</sup> &theta; = 1:</div>
     <div>&rArr; (${frac("x", "9")})<sup>2</sup> + (${frac("y", "3")})<sup>2</sup> = 1</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "81")} + ${frac("y<sup>2</sup>", "9")} = 1</div>
     <div>Hence, the locus of point <i>P</i> is an <b>ellipse</b> with major axis along the <i>x</i>-axis.</div>`,
    `${frac("x<sup>2</sup>", "81")} + ${frac("y<sup>2</sup>", "9")} = 1`
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Find the area of the triangle formed by the lines joining the vertex of the parabola x<sup>2</sup> = 12y to the ends of its latus rectum.",
    `<div>The given parabola is <i>x</i><sup>2</sup> = 12<i>y</i>.</div>
     <div>Comparing with standard form <i>x</i><sup>2</sup> = 4<i>ay</i>:</div>
     <div>&rArr; 4<i>a</i> = 12 &rArr; <b><i>a</i> = 3</b></div>
     <div>The vertex is at the origin <i>O</i>(0, 0).</div>
     <div>The latus rectum is the focal chord perpendicular to the <i>y</i>-axis, lying along the line <i>y</i> = <i>a</i> = 3.</div>
     <div>To find the endpoints <i>A</i> and <i>B</i> of the latus rectum, put <i>y</i> = 3 in <i>x</i><sup>2</sup> = 12<i>y</i>:</div>
     <div>&rArr; <i>x</i><sup>2</sup> = 12(3) = 36 &rArr; <i>x</i> = &plusmn;6</div>
     <div>Thus, the endpoints are <i>A</i>(&minus;6, 3) and <i>B</i>(6, 3).</div>
     <div>The vertices of &Delta;<i>OAB</i> are (0, 0), (&minus;6, 3), and (6, 3).</div>
     <div><b>Method: Base &times; Height:</b></div>
     <div>&rArr; Base <i>AB</i> = 6 &minus; (&minus;6) = 12 units</div>
     <div>&rArr; Height <i>h</i> = distance from vertex (0, 0) to <i>y</i> = 3 is 3 units</div>
     <div>&rArr; Area(&Delta;<i>OAB</i>) = ${frac("1", "2")} &times; Base &times; Height = ${frac("1", "2")} &times; 12 &times; 3 = <b>18 sq units</b></div>`,
    "18 square units"
  ));

  // Q7
  cards.push(qCard(
    "7",
    "A man running a racecourse notes that the sum of the distances from the two flag posts from him is always 10 m and the distance between the flag posts is 8 m. Find the equation of the posts traced by the man.",
    `<div>Let <i>A</i> and <i>B</i> be the positions of the two flag posts, and <i>P</i>(<i>x</i>, <i>y</i>) be the position of the man.</div>
     <div>Given: <i>PA</i> + <i>PB</i> = 10 m (constant sum of distances from two fixed points).</div>
     <div>By definition of an ellipse, the locus of a point whose sum of distances from two fixed points (foci) is constant is an <b>ellipse</b>.</div>
     <div>&rArr; Length of major axis 2<i>a</i> = 10 &rArr; <b><i>a</i> = 5</b> &rArr; <i>a</i><sup>2</sup> = 25</div>
     <div>Distance between the two flag posts (foci) = 2<i>c</i> = 8 &rArr; <b><i>c</i> = 4</b></div>
     <div>Using the ellipse relation <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> &minus; <i>c</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 5<sup>2</sup> &minus; 4<sup>2</sup> = 25 &minus; 16 = <b>9</b></div>
     <div>Taking the origin at the mid-point of <i>AB</i> and the major axis along the <i>x</i>-axis:</div>
     <div>The equation of the path traced by the man is:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1 &rArr; <b>${frac("x<sup>2</sup>", "25")} + ${frac("y<sup>2</sup>", "9")} = 1</b></div>`,
    `${frac("x<sup>2</sup>", "25")} + ${frac("y<sup>2</sup>", "9")} = 1`
  ));

  // Q8
  cards.push(qCard(
    "8",
    "An equilateral triangle is inscribed in the parabola y<sup>2</sup> = 4ax, where one vertex is at the vertex of the parabola. Find the length of the side of the triangle.",
    `<div>Let <i>OAB</i> be the equilateral triangle inscribed in the parabola <i>y</i><sup>2</sup> = 4<i>ax</i>, with vertex <i>O</i> at the origin (0, 0).</div>
     <div>By symmetry of the parabola about the <i>x</i>-axis:</div>
     <div>&rArr; Side <i>AB</i> is perpendicular to the <i>x</i>-axis and bisected by it at <i>C</i>(<i>k</i>, 0).</div>
     <div>Let <i>OC</i> = <i>k</i>. Then the coordinates of <i>A</i> and <i>B</i> have <i>x</i> = <i>k</i>:</div>
     <div>&rArr; <i>y</i><sup>2</sup> = 4<i>ak</i> &rArr; <i>y</i> = &plusmn;2&radic;(<i>ak</i>)</div>
     <div>Thus, <i>A</i> = (<i>k</i>, 2&radic;(<i>ak</i>)) and <i>B</i> = (<i>k</i>, &minus;2&radic;(<i>ak</i>)).</div>
     <div>Side length <i>AB</i>:</div>
     <div>&rArr; <i>AB</i> = 2&radic;(<i>ak</i>) &minus; (&minus;2&radic;(<i>ak</i>)) = 4&radic;(<i>ak</i>)</div>
     <div>Side length <i>OA</i>:</div>
     <div>&rArr; <i>OA</i><sup>2</sup> = <i>k</i><sup>2</sup> + [2&radic;(<i>ak</i>)]<sup>2</sup> = <i>k</i><sup>2</sup> + 4<i>ak</i></div>
     <div>Since &Delta;<i>OAB</i> is equilateral, <i>OA</i><sup>2</sup> = <i>AB</i><sup>2</sup>:</div>
     <div>&rArr; <i>k</i><sup>2</sup> + 4<i>ak</i> = [4&radic;(<i>ak</i>)]<sup>2</sup></div>
     <div>&rArr; <i>k</i><sup>2</sup> + 4<i>ak</i> = 16<i>ak</i></div>
     <div>&rArr; <i>k</i><sup>2</sup> = 12<i>ak</i> &rArr; <b><i>k</i> = 12<i>a</i></b> &nbsp;(since <i>k</i> &ne; 0)</div>
     <div>Substituting <i>k</i> = 12<i>a</i> into the side expression <i>AB</i>:</div>
     <div>&rArr; Side = 4&radic;(<i>a</i> &times; 12<i>a</i>) = 4&radic;(12<i>a</i><sup>2</sup>) = 4(2&radic;3<i>a</i>) = <b>8&radic;3 a</b></div>`,
    "8&radic;3 a"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Miscellaneous Exercise", "Real-World Applications, Inscribed Polygons & Conic Loci")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildMisc };
