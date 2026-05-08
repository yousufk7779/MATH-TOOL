import { ChapterContent } from "../types";

export const c9Math7: ChapterContent = {
  id: "c9-math-7",
  number: 7,
  title: "Quadrilaterals",
  isHtmlView: true,
  introduction: "In this chapter, we study the properties of quadrilaterals, specifically parallelograms, and the Mid-point Theorem. We explore the conditions that make a quadrilateral a parallelogram, rectangle, rhombus, or square.",
  exercises: [
    { id: "ex7-1", name: "Exercise 7.1", questions: [] },
    { id: "ex7-2", name: "Exercise 7.2", questions: [] }
  ],
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF8A65; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF8A65; padding-left: 15px; margin-top: 15px; background: rgba(255, 138, 101, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF8A65 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF8A65 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 138, 101, 0.05) !important; border-left: 4px solid #FF8A65 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF8A65 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF8A65 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF8A65 !important; font-weight: 700; }
        strong { color: #FF8A65 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF8A65; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="ch-content">
      <h2>Chapter Overview</h2>
      <div class="step">A <span class="highlight">Quadrilateral</span> is a polygon with four sides, four angles, and four vertices.</div>
      <div class="step">The sum of the angles of a quadrilateral is <span class="highlight">360Â°</span>.</div>
      
      <h3>Types of Quadrilaterals:</h3>
      <div class="step">1. <strong>Parallelogram:</strong> Opposite sides are parallel and equal. Diagonals bisect each other.</div>
      <div class="step">2. <strong>Rectangle:</strong> A parallelogram with one angle of 90Â°. Diagonals are equal.</div>
      <div class="step">3. <strong>Rhombus:</strong> A parallelogram with all sides equal. Diagonals bisect at 90Â°.</div>
      <div class="step">4. <strong>Square:</strong> A parallelogram with all sides equal and each angle 90Â°.</div>
      <div class="step">5. <strong>Trapezium:</strong> Only one pair of opposite sides is parallel.</div>
      
      <h3>Important Theorems:</h3>
      <div class="step">1. <strong>Mid-point Theorem:</strong> The line segment joining the mid-points of two sides of a triangle is parallel to the third side and half of it.</div>
      <div class="step">2. A diagonal of a parallelogram divides it into two congruent triangles.</div>
    </div>
`,
  htmlExercises: {
    "ex7-1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF8A65; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF8A65; padding-left: 15px; margin-top: 15px; background: rgba(255, 138, 101, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF8A65 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF8A65 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 138, 101, 0.05) !important; border-left: 4px solid #FF8A65 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF8A65 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF8A65 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF8A65 !important; font-weight: 700; }
        strong { color: #FF8A65 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF8A65; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="ch-content">
        <div class="question">1. The angles of a quadrilateral are in the ratio 3 : 5 : 9 : 13. Find all the angles of the quadrilateral.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let the angles be 3x, 5x, 9x, and 13x.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Sum of angles = 360&deg; &rArr; 3x + 5x + 9x + 13x = 360&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> 30x = 360&deg; &rArr; x = 12&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Angle 1 = 3 &times; 12 = 36&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Angle 2 = 5 &times; 12 = 60&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> Angle 3 = 9 &times; 12 = 108&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 7:</span> Angle 4 = 13 &times; 12 = 156&deg;.</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> The angles are 36&deg;, 60&deg;, 108&deg;, and 156&deg;.</div>
        </div>

        <div class="question">2. If the diagonals of a parallelogram are equal, then show that it is a rectangle.</div>
        <svg viewBox="0 0 240 140" class="ex-img">
          <path d="M40,110 L180,110 L200,40 L60,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="110" x2="200" y2="40" stroke="#FB8C00" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="60" y1="40" x2="180" y2="110" stroke="#FB8C00" stroke-width="1.5" stroke-dasharray="5,3"/>
          <text x="25" y="125" font-size="14">A</text>
          <text x="185" y="125" font-size="14">B</text>
          <text x="205" y="35" font-size="14">C</text>
          <text x="45" y="35" font-size="14">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABC and &Delta;DCB, BC = BC (Common).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> AC = DB (Given diagonals are equal).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> AB = DC (Opposite sides of parallelogram).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By SSS Rule, &Delta;ABC &cong; &Delta;DCB.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Thus, &ang;ABC = &ang;DCB (by CPCT).</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> &ang;ABC + &ang;DCB = 180&deg; (Co-interior angles since AB || DC).</div>
          <div class="sol-step"><span class="highlight">Step 7:</span> 2 &ang;ABC = 180&deg; &rArr; &ang;ABC = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> A parallelogram with one angle 90&deg; is a rectangle.</div>
        </div>

        <div class="question">3. Show that if the diagonals of a quadrilateral bisect each other at right angles, then it is a rhombus.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,20 L40,90 L120,160 L200,90 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="90" x2="200" y2="90" stroke="#FB8C00" stroke-width="2"/>
          <line x1="120" y1="20" x2="120" y2="160" stroke="#FB8C00" stroke-width="2"/>
          <text x="115" y="15" font-size="14">A</text>
          <text x="25" y="95" font-size="14">B</text>
          <text x="115" y="175" font-size="14">C</text>
          <text x="205" y="95" font-size="14">D</text>
          <text x="125" y="85" font-size="14" fill="#FB8C00">O</text>
          <rect x="120" y="90" width="10" height="10" fill="none" stroke="#FB8C00" stroke-width="1"/>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;AOB and &Delta;AOD, AO = AO (Common).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> OB = OD (Given diagonals bisect each other).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;AOB = &ang;AOD = 90&deg; (Given perpendicular).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By SAS Rule, &Delta;AOB &cong; &Delta;AOD.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Thus, AB = AD (by CPCT).</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> Similarly, AB = BC = CD = DA.</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> A quadrilateral with all sides equal is a rhombus.</div>
        </div>

        <div class="question">4. Show that the diagonals of a square are equal and bisect each other at right angles.</div>
        <svg viewBox="0 0 200 180" class="ex-img">
          <rect x="50" y="30" width="100" height="100" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="50" y1="30" x2="150" y2="130" stroke="#FB8C00" stroke-width="1.5"/>
          <line x1="150" y1="30" x2="50" y2="130" stroke="#FB8C00" stroke-width="1.5"/>
          <text x="35" y="145" font-size="14">A</text>
          <text x="155" y="145" font-size="14">B</text>
          <text x="155" y="25" font-size="14">C</text>
          <text x="35" y="25" font-size="14">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let ABCD be a square. In &Delta;ABC and &Delta;BAD, AB = AB (Common).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> BC = AD (Sides of square) and &ang;ABC = &ang;BAD = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> By SAS, &Delta;ABC &cong; &Delta;BAD &rArr; AC = BD (Diagonals equal).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> To show 90&deg;: In &Delta;AOB and &Delta;AOD, OA=OA, AB=AD, OB=OD.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> By SSS, &Delta;AOB &cong; &Delta;AOD &rArr; &ang;AOB = &ang;AOD.</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> Since &ang;AOB + &ang;AOD = 180&deg;, each is 90&deg;.</div>
        </div>

        <div class="question">5. Show that if the diagonals of a quadrilateral are equal and bisect each other at right angles, then it is a square.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Diagonals bisect each other &rArr; it is a parallelogram.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Diagonals bisect at 90&deg; &rArr; it is a rhombus (all sides equal).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Diagonals are equal &rArr; it is a rectangle (one angle 90&deg;).</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> A rhombus that is also a rectangle is a square.</div>
        </div>

        <div class="question">6. Diagonal AC of a parallelogram     ABCD bisects &ang;A. Show that </br> (i) it bisects &ang;C also, </br>(ii) ABCD is a rhombus.</div>
        <svg viewBox="0 0 240 140" class="ex-img">
          <path d="M40,110 L180,110 L200,40 L60,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="110" x2="200" y2="40" stroke="#FB8C00" stroke-width="2.5"/>
          <text x="25" y="125" font-size="14">A</text>
          <text x="185" y="125" font-size="14">B</text>
          <text x="205" y="35" font-size="14">C</text>
          <text x="45" y="35" font-size="14">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> AB || DC &rArr; &ang;BAC = &ang;DCA (Alt. Int. Angles).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> AD || BC &rArr; &ang;DAC = &ang;BCA (Alt. Int. Angles).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Given &ang;BAC = &ang;DAC &rArr; &ang;DCA = &ang;BCA.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (i) Thus AC bisects &ang;C also.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> (ii) From above, &ang;DAC = &ang;DCA &rArr; AD = DC (Isosceles triangle property).</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> Since adjacent sides of parallelogram are equal, ABCD is a rhombus.</div>
        </div>

        <div class="question">7. ABCD is a rhombus. Show that diagonal AC bisects &ang;A as well as &ang;C and diagonal BD bisects &ang;B as well as &ang;D.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABC, AB = BC (Sides of rhombus).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;BAC = &ang;BCA (Angles opposite to equal sides).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> AB || DC &rArr; &ang;BAC = &ang;DCA (Alt. Int. Angles).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Thus, &ang;BCA = &ang;DCA, so AC bisects &ang;C.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Similarly, AC bisects &ang;A and BD bisects &ang;B and &ang;D.</div>
        </div>

        <div class="question">8. ABCD is a rectangle in which diagonal AC bisects &ang;A as well as &ang;C. Show that: </br>(i) ABCD is a square </br>(ii) diagonal BD bisects &ang;B as well as &ang;D.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> &ang;A = &ang;C = 90&deg;. Bisected parts are 45&deg; each.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;ABC, &ang;BAC = &ang;BCA = 45&deg; &rArr; AB = BC.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Since adjacent sides of rectangle are equal, ABCD is a square.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (ii) In square, diagonals bisect the angles, so BD bisects &ang;B and &ang;D.</div>
        </div>

        <div class="question">9. In parallelogram ABCD, two points P and Q are taken on diagonal BD such that DP = BQ (see Fig. 7.20). Show that: </br> (i) &Delta;APD &cong; &Delta;CQB </br>(ii) AP = CQ </br> (iii) &Delta;AQB &cong; &Delta;CPD </br> (iv) AQ = CP  </br>(v) APCQ is a parallelogram.</div>
        <svg viewBox="0 0 240 150" class="ex-img">
          <path d="M60,40 L40,110 L180,110 L200,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="110" x2="200" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/>
          <path d="M60,40 L172.5,52 L180,110 L67.5,98 Z" fill="none" stroke="#FB8C00" stroke-width="2"/>
          <text x="50" y="35" font-size="14">A</text>
          <text x="25" y="125" font-size="14">B</text>
          <text x="185" y="125" font-size="14">C</text>
          <text x="205" y="35" font-size="14">D</text>
          <text x="175" y="48" font-size="14" fill="#FB8C00">P</text>
          <text x="55" y="102" font-size="14" fill="#FB8C00">Q</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> (i) In &Delta;APD and &Delta;CQB, AD = BC (Opp. sides of parallelogram), &ang;ADP = &ang;CBQ (Alt. Interior angles), and DP = BQ (Given). By SAS, &Delta;APD &cong; &Delta;CQB.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> (ii) AP = CQ (by CPCT).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> (iii) In &Delta;AQB and &Delta;CPD, AB = CD, &ang;ABQ = &ang;CDP, BQ = DP. By SAS, &Delta;AQB &cong; &Delta;CPD.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (iv) AQ = CP (by CPCT).</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> (v) In quadrilateral APCQ, opposite sides are equal (AP=CQ and AQ=CP). Therefore, APCQ is a parallelogram.</div>
        </div>

        <div class="question">10. ABCD is a parallelogram and AP and CQ are perpendiculars from vertices A and C on diagonal BD (see Fig. 7.21). Show that: </br> (i) &Delta;APB &cong; &Delta;CQD </br> (ii) AP = CQ.</div>
        <svg viewBox="0 0 240 150" class="ex-img">
          <path d="M60,40 L40,110 L180,110 L200,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="110" x2="200" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="60" y1="40" x2="82" y2="91" stroke="#FB8C00" stroke-width="2" stroke-dasharray="3,2"/>
          <line x1="180" y1="110" x2="157" y2="58" stroke="#FB8C00" stroke-width="2" stroke-dasharray="3,2"/>
          <text x="50" y="35" font-size="14">A</text>
          <text x="25" y="125" font-size="14">B</text>
          <text x="185" y="125" font-size="14">C</text>
          <text x="205" y="35" font-size="14">D</text>
          <text x="70" y="105" font-size="14" fill="#FB8C00">P</text>
          <text x="165" y="50" font-size="14" fill="#FB8C00">Q</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> (i) In &Delta;APB and &Delta;CQD, &ang;APB = &ang;CQD = 90&deg; (Given), AB = CD (Opp. sides), and &ang;ABP = &ang;CDQ (Alt. Int. angles). By AAS Rule, &Delta;APB &cong; &Delta;CQD.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> (ii) Thus, AP = CQ (by CPCT).</div>
        </div>

        <div class="question">11. In &Delta;ABC and &Delta;DEF, AB = DE, AB || DE, BC = EF and BC || EF. Vertices A, B and C are joined to vertices D, E and F respectively (see Fig. 7.22). Show that: </br> (i) quad. ABED is a parallelogram </br>(ii) quad. BEFC is a parallelogram </br>(iii) AD || CF and AD = CF </br> (iv) quad. ACFD is a parallelogram </br> (v) AC = DF </br> (vi) &Delta;ABC &cong; &Delta;DEF.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M60,40 L20,110 L100,110 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M160,60 L120,130 L200,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="40" x2="160" y2="60" stroke="#FB8C00" stroke-width="1.5" stroke-dasharray="4,2"/>
          <line x1="20" y1="110" x2="120" y2="130" stroke="#FB8C00" stroke-width="1.5" stroke-dasharray="4,2"/>
          <line x1="100" y1="110" x2="200" y2="130" stroke="#FB8C00" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="55" y="35" font-size="14">A</text>
          <text x="5" y="115" font-size="14">B</text>
          <text x="105" y="115" font-size="14">C</text>
          <text x="165" y="55" font-size="14">D</text>
          <text x="110" y="145" font-size="14">E</text>
          <text x="205" y="145" font-size="14">F</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> (i) In quad. ABED, AB = DE and AB || DE (Given). A quadrilateral with one pair of opposite sides equal and parallel is a parallelogram.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> (ii) In quad. BEFC, BC = EF and BC || EF (Given). Thus, BEFC is a parallelogram.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> (iii) From (i), AD || BE and AD = BE. From (ii), CF || BE and CF = BE. Thus, AD || CF and AD = CF.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (iv) Since AD || CF and AD = CF, quadrilateral ACFD is a parallelogram.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> (v) AC = DF (Opposite sides of parallelogram ACFD).</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> (vi) In &Delta;ABC and &Delta;DEF, AB = DE, BC = EF, and AC = DF. By SSS Rule, &Delta;ABC &cong; &Delta;DEF.</div>
        </div>
      </div>
`,
    "ex7-2": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF8A65; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF8A65; padding-left: 15px; margin-top: 15px; background: rgba(255, 138, 101, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF8A65 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF8A65 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 138, 101, 0.05) !important; border-left: 4px solid #FF8A65 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF8A65 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF8A65 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF8A65 !important; font-weight: 700; }
        strong { color: #FF8A65 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF8A65; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="ch-content">
        <div class="question">1. ABCD is a quadrilateral in which P, Q, R and S are mid-points of the sides AB, BC, CD and DA. AC is a diagonal. Show that : </br> (i) SR || AC and SR = 1/2 AC </br> (ii) PQ = SR  </br>(iii) PQRS is a parallelogram.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M40,140 L100,20 L200,40 L180,160 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="140" x2="200" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/>
          <path d="M70,80 L150,30 L190,100 L110,150 Z" fill="none" stroke="#FB8C00" stroke-width="2"/>
          <text x="25" y="155" font-size="14">A</text>
          <text x="95" y="15" font-size="14">D</text>
          <text x="205" y="35" font-size="14">C</text>
          <text x="185" y="175" font-size="14">B</text>
          <text x="145" y="25" font-size="14" fill="#FB8C00">R</text>
          <text x="55" y="75" font-size="14" fill="#FB8C00">S</text>
          <text x="100" y="165" font-size="14" fill="#FB8C00">P</text>
          <text x="195" y="105" font-size="14" fill="#FB8C00">Q</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> (i) In &Delta;ADC, S and R are mid-points of AD and DC.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> By Mid-point Theorem, SR || AC and SR = 1/2 AC.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> (ii) In &Delta;ABC, P and Q are mid-points of AB and BC.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By Mid-point Theorem, PQ || AC and PQ = 1/2 AC.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Thus, PQ = SR.</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> (iii) Since PQ || AC and SR || AC, PQ || SR.</div>
          <div class="sol-step"><span class="highlight">Step 7:</span> Since PQ || SR and PQ = SR, PQRS is a parallelogram.</div>
        </div>

        <div class="question">2. ABCD is a rhombus and P, Q, R and S are the mid-points of the sides AB, BC, CD and DA respectively. Show that the quadrilateral PQRS is a rectangle.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> By Mid-point theorem (as in Q1), PQRS is a parallelogram.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Diagonals of rhombus ABCD intersect at 90&deg;. Let them meet at O.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> PQ || AC and QR || BD.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Since AC &perp; BD, the lines parallel to them (PQ and QR) are also &perp;.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Hence &ang;PQR = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> A parallelogram with one angle 90&deg; is a rectangle.</div>
        </div>

        <div class="question">3. ABCD is a rectangle and P, Q, R and S are mid-points of the sides AB, BC, CD and DA respectively. Show that the quadrilateral PQRS is a rhombus.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> By Mid-point theorem, PQRS is a parallelogram.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> PQ = 1/2 AC and QR = 1/2 BD.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> In rectangle ABCD, diagonals are equal &rArr; AC = BD.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Thus, 1/2 AC = 1/2 BD &rArr; PQ = QR.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Since adjacent sides of parallelogram PQRS are equal, it is a rhombus.</div>
        </div>

        <div class="question">4. ABCD is a trapezium in which AB || DC, BD is a diagonal and E is the mid-point of AD. A line is drawn through E parallel to AB intersecting BC at F. Show that F is the mid-point of BC.</div>
        <svg viewBox="0 0 240 140" class="ex-img">
          <path d="M40,110 L200,110 L160,40 L80,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="80" y1="40" x2="200" y2="110" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="60" y1="75" x2="180" y2="75" stroke="#FB8C00" stroke-width="2.5"/>
          <text x="25" y="125" font-size="14">A</text>
          <text x="205" y="125" font-size="14">B</text>
          <text x="165" y="35" font-size="14">C</text>
          <text x="70" y="35" font-size="14">D</text>
          <text x="45" y="80" font-size="14" fill="#FB8C00">E</text>
          <text x="185" y="80" font-size="14" fill="#FB8C00">F</text>
          <text x="140" y="95" font-size="14" fill="#FB8C00">G</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let diagonal BD intersect EF at G. In &Delta;ABD, E is mid-point of AD and EG || AB.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> By Converse of Mid-point Theorem, G is the mid-point of BD.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> In &Delta;BCD, G is mid-point of BD and GF || DC (since EF || AB || DC).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By Converse of Mid-point Theorem, F is the mid-point of BC.</div>
        </div>

        <div class="question">5. In a parallelogram ABCD, E and F are the mid-points of sides AB and CD respectively. Show that the line segments AF and EC trisect the diagonal BD.</div>
        <svg viewBox="0 0 240 140" class="ex-img">
          <path d="M40,110 L180,110 L200,40 L60,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="40" x2="180" y2="110" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="40" y1="110" x2="130" y2="40" stroke="#FB8C00" stroke-width="2"/>
          <line x1="110" y1="110" x2="200" y2="40" stroke="#FB8C00" stroke-width="2"/>
          <text x="25" y="125" font-size="14">A</text>
          <text x="185" y="125" font-size="14">B</text>
          <text x="205" y="35" font-size="14">C</text>
          <text x="45" y="35" font-size="14">D</text>
          <text x="100" y="125" font-size="14" fill="#FB8C00">E</text>
          <text x="120" y="35" font-size="14" fill="#FB8C00">F</text>
          <text x="100" y="65" font-size="14" fill="#FB8C00">P</text>
          <text x="140" y="90" font-size="14" fill="#FB8C00">Q</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> AE = FC and AE || FC, so AECF is a parallelogram &rArr; AF || EC.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;DQC, F is mid-point of DC and FP || CQ &rArr; P is mid-point of DQ &rArr; DP = PQ.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> In &Delta;ABP, E is mid-point of AB and EQ || AP &rArr; Q is mid-point of BP &rArr; PQ = QB.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Thus, DP = PQ = QB.</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> AF and EC trisect the diagonal BD.</div>
        </div>

        <div class="question">6. Show that the line segments joining the mid-points of the opposite sides of a quadrilateral bisect each other.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let P, Q, R, S be mid-points of sides AB, BC, CD, DA.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> By Mid-point theorem (as in Q1), PQRS is a parallelogram.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> The line segments joining opposite mid-points of the quadrilateral are the diagonals of parallelogram PQRS.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Diagonals of a parallelogram bisect each other.</div>
        </div>

        <div class="question">7. ABC is a triangle right angled at C. A line through the mid-point M of hypotenuse AB and parallel to BC intersects AC at D. Show that </br> (i) D is the mid-point of AC </br> (ii) MD &perp; AC </br> (iii) CM = MA = 1/2 AB.</div>
        <svg viewBox="0 0 200 160" class="ex-img">
          <path d="M60,30 L60,130 L160,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="110" y1="80" x2="110" y2="130" stroke="#FB8C00" stroke-width="2.5"/>
          <text x="55" y="25" font-size="14">B</text>
          <text x="55" y="145" font-size="14">C</text>
          <text x="165" y="145" font-size="14">A</text>
          <text x="110" y="75" font-size="14" fill="#FB8C00">M</text>
          <text x="105" y="145" font-size="14" fill="#FB8C00">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> (i) In &Delta;ABC, M is mid-point of AB and MD || BC. By Converse Mid-point Theorem, D is mid-point of AC.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> (ii) MD || BC and AC is transversal &rArr; &ang;ADM = &ang;ACB = 90&deg;. So MD &perp; AC.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> (iii) In &Delta;ADM and &Delta;CDM, AD=CD, MD=MD, &ang;ADM=&ang;CDM=90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By SAS, &Delta;ADM &cong; &Delta;CDM &rArr; CM = MA.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Since M is mid-point of AB, MA = 1/2 AB. So CM = MA = 1/2 AB.</div>
        </div>
      </div>
`
  },
  mcqs: [
    { id: "m1", question: "The sum of all angles of a quadrilateral is:", options: ["180Â°", "270Â°", "360Â°", "400Â°"], correctAnswer: "C" },
    { id: "m2", question: "If the diagonals of a quadrilateral bisect each other, then it is a:", options: ["Trapezium", "Parallelogram", "Kite", "None"], correctAnswer: "B" },
    { id: "m3", question: "A quadrilateral with all sides equal and one angle 90Â° is a:", options: ["Rhombus", "Rectangle", "Square", "Trapezium"], correctAnswer: "C" },
    { id: "m4", question: "The diagonals of a rhombus bisect each other at:", options: ["30Â°", "45Â°", "60Â°", "90Â°"], correctAnswer: "D" },
    { id: "m5", question: "If three angles of a quadrilateral are 75Â°, 90Â°, and 75Â°, the fourth angle is:", options: ["90Â°", "95Â°", "105Â°", "120Â°"], correctAnswer: "D" },
    { id: "m6", question: "The line joining the mid-points of two sides of a triangle is:", options: ["Parallel to third side", "Half of third side", "Both A and B", "None"], correctAnswer: "C" },
    { id: "m7", question: "Diagonals of which quadrilateral are always equal?", options: ["Parallelogram", "Rhombus", "Rectangle", "Trapezium"], correctAnswer: "C" },
    { id: "m8", question: "A diagonal of a parallelogram divides it into two:", options: ["Similar triangles", "Congruent triangles", "Equilateral triangles", "Right triangles"], correctAnswer: "B" },
    { id: "m9", question: "In a parallelogram ABCD, if âˆ A = 100Â°, then âˆ B is:", options: ["80Â°", "100Â°", "90Â°", "180Â°"], correctAnswer: "A" },
    { id: "m10", question: "Every square is a:", options: ["Rhombus", "Rectangle", "Parallelogram", "All of these"], correctAnswer: "D" }
  ]
};
