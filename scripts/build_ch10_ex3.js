const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch10_common");

function buildEx3() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    `Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: ${frac("x<sup>2</sup>", "36")} + ${frac("y<sup>2</sup>", "16")} = 1.`,
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "36")} + ${frac("y<sup>2</sup>", "16")} = 1 &rArr; ${frac("x<sup>2</sup>", "6<sup>2</sup>")} + ${frac("y<sup>2</sup>", "4<sup>2</sup>")} = 1</div>
     <div>Since the denominator of <i>x</i><sup>2</sup> is greater than the denominator of <i>y</i><sup>2</sup>, the major axis is along the <i>x</i>-axis.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 6</b>, &nbsp;<b><i>b</i> = 4</b></div>
     <div>&rArr; <i>c</i> = &radic;(<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>) = &radic;(36 &minus; 16) = &radic;20 = <b>2&radic;5</b></div>
     <div>1. <b>Coordinates of foci:</b> (&plusmn;<i>c</i>, 0) = <b>(&plusmn;2&radic;5, 0)</b></div>
     <div>2. <b>Coordinates of vertices:</b> (&plusmn;<i>a</i>, 0) = <b>(&plusmn;6, 0)</b></div>
     <div>3. <b>Length of major axis:</b> 2<i>a</i> = 2(6) = <b>12</b></div>
     <div>4. <b>Length of minor axis:</b> 2<i>b</i> = 2(4) = <b>8</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = ${frac("2&radic;5", "6")} = <b>${frac("&radic;5", "3")}</b></div>
     <div>6. <b>Length of latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(16)", "6")} = <b>${frac("16", "3")}</b></div>`,
    `Foci: (&plusmn;2&radic;5, 0), Vertices: (&plusmn;6, 0), Major Axis: 12, Minor Axis: 8, e = ${frac("&radic;5", "3")}, Latus Rectum = ${frac("16", "3")}`
  ));

  // Q2
  cards.push(qCard(
    "2",
    `Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: ${frac("x<sup>2</sup>", "4")} + ${frac("y<sup>2</sup>", "25")} = 1.`,
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "4")} + ${frac("y<sup>2</sup>", "25")} = 1 &rArr; ${frac("x<sup>2</sup>", "2<sup>2</sup>")} + ${frac("y<sup>2</sup>", "5<sup>2</sup>")} = 1</div>
     <div>Since the denominator of <i>y</i><sup>2</sup> is greater than the denominator of <i>x</i><sup>2</sup>, the major axis is along the <i>y</i>-axis.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 5</b>, &nbsp;<b><i>b</i> = 2</b></div>
     <div>&rArr; <i>c</i> = &radic;(<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>) = &radic;(25 &minus; 4) = <b>&radic;21</b></div>
     <div>1. <b>Coordinates of foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;&radic;21)</b></div>
     <div>2. <b>Coordinates of vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;5)</b></div>
     <div>3. <b>Length of major axis:</b> 2<i>a</i> = 2(5) = <b>10</b></div>
     <div>4. <b>Length of minor axis:</b> 2<i>b</i> = 2(2) = <b>4</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = <b>${frac("&radic;21", "5")}</b></div>
     <div>6. <b>Length of latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(4)", "5")} = <b>${frac("8", "5")}</b></div>`,
    `Foci: (0, &plusmn;&radic;21), Vertices: (0, &plusmn;5), Major Axis: 10, Minor Axis: 4, e = ${frac("&radic;21", "5")}, Latus Rectum = ${frac("8", "5")}`
  ));

  // Q3
  cards.push(qCard(
    "3",
    `Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: ${frac("x<sup>2</sup>", "16")} + ${frac("y<sup>2</sup>", "9")} = 1.`,
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "16")} + ${frac("y<sup>2</sup>", "9")} = 1 &rArr; ${frac("x<sup>2</sup>", "4<sup>2</sup>")} + ${frac("y<sup>2</sup>", "3<sup>2</sup>")} = 1</div>
     <div>Here, denominator of <i>x</i><sup>2</sup> &gt; denominator of <i>y</i><sup>2</sup>, so major axis is along the <i>x</i>-axis.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 4</b>, &nbsp;<b><i>b</i> = 3</b></div>
     <div>&rArr; <i>c</i> = &radic;(<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>) = &radic;(16 &minus; 9) = <b>&radic;7</b></div>
     <div>1. <b>Foci:</b> (&plusmn;<i>c</i>, 0) = <b>(&plusmn;&radic;7, 0)</b></div>
     <div>2. <b>Vertices:</b> (&plusmn;<i>a</i>, 0) = <b>(&plusmn;4, 0)</b></div>
     <div>3. <b>Major axis:</b> 2<i>a</i> = 2(4) = <b>8</b></div>
     <div>4. <b>Minor axis:</b> 2<i>b</i> = 2(3) = <b>6</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = <b>${frac("&radic;7", "4")}</b></div>
     <div>6. <b>Latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(9)", "4")} = <b>${frac("9", "2")}</b></div>`,
    `Foci: (&plusmn;&radic;7, 0), Vertices: (&plusmn;4, 0), Major Axis: 8, Minor Axis: 6, e = ${frac("&radic;7", "4")}, Latus Rectum = ${frac("9", "2")}`
  ));

  // Q4
  cards.push(qCard(
    "4",
    `Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: ${frac("x<sup>2</sup>", "25")} + ${frac("y<sup>2</sup>", "100")} = 1.`,
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "25")} + ${frac("y<sup>2</sup>", "100")} = 1</div>
     <div>Here, denominator of <i>y</i><sup>2</sup> is greater, so major axis is along the <i>y</i>-axis.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 10</b>, &nbsp;<b><i>b</i> = 5</b></div>
     <div>&rArr; <i>c</i> = &radic;(<i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>) = &radic;(100 &minus; 25) = &radic;75 = <b>5&radic;3</b></div>
     <div>1. <b>Foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;5&radic;3)</b></div>
     <div>2. <b>Vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;10)</b></div>
     <div>3. <b>Major axis:</b> 2<i>a</i> = 2(10) = <b>20</b></div>
     <div>4. <b>Minor axis:</b> 2<i>b</i> = 2(5) = <b>10</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = ${frac("5&radic;3", "10")} = <b>${frac("&radic;3", "2")}</b></div>
     <div>6. <b>Latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(25)", "10")} = <b>5</b></div>`,
    `Foci: (0, &plusmn;5&radic;3), Vertices: (0, &plusmn;10), Major Axis: 20, Minor Axis: 10, e = ${frac("&radic;3", "2")}, Latus Rectum = 5`
  ));

  // Q5
  cards.push(qCard(
    "5",
    `Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: ${frac("x<sup>2</sup>", "49")} + ${frac("y<sup>2</sup>", "36")} = 1.`,
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "49")} + ${frac("y<sup>2</sup>", "36")} = 1</div>
     <div>Major axis is along the <i>x</i>-axis since 49 &gt; 36.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 7</b>, &nbsp;<b><i>b</i> = 6</b></div>
     <div>&rArr; <i>c</i> = &radic;(49 &minus; 36) = <b>&radic;13</b></div>
     <div>1. <b>Foci:</b> (&plusmn;<i>c</i>, 0) = <b>(&plusmn;&radic;13, 0)</b></div>
     <div>2. <b>Vertices:</b> (&plusmn;<i>a</i>, 0) = <b>(&plusmn;7, 0)</b></div>
     <div>3. <b>Major axis:</b> 2<i>a</i> = 2(7) = <b>14</b></div>
     <div>4. <b>Minor axis:</b> 2<i>b</i> = 2(6) = <b>12</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = <b>${frac("&radic;13", "7")}</b></div>
     <div>6. <b>Latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(36)", "7")} = <b>${frac("72", "7")}</b></div>`,
    `Foci: (&plusmn;&radic;13, 0), Vertices: (&plusmn;7, 0), Major Axis: 14, Minor Axis: 12, e = ${frac("&radic;13", "7")}, Latus Rectum = ${frac("72", "7")}`
  ));

  // Q6
  cards.push(qCard(
    "6",
    `Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: ${frac("x<sup>2</sup>", "100")} + ${frac("y<sup>2</sup>", "400")} = 1.`,
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "100")} + ${frac("y<sup>2</sup>", "400")} = 1</div>
     <div>Major axis is along the <i>y</i>-axis since 400 &gt; 100.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 20</b>, &nbsp;<b><i>b</i> = 10</b></div>
     <div>&rArr; <i>c</i> = &radic;(400 &minus; 100) = &radic;300 = <b>10&radic;3</b></div>
     <div>1. <b>Foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;10&radic;3)</b></div>
     <div>2. <b>Vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;20)</b></div>
     <div>3. <b>Major axis:</b> 2<i>a</i> = 2(20) = <b>40</b></div>
     <div>4. <b>Minor axis:</b> 2<i>b</i> = 2(10) = <b>20</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = ${frac("10&radic;3", "20")} = <b>${frac("&radic;3", "2")}</b></div>
     <div>6. <b>Latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(100)", "20")} = <b>10</b></div>`,
    `Foci: (0, &plusmn;10&radic;3), Vertices: (0, &plusmn;20), Major Axis: 40, Minor Axis: 20, e = ${frac("&radic;3", "2")}, Latus Rectum = 10`
  ));

  // Q7
  cards.push(qCard(
    "7",
    "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: 36x<sup>2</sup> + 4y<sup>2</sup> = 144.",
    `<div>Dividing both sides by 144:</div>
     <div>&rArr; ${frac("36x<sup>2</sup>", "144")} + ${frac("4y<sup>2</sup>", "144")} = 1 &rArr; ${frac("x<sup>2</sup>", "4")} + ${frac("y<sup>2</sup>", "36")} = 1</div>
     <div>Major axis is along the <i>y</i>-axis since 36 &gt; 4.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 6</b>, &nbsp;<b><i>b</i> = 2</b></div>
     <div>&rArr; <i>c</i> = &radic;(36 &minus; 4) = &radic;32 = <b>4&radic;2</b></div>
     <div>1. <b>Foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;4&radic;2)</b></div>
     <div>2. <b>Vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;6)</b></div>
     <div>3. <b>Major axis:</b> 2<i>a</i> = 2(6) = <b>12</b></div>
     <div>4. <b>Minor axis:</b> 2<i>b</i> = 2(2) = <b>4</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = ${frac("4&radic;2", "6")} = <b>${frac("2&radic;2", "3")}</b></div>
     <div>6. <b>Latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(4)", "6")} = <b>${frac("4", "3")}</b></div>`,
    `Foci: (0, &plusmn;4&radic;2), Vertices: (0, &plusmn;6), Major Axis: 12, Minor Axis: 4, e = ${frac("2&radic;2", "3")}, Latus Rectum = ${frac("4", "3")}`
  ));

  // Q8
  cards.push(qCard(
    "8",
    "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: 16x<sup>2</sup> + y<sup>2</sup> = 16.",
    `<div>Dividing both sides by 16:</div>
     <div>&rArr; ${frac("16x<sup>2</sup>", "16")} + ${frac("y<sup>2</sup>", "16")} = 1 &rArr; ${frac("x<sup>2</sup>", "1")} + ${frac("y<sup>2</sup>", "16")} = 1</div>
     <div>Major axis is along the <i>y</i>-axis since 16 &gt; 1.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 4</b>, &nbsp;<b><i>b</i> = 1</b></div>
     <div>&rArr; <i>c</i> = &radic;(16 &minus; 1) = <b>&radic;15</b></div>
     <div>1. <b>Foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;&radic;15)</b></div>
     <div>2. <b>Vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;4)</b></div>
     <div>3. <b>Major axis:</b> 2<i>a</i> = 2(4) = <b>8</b></div>
     <div>4. <b>Minor axis:</b> 2<i>b</i> = 2(1) = <b>2</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = <b>${frac("&radic;15", "4")}</b></div>
     <div>6. <b>Latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(1)", "4")} = <b>${frac("1", "2")}</b></div>`,
    `Foci: (0, &plusmn;&radic;15), Vertices: (0, &plusmn;4), Major Axis: 8, Minor Axis: 2, e = ${frac("&radic;15", "4")}, Latus Rectum = ${frac("1", "2")}`
  ));

  // Q9
  cards.push(qCard(
    "9",
    "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the length of the latus rectum of the ellipse: 4x<sup>2</sup> + 9y<sup>2</sup> = 36.",
    `<div>Dividing both sides by 36:</div>
     <div>&rArr; ${frac("4x<sup>2</sup>", "36")} + ${frac("9y<sup>2</sup>", "36")} = 1 &rArr; ${frac("x<sup>2</sup>", "9")} + ${frac("y<sup>2</sup>", "4")} = 1</div>
     <div>Major axis is along the <i>x</i>-axis since 9 &gt; 4.</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 3</b>, &nbsp;<b><i>b</i> = 2</b></div>
     <div>&rArr; <i>c</i> = &radic;(9 &minus; 4) = <b>&radic;5</b></div>
     <div>1. <b>Foci:</b> (&plusmn;<i>c</i>, 0) = <b>(&plusmn;&radic;5, 0)</b></div>
     <div>2. <b>Vertices:</b> (&plusmn;<i>a</i>, 0) = <b>(&plusmn;3, 0)</b></div>
     <div>3. <b>Major axis:</b> 2<i>a</i> = 2(3) = <b>6</b></div>
     <div>4. <b>Minor axis:</b> 2<i>b</i> = 2(2) = <b>4</b></div>
     <div>5. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = <b>${frac("&radic;5", "3")}</b></div>
     <div>6. <b>Latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(4)", "3")} = <b>${frac("8", "3")}</b></div>`,
    `Foci: (&plusmn;&radic;5, 0), Vertices: (&plusmn;3, 0), Major Axis: 6, Minor Axis: 4, e = ${frac("&radic;5", "3")}, Latus Rectum = ${frac("8", "3")}`
  ));

  // Q10
  cards.push(qCard(
    "10",
    "Find the equation for the ellipse with Vertices (&plusmn;5, 0), foci (&plusmn;4, 0).",
    `<div>Given: Vertices = (&plusmn;5, 0) and Foci = (&plusmn;4, 0).</div>
     <div>Since the vertices and foci lie on the <i>x</i>-axis, the major axis is along the <i>x</i>-axis.</div>
     <div>The standard equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1</div>
     <div>From the vertices (&plusmn;<i>a</i>, 0): <b><i>a</i> = 5</b> &rArr; <i>a</i><sup>2</sup> = 25</div>
     <div>From the foci (&plusmn;<i>c</i>, 0): <b><i>c</i> = 4</b></div>
     <div>Using the relation <i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>:</div>
     <div>&rArr; 25 = <i>b</i><sup>2</sup> + 4<sup>2</sup> &rArr; <i>b</i><sup>2</sup> = 25 &minus; 16 = <b>9</b></div>
     <div>Thus, the equation is:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "25")} + ${frac("y<sup>2</sup>", "9")} = 1</div>`,
    `${frac("x<sup>2</sup>", "25")} + ${frac("y<sup>2</sup>", "9")} = 1`
  ));

  // Q11
  cards.push(qCard(
    "11",
    "Find the equation for the ellipse with Vertices (0, &plusmn;13), foci (0, &plusmn;5).",
    `<div>Given: Vertices = (0, &plusmn;13) and Foci = (0, &plusmn;5).</div>
     <div>Since the vertices and foci lie on the <i>y</i>-axis, the major axis is along the <i>y</i>-axis.</div>
     <div>The standard equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1</div>
     <div>From vertices (0, &plusmn;<i>a</i>): <b><i>a</i> = 13</b> &rArr; <i>a</i><sup>2</sup> = 169</div>
     <div>From foci (0, &plusmn;<i>c</i>): <b><i>c</i> = 5</b></div>
     <div>Using <i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>:</div>
     <div>&rArr; 169 = <i>b</i><sup>2</sup> + 5<sup>2</sup> &rArr; <i>b</i><sup>2</sup> = 169 &minus; 25 = <b>144</b></div>
     <div>Thus, the equation of the ellipse is:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "144")} + ${frac("y<sup>2</sup>", "169")} = 1</div>`,
    `${frac("x<sup>2</sup>", "144")} + ${frac("y<sup>2</sup>", "169")} = 1`
  ));

  // Q12
  cards.push(qCard(
    "12",
    "Find the equation for the ellipse with Vertices (&plusmn;6, 0), foci (&plusmn;4, 0).",
    `<div>Given: Vertices = (&plusmn;6, 0) and Foci = (&plusmn;4, 0).</div>
     <div>Major axis is along the <i>x</i>-axis. Standard form: ${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1.</div>
     <div>&rArr; <i>a</i> = 6 &rArr; <i>a</i><sup>2</sup> = 36</div>
     <div>&rArr; <i>c</i> = 4 &rArr; <i>c</i><sup>2</sup> = 16</div>
     <div>Using <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> &minus; <i>c</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 36 &minus; 16 = <b>20</b></div>
     <div>Thus, the equation is:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "36")} + ${frac("y<sup>2</sup>", "20")} = 1</div>`,
    `${frac("x<sup>2</sup>", "36")} + ${frac("y<sup>2</sup>", "20")} = 1`
  ));

  // Q13
  cards.push(qCard(
    "13",
    "Find the equation for the ellipse with Ends of major axis (&plusmn;3, 0), ends of minor axis (0, &plusmn;2).",
    `<div>Given: Ends of major axis = (&plusmn;3, 0) and Ends of minor axis = (0, &plusmn;2).</div>
     <div>The major axis is along the <i>x</i>-axis.</div>
     <div>Semi-major axis: <b><i>a</i> = 3</b> &rArr; <i>a</i><sup>2</sup> = 9</div>
     <div>Semi-minor axis: <b><i>b</i> = 2</b> &rArr; <i>b</i><sup>2</sup> = 4</div>
     <div>Standard equation: ${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "9")} + ${frac("y<sup>2</sup>", "4")} = 1</div>`,
    `${frac("x<sup>2</sup>", "9")} + ${frac("y<sup>2</sup>", "4")} = 1`
  ));

  // Q14
  cards.push(qCard(
    "14",
    "Find the equation for the ellipse with Ends of major axis (0, &plusmn;&radic;5), ends of minor axis (&plusmn;1, 0).",
    `<div>Given: Ends of major axis = (0, &plusmn;&radic;5) and Ends of minor axis = (&plusmn;1, 0).</div>
     <div>The major axis is along the <i>y</i>-axis.</div>
     <div>Semi-major axis: <b><i>a</i> = &radic;5</b> &rArr; <i>a</i><sup>2</sup> = 5</div>
     <div>Semi-minor axis: <b><i>b</i> = 1</b> &rArr; <i>b</i><sup>2</sup> = 1</div>
     <div>Standard equation: ${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "1")} + ${frac("y<sup>2</sup>", "5")} = 1</div>`,
    `${frac("x<sup>2</sup>", "1")} + ${frac("y<sup>2</sup>", "5")} = 1`
  ));

  // Q15
  cards.push(qCard(
    "15",
    "Find the equation for the ellipse with Length of major axis 26, foci (&plusmn;5, 0).",
    `<div>Given: Length of major axis = 26 and Foci = (&plusmn;5, 0).</div>
     <div>Since the foci are on the <i>x</i>-axis, the major axis is along the <i>x</i>-axis.</div>
     <div>&rArr; 2<i>a</i> = 26 &rArr; <b><i>a</i> = 13</b> &rArr; <i>a</i><sup>2</sup> = 169</div>
     <div>Foci (&plusmn;<i>c</i>, 0) = (&plusmn;5, 0) &rArr; <b><i>c</i> = 5</b></div>
     <div>Using <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> &minus; <i>c</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 169 &minus; 25 = <b>144</b></div>
     <div>Equation of the ellipse:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "169")} + ${frac("y<sup>2</sup>", "144")} = 1</div>`,
    `${frac("x<sup>2</sup>", "169")} + ${frac("y<sup>2</sup>", "144")} = 1`
  ));

  // Q16
  cards.push(qCard(
    "16",
    "Find the equation for the ellipse with Length of minor axis 16, foci (0, &plusmn;6).",
    `<div>Given: Length of minor axis = 16 and Foci = (0, &plusmn;6).</div>
     <div>Since the foci are on the <i>y</i>-axis, the major axis is along the <i>y</i>-axis.</div>
     <div>&rArr; 2<i>b</i> = 16 &rArr; <b><i>b</i> = 8</b> &rArr; <i>b</i><sup>2</sup> = 64</div>
     <div>Foci (0, &plusmn;<i>c</i>) = (0, &plusmn;6) &rArr; <b><i>c</i> = 6</b></div>
     <div>Using <i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>:</div>
     <div>&rArr; <i>a</i><sup>2</sup> = 64 + 36 = <b>100</b></div>
     <div>Standard equation for major axis along <i>y</i>-axis:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1 &rArr; ${frac("x<sup>2</sup>", "64")} + ${frac("y<sup>2</sup>", "100")} = 1</div>`,
    `${frac("x<sup>2</sup>", "64")} + ${frac("y<sup>2</sup>", "100")} = 1`
  ));

  // Q17
  cards.push(qCard(
    "17",
    "Find the equation for the ellipse with Foci (&plusmn;3, 0), a = 4.",
    `<div>Given: Foci = (&plusmn;3, 0) and <i>a</i> = 4.</div>
     <div>Foci lie on the <i>x</i>-axis, so the major axis is along the <i>x</i>-axis.</div>
     <div>&rArr; <i>c</i> = 3 and <i>a</i> = 4 &rArr; <i>a</i><sup>2</sup> = 16</div>
     <div>Using <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> &minus; <i>c</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 16 &minus; 3<sup>2</sup> = 16 &minus; 9 = <b>7</b></div>
     <div>Equation of the ellipse:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "16")} + ${frac("y<sup>2</sup>", "7")} = 1</div>`,
    `${frac("x<sup>2</sup>", "16")} + ${frac("y<sup>2</sup>", "7")} = 1`
  ));

  // Q18
  cards.push(qCard(
    "18",
    "Find the equation for the ellipse with b = 3, c = 4, centre at the origin; foci on the x-axis.",
    `<div>Given: <i>b</i> = 3, <i>c</i> = 4, centre (0, 0), and foci on the <i>x</i>-axis.</div>
     <div>Since foci are on the <i>x</i>-axis, the major axis is along the <i>x</i>-axis.</div>
     <div>Using <i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>:</div>
     <div>&rArr; <i>a</i><sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = <b>25</b></div>
     <div>Here, <i>b</i><sup>2</sup> = 3<sup>2</sup> = 9</div>
     <div>The standard equation is:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "25")} + ${frac("y<sup>2</sup>", "9")} = 1</div>`,
    `${frac("x<sup>2</sup>", "25")} + ${frac("y<sup>2</sup>", "9")} = 1`
  ));

  // Q19
  cards.push(qCard(
    "19",
    "Find the equation for the ellipse with Centre at (0, 0), major axis on the y-axis and passes through the points (3, 2) and (1, 6).",
    `<div>Since the centre is at (0, 0) and the major axis is along the <i>y</i>-axis:</div>
     <div>The standard equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1 &hellip; (1)</div>
     <div>Since the ellipse passes through (3, 2):</div>
     <div>&rArr; ${frac("3<sup>2</sup>", "b<sup>2</sup>")} + ${frac("2<sup>2</sup>", "a<sup>2</sup>")} = 1 &rArr; ${frac("9", "b<sup>2</sup>")} + ${frac("4", "a<sup>2</sup>")} = 1 &hellip; (2)</div>
     <div>Since the ellipse passes through (1, 6):</div>
     <div>&rArr; ${frac("1<sup>2</sup>", "b<sup>2</sup>")} + ${frac("6<sup>2</sup>", "a<sup>2</sup>")} = 1 &rArr; ${frac("1", "b<sup>2</sup>")} + ${frac("36", "a<sup>2</sup>")} = 1 &hellip; (3)</div>
     <div>Let <i>u</i> = ${frac("1", "b<sup>2</sup>")} and <i>v</i> = ${frac("1", "a<sup>2</sup>")}:</div>
     <div>&rArr; 9<i>u</i> + 4<i>v</i> = 1 &hellip; (4)</div>
     <div>&rArr; <i>u</i> + 36<i>v</i> = 1 &rArr; <i>u</i> = 1 &minus; 36<i>v</i></div>
     <div>Substitute in (4):</div>
     <div>&rArr; 9(1 &minus; 36<i>v</i>) + 4<i>v</i> = 1</div>
     <div>&rArr; 9 &minus; 324<i>v</i> + 4<i>v</i> = 1 &rArr; &minus;320<i>v</i> = &minus;8 &rArr; <i>v</i> = ${frac("8", "320")} = ${frac("1", "40")}</div>
     <div>&rArr; <b><i>a</i><sup>2</sup> = 40</b></div>
     <div>&rArr; <i>u</i> = 1 &minus; 36(${frac("1", "40")}) = 1 &minus; ${frac("9", "10")} = ${frac("1", "10")}</div>
     <div>&rArr; <b><i>b</i><sup>2</sup> = 10</b></div>
     <div>Substituting <i>a</i><sup>2</sup> = 40 and <i>b</i><sup>2</sup> = 10 into (1):</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "10")} + ${frac("y<sup>2</sup>", "40")} = 1 &nbsp;(or 4<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 40)</div>`,
    `${frac("x<sup>2</sup>", "10")} + ${frac("y<sup>2</sup>", "40")} = 1 &nbsp;(or 4x<sup>2</sup> + y<sup>2</sup> = 40)`
  ));

  // Q20
  cards.push(qCard(
    "20",
    "Find the equation for the ellipse with Major axis on the x-axis and passes through the points (4, 3) and (6, 2).",
    `<div>Since the major axis is on the <i>x</i>-axis, the standard equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1 &hellip; (1)</div>
     <div>Since the ellipse passes through (4, 3):</div>
     <div>&rArr; ${frac("16", "a<sup>2</sup>")} + ${frac("9", "b<sup>2</sup>")} = 1 &hellip; (2)</div>
     <div>Since the ellipse passes through (6, 2):</div>
     <div>&rArr; ${frac("36", "a<sup>2</sup>")} + ${frac("4", "b<sup>2</sup>")} = 1 &hellip; (3)</div>
     <div>Let <i>u</i> = ${frac("1", "a<sup>2</sup>")} and <i>v</i> = ${frac("1", "b<sup>2</sup>")}:</div>
     <div>&rArr; 16<i>u</i> + 9<i>v</i> = 1 &hellip; (4)</div>
     <div>&rArr; 36<i>u</i> + 4<i>v</i> = 1 &hellip; (5)</div>
     <div>Multiply (4) by 4 and (5) by 9:</div>
     <div>&rArr; 64<i>u</i> + 36<i>v</i> = 4</div>
     <div>&rArr; 324<i>u</i> + 36<i>v</i> = 9</div>
     <div>Subtracting the two equations:</div>
     <div>&rArr; (324 &minus; 64)<i>u</i> = 9 &minus; 4</div>
     <div>&rArr; 260<i>u</i> = 5 &rArr; <i>u</i> = ${frac("5", "260")} = ${frac("1", "52")} &rArr; <b><i>a</i><sup>2</sup> = 52</b></div>
     <div>Substitute <i>u</i> = ${frac("1", "52")} into (4):</div>
     <div>&rArr; 16(${frac("1", "52")}) + 9<i>v</i> = 1</div>
     <div>&rArr; ${frac("4", "13")} + 9<i>v</i> = 1 &rArr; 9<i>v</i> = 1 &minus; ${frac("4", "13")} = ${frac("9", "13")} &rArr; <i>v</i> = ${frac("1", "13")} &rArr; <b><i>b</i><sup>2</sup> = 13</b></div>
     <div>Substituting <i>a</i><sup>2</sup> = 52 and <i>b</i><sup>2</sup> = 13 into (1):</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "52")} + ${frac("y<sup>2</sup>", "13")} = 1</div>`,
    `${frac("x<sup>2</sup>", "52")} + ${frac("y<sup>2</sup>", "13")} = 1`
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 10.3", "Foci, Vertices, Eccentricity & Standard Equations of Ellipses")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx3 };
