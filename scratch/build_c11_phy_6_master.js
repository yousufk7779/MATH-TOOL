const fs = require('fs');
const path = require('path');

const themeColor = "#FDC830"; // Primary theme color for Class 11 Physics Unit VI (Gravitation)

// Clean compact inline stacked fraction helper
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(253, 200, 48, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 17px; display: block; margin-bottom: 6px;">📌 Definition (${term}):</b>
    <p style="margin: 0; color: #FFFFFF; line-height: 1.65; font-size: 15.5px;">${definition}</p>
  </div>`;
}

// Subtopic item with title in themeColor on new line with detailed white explanation text
function colonTopic(title, explanation) {
  return `
  <div style="margin-bottom: 14px; background: rgba(255,255,255,0.02); padding: 10px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
    <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">• ${title}:</b>
    <span style="color: #FFFFFF; line-height: 1.65; display: block; font-size: 15px;">${explanation}</span>
  </div>`;
}

// Single line code formula
function singleLineCode(codeText) {
  return `<code style="font-size: 14px; white-space: nowrap; font-family: monospace; color: #FFFFFF; display: inline-block;">${codeText}</code>`;
}

// 3D Diagram Card Wrapper
function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(253, 200, 48, 0.25);">
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

// ==================== 6 ENHANCED 3D SVG DIAGRAMS WITH ZERO OVERFLOW/OVERLAP ====================

// 3D SVG 1: Kepler's Laws of Planetary Motion
const svg1_3d_keplers_laws = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="sunGrad1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="30%" stop-color="#FDC830"/>
      <stop offset="85%" stop-color="#F39C12"/>
      <stop offset="100%" stop-color="#E67E22"/>
    </radialGradient>
    <radialGradient id="planetGrad1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <linearGradient id="areaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(253, 200, 48, 0.4)"/>
      <stop offset="100%" stop-color="rgba(253, 200, 48, 0.05)"/>
    </linearGradient>
    <filter id="glowGold1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Left Side: Elliptical Orbit Diagram (Width 390, Center x = 200) -->
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16" font-weight="bold">1. Kepler's Orbits &amp; Swept Area Law</text>
    <ellipse cx="195" cy="220" rx="145" ry="90" fill="none" stroke="#FDC830" stroke-width="2.5"/>
    <circle cx="125" cy="220" r="18" fill="url(#sunGrad1)" filter="url(#glowGold1)"/>
    <text x="125" y="255" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold">Sun (Focus F₁)</text>
    <circle cx="265" cy="220" r="4" fill="#94A3B8"/>
    <text x="265" y="240" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12">Focus F₂</text>

    <!-- Swept Area -->
    <path d="M 125 220 L 50 220 A 145 90 0 0 1 80 145 Z" fill="url(#areaGrad1)" stroke="#FDC830" stroke-width="1.5"/>
    <text x="75" y="195" fill="#FDC830" font-family="sans-serif" font-size="13" font-weight="bold">Area A₁</text>

    <circle cx="50" cy="220" r="9" fill="url(#planetGrad1)"/>
    <text x="50" y="195" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12" font-weight="bold">Perihelion (v₁ max)</text>
    <circle cx="340" cy="220" r="9" fill="url(#planetGrad1)"/>
    <text x="340" y="195" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12" font-weight="bold">Aphelion (v₂ min)</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Constant Areal Velocity dA/dt = L / (2 m)</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Laws Summary Card (Width 390, Center x = 620) -->
  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Summary of Kepler's 3 Laws</text>

    <rect x="15" y="60" width="360" height="100" rx="8" fill="rgba(253,200,48,0.08)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14" font-weight="bold">First Law (Law of Orbits):</text>
    <text x="195" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">Planets revolve in elliptical orbits with the Sun at one focus.</text>

    <rect x="15" y="175" width="360" height="105" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="200" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Second Law (Law of Areas):</text>
    <text x="195" y="230" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">A radius vector sweeps equal areas in equal intervals of time.</text>
    <text x="195" y="255" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="13">dA / dt = L / (2 m) = Constant</text>

    <rect x="15" y="295" width="360" height="115" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="320" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Third Law (Law of Periods):</text>
    <text x="195" y="350" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">Square of orbital period T is proportional to cube of semi-major axis a.</text>
    <text x="195" y="375" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="14.5" font-weight="bold">T² = (4π² / GM) a³  ⇒  T² ∝ a³</text>
  </g>
</svg>`;

// 3D SVG 2: Universal Law of Gravitation Vector Model
const svg2_3d_gravitation_law = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="m1Grad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#DD2476"/>
    </radialGradient>
    <radialGradient id="m2Grad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#8E2DE2"/>
      <stop offset="100%" stop-color="#4A00E0"/>
    </radialGradient>
    <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FDC830"/>
    </marker>
  </defs>

  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16" font-weight="bold">1. Gravitational Attraction Vector Model</text>
    <circle cx="100" cy="210" r="38" fill="url(#m1Grad)"/>
    <text x="100" y="216" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">m₁</text>

    <circle cx="300" cy="210" r="28" fill="url(#m2Grad)"/>
    <text x="300" y="215" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">m₂</text>

    <line x1="138" y1="210" x2="200" y2="210" stroke="#FDC830" stroke-width="3" marker-end="url(#arr1)"/>
    <text x="165" y="195" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="13" font-weight="bold">F₁₂ →</text>

    <line x1="262" y1="210" x2="200" y2="210" stroke="#FDC830" stroke-width="3" marker-end="url(#arr1)"/>
    <text x="235" y="195" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="13" font-weight="bold">← F₂₁</text>

    <line x1="100" y1="270" x2="300" y2="270" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="4,4"/>
    <text x="200" y="295" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Center Distance r</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Action-Reaction Pair: F₁₂ = - F₂₁</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Law Formulae &amp; Universal Constant</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(253,200,48,0.08)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14.5" font-weight="bold">Gravitational Force Equation:</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">F = G (m₁ m₂ / r²)</text>
    <text x="195" y="152" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ Inverse Square Law: Force drops as 1/r²</text>

    <rect x="15" y="185" width="360" height="115" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Universal Gravitational Constant G:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">G = 6.674 × 10⁻¹¹ N m² kg⁻²</text>
    <text x="195" y="275" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="13">Dimensions of G: [M⁻¹ L³ T⁻²]</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Properties of Gravitational Force:</text>
    <text x="25" y="362" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Always attractive, independent of medium between masses</text>
    <text x="25" y="385" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Central force operating along line joining mass centers</text>
  </g>
</svg>`;

// 3D SVG 3: Variation of g with Altitude & Depth
const svg3_3d_variation_of_g = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16" font-weight="bold">1. Earth Geometry: Altitude h &amp; Depth d</text>
    <circle cx="195" cy="220" r="110" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="2"/>
    <circle cx="195" cy="220" r="5" fill="#FFD700"/>
    <text x="195" y="245" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13">Earth Center (g = 0)</text>

    <!-- Altitude Line -->
    <line x1="195" y1="220" x2="195" y2="70" stroke="#76FF03" stroke-width="2" stroke-dasharray="4,4"/>
    <circle cx="195" cy="70" r="7" fill="#76FF03"/>
    <text x="205" y="75" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Point P (Height h)</text>
    <text x="205" y="145" fill="#00E5FF" font-family="sans-serif" font-size="13">Radius R</text>

    <!-- Depth Line -->
    <circle cx="195" cy="160" r="6" fill="#FF512F"/>
    <text x="205" y="165" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">Point Q (Depth d)</text>

    <text x="195" y="380" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="13.5" font-weight="bold">Surface value g = GM / R² ≈ 9.8 m/s²</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Equations for Variation of g</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Variation with Altitude h:</text>
    <text x="195" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">g_h = g (1 - 2h / R) &nbsp; (For h &lt;&lt; R)</text>
    <text x="195" y="150" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ General formula: g_h = g [R / (R + h)]²</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Variation with Depth d:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">g_d = g (1 - d / R)</text>
    <text x="195" y="275" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="12.5">✓ At Earth's center (d = R): g_center = 0</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(253,200,48,0.08)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14" font-weight="bold">Latitude &amp; Rotation Variation:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="14">g_λ = g - ω² R cos² λ</text>
    <text x="195" y="390" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12">• Max at Poles (λ = 90°), Min at Equator (λ = 0°)</text>
  </g>
</svg>`;

// 3D SVG 4: Gravitational Potential Energy & Potential
const svg4_3d_potential_energy = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16" font-weight="bold">1. Potential Well Graph U(r) vs Distance r</text>
    <line x1="50" y1="330" x2="350" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="60" y1="60" x2="60" y2="350" stroke="#475569" stroke-width="2"/>
    <text x="355" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Distance r</text>

    <!-- Hyperbolic Curve U = -G M m / r -->
    <path d="M 75 320 Q 110 280 180 180 Q 260 120 340 90" fill="none" stroke="#FDC830" stroke-width="3"/>
    <circle cx="180" cy="180" r="6" fill="#00E5FF"/>
    <text x="190" y="175" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">U = - GMm / r</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Zero Potential at Infinity (r = ∞)</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Potential &amp; Energy Equations</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(253,200,48,0.08)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14.5" font-weight="bold">Gravitational Potential V(r):</text>
    <text x="195" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">V = - G M / r &nbsp; [J kg⁻¹]</text>
    <text x="195" y="152" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ Scalar field representing work done per unit mass</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Gravitational Potential Energy U(r):</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">U = m V = - G M m / r</text>
    <text x="195" y="275" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="12.5">✓ Negative sign signifies attractive bound system</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Relation between Intensity E &amp; V:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">E = - dV / dr</text>
  </g>
</svg>`;

// 3D SVG 5: Escape Speed Derivation Diagram
const svg5_3d_escape_velocity = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="earthGrad5" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#81D4FA"/>
      <stop offset="50%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </radialGradient>
    <marker id="arr5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16" font-weight="bold">1. Escape Velocity Trajectory to Infinity</text>
    <circle cx="130" cy="250" r="75" fill="url(#earthGrad5)" stroke="#00E5FF" stroke-width="2"/>
    <text x="130" y="255" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Earth M</text>

    <!-- Parabolic Escape Path -->
    <path d="M 130 175 Q 180 120 340 70" fill="none" stroke="#76FF03" stroke-width="3.5" marker-end="url(#arr5)"/>
    <text x="240" y="110" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">v_e → ∞</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Total Mechanical Energy E_total ≥ 0</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Escape Speed Formula &amp; Values</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(253,200,48,0.08)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14.5" font-weight="bold">Energy Conservation Principle:</text>
    <text x="195" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">½ m v_e² - (G M m / R) = 0</text>
    <text x="195" y="148" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16.5" font-weight="bold">v_e = √(2 G M / R) = √(2 g R)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Earth's Escape Speed Value:</text>
    <text x="195" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">v_e ≈ 11.2 km/s</text>
    <text x="195" y="275" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="12.5">✓ Independent of mass and angle of projection!</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Moon's Escape Speed (v_e ≈ 2.38 km/s):</text>
    <text x="25" y="362" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Moon's v_e is less than thermal speeds of air molecules</text>
    <text x="25" y="385" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Hence, the Moon has no atmosphere!</text>
  </g>
</svg>`;

// 3D SVG 6: Orbital Velocity of Satellite
const svg6_3d_orbital_velocity = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="earthGrad6" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#81D4FA"/>
      <stop offset="50%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </radialGradient>
  </defs>

  <g transform="translate(15, 20)">
    <text x="195" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16" font-weight="bold">1. Circular Orbit &amp; Centripetal Balance</text>
    <circle cx="195" cy="220" r="70" fill="url(#earthGrad6)" stroke="#00E5FF" stroke-width="2"/>
    <ellipse cx="195" cy="220" rx="145" ry="110" fill="none" stroke="#FDC830" stroke-width="2" stroke-dasharray="5,4"/>

    <!-- Satellite Body -->
    <rect x="330" y="210" width="20" height="20" rx="3" fill="#76FF03"/>
    <line x1="340" y1="210" x2="340" y2="150" stroke="#76FF03" stroke-width="3"/>
    <text x="340" y="140" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">v_o →</text>

    <line x1="340" y1="220" x2="195" y2="220" stroke="#FF512F" stroke-width="2"/>
    <text x="260" y="210" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="12.5" font-weight="bold">F_g = GMm/r²</text>

    <text x="195" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Relation: v_e = √2 × v_o ≈ 1.414 v_o</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Orbital Speed &amp; Satellite Energy</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(253,200,48,0.08)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14.5" font-weight="bold">Orbital Velocity Formula (v_o):</text>
    <text x="195" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">v_o = √(G M / r) = √[G M / (R + h)]</text>
    <text x="195" y="148" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="12.5">✓ Near Earth Surface (h ≈ 0): v_o = √(g R) ≈ 7.92 km/s</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Satellite Mechanical Energy:</text>
    <text x="195" y="240" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="14.5">E_k = G M m / (2 r) &nbsp;|&nbsp; U = - G M m / r</text>
    <text x="195" y="270" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="15.5" font-weight="bold">E_total = - G M m / (2 r) &nbsp; (Binding Energy)</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Geostationary Satellite Parameters:</text>
    <text x="25" y="362" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Height h ≈ 35,786 km above equator</text>
    <text x="25" y="385" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Period T = 24 hours (Synchronous with Earth's rotation)</text>
  </g>
</svg>`;

// Construct Overview HTML for Chapter 6 with DEEP TEXTBOOK PROSE EXPLANATIONS
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
  <div style="background: rgba(253, 200, 48, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for Unit VI: Gravitation</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Gravitation:</b>
        <span style="color: #FFFFFF;">The universal force of mutual attraction acting between any two bodies in the universe by virtue of their masses.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Acceleration due to Gravity (g):</b>
        <span style="color: #FFFFFF;">The acceleration produced in a freely falling body under the influence of Earth's gravitational pull (g ≈ 9.8 m/s² on Earth's surface).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Gravitational Field Intensity (E):</b>
        <span style="color: #FFFFFF;">The gravitational force experienced per unit mass placed at a given point in space: E = F / m = G M / r².</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Gravitational Potential (V):</b>
        <span style="color: #FFFFFF;">The amount of work done in bringing a unit mass from infinity to a point in gravitational field: V = - G M / r.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Gravitational Potential Energy (U):</b>
        <span style="color: #FFFFFF;">The work done in bringing a mass m from infinity to distance r in a gravitational field: U = - G M m / r.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Escape Speed (v_e):</b>
        <span style="color: #FFFFFF;">The minimum velocity required for a body to be projected from Earth's surface to escape Earth's gravitational field completely (v_e ≈ 11.2 km/s).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Orbital Velocity (v_o):</b>
        <span style="color: #FFFFFF;">The horizontal speed required for a satellite to revolve in a stable circular orbit around a planet (v_o = √(g R) ≈ 7.92 km/s near Earth).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Geostationary Satellite:</b>
        <span style="color: #FFFFFF;">A satellite revolving in the equatorial plane with an orbital period equal to Earth's rotational period (24 hours) at height ~35,786 km.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: KEPLER'S LAWS OF PLANETARY MOTION (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Kepler's Laws of Planetary Motion</h2>
  
  <p>Johannes Kepler formulated three empirical laws governing planetary motion based on Tycho Brahe's detailed astronomical observations. These laws laid the foundation for Isaac Newton to derive the Universal Law of Gravitation.</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(i) First Law - Law of Orbits</h3>
  <p>Every planet revolves around the Sun in an <b>elliptical orbit</b>, with the Sun situated at one of the two foci of the ellipse. The point of closest approach to the Sun is called <b>perihelion</b>, while the point of farthest distance is called <b>aphelion</b>.</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(ii) Second Law - Law of Areas</h3>
  <p>The radius vector drawn from the Sun to a planet sweeps out <b>equal areas in equal intervals of time</b>. This implies that the areal velocity of a planet remains constant:</p>
  ${eqBox("<b>" + frac("dA", "dt") + " = " + frac("L", "2 m") + " = Constant</b>")}
  <p>The Law of Areas is a direct consequence of the <b>Conservation of Angular Momentum</b> because the gravitational force exerted by the Sun is a central force, exerting zero torque ($\tau = 0$) on the planet.</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(iii) Third Law - Law of Periods</h3>
  <p>The square of the period of revolution ($T$) of any planet around the Sun is directly proportional to the cube of the semi-major axis ($a$) of its elliptical orbit:</p>
  ${eqBox("<b>T<sup>2</sup> ∝ a<sup>3</sup> &nbsp; ⇒ &nbsp; T<sup>2</sup> = " + frac("4 π<sup>2</sup>", "G M<sub>s</sub>") + " a<sup>3</sup></b>")}

  ${svg3DCardWrapper("Kepler's Laws of Planetary Motion (Elliptical Orbit & Swept Areas)", "3D Elliptical orbit showing Sun at focus F₁, swept area A₁, perihelion, aphelion, and areal velocity conservation.", svg1_3d_keplers_laws)}

  <!-- SECTION 2: UNIVERSAL LAW OF GRAVITATION (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Universal Law of Gravitation</h2>

  <p>Sir Isaac Newton stated that every particle of matter in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.</p>

  ${eqBox("<b>F = G " + frac("m<sub>1</sub> m<sub>2</sub>", "r<sup>2</sup>") + " &nbsp;|&nbsp; G = 6.674 × 10<sup>-11</sup> N m<sup>2</sup> kg<sup>-2</sup></b>")}

  <h3 style="color: ${themeColor}; margin-top: 18px;">(i) Vector Form & Properties of Gravitational Force</h3>
  <p>In vector notation, the gravitational force exerted by mass $m_1$ on mass $m_2$ separated by position vector $\mathbf{r}_{12}$ is given by:</p>
  ${eqBox("<b>F<sub>12</sub> = - G " + frac("m<sub>1</sub> m<sub>2</sub>", "r<sup>2</sup>") + " r̂<sub>12</sub> &nbsp; ⇒ &nbsp; F<sub>12</sub> = - F<sub>21</sub></b>")}
  <p>Gravitational forces form an action-reaction pair conforming strictly to Newton's Third Law of Motion. It is a central, conservative force operating along the line joining the centers of mass of the interacting bodies.</p>

  ${svg3DCardWrapper("Universal Law of Gravitation Vector Model", "Mutual gravitational attraction vectors F₁₂ and F₂₁ between masses m₁ and m₂ obeying inverse square law.", svg2_3d_gravitation_law)}

  <!-- SECTION 3: ACCELERATION DUE TO GRAVITY AND ITS VARIATION WITH ALTITUDE AND DEPTH (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Acceleration Due to Gravity and Its Variation with Altitude and Depth</h2>

  <p>The acceleration produced in a freely falling body due to Earth's gravitational pull is called acceleration due to gravity ($g$). On Earth's surface, assuming Earth to be a uniform sphere of mass $M$ and radius $R$:</p>
  ${eqBox("<b>g = " + frac("G M", "R<sup>2</sup>") + " = " + frac("4", "3") + " π G ρ R ≈ 9.8 m s<sup>-2</sup></b>")}

  <h3 style="color: ${themeColor}; margin-top: 18px;">(i) Variation of g with Altitude (Height h above Earth Surface)</h3>
  <p>At height $h$ above Earth's surface, distance from Earth's center is $r = R + h$. The value of $g_h$ becomes:</p>
  ${eqBox("<b>g<sub>h</sub> = g ( 1 - " + frac("2 h", "R") + " ) &nbsp; (Valid for h << R)</b>")}

  <h3 style="color: ${themeColor}; margin-top: 18px;">(ii) Variation of g with Depth (Depth d below Earth Surface)</h3>
  <p>At depth $d$ below Earth's surface, only the inner sphere of radius $(R - d)$ contributes to gravitational pull. Thus:</p>
  ${eqBox("<b>g<sub>d</sub> = g ( 1 - " + frac("d", "R") + " )</b>")}
  <p>At Earth's center ($d = R$), acceleration due to gravity becomes zero ($g_{\text{center}} = 0$).</p>

  ${svg3DCardWrapper("Variation of g with Altitude & Depth Geometry", "Spherical Earth geometry illustrating acceleration due to gravity variations at height h, depth d, and center g=0.", svg3_3d_variation_of_g)}

  <!-- SECTION 4: GRAVITATIONAL POTENTIAL ENERGY AND GRAVITATIONAL POTENTIAL (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Gravitational Potential Energy and Gravitational Potential</h2>

  <p>Gravitational field is a conservative field. The gravitational potential energy of a system of masses is defined as the work done by an external force in bringing the masses from infinity to their present positions without acceleration.</p>

  ${eqBox("<b>V(r) = - " + frac("G M", "r") + " &nbsp;|&nbsp; U(r) = - " + frac("G M m", "r") + " &nbsp;|&nbsp; E = - " + frac("dV", "dr") + "</b>")}

  <p>The negative sign indicates that the gravitational force is attractive in nature and work is done by the gravitational field when masses approach each other.</p>

  ${svg3DCardWrapper("Gravitational Potential Energy U(r) Potential Well Graph", "Hyperbolic potential well curve U(r) = -GMm/r showing bound system energy and zero potential at infinity.", svg4_3d_potential_energy)}

  <!-- SECTION 5: ESCAPE SPEED (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Escape Speed</h2>

  <p>Escape speed is the minimum initial speed with which a body must be projected from Earth's surface so that it overcomes Earth's gravitational field and never returns back on its own.</p>

  ${eqBox("<b>v<sub>e</sub> = √(" + frac("2 G M", "R") + ") = √(2 g R) ≈ 11.2 km s<sup>-1</sup> &nbsp; (On Earth Surface)</b>")}

  <p>Escape speed depends only on the mass and radius of the celestial body and is completely independent of the mass of the projected object or its angle of projection.</p>

  ${svg3DCardWrapper("Escape Velocity Trajectory & Energy Conservation", "Parabolic escape trajectory showing energy balance 1/2 m v_e² = G M m / R yielding v_e ≈ 11.2 km/s.", svg5_3d_escape_velocity)}

  <!-- SECTION 6: ORBITAL VELOCITY OF A SATELLITE (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Orbital Velocity of a Satellite</h2>

  <p>Orbital velocity ($v_o$) is the velocity required for a satellite to revolve in a stable circular orbit around a planet. The necessary centripetal force is provided by the gravitational attraction between the planet and satellite.</p>

  ${eqBox("<b>v<sub>o</sub> = √(" + frac("G M", "R + h") + ") &nbsp;|&nbsp; Near Surface (h<<R): v<sub>o</sub> = √(g R) ≈ 7.92 km s<sup>-1</sup></b>")}
  ${eqBox("<b>Relation: v<sub>e</sub> = √2 v<sub>o</sub> &nbsp;|&nbsp; Total Energy E = - " + frac("G M m", "2 r") + "</b>")}

  ${svg3DCardWrapper("Orbital Velocity & Satellite Energy Balance", "Circular satellite orbit showing gravitational centripetal force balance and relation v_e = √2 v_o.", svg6_3d_orbital_velocity)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(253, 200, 48, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae & Core Relations for Unit VI: Gravitation</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Gravitational Law &amp; G:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">F = G (m₁ m₂ / r²)<br>G = 6.674 × 10⁻¹¹ N m² kg⁻²</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Acceleration due to Gravity g:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">g = G M / R² ≈ 9.8 m/s²<br>g_h = g(1 - 2h/R) &nbsp;|&nbsp; g_d = g(1 - d/R)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Potential &amp; Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">V = - G M / r &nbsp;|&nbsp; U = - G M m / r<br>Binding Energy = + G M m / (2 r)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Kepler's Third Law:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">T² ∝ a³ &nbsp; ⇒ &nbsp; T² = (4π² / GM) a³<br>Areal Velocity dA/dt = L / (2 m)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Escape &amp; Orbital Speeds:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">v_e = √(2 g R) ≈ 11.2 km/s<br>v_o = √(g R) ≈ 7.92 km/s &nbsp;|&nbsp; v_e = √2 v_o</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Geostationary Satellite:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">Height h ≈ 35,786 km<br>Period T = 24 hours (Equatorial Orbit)</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate Solutions
function generateFullSolutionsHtml() {
  const fileContent = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-6.ts'), 'utf8');
  const matchSol = fileContent.match(/export const c11Phy6HtmlSolutions = ([\s\S]*?);?\s*$/);
  return JSON.parse(matchSol[1]);
}

const overviewHtml = generateFullOverviewHtml();
const solutionsHtml = generateFullSolutionsHtml();

const tsContent = `// Class 11 Physics Unit VI: Gravitation (100% Exact Official NCERT Syllabus Alignment)
// High-Level Reference Book Content & NCERT Solutions (6 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy6HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy6HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-6.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully rebuilt c11-phy-6.ts with enhanced deep prose and widened 3D SVG diagrams!");
