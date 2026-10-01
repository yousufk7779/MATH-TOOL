const { THEME_COLOR, ACCENT_COLOR, STYLES, frac, qCard, exBanner } = require("./ch14_common");

function buildMisc() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "A box contains 10 red marbles, 20 blue marbles and 30 green marbles. 5 marbles are drawn from the box, what is the probability that:<br/>" +
    "(i) all will be blue?<br/>" +
    "(ii) at least one will be green?",
    `<div>Total marbles in the box = 10 + 20 + 30 = 60 marbles.</div>
     <div>Total number of ways to draw 5 marbles from 60:</div>
     <div>&rArr; <i>n</i>(<i>S</i>) = <sup>60</sup>C<sub>5</sub></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(i) All 5 marbles will be blue:</b></div>
     <div>Drawing 5 marbles out of the 20 blue marbles: <i>n</i>(<i>E</i>) = <sup>20</sup>C<sub>5</sub></div>
     <div>&rArr; <i>P</i>(All Blue) = ${frac("<sup>20</sup>C<sub>5</sub>", "<sup>60</sup>C<sub>5</sub>")}</div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) At least one will be green:</b></div>
     <div>Total non-green marbles = 10 Red + 20 Blue = 30 marbles.</div>
     <div>Number of ways to draw 5 non-green marbles = <sup>30</sup>C<sub>5</sub>.</div>
     <div>&rArr; <i>P</i>(No Green) = ${frac("<sup>30</sup>C<sub>5</sub>", "<sup>60</sup>C<sub>5</sub>")}</div>
     <div>&rArr; <i>P</i>(At least 1 Green) = 1 &minus; <i>P</i>(No Green) = <b>1 &minus; ${frac("<sup>30</sup>C<sub>5</sub>", "<sup>60</sup>C<sub>5</sub>")}</b></div>`,
    "(i) ²⁰C₅ / ⁶⁰C₅ &nbsp;|&nbsp; (ii) 1 − (³⁰C₅ / ⁶⁰C₅)"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "4 cards are drawn from a well-shuffled deck of 52 cards. What is the probability of obtaining 3 diamonds and one spade?",
    `<div>Total number of cards = 52.</div>
     <div>Total ways to draw 4 cards: <i>n</i>(<i>S</i>) = <sup>52</sup>C<sub>4</sub></div>
     <div>In a standard deck, there are 13 diamonds and 13 spades.</div>
     <div>• Number of ways to choose 3 diamonds from 13 = <sup>13</sup>C<sub>3</sub></div>
     <div>• Number of ways to choose 1 spade from 13 = <sup>13</sup>C<sub>1</sub></div>
     <div>By the fundamental principle of counting:</div>
     <div>&rArr; Favourable ways = <sup>13</sup>C<sub>3</sub> &times; <sup>13</sup>C<sub>1</sub></div>
     <div>&rArr; Required Probability = ${frac("<sup>13</sup>C<sub>3</sub> &times; <sup>13</sup>C<sub>1</sub>", "<sup>52</sup>C<sub>4</sub>")}</div>
     <div>Evaluating numerical values:</div>
     <div>&rArr; <sup>13</sup>C<sub>3</sub> = ${frac("13 &times; 12 &times; 11", "6")} = 286, &nbsp; <sup>13</sup>C<sub>1</sub> = 13, &nbsp; <sup>52</sup>C<sub>4</sub> = ${frac("52 &times; 51 &times; 50 &times; 49", "24")} = 270725</div>
     <div>&rArr; <i>P</i> = ${frac("286 &times; 13", "270725")} = ${frac("3718", "270725")} &approx; <b>0.0137</b></div>`,
    "(¹³C₃ × ¹³C₁) / ⁵²C₄ = 3718 / 270725"
  ));

  // Q3
  cards.push(qCard(
    "3",
    "A die has two faces, each with the number '1', three faces, each with the number '2' and one face with the number '3'. If a die is rolled once, determine:<br/>" +
    "(i) P(2) &nbsp;|&nbsp; (ii) P(1 or 3) &nbsp;|&nbsp; (iii) P(not 3)",
    `<div>Total faces on the die <i>n</i>(<i>S</i>) = 6.</div>
     <div>Number of faces with '1' = 2 &rArr; <i>P</i>(1) = 2/6 = 1/3</div>
     <div>Number of faces with '2' = 3 &rArr; <i>P</i>(2) = 3/6 = 1/2</div>
     <div>Number of faces with '3' = 1 &rArr; <i>P</i>(3) = 1/6</div>

     <div style="margin-top: 8px;">• <b>(i) P(2):</b> ${frac("3", "6")} = <b>${frac("1", "2")}</b></div>
     <div>• <b>(ii) P(1 or 3):</b> Since getting 1 and getting 3 are mutually exclusive:</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<i>P</i>(1 or 3) = <i>P</i>(1) + <i>P</i>(3) = ${frac("2", "6")} + ${frac("1", "6")} = ${frac("3", "6")} = <b>${frac("1", "2")}</b></div>
     <div>• <b>(iii) P(not 3):</b> By the complement rule:</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<i>P</i>(not 3) = 1 &minus; <i>P</i>(3) = 1 &minus; ${frac("1", "6")} = <b>${frac("5", "6")}</b></div>`,
    "(i) P(2) = 1/2 &nbsp;|&nbsp; (ii) P(1 or 3) = 1/2 &nbsp;|&nbsp; (iii) P(not 3) = 5/6"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "In a certain lottery, 10,000 tickets are sold, and ten equal prizes are awarded. What is the probability of not getting a prize if you buy:<br/>" +
    "(a) one ticket &nbsp;|&nbsp; (b) two tickets &nbsp;|&nbsp; (c) 10 tickets?",
    `<div>Total tickets = 10,000. Prize-winning tickets = 10.</div>
     <div>Non-winning tickets = 10,000 &minus; 10 = <b>9,990</b>.</div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(a) Buying 1 ticket:</b></div>
     <div>&rArr; <i>P</i>(not getting prize) = ${frac("9990", "10000")} = <b>${frac("999", "1000")}</b> (or 0.999)</div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(b) Buying 2 tickets:</b></div>
     <div>Total ways to buy 2 tickets = <sup>10000</sup>C<sub>2</sub>.</div>
     <div>Ways to choose 2 non-winning tickets = <sup>9990</sup>C<sub>2</sub>.</div>
     <div>&rArr; <i>P</i>(not getting prize) = <b>${frac("<sup>9990</sup>C<sub>2</sub>", "<sup>10000</sup>C<sub>2</sub>")}</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(c) Buying 10 tickets:</b></div>
     <div>Total ways to choose 10 tickets = <sup>10000</sup>C<sub>10</sub>.</div>
     <div>Ways to choose 10 non-winning tickets = <sup>9990</sup>C<sub>10</sub>.</div>
     <div>&rArr; <i>P</i>(not getting prize) = <b>${frac("<sup>9990</sup>C<sub>10</sub>", "<sup>10000</sup>C<sub>10</sub>")}</b></div>`,
    "(a) 999/1000 &nbsp;|&nbsp; (b) ⁹⁹⁹⁰C₂ / ¹⁰⁰⁰⁰C₂ &nbsp;|&nbsp; (c) ⁹⁹⁹⁰C₁₀ / ¹⁰⁰⁰⁰C₁₀"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "Out of 100 students, two sections of 40 and 60 are formed. If you and your friend are among the 100 students, what is the probability that:<br/>" +
    "(a) you both enter the same section?<br/>" +
    "(b) you both enter different sections?",
    `<div>Total students = 100. Total ways to place you and your friend across sections is equivalent to choosing 2 student slots:</div>
     <div>&rArr; <i>n</i>(<i>S</i>) = <sup>100</sup>C<sub>2</sub> = ${frac("100 &times; 99", "2")} = <b>4950</b></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(a) Both enter the same section:</b></div>
     <div>You both can enter Section 1 (size 40) OR Section 2 (size 60):</div>
     <div>&rArr; Ways = <sup>40</sup>C<sub>2</sub> + <sup>60</sup>C<sub>2</sub> = ${frac("40 &times; 39", "2")} + ${frac("60 &times; 59", "2")} = 780 + 1770 = <b>2550</b></div>
     <div>&rArr; <i>P</i>(Same section) = ${frac("2550", "4950")} = ${frac("255", "495")} = <b>${frac("17", "33")}</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(b) Both enter different sections:</b></div>
     <div>By complement rule:</div>
     <div>&rArr; <i>P</i>(Different sections) = 1 &minus; <i>P</i>(Same section) = 1 &minus; ${frac("17", "33")} = <b>${frac("16", "33")}</b></div>`,
    "(a) 17/33 &nbsp;|&nbsp; (b) 16/33"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "Three letters are dictated to three persons, and an envelope is addressed to each of them. The letters are inserted into the envelopes at random so that each envelope contains exactly one letter. Find the probability that at least one letter is in its proper envelope.",
    `<div>Let the 3 letters be <i>L</i><sub>1</sub>, <i>L</i><sub>2</sub>, <i>L</i><sub>3</sub> and envelopes be <i>E</i><sub>1</sub>, <i>E</i><sub>2</sub>, <i>E</i><sub>3</sub>.</div>
     <div>Total number of ways of inserting 3 letters into 3 envelopes:</div>
     <div>&rArr; <i>n</i>(<i>S</i>) = 3! = 3 &times; 2 &times; 1 = <b>6</b></div>
     <div>The possible assignments (permutations) are:</div>
     <div>1. (<i>L</i><sub>1</sub><i>E</i><sub>1</sub>, <i>L</i><sub>2</sub><i>E</i><sub>2</sub>, <i>L</i><sub>3</sub><i>E</i><sub>3</sub>) &mdash; All 3 correct</div>
     <div>2. (<i>L</i><sub>1</sub><i>E</i><sub>1</sub>, <i>L</i><sub>2</sub><i>E</i><sub>3</sub>, <i>L</i><sub>3</sub><i>E</i><sub>2</sub>) &mdash; 1 correct (<i>L</i><sub>1</sub>)</div>
     <div>3. (<i>L</i><sub>1</sub><i>E</i><sub>3</sub>, <i>L</i><sub>2</sub><i>E</i><sub>2</sub>, <i>L</i><sub>3</sub><i>E</i><sub>1</sub>) &mdash; 1 correct (<i>L</i><sub>2</sub>)</div>
     <div>4. (<i>L</i><sub>1</sub><i>E</i><sub>2</sub>, <i>L</i><sub>2</sub><i>E</i><sub>1</sub>, <i>L</i><sub>3</sub><i>E</i><sub>3</sub>) &mdash; 1 correct (<i>L</i><sub>3</sub>)</div>
     <div>5. (<i>L</i><sub>1</sub><i>E</i><sub>2</sub>, <i>L</i><sub>2</sub><i>E</i><sub>3</sub>, <i>L</i><sub>3</sub><i>E</i><sub>1</sub>) &mdash; 0 correct (Derangement)</div>
     <div>6. (<i>L</i><sub>1</sub><i>E</i><sub>3</sub>, <i>L</i><sub>2</sub><i>E</i><sub>1</sub>, <i>L</i><sub>3</sub><i>E</i><sub>2</sub>) &mdash; 0 correct (Derangement)</div>
     <div style="margin-top: 8px;">Number of ways where at least one letter is in its proper envelope = 4.</div>
     <div>&rArr; <i>P</i>(At least one in proper envelope) = ${frac("4", "6")} = <b>${frac("2", "3")}</b></div>`,
    `${frac("2", "3")}`
  ));

  // Q7
  cards.push(qCard(
    "7",
    "A and B are two events such that P(A) = 0.54, P(B) = 0.69 and P(A &cap; B) = 0.35. Find:<br/>" +
    "(i) P(A &cup; B) &nbsp;|&nbsp; (ii) P(A′ &cap; B′) &nbsp;|&nbsp; (iii) P(A &cap; B′) &nbsp;|&nbsp; (iv) P(B &cap; A′)",
    `<div>Given: <i>P</i>(<i>A</i>) = 0.54, <i>P</i>(<i>B</i>) = 0.69, <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.35.</div>
     
     <div style="margin-top: 8px;">• <b>(i) P(A &cup; B):</b></div>
     <div>&rArr; <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.54 + 0.69 &minus; 0.35 = <b>0.88</b></div>

     <div style="margin-top: 8px;">• <b>(ii) P(A′ &cap; B′):</b></div>
     <div>By De Morgan's Law: <i>A</i>′ &cap; <i>B</i>′ = (<i>A</i> &cup; <i>B</i>)′</div>
     <div>&rArr; <i>P</i>(<i>A</i>′ &cap; <i>B</i>′) = 1 &minus; <i>P</i>(<i>A</i> &cup; <i>B</i>) = 1 &minus; 0.88 = <b>0.12</b></div>

     <div style="margin-top: 8px;">• <b>(iii) P(A &cap; B′):</b></div>
     <div>&rArr; <i>P</i>(<i>A</i> &cap; <i>B</i>′) = <i>P</i>(<i>A</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.54 &minus; 0.35 = <b>0.19</b></div>

     <div style="margin-top: 8px;">• <b>(iv) P(B &cap; A′):</b></div>
     <div>&rArr; <i>P</i>(<i>B</i> &cap; <i>A</i>′) = <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.69 &minus; 0.35 = <b>0.34</b></div>`,
    "(i) 0.88 &nbsp;|&nbsp; (ii) 0.12 &nbsp;|&nbsp; (iii) 0.19 &nbsp;|&nbsp; (iv) 0.34"
  ));

  // Q8
  cards.push(qCard(
    "8",
    "From the employees of a company, 5 persons are selected to represent them in the managing committee of the company. Particulars of five persons are as follows:<br/>" +
    "1. Harish (M, 30) &nbsp;|&nbsp; 2. Rohan (M, 33) &nbsp;|&nbsp; 3. Sheetal (F, 46) &nbsp;|&nbsp; 4. Alis (F, 28) &nbsp;|&nbsp; 5. Salim (M, 41)<br/>" +
    "A person is selected at random from this group to act as a spokesperson. What is the probability that the spokesperson will be either male or over 35 years?",
    `<div>Total persons <i>n</i>(<i>S</i>) = 5.</div>
     <div>Let event <i>A</i> = selecting a male, and event <i>B</i> = selecting a person over 35 years.</div>
     <div>• Males: Harish, Rohan, Salim &rArr; <i>n</i>(<i>A</i>) = 3 &rArr; <i>P</i>(<i>A</i>) = 3/5</div>
     <div>• Persons over 35 years: Sheetal (46), Salim (41) &rArr; <i>n</i>(<i>B</i>) = 2 &rArr; <i>P</i>(<i>B</i>) = 2/5</div>
     <div>• Male AND over 35 years: Salim &rArr; <i>n</i>(<i>A</i> &cap; <i>B</i>) = 1 &rArr; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 1/5</div>
     <div>By the addition theorem of probability:</div>
     <div>&rArr; <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) = ${frac("3", "5")} + ${frac("2", "5")} &minus; ${frac("1", "5")} = <b>${frac("4", "5")}</b></div>`,
    `${frac("4", "5")} (or 0.8)`
  ));

  // Q9
  cards.push(qCard(
    "9",
    "If 4-digit numbers greater than 5,000 are randomly formed from the digits 0, 1, 3, 5, and 7, what is the probability of forming a number divisible by 5 when:<br/>" +
    "(i) the digits are repeated?<br/>" +
    "(ii) the repetition of digits is not allowed?",
    `<div>Available digits: {0, 1, 3, 5, 7} (5 digits).</div>
     <div>For a 4-digit number to be greater than 5,000, its thousands digit must be 5 or 7 (2 choices).</div>
     
     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(i) When digits are repeated:</b></div>
     <div>Total 4-digit numbers &gt; 5,000: Thousands place has 2 choices, hundreds has 5, tens has 5, units has 5. We subtract 1 for the exact number 5000 (since it is not &gt; 5000):</div>
     <div>&rArr; Total numbers = (2 &times; 5 &times; 5 &times; 5) &minus; 1 = 250 &minus; 1 = <b>249</b></div>
     <div>A number is divisible by 5 if its unit digit is 0 or 5 (2 choices). Subtracting 1 for 5000:</div>
     <div>&rArr; Favourable numbers = (2 &times; 5 &times; 5 &times; 2) &minus; 1 = 100 &minus; 1 = <b>99</b></div>
     <div>&rArr; <i>P</i>(Divisible by 5) = ${frac("99", "249")} = <b>${frac("33", "83")}</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) When repetition of digits is NOT allowed:</b></div>
     <div>Thousands place can be filled by 5 or 7 (2 ways). Remaining 3 places from remaining 4 digits:</div>
     <div>&rArr; Total numbers = 2 &times; 4 &times; 3 &times; 2 = <b>48</b></div>
     <div>For divisibility by 5, units place must be 0 or 5:</div>
     <div>&bull; Sub-case A: Starts with 5 &rArr; units place must be 0 (1 choice). Remaining 2 places filled by 3 remaining digits: 1 &times; 3 &times; 2 &times; 1 = <b>6</b></div>
     <div>&bull; Sub-case B: Starts with 7 &rArr; units place can be 0 or 5 (2 choices). Remaining 2 places: 1 &times; 3 &times; 2 &times; 2 = <b>12</b></div>
     <div>&rArr; Favourable numbers = 6 + 12 = <b>18</b></div>
     <div>&rArr; <i>P</i>(Divisible by 5) = ${frac("18", "48")} = <b>${frac("3", "8")}</b></div>`,
    "(i) 33/83 &nbsp;|&nbsp; (ii) 3/8"
  ));

  // Q10
  cards.push(qCard(
    "10",
    "The number lock of a suitcase has 4 wheels, each labelled with ten digits, i.e., from 0 to 9. The lock opens with a sequence of four digits with no repeats. What is the probability of a person getting the right sequence to open the suitcase?",
    `<div>Available digits on each wheel: {0, 1, 2, ..., 9} (10 digits).</div>
     <div>The lock code is a permutation of 4 distinct digits chosen from 10 digits without repetition:</div>
     <div>&rArr; Total possible 4-digit codes = <sup>10</sup>P<sub>4</sub> = 10 &times; 9 &times; 8 &times; 7 = <b>5040</b></div>
     <div>There is exactly 1 unique correct sequence that unlocks the suitcase.</div>
     <div>&rArr; Required Probability = ${frac("1", "<sup>10</sup>P<sub>4</sub>")} = <b>${frac("1", "5040")}</b></div>`,
    `${frac("1", "5040")}`
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Miscellaneous Exercise", "Combinatorial Probability, Card Selections, Derangements &amp; Number Permutations")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildMisc };
