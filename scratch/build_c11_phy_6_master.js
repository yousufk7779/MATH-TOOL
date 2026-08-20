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
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(253, 200, 48, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
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
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(253, 200, 48, 0.25);">
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

// ==================== 6 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 6 ====================

// 3D SVG 1: Kepler's Laws of Planetary Motion (Elliptical Orbit & Swept Areas)
const svg1_3d_keplers_laws = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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

  <!-- Left Side: Elliptical Orbit Geometry (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Kepler's Orbits &amp; Swept Area Law</text>

    <!-- Elliptical Path -->
    <ellipse cx="180" cy="220" rx="140" ry="90" fill="none" stroke="#FDC830" stroke-width="2.5"/>

    <!-- Sun at Focus F1 (x = 110, y = 220) -->
    <circle cx="110" cy="220" r="18" fill="url(#sunGrad1)" filter="url(#glowGold1)"/>
    <text x="100" y="252" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">Sun (Focus F₁)</text>

    <!-- Empty Focus F2 -->
    <circle cx="250" cy="220" r="4" fill="#94A3B8"/>
    <text x="240" y="240" fill="#94A3B8" font-family="sans-serif" font-size="13">Focus F₂</text>

    <!-- Swept Sector Area A1 (Near Perihelion) -->
    <path d="M 110 220 L 40 220 A 140 90 0 0 1 70 145 Z" fill="url(#areaGrad1)" stroke="#FDC830" stroke-width="1.5"/>
    <text x="65" y="195" fill="#FDC830" font-family="sans-serif" font-size="14" font-weight="bold">Area A₁</text>

    <!-- Planet at Perihelion (Fastest speed v1) -->
    <circle cx="40" cy="220" r="9" fill="url(#planetGrad1)"/>
    <text x="10" y="200" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">Perihelion (v₁ max)</text>

    <!-- Planet at Aphelion (Slowest speed v2) -->
    <circle cx="320" cy="220" r="9" fill="url(#planetGrad1)"/>
    <text x="325" y="200" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">Aphelion (v₂ min)</text>

    <!-- Major Axis Line -->
    <line x1="40" y1="220" x2="320" y2="220" stroke="#475569" stroke-dasharray="4,4"/>
    <text x="180" y="330" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13.5">Semi-Major Axis = a</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: 3 Kepler's Laws Cards (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="17" font-weight="bold">2. Summary of Kepler's 3 Laws</text>

    <rect x="10" y="60" width="345" height="100" rx="8" fill="rgba(253,200,48,0.1)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14" font-weight="bold">1st Law: Law of Orbits</text>
    <text x="182" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">All planets move in elliptical orbits with the Sun at one focus.</text>

    <rect x="10" y="175" width="345" height="110" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="200" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">2nd Law: Law of Areas (dA/dt = Const)</text>
    <text x="182" y="232" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">dA / dt = L / (2 m) = Constant</text>
    <text x="182" y="260" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">✓ Direct consequence of Conservation of Angular Momentum!</text>

    <rect x="10" y="300" width="345" height="115" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="325" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">3rd Law: Law of Periods (T² ∝ a³)</text>
    <text x="182" y="360" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">T² = (4 π² / G M) a³</text>
    <text x="182" y="390" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Square of period T is proportional to cube of semi-major axis a</text>
  </g>
</svg>`;

// 3D SVG 2: Newton's Universal Law of Gravitation & Gravitational Constant G
const svg2_3d_universal_gravitation = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="m1Grad2" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="40%" stop-color="#FDC830"/>
      <stop offset="100%" stop-color="#D4AC0D"/>
    </radialGradient>
    <radialGradient id="m2Grad2" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="40%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <filter id="glowGold2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="arrowGold2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FDC830"/>
    </marker>
    <marker id="arrowCyan2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- Left Side: 3D Mass Interaction Model (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Gravitational Force Pair (Action-Reaction)</text>

    <!-- 3D Base Plane -->
    <ellipse cx="180" cy="300" rx="140" ry="40" fill="rgba(148,163,184,0.06)" stroke="#475569" stroke-width="1.5"/>

    <!-- Mass m1 Spherical Body -->
    <circle cx="80" cy="220" r="32" fill="url(#m1Grad2)" filter="url(#glowGold2)"/>
    <text x="65" y="225" fill="#000000" font-family="sans-serif" font-size="16" font-weight="bold">m₁</text>

    <!-- Mass m2 Spherical Body -->
    <circle cx="280" cy="220" r="22" fill="url(#m2Grad2)"/>
    <text x="270" y="225" fill="#000000" font-family="sans-serif" font-size="15" font-weight="bold">m₂</text>

    <!-- Attractive Force Vector F12 (on m1 towards m2) -->
    <line x1="112" y1="220" x2="175" y2="220" stroke="#FDC830" stroke-width="4.5" marker-end="url(#arrowGold2)"/>
    <text x="120" y="200" fill="#FDC830" font-family="sans-serif" font-size="14.5" font-weight="bold">F₁₂ (towards m₂)</text>

    <!-- Attractive Force Vector F21 (on m2 towards m1) -->
    <line x1="258" y1="220" x2="195" y2="220" stroke="#00E5FF" stroke-width="4.5" marker-end="url(#arrowCyan2)"/>
    <text x="200" y="200" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">F₂₁ (towards m₁)</text>

    <!-- Separation Distance r -->
    <line x1="80" y1="270" x2="280" y2="270" stroke="#76FF03" stroke-width="2"/>
    <line x1="80" y1="260" x2="80" y2="280" stroke="#76FF03" stroke-width="2"/>
    <line x1="280" y1="260" x2="280" y2="280" stroke="#76FF03" stroke-width="2"/>
    <text x="160" y="295" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Distance r</text>

    <text x="182" y="340" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">✓ F₁₂ = - F₂₁ (Obeys Newton's 3rd Law)</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Universal Law Summary Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="17" font-weight="bold">2. Law of Gravitation &amp; Constant G</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(253,200,48,0.1)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14" font-weight="bold">Scalar Formula:</text>
    <text x="182" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">F = G (m₁ m₂) / r²</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Universal Constant G Value:</text>
    <text x="182" y="222" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">G = 6.674 × 10⁻¹¹ N m² kg⁻²</text>
    <text x="182" y="252" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="14">Dimensions: [M⁻¹ L³ T⁻²]</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Vector Form:</text>
    <text x="182" y="348" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">F₁₂ = - G (m₁ m₂ / r²) r̂₁₂</text>
    <text x="182" y="380" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Central &amp; Conservative Force</text>
  </g>
</svg>`;

// 3D SVG 3: Variation of Acceleration Due to Gravity (g) with Altitude & Depth
const svg3_3d_variation_of_g = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="earthGrad3" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#81D4FA"/>
      <stop offset="40%" stop-color="#0284C7"/>
      <stop offset="85%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#075985"/>
    </radialGradient>
  </defs>

  <!-- Left Side: Earth Sphere Altitude & Depth Geometry (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Earth Sphere &amp; Variation Locations</text>

    <!-- Earth Sphere (Radius R) -->
    <circle cx="180" cy="220" r="110" fill="url(#earthGrad3)" stroke="#00E5FF" stroke-width="2"/>
    <circle cx="180" cy="220" r="5" fill="#FFFFFF"/>
    <text x="160" y="240" fill="#FFFFFF" font-family="sans-serif" font-size="14">Center (g=0)</text>

    <!-- Surface Reference Point P (g = 9.8 m/s²) -->
    <circle cx="180" cy="110" r="6" fill="#FDC830"/>
    <text x="195" y="115" fill="#FDC830" font-family="sans-serif" font-size="14" font-weight="bold">Surface P (g = G M/R²)</text>

    <!-- Altitude Height h Point (g' < g) -->
    <circle cx="180" cy="40" r="6" fill="#76FF03"/>
    <line x1="180" y1="110" x2="180" y2="40" stroke="#76FF03" stroke-width="2.5" stroke-dasharray="3,3"/>
    <text x="195" y="45" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Altitude h (g_h)</text>

    <!-- Depth d Point (g_d < g) -->
    <circle cx="180" cy="165" r="6" fill="#FF512F"/>
    <line x1="180" y1="110" x2="180" y2="165" stroke="#FF512F" stroke-width="2.5" stroke-dasharray="3,3"/>
    <text x="195" y="170" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Depth d (g_d)</text>

    <!-- Radius R arrow -->
    <line x1="180" y1="220" x2="290" y2="220" stroke="#FFFFFF" stroke-width="2"/>
    <text x="220" y="210" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Radius R</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Variation Formulae Cards (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="17" font-weight="bold">2. Acceleration g Variation Laws</text>

    <rect x="10" y="60" width="345" height="100" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">1. Variation with Altitude (h &lt;&lt; R):</text>
    <text x="182" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">g_h = g (1 - 2 h / R)</text>

    <rect x="10" y="175" width="345" height="100" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="200" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">2. Variation with Depth d:</text>
    <text x="182" y="235" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">g_d = g (1 - d / R)</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">3. Effect of Earth Rotation (Latitude λ):</text>
    <text x="182" y="348" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5" font-weight="bold">g_λ = g - R ω² cos² λ</text>
    <text x="182" y="380" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="13">• g max at Poles (λ=90°), g min at Equator (λ=0°)</text>
  </g>
</svg>`;

// 3D SVG 4: Gravitational Potential Energy Well & Escape Velocity
const svg4_3d_potential_energy_escape_velocity = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="wellGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(253, 200, 48, 0.4)"/>
      <stop offset="100%" stop-color="rgba(253, 200, 48, 0.02)"/>
    </linearGradient>
    <marker id="arrowGreen4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left Side: Gravitational Potential Well U(r) Curve (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Potential Energy Well U(r) = -G M m / r</text>

    <!-- Axes -->
    <line x1="50" y1="120" x2="330" y2="120" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="60" x2="50" y2="340" stroke="#475569" stroke-width="2"/>
    <text x="340" y="125" fill="#94A3B8" font-family="sans-serif" font-size="13">r</text>
    <text x="40" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">U(r)</text>

    <!-- Negative Hyperbolic Potential Well Curve -->
    <path d="M 70 320 Q 90 140 310 125" fill="none" stroke="#FDC830" stroke-width="3.5"/>
    <path d="M 70 320 Q 90 140 310 125 L 310 120 L 70 120 Z" fill="url(#wellGrad4)"/>

    <!-- Earth Radius R boundary -->
    <line x1="90" y1="120" x2="90" y2="280" stroke="#00E5FF" stroke-dasharray="3,3" stroke-width="2"/>
    <text x="80" y="110" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">r = R</text>

    <!-- Projectile launched with Escape Speed ve -->
    <circle cx="90" cy="240" r="8" fill="#76FF03"/>
    <line x1="90" y1="240" x2="260" y2="90" stroke="#76FF03" stroke-width="3.5" marker-end="url(#arrowGreen4)"/>
    <text x="180" y="160" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">v_e Launch → ∞</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Escape Speed & Potential Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="17" font-weight="bold">2. Potential &amp; Escape Velocity</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(253,200,48,0.1)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14" font-weight="bold">Gravitational Potential Energy U:</text>
    <text x="182" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">U = - (G M m / r)</text>

    <rect x="10" y="165" width="345" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Gravitational Potential V:</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">V = - (G M / r) &nbsp; (SI: J kg⁻¹)</text>

    <rect x="10" y="270" width="345" height="140" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="295" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Escape Speed Formula (v_e):</text>
    <text x="182" y="330" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">v_e = √(2 g R) = √(2 G M / R)</text>
    <text x="182" y="365" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">For Earth: v_e ≈ 11.2 km / s</text>
    <text x="182" y="390" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">• Independent of mass m and direction of projection!</text>
  </g>
</svg>`;

// 3D SVG 5: Earth Satellites & Geostationary vs Polar Orbits
const svg5_3d_satellites_geostationary_polar = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="earthGrad5" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#81D4FA"/>
      <stop offset="40%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#075985"/>
    </radialGradient>
    <filter id="glowSat5" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Left Side: 3D Earth Satellite Orbits (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Geostationary vs Polar Satellite Orbits</text>

    <!-- Earth Globe -->
    <circle cx="180" cy="220" r="70" fill="url(#earthGrad5)" stroke="#00E5FF" stroke-width="2"/>
    <text x="160" y="225" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Earth</text>

    <!-- Geostationary Orbit (Equatorial Plane) -->
    <ellipse cx="180" cy="220" rx="145" ry="45" fill="none" stroke="#FDC830" stroke-width="2.5" stroke-dasharray="5,4"/>
    <circle cx="320" cy="220" r="8" fill="#FDC830" filter="url(#glowSat5)"/>
    <text x="250" y="200" fill="#FDC830" font-family="sans-serif" font-size="13.5" font-weight="bold">GEO (T = 24h)</text>

    <!-- Polar Orbit (Passing over North/South Poles) -->
    <ellipse cx="180" cy="220" rx="35" ry="140" fill="none" stroke="#76FF03" stroke-width="2.5"/>
    <circle cx="180" cy="80" r="7" fill="#76FF03"/>
    <text x="195" y="85" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Polar Orbit (LEO)</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Satellite Orbital Speed & Period Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="17" font-weight="bold">2. Orbital Speed &amp; Satellite Laws</text>

    <rect x="10" y="60" width="345" height="100" rx="8" fill="rgba(253,200,48,0.1)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14" font-weight="bold">Orbital Velocity Formula (v_o):</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">v_o = √(G M / r) = √(g R)</text>
    <text x="182" y="145" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">For Low Earth Orbit: v_o ≈ 7.92 km / s</text>

    <rect x="10" y="175" width="345" height="110" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="200" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Geostationary Satellite (GEO):</text>
    <text x="25" y="228" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Height h ≈ 35,786 km above Earth</text>
    <text x="25" y="248" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Orbital Period T = 24 Hours (Appears Stationary)</text>
    <text x="25" y="268" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Orbits in Equatorial Plane (West to East)</text>

    <rect x="10" y="300" width="345" height="115" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="325" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Polar Satellite (LEO):</text>
    <text x="25" y="353" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Low altitude h ≈ 500 – 800 km</text>
    <text x="25" y="373" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Period T ≈ 100 minutes (Weather &amp; Remote Sensing)</text>
    <text x="25" y="393" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Scans entire Earth surface daily</text>
  </g>
</svg>`;

// 3D SVG 6: Energy of an Orbiting Satellite & Weightlessness Concept
const svg6_3d_satellite_energy_weightlessness = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="satGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDC830"/>
      <stop offset="100%" stop-color="#E67E22"/>
    </radialGradient>
  </defs>

  <!-- Left Side: Satellite Mechanical Energy Breakdown (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Orbiting Satellite Energy Balance</text>

    <!-- Kinetic Energy Ek Bar -->
    <rect x="50" y="100" width="260" height="40" rx="6" fill="rgba(118,255,3,0.2)" stroke="#76FF03" stroke-width="2"/>
    <text x="65" y="125" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Kinetic E_k = + ½ G M m / r</text>

    <!-- Potential Energy U Bar -->
    <rect x="50" y="160" width="260" height="40" rx="6" fill="rgba(255,81,47,0.2)" stroke="#FF512F" stroke-width="2"/>
    <text x="65" y="185" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">Potential U = - G M m / r</text>

    <!-- Total Energy E_total Bar -->
    <rect x="50" y="220" width="260" height="40" rx="6" fill="rgba(253,200,48,0.2)" stroke="#FDC830" stroke-width="2"/>
    <text x="65" y="245" fill="#FDC830" font-family="sans-serif" font-size="15" font-weight="bold">Total E = - ½ G M m / r</text>

    <rect x="25" y="310" width="315" height="100" rx="10" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="182" y="338" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Binding Energy of Satellite:</text>
    <text x="182" y="368" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">B.E. = - E_total = + ½ G M m / r</text>
    <text x="182" y="395" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">✓ Negative Total Energy indicates Bound Orbit!</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Weightlessness Concept Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FDC830" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="17" font-weight="bold">2. Weightlessness in Satellites</text>

    <rect x="10" y="60" width="345" height="110" rx="8" fill="rgba(253,200,48,0.1)" stroke="#FDC830" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FDC830" font-family="sans-serif" font-size="14.5" font-weight="bold">Zero Apparent Weight (N = 0):</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">N = m (g - a) = m (g - g) = 0</text>
    <text x="182" y="148" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">Satellite &amp; Astronaut in Continuous Free-Fall!</text>

    <rect x="10" y="185" width="345" height="225" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="210" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Key Weightlessness Phenomena:</text>
    <text x="25" y="240" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• No normal contact reaction from floor</text>
    <text x="25" y="268" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• Objects float freely inside spacecraft</text>
    <text x="25" y="296" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• Liquids form perfect floating spheres due to surface tension</text>
    <text x="25" y="324" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• Simple pendulum time period becomes infinite (T = ∞)</text>
    <text x="25" y="352" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• Spring balance reads zero weight</text>
    <text x="25" y="380" fill="#FFD700" font-family="sans-serif" font-size="13">• Note: Gravity force is NOT zero, only N = 0!</text>
  </g>
</svg>`;

// Construct final Overview HTML for Chapter 6
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
  <div style="background: rgba(253, 200, 48, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit VI: Gravitation</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Gravitation:</b>
        <span style="color: #FFFFFF;">The universal force of mutual attraction acting between any two bodies in the universe by virtue of their masses.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Gravitational Constant (G):</b>
        <span style="color: #FFFFFF;">Universal constant of proportionality equal to G = 6.674 × 10<sup>-11</sup> N m<sup>2</sup> kg<sup>-2</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Acceleration Due to Gravity (g):</b>
        <span style="color: #FFFFFF;">The acceleration produced in a freely falling body under the gravitational attraction of Earth: g = G M / R<sup>2</sup> ≈ 9.8 m/s<sup>2</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Gravitational Field Intensity (E_g):</b>
        <span style="color: #FFFFFF;">The gravitational force experienced per unit mass placed at a point in a gravitational field: E_g = F / m = G M / r<sup>2</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Gravitational Potential (V):</b>
        <span style="color: #FFFFFF;">The work done in bringing a unit test mass from infinity to a point in gravitational field: V = - G M / r.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Gravitational Potential Energy (U):</b>
        <span style="color: #FFFFFF;">Work done in bringing mass m from infinity to distance r from mass M: U = - G M m / r.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Escape Velocity (v_e):</b>
        <span style="color: #FFFFFF;">Minimum velocity required for a body to escape Earth's gravitational field: v_e = √(2 g R) ≈ 11.2 km/s.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Orbital Velocity (v_o):</b>
        <span style="color: #FFFFFF;">The horizontal speed required for a satellite to revolve in a stable circular orbit around Earth: v_o = √(g R) ≈ 7.92 km/s.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Geostationary Satellite (GEO):</b>
        <span style="color: #FFFFFF;">A satellite revolving in equatorial plane from West to East with T = 24h at height h ≈ 35,786 km.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Weightlessness:</b>
        <span style="color: #FFFFFF;">The state of zero apparent weight (Normal reaction N = 0) experienced by a body in continuous free-fall.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: KEPLER'S LAWS OF PLANETARY MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Kepler's Laws of Planetary Motion</h2>
  
  ${defCard("Kepler's Laws", "Johannes Kepler formulated three empirical laws governing planetary motion around the Sun based on Tycho Brahe's astronomical observations.")}

  <p>Before Newton formulated his law of gravitation, Johannes Kepler analyzed astronomical data and established three fundamental laws of planetary orbits:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("1. Law of Orbits", "All planets move in elliptical orbits with the Sun located at one of the two foci of the ellipse.")}
    ${colonTopic("2. Law of Areas (Areal Velocity)", "The line joining the Sun to a planet sweeps out equal areas in equal intervals of time (dA/dt = L / (2m) = Constant). This proves that gravitational force is a central force and angular momentum L is strictly conserved.")}
    ${colonTopic("3. Law of Periods", "The square of the time period T of revolution of a planet is directly proportional to the cube of the semi-major axis a of its elliptical orbit: T<sup>2</sup> ∝ a<sup>3</sup>.")}
  </div>

  ${svg3DCardWrapper("Kepler's Laws of Planetary Motion (Elliptical Orbit & Swept Areas)", "3D Elliptical planetary orbit around Sun focus F1 showing areal velocity conservation dA/dt = L/2m and T² ∝ a³.", svg1_3d_keplers_laws)}

  <!-- SECTION 2: NEWTON'S UNIVERSAL LAW OF GRAVITATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Universal Law of Gravitation & Constant G</h2>

  ${defCard("Newton's Law of Gravitation", "States that every particle of matter attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of distance between them.")}

  ${eqBox("<b>F = G " + frac('m<sub>1</sub> m<sub>2</sub>', 'r<sup>2</sup>') + " &nbsp;|&nbsp; G = 6.674 × 10<sup>-11</sup> N m<sup>2</sup> kg<sup>-2</sup> &nbsp;|&nbsp; Dimensions: [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Vector Form & Properties of Gravitational Force</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Action-Reaction Pair", "F₁₂ = - F₂₁ (Obeying Newton's Third Law of Motion).")}
    ${colonTopic("Central Force", "Acts along the line joining the centers of mass of the two interacting bodies.")}
    ${colonTopic("Conservative Nature", "Work done by gravitational force depends solely on initial and final positions, independent of path taken.")}
  </div>

  ${svg3DCardWrapper("Universal Law of Gravitation & Gravitational Constant G", "3D Mass interaction model showing action-reaction force pair F12 = -F21 and universal constant G values.", svg2_3d_universal_gravitation)}

  <!-- SECTION 3: ACCELERATION DUE TO GRAVITY (g) AND ITS VARIATIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Acceleration Due to Gravity (g) and Its Variations</h2>

  ${defCard("Acceleration Due to Gravity (g)", "The acceleration acquired by a body falling freely towards Earth under its gravitational pull: g = G M / R<sup>2</sup> ≈ 9.8 m/s<sup>2</sup>.")}

  ${eqBox("<b>g = " + frac('G M', 'R<sup>2</sup>') + " = " + frac('4', '3') + " π G ρ R &nbsp; (where ρ is average density of Earth)</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Three Causes of Variation in g</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("1. Altitude (Height h)", singleLineCode("g<sub>h</sub> = g (1 - " + frac('2h', 'R') + ") &nbsp; (for h &lt;&lt; R)"))}
    ${colonTopic("2. Depth (d below surface)", singleLineCode("g<sub>d</sub> = g (1 - " + frac('d', 'R') + ") &nbsp; (at Earth center d=R, g=0)"))}
    ${colonTopic("3. Rotation of Earth (Latitude λ)", singleLineCode("g<sub>λ</sub> = g - R ω<sup>2</sup> cos<sup>2</sup> λ &nbsp; (g max at Poles λ=90°, g min at Equator λ=0°)"))}
  </div>

  ${svg3DCardWrapper("Variation of Acceleration Due to Gravity (g) with Altitude & Depth", "3D Earth sphere geometry showing g decrease at height h, depth d, and latitude λ rotational effect.", svg3_3d_variation_of_g)}

  <!-- SECTION 4: GRAVITATIONAL POTENTIAL ENERGY & ESCAPE VELOCITY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Gravitational Potential Energy & Escape Velocity</h2>

  ${defCard("Gravitational Potential Energy (U)", "The work done by external agent in bringing mass m from infinity to distance r in gravitational field of mass M without acceleration: U = - G M m / r.")}

  ${eqBox("<b>U(r) = - " + frac('G M m', 'r') + " &nbsp;|&nbsp; V(r) = - " + frac('G M', 'r') + " &nbsp;|&nbsp; v<sub>e</sub> = √(2 g R) = √(" + frac('2 G M', 'R') + ") ≈ 11.2 km/s</b>")}

  ${svg3DCardWrapper("Gravitational Potential Energy Well & Escape Velocity", "Hyperbolic potential energy well U(r) = -GMm/r alongside projectile escape trajectory at v_e = 11.2 km/s.", svg4_3d_potential_energy_escape_velocity)}

  <!-- SECTION 5: EARTH SATELLITES & ORBITAL VELOCITY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Earth Satellites & Orbital Velocity</h2>

  ${defCard("Orbital Velocity (v_o)", "The minimum velocity required to put a satellite into its orbital path around Earth: v_o = √(G M / r) = √(g R).")}

  <div style="margin: 12px 0;">
    ${colonTopic("Orbital Speed v_o", singleLineCode("v<sub>o</sub> = √(" + frac('G M', 'R + h') + ") ≈ 7.92 km/s &nbsp; (for low Earth orbits)"))}
    ${colonTopic("Time Period T", singleLineCode("T = " + frac('2π (R+h)<sup>3/2</sup>', '√(G M)') + " &nbsp; (For GEO: h = 35,786 km, T = 24 Hours)"))}
  </div>

  ${svg3DCardWrapper("Earth Satellites & Geostationary vs Polar Orbits", "3D Globe showing Geostationary orbit (GEO, T=24h) in equatorial plane vs Low-altitude Polar orbit.", svg5_3d_satellites_geostationary_polar)}

  <!-- SECTION 6: ENERGY OF SATELLITE & WEIGHTLESSNESS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Energy of an Orbiting Satellite & Weightlessness</h2>

  ${defCard("Weightlessness", "The condition in which a body experiences zero net normal contact reaction (N = 0) while in continuous free-fall along with its satellite environment.")}

  ${eqBox("<b>E<sub>k</sub> = +" + frac('1', '2') + " " + frac('G M m', 'r') + " &nbsp;|&nbsp; U = -" + frac('G M m', 'r') + " &nbsp;|&nbsp; E<sub>total</sub> = -" + frac('1', '2') + " " + frac('G M m', 'r') + "</b>")}

  ${svg3DCardWrapper("Energy of an Orbiting Satellite & Weightlessness Concept", "Energy breakdown graph (E_k, U, E_total) alongside free-fall weightlessness N=0 phenomena inside spacecraft.", svg6_3d_satellite_energy_weightlessness)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(253, 200, 48, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Satellite Laws & Gravitational Constants Summary for Unit VI</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Universal Law of Gravitation:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">F = G ` + frac('m<sub>1</sub> m<sub>2</sub>', 'r<sup>2</sup>') + `<br>G = 6.674 × 10<sup>-11</sup> N m<sup>2</sup> kg<sup>-2</sup></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Acceleration g Variations:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">g<sub>h</sub> = g (1 - ` + frac('2h', 'R') + `)<br>g<sub>d</sub> = g (1 - ` + frac('d', 'R') + `) &nbsp;|&nbsp; g<sub>λ</sub> = g - R ω<sup>2</sup> cos<sup>2</sup> λ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Escape & Orbital Velocities:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>e</sub> = √(2 g R) ≈ 11.2 km/s<br>v<sub>o</sub> = √(g R) ≈ 7.92 km/s &nbsp;|&nbsp; v<sub>e</sub> = √2 v<sub>o</sub></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Satellite Total Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">E<sub>k</sub> = ` + frac('G M m', '2 r') + ` &nbsp;|&nbsp; U = - ` + frac('G M m', 'r') + `<br>E<sub>total</sub> = - ` + frac('G M m', '2 r') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Kepler's 3rd Law:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">T<sup>2</sup> = ` + frac('4 π<sup>2</sup>', 'G M') + ` a<sup>3</sup> &nbsp; ⇒ &nbsp; T<sup>2</sup> ∝ a<sup>3</sup></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Geostationary Orbit:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">h ≈ 35,786 km &nbsp;|&nbsp; T = 24 Hours<br>N = 0 (Apparent Weightlessness)</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate 100 Textbook Standard Solutions (25 MCQs, 30 VSAs, 30 SAs, 15 LAs) for Chapter 6
function generateFullSolutionsHtml() {
  let html = `<style>
    p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) { text-align: justify !important; }
    h1, h2, h3, h4, h5, h6 { text-align: left; }
    .text-center { text-align: center !important; }
  </style>
  <div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 10px;">NCERT & Textbook Standard Exercise Solutions — Unit VI: Gravitation</h1>`;

  // 1. SECTION 1: 25 MCQs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">SECTION 1: MULTIPLE CHOICE QUESTIONS (MCQs 1 - 25)</h2>`;

  const mcqQuestions = [
    { q: "The gravitational force between two point masses m₁ and m₂ separated by distance r is F. If distance is doubled, the force becomes:", opts: ["(a) 2F", "(b) 4F", "(c) F/2", "(d) F/4"], ans: "(d)", exp: "By Newton's law F ∝ 1/r². Doubling r makes force F' = F/2² = F/4." },
    { q: "The value of universal gravitational constant G depends upon:", opts: ["(a) Nature of masses", "(b) Medium between masses", "(c) Temperature of environment", "(d) Independent of all factors"], ans: "(d)", exp: "G is a universal scalar constant independent of medium, temperature, or nature of masses." },
    { q: "Kepler's second law (law of areas) is a direct consequence of conservation of:", opts: ["(a) Linear momentum", "(b) Angular momentum", "(c) Kinetic energy", "(d) Total mass"], ans: "(b)", exp: "Areal velocity dA/dt = L / (2m). Since central gravitational force exerts zero torque, angular momentum L is conserved." },
    { q: "If Earth suddenly stops rotating about its axis, the value of acceleration due to gravity g at the equator will:", opts: ["(a) Increase", "(b) Decrease", "(c) Remain unchanged", "(d) Become zero"], ans: "(a)", exp: "g_eq = g - R ω². If rotation stops (ω=0), g_eq increases by R ω²." },
    { q: "The ratio of escape velocity to orbital velocity near Earth's surface (v_e / v_o) is:", opts: ["(a) 1", "(b) √2", "(c) 2", "(d) 1/√2"], ans: "(b)", exp: "v_e = √(2gR) and v_o = √(gR). Thus v_e / v_o = √2 ≈ 1.414." },
    { q: "The weight of a body at the center of the Earth is:", opts: ["(a) Infinite", "(b) Equal to surface weight", "(c) Zero", "(d) Double the surface weight"], ans: "(c)", exp: "At Earth center d = R, so g_d = g(1 - R/R) = 0. Weight W = m g = 0." },
    { q: "The orbital period of a geostationary satellite is:", opts: ["(a) 12 hours", "(b) 24 hours", "(c) 48 hours", "(d) 90 minutes"], ans: "(b)", exp: "A geostationary satellite revolves with the exact same rotational period as Earth (24 hours)." },
    { q: "Gravitational potential energy of a body of mass m at distance r from Earth center (r > R) is:", opts: ["(a) +G M m / r", "(b) -G M m / r", "(c) -G M m / r²", "(d) +G M m / r²"], ans: "(b)", exp: "U(r) = - G M m / r, taking reference U=0 at infinity." },
    { q: "If the radius of Earth shrinks by 1% while its mass remains constant, acceleration due to gravity g on its surface will:", opts: ["(a) Increase by 1%", "(b) Increase by 2%", "(c) Decrease by 2%", "(d) Decrease by 1%"], ans: "(b)", exp: "g = G M / R². Δg/g = -2 (ΔR/R) = -2 (-1%) = +2% increase." },
    { q: "The time period T of a simple pendulum inside an orbiting satellite is:", opts: ["(a) 0", "(b) 2 seconds", "(c) Infinite", "(d) 24 hours"], ans: "(c)", exp: "In orbit, apparent gravity g_eff = 0. T = 2π √(l / g_eff) = 2π √(l/0) = ∞." },
    { q: "Dimensions of Universal Gravitational Constant G are:", opts: ["(a) [M¹ L³ T⁻²]", "(b) [M⁻¹ L³ T⁻²]", "(c) [M⁻¹ L² T⁻²]", "(d) [M¹ L² T⁻¹]"], ans: "(b)", exp: "G = F r² / (m1 m2) ⇒ [M L T⁻²][L²]/[M²] = [M⁻¹ L³ T⁻²]." },
    { q: "The height of a geostationary satellite above Earth's surface is approximately:", opts: ["(a) 6400 km", "(b) 35,786 km", "(c) 10,000 km", "(d) 42,000 km"], ans: "(b)", exp: "GEO altitude h = 35,786 km (or r ≈ 42,164 km from Earth center)." },
    { q: "Escape velocity from Earth's surface depends on:", opts: ["(a) Mass of projected body", "(b) Direction of projection", "(c) Mass of Earth M and Radius R", "(d) Angle of projection"], ans: "(c)", exp: "v_e = √(2GM/R). It is independent of mass m and angle of projection." },
    { q: "Total mechanical energy of a satellite orbiting in a circular path of radius r is:", opts: ["(a) +G M m / 2r", "(b) -G M m / 2r", "(c) -G M m / r", "(d) 0"], ans: "(b)", exp: "E_total = E_k + U = +(GMm/2r) - (GMm/r) = -GMm/2r." },
    { q: "Polar satellites revolve around Earth in:", opts: ["(a) Equatorial plane", "(b) North-South polar plane", "(c) Inclined at 45°", "(d) Stationary path"], ans: "(b)", exp: "Polar satellites orbit in a North-South plane passing over poles at low altitude." },
    { q: "A body is taken from equator to pole. Its weight will:", opts: ["(a) Decrease", "(b) Increase", "(c) Remain constant", "(d) Become zero"], ans: "(b)", exp: "g is maximum at poles (g_p > g_eq due to zero rotational reduction and polar flattening). Weight increases." },
    { q: "The work done in moving a mass m from Earth surface to infinity is:", opts: ["(a) G M m / R", "(b) 2 G M m / R", "(c) G M m / R²", "(d) 0"], ans: "(a)", exp: "W = U(∞) - U(R) = 0 - (-G M m / R) = G M m / R." },
    { q: "Two satellites of masses m and 4m revolve in the same circular orbit of radius r. Their orbital speeds are in ratio:", opts: ["(a) 1 : 4", "(b) 4 : 1", "(c) 1 : 1", "(d) 1 : 2"], ans: "(c)", exp: "v_o = √(G M / r) is independent of satellite mass m. Ratio is 1 : 1." },
    { q: "Gravitational force is a:", opts: ["(a) Repulsive force", "(b) Non-conservative force", "(c) Conservative central force", "(d) Nuclear force"], ans: "(c)", exp: "Gravitational force is always attractive, central, and conservative." },
    { q: "At what height h above Earth surface does g become g/4? (R = Earth radius)", opts: ["(a) R/2", "(b) R", "(c) 2R", "(d) 4R"], ans: "(b)", exp: "g_h = g R² / (R+h)² = g/4 ⇒ (R+h)² = 4R² ⇒ R+h = 2R ⇒ h = R." },
    { q: "Areal velocity of a planet revolving around Sun is equal to:", opts: ["(a) L / m", "(b) L / 2m", "(c) 2L / m", "(d) m / 2L"], ans: "(b)", exp: "Kepler's 2nd law gives dA/dt = L / (2m)." },
    { q: "Binding energy of a satellite orbiting in radius r is:", opts: ["(a) +G M m / r", "(b) +G M m / 2r", "(c) -G M m / 2r", "(d) 0"], ans: "(b)", exp: "Binding Energy = - E_total = - (- G M m / 2r) = + G M m / 2r." },
    { q: "If Earth loses its atmosphere, the duration of day will:", opts: ["(a) Increase", "(b) Decrease", "(c) Remain unchanged", "(d) Become 12 hours"], ans: "(c)", exp: "Mass of atmosphere is negligible compared to Earth; rotational period remains unchanged." },
    { q: "The speed of a planet is maximum when it is at:", opts: ["(a) Aphelion", "(b) Perihelion", "(c) End of minor axis", "(d) Constant speed everywhere"], ans: "(b)", exp: "By angular momentum conservation L = m r v = const. At perihelion r is minimum, so speed v is maximum." },
    { q: "The gravitational potential at a point on Earth's surface is V. At height h = R above surface, it is:", opts: ["(a) V/2", "(b) 2V", "(c) V/4", "(d) V"], ans: "(a)", exp: "V_surface = -GM/R. At h=R, r=2R, so V' = -GM/(2R) = V/2." }
  ];

  mcqQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(253, 200, 48, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 15px 0;">
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
    { q: "State Newton's Universal Law of Gravitation.", a: "States that every body attracts every other body with force F = G (m₁ m₂ / r²), acting along the line joining their centers." },
    { q: "Write the SI unit and dimensional formula of Universal Gravitational Constant G.", a: "SI Unit: N m² kg⁻² (or m³ kg⁻¹ s⁻²). Dimensional Formula: [M⁻¹ L³ T⁻²]." },
    { q: "What is the acceleration due to gravity at the center of the Earth?", a: "Zero (g = 0), because depth d = R, giving g_d = g(1 - R/R) = 0." },
    { q: "State Kepler's Law of Periods.", a: "The square of the orbital period T of a planet is directly proportional to the cube of the semi-major axis a of its elliptical orbit (T² ∝ a³)." },
    { q: "Name the physical quantity that remains conserved in Kepler's second law.", a: "Angular momentum L of the revolving planet." },
    { q: "Define gravitational potential at a point.", a: "The work done per unit mass in bringing a small test mass from infinity to that point in gravitational field: V = - G M / r (SI Unit: J/kg)." },
    { q: "What is the relation between escape speed v_e and orbital speed v_o near Earth surface?", a: "v_e = √2 v_o ≈ 1.414 v_o." },
    { q: "What is the numerical value of escape velocity from Earth's surface?", a: "v_e = √(2 g R) ≈ 11.2 km/s." },
    { q: "Why is gravitational potential energy taken as negative?", a: "Because gravitational force is attractive, and work is done by the field when bringing mass from infinity (where U = 0) to distance r." },
    { q: "Define a Geostationary Satellite.", a: "A satellite revolving in the equatorial plane from West to East with an orbital period of exactly 24 hours, appearing stationary to Earth observers." },
    { q: "What is the height of a geostationary satellite above Earth's surface?", a: "Approximately h ≈ 35,786 km (or distance r ≈ 42,164 km from Earth center)." },
    { q: "Define orbital velocity of a satellite.", a: "The minimum horizontal speed required to place a satellite into a stable circular orbit around Earth: v_o = √(G M / r)." },
    { q: "What is the value of orbital velocity for a low Earth satellite?", a: "v_o = √(g R) ≈ 7.92 km/s." },
    { q: "What is the apparent weight of an astronaut inside an orbiting space station?", a: "Zero (State of Weightlessness), because normal contact reaction N = 0." },
    { q: "Does escape speed depend on the mass of the escaping body?", a: "No, v_e = √(2GM/R) is completely independent of the body's mass m." },
    { q: "What is the value of g at Earth's poles compared to equator?", a: "g is maximum at the poles (g_p ≈ 9.83 m/s²) and minimum at equator (g_eq ≈ 9.78 m/s²)." },
    { q: "Why does the Moon have no atmosphere?", a: "Because the thermal root-mean-square speed of gas molecules exceeds the small escape velocity of the Moon (v_e ≈ 2.38 km/s)." },
    { q: "Define inertial mass.", a: "The mass of a body measured by its resistance to acceleration under an applied force: m_i = F / a." },
    { q: "Define gravitational mass.", a: "The mass of a body measured by the gravitational force exerted on it by Earth: m_g = F_g / g." },
    { q: "What is the principle of equivalence?", a: "States that inertial mass m_i and gravitational mass m_g of a body are strictly equal." },
    { q: "What is a Polar Satellite?", a: "A satellite orbiting in a North-South plane passing over Earth's poles at low altitude (h ≈ 500-800 km) with period T ≈ 100 min." },
    { q: "Why are space rockets launched from West to East near equator?", a: "To utilize Earth's eastward rotational speed (v ≈ 465 m/s at equator) as an initial boost." },
    { q: "What is the total mechanical energy of a satellite orbiting in radius r?", a: "E_total = - G M m / (2r)." },
    { q: "What does the negative sign of total energy of a satellite signify?", a: "It signifies that the satellite is gravitationally bound to Earth and requires energy to escape to infinity." },
    { q: "What is the binding energy of a satellite?", a: "The energy required to detach the satellite from its orbit to infinity: B.E. = + G M m / (2r)." },
    { q: "How does g vary with depth d below Earth surface?", a: "g_d = g (1 - d/R). Acceleration g decreases linearly with depth d." },
    { q: "How does g vary with height h above Earth surface (h << R)?", a: "g_h = g (1 - 2h/R)." },
    { q: "What is the direction of gravitational field intensity?", a: "Directively radially inward towards the center of mass creating the field." },
    { q: "What is the work done by gravitational force in one complete planetary orbit?", a: "Zero, because gravitational force is conservative and displacement in a closed path is zero." },
    { q: "Can a satellite orbit in any plane other than passing through Earth's center?", a: "No, the center of satellite's orbit must always coincide with Earth's center of mass to provide required centripetal force." }
  ];

  vsaQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(253, 200, 48, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 14px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 26}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Ans:</b> ${item.a}</p>
    </div>`;
  });

  // 3. SECTION 3: 30 SAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 3: SHORT ANSWER QUESTIONS (SAs 56 - 85)</h2>`;

  const saQuestions = [
    { q: "Derive the relation between acceleration due to gravity g and Universal Gravitational Constant G.", a: "Consider a body of mass m on Earth surface (Mass M, Radius R). Gravitational force F = G M m / R². From Newton's 2nd law F = m g. Equating gives m g = G M m / R² ⇒ g = G M / R²." },
    { q: "Derive an expression for variation of g with altitude h above Earth's surface (for h << R).", a: "At surface g = G M / R². At height h, g_h = G M / (R+h)² = (G M / R²) [1 + h/R]⁻² = g (1 + h/R)⁻². Expanding binomially for h << R gives g_h = g (1 - 2h/R)." },
    { q: "Derive an expression for variation of g with depth d below Earth's surface.", a: "Assuming Earth as a sphere of uniform density ρ, mass M = (4/3) π R³ ρ, so g = (4/3) π G ρ R. At depth d, effective mass is M' within radius (R-d). g_d = (4/3) π G ρ (R-d) = g [ (R-d) / R ] = g (1 - d/R)." },
    { q: "Differentiate between Geostationary Satellite and Polar Satellite.", a: "1. GEO orbits in equatorial plane with T = 24h at h ≈ 35,786 km; used for telecommunication. 2. Polar satellite orbits over poles with T ≈ 100 min at h ≈ 500-800 km; used for weather & remote sensing." },
    { q: "Derive the formula for Escape Speed v_e from Earth's surface.", a: "Work done in moving mass m from R to infinity: W = ∫<sub>R</sub><sup>∞</sup> (G M m / r²) dr = G M m / R. To escape, kinetic energy ½ m v_e² must equal W: ½ m v_e² = G M m / R ⇒ v_e = √(2 G M / R) = √(2 g R)." },
    { q: "Derive the formula for Orbital Speed v_o of a satellite revolving at height h above Earth surface.", a: "Required centripetal force is provided by gravitational force: m v_o² / (R+h) = G M m / (R+h)² ⇒ v_o = √[ G M / (R+h) ]. For low orbit (h << R), v_o = √(G M / R) = √(g R)." },
    { q: "State Kepler's three laws of planetary motion with mathematical expressions where applicable.", a: "1. Law of Orbits: Elliptical orbits with Sun at focus. 2. Law of Areas: dA/dt = L / (2m) = Const. 3. Law of Periods: T² = (4π² / GM) a³ ⇒ T² ∝ a³." },
    { q: "Explain why angular momentum is conserved in planetary motion around the Sun.", a: "Gravitational force F is a central force acting along the radius vector r. Torque τ = r × F = 0. Since τ = dL/dt = 0, angular momentum L remains constant." },
    { q: "Derive an expression for total energy of an orbiting satellite of mass m at radius r.", a: "Kinetic Energy E_k = ½ m v_o² = ½ m (GM/r) = + G M m / (2r). Potential Energy U = - G M m / r. Total Energy E = E_k + U = +(GMm/2r) - (GMm/r) = - G M m / (2r)." },
    { q: "Explain the phenomenon of Weightlessness inside a satellite.", a: "In orbit, both satellite and astronaut experience identical centripetal acceleration g_eff towards Earth. Astronaut is in continuous free-fall, so floor reaction N = m(g - g) = 0." },
    { q: "Calculate the height above Earth surface at which g drops to 64% of its surface value.", a: "g_h / g = 0.64 = (R / (R+h))² ⇒ R / (R+h) = 0.8 ⇒ R+h = 1.25 R ⇒ h = 0.25 R = 0.25 × 6400 km = 1600 km." },
    { q: "Why is the gravitational potential at any point in a field always negative?", a: "Because reference potential V=0 is chosen at infinity. Since gravitational force is attractive, work is done by field as mass approaches, making V negative everywhere." },
    { q: "Show that the speed of a satellite revolving very close to Earth surface is approximately 7.92 km/s.", a: "v_o = √(g R) = √(9.8 m/s² × 6.4 × 10⁶ m) = √(62.72 × 10⁶) = 7920 m/s = 7.92 km/s." },
    { q: "Show that escape velocity from Earth surface is √2 times the orbital velocity near surface.", a: "v_e = √(2 g R) and v_o = √(g R). Dividing v_e by v_o gives v_e / v_o = √(2 g R) / √(g R) = √2." },
    { q: "A body weighs 63 N on Earth surface. What is its gravitational weight on Mars (mass = 1/9 Earth mass, radius = 1/2 Earth radius)?", a: "g_Mars / g_Earth = (M_M / M_E) × (R_E / R_M)² = (1/9) × (2)² = 4/9. Weight on Mars = 63 N × (4/9) = 28 N." },
    { q: "Explain how g varies with latitude λ due to Earth's rotation.", a: "Centrifugal acceleration at latitude λ is R ω² cos λ directed outward. Its component along gravity is R ω² cos² λ. Net gravity g_λ = g - R ω² cos² λ." },
    { q: "Calculate the orbital speed of a satellite orbiting at height h = R above Earth surface.", a: "v_o = √[ G M / (R+h) ] = √[ G M / 2R ] = √[ g R / 2 ] = 7.92 / √2 ≈ 5.6 km/s." },
    { q: "What is gravitational field intensity E_g? How is it related to gravitational potential V?", a: "Intensity E_g = F/m = G M / r². Potential V = - G M / r. Relation: E_g = - dV / dr." },
    { q: "Two artificial satellites A and B of masses m and 3m move in orbits of radii r and 2r. Compare their kinetic energies.", a: "E_k = G M m / (2r). E_kA = G M m / (2r). E_kB = G M (3m) / (2 × 2r) = (3/4) G M m / (2r). Ratio E_kA / E_kB = 4 / 3." },
    { q: "Explain why two raindrops of equal mass falling towards Earth attract each other, but do not collide due to gravitation.", a: "Gravitational force between small masses is extremely weak (G ~ 10⁻¹¹) compared to air drag and terminal velocity dynamics." },
    { q: "Calculate the period of revolution of a satellite orbiting near Earth surface.", a: "T = 2π R / v_o = 2π √(R / g) = 2π √(6.4 × 10⁶ / 9.8) ≈ 5070 seconds ≈ 84.5 minutes." },
    { q: "State two important applications of Geostationary Satellites.", a: "1. Global telecommunication and TV broadcasting. 2. Weather forecasting and meteorology." },
    { q: "State two important applications of Polar Satellites.", a: "1. Remote sensing and environmental monitoring. 2. Military reconnaissance and land mapping." },
    { q: "Show that kinetic energy of an orbiting satellite is half the magnitude of its potential energy.", a: "E_k = + G M m / (2r). Potential Energy U = - G M m / r. Magnitude |U| = G M m / r. Thus E_k = ½ |U|." },
    { q: "Why is a projection speed less than escape speed called orbital or sub-escape speed?", a: "If v < v_e, total energy E < 0, so the body cannot escape to infinity and remains bound in an elliptical or circular orbit." },
    { q: "If the distance between Earth and Sun is halved, what would be the duration of the year?", a: "T² ∝ a³. If a' = a/2, T'² / T² = (1/2)³ = 1/8 ⇒ T' = 365 / √8 = 365 / 2.828 ≈ 129 days." },
    { q: "Explain inertial mass vs gravitational mass with examples.", a: "1. Inertial mass m_i resists acceleration (F = m_i a). 2. Gravitational mass m_g determines gravitational attraction (F_g = m_g g). Equal by Equivalence Principle." },
    { q: "Why does a body weigh more at poles than at equator?", a: "1. Earth is flattened at poles (R_p < R_eq ⇒ g = GM/R² is larger). 2. Rotational term R ω² cos² λ is zero at poles (λ=90°)." },
    { q: "Can a satellite be launched into an orbit such that it remains fixed over Delhi?", a: "No, Delhi is at latitude ~28.6°N. Geostationary satellites MUST orbit in the Equatorial plane (0° latitude) passing through Earth center." },
    { q: "What is the escape velocity of a body from a planet whose mass and radius are both double that of Earth?", a: "v_e' = √[ 2 G (2M) / (2R) ] = √(2 G M / R) = v_e = 11.2 km/s." }
  ];

  saQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(253, 200, 48, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 15px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 56}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Solution:</b> ${item.a}</p>
    </div>`;
  });

  // 4. SECTION 4: 15 LAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 4: LONG ANSWER QUESTIONS (LAs 86 - 100)</h2>`;

  const laQuestions = [
    { q: "Derive expressions for variation of acceleration due to gravity g: (i) at height h above surface, (ii) at depth d below surface. Compare the percentage decrease in g at height h vs depth d for h = d.", a: "1. Height h: g_h = g (1 - 2h/R). Percentage drop = (2h/R) × 100%.\n2. Depth d: g_d = g (1 - d/R). Percentage drop = (d/R) × 100%.\n3. Comparison for h = d: Percentage decrease at height h is TWICE the percentage decrease at depth d." },
    { q: "State Kepler's three laws of planetary motion. Derive Kepler's third law (T² ∝ r³) for a circular orbit from Newton's law of gravitation.", a: "1. State Orbits, Areas, and Periods laws.\n2. Proof: Gravitational force provides centripetal force: G M m / r² = m v² / r ⇒ v² = G M / r.\n3. Period T = 2π r / v ⇒ T² = 4π² r² / v² = 4π² r² / (GM/r) = (4π² / GM) r³. Hence T² ∝ r³." },
    { q: "Define Escape Velocity. Derive an expression for escape velocity of a body from Earth surface. Calculate its value for Earth and explain why Moon has no atmosphere.", a: "1. Definition: Minimum speed to escape Earth gravity.\n2. Derivation: W = ∫<sub>R</sub><sup>∞</sup> (G M m / r²) dr = G M m / R. Equating ½ m v_e² = G M m / R ⇒ v_e = √(2GM/R) = √(2gR).\n3. Earth value: v_e = √(2 × 9.8 × 6.4 × 10⁶) = 11.2 km/s.\n4. Moon: v_e_Moon ≈ 2.38 km/s, which is less than thermal rms speed of atmospheric gas molecules, causing gas to escape." },
    { q: "Define Orbital Velocity of a satellite. Derive expressions for: (i) Orbital Speed v_o, (ii) Period of revolution T, (iii) Height h of geostationary satellite above Earth.", a: "1. v_o = √(GM / (R+h)).\n2. T = 2π (R+h) / v_o = 2π (R+h)³/² / √(GM).\n3. Height h of GEO: T = 24h = 86400s. Substituting T² = (4π²/GM)(R+h)³ yields (R+h) ≈ 42,164 km ⇒ h = 42,164 - 6400 = 35,764 km ≈ 35,786 km." },
    { q: "Derive expressions for Kinetic Energy, Potential Energy, Total Mechanical Energy, and Binding Energy of a satellite revolving around Earth in a circular orbit of radius r. Draw energy graph.", a: "1. E_k = + G M m / (2r).\n2. U = - G M m / r.\n3. E_total = E_k + U = - G M m / (2r).\n4. Binding Energy B.E. = + G M m / (2r).\n5. Graph analysis: E_k is positive parabola, U is negative parabola, E_total is negative curve symmetrical to E_k." },
    { q: "What is a Geostationary Satellite? State essential conditions for a satellite to be geostationary. Calculate its orbital radius and speed.", a: "1. Definition & 4 Conditions: Equatorial plane, West to East, T = 24h, fixed height h ≈ 35,786 km.\n2. Radius r = [ G M T² / 4π² ]¹/³ = [ (6.67×10⁻¹¹ × 6×10²⁴ × 86400²) / 39.48 ]¹/³ ≈ 42,200 km.\n3. Orbital speed v_o = 2π r / T = 2π × 42200 / 86400 ≈ 3.07 km/s." },
    { q: "What is meant by Gravitational Potential and Gravitational Potential Energy? Derive expressions for both at a distance r from Earth center (r > R).", a: "1. Definitions of V and U.\n2. Derivation of V: V = W/m = ∫<sub>∞</sub><sup>r</sup> (-GM/x²) dx = [-GM/x]<sub>∞</sub><sup>r</sup> = -GM/r.\n3. Derivation of U: U = m V = - G M m / r." },
    { q: "Explain how acceleration due to gravity g varies with: (i) Altitude h, (ii) Depth d, (iii) Latitude λ. Find latitude λ where weight of a body becomes zero if Earth rotates at critical speed.", a: "1. Detail 3 formulas.\n2. Weight zero condition: g_λ = 0 ⇒ g - R ω² cos² λ = 0 ⇒ cos λ = √(g / (R ω²)). At equator λ=0°, weight is zero when ω = √(g/R)." },
    { q: "Explain the concept of Weightlessness in an artificial satellite. Is gravity zero inside an orbiting satellite? Why do astronauts float freely?", a: "1. Gravity is NOT zero (g_orbit ≈ 0.88 g_surface at 400 km LEO).\n2. Both spacecraft and astronaut fall towards Earth with exact same acceleration a = g_orbit.\n3. Floor reaction N = m(g - a) = 0. Zero normal reaction causes floating weightlessness." },
    { q: "Two heavy spheres of mass 100 kg and 1000 kg and radius 0.1 m and 0.2 m are placed 1.0 m apart. Find: (i) Gravitational field at midpoint of line joining centers, (ii) Gravitational potential at midpoint.", a: "1. Midpoint distance r1 = r2 = 0.5 m.\n2. Field E = E2 - E1 = G(1000)/(0.5)² - G(100)/(0.5)² = 4000 G - 400 G = 3600 G = 3600 × 6.674×10⁻¹¹ = 2.4 × 10⁻⁷ N/kg towards 1000 kg sphere.\n3. Potential V = V1 + V2 = -G(100)/0.5 - G(1000)/0.5 = -2200 G = -1.47 × 10⁻⁷ J/kg." },
    { q: "A satellite of mass m = 200 kg orbits Earth at height h = 500 km. Find: (i) Orbital speed, (ii) Kinetic energy, (iii) Potential energy, (iv) Total energy, (v) Escape speed from this orbit.", a: "1. Radius r = 6400 + 500 = 6900 km = 6.9 × 10⁶ m.\n2. v_o = √(GM/r) = √(4×10¹⁴ / 6.9×10⁶) = 7.61 km/s.\n3. E_k = ½ m v_o² = ½ × 200 × (7610)² = 5.79 × 10⁹ J.\n4. U = -2 E_k = -11.58 × 10⁹ J.\n5. E_total = -5.79 × 10⁹ J.\n6. v_e_orbit = √2 v_o = 1.414 × 7.61 = 10.76 km/s." },
    { q: "A rocket is fired vertically from Earth surface with speed v = 0.6 v_e. Find the maximum height h reached by rocket in terms of Earth radius R.", a: "1. Initial E = ½ m (0.6 v_e)² - G M m / R = ½ m (0.36 × 2GM/R) - GMm/R = -0.64 GMm/R.\n2. At max height h: E' = -GMm / (R+h).\n3. Equating: -GMm / (R+h) = -0.64 GMm/R ⇒ R+h = R / 0.64 = 1.5625 R ⇒ h = 0.5625 R = (9/16) R." },
    { q: "State and prove the Principle of Superposition of Gravitational Forces. Calculate net force on mass m at vertex of an equilateral triangle of side a with masses m at all 3 vertices.", a: "1. Superposition Principle: Net force on mass m is vector sum of forces exerted by all other individual masses: F_net = ∑ F_i.\n2. Triangle setup: Mass at A experiences F_B = G m² / a² at 60° to F_C = G m² / a².\n3. Resultant F_net = √(F² + F² + 2 F² cos 60°) = F √3 = √3 G m² / a² directed along angle bisector." },
    { q: "Discuss the launching of an artificial satellite into orbit around Earth using a two-stage rocket. Explain why a single stage rocket cannot put a satellite into orbit.", a: "1. Stage 1 takes rocket vertically through thick atmosphere to desired height h.\n2. Stage 2 tilts horizontally and fires to impart horizontal orbital speed v_o = √(GM/(R+h)).\n3. Single stage rocket cannot turn 90° in mid-air to provide pure horizontal orbital velocity without secondary thrust vectoring." },
    { q: "Calculate the energy required to transfer a 400 kg satellite from a circular orbit of radius 2R to a circular orbit of radius 4R around Earth.", a: "1. Initial Energy E₁ = - G M m / (2 × 2R) = - G M m / (4R).\n2. Final Energy E₂ = - G M m / (2 × 4R) = - G M m / (8R).\n3. Energy Required ΔE = E₂ - E₁ = (-GMm/8R) - (-GMm/4R) = + G M m / (8R) = (1/8) m g R = (1/8) × 400 × 9.8 × 6.4 × 10⁶ = 3.136 × 10⁹ Joules." }
  ];

  laQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(253, 200, 48, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <b style="color: ${themeColor}; font-size: 16px;">Q${idx + 86}: ${item.q}</b>
      <p style="margin: 8px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6; white-space: pre-line;"><b>Comprehensive Solution:</b>\n${item.a}</p>
    </div>`;
  });

  html += `</div>`;
  return html;
}

const overviewHtml = generateFullOverviewHtml();
const solutionsHtml = generateFullSolutionsHtml();

const tsContent = `// Class 11 Physics Unit VI: Gravitation
// High-Level Reference Book Content & NCERT Solutions (6 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy6HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy6HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-6.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully generated c11-phy-6.ts with 6 3D SVG diagrams and 100 questions at " + outputPath);
