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

// ==================== 7 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 3 ====================

// 3D SVG 1: Galileo's Double Inclined Plane Experiment (Inertia Concept)
const svg1_3d_galileo_inclined_plane = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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

  <!-- 3D Inclined Planes Surface -->
  <!-- Left Incline -->
  <polygon points="60,330 280,330 100,120 60,120" fill="rgba(255,138,101,0.12)" stroke="#FF8A65" stroke-width="2"/>
  
  <!-- Horizontal Connecting Track -->
  <line x1="60" y1="330" x2="740" y2="330" stroke="#475569" stroke-width="2"/>

  <!-- Right Inclines (Varying Angles: Steep θ1, Gentle θ2, Flat θ3=0) -->
  <line x1="280" y1="330" x2="440" y2="120" stroke="#FF512F" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="410" y="105" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Steep Incline (θ₁)</text>

  <line x1="280" y1="330" x2="580" y2="120" stroke="#76FF03" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="560" y="105" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Gentle Incline (θ₂)</text>

  <line x1="280" y1="330" x2="740" y2="330" stroke="#00E5FF" stroke-width="3"/>
  <text x="600" y="315" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Flat Track (θ₃ = 0°)</text>

  <!-- Height Reference Line h -->
  <line x1="60" y1="120" x2="740" y2="120" stroke="#94A3B8" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="70" y="110" fill="#94A3B8" font-family="sans-serif" font-size="14">Initial Height h</text>

  <!-- 3D Rolling Ball -->
  <circle cx="100" cy="105" r="16" fill="url(#ballGrad1)" filter="url(#glowOrange1)"/>
  <text x="50" y="90" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Release</text>

  <!-- Motion Path Arrows -->
  <path d="M 100 120 L 280 330 L 700 330" fill="none" stroke="#FF8A65" stroke-width="3"/>

  <!-- Formula Panel Top Right (x=450, y=25) -->
  <rect x="450" y="25" width="320" height="90" rx="10" fill="rgba(255,138,101,0.18)" stroke="#FF8A65" stroke-width="1.8"/>
  <text x="465" y="52" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">Galileo's Law of Inertia</text>
  <text x="465" y="76" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">✓ On flat plane (θ = 0°), ball moves forever!</text>
  <text x="465" y="98" fill="#76FF03" font-family="sans-serif" font-size="13">• Zero Net Force ⇒ Constant Velocity v</text>
</svg>`;

// 3D SVG 2: Newton's Second Law — Free Body Diagram & F = ma Model
const svg2_3d_fbd_second_law = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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

  <!-- Left Side: Free Body Diagram (FBD) of Mass m -->
  <g transform="translate(40, 20)">
    <text x="50" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Free Body Diagram (FBD) of Mass m</text>

    <!-- Ground Surface -->
    <line x1="40" y1="310" x2="340" y2="310" stroke="#475569" stroke-width="3"/>
    <ellipse cx="190" cy="310" rx="90" ry="12" fill="rgba(0,0,0,0.5)"/>

    <!-- 3D Metallic Block -->
    <rect x="120" y="210" width="140" height="100" rx="8" fill="url(#blockGrad2)" stroke="#FF8A65" stroke-width="2" filter="url(#glowCoral2)"/>
    <text x="175" y="265" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Mass m</text>

    <!-- Applied Force F (Rightward) -->
    <line x1="260" y1="260" x2="360" y2="260" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowCyan2)"/>
    <text x="310" y="245" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">Applied Force F</text>

    <!-- Acceleration Vector a (Rightward) -->
    <line x1="260" y1="220" x2="340" y2="220" stroke="#76FF03" stroke-width="3.5" marker-end="url(#arrowGreen2)"/>
    <text x="270" y="210" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Acceleration a</text>

    <!-- Normal Reaction Force N (Upward) -->
    <line x1="190" y1="210" x2="190" y2="100" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen2)"/>
    <text x="205" y="120" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Normal N</text>

    <!-- Weight W = mg (Downward) -->
    <line x1="190" y1="310" x2="190" y2="400" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowRed2)"/>
    <text x="205" y="380" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Weight W = mg</text>
  </g>

  <!-- Right Side: Linear F vs a Relationship & Formula Card -->
  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="340" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="20" y="35" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Newton's 2nd Law Equations</text>

    <rect x="15" y="60" width="310" height="85" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="25" y="85" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Fundamental Equation:</text>
    <text x="25" y="115" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">F = dp / dt = m a</text>

    <rect x="15" y="160" width="310" height="95" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="25" y="185" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Component Breakdown:</text>
    <text x="25" y="210" fill="#FFFFFF" font-family="monospace" font-size="15">F_x = m a_x &nbsp;|&nbsp; F_y = m a_y</text>
    <text x="25" y="235" fill="#FFFFFF" font-family="monospace" font-size="15">N - m g = 0 &nbsp; ⇒ &nbsp; N = m g</text>

    <rect x="15" y="270" width="310" height="95" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="25" y="295" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">SI & CGS Units:</text>
    <text x="25" y="320" fill="#FFFFFF" font-family="monospace" font-size="14.5">1 Newton (N) = 1 kg m s⁻²</text>
    <text x="25" y="345" fill="#FFFFFF" font-family="monospace" font-size="14.5">1 N = 10⁵ Dynes &nbsp;|&nbsp; 1 kgf = 9.8 N</text>
  </g>
</svg>`;

// 3D SVG 3: Force-Time Graph & Impulse-Momentum Theorem Model
const svg3_3d_impulse_momentum = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="impulseGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 138, 101, 0.4)"/>
      <stop offset="100%" stop-color="rgba(255, 138, 101, 0.05)"/>
    </linearGradient>
  </defs>

  <!-- Left Side: F-t Curve & Shaded Impulse Area -->
  <g transform="translate(30, 20)">
    <text x="40" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Impulsive Force vs Time Graph</text>

    <!-- Axes -->
    <line x1="60" y1="330" x2="350" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="60" y1="330" x2="60" y2="50" stroke="#475569" stroke-width="2"/>
    <text x="360" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Time t</text>
    <text x="50" y="40" fill="#94A3B8" font-family="sans-serif" font-size="13">Force F</text>

    <!-- Shaded Area under Impulsive Bell Curve -->
    <path d="M 100 330 Q 200 60 300 330 Z" fill="url(#impulseGrad3)" stroke="#FF8A65" stroke-width="3"/>

    <!-- Peak Force F_max -->
    <circle cx="200" cy="80" r="6" fill="#FFD700"/>
    <line x1="60" y1="80" x2="200" y2="80" stroke="#FFD700" stroke-dasharray="3,3"/>
    <text x="210" y="85" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Peak Force F_max</text>

    <!-- Average Force Level F_avg -->
    <line x1="60" y1="180" x2="300" y2="180" stroke="#76FF03" stroke-dasharray="5,4" stroke-width="2"/>
    <text x="70" y="170" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">F_avg Level</text>

    <!-- Time Duration Δt -->
    <line x1="100" y1="330" x2="100" y2="345" stroke="#00E5FF" stroke-width="2"/>
    <line x1="300" y1="330" x2="300" y2="345" stroke="#00E5FF" stroke-width="2"/>
    <line x1="100" y1="340" x2="300" y2="340" stroke="#00E5FF" stroke-width="2"/>
    <text x="180" y="360" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Impact Time Δt</text>
  </g>

  <!-- Right Side: Impulse-Momentum Theorem & Applications Card -->
  <g transform="translate(420, 20)">
    <rect x="0" y="0" width="350" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="20" y="32" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Impulse-Momentum Theorem</text>

    <rect x="15" y="55" width="320" height="85" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="25" y="80" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Impulse Formula:</text>
    <text x="25" y="110" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">J = F_avg × Δt = ∫ F dt = Δp</text>

    <rect x="15" y="155" width="320" height="215" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="25" y="180" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Why Larger Δt Reduces Peak Force F:</text>

    <text x="25" y="208" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• <tspan fill="#FFD700" font-weight="bold">Cricket Fielder:</tspan> Pulls hands back to increase Δt, reducing impact force F on hands.</text>

    <text x="25" y="260" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• <tspan fill="#FFD700" font-weight="bold">Car Airbags & Crumple Zones:</tspan> Prolong collision time Δt, lowering deceleration force on passengers.</text>

    <text x="25" y="315" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• <tspan fill="#FFD700" font-weight="bold">High Jumpers:</tspan> Fall on foam cushions to safely increase Δt.</text>
  </g>
</svg>`;

// 3D SVG 4: Conservation of Linear Momentum & Gun Recoil Model
const svg4_3d_momentum_conservation_recoil = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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

  <!-- Left Side: 3D Gun & Bullet Recoil Model -->
  <g transform="translate(40, 30)">
    <text x="40" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Conservation of Linear Momentum in Firing</text>

    <!-- Gun Silhouette -->
    <path d="M 60 160 L 220 160 L 220 190 L 160 190 L 140 260 L 100 260 L 120 190 L 60 190 Z" fill="url(#gunGrad4)" stroke="#94A3B8" stroke-width="2"/>
    <text x="110" y="145" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Gun (Mass M)</text>

    <!-- Recoil Velocity Vector V_recoil (Leftward) -->
    <line x1="60" y1="175" x2="10" y2="175" stroke="#FF512F" stroke-width="4.5" marker-end="url(#arrowRed4)"/>
    <text x="5" y="155" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">V_recoil</text>

    <!-- Fired Bullet (Rightward) -->
    <rect x="260" y="168" width="24" height="12" rx="4" fill="#FFD700" stroke="#FFFFFF" stroke-width="1.5" filter="url(#glowBullet4)"/>
    <text x="250" y="150" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Bullet (m)</text>

    <!-- Bullet Velocity Vector v (Rightward) -->
    <line x1="284" y1="174" x2="380" y2="174" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowCyan4)"/>
    <text x="320" y="160" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Bullet Velocity v</text>
  </g>

  <!-- Right Side: Mathematical Derivation & Rocket Formula Card -->
  <g transform="translate(420, 20)">
    <rect x="0" y="0" width="350" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="20" y="32" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Momentum Conservation Equations</text>

    <rect x="15" y="55" width="320" height="105" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="25" y="78" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Initial Momentum (Before Firing):</text>
    <text x="25" y="100" fill="#FFFFFF" font-family="monospace" font-size="15">P_initial = 0</text>
    <text x="25" y="123" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Final Momentum (After Firing):</text>
    <text x="25" y="145" fill="#FFFFFF" font-family="monospace" font-size="15">P_final = M V_recoil + m v = 0</text>

    <rect x="15" y="175" width="320" height="80" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="25" y="198" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Gun Recoil Velocity Formula:</text>
    <text x="25" y="235" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">V_recoil = - (m v / M)</text>

    <rect x="15" y="270" width="320" height="105" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="25" y="293" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Rocket Propulsion Equation:</text>
    <text x="25" y="325" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">v(t) = v₀ + u_ex ln( m₀ / m(t) )</text>
    <text x="25" y="355" fill="#94A3B8" font-family="sans-serif" font-size="13">• Ejection of gas creates forward thrust</text>
  </g>
</svg>`;

// 3D SVG 5: Lami's Theorem & Equilibrium of Concurrent Coplanar Forces Model
const svg5_3d_lamis_theorem = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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

  <!-- Left Side: 3D Concurrent Forces Equilibrium Geometry -->
  <g transform="translate(40, 20)">
    <text x="40" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. 3 Concurrent Coplanar Forces in Equilibrium</text>

    <!-- Central Common Point O -->
    <circle cx="200" cy="220" r="8" fill="#FFFFFF" filter="url(#glowCenter5)"/>
    <text x="180" y="245" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">O (Point)</text>

    <!-- Force F1 (Pointing Up-Right) -->
    <line x1="200" y1="220" x2="310" y2="110" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowCyan5)"/>
    <text x="320" y="110" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">Force F₁</text>

    <!-- Force F2 (Pointing Up-Left) -->
    <line x1="200" y1="220" x2="90" y2="120" stroke="#76FF03" stroke-width="4.5" marker-end="url(#arrowGreen5)"/>
    <text x="40" y="115" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">Force F₂</text>

    <!-- Force F3 (Pointing Downward) -->
    <line x1="200" y1="220" x2="200" y2="360" stroke="#FFD700" stroke-width="4.5" marker-end="url(#arrowGold5)"/>
    <text x="215" y="365" fill="#FFD700" font-family="sans-serif" font-size="17" font-weight="bold">Force F₃</text>

    <!-- Opposite Angles: α (between F2 & F3), β (between F1 & F3), γ (between F1 & F2) -->
    <path d="M 140 180 A 60 60 0 0 0 200 290" fill="none" stroke="#00E5FF" stroke-width="2"/>
    <text x="120" y="240" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">α</text>

    <path d="M 200 290 A 60 60 0 0 0 260 170" fill="none" stroke="#76FF03" stroke-width="2"/>
    <text x="250" y="240" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">β</text>

    <path d="M 250 160 A 60 60 0 0 0 140 170" fill="none" stroke="#FFD700" stroke-width="2"/>
    <text x="190" y="145" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">γ</text>
  </g>

  <!-- Right Side: Lami's Theorem Card -->
  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="340" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="20" y="35" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Lami's Theorem Formulation</text>

    <rect x="15" y="60" width="310" height="95" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="25" y="85" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Lami's Theorem Ratio Law:</text>
    <text x="25" y="125" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">F₁ / sin α = F₂ / sin β = F₃ / sin γ</text>

    <rect x="15" y="170" width="310" height="95" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="25" y="195" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Equilibrium Condition:</text>
    <text x="25" y="220" fill="#FFFFFF" font-family="monospace" font-size="15.5">∑ F = F₁ + F₂ + F₃ = 0</text>
    <text x="25" y="245" fill="#FFFFFF" font-family="monospace" font-size="15.5">∑ F_x = 0 &nbsp;|&nbsp; ∑ F_y = 0</text>

    <rect x="15" y="280" width="310" height="95" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="25" y="305" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Angle Definitions:</text>
    <text x="25" y="330" fill="#FFFFFF" font-family="sans-serif" font-size="13">• α = Angle between F₂ and F₃</text>
    <text x="25" y="350" fill="#FFFFFF" font-family="sans-serif" font-size="13">• β = Angle between F₁ and F₃</text>
    <text x="25" y="368" fill="#FFFFFF" font-family="sans-serif" font-size="13">• γ = Angle between F₁ and F₂</text>
  </g>
</svg>`;

// 3D SVG 6: Static vs Kinetic Friction Curve & Angle of Repose Model
const svg6_3d_friction_curve_repose = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="fricGrad6" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#990000"/>
    </linearGradient>
  </defs>

  <!-- Left Half: Friction Force vs Applied Force Graph -->
  <g transform="translate(30, 20)">
    <text x="30" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Friction Force f vs Applied Force F</text>

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

    <text x="70" y="240" fill="#76FF03" font-family="sans-serif" font-size="13">Self-Adjusting Static</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="390" y1="40" x2="390" y2="410" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Half: Angle of Repose Model (θ_repose = Angle of Friction λ) -->
  <g transform="translate(410, 20)">
    <text x="30" y="30" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Angle of Repose Model (tan θ = μ_s)</text>

    <!-- Inclined Plane Ground Plane -->
    <polygon points="40,330 330,330 40,210" fill="rgba(255,138,101,0.1)" stroke="#FF8A65" stroke-width="2"/>

    <!-- Angle of Repose θ Arc -->
    <path d="M 100 330 A 60 60 0 0 0 85 305" fill="none" stroke="#FFD700" stroke-width="2.5"/>
    <text x="110" y="320" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">θ_repose</text>

    <!-- Block sliding down -->
    <g transform="translate(140, 210) rotate(-22)">
      <rect x="0" y="-30" width="80" height="40" rx="4" fill="url(#fricGrad6)" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="20" y="-5" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Mass m</text>
    </g>

    <rect x="30" y="340" width="320" height="60" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="45" y="365" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">tan θ_repose = μ_s = tan λ</text>
    <text x="45" y="388" fill="#76FF03" font-family="sans-serif" font-size="13">Angle of Repose = Angle of Friction!</text>
  </g>
</svg>`;

// 3D SVG 7: 3D Free Body Diagram of Vehicle on Banked Circular Road
const svg7_3d_banked_road_dynamics = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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

  <!-- Left Side: 3D Banked Road & Vehicle FBD -->
  <g transform="translate(30, 20)">
    <text x="30" y="30" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Vehicle FBD on Banked Road (Angle θ)</text>

    <!-- Banked Road Surface (Angle θ) -->
    <polygon points="40,330 360,330 40,210" fill="rgba(148,163,184,0.08)" stroke="#475569" stroke-width="2"/>
    <line x1="40" y1="330" x2="360" y2="210" stroke="#FF8A65" stroke-width="4"/>

    <!-- Banking Angle θ Arc -->
    <path d="M 120 330 A 80 80 0 0 0 105 295" fill="none" stroke="#FFD700" stroke-width="2.5"/>
    <text x="130" y="320" fill="#FFD700" font-family="sans-serif" font-size="17" font-weight="bold">θ</text>

    <!-- 3D Vehicle Block on Banked Track -->
    <g transform="translate(180, 220) rotate(-20)">
      <rect x="0" y="-35" width="90" height="45" rx="8" fill="url(#carGrad7)" stroke="#FFFFFF" stroke-width="2" filter="url(#glowCar7)"/>
      <circle cx="20" cy="12" r="10" fill="#1E293B"/>
      <circle cx="70" cy="12" r="10" fill="#1E293B"/>
      <text x="25" y="-10" fill="#000000" font-family="sans-serif" font-size="14" font-weight="bold">Car (m)</text>
    </g>

    <!-- Normal Reaction N (Perpendicular to Incline) -->
    <line x1="220" y1="230" x2="160" y2="100" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen7)"/>
    <text x="110" y="110" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Normal N</text>

    <!-- N cos θ (Vertical) -->
    <line x1="220" y1="230" x2="220" y2="120" stroke="#76FF03" stroke-dasharray="4,4" stroke-width="2"/>
    <text x="230" y="140" fill="#76FF03" font-family="sans-serif" font-size="14">N cos θ</text>

    <!-- N sin θ (Horizontal Centripetal component) -->
    <line x1="220" y1="230" x2="110" y2="230" stroke="#00E5FF" stroke-width="4" marker-end="url(#arrowCyan7)"/>
    <text x="70" y="220" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">N sin θ (mv²/r)</text>

    <!-- Weight W = mg (Downward) -->
    <line x1="220" y1="230" x2="220" y2="350" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowRed7)"/>
    <text x="235" y="340" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">mg</text>
  </g>

  <!-- Right Side: Banked Road Velocity Equations Card -->
  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="340" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF8A65" stroke-width="1.8"/>
    <text x="20" y="35" fill="#FF8A65" font-family="sans-serif" font-size="17" font-weight="bold">2. Banked Road Speeds Summary</text>

    <rect x="15" y="60" width="310" height="75" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="25" y="85" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Flat Level Road Maximum Speed:</text>
    <text x="25" y="115" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_max = √(μ_s g r)</text>

    <rect x="15" y="150" width="310" height="75" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="25" y="175" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Banked Road Optimum Speed (μ = 0):</text>
    <text x="25" y="205" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_0 = √(r g tan θ)</text>

    <rect x="15" y="240" width="310" height="135" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="25" y="265" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Max Speed with Friction on Banked Road:</text>
    <text x="25" y="300" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">v_max = √[ r g (μ_s + tan θ)/(1 - μ_s tan θ) ]</text>
    <text x="25" y="335" fill="#76FF03" font-family="sans-serif" font-size="13">• Bending Cyclist: tan θ = v² / (r g)</text>
    <text x="25" y="358" fill="#00E5FF" font-family="sans-serif" font-size="13">• Prevents skidding & reduces tire wear</text>
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
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Force:</b>
        <span style="color: #FFFFFF;">An external agency (push or pull) that changes or tends to change the state of rest or uniform motion of a body.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Inertia:</b>
        <span style="color: #FFFFFF;">The inherent property of a body by virtue of which it resists any change in its state of rest or uniform motion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Linear Momentum (p):</b>
        <span style="color: #FFFFFF;">The total quantity of motion contained in a body, defined as the product of its mass and velocity (p = m v).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Impulse (J):</b>
        <span style="color: #FFFFFF;">The product of a large force acting on a body and the short time interval for which it acts (J = F × Δt = Δp).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Law of Conservation of Momentum:</b>
        <span style="color: #FFFFFF;">In an isolated system with zero net external force, the total linear momentum remains strictly constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Concurrent Forces:</b>
        <span style="color: #FFFFFF;">Forces whose lines of action pass through a single common point.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Static Friction (f<sub>s</sub>):</b>
        <span style="color: #FFFFFF;">The self-adjusting opposing contact force between two surfaces that prevents relative motion up to a limiting value.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Kinetic Friction (f<sub>k</sub>):</b>
        <span style="color: #FFFFFF;">The constant opposing contact force acting between two surfaces in relative sliding motion (f<sub>k</sub> = μ<sub>k</sub> N).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Angle of Repose (θ):</b>
        <span style="color: #FFFFFF;">The minimum angle of inclination of a rough plane at which a body placed on it just begins to slide down.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Banked Road:</b>
        <span style="color: #FFFFFF;">A curved road whose outer edge is raised above the inner edge to provide necessary centripetal force without relying solely on friction.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: CONCEPT OF FORCE, INERTIA & NEWTON'S FIRST LAW -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Concept of Force, Inertia & Newton's First Law</h2>
  
  ${defCard("Force", "An external agency in the form of a push or pull that changes or tends to change the state of rest, state of uniform motion, or direction of motion of a physical body.")}

  <p>Before Galileo and Newton, Aristotelian mechanics incorrectly asserted that an external force was continuously required to keep a body in uniform motion. Galileo Galilei disproved this by conducting experiments on double inclined planes, proving that a body moving on a frictionless horizontal plane requires zero net force to maintain constant velocity.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Galileo's Experiments & Concept of Inertia</h3>
  <p>Inertia is the natural resistance of any physical object to any change in its velocity. Mass is the quantitative measure of inertia; heavier bodies possess greater inertia than lighter bodies.</p>

  <div style="margin: 12px 0;">
    ${colonTopic("Inertia of Rest", "The inability of a body to change its state of rest by itself. Example: When a stationary bus suddenly starts, passengers jerk backward because their lower body moves forward while their upper body tends to stay at rest.")}
    ${colonTopic("Inertia of Motion", "The inability of a body to change its state of uniform motion by itself. Example: When a moving bus suddenly stops, passengers jerk forward because their feet stop with the bus while their upper body continues moving.")}
    ${colonTopic("Inertia of Direction", "The inability of a body to change its direction of motion by itself. Example: When a car takes a sharp curve, passengers are thrown outward due to their tendency to maintain straight-line motion.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Newton's First Law of Motion (Law of Inertia)</h3>
  ${defCard("Newton's First Law of Motion", "Every body continues in its state of rest or of uniform motion in a straight line unless it is compelled to change that state by an external net unbalanced force.")}

  ${svg3DCardWrapper("Galileo's Double Inclined Plane Experiment & Concept of Inertia", "3D Volumetric model demonstrating rolling ball on double inclined planes of varying angles θ₁, θ₂ and flat track (θ₃ = 0°).", svg1_3d_galileo_inclined_plane)}

  <!-- SECTION 2: LINEAR MOMENTUM & NEWTON'S SECOND LAW -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Linear Momentum & Newton's Second Law of Motion</h2>

  ${defCard("Linear Momentum (p)", "A vector physical quantity representing the total quantity of motion contained in a body, defined as the product of its mass m and velocity v.")}

  ${eqBox("<b>p = m × v</b> &nbsp; (Vector quantity, SI unit: <b>kg m s<sup>-1</sup></b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Statement & Derivation of Newton's Second Law</h3>
  ${defCard("Newton's Second Law of Motion", "The rate of change of linear momentum of a body is directly proportional to the applied net external force and takes place in the direction of the force.")}

  ${eqBox("<b>F = " + frac('dp', 'dt') + " = " + frac('d(m v)', 'dt') + " = m a</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Absolute and Gravitational Units of Force</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("1 Newton (SI Absolute)", singleLineCode("1 N = 1 kg m s<sup>-2</sup> = 10<sup>5</sup> dynes"))}
    ${colonTopic("1 Dyne (CGS Absolute)", singleLineCode("1 dyne = 1 g cm s<sup>-2</sup> = 10<sup>-5</sup> N"))}
    ${colonTopic("1 kgf / 1 kg-wt (Gravitational)", singleLineCode("1 kgf = 9.8 N"))}
  </div>

  ${svg3DCardWrapper("Free Body Diagram (FBD) & Newton's Second Law F = ma Model", "3D Metallic block FBD pulling with applied force F, showing normal reaction N = mg, acceleration vector a, and units.", svg2_3d_fbd_second_law)}

  <!-- SECTION 3: IMPULSE & IMPULSE-MOMENTUM THEOREM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Impulse & Impulse-Momentum Theorem</h2>

  ${defCard("Impulse (J)", "The total measure of impact of a force, defined as the product of a large force and the short time interval for which it acts.")}

  ${eqBox("<b>J = F<sub>avg</sub> × Δt = ∫ F dt = Δp = p<sub>2</sub> - p<sub>1</sub></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Practical Applications of Impulse</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Cricket Fielder Pulling Hands Back", "A fielder pulls hands backward while catching a fast ball to increase impact time Δt, thereby reducing force F on hands and preventing injury.")}
    ${colonTopic("Vehicle Shock Absorbers & Airbags", "Springs and airbags increase collision time Δt during sudden impacts, dramatically decreasing retarding force acting on vehicle occupants.")}
    ${colonTopic("Crumple Zones in Cars", "Modern automobile car fronts are designed to crumple during accidents to prolong impact duration Δt and minimize passenger deceleration forces.")}
  </div>

  ${svg3DCardWrapper("Force-Time Graph & Impulse-Momentum Theorem Model", "3D F-t impulsive curve showing peak force F_max, time duration Δt, equivalent average force F_avg, and shaded area J = Δp.", svg3_3d_impulse_momentum)}

  <!-- SECTION 4: NEWTON'S THIRD LAW & CONSERVATION OF LINEAR MOMENTUM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Newton's Third Law & Conservation of Linear Momentum</h2>

  ${defCard("Newton's Third Law of Motion", "To every action force, there is always an equal and opposite reaction force, acting simultaneously on two different interacting bodies.")}

  ${eqBox("<b>F<sub>12</sub> = - F<sub>21</sub></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Law of Conservation of Linear Momentum</h3>
  ${defCard("Law of Conservation of Linear Momentum", "The total linear momentum of an isolated system of interacting particles remains strictly constant in magnitude and direction if zero net external force acts on the system.")}

  ${eqBox("<b>p<sub>A, initial</sub> + p<sub>B, initial</sub> = p<sub>A, final</sub> + p<sub>B, final</sub></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Applications of Momentum Conservation</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Recoil Velocity of Gun", singleLineCode("V<sub>recoil</sub> = - " + frac('m v', 'M')))}
    ${colonTopic("Rocket Propulsion Equation", singleLineCode("v(t) = v<sub>0</sub> + u<sub>ex</sub> ln ( " + frac('m<sub>0</sub>', 'm(t)') + " )"))}
  </div>

  ${svg3DCardWrapper("Conservation of Linear Momentum & Gun Recoil Model", "3D Metallic gun firing bullet, showing forward bullet momentum m·v balanced by backward gun recoil momentum M·V_recoil.", svg4_3d_momentum_conservation_recoil)}

  <!-- SECTION 5: EQUILIBRIUM OF CONCURRENT FORCES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Equilibrium of Concurrent Forces & Lami's Theorem</h2>

  ${defCard("Concurrent Forces", "A set of forces whose lines of action intersect at a single common point in space.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Lami's Theorem</h3>
  ${defCard("Lami's Theorem", "If three coplanar concurrent forces acting at a point are in equilibrium, each force is directly proportional to the sine of the angle between the other two forces.")}

  ${eqBox("<b>" + frac('F<sub>1</sub>', 'sin α') + " = " + frac('F<sub>2</sub>', 'sin β') + " = " + frac('F<sub>3</sub>', 'sin γ') + "</b>")}

  ${svg3DCardWrapper("Lami's Theorem & Equilibrium of Concurrent Coplanar Forces", "3D Spatial diagram showing 3 coplanar forces F₁, F₂, F₃ intersecting at point O in equilibrium with opposite angles α, β, γ.", svg5_3d_lamis_theorem)}

  <!-- SECTION 6: FRICTION: STATIC, KINETIC & ROLLING FRICTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Friction: Static, Kinetic, and Rolling Friction</h2>

  ${defCard("Friction", "The tangential opposing contact force that resists relative sliding or rolling motion between two surfaces in contact.")}

  <div style="margin: 12px 0;">
    ${colonTopic("Limiting Static Friction", singleLineCode("f<sub>s(max)</sub> = μ<sub>s</sub> N"))}
    ${colonTopic("Kinetic / Sliding Friction", singleLineCode("f<sub>k</sub> = μ<sub>k</sub> N &nbsp; (μ<sub>k</sub> < μ<sub>s</sub>)"))}
    ${colonTopic("Rolling Friction", singleLineCode("f<sub>r</sub> = μ<sub>r</sub> " + frac('N', 'r') + " &nbsp; (f<sub>r</sub> << f<sub>k</sub> < f<sub>s</sub>)"))}
    ${colonTopic("Angle of Friction & Repose", singleLineCode("tan λ = μ<sub>s</sub> &nbsp;|&nbsp; Angle of Repose tan θ = μ<sub>s</sub> &nbsp; ⇒ &nbsp; θ = λ"))}
  </div>

  ${svg3DCardWrapper("Static vs Kinetic Friction Curve & Angle of Repose Model", "Plot of friction force vs applied force showing static linear region, limiting peak, kinetic level, and block on inclined plane at angle of repose.", svg6_3d_friction_curve_repose)}

  <!-- SECTION 7: DYNAMICS OF UNIFORM CIRCULAR MOTION & BANKED ROADS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Dynamics of Uniform Circular Motion & Banked Roads</h2>

  ${defCard("Centripetal Force", "The real inward radial force directed toward the center of a circular path required to continuously deflect a body's velocity direction along the circle.")}

  ${eqBox("<b>F<sub>c</sub> = m a<sub>c</sub> = " + frac('m v<sup>2</sup>', 'r') + " = m r ω<sup>2</sup></b>")}

  <div style="margin: 12px 0;">
    ${colonTopic("Flat Level Road Max Speed", singleLineCode("v<sub>max</sub> = √(μ<sub>s</sub> g r)"))}
    ${colonTopic("Banked Road Optimum Speed (Zero Friction)", singleLineCode("v<sub>0</sub> = √(r g tan θ)"))}
    ${colonTopic("Banked Road Max Speed with Friction", singleLineCode("v<sub>max</sub> = √[ r g " + frac('μ<sub>s</sub> + tan θ', '1 - μ<sub>s</sub> tan θ') + " ]"))}
    ${colonTopic("Bending of a Cyclist", singleLineCode("tan θ = " + frac('v<sup>2</sup>', 'r g')))}
  </div>

  ${svg3DCardWrapper("Free Body Diagram of Vehicle on Banked Circular Road", "3D Vehicle FBD on banked track angled at θ showing normal reaction components N cos θ = mg and N sin θ = mv²/r.", svg7_3d_banked_road_dynamics)}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Friction Laws & Dynamics Summary for Unit III</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Newton's 2nd Law & Impulse:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">F = ` + frac('dp', 'dt') + ` = m a<br>J = F<sub>avg</sub> Δt = Δp = p<sub>2</sub> - p<sub>1</sub></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Momentum Conservation:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">m<sub>1</sub> v<sub>1</sub> + m<sub>2</sub> v<sub>2</sub> = m<sub>1</sub> u<sub>1</sub> + m<sub>2</sub> u<sub>2</sub><br>Recoil Gun: V<sub>recoil</sub> = - ` + frac('m v', 'M') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Laws of Friction:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">f<sub>s(max)</sub> = μ<sub>s</sub> N &nbsp;|&nbsp; f<sub>k</sub> = μ<sub>k</sub> N<br>tan λ = μ<sub>s</sub> &nbsp;|&nbsp; Angle of Repose θ = λ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Equilibrium & Lami's Theorem:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">∑ F = 0<br>` + frac('F<sub>1</sub>', 'sin α') + ` = ` + frac('F<sub>2</sub>', 'sin β') + ` = ` + frac('F<sub>3</sub>', 'sin γ') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Level Road Speeds:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>max</sub> = √(μ<sub>s</sub> g r)<br>Bending Cyclist: tan θ = ` + frac('v<sup>2</sup>', 'r g') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Banked Road Speeds:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Optimum: v<sub>0</sub> = √(r g tan θ)<br>v<sub>max</sub> = √[ r g ` + frac('μ<sub>s</sub> + tan θ', '1 - μ<sub>s</sub> tan θ') + ` ]</span>
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

console.log("Successfully wrote c11-phy-3.ts with 7 self-contained 3D SVG diagrams to " + outputPath);
