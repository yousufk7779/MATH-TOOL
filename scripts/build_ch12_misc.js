const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch12_common");

function buildMisc() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Find the derivative of the following functions from the first principle:<br/>" +
    "(i) &minus;x<br/>" +
    "(ii) (&minus;x)<sup>&minus;1</sup><br/>" +
    "(iii) sin (x + 1)<br/>" +
    "(iv) cos (x &minus; &pi;/8)",
    `<div>• <b style="color: ${THEME_COLOR};">(i) f(x) = &minus;x:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;(x + h) &minus; (&minus;x)", "h")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;h", "h")} = <b>&minus;1</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) f(x) = (&minus;x)<sup>&minus;1</sup> = &minus;1/x:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;1/(x + h) &minus; (&minus;1/x)", "h")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;x + (x + h)", "h x(x + h)")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("h", "h x(x + h)")} = <b>${frac("1", "x<sup>2</sup>")}</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(iii) f(x) = sin (x + 1):</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("sin(x + h + 1) &minus; sin(x + 1)", "h")}<br/>
     Using sin <i>C</i> &minus; sin <i>D</i> = 2 cos(${frac("C + D", "2")}) sin(${frac("C &minus; D", "2")}):<br/>
     &rArr; lim<sub><i>h</i>&rarr;0</sub> ${frac("2 cos(x + 1 + h/2) sin(h/2)", "h")} = lim<sub><i>h</i>&rarr;0</sub> cos(<i>x</i> + 1 + ${frac("h", "2")}) &times; lim<sub><i>h</i>&rarr;0</sub> ${frac("sin(h/2)", "h/2")} = <b>cos (x + 1)</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(iv) f(x) = cos (x &minus; &pi;/8):</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("cos(x + h &minus; &pi;/8) &minus; cos(x &minus; &pi;/8)", "h")}<br/>
     Using cos <i>C</i> &minus; cos <i>D</i> = &minus;2 sin(${frac("C + D", "2")}) sin(${frac("C &minus; D", "2")}):<br/>
     &rArr; lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;2 sin(x &minus; &pi;/8 + h/2) sin(h/2)", "h")} = <b>&minus;sin (x &minus; &pi;/8)</b></div>`,
    `(i) &minus;1 &nbsp;|&nbsp; (ii) 1/x<sup>2</sup> &nbsp;|&nbsp; (iii) cos(x + 1) &nbsp;|&nbsp; (iv) &minus;sin(x &minus; &pi;/8)`
  ));

  // Q2
  cards.push(qCard(
    "2",
    "Find the derivative of (x + a).",
    `<div>Let <i>f</i>(<i>x</i>) = <i>x</i> + <i>a</i>.</div>
     <div>Differentiating with respect to <i>x</i>:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("d", "dx")}(<i>x</i>) + ${frac("d", "dx")}(<i>a</i>) = 1 + 0 = <b>1</b></div>`,
    "1"
  ));

  // Q3
  cards.push(qCard(
    "3",
    `Find the derivative of (px + q)(${frac("r", "x")} + s).`,
    `<div>Let <i>f</i>(<i>x</i>) = (<i>px</i> + <i>q</i>)(${frac("r", "x")} + <i>s</i>).</div>
     <div>Expanding the product:</div>
     <div>&rArr; <i>f</i>(<i>x</i>) = <i>pr</i> + <i>psx</i> + ${frac("qr", "x")} + <i>qs</i> = <i>psx</i> + <i>qrx</i><sup>&minus;1</sup> + (<i>pr</i> + <i>qs</i>)</div>
     <div>Differentiating with respect to <i>x</i>:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = <i>ps</i>(1) + <i>qr</i>(&minus;1<i>x</i><sup>&minus;2</sup>) + 0 = <b>ps &minus; ${frac("qr", "x<sup>2</sup>")}</b></div>`,
    `ps &minus; ${frac("qr", "x<sup>2</sup>")}`
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the derivative of (ax + b)(cx + d)<sup>2</sup>.",
    `<div>Let <i>f</i>(<i>x</i>) = (<i>ax</i> + <i>b</i>)(<i>cx</i> + <i>d</i>)<sup>2</sup>.</div>
     <div>Using the product rule <i>f</i>'(<i>x</i>) = <i>u</i>'<i>v</i> + <i>uv</i>':</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("d", "dx")}(<i>ax</i> + <i>b</i>) &times; (<i>cx</i> + <i>d</i>)<sup>2</sup> + (<i>ax</i> + <i>b</i>) &times; ${frac("d", "dx")}[(<i>cx</i> + <i>d</i>)<sup>2</sup>]</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = <i>a</i>(<i>cx</i> + <i>d</i>)<sup>2</sup> + (<i>ax</i> + <i>b</i>)[2<i>c</i>(<i>cx</i> + <i>d</i>)]</div>
     <div>Factoring (<i>cx</i> + <i>d</i>):</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = (<i>cx</i> + <i>d</i>)[<i>a</i>(<i>cx</i> + <i>d</i>) + 2<i>c</i>(<i>ax</i> + <i>b</i>)]</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = (<i>cx</i> + <i>d</i>)[<i>acx</i> + <i>ad</i> + 2<i>acx</i> + 2<i>bc</i>] = <b>(cx + d)[3acx + 2bc + ad]</b></div>`,
    "(cx + d)[3acx + 2bc + ad]"
  ));

  // Q5
  cards.push(qCard(
    "5",
    `Find the derivative of ${frac("ax + b", "cx + d")}.`,
    `<div>Using the quotient rule ${frac("d", "dx")}[${frac("u", "v")}] = ${frac("v u' &minus; u v'", "v<sup>2</sup>")}:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(cx + d) " + frac("d", "dx") + "(ax + b) &minus; (ax + b) " + frac("d", "dx") + "(cx + d)", "(cx + d)<sup>2</sup>")}</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(cx + d)(a) &minus; (ax + b)(c)", "(cx + d)<sup>2</sup>")} = ${frac("acx + ad &minus; acx &minus; bc", "(cx + d)<sup>2</sup>")} = <b>${frac("ad &minus; bc", "(cx + d)<sup>2</sup>")}</b></div>`,
    `${frac("ad &minus; bc", "(cx + d)<sup>2</sup>")}`
  ));

  // Q6
  cards.push(qCard(
    "6",
    `Find the derivative of ${frac("1 + 1/x", "1 &minus; 1/x")}.`,
    `<div>Simplifying <i>f</i>(<i>x</i>) for <i>x</i> &ne; 0:</div>
     <div>&rArr; <i>f</i>(<i>x</i>) = ${frac(frac("x + 1", "x"), frac("x &minus; 1", "x"))} = ${frac("x + 1", "x &minus; 1")}</div>
     <div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(x &minus; 1)(1) &minus; (x + 1)(1)", "(x &minus; 1)<sup>2</sup>")} = ${frac("x &minus; 1 &minus; x &minus; 1", "(x &minus; 1)<sup>2</sup>")} = <b>&minus;${frac("2", "(x &minus; 1)<sup>2</sup>")}</b></div>`,
    `&minus;${frac("2", "(x &minus; 1)<sup>2</sup>")}`
  ));

  // Q7
  cards.push(qCard(
    "7",
    `Find the derivative of ${frac("1", "ax<sup>2</sup> + bx + c")}.`,
    `<div>Let <i>f</i>(<i>x</i>) = (<i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>)<sup>&minus;1</sup>.</div>
     <div>Using the quotient rule or reciprocal chain rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = &minus; ${frac(frac("d", "dx") + "(ax<sup>2</sup> + bx + c)", "(ax<sup>2</sup> + bx + c)<sup>2</sup>")} = <b>&minus;${frac("2ax + b", "(ax<sup>2</sup> + bx + c)<sup>2</sup>")}</b></div>`,
    `&minus;${frac("2ax + b", "(ax<sup>2</sup> + bx + c)<sup>2</sup>")}`
  ));

  // Q8
  cards.push(qCard(
    "8",
    `Find the derivative of ${frac("ax + b", "px<sup>2</sup> + qx + r")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(px<sup>2</sup> + qx + r)(a) &minus; (ax + b)(2px + q)", "(px<sup>2</sup> + qx + r)<sup>2</sup>")}</div>
     <div>Expanding the numerator:</div>
     <div>&rArr; (<i>apx</i><sup>2</sup> + <i>aqx</i> + <i>ar</i>) &minus; (2<i>apx</i><sup>2</sup> + <i>aqx</i> + 2<i>bpx</i> + <i>bq</i>)</div>
     <div>&rArr; <b>${frac("&minus;apx<sup>2</sup> &minus; 2bpx + ar &minus; bq", "(px<sup>2</sup> + qx + r)<sup>2</sup>")}</b></div>`,
    `${frac("&minus;apx<sup>2</sup> &minus; 2bpx + ar &minus; bq", "(px<sup>2</sup> + qx + r)<sup>2</sup>")}`
  ));

  // Q9
  cards.push(qCard(
    "9",
    `Find the derivative of ${frac("px<sup>2</sup> + qx + r", "ax + b")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(ax + b)(2px + q) &minus; (px<sup>2</sup> + qx + r)(a)", "(ax + b)<sup>2</sup>")}</div>
     <div>Expanding numerator:</div>
     <div>&rArr; (2<i>apx</i><sup>2</sup> + <i>aqx</i> + 2<i>bpx</i> + <i>bq</i>) &minus; (<i>apx</i><sup>2</sup> + <i>aqx</i> + <i>ar</i>)</div>
     <div>&rArr; <b>${frac("apx<sup>2</sup> + 2bpx + bq &minus; ar", "(ax + b)<sup>2</sup>")}</b></div>`,
    `${frac("apx<sup>2</sup> + 2bpx + bq &minus; ar", "(ax + b)<sup>2</sup>")}`
  ));

  // Q10
  cards.push(qCard(
    "10",
    `Find the derivative of ${frac("a", "x<sup>4</sup>")} &minus; ${frac("b", "x<sup>2</sup>")} + cos x.`,
    `<div>Writing as powers of <i>x</i>: <i>f</i>(<i>x</i>) = <i>ax</i><sup>&minus;4</sup> &minus; <i>bx</i><sup>&minus;2</sup> + cos <i>x</i>.</div>
     <div>Differentiating with respect to <i>x</i>:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = <i>a</i>(&minus;4<i>x</i><sup>&minus;5</sup>) &minus; <i>b</i>(&minus;2<i>x</i><sup>&minus;3</sup>) + (&minus;sin <i>x</i>)</div>
     <div>&rArr; <b>&minus;${frac("4a", "x<sup>5</sup>")} + ${frac("2b", "x<sup>3</sup>")} &minus; sin x</b></div>`,
    `&minus;${frac("4a", "x<sup>5</sup>")} + ${frac("2b", "x<sup>3</sup>")} &minus; sin x`
  ));

  // Q11
  cards.push(qCard(
    "11",
    "Find the derivative of 4&radic;x &minus; 2.",
    `<div>Writing as power: <i>f</i>(<i>x</i>) = 4<i>x</i><sup>1/2</sup> &minus; 2.</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = 4(${frac("1", "2")}<i>x</i><sup>&minus;1/2</sup>) &minus; 0 = 2<i>x</i><sup>&minus;1/2</sup> = <b>${frac("2", "&radic;x")}</b></div>`,
    `${frac("2", "&radic;x")}`
  ));

  // Q12
  cards.push(qCard(
    "12",
    "Find the derivative of (ax + b)<sup>n</sup>.",
    `<div>Using the chain rule:</div>
     <div>&rArr; ${frac("d", "dx")}[(<i>ax</i> + <i>b</i>)<sup><i>n</i></sup>] = <i>n</i>(<i>ax</i> + <i>b</i>)<sup><i>n</i>&minus;1</sup> &times; ${frac("d", "dx")}(<i>ax</i> + <i>b</i>)</div>
     <div>&rArr; <i>n</i>(<i>ax</i> + <i>b</i>)<sup><i>n</i>&minus;1</sup> &times; <i>a</i> = <b>na(ax + b)<sup>n&minus;1</sup></b></div>`,
    "na(ax + b)<sup>n&minus;1</sup>"
  ));

  // Q13
  cards.push(qCard(
    "13",
    "Find the derivative of (ax + b)<sup>n</sup> (cx + d)<sup>m</sup>.",
    `<div>Using the product rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = (<i>ax</i> + <i>b</i>)<sup><i>n</i></sup> &times; <i>mc</i>(<i>cx</i> + <i>d</i>)<sup><i>m</i>&minus;1</sup> + (<i>cx</i> + <i>d</i>)<sup><i>m</i></sup> &times; <i>na</i>(<i>ax</i> + <i>b</i>)<sup><i>n</i>&minus;1</sup></div>
     <div>Factoring common terms (<i>ax</i> + <i>b</i>)<sup><i>n</i>&minus;1</sup>(<i>cx</i> + <i>d</i>)<sup><i>m</i>&minus;1</sup>:</div>
     <div>&rArr; <b>(ax + b)<sup>n&minus;1</sup> (cx + d)<sup>m&minus;1</sup> [mc(ax + b) + na(cx + d)]</b></div>`,
    "(ax + b)<sup>n&minus;1</sup> (cx + d)<sup>m&minus;1</sup> [mc(ax + b) + na(cx + d)]"
  ));

  // Q14
  cards.push(qCard(
    "14",
    "Find the derivative of sin (x + a).",
    `<div>By the chain rule or angle addition expansion sin(<i>x</i> + <i>a</i>) = sin <i>x</i> cos <i>a</i> + cos <i>x</i> sin <i>a</i>:</div>
     <div>&rArr; ${frac("d", "dx")}[sin(<i>x</i> + <i>a</i>)] = cos(<i>x</i> + <i>a</i>) &times; 1 = <b>cos (x + a)</b></div>`,
    "cos (x + a)"
  ));

  // Q15
  cards.push(qCard(
    "15",
    "Find the derivative of cosec x cot x.",
    `<div>Using the product rule:</div>
     <div>&rArr; ${frac("d", "dx")}(cosec <i>x</i> cot <i>x</i>) = cosec <i>x</i> &times; (&minus;cosec<sup>2</sup> <i>x</i>) + cot <i>x</i> &times; (&minus;cosec <i>x</i> cot <i>x</i>)</div>
     <div>&rArr; <b>&minus;cosec<sup>3</sup> x &minus; cosec x cot<sup>2</sup> x</b></div>`,
    "&minus;cosec<sup>3</sup> x &minus; cosec x cot<sup>2</sup> x"
  ));

  // Q16
  cards.push(qCard(
    "16",
    `Find the derivative of ${frac("cos x", "1 + sin x")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(1 + sin x)(&minus;sin x) &minus; (cos x)(cos x)", "(1 + sin x)<sup>2</sup>")}</div>
     <div>&rArr; ${frac("&minus;sin x &minus; sin<sup>2</sup> x &minus; cos<sup>2</sup> x", "(1 + sin x)<sup>2</sup>")} = ${frac("&minus;sin x &minus; (sin<sup>2</sup> x + cos<sup>2</sup> x)", "(1 + sin x)<sup>2</sup>")} = ${frac("&minus;(1 + sin x)", "(1 + sin x)<sup>2</sup>")}</div>
     <div>Cancelling (1 + sin <i>x</i>):</div>
     <div>&rArr; <b>&minus;${frac("1", "1 + sin x")}</b></div>`,
    `&minus;${frac("1", "1 + sin x")}`
  ));

  // Q17
  cards.push(qCard(
    "17",
    `Find the derivative of ${frac("sin x + cos x", "sin x &minus; cos x")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(sin x &minus; cos x)(cos x &minus; sin x) &minus; (sin x + cos x)(cos x + sin x)", "(sin x &minus; cos x)<sup>2</sup>")}</div>
     <div>&rArr; ${frac("&minus;(sin x &minus; cos x)<sup>2</sup> &minus; (sin x + cos x)<sup>2</sup>", "(sin x &minus; cos x)<sup>2</sup>")}</div>
     <div>&rArr; ${frac("&minus;[(sin<sup>2</sup> x + cos<sup>2</sup> x &minus; 2 sin x cos x) + (sin<sup>2</sup> x + cos<sup>2</sup> x + 2 sin x cos x)]", "(sin x &minus; cos x)<sup>2</sup>")}</div>
     <div>&rArr; ${frac("&minus;[1 + 1]", "(sin x &minus; cos x)<sup>2</sup>")} = <b>&minus;${frac("2", "(sin x &minus; cos x)<sup>2</sup>")}</b></div>`,
    `&minus;${frac("2", "(sin x &minus; cos x)<sup>2</sup>")}`
  ));

  // Q18
  cards.push(qCard(
    "18",
    `Find the derivative of ${frac("sec x &minus; 1", "sec x + 1")}.`,
    `<div>Converting to cos <i>x</i>:</div>
     <div>&rArr; <i>f</i>(<i>x</i>) = ${frac(frac("1", "cos x") + " &minus; 1", frac("1", "cos x") + " + 1")} = ${frac("1 &minus; cos x", "1 + cos x")}</div>
     <div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(1 + cos x)(sin x) &minus; (1 &minus; cos x)(&minus;sin x)", "(1 + cos x)<sup>2</sup>")} = ${frac("sin x + sin x cos x + sin x &minus; sin x cos x", "(1 + cos x)<sup>2</sup>")} = ${frac("2 sin x", "(1 + cos x)<sup>2</sup>")}</div>
     <div>Multiplying numerator and denominator by sec<sup>2</sup> <i>x</i>:</div>
     <div>&rArr; <b>${frac("2 sec x tan x", "(sec x + 1)<sup>2</sup>")}</b></div>`,
    `${frac("2 sec x tan x", "(sec x + 1)<sup>2</sup>")}`
  ));

  // Q19
  cards.push(qCard(
    "19",
    "Find the derivative of sin<sup>n</sup> x.",
    `<div>Using the chain rule:</div>
     <div>&rArr; ${frac("d", "dx")}[(sin <i>x</i>)<sup><i>n</i></sup>] = <i>n</i>(sin <i>x</i>)<sup><i>n</i>&minus;1</sup> &times; ${frac("d", "dx")}(sin <i>x</i>)</div>
     <div>&rArr; <b>n sin<sup>n&minus;1</sup> x cos x</b></div>`,
    "n sin<sup>n&minus;1</sup> x cos x"
  ));

  // Q20
  cards.push(qCard(
    "20",
    `Find the derivative of ${frac("a + b sin x", "c + d cos x")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(c + d cos x)(b cos x) &minus; (a + b sin x)(&minus;d sin x)", "(c + d cos x)<sup>2</sup>")}</div>
     <div>Expanding the numerator:</div>
     <div>&rArr; <i>bc</i> cos <i>x</i> + <i>bd</i> cos<sup>2</sup> <i>x</i> + <i>ad</i> sin <i>x</i> + <i>bd</i> sin<sup>2</sup> <i>x</i></div>
     <div>Since <i>bd</i>(cos<sup>2</sup> <i>x</i> + sin<sup>2</sup> <i>x</i>) = <i>bd</i>(1) = <i>bd</i>:</div>
     <div>&rArr; <b>${frac("bc cos x + ad sin x + bd", "(c + d cos x)<sup>2</sup>")}</b></div>`,
    `${frac("bc cos x + ad sin x + bd", "(c + d cos x)<sup>2</sup>")}`
  ));

  // Q21
  cards.push(qCard(
    "21",
    `Find the derivative of ${frac("sin(x + a)", "cos x")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("cos x &times; cos(x + a) &minus; sin(x + a) &times; (&minus;sin x)", "cos<sup>2</sup> x")}</div>
     <div>&rArr; ${frac("cos(x + a) cos x + sin(x + a) sin x", "cos<sup>2</sup> x")}</div>
     <div>Using the identity cos(<i>A</i> &minus; <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>:</div>
     <div>&rArr; cos[(<i>x</i> + <i>a</i>) &minus; <i>x</i>] = cos <i>a</i></div>
     <div>&rArr; <b>${frac("cos a", "cos<sup>2</sup> x")}</b></div>`,
    `${frac("cos a", "cos<sup>2</sup> x")}`
  ));

  // Q22
  cards.push(qCard(
    "22",
    "Find the derivative of x<sup>4</sup>(5 sin x &minus; 3 cos x).",
    `<div>Using the product rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = <i>x</i><sup>4</sup> ${frac("d", "dx")}(5 sin <i>x</i> &minus; 3 cos <i>x</i>) + (5 sin <i>x</i> &minus; 3 cos <i>x</i>) ${frac("d", "dx")}(<i>x</i><sup>4</sup>)</div>
     <div>&rArr; <i>x</i><sup>4</sup>(5 cos <i>x</i> + 3 sin <i>x</i>) + 4<i>x</i><sup>3</sup>(5 sin <i>x</i> &minus; 3 cos <i>x</i>)</div>
     <div>Factoring <i>x</i><sup>3</sup>:</div>
     <div>&rArr; <b>x<sup>3</sup> [5x cos x + 3x sin x + 20 sin x &minus; 12 cos x]</b></div>`,
    "x<sup>3</sup> [5x cos x + 3x sin x + 20 sin x &minus; 12 cos x]"
  ));

  // Q23
  cards.push(qCard(
    "23",
    "Find the derivative of (x<sup>2</sup> + 1) cos x.",
    `<div>Using the product rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = (<i>x</i><sup>2</sup> + 1)(&minus;sin <i>x</i>) + cos <i>x</i>(2<i>x</i>)</div>
     <div>&rArr; <b>2x cos x &minus; (x<sup>2</sup> + 1) sin x</b></div>`,
    "2x cos x &minus; (x<sup>2</sup> + 1) sin x"
  ));

  // Q24
  cards.push(qCard(
    "24",
    "Find the derivative of (ax<sup>2</sup> + sin x)(p + q cos x).",
    `<div>Using the product rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = (<i>ax</i><sup>2</sup> + sin <i>x</i>)(&minus;<i>q</i> sin <i>x</i>) + (<i>p</i> + <i>q</i> cos <i>x</i>)(2<i>ax</i> + cos <i>x</i>)</div>
     <div>&rArr; <b>&minus;q sin x (ax<sup>2</sup> + sin x) + (p + q cos x)(2ax + cos x)</b></div>`,
    "&minus;q sin x (ax<sup>2</sup> + sin x) + (p + q cos x)(2ax + cos x)"
  ));

  // Q25
  cards.push(qCard(
    "25",
    "Find the derivative of (x + cos x)(x &minus; tan x).",
    `<div>Using the product rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = (<i>x</i> + cos <i>x</i>)(1 &minus; sec<sup>2</sup> <i>x</i>) + (<i>x</i> &minus; tan <i>x</i>)(1 &minus; sin <i>x</i>)</div>
     <div>Using 1 &minus; sec<sup>2</sup> <i>x</i> = &minus;tan<sup>2</sup> <i>x</i>:</div>
     <div>&rArr; <b>&minus;tan<sup>2</sup> x (x + cos x) + (x &minus; tan x)(1 &minus; sin x)</b></div>`,
    "&minus;tan<sup>2</sup> x (x + cos x) + (x &minus; tan x)(1 &minus; sin x)"
  ));

  // Q26
  cards.push(qCard(
    "26",
    `Find the derivative of ${frac("4x + 5 sin x", "3x + 7 cos x")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(3x + 7 cos x)(4 + 5 cos x) &minus; (4x + 5 sin x)(3 &minus; 7 sin x)", "(3x + 7 cos x)<sup>2</sup>")}</div>
     <div>Expanding:</div>
     <div>&rArr; Numerator = (12<i>x</i> + 15<i>x</i> cos <i>x</i> + 28 cos <i>x</i> + 35 cos<sup>2</sup> <i>x</i>) &minus; (12<i>x</i> &minus; 28<i>x</i> sin <i>x</i> + 15 sin <i>x</i> &minus; 35 sin<sup>2</sup> <i>x</i>)</div>
     <div>&rArr; 35(cos<sup>2</sup> <i>x</i> + sin<sup>2</sup> <i>x</i>) + 15<i>x</i> cos <i>x</i> + 28 cos <i>x</i> + 28<i>x</i> sin <i>x</i> &minus; 15 sin <i>x</i></div>
     <div>&rArr; <b>${frac("35 + 15x cos x + 28 cos x + 28x sin x &minus; 15 sin x", "(3x + 7 cos x)<sup>2</sup>")}</b></div>`,
    `${frac("35 + 15x cos x + 28 cos x + 28x sin x &minus; 15 sin x", "(3x + 7 cos x)<sup>2</sup>")}`
  ));

  // Q27
  cards.push(qCard(
    "27",
    `Find the derivative of ${frac("x<sup>2</sup> cos(&pi;/4)", "sin x")}.`,
    `<div>Since cos(${frac("&pi;", "4")}) = ${frac("1", "&radic;2")} is a constant:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = cos(${frac("&pi;", "4")}) &times; ${frac("sin x(2x) &minus; x<sup>2</sup>(cos x)", "sin<sup>2</sup> x")}</div>
     <div>&rArr; <b>${frac("x cos(&pi;/4) [2 sin x &minus; x cos x]", "sin<sup>2</sup> x")}</b></div>`,
    `${frac("x cos(&pi;/4) [2 sin x &minus; x cos x]", "sin<sup>2</sup> x")}`
  ));

  // Q28
  cards.push(qCard(
    "28",
    `Find the derivative of ${frac("x", "1 + tan x")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(1 + tan x)(1) &minus; x(sec<sup>2</sup> x)", "(1 + tan x)<sup>2</sup>")} = <b>${frac("1 + tan x &minus; x sec<sup>2</sup> x", "(1 + tan x)<sup>2</sup>")}</b></div>`,
    `${frac("1 + tan x &minus; x sec<sup>2</sup> x", "(1 + tan x)<sup>2</sup>")}`
  ));

  // Q29
  cards.push(qCard(
    "29",
    "Find the derivative of (x + sec x)(x &minus; tan x).",
    `<div>Using the product rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = (<i>x</i> + sec <i>x</i>)(1 &minus; sec<sup>2</sup> <i>x</i>) + (<i>x</i> &minus; tan <i>x</i>)(1 + sec <i>x</i> tan <i>x</i>)</div>
     <div>&rArr; (<i>x</i> + sec <i>x</i>)(&minus;tan<sup>2</sup> <i>x</i>) + (<i>x</i> &minus; tan <i>x</i>)(1 + sec <i>x</i> tan <i>x</i>)</div>
     <div>&rArr; <b>(1 + sec x tan x)(x &minus; tan x) &minus; tan<sup>2</sup> x (x + sec x)</b></div>`,
    "(1 + sec x tan x)(x &minus; tan x) &minus; tan<sup>2</sup> x (x + sec x)"
  ));

  // Q30
  cards.push(qCard(
    "30",
    `Find the derivative of ${frac("x", "sin<sup>n</sup> x")}.`,
    `<div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("sin<sup>n</sup> x (1) &minus; x (n sin<sup>n&minus;1</sup> x cos x)", "(sin<sup>n</sup> x)<sup>2</sup>")}</div>
     <div>Factoring sin<sup><i>n</i>&minus;1</sup> <i>x</i> from numerator:</div>
     <div>&rArr; ${frac("sin<sup>n&minus;1</sup> x (sin x &minus; nx cos x)", "sin<sup>2n</sup> x")} = <b>${frac("sin x &minus; nx cos x", "sin<sup>n+1</sup> x")}</b></div>`,
    `${frac("sin x &minus; nx cos x", "sin<sup>n+1</sup> x")}`
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Miscellaneous Exercise", "Comprehensive Differentiation & First Principle Applications")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildMisc };
