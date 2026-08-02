import { ChapterContent } from "../types";

export const mathCh6: ChapterContent = {
  id: "ch6",
  number: 6,
  title: "Triangles",
  isHtmlView: true,
  introduction:
    "Two figures having the same shape but not necessarily the same size are called similar figures. In this chapter, we study similarity of triangles, Basic Proportionality Theorem (BPT / Thales Theorem), and criteria for similarity of triangles (AAA, SSS, SAS).",
  definitions: [
    { term: "Similar Triangles", description: "Two triangles are similar if their corresponding angles are equal and their corresponding sides are in the same ratio." },
    { term: "Basic Proportionality Theorem (BPT)", description: "If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio." },
    { term: "Converse of BPT", description: "If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side." }
  ],
  keyPoints: [
    "Criteria for Similarity of Triangles:",
    "1. AAA Criterion: If corresponding angles of two triangles are equal, then their corresponding sides are in the same ratio, and the triangles are similar.",
    "2. SSS Criterion: If corresponding sides of two triangles are proportional, then their corresponding angles are equal, and the triangles are similar.",
    "3. SAS Criterion: If one angle of a triangle is equal to one angle of another triangle and sides including these angles are proportional, the triangles are similar."
  ],
  formulas: [
    { name: "BPT Ratio Formula", formula: "\frac{AD}{DB} = \frac{AE}{EC}" }
  ],
  crux: [],
  exercises: [
    { id: "ex6-1", name: "Exercise 6.1", questions: [] },
    { id: "ex6-2", name: "Exercise 6.2", questions: [] },
    { id: "ex6-3", name: "Exercise 6.3", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #26C6DA; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(38, 198, 218, 0.05); border-left: 4px solid #26C6DA; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #26C6DA; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Triangles</div>
            <p class="content-text">Explore geometric similarity of triangles, Thales Theorem (BPT), converse of BPT, and similarity tests (AA, SSS, SAS) through step-by-step vector diagrams and proofs.</p>
            <div class="point-box">
                <div class="point-item">Thales Theorem (BPT): Line parallel to base divides other 2 sides proportionally: AD/DB = AE/EC.</div>
                <div class="point-item">AA Similarity: Two angles equal ➔ triangles similar.</div>
                <div class="point-item">SAS / SSS Criteria: Proportional side ratios and equal included angles.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex6-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #26C6DA; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80DEEA; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Fill in the blanks using the correct word given in brackets:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#26C6DA;">(i) All circles are _________. (congruent, similar)</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">similar</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(ii) All squares are _________. (similar, congruent)</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">similar</span></div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(iii) All _________ triangles are similar. (isosceles, equilateral)</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">equilateral</span></div>

                    <!-- Q1 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(iv) Two polygons of the same number of sides are similar, if (a) their corresponding angles are _________ and (b) their corresponding sides are _________. (equal, proportional)</b></div>
                    <div class="sol-step">Solution:- (a) <span class="ans-highlight">equal</span>, (b) <span class="ans-highlight">proportional</span></div>
                </div>
            </div>
        </div>
    `,
    "ex6-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #26C6DA; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80DEEA; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #26C6DA; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. In Fig. 6.17 (i) and (ii), DE || BC. Find EC in (i) and AD in (ii):</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#26C6DA;">(i) Triangle ABC with DE || BC (AD = 1.5 cm, DB = 3 cm, AE = 1 cm)</b></div>
                    <div class="svg-container">
                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <!-- Triangle ABC -->
                            <polygon points="100,20 30,130 170,130" fill="rgba(38,198,218,0.1)" stroke="#26C6DA" stroke-width="2"/>
                            <!-- DE parallel to BC -->
                            <line x1="55" y1="90" x2="145" y2="90" stroke="#FF5252" stroke-width="2"/>
                            <!-- Labels -->
                            <text x="100" y="15" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">A</text>
                            <text x="20" y="135" fill="#fff" font-size="12" font-weight="bold">B</text>
                            <text x="175" y="135" fill="#fff" font-size="12" font-weight="bold">C</text>
                            <text x="45" y="88" fill="#FF5252" font-size="11" font-weight="bold">D</text>
                            <text x="150" y="88" fill="#FF5252" font-size="11" font-weight="bold">E</text>
                            <!-- Dimension labels -->
                            <text x="65" y="55" fill="#80DEEA" font-size="10">1.5 cm</text>
                            <text x="35" y="115" fill="#80DEEA" font-size="10">3 cm</text>
                            <text x="130" y="55" fill="#80DEEA" font-size="10">1 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Since DE || BC, by Basic Proportionality Theorem (BPT):</div>
                    <div class="sol-step"><div class="frac"><span class="num">AD</span><span class="den">DB</span></div> = <div class="frac"><span class="num">AE</span><span class="den">EC</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">1.5</span><span class="den">3</span></div> = <div class="frac"><span class="num">1</span><span class="den">EC</span></div></div>
                    <div class="sol-step">1.5 &times; EC = 3 &times; 1</div>
                    <div class="sol-step">EC = <div class="frac"><span class="num">3</span><span class="den">1.5</span></div> = 2 cm</div>
                    <div class="sol-step"><span class="ans-highlight">EC = 2 cm</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#26C6DA;">(ii) Triangle ABC with DE || BC (DB = 7.2 cm, AE = 1.8 cm, EC = 5.4 cm)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By BPT: <div class="frac"><span class="num">AD</span><span class="den">DB</span></div> = <div class="frac"><span class="num">AE</span><span class="den">EC</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">AD</span><span class="den">7.2</span></div> = <div class="frac"><span class="num">1.8</span><span class="den">5.4</span></div> = <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                    <div class="sol-step">AD = <div class="frac"><span class="num">7.2</span><span class="den">3</span></div> = 2.4 cm</div>
                    <div class="sol-step"><span class="ans-highlight">AD = 2.4 cm</span></div>
                </div>
            </div>
        </div>
    `,
    "ex6-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #26C6DA; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80DEEA; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. State which pairs of triangles in Fig. 6.34 are similar. Write the similarity criterion used by you for answering the question and also write the pairs of similar triangles in the symbolic form:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#26C6DA;">(i) In &Delta;ABC and &Delta;PQR: &ang;A = 60&deg;, &ang;B = 80&deg;, &ang;C = 40&deg; and &ang;P = 60&deg;, &ang;Q = 80&deg;, &ang;R = 40&deg;</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">&ang;A = &ang;P = 60&deg;</div>
                    <div class="sol-step">&ang;B = &ang;Q = 80&deg;</div>
                    <div class="sol-step">&ang;C = &ang;R = 40&deg;</div>
                    <div class="sol-step">By AAA similarity criterion:</div>
                    <div class="sol-step"><span class="ans-highlight">&Delta;ABC &sim; &Delta;PQR</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m6-mcq-1", question: "All circles are:", options: ["Congruent", "Similar", "Equal", "None of these"], correctAnswer: "b", explanation: "All circles have the same shape regardless of radius." },
    { id: "c10m6-mcq-2", question: "If in △ABC and △DEF, AB/DE = BC/FD, then they will be similar, when:", options: ["∠B = ∠E", "∠A = ∠D", "∠B = ∠D", "∠A = ∠F"], correctAnswer: "c", explanation: "The included angle between sides AB, BC is ∠B and between DE, FD is ∠D. So ∠B = ∠D." },
    { id: "c10m6-mcq-3", question: "If △ABC ~ △PQR with AB/PQ = 1/3, then area(△ABC)/area(△PQR) is:", options: ["1/3", "1/9", "1/6", "9"], correctAnswer: "b", explanation: "Ratio of areas of similar triangles = (ratio of corresponding sides)² = (1/3)² = 1/9." },
    { id: "c10m6-mcq-4", question: "In △ABC, DE || BC such that AD = 3 cm, DB = 5 cm, AE = 6 cm. Then EC is:", options: ["10 cm", "9 cm", "8 cm", "12 cm"], correctAnswer: "a", explanation: "By BPT: AD/DB = AE/EC ➔ 3/5 = 6/EC ➔ EC = 10 cm." },
    { id: "c10m6-mcq-5", question: "Which of the following is NOT a criterion for similarity of triangles?", options: ["AAA", "SAS", "SSS", "RHS"], correctAnswer: "d", explanation: "RHS is a congruence criterion, not a general similarity criterion." },
    { id: "c10m6-mcq-6", question: "The line drawn parallel to one side of a triangle divides the other two sides in:", options: ["Same ratio", "Different ratio", "Equal areas", "None of these"], correctAnswer: "a", explanation: "Basic Proportionality Theorem (BPT) states that the sides are divided in the same ratio." },
    { id: "c10m6-mcq-7", question: "If △ABC ~ △DEF and ∠A = 47°, ∠E = 83°, then ∠C is:", options: ["50°", "60°", "70°", "80°"], correctAnswer: "a", explanation: "∠B = ∠E = 83°. ∠C = 180° - (47° + 83°) = 180° - 130° = 50°." },
    { id: "c10m6-mcq-8", question: "The ratio of the perimeters of two similar triangles is equal to the ratio of their:", options: ["Corresponding sides", "Square of sides", "Square root of sides", "None of these"], correctAnswer: "a", explanation: "Perimeter ratio of similar triangles equals the side ratio." },
    { id: "c10m6-mcq-9", question: "If D, E are mid-points of AB and AC of △ABC, then DE is parallel to BC and DE =:", options: ["1/2 BC", "1/3 BC", "BC", "2 BC"], correctAnswer: "a", explanation: "Mid-point theorem states DE || BC and DE = 1/2 BC." },
    { id: "c10m6-mcq-10", question: "Two isosceles triangles have equal vertical angles and their areas are in ratio 16 : 25. The ratio of their corresponding heights is:", options: ["4 : 5", "5 : 4", "16 : 25", "25 : 16"], correctAnswer: "a", explanation: "Ratio of heights = √(Area ratio) = √(16/25) = 4/5 = 4 : 5." }
  ]
};
