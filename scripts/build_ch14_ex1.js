const { THEME_COLOR, ACCENT_COLOR, STYLES, frac, qCard, exBanner } = require("./ch14_common");

function buildEx1() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "A coin is tossed three times. Describe the sample space for the indicated experiment.",
    `<div>When a coin is tossed once, the possible outcomes are Head (H) or Tail (T).</div>
     <div>When tossed 3 times, by the Fundamental Principle of Counting, the total number of outcomes is 2<sup>3</sup> = <b>8</b>.</div>
     <div>&rArr; The sample space <i>S</i> is given by:</div>
     <div><b>S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}</b></div>`,
    "S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT} &nbsp;(n(S) = 8)"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "A die is thrown two times. Describe the sample space for the indicated experiment.",
    `<div>When a fair die is rolled once, the possible outcomes are {1, 2, 3, 4, 5, 6}.</div>
     <div>When thrown twice, total number of outcomes is 6 &times; 6 = <b>36</b>.</div>
     <div>&rArr; The sample space <i>S</i> consists of ordered pairs (<i>x</i>, <i>y</i>) where <i>x</i>, <i>y</i> &isin; {1, 2, 3, 4, 5, 6}:</div>
     <div><b>S = {<br/>
       &nbsp;&nbsp;(1,1), (1,2), (1,3), (1,4), (1,5), (1,6),<br/>
       &nbsp;&nbsp;(2,1), (2,2), (2,3), (2,4), (2,5), (2,6),<br/>
       &nbsp;&nbsp;(3,1), (3,2), (3,3), (3,4), (3,5), (3,6),<br/>
       &nbsp;&nbsp;(4,1), (4,2), (4,3), (4,4), (4,5), (4,6),<br/>
       &nbsp;&nbsp;(5,1), (5,2), (5,3), (5,4), (5,5), (5,6),<br/>
       &nbsp;&nbsp;(6,1), (6,2), (6,3), (6,4), (6,5), (6,6)<br/>
     }</b></div>`,
    "S = {(x, y) : x, y ∈ {1, 2, 3, 4, 5, 6}} &nbsp;(n(S) = 36)"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "A coin is tossed four times. Describe the sample space for the indicated experiment.",
    `<div>Each toss has 2 outcomes: Head (H) or Tail (T).</div>
     <div>For 4 tosses, total number of outcomes is 2<sup>4</sup> = <b>16</b>.</div>
     <div>&rArr; Listing outcomes by number of heads:</div>
     <div>• 4 Heads: HHHH (1)</div>
     <div>• 3 Heads: HHHT, HHTH, HTHH, THHH (4)</div>
     <div>• 2 Heads: HHTT, HTHT, HTTH, THHT, THTH, TTHH (6)</div>
     <div>• 1 Head: HTTT, THTT, TTHT, TTTH (4)</div>
     <div>• 0 Heads: TTTT (1)</div>
     <div>&rArr; <b>S = {HHHH, HHHT, HHTH, HTHH, THHH, HHTT, HTHT, HTTH, THHT, THTH, TTHH, HTTT, THTT, TTHT, TTTH, TTTT}</b></div>`,
    "S = {16 outcomes from HHHH to TTTT} &nbsp;(n(S) = 16)"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "A coin is tossed, and a die is thrown. Describe the sample space for the indicated experiment.",
    `<div>A coin has 2 outcomes {H, T} and a die has 6 outcomes {1, 2, 3, 4, 5, 6}.</div>
     <div>Total number of outcomes = 2 &times; 6 = <b>12</b>.</div>
     <div>&rArr; The sample space is:</div>
     <div><b>S = {(H, 1), (H, 2), (H, 3), (H, 4), (H, 5), (H, 6), (T, 1), (T, 2), (T, 3), (T, 4), (T, 5), (T, 6)}</b></div>`,
    "S = {(H, 1), (H, 2), ..., (H, 6), (T, 1), ..., (T, 6)} &nbsp;(n(S) = 12)"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "A coin is tossed, and then a die is rolled only in case a head is shown on the coin. Describe the sample space.",
    `<div>There are two distinct branches:</div>
     <div>1. If Head (H) turns up on the coin, a die is thrown yielding outcomes: H1, H2, H3, H4, H5, H6.</div>
     <div>2. If Tail (T) turns up on the coin, the experiment stops: T.</div>
     <div>&rArr; The total sample space is:</div>
     <div><b>S = {H1, H2, H3, H4, H5, H6, T}</b> &nbsp;&nbsp;(Total 7 outcomes)</div>`,
    "S = {H1, H2, H3, H4, H5, H6, T} &nbsp;(n(S) = 7)"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "2 boys and 2 girls are in Room X, and 1 boy and 3 girls are in Room Y. Specify the sample space for the experiment in which a room is selected and then a person.",
    `<div>Let the persons in Room X be: boys <i>B</i><sub>1</sub>, <i>B</i><sub>2</sub> and girls <i>G</i><sub>1</sub>, <i>G</i><sub>2</sub>.</div>
     <div>Let the persons in Room Y be: boy <i>B</i><sub>3</sub> and girls <i>G</i><sub>3</sub>, <i>G</i><sub>4</sub>, <i>G</i><sub>5</sub>.</div>
     <div>• If Room X is selected: outcomes are (X, <i>B</i><sub>1</sub>), (X, <i>B</i><sub>2</sub>), (X, <i>G</i><sub>1</sub>), (X, <i>G</i><sub>2</sub>).</div>
     <div>• If Room Y is selected: outcomes are (Y, <i>B</i><sub>3</sub>), (Y, <i>G</i><sub>3</sub>), (Y, <i>G</i><sub>4</sub>), (Y, <i>G</i><sub>5</sub>).</div>
     <div>&rArr; Overall sample space:</div>
     <div><b>S = {(X, B<sub>1</sub>), (X, B<sub>2</sub>), (X, G<sub>1</sub>), (X, G<sub>2</sub>), (Y, B<sub>3</sub>), (Y, G<sub>3</sub>), (Y, G<sub>4</sub>), (Y, G<sub>5</sub>)}</b></div>`,
    "S = {(X, B₁), (X, B₂), (X, G₁), (X, G₂), (Y, B₃), (Y, G₃), (Y, G₄), (Y, G₅)} &nbsp;(n(S) = 8)"
  ));

  // Q7
  cards.push(qCard(
    "7",
    "One die of red colour, one of white colour and one of blue colour are placed in a bag. One die is selected at random and rolled, its colour and the number on its uppermost face is noted. Describe the sample space.",
    `<div>Let Red die be denoted by R, White die by W, and Blue die by B.</div>
     <div>Each selected die has 6 faces numbered 1, 2, 3, 4, 5, 6. Total outcomes = 3 &times; 6 = <b>18</b>.</div>
     <div>&rArr; The sample space <i>S</i> is:</div>
     <div><b>S = {<br/>
       &nbsp;&nbsp;(R, 1), (R, 2), (R, 3), (R, 4), (R, 5), (R, 6),<br/>
       &nbsp;&nbsp;(W, 1), (W, 2), (W, 3), (W, 4), (W, 5), (W, 6),<br/>
       &nbsp;&nbsp;(B, 1), (B, 2), (B, 3), (B, 4), (B, 5), (B, 6)<br/>
     }</b></div>`,
    "S = {(R, 1)..(R, 6), (W, 1)..(W, 6), (B, 1)..(B, 6)} &nbsp;(n(S) = 18)"
  ));

  // Q8
  cards.push(qCard(
    "8",
    "An experiment consists of recording boy–girl composition of families with 2 children.<br/>" +
    "(i) What is the sample space if we are interested in knowing whether it is a boy or girl in the order of their births?<br/>" +
    "(ii) What is the sample space if we are interested in the number of girls in the family?",
    `<div>Let Boy be denoted by B and Girl by G.</div>
     <div>• <b style="color: ${THEME_COLOR};">(i) Birth-order Sample Space:</b></div>
     <div>&rArr; <b>S = {BB, BG, GB, GG}</b> &nbsp;&nbsp;(where first letter denotes elder child)</div>
     
     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) Number of Girls Sample Space:</b></div>
     <div>A family with 2 children can have either 0, 1, or 2 girls.</div>
     <div>&rArr; <b>S = {0, 1, 2}</b></div>`,
    "(i) S = {BB, BG, GB, GG} &nbsp;|&nbsp; (ii) S = {0, 1, 2}"
  ));

  // Q9
  cards.push(qCard(
    "9",
    "A box contains 1 red and 3 identical white balls. Two balls are drawn at random in succession without replacement. Write the sample space for this experiment.",
    `<div>Let R denote the red ball and W denote a white ball.</div>
     <div>Since the 3 white balls are completely identical and indistinguishable:</div>
     <div>1. First ball is Red, second is White &rArr; <b>RW</b></div>
     <div>2. First ball is White, second is Red &rArr; <b>WR</b></div>
     <div>3. Both balls drawn are White &rArr; <b>WW</b></div>
     <div>&rArr; Sample Space: <b>S = {RW, WR, WW}</b></div>`,
    "S = {WW, WR, RW} &nbsp;(n(S) = 3)"
  ));

  // Q10
  cards.push(qCard(
    "10",
    "An experiment consists of tossing a coin and then throwing it the second time if a head occurs. If a tail occurs on the first toss, then a die is rolled once. Find the sample space.",
    `<div>• Case 1: First toss is Head (H) &rArr; coin tossed second time &rArr; {HH, HT}</div>
     <div>• Case 2: First toss is Tail (T) &rArr; die is rolled once &rArr; {T1, T2, T3, T4, T5, T6}</div>
     <div>&rArr; Overall Sample Space:</div>
     <div><b>S = {HH, HT, (T, 1), (T, 2), (T, 3), (T, 4), (T, 5), (T, 6)}</b> &nbsp;&nbsp;(Total 8 outcomes)</div>`,
    "S = {HH, HT, (T, 1), (T, 2), (T, 3), (T, 4), (T, 5), (T, 6)} &nbsp;(n(S) = 8)"
  ));

  // Q11
  cards.push(qCard(
    "11",
    "Suppose 3 bulbs are selected at random from a lot. Each bulb is tested and classified as defective (D) or non-defective (N). Write the sample space of this experiment.",
    `<div>Each bulb has 2 possible test classifications: D (Defective) or N (Non-defective).</div>
     <div>For 3 bulbs, total possible outcomes = 2 &times; 2 &times; 2 = <b>8</b>.</div>
     <div>&rArr; Sample space:</div>
     <div><b>S = {DDD, DDN, DND, NDD, DNN, NDN, NND, NNN}</b></div>`,
    "S = {DDD, DDN, DND, NDD, DNN, NDN, NND, NNN} &nbsp;(n(S) = 8)"
  ));

  // Q12
  cards.push(qCard(
    "12",
    "A coin is tossed. If the outcome is a head, a die is thrown. If the die shows up an even number, the die is thrown again. What is the sample space for the experiment?",
    `<div>Let us systematically trace all branches of the experiment:</div>
     <div>1. Coin shows Tail (T) &rArr; experiment ends: <b>{T}</b> &nbsp;(1 outcome)</div>
     <div>2. Coin shows Head (H) and die shows an odd number {1, 3, 5} &rArr; experiment ends:</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<b>{(H, 1), (H, 3), (H, 5)}</b> &nbsp;(3 outcomes)</div>
     <div>3. Coin shows Head (H) and die shows an even number {2, 4, 6} &rArr; die thrown again:</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;(H, 2, 1), (H, 2, 2), (H, 2, 3), (H, 2, 4), (H, 2, 5), (H, 2, 6)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;(H, 4, 1), (H, 4, 2), (H, 4, 3), (H, 4, 4), (H, 4, 5), (H, 4, 6)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;(H, 6, 1), (H, 6, 2), (H, 6, 3), (H, 6, 4), (H, 6, 5), (H, 6, 6) &nbsp;(18 outcomes)</div>
     <div>&rArr; Total outcomes = 1 + 3 + 18 = <b>22 outcomes</b>.</div>
     <div><b>S = {T, (H, 1), (H, 3), (H, 5), (H, 2, 1)..(H, 2, 6), (H, 4, 1)..(H, 4, 6), (H, 6, 1)..(H, 6, 6)}</b></div>`,
    "S contains 22 outcomes: {T}, 3 with odd die, 18 with even die repeated &nbsp;(n(S) = 22)"
  ));

  // Q13
  cards.push(qCard(
    "13",
    "The numbers 1, 2, 3 and 4 are written separately on four slips of paper. The slips are put in a box and mixed thoroughly. A person draws two slips from the box, one after the other, without replacement. Describe the sample space for the experiment.",
    `<div>First draw has 4 choices {1, 2, 3, 4}.</div>
     <div>Since the slip is not replaced, second draw has 3 remaining choices.</div>
     <div>Total outcomes = 4 &times; 3 = <b>12</b>.</div>
     <div>&rArr; Sample space:</div>
     <div><b>S = {(1, 2), (1, 3), (1, 4), (2, 1), (2, 3), (2, 4), (3, 1), (3, 2), (3, 4), (4, 1), (4, 2), (4, 3)}</b></div>`,
    "S = {(1, 2), (1, 3), (1, 4), (2, 1), (2, 3), (2, 4), (3, 1), (3, 2), (3, 4), (4, 1), (4, 2), (4, 3)} &nbsp;(n(S) = 12)"
  ));

  // Q14
  cards.push(qCard(
    "14",
    "An experiment consists of rolling a die and then tossing a coin once if the number on the die is even. If the number on the die is odd, the coin is tossed twice. Write the sample space for this experiment.",
    `<div>• Case 1: Die shows Even {2, 4, 6} &rArr; Coin tossed once {H, T}:</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;{(2, H), (2, T), (4, H), (4, T), (6, H), (6, T)} &nbsp;(6 outcomes)</div>
     <div>• Case 2: Die shows Odd {1, 3, 5} &rArr; Coin tossed twice {HH, HT, TH, TT}:</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;{(1, HH), (1, HT), (1, TH), (1, TT),<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3, HH), (3, HT), (3, TH), (3, TT),<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5, HH), (5, HT), (5, TH), (5, TT)} &nbsp;(12 outcomes)</div>
     <div>&rArr; Total outcomes = 6 + 12 = <b>18 outcomes</b>.</div>`,
    "S contains 18 outcomes (6 even with 1 toss + 12 odd with 2 tosses) &nbsp;(n(S) = 18)"
  ));

  // Q15
  cards.push(qCard(
    "15",
    "A coin is tossed. If it shows a tail, we draw a ball from a box which contains 2 red and 3 black balls. If it shows head, we throw a die. Find the sample space for this experiment.",
    `<div>Let the 2 red balls be R<sub>1</sub>, R<sub>2</sub> and the 3 black balls be B<sub>1</sub>, B<sub>2</sub>, B<sub>3</sub>.</div>
     <div>• If Tail (T) shows on coin &rArr; a ball is drawn:</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;{(T, R<sub>1</sub>), (T, R<sub>2</sub>), (T, B<sub>1</sub>), (T, B<sub>2</sub>), (T, B<sub>3</sub>)} &nbsp;(5 outcomes)</div>
     <div>• If Head (H) shows on coin &rArr; a die is thrown {1, 2, 3, 4, 5, 6}:</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;{(H, 1), (H, 2), (H, 3), (H, 4), (H, 5), (H, 6)} &nbsp;(6 outcomes)</div>
     <div>&rArr; Total Sample Space:</div>
     <div><b>S = {(T, R<sub>1</sub>), (T, R<sub>2</sub>), (T, B<sub>1</sub>), (T, B<sub>2</sub>), (T, B<sub>3</sub>), (H, 1), (H, 2), (H, 3), (H, 4), (H, 5), (H, 6)}</b> &nbsp;(11 outcomes)</div>`,
    "S = {(T, R₁), (T, R₂), (T, B₁), (T, B₂), (T, B₃), (H, 1), ..., (H, 6)} &nbsp;(n(S) = 11)"
  ));

  // Q16
  cards.push(qCard(
    "16",
    "A die is thrown repeatedly until a six comes up. What is the sample space for this experiment?",
    `<div>Let <i>x</i>, <i>y</i>, <i>z</i>, ... denote any outcome from {1, 2, 3, 4, 5} that is NOT a six.</div>
     <div>• Six comes on 1<sup>st</sup> throw: <b>(6)</b></div>
     <div>• Six comes on 2<sup>nd</sup> throw: <b>(1, 6), (2, 6), (3, 6), (4, 6), (5, 6)</b></div>
     <div>• Six comes on 3<sup>rd</sup> throw: <b>(1, 1, 6), (1, 2, 6), ..., (5, 5, 6)</b></div>
     <div>Since the experiment continues indefinitely until 6 appears, this is a <b>countably infinite sample space</b>:</div>
     <div><b>S = {(6), (1, 6), (2, 6), ..., (5, 6), (1, 1, 6), (1, 2, 6), ..., (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>k−1</sub>, 6), ...}</b></div>`,
    "S = {(6), (1,6)..(5,6), (1,1,6)...} &nbsp;(Countably Infinite Sample Space)"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 14.1", "Sample Space Description for Discrete, Multi-Stage &amp; Conditional Random Experiments")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx1 };
