const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch10_common");

function buildEx4() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    `Find the coordinates of the foci and the vertices, the eccentricity and the length of the latus rectum of the hyperbola: ${frac("x<sup>2</sup>", "16")} &minus; ${frac("y<sup>2</sup>", "9")} = 1.`,
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;${frac("x<sup>2</sup>", "16")} &minus; ${frac("y<sup>2</sup>", "9")} = 1 &rArr; ${frac("x<sup>2</sup>", "4<sup>2</sup>")} &minus; ${frac("y<sup>2</sup>", "3<sup>2</sup>")} = 1</div>
     <div>This is of the standard form ${frac("x<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1 with transverse axis along the <i>x</i>-axis.</div>
     <div>&rArr; <b><i>a</i> = 4</b>, &nbsp;<b><i>b</i> = 3</b></div>
     <div>Using the fundamental relation <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>:</div>
     <div>&rArr; <i>c</i><sup>2</sup> = 4<sup>2</sup> + 3<sup>2</sup> = 16 + 9 = 25 &rArr; <b><i>c</i> = 5</b></div>
     <div>1. <b>Coordinates of foci:</b> (&plusmn;<i>c</i>, 0) = <b>(&plusmn;5, 0)</b></div>
     <div>2. <b>Coordinates of vertices:</b> (&plusmn;<i>a</i>, 0) = <b>(&plusmn;4, 0)</b></div>
     <div>3. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = <b>${frac("5", "4")}</b></div>
     <div>4. <b>Length of latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(9)", "4")} = <b>${frac("9", "2")}</b></div>`,
    `Foci: (&plusmn;5, 0), Vertices: (&plusmn;4, 0), e = ${frac("5", "4")}, Latus Rectum = ${frac("9", "2")}`
  ));

  // Q2
  cards.push(qCard(
    "2",
    `Find the coordinates of the foci and the vertices, the eccentricity and the length of the latus rectum of the hyperbola: ${frac("y<sup>2</sup>", "9")} &minus; ${frac("x<sup>2</sup>", "27")} = 1.`,
    `<div>The given equation is:</div>
     <div>&nbsp;&nbsp;${frac("y<sup>2</sup>", "9")} &minus; ${frac("x<sup>2</sup>", "27")} = 1</div>
     <div>This is of the form ${frac("y<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("x<sup>2</sup>", "b<sup>2</sup>")} = 1 with transverse axis along the <i>y</i>-axis.</div>
     <div>&rArr; <i>a</i><sup>2</sup> = 9 &rArr; <b><i>a</i> = 3</b></div>
     <div>&rArr; <i>b</i><sup>2</sup> = 27 &rArr; <b><i>b</i> = &radic;27 = 3&radic;3</b></div>
     <div>Using <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>:</div>
     <div>&rArr; <i>c</i><sup>2</sup> = 9 + 27 = 36 &rArr; <b><i>c</i> = 6</b></div>
     <div>1. <b>Coordinates of foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;6)</b></div>
     <div>2. <b>Coordinates of vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;3)</b></div>
     <div>3. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = ${frac("6", "3")} = <b>2</b></div>
     <div>4. <b>Length of latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(27)", "3")} = <b>18</b></div>`,
    "Foci: (0, &plusmn;6), Vertices: (0, &plusmn;3), e = 2, Latus Rectum = 18"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "Find the coordinates of the foci and the vertices, the eccentricity and the length of the latus rectum of the hyperbola: 9y<sup>2</sup> &minus; 4x<sup>2</sup> = 36.",
    `<div>Dividing both sides by 36:</div>
     <div>&rArr; ${frac("9y<sup>2</sup>", "36")} &minus; ${frac("4x<sup>2</sup>", "36")} = 1 &rArr; ${frac("y<sup>2</sup>", "4")} &minus; ${frac("x<sup>2</sup>", "9")} = 1</div>
     <div>Comparing with ${frac("y<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("x<sup>2</sup>", "b<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 2</b>, &nbsp;<b><i>b</i> = 3</b></div>
     <div>&rArr; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 4 + 9 = 13 &rArr; <b><i>c</i> = &radic;13</b></div>
     <div>1. <b>Coordinates of foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;&radic;13)</b></div>
     <div>2. <b>Coordinates of vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;2)</b></div>
     <div>3. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = <b>${frac("&radic;13", "2")}</b></div>
     <div>4. <b>Length of latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(9)", "2")} = <b>9</b></div>`,
    `Foci: (0, &plusmn;&radic;13), Vertices: (0, &plusmn;2), e = ${frac("&radic;13", "2")}, Latus Rectum = 9`
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the coordinates of the foci and the vertices, the eccentricity and the length of the latus rectum of the hyperbola: 16x<sup>2</sup> &minus; 9y<sup>2</sup> = 576.",
    `<div>Dividing both sides by 576:</div>
     <div>&rArr; ${frac("16x<sup>2</sup>", "576")} &minus; ${frac("9y<sup>2</sup>", "576")} = 1 &rArr; ${frac("x<sup>2</sup>", "36")} &minus; ${frac("y<sup>2</sup>", "64")} = 1</div>
     <div>Comparing with ${frac("x<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1:</div>
     <div>&rArr; <b><i>a</i> = 6</b>, &nbsp;<b><i>b</i> = 8</b></div>
     <div>&rArr; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 36 + 64 = 100 &rArr; <b><i>c</i> = 10</b></div>
     <div>1. <b>Foci:</b> (&plusmn;<i>c</i>, 0) = <b>(&plusmn;10, 0)</b></div>
     <div>2. <b>Vertices:</b> (&plusmn;<i>a</i>, 0) = <b>(&plusmn;6, 0)</b></div>
     <div>3. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = ${frac("10", "6")} = <b>${frac("5", "3")}</b></div>
     <div>4. <b>Length of latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(64)", "6")} = <b>${frac("64", "3")}</b></div>`,
    `Foci: (&plusmn;10, 0), Vertices: (&plusmn;6, 0), e = ${frac("5", "3")}, Latus Rectum = ${frac("64", "3")}`
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Find the coordinates of the foci and the vertices, the eccentricity and the length of the latus rectum of the hyperbola: 5y<sup>2</sup> &minus; 9x<sup>2</sup> = 36.",
    `<div>Dividing both sides by 36:</div>
     <div>&rArr; ${frac("5y<sup>2</sup>", "36")} &minus; ${frac("9x<sup>2</sup>", "36")} = 1 &rArr; ${frac("y<sup>2</sup>", frac("36", "5"))} &minus; ${frac("x<sup>2</sup>", "4")} = 1</div>
     <div>Transverse axis is along the <i>y</i>-axis.</div>
     <div>&rArr; <i>a</i><sup>2</sup> = ${frac("36", "5")} &rArr; <b><i>a</i> = ${frac("6", "&radic;5")}</b></div>
     <div>&rArr; <i>b</i><sup>2</sup> = 4 &rArr; <b><i>b</i> = 2</b></div>
     <div>&rArr; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = ${frac("36", "5")} + 4 = ${frac("56", "5")} &rArr; <b><i>c</i> = ${frac("&radic;56", "&radic;5")} = ${frac("2&radic;14", "&radic;5")}</b></div>
     <div>1. <b>Foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;${frac("2&radic;14", "&radic;5")})</b></div>
     <div>2. <b>Vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;${frac("6", "&radic;5")})</b></div>
     <div>3. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = ${frac(frac("2&radic;14", "&radic;5"), frac("6", "&radic;5"))} = ${frac("2&radic;14", "6")} = <b>${frac("&radic;14", "3")}</b></div>
     <div>4. <b>Length of latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(4)", frac("6", "&radic;5"))} = ${frac("8&radic;5", "6")} = <b>${frac("4&radic;5", "3")}</b></div>`,
    `Foci: (0, &plusmn;${frac("2&radic;14", "&radic;5")}), Vertices: (0, &plusmn;${frac("6", "&radic;5")}), e = ${frac("&radic;14", "3")}, Latus Rectum = ${frac("4&radic;5", "3")}`
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Find the coordinates of the foci and the vertices, the eccentricity and the length of the latus rectum of the hyperbola: 49y<sup>2</sup> &minus; 16x<sup>2</sup> = 784.",
    `<div>Dividing both sides by 784:</div>
     <div>&rArr; ${frac("49y<sup>2</sup>", "784")} &minus; ${frac("16x<sup>2</sup>", "784")} = 1 &rArr; ${frac("y<sup>2</sup>", "16")} &minus; ${frac("x<sup>2</sup>", "49")} = 1</div>
     <div>Transverse axis is along the <i>y</i>-axis.</div>
     <div>&rArr; <i>a</i><sup>2</sup> = 16 &rArr; <b><i>a</i> = 4</b></div>
     <div>&rArr; <i>b</i><sup>2</sup> = 49 &rArr; <b><i>b</i> = 7</b></div>
     <div>&rArr; <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 16 + 49 = 65 &rArr; <b><i>c</i> = &radic;65</b></div>
     <div>1. <b>Foci:</b> (0, &plusmn;<i>c</i>) = <b>(0, &plusmn;&radic;65)</b></div>
     <div>2. <b>Vertices:</b> (0, &plusmn;<i>a</i>) = <b>(0, &plusmn;4)</b></div>
     <div>3. <b>Eccentricity:</b> <i>e</i> = ${frac("c", "a")} = <b>${frac("&radic;65", "4")}</b></div>
     <div>4. <b>Length of latus rectum:</b> ${frac("2b<sup>2</sup>", "a")} = ${frac("2(49)", "4")} = <b>${frac("49", "2")}</b></div>`,
    `Foci: (0, &plusmn;&radic;65), Vertices: (0, &plusmn;4), e = ${frac("&radic;65", "4")}, Latus Rectum = ${frac("49", "2")}`
  ));

  // Q7
  cards.push(qCard(
    "7",
    "Find the equation of the hyperbola satisfying: Vertices (&plusmn;2, 0), foci (&plusmn;3, 0).",
    `<div>Given: Vertices = (&plusmn;2, 0) and Foci = (&plusmn;3, 0).</div>
     <div>Since the vertices and foci lie on the <i>x</i>-axis, the transverse axis is along the <i>x</i>-axis.</div>
     <div>Standard equation: ${frac("x<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1</div>
     <div>From vertices: <b><i>a</i> = 2</b> &rArr; <i>a</i><sup>2</sup> = 4</div>
     <div>From foci: <b><i>c</i> = 3</b></div>
     <div>Using <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup> &minus; <i>a</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 3<sup>2</sup> &minus; 2<sup>2</sup> = 9 &minus; 4 = <b>5</b></div>
     <div>Substituting <i>a</i><sup>2</sup> = 4 and <i>b</i><sup>2</sup> = 5:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "4")} &minus; ${frac("y<sup>2</sup>", "5")} = 1</div>`,
    `${frac("x<sup>2</sup>", "4")} &minus; ${frac("y<sup>2</sup>", "5")} = 1`
  ));

  // Q8
  cards.push(qCard(
    "8",
    "Find the equation of the hyperbola satisfying: Vertices (0, &plusmn;5), foci (0, &plusmn;8).",
    `<div>Given: Vertices = (0, &plusmn;5) and Foci = (0, &plusmn;8).</div>
     <div>The transverse axis is along the <i>y</i>-axis.</div>
     <div>Standard equation: ${frac("y<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("x<sup>2</sup>", "b<sup>2</sup>")} = 1</div>
     <div>From vertices: <b><i>a</i> = 5</b> &rArr; <i>a</i><sup>2</sup> = 25</div>
     <div>From foci: <b><i>c</i> = 8</b></div>
     <div>Using <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup> &minus; <i>a</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 8<sup>2</sup> &minus; 5<sup>2</sup> = 64 &minus; 25 = <b>39</b></div>
     <div>Equation of the hyperbola:</div>
     <div>&rArr; ${frac("y<sup>2</sup>", "25")} &minus; ${frac("x<sup>2</sup>", "39")} = 1</div>`,
    `${frac("y<sup>2</sup>", "25")} &minus; ${frac("x<sup>2</sup>", "39")} = 1`
  ));

  // Q9
  cards.push(qCard(
    "9",
    "Find the equation of the hyperbola satisfying: Vertices (0, &plusmn;3), foci (0, &plusmn;5).",
    `<div>Given: Vertices = (0, &plusmn;3) and Foci = (0, &plusmn;5).</div>
     <div>The transverse axis is along the <i>y</i>-axis: ${frac("y<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("x<sup>2</sup>", "b<sup>2</sup>")} = 1.</div>
     <div>&rArr; <i>a</i> = 3 &rArr; <i>a</i><sup>2</sup> = 9</div>
     <div>&rArr; <i>c</i> = 5 &rArr; <i>c</i><sup>2</sup> = 25</div>
     <div>Using <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup> &minus; <i>a</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 25 &minus; 9 = <b>16</b></div>
     <div>Equation:</div>
     <div>&rArr; ${frac("y<sup>2</sup>", "9")} &minus; ${frac("x<sup>2</sup>", "16")} = 1</div>`,
    `${frac("y<sup>2</sup>", "9")} &minus; ${frac("x<sup>2</sup>", "16")} = 1`
  ));

  // Q10
  cards.push(qCard(
    "10",
    "Find the equation of the hyperbola satisfying: Foci (&plusmn;5, 0), the transverse axis is of length 8.",
    `<div>Given: Foci = (&plusmn;5, 0) and length of transverse axis = 8.</div>
     <div>Since the foci are on the <i>x</i>-axis, the transverse axis is along the <i>x</i>-axis.</div>
     <div>&rArr; 2<i>a</i> = 8 &rArr; <b><i>a</i> = 4</b> &rArr; <i>a</i><sup>2</sup> = 16</div>
     <div>&rArr; <b><i>c</i> = 5</b> &rArr; <i>c</i><sup>2</sup> = 25</div>
     <div>Using <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup> &minus; <i>a</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 25 &minus; 16 = <b>9</b></div>
     <div>Standard equation:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "16")} &minus; ${frac("y<sup>2</sup>", "9")} = 1</div>`,
    `${frac("x<sup>2</sup>", "16")} &minus; ${frac("y<sup>2</sup>", "9")} = 1`
  ));

  // Q11
  cards.push(qCard(
    "11",
    "Find the equation of the hyperbola satisfying: Foci (0, &plusmn;13), the conjugate axis is of length 24.",
    `<div>Given: Foci = (0, &plusmn;13) and length of conjugate axis = 24.</div>
     <div>The transverse axis is along the <i>y</i>-axis.</div>
     <div>&rArr; <b><i>c</i> = 13</b> &rArr; <i>c</i><sup>2</sup> = 169</div>
     <div>&rArr; 2<i>b</i> = 24 &rArr; <b><i>b</i> = 12</b> &rArr; <i>b</i><sup>2</sup> = 144</div>
     <div>Using <i>a</i><sup>2</sup> = <i>c</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>:</div>
     <div>&rArr; <i>a</i><sup>2</sup> = 169 &minus; 144 = <b>25</b></div>
     <div>Standard equation: ${frac("y<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("x<sup>2</sup>", "b<sup>2</sup>")} = 1</div>
     <div>&rArr; ${frac("y<sup>2</sup>", "25")} &minus; ${frac("x<sup>2</sup>", "144")} = 1</div>`,
    `${frac("y<sup>2</sup>", "25")} &minus; ${frac("x<sup>2</sup>", "144")} = 1`
  ));

  // Q12
  cards.push(qCard(
    "12",
    "Find the equation of the hyperbola satisfying: Foci (&plusmn;3&radic;5, 0), the latus rectum is of length 8.",
    `<div>Given: Foci = (&plusmn;3&radic;5, 0) &rArr; Transverse axis is along the <i>x</i>-axis.</div>
     <div>&rArr; <i>c</i> = 3&radic;5 &rArr; <i>c</i><sup>2</sup> = (3&radic;5)<sup>2</sup> = 9 &times; 5 = <b>45</b></div>
     <div>Length of latus rectum = 8:</div>
     <div>&rArr; ${frac("2b<sup>2</sup>", "a")} = 8 &rArr; <i>b</i><sup>2</sup> = 4<i>a</i></div>
     <div>Using <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup>:</div>
     <div>&rArr; <i>a</i><sup>2</sup> + 4<i>a</i> = 45</div>
     <div>&rArr; <i>a</i><sup>2</sup> + 4<i>a</i> &minus; 45 = 0</div>
     <div>&rArr; (<i>a</i> + 9)(<i>a</i> &minus; 5) = 0</div>
     <div>Since semi-axis <i>a</i> &gt; 0, we take <b><i>a</i> = 5</b> &rArr; <i>a</i><sup>2</sup> = 25.</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 4(5) = <b>20</b></div>
     <div>Equation of the hyperbola:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "25")} &minus; ${frac("y<sup>2</sup>", "20")} = 1</div>`,
    `${frac("x<sup>2</sup>", "25")} &minus; ${frac("y<sup>2</sup>", "20")} = 1`
  ));

  // Q13
  cards.push(qCard(
    "13",
    "Find the equation of the hyperbola satisfying: Foci (&plusmn;4, 0), the latus rectum is of length 12.",
    `<div>Given: Foci = (&plusmn;4, 0) &rArr; Transverse axis is along the <i>x</i>-axis.</div>
     <div>&rArr; <i>c</i> = 4 &rArr; <i>c</i><sup>2</sup> = 16</div>
     <div>Length of latus rectum = 12:</div>
     <div>&rArr; ${frac("2b<sup>2</sup>", "a")} = 12 &rArr; <i>b</i><sup>2</sup> = 6<i>a</i></div>
     <div>Using <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup>:</div>
     <div>&rArr; <i>a</i><sup>2</sup> + 6<i>a</i> = 16</div>
     <div>&rArr; <i>a</i><sup>2</sup> + 6<i>a</i> &minus; 16 = 0</div>
     <div>&rArr; (<i>a</i> + 8)(<i>a</i> &minus; 2) = 0</div>
     <div>Since <i>a</i> &gt; 0, <b><i>a</i> = 2</b> &rArr; <i>a</i><sup>2</sup> = 4.</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 6(2) = <b>12</b></div>
     <div>Equation of the hyperbola:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "4")} &minus; ${frac("y<sup>2</sup>", "12")} = 1</div>`,
    `${frac("x<sup>2</sup>", "4")} &minus; ${frac("y<sup>2</sup>", "12")} = 1`
  ));

  // Q14
  cards.push(qCard(
    "14",
    `Find the equation of the hyperbola satisfying: Vertices (&plusmn;7, 0), e = ${frac("4", "3")}.`,
    `<div>Given: Vertices = (&plusmn;7, 0) and <i>e</i> = ${frac("4", "3")}.</div>
     <div>Since vertices are on the <i>x</i>-axis, transverse axis is along the <i>x</i>-axis.</div>
     <div>&rArr; <b><i>a</i> = 7</b> &rArr; <i>a</i><sup>2</sup> = 49</div>
     <div>Since <i>e</i> = ${frac("c", "a")} = ${frac("4", "3")}:</div>
     <div>&rArr; <i>c</i> = ${frac("4a", "3")} = ${frac("4(7)", "3")} = <b>${frac("28", "3")}</b></div>
     <div>Using <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup> &minus; <i>a</i><sup>2</sup>:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = (${frac("28", "3")})<sup>2</sup> &minus; 7<sup>2</sup> = ${frac("784", "9")} &minus; 49 = ${frac("784 &minus; 441", "9")} = <b>${frac("343", "9")}</b></div>
     <div>Equation of the hyperbola:</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "49")} &minus; ${frac("y<sup>2</sup>", frac("343", "9"))} = 1</div>
     <div>&rArr; ${frac("x<sup>2</sup>", "49")} &minus; ${frac("9y<sup>2</sup>", "343")} = 1</div>`,
    `${frac("x<sup>2</sup>", "49")} &minus; ${frac("9y<sup>2</sup>", "343")} = 1`
  ));

  // Q15
  cards.push(qCard(
    "15",
    "Find the equation of the hyperbola satisfying: Foci (0, &plusmn;&radic;10), passing through (2, 3).",
    `<div>Given: Foci = (0, &plusmn;&radic;10) &rArr; Transverse axis is along the <i>y</i>-axis.</div>
     <div>The standard equation is:</div>
     <div>&nbsp;&nbsp;${frac("y<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("x<sup>2</sup>", "b<sup>2</sup>")} = 1 &hellip; (1)</div>
     <div>Here, <i>c</i> = &radic;10 &rArr; <i>c</i><sup>2</sup> = 10.</div>
     <div>Since <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup> = 10, we have:</div>
     <div>&rArr; <i>b</i><sup>2</sup> = 10 &minus; <i>a</i><sup>2</sup> &hellip; (2)</div>
     <div>Since the hyperbola passes through (2, 3):</div>
     <div>&rArr; ${frac("3<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("2<sup>2</sup>", "b<sup>2</sup>")} = 1 &rArr; ${frac("9", "a<sup>2</sup>")} &minus; ${frac("4", "b<sup>2</sup>")} = 1 &hellip; (3)</div>
     <div>Substituting <i>b</i><sup>2</sup> = 10 &minus; <i>a</i><sup>2</sup> into (3):</div>
     <div>&rArr; ${frac("9", "a<sup>2</sup>")} &minus; ${frac("4", "10 &minus; a<sup>2</sup>")} = 1</div>
     <div>&rArr; 9(10 &minus; <i>a</i><sup>2</sup>) &minus; 4<i>a</i><sup>2</sup> = <i>a</i><sup>2</sup>(10 &minus; <i>a</i><sup>2</sup>)</div>
     <div>&rArr; 90 &minus; 9<i>a</i><sup>2</sup> &minus; 4<i>a</i><sup>2</sup> = 10<i>a</i><sup>2</sup> &minus; <i>a</i><sup>4</sup></div>
     <div>&rArr; <i>a</i><sup>4</sup> &minus; 23<i>a</i><sup>2</sup> + 90 = 0</div>
     <div>&rArr; (<i>a</i><sup>2</sup> &minus; 18)(<i>a</i><sup>2</sup> &minus; 5) = 0</div>
     <div>&rArr; <i>a</i><sup>2</sup> = 18 &nbsp;or&nbsp; <i>a</i><sup>2</sup> = 5</div>
     <div>In a hyperbola, <i>c</i><sup>2</sup> &gt; <i>a</i><sup>2</sup>. Since <i>c</i><sup>2</sup> = 10, <i>a</i><sup>2</sup> cannot be 18.</div>
     <div>&rArr; <b><i>a</i><sup>2</sup> = 5</b></div>
     <div>&rArr; <b><i>b</i><sup>2</sup> = 10 &minus; 5 = 5</b></div>
     <div>Substituting into (1):</div>
     <div>&rArr; ${frac("y<sup>2</sup>", "5")} &minus; ${frac("x<sup>2</sup>", "5")} = 1 &nbsp;(or y<sup>2</sup> &minus; x<sup>2</sup> = 5)</div>`,
    `${frac("y<sup>2</sup>", "5")} &minus; ${frac("x<sup>2</sup>", "5")} = 1`
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 10.4", "Foci, Vertices, Transverse Axis & Standard Equations of Hyperbolas")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx4 };
