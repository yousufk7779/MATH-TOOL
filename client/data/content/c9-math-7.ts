import { ChapterContent } from "../types";

export const c9Math7: ChapterContent = {
  id: "c9-math-7",
  number: 7,
  title: "Quadrilaterals",
  isHtmlView: true,
  introduction:
    "In this chapter, we study the properties of quadrilaterals, specifically parallelograms, and the Mid-point Theorem. We explore the conditions that make a quadrilateral a parallelogram, rectangle, rhombus, or square.",
  exercises: [
    { id: "ex7-1", name: "Ex 7.1", questions: [] },
    { id: "ex7-2", name: "Ex 7.2", questions: [] },
  ],
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFA726; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFA726; padding-left: 15px; margin-top: 15px; background: rgba(255, 167, 38, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFA726 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFA726 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 167, 38, 0.05) !important; border-left: 4px solid #FFA726 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFA726 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFA726 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFA726 !important; font-weight: 700; }
        strong { color: #FFA726 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFA726; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 167, 38, 0.05); color: #FFA726; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">

      <div class="step">A <span class="highlight">Quadrilateral</span> is a polygon with four sides, four angles, and four vertices.</div>
      <div class="step">The sum of the angles of a quadrilateral is <span class="highlight">360°</span>.</div>
      
      <h3>Types of Quadrilaterals:</h3>
      <div class="step">1. <strong>Parallelogram:</strong> Opposite sides are parallel and equal. Diagonals bisect each other.</div>
      <div class="step">2. <strong>Rectangle:</strong> A parallelogram with one angle of 90°. Diagonals are equal.</div>
      <div class="step">3. <strong>Rhombus:</strong> A parallelogram with all sides equal. Diagonals bisect at 90°.</div>
      <div class="step">4. <strong>Square:</strong> A parallelogram with all sides equal and each angle 90°.</div>
      <div class="step">5. <strong>Trapezium:</strong> Only one pair of opposite sides is parallel.</div>
      
      <h3>Important Theorems:</h3>
      <div class="step">1. <strong>Mid-point Theorem:</strong> The line segment joining the mid-points of two sides of a triangle is parallel to the third side and half of it. Conversely, a line drawn through the mid-point of one side, parallel to another side, bisects the third side.</div>
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
        
        .question { color: #FFA726; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFA726; padding-left: 15px; margin-top: 15px; background: rgba(255, 167, 38, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFA726 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFA726 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 167, 38, 0.05) !important; border-left: 4px solid #FFA726 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFA726 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFA726 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFA726 !important; font-weight: 700; }
        strong { color: #FFA726 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFA726; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 167, 38, 0.05); color: #FFA726; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. If the diagonals of a parallelogram are equal, then show that it is a rectangle.</div>
        <svg viewBox="0 0 240 170" class="ex-img">
          <path d="M40,140 L200,140 L200,40 L40,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="140" x2="200" y2="40" stroke="#FB8C00" stroke-width="2"/>
          <line x1="200" y1="140" x2="40" y2="40" stroke="#FB8C00" stroke-width="2"/>
          <path d="M192,140 L192,132 L200,132" fill="none" stroke="white" stroke-width="1"/>
          <text x="24" y="154" font-size="14" fill="white">A</text>
          <text x="204" y="154" font-size="14" fill="white">B</text>
          <text x="204" y="36" font-size="14" fill="white">C</text>
          <text x="24" y="36" font-size="14" fill="white">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABC and ΔDCB:<br/>
          AB = DC (Opposite sides of a parallelogram)<br/>
          BC = CB (Common)<br/>
          AC = DB (Given)<br/>
          So, ΔABC ≅ ΔDCB (SSS)<br/>
          ∠ABC = ∠DCB (CPCT)<br/>
          ∠ABC + ∠DCB = 180° (Co-interior angles, AB ∥ DC)<br/>
          2∠ABC = 180°, so ∠ABC = 90°<br/>
          A parallelogram with one angle 90° is a rectangle.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">ABCD is a rectangle</span></div>
        </div>

        <div class="question">2. Show that the diagonals of a square are equal and bisect each other at right angles.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M60,150 L180,150 L180,30 L60,30 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="180" y2="30" stroke="#FB8C00" stroke-width="2"/>
          <line x1="180" y1="150" x2="60" y2="30" stroke="#FB8C00" stroke-width="2"/>
          <path d="M124.95,94.95 L129.9,90 L124.95,85.05" fill="none" stroke="white" stroke-width="1"/>
          <text x="101" y="95" font-size="14" fill="#FB8C00">O</text>
          <text x="44" y="164" font-size="14" fill="white">A</text>
          <text x="184" y="164" font-size="14" fill="white">B</text>
          <text x="184" y="26" font-size="14" fill="white">C</text>
          <text x="44" y="26" font-size="14" fill="white">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let the diagonals AC and BD meet at O.<br/>
          In ΔABC and ΔDCB:<br/>
          AB = DC, ∠ABC = ∠DCB = 90°, BC = CB<br/>
          So, ΔABC ≅ ΔDCB (SAS)<br/>
          AC = DB (CPCT)<br/>
          A square is a parallelogram, so OA = OC and OB = OD.<br/>
          In ΔAOB and ΔAOD:<br/>
          AB = AD, OB = OD, AO = AO<br/>
          So, ΔAOB ≅ ΔAOD (SSS)<br/>
          ∠AOB = ∠AOD (CPCT)<br/>
          ∠AOB + ∠AOD = 180° (Linear pair), so ∠AOB = 90°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AC = BD, OA = OC, OB = OD and AC ⊥ BD</span></div>
        </div>

        <div class="question">3. Diagonal AC of a parallelogram ABCD bisects ∠A (see Fig. 7.11). Show that<br/>(i) it bisects ∠C also,<br/>(ii) ABCD is a rhombus.</div>
        <svg viewBox="0 0 240 170" class="ex-img">
          <path d="M40,150 L150,150 L205,54.74 L95,54.74 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="40" y1="150" x2="205" y2="54.74" stroke="#FB8C00" stroke-width="2"/>
          <path d="M58,150 A18,18 0 0 0 55.59,141" fill="none" stroke="#FB8C00" stroke-width="1.5"/>
          <path d="M59.05,139 A22,22 0 0 0 51,130.95" fill="none" stroke="#FB8C00" stroke-width="1.5"/>
          <text x="24" y="164" font-size="14" fill="white">A</text>
          <text x="154" y="164" font-size="14" fill="white">B</text>
          <text x="209" y="50.74" font-size="14" fill="white">C</text>
          <text x="79" y="50.74" font-size="14" fill="white">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠DAC = ∠CAB (AC bisects ∠A) ...(1)<br/>
          ∠CAB = ∠ACD (Alternate angles, AB ∥ DC) ...(2)<br/>
          ∠DAC = ∠ACB (Alternate angles, AD ∥ BC) ...(3)<br/>
          (i) From (1), (2), (3): ∠ACD = ∠ACB, so AC bisects ∠C.<br/>
          (ii) From (1) and (2): ∠DAC = ∠ACD<br/>
          In ΔADC: DC = AD (Sides opposite equal angles)<br/>
          A parallelogram with two adjacent sides equal is a rhombus.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) AC bisects ∠C (ii) ABCD is a rhombus</span></div>
        </div>

        <div class="question">4. ABCD is a rectangle in which diagonal AC bisects ∠A as well as ∠C. Show that:<br/>(i) ABCD is a square<br/>(ii) diagonal BD bisects ∠B as well as ∠D.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M60,150 L180,150 L180,30 L60,30 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="60" y1="150" x2="180" y2="30" stroke="#FB8C00" stroke-width="2"/>
          <line x1="180" y1="150" x2="60" y2="30" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M68,150 L68,142 L60,142" fill="none" stroke="white" stroke-width="1"/>
          <text x="44" y="164" font-size="14" fill="white">A</text>
          <text x="184" y="164" font-size="14" fill="white">B</text>
          <text x="184" y="26" font-size="14" fill="white">C</text>
          <text x="44" y="26" font-size="14" fill="white">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) ∠A = ∠C = 90°, and AC bisects both:<br/>
          ∠DAC = 45° and ∠DCA = 45°<br/>
          In ΔADC: AD = DC (Sides opposite equal angles)<br/>
          A rectangle with two adjacent sides equal is a square.<br/>
          (ii) In ΔABD: AB = AD, so ∠ABD = ∠ADB<br/>
          ∠ABD + ∠ADB = 90° (∠A = 90°), so ∠ABD = ∠ADB = 45°<br/>
          ∠DBC = 90° − 45° = 45° = ∠ABD, and ∠BDC = 90° − 45° = 45° = ∠ADB<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ABCD is a square (ii) BD bisects ∠B and ∠D</span></div>
        </div>

        <div class="question">5. In parallelogram ABCD, two points P and Q are taken on diagonal BD such that DP = BQ (see Fig. 7.12). Show that:<br/>(i) ΔAPD ≅ ΔCQB<br/>(ii) AP = CQ<br/>(iii) ΔAQB ≅ ΔCPD<br/>(iv) AQ = CP<br/>(v) APCQ is a parallelogram</div>
        <svg viewBox="0 0 240 170" class="ex-img">
          <path d="M125,25 L25,125 L115,140 L215,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="25" y1="125" x2="215" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="125" y1="25" x2="158" y2="65.5" stroke="#FB8C00" stroke-width="2"/>
          <line x1="158" y1="65.5" x2="115" y2="140" stroke="#FB8C00" stroke-width="2"/>
          <line x1="115" y1="140" x2="82" y2="99.5" stroke="#FB8C00" stroke-width="2"/>
          <line x1="82" y1="99.5" x2="125" y2="25" stroke="#FB8C00" stroke-width="2"/>
          <text x="121" y="19" font-size="14" fill="white">A</text>
          <text x="11" y="129" font-size="14" fill="white">B</text>
          <text x="111" y="156" font-size="14" fill="white">C</text>
          <text x="219" y="44" font-size="14" fill="white">D</text>
          <text x="160" y="59.5" font-size="14" fill="#FB8C00">P</text>
          <text x="76" y="115.5" font-size="14" fill="#FB8C00">Q</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) In ΔAPD and ΔCQB:<br/>
          AD = CB (Opposite sides)<br/>
          ∠ADP = ∠CBQ (Alternate angles, AD ∥ BC)<br/>
          DP = BQ (Given)<br/>
          So, ΔAPD ≅ ΔCQB (SAS)<br/>
          (ii) AP = CQ (CPCT)<br/>
          (iii) In ΔAQB and ΔCPD:<br/>
          AB = CD (Opposite sides)<br/>
          ∠ABQ = ∠CDP (Alternate angles, AB ∥ DC)<br/>
          BQ = DP (Given)<br/>
          So, ΔAQB ≅ ΔCPD (SAS)<br/>
          (iv) AQ = CP (CPCT)<br/>
          (v) In APCQ, AP = CQ and AQ = CP (both pairs of opposite sides equal), so APCQ is a parallelogram.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔAPD ≅ ΔCQB (ii) AP = CQ (iii) ΔAQB ≅ ΔCPD (iv) AQ = CP (v) APCQ is a parallelogram</span></div>
        </div>

        <div class="question">6. ABCD is a parallelogram and AP and CQ are perpendiculars from vertices A and C on diagonal BD (see Fig. 7.13). Show that<br/>(i) ΔAPB ≅ ΔCQD<br/>(ii) AP = CQ</div>
        <svg viewBox="0 0 240 170" class="ex-img">
          <path d="M30,140 L190,140 L215,40 L55,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="190" y1="140" x2="55" y2="40" stroke="white" stroke-width="2.5"/>
          <line x1="30" y1="140" x2="86.69" y2="63.47" stroke="#FB8C00" stroke-width="2" stroke-dasharray="4,3"/>
          <line x1="215" y1="40" x2="158.31" y2="116.53" stroke="#FB8C00" stroke-width="2" stroke-dasharray="4,3"/>
          <path d="M81.93,69.9 L75.5,65.14 L80.26,58.71" fill="none" stroke="white" stroke-width="1"/>
          <path d="M163.07,110.1 L169.5,114.86 L164.74,121.29" fill="none" stroke="white" stroke-width="1"/>
          <text x="14" y="154" font-size="14" fill="white">A</text>
          <text x="192" y="156" font-size="14" fill="white">B</text>
          <text x="219" y="38" font-size="14" fill="white">C</text>
          <text x="41" y="36" font-size="14" fill="white">D</text>
          <text x="82.69" y="55.47" font-size="14" fill="#FB8C00">P</text>
          <text x="144.31" y="130.53" font-size="14" fill="#FB8C00">Q</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔAPB and ΔCQD:<br/>
          ∠APB = ∠CQD = 90° (Given)<br/>
          ∠ABP = ∠CDQ (Alternate angles, AB ∥ DC)<br/>
          AB = CD (Opposite sides)<br/>
          So, ΔAPB ≅ ΔCQD (AAS)<br/>
          AP = CQ (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ΔAPB ≅ ΔCQD (ii) AP = CQ</span></div>
        </div>

        <div class="question">7. ABCD is a trapezium in which AB ∥ CD and AD = BC (see Fig. 7.14). Show that<br/>(i) ∠A = ∠B<br/>(ii) ∠C = ∠D<br/>(iii) ΔABC ≅ ΔBAD<br/>(iv) diagonal AC = diagonal BD<br/>[Hint : Extend AB and draw a line through C parallel to DA intersecting AB produced at E.]</div>
        <svg viewBox="0 0 240 170" class="ex-img">
          <line x1="70" y1="40" x2="150" y2="40" stroke="white" stroke-width="2.5"/>
          <line x1="150" y1="40" x2="225" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="70" y1="40" x2="30" y2="140" stroke="white" stroke-width="2.5"/>
          <line x1="30" y1="140" x2="190" y2="140" stroke="white" stroke-width="2.5"/>
          <line x1="150" y1="40" x2="190" y2="140" stroke="white" stroke-width="2.5"/>
          <line x1="190" y1="140" x2="230" y2="40" stroke="#FB8C00" stroke-width="2" stroke-dasharray="4,3"/>
          <text x="58" y="34" font-size="14" fill="white">A</text>
          <text x="146" y="32" font-size="14" fill="white">B</text>
          <text x="194" y="154" font-size="14" fill="white">C</text>
          <text x="16" y="154" font-size="14" fill="white">D</text>
          <text x="232" y="32" font-size="14" fill="#FB8C00">E</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Extend AB and draw CE ∥ DA meeting AB produced at E.<br/>
          AE ∥ DC and AD ∥ EC, so AECD is a parallelogram.<br/>
          AD = CE (Opposite sides), and AD = BC (Given), so BC = CE<br/>
          (i) In ΔBCE: ∠CBE = ∠CEB (Angles opposite equal sides)<br/>
          ∠A + ∠CEB = 180° (Co-interior angles, AD ∥ CE)<br/>
          ∠B + ∠CBE = 180° (Linear pair)<br/>
          So, ∠A = ∠B<br/>
          (ii) ∠A + ∠D = 180° and ∠B + ∠C = 180° (Co-interior angles, AB ∥ DC)<br/>
          Since ∠A = ∠B, ∠C = ∠D<br/>
          (iii) In ΔABC and ΔBAD:<br/>
          AB = BA (Common)<br/>
          ∠ABC = ∠BAD (From (i))<br/>
          BC = AD (Given)<br/>
          So, ΔABC ≅ ΔBAD (SAS)<br/>
          (iv) AC = BD (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) ∠A = ∠B (ii) ∠C = ∠D (iii) ΔABC ≅ ΔBAD (iv) AC = BD</span></div>
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
        
        .question { color: #FFA726; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFA726; padding-left: 15px; margin-top: 15px; background: rgba(255, 167, 38, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFA726 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFA726 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 167, 38, 0.05) !important; border-left: 4px solid #FFA726 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFA726 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFA726 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFA726 !important; font-weight: 700; }
        strong { color: #FFA726 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFA726; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 167, 38, 0.05); color: #FFA726; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. ABCD is a quadrilateral in which P, Q, R and S are mid-points of the sides AB, BC, CD and DA. AC is a diagonal. Show that : </br> (i) SR || AC and SR = 1/2 AC </br> (ii) PQ = SR  </br>(iii) PQRS is a parallelogram.</div>
        <svg viewBox="0 0 240 170" class="ex-img">
          <path d="M30,140 L190,150 L215,40 L80,25 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M110,145 L202.5,95 L147.5,32.5 L55,82.5 Z" fill="none" stroke="#FB8C00" stroke-width="2"/>
          <line x1="30" y1="140" x2="215" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="16" y="152" font-size="14" fill="white">A</text>
          <text x="192" y="166" font-size="14" fill="white">B</text>
          <text x="219" y="40" font-size="14" fill="white">C</text>
          <text x="74" y="19" font-size="14" fill="white">D</text>
          <text x="106" y="161" font-size="14" fill="#FB8C00">P</text>
          <text x="208.5" y="99" font-size="14" fill="#FB8C00">Q</text>
          <text x="145.5" y="26.5" font-size="14" fill="#FB8C00">R</text>
          <text x="39" y="82.5" font-size="14" fill="#FB8C00">S</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) In ΔACD, S and R are the mid-points of AD and CD.<br/>
          Mid-point Theorem: SR ∥ AC and SR = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>AC<br/>
          (ii) In ΔABC, P and Q are the mid-points of AB and BC.<br/>
          Mid-point Theorem: PQ ∥ AC and PQ = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>AC<br/>
          So, PQ = SR<br/>
          (iii) PQ ∥ AC and SR ∥ AC, so PQ ∥ SR<br/>
          PQ = SR and PQ ∥ SR, so PQRS is a parallelogram.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) SR ∥ AC, SR = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>AC (ii) PQ = SR (iii) PQRS is a parallelogram</span></div>
        </div>

        <div class="question">2. ABCD is a rhombus and P, Q, R and S are the mid-points of the sides AB, BC, CD and DA respectively. Show that the quadrilateral PQRS is a rectangle.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M20,90 L120,160 L220,90 L120,20 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M70,125 L170,125 L170,55 L70,55 Z" fill="none" stroke="#FB8C00" stroke-width="2"/>
          <line x1="20" y1="90" x2="220" y2="90" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="120" y1="160" x2="120" y2="20" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="6" y="94" font-size="14" fill="white">A</text>
          <text x="116" y="176" font-size="14" fill="white">B</text>
          <text x="224" y="94" font-size="14" fill="white">C</text>
          <text x="116" y="14" font-size="14" fill="white">D</text>
          <text x="56" y="137" font-size="14" fill="#FB8C00">P</text>
          <text x="174" y="137" font-size="14" fill="#FB8C00">Q</text>
          <text x="174" y="51" font-size="14" fill="#FB8C00">R</text>
          <text x="56" y="51" font-size="14" fill="#FB8C00">S</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABC: PQ ∥ AC (Mid-point Theorem)<br/>
          In ΔBCD: QR ∥ BD (Mid-point Theorem)<br/>
          As in Q1, PQRS is a parallelogram.<br/>
          Diagonals of a rhombus are perpendicular: AC ⊥ BD<br/>
          PQ ∥ AC and QR ∥ BD, so PQ ⊥ QR, i.e. ∠PQR = 90°<br/>
          A parallelogram with one angle 90° is a rectangle.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">PQRS is a rectangle</span></div>
        </div>

        <div class="question">3. ABCD is a rectangle and P, Q, R and S are mid-points of the sides AB, BC, CD and DA respectively. Show that the quadrilateral PQRS is a rhombus.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M30,150 L210,150 L210,40 L30,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M120,150 L210,95 L120,40 L30,95 Z" fill="none" stroke="#FB8C00" stroke-width="2"/>
          <line x1="30" y1="150" x2="210" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="210" y1="150" x2="30" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="14" y="164" font-size="14" fill="white">A</text>
          <text x="214" y="164" font-size="14" fill="white">B</text>
          <text x="214" y="36" font-size="14" fill="white">C</text>
          <text x="14" y="36" font-size="14" fill="white">D</text>
          <text x="116" y="166" font-size="14" fill="#FB8C00">P</text>
          <text x="216" y="99" font-size="14" fill="#FB8C00">Q</text>
          <text x="116" y="34" font-size="14" fill="#FB8C00">R</text>
          <text x="14" y="99" font-size="14" fill="#FB8C00">S</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABC: PQ = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>AC (Mid-point Theorem)<br/>
          In ΔBCD: QR = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>BD (Mid-point Theorem)<br/>
          Diagonals of a rectangle are equal: AC = BD<br/>
          So, PQ = QR<br/>
          As in Q1, PQRS is a parallelogram.<br/>
          A parallelogram with two adjacent sides equal is a rhombus.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">PQRS is a rhombus</span></div>
        </div>

        <div class="question">4. ABCD is a trapezium in which AB || DC, BD is a diagonal and E is the mid-point of AD. A line is drawn through E parallel to AB intersecting BC at F. Show that F is the mid-point of BC.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M20,150 L220,150 L170,40 L60,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="220" y1="150" x2="60" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="40" y1="95" x2="195" y2="95" stroke="#FB8C00" stroke-width="2"/>
          <text x="4" y="164" font-size="14" fill="white">A</text>
          <text x="224" y="164" font-size="14" fill="white">B</text>
          <text x="174" y="36" font-size="14" fill="white">C</text>
          <text x="44" y="36" font-size="14" fill="white">D</text>
          <text x="24" y="99" font-size="14" fill="#FB8C00">E</text>
          <text x="201" y="99" font-size="14" fill="#FB8C00">F</text>
          <text x="136" y="111" font-size="14" fill="#FB8C00">G</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let EF meet BD at G.<br/>
          In ΔABD: E is the mid-point of AD and EG ∥ AB<br/>
          Converse of the Mid-point Theorem: G is the mid-point of BD<br/>
          In ΔBCD: G is the mid-point of BD and GF ∥ DC (EF ∥ AB ∥ DC)<br/>
          Converse of the Mid-point Theorem: F is the mid-point of BC<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">F is the mid-point of BC</span></div>
        </div>

        <div class="question">5. In a parallelogram ABCD, E and F are the mid-points of sides AB and CD respectively. Show that the line segments AF and EC trisect the diagonal BD.</div>
        <svg viewBox="0 0 240 170" class="ex-img">
          <path d="M20,140 L170,140 L220,40 L70,40 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="170" y1="140" x2="70" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="20" y1="140" x2="145" y2="40" stroke="#FB8C00" stroke-width="2"/>
          <line x1="95" y1="140" x2="220" y2="40" stroke="#FB8C00" stroke-width="2"/>
          <text x="4" y="154" font-size="14" fill="white">A</text>
          <text x="174" y="154" font-size="14" fill="white">B</text>
          <text x="224" y="36" font-size="14" fill="white">C</text>
          <text x="54" y="36" font-size="14" fill="white">D</text>
          <text x="91" y="156" font-size="14" fill="#FB8C00">E</text>
          <text x="141" y="34" font-size="14" fill="#FB8C00">F</text>
          <text x="85.33" y="78.33" font-size="14" fill="#FB8C00">P</text>
          <text x="147.67" y="108.67" font-size="14" fill="#FB8C00">Q</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          AE = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>AB and FC = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>DC; since AB = DC, AE = FC<br/>
          AE ∥ FC (AB ∥ DC), so AECF is a parallelogram and AF ∥ EC<br/>
          Let AF meet BD at P and EC meet BD at Q.<br/>
          In ΔDQC: F is the mid-point of DC and FP ∥ CQ, so P is the mid-point of DQ: DP = PQ<br/>
          In ΔABP: E is the mid-point of AB and EQ ∥ AP, so Q is the mid-point of BP: PQ = QB<br/>
          So, DP = PQ = QB<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AF and EC trisect the diagonal BD</span></div>
        </div>

        <div class="question">6. ABC is a triangle right angled at C. A line through the mid-point M of hypotenuse AB and parallel to BC intersects AC at D. Show that </br> (i) D is the mid-point of AC </br> (ii) MD &perp; AC </br> (iii) CM = MA = 1/2 AB.</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M210,150 L40,30 L40,150 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="125" y1="90" x2="125" y2="150" stroke="#FB8C00" stroke-width="2"/>
          <line x1="40" y1="150" x2="125" y2="90" stroke="#FB8C00" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M48,150 L48,142 L40,142" fill="none" stroke="white" stroke-width="1"/>
          <path d="M132,150 L132,143 L125,143" fill="none" stroke="white" stroke-width="1"/>
          <text x="214" y="164" font-size="14" fill="white">A</text>
          <text x="36" y="24" font-size="14" fill="white">B</text>
          <text x="24" y="164" font-size="14" fill="white">C</text>
          <text x="131" y="86" font-size="14" fill="#FB8C00">M</text>
          <text x="121" y="166" font-size="14" fill="#FB8C00">D</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) In ΔABC: M is the mid-point of AB and MD ∥ BC<br/>
          Converse of the Mid-point Theorem: D is the mid-point of AC<br/>
          (ii) ∠ADM = ∠ACB = 90° (Corresponding angles, MD ∥ BC)<br/>
          So, MD ⊥ AC<br/>
          (iii) In ΔAMD and ΔCMD:<br/>
          AD = CD (D is the mid-point of AC)<br/>
          ∠ADM = ∠CDM = 90°<br/>
          DM = DM (Common)<br/>
          So, ΔAMD ≅ ΔCMD (SAS)<br/>
          MA = MC (CPCT), and MA = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>AB (M is the mid-point of AB)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) D is the mid-point of AC (ii) MD ⊥ AC (iii) CM = MA = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>AB</span></div>
        </div>
      </div>
`,
  },
  mcqs: [
    {
      id: "m1",
      question: "The sum of all angles of a quadrilateral is:",
      options: ["180°", "270°", "360°", "400°"],
      correctAnswer: "C",
    },
    {
      id: "m2",
      question:
        "If the diagonals of a quadrilateral bisect each other, then it is a:",
      options: ["Trapezium", "Parallelogram", "Kite", "None"],
      correctAnswer: "B",
    },
    {
      id: "m3",
      question: "A quadrilateral with all sides equal and one angle 90° is a:",
      options: ["Rhombus", "Rectangle", "Square", "Trapezium"],
      correctAnswer: "C",
    },
    {
      id: "m4",
      question: "The diagonals of a rhombus bisect each other at:",
      options: ["30°", "45°", "60°", "90°"],
      correctAnswer: "D",
    },
    {
      id: "m5",
      question:
        "If three angles of a quadrilateral are 75°, 90°, and 75°, the fourth angle is:",
      options: ["90°", "95°", "105°", "120°"],
      correctAnswer: "D",
    },
    {
      id: "m6",
      question:
        "The line joining the mid-points of two sides of a triangle is:",
      options: [
        "Parallel to third side",
        "Half of third side",
        "Both A and B",
        "None",
      ],
      correctAnswer: "C",
    },
    {
      id: "m7",
      question: "Diagonals of which quadrilateral are always equal?",
      options: ["Parallelogram", "Rhombus", "Rectangle", "Trapezium"],
      correctAnswer: "C",
    },
    {
      id: "m8",
      question: "A diagonal of a parallelogram divides it into two:",
      options: [
        "Similar triangles",
        "Congruent triangles",
        "Equilateral triangles",
        "Right triangles",
      ],
      correctAnswer: "B",
    },
    {
      id: "m9",
      question: "In a parallelogram ABCD, if ∠A = 100°, then ∠B is:",
      options: ["80°", "100°", "90°", "180°"],
      correctAnswer: "A",
    },
    {
      id: "m10",
      question: "Every square is a:",
      options: ["Rhombus", "Rectangle", "Parallelogram", "All of these"],
      correctAnswer: "D",
    },
  ],
};
