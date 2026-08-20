const fs = require('fs');
const path = require('path');

const themeColor = "#FF8A65"; // Primary theme color for Class 11 Physics Unit III (Laws of Motion)

// Clean compact inline stacked fraction helper
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 138, 101, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(255, 138, 101, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
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

// 3D Diagram Card Wrapper with glowing borders and dark slate container (No redundant text badge)
function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(255, 138, 101, 0.25);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 17px; margin-bottom: 12px; text-align: center; text-transform: uppercase; letter-spacing: 0.8px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 840px; margin: 0 auto; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
      ${svgContent}
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 12px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

// ==================== 7 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 3 (ALL OVERFLOWS & OVERLAPS FIXED) ====================

// 3D SVG 1: Galileo's Double Inclined Plane Experiment (Inertia Concept)
const svg1_3d_galileo_inclined_plane = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="ballGrad1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="40%" stop-color="#FFD700"/>
      <stop offset="85%" stop-color="#F57F17"/>
      <stop offset="100%" stop-color="#E65100"/>
    </radialGradient>
    <filter id="glowOrange1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Left Section Heading -->
  <text x="210" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Galileo's Double Inclined Plane Experiment</text>

  <!-- 3D Inclined Planes Surface -->
  <polygon points="60,350 280,350 100,140 60,140" fill="rgba(255,138,101,0.12)" stroke="#FF8A65" stroke-width="2"/>
  
  <!-- Horizontal Connecting Track -->
  <line x1="60" y1="350" x2="740" y2="350" stroke="#475569" stroke-width="2"/>

  <!-- Right Inclines (Varying Angles: Steep θ1, Gentle θ2, Flat θ3=0) -->
  <line x1="280" y1="350" x2="440" y2="140" stroke="#FF512F" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="410" y="125" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Steep Incline (θ₁)</text>

  <line x1="280" y1="350" x2="580" y2="140" stroke="#76FF03" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="560" y="125" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Gentle Incline (θ₂)</text>

  <line x1="280" y1="350" x2="740" y2="350" stroke="#00E5FF" stroke-width="3"/>
  <text x="600" y="335" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Flat Track (θ₃ = 0°)</text>

  <!-- Height Reference Line h -->
  <line x1="60" y1="140" x2="740" y2="140" stroke="#94A3B8" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="70" y="130" fill="#94A3B8" font-family="sans-serif" font-size="14">Initial Height h</text>

  <!-- 3D Rolling Ball -->
  <circle cx="100" cy="125" r="16" fill="url(#ballGrad1)" filter="url(#glowOrange1)"/>
  <text x="50" y="110" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Release</text>

  <!-- Motion Path Arrows -->
  <path d="M 100 140 L 280 350 L 700 350" fill="none" stroke="#FF8A65" stroke-width="3"/>

  <!-- Formula Panel Top Right (x=430, y=25, width=345, height=95) -->
  <rect x="430" y="25" width="345" height="95" rx="10" fill="rgba(255,138,101,0.18)" stroke="#FF8A65" stroke-width="1.8"/>
  <text x="602" y="52" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Galileo's Law of Inertia</text>
  <text x="602" y="76" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">✓ On flat plane (θ = 0°), ball moves forever!</text>
  <text x="602" y="98" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">• Zero Net Force ⇒ Constant Velocity v</text>
</svg>`;

// 3D SVG 2: Newton's Second Law — Free Body Diagram & F = ma Model
const svg2_3d_fbd_second_law = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="blockGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#C73E1D"/>
    </linearGradient>
    <filter id="glowCoral2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowCyan2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowGreen2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowRed2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
  </defs>

  <!-- Left Side: Free Body Diagram (FBD) of Mass m (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Free Body Diagram (FBD) of Mass m</text>

    <!-- Ground Surface -->
    <line x1="30" y1="320" x2="330" y2="320" stroke="#475569" stroke-width="3"/>
    <ellipse cx="180" cy="320" rx="90" ry="12" fill="rgba(0,0,0,0.5)"/>

    <!-- 3D Metallic Block -->
    <rect x="110" y="220" width="140" height="100" rx="8" fill="url(#blockGrad2)" stroke="#FF8A65" stroke-width="2" filter="url(#glowCoral2)"/>
    <text x="165" y="275" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Mass m</text>

    <!-- Applied Force F (Rightward) -->
    <line x1="250" y1="270" x2="345" y2="270" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowCyan2)"/>
    <text x="280" y="255" fill="#00E5FF" font-family="sans-serif" font-size="15.5" font-weight="bold">Force F</text>

    <!-- Acceleration Vector a (Rightward) -->
    <line x1="250" y1="230" x2="330" y2="230" stroke="#76FF03" stroke-width="3.5" marker-end="url(#arrowGreen2)"/>
    <text x="260" y="220" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Accel a</text>

    <!-- Normal Reaction Force N (Upward) -->
    <line x1="180" y1="220" x2="180" y2="100" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen2)"/>
    <text x="195" y="120" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Normal N</text>

    <!-- Weight W = mg (Downward) -->
    <line x1="180" y1="320" x2="180" y2="410" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowRed2)"/>
    <text x="195" y="390" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Weight mg</text>
  </g>

  <!-- Right Side: Linear F vs a Relationship & Formula Card (Width 360, Center x = 180) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="360" height="425" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="180" y="35" text-anchor="middle" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Newton's 2nd Law Equations</text>

    <rect x="15" y="60" width="330" height="85" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="165" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Fundamental Equation:</text>
    <text x="165" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">F = dp / dt = m a</text>

    <rect x="15" y="160" width="330" height="105" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="165" y="185" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Component Breakdown:</text>
    <text x="165" y="215" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15">F_x = m a_x &nbsp;|&nbsp; F_y = m a_y</text>
    <text x="165" y="242" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15">N - m g = 0 &nbsp; ⇒ &nbsp; N = m g</text>

    <rect x="15" y="280" width="330" height="115" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="165" y="305" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">SI &amp; CGS Units:</text>
    <text x="165" y="335" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="14.5">1 Newton (N) = 1 kg m s⁻²</text>
    <text x="165" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="14.5">1 N = 10⁵ Dynes &nbsp;|&nbsp; 1 kgf = 9.8 N</text>
  </g>
</svg>`;

// 3D SVG 3: Force-Time Graph & Impulse-Momentum Theorem Model
const svg3_3d_impulse_momentum = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="impulseGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 138, 101, 0.4)"/>
      <stop offset="100%" stop-color="rgba(255, 138, 101, 0.05)"/>
    </linearGradient>
  </defs>

  <!-- Left Side: F-t Curve & Shaded Impulse Area (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Impulsive Force vs Time Graph</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="340" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Time t</text>
    <text x="45" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Force F</text>

    <!-- Shaded Area under Impulsive Bell Curve -->
    <path d="M 90 330 Q 190 60 290 330 Z" fill="url(#impulseGrad3)" stroke="#FF8A65" stroke-width="3"/>

    <!-- Peak Force F_max -->
    <circle cx="190" cy="80" r="6" fill="#FFD700"/>
    <line x1="50" y1="80" x2="190" y2="80" stroke="#FFD700" stroke-dasharray="3,3"/>
    <text x="200" y="85" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Peak Force F_max</text>

    <!-- Average Force Level F_avg -->
    <line x1="50" y1="180" x2="290" y2="180" stroke="#76FF03" stroke-dasharray="5,4" stroke-width="2"/>
    <text x="60" y="170" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">F_avg Level</text>

    <!-- Time Duration Δt -->
    <line x1="90" y1="330" x2="90" y2="345" stroke="#00E5FF" stroke-width="2"/>
    <line x1="290" y1="330" x2="290" y2="345" stroke="#00E5FF" stroke-width="2"/>
    <line x1="90" y1="340" x2="290" y2="340" stroke="#00E5FF" stroke-width="2"/>
    <text x="190" y="360" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Impact Time Δt</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Impulse-Momentum Theorem & Applications Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Impulse-Momentum Theorem</text>

    <rect x="15" y="55" width="335" height="85" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="167" y="80" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Impulse Formula:</text>
    <text x="167" y="112" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">J = F_avg × Δt = ∫ F dt = Δp</text>

    <rect x="15" y="155" width="335" height="250" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="167" y="180" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Why Larger Δt Reduces Peak Force F:</text>

    <text x="25" y="210" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">• Cricket Fielder Catching Ball:</text>
    <text x="25" y="232" fill="#FFFFFF" font-family="sans-serif" font-size="13">Pulls hands back to increase Δt, reducing impact force.</text>

    <text x="25" y="270" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">• Car Airbags &amp; Crumple Zones:</text>
    <text x="25" y="292" fill="#FFFFFF" font-family="sans-serif" font-size="13">Prolong collision time Δt, lowering impact force.</text>

    <text x="25" y="330" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">• High Jumpers &amp; Gymnasts:</text>
    <text x="25" y="352" fill="#FFFFFF" font-family="sans-serif" font-size="13">Fall on foam mats to safely increase impact time Δt.</text>
  </g>
</svg>`;

// 3D SVG 4: Conservation of Linear Momentum & Gun Recoil Model
const svg4_3d_momentum_conservation_recoil = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="gunGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#64748B"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <filter id="glowBullet4" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowCyan4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowRed4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
  </defs>

  <!-- Left Side: 3D Gun & Bullet Recoil Model (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Conservation of Linear Momentum</text>

    <!-- Gun Silhouette -->
    <path d="M 60 170 L 220 170 L 220 200 L 160 200 L 140 270 L 100 270 L 120 200 L 60 200 Z" fill="url(#gunGrad4)" stroke="#94A3B8" stroke-width="2"/>
    <text x="110" y="155" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Gun (Mass M)</text>

    <!-- Recoil Velocity Vector V_recoil (Leftward) -->
    <line x1="60" y1="185" x2="10" y2="185" stroke="#FF512F" stroke-width="4.5" marker-end="url(#arrowRed4)"/>
    <text x="5" y="165" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">V_recoil</text>

    <!-- Fired Bullet (Rightward) -->
    <rect x="250" y="178" width="24" height="12" rx="4" fill="#FFD700" stroke="#FFFFFF" stroke-width="1.5" filter="url(#glowBullet4)"/>
    <text x="240" y="160" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Bullet (m)</text>

    <!-- Bullet Velocity Vector v (Rightward) -->
    <line x1="274" y1="184" x2="365" y2="184" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowCyan4)"/>
    <text x="310" y="170" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Velocity v</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Mathematical Derivation & Rocket Formula Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Momentum Conservation Equations</text>

    <rect x="15" y="60" width="335" height="110" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="167" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Initial vs Final Momentum:</text>
    <text x="167" y="112" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15">P_initial = 0</text>
    <text x="167" y="140" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15">P_final = M V_recoil + m v = 0</text>

    <rect x="15" y="185" width="335" height="85" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="167" y="210" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Gun Recoil Velocity Formula:</text>
    <text x="167" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">V_recoil = - (m v / M)</text>

    <rect x="15" y="285" width="335" height="120" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="167" y="310" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Rocket Propulsion Equation:</text>
    <text x="167" y="342" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">v(t) = v₀ + u_ex ln( m₀ / m(t) )</text>
    <text x="167" y="375" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Ejection of gas creates forward thrust</text>
  </g>
</svg>`;

// 3D SVG 5: Lami's Theorem & Equilibrium of Concurrent Coplanar Forces Model
const svg5_3d_lamis_theorem = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <filter id="glowCenter5" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowCyan5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowGreen5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowGold5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FFD700"/>
    </marker>
  </defs>

  <!-- Left Side: 3D Concurrent Forces Equilibrium Geometry (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. 3 Concurrent Coplanar Forces</text>

    <!-- Central Common Point O -->
    <circle cx="180" cy="220" r="8" fill="#FFFFFF" filter="url(#glowCenter5)"/>
    <text x="160" y="245" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">O (Point)</text>

    <!-- Force F1 (Pointing Up-Right) -->
    <line x1="180" y1="220" x2="290" y2="110" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowCyan5)"/>
    <text x="300" y="110" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">Force F₁</text>

    <!-- Force F2 (Pointing Up-Left) -->
    <line x1="180" y1="220" x2="70" y2="120" stroke="#76FF03" stroke-width="4.5" marker-end="url(#arrowGreen5)"/>
    <text x="20" y="115" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">Force F₂</text>

    <!-- Force F3 (Pointing Downward) -->
    <line x1="180" y1="220" x2="180" y2="360" stroke="#FFD700" stroke-width="4.5" marker-end="url(#arrowGold5)"/>
    <text x="195" y="365" fill="#FFD700" font-family="sans-serif" font-size="17" font-weight="bold">Force F₃</text>

    <!-- Opposite Angles: α (between F2 & F3), β (between F1 & F3), γ (between F1 & F2) -->
    <path d="M 120 180 A 60 60 0 0 0 180 290" fill="none" stroke="#00E5FF" stroke-width="2"/>
    <text x="100" y="240" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">α</text>

    <path d="M 180 290 A 60 60 0 0 0 240 170" fill="none" stroke="#76FF03" stroke-width="2"/>
    <text x="230" y="240" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">β</text>

    <path d="M 230 160 A 60 60 0 0 0 120 170" fill="none" stroke="#FFD700" stroke-width="2"/>
    <text x="170" y="145" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">γ</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Lami's Theorem Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Lami's Theorem Formulation</text>

    <rect x="15" y="60" width="335" height="105" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="167" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Lami's Ratio Law:</text>
    <text x="167" y="125" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">F₁ / sin α = F₂ / sin β = F₃ / sin γ</text>

    <rect x="15" y="180" width="335" height="100" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="167" y="205" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Equilibrium Condition:</text>
    <text x="167" y="235" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5">∑ F = F₁ + F₂ + F₃ = 0</text>
    <text x="167" y="260" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5">∑ F_x = 0 &nbsp;|&nbsp; ∑ F_y = 0</text>

    <rect x="15" y="295" width="335" height="115" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="167" y="320" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Angle Definitions:</text>
    <text x="25" y="348" fill="#FFFFFF" font-family="sans-serif" font-size="13">• α = Angle between F₂ and F₃</text>
    <text x="25" y="368" fill="#FFFFFF" font-family="sans-serif" font-size="13">• β = Angle between F₁ and F₃</text>
    <text x="25" y="388" fill="#FFFFFF" font-family="sans-serif" font-size="13">• γ = Angle between F₁ and F₂</text>
  </g>
</svg>`;

// 3D SVG 6: Static vs Kinetic Friction Curve & Angle of Repose Model
const svg6_3d_friction_curve_repose = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="fricGrad6" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#990000"/>
    </linearGradient>
  </defs>

  <!-- Left Half: Friction Force vs Applied Force Graph (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Friction f vs Applied Force F</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="340" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">F_applied</text>
    <text x="45" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Friction f</text>

    <!-- Static Region (Linear f_s = F_app) -->
    <line x1="50" y1="330" x2="180" y2="120" stroke="#76FF03" stroke-width="3"/>

    <!-- Peak Limiting Friction Point f_s(max) -->
    <circle cx="180" cy="120" r="6" fill="#FFD700"/>
    <text x="145" y="100" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Limiting f_s(max) = μ_s N</text>

    <!-- Kinetic Region (Constant Level f_k = μ_k N) -->
    <line x1="180" y1="120" x2="200" y2="160" stroke="#FF512F" stroke-width="2.5"/>
    <line x1="200" y1="160" x2="320" y2="160" stroke="#FF512F" stroke-width="3"/>
    <text x="210" y="150" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Kinetic f_k = μ_k N</text>

    <!-- Bottom Note -->
    <rect x="25" y="360" width="315" height="50" rx="8" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="182" y="391" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Static Friction is Self-Adjusting!</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Half: Angle of Repose Model (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Angle of Repose Model</text>

    <!-- Inclined Plane Ground Plane -->
    <polygon points="30,330 330,330 30,210" fill="rgba(255,138,101,0.1)" stroke="#FF8A65" stroke-width="2"/>

    <!-- Angle of Repose θ Arc -->
    <path d="M 90 330 A 60 60 0 0 0 75 305" fill="none" stroke="#FFD700" stroke-width="2.5"/>
    <text x="100" y="320" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">θ_repose</text>

    <!-- Block sliding down -->
    <g transform="translate(130, 210) rotate(-22)">
      <rect x="0" y="-30" width="80" height="40" rx="4" fill="url(#fricGrad6)" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="20" y="-5" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Mass m</text>
    </g>

    <rect x="15" y="360" width="335" height="70" rx="8" fill="rgba(118,255,3,0.12)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="182" y="388" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">tan θ_repose = μ_s = tan λ</text>
    <text x="182" y="415" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">Angle of Repose = Angle of Friction!</text>
  </g>
</svg>`;

// 3D SVG 7: 3D Free Body Diagram of Vehicle on Banked Circular Road
const svg7_3d_banked_road_dynamics = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="carGrad7" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <filter id="glowCar7" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowGreen7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowCyan7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowRed7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
  </defs>

  <!-- Left Side: 3D Banked Road & Vehicle FBD (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Vehicle FBD on Banked Road (Angle θ)</text>

    <!-- Banked Road Surface (Angle θ) -->
    <polygon points="30,340 350,340 30,220" fill="rgba(148,163,184,0.08)" stroke="#475569" stroke-width="2"/>
    <line x1="30" y1="340" x2="350" y2="220" stroke="#FF8A65" stroke-width="4"/>

    <!-- Banking Angle θ Arc -->
    <path d="M 110 340 A 80 80 0 0 0 95 305" fill="none" stroke="#FFD700" stroke-width="2.5"/>
    <text x="120" y="330" fill="#FFD700" font-family="sans-serif" font-size="17" font-weight="bold">θ</text>

    <!-- 3D Vehicle Block on Banked Track -->
    <g transform="translate(170, 230) rotate(-20)">
      <rect x="0" y="-35" width="90" height="45" rx="8" fill="url(#carGrad7)" stroke="#FFFFFF" stroke-width="2" filter="url(#glowCar7)"/>
      <circle cx="20" cy="12" r="10" fill="#1E293B"/>
      <circle cx="70" cy="12" r="10" fill="#1E293B"/>
      <text x="25" y="-10" fill="#000000" font-family="sans-serif" font-size="14" font-weight="bold">Car (m)</text>
    </g>

    <!-- Normal Reaction N (Perpendicular to Incline) -->
    <line x1="210" y1="240" x2="150" y2="110" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen7)"/>
    <text x="100" y="120" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Normal N</text>

    <!-- N cos θ (Vertical) -->
    <line x1="210" y1="240" x2="210" y2="130" stroke="#76FF03" stroke-dasharray="4,4" stroke-width="2"/>
    <text x="220" y="150" fill="#76FF03" font-family="sans-serif" font-size="14">N cos θ</text>

    <!-- N sin θ (Horizontal Centripetal component) -->
    <line x1="210" y1="240" x2="100" y2="240" stroke="#00E5FF" stroke-width="4" marker-end="url(#arrowCyan7)"/>
    <text x="60" y="230" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">N sin θ (mv²/r)</text>

    <!-- Weight W = mg (Downward) -->
    <line x1="210" y1="240" x2="210" y2="360" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowRed7)"/>
    <text x="225" y="350" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">mg</text>
  </g>

  <!-- Right Side: Banked Road Velocity Equations Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Banked Road Speeds Summary</text>

    <rect x="15" y="60" width="335" height="80" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="167" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Flat Level Road Maximum Speed:</text>
    <text x="167" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_max = √(μ_s g r)</text>

    <rect x="15" y="155" width="335" height="80" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="167" y="180" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Banked Road Optimum Speed (μ = 0):</text>
    <text x="167" y="213" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_0 = √(r g tan θ)</text>

    <rect x="15" y="250" width="335" height="155" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="167" y="275" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Max Speed with Friction on Banked Road:</text>
    <text x="167" y="310" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="14.5" font-weight="bold">v_max = √[ r g (μ_s + tan θ)/(1 - μ_s tan θ) ]</text>
    <text x="25" y="348" fill="#76FF03" font-family="sans-serif" font-size="13">• Bending Cyclist: tan θ = v² / (r g)</text>
    <text x="25" y="375" fill="#00E5FF" font-family="sans-serif" font-size="13">• Prevents skidding &amp; reduces tire wear</text>
  </g>
</svg>`;


// Construct final Overview HTML for Chapter 3
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
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit III: Laws of Motion</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Inertia:</b>
        <span style="color: #FFFFFF;">The inherent property of a body by virtue of which it resists any change in its state of rest or uniform motion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Linear Momentum (p):</b>
        <span style="color: #FFFFFF;">The quantity of motion contained in a body, defined as product of mass m and velocity v: p = m v.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Newton's 1st Law:</b>
        <span style="color: #FFFFFF;">A body continues in rest or uniform motion unless acted upon by an external net unbalanced force.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Newton's 2nd Law:</b>
        <span style="color: #FFFFFF;">The rate of change of momentum is directly proportional to applied force: F = dp / dt = m a.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Newton's 3rd Law:</b>
        <span style="color: #FFFFFF;">To every action, there is always an equal and opposite reaction acting on two different bodies.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Impulse (J):</b>
        <span style="color: #FFFFFF;">The product of a large impulsive force and short time interval Δt, equal to change in momentum Δp.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Momentum Conservation:</b>
        <span style="color: #FFFFFF;">In an isolated system (∑ F_ext = 0), total linear momentum remains constant over time.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Lami's Theorem:</b>
        <span style="color: #FFFFFF;">For 3 coplanar concurrent forces in equilibrium, each force is proportional to sine of angle between other two.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Friction (f):</b>
        <span style="color: #FFFFFF;">Opposing contact force arising at interface between two surfaces resisting relative motion (f_s, f_k, f_r).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Angle of Repose (θ):</b>
        <span style="color: #FFFFFF;">Maximum angle of an inclined plane at which a body placed on it just begins to slide down (tan θ = μ_s).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: INTUITIVE CONCEPT OF FORCE & GALILEO'S EXPERIMENT -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Intuitive Concept of Force & Galileo's Experiment</h2>
  
  ${defCard("Force", "An external push or pull acting upon an object resulting from its interaction with another object, capable of altering its velocity, direction, or shape.")}

  ${svg3DCardWrapper("Galileo's Double Inclined Plane Experiment (Inertia Concept)", "3D Inclined planes setup demonstrating that a rolling ball on a frictionless flat track continues indefinitely.", svg1_3d_galileo_inclined_plane)}

  <!-- SECTION 2: NEWTON'S LAWS OF MOTION & FBD -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Newton's Laws of Motion & Free Body Diagrams (FBD)</h2>

  ${defCard("Newton's Second Law", "States that the time rate of change of linear momentum of a body is directly proportional to the applied net external force and takes place in the direction of force.")}

  ${eqBox("<b>F = " + frac('dp', 'dt') + " = m a &nbsp; (SI Unit: Newton N, 1 N = 1 kg m s<sup>-2</sup>)</b>")}

  ${svg3DCardWrapper("Newton's Second Law: Free Body Diagram & F = ma Model", "3D Metallic mass block FBD showing applied force F, acceleration a, normal N, weight mg, and unit relations.", svg2_3d_fbd_second_law)}

  <!-- SECTION 3: IMPULSE & IMPULSE-MOMENTUM THEOREM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Impulse & Impulse-Momentum Theorem</h2>

  ${defCard("Impulse (J)", "The total effect of a large force acting for a very short duration of time, mathematically defined as the integral of force over time or change in linear momentum.")}

  ${eqBox("<b>J = F<sub>avg</sub> × Δt = ∫ [F dt] = Δp = p<sub>final</sub> - p<sub>initial</sub></b>")}

  ${svg3DCardWrapper("Force-Time Graph & Impulse-Momentum Theorem Model", "Shaded impulse area under F-t curve and real-world safety applications (cricket fielder, car airbags, cushions).", svg3_3d_impulse_momentum)}

  <!-- SECTION 4: CONSERVATION OF LINEAR MOMENTUM & RECOIL -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Law of Conservation of Linear Momentum & Gun Recoil</h2>

  ${defCard("Law of Conservation of Linear Momentum", "States that if no net external force acts on a system of interacting particles (∑ F_ext = 0), the total vector linear momentum of the system remains strictly constant.")}

  ${eqBox("<b>M V<sub>recoil</sub> + m v = 0 &nbsp; ⇒ &nbsp; V<sub>recoil</sub> = - " + frac('m v', 'M') + "</b>")}

  ${svg3DCardWrapper("Conservation of Linear Momentum & Gun Recoil Model", "3D Gun firing bullet model illustrating equal and opposite recoil momentum and rocket thrust equation.", svg4_3d_momentum_conservation_recoil)}

  <!-- SECTION 5: EQUILIBRIUM OF CONCURRENT FORCES & LAMI'S THEOREM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Equilibrium of Concurrent Forces & Lami's Theorem</h2>

  ${defCard("Lami's Theorem", "States that if three coplanar concurrent forces acting at a point keep it in equilibrium, then each force is proportional to the sine of the angle between the other two forces.")}

  ${eqBox("<b>" + frac('F<sub>1</sub>', 'sin α') + " = " + frac('F<sub>2</sub>', 'sin β') + " = " + frac('F<sub>3</sub>', 'sin γ') + "</b>")}

  ${svg3DCardWrapper("Lami's Theorem & Equilibrium of Concurrent Coplanar Forces", "3D Concurrent force vectors F1, F2, F3 around pivot point O with opposite angles α, β, γ.", svg5_3d_lamis_theorem)}

  <!-- SECTION 6: FRICTION LAWS & ANGLE OF REPOSE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Static & Kinetic Friction Laws & Angle of Repose</h2>

  ${defCard("Limiting Friction (f_s(max))", "The maximum self-adjusting static friction force that comes into play when a body is just on the verge of sliding over another surface: f_s(max) = μ_s N.")}

  ${eqBox("<b>tan θ<sub>repose</sub> = μ<sub>s</sub> = tan λ &nbsp; (Angle of Repose = Angle of Friction)</b>")}

  ${svg3DCardWrapper("Static vs Kinetic Friction Curve & Angle of Repose Model", "Friction force vs applied force curve (static peak, kinetic drop) and inclined plane angle of repose setup.", svg6_3d_friction_curve_repose)}

  <!-- SECTION 7: VEHICLE DYNAMICS ON BANKED CIRCULAR ROADS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Dynamics of Circular Motion & Banked Roads</h2>

  ${defCard("Banking of Roads", "The phenomenon of raising the outer edge of a curved road above its inner edge at an angle θ to provide required centripetal force without relying solely on friction.")}

  ${eqBox("<b>v<sub>max</sub> = √[ " + frac('r g (μ<sub>s</sub> + tan θ)', '1 - μ<sub>s</sub> tan θ') + " ] &nbsp;|&nbsp; Optimum Speed v<sub>0</sub> = √(r g tan θ)</b>")}

  ${svg3DCardWrapper("3D Free Body Diagram of Vehicle on Banked Circular Road", "Vehicle FBD on banked track of angle θ with normal component N sin θ providing centripetal force mv²/r.", svg7_3d_banked_road_dynamics)}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Friction Laws & Impulse Relations Summary for Unit III</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Newton's 2nd Law:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">F = ` + frac('dp', 'dt') + ` = m a<br>1 N = 10<sup>5</sup> Dynes</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Impulse Theorem:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">J = F<sub>avg</sub> Δt = Δp<br>Larger Δt reduces peak F</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Gun Recoil Velocity:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">V<sub>recoil</sub> = - ` + frac('m v', 'M') + `<br>Rocket: v = v<sub>0</sub> + u<sub>ex</sub> ln(` + frac('m<sub>0</sub>', 'm') + `)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Lami's Theorem:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">` + frac('F<sub>1</sub>', 'sin α') + ` = ` + frac('F<sub>2</sub>', 'sin β') + ` = ` + frac('F<sub>3</sub>', 'sin γ') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Friction & Repose:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">f<sub>s</sub> ≤ μ<sub>s</sub> N &nbsp;|&nbsp; f<sub>k</sub> = μ<sub>k</sub> N<br>tan θ<sub>repose</sub> = μ<sub>s</sub></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Banked Road Speed:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>0</sub> = √(r g tan θ)<br>v<sub>max</sub> = √[ ` + frac('r g (μ<sub>s</sub> + tan θ)', '1 - μ<sub>s</sub> tan θ') + ` ]</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Read existing Solutions HTML from client/data/content/c11-phy-3.ts
const existingContent = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-3.ts'), 'utf8');

const solStartIdx = existingContent.indexOf('export const c11Phy3HtmlSolutions =');
if (solStartIdx === -1) {
  console.error("Could not find c11Phy3HtmlSolutions in c11-phy-3.ts");
  process.exit(1);
}

const solutionsPartCode = existingContent.substring(solStartIdx);

const overviewHtml = generateFullOverviewHtml();

const tsContent = `// Class 11 Physics Unit III: Laws of Motion
// High-Level Reference Book Content & NCERT Solutions (7 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy3HtmlOverview = ${JSON.stringify(overviewHtml)};

${solutionsPartCode}
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-3.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote updated c11-phy-3.ts with fixed 3D SVG diagrams to " + outputPath);
