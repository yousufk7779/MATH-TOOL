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
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 229, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(0, 229, 255, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 17px; display: block; margin-bottom: 6px;">📌 Definition (${term}):</b>
    <p style="margin: 0; color: #FFFFFF; line-height: 1.65; font-size: 15.5px;">${definition}</p>
  </div>`;
}

// Subtopic item
function colonTopic(title, explanation) {
  return `
  <div style="margin-bottom: 14px; background: rgba(255,255,255,0.02); padding: 10px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
    <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">• ${title}:</b>
    <span style="color: #FFFFFF; line-height: 1.65; display: block; font-size: 15px;">${explanation}</span>
  </div>`;
}

// 3D Diagram Card Wrapper
function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(0, 229, 255, 0.25);">
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

// ==================== 8 ENHANCED 3D SVG DIAGRAMS FOR CHAPTER 10 ====================

// 3D SVG 1: Simple Harmonic Motion Reference Circle
const svg1_3d_shm_reference_circle = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="refGrad1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
  </defs>

  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Reference Circle &amp; S.H.M Projection</text>

    <circle cx="195" cy="210" r="110" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="2"/>
    <line x1="85" y1="210" x2="305" y2="210" stroke="#475569" stroke-width="2"/>
    <line x1="195" y1="100" x2="195" y2="320" stroke="#475569" stroke-width="2"/>

    <line x1="195" y1="210" x2="270" y2="135" stroke="#76FF03" stroke-width="3.5"/>
    <circle cx="270" cy="135" r="9" fill="url(#refGrad1)"/>
    <text x="282" y="130" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">P (t)</text>

    <line x1="270" y1="135" x2="270" y2="210" stroke="#FFD700" stroke-dasharray="3,3" stroke-width="2"/>
    <circle cx="270" cy="210" r="7" fill="#FFD700"/>
    <text x="265" y="235" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold">x(t) = A cos(ωt + φ)</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Phase Angle Φ = ω t + φ₀</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">2. S.H.M Equations of Motion</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Displacement &amp; Velocity:</text>
    <text x="195" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">x(t) = A cos(ω t + φ)</text>
    <text x="195" y="148" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="15.5">v(t) = ± ω √(A² - x²)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Acceleration &amp; Differential Eq:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">a(t) = - ω² x &nbsp;|&nbsp; d²x/dt² + ω² x = 0</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Time Period &amp; Frequency:</text>
    <text x="195" y="368" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">T = 2π / ω = 1 / ν &nbsp;|&nbsp; ω = 2π ν</text>
  </g>
</svg>`;

// 3D SVG 2: Loaded Spring Mass System
const svg2_3d_loaded_spring = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="blockGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>

  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Horizontal Spring-Mass Oscillator</text>

    <rect x="40" y="100" width="15" height="160" fill="#475569"/>
    <path d="M 55 180 Q 75 160 95 180 T 135 180 T 175 180 T 215 180" fill="none" stroke="#00E5FF" stroke-width="3.5"/>

    <rect x="215" y="140" width="80" height="80" rx="8" fill="url(#blockGrad2)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="255" y="185" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="bold">Mass m</text>

    <line x1="255" y1="230" x2="255" y2="280" stroke="#76FF03" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="255" y="300" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Displacement x →</text>

    <text x="195" y="380" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">Restoring Force F = - k x</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Loaded Spring Period &amp; Combinations</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Spring Time Period T:</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">T = 2π √(m / k)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Springs in Series:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">1 / k_eq = 1/k₁ + 1/k₂</text>
    <text x="195" y="275" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ Equivalent stiffness decreases in series!</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Springs in Parallel:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">k_eq = k₁ + k₂</text>
  </g>
</svg>`;

// 3D SVG 3: Simple Pendulum Oscillation Geometry
const svg3_3d_simple_pendulum = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="bobGrad3" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="40%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#D4AC0D"/>
    </radialGradient>
  </defs>

  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Simple Pendulum Force Vector Diagram</text>

    <rect x="120" y="60" width="150" height="12" fill="#475569"/>
    <line x1="195" y1="72" x2="195" y2="330" stroke="#475569" stroke-dasharray="4,4" stroke-width="2"/>

    <line x1="195" y1="72" x2="275" y2="260" stroke="#00E5FF" stroke-width="3"/>
    <text x="245" y="160" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">Length L</text>

    <circle cx="275" cy="260" r="18" fill="url(#bobGrad3)"/>

    <line x1="275" y1="260" x2="275" y2="340" stroke="#FF512F" stroke-width="3"/>
    <text x="285" y="330" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">mg</text>

    <line x1="275" y1="260" x2="215" y2="280" stroke="#76FF03" stroke-width="3"/>
    <text x="140" y="300" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">mg sinθ (Restoring)</text>

    <text x="195" y="380" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">Small Angle Approximation: sinθ ≈ θ = x/L</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Simple Pendulum Time Period</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Pendulum Period Formula (T):</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">T = 2π √(L / g)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Seconds Pendulum (T = 2 Seconds):</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">Length L ≈ 0.993 m ≈ 1 Meter</text>
    <text x="195" y="275" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ Independent of bob mass m and amplitude θ!</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Factors Affecting Pendulum Period:</text>
    <text x="25" y="362" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• In accelerating elevator: T = 2π √(L / (g ± a))</text>
    <text x="25" y="384" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Inside orbiting satellite (g_eff = 0): T = ∞</text>
  </g>
</svg>`;

// 3D SVG 4: Energy Breakdown in S.H.M
const svg4_3d_shm_energy = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Energy vs Displacement Graph in S.H.M</text>
    <line x1="50" y1="330" x2="350" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="200" y1="330" x2="200" y2="70" stroke="#475569" stroke-width="2"/>

    <line x1="80" y1="110" x2="320" y2="110" stroke="#FFD700" stroke-width="3"/>
    <text x="200" y="95" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">Total E = ½ k A²</text>

    <path d="M 80 110 Q 200 330 320 110" fill="none" stroke="#FF512F" stroke-width="3.5"/>
    <text x="270" y="190" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">U = ½ k x²</text>

    <path d="M 80 330 Q 200 110 320 330" fill="none" stroke="#76FF03" stroke-width="3.5"/>
    <text x="200" y="150" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">E_k = ½ k (A² - x²)</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">At x = ± A / √2 : E_k = U = ½ E_total</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">2. S.H.M Energy Conversions</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Kinetic Energy (E_k):</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">E_k = ½ m ω² (A² - x²)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Potential Energy (U):</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">U = ½ m ω² x² = ½ k x²</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Total Mechanical Energy (E):</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">E = E_k + U = ½ m ω² A²</text>
  </g>
</svg>`;

// 3D SVG 5: Transverse vs Longitudinal Progressive Waves
const svg5_3d_transverse_longitudinal_waves = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Transverse vs Longitudinal Wave Types</text>

    <path d="M 40 120 Q 100 40 160 120 T 280 120 T 350 120" fill="none" stroke="#00E5FF" stroke-width="3.5"/>
    <text x="100" y="55" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Crest</text>
    <text x="220" y="170" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">Trough</text>

    <rect x="40" y="240" width="40" height="40" fill="rgba(0,229,255,0.4)"/>
    <rect x="80" y="240" width="80" height="40" fill="rgba(0,229,255,0.1)"/>
    <rect x="160" y="240" width="40" height="40" fill="rgba(0,229,255,0.4)"/>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Transverse ⊥ Propagation | Longitudinal ∥ Propagation</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Progressive Wave Displacement</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Travelling Wave Equation:</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">y(x,t) = A sin(k x - ω t + φ)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Wavenumber k &amp; Wave Speed v:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">k = 2π / λ &nbsp;|&nbsp; v = ν λ = ω / k</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Speeds in Mediums:</text>
    <text x="25" y="362" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Stretched String: v = √(T / μ)</text>
    <text x="25" y="384" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Laplace Gas Speed: v = √(γ P / ρ)</text>
  </g>
</svg>`;

// 3D SVG 6: Reflection of Waves at Boundary
const svg6_3d_wave_reflection = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Reflection at Rigid vs Free Boundary</text>

    <rect x="320" y="60" width="15" height="140" fill="#475569"/>
    <path d="M 50 110 Q 110 50 170 110" fill="none" stroke="#76FF03" stroke-width="3"/>
    <path d="M 180 150 Q 240 210 300 150" fill="none" stroke="#FF512F" stroke-width="3"/>

    <text x="195" y="380" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">Rigid End: 180° (π) Phase Flip | Free End: 0° Phase Shift</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Superposition &amp; Boundary Laws</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Reflected Wave at Rigid End:</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">y_r = - A sin(k x + ω t)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Reflected Wave at Free End:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">y_r = + A sin(k x + ω t)</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Principle of Superposition:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">y_net(x,t) = y₁(x,t) + y₂(x,t)</text>
  </g>
</svg>`;

// 3D SVG 7: Standing Waves in Strings & Organ Pipes
const svg7_3d_standing_waves_organ_pipes = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Standing Wave Harmonics (Nodes &amp; Antinodes)</text>

    <line x1="40" y1="100" x2="340" y2="100" stroke="#475569" stroke-width="2"/>
    <path d="M 40 100 Q 190 50 340 100 Q 190 150 40 100" fill="none" stroke="#76FF03" stroke-width="3"/>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Node to Node = λ / 2 | Node to Antinode = λ / 4</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Organ Pipes Frequency Laws</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Open Organ Pipe (Both Ends Open):</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">f_n = n (v / 2L) &nbsp; (n = 1, 2, 3...)</text>
    <text x="195" y="152" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="12.5">✓ ALL harmonics (even &amp; odd) are present!</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Closed Organ Pipe (One End Closed):</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">f_n = (2n - 1) (v / 4L) &nbsp; (n = 1, 2...)</text>
    <text x="195" y="275" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="12.5">✓ ONLY ODD harmonics (1, 3, 5...) are present!</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Standing Wave Equation:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">y(x,t) = 2 A sin(k x) cos(ω t)</text>
  </g>
</svg>`;

// 3D SVG 8: Beats Phenomenon Waveform
const svg8_3d_beats_phenomenon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">1. Beats Modulated Waveform &amp; Envelope</text>

    <line x1="40" y1="200" x2="350" y2="200" stroke="#475569" stroke-width="2"/>
    <path d="M 40 200 Q 115 100 190 200 Q 265 100 350 200" fill="none" stroke="#FFD700" stroke-dasharray="4,4" stroke-width="2"/>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Beat Period T_b = 1 / f_b = 1 / |f₁ - f₂|</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Beats Frequency &amp; Applications</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Beat Frequency Formula (f_b):</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">f_b = | f₁ - f₂ |</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Persistence of Hearing Limit:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">f_b ≤ 10 Beats / Second</text>
    <text x="195" y="275" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ Human ear can distinguish beats if f_b ≤ 10 Hz!</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Applications of Beats:</text>
    <text x="25" y="362" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Tuning musical instruments (piano, sitar)</text>
    <text x="25" y="384" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Determining unknown frequency of a tuning fork</text>
  </g>
</svg>`;

// Construct Overview HTML for Chapter 10
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
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for Unit X: Oscillations and Waves</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Simple Harmonic Motion (S.H.M):</b>
        <span style="color: #FFFFFF;">To-and-fro motion in which restoring force is directly proportional to displacement and acts towards mean position: F = -k x.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Time Period &amp; Frequency:</b>
        <span style="color: #FFFFFF;">Time Period T is time for 1 oscillation. Frequency ν = 1/T is oscillations per second (Hz).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Phase (Φ):</b>
        <span style="color: #FFFFFF;">The physical state of position and direction of motion of an oscillating particle: Φ = ω t + φ₀.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Simple Pendulum Period:</b>
        <span style="color: #FFFFFF;">Time period of small-angle pendulum oscillations: T = 2π √(L/g). Independent of bob mass m.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Total Energy in S.H.M:</b>
        <span style="color: #FFFFFF;">Sum of Kinetic and Potential energies: E = E_k + U = 1/2 m ω<sup>2</sup> A<sup>2</sup> = Constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Transverse vs Longitudinal:</b>
        <span style="color: #FFFFFF;">Transverse: Particle vibration ⊥ wave direction. Longitudinal: Particle vibration ∥ wave direction.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Progressive Wave Equation:</b>
        <span style="color: #FFFFFF;">y(x,t) = A sin(k x - ω t + φ₀), where k = 2π/λ is wavenumber and wave speed v = ν λ = ω / k.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Standing Waves &amp; Beats:</b>
        <span style="color: #FFFFFF;">Standing wave: y = -2A sin(kx) cos(ωt). Beats: Modulation frequency f_b = \|f₁ - f₂\|.</span>
      </div>
    </div>
  </div>

  <!-- PART A: OSCILLATIONS -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">PART A: OSCILLATIONS</h1>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">1. Periodic Motion, Time Period, Frequency and Periodic Functions</h2>
  <p>Motion that repeats itself at regular intervals of time is called <b>Periodic Motion</b>. If a body moves to-and-fro about a fixed mean position, it is called <b>Oscillatory Motion</b>. All oscillatory motions are periodic, but not all periodic motions are oscillatory (e.g. planetary revolution is periodic but not oscillatory).</p>

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Simple Harmonic Motion (S.H.M), Equations of Motion and Phase</h2>
  <p>Simple Harmonic Motion is a special bounded oscillatory motion where the restoring force $F$ is directly proportional to displacement $x$ from mean position and acts in the opposite direction ($F = -k x$).</p>
  ${eqBox("<b>x(t) = A cos(ω t + φ) &nbsp;|&nbsp; v(t) = ± ω √(A<sup>2</sup> - x<sup>2</sup>) &nbsp;|&nbsp; a(t) = - ω<sup>2</sup> x &nbsp;|&nbsp; " + frac("d<sup>2</sup>x", "dt<sup>2</sup>") + " + ω<sup>2</sup> x = 0</b>")}
  ${svg3DCardWrapper("Simple Harmonic Motion (S.H.M) Reference Circle & Phase Diagram", "Uniform circular motion projection generating S.H.M displacement x(t) = A cos(ωt+φ) and phase angle Φ.", svg1_3d_shm_reference_circle)}

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Oscillations of a Loaded Spring and Simple Pendulum</h2>
  <p>For a spring-mass oscillator, $T = 2\pi \sqrt{m/k}$. For a simple pendulum of length $L$, the restoring torque is $\tau = -m g L \sin\theta \approx -m g L \theta$ for small angles ($\theta \le 10^\circ$), giving time period $T = 2\pi \sqrt{L/g}$.</p>
  ${svg3DCardWrapper("Loaded Spring Mass System & Series/Parallel Springs", "Horizontal spring mass m oscillator, Hooke's force F = -kx, and series vs parallel stiffness rules.", svg2_3d_loaded_spring)}
  ${svg3DCardWrapper("Simple Pendulum Oscillation Geometry & Restoring Force", "Pendulum bob force resolution (mg sinθ restoring component) deriving small-angle time period T = 2π √(L/g).", svg3_3d_simple_pendulum)}

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Energy in S.H.M. Kinetic and Potential Energies</h2>
  <p>Kinetic energy $E_k = \frac{1}{2} k (A^2 - x^2)$ and Potential energy $U = \frac{1}{2} k x^2$ continuously convert into each other, maintaining a constant total mechanical energy $E = E_k + U = \frac{1}{2} k A^2$.</p>
  ${svg3DCardWrapper("Energy Breakdown in S.H.M (E_k, U, E_total Graphs)", "Parabolic energy curves E_k(x) and U(x) intersecting at x = ± A / √2 with constant total energy line E = 1/2 k A².", svg4_3d_shm_energy)}

  <!-- PART B: WAVES -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">PART B: WAVES</h1>

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">5. Wave Motion, Transverse and Longitudinal Waves &amp; Speed of Travelling Wave</h2>
  <p>A wave is a disturbance propagating through a medium carrying energy and momentum without net displacement of medium particles. Transverse wave speed in stretched string is $v = \sqrt{T/\mu}$; Laplace speed of sound in gas is $v = \sqrt{\gamma P/\rho}$.</p>
  ${svg3DCardWrapper("Transverse vs Longitudinal Progressive Waves", "Crests and Troughs of Transverse wave vs Compressions and Rarefactions of Longitudinal wave.", svg5_3d_transverse_longitudinal_waves)}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Displacement Relation for a Progressive Wave &amp; Principle of Superposition</h2>
  <p>The displacement equation of a progressive harmonic wave is $y(x,t) = A \sin(k x - \omega t + \phi_0)$. When two waves overlap, the resultant displacement is the vector sum $y(x,t) = y_1(x,t) + y_2(x,t)$.</p>

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Reflection of Waves, Standing Waves in Strings and Organ Pipes</h2>
  <p>Standing waves form when two identical counter-propagating waves superpose. In open organ pipes, all harmonics $f_n = n (v / 2L)$ are present; in closed organ pipes, only odd harmonics $f_n = (2n-1) (v / 4L)$ exist.</p>
  ${svg3DCardWrapper("Reflection of Waves at Rigid vs Free Boundary", "Incident wave pulse reflecting with 180° (π) phase flip at rigid boundary vs 0° phase shift at free boundary.", svg6_3d_wave_reflection)}
  ${svg3DCardWrapper("Standing Waves in Strings and Organ Pipes (Nodes & Antinodes)", "Standing wave harmonic loops showing Nodes N and Antinodes A in stretched strings and organ pipes.", svg7_3d_standing_waves_organ_pipes)}

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Beats and Harmonics</h2>
  <p>Beats are periodic variations in sound intensity produced by the superposition of two sound waves of slightly different frequencies $f_1$ and $f_2$, with beat frequency $f_b = |f_1 - f_2|$.</p>
  ${svg3DCardWrapper("Beats Phenomenon & Envelope Waveform (f_b = |f₁ - f₂|)", "Waxing and waning modulated sound envelope waveform with beat frequency f_b = |f1 - f2|.", svg8_3d_beats_phenomenon)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for Unit X: Oscillations and Waves</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• S.H.M Motion Equations:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">x(t) = A cos(ω t + φ)<br>v = ± ω √(A² - x²) &nbsp;|&nbsp; a = - ω² x</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Oscillator Periods:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">Spring T = 2π √(m/k)<br>Pendulum T = 2π √(L/g)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Total S.H.M Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">E_k = ½ m ω² (A² - x²)<br>U = ½ m ω² x² &nbsp;|&nbsp; E = ½ k A²</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Wave Equation:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">y(x,t) = A sin(k x - ω t + φ₀)<br>k = 2π / λ &nbsp;|&nbsp; v = ν λ = ω / k</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Organ Pipe Frequencies:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">Open: f_n = n (v / 2L) (All harmonics)<br>Closed: f_n = (2n-1) (v / 4L) (Odd)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Beats &amp; Wave Speed:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">f_b = |f₁ - f₂|<br>String v = √(T / μ) &nbsp;|&nbsp; Sound v = √(γ P / ρ)</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate Solutions
function generateFullSolutionsHtml() {
  const fileContent = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-10.ts'), 'utf8');
  const matchSol = fileContent.match(/export const c11Phy10HtmlSolutions = ([\s\S]*?);?\s*$/);
  return JSON.parse(matchSol[1]);
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

console.log("Successfully rebuilt c11-phy-10.ts with enhanced deep prose and widened 3D SVG diagrams!");
