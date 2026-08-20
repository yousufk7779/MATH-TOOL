const fs = require('fs');
const path = require('path');

const themeColor = "#8E2DE2";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(142, 45, 226, 0.25);">
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

const svg1_3d_kinematic_graphs = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#8E2DE2" font-family="sans-serif" font-size="16" font-weight="bold">1. Position-Time (x-t) Parabolic Curve</text>

    <line x1="50" y1="330" x2="350" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="60" y1="60" x2="60" y2="340" stroke="#475569" stroke-width="2"/>
    <text x="355" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Time t</text>
    <text x="50" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Position x</text>

    <path d="M 60 330 Q 180 300 340 90" fill="none" stroke="#8E2DE2" stroke-width="3.5"/>
    <text x="210" y="160" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">x(t) = x₀ + u t + ½ a t²</text>
    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Slope dx/dt = Instantaneous Velocity v(t)</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#8E2DE2" font-family="sans-serif" font-size="16" font-weight="bold">2. Velocity-Time (v-t) Linear Curve</text>

    <line x1="50" y1="330" x2="350" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="60" y1="60" x2="60" y2="340" stroke="#475569" stroke-width="2"/>
    <text x="355" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Time t</text>

    <line x1="60" y1="260" x2="330" y2="100" stroke="#76FF03" stroke-width="3.5"/>
    <text x="180" y="160" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">v = u + a t</text>

    <polygon points="60,260 330,100 330,330 60,330" fill="rgba(118,255,3,0.12)" stroke="#76FF03" stroke-dasharray="3,3" stroke-width="1.5"/>
    <text x="195" y="270" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Enclosed Area = Displacement Δx</text>
    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Slope dv/dt = Acceleration a</text>
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
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for Unit II: Motion in a Straight Line</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Frame of Reference:</b>
        <span style="color: #FFFFFF;">A coordinate system combined with a clock relative to which position, displacement, and motion of a body are measured.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Distance vs Displacement:</b>
        <span style="color: #FFFFFF;">Distance is scalar path length (always ≥ 0). Displacement is shortest vector change in position Δx = x₂ - x₁.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Average Velocity &amp; Speed:</b>
        <span style="color: #FFFFFF;">Average Velocity v_avg = Δx/Δt (vector). Average Speed = Total Distance / Total Time (scalar).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Instantaneous Velocity:</b>
        <span style="color: #FFFFFF;">Velocity at a specific instant of time: v = lim(Δt→0) Δx/Δt = dx/dt (first derivative of position).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Acceleration:</b>
        <span style="color: #FFFFFF;">Rate of change of velocity: Instantaneous a = dv/dt = d²x/dt². Average a_avg = Δv/Δt.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Uniform Acceleration:</b>
        <span style="color: #FFFFFF;">Motion with constant acceleration vector. Obeys kinematic equations: v = u+at, s = ut+½at², v² = u²+2as.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Free Fall Acceleration (g):</b>
        <span style="color: #FFFFFF;">Motion under gravity alone with downward acceleration a = -g ≈ -9.8 m/s² (ignoring air resistance).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Relative Velocity:</b>
        <span style="color: #FFFFFF;">Velocity of body A relative to body B in 1D: v_AB = v_A - v_B.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: FRAME OF REFERENCE & MOTION IN A STRAIGHT LINE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Frame of Reference, Motion in a Straight Line</h2>

  <p>Kinematics is the branch of classical mechanics that describes the motion of points, bodies, and systems of bodies without considering the physical forces that cause the motion. An object is defined to be in motion if its position continuously changes relative to a specified observer or reference origin.</p>

  <p>A <b>Frame of Reference</b> is a coordinate system (such as Cartesian axes $X, Y, Z$) fixed to a reference body, equipped with a synchronized clock. Depending on its state of acceleration, a reference frame is classified as either inertial or non-inertial.</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(i) Inertial vs Non-Inertial Frames</h3>
  <p>An <b>Inertial Frame of Reference</b> is a frame that is either at rest or moving with a uniform velocity along a straight line. Newton's First Law holds true strictly in inertial frames. A <b>Non-Inertial Frame</b> accelerates relative to an inertial frame, requiring the introduction of fictitious (pseudo) forces to apply Newton's laws.</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(ii) One-Dimensional Rectilinear Motion</h3>
  <p>In one-dimensional rectilinear motion, an object moves along a single straight line axis. Its position at any time instant $t$ is completely specified by a single scalar coordinate $x(t)$ relative to an arbitrarily chosen origin $O$.</p>

  <!-- SECTION 2: POSITION-TIME GRAPH, SPEED AND VELOCITY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Position-Time Graph, Speed and Velocity</h2>

  <p>The position of a particle evolving over time is conveniently plotted on a <b>Position-Time ($x-t$) Graph</b>. The geometric slope of the secant connecting two points on an $x-t$ curve yields the average velocity, while the slope of the tangent line at any specific point yields instantaneous velocity.</p>

  <p><b>Distance</b> is the total actual length of the path traversed by a particle during a given time interval, whereas <b>Displacement ($\Delta x = x_2 - x_1$)</b> is the shortest directed vector connecting the initial position to the final position. While distance is always positive and non-decreasing, displacement can be positive, negative, or zero.</p>

  ${eqBox("<b>v = " + frac("dx", "dt") + " &nbsp;|&nbsp; Slope of x-t curve = Instantaneous Velocity</b>")}

  <!-- SECTION 3: CALCULUS IN KINEMATICS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Elementary Concepts of Differentiation and Integration for Describing Motion</h2>

  <p>Calculus provides the mathematical framework for analyzing continuous non-uniform motion. Instantaneous velocity $v(t)$ is defined as the first-order time derivative of position $x(t)$, while instantaneous acceleration $a(t)$ is defined as the time derivative of velocity or the second-order derivative of position:</p>

  ${eqBox("<b>v(t) = " + frac("dx", "dt") + " &nbsp;|&nbsp; a(t) = " + frac("dv", "dt") + " = " + frac("d<sup>2</sup>x", "dt<sup>2</sup>") + " = v " + frac("dv", "dx") + "</b>")}

  <p>Conversely, given acceleration as a function of time $a(t)$, integration yields velocity $v(t) = v_0 + \int_{t_0}^t a(t') dt'$, and integrating velocity yields displacement $x(t) = x_0 + \int_{t_0}^t v(t') dt'$.</p>

  <!-- SECTION 4: UNIFORM & NON-UNIFORM MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Uniform and Non-Uniform Motion, Average Speed and Instantaneous Velocity</h2>

  <p>In <b>Uniform Motion</b>, an object moves with a constant velocity vector along a straight line, covering equal displacements in equal intervals of time ($a = 0$). In <b>Non-Uniform Motion</b>, velocity varies due to changes in speed, direction, or both.</p>

  <p>Average velocity over a time interval $\Delta t = t_2 - t_1$ is defined as the ratio of displacement to time interval ($v_{\text{avg}} = \frac{\Delta x}{\Delta t}$), while average speed is the total path distance divided by total elapsed time.</p>

  <!-- SECTION 5 & 6: KINEMATIC EQUATIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Uniformly Accelerated Motion &amp; Kinematic Equations</h2>

  <p>For motion with constant acceleration $a$, the velocity increases or decreases linearly with time. The enclosed area under a <b>Velocity-Time ($v-t$) Graph</b> equals the displacement ($\Delta x = \int v dt$).</p>

  <p>Integration of constant acceleration $a = \frac{dv}{dt}$ yields the three standard kinematic equations:</p>

  ${eqBox("<b>1. v = u + a t &nbsp;|&nbsp; 2. s = u t + " + frac("1", "2") + " a t<sup>2</sup> &nbsp;|&nbsp; 3. v<sup>2</sup> = u<sup>2</sup> + 2 a s</b>")}
  ${eqBox("<b>Displacement in n-th second: s<sub>n<sup>th</sup></sub> = u + " + frac("a", "2") + " (2 n - 1)</b>")}

  ${svg3DCardWrapper("Position-Time (x-t) & Velocity-Time (v-t) Kinematic Graphs", "Parabolic position-time graph dx/dt = v and linear velocity-time graph with enclosed area = displacement Δx.", svg1_3d_kinematic_graphs)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for Unit II: Motion in a Straight Line</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Instantaneous Derivatives:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">v(t) = dx / dt<br>a(t) = dv / dt = v (dv / dx)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Kinematic Equations:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">v = u + a t &nbsp;|&nbsp; s = u t + ½ a t²<br>v² = u² + 2 a s</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Distance in n-th Second:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">s_n = u + ½ a (2n - 1)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Free Fall Motion:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">a = -g &nbsp;|&nbsp; v_top = 0<br>t_rise = u/g &nbsp;|&nbsp; h_max = u²/(2g)</span>
      </div>
    </div>
  </div>

</div>
`;
}

const overviewHtml = generateFullOverviewHtml();
const targetPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-2.ts');
let content = fs.readFileSync(targetPath, 'utf8');

const regex = /export const c11Phy2HtmlOverview = [\s\S]*?;\s*\n\s*export const c11Phy2HtmlSolutions/;
const replacement = `export const c11Phy2HtmlOverview = ${JSON.stringify(overviewHtml)};\n\nexport const c11Phy2HtmlSolutions`;

content = content.replace(regex, replacement).replace(/\^/g, '');
fs.writeFileSync(targetPath, content, 'utf8');

console.log("Safely updated Overview for Chapter 2!");
