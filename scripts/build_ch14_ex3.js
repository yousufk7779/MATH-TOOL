const { THEME_COLOR, ACCENT_COLOR, STYLES, frac, qCard, exBanner } = require("./ch14_common");

function buildEx3() {
  const cards = [];

  // Q1
  cards.push(qCard(
    "1",
    "Which of the following cannot be a valid assignment of probabilities for outcomes of sample Space S = {&omega;<sub>1</sub>, &omega;<sub>2</sub>, &omega;<sub>3</sub>, &omega;<sub>4</sub>, &omega;<sub>5</sub>, &omega;<sub>6</sub>, &omega;<sub>7</sub>}:<br/>" +
    "(a) 0.1, 0.01, 0.05, 0.03, 0.01, 0.2, 0.6<br/>" +
    "(b) 1/7, 1/7, 1/7, 1/7, 1/7, 1/7, 1/7<br/>" +
    "(c) 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7<br/>" +
    "(d) &minus;0.1, 0.2, 0.3, 0.4, &minus;0.2, 0.1, 0.3<br/>" +
    "(e) 1/14, 2/14, 3/14, 4/14, 5/14, 6/14, 15/14",
    `<div>For a valid assignment of probabilities, two axiomatic conditions must hold:</div>
     <div>1. 0 &le; <i>P</i>(&omega;<sub>i</sub>) &le; 1 for each outcome &omega;<sub>i</sub>.</div>
     <div>2. &sum; <i>P</i>(&omega;<sub>i</sub>) = 1.</div>
     
     <div style="margin-top: 8px;">• <b>(a):</b> Each 0 &le; <i>P</i>(&omega;<sub>i</sub>) &le; 1 and Sum = 0.1 + 0.01 + 0.05 + 0.03 + 0.01 + 0.2 + 0.6 = 1.0. &rArr; <b>Valid</b></div>
     <div>• <b>(b):</b> Each <i>P</i>(&omega;<sub>i</sub>) = ${frac("1", "7")} &gt; 0 and Sum = 7 &times; ${frac("1", "7")} = 1. &rArr; <b>Valid</b></div>
     <div>• <b>(c):</b> Sum = 0.1 + 0.2 + 0.3 + 0.4 + 0.5 + 0.6 + 0.7 = 2.8 &ne; 1. &rArr; <b>Invalid</b></div>
     <div>• <b>(d):</b> Negative values <i>P</i>(&omega;<sub>1</sub>) = &minus;0.1 and <i>P</i>(&omega;<sub>5</sub>) = &minus;0.2 violate non-negativity axiom. &rArr; <b>Invalid</b></div>
     <div>• <b>(e):</b> <i>P</i>(&omega;<sub>7</sub>) = ${frac("15", "14")} &gt; 1 and Sum = ${frac("36", "14")} &gt; 1. &rArr; <b>Invalid</b></div>`,
    "Valid: (a), (b) &nbsp;|&nbsp; Invalid: (c), (d), (e)"
  ));

  // Q2
  cards.push(qCard(
    "2",
    "A coin is tossed twice, what is the probability that at least one tail occurs?",
    `<div>When a coin is tossed twice, the sample space is:</div>
     <div><b>S = {HH, HT, TH, TT}</b> &rArr; <i>n</i>(<i>S</i>) = 4.</div>
     <div>Let event <i>A</i> = getting at least one tail = {HT, TH, TT}.</div>
     <div>&rArr; Favourable outcomes <i>n</i>(<i>A</i>) = 3.</div>
     <div>&rArr; <i>P</i>(<i>A</i>) = ${frac("n(A)", "n(S)")} = <b>${frac("3", "4")}</b></div>`,
    `${frac("3", "4")}`
  ));

  // Q3
  cards.push(qCard(
    "3",
    "A die is thrown, find the probability of the following events:<br/>" +
    "(i) A prime number will appear.<br/>" +
    "(ii) A number greater than or equal to 3 will appear.<br/>" +
    "(iii) A number less than or equal to one will appear.<br/>" +
    "(iv) A number more than 6 will appear.<br/>" +
    "(v) A number less than 6 will appear.",
    `<div>Sample space <i>S</i> = {1, 2, 3, 4, 5, 6} &rArr; <i>n</i>(<i>S</i>) = 6.</div>
     <div>• <b style="color: ${THEME_COLOR};">(i) Prime number:</b> {2, 3, 5} &rArr; <i>P</i> = ${frac("3", "6")} = <b>${frac("1", "2")}</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(ii) Number &ge; 3:</b> {3, 4, 5, 6} &rArr; <i>P</i> = ${frac("4", "6")} = <b>${frac("2", "3")}</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(iii) Number &le; 1:</b> {1} &rArr; <i>P</i> = <b>${frac("1", "6")}</b></div>
     <div>• <b style="color: ${THEME_COLOR};">(iv) Number &gt; 6:</b> &empty; &rArr; <i>P</i> = ${frac("0", "6")} = <b>0</b> &nbsp;(Impossible event)</div>
     <div>• <b style="color: ${THEME_COLOR};">(v) Number &lt; 6:</b> {1, 2, 3, 4, 5} &rArr; <i>P</i> = <b>${frac("5", "6")}</b></div>`,
    "(i) 1/2 &nbsp;|&nbsp; (ii) 2/3 &nbsp;|&nbsp; (iii) 1/6 &nbsp;|&nbsp; (iv) 0 &nbsp;|&nbsp; (v) 5/6"
  ));

  // Q4
  cards.push(qCard(
    "4",
    "A card is selected from a pack of 52 cards.<br/>" +
    "(a) How many points are there in the sample space?<br/>" +
    "(b) Calculate the probability that the card is an ace of spades.<br/>" +
    "(c) Calculate the probability that the card is (i) an ace (ii) black card.",
    `<div>Standard deck has 52 distinct playing cards.</div>
     <div>• <b>(a) Points in sample space:</b> <i>n</i>(<i>S</i>) = <b>52</b></div>
     <div>• <b>(b) Ace of spades:</b> There is only 1 ace of spades &rArr; <i>P</i> = <b>${frac("1", "52")}</b></div>
     <div>• <b>(c)(i) An ace:</b> There are 4 aces (Spade, Heart, Diamond, Club) &rArr; <i>P</i> = ${frac("4", "52")} = <b>${frac("1", "13")}</b></div>
     <div>• <b>(c)(ii) A black card:</b> There are 26 black cards (13 Spades + 13 Clubs) &rArr; <i>P</i> = ${frac("26", "52")} = <b>${frac("1", "2")}</b></div>`,
    "(a) 52 &nbsp;|&nbsp; (b) 1/52 &nbsp;|&nbsp; (c)(i) 1/13 &nbsp;|&nbsp; (c)(ii) 1/2"
  ));

  // Q5
  cards.push(qCard(
    "5",
    "A fair coin with 1 marked on one face and 6 on the other and a fair die are both tossed. Find the probability that the sum of numbers that turn up is (i) 3 (ii) 12.",
    `<div>Coin outcomes: {1, 6}; Die outcomes: {1, 2, 3, 4, 5, 6}.</div>
     <div>Sample space: <i>S</i> = {(1,1), (1,2), (1,3), (1,4), (1,5), (1,6), (6,1), (6,2), (6,3), (6,4), (6,5), (6,6)}.</div>
     <div>Total outcomes <i>n</i>(<i>S</i>) = 12.</div>
     
     <div style="margin-top: 8px;">• <b>(i) Sum of numbers is 3:</b></div>
     <div>Favourable outcome: {(1, 2)} &rArr; <i>n</i> = 1.</div>
     <div>&rArr; <i>P</i>(Sum = 3) = <b>${frac("1", "12")}</b></div>

     <div style="margin-top: 8px;">• <b>(ii) Sum of numbers is 12:</b></div>
     <div>Favourable outcome: {(6, 6)} &rArr; <i>n</i> = 1.</div>
     <div>&rArr; <i>P</i>(Sum = 12) = <b>${frac("1", "12")}</b></div>`,
    "(i) 1/12 &nbsp;|&nbsp; (ii) 1/12"
  ));

  // Q6
  cards.push(qCard(
    "6",
    "There are four men and six women on the city council. If one council member is selected for a committee at random, how likely is it that it is a woman?",
    `<div>Total council members = 4 men + 6 women = 10 members &rArr; <i>n</i>(<i>S</i>) = 10.</div>
     <div>Number of women = 6 &rArr; <i>n</i>(<i>W</i>) = 6.</div>
     <div>&rArr; <i>P</i>(Woman) = ${frac("n(W)", "n(S)")} = ${frac("6", "10")} = <b>${frac("3", "5")}</b> (or 0.6)</div>`,
    `${frac("3", "5")} (or 0.6)`
  ));

  // Q7
  cards.push(qCard(
    "7",
    "A fair coin is tossed four times, and a person wins ₹1 for each head and loses ₹1.50 for each tail that turns up. From the sample space, calculate how many different amounts of money you can have after four tosses and the probability of having each of these amounts.",
    `<div>When a coin is tossed 4 times, <i>n</i>(<i>S</i>) = 2<sup>4</sup> = 16.</div>
     <div>Let <i>X</i> be the net amount won or lost after 4 tosses:</div>
     <div style="margin-top: 8px;">1. <b>4 Heads, 0 Tails:</b> Win = 4(1) &minus; 0 = <b>+₹4.00</b> (1 way: HHHH) &rArr; <i>P</i>(+4) = <b>${frac("1", "16")}</b></div>
     <div>2. <b>3 Heads, 1 Tail:</b> Win = 3(1) &minus; 1.50 = <b>+₹1.50</b> (4 ways: <sup>4</sup>C<sub>1</sub>) &rArr; <i>P</i>(+1.50) = ${frac("4", "16")} = <b>${frac("1", "4")}</b></div>
     <div>3. <b>2 Heads, 2 Tails:</b> Amount = 2(1) &minus; 2(1.50) = 2 &minus; 3 = <b>&minus;₹1.00</b> (6 ways: <sup>4</sup>C<sub>2</sub>) &rArr; <i>P</i>(&minus;1.00) = ${frac("6", "16")} = <b>${frac("3", "8")}</b></div>
     <div>4. <b>1 Head, 3 Tails:</b> Amount = 1(1) &minus; 3(1.50) = 1 &minus; 4.50 = <b>&minus;₹3.50</b> (4 ways: <sup>4</sup>C<sub>3</sub>) &rArr; <i>P</i>(&minus;3.50) = ${frac("4", "16")} = <b>${frac("1", "4")}</b></div>
     <div>5. <b>0 Heads, 4 Tails:</b> Amount = 0 &minus; 4(1.50) = <b>&minus;₹6.00</b> (1 way: TTTT) &rArr; <i>P</i>(&minus;6.00) = <b>${frac("1", "16")}</b></div>
     <div style="margin-top: 8px;">There are <b>5 distinct amounts</b>: +₹4, +₹1.50, &minus;₹1, &minus;₹3.50, &minus;₹6.</div>`,
    "5 amounts: P(+4)=1/16, P(+1.50)=1/4, P(−1)=3/8, P(−3.50)=1/4, P(−6)=1/16"
  ));

  // Q8
  cards.push(qCard(
    "8",
    "Three coins are tossed once. Find the probability of getting:<br/>" +
    "(i) 3 heads &nbsp;|&nbsp; (ii) 2 heads &nbsp;|&nbsp; (iii) at least 2 heads<br/>" +
    "(iv) at most 2 heads &nbsp;|&nbsp; (v) no head &nbsp;|&nbsp; (vi) 3 tails<br/>" +
    "(vii) Exactly two tails &nbsp;|&nbsp; (viii) no tail &nbsp;|&nbsp; (ix) at most two tails",
    `<div>Sample space <i>S</i> = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT} &rArr; <i>n</i>(<i>S</i>) = 8.</div>
     <div>• (i) <b>3 heads:</b> {HHH} &rArr; <b>${frac("1", "8")}</b></div>
     <div>• (ii) <b>2 heads:</b> {HHT, HTH, THH} &rArr; <b>${frac("3", "8")}</b></div>
     <div>• (iii) <b>At least 2 heads:</b> {HHT, HTH, THH, HHH} &rArr; ${frac("4", "8")} = <b>${frac("1", "2")}</b></div>
     <div>• (iv) <b>At most 2 heads:</b> All except HHH &rArr; <b>${frac("7", "8")}</b></div>
     <div>• (v) <b>No head:</b> {TTT} &rArr; <b>${frac("1", "8")}</b></div>
     <div>• (vi) <b>3 tails:</b> {TTT} &rArr; <b>${frac("1", "8")}</b></div>
     <div>• (vii) <b>Exactly 2 tails:</b> {HTT, THT, TTH} &rArr; <b>${frac("3", "8")}</b></div>
     <div>• (viii) <b>No tail:</b> {HHH} &rArr; <b>${frac("1", "8")}</b></div>
     <div>• (ix) <b>At most 2 tails:</b> All except TTT &rArr; <b>${frac("7", "8")}</b></div>`,
    "(i) 1/8 &nbsp;|&nbsp; (ii) 3/8 &nbsp;|&nbsp; (iii) 1/2 &nbsp;|&nbsp; (iv) 7/8 &nbsp;|&nbsp; (v) 1/8 &nbsp;|&nbsp; (vi) 1/8 &nbsp;|&nbsp; (vii) 3/8 &nbsp;|&nbsp; (viii) 1/8 &nbsp;|&nbsp; (ix) 7/8"
  ));

  // Q9
  cards.push(qCard(
    "9",
    "If 2/11 is the probability of an event A, what is the probability of the event 'not A'?",
    `<div>By the complement rule of probability:</div>
     <div>&rArr; <i>P</i>(not <i>A</i>) = 1 &minus; <i>P</i>(<i>A</i>)</div>
     <div>Given: <i>P</i>(<i>A</i>) = ${frac("2", "11")}</div>
     <div>&rArr; <i>P</i>(not <i>A</i>) = 1 &minus; ${frac("2", "11")} = ${frac("11 &minus; 2", "11")} = <b>${frac("9", "11")}</b></div>`,
    `${frac("9", "11")}`
  ));

  // Q10
  cards.push(qCard(
    "10",
    "A letter is chosen at random from the word 'ASSASSINATION'. Find the probability that the letter is (i) a vowel (ii) a consonant.",
    `<div>In the word 'ASSASSINATION':</div>
     <div>Total letters <i>n</i>(<i>S</i>) = 13.</div>
     <div>• Vowels: A, A, A, I, I, O &rArr; 6 vowels.</div>
     <div>• Consonants: S, S, S, S, N, N, T &rArr; 7 consonants.</div>
     <div>&rArr; (i) <i>P</i>(Vowel) = ${frac("6", "13")} = <b>${frac("6", "13")}</b></div>
     <div>&rArr; (ii) <i>P</i>(Consonant) = ${frac("7", "13")} = <b>${frac("7", "13")}</b></div>`,
    "(i) 6/13 &nbsp;|&nbsp; (ii) 7/13"
  ));

  // Q11
  cards.push(qCard(
    "11",
    "In a lottery, a person chooses six different natural numbers at random, from 1 to 20, and if these six numbers match with the six numbers already fixed by the lottery committee, he wins the prize. What is the probability of winning the prize in the game?",
    `<div>Total numbers available = 20. Numbers to select = 6.</div>
     <div>Since order is not important, the total number of ways to choose 6 numbers is:</div>
     <div>&rArr; <i>n</i>(<i>S</i>) = <sup>20</sup>C<sub>6</sub> = ${frac("20!", "6! 14!")} = ${frac("20 &times; 19 &times; 18 &times; 17 &times; 16 &times; 15", "6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1")} = <b>38760</b></div>
     <div>Only 1 combination matches the fixed winning numbers: <i>n</i>(<i>E</i>) = <sup>6</sup>C<sub>6</sub> = 1.</div>
     <div>&rArr; Probability of winning the prize = ${frac("1", "<sup>20</sup>C<sub>6</sub>")} = <b>${frac("1", "38760")}</b></div>`,
    `${frac("1", "38760")}`
  ));

  // Q12
  cards.push(qCard(
    "12",
    "Check whether the following probabilities P(A) and P(B) are consistently defined:<br/>" +
    "(i) P(A) = 0.5, P(B) = 0.7, P(A &cap; B) = 0.6<br/>" +
    "(ii) P(A) = 0.5, P(B) = 0.4, P(A &cup; B) = 0.8",
    `<div>• <b style="color: ${THEME_COLOR};">(i) P(A) = 0.5, P(B) = 0.7, P(A &cap; B) = 0.6:</b></div>
     <div>Since (<i>A</i> &cap; <i>B</i>) &sub; <i>A</i>, we must have <i>P</i>(<i>A</i> &cap; <i>B</i>) &le; <i>P</i>(<i>A</i>).</div>
     <div>Here <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.6 &gt; <i>P</i>(<i>A</i>) = 0.5, which is impossible.</div>
     <div>&rArr; <b>Not consistently defined.</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) P(A) = 0.5, P(B) = 0.4, P(A &cup; B) = 0.8:</b></div>
     <div>From <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>):</div>
     <div>&rArr; 0.8 = 0.5 + 0.4 &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) &rArr; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.9 &minus; 0.8 = <b>0.1</b></div>
     <div>Here <i>P</i>(<i>A</i> &cap; <i>B</i>) &le; <i>P</i>(<i>A</i>) and <i>P</i>(<i>A</i> &cap; <i>B</i>) &le; <i>P</i>(<i>B</i>), and <i>P</i>(<i>A</i> &cup; <i>B</i>) &le; 1.</div>
     <div>&rArr; <b>Consistently defined.</b></div>`,
    "(i) Not consistently defined &nbsp;|&nbsp; (ii) Consistently defined"
  ));

  // Q13
  cards.push(qCard(
    "13",
    "Fill in the blanks in the following table:<br/>" +
    "&bull; (i) P(A) = 1/3, P(B) = 1/5, P(A &cap; B) = 1/15, P(A &cup; B) = ?<br/>" +
    "&bull; (ii) P(A) = 0.35, P(B) = ?, P(A &cap; B) = 0.25, P(A &cup; B) = 0.6<br/>" +
    "&bull; (iii) P(A) = 0.5, P(B) = 0.35, P(A &cap; B) = ?, P(A &cup; B) = 0.7",
    `<div>Using the general addition rule: <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>):</div>
     <div style="margin-top: 8px;">• <b>(i):</b> <i>P</i>(<i>A</i> &cup; <i>B</i>) = ${frac("1", "3")} + ${frac("1", "5")} &minus; ${frac("1", "15")} = ${frac("5 + 3 &minus; 1", "15")} = <b>${frac("7", "15")}</b></div>
     <div>• <b>(ii):</b> 0.6 = 0.35 + <i>P</i>(<i>B</i>) &minus; 0.25 &rArr; 0.6 = 0.10 + <i>P</i>(<i>B</i>) &rArr; <i>P</i>(<i>B</i>) = <b>0.5</b></div>
     <div>• <b>(iii):</b> 0.7 = 0.5 + 0.35 &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) &rArr; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.85 &minus; 0.7 = <b>0.15</b></div>`,
    "(i) P(A ∪ B) = 7/15 &nbsp;|&nbsp; (ii) P(B) = 0.5 &nbsp;|&nbsp; (iii) P(A ∩ B) = 0.15"
  ));

  // Q14
  cards.push(qCard(
    "14",
    "Given P(A) = 3/5 and P(B) = 1/5. Find P(A or B), if A and B are mutually exclusive events.",
    `<div>For mutually exclusive events, <i>A</i> &cap; <i>B</i> = &empty; &rArr; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.</div>
     <div>&rArr; <i>P</i>(<i>A</i> or <i>B</i>) = <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>)</div>
     <div>&rArr; <i>P</i>(<i>A</i> &cup; <i>B</i>) = ${frac("3", "5")} + ${frac("1", "5")} = <b>${frac("4", "5")}</b></div>`,
    `${frac("4", "5")}`
  ));

  // Q15
  cards.push(qCard(
    "15",
    "If E and F are events such that P(E) = 1/4, P(F) = 1/2 and P(E and F) = 1/8, find (i) P(E or F), (ii) P(not E and not F).",
    `<div>Given: <i>P</i>(<i>E</i>) = 1/4, <i>P</i>(<i>F</i>) = 1/2, <i>P</i>(<i>E</i> &cap; <i>F</i>) = 1/8.</div>
     
     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(i) P(E or F):</b></div>
     <div>&rArr; <i>P</i>(<i>E</i> &cup; <i>F</i>) = <i>P</i>(<i>E</i>) + <i>P</i>(<i>F</i>) &minus; <i>P</i>(<i>E</i> &cap; <i>F</i>)</div>
     <div>&rArr; <i>P</i>(<i>E</i> &cup; <i>F</i>) = ${frac("1", "4")} + ${frac("1", "2")} &minus; ${frac("1", "8")} = ${frac("2 + 4 &minus; 1", "8")} = <b>${frac("5", "8")}</b></div>

     <div style="margin-top: 10px;">• <b style="color: ${THEME_COLOR};">(ii) P(not E and not F):</b></div>
     <div>By De Morgan's Law, (not <i>E</i> and not <i>F</i>) = <i>E</i>′ &cap; <i>F</i>′ = (<i>E</i> &cup; <i>F</i>)′.</div>
     <div>&rArr; <i>P</i>(<i>E</i>′ &cap; <i>F</i>′) = 1 &minus; <i>P</i>(<i>E</i> &cup; <i>F</i>) = 1 &minus; ${frac("5", "8")} = <b>${frac("3", "8")}</b></div>`,
    "(i) P(E or F) = 5/8 &nbsp;|&nbsp; (ii) P(not E and not F) = 3/8"
  ));

  // Q16
  cards.push(qCard(
    "16",
    "Events E and F are such that P(not E or not F) = 0.25. State whether E and F are mutually exclusive.",
    `<div>Given: <i>P</i>(<i>E</i>′ &cup; <i>F</i>′) = 0.25</div>
     <div>By De Morgan's Law, <i>E</i>′ &cup; <i>F</i>′ = (<i>E</i> &cap; <i>F</i>)′.</div>
     <div>&rArr; <i>P</i>((<i>E</i> &cap; <i>F</i>)′) = 1 &minus; <i>P</i>(<i>E</i> &cap; <i>F</i>) = 0.25</div>
     <div>&rArr; <i>P</i>(<i>E</i> &cap; <i>F</i>) = 1 &minus; 0.25 = <b>0.75</b></div>
     <div>Since <i>P</i>(<i>E</i> &cap; <i>F</i>) = 0.75 &ne; 0, <i>E</i> and <i>F</i> can occur together.</div>
     <div>&rArr; <b>No, E and F are NOT mutually exclusive.</b></div>`,
    "No, E and F are not mutually exclusive (P(E ∩ F) = 0.75 ≠ 0)"
  ));

  // Q17
  cards.push(qCard(
    "17",
    "A and B are events such that P(A) = 0.42, P(B) = 0.48 and P(A and B) = 0.16. Determine (i) P(not A), (ii) P(not B) and (iii) P(A or B).",
    `<div>Given: <i>P</i>(<i>A</i>) = 0.42, <i>P</i>(<i>B</i>) = 0.48, <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.16.</div>
     <div>• (i) <i>P</i>(not <i>A</i>) = 1 &minus; <i>P</i>(<i>A</i>) = 1 &minus; 0.42 = <b>0.58</b></div>
     <div>• (ii) <i>P</i>(not <i>B</i>) = 1 &minus; <i>P</i>(<i>B</i>) = 1 &minus; 0.48 = <b>0.52</b></div>
     <div>• (iii) <i>P</i>(<i>A</i> or <i>B</i>) = <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.42 + 0.48 &minus; 0.16 = <b>0.74</b></div>`,
    "(i) P(not A) = 0.58 &nbsp;|&nbsp; (ii) P(not B) = 0.52 &nbsp;|&nbsp; (iii) P(A or B) = 0.74"
  ));

  // Q18
  cards.push(qCard(
    "18",
    "In Class XI of a school, 40% of the students study Mathematics, and 30% study Biology. 10% of the class study both Mathematics and Biology. If a student is selected at random from the class, find the probability that he will be studying Mathematics or Biology.",
    `<div>Let <i>M</i> be the event that student studies Mathematics, and <i>B</i> studies Biology.</div>
     <div>Given: <i>P</i>(<i>M</i>) = 40% = 0.40, <i>P</i>(<i>B</i>) = 30% = 0.30, <i>P</i>(<i>M</i> &cap; <i>B</i>) = 10% = 0.10.</div>
     <div>By the addition theorem of probability:</div>
     <div>&rArr; <i>P</i>(<i>M</i> &cup; <i>B</i>) = <i>P</i>(<i>M</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>M</i> &cap; <i>B</i>)</div>
     <div>&rArr; <i>P</i>(<i>M</i> &cup; <i>B</i>) = 0.40 + 0.30 &minus; 0.10 = <b>0.60</b> = <b>${frac("3", "5")}</b></div>`,
    "0.60 or 3/5 (60%)"
  ));

  // Q19
  cards.push(qCard(
    "19",
    "In an entrance test that is graded on the basis of two examinations, the probability of a randomly chosen student passing the first examination is 0.8, and the probability of passing the second examination is 0.7. The probability of passing at least one of them is 0.95. What is the probability of passing both?",
    `<div>Let <i>A</i> = passing first exam, <i>B</i> = passing second exam.</div>
     <div>Given: <i>P</i>(<i>A</i>) = 0.8, <i>P</i>(<i>B</i>) = 0.7, <i>P</i>(<i>A</i> &cup; <i>B</i>) = 0.95.</div>
     <div>From <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>):</div>
     <div>&rArr; <i>P</i>(<i>A</i> &cap; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cup; <i>B</i>)</div>
     <div>&rArr; <i>P</i>(<i>A</i> &cap; <i>B</i>) = 0.8 + 0.7 &minus; 0.95 = 1.50 &minus; 0.95 = <b>0.55</b></div>`,
    "0.55"
  ));

  // Q20
  cards.push(qCard(
    "20",
    "The probability that a student will pass the final examination in both English and Hindi is 0.5, and the probability of passing neither is 0.1. If the probability of passing the English examination is 0.75, what is the probability of passing the Hindi examination?",
    `<div>Let <i>E</i> = passing English, <i>H</i> = passing Hindi.</div>
     <div>Given: <i>P</i>(<i>E</i> &cap; <i>H</i>) = 0.5, <i>P</i>(<i>E</i>′ &cap; <i>H</i>′) = 0.1, <i>P</i>(<i>E</i>) = 0.75.</div>
     <div>Since <i>P</i>(<i>E</i>′ &cap; <i>H</i>′) = 1 &minus; <i>P</i>(<i>E</i> &cup; <i>H</i>) = 0.1:</div>
     <div>&rArr; <i>P</i>(<i>E</i> &cup; <i>H</i>) = 1 &minus; 0.1 = <b>0.90</b></div>
     <div>Now applying the addition theorem:</div>
     <div>&rArr; <i>P</i>(<i>E</i> &cup; <i>H</i>) = <i>P</i>(<i>E</i>) + <i>P</i>(<i>H</i>) &minus; <i>P</i>(<i>E</i> &cap; <i>H</i>)</div>
     <div>&rArr; 0.90 = 0.75 + <i>P</i>(<i>H</i>) &minus; 0.50 &rArr; 0.90 = 0.25 + <i>P</i>(<i>H</i>)</div>
     <div>&rArr; <i>P</i>(<i>H</i>) = 0.90 &minus; 0.25 = <b>0.65</b></div>`,
    "0.65"
  ));

  // Q21
  cards.push(qCard(
    "21",
    "In a class of 60 students, 30 opted for NCC, 32 opted for NSS and 24 opted for both NCC and NSS. If one of these students is selected at random, find the probability that:<br/>" +
    "(i) The student opted for NCC or NSS.<br/>" +
    "(ii) The student has opted for neither NCC nor NSS.<br/>" +
    "(iii) The student has opted for NSS but not NCC.",
    `<div>Total students <i>n</i>(<i>S</i>) = 60.</div>
     <div>Let <i>A</i> = opted for NCC, <i>B</i> = opted for NSS.</div>
     <div>Given: <i>n</i>(<i>A</i>) = 30, <i>n</i>(<i>B</i>) = 32, <i>n</i>(<i>A</i> &cap; <i>B</i>) = 24.</div>
     <div>&rArr; <i>P</i>(<i>A</i>) = 30/60 = 1/2, <i>P</i>(<i>B</i>) = 32/60 = 8/15, <i>P</i>(<i>A</i> &cap; <i>B</i>) = 24/60 = 2/5.</div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(i) Opted for NCC or NSS:</b></div>
     <div>&rArr; <i>P</i>(<i>A</i> &cup; <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) &minus; <i>P</i>(<i>A</i> &cap; <i>B</i>) = ${frac("30 + 32 &minus; 24", "60")} = ${frac("38", "60")} = <b>${frac("19", "30")}</b></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(ii) Opted for neither NCC nor NSS:</b></div>
     <div>&rArr; <i>P</i>(<i>A</i>′ &cap; <i>B</i>′) = 1 &minus; <i>P</i>(<i>A</i> &cup; <i>B</i>) = 1 &minus; ${frac("19", "30")} = <b>${frac("11", "30")}</b></div>

     <div style="margin-top: 8px;">• <b style="color: ${THEME_COLOR};">(iii) Opted for NSS but not NCC:</b></div>
     <div>&rArr; <i>n</i>(<i>B</i> &minus; <i>A</i>) = <i>n</i>(<i>B</i>) &minus; <i>n</i>(<i>A</i> &cap; <i>B</i>) = 32 &minus; 24 = 8</div>
     <div>&rArr; <i>P</i>(<i>B</i> &minus; <i>A</i>) = ${frac("8", "60")} = <b>${frac("2", "15")}</b></div>`,
    "(i) 19/30 &nbsp;|&nbsp; (ii) 11/30 &nbsp;|&nbsp; (iii) 2/15"
  ));

  return `${STYLES}
<div style="padding: 4px 2px;">
  ${exBanner("Exercise 14.3", "Axiomatic Probability, Addition Theorems &amp; Venn Diagram Event Algebra")}
  ${cards.join("\n")}
</div>`;
}

module.exports = { buildEx3 };
