const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch12_common");

function buildEx1() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Evaluate the given limit: lim<sub>x&rarr;3</sub> (x + 3)",
    `<div>Given: lim<sub><i>x</i>&rarr;3</sub> (<i>x</i> + 3)</div>
     <div>Since (<i>x</i> + 3) is a continuous polynomial function, we evaluate by direct substitution:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;3</sub> (<i>x</i> + 3) = 3 + 3 = <b>6</b></div>`,
    "6"
  ));

  // Q2
  cards.push(qCard(
    "2",
    `Evaluate the given limit: lim<sub>x&rarr;&pi;</sub> (x &minus; ${frac("22", "7")})`,
    `<div>Given: lim<sub><i>x</i>&rarr;&pi;</sub> (<i>x</i> &minus; ${frac("22", "7")})</div>
     <div>Evaluating by direct substitution:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;&pi;</sub> (<i>x</i> &minus; ${frac("22", "7")}) = <b>&pi; &minus; ${frac("22", "7")}</b></div>`,
    `&pi; &minus; ${frac("22", "7")}`
  ));

  // Q3
  cards.push(qCard(
    "3",
    "Evaluate the given limit: lim<sub>r&rarr;1</sub> (&pi;r<sup>2</sup>)",
    `<div>Given: lim<sub><i>r</i>&rarr;1</sub> (&pi;<i>r</i><sup>2</sup>)</div>
     <div>Substituting <i>r</i> = 1:</div>
     <div>&rArr; &pi;(1)<sup>2</sup> = <b>&pi;</b></div>`,
    "&pi;"
  ));

  // Q4
  cards.push(qCard(
    "4",
    `Evaluate the given limit: lim<sub>x&rarr;4</sub> ${frac("4x + 3", "x &minus; 2")}`,
    `<div>Given: lim<sub><i>x</i>&rarr;4</sub> ${frac("4x + 3", "x &minus; 2")}</div>
     <div>Substituting <i>x</i> = 4 into the rational expression:</div>
     <div>&rArr; ${frac("4(4) + 3", "4 &minus; 2")} = ${frac("16 + 3", "2")} = <b>${frac("19", "2")}</b></div>`,
    `${frac("19", "2")}`
  ));

  // Q5
  cards.push(qCard(
    "5",
    `Evaluate the given limit: lim<sub>x&rarr;&minus;1</sub> ${frac("x<sup>10</sup> + x<sup>5</sup> + 1", "x &minus; 1")}`,
    `<div>Given: lim<sub><i>x</i>&rarr;&minus;1</sub> ${frac("x<sup>10</sup> + x<sup>5</sup> + 1", "x &minus; 1")}</div>
     <div>Substituting <i>x</i> = &minus;1 directly:</div>
     <div>&rArr; ${frac("(&minus;1)<sup>10</sup> + (&minus;1)<sup>5</sup> + 1", "&minus;1 &minus; 1")} = ${frac("1 &minus; 1 + 1", "&minus;2")} = <b>&minus;${frac("1", "2")}</b></div>`,
    `&minus;${frac("1", "2")}`
  ));

  // Q6
  cards.push(qCard(
    "6",
    `Evaluate the given limit: lim<sub>x&rarr;0</sub> ${frac("(x + 1)<sup>5</sup> &minus; 1", "x")}`,
    `<div>Given: lim<sub><i>x</i>&rarr;0</sub> ${frac("(x + 1)<sup>5</sup> &minus; 1", "x")}</div>
     <div>Direct substitution yields the indeterminate form ${frac("0", "0")}.</div>
     <div>Let <i>y</i> = <i>x</i> + 1 &rArr; <i>x</i> = <i>y</i> &minus; 1.</div>
     <div>As <i>x</i> &rarr; 0, we have <i>y</i> &rarr; 1.</div>
     <div>Rewriting the limit in terms of <i>y</i>:</div>
     <div>&rArr; lim<sub><i>y</i>&rarr;1</sub> ${frac("y<sup>5</sup> &minus; 1<sup>5</sup>", "y &minus; 1")}</div>
     <div>Using the standard algebraic limit identity lim<sub><i>x</i>&rarr;<i>a</i></sub> ${frac("x<sup>n</sup> &minus; a<sup>n</sup>", "x &minus; a")} = <i>n</i><i>a</i><sup><i>n</i>&minus;1</sup>:</div>
     <div>&rArr; 5(1)<sup>5&minus;1</sup> = 5(1)<sup>4</sup> = <b>5</b></div>`,
    "5"
  ));

  // Q7
  cards.push(qCard(
    "7",
    `Evaluate the given limit: lim<sub>x&rarr;2</sub> ${frac("3x<sup>2</sup> &minus; x &minus; 10", "x<sup>2</sup> &minus; 4")}`,
    `<div>Direct substitution of <i>x</i> = 2 gives ${frac("3(4) &minus; 2 &minus; 10", "4 &minus; 4")} = ${frac("0", "0")} (indeterminate).</div>
     <div>Factorizing the numerator:</div>
     <div>&rArr; 3<i>x</i><sup>2</sup> &minus; <i>x</i> &minus; 10 = 3<i>x</i><sup>2</sup> &minus; 6<i>x</i> + 5<i>x</i> &minus; 10 = 3<i>x</i>(<i>x</i> &minus; 2) + 5(<i>x</i> &minus; 2) = (<i>x</i> &minus; 2)(3<i>x</i> + 5)</div>
     <div>Factorizing the denominator:</div>
     <div>&rArr; <i>x</i><sup>2</sup> &minus; 4 = (<i>x</i> &minus; 2)(<i>x</i> + 2)</div>
     <div>Cancelling the common factor (<i>x</i> &minus; 2) as <i>x</i> &ne; 2:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;2</sub> ${frac("(x &minus; 2)(3x + 5)", "(x &minus; 2)(x + 2)")} = lim<sub><i>x</i>&rarr;2</sub> ${frac("3x + 5", "x + 2")}</div>
     <div>Substituting <i>x</i> = 2:</div>
     <div>&rArr; ${frac("3(2) + 5", "2 + 2")} = ${frac("6 + 5", "4")} = <b>${frac("11", "4")}</b></div>`,
    `${frac("11", "4")}`
  ));

  // Q8
  cards.push(qCard(
    "8",
    `Evaluate the given limit: lim<sub>x&rarr;3</sub> ${frac("x<sup>4</sup> &minus; 81", "2x<sup>2</sup> &minus; 5x &minus; 3")}`,
    `<div>Direct substitution at <i>x</i> = 3 gives ${frac("81 &minus; 81", "18 &minus; 15 &minus; 3")} = ${frac("0", "0")}.</div>
     <div>Factorizing the numerator:</div>
     <div>&rArr; <i>x</i><sup>4</sup> &minus; 81 = (<i>x</i><sup>2</sup> &minus; 9)(<i>x</i><sup>2</sup> + 9) = (<i>x</i> &minus; 3)(<i>x</i> + 3)(<i>x</i><sup>2</sup> + 9)</div>
     <div>Factorizing the denominator:</div>
     <div>&rArr; 2<i>x</i><sup>2</sup> &minus; 5<i>x</i> &minus; 3 = 2<i>x</i><sup>2</sup> &minus; 6<i>x</i> + <i>x</i> &minus; 3 = 2<i>x</i>(<i>x</i> &minus; 3) + 1(<i>x</i> &minus; 3) = (<i>x</i> &minus; 3)(2<i>x</i> + 1)</div>
     <div>Cancelling the common factor (<i>x</i> &minus; 3):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;3</sub> ${frac("(x + 3)(x<sup>2</sup> + 9)", "2x + 1")}</div>
     <div>Substituting <i>x</i> = 3:</div>
     <div>&rArr; ${frac("(3 + 3)(3<sup>2</sup> + 9)", "2(3) + 1")} = ${frac("(6)(18)", "7")} = <b>${frac("108", "7")}</b></div>`,
    `${frac("108", "7")}`
  ));

  // Q9
  cards.push(qCard(
    "9",
    `Evaluate the given limit: lim<sub>x&rarr;0</sub> ${frac("ax + b", "cx + 1")}`,
    `<div>Substituting <i>x</i> = 0 directly:</div>
     <div>&rArr; ${frac("a(0) + b", "c(0) + 1")} = ${frac("0 + b", "0 + 1")} = <b>b</b></div>`,
    "b"
  ));

  // Q10
  cards.push(qCard(
    "10",
    `Evaluate the given limit: lim<sub>z&rarr;1</sub> ${frac("z<sup>1/3</sup> &minus; 1", "z<sup>1/6</sup> &minus; 1")}`,
    `<div>Direct substitution gives the indeterminate form ${frac("0", "0")}.</div>
     <div>Let <i>z</i><sup>1/6</sup> = <i>x</i> &rArr; <i>z</i><sup>1/3</sup> = (<i>z</i><sup>1/6</sup>)<sup>2</sup> = <i>x</i><sup>2</sup>.</div>
     <div>As <i>z</i> &rarr; 1, we have <i>x</i> &rarr; 1.</div>
     <div>Rewriting the limit in terms of <i>x</i>:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1</sub> ${frac("x<sup>2</sup> &minus; 1", "x &minus; 1")} = lim<sub><i>x</i>&rarr;1</sub> ${frac("(x &minus; 1)(x + 1)", "x &minus; 1")}</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1</sub> (<i>x</i> + 1) = 1 + 1 = <b>2</b></div>`,
    "2"
  ));

  // Q11
  cards.push(qCard(
    "11",
    `Evaluate the given limit: lim<sub>x&rarr;1</sub> ${frac("ax<sup>2</sup> + bx + c", "cx<sup>2</sup> + bx + a")}, &nbsp;where a + b + c &ne; 0`,
    `<div>Substituting <i>x</i> = 1 directly into numerator and denominator:</div>
     <div>&rArr; ${frac("a(1)<sup>2</sup> + b(1) + c", "c(1)<sup>2</sup> + b(1) + a")} = ${frac("a + b + c", "c + b + a")}</div>
     <div>Since <i>a</i> + <i>b</i> + <i>c</i> &ne; 0:</div>
     <div>&rArr; ${frac("a + b + c", "a + b + c")} = <b>1</b></div>`,
    "1"
  ));

  // Q12
  cards.push(qCard(
    "12",
    `Evaluate the given limit: lim<sub>x&rarr;&minus;2</sub> ${frac(frac("1", "x") + frac("1", "2"), "x + 2")}`,
    `<div>Direct substitution of <i>x</i> = &minus;2 gives ${frac("0", "0")}.</div>
     <div>Simplifying the numerator by finding common denominator:</div>
     <div>&rArr; ${frac("1", "x")} + ${frac("1", "2")} = ${frac("2 + x", "2x")}</div>
     <div>Substituting back into the limit:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;&minus;2</sub> ${frac(frac("x + 2", "2x"), "x + 2")} = lim<sub><i>x</i>&rarr;&minus;2</sub> ${frac("1", "2x")}</div>
     <div>Substituting <i>x</i> = &minus;2:</div>
     <div>&rArr; ${frac("1", "2(&minus;2)")} = <b>&minus;${frac("1", "4")}</b></div>`,
    `&minus;${frac("1", "4")}`
  ));

  // Q13
  cards.push(qCard(
    "13",
    `Evaluate the given limit: lim<sub>x&rarr;0</sub> ${frac("sin ax", "bx")}`,
    `<div>Using the fundamental trigonometric limit lim<sub>&theta;&rarr;0</sub> ${frac("sin &theta;", "&theta;")} = 1:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> ${frac("sin ax", "bx")} = lim<sub><i>x</i>&rarr;0</sub> [${frac("sin ax", "ax")} &times; ${frac("a", "b")}]</div>
     <div>&rArr; ${frac("a", "b")} &times; lim<sub><i>ax</i>&rarr;0</sub> ${frac("sin ax", "ax")} = ${frac("a", "b")} &times; 1 = <b>${frac("a", "b")}</b></div>`,
    `${frac("a", "b")}`
  ));

  // Q14
  cards.push(qCard(
    "14",
    `Evaluate the given limit: lim<sub>x&rarr;0</sub> ${frac("sin ax", "sin bx")}, &nbsp;a, b &ne; 0`,
    `<div>Dividing numerator and denominator by <i>x</i>:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> ${frac("sin ax", "sin bx")} = lim<sub><i>x</i>&rarr;0</sub> ${frac(frac("sin ax", "x"), frac("sin bx", "x"))}</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> ${frac("a &times; " + frac("sin ax", "ax"), "b &times; " + frac("sin bx", "bx"))} = ${frac("a &times; 1", "b &times; 1")} = <b>${frac("a", "b")}</b></div>`,
    `${frac("a", "b")}`
  ));

  // Q15
  cards.push(qCard(
    "15",
    `Evaluate the given limit: lim<sub>x&rarr;&pi;</sub> ${frac("sin(&pi; &minus; x)", "&pi;(&pi; &minus; x)")}`,
    `<div>Let <i>y</i> = &pi; &minus; <i>x</i>. As <i>x</i> &rarr; &pi;, we have <i>y</i> &rarr; 0.</div>
     <div>Rewriting the limit in terms of <i>y</i>:</div>
     <div>&rArr; lim<sub><i>y</i>&rarr;0</sub> ${frac("sin y", "&pi;y")} = ${frac("1", "&pi;")} &times; lim<sub><i>y</i>&rarr;0</sub> ${frac("sin y", "y")}</div>
     <div>Using lim<sub><i>y</i>&rarr;0</sub> ${frac("sin y", "y")} = 1:</div>
     <div>&rArr; ${frac("1", "&pi;")} &times; 1 = <b>${frac("1", "&pi;")}</b></div>`,
    `${frac("1", "&pi;")}`
  ));

  // Q16
  cards.push(qCard(
    "16",
    `Evaluate the given limit: lim<sub>x&rarr;0</sub> ${frac("cos x", "&pi; &minus; x")}`,
    `<div>Direct substitution of <i>x</i> = 0 gives:</div>
     <div>&rArr; ${frac("cos 0", "&pi; &minus; 0")} = ${frac("1", "&pi;")} = <b>${frac("1", "&pi;")}</b></div>`,
    `${frac("1", "&pi;")}`
  ));

  // Q17
  cards.push(qCard(
    "17",
    `Evaluate the given limit: lim<sub>x&rarr;0</sub> ${frac("cos 2x &minus; 1", "cos x &minus; 1")}`,
    `<div>Using the identity 1 &minus; cos 2&theta; = 2 sin<sup>2</sup> &theta;:</div>
     <div>&rArr; cos 2<i>x</i> &minus; 1 = &minus;2 sin<sup>2</sup> <i>x</i></div>
     <div>&rArr; cos <i>x</i> &minus; 1 = &minus;2 sin<sup>2</sup>(${frac("x", "2")})</div>
     <div>Thus:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> ${frac("&minus;2 sin<sup>2</sup> x", "&minus;2 sin<sup>2</sup>(x/2)")} = lim<sub><i>x</i>&rarr;0</sub> ${frac("sin<sup>2</sup> x", "sin<sup>2</sup>(x/2)")}</div>
     <div>Dividing and multiplying by <i>x</i><sup>2</sup> and (${frac("x", "2")})<sup>2</sup>:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> ${frac(frac("sin<sup>2</sup> x", "x<sup>2</sup>") + " &times; x<sup>2</sup>", frac("sin<sup>2</sup>(x/2)", "(x/2)<sup>2</sup>") + " &times; " + frac("x<sup>2</sup>", "4"))} = ${frac("1 &times; x<sup>2</sup>", "1 &times; " + frac("x<sup>2</sup>", "4"))} = 4 &times; 1 = <b>4</b></div>`,
    "4"
  ));

  // Q18
  cards.push(qCard(
    "18",
    `Evaluate the given limit: lim<sub>x&rarr;0</sub> ${frac("ax + x cos x", "b sin x")}`,
    `<div>Factoring <i>x</i> in the numerator:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> ${frac("x(a + cos x)", "b sin x")} = ${frac("1", "b")} &times; lim<sub><i>x</i>&rarr;0</sub> [${frac("x", "sin x")} &times; (<i>a</i> + cos <i>x</i>)]</div>
     <div>Using lim<sub><i>x</i>&rarr;0</sub> ${frac("x", "sin x")} = 1 and cos 0 = 1:</div>
     <div>&rArr; ${frac("1", "b")} &times; 1 &times; (<i>a</i> + 1) = <b>${frac("a + 1", "b")}</b></div>`,
    `${frac("a + 1", "b")}`
  ));

  // Q19
  cards.push(qCard(
    "19",
    "Evaluate the given limit: lim<sub>x&rarr;0</sub> (x sec x)",
    `<div>Rewriting sec <i>x</i> as ${frac("1", "cos x")}:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> (<i>x</i> sec <i>x</i>) = lim<sub><i>x</i>&rarr;0</sub> ${frac("x", "cos x")}</div>
     <div>Direct substitution:</div>
     <div>&rArr; ${frac("0", "cos 0")} = ${frac("0", "1")} = <b>0</b></div>`,
    "0"
  ));

  // Q20
  cards.push(qCard(
    "20",
    `Evaluate the given limit: lim<sub>x&rarr;0</sub> ${frac("sin ax + bx", "ax + sin bx")}, &nbsp;a, b, a + b &ne; 0`,
    `<div>Dividing numerator and denominator by <i>x</i> (since <i>x</i> &ne; 0):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> ${frac(frac("sin ax", "x") + " + b", "a + " + frac("sin bx", "x"))} = lim<sub><i>x</i>&rarr;0</sub> ${frac("a(" + frac("sin ax", "ax") + ") + b", "a + b(" + frac("sin bx", "bx") + ")")}</div>
     <div>Using lim<sub><i>&theta;</i>&rarr;0</sub> ${frac("sin &theta;", "&theta;")} = 1:</div>
     <div>&rArr; ${frac("a(1) + b", "a + b(1)")} = ${frac("a + b", "a + b")} = <b>1</b></div>`,
    "1"
  ));

  // Q21
  cards.push(qCard(
    "21",
    "Evaluate the given limit: lim<sub>x&rarr;0</sub> (cosec x &minus; cot x)",
    `<div>Expressing in terms of sin <i>x</i> and cos <i>x</i>:</div>
     <div>&rArr; cosec <i>x</i> &minus; cot <i>x</i> = ${frac("1", "sin x")} &minus; ${frac("cos x", "sin x")} = ${frac("1 &minus; cos x", "sin x")}</div>
     <div>Using half-angle identities: 1 &minus; cos <i>x</i> = 2 sin<sup>2</sup>(${frac("x", "2")}) and sin <i>x</i> = 2 sin(${frac("x", "2")}) cos(${frac("x", "2")}):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0</sub> ${frac("2 sin<sup>2</sup>(x/2)", "2 sin(x/2) cos(x/2)")} = lim<sub><i>x</i>&rarr;0</sub> tan(${frac("x", "2")})</div>
     <div>&rArr; tan(${frac("0", "2")}) = tan 0 = <b>0</b></div>`,
    "0"
  ));

  // Q22
  cards.push(qCard(
    "22",
    `Evaluate the given limit: lim<sub>x&rarr;&pi;/2</sub> ${frac("tan 2x", "x &minus; &pi;/2")}`,
    `<div>Let <i>y</i> = <i>x</i> &minus; ${frac("&pi;", "2")} &rArr; <i>x</i> = <i>y</i> + ${frac("&pi;", "2")}.</div>
     <div>As <i>x</i> &rarr; ${frac("&pi;", "2")}, we have <i>y</i> &rarr; 0.</div>
     <div>Then 2<i>x</i> = 2<i>y</i> + &pi;.</div>
     <div>&rArr; tan 2<i>x</i> = tan(&pi; + 2<i>y</i>) = tan 2<i>y</i>.</div>
     <div>Rewriting the limit in terms of <i>y</i>:</div>
     <div>&rArr; lim<sub><i>y</i>&rarr;0</sub> ${frac("tan 2y", "y")} = lim<sub><i>y</i>&rarr;0</sub> [${frac("sin 2y", "y cos 2y")}] = lim<sub><i>y</i>&rarr;0</sub> [2 &times; ${frac("sin 2y", "2y")} &times; ${frac("1", "cos 2y")}]</div>
     <div>&rArr; 2 &times; 1 &times; ${frac("1", "cos 0")} = 2 &times; 1 &times; 1 = <b>2</b></div>`,
    "2"
  ));

  // Q23
  cards.push(qCard(
    "23",
    "Find lim<sub>x&rarr;0</sub> f(x) and lim<sub>x&rarr;1</sub> f(x), where f(x) = { 2x + 3 for x &le; 0; &nbsp; 3(x + 1) for x &gt; 0 }",
    `<div>• <b>Limit at x = 0:</b></div>
     <div>&rArr; Left Hand Limit (LHL): lim<sub><i>x</i>&rarr;0<sup>&minus;</sup></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>&rarr;0</sub> (2<i>x</i> + 3) = 2(0) + 3 = 3</div>
     <div>&rArr; Right Hand Limit (RHL): lim<sub><i>x</i>&rarr;0<sup>+</sup></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>&rarr;0</sub> 3(<i>x</i> + 1) = 3(0 + 1) = 3</div>
     <div>Since LHL = RHL = 3, <b>lim<sub><i>x</i>&rarr;0</sub> <i>f</i>(<i>x</i>) = 3</b>.</div>

     <div style="margin-top: 10px;">• <b>Limit at x = 1:</b></div>
     <div>For <i>x</i> in the neighborhood of 1 (where <i>x</i> &gt; 0), <i>f</i>(<i>x</i>) = 3(<i>x</i> + 1):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1</sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>&rarr;1</sub> 3(<i>x</i> + 1) = 3(1 + 1) = <b>6</b></div>`,
    "lim<sub>x&rarr;0</sub> f(x) = 3 &nbsp;and&nbsp; lim<sub>x&rarr;1</sub> f(x) = 6"
  ));

  // Q24
  cards.push(qCard(
    "24",
    "Find lim<sub>x&rarr;1</sub> f(x), where f(x) = { x<sup>2</sup> &minus; 1 for x &le; 1; &nbsp; &minus;x<sup>2</sup> &minus; 1 for x &gt; 1 }",
    `<div>Evaluating one-sided limits at <i>x</i> = 1:</div>
     <div>• Left Hand Limit (LHL):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1<sup>&minus;</sup></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>&rarr;1</sub> (<i>x</i><sup>2</sup> &minus; 1) = 1<sup>2</sup> &minus; 1 = <b>0</b></div>
     <div>• Right Hand Limit (RHL):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1<sup>+</sup></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>&rarr;1</sub> (&minus;<i>x</i><sup>2</sup> &minus; 1) = &minus;1<sup>2</sup> &minus; 1 = <b>&minus;2</b></div>
     <div>Since LHL &ne; RHL (0 &ne; &minus;2):</div>
     <div>&rArr; <b>lim<sub><i>x</i>&rarr;1</sub> <i>f</i>(<i>x</i>) does not exist</b>.</div>`,
    "Does not exist"
  ));

  // Q25
  cards.push(qCard(
    "25",
    "Evaluate lim<sub>x&rarr;0</sub> f(x), where f(x) = { |x|/x for x &ne; 0; &nbsp; 0 for x = 0 }",
    `<div>By definition of the absolute value function:</div>
     <div>&nbsp;&nbsp;|<i>x</i>| = &minus;<i>x</i> when <i>x</i> &lt; 0 &nbsp;and&nbsp; |<i>x</i>| = <i>x</i> when <i>x</i> &gt; 0</div>
     <div>• Left Hand Limit (LHL as <i>x</i> &rarr; 0<sup>&minus;</sup>):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0<sup>&minus;</sup></sub> ${frac("|x|", "x")} = lim<sub><i>x</i>&rarr;0<sup>&minus;</sup></sub> ${frac("&minus;x", "x")} = &minus;1</div>
     <div>• Right Hand Limit (RHL as <i>x</i> &rarr; 0<sup>+</sup>):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0<sup>+</sup></sub> ${frac("|x|", "x")} = lim<sub><i>x</i>&rarr;0<sup>+</sup></sub> ${frac("x", "x")} = 1</div>
     <div>Since LHL &ne; RHL (&minus;1 &ne; 1), the limit <b>does not exist</b>.</div>`,
    "Does not exist"
  ));

  // Q26
  cards.push(qCard(
    "26",
    "Find lim<sub>x&rarr;0</sub> f(x), where f(x) = { x/|x| for x &ne; 0; &nbsp; 0 for x = 0 }",
    `<div>• Left Hand Limit (LHL as <i>x</i> &rarr; 0<sup>&minus;</sup>):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0<sup>&minus;</sup></sub> ${frac("x", "|x|")} = lim<sub><i>x</i>&rarr;0<sup>&minus;</sup></sub> ${frac("x", "&minus;x")} = &minus;1</div>
     <div>• Right Hand Limit (RHL as <i>x</i> &rarr; 0<sup>+</sup>):</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;0<sup>+</sup></sub> ${frac("x", "|x|")} = lim<sub><i>x</i>&rarr;0<sup>+</sup></sub> ${frac("x", "x")} = 1</div>
     <div>Since LHL &ne; RHL, <b>lim<sub><i>x</i>&rarr;0</sub> <i>f</i>(<i>x</i>) does not exist</b>.</div>`,
    "Does not exist"
  ));

  // Q27
  cards.push(qCard(
    "27",
    "Find lim<sub>x&rarr;5</sub> f(x), where f(x) = |x| &minus; 5.",
    `<div>In the neighborhood of <i>x</i> = 5 (where <i>x</i> &gt; 0), |<i>x</i>| = <i>x</i>.</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;5<sup>&minus;</sup></sub> (|<i>x</i>| &minus; 5) = lim<sub><i>x</i>&rarr;5</sub> (<i>x</i> &minus; 5) = 5 &minus; 5 = 0</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;5<sup>+</sup></sub> (|<i>x</i>| &minus; 5) = lim<sub><i>x</i>&rarr;5</sub> (<i>x</i> &minus; 5) = 5 &minus; 5 = 0</div>
     <div>Since LHL = RHL = 0, <b>lim<sub><i>x</i>&rarr;5</sub> <i>f</i>(<i>x</i>) = 0</b>.</div>`,
    "0"
  ));

  // Q28
  cards.push(qCard(
    "28",
    "Suppose f(x) = { a + bx, x &lt; 1; &nbsp; 4, x = 1; &nbsp; b &minus; ax, x &gt; 1 } and if lim<sub>x&rarr;1</sub> f(x) = f(1), what are the possible values of a and b?",
    `<div>Given: lim<sub><i>x</i>&rarr;1</sub> <i>f</i>(<i>x</i>) = <i>f</i>(1) = 4.</div>
     <div>This requires that LHL = RHL = <i>f</i>(1):</div>
     <div>• LHL: lim<sub><i>x</i>&rarr;1<sup>&minus;</sup></sub> (<i>a</i> + <i>bx</i>) = <i>a</i> + <i>b</i>(1) = <i>a</i> + <i>b</i></div>
     <div>• RHL: lim<sub><i>x</i>&rarr;1<sup>+</sup></sub> (<i>b</i> &minus; <i>ax</i>) = <i>b</i> &minus; <i>a</i>(1) = <i>b</i> &minus; <i>a</i></div>
     <div>Setting both equal to 4:</div>
     <div>&rArr; <i>a</i> + <i>b</i> = 4 &hellip; (1)</div>
     <div>&rArr; <i>b</i> &minus; <i>a</i> = 4 &hellip; (2)</div>
     <div>Adding (1) and (2):</div>
     <div>&rArr; 2<i>b</i> = 8 &rArr; <b><i>b</i> = 4</b></div>
     <div>Substituting <i>b</i> = 4 into (1):</div>
     <div>&rArr; <i>a</i> + 4 = 4 &rArr; <b><i>a</i> = 0</b></div>`,
    "a = 0, b = 4"
  ));

  // Q29
  cards.push(qCard(
    "29",
    "Let a<sub>1</sub>, a<sub>2</sub>, &hellip;, a<sub>n</sub> be fixed real numbers and define f(x) = (x &minus; a<sub>1</sub>)(x &minus; a<sub>2</sub>)&hellip;(x &minus; a<sub>n</sub>). What is lim<sub>x&rarr;a<sub>1</sub></sub> f(x)? For some a &ne; a<sub>1</sub>, a<sub>2</sub>, &hellip;, a<sub>n</sub>, compute lim<sub>x&rarr;a</sub> f(x).",
    `<div>Given: <i>f</i>(<i>x</i>) = (<i>x</i> &minus; <i>a</i><sub>1</sub>)(<i>x</i> &minus; <i>a</i><sub>2</sub>)&hellip;(<i>x</i> &minus; <i>a</i><sub><i>n</i></sub>).</div>
     <div>• <b>For lim<sub>x&rarr;a<sub>1</sub></sub> f(x):</b></div>
     <div>By direct substitution:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;<i>a</i><sub>1</sub></sub> <i>f</i>(<i>x</i>) = (<i>a</i><sub>1</sub> &minus; <i>a</i><sub>1</sub>)(<i>a</i><sub>1</sub> &minus; <i>a</i><sub>2</sub>)&hellip;(<i>a</i><sub>1</sub> &minus; <i>a</i><sub><i>n</i></sub>) = 0 &times; (finite) = <b>0</b></div>
     <div>• <b>For lim<sub>x&rarr;a</sub> f(x) where a &ne; a<sub>i</sub>:</b></div>
     <div>By direct substitution into the polynomial product:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;<i>a</i></sub> <i>f</i>(<i>x</i>) = <b>(<i>a</i> &minus; <i>a</i><sub>1</sub>)(<i>a</i> &minus; <i>a</i><sub>2</sub>)&hellip;(<i>a</i> &minus; <i>a</i><sub><i>n</i></sub>)</b></div>`,
    "lim<sub>x&rarr;a<sub>1</sub></sub> f(x) = 0 &nbsp;|&nbsp; lim<sub>x&rarr;a</sub> f(x) = (a &minus; a<sub>1</sub>)(a &minus; a<sub>2</sub>)&hellip;(a &minus; a<sub>n</sub>)"
  ));

  // Q30
  cards.push(qCard(
    "30",
    "If f(x) = { |x| + 1, x &lt; 0; &nbsp; 0, x = 0; &nbsp; |x| &minus; 1, x &gt; 0 }. For what value(s) of a does lim<sub>x&rarr;a</sub> f(x) exist?",
    `<div>We test three cases for <i>a</i>:</div>
     <div><b>Case 1: When a = 0:</b></div>
     <div>&rArr; LHL = lim<sub><i>x</i>&rarr;0<sup>&minus;</sup></sub> (|<i>x</i>| + 1) = lim<sub><i>x</i>&rarr;0</sub> (&minus;<i>x</i> + 1) = 1</div>
     <div>&rArr; RHL = lim<sub><i>x</i>&rarr;0<sup>+</sup></sub> (|<i>x</i>| &minus; 1) = lim<sub><i>x</i>&rarr;0</sub> (<i>x</i> &minus; 1) = &minus;1</div>
     <div>Since LHL &ne; RHL (1 &ne; &minus;1), the limit does NOT exist at <i>a</i> = 0.</div>

     <div style="margin-top: 10px;"><b>Case 2: When a &lt; 0:</b></div>
     <div>For all <i>x</i> &lt; 0, <i>f</i>(<i>x</i>) = &minus;<i>x</i> + 1, which is polynomial and continuous:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;<i>a</i></sub> <i>f</i>(<i>x</i>) = &minus;<i>a</i> + 1 (exists).</div>

     <div style="margin-top: 10px;"><b>Case 3: When a &gt; 0:</b></div>
     <div>For all <i>x</i> &gt; 0, <i>f</i>(<i>x</i>) = <i>x</i> &minus; 1, which is polynomial and continuous:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;<i>a</i></sub> <i>f</i>(<i>x</i>) = <i>a</i> &minus; 1 (exists).</div>
     <div>Thus, lim<sub><i>x</i>&rarr;<i>a</i></sub> <i>f</i>(<i>x</i>) exists for <b>all real a &ne; 0</b>.</div>`,
    "Exists for all real values of a except a = 0 (i.e. a &ne; 0)"
  ));

  // Q31
  cards.push(qCard(
    "31",
    `If the function f(x) satisfies lim<sub>x&rarr;1</sub> ${frac("f(x) &minus; 2", "x<sup>2</sup> &minus; 1")} = &pi;, evaluate lim<sub>x&rarr;1</sub> f(x).`,
    `<div>Given: lim<sub><i>x</i>&rarr;1</sub> ${frac("f(x) &minus; 2", "x<sup>2</sup> &minus; 1")} = &pi;</div>
     <div>Using the quotient rule for limits:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1</sub> [<i>f</i>(<i>x</i>) &minus; 2] = &pi; &times; lim<sub><i>x</i>&rarr;1</sub> (<i>x</i><sup>2</sup> &minus; 1)</div>
     <div>Substituting <i>x</i> = 1:</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1</sub> [<i>f</i>(<i>x</i>) &minus; 2] = &pi; &times; (1<sup>2</sup> &minus; 1) = &pi; &times; 0 = 0</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1</sub> <i>f</i>(<i>x</i>) &minus; lim<sub><i>x</i>&rarr;1</sub> 2 = 0</div>
     <div>&rArr; lim<sub><i>x</i>&rarr;1</sub> <i>f</i>(<i>x</i>) &minus; 2 = 0</div>
     <div>&rArr; <b>lim<sub><i>x</i>&rarr;1</sub> <i>f</i>(<i>x</i>) = 2</b></div>`,
    "2"
  ));

  // Q32
  cards.push(qCard(
    "32",
    "If f(x) = { mx<sup>2</sup> + n, x &lt; 0; &nbsp; nx + m, 0 &le; x &le; 1; &nbsp; nx<sup>3</sup> + m, x &gt; 1 }. For what integers m and n does both lim<sub>x&rarr;0</sub> f(x) and lim<sub>x&rarr;1</sub> f(x) exist?",
    `<div>• <b>Existence of limit at x = 0:</b></div>
     <div>&rArr; LHL = lim<sub><i>x</i>&rarr;0<sup>&minus;</sup></sub> (<i>mx</i><sup>2</sup> + <i>n</i>) = <i>m</i>(0) + <i>n</i> = <i>n</i></div>
     <div>&rArr; RHL = lim<sub><i>x</i>&rarr;0<sup>+</sup></sub> (<i>nx</i> + <i>m</i>) = <i>n</i>(0) + <i>m</i> = <i>m</i></div>
     <div>For lim<sub><i>x</i>&rarr;0</sub> <i>f</i>(<i>x</i>) to exist, we must have LHL = RHL:</div>
     <div>&rArr; <b>m = n</b></div>

     <div style="margin-top: 10px;">• <b>Existence of limit at x = 1:</b></div>
     <div>&rArr; LHL = lim<sub><i>x</i>&rarr;1<sup>&minus;</sup></sub> (<i>nx</i> + <i>m</i>) = <i>n</i>(1) + <i>m</i> = <i>n</i> + <i>m</i></div>
     <div>&rArr; RHL = lim<sub><i>x</i>&rarr;1<sup>+</sup></sub> (<i>nx</i><sup>3</sup> + <i>m</i>) = <i>n</i>(1)<sup>3</sup> + <i>m</i> = <i>n</i> + <i>m</i></div>
     <div>Notice that LHL = RHL = <i>n</i> + <i>m</i> holds identically for <b>any integral values of m and n</b>.</div>
     <div>Conclusion: lim<sub><i>x</i>&rarr;0</sub> <i>f</i>(<i>x</i>) exists if <b>m = n</b>, and lim<sub><i>x</i>&rarr;1</sub> <i>f</i>(<i>x</i>) exists for <b>any integral values of m and n</b>.</div>`,
    "At x = 0: exists if m = n &nbsp;|&nbsp; At x = 1: exists for any integers m and n"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 12.1", "Standard Algebraic Limits, Trigonometric Limits & One-Sided Limits")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx1 };
