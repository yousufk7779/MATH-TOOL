const { styleBlock, themeColor } = require('./ch2_common');

function getChapter2Overview() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Hero Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 198, 255, 0.22), rgba(0, 114, 255, 0.28)); border: 1.5px solid #00C6FF; border-radius: 14px; padding: 20px 16px; margin-bottom: 24px; text-align: center; box-shadow: 0 4px 20px rgba(0, 198, 255, 0.25);">
    <div style="font-size: 22px; font-weight: 800; color: #00C6FF; letter-spacing: 0.5px;">
      ⚡ CHAPTER 2: RELATIONS AND FUNCTIONS
    </div>
    <div style="font-size: 15px; color: #80D8FF; font-weight: 600; margin-top: 4px;">
      Relations &amp; Functions &bull; Class 11 Mathematics Master Reference Guide
    </div>
    <div style="font-size: 13.5px; color: #CBD5E1; margin-top: 8px; line-height: 1.5;">
      Cartesian Products &bull; Binary Relations &bull; Domain &amp; Range &bull; Real Functions &amp; Standard Graphs &bull; Algebra of Functions
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(0, 198, 255, 0.45); border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
    <div style="font-size: 17px; font-weight: 800; color: #00C6FF; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
      📖 Quick Glossary &amp; Core Definitions
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px; line-height: 1.6;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">Ordered Pair:</b> A pair of elements written in fixed order (<i>a</i>, <i>b</i>). (<i>a</i>, <i>b</i>) = (<i>c</i>, <i>d</i>) &hArr; <i>a</i> = <i>c</i> and <i>b</i> = <i>d</i>.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">Cartesian Product A &times; B:</b> The set of all ordered pairs (<i>a</i>, <i>b</i>) such that <i>a</i> &isin; A and <i>b</i> &isin; B. If <i>n</i>(A) = <i>p</i>, <i>n</i>(B) = <i>q</i>, then <i>n</i>(A &times; B) = <i>pq</i>.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">Relation (R &sube; A &times; B):</b> Any subset of the Cartesian product A &times; B. Total possible relations = 2<sup><i>pq</i></sup>.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">Domain &amp; Range:</b> Domain is the set of all first components of ordered pairs in R. Range is the set of all second components.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">Function (Mapping):</b> A special relation where <i>every</i> element in domain has <i>one and only one</i> unique image in the codomain.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">Real Function:</b> A function whose domain and range are subsets of the set of real numbers &reals;.
      </div>
    </div>
  </div>

  <!-- Section 2.1 -->
  <div style="margin-bottom: 26px;">
    <h2 style="color: #00C6FF; font-size: 19px; font-weight: 800; border-bottom: 2px solid rgba(0, 198, 255, 0.4); padding-bottom: 6px; margin-bottom: 12px;">
      2.1 Cartesian Product of Sets
    </h2>
    <p style="color: #E2E8F0; line-height: 1.85; font-size: 15px; margin-bottom: 12px;">
      In everyday mathematics and physics, quantities rarely exist in isolation; they appear in linked configurations such as coordinates of position (<i>x</i>, <i>y</i>), time and displacement (<i>t</i>, <i>s</i>), or pressure and volume (<i>P</i>, <i>V</i>). An <b style="color: #00C6FF;">ordered pair</b> consists of two objects listed in a specific sequence, enclosed in parentheses: (<i>a</i>, <i>b</i>), where <i>a</i> is the first coordinate and <i>b</i> is the second coordinate.
    </p>

    <div style="background: rgba(0, 198, 255, 0.08); border-left: 4px solid #00C6FF; padding: 12px 14px; border-radius: 6px; margin: 14px 0;">
      <b style="color: #00C6FF; font-size: 15px;">Official Definition (Cartesian Product):</b>
      <div style="color: #FFFFFF; margin-top: 4px; line-height: 1.8;">
        Given two non-empty sets A and B, the <b>Cartesian product A &times; B</b> is the set of all ordered pairs (<i>a</i>, <i>b</i>) such that <i>a</i> belongs to A and <i>b</i> belongs to B:<br/>
        <span style="display: block; text-align: center; font-size: 16px; margin: 6px 0; color: #80D8FF; font-weight: 700;">
          A &times; B = { (<i>a</i>, <i>b</i>) : <i>a</i> &isin; A and <i>b</i> &isin; B }
        </span>
        If either A = &empty; or B = &empty;, then by definition <b>A &times; B = &empty;</b>.
      </div>
    </div>

    <!-- Standalone Diagram Card: Cartesian Product Grid -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="#FFFFFF" rx="8" />
        <text x="200" y="24" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold" fill="#0277BD" text-anchor="middle">Cartesian Product A &times; B Representation</text>
        
        <!-- Axes -->
        <line x1="70" y1="185" x2="360" y2="185" stroke="#333333" stroke-width="2" />
        <line x1="70" y1="185" x2="70" y2="45" stroke="#333333" stroke-width="2" />
        
        <!-- Axis Labels -->
        <text x="365" y="190" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#333">Set A</text>
        <text x="70" y="38" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#333" text-anchor="middle">Set B</text>

        <!-- Ticks on A -->
        <text x="130" y="202" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#01579B" text-anchor="middle">a₁</text>
        <text x="210" y="202" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#01579B" text-anchor="middle">a₂</text>
        <text x="290" y="202" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#01579B" text-anchor="middle">a₃</text>

        <!-- Ticks on B -->
        <text x="50" y="145" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#00838F" text-anchor="middle">b₁</text>
        <text x="50" y="85" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#00838F" text-anchor="middle">b₂</text>

        <!-- Grid Lines -->
        <line x1="130" y1="185" x2="130" y2="60" stroke="#E0E0E0" stroke-width="1.5" stroke-dasharray="4,4" />
        <line x1="210" y1="185" x2="210" y2="60" stroke="#E0E0E0" stroke-width="1.5" stroke-dasharray="4,4" />
        <line x1="290" y1="185" x2="290" y2="60" stroke="#E0E0E0" stroke-width="1.5" stroke-dasharray="4,4" />
        <line x1="70" y1="140" x2="330" y2="140" stroke="#E0E0E0" stroke-width="1.5" stroke-dasharray="4,4" />
        <line x1="70" y1="80" x2="330" y2="80" stroke="#E0E0E0" stroke-width="1.5" stroke-dasharray="4,4" />

        <!-- Points (Ordered Pairs) -->
        <circle cx="130" cy="140" r="5" fill="#00C6FF" stroke="#0072FF" stroke-width="2" />
        <text x="130" y="130" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#333" text-anchor="middle">(a₁, b₁)</text>

        <circle cx="210" cy="140" r="5" fill="#00C6FF" stroke="#0072FF" stroke-width="2" />
        <text x="210" y="130" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#333" text-anchor="middle">(a₂, b₁)</text>

        <circle cx="290" cy="140" r="5" fill="#00C6FF" stroke="#0072FF" stroke-width="2" />
        <text x="290" y="130" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#333" text-anchor="middle">(a₃, b₁)</text>

        <circle cx="130" cy="80" r="5" fill="#00C6FF" stroke="#0072FF" stroke-width="2" />
        <text x="130" y="70" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#333" text-anchor="middle">(a₁, b₂)</text>

        <circle cx="210" cy="80" r="5" fill="#00C6FF" stroke="#0072FF" stroke-width="2" />
        <text x="210" y="70" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#333" text-anchor="middle">(a₂, b₂)</text>

        <circle cx="290" cy="80" r="5" fill="#00C6FF" stroke="#0072FF" stroke-width="2" />
        <text x="290" y="70" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#333" text-anchor="middle">(a₃, b₂)</text>
      </svg>
      <div class="diagram-caption">💡 Grid Model: 3 elements in A &times; 2 elements in B produce exactly 3 &times; 2 = 6 ordered pairs</div>
    </div>

    <div style="color: #CBD5E1; line-height: 1.8; font-size: 14.5px;">
      <b style="color: #00C6FF;">Key Properties of Cartesian Products:</b><br/>
      1. <b>Non-Commutative:</b> In general, A &times; B &ne; B &times; A unless A = B.<br/>
      2. <b>Cardinality:</b> <i>n</i>(A &times; B) = <i>n</i>(A) &times; <i>n</i>(B).<br/>
      3. <b>Distributive Laws:</b><br/>
      &nbsp;&nbsp;&bull; A &times; (B &cup; C) = (A &times; B) &cup; (A &times; C)<br/>
      &nbsp;&nbsp;&bull; A &times; (B &cap; C) = (A &times; B) &cap; (A &times; C)<br/>
      &nbsp;&nbsp;&bull; A &times; (B &minus; C) = (A &times; B) &minus; (A &times; C)<br/>
      4. <b>Ordered Triplets:</b> A &times; A &times; A = { (<i>a</i>, <i>b</i>, <i>c</i>) : <i>a</i>, <i>b</i>, <i>c</i> &isin; A }. The Cartesian product &reals; &times; &reals; represents the 2D Cartesian plane &reals;<sup>2</sup>, and &reals; &times; &reals; &times; &reals; represents 3D space &reals;<sup>3</sup>.
    </div>
  </div>

  <!-- Section 2.2 -->
  <div style="margin-bottom: 26px;">
    <h2 style="color: #00C6FF; font-size: 19px; font-weight: 800; border-bottom: 2px solid rgba(0, 198, 255, 0.4); padding-bottom: 6px; margin-bottom: 12px;">
      2.2 Relations, Domain, Codomain &amp; Range
    </h2>
    <p style="color: #E2E8F0; line-height: 1.85; font-size: 15px; margin-bottom: 12px;">
      A <b style="color: #00C6FF;">relation R</b> from a non-empty set A to a non-empty set B is simply a mathematical link or association between elements of A and elements of B. Formally, R is defined as any <b>subset of the Cartesian product A &times; B</b>:
    </p>

    <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #00C6FF; padding: 12px 14px; border-radius: 6px; margin: 12px 0; font-size: 15px; line-height: 1.8;">
      <div>&rArr; <b>R &sube; A &times; B</b></div>
      <div>&rArr; If (<i>x</i>, <i>y</i>) &isin; R, we say "<i>x</i> is related to <i>y</i> by relation R", written as <b><i>x</i> R <i>y</i></b>.</div>
      <div>&rArr; The second component <i>y</i> is called the <b>image</b> of <i>x</i> under R, and <i>x</i> is called a <b>pre-image</b> of <i>y</i>.</div>
    </div>

    <!-- Standalone Diagram Card: Arrow Mapping Diagram -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#00C6FF" />
          </marker>
        </defs>
        <rect width="420" height="200" fill="#FFFFFF" rx="8" />
        <text x="210" y="22" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#0277BD" text-anchor="middle">Visual Architecture of a Relation R</text>
        
        <!-- Domain Ellipse (Set A) -->
        <ellipse cx="90" cy="115" rx="55" ry="70" fill="#E1F5FE" stroke="#00C6FF" stroke-width="2.5" />
        <text x="90" y="40" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#01579B" text-anchor="middle">Set A (Domain)</text>
        <circle cx="85" cy="80" r="4" fill="#01579B" />
        <text x="98" y="85" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#01579B">x₁</text>
        <circle cx="85" cy="115" r="4" fill="#01579B" />
        <text x="98" y="120" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#01579B">x₂</text>
        <circle cx="85" cy="150" r="4" fill="#01579B" />
        <text x="98" y="155" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#01579B">x₃</text>

        <!-- Codomain Ellipse (Set B) -->
        <ellipse cx="320" cy="115" rx="65" ry="75" fill="#E0F7FA" stroke="#00B4D8" stroke-width="2.5" />
        <text x="320" y="35" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#00838F" text-anchor="middle">Set B (Codomain)</text>

        <!-- Inner Range boundary -->
        <ellipse cx="320" cy="105" rx="42" ry="46" fill="#B2EBF2" stroke="#00838F" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="320" y="74" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold" fill="#006064" text-anchor="middle">RANGE</text>

        <circle cx="310" cy="95" r="4" fill="#006064" />
        <text x="325" y="100" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#006064">y₁</text>
        <circle cx="310" cy="130" r="4" fill="#006064" />
        <text x="325" y="135" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#006064">y₂</text>

        <circle cx="310" cy="165" r="4" fill="#78909C" />
        <text x="325" y="170" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#546E7A">y₃</text>

        <!-- Mapping Arrows -->
        <line x1="108" y1="80" x2="295" y2="95" stroke="#00C6FF" stroke-width="2" marker-end="url(#arr2)" />
        <line x1="108" y1="115" x2="295" y2="95" stroke="#00C6FF" stroke-width="2" marker-end="url(#arr2)" />
        <line x1="108" y1="150" x2="295" y2="130" stroke="#00C6FF" stroke-width="2" marker-end="url(#arr2)" />
      </svg>
      <div class="diagram-caption">💡 Crucial Relation Rule: Range &sube; Codomain always! (y₃ has no pre-image)</div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.6); padding: 14px; border-radius: 8px; line-height: 1.85; font-size: 14.5px;">
      <div>• <b style="color: #00C6FF;">Domain(R):</b> The set of all first elements in the ordered pairs belonging to R: { <i>x</i> &isin; A : (<i>x</i>, <i>y</i>) &isin; R for some <i>y</i> &isin; B }.</div>
      <div>• <b style="color: #00C6FF;">Range(R):</b> The set of all second elements in the ordered pairs belonging to R: { <i>y</i> &isin; B : (<i>x</i>, <i>y</i>) &isin; R for some <i>x</i> &isin; A }.</div>
      <div>• <b style="color: #00C6FF;">Codomain(R):</b> The entire second set <b>B</b>. Range is always a subset of Codomain: <b>Range &sube; Codomain</b>.</div>
      <div>• <b style="color: #00C6FF;">Total Number of Relations:</b> If <i>n</i>(A) = <i>p</i> and <i>n</i>(B) = <i>q</i>, then <i>n</i>(A &times; B) = <i>pq</i>. Since every subset of A &times; B is a relation, there are <b>2<sup><i>pq</i></sup></b> relations in total.</div>
    </div>
  </div>

  <!-- Section 2.3 -->
  <div style="margin-bottom: 26px;">
    <h2 style="color: #00C6FF; font-size: 19px; font-weight: 800; border-bottom: 2px solid rgba(0, 198, 255, 0.4); padding-bottom: 6px; margin-bottom: 12px;">
      2.3 Functions (The Universal Mathematical Machine)
    </h2>
    <p style="color: #E2E8F0; line-height: 1.85; font-size: 15px; margin-bottom: 12px;">
      A <b style="color: #00C6FF;">function</b> (or mapping) is a deterministic relation. Think of a function like a computer algorithm or vending machine: for every single allowable input button you press, exactly one predictable output item drops out. If pressing a single button gave two different sodas at random, or if a button did nothing at all, it would not be a proper function.
    </p>

    <div style="background: rgba(0, 198, 255, 0.1); border: 1.5px solid #00C6FF; padding: 14px 16px; border-radius: 10px; margin-bottom: 16px;">
      <div style="font-size: 16px; font-weight: 800; color: #00C6FF; margin-bottom: 6px;">
        ⭐ The Two Golden Criteria of a Function <i>f</i>: A &rarr; B:
      </div>
      <div style="color: #FFFFFF; font-size: 15px; line-height: 1.8;">
        1. <b>Total Participation:</b> <i>Every</i> element <i>x</i> &isin; A must have an image in B.<br/>
        2. <b>Uniqueness of Image:</b> No element <i>x</i> &isin; A can have more than one image in B.<br/>
        <div style="margin-top: 6px; color: #80D8FF; font-size: 14px;">
          &bull; <b>Many-to-One is ALLOWED:</b> Two different inputs (e.g. &minus;2 and 2) can have the same output (e.g. 4 for <i>x</i><sup>2</sup>).<br/>
          &bull; <b>One-to-Many is FORBIDDEN:</b> One input cannot produce two different outputs (e.g. 4 cannot give both +2 and &minus;2 as a function image).
        </div>
      </div>
    </div>
  </div>

  <!-- Section 2.4 -->
  <div style="margin-bottom: 26px;">
    <h2 style="color: #00C6FF; font-size: 19px; font-weight: 800; border-bottom: 2px solid rgba(0, 198, 255, 0.4); padding-bottom: 6px; margin-bottom: 12px;">
      2.4 Real Functions &amp; Standard Graph Gallery
    </h2>
    <p style="color: #E2E8F0; line-height: 1.85; font-size: 15px; margin-bottom: 14px;">
      A function whose domain and range are subsets of the real numbers &reals; is called a <b style="color: #00C6FF;">real function</b>. Below is the canonical gallery of standard functions tested heavily in CBSE, JKBOSE, and competitive exams (JEE/NEET):
    </p>

    <!-- Standalone Diagram Card: Real Function Graphs -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg">
        <rect width="460" height="210" fill="#FFFFFF" rx="8" />
        
        <!-- Panel 1: Modulus |x| -->
        <g transform="translate(10, 15)">
          <rect width="130" height="150" fill="#F8FAFC" stroke="#E2E8F0" rx="6" />
          <text x="65" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#0277BD" text-anchor="middle">Modulus: f(x) = |x|</text>
          <!-- Axes -->
          <line x1="15" y1="120" x2="115" y2="120" stroke="#94A3B8" stroke-width="1.5" />
          <line x1="65" y1="28" x2="65" y2="135" stroke="#94A3B8" stroke-width="1.5" />
          <!-- V-shape graph -->
          <polyline points="20,50 65,120 110,50" fill="none" stroke="#0072FF" stroke-width="2.5" />
          <text x="65" y="146" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="600" fill="#334155" text-anchor="middle">Dom: ℝ, Range: [0, ∞)</text>
        </g>

        <!-- Panel 2: Signum sgn(x) -->
        <g transform="translate(165, 15)">
          <rect width="130" height="150" fill="#F8FAFC" stroke="#E2E8F0" rx="6" />
          <text x="65" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#00838F" text-anchor="middle">Signum: sgn(x)</text>
          <!-- Axes -->
          <line x1="15" y1="85" x2="115" y2="85" stroke="#94A3B8" stroke-width="1.5" />
          <line x1="65" y1="28" x2="65" y2="135" stroke="#94A3B8" stroke-width="1.5" />
          <!-- Step graph -->
          <line x1="68" y1="55" x2="115" y2="55" stroke="#00C6FF" stroke-width="2.5" />
          <circle cx="65" cy="55" r="3" fill="#FFFFFF" stroke="#00C6FF" stroke-width="1.5" />
          <circle cx="65" cy="85" r="3.5" fill="#00C6FF" />
          <line x1="15" y1="115" x2="62" y2="115" stroke="#00C6FF" stroke-width="2.5" />
          <circle cx="65" cy="115" r="3" fill="#FFFFFF" stroke="#00C6FF" stroke-width="1.5" />
          <text x="65" y="146" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="600" fill="#334155" text-anchor="middle">Range: {−1, 0, 1}</text>
        </g>

        <!-- Panel 3: Greatest Integer [x] -->
        <g transform="translate(320, 15)">
          <rect width="130" height="150" fill="#F8FAFC" stroke="#E2E8F0" rx="6" />
          <text x="65" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#6A1B9A" text-anchor="middle">Step: f(x) = [x]</text>
          <!-- Axes -->
          <line x1="15" y1="85" x2="115" y2="85" stroke="#94A3B8" stroke-width="1.5" />
          <line x1="65" y1="28" x2="65" y2="135" stroke="#94A3B8" stroke-width="1.5" />
          <!-- Stair steps -->
          <line x1="35" y1="110" x2="50" y2="110" stroke="#8E24AA" stroke-width="2" />
          <circle cx="35" cy="110" r="2.5" fill="#8E24AA" />
          <circle cx="50" cy="110" r="2.5" fill="#FFF" stroke="#8E24AA" />

          <line x1="50" y1="85" x2="65" y2="85" stroke="#8E24AA" stroke-width="2" />
          <circle cx="50" cy="85" r="2.5" fill="#8E24AA" />
          <circle cx="65" cy="85" r="2.5" fill="#FFF" stroke="#8E24AA" />

          <line x1="65" y1="60" x2="80" y2="60" stroke="#8E24AA" stroke-width="2" />
          <circle cx="65" cy="60" r="2.5" fill="#8E24AA" />
          <circle cx="80" cy="60" r="2.5" fill="#FFF" stroke="#8E24AA" />

          <line x1="80" y1="35" x2="95" y2="35" stroke="#8E24AA" stroke-width="2" />
          <circle cx="80" cy="35" r="2.5" fill="#8E24AA" />
          <circle cx="95" cy="35" r="2.5" fill="#FFF" stroke="#8E24AA" />
          <text x="65" y="146" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="600" fill="#334155" text-anchor="middle">Dom: ℝ, Range: ℤ</text>
        </g>
        <text x="230" y="195" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#0277BD" text-anchor="middle">Visual Gallery of Standard Real Functions</text>
      </svg>
      <div class="diagram-caption">💡 Distinct Profiles: Continuous Modulus V-curve vs Discontinuous Step Functions</div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14px; margin-top: 14px;">
      <div style="background: rgba(0,0,0,0.35); padding: 12px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">1. Identity Function:</b> <i>f</i>(<i>x</i>) = <i>x</i><br/>
        • Domain: &reals;, Range: &reals;<br/>
        • Graph: A straight line passing through the origin at 45&deg; angle.
      </div>
      <div style="background: rgba(0,0,0,0.35); padding: 12px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">2. Constant Function:</b> <i>f</i>(<i>x</i>) = <i>c</i><br/>
        • Domain: &reals;, Range: {<i>c</i>}<br/>
        • Graph: A straight horizontal line parallel to <i>x</i>-axis.
      </div>
      <div style="background: rgba(0,0,0,0.35); padding: 12px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">3. Modulus Function:</b> <i>f</i>(<i>x</i>) = |<i>x</i>|<br/>
        • Definition: <i>x</i> (if <i>x</i> &ge; 0), &minus;<i>x</i> (if <i>x</i> &lt; 0)<br/>
        • Domain: &reals;, Range: [0, &infin;)
      </div>
      <div style="background: rgba(0,0,0,0.35); padding: 12px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">4. Signum Function:</b> <i>f</i>(<i>x</i>) = sgn(<i>x</i>)<br/>
        • Definition: 1 (<i>x</i> &gt; 0), 0 (<i>x</i> = 0), &minus;1 (<i>x</i> &lt; 0)<br/>
        • Domain: &reals;, Range: {&minus;1, 0, 1}
      </div>
      <div style="background: rgba(0,0,0,0.35); padding: 12px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">5. Greatest Integer Function:</b> <i>f</i>(<i>x</i>) = [<i>x</i>]<br/>
        • Definition: Greatest integer &le; <i>x</i> (e.g. [2.7] = 2, [&minus;1.3] = &minus;2)<br/>
        • Domain: &reals;, Range: &integers; (All integers)
      </div>
      <div style="background: rgba(0,0,0,0.35); padding: 12px; border-radius: 8px; border-left: 3px solid #00C6FF;">
        <b style="color: #00C6FF;">6. Reciprocal Function:</b> <i>f</i>(<i>x</i>) = <span class="frac"><span class="num">1</span><span class="den"><i>x</i></span></span><br/>
        • Domain: &reals; &minus; {0}, Range: &reals; &minus; {0}<br/>
        • Graph: Rectangular hyperbola located in 1st &amp; 3rd quadrants.
      </div>
    </div>
  </div>

  <!-- Section 2.5 -->
  <div style="margin-bottom: 26px;">
    <h2 style="color: #00C6FF; font-size: 19px; font-weight: 800; border-bottom: 2px solid rgba(0, 198, 255, 0.4); padding-bottom: 6px; margin-bottom: 12px;">
      2.5 Algebra of Real Functions
    </h2>
    <p style="color: #E2E8F0; line-height: 1.85; font-size: 15px; margin-bottom: 12px;">
      Let <i>f</i>: X &rarr; &reals; and <i>g</i>: X &rarr; &reals; be any two real functions, where X &sube; &reals;. Then their point-wise algebraic combinations are defined as follows:
    </p>

    <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(0, 198, 255, 0.35); border-radius: 10px; padding: 14px; font-size: 14.5px; line-height: 2.1;">
      <div>• <b style="color: #00C6FF;">Addition:</b> (<i>f</i> + <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) + <i>g</i>(<i>x</i>) &nbsp;&nbsp;[Domain: D<sub><i>f</i></sub> &cap; D<sub><i>g</i></sub>]</div>
      <div>• <b style="color: #00C6FF;">Subtraction:</b> (<i>f</i> &minus; <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) &minus; <i>g</i>(<i>x</i>) &nbsp;&nbsp;[Domain: D<sub><i>f</i></sub> &cap; D<sub><i>g</i></sub>]</div>
      <div>• <b style="color: #00C6FF;">Multiplication by Scalar:</b> (&alpha;<i>f</i>)(<i>x</i>) = &alpha; &times; <i>f</i>(<i>x</i>) &nbsp;&nbsp;[Domain: D<sub><i>f</i></sub>]</div>
      <div>• <b style="color: #00C6FF;">Product of Functions:</b> (<i>f</i> &times; <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) &times; <i>g</i>(<i>x</i>) &nbsp;&nbsp;[Domain: D<sub><i>f</i></sub> &cap; D<sub><i>g</i></sub>]</div>
      <div>• <b style="color: #00C6FF;">Quotient of Functions:</b> (<span class="frac"><span class="num"><i>f</i></span><span class="den"><i>g</i></span></span>)(<i>x</i>) = <span class="frac"><span class="num"><i>f</i>(<i>x</i>)</span><span class="den"><i>g</i>(<i>x</i>)</span></span> &nbsp;&nbsp;[Domain: { <i>x</i> &isin; D<sub><i>f</i></sub> &cap; D<sub><i>g</i></sub> : <i>g</i>(<i>x</i>) &ne; 0 }]</div>
    </div>
  </div>

  <!-- Master Revision Formula Cheat Sheet -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(0, 30, 60, 0.95)); border: 2px solid #00C6FF; border-radius: 14px; padding: 18px 16px; margin-top: 30px; box-shadow: 0 4px 25px rgba(0, 198, 255, 0.35);">
    <div style="font-size: 20px; font-weight: 800; color: #00C6FF; text-align: center; margin-bottom: 14px; letter-spacing: 0.5px;">
      🏆 MASTER REVISION FORMULA CHEAT SHEET
    </div>
    <div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(0, 198, 255, 0.35); background: rgba(15, 23, 42, 0.85);">
      <table style="width: 100%; border-collapse: collapse; min-width: 520px; font-size: 14px; text-align: left; color: #E2E8F0;">
        <thead>
          <tr style="background: rgba(0, 198, 255, 0.25); color: #00C6FF; border-bottom: 2px solid #00C6FF;">
            <th style="padding: 10px 14px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(0, 198, 255, 0.25);">Concept / Operation</th>
            <th style="padding: 10px 14px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(0, 198, 255, 0.25);">Standard Mathematical Formula / Law</th>
            <th style="padding: 10px 14px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(0, 198, 255, 0.25);">Crucial Condition / Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">Ordered Pair Equality</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">(<i>a</i>, <i>b</i>) = (<i>c</i>, <i>d</i>) &hArr; <i>a</i> = <i>c</i> and <i>b</i> = <i>d</i></td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">Order matters: (<i>a</i>, <i>b</i>) &ne; (<i>b</i>, <i>a</i>)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
            <td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">Cardinality of Product</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);"><i>n</i>(A &times; B) = <i>n</i>(A) &times; <i>n</i>(B) = <i>p</i> &times; <i>q</i></td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">If either is infinite, A &times; B is infinite</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">Total Relations</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">Total Relations = 2<sup><i>n</i>(A &times; B)</sup> = 2<sup><i>pq</i></sup></td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">Includes empty relation &empty; and universal relation</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
            <td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">Domain &amp; Range Rule</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">Domain &sube; Set A, &nbsp; Range &sube; Set B</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">Range &sube; Codomain always</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">Modulus Function</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);"><i>f</i>(<i>x</i>) = |<i>x</i>|, &nbsp; Domain: &reals;, &nbsp; Range: [0, &infin;)</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">|<i>x</i>| &ge; 0 for all <i>x</i> &isin; &reals;</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
            <td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">Signum Function</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">sgn(<i>x</i>) = <span class="frac"><span class="num">|<i>x</i>|</span><span class="den"><i>x</i></span></span> (<i>x</i> &ne; 0), &nbsp; Range: {&minus;1, 0, 1}</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">sgn(0) = 0</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">Greatest Integer Function</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);"><i>f</i>(<i>x</i>) = [<i>x</i>], &nbsp; Domain: &reals;, &nbsp; Range: &integers;</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);"><i>x</i> &minus; 1 &lt; [<i>x</i>] &le; <i>x</i></td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">Quotient Function</td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">(<span class="frac"><span class="num"><i>f</i></span><span class="den"><i>g</i></span></span>)(<i>x</i>) = <span class="frac"><span class="num"><i>f</i>(<i>x</i>)</span><span class="den"><i>g</i>(<i>x</i>)</span></span></td>
            <td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">Must exclude all zeros of <i>g</i>(<i>x</i>)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;
}

const chapter2MCQs = [
  {
    id: "c11-math-ch2-mcq-1",
    question: "If (x/3 + 1, y − 2/3) = (5/3, 1/3), then the values of x and y are respectively:",
    options: [
      "A):   x = 2, y = 1",
      "B):   x = 1, y = 2",
      "C):   x = 3, y = 1",
      "D):   x = 2, y = 3"
    ],
    correctAnswer: "A",
    explanation: "Equating coordinates: x/3 + 1 = 5/3 ⇒ x/3 = 2/3 ⇒ x = 2. And y − 2/3 = 1/3 ⇒ y = 3/3 = 1."
  },
  {
    id: "c11-math-ch2-mcq-2",
    question: "If set A has 3 elements and set B = {3, 4, 5}, then the total number of elements in (A × B) is:",
    options: [
      "A):   6",
      "B):   9",
      "C):   8",
      "D):   27"
    ],
    correctAnswer: "B",
    explanation: "n(A) = 3 and n(B) = 3. By the Cartesian product cardinality theorem, n(A × B) = n(A) × n(B) = 3 × 3 = 9."
  },
  {
    id: "c11-math-ch2-mcq-3",
    question: "If G = {7, 8} and H = {5, 4, 2}, how many elements will H × G have?",
    options: [
      "A):   5",
      "B):   8",
      "C):   6",
      "D):   12"
    ],
    correctAnswer: "C",
    explanation: "n(H) = 3 and n(G) = 2. Therefore, n(H × G) = 3 × 2 = 6."
  },
  {
    id: "c11-math-ch2-mcq-4",
    question: "If set A = {1, 2}, then how many total subsets does the Cartesian product A × A have?",
    options: [
      "A):   4",
      "B):   8",
      "C):   32",
      "D):   16"
    ],
    correctAnswer: "D",
    explanation: "n(A × A) = 2 × 2 = 4. The number of subsets of any set with m elements is 2ᵐ. Hence, 2⁴ = 16 subsets."
  },
  {
    id: "c11-math-ch2-mcq-5",
    question: "If n(A) = p and n(B) = q, the total number of relations that can be defined from set A to set B is:",
    options: [
      "A):   2^(p + q)",
      "B):   2^(pq)",
      "C):   (pq)²",
      "D):   p^q"
    ],
    correctAnswer: "B",
    explanation: "A relation from A to B is defined as any subset of A × B. Since n(A × B) = pq, the number of subsets is 2^(pq)."
  },
  {
    id: "c11-math-ch2-mcq-6",
    question: "For any non-empty set A, which of the following is always true regarding A × Φ?",
    options: [
      "A):   A × Φ = Φ",
      "B):   A × Φ = A",
      "C):   A × Φ = {Φ}",
      "D):   A × Φ is undefined"
    ],
    correctAnswer: "A",
    explanation: "By definition, the Cartesian product of any set with the empty set contains no ordered pairs, hence A × Φ = Φ."
  },
  {
    id: "c11-math-ch2-mcq-7",
    question: "The range of the constant function f(x) = 7 for all x ∈ ℝ is:",
    options: [
      "A):   ℝ",
      "B):   [0, 7]",
      "C):   {7}",
      "D):   [7, ∞)"
    ],
    correctAnswer: "C",
    explanation: "A constant function maps every real input x to the single value 7. Hence, its range is the singleton set {7}."
  },
  {
    id: "c11-math-ch2-mcq-8",
    question: "The domain of the identity function f(x) = x defined on real numbers is:",
    options: [
      "A):   [0, ∞)",
      "B):   ℝ − {0}",
      "C):   ℤ",
      "D):   ℝ"
    ],
    correctAnswer: "D",
    explanation: "The identity function f(x) = x accepts any real number as input without restriction, so Domain = ℝ."
  },
  {
    id: "c11-math-ch2-mcq-9",
    question: "The value of the signum function sgn(−8.4) is:",
    options: [
      "A):   −1",
      "B):   0",
      "C):   1",
      "D):   −8"
    ],
    correctAnswer: "A",
    explanation: "For any negative real number x < 0, the signum function is defined as sgn(x) = −1."
  },
  {
    id: "c11-math-ch2-mcq-10",
    question: "The value of the greatest integer function [−2.3] is:",
    options: [
      "A):   −2",
      "B):   −3",
      "C):   2",
      "D):   −2.3"
    ],
    correctAnswer: "B",
    explanation: "[x] represents the greatest integer less than or equal to x. The greatest integer ≤ −2.3 is −3."
  },
  {
    id: "c11-math-ch2-mcq-11",
    question: "The domain of the real function f(x) = √(9 − x²) is:",
    options: [
      "A):   (0, 3)",
      "B):   [0, 3]",
      "C):   [−3, 3]",
      "D):   (−∞, 3]"
    ],
    correctAnswer: "C",
    explanation: "For f(x) to be real, 9 − x² ≥ 0 ⇒ x² ≤ 9 ⇒ −3 ≤ x ≤ 3. Hence, Domain = [−3, 3]."
  },
  {
    id: "c11-math-ch2-mcq-12",
    question: "The range of the real function f(x) = −|x| is:",
    options: [
      "A):   ℝ",
      "B):   [0, ∞)",
      "C):   (−∞, 0)",
      "D):   (−∞, 0]"
    ],
    correctAnswer: "D",
    explanation: "Since |x| ≥ 0 for all x ∈ ℝ, multiplying by −1 gives −|x| ≤ 0. Therefore, Range = (−∞, 0]."
  },
  {
    id: "c11-math-ch2-mcq-13",
    question: "If f(x) = 2x − 5, what is the value of f(−3)?",
    options: [
      "A):   −11",
      "B):   1",
      "C):   −1",
      "D):   11"
    ],
    correctAnswer: "A",
    explanation: "Substitute x = −3: f(−3) = 2(−3) − 5 = −6 − 5 = −11."
  },
  {
    id: "c11-math-ch2-mcq-14",
    question: "The domain of the real function f(x) = 1 / √(x − 2) is:",
    options: [
      "A):   [2, ∞)",
      "B):   (2, ∞)",
      "C):   ℝ − {2}",
      "D):   (−∞, 2)"
    ],
    correctAnswer: "B",
    explanation: "The radicand in denominator must be strictly positive: x − 2 > 0 ⇒ x > 2. Hence, Domain = (2, ∞)."
  },
  {
    id: "c11-math-ch2-mcq-15",
    question: "If A = {x, y, z} and B = {1, 2}, how many relations can be defined from A to B?",
    options: [
      "A):   32",
      "B):   16",
      "C):   64",
      "D):   128"
    ],
    correctAnswer: "C",
    explanation: "n(A × B) = 3 × 2 = 6. Total relations = 2⁶ = 64."
  },
  {
    id: "c11-math-ch2-mcq-16",
    question: "The domain of the function f(x) = (x² + 2x + 1) / (x² − 8x + 12) is:",
    options: [
      "A):   ℝ − {2, 6}",
      "B):   ℝ − {−2, −6}",
      "C):   ℝ − {1, 2}",
      "D):   [2, 6]"
    ],
    correctAnswer: "A",
    explanation: "Denominator x² − 8x + 12 = (x − 2)(x − 6) = 0 when x = 2 or x = 6. Hence, Domain = ℝ − {2, 6}."
  },
  {
    id: "c11-math-ch2-mcq-17",
    question: "If f(x) = x + 1 and g(x) = 2x − 3, then (f − g)(x) is equal to:",
    options: [
      "A):   3x − 2",
      "B):   −x + 4",
      "C):   −x − 2",
      "D):   x − 4"
    ],
    correctAnswer: "B",
    explanation: "(f − g)(x) = (x + 1) − (2x − 3) = x + 1 − 2x + 3 = −x + 4."
  },
  {
    id: "c11-math-ch2-mcq-18",
    question: "The range of the real function f(x) = x² / (1 + x²) for x ∈ ℝ is:",
    options: [
      "A):   [0, 1]",
      "B):   (0, 1)",
      "C):   [0, 1)",
      "D):   [1, ∞)"
    ],
    correctAnswer: "C",
    explanation: "Since x² ≥ 0, f(x) ≥ 0 with f(0) = 0. Also x² < 1 + x², so f(x) < 1. Hence, Range = [0, 1)."
  },
  {
    id: "c11-math-ch2-mcq-19",
    question: "If f = {(1, 1), (2, 3), (0, −1), (−1, −3)} is defined by f(x) = ax + b, then the values of a and b are:",
    options: [
      "A):   a = 1, b = 2",
      "B):   a = −1, b = 2",
      "C):   a = 2, b = −1",
      "D):   a = 2, b = 1"
    ],
    correctAnswer: "C",
    explanation: "f(0) = b = −1. Then f(1) = a + b = 1 ⇒ a − 1 = 1 ⇒ a = 2."
  },
  {
    id: "c11-math-ch2-mcq-20",
    question: "If A = {9, 10, 11, 12, 13} and f(n) = highest prime factor of n, then Range of f is:",
    options: [
      "A):   {3, 5, 7, 11}",
      "B):   {2, 3, 5, 11, 13}",
      "C):   {3, 5, 11, 13}",
      "D):   {3, 5, 6, 11, 13}"
    ],
    correctAnswer: "C",
    explanation: "f(9)=3, f(10)=5, f(11)=11, f(12)=3, f(13)=13. Collecting unique values gives Range = {3, 5, 11, 13}."
  },
  {
    id: "c11-math-ch2-mcq-21",
    question: "Which of the following relations is NOT a function?",
    options: [
      "A):   {(1, 2), (2, 3), (3, 4)}",
      "B):   {(1, 2), (2, 2), (3, 2)}",
      "C):   {(1, 2), (1, 3), (2, 4)}",
      "D):   {(2, 1), (3, 1), (4, 1)}"
    ],
    correctAnswer: "C",
    explanation: "In {(1, 2), (1, 3), (2, 4)}, the input 1 has two different images 2 and 3, which violates uniqueness of image."
  },
  {
    id: "c11-math-ch2-mcq-22",
    question: "If f(x) = x², then the value of [f(1.1) − f(1)] / (1.1 − 1) is:",
    options: [
      "A):   2.1",
      "B):   2.0",
      "C):   1.21",
      "D):   0.21"
    ],
    correctAnswer: "A",
    explanation: "[(1.1)² − 1²] / 0.1 = [1.21 − 1] / 0.1 = 0.21 / 0.1 = 2.1."
  },
  {
    id: "c11-math-ch2-mcq-23",
    question: "The range of the function f(x) = 2 − 3x for x > 0 is:",
    options: [
      "A):   [2, ∞)",
      "B):   (−∞, 2)",
      "C):   (−∞, 2]",
      "D):   (2, ∞)"
    ],
    correctAnswer: "B",
    explanation: "x > 0 ⇒ 3x > 0 ⇒ −3x < 0 ⇒ 2 − 3x < 2. Thus, Range = (−∞, 2)."
  },
  {
    id: "c11-math-ch2-mcq-24",
    question: "The domain of the function f(x) = 1 / √(|x| − x) is:",
    options: [
      "A):   ℝ",
      "B):   (0, ∞)",
      "C):   (−∞, 0)",
      "D):   [0, ∞)"
    ],
    correctAnswer: "C",
    explanation: "We need |x| − x > 0 ⇒ |x| > x. This holds strictly when x is negative (x < 0). For x ≥ 0, |x| = x so |x| − x = 0."
  },
  {
    id: "c11-math-ch2-mcq-25",
    question: "The function t(C) = 9C/5 + 32 gives temperature in °F. The value of C when t(C) = 212 is:",
    options: [
      "A):   32",
      "B):   180",
      "C):   212",
      "D):   100"
    ],
    correctAnswer: "D",
    explanation: "9C/5 + 32 = 212 ⇒ 9C/5 = 180 ⇒ 9C = 900 ⇒ C = 100°C (Boiling point of water)."
  }
];

module.exports = {
  getChapter2Overview,
  chapter2MCQs
};
