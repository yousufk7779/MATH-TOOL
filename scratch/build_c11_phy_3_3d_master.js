const fs = require('fs');
const path = require('path');

const themeColor = "#FF8A65";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 138, 101, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(255, 138, 101, 0.25);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 17.5px; margin-bottom: 14px; text-align: center; letter-spacing: 0.5px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 840px; margin: 0 auto; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
      ${svgContent}
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 14px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

const svg1_3d_projectile_motion = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="390" y="30" text-anchor="middle" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">Parabolic Projectile Trajectory y(x) &amp; Velocity Vectors</text>

    <!-- Axes -->
    <line x1="50" y1="360" x2="740" y2="360" stroke="#475569" stroke-width="2.5"/>
    <line x1="60" y1="360" x2="60" y2="50" stroke="#475569" stroke-width="2.5"/>
    <text x="745" y="365" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Horizontal Range R</text>
    <text x="50" y="45" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Height y</text>

    <!-- Parabola -->
    <path d="M 60 360 Q 390 40 720 360" fill="none" stroke="#FF8A65" stroke-width="3.5"/>

    <!-- Launch Velocity -->
    <line x1="60" y1="360" x2="160" y2="240" stroke="#76FF03" stroke-width="3"/>
    <text x="120" y="230" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">u → (Angle θ)</text>

    <!-- Peak H_max -->
    <line x1="390" y1="140" x2="390" y2="360" stroke="#00E5FF" stroke-dasharray="4,4" stroke-width="2"/>
    <circle cx="390" cy="140" r="7" fill="#00E5FF"/>
    <text x="390" y="115" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Peak H_max (v_y = 0)</text>

    <text x="390" y="410" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Trajectory Equation: y = x tanθ - [ g / (2 u² cos²θ) ] x²</text>
  </g>
</svg>`;

function generateFullOverviewHtml() {
  return `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for Unit II: Motion in a Plane</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Scalar Quantity:</b>
        <span style="color: #FFFFFF;">Physical quantity possessing magnitude only, obeying ordinary rules of algebra (e.g. Mass, Speed, Work).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Vector Quantity:</b>
        <span style="color: #FFFFFF;">Physical quantity possessing both magnitude and direction, obeying vector addition rules (e.g. Displacement, Velocity, Force).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Unit Vector (Â):</b>
        <span style="color: #FFFFFF;">A vector of unit magnitude indicating direction: Â = A⃗ / |A⃗|. Cartesians: î, ĵ, k̂.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Dot (Scalar) Product:</b>
        <span style="color: #FFFFFF;">A⃗ · B⃗ = |A⃗||B⃗| cosθ. Produces a scalar. Maximum when parallel (θ=0°), zero when perpendicular (θ=90°).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Cross (Vector) Product:</b>
        <span style="color: #FFFFFF;">A⃗ × B⃗ = |A⃗||B⃗| sinθ n̂. Produces a vector perpendicular to plane containing A⃗ and B⃗ via right-hand rule.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Projectile Motion:</b>
        <span style="color: #FFFFFF;">Two-dimensional curved parabolic motion under constant vertical downward gravity acceleration (a_x = 0, a_y = -g).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Uniform Circular Motion:</b>
        <span style="color: #FFFFFF;">Motion along a circular path at constant speed, possessing radially inward centripetal acceleration a_c = v²/r = ω²r.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Relative Velocity in 2D:</b>
        <span style="color: #FFFFFF;">Velocity of object A relative to object B in 2D space: v⃗_AB = v⃗_A - v⃗_B.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: SCALAR & VECTOR QUANTITIES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Scalar and Vector Quantities, Position and Displacement Vectors</h2>

  <p>Two-dimensional kinematics analyzes motion occurring within a plane defined by two orthogonal spatial axes $X$ and $Y$. Physical quantities in two dimensions are broadly divided into scalars and vectors.</p>

  <p>A <b>Scalar Quantity</b> is completely specified by a single real number representing its magnitude alongside its appropriate physical unit (e.g. Mass, Temperature, Distance, Energy). Scalars add algebraically according to ordinary rules of arithmetic.</p>

  <p>A <b>Vector Quantity</b> possesses both a magnitude and a definite spatial direction, obeying vector addition rules like the Triangle and Parallelogram laws (e.g. Position $\mathbf{r}$, Velocity $\mathbf{v}$, Acceleration $\mathbf{a}$, Force $\mathbf{F}$).</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(i) Position and Displacement Vectors in 2D</h3>
  <p>The position of a particle at point $P(x,y)$ relative to origin $O$ is specified by the <b>Position Vector</b> $\mathbf{r} = x \hat{i} + y \hat{j}$. When the particle moves to $P'(x',y')$, its <b>Displacement Vector</b> is $\Delta \mathbf{r} = \mathbf{r}' - \mathbf{r} = (x'-x)\hat{i} + (y'-y)\hat{j}$.</p>

  <!-- SECTION 2: VECTOR ADDITION & COMPONENTS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Addition and Subtraction of Vectors, Unit Vectors &amp; Rectangular Components</h2>

  <p>Vectors cannot be added algebraically. According to the <b>Parallelogram Law of Vector Addition</b>, if two vectors $\mathbf{A}$ and $\mathbf{B}$ inclined at angle $\theta$ are represented by adjacent sides of a parallelogram, their resultant $\mathbf{R} = \mathbf{A} + \mathbf{B}$ is represented by the diagonal passing through their common tail:</p>

  ${eqBox("<b>Resultant R = √(A<sup>2</sup> + B<sup>2</sup> + 2 A B cos θ) &nbsp;|&nbsp; Direction tan α = " + frac("B sin θ", "A + B cos θ") + "</b>")}

  <p>A <b>Unit Vector ($\hat{A} = \frac{\mathbf{A}}{|\mathbf{A}|}$)</b> is a dimensionless vector of unit magnitude indicating pure direction. Resolving a vector $\mathbf{A}$ into rectangular components yields $\mathbf{A}_x = A \cos\theta \hat{i}$ and $\mathbf{A}_y = A \sin\theta \hat{j}$.</p>

  <!-- SECTION 3: SCALAR AND VECTOR PRODUCTS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Scalar (Dot) and Vector (Cross) Product of Vectors</h2>

  <p>The <b>Scalar (Dot) Product</b> of two vectors $\mathbf{A}$ and $\mathbf{B}$ is defined as $\mathbf{A} \cdot \mathbf{B} = |\mathbf{A}| |\mathbf{B}| \cos\theta = A_x B_x + A_y B_y + A_z B_z$. It is maximum when vectors are parallel ($\theta = 0^\circ$) and vanishes when vectors are orthogonal ($\theta = 90^\circ$).</p>

  <p>The <b>Vector (Cross) Product</b> is defined as $\mathbf{A} \times \mathbf{B} = |\mathbf{A}| |\mathbf{B}| \sin\theta \hat{n}$, where $\hat{n}$ is a unit vector perpendicular to the plane containing $\mathbf{A}$ and $\mathbf{B}$ given by the Right-Hand Thumb Rule.</p>

  <!-- SECTION 4: PROJECTILE MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Projectile Motion</h2>

  <p>When an object is thrown into space with an initial velocity $u$ at an angle $\theta$ to the horizontal and allowed to move under gravity alone, it executes <b>Projectile Motion</b> along a parabolic trajectory.</p>

  <p>The horizontal motion has zero acceleration ($a_x = 0, u_x = u \cos\theta = \text{Constant}$), while vertical motion experiences constant downward acceleration ($a_y = -g, u_y = u \sin\theta$).</p>

  ${eqBox("<b>Time of Flight T = " + frac("2 u sin θ", "g") + " &nbsp;|&nbsp; Max Height H = " + frac("u<sup>2</sup> sin<sup>2</sup> θ", "2 g") + " &nbsp;|&nbsp; Range R = " + frac("u<sup>2</sup> sin 2θ", "g") + "</b>")}

  ${svg3DCardWrapper("Parabolic Projectile Motion Trajectory & Velocity Vectors", "Parabolic path y(x) showing initial velocity u at angle θ, peak height H_max, time of flight T, and range R.", svg1_3d_projectile_motion)}

  <!-- SECTION 5: UNIFORM CIRCULAR MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Uniform Circular Motion</h2>

  <p>When a particle moves along a circular path of radius $r$ at a constant linear speed $v$, it undergoes <b>Uniform Circular Motion</b>. Although speed is constant, the velocity vector continuously changes direction, giving rise to a centripetal acceleration directed towards the center of the circle:</p>

  ${eqBox("<b>a<sub>c</sub> = " + frac("v<sup>2</sup>", "r") + " = ω<sup>2</sup> r &nbsp;|&nbsp; Angular Velocity ω = " + frac("dθ", "dt") + " = 2π ν</b>")}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for Unit II: Motion in a Plane</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Vector Products:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">A⃗ · B⃗ = A B cosθ<br>|A⃗ × B⃗| = A B sinθ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Projectile Equations:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">T = 2u sinθ / g<br>H = u² sin²θ / (2g)<br>R = u² sin2θ / g (Max at θ=45°)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Circular Motion:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">a_c = v²/r = ω²r<br>v = ω r &nbsp;|&nbsp; T = 2π / ω</span>
      </div>
    </div>
  </div>

</div>
`;
}

const overviewHtml = generateFullOverviewHtml();
const targetPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-3.ts');
let content = fs.readFileSync(targetPath, 'utf8');

const regex = /export const c11Phy3HtmlOverview = [\s\S]*?;\s*\n\s*export const c11Phy3HtmlSolutions/;
const replacement = `export const c11Phy3HtmlOverview = ${JSON.stringify(overviewHtml)};\n\nexport const c11Phy3HtmlSolutions`;

content = content.replace(regex, replacement).replace(/\^/g, '');
fs.writeFileSync(targetPath, content, 'utf8');

console.log("Safely updated Overview for Chapter 3!");
