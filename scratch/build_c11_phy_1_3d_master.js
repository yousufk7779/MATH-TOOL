const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F"; // Primary theme color for Class 11 Physics Unit I (Units and Measurements)

// Clean compact inline stacked fraction helper
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(255, 81, 47, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
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
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(255, 81, 47, 0.25);">
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

// ==================== 7 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 1 ====================

// 3D SVG 1: Physical Quantity & Measurement Process Model (Q = n x u)
const svg1_3d_measurement_process = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="rodGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF512F"/>
      <stop offset="50%" stop-color="#F09819"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </linearGradient>
    <linearGradient id="scaleGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <filter id="glowCoral1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowCoral1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowCyan1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- 3D Perspective Ground Plane Grid -->
  <g opacity="0.15" stroke="#94A3B8" stroke-width="1">
    <line x1="60" y1="380" x2="740" y2="380"/>
    <line x1="100" y1="310" x2="700" y2="310"/>
    <line x1="60" y1="380" x2="200" y2="220"/>
    <line x1="740" y1="380" x2="600" y2="220"/>
  </g>

  <!-- Title Card Top Right (x=450, y=30) -->
  <rect x="450" y="30" width="320" height="90" rx="10" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.8"/>
  <text x="465" y="58" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">Q = n × u &nbsp; (n₁u₁ = n₂u₂)</text>
  <text x="465" y="82" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">✓ Inverse Law: n ∝ 1 / u</text>
  <text x="465" y="103" fill="#FFD700" font-family="sans-serif" font-size="13">• Larger unit 'u' ⇒ Smaller magnitude 'n'</text>

  <!-- Unknown Physical Rod Q (3D Cylinder) -->
  <text x="80" y="70" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Unknown Physical Quantity (Q)</text>
  <ellipse cx="400" cy="140" rx="280" ry="12" fill="rgba(0,0,0,0.5)"/>
  <rect x="120" y="105" width="560" height="35" rx="6" fill="url(#rodGrad1)" filter="url(#glowCoral1)"/>
  <ellipse cx="680" cy="122.5" rx="10" ry="17.5" fill="#F09819" stroke="#FFFFFF" stroke-width="1"/>
  <ellipse cx="120" cy="122.5" rx="10" ry="17.5" fill="#FF512F" stroke="#FFFFFF" stroke-width="1"/>
  <text x="350" y="128" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Length Q to be Measured</text>

  <!-- Calibrated Standard Unit Scale (3D Measuring Tape) -->
  <text x="80" y="210" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Calibrated Standard Unit (u)</text>
  <rect x="120" y="225" width="560" height="50" rx="8" fill="url(#scaleGrad1)" stroke="#76FF03" stroke-width="2"/>
  
  <!-- Scale Markings (n = 1, 2, 3, 4, 5, 6, 7, 8 Units) -->
  <g stroke="#76FF03" stroke-width="2">
    <line x1="120" y1="225" x2="120" y2="255"/>
    <line x1="190" y1="225" x2="190" y2="250"/>
    <line x1="260" y1="225" x2="260" y2="255"/>
    <line x1="330" y1="225" x2="330" y2="250"/>
    <line x1="400" y1="225" x2="400" y2="255"/>
    <line x1="470" y1="225" x2="470" y2="250"/>
    <line x1="540" y1="225" x2="540" y2="255"/>
    <line x1="610" y1="225" x2="610" y2="250"/>
    <line x1="680" y1="225" x2="680" y2="255"/>
  </g>
  <text x="115" y="270" fill="#76FF03" font-family="monospace" font-size="13">0</text>
  <text x="185" y="270" fill="#FFFFFF" font-family="monospace" font-size="13">1u</text>
  <text x="255" y="270" fill="#FFFFFF" font-family="monospace" font-size="13">2u</text>
  <text x="325" y="270" fill="#FFFFFF" font-family="monospace" font-size="13">3u</text>
  <text x="395" y="270" fill="#FFFFFF" font-family="monospace" font-size="13">4u</text>
  <text x="465" y="270" fill="#FFFFFF" font-family="monospace" font-size="13">5u</text>
  <text x="535" y="270" fill="#FFFFFF" font-family="monospace" font-size="13">6u</text>
  <text x="605" y="270" fill="#FFFFFF" font-family="monospace" font-size="13">7u</text>
  <text x="675" y="270" fill="#76FF03" font-family="monospace" font-size="13">8u</text>

  <!-- 3D Comparison Vectors -->
  <line x1="120" y1="320" x2="680" y2="320" stroke="#FF512F" stroke-width="3" marker-end="url(#arrowCoral1)"/>
  <text x="340" y="312" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">n = 8 Units (Q = 8u)</text>

  <!-- Unit Comparison Card at Bottom Left (x=70, y=345) -->
  <rect x="70" y="345" width="660" height="75" rx="10" fill="rgba(15,23,42,0.9)" stroke="#76FF03" stroke-width="1.5"/>
  <text x="90" y="373" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">System Comparison Example:</text>
  <text x="90" y="400" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">Length Q = 2.5 m (SI) = 250 cm (CGS) = 2500 mm &nbsp; ⇒ &nbsp; 2.5 × 1m = 250 × 1cm</text>
</svg>`;

// 3D SVG 2: 3D Volumetric Comparison Matrix of Systems of Units (CGS, FPS, MKS, SI)
const svg2_3d_unit_systems_matrix = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="headerGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF512F"/>
      <stop offset="100%" stop-color="#DD2476"/>
    </linearGradient>
  </defs>

  <!-- Top Title Banner -->
  <rect x="25" y="20" width="750" height="50" rx="12" fill="url(#headerGrad2)"/>
  <text x="180" y="52" fill="#FFFFFF" font-family="sans-serif" font-size="19" font-weight="bold">HISTORICAL & MODERN SYSTEMS OF UNITS MATRIX</text>

  <!-- System 1: CGS System -->
  <g transform="translate(25, 88)">
    <rect x="0" y="0" width="365" height="160" rx="12" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="20" y="32" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">1. CGS System (Gaussian Metric)</text>
    
    <text x="25" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Length: <tspan fill="#00E5FF" font-weight="bold">Centimetre (cm)</tspan></text>
    <text x="25" y="95" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Mass: <tspan fill="#00E5FF" font-weight="bold">Gram (g)</tspan></text>
    <text x="25" y="125" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Time: <tspan fill="#00E5FF" font-weight="bold">Second (s)</tspan></text>
    <text x="220" y="145" fill="#94A3B8" font-family="sans-serif" font-size="13">Force: dyne | Energy: erg</text>
  </g>

  <!-- System 2: FPS System -->
  <g transform="translate(410, 88)">
    <rect x="0" y="0" width="365" height="160" rx="12" fill="rgba(255,215,0,0.06)" stroke="#FFD700" stroke-width="1.8"/>
    <text x="20" y="32" fill="#FFD700" font-family="sans-serif" font-size="17" font-weight="bold">2. FPS System (British Imperial)</text>
    
    <text x="25" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Length: <tspan fill="#FFD700" font-weight="bold">Foot (ft)</tspan></text>
    <text x="25" y="95" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Mass: <tspan fill="#FFD700" font-weight="bold">Pound (lb)</tspan></text>
    <text x="25" y="125" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Time: <tspan fill="#FFD700" font-weight="bold">Second (s)</tspan></text>
    <text x="210" y="145" fill="#94A3B8" font-family="sans-serif" font-size="13">Force: poundal (pdl)</text>
  </g>

  <!-- System 3: MKS System -->
  <g transform="translate(25, 260)">
    <rect x="0" y="0" width="365" height="160" rx="12" fill="rgba(118,255,3,0.06)" stroke="#76FF03" stroke-width="1.8"/>
    <text x="20" y="32" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">3. MKS System (Metric Standard)</text>
    
    <text x="25" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Length: <tspan fill="#76FF03" font-weight="bold">Metre (m)</tspan></text>
    <text x="25" y="95" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Mass: <tspan fill="#76FF03" font-weight="bold">Kilogram (kg)</tspan></text>
    <text x="25" y="125" fill="#FFFFFF" font-family="sans-serif" font-size="15">• Time: <tspan fill="#76FF03" font-weight="bold">Second (s)</tspan></text>
    <text x="220" y="145" fill="#94A3B8" font-family="sans-serif" font-size="13">Force: Newton (N)</text>
  </g>

  <!-- System 4: International System (SI) -->
  <g transform="translate(410, 260)">
    <rect x="0" y="0" width="365" height="160" rx="12" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="2.2"/>
    <text x="20" y="32" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">4. SI System (Universal Standard)</text>
    
    <text x="25" y="62" fill="#FFFFFF" font-family="sans-serif" font-size="14.5">• <tspan fill="#FF512F" font-weight="bold">7 Base Units:</tspan> m, kg, s, A, K, mol, cd</text>
    <text x="25" y="90" fill="#FFFFFF" font-family="sans-serif" font-size="14.5">• <tspan fill="#FF512F" font-weight="bold">2 Supplementary:</tspan> rad (plane), sr (solid)</text>
    <text x="25" y="118" fill="#FFFFFF" font-family="sans-serif" font-size="14.5">• <tspan fill="#76FF03" font-weight="bold">Coherent System:</tspan> Derived without factors</text>
    <text x="25" y="145" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">✓ Globally Accepted CGPM Standard</text>
  </g>
</svg>`;

// 3D SVG 3: 3D Fundamental SI Units & Supplementary Angles Model (Plane Angle dθ & Solid Angle dΩ)
const svg3_3d_supplementary_angles = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="sphereGrad3" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFE0B2"/>
      <stop offset="50%" stop-color="#FF512F"/>
      <stop offset="100%" stop-color="#990000"/>
    </radialGradient>
    <radialGradient id="coneGrad3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="rgba(255,215,0,0.2)"/>
    </radialGradient>
  </defs>

  <!-- Left Side: Plane Angle dθ (Radian) -->
  <g transform="translate(40, 30)">
    <text x="50" y="30" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">1. Plane Angle: dθ = ds / r &nbsp;(Radian)</text>

    <!-- Circular Arc Center O -->
    <circle cx="160" cy="230" r="7" fill="#FFFFFF"/>
    <text x="135" y="245" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">O</text>

    <!-- Radii r -->
    <line x1="160" y1="230" x2="310" y2="230" stroke="#00E5FF" stroke-width="2.5"/>
    <line x1="160" y1="230" x2="265" y2="125" stroke="#00E5FF" stroke-width="2.5"/>
    <text x="235" y="250" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">r</text>

    <!-- Intercepted Arc ds -->
    <path d="M 310 230 A 150 150 0 0 0 265 125" fill="none" stroke="#FF512F" stroke-width="6" stroke-linecap="round"/>
    <text x="305" y="170" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Arc ds</text>

    <!-- Angle dθ Arc -->
    <path d="M 210 230 A 50 50 0 0 0 195 195" fill="none" stroke="#FFD700" stroke-width="2.5"/>
    <text x="215" y="210" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">dθ</text>

    <!-- Formula Box -->
    <rect x="60" y="300" width="250" height="50" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="75" y="331" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">dθ = ds / r &nbsp; [Radian, rad]</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="410" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: 3D Solid Angle dΩ (Steradian) -->
  <g transform="translate(430, 30)">
    <text x="30" y="30" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">2. 3D Solid Angle: dΩ = dA / r² &nbsp;(Steradian)</text>

    <!-- 3D Sphere Silhouette -->
    <circle cx="170" cy="210" r="130" fill="url(#sphereGrad3)" opacity="0.3"/>
    <ellipse cx="170" cy="210" rx="130" ry="35" fill="none" stroke="rgba(255,255,255,0.2)" stroke-dasharray="4,4"/>

    <!-- Apex Point O -->
    <circle cx="170" cy="210" r="6" fill="#FFFFFF"/>
    <text x="150" y="215" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">O</text>

    <!-- 3D Cone Rays -->
    <line x1="170" y1="210" x2="260" y2="120" stroke="#FFD700" stroke-width="2"/>
    <line x1="170" y1="210" x2="295" y2="155" stroke="#FFD700" stroke-width="2"/>
    <line x1="170" y1="210" x2="270" y2="200" stroke="#FFD700" stroke-width="2"/>

    <!-- Intercepted 3D Area dA on Sphere Surface -->
    <ellipse cx="275" cy="155" rx="30" ry="25" fill="#FFD700" opacity="0.7" stroke="#FFFFFF" stroke-width="2"/>
    <text x="260" y="160" fill="#000000" font-family="sans-serif" font-size="14" font-weight="bold">dA</text>

    <!-- Distance r label -->
    <text x="210" y="160" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">r</text>

    <!-- Solid Angle Badge -->
    <rect x="50" y="300" width="270" height="50" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="65" y="331" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">dΩ = dA / r² &nbsp; [Steradian, sr]</text>
  </g>
</svg>`;

// 3D SVG 4: Significant Figures Rules & Precision Micrometer Screw Gauge Model
const svg4_3d_precision_micrometer = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="metalGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#94A3B8"/>
      <stop offset="50%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="thimbleGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>

  <!-- Left Side: 3D Micrometer Screw Gauge -->
  <g transform="translate(30, 20)">
    <text x="40" y="30" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">1. Micrometer Screw Gauge (Precision = 0.001 cm)</text>

    <!-- U-Shaped Metal Frame -->
    <path d="M 60 120 C 20 220 20 300 140 300 C 200 300 220 240 220 200 L 180 200 C 180 230 160 260 120 260 C 70 260 70 200 85 160 Z" fill="url(#metalGrad4)" stroke="#94A3B8" stroke-width="2"/>

    <!-- Anvil & Spindle -->
    <rect x="85" y="150" width="20" height="30" fill="#CBD5E1"/>
    <rect x="140" y="150" width="60" height="30" fill="#CBD5E1"/>
    <text x="95" y="140" fill="#94A3B8" font-family="sans-serif" font-size="12">Anvil</text>
    <text x="150" y="140" fill="#94A3B8" font-family="sans-serif" font-size="12">Spindle</text>

    <!-- Measured Wire Specimen -->
    <circle cx="120" cy="165" r="14" fill="#FF512F" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="105" y="125" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">Wire d</text>

    <!-- Main Sleeve Scale -->
    <rect x="200" y="145" width="110" height="40" fill="#1E293B" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="200" y1="165" x2="310" y2="165" stroke="#FFFFFF" stroke-width="1.5"/>
    <!-- Scale graduations -->
    <line x1="220" y1="155" x2="220" y2="165" stroke="#76FF03" stroke-width="1.5"/>
    <line x1="240" y1="155" x2="240" y2="165" stroke="#76FF03" stroke-width="1.5"/>
    <line x1="260" y1="155" x2="260" y2="165" stroke="#76FF03" stroke-width="1.5"/>
    <line x1="280" y1="155" x2="280" y2="165" stroke="#76FF03" stroke-width="1.5"/>

    <!-- Rotating Thimble Scale -->
    <rect x="300" y="135" width="80" height="60" rx="4" fill="url(#thimbleGrad4)" stroke="#00E5FF" stroke-width="2"/>
    <line x1="300" y1="135" x2="300" y2="195" stroke="#FFD700" stroke-width="3"/>
    <text x="315" y="170" fill="#FFD700" font-family="monospace" font-size="14" font-weight="bold">45</text>

    <!-- Formula Panel at Bottom Left -->
    <rect x="30" y="320" width="350" height="85" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="45" y="348" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Least Count (LC) Formula:</text>
    <text x="45" y="375" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">LC = Pitch / No. of Circular Div = 1mm / 100 = 0.01 mm</text>
    <text x="45" y="395" fill="#76FF03" font-family="sans-serif" font-size="13">Reading = MSR + (CSR × LC)</text>
  </g>

  <!-- Right Side: Significant Figures Rules Card -->
  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="340" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="20" y="35" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. Significant Figures Rules Summary</text>

    <text x="20" y="75" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">1. All non-zero digits:</text>
    <text x="35" y="98" fill="#76FF03" font-family="monospace" font-size="14">284.5 ⇒ 4 Sig Figs</text>

    <text x="20" y="135" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">2. Trapped Zeros between digits:</text>
    <text x="35" y="158" fill="#76FF03" font-family="monospace" font-size="14">4008.05 ⇒ 6 Sig Figs</text>

    <text x="20" y="195" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">3. Leading Zeros before 1st non-zero:</text>
    <text x="35" y="218" fill="#FF512F" font-family="monospace" font-size="14">0.0032 ⇒ Only 2 Sig Figs</text>

    <text x="20" y="255" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">4. Trailing Zeros with decimal:</text>
    <text x="35" y="278" fill="#76FF03" font-family="monospace" font-size="14">5.200 ⇒ 4 Sig Figs</text>

    <text x="20" y="315" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">5. Scientific Notation N × 10<sup>x</sup>:</text>
    <text x="35" y="338" fill="#FFD700" font-family="monospace" font-size="14">4.70 × 10³ ⇒ 3 Sig Figs</text>
    <text x="35" y="365" fill="#94A3B8" font-family="sans-serif" font-size="13">Power 10³ does not affect sig figs!</text>
  </g>
</svg>`;

// 3D SVG 5: Error Analysis & Combination of Errors Tree (Z = A +/- B, Z = A x B, Z = A^p B^q / C^r)
const svg5_3d_error_propagation_tree = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Central Header Card -->
  <rect x="180" y="18" width="440" height="46" rx="10" fill="rgba(255,81,47,0.2)" stroke="#FF512F" stroke-width="2"/>
  <text x="210" y="47" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">EXPERIMENTAL ERROR PROPAGATION TREE</text>

  <!-- Level 1: Core Error Types -->
  <g transform="translate(40, 80)">
    <rect x="0" y="0" width="220" height="75" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="15" y="28" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Absolute Error (Δa_i)</text>
    <text x="15" y="55" fill="#FFFFFF" font-family="monospace" font-size="14">Δa_i = |a_mean - a_i|</text>
  </g>

  <g transform="translate(290, 80)">
    <rect x="0" y="0" width="220" height="75" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="15" y="28" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Relative Error</text>
    <text x="15" y="55" fill="#FFFFFF" font-family="monospace" font-size="14">Rel Error = Δa_mean / a_mean</text>
  </g>

  <g transform="translate(540, 80)">
    <rect x="0" y="0" width="220" height="75" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="15" y="28" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Percentage Error (%)</text>
    <text x="15" y="55" fill="#FFFFFF" font-family="monospace" font-size="14">% Error = (Δa/a) × 100%</text>
  </g>

  <!-- Level 2: Combination Rules Title Banner -->
  <line x1="40" y1="180" x2="760" y2="180" stroke="#334155" stroke-width="2"/>
  <text x="275" y="200" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">COMBINATION OF ERRORS LAWS</text>

  <!-- Rule 1: Sum / Difference -->
  <g transform="translate(40, 225)">
    <rect x="0" y="0" width="720" height="65" rx="10" fill="rgba(255,255,255,0.03)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="20" y="28" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">1. Sum or Difference: Z = A + B &nbsp;or&nbsp; Z = A - B</text>
    <text x="20" y="53" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">Max Absolute Error: ΔZ = ΔA + ΔB &nbsp; (Errors always ADD UP!)</text>
  </g>

  <!-- Rule 2: Product / Division -->
  <g transform="translate(40, 300)">
    <rect x="0" y="0" width="720" height="65" rx="10" fill="rgba(255,255,255,0.03)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="20" y="28" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">2. Product or Quotient: Z = A × B &nbsp;or&nbsp; Z = A / B</text>
    <text x="20" y="53" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">Max Relative Error: (ΔZ / Z) = (ΔA / A) + (ΔB / B)</text>
  </g>

  <!-- Rule 3: Powers -->
  <g transform="translate(40, 375)">
    <rect x="0" y="0" width="720" height="65" rx="10" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="2"/>
    <text x="20" y="28" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">3. Quantity Raised to Powers: Z = ( Aᵖ B^q ) / Cʳ</text>
    <text x="20" y="53" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">Max Fractional Error: (ΔZ / Z) = p(ΔA / A) + q(ΔB / B) + r(ΔC / C)</text>
  </g>
</svg>`;

// 3D SVG 6: Principle of Homogeneity & Dimensional Analysis Applications Model
const svg6_3d_pendulum_homogeneity = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="bobGrad6" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="40%" stop-color="#FFD700"/>
      <stop offset="85%" stop-color="#F57F17"/>
      <stop offset="100%" stop-color="#E65100"/>
    </radialGradient>
    <filter id="glowGold6" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Left Side: 3D Pendulum Model -->
  <g transform="translate(40, 20)">
    <text x="40" y="30" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">1. Simple Pendulum Time Period (T)</text>

    <!-- Rigid Ceiling -->
    <rect x="60" y="50" width="200" height="14" fill="#334155" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="160" y1="64" x2="160" y2="75" stroke="#FFFFFF" stroke-width="3"/>

    <!-- Swinging Dotted Arc -->
    <path d="M 90 260 A 200 200 0 0 0 230 260" fill="none" stroke="#76FF03" stroke-dasharray="4,4" stroke-width="2"/>

    <!-- String Length l -->
    <line x1="160" y1="75" x2="220" y2="250" stroke="#00E5FF" stroke-width="2.5"/>
    <text x="195" y="160" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">Length l [L]</text>

    <!-- 3D Pendulum Bob Mass m -->
    <ellipse cx="220" cy="265" rx="16" ry="6" fill="rgba(0,0,0,0.5)"/>
    <circle cx="220" cy="250" r="18" fill="url(#bobGrad6)" filter="url(#glowGold6)"/>
    <text x="245" y="255" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Bob Mass m [M]</text>

    <!-- Gravity Vector g -->
    <line x1="220" y1="268" x2="220" y2="330" stroke="#FF512F" stroke-width="3.5"/>
    <polygon points="220,338 214,324 226,324" fill="#FF512F"/>
    <text x="230" y="315" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">g [LT⁻²]</text>
  </g>

  <!-- Right Side: Principle of Homogeneity Verification Card -->
  <g transform="translate(420, 20)">
    <rect x="0" y="0" width="350" height="395" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="20" y="35" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. Principle of Homogeneity Audit</text>

    <text x="20" y="70" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Formula: T = 2π √( l / g )</text>

    <rect x="15" y="90" width="320" height="55" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="25" y="112" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">LHS Dimensions:</text>
    <text x="25" y="133" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">[LHS] = [T¹] = [M⁰ L⁰ T¹]</text>

    <rect x="15" y="155" width="320" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="25" y="177" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">RHS Dimensions:</text>
    <text x="25" y="200" fill="#FFFFFF" font-family="monospace" font-size="14.5">[RHS] = [ ( L / (L T⁻²) )¹/² ]</text>
    <text x="25" y="225" fill="#FFFFFF" font-family="monospace" font-size="14.5">[RHS] = [ ( T² )¹/² ] = [T¹]</text>
    <text x="25" y="250" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">✓ [LHS] = [RHS] = [T¹]</text>

    <!-- Applications Card -->
    <rect x="15" y="275" width="320" height="105" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="25" y="297" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">3 Core Applications of Dimensions:</text>
    <text x="25" y="320" fill="#FFFFFF" font-family="sans-serif" font-size="13">1. Check correctness of physical equations.</text>
    <text x="25" y="340" fill="#FFFFFF" font-family="sans-serif" font-size="13">2. Derive relation between physical quantities.</text>
    <text x="25" y="360" fill="#FFFFFF" font-family="sans-serif" font-size="13">3. Convert units between different systems.</text>
  </g>
</svg>`;

// 3D SVG 7: Parallax Method for Astronomical Distance Measurement (D = b / θ)
const svg7_3d_parallax_method = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="starGrad7" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="40%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <filter id="glowStar7" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Distant Cosmic Starfield background dots -->
  <g fill="#94A3B8" opacity="0.4">
    <circle cx="80" cy="50" r="1.5"/><circle cx="720" cy="80" r="1.5"/>
    <circle cx="150" cy="120" r="1"/><circle cx="650" cy="140" r="1.5"/>
    <circle cx="280" cy="40" r="1.5"/><circle cx="530" cy="60" r="1"/>
  </g>

  <!-- Distant Star / Planet S at Apex (x=400, y=70) -->
  <circle cx="400" cy="70" r="30" fill="url(#starGrad7)" filter="url(#glowStar7)"/>
  <circle cx="400" cy="70" r="9" fill="#FFFFFF"/>
  <text x="360" y="45" fill="#FFD700" font-family="sans-serif" font-size="17" font-weight="bold">Distant Star (S)</text>

  <!-- Earth Ground Observatory Points A and B (y=360) -->
  <line x1="220" y1="360" x2="580" y2="360" stroke="#00E5FF" stroke-width="4"/>
  <circle cx="220" cy="360" r="10" fill="#76FF03" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="580" cy="360" r="10" fill="#76FF03" stroke="#FFFFFF" stroke-width="2"/>

  <text x="160" y="385" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Observatory A</text>
  <text x="540" y="385" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Observatory B</text>

  <!-- Baseline b -->
  <text x="365" y="390" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">Baseline (b)</text>

  <!-- Distance D Lines from S to A and S to B -->
  <line x1="400" y1="70" x2="220" y2="360" stroke="#FF512F" stroke-width="2.5" stroke-dasharray="6,4"/>
  <line x1="400" y1="70" x2="580" y2="360" stroke="#FF512F" stroke-width="2.5" stroke-dasharray="6,4"/>

  <!-- Distance D Labels -->
  <text x="270" y="210" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">Distance D</text>
  <text x="490" y="210" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">Distance D</text>

  <!-- Parallax Angle θ Arc at Apex Star S -->
  <path d="M 370 120 A 50 50 0 0 0 430 120" fill="none" stroke="#FFD700" stroke-width="3"/>
  <text x="390" y="145" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">θ</text>

  <!-- Formula Panel Card Top Right (x=490, y=30) -->
  <rect x="490" y="30" width="280" height="95" rx="10" fill="rgba(255,81,47,0.18)" stroke="#FF512F" stroke-width="1.8"/>
  <text x="505" y="58" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">θ = b / D &nbsp; ⇒ &nbsp; D = b / θ</text>
  <text x="505" y="83" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">✓ Parallax Angle θ in Radians</text>
  <text x="505" y="105" fill="#FFD700" font-family="sans-serif" font-size="13">• Used for distant stars & planets</text>
</svg>`;


// Construct final Overview HTML for Chapter 1
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
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit I: Physical World and Measurement (Units and Measurements)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Physical Quantity:</b>
        <span style="color: #FFFFFF;">Any property of a material or system that can be quantified and measured using an accepted standard.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Unit of Measurement:</b>
        <span style="color: #FFFFFF;">An arbitrarily chosen, internationally accepted standard reference quantity used to compare physical measurements.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Fundamental Quantities:</b>
        <span style="color: #FFFFFF;">Base physical quantities that are independent of each other and cannot be defined in terms of other quantities (e.g. Mass, Length, Time).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Derived Quantities:</b>
        <span style="color: #FFFFFF;">Quantities that can be expressed as mathematical combinations of fundamental base quantities (e.g. Velocity, Force, Work).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. SI Units:</b>
        <span style="color: #FFFFFF;">Le Système International d'Unités - the modern metric standard system based on 7 base and 2 supplementary units.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Significant Figures:</b>
        <span style="color: #FFFFFF;">The total number of reliable digits in a measured quantity plus the first single digit that is uncertain.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Dimensions:</b>
        <span style="color: #FFFFFF;">The powers (exponents) to which fundamental units are raised to represent a physical quantity.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Dimensional Formula:</b>
        <span style="color: #FFFFFF;">An expression showing which base quantities and what powers enter into the unit of a physical quantity (e.g. Force = [M L T<sup>-2</sup>]).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Principle of Homogeneity:</b>
        <span style="color: #FFFFFF;">The fundamental principle stating that dimensions of all terms on both sides of a valid physical equation must be identical.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Systematic Error:</b>
        <span style="color: #FFFFFF;">Errors that tend to occur in one direction only (either positive or negative) due to instrument flaws or technique.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: NEED FOR MEASUREMENT -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Need for Measurement</h2>
  
  ${defCard("Measurement", "Measurement is the process of comparing an unknown physical quantity with a standard reference magnitude of the exact same physical kind to determine how many times the standard is contained within it.")}

  <p>Physics is an exact quantitative science based on observation, experimentation, and accurate numerical measurement. Qualitative descriptions such as 'hot', 'heavy', or 'fast' are subjective and insufficient for scientific analysis. To establish exact quantitative laws of nature, physical quantities must be measured accurately using well-defined standards.</p>
  
  <p>Every physical measurement consists of two essential parts: a numerical value (magnitude <i>n</i>) and a unit of measurement (<i>u</i>). The physical quantity <i>Q</i> is mathematically represented as:</p>
  
  ${eqBox("<b>Q = n × u</b>")}

  <p>If a physical quantity is measured in two different unit systems with units <i>u</i><sub>1</sub> and <i>u</i><sub>2</sub> having numerical values <i>n</i><sub>1</sub> and <i>n</i><sub>2</sub> respectively, the total magnitude remains unchanged:</p>
  
  ${eqBox("<b>n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub> &nbsp; ⇒ &nbsp; n ∝ " + frac('1', 'u') + "</b>")}

  <p>This fundamental inverse relationship implies that the larger the unit chosen for measurement, the smaller will be the numerical value obtained for the given quantity.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Role of Measurement in Physical Sciences</h3>
  <p>Accurate measurement enables physicists to test theoretical predictions against experimental data. From describing subatomic particle trajectories to calculating planetary orbits across light years, measurement bridges theoretical models with real-world physical reality.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Characteristics of a Standard Unit</h3>
  <p>To serve as a reliable reference standard, a unit of measurement must possess the following essential characteristics:</p>
  
  <div style="margin: 12px 0;">
    ${colonTopic("Well-Defined", "The definition of the unit must be clear, precise, and completely unambiguous.")}
    ${colonTopic("Invariable", "The standard unit must not change with environmental factors like temperature, pressure, or location.")}
    ${colonTopic("Easily Reproducible", "It should be possible to replicate the standard unit with high precision anywhere in the world.")}
    ${colonTopic("Universally Accepted", "It must be internationally agreed upon by the global scientific community.")}
  </div>

  ${svg3DCardWrapper("Physical Quantity & Measurement Process Model (Q = n × u)", "3D Volumetric vector diagram showing physical quantity Q measured against calibrated unit scale u with inverse relation n ∝ 1/u.", svg1_3d_measurement_process)}

  <!-- SECTION 2: UNITS OF MEASUREMENT & SYSTEMS OF UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Units of Measurement & Systems of Units</h2>

  ${defCard("System of Units", "A complete set of units containing both fundamental base units and derived units used to measure all types of physical quantities in a given scientific framework.")}

  <p>Historically, different countries developed independent systems of units based on local conventions for length, mass, and time. Three major historical unit systems were widely employed before the adoption of the metric SI system:</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) CGS System (Gaussian System)</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Base Units", "Centimetre (cm) for length, Gram (g) for mass, Second (s) for time.")}
    ${colonTopic("Derived Units", "Force is measured in <i>dyne</i> (1 N = 10<sup>5</sup> dyne), Work in <i>erg</i> (1 J = 10<sup>7</sup> erg).")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) FPS System (British Imperial System)</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Base Units", "Foot (ft) for length, Pound (lb) for mass, Second (s) for time.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) MKS System</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Base Units", "Metre (m) for length, Kilogram (kg) for mass, Second (s) for time.")}
  </div>

  ${svg3DCardWrapper("Historical & Modern Systems of Units Comparison Matrix", "3D Volumetric matrix comparing base dimensions of Length, Mass, and Time across CGS, FPS, MKS, and SI unit systems.", svg2_3d_unit_systems_matrix)}

  <!-- SECTION 3: SI UNITS: FUNDAMENTAL AND DERIVED UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. SI Units: Fundamental and Derived Units</h2>

  ${defCard("SI System (Système International d'Unités)", "The modern international metric standard system established in 1960 by the General Conference on Weights and Measures (CGPM), built upon 7 fundamental base units and 2 supplementary units.")}

  <p>The International System of Units (SI) is a <b>coherent system of units</b>, meaning that derived units are obtained directly by simple multiplication or division of base units without introducing numerical conversion factors.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Supplementary SI Geometrical Units</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Plane Angle (dθ)", "Measured in <b>radian (rad)</b>. Defined as arc length divided by radius: dθ = ds / r.")}
    ${colonTopic("Solid Angle (dΩ)", "Measured in <b>steradian (sr)</b>. Defined as intercepted surface area divided by radius squared: dΩ = dA / r<sup>2</sup>.")}
  </div>

  ${svg3DCardWrapper("Supplementary SI Geometrical Angles Model", "3D Volumetric model visualizing Plane Angle dθ = ds/r (rad) and 3D Solid Angle dΩ = dA/r² (sr).", svg3_3d_supplementary_angles)}

  <!-- SECTION 4: SIGNIFICANT FIGURES & INSTRUMENTAL PRECISION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Significant Figures & Instrumental Precision</h2>

  ${defCard("Significant Figures", "The total number of reliable digits in a measured quantity plus the first single uncertain digit that carries experimental ambiguity.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Precision of Measuring Instruments</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Meter Scale", "Least Count = 0.1 cm = 1 mm")}
    ${colonTopic("Vernier Calipers", "Least Count = 0.01 cm = 0.1 mm")}
    ${colonTopic("Micrometer Screw Gauge", singleLineCode("LC = " + frac('Pitch', 'No. of Circular Divisions') + " = " + frac('1 mm', '100') + " = 0.01 mm = 0.001 cm"))}
  </div>

  ${svg3DCardWrapper("Significant Figures Rules & Precision Micrometer Screw Gauge Model", "3D Volumetric micrometer model highlighting spindle, thimble scale, zero error, and significant figures rules.", svg4_3d_precision_micrometer)}

  <!-- SECTION 5: ERROR ANALYSIS & COMBINATION OF ERRORS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Error Analysis & Combination of Errors</h2>

  ${defCard("Experimental Error", "The numerical difference between the true theoretical value and the experimentally measured value of a physical quantity.")}

  <div style="margin: 12px 0;">
    ${colonTopic("Absolute Error (Δa<sub>i</sub>)", singleLineCode("Δa<sub>i</sub> = |a<sub>mean</sub> - a<sub>i</sub>|"))}
    ${colonTopic("Relative / Fractional Error", singleLineCode("Rel Error = " + frac('Δa<sub>mean</sub>', 'a<sub>mean</sub>')))}
    ${colonTopic("Percentage Error (%)", singleLineCode("% Error = ( " + frac('Δa<sub>mean</sub>', 'a<sub>mean</sub>') + " ) × 100%"))}
  </div>

  ${svg3DCardWrapper("Error Analysis & Error Propagation Tree", "3D Volumetric decision tree illustrating absolute, relative, and percentage errors with combination laws.", svg5_3d_error_propagation_tree)}

  <!-- SECTION 6: DIMENSIONS OF PHYSICAL QUANTITIES & HOMOGENEITY PRINCIPLE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Dimensions of Physical Quantities & Principle of Homogeneity</h2>

  ${defCard("Dimensions", "The powers or exponents to which fundamental base quantities (Mass [M], Length [L], Time [T], Current [A], Temp [K]) are raised to represent a physical quantity.")}

  ${defCard("Principle of Homogeneity of Dimensions", "The fundamental law stating that a physical equation is dimensionally valid if and only if the dimensions of all terms on both sides of the equation are strictly identical.")}

  ${svg3DCardWrapper("Principle of Homogeneity & Simple Pendulum Dimensional Model", "3D Volumetric model demonstrating dimensional audit for simple pendulum T = 2π √(l/g) and core applications of dimensions.", svg6_3d_pendulum_homogeneity)}

  <!-- SECTION 7: ASTRONOMICAL MEASUREMENTS & PARALLAX METHOD -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Astronomical Distance Measurements & Parallax Method</h2>

  ${defCard("Parallax Method", "An indirect trigonometric method used to measure large astronomical distances to stars and planets by observing shifts in position against distant celestial backgrounds.")}

  ${eqBox("<b>Parallax Angle θ = " + frac('Baseline b', 'Distance D') + " &nbsp; ⇒ &nbsp; Distance D = " + frac('b', 'θ') + "</b>")}

  ${svg3DCardWrapper("Parallax Method for Astronomical Distance Measurement", "3D Cosmic spatial model showing Earth baseline b, distant star apex, and parallax angle θ calculation.", svg7_3d_parallax_method)}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Dimensional Identities & Unit Conversions for Unit I</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Measurement Relation:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Q = n × u &nbsp;|&nbsp; n₁u₁ = n₂u₂<br>n ∝ ` + frac('1', 'u') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Supplementary SI Angles:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Plane Angle: dθ = ` + frac('ds', 'r') + ` (rad)<br>Solid Angle: dΩ = ` + frac('dA', 'r²') + ` (sr)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Error Combination Laws:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Sum/Diff: ΔZ = ΔA + ΔB<br>Prod/Div: ` + frac('ΔZ', 'Z') + ` = ` + frac('ΔA', 'A') + ` + ` + frac('ΔB', 'B') + `<br>Powers: ` + frac('ΔZ', 'Z') + ` = p` + frac('ΔA', 'A') + ` + q` + frac('ΔB', 'B') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Common Dimensional Formulae:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Force: [M¹ L¹ T⁻²] &nbsp;|&nbsp; Work: [M¹ L² T⁻²]<br>Pressure: [M¹ L⁻¹ T⁻²] &nbsp;|&nbsp; G: [M⁻¹ L³ T⁻²]</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Parallax & Astronomical Units:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Distance D = ` + frac('b', 'θ') + `<br>1 AU = 1.496 × 10¹¹ m &nbsp;|&nbsp; 1 ly = 9.46 × 10¹⁵ m</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Read existing Solutions HTML from client/data/content/c11-phy-1.ts
const existingContent = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-1.ts'), 'utf8');

const solStartIdx = existingContent.indexOf('export const c11Phy1HtmlSolutions =');
if (solStartIdx === -1) {
  console.error("Could not find c11Phy1HtmlSolutions in c11-phy-1.ts");
  process.exit(1);
}

const solutionsPartCode = existingContent.substring(solStartIdx);

const overviewHtml = generateFullOverviewHtml();

const tsContent = `// Class 11 Physics Unit I: Physical World and Measurement (Units and Measurements)
// High-Level Reference Book Content & NCERT Solutions (7 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy1HtmlOverview = ${JSON.stringify(overviewHtml)};

${solutionsPartCode}
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-1.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote c11-phy-1.ts with 7 self-contained 3D SVG diagrams to " + outputPath);
