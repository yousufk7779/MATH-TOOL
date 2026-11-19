import { ChapterContent } from "../types";

export const c9Math6: ChapterContent = {
  id: "c9-math-6",
  number: 6,
  title: "Triangles",
  isHtmlView: true,
  introduction:
    "In this chapter, we explore the properties of triangles, specifically the congruence of triangles (SAS, ASA, SSS, RHS) and the inequalities in a triangle. Understanding these rules helps in proving geometric relationships accurately.",
  exercises: [
    { id: "ex6-1", name: "Ex 6.1", questions: [] },
    { id: "ex6-2", name: "Ex 6.2", questions: [] },
    { id: "ex6-3", name: "Ex 6.3", questions: [] },
  ],
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
      <div class="step">A triangle is a closed shape with three sides and three angles. In a triangle, angles opposite equal sides are equal, and sides opposite equal angles are equal.</div>
      <div class="step">This chapter focuses on the <span class="highlight">Congruence of Triangles</span>.</div>
      <div class="step">Two triangles are congruent if they are identical in shape and size. Then all their corresponding parts are equal; we write this as CPCT (corresponding parts of congruent triangles).</div>
      
      <h3>Criteria for Congruence:</h3>
      <div class="step">1. <strong>SAS (Side-Angle-Side):</strong> Two sides and the included angle are equal.</div>
      <div class="step">2. <strong>ASA (Angle-Side-Angle):</strong> Two angles and the included side are equal. Also, AAS (Angle-Angle-Side): two angles and any one side are equal.</div>
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
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. In quadrilateral ACBD, AC = AD and AB bisects &ang;A. Show that &Delta;ABC &cong; &Delta;ABD. What can you say about BC and BD?</div>
        <svg viewBox="0 0 240 140" class="ex-img">
          <path d="M40,70 L120,20 L200,70 L120,120 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="70" x2="200" y2="70" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="15" y="75" font-size="14" fill="white">A</text>
          <text x="115" y="15" font-size="14" fill="white">C</text>
          <text x="210" y="75" font-size="14" fill="white">B</text>
          <text x="115" y="138" font-size="14" fill="white">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABC and ΔABD:<br/>
          AC = AD (Given)<br/>
          ∠CAB = ∠DAB (AB bisects ∠A)<br/>
          AB = AB (Common side)<br/>
          So, ΔABC ≅ ΔABD (SAS rule)<br/>
          BC = BD (CPCT: corresponding parts of congruent triangles)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">ΔABC ≅ ΔABD, and BC = BD</span></div>
        </div>

        <div class="question">2. ABCD is a quadrilateral in which AD = BC and &ang;DAB = &ang;CBA. Prove that: (i) &Delta;ABD &cong; &Delta;BAC (ii) BD = AC (iii) &ang;ABD = &ang;BAC.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <path d="M50,130 L70,40 L170,40 L190,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="50" y1="130" x2="170" y2="40" stroke="#FF6CAB" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="70" y1="40" x2="190" y2="130" stroke="#FF6CAB" stroke-width="1.5" stroke-dasharray="5,3"/>
          <text x="30" y="145" font-size="14" fill="white">A</text>
          <text x="195" y="145" font-size="14" fill="white">B</text>
          <text x="175" y="30" font-size="14" fill="white">C</text>
          <text x="55" y="30" font-size="14" fill="white">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABD and ΔBAC:<br/>
          AD = BC (Given)<br/>
          ∠DAB = ∠CBA (Given)<br/>
          AB = BA (Common side)<br/>
          So, ΔABD ≅ ΔBAC (SAS rule) ...(i)<br/>
          BD = AC (CPCT) ...(ii)<br/>
          ∠ABD = ∠BAC (CPCT) ...(iii)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔABD ≅ ΔBAC (ii) BD = AC (iii) ∠ABD = ∠BAC</span></div>
        </div>

        <div class="question">3. AD and BC are equal perpendiculars to a line segment AB. Show that CD bisects AB.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <line x1="120" y1="30" x2="120" y2="130" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="30" x2="120" y2="30" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="130" x2="200" y2="130" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="30" x2="200" y2="130" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="125" y="25" font-size="14" fill="white">B</text>
          <text x="125" y="145" font-size="14" fill="white">A</text>
          <text x="25" y="30" font-size="14" fill="white">C</text>
          <text x="205" y="145" font-size="14" fill="white">D</text>
          <text x="102" y="100" font-size="14" fill="#FF6CAB">O</text>
          <rect x="110" y="30" width="10" height="10" fill="none" stroke="white" stroke-width="1"/>
          <rect x="120" y="120" width="10" height="10" fill="none" stroke="white" stroke-width="1"/>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let CD meet AB at O.<br/>
          In ΔBOC and ΔAOD:<br/>
          ∠OBC = ∠OAD = 90° (BC ⊥ AB and AD ⊥ AB)<br/>
          ∠BOC = ∠AOD (Vertically opposite angles)<br/>
          BC = AD (Given)<br/>
          So, ΔBOC ≅ ΔAOD (AAS rule)<br/>
          OB = OA (CPCT)<br/>
          So, O is the mid-point of AB.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">CD bisects AB</span></div>
        </div>

        <div class="question">4. l and m are two parallel lines intersected by another pair of parallel lines p and q. Show that &Delta;ABC &cong; &Delta;CDA.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <line x1="30" y1="50" x2="210" y2="50" stroke="white" stroke-width="1.5"/>
          <line x1="30" y1="110" x2="210" y2="110" stroke="white" stroke-width="1.5"/>
          <line x1="80" y1="20" x2="40" y2="140" stroke="white" stroke-width="1.5"/>
          <line x1="180" y1="20" x2="140" y2="140" stroke="white" stroke-width="1.5"/>
          <line x1="170" y1="50" x2="50" y2="110" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="215" y="55" font-size="14" fill="white">l</text>
          <text x="215" y="115" font-size="14" fill="white">m</text>
          <text x="85" y="15" font-size="14" fill="white">p</text>
          <text x="185" y="15" font-size="14" fill="white">q</text>
          <text x="55" y="44" font-size="14" fill="white">D</text>
          <text x="156" y="44" font-size="14" fill="white">A</text>
          <text x="28" y="128" font-size="14" fill="white">C</text>
          <text x="152" y="128" font-size="14" fill="white">B</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABC and ΔCDA:<br/>
          ∠BAC = ∠DCA (Alternate interior angles, p ∥ q, transversal AC)<br/>
          AC = CA (Common side)<br/>
          ∠BCA = ∠DAC (Alternate interior angles, l ∥ m, transversal AC)<br/>
          So, ΔABC ≅ ΔCDA (ASA rule)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">ΔABC ≅ ΔCDA</span></div>
        </div>

        <div class="question">5. Line l is the bisector of an angle &ang;A and B is any point on l. BP and BQ are perpendiculars from B to the arms of &ang;A. Show that: (i) &Delta;APB &cong; &Delta;AQB (ii) BP = BQ.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <line x1="30" y1="130" x2="220" y2="130" stroke="white" stroke-width="2.5"/>
          <line x1="30" y1="130" x2="175.55" y2="7.87" stroke="white" stroke-width="2.5"/>
          <line x1="30" y1="130" x2="217.94" y2="61.6" stroke="#FF6CAB" stroke-width="2.5"/>
          <line x1="156.86" y1="83.83" x2="156.86" y2="130" stroke="white" stroke-width="1.5" stroke-dasharray="3"/>
          <line x1="156.86" y1="83.83" x2="127.18" y2="48.46" stroke="white" stroke-width="1.5" stroke-dasharray="3"/>
          <path d="M148.86,130 L148.86,122 L156.86,122" fill="none" stroke="white" stroke-width="1"/>
          <path d="M121.05,53.6 L126.19,59.73 L132.32,54.59" fill="none" stroke="white" stroke-width="1"/>
          <text x="12" y="136" font-size="14" fill="white">A</text>
          <text x="152.86" y="75.83" font-size="14" fill="white">B</text>
          <text x="152.86" y="146" font-size="14" fill="white">P</text>
          <text x="113.18" y="44.46" font-size="14" fill="white">Q</text>
          <text x="221.94" y="65.6" font-size="14" fill="#FF6CAB">l</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔAPB and ΔAQB:<br/>
          ∠APB = ∠AQB = 90° (BP and BQ are perpendiculars)<br/>
          ∠PAB = ∠QAB (l bisects ∠A)<br/>
          AB = AB (Common side)<br/>
          So, ΔAPB ≅ ΔAQB (AAS rule) ...(i)<br/>
          BP = BQ (CPCT) ...(ii)<br/>
          So, B is at the same distance from both arms of ∠A.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔAPB ≅ ΔAQB (ii) BP = BQ</span></div>
        </div>

        <div class="question">6. In Fig. 6.21, AC = AE, AB = AD and &ang;BAD = &ang;EAC. Show that BC = DE.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <line x1="120" y1="160" x2="46.39" y2="117.5" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="160" x2="77.5" y2="86.39" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="160" x2="182.5" y2="51.75" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="160" x2="228.25" y2="97.5" stroke="white" stroke-width="2.5"/>
          <line x1="46.39" y1="117.5" x2="182.5" y2="51.75" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="77.5" y1="86.39" x2="228.25" y2="97.5" stroke="#FF6CAB" stroke-width="2"/>
          <text x="116" y="176" font-size="14" fill="white">A</text>
          <text x="32.39" y="117.5" font-size="14" fill="white">B</text>
          <text x="65.5" y="82.39" font-size="14" fill="white">D</text>
          <text x="178.5" y="45.75" font-size="14" fill="white">C</text>
          <text x="232.25" y="97.5" font-size="14" fill="white">E</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠BAD = ∠EAC (Given)<br/>
          Adding ∠DAC to both sides:<br/>
          ∠BAD + ∠DAC = ∠EAC + ∠DAC<br/>
          ∠BAC = ∠DAE<br/>
          In ΔABC and ΔADE:<br/>
          AB = AD (Given)<br/>
          ∠BAC = ∠DAE (Proved above)<br/>
          AC = AE (Given)<br/>
          So, ΔABC ≅ ΔADE (SAS rule)<br/>
          BC = DE (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">BC = DE</span></div>
        </div>

        <div class="question">7. AB is a line segment and P is its mid-point. D and E are points on the same side of AB such that &ang;BAD = &ang;ABE and &ang;EPA = &ang;DPB. Show that: (i) &Delta;DAP &cong; &Delta;EBP (ii) AD = BE</div>
        <svg viewBox="0 0 240 140" class="ex-img">
          <line x1="40" y1="110" x2="200" y2="110" stroke="white" stroke-width="2.5"/>
          <path d="M40,110 L80,30 L120,110 L160,30 L200,110" fill="none" stroke="white" stroke-width="2.5"/>
          <text x="25" y="125" font-size="14" fill="white">A</text>
          <text x="205" y="125" font-size="14" fill="white">B</text>
          <text x="115" y="125" font-size="14" fill="#FF6CAB">P</text>
          <text x="70" y="25" font-size="14" fill="white">D</text>
          <text x="165" y="25" font-size="14" fill="white">E</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠EPA = ∠DPB (Given)<br/>
          Subtracting ∠DPE from both sides:<br/>
          ∠EPA − ∠DPE = ∠DPB − ∠DPE<br/>
          ∠DPA = ∠EPB<br/>
          In ΔDAP and ΔEBP:<br/>
          ∠DAP = ∠EBP (Given: ∠BAD = ∠ABE)<br/>
          AP = BP (P is the mid-point of AB)<br/>
          ∠DPA = ∠EPB (Proved above)<br/>
          So, ΔDAP ≅ ΔEBP (ASA rule) ...(i)<br/>
          AD = BE (CPCT) ...(ii)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔDAP ≅ ΔEBP (ii) AD = BE</span></div>
        </div>

        <div class="question">8. In right triangle ABC, right angled at C, M is the mid-point of hypotenuse AB. C is joined to M and produced to a point D such that DM = CM. Point D is joined to point B. Show that: (i) &Delta;AMC &cong; &Delta;BMD (ii) &ang;DBC = 90&deg; (iii) &Delta;DBC &cong; &Delta;ACB (iv) CM = 1/2 AB</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M60,40 L60,140 L180,140 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="180" y1="140" x2="180" y2="40" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="140" x2="180" y2="40" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="60" y1="40" x2="180" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="185" y="155" font-size="14" fill="white">B</text>
          <text x="45" y="155" font-size="14" fill="white">C</text>
          <text x="185" y="35" font-size="14" fill="white">D</text>
          <text x="45" y="35" font-size="14" fill="white">A</text>
          <text x="134" y="95" font-size="14" fill="white">M</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) In ΔAMC and ΔBMD:<br/>
          AM = BM (M is the mid-point of AB)<br/>
          ∠AMC = ∠BMD (Vertically opposite angles)<br/>
          CM = DM (Given)<br/>
          So, ΔAMC ≅ ΔBMD (SAS rule)<br/>
          (ii) ∠ACM = ∠BDM (CPCT)<br/>
          These are alternate interior angles for AC and BD (transversal CD), so AC ∥ BD.<br/>
          Interior angles on the same side add up to 180° (AC ∥ BD, transversal BC):<br/>
          ∠DBC + ∠ACB = 180°<br/>
          ∠DBC + 90° = 180°<br/>
          ∠DBC = 90°<br/>
          (iii) In ΔDBC and ΔACB:<br/>
          DB = AC (CPCT from (i))<br/>
          ∠DBC = ∠ACB = 90°<br/>
          BC = CB (Common side)<br/>
          So, ΔDBC ≅ ΔACB (SAS rule)<br/>
          (iv) DC = AB (CPCT from (iii))<br/>
          CM = DM, so CM = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> DC<br/>
          CM = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> AB<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔAMC ≅ ΔBMD (ii) ∠DBC = 90° (iii) ΔDBC ≅ ΔACB (iv) CM = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> AB</span></div>
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
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. In an isosceles triangle ABC, with AB = AC, the bisectors of &ang;B and &ang;C intersect each other at O. Join A to O. Show that: (i) OB = OC (ii) AO bisects &ang;A</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="120" y2="112.92" stroke="#FF6CAB" stroke-width="1.5"/>
          <line x1="180" y1="150" x2="120" y2="112.92" stroke="#FF6CAB" stroke-width="1.5"/>
          <line x1="120" y1="30" x2="120" y2="112.92" stroke="white" stroke-width="1.5" stroke-dasharray="3"/>
          <text x="116" y="24" font-size="14" fill="white">A</text>
          <text x="44" y="164" font-size="14" fill="white">B</text>
          <text x="184" y="164" font-size="14" fill="white">C</text>
          <text x="126" y="108.92" font-size="14" fill="#FF6CAB">O</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          AB = AC (Given)<br/>
          Angles opposite equal sides are equal:<br/>
          ∠ACB = ∠ABC<br/>
          <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>∠ACB = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>∠ABC<br/>
          ∠OCB = ∠OBC (OB and OC are the bisectors)<br/>
          Sides opposite equal angles are equal (in ΔOBC):<br/>
          OB = OC ...(i)<br/>
          In ΔOAB and ΔOAC:<br/>
          AB = AC (Given)<br/>
          OB = OC (Proved above)<br/>
          OA = OA (Common side)<br/>
          So, ΔOAB ≅ ΔOAC (SSS rule)<br/>
          ∠OAB = ∠OAC (CPCT)<br/>
          So, AO bisects ∠A ...(ii)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) OB = OC (ii) AO bisects ∠A</span></div>
        </div>

        <div class="question">2. In &Delta;ABC, AD is the perpendicular bisector of BC. Show that &Delta;ABC is an isosceles triangle in which AB = AC.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <path d="M120,20 L60,130 L180,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="120" y2="130" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="115" y="15" font-size="14" fill="white">A</text>
          <text x="45" y="145" font-size="14" fill="white">B</text>
          <text x="185" y="145" font-size="14" fill="white">C</text>
          <text x="125" y="145" font-size="14" fill="#FF6CAB">D</text>
          <rect x="120" y="120" width="10" height="10" fill="none" stroke="#FF6CAB" stroke-width="1"/>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABD and ΔACD:<br/>
          BD = CD (AD bisects BC)<br/>
          ∠ADB = ∠ADC = 90° (AD ⊥ BC)<br/>
          AD = AD (Common side)<br/>
          So, ΔABD ≅ ΔACD (SAS rule)<br/>
          AB = AC (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AB = AC, so ΔABC is isosceles</span></div>
        </div>

        <div class="question">3. ABC is an isosceles triangle in which altitudes BE and CF are drawn to equal sides AC and AB respectively. Show that these altitudes are equal.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="156" y2="102" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="180" y1="150" x2="84" y2="102" stroke="#FF6CAB" stroke-width="2"/>
          <path d="M152.42,94.84 L145.27,98.42 L148.84,105.58" fill="none" stroke="white" stroke-width="1"/>
          <path d="M87.58,94.84 L94.73,98.42 L91.16,105.58" fill="none" stroke="white" stroke-width="1"/>
          <text x="116" y="24" font-size="14" fill="white">A</text>
          <text x="44" y="164" font-size="14" fill="white">B</text>
          <text x="184" y="164" font-size="14" fill="white">C</text>
          <text x="162" y="104" font-size="14" fill="#FF6CAB">E</text>
          <text x="68" y="104" font-size="14" fill="#FF6CAB">F</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABE and ΔACF:<br/>
          ∠AEB = ∠AFC = 90° (BE and CF are altitudes)<br/>
          ∠A = ∠A (Common angle)<br/>
          AB = AC (Given)<br/>
          So, ΔABE ≅ ΔACF (AAS rule)<br/>
          BE = CF (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">BE = CF, so the altitudes are equal</span></div>
        </div>

        <div class="question">4. ABC is a triangle in which altitudes BE and CF to sides AC and AB are equal. Show that: (i) &Delta;ABE &cong; &Delta;ACF (ii) AB = AC.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="156" y2="102" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="180" y1="150" x2="84" y2="102" stroke="#FF6CAB" stroke-width="2"/>
          <path d="M152.42,94.84 L145.27,98.42 L148.84,105.58" fill="none" stroke="white" stroke-width="1"/>
          <path d="M87.58,94.84 L94.73,98.42 L91.16,105.58" fill="none" stroke="white" stroke-width="1"/>
          <text x="116" y="24" font-size="14" fill="white">A</text>
          <text x="44" y="164" font-size="14" fill="white">B</text>
          <text x="184" y="164" font-size="14" fill="white">C</text>
          <text x="162" y="104" font-size="14" fill="#FF6CAB">E</text>
          <text x="68" y="104" font-size="14" fill="#FF6CAB">F</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABE and ΔACF:<br/>
          ∠AEB = ∠AFC = 90° (BE and CF are altitudes)<br/>
          ∠A = ∠A (Common angle)<br/>
          BE = CF (Given)<br/>
          So, ΔABE ≅ ΔACF (AAS rule) ...(i)<br/>
          AB = AC (CPCT) ...(ii)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔABE ≅ ΔACF (ii) AB = AC</span></div>
        </div>

        <div class="question">5. ABC and DBC are two isosceles triangles on the same base BC. Show that &ang;ABD = &ang;ACD.</div>
        <svg viewBox="0 0 240 200" class="ex-img">
          <path d="M60,100 L120,30 L180,100 L120,170 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="100" x2="180" y2="100" stroke="white" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="115" y="25" font-size="14" fill="white">A</text>
          <text x="40" y="105" font-size="14" fill="white">B</text>
          <text x="185" y="105" font-size="14" fill="white">C</text>
          <text x="115" y="188" font-size="14" fill="#FF6CAB">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABC: AB = AC (Given)<br/>
          Angles opposite equal sides are equal:<br/>
          ∠ABC = ∠ACB ...(1)<br/>
          In ΔDBC: DB = DC (Given)<br/>
          ∠DBC = ∠DCB ...(2)<br/>
          Adding (1) and (2):<br/>
          ∠ABC + ∠DBC = ∠ACB + ∠DCB<br/>
          ∠ABD = ∠ACD<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠ABD = ∠ACD</span></div>
        </div>

        <div class="question">6. &Delta;ABC is an isosceles triangle in which AB = AC. Side BA is produced to D such that AD = AB. Show that &ang;BCD is a right angle.</div>
        <svg viewBox="0 0 200 240" class="ex-img">
          <path d="M50,210 L140,210 L140,50 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="140" y1="210" x2="95" y2="130" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="40" y="228" font-size="14" fill="white">B</text>
          <text x="145" y="228" font-size="14" fill="white">C</text>
          <text x="145" y="45" font-size="14" fill="white">D</text>
          <text x="78" y="126" font-size="14" fill="#FF6CAB">A</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          AB = AC and AD = AB, so AD = AC<br/>
          In ΔABC: AB = AC, so ∠ACB = ∠ABC ...(1) (angles opposite equal sides)<br/>
          In ΔACD: AC = AD, so ∠ACD = ∠ADC ...(2)<br/>
          ∠BCD = ∠ACB + ∠ACD ...(3)<br/>
          Angle sum of ΔBCD:<br/>
          ∠DBC + ∠BCD + ∠BDC = 180°<br/>
          ∠ACB + ∠BCD + ∠ACD = 180° (using (1) and (2))<br/>
          ∠BCD + ∠BCD = 180° (using (3))<br/>
          2∠BCD = 180°<br/>
          ∠BCD = 90°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠BCD = 90°, a right angle</span></div>
        </div>

        <div class="question">7. ABC is a right angled triangle in which &ang;A = 90&deg; and AB = AC. Find &ang;B and &ang;C.</div>
        <svg viewBox="0 0 200 160" class="ex-img">
          <path d="M60,40 L60,130 L150,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <rect x="60" y="120" width="10" height="10" fill="none" stroke="white" stroke-width="1"/>
          <text x="45" y="145" font-size="14" fill="white">A</text>
          <text x="45" y="35" font-size="14" fill="white">B</text>
          <text x="155" y="145" font-size="14" fill="white">C</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          AB = AC, so ∠C = ∠B (angles opposite equal sides)<br/>
          Angle sum of ΔABC:<br/>
          ∠A + ∠B + ∠C = 180°<br/>
          90° + ∠B + ∠B = 180°<br/>
          2∠B = 90°<br/>
          ∠B = 45°<br/>
          ∠C = ∠B = 45°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠B = 45°, ∠C = 45°</span></div>
        </div>

        <div class="question">8. Show that the angles of an equilateral triangle are 60&deg; each.</div>
        <svg viewBox="0 0 200 150" class="ex-img">
          <path d="M100,26.08 L40,130 L160,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <text x="96" y="20.08" font-size="14" fill="white">A</text>
          <text x="26" y="144" font-size="14" fill="white">B</text>
          <text x="164" y="144" font-size="14" fill="white">C</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let ΔABC be equilateral: AB = BC = CA<br/>
          Angles opposite equal sides are equal:<br/>
          AB = AC, so ∠C = ∠B<br/>
          AB = BC, so ∠C = ∠A<br/>
          So, ∠A = ∠B = ∠C<br/>
          Angle sum of ΔABC:<br/>
          ∠A + ∠B + ∠C = 180°<br/>
          3∠A = 180°<br/>
          ∠A = 60°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠A = ∠B = ∠C = 60°</span></div>
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
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. &Delta;ABC and &Delta;DBC are two isosceles triangles on the same base BC and vertices A and D are on the same side of BC. If AD is extended to intersect BC at P, show that: (i) &Delta;ABD &cong; &Delta;ACD (ii) &Delta;ABP &cong; &Delta;ACP (iii) AP bisects &ang;A as well as &ang;D (iv) AP is the perpendicular bisector of BC.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,20 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M120,100 L60,150 L180,150 Z" fill="none" stroke="#FF6CAB" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="120" y2="150" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/>
          <text x="115" y="15" font-size="14" fill="white">A</text>
          <text x="45" y="165" font-size="14" fill="white">B</text>
          <text x="185" y="165" font-size="14" fill="white">C</text>
          <text x="127" y="96" font-size="14" fill="#FF6CAB">D</text>
          <text x="125" y="168" font-size="14" fill="white">P</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) In ΔABD and ΔACD:<br/>
          AB = AC (ΔABC is isosceles)<br/>
          BD = CD (ΔDBC is isosceles)<br/>
          AD = AD (Common side)<br/>
          So, ΔABD ≅ ΔACD (SSS rule)<br/>
          ∠BAD = ∠CAD (CPCT) ...(1)<br/>
          ∠BDA = ∠CDA (CPCT) ...(2)<br/>
          (ii) In ΔABP and ΔACP:<br/>
          AB = AC (Given)<br/>
          ∠BAP = ∠CAP (from (1))<br/>
          AP = AP (Common side)<br/>
          So, ΔABP ≅ ΔACP (SAS rule)<br/>
          (iii) From (1), ∠BAP = ∠CAP, so AP bisects ∠A.<br/>
          Linear pairs at D: ∠BDP = 180° − ∠BDA and ∠CDP = 180° − ∠CDA<br/>
          From (2): ∠BDP = ∠CDP, so AP bisects ∠D.<br/>
          (iv) From (ii): BP = CP and ∠BPA = ∠CPA (CPCT)<br/>
          ∠BPA + ∠CPA = 180° (Linear pair)<br/>
          2∠BPA = 180°<br/>
          ∠BPA = 90°<br/>
          So, AP ⊥ BC and BP = CP.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔABD ≅ ΔACD (ii) ΔABP ≅ ΔACP (iii) AP bisects ∠A and ∠D (iv) AP is the perpendicular bisector of BC</span></div>
        </div>

        <div class="question">2. AD is an altitude of an isosceles triangle ABC in which AB = AC. Show that: (i) AD bisects BC (ii) AD bisects &ang;A.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <path d="M120,20 L60,130 L180,130 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="120" y2="130" stroke="#FF6CAB" stroke-width="2.5"/>
          <rect x="120" y="120" width="10" height="10" fill="none" stroke="#FF6CAB" stroke-width="1.5"/>
          <text x="115" y="15" font-size="14" fill="white">A</text>
          <text x="45" y="145" font-size="14" fill="white">B</text>
          <text x="185" y="145" font-size="14" fill="white">C</text>
          <text x="125" y="145" font-size="14" fill="#FF6CAB">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABD and ΔACD:<br/>
          ∠ADB = ∠ADC = 90° (AD is an altitude)<br/>
          AB = AC (Hypotenuse, given)<br/>
          AD = AD (Common side)<br/>
          So, ΔABD ≅ ΔACD (RHS rule)<br/>
          BD = CD (CPCT) ...(i)<br/>
          ∠BAD = ∠CAD (CPCT) ...(ii)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) AD bisects BC (ii) AD bisects ∠A</span></div>
        </div>

        <div class="question">3. Two sides AB and BC and median AM of one triangle ABC are respectively equal to sides PQ and QR and median PN of &Delta;PQR. Show that: (i) &Delta;ABM &cong; &Delta;PQN (ii) &Delta;ABC &cong; &Delta;PQR.</div>
        <svg viewBox="0 0 320 140" class="ex-img">
          <path d="M55,25 L20,115 L140,115 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="55" y1="25" x2="80" y2="115" stroke="#FF6CAB" stroke-width="2"/>
          <path d="M220,25 L185,115 L305,115 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="220" y1="25" x2="245" y2="115" stroke="#FF6CAB" stroke-width="2"/>
          <text x="51" y="19" font-size="14" fill="white">A</text>
          <text x="8" y="131" font-size="14" fill="white">B</text>
          <text x="142" y="131" font-size="14" fill="white">C</text>
          <text x="76" y="131" font-size="14" fill="#FF6CAB">M</text>
          <text x="216" y="19" font-size="14" fill="white">P</text>
          <text x="173" y="131" font-size="14" fill="white">Q</text>
          <text x="307" y="131" font-size="14" fill="white">R</text>
          <text x="241" y="131" font-size="14" fill="#FF6CAB">N</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          BC = QR (Given)<br/>
          <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>BC = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>QR<br/>
          BM = QN (M and N are mid-points)<br/>
          (i) In ΔABM and ΔPQN:<br/>
          AB = PQ (Given)<br/>
          BM = QN (Proved above)<br/>
          AM = PN (Given)<br/>
          So, ΔABM ≅ ΔPQN (SSS rule)<br/>
          ∠ABM = ∠PQN (CPCT), i.e. ∠ABC = ∠PQR<br/>
          (ii) In ΔABC and ΔPQR:<br/>
          AB = PQ (Given)<br/>
          ∠ABC = ∠PQR (Proved above)<br/>
          BC = QR (Given)<br/>
          So, ΔABC ≅ ΔPQR (SAS rule)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔABM ≅ ΔPQN (ii) ΔABC ≅ ΔPQR</span></div>
        </div>

        <div class="question">4. BE and CF are two equal altitudes of a triangle ABC. Using RHS congruence rule, prove that the triangle ABC is isosceles.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M120,30 L60,150 L180,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="156" y2="102" stroke="#FF6CAB" stroke-width="2"/>
          <line x1="180" y1="150" x2="84" y2="102" stroke="#FF6CAB" stroke-width="2"/>
          <path d="M152.42,94.84 L145.27,98.42 L148.84,105.58" fill="none" stroke="white" stroke-width="1"/>
          <path d="M87.58,94.84 L94.73,98.42 L91.16,105.58" fill="none" stroke="white" stroke-width="1"/>
          <text x="116" y="24" font-size="14" fill="white">A</text>
          <text x="44" y="164" font-size="14" fill="white">B</text>
          <text x="184" y="164" font-size="14" fill="white">C</text>
          <text x="162" y="104" font-size="14" fill="#FF6CAB">E</text>
          <text x="68" y="104" font-size="14" fill="#FF6CAB">F</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔBEC and ΔCFB:<br/>
          ∠BEC = ∠CFB = 90° (BE and CF are altitudes)<br/>
          BC = CB (Common hypotenuse)<br/>
          BE = CF (Given)<br/>
          So, ΔBEC ≅ ΔCFB (RHS rule)<br/>
          ∠BCE = ∠CBF (CPCT), i.e. ∠C = ∠B<br/>
          Sides opposite equal angles are equal:<br/>
          AB = AC<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AB = AC, so ΔABC is isosceles</span></div>
        </div>

        <div class="question">5. ABC is an isosceles triangle with AB = AC. Draw AP &perp; BC to show that &ang;B = &ang;C.</div>
        <svg viewBox="0 0 240 160" class="ex-img">
          <path d="M120,20 L50,140 L190,140 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="20" x2="120" y2="140" stroke="#FF6CAB" stroke-width="2.5"/>
          <text x="115" y="15" font-size="14" fill="white">A</text>
          <text x="35" y="155" font-size="14" fill="white">B</text>
          <text x="195" y="155" font-size="14" fill="white">C</text>
          <text x="115" y="155" font-size="14" fill="#FF6CAB">P</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Draw AP ⊥ BC.<br/>
          In ΔAPB and ΔAPC:<br/>
          ∠APB = ∠APC = 90° (AP ⊥ BC)<br/>
          AB = AC (Hypotenuse, given)<br/>
          AP = AP (Common side)<br/>
          So, ΔAPB ≅ ΔAPC (RHS rule)<br/>
          ∠B = ∠C (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠B = ∠C</span></div>
        </div>
      </div>
`,
  },
  mcqs: [
    {
      id: "m1",
      question:
        "If two sides and the included angle of one triangle are equal to those of another, the rule is:",
      options: ["SSS", "SAS", "ASA", "RHS"],
      correctAnswer: "B",
    },
    {
      id: "m2",
      question: "In an isosceles triangle, angles opposite to equal sides are:",
      options: ["Equal", "Unequal", "Complementary", "Supplementary"],
      correctAnswer: "A",
    },
    {
      id: "m3",
      question: "In a right triangle, the side opposite to the 90° angle is:",
      options: ["Base", "Altitude", "Hypotenuse", "Median"],
      correctAnswer: "C",
    },
    {
      id: "m4",
      question: "Which side is the longest in a right angled triangle?",
      options: ["Perpendicular", "Base", "Hypotenuse", "None"],
      correctAnswer: "C",
    },
    {
      id: "m5",
      question: "In ΔABC, if AB = AC and ∠A = 70°, then ∠B is:",
      options: ["70°", "55°", "40°", "110°"],
      correctAnswer: "B",
    },
    {
      id: "m6",
      question: "The sum of any two sides of a triangle is:",
      options: [
        "Less than the third side",
        "Greater than the third side",
        "Equal to the third side",
        "None",
      ],
      correctAnswer: "B",
    },
    {
      id: "m7",
      question: "Which is NOT a congruence criterion?",
      options: ["SAS", "ASA", "SSA", "SSS"],
      correctAnswer: "C",
    },
    {
      id: "m8",
      question: "In ΔPQR, if ∠R > ∠Q, then:",
      options: ["PQ > PR", "PQ < PR", "PQ = PR", "None"],
      correctAnswer: "A",
    },
    {
      id: "m9",
      question:
        "Two triangles are congruent if all three sides are equal. This is:",
      options: ["SAS", "SSS", "ASA", "RHS"],
      correctAnswer: "B",
    },
    {
      id: "m10",
      question: "In an equilateral triangle, each angle is:",
      options: ["30°", "45°", "60°", "90°"],
      correctAnswer: "C",
    },
  ],
};
