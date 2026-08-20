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
    <div style="color: ${themeColor}; font-weight: bold; font-size: 17px; margin-bottom: 12px; text-align: center; letter-spacing: 0.5px;">
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

// 3D SVG 1: Physical Quantity & Measurement Process Model (Q = n x u, n1 u1 = n2 u2)
const svg1_3d_physical_quantity_model = `
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
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowCoral1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
  </defs>

  <!-- 3D Ground Shadow Grid -->
  <ellipse cx="400" cy="390" rx="360" ry="25" fill="rgba(0,0,0,0.5)"/>

  <!-- Physical Rod Object Q to be measured -->
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
  <text x="180" y="52" fill="#FFFFFF" font-family="sans-serif" font-size="19" font-weight="bold">HISTORICAL &amp; MODERN SYSTEMS OF UNITS MATRIX</text>

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

// 3D SVG 3: 3D Fundamental SI Units & Supplementary Angles Model (PERFECTLY CENTER-ALIGNED HEADINGS & ZERO TEXT OVERFLOW RECTANGLES)
const svg3_3d_supplementary_angles = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="sphereGrad3" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFE0B2"/>
      <stop offset="50%" stop-color="#FF512F"/>
      <stop offset="100%" stop-color="#990000"/>
    </radialGradient>
  </defs>

  <!-- Left Side: Plane Angle dθ (Radian) (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <!-- CENTER-ALIGNED HEADING 1 -->
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Plane Angle (dθ = ds / r)</text>

    <!-- Circular Arc Center O -->
    <circle cx="160" cy="210" r="7" fill="#FFFFFF"/>
    <text x="135" y="225" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">O</text>

    <!-- Radii r -->
    <line x1="160" y1="210" x2="310" y2="210" stroke="#00E5FF" stroke-width="2.5"/>
    <line x1="160" y1="210" x2="265" y2="105" stroke="#00E5FF" stroke-width="2.5"/>
    <text x="235" y="230" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">r</text>

    <!-- Intercepted Arc ds -->
    <path d="M 310 210 A 150 150 0 0 0 265 105" fill="none" stroke="#FF512F" stroke-width="6" stroke-linecap="round"/>
    <text x="305" y="150" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Arc ds</text>

    <!-- Angle dθ Arc -->
    <path d="M 210 210 A 50 50 0 0 0 195 175" fill="none" stroke="#FFD700" stroke-width="2.5"/>
    <text x="215" y="190" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">dθ</text>

    <!-- Extended Bottom Rectangle 1: Plane Angle Formula (Width 365, Height 110, y=360, All Text Center-Aligned) -->
    <rect x="0" y="360" width="365" height="110" rx="12" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="390" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Plane Angle (dθ) Formula</text>
    <text x="182" y="420" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">dθ = ds / r &nbsp; [SI Unit: Radian (rad)]</text>
    <text x="182" y="448" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">1 rad = 180° / π ≈ 57.3° &nbsp;|&nbsp; Full Circle = 2π rad</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="490" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: 3D Solid Angle dΩ (Steradian) (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <!-- CENTER-ALIGNED HEADING 2 -->
    <text x="182" y="30" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. 3D Solid Angle (dΩ = dA / r²)</text>

    <!-- 3D Sphere (Center at cx=182, cy=180, r=100) -->
    <circle cx="182" cy="180" r="100" fill="url(#sphereGrad3)" opacity="0.35"/>
    <ellipse cx="182" cy="180" rx="100" ry="30" fill="none" stroke="rgba(255,255,255,0.25)" stroke-dasharray="4,4"/>

    <!-- Apex Point O -->
    <circle cx="182" cy="180" r="6" fill="#FFFFFF"/>
    <text x="162" y="185" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">O</text>

    <!-- 3D Cone Rays -->
    <line x1="182" y1="180" x2="255" y2="105" stroke="#FFD700" stroke-width="2"/>
    <line x1="182" y1="180" x2="280" y2="135" stroke="#FFD700" stroke-width="2"/>
    <line x1="182" y1="180" x2="260" y2="175" stroke="#FFD700" stroke-width="2"/>

    <!-- Intercepted 3D Area dA on Sphere Surface -->
    <ellipse cx="265" cy="135" rx="26" ry="20" fill="#FFD700" opacity="0.75" stroke="#FFFFFF" stroke-width="2"/>
    <text x="252" y="140" fill="#000000" font-family="sans-serif" font-size="13.5" font-weight="bold">dA</text>

    <!-- Distance r label -->
    <text x="215" y="140" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">r</text>

    <!-- Extended Bottom Rectangle 2: Solid Angle Formula (Width 365, Height 110, y=360, All Text Center-Aligned) -->
    <rect x="0" y="360" width="365" height="110" rx="12" fill="rgba(118,255,3,0.12)" stroke="#76FF03" stroke-width="1.8"/>
    <text x="182" y="390" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">3D Solid Angle (dΩ) Formula</text>
    <text x="182" y="420" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">dΩ = dA / r² &nbsp; [SI Unit: Steradian (sr)]</text>
    <text x="182" y="448" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">Sphere Surface A = 4πr² &nbsp;⇒ &nbsp;Full Sphere = 4π sr</text>
  </g>
</svg>`;

// 3D SVG 4: Significant Figures Rules & Precision Micrometer Screw Gauge Model
const svg4_3d_precision_micrometer = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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
    <text x="20" y="30" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">1. Micrometer Screw Gauge (Precision = 0.001 cm)</text>

    <!-- U-Shaped Metal Frame -->
    <path d="M 60 120 C 20 220 20 300 140 300 C 200 300 220 240 220 200 L 180 200 C 180 230 160 260 120 260 C 70 260 70 200 85 160 Z" fill="url(#metalGrad4)" stroke="#94A3B8" stroke-width="2"/>

    <!-- Anvil & Spindle -->
    <rect x="85" y="150" width="20" height="30" fill="#CBD5E1"/>
    <rect x="140" y="150" width="60" height="30" fill="#CBD5E1"/>
    <text x="90" y="140" fill="#94A3B8" font-family="sans-serif" font-size="12">Anvil</text>
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
    <rect x="10" y="325" width="360" height="115" rx="10" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="25" y="352" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Least Count (LC) Formula:</text>
    <text x="25" y="378" fill="#FFFFFF" font-family="monospace" font-size="14.5" font-weight="bold">LC = Pitch / Circular Divisions</text>
    <text x="25" y="402" fill="#FFD700" font-family="monospace" font-size="14.5" font-weight="bold">LC = 1 mm / 100 = 0.01 mm = 0.001 cm</text>
    <text x="25" y="426" fill="#76FF03" font-family="sans-serif" font-size="13.5">Reading = MSR + (CSR × LC)</text>
  </g>

  <!-- Right Side: Significant Figures Rules Card -->
  <g transform="translate(410, 20)">
    <rect x="0" y="0" width="365" height="435" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="20" y="35" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. Significant Figures Rules Summary</text>

    <text x="20" y="70" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">1. All non-zero digits are significant:</text>
    <text x="35" y="93" fill="#76FF03" font-family="monospace" font-size="14" font-weight="bold">284.5 ⇒ 4 Sig Figs</text>

    <text x="20" y="135" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">2. Trapped Zeros between non-zeros:</text>
    <text x="35" y="158" fill="#76FF03" font-family="monospace" font-size="14" font-weight="bold">4008.05 ⇒ 6 Sig Figs</text>

    <text x="20" y="200" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">3. Leading Zeros before 1st non-zero:</text>
    <text x="35" y="223" fill="#FF512F" font-family="monospace" font-size="14" font-weight="bold">0.0032 ⇒ Only 2 Sig Figs</text>

    <text x="20" y="265" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">4. Trailing Zeros with a decimal:</text>
    <text x="35" y="288" fill="#76FF03" font-family="monospace" font-size="14" font-weight="bold">5.200 ⇒ 4 Sig Figs</text>

    <text x="20" y="330" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">5. Scientific Notation N × 10ˣ:</text>
    <text x="35" y="353" fill="#FFD700" font-family="monospace" font-size="14" font-weight="bold">4.70 × 10³ ⇒ 3 Sig Figs</text>
    <text x="35" y="380" fill="#94A3B8" font-family="sans-serif" font-size="13">• Power 10³ does not alter sig figs</text>
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
    <text x="20" y="28" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">3. Quantity Raised to Powers: Z = ( Aᵖ B<sup>q</sup> ) / Cʳ</text>
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
  <line x1="200" y1="360" x2="600" y2="360" stroke="#76FF03" stroke-width="3"/>
  <circle cx="200" cy="360" r="8" fill="#00E5FF"/>
  <circle cx="600" cy="360" r="8" fill="#00E5FF"/>
  <text x="140" y="385" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Observatory A</text>
  <text x="590" y="385" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Observatory B</text>
  <text x="350" y="385" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Baseline b = A B</text>

  <!-- Parallax Distance Sight Rays (D) -->
  <line x1="200" y1="360" x2="400" y2="70" stroke="#FF512F" stroke-width="2.5"/>
  <line x1="600" y1="360" x2="400" y2="70" stroke="#FF512F" stroke-width="2.5"/>

  <text x="250" y="210" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Distance D</text>
  <text x="510" y="210" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Distance D</text>

  <!-- Parallax Angle θ at Apex S -->
  <path d="M 375 106 A 45 45 0 0 0 425 106" fill="none" stroke="#FFD700" stroke-width="3"/>
  <text x="393" y="128" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">θ</text>

  <!-- Parallax Formula Box at Bottom Center (x=220, y=400) -->
  <rect x="220" y="400" width="360" height="42" rx="8" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
  <text x="240" y="427" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">D = b / θ &nbsp; (θ in Radians)</text>
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
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit I: Units and Measurements</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Physical Quantity:</b>
        <span style="color: #FFFFFF;">Any property of a material or system that can be quantified by measurement (e.g., Mass, Length, Time).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Unit of Measurement:</b>
        <span style="color: #FFFFFF;">A standard chosen reference value used to express and compare physical quantities (e.g., Metre, Kilogram).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Fundamental Units:</b>
        <span style="color: #FFFFFF;">Independent base units that cannot be defined in terms of other physical quantities (7 SI base units).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Derived Units:</b>
        <span style="color: #FFFFFF;">Units obtained by combining fundamental base units algebraically (e.g., Velocity m/s, Force N).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Parallax:</b>
        <span style="color: #FFFFFF;">The apparent change in position of an object relative to a background when viewed from two different positions.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Significant Figures:</b>
        <span style="color: #FFFFFF;">Digits in a measured value that are known with certainty plus the first uncertain digit.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Accuracy vs Precision:</b>
        <span style="color: #FFFFFF;">Accuracy measures closeness to true value; Precision measures resolution or repeatability of measurement.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Absolute Error:</b>
        <span style="color: #FFFFFF;">The magnitude of the difference between the true mean value and the individual measured value.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Dimensional Formula:</b>
        <span style="color: #FFFFFF;">An expression showing which fundamental quantities and powers compose a derived physical quantity.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Homogeneity Principle:</b>
        <span style="color: #FFFFFF;">States that dimensions of all terms on both sides of a physically valid equation must be identical.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: NEED FOR MEASUREMENT & UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Need for Measurement & Systems of Units</h2>
  
  ${defCard("Physical Quantity", "Any quantifiable property of a physical body or phenomenon that can be measured using an instrument and expressed as a numerical value n multiplied by a standard unit u: Q = n × u.")}

  <p>Measurement is essentially a process of comparing an unknown physical quantity with a internationally accepted standard benchmark called a unit. If the unit size chosen is u and it fits n times into the quantity Q, then Q = n × u. If the unit changes from u<sub>1</sub> to u<sub>2</sub>, the numerical value changes from n<sub>1</sub> to n<sub>2</sub> such that:</p>

  ${eqBox("<b>Q = n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub> &nbsp; ⇒ &nbsp; n ∝ " + frac('1', 'u') + "</b>")}

  ${svg3DCardWrapper("Physical Quantity Measurement Model (Q = n × u)", "3D Isometric physical cylinder rod Q measured against a calibrated standard unit scale u showing n = 8 units, proving inverse relation n ∝ 1/u.", svg1_3d_physical_quantity_model)}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Historical Systems of Units</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("CGS System (Centimetre-Gram-Second)", "Gaussian system based on centimetre for length, gram for mass, and second for time.")}
    ${colonTopic("FPS System (Foot-Pound-Second)", "British Imperial system based on foot for length, pound for mass, and second for time.")}
    ${colonTopic("MKS System (Metre-Kilogram-Second)", "Metric system based on metre for length, kilogram for mass, and second for time.")}
    ${colonTopic("SI System (Système International d'Unités)", "Modern international standard established by CGPM in 1971 comprising 7 base units and 2 supplementary units.")}
  </div>

  ${svg3DCardWrapper("Historical & Modern Systems of Units Comparison Matrix", "4-Pillar comparative cards for CGS, FPS, MKS, and universal SI system with base and supplementary unit badges.", svg2_3d_unit_systems_matrix)}

  <!-- SECTION 2: SI BASE & SUPPLEMENTARY UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. SI Base & Supplementary Units</h2>

  ${defCard("SI Base Units", "The seven mutually independent fundamental physical quantities defined by international agreement: Length (m), Mass (kg), Time (s), Electric Current (A), Thermodynamic Temperature (K), Amount of Substance (mol), and Luminous Intensity (cd).")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Supplementary SI Units (Plane Angle & Solid Angle)</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Plane Angle (dθ)", "Ratio of arc length ds to radius r: dθ = ds / r. Expressed in radians (rad). 1 rad = 180° / π ≈ 57.3°.")}
    ${colonTopic("Solid Angle (dΩ)", "3D spatial angle subtended by a surface area dA at center of sphere of radius r: dΩ = dA / r². Expressed in steradians (sr). Full sphere = 4π sr.")}
  </div>

  ${svg3DCardWrapper("Supplementary SI Geometrical Angles Model", "2D/3D circular arc for Plane Angle dθ = ds/r (radian) side-by-side with 3D Cone/Sphere surface cutting intercepted area dA for Solid Angle dΩ = dA/r² (steradian).", svg3_3d_supplementary_angles)}

  <!-- SECTION 3: MEASUREMENT OF LENGTH, MASS & TIME -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Measurement of Length, Mass, Time & Astronomical Methods</h2>

  ${defCard("Parallax Method", "Indirect trigonometric triangulation technique used to measure large astronomical distances to stars and planets from Earth baselines.")}

  <p>For a distant celestial star S observed from two observatories A and B separated by baseline b on Earth:</p>
  
  ${eqBox("<b>D = " + frac('b', 'θ') + " &nbsp; (where Parallax Angle θ is measured in radians)</b>")}

  ${svg3DCardWrapper("Parallax Method for Astronomical Distance Measurements", "3D Cosmic spatial model with Earth baseline b, distant star apex S, parallax angle θ, and formula panel D = b/θ.", svg7_3d_parallax_method)}

  <!-- SECTION 4: ACCURACY, PRECISION & SIGNIFICANT FIGURES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Accuracy, Precision of Instruments & Significant Figures</h2>

  ${defCard("Accuracy vs Precision", "Accuracy indicates how close a measured value is to the true value. Precision indicates the resolution or limit to which the quantity is measured by the instrument.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Significant Figures Rules Summary</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Rule 1", "All non-zero digits are significant (e.g., 284.5 has 4 significant figures).")}
    ${colonTopic("Rule 2", "All zeros occurring between two non-zero digits are significant (e.g., 4008.05 has 6 significant figures).")}
    ${colonTopic("Rule 3", "Leading zeros preceding the first non-zero digit are NOT significant (e.g., 0.0032 has 2 significant figures).")}
    ${colonTopic("Rule 4", "Trailing zeros in a number with a decimal point ARE significant (e.g., 5.200 has 4 significant figures).")}
    ${colonTopic("Rule 5", "In scientific notation N × 10<sup>x</sup>, power of 10 does not affect significant figures (e.g., 4.70 × 10<sup>3</sup> has 3 significant figures).")}
  </div>

  ${svg3DCardWrapper("Significant Figures Rules & Precision Micrometer Screw Gauge Model", "3D Micrometer Screw Gauge (anvil, spindle, wire specimen, main scale, circular thimble scale) with Least Count LC = 0.001 cm formula side-by-side with 5 rules card for Significant Figures.", svg4_3d_precision_micrometer)}

  <!-- SECTION 5: ERRORS IN MEASUREMENT & ERROR PROPAGATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Errors in Measurement & Combination of Errors</h2>

  ${defCard("Absolute Error", "The numerical difference between the true mean value of a physical quantity and an individual measured value: Δa<sub>i</sub> = |a<sub>mean</sub> - a<sub>i</sub>|.")}

  <div style="margin: 12px 0;">
    ${colonTopic("Relative / Fractional Error", singleLineCode("Relative Error = " + frac('Δa<sub>mean</sub>', 'a<sub>mean</sub>')))}
    ${colonTopic("Percentage Error", singleLineCode("Percentage Error = [ " + frac('Δa<sub>mean</sub>', 'a<sub>mean</sub>') + " ] × 100%"))}
    ${colonTopic("Combination Rule for Powers", singleLineCode("If Z = " + frac('A<sup>p</sup> B<sup>q</sup>', 'C<sup>r</sup>') + " &nbsp; ⇒ &nbsp; " + frac('ΔZ', 'Z') + " = p " + frac('ΔA', 'A') + " + q " + frac('ΔB', 'B') + " + r " + frac('ΔC', 'C')))}
  </div>

  ${svg3DCardWrapper("Error Analysis & Combination of Errors Tree", "3D Decision tree linking Absolute Error Δa, Relative Error Δa/a, Percentage Error %, Sum/Diff (ΔZ = ΔA + ΔB), Product/Div (ΔZ/Z = ΔA/A + ΔB/B), and Powers (ΔZ/Z = pΔA/A + qΔB/B + rΔC/C).", svg5_3d_error_propagation_tree)}

  <!-- SECTION 6: DIMENSIONS & PRINCIPLE OF HOMOGENEITY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Dimensions of Physical Quantities & Principle of Homogeneity</h2>

  ${defCard("Principle of Homogeneity of Dimensions", "States that a physical equation is dimensionally correct only if the fundamental dimensions of all terms on both sides of the equation are identical.")}

  <p>For a simple pendulum of string length l, mass m, swinging under gravity g:</p>

  ${eqBox("<b>T = 2π √(" + frac('l', 'g') + ") &nbsp; ⇒ &nbsp; [LHS] = [T<sup>1</sup>] = [M<sup>0</sup> L<sup>0</sup> T<sup>1</sup>], &nbsp; [RHS] = [ ( " + frac('L', 'L T<sup>-2</sup>') + " )<sup>1/2</sup> ] = [T<sup>1</sup>]</b>")}

  ${svg3DCardWrapper("Principle of Homogeneity & Simple Pendulum Dimensional Model", "3D Simple pendulum bob swinging in arc space with length l, mass m, gravity g, and step-by-step dimensional audit card verifying [LHS] = [RHS] = [T<sup>1</sup>] for T = 2π√(l/g).", svg6_3d_pendulum_homogeneity)}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Dimensional Relations & Error Laws Summary for Unit I</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Measurement Law:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Q = n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub><br>n ∝ ` + frac('1', 'u') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Supplementary Angles:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">dθ = ` + frac('ds', 'r') + ` (rad)<br>dΩ = ` + frac('dA', 'r<sup>2</sup>') + ` (sr)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Parallax Distance:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">D = ` + frac('b', 'θ') + `<br>(θ in radians)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Micrometer Screw Gauge:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">LC = ` + frac('Pitch', 'Circular Div') + ` = 0.01 mm<br>Reading = MSR + (CSR × LC)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Error Propagation for Powers:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Z = ` + frac('A<sup>p</sup> B<sup>q</sup>', 'C<sup>r</sup>') + `<br>` + frac('ΔZ', 'Z') + ` = p ` + frac('ΔA', 'A') + ` + q ` + frac('ΔB', 'B') + ` + r ` + frac('ΔC', 'C') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Simple Pendulum Period:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">T = 2π √(` + frac('l', 'g') + `)<br>[T] = [LHS] = [RHS] = [M<sup>0</sup> L<sup>0</sup> T<sup>1</sup>]</span>
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

const tsContent = `// Class 11 Physics Unit I: Units and Measurements
// High-Level Reference Book Content & NCERT Solutions (7 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy1HtmlOverview = ${JSON.stringify(overviewHtml)};

${solutionsPartCode}
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-1.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote updated c11-phy-1.ts with centered headings and zero overflow rectangles to " + outputPath);
