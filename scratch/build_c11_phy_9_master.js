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
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(66, 165, 245, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(66, 165, 245, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
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
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(66, 165, 245, 0.25);">
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

// ==================== 6 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 9 ====================

// 3D SVG 1: Ideal Gas Cubic Container & Pressure Exertion Model
const svg1_3d_gas_pressure_derivation = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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

  <!-- Left Side: 3D Cubic Gas Container (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Gas Molecule Collisions in Cube L³</text>

    <!-- 3D Cube Perspective Box -->
    <polygon points="60,140 180,80 300,140 180,200" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="1.5"/>
    <polygon points="60,140 180,200 180,330 60,270" fill="rgba(66,165,245,0.12)" stroke="#42A5F5" stroke-width="1.5"/>
    <polygon points="180,200 300,140 300,270 180,330" fill="rgba(66,165,245,0.05)" stroke="#42A5F5" stroke-width="1.5"/>

    <!-- Molecule m hitting right wall area A = L² -->
    <circle cx="210" cy="220" r="10" fill="url(#molGrad1)"/>
    <line x1="210" y1="220" x2="285" y2="220" stroke="#76FF03" stroke-width="3" marker-end="url(#arrowCyan1)"/>
    <text x="240" y="210" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">v_x →</text>

    <polygon points="300,140 300,270 180,330 180,200" fill="rgba(255,81,47,0.25)" stroke="#FF512F" stroke-width="2"/>
    <text x="250" y="270" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Wall Area A = L²</text>

    <text x="182" y="375" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">Momentum Change per Collision Δp = 2 m v_x</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Gas Pressure Formulae Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="17" font-weight="bold">2. Pressure Exerted by Ideal Gas</text>

    <rect x="10" y="60" width="345" height="100" rx="8" fill="rgba(66,165,245,0.1)" stroke="#42A5F5" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="14.5" font-weight="bold">Pressure Derivation Equation:</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">P = ⅓ ρ v_rms² = ⅓ (N m / V) v_rms²</text>

    <rect x="10" y="175" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="200" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Pressure &amp; Kinetic Energy Relation:</text>
    <text x="182" y="235" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">P = ⅔ E_k &nbsp; (Energy Density E_k)</text>
    <text x="182" y="265" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ Pressure equals 2/3 of translational KE per unit volume!</text>

    <rect x="10" y="300" width="345" height="115" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="325" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Key Assumptions of Kinetic Theory:</text>
    <text x="25" y="353" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Gas consists of tiny elastic point-mass spheres</text>
    <text x="25" y="375" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Zero intermolecular forces except during instant collision</text>
  </g>
</svg>`;

// 3D SVG 2: Maxwell-Boltzmann Speed Distribution Curve (vmp, vag, vrms)
const svg2_3d_maxwell_speed_distribution = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Left Side: Maxwell Distribution Curve (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Maxwell-Boltzmann Speed Distribution</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="340" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="345" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Speed v</text>
    <text x="40" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">N(v)</text>

    <!-- Distribution Curve -->
    <path d="M 50 330 Q 130 70 220 220 Q 280 300 330 325" fill="none" stroke="#42A5F5" stroke-width="3.5"/>

    <!-- Speed Lines: v_mp, v_avg, v_rms -->
    <line x1="125" y1="95" x2="125" y2="330" stroke="#FF512F" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="110" y="85" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">v_mp</text>

    <line x1="145" y1="115" x2="145" y2="330" stroke="#FFD700" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="140" y="105" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold">v_avg</text>

    <line x1="168" y1="145" x2="168" y2="330" stroke="#76FF03" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="172" y="135" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">v_rms</text>

    <text x="182" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Ratio v_mp : v_avg : v_rms = 1 : 1.128 : 1.225</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Speed Formulae Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="17" font-weight="bold">2. Molecular Speed Equations</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Root-Mean-Square Speed (v_rms):</text>
    <text x="182" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_rms = √(3 R T / M) = √(3 k_B T / m)</text>

    <rect x="10" y="165" width="345" height="90" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Average Speed (v_avg):</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_avg = √(8 R T / π M)</text>

    <rect x="10" y="270" width="345" height="140" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="295" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Most Probable Speed (v_mp):</text>
    <text x="182" y="330" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_mp = √(2 R T / M)</text>
    <text x="182" y="365" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Kinetic Temp: E_k = 🔍 3/2 k_B T</text>
    <text x="182" y="390" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">• At Absolute Zero T=0 K, all molecular motion stops!</text>
  </g>
</svg>`;

// 3D SVG 3: Degrees of Freedom (f) for Monoatomic, Diatomic & Polyatomic
const svg3_3d_degrees_of_freedom = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(20, 20)">
    <!-- Card 1: Monoatomic Gas -->
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(66,165,245,0.08)" stroke="#42A5F5" stroke-width="1.5"/>
    <text x="182" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16" font-weight="bold">1. Monoatomic Gas (He, Ne, Ar)</text>
    <text x="182" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Degrees of Freedom f = 3</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13.5">• 3 Translational degrees (x, y, z axes)</text>
    <text x="25" y="130" fill="#76FF03" font-family="sans-serif" font-size="13.5">• Molar internal energy U = (3/2) R T</text>
  </g>

  <g transform="translate(415, 20)">
    <!-- Card 2: Rigid Diatomic Gas -->
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="182" y="30" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">2. Diatomic Gas Rigid (O₂, N₂, H₂)</text>
    <text x="182" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Degrees of Freedom f = 5</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13.5">• 3 Translational + 2 Rotational degrees</text>
    <text x="25" y="130" fill="#FFD700" font-family="sans-serif" font-size="13.5">• Molar internal energy U = (5/2) R T</text>
  </g>

  <g transform="translate(20, 235)">
    <!-- Card 3: Non-Rigid Diatomic (Vibrating) -->
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="182" y="30" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">3. Diatomic Gas at High Temp (Vibrational)</text>
    <text x="182" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Degrees of Freedom f = 7</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13.5">• 3 Translational + 2 Rotational + 2 Vibrational</text>
    <text x="25" y="130" fill="#FF8A65" font-family="sans-serif" font-size="13.5">• Molar internal energy U = (7/2) R T</text>
  </g>

  <g transform="translate(415, 235)">
    <!-- Card 4: Polyatomic Gas -->
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.5"/>
    <text x="182" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">4. Polyatomic Non-Linear Gas (H₂O, CH₄)</text>
    <text x="182" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Degrees of Freedom f = 6</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13.5">• 3 Translational + 3 Rotational degrees</text>
    <text x="25" y="130" fill="#00E5FF" font-family="sans-serif" font-size="13.5">• Molar internal energy U = 3 R T</text>
  </g>
</svg>`;

// 3D SVG 4: Law of Equi-partition of Energy & Molar Specific Heat Capacities (Cv, Cp, γ)
const svg4_3d_equipartition_specific_heats = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Left Side: Law Statement (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Law of Equi-partition of Energy</text>

    <rect x="10" y="60" width="345" height="120" rx="8" fill="rgba(66,165,245,0.1)" stroke="#42A5F5" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="14.5" font-weight="bold">Law Statement:</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">For a dynamical system in thermal equilibrium, total energy is distributed equally among all degrees of freedom.</text>

    <rect x="10" y="200" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="225" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Energy per Degree of Freedom:</text>
    <text x="182" y="260" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">E_degree = ½ k_B T &nbsp; (Per Molecule)</text>

    <text x="182" y="375" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Molar Energy U = (f / 2) R T</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Specific Heat Capacities Summary (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="17" font-weight="bold">2. Specific Heat Capacities (C_v, C_p, γ)</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">C_v &amp; C_p Equations:</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">C_v = (f / 2) R &nbsp;|&nbsp; C_p = (f / 2 + 1) R</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Adiabatic Index γ = C_p / C_v:</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">γ = 1 + (2 / f)</text>
    <text x="182" y="255" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ Mono (f=3): γ=1.67 | Di (f=5): γ=1.40 | Poly (f=6): γ=1.33</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Mayer's Formula Verification:</text>
    <text x="182" y="348" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">C_p - C_v = R</text>
    <text x="182" y="380" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Valid for all ideal gas molecular structures!</text>
  </g>
</svg>`;

// 3D SVG 5: Mean Free Path (λ) & Collision Cylinder Model
const svg5_3d_mean_free_path = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="molGrad5" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#42A5F5"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
  </defs>

  <!-- Left Side: Collision Cylinder Model (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Collision Cylinder &amp; Zig-Zag Trajectory</text>

    <!-- Collision Cylinder of Diameter 2d -->
    <rect x="50" y="160" width="260" height="80" rx="40" fill="rgba(66,165,245,0.12)" stroke="#42A5F5" stroke-width="2"/>

    <!-- Central Moving Molecule -->
    <circle cx="180" cy="200" r="14" fill="url(#molGrad5)"/>

    <!-- Target Molecule Collisions -->
    <circle cx="90" cy="180" r="14" fill="#FF512F"/>
    <circle cx="270" cy="220" r="14" fill="#FF512F"/>

    <!-- Trajectory Path λ -->
    <line x1="90" y1="180" x2="180" y2="200" stroke="#76FF03" stroke-width="2.5"/>
    <line x1="180" y1="200" x2="270" y2="220" stroke="#76FF03" stroke-width="2.5"/>

    <text x="135" y="175" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Path λ₁</text>
    <text x="225" y="235" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Path λ₂</text>

    <text x="182" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Mean Free Path λ = Average Free Distance</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Mean Free Path Equations Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="17" font-weight="bold">2. Mean Free Path Formulae</text>

    <rect x="10" y="60" width="345" height="110" rx="8" fill="rgba(66,165,245,0.1)" stroke="#42A5F5" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="14.5" font-weight="bold">Mean Free Path Equation (λ):</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">λ = 1 / (√2 π n d²)</text>
    <text x="182" y="152" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">n = Number density | d = Molecular diameter</text>

    <rect x="10" y="185" width="345" height="110" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="182" y="210" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Dependence on Pressure &amp; Temp:</text>
    <text x="182" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">λ = k_B T / (√2 π d² P)</text>
    <text x="182" y="275" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ λ ∝ T (at const P) &nbsp;|&nbsp; λ ∝ 1/P (at const T)</text>

    <rect x="10" y="305" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="330" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Dependence on Gas Density ρ:</text>
    <text x="182" y="362" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">λ = m / (√2 π d² ρ) &nbsp; ⇒ &nbsp; λ ∝ 1/ρ</text>
  </g>
</svg>`;

// 3D SVG 6: Avogadro's Law & Ideal Gas Constants (R, kB, NA)
const svg6_3d_avogadro_gas_constants = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Avogadro's Law at STP</text>

    <!-- Vessel 1: 1 Mole Gas A -->
    <rect x="40" y="70" width="120" height="160" rx="8" fill="rgba(66,165,245,0.1)" stroke="#42A5F5" stroke-width="2"/>
    <text x="100" y="110" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Oxygen O₂</text>
    <text x="100" y="140" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14">V = 22.4 L</text>
    <text x="100" y="170" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5">N_A Molecules</text>

    <!-- Vessel 2: 1 Mole Gas B -->
    <rect x="205" y="70" width="120" height="160" rx="8" fill="rgba(66,165,245,0.1)" stroke="#42A5F5" stroke-width="2"/>
    <text x="265" y="110" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Helium He</text>
    <text x="265" y="140" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14">V = 22.4 L</text>
    <text x="265" y="170" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5">N_A Molecules</text>

    <text x="182" y="270" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Equal V at same P &amp; T contain equal N!</text>

    <text x="182" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Avogadro's Number N_A = 6.022 × 10²³ mol⁻¹</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Universal Gas Constants Summary Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#42A5F5" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="17" font-weight="bold">2. Ideal Gas Equation &amp; Constants</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(66,165,245,0.1)" stroke="#42A5F5" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#42A5F5" font-family="sans-serif" font-size="14.5" font-weight="bold">Equation of State of Perfect Gas:</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">P V = n R T = N k_B T</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Universal Gas Constant R:</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">R = 8.314 J mol⁻¹ K⁻¹</text>
    <text x="182" y="255" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="13.5">R = 1.987 cal mol⁻¹ K⁻¹ ≈ 2 cal/mol K</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Boltzmann Constant k_B = R / N_A:</text>
    <text x="182" y="348" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">k_B = 1.3806 × 10⁻²³ J K⁻¹</text>
    <text x="182" y="380" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Relates macroscopic gas laws to molecular kinetics!</text>
  </g>
</svg>`;

// Construct final Overview HTML for Chapter 9 (100% Exact Official NCERT Syllabus Section Headings)
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
  <div style="background: rgba(66, 165, 245, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit IX: Kinetic Theory of Gases</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Perfect / Ideal Gas:</b>
        <span style="color: #FFFFFF;">A gas obeying ideal gas equation P V = n R T strictly at all pressures and temperatures.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Gas Pressure (P):</b>
        <span style="color: #FFFFFF;">Macroscopic pressure resulting from continuous elastic molecular bombardment against container walls: P = 1/3 ρ v_rms<sup>2</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Kinetic Temperature:</b>
        <span style="color: #FFFFFF;">Absolute temperature T is a direct measure of average translational kinetic energy per molecule: E_k = 3/2 k_B T.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. RMS Speed (v_rms):</b>
        <span style="color: #FFFFFF;">Square root of mean of squared speeds of gas molecules: v_rms = √(3 R T / M) = √(3 k_B T / m).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Degrees of Freedom (f):</b>
        <span style="color: #FFFFFF;">Total number of independent coordinates or motion modes required to completely specify molecular position/configuration.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Law of Equi-partition:</b>
        <span style="color: #FFFFFF;">In thermal equilibrium, total energy is shared equally among degrees of freedom, each contributing 1/2 k_B T per molecule.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Mean Free Path (λ):</b>
        <span style="color: #FFFFFF;">Average distance traveled by a gas molecule between two successive elastic collisions: λ = 1 / (√2 π n d<sup>2</sup>).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Universal Gas Constant (R):</b>
        <span style="color: #FFFFFF;">Universal constant of proportionality in ideal gas law: R = 8.314 J mol<sup>-1</sup> K<sup>-1</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Boltzmann Constant (k_B):</b>
        <span style="color: #FFFFFF;">Gas constant per molecule: k_B = R / N_A = 1.3806 × 10<sup>-23</sup> J K<sup>-1</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Avogadro's Number (N_A):</b>
        <span style="color: #FFFFFF;">Number of gas molecules in 1 mole of any substance: N_A = 6.022 × 10<sup>23</sup> mol<sup>-1</sup>.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: EQUATION OF STATE OF A PERFECT GAS AND WORK DONE IN COMPRESSING A GAS (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Equation of State of a Perfect Gas and Work Done in Compressing a Gas</h2>
  
  ${defCard("Equation of State of Perfect Gas", "The fundamental thermodynamic equation connecting pressure P, volume V, temperature T, and amount of gas n: P V = n R T = N k_B T.")}

  ${eqBox("<b>P V = n R T &nbsp;|&nbsp; R = 8.314 J mol<sup>-1</sup> K<sup>-1</sup> &nbsp;|&nbsp; k<sub>B</sub> = 1.38 × 10<sup>-23</sup> J K<sup>-1</sup></b>")}

  <p>An ideal or perfect gas is a theoretical gas whose molecules occupy negligible volume and exert no intermolecular forces. Real gases approximate ideal behavior at low pressures and high temperatures.</p>

  <div style="margin: 12px 0;">
    ${colonTopic("1. Gas Laws Combination", "Boyle's Law (P V = Const at T), Charles's Law (V / T = Const at P), and Avogadro's Law (V ∝ n) combine to give P V = n R T.")}
    ${colonTopic("2. Work Done in Compressing Gas", singleLineCode("W = ∫<sub>V1</sub><sup>V2</sup> P dV = 2.303 n R T log<sub>10</sub>(" + frac('V<sub>1</sub>', 'V<sub>2</sub>') + ") &nbsp; (Isothermal Compression)"))}
  </div>

  ${svg3DCardWrapper("Avogadro's Law & Ideal Gas Equation (P V = n R T = N k_B T)", "3D Vessels showing equal gas volumes at STP containing N_A = 6.022×10²³ molecules and universal gas constants.", svg6_3d_avogadro_gas_constants)}

  <!-- SECTION 2: KINETIC THEORY OF GASES - ASSUMPTIONS AND CONCEPT OF PRESSURE EXERTED BY A GAS (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Kinetic Theory of Gases - Assumptions and Concept of Pressure Exerted by a Gas</h2>

  ${defCard("Pressure Exerted by a Gas", "The macroscopic force per unit area exerted on container walls due to continuous elastic collisions of gas molecules: P = 1/3 ρ v_rms<sup>2</sup>.")}

  ${eqBox("<b>P = " + frac('1', '3') + " ρ v<sub>rms</sub><sup>2</sup> = " + frac('1', '3') + " " + frac('N m', 'V') + " v<sub>rms</sub><sup>2</sup> = " + frac('2', '3') + " E<sub>k</sub></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Postulates of Kinetic Theory & Pressure Derivation</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Point Mass Spheres", "Gas molecules are tiny hard spheres whose volume is negligible compared to total container volume.")}
    ${colonTopic("Elastic Collisions", "Intermolecular and wall collisions are perfectly elastic, conserving total kinetic energy.")}
    ${colonTopic("Momentum Transfer", "Molecule of mass m hitting wall at speed v_x rebounds with -v_x, imparting momentum Δp = 2 m v_x to the wall.")}
  </div>

  ${svg3DCardWrapper("Ideal Gas Cubic Container & Pressure Exertion Model", "3D Cube L³ showing molecule momentum transfer Δp = 2 m v_x upon elastic collision deriving P = 1/3 ρ v_rms².", svg1_3d_gas_pressure_derivation)}

  <!-- SECTION 3: KINETIC INTERPRETATION OF TEMPERATURE AND RMS SPEED OF GAS MOLECULES (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Kinetic Interpretation of Temperature and RMS Speed of Gas Molecules</h2>

  ${defCard("Kinetic Interpretation of Temperature", "States that absolute temperature T is directly proportional to the average translational kinetic energy per molecule of gas: E_k = 3/2 k_B T.")}

  ${eqBox("<b>v<sub>rms</sub> = √(" + frac('3 R T', 'M') + ") = √(" + frac('3 k<sub>B</sub> T', 'm') + ") &nbsp;|&nbsp; Ratio v<sub>mp</sub> : v<sub>avg</sub> : v<sub>rms</sub> = 1 : 1.128 : 1.225</b>")}

  ${svg3DCardWrapper("Maxwell-Boltzmann Speed Distribution Curve (v_mp, v_avg, v_rms)", "Speed distribution graph showing Most Probable v_mp, Average v_avg, and RMS v_rms speed peaks.", svg2_3d_maxwell_speed_distribution)}

  <!-- SECTION 4: DEGREES OF FREEDOM, LAW OF EQUI-PARTITION OF ENERGY AND SPECIFIC HEAT CAPACITIES (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Degrees of Freedom, Law of Equi-partition of Energy and Specific Heat Capacities</h2>

  ${defCard("Law of Equi-partition of Energy", "States that in thermal equilibrium, total energy of a gas is divided equally among all its degrees of freedom, each carrying energy 1/2 k_B T per molecule.")}

  ${eqBox("<b>C<sub>v</sub> = " + frac('f', '2') + " R &nbsp;|&nbsp; C<sub>p</sub> = ( " + frac('f', '2') + " + 1 ) R &nbsp;|&nbsp; γ = " + frac('C<sub>p</sub>', 'C<sub>v</sub>') + " = 1 + " + frac('2', 'f') + "</b>")}

  ${svg3DCardWrapper("Degrees of Freedom (f) for Monoatomic, Diatomic & Polyatomic", "4 3D cards comparing degrees of freedom f=3 (Mono), f=5 (Diatomic rigid), f=7 (Vibrating), f=6 (Polyatomic).", svg3_3d_degrees_of_freedom)}
  ${svg3DCardWrapper("Law of Equi-partition of Energy & Molar Specific Heat Capacities", "Energy partition 1/2 k_B T per degree of freedom deriving molar heat capacities C_v, C_p, and adiabatic index γ.", svg4_3d_equipartition_specific_heats)}

  <!-- SECTION 5: CONCEPT OF MEAN FREE PATH AND AVOGADRO'S NUMBER (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Concept of Mean Free Path and Avogadro's Number</h2>

  ${defCard("Mean Free Path (λ)", "The average distance traveled by a gas molecule between two successive collisions: λ = 1 / (√2 π n d<sup>2</sup>).")}

  ${eqBox("<b>λ = " + frac('1', '√2 π n d<sup>2</sup>') + " = " + frac('k<sub>B</sub> T', '√2 π d<sup>2</sup> P') + " &nbsp;|&nbsp; N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>-1</sup></b>")}

  ${svg3DCardWrapper("Mean Free Path (λ) & Collision Cylinder Model", "Collision cross-section cylinder of diameter 2d and zig-zag free path trajectory deriving λ = 1 / (√2 π n d²).", svg5_3d_mean_free_path)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(66, 165, 245, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Molecular Speeds & Equi-partition Summary for Unit IX</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Ideal Gas Pressure:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">P = ` + frac('1', '3') + ` ρ v<sub>rms</sub><sup>2</sup> = ` + frac('2', '3') + ` E<sub>k</sub><br>P V = n R T = N k<sub>B</sub> T</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Molecular Speeds:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>rms</sub> = √(` + frac('3 R T', 'M') + `)<br>v<sub>avg</sub> = √(` + frac('8 R T', 'π M') + `) &nbsp;|&nbsp; v<sub>mp</sub> = √(` + frac('2 R T', 'M') + `)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Equi-partition Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">E<sub>degree</sub> = ` + frac('1', '2') + ` k<sub>B</sub> T<br>U = ` + frac('f', '2') + ` R T</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Molar Specific Heats:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">C<sub>v</sub> = ` + frac('f', '2') + ` R &nbsp;|&nbsp; C<sub>p</sub> = (` + frac('f', '2') + ` + 1) R<br>γ = 1 + ` + frac('2', 'f') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Mean Free Path:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">λ = ` + frac('1', '√2 π n d<sup>2</sup>') + ` = ` + frac('k<sub>B</sub> T', '√2 π d<sup>2</sup> P') + `<br>λ ∝ T / P</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Universal Constants:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">R = 8.314 J mol<sup>-1</sup> K<sup>-1</sup><br>k<sub>B</sub> = 1.38 × 10<sup>-23</sup> J K<sup>-1</sup> &nbsp;|&nbsp; N<sub>A</sub> = 6.022 × 10<sup>23</sup></span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate 100 Textbook Standard Solutions (25 MCQs, 30 VSAs, 30 SAs, 15 LAs) for Chapter 9
function generateFullSolutionsHtml() {
  let html = `<style>
    p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) { text-align: justify !important; }
    h1, h2, h3, h4, h5, h6 { text-align: left; }
    .text-center { text-align: center !important; }
  </style>
  <div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 10px;">NCERT & Textbook Standard Exercise Solutions — Unit IX: Kinetic Theory of Gases</h1>`;

  // 1. SECTION 1: 25 MCQs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">SECTION 1: MULTIPLE CHOICE QUESTIONS (MCQs 1 - 25)</h2>`;

  const mcqQuestions = [
    { q: "The pressure exerted by an ideal gas in terms of rms speed is given by:", opts: ["(a) P = ⅓ ρ v_rms²", "(b) P = ½ ρ v_rms²", "(c) P = ⅔ ρ v_rms²", "(d) P = ρ v_rms²"], ans: "(a)", exp: "By Kinetic Theory derivation P = ⅓ ρ v_rms²." },
    { q: "Average translational kinetic energy per molecule of an ideal gas at temperature T is:", opts: ["(a) ½ k_B T", "(b) 3/2 k_B T", "(c) 5/2 k_B T", "(d) k_B T"], ans: "(b)", exp: "Translational KE per molecule = 3 × (½ k_B T) = 3/2 k_B T." },
    { q: "At what temperature does all molecular translational motion of an ideal gas cease?", opts: ["(a) 0 °C", "(b) 273 K", "(c) 0 K (-273.15 °C)", "(d) -100 °C"], ans: "(c)", exp: "At Absolute Zero (0 K), v_rms = 0 and translational kinetic energy becomes zero." },
    { q: "The ratio of most probable speed, average speed, and rms speed (v_mp : v_avg : v_rms) is:", opts: ["(a) 1 : 1.128 : 1.225", "(b) 1.225 : 1.128 : 1", "(c) 1 : 1 : 1", "(d) 1.414 : 1.60 : 1.73"], ans: "(a)", exp: "v_mp = √(2RT/M) ≈ 1.414, v_avg = √(8RT/πM) ≈ 1.596, v_rms = √(3RT/M) ≈ 1.732. Ratio is 1 : 1.128 : 1.225." },
    { q: "The number of degrees of freedom for a rigid diatomic gas molecule like N₂ is:", opts: ["(a) 3", "(b) 5", "(c) 6", "(d) 7"], ans: "(b)", exp: "Diatomic rigid molecule has 3 translational + 2 rotational degrees of freedom = 5." },
    { q: "According to the Law of Equi-partition of Energy, energy per degree of freedom per molecule is:", opts: ["(a) k_B T", "(b) ½ k_B T", "(c) 3/2 k_B T", "(d) R T"], ans: "(b)", exp: "Each degree of freedom contributes ½ k_B T energy per molecule in thermal equilibrium." },
    { q: "The ratio of molar heat capacities γ = C_p / C_v for a monoatomic gas like Helium is:", opts: ["(a) 1.40", "(b) 1.67", "(c) 1.33", "(d) 1.25"], ans: "(b)", exp: "Monoatomic f = 3 ⇒ C_v = 3/2 R, C_p = 5/2 R ⇒ γ = 5/3 ≈ 1.67." },
    { q: "Mean free path λ of a gas molecule depends on molecular diameter d as:", opts: ["(a) λ ∝ d", "(b) λ ∝ 1/d", "(c) λ ∝ 1/d²", "(d) λ ∝ d²"], ans: "(c)", exp: "Mean free path formula λ = 1 / (√2 π n d²), so λ is inversely proportional to d²." },
    { q: "If temperature of a gas is increased from 27°C to 927°C, its rms speed becomes:", opts: ["(a) Doubled", "(b) Tripled", "(c) Quadrupled", "(d) Halved"], ans: "(a)", exp: "T₁ = 300 K, T₂ = 1200 K (4 times T₁). Since v_rms ∝ √T, v_rms' = √4 v_rms = 2 v_rms." },
    { q: "The value of Universal Gas Constant R is:", opts: ["(a) 8.314 J mol⁻¹ K⁻¹", "(b) 1.38 × 10⁻²³ J K⁻¹", "(c) 6.022 × 10²³ mol⁻¹", "(d) 9.8 m s⁻²"], ans: "(a)", exp: "Universal gas constant R = 8.314 J mol⁻¹ K⁻¹." },
    { q: "The relation between Boltzmann constant k_B, Universal gas constant R, and Avogadro's number N_A is:", opts: ["(a) k_B = R N_A", "(b) k_B = R / N_A", "(c) k_B = N_A / R", "(d) k_B = R + N_A"], ans: "(b)", exp: "Boltzmann constant is the gas constant per molecule: k_B = R / N_A." },
    { q: "The pressure of a gas inside a closed container is doubled at constant volume. Its rms speed increases by factor of:", opts: ["(a) 2", "(b) √2", "(c) 4", "(d) ½"], ans: "(b)", exp: "P ∝ T at constant V. Doubling P doubles T. Since v_rms ∝ √T, v_rms increases by √2." },
    { q: "For a polyatomic non-linear gas with 6 degrees of freedom, the adiabatic index γ is:", opts: ["(a) 1.67", "(b) 1.40", "(c) 1.33", "(d) 1.20"], ans: "(c)", exp: "γ = 1 + 2/f = 1 + 2/6 = 1 + 1/3 = 4/3 ≈ 1.33." },
    { q: "Mean free path λ of a gas at constant volume varies with absolute temperature T as:", opts: ["(a) λ ∝ T", "(b) λ ∝ √T", "(c) Independent of T", "(d) λ ∝ 1/T"], ans: "(c)", exp: "At constant volume, number density n = N/V is constant. Since λ = 1/(√2 π n d²), λ is independent of T." },
    { q: "Two gases Oxygen (M=32) and Hydrogen (M=2) are at same temperature T. Ratio of their rms speeds (v_O2 / v_H2) is:", opts: ["(a) 1 : 4", "(b) 4 : 1", "(c) 1 : 16", "(d) 16 : 1"], ans: "(a)", exp: "v_rms ∝ 1/√M. Ratio v_O2 / v_H2 = √(M_H2 / M_O2) = √(2/32) = √(1/16) = 1/4." },
    { q: "Which gas law states that equal volumes of all gases at same P and T contain equal number of molecules?", opts: ["(a) Boyle's Law", "(b) Charles's Law", "(c) Avogadro's Law", "(d) Graham's Law"], ans: "(c)", exp: "Avogadro's Hypothesis states equal V at same P and T contains equal N = N_A." },
    { q: "The mean kinetic energy per mole of a monoatomic gas is:", opts: ["(a) ½ R T", "(b) 3/2 R T", "(c) 5/2 R T", "(d) 3 R T"], ans: "(b)", exp: "Per mole energy U = N_A × (3/2 k_B T) = 3/2 R T." },
    { q: "Mean free path of gas molecules at constant temperature varies with pressure P as:", opts: ["(a) λ ∝ P", "(b) λ ∝ 1/P", "(c) λ ∝ P²", "(d) Independent of P"], ans: "(b)", exp: "At constant T, number density n = P / (k_B T), so λ = k_B T / (√2 π d² P) ∝ 1/P." },
    { q: "What is the number of degrees of freedom for a non-rigid vibrating diatomic molecule at high temperature?", opts: ["(a) 3", "(b) 5", "(c) 6", "(d) 7"], ans: "(d)", exp: "3 translational + 2 rotational + 2 vibrational (KE + PE) = 7 degrees of freedom." },
    { q: "If pressure of a gas is held constant, its density ρ varies with absolute temperature T as:", opts: ["(a) ρ ∝ T", "(b) ρ ∝ 1/T", "(c) ρ ∝ √T", "(d) Independent of T"], ans: "(b)", exp: "P = (ρ/M) R T ⇒ ρ = P M / (R T) ∝ 1/T." },
    { q: "The value of Boltzmann constant k_B is approximately:", opts: ["(a) 1.38 × 10⁻²³ J K⁻¹", "(b) 8.314 J K⁻¹", "(c) 6.022 × 10²³ J K⁻¹", "(d) 1.6 × 10⁻¹⁹ J K⁻¹"], ans: "(a)", exp: "k_B = R / N_A = 8.314 / (6.022×10²³) = 1.3806 × 10⁻²³ J/K." },
    { q: "A vessel contains mixture of 1 mole He and 1 mole O₂ at temp T. Total internal energy of mixture is:", opts: ["(a) 3 R T", "(b) 4 R T", "(c) 5 R T", "(d) 8/2 R T"], ans: "(b)", exp: "U_He = 3/2 R T, U_O2 = 5/2 R T. Total U = 3/2 R T + 5/2 R T = 4 R T." },
    { q: "At what temperature will rms speed of Oxygen molecules equal that of Hydrogen molecules at -73°C (200 K)?", opts: ["(a) 800 K", "(b) 1600 K", "(c) 3200 K", "(d) 400 K"], ans: "(c)", exp: "T_O2 / M_O2 = T_H2 / M_H2 ⇒ T_O2 / 32 = 200 / 2 ⇒ T_O2 = 16 × 200 = 3200 K." },
    { q: "The dimensions of Boltzmann Constant k_B are:", opts: ["(a) [M L² T⁻² K⁻¹]", "(b) [M L T⁻² K⁻¹]", "(c) [M L² T⁻¹ K⁻¹]", "(d) [M L⁻¹ T⁻² K⁻¹]"], ans: "(a)", exp: "k_B = Energy / Temp ⇒ [M L² T⁻²][K⁻¹] = [M L² T⁻² K⁻¹]." },
    { q: "In a gas of molecular diameter d = 2 Å, if density is doubled at constant T, mean free path λ will:", opts: ["(a) Double", "(b) Halve", "(c) Quadruple", "(d) Remain constant"], ans: "(b)", exp: "λ ∝ 1/ρ. Doubling density ρ halves the mean free path λ." }
  ];

  mcqQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(66, 165, 245, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 15px 0;">
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
    { q: "Write the equation of state for n moles of an ideal gas.", a: "P V = n R T (or P V = N k_B T)." },
    { q: "State Boyle's Law.", a: "For a given mass of gas at constant temperature, pressure is inversely proportional to volume (P V = Constant)." },
    { q: "State Charles's Law.", a: "For a given mass of gas at constant pressure, volume is directly proportional to absolute temperature (V / T = Constant)." },
    { q: "Define an ideal gas.", a: "A gas that strictly obeys equation P V = n R T at all pressures and temperatures." },
    { q: "Write the expression for pressure exerted by an ideal gas in terms of density ρ and rms speed v_rms.", a: "P = ⅓ ρ v_rms²." },
    { q: "What is the kinetic interpretation of absolute temperature T?", a: "Absolute temperature is a direct measure of average translational kinetic energy per molecule (E_k = 3/2 k_B T)." },
    { q: "Define Root-Mean-Square (RMS) speed of gas molecules.", a: "The square root of the mean of the squares of individual molecular speeds: v_rms = √(3 R T / M)." },
    { q: "Write the formula for most probable speed v_mp of gas molecules.", a: "v_mp = √(2 R T / M)." },
    { q: "Write the formula for average speed v_avg of gas molecules.", a: "v_avg = √(8 R T / π M)." },
    { q: "What is the ratio of v_mp : v_avg : v_rms?", a: "√2 : √(8/π) : √3 ≈ 1 : 1.128 : 1.225." },
    { q: "Define Degrees of Freedom (f) of a gas molecule.", a: "The total number of independent coordinates or modes of motion required to completely specify molecular state." },
    { q: "State the Law of Equi-partition of Energy.", a: "In thermal equilibrium, total energy of gas is distributed equally among degrees of freedom, each carrying ½ k_B T per molecule." },
    { q: "What is the number of degrees of freedom for a monoatomic gas molecule?", a: "3 translational degrees of freedom (f = 3)." },
    { q: "What is the number of degrees of freedom for a rigid diatomic gas molecule?", a: "5 degrees of freedom (3 translational + 2 rotational)." },
    { q: "Write the expression for molar specific heat C_v in terms of degrees of freedom f.", a: "C_v = (f / 2) R." },
    { q: "Write the expression for molar specific heat C_p in terms of degrees of freedom f.", a: "C_p = (f / 2 + 1) R." },
    { q: "Write the expression for adiabatic index γ = C_p / C_v in terms of degrees of freedom f.", a: "γ = 1 + (2 / f)." },
    { q: "Define Mean Free Path (λ) of a gas molecule.", a: "The average distance traveled by a molecule between two consecutive collisions." },
    { q: "Write the formula for mean free path λ in terms of number density n and molecular diameter d.", a: "λ = 1 / (√2 π n d²)." },
    { q: "How does mean free path λ depend on absolute temperature T at constant pressure?", a: "λ ∝ T (at constant P)." },
    { q: "How does mean free path λ depend on pressure P at constant temperature?", a: "λ ∝ 1/P (at constant T)." },
    { q: "Write the numerical value and units of Universal Gas Constant R.", a: "R = 8.314 J mol⁻¹ K⁻¹." },
    { q: "Write the numerical value and units of Boltzmann Constant k_B.", a: "k_B = 1.3806 × 10⁻²³ J K⁻¹." },
    { q: "Write the numerical value and units of Avogadro's Number N_A.", a: "N_A = 6.022 × 10²³ mol⁻¹." },
    { q: "What is the average kinetic energy per molecule of a rigid diatomic gas?", a: "E_k = (5/2) k_B T." },
    { q: "Why do light gases like Hydrogen escape Earth's atmosphere while heavy gases remain?", a: "RMS speed of H₂ at upper atmosphere temps exceeds Earth's escape speed (11.2 km/s)." },
    { q: "What is the value of v_rms of gas molecules at absolute zero temperature (0 K)?", a: "Zero (v_rms = 0)." },
    { q: "How does rms speed of a gas depend on its molar mass M at constant temperature?", a: "v_rms ∝ 1 / √M (Lighter molecules move faster)." },
    { q: "Why is pressure of a gas inside a container independent of shape of container?", a: "Because collisions are completely random in all 3 spatial directions." },
    { q: "What is Avogadro's Hypothesis?", a: "Equal volumes of all gases under same conditions of temperature and pressure contain equal numbers of molecules." }
  ];

  vsaQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(66, 165, 245, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 14px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 26}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Ans:</b> ${item.a}</p>
    </div>`;
  });

  // 3. SECTION 3: 30 SAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 3: SHORT ANSWER QUESTIONS (SAs 56 - 85)</h2>`;

  const saQuestions = [
    { q: "State the main postulates/assumptions of Kinetic Theory of Gases.", a: "1. Large number of identical spherical point-mass molecules.\n2. Molecules are in continuous random motion obeying Newton's laws.\n3. Collisions are perfectly elastic with zero intermolecular forces except during impact.\n4. Molecular volume is negligible compared to container volume." },
    { q: "Derive kinetic interpretation of temperature and show that average KE per molecule is E_k = 3/2 k_B T.", a: "P = ⅓ (N m / V) v_rms² ⇒ P V = ⅓ N m v_rms² = ⅔ N (½ m v_rms²). Since P V = N k_B T, ⅔ N E_k = N k_B T ⇒ E_k = 3/2 k_B T." },
    { q: "Define RMS speed, Average speed, and Most Probable speed. Write their mathematical expressions and compare them.", a: "1. v_rms = √(3 R T / M).\n2. v_avg = √(8 R T / π M).\n3. v_mp = √(2 R T / M).\nComparison: v_mp < v_avg < v_rms (Ratio 1 : 1.128 : 1.225)." },
    { q: "State Law of Equi-partition of Energy. Calculate total molar internal energy U and C_v for monoatomic and rigid diatomic gases.", a: "1. Monoatomic (f = 3): U = 3 × (½ R T) = 3/2 R T ⇒ C_v = dU/dT = 3/2 R.\n2. Rigid Diatomic (f = 5): U = 5 × (½ R T) = 5/2 R T ⇒ C_v = 5/2 R." },
    { q: "Derive expression for adiabatic index γ = C_p / C_v for monoatomic, diatomic, and polyatomic gases.", a: "C_v = (f/2) R, C_p = (f/2 + 1) R ⇒ γ = C_p / C_v = 1 + 2/f.\n1. Monoatomic (f=3): γ = 1 + 2/3 = 5/3 = 1.67.\n2. Diatomic (f=5): γ = 1 + 2/5 = 7/5 = 1.40.\n3. Polyatomic (f=6): γ = 1 + 2/6 = 4/3 = 1.33." },
    { q: "Define Mean Free Path λ. Derive expression λ = 1 / (√2 π n d²) using collision cylinder model.", a: "In time t, a molecule of diameter d sweeps out collision cylinder of volume π d² (v t). Number of collisions = n π d² v t. Mean free path λ = (v t) / (n π d² v t) = 1 / (π n d²). Considering motion of all target molecules adds factor √2, giving λ = 1 / (√2 π n d²)." },
    { q: "Explain how mean free path λ varies with: (i) Temperature T at constant pressure, (ii) Pressure P at constant temperature.", a: "Substitute n = P / (k_B T) into λ = 1 / (√2 π n d²):\n1. λ = k_B T / (√2 π d² P). At constant P, λ ∝ T (Heated gas expands, increasing path).\n2. At constant T, λ ∝ 1/P (Higher P increases number density n, decreasing path)." },
    { q: "Calculate rms speed of Oxygen (O₂) molecules at 27°C (Molar mass M = 32 g/mol, R = 8.314 J/mol K).", a: "T = 27 + 273 = 300 K, M = 0.032 kg/mol. v_rms = √(3 R T / M) = √(3 × 8.314 × 300 / 0.032) = √(7482.6 / 0.032) = √(233831.25) ≈ 483.56 m/s." },
    { q: "At what temperature will rms speed of Hydrogen gas molecules be double its value at 0°C?", a: "T₁ = 273 K. v_rms ∝ √T. v_rms' = 2 v_rms ⇒ √T₂ = 2 √T₁ ⇒ T₂ = 4 T₁ = 4 × 273 = 1092 K = 819°C." },
    { q: "Find the total kinetic energy of 8 g of Oxygen gas at 27°C (M = 32 g/mol, R = 8.314 J/mol K).", a: "Moles n = 8 / 32 = 0.25 mol. Total KE U = n × (5/2) R T = 0.25 × 2.5 × 8.314 × 300 = 0.625 × 2494.2 = 1558.875 Joules." },
    { q: "Calculate mean free path of Nitrogen molecules at STP (d = 2 × 10⁻¹⁰ m, n = 2.7 × 10²⁵ m⁻³).", a: "λ = 1 / (√2 π n d²) = 1 / (1.414 × 3.1416 × 2.7×10²⁵ × (2×10⁻¹⁰)²) = 1 / (4.442 × 2.7×10²⁵ × 4×10⁻²⁰) = 1 / (4.797 × 10⁶) = 2.08 × 10⁻⁷ m = 208 nm." },
    { q: "A container holds 1 mole Helium and 2 moles Nitrogen at 300 K. Calculate total internal energy of mixture.", a: "U_He = 1 × (3/2) R T = 1.5 R T. U_N2 = 2 × (5/2) R T = 5.0 R T. Total U = 6.5 R T = 6.5 × 8.314 × 300 = 16,212.3 Joules." },
    { q: "Why is C_p - C_v = R valid for all ideal gases regardless of atomicity?", a: "Because C_v = (f/2) R and C_p = (f/2 + 1) R. Subtracting gives C_p - C_v = [(f/2 + 1) - f/2] R = R." },
    { q: "Calculate the temperature at which rms speed of Argon atom (M = 40 g/mol) equals 500 m/s.", a: "v_rms² = 3 R T / M ⇒ T = M v_rms² / (3 R) = (0.040 × 500²) / (3 × 8.314) = (0.040 × 250000) / 24.942 = 10000 / 24.942 = 400.9 K = 127.9°C." },
    { q: "Explain why Maxwell-Boltzmann speed distribution curve broadens and shifts right at higher temperature.", a: "At higher T, total area under N(v) curve remains constant (N_total), but fraction of high-speed molecules increases, shifting peak v_mp = √(2RT/M) rightward and flattening the peak." },
    { q: "A gas at 27°C and 1 atm pressure has density 1.2 kg/m³. Calculate rms speed of its molecules.", a: "P = ⅓ ρ v_rms² ⇒ v_rms = √(3 P / ρ) = √(3 × 1.013 × 10⁵ / 1.2) = √(303900 / 1.2) = √(253250) ≈ 503.24 m/s." },
    { q: "Why does temperature of a gas remain constant during isothermal expansion even though work is done?", a: "Because heat Q is simultaneously supplied from external reservoir equal to work done W, maintaining constant internal energy ΔU = 0 and temperature ΔT = 0." },
    { q: "Calculate Boltzmann constant k_B given R = 8.314 J/mol K and N_A = 6.022 × 10²³ mol⁻¹.", a: "k_B = R / N_A = 8.314 / (6.022 × 10²³) = 1.3806 × 10⁻²³ J K⁻¹." },
    { q: "Calculate the average translational KE of 1 molecule of any ideal gas at 27°C.", a: "T = 300 K. E_k = 3/2 k_B T = 1.5 × 1.3806×10⁻²³ × 300 = 6.2127 × 10⁻²¹ Joules." },
    { q: "Calculate the average translational KE of 1 mole of an ideal gas at 27°C.", a: "T = 300 K. E_k_mole = 3/2 R T = 1.5 × 8.314 × 300 = 3741.3 Joules." },
    { q: "Estimate the molecular diameter d of Nitrogen if mean free path λ = 100 nm at number density n = 2.5 × 10²⁵ m⁻³.", a: "λ = 1 / (√2 π n d²) ⇒ d² = 1 / (√2 π n λ) = 1 / (1.414 × 3.1416 × 2.5×10²⁵ × 10⁻⁷) = 1 / 1.1105×10¹ = 9.005 × 10⁻²⁰ m² ⇒ d ≈ 3.0 × 10⁻¹⁰ m = 3 Å." },
    { q: "Why is real gas pressure lower than ideal gas pressure at high density?", a: "Attractive intermolecular forces pull inward on boundary molecules, reducing impact momentum on container wall (van der Waals correction P + a/V²)." },
    { q: "Why is real gas volume smaller than ideal gas volume at high pressure?", a: "Finite volume of gas molecules (co-volume b) reduces free space available for motion (V - b)." },
    { q: "Calculate adiabatic index γ for a gas mixture of 1 mole monoatomic gas (γ₁=5/3) and 1 mole diatomic gas (γ₂=7/5).", a: "C_v_mix = (1×1.5R + 1×2.5R) / 2 = 2.0 R. C_p_mix = (1×2.5R + 1×3.5R) / 2 = 3.0 R. γ_mix = 3.0 R / 2.0 R = 1.50." },
    { q: "Show that for an ideal gas, pressure P is equal to 2/3 of kinetic energy density E_k.", a: "P = ⅓ ρ v_rms² = ⅔ (½ ρ v_rms²) = ⅔ E_k." },
    { q: "Find the ratio of rms speed of Helium (M=4) to Neon (M=20) at same temperature.", a: "v_He / v_Ne = √(M_Ne / M_He) = √(20 / 4) = √5 ≈ 2.236." },
    { q: "Calculate the temperature at which kinetic energy of gas molecule is double its KE at 27°C.", a: "T₁ = 300 K. KE ∝ T. KE₂ = 2 KE₁ ⇒ T₂ = 2 T₁ = 600 K = 327°C." },
    { q: "Define Avogadro's Number N_A and state its significance in kinetic theory.", a: "N_A = 6.022 × 10²³ mol⁻¹ is the number of molecules per mole, bridging microscopic molecular quantities to macroscopic thermodynamic observables (R = N_A k_B)." },
    { q: "Why does moist air have lower density than dry air at same T and P?", a: "Molar mass of water vapor H₂O (18 g/mol) is significantly less than average molar mass of dry air (N₂ + O₂ ≈ 29 g/mol)." },
    { q: "What is Brownian motion and how does it support Kinetic Theory?", a: "Continuous random zig-zag motion of microscopic suspended particles in fluid caused by irregular, unequal impacts of surrounding fast-moving molecules, providing direct visual proof of Kinetic Theory." }
  ];

  saQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(66, 165, 245, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 14px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 56}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Solution:</b> ${item.a}</p>
    </div>`;
  });

  // 4. SECTION 4: 15 LAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 4: LONG ANSWER QUESTIONS (LAs 86 - 100)</h2>`;

  const laQuestions = [
    { q: "Derive an expression for pressure exerted by an ideal gas on container walls P = ⅓ ρ v_rms² from Kinetic Theory postulates.", a: "1. Postulates setup in cubic box L³.\n2. Single molecule m with (v_x, v_y, v_z) rebounds off right wall: Δp = 2 m v_x.\n3. Time between wall collisions Δt = 2 L / v_x. Force F_1 = Δp / Δt = m v_x² / L.\n4. Total force F = (m/L) ∑ v_xi². Pressure P = F / L² = (m/L³) N v_rms_x² = (m N / V) (⅓ v_rms²) = ⅓ ρ v_rms²." },
    { q: "Explain kinetic interpretation of temperature. Derive expressions for: (i) RMS speed v_rms, (ii) Average speed v_avg, (iii) Most probable speed v_mp of gas molecules.", a: "1. P V = ⅓ N m v_rms² = ⅔ N (½ m v_rms²) = N k_B T ⇒ E_k = 3/2 k_B T (T ∝ translational KE).\n2. v_rms = √(3 R T / M).\n3. v_avg = √(8 R T / π M).\n4. v_mp = √(2 R T / M)." },
    { q: "State and prove Law of Equi-partition of Energy. Derive expressions for C_v, C_p, and γ for monoatomic, diatomic (rigid & vibrating), and polyatomic gases.", a: "1. Law statement: ½ k_B T per degree of freedom.\n2. U = (f/2) R T, C_v = (f/2) R, C_p = (f/2 + 1) R, γ = 1 + 2/f.\n3. Monoatomic (f=3): C_v=1.5R, C_p=2.5R, γ=1.67.\n4. Diatomic rigid (f=5): C_v=2.5R, C_p=3.5R, γ=1.40.\n5. Diatomic vibrating (f=7): C_v=3.5R, C_p=4.5R, γ=1.29.\n6. Polyatomic (f=6): C_v=3.0R, C_p=4.0R, γ=1.33." },
    { q: "What is Mean Free Path? Derive expression λ = 1 / (√2 π n d²) using collision cylinder model. Discuss factors affecting mean free path.", a: "1. Definition of λ.\n2. Collision cylinder of diameter 2d: area π d², length v t. Collisions Z = n π d² v t ⇒ λ_stationary = 1 / (π n d²).\n3. Maxwell relative velocity factor √2: λ = 1 / (√2 π n d²).\n4. Factors: λ ∝ T (at const P), λ ∝ 1/P (at const T), λ ∝ 1/ρ." },
    { q: "State Avogadro's Law. Derive Avogadro's law and Graham's law of diffusion from kinetic theory of gases.", a: "1. Avogadro's Law: P₁ V₁ = ⅓ N₁ m₁ v_rms1² and P₂ V₂ = ⅓ N₂ m₂ v_rms2². If P₁=P₂, V₁=V₂, T₁=T₂ ⇒ ½ m₁ v_rms1² = ½ m₂ v_rms2² ⇒ N₁ = N₂.\n2. Graham's Law: v_rms = √(3P/ρ) ⇒ Rate of diffusion r ∝ v_rms ∝ 1/√ρ." },
    { q: "A gas cylinder contains 12 L of Oxygen gas at 27°C and pressure 15 atm. Calculate: (i) Number of moles, (ii) Total mass of gas, (iii) Total translational KE, (iv) RMS speed of molecules.", a: "1. V = 0.012 m³, T = 300 K, P = 15 × 1.013×10⁵ = 1.5195 × 10⁶ Pa.\n2. n = P V / (R T) = (1.5195×10⁶ × 0.012) / (8.314 × 300) = 18234 / 2494.2 = 7.31 moles.\n3. Mass m = 7.31 × 32 g = 233.92 g = 0.234 kg.\n4. Total KE U = n × 2.5 R T = 7.31 × 2.5 × 8.314 × 300 = 45,584 Joules.\n5. v_rms = √(3 × 8.314 × 300 / 0.032) = 483.56 m/s." },
    { q: "Explain Maxwell-Boltzmann distribution of molecular speeds. Draw N(v) vs v curves for a gas at two temperatures T₁ and T₂ (T₂ > T₁) and state 4 key features.", a: "1. Feature 1: N(v) starts from zero at v=0, reaches peak at v_mp, and approaches zero at v→∞.\n2. Feature 2: Peak v_mp = √(2RT/M) shifts right to higher speeds at higher T₂.\n3. Feature 3: Curve broadens and flattens at T₂ while total enclosed area N remains constant.\n4. Feature 4: Fraction of high-speed molecules increases exponentially with T." },
    { q: "A mixture of 2 moles Helium (Monoatomic, f=3) and 3 moles Argon (Monoatomic, f=3) and 1 mole Nitrogen (Diatomic rigid, f=5) is enclosed at temp T. Calculate: (i) Total internal energy U, (ii) Equivalent C_v_mix, (iii) Equivalent γ_mix.", a: "1. Total moles n_total = 2 + 3 + 1 = 6 moles.\n2. Internal Energy U = (2×1.5R T) + (3×1.5R T) + (1×2.5R T) = 3R T + 4.5R T + 2.5R T = 10.0 R T.\n3. C_v_mix = U / (n_total T) = 10.0 R / 6 = 5/3 R = 1.67 R.\n4. C_p_mix = C_v_mix + R = 1.67 R + R = 2.67 R.\n5. γ_mix = C_p_mix / C_v_mix = 2.67 R / 1.67 R = 1.60." },
    { q: "Calculate the root-mean-square speed, average speed, and most probable speed of Nitrogen molecules at 300 K (M = 28 g/mol, R = 8.314 J/mol K).", a: "1. v_rms = √(3 × 8.314 × 300 / 0.028) = √(7482.6 / 0.028) = √(267235.7) = 516.95 m/s.\n2. v_avg = √(8 × 8.314 × 300 / (3.1416 × 0.028)) = √(19953.6 / 0.08796) = √(226837) = 476.27 m/s.\n3. v_mp = √(2 × 8.314 × 300 / 0.028) = √(4988.4 / 0.028) = √(178157.1) = 422.09 m/s." },
    { q: "Explain the concept of Degrees of Freedom. State Law of Equi-partition of Energy and apply it to calculate molar specific heats C_v and C_p for water vapor (non-linear triatomic f=6).", a: "1. Water vapor H₂O has 3 translational + 3 rotational degrees of freedom (f = 6).\n2. U = 6 × (½ R T) = 3 R T.\n3. C_v = dU/dT = 3 R.\n4. C_p = C_v + R = 4 R.\n5. Ratio γ = C_p / C_v = 4/3 ≈ 1.33." },
    { q: "At what temperature will the rms speed of Hydrogen gas molecules (M=2) be equal to the escape speed from Earth's surface (11.2 km/s)?", a: "1. v_rms = 11.2 km/s = 11,200 m/s.\n2. v_rms² = 3 R T / M ⇒ T = M v_rms² / (3 R) = (0.002 × 11200²) / (3 × 8.314) = (0.002 × 125,440,000) / 24.942 = 250,880 / 24.942 = 10,058.5 K ≈ 10,060 K." },
    { q: "Estimate the total number of air molecules in a room of dimensions 5 m × 4 m × 3 m at 27°C and 1 atm pressure (1.013 × 10⁵ Pa, k_B = 1.38 × 10⁻²³ J/K).", a: "1. Volume V = 5 × 4 × 3 = 60 m³.\n2. Temp T = 27 + 273 = 300 K.\n3. P V = N k_B T ⇒ N = P V / (k_B T) = (1.013 × 10⁵ × 60) / (1.38 × 10⁻²³ × 300) = 6.078 × 10⁶ / (4.14 × 10⁻²¹) = 1.468 × 10²⁷ molecules." },
    { q: "Calculate the mean free path and collision frequency of Helium gas atoms at STP (d = 2.0 Å = 2.0 × 10⁻¹⁰ m, n = 2.7 × 10²⁵ m⁻³, M = 4 g/mol).", a: "1. Mean free path λ = 1 / (√2 π n d²) = 1 / (1.414 × 3.1416 × 2.7×10²⁵ × 4×10⁻²⁰) = 2.08 × 10⁻⁷ m = 208 nm.\n2. v_rms = √(3 × 8.314 × 273 / 0.004) = √(6809.16 / 0.004) = 1304.7 m/s.\n3. Collision frequency f_col = v_rms / λ = 1304.7 / (2.08 × 10⁻⁷) = 6.27 × 10⁹ collisions/second." },
    { q: "Explain how kinetic theory accounts for: (i) Boyle's Law, (ii) Charles's Law, (iii) Dalton's Law of Partial Pressures.", a: "1. Boyle's Law: P = ⅓ (N m / V) v_rms². At const T, v_rms is const ⇒ P V = Const.\n2. Charles's Law: V = ⅓ (N m / P) v_rms². Since v_rms² ∝ T ⇒ V ∝ T.\n3. Dalton's Law: Total pressure P = P₁ + P₂ + ... = ⅓ ρ₁ v_rms1² + ⅓ ρ₂ v_rms2² + ... equal to sum of partial pressures." },
    { q: "Describe van der Waals equation of state for real gases: (P + a/V²)(V - b) = R T. Explain physical significance of corrections 'a' and 'b'.", a: "1. Pressure correction (a/V²): Accounts for attractive intermolecular forces pulling boundary molecules inward, reducing wall impact.\n2. Volume correction (b): Co-volume accounting for finite size of gas molecules, reducing free volume available for motion.\n3. At low P (large V) and high T, a/V² and b become negligible, restoring ideal gas equation P V = R T." }
  ];

  laQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(66, 165, 245, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <b style="color: ${themeColor}; font-size: 16px;">Q${idx + 86}: ${item.q}</b>
      <p style="margin: 8px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6; white-space: pre-line;"><b>Comprehensive Solution:</b>\n${item.a}</p>
    </div>`;
  });

  html += `</div>`;
  return html;
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

console.log("Successfully generated c11-phy-9.ts with 6 3D SVG diagrams and 100 questions at " + outputPath);
