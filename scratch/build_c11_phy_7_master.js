const fs = require('fs');
const path = require('path');

const themeColor = "#FF007F"; // Primary theme color for Class 11 Physics Unit VII (Properties of Bulk Matter)

// Clean compact inline stacked fraction helper
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 0, 127, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(255, 0, 127, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
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
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 16px; margin: 24px 0; box-shadow: 0 10px 30px rgba(255, 0, 127, 0.25);">
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

// ==================== 9 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 7 ====================

// 3D SVG 1: Stress-Strain Curve for a Metallic Wire
const svg1_3d_stress_strain_curve = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF007F"/>
      <stop offset="70%" stop-color="#FF512F"/>
      <stop offset="100%" stop-color="#76FF03"/>
    </linearGradient>
  </defs>

  <g transform="translate(30, 20)">
    <text x="370" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="17" font-weight="bold">1. Stress-Strain Curve for a Metallic Wire</text>

    <!-- Axes -->
    <line x1="60" y1="360" x2="720" y2="360" stroke="#475569" stroke-width="2.5"/>
    <line x1="60" y1="360" x2="60" y2="60" stroke="#475569" stroke-width="2.5"/>
    <text x="730" y="365" fill="#94A3B8" font-family="sans-serif" font-size="14">Strain (ΔL/L)</text>
    <text x="50" y="50" fill="#94A3B8" font-family="sans-serif" font-size="14">Stress (F/A)</text>

    <!-- Curve: O to P (linear Hooke's region), P to E (Elastic limit), E to Y (Yield point), Y to U (Ultimate strength), U to F (Fracture) -->
    <path d="M 60 360 L 220 180 Q 270 160 320 170 Q 420 100 560 90 Q 640 120 680 180" fill="none" stroke="url(#curveGrad1)" stroke-width="4"/>

    <!-- Key Points -->
    <circle cx="220" cy="180" r="6" fill="#00E5FF"/>
    <text x="210" y="160" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">P (Proportional Limit)</text>

    <circle cx="270" cy="165" r="6" fill="#FFD700"/>
    <text x="260" y="145" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">E (Elastic Limit)</text>

    <circle cx="320" cy="170" r="6" fill="#FF8A65"/>
    <text x="315" y="195" fill="#FF8A65" font-family="sans-serif" font-size="13.5" font-weight="bold">Y (Yield Point)</text>

    <circle cx="560" cy="90" r="7" fill="#76FF03"/>
    <text x="520" y="70" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">U (Ultimate Tensile Strength)</text>

    <circle cx="680" cy="180" r="6" fill="#FF512F"/>
    <text x="690" y="185" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">F (Fracture Point)</text>

    <!-- Hooke's Law Shaded Region -->
    <line x1="220" y1="180" x2="220" y2="360" stroke="#00E5FF" stroke-dasharray="4,4"/>
    <text x="120" y="290" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Hooke's Region (Stress ∝ Strain)</text>
  </g>
</svg>`;

// 3D SVG 2: Types of Strain & Elastic Moduli (Young's, Bulk, Shear & Poisson's Ratio)
const svg2_3d_elastic_moduli = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(20, 20)">
    <!-- Card 1: Young's Modulus Y -->
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(255,0,127,0.08)" stroke="#FF007F" stroke-width="1.5"/>
    <text x="182" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="16" font-weight="bold">1. Young's Modulus Y (Longitudinal)</text>
    <text x="182" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Y = (F / A) / (ΔL / L) = F L / (A ΔL)</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13.5">• Applies exclusively to Solids (Wires, Rods)</text>
    <text x="25" y="130" fill="#76FF03" font-family="sans-serif" font-size="13.5">• Steel is more elastic than Rubber (Y_steel &gt; Y_rubber)</text>
  </g>

  <g transform="translate(415, 20)">
    <!-- Card 2: Bulk Modulus B -->
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="182" y="30" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">2. Bulk Modulus B (Volume Compression)</text>
    <text x="182" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">B = - ΔP / (ΔV / V) = - V (ΔP / ΔV)</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13.5">• Applies to Solids, Liquids &amp; Gases</text>
    <text x="25" y="130" fill="#FFD700" font-family="sans-serif" font-size="13.5">• Compressibility K = 1 / B</text>
  </g>

  <g transform="translate(20, 235)">
    <!-- Card 3: Shear Modulus G -->
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="182" y="30" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">3. Shear Modulus G (Rigidity)</text>
    <text x="182" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">G = (F / A) / θ &nbsp; (Shear Angle θ)</text>
    <text x="25" y="105" fill="#CBD5E1" font-family="sans-serif" font-size="13.5">• Tangential force alters shape without volume change</text>
    <text x="25" y="130" fill="#FF8A65" font-family="sans-serif" font-size="13.5">• Liquids &amp; Gases have G = 0 (No rigidity)</text>
  </g>

  <g transform="translate(415, 235)">
    <!-- Card 4: Poisson's Ratio σ & Energy Density -->
    <rect x="0" y="0" width="365" height="195" rx="12" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="182" y="30" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">4. Poisson's Ratio σ &amp; Elastic Energy</text>
    <text x="182" y="65" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">σ = - (Δd / d) / (ΔL / L) &nbsp; (-1 &lt; σ &lt; 0.5)</text>
    <text x="182" y="105" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">u = ½ × Stress × Strain = ½ Y (Strain)²</text>
    <text x="25" y="145" fill="#CBD5E1" font-family="sans-serif" font-size="13">• Strain energy stored per unit volume</text>
  </g>
</svg>`;

// 3D SVG 3: Pascal's Law & Hydraulic Lift System
const svg3_3d_pascals_law_hydraulic_lift = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="fluidGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(0, 229, 255, 0.4)"/>
      <stop offset="100%" stop-color="rgba(0, 114, 255, 0.1)"/>
    </linearGradient>
    <marker id="arrowRed3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowGreen3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left Side: Hydraulic Lift Diagram (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Hydraulic Lift (Pascal's Law)</text>

    <!-- U-Tube Chamber with Liquid -->
    <path d="M 40 100 L 40 280 Q 40 330 90 330 L 270 330 Q 320 330 320 280 L 320 100" fill="none" stroke="#475569" stroke-width="4"/>
    <path d="M 44 140 L 44 280 Q 44 326 90 326 L 270 326 Q 316 326 316 200 L 316 200 L 44 140 Z" fill="url(#fluidGrad3)"/>

    <!-- Small Piston 1 (Area A1) -->
    <rect x="40" y="130" width="50" height="20" rx="4" fill="#FF512F"/>
    <line x1="65" y1="60" x2="65" y2="125" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowRed3)"/>
    <text x="65" y="50" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Force F₁</text>
    <text x="65" y="170" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">Area A₁</text>

    <!-- Large Piston 2 (Area A2) -->
    <rect x="230" y="190" width="90" height="25" rx="4" fill="#76FF03"/>
    <line x1="275" y1="185" x2="275" y2="100" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen3)"/>
    <text x="275" y="85" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Lift Force F₂</text>
    <text x="275" y="235" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">Area A₂ &gt;&gt; A₁</text>

    <text x="182" y="375" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Equal Transmitted Pressure: P₁ = P₂</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Pascal's Law Formula Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF007F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="17" font-weight="bold">2. Pascal's Law &amp; Fluid Pressure</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(255,0,127,0.1)" stroke="#FF007F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">Pascal's Principle Statement:</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">Pressure applied to an enclosed fluid is transmitted undiminished to every portion of fluid and container walls.</text>

    <rect x="10" y="165" width="345" height="100" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Force Multiplier Equation:</text>
    <text x="182" y="222" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">F₂ = F₁ × (A₂ / A₁)</text>
    <text x="182" y="250" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">✓ Since A₂ &gt;&gt; A₁, a small F₁ lifts huge vehicle F₂!</text>

    <rect x="10" y="280" width="345" height="130" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="305" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Fluid Pressure Column (Gauge P):</text>
    <text x="182" y="338" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">P = h ρ g &nbsp;|&nbsp; P_abs = P_atm + h ρ g</text>
    <text x="182" y="375" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Applications: Hydraulic Lifts, Brakes &amp; Presses</text>
  </g>
</svg>`;

// 3D SVG 4: Viscosity, Stokes' Law & Terminal Velocity (vt) Curve
const svg4_3d_viscosity_stokes_terminal_velocity = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <marker id="arrowGreen4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left Side: Falling Sphere in Viscous Fluid (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Forces on Falling Sphere (Stokes' Law)</text>

    <!-- Glass Cylinder with Viscous Fluid -->
    <rect x="110" y="60" width="140" height="280" rx="10" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="2"/>

    <!-- Sphere at Terminal Velocity vt -->
    <circle cx="180" cy="200" r="20" fill="#FFD700" stroke="#FFFFFF" stroke-width="2"/>

    <!-- Downward Gravity Force mg -->
    <line x1="180" y1="220" x2="180" y2="310" stroke="#FF512F" stroke-width="4.5"/>
    <text x="195" y="295" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Weight mg</text>

    <!-- Upward Buoyant Force Fb -->
    <line x1="165" y1="180" x2="165" y2="100" stroke="#00E5FF" stroke-width="3.5"/>
    <text x="90" y="115" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">Buoyancy U</text>

    <!-- Upward Viscous Drag Fv = 6π η r v -->
    <line x1="195" y1="180" x2="195" y2="100" stroke="#76FF03" stroke-width="3.5"/>
    <text x="210" y="115" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Viscous F_v</text>

    <text x="182" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Equilibrium: mg = U + 6π η r v_t</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Terminal Velocity Formula Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF007F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="17" font-weight="bold">2. Stokes' Law &amp; Terminal Speed</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(255,0,127,0.1)" stroke="#FF007F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">Stokes' Viscous Drag Law:</text>
    <text x="182" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">F_v = 6 π η r v</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Terminal Velocity Equation (v_t):</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_t = 2 r² (ρ - σ) g / (9 η)</text>
    <text x="182" y="255" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ v_t ∝ r² (Larger spheres fall much faster!)</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Newton's Viscosity Law:</text>
    <text x="182" y="348" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">F = - η A (dv / dx)</text>
    <text x="182" y="380" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• SI Unit of Viscosity η: Poiseuille (Pa s)</text>
  </g>
</svg>`;

// 3D SVG 5: Bernoulli's Theorem & Venturimeter Flow Model
const svg5_3d_bernoulli_venturimeter = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="streamGrad5" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="50%" stop-color="#76FF03"/>
      <stop offset="100%" stop-color="#00E5FF"/>
    </linearGradient>
  </defs>

  <!-- Left Side: Venturimeter & Streamline Tube (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Venturimeter Flow &amp; Pressure Head</text>

    <!-- Variable Cross-Section Tube -->
    <path d="M 30 140 L 130 140 L 180 180 L 230 180 L 280 140 L 330 140 L 330 260 L 280 260 L 230 220 L 180 220 L 130 260 L 30 260 Z" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="2"/>

    <!-- Streamlines -->
    <path d="M 30 170 Q 180 195 330 170" fill="none" stroke="url(#streamGrad5)" stroke-width="2.5"/>
    <path d="M 30 230 Q 180 205 330 230" fill="none" stroke="url(#streamGrad5)" stroke-width="2.5"/>

    <!-- Vertical Manometer Tubes -->
    <rect x="70" y="60" width="20" height="80" fill="none" stroke="#00E5FF" stroke-width="1.5"/>
    <rect x="195" y="100" width="20" height="80" fill="none" stroke="#00E5FF" stroke-width="1.5"/>

    <!-- Manometer Liquid Heights -->
    <rect x="71" y="80" width="18" height="60" fill="rgba(253,200,48,0.5)"/>
    <rect x="196" y="140" width="18" height="40" fill="rgba(253,200,48,0.5)"/>

    <text x="80" y="50" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold">P₁ High</text>
    <text x="205" y="90" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">P₂ Low</text>
    <text x="80" y="285" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">Area A₁, Speed v₁</text>
    <text x="205" y="245" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">Throat A₂, v₂ &gt; v₁</text>

    <text x="182" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Higher Velocity ⇒ Lower Pressure!</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Bernoulli's Theorem Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF007F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="17" font-weight="bold">2. Bernoulli's Conservation Theorem</text>

    <rect x="10" y="60" width="345" height="100" rx="8" fill="rgba(255,0,127,0.1)" stroke="#FF007F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">Bernoulli's Principle Equation:</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">P + ½ ρ v² + ρ g h = Constant</text>
    <text x="182" y="148" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">✓ Statement of Energy Conservation for Ideal Fluids!</text>

    <rect x="10" y="175" width="345" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="200" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Equation of Continuity:</text>
    <text x="182" y="235" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">A₁ v₁ = A₂ v₂ = Constant</text>

    <rect x="10" y="280" width="345" height="130" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="305" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Torricelli's Efflux Speed:</text>
    <text x="182" y="338" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">v_efflux = √(2 g h)</text>
    <text x="182" y="375" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Applications: Aerodynamic Lift, Atomizers &amp; Venturi</text>
  </g>
</svg>`;

// 3D SVG 6: Surface Energy, Surface Tension & Capillary Rise
const svg6_3d_surface_tension_capillary = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="dropGrad6" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0072FF"/>
    </linearGradient>
  </defs>

  <!-- Left Side: Capillary Rise & Meniscus Model (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Capillary Ascent &amp; Meniscus Angle θ</text>

    <!-- Beaker Liquid Base -->
    <rect x="40" y="240" width="280" height="90" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" stroke-width="2"/>

    <!-- Narrow Capillary Tube Radius r -->
    <rect x="165" y="60" width="30" height="270" fill="none" stroke="#FFFFFF" stroke-width="2"/>

    <!-- Liquid Column Raised to Height h -->
    <rect x="167" y="110" width="26" height="220" fill="url(#dropGrad6)"/>
    <path d="M 167 110 Q 180 125 193 110" fill="none" stroke="#FFFFFF" stroke-width="2"/>

    <!-- Height Arrow h -->
    <line x1="210" y1="240" x2="210" y2="110" stroke="#76FF03" stroke-width="2.5"/>
    <text x="220" y="175" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Height h</text>

    <text x="182" y="375" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Concave Meniscus: Angle θ &lt; 90°</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Excess Pressure & Capillary Ascent Formulae Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF007F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="17" font-weight="bold">2. Surface Tension &amp; Excess Pressure</text>

    <rect x="10" y="60" width="345" height="95" rx="8" fill="rgba(255,0,127,0.1)" stroke="#FF007F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">Excess Pressure in Drop vs Soap Bubble:</text>
    <text x="182" y="115" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">Drop: ΔP = 2 S / R</text>
    <text x="182" y="140" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15" font-weight="bold">Bubble: ΔP = 4 S / R &nbsp; (2 surfaces)</text>

    <rect x="10" y="170" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="195" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Capillary Rise Ascent Formula (h):</text>
    <text x="182" y="230" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">h = 2 S cos θ / (r ρ g)</text>
    <text x="182" y="260" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ Height h ∝ 1/r (Narrower tube gives higher rise!)</text>

    <rect x="10" y="295" width="345" height="115" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="320" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Surface Energy Relation:</text>
    <text x="182" y="352" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">U = S × ΔA &nbsp; (SI: J m⁻² or N m⁻¹)</text>
    <text x="182" y="385" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Detergents reduce S and angle of contact θ</text>
  </g>
</svg>`;

// 3D SVG 7: Thermal Expansion & Anomalous Expansion of Water at 4°C
const svg7_3d_thermal_expansion_water = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="waterGrad7" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>

  <!-- Left Side: Anomalous Water Density Graph at 4°C (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Anomalous Expansion of Water Curve</text>

    <!-- Density vs Temp Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="335" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Temp (°C)</text>
    <text x="40" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Density ρ</text>

    <!-- Density Curve peaking at 4°C -->
    <path d="M 50 250 Q 180 70 310 250" fill="none" stroke="#00E5FF" stroke-width="3.5"/>

    <!-- Peak at 4°C (1000 kg/m³) -->
    <circle cx="180" cy="110" r="7" fill="#FFD700"/>
    <line x1="180" y1="110" x2="180" y2="330" stroke="#FFD700" stroke-dasharray="3,3" stroke-width="2"/>
    <text x="180" y="350" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">4°C (Max Density ρ_max)</text>

    <text x="182" y="385" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Saves Aquatic Life in Frozen Winter Lakes!</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Thermal Expansion Coefficients α, β, γ Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF007F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="17" font-weight="bold">2. Thermal Expansion Laws</text>

    <rect x="10" y="60" width="345" height="110" rx="8" fill="rgba(255,0,127,0.1)" stroke="#FF007F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">Expansion Coefficients (α, β, γ):</text>
    <text x="25" y="112" fill="#FFFFFF" font-family="monospace" font-size="14">• Linear: ΔL = α L ΔT</text>
    <text x="25" y="132" fill="#FFFFFF" font-family="monospace" font-size="14">• Area: ΔA = β A ΔT &nbsp;|&nbsp; Volume: ΔV = γ V ΔT</text>
    <text x="182" y="158" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">Ratio α : β : γ = 1 : 2 : 3</text>

    <rect x="10" y="185" width="345" height="110" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="210" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Thermal Stress in Fixed Rods:</text>
    <text x="182" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Stress = Y α ΔT</text>
    <text x="182" y="278" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15.5">Force F = A Y α ΔT</text>

    <rect x="10" y="305" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="330" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Anomalous Expansion Significance:</text>
    <text x="25" y="358" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Water contracts from 0°C to 4°C, expands above 4°C</text>
    <text x="25" y="380" fill="#FFFFFF" font-family="sans-serif" font-size="13">• 4°C dense water sinks to lake bottom under ice layer</text>
  </g>
</svg>`;

// 3D SVG 8: Calorimetry & Latent Heat Phase Change Diagram
const svg8_3d_calorimetry_latent_heat = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Phase Change Heating Curve Q vs T</text>

    <!-- Heating Curve Axes -->
    <line x1="50" y1="330" x2="340" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="345" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Heat Q</text>
    <text x="40" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Temp T</text>

    <!-- Curve: Ice warming -> Fusion Lf -> Water warming -> Vaporization Lv -> Steam -->
    <line x1="50" y1="310" x2="90" y2="250" stroke="#00E5FF" stroke-width="3"/>
    <text x="55" y="270" fill="#00E5FF" font-family="sans-serif" font-size="12">Ice</text>

    <line x1="90" y1="250" x2="160" y2="250" stroke="#FFD700" stroke-width="4"/>
    <text x="100" y="240" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold">Melting L_f (0°C)</text>

    <line x1="160" y1="250" x2="230" y2="120" stroke="#00E5FF" stroke-width="3"/>
    <text x="175" y="170" fill="#00E5FF" font-family="sans-serif" font-size="12">Water</text>

    <line x1="230" y1="120" x2="310" y2="120" stroke="#FF512F" stroke-width="4"/>
    <text x="240" y="110" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">Boiling L_v (100°C)</text>

    <line x1="310" y1="120" x2="330" y2="70" stroke="#76FF03" stroke-width="3"/>
    <text x="315" y="90" fill="#76FF03" font-family="sans-serif" font-size="12">Steam</text>

    <text x="182" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Phase Changes Occur at CONSTANT Temperature!</text>
  </g>

  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF007F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="17" font-weight="bold">2. Calorimetry &amp; Latent Heat</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(255,0,127,0.1)" stroke="#FF007F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">Principle of Calorimetry:</text>
    <text x="182" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Heat Gained = Heat Lost</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Latent Heat Formula (Q):</text>
    <text x="182" y="222" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">Q = m L</text>
    <text x="182" y="252" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="13.5">Water L_f = 3.33 × 10⁵ J/kg | L_v = 2.26 × 10⁶ J/kg</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Molar Specific Heats (C_p, C_v):</text>
    <text x="182" y="348" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">C_p - C_v = R &nbsp; (Mayer's Relation)</text>
    <text x="182" y="380" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Specific Heat Q = m c ΔT</text>
  </g>
</svg>`;

// 3D SVG 9: Blackbody Radiation Spectrum, Wien's Law & Stefan's Law
const svg9_3d_blackbody_wien_stefan = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Blackbody Radiation Spectral Curves</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="330" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="335" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Wavelength λ</text>
    <text x="40" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Energy E_λ</text>

    <!-- Curve T3 = 5000K -->
    <path d="M 50 330 Q 110 50 310 320" fill="none" stroke="#76FF03" stroke-width="3"/>
    <text x="140" y="80" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">T₃ = 5000 K</text>

    <!-- Curve T2 = 4000K -->
    <path d="M 50 330 Q 140 140 310 325" fill="none" stroke="#FFD700" stroke-width="3"/>
    <text x="160" y="150" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold">T₂ = 4000 K</text>

    <!-- Curve T1 = 3000K -->
    <path d="M 50 330 Q 180 220 310 328" fill="none" stroke="#FF512F" stroke-width="3"/>
    <text x="190" y="230" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">T₁ = 3000 K</text>

    <!-- Wien's Locus Line -->
    <path d="M 110 80 Q 140 160 180 240" fill="none" stroke="#00E5FF" stroke-dasharray="4,4" stroke-width="2"/>
    <text x="60" y="190" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">Wien Peak λ_m ∝ 1/T</text>
  </g>

  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF007F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="17" font-weight="bold">2. Wien's &amp; Stefan's Radiation Laws</text>

    <rect x="10" y="60" width="345" height="100" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Wien's Displacement Law:</text>
    <text x="182" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">λ_m T = b = 2.898 × 10⁻³ m K</text>
    <text x="182" y="148" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">✓ As T increases, peak wavelength λ_m shifts left!</text>

    <rect x="10" y="175" width="345" height="110" rx="8" fill="rgba(255,0,127,0.1)" stroke="#FF007F" stroke-width="1.2"/>
    <text x="182" y="200" text-anchor="middle" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">Stefan-Boltzmann Radiation Law:</text>
    <text x="182" y="235" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">E = σ T⁴ &nbsp;|&nbsp; P = e σ A T⁴</text>
    <text x="182" y="265" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="13.5">σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴</text>

    <rect x="10" y="300" width="345" height="115" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="325" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Newton's Law of Cooling:</text>
    <text x="182" y="358" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">dT / dt = - k (T - T_s)</text>
    <text x="182" y="390" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Valid for small temperature excess (T - T_s)</text>
  </g>
</svg>`;

// Construct final Overview HTML for Chapter 7 (100% Exact Official NCERT Syllabus Section Headings)
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
  <div style="background: rgba(255, 0, 127, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit VII: Properties of Bulk Matter</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Elasticity:</b>
        <span style="color: #FFFFFF;">The property of a body by virtue of which it regains its original shape and size after deforming forces are removed.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Stress & Strain:</b>
        <span style="color: #FFFFFF;">Stress is internal restoring force per unit area (F/A). Strain is fractional deformation (ΔL/L, ΔV/V, or θ).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Hooke's Law:</b>
        <span style="color: #FFFFFF;">Within elastic limit, stress is directly proportional to strain (Stress = Modulus × Strain).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Pascal's Law:</b>
        <span style="color: #FFFFFF;">Pressure applied to an enclosed fluid is transmitted undiminished in all directions to every point of fluid and walls.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Viscosity & Stokes' Law:</b>
        <span style="color: #FFFFFF;">Internal fluid friction resisting motion (F = -η A dv/dx). Retarding drag on sphere F_v = 6π η r v.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Bernoulli's Theorem:</b>
        <span style="color: #FFFFFF;">For streamlined ideal fluid flow, total energy per unit volume P + 1/2 ρ v<sup>2</sup> + ρ g h = Constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Surface Tension (S):</b>
        <span style="color: #FFFFFF;">Force per unit length acting along liquid surface tending to minimize surface area: S = F/L = Surface Energy / ΔA.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Anomalous Expansion:</b>
        <span style="color: #FFFFFF;">Water contracts when heated from 0°C to 4°C, attaining maximum density ρ_max = 1000 kg/m<sup>3</sup> at 4°C.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Latent Heat (L):</b>
        <span style="color: #FFFFFF;">Heat required to change the state of unit mass of a substance at constant temperature (Q = m L).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Stefan's & Wien's Laws:</b>
        <span style="color: #FFFFFF;">Stefan's law E = σ T<sup>4</sup>. Wien's displacement law λ_m T = b = 2.898 × 10<sup>-3</sup> m K.</span>
      </div>
    </div>
  </div>

  <!-- PART A: MECHANICAL PROPERTIES OF SOLIDS -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">PART A: MECHANICAL PROPERTIES OF SOLIDS</h1>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">1. Elasticity, Stress-Strain Relationship & Hooke's Law</h2>
  ${defCard("Elasticity", "The property of matter by virtue of which a body tends to regain its original shape and size after removal of deforming forces.")}
  <p>When an external deforming force acts on a body, internal restoring forces arise between constituent atoms resisting deformation.</p>
  <div style="margin: 12px 0;">
    ${colonTopic("Tensile & Compressive Stress", "Restoring force per unit cross-sectional area: Stress = F / A.")}
    ${colonTopic("Longitudinal Strain", "Ratio of change in length to original length: Strain = ΔL / L.")}
    ${colonTopic("Hooke's Law", "Within elastic limit, stress is directly proportional to strain: Stress ∝ Strain.")}
  </div>
  ${svg3DCardWrapper("Stress-Strain Curve for a Metallic Wire", "Complete stress-strain curve showing Proportional limit, Elastic limit, Yield point, Ultimate tensile strength, and Fracture point.", svg1_3d_stress_strain_curve)}

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Elastic Moduli (Young's, Bulk, Shear Modulus), Poisson's Ratio & Elastic Energy</h2>
  ${defCard("Young's Modulus (Y)", "The ratio of longitudinal stress to longitudinal strain within elastic limit: Y = (F/A) / (ΔL/L).")}
  ${eqBox("<b>Y = " + frac('F L', 'A ΔL') + " &nbsp;|&nbsp; B = -" + frac('V ΔP', 'ΔV') + " &nbsp;|&nbsp; u = " + frac('1', '2') + " × Stress × Strain = " + frac('1', '2') + " Y (Strain)<sup>2</sup></b>")}
  ${svg3DCardWrapper("Types of Strain & Elastic Moduli (Young's, Bulk, Shear & Poisson's Ratio)", "4 3D cards comparing Young's Modulus Y, Bulk Modulus B, Shear Modulus G, Poisson's Ratio σ, and Energy Density u.", svg2_3d_elastic_moduli)}

  <!-- PART B: MECHANICAL PROPERTIES OF FLUIDS -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">PART B: MECHANICAL PROPERTIES OF FLUIDS</h1>

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">3. Pressure Due to a Fluid Column, Pascal's Law & Applications</h2>
  ${defCard("Pascal's Law", "States that pressure applied to an enclosed fluid is transmitted undiminished to every portion of fluid and container walls.")}
  ${eqBox("<b>P = h ρ g &nbsp;|&nbsp; Hydraulic Lift Force: F<sub>2</sub> = F<sub>1</sub> × ( " + frac('A<sub>2</sub>', 'A<sub>1</sub>') + " )</b>")}
  ${svg3DCardWrapper("Pascal's Law & Hydraulic Lift System", "U-tube fluid chamber model showing force multiplication F2 = F1(A2/A1) and pressure head P = h ρ g.", svg3_3d_pascals_law_hydraulic_lift)}

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Viscosity, Stokes' Law, Terminal Velocity, Streamline Flow & Bernoulli's Theorem</h2>
  ${defCard("Stokes' Law & Terminal Velocity", "Retarding viscous drag on sphere F_v = 6π η r v. Terminal speed v_t = 2 r<sup>2</sup> (ρ - σ) g / (9 η).")}
  ${eqBox("<b>F<sub>v</sub> = 6π η r v &nbsp;|&nbsp; v<sub>t</sub> = " + frac('2 r<sup>2</sup> (ρ - σ) g', '9 η') + " &nbsp;|&nbsp; P + " + frac('1', '2') + " ρ v<sup>2</sup> + ρ g h = Const</b>")}
  ${svg3DCardWrapper("Viscosity, Stokes' Law & Terminal Velocity Model", "Falling sphere forces (Weight mg, Buoyancy U, Viscous drag 6πηrv) and terminal speed formula v_t.", svg4_3d_viscosity_stokes_terminal_velocity)}
  ${svg3DCardWrapper("Bernoulli's Theorem & Venturimeter Flow Model", "Variable cross-section tube showing continuity A1 v1 = A2 v2 and pressure drop at high speed venturi throat.", svg5_3d_bernoulli_venturimeter)}

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Surface Energy, Surface Tension, Angle of Contact & Capillary Rise</h2>
  ${defCard("Surface Tension (S)", "The property of liquid surfaces to behave like stretched elastic membranes minimizing area: S = F / L.")}
  ${eqBox("<b>Drop ΔP = " + frac('2 S', 'R') + " &nbsp;|&nbsp; Bubble ΔP = " + frac('4 S', 'R') + " &nbsp;|&nbsp; Capillary Rise h = " + frac('2 S cos θ', 'r ρ g') + "</b>")}
  ${svg3DCardWrapper("Surface Tension, Excess Pressure & Capillary Rise", "Concave meniscus capillary ascent height h = 2S cos θ / (r ρ g) alongside excess pressure in drops and bubbles.", svg6_3d_surface_tension_capillary)}

  <!-- PART C: THERMAL PROPERTIES OF MATTER -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">PART C: THERMAL PROPERTIES OF MATTER</h1>

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">6. Heat, Temperature, Thermal Expansion & Anomalous Expansion of Water</h2>
  ${defCard("Anomalous Expansion of Water", "Water contracts when heated from 0°C to 4°C, reaching maximum density ρ_max = 1000 kg/m<sup>3</sup> at 4°C.")}
  ${eqBox("<b>ΔL = α L ΔT &nbsp;|&nbsp; ΔA = β A ΔT &nbsp;|&nbsp; ΔV = γ V ΔT &nbsp;|&nbsp; α : β : γ = 1 : 2 : 3</b>")}
  ${svg3DCardWrapper("Thermal Expansion & Anomalous Expansion of Water at 4°C", "Water density curve peaking at 4°C saving aquatic life in frozen lakes and α:β:γ = 1:2:3 expansion rules.", svg7_3d_thermal_expansion_water)}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Specific Heat Capacity, Calorimetry & Latent Heat</h2>
  ${defCard("Latent Heat (L)", "Heat energy required to change state of unit mass at constant temperature: Q = m L.")}
  ${eqBox("<b>Q = m c ΔT &nbsp;|&nbsp; Q = m L &nbsp;|&nbsp; C<sub>p</sub> - C<sub>v</sub> = R &nbsp; (Mayer's Relation)</b>")}
  ${svg3DCardWrapper("Calorimetry & Latent Heat Phase Change Diagram", "Temperature vs Heat Added phase transition curve showing constant temperature melting L_f and boiling L_v plateaus.", svg8_3d_calorimetry_latent_heat)}

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Heat Transfer, Blackbody Radiation, Wien's & Stefan's Laws</h2>
  ${defCard("Stefan-Boltzmann Law", "Total radiant energy emitted per second per unit area by a blackbody is proportional to fourth power of temperature: E = σ T<sup>4</sup>.")}
  ${eqBox("<b>" + frac('dQ', 'dt') + " = K A " + frac('T<sub>1</sub> - T<sub>2</sub>', 'L') + " &nbsp;|&nbsp; λ<sub>m</sub> T = b &nbsp;|&nbsp; E = σ T<sup>4</sup></b>")}
  ${svg3DCardWrapper("Blackbody Radiation Spectrum, Wien's & Stefan's Laws", "Spectral emission curves for varying temperatures showing Wien's peak shift λ_m ∝ 1/T and Stefan's power E = σ T⁴.", svg9_3d_blackbody_wien_stefan)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(255, 0, 127, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Fluid Laws & Heat Radiation Summary for Unit VII</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Elasticity &amp; Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Y = ` + frac('F L', 'A ΔL') + ` &nbsp;|&nbsp; B = - ` + frac('V ΔP', 'ΔV') + `<br>u = ` + frac('1', '2') + ` × Stress × Strain</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Fluid Dynamics &amp; Viscosity:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>t</sub> = ` + frac('2 r<sup>2</sup> (ρ - σ) g', '9 η') + `<br>P + ` + frac('1', '2') + ` ρ v<sup>2</sup> + ρ g h = Const</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Surface Tension &amp; Capillarity:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Drop ΔP = ` + frac('2S', 'R') + ` &nbsp;|&nbsp; Bubble ΔP = ` + frac('4S', 'R') + `<br>Capillary Rise h = ` + frac('2S cos θ', 'r ρ g') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Thermal Expansion:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">α : β : γ = 1 : 2 : 3<br>Water Max Density at 4°C</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Heat &amp; Latent Heat:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Q = m c ΔT &nbsp;|&nbsp; Q = m L<br>C<sub>p</sub> - C<sub>v</sub> = R</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Heat Radiation Laws:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Wien: λ<sub>m</sub> T = b = 2.898 × 10<sup>-3</sup> m K<br>Stefan: E = σ T<sup>4</sup></span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate 100 Textbook Standard Solutions (25 MCQs, 30 VSAs, 30 SAs, 15 LAs) for Chapter 7
function generateFullSolutionsHtml() {
  let html = `<style>
    p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) { text-align: justify !important; }
    h1, h2, h3, h4, h5, h6 { text-align: left; }
    .text-center { text-align: center !important; }
  </style>
  <div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 10px;">NCERT & Textbook Standard Exercise Solutions — Unit VII: Properties of Bulk Matter</h1>`;

  // 1. SECTION 1: 25 MCQs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">SECTION 1: MULTIPLE CHOICE QUESTIONS (MCQs 1 - 25)</h2>`;

  const mcqQuestions = [
    { q: "Modulus of elasticity is dimensionally equivalent to:", opts: ["(a) Strain", "(b) Stress", "(c) Force", "(d) Energy"], ans: "(b)", exp: "Since strain is dimensionless, Modulus = Stress / Strain has the same dimensions as Stress [M L⁻¹ T⁻²]." },
    { q: "Which of the following materials is most elastic?", opts: ["(a) Rubber", "(b) Glass", "(c) Steel", "(d) Copper"], ans: "(c)", exp: "Steel requires greater restoring stress for a given strain, so Y_steel > Y_rubber." },
    { q: "The theoretical limits of Poisson's ratio σ are:", opts: ["(a) 0 to 0.5", "(b) -1 to +0.5", "(c) -0.5 to +1", "(d) 0 to 1"], ans: "(b)", exp: "Theoretically -1 < σ < 0.5. For most real solids, 0 < σ < 0.5." },
    { q: "Hydraulic lift works on the principle of:", opts: ["(a) Archimedes' principle", "(b) Bernoulli's theorem", "(c) Pascal's law", "(d) Stokes' law"], ans: "(c)", exp: "Pascal's law states enclosed fluid transmits pressure undiminished, allowing force multiplication F2 = F1(A2/A1)." },
    { q: "Terminal velocity v_t of a small sphere falling in viscous fluid depends on its radius r as:", opts: ["(a) v_t ∝ r", "(b) v_t ∝ r²", "(c) v_t ∝ 1/r", "(d) v_t ∝ r³"], ans: "(b)", exp: "By Stokes' law terminal speed v_t = 2 r² (ρ - σ) g / (9 η), so v_t ∝ r²." },
    { q: "Bernoulli's theorem is a restatement of law of conservation of:", opts: ["(a) Mass", "(b) Momentum", "(c) Energy", "(d) Angular momentum"], ans: "(c)", exp: "Bernoulli's equation P + ½ ρ v² + ρ g h = Const represents total mechanical energy per unit volume." },
    { q: "Excess pressure inside a liquid drop of radius R and surface tension S is:", opts: ["(a) S / R", "(b) 2S / R", "(c) 4S / R", "(d) 8S / R"], ans: "(b)", exp: "A drop has one liquid-air interface, so excess pressure ΔP = 2S / R." },
    { q: "Excess pressure inside a soap bubble of radius R is:", opts: ["(a) 2S / R", "(b) 4S / R", "(c) S / 2R", "(d) 8S / R"], ans: "(b)", exp: "A soap bubble has two free surfaces, so excess pressure ΔP = 2 × (2S/R) = 4S / R." },
    { q: "The height h of liquid rise in a capillary tube of radius r is:", opts: ["(a) h ∝ r", "(b) h ∝ 1/r", "(c) h ∝ r²", "(d) h ∝ 1/r²"], ans: "(b)", exp: "Jurin's law states h = 2 S cos θ / (r ρ g), so height is inversely proportional to radius r." },
    { q: "Density of water is maximum at:", opts: ["(a) 0 °C", "(b) 4 °C", "(c) 100 °C", "(d) -4 °C"], ans: "(b)", exp: "Due to anomalous expansion, water reaches maximum density (1000 kg/m³) at 4 °C." },
    { q: "The relation between linear (α), superficial (β), and cubical (γ) expansion coefficients is:", opts: ["(a) α = β = γ", "(b) α : β : γ = 1 : 2 : 3", "(c) α : β : γ = 3 : 2 : 1", "(d) α : β : γ = 1 : 3 : 2"], ans: "(b)", exp: "β = 2α and γ = 3α, giving ratio 1 : 2 : 3." },
    { q: "Mayer's relation between molar specific heats C_p and C_v is:", opts: ["(a) C_p + C_v = R", "(b) C_p - C_v = R", "(c) C_v - C_p = R", "(d) C_p / C_v = R"], ans: "(b)", exp: "For 1 mole of an ideal gas, C_p - C_v = R." },
    { q: "According to Stefan-Boltzmann law, total radiant energy emitted by a blackbody is proportional to:", opts: ["(a) T", "(b) T²", "(c) T³", "(d) T⁴"], ans: "(d)", exp: "E = σ T⁴ where T is absolute temperature in Kelvin." },
    { q: "Wien's displacement law states that peak wavelength λ_m is related to absolute temperature T as:", opts: ["(a) λ_m T = Const", "(b) λ_m / T = Const", "(c) λ_m T² = Const", "(d) λ_m √T = Const"], ans: "(a)", exp: "λ_m T = b = 2.898 × 10⁻³ m K. As T increases, peak shifts to shorter wavelengths." },
    { q: "Work done in stretching a wire of length L and area A by ΔL is:", opts: ["(a) Y A ΔL / L", "(b) ½ Y A (ΔL)² / L", "(c) Y A (ΔL)² / L", "(d) ½ Y A ΔL / L"], ans: "(b)", exp: "W = ½ × Force × Elongation = ½ × (Y A ΔL / L) × ΔL = ½ Y A (ΔL)² / L." },
    { q: "The SI unit of surface tension S is:", opts: ["(a) N m", "(b) N m⁻¹", "(c) N m⁻²", "(d) J m"], ans: "(b)", exp: "Surface tension is force per unit length: S = F/L (N m⁻¹ or J m⁻²)." },
    { q: "When a detergent is added to water, its surface tension:", opts: ["(a) Increases", "(b) Decreases", "(c) Remains unchanged", "(d) Becomes zero"], ans: "(b)", exp: "Detergent molecules weaken intermolecular cohesion, lowering surface tension S." },
    { q: "Angle of contact for pure water and clean glass is approximately:", opts: ["(a) 0°", "(b) 90°", "(c) 138°", "(d) 180°"], ans: "(a)", exp: "Pure water completely wets clean glass, giving an angle of contact θ ≈ 0°." },
    { q: "Mercury in a glass tube forms a:", opts: ["(a) Concave meniscus", "(b) Convex meniscus", "(c) Flat meniscus", "(d) Spherical drop"], ans: "(b)", exp: "Cohesion of Hg exceeds adhesion with glass, forming an obtuse angle of contact θ > 90° and convex meniscus." },
    { q: "The rate of flow of fluid through a pipe of variable cross-section obeys:", opts: ["(a) Stokes' law", "(b) Equation of continuity", "(c) Hooke's law", "(d) Newton's cooling law"], ans: "(b)", exp: "Equation of continuity A₁ v₁ = A₂ v₂ ensures mass conservation for incompressible fluid." },
    { q: "Dimensions of coefficient of viscosity η are:", opts: ["(a) [M L⁻¹ T⁻¹]", "(b) [M L T⁻¹]", "(c) [M L⁻² T⁻¹]", "(d) [M L T⁻²]"], ans: "(a)", exp: "η = F / (A dv/dx) ⇒ [M L T⁻²] / ([L²][T⁻¹]) = [M L⁻¹ T⁻¹]." },
    { q: "Heat transfer without medium participation takes place by:", opts: ["(a) Conduction", "(b) Convection", "(c) Radiation", "(d) Evaporation"], ans: "(c)", exp: "Radiation travels via electromagnetic waves requiring no material medium." },
    { q: "Two spheres of radii 1 cm and 2 cm are made of same material. Ratio of their heat capacities is:", opts: ["(a) 1 : 2", "(b) 1 : 4", "(c) 1 : 8", "(d) 1 : 1"], ans: "(c)", exp: "Heat capacity H = m c ∝ Volume ∝ r³. Ratio is 1³ : 2³ = 1 : 8." },
    { q: "When ice melts into water at 0°C, its entropy:", opts: ["(a) Decreases", "(b) Increases", "(c) Remains zero", "(d) Becomes negative"], ans: "(b)", exp: "Order decreases when solid ice transitions to liquid water, increasing entropy." },
    { q: "The SI unit of thermal conductivity K is:", opts: ["(a) W m⁻¹ K⁻¹", "(b) W m K⁻¹", "(c) J m⁻¹ K⁻¹", "(d) W m⁻² K⁻¹"], ans: "(a)", exp: "K = (dQ/dt) L / (A ΔT) ⇒ (W)(m) / (m² K) = W m⁻¹ K⁻¹." }
  ];

  mcqQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(255, 0, 127, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 15px 0;">
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
    { q: "State Hooke's Law.", a: "States that within elastic limit, stress is directly proportional to strain: Stress = Modulus × Strain." },
    { q: "Why is steel more elastic than rubber?", a: "For a given strain, steel produces a much larger restoring stress than rubber, so Y_steel > Y_rubber." },
    { q: "Define Young's Modulus of elasticity.", a: "The ratio of longitudinal stress to longitudinal strain within elastic limit: Y = (F/A) / (ΔL/L)." },
    { q: "Define Bulk Modulus and Compressibility.", a: "Bulk Modulus B = - V (ΔP/ΔV). Compressibility K is reciprocal of Bulk Modulus: K = 1/B." },
    { q: "What is Poisson's ratio?", a: "The ratio of lateral strain to longitudinal strain under axial tension: σ = - (Δd/d) / (ΔL/L)." },
    { q: "State Pascal's Law of fluid pressure.", a: "Pressure applied to an enclosed fluid is transmitted undiminished to every point of fluid and container walls." },
    { q: "Define gauge pressure and absolute pressure.", a: "Gauge pressure P_g = h ρ g. Absolute pressure P_abs = P_atm + h ρ g." },
    { q: "Define coefficient of viscosity η.", a: "Tangential viscous force per unit area per unit velocity gradient: η = F / (A dv/dx)." },
    { q: "State Stokes' Law for a falling sphere.", a: "Viscous drag force acting on a sphere of radius r moving at speed v in fluid of viscosity η is F_v = 6π η r v." },
    { q: "Define Terminal Velocity.", a: "The maximum constant velocity attained by a body falling through a viscous medium when net force becomes zero." },
    { q: "State the Equation of Continuity.", a: "For incompressible streamlined fluid flow, area times velocity is constant: A₁ v₁ = A₂ v₂ = Constant." },
    { q: "State Bernoulli's Theorem.", a: "For streamlined flow of ideal fluid, total energy per unit volume P + ½ ρ v² + ρ g h = Constant." },
    { q: "Define Surface Tension.", a: "Force per unit length acting along liquid surface perpendicular to an imaginary line drawn on surface: S = F/L." },
    { q: "What is the relation between surface tension S and surface energy U?", a: "U = S × ΔA." },
    { q: "Define Angle of Contact.", a: "The angle θ inside liquid between tangent to liquid surface at contact point and solid surface." },
    { q: "Write the formula for excess pressure inside a soap bubble.", a: "ΔP = 4 S / R (since it has two free surfaces)." },
    { q: "Write the formula for capillary ascent height h.", a: "h = 2 S cos θ / (r ρ g)." },
    { q: "What is anomalous expansion of water?", a: "Water contracts on heating from 0°C to 4°C, reaching maximum density at 4°C." },
    { q: "Define coefficients of linear α, superficial β, and cubical γ expansion.", a: "Fractional expansion per degree rise in temperature: α = ΔL/(L ΔT), β = ΔA/(A ΔT), γ = ΔV/(V ΔT)." },
    { q: "What is the ratio α : β : γ for solids?", a: "1 : 2 : 3." },
    { q: "Define Specific Heat Capacity c.", a: "Heat required to raise temperature of unit mass of substance by 1 °C: c = Q / (m ΔT)." },
    { q: "State Mayer's Relation.", a: "C_p - C_v = R." },
    { q: "Define Latent Heat of Fusion and Vaporization.", a: "Heat required to change state of unit mass at constant melting/boiling point: Q = m L." },
    { q: "Define Thermal Conductivity K.", a: "Rate of heat flow per unit area per unit temperature gradient: dQ/dt = K A (T₁ - T₂)/L." },
    { q: "State Wien's Displacement Law.", a: "Wavelength λ_m corresponding to maximum spectral emissive power is inversely proportional to absolute temperature: λ_m T = b." },
    { q: "State Stefan-Boltzmann Law.", a: "Radiant power emitted per unit area by blackbody: E = σ T⁴." },
    { q: "Why do small liquid drops assume spherical shape?", a: "Surface tension tends to minimize surface area, and sphere has minimum surface area for a given volume." },
    { q: "Why are hot liquids better for washing clothes than cold liquids?", a: "Hot liquids have lower surface tension and lower angle of contact, penetrating dirt fibers better." },
    { q: "What happens to viscosity of liquids and gases with temperature rise?", a: "Viscosity of liquids decreases while viscosity of gases increases with temperature." },
    { q: "Why does a flag flutter in a strong wind?", a: "High wind speed over flag creates low pressure (Bernoulli's effect), producing pressure fluctuations that cause fluttering." }
  ];

  vsaQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(255, 0, 127, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 14px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 26}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Ans:</b> ${item.a}</p>
    </div>`;
  });

  // 3. SECTION 3: 30 SAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 3: SHORT ANSWER QUESTIONS (SAs 56 - 85)</h2>`;

  const saQuestions = [
    { q: "Draw stress-strain curve for a metallic wire under tensile load and explain proportional limit, yield point, and fracture point.", a: "1. OP region: Linear Hooke's law region (Stress ∝ Strain). P is Proportional Limit.\n2. E is Elastic Limit. Y is Yield Point where plastic deformation begins.\n3. U is Ultimate Tensile Strength. F is Fracture Point where wire breaks." },
    { q: "Derive an expression for elastic potential energy stored per unit volume in a stretched wire.", a: "Work W = ½ × F × ΔL = ½ × (Y A ΔL / L) × ΔL = ½ Y A (ΔL)² / L. Energy density u = W / Volume = ½ × (F/A) × (ΔL/L) = ½ × Stress × Strain = ½ Y (Strain)²." },
    { q: "Explain Pascal's Law and describe working of Hydraulic Lift with diagram formulation.", a: "Pascal's law states pressure P = F₁/A₁ is transmitted undiminished. At large piston A₂, force F₂ = P × A₂ = F₁ (A₂/A₁). Since A₂ >> A₁, small input F₁ lifts large weight F₂." },
    { q: "Derive Stokes' Law for terminal velocity v_t of a sphere falling in viscous fluid.", a: "At terminal speed v_t, Weight mg = Buoyancy U + Viscous drag 6π η r v_t. (4/3)π r³ ρ g = (4/3)π r³ σ g + 6π η r v_t ⇒ v_t = 2 r² (ρ - σ) g / (9 η)." },
    { q: "State Bernoulli's Theorem and derive Equation of Continuity for streamlined fluid flow.", a: "Continuity: Incompressible mass flow rate m/t = ρ A₁ v₁ = ρ A₂ v₂ ⇒ A₁ v₁ = A₂ v₂. Bernoulli: P + ½ ρ v² + ρ g h = Constant." },
    { q: "Derive Torricelli's Law of Efflux for liquid discharging through orifice at depth h.", a: "Apply Bernoulli's theorem between top surface (P_atm, v=0, height h) and orifice (P_atm, v_efflux, height 0): P_atm + ρ g h = P_atm + ½ ρ v_efflux² ⇒ v_efflux = √(2 g h)." },
    { q: "Derive the formula for excess pressure inside: (i) a liquid drop, (ii) a soap bubble.", a: "1. Liquid Drop (1 surface): Work W = S ΔA = S (8π R dR). Pressure work W = (ΔP 4π R²) dR. Equating gives ΔP = 2 S / R.\n2. Soap Bubble (2 surfaces): ΔA = 16π R dR ⇒ ΔP = 4 S / R." },
    { q: "Derive Jurin's Law for capillary rise height h = 2 S cos θ / (r ρ g).", a: "Upward surface tension force 2π r S cos θ balances weight of liquid column π r² h ρ g: 2π r S cos θ = π r² h ρ g ⇒ h = 2 S cos θ / (r ρ g)." },
    { q: "Explain anomalous expansion of water and its biological importance in cold climates.", a: "Water contracts from 0°C to 4°C and reaches max density at 4°C. In winter, surface water cools to 4°C, sinks to bottom, while 0°C water freezes at surface. Ice layer insulates 4°C bottom water, preserving marine life." },
    { q: "Derive the relation between α, β, and γ coefficients of thermal expansion.", a: "For cube side L: L' = L(1+α ΔT). Volume V' = L'³ = L³(1+α ΔT)³ ≈ V(1+3α ΔT). Since V' = V(1+γ ΔT), γ = 3α. Similarly area A' = A(1+2α ΔT) ⇒ β = 2α. Ratio α:β:γ = 1:2:3." },
    { q: "Explain Mayer's Relation C_p - C_v = R for ideal gas.", a: "At constant volume, heat Q_v = C_v ΔT increases internal energy ΔU. At constant pressure, Q_p = C_p ΔT increases ΔU + work P ΔV. Since P ΔV = R ΔT, C_p ΔT = C_v ΔT + R ΔT ⇒ C_p - C_v = R." },
    { q: "State and explain Wien's Displacement Law and Stefan-Boltzmann Law with spectrum graph.", a: "Wien's Law: λ_m T = b = 2.898 × 10⁻³ m K (Peak shifts left at higher T). Stefan's Law: Total power emitted E = σ T⁴ where σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴." },
    { q: "A steel wire of length 2.0 m and diameter 1.0 mm is stretched by 100 N. Find elongation (Y_steel = 2.0 × 10¹¹ N/m²).", a: "Area A = π d²/4 = 3.14 × (10⁻³)² / 4 = 7.85 × 10⁻⁷ m². Elongation ΔL = F L / (A Y) = (100 × 2) / (7.85 × 10⁻⁷ × 2 × 10¹¹) = 200 / 1.57 × 10⁵ = 1.27 × 10⁻³ m = 1.27 mm." },
    { q: "Calculate the energy stored in a stretched wire of length 1 m, cross-section 1 mm² stretched by 1 mm (Y = 2 × 10¹¹ N/m²).", a: "W = ½ Y A (ΔL)² / L = ½ × 2×10¹¹ × 10⁻⁶ × (10⁻³)² / 1 = 10⁵ × 10⁻⁶ = 0.1 Joule." },
    { q: "In a hydraulic lift, small piston radius is 5 cm and large piston radius is 15 cm. What force on small piston lifts 1350 kg car?", a: "F₂ = 1350 kg × 9.8 = 13230 N. Area ratio A₂/A₁ = (r₂/r₁)² = (15/5)² = 9. F₁ = F₂ / 9 = 13230 / 9 = 1470 N." },
    { q: "A rain drop of radius 0.3 mm falls in air (η = 1.8 × 10⁻⁵ Pa s, ρ_water = 1000 kg/m³). Find terminal speed.", a: "v_t = 2 r² ρ g / (9 η) = 2 × (3×10⁻⁴)² × 1000 × 9.8 / (9 × 1.8×10⁻⁵) = 2 × 9×10⁻⁸ × 9800 / 1.62×10⁻⁴ = 1.764 × 10⁻³ / 1.62×10⁻⁴ = 10.89 m/s." },
    { q: "Water flows through horizontal pipe at 2 m/s under pressure 2 × 10⁵ Pa. Pipe narrows to half diameter. Find new speed and pressure.", a: "Area ratio A₁/A₂ = (d₁/d₂)² = 4. Speed v₂ = 4 v₁ = 8 m/s. By Bernoulli: P₂ = P₁ + ½ ρ (v₁² - v₂²) = 2×10⁵ + ½×1000×(4 - 64) = 2×10⁵ - 30000 = 1.7 × 10⁵ Pa." },
    { q: "Calculate work done in blowing a soap bubble of radius 5 cm (S = 0.03 N/m).", a: "Soap bubble has 2 surfaces. Area A = 2 × 4π R² = 8π × (0.05)² = 0.0628 m². Work W = S ΔA = 0.03 × 0.0628 = 1.884 × 10⁻³ Joules." },
    { q: "Calculate height to which water rises in capillary tube of radius 0.2 mm (S = 0.07 N/m, θ = 0°).", a: "h = 2 S cos θ / (r ρ g) = 2 × 0.07 × 1 / (2×10⁻⁴ × 1000 × 9.8) = 0.14 / 1.96 = 0.0714 m = 7.14 cm." },
    { q: "A brass rod of length 1 m at 20°C is heated to 100°C with fixed ends. Find thermal stress (α = 2 × 10⁻⁵ /°C, Y = 10¹¹ N/m²).", a: "Thermal Stress = Y α ΔT = 10¹¹ × 2×10⁻⁵ × (100 - 20) = 2×10⁶ × 80 = 1.6 × 10⁸ N/m²." },
    { q: "A 50 g copper block at 100°C is dropped into 100 g water at 20°C in calorimeter. Find final temperature (c_cu = 0.4 J/g°C, c_w = 4.2 J/g°C).", a: "Heat lost = Heat gained ⇒ m_cu c_cu (100 - T) = m_w c_w (T - 20) ⇒ 50×0.4×(100 - T) = 100×4.2×(T - 20) ⇒ 20(100 - T) = 420(T - 20) ⇒ 2000 - 20T = 420T - 8400 ⇒ 440T = 10400 ⇒ T = 23.64 °C." },
    { q: "Calculate heat required to convert 10 g ice at -10°C to steam at 100°C (c_ice=2.1 J/g°C, L_f=336 J/g, c_w=4.2 J/g°C, L_v=2260 J/g).", a: "1. Ice warm: 10×2.1×10 = 210 J.\n2. Ice melt: 10×336 = 3360 J.\n3. Water warm: 10×4.2×100 = 4200 J.\n4. Steam boil: 10×2260 = 22600 J.\nTotal Q = 210 + 3360 + 4200 + 22600 = 30,370 Joules." },
    { q: "A metal plate of area 100 cm² and thickness 2 mm conducts heat at 50 W with face temp difference 10°C. Find K.", a: "dQ/dt = K A ΔT / L ⇒ 50 = K × (100×10⁻⁴) × 10 / (2×10⁻³) ⇒ 50 = K × 0.01 × 10 / 0.002 = 50 K ⇒ K = 1.0 W m⁻¹ K⁻¹." },
    { q: "Solar radiation peak wavelength is 500 nm. Find Sun surface temperature (b = 2.898 × 10⁻³ m K).", a: "T = b / λ_m = 2.898 × 10⁻³ / (500 × 10⁻⁹) = 2.898 × 10⁶ / 500 = 5796 K ≈ 5800 K." },
    { q: "A blackbody at 727°C emits energy at rate 20 W. Find emission rate when temperature rises to 1227°C.", a: "T₁ = 727+273 = 1000 K, T₂ = 1227+273 = 1500 K. E₂/E₁ = (T₂/T₁)⁴ = (1500/1000)⁴ = (1.5)⁴ = 5.0625. E₂ = 20 × 5.0625 = 101.25 Watts." },
    { q: "Why does water wet glass while mercury does not?", a: "Adhesion between water and glass exceeds water cohesion (θ < 90°). For mercury, cohesion exceeds adhesion with glass (θ > 90°)." },
    { q: "Explain Reynolds Number N_R and critical velocity v_c.", a: "N_R = ρ v D / η. If N_R < 2000, flow is laminar/streamline. If N_R > 3000, flow becomes turbulent. Critical speed v_c = N_R η / (ρ D)." },
    { q: "Differentiate between streamline flow and turbulent flow.", a: "1. Streamline: Particles follow smooth orderly parallel paths; speed at any point is constant over time.\n2. Turbulent: Irregular chaotic motion with eddies and pressure fluctuations when speed exceeds v_c." },
    { q: "Explain how aerodynamic lift is generated on an airplane wing using Bernoulli's principle.", a: "Wing aerofoil shape causes air to flow faster over top surface (v_top > v_bottom). By Bernoulli, P_top < P_bottom, generating upward lift force." },
    { q: "What is breaking stress? Does it depend on length or area of wire?", a: "Breaking stress = Breaking Force / Area. It depends solely on material nature, independent of wire length or cross-sectional area." }
  ];

  saQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(255, 0, 127, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 15px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 56}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Solution:</b> ${item.a}</p>
    </div>`;
  });

  // 4. SECTION 4: 15 LAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 4: LONG ANSWER QUESTIONS (LAs 86 - 100)</h2>`;

  const laQuestions = [
    { q: "Describe Hooke's Law and draw complete Stress-Strain curve for metallic wire. Define Young's Modulus, Bulk Modulus, Shear Modulus, and Poisson's Ratio with units.", a: "1. Detail Hooke's Law and OP, E, Y, U, F regions.\n2. Young's Y = (F/A)/(ΔL/L) [N/m²].\n3. Bulk B = -V(ΔP/ΔV) [N/m²].\n4. Shear G = (F/A)/θ [N/m²].\n5. Poisson's σ = -(Δd/d)/(ΔL/L) [Dimensionless]." },
    { q: "State Pascal's Law and explain its application in Hydraulic Lift and Hydraulic Brakes with detailed diagrams and force equations.", a: "1. Statement: Pressure P = F₁/A₁ transmitted undiminished.\n2. Hydraulic Lift: F₂ = F₁(A₂/A₁). Small force F₁ produces large output F₂.\n3. Hydraulic Brakes: Master cylinder pressure transmitted to wheel cylinders pressing brake shoes." },
    { q: "Define Viscosity. State Newton's Law of Viscous Flow and Stokes' Law. Derive expression for terminal velocity v_t of sphere falling in viscous fluid.", a: "1. Definitions of η and F = -η A (dv/dx).\n2. Stokes' Law: F_v = 6π η r v.\n3. Derivation: Net force = 0 at terminal speed: mg = U + 6π η r v_t ⇒ (4/3)π r³ ρ g = (4/3)π r³ σ g + 6π η r v_t ⇒ v_t = 2 r² (ρ - σ) g / (9 η)." },
    { q: "State Bernoulli's Theorem. Derive Bernoulli's equation for streamlined flow of ideal fluid. State two practical applications.", a: "1. Statement: P + ½ ρ v² + ρ g h = Const.\n2. Derivation: Work done by pressure forces = ΔE_k + ΔE_p.\n3. Applications: Venturimeter (flow rate) & Aerodynamic lift of aircraft aerofoil wings." },
    { q: "Define Surface Tension and Surface Energy. Derive relation between them. Derive expression for excess pressure inside a liquid drop and soap bubble.", a: "1. Definitions: S = F/L, U = S ΔA.\n2. Derivation: Work W = S ΔA = U.\n3. Drop: W = S (8π R dR) = ΔP (4π R²) dR ⇒ ΔP = 2S/R.\n4. Soap Bubble: 2 surfaces ⇒ ΔP = 4S/R." },
    { q: "What is Capillarity? Derive Jurin's Law for capillary rise height h = 2 S cos θ / (r ρ g). Discuss rise when capillary tube length is insufficient.", a: "1. Definition of capillarity.\n2. Derivation: Upward vertical component of surface tension 2π r S cos θ = weight of raised column π r² h ρ g ⇒ h = 2 S cos θ / (r ρ g).\n3. Insufficient length: Liquid does NOT overflow; radius of meniscus curvature R' increases such that h' R' = h R = Const." },
    { q: "Discuss Thermal Expansion of solids. Define α, β, and γ and prove α : β : γ = 1 : 2 : 3. Derive expression for thermal stress in fixed rod.", a: "1. Definitions of α, β, γ.\n2. Proof: L' = L(1+αΔT), V' = L'³ ≈ V(1+3αΔT) ⇒ γ = 3α. A' ≈ A(1+2αΔT) ⇒ β = 2α.\n3. Thermal Stress = Y strain = Y (ΔL/L) = Y α ΔT." },
    { q: "Explain Specific Heat Capacity C_p and C_v of gas. Derive Mayer's Relation C_p - C_v = R from First Law of Thermodynamics.", a: "1. Definitions of C_p and C_v.\n2. Derivation: Q_v = C_v ΔT = ΔU. Q_p = C_p ΔT = ΔU + P ΔV. Since P ΔV = R ΔT, C_p ΔT = C_v ΔT + R ΔT ⇒ C_p - C_v = R." },
    { q: "State and explain: (i) Conduction (Fourier's Law), (ii) Convection, (iii) Radiation. State Wien's Displacement Law and Stefan-Boltzmann Law.", a: "1. Conduction: dQ/dt = K A (T₁-T₂)/L.\n2. Convection: Mass movement of fluid carrying thermal energy.\n3. Radiation: EM waves.\n4. Wien: λ_m T = b. Stefan: E = σ T⁴." },
    { q: "A 100 g ice block at -10°C is converted to steam at 100°C. Calculate total heat required and draw temperature vs heat graph.", a: "1. Heat ice to 0°C: 100 × 2.1 × 10 = 2100 J.\n2. Melt ice: 100 × 336 = 33600 J.\n3. Heat water to 100°C: 100 × 4.2 × 100 = 42000 J.\n4. Boil water: 100 × 2260 = 226000 J.\nTotal Q = 303,700 Joules.\n5. Graph shows plateaus at 0°C (33.6 kJ) and 100°C (226 kJ)." },
    { q: "In a Venturimeter, inlet area A₁ = 20 cm² and throat area A₂ = 10 cm². Pressure difference between inlet and throat is 10 cm of water. Find water flow rate.", a: "1. Manometer head h = 0.1 m.\n2. Continuity: v₂ = (A₁/A₂) v₁ = 2 v₁.\n3. Bernoulli: P₁ - P₂ = ½ ρ (v₂² - v₁²) ⇒ ρ g h = ½ ρ (3 v₁²) ⇒ v₁ = √[ 2 g h / 3 ] = √[ 2 × 9.8 × 0.1 / 3 ] = √(0.6533) = 0.808 m/s.\n4. Flow rate Q = A₁ v₁ = 20 × 10⁻⁴ m² × 0.808 m/s = 1.616 × 10⁻³ m³/s = 1.616 L/s." },
    { q: "A U-shaped wire is dipped in soap solution (S = 0.03 N/m) forming film with 10 cm slider. What force supports slider? If film expands by 1 cm, calculate work.", a: "1. Soap film has 2 surfaces. Force F = 2 S L = 2 × 0.03 × 0.10 = 0.006 N.\n2. Area change ΔA = 2 × (0.10 × 0.01) = 2 × 10⁻³ m².\n3. Work W = S ΔA = 0.03 × 2 × 10⁻³ = 6.0 × 10⁻⁵ Joules." },
    { q: "A steel rod 1 m long and area 1 cm² is clamped between two rigid walls at 20°C. If temp rises to 60°C, find tension in rod (α = 1.2 × 10⁻⁵/°C, Y = 2 × 10¹¹ N/m²).", a: "1. Thermal Strain = α ΔT = 1.2 × 10⁻⁵ × 40 = 4.8 × 10⁻⁴.\n2. Stress = Y × Strain = 2 × 10¹¹ × 4.8 × 10⁻⁴ = 9.6 × 10⁷ N/m².\n3. Tension Force F = Stress × Area = 9.6 × 10⁷ × 10⁻⁴ m² = 9600 N." },
    { q: "Discuss Blackbody Radiation spectrum. Draw spectral energy distribution curves at different temperatures T₁ < T₂ < T₃ and state conclusions.", a: "1. Blackbody absorbs and emits all radiation wavelengths.\n2. Curves show continuous distribution peaking at λ_m.\n3. Conclusion 1: As T increases, peak shifts to left (λ_m T = b).\n4. Conclusion 2: Total area under curve E = σ T⁴ increases rapidly with T." },
    { q: "Calculate the rate of heat loss by radiation from a solid sphere of radius 5 cm at 300°C in surroundings at 27°C (e = 0.8, σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴).", a: "1. Surface Area A = 4π R² = 4 × 3.1416 × (0.05)² = 0.0314 m².\n2. T₁ = 300 + 273 = 573 K, T_s = 27 + 273 = 300 K.\n3. P = e σ A (T₁⁴ - T_s⁴) = 0.8 × 5.67×10⁻⁸ × 0.0314 × (573⁴ - 300⁴).\n4. 573⁴ ≈ 1.078 × 10¹¹, 300⁴ = 8.1 × 10⁹. Difference = 9.97 × 10¹⁰.\n5. Net P = 0.8 × 5.67×10⁻⁸ × 0.0314 × 9.97×10¹⁰ = 142.0 Watts." }
  ];

  laQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(255, 0, 127, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <b style="color: ${themeColor}; font-size: 16px;">Q${idx + 86}: ${item.q}</b>
      <p style="margin: 8px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6; white-space: pre-line;"><b>Comprehensive Solution:</b>\n${item.a}</p>
    </div>`;
  });

  html += `</div>`;
  return html;
}

const overviewHtml = generateFullOverviewHtml();
const solutionsHtml = generateFullSolutionsHtml();

const tsContent = `// Class 11 Physics Unit VII: Properties of Bulk Matter (100% Exact Official NCERT Syllabus Alignment)
// High-Level Reference Book Content & NCERT Solutions (9 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy7HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy7HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-7.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully generated c11-phy-7.ts with 9 3D SVG diagrams and 100 questions at " + outputPath);
