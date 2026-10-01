const { THEME_COLOR, STYLES, frac, qCard, exBanner } = require("./ch12_common");

function buildEx2() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Find the derivative of x<sup>2</sup> &minus; 2 at x = 10 from the first principle.",
    `<div>Let <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 2.</div>
     <div>By the first principle of derivatives:</div>
     <div>&nbsp;&nbsp;<i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("f(x + h) &minus; f(x)", "h")}</div>
     <div>At <i>x</i> = 10:</div>
     <div>&rArr; <i>f</i>'(10) = lim<sub><i>h</i>&rarr;0</sub> ${frac("f(10 + h) &minus; f(10)", "h")}</div>
     <div>Here, <i>f</i>(10) = 10<sup>2</sup> &minus; 2 = 100 &minus; 2 = 98</div>
     <div>And <i>f</i>(10 + <i>h</i>) = (10 + <i>h</i>)<sup>2</sup> &minus; 2 = 100 + 20<i>h</i> + <i>h</i><sup>2</sup> &minus; 2 = 98 + 20<i>h</i> + <i>h</i><sup>2</sup></div>
     <div>&rArr; <i>f</i>'(10) = lim<sub><i>h</i>&rarr;0</sub> ${frac("(98 + 20h + h<sup>2</sup>) &minus; 98", "h")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("h(20 + h)", "h")}</div>
     <div>Cancelling <i>h</i> &ne; 0:</div>
     <div>&rArr; lim<sub><i>h</i>&rarr;0</sub> (20 + <i>h</i>) = 20 + 0 = <b>20</b></div>`,
    "20"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "Find the derivative of x at x = 1 from the first principle.",
    `<div>Let <i>f</i>(<i>x</i>) = <i>x</i>.</div>
     <div>By the first principle:</div>
     <div>&rArr; <i>f</i>'(1) = lim<sub><i>h</i>&rarr;0</sub> ${frac("f(1 + h) &minus; f(1)", "h")}</div>
     <div>&rArr; <i>f</i>'(1) = lim<sub><i>h</i>&rarr;0</sub> ${frac("(1 + h) &minus; 1", "h")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("h", "h")} = lim<sub><i>h</i>&rarr;0</sub> (1) = <b>1</b></div>`,
    "1"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "Find the derivative of 99x at x = 100 from the first principle.",
    `<div>Let <i>f</i>(<i>x</i>) = 99<i>x</i>.</div>
     <div>By the first principle:</div>
     <div>&rArr; <i>f</i>'(100) = lim<sub><i>h</i>&rarr;0</sub> ${frac("99(100 + h) &minus; 99(100)", "h")}</div>
     <div>&rArr; lim<sub><i>h</i>&rarr;0</sub> ${frac("9900 + 99h &minus; 9900", "h")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("99h", "h")} = <b>99</b></div>`,
    "99"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Find the derivative of the following functions from the first principle:<br/>" +
    "(i) x<sup>3</sup> &minus; 27<br/>" +
    "(ii) (x &minus; 1)(x &minus; 2)<br/>" +
    "(iii) 1/x<sup>2</sup><br/>" +
    "(iv) (x + 1)/(x &minus; 1)",
    `<div>• <b style="color: ${THEME_COLOR};">(i) f(x) = x<sup>3</sup> &minus; 27:</b></div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("[(x + h)<sup>3</sup> &minus; 27] &minus; (x<sup>3</sup> &minus; 27)", "h")}</div>
     <div>&rArr; lim<sub><i>h</i>&rarr;0</sub> ${frac("x<sup>3</sup> + 3x<sup>2</sup>h + 3xh<sup>2</sup> + h<sup>3</sup> &minus; x<sup>3</sup>", "h")} = lim<sub><i>h</i>&rarr;0</sub> (3<i>x</i><sup>2</sup> + 3<i>xh</i> + <i>h</i><sup>2</sup>) = <b>3x<sup>2</sup></b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) f(x) = (x &minus; 1)(x &minus; 2) = x<sup>2</sup> &minus; 3x + 2:</b></div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("[(x + h)<sup>2</sup> &minus; 3(x + h) + 2] &minus; (x<sup>2</sup> &minus; 3x + 2)", "h")}</div>
     <div>&rArr; lim<sub><i>h</i>&rarr;0</sub> ${frac("2xh + h<sup>2</sup> &minus; 3h", "h")} = lim<sub><i>h</i>&rarr;0</sub> (2<i>x</i> + <i>h</i> &minus; 3) = <b>2x &minus; 3</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(iii) f(x) = 1/x<sup>2</sup>:</b></div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac(frac("1", "(x + h)<sup>2</sup>") + " &minus; " + frac("1", "x<sup>2</sup>"), "h")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("x<sup>2</sup> &minus; (x + h)<sup>2</sup>", "h x<sup>2</sup>(x + h)<sup>2</sup>")}</div>
     <div>&rArr; lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;2xh &minus; h<sup>2</sup>", "h x<sup>2</sup>(x + h)<sup>2</sup>")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;2x &minus; h", "x<sup>2</sup>(x + h)<sup>2</sup>")} = ${frac("&minus;2x", "x<sup>4</sup>")} = <b>&minus;${frac("2", "x<sup>3</sup>")}</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(iv) f(x) = (x + 1)/(x &minus; 1):</b></div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac(frac("x + h + 1", "x + h &minus; 1") + " &minus; " + frac("x + 1", "x &minus; 1"), "h")}</div>
     <div>&rArr; lim<sub><i>h</i>&rarr;0</sub> ${frac("(x + h + 1)(x &minus; 1) &minus; (x + 1)(x + h &minus; 1)", "h (x + h &minus; 1)(x &minus; 1)")} = lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;2h", "h(x + h &minus; 1)(x &minus; 1)")}</div>
     <div>&rArr; lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;2", "(x + h &minus; 1)(x &minus; 1)")} = <b>&minus;${frac("2", "(x &minus; 1)<sup>2</sup>")}</b></div>`,
    `(i) 3x<sup>2</sup> &nbsp;|&nbsp; (ii) 2x &minus; 3 &nbsp;|&nbsp; (iii) &minus;${frac("2", "x<sup>3</sup>")} &nbsp;|&nbsp; (iv) &minus;${frac("2", "(x &minus; 1)<sup>2</sup>")}`
  ));

  // Q5
  cards.push(qCard(
    "5",
    `For the function f(x) = ${frac("x<sup>100</sup>", "100")} + ${frac("x<sup>99</sup>", "99")} + &hellip; + ${frac("x<sup>2</sup>", "2")} + x + 1, prove that f'(1) = 100 f'(0).`,
    `<div>Given: <i>f</i>(<i>x</i>) = ${frac("x<sup>100</sup>", "100")} + ${frac("x<sup>99</sup>", "99")} + &hellip; + ${frac("x<sup>2</sup>", "2")} + <i>x</i> + 1</div>
     <div>Differentiating term-by-term using the power rule ${frac("d", "dx")}(<i>x</i><sup><i>n</i></sup>) = <i>n</i><i>x</i><sup><i>n</i>&minus;1</sup>:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("100x<sup>99</sup>", "100")} + ${frac("99x<sup>98</sup>", "99")} + &hellip; + ${frac("2x", "2")} + 1 + 0</div>
     <div>&rArr; <b><i>f</i>'(<i>x</i>) = <i>x</i><sup>99</sup> + <i>x</i><sup>98</sup> + &hellip; + <i>x</i> + 1</b></div>
     <div>Now evaluate at <i>x</i> = 0:</div>
     <div>&rArr; <i>f</i>'(0) = 0 + 0 + &hellip; + 0 + 1 = <b>1</b></div>
     <div>Now evaluate at <i>x</i> = 1:</div>
     <div>&rArr; <i>f</i>'(1) = (1)<sup>99</sup> + (1)<sup>98</sup> + &hellip; + 1 + 1</div>
     <div>This is a sum of 1 repeated 100 times:</div>
     <div>&rArr; <i>f</i>'(1) = 100 &times; 1 = <b>100</b></div>
     <div>Since <i>f</i>'(1) = 100 = 100(1) = 100 <i>f</i>'(0), the identity is <b>proved</b>.</div>`,
    "f'(1) = 100 = 100 f'(0) &rArr; Proved"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Find the derivative of x<sup>n</sup> + ax<sup>n&minus;1</sup> + a<sup>2</sup>x<sup>n&minus;2</sup> + &hellip; + a<sup>n&minus;1</sup>x + a<sup>n</sup> for some fixed real number a.",
    `<div>Let <i>f</i>(<i>x</i>) = <i>x</i><sup><i>n</i></sup> + <i>ax</i><sup><i>n</i>&minus;1</sup> + <i>a</i><sup>2</sup><i>x</i><sup><i>n</i>&minus;2</sup> + &hellip; + <i>a</i><sup><i>n</i>&minus;1</sup><i>x</i> + <i>a</i><sup><i>n</i></sup>.</div>
     <div>Differentiating with respect to <i>x</i> (treating <i>a</i> as constant):</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("d", "dx")}(<i>x</i><sup><i>n</i></sup>) + <i>a</i> ${frac("d", "dx")}(<i>x</i><sup><i>n</i>&minus;1</sup>) + <i>a</i><sup>2</sup> ${frac("d", "dx")}(<i>x</i><sup><i>n</i>&minus;2</sup>) + &hellip; + <i>a</i><sup><i>n</i>&minus;1</sup> ${frac("d", "dx")}(<i>x</i>) + ${frac("d", "dx")}(<i>a</i><sup><i>n</i></sup>)</div>
     <div>Using the power rule:</div>
     <div>&rArr; <b><i>f</i>'(<i>x</i>) = <i>nx</i><sup><i>n</i>&minus;1</sup> + <i>a</i>(<i>n</i> &minus; 1)<i>x</i><sup><i>n</i>&minus;2</sup> + <i>a</i><sup>2</sup>(<i>n</i> &minus; 2)<i>x</i><sup><i>n</i>&minus;3</sup> + &hellip; + <i>a</i><sup><i>n</i>&minus;1</sup></b></div>`,
    "nx<sup>n&minus;1</sup> + a(n &minus; 1)x<sup>n&minus;2</sup> + a<sup>2</sup>(n &minus; 2)x<sup>n&minus;3</sup> + &hellip; + a<sup>n&minus;1</sup>"
  ));

  // Q7
  cards.push(qCard(
    "7",
    "For some constants a and b, find the derivative of:<br/>" +
    "(i) (x &minus; a)(x &minus; b)<br/>" +
    "(ii) (ax<sup>2</sup> + b)<sup>2</sup><br/>" +
    "(iii) (x &minus; a)/(x &minus; b)",
    `<div>• <b style="color: ${THEME_COLOR};">(i) f(x) = (x &minus; a)(x &minus; b) = x<sup>2</sup> &minus; (a + b)x + ab:</b></div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = 2<i>x</i> &minus; (<i>a</i> + <i>b</i>)(1) + 0 = <b>2x &minus; a &minus; b</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) f(x) = (ax<sup>2</sup> + b)<sup>2</sup> = a<sup>2</sup>x<sup>4</sup> + 2abx<sup>2</sup> + b<sup>2</sup>:</b></div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = <i>a</i><sup>2</sup>(4<i>x</i><sup>3</sup>) + 2<i>ab</i>(2<i>x</i>) + 0 = 4<i>a</i><sup>2</sup><i>x</i><sup>3</sup> + 4<i>abx</i> = <b>4ax(ax<sup>2</sup> + b)</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(iii) f(x) = (x &minus; a)/(x &minus; b):</b></div>
     <div>Using the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(x &minus; b) &times; 1 &minus; (x &minus; a) &times; 1", "(x &minus; b)<sup>2</sup>")} = ${frac("x &minus; b &minus; x + a", "(x &minus; b)<sup>2</sup>")} = <b>${frac("a &minus; b", "(x &minus; b)<sup>2</sup>")}</b></div>`,
    `(i) 2x &minus; a &minus; b &nbsp;|&nbsp; (ii) 4ax(ax<sup>2</sup> + b) &nbsp;|&nbsp; (iii) ${frac("a &minus; b", "(x &minus; b)<sup>2</sup>")}`
  ));

  // Q8
  cards.push(qCard(
    "8",
    `Find the derivative of ${frac("x<sup>n</sup> &minus; a<sup>n</sup>", "x &minus; a")} for some constant a.`,
    `<div>Let <i>f</i>(<i>x</i>) = ${frac("x<sup>n</sup> &minus; a<sup>n</sup>", "x &minus; a")}.</div>
     <div>Applying the quotient rule:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(x &minus; a) " + frac("d", "dx") + "(x<sup>n</sup> &minus; a<sup>n</sup>) &minus; (x<sup>n</sup> &minus; a<sup>n</sup>) " + frac("d", "dx") + "(x &minus; a)", "(x &minus; a)<sup>2</sup>")}</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = ${frac("(x &minus; a)(nx<sup>n&minus;1</sup>) &minus; (x<sup>n</sup> &minus; a<sup>n</sup>)(1)", "(x &minus; a)<sup>2</sup>")}</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = <b>${frac("nx<sup>n</sup> &minus; anx<sup>n&minus;1</sup> &minus; x<sup>n</sup> + a<sup>n</sup>", "(x &minus; a)<sup>2</sup>")}</b></div>`,
    `${frac("nx<sup>n</sup> &minus; anx<sup>n&minus;1</sup> &minus; x<sup>n</sup> + a<sup>n</sup>", "(x &minus; a)<sup>2</sup>")}`
  ));

  // Q9
  cards.push(qCard(
    "9",
    "Find the derivative of:<br/>" +
    "(i) 2x &minus; 3/4<br/>" +
    "(ii) (5x<sup>3</sup> + 3x &minus; 1)(x &minus; 1)<br/>" +
    "(iii) x<sup>&minus;3</sup>(5 + 3x)<br/>" +
    "(iv) x<sup>5</sup>(3 &minus; 6x<sup>&minus;9</sup>)<br/>" +
    "(v) x<sup>&minus;4</sup>(3 &minus; 4x<sup>&minus;5</sup>)<br/>" +
    "(vi) 2/(x + 1) &minus; x<sup>2</sup>/(3x &minus; 1)",
    `<div>• <b style="color: ${THEME_COLOR};">(i) f(x) = 2x &minus; 3/4:</b> <i>f</i>'(<i>x</i>) = 2(1) &minus; 0 = <b>2</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(ii) f(x) = (5x<sup>3</sup> + 3x &minus; 1)(x &minus; 1) = 5x<sup>4</sup> &minus; 5x<sup>3</sup> + 3x<sup>2</sup> &minus; 4x + 1:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = <b>20x<sup>3</sup> &minus; 15x<sup>2</sup> + 6x &minus; 4</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(iii) f(x) = x<sup>&minus;3</sup>(5 + 3x) = 5x<sup>&minus;3</sup> + 3x<sup>&minus;2</sup>:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = &minus;15<i>x</i><sup>&minus;4</sup> &minus; 6<i>x</i><sup>&minus;3</sup> = <b>&minus;${frac("3", "x<sup>4</sup>")}(5 + 2x)</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(iv) f(x) = x<sup>5</sup>(3 &minus; 6x<sup>&minus;9</sup>) = 3x<sup>5</sup> &minus; 6x<sup>&minus;4</sup>:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = 15<i>x</i><sup>4</sup> &minus; 6(&minus;4<i>x</i><sup>&minus;5</sup>) = <b>15x<sup>4</sup> + ${frac("24", "x<sup>5</sup>")}</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(v) f(x) = x<sup>&minus;4</sup>(3 &minus; 4x<sup>&minus;5</sup>) = 3x<sup>&minus;4</sup> &minus; 4x<sup>&minus;9</sup>:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = &minus;12<i>x</i><sup>&minus;5</sup> + 36<i>x</i><sup>&minus;10</sup> = <b>&minus;${frac("12", "x<sup>5</sup>")} + ${frac("36", "x<sup>10</sup>")}</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(vi) f(x) = ${frac("2", "x + 1")} &minus; ${frac("x<sup>2</sup>", "3x &minus; 1")}:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = <b>&minus;${frac("2", "(x + 1)<sup>2</sup>")} &minus; ${frac("x(3x &minus; 2)", "(3x &minus; 1)<sup>2</sup>")}</b></div>`,
    "(i) 2 &nbsp;|&nbsp; (ii) 20x<sup>3</sup> &minus; 15x<sup>2</sup> + 6x &minus; 4 &nbsp;|&nbsp; (iii) &minus;15/x<sup>4</sup> &minus; 6/x<sup>3</sup> &nbsp;|&nbsp; (iv) 15x<sup>4</sup> + 24/x<sup>5</sup> &nbsp;|&nbsp; (v) &minus;12/x<sup>5</sup> + 36/x<sup>10</sup>"
  ));

  // Q10
  cards.push(qCard(
    "10",
    "Find the derivative of cos x from the first principle.",
    `<div>Let <i>f</i>(<i>x</i>) = cos <i>x</i>.</div>
     <div>By the first principle:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("cos(x + h) &minus; cos x", "h")}</div>
     <div>Using the sum-to-product formula cos <i>C</i> &minus; cos <i>D</i> = &minus;2 sin(${frac("C + D", "2")}) sin(${frac("C &minus; D", "2")}):</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("&minus;2 sin(x + h/2) sin(h/2)", "h")}</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = &minus; lim<sub><i>h</i>&rarr;0</sub> sin(<i>x</i> + ${frac("h", "2")}) &times; lim<sub><i>h</i>&rarr;0</sub> ${frac("sin(h/2)", "h/2")}</div>
     <div>Using lim<sub><i>&theta;</i>&rarr;0</sub> ${frac("sin &theta;", "&theta;")} = 1:</div>
     <div>&rArr; <i>f</i>'(<i>x</i>) = &minus; sin(<i>x</i> + 0) &times; 1 = <b>&minus;sin x</b></div>`,
    "&minus;sin x"
  ));

  // Q11
  cards.push(qCard(
    "11",
    "Find the derivative of the following functions:<br/>" +
    "(i) sin x cos x<br/>" +
    "(ii) sec x<br/>" +
    "(iii) 5 sec x + 4 cos x<br/>" +
    "(iv) cosec x<br/>" +
    "(v) 3 cot x + 5 cosec x<br/>" +
    "(vi) 5 sin x &minus; 6 cos x + 7<br/>" +
    "(vii) 2 tan x &minus; 7 sec x",
    `<div>• <b style="color: ${THEME_COLOR};">(i) f(x) = sin x cos x:</b><br/>
     &rArr; <i>f</i>(<i>x</i>) = ${frac("1", "2")} sin 2<i>x</i> &rArr; <i>f</i>'(<i>x</i>) = ${frac("1", "2")}(2 cos 2<i>x</i>) = <b>cos 2x</b> (or cos<sup>2</sup> <i>x</i> &minus; sin<sup>2</sup> <i>x</i>)</div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(ii) f(x) = sec x:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = <b>sec x tan x</b></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(iii) f(x) = 5 sec x + 4 cos x:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = <b>5 sec x tan x &minus; 4 sin x</b></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(iv) f(x) = cosec x:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = <b>&minus;cosec x cot x</b></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(v) f(x) = 3 cot x + 5 cosec x:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = <b>&minus;3 cosec<sup>2</sup> x &minus; 5 cosec x cot x</b></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(vi) f(x) = 5 sin x &minus; 6 cos x + 7:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = 5(cos <i>x</i>) &minus; 6(&minus;sin <i>x</i>) + 0 = <b>5 cos x + 6 sin x</b></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(vii) f(x) = 2 tan x &minus; 7 sec x:</b><br/>
     &rArr; <i>f</i>'(<i>x</i>) = <b>2 sec<sup>2</sup> x &minus; 7 sec x tan x</b></div>`,
    "(i) cos 2x &nbsp;|&nbsp; (ii) sec x tan x &nbsp;|&nbsp; (iii) 5 sec x tan x &minus; 4 sin x &nbsp;|&nbsp; (iv) &minus;cosec x cot x &nbsp;|&nbsp; (v) &minus;3 cosec<sup>2</sup> x &minus; 5 cosec x cot x &nbsp;|&nbsp; (vi) 5 cos x + 6 sin x &nbsp;|&nbsp; (vii) 2 sec<sup>2</sup> x &minus; 7 sec x tan x"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 12.2", "First Principle Derivations & Standard Rules of Differentiation")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx2 };
