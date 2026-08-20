const fs = require('fs');
const path = require('path');

const themeColor = "#00E5FF"; // Primary theme color for Class 11 Physics Unit X (Oscillations and Waves)

// Clean compact inline stacked fraction helper
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 229, 255, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(0, 229, 255, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
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
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(0, 229, 255, 0.25);">
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

// ==================== 8 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 10 ====================

// 3D SVG 1: Simple Harmonic Motion Reference Circle & Phase Diagram
const svg1_3d_shm_reference_circle = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="refGrad1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
  </defs>

  <!-- Left Side: Reference Circle (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Reference Circle &amp; S.H.M Projection</text>

    <!-- Reference Circle -->
    <circle cx="180" cy="210" r="110" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="2"/>
    <line x1="70" y1="210" x2="290" y2="210" stroke="#475569" stroke-width="2"/>
    <line x1="180" y1="100" x2="180" y2="320" stroke="#475569" stroke-width="2"/>

    <!-- Rotating Vector OP -->
    <line x1="180" y1="210" x2="255" y2="135" stroke="#76FF03" stroke-width="3.5"/>
    <circle cx="255" cy="135" r="9" fill="url(#refGrad1)"/>
    <text x="268" y="130" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">P (t)</text>

    <!-- Projection P' on X axis -->
    <line x1="255" y1="135" x2="255" y2="210" stroke="#FFD700" stroke-dasharray="3,3" stroke-width="2"/>
    <circle cx="255" cy="210" r="7" fill="#FFD700"/>
    <text x="250" y="235" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">x(t) = A cos(ωt + φ)</text>

    <text x="182" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Phase Angle Φ = ω t + φ₀</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: S.H.M Equations Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. S.H.M Equations of Motion</text>

    <rect x="10" y="60" width="345" height="100" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Displacement &amp; Velocity:</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">x(t) = A cos(ω t + φ)</text>
    <text x="182" y="145" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="15.5">v(t) = ± ω √(A² - x²)</text>

    <rect x="10" y="175" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="200" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Acceleration &amp; Differential Eq:</text>
    <text x="182" y="235" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">a(t) = - ω² x &nbsp;|&nbsp; d²x/dt² + ω² x = 0</text>

    <rect x="10" y="300" width="345" height="115" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="325" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Time Period &amp; Frequency:</text>
    <text x="182" y="358" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">T = 2π / ω = 1 / ν &nbsp;|&nbsp; ω = 2π ν</text>
  </g>
</svg>`;

// 3D SVG 2: Loaded Spring Mass System & Series/Parallel Springs
const svg2_3d_loaded_spring = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="blockGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>

  <!-- Left Side: Horizontal Loaded Spring (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Horizontal Spring-Mass Oscillator</text>

    <!-- Rigid Wall -->
    <rect x="40" y="100" width="15" height="160" fill="#475569"/>

    <!-- Helical Spring -->
    <path d="M 55 180 Q 75 160 95 180 T 135 180 T 175 180 T 215 180" fill="none" stroke="#00E5FF" stroke-width="3.5"/>

    <!-- Mass Block m -->
    <rect x="215" y="140" width="80" height="80" rx="8" fill="url(#blockGrad2)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="255" y="185" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Mass m</text>

    <line x1="255" y1="230" x2="255" y2="280" stroke="#76FF03" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="255" y="300" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Displacement x →</text>

    <text x="182" y="375" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Restoring Force F = - k x</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Spring Combinations & Period Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. Loaded Spring Period &amp; Combinations</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Spring Time Period T:</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">T = 2π √(m / k)</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Springs in Series:</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">1 / k_eq = 1/k₁ + 1/k₂</text>
    <text x="182" y="255" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ Equivalent stiffness decreases in series!</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Springs in Parallel:</text>
    <text x="182" y="348" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">k_eq = k₁ + k₂</text>
    <text x="182" y="380" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Cutting spring in half doubles force constant k!</text>
  </g>
</svg>`;

// 3D SVG 3: Simple Pendulum Oscillation Geometry & Restoring Force
const svg3_3d_simple_pendulum = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="bobGrad3" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="40%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#D4AC0D"/>
    </radialGradient>
  </defs>

  <!-- Left Side: Simple Pendulum Geometry (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Simple Pendulum Force Vector Diagram</text>

    <!-- Rigid Ceiling -->
    <rect x="110" y="60" width="140" height="12" fill="#475569"/>

    <!-- Vertical Mean Line -->
    <line x1="180" y1="72" x2="180" y2="330" stroke="#475569" stroke-dasharray="4,4" stroke-width="2"/>

    <!-- String Length L at angle θ -->
    <line x1="180" y1="72" x2="260" y2="260" stroke="#00E5FF" stroke-width="3"/>
    <text x="230" y="160" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Length L</text>

    <!-- Pendulum Bob mass m -->
    <circle cx="260" cy="260" r="18" fill="url(#bobGrad3)"/>

    <!-- Forces: Weight mg, Tension T, Restoring mg sinθ -->
    <line x1="260" y1="260" x2="260" y2="340" stroke="#FF512F" stroke-width="3"/>
    <text x="270" y="330" fill="#FF512F" font-family="sans-serif" font-size="13.5" font-weight="bold">mg</text>

    <line x1="260" y1="260" x2="200" y2="280" stroke="#76FF03" stroke-width="3"/>
    <text x="130" y="300" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">mg sinθ (Restoring)</text>

    <text x="182" y="380" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Small Angle Approximation: sinθ ≈ θ = x/L</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Pendulum Time Period Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. Simple Pendulum Time Period</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Pendulum Period Formula (T):</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">T = 2π √(L / g)</text>

    <rect x="10" y="165" width="345" height="120" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Seconds Pendulum (T = 2 Seconds):</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Length L ≈ 0.993 m ≈ 1 Meter</text>
    <text x="182" y="255" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ Independent of bob mass m and amplitude θ!</text>

    <rect x="10" y="295" width="345" height="115" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="320" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Factors Affecting Pendulum Period:</text>
    <text x="25" y="348" fill="#FFFFFF" font-family="sans-serif" font-size="13">• In accelerating elevator: T = 2π √(L / (g ± a))</text>
    <text x="25" y="370" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Inside orbiting satellite (g_eff = 0): T = ∞</text>
  </g>
</svg>`;

// 3D SVG 4: Energy Breakdown in S.H.M (Ek, U, Etotal Graphs)
const svg4_3d_shm_energy = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Left Side: Energy Graphs (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Energy vs Displacement Graph in S.H.M</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="190" y1="330" x2="190" y2="70" stroke="#475569" stroke-width="2"/>
    <text x="335" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Displacement x</text>

    <!-- Total Energy E Line (Constant) -->
    <line x1="70" y1="110" x2="310" y2="110" stroke="#FFD700" stroke-width="3"/>
    <text x="190" y="95" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Total E = ½ k A²</text>

    <!-- Potential Energy Parabola U(x) = 1/2 k x² -->
    <path d="M 70 110 Q 190 330 310 110" fill="none" stroke="#FF512F" stroke-width="3.5"/>
    <text x="260" y="190" fill="#FF512F" font-family="sans-serif" font-size="13.5" font-weight="bold">U = ½ k x²</text>

    <!-- Kinetic Energy Parabola Ek(x) = 1/2 k (A² - x²) -->
    <path d="M 70 330 Q 190 110 310 330" fill="none" stroke="#76FF03" stroke-width="3.5"/>
    <text x="190" y="150" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">E_k = ½ k (A² - x²)</text>

    <text x="70" y="350" fill="#94A3B8" font-family="sans-serif" font-size="13">-A</text>
    <text x="190" y="350" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">0</text>
    <text x="310" y="350" fill="#94A3B8" font-family="sans-serif" font-size="13">+A</text>

    <text x="182" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">At x = ± A / √2 :  E_k = U = ½ E_total</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Energy Formulae Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. S.H.M Energy Conversions</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Kinetic Energy (E_k):</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">E_k = ½ m ω² (A² - x²)</text>

    <rect x="10" y="165" width="345" height="90" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Potential Energy (U):</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">U = ½ m ω² x² = ½ k x²</text>

    <rect x="10" y="270" width="345" height="140" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="295" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Total Mechanical Energy (E):</text>
    <text x="182" y="330" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">E = E_k + U = ½ m ω² A²</text>
    <text x="182" y="365" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Average E_k = Average U = ¼ m ω² A²</text>
    <text x="182" y="390" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">• Total energy E is strictly conserved and independent of x!</text>
  </g>
</svg>`;

// 3D SVG 5: Transverse vs Longitudinal Progressive Waves
const svg5_3d_transverse_longitudinal_waves = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="waveGrad5" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="50%" stop-color="#76FF03"/>
      <stop offset="100%" stop-color="#00E5FF"/>
    </linearGradient>
  </defs>

  <!-- Left Side: Transverse & Longitudinal Wave Profiles (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Transverse vs Longitudinal Wave Types</text>

    <!-- Transverse Wave Profile -->
    <path d="M 40 120 Q 100 40 160 120 T 280 120 T 330 120" fill="none" stroke="url(#waveGrad5)" stroke-width="3.5"/>
    <text x="100" y="55" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Crest</text>
    <text x="220" y="170" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">Trough</text>
    <text x="182" y="195" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5">Transverse: Vibration ⊥ Propagation</text>

    <!-- Longitudinal Wave Profile (Compressions & Rarefactions) -->
    <rect x="40" y="240" width="40" height="40" fill="rgba(0,229,255,0.4)"/>
    <rect x="80" y="240" width="80" height="40" fill="rgba(0,229,255,0.1)"/>
    <rect x="160" y="240" width="40" height="40" fill="rgba(0,229,255,0.4)"/>
    <rect x="200" y="240" width="80" height="40" fill="rgba(0,229,255,0.1)"/>

    <text x="60" y="300" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Comp C</text>
    <text x="120" y="300" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">Rare R</text>
    <text x="182" y="335" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5">Longitudinal: Vibration ∥ Propagation</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Progressive Wave Formulae Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. Progressive Wave Displacement</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Travelling Wave Equation:</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">y(x,t) = A sin(k x - ω t + φ)</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Wavenumber k &amp; Wave Speed v:</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">k = 2π / λ &nbsp;|&nbsp; v = ν λ = ω / k</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Speeds in Mediums:</text>
    <text x="25" y="343" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Stretched String: v = √(T / μ)</text>
    <text x="25" y="365" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Laplace Gas Speed: v = √(γ P / ρ)</text>
  </g>
</svg>`;

// 3D SVG 6: Reflection of Waves at Rigid vs Free Boundary
const svg6_3d_wave_reflection = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Left Side: Reflection Diagrams (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Reflection at Rigid vs Free Boundary</text>

    <!-- Rigid Fixed Boundary (Phase Change π) -->
    <rect x="310" y="60" width="15" height="140" fill="#475569"/>
    <path d="M 50 110 Q 110 50 170 110" fill="none" stroke="#76FF03" stroke-width="3"/>
    <text x="110" y="130" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Incident Crest →</text>
    <path d="M 180 150 Q 240 210 300 150" fill="none" stroke="#FF512F" stroke-width="3"/>
    <text x="220" y="130" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">← Reflected Trough</text>
    <text x="182" y="215" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Rigid End: 180° (π) Phase Flip!</text>

    <!-- Free Ring Boundary (No Phase Change) -->
    <line x1="315" y1="240" x2="315" y2="360" stroke="#94A3B8" stroke-width="4"/>
    <circle cx="315" cy="300" r="8" fill="none" stroke="#00E5FF" stroke-width="3"/>
    <path d="M 50 300 Q 110 240 170 300" fill="none" stroke="#76FF03" stroke-width="3"/>
    <path d="M 180 300 Q 240 240 300 300" fill="none" stroke="#00E5FF" stroke-width="3"/>
    <text x="182" y="380" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Free End: Zero Phase Change (0°)</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Wave Reflection Summary Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. Superposition &amp; Boundary Laws</text>

    <rect x="10" y="60" width="345" height="100" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Reflected Wave at Rigid End:</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">y_r = - A sin(k x + ω t)</text>

    <rect x="10" y="175" width="345" height="100" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="200" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Reflected Wave at Free End:</text>
    <text x="182" y="235" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">y_r = + A sin(k x + ω t)</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Principle of Superposition:</text>
    <text x="182" y="348" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">y_net(x,t) = y₁(x,t) + y₂(x,t)</text>
  </g>
</svg>`;

// 3D SVG 7: Standing Waves in Strings and Organ Pipes (Nodes & Antinodes)
const svg7_3d_standing_waves_organ_pipes = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Left Side: Standing Wave Loops (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Standing Wave Harmonics (Nodes &amp; Antinodes)</text>

    <!-- Fundamental Mode (1 Loop) -->
    <line x1="40" y1="100" x2="320" y2="100" stroke="#475569" stroke-width="2"/>
    <path d="M 40 100 Q 180 50 320 100 Q 180 150 40 100" fill="none" stroke="#76FF03" stroke-width="3"/>
    <circle cx="40" cy="100" r="5" fill="#FF512F"/>
    <circle cx="320" cy="100" r="5" fill="#FF512F"/>
    <text x="40" y="125" fill="#FF512F" font-family="sans-serif" font-size="12">Node N</text>
    <text x="180" y="80" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Antinode A</text>
    <text x="320" y="125" fill="#FF512F" font-family="sans-serif" font-size="12">Node N</text>

    <!-- 2nd Harmonic (2 Loops) -->
    <path d="M 40 250 Q 110 200 180 250 Q 250 200 320 250" fill="none" stroke="#00E5FF" stroke-width="2.5"/>
    <path d="M 40 250 Q 110 300 180 250 Q 250 300 320 250" fill="none" stroke="#00E5FF" stroke-width="2.5"/>

    <text x="182" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Distance Node to Node = λ / 2  |  Node to Antinode = λ / 4</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Organ Pipes Harmonics Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. Organ Pipes Frequency Laws</text>

    <rect x="10" y="60" width="345" height="110" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Open Organ Pipe (Both Ends Open):</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">f_n = n (v / 2L) &nbsp; (n = 1, 2, 3...)</text>
    <text x="182" y="148" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">✓ ALL harmonics (even &amp; odd) are present!</text>

    <rect x="10" y="185" width="345" height="120" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="210" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Closed Organ Pipe (One End Closed):</text>
    <text x="182" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">f_n = (2n - 1) (v / 4L) &nbsp; (n = 1, 2...)</text>
    <text x="182" y="278" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13">✓ ONLY ODD harmonics (1, 3, 5...) are present!</text>

    <rect x="10" y="315" width="345" height="100" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="340" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Standing Wave Equation:</text>
    <text x="182" y="372" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">y(x,t) = 2 A sin(k x) cos(ω t)</text>
  </g>
</svg>`;

// 3D SVG 8: Beats Phenomenon & Envelope Waveform (fb = |f1 - f2|)
const svg8_3d_beats_phenomenon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="beatGrad8" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="50%" stop-color="#FF512F"/>
      <stop offset="100%" stop-color="#76FF03"/>
    </linearGradient>
  </defs>

  <!-- Left Side: Beats Modulation Envelope (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Beats Modulated Waveform &amp; Envelope</text>

    <!-- Center Line -->
    <line x1="40" y1="200" x2="330" y2="200" stroke="#475569" stroke-width="2"/>

    <!-- Beat Envelope Top & Bottom -->
    <path d="M 40 200 Q 115 100 190 200 Q 265 100 330 200" fill="none" stroke="#FFD700" stroke-dasharray="4,4" stroke-width="2"/>
    <path d="M 40 200 Q 115 300 190 200 Q 265 300 330 200" fill="none" stroke="#FFD700" stroke-dasharray="4,4" stroke-width="2"/>

    <!-- High Frequency Wave Inside Envelope -->
    <path d="M 40 200 Q 60 160 80 200 Q 100 240 120 200 Q 140 160 160 200 Q 180 240 190 200 Q 210 160 230 200 Q 250 240 270 200 Q 290 160 310 200 Q 320 220 330 200" fill="none" stroke="url(#beatGrad8)" stroke-width="3"/>

    <circle cx="115" cy="150" r="6" fill="#76FF03"/>
    <text x="115" y="130" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Waxing (Max Sound)</text>

    <circle cx="190" cy="200" r="6" fill="#FF512F"/>
    <text x="190" y="225" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">Waning (Min Sound)</text>

    <text x="182" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Beat Period T_b = 1 / f_b = 1 / |f₁ - f₂|</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Beats Equations Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. Beats Frequency &amp; Applications</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Beat Frequency Formula (f_b):</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">f_b = | f₁ - f₂ |</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Persistence of Hearing Limit:</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">f_b ≤ 10 Beats / Second</text>
    <text x="182" y="255" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ Human ear can distinguish beats if f_b ≤ 10 Hz!</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Applications of Beats:</text>
    <text x="25" y="343" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Tuning musical instruments (piano, violin, sitar)</text>
    <text x="25" y="365" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Determining unknown frequency of a tuning fork</text>
  </g>
</svg>`;

// Construct final Overview HTML for Chapter 10 (100% Exact Official NCERT Syllabus Section Headings)
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
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit X: Oscillations and Waves</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Simple Harmonic Motion (S.H.M):</b>
        <span style="color: #FFFFFF;">To-and-fro oscillatory motion in which restoring force is directly proportional to displacement and acts towards mean position: F = -k x.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Time Period & Frequency:</b>
        <span style="color: #FFFFFF;">Time Period T is time taken for one full oscillation. Frequency ν = 1/T is number of oscillations per second (Hz).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Phase (Φ):</b>
        <span style="color: #FFFFFF;">The physical state of an oscillating particle regarding its instantaneous position and direction of motion: Φ = ω t + φ₀.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Simple Pendulum Period:</b>
        <span style="color: #FFFFFF;">Time period of small-angle pendulum oscillations: T = 2π √(L/g). Independent of bob mass m.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Total Energy in S.H.M:</b>
        <span style="color: #FFFFFF;">Sum of Kinetic and Potential energies: E = E_k + U = 1/2 m ω<sup>2</sup> A<sup>2</sup> = 1/2 k A<sup>2</sup> = Constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Transverse vs Longitudinal Waves:</b>
        <span style="color: #FFFFFF;">Transverse: Particle vibration ⊥ wave direction (crests/troughs). Longitudinal: Vibration ∥ direction (compressions/rarefactions).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Progressive Wave Equation:</b>
        <span style="color: #FFFFFF;">y(x,t) = A sin(k x - ω t + φ₀), where k = 2π/λ is wavenumber and wave speed v = ν λ = ω / k.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Superposition Principle:</b>
        <span style="color: #FFFFFF;">Resultant displacement of two overlapping waves is vector sum of individual displacements: y(x,t) = y₁(x,t) + y₂(x,t).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Standing Waves & Nodes:</b>
        <span style="color: #FFFFFF;">Interference of two identical counter-propagating waves. Nodes are zero amplitude points; Antinodes are maximum amplitude points.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Beats Phenomenon:</b>
        <span style="color: #FFFFFF;">Periodic waxing and waning of sound intensity produced by superposition of two waves of close frequencies: f_b = \|f₁ - f₂\|.</span>
      </div>
    </div>
  </div>

  <!-- PART A: OSCILLATIONS -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">PART A: OSCILLATIONS</h1>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">1. Periodic Motion, Time Period, Frequency and Periodic Functions</h2>
  ${defCard("Periodic Motion", "Motion that repeats itself at regular intervals of time T. Oscillatory motion is a bounded periodic motion about a mean equilibrium position.")}
  <p>A periodic function satisfies f(t + T) = f(t). The simplest harmonic periodic functions are sine and cosine functions: y(t) = A sin(ω t + φ₀).</p>

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Simple Harmonic Motion (S.H.M), Equations of Motion and Phase</h2>
  ${defCard("Simple Harmonic Motion (S.H.M)", "A special type of periodic oscillatory motion in which restoring force F is proportional to displacement x and acts towards mean position: F = -k x.")}
  ${eqBox("<b>x(t) = A cos(ω t + φ) &nbsp;|&nbsp; v(t) = ± ω √(A<sup>2</sup> - x<sup>2</sup>) &nbsp;|&nbsp; a(t) = - ω<sup>2</sup> x &nbsp;|&nbsp; " + frac('d<sup>2</sup>x', 'dt<sup>2</sup>') + " + ω<sup>2</sup> x = 0</b>")}
  ${svg3DCardWrapper("Simple Harmonic Motion (S.H.M) Reference Circle & Phase Diagram", "Uniform circular motion projection on X axis generating S.H.M displacement x(t) = A cos(ωt+φ) and phase angle Φ.", svg1_3d_shm_reference_circle)}

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Oscillations of a Loaded Spring and Simple Pendulum</h2>
  ${defCard("Loaded Spring & Simple Pendulum", "Spring Period T = 2π √(m/k). Simple Pendulum Period T = 2π √(L/g), independent of bob mass m.")}
  ${eqBox("<b>Spring T = 2π √(" + frac('m', 'k') + ") &nbsp;|&nbsp; Pendulum T = 2π √(" + frac('L', 'g') + ") &nbsp;|&nbsp; Series k<sub>eq</sub> = " + frac('k<sub>1</sub> k<sub>2</sub>', 'k<sub>1</sub> + k<sub>2</sub>') + " &nbsp;|&nbsp; Parallel k<sub>eq</sub> = k<sub>1</sub> + k<sub>2</sub></b>")}
  ${svg3DCardWrapper("Loaded Spring Mass System & Series/Parallel Springs", "Horizontal spring mass m oscillator, Hooke's restoring force F = -kx, and series vs parallel stiffness rules.", svg2_3d_loaded_spring)}
  ${svg3DCardWrapper("Simple Pendulum Oscillation Geometry & Restoring Force", "Pendulum bob force resolution (mg sinθ restoring component) deriving small-angle time period T = 2π √(L/g).", svg3_3d_simple_pendulum)}

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Energy in S.H.M. Kinetic and Potential Energies</h2>
  ${defCard("Energy Conservation in S.H.M", "Kinetic E_k = 1/2 k (A<sup>2</sup> - x<sup>2</sup>) and Potential U = 1/2 k x<sup>2</sup> sum to a constant total energy E = 1/2 k A<sup>2</sup>.")}
  ${eqBox("<b>E<sub>k</sub> = " + frac('1', '2') + " m ω<sup>2</sup> (A<sup>2</sup> - x<sup>2</sup>) &nbsp;|&nbsp; U = " + frac('1', '2') + " m ω<sup>2</sup> x<sup>2</sup> &nbsp;|&nbsp; E<sub>total</sub> = " + frac('1', '2') + " m ω<sup>2</sup> A<sup>2</sup> = Const</b>")}
  ${svg3DCardWrapper("Energy Breakdown in S.H.M (E_k, U, E_total Graphs)", "Parabolic energy curves E_k(x) and U(x) intersecting at x = ± A / √2 with constant total energy line E = 1/2 k A².", svg4_3d_shm_energy)}

  <!-- PART B: WAVES -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">PART B: WAVES</h1>

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">5. Wave Motion, Transverse and Longitudinal Waves & Speed of Travelling Wave</h2>
  ${defCard("Transverse & Longitudinal Waves", "Transverse: Medium particle vibration ⊥ wave propagation. Longitudinal: Particle vibration ∥ wave propagation.")}
  ${eqBox("<b>String Speed: v = √(" + frac('T', 'μ') + ") &nbsp;|&nbsp; Laplace Sound Speed: v = √(" + frac('γ P', 'ρ') + ")</b>")}
  ${svg3DCardWrapper("Transverse vs Longitudinal Progressive Waves", "Crests and Troughs of Transverse wave vs Compressions and Rarefactions of Longitudinal wave.", svg5_3d_transverse_longitudinal_waves)}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Displacement Relation for a Progressive Wave & Principle of Superposition</h2>
  ${defCard("Progressive Wave Equation", "Displacement relation y(x,t) = A sin(k x - ω t + φ₀) representing a wave travelling in +x direction.")}
  ${eqBox("<b>y(x,t) = A sin(k x - ω t + φ<sub>0</sub>) &nbsp;|&nbsp; k = " + frac('2π', 'λ') + " &nbsp;|&nbsp; v = ν λ = " + frac('ω', 'k') + "</b>")}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Reflection of Waves, Standing Waves in Strings and Organ Pipes</h2>
  ${defCard("Standing Waves & Organ Pipes", "Open Pipe: f_n = n (v / 2L) (all harmonics). Closed Pipe: f_n = (2n - 1) (v / 4L) (odd harmonics only).")}
  ${eqBox("<b>Open Pipe: f<sub>n</sub> = n ( " + frac('v', '2L') + " ) &nbsp;|&nbsp; Closed Pipe: f<sub>n</sub> = (2n - 1) ( " + frac('v', '4L') + " )</b>")}
  ${svg3DCardWrapper("Reflection of Waves at Rigid vs Free Boundary", "Incident wave pulse reflecting with 180° (π) phase flip at rigid boundary vs 0° phase shift at free boundary.", svg6_3d_wave_reflection)}
  ${svg3DCardWrapper("Standing Waves in Strings and Organ Pipes (Nodes & Antinodes)", "Standing wave harmonic loops showing Nodes N and Antinodes A in stretched strings and organ pipes.", svg7_3d_standing_waves_organ_pipes)}

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Beats and Harmonics</h2>
  ${defCard("Beats Phenomenon", "Periodic variation in intensity of sound produced when two sound waves of slightly different frequencies superpose: f_b = \|f₁ - f₂\|.")}
  ${eqBox("<b>Beat Frequency: f<sub>b</sub> = | f<sub>1</sub> - f<sub>2</sub> | &nbsp;|&nbsp; Beat Period: T<sub>b</sub> = " + frac('1', '| f<sub>1</sub> - f<sub>2</sub> |') + " &nbsp; (f<sub>b</sub> ≤ 10 Hz for human ear)</b>")}
  ${svg3DCardWrapper("Beats Phenomenon & Envelope Waveform (f_b = |f₁ - f₂|)", "Waxing and waning modulated sound envelope waveform with beat frequency f_b = |f1 - f2|.", svg8_3d_beats_phenomenon)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Oscillations, Organ Pipes & Wave Motion Summary for Unit X</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• S.H.M Displacement &amp; Speed:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">x(t) = A cos(ω t + φ)<br>v = ± ω √(A<sup>2</sup> - x<sup>2</sup>) &nbsp;|&nbsp; a = - ω<sup>2</sup> x</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Oscillator Time Periods:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Spring T = 2π √(` + frac('m', 'k') + `)<br>Pendulum T = 2π √(` + frac('L', 'g') + `)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Total S.H.M Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">E<sub>k</sub> = ` + frac('1', '2') + ` m ω<sup>2</sup> (A<sup>2</sup> - x<sup>2</sup>)<br>U = ` + frac('1', '2') + ` m ω<sup>2</sup> x<sup>2</sup> &nbsp;|&nbsp; E = ` + frac('1', '2') + ` k A<sup>2</sup></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Progressive Wave Equation:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">y(x,t) = A sin(k x - ω t + φ<sub>0</sub>)<br>k = ` + frac('2π', 'λ') + ` &nbsp;|&nbsp; v = ν λ = ` + frac('ω', 'k') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Organ Pipe Frequencies:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Open: f<sub>n</sub> = n (` + frac('v', '2L') + `) (All harmonics)<br>Closed: f<sub>n</sub> = (2n-1) (` + frac('v', '4L') + `) (Odd harmonics)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Beats &amp; Wave Speed:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">f<sub>b</sub> = |f<sub>1</sub> - f<sub>2</sub>|<br>String v = √(` + frac('T', 'μ') + `) &nbsp;|&nbsp; Sound v = √(` + frac('γ P', 'ρ') + `)</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate 100 Textbook Standard Solutions (25 MCQs, 30 VSAs, 30 SAs, 15 LAs) for Chapter 10
function generateFullSolutionsHtml() {
  let html = `<style>
    p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) { text-align: justify !important; }
    h1, h2, h3, h4, h5, h6 { text-align: left; }
    .text-center { text-align: center !important; }
  </style>
  <div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 10px;">NCERT & Textbook Standard Exercise Solutions — Unit X: Oscillations and Waves</h1>`;

  // 1. SECTION 1: 25 MCQs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">SECTION 1: MULTIPLE CHOICE QUESTIONS (MCQs 1 - 25)</h2>`;

  const mcqQuestions = [
    { q: "In Simple Harmonic Motion (S.H.M), restoring force F is proportional to:", opts: ["(a) Displacement x", "(b) Square of displacement x²", "(c) Velocity v", "(d) Time period T"], ans: "(a)", exp: "By definition of S.H.M, F = -k x, so restoring force is proportional to displacement x." },
    { q: "The acceleration of a particle executing S.H.M at displacement x is:", opts: ["(a) +ω x", "(b) -ω² x", "(c) -ω x²", "(d) +ω² x²"], ans: "(b)", exp: "Differential equation of S.H.M gives a = -ω² x." },
    { q: "The maximum velocity of a particle executing S.H.M of amplitude A and angular frequency ω is:", opts: ["(a) ω A²", "(b) ω A", "(c) ω² A", "(d) ω / A"], ans: "(b)", exp: "v = ω √(A² - x²). Maximum velocity occurs at mean position (x=0), so v_max = ω A." },
    { q: "At what displacement x from mean position is kinetic energy equal to potential energy in S.H.M?", opts: ["(a) x = ± A", "(b) x = ± A / 2", "(c) x = ± A / √2", "(d) x = 0"], ans: "(c)", exp: "½ k (A² - x²) = ½ k x² ⇒ A² - x² = x² ⇒ 2 x² = A² ⇒ x = ± A / √2." },
    { q: "The total mechanical energy of a simple harmonic oscillator of amplitude A is proportional to:", opts: ["(a) A", "(b) A²", "(c) 1/A", "(d) √A"], ans: "(b)", exp: "Total energy E = ½ m ω² A² ∝ A²." },
    { q: "The time period of a simple pendulum of length L is:", opts: ["(a) T = 2π √(g / L)", "(b) T = 2π √(L / g)", "(c) T = ½π √(L / g)", "(d) T = 2π L / g"], ans: "(b)", exp: "T = 2π √(L / g)." },
    { q: "If the length of a simple pendulum is increased by 44%, its time period increases by:", opts: ["(a) 20%", "(b) 44%", "(c) 22%", "(d) 10%"], ans: "(a)", exp: "T ∝ √L. T'/T = √(1.44) = 1.20, representing a 20% increase." },
    { q: "A seconds pendulum has a time period of:", opts: ["(a) 1 second", "(b) 2 seconds", "(c) 0.5 second", "(d) 4 seconds"], ans: "(b)", exp: "A seconds pendulum takes 1 second to swing from one extreme to another, so its full period T = 2 s." },
    { q: "When a spring of force constant k is cut into two equal halves, force constant of each half becomes:", opts: ["(a) k / 2", "(b) k", "(c) 2 k", "(d) 4 k"], ans: "(c)", exp: "Force constant k ∝ 1/L. Halving the length doubles the stiffness to 2k." },
    { q: "Two springs of force constants k₁ and k₂ are connected in parallel. Equivalent force constant is:", opts: ["(a) k₁ + k₂", "(b) k₁ k₂ / (k₁ + k₂)", "(c) k₁ - k₂", "(d) √(k₁ k₂)"], ans: "(a)", exp: "For parallel springs, equivalent spring constant k_eq = k₁ + k₂." },
    { q: "In a progressive wave y(x,t) = A sin(k x - ω t), wave speed v is equal to:", opts: ["(a) ω k", "(b) ω / k", "(c) k / ω", "(d) 1 / (ω k)"], ans: "(b)", exp: "Wave velocity v = ν λ = (ω / 2π) (2π / k) = ω / k." },
    { q: "Phase difference Δφ between two points separated by path difference Δx is:", opts: ["(a) Δφ = (2π / λ) Δx", "(b) Δφ = (λ / 2π) Δx", "(c) Δφ = 2π λ Δx", "(d) Δφ = π Δx"], ans: "(a)", exp: "Phase difference Δφ = k Δx = (2π / λ) Δx." },
    { q: "Speed of sound in a gas according to Laplace correction is:", opts: ["(a) v = √(P / ρ)", "(b) v = √(γ P / ρ)", "(c) v = √(ρ / P)", "(d) v = γ P / ρ"], ans: "(b)", exp: "Laplace corrected sound speed for adiabatic compression is v = √(γ P / ρ)." },
    { q: "When a wave reflects from a rigid boundary, phase change introduced is:", opts: ["(a) 0", "(b) π / 2", "(c) π (180°)", "(d) 2π"], ans: "(c)", exp: "Reflection at a fixed/rigid boundary introduces a phase inversion of π radians (180°)." },
    { q: "In a standing wave, the distance between two consecutive nodes is:", opts: ["(a) λ", "(b) λ / 2", "(c) λ / 4", "(d) 2λ"], ans: "(b)", exp: "Distance between node to consecutive node (or antinode to antinode) = λ / 2." },
    { q: "An open organ pipe of length L produces fundamental frequency f. If one end is closed, fundamental frequency becomes:", opts: ["(a) f / 2", "(b) 2 f", "(c) f", "(d) 4 f"], ans: "(a)", exp: "Open pipe f_open = v / (2L). Closed pipe f_closed = v / (4L) = f_open / 2." },
    { q: "A closed organ pipe produces harmonics of frequencies:", opts: ["(a) All harmonics (f, 2f, 3f...)", "(b) Only odd harmonics (f, 3f, 5f...)", "(c) Only even harmonics (2f, 4f...)", "(d) No harmonics"], ans: "(b)", exp: "Closed organ pipes contain only odd harmonics f_n = (2n-1) v / (4L)." },
    { q: "Beat frequency produced by two sound sources of frequencies f₁ and f₂ is:", opts: ["(a) f₁ + f₂", "(b) | f₁ - f₂ |", "(c) (f₁ + f₂) / 2", "(d) f₁ f₂"], ans: "(b)", exp: "Beat frequency f_b = | f₁ - f₂ |." },
    { q: "Maximum number of beats per second that human ear can resolve is:", opts: ["(a) 5", "(b) 10", "(c) 20", "(d) 50"], ans: "(b)", exp: "Due to persistence of hearing (0.1 s), human ear resolves beats if f_b ≤ 10 Hz." },
    { q: "Speed of transverse wave in a stretched string of tension T and mass per unit length μ is:", opts: ["(a) v = √(T / μ)", "(b) v = √(μ / T)", "(c) v = T / μ", "(d) v = T μ"], ans: "(a)", exp: "Transverse wave speed in stretched string v = √(T / μ)." },
    { q: "In S.H.M, the ratio of velocity at mean position to acceleration at extreme position is:", opts: ["(a) 1 / ω", "(b) ω", "(c) ω²", "(d) 1"], ans: "(a)", exp: "v_mean = ω A, a_extreme = ω² A. Ratio v_mean / a_extreme = (ω A) / (ω² A) = 1 / ω." },
    { q: "A particle executes S.H.M with time period T. Time taken to travel from mean position to half amplitude (x = A/2) is:", opts: ["(a) T / 6", "(b) T / 12", "(c) T / 4", "(d) T / 8"], ans: "(b)", exp: "x = A sin(ω t) ⇒ A/2 = A sin(ω t) ⇒ sin(ω t) = 1/2 ⇒ ω t = π/6 ⇒ (2π/T) t = π/6 ⇒ t = T / 12." },
    { q: "The displacement of a progressive wave is given by y = 5 sin(100π t - 0.4π x) cm. Wavelength λ is:", opts: ["(a) 5 cm", "(b) 0.4 cm", "(c) 5 cm", "(d) 5 cm"], ans: "(a)", exp: "k = 0.4π = 2π / λ ⇒ λ = 2 / 0.4 = 5 cm." },
    { q: "If two tuning forks of frequencies 256 Hz and 260 Hz are sounded together, beat period is:", opts: ["(a) 4 s", "(b) 0.25 s", "(c) 0.5 s", "(d) 2 s"], ans: "(b)", exp: "f_b = 260 - 256 = 4 Hz. Beat period T_b = 1 / f_b = 1 / 4 = 0.25 seconds." },
    { q: "Frequency of fundamental mode of stretched string of length L, tension T, and mass density μ is:", opts: ["(a) f = (1 / 2L) √(T / μ)", "(b) f = (1 / L) √(T / μ)", "(c) f = 2L √(T / μ)", "(d) f = (1 / 4L) √(T / μ)"], ans: "(a)", exp: "Fundamental frequency f₁ = v / 2L = (1 / 2L) √(T / μ)." }
  ];

  mcqQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(0, 229, 255, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 15px 0;">
      <b style="color: ${themeColor}; font-size: 16px;">Q${idx + 1}: ${item.q}</b>
      <div style="margin: 10px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        ${item.opts.map(o => `<div class="mcq-option" style="color: #E0E0E0; font-size: 15px;">${o}</div>`).join('')}
      </div>
      <div style="margin-top: 8px; color: ${themeColor}; font-weight: bold;">✓ Answer: ${item.ans}</div>
      <div style="margin-top: 4px; color: #CBD5E1; font-size: 14.5px;">💡 <b>Explanation:</b> ${item.exp}</div>
    </div>`;
  });

  // 2. SECTION 2: 30 VSAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 2: VERY SHORT ANSWER QUESTIONS (VSAs 26 - 55)</h2>`;

  const vsaQuestions = [
    { q: "Define Simple Harmonic Motion (S.H.M).", a: "To-and-fro oscillatory motion in which restoring force F is directly proportional to displacement x and acts towards mean position (F = -k x)." },
    { q: "Write the differential equation of S.H.M.", a: "d²x/dt² + ω² x = 0." },
    { q: "Write the expression for displacement in S.H.M.", a: "x(t) = A cos(ω t + φ₀) or x(t) = A sin(ω t + φ₀)." },
    { q: "What is the phase angle of an oscillating particle?", a: "The quantity (ω t + φ₀) which describes the state of position and motion of the particle at any instant." },
    { q: "Define Epoch or initial phase.", a: "The phase angle φ₀ of the oscillating particle at initial time t = 0." },
    { q: "Write the formula for velocity of a particle in S.H.M at displacement x.", a: "v = ± ω √(A² - x²)." },
    { q: "Write the formula for acceleration of a particle in S.H.M at displacement x.", a: "a = - ω² x." },
    { q: "At what position is velocity maximum in S.H.M?", a: "At mean position (x = 0), where v_max = ω A." },
    { q: "At what position is acceleration maximum in S.H.M?", a: "At extreme positions (x = ± A), where |a_max| = ω² A." },
    { q: "Write the formula for time period of a loaded spring.", a: "T = 2π √(m / k)." },
    { q: "Write the formula for time period of a simple pendulum.", a: "T = 2π √(L / g)." },
    { q: "What is a Seconds Pendulum?", a: "A pendulum whose time period is exactly 2 seconds (length L ≈ 0.993 m ≈ 1 m)." },
    { q: "Write the expression for total mechanical energy in S.H.M.", a: "E = ½ m ω² A² = ½ k A²." },
    { q: "What is the relation between frequency of S.H.M and frequency of its kinetic energy?", a: "Kinetic energy oscillates at twice the frequency of S.H.M (ν_KE = 2 ν)." },
    { q: "Define Transverse Wave.", a: "A wave in which medium particles vibrate perpendicular to the direction of wave propagation (forming crests and troughs)." },
    { q: "Define Longitudinal Wave.", a: "A wave in which medium particles vibrate parallel to the direction of wave propagation (forming compressions and rarefactions)." },
    { q: "Write the formula for speed of transverse wave in a stretched string.", a: "v = √(T / μ), where T is tension and μ is mass per unit length." },
    { q: "Write Laplace's corrected formula for speed of sound in gas.", a: "v = √(γ P / ρ)." },
    { q: "Write the general progressive wave equation moving in +x direction.", a: "y(x,t) = A sin(k x - ω t + φ₀)." },
    { q: "Write the relation between wavenumber k and wavelength λ.", a: "k = 2π / λ." },
    { q: "State the Principle of Superposition of Waves.", a: "Resultant displacement at any point is the vector sum of displacements produced by individual overlapping waves: y = y₁ + y₂." },
    { q: "What is a Standing or Stationary Wave?", a: "A wave pattern formed by the superposition of two identical waves travelling in opposite directions, characterized by fixed nodes and antinodes." },
    { q: "Define Nodes and Antinodes in a standing wave.", a: "Nodes: Points of zero displacement. Antinodes: Points of maximum displacement." },
    { q: "What is the distance between a node and an adjacent antinode?", a: "λ / 4." },
    { q: "Write the formula for fundamental frequency of an open organ pipe of length L.", a: "f₁ = v / 2L (all harmonics present)." },
    { q: "Write the formula for fundamental frequency of a closed organ pipe of length L.", a: "f₁ = v / 4L (only odd harmonics present)." },
    { q: "Define Beats.", a: "Periodic waxing and waning of sound intensity produced when two sound waves of slightly different frequencies superpose." },
    { q: "Write the formula for beat frequency f_b.", a: "f_b = | f₁ - f₂ |." },
    { q: "Why do we hear no beats if frequency difference exceeds 10 Hz?", a: "Due to persistence of hearing limit (~0.1 s), human ear cannot resolve sound pulses separated by less than 0.1 s." },
    { q: "Can transverse waves travel through gases? Why?", a: "No, because gases lack shear rigidity (shear modulus G = 0)." }
  ];

  vsaQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(0, 229, 255, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 14px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 26}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Ans:</b> ${item.a}</p>
    </div>`;
  });

  // 3. SECTION 3: 30 SAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 3: SHORT ANSWER QUESTIONS (SAs 56 - 85)</h2>`;

  const saQuestions = [
    { q: "Derive differential equation of S.H.M and write expressions for displacement, velocity, and acceleration.", a: "Restoring force F = -k x ⇒ m d²x/dt² = -k x ⇒ d²x/dt² + (k/m) x = 0. Putting ω² = k/m gives d²x/dt² + ω² x = 0.\nSolution: x(t) = A cos(ω t + φ). Velocity v = dx/dt = -ω A sin(ω t + φ) = ±ω √(A² - x²). Acceleration a = dv/dt = -ω² A cos(ω t + φ) = -ω² x." },
    { q: "Derive expression for time period of a simple pendulum T = 2π √(L/g).", a: "Restoring torque τ = -m g L sinθ ≈ -m g L θ (for small θ). Rotational equation I d²θ/dt² = -m g L θ. With I = m L², d²θ/dt² + (g/L) θ = 0. Comparing with d²θ/dt² + ω² θ = 0 gives ω = √(g/L), so T = 2π/ω = 2π √(L/g)." },
    { q: "Derive expressions for Kinetic, Potential, and Total Energy in S.H.M. Show that total energy is conserved.", a: "1. Kinetic Energy E_k = ½ m v² = ½ m ω² (A² - x²).\n2. Potential Energy U = ∫ k x dx = ½ k x² = ½ m ω² x².\n3. Total Energy E = E_k + U = ½ m ω² (A² - x²) + ½ m ω² x² = ½ m ω² A² = ½ k A² = Constant (Independent of x)." },
    { q: "Derive time period of a spring-mass system for: (i) Series combination, (ii) Parallel combination.", a: "1. Series: Both springs experience same force F. Total extension x = x₁ + x₂ = F/k₁ + F/k₂ = F(1/k₁ + 1/k₂). k_eq = k₁ k₂ / (k₁ + k₂). T = 2π √(m / k_eq).\n2. Parallel: Both springs experience same extension x. Total force F = F₁ + F₂ = k₁ x + k₂ x = (k₁ + k₂) x. k_eq = k₁ + k₂. T = 2π √(m / (k₁ + k₂))." },
    { q: "Differentiate between Transverse and Longitudinal waves with 3 examples of each.", a: "1. Transverse: Particle vibration ⊥ wave direction; forms crests/troughs; propagates in solids/strings (e.g. string waves, light, seismic S-waves).\n2. Longitudinal: Particle vibration ∥ wave direction; forms compressions/rarefactions; propagates in solids, liquids, gases (e.g. sound waves, organ pipe waves, seismic P-waves)." },
    { q: "Explain Newton's formula for speed of sound in air and Laplace's correction.", a: "1. Newton assumed isothermal compression (B = P): v = √(P / ρ) = √(1.013×10⁵ / 1.293) = 280 m/s (20% lower than actual 332 m/s).\n2. Laplace corrected that compressions are adiabatic (B = γ P): v = √(γ P / ρ) = √(1.4 × 101300 / 1.293) = 332 m/s (Matches experiment)." },
    { q: "Explain reflection of progressive wave at: (i) Rigid boundary, (ii) Free boundary with equations.", a: "1. Rigid boundary: Particle displacement is zero. Reflected wave y_r = -A sin(k x + ω t) (180° or π phase shift).\n2. Free boundary: Particle displacement is maximum. Reflected wave y_r = +A sin(k x + ω t) (0° phase shift)." },
    { q: "Derive expression for standing wave formed by superposition of incident and reflected wave at rigid boundary.", a: "y₁ = A sin(k x - ω t), y₂ = -A sin(k x + ω t). Resultant y = y₁ + y₂ = A [sin(k x - ω t) - sin(k x + ω t)] = -2 A sin(k x) cos(ω t). Nodes occur at sin(k x) = 0 ⇒ k x = n π ⇒ x = n λ / 2." },
    { q: "Show that an open organ pipe produces all harmonics while a closed organ pipe produces only odd harmonics.", a: "1. Open Pipe (Both ends antinodes): L = n λ / 2 ⇒ λ = 2L / n ⇒ f_n = n (v / 2L) (n = 1, 2, 3... All harmonics).\n2. Closed Pipe (Node at closed end, Antinode at open end): L = (2n-1) λ / 4 ⇒ f_n = (2n-1) (v / 4L) (n = 1, 2... Only odd harmonics 1, 3, 5...)." },
    { q: "Explain the formation of Beats mathematically and derive formula for beat frequency f_b = |f₁ - f₂|.", a: "y₁ = A cos(2π f₁ t), y₂ = A cos(2π f₂ t). Resultant y = 2 A cos[π (f₁ - f₂) t] cos[π (f₁ + f₂) t]. Amplitude modulation frequency is ½ (f₁ - f₂). Sound intensity (proportional to A²) varies at frequency f_b = |f₁ - f₂|." },
    { q: "A particle executes S.H.M of amplitude 5 cm and period 2 s. Find max velocity and max acceleration.", a: "ω = 2π / T = 2π / 2 = π rad/s.\n1. v_max = ω A = π × 5 = 15.71 cm/s = 0.157 m/s.\n2. a_max = ω² A = π² × 5 = 49.35 cm/s² = 0.494 m/s²." },
    { q: "A 0.2 kg block on horizontal spring oscillates with amplitude 0.1 m and frequency 2 Hz. Find force constant k and max energy.", a: "ω = 2π ν = 2π × 2 = 4π rad/s.\n1. k = m ω² = 0.2 × (4π)² = 0.2 × 157.91 = 31.58 N/m.\n2. Total Energy E = ½ k A² = ½ × 31.58 × (0.1)² = 0.158 Joules." },
    { q: "A simple pendulum has time period 2.0 s on Earth (g = 9.8 m/s²). Find its length and period on Moon (g_moon = 1.6 m/s²).", a: "1. Earth: L = g T² / (4 π²) = 9.8 × 4 / 39.48 = 0.993 m ≈ 1 m.\n2. Moon: T_moon = 2π √(L / g_moon) = 2π √(0.993 / 1.6) = 2π √(0.6206) = 2π × 0.7878 = 4.95 seconds." },
    { q: "A progressive wave equation is y = 0.05 sin(200 π t - 0.5 π x) where x, y in meters and t in seconds. Find: (i) Amplitude, (ii) Frequency, (iii) Wavelength, (iv) Wave velocity.", a: "1. Amplitude A = 0.05 m.\n2. ω = 200π ⇒ 2π ν = 200π ⇒ ν = 100 Hz.\n3. k = 0.5π ⇒ 2π / λ = 0.5π ⇒ λ = 4 m.\n4. Velocity v = ν λ = 100 × 4 = 400 m/s." },
    { q: "A 1 m long steel wire of mass 10 g is stretched with tension 400 N. Find fundamental frequency of transverse vibration.", a: "Linear density μ = m / L = 0.010 kg / 1.0 m = 0.010 kg/m.\nWave speed v = √(T / μ) = √(400 / 0.010) = √40000 = 200 m/s.\nFundamental frequency f₁ = v / 2L = 200 / (2 × 1.0) = 100 Hz." },
    { q: "An open organ pipe 30 cm long produces sound in air (v = 330 m/s). Find fundamental frequency and 3rd harmonic.", a: "L = 0.30 m.\n1. Fundamental f₁ = v / 2L = 330 / (2 × 0.30) = 550 Hz.\n2. 3rd Harmonic f₃ = 3 f₁ = 3 × 550 = 1650 Hz." },
    { q: "A closed organ pipe 20 cm long produces fundamental frequency. Find frequency of fundamental and next harmonic (v = 340 m/s).", a: "L = 0.20 m.\n1. Fundamental f₁ = v / 4L = 340 / (4 × 0.20) = 425 Hz.\n2. Next harmonic (3rd harmonic) f₃ = 3 f₁ = 3 × 425 = 1275 Hz." },
    { q: "Two tuning forks A and B sounded together produce 5 beats/s. On loading fork A with wax, beat frequency decreases to 2 beats/s. If f_B = 256 Hz, find original f_A.", a: "f_A = f_B ± 5 = 256 ± 5 = 261 Hz or 251 Hz.\nLoading A with wax decreases f_A. If f_A = 261 Hz, dropping f_A reduces beat frequency |f_A - 256| from 5 to 2. Thus original f_A = 261 Hz." },
    { q: "At what displacement is velocity of S.H.M particle equal to half its maximum velocity?", a: "v = v_max / 2 ⇒ ω √(A² - x²) = ω A / 2 ⇒ A² - x² = A² / 4 ⇒ x² = 3/4 A² ⇒ x = ± (√3 / 2) A ≈ ± 0.866 A." },
    { q: "A body of mass 1 kg attached to spring executes S.H.M with period 1 s. What mass must be added to increase period to 2 s?", a: "T ∝ √m. T₂ / T₁ = √(m₂ / m₁) ⇒ 2 / 1 = √(m₂ / 1) ⇒ m₂ = 4 kg. Mass to be added = 4 - 1 = 3 kg." },
    { q: "A spring extends by 5 cm when loaded with 2 kg. Find force constant k and time period of oscillation when pulled and released.", a: "1. k = F / x = (2 kg × 9.8 N/kg) / 0.05 m = 19.6 / 0.05 = 392 N/m.\n2. T = 2π √(m / k) = 2π √(2 / 392) = 2π √(1 / 196) = 2π / 14 = π / 7 ≈ 0.449 seconds." },
    { q: "Explain why simple pendulum oscillations are S.H.M ONLY for small angular amplitudes θ ≤ 10°.", a: "Restoring force is F = -m g sinθ. Taylor expansion sinθ = θ - θ³/6 + ... For small angles (θ ≤ 10°), sinθ ≈ θ, making force linear F ∝ θ (S.H.M). For large angles, non-linear terms make period amplitude-dependent." },
    { q: "Calculate speed of sound in air at 27°C and 1 atm pressure (γ = 1.4, M = 29 g/mol, R = 8.314 J/mol K).", a: "T = 300 K, M = 0.029 kg/mol. v = √(γ R T / M) = √(1.4 × 8.314 × 300 / 0.029) = √(3491.88 / 0.029) = √(120409.65) ≈ 347.0 m/s." },
    { q: "A sonometer wire 80 cm long vibrates in 2 loops under tension 64 N. If linear density is 0.01 kg/m, find frequency.", a: "L = 0.80 m, 2 loops ⇒ 2nd harmonic (n=2). v = √(T / μ) = √(64 / 0.01) = √6400 = 80 m/s. Frequency f₂ = 2 × (v / 2L) = v / L = 80 / 0.80 = 100 Hz." },
    { q: "Find the ratio of fundamental frequencies of an open organ pipe and a closed organ pipe of equal length L.", a: "f_open = v / (2L), f_closed = v / (4L). Ratio f_open / f_closed = (v/2L) / (v/4L) = 4/2 = 2 : 1." },
    { q: "Why are acoustics of concert halls designed with curved back walls and sound-absorbing carpets?", a: "Curved walls focus sound uniformly towards audience, while sound-absorbing carpets prevent excessive reverberation and echo overlap." },
    { q: "Explain how beat frequency is used to detect dangerous inflammable gas leaks in underground mines.", a: "Air from mine is pumped into one organ pipe and pure air into an identical pipe. If mine air contains gas, sound speed changes, producing audible beats that trigger alarms." },
    { q: "A progressive wave on a string has amplitude 2 cm, frequency 50 Hz, and velocity 20 m/s. Write its wave equation.", a: "A = 0.02 m. ω = 2π ν = 100π rad/s. Wavelength λ = v / ν = 20 / 50 = 0.4 m. Wavenumber k = 2π / 0.4 = 5π rad/m. Equation: y(x,t) = 0.02 sin(5π x - 100π t) meters." },
    { q: "What is end correction e in an organ pipe? Write corrected formulas for open and closed pipes of diameter D.", a: "End correction accounts for antinode forming slightly outside open end: e ≈ 0.3 D per open end.\n1. Open pipe (2 open ends): f = v / [2 (L + 2e)].\n2. Closed pipe (1 open end): f = v / [4 (L + e)]." },
    { q: "Differentiate between Free, Damped, and Forced Oscillations with examples.", a: "1. Free: Constant amplitude, natural frequency ω₀ (no friction).\n2. Damped: Amplitude decays exponentially due to viscous drag/friction (e.g. pendulum in water).\n3. Forced: Driven by external periodic force at driver frequency ω (e.g. swing pushed periodically)." }
  ];

  saQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(0, 229, 255, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 14px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 56}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Solution:</b> ${item.a}</p>
    </div>`;
  });

  // 4. SECTION 4: 15 LAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 4: LONG ANSWER QUESTIONS (LAs 86 - 100)</h2>`;

  const laQuestions = [
    { q: "Define Simple Harmonic Motion. Derive differential equation d²x/dt² + ω² x = 0. Derive expressions for displacement x(t), velocity v(t), and acceleration a(t). Draw displacement, velocity, and acceleration graphs versus time.", a: "1. Definition F = -k x.\n2. Derivation: m d²x/dt² + k x = 0 ⇒ d²x/dt² + ω² x = 0 (where ω = √(k/m)).\n3. x(t) = A cos(ω t).\n4. v(t) = -ω A sin(ω t).\n5. a(t) = -ω² A cos(ω t) = -ω² x.\n6. Graphs show velocity leads displacement by π/2, acceleration leads displacement by π (180° out of phase)." },
    { q: "What is a Simple Pendulum? Derive expression for its time period T = 2π √(L/g). State 4 laws of simple pendulum and explain why period is independent of bob mass.", a: "1. Setup & restoring torque τ = -m g L sinθ ≈ -m g L θ.\n2. Equation I d²θ/dt² = -m g L θ ⇒ d²θ/dt² + (g/L) θ = 0 ⇒ T = 2π √(L/g).\n3. Law of Length (T ∝ √L), Law of Gravity (T ∝ 1/√g), Law of Mass (T independent of m), Law of Isochronism (T independent of small amplitude θ)." },
    { q: "Derive expressions for Kinetic Energy E_k and Potential Energy U of a simple harmonic oscillator. Plot E_k, U, and Total Energy E against displacement x. Show that average kinetic energy over one full period equals average potential energy.", a: "1. E_k = ½ m ω² (A² - x²), U = ½ m ω² x², E = E_k + U = ½ m ω² A².\n2. Graph plot: Intersections at x = ± A / √2.\n3. Time average over T: <E_k> = ¼ m ω² A², <U> = ¼ m ω² A² ⇒ <E_k> = <U> = ½ E_total." },
    { q: "Derive expression for standing waves formed in a stretched string fixed at both ends. Find fundamental frequency and higher harmonics. Draw first three mode shapes.", a: "1. Superposition of y₁ = A sin(kx - ωt) and y₂ = -A sin(kx + ωt) gives y = -2A sin(kx) cos(ωt).\n2. Boundary conditions y(0)=0 and y(L)=0 ⇒ sin(kL) = 0 ⇒ kL = nπ ⇒ λ_n = 2L / n.\n3. Frequencies f_n = n v / 2L = (n / 2L) √(T / μ) (n = 1, 2, 3... All harmonics present).\n4. 1st mode: 2 nodes at ends, 1 antinode in middle. 2nd mode: 3 nodes, 2 antinodes. 3rd mode: 4 nodes, 3 antinodes." },
    { q: "Derive expressions for normal modes of standing waves in: (i) An open organ pipe, (ii) A closed organ pipe. Compare their fundamental frequencies and harmonic series.", a: "1. Open pipe: Antinodes at both ends ⇒ L = n λ / 2 ⇒ f_n = n (v / 2L) (n = 1, 2, 3... All harmonics).\n2. Closed pipe: Node at closed end, Antinode at open end ⇒ L = (2n-1) λ / 4 ⇒ f_n = (2n-1) (v / 4L) (n = 1, 2, 3... Odd harmonics only).\n3. Comparison: Fundamental f_open = 2 f_closed for same length L. Open pipe has richer musical quality." },
    { q: "What are Beats? State the principle of superposition and derive expression for beat frequency f_b = |f₁ - f₂|. Describe an experimental method to determine unknown frequency of a tuning fork.", a: "1. Definition & Superposition y = y₁ + y₂.\n2. Mathematical proof deriving amplitude modulation 2A cos[π(f₁-f₂)t] and intensity variation frequency f_b = |f₁ - f₂|.\n3. Experimental tuning fork method: Sound unknown fork with standard fork f_std, count beats f_b. Load unknown with wax or file prong to confirm whether f_unk = f_std + f_b or f_std - f_b." },
    { q: "A 0.5 kg body attached to horizontal spring executes S.H.M with equation x(t) = 0.08 cos(10 t - π/4) in meters. Calculate: (i) Amplitude, (ii) Frequency & Period, (iii) Spring constant k, (iv) Max speed & acceleration, (v) Initial displacement & velocity at t=0.", a: "1. Amplitude A = 0.08 m = 8 cm.\n2. ω = 10 rad/s ⇒ ν = 10 / 2π = 1.59 Hz, T = 0.628 s.\n3. k = m ω² = 0.5 × 100 = 50 N/m.\n4. v_max = ω A = 10 × 0.08 = 0.8 m/s, a_max = ω² A = 100 × 0.08 = 8.0 m/s².\n5. t=0: x(0) = 0.08 cos(-π/4) = 0.08 / √2 = 0.0566 m. v(0) = -10 × 0.08 sin(-π/4) = +0.8 / √2 = +0.566 m/s." },
    { q: "A progressive transverse wave is represented by y = 0.04 sin(100 π t - 0.2 π x) where x,y in meters, t in seconds. Find: (i) Wave speed, (ii) Particle max speed, (iii) Phase difference between points 2.5 m apart, (iv) Transverse velocity at x=1 m, t=0.01 s.", a: "1. ω = 100π, k = 0.2π ⇒ Wave speed v = ω / k = 100π / 0.2π = 500 m/s.\n2. Particle v_max = ω A = 100π × 0.04 = 4π ≈ 12.57 m/s.\n3. Phase diff Δφ = k Δx = 0.2π × 2.5 = 0.5π = 90°.\n4. Transverse v_p = dy/dt = 0.04 × 100π cos(100π(0.01) - 0.2π(1)) = 4π cos(π - 0.2π) = 4π cos(0.8π) = 4π (-0.809) = -10.17 m/s." },
    { q: "A 2.0 m long sonometer wire under tension 100 N vibrates in 4 loops. If fundamental frequency is 25 Hz, find: (i) Wave speed in wire, (ii) Mass per unit length μ, (iii) Total mass of wire, (iv) Frequency of 4th harmonic.", a: "1. Fundamental f₁ = 25 Hz ⇒ v / 2L = 25 ⇒ v = 25 × 2 × 2.0 = 100 m/s.\n2. v = √(T / μ) ⇒ μ = T / v² = 100 / (100)² = 100 / 10000 = 0.01 kg/m.\n3. Total mass m = μ L = 0.01 × 2.0 = 0.02 kg = 20 g.\n4. 4th harmonic f₄ = 4 f₁ = 4 × 25 = 100 Hz." },
    { q: "Discuss Laplace's correction to Newton's formula for speed of sound in gases. Calculate speed of sound in Air at STP (P = 1.013 × 10⁵ Pa, ρ = 1.29 kg/m³, γ = 1.4) and at 50°C.", a: "1. Newton Isothermal B=P vs Laplace Adiabatic B=γP.\n2. STP speed v_0 = √(γ P / ρ) = √(1.4 × 101300 / 1.29) = √(141820 / 1.29) = √109938 = 331.5 m/s.\n3. Speed at 50°C (323 K): v_T = v_0 √(T / 273) = 331.5 √(323 / 273) = 331.5 × 1.0877 = 360.6 m/s." },
    { q: "Two organ pipes, one open of length 50 cm and one closed of length 24 cm, are sounded in their fundamental modes. Find beat frequency produced (v_sound = 340 m/s).", a: "1. Open pipe f_open = v / (2 L_open) = 340 / (2 × 0.50) = 340 Hz.\n2. Closed pipe f_closed = v / (4 L_closed) = 340 / (4 × 0.24) = 340 / 0.96 = 354.17 Hz.\n3. Beat frequency f_b = |f_closed - f_open| = 354.17 - 340 = 14.17 Beats/second." },
    { q: "State and prove the principle of superposition for two harmonic waves y₁ = A₁ sin(kx - ωt) and y₂ = A₂ sin(kx - ωt + φ). Derive expression for resultant amplitude A_net and phase. Find conditions for constructive and destructive interference.", a: "1. Superposition y = y₁ + y₂.\n2. Resultant amplitude A_net = √(A₁² + A₂² + 2 A₁ A₂ cos φ).\n3. Constructive Interference: cos φ = +1 ⇒ φ = 2nπ ⇒ A_max = A₁ + A₂.\n4. Destructive Interference: cos φ = -1 ⇒ φ = (2n+1)π ⇒ A_min = |A₁ - A₂|." },
    { q: "A U-tube contains mercury up to height h. Show that liquid column executes S.H.M when pushed down on one side and released. Derive time period T = 2π √(L / 2g) where L is total column length.", a: "1. If liquid is depressed by x in one limb, height diff between limbs becomes 2x.\n2. Restoring force F = - (Area A) × (2x ρ g) = - (2 A ρ g) x.\n3. Total liquid mass m = A L ρ.\n4. Acceleration a = F / m = - (2 A ρ g x) / (A L ρ) = - (2g / L) x.\n5. Since a ∝ -x, motion is S.H.M with ω² = 2g / L ⇒ T = 2π √(L / 2g)." },
    { q: "A cylindrical body of mass m, area A, and density ρ_b floats vertically in a liquid of density ρ_l. Show that if pushed down slightly and released, it executes S.H.M. Derive expression for time period T.", a: "1. Equilibrium buoyancy balances weight.\n2. When pushed down by x, additional buoyant force F = - A x ρ_l g.\n3. Acceleration a = F / m = - (A ρ_l g / m) x.\n4. Motion is S.H.M with ω² = A ρ_l g / m ⇒ T = 2π √(m / (A ρ_l g))." },
    { q: "Explain the phenomenon of Resonance in forced oscillations. Draw amplitude vs driving frequency graph for light, medium, and heavy damping. State two useful and two destructive effects of resonance.", a: "1. Forced oscillation amplitude A = F₀ / √[m² (ω² - ω₀²)² + b² ω²].\n2. Resonance occurs when driving frequency ω = natural frequency ω₀, producing sharp maximum amplitude.\n3. Sharpness of resonance decreases as damping coefficient b increases.\n4. Useful: Tuning radio stations, musical instruments.\n5. Destructive: Soldiers marching across suspension bridges, earthquake structural collapse." }
  ];

  laQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(0, 229, 255, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <b style="color: ${themeColor}; font-size: 16px;">Q${idx + 86}: ${item.q}</b>
      <p style="margin: 8px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6; white-space: pre-line;"><b>Comprehensive Solution:</b>\n${item.a}</p>
    </div>`;
  });

  html += `</div>`;
  return html;
}

const overviewHtml = generateFullOverviewHtml();
const solutionsHtml = generateFullSolutionsHtml();

const tsContent = `// Class 11 Physics Unit X: Oscillations and Waves (100% Exact Official NCERT Syllabus Alignment)
// High-Level Reference Book Content & NCERT Solutions (8 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy10HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy10HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-10.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully generated c11-phy-10.ts with 8 3D SVG diagrams and 100 questions at " + outputPath);
