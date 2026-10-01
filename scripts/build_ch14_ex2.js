const { THEME_COLOR, ACCENT_COLOR, STYLES, frac, qCard, exBanner } = require("./ch14_common");

function buildEx2() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "A die is rolled. Let E be the event “die shows 4” and F be the event “die shows even number”. Are E and F mutually exclusive?",
    `<div>Sample space of rolling a fair die: <i>S</i> = {1, 2, 3, 4, 5, 6}.</div>
     <div>• Event <i>E</i> = {4}</div>
     <div>• Event <i>F</i> = {2, 4, 6}</div>
     <div>Finding the intersection of <i>E</i> and <i>F</i>:</div>
     <div>&rArr; <i>E</i> &cap; <i>F</i> = {4} &cap; {2, 4, 6} = <b>{4} &ne; &empty;</b></div>
     <div>Since <i>E</i> and <i>F</i> share a common elementary outcome (4), they can occur simultaneously.</div>
     <div>&rArr; <b>No, E and F are NOT mutually exclusive events.</b></div>`,
    "No, E and F are not mutually exclusive (E ∩ F = {4} ≠ ∅)"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "A die is thrown. Describe the following events:<br/>" +
    "(i) A: a number less than 7 &nbsp;|&nbsp; (ii) B: a number greater than 7<br/>" +
    "(iii) C: a multiple of 3 &nbsp;|&nbsp; (iv) D: a number less than 4<br/>" +
    "(v) E: an even number greater than 4 &nbsp;|&nbsp; (vi) F: a number not less than 3<br/>" +
    "Also, find A &cup; B, A &cap; B, B &cup; C, E &cap; F, D &cap; E, A &minus; C, D &minus; E, E &cap; F′, F′.",
    `<div>Sample space <i>S</i> = {1, 2, 3, 4, 5, 6}.</div>
     <div>• <b>A</b> = {1, 2, 3, 4, 5, 6} = <i>S</i> &nbsp;(Sure event)</div>
     <div>• <b>B</b> = &empty; &nbsp;(Impossible event)</div>
     <div>• <b>C</b> = {3, 6}</div>
     <div>• <b>D</b> = {1, 2, 3}</div>
     <div>• <b>E</b> = {6}</div>
     <div>• <b>F</b> = {3, 4, 5, 6}</div>
     
     <div style="margin-top: 10px;"><b>Event Operations:</b></div>
     <div>• <b>A &cup; B</b> = {1, 2, 3, 4, 5, 6} &cup; &empty; = <b>{1, 2, 3, 4, 5, 6}</b></div>
     <div>• <b>A &cap; B</b> = {1, 2, 3, 4, 5, 6} &cap; &empty; = <b>&empty;</b></div>
     <div>• <b>B &cup; C</b> = &empty; &cup; {3, 6} = <b>{3, 6}</b></div>
     <div>• <b>E &cap; F</b> = {6} &cap; {3, 4, 5, 6} = <b>{6}</b></div>
     <div>• <b>D &cap; E</b> = {1, 2, 3} &cap; {6} = <b>&empty;</b></div>
     <div>• <b>A &minus; C</b> = {1, 2, 3, 4, 5, 6} &minus; {3, 6} = <b>{1, 2, 4, 5}</b></div>
     <div>• <b>D &minus; E</b> = {1, 2, 3} &minus; {6} = <b>{1, 2, 3}</b></div>
     <div>• <b>F′</b> = <i>S</i> &minus; <i>F</i> = {1, 2, 3, 4, 5, 6} &minus; {3, 4, 5, 6} = <b>{1, 2}</b></div>
     <div>• <b>E &cap; F′</b> = {6} &cap; {1, 2} = <b>&empty;</b></div>`,
    "A = S, B = ∅, C = {3,6}, D = {1,2,3}, E = {6}, F = {3,4,5,6} &nbsp;|&nbsp; Detailed operations computed"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "An experiment involves rolling a pair of dice and recording the numbers that come up. Describe the following events:<br/>" +
    "&bull; <b>A:</b> the sum is greater than 8<br/>" +
    "&bull; <b>B:</b> 2 occurs on either die<br/>" +
    "&bull; <b>C:</b> the sum is at least 7 and a multiple of 3<br/>" +
    "Which pairs of these events are mutually exclusive?",
    `<div>Sample space <i>S</i> has 36 pairs (<i>x</i>, <i>y</i>).</div>
     <div>• <b>Event A (Sum &gt; 8, i.e., sum = 9, 10, 11, 12):</b></div>
     <div>&rArr; A = {(3,6), (4,5), (5,4), (6,3), (4,6), (5,5), (6,4), (5,6), (6,5), (6,6)} &nbsp;(10 outcomes)</div>
     
     <div style="margin-top: 8px;">• <b>Event B (2 on either die):</b></div>
     <div>&rArr; B = {(2,1), (2,2), (2,3), (2,4), (2,5), (2,6), (1,2), (3,2), (4,2), (5,2), (6,2)} &nbsp;(11 outcomes)</div>
     <div><i>Note: In B, the maximum sum possible is 2 + 6 = 8.</i></div>

     <div style="margin-top: 8px;">• <b>Event C (Sum &ge; 7 and multiple of 3 &rArr; sum = 9 or 12):</b></div>
     <div>&rArr; C = {(3,6), (4,5), (5,4), (6,3), (6,6)} &nbsp;(5 outcomes)</div>

     <div style="margin-top: 10px;"><b>Checking Pairs for Mutual Exclusivity:</b></div>
     <div>1. <b>A &cap; B = &empty;</b> &rArr; <b>A and B are mutually exclusive.</b></div>
     <div>2. <b>B &cap; C = &empty;</b> &rArr; <b>B and C are mutually exclusive.</b></div>
     <div>3. <b>A &cap; C = C &ne; &empty;</b> &rArr; <b>A and C are NOT mutually exclusive.</b></div>`,
    "Mutually Exclusive Pairs: (A, B) and (B, C)"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "Three coins are tossed once. Let A denote 'three heads show', B denote 'two heads and one tail show', C denote 'three tails show', and D denote 'a head shows on the first coin'. Which events are:<br/>" +
    "(i) Mutually exclusive? &nbsp;|&nbsp; (ii) Simple? &nbsp;|&nbsp; (iii) Compound?",
    `<div>Sample space: <i>S</i> = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}.</div>
     <div>• A = {HHH}</div>
     <div>• B = {HHT, HTH, THH}</div>
     <div>• C = {TTT}</div>
     <div>• D = {HHH, HHT, HTH, HTT}</div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(i) Mutually Exclusive Pairs:</b></div>
     <div>&bull; A &cap; B = &empty; &rArr; <b>(A, B)</b></div>
     <div>&bull; A &cap; C = &empty; &rArr; <b>(A, C)</b></div>
     <div>&bull; B &cap; C = &empty; &rArr; <b>(B, C)</b></div>
     <div>&bull; C &cap; D = &empty; &rArr; <b>(C, D)</b></div>
     <div><i>(Note: A &cap; D = {HHH} &ne; &empty;, and B &cap; D = {HHT, HTH} &ne; &empty;).</i></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) Simple (Elementary) Events:</b></div>
     <div>An event containing exactly one sample point: <b>A = {HHH}</b> and <b>C = {TTT}</b>.</div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(iii) Compound Events:</b></div>
     <div>Events containing more than one sample point: <b>B</b> (3 points) and <b>D</b> (4 points).</div>`,
    "(i) M.E. pairs: (A, B), (A, C), (B, C), (C, D) &nbsp;|&nbsp; (ii) Simple: A, C &nbsp;|&nbsp; (iii) Compound: B, D"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Three coins are tossed. Describe:<br/>" +
    "(i) Two events which are mutually exclusive.<br/>" +
    "(ii) Three events which are mutually exclusive and exhaustive.<br/>" +
    "(iii) Two events which are not mutually exclusive.<br/>" +
    "(iv) Two events which are mutually exclusive but not exhaustive.<br/>" +
    "(v) Three events which are mutually exclusive but not exhaustive.",
    `<div>Sample space <i>S</i> = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}.</div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(i) Two mutually exclusive events:</b></div>
     <div><i>A</i>: getting only heads = {HHH}; &nbsp; <i>B</i>: getting only tails = {TTT}.</div>
     <div>Here <i>A</i> &cap; <i>B</i> = &empty;.</div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(ii) Three mutually exclusive and exhaustive events:</b></div>
     <div><i>A</i>: exactly two tails = {HTT, THT, TTH}</div>
     <div><i>B</i>: at least two heads = {HHT, HTH, THH, HHH}</div>
     <div><i>C</i>: getting three tails = {TTT}</div>
     <div>They are pairwise disjoint and <i>A</i> &cup; <i>B</i> &cup; <i>C</i> = <i>S</i>.</div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(iii) Two events which are not mutually exclusive:</b></div>
     <div><i>A</i>: getting at least two heads = {HHH, HHT, HTH, THH}</div>
     <div><i>B</i>: getting three heads = {HHH}</div>
     <div>Here <i>A</i> &cap; <i>B</i> = {HHH} &ne; &empty;.</div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(iv) Two events mutually exclusive but not exhaustive:</b></div>
     <div><i>A</i>: getting only heads = {HHH}; &nbsp; <i>B</i>: getting only tails = {TTT}.</div>
     <div><i>A</i> &cap; <i>B</i> = &empty;, but <i>A</i> &cup; <i>B</i> &ne; <i>S</i>.</div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(v) Three events mutually exclusive but not exhaustive:</b></div>
     <div><i>A</i>: only heads = {HHH}; &nbsp; <i>B</i>: only tails = {TTT}; &nbsp; <i>C</i>: exactly two heads = {HHT, HTH, THH}.</div>
     <div>They are pairwise disjoint, but {HTT, THT, TTH} are not included, so <i>A</i> &cup; <i>B</i> &cup; <i>C</i> &ne; <i>S</i>.</div>`,
    "Constructed valid sets for all 5 sub-parts satisfying axiomatic constraints"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Two dice are thrown. The events A, B and C are as follows:<br/>" +
    "&bull; <b>A:</b> getting an even number on the first die.<br/>" +
    "&bull; <b>B:</b> getting an odd number on the first die.<br/>" +
    "&bull; <b>C:</b> getting the sum of the numbers on the dice &le; 5.<br/>" +
    "Describe the events: (i) A′ &nbsp;(ii) not B &nbsp;(iii) A or B &nbsp;(iv) A and B &nbsp;(v) A but not C &nbsp;(vi) B or C &nbsp;(vii) B and C &nbsp;(viii) A &cap; B′ &cap; C′.",
    `<div>Sample space <i>S</i> = {(<i>x</i>, <i>y</i>) : <i>x</i>, <i>y</i> &isin; {1, 2, ..., 6}} (36 pairs).</div>
     <div>• <b>A</b> = {(2,y), (4,y), (6,y) for <i>y</i> = 1..6} (18 outcomes)</div>
     <div>• <b>B</b> = {(1,y), (3,y), (5,y) for <i>y</i> = 1..6} (18 outcomes)</div>
     <div>• <b>C</b> = {(1,1), (1,2), (1,3), (1,4), (2,1), (2,2), (2,3), (3,1), (3,2), (4,1)} (10 outcomes)</div>

     <div style="margin-top: 10px;"><b>Descriptions:</b></div>
     <div>(i) <b>A′</b> = Not even on 1<sup>st</sup> die = Odd on 1<sup>st</sup> die = <b>B</b></div>
     <div>(ii) <b>not B</b> = <i>B</i>′ = <b>A</b></div>
     <div>(iii) <b>A or B</b> = <i>A</i> &cup; <i>B</i> = <b>S</b> &nbsp;(Since every number is either even or odd)</div>
     <div>(iv) <b>A and B</b> = <i>A</i> &cap; <i>B</i> = <b>&empty;</b> &nbsp;(Mutually exclusive)</div>
     <div>(v) <b>A but not C</b> = <i>A</i> &minus; <i>C</i> = {(2,4), (2,5), (2,6), (4,2), (4,3), (4,4), (4,5), (4,6), (6,1)..(6,6)} (14 pairs)</div>
     <div>(vi) <b>B or C</b> = <i>B</i> &cup; <i>C</i> = <i>B</i> &cup; {(2,1), (2,2), (2,3), (4,1)} (22 pairs)</div>
     <div>(vii) <b>B and C</b> = <i>B</i> &cap; <i>C</i> = {(1,1), (1,2), (1,3), (1,4), (3,1), (3,2)} (6 pairs)</div>
     <div>(viii) <b>A &cap; B′ &cap; C′</b> = <i>A</i> &cap; <i>A</i> &cap; <i>C</i>′ = <i>A</i> &cap; <i>C</i>′ = <b>A &minus; C</b> (same as (v))</div>`,
    "(i) A′ = B &nbsp;|&nbsp; (ii) not B = A &nbsp;|&nbsp; (iii) A ∪ B = S &nbsp;|&nbsp; (iv) A ∩ B = ∅ &nbsp;|&nbsp; (v) A − C &nbsp;|&nbsp; (vi) B ∪ C &nbsp;|&nbsp; (vii) B ∩ C &nbsp;|&nbsp; (viii) A − C"
  ));

  // Q7
  cards.push(qCard(
    "7",
    "Refer to question 6 above and state true or false with reasons:<br/>" +
    "(i) A and B are mutually exclusive.<br/>" +
    "(ii) A and B are mutually exclusive and exhaustive.<br/>" +
    "(iii) A = B′.<br/>" +
    "(iv) A and C are mutually exclusive.<br/>" +
    "(v) A and B′ are mutually exclusive.<br/>" +
    "(vi) A′, B′, C are mutually exclusive and exhaustive.",
    `<div>From Question 6: <i>A</i> &cap; <i>B</i> = &empty;, <i>A</i> &cup; <i>B</i> = <i>S</i>, <i>B</i>′ = <i>A</i>.</div>

     <div style="margin-top: 8px;">• <b>(i) A and B are mutually exclusive:</b> <b>TRUE</b></div>
     <div><i>Reason:</i> <i>A</i> &cap; <i>B</i> = &empty; (a number cannot be both even and odd).</div>

     <div style="margin-top: 8px;">• <b>(ii) A and B are mutually exclusive and exhaustive:</b> <b>TRUE</b></div>
     <div><i>Reason:</i> <i>A</i> &cap; <i>B</i> = &empty; and <i>A</i> &cup; <i>B</i> = <i>S</i>.</div>

     <div style="margin-top: 8px;">• <b>(iii) A = B′:</b> <b>TRUE</b></div>
     <div><i>Reason:</i> Complement of odd numbers is even numbers, so <i>B</i>′ = <i>A</i>.</div>

     <div style="margin-top: 8px;">• <b>(iv) A and C are mutually exclusive:</b> <b>FALSE</b></div>
     <div><i>Reason:</i> <i>A</i> &cap; <i>C</i> = {(2,1), (2,2), (2,3), (4,1)} &ne; &empty;.</div>

     <div style="margin-top: 8px;">• <b>(v) A and B′ are mutually exclusive:</b> <b>FALSE</b></div>
     <div><i>Reason:</i> Since <i>B</i>′ = <i>A</i>, <i>A</i> &cap; <i>B</i>′ = <i>A</i> &cap; <i>A</i> = <i>A</i> &ne; &empty;.</div>

     <div style="margin-top: 8px;">• <b>(vi) A′, B′, C are mutually exclusive and exhaustive:</b> <b>FALSE</b></div>
     <div><i>Reason:</i> <i>B</i>′ &cap; <i>C</i> = <i>A</i> &cap; <i>C</i> &ne; &empty;, so they are not mutually exclusive.</div>`,
    "(i) True &nbsp;|&nbsp; (ii) True &nbsp;|&nbsp; (iii) True &nbsp;|&nbsp; (iv) False &nbsp;|&nbsp; (v) False &nbsp;|&nbsp; (vi) False"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 14.2", "Algebra of Events: Mutually Exclusive, Exhaustive, Simple &amp; Compound Events")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx2 };
