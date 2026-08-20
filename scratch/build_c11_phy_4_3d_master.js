const fs = require('fs');
const path = require('path');

const themeColor = "#00c6ff"; // Primary theme color for Class 11 Physics Unit IV (Work, Energy and Power)

// Clean compact inline stacked fraction helper
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 198, 255, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(0, 198, 255, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
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
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(0, 198, 255, 0.25);">
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

// ==================== 6 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 4 ====================

// 3D SVG 1: Work Done as Area under Force-Displacement (F-x) Graph
const svg1_3d_work_fx_graph = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="areaGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(0, 198, 255, 0.4)"/>
      <stop offset="100%" stop-color="rgba(0, 198, 255, 0.05)"/>
    </linearGradient>
    <marker id="arrowCyan1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00c6ff"/>
    </marker>
  </defs>

  <!-- Left Side: Work W = F · s Vector Model -->
  <g transform="translate(30, 20)">
    <text x="30" y="30" fill="#00c6ff" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Constant Force: W = F · s = F s cos θ</text>

    <!-- Ground Line -->
    <line x1="40" y1="310" x2="340" y2="310" stroke="#475569" stroke-width="2.5"/>

    <!-- Block -->
    <rect x="80" y="230" width="110" height="80" rx="8" fill="rgba(0,198,255,0.15)" stroke="#00c6ff" stroke-width="2"/>
    <text x="115" y="275" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Mass m</text>

    <!-- Displacement Vector s -->
    <line x1="190" y1="310" x2="310" y2="310" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowCyan1)"/>
    <text x="230" y="335" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Displacement s</text>

    <!-- Applied Force F at Angle θ -->
    <line x1="190" y1="270" x2="300" y2="180" stroke="#00c6ff" stroke-width="4.5" marker-end="url(#arrowCyan1)"/>
    <text x="310" y="180" fill="#00c6ff" font-family="sans-serif" font-size="16" font-weight="bold">Force F</text>

    <!-- Angle θ Arc -->
    <path d="M 230 270 A 40 40 0 0 0 220 245" fill="none" stroke="#FFD700" stroke-width="2"/>
    <text x="235" y="260" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">θ</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="390" y1="40" x2="390" y2="410" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Variable Force Area Under F-x Graph -->
  <g transform="translate(410, 20)">
    <text x="30" y="30" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Variable Force: W = ∫ F dx (F-x Area)</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="340" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">x</text>
    <text x="45" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">F(x)</text>

    <!-- Shaded Area Under Curve -->
    <path d="M 100 330 L 100 240 Q 200 80 280 200 L 280 330 Z" fill="url(#areaGrad1)" stroke="#00c6ff" stroke-width="2.5"/>

    <line x1="100" y1="330" x2="100" y2="240" stroke="#76FF03" stroke-dasharray="3,3"/>
    <line x1="280" y1="330" x2="280" y2="200" stroke="#76FF03" stroke-dasharray="3,3"/>
    <text x="95" y="350" fill="#76FF03" font-family="monospace" font-size="13">x₁</text>
    <text x="275" y="350" fill="#76FF03" font-family="monospace" font-size="13">x₂</text>

    <text x="135" y="260" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">Work W = ∫ₓ₁ˣ₂ F dx</text>
  </g>
</svg>`;

// 3D SVG 2: Work-Energy Theorem Model (W_net = ΔE_k)
const svg2_3d_work_energy_theorem = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="workGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00c6ff"/>
      <stop offset="100%" stop-color="#76FF03"/>
    </linearGradient>
    <filter id="glowCyan2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowGreen2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left Side: 3D Acceleration Track Model -->
  <g transform="translate(40, 20)">
    <text x="40" y="30" fill="#00c6ff" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Work-Energy Theorem Physical Model</text>

    <!-- 3D Track Base -->
    <polygon points="40,320 370,320 310,280 40,280" fill="rgba(148,163,184,0.08)" stroke="#475569" stroke-width="1.5"/>

    <!-- Position x1 (Initial Velocity u) -->
    <rect x="60" y="210" width="90" height="70" rx="8" fill="rgba(0,198,255,0.2)" stroke="#00c6ff" stroke-width="2"/>
    <text x="80" y="250" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Mass m</text>
    <line x1="150" y1="245" x2="200" y2="245" stroke="#FFD700" stroke-width="3" marker-end="url(#arrowGreen2)"/>
    <text x="155" y="235" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Speed u</text>
    <text x="85" y="300" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Position x₁</text>

    <!-- Position x2 (Final Velocity v) -->
    <rect x="250" y="210" width="90" height="70" rx="8" fill="rgba(118,255,3,0.2)" stroke="#76FF03" stroke-width="2" filter="url(#glowCyan2)"/>
    <text x="270" y="250" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Mass m</text>
    <line x1="340" y1="245" x2="410" y2="245" stroke="#76FF03" stroke-width="4.5" marker-end="url(#arrowGreen2)"/>
    <text x="350" y="235" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Speed v &gt; u</text>
    <text x="275" y="300" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Position x₂</text>

    <!-- Work Arrow -->
    <path d="M 105 190 Q 200 150 295 190" fill="none" stroke="url(#workGrad2)" stroke-width="3.5" marker-end="url(#arrowGreen2)"/>
    <text x="140" y="160" fill="#00c6ff" font-family="sans-serif" font-size="15" font-weight="bold">Net Work W = F · Δx</text>
  </g>

  <!-- Right Side: Mathematical Theorem Card -->
  <g transform="translate(450, 20)">
    <rect x="0" y="0" width="320" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00c6ff" stroke-width="1.8"/>
    <text x="20" y="35" fill="#00c6ff" font-family="sans-serif" font-size="17" font-weight="bold">2. Work-Energy Theorem</text>

    <rect x="15" y="60" width="290" height="90" rx="8" fill="rgba(0,198,255,0.1)" stroke="#00c6ff" stroke-width="1.2"/>
    <text x="25" y="85" fill="#00c6ff" font-family="sans-serif" font-size="14" font-weight="bold">Statement Formula:</text>
    <text x="25" y="120" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">W_net = ΔE_k = E_k,f - E_k,i</text>

    <rect x="15" y="165" width="290" height="100" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="25" y="190" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Expanded Form:</text>
    <text x="25" y="225" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">W_net = ½ m v² - ½ m u²</text>

    <rect x="15" y="280" width="290" height="95" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="25" y="305" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Integral Proof:</text>
    <text x="25" y="330" fill="#FFFFFF" font-family="monospace" font-size="14.5">W = ∫ (m v dv/dx) dx = m ∫ v dv</text>
    <text x="25" y="355" fill="#76FF03" font-family="sans-serif" font-size="13">✓ Applies to constant &amp; variable forces!</text>
  </g>
</svg>`;

// 3D SVG 3: Power Vector Relation P = F · v Model
const svg3_3d_power_vector_relation = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <marker id="arrowCyan3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00c6ff"/>
    </marker>
    <marker id="arrowGreen3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left Side: Power Vector Model (Motor Pulley System) -->
  <g transform="translate(40, 20)">
    <text x="40" y="30" fill="#00c6ff" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Power Vector Relation: P = F · v</text>

    <!-- Ground -->
    <line x1="40" y1="310" x2="340" y2="310" stroke="#475569" stroke-width="2.5"/>

    <!-- Load Box being pulled -->
    <rect x="80" y="220" width="120" height="90" rx="8" fill="rgba(0,198,255,0.15)" stroke="#00c6ff" stroke-width="2"/>
    <text x="110" y="270" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Load (m)</text>

    <!-- Velocity Vector v (Rightward) -->
    <line x1="200" y1="310" x2="330" y2="310" stroke="#76FF03" stroke-width="4.5" marker-end="url(#arrowGreen3)"/>
    <text x="240" y="335" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Velocity v</text>

    <!-- Force Vector F at Angle θ -->
    <line x1="200" y1="265" x2="310" y2="185" stroke="#00c6ff" stroke-width="4.5" marker-end="url(#arrowCyan3)"/>
    <text x="320" y="180" fill="#00c6ff" font-family="sans-serif" font-size="16" font-weight="bold">Force F</text>

    <!-- Angle θ Arc -->
    <path d="M 240 265 A 40 40 0 0 0 230 240" fill="none" stroke="#FFD700" stroke-width="2"/>
    <text x="245" y="255" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">θ</text>
  </g>

  <!-- Right Side: Power Units & Conversion Summary Card -->
  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="340" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00c6ff" stroke-width="1.8"/>
    <text x="20" y="35" fill="#00c6ff" font-family="sans-serif" font-size="17" font-weight="bold">2. Power Definitions &amp; Units</text>

    <rect x="15" y="60" width="310" height="85" rx="8" fill="rgba(0,198,255,0.1)" stroke="#00c6ff" stroke-width="1.2"/>
    <text x="25" y="85" fill="#00c6ff" font-family="sans-serif" font-size="14" font-weight="bold">Dot Product Definition:</text>
    <text x="25" y="118" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">P = dW / dt = F · v = F v cos θ</text>

    <rect x="15" y="160" width="310" height="95" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="25" y="185" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Units of Power:</text>
    <text x="25" y="210" fill="#FFFFFF" font-family="monospace" font-size="15">1 Watt (W) = 1 Joule / second</text>
    <text x="25" y="235" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">1 Horsepower (hp) = 746 Watts</text>

    <rect x="15" y="270" width="310" height="95" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="25" y="295" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Commercial Electrical Energy:</text>
    <text x="25" y="325" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">1 kWh = 3.6 × 10⁶ Joules</text>
    <text x="25" y="350" fill="#94A3B8" font-family="sans-serif" font-size="13">• Energy consumed = Power × Time</text>
  </g>
</svg>`;

// 3D SVG 4: Spring Potential Energy & Mechanical Energy Conservation
const svg4_3d_spring_potential_energy = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="springGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00c6ff"/>
      <stop offset="100%" stop-color="#0072ff"/>
    </linearGradient>
  </defs>

  <!-- Left Side: Spring Mechanical System (Relaxed vs Stretched) -->
  <g transform="translate(30, 20)">
    <text x="30" y="30" fill="#00c6ff" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Spring Restoration Model (F_s = -k x)</text>

    <!-- Wall -->
    <rect x="40" y="60" width="20" height="270" fill="#334155" stroke="#94A3B8" stroke-width="2"/>

    <!-- Relaxed Spring (x = 0) -->
    <path d="M 60 120 Q 80 100 100 120 Q 120 140 140 120 Q 160 100 180 120 L 200 120" fill="none" stroke="#94A3B8" stroke-width="3"/>
    <rect x="200" y="90" width="60" height="60" rx="6" fill="rgba(148,163,184,0.3)" stroke="#94A3B8" stroke-width="2"/>
    <text x="210" y="125" fill="#FFFFFF" font-family="sans-serif" font-size="13">x = 0</text>
    <text x="270" y="125" fill="#94A3B8" font-family="sans-serif" font-size="13">Relaxed (U=0)</text>

    <!-- Stretched Spring (+x) -->
    <path d="M 60 260 Q 90 230 120 260 Q 150 290 180 260 Q 210 230 240 260 L 270 260" fill="none" stroke="#00c6ff" stroke-width="3"/>
    <rect x="270" y="230" width="60" height="60" rx="6" fill="url(#springGrad4)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="280" y="265" fill="#FFFFFF" font-family="sans-serif" font-size="13">+x</text>

    <line x1="200" y1="305" x2="270" y2="305" stroke="#76FF03" stroke-width="2.5"/>
    <text x="215" y="325" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Displacement x</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="390" y1="40" x2="390" y2="410" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Parabolic Energy Curves (Us, Ek, E_total) -->
  <g transform="translate(410, 20)">
    <text x="30" y="30" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Parabolic Energy Curves &amp; Conservation</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="190" y1="330" x2="190" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="340" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">x</text>
    <text x="180" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Energy E</text>

    <!-- Potential Energy Parabola Us = 1/2 k x^2 (Opening Upward) -->
    <path d="M 70 110 Q 190 330 310 110" fill="none" stroke="#00c6ff" stroke-width="3"/>
    <text x="80" y="100" fill="#00c6ff" font-family="sans-serif" font-size="14" font-weight="bold">U_s = ½ k x²</text>

    <!-- Kinetic Energy Parabola Ek = E - 1/2 k x^2 (Inverted) -->
    <path d="M 70 330 Q 190 110 310 330" fill="none" stroke="#76FF03" stroke-width="3"/>
    <text x="145" y="140" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">E_k = E - ½ k x²</text>

    <!-- Total Mechanical Energy Line E_total -->
    <line x1="70" y1="110" x2="310" y2="110" stroke="#FFD700" stroke-width="2.5" stroke-dasharray="5,4"/>
    <text x="150" y="90" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">E_total = E_k + U_s = Const</text>

    <text x="50" y="350" fill="#94A3B8" font-family="monospace" font-size="13">-x_max</text>
    <text x="185" y="350" fill="#94A3B8" font-family="monospace" font-size="13">0</text>
    <text x="300" y="350" fill="#94A3B8" font-family="monospace" font-size="13">+x_max</text>
  </g>
</svg>`;

// 3D SVG 5: Motion in a Vertical Circle (Loop-the-Loop)
const svg5_3d_vertical_circle_motion = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <marker id="arrowGreen5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowCyan5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00c6ff"/>
    </marker>
  </defs>

  <!-- Left Side: 3D Vertical Circular Track -->
  <g transform="translate(40, 20)">
    <text x="30" y="30" fill="#00c6ff" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Vertical Circle Dynamics (Loop-the-Loop)</text>

    <!-- Circular Track -->
    <circle cx="200" cy="220" r="130" fill="rgba(0,198,255,0.05)" stroke="#00c6ff" stroke-width="2.5"/>

    <!-- Center O -->
    <circle cx="200" cy="220" r="6" fill="#FFFFFF"/>
    <text x="185" y="240" fill="#FFFFFF" font-family="sans-serif" font-size="14">O</text>

    <!-- Lowest Point L (Bottom) -->
    <circle cx="200" cy="350" r="10" fill="#76FF03"/>
    <text x="175" y="380" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Bottom (L)</text>
    <line x1="200" y1="350" x2="310" y2="350" stroke="#76FF03" stroke-width="3.5" marker-end="url(#arrowGreen5)"/>
    <text x="210" y="340" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">v_L ≥ √(5gr)</text>

    <!-- Highest Point H (Apex) -->
    <circle cx="200" cy="90" r="10" fill="#FFD700"/>
    <text x="180" y="70" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Apex (H)</text>
    <line x1="200" y1="90" x2="290" y2="90" stroke="#FFD700" stroke-width="3" marker-end="url(#arrowCyan5)"/>
    <text x="210" y="115" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">v_H ≥ √(gr)</text>

    <!-- Horizontal Midpoint M -->
    <circle cx="330" cy="220" r="9" fill="#00c6ff"/>
    <text x="345" y="225" fill="#00c6ff" font-family="sans-serif" font-size="14" font-weight="bold">Mid (M)</text>
    <text x="250" y="210" fill="#00c6ff" font-family="sans-serif" font-size="13">v_M ≥ √(3gr)</text>
  </g>

  <!-- Right Side: Critical Velocities & Tension Card -->
  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="340" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00c6ff" stroke-width="1.8"/>
    <text x="20" y="35" fill="#00c6ff" font-family="sans-serif" font-size="17" font-weight="bold">2. Critical Speeds &amp; Tensions</text>

    <rect x="15" y="60" width="310" height="85" rx="8" fill="rgba(0,198,255,0.1)" stroke="#00c6ff" stroke-width="1.2"/>
    <text x="25" y="85" fill="#00c6ff" font-family="sans-serif" font-size="14" font-weight="bold">Lowest Point (L) Conditions:</text>
    <text x="25" y="115" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">v_L = √(5 g r) &nbsp;|&nbsp; T_L = 6 m g</text>

    <rect x="15" y="160" width="310" height="85" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="25" y="185" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Highest Point (H) Conditions:</text>
    <text x="25" y="215" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">v_H = √(g r) &nbsp;|&nbsp; T_H = 0</text>

    <rect x="15" y="260" width="310" height="105" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="25" y="285" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Tension Difference Formula:</text>
    <text x="25" y="320" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">T_L - T_H = 6 m g</text>
    <text x="25" y="348" fill="#94A3B8" font-family="sans-serif" font-size="13">• String remains taut throughout loop</text>
  </g>
</svg>`;

// 3D SVG 6: 1D Head-on vs 2D Oblique Collisions & Restitution Model
const svg6_3d_collisions_restitution = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <marker id="arrowCyan6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00c6ff"/>
    </marker>
    <marker id="arrowGreen6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left Side: 1D Head-On Elastic Collision -->
  <g transform="translate(30, 20)">
    <text x="30" y="30" fill="#00c6ff" font-family="sans-serif" font-size="16.5" font-weight="bold">1. 1D Head-On Elastic Collision (e = 1)</text>

    <!-- Before Collision -->
    <circle cx="80" cy="120" r="22" fill="rgba(0,198,255,0.3)" stroke="#00c6ff" stroke-width="2"/>
    <text x="70" y="125" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">m₁</text>
    <line x1="102" y1="120" x2="160" y2="120" stroke="#00c6ff" stroke-width="3" marker-end="url(#arrowCyan6)"/>
    <text x="110" y="110" fill="#00c6ff" font-family="sans-serif" font-size="13">u₁</text>

    <circle cx="220" cy="120" r="22" fill="rgba(118,255,3,0.3)" stroke="#76FF03" stroke-width="2"/>
    <text x="210" y="125" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">m₂</text>
    <line x1="242" y1="120" x2="280" y2="120" stroke="#76FF03" stroke-width="3" marker-end="url(#arrowGreen6)"/>
    <text x="245" y="110" fill="#76FF03" font-family="sans-serif" font-size="13">u₂</text>
    <text x="30" y="160" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Before Impact (u₁ &gt; u₂)</text>

    <!-- Equal Mass Velocity Swap -->
    <rect x="30" y="200" width="310" height="120" rx="8" fill="rgba(0,198,255,0.1)" stroke="#00c6ff" stroke-width="1.2"/>
    <text x="45" y="228" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Equal Masses Case (m₁ = m₂):</text>
    <text x="45" y="260" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">v₁ = u₂ &nbsp;|&nbsp; v₂ = u₁</text>
    <text x="45" y="295" fill="#76FF03" font-family="sans-serif" font-size="13.5">✓ Velocities completely exchanged!</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="390" y1="40" x2="390" y2="410" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: 2D Oblique Collision Scattering -->
  <g transform="translate(410, 20)">
    <text x="30" y="30" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. 2D Oblique Collision &amp; Restitution e</text>

    <!-- Center Collision point -->
    <circle cx="150" cy="210" r="6" fill="#FFFFFF"/>

    <!-- Incident mass m1 -->
    <line x1="40" y1="210" x2="150" y2="210" stroke="#00c6ff" stroke-width="3.5" marker-end="url(#arrowCyan6)"/>
    <text x="50" y="195" fill="#00c6ff" font-family="sans-serif" font-size="14" font-weight="bold">m₁ u₁</text>

    <!-- Scattered m1 at angle θ1 -->
    <line x1="150" y1="210" x2="290" y2="120" stroke="#00c6ff" stroke-width="3.5" marker-end="url(#arrowCyan6)"/>
    <text x="300" y="125" fill="#00c6ff" font-family="sans-serif" font-size="14" font-weight="bold">m₁ v₁ (θ₁)</text>

    <!-- Target m2 recoil at angle θ2 -->
    <line x1="150" y1="210" x2="280" y2="300" stroke="#76FF03" stroke-width="3.5" marker-end="url(#arrowGreen6)"/>
    <text x="290" y="305" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">m₂ v₂ (θ₂)</text>

    <!-- Coefficient of Restitution e Box -->
    <rect x="20" y="330" width="330" height="70" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="35" y="355" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">e = (v₂ - v₁) / (u₁ - u₂)</text>
    <text x="35" y="382" fill="#FFD700" font-family="sans-serif" font-size="13.5">e = 1 (Elastic), e = 0 (Perfectly Inelastic)</text>
  </g>
</svg>`;


// Construct final Overview HTML for Chapter 4
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
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit IV: Work, Energy and Power</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Work (W):</b>
        <span style="color: #FFFFFF;">The scalar product of force vector F and displacement vector s: W = F · s = |F||s| cos θ.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Kinetic Energy (E<sub>k</sub>):</b>
        <span style="color: #FFFFFF;">The capacity of a body to do work by virtue of its motion, defined as E<sub>k</sub> = 1/2 m v<sup>2</sup> = p<sup>2</sup> / (2m).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Work-Energy Theorem:</b>
        <span style="color: #FFFFFF;">The total work done by all net external forces on a body equals the net change in its kinetic energy (W<sub>net</sub> = ΔE<sub>k</sub>).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Power (P):</b>
        <span style="color: #FFFFFF;">The time rate at which work is done by an agent: P = dW / dt = F · v.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Conservative Force:</b>
        <span style="color: #FFFFFF;">A force for which work done in moving a body depends solely on initial and final positions, independent of path.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Potential Energy (U):</b>
        <span style="color: #FFFFFF;">Energy stored in a system by virtue of its position, configuration, or state of strain relative to a reference.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Spring Potential Energy (U<sub>s</sub>):</b>
        <span style="color: #FFFFFF;">Potential energy stored in a stretched/compressed spring of spring constant k: U<sub>s</sub> = 1/2 k x<sup>2</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Elastic Collision:</b>
        <span style="color: #FFFFFF;">A collision in which both total linear momentum AND total kinetic energy are strictly conserved.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Inelastic Collision:</b>
        <span style="color: #FFFFFF;">A collision in which total linear momentum is conserved, but part of kinetic energy is converted into heat, sound, or deformation.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Coefficient of Restitution (e):</b>
        <span style="color: #FFFFFF;">The ratio of relative velocity of separation after collision to relative velocity of approach before collision: e = (v<sub>2</sub> - v<sub>1</sub>) / (u<sub>1</sub> - u<sub>2</sub>).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WORK DONE BY CONSTANT & VARIABLE FORCES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Work Done by Constant and Variable Forces</h2>
  
  ${defCard("Work", "In physics, work is said to be done by a force when the point of application of the force undergoes a displacement along or opposite to the direction of force.")}

  ${eqBox("<b>W = F · s = |F| |s| cos θ</b> &nbsp; (SI Unit: <b>Joule, J</b>, CGS Unit: <b>Erg</b>, 1 J = 10<sup>7</sup> Ergs)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Three Categories of Work (Based on Angle θ)</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Positive Work (0° ≤ θ < 90°)", "Work done is positive when force and displacement act in the same general direction (cos θ > 0). Example: Work done by gravity on a falling body (θ = 0°), or work done by a horse pulling a cart.")}
    ${colonTopic("Negative Work (90° < θ ≤ 180°)", "Work done is negative when force opposes displacement (cos θ < 0). Example: Work done by friction on a sliding block (θ = 180°), or work done by gravity on a body thrown vertically upward.")}
    ${colonTopic("Zero Work (θ = 90° or s = 0)", "Work done is zero when force is perpendicular to displacement (cos 90° = 0) or displacement is zero. Example: Work done by centripetal force on a body in circular motion, or work done by a coolie standing with luggage on his head.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Work Done by a Variable Force</h3>
  ${eqBox("<b>W = ∫ [F(x) dx] &nbsp; (from x<sub>1</sub> to x<sub>2</sub>) = Area under Force-Displacement (F-x) Graph</b>")}

  ${svg3DCardWrapper("Work Done as Area under Force-Displacement (F-x) Graph", "3D Vector model illustrating W = F s cos θ side-by-side with shaded area under variable F(x) curve.", svg1_3d_work_fx_graph)}

  <!-- SECTION 2: KINETIC ENERGY & WORK-ENERGY THEOREM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Kinetic Energy & Work-Energy Theorem</h2>

  ${defCard("Kinetic Energy (E<sub>k</sub>)", "The energy possessed by a physical body by virtue of its state of motion.")}

  ${eqBox("<b>E<sub>k</sub> = " + frac('1', '2') + " m v<sup>2</sup> = " + frac('p<sup>2</sup>', '2 m') + "</b> &nbsp; (where p = m v is linear momentum)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Statement of Work-Energy Theorem</h3>
  ${defCard("Work-Energy Theorem", "The net work done by all forces (conservative, non-conservative, internal, and external) acting on a body is equal to the net change in its kinetic energy.")}

  ${eqBox("<b>W<sub>net</sub> = ΔE<sub>k</sub> = E<sub>k, final</sub> - E<sub>k, initial</sub> = " + frac('1', '2') + " m v<sup>2</sup> - " + frac('1', '2') + " m u<sup>2</sup></b>")}

  ${svg3DCardWrapper("Work-Energy Theorem Model (W_net = ΔE_k)", "3D Acceleration track model showing velocity change from u to v under net work W_net = 1/2 m v² - 1/2 m u².", svg2_3d_work_energy_theorem)}

  <!-- SECTION 3: POWER -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Power</h2>

  ${defCard("Power (P)", "The rate at which work is done by an agent, or the rate of transfer of energy per unit time.")}

  ${eqBox("<b>P<sub>avg</sub> = " + frac('W', 't') + " &nbsp;|&nbsp; P<sub>inst</sub> = " + frac('dW', 'dt') + " = F · " + frac('dr', 'dt') + " = F · v = |F| |v| cos θ</b>")}

  <div style="margin: 12px 0;">
    ${colonTopic("SI Unit of Power", "1 Watt (W) = 1 Joule per second (1 J s<sup>-1</sup>). Larger units: 1 kW = 10<sup>3</sup> W, 1 MW = 10<sup>6</sup> W.")}
    ${colonTopic("Horsepower (hp)", singleLineCode("1 hp = 746 Watts"))}
    ${colonTopic("Commercial Unit of Electrical Energy", singleLineCode("1 Kilowatt-hour (kWh) = 3.6 × 10<sup>6</sup> Joules"))}
  </div>

  ${svg3DCardWrapper("Power Vector Relation P = F · v Model", "3D Motor pulley system diagram illustrating power output P = F v cos θ and commercial energy units.", svg3_3d_power_vector_relation)}

  <!-- SECTION 4: POTENTIAL ENERGY & CONSERVATION OF MECHANICAL ENERGY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Potential Energy & Conservative vs Non-Conservative Forces</h2>

  ${defCard("Potential Energy (U)", "The energy stored within a system by virtue of its position, configuration, or state of strain relative to a reference zero state.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Potential Energy of a Stretched Spring</h3>
  ${eqBox("<b>W<sub>ext</sub> = ∫<sub>0</sub><sup>x</sup> (k x') dx' = " + frac('1', '2') + " k x<sup>2</sup> &nbsp; ⇒ &nbsp; Elastic Potential Energy U<sub>s</sub> = " + frac('1', '2') + " k x<sup>2</sup></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Law of Conservation of Mechanical Energy</h3>
  ${defCard("Law of Conservation of Mechanical Energy", "The total mechanical energy E = E_k + U of an isolated system remains strictly constant if only conservative forces do work on the system.")}

  ${eqBox("<b>E<sub>total</sub> = E<sub>k</sub> + U = " + frac('1', '2') + " m v<sup>2</sup> + m g h = Constant</b>")}

  ${svg3DCardWrapper("Spring Potential Energy & Mechanical Energy Conservation", "Dual-panel diagram illustrating spring restoration force F_s = -kx side-by-side with parabolic energy curves Us, Ek, and E_total.", svg4_3d_spring_potential_energy)}

  <!-- SECTION 5: MOTION IN A VERTICAL CIRCLE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Motion in a Vertical Circle (Loop-the-Loop)</h2>

  ${defCard("Vertical Circular Motion", "Non-uniform circular motion of a body tied to a string or inside a vertical track under the combined action of gravity and tension.")}

  <div style="margin: 12px 0;">
    ${colonTopic("Highest Point (Apex H) Critical Conditions", singleLineCode("Minimum Speed v<sub>H</sub> = √(g r) &nbsp;|&nbsp; Tension T<sub>H</sub> = 0"))}
    ${colonTopic("Lowest Point (Bottom L) Critical Conditions", singleLineCode("Minimum Speed v<sub>L</sub> = √(5 g r) &nbsp;|&nbsp; Tension T<sub>L</sub> = 6 m g"))}
    ${colonTopic("Midway Horizontal Point (M) Critical Conditions", singleLineCode("Minimum Speed v<sub>M</sub> = √(3 g r) &nbsp;|&nbsp; Tension T<sub>M</sub> = 3 m g"))}
    ${colonTopic("Tension Difference", singleLineCode("T<sub>L</sub> - T<sub>H</sub> = 6 m g"))}
  </div>

  ${svg3DCardWrapper("Motion in a Vertical Circle (Loop-the-Loop) Forces & Speeds", "3D Vertical circular track illustrating string tension vectors TL, TM, TH and critical minimum speeds.", svg5_3d_vertical_circle_motion)}

  <!-- SECTION 6: COLLISIONS IN ONE AND TWO DIMENSIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Collisions in One and Two Dimensions</h2>

  ${defCard("Collision", "An isolated intense interaction between two or more bodies over a short time interval during which internal forces alter their initial velocities.")}

  <div style="margin: 12px 0;">
    ${colonTopic("Coefficient of Restitution (e)", singleLineCode("e = " + frac('v<sub>2</sub> - v<sub>1</sub>', 'u<sub>1</sub> - u<sub>2</sub>') + " &nbsp; (e = 1 Elastic, e = 0 Perfectly Inelastic)"))}
    ${colonTopic("Final Velocity of Mass 1 in 1D Elastic", singleLineCode("v<sub>1</sub> = [ " + frac('m<sub>1</sub> - m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>1</sub> + [ " + frac('2 m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>2</sub>"))}
    ${colonTopic("Final Velocity of Mass 2 in 1D Elastic", singleLineCode("v<sub>2</sub> = [ " + frac('2 m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>1</sub> + [ " + frac('m<sub>2</sub> - m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>2</sub>"))}
    ${colonTopic("Special Case: Equal Masses (m<sub>1</sub> = m<sub>2</sub>)", "In 1D head-on elastic collision of equal masses, velocities are completely swapped: v<sub>1</sub> = u<sub>2</sub> and v<sub>2</sub> = u<sub>1</sub>.")}
  </div>

  ${svg3DCardWrapper("1D Head-on vs 2D Oblique Collisions & Restitution Model", "Schematic diagram comparing head-on 1D elastic velocity swap vs 2D oblique scattering angles θ₁ and θ₂.", svg6_3d_collisions_restitution)}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Energy Theorems & Collision Relations Summary for Unit IV</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Work & Work-Energy Theorem:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">W = F · s = |F||s| cos θ &nbsp;|&nbsp; W = ∫ F dx<br>W<sub>net</sub> = ΔE<sub>k</sub> = ` + frac('1', '2') + ` m v<sup>2</sup> - ` + frac('1', '2') + ` m u<sup>2</sup></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Power & Commercial Unit:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">P = ` + frac('dW', 'dt') + ` = F · v = F v cos θ<br>1 hp = 746 W &nbsp;|&nbsp; 1 kWh = 3.6 × 10<sup>6</sup> J</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Potential Energy Formulas:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Gravitational: U = m g h<br>Spring PE: U<sub>s</sub> = ` + frac('1', '2') + ` k x<sup>2</sup> (F<sub>s</sub> = -k x)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Vertical Circle Limits:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>L</sub> ≥ √(5 g r) &nbsp;|&nbsp; v<sub>H</sub> ≥ √(g r)<br>T<sub>L</sub> - T<sub>H</sub> = 6 m g</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• 1D Elastic Collision Velocities:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>1</sub> = [ ` + frac('m<sub>1</sub> - m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>1</sub> + [ ` + frac('2 m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>2</sub><br>v<sub>2</sub> = [ ` + frac('2 m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>1</sub> + [ ` + frac('m<sub>2</sub> - m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>2</sub></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Inelastic Collision & e:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">e = ` + frac('v<sub>2</sub> - v<sub>1</sub>', 'u<sub>1</sub> - u<sub>2</sub>') + `<br>K.E. Loss = ` + frac('1', '2') + ` [ ` + frac('m<sub>1</sub> m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>1</sub><sup>2</sup></span>
      </div>
    </div>
  </div>

</div>
`;
}

// Read existing Solutions HTML from client/data/content/c11-phy-4.ts
const existingContent = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-4.ts'), 'utf8');

const solStartIdx = existingContent.indexOf('export const c11Phy4HtmlSolutions =');
if (solStartIdx === -1) {
  console.error("Could not find c11Phy4HtmlSolutions in c11-phy-4.ts");
  process.exit(1);
}

const solutionsPartCode = existingContent.substring(solStartIdx);

const overviewHtml = generateFullOverviewHtml();

const tsContent = `// Class 11 Physics Unit IV: Work, Energy and Power
// High-Level Reference Book Content & NCERT Solutions (6 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy4HtmlOverview = ${JSON.stringify(overviewHtml)};

${solutionsPartCode}
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-4.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote c11-phy-4.ts with 6 self-contained 3D SVG diagrams to " + outputPath);
