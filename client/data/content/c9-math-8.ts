import { ChapterContent } from "../types";

export const c9Math8: ChapterContent = {
  id: "c9-math-8",
  number: 8,
  title: "Circles",
  isHtmlView: true,
  introduction: "In this chapter, we study the properties of circles, including chords, arcs, and the angles they subtend. We explore important theorems regarding perpendiculars from the centre to a chord, equal chords and their distances from the centre, and angles subtended by arcs of a circle.",
  exercises: [
    { id: "ex8-1", name: "Exercise 8.1", questions: [] },
    { id: "ex8-2", name: "Exercise 8.2", questions: [] },
    { id: "ex8-3", name: "Exercise 8.3", questions: [] },
    { id: "ex8-4", name: "Exercise 8.4", questions: [] },
    { id: "ex8-5", name: "Exercise 8.5", questions: [] }
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
      <div class="step">4. The angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle.</div>
      <div class="step">5. Angles in the same segment of a circle are equal.</div>
      <div class="step">6. The sum of either pair of opposite angles of a cyclic quadrilateral is 180&deg;.</div>
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
        <div class="question">1. Fill in the blanks:</div>
        <div class="solution">
          <div class="sol-step">(i) The centre of a circle lies in <span class="highlight">interior</span> of the circle.</div>
          <div class="sol-step">(ii) A point, whose distance from the centre of a circle is greater than its radius lies in <span class="highlight">exterior</span> of the circle.</div>
          <div class="sol-step">(iii) The longest chord of a circle is a <span class="highlight">diameter</span> of the circle.</div>
          <div class="sol-step">(iv) An arc is a <span class="highlight">semicircle</span> when its ends are the ends of a diameter.</div>
          <div class="sol-step">(v) Segment of a circle is the region between an arc and <span class="highlight">chord</span> of the circle.</div>
          <div class="sol-step">(vi) A circle divides the plane, on which it lies, in <span class="highlight">three</span> parts.</div>
        </div>

        <div class="question">2. Write True or False: Give reasons for your answers.</div>
        <div class="solution">
          <div class="sol-step">(i) Line segment joining the centre to any point on the circle is a radius of the circle. <span class="highlight">True</span></div>
          <div class="sol-step">(ii) A circle has only finite number of equal chords. <span class="highlight">False</span> (Infinitely many pairs can exist).</div>
          <div class="sol-step">(iii) If a circle is divided into three equal arcs, each is a major arc. <span class="highlight">False</span> (Each is 120&deg;, less than 180&deg;, hence minor).</div>
          <div class="sol-step">(iv) A chord of a circle, which is twice as long as its radius, is a diameter of the circle. <span class="highlight">True</span></div>
          <div class="sol-step">(v) Sector is the region between the chord and its corresponding arc. <span class="highlight">False</span> (Region between arc and two radii).</div>
          <div class="sol-step">(vi) A circle is a plane figure. <span class="highlight">True</span></div>
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
        <div class="question">1. Prove that equal chords of congruent circles subtend equal angles at their centres.</div>
        <svg viewBox="0 -10 300 150" class="ex-img">
          <circle cx="70" cy="70" r="50" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="230" cy="70" r="50" fill="none" stroke="white" stroke-width="2"/>
          <path d="M40,110 L100,110 L70,70 Z" fill="none" stroke="#FF8A65" stroke-width="2"/>
          <path d="M200,110 L260,110 L230,70 Z" fill="none" stroke="#FF8A65" stroke-width="2"/>
          <text x="65" y="65" font-size="14" fill="white">O</text>
          <text x="225" y="65" font-size="14" fill="white">O'</text>
          <text x="35" y="125" font-size="14" fill="white">A</text>
          <text x="95" y="125" font-size="14" fill="white">B</text>
          <text x="195" y="125" font-size="14" fill="white">C</text>
          <text x="255" y="125" font-size="14" fill="white">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let two congruent circles have centres O and O' and equal chords AB and CD respectively.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;AOB and &Delta;CO'D, OA = O'C (Radii of congruent circles).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> OB = O'D (Radii of congruent circles).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> AB = CD (Given).</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> By SSS Rule, &Delta;AOB &cong; &Delta;CO'D.</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> Thus, &ang;AOB = &ang;CO'D (by CPCT). Hence proved.</div>
        </div>

        <div class="question">2. Prove that if chords of congruent circles subtend equal angles at their centres, then the chords are equal.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Given &ang;AOB = &ang;CO'D in two congruent circles.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;AOB and &Delta;CO'D, OA = O'C and OB = O'D (Radii).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;AOB = &ang;CO'D (Given).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By SAS Rule, &Delta;AOB &cong; &Delta;CO'D.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Therefore, AB = CD (by CPCT). Hence proved.</div>
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
        <div class="question">1. Draw different pairs of circles. How many points does each pair have in common? What is the maximum number of common points?</div>
        <div class="solution">
          <div class="sol-step">(i) Non-intersecting: 0 points.</div>
          <svg viewBox="0 0 240 60" class="ex-img" style="margin: 5px auto;">
            <circle cx="60" cy="30" r="20" fill="none" stroke="white" stroke-width="1.5"/>
            <circle cx="180" cy="30" r="20" fill="none" stroke="white" stroke-width="1.5"/>
          </svg>
          <div class="sol-step">(ii) Touching at one point: 1 point.</div>
          <svg viewBox="0 0 240 60" class="ex-img" style="margin: 5px auto;">
            <circle cx="90" cy="30" r="20" fill="none" stroke="white" stroke-width="1.5"/>
            <circle cx="130" cy="30" r="20" fill="none" stroke="white" stroke-width="1.5"/>
          </svg>
          <div class="sol-step">(iii) Intersecting at two points: 2 points.</div>
          <svg viewBox="0 0 240 60" class="ex-img" style="margin: 5px auto;">
            <circle cx="100" cy="30" r="20" fill="none" stroke="white" stroke-width="1.5"/>
            <circle cx="130" cy="30" r="20" fill="none" stroke="white" stroke-width="1.5"/>
          </svg>
          <div class="sol-step"><span class="highlight">Conclusion:</span> The maximum number of common points between two circles is 2.</div>
        </div>

        <div class="question">2. Suppose you are given a circle. Give a construction to find its centre.</div>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Take any three points A, B, and C on the circle.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Join AB and BC to form two chords.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Draw the perpendicular bisectors of AB and BC.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> The point where these two bisectors intersect is the <span class="highlight">Centre</span> of the circle.</div>
          <svg viewBox="0 -10 240 190" class="ex-img">
            <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2"/>
            <path d="M60,120 L120,20 L180,120" fill="none" stroke="#FF8A65" stroke-width="1.5"/>
            <line x1="60" y1="30" x2="180" y2="150" stroke="white" stroke-width="1" stroke-dasharray="4"/>
            <line x1="180" y1="30" x2="60" y2="150" stroke="white" stroke-width="1" stroke-dasharray="4"/>
            <circle cx="120" cy="90" r="3" fill="#FF8A65"/>
            <text x="45" y="135" fill="white">A</text>
            <text x="115" y="15" fill="white">B</text>
            <text x="185" y="135" fill="white">C</text>
            <text x="125" y="85" fill="#FF8A65">O</text>
          </svg>
        </div>

        <div class="question">3. If two circles intersect at two points, prove that their centres lie on the perpendicular bisector of the common chord.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="80" cy="90" r="60" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="160" cy="90" r="60" fill="none" stroke="white" stroke-width="2"/>
          <line x1="120" y1="45" x2="120" y2="135" stroke="#FF8A65" stroke-width="2"/>
          <line x1="80" y1="90" x2="160" y2="90" stroke="white" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="75" y="85" font-size="14" fill="white">O</text>
          <text x="155" y="85" font-size="14" fill="white">O'</text>
          <text x="115" y="40" font-size="14" fill="white">A</text>
          <text x="115" y="150" font-size="14" fill="white">B</text>
          <text x="125" y="105" font-size="14" fill="#FF8A65">M</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let circles with centres O and O' intersect at A and B. AB is the common chord.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;OAO' and &Delta;OBO', OA=OB, O'A=O'B (Radii), and OO' is common.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> By SSS, &Delta;OAO' &cong; &Delta;OBO' &rArr; &ang;AOO' = &ang;BOO'.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> In &Delta;OAM and &Delta;OBM (where M is intersection of AB and OO'), OA=OB, &ang;AOM=&ang;BOM, OM=OM.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> By SAS, &Delta;OAM &cong; &Delta;OBM &rArr; AM=BM and &ang;OMA=&ang;OMB=90&deg;.</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> OO' is the perpendicular bisector of AB.</div>
        </div>
      </div>
`,
    "ex8-4": `
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
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="80" cy="90" r="50" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="120" cy="90" r="30" fill="none" stroke="white" stroke-width="2"/>
          <line x1="120" y1="60" x2="120" y2="120" stroke="#FF8A65" stroke-width="2.5"/>
          <path d="M80,90 L120,60 L120,90 Z" fill="none" stroke="white" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="65" y="95" fill="white">O</text>
          <text x="125" y="105" fill="white">O'</text>
          <text x="115" y="55" fill="white">A</text>
          <text x="85" y="65" fill="#FF8A65" font-size="10">5 cm</text>
          <text x="135" y="85" fill="#FF8A65" font-size="10">3 cm</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let radii r1=5, r2=3 and distance d=4.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;OO'A, OO'=4, OA=5, O'A=3.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Check for right triangle: 3&sup2; + 4&sup2; = 9 + 16 = 25 = 5&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Since it is a right triangle, &ang;OO'A = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> The perpendicular from O' to the chord is O'A itself, which is 3.</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> Common chord length = 2 &times; 3 = 6 cm.</div>
        </div>

        <div class="question">2. If two equal chords of a circle intersect within the circle, prove that the segments of one chord are equal to corresponding segments of the other chord.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2"/>
          <line x1="60" y1="130" x2="180" y2="50" stroke="#FF8A65" stroke-width="2"/>
          <line x1="60" y1="50" x2="180" y2="130" stroke="#FF8A65" stroke-width="2"/>
          <text x="115" y="85" font-size="14" fill="white">O</text>
          <text x="50" y="145" font-size="14" fill="white">A</text>
          <text x="185" y="45" font-size="14" fill="white">B</text>
          <text x="50" y="45" font-size="14" fill="white">C</text>
          <text x="185" y="145" font-size="14" fill="white">D</text>
          <text x="125" y="105" font-size="14" fill="#FF8A65">E</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Draw AB=CD intersecting at E. Draw OM &perp; AB and ON &perp; CD.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Equal chords are equidistant from centre &rArr; OM = ON.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> In &Delta;OME and &Delta;ONE, OM=ON, OE=OE, &ang;OME=&ang;ONE=90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> By RHS, &Delta;OME &cong; &Delta;ONE &rArr; ME = NE.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Since AM = CN (Half of equal chords), AM + ME = CN + NE &rArr; AE = CE.</div>
          <div class="sol-step"><span class="highlight">Step 6:</span> Similarly, EB = ED. Hence proved.</div>
        </div>

        <div class="question">3. If two equal chords of a circle intersect within the circle, prove that the line joining the point of intersection to the centre makes equal angles with the chords.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2"/>
          <line x1="60" y1="130" x2="180" y2="50" stroke="white" stroke-width="1.5"/>
          <line x1="60" y1="50" x2="180" y2="130" stroke="white" stroke-width="1.5"/>
          <line x1="120" y1="90" x2="120" y2="105" stroke="#FF8A65" stroke-width="2"/>
          <text x="115" y="85" fill="white">O</text>
          <text x="125" y="115" fill="#FF8A65">E</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> As in Q2, &Delta;OME &cong; &Delta;ONE.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> By CPCT, &ang;OEM = &ang;OEN.</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> The line joining intersection to centre makes equal angles with chords.</div>
        </div>

        <div class="question">4. If a line intersects two concentric circles with centre O at A, B, C and D, prove that AB = CD.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="80" r="70" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="120" cy="80" r="40" fill="none" stroke="white" stroke-width="2"/>
          <line x1="30" y1="100" x2="210" y2="100" stroke="#FF8A65" stroke-width="2"/>
          <line x1="120" y1="80" x2="120" y2="100" stroke="white" stroke-width="1.5" stroke-dasharray="3"/>
          <text x="115" y="75" font-size="14" fill="white">O</text>
          <text x="50" y="118" font-size="14" fill="white">A</text>
          <text x="82" y="118" font-size="14" fill="white">B</text>
          <text x="152" y="118" font-size="14" fill="white">C</text>
          <text x="185" y="118" font-size="14" fill="white">D</text>
          <text x="125" y="118" font-size="14" fill="white">M</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Draw OM &perp; AD.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> For inner circle, BC is a chord and OM &perp; BC &rArr; BM = MC --- (1).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> For outer circle, AD is a chord and OM &perp; AD &rArr; AM = MD --- (2).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Subtract (1) from (2): AM - BM = MD - MC.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> This gives AB = CD. Hence proved.</div>
        </div>

        <div class="question">5. Reshma, Salma and Mandip are standing on a circle of radius 5m. Distance Reshma-Salma = 6m, Salma-Mandip = 6m. Find Reshma-Mandip.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="60" fill="none" stroke="white" stroke-width="2"/>
          <path d="M120,30 L177,73 L63,73 Z" fill="none" stroke="#FF8A65" stroke-width="2"/>
          <text x="115" y="85" font-size="14" fill="white">O</text>
          <text x="115" y="25" font-size="14" fill="white">S</text>
          <text x="182" y="78" font-size="14" fill="white">R</text>
          <text x="50" y="78" font-size="14" fill="white">M</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let O be centre, R, S, M be positions. OR=OS=OM=5. RS=SM=6.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;ORS, area can be found using Heron's formula (s=8) &rArr; Area = sqrt(8*3*2*3) = 12.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Area = 1/2 &times; OS &times; h &rArr; 12 = 1/2 &times; 5 &times; h &rArr; h = 4.8.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> RM is 2 &times; h = 2 &times; 4.8 = 9.6m.</div>
        </div>

        <div class="question">6. A circular park of radius 20m. Ankur, Syed and David sit at equal distance on boundary. Find length of string of each phone.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2"/>
          <path d="M120,20 L59,125 L181,125 Z" fill="none" stroke="#FF8A65" stroke-width="2"/>
          <text x="115" y="15" fill="white">A</text>
          <text x="45" y="135" fill="white">S</text>
          <text x="185" y="135" fill="white">D</text>
          <circle cx="120" cy="90" r="2" fill="white"/>
          <text x="125" y="100" fill="white">O</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> They form an equilateral triangle ASD. Let side be 'a'.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Median of equilateral triangle = sqrt(3)/2 * a.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Distance of centroid (O) from vertex = 2/3 * Median = 20 (Radius).</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> 2/3 * (sqrt(3)/2 * a) = 20 &rArr; a/sqrt(3) = 20 &rArr; a = 20&radic;3 m.</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> String length is 20&radic;3 m &approx; 34.64 m.</div>
        </div>
      </div>
`,
    "ex8-5": `
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
        <div class="question">1. In Fig. 8.36, &ang;BOC = 30&deg; and &ang;AOB = 60&deg;. Find &ang;ADC.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M120,90 L181,125 M120,90 L189,80 M120,90 L155,29" fill="none" stroke="#FF8A65" stroke-width="2"/>
          <line x1="155" y1="29" x2="50" y2="90" stroke="white" stroke-width="1.5" stroke-dasharray="4,2"/>
          <line x1="181" y1="125" x2="50" y2="90" stroke="white" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="115" y="105" fill="white">O</text>
          <text x="185" y="135" fill="white">C</text>
          <text x="195" y="85" fill="white">B</text>
          <text x="155" y="25" fill="white">A</text>
          <text x="35" y="95" fill="#FF8A65">D</text>
          <text x="145" y="110" font-size="10" fill="#FF8A65">30&deg;</text>
          <text x="145" y="70" font-size="10" fill="#FF8A65">60&deg;</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> &ang;AOC = &ang;AOB + &ang;BOC = 60&deg; + 30&deg; = 90&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> The angle subtended by an arc at the centre is double the angle at the circumference.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;ADC = 1/2 &ang;AOC = 1/2 &times; 90&deg; = 45&deg;.</div>
        </div>

        <div class="question">2. A chord of a circle is equal to the radius. Find angle at minor arc and major arc.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2"/>
          <path d="M70,41 L170,41 L120,90 Z" fill="none" stroke="#FF8A65" stroke-width="2"/>
          <line x1="70" y1="41" x2="120" y2="160" stroke="white" stroke-width="1.5" stroke-dasharray="3"/>
          <line x1="170" y1="41" x2="120" y2="160" stroke="white" stroke-width="1.5" stroke-dasharray="3"/>
          <text x="115" y="85" font-size="14" fill="white">O</text>
          <text x="60" y="35" font-size="14" fill="white">A</text>
          <text x="175" y="35" font-size="14" fill="white">B</text>
          <text x="115" y="175" font-size="14" fill="white">P</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Chord AB = OA = OB &rArr; &Delta;OAB is equilateral.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;AOB = 60&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Angle at major arc = 1/2 &ang;AOB = 30&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Since cyclic quadrilateral sum is 180&deg;, Angle at minor arc = 180&deg; - 30&deg; = 150&deg;.</div>
        </div>

        <div class="question">3. In Fig. 8.37, &ang;PQR = 100&deg;, find &ang;OPR.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2.5"/>
          <path d="M51,68 L120,10 L189,68" fill="none" stroke="#FF8A65" stroke-width="2.5"/>
          <path d="M51,68 L189,68 L120,80 Z" fill="none" stroke="white" stroke-width="1.5"/>
          <text x="115" y="95" fill="white" font-size="14">O</text>
          <text x="35" y="75" fill="white" font-size="14">P</text>
          <text x="195" y="75" fill="white" font-size="14">R</text>
          <text x="115" y="5" font-size="14" fill="#FF8A65">Q</text>
          <text x="110" y="28" font-size="10" fill="#FF8A65">100&deg;</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> &ang;PQR = 100&deg;. Reflex &ang;POR = 2 &ang;PQR = 200&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Obtuse &ang;POR = 360&deg; - 200&deg; = 160&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> In &Delta;OPR, OP = OR (Radii), so &ang;OPR = &ang;ORP.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> &ang;OPR + &ang;ORP + 160&deg; = 180&deg; &rArr; 2 &ang;OPR = 20&deg; &rArr; &ang;OPR = 10&deg;.</div>
        </div>

        <div class="question">4. In Fig. 8.38, &ang;ABC = 69&deg;, &ang;ACB = 31&deg;, find &ang;BDC.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2"/>
          <path d="M70,41 L170,41 M70,41 L50,110 L190,110 L170,41" fill="none" stroke="white" stroke-width="1.5"/>
          <path d="M50,110 L80,30 L190,110" fill="none" stroke="#FF8A65" stroke-width="2"/>
          <path d="M50,110 L160,30 L190,110" fill="none" stroke="#FF8A65" stroke-width="2"/>
          <text x="75" y="25" fill="white" font-size="14">A</text>
          <text x="155" y="25" fill="white" font-size="14">D</text>
          <text x="40" y="125" fill="white" font-size="14">B</text>
          <text x="195" y="125" fill="white" font-size="14">C</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> In &Delta;ABC, &ang;BAC = 180&deg; - (69&deg; + 31&deg;) = 180&deg; - 100&deg; = 80&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Angles in the same segment are equal.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;BDC = &ang;BAC = 80&deg;.</div>
        </div>

        <div class="question">5. In Fig. 8.39, &ang;BEC = 130&deg;, &ang;ECD = 20&deg;, find &ang;BAC.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2"/>
          <line x1="60" y1="50" x2="180" y2="130" stroke="white" stroke-width="1.5"/>
          <line x1="60" y1="130" x2="180" y2="50" stroke="white" stroke-width="1.5"/>
          <path d="M60,50 L180,50 L180,130 L60,130 Z" fill="none" stroke="white" stroke-width="1" stroke-dasharray="3"/>
          <text x="50" y="45" fill="white" font-size="14">A</text>
          <text x="185" y="45" fill="white" font-size="14">D</text>
          <text x="50" y="145" fill="white" font-size="14">B</text>
          <text x="185" y="145" fill="white" font-size="14">C</text>
          <text x="125" y="95" font-size="14" fill="#FF8A65">E</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> &ang;CED = 180&deg; - 130&deg; = 50&deg; (Linear pair).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;DEC, &ang;EDC = 180&deg; - (50&deg; + 20&deg;) = 110&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;BAC = &ang;BDC = 110&deg; (Angles in same segment).</div>
        </div>

        <div class="question">6. ABCD is cyclic. Diagonals intersect at E. &ang;DBC = 70&deg;, &ang;BAC = 30&deg;. Find &ang;BCD. If AB=BC, find &ang;ECD.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="120" cy="90" r="70" fill="none" stroke="white" stroke-width="2"/>
          <path d="M80,30 L160,30 L180,130 L60,130 Z" fill="none" stroke="white" stroke-width="2"/>
          <line x1="80" y1="30" x2="180" y2="130" stroke="#FF8A65" stroke-width="1.5"/>
          <line x1="160" y1="30" x2="60" y2="130" stroke="#FF8A65" stroke-width="1.5"/>
          <text x="75" y="25" fill="white" font-size="14">A</text>
          <text x="165" y="25" fill="white" font-size="14">D</text>
          <text x="50" y="145" fill="white" font-size="14">B</text>
          <text x="185" y="145" fill="white" font-size="14">C</text>
          <text x="125" y="85" fill="white" font-size="14">E</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> &ang;BDC = &ang;BAC = 30&deg; (Same segment).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> In &Delta;BCD, &ang;BCD = 180&deg; - (70&deg; + 30&deg;) = 80&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> If AB = BC, then &ang;BCA = &ang;BAC = 30&deg;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> &ang;ECD = &ang;BCD - &ang;BCA = 80&deg; - 30&deg; = 50&deg;.</div>
        </div>

        <div class="question">9. Two circles intersect at two points B and C. Through B, two line segments ABD and PBQ are drawn to intersect the circles at A, D and P, Q respectively. Prove that &ang;ACP = &ang;QCD.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <circle cx="80" cy="90" r="60" fill="none" stroke="white" stroke-width="1.5"/>
          <circle cx="160" cy="90" r="60" fill="none" stroke="white" stroke-width="1.5"/>
          <line x1="30" y1="60" x2="210" y2="120" stroke="#FF8A65" stroke-width="2"/>
          <line x1="30" y1="120" x2="210" y2="60" stroke="#FF8A65" stroke-width="2"/>
          <text x="115" y="80" fill="white">B</text>
          <text x="115" y="155" fill="white">C</text>
          <text x="25" y="55" fill="white">A</text>
          <text x="215" y="125" fill="white">D</text>
          <text x="25" y="125" fill="white">P</text>
          <text x="215" y="55" fill="white">Q</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> &ang;ACP = &ang;ABP (Angles in same segment).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &ang;QCD = &ang;QBD (Angles in same segment).</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &ang;ABP = &ang;QBD (Vertically opposite angles).</div>
          <div class="sol-step"><span class="highlight">Conclusion:</span> Therefore, &ang;ACP = &ang;QCD. Hence proved.</div>
        </div>
      </div>
`
  },
  mcqs: [
    { id: "m1", question: "The longest chord of a circle is its:", options: ["Radius", "Secant", "Diameter", "Tangent"], correctAnswer: "C" },
    { id: "m2", question: "Equal chords of a circle subtend _____ angles at the centre.", options: ["Equal", "Complementary", "Supplementary", "90°"], correctAnswer: "A" },
    { id: "m3", question: "The perpendicular from the centre of a circle to a chord:", options: ["Trisects the chord", "Bisects the chord", "Is double the chord", "None"], correctAnswer: "B" },
    { id: "m4", question: "Angles in the same segment of a circle are:", options: ["Supplementary", "Complementary", "Equal", "Unequal"], correctAnswer: "C" },
    { id: "m5", question: "The angle subtended by a semicircle at the circumference is:", options: ["45°", "60°", "90°", "180°"], correctAnswer: "C" },
    { id: "m6", question: "In a cyclic quadrilateral, the sum of opposite angles is:", options: ["90°", "180°", "270°", "360°"], correctAnswer: "B" },
    { id: "m7", question: "If the radius of a circle is 5cm, the length of the diameter is:", options: ["2.5cm", "5cm", "10cm", "25cm"], correctAnswer: "C" },
    { id: "m8", question: "The region between an arc and two radii is called a:", options: ["Segment", "Sector", "Chord", "Semicircle"], correctAnswer: "B" },
    { id: "m9", question: "The number of circles passing through three non-collinear points is:", options: ["One", "Two", "Infinite", "None"], correctAnswer: "A" },
    { id: "m10", question: "If <AOB = 100° is the angle at the centre, then the angle at the circumference is:", options: ["50°", "100°", "200°", "80°"], correctAnswer: "A" }
  ]
};
