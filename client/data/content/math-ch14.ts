import { ChapterContent } from "../types";

export const mathCh14: ChapterContent = {
  id: "ch14",
  number: 14,
  title: "Probability",
  isHtmlView: true,
  introduction:
    "Probability is the measure of the likelihood that an event will occur. Theoretical probability P(E) = Number of outcomes favourable to E / Total number of possible outcomes. In this chapter, we calculate probabilities for coins, dice, playing cards, and random selection experiments.",
  definitions: [
    { term: "Theoretical Probability P(E)", description: "P(E) = (Number of outcomes favourable to E) / (Number of all possible outcomes of the experiment)." },
    { term: "Impossible Event", description: "An event that has 0 probability of occurring (P(E) = 0)." },
    { term: "Sure / Certain Event", description: "An event that is certain to occur (P(E) = 1)." },
    { term: "Complementary Event", description: "Event 'not E' denoted as Ē such that P(E) + P(Ē) = 1." }
  ],
  keyPoints: [
    "0 ≤ P(E) ≤ 1 for any event E.",
    "P(E) + P(not E) = 1 ➔ P(not E) = 1 - P(E).",
    "Sum of probabilities of all elementary events of a trial is equal to 1.",
    "A standard deck of 52 playing cards has 4 suits of 13 cards each (Spades ♠, Hearts ♥, Diamonds ♦, Clubs ♣) with 12 Face Cards (J, Q, K)."
  ],
  formulas: [
    { name: "Probability Formula", formula: "P(E) = \frac{\text{Favourable Outcomes}}{\text{Total Outcomes}}" },
    { name: "Complementary Event Formula", formula: "P(\text{not } E) = 1 - P(E)" }
  ],
  crux: [],
  exercises: [
    { id: "ex14-1", name: "Exercise 14.1", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #00C853; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(0, 200, 83, 0.05); border-left: 4px solid #00C853; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #00C853; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Probability</div>
            <p class="content-text">Calculate theoretical probabilities for coin tosses, dice rolls, marbles, and 52-card deck draws using P(E) = Favourable / Total outcomes.</p>
            <div class="point-box">
                <div class="point-item">P(E) Range: Always between 0 and 1.</div>
                <div class="point-item">Complementary Rule: P(E) + P(not E) = 1.</div>
                <div class="point-item">Deck of Cards: 52 total cards, 26 Red, 26 Black, 12 Face Cards.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex14-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #00C853; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #00C853; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #69F0AE; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #00C853; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #69F0AE; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Complete the following statements:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#00C853;">(i) Probability of an event E + Probability of the event 'not E' = _________.</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">1</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#00C853;">(ii) The probability of an event that cannot happen is _________. Such an event is called _________.</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">0</span> , <span class="ans-highlight">impossible event</span></div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#00C853;">(iii) The probability of an event that is certain to happen is _________. Such an event is called _________.</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">1</span> , <span class="ans-highlight">sure or certain event</span></div>

                    <!-- Q1 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#00C853;">(iv) The sum of the probabilities of all the elementary events of an experiment is _________.</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">1</span></div>

                    <!-- Q1 (v) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#00C853;">(v) The probability of an event is greater than or equal to _________ and less than or equal to _________.</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">0</span> , <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Which of the following cannot be the probability of an event?</div>
                <div class="sol-body">
                    <div class="sol-step">(A) <div class="frac"><span class="num">2</span><span class="den">3</span></div> &nbsp;&nbsp; (B) -1.5 &nbsp;&nbsp; (C) 15% &nbsp;&nbsp; (D) 0.7</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Probability of any event can never be negative (since 0 &le; P(E) &le; 1).</div>
                    <div class="sol-step"><span class="ans-highlight">-1.5 cannot be the probability of an event (Option B)</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. If P(E) = 0.05, what is the probability of 'not E'?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">P(E) + P(not E) = 1</div>
                    <div class="sol-step">P(not E) = 1 - P(E) = 1 - 0.05 = 0.95</div>
                    <div class="sol-step"><span class="ans-highlight">P(not E) = 0.95</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m14-mcq-1", question: "The probability of an impossible event is:", options: ["1", "1/2", "0", "Not defined"], correctAnswer: "c", explanation: "An event that cannot happen has probability 0." },
    { id: "c10m14-mcq-2", question: "Which of the following cannot be the probability of an event?", options: ["0.1", "3%", "17/16", "0.001"], correctAnswer: "c", explanation: "17/16 = 1.0625 which is greater than 1, so it cannot be a probability." },
    { id: "c10m14-mcq-3", question: "Two coins are tossed simultaneously. What is the probability of getting at most one head?", options: ["1/4", "1/2", "3/4", "1"], correctAnswer: "c", explanation: "Sample space = {HH, HT, TH, TT}. At most 1 head = {HT, TH, TT} (3 outcomes). P = 3/4." },
    { id: "c10m14-mcq-4", question: "A card is drawn from a deck of 52 cards. The probability that it is a face card is:", options: ["4/13", "3/13", "2/13", "1/13"], correctAnswer: "b", explanation: "Number of face cards (J, Q, K of 4 suits) = 12. P = 12/52 = 3/13." },
    { id: "c10m14-mcq-5", question: "If P(E) = 0.07, then P(not E) is:", options: ["0.93", "0.03", "0.97", "0"], correctAnswer: "a", explanation: "P(not E) = 1 - 0.07 = 0.93." },
    { id: "c10m14-mcq-6", question: "A die is thrown once. The probability of getting a prime number is:", options: ["1/6", "1/3", "1/2", "2/3"], correctAnswer: "c", explanation: "Prime numbers on die = {2, 3, 5} (3 outcomes). P = 3/6 = 1/2." },
    { id: "c10m14-mcq-7", question: "A bag contains 3 red balls and 5 black balls. A ball is drawn at random. Probability of red ball is:", options: ["3/8", "5/8", "3/5", "1/2"], correctAnswer: "a", explanation: "Total balls = 8. Red balls = 3. P(Red) = 3/8." },
    { id: "c10m14-mcq-8", question: "The probability of getting 53 Sundays in a non-leap year is:", options: ["1/7", "2/7", "3/7", "53/365"], correctAnswer: "a", explanation: "365 days = 52 weeks + 1 extra day. Probability that extra day is Sunday = 1/7." },
    { id: "c10m14-mcq-9", question: "The probability of getting 53 Sundays in a leap year is:", options: ["1/7", "2/7", "3/7", "53/366"], correctAnswer: "b", explanation: "366 days = 52 weeks + 2 extra days. Out of 7 pairs of days, 2 contain Sunday ➔ P = 2/7." },
    { id: "c10m14-mcq-10", question: "If an event cannot occur, then its probability is:", options: ["1", "3/4", "1/2", "0"], correctAnswer: "d", explanation: "By definition, an event that cannot occur has probability 0." }
  ]
};
