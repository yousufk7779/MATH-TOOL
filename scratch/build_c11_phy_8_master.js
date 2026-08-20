const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F"; // Primary theme color for Class 11 Physics Unit VIII (Thermodynamics)

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

// 3D Diagram Card Wrapper with glowing borders and dark slate container
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

// ==================== 6 SELF-CONTAINED 3D SVG DIAGRAMS FOR CHAPTER 8 ====================

// 3D SVG 1: Zeroth Law of Thermodynamics & Thermal Equilibrium
const svg1_3d_zeroth_law = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="boxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 81, 47, 0.25)"/>
      <stop offset="100%" stop-color="rgba(255, 81, 47, 0.05)"/>
    </linearGradient>
  </defs>

  <!-- Left Side: System Setup (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Systems A, B &amp; C in Equilibrium</text>

    <!-- System A -->
    <rect x="40" y="70" width="120" height="120" rx="10" fill="url(#boxGrad1)" stroke="#FF512F" stroke-width="2"/>
    <text x="100" y="125" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">System A</text>
    <text x="100" y="150" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14">Temp T_A</text>

    <!-- System B -->
    <rect x="205" y="70" width="120" height="120" rx="10" fill="url(#boxGrad1)" stroke="#FF512F" stroke-width="2"/>
    <text x="265" y="125" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">System B</text>
    <text x="265" y="150" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14">Temp T_B</text>

    <!-- Adiabatic Insulating Wall between A and B -->
    <line x1="182" y1="65" x2="182" y2="195" stroke="#94A3B8" stroke-width="8" stroke-dasharray="4,4"/>
    <text x="182" y="215" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">Adiabatic Wall (No Heat)</text>

    <!-- Diathermal Heat Wall between AB and C -->
    <line x1="30" y1="230" x2="335" y2="230" stroke="#76FF03" stroke-width="5"/>
    <text x="182" y="250" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13" font-weight="bold">Diathermal Wall (Conducts Heat)</text>

    <!-- System C -->
    <rect x="75" y="265" width="215" height="100" rx="10" fill="url(#boxGrad1)" stroke="#00E5FF" stroke-width="2"/>
    <text x="182" y="315" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">System C (Thermometer)</text>
    <text x="182" y="340" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14">Temp T_C</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Zeroth Law Summary Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. Zeroth Law Statement &amp; Temp</text>

    <rect x="10" y="60" width="345" height="110" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Zeroth Law Statement:</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">If two systems A and B are separately in thermal equilibrium with a third system C, then A and B are also in thermal equilibrium with each other.</text>

    <rect x="10" y="185" width="345" height="100" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="210" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Mathematical Condition:</text>
    <text x="182" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">If T_A = T_C &amp; T_B = T_C  ⇒  T_A = T_B</text>

    <rect x="10" y="300" width="345" height="115" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="325" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Concept of Temperature:</text>
    <text x="182" y="358" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• Forms the basis for temperature measurement!</text>
    <text x="182" y="385" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="13">• Temperature is a scalar state variable.</text>
  </g>
</svg>`;

// 3D SVG 2: First Law of Thermodynamics & Gas Piston Cylinder System
const svg2_3d_first_law_piston = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="gasGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 81, 47, 0.4)"/>
      <stop offset="100%" stop-color="rgba(255, 215, 0, 0.15)"/>
    </linearGradient>
    <marker id="arrowRed2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowGreen2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left Side: Piston Cylinder Diagram (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Gas Cylinder &amp; Piston Expansion</text>

    <!-- Insulated Cylinder -->
    <rect x="75" y="80" width="215" height="250" rx="10" fill="none" stroke="#475569" stroke-width="4"/>
    <rect x="79" y="160" width="207" height="166" fill="url(#gasGrad2)"/>

    <!-- Piston moving up -->
    <rect x="77" y="145" width="211" height="22" rx="4" fill="#00E5FF"/>
    <line x1="182" y1="145" x2="182" y2="70" stroke="#76FF03" stroke-width="4.5" marker-end="url(#arrowGreen2)"/>
    <text x="182" y="55" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Work Done ΔW = P ΔV</text>

    <!-- Heat Input ΔQ from bottom -->
    <line x1="182" y1="380" x2="182" y2="335" stroke="#FF512F" stroke-width="4.5" marker-end="url(#arrowRed2)"/>
    <text x="182" y="405" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">Heat Added ΔQ</text>

    <!-- Gas Internal Energy ΔU -->
    <text x="182" y="240" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">Ideal Gas (ΔU)</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: First Law Equation & Sign Conventions Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. First Law of Thermodynamics</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">First Law Equation (Conservation of Energy):</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">ΔQ = ΔU + ΔW</text>

    <rect x="10" y="165" width="345" height="120" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Sign Conventions:</text>
    <text x="25" y="218" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• ΔQ &gt; 0: Heat added to system</text>
    <text x="25" y="240" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• ΔW &gt; 0: Work done BY system (Expansion)</text>
    <text x="25" y="262" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• ΔU &gt; 0: Internal energy increases (Temp rises)</text>

    <rect x="10" y="295" width="345" height="115" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="320" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Internal Energy U (State Function):</text>
    <text x="182" y="352" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16.5" font-weight="bold">U = U(T) &nbsp; (For Ideal Gas)</text>
    <text x="182" y="385" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Cyclic process: ∮ dU = 0  ⇒  Q_net = W_net</text>
  </g>
</svg>`;

// 3D SVG 3: Isothermal vs Adiabatic Expansion P-V Curve Comparison
const svg3_3d_isothermal_vs_adiabatic = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <!-- Left Side: P-V Curves (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. P-V Curves: Isothermal vs Adiabatic</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="340" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="345" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Volume V</text>
    <text x="40" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Pressure P</text>

    <!-- Common Initial State A (P1, V1) -->
    <circle cx="90" cy="100" r="7" fill="#FFD700"/>
    <text x="95" y="90" fill="#FFD700" font-family="sans-serif" font-size="13.5" font-weight="bold">A (P₁, V₁)</text>

    <!-- Isothermal Expansion Curve (PV = Const) -->
    <path d="M 90 100 Q 170 180 310 230" fill="none" stroke="#00E5FF" stroke-width="3.5"/>
    <text x="240" y="200" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Isothermal (PV = C)</text>

    <!-- Adiabatic Expansion Curve (PV<sup>γ</sup> = Const, Steeper) -->
    <path d="M 90 100 Q 150 230 310 300" fill="none" stroke="#FF512F" stroke-width="3.5"/>
    <text x="180" y="280" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Adiabatic (PV<sup>γ</sup> = C)</text>

    <text x="182" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Adiabatic Slope = γ × Isothermal Slope!</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Process Work & Equations Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. Isothermal &amp; Adiabatic Formulae</text>

    <rect x="10" y="60" width="345" height="110" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Isothermal Process (T = Const, ΔU = 0):</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">W_iso = 2.303 n R T log₁₀(V₂ / V₁)</text>
    <text x="182" y="148" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">✓ Q = W (Slow process in conducting vessel)</text>

    <rect x="10" y="185" width="345" height="120" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="210" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Adiabatic Process (Q = 0, PV<sup>γ</sup> = Const):</text>
    <text x="182" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">W_adia = n R (T₁ - T₂) / (γ - 1)</text>
    <text x="182" y="280" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="13.5">W_adia = (P₁ V₁ - P₂ V₂) / (γ - 1)</text>

    <rect x="10" y="315" width="345" height="100" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="340" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Slope Comparison:</text>
    <text x="182" y="372" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">(dP/dV)_adia = γ (dP/dV)_iso</text>
  </g>
</svg>`;

// 3D SVG 4: Cyclic Process P-V Loop & Enclosed Area Work Output
const svg4_3d_cyclic_process_pv_loop = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="loopGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(118, 255, 3, 0.35)"/>
      <stop offset="100%" stop-color="rgba(118, 255, 3, 0.05)"/>
    </linearGradient>
  </defs>

  <!-- Left Side: P-V Loop (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Clockwise Cyclic Process P-V Loop</text>

    <!-- Axes -->
    <line x1="50" y1="330" x2="340" y2="330" stroke="#475569" stroke-width="2"/>
    <line x1="50" y1="330" x2="50" y2="60" stroke="#475569" stroke-width="2"/>
    <text x="345" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">Volume V</text>
    <text x="40" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Pressure P</text>

    <!-- Closed Elliptical Clockwise Cycle -->
    <ellipse cx="190" cy="190" rx="90" ry="60" fill="url(#loopGrad4)" stroke="#76FF03" stroke-width="3.5"/>

    <!-- Arrows on Cycle -->
    <path d="M 230 132 L 245 130 L 235 145" fill="#76FF03"/>
    <path d="M 150 248 L 135 250 L 145 235" fill="#76FF03"/>

    <text x="190" y="195" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Enclosed Work Area W</text>
    <text x="182" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Clockwise Loop ⇒ Net Positive Work Output W &gt; 0</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Cyclic Process Properties Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. Cyclic Process Laws &amp; Reversibility</text>

    <rect x="10" y="60" width="345" height="90" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Internal Energy in Cyclic Process:</text>
    <text x="182" y="122" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">ΔU_cycle = 0 &nbsp; ⇒ &nbsp; Q_net = W_net</text>

    <rect x="10" y="165" width="345" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Work Done = Area Enclosed:</text>
    <text x="182" y="225" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">W = ∮ P dV = Area of P-V Loop</text>
    <text x="182" y="255" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13">✓ Clockwise: Heat Engine | Counter-Clockwise: Refrigerator</text>

    <rect x="10" y="290" width="345" height="120" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="315" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Reversible vs Irreversible Process:</text>
    <text x="25" y="343" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Reversible: Quasi-static, zero dissipation, retraces path</text>
    <text x="25" y="365" fill="#FFFFFF" font-family="sans-serif" font-size="13">• Irreversible: Spontaneous, friction/turbulence present</text>
  </g>
</svg>`;

// 3D SVG 5: Heat Engine & Carnot Engine Efficiency (Kelvin-Planck Statement)
const svg5_3d_heat_engine_carnot = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <marker id="arrowRed5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowGreen5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowCyan5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- Left Side: Heat Engine Flow Chart (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Heat Engine (Kelvin-Planck Law)</text>

    <!-- Source Reservoir T1 -->
    <rect x="80" y="60" width="204" height="50" rx="8" fill="rgba(255,81,47,0.3)" stroke="#FF512F" stroke-width="2"/>
    <text x="182" y="90" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Hot Source (Temp T₁)</text>

    <!-- Engine Working Substance -->
    <circle cx="182" cy="200" r="40" fill="rgba(255,215,0,0.2)" stroke="#FFD700" stroke-width="2"/>
    <text x="182" y="205" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Engine</text>

    <!-- Q1 Arrow down -->
    <line x1="182" y1="110" x2="182" y2="160" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowRed5)"/>
    <text x="210" y="140" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Q₁</text>

    <!-- Work Output Arrow right -->
    <line x1="222" y1="200" x2="310" y2="200" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen5)"/>
    <text x="260" y="190" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Work W</text>

    <!-- Q2 Arrow down to Sink -->
    <line x1="182" y1="240" x2="182" y2="290" stroke="#00E5FF" stroke-width="4" marker-end="url(#arrowCyan5)"/>
    <text x="210" y="270" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Q₂</text>

    <!-- Sink Reservoir T2 -->
    <rect x="80" y="290" width="204" height="50" rx="8" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" stroke-width="2"/>
    <text x="182" y="320" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">Cold Sink (Temp T₂)</text>

    <text x="182" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Efficiency η = W / Q₁ = 1 - (Q₂ / Q₁)</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Carnot Engine & Kelvin-Planck Statement Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. Carnot Engine Efficiency Laws</text>

    <rect x="10" y="60" width="345" height="110" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Kelvin-Planck Statement:</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">It is impossible to construct an engine operating in a cycle that absorbs heat from a reservoir and converts it entirely into work without rejecting heat to a cold sink.</text>

    <rect x="10" y="185" width="345" height="100" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Carnot Engine Efficiency η:</text>
    <text x="182" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="18" font-weight="bold">η = 1 - (T₂ / T₁)</text>

    <rect x="10" y="300" width="345" height="115" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="325" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Carnot Cycle 4 Stages:</text>
    <text x="25" y="353" fill="#FFFFFF" font-family="sans-serif" font-size="13">• 1. Isothermal Expansion (T₁) &nbsp;|&nbsp; 2. Adiabatic Expansion</text>
    <text x="25" y="375" fill="#FFFFFF" font-family="sans-serif" font-size="13">• 3. Isothermal Compression (T₂) | 4. Adiabatic Compression</text>
  </g>
</svg>`;

// 3D SVG 6: Refrigerator & Heat Pump (Clausius Statement & COP β)
const svg6_3d_refrigerator_heat_pump = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <marker id="arrowRed6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="arrowGreen6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#76FF03"/>
    </marker>
    <marker id="arrowCyan6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- Left Side: Refrigerator Flow Chart (Width 365, Center x = 182) -->
  <g transform="translate(20, 20)">
    <text x="182" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Refrigerator (Clausius Statement)</text>

    <!-- Hot Surroundings T1 -->
    <rect x="80" y="60" width="204" height="50" rx="8" fill="rgba(255,81,47,0.3)" stroke="#FF512F" stroke-width="2"/>
    <text x="182" y="90" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Hot Room (Temp T₁)</text>

    <!-- Compressor Working Substance -->
    <circle cx="182" cy="200" r="40" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" stroke-width="2"/>
    <text x="182" y="205" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Compressor</text>

    <!-- Work Input Arrow in from left -->
    <line x1="60" y1="200" x2="142" y2="200" stroke="#76FF03" stroke-width="4" marker-end="url(#arrowGreen6)"/>
    <text x="100" y="190" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Work W</text>

    <!-- Q1 Arrow up to Hot Surroundings -->
    <line x1="182" y1="160" x2="182" y2="110" stroke="#FF512F" stroke-width="4" marker-end="url(#arrowRed6)"/>
    <text x="210" y="140" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">Q₁ = Q₂ + W</text>

    <!-- Q2 Arrow up from Cold Reservoir -->
    <line x1="182" y1="290" x2="182" y2="240" stroke="#00E5FF" stroke-width="4" marker-end="url(#arrowCyan6)"/>
    <text x="210" y="270" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Q₂</text>

    <!-- Cold Chamber T2 -->
    <rect x="80" y="290" width="204" height="50" rx="8" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" stroke-width="2"/>
    <text x="182" y="320" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">Cold Chamber (Temp T₂)</text>

    <text x="182" y="380" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">COP β = Q₂ / W = T₂ / (T₁ - T₂)</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="400" y1="40" x2="400" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right Side: Clausius Statement & COP Formulae Card (Width 365, Center x = 182) -->
  <g transform="translate(415, 20)">
    <rect x="0" y="0" width="365" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="182" y="35" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2. Clausius Statement &amp; COP β</text>

    <rect x="10" y="60" width="345" height="110" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="182" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Clausius Statement:</text>
    <text x="182" y="118" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">It is impossible for a self-acting machine, unaided by external agency, to transfer heat from a body at lower temperature to a body at higher temperature.</text>

    <rect x="10" y="185" width="345" height="100" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="182" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Coefficient of Performance (COP β):</text>
    <text x="182" y="245" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">β = Q₂ / W = T₂ / (T₁ - T₂)</text>

    <rect x="10" y="300" width="345" height="115" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="182" y="325" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Relation between Efficiency η &amp; COP β:</text>
    <text x="182" y="360" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="17" font-weight="bold">β = (1 - η) / η</text>
    <text x="182" y="390" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">• Ideal Carnot Refrigerator can have β &gt; 1!</text>
  </g>
</svg>`;

// Construct final Overview HTML for Chapter 8 (100% Exact Official NCERT Syllabus Section Headings)
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
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit VIII: Thermodynamics</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Thermal Equilibrium:</b>
        <span style="color: #FFFFFF;">State in which two interacting systems have equal temperature, so net heat transfer between them is zero.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Zeroth Law of Thermodynamics:</b>
        <span style="color: #FFFFFF;">If A and B are separately in thermal equilibrium with C, then A and B are in thermal equilibrium with each other.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Internal Energy (U):</b>
        <span style="color: #FFFFFF;">The total molecular kinetic and potential energy of a thermodynamic system. State function dependent only on T for ideal gas.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. First Law of Thermodynamics:</b>
        <span style="color: #FFFFFF;">Conservation of energy statement: Heat added ΔQ equals internal energy change ΔU plus work done ΔW (ΔQ = ΔU + ΔW).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Isothermal Process:</b>
        <span style="color: #FFFFFF;">A slow thermodynamic process occurring at constant temperature (ΔT = 0, ΔU = 0, P V = Const).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Adiabatic Process:</b>
        <span style="color: #FFFFFF;">A sudden thermodynamic process with no heat exchange with surroundings (Q = 0, P V<sup>γ</sup> = Const).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Cyclic Process:</b>
        <span style="color: #FFFFFF;">A sequence of processes returning system to initial state (ΔU_cycle = 0, Q_net = W_net = Area of P-V loop).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Second Law (Kelvin-Planck):</b>
        <span style="color: #FFFFFF;">Impossible to construct a heat engine converting heat absorbed completely into work without rejecting heat to cold sink.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Second Law (Clausius):</b>
        <span style="color: #FFFFFF;">Impossible for heat to flow spontaneously from a colder body to a hotter body without external work input.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Carnot Engine Efficiency (η):</b>
        <span style="color: #FFFFFF;">Maximum theoretical efficiency of reversible engine operating between T₁ and T₂: η = 1 - T₂ / T₁.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: THERMAL EQUILIBRIUM AND ZEROTH LAW OF THERMODYNAMICS (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Thermal Equilibrium and Definition of Temperature & Zeroth Law of Thermodynamics</h2>
  
  ${defCard("Zeroth Law of Thermodynamics", "If two systems A and B are separately in thermal equilibrium with a third system C, then system A and system B are also in thermal equilibrium with each other.")}

  <p>Thermodynamics is the branch of physics dealing with heat, work, temperature, and their interconversions. The concept of thermal equilibrium forms the logical foundation of temperature measurement.</p>

  <div style="margin: 12px 0;">
    ${colonTopic("Diathermal Wall", "A wall that permits energy flow in the form of heat between two systems.")}
    ${colonTopic("Adiabatic Wall", "An insulating wall that strictly prevents heat transfer between two systems.")}
    ${colonTopic("Temperature Definition", "Temperature is a scalar thermodynamic state variable whose equality determines thermal equilibrium between systems.")}
  </div>

  ${svg3DCardWrapper("Zeroth Law of Thermodynamics & Thermal Equilibrium Model", "3 Systems A, B, and C with diathermal and adiabatic walls proving T_A = T_B = T_C.", svg1_3d_zeroth_law)}

  <!-- SECTION 2: HEAT, WORK AND INTERNAL ENERGY (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Heat, Work and Internal Energy</h2>

  ${defCard("Internal Energy (U)", "The total energy possessed by a thermodynamic system due to molecular motion (kinetic energy) and intermolecular forces (potential energy). For an ideal gas, U is purely kinetic and depends solely on temperature T.")}

  ${eqBox("<b>Work: W = ∫ P dV &nbsp;|&nbsp; Internal Energy: U = U(T) &nbsp;|&nbsp; Heat: Q = Transit Energy</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Fundamental Thermodynamic Quantities</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Heat Q", "Energy transferred across system boundary due to temperature difference alone. Transient path function.")}
    ${colonTopic("Work W", "Energy transferred across system boundary by organized mechanical displacement. Path function W = ∫ P dV.")}
    ${colonTopic("Internal Energy U", "State function depending solely on current state variables (P, V, T), independent of path taken.")}
  </div>

  <!-- SECTION 3: FIRST LAW OF THERMODYNAMICS (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. First Law of Thermodynamics</h2>

  ${defCard("First Law of Thermodynamics", "A statement of law of conservation of energy applied to thermodynamic systems: The heat ΔQ absorbed by a system is spent in increasing internal energy ΔU and performing mechanical work ΔW.")}

  ${eqBox("<b>ΔQ = ΔU + ΔW &nbsp; (or dQ = dU + P dV)</b>")}

  ${svg3DCardWrapper("First Law of Thermodynamics & Gas Piston Cylinder System", "Piston cylinder expansion model showing heat addition ΔQ, internal energy change ΔU, and work done ΔW.", svg2_3d_first_law_piston)}

  <!-- SECTION 4: CHANGE OF CONDITION OF GASEOUS STATE - ISOTHERMAL, ADIABATIC, REVERSIBLE, IRREVERSIBLE, AND CYCLIC PROCESSES (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Change of Condition of Gaseous State - Isothermal, Adiabatic, Reversible, Irreversible, and Cyclic Processes</h2>

  ${defCard("Isothermal & Adiabatic Processes", "Isothermal: ΔT = 0, PV = Const, W = 2.303 n R T log₁₀(V₂/V₁). Adiabatic: Q = 0, PV<sup>γ</sup> = Const, W = n R (T₁ - T₂) / (γ - 1).")}

  <div style="margin: 12px 0;">
    ${colonTopic("1. Isothermal Process", "Occurs slowly in thin conducting vessel so temperature remains strictly constant (ΔT = 0, ΔU = 0). Equation: P V = Constant.")}
    ${colonTopic("2. Adiabatic Process", "Occurs suddenly/rapidly in insulated vessel with zero heat exchange (Q = 0). Equation: P V<sup>γ</sup> = Constant, where γ = C_p / C_v.")}
    ${colonTopic("3. Cyclic Process", "System returns to initial state. ΔU_cycle = 0, so Q_net = W_net = Area enclosed by P-V loop.")}
  </div>

  ${svg3DCardWrapper("Isothermal vs Adiabatic Expansion P-V Curve Comparison", "P-V indicator diagram showing Isothermal curve (PV=C) alongside steeper Adiabatic curve (PV<sup>γ</sup>=C).", svg3_3d_isothermal_vs_adiabatic)}
  ${svg3DCardWrapper("Cyclic Process P-V Loop & Enclosed Area Work Output", "Clockwise P-V loop showing net positive work output W_net = ∮ P dV and state function ΔU_cycle = 0.", svg4_3d_cyclic_process_pv_loop)}

  <!-- SECTION 5: SECOND LAW OF THERMODYNAMICS (100% OFFICIAL SYLLABUS TITLE) -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Second Law of Thermodynamics</h2>

  ${defCard("Second Law of Thermodynamics", "Establishes the directional constraints of natural heat flow. Kelvin-Planck: Impossible to convert heat completely into work. Clausius: Heat cannot flow spontaneously from cold to hot body.")}

  ${eqBox("<b>Heat Engine Efficiency: η = 1 - " + frac('T<sub>2</sub>', 'T<sub>1</sub>') + " &nbsp;|&nbsp; Refrigerator COP: β = " + frac('T<sub>2</sub>', 'T<sub>1</sub> - T<sub>2</sub>') + "</b>")}

  ${svg3DCardWrapper("Heat Engine & Carnot Engine Efficiency (Kelvin-Planck Statement)", "Thermal energy reservoir flow chart for heat engine working between T1 and T2 showing Carnot efficiency η = 1 - T2/T1.", svg5_3d_heat_engine_carnot)}
  ${svg3DCardWrapper("Refrigerator & Heat Pump (Clausius Statement & COP β)", "Heat pump compressor model extracting heat Q2 from cold chamber rejecting Q1 to hot room with COP β.", svg6_3d_refrigerator_heat_pump)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, First & Second Laws, Carnot Engine Summary for Unit VIII</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• First Law Equation:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">ΔQ = ΔU + ΔW<br>W = ∫ P dV</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Isothermal Work:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">PV = Const &nbsp;|&nbsp; ΔU = 0<br>W = 2.303 n R T log<sub>10</sub>(` + frac('V<sub>2</sub>', 'V<sub>1</sub>') + `)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Adiabatic Work:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">PV<sup>γ</sup> = Const &nbsp;|&nbsp; Q = 0<br>W = ` + frac('n R (T<sub>1</sub> - T<sub>2</sub>)', 'γ - 1') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Cyclic Process Work:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">ΔU<sub>cycle</sub> = 0 &nbsp;|&nbsp; Q<sub>net</sub> = W<sub>net</sub><br>W = Area of P-V Loop</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Carnot Engine Efficiency:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">η = 1 - ` + frac('T<sub>2</sub>', 'T<sub>1</sub>') + ` = ` + frac('W', 'Q<sub>1</sub>') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Refrigerator COP:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">β = ` + frac('Q<sub>2</sub>', 'W') + ` = ` + frac('T<sub>2</sub>', 'T<sub>1</sub> - T<sub>2</sub>') + `<br>β = ` + frac('1 - η', 'η') + `</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate 100 Textbook Standard Solutions (25 MCQs, 30 VSAs, 30 SAs, 15 LAs) for Chapter 8
function generateFullSolutionsHtml() {
  let html = `<style>
    p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) { text-align: justify !important; }
    h1, h2, h3, h4, h5, h6 { text-align: left; }
    .text-center { text-align: center !important; }
  </style>
  <div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 10px;">NCERT & Textbook Standard Exercise Solutions — Unit VIII: Thermodynamics</h1>`;

  // 1. SECTION 1: 25 MCQs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">SECTION 1: MULTIPLE CHOICE QUESTIONS (MCQs 1 - 25)</h2>`;

  const mcqQuestions = [
    { q: "Zeroth law of thermodynamics forms the basis for the measurement of:", opts: ["(a) Pressure", "(b) Work", "(c) Heat", "(d) Temperature"], ans: "(d)", exp: "Zeroth law defines temperature as the scalar state variable determining thermal equilibrium." },
    { q: "First law of thermodynamics is a restatement of law of conservation of:", opts: ["(a) Charge", "(b) Energy", "(c) Momentum", "(d) Mass"], ans: "(b)", exp: "First law ΔQ = ΔU + ΔW expresses conservation of thermodynamic energy." },
    { q: "In an isothermal expansion of an ideal gas, internal energy change ΔU is:", opts: ["(a) Positive", "(b) Negative", "(c) Zero", "(d) Infinite"], ans: "(c)", exp: "For ideal gas U depends solely on T. In isothermal process ΔT = 0, so ΔU = 0." },
    { q: "During an adiabatic process, heat exchange ΔQ between system and surroundings is:", opts: ["(a) Positive", "(b) Negative", "(c) Zero", "(d) Variable"], ans: "(c)", exp: "An adiabatic process occurs in an insulated vessel with zero heat transfer (ΔQ = 0)." },
    { q: "The work done in an isochoric process is:", opts: ["(a) P ΔV", "(b) Zero", "(c) n R T", "(d) ΔU"], ans: "(b)", exp: "In an isochoric process volume remains constant (ΔV = 0), so W = ∫ P dV = 0." },
    { q: "Slope of an adiabatic curve on a P-V diagram compared to an isothermal curve is:", opts: ["(a) Equal", "(b) Less steep", "(c) γ times steeper", "(d) 1/γ times steeper"], ans: "(c)", exp: "(dP/dV)_adia = -γ (P/V) = γ × (dP/dV)_iso. Adiabatic slope is γ times steeper." },
    { q: "In a cyclic process, the net work done by the system is equal to:", opts: ["(a) Zero", "(b) Area enclosed by P-V loop", "(c) Change in internal energy", "(d) Total initial heat"], ans: "(b)", exp: "Since ΔU_cycle = 0, W_net = Q_net = Area enclosed inside closed P-V loop." },
    { q: "The efficiency η of a Carnot engine working between source T₁ and sink T₂ is:", opts: ["(a) 1 - T₁/T₂", "(b) 1 - T₂/T₁", "(c) T₂/T₁", "(d) T₁/T₂ - 1"], ans: "(b)", exp: "Carnot efficiency η = 1 - T₂/T₁ where temperatures are in Kelvin." },
    { q: "Kelvin-Planck statement of Second Law deals with:", opts: ["(a) Heat engines", "(b) Refrigerators", "(c) Thermometers", "(d) Calorimeters"], ans: "(a)", exp: "Kelvin-Planck statement rules out 100% efficient heat engines converting heat completely to work." },
    { q: "Clausius statement of Second Law deals with:", opts: ["(a) Heat engines", "(b) Refrigerators / Heat pumps", "(c) Ideal gases", "(d) Internal energy"], ans: "(b)", exp: "Clausius statement states heat cannot flow spontaneously from cold to hot reservoir without work." },
    { q: "The relation between efficiency η of a heat engine and COP β of a Carnot refrigerator is:", opts: ["(a) β = 1 / η", "(b) β = (1 - η) / η", "(c) β = η / (1 - η)", "(d) β = 1 + η"], ans: "(b)", exp: "β = Q₂/W = T₂/(T₁ - T₂) = (1 - η)/η." },
    { q: "For a monoatomic gas (γ = 5/3), if volume is compressed adiabatically to 1/8th of its initial volume, pressure increases by a factor of:", opts: ["(a) 8", "(b) 16", "(c) 32", "(d) 64"], ans: "(c)", exp: "P₂/P₁ = (V₁/V₂)<sup>γ</sup> = (8)<sup>5/3</sup> = (2<sup>3</sup>)<sup>5/3</sup> = 2<sup>5</sup> = 32." },
    { q: "In an adiabatic expansion, the temperature of an ideal gas:", opts: ["(a) Increases", "(b) Decreases", "(c) Remains constant", "(d) First increases then decreases"], ans: "(b)", exp: "W = -ΔU > 0 ⇒ ΔU < 0. Internal energy drops, causing gas temperature to fall." },
    { q: "Which of the following is NOT a state function?", opts: ["(a) Pressure", "(b) Volume", "(c) Internal Energy", "(d) Work"], ans: "(d)", exp: "Work W and Heat Q are path functions, while P, V, T, U are state functions." },
    { q: "The area of P-V diagram for a thermodynamic process represents:", opts: ["(a) Heat absorbed", "(b) Work done", "(c) Temperature change", "(d) Internal energy"], ans: "(b)", exp: "Area under P-V curve ∫ P dV represents work done." },
    { q: "An ideal gas undergoes isothermal expansion at 300 K absorbing 500 J heat. Work done by gas is:", opts: ["(a) 0 J", "(b) 250 J", "(c) 500 J", "(d) -500 J"], ans: "(c)", exp: "For isothermal process ΔU = 0, so W = Q = +500 J." },
    { q: "Can a heat engine have 100% efficiency?", opts: ["(a) Yes, if sink is at 0 K", "(b) Yes, if source is at 0 K", "(c) Yes, if friction is zero", "(d) Never possible"], ans: "(a)", exp: "η = 1 - T₂/T₁ = 100% only if T₂ = 0 K (Absolute Zero), which is practically unattainable by 3rd Law." },
    { q: "A process in which no heat enters or leaves the system is called:", opts: ["(a) Isothermal", "(b) Isobaric", "(c) Isochoric", "(d) Adiabatic"], ans: "(d)", exp: "Adiabatic process is characterized by Q = 0." },
    { q: "A process in which pressure remains constant is called:", opts: ["(a) Isobaric", "(b) Isochoric", "(c) Isothermal", "(d) Adiabatic"], ans: "(a)", exp: "Isobaric means constant pressure (ΔP = 0)." },
    { q: "The ratio of molar heat capacities γ = C_p / C_v for a diatomic gas like O₂ is:", opts: ["(a) 1.67", "(b) 1.40", "(c) 1.33", "(d) 1.25"], ans: "(b)", exp: "For a rigid diatomic gas, C_v = 5/2 R, C_p = 7/2 R, so γ = 7/5 = 1.40." },
    { q: "A Carnot engine operates between 500 K and 300 K. Its efficiency is:", opts: ["(a) 20%", "(b) 40%", "(c) 60%", "(d) 80%"], ans: "(b)", exp: "η = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%." },
    { q: "The COP of a refrigerator is 5. If it extracts 200 J heat from cold reservoir, work done by compressor is:", opts: ["(a) 40 J", "(b) 1000 J", "(c) 50 J", "(d) 200 J"], ans: "(a)", exp: "β = Q₂ / W ⇒ W = Q₂ / β = 200 / 5 = 40 J." },
    { q: "Quasi-static process is an ideal process which is extremely:", opts: ["(a) Fast", "(b) Slow", "(c) Irreversible", "(d) Explosive"], ans: "(b)", exp: "Quasi-static process proceeds infinitely slowly through equilibrium states." },
    { q: "If heat added to a system is 300 J and work done by system is 100 J, increase in internal energy is:", opts: ["(a) 400 J", "(b) 200 J", "(c) 100 J", "(d) -200 J"], ans: "(b)", exp: "ΔU = ΔQ - ΔW = 300 - 100 = 200 J." },
    { q: "A refrigerator door is left open in a closed room. The room temperature will:", opts: ["(a) Decrease", "(b) Increase", "(c) Remain unchanged", "(d) Drop to 0°C"], ans: "(b)", exp: "Refrigerator releases more heat to room Q₁ = Q₂ + W than it extracts Q₂, so room heats up." }
  ];

  mcqQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(255, 81, 47, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 15px 0;">
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
    { q: "State the Zeroth Law of Thermodynamics.", a: "If systems A and B are separately in thermal equilibrium with C, then A and B are in thermal equilibrium with each other." },
    { q: "What physical concept is defined by the Zeroth Law of Thermodynamics?", a: "Temperature." },
    { q: "State the First Law of Thermodynamics.", a: "Conservation of energy statement: Heat added ΔQ = ΔU + ΔW." },
    { q: "Distinguish between state functions and path functions.", a: "State functions (P, V, T, U) depend only on current equilibrium state; Path functions (Q, W) depend on path taken." },
    { q: "What is an isothermal process?", a: "A thermodynamic process occurring at constant temperature (ΔT = 0, ΔU = 0)." },
    { q: "What is an adiabatic process?", a: "A process in which no heat enters or leaves the system (Q = 0)." },
    { q: "Write the equation of state for an adiabatic process in terms of P and V.", a: "P V<sup>γ</sup> = Constant." },
    { q: "Write the formula for work done during an isothermal expansion.", a: "W = 2.303 n R T log₁₀(V₂ / V₁)." },
    { q: "Write the formula for work done during an adiabatic expansion.", a: "W = n R (T₁ - T₂) / (γ - 1) = (P₁ V₁ - P₂ V₂) / (γ - 1)." },
    { q: "Why is the adiabatic curve steeper than the isothermal curve on a P-V diagram?", a: "Because adiabatic slope (dP/dV)_adia = -γ (P/V) is γ times the isothermal slope -P/V." },
    { q: "What is a cyclic process?", a: "A process in which the system returns to its initial thermodynamic state (ΔU_cycle = 0)." },
    { q: "What is the net work done in a cyclic process equal to?", a: "The area enclosed by the closed loop on the P-V indicator diagram." },
    { q: "State Kelvin-Planck statement of Second Law of Thermodynamics.", a: "Impossible to construct an engine operating in a cycle that absorbs heat from a reservoir and converts it completely to work without rejecting heat to cold sink." },
    { q: "State Clausius statement of Second Law of Thermodynamics.", a: "Impossible for a self-acting device to transfer heat from a colder body to a hotter body without external work input." },
    { q: "Write the formula for Carnot engine efficiency η in terms of temperatures T₁ and T₂.", a: "η = 1 - T₂ / T₁ (where T₁ is source temp and T₂ is sink temp in Kelvin)." },
    { q: "What is a Carnot Refrigerator?", a: "A Carnot heat engine operating in reverse, extracting heat from a cold reservoir by consuming external work." },
    { q: "Define Coefficient of Performance (COP) β of a refrigerator.", a: "β = Q₂ / W = T₂ / (T₁ - T₂)." },
    { q: "Can a Carnot engine have 100% efficiency? Explain.", a: "No, because 100% efficiency requires sink temperature T₂ = 0 K, which is absolute zero and physically unattainable." },
    { q: "What is a quasi-static process?", a: "An infinitely slow process passing through a continuous series of equilibrium states." },
    { q: "Give two examples of irreversible processes.", a: "1. Heat conduction through a temperature gradient. 2. Free expansion of a gas into vacuum." },
    { q: "What is an isochoric process?", a: "A process occurring at constant volume (ΔV = 0, W = 0)." },
    { q: "What is an isobaric process?", a: "A process occurring at constant pressure (ΔP = 0, W = P ΔV)." },
    { q: "Why does air temperature fall when a bicycle tire bursts suddenly?", a: "Sudden expansion is adiabatic (Q = 0). Gas does work at expense of its internal energy (W = -ΔU), causing temperature drop." },
    { q: "Why is an isothermal process carried out slowly in a thin metal container?", a: "To allow sufficient time for heat exchange through thin conducting walls to maintain constant temperature." },
    { q: "What is the change in internal energy during one full cycle of a Carnot engine?", a: "Zero (ΔU_cycle = 0)." },
    { q: "What is the ratio of slopes of adiabatic to isothermal curves for a gas with γ = 1.4?", a: "Ratio of slopes = γ = 1.4." },
    { q: "Is work done in expanding a gas from V₁ to V₂ greater in isothermal or adiabatic process?", a: "Greater in isothermal process, because P-V curve for isothermal lies above adiabatic curve." },
    { q: "What happens to entropy of universe in an irreversible process?", a: "Entropy of the universe always increases in an irreversible process." },
    { q: "Can heat be completely converted into work in a single non-cyclic process?", a: "Yes, in an isothermal expansion Q = W, but this cannot be repeated continuously in a cycle." },
    { q: "Why does a heat engine require two thermal reservoirs?", a: "To establish a temperature difference T₁ > T₂ allowing continuous heat absorption Q₁ and rejection Q₂." }
  ];

  vsaQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(255, 81, 47, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 14px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 26}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Ans:</b> ${item.a}</p>
    </div>`;
  });

  // 3. SECTION 3: 30 SAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 3: SHORT ANSWER QUESTIONS (SAs 56 - 85)</h2>`;

  const saQuestions = [
    { q: "State Zeroth Law of Thermodynamics and explain how it leads to the definition of temperature.", a: "Zeroth law states if A and B are in thermal equilibrium with C, then A and B are in equilibrium with each other. This defines a common scalar property T such that T_A = T_B = T_C." },
    { q: "Explain the First Law of Thermodynamics and apply it to: (i) Isochoric process, (ii) Isothermal process.", a: "First Law: ΔQ = ΔU + ΔW.\n1. Isochoric (ΔV = 0 ⇒ W = 0): ΔQ = ΔU (Heat added increases internal energy).\n2. Isothermal (ΔT = 0 ⇒ ΔU = 0): ΔQ = ΔW (Heat added converts completely to work)." },
    { q: "Derive an expression for work done during an isothermal expansion of n moles of ideal gas from V₁ to V₂.", a: "W = ∫[V₁ to V₂] P dV = ∫ n R T / V dV = n R T [ln V]_[V₁ to V₂] = n R T ln(V₂/V₁) = 2.303 n R T log₁₀(V₂/V₁)." },
    { q: "Derive an expression for work done during an adiabatic expansion of n moles of ideal gas from T₁ to T₂.", a: "P V<sup>γ</sup> = K ⇒ W = ∫ P dV = K ∫ V<sup>-γ</sup> dV = [K / (1-γ)] [V<sub>2</sub><sup>1-γ</sup> - V<sub>1</sub><sup>1-γ</sup>] = (P₂ V₂ - P₁ V₁) / (1-γ) = n R (T₁ - T₂) / (γ - 1)." },
    { q: "Show that slope of an adiabatic P-V curve is γ times the slope of an isothermal P-V curve.", a: "1. Isothermal PV = C ⇒ P dV + V dP = 0 ⇒ (dP/dV)_iso = -P/V.\n2. Adiabatic PV<sup>γ</sup> = C ⇒ P γ V<sup>γ-1</sup> dV + V<sup>γ</sup> dP = 0 ⇒ (dP/dV)_adia = -γ (P/V) = γ (dP/dV)_iso." },
    { q: "Differentiate between Reversible and Irreversible processes with two examples of each.", a: "1. Reversible: Quasi-static, zero dissipation, retraces path (e.g. slow isothermal expansion, Carnot cycle).\n2. Irreversible: Spontaneous, dissipation present (e.g. free expansion, heat conduction)." },
    { q: "State Kelvin-Planck and Clausius statements of Second Law of Thermodynamics and show their equivalence.", a: "1. Kelvin-Planck: Impossible to build 100% efficient heat engine.\n2. Clausius: Heat cannot flow spontaneously from cold to hot body.\n3. Equivalence: Violation of Kelvin-Planck leads to violation of Clausius and vice-versa." },
    { q: "Describe the 4 processes constituting a Carnot Cycle with P-V diagram.", a: "1. Isothermal Expansion A→B at T₁ (absorbs Q₁).\n2. Adiabatic Expansion B→C (temp drops T₁ to T₂).\n3. Isothermal Compression C→D at T₂ (rejects Q₂).\n4. Adiabatic Compression D→A (temp rises T₂ to T₁)." },
    { q: "Derive an expression for efficiency of a Carnot Engine operating between T₁ and T₂.", a: "η = W / Q₁ = (Q₁ - Q₂) / Q₁ = 1 - Q₂ / Q₁. For Carnot cycle Q₂ / Q₁ = T₂ / T₁, so efficiency η = 1 - T₂ / T₁." },
    { q: "Explain the working of a Refrigerator and derive expression for its Coefficient of Performance (COP β).", a: "Working substance extracts Q₂ from cold chamber using compressor work W and rejects Q₁ = Q₂ + W to room. COP β = Q₂ / W = Q₂ / (Q₁ - Q₂) = T₂ / (T₁ - T₂)." },
    { q: "A gas expands from 1 L to 4 L at constant pressure of 2 × 10⁵ Pa. Find work done by gas.", a: "W = P ΔV = 2 × 10⁵ Pa × (4 - 1) × 10⁻³ m³ = 2 × 10⁵ × 3 × 10⁻³ = 600 Joules." },
    { q: "An ideal gas absorbs 1000 J heat and performs 400 J work. Find change in internal energy.", a: "ΔU = ΔQ - ΔW = 1000 - 400 = +600 Joules." },
    { q: "2 moles of ideal gas expand isothermally at 300 K from 2 L to 20 L. Calculate work done (R = 8.314 J/mol K).", a: "W = 2.303 n R T log₁₀(V₂/V₁) = 2.303 × 2 × 8.314 × 300 × log₁₀(10) = 2.303 × 4988.4 × 1 = 11,488 Joules ≈ 11.49 kJ." },
    { q: "A monoatomic gas (γ = 5/3) at 27°C is compressed adiabatically to 1/8th of its initial volume. Find final temperature.", a: "T₂ / T₁ = (V₁ / V₂)<sup>γ-1</sup> = (8)<sup>5/3 - 1</sup> = (8)<sup>2/3</sup> = (2<sup>3</sup>)<sup>2/3</sup> = 4. T₂ = 4 T₁ = 4 × (27 + 273) = 4 × 300 = 1200 K = 927°C." },
    { q: "A Carnot engine operates between 600 K and 300 K. It absorbs 1200 J heat from source. Find work done and heat rejected.", a: "Efficiency η = 1 - 300/600 = 0.5 (50%). Work W = η Q₁ = 0.5 × 1200 = 600 J. Heat rejected Q₂ = Q₁ - W = 1200 - 600 = 600 J." },
    { q: "A Carnot refrigerator operates between 0°C and 30°C. Calculate its COP.", a: "T₂ = 0 + 273 = 273 K, T₁ = 30 + 273 = 303 K. COP β = T₂ / (T₁ - T₂) = 273 / (303 - 273) = 273 / 30 = 9.1." },
    { q: "Explain why internal energy of an ideal gas depends ONLY on temperature.", a: "In an ideal gas, intermolecular potential energy is zero. Total internal energy U is purely kinetic energy of molecules, which is proportional to absolute temperature T." },
    { q: "Why is C_p always greater than C_v for a gas?", a: "At constant volume, heat Q_v increases internal energy ΔU only. At constant pressure, heat Q_p increases ΔU AND performs expansion work P ΔV. Thus C_p > C_v." },
    { q: "Distinguish between diathermal and adiabatic walls with examples.", a: "1. Diathermal wall allows heat exchange (e.g. thin copper plate).\n2. Adiabatic wall prevents heat exchange (e.g. thick thermos flask wall, styrofoam)." },
    { q: "Can internal energy of a system be increased without supplying heat? Explain.", a: "Yes, by performing adiabatic work ON the system (W < 0). By First Law ΔQ = 0 ⇒ ΔU = -ΔW > 0 (e.g. compressing gas in insulated cylinder)." },
    { q: "Draw P-V diagram for a cyclic process and show that net work done equals enclosed area.", a: "Clockwise loop A→B (expansion work W_AB = area under top curve) and B→A (compression work W_BA = area under bottom curve). Net W = W_AB - W_BA = enclosed loop area." },
    { q: "Explain why speed of sound in gas is an adiabatic process while Boyle's law experiment is isothermal.", a: "1. Sound compressions/rarefactions occur extremely rapidly (no time for heat exchange ⇒ adiabatic).\n2. Boyle's law compression is performed very slowly allowing heat exchange with room (⇒ isothermal)." },
    { q: "A Carnot engine has efficiency 40% when sink is at 300 K. To increase efficiency to 50%, find new source temp.", a: "Initial: 0.40 = 1 - 300/T₁ ⇒ 300/T₁ = 0.60 ⇒ T₁ = 500 K. New: 0.50 = 1 - 300/T₁' ⇒ 300/T₁' = 0.50 ⇒ T₁' = 600 K. Source temp must be raised to 600 K." },
    { q: "Calculate the change in internal energy when 2 moles of gas is heated at constant volume from 20°C to 100°C (C_v = 5 cal/mol K).", a: "Isochoric process W = 0 ⇒ ΔU = ΔQ = n C_v ΔT = 2 × 5 × (100 - 20) = 2 × 5 × 80 = 800 calories = 800 × 4.184 = 3347 J." },
    { q: "If a heat engine rejects 3/4th of heat absorbed from source, what is its efficiency?", a: "Q₂ = (3/4) Q₁ ⇒ Efficiency η = 1 - Q₂/Q₁ = 1 - 3/4 = 1/4 = 25%." },
    { q: "Why is a heat pump more economical than an electric resistance heater for warming a room?", a: "Electric heater delivers heat Q = W (COP = 1). Heat pump delivers Q₁ = W (1 + β) where β > 1, providing several times more heat per Joule of electricity." },
    { q: "What is free expansion? Is it reversible or irreversible? Calculate work done.", a: "Free expansion is unresisted expansion of gas into vacuum (P_ext = 0). W = 0, Q = 0, ΔU = 0. It is highly irreversible." },
    { q: "A gas is compressed at constant pressure of 50 N/m² from 10 m³ to 4 m³. 100 J heat is added. Find ΔU.", a: "W = P ΔV = 50 × (4 - 10) = -300 J. By First Law ΔU = ΔQ - ΔW = +100 - (-300) = +400 Joules." },
    { q: "Explain the physical significance of adiabatic index γ = C_p / C_v.", a: "γ represents the ratio of molar heat capacities, reflecting atomicity of gas molecules (Monoatomic γ=1.67, Diatomic γ=1.40, Triatomic γ=1.33)." },
    { q: "State two limitations of First Law of Thermodynamics.", a: "1. Fails to specify direction of heat flow (does not explain why heat flows hot to cold).\n2. Does not specify feasibility or efficiency limit of converting heat into work." }
  ];

  saQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(255, 81, 47, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin: 15px 0;">
      <b style="color: ${themeColor}; font-size: 15.5px;">Q${idx + 56}: ${item.q}</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Solution:</b> ${item.a}</p>
    </div>`;
  });

  // 4. SECTION 4: 15 LAs
  html += `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SECTION 4: LONG ANSWER QUESTIONS (LAs 86 - 100)</h2>`;

  const laQuestions = [
    { q: "State and explain First Law of Thermodynamics with sign conventions. Apply First Law to derive work and heat equations for: (i) Isothermal, (ii) Adiabatic, (iii) Isochoric, (iv) Isobaric processes.", a: "1. Statement ΔQ = ΔU + ΔW.\n2. Isothermal: ΔT=0 ⇒ ΔU=0 ⇒ Q = W = 2.303 nRT log₁₀(V₂/V₁).\n3. Adiabatic: Q=0 ⇒ W = -ΔU = nR(T₁-T₂)/(γ-1).\n4. Isochoric: ΔV=0 ⇒ W=0 ⇒ Q = ΔU = n C_v ΔT.\n5. Isobaric: W = P ΔV ⇒ Q = n C_p ΔT." },
    { q: "Derive an expression for work done in an Isothermal expansion and an Adiabatic expansion of an ideal gas. Compare the slopes of Isothermal and Adiabatic P-V curves.", a: "1. W_iso = 2.303 n R T log₁₀(V₂/V₁).\n2. W_adia = (P₁ V₁ - P₂ V₂) / (γ - 1).\n3. Slope derivation: Isothermal dP/dV = -P/V, Adiabatic dP/dV = -γ (P/V). Adiabatic slope is γ times steeper." },
    { q: "What is a Carnot Heat Engine? Describe the 4 stages of Carnot cycle with P-V diagram. Derive an expression for its efficiency η in terms of temperatures T₁ and T₂.", a: "1. Carnot Engine: Ideal reversible engine operating between T₁ and T₂.\n2. 4 Stages: (i) Isothermal Expansion A→B, (ii) Adiabatic Expansion B→C, (iii) Isothermal Compression C→D, (iv) Adiabatic Compression D→A.\n3. Efficiency: η = W / Q₁ = 1 - Q₂/Q₁ = 1 - T₂/T₁." },
    { q: "State Second Law of Thermodynamics (Kelvin-Planck and Clausius statements). Prove their logical equivalence with neat flow diagrams.", a: "1. Kelvin-Planck: Cannot build 100% efficient heat engine.\n2. Clausius: Heat cannot flow spontaneously from cold to hot body.\n3. Proof of equivalence: Show that a machine violating Kelvin-Planck statement coupled with a refrigerator violates Clausius statement." },
    { q: "What is a Refrigerator? Explain its principle, working, and Coefficient of Performance (COP β). Derive relation between Carnot efficiency η and COP β.", a: "1. Principle & Working: Reverse heat engine extracting Q₂ from cold chamber using work W and rejecting Q₁ to hot room.\n2. COP β = Q₂ / W = T₂ / (T₁ - T₂).\n3. Relation: β = (1 - η) / η." },
    { q: "1 mole of ideal monoatomic gas (γ = 5/3) initially at P₁ = 1 atm, V₁ = 24.6 L, T₁ = 300 K undergoes: (i) Isothermal expansion to 2 V₁, (ii) Adiabatic expansion to 4 V₁. Calculate final pressure, temperature, and total work done.", a: "1. Isothermal to 2V₁: P_B = P₁/2 = 0.5 atm, T_B = 300 K. W_AB = nRT ln(2) = 1 × 8.314 × 300 × 0.693 = 1729 J.\n2. Adiabatic to 4V₁: P_C = P_B (V_B/V_C)<sup>γ</sup> = 0.5 (2V₁/4V₁)<sup>5/3</sup> = 0.5 (1/2)<sup>5/3</sup> = 0.157 atm. T_C = T_B (1/2)<sup>2/3</sup> = 300 × 0.630 = 189 K.\n3. W_BC = nR(T_B - T_C)/(γ-1) = 1 × 8.314 × (300 - 189) / (2/3) = 1.5 × 8.314 × 111 = 1384 J.\n4. Total Work W = 1729 + 1384 = 3113 Joules." },
    { q: "A Carnot engine operates between 800 K and 400 K. In each cycle it absorbs 2000 J heat from source. Calculate: (i) Efficiency η, (ii) Work output W, (iii) Heat rejected Q₂, (iv) COP if operated as refrigerator between same temps.", a: "1. η = 1 - 400/800 = 0.50 (50%).\n2. W = η Q₁ = 0.50 × 2000 = 1000 Joules.\n3. Q₂ = Q₁ - W = 2000 - 1000 = 1000 Joules.\n4. Refrigerator COP β = T₂ / (T₁ - T₂) = 400 / (800 - 400) = 400 / 400 = 1.0." },
    { q: "Differentiate between Reversible and Irreversible processes. State 4 essential conditions for a process to be strictly reversible.", a: "1. Differences: Reversible proceeds via equilibrium states with zero dissipation; Irreversible has friction/turbulence.\n2. 4 Conditions: (i) Quasi-static extremely slow speed, (ii) Absence of friction and resistive forces, (iii) Zero temp difference across boundaries, (iv) Absence of hysteresis." },
    { q: "A cyclic heat engine operates on a rectangular P-V diagram between P₁ = 1 × 10⁵ Pa, P₂ = 4 × 10⁵ Pa and V₁ = 2 m³, V₂ = 5 m³. Calculate net work done and heat transferred in one cycle.", a: "1. Rectangular cycle P-V loop width ΔV = 5 - 2 = 3 m³, height ΔP = 4×10⁵ - 1×10⁵ = 3×10⁵ Pa.\n2. Net Work W = Area = ΔP × ΔV = (3 × 10⁵ Pa) × (3 m³) = 9.0 × 10⁵ Joules = 900 kJ.\n3. Since ΔU_cycle = 0, Net Heat Absorbed Q_net = W_net = 900 kJ." },
    { q: "Explain the concept of Internal Energy U. Prove that internal energy is a state function while heat Q and work W are path functions.", a: "1. Definition of U.\n2. Proof of U as state function: For any closed cycle ∮ dU = ∮ (dQ - dW) = 0, showing ΔU depends only on initial and final states.\n3. Heat and Work path dependence: Areas under different expansion curves between same initial and final volumes yield different W and Q values." },
    { q: "Explain why efficiency of a Carnot engine depends ONLY on temperatures of source and sink, and NOT on the nature of working substance.", a: "In Carnot cycle, all heat absorption and rejection occur isothermally at T₁ and T₂, and adiabatic transitions connect them. Integrating dQ/T = 0 around reversible cycle yields Q₁/T₁ = Q₂/T₂ ⇒ η = 1 - T₂/T₁, completely independent of gas properties." },
    { q: "A refrigerator extracts heat from water at 0°C to convert 2 kg water into ice at 0°C, rejecting heat to room at 27°C. Calculate minimum work required (L_f = 3.36 × 10⁵ J/kg).", a: "1. Heat extracted Q₂ = m L_f = 2 kg × 3.36 × 10⁵ J/kg = 6.72 × 10⁵ Joules.\n2. T₂ = 273 K, T₁ = 27 + 273 = 300 K.\n3. Max COP β = T₂ / (T₁ - T₂) = 273 / 27 = 9.1.\n4. Work W = Q₂ / β = 6.72 × 10⁵ / 9.1 = 7.38 × 10⁴ Joules = 73.8 kJ." },
    { q: "Discuss the work done in Isochoric, Isobaric, Isothermal, and Adiabatic processes with P-V diagrams for each.", a: "1. Isochoric (V=Const): W = 0 (Vertical line on P-V diagram).\n2. Isobaric (P=Const): W = P (V₂ - V₁) (Horizontal line).\n3. Isothermal (T=Const): W = 2.303 n R T log₁₀(V₂/V₁) (Hyperbolic curve PV=C).\n4. Adiabatic (Q=0): W = n R (T₁ - T₂)/(γ - 1) (Steeper curve PV<sup>γ</sup>=C)." },
    { q: "Two Carnot engines A and B operate in series. Engine A receives heat at 900 K and rejects to intermediate temp T. Engine B receives heat rejected by A and rejects to sink at 400 K. Find T if: (i) Work outputs are equal (W_A = W_B), (ii) Efficiencies are equal (η_A = η_B).", a: "1. Equal Work (W_A = W_B ⇒ Q₁ - Q_mid = Q_mid - Q₂ ⇒ T₁ - T = T - T₂): T = (T₁ + T₂) / 2 = (900 + 400) / 2 = 650 K.\n2. Equal Efficiency (1 - T/T₁ = 1 - T₂/T ⇒ T/T₁ = T₂/T ⇒ T² = T₁ T₂): T = √(900 × 400) = √360000 = 600 K." },
    { q: "State and prove Carnot's Theorem. Explain why no real engine can have efficiency greater than a Carnot engine operating between same two temperatures.", a: "1. Statement: No engine operating between two given temperatures can be more efficient than a reversible Carnot engine operating between same temperatures.\n2. Proof: Assume an irreversible engine I with η_I > η_R. Coupling I to reversed Carnot engine R produces a self-acting machine transferring heat from cold to hot reservoir without work, violating Clausius statement. Thus η_I ≤ η_R." }
  ];

  laQuestions.forEach((item, idx) => {
    html += `
    <div style="background: rgba(255, 81, 47, 0.04); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <b style="color: ${themeColor}; font-size: 16px;">Q${idx + 86}: ${item.q}</b>
      <p style="margin: 8px 0 0 0; color: #FFFFFF; font-size: 15px; line-height: 1.6; white-space: pre-line;"><b>Comprehensive Solution:</b>\n${item.a}</p>
    </div>`;
  });

  html += `</div>`;
  return html;
}

const overviewHtml = generateFullOverviewHtml();
const solutionsHtml = generateFullSolutionsHtml();

const tsContent = `// Class 11 Physics Unit VIII: Thermodynamics (100% Exact Official NCERT Syllabus Alignment)
// High-Level Reference Book Content & NCERT Solutions (6 Self-Contained 3D Volumetric SVG Diagrams)

export const c11Phy8HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy8HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-8.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully generated c11-phy-8.ts with 6 3D SVG diagrams and 100 questions at " + outputPath);
