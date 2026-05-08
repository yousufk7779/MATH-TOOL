import { ChapterContent } from "../types";

export const c9Math6: ChapterContent = {
  id: "c9-math-6",
  number: 6,
  title: "Triangles",
  isHtmlView: true,
  introduction: "In this chapter, we explore the properties of triangles, specifically the congruence of triangles (SAS, ASA, SSS, RHS) and the inequalities in a triangle. Understanding these rules helps in proving geometric relationships accurately.",
  exercises: [
    { id: "ex6-1", name: "Exercise 6.1", questions: [] },
    { id: "ex6-2", name: "Exercise 6.2", questions: [] },
    { id: "ex6-3", name: "Exercise 6.3", questions: [] },
    { id: "ex6-4", name: "Exercise 6.4", questions: [] }
  ],
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #81C784; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #81C784; padding-left: 15px; margin-top: 15px; background: rgba(129, 199, 132, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #81C784 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #81C784 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(129, 199, 132, 0.05) !important; border-left: 4px solid #81C784 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #81C784 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #81C784 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #81C784 !important; font-weight: 700; }
        strong { color: #81C784 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #81C784; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="ch-content">
      <h2>Chapter Overview</h2>
      <div class="step">A triangle is a closed shape with three sides and three angles.</div>
      <div class="step">This chapter focuses on the <span class="highlight">Congruence of Triangles</span>.</div>
      <div class="step">Two triangles are congruent if they are identical in shape and size.</div>
      
      <h3>Criteria for Congruence:</h3>
      <div class="step">1. <strong>SAS (Side-Angle-Side):</strong> Two sides and the included angle are equal.</div>
      <div class="step">2. <strong>ASA (Angle-Side-Angle):</strong> Two angles and the included side are equal.</div>
      <div class="step">3. <strong>SSS (Side-Side-Side):</strong> All three sides are equal.</div>
      <div class="step">4. <strong>RHS (Right Angle-Hypotenuse-Side):</strong> In right triangles, the hypotenuse and one side are equal.</div>
    </div>
`,
  htmlExercises: {
    "ex6-1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #81C784; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #81C784; padding-left: 15px; margin-top: 15px; background: rgba(129, 199, 132, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #81C784 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #81C784 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(129, 199, 132, 0.05) !important; border-left: 4px solid #81C784 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #81C784 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #81C784 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #81C784 !important; font-weight: 700; }
        strong { color: #81C784 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #81C784; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="ch-content">
        <div class="question">1. In quadrilateral ACBD, AC = AD and AB bisects &ang;A. Show that &Delta;ABC &cong; &Delta;ABD. What can you say about BC and BD?</div>
        <svg viewBox="0 0 240 140" class="ex-img">
          <path d="M40,70 L120,20 L200,70 L120,120 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="70" x2="200" y2="70" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="15" y="75" font-size="14">A</text>
          <text x="115" y="15" font-size="14">C</text>
          <text x="210" y="75" font-size="14">B</text>
          <text x="115" y="138" font-size="14">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABC and &Delta;ABD, given AC = AD.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;CAB = &ang;DAB because AB bisects &ang;A.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> AB = AB (Common side for both triangles).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By SAS Rule, &Delta;ABC &cong; &Delta;ABD.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Therefore, BC = BD by CPCT rule.</div>
        </div>

        <div class="question">2. ABCD is a quadrilateral in which AD = BC and &ang;DAB = &ang;CBA. Prove that: (i) &Delta;ABD &cong; &Delta;BAC (ii) BD = AC (iii) &ang;ABD = &ang;BAC.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <path d="M50,130 L70,40 L170,40 L190,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="50" y1="130" x2="170" y2="40" stroke="#FF6CAB" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="70" y1="40" x2="190" y2="130" stroke="#FF6CAB" stroke-width="1.5" stroke-dasharray="5,3"/>
          <text x="30" y="145" font-size="14">A</text>
          <text x="195" y="145" font-size="14">B</text>
          <text x="175" y="30" font-size="14">C</text>
          <text x="55" y="30" font-size="14">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABD and &Delta;BAC, AD = BC (Given).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;DAB = &ang;CBA (Given).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> AB = AB (Common side).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (i) By SAS Rule, &Delta;ABD &cong; &Delta;BAC.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> (ii) BD = AC (by CPCT).</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> (iii) &ang;ABD = &ang;BAC (by CPCT).</div>
        </div>

        <div class="question">3. AD and BC are equal perpendiculars to a line segment AB. Show that CD bisects AB.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <line x1="120" y1="30" x2="120" y2="130" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="30" x2="120" y2="30" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="130" x2="200" y2="130" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="30" x2="200" y2="130" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="125" y="25" font-size="14">B</text>
          <text x="125" y="145" font-size="14">A</text>
          <text x="25" y="30" font-size="14">C</text>
          <text x="205" y="145" font-size="14">D</text>
          <text x="100" y="85" font-size="14" fill="#FF6CAB">O</text>
          <rect x="110" y="30" width="10" height="10" fill="none" stroke="white" stroke-width="1"/>
          <rect x="120" y="120" width="10" height="10" fill="none" stroke="white" stroke-width="1"/>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;OBC and &Delta;OAD, &ang;BOC = &ang;AOD (Vertically opposite).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;OBC = &ang;OAD = 90&deg; (Given perpendiculars).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> BC = AD (Given).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By AAS Rule, &Delta;OBC &cong; &Delta;OAD.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Thus, OB = OA (CPCT), so CD bisects AB.</div>
        </div>

        <div class="question">4. l and m are two parallel lines intersected by another pair of parallel lines p and q. Show that &Delta;ABC &cong; &Delta;CDA.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <line x1="30" y1="50" x2="210" y2="50" stroke="white" stroke-width="1.5"/>
          <line x1="30" y1="110" x2="210" y2="110" stroke="white" stroke-width="1.5"/>
          <line x1="80" y1="20" x2="40" y2="140" stroke="white" stroke-width="1.5"/>
          <line x1="180" y1="20" x2="140" y2="140" stroke="white" stroke-width="1.5"/>
          <line x1="170" y1="50" x2="50" y2="110" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="215" y="55" font-size="14">l</text>
          <text x="215" y="115" font-size="14">m</text>
          <text x="85" y="15" font-size="14">p</text>
          <text x="185" y="15" font-size="14">q</text>
          <text x="60" y="45" font-size="14">D</text>
          <text x="165" y="45" font-size="14">A</text>
          <text x="40" y="125" font-size="14">C</text>
          <text x="145" y="125" font-size="14">B</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> AC is a transversal for l || m &rarr; &ang;DAC = &ang;BCA.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> AC is a transversal for p || q &rarr; &ang;BAC = &ang;DCA.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> In &Delta;ABC and &Delta;CDA, AC = AC (Common side).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By ASA Rule, &Delta;ABC &cong; &Delta;CDA.</div>
        </div>

        <div class="question">5. Line l is the bisector of an angle &ang;A and B is any point on l. BP and BQ are perpendiculars from B to the arms of &ang;A. Show that: (i) &Delta;APB &cong; &Delta;AQB (ii) BP = BQ.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <line x1="30" y1="130" x2="210" y2="130" stroke="white" stroke-width="2.5"/>
          <line x1="30" y1="130" x2="170" y2="30" stroke="white" stroke-width="2.5"/>
          <line x1="30" y1="130" x2="210" y2="50" stroke="#FF6CAB" stroke-width="2.5"/>
          <line x1="160" y1="130" x2="160" y2="72" stroke="white" stroke-width="1.5" stroke-dasharray="3"/>
          <line x1="144" y1="50" x2="160" y2="72" stroke="white" stroke-width="1.5" stroke-dasharray="3"/>
          <text x="10" y="140" font-size="14">A</text>
          <text x="165" y="65" font-size="14">B</text>
          <text x="155" y="148" font-size="14">P</text>
          <text x="135" y="45" font-size="14">Q</text>
          <text x="215" y="45" font-size="14">l</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;APB and &Delta;AQB, &ang;APB = &ang;AQB = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;PAB = &ang;QAB since line l bisects &ang;A.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> AB = AB (Common side).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (i) By AAS Rule, &Delta;APB &cong; &Delta;AQB.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> (ii) Thus, BP = BQ by CPCT rule.</div>
        </div>

        <div class="question">6. In Fig. 6.21, AC = AE, AB = AD and &ang;BAD = &ang;EAC. Show that BC = DE.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M50,150 L120,35 L40,45 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M50,150 L160,150 L120,35" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="160" y1="150" x2="40" y2="45" stroke="#FF6CAB" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="30" y="165" font-size="14">A</text>
          <text x="165" y="165" font-size="14">B</text>
          <text x="115" y="25" font-size="14">C</text>
          <text x="25" y="35" font-size="14">E</text>
          <text x="135" y="65" font-size="14" fill="#FF6CAB">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Given &ang;BAD = &ang;EAC. Add &ang;DAC to both sides.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;BAD + &ang;DAC = &ang;EAC + &ang;DAC &rArr; &ang;BAC = &ang;DAE.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> In &Delta;ABC and &Delta;ADE, AB = AD and AC = AE.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By SAS Rule, &Delta;ABC &cong; &Delta;ADE.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Therefore, BC = DE by CPCT rule.</div>
        </div>

        <div class="question">7. AB is a line segment and P is its mid-point. D and E are points on the same side of AB such that &ang;BAD = &ang;ABE and &ang;EPA = &ang;DPB. Show that: (i) &Delta;DAP &cong; &Delta;EBP (ii) AD = BE</div>
        <svg viewBox="0 0 240 140" class="ex-img">
          <line x1="40" y1="110" x2="200" y2="110" stroke="white" stroke-width="2.5"/>
          <path d="M40,110 L80,30 L120,110 L160,30 L200,110" fill="none" stroke="white" stroke-width="2.5"/>
          <text x="25" y="125" font-size="14">A</text>
          <text x="205" y="125" font-size="14">B</text>
          <text x="115" y="125" font-size="14" fill="#FF6CAB">P</text>
          <text x="70" y="25" font-size="14">D</text>
          <text x="165" y="25" font-size="14">E</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Given &ang;EPA = &ang;DPB. Add &ang;EPD to both &rarr; &ang;APD = &ang;BPE.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;DAP and &Delta;EBP, AP = BP (P is mid-point).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;PAD = &ang;PBE (Given).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (i) By ASA Rule, &Delta;DAP &cong; &Delta;EBP.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> (ii) Therefore, AD = BE by CPCT rule.</div>
        </div>

        <div class="question">8. In right triangle ABC, right angled at C, M is the mid-point of hypotenuse AB. C is joined to M and produced to a point D such that DM = CM. Point D is joined to point B. Show that: (i) &Delta;AMC &cong; &Delta;BMD (ii) &ang;DBC = 90&deg; (iii) &Delta;DBC &cong; &Delta;ACB (iv) CM = 1/2 AB</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M60,40 L60,140 L180,140 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="180" y1="140" x2="180" y2="40" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="140" x2="180" y2="40" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="60" y1="40" x2="180" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="185" y="155" font-size="14">B</text>
          <text x="45" y="155" font-size="14">C</text>
          <text x="185" y="35" font-size="14">D</text>
          <text x="45" y="35" font-size="14">A</text>
          <text x="125" y="95" font-size="14">M</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> (i) In &Delta;AMC and &Delta;BMD, AM=BM, CM=DM, and &ang;AMC=&ang;BMD (Vert. Opp.). By SAS, &Delta;AMC &cong; &Delta;BMD.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> (ii) &ang;ACM=&ang;BDM (CPCT) &rarr; BD||AC. So &ang;ACB+&ang;DBC=180&deg;. Since &ang;ACB=90&deg;, &ang;DBC=90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> (iii) In &Delta;DBC and &Delta;ACB, DB=AC (CPCT), &ang;DBC=&ang;ACB=90&deg;, BC=BC. By SAS, &Delta;DBC &cong; &Delta;ACB.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (iv) Since &Delta;DBC &cong; &Delta;ACB, CD=AB (CPCT). CM=1/2 CD, so CM=1/2 AB.</div>
        </div>
      </div>
`,
    "ex6-2": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #81C784; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #81C784; padding-left: 15px; margin-top: 15px; background: rgba(129, 199, 132, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #81C784 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #81C784 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(129, 199, 132, 0.05) !important; border-left: 4px solid #81C784 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #81C784 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #81C784 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #81C784 !important; font-weight: 700; }
        strong { color: #81C784 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #81C784; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="ch-content">
        <div class="question">1. In an isosceles triangle ABC, with AB = AC, the bisectors of &ang;B and &ang;C intersect each other at O. Join A to O. Show that: (i) OB = OC (ii) AO bisects &ang;A</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="120" y2="110" stroke="#FF6CAB" stroke-width="1.5"/>
          <line x1="180" y1="150" x2="120" y2="110" stroke="#FF6CAB" stroke-width="1.5"/>
          <line x1="120" y1="30" x2="120" y2="110" stroke="white" stroke-width="1" stroke-dasharray="4,2"/>
          <text x="115" y="25" font-size="14">A</text>
          <text x="45" y="165" font-size="14">B</text>
          <text x="185" y="165" font-size="14">C</text>
          <text x="125" y="105" font-size="14" fill="#FF6CAB">O</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABC, AB = AC &rarr; &ang;B = &ang;C. Thus 1/2 &ang;B = 1/2 &ang;C &rarr; &ang;OBC = &ang;OCB.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> (i) In &Delta;OBC, sides opposite to equal angles are equal &rarr; OB = OC.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> (ii) In &Delta;ABO and &Delta;ACO, AB=AC, OB=OC, AO=AO. By SSS, &Delta;ABO &cong; &Delta;ACO.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By CPCT, &ang;BAO = &ang;CAO, so AO bisects &ang;A.</div>
        </div>

        <div class="question">2. In &Delta;ABC, AD is the perpendicular bisector of BC. Show that &Delta;ABC is an isosceles triangle in which AB = AC.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <path d="M120,20 L60,130 L180,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="120" y2="130" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="115" y="15" font-size="14">A</text>
          <text x="45" y="145" font-size="14">B</text>
          <text x="185" y="145" font-size="14">C</text>
          <text x="125" y="145" font-size="14" fill="#FF6CAB">D</text>
          <rect x="120" y="120" width="10" height="10" fill="none" stroke="#FF6CAB" stroke-width="1"/>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABD and &Delta;ACD, AD = AD (Common side).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;ADB = &ang;ADC = 90&deg; (Given AD &perp; BC).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> BD = CD (Since AD bisects BC).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By SAS Rule, &Delta;ABD &cong; &Delta;ACD. Thus AB = AC by CPCT.</div>
        </div>

        <div class="question">3. ABC is an isosceles triangle in which altitudes BE and CF are drawn to equal sides AC and AB respectively. Show that these altitudes are equal.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="165" y2="115" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="180" y1="150" x2="75" y2="115" stroke="#FF6CAB" stroke-width="2"/>
          <text x="115" y="25" font-size="14">A</text>
          <text x="45" y="165" font-size="14">B</text>
          <text x="185" y="165" font-size="14">C</text>
          <text x="170" y="110" font-size="14" fill="#FF6CAB">E</text>
          <text x="50" y="110" font-size="14" fill="#FF6CAB">F</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABE and &Delta;ACF, &ang;AEB = &ang;AFC = 90&deg; (Altitudes).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;A = &ang;A (Common angle).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> AB = AC (Given).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By AAS Rule, &Delta;ABE &cong; &Delta;ACF. So BE = CF (CPCT).</div>
        </div>

        <div class="question">4. ABC is a triangle in which altitudes BE and CF to sides AC and AB are equal. Show that: (i) &Delta;ABE &cong; &Delta;ACF (ii) AB = AC.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="165" y2="115" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="180" y1="150" x2="75" y2="115" stroke="#FF6CAB" stroke-width="2"/>
          <text x="115" y="25" font-size="14">A</text>
          <text x="45" y="165" font-size="14">B</text>
          <text x="185" y="165" font-size="14">C</text>
          <text x="170" y="110" font-size="14" fill="#FF6CAB">E</text>
          <text x="50" y="110" font-size="14" fill="#FF6CAB">F</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABE and &Delta;ACF, &ang;AEB = &ang;AFC = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;A = &ang;A (Common angle) and BE = CF (Given).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> By AAS Rule, &Delta;ABE &cong; &Delta;ACF.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Therefore, AB = AC by CPCT rule.</div>
        </div>

        <div class="question">5. ABC and DBC are two isosceles triangles on the same base BC. Show that &ang;ABD = &ang;ACD.</div>
        <svg viewBox="0 0 240 200" class="ex-img">
          <path d="M60,100 L120,30 L180,100 L120,170 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="100" x2="180" y2="100" stroke="white" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="115" y="25" font-size="14">A</text>
          <text x="40" y="105" font-size="14">B</text>
          <text x="185" y="105" font-size="14">C</text>
          <text x="115" y="188" font-size="14" fill="#FF6CAB">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABC, AB = AC &rarr; &ang;ABC = &ang;ACB.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;DBC, DB = DC &rarr; &ang;DBC = &ang;DCB.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Adding both: &ang;ABC + &ang;DBC = &ang;ACB + &ang;DCB.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> This results in &ang;ABD = &ang;ACD.</div>
        </div>

        <div class="question">6. &Delta;ABC is an isosceles triangle in which AB = AC. Side BA is produced to D such that AD = AB. Show that &ang;BCD is a right angle.</div>
        <svg viewBox="0 0 200 240" class="ex-img">
          <path d="M50,210 L140,210 L140,50 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="140" y1="210" x2="95" y2="130" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="40" y="228" font-size="14">B</text>
          <text x="145" y="228" font-size="14">C</text>
          <text x="145" y="45" font-size="14">D</text>
          <text x="100" y="125" font-size="14" fill="#FF6CAB">A</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABC, AB=AC &rarr; &ang;ABC=&ang;ACB. In &Delta;ACD, AC=AD &rarr; &ang;ACD=&ang;ADC.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;BCD, &ang;ABC+&ang;BCD+&ang;ADC = 180&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;ACB+(&ang;ACB+&ang;ACD)+&ang;ACD = 180&deg; &rarr; 2(&ang;BCD) = 180&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Hence, &ang;BCD = 90&deg;.</div>
        </div>

        <div class="question">7. ABC is a right angled triangle in which &ang;A = 90&deg; and AB = AC. Find &ang;B and &ang;C.</div>
        <svg viewBox="0 0 200 160" class="ex-img">
          <path d="M60,40 L60,130 L150,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <rect x="60" y="120" width="10" height="10" fill="none" stroke="white" stroke-width="1"/>
          <text x="45" y="145" font-size="14">A</text>
          <text x="45" y="35" font-size="14">B</text>
          <text x="155" y="145" font-size="14">C</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABC, &ang;A = 90&deg; and AB = AC &rarr; &ang;B = &ang;C.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;A + &ang;B + &ang;C = 180&deg; &rarr; 90&deg; + 2 &ang;B = 180&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> 2 &ang;B = 90&deg; &rarr; &ang;B = 45&deg; and &ang;C = 45&deg;.</div>
        </div>

        <div class="question">8. Show that the angles of an equilateral triangle are 60&deg; each.</div>
        <svg viewBox="0 0 200 160" class="ex-img">
          <path d="M100,20 L40,130 L160,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <text x="95" y="15" font-size="14">A</text>
          <text x="30" y="145" font-size="14">B</text>
          <text x="165" y="145" font-size="14">C</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Equilateral means AB = BC = AC.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> AB=AC &rarr; &ang;C=&ang;B. AC=BC &rarr; &ang;B=&ang;A. So &ang;A=&ang;B=&ang;C.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> 3 &ang;A = 180&deg; &rarr; &ang;A = 60&deg;. Each angle is 60&deg;.</div>
        </div>
      </div>
`,
    "ex6-3": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #81C784; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #81C784; padding-left: 15px; margin-top: 15px; background: rgba(129, 199, 132, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #81C784 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #81C784 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(129, 199, 132, 0.05) !important; border-left: 4px solid #81C784 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #81C784 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #81C784 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #81C784 !important; font-weight: 700; }
        strong { color: #81C784 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #81C784; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="ch-content">
        <div class="question">1. &Delta;ABC and &Delta;DBC are two isosceles triangles on the same base BC and vertices A and D are on the same side of BC. If AD is extended to intersect BC at P, show that: (i) &Delta;ABD &cong; &Delta;ACD (ii) &Delta;ABP &cong; &Delta;ACP (iii) AP bisects &ang;A as well as &ang;D (iv) AP is the perpendicular bisector of BC.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,20 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M120,100 L60,150 L180,150 Z" fill="none" stroke="#FF6CAB" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="120" y2="150" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/>
          <text x="115" y="15" font-size="14">A</text>
          <text x="45" y="165" font-size="14">B</text>
          <text x="185" y="165" font-size="14">C</text>
          <text x="125" y="105" font-size="14" fill="#FF6CAB">D</text>
          <text x="125" y="168" font-size="14">P</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> (i) In &Delta;ABD and &Delta;ACD, AB=AC, BD=CD, AD=AD. By SSS, &Delta;ABD &cong; &Delta;ACD.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> (ii) From (i), &ang;BAP=&ang;CAP. In &Delta;ABP and &Delta;ACP, AB=AC, &ang;BAP=&ang;CAP, AP=AP. By SAS, &Delta;ABP &cong; &Delta;ACP.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> (iii) Since &Delta;ABP &cong; &Delta;ACP, &ang;BAP=&ang;CAP &rarr; AP bisects &ang;A. Similarly, &ang;BDP=&ang;CDP &rarr; AP bisects &ang;D.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (iv) BP=CP (CPCT) and &ang;APB=&ang;APC=90&deg;. Thus AP is the perpendicular bisector of BC.</div>
        </div>

        <div class="question">2. AD is an altitude of an isosceles triangle ABC in which AB = AC. Show that: (i) AD bisects BC (ii) AD bisects &ang;A.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <path d="M120,20 L60,130 L180,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="120" y2="130" stroke="#FF6CAB" stroke-width="2.5"/>
          <rect x="120" y="120" width="10" height="10" fill="none" stroke="#FF6CAB" stroke-width="1.5"/>
          <text x="115" y="15" font-size="14">A</text>
          <text x="45" y="145" font-size="14">B</text>
          <text x="185" y="145" font-size="14">C</text>
          <text x="125" y="145" font-size="14" fill="#FF6CAB">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABD and &Delta;ACD, AB = AC (Given) and AD = AD (Common).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;ADB = &ang;ADC = 90&deg; (Altitude).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> By RHS Rule, &Delta;ABD &cong; &Delta;ACD.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> (i) BD = CD &rarr; AD bisects BC. (ii) &ang;BAD = &ang;CAD &rarr; AD bisects &ang;A.</div>
        </div>

        <div class="question">3. Two sides AB and BC and median AM of one triangle ABC are respectively equal to sides PQ and QR and median PN of &Delta;PQR. Show that: (i) &Delta;ABM &cong; &Delta;PQN (ii) &Delta;ABC &cong; &Delta;PQR.</div>
        <svg viewBox="0 0 340 140" class="ex-img">
          <path d="M20,110 L80,20 L140,110 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="80" y1="20" x2="80" y2="110" stroke="#FF6CAB" stroke-width="2"/>
          <path d="M180,110 L240,20 L300,110 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="240" y1="20" x2="240" y2="110" stroke="#FF6CAB" stroke-width="2"/>
          <text x="75" y="15" font-size="14">A</text>
          <text x="5" y="125" font-size="14">B</text>
          <text x="145" y="125" font-size="14">C</text>
          <text x="75" y="128" font-size="14" fill="#FF6CAB">M</text>
          <text x="235" y="15" font-size="14">P</text>
          <text x="165" y="125" font-size="14">Q</text>
          <text x="305" y="125" font-size="14">R</text>
          <text x="235" y="128" font-size="14" fill="#FF6CAB">N</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> BC=QR &rarr; 1/2 BC = 1/2 QR &rarr; BM=QN.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> (i) In &Delta;ABM and &Delta;PQN, AB=PQ, BM=QN, AM=PN. By SSS, &Delta;ABM &cong; &Delta;PQN.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> (ii) From (i), &ang;B=&ang;Q (CPCT). In &Delta;ABC and &Delta;PQR, AB=PQ, &ang;B=&ang;Q, BC=QR.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By SAS Rule, &Delta;ABC &cong; &Delta;PQR.</div>
        </div>

        <div class="question">4. BE and CF are two equal altitudes of a triangle ABC. Using RHS congruence rule, prove that the triangle ABC is isosceles.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="165" y2="115" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="180" y1="150" x2="75" y2="115" stroke="#FF6CAB" stroke-width="2"/>
          <text x="115" y="25" font-size="14">A</text>
          <text x="45" y="165" font-size="14">B</text>
          <text x="185" y="165" font-size="14">C</text>
          <text x="170" y="110" font-size="14" fill="#FF6CAB">E</text>
          <text x="50" y="110" font-size="14" fill="#FF6CAB">F</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In right &Delta;BEC and &Delta;CFB, BC = BC (Common Hypotenuse).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> BE = CF (Given altitudes are equal).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> By RHS Rule, &Delta;BEC &cong; &Delta;CFB. So &ang;BCE = &ang;CBF (CPCT).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> In &Delta;ABC, sides opposite to equal angles are equal &rarr; AB = AC.</div>
        </div>

        <div class="question">5. ABC is an isosceles triangle with AB = AC. Draw AP &perp; BC to show that &ang;B = &ang;C.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <path d="M120,20 L50,140 L190,140 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="120" y2="140" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="115" y="15" font-size="14">A</text>
          <text x="35" y="155" font-size="14">B</text>
          <text x="195" y="155" font-size="14">C</text>
          <text x="115" y="155" font-size="14" fill="#FF6CAB">P</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In right &Delta;APB and &Delta;APC, AB = AC (Given Hypotenuse).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> AP = AP (Common side).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> By RHS Rule, &Delta;APB &cong; &Delta;APC.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Therefore, &ang;B = &ang;C by CPCT rule.</div>
        </div>

        <div class="question">6. In Fig. 6.44, the side QR of &Delta;PQR is produced to a point S. If the bisectors of &ang;PQR and &ang;PRS meet at point T, then prove that &ang;QTR = 1/2 &ang;QPR.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;PQR, &ang;PRS = &ang;QPR + &ang;PQR (Ext. Angle). &rarr; 1/2 &ang;PRS = 1/2 &ang;QPR + 1/2 &ang;PQR.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Since QT and RT are bisectors, &ang;TRS = 1/2 &ang;QPR + &ang;TQR. --- (1)</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> In &Delta;TQR, &ang;TRS = &ang;TQR + &ang;QTR (Ext. Angle). --- (2)</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> From (1) and (2), &ang;TQR + &ang;QTR = 1/2 &ang;QPR + &ang;TQR &rarr; &ang;QTR = 1/2 &ang;QPR.</div>
        </div>
      </div>
`,
    "ex6-4": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #81C784; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #81C784; padding-left: 15px; margin-top: 15px; background: rgba(129, 199, 132, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #81C784 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #81C784 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(129, 199, 132, 0.05) !important; border-left: 4px solid #81C784 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #81C784 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #81C784 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #81C784 !important; font-weight: 700; }
        strong { color: #81C784 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #81C784; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="ch-content">
        <div class="question">1. Show that in a right angled triangle, the hypotenuse is the longest side.</div>
        <svg viewBox="0 0 200 160" class="ex-img">
          <path d="M60,30 L60,130 L160,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <text x="45" y="25" font-size="14">B</text>
          <text x="45" y="145" font-size="14">A</text>
          <text x="165" y="145" font-size="14">C</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let &Delta;ABC be right angled at A. So &ang;A = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> The sum of angles is 180&deg;, so &ang;B + &ang;C = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> This means &ang;A is the largest angle in the triangle.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Side opposite to the largest angle is the longest side. Thus BC (hypotenuse) is longest.</div>
        </div>

        <div class="question">2. In Fig. 6.48, sides AB and AC of &Delta;ABC are extended to points P and Q respectively. Also, &ang;PBC < &ang;QCB. Show that AC > AB.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L70,120 L170,120 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="70" y1="120" x2="50" y2="156" stroke="white" stroke-width="2.5"/>
          <line x1="170" y1="120" x2="190" y2="156" stroke="white" stroke-width="2.5"/>
          <text x="115" y="25" font-size="14">A</text>
          <text x="75" y="115" font-size="14">B</text>
          <text x="150" y="115" font-size="14">C</text>
          <text x="35" y="170" font-size="14" fill="#FF6CAB">P</text>
          <text x="195" y="170" font-size="14" fill="#FF6CAB">Q</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> &ang;ABC = 180&deg; - &ang;PBC and &ang;ACB = 180&deg; - &ang;QCB.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Given &ang;PBC < &ang;QCB &rarr; - &ang;PBC > - &ang;QCB.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Adding 180&deg; gives &ang;ABC > &ang;ACB.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Since side opposite to larger angle is longer, AC > AB.</div>
        </div>

        <div class="question">3. In Fig. 6.49, &ang;B < &ang;A and &ang;C < &ang;D. Show that AD < BC.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <line x1="40" y1="130" x2="200" y2="45" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="30" x2="200" y2="115" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="30" x2="40" y2="130" stroke="white" stroke-width="2.5"/>
          <line x1="200" y1="45" x2="200" y2="115" stroke="white" stroke-width="2.5"/>
          <text x="30" y="25" font-size="14">B</text>
          <text x="30" y="145" font-size="14">A</text>
          <text x="205" y="40" font-size="14">D</text>
          <text x="205" y="130" font-size="14">C</text>
          <text x="110" y="70" font-size="14" fill="#FF6CAB">O</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;AOB, &ang;B < &ang;A &rarr; OA < OB.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;COD, &ang;C < &ang;D &rarr; OD < OC.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Adding both gives OA + OD < OB + OC.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Therefore, AD < BC.</div>
        </div>

        <div class="question">4. AB and CD are respectively the smallest and longest sides of a quadrilateral ABCD. Show that &ang;A > &ang;C and &ang;B > &ang;D.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M50,110 L80,30 L190,40 L170,140 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="80" y1="30" x2="170" y2="140" stroke="#FF6CAB" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="75" y="25" font-size="14">A</text>
          <text x="35" y="120" font-size="14">B</text>
          <text x="175" y="155" font-size="14">C</text>
          <text x="195" y="45" font-size="14">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Join AC. In &Delta;ABC, BC > AB (smallest) &rarr; &ang;BAC > &ang;BCA.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;ADC, CD > AD (longest) &rarr; &ang;CAD > &ang;ACD.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Adding both: &ang;BAC + &ang;CAD > &ang;BCA + &ang;ACD &rarr; &ang;A > &ang;C.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Similarly, joining BD proves &ang;B > &ang;D.</div>
        </div>

        <div class="question">5. In Fig. 6.51, PR > PQ and PS bisects &ang;QPR. Prove that &ang;PSR > &ang;PSQ.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,20 L50,140 L220,140 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="135" y2="140" stroke="#FF6CAB" stroke-width="2.5" stroke-dasharray="5,2"/>
          <text x="115" y="15" font-size="14">P</text>
          <text x="35" y="155" font-size="14">Q</text>
          <text x="215" y="155" font-size="14">R</text>
          <text x="125" y="155" font-size="14" fill="#FF6CAB">S</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> PR > PQ &rarr; &ang;PQR > &ang;PRQ. PS bisects &ang;P &rarr; &ang;QPS = &ang;RPS.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;PSR = &ang;PQR + &ang;QPS (Ext. angle prop.).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;PSQ = &ang;PRQ + &ang;RPS (Ext. angle prop.).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Since &ang;PQR > &ang;PRQ and &ang;QPS = &ang;RPS, &ang;PSR > &ang;PSQ.</div>
        </div>

        <div class="question">6. Show that of all line segments drawn from a given point not on it, the perpendicular line segment is the shortest.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let l be a line and P be a point not on it. Draw PM &perp; l.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Take any point N on l other than M. In right &Delta;PMN, &ang;M = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;N must be acute (< 90&deg;). Thus &ang;M > &ang;N.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Side opposite larger angle is longer &rarr; PN > PM. Perpendicular is shortest.</div>
        </div>
      </div>
`
  },
  mcqs: [
    { id: "m1", question: "If two sides and the included angle of one triangle are equal to those of another, the rule is:", options: ["SSS", "SAS", "ASA", "RHS"], correctAnswer: "B" },
    { id: "m2", question: "In an isosceles triangle, angles opposite to equal sides are:", options: ["Equal", "Unequal", "Complementary", "Supplementary"], correctAnswer: "A" },
    { id: "m3", question: "In a right triangle, the side opposite to the 90° angle is:", options: ["Base", "Altitude", "Hypotenuse", "Median"], correctAnswer: "C" },
    { id: "m4", question: "Which side is the longest in a right angled triangle?", options: ["Perpendicular", "Base", "Hypotenuse", "None"], correctAnswer: "C" },
    { id: "m5", question: "In ΔABC, if AB = AC and ∠A = 70°, then ∠B is:", options: ["70°", "55°", "40°", "110°"], correctAnswer: "B" },
    { id: "m6", question: "The sum of any two sides of a triangle is:", options: ["Less than the third side", "Greater than the third side", "Equal to the third side", "None"], correctAnswer: "B" },
    { id: "m7", question: "Which is NOT a congruence criterion?", options: ["SAS", "ASA", "SSA", "SSS"], correctAnswer: "C" },
    { id: "m8", question: "In ΔPQR, if ∠R > ∠Q, then:", options: ["PQ > PR", "PQ < PR", "PQ = PR", "None"], correctAnswer: "A" },
    { id: "m9", question: "Two triangles are congruent if all three sides are equal. This is:", options: ["SAS", "SSS", "ASA", "RHS"], correctAnswer: "B" },
    { id: "m10", question: "In an equilateral triangle, each angle is:", options: ["30°", "45°", "60°", "90°"], correctAnswer: "C" }
  ]
};
