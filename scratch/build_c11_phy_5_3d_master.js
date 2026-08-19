const fs = require('fs');
const path = require('path');

const themeColor = "#AB47BC"; // Primary theme color for Class 11 Physics Unit V (System of Particles and Rotational Motion)

// Clean compact inline stacked fraction helper
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

// Helper for single line code formula
function singleLineCode(codeText) {
  return `<code style="font-size: 14px; white-space: nowrap; font-family: monospace; color: #FFFFFF; display: inline-block;">${codeText}</code>`;
}

// 3D Diagram Card Wrapper with glowing borders and dark slate container
function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(171, 71, 188, 0.25);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 16.5px; margin-bottom: 10px; text-align: center; text-transform: uppercase; letter-spacing: 0.8px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 820px; margin: 0 auto; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
      ${svgContent}
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 12px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

// ==================== 100% AUDITED SELF-CONTAINED 3D VOLUMETRIC SVG DIAGRAMS ====================

// 3D SVG 1: 3D Coordinate Space Centre of Mass (2-Particle System)
const svg1_3d_cm_2particle = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="sphereCyan1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#00E5FF"/>
      <stop offset="85%" stop-color="#00838F"/>
      <stop offset="100%" stop-color="#004D40"/>
    </radialGradient>
    <radialGradient id="sphereGold1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="40%" stop-color="#FFD700"/>
      <stop offset="85%" stop-color="#F57F17"/>
      <stop offset="100%" stop-color="#E65100"/>
    </radialGradient>
    <radialGradient id="spherePurple1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#F3E5F5"/>
      <stop offset="40%" stop-color="#AB47BC"/>
      <stop offset="85%" stop-color="#6A1B9A"/>
      <stop offset="100%" stop-color="#4A148C"/>
    </radialGradient>

    <filter id="glow3D1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <marker id="arrowCyan1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowGreen1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowGold1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FFD700"/>
    </marker>
    <marker id="arrowPurple1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#AB47BC"/>
    </marker>
  </defs>

  <!-- 3D Perspective Ground Grid -->
  <g opacity="0.15" stroke="#94A3B8" stroke-width="1">
    <line x1="80" y1="360" x2="720" y2="360"/>
    <line x1="120" y1="310" x2="680" y2="310"/>
    <line x1="160" y1="260" x2="640" y2="260"/>
    <line x1="80" y1="360" x2="400" y2="200"/>
    <line x1="240" y1="360" x2="400" y2="200"/>
    <line x1="400" y1="360" x2="400" y2="200"/>
    <line x1="560" y1="360" x2="400" y2="200"/>
    <line x1="720" y1="360" x2="400" y2="200"/>
  </g>

  <!-- 3D Axes -->
  <line x1="100" y1="340" x2="720" y2="340" stroke="#00E5FF" stroke-width="2" marker-end="url(#arrowCyan1)"/>
  <line x1="100" y1="340" x2="100" y2="50" stroke="#76FF03" stroke-width="2" marker-end="url(#arrowGreen1)"/>
  <line x1="100" y1="340" x2="30" y2="390" stroke="#FFD700" stroke-width="2" marker-end="url(#arrowGold1)"/>

  <text x="730" y="345" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">X</text>
  <text x="95" y="40" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Y</text>
  <text x="15" y="405" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Z</text>
  <text x="80" y="360" fill="#94A3B8" font-family="sans-serif" font-size="14" font-weight="bold">O (0,0,0)</text>

  <!-- 3D Drop Shadows -->
  <ellipse cx="240" cy="310" rx="20" ry="8" fill="rgba(0,0,0,0.6)"/>
  <ellipse cx="600" cy="270" rx="30" ry="12" fill="rgba(0,0,0,0.6)"/>
  <ellipse cx="480" cy="285" rx="14" ry="6" fill="rgba(0,0,0,0.6)"/>

  <!-- Vertical Projection Dotted Lines -->
  <line x1="240" y1="210" x2="240" y2="310" stroke="#00E5FF" stroke-dasharray="3,3" stroke-width="1.5"/>
  <line x1="600" y1="120" x2="600" y2="270" stroke="#FFD700" stroke-dasharray="3,3" stroke-width="1.5"/>
  <line x1="480" y1="150" x2="480" y2="285" stroke="#AB47BC" stroke-dasharray="3,3" stroke-width="1.5"/>

  <!-- Line connecting 3D spheres -->
  <line x1="240" y1="210" x2="600" y2="120" stroke="#E2E8F0" stroke-width="2.5" stroke-dasharray="6,4"/>

  <!-- 3D Sphere 1 (m1) -->
  <circle cx="240" cy="210" r="18" fill="url(#sphereCyan1)" filter="url(#glow3D1)"/>
  <text x="220" y="180" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">m₁ (2 kg)</text>

  <!-- 3D Sphere 2 (m2) -->
  <circle cx="600" cy="120" r="28" fill="url(#sphereGold1)" filter="url(#glow3D1)"/>
  <text x="580" y="85" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">m₂ (4 kg)</text>

  <!-- 3D Centre of Mass Sphere (CM) -->
  <circle cx="480" cy="150" r="13" fill="url(#spherePurple1)" filter="url(#glow3D1)"/>
  <text x="460" y="125" fill="#AB47BC" font-family="sans-serif" font-size="16" font-weight="bold">CM (R_cm)</text>

  <!-- 3D Position Vectors -->
  <line x1="100" y1="340" x2="230" y2="218" stroke="#00E5FF" stroke-width="3" marker-end="url(#arrowCyan1)"/>
  <text x="150" y="290" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">r₁</text>

  <line x1="100" y1="340" x2="588" y2="126" stroke="#FFD700" stroke-width="3" marker-end="url(#arrowGold1)"/>
  <text x="350" y="240" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">r₂</text>

  <line x1="100" y1="340" x2="470" y2="156" stroke="#AB47BC" stroke-width="3.5" marker-end="url(#arrowPurple1)"/>
  <text x="270" y="220" fill="#AB47BC" font-family="sans-serif" font-size="16" font-weight="bold">R_cm</text>

  <!-- Formula Panel Card -->
  <rect x="470" y="310" width="310" height="85" rx="10" fill="rgba(171,71,188,0.18)" stroke="#AB47BC" stroke-width="1.8"/>
  <text x="485" y="338" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">R_cm = (m₁r₁ + m₂r₂) / (m₁ + m₂)</text>
  <text x="485" y="365" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">✓ Exact 3D Position Vector Formula</text>
  <text x="485" y="383" fill="#FFD700" font-family="sans-serif" font-size="13">• CM lies closer to larger mass m₂</text>
</svg>`;

// 3D SVG 2: 3D Trajectory of CM in Mid-Air Projectile Explosion
const svg2_3d_cm_explosion = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="burstGlow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="30%" stop-color="#FFD700"/>
      <stop offset="70%" stop-color="#FF512F"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <filter id="glowStrong2" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- 3D Perspective Ground Grid -->
  <polygon points="60,370 740,370 660,310 140,310" fill="rgba(148,163,184,0.06)" stroke="#334155" stroke-width="1.5"/>
  <line x1="60" y1="370" x2="140" y2="310" stroke="#475569" stroke-width="1"/>
  <line x1="230" y1="370" x2="270" y2="310" stroke="#475569" stroke-width="1"/>
  <line x1="400" y1="370" x2="400" y2="310" stroke="#475569" stroke-width="1"/>
  <line x1="570" y1="370" x2="530" y2="310" stroke="#475569" stroke-width="1"/>
  <line x1="740" y1="370" x2="660" y2="310" stroke="#475569" stroke-width="1"/>
  <text x="80" y="390" fill="#94A3B8" font-family="sans-serif" font-size="13.5">3D Ground Plane</text>

  <!-- 3D Shadow of Parabolic Path -->
  <path d="M 100 340 Q 400 320 700 340" fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="6"/>

  <!-- Uninterrupted Parabolic CM Trajectory in 3D Space -->
  <path d="M 100 340 Q 400 40 700 340" fill="none" stroke="#AB47BC" stroke-width="4" stroke-dasharray="10,6" filter="url(#glowStrong2)"/>
  <text x="460" y="110" fill="#AB47BC" font-family="sans-serif" font-size="15" font-weight="bold">Uninterrupted Parabolic CM Trajectory</text>

  <!-- Launch Point -->
  <circle cx="100" cy="340" r="10" fill="#00E5FF" filter="url(#glowStrong2)"/>
  <text x="50" y="330" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Launch</text>

  <!-- Mid-Air Explosion Point -->
  <circle cx="400" cy="190" r="35" fill="url(#burstGlow2)"/>
  <circle cx="400" cy="190" r="12" fill="#FFFFFF" stroke="#FF512F" stroke-width="3"/>
  <text x="310" y="160" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">💥 Internal Explosion (F_ext = Gravity Only)</text>

  <!-- 3D Fragment Trajectories -->
  <path d="M 400 190 Q 520 100 620 340" fill="none" stroke="#FF512F" stroke-width="2.5" stroke-dasharray="4,4"/>
  <circle cx="620" cy="340" r="9" fill="#FF512F" filter="url(#glowStrong2)"/>
  <text x="635" y="335" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">Fragment m₁</text>

  <path d="M 400 190 Q 360 270 330 350" fill="none" stroke="#00E5FF" stroke-width="2.5" stroke-dasharray="4,4"/>
  <circle cx="330" cy="350" r="7" fill="#00E5FF" filter="url(#glowStrong2)"/>
  <text x="250" y="360" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">Fragment m₂</text>

  <path d="M 400 190 Q 570 230 730 330" fill="none" stroke="#76FF03" stroke-width="2.5" stroke-dasharray="4,4"/>
  <circle cx="730" cy="330" r="11" fill="#76FF03" filter="url(#glowStrong2)"/>
  <text x="660" y="360" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Fragment m₃</text>

  <!-- Explanation Card -->
  <rect x="80" y="45" width="310" height="85" rx="10" fill="rgba(15,23,42,0.9)" stroke="#AB47BC" stroke-width="1.8"/>
  <text x="95" y="72" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Newton's 2nd Law for System:</text>
  <text x="95" y="95" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">F_ext = M A_cm = M g</text>
  <text x="95" y="116" fill="#94A3B8" font-family="sans-serif" font-size="13">Internal forces cancel out (∑ F_int = 0)</text>
</svg>`;

// 3D SVG 3: 3D Geometry of Centre of Mass for Uniform Rod & Semi-Circular Bodies
const svg3_3d_cm_rod_ring = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="rod3DGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="30%" stop-color="#0284C7"/>
      <stop offset="70%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <radialGradient id="ring3DGrad3" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E1BEE7"/>
      <stop offset="50%" stop-color="#AB47BC"/>
      <stop offset="100%" stop-color="#4A148C"/>
    </radialGradient>
  </defs>

  <!-- Left Half: 3D Uniform Rod -->
  <g transform="translate(40, 30)">
    <text x="110" y="30" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">1. 3D Uniform Cylindrical Rod</text>

    <!-- 3D Rod Shadow -->
    <ellipse cx="180" cy="220" rx="140" ry="12" fill="rgba(0,0,0,0.5)"/>

    <!-- 3D Rod Body -->
    <rect x="40" y="130" width="280" height="36" rx="6" fill="url(#rod3DGrad3)" stroke="#38BDF8" stroke-width="1.5"/>
    <ellipse cx="320" cy="148" rx="10" ry="18" fill="#0284C7" stroke="#38BDF8" stroke-width="1.5"/>
    <ellipse cx="40" cy="148" rx="10" ry="18" fill="#38BDF8" stroke="#38BDF8" stroke-width="1.5"/>

    <!-- Element dm -->
    <rect x="172" y="130" width="16" height="36" fill="#FF512F"/>
    <text x="165" y="118" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">dm = λ dx</text>

    <!-- CM Sphere -->
    <circle cx="180" cy="148" r="8" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>
    <line x1="180" y1="148" x2="180" y2="240" stroke="#FFD700" stroke-dasharray="4,4" stroke-width="2"/>

    <!-- Formula Badge -->
    <rect x="110" y="250" width="140" height="40" rx="8" fill="rgba(255,215,0,0.15)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="125" y="275" fill="#FFD700" font-family="monospace" font-size="16" font-weight="bold">X_cm = L / 2</text>
  </g>

  <!-- Vertical Partition -->
  <line x1="400" y1="40" x2="400" y2="380" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Half: 3D Volumetric Semi-Circular Ring & Disc -->
  <g transform="translate(420, 30)">
    <text x="50" y="30" fill="#AB47BC" font-family="sans-serif" font-size="17" font-weight="bold">2. 3D Semi-Circular Ring & Disc</text>

    <!-- Base Axes -->
    <line x1="40" y1="260" x2="300" y2="260" stroke="#475569" stroke-width="2"/>
    <line x1="170" y1="260" x2="170" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="175" y="75" fill="#94A3B8" font-family="sans-serif" font-size="13">Y</text>
    <text x="175" y="275" fill="#94A3B8" font-family="sans-serif" font-size="13">O</text>

    <!-- 3D Ring Shadow -->
    <ellipse cx="170" cy="270" rx="100" ry="12" fill="rgba(0,0,0,0.5)"/>

    <!-- 3D Volumetric Semi-Circular Arc -->
    <path d="M 70 260 A 100 100 0 0 1 270 260" fill="none" stroke="url(#ring3DGrad3)" stroke-width="12" stroke-linecap="round"/>

    <!-- Ring CM Badge -->
    <circle cx="170" cy="196" r="7" fill="#00E5FF" stroke="#FFFFFF" stroke-width="2"/>
    <rect x="185" y="180" width="165" height="32" rx="6" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="201" fill="#00E5FF" font-family="monospace" font-size="13.5" font-weight="bold">Ring: Y_cm = 2R / π</text>

    <!-- Disc CM Badge -->
    <circle cx="170" cy="218" r="7" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>
    <rect x="185" y="222" width="165" height="32" rx="6" fill="rgba(255,215,0,0.15)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="243" fill="#FFD700" font-family="monospace" font-size="13.5" font-weight="bold">Disc: Y_cm = 4R / 3π</text>
  </g>
</svg>`;

// 3D SVG 4: 3D Vector Cross Product & Torque (τ = r x F)
const svg4_3d_torque = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <filter id="glowGreen4" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowGreen3D4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowPink3D4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowCyan3D4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- 3D Perspective Base Plane -->
  <polygon points="120,330 420,330 620,230 320,230" fill="rgba(148,163,184,0.08)" stroke="#475569" stroke-width="2"/>
  <line x1="120" y1="330" x2="620" y2="230" stroke="#334155" stroke-dasharray="4,4"/>
  <line x1="420" y1="330" x2="320" y2="230" stroke="#334155" stroke-dasharray="4,4"/>

  <!-- Pivot Point O -->
  <circle cx="320" cy="280" r="9" fill="#FFFFFF" filter="url(#glowGreen4)"/>
  <text x="285" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Pivot (O)</text>

  <!-- Position Vector r -->
  <line x1="320" y1="280" x2="520" y2="280" stroke="#00E5FF" stroke-width="4" marker-end="url(#arrowCyan3D4)"/>
  <text x="410" y="305" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">r (Position Vector)</text>

  <!-- Applied Force F -->
  <line x1="520" y1="280" x2="630" y2="170" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowPink3D4)"/>
  <text x="645" y="170" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">F (Force)</text>

  <!-- Angle theta Arc -->
  <path d="M 560 280 A 40 40 0 0 0 550 250" fill="none" stroke="#FFD700" stroke-width="2.5"/>
  <text x="565" y="260" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">θ</text>

  <!-- 3D Torque Vector τ (Vertical UPWARD) -->
  <line x1="320" y1="280" x2="320" y2="60" stroke="#76FF03" stroke-width="5" marker-end="url(#arrowGreen3D4)" filter="url(#glowGreen4)"/>
  <text x="340" y="80" fill="#76FF03" font-family="sans-serif" font-size="20" font-weight="bold">τ = r × F (Torque)</text>

  <!-- Right Hand Rule Spiral Curve -->
  <path d="M 360 260 A 40 25 0 0 0 330 235" fill="none" stroke="#76FF03" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="210" y="160" fill="#76FF03" font-family="sans-serif" font-size="13.5">Right-Hand Thumb Rule Direction</text>

  <!-- Formula Panel -->
  <rect x="50" y="50" width="240" height="95" rx="10" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.8"/>
  <text x="65" y="80" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">τ = r × F</text>
  <text x="65" y="105" fill="#76FF03" font-family="monospace" font-size="15">|τ| = r F sin θ</text>
  <text x="65" y="130" fill="#94A3B8" font-family="sans-serif" font-size="13">SI Unit: N m</text>
</svg>`;

// 3D SVG 5: 3D Volumetric Model of Conservation of Angular Momentum
const svg5_3d_angular_momentum = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="weightGrad5" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#B78103"/>
    </radialGradient>
  </defs>

  <!-- Left Side: 3D Platform (Arms Extended) -->
  <g transform="translate(60, 30)">
    <text x="70" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Arms Extended (Large I₁)</text>

    <!-- 3D Rotating Platform -->
    <ellipse cx="170" cy="310" rx="110" ry="25" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="2"/>
    <ellipse cx="170" cy="305" rx="110" ry="25" fill="rgba(2,132,199,0.3)" stroke="#00E5FF" stroke-width="2"/>

    <!-- Central Axis -->
    <line x1="170" y1="50" x2="170" y2="310" stroke="#AB47BC" stroke-width="3" stroke-dasharray="6,6"/>

    <!-- 3D Figure Silhouette -->
    <circle cx="170" cy="90" r="20" fill="#E2E8F0"/>
    <line x1="170" y1="110" x2="170" y2="230" stroke="#E2E8F0" stroke-width="10"/>

    <!-- Extended Arms & Dumbbells -->
    <line x1="60" y1="135" x2="280" y2="135" stroke="#FF512F" stroke-width="8"/>
    <circle cx="60" cy="135" r="14" fill="url(#weightGrad5)"/>
    <circle cx="280" cy="135" r="14" fill="url(#weightGrad5)"/>

    <!-- Slow Rotation Arrow -->
    <path d="M 120 70 A 50 20 0 0 1 220 70" fill="none" stroke="#00E5FF" stroke-width="3"/>

    <text x="80" y="275" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Large I₁ &nbsp;|&nbsp; Slow ω₁</text>
  </g>

  <!-- Central Equality Banner -->
  <g transform="translate(385, 180)">
    <rect x="-45" y="-22" width="90" height="44" rx="10" fill="rgba(171,71,188,0.25)" stroke="#AB47BC" stroke-width="2"/>
    <text x="-32" y="6" fill="#AB47BC" font-family="sans-serif" font-size="16" font-weight="bold">L = Const</text>
  </g>

  <!-- Right Side: 3D Platform (Arms Retracted) -->
  <g transform="translate(460, 30)">
    <text x="70" y="30" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">2. Arms Tucked In (Small I₂)</text>

    <!-- 3D Rotating Platform -->
    <ellipse cx="170" cy="310" rx="110" ry="25" fill="rgba(118,255,3,0.15)" stroke="#76FF03" stroke-width="2"/>
    <ellipse cx="170" cy="305" rx="110" ry="25" fill="rgba(74,222,128,0.3)" stroke="#76FF03" stroke-width="2"/>

    <!-- Central Axis -->
    <line x1="170" y1="50" x2="170" y2="310" stroke="#AB47BC" stroke-width="3" stroke-dasharray="6,6"/>

    <!-- 3D Figure Silhouette -->
    <circle cx="170" cy="90" r="20" fill="#E2E8F0"/>
    <line x1="170" y1="110" x2="170" y2="230" stroke="#E2E8F0" stroke-width="10"/>

    <!-- Tucked Arms & Dumbbells -->
    <line x1="135" y1="135" x2="205" y2="135" stroke="#FF512F" stroke-width="8"/>
    <circle cx="135" cy="135" r="14" fill="url(#weightGrad5)"/>
    <circle cx="205" cy="135" r="14" fill="url(#weightGrad5)"/>

    <!-- Fast Spin Multiple Arrows -->
    <path d="M 110 70 A 60 22 0 0 1 230 70" fill="none" stroke="#76FF03" stroke-width="4"/>
    <path d="M 115 60 A 55 18 0 0 1 225 60" fill="none" stroke="#76FF03" stroke-width="2.5"/>

    <text x="80" y="275" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Small I₂ &nbsp;|&nbsp; Fast ω₂</text>
  </g>

  <!-- Bottom Formula Banner -->
  <rect x="200" y="340" width="400" height="42" rx="10" fill="rgba(0,0,0,0.5)" stroke="#AB47BC" stroke-width="1.8"/>
  <text x="220" y="367" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">I₁ ω₁ = I₂ ω₂ &nbsp; ⇒ &nbsp; ω₂ = (I₁ / I₂) ω₁</text>
</svg>`;

// 3D SVG 6: 3D Couple Forces & Rigid Body Rotational Equilibrium
const svg6_3d_couple_forces = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="bar3D6" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#64748B"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <marker id="arrowUp6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowDown6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowGreen3D6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- 3D Bar Shadow -->
  <ellipse cx="400" cy="230" rx="200" ry="16" fill="rgba(0,0,0,0.5)"/>

  <!-- 3D Metallic Cylindrical Bar -->
  <rect x="200" y="180" width="400" height="34" rx="8" fill="url(#bar3D6)" stroke="#94A3B8" stroke-width="2"/>
  <ellipse cx="600" cy="197" rx="12" ry="17" fill="#334155" stroke="#94A3B8" stroke-width="1.5"/>
  <ellipse cx="200" cy="197" rx="12" ry="17" fill="#64748B" stroke="#94A3B8" stroke-width="1.5"/>

  <!-- Central Pivot Point O -->
  <circle cx="400" cy="197" r="8" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>
  <text x="395" y="230" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">O</text>

  <!-- Force +F at Left End (UPWARD) -->
  <line x1="240" y1="180" x2="240" y2="60" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowUp6)"/>
  <text x="190" y="50" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">+F (Upward)</text>

  <!-- Force -F at Right End (DOWNWARD) -->
  <line x1="560" y1="214" x2="560" y2="330" stroke="#FF512F" stroke-width="4.5" marker-end="url(#arrowDown6)"/>
  <text x="520" y="355" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">-F (Downward)</text>

  <!-- Arm Distance d Dimension -->
  <line x1="240" y1="250" x2="560" y2="250" stroke="#AB47BC" stroke-width="2"/>
  <line x1="240" y1="240" x2="240" y2="260" stroke="#AB47BC" stroke-width="2"/>
  <line x1="560" y1="240" x2="560" y2="260" stroke="#AB47BC" stroke-width="2"/>
  <text x="385" y="272" fill="#AB47BC" font-family="sans-serif" font-size="15.5" font-weight="bold">Arm Distance (d)</text>

  <!-- Clockwise Rotation Arc -->
  <path d="M 360 130 A 65 65 0 0 1 440 130" fill="none" stroke="#76FF03" stroke-width="3.5" marker-end="url(#arrowGreen3D6)"/>
  <text x="340" y="110" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Pure Rotation (Clockwise)</text>

  <!-- Bottom Explanatory Panels -->
  <rect x="80" y="290" width="270" height="80" rx="10" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.5"/>
  <text x="95" y="318" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Translational Equilibrium:</text>
  <text x="95" y="345" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">∑ F = F + (-F) = 0</text>

  <rect x="450" y="290" width="270" height="80" rx="10" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.5"/>
  <text x="465" y="318" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Rotational Couple Torque:</text>
  <text x="465" y="345" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">τ_couple = F × d ≠ 0</text>
</svg>`;

// 3D SVG 7: 3D Volumetric Comparison Matrix (Linear vs Rotational Motion)
const svg7_3d_linear_rotational_chart = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Header Card -->
  <rect x="30" y="20" width="740" height="48" rx="10" fill="rgba(171,71,188,0.25)" stroke="#AB47BC" stroke-width="1.8"/>
  <text x="140" y="50" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">Translational Motion (1D)</text>
  <text x="480" y="50" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">Rotational Motion (Fixed Axis)</text>

  <!-- Row 1: Inertia -->
  <g transform="translate(30, 80)">
    <rect x="0" y="0" width="360" height="56" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="20" y="34" fill="#FFFFFF" font-family="sans-serif" font-size="15">Mass (Inertia): <tspan fill="#00E5FF" font-weight="bold">m</tspan></text>

    <rect x="380" y="0" width="360" height="56" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="400" y="34" fill="#FFFFFF" font-family="sans-serif" font-size="15">Moment of Inertia: <tspan fill="#76FF03" font-weight="bold">I = ∑ m r²</tspan></text>
  </g>

  <!-- Row 2: Kinematics -->
  <g transform="translate(30, 148)">
    <rect x="0" y="0" width="360" height="56" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="20" y="34" fill="#FFFFFF" font-family="sans-serif" font-size="15">Velocity / Accel: <tspan fill="#00E5FF" font-weight="bold">v,  a = dv/dt</tspan></text>

    <rect x="380" y="0" width="360" height="56" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="400" y="34" fill="#FFFFFF" font-family="sans-serif" font-size="15">Angular Vel / Accel: <tspan fill="#76FF03" font-weight="bold">ω,  α = dω/dt</tspan></text>
  </g>

  <!-- Row 3: Force vs Torque -->
  <g transform="translate(30, 216)">
    <rect x="0" y="0" width="360" height="56" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="20" y="34" fill="#FFFFFF" font-family="sans-serif" font-size="15">Newton's 2nd Law: <tspan fill="#00E5FF" font-weight="bold">F = m a</tspan></text>

    <rect x="380" y="0" width="360" height="56" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="400" y="34" fill="#FFFFFF" font-family="sans-serif" font-size="15">Rotational 2nd Law: <tspan fill="#76FF03" font-weight="bold">τ = I α</tspan></text>
  </g>

  <!-- Row 4: Momentum & Energy -->
  <g transform="translate(30, 284)">
    <rect x="0" y="0" width="360" height="60" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="20" y="27" fill="#FFFFFF" font-family="sans-serif" font-size="14">Momentum: <tspan fill="#00E5FF" font-weight="bold">p = m v</tspan></text>
    <text x="20" y="48" fill="#FFFFFF" font-family="sans-serif" font-size="14">Kinetic Energy: <tspan fill="#00E5FF" font-weight="bold">E_k = ½ m v²</tspan></text>

    <rect x="380" y="0" width="360" height="60" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
    <text x="400" y="27" fill="#FFFFFF" font-family="sans-serif" font-size="14">Angular Momentum: <tspan fill="#76FF03" font-weight="bold">L = I ω</tspan></text>
    <text x="400" y="48" fill="#FFFFFF" font-family="sans-serif" font-size="14">Rotational K.E.: <tspan fill="#76FF03" font-weight="bold">E_rot = ½ I ω²</tspan></text>
  </g>

  <!-- Bottom Connecting Banner -->
  <text x="230" y="390" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Connecting Bridges: s = r θ  |  v = r ω  |  a_t = r α  |  τ = r × F</text>
</svg>`;

// 3D SVG 8: 3D Radius of Gyration (k) Volumetric Model
const svg8_3d_radius_gyration = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="sphereGold8" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="40%" stop-color="#FFD700"/>
      <stop offset="85%" stop-color="#F57F17"/>
      <stop offset="100%" stop-color="#E65100"/>
    </radialGradient>
    <radialGradient id="sphereCyan8" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#00E5FF"/>
      <stop offset="85%" stop-color="#00838F"/>
      <stop offset="100%" stop-color="#004D40"/>
    </radialGradient>
  </defs>

  <!-- Left Side: Actual 3D Body -->
  <g transform="translate(40, 20)">
    <text x="50" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Actual 3D Mass Distribution</text>

    <!-- Axis Z-Z' -->
    <line x1="160" y1="50" x2="160" y2="340" stroke="#AB47BC" stroke-width="3" stroke-dasharray="6,6"/>
    <text x="150" y="40" fill="#AB47BC" font-family="sans-serif" font-size="14" font-weight="bold">Z</text>
    <text x="150" y="360" fill="#AB47BC" font-family="sans-serif" font-size="14" font-weight="bold">Z'</text>

    <!-- 3D Volumetric Solid Shape -->
    <path d="M 130 90 Q 300 60 270 230 Q 230 330 90 270 Q 60 160 130 90 Z" fill="rgba(2,132,199,0.18)" stroke="#38BDF8" stroke-width="2.5"/>

    <!-- 3D Mass Particles m1, m2 -->
    <circle cx="230" cy="120" r="8" fill="url(#sphereGold8)"/>
    <line x1="160" y1="120" x2="230" y2="120" stroke="#94A3B8" stroke-dasharray="3,3"/>
    <text x="180" y="112" fill="#FFD700" font-family="sans-serif" font-size="13">m₁, r₁</text>

    <circle cx="260" cy="220" r="9" fill="url(#sphereCyan8)"/>
    <line x1="160" y1="220" x2="260" y2="220" stroke="#94A3B8" stroke-dasharray="3,3"/>
    <text x="195" y="212" fill="#00E5FF" font-family="sans-serif" font-size="13">m₂, r₂</text>

    <text x="70" y="325" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">I = m₁r₁² + m₂r₂² + ...</text>
  </g>

  <!-- Equivalence Symbol -->
  <g transform="translate(390, 180)">
    <text x="-15" y="10" fill="#FFD700" font-family="sans-serif" font-size="28" font-weight="bold">≡</text>
  </g>

  <!-- Right Side: Single Concentrated Mass M at Gyration Radius k -->
  <g transform="translate(440, 20)">
    <text x="50" y="30" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">2. Concentrated Mass M at Radius k</text>

    <!-- Axis Z-Z' -->
    <line x1="160" y1="50" x2="160" y2="340" stroke="#AB47BC" stroke-width="3" stroke-dasharray="6,6"/>

    <!-- 3D Mass M Sphere -->
    <circle cx="280" cy="190" r="22" fill="url(#sphereCyan8)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="265" y="160" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Mass M</text>

    <!-- Distance k Arrow -->
    <line x1="160" y1="190" x2="280" y2="190" stroke="#FFD700" stroke-width="4"/>
    <line x1="160" y1="178" x2="160" y2="202" stroke="#FFD700" stroke-width="2"/>
    <line x1="280" y1="178" x2="280" y2="202" stroke="#FFD700" stroke-width="2"/>
    <text x="210" y="180" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">k</text>

    <text x="80" y="300" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">I = M k²</text>
    <text x="80" y="328" fill="#76FF03" font-family="monospace" font-size="16" font-weight="bold">k = √( I / M )</text>
  </g>
</svg>`;

// 3D SVG 9: 3D Moments of Inertia Reference Set for Standard Bodies
const svg9_3d_moments_of_inertia_set = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="ringGold3D9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="50%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#B78103"/>
    </linearGradient>
    <radialGradient id="discCyan3D9" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="60%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#006064"/>
    </radialGradient>
    <linearGradient id="rod3DGrad9" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="30%" stop-color="#0284C7"/>
      <stop offset="70%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <radialGradient id="sphere3DGrad9" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFD1D1"/>
      <stop offset="40%" stop-color="#FF512F"/>
      <stop offset="85%" stop-color="#DD2C00"/>
      <stop offset="100%" stop-color="#801300"/>
    </radialGradient>
  </defs>

  <!-- Grid 2x2 of 3D Standard Bodies -->

  <!-- 1. 3D Thin Circular Ring -->
  <g transform="translate(30, 20)">
    <rect x="0" y="0" width="360" height="180" rx="10" fill="rgba(255,255,255,0.03)" stroke="#AB47BC" stroke-width="1.2"/>
    <text x="20" y="30" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">1. 3D Thin Circular Ring (Transverse Axis)</text>

    <ellipse cx="120" cy="110" rx="65" ry="28" fill="none" stroke="url(#ringGold3D9)" stroke-width="7"/>
    <line x1="120" y1="45" x2="120" y2="165" stroke="#AB47BC" stroke-width="3" stroke-dasharray="4,4"/>

    <text x="215" y="90" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">I = M R²</text>
    <text x="215" y="120" fill="#94A3B8" font-family="sans-serif" font-size="14">k = R</text>
  </g>

  <!-- 2. 3D Circular Disc -->
  <g transform="translate(410, 20)">
    <rect x="0" y="0" width="360" height="180" rx="10" fill="rgba(255,255,255,0.03)" stroke="#AB47BC" stroke-width="1.2"/>
    <text x="20" y="30" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">2. 3D Circular Disc (Transverse Axis)</text>

    <ellipse cx="120" cy="110" rx="65" ry="28" fill="url(#discCyan3D9)" stroke="#00E5FF" stroke-width="2"/>
    <line x1="120" y1="45" x2="120" y2="165" stroke="#AB47BC" stroke-width="3" stroke-dasharray="4,4"/>

    <text x="215" y="90" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">I = ½ M R²</text>
    <text x="215" y="120" fill="#94A3B8" font-family="sans-serif" font-size="14">k = R / √2</text>
  </g>

  <!-- 3. 3D Metallic Rod -->
  <g transform="translate(30, 215)">
    <rect x="0" y="0" width="360" height="180" rx="10" fill="rgba(255,255,255,0.03)" stroke="#AB47BC" stroke-width="1.2"/>
    <text x="20" y="30" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">3. 3D Metallic Rod (Central Axis)</text>

    <rect x="45" y="100" width="150" height="18" rx="4" fill="url(#rod3DGrad9)" stroke="#38BDF8" stroke-width="1"/>
    <line x1="120" y1="45" x2="120" y2="165" stroke="#AB47BC" stroke-width="3" stroke-dasharray="4,4"/>

    <text x="215" y="90" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">I = <sup>1</sup>/₁₂ M L²</text>
    <text x="215" y="120" fill="#94A3B8" font-family="sans-serif" font-size="13.5">End Axis: I = <sup>1</sup>/₃ M L²</text>
  </g>

  <!-- 4. 3D Volumetric Solid Sphere -->
  <g transform="translate(410, 215)">
    <rect x="0" y="0" width="360" height="180" rx="10" fill="rgba(255,255,255,0.03)" stroke="#AB47BC" stroke-width="1.2"/>
    <text x="20" y="30" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">4. 3D Solid Sphere (Diameter Axis)</text>

    <circle cx="120" cy="105" r="42" fill="url(#sphere3DGrad9)"/>
    <ellipse cx="120" cy="105" rx="42" ry="12" fill="none" stroke="rgba(255,255,255,0.4)" stroke-dasharray="3,3"/>
    <line x1="120" y1="45" x2="120" y2="165" stroke="#AB47BC" stroke-width="3" stroke-dasharray="4,4"/>

    <text x="215" y="90" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">I = <sup>2</sup>/₅ M R²</text>
    <text x="215" y="120" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Hollow: I = <sup>2</sup>/₃ M R²</text>
  </g>
</svg>`;


// Construct final Overview HTML with 3D Volumetric Diagrams
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

  ${svg3DCardWrapper("Centre of Mass of 2-Particle & N-Particle System", "3D Volumetric vector diagram showing origin O(0,0,0), position vectors r₁, r₂, and Centre of Mass vector R_cm.", svg1_3d_cm_2particle)}

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

  ${svg3DCardWrapper("Trajectory of Centre of Mass in Mid-Air Projectile Explosion", "3D spatial trajectory diagram demonstrating uninterrupted parabolic path of CM despite internal explosion scattering fragments.", svg2_3d_cm_explosion)}

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

  ${svg3DCardWrapper("Centre of Mass of Uniform Rod and Semi-Circular Ring/Disc", "3D Volumetric model demonstrating X_cm = L/2 for rod and Y_cm = 2R/π for semi-circular ring.", svg3_3d_cm_rod_ring)}

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

  ${svg3DCardWrapper("Vector Cross Product Diagram for Torque τ = r × F", "3D vector spatial plane showing position vector r, applied force F, and vertical torque vector τ = r × F.", svg4_3d_torque)}

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

  ${svg3DCardWrapper("Conservation of Angular Momentum 3D Model", "3D Volumetric platform model comparing extended arms (large I₁, slow ω₁) vs tucked arms (small I₂, fast ω₂).", svg5_3d_angular_momentum)}

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

  ${svg3DCardWrapper("Couple Forces and Pure Rotational Equilibrium", "3D Metallic cylindrical bar model showing equal opposite forces forming couple torque τ = F × d.", svg6_3d_couple_forces)}

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

  ${svg3DCardWrapper("Analogous Linear and Rotational Motion Variables Comparison", "3D Dual-Column Card System comparing translational (m, v, a, F, p, E_k) and rotational (I, ω, α, τ, L, E_rot) variables.", svg7_3d_linear_rotational_chart)}

  <!-- SECTION 9: MOMENT OF INERTIA & RADIUS OF GYRATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">9. Moment of Inertia & Radius of Gyration</h2>

  ${defCard("Moment of Inertia (I)", "The property of a rigid body by virtue of which it opposes any change in its state of uniform rotational motion about a specified axis.")}

  ${eqBox("<b>I = ∑ m<sub>i</sub> r<sub>i</sub><sup>2</sup> = m<sub>1</sub> r<sub>1</sub><sup>2</sup> + m<sub>2</sub> r<sub>2</sub><sup>2</sup> + ... + m<sub>N</sub> r<sub>N</sub><sup>2</sup> = ∫ r<sup>2</sup> dm</b> &nbsp; (SI Unit: <b>kg m<sup>2</sup></b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Radius of Gyration (k)</h3>
  ${defCard("Radius of Gyration (k)", "The perpendicular distance from the axis of rotation to a point where the entire mass M of the body can be assumed to be concentrated without changing its moment of inertia.")}

  ${eqBox("<b>I = M k<sup>2</sup> &nbsp; ⇒ &nbsp; k = √[ " + frac('I', 'M') + " ] = √[ " + frac('r<sub>1</sub><sup>2</sup> + r<sub>2</sub><sup>2</sup> + ... + r<sub>N</sub><sup>2</sup>', 'N') + " ]</b> &nbsp; (SI Unit: <b>metre, m</b>)")}

  ${svg3DCardWrapper("Radius of Gyration k 3D Model", "3D Volumetric model comparing actual body mass distribution vs concentrated mass M at radius k.", svg8_3d_radius_gyration)}

  <!-- SECTION 10: VALUES OF MOMENTS OF INERTIA FOR SIMPLE GEOMETRICAL OBJECTS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">10. Moments of Inertia of Simple Geometrical Objects</h2>

  ${svg3DCardWrapper("Moments of Inertia Reference Set for Standard Bodies", "3D Rendered reference set for Thin Ring, Circular Disc, Metallic Rod, and Solid Sphere showing rotation axes.", svg9_3d_moments_of_inertia_set)}

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

const tempSolFile = path.join(__dirname, 'temp_sol_eval_3d_audit.js');
fs.writeFileSync(tempSolFile, fullScriptToRun, 'utf8');
const solutionsHtml = require(tempSolFile);
fs.unlinkSync(tempSolFile);

const overviewHtml = generateFullOverviewHtml();

const tsContent = `// Class 11 Physics Unit V: Motion of System of Particles and Rigid Body
// High-Level Reference Book Content & NCERT Solutions (Fully Audited 3D Volumetric Renders)

export const c11Phy5HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy5HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-5.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote fully audited c11-phy-5.ts with 9 self-contained 3D Volumetric Renders to " + outputPath);
