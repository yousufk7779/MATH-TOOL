import { ChapterContent } from "../types";

export const c9Math8: ChapterContent = {
  id: "c9-math-8",
  number: 8,
  title: "Circles",
  isHtmlView: true,
  introduction:
    "In this chapter, we study the properties of circles, including chords, arcs, and the angles they subtend. We explore important theorems regarding perpendiculars from the centre to a chord, equal chords and their distances from the centre, and angles subtended by arcs of a circle.",
  exercises: [
    { id: "ex8-1", name: "Ex 8.1", questions: [] },
    { id: "ex8-2", name: "Ex 8.2", questions: [] },
    { id: "ex8-3", name: "Ex 8.3", questions: [] },
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
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 138, 101, 0.05); color: #FF8A65; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">

      <div class="step">A <span class="highlight">Circle</span> is a collection of all points in a plane which are at a constant distance (radius) from a fixed point (centre).</div>
      
      <h3>Key Terms:</h3>
      <div class="step"><span class="highlight">Chord:</span> A line segment joining any two points on the circle. The longest chord is the <span class="highlight">Diameter</span>.</div>
      <div class="step"><span class="highlight">Arc:</span> A piece of a circle between two points. A diameter divides a circle into two equal arcs called <span class="highlight">Semicircles</span>.</div>
      <div class="step"><span class="highlight">Segment:</span> Region between a chord and either of its arcs.</div>
      <div class="step"><span class="highlight">Sector:</span> Region between an arc and two radii joining the centre to the endpoints of the arc.</div>

      <h3>Important Theorems:</h3>
      <div class="step">1. Equal chords subtend equal angles at the centre.</div>
      <div class="step">2. Perpendicular from the centre to a chord bisects the chord.</div>
      <div class="step">3. Equal chords are equidistant from the centre.</div>
      <div class="step">4. The angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle. So, the angle in a semicircle is 90&deg;.</div>
      <div class="step">5. Angles in the same segment of a circle are equal.</div>
      <div class="step">6. The sum of either pair of opposite angles of a cyclic quadrilateral is 180&deg;. Conversely, if the sum of a pair of opposite angles of a quadrilateral is 180&deg;, the quadrilateral is cyclic.</div>
    </div>
`,
  htmlExercises: {
    "ex8-1": `
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
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 138, 101, 0.05); color: #FF8A65; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. Recall that two circles are congruent if they have the same radii. Prove that equal chords of congruent circles subtend equal angles at their centres.</div>
        <svg viewBox="0 0 290 155" class="ex-img">
          <circle cx="70" cy="80" r="55" fill="none" stroke="white" stroke-width="2.5"/>
          <circle cx="215" cy="80" r="55" fill="none" stroke="white" stroke-width="2.5"/>
          <circle cx="70" cy="80" r="2.5" fill="white"/>
          <circle cx="215" cy="80" r="2.5" fill="white"/>
          <line x1="70" y1="80" x2="22.37" y2="107.5" stroke="white" stroke-width="1.5"/>
          <line x1="70" y1="80" x2="117.63" y2="107.5" stroke="white" stroke-width="1.5"/>
          <line x1="215" y1="80" x2="163.32" y2="98.81" stroke="white" stroke-width="1.5"/>
          <line x1="215" y1="80" x2="257.13" y2="115.35" stroke="white" stroke-width="1.5"/>
          <text x="65" y="73" font-size="14" fill="white">O</text>
          <text x="209" y="73" font-size="14" fill="white">O′</text>
          <text x="6.61" y="119" font-size="14" fill="white">A</text>
          <text x="124.39" y="119" font-size="14" fill="white">B</text>
          <text x="146.6" y="108.26" font-size="14" fill="white">C</text>
          <text x="262.59" y="128.71" font-size="14" fill="white">D</text>
          <line x1="22.37" y1="107.5" x2="117.63" y2="107.5" stroke="#FF8A65" stroke-width="2.5"/>
          <line x1="163.32" y1="98.81" x2="257.13" y2="115.35" stroke="#FF8A65" stroke-width="2.5"/>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let the congruent circles have centres O and O′, with equal chords AB and CD.<br/>
          In ΔAOB and ΔCO′D:<br/>
          OA = O′C (Equal radii)<br/>
          OB = O′D (Equal radii)<br/>
          AB = CD (Given)<br/>
          So, ΔAOB ≅ ΔCO′D (SSS)<br/>
          ∠AOB = ∠CO′D (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠AOB = ∠CO′D, so equal chords subtend equal angles at the centres</span></div>
        </div>

        <div class="question">2. Prove that if chords of congruent circles subtend equal angles at their centres, then the chords are equal.</div>
        <svg viewBox="0 0 290 155" class="ex-img">
          <circle cx="70" cy="80" r="55" fill="none" stroke="white" stroke-width="2.5"/>
          <circle cx="215" cy="80" r="55" fill="none" stroke="white" stroke-width="2.5"/>
          <circle cx="70" cy="80" r="2.5" fill="white"/>
          <circle cx="215" cy="80" r="2.5" fill="white"/>
          <line x1="70" y1="80" x2="22.37" y2="107.5" stroke="white" stroke-width="1.5"/>
          <line x1="70" y1="80" x2="117.63" y2="107.5" stroke="white" stroke-width="1.5"/>
          <line x1="215" y1="80" x2="163.32" y2="98.81" stroke="white" stroke-width="1.5"/>
          <line x1="215" y1="80" x2="257.13" y2="115.35" stroke="white" stroke-width="1.5"/>
          <text x="65" y="73" font-size="14" fill="white">O</text>
          <text x="209" y="73" font-size="14" fill="white">O′</text>
          <text x="6.61" y="119" font-size="14" fill="white">A</text>
          <text x="124.39" y="119" font-size="14" fill="white">B</text>
          <text x="146.6" y="108.26" font-size="14" fill="white">C</text>
          <text x="262.59" y="128.71" font-size="14" fill="white">D</text>
          <line x1="22.37" y1="107.5" x2="117.63" y2="107.5" stroke="white" stroke-width="2.5"/>
          <line x1="163.32" y1="98.81" x2="257.13" y2="115.35" stroke="white" stroke-width="2.5"/>
          <path d="M57.88,87 A14,14 0 0 0 82.12,87" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <path d="M201.84,84.79 A14,14 0 0 0 225.72,89" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let the congruent circles have centres O and O′, with ∠AOB = ∠CO′D.<br/>
          In ΔAOB and ΔCO′D:<br/>
          OA = O′C (Equal radii)<br/>
          ∠AOB = ∠CO′D (Given)<br/>
          OB = O′D (Equal radii)<br/>
          So, ΔAOB ≅ ΔCO′D (SAS)<br/>
          AB = CD (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AB = CD, so the chords are equal</span></div>
        </div>
      </div>
`,
    "ex8-2": `
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
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 138, 101, 0.05); color: #FF8A65; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. Two circles of radii 5 cm and 3 cm intersect at two points and the distance between their centres is 4 cm. Find the length of the common chord.</div>
        <svg viewBox="0 0 270 250" class="ex-img">
          <circle cx="110" cy="125" r="100" fill="none" stroke="white" stroke-width="2.5"/>
          <circle cx="190" cy="125" r="60" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="110" y1="125" x2="190" y2="125" stroke="white" stroke-width="2.5"/>
          <line x1="110" y1="125" x2="190" y2="65" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="190" y1="65" x2="190" y2="185" stroke="#FF8A65" stroke-width="2.5"/>
          <path d="M183,125 L183,118 L190,118" fill="none" stroke="white" stroke-width="1"/>
          <circle cx="110" cy="125" r="2.5" fill="white"/>
          <circle cx="190" cy="125" r="2.5" fill="white"/>
          <text x="104" y="142" font-size="14" fill="white">O</text>
          <text x="172" y="142" font-size="14" fill="white">O′</text>
          <text x="186" y="58" font-size="14" fill="#FF8A65">P</text>
          <text x="186" y="203" font-size="14" fill="#FF8A65">Q</text>
          <text x="110" y="89" font-size="11" fill="#FF8A65">5 cm</text>
          <text x="198" y="99" font-size="11" fill="#FF8A65">3 cm</text>
          <text x="138" y="140" font-size="11" fill="#FF8A65">4 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let O (radius 5 cm) and O′ (radius 3 cm) be the centres, OO′ = 4 cm, and PQ the common chord.<br/>
          O and O′ are each equidistant from P and Q, so OO′ is the perpendicular bisector of PQ. Let it meet PQ at M.<br/>
          Let OM = x cm, so O′M = (4 − x) cm.<br/>
          In right ΔOMP: PM² = 5² − x²<br/>
          In right ΔO′MP: PM² = 3² − (4 − x)²<br/>
          25 − x² = 9 − 16 + 8x − x²<br/>
          8x = 32, so x = 4 (M is the point O′)<br/>
          PM² = 25 − 16 = 9, so PM = 3 cm<br/>
          PQ = 2 × PM = 6 cm<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Length of the common chord = 6 cm</span></div>
        </div>

        <div class="question">2. If two equal chords of a circle intersect within the circle, prove that the segments of one chord are equal to corresponding segments of the other chord.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="122" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="56.58" y1="178.59" x2="201.81" y2="145.06" stroke="white" stroke-width="2.5"/>
          <line x1="151.48" y1="43.04" x2="169.65" y2="190.99" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="122" x2="129.19" y2="161.83" stroke="#FF8A65" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="120" y1="122" x2="160.57" y2="117.02" stroke="#FF8A65" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="120" y1="122" x2="165.05" y2="153.55" stroke="#FF8A65" stroke-width="2"/>
          <path d="M127.84,155.98 L133.69,154.63 L135.04,160.48" fill="none" stroke="white" stroke-width="1"/>
          <path d="M154.61,117.75 L155.35,123.71 L161.3,122.98" fill="none" stroke="white" stroke-width="1"/>
          <circle cx="120" cy="122" r="2.5" fill="white"/>
          <text x="114" y="116" font-size="14" fill="white">O</text>
          <text x="42.38" y="192.25" font-size="14" fill="white">A</text>
          <text x="209.82" y="153.59" font-size="14" fill="white">B</text>
          <text x="151.79" y="35.96" font-size="14" fill="white">C</text>
          <text x="172.74" y="206.54" font-size="14" fill="white">D</text>
          <text x="172.02" y="166.58" font-size="14" fill="#FF8A65">E</text>
          <text x="127.84" y="180.47" font-size="14" fill="#FF8A65">M</text>
          <text x="169.97" y="120.31" font-size="14" fill="#FF8A65">N</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let equal chords AB and CD meet at E. Draw OM ⊥ AB, ON ⊥ CD and join OE.<br/>
          OM = ON (Equal chords are equidistant from the centre)<br/>
          AM = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>AB = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>CD = CN (Perpendicular from the centre bisects the chord)<br/>
          In ΔOME and ΔONE:<br/>
          ∠OME = ∠ONE = 90°<br/>
          OE = OE (Common)<br/>
          OM = ON<br/>
          So, ΔOME ≅ ΔONE (RHS)<br/>
          ME = NE (CPCT)<br/>
          AE = AM + ME = CN + NE = CE<br/>
          BE = AB − AE = CD − CE = DE<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AE = CE and BE = DE</span></div>
        </div>

        <div class="question">3. If two equal chords of a circle intersect within the circle, prove that the line joining the point of intersection to the centre makes equal angles with the chords.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="122" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="56.58" y1="178.59" x2="201.81" y2="145.06" stroke="white" stroke-width="2.5"/>
          <line x1="151.48" y1="43.04" x2="169.65" y2="190.99" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="122" x2="129.19" y2="161.83" stroke="#FF8A65" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="120" y1="122" x2="160.57" y2="117.02" stroke="#FF8A65" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="120" y1="122" x2="165.05" y2="153.55" stroke="#FF8A65" stroke-width="2"/>
          <path d="M127.84,155.98 L133.69,154.63 L135.04,160.48" fill="none" stroke="white" stroke-width="1"/>
          <path d="M154.61,117.75 L155.35,123.71 L161.3,122.98" fill="none" stroke="white" stroke-width="1"/>
          <circle cx="120" cy="122" r="2.5" fill="white"/>
          <text x="114" y="116" font-size="14" fill="white">O</text>
          <text x="42.38" y="192.25" font-size="14" fill="white">A</text>
          <text x="209.82" y="153.59" font-size="14" fill="white">B</text>
          <text x="151.79" y="35.96" font-size="14" fill="white">C</text>
          <text x="172.74" y="206.54" font-size="14" fill="white">D</text>
          <text x="172.02" y="166.58" font-size="14" fill="#FF8A65">E</text>
          <text x="127.84" y="180.47" font-size="14" fill="#FF8A65">M</text>
          <text x="169.97" y="120.31" font-size="14" fill="#FF8A65">N</text>
          <path d="M152.76,144.95 A15,15 0 0 0 150.43,156.92" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <path d="M149.49,142.65 A19,19 0 0 1 162.74,134.69" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let equal chords AB and CD meet at E. Draw OM ⊥ AB, ON ⊥ CD and join OE.<br/>
          OM = ON (Equal chords are equidistant from the centre)<br/>
          In ΔOME and ΔONE:<br/>
          ∠OME = ∠ONE = 90°<br/>
          OE = OE (Common)<br/>
          OM = ON<br/>
          So, ΔOME ≅ ΔONE (RHS)<br/>
          ∠OEM = ∠OEN (CPCT)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠OEM = ∠OEN, so OE makes equal angles with the chords</span></div>
        </div>

        <div class="question">4. If a line intersects two concentric circles (circles with the same centre) with centre O at A, B, C and D, prove that AB = CD (see Fig. 8.12).</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="120" r="90" fill="none" stroke="white" stroke-width="2.5"/>
          <circle cx="120" cy="120" r="55" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="33.61" y1="183.37" x2="226.91" y2="113.01" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="120" x2="130.26" y2="148.19" stroke="#FF8A65" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M128.21,142.55 L133.85,140.5 L135.9,146.14" fill="none" stroke="white" stroke-width="1"/>
          <circle cx="120" cy="120" r="2.5" fill="white"/>
          <circle cx="50.52" cy="177.21" r="2.5" fill="#FF8A65"/>
          <circle cx="86.94" cy="163.96" r="2.5" fill="#FF8A65"/>
          <circle cx="173.58" cy="132.42" r="2.5" fill="#FF8A65"/>
          <circle cx="210" cy="119.17" r="2.5" fill="#FF8A65"/>
          <text x="115" y="113" font-size="14" fill="white">O</text>
          <text x="44.52" y="195.21" font-size="14" fill="white">A</text>
          <text x="84.94" y="181.96" font-size="14" fill="white">B</text>
          <text x="176.58" y="148.42" font-size="14" fill="white">C</text>
          <text x="214" y="135.17" font-size="14" fill="white">D</text>
          <text x="127.26" y="166.19" font-size="14" fill="#FF8A65">M</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Draw OM ⊥ AD.<br/>
          AD is a chord of the bigger circle, so AM = DM (Perpendicular from the centre bisects the chord)<br/>
          BC is a chord of the smaller circle, so BM = CM<br/>
          Subtracting: AM − BM = DM − CM<br/>
          So, AB = CD<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AB = CD</span></div>
        </div>

        <div class="question">5. Three girls Reshma, Salma and Mandip are playing a game by standing on a circle of radius 5m drawn in a park. Reshma throws a ball to Salma, Salma to Mandip, Mandip to Reshma. If the distance between Reshma and Salma and between Salma and Mandip is 6m each, what is the distance between Reshma and Mandip?</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="122" r="90" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="33.6" y1="96.8" x2="120" y2="32" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="32" x2="206.4" y2="96.8" stroke="white" stroke-width="2.5"/>
          <line x1="33.6" y1="96.8" x2="206.4" y2="96.8" stroke="#FF8A65" stroke-width="2.5"/>
          <line x1="120" y1="32" x2="120" y2="96.8" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="120" y1="122" x2="33.6" y2="96.8" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M120,90.8 L126,90.8 L126,96.8" fill="none" stroke="white" stroke-width="1"/>
          <circle cx="120" cy="122" r="2.5" fill="white"/>
          <text x="16.62" y="98.16" font-size="14" fill="white">R</text>
          <text x="115.5" y="24" font-size="14" fill="white">S</text>
          <text x="214.38" y="98.16" font-size="14" fill="white">M</text>
          <text x="125" y="126" font-size="14" fill="white">O</text>
          <text x="116" y="113.8" font-size="14" fill="#FF8A65">P</text>
          <text x="49.8" y="54.4" font-size="11" fill="#FF8A65">6 m</text>
          <text x="173.2" y="52.4" font-size="11" fill="#FF8A65">6 m</text>
          <text x="66.8" y="125.4" font-size="11" fill="#FF8A65">5 m</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let R, S, M be Reshma, Salma and Mandip, and O the centre.<br/>
          OR = OS = OM = 5 m and RS = SM = 6 m<br/>
          S and O are each equidistant from R and M, so OS is the perpendicular bisector of RM. Let it meet RM at P.<br/>
          Let OP = x m, so PS = (5 − x) m.<br/>
          In right ΔOPR: RP² = 5² − x²<br/>
          In right ΔSPR: RP² = 6² − (5 − x)²<br/>
          25 − x² = 36 − 25 + 10x − x²<br/>
          10x = 14, so x = 1.4<br/>
          RP² = 25 − 1.96 = 23.04, so RP = 4.8 m<br/>
          RM = 2 × RP = 9.6 m<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Distance between Reshma and Mandip = 9.6 m</span></div>
        </div>

        <div class="question">6. A circular park of radius 20m is situated in a colony. Three boys Ankur, Syed and David are sitting at equal distance on its boundary each having a toy telephone in his hands to talk each other. Find the length of the string of each phone.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="122" r="90" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M120,32 L42.06,167 L197.94,167 Z" fill="none" stroke="#FF8A65" stroke-width="2.5"/>
          <line x1="120" y1="32" x2="120" y2="167" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="120" y1="122" x2="42.06" y2="167" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M120,161 L126,161 L126,167" fill="none" stroke="white" stroke-width="1"/>
          <circle cx="120" cy="122" r="2.5" fill="white"/>
          <text x="115.5" y="24" font-size="14" fill="white">A</text>
          <text x="26.3" y="178.5" font-size="14" fill="white">S</text>
          <text x="204.7" y="178.5" font-size="14" fill="white">D</text>
          <text x="125" y="126" font-size="14" fill="white">O</text>
          <text x="116" y="184" font-size="14" fill="white">P</text>
          <text x="77.03" y="160.5" font-size="11" fill="#FF8A65">20 m</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let A, S, D be Ankur, Syed and David, and O the centre: OA = 20 m.<br/>
          They are equally spaced, so AS = SD = DA: ΔASD is equilateral.<br/>
          Draw the median AP to SD. In an equilateral triangle it is also the altitude and passes through O.<br/>
          O divides the median in the ratio 2 : 1, so OP = 10 m and AP = 30 m.<br/>
          Let each side = a m. Then SP = <span class='frac'><span class='num'>a</span><span class='den'>2</span></span> m.<br/>
          In right ΔAPS: AS² = AP² + SP²<br/>
          a² = 900 + <span class='frac'><span class='num'>a²</span><span class='den'>4</span></span><br/>
          <span class='frac'><span class='num'>3a²</span><span class='den'>4</span></span> = 900<br/>
          a² = 1200, so a = 20√3<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Length of each string = 20√3 m (≈ 34.64 m)</span></div>
        </div>
      </div>
`,
    "ex8-3": `
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
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 138, 101, 0.05); color: #FF8A65; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. In Fig. 8.23, A, B and C are three points on a circle with centre O such that ∠BOC = 30° and ∠AOB = 60°. If D is a point on the circle other than the arc ABC, find ∠ADC.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="122" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="122" x2="46.39" y2="79.5" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="122" x2="120" y2="37" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="122" x2="162.5" y2="48.39" stroke="white" stroke-width="2.5"/>
          <line x1="134.76" y1="205.71" x2="46.39" y2="79.5" stroke="#FF8A65" stroke-width="2"/>
          <line x1="134.76" y1="205.71" x2="162.5" y2="48.39" stroke="#FF8A65" stroke-width="2"/>
          <path d="M106.14,114 A16,16 0 0 1 120,106" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <path d="M120,100 A22,22 0 0 1 131,102.95" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <circle cx="120" cy="122" r="2.5" fill="white"/>
          <text x="30.63" y="78" font-size="14" fill="white">A</text>
          <text x="115.5" y="29" font-size="14" fill="white">B</text>
          <text x="164.5" y="42.13" font-size="14" fill="white">C</text>
          <text x="132.52" y="223.51" font-size="14" fill="white">D</text>
          <text x="116" y="140" font-size="14" fill="white">O</text>
          <text x="94" y="98.29" font-size="11" fill="#FF8A65">60°</text>
          <text x="121.91" y="81.57" font-size="11" fill="#FF8A65">30°</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠AOC = ∠AOB + ∠BOC = 60° + 30° = 90°<br/>
          ∠ADC = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>∠AOC (Angle at the centre is double the angle at the circle)<br/>
          ∠ADC = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 90° = 45°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠ADC = 45°</span></div>
        </div>

        <div class="question">2. A chord of a circle is equal to the radius of the circle. Find the angle subtended by the chord at a point on the minor arc and also at a point on the major arc.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="120" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="120" x2="77.5" y2="193.61" stroke="white" stroke-width="1.5"/>
          <line x1="120" y1="120" x2="162.5" y2="193.61" stroke="white" stroke-width="1.5"/>
          <line x1="77.5" y1="193.61" x2="162.5" y2="193.61" stroke="#FF8A65" stroke-width="2.5"/>
          <line x1="120" y1="35" x2="77.5" y2="193.61" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="35" x2="162.5" y2="193.61" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="205" x2="77.5" y2="193.61" stroke="white" stroke-width="1.5"/>
          <line x1="120" y1="205" x2="162.5" y2="193.61" stroke="white" stroke-width="1.5"/>
          <circle cx="120" cy="120" r="2.5" fill="white"/>
          <text x="66.5" y="209.87" font-size="14" fill="white">A</text>
          <text x="164.5" y="209.87" font-size="14" fill="white">B</text>
          <text x="115.5" y="27" font-size="14" fill="white">C</text>
          <text x="115.5" y="223" font-size="14" fill="white">D</text>
          <text x="115" y="113" font-size="14" fill="white">O</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let chord AB = radius. Then OA = OB = AB, so ΔOAB is equilateral: ∠AOB = 60°<br/>
          At C on the major arc: ∠ACB = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>∠AOB = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 60° = 30°<br/>
          At D on the minor arc: ACBD is a cyclic quadrilateral, so ∠ADB + ∠ACB = 180°<br/>
          ∠ADB = 180° − 30° = 150°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">150° at a point on the minor arc and 30° at a point on the major arc</span></div>
        </div>

        <div class="question">3. In Fig. 8.24, ∠PQR = 100°, where P, Q and R are points on a circle with centre O. Find ∠OPR.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="124" r="90" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="31.37" y1="108.37" x2="81.96" y2="42.43" stroke="white" stroke-width="2.5"/>
          <line x1="81.96" y1="42.43" x2="208.63" y2="108.37" stroke="white" stroke-width="2.5"/>
          <line x1="31.37" y1="108.37" x2="208.63" y2="108.37" stroke="white" stroke-width="2.5"/>
          <line x1="120" y1="124" x2="31.37" y2="108.37" stroke="#FF8A65" stroke-width="2"/>
          <line x1="120" y1="124" x2="208.63" y2="108.37" stroke="#FF8A65" stroke-width="2"/>
          <path d="M72.22,55.12 A16,16 0 0 0 96.15,49.82" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <circle cx="120" cy="124" r="2.5" fill="white"/>
          <text x="14.07" y="111.11" font-size="14" fill="white">P</text>
          <text x="71.97" y="35.65" font-size="14" fill="white">Q</text>
          <text x="216.93" y="111.11" font-size="14" fill="white">R</text>
          <text x="116" y="142" font-size="14" fill="white">O</text>
          <text x="78.45" y="75.72" font-size="11" fill="#FF8A65">100°</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Reflex ∠POR = 2∠PQR = 2 × 100° = 200° (Angle at the centre)<br/>
          ∠POR = 360° − 200° = 160°<br/>
          In ΔOPR: OP = OR (Radii), so ∠OPR = ∠ORP<br/>
          ∠OPR + ∠ORP = 180° − 160° = 20°, so ∠OPR = 10°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠OPR = 10°</span></div>
        </div>

        <div class="question">4. In Fig. 8.25, ∠ABC = 69°, ∠ACB = 31°, find ∠BDC.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="122" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="36.29" y1="136.76" x2="203.71" y2="136.76" stroke="white" stroke-width="2.5"/>
          <line x1="67.67" y1="55.02" x2="36.29" y2="136.76" stroke="white" stroke-width="2.5"/>
          <line x1="67.67" y1="55.02" x2="203.71" y2="136.76" stroke="white" stroke-width="2.5"/>
          <line x1="142" y1="39.9" x2="36.29" y2="136.76" stroke="#FF8A65" stroke-width="2"/>
          <line x1="142" y1="39.9" x2="203.71" y2="136.76" stroke="#FF8A65" stroke-width="2"/>
          <path d="M42.02,121.82 A16,16 0 0 1 52.29,136.76" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <path d="M184.85,125.43 A22,22 0 0 0 181.71,136.76" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <text x="55.17" y="49.78" font-size="14" fill="white">A</text>
          <text x="18.99" y="144.02" font-size="14" fill="white">B</text>
          <text x="212.01" y="144.02" font-size="14" fill="white">C</text>
          <text x="140.86" y="32.34" font-size="14" fill="white">D</text>
          <text x="67.3" y="124.81" font-size="11" fill="#FF8A65">69°</text>
          <text x="157.09" y="130.61" font-size="11" fill="#FF8A65">31°</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          In ΔABC: ∠BAC = 180° − 69° − 31° = 80°<br/>
          ∠BDC = ∠BAC (Angles in the same segment)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠BDC = 80°</span></div>
        </div>

        <div class="question">5. In Fig. 8.26, A, B, C and D are four points on a circle. AC and BD intersect at a point E such that ∠BEC = 130° and ∠ECD = 20°. Find ∠BAC.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="124" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="90.93" y1="44.13" x2="40.13" y2="94.93" stroke="white" stroke-width="2.5"/>
          <line x1="40.13" y1="94.93" x2="199.87" y2="94.93" stroke="white" stroke-width="2.5"/>
          <line x1="199.87" y1="94.93" x2="149.07" y2="44.13" stroke="white" stroke-width="2.5"/>
          <line x1="90.93" y1="44.13" x2="199.87" y2="94.93" stroke="#FF8A65" stroke-width="2"/>
          <line x1="40.13" y1="94.93" x2="149.07" y2="44.13" stroke="#FF8A65" stroke-width="2"/>
          <path d="M111.84,61.49 A9,9 0 0 0 128.16,61.49" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <path d="M176.31,83.94 A26,26 0 0 1 181.49,76.55" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <text x="81.98" y="36.91" font-size="14" fill="white">A</text>
          <text x="23.41" y="95.48" font-size="14" fill="white">B</text>
          <text x="207.59" y="95.48" font-size="14" fill="white">C</text>
          <text x="149.02" y="36.91" font-size="14" fill="white">D</text>
          <text x="116" y="51.69" font-size="14" fill="#FF8A65">E</text>
          <text x="110" y="85.69" font-size="11" fill="#FF8A65">130°</text>
          <text x="142.36" y="65.66" font-size="11" fill="#FF8A65">20°</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠CED = 180° − ∠BEC = 180° − 130° = 50° (Linear pair)<br/>
          In ΔCED: ∠EDC = 180° − 50° − 20° = 110°<br/>
          ∠BAC = ∠BDC = ∠EDC (Angles in the same segment)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠BAC = 110°</span></div>
        </div>

        <div class="question">6. ABCD is a cyclic quadrilateral whose diagonals intersect at a point E. If ∠DBC = 70°, ∠BAC is 30°, find ∠BCD. Further, if AB = BC, find ∠ECD.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="122" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M37.9,100 L59.9,182.1 L142,204.1 L155.92,44.96 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="37.9" y1="100" x2="142" y2="204.1" stroke="#FF8A65" stroke-width="2"/>
          <line x1="59.9" y1="182.1" x2="155.92" y2="44.96" stroke="#FF8A65" stroke-width="2"/>
          <path d="M72.52,164.08 A22,22 0 0 1 81.15,187.79" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <path d="M44.11,123.18 A24,24 0 0 0 54.87,116.97" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <text x="20.84" y="101.64" font-size="14" fill="white">A</text>
          <text x="46.21" y="196.29" font-size="14" fill="white">B</text>
          <text x="140.86" y="221.66" font-size="14" fill="white">C</text>
          <text x="156.91" y="38.18" font-size="14" fill="white">D</text>
          <text x="91.65" y="151.75" font-size="14" fill="#FF8A65">E</text>
          <text x="83.73" y="173.79" font-size="11" fill="#FF8A65">70°</text>
          <text x="47.9" y="138.64" font-size="11" fill="#FF8A65">30°</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠BDC = ∠BAC = 30° (Angles in the same segment)<br/>
          In ΔBCD: ∠BCD = 180° − 70° − 30° = 80°<br/>
          If AB = BC: ∠BCA = ∠BAC = 30° (Angles opposite equal sides)<br/>
          ∠ECD = ∠BCD − ∠BCA = 80° − 30° = 50°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠BCD = 80° and ∠ECD = 50°</span></div>
        </div>

        <div class="question">7. If diagonals of a cyclic quadrilateral are diameters of the circle through the vertices of the quadrilateral, prove that it is a rectangle.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="122" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M46.39,79.5 L46.39,164.5 L193.61,164.5 L193.61,79.5 Z" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="46.39" y1="79.5" x2="193.61" y2="164.5" stroke="#FF8A65" stroke-width="2"/>
          <line x1="46.39" y1="164.5" x2="193.61" y2="79.5" stroke="#FF8A65" stroke-width="2"/>
          <path d="M54.39,79.5 L54.39,87.5 L46.39,87.5" fill="none" stroke="white" stroke-width="1"/>
          <path d="M46.39,156.5 L54.39,156.5 L54.39,164.5" fill="none" stroke="white" stroke-width="1"/>
          <path d="M185.61,164.5 L185.61,156.5 L193.61,156.5" fill="none" stroke="white" stroke-width="1"/>
          <path d="M193.61,87.5 L185.61,87.5 L185.61,79.5" fill="none" stroke="white" stroke-width="1"/>
          <circle cx="120" cy="122" r="2.5" fill="white"/>
          <text x="30.63" y="78" font-size="14" fill="white">A</text>
          <text x="30.63" y="176" font-size="14" fill="white">B</text>
          <text x="200.37" y="176" font-size="14" fill="white">C</text>
          <text x="200.37" y="78" font-size="14" fill="white">D</text>
          <text x="115" y="114" font-size="14" fill="white">O</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let ABCD be cyclic with diagonals AC and BD as diameters.<br/>
          ∠ABC = ∠ADC = 90° (Angles in a semicircle, AC is a diameter)<br/>
          ∠BAD = ∠BCD = 90° (Angles in a semicircle, BD is a diameter)<br/>
          All four angles are 90°, so ABCD is a rectangle.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">ABCD is a rectangle</span></div>
        </div>

        <div class="question">8. If the non-parallel sides of a trapezium are equal, prove that it is cyclic.</div>
        <svg viewBox="0 0 240 245" class="ex-img">
          <circle cx="120" cy="120" r="85" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M40.13,149.07 L199.87,149.07 L174.64,54.89 L65.36,54.89 Z" fill="none" stroke="#FF8A65" stroke-width="2.5"/>
          <line x1="65.36" y1="54.89" x2="65.36" y2="149.07" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="174.64" y1="54.89" x2="174.64" y2="149.07" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M59.36,149.07 L59.36,143.07 L65.36,143.07" fill="none" stroke="white" stroke-width="1"/>
          <path d="M180.64,149.07 L180.64,143.07 L174.64,143.07" fill="none" stroke="white" stroke-width="1"/>
          <text x="23.41" y="158.52" font-size="14" fill="white">A</text>
          <text x="207.59" y="158.52" font-size="14" fill="white">B</text>
          <text x="178.5" y="49.93" font-size="14" fill="white">C</text>
          <text x="52.5" y="49.93" font-size="14" fill="white">D</text>
          <text x="60.36" y="165.07" font-size="14" fill="white">M</text>
          <text x="169.64" y="165.07" font-size="14" fill="white">N</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let ABCD be a trapezium with AB ∥ DC and AD = BC.<br/>
          Draw DM ⊥ AB and CN ⊥ AB.<br/>
          In ΔAMD and ΔBNC:<br/>
          ∠AMD = ∠BNC = 90°<br/>
          AD = BC (Given)<br/>
          DM = CN (Distance between parallel lines)<br/>
          So, ΔAMD ≅ ΔBNC (RHS)<br/>
          ∠A = ∠B (CPCT)<br/>
          ∠A + ∠D = 180° (Co-interior angles, AB ∥ DC)<br/>
          So, ∠B + ∠D = 180°<br/>
          A pair of opposite angles is supplementary, so ABCD is cyclic.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">ABCD is a cyclic quadrilateral</span></div>
        </div>

        <div class="question">9. Two circles intersect at two points B and C. Through B, two line segments ABD and PBQ are drawn to intersect the circles at A, D and P, Q respectively (see Fig. 8.27). Prove that ∠ACP = ∠QCD.</div>
        <svg viewBox="0 0 275 190" class="ex-img">
          <circle cx="98" cy="108" r="70" fill="none" stroke="white" stroke-width="2.5"/>
          <circle cx="198" cy="108" r="55" fill="none" stroke="white" stroke-width="2.5"/>
          <line x1="28.46" y1="116.04" x2="206.63" y2="53.68" stroke="white" stroke-width="2.5"/>
          <line x1="105.16" y1="38.36" x2="249.17" y2="128.16" stroke="white" stroke-width="2.5"/>
          <line x1="157.38" y1="145.08" x2="28.46" y2="116.04" stroke="#FF8A65" stroke-width="2"/>
          <line x1="157.38" y1="145.08" x2="105.16" y2="38.36" stroke="#FF8A65" stroke-width="2"/>
          <line x1="157.38" y1="145.08" x2="249.17" y2="128.16" stroke="#FF8A65" stroke-width="2"/>
          <line x1="157.38" y1="145.08" x2="206.63" y2="53.68" stroke="#FF8A65" stroke-width="2"/>
          <path d="M137.87,140.69 A20,20 0 0 1 148.59,127.12" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <path d="M177.05,141.45 A20,20 0 0 0 166.87,127.47" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
          <text x="11.05" y="122.53" font-size="14" fill="white">A</text>
          <text x="101.99" y="30.43" font-size="14" fill="white">P</text>
          <text x="204.17" y="45.84" font-size="14" fill="white">D</text>
          <text x="256.77" y="137.93" font-size="14" fill="white">Q</text>
          <text x="153.38" y="61.92" font-size="14" fill="white">B</text>
          <text x="153.38" y="164.08" font-size="14" fill="white">C</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠ACP = ∠ABP (Angles in the same segment, first circle) ...(1)<br/>
          ∠QCD = ∠QBD (Angles in the same segment, second circle) ...(2)<br/>
          ∠ABP = ∠QBD (Vertically opposite angles) ...(3)<br/>
          From (1), (2) and (3): ∠ACP = ∠QCD<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠ACP = ∠QCD</span></div>
        </div>
      </div>
`,
  },
  mcqs: [
    {
      id: "m1",
      question: "The longest chord of a circle is its:",
      options: ["Radius", "Secant", "Diameter", "Tangent"],
      correctAnswer: "C",
    },
    {
      id: "m2",
      question: "Equal chords of a circle subtend _____ angles at the centre.",
      options: ["Equal", "Complementary", "Supplementary", "90°"],
      correctAnswer: "A",
    },
    {
      id: "m3",
      question: "The perpendicular from the centre of a circle to a chord:",
      options: [
        "Trisects the chord",
        "Bisects the chord",
        "Is double the chord",
        "None",
      ],
      correctAnswer: "B",
    },
    {
      id: "m4",
      question: "Angles in the same segment of a circle are:",
      options: ["Supplementary", "Complementary", "Equal", "Unequal"],
      correctAnswer: "C",
    },
    {
      id: "m5",
      question: "The angle subtended by a semicircle at the circumference is:",
      options: ["45°", "60°", "90°", "180°"],
      correctAnswer: "C",
    },
    {
      id: "m6",
      question: "In a cyclic quadrilateral, the sum of opposite angles is:",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: "B",
    },
    {
      id: "m7",
      question:
        "If the radius of a circle is 5cm, the length of the diameter is:",
      options: ["2.5cm", "5cm", "10cm", "25cm"],
      correctAnswer: "C",
    },
    {
      id: "m8",
      question: "The region between an arc and two radii is called a:",
      options: ["Segment", "Sector", "Chord", "Semicircle"],
      correctAnswer: "B",
    },
    {
      id: "m9",
      question:
        "The number of circles passing through three non-collinear points is:",
      options: ["One", "Two", "Infinite", "None"],
      correctAnswer: "A",
    },
    {
      id: "m10",
      question:
        "If <AOB = 100° is the angle at the centre, then the angle at the circumference is:",
      options: ["50°", "100°", "200°", "80°"],
      correctAnswer: "A",
    },
  ],
};
