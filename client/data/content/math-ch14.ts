import { ChapterContent } from "../chapterContent";

export const mathCh14: ChapterContent = {
    id: "ch14",
    number: 14,
    title: "Probability",
    introduction: "In this concluding chapter, we explore the mathematics of chance. We focus on calculating the theoretical probability of events based on possible outcomes and favourable cases, applying these concepts to real-world scenarios like coin tosses, dice rolls, and card draws.",
    definitions: [
        { term: "Probability", description: "A numerical measure ranging from 0 to 1 that represents the likelihood of an event occurring." },
        { term: "Sure Event", description: "An event that is certain to happen, with a probability of 1." },
        { term: "Impossible Event", description: "An event that cannot happen, with a probability of 0." }
    ],
    keyPoints: [
        "The sum of probabilities of all elementary events in an experiment is always 1.",
        "Complementary events (P(E) and P(not E)) always satisfy: P(E) + P(not E) = 1.",
        "Probability values are always within the range [0, 1]."
    ],
    formulas: [
        { name: "Theoretical Prob.", formula: "P(E) = (Favourable Outcomes) / (Total Outcomes)" },
        { name: "Complementary Event", formula: "P(not E) = 1 - P(E)" }
    ],
    crux: [
        "Always calculate the Total Sample Space first before looking for favourable outcomes.",
        "For complementary events, it's often easier to calculate 1 - P(Other Event).",
        "Be careful with keywords like 'at least', 'at most', and 'greater than' when counting outcomes."
    ],
    exercises: [
        { id: "exercise1", name: "Exercise 14.1", questions: [] },
        { id: "examples", name: "Examples", questions: [] }
    ],
    examples: [],
    theorems: [],
    mcqs: [
        {
            "id": "mcq1",
            "question": "<span style=\"font-weight: normal;\">The probability of an impossible event is:</span>",
            "options": [
                "(A) 1",
                "(B) 1/2",
                "(C) 0",
                "(D) Not defined"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq2",
            "question": "<span style=\"font-weight: normal;\">Which of the following cannot be the probability of an event?</span>",
            "options": [
                "(A) 0.1",
                "(B) 3%",
                "(C) 17/16",
                "(D) 0.001"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq3",
            "question": "<span style=\"font-weight: normal;\">Two coins are tossed simultaneously. What is the probability of getting at most one head?</span>",
            "options": [
                "(A) 1/4",
                "(B) 1/2",
                "(C) 3/4",
                "(D) 1"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq4",
            "question": "<span style=\"font-weight: normal;\">A card is drawn from a pack of 52 cards. The probability that it is a face card is:</span>",
            "options": [
                "(A) 4/13",
                "(B) 3/13",
                "(C) 2/13",
                "(D) 1/13"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq5",
            "question": "<span style=\"font-weight: normal;\">If P(E) = 0.07, then P(not E) is:</span>",
            "options": [
                "(A) 0.93",
                "(B) 0.03",
                "(C) 0.97",
                "(D) 0"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq6",
            "question": "<span style=\"font-weight: normal;\">A die is thrown once. The probability of getting a number less than 3 is:</span>",
            "options": [
                "(A) 1/3",
                "(B) 1/2",
                "(C) 1/6",
                "(D) 2/3"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq7",
            "question": "<span style=\"font-weight: normal;\">The probability of a certain event is:</span>",
            "options": [
                "(A) 0",
                "(B) 1",
                "(C) > 1",
                "(D) < 1"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq8",
            "question": "<span style=\"font-weight: normal;\">Which of the following can be probability of an event?</span>",
            "options": [
                "(A) -0.4",
                "(B) 1.004",
                "(C) 18/23",
                "(D) 8/7"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq9",
            "question": "<span style=\"font-weight: normal;\">Three coins are tossed. Probability of getting exactly two tails is:</span>",
            "options": [
                "(A) 1/8",
                "(B) 3/8",
                "(C) 1/2",
                "(D) 1/4"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq10",
            "question": "<span style=\"font-weight: normal;\">A letter is chosen at random from the word 'MATHEMATICS'. The probability that it is a vowel is:</span>",
            "options": [
                "(A) 4/11",
                "(B) 3/11",
                "(C) 5/11",
                "(D) 2/11"
            ],
            "correctAnswer": "A"
        }
    ],
    summary: [
        "Mastered the basic definition and calculation of theoretical probability.",
        "Learned to handle complementary, sure, and impossible events.",
        "Applied probability to a wide variety of practical and theoretical experiments."
    ],

    isHtmlView: true,
    htmlOverview: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Probability - Overview</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Kalam', cursive;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #66BB6A;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #66BB6A;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .section-title {
            color: #66BB6A;
            font-weight: normal ;
            font-size: 1.2em;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
        }

        .formula-box {
            background: #E8F5E9;
            border-left: 4px solid #4CAF50;
            padding: 10px;
            margin: 10px 0;
            font-family: 'Nunito', sans-serif;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.5;
        }

        
    


img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 280px; height: auto; border: 1px solid #ddd; border-radius: 6px; padding: 5px; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
@media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #66BB6A !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #66BB6A !important; }
  .question { color: #66BB6A !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #66BB6A !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #66BB6A !important; }
  .true-text { color: #66BB6A !important; }
  .false-text { color: #66BB6A !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #66BB6A !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #66BB6A !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <div class="step">Probability is the measure of uncertainty of an event. We deal with random experiments where
            all possible outcomes are known (sample space).</div>
        <img src="overview_prob.svg" alt="Probability Concept">
    </div>

    <div class="content-box">
        <div class="section-title">2. Theoretical Probability</div>
        <div class="formula-box">
            P(E) = (Number of outcomes favourable to E) / (Number of all possible outcomes)<br><br>
            The probability of an event E is a number P(E) such that:<br>
            0 ≤ P(E) ≤ 1
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Key Terms</div>
        <div class="step">Sure Event: An event that is certain to happen. P(E) = 1.</div>
        <div class="step">Impossible Event: An event that cannot happen. P(E) = 0.</div>
        <div class="step">Elementary Event: An event having only one outcome.</div>
        <div class="step">Complementary Event: The event 'not E', denoted by Ē. P(E) + P(Ē) = 1.
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Common Experiments</div>
        <div class="step">Coin: Head (H), Tail (T).</div>
        <div class="step">Die: 1, 2, 3, 4, 5, 6.</div>
        <div class="step">Cards: 52 cards (4 suits: Spades, Hearts, Diamonds, Clubs).</div>
    </div>

</body>

</html>`,
    htmlExercises: {
        exercise1: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Probability - Exercise 14.1</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Kalam', cursive;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #66BB6A;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #66BB6A;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .question {
            font-weight: normal ;
            margin-bottom: 15px;
            color: #333;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: normal ;
            color: #444;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.5;
        }

        .final-answer {
            color: #66BB6A;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        
    


img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 280px; height: auto; border: 1px solid #ddd; border-radius: 6px; padding: 5px; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
@media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #66BB6A !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #66BB6A !important; }
  .question { color: #66BB6A !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #66BB6A !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #66BB6A !important; }
  .true-text { color: #66BB6A !important; }
  .false-text { color: #66BB6A !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #66BB6A !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #66BB6A !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. Complete the following statements:</div>
        <img src="ex14_1_q1.svg" alt="Probability Scale">
        <div class="sub-question">(i) Probability of an event E + Probability of the event 'not E' = ___.</div>
        <div class="final-answer">1</div>
        <div class="sub-question">(ii) The probability of an event that cannot happen is ___. Such an event is called
            ___.</div>
        <div class="final-answer">0, Impossible event</div>
        <div class="sub-question">(iii) The probability of an event that is certain to happen is ___. Such an event is
            called ___.</div>
        <div class="final-answer">1, Sure or Certain event</div>
        <div class="sub-question">(iv) The sum of the probabilities of all the elementary events of an experiment is
            ___.</div>
        <div class="final-answer">1</div>
        <div class="sub-question">(v) The probability of an event is greater than or equal to ___ and less than or equal
            to ___.</div>
        <div class="final-answer">0, 1</div>
    </div>

    <div class="content-box">
        <div class="question">2. Which of the following experiments have equally likely outcomes? Explain.</div>
        <img src="ex14_1_q2.svg" alt="Equally Likely Icons">
        <div class="sub-question">(i) A driver attempts to start a car. The car starts or does not start.</div>
        <div class="final-answer">Not equally likely. Depends on car condition.</div>
        <div class="sub-question">(ii) A player attempts to shoot a basketball. She/he shoots or misses the shot.</div>
        <div class="final-answer">Not equally likely. Depends on player's ability.</div>
        <div class="sub-question">(iii) A trial is made to answer a true-false question. The answer is right or wrong.
        </div>
        <div class="final-answer">Equally likely. Only two possibilities.</div>
        <div class="sub-question">(iv) A baby is born. It is a boy or a girl.</div>
        <div class="final-answer">Equally likely.</div>
    </div>

    <div class="content-box">
        <div class="question">3. Why is tossing a coin considered to be a fair way of deciding which team should get the
            ball at the beginning of a football game?</div>
        <img src="ex14_1_q3.svg" alt="Coin Toss">
        <div class="solution-header">Solution:</div>
        <div class="step">When we toss a coin, the possible outcomes are only two, Head or Tail, which are equally
            likely outcomes. Therefore, the result of an individual coin toss is completely unpredictable.</div>
        <div class="final-answer">It is a fair method.</div>
    </div>

    <div class="content-box">
        <div class="question">4. Which of the following cannot be the probability of an event? (A) 2/3 (B) -1.5 (C) 15%
            (D) 0.7</div>
        <img src="ex14_1_q4.svg" alt="Negative Probability">
        <div class="solution-header">Solution:</div>
        <div class="step">Probability of an event cannot be negative or greater than 1.</div>
        <div class="step">Here, -1.5 is negative.</div>
        <div class="final-answer">(B) -1.5</div>
    </div>

    <div class="content-box">
        <div class="question">5. If P(E) = 0.05, what is the probability of 'not E'?</div>
        <img src="ex14_1_q5.svg" alt="Complementary Event">
        <div class="solution-header">Solution:</div>
        <div class="step">We know that P(E) + P(not E) = 1.</div>
        <div class="step">P(not E) = 1 - P(E) = 1 - 0.05 = 0.95.</div>
        <div class="final-answer">0.95</div>
    </div>

    <div class="content-box">
        <div class="question">6. A bag contains lemon flavoured candies only. Malini takes out one candy without looking
            into the bag. What is the probability that she takes out (i) an orange flavoured candy? (ii) a lemon
            flavoured candy?</div>
        <img src="ex14_1_q6.svg" alt="Lemon Candies">
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Bag contains only lemon candies. So, orange candy cannot be picked.</div>
        <div class="step">Number of favourable outcomes = 0. Probability = 0.</div>
        <div class="step">(ii) Event of picking lemon candy is a sure event.</div>
        <div class="step">Probability = 1.</div>
        <div class="final-answer">(i) 0, (ii) 1</div>
    </div>

    <div class="content-box">
        <div class="question">7. It is given that in a group of 3 students, the probability of 2 students not having the
            same birthday is 0.992. What is the probability that the 2 students have the same birthday?</div>
        <img src="ex14_1_q7.svg" alt="Students Birthday">
        <div class="solution-header">Solution:</div>
        <div class="step">P(Same birthday) + P(Different birthday) = 1.</div>
        <div class="step">P(Same) = 1 - 0.992 = 0.008.</div>
        <div class="final-answer">0.008</div>
    </div>

    <div class="content-box">
        <div class="question">8. A bag contains 3 red balls and 5 black balls. A ball is drawn at random from the bag.
            What is the probability that the ball drawn is (i) red ? (ii) not red?</div>
        <img src="ex14_1_q8.svg" alt="Balls Bag">
        <div class="solution-header">Solution:</div>
        <div class="step">Total balls = 3 + 5 = 8.</div>
        <div class="step">(i) Favourable (Red) = 3. P(Red) = 3/8.</div>
        <div class="step">(ii) Favourable (Not Red) = Black = 5. P(Not Red) = 5/8.</div>
        <div class="final-answer">(i) 3/8, (ii) 5/8</div>
    </div>

    <div class="content-box">
        <div class="question">9. A box contains 5 red marbles, 8 white marbles and 4 green marbles. One marble is taken
            out of the box at random. What is the probability that the marble taken out will be (i) red ? (ii) white ?
            (iii) not green?</div>
        <img src="ex14_1_q9.svg" alt="Marbles Box">
        <div class="solution-header">Solution:</div>
        <div class="step">Total marbles = 5 + 8 + 4 = 17.</div>
        <div class="step">(i) Red = 5. P(Red) = 5/17.</div>
        <div class="step">(ii) White = 8. P(White) = 8/17.</div>
        <div class="step">(iii) Not Green = Red + White = 5 + 8 = 13. P(Not Green) = 13/17.</div>
        <div class="final-answer">(i) 5/17, (ii) 8/17, (iii) 13/17</div>
    </div>

    <div class="content-box">
        <div class="question">10. A piggy bank contains hundred 50p coins, fifty ₹ 1 coins, twenty ₹ 2 coins and ten ₹ 5
            coins. If it is equally likely that one of the coins will fall out... find probability that coin (i) will be
            a 50p coin? (ii) will not be a ₹ 5 coin?</div>
        <img src="ex14_1_q10.svg" alt="Piggy Bank Coins">
        <div class="solution-header">Solution:</div>
        <div class="step">Total coins = 100 + 50 + 20 + 10 = 180.</div>
        <div class="step">(i) 50p coins = 100. P(50p) = 100/180 = 5/9.</div>
        <div class="step">(ii) Not ₹ 5 coin = 180 - 10 = 170. P(Not ₹ 5) = 170/180 = 17/18.</div>
        <div class="final-answer">(i) 5/9, (ii) 17/18</div>
    </div>

    <div class="content-box">
        <div class="question">11. Gopi buys a fish from a shop for his aquarium. The shopkeeper takes out one fish at
            random from a tank containing 5 male fish and 8 female fish. What is the probability that the fish taken out
            is a male fish?</div>
        <img src="ex14_1_q11.svg" alt="Fish Tank">
        <div class="solution-header">Solution:</div>
        <div class="step">Total fish = 5 + 8 = 13.</div>
        <div class="step">Male fish = 5.</div>
        <div class="step">P(Male) = 5/13.</div>
        <div class="final-answer">5/13</div>
    </div>

    <div class="content-box">
        <div class="question">12. A game of chance consists of spinning an arrow which comes to rest pointing at one of
            the numbers 1, 2, 3, 4, 5, 6, 7, 8... What is the probability that it will point at (i) 8 ? (ii) an odd
            number ? (iii) a number greater than 2 ? (iv) a number less than 9 ?</div>
        <img src="ex14_1_q12.svg" alt="Spinning Arrow">
        <div class="solution-header">Solution:</div>
        <div class="step">Total outcomes = 8.</div>
        <div class="step">(i) Pointing at 8: Only 1 outcome (8). P(8) = 1/8.</div>
        <div class="step">(ii) Odd numbers: 1, 3, 5, 7. Count = 4. P(Odd) = 4/8 = 1/2.</div>
        <div class="step">(iii) Greater than 2: 3, 4, 5, 6, 7, 8. Count = 6. P(>2) = 6/8 = 3/4.</div>
        <div class="step">(iv) Less than 9: All 1 to 8. Count = 8. P(<9)=8/8=1.</div>
                <div class="final-answer">(i) 1/8, (ii) 1/2, (iii) 3/4, (iv) 1</div>
        </div>

        <div class="content-box">
            <div class="question">13. A die is thrown once. Find the probability of getting (i) a prime number; (ii) a
                number lying between 2 and 6; (iii) an odd number.</div>
            <img src="ex14_1_q13.svg" alt="Die Outcomes">
            <div class="solution-header">Solution:</div>
            <div class="step">Outcomes: {1, 2, 3, 4, 5, 6}. Total = 6.</div>
            <div class="step">(i) Prime (2, 3, 5). Count = 3. P(Prime) = 3/6 = 1/2.</div>
            <div class="step">(ii) Between 2 and 6 (3, 4, 5). Count = 3. P(Between 2-6) = 3/6 = 1/2.</div>
            <div class="step">(iii) Odd (1, 3, 5). Count = 3. P(Odd) = 3/6 = 1/2.</div>
            <div class="final-answer">(i) 1/2, (ii) 1/2, (iii) 1/2</div>
        </div>

        <div class="content-box">
            <div class="question">14. One card is drawn from a well-shuffled deck of 52 cards. Find the probability of
                getting: (i) a king of red colour (ii) a face card (iii) a red face card (iv) the jack of hearts (v) a
                spade (vi) the queen of diamonds.</div>
            <img src="ex14_1_q14.svg" alt="Cards Deck">
            <div class="solution-header">Solution:</div>
            <div class="step">Total = 52.</div>
            <div class="step">(i) King Red (Hearts, Diamonds). Count = 2. P = 2/52 = 1/26.</div>
            <div class="step">(ii) Face cards (J, Q, K in 4 suits). Count = 12. P = 12/52 = 3/13.</div>
            <div class="step">(iii) Red face cards (6). P = 6/52 = 3/26.</div>
            <div class="step">(iv) Jack of Hearts (1). P = 1/52.</div>
            <div class="step">(v) Spade (13). P = 13/52 = 1/4.</div>
            <div class="step">(vi) Queen of Diamonds (1). P = 1/52.</div>
            <div class="final-answer">1/26, 3/13, 3/26, 1/52, 1/4, 1/52</div>
        </div>

        <div class="content-box">
            <div class="question">15. Five cards—the ten, jack, queen, king and ace of diamonds, are well-shuffled with
                their face downwards. One card is then picked up at random. (i) What is the probability that the card is
                the queen? (ii) If the queen is drawn and put aside, what is the probability that the second card picked
                up is (a) an ace? (b) a queen?</div>
            <img src="ex14_1_q15.svg" alt="Five Cards">
            <div class="solution-header">Solution:</div>
            <div class="step">Total = 5.</div>
            <div class="step">(i) Queen (1 card). P(Queen) = 1/5.</div>
            <div class="step">(ii) Queen put aside. Total remaining = 4.</div>
            <div class="step">(a) Ace (1 card). P(Ace) = 1/4.</div>
            <div class="step">(b) Queen (0 cards left). P(Queen) = 0.</div>
            <div class="final-answer">(i) 1/5, (ii)(a) 1/4, (ii)(b) 0</div>
        </div>

        <div class="content-box">
            <div class="question">16. 12 defective pens are accidentally mixed with 132 good ones. One pen is taken out
                at random. Determine the probability that the pen taken out is a good one.</div>
            <img src="ex14_1_q16.svg" alt="Pens Mix">
            <div class="solution-header">Solution:</div>
            <div class="step">Total = 12 + 132 = 144.</div>
            <div class="step">Good pens = 132.</div>
            <div class="step">P(Good) = 132/144 = 11/12.</div>
            <div class="final-answer">11/12</div>
        </div>

        <div class="content-box">
            <div class="question">17. (i) A lot of 20 bulbs contain 4 defective ones. One bulb is drawn at random. What
                is the probability that this bulb is defective? (ii) Suppose drawn bulb is not defective/not replaced.
                Now one bulb drawn. Probability not defective?</div>
            <img src="ex14_1_q17.svg" alt="Bulbs Lot">
            <div class="solution-header">Solution:</div>
            <div class="step">(i) Total 20. Defective 4. P(Defective) = 4/20 = 1/5.</div>
            <div class="step">(ii) Bulb drawn is good (non-defective). Remaining Total = 19. Remaining Good = 16 - 1 =
                15.</div>
            <div class="step">P(Not Defective) = 15/19.</div>
            <div class="final-answer">(i) 1/5, (ii) 15/19</div>
        </div>

        <div class="content-box">
            <div class="question">18. A box contains 90 discs which are numbered from 1 to 90. If one disc is drawn at
                random from the box, find the probability that it bears (i) a two-digit number (ii) a perfect square
                number (iii) a number divisible by 5.</div>
            <img src="ex14_1_q18.svg" alt="Numbered Discs">
            <div class="solution-header">Solution:</div>
            <div class="step">Total = 90.</div>
            <div class="step">(i) Two-digit (10 to 90). Count = 90 - 9 = 81. P = 81/90 = 9/10.</div>
            <div class="step">(ii) Perfect squares (1, 4, 9, 16, 25, 36, 49, 64, 81). Count = 9. P = 9/90 = 1/10.</div>
            <div class="step">(iii) Divisible by 5 (5, 10... 90). Count = 18. P = 18/90 = 1/5.</div>
            <div class="final-answer">9/10, 1/10, 1/5</div>
        </div>

        <div class="content-box">
            <div class="question">19. A child has a die whose six faces show the letters: A, B, C, D, E, A. The die is
                thrown once. What is the probability of getting (i) A? (ii) D?</div>
            <img src="ex14_1_q19.svg" alt="Child's Die">
            <div class="solution-header">Solution:</div>
            <div class="step">Total = 6.</div>
            <div class="step">(i) A appears twice. P(A) = 2/6 = 1/3.</div>
            <div class="step">(ii) D appears once. P(D) = 1/6.</div>
            <div class="final-answer">(i) 1/3, (ii) 1/6</div>
        </div>

        <div class="content-box">
            <div class="question">20. Suppose you drop a die at random on the rectangular region... What is the
                probability that it will land inside the circle with diameter 1m?</div>
            <img src="ex14_1_q20.svg" alt="Lawn Probability">
            <div class="solution-header">Solution:</div>
            <div class="step">Area of Rectangle = 3 × 2 = 6 m².</div>
            <div class="step">Area of Circle (d=1, r=0.5) = π(0.5)² = 0.25π m².</div>
            <div class="step">Probability = Area Circle / Area Rectangle = 0.25π / 6 = π/24.</div>
            <div class="final-answer">π/24</div>
        </div>

        <div class="content-box">
            <div class="question">21. A lot consists of 144 ball pens of which 20 are defective... The shopkeeper draws
                one pen at random. What is the probability that (i) She will buy it? (ii) She will not buy it?</div>
            <img src="ex14_1_q21.svg" alt="Pen Selection">
            <div class="solution-header">Solution:</div>
            <div class="step">Total = 144. Defective = 20. Good = 124.</div>
            <div class="step">(i) She buys good pens. P(Buy) = 124/144 = 31/36.</div>
            <div class="step">(ii) She won't buy defective. P(No Buy) = 20/144 = 5/36.</div>
            <div class="final-answer">(i) 31/36, (ii) 5/36</div>
        </div>

        <div class="content-box">
            <div class="question">22. Two dice, one blue and one grey, are thrown at the same time... Complete the table
                for sum of two dice.</div>
            <img src="ex14_1_q22.svg" alt="Two Dice Sum">
            <div class="solution-header">Solution:</div>
            <div class="step">Total outcomes = 36.</div>
            <div class="step">Sum 2: (1,1) -> 1/36.</div>
            <div class="step">Sum 3: (1,2), (2,1) -> 2/36.</div>
            <div class="step">Sum 4: (1,3), (2,2), (3,1) -> 3/36.</div>
            <div class="step">Sum 5: 4/36. Sum 6: 5/36. Sum 7: 6/36.</div>
            <div class="step">Sum 8: 5/36. Sum 9: 4/36. Sum 10: 3/36. Sum 11: 2/36. Sum 12: 1/36.</div>
            <div class="final-answer">Refer to pattern above.</div>
        </div>

        <div class="content-box">
            <div class="question">23. A game consists of tossing a one rupee coin 3 times... Hanif wins if all the
                tosses give the same result... Calculate the probability that Hanif will lose the game.</div>
            <img src="ex14_1_q23.svg" alt="Three Coins">
            <div class="solution-header">Solution:</div>
            <div class="step">Outcomes: HHH, HHT, HTH, THH, TTH, THT, HTT, TTT. Total = 8.</div>
            <div class="step">Win cases (Same result): HHH, TTT. Count = 2.</div>
            <div class="step">Lose cases: 8 - 2 = 6.</div>
            <div class="step">P(Lose) = 6/8 = 3/4.</div>
            <div class="final-answer">3/4</div>
        </div>

        <div class="content-box">
            <div class="question">24. A die is thrown twice. What is the probability that (i) 5 will not come up either
                time? (ii) 5 will come up at least once?</div>
            <img src="ex14_1_q24.svg" alt="Die Twice">
            <div class="solution-header">Solution:</div>
            <div class="step">Total = 36.</div>
            <div class="step">(ii) 5 at least once: (1,5), (2,5), (3,5), (4,5), (5,5), (6,5), (5,1), (5,2), (5,3),
                (5,4), (5,6). Count = 11.</div>
            <div class="step">P(5 at least once) = 11/36.</div>
            <div class="step">(i) 5 not come up = 1 - P(at least once) = 1 - 11/36 = 25/36.</div>
            <div class="final-answer">(i) 25/36, (ii) 11/36</div>
        </div>

        <div class="content-box">
            <div class="question">25. Which of the following arguments are correct and which are not? (i) If two coins
                are tossed... there are three possible outcomes - two heads, two tails or one of each. Therefore, for
                each of these outcomes, the probability is 1/3. (ii) If a die is thrown... odd number or an even number.
                Therefore P(odd) = 1/2.</div>
            <img src="ex14_1_q25.svg" alt="Arguments Check">
            <div class="solution-header">Solution:</div>
            <div class="step">(i) Incorrect. Outcomes are HH, HT, TH, TT (4 outcomes). P(One of each) = 2/4 = 1/2, not
                1/3.</div>
            <div class="step">(ii) Correct. Outcomes 1,3,5 (Odd) and 2,4,6 (Even). Both are 3/6 = 1/2.</div>
            <div class="final-answer">(i) Incorrect, (ii) Correct</div>
        </div>

</body>

</html>`,
        examples: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Probability - Examples</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Kalam', cursive;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #66BB6A;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #66BB6A;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .question {
            font-weight: normal ;
            margin-bottom: 15px;
            color: #333;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.5;
        }

        .final-answer {
            color: #66BB6A;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #66BB6A;
            font-weight: normal ;
            margin-bottom: 5px;
        }
    


img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 280px; height: auto; border: 1px solid #ddd; border-radius: 6px; padding: 5px; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
@media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #66BB6A !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #66BB6A !important; }
  .question { color: #66BB6A !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #66BB6A !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #66BB6A !important; }
  .true-text { color: #66BB6A !important; }
  .false-text { color: #66BB6A !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #66BB6A !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #66BB6A !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">Example 1. Find the probability of getting a head when a coin is tossed once. Also find
            the probability of getting a tail.</div>
        <img src="example_1.svg" alt="Coin Toss Example">
        <div class="solution-header">Solution:</div>
        <div class="step">Total outcomes = 2 (Head, Tail).</div>
        <div class="step">P(Head) = 1/2.</div>
        <div class="step">P(Tail) = 1/2.</div>
        <div class="final-answer">1/2, 1/2</div>
    </div>

    <div class="content-box">
        <div class="question">Example 2. A bag contains a red ball, a blue ball and a yellow ball, all the balls being
            of the same size. Kritika takes out a ball from the bag without looking into it. What is the probability
            that she takes out the (i) yellow ball? (ii) red ball? (iii) blue ball?</div>
        <img src="example_2.svg" alt="Colored Balls Example">
        <div class="solution-header">Solution:</div>
        <div class="step">Total balls = 3.</div>
        <div class="step">(i) Yellow ball = 1. P(Yellow) = 1/3.</div>
        <div class="step">(ii) Red ball = 1. P(Red) = 1/3.</div>
        <div class="step">(iii) Blue ball = 1. P(Blue) = 1/3.</div>
        <div class="final-answer">1/3, 1/3, 1/3</div>
    </div>

    <div class="content-box">
        <div class="question">Example 3. Suppose we throw a die once. (i) What is the probability of getting a number
            greater than 4? (ii) What is the probability of getting a number less than or equal to 4?</div>
        <img src="example_3.svg" alt="Die Outcomes Example">
        <div class="solution-header">Solution:</div>
        <div class="step">Total outcomes = 6.</div>
        <div class="step">(i) Greater than 4: {5, 6}. Count = 2. P(>4) = 2/6 = 1/3.</div>
        <div class="step">(ii) Less than or equal to 4: {1, 2, 3, 4}. Count = 4. P(<=4)=4/6=2/3.</div>
                <div class="final-answer">1/3, 2/3</div>
        </div>

</body>

</html>`
    }
};
