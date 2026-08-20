const fs = require('fs');
const path = require('path');

const themeColor = "#42A5F5"; // Primary theme color for Class 11 Physics Unit IX (Kinetic Theory of Gases)

// Clean compact inline stacked fraction helper
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(66, 165, 245, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(66, 165, 245, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 18px; margin: 16px 0;">
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
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(66, 165, 245, 0.25);">
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

// ==================== 6 ENHANCED 3D SVG DIAGRAMS FOR CHAPTER 9 ====================

// 3D SVG 1: Ideal Gas Cubic Container & Pressure Exertion Model
const svg1_3d_gas_pressure_derivation = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="molGrad1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#42A5F5"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="arrowCyan1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#42A5F5"/>
    </marker>
  </defs>

  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16" font-weight="bold">1. Gas Molecule Collisions in Cube L³</text>
    <polygon points="70,140 190,80 310,140 190,200" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="1.5"/>
    <polygon points="70,140 190,200 190,330 70,270" fill="rgba(66,165,245,0.12)" stroke="#42A5F5" stroke-width="1.5"/>
    <polygon points="190,200 310,140 310,270 190,330" fill="rgba(66,165,245,0.05)" stroke="#42A5F5" stroke-width="1.5"/>

    <circle cx="220" cy="220" r="10" fill="url(#molGrad1)"/>
    <line x1="220" y1="220" x2="295" y2="220" stroke="#76FF03" stroke-width="3" marker-end="url(#arrowCyan1)"/>
    <text x="250" y="210" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">v_x →</text>

    <polygon points="310,140 310,270 190,330 190,200" fill="rgba(255,81,47,0.25)" stroke="#FF512F" stroke-width="2"/>
    <text x="260" y="270" fill="#FF512F" font-family="sans-serif" font-size="13.5" font-weight="bold">Wall Area A = L²</text>

    <text x="195" y="380" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">Momentum Change per Collision Δp = 2 m v_x</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Pressure Exerted by Ideal Gas</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="14.5" font-weight="bold">Pressure Derivation Equation:</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">P = ⅓ ρ v_rms² = ⅓ (N m / V) v_rms²</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Pressure &amp; Kinetic Energy Relation:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">P = ⅔ E_k &nbsp; (Energy Density E_k)</text>
    <text x="195" y="275" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ Pressure equals 2/3 of translational KE per unit volume!</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Key Assumptions of Kinetic Theory:</text>
    <text x="25" y="362" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Tiny elastic point-mass spheres in continuous motion</text>
    <text x="25" y="385" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Zero intermolecular forces except during instant collision</text>
  </g>
</svg>`;

// 3D SVG 2: Maxwell-Boltzmann Speed Distribution Curve
const svg2_3d_maxwell_speed_distribution = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16" font-weight="bold">1. Maxwell-Boltzmann Speed Distribution</text>
    <line x1="50" y1="330" x2="360" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>

    <path d="M 50 330 Q 135 70 230 220 Q 290 300 345 325" fill="none" stroke="#42A5F5" stroke-width="3.5"/>

    <line x1="130" y1="95" x2="130" y2="330" stroke="#FF512F" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="115" y="85" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">v_mp</text>

    <line x1="150" y1="115" x2="150" y2="330" stroke="#FFD700" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="145" y="105" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold">v_avg</text>

    <line x1="175" y1="145" x2="175" y2="330" stroke="#76FF03" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="178" y="135" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">v_rms</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Ratio v_mp : v_avg : v_rms = 1 : 1.128 : 1.225</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Molecular Speed Equations</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Root-Mean-Square Speed (v_rms):</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">v_rms = √(3 R T / M) = √(3 k_B T / m)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Average Speed (v_avg):</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">v_avg = √(8 R T / π M)</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Most Probable Speed (v_mp):</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">v_mp = √(2 R T / M)</text>
  </g>
</svg>`;

// 3D SVG 3: Degrees of Freedom
const svg3_3d_degrees_of_freedom = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <rect x="0" y="0" width="390" height="195" rx="12" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="1.5"/>
    <text x="195" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16" font-weight="bold">1. Monoatomic Gas (He, Ne, Ar)</text>
    <text x="195" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Degrees of Freedom f = 3</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13">• 3 Translational degrees (x, y, z axes)</text>
    <text x="25" y="130" fill="#76FF03" font-family="sans-serif" font-size="13">• Molar internal energy U = (3/2) R T</text>
  </g>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="195" rx="12" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="195" y="30" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">2. Diatomic Gas Rigid (O₂, N₂, H₂)</text>
    <text x="195" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Degrees of Freedom f = 5</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13">• 3 Translational + 2 Rotational degrees</text>
    <text x="25" y="130" fill="#FFD700" font-family="sans-serif" font-size="13">• Molar internal energy U = (5/2) R T</text>
  </g>

  <g transform="translate(15, 235)">
    <rect x="0" y="0" width="390" height="195" rx="12" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="195" y="30" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">3. Diatomic Gas (Vibrating)</text>
    <text x="195" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Degrees of Freedom f = 7</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13">• 3 Translational + 2 Rotational + 2 Vibrational</text>
    <text x="25" y="130" fill="#FF8A65" font-family="sans-serif" font-size="13">• Molar internal energy U = (7/2) R T</text>
  </g>

  <g transform="translate(430, 235)">
    <rect x="0" y="0" width="390" height="195" rx="12" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.5"/>
    <text x="195" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">4. Polyatomic Gas (H₂O, CH₄)</text>
    <text x="195" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Degrees of Freedom f = 6</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13">• 3 Translational + 3 Rotational degrees</text>
    <text x="25" y="130" fill="#00E5FF" font-family="sans-serif" font-size="13">• Molar internal energy U = 3 R T</text>
  </g>
</svg>`;

// 3D SVG 4: Law of Equi-partition of Energy
const svg4_3d_equipartition_specific_heats = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16" font-weight="bold">1. Law of Equi-partition of Energy</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="14.5" font-weight="bold">Law Statement:</text>
    <text x="195" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">In thermal equilibrium, total energy is distributed equally among all degrees of freedom.</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Energy per Degree of Freedom:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">E_degree = ½ k_B T &nbsp; (Per Molecule)</text>

    <text x="195" y="380" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Molar Energy U = (f / 2) R T</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Specific Heat Capacities (C_v, C_p, γ)</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">C_v &amp; C_p Equations:</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">C_v = (f / 2) R &nbsp;|&nbsp; C_p = (f / 2 + 1) R</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Adiabatic Index γ = C_p / C_v:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">γ = 1 + (2 / f)</text>
    <text x="195" y="275" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ Mono (f=3): γ=1.67 | Di (f=5): γ=1.40 | Poly (f=6): γ=1.33</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Mayer's Formula Verification:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">C_p - C_v = R</text>
  </g>
</svg>`;

// 3D SVG 5: Mean Free Path Model
const svg5_3d_mean_free_path = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="molGrad5" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#42A5F5"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
  </defs>

  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16" font-weight="bold">1. Collision Cylinder &amp; Zig-Zag Trajectory</text>
    <rect x="50" y="160" width="280" height="80" rx="40" fill="rgba(66,165,245,0.12)" stroke="#42A5F5" stroke-width="2"/>
    <circle cx="190" cy="200" r="14" fill="url(#molGrad5)"/>

    <circle cx="95" cy="180" r="14" fill="#FF512F"/>
    <circle cx="285" cy="220" r="14" fill="#FF512F"/>

    <line x1="95" y1="180" x2="190" y2="200" stroke="#76FF03" stroke-width="2.5"/>
    <line x1="190" y1="200" x2="285" y2="220" stroke="#76FF03" stroke-width="2.5"/>

    <text x="140" y="175" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Path λ₁</text>
    <text x="235" y="235" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Path λ₂</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Mean Free Path λ = Average Free Distance</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Mean Free Path Formulae</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="14.5" font-weight="bold">Mean Free Path Equation (λ):</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">λ = 1 / (√2 π n d²)</text>
    <text x="195" y="152" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="12.5">n = Number density | d = Molecular diameter</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Dependence on Pressure &amp; Temp:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">λ = k_B T / (√2 π d² P)</text>
    <text x="195" y="275" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ λ ∝ T (at const P) &nbsp;|&nbsp; λ ∝ 1/P (at const T)</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Dependence on Gas Density ρ:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">λ = m / (√2 π d² ρ) &nbsp; ⇒ &nbsp; λ ∝ 1/ρ</text>
  </g>
</svg>`;

// 3D SVG 6: Avogadro's Law & Ideal Gas Constants
const svg6_3d_avogadro_gas_constants = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16" font-weight="bold">1. Avogadro's Law at STP</text>

    <rect x="40" y="70" width="130" height="160" rx="8" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="2"/>
    <text x="105" y="110" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Oxygen O₂</text>
    <text x="105" y="140" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13.5">V = 22.4 L</text>
    <text x="105" y="170" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">N_A Molecules</text>

    <rect x="220" y="70" width="130" height="160" rx="8" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="2"/>
    <text x="285" y="110" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Helium He</text>
    <text x="285" y="140" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13.5">V = 22.4 L</text>
    <text x="285" y="170" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">N_A Molecules</text>

    <text x="195" y="270" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Equal V at same P &amp; T contain equal N!</text>
    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Avogadro's Number N_A = 6.022 × 10²³ mol⁻¹</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Ideal Gas Equation &amp; Constants</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="14.5" font-weight="bold">Equation of State of Perfect Gas:</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">P V = n R T = N k_B T</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Universal Gas Constant R:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">R = 8.314 J mol⁻¹ K⁻¹</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Boltzmann Constant k_B = R / N_A:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">k_B = 1.3806 × 10⁻²³ J K⁻¹</text>
  </g>
</svg>`;

// Construct Overview HTML for Chapter 9
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
  <div style="background: rgba(66, 165, 245, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for Unit IX: Kinetic Theory of Gases</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Perfect / Ideal Gas:</b>
        <span style="color: #FFFFFF;">A gas obeying ideal gas equation P V = n R T strictly at all pressures and temperatures.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Gas Pressure (P):</b>
        <span style="color: #FFFFFF;">Macroscopic pressure resulting from continuous elastic molecular bombardment against container walls: P = 1/3 ρ v_rms<sup>2</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Kinetic Temperature:</b>
        <span style="color: #FFFFFF;">Absolute temperature T is a direct measure of average translational kinetic energy per molecule: E_k = 3/2 k_B T.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. RMS Speed (v_rms):</b>
        <span style="color: #FFFFFF;">Square root of mean of squared speeds of gas molecules: v_rms = √(3 R T / M) = √(3 k_B T / m).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Degrees of Freedom (f):</b>
        <span style="color: #FFFFFF;">Total number of independent coordinates or motion modes required to completely specify molecular position/configuration.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Law of Equi-partition:</b>
        <span style="color: #FFFFFF;">In thermal equilibrium, total energy is shared equally among degrees of freedom, each contributing 1/2 k_B T per molecule.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Mean Free Path (λ):</b>
        <span style="color: #FFFFFF;">Average distance traveled by a gas molecule between two successive elastic collisions: λ = 1 / (√2 π n d<sup>2</sup>).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Universal Constants (R, k_B, N_A):</b>
        <span style="color: #FFFFFF;">R = 8.314 J mol⁻¹ K⁻¹, k_B = 1.38 × 10⁻²³ J K⁻¹, N_A = 6.022 × 10²³ mol⁻¹.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: EQUATION OF STATE OF A PERFECT GAS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Equation of State of a Perfect Gas and Work Done in Compressing a Gas</h2>
  <p>The <b>Kinetic Theory of Gases</b> relates macroscopic properties of gases (pressure, volume, temperature) to the microscopic motion of individual gas molecules. An ideal or perfect gas strictly obeys the equation of state:</p>
  ${eqBox("<b>P V = n R T = N k<sub>B</sub> T &nbsp;|&nbsp; R = 8.314 J mol<sup>-1</sup> K<sup>-1</sup> &nbsp;|&nbsp; k<sub>B</sub> = 1.3806 × 10<sup>-23</sup> J K<sup>-1</sup></b>")}
  <p>During isothermal compression from $V_1$ to $V_2$, the work done on the gas is given by $W = 2.303 n R T \log_{10}(V_1 / V_2)$.</p>
  ${svg3DCardWrapper("Avogadro's Law & Ideal Gas Equation (P V = n R T = N k_B T)", "Vessels showing equal gas volumes at STP containing N_A = 6.022×10²³ molecules and universal gas constants.", svg6_3d_avogadro_gas_constants)}

  <!-- SECTION 2: KINETIC THEORY & PRESSURE DERIVATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Kinetic Theory of Gases - Assumptions and Concept of Pressure Exerted by a Gas</h2>
  <p>By considering a gas consisting of $N$ identical point-mass molecules of mass $m$ in a cubic box of side $L$, rebounding elastically off container walls with momentum transfer $\Delta p = 2 m v_x$, the microscopic pressure formula is derived as:</p>
  ${eqBox("<b>P = " + frac("1", "3") + " ρ v<sub>rms</sub><sup>2</sup> = " + frac("1", "3") + " " + frac("N m", "V") + " v<sub>rms</sub><sup>2</sup> = " + frac("2", "3") + " E<sub>k</sub></b>")}
  ${svg3DCardWrapper("Ideal Gas Cubic Container & Pressure Exertion Model", "3D Cube L³ showing molecule momentum transfer Δp = 2 m v_x deriving P = 1/3 ρ v_rms².", svg1_3d_gas_pressure_derivation)}

  <!-- SECTION 3: KINETIC TEMPERATURE & MOLECULAR SPEEDS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Kinetic Interpretation of Temperature and RMS Speed of Gas Molecules</h2>
  <p>The kinetic interpretation establishes that absolute temperature $T$ is a direct measure of the average translational kinetic energy per molecule: $\bar{E}_k = \frac{3}{2} k_B T$. At absolute zero ($T = 0\text{ K}$), molecular translational motion ceases completely ($v_{\text{rms}} = 0$).</p>
  ${eqBox("<b>v<sub>rms</sub> = √(" + frac("3 R T", "M") + ") &nbsp;|&nbsp; v<sub>avg</sub> = √(" + frac("8 R T", "π M") + ") &nbsp;|&nbsp; v<sub>mp</sub> = √(" + frac("2 R T", "M") + ")</b>")}
  ${svg3DCardWrapper("Maxwell-Boltzmann Speed Distribution Curve (v_mp, v_avg, v_rms)", "Speed distribution graph showing Most Probable v_mp, Average v_avg, and RMS v_rms speed peaks.", svg2_3d_maxwell_speed_distribution)}

  <!-- SECTION 4: DEGREES OF FREEDOM & EQUI-PARTITION OF ENERGY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Degrees of Freedom, Law of Equi-partition of Energy and Specific Heat Capacities</h2>
  <p>According to the <b>Law of Equi-partition of Energy</b>, in thermal equilibrium, the total energy is divided equally among all degrees of freedom ($f$), with each degree carrying energy $\frac{1}{2} k_B T$ per molecule. Molar heat capacity at constant volume is $C_v = \frac{f}{2} R$, at constant pressure is $C_p = (\frac{f}{2} + 1) R$, and adiabatic index is $\gamma = 1 + \frac{2}{f}$.</p>
  ${svg3DCardWrapper("Degrees of Freedom (f) for Monoatomic, Diatomic & Polyatomic", "4 cards comparing degrees of freedom f=3 (Mono), f=5 (Diatomic rigid), f=7 (Vibrating), f=6 (Polyatomic).", svg3_3d_degrees_of_freedom)}
  ${svg3DCardWrapper("Law of Equi-partition of Energy & Molar Specific Heat Capacities", "Energy partition 1/2 k_B T per degree deriving molar heat capacities C_v, C_p, and adiabatic index γ.", svg4_3d_equipartition_specific_heats)}

  <!-- SECTION 5: MEAN FREE PATH AND AVOGADRO'S NUMBER -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Concept of Mean Free Path and Avogadro's Number</h2>
  <p>The <b>Mean Free Path ($\lambda$)</b> is the average distance traveled by a gas molecule between two consecutive collisions: $\lambda = \frac{1}{\sqrt{2} \pi n d^2} = \frac{k_B T}{\sqrt{2} \pi d^2 P}$, where $n$ is number density and $d$ is molecular diameter.</p>
  ${svg3DCardWrapper("Mean Free Path (λ) & Collision Cylinder Model", "Collision cross-section cylinder of diameter 2d and free path trajectory deriving λ = 1 / (√2 π n d²).", svg5_3d_mean_free_path)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(66, 165, 245, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for Unit IX: Kinetic Theory of Gases</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Ideal Gas Pressure:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">P = ` + frac('1', '3') + ` ρ v<sub>rms</sub><sup>2</sup> = ` + frac('2', '3') + ` E<sub>k</sub><br>P V = n R T = N k<sub>B</sub> T</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Molecular Speeds:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">v<sub>rms</sub> = √(` + frac('3 R T', 'M') + `)<br>v<sub>avg</sub> = √(` + frac('8 R T', 'π M') + `) &nbsp;|&nbsp; v<sub>mp</sub> = √(` + frac('2 R T', 'M') + `)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Equi-partition Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">E<sub>degree</sub> = ` + frac('1', '2') + ` k<sub>B</sub> T<br>U = ` + frac('f', '2') + ` R T</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Molar Specific Heats:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">C<sub>v</sub> = ` + frac('f', '2') + ` R &nbsp;|&nbsp; C<sub>p</sub> = (` + frac('f', '2') + ` + 1) R<br>γ = 1 + ` + frac('2', 'f') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Mean Free Path:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">λ = ` + frac('1', '√2 π n d<sup>2</sup>') + ` = ` + frac('k<sub>B</sub> T', '√2 π d<sup>2</sup> P') + `<br>λ ∝ T / P</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Universal Constants:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">R = 8.314 J mol⁻¹ K⁻¹<br>k<sub>B</sub> = 1.38 × 10⁻²³ J K⁻¹ &nbsp;|&nbsp; N<sub>A</sub> = 6.022 × 10²³</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate Solutions
function generateFullSolutionsHtml() {
  const fileContent = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-9.ts'), 'utf8');
  const matchSol = fileContent.match(/export const c11Phy9HtmlSolutions = ([\s\S]*?);?\s*$/);
  return JSON.parse(matchSol[1]);
}

const overviewHtml = generateFullOverviewHtml();
const solutionsHtml = generateFullSolutionsHtml();

const tsContent = `// Class 11 Physics Unit IX: Kinetic Theory of Gases (100% Exact Official NCERT Syllabus Alignment)
// High-Level Reference Book Content & NCERT Solutions (6 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy9HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy9HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-9.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully rebuilt c11-phy-9.ts with enhanced deep prose and widened 3D SVG diagrams!");
