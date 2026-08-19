const fs = require('fs');
const path = require('path');

const themeColor = "#AB47BC"; // Exact primary theme color for Class 11 Physics Unit V (System of Particles and Rotational Motion)

// Clean compact inline stacked fraction that DOES NOT break lines vertically
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(171, 71, 188, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(171, 71, 188, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 4px;">📌 Definition (${term}):</b>
    <p style="margin: 0; color: #FFFFFF; line-height: 1.6; font-size: 15.5px;">${definition}</p>
  </div>`;
}

// Helper for subtopic item with title in themeColor on new line with white explanation text
function colonTopic(title, explanation) {
  return `
  <div style="margin-bottom: 12px;">
    <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 3px;">• ${title}:</b>
    <span style="color: #FFFFFF; line-height: 1.6; display: block; font-size: 15px;">${explanation}</span>
  </div>`;
}

// Helper for single line code formula (strictly nowrap to prevent awkward word wrap on mobile)
function singleLineCode(codeText) {
  return `<code style="font-size: 14px; white-space: nowrap; font-family: monospace; color: #FFFFFF; display: inline-block;">${codeText}</code>`;
}

// SVG Container wrapper
function svgCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0F172A; border: 1.5px solid ${themeColor}; border-radius: 14px; padding: 14px; margin: 22px 0; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 16px; margin-bottom: 8px; text-align: center; text-transform: uppercase; letter-spacing: 0.5px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 780px; margin: 0 auto; overflow: hidden; border-radius: 10px;">
      ${svgContent}
    </div>
    <div style="color: #B0BEC5; font-size: 13.5px; text-align: center; margin-top: 10px; line-height: 1.5;">
      ${caption}
    </div>
  </div>`;
}

// ==================== SVG DIAGRAMS GENERATION ====================

// SVG 1: Centre of Mass 2-Particle System
const svg1_cm_2particle = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <defs>
    <marker id="arrowCyan" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowGold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FFD700"/>
    </marker>
    <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#AB47BC"/>
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="80" y1="320" x2="700" y2="320" stroke="#475569" stroke-width="2" marker-end="url(#arrowCyan)"/>
  <line x1="80" y1="320" x2="80" y2="40" stroke="#475569" stroke-width="2" marker-end="url(#arrowCyan)"/>
  <text x="710" y="325" fill="#94A3B8" font-family="sans-serif" font-size="14" font-weight="bold">X</text>
  <text x="75" y="30" fill="#94A3B8" font-family="sans-serif" font-size="14" font-weight="bold">Y</text>
  <text x="65" y="335" fill="#94A3B8" font-family="sans-serif" font-size="14" font-weight="bold">O (0,0)</text>

  <!-- Particle 1 (m1) -->
  <circle cx="220" cy="200" r="14" fill="#00E5FF" stroke="#FFFFFF" stroke-width="2"/>
  <text x="205" y="175" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">m₁ (2 kg)</text>

  <!-- Particle 2 (m2) -->
  <circle cx="560" cy="100" r="22" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>
  <text x="545" y="70" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">m₂ (4 kg)</text>

  <!-- Line connecting m1 and m2 -->
  <line x1="220" y1="200" x2="560" y2="100" stroke="#94A3B8" stroke-dasharray="5,5" stroke-width="2"/>

  <!-- Centre of Mass (CM) -->
  <circle cx="446" cy="133" r="9" fill="#AB47BC" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="430" y="105" fill="#AB47BC" font-family="sans-serif" font-size="16" font-weight="bold">CM (R_cm)</text>

  <!-- Position Vectors -->
  <line x1="80" y1="320" x2="210" y2="208" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#arrowCyan)"/>
  <text x="130" y="275" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">r₁</text>

  <line x1="80" y1="320" x2="548" y2="105" stroke="#FFD700" stroke-width="2.5" marker-end="url(#arrowGold)"/>
  <text x="320" y="230" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">r₂</text>

  <line x1="80" y1="320" x2="436" y2="138" stroke="#AB47BC" stroke-width="3" marker-end="url(#arrowPurple)"/>
  <text x="240" y="195" fill="#AB47BC" font-family="sans-serif" font-size="15" font-weight="bold">R_cm</text>

  <!-- Formula Box -->
  <rect x="420" y="270" width="310" height="75" rx="8" fill="rgba(171,71,188,0.15)" stroke="#AB47BC" stroke-width="1.5"/>
  <text x="435" y="298" fill="#FFFFFF" font-family="monospace" font-size="14.5" font-weight="bold">R_cm = (m₁r₁ + m₂r₂) / (m₁ + m₂)</text>
  <text x="435" y="325" fill="#AB47BC" font-family="sans-serif" font-size="13" font-weight="bold">• CM is closer to heavier mass m₂</text>
</svg>`;

// SVG 2: Trajectory of Centre of Mass in Mid-Air Projectile Explosion
const svg2_cm_explosion = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <!-- Ground Line -->
  <line x1="60" y1="320" x2="700" y2="320" stroke="#475569" stroke-width="3"/>
  <text x="70" y="345" fill="#94A3B8" font-family="sans-serif" font-size="14">Ground Level</text>

  <!-- Parabolic CM Trajectory (Uninterrupted Parabola) -->
  <path d="M 80 320 Q 380 40 680 320" fill="none" stroke="#AB47BC" stroke-width="3.5" stroke-dasharray="8,6"/>
  <text x="460" y="140" fill="#AB47BC" font-family="sans-serif" font-size="14" font-weight="bold">Uninterrupted Parabolic CM Path</text>

  <!-- Launch point -->
  <circle cx="80" cy="320" r="6" fill="#00E5FF"/>
  <text x="40" y="310" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">Launch</text>

  <!-- Explosion Point (Apex) -->
  <circle cx="380" cy="180" r="10" fill="#FFD700" stroke="#FF512F" stroke-width="3"/>
  <text x="310" y="160" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">💥 Explosion Point (F_ext = Gravity Only)</text>

  <!-- Fragment Paths radiating outward -->
  <path d="M 380 180 Q 480 100 580 320" fill="none" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,4"/>
  <circle cx="580" cy="320" r="7" fill="#FF512F"/>
  <text x="590" y="310" fill="#FF512F" font-family="sans-serif" font-size="12">Fragment 1</text>

  <path d="M 380 180 Q 350 250 340 320" fill="none" stroke="#00E5FF" stroke-width="2" stroke-dasharray="4,4"/>
  <circle cx="340" cy="320" r="5" fill="#00E5FF"/>
  <text x="270" y="310" fill="#00E5FF" font-family="sans-serif" font-size="12">Fragment 2</text>

  <path d="M 380 180 Q 550 220 710 320" fill="none" stroke="#76FF03" stroke-width="2" stroke-dasharray="4,4"/>
  <circle cx="710" cy="320" r="8" fill="#76FF03"/>
  <text x="640" y="345" fill="#76FF03" font-family="sans-serif" font-size="12">Fragment 3</text>

  <!-- Summary Box -->
  <rect x="80" y="50" width="300" height="70" rx="8" fill="rgba(15,23,42,0.85)" stroke="#AB47BC" stroke-width="1.5"/>
  <text x="95" y="75" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">Internal Forces: F_int = 0 on CM</text>
  <text x="95" y="98" fill="#FFFFFF" font-family="sans-serif" font-size="13">CM continues parabolic path as if</text>
  <text x="95" y="114" fill="#FFFFFF" font-family="sans-serif" font-size="13">no internal explosion occurred!</text>
</svg>`;

// SVG 3: Centre of Mass of Uniform Rod and Semi-Circular Ring/Disc
const svg3_cm_rod_ring = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <!-- Left Side: Uniform Rod -->
  <g transform="translate(40, 20)">
    <text x="130" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Uniform Rod (Length L)</text>
    
    <!-- Rod rectangle -->
    <rect x="30" y="140" width="300" height="24" rx="4" fill="url(#rodGrad)" stroke="#00E5FF" stroke-width="2"/>
    <defs>
      <linearGradient id="rodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0284C7"/>
        <stop offset="100%" stop-color="#00E5FF"/>
      </linearGradient>
    </defs>

    <!-- Mass element dx -->
    <rect x="180" y="140" width="16" height="24" fill="#FF512F"/>
    <text x="175" y="130" fill="#FF512F" font-family="sans-serif" font-size="12" font-weight="bold">dm = λ dx</text>

    <!-- CM Point -->
    <circle cx="180" cy="152" r="7" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>
    <line x1="180" y1="152" x2="180" y2="230" stroke="#FFD700" stroke-dasharray="4,4" stroke-width="1.5"/>
    <text x="145" y="248" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">X_cm = L / 2</text>

    <!-- Dimension L -->
    <line x1="30" y1="190" x2="330" y2="190" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="30" y1="180" x2="30" y2="200" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="330" y1="180" x2="330" y2="200" stroke="#94A3B8" stroke-width="1.5"/>
    <text x="165" y="210" fill="#94A3B8" font-family="sans-serif" font-size="14">L</text>
  </g>

  <!-- Divider Line -->
  <line x1="400" y1="30" x2="400" y2="350" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Semi-Circular Ring & Disc -->
  <g transform="translate(420, 20)">
    <text x="70" y="30" fill="#AB47BC" font-family="sans-serif" font-size="16" font-weight="bold">2. Semi-Circular Ring & Disc</text>

    <!-- Base axis -->
    <line x1="40" y1="240" x2="280" y2="240" stroke="#475569" stroke-width="2"/>
    <line x1="160" y1="240" x2="160" y2="50" stroke="#475569" stroke-width="2"/>
    <text x="165" y="65" fill="#94A3B8" font-family="sans-serif" font-size="13">Y</text>
    <text x="165" y="255" fill="#94A3B8" font-family="sans-serif" font-size="13">O</text>

    <!-- Semi circular arc -->
    <path d="M 60 240 A 100 100 0 0 1 260 240" fill="none" stroke="#AB47BC" stroke-width="4"/>

    <!-- Ring CM -->
    <circle cx="160" cy="176" r="6" fill="#00E5FF" stroke="#FFFFFF" stroke-width="2"/>
    <text x="175" y="180" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">Ring CM: Y_cm = 2R / π</text>

    <!-- Disc CM -->
    <circle cx="160" cy="198" r="6" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>
    <text x="175" y="205" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">Disc CM: Y_cm = 4R / 3π</text>

    <!-- Radius line -->
    <line x1="160" y1="240" x2="230" y2="170" stroke="#94A3B8" stroke-dasharray="3,3" stroke-width="1.5"/>
    <text x="195" y="215" fill="#94A3B8" font-family="sans-serif" font-size="13">R</text>
  </g>
</svg>`;

// SVG 4: Vector Cross Product & Torque (τ = r x F)
const svg4_torque = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <defs>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowPink" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowCyan" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- Perspective Plane -->
  <polygon points="120,290 380,290 560,200 300,200" fill="rgba(148,163,184,0.08)" stroke="#475569" stroke-width="1.5"/>

  <!-- Origin / Pivot O -->
  <circle cx="300" cy="245" r="7" fill="#FFFFFF"/>
  <text x="270" y="260" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Pivot (O)</text>

  <!-- Position Vector r -->
  <line x1="300" y1="245" x2="480" y2="245" stroke="#00E5FF" stroke-width="3.5" marker-end="url(#arrowCyan)"/>
  <text x="380" y="270" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">r (Position Vector)</text>

  <!-- Applied Force F -->
  <line x1="480" y1="245" x2="580" y2="150" stroke="#FF512F" stroke-width="3.5" marker-end="url(#arrowPink)"/>
  <text x="590" y="150" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">F (Applied Force)</text>

  <!-- Angle theta arc -->
  <path d="M 520 245 A 40 40 0 0 0 510 216" fill="none" stroke="#FFD700" stroke-width="2"/>
  <text x="525" y="225" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">θ</text>

  <!-- Torque Vector τ (Perpendicular UP) -->
  <line x1="300" y1="245" x2="300" y2="50" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen)"/>
  <text x="315" y="70" fill="#76FF03" font-family="sans-serif" font-size="18" font-weight="bold">τ = r × F (Torque)</text>

  <!-- Right Hand Rule Curved Arrow -->
  <path d="M 330 220 A 30 20 0 0 0 310 200" fill="none" stroke="#76FF03" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="210" y="140" fill="#76FF03" font-family="sans-serif" font-size="13">Right-Hand Rule Direction</text>

  <!-- Formula Panel -->
  <rect x="50" y="40" width="220" height="90" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.5"/>
  <text x="65" y="68" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">τ = r × F</text>
  <text x="65" y="92" fill="#76FF03" font-family="monospace" font-size="14">|τ| = r F sin θ</text>
  <text x="65" y="115" fill="#94A3B8" font-family="sans-serif" font-size="12">SI Unit: N m</text>
</svg>`;

// SVG 5: Conservation of Angular Momentum Ice Skater
const svg5_angular_momentum_skater = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <!-- Left Side: Arms Extended (Large I, Small ω) -->
  <g transform="translate(60, 30)">
    <text x="80" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Arms Extended</text>
    
    <!-- Vertical rotation axis -->
    <line x1="160" y1="50" x2="160" y2="310" stroke="#AB47BC" stroke-width="2" stroke-dasharray="6,6"/>
    
    <!-- Body -->
    <circle cx="160" cy="90" r="18" fill="#FFD700"/> <!-- Head -->
    <line x1="160" y1="108" x2="160" y2="220" stroke="#00E5FF" stroke-width="8"/> <!-- Torso -->
    <line x1="160" y1="220" x2="130" y2="300" stroke="#00E5FF" stroke-width="6"/> <!-- Leg 1 -->
    <line x1="160" y1="220" x2="190" y2="300" stroke="#00E5FF" stroke-width="6"/> <!-- Leg 2 -->

    <!-- Extended Arms (Large r) -->
    <line x1="60" y1="130" x2="260" y2="130" stroke="#FF512F" stroke-width="7"/>
    <circle cx="60" cy="130" r="8" fill="#FF512F"/>
    <circle cx="260" cy="130" r="8" fill="#FF512F"/>

    <!-- Slow Spin Arrow -->
    <path d="M 120 70 A 40 15 0 0 1 200 70" fill="none" stroke="#00E5FF" stroke-width="2.5"/>
    
    <text x="80" y="270" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Large I₁ &nbsp;|&nbsp; Small ω₁</text>
  </g>

  <!-- Central Equals Arrow -->
  <g transform="translate(365, 170)">
    <rect x="-40" y="-20" width="80" height="40" rx="8" fill="rgba(171,71,188,0.2)" stroke="#AB47BC" stroke-width="1.5"/>
    <text x="-28" y="5" fill="#AB47BC" font-family="sans-serif" font-size="16" font-weight="bold">L = Const</text>
  </g>

  <!-- Right Side: Arms Tucked (Small I, Large ω) -->
  <g transform="translate(440, 30)">
    <text x="80" y="30" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">2. Arms Tucked In</text>

    <!-- Vertical rotation axis -->
    <line x1="160" y1="50" x2="160" y2="310" stroke="#AB47BC" stroke-width="2" stroke-dasharray="6,6"/>

    <!-- Body -->
    <circle cx="160" cy="90" r="18" fill="#FFD700"/> <!-- Head -->
    <line x1="160" y1="108" x2="160" y2="220" stroke="#76FF03" stroke-width="8"/> <!-- Torso -->
    <line x1="160" y1="220" x2="145" y2="300" stroke="#76FF03" stroke-width="6"/> <!-- Leg 1 -->
    <line x1="160" y1="220" x2="175" y2="300" stroke="#76FF03" stroke-width="6"/> <!-- Leg 2 -->

    <!-- Tucked Arms (Small r) -->
    <line x1="130" y1="130" x2="190" y2="130" stroke="#FF512F" stroke-width="7"/>
    <circle cx="130" cy="130" r="8" fill="#FF512F"/>
    <circle cx="190" cy="130" r="8" fill="#FF512F"/>

    <!-- Fast Spin Multiple Arrows -->
    <path d="M 110 70 A 50 18 0 0 1 210 70" fill="none" stroke="#76FF03" stroke-width="3.5"/>
    <path d="M 115 62 A 45 15 0 0 1 205 62" fill="none" stroke="#76FF03" stroke-width="2"/>

    <text x="80" y="270" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Small I₂ &nbsp;|&nbsp; Large ω₂</text>
  </g>

  <!-- Bottom Formula Banner -->
  <rect x="180" y="325" width="400" height="40" rx="8" fill="rgba(0,0,0,0.4)" stroke="#AB47BC" stroke-width="1.5"/>
  <text x="210" y="350" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">I₁ ω₁ = I₂ ω₂ &nbsp; ⇒ &nbsp; ω₂ = (I₁ / I₂) ω₁</text>
</svg>`;

// SVG 6: Couple Forces and Equilibrium
const svg6_couple_forces = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <defs>
    <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- Rigid Bar -->
  <rect x="180" y="175" width="400" height="30" rx="6" fill="#334155" stroke="#94A3B8" stroke-width="2"/>

  <!-- Pivot / Midpoint O -->
  <circle cx="380" cy="190" r="7" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>
  <text x="375" y="220" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">O</text>

  <!-- Force F at Left End (UPWARD) -->
  <line x1="220" y1="175" x2="220" y2="60" stroke="#00E5FF" stroke-width="4" marker-end="url(#arrowBlue)"/>
  <text x="180" y="50" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">+F (Upward)</text>

  <!-- Force -F at Right End (DOWNWARD) -->
  <line x1="540" y1="205" x2="540" y2="320" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowRed)"/>
  <text x="500" y="345" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">-F (Downward)</text>

  <!-- Distance d dimension -->
  <line x1="220" y1="240" x2="540" y2="240" stroke="#AB47BC" stroke-width="2"/>
  <line x1="220" y1="230" x2="220" y2="250" stroke="#AB47BC" stroke-width="2"/>
  <line x1="540" y1="230" x2="540" y2="250" stroke="#AB47BC" stroke-width="2"/>
  <text x="365" y="260" fill="#AB47BC" font-family="sans-serif" font-size="15" font-weight="bold">Arm Distance (d)</text>

  <!-- Clockwise Rotation Arc -->
  <path d="M 340 130 A 60 60 0 0 1 420 130" fill="none" stroke="#76FF03" stroke-width="3" marker-end="url(#arrowGreen)"/>
  <text x="325" y="110" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Pure Rotation (Clockwise)</text>

  <!-- Equilibrium Explanation Box -->
  <rect x="80" y="280" width="250" height="75" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.5"/>
  <text x="95" y="305" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">Translational Equilibrium:</text>
  <text x="95" y="330" fill="#FFFFFF" font-family="monospace" font-size="14">∑ F = F + (-F) = 0</text>

  <rect x="430" y="280" width="270" height="75" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.5"/>
  <text x="445" y="305" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Rotational Couple Torque:</text>
  <text x="445" y="330" fill="#FFFFFF" font-family="monospace" font-size="14">τ_couple = F × d ≠ 0</text>
</svg>`;

// SVG 7: Linear vs Rotational Dynamics Comparison Chart
const svg7_linear_rotational_chart = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <!-- Header Bar -->
  <rect x="30" y="25" width="700" height="45" rx="8" fill="rgba(171,71,188,0.2)" stroke="#AB47BC" stroke-width="1.5"/>
  <text x="130" y="53" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">Translational Motion (1D)</text>
  <text x="460" y="53" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Rotational Motion (Fixed Axis)</text>

  <!-- Rows -->
  <!-- Row 1: Inertia -->
  <g transform="translate(30, 85)">
    <rect x="0" y="0" width="340" height="50" rx="6" fill="rgba(255,255,255,0.04)"/>
    <text x="20" y="30" fill="#FFFFFF" font-family="sans-serif" font-size="14">Mass (Inertia): <tspan fill="#00E5FF" font-weight="bold">m</tspan></text>
    
    <rect x="360" y="0" width="340" height="50" rx="6" fill="rgba(255,255,255,0.04)"/>
    <text x="380" y="30" fill="#FFFFFF" font-family="sans-serif" font-size="14">Moment of Inertia: <tspan fill="#76FF03" font-weight="bold">I = ∑ m r²</tspan></text>
  </g>

  <!-- Row 2: Kinematics -->
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="340" height="50" rx="6" fill="rgba(255,255,255,0.04)"/>
    <text x="20" y="30" fill="#FFFFFF" font-family="sans-serif" font-size="14">Velocity / Accel: <tspan fill="#00E5FF" font-weight="bold">v,  a = dv/dt</tspan></text>
    
    <rect x="360" y="0" width="340" height="50" rx="6" fill="rgba(255,255,255,0.04)"/>
    <text x="380" y="30" fill="#FFFFFF" font-family="sans-serif" font-size="14">Angular Vel / Accel: <tspan fill="#76FF03" font-weight="bold">ω,  α = dω/dt</tspan></text>
  </g>

  <!-- Row 3: Force vs Torque -->
  <g transform="translate(30, 205)">
    <rect x="0" y="0" width="340" height="50" rx="6" fill="rgba(255,255,255,0.04)"/>
    <text x="20" y="30" fill="#FFFFFF" font-family="sans-serif" font-size="14">Newton's 2nd Law: <tspan fill="#00E5FF" font-weight="bold">F = m a</tspan></text>
    
    <rect x="360" y="0" width="340" height="50" rx="6" fill="rgba(255,255,255,0.04)"/>
    <text x="380" y="30" fill="#FFFFFF" font-family="sans-serif" font-size="14">Rotational 2nd Law: <tspan fill="#76FF03" font-weight="bold">τ = I α</tspan></text>
  </g>

  <!-- Row 4: Momentum & Energy -->
  <g transform="translate(30, 265)">
    <rect x="0" y="0" width="340" height="55" rx="6" fill="rgba(255,255,255,0.04)"/>
    <text x="20" y="25" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">Momentum: <tspan fill="#00E5FF" font-weight="bold">p = m v</tspan></text>
    <text x="20" y="45" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">Kinetic Energy: <tspan fill="#00E5FF" font-weight="bold">E_k = ½ m v²</tspan></text>
    
    <rect x="360" y="0" width="340" height="55" rx="6" fill="rgba(255,255,255,0.04)"/>
    <text x="380" y="25" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">Angular Momentum: <tspan fill="#76FF03" font-weight="bold">L = I ω</tspan></text>
    <text x="380" y="45" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">Rotational K.E.: <tspan fill="#76FF03" font-weight="bold">E_rot = ½ I ω²</tspan></text>
  </g>

  <!-- Connecting Banner -->
  <text x="260" y="355" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Connecting Bridges: s = r θ | v = r ω | a_t = r α | τ = r × F</text>
</svg>`;

// SVG 8: Radius of Gyration Concept Diagram
const svg8_radius_gyration = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <!-- Left: Irregular Body with Multiple Mass Particles -->
  <g transform="translate(40, 20)">
    <text x="60" y="30" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">1. Actual Body Mass Distribution</text>

    <!-- Axis Z-Z' -->
    <line x1="150" y1="50" x2="150" y2="310" stroke="#AB47BC" stroke-width="2.5" stroke-dasharray="6,6"/>
    <text x="140" y="40" fill="#AB47BC" font-family="sans-serif" font-size="14" font-weight="bold">Z</text>
    <text x="140" y="330" fill="#AB47BC" font-family="sans-serif" font-size="14" font-weight="bold">Z'</text>

    <!-- Irregular Body Shape -->
    <path d="M 120 90 Q 280 60 260 220 Q 220 310 90 260 Q 60 160 120 90 Z" fill="rgba(2,132,199,0.12)" stroke="#0284C7" stroke-width="2"/>

    <!-- Particles m1, m2, m3 -->
    <circle cx="220" cy="110" r="6" fill="#FFD700"/>
    <line x1="150" y1="110" x2="220" y2="110" stroke="#94A3B8" stroke-dasharray="3,3"/>
    <text x="175" y="105" fill="#FFD700" font-family="sans-serif" font-size="12">m₁, r₁</text>

    <circle cx="250" cy="210" r="7" fill="#FF512F"/>
    <line x1="150" y1="210" x2="250" y2="210" stroke="#94A3B8" stroke-dasharray="3,3"/>
    <text x="190" y="205" fill="#FF512F" font-family="sans-serif" font-size="12">m₂, r₂</text>

    <circle cx="100" cy="200" r="5" fill="#76FF03"/>
    <line x1="150" y1="200" x2="100" y2="200" stroke="#94A3B8" stroke-dasharray="3,3"/>
    <text x="110" y="195" fill="#76FF03" font-family="sans-serif" font-size="12">m₃, r₃</text>

    <text x="70" y="295" fill="#FFFFFF" font-family="monospace" font-size="14">I = m₁r₁² + m₂r₂² + ...</text>
  </g>

  <!-- Middle Arrow -->
  <g transform="translate(370, 170)">
    <text x="-20" y="5" fill="#FFD700" font-family="sans-serif" font-size="22" font-weight="bold">≡</text>
  </g>

  <!-- Right: Equivalent Single Mass M at Gyration Radius k -->
  <g transform="translate(420, 20)">
    <text x="60" y="30" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">2. Equivalent Mass M at Radius k</text>

    <!-- Axis Z-Z' -->
    <line x1="150" y1="50" x2="150" y2="310" stroke="#AB47BC" stroke-width="2.5" stroke-dasharray="6,6"/>

    <!-- Single Mass M -->
    <circle cx="260" cy="180" r="16" fill="#76FF03" stroke="#FFFFFF" stroke-width="2"/>
    <text x="250" y="155" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Mass M</text>

    <!-- Distance k -->
    <line x1="150" y1="180" x2="260" y2="180" stroke="#FFD700" stroke-width="3"/>
    <line x1="150" y1="170" x2="150" y2="190" stroke="#FFD700" stroke-width="2"/>
    <line x1="260" y1="170" x2="260" y2="190" stroke="#FFD700" stroke-width="2"/>
    <text x="195" y="170" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">k</text>

    <text x="70" y="270" fill="#FFFFFF" font-family="monospace" font-size="14.5" font-weight="bold">I = M k²</text>
    <text x="70" y="295" fill="#76FF03" font-family="monospace" font-size="14.5" font-weight="bold">k = √( I / M )</text>
  </g>
</svg>`;

// SVG 9: Moments of Inertia Reference Set for Standard Bodies
const svg9_moments_of_inertia_set = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" width="100%" height="100%" style="background:#0F172A; border-radius:10px;">
  <!-- Grid 2x2 of Bodies -->
  
  <!-- 1. Thin Circular Ring -->
  <g transform="translate(30, 20)">
    <rect x="0" y="0" width="340" height="165" rx="8" fill="rgba(255,255,255,0.03)" stroke="#AB47BC" stroke-width="1"/>
    <text x="20" y="28" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">1. Thin Circular Ring (Transverse Axis)</text>
    
    <!-- Ring Ellipse -->
    <ellipse cx="110" cy="95" rx="60" ry="25" fill="none" stroke="#00E5FF" stroke-width="4"/>
    <line x1="110" y1="40" x2="110" y2="150" stroke="#AB47BC" stroke-width="2.5" stroke-dasharray="4,4"/>
    
    <text x="200" y="80" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">I = M R²</text>
    <text x="200" y="110" fill="#94A3B8" font-family="sans-serif" font-size="13">k = R</text>
  </g>

  <!-- 2. Circular Disc -->
  <g transform="translate(390, 20)">
    <rect x="0" y="0" width="340" height="165" rx="8" fill="rgba(255,255,255,0.03)" stroke="#AB47BC" stroke-width="1"/>
    <text x="20" y="28" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">2. Uniform Circular Disc (Transverse Axis)</text>

    <!-- Disc Ellipse Filled -->
    <ellipse cx="110" cy="95" rx="60" ry="25" fill="rgba(118,255,3,0.25)" stroke="#76FF03" stroke-width="2.5"/>
    <line x1="110" y1="40" x2="110" y2="150" stroke="#AB47BC" stroke-width="2.5" stroke-dasharray="4,4"/>

    <text x="200" y="80" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">I = ½ M R²</text>
    <text x="200" y="110" fill="#94A3B8" font-family="sans-serif" font-size="13">k = R / √2</text>
  </g>

  <!-- 3. Thin Uniform Rod -->
  <g transform="translate(30, 195)">
    <rect x="0" y="0" width="340" height="165" rx="8" fill="rgba(255,255,255,0.03)" stroke="#AB47BC" stroke-width="1"/>
    <text x="20" y="28" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">3. Thin Uniform Rod (Center Axis)</text>

    <!-- Rod -->
    <rect x="40" y="88" width="140" height="14" rx="3" fill="#FFD700"/>
    <line x1="110" y1="40" x2="110" y2="150" stroke="#AB47BC" stroke-width="2.5" stroke-dasharray="4,4"/>

    <text x="200" y="80" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">I = <sup>1</sup>/₁₂ M L²</text>
    <text x="200" y="110" fill="#94A3B8" font-family="sans-serif" font-size="13">End Axis: I = <sup>1</sup>/₃ M L²</text>
  </g>

  <!-- 4. Solid Sphere -->
  <g transform="translate(390, 195)">
    <rect x="0" y="0" width="340" height="165" rx="8" fill="rgba(255,255,255,0.03)" stroke="#AB47BC" stroke-width="1"/>
    <text x="20" y="28" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">4. Solid Sphere (Diameter Axis)</text>

    <!-- Sphere Circle with Shading -->
    <circle cx="110" cy="95" r="40" fill="url(#sphereGrad)"/>
    <ellipse cx="110" cy="95" rx="40" ry="12" fill="none" stroke="rgba(255,255,255,0.4)" stroke-dasharray="3,3"/>
    <line x1="110" y1="40" x2="110" y2="150" stroke="#AB47BC" stroke-width="2.5" stroke-dasharray="4,4"/>
    <defs>
      <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#FF8A65"/>
        <stop offset="100%" stop-color="#DD2C00"/>
      </radialGradient>
    </defs>

    <text x="200" y="80" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">I = <sup>2</sup>/₅ M R²</text>
    <text x="200" y="110" fill="#94A3B8" font-family="sans-serif" font-size="13">Hollow: I = <sup>2</sup>/₃ M R²</text>
  </g>
</svg>`;


// Construct final Overview HTML replacing diagram placeholders with SVG Cards
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

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(171, 71, 188, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit V: Motion of System of Particles and Rigid Body</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Centre of Mass (CM):</b>
        <span style="color: #FFFFFF;">The single point where the whole mass of a body or system is concentrated and where external forces appear to act.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Rigid Body:</b>
        <span style="color: #FFFFFF;">A body with a perfectly definite and unchanging shape, where distances between all pairs of constituent particles remain constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Torque (τ):</b>
        <span style="color: #FFFFFF;">The turning or rotational effect of a force about a point or axis of rotation: τ = r × F = |r||F| sin θ.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Angular Momentum (L):</b>
        <span style="color: #FFFFFF;">The moment of linear momentum of a particle about an axis: L = r × p = |r||p| sin θ = I ω.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Moment of Inertia (I):</b>
        <span style="color: #FFFFFF;">The quantitative measure of rotational inertia of a body about an axis: I = ∑ mᵢ rᵢ² = ∫ r² dm.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Radius of Gyration (k):</b>
        <span style="color: #FFFFFF;">The perpendicular distance from axis of rotation at which total mass can be concentrated: I = M k² ⇒ k = √(I / M).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Conservation of Angular Momentum:</b>
        <span style="color: #FFFFFF;">If net external torque is zero (τ_ext = 0), total angular momentum remains constant: L = I ω = constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Couple:</b>
        <span style="color: #FFFFFF;">A pair of equal, opposite, non-collinear parallel forces acting on a rigid body that produces pure rotational motion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Mechanical Equilibrium:</b>
        <span style="color: #FFFFFF;">A state where both net external force (∑ F_ext = 0) and net external torque (∑ τ_ext = 0) are simultaneously zero.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Rotational Kinetic Energy:</b>
        <span style="color: #FFFFFF;">The kinetic energy possessed by a body due to pure rotation about an axis: E<sub>rot</sub> = 1/2 I ω<sup>2</sup>.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: CENTRE OF MASS OF TWO-PARTICLE AND N-PARTICLE SYSTEMS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Centre of Mass of Two-Particle and N-Particle Systems</h2>
  
  ${defCard("Centre of Mass (CM)", "The mathematical point in space where the entire mass of a physical system can be assumed to be concentrated for describing its overall translational motion under external forces.")}

  <p>In extended system analysis, treating every constituent particle individually is computationally complex. By introducing the concept of Centre of Mass, Newton's second law for translational motion applies directly to the system as a whole.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Centre of Mass of a Two-Particle System</h3>
  <p>Consider two particles of masses m<sub>1</sub> and m<sub>2</sub> located at position vectors r<sub>1</sub> and r<sub>2</sub> relative to an origin O:</p>
  
  ${eqBox("<b>R<sub>cm</sub> = " + frac('m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + "</b>")}

  <p>Along a 1D x-axis with m<sub>1</sub> at x<sub>1</sub> and m<sub>2</sub> at x<sub>2</sub>:</p>
  ${eqBox("<b>X<sub>cm</sub> = " + frac('m<sub>1</sub> x<sub>1</sub> + m<sub>2</sub> x<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " &nbsp; (If origin at m<sub>1</sub>: X<sub>cm</sub> = " + frac('m<sub>2</sub> d', 'm<sub>1</sub> + m<sub>2</sub>') + ")</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Centre of Mass of an N-Particle System</h3>
  <p>For a system of N particles of masses m<sub>1</sub>, m<sub>2</sub>, ..., m<sub>N</sub> with total mass M = ∑ m<sub>i</sub>:</p>
  
  ${eqBox("<b>R<sub>cm</sub> = " + frac('∑ m<sub>i</sub> r<sub>i</sub>', 'M') + " = " + frac('1', 'M') + " ( m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub> + ... + m<sub>N</sub> r<sub>N</sub> )</b>")}

  ${svgCardWrapper("Centre of Mass of 2-Particle & N-Particle System", "Position vector geometry showing origin O, vectors r₁, r₂, and resultant Centre of Mass vector R_cm.", svg1_cm_2particle)}

  <!-- SECTION 2: MOMENTUM CONSERVATION & CENTRE OF MASS MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Momentum Conservation & Centre of Mass Motion</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Velocity and Acceleration of Centre of Mass</h3>
  <p>Differentiating position vector R<sub>cm</sub> with respect to time t:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("Velocity of Centre of Mass (V<sub>cm</sub>)", singleLineCode("V<sub>cm</sub> = " + frac('dR<sub>cm</sub>', 'dt') + " = " + frac('∑ m<sub>i</sub> v<sub>i</sub>', 'M') + " = " + frac('P<sub>total</sub>', 'M')))}
    ${colonTopic("Acceleration of Centre of Mass (A<sub>cm</sub>)", singleLineCode("A<sub>cm</sub> = " + frac('dV<sub>cm</sub>', 'dt') + " = " + frac('∑ m<sub>i</sub> a<sub>i</sub>', 'M') + " &nbsp; ⇒ &nbsp; M A<sub>cm</sub> = F<sub>ext</sub>"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Conservation of Linear Momentum of CM</h3>
  ${defCard("Conservation of CM Motion", "Internal forces between particles cancel out in pairs by Newton's Third Law (F<sub>ij</sub> = -F<sub>ji</sub>). Therefore, internal forces cannot alter the motion of the Centre of Mass.")}

  <p>If zero net external force acts on a system (F<sub>ext</sub> = 0):</p>
  ${eqBox("<b>M A<sub>cm</sub> = 0 &nbsp; ⇒ &nbsp; V<sub>cm</sub> = Constant &nbsp; ⇒ &nbsp; P<sub>total</sub> = M V<sub>cm</sub> = Constant</b>")}

  ${svgCardWrapper("Trajectory of Centre of Mass in Mid-Air Projectile Explosion", "Trajectory diagram showing parabolic path of CM remaining unaffected while internal explosion scatters fragments.", svg2_cm_explosion)}

  <!-- SECTION 3: CENTRE OF MASS OF RIGID BODIES & UNIFORM ROD -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Centre of Mass of a Rigid Body & Uniform Rod</h2>

  ${defCard("Continuous Mass Distribution CM", "For a rigid body with continuous distribution of mass dm at position r, summation is replaced by integration over the volume of the body.")}

  ${eqBox("<b>R<sub>cm</sub> = " + frac('1', 'M') + " ∫ r dm &nbsp;|&nbsp; X<sub>cm</sub> = " + frac('1', 'M') + " ∫ x dm &nbsp;|&nbsp; Y<sub>cm</sub> = " + frac('1', 'M') + " ∫ y dm</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Derivation for Centre of Mass of a Uniform Rod</h3>
  <p>Consider a uniform rod of mass M, length L, and linear mass density λ = M / L aligned from x = 0 to x = L:</p>
  
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold;">Mass element dm = λ dx = (M / L) dx</div>
    <div style="color: #FFFFFF; font-size: 16px; font-weight: bold; margin-top: 6px; color: ${themeColor};">X<sub>cm</sub> = " + frac('1', 'M') + " ∫<sub>0</sub><sup>L</sup> x [ (M / L) dx ] = " + frac('1', 'L') + " [ x<sup>2</sup> / 2 ]<sub>0</sub><sup>L</sup> = " + frac('1', 'L') + " ( " + frac('L<sup>2</sup>', '2') + " ) = " + frac('L', '2') + "</div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) CM of Symmetric Geometrical Bodies</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Uniform Ring / Disc / Sphere", "Located at geometric center of symmetry.")}
    ${colonTopic("Uniform Semi-Circular Ring", singleLineCode("Y<sub>cm</sub> = " + frac('2 R', 'π')))}
    ${colonTopic("Uniform Semi-Circular Disc", singleLineCode("Y<sub>cm</sub> = " + frac('4 R', '3 π')))}
    ${colonTopic("Uniform Solid Hemisphere", singleLineCode("Y<sub>cm</sub> = " + frac('3 R', '8')))}
  </div>

  ${svgCardWrapper("Centre of Mass of Uniform Rod and Semi-Circular Ring/Disc", "Calculus integration setup demonstrating X_cm = L/2 for rod and Y_cm = 2R/π for semi-circular ring.", svg3_cm_rod_ring)}

  <!-- SECTION 4: TORQUE & ANGULAR MOMENTUM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Moment of a Force (Torque) & Angular Momentum</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Moment of a Force (Torque τ)</h3>
  ${defCard("Torque (τ)", "The rotational analogue of force, defined as the vector cross product of position vector r and applied force F.")}

  ${eqBox("<b>τ = r × F = |r| |F| sin θ n̂ = Force × Perpendicular Distance (F r<sub>⊥</sub>)</b> &nbsp; (SI Unit: <b>N m</b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Angular Momentum (L)</h3>
  ${defCard("Angular Momentum (L)", "The rotational analogue of linear momentum, defined as the vector cross product of position vector r and linear momentum p.")}

  ${eqBox("<b>L = r × p = |r| |p| sin θ n̂ = I ω</b> &nbsp; (SI Unit: <b>kg m<sup>2</sup> s<sup>-1</sup> or J s</b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Relation Between Torque and Angular Momentum</h3>
  <p>Differentiating angular momentum L = r × p with respect to time t:</p>
  
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold;">dL / dt = d(r × p)/dt = (dr/dt × p) + (r × dp/dt)</div>
    <div style="color: #FFFFFF; font-size: 15.5px;">Since dr/dt = v and p = m v, (v × m v) = 0. And dp/dt = F:</div>
    <div style="color: #FFFFFF; font-size: 16px; font-weight: bold; margin-top: 6px; color: ${themeColor};">dL / dt = r × F = τ<sub>ext</sub></div>
  </div>

  ${svgCardWrapper("Vector Cross Product Diagram for Torque τ = r × F", "3D vector plane diagram showing position vector r, force F, and perpendicular torque vector τ = r × F.", svg4_torque)}

  <!-- SECTION 5: CONSERVATION OF ANGULAR MOMENTUM & APPLICATIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Law of Conservation of Angular Momentum & Applications</h2>

  ${defCard("Law of Conservation of Angular Momentum", "If the net external torque acting on a rotating system is zero (τ_ext = 0), the total angular momentum of the system remains strictly constant.")}

  ${eqBox("<b>τ<sub>ext</sub> = " + frac('dL', 'dt') + " = 0 &nbsp; ⇒ &nbsp; L = I ω = I<sub>1</sub> ω<sub>1</sub> = I<sub>2</sub> ω<sub>2</sub> = Constant</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Practical Applications</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Acrobat / Ice Skater Spinning", "When an ice skater pulls arms and legs inward toward axis of rotation, moment of inertia I decreases. To conserve L = I ω, angular speed ω increases dramatically!")}
    ${colonTopic("Diver Jumping from Springboard", "After leaving springboard, diver folds body (curling arms and legs) to reduce I, causing fast rotational somersaults (high ω). Before touching water, diver stretches body to increase I and slow down rotation for a smooth entry.")}
    ${colonTopic("Planetary Motion (Kepler's Second Law)", "As a planet moves closer to Sun in elliptical orbit, radius r decreases, so moment of inertia I = m r<sup>2</sup> decreases. To conserve L, orbital speed v (or ω) increases.")}
  </div>

  ${svgCardWrapper("Conservation of Angular Momentum Ice Skater Example", "Comparative diagram showing ice skater arms extended (large I₁, small ω₁) vs arms tucked (small I₂, large ω₂).", svg5_angular_momentum_skater)}

  <!-- SECTION 6: EQUILIBRIUM OF RIGID BODIES & COUPLE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Equilibrium of Rigid Bodies & Couple</h2>

  ${defCard("Complete Mechanical Equilibrium", "A rigid body is in complete mechanical equilibrium if it possesses simultaneous translational equilibrium AND rotational equilibrium.")}

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    ${colonTopic("Translational Equilibrium", singleLineCode("∑ F<sub>ext</sub> = 0 &nbsp; ⇒ &nbsp; ∑ F<sub>x</sub> = 0, &nbsp; ∑ F<sub>y</sub> = 0, &nbsp; ∑ F<sub>z</sub> = 0 &nbsp; (A<sub>cm</sub> = 0)"))}
    ${colonTopic("Rotational Equilibrium", singleLineCode("∑ τ<sub>ext</sub> = 0 &nbsp; ⇒ &nbsp; ∑ τ<sub>x</sub> = 0, &nbsp; ∑ τ<sub>y</sub> = 0, &nbsp; ∑ τ<sub>z</sub> = 0 &nbsp; (α = 0)"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Couple and Moment of a Couple</h3>
  ${defCard("Couple", "A pair of two equal, opposite, and non-collinear parallel forces acting on a rigid body at different points.")}

  <p>A couple produces pure rotational motion without any translational acceleration (since ∑ F = 0 but ∑ τ ≠ 0).</p>
  ${eqBox("<b>Torque of a Couple = Magnitude of Either Force × Perpendicular Distance between Forces (F × d)</b>")}

  ${svgCardWrapper("Couple Forces and Pure Rotational Equilibrium", "Diagram showing two equal, opposite, non-collinear forces forming a couple producing pure torque τ = F × d.", svg6_couple_forces)}

  <!-- SECTION 7: RIGID BODY ROTATION & ROTATIONAL KINEMATICS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Rigid Body Rotation & Equations of Rotational Motion</h2>

  <p>For a rigid body rotating about a fixed axis with constant angular acceleration α:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("First Rotational Equation", singleLineCode("ω = ω<sub>0</sub> + α t"))}
    ${colonTopic("Second Rotational Equation", singleLineCode("θ = ω<sub>0</sub> t + " + frac('1', '2') + " α t<sup>2</sup>"))}
    ${colonTopic("Third Rotational Equation", singleLineCode("ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ"))}
    ${colonTopic("Angular Displacement in n-th Second", singleLineCode("θ<sub>n<sup>th</sup></sub> = ω<sub>0</sub> + " + frac('α', '2') + " (2 n - 1)"))}
  </div>

  <!-- SECTION 8: COMPARISON OF LINEAR AND ROTATIONAL MOTIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Comparison of Linear and Rotational Motions</h2>

  ${svgCardWrapper("Analogous Linear and Rotational Motion Variables Comparison", "Comparative matrix linking translational variables (m, v, a, F, p, E_k) with rotational variables (I, ω, α, τ, L, E_rot).", svg7_linear_rotational_chart)}

  <!-- SECTION 9: MOMENT OF INERTIA & RADIUS OF GYRATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">9. Moment of Inertia & Radius of Gyration</h2>

  ${defCard("Moment of Inertia (I)", "The property of a rigid body by virtue of which it opposes any change in its state of uniform rotational motion about a specified axis.")}

  ${eqBox("<b>I = ∑ m<sub>i</sub> r<sub>i</sub><sup>2</sup> = m<sub>1</sub> r<sub>1</sub><sup>2</sup> + m<sub>2</sub> r<sub>2</sub><sup>2</sup> + ... + m<sub>N</sub> r<sub>N</sub><sup>2</sup> = ∫ r<sup>2</sup> dm</b> &nbsp; (SI Unit: <b>kg m<sup>2</sup></b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Radius of Gyration (k)</h3>
  ${defCard("Radius of Gyration (k)", "The perpendicular distance from the axis of rotation to a point where the entire mass M of the body can be assumed to be concentrated without changing its moment of inertia.")}

  ${eqBox("<b>I = M k<sup>2</sup> &nbsp; ⇒ &nbsp; k = √[ " + frac('I', 'M') + " ] = √[ " + frac('r<sub>1</sub><sup>2</sup> + r<sub>2</sub><sup>2</sup> + ... + r<sub>N</sub><sup>2</sup>', 'N') + " ]</b> &nbsp; (SI Unit: <b>metre, m</b>)")}

  ${svgCardWrapper("Radius of Gyration k Concept Diagram", "Illustration showing actual mass distribution vs equivalent mass M concentrated at radius k where I = M k².", svg8_radius_gyration)}

  <!-- SECTION 10: VALUES OF MOMENTS OF INERTIA FOR SIMPLE GEOMETRICAL OBJECTS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">10. Moments of Inertia of Simple Geometrical Objects</h2>

  ${svgCardWrapper("Moments of Inertia Reference Set for Standard Bodies", "Reference set of 3D figures for Ring, Disc, Rod, and Sphere showing rotation axes and formulas.", svg9_moments_of_inertia_set)}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(171, 71, 188, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Rotational Identities & Moments of Inertia Summary for Unit V</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Centre of Mass Position:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">2-Particle: R<sub>cm</sub> = ` + frac('m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + `<br>Rod (Length L): X<sub>cm</sub> = ` + frac('L', '2') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Torque & Angular Momentum:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">τ = r × F = I α &nbsp;|&nbsp; L = r × p = I ω<br>τ<sub>ext</sub> = ` + frac('dL', 'dt') + ` &nbsp;|&nbsp; τ<sub>ext</sub> = 0 ⇒ L = I ω = Const.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Rotational Kinematics:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">ω = ω<sub>0</sub> + α t &nbsp;|&nbsp; θ = ω<sub>0</sub> t + ` + frac('1', '2') + ` α t<sup>2</sup><br>ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Rotational Kinetic Energy & Power:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">E<sub>rot</sub> = ` + frac('1', '2') + ` I ω<sup>2</sup> = ` + frac('L<sup>2</sup>', '2 I') + `<br>Power P = τ ω</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Standard Moments of Inertia:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Ring (CM): MR<sup>2</sup> &nbsp;|&nbsp; Disc (CM): ` + frac('1', '2') + ` MR<sup>2</sup><br>Rod (CM): ` + frac('1', '12') + ` ML<sup>2</sup> &nbsp;|&nbsp; Sphere: ` + frac('2', '5') + ` MR<sup>2</sup></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Radius of Gyration Formula:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">I = M k<sup>2</sup> &nbsp; ⇒ &nbsp; k = √[ ` + frac('I', 'M') + ` ]</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Read existing Solutions HTML from scratch/build_c11_phy_5.js
const prevBuildScript = fs.readFileSync(path.join(__dirname, 'build_c11_phy_5.js'), 'utf8');

// Extract solutionsHtml from prevBuildScript
const solStartIdx = prevBuildScript.indexOf('let solutionsHtml =');
const solEndIdx = prevBuildScript.indexOf('console.log("Unit V (Motion of System of Particles and Rigid Body) Solutions HTML generated successfully.");');

if (solStartIdx === -1 || solEndIdx === -1) {
  console.error("Could not find solutionsHtml in build_c11_phy_5.js");
  process.exit(1);
}

const solutionsPartCode = prevBuildScript.substring(solStartIdx, solEndIdx);

// Execute solutions code dynamically to get solutionsHtml string
const fullScriptToRun = `
const themeColor = "${themeColor}";
function frac(num, den) {
  return \`<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">\${num}</span>
    <span style="padding: 0 2px; display: inline-block;">\${den}</span>
  </span>\`;
}
function solBox(qNo, title, question, solution) {
  return \`
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: \${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">Q\${qNo}: \${title}</h3>
    <div style="color: #F0F0F0; margin-bottom: 12px; line-height: 1.6; font-size: 15.5px;">\${question}</div>
    <div style="background: rgba(171, 71, 188, 0.05); border-left: 3.5px solid \${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: \${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Explanation:</b>
      \${solution}
    </div>
  </div>\`;
}
${solutionsPartCode}
module.exports = solutionsHtml;
`;

const tempSolFile = path.join(__dirname, 'temp_sol_eval.js');
fs.writeFileSync(tempSolFile, fullScriptToRun, 'utf8');
const solutionsHtml = require(tempSolFile);
fs.unlinkSync(tempSolFile);

const overviewHtml = generateFullOverviewHtml();

const tsContent = `// Class 11 Physics Unit V: Motion of System of Particles and Rigid Body
// High-Level Reference Book Content & NCERT Solutions (Enhanced with Custom Crisp SVG Diagrams)

export const c11Phy5HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy5HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-5.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote c11-phy-5.ts with 9 custom SVG diagrams to " + outputPath);
