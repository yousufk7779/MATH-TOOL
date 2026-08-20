const fs = require('fs');
const path = require('path');

const themeColor = "#8E2DE2"; // Primary theme color for Class 11 Physics Unit II (Kinematics)

// Clean compact inline stacked fraction helper
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(142, 45, 226, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
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
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(142, 45, 226, 0.25);">
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

// ==================== 8 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 2 (ALL OVERFLOWS & OVERLAPS FIXED) ====================

// 3D SVG 1: Distance vs Displacement in 1D Rectilinear Motion
const svg1_3d_distance_displacement = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="purpleGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8E2DE2"/>
      <stop offset="100%" stop-color="#4A00E0"/>
    </linearGradient>
    <filter id="glowPurple1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowCyan1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowGreen1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- 3D Ground Grid -->
  <g opacity="0.15" stroke="#94A3B8" stroke-width="1">
    <line x1="60" y1="360" x2="740" y2="360"/>
    <line x1="120" y1="300" x2="680" y2="300"/>
    <line x1="60" y1="360" x2="200" y2="200"/>
    <line x1="740" y1="360" x2="600" y2="200"/>
  </g>

  <!-- 1D Linear Track (X Axis) -->
  <line x1="80" y1="300" x2="720" y2="300" stroke="#475569" stroke-width="3"/>
  
  <!-- Scale Positions: Origin O (x=0), Turning Point P (x=+10m), Final Position Q (x=+4m) -->
  <circle cx="120" cy="300" r="7" fill="#FFFFFF"/>
  <text x="105" y="330" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">O (x=0)</text>

  <circle cx="600" cy="300" r="7" fill="#FFD700"/>
  <text x="580" y="330" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">P (x=+10 m)</text>

  <circle cx="312" cy="300" r="7" fill="#76FF03"/>
  <text x="290" y="330" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Q (x=+4 m)</text>

  <!-- Forward Path O to P (10 m) -->
  <path d="M 120 270 Q 360 210 600 270" fill="none" stroke="#00E5FF" stroke-width="3.5" marker-end="url(#arrowCyan1)" filter="url(#glowPurple1)"/>
  <text x="310" y="225" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Forward Path O → P (+10 m)</text>

  <!-- Return Path P to Q (-6 m) -->
  <path d="M 600 270 Q 456 240 312 270" fill="none" stroke="#FF512F" stroke-width="3" stroke-dasharray="5,4"/>
  <text x="410" y="245" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Return Path P → Q (-6 m)</text>

  <!-- Direct Displacement Vector Δx (O to Q) -->
  <line x1="120" y1="160" x2="312" y2="160" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen1)"/>
  <text x="130" y="145" fill="#76FF03" font-family="sans-serif" font-size="15.5" font-weight="bold">Displacement Δx = x_final - x_init = +4 m</text>

  <!-- Comparison Formula Panel Top Right (x=430, y=25, width=345, height=105) -->
  <rect x="430" y="25" width="345" height="105" rx="10" fill="rgba(142,45,226,0.18)" stroke="#8E2DE2" stroke-width="1.8"/>
  <text x="445" y="55" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">Distance = |+10| + |-6| = 16 m</text>
  <text x="445" y="80" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">Displacement Δx = +4 m</text>
  <text x="445" y="106" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">✓ |Displacement| ≤ Total Distance</text>
</svg>`;

// 3D SVG 2: Calculus in Kinematics (Center-Aligned Headings & Clean Spacing)
const svg2_3d_calculus_kinematics = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="areaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(142, 45, 226, 0.4)"/>
      <stop offset="100%" stop-color="rgba(142, 45, 226, 0.05)"/>
    </linearGradient>
  </defs>

  <!-- Left Half: Position-Time (x-t) Tangent Slope = Velocity v = dx/dt (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Derivative: Slope = v = dx/dt</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="340" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">t</text>
    <text x="45" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">x</text>

    <!-- Curve x(t) -->
    <path d="M 50 310 Q 180 280 300 100" fill="none" stroke="#00E5FF" stroke-width="3.5"/>

    <!-- Tangent Line at Point P -->
    <line x1="100" y1="300" x2="280" y2="110" stroke="#FFD700" stroke-width="2.5" stroke-dasharray="6,4"/>
    <circle cx="190" cy="205" r="6" fill="#FF512F"/>
    <text x="205" y="200" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Point P(t, x)</text>

    <!-- Slope Card at Bottom Left -->
    <rect x="25" y="360" width="315" height="50" rx="8" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="182" y="391" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Slope = tan θ = dx / dt = v</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="430" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Half: Velocity-Time (v-t) Area = Displacement s = ∫ v dt (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Integral: Area = Δx = ∫ v dt</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="340" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">t</text>
    <text x="45" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">v</text>

    <!-- Shaded Integral Area under v-t curve -->
    <path d="M 100 330 L 100 240 Q 200 120 280 200 L 280 330 Z" fill="url(#areaGrad2)" stroke="#8E2DE2" stroke-width="2"/>

    <!-- Boundary lines t1 and t2 -->
    <line x1="100" y1="330" x2="100" y2="240" stroke="#76FF03" stroke-dasharray="3,3"/>
    <line x1="280" y1="330" x2="280" y2="200" stroke="#76FF03" stroke-dasharray="3,3"/>
    <text x="95" y="350" fill="#76FF03" font-family="monospace" font-size="13">t₁</text>
    <text x="275" y="350" fill="#76FF03" font-family="monospace" font-size="13">t₂</text>

    <!-- Area Card at Bottom Right -->
    <rect x="25" y="360" width="315" height="50" rx="8" fill="rgba(118,255,3,0.12)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="182" y="391" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">Area = ∫ₜ₁ᵗ₂ v dt = Displacement Δx</text>
  </g>
</svg>`;

// 3D SVG 3: Kinematic Graphs Reference Set (x-t, v-t, a-t Curves)
const svg3_3d_kinematic_graphs_set = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Grid 2x2 of Kinematic Graph Cards -->

  <!-- 1. Object at Rest -->
  <g transform="translate(25, 20)">
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(255,255,255,0.03)" stroke="#8E2DE2" stroke-width="1.5"/>
    <text x="182" y="32" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Object at Rest (v = 0, a = 0)</text>

    <line x1="50" y1="160" x2="330" y2="160" stroke="#475569" stroke-width="1.5"/>
    <line x1="50" y1="160" x2="50" y2="55" stroke="#475569" stroke-width="1.5"/>

    <line x1="50" y1="95" x2="320" y2="95" stroke="#00E5FF" stroke-width="3"/>
    <text x="140" y="85" fill="#00E5FF" font-family="monospace" font-size="14">Position x = Const</text>
    <text x="140" y="130" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Slope = dx/dt = 0</text>
  </g>

  <!-- 2. Uniform Velocity Motion -->
  <g transform="translate(410, 20)">
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(255,255,255,0.03)" stroke="#8E2DE2" stroke-width="1.5"/>
    <text x="182" y="32" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">2. Uniform Velocity (v = Const, a = 0)</text>

    <line x1="50" y1="160" x2="330" y2="160" stroke="#475569" stroke-width="1.5"/>
    <line x1="50" y1="160" x2="50" y2="55" stroke="#475569" stroke-width="1.5"/>

    <line x1="50" y1="150" x2="300" y2="65" stroke="#76FF03" stroke-width="3"/>
    <text x="130" y="90" fill="#76FF03" font-family="monospace" font-size="14">x(t) = x₀ + v t</text>
    <text x="130" y="130" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Constant Positive Slope</text>
  </g>

  <!-- 3. Uniformly Accelerated Motion -->
  <g transform="translate(25, 235)">
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(255,255,255,0.03)" stroke="#8E2DE2" stroke-width="1.5"/>
    <text x="182" y="32" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">3. Uniform Acceleration (a = Const &gt; 0)</text>

    <line x1="50" y1="160" x2="330" y2="160" stroke="#475569" stroke-width="1.5"/>
    <line x1="50" y1="160" x2="50" y2="55" stroke="#475569" stroke-width="1.5"/>

    <line x1="50" y1="140" x2="300" y2="65" stroke="#FFD700" stroke-width="3"/>
    <text x="130" y="85" fill="#FFD700" font-family="monospace" font-size="14">v-t Slope = a = Const</text>
    <text x="130" y="130" fill="#94A3B8" font-family="sans-serif" font-size="13.5">x-t curve is Parabolic</text>
  </g>

  <!-- 4. Uniform Retardation -->
  <g transform="translate(410, 235)">
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(255,255,255,0.03)" stroke="#8E2DE2" stroke-width="1.5"/>
    <text x="182" y="32" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">4. Uniform Retardation (a = - Const)</text>

    <line x1="50" y1="160" x2="330" y2="160" stroke="#475569" stroke-width="1.5"/>
    <line x1="50" y1="160" x2="50" y2="55" stroke="#475569" stroke-width="1.5"/>

    <line x1="50" y1="65" x2="300" y2="150" stroke="#FF512F" stroke-width="3"/>
    <text x="120" y="85" fill="#FF512F" font-family="monospace" font-size="14">v(t) = u - a t</text>
    <text x="120" y="130" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Negative Slope = Retardation</text>
  </g>
</svg>`;

// 3D SVG 4: Graphical Derivation of Kinematic Equations of Motion
const svg4_3d_graphical_derivation_kinematics = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="rectGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(0, 229, 255, 0.3)"/>
      <stop offset="100%" stop-color="rgba(0, 229, 255, 0.05)"/>
    </linearGradient>
    <linearGradient id="triGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(118, 255, 3, 0.3)"/>
      <stop offset="100%" stop-color="rgba(118, 255, 3, 0.05)"/>
    </linearGradient>
  </defs>

  <!-- Left Side: Velocity-Time Graph for Uniform Acceleration -->
  <g transform="translate(30, 20)">
    <text x="180" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Velocity-Time Graph Breakdown</text>

    <!-- Axes -->
    <line x1="60" y1="330" x2="350" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="60" y1="330" x2="60" y2="50" stroke="#475569" stroke-width="2"/>
    <text x="360" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Time t</text>
    <text x="50" y="40" fill="#94A3B8" font-family="sans-serif" font-size="13">Velocity v</text>

    <!-- Shaded Rectangle (u · t) -->
    <rect x="60" y="240" width="240" height="90" fill="url(#rectGrad4)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="140" y="290" fill="#00E5FF" font-family="monospace" font-size="15" font-weight="bold">Area₁ = u · t</text>

    <!-- Shaded Triangle (1/2 · a · t²) -->
    <polygon points="60,240 300,240 300,80" fill="url(#triGrad4)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="180" y="200" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">Area₂ = ½ a t²</text>

    <!-- Points A, B, C, D -->
    <line x1="60" y1="240" x2="300" y2="80" stroke="#FFD700" stroke-width="3.5"/>
    <circle cx="60" cy="240" r="6" fill="#FF512F"/>
    <circle cx="300" cy="80" r="6" fill="#FF512F"/>
    
    <text x="35" y="245" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">u (A)</text>
    <text x="310" y="75" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">v (B)</text>
    <text x="305" y="245" fill="#94A3B8" font-family="sans-serif" font-size="14">C</text>
    <text x="295" y="350" fill="#94A3B8" font-family="sans-serif" font-size="14">D (t)</text>
  </g>

  <!-- Right Side: 3 Derivation Cards (Width 345) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="360" height="410" rx="12" fill="rgba(15,23,42,0.9)" stroke="#8E2DE2" stroke-width="1.8"/>
    <text x="180" y="32" text-anchor="middle" fill="#8E2DE2" font-family="sans-serif" font-size="17" font-weight="bold">2. Derived Kinematic Equations</text>

    <!-- Eq 1 -->
    <rect x="15" y="55" width="330" height="95" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="180" y="80" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">1st Eq: Slope = a = (v - u) / t</text>
    <text x="180" y="112" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v = u + a t</text>

    <!-- Eq 2 -->
    <rect x="15" y="165" width="330" height="105" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="180" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">2nd Eq: Total Area s = Area₁ + Area₂</text>
    <text x="180" y="222" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">s = u t + ½ a t²</text>

    <!-- Eq 3 -->
    <rect x="15" y="285" width="330" height="105" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="180" y="310" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">3rd Eq: Trapezoid Area s = ½ (u+v) t</text>
    <text x="180" y="342" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v² - u² = 2 a s</text>
  </g>
</svg>`;

// 3D SVG 5: 3D Resolution of Vector A into Rectangular Components (Ax i + Ay j)
const svg5_3d_vector_resolution = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <filter id="glowVector5" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowPurple5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#8E2DE2"/>
    </marker>
    <marker id="arrowCyan5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="arrowGreen5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- 3D Ground Base Plane -->
  <polygon points="100,350 450,350 650,230 300,230" fill="rgba(148,163,184,0.08)" stroke="#475569" stroke-width="2"/>

  <!-- Origin O -->
  <circle cx="200" cy="310" r="8" fill="#FFFFFF"/>
  <text x="165" y="330" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">O (0,0)</text>

  <!-- Vector Ax Component along X Axis -->
  <line x1="200" y1="310" x2="520" y2="310" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowCyan5)"/>
  <text x="330" y="340" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">A_x = |A| cos θ î</text>

  <!-- Vector Ay Component along Y Axis -->
  <line x1="200" y1="310" x2="200" y2="90" stroke="#76FF03" stroke-width="4.5" marker-end="url(#arrowGreen5)"/>
  <text x="90" y="190" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">A_y = |A| sin θ ĵ</text>

  <!-- Dotted Rectangle Projection Lines -->
  <line x1="520" y1="310" x2="520" y2="90" stroke="#94A3B8" stroke-dasharray="4,4" stroke-width="2"/>
  <line x1="200" y1="90" x2="520" y2="90" stroke="#94A3B8" stroke-dasharray="4,4" stroke-width="2"/>

  <!-- Resultant Vector A -->
  <line x1="200" y1="310" x2="512" y2="96" stroke="#8E2DE2" stroke-width="5.5" marker-end="url(#arrowPurple5)" filter="url(#glowVector5)"/>
  <text x="350" y="170" fill="#8E2DE2" font-family="sans-serif" font-size="20" font-weight="bold">A = A_x î + A_y ĵ</text>

  <!-- Angle θ Arc -->
  <path d="M 270 310 A 70 70 0 0 0 255 265" fill="none" stroke="#FFD700" stroke-width="3"/>
  <text x="280" y="290" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">θ</text>

  <!-- Formula Card Top Right (x=440, y=25, width=335, height=100) -->
  <rect x="440" y="25" width="335" height="100" rx="10" fill="rgba(142,45,226,0.18)" stroke="#8E2DE2" stroke-width="1.8"/>
  <text x="455" y="55" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">|A| = √(A_x² + A_y²)</text>
  <text x="455" y="80" fill="#00E5FF" font-family="monospace" font-size="15" font-weight="bold">tan θ = A_y / A_x</text>
  <text x="455" y="105" fill="#76FF03" font-family="sans-serif" font-size="13">• 2D Rectangular Resolution</text>
</svg>`;

// 3D SVG 6: 3D Vector Multiplication — Dot Product vs Cross Product (FIXED: Expanded Width 365px, Height 500px, CENTER-ALIGNED HEADINGS & ZERO TEXT OVERFLOW)
const svg6_3d_dot_cross_products = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <filter id="glowCyan6" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowGreen6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowPink6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
  </defs>

  <!-- Left Side: Dot Product (Scalar Output) (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <!-- CENTER-ALIGNED HEADING 1 -->
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Scalar (Dot) Product: A · B</text>

    <!-- Vectors A and B -->
    <line x1="50" y1="280" x2="300" y2="280" stroke="#00E5FF" stroke-width="4"/>
    <text x="310" y="285" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">A</text>

    <line x1="50" y1="280" x2="230" y2="130" stroke="#FFD700" stroke-width="4"/>
    <text x="240" y="130" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">B</text>

    <!-- Projection B cos θ -->
    <line x1="230" y1="130" x2="230" y2="280" stroke="#76FF03" stroke-dasharray="4,4" stroke-width="2"/>
    <line x1="50" y1="280" x2="230" y2="280" stroke="#76FF03" stroke-width="5"/>
    <text x="100" y="310" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Projection: |B| cos θ</text>

    <!-- Angle θ -->
    <path d="M 110 280 A 60 60 0 0 0 100 240" fill="none" stroke="#FFFFFF" stroke-width="2"/>
    <text x="120" y="260" fill="#FFFFFF" font-family="sans-serif" font-size="15">θ</text>

    <!-- Extended Bottom Summary Box (FIXED: Width 365, Height 110, y=360, All Text Center-Aligned, 0% Overflow) -->
    <rect x="0" y="360" width="365" height="110" rx="12" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="390" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Scalar Dot Product Law</text>
    <text x="182" y="420" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">A · B = |A| |B| cos θ</text>
    <text x="182" y="448" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="14">A · B = A_x B_x + A_y B_y + A_z B_z</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="470" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Cross Product (Vector Output C = A x B) (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <!-- CENTER-ALIGNED HEADING 2 -->
    <text x="182" y="30" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Vector (Cross) Product: C = A × B</text>

    <!-- 3D Base Plane -->
    <polygon points="40,290 230,290 330,220 140,220" fill="rgba(148,163,184,0.08)" stroke="#475569" stroke-width="1.5"/>

    <!-- Pivot O -->
    <circle cx="140" cy="255" r="6" fill="#FFFFFF"/>

    <!-- Vector A and B in Plane -->
    <line x1="140" y1="255" x2="280" y2="255" stroke="#00E5FF" stroke-width="3.5"/>
    <text x="290" y="260" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">A</text>

    <line x1="140" y1="255" x2="210" y2="185" stroke="#FFD700" stroke-width="3.5"/>
    <text x="220" y="180" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">B</text>

    <!-- Vertical Cross Product Vector C (Bursting Upward) -->
    <line x1="140" y1="255" x2="140" y2="60" stroke="#76FF03" stroke-width="5" marker-end="url(#arrowGreen6)" filter="url(#glowCyan6)"/>
    <text x="155" y="70" fill="#76FF03" font-family="sans-serif" font-size="18" font-weight="bold">C = A × B</text>

    <!-- Right Hand Rule Spiral -->
    <path d="M 180 240 A 40 20 0 0 0 155 220" fill="none" stroke="#76FF03" stroke-dasharray="3,3" stroke-width="2"/>

    <!-- Extended Bottom Summary Box (FIXED: Width 365, Height 110, y=360, All Text Center-Aligned, 0% Overflow) -->
    <rect x="0" y="360" width="365" height="110" rx="12" fill="rgba(118,255,3,0.12)" stroke="#76FF03" stroke-width="1.8"/>
    <text x="182" y="390" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Vector Cross Product Law</text>
    <text x="182" y="420" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">C = A × B = |A| |B| sin θ n̂</text>
    <text x="182" y="448" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5">|C| = Area of Parallelogram formed by A &amp; B</text>
  </g>
</svg>`;

// 3D SVG 7: 3D Parabolic Trajectory of Projectile Motion
const svg7_3d_projectile_motion = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="projGrad7" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8E2DE2"/>
      <stop offset="50%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </linearGradient>
    <filter id="glowProj7" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- 3D Perspective Ground Grid -->
  <polygon points="60,380 740,380 660,310 140,310" fill="rgba(148,163,184,0.06)" stroke="#334155" stroke-width="1.5"/>
  <text x="80" y="405" fill="#94A3B8" font-family="sans-serif" font-size="14">3D Horizontal Ground</text>

  <!-- 3D Path Shadow -->
  <path d="M 100 350 Q 400 330 700 350" fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="6"/>

  <!-- Parabolic Trajectory Arc -->
  <path d="M 100 350 Q 400 30 700 350" fill="none" stroke="url(#projGrad7)" stroke-width="4.5" filter="url(#glowProj7)"/>

  <!-- Launch Point O -->
  <circle cx="100" cy="350" r="9" fill="#00E5FF"/>
  <text x="45" y="365" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Launch O</text>

  <!-- Initial Velocity Vector u at Angle θ -->
  <line x1="100" y1="350" x2="220" y2="210" stroke="#76FF03" stroke-width="4"/>
  <text x="230" y="210" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Initial Velocity u</text>

  <!-- Angle θ Arc -->
  <path d="M 160 350 A 60 60 0 0 0 145 300" fill="none" stroke="#FFD700" stroke-width="2.5"/>
  <text x="165" y="335" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">θ</text>

  <!-- Apex Point (Highest Point cy=190) -->
  <circle cx="400" cy="190" r="10" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>
  <text x="340" y="145" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">Apex (v_y = 0, v_x = u cos θ)</text>

  <!-- Maximum Height H Arrow -->
  <line x1="400" y1="190" x2="400" y2="350" stroke="#FF512F" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="410" y="270" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">H_max = u² sin²θ / 2g</text>

  <!-- Horizontal Range R -->
  <line x1="100" y1="365" x2="700" y2="365" stroke="#00E5FF" stroke-width="2"/>
  <line x1="100" y1="355" x2="100" y2="375" stroke="#00E5FF" stroke-width="2"/>
  <line x1="700" y1="355" x2="700" y2="375" stroke="#00E5FF" stroke-width="2"/>
  <text x="330" y="380" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">Range R = u² sin 2θ / g</text>

  <!-- Trajectory Equation Box Top Right (x=430, y=25, width=345, height=95) -->
  <rect x="430" y="25" width="345" height="95" rx="10" fill="rgba(142,45,226,0.18)" stroke="#8E2DE2" stroke-width="1.8"/>
  <text x="445" y="52" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">y = x tan θ - (g x²) / (2 u² cos² θ)</text>
  <text x="445" y="76" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">Time of Flight T = 2 u sin θ / g</text>
  <text x="445" y="98" fill="#00E5FF" font-family="sans-serif" font-size="13">• Parabolic Trajectory Law</text>
</svg>`;

// 3D SVG 8: 3D Uniform Circular Motion & Centripetal Acceleration (a_c = v^2 / r)
const svg8_3d_circular_motion = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="circGrad8" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="rgba(0, 229, 255, 0.2)"/>
      <stop offset="100%" stop-color="rgba(142, 45, 226, 0.05)"/>
    </radialGradient>
    <filter id="glowCirc8" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowRed8" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowGreen8" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left Side: 3D Circular Orbit (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. 3D Uniform Circular Path</text>

    <!-- 3D Elliptical Perspective Circle -->
    <ellipse cx="180" cy="220" rx="135" ry="75" fill="url(#circGrad8)" stroke="#00E5FF" stroke-width="2.5"/>

    <!-- Center Point O -->
    <circle cx="180" cy="220" r="7" fill="#FFFFFF"/>
    <text x="160" y="245" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Center O</text>

    <!-- Angular Velocity Vector ω (Vertical) -->
    <line x1="180" y1="220" x2="180" y2="70" stroke="#AB47BC" stroke-width="4" stroke-dasharray="6,4"/>
    <text x="195" y="80" fill="#AB47BC" font-family="sans-serif" font-size="16" font-weight="bold">ω (Angular Speed)</text>

    <!-- Object Particle P at Right Edge -->
    <circle cx="315" cy="220" r="14" fill="#FFD700" stroke="#FFFFFF" stroke-width="2" filter="url(#glowCirc8)"/>
    <text x="330" y="225" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Particle P</text>

    <!-- Radius Vector r -->
    <line x1="180" y1="220" x2="315" y2="220" stroke="#FFFFFF" stroke-width="2"/>
    <text x="235" y="210" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Radius r</text>

    <!-- Tangential Velocity Vector v (UPWARD) -->
    <line x1="315" y1="220" x2="315" y2="100" stroke="#76FF03" stroke-width="4.5" marker-end="url(#arrowGreen8)"/>
    <text x="325" y="120" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">v</text>

    <!-- Centripetal Acceleration Vector a_c (INWARD) -->
    <line x1="315" y1="220" x2="200" y2="220" stroke="#FF512F" stroke-width="4.5" marker-end="url(#arrowRed8)"/>
    <text x="220" y="245" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">a_c (Centripetal)</text>
  </g>

  <!-- Right Side: Circular Kinematics Summary Card (Width 360) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="360" height="410" rx="12" fill="rgba(15,23,42,0.9)" stroke="#8E2DE2" stroke-width="1.8"/>
    <text x="180" y="35" text-anchor="middle" fill="#8E2DE2" font-family="sans-serif" font-size="17" font-weight="bold">2. Circular Kinematics Laws</text>

    <rect x="15" y="60" width="330" height="75" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="165" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Linear vs Angular Velocity:</text>
    <text x="165" y="115" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">v = r ω &nbsp; (v = ω × r)</text>

    <rect x="15" y="150" width="330" height="85" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="165" y="175" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Centripetal Acceleration (a_c):</text>
    <text x="165" y="210" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">a_c = v² / r = r ω² = v ω</text>

    <rect x="15" y="250" width="330" height="85" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="165" y="275" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Centripetal Force (F_c):</text>
    <text x="165" y="310" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">F_c = m a_c = m v² / r</text>

    <text x="180" y="365" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">✓ Direction of a_c is ALWAYS inward toward center O!</text>
  </g>
</svg>`;


// Construct final Overview HTML for Chapter 2
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
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit II: Kinematics (Motion in a Straight Line & Motion in a Plane)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Kinematics:</b>
        <span style="color: #FFFFFF;">The branch of mechanics that describes the motion of objects without considering the forces causing the motion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Frame of Reference:</b>
        <span style="color: #FFFFFF;">A coordinate system combined with a clock relative to which the position, velocity, and acceleration of an object are measured.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Distance vs Displacement:</b>
        <span style="color: #FFFFFF;">Distance is total path length (scalar), whereas Displacement is the shortest straight-line distance from initial to final position (vector).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Instantaneous Velocity:</b>
        <span style="color: #FFFFFF;">The velocity of a body at a specific instant of time, defined as the derivative of position vector v = dx / dt.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Uniform Acceleration:</b>
        <span style="color: #FFFFFF;">Motion in which the velocity of an object changes by equal amounts in equal intervals of time.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Scalar vs Vector:</b>
        <span style="color: #FFFFFF;">Scalars possess only magnitude (e.g. Mass, Speed), while Vectors possess both magnitude and direction (e.g. Force, Velocity).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Unit Vector:</b>
        <span style="color: #FFFFFF;">A vector of unit magnitude (1) used purely to specify direction in space, defined as â = A / |A|.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Projectile Motion:</b>
        <span style="color: #FFFFFF;">Two-dimensional motion of an object projected into air under the sole influence of gravity near Earth's surface.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Scalar (Dot) Product:</b>
        <span style="color: #FFFFFF;">Product of magnitudes of two vectors and cosine of angle between them (A · B = |A||B| cos θ).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Centripetal Acceleration:</b>
        <span style="color: #FFFFFF;">Inward radial acceleration directed towards the center in uniform circular motion, a<sub>c</sub> = v<sup>2</sup> / r = r ω<sup>2</sup>.</span>
      </div>
    </div>
  </div>

  <!-- PART A: MOTION IN A STRAIGHT LINE -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">PART A: MOTION IN A STRAIGHT LINE</h1>

  <!-- SECTION 1: FRAME OF REFERENCE & RECTILINEAR MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">1. Frame of Reference & Motion in a Straight Line</h2>
  
  ${defCard("Frame of Reference", "A coordinate system (usually Cartesian x, y, z axes) along with a time-measuring clock attached to an observer, relative to which the motion of a physical body is observed and described.")}

  <p>Motion is a relative concept; an object at rest in one frame of reference may be moving relative to another. For instance, a passenger sitting inside a moving train is at rest relative to fellow passengers, but in motion relative to an observer standing on the railway platform.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Types of Frames of Reference</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Inertial Frame of Reference", "A frame of reference that is either at rest or moving with a uniform constant velocity (zero acceleration). Newton's laws of motion hold strictly true in an inertial frame.")}
    ${colonTopic("Non-Inertial Frame of Reference", "An accelerating or rotating frame of reference relative to an inertial frame. Newton's laws do not directly apply unless fictitious (pseudo) forces are introduced.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Position, Distance, and Displacement</h3>
  <p>In one-dimensional rectilinear motion along the x-axis, position is specified by coordinate x(t).</p>
  <div style="margin: 12px 0;">
    ${colonTopic("Distance (Scalar)", "The total length of the actual path traversed by an object during a given time interval. Distance is always positive or zero (Path Length ≥ 0).")}
    ${colonTopic("Displacement (Vector)", "The shortest directed straight-line distance from the initial position x<sub>1</sub> to the final position x<sub>2</sub>: Δx = x<sub>2</sub> - x<sub>1</sub>.")}
  </div>

  ${eqBox("<b>|Displacement| ≤ Total Distance</b> &nbsp; (Equality holds only for unidirectional straight-line motion)")}

  ${svg3DCardWrapper("Distance vs Displacement in 1D Rectilinear Motion", "3D Vector track comparing path length vs displacement vector Δx = x₂ - x₁ for an object turning back along a straight track.", svg1_3d_distance_displacement)}

  <!-- SECTION 2: CALCULUS IN KINEMATICS & INSTANTANEOUS VELOCITY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Elementary Concepts of Differentiation & Integration in Kinematics</h2>

  ${defCard("Instantaneous Velocity", "The limiting value of average velocity as the time interval Δt approaches zero, mathematically represented as the first derivative of position with respect to time.")}

  <p>Calculus provides the mathematical framework for describing non-uniform motion where velocity and acceleration change continuously over time.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Differentiation Formulations in Kinematics</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Instantaneous Velocity v(t)", singleLineCode("v(t) = limit (Δt → 0) [ Δx / Δt ] = dx / dt"))}
    ${colonTopic("Instantaneous Acceleration a(t)", singleLineCode("a(t) = dv / dt = d<sup>2</sup>x / dt<sup>2</sup> = v (dv / dx)"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Integration Formulations in Kinematics</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Velocity from Acceleration", singleLineCode("v(t) - u = ∫ [a dt] &nbsp; (from t<sub>1</sub> to t<sub>2</sub>)"))}
    ${colonTopic("Displacement from Velocity", singleLineCode("x(t) - x<sub>0</sub> = ∫ [v dt] &nbsp; (from t<sub>1</sub> to t<sub>2</sub>)"))}
  </div>

  ${svg3DCardWrapper("Calculus in Kinematics: Derivative Slope & Integral Area", "Dual-panel diagram illustrating dx/dt as slope of tangent to x-t curve and ∫v dt as shaded area under v-t curve.", svg2_3d_calculus_kinematics)}

  <!-- SECTION 3: UNIFORM & NON-UNIFORM MOTION & GRAPHS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Uniform vs Non-Uniform Motion & Kinematic Graphs</h2>

  ${defCard("Uniform Motion", "Motion in a straight line in which an object covers equal displacements in equal intervals of time, resulting in a constant velocity and zero acceleration.")}

  ${svg3DCardWrapper("Kinematic Graphs Reference Set (x-t, v-t, a-t Curves)", "4 3D perspective graph cards comparing Object at Rest, Uniform Velocity, Uniform Acceleration, and Uniform Retardation.", svg3_3d_kinematic_graphs_set)}

  <!-- SECTION 4: EQUATIONS OF UNIFORMLY ACCELERATED MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Kinematic Equations for Uniformly Accelerated Motion (Graphical Derivation)</h2>

  ${defCard("Uniformly Accelerated Motion", "Motion along a straight line in which acceleration a remains constant in magnitude and direction throughout the motion.")}

  <p>For an object moving with constant acceleration a, initial velocity u at t = 0, final velocity v at time t, and displacement s:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("First Equation of Motion", singleLineCode("v = u + a t"))}
    ${colonTopic("Second Equation of Motion", singleLineCode("s = u t + " + frac('1', '2') + " a t<sup>2</sup>"))}
    ${colonTopic("Third Equation of Motion", singleLineCode("v<sup>2</sup> - u<sup>2</sup> = 2 a s"))}
    ${colonTopic("Distance Traveled in n-th Second", singleLineCode("s<sub>n<sup>th</sup></sub> = u + " + frac('a', '2') + " (2 n - 1)"))}
  </div>

  ${svg3DCardWrapper("Graphical Derivation of Kinematic Equations of Motion", "3D Velocity-Time graph showing trapezoid area breakdown into rectangle (u·t) and triangle (1/2 a t²) to derive kinematic equations.", svg4_3d_graphical_derivation_kinematics)}

  <!-- PART B: MOTION IN A PLANE -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">PART B: MOTION IN A PLANE (VECTORS & 2D MOTION)</h1>

  <!-- SECTION 5: SCALARS, VECTORS & VECTOR ALGEBRA -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">5. Scalars, Vectors & Vector Algebra</h2>

  ${defCard("Vector Quantity", "A physical quantity that possesses both magnitude and a specific direction in space, and obeys the laws of vector addition (e.g. Displacement, Velocity, Force, Acceleration).")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Resolution of a Vector in a Plane (Rectangular Components)</h3>
  <p>Any 2D vector A making angle θ with the positive x-axis can be resolved into two mutually perpendicular rectangular components:</p>

  ${eqBox("<b>A = A<sub>x</sub> î + A<sub>y</sub> ĵ &nbsp;|&nbsp; |A| = √(A<sub>x</sub><sup>2</sup> + A<sub>y</sub><sup>2</sup>) &nbsp;|&nbsp; tan θ = " + frac('A<sub>y</sub>', 'A<sub>x</sub>') + "</b>")}

  ${svg3DCardWrapper("Resolution of Vector A into Rectangular Components", "3D Vector spatial plane showing vector A resolved into Ax = A cos θ along x-axis and Ay = A sin θ along y-axis.", svg5_3d_vector_resolution)}

  <!-- SECTION 6: VECTOR PRODUCTS: SCALAR (DOT) & VECTOR (CROSS) PRODUCTS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Scalar (Dot) and Vector (Cross) Product of Vectors</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Scalar Product (Dot Product)</h3>
  ${defCard("Scalar Product (A · B)", "The scalar quantity obtained by multiplying the magnitude of vector A, magnitude of vector B, and the cosine of the angle θ between them: A · B = |A||B| cos θ.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Vector Product (Cross Product)</h3>
  ${defCard("Vector Product (A × B)", "The vector quantity whose magnitude is equal to the product of magnitudes of A and B and sine of angle θ, pointing perpendicular to the plane of both vectors by Right-Hand Thumb Rule: A × B = |A||B| sin θ n̂.")}

  ${svg3DCardWrapper("3D Vector Multiplication: Dot Product vs Cross Product", "Dual-panel 3D diagram comparing Dot Product projection A · B vs Cross Product C = A × B bursting upward by Right-Hand Rule.", svg6_3d_dot_cross_products)}

  <!-- SECTION 7: PROJECTILE MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Projectile Motion in a Plane</h2>

  ${defCard("Projectile Motion", "The two-dimensional parabolic motion of a body projected into the air with an initial velocity u at an angle θ to the horizontal, moving under the sole influence of gravity.")}

  <div style="margin: 12px 0;">
    ${colonTopic("Time of Flight (T)", singleLineCode("T = " + frac('2 u sin θ', 'g')))}
    ${colonTopic("Maximum Height (H)", singleLineCode("H = " + frac('u<sup>2</sup> sin<sup>2</sup> θ', '2 g')))}
    ${colonTopic("Horizontal Range (R)", singleLineCode("R = " + frac('u<sup>2</sup> sin 2θ', 'g')))}
    ${colonTopic("Trajectory Equation", singleLineCode("y = x tan θ - " + frac('g x<sup>2</sup>', '2 u<sup>2</sup> cos<sup>2</sup> θ')))}
  </div>

  ${svg3DCardWrapper("Parabolic Trajectory of Projectile Motion", "Complete 3D parabolic trajectory curve showing projection angle θ, maximum height H, range R, and velocity components.", svg7_3d_projectile_motion)}

  <!-- SECTION 8: UNIFORM CIRCULAR MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Uniform Circular Motion</h2>

  ${defCard("Uniform Circular Motion", "Motion of a body along a circular path of fixed radius r at a constant speed v, during which direction of velocity continuously changes, creating a centripetal acceleration directed toward the center.")}

  <div style="margin: 12px 0;">
    ${colonTopic("Linear vs Angular Velocity", singleLineCode("v = r ω &nbsp; (v = ω × r)"))}
    ${colonTopic("Centripetal Acceleration (a<sub>c</sub>)", singleLineCode("a<sub>c</sub> = " + frac('v<sup>2</sup>', 'r') + " = r ω<sup>2</sup> = v ω"))}
    ${colonTopic("Centripetal Force (F<sub>c</sub>)", singleLineCode("F<sub>c</sub> = m a<sub>c</sub> = " + frac('m v<sup>2</sup>', 'r') + " = m r ω<sup>2</sup>"))}
  </div>

  ${svg3DCardWrapper("Uniform Circular Motion & Centripetal Acceleration Vector", "3D Circular orbit plane illustrating tangential velocity v, inward radial centripetal acceleration a_c, and vertical angular velocity ω.", svg8_3d_circular_motion)}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Vector Identities & Kinematic Equations Summary for Unit II</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• 1D Motion Equations:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v = u + a t &nbsp;|&nbsp; s = u t + ` + frac('1', '2') + ` a t<sup>2</sup><br>v<sup>2</sup> - u<sup>2</sup> = 2 a s &nbsp;|&nbsp; s<sub>n<sup>th</sup></sub> = u + ` + frac('a', '2') + ` (2 n - 1)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Vector Resolution & Magnitude:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">A = A<sub>x</sub> î + A<sub>y</sub> ĵ &nbsp;|&nbsp; |A| = √(A<sub>x</sub><sup>2</sup> + A<sub>y</sub><sup>2</sup>)<br>tan θ = ` + frac('A<sub>y</sub>', 'A<sub>x</sub>') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Vector Products:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Dot Product: A · B = |A||B| cos θ<br>Cross Product: |A × B| = |A||B| sin θ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Projectile Motion Formulae:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">T = ` + frac('2 u sin θ', 'g') + ` &nbsp;|&nbsp; H = ` + frac('u<sup>2</sup> sin<sup>2</sup> θ', '2 g') + `<br>R = ` + frac('u<sup>2</sup> sin 2θ', 'g') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Circular Kinematics:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v = r ω &nbsp;|&nbsp; a<sub>c</sub> = ` + frac('v<sup>2</sup>', 'r') + ` = r ω<sup>2</sup><br>F<sub>c</sub> = ` + frac('m v<sup>2</sup>', 'r') + `</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Read existing Solutions HTML from client/data/content/c11-phy-2.ts
const existingContent = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-2.ts'), 'utf8');

const solStartIdx = existingContent.indexOf('export const c11Phy2HtmlSolutions =');
if (solStartIdx === -1) {
  console.error("Could not find c11Phy2HtmlSolutions in c11-phy-2.ts");
  process.exit(1);
}

const solutionsPartCode = existingContent.substring(solStartIdx);

const overviewHtml = generateFullOverviewHtml();

const tsContent = `// Class 11 Physics Unit II: Kinematics (Motion in a Straight Line & Motion in a Plane)
// High-Level Reference Book Content & NCERT Solutions (8 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy2HtmlOverview = ${JSON.stringify(overviewHtml)};

${solutionsPartCode}
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-2.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote updated c11-phy-2.ts with fixed 3D SVG diagrams to " + outputPath);
