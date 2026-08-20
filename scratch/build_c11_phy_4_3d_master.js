const fs = require('fs');
const path = require('path');

const themeColor = "#00c6ff";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 198, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(0, 198, 255, 0.25);">
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

const svg1_3d_banking_road = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="390" y="30" text-anchor="middle" fill="#00c6ff" font-family="sans-serif" font-size="17" font-weight="bold">Banking of Circular Curved Roads &amp; Optimum Safe Speed</text>

    <!-- Incline Road at Angle θ -->
    <polygon points="100,340 680,340 680,180" fill="rgba(0,198,255,0.1)" stroke="#00c6ff" stroke-width="2.5"/>
    <text x="220" y="325" fill="#00c6ff" font-family="sans-serif" font-size="16" font-weight="bold">Banking Angle θ</text>

    <!-- Vehicle Block -->
    <rect x="360" y="220" width="100" height="50" rx="8" fill="#FF512F" transform="rotate(-15, 410, 245)"/>
    <text x="410" y="250" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold" transform="rotate(-15, 410, 245)">Car Mass m</text>

    <!-- Force Vectors -->
    <line x1="410" y1="245" x2="410" y2="340" stroke="#76FF03" stroke-width="3"/>
    <text x="420" y="320" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Weight mg ↓</text>

    <line x1="410" y1="245" x2="350" y2="120" stroke="#FFD700" stroke-width="3"/>
    <text x="320" y="130" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Normal Contact N</text>

    <text x="390" y="420" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Optimum Speed v_max = √[ g r (tanθ + μ_s) / (1 - μ_s tanθ) ]</text>
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
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for Unit III: Laws of Motion</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Force (F⃗):</b>
        <span style="color: #FFFFFF;">An external push or pull acting upon a body that changes or tends to change its state of rest or uniform motion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Inertia:</b>
        <span style="color: #FFFFFF;">The natural resistance of a body to any change in its state of rest or uniform motion (measured quantitatively by mass).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Linear Momentum (p⃗):</b>
        <span style="color: #FFFFFF;">The quantity of motion possessed by a body, defined as product of mass and velocity: p⃗ = m v⃗ [kg m/s].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Newton's Second Law:</b>
        <span style="color: #FFFFFF;">The rate of change of momentum is directly proportional to applied net force: F⃗ = dp⃗/dt = m a⃗.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Impulse (J⃗):</b>
        <span style="color: #FFFFFF;">The product of a large force acting over a short time interval: J⃗ = F⃗ Δt = Δp⃗ (Impulse-Momentum Theorem).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Conservation of Momentum:</b>
        <span style="color: #FFFFFF;">If net external force on a system is zero (F_ext = 0), the total momentum remains constant: p⃗_total = Const.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Friction &amp; Laws of Friction:</b>
        <span style="color: #FFFFFF;">Tangential contact force opposing relative motion. Static friction f_s ≤ μ_s N, Kinetic friction f_k = μ_k N.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Banking of Roads:</b>
        <span style="color: #FFFFFF;">Tilting the outer edge of a curved road above inner edge to provide necessary centripetal force without relying on friction alone.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: INERTIA & NEWTON'S FIRST LAW -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Intuitive Concept of Force, Inertia &amp; Newton's First Law of Motion</h2>

  <p>Dynamics investigates the physical interactions that alter the motion of bodies. <b>Newton's First Law of Motion</b> states that every body continues in its state of rest or uniform motion along a straight line unless acted upon by a non-zero net external force.</p>

  <p><b>Inertia</b> is the intrinsic property of matter that resists changes in motion. It exists in three forms: Inertia of Rest (a stationary bus starting abruptly causes passengers to fall backward), Inertia of Motion (a moving bus stopping abruptly causes passengers to lurch forward), and Inertia of Direction (a turning car causes passengers to lean outward).</p>

  <!-- SECTION 2 & 3: MOMENTUM, SECOND LAW & IMPULSE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Momentum, Newton's Second Law &amp; Impulse-Momentum Theorem</h2>

  <p><b>Newton's Second Law of Motion</b> defines force quantitatively. The time rate of change of linear momentum ($\mathbf{p} = m \mathbf{v}$) of a body is directly proportional to the applied net external force and takes place in the direction of the force:</p>

  ${eqBox("<b>F⃗ = " + frac("dp⃗", "dt") + " = m " + frac("dv⃗", "dt") + " = m a⃗ &nbsp;|&nbsp; Impulse J⃗ = ∫ F⃗ dt = Δp⃗</b>")}

  <p>The <b>Impulse-Momentum Theorem</b> states that the net impulse imparted to a body by a force over a time interval $\Delta t$ equals the net change in its linear momentum. Catching a cricket ball by pulling hands backward increases $\Delta t$, thereby reducing the impact force $F = \frac{\Delta p}{\Delta t}$ and preventing hand injury.</p>

  <!-- SECTION 4 & 5: THIRD LAW & MOMENTUM CONSERVATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Newton's Third Law of Motion &amp; Law of Conservation of Linear Momentum</h2>

  <p><b>Newton's Third Law</b> asserts that to every action force, there is always an equal and opposite reaction force ($\mathbf{F}_{AB} = -\mathbf{F}_{BA}$). Action and reaction forces act simultaneously on two different bodies and never cancel each other out.</p>

  <p>The <b>Law of Conservation of Linear Momentum</b> states that if the net external force acting on a system of interacting particles is zero ($\mathbf{F}_{\text{ext}} = 0$), the total linear momentum of the system remains constant over time. Examples include gun recoil velocity ($v_{\text{recoil}} = -\frac{m}{M} v$) and rocket propulsion.</p>

  <!-- SECTION 7 & 8: FRICTION & DYNAMICS OF CIRCULAR MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Static and Kinetic Friction, Dynamics of Circular Motion &amp; Banking of Roads</h2>

  <p><b>Friction</b> is an electromagnetic contact force acting parallel to the surface interface opposing relative motion. Static friction ($f_s \le \mu_s N$) is self-adjusting up to a maximum limiting value ($f_{s,\text{max}} = \mu_s N$). Once sliding begins, kinetic friction ($f_k = \mu_k N$) opposes relative motion ($\mu_k < \mu_s$).</p>

  <p>On curved roads of radius $r$, the maximum safe speed without skidding on a flat road is $v_{\text{max}} = \sqrt{\mu_s g r}$. By <b>banking the road</b> at angle $\theta$, the normal contact force component $N \sin\theta$ provides centripetal acceleration, raising the optimum safe speed to:</p>

  ${eqBox("<b>f<sub>s</sub> ≤ μ<sub>s</sub> N &nbsp;|&nbsp; Banking Speed: v<sub>max</sub> = √[ g r " + frac("tanθ + μ<sub>s</sub>", "1 - μ<sub>s</sub> tanθ") + " ]</b>")}

  ${svg3DCardWrapper("Banking of Circular Curved Roads & Optimum Speed Model", "Free body diagram of vehicle on banked road at angle θ, balancing Normal component N sinθ and friction f_s.", svg1_3d_banking_road)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for Unit III: Laws of Motion</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Newton's Second Law:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">F⃗ = m a⃗ = dp⃗ / dt<br>J⃗ = F⃗ Δt = Δp⃗</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Momentum Conservation:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">F_ext = 0 &nbsp; ⇒ &nbsp; m₁ v₁ + m₂ v₂ = Const<br>Recoil velocity v_r = - (m/M) v</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Banking &amp; Friction:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">v_optimum = √(g r tanθ)<br>f_s ≤ μ_s N &nbsp;|&nbsp; f_k = μ_k N</span>
      </div>
    </div>
  </div>

</div>
`;
}

const overviewHtml = generateFullOverviewHtml();
const targetPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-4.ts');
let content = fs.readFileSync(targetPath, 'utf8');

const regex = /export const c11Phy4HtmlOverview = [\s\S]*?;\s*\n\s*export const c11Phy4HtmlSolutions/;
const replacement = `export const c11Phy4HtmlOverview = ${JSON.stringify(overviewHtml)};\n\nexport const c11Phy4HtmlSolutions`;

content = content.replace(regex, replacement).replace(/\^/g, '');
fs.writeFileSync(targetPath, content, 'utf8');

console.log("Safely updated Overview for Chapter 4!");
