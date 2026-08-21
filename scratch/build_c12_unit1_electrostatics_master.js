const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${defContent}</div>
  </div>`;
}

function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 20px; margin: 28px 0; box-shadow: 0 10px 30px rgba(255, 81, 47, 0.25);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 18px; margin-bottom: 16px; text-align: center; letter-spacing: 0.5px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 920px; margin: 0 auto; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
      ${svgContent}
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; text-align: center; margin-top: 14px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

// 7 Complete Valid XML SVGs
const svg1_coulomb = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <radialGradient id="qGoldGlow1" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#EAB308"/>
    </radialGradient>
    <marker id="mRed1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGreen1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#76FF03"/>
    </marker>
    <marker id="mYellow1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FFD700"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. COULOMB'S LAW (VECTOR FORM)</text>

    <circle cx="65" cy="400" r="5" fill="#94A3B8"/>
    <text x="45" y="425" fill="#94A3B8" font-family="sans-serif" font-size="14" font-weight="bold">O (Origin)</text>

    <circle cx="170" cy="140" r="22" fill="url(#qRedGlow1)" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="170" y="146" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">q1</text>

    <circle cx="340" cy="270" r="22" fill="url(#qCyanGlow1)" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="340" y="276" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">q2</text>

    <line x1="65" y1="400" x2="155" y2="158" stroke="#94A3B8" stroke-width="2.5" marker-end="url(#mYellow1)"/>
    <text x="90" y="270" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">r1</text>

    <line x1="65" y1="400" x2="322" y2="282" stroke="#94A3B8" stroke-width="2.5" marker-end="url(#mYellow1)"/>
    <text x="200" y="365" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">r2</text>

    <line x1="170" y1="140" x2="322" y2="256" stroke="#00E5FF" stroke-width="3" marker-end="url(#mCyan1)"/>
    <text x="270" y="195" fill="#00E5FF" font-family="sans-serif" font-size="15.5" font-weight="bold">r21 = r2 - r1</text>

    <line x1="170" y1="140" x2="90" y2="80" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed1)"/>
    <text x="140" y="75" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">F12 = -F21</text>

    <line x1="340" y1="270" x2="415" y2="330" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed1)"/>
    <text x="365" y="355" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">F21</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 1.1: Coulomb's Law in Vector Form</text>
  </g>

  <line x1="460" y1="25" x2="460" y2="495" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(470, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">SUPERPOSITION PRINCIPLE</text>

    <circle cx="180" cy="250" r="22" fill="url(#qGoldGlow1)" stroke="#FFFFFF" stroke-width="1.8"/>
    <text x="180" y="256" text-anchor="middle" fill="#0B0F19" font-family="sans-serif" font-size="15" font-weight="bold">+q0</text>

    <circle cx="150" cy="90" r="18" fill="url(#qRedGlow1)"/>
    <text x="150" y="95" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">q1</text>

    <circle cx="65" cy="380" r="18" fill="url(#qCyanGlow1)"/>
    <text x="65" y="385" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">q2</text>

    <circle cx="340" cy="380" r="18" fill="url(#qCyanGlow1)"/>
    <text x="340" y="385" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">q3</text>

    <line x1="180" y1="250" x2="200" y2="350" stroke="#76FF03" stroke-width="2.5" marker-end="url(#mGreen1)"/>
    <text x="160" y="335" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">F1</text>

    <line x1="180" y1="250" x2="270" y2="150" stroke="#76FF03" stroke-width="2.5" marker-end="url(#mGreen1)"/>
    <text x="220" y="180" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">F2</text>

    <line x1="180" y1="250" x2="90" y2="160" stroke="#76FF03" stroke-width="2.5" marker-end="url(#mGreen1)"/>
    <text x="110" y="200" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">F3</text>

    <line x1="270" y1="150" x2="350" y2="150" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="4,4"/>
    <line x1="180" y1="250" x2="350" y2="150" stroke="#FF512F" stroke-width="3.5" marker-end="url(#mRed1)"/>
    <text x="315" y="125" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">F_net = Sum Fi</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 1.2: Superposition Principle</text>
  </g>
</svg>`;

const svg2_field_lines = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow2" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow2" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="mRed2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGold2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FFD700"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="890" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="445" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">2. ELECTRIC FIELD PATTERNS &amp; FIELD LINES</text>

    <!-- Sub 1: Isolated +q -->
    <g transform="translate(15, 55)">
      <rect x="0" y="0" width="200" height="410" rx="10" fill="rgba(255,81,47,0.06)" stroke="#FF512F" stroke-width="1.2"/>
      <text x="100" y="32" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">Isolated +q</text>
      <circle cx="100" cy="200" r="22" fill="url(#qRedGlow2)" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="100" y="207" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="bold">+</text>

      <line x1="100" y1="178" x2="100" y2="85" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed2)"/>
      <line x1="100" y1="222" x2="100" y2="315" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed2)"/>
      <line x1="78" y1="200" x2="15" y2="200" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed2)"/>
      <line x1="122" y1="200" x2="185" y2="200" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed2)"/>

      <line x1="84" y1="184" x2="30" y2="130" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed2)"/>
      <line x1="116" y1="216" x2="170" y2="270" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed2)"/>
      <line x1="116" y1="184" x2="170" y2="130" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed2)"/>
      <line x1="84" y1="216" x2="30" y2="270" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed2)"/>

      <text x="100" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Radially Outward</text>
    </g>

    <!-- Sub 2: Isolated -q -->
    <g transform="translate(230, 55)">
      <rect x="0" y="0" width="200" height="410" rx="10" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-width="1.2"/>
      <text x="100" y="32" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">Isolated -q</text>
      <circle cx="100" cy="200" r="22" fill="url(#qCyanGlow2)" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="100" y="207" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="24" font-weight="bold">-</text>

      <line x1="100" y1="85" x2="100" y2="178" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="100" y1="315" x2="100" y2="222" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="15" y1="200" x2="78" y2="200" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="185" y1="200" x2="122" y2="200" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>

      <line x1="30" y1="130" x2="84" y2="184" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="170" y1="270" x2="116" y2="216" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="170" y1="130" x2="116" y2="184" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="30" y1="270" x2="84" y2="216" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>

      <text x="100" y="375" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Radially Inward</text>
    </g>

    <!-- Sub 3: Electric Dipole -->
    <g transform="translate(445, 55)">
      <rect x="0" y="0" width="210" height="410" rx="10" fill="rgba(255,215,0,0.06)" stroke="#FFD700" stroke-width="1.2"/>
      <text x="105" y="32" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">Electric Dipole</text>
      <circle cx="55" cy="200" r="18" fill="url(#qRedGlow2)" stroke="#FFFFFF" stroke-width="1.2"/>
      <text x="55" y="206" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+</text>

      <circle cx="155" cy="200" r="18" fill="url(#qCyanGlow2)" stroke="#FFFFFF" stroke-width="1.2"/>
      <text x="155" y="206" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">-</text>

      <line x1="73" y1="200" x2="137" y2="200" stroke="#FFD700" stroke-width="2.5" marker-end="url(#mGold2)"/>
      <path d="M 55 182 Q 105 125 155 182" fill="none" stroke="#FFD700" stroke-width="2.2"/>
      <path d="M 55 218 Q 105 275 155 218" fill="none" stroke="#FFD700" stroke-width="2.2"/>
      <path d="M 55 182 Q 105 75 155 182" fill="none" stroke="#FFD700" stroke-width="1.8"/>
      <path d="M 55 218 Q 105 325 155 218" fill="none" stroke="#FFD700" stroke-width="1.8"/>

      <text x="105" y="375" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Curved + to -</text>
    </g>

    <!-- Sub 4: Like Charges -->
    <g transform="translate(670, 55)">
      <rect x="0" y="0" width="205" height="410" rx="10" fill="rgba(118,255,3,0.06)" stroke="#76FF03" stroke-width="1.2"/>
      <text x="102" y="32" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Like Charges</text>
      <circle cx="50" cy="200" r="18" fill="url(#qRedGlow2)" stroke="#FFFFFF" stroke-width="1.2"/>
      <text x="50" y="206" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+</text>

      <circle cx="155" cy="200" r="18" fill="url(#qRedGlow2)" stroke="#FFFFFF" stroke-width="1.2"/>
      <text x="155" y="206" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+</text>

      <path d="M 50 182 Q 80 140 85 85" fill="none" stroke="#76FF03" stroke-width="2"/>
      <path d="M 50 218 Q 80 260 85 315" fill="none" stroke="#76FF03" stroke-width="2"/>
      <path d="M 155 182 Q 125 140 120 85" fill="none" stroke="#76FF03" stroke-width="2"/>
      <path d="M 155 218 Q 125 260 120 315" fill="none" stroke="#76FF03" stroke-width="2"/>

      <circle cx="102" cy="200" r="6" fill="#76FF03"/>
      <text x="102" y="185" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">N</text>
      <text x="102" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Neutral Point (E = 0)</text>
    </g>
  </g>
</svg>`;

const svg3_dipole = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow3" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow3" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="mRed3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGreen3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#76FF03"/>
    </marker>
    <marker id="mGold3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FFD700"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">3. ELECTRIC DIPOLE (AXIAL POINT)</text>

    <line x1="20" y1="230" x2="410" y2="230" stroke="#475569" stroke-width="2" stroke-dasharray="5,5"/>

    <circle cx="85" cy="230" r="18" fill="url(#qCyanGlow3)" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="85" y="236" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">-q</text>

    <circle cx="195" cy="230" r="18" fill="url(#qRedGlow3)" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="195" y="236" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">+q</text>

    <circle cx="140" cy="230" r="4.5" fill="#FFD700"/>
    <text x="140" y="255" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">O</text>

    <line x1="85" y1="275" x2="195" y2="275" stroke="#94A3B8" stroke-width="2"/>
    <line x1="85" y1="270" x2="85" y2="280" stroke="#94A3B8" stroke-width="2"/>
    <line x1="195" y1="270" x2="195" y2="280" stroke="#94A3B8" stroke-width="2"/>
    <text x="140" y="295" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="14.5" font-weight="bold">2a</text>

    <line x1="95" y1="175" x2="185" y2="175" stroke="#FFD700" stroke-width="3" marker-end="url(#mGold3)"/>
    <text x="140" y="165" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">p (vector)</text>

    <line x1="140" y1="330" x2="360" y2="330" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="250" y="355" text-anchor="middle" fill="#38BDF8" font-family="sans-serif" font-size="15" font-weight="bold">Distance r</text>

    <circle cx="360" cy="230" r="7" fill="#76FF03"/>
    <text x="360" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">P</text>

    <line x1="360" y1="230" x2="420" y2="230" stroke="#76FF03" stroke-width="3.5" marker-end="url(#mGreen3)"/>
    <text x="360" y="180" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">E_axial || p</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 3.1: Field at Axial Point (r &gt;&gt; a)</text>
  </g>

  <line x1="460" y1="25" x2="460" y2="495" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(470, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">EQUATORIAL POINT RESOLUTION</text>

    <line x1="60" y1="360" x2="240" y2="360" stroke="#475569" stroke-width="2"/>
    <circle cx="80" cy="360" r="16" fill="url(#qCyanGlow3)"/>
    <text x="80" y="365" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">-q</text>

    <circle cx="220" cy="360" r="16" fill="url(#qRedGlow3)"/>
    <text x="220" y="365" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">+q</text>

    <line x1="95" y1="330" x2="205" y2="330" stroke="#FFD700" stroke-width="2.5" marker-end="url(#mGold3)"/>
    <text x="150" y="320" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">p</text>

    <g transform="translate(180, 200)">
      <line x1="0" y1="0" x2="-80" y2="-80" stroke="#38BDF8" stroke-width="2.5" marker-end="url(#mCyan3)"/>
      <text x="-95" y="-90" fill="#38BDF8" font-family="sans-serif" font-size="15" font-weight="bold">q cos &#952;</text>

      <line x1="0" y1="0" x2="80" y2="-80" stroke="#38BDF8" stroke-width="2.5" marker-end="url(#mCyan3)"/>
      <text x="50" y="-90" fill="#38BDF8" font-family="sans-serif" font-size="15" font-weight="bold">E_equal</text>

      <path d="M 0 -30 A 30 30 0 0 0 -22 -22" fill="none" stroke="#FFD700" stroke-width="2"/>
      <text x="-15" y="-40" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">&#952;</text>

      <path d="M 0 -30 A 30 30 0 0 1 22 -22" fill="none" stroke="#FFD700" stroke-width="2"/>
      <text x="15" y="-40" fill="#FFD700" font-family="sans-serif" font-size="14" font-weight="bold">&#952;</text>

      <line x1="0" y1="0" x2="-120" y2="0" stroke="#FF512F" stroke-width="3.8" marker-end="url(#mRed3)"/>
      <text x="-60" y="25" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="15.5" font-weight="bold">q cos &#952;</text>

      <circle cx="0" cy="0" r="5" fill="#76FF03"/>
      <text x="15" y="15" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">O</text>
    </g>

    <rect x="230" y="380" width="180" height="40" rx="8" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="320" y="406" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15.5" font-weight="bold">E_equatorial || -p</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 3.2: Field at Equatorial Point (r &gt;&gt; a)</text>
  </g>
</svg>`;

const svg4_torque_flux = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow4" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow4" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="mRed4" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan4" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGreen4" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">4. TORQUE ON A DIPOLE</text>

    <line x1="30" y1="100" x2="400" y2="100" stroke="#00E5FF" stroke-width="2" marker-end="url(#mCyan4)"/>
    <line x1="30" y1="170" x2="400" y2="170" stroke="#00E5FF" stroke-width="2" marker-end="url(#mCyan4)"/>
    <line x1="30" y1="240" x2="400" y2="240" stroke="#00E5FF" stroke-width="2" marker-end="url(#mCyan4)"/>
    <line x1="30" y1="310" x2="400" y2="310" stroke="#00E5FF" stroke-width="2" marker-end="url(#mCyan4)"/>
    <line x1="30" y1="380" x2="400" y2="380" stroke="#00E5FF" stroke-width="2" marker-end="url(#mCyan4)"/>
    <text x="385" y="85" fill="#00E5FF" font-family="sans-serif" font-size="18" font-weight="bold">E (Field)</text>

    <line x1="120" y1="320" x2="280" y2="160" stroke="#FFD700" stroke-width="3.5"/>

    <circle cx="120" cy="320" r="18" fill="url(#qCyanGlow4)" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="120" y="326" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">-q</text>

    <circle cx="280" cy="160" r="18" fill="url(#qRedGlow4)" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="280" y="166" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">+q</text>

    <path d="M 170 320 A 50 50 0 0 0 160 280" fill="none" stroke="#FFD700" stroke-width="2"/>
    <text x="180" y="305" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">&#952;</text>

    <line x1="280" y1="160" x2="365" y2="160" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen4)"/>
    <text x="330" y="145" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">+qE</text>

    <line x1="120" y1="320" x2="35" y2="320" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen4)"/>
    <text x="45" y="345" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">-qE</text>

    <line x1="280" y1="160" x2="280" y2="320" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="120" y1="320" x2="280" y2="320" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="295" y="245" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">2a sin &#952;</text>

    <text x="217" y="420" text-anchor="middle" fill="#FF512F" font-family="monospace" font-size="16.5" font-weight="bold">&#964; = p &times; E | &#964; = p E sin &#952;</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 4.1: Torque on a Dipole in Uniform Field</text>
  </g>

  <line x1="460" y1="25" x2="460" y2="495" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(470, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">ELECTRIC FLUX (Phi_E)</text>

    <path d="M 50 160 Q 200 190 380 120" fill="none" stroke="#00E5FF" stroke-width="2.2" marker-end="url(#mCyan4)"/>
    <path d="M 50 210 Q 200 230 380 200" fill="none" stroke="#00E5FF" stroke-width="2.2" marker-end="url(#mCyan4)"/>
    <path d="M 50 260 Q 200 260 380 270" fill="none" stroke="#00E5FF" stroke-width="2.2" marker-end="url(#mCyan4)"/>
    <path d="M 50 310 Q 200 290 380 340" fill="none" stroke="#00E5FF" stroke-width="2.2" marker-end="url(#mCyan4)"/>
    <text x="390" y="115" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">E (Lines)</text>

    <polygon points="170,170 250,140 275,300 195,330" fill="rgba(255,81,47,0.35)" stroke="#FF512F" stroke-width="2.5"/>

    <line x1="222" y1="235" x2="315" y2="185" stroke="#76FF03" stroke-width="3.5" marker-end="url(#mGreen4)"/>
    <text x="325" y="180" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">dA</text>

    <path d="M 265 210 A 25 25 0 0 0 275 228" fill="none" stroke="#FFD700" stroke-width="2.2"/>
    <text x="285" y="235" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">&#952;</text>

    <rect x="40" y="380" width="355" height="50" rx="8" fill="rgba(255,215,0,0.12)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="217" y="412" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">Formula: &#934;_E = &#8747; E &middot; dA = &#8747; E dA cos &#952;</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 4.2: Electric Flux</text>
  </g>
</svg>`;

const svg5_gauss_shell = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow5" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <marker id="mRed5" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan5" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGreen5" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">5. GAUSS'S THEOREM (LONG WIRE)</text>

    <line x1="40" y1="210" x2="395" y2="210" stroke="#FF512F" stroke-width="6"/>
    <circle cx="80" cy="210" r="3.5" fill="#FFFFFF"/>
    <circle cx="160" cy="210" r="3.5" fill="#FFFFFF"/>
    <circle cx="240" cy="210" r="3.5" fill="#FFFFFF"/>
    <circle cx="320" cy="210" r="3.5" fill="#FFFFFF"/>
    <text x="390" y="235" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+&#955;</text>

    <ellipse cx="100" cy="210" rx="20" ry="60" fill="none" stroke="#00E5FF" stroke-width="2" stroke-dasharray="4,4"/>
    <ellipse cx="320" cy="210" rx="20" ry="60" fill="none" stroke="#00E5FF" stroke-width="2"/>
    <line x1="100" y1="150" x2="320" y2="150" stroke="#00E5FF" stroke-width="2"/>
    <line x1="100" y1="270" x2="320" y2="270" stroke="#00E5FF" stroke-width="2"/>

    <line x1="100" y1="300" x2="320" y2="300" stroke="#94A3B8" stroke-width="2"/>
    <line x1="100" y1="295" x2="100" y2="305" stroke="#94A3B8" stroke-width="2"/>
    <line x1="320" y1="295" x2="320" y2="305" stroke="#94A3B8" stroke-width="2"/>
    <text x="210" y="325" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="15" font-weight="bold">Length L</text>

    <line x1="100" y1="210" x2="100" y2="150" stroke="#FFD700" stroke-width="2"/>
    <text x="80" y="185" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">r</text>

    <line x1="210" y1="150" x2="210" y2="85" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen5)"/>
    <text x="210" y="70" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">E || dA</text>

    <text x="217" y="375" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">E || dA only on curved surface</text>
    <text x="217" y="410" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="17" font-weight="bold">E = &#955; / (2&#960;&#949;0 r)</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 5.1: Long Wire (&#955;)</text>
  </g>

  <line x1="460" y1="25" x2="460" y2="495" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(470, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">SPHERICAL SHELL (r &gt; R &amp; r &lt; R)</text>

    <circle cx="217" cy="205" r="95" fill="none" stroke="#FF512F" stroke-width="4"/>
    <circle cx="217" cy="205" r="85" fill="rgba(255,81,47,0.06)" stroke="#FF512F" stroke-width="1.5"/>

    <text x="217" y="118" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">+++++ Charged Shell (Q) +++++</text>

    <line x1="217" y1="205" x2="285" y2="145" stroke="#FFD700" stroke-width="2"/>
    <text x="260" y="185" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">R</text>

    <circle cx="217" cy="205" r="50" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.8" stroke-dasharray="4,4"/>
    <line x1="217" y1="205" x2="180" y2="170" stroke="#76FF03" stroke-width="1.8"/>
    <text x="190" y="195" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">r</text>
    <text x="217" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">E_in = 0</text>
    <text x="217" y="230" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13">(q_enclosed = 0)</text>

    <circle cx="217" cy="205" r="130" fill="none" stroke="#00E5FF" stroke-width="1.8" stroke-dasharray="5,5"/>

    <text x="217" y="375" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="16" font-weight="bold">E_out = [ 1 / (4&#960;&#949;0) ] (Q / r&#178;)</text>
    <text x="217" y="410" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16" font-weight="bold">E_in = 0 (Inside Shell)</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 5.2: Spherical Shell (r &gt; R and r &lt; R)</text>
  </g>
</svg>`;

// Fig 6: Equipotential Surfaces & Point Charge Potential
const svg6_potential_equipotential = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow6" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <marker id="mCyan6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- Left: Point Charge Equipotential Surfaces -->
  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">6. EQUIPOTENTIAL SURFACES (POINT +q)</text>

    <!-- Concentric Spherical Equipotential Shells -->
    <circle cx="217" cy="230" r="140" fill="rgba(0,229,255,0.03)" stroke="#00E5FF" stroke-width="1.5" stroke-dasharray="5,5"/>
    <text x="217" y="80" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">V3 = 10 V</text>

    <circle cx="217" cy="230" r="95" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-width="1.8" stroke-dasharray="5,5"/>
    <text x="217" y="125" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">V2 = 20 V</text>

    <circle cx="217" cy="230" r="50" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="2.2" stroke-dasharray="5,5"/>
    <text x="217" y="170" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">V1 = 40 V</text>

    <!-- Central Point Charge +q -->
    <circle cx="217" cy="230" r="22" fill="url(#qRedGlow6)" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="217" y="236" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+q</text>

    <!-- Electric Field Lines perpendicular to Equipotentials -->
    <line x1="217" y1="205" x2="217" y2="70" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <line x1="217" y1="255" x2="217" y2="390" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <line x1="192" y1="230" x2="55" y2="230" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <line x1="242" y1="230" x2="380" y2="230" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>

    <text x="217" y="415" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">E is always Normal to Equipotential Surface</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 6.1: Concentric Equipotential Spheres</text>
  </g>

  <line x1="460" y1="25" x2="460" y2="495" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right: Equipotential Planes in Uniform Electric Field -->
  <g transform="translate(470, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">EQUIPOTENTIALS IN UNIFORM FIELD</text>

    <!-- Uniform Horizontal Field Lines -->
    <line x1="30" y1="120" x2="400" y2="120" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed1)"/>
    <line x1="30" y1="210" x2="400" y2="210" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed1)"/>
    <line x1="30" y1="300" x2="400" y2="300" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed1)"/>
    <text x="385" y="105" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">E (Field)</text>

    <!-- 3 Equipotential Planes (Isometric) -->
    <polygon points="100,80 140,60 140,360 100,380" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="2"/>
    <text x="120" y="405" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">V1 = 60V</text>

    <polygon points="200,80 240,60 240,360 200,380" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="2"/>
    <text x="220" y="405" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">V2 = 40V</text>

    <polygon points="300,80 340,60 340,360 300,380" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="2"/>
    <text x="320" y="405" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">V3 = 20V</text>

    <text x="217" y="435" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="15" font-weight="bold">E = -dV / dr (Potential Decreases along E)</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 6.2: Equipotential Planes in Uniform Field</text>
  </g>
</svg>`;

// Fig 7: Parallel Plate Capacitor with Dielectric Slab & Combinations
const svg7_capacitors_combinations = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow7" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow7" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="mGreen7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <!-- Left: Parallel Plate Capacitor with Dielectric Slab -->
  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">7. PARALLEL PLATE CAPACITOR (DIELECTRIC)</text>

    <!-- Positive Plate (+Q, +sigma) -->
    <rect x="65" y="80" width="18" height="280" rx="4" fill="#FF512F"/>
    <text x="74" y="65" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">+Q (+&#963;)</text>

    <!-- Negative Plate (-Q, -sigma) -->
    <rect x="350" y="80" width="18" height="280" rx="4" fill="#00E5FF"/>
    <text x="359" y="65" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">-Q (-&#963;)</text>

    <!-- Dielectric Slab (K, thickness t) -->
    <rect x="150" y="80" width="135" height="280" rx="4" fill="rgba(255,215,0,0.18)" stroke="#FFD700" stroke-width="2"/>
    <text x="217" y="210" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">Dielectric (K)</text>
    <text x="217" y="235" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5">Thickness t</text>

    <!-- Polarized Induced Charges on Dielectric -->
    <text x="165" y="150" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">-&#963;p</text>
    <text x="165" y="220" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">-&#963;p</text>
    <text x="165" y="290" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">-&#963;p</text>

    <text x="260" y="150" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">+&#963;p</text>
    <text x="260" y="220" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">+&#963;p</text>
    <text x="260" y="290" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">+&#963;p</text>

    <!-- Distance d Bracket -->
    <line x1="65" y1="385" x2="368" y2="385" stroke="#94A3B8" stroke-width="2"/>
    <line x1="65" y1="380" x2="65" y2="390" stroke="#94A3B8" stroke-width="2"/>
    <line x1="368" y1="380" x2="368" y2="390" stroke="#94A3B8" stroke-width="2"/>
    <text x="217" y="405" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="15" font-weight="bold">Distance d</text>

    <text x="217" y="430" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">C = &#949;0 A / (d - t + t/K)</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 7.1: Parallel Plate Capacitor with Dielectric</text>
  </g>

  <line x1="460" y1="25" x2="460" y2="495" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Right: Series and Parallel Capacitor Circuits -->
  <g transform="translate(470, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">COMBINATIONS OF CAPACITORS</text>

    <!-- Top: Series Circuit -->
    <rect x="20" y="60" width="395" height="175" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
    <text x="35" y="85" fill="#FFD700" font-family="sans-serif" font-size="15.5" font-weight="bold">Series: Q is Same, V = V1 + V2 + V3</text>

    <!-- C1, C2, C3 symbols -->
    <line x1="40" y1="130" x2="110" y2="130" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="110" y1="105" x2="110" y2="155" stroke="#00E5FF" stroke-width="3.5"/>
    <line x1="125" y1="105" x2="125" y2="155" stroke="#00E5FF" stroke-width="3.5"/>
    <text x="117" y="100" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">C1</text>

    <line x1="125" y1="130" x2="200" y2="130" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="200" y1="105" x2="200" y2="155" stroke="#00E5FF" stroke-width="3.5"/>
    <line x1="215" y1="105" x2="215" y2="155" stroke="#00E5FF" stroke-width="3.5"/>
    <text x="207" y="100" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">C2</text>

    <line x1="215" y1="130" x2="290" y2="130" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="290" y1="105" x2="290" y2="155" stroke="#00E5FF" stroke-width="3.5"/>
    <line x1="305" y1="105" x2="305" y2="155" stroke="#00E5FF" stroke-width="3.5"/>
    <text x="297" y="100" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">C3</text>
    <line x1="305" y1="130" x2="385" y2="130" stroke="#FFFFFF" stroke-width="2.5"/>

    <text x="217" y="195" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">1 / Cs = 1/C1 + 1/C2 + 1/C3</text>

    <!-- Bottom: Parallel Circuit -->
    <rect x="20" y="250" width="395" height="180" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
    <text x="35" y="275" fill="#FFD700" font-family="sans-serif" font-size="15.5" font-weight="bold">Parallel: V is Same, Q = Q1 + Q2</text>

    <!-- Parallel Branches -->
    <line x1="50" y1="350" x2="110" y2="350" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="110" y1="305" x2="110" y2="395" stroke="#FFFFFF" stroke-width="2.5"/>

    <!-- Branch 1 (Top) -->
    <line x1="110" y1="315" x2="190" y2="315" stroke="#FFFFFF" stroke-width="2"/>
    <line x1="190" y1="295" x2="190" y2="335" stroke="#FF512F" stroke-width="3.5"/>
    <line x1="205" y1="295" x2="205" y2="335" stroke="#FF512F" stroke-width="3.5"/>
    <text x="197" y="290" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">C1</text>
    <line x1="205" y1="315" x2="285" y2="315" stroke="#FFFFFF" stroke-width="2"/>

    <!-- Branch 2 (Bottom) -->
    <line x1="110" y1="385" x2="190" y2="385" stroke="#FFFFFF" stroke-width="2"/>
    <line x1="190" y1="365" x2="190" y2="405" stroke="#FF512F" stroke-width="3.5"/>
    <line x1="205" y1="365" x2="205" y2="405" stroke="#FF512F" stroke-width="3.5"/>
    <text x="197" y="360" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">C2</text>
    <line x1="205" y1="385" x2="285" y2="385" stroke="#FFFFFF" stroke-width="2"/>

    <line x1="285" y1="305" x2="285" y2="395" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="285" y1="350" x2="380" y2="350" stroke="#FFFFFF" stroke-width="2.5"/>

    <text x="217" y="420" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">Cp = C1 + C2 + C3</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 7.2: Series &amp; Parallel Capacitor Circuits</text>
  </g>
</svg>`;

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

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for JKBOSE / NCERT Unit I: Electrostatics (09 Marks)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Electric Charge (q):</b>
        <span style="color: #FFFFFF;">Fundamental scalar property of matter giving rise to electrostatic attraction/repulsion [Coulomb C]. Quantization: q = &plusmn;n e.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Coulomb's Law:</b>
        <span style="color: #FFFFFF;">Electrostatic force F = [1/(4&pi;&epsilon;<sub>0</sub>)] (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>), acting along the line joining stationary charges.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Electric Field (<b>E</b>):</b>
        <span style="color: #FFFFFF;">Force experienced per unit positive test charge: <b>E</b> = <b>F</b> / q<sub>0</sub> [N C<sup>-1</sup> or V m<sup>-1</sup>].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Electric Dipole Moment (<b>p</b>):</b>
        <span style="color: #FFFFFF;">Vector <b>p</b> = q (2<b>a</b>) directed from -q to +q [C m]. Torque: <b>&tau;</b> = <b>p</b> &times; <b>E</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Electric Flux (&Phi;<sub>E</sub>):</b>
        <span style="color: #FFFFFF;">Total field lines passing normally through a surface: &Phi;<sub>E</sub> = &int;&int; <b>E</b> &sdot; d<b>A</b> [N m<sup>2</sup> C<sup>-1</sup>].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Gauss's Law:</b>
        <span style="color: #FFFFFF;">Total enclosed electric flux equals &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Electric Potential (V):</b>
        <span style="color: #FFFFFF;">Work done in bringing unit positive test charge from infinity to a point: V = W / q<sub>0</sub> [Volt V = J C<sup>-1</sup>].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Equipotential Surface:</b>
        <span style="color: #FFFFFF;">A locus of points having the same electric potential throughout (Work done moving charge on surface W = 0).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>9. Potential Energy (U):</b>
        <span style="color: #FFFFFF;">Work done assembling a system of charges: U = [1/(4&pi;&epsilon;<sub>0</sub>)] (q<sub>1</sub> q<sub>2</sub> / r). Dipole energy: U = -<b>p</b> &sdot; <b>E</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>10. Dielectric Polarization (<b>P</b>):</b>
        <span style="color: #FFFFFF;">Induced dipole moment per unit volume in an insulating medium under external field: <b>P</b> = &chi;<sub>e</sub> &epsilon;<sub>0</sub> <b>E</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>11. Capacitance (C):</b>
        <span style="color: #FFFFFF;">Ability of a conductor to store electric charge: C = Q / V [Farad F]. Parallel plate: C = &epsilon;<sub>0</sub> A / d.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>12. Energy Stored in Capacitor:</b>
        <span style="color: #FFFFFF;">Electrostatic energy stored in electric field between plates: U = 1/2 C V<sup>2</sup> = Q<sup>2</sup> / (2C).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Electric Charges &amp; Quantization of Charge</h2>
  ${defBox("Electric Charge", "Electric charge is an intrinsic scalar physical property of fundamental subatomic particles of matter (electrons and protons) that causes them to experience an attractive or repulsive electromagnetic force when placed within electric or magnetic fields.")}
  <p>Electrostatics is the branch of physics that studies electric charges at rest, the forces between them, their fields, and potentials. Fundamental particles carry invariant charges: an electron carries -e = -1.602 &times; 10<sup>-19</sup> C, while a proton carries +e = +1.602 &times; 10<sup>-19</sup> C.</p>
  <p><b>Additivity of Charges:</b> Total charge of a physical system containing point charges q<sub>1</sub>, q<sub>2</sub>, ..., q<sub>n</sub> is the algebraic scalar sum: Q<sub>total</sub> = q<sub>1</sub> + q<sub>2</sub> + ... + q<sub>n</sub>.</p>
  ${defBox("Quantization of Charge", "The Principle of Quantization of Charge asserts that the total electric charge possessed by any physical body is always an integral multiple of a basic quantum unit of charge e: q = &plusmn;n e (where n = 1, 2, 3, ...).")}
  ${eqBox("<b>Quantization: q = &plusmn; n e &nbsp;|&nbsp; e = 1.602 &times; 10<sup>-19</sup> C &nbsp;|&nbsp; 1 C = 6.25 &times; 10<sup>18</sup> electrons</b>")}

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Conservation of Charge</h2>
  ${defBox("Law of Conservation of Charge", "The Law of Conservation of Charge states that the net algebraic electric charge of an isolated physical system remains strictly constant over time, regardless of any physical, chemical, or nuclear transformations taking place within the system.")}
  <p>Charge can neither be created nor destroyed in isolation. Prominent examples include pair production (&gamma; &rarr; e<sup>-</sup> + e<sup>+</sup>, initial = 0, final = 0) and radioactive alpha decay of Uranium-238 (<sup>238</sup><sub>92</sub>U &rarr; <sup>234</sup><sub>90</sub>Th + <sup>4</sup><sub>2</sub>He, initial = +92e, final = 90e + 2e = +92e).</p>

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Coulomb's Law, Superposition Principle &amp; Continuous Charge Distribution</h2>
  ${defBox("Coulomb's Law", "Coulomb's Law states that the electrostatic force between two stationary point charges is directly proportional to the product of charge magnitudes and inversely proportional to the square of the distance between them, acting along the line joining them.")}
  ${eqBox("<b>F = " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " " + frac("q<sub>1</sub> q<sub>2</sub>", "r<sup>2</sup>") + " &nbsp;|&nbsp; " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " = 8.9875 &times; 10<sup>9</sup> N m<sup>2</sup> C<sup>-2</sup></b>")}
  <p>Here <b>&epsilon;<sub>0</sub> = 8.854 &times; 10<sup>-12</sup> C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup></b> is the absolute permittivity of free space. In a dielectric medium with constant K, the force reduces to F<sub>med</sub> = F<sub>vac</sub> / K.</p>
  ${defBox("Principle of Superposition", "When multiple point charges interact, the net electrostatic force acting on any given charge is the vector sum of individual Coulomb forces exerted on it by all other charges taken one at a time.")}
  ${svg3DCardWrapper("1. COULOMB'S LAW & SUPERPOSITION PRINCIPLE", "Fig 1.1: Coulomb's Law in Vector Form (F<sub>12</sub> = -F<sub>21</sub>) & Fig 1.2: Superposition Principle (F<sub>net</sub> = &Sigma; F<sub>i</sub>).", svg1_coulomb)}

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Electric Field, Field Lines &amp; Dipole Fields (Axial &amp; Equatorial)</h2>
  ${defBox("Electric Field & Field Lines", "Electric Field <b>E</b> is the force experienced per unit positive test charge (<b>E</b> = <b>F</b> / q<sub>0</sub>). An electric field line is a smooth continuous curve whose tangent at any point indicates the direction of net electric field at that point.")}
  <p><b>Key Properties:</b> Field lines originate from + charges and terminate on - charges; they never intersect (otherwise two directions would exist at intersection); and they do not form closed loops (electrostatic field is conservative).</p>
  ${svg3DCardWrapper("2. ELECTRIC FIELD PATTERNS & FIELD LINES", "Field patterns for Isolated +q (Outwards), Isolated -q (Inwards), Electric Dipole (+ to -), and Like Charges (+ and +, Neutral point N).", svg2_field_lines)}

  ${defBox("Electric Dipole Moment (<b>p</b>)", "An Electric Dipole consists of two equal and opposite point charges (+q and -q) separated by distance 2a. Dipole Moment vector <b>p</b> = q (2<b>a</b>), directed from -q to +q [C m].")}
  <p>For a short dipole (r >> a):</p>
  ${eqBox("<b>E<sub>axial</sub> = " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " " + frac("2 p", "r<sup>3</sup>") + " &nbsp; (Parallel to <b>p</b>) &nbsp;|&nbsp; E<sub>eq</sub> = " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " " + frac("p", "r<sup>3</sup>") + " &nbsp; (Anti-parallel to <b>p</b>)</b>")}
  ${svg3DCardWrapper("3. ELECTRIC DIPOLE (AXIAL & EQUATORIAL)", "Fig 3.1: Axial Point P (E<sub>axial</sub> || <b>p</b>) & Fig 3.2: Equatorial Point Q (E<sub>eq</sub> || -<b>p</b>). Ratio E<sub>axial</sub> / E<sub>eq</sub> = 2 : 1.", svg3_dipole)}

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Torque on a Dipole &amp; Electric Flux</h2>
  ${defBox("Torque on Dipole (<b>&tau;</b>)", "When placed in a uniform electric field <b>E</b> at angle &theta;, the equal and opposite forces &plusmn;q <b>E</b> exert a couple producing torque: <b>&tau;</b> = <b>p</b> &times; <b>E</b>, magnitude &tau; = p E sin &theta; [N m].")}
  ${defBox("Electric Flux (&Phi;<sub>E</sub>)", "Electric Flux through a surface is the total number of field lines passing normally through it: &Phi;<sub>E</sub> = &int;&int; <b>E</b> &sdot; d<b>A</b> = &int;&int; E dA cos &theta; [N m<sup>2</sup> C<sup>-1</sup>].")}
  ${svg3DCardWrapper("4. TORQUE & ELECTRIC FLUX", "Fig 4.1: Torque on Dipole in Uniform Field (<b>&tau;</b> = <b>p</b> &times; <b>E</b>) & Fig 4.2: Electric Flux (&Phi;<sub>E</sub> = &oint; <b>E</b> &sdot; d<b>A</b>).", svg4_torque_flux)}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Gauss's Theorem &amp; Applications</h2>
  ${defBox("Gauss's Theorem", "The total electric flux &Phi;<sub>E</sub> through any closed 3D Gaussian surface equals 1/&epsilon;<sub>0</sub> times net enclosed charge: &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>.")}
  <p><b>Applications:</b></p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>(i) Infinite Straight Wire:</b> E = &lambda; / (2&pi; &epsilon;<sub>0</sub> r) (radial).</li>
    <li><b>(ii) Infinite Plane Sheet:</b> E = &sigma; / (2&epsilon;<sub>0</sub>) (uniform, independent of distance).</li>
    <li><b>(iii) Thin Spherical Shell:</b> Outside (r &ge; R): E<sub>out</sub> = Q / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>); Inside (r &lt; R): E<sub>in</sub> = 0.</li>
  </ul>
  ${svg3DCardWrapper("5. GAUSS'S THEOREM APPLICATIONS", "Fig 5.1: Long Wire E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r) & Fig 5.2: Spherical Shell E<sub>out</sub> = Q / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>), E<sub>in</sub> = 0.", svg5_gauss_shell)}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Electric Potential &amp; Potential Difference</h2>
  ${defBox("Electric Potential (V) & Potential Difference (&Delta;V)", "Electric Potential V at a point in an electrostatic field is defined as the work done per unit positive test charge by an external force in moving it from infinity to that point against electrostatic forces: V = W<sub>&infin;&rarr;P</sub> / q<sub>0</sub> [Volt V = J C<sup>-1</sup>]. Potential difference &Delta;V = V<sub>B</sub> - V<sub>A</sub> = W<sub>A&rarr;B</sub> / q<sub>0</sub> = -&int;<sub>A</sub><sup>B</sup> <b>E</b> &sdot; d<b>l</b>.")}
  <p>Electric potential is a <b>scalar physical quantity</b>. Since electrostatic force is conservative, the work done in moving a charge between two points is completely independent of the path taken.</p>
  ${eqBox("<b>Relation Between E and V: E = - " + frac("dV", "dr") + " &nbsp; (Electric field is negative gradient of potential)</b>")}

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Potential due to a Point Charge, Dipole &amp; System of Charges</h2>
  ${defBox("Potential due to Point Charge Q", "Electric potential at a distance r from an isolated point charge Q in vacuum is: V = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / r).")}
  <p><b>Potential due to an Electric Dipole:</b> At an arbitrary point (r, &theta;):</p>
  ${eqBox("<b>V = " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " " + frac("p cos &theta;", "r<sup>2</sup>") + " &nbsp;|&nbsp; Axial (&theta; = 0&deg;): V<sub>axial</sub> = " + frac("p", "4&pi; &epsilon;<sub>0</sub> r<sup>2</sup>") + " &nbsp;|&nbsp; Equatorial (&theta; = 90&deg;): V<sub>eq</sub> = 0</b>")}
  <p><b>Potential due to a System of N Charges:</b> By principle of superposition, total potential is the algebraic scalar sum: V<sub>total</sub> = V<sub>1</sub> + V<sub>2</sub> + ... + V<sub>N</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] &Sigma; (q<sub>i</sub> / r<sub>i</sub>).</p>

  <!-- SECTION 9 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">9. Equipotential Surfaces &amp; Electrostatic Potential Energy</h2>
  ${defBox("Equipotential Surface", "An Equipotential Surface is any spatial surface that has the exact same electric potential at every single point across its entire area (V = constant).")}
  <p><b>Fundamental Properties of Equipotential Surfaces:</b></p>
  <ol style="margin-left: 20px; line-height: 1.8;">
    <li><b>No work is done</b> in moving a test charge between any two points on an equipotential surface: W = q<sub>0</sub> (V<sub>B</sub> - V<sub>A</sub>) = 0.</li>
    <li><b>Electric field lines are ALWAYS strictly perpendicular (normal)</b> to the equipotential surface at every point.</li>
    <li><b>Two equipotential surfaces CAN NEVER intersect</b>, as that would imply two different potential values at the line of intersection.</li>
    <li>Closer spacing between equipotential surfaces indicates regions of strong electric fields (E = -dV/dr).</li>
  </ol>

  ${defBox("Electrostatic Potential Energy (U)", "The Electrostatic Potential Energy of a system of point charges is the total work done by external forces in bringing the charges from infinite separation to their respective positions without acceleration.")}
  <p>For two charges q<sub>1</sub> and q<sub>2</sub> separated by distance r<sub>12</sub>:</p>
  ${eqBox("<b>U = " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " " + frac("q<sub>1</sub> q<sub>2</sub>", "r<sub>12</sub>") + " &nbsp;|&nbsp; Dipole in Field: U = - p E cos &theta; = - <b>p</b> &sdot; <b>E</b></b>")}
  ${svg3DCardWrapper("6. EQUIPOTENTIAL SURFACES & POTENTIAL", "Fig 6.1: Concentric Equipotential Spheres for Point Charge +q & Fig 6.2: Equipotential Planes in Uniform Electric Field (E = -dV/dr).", svg6_potential_equipotential)}

  <!-- SECTION 10 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">10. Conductors, Insulators, Free &amp; Bound Charges</h2>
  ${defBox("Conductors vs Insulators", "Conductors are materials containing abundant free valence electrons that can drift easily throughout the lattice (e.g. Copper, Aluminium). Insulators (Dielectrics) are materials in which all electrons are tightly bound to atomic nuclei and cannot move freely (e.g. Mica, Glass, Plastic).")}
  <p><b>Key Electrostatic Properties of Conductors:</b></p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li>Inside a conductor in electrostatic equilibrium, electric field is strictly zero (<b>E<sub>in</sub> = 0</b>).</li>
    <li>At the surface of a charged conductor, electric field must be strictly normal: <b>E = &sigma; / &epsilon;<sub>0</sub></b>.</li>
    <li>Excess static charge resides entirely on the outer surface of the conductor.</li>
    <li>Electrostatic potential is constant throughout the entire volume of a conductor.</li>
    <li><b>Electrostatic Shielding:</b> The electric field inside any empty cavity of a conductor is zero, completely shielding sensitive instruments from external electrical disturbances.</li>
  </ul>

  <!-- SECTION 11 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">11. Dielectrics &amp; Electric Polarization</h2>
  ${defBox("Dielectrics & Polarization (<b>P</b>)", "Dielectrics are non-conducting insulating substances that transmit electrical effects without conducting. Electric Polarization <b>P</b> is defined as the induced dipole moment per unit volume: <b>P</b> = &chi;<sub>e</sub> &epsilon;<sub>0</sub> <b>E</b>, where &chi;<sub>e</sub> is the electric susceptibility of the dielectric medium.")}
  <p>When a dielectric slab is placed in an external field <b>E</b><sub>0</sub>, induced surface charges (+&sigma;<sub>p</sub> and -&sigma;<sub>p</sub>) produce an internal opposing field <b>E</b><sub>p</sub>. The reduced net field is <b>E = E<sub>0</sub> / K</b>, where K is the Dielectric Constant (K &gt; 1).</p>

  <!-- SECTION 12 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">12. Capacitors, Capacitance &amp; Parallel Plate Capacitor (With &amp; Without Dielectric)</h2>
  ${defBox("Capacitor & Capacitance (C)", "A Capacitor is a system of two conducting plates separated by an insulator/dielectric designed to store electrostatic charge and electrical potential energy. Capacitance C is defined as the ratio of stored charge Q on either plate to the potential difference V between them: C = Q / V [Farad F = C V<sup>-1</sup>].")}
  <p><b>1. Parallel Plate Capacitor in Vacuum:</b> Two parallel plates of area A separated by distance d in vacuum:</p>
  ${eqBox("<b>C<sub>0</sub> = " + frac("&epsilon;<sub>0</sub> A", "d") + " &nbsp;|&nbsp; &epsilon;<sub>0</sub> = 8.854 &times; 10<sup>-12</sup> F m<sup>-1</sup></b>")}
  <p><b>2. With Dielectric Slab of Thickness t (t &lt; d):</b></p>
  ${eqBox("<b>C = " + frac("&epsilon;<sub>0</sub> A", "d - t + (t / K)") + " &nbsp;|&nbsp; Completely Filled (t = d): C = K C<sub>0</sub> = " + frac("K &epsilon;<sub>0</sub> A", "d") + "</b>")}

  <!-- SECTION 13 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">13. Combinations of Capacitors (Series &amp; Parallel) &amp; Energy Stored</h2>
  <p><b>Series Combination:</b> Charge Q is identical on all capacitors, total voltage V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub>:</p>
  ${eqBox("<b>" + frac("1", "C<sub>s</sub>") + " = " + frac("1", "C<sub>1</sub>") + " + " + frac("1", "C<sub>2</sub>") + " + " + frac("1", "C<sub>3</sub>") + " &nbsp; (Equivalent capacitance is smaller than the smallest individual capacitor)</b>")}

  <p><b>Parallel Combination:</b> Potential difference V is identical across all capacitors, total charge Q = Q<sub>1</sub> + Q<sub>2</sub> + Q<sub>3</sub>:</p>
  ${eqBox("<b>C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> &nbsp; (Equivalent capacitance is the direct algebraic sum)</b>")}

  ${defBox("Energy Stored in a Capacitor (U)", "The electrostatic potential energy stored in the electric field between the plates of a charged capacitor is given by:")}
  ${eqBox("<b>U = " + frac("1", "2") + " C V<sup>2</sup> = " + frac("Q<sup>2</sup>", "2 C") + " = " + frac("1", "2") + " Q V &nbsp;|&nbsp; Energy Density: u = " + frac("1", "2") + " &epsilon;<sub>0</sub> E<sup>2</sup> [J m<sup>-3</sup>]</b>")}
  ${svg3DCardWrapper("7. CAPACITORS & COMBINATIONS", "Fig 7.1: Parallel Plate Capacitor with Dielectric Slab C = &epsilon;<sub>0</sub>A / (d - t + t/K) & Fig 7.2: Series (1/C<sub>s</sub> = &Sigma; 1/C<sub>i</sub>) and Parallel (C<sub>p</sub> = &Sigma; C<sub>i</sub>) Circuits.", svg7_capacitors_combinations)}

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Master Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for JKBOSE / NCERT Unit I: Electrostatics (09 Marks)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Forces &amp; Fields:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">F = [1 / (4&pi;&epsilon;<sub>0</sub>)] (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>)<br>E<sub>axial</sub> = 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>)<br>E<sub>eq</sub> = p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>)<br><b>&tau;</b> = <b>p</b> &times; <b>E</b></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Gauss's Law Applications:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">Wire: E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r)<br>Sheet: E = &sigma; / (2&epsilon;<sub>0</sub>)<br>Shell: E<sub>out</sub> = Q / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>), E<sub>in</sub> = 0</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Potential &amp; Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">V = Q / (4&pi;&epsilon;<sub>0</sub> r)<br>V<sub>dipole</sub> = p cos &theta; / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>)<br>U = q<sub>1</sub> q<sub>2</sub> / (4&pi;&epsilon;<sub>0</sub> r)<br>U<sub>dipole</sub> = -<b>p</b> &sdot; <b>E</b></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Capacitance &amp; Dielectrics:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">C<sub>0</sub> = &epsilon;<sub>0</sub> A / d, C = K C<sub>0</sub><br>1/C<sub>s</sub> = &Sigma; 1/C<sub>i</sub><br>C<sub>p</sub> = &Sigma; C<sub>i</sub><br>U = 1/2 C V<sup>2</sup> = Q<sup>2</sup> / (2C)</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Generate the 100 100% Genuine, Specific CBSE / JKBOSE Physics Questions & Answers covering Unit I: Electrostatics
function generate100GenuineQuestions() {
  const mcqsData = [
    {
      q: "A polythene piece rubbed with wool is found to have a negative charge of 3.2 &times; 10<sup>-7</sup> C. What is the number of electrons transferred from wool to polythene?",
      opts: ["a) 2.0 &times; 10<sup>12</sup> electrons", "b) 1.6 &times; 10<sup>19</sup> electrons", "c) 3.2 &times; 10<sup>12</sup> electrons", "d) 6.25 &times; 10<sup>18</sup> electrons"],
      ans: "a) 2.0 &times; 10<sup>12</sup> electrons",
      exp: "Using quantization relation q = n e: n = q / e = (3.2 &times; 10<sup>-7</sup> C) / (1.602 &times; 10<sup>-19</sup> C) = 2.0 &times; 10<sup>12</sup> electrons transferred from wool to polythene."
    },
    {
      q: "Two point charges placed at distance d in air exert a force F. When immersed in a liquid of dielectric constant K = 4 at the same separation, what is the new electrostatic force?",
      opts: ["a) F / 4", "b) 4 F", "c) 16 F", "d) F / 16"],
      ans: "a) F / 4",
      exp: "In a dielectric medium with dielectric constant K, electrostatic force reduces by factor K: F<sub>med</sub> = F<sub>air</sub> / K = F / 4."
    },
    {
      q: "How does the magnitude of the electric potential V vary with distance r from an isolated point charge Q?",
      opts: ["a) V &prop; 1 / r", "b) V &prop; 1 / r<sup>2</sup>", "c) V &prop; 1 / r<sup>3</sup>", "d) V is independent of r"],
      ans: "a) V &prop; 1 / r",
      exp: "Electric potential due to an isolated point charge is V = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / r), which is inversely proportional to distance r (V &prop; 1 / r)."
    },
    {
      q: "The electric potential at an equatorial point of an electric dipole of moment p at distance r from center is:",
      opts: ["a) Zero", "b) [1 / (4&pi;&epsilon;<sub>0</sub>)] (p / r<sup>2</sup>)", "c) [1 / (4&pi;&epsilon;<sub>0</sub>)] (2p / r<sup>2</sup>)", "d) [1 / (4&pi;&epsilon;<sub>0</sub>)] (p / r<sup>3</sup>)"],
      ans: "a) Zero",
      exp: "At any equatorial point, distances from +q and -q are equal. Potential V<sub>eq</sub> = V<sub>+</sub> + V<sub>-</sub> = [q / (4&pi;&epsilon;<sub>0</sub> d)] - [q / (4&pi;&epsilon;<sub>0</sub> d)] = 0."
    },
    {
      q: "What is the work done in moving a test charge q<sub>0</sub> between two points on an equipotential surface having potential V = 50 Volts?",
      opts: ["a) Zero", "b) 50 q<sub>0</sub> Joules", "c) q<sub>0</sub> / 50 Joules", "d) 2500 q<sub>0</sub> Joules"],
      ans: "a) Zero",
      exp: "Work done on an equipotential surface is W = q<sub>0</sub> (V<sub>B</sub> - V<sub>A</sub>). Since V<sub>B</sub> = V<sub>A</sub> = 50 V, &Delta;V = 0, so W = 0."
    },
    {
      q: "The angle between an electric field line and an equipotential surface at any point is always:",
      opts: ["a) 90&deg; (Perpendicular)", "b) 0&deg; (Parallel)", "c) 45&deg;", "d) 180&deg;"],
      ans: "a) 90&deg; (Perpendicular)",
      exp: "Since work done along an equipotential surface is zero (dW = <b>E</b> &sdot; d<b>l</b> = E dl cos &theta; = 0), cos &theta; = 0 &rArr; &theta; = 90&deg;. Electric field lines are always normal to equipotential surfaces."
    },
    {
      q: "A parallel plate capacitor with air between plates has capacitance C<sub>0</sub> = 10 &mu;F. If a dielectric slab of dielectric constant K = 6 completely fills the space between plates, the new capacitance is:",
      opts: ["a) 60 &mu;F", "b) 1.67 &mu;F", "c) 10 &mu;F", "d) 360 &mu;F"],
      ans: "a) 60 &mu;F",
      exp: "When a dielectric slab of constant K completely fills the gap, capacitance increases by factor K: C = K C<sub>0</sub> = 6 &times; 10 &mu;F = 60 &mu;F."
    },
    {
      q: "Three capacitors of capacitances 2 &mu;F, 3 &mu;F, and 6 &mu;F are connected in series. The equivalent capacitance of the combination is:",
      opts: ["a) 1.0 &mu;F", "b) 11 &mu;F", "c) 0.5 &mu;F", "d) 6.0 &mu;F"],
      ans: "a) 1.0 &mu;F",
      exp: "In series: 1 / C<sub>s</sub> = 1/2 + 1/3 + 1/6 = (3 + 2 + 1) / 6 = 6 / 6 = 1 &mu;F<sup>-1</sup> &rArr; C<sub>s</sub> = 1.0 &mu;F."
    },
    {
      q: "Three capacitors of capacitances 2 &mu;F, 3 &mu;F, and 4 &mu;F are connected in parallel. What is the total capacitance of the combination?",
      opts: ["a) 9 &mu;F", "b) 0.92 &mu;F", "c) 24 &mu;F", "d) 1.5 &mu;F"],
      ans: "a) 9 &mu;F",
      exp: "In parallel: C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> = 2 + 3 + 4 = 9 &mu;F."
    },
    {
      q: "The electrostatic energy stored in a capacitor of capacitance C charged to potential difference V is given by:",
      opts: ["a) 1/2 C V<sup>2</sup>", "b) C V", "c) 1/2 C<sup>2</sup> V", "d) 2 C V<sup>2</sup>"],
      ans: "a) 1/2 C V<sup>2</sup>",
      exp: "Work done in charging a capacitor is stored as potential energy U = &int; V dq = &int; (q/C) dq = q<sup>2</sup> / (2C) = 1/2 C V<sup>2</sup>."
    },
    {
      q: "For a short electric dipole of moment p, the electric field intensity at an axial point at distance r varies as:",
      opts: ["a) 1 / r<sup>3</sup>", "b) 1 / r<sup>2</sup>", "c) 1 / r", "d) r<sup>3</sup>"],
      ans: "a) 1 / r<sup>3</sup>",
      exp: "Axial field of a short dipole is E<sub>axial</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] (2p / r<sup>3</sup>) &prop; 1 / r<sup>3</sup>."
    },
    {
      q: "An electric dipole of dipole moment <b>p</b> is placed in a uniform electric field <b>E</b>. The torque acting on the dipole is maximum when the angle &theta; between <b>p</b> and <b>E</b> is:",
      opts: ["a) 90&deg;", "b) 0&deg;", "c) 180&deg;", "d) 45&deg;"],
      ans: "a) 90&deg;",
      exp: "Torque magnitude is &tau; = p E sin &theta;. Maximum torque occurs when sin &theta; = 1, i.e., &theta; = 90&deg; (&tau;<sub>max</sub> = p E)."
    },
    {
      q: "A Gaussian sphere encloses an electric dipole of moment p. What is the total electric flux emerging through the spherical surface?",
      opts: ["a) Zero", "b) p / &epsilon;<sub>0</sub>", "c) 2p / &epsilon;<sub>0</sub>", "d) Infinity"],
      ans: "a) Zero",
      exp: "A dipole consists of equal and opposite charges (+q and -q). Net enclosed charge q<sub>enclosed</sub> = +q - q = 0. By Gauss's Law, &Phi;<sub>E</sub> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub> = 0."
    },
    {
      q: "A thin metallic spherical shell of radius R carries uniform surface charge Q. The electric field intensity at distance r < R (inside the shell) is:",
      opts: ["a) Zero", "b) [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / r<sup>2</sup>)", "c) [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / R<sup>2</sup>)", "d) Q / &epsilon;<sub>0</sub>"],
      ans: "a) Zero",
      exp: "A Gaussian surface inside the hollow metallic shell encloses zero net charge (q<sub>enclosed</sub> = 0). By Gauss's Law, E<sub>in</sub> = 0."
    },
    {
      q: "What is the electric potential inside a charged hollow spherical conductor of radius R carrying charge Q?",
      opts: ["a) Constant and equal to [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / R)", "b) Zero", "c) Inversely proportional to r", "d) Directly proportional to r"],
      ans: "a) Constant and equal to [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / R)",
      exp: "Since E = -dV/dr = 0 inside a charged conductor, potential V is constant everywhere throughout the interior volume and equals the surface potential V = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / R)."
    },
    {
      q: "If the distance between the two plates of a parallel plate capacitor is halved and plate area is doubled, its capacitance will:",
      opts: ["a) Increase 4 times", "b) Increase 2 times", "c) Remain unchanged", "d) Decrease 4 times"],
      ans: "a) Increase 4 times",
      exp: "Capacitance C = &epsilon;<sub>0</sub> A / d. When A' = 2A and d' = d/2: C' = &epsilon;<sub>0</sub> (2A) / (d/2) = 4 (&epsilon;<sub>0</sub> A / d) = 4 C."
    },
    {
      q: "A capacitor is charged by a battery and then disconnected. A dielectric slab is now inserted between plates. What happens to the stored charge and potential difference?",
      opts: ["a) Charge Q remains constant, Potential difference V decreases by factor K", "b) Charge increases, V remains constant", "c) Both Q and V increase", "d) Both Q and V decrease"],
      ans: "a) Charge Q remains constant, Potential difference V decreases by factor K",
      exp: "Since the battery is disconnected, charge is conserved (Q = constant). Capacitance increases to C' = K C. Therefore, potential difference decreases: V' = Q / C' = V / K."
    },
    {
      q: "The electric field intensity produced by an infinitely large thin plane sheet with uniform surface charge density &sigma; is:",
      opts: ["a) &sigma; / (2&epsilon;<sub>0</sub>) (independent of distance)", "b) &sigma; / &epsilon;<sub>0</sub>", "c) &sigma; / (2&epsilon;<sub>0</sub> r)", "d) &sigma; / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>)"],
      ans: "a) &sigma; / (2&epsilon;<sub>0</sub>) (independent of distance)",
      exp: "By Gauss's Law, flux through a cylindrical pillbox is 2 E A = &sigma; A / &epsilon;<sub>0</sub> &rArr; E = &sigma; / (2&epsilon;<sub>0</sub>), independent of distance r."
    },
    {
      q: "What is the potential energy of an electric dipole of moment <b>p</b> in a uniform electric field <b>E</b> when aligned at angle &theta; = 180&deg; (unstable equilibrium)?",
      opts: ["a) +p E (Maximum)", "b) -p E (Minimum)", "c) Zero", "d) 2 p E"],
      ans: "a) +p E (Maximum)",
      exp: "Potential energy U = -p E cos &theta;. At &theta; = 180&deg;, cos 180&deg; = -1 &rArr; U = -p E (-1) = +p E (maximum potential energy)."
    },
    {
      q: "What is the value of the dielectric constant (relative permittivity) for a perfect metallic conductor?",
      opts: ["a) Infinity (&infin;)", "b) Zero", "c) 1", "d) 80"],
      ans: "a) Infinity (&infin;)",
      exp: "Inside a conductor in electrostatic equilibrium, induced charges completely cancel the external field (E<sub>net</sub> = 0). Since K = E<sub>0</sub> / E<sub>net</sub> = E<sub>0</sub> / 0 = &infin;."
    },
    {
      q: "Two point charges +q and -q are located at (0, 0, -a) and (0, 0, a). What is the electric potential at the point (x, y, 0) on the xy-plane?",
      opts: ["a) Zero", "b) q / (4&pi;&epsilon;<sub>0</sub> a)", "c) 2q / (4&pi;&epsilon;<sub>0</sub> a)", "d) Inversely proportional to &radic;(x<sup>2</sup> + y<sup>2</sup>)"],
      ans: "a) Zero",
      exp: "The xy-plane (z = 0) is the perpendicular bisector (equatorial plane) of the dipole. Distance from (x, y, 0) to (0, 0, a) and (0, 0, -a) is identical d = &radic;(x<sup>2</sup> + y<sup>2</sup> + a<sup>2</sup>). Hence V = V<sub>+</sub> + V<sub>-</sub> = 0."
    },
    {
      q: "The electric potential in a region of space is given by V(x, y, z) = 6x - 8xy - 8y + 6yz. What is the electric force experienced by a charge of 2 C at origin (0, 0, 0)?",
      opts: ["a) 20 N", "b) 10 N", "c) 2 N", "d) Zero"],
      ans: "a) 20 N",
      exp: "E<sub>x</sub> = -&part;V/&part;x = -(6 - 8y) = -6 at (0,0,0); E<sub>y</sub> = -&part;V/&part;y = -(-8x - 8 + 6z) = +8; E<sub>z</sub> = -&part;V/&part;z = -6y = 0. E<sub>net</sub> = &radic;((-6)<sup>2</sup> + 8<sup>2</sup>) = 10 N C<sup>-1</sup>. Force F = q E = 2 &times; 10 = 20 N."
    },
    {
      q: "A capacitor of 20 &mu;F is charged to 500 V. The energy stored in the capacitor is:",
      opts: ["a) 2.5 Joules", "b) 5.0 Joules", "c) 10 Joules", "d) 0.05 Joules"],
      ans: "a) 2.5 Joules",
      exp: "U = 1/2 C V<sup>2</sup> = 1/2 &times; (20 &times; 10<sup>-6</sup> F) &times; (500 V)<sup>2</sup> = 10 &times; 10<sup>-6</sup> &times; 250,000 = 2.5 Joules."
    },
    {
      q: "When two identical charged conducting spheres carrying potentials V<sub>1</sub> and V<sub>2</sub> are connected by a thin wire, the common potential V is:",
      opts: ["a) (V<sub>1</sub> + V<sub>2</sub>) / 2", "b) V<sub>1</sub> + V<sub>2</sub>", "c) &radic;(V<sub>1</sub> V<sub>2</sub>)", "d) (V<sub>1</sub> - V<sub>2</sub>) / 2"],
      ans: "a) (V<sub>1</sub> + V<sub>2</sub>) / 2",
      exp: "For two identical spheres C<sub>1</sub> = C<sub>2</sub> = C. Common potential V = Total charge / Total capacitance = (C V<sub>1</sub> + C V<sub>2</sub>) / (2C) = (V<sub>1</sub> + V<sub>2</sub>) / 2."
    },
    {
      q: "Which of the following physical quantities is a vector quantity?",
      opts: ["a) Electric Dipole Moment", "b) Electric Potential", "c) Electric Flux", "d) Electrostatic Potential Energy"],
      ans: "a) Electric Dipole Moment",
      exp: "Electric dipole moment <b>p</b> = q (2<b>a</b>) is a vector directed from -q to +q. Electric potential, electric flux, and electrostatic potential energy are all scalar quantities."
    }
  ];

  const vsasData = [
    {
      q: "Define one Coulomb (1 C) of electric charge using Coulomb's Law.",
      sol: "One Coulomb is defined as that quantity of electrostatic charge which, when placed in vacuum at a distance of 1 meter from an equal and similar charge, repels it with an electrostatic force of 9 &times; 10<sup>9</sup> Newtons."
    },
    {
      q: "State the Principle of Quantization of electric charge and give its mathematical equation.",
      sol: "The Principle of Quantization of Charge states that the total electric charge possessed by any physical body is always an integral multiple of a basic elementary quantum of charge e: <b>q = &plusmn;n e</b>, where n = 1, 2, 3, ... and e = 1.602 &times; 10<sup>-19</sup> C."
    },
    {
      q: "Define Electric Potential at a point and state its SI unit.",
      sol: "Electric Potential V at a point in an electric field is defined as the amount of work done per unit positive test charge by an external agent in bringing it from infinity to that point against electrostatic forces: <b>V = W / q<sub>0</sub></b>. Its SI unit is Volt (V = J C<sup>-1</sup>)."
    },
    {
      q: "Define Electric Potential Difference between two points in an electrostatic field.",
      sol: "Electric Potential Difference &Delta;V between two points A and B is defined as the work done in carrying a unit positive test charge from point A to point B against electrostatic field forces: <b>V<sub>B</sub> - V<sub>A</sub> = W<sub>A&rarr;B</sub> / q<sub>0</sub></b> [Volt V]."
    },
    {
      q: "Why can two electric field lines never intersect each other at any point?",
      sol: "If two electric field lines intersected at a point, two tangents could be drawn at the point of intersection, indicating two different directions of resultant electric field at that single location, which is physically impossible."
    },
    {
      q: "Define an Equipotential Surface and give one example.",
      sol: "An Equipotential Surface is a surface on which the electrostatic potential has the same constant value at every point. Example: Concentric spherical surfaces surrounding an isolated point charge."
    },
    {
      q: "Why is the work done in moving a charge between two points on an equipotential surface zero?",
      sol: "Work done is given by W = q<sub>0</sub> (V<sub>B</sub> - V<sub>A</sub>). Since the potential at all points on an equipotential surface is identical (V<sub>B</sub> = V<sub>A</sub>), potential difference &Delta;V = 0, hence W = 0."
    },
    {
      q: "Write the relation between electric field intensity E and electric potential gradient dV/dr.",
      sol: "<b>E = - (dV / dr)</b>. This shows that the electric field intensity equals the negative spatial gradient of electric potential, and electric field lines always point in the direction of steepest decrease in potential."
    },
    {
      q: "Define Capacitance of a conductor and state its SI unit.",
      sol: "Capacitance C of a conductor is defined as the ratio of electrostatic charge Q given to the conductor to the resulting rise in its electrical potential V: <b>C = Q / V</b>. Its SI unit is Farad (F = C V<sup>-1</sup>)."
    },
    {
      q: "Define one Farad (1 F) of capacitance.",
      sol: "A conductor has a capacitance of one Farad if an electric charge of one Coulomb raises its electrical potential by one Volt: <b>1 Farad = 1 Coulomb / 1 Volt (1 F = 1 C V<sup>-1</sup>)</b>."
    },
    {
      q: "What is the physical meaning of Dielectric Polarization?",
      sol: "Dielectric Polarization is the alignment of molecular dipole moments (or displacement of positive and negative charges) within an insulating material under the influence of an applied external electric field, creating an induced dipole moment per unit volume <b>P</b> = &chi;<sub>e</sub> &epsilon;<sub>0</sub> <b>E</b>."
    },
    {
      q: "Define Electric Dipole Moment vector and state its SI unit and direction.",
      sol: "The Electric Dipole Moment vector <b>p</b> is defined as the product of charge magnitude q and separation vector 2<b>a</b>: <b>p = q (2a)</b>. Its SI unit is Coulomb-meter (C m), and it is directed from negative charge (-q) to positive charge (+q)."
    },
    {
      q: "What is Electrostatic Shielding?",
      sol: "Electrostatic shielding is the phenomenon of protecting a sensitive spatial region or electrical instrument from external electrostatic fields by enclosing it inside a hollow conductor, based on the fact that electric field inside a metallic cavity is strictly zero (E<sub>in</sub> = 0)."
    },
    {
      q: "State Gauss's Theorem in electrostatics.",
      sol: "Gauss's Theorem states that the total outward electric flux &Phi;<sub>E</sub> passing through any closed three-dimensional Gaussian surface in free space equals 1/&epsilon;<sub>0</sub> times the net algebraic electric charge enclosed inside the surface: <b>&oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub></b>."
    },
    {
      q: "Write the expression for electrostatic potential energy of two point charges q<sub>1</sub> and q<sub>2</sub> separated by distance r in vacuum.",
      sol: "<b>U = [1 / (4&pi;&epsilon;<sub>0</sub>)] [q<sub>1</sub> q<sub>2</sub> / r]</b> [Joules J]."
    },
    {
      q: "State the formula for the electric potential on the axial line of an electric dipole of moment p at distance r.",
      sol: "<b>V<sub>axial</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [p / r<sup>2</sup>]</b> (for a short dipole r >> a)."
    },
    {
      q: "What is the shape of equipotential surfaces for a uniform electric field directed along the z-axis?",
      sol: "Equipotential surfaces for a uniform field along the z-axis are a series of <b>equidistant planes parallel to the xy-plane</b> (perpendicular to the z-axis)."
    },
    {
      q: "What is the formula for the capacitance of a parallel plate capacitor in vacuum?",
      sol: "<b>C<sub>0</sub> = &epsilon;<sub>0</sub> A / d</b>, where A is the area of each plate and d is the distance between them."
    },
    {
      q: "How does the capacitance of a parallel plate capacitor change when a dielectric slab of dielectric constant K is introduced between its plates?",
      sol: "The capacitance increases by a factor of K: <b>C = K C<sub>0</sub> = K (&epsilon;<sub>0</sub> A / d)</b>."
    },
    {
      q: "State the formula for equivalent capacitance of two capacitors C<sub>1</sub> and C<sub>2</sub> connected in series.",
      sol: "<b>1 / C<sub>s</sub> = 1 / C<sub>1</sub> + 1 / C<sub>2</sub> &rArr; C<sub>s</sub> = (C<sub>1</sub> C<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>)</b>."
    },
    {
      q: "State the formula for equivalent capacitance of two capacitors C<sub>1</sub> and C<sub>2</sub> connected in parallel.",
      sol: "<b>C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub></b>."
    },
    {
      q: "Write the formula for electrostatic energy density in the electric field between capacitor plates.",
      sol: "Electrostatic Energy Density <b>u = (1/2) &epsilon;<sub>0</sub> E<sup>2</sup></b> [Joules per cubic meter J m<sup>-3</sup>]."
    },
    {
      q: "Why does the electrostatic field inside a conductor vanish under static equilibrium?",
      sol: "In an electrostatic field, free electrons in a conductor redistribute themselves across the outer boundary until the induced internal electric field exactly equals and cancels the external applied field, making net internal field E = 0."
    },
    {
      q: "What is the value of electric potential at the surface and inside a charged spherical conductor of radius R carrying charge Q?",
      sol: "Both at the surface and everywhere inside the spherical conductor, the electric potential is uniform and constant: <b>V = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / R)</b>."
    },
    {
      q: "Can electric potential be zero at a point where electric field is non-zero? Give an example.",
      sol: "Yes. At any point on the equatorial line of an electric dipole, the electric potential is strictly zero (V = 0), while the electric field intensity is non-zero (E = p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>))."
    },
    {
      q: "Can electric field be zero at a point where electric potential is non-zero? Give an example.",
      sol: "Yes. Inside a uniformly charged hollow spherical shell, the electric field is strictly zero (E = 0), but the electric potential is non-zero and constant (V = Q / (4&pi;&epsilon;<sub>0</sub> R))."
    },
    {
      q: "What is the dielectric strength of a medium?",
      sol: "Dielectric strength is defined as the maximum electric field intensity that an insulating material can withstand without electrical breakdown (ionization and conduction). For dry air, it is approximately 3 &times; 10<sup>6</sup> V m<sup>-1</sup>."
    },
    {
      q: "What is the net charge on a charged capacitor carrying charges +Q and -Q on its two plates?",
      sol: "The net algebraic charge on a capacitor as a whole is strictly zero: <b>Q<sub>net</sub> = +Q + (-Q) = 0</b>."
    },
    {
      q: "State the condition under which the potential energy of an electric dipole in a uniform electric field is minimum (stable equilibrium).",
      sol: "Potential energy U = -p E cos &theta; is minimum (U = -p E) when the dipole moment <b>p</b> is aligned parallel to the uniform electric field <b>E</b> (&theta; = 0&deg;)."
    },
    {
      q: "State the formula for electric field at an axial point of a short dipole.",
      sol: "<b>E<sub>axial</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [2p / r<sup>3</sup>]</b>, directed parallel to dipole moment vector <b>p</b>."
    }
  ];

  const sasData = [
    {
      q: "Calculate the electric potential at a point P located 9.0 cm away from an isolated point charge of +4.0 &mu;C in vacuum. Hence, find the work done in bringing a test charge of 2.0 &times; 10<sup>-9</sup> C from infinity to point P.",
      sol: "1. <b>Electric Potential at P:</b><br>Given: Q = 4.0 &times; 10<sup>-6</sup> C, r = 9.0 cm = 0.09 m, 1/(4&pi;&epsilon;<sub>0</sub>) = 9 &times; 10<sup>9</sup> N m<sup>2</sup> C<sup>-2</sup>.<br>V = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / r) = (9 &times; 10<sup>9</sup>) &times; (4.0 &times; 10<sup>-6</sup>) / 0.09 = <b>4.0 &times; 10<sup>5</sup> Volts</b>.<br><br>2. <b>Work Done:</b><br>W = q<sub>0</sub> V = (2.0 &times; 10<sup>-9</sup> C) &times; (4.0 &times; 10<sup>5</sup> V) = <b>8.0 &times; 10<sup>-4</sup> Joules</b>.<br>This work is independent of the path taken by the charge."
    },
    {
      q: "Derive the relation E = - dV/dr between electric field intensity and electric potential gradient.",
      sol: "Consider two closely spaced equipotential surfaces A and B separated by small perpendicular distance dr, with potentials V and (V - dV).<br><br>Work done dW in moving unit positive test charge (+1 C) from surface B to A against electric field <b>E</b> is:<br>dW = Force &times; Displacement = E &times; dr.<br><br>By definition of potential difference, work done equals potential difference:<br>dW = V<sub>A</sub> - V<sub>B</sub> = V - (V - dV) = dV.<br><br>Equating both expressions for work done:<br>E &times; (-dr) = dV &rArr; <b>E = - (dV / dr)</b>.<br>The negative sign indicates that the direction of electric field is in the direction of decreasing potential."
    },
    {
      q: "Three point charges +q, +2q, and -3q are placed at the vertices of an equilateral triangle of side length L. Find the total electrostatic potential energy of the system.",
      sol: "Total electrostatic potential energy U is the sum of interaction energies of all charge pairs:<br>U = U<sub>12</sub> + U<sub>23</sub> + U<sub>31</sub><br>U = [1 / (4&pi;&epsilon;<sub>0</sub> L)] [ (q)(2q) + (2q)(-3q) + (-3q)(q) ]<br>U = [1 / (4&pi;&epsilon;<sub>0</sub> L)] [ 2q<sup>2</sup> - 6q<sup>2</sup> - 3q<sup>2</sup> ]<br><b>U = - [7 q<sup>2</sup> / (4&pi;&epsilon;<sub>0</sub> L)]</b> [Joules]."
    },
    {
      q: "A parallel plate capacitor with plate area A = 100 cm<sup>2</sup> and plate separation d = 2.0 mm is connected to a 100 V DC supply. Calculate: (i) the capacitance, (ii) the charge on each plate, and (iii) the electrostatic energy stored.",
      sol: "Given: A = 100 &times; 10<sup>-4</sup> m<sup>2</sup> = 10<sup>-2</sup> m<sup>2</sup>, d = 2.0 &times; 10<sup>-3</sup> m, V = 100 V, &epsilon;<sub>0</sub> = 8.854 &times; 10<sup>-12</sup> F m<sup>-1</sup>.<br><br>1. <b>Capacitance:</b><br>C = &epsilon;<sub>0</sub> A / d = (8.854 &times; 10<sup>-12</sup> &times; 10<sup>-2</sup>) / (2.0 &times; 10<sup>-3</sup>) = <b>44.27 &times; 10<sup>-12</sup> F = 44.27 pF</b>.<br><br>2. <b>Charge on Plates:</b><br>Q = C V = (44.27 &times; 10<sup>-12</sup> F) &times; 100 V = <b>4.427 &times; 10<sup>-9</sup> C = 4.427 nC</b>.<br><br>3. <b>Energy Stored:</b><br>U = 1/2 C V<sup>2</sup> = 1/2 &times; (44.27 &times; 10<sup>-12</sup>) &times; (100)<sup>2</sup> = <b>2.2135 &times; 10<sup>-7</sup> Joules</b>."
    },
    {
      q: "Two capacitors of capacitances 6 &mu;F and 12 &mu;F are connected in series across a 120 V battery. Find the potential difference and charge across each capacitor.",
      sol: "1. <b>Equivalent Series Capacitance:</b><br>1 / C<sub>s</sub> = 1/6 + 1/12 = 3/12 = 1/4 &rArr; C<sub>s</sub> = 4 &mu;F.<br><br>2. <b>Total Charge Supplied by Battery:</b><br>Q = C<sub>s</sub> V = 4 &mu;F &times; 120 V = <b>480 &mu;C</b>.<br>In series, charge on both capacitors is identical: Q<sub>1</sub> = Q<sub>2</sub> = 480 &mu;C.<br><br>3. <b>Potential Difference Across Each:</b><br>V<sub>1</sub> = Q / C<sub>1</sub> = 480 &mu;C / 6 &mu;F = <b>80 Volts</b>.<br>V<sub>2</sub> = Q / C<sub>2</sub> = 480 &mu;C / 12 &mu;F = <b>40 Volts</b>.<br>(Check: V<sub>1</sub> + V<sub>2</sub> = 80 + 40 = 120 V)."
    },
    {
      q: "Derive an expression for the equivalent capacitance of three capacitors C<sub>1</sub>, C<sub>2</sub>, and C<sub>3</sub> connected in series.",
      sol: "In a series combination, the same charge Q flows onto each capacitor, while the total applied voltage V divides across them:<br>V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub>.<br><br>Using V = Q / C:<br>V<sub>1</sub> = Q / C<sub>1</sub>, V<sub>2</sub> = Q / C<sub>2</sub>, V<sub>3</sub> = Q / C<sub>3</sub>.<br><br>Let C<sub>s</sub> be the equivalent capacitance, so V = Q / C<sub>s</sub>.<br>Q / C<sub>s</sub> = Q / C<sub>1</sub> + Q / C<sub>2</sub> + Q / C<sub>3</sub>.<br><br>Dividing by Q on both sides:<br><b>1 / C<sub>s</sub> = 1 / C<sub>1</sub> + 1 / C<sub>2</sub> + 1 / C<sub>3</sub></b>."
    },
    {
      q: "Derive an expression for the equivalent capacitance of three capacitors C<sub>1</sub>, C<sub>2</sub>, and C<sub>3</sub> connected in parallel.",
      sol: "In a parallel combination, the potential difference V across each capacitor is identical, while the total charge Q drawn from the battery is distributed among them:<br>Q = Q<sub>1</sub> + Q<sub>2</sub> + Q<sub>3</sub>.<br><br>Using Q = C V:<br>Q<sub>1</sub> = C<sub>1</sub> V, Q<sub>2</sub> = C<sub>2</sub> V, Q<sub>3</sub> = C<sub>3</sub> V.<br><br>Let C<sub>p</sub> be the equivalent parallel capacitance, so Q = C<sub>p</sub> V.<br>C<sub>p</sub> V = C<sub>1</sub> V + C<sub>2</sub> V + C<sub>3</sub> V.<br><br>Dividing by V on both sides:<br><b>C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub></b>."
    },
    {
      q: "Explain why the electric field inside a dielectric slab decreases when placed in an external uniform electric field.",
      sol: "When a dielectric slab is subjected to an external electric field <b>E</b><sub>0</sub>, electric polarization induces bound surface charges of opposite signs on the opposite faces of the slab.<br>These induced charges set up an internal opposing electric field <b>E</b><sub>p</sub> inside the dielectric.<br>The resultant net electric field inside the dielectric is the vector difference:<br><b>E = E<sub>0</sub> - E<sub>p</sub> = E<sub>0</sub> / K</b>, where K &gt; 1 is the dielectric constant."
    },
    {
      q: "Two point charges of +2 &mu;C and -2 &mu;C are separated by a distance of 20 cm in air. Calculate the electric potential and electric field at the midpoint of the line joining them.",
      sol: "Let midpoint be M. Distance of M from each charge is r = 10 cm = 0.10 m.<br><br>1. <b>Electric Potential at Midpoint:</b><br>V = V<sub>+</sub> + V<sub>-</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ (2 &times; 10<sup>-6</sup> / 0.10) + (-2 &times; 10<sup>-6</sup> / 0.10) ] = <b>0 Volts</b>.<br><br>2. <b>Electric Field at Midpoint:</b><br>Fields due to +2 &mu;C (away from it) and -2 &mu;C (towards it) point in the SAME direction (towards the negative charge):<br>E<sub>net</sub> = E<sub>+</sub> + E<sub>-</sub> = 2 &times; [ (9 &times; 10<sup>9</sup>) &times; (2 &times; 10<sup>-6</sup>) / (0.10)<sup>2</sup> ]<br>E<sub>net</sub> = 2 &times; [ 18 &times; 10<sup>3</sup> / 0.01 ] = <b>3.6 &times; 10<sup>6</sup> N C<sup>-1</sup> (directed towards -2 &mu;C charge)</b>."
    },
    {
      q: "State four essential properties of equipotential surfaces.",
      sol: "1. <b>Zero Work Done:</b> Work done in moving any charge between two points on an equipotential surface is zero (W = 0).<br>2. <b>Normal Field Lines:</b> Electric field lines are always perpendicular (normal) to the equipotential surface at every point.<br>3. <b>Non-Intersecting:</b> Two equipotential surfaces can never intersect each other.<br>4. <b>Spacing and Field Strength:</b> Closer spacing of equipotential surfaces indicates regions of stronger electric field intensity."
    },
    {
      q: "A 900 pF capacitor is charged by a 100 V battery. How much electrostatic energy is stored by the capacitor? It is then disconnected from the battery and connected to another uncharged 900 pF capacitor. What is the electrostatic energy stored by the system?",
      sol: "1. <b>Initial Energy:</b><br>U<sub>i</sub> = 1/2 C V<sup>2</sup> = 1/2 &times; (900 &times; 10<sup>-12</sup> F) &times; (100 V)<sup>2</sup> = <b>4.5 &times; 10<sup>-6</sup> Joules</b>.<br><br>2. <b>Connected to Uncharged Capacitor:</b><br>Common potential V' = Q / (2C) = (C V) / (2C) = V / 2 = 50 V.<br>Total equivalent capacitance C<sub>total</sub> = 2C = 1800 pF.<br>Final Energy U<sub>f</sub> = 1/2 C<sub>total</sub> (V')<sup>2</sup> = 1/2 &times; (1800 &times; 10<sup>-12</sup>) &times; (50)<sup>2</sup> = <b>2.25 &times; 10<sup>-6</sup> Joules</b>.<br><br>Energy lost in redistribution (as heat and electromagnetic radiation) = U<sub>i</sub> - U<sub>f</sub> = 2.25 &times; 10<sup>-6</sup> J."
    },
    {
      q: "Derive an expression for the torque acting on an electric dipole placed in a uniform electric field.",
      sol: "Consider a dipole with charges +q and -q separated by 2a in a uniform field <b>E</b> at angle &theta;.<br>Force on +q: <b>F</b><sub>+</sub> = +q <b>E</b>.<br>Force on -q: <b>F</b><sub>-</sub> = -q <b>E</b>.<br>Net translational force = 0.<br>Perpendicular distance between the two lines of action = 2a sin &theta;.<br>Torque &tau; = Force &times; Perpendicular distance = (q E) &times; (2a sin &theta;) = (q 2a) E sin &theta;.<br>Since p = q (2a): <b>&tau; = p E sin &theta;</b> (Vectorially: <b>&tau; = p &times; E</b>)."
    },
    {
      q: "Explain the concept of Electrostatic Shielding and write two practical applications.",
      sol: "Electrostatic shielding is the phenomenon of protecting a region of space from external electric fields by enclosing it within a hollow conducting enclosure (since E = 0 inside a cavity).<br><br><b>Practical Applications:</b><br>1. <b>Sensitive Instruments:</b> Enclosing sensitive electronic meters inside metallic Faraday cages to prevent interference from external electric fields.<br>2. <b>Thunderstorm Protection:</b> Staying inside a closed metallic car during lightning, as the metal body conducts lightning around the occupants into the ground."
    },
    {
      q: "A spherical conductor of radius 12 cm has a charge of 1.6 &times; 10<sup>-7</sup> C distributed uniformly on its surface. What is the electric field: (i) inside the sphere, (ii) just outside the sphere, and (iii) at a point 18 cm from the center?",
      sol: "Given: R = 0.12 m, Q = 1.6 &times; 10<sup>-7</sup> C.<br><br>1. <b>Inside the sphere (r < R):</b> <b>E = 0</b>.<br>2. <b>Just outside the sphere (r = R = 0.12 m):</b><br>E = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / R<sup>2</sup>) = (9 &times; 10<sup>9</sup> &times; 1.6 &times; 10<sup>-7</sup>) / (0.12)<sup>2</sup> = 1440 / 0.0144 = <b>1.0 &times; 10<sup>5</sup> N C<sup>-1</sup></b>.<br>3. <b>At r = 0.18 m:</b><br>E = (9 &times; 10<sup>9</sup> &times; 1.6 &times; 10<sup>-7</sup>) / (0.18)<sup>2</sup> = 1440 / 0.0324 = <b>4.44 &times; 10<sup>4</sup> N C<sup>-1</sup></b>."
    },
    {
      q: "Derive an expression for the work done in rotating an electric dipole from angle &theta;<sub>1</sub> to &theta;<sub>2</sub> in a uniform electric field.",
      sol: "Work done dW in rotating dipole through d&theta; against restoring torque is dW = &tau; d&theta; = p E sin &theta; d&theta;.<br><br>Total work done from &theta;<sub>1</sub> to &theta;<sub>2</sub>:<br>W = &int;<sub>&theta;<sub>1</sub></sub><sup>&theta;<sub>2</sub></sup> p E sin &theta; d&theta; = p E [-cos &theta;]<sub>&theta;<sub>1</sub></sub><sup>&theta;<sub>2</sub></sup><br><b>W = p E (cos &theta;<sub>1</sub> - cos &theta;<sub>2</sub>)</b>."
    },
    {
      q: "Calculate the equivalent capacitance between terminals A and B of a bridge network containing five capacitors each of capacitance C = 10 &mu;F.",
      sol: "The 5 identical capacitors form a balanced Wheatstone bridge network (C<sub>1</sub> / C<sub>2</sub> = C<sub>3</sub> / C<sub>4</sub> = 1).<br>Since the bridge is balanced, the potential difference across the central bridge capacitor is zero, so no charge flows through it and it can be removed from the circuit.<br><br>The circuit simplifies to two parallel branches, each having two capacitors in series:<br>- Branch 1: C<sub>s1</sub> = (C &times; C) / (C + C) = C / 2 = 5 &mu;F.<br>- Branch 2: C<sub>s2</sub> = (C &times; C) / (C + C) = C / 2 = 5 &mu;F.<br><br>Equivalent capacitance C<sub>AB</sub> = C<sub>s1</sub> + C<sub>s2</sub> = 5 + 5 = <b>10 &mu;F = C</b>."
    },
    {
      q: "Distinguish between Polar and Non-Polar Dielectrics with two examples each.",
      sol: "1. <b>Non-Polar Dielectrics:</b> The centers of positive and negative charges coincide in the absence of an external electric field, so molecules have zero permanent dipole moment. Examples: H<sub>2</sub>, O<sub>2</sub>, CO<sub>2</sub>.<br>2. <b>Polar Dielectrics:</b> The centers of positive and negative charges do not coincide due to asymmetric molecular shape, possessing permanent dipole moments even without an external field. Examples: H<sub>2</sub>O, HCl, NH<sub>3</sub>."
    },
    {
      q: "An infinite line charge produces an electric field of magnitude 9.0 &times; 10<sup>4</sup> N C<sup>-1</sup> at a distance of 2.0 cm. Calculate the linear charge density &lambda;.",
      sol: "Given: E = 9.0 &times; 10<sup>4</sup> N C<sup>-1</sup>, r = 0.02 m.<br>E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r) = [2 / (4&pi;&epsilon;<sub>0</sub>)] (&lambda; / r)<br>9.0 &times; 10<sup>4</sup> = (2 &times; 9 &times; 10<sup>9</sup> &times; &lambda;) / 0.02 = (9 &times; 10<sup>11</sup>) &lambda;<br><b>&lambda; = (9.0 &times; 10<sup>4</sup>) / (9.0 &times; 10<sup>11</sup>) = 1.0 &times; 10<sup>-7</sup> C m<sup>-1</sup> = 0.1 &mu;C m<sup>-1</sup></b>."
    },
    {
      q: "What is the electrostatic potential energy of a dipole of moment 5 &times; 10<sup>-8</sup> C m in a uniform field of 10<sup>4</sup> N C<sup>-1</sup> at: (i) stable equilibrium, and (ii) unstable equilibrium?",
      sol: "1. <b>Stable Equilibrium (&theta; = 0&deg;):</b><br>U = -p E cos 0&deg; = -(5 &times; 10<sup>-8</sup>) &times; (10<sup>4</sup>) &times; 1 = <b>-5.0 &times; 10<sup>-4</sup> Joules</b>.<br><br>2. <b>Unstable Equilibrium (&theta; = 180&deg;):</b><br>U = -p E cos 180&deg; = -(5 &times; 10<sup>-8</sup>) &times; (10<sup>4</sup>) &times; (-1) = <b>+5.0 &times; 10<sup>-4</sup> Joules</b>."
    },
    {
      q: "A cube of side L has a charge q placed at its center. What is the electric flux through each face of the cube?",
      sol: "By Gauss's Law, the total outward flux through the entire closed cube is &Phi;<sub>total</sub> = q / &epsilon;<sub>0</sub>.<br>By cubic symmetry, flux is equally distributed across all 6 identical faces.<br>Flux through one face = <b>&Phi;<sub>one face</sub> = q / (6 &epsilon;<sub>0</sub>)</b>."
    },
    {
      q: "Show that the electric field at any point between two oppositely charged infinite parallel plane sheets of surface charge densities +&sigma; and -&sigma; is &sigma;/&epsilon;<sub>0</sub>, while outside it is zero.",
      sol: "1. <b>Between the sheets:</b> Electric field due to positive sheet (E<sub>+</sub> = &sigma;/2&epsilon;<sub>0</sub>, away) and negative sheet (E<sub>-</sub> = &sigma;/2&epsilon;<sub>0</sub>, towards) point in the SAME direction:<br><b>E<sub>inside</sub> = &sigma;/(2&epsilon;<sub>0</sub>) + &sigma;/(2&epsilon;<sub>0</sub>) = &sigma; / &epsilon;<sub>0</sub></b>.<br><br>2. <b>Outside the sheets:</b> Fields are equal in magnitude and OPPOSITE in direction:<br><b>E<sub>outside</sub> = &sigma;/(2&epsilon;<sub>0</sub>) - &sigma;/(2&epsilon;<sub>0</sub>) = 0</b>."
    },
    {
      q: "Explain why the capacitance of a capacitor increases when a conducting slab of thickness t (t < d) is introduced between its plates.",
      sol: "When a conducting slab of thickness t is inserted between capacitor plates of separation d, the electric field inside the conductor is zero (E = 0).<br>Electric field E<sub>0</sub> now exists only over distance (d - t).<br>Potential difference reduces to: V = E<sub>0</sub> (d - t) = (Q / &epsilon;<sub>0</sub> A) (d - t).<br>Capacitance becomes: <b>C = Q / V = &epsilon;<sub>0</sub> A / (d - t)</b>.<br>Since (d - t) &lt; d, the capacitance C is strictly greater than C<sub>0</sub>."
    },
    {
      q: "Calculate the total number of electrons constituting 1 Coulomb of negative charge.",
      sol: "Using quantization formula q = n e:<br>n = q / e = (1.0 C) / (1.602 &times; 10<sup>-19</sup> C) = <b>6.242 &times; 10<sup>18</sup> electrons</b>."
    },
    {
      q: "Calculate the electrostatic force between two protons separated by 1.6 &times; 10<sup>-15</sup> m inside an atomic nucleus.",
      sol: "F = [1 / (4&pi;&epsilon;<sub>0</sub>)] (e<sup>2</sup> / r<sup>2</sup>)<br>F = (9 &times; 10<sup>9</sup>) &times; (1.6 &times; 10<sup>-19</sup>)<sup>2</sup> / (1.6 &times; 10<sup>-15</sup>)<sup>2</sup><br>F = (9 &times; 10<sup>9</sup> &times; 2.56 &times; 10<sup>-38</sup>) / (2.56 &times; 10<sup>-30</sup>) = <b>90 Newtons (Repulsive)</b>."
    },
    {
      q: "What is the ratio of electric field at an axial point to an equatorial point of a short dipole at the same distance r?",
      sol: "Axial field: E<sub>axial</sub> = 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>). Equatorial field: E<sub>eq</sub> = p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>).<br>Ratio: <b>E<sub>axial</sub> / E<sub>eq</sub> = 2 : 1</b>."
    },
    {
      q: "Define Electric Flux (&Phi;<sub>E</sub>) and state its SI unit and dimensional formula.",
      sol: "Electric Flux &Phi;<sub>E</sub> is the measure of the total number of electric field lines passing normally through a given area: &Phi;<sub>E</sub> = &int;&int; <b>E</b> &sdot; d<b>A</b>.<br>SI Unit: <b>N m<sup>2</sup> C<sup>-1</sup> or Volt meter (V m)</b>.<br>Dimensional Formula: <b>[M L<sup>3</sup> T<sup>-3</sup> A<sup>-1</sup>]</b>."
    },
    {
      q: "A point charge q is placed at one corner of a cube of edge a. Calculate the electric flux passing through the cube.",
      sol: "To enclose the corner charge symmetrically, 8 identical cubes must be assembled sharing that corner vertex.<br>Total flux through all 8 cubes is q / &epsilon;<sub>0</sub>.<br>Therefore, flux through one single cube is: <b>&Phi; = q / (8 &epsilon;<sub>0</sub>)</b>."
    },
    {
      q: "Two metallic spheres of radii r<sub>1</sub> and r<sub>2</sub> are charged to the same potential V. Find the ratio of their surface charge densities &sigma;<sub>1</sub> / &sigma;<sub>2</sub>.",
      sol: "Potential of a sphere V = Q / (4&pi;&epsilon;<sub>0</sub> r) = (&sigma; 4&pi; r<sup>2</sup>) / (4&pi;&epsilon;<sub>0</sub> r) = &sigma; r / &epsilon;<sub>0</sub>.<br>Since V is identical: &sigma;<sub>1</sub> r<sub>1</sub> / &epsilon;<sub>0</sub> = &sigma;<sub>2</sub> r<sub>2</sub> / &epsilon;<sub>0</sub> &rArr; <b>&sigma;<sub>1</sub> / &sigma;<sub>2</sub> = r<sub>2</sub> / r<sub>1</sub></b>."
    },
    {
      q: "Why does the capacitance of a parallel plate capacitor increase when plate area A is increased?",
      sol: "Capacitance is C = &epsilon;<sub>0</sub> A / d. Increasing the plate area A allows the capacitor to hold more electric charge Q at the same electric field and surface charge density &sigma; = Q/A, thereby reducing potential difference V for a given charge and increasing capacitance."
    },
    {
      q: "Calculate the energy density in a region of space where a uniform electric field of magnitude 10<sup>5</sup> V m<sup>-1</sup> exists in vacuum.",
      sol: "Energy density u = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> = 1/2 &times; (8.854 &times; 10<sup>-12</sup> F m<sup>-1</sup>) &times; (10<sup>5</sup> V m<sup>-1</sup>)<sup>2</sup><br>u = 0.5 &times; (8.854 &times; 10<sup>-12</sup>) &times; (10<sup>10</sup>) = <b>0.04427 J m<sup>-3</sup> = 4.427 &times; 10<sup>-2</sup> J m<sup>-3</sup></b>."
    }
  ];

  const lasData = [
    {
      q: "Derive an expression for the electric potential at a point at distance r from an isolated positive point charge Q in vacuum.",
      sol: "<b>1. Theoretical Setup:</b><br>Consider an isolated point charge +Q placed at origin O in vacuum. We wish to determine electric potential V at point P located at distance r from O.<br>By definition, V equals work done in moving unit positive test charge (+1 C) from infinity to P against repulsive field of +Q.<br><br><b>2. Force at Intermediate Point:</b><br>Let the test charge be at an intermediate point A at distance x from O. Electrostatic force on +1 C is:<br>F = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q &times; 1 / x<sup>2</sup>) = [Q / (4&pi;&epsilon;<sub>0</sub> x<sup>2</sup>)] (directed radially away along OA).<br><br><b>3. Work Done for Small Displacement:</b><br>Small work done dW in moving test charge against force F through displacement dx towards O is:<br>dW = <b>F</b> &sdot; d<b>x</b> = F dx cos 180&deg; = -F dx = - [Q / (4&pi;&epsilon;<sub>0</sub> x<sup>2</sup>)] dx.<br><br><b>4. Integration from &infin; to r:</b><br>Total work done W = &int;<sub>&infin;</sub><sup>r</sup> - [Q / (4&pi;&epsilon;<sub>0</sub> x<sup>2</sup>)] dx = - [Q / (4&pi;&epsilon;<sub>0</sub>)] &int;<sub>&infin;</sub><sup>r</sup> x<sup>-2</sup> dx<br>W = - [Q / (4&pi;&epsilon;<sub>0</sub>)] [ -1/x ]<sub>&infin;</sub><sup>r</sup> = [Q / (4&pi;&epsilon;<sub>0</sub>)] [ 1/r - 1/&infin; ]<br><br><b>V = [1 / (4&pi;&epsilon;<sub>0</sub>)] [Q / r]</b>."
    },
    {
      q: "Derive an expression for the electric potential at any general point (r, &theta;) due to a short electric dipole of moment p. Hence, deduce expressions for axial and equatorial points.",
      sol: "<b>1. Geometry and Setup:</b><br>Consider a dipole consisting of charges -q at A and +q at B separated by 2a, with center O. Let P be a point with polar coordinates (r, &theta;), where r >> a.<br>Let distances of P from +q and -q be r<sub>1</sub> and r<sub>2</sub>.<br><br><b>2. Distance Approximations:</b><br>Draw perpendiculars from A and B onto line OP:<br>r<sub>1</sub> &approx; r - a cos &theta;<br>r<sub>2</sub> &approx; r + a cos &theta;<br><br><b>3. Net Potential Calculation:</b><br>V = V<sub>+</sub> + V<sub>-</sub> = [q / (4&pi;&epsilon;<sub>0</sub>)] [ 1 / r<sub>1</sub> - 1 / r<sub>2</sub> ]<br>V = [q / (4&pi;&epsilon;<sub>0</sub>)] [ 1 / (r - a cos &theta;) - 1 / (r + a cos &theta;) ]<br>V = [q / (4&pi;&epsilon;<sub>0</sub>)] [ (2 a cos &theta;) / (r<sup>2</sup> - a<sup>2</sup> cos<sup>2</sup> &theta;) ]<br><br>Since dipole moment p = q (2a) and r >> a (neglecting a<sup>2</sup> cos<sup>2</sup> &theta; compared to r<sup>2</sup>):<br><b>V = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ (p cos &theta;) / r<sup>2</sup> ]</b>.<br><br><b>4. Special Cases:</b><br>- <b>Axial Line (&theta; = 0&deg;):</b> cos 0&deg; = 1 &rArr; <b>V<sub>axial</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [p / r<sup>2</sup>]</b>.<br>- <b>Equatorial Line (&theta; = 90&deg;):</b> cos 90&deg; = 0 &rArr; <b>V<sub>eq</sub> = 0</b>."
    },
    {
      q: "Derive an expression for the capacitance of a parallel plate capacitor with a dielectric slab of thickness t (t < d) inserted between its plates.",
      sol: "<b>1. Setup:</b><br>Consider a parallel plate capacitor of plate area A and separation d carrying charges &plusmn;Q and surface charge densities &plusmn;&sigma; = &plusmn;Q/A.<br>In vacuum, electric field between plates is E<sub>0</sub> = &sigma; / &epsilon;<sub>0</sub> = Q / (&epsilon;<sub>0</sub> A).<br><br><b>2. Effect of Dielectric Slab:</b><br>When a dielectric slab of thickness t and dielectric constant K is inserted, the electric field inside the slab is reduced to E = E<sub>0</sub> / K.<br>The field in the remaining space of thickness (d - t) remains E<sub>0</sub>.<br><br><b>3. Potential Difference Between Plates:</b><br>V = E<sub>0</sub> (d - t) + E t = E<sub>0</sub> (d - t) + (E<sub>0</sub> / K) t<br>V = E<sub>0</sub> [ (d - t) + (t / K) ] = [ Q / (&epsilon;<sub>0</sub> A) ] [ d - t + (t / K) ].<br><br><b>4. Capacitance:</b><br>C = Q / V = Q / [ (Q / (&epsilon;<sub>0</sub> A)) (d - t + t/K) ]<br><b>C = &epsilon;<sub>0</sub> A / [ d - t + (t / K) ]</b>.<br><br><b>Special Case:</b> When dielectric completely fills the gap (t = d):<br>C = &epsilon;<sub>0</sub> A / (d/K) = <b>K (&epsilon;<sub>0</sub> A / d) = K C<sub>0</sub></b>."
    },
    {
      q: "Derive an expression for the electric field intensity on the axial line of an electric dipole. Hence, deduce the expression for a short dipole.",
      sol: "<b>1. Setup:</b><br>Consider an electric dipole of charges -q and +q separated by 2a with center O. Let P be a point on the axial line at distance r from center O.<br><br><b>2. Field Magnitudes:</b><br>Distance of P from +q is (r - a): E<sub>+</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [q / (r - a)<sup>2</sup>] (directed along OP away from +q).<br>Distance of P from -q is (r + a): E<sub>-</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [q / (r + a)<sup>2</sup>] (directed towards -q along PO).<br><br><b>3. Net Axial Field:</b><br>E<sub>axial</sub> = E<sub>+</sub> - E<sub>-</sub> = [q / (4&pi;&epsilon;<sub>0</sub>)] [ 1 / (r - a)<sup>2</sup> - 1 / (r + a)<sup>2</sup> ]<br>E<sub>axial</sub> = [q / (4&pi;&epsilon;<sub>0</sub>)] [ (r + a)<sup>2</sup> - (r - a)<sup>2</sup> ] / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> = [q / (4&pi;&epsilon;<sub>0</sub>)] [ 4 a r ] / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup>.<br><br>Substitute p = q (2a):<br><b>E<sub>axial</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ 2 p r / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ]</b>.<br><br><b>4. Short Dipole Approximation (r >> a):</b><br><b>E<sub>axial</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ 2 p / r<sup>3</sup> ]</b>, directed parallel to dipole moment vector <b>p</b>."
    },
    {
      q: "Derive an expression for the electric field intensity on the equatorial line of an electric dipole.",
      sol: "<b>1. Setup:</b><br>Consider dipole charges -q and +q separated by 2a. Let point Q be on the perpendicular bisector at distance r from center O.<br>Distance of Q from each charge is d = &radic;(r<sup>2</sup> + a<sup>2</sup>).<br>Magnitude E<sub>+</sub> = E<sub>-</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [q / (r<sup>2</sup> + a<sup>2</sup>)].<br><br><b>2. Resolving Components:</b><br>Vertical components E<sub>+</sub> sin &theta; and E<sub>-</sub> sin &theta; cancel out.<br>Horizontal components add up in the direction opposite to <b>p</b>:<br>E<sub>eq</sub> = 2 E cos &theta; = 2 [q / (4&pi;&epsilon;<sub>0</sub> (r<sup>2</sup> + a<sup>2</sup>))] [ a / &radic;(r<sup>2</sup> + a<sup>2</sup>) ]<br>E<sub>eq</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ (2 a q) / (r<sup>2</sup> + a<sup>2</sup>)<sup>3/2</sup> ].<br><br>Substitute p = q (2a):<br><b>E<sub>eq</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ p / (r<sup>2</sup> + a<sup>2</sup>)<sup>3/2</sup> ]</b>.<br>For short dipole (r >> a): <b>E<sub>eq</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ p / r<sup>3</sup> ]</b>, directed anti-parallel to <b>p</b>."
    },
    {
      q: "State Gauss's Theorem in electrostatics. Using Gauss's Law, derive an expression for the electric field intensity due to an infinitely long straight uniformly charged wire.",
      sol: "<b>1. Statement:</b><br>Gauss's Theorem states that total outward electric flux through any closed Gaussian surface in free space equals 1/&epsilon;<sub>0</sub> times net enclosed charge: &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>.<br><br><b>2. Derivation for Infinite Wire (&lambda;):</b><br>Consider a long thin wire carrying uniform linear charge density &lambda;.<br>Construct a coaxial cylindrical Gaussian surface of radius r and length L centered on the wire.<br>Net enclosed charge: q<sub>enclosed</sub> = &lambda; L.<br><br>Flux through the 3 faces:<br>- Top circular face: <b>E</b> &perp; d<b>A</b> &rArr; &Phi;<sub>1</sub> = 0.<br>- Bottom circular face: <b>E</b> &perp; d<b>A</b> &rArr; &Phi;<sub>2</sub> = 0.<br>- Curved surface: <b>E</b> || d<b>A</b> &rArr; &Phi;<sub>3</sub> = E &int; dA = E (2&pi; r L).<br><br>Total Flux &Phi;<sub>total</sub> = E (2&pi; r L).<br>Applying Gauss's Law:<br>E (2&pi; r L) = &lambda; L / &epsilon;<sub>0</sub> &rArr; <b>E = &lambda; / (2&pi; &epsilon;<sub>0</sub> r)</b>."
    },
    {
      q: "Using Gauss's Law, derive an expression for the electric field intensity due to an infinite plane sheet of charge with uniform surface charge density &sigma;.",
      sol: "<b>1. Setup:</b><br>Consider an infinite thin non-conducting plane sheet with uniform surface charge density &sigma;. Electric field lines emerge perpendicularly outwards on both sides.<br>Construct a cylindrical pillbox Gaussian surface of cross-sectional area A piercing the sheet perpendicularly.<br><br><b>2. Enclosed Charge & Flux:</b><br>Enclosed charge q<sub>enclosed</sub> = &sigma; A.<br>Flux through curved surface = 0 (since <b>E</b> is parallel to surface).<br>Flux through left and right flat end faces = E A + E A = 2 E A.<br><br><b>3. Applying Gauss's Law:</b><br>2 E A = &sigma; A / &epsilon;<sub>0</sub><br><b>E = &sigma; / (2 &epsilon;<sub>0</sub>)</b>.<br>The electric field intensity is completely independent of distance from the sheet."
    },
    {
      q: "Using Gauss's Law, derive expressions for the electric field intensity due to a uniformly charged thin spherical shell of radius R carrying charge Q: (i) outside the shell (r &ge; R), and (ii) inside the shell (r < R).",
      sol: "<b>1. Case I: Outside the Shell (r &ge; R):</b><br>Construct a concentric spherical Gaussian surface of radius r &ge; R.<br>By spherical symmetry, <b>E</b> is uniform and radial. &Phi; = &oint; <b>E</b> &sdot; d<b>A</b> = E (4&pi; r<sup>2</sup>).<br>Enclosed charge = Q.<br>By Gauss's Law: E (4&pi; r<sup>2</sup>) = Q / &epsilon;<sub>0</sub> &rArr; <b>E<sub>out</sub> = [1 / (4&pi;&epsilon;<sub>0</sub>)] [Q / r<sup>2</sup>]</b>.<br><br><b>2. Case II: Inside the Shell (r < R):</b><br>Construct a concentric spherical Gaussian surface of radius r < R.<br>Since all charge resides entirely on the outer surface of the shell, enclosed charge is zero (q<sub>enclosed</sub> = 0).<br>By Gauss's Law: E (4&pi; r<sup>2</sup>) = 0 / &epsilon;<sub>0</sub> &rArr; <b>E<sub>in</sub> = 0</b>.<br>This fundamental result proves electrostatic shielding."
    },
    {
      q: "Derive an expression for the electrostatic energy stored in a charged parallel plate capacitor of capacitance C charged to potential difference V. Hence, find the energy density.",
      sol: "<b>1. Energy Derivation:</b><br>Let at any instant of charging, charge on capacitor be q and potential difference be v = q / C.<br>Small work done in transferring additional charge dq is: dW = v dq = (q / C) dq.<br><br>Total work done in charging from q = 0 to q = Q:<br>W = &int;<sub>0</sub><sup>Q</sup> (q / C) dq = (1 / C) [ q<sup>2</sup> / 2 ]<sub>0</sub><sup>Q</sup> = <b>Q<sup>2</sup> / (2 C)</b>.<br>Substituting Q = C V:<br><b>U = 1/2 C V<sup>2</sup> = 1/2 Q V = Q<sup>2</sup> / (2C)</b>.<br><br><b>2. Energy Density (u):</b><br>Substitute C = &epsilon;<sub>0</sub> A / d and V = E d:<br>U = 1/2 (&epsilon;<sub>0</sub> A / d) (E d)<sup>2</sup> = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> (A d).<br>Since volume of space between plates is Volume = A d:<br>Energy Density <b>u = U / (A d) = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> [J m<sup>-3</sup>]</b>."
    },
    {
      q: "Explain with diagrams and mathematical formulation the behavior of a conductor placed in an electrostatic field, detailing five fundamental properties.",
      sol: "<b>1. Net Electric Field Inside is Zero (E = 0):</b> Mobile free electrons drift until internal field cancels external field completely.<br><b>2. Static Charge Resides Entirely on Surface:</b> By Gauss's Law, since E = 0 inside, net enclosed charge is zero.<br><b>3. Electric Field at Surface is Strictly Normal:</b> If tangential field existed, charges would flow; magnitude is E = &sigma; / &epsilon;<sub>0</sub>.<br><b>4. Electrostatic Potential is Constant Throughout:</b> Since E = -dV/dr = 0, potential V is uniform throughout the interior and on the surface.<br><b>5. Electric Field is Zero in Interior Cavity (Electrostatic Shielding):</b> Any hollow cavity inside a conductor is completely isolated from external fields."
    },
    {
      q: "Explain the loss of electrostatic energy when two charged capacitors are connected together in parallel.",
      sol: "<b>1. System Description:</b><br>Let capacitors C<sub>1</sub> and C<sub>2</sub> be charged to potentials V<sub>1</sub> and V<sub>2</sub>.<br>Initial Total Energy: U<sub>i</sub> = 1/2 C<sub>1</sub> V<sub>1</sub><sup>2</sup> + 1/2 C<sub>2</sub> V<sub>2</sub><sup>2</sup>.<br><br><b>2. Common Potential:</b><br>When connected in parallel, common potential is V = (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>).<br>Final Total Energy: U<sub>f</sub> = 1/2 (C<sub>1</sub> + C<sub>2</sub>) V<sup>2</sup> = 1/2 (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>)<sup>2</sup> / (C<sub>1</sub> + C<sub>2</sub>).<br><br><b>3. Energy Loss (&Delta;U):</b><br>&Delta;U = U<sub>i</sub> - U<sub>f</sub> = <b>[ C<sub>1</sub> C<sub>2</sub> (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup> ] / [ 2 (C<sub>1</sub> + C<sub>2</sub>) ]</b>.<br>Since (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup> &ge; 0, &Delta;U is always positive. This energy is dissipated as heat in connecting wires and electromagnetic radiation."
    },
    {
      q: "Derive the expression for electric field and potential due to a uniformly charged thin spherical shell at all points: (i) outside (r > R), (ii) on the surface (r = R), and (iii) inside (r < R). Sketch graphs of E vs r and V vs r.",
      sol: "<b>1. Electric Field E(r):</b><br>- Outside (r &ge; R): E = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / r<sup>2</sup>) &prop; 1/r<sup>2</sup>.<br>- Surface (r = R): E = &sigma; / &epsilon;<sub>0</sub>.<br>- Inside (r < R): E = 0.<br><br><b>2. Electric Potential V(r):</b><br>- Outside (r &ge; R): V = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / r) &prop; 1/r.<br>- Inside and on surface (r &le; R): Since E = 0 inside, V is constant: V = [1 / (4&pi;&epsilon;<sub>0</sub>)] (Q / R).<br><br><b>3. Graphical Behavior:</b><br>- E vs r: Zero from 0 to R, jumps to maximum at R, decays as 1/r<sup>2</sup> for r > R.<br>- V vs r: Constant horizontal line from 0 to R, decays as 1/r for r > R."
    },
    {
      q: "Derive an expression for the potential energy of a system of three point charges q<sub>1</sub>, q<sub>2</sub>, and q<sub>3</sub> placed at position vectors r<sub>1</sub>, r<sub>2</sub>, and r<sub>3</sub> in free space.",
      sol: "<b>1. Work in bringing q<sub>1</sub> from infinity to r<sub>1</sub>:</b><br>Since no field exists initially: W<sub>1</sub> = 0.<br><br><b>2. Work in bringing q<sub>2</sub> from infinity to r<sub>2</sub>:</b><br>Potential at r<sub>2</sub> due to q<sub>1</sub> is V<sub>1</sub>(r<sub>2</sub>) = [1 / (4&pi;&epsilon;<sub>0</sub>)] (q<sub>1</sub> / r<sub>12</sub>).<br>W<sub>2</sub> = q<sub>2</sub> V<sub>1</sub>(r<sub>2</sub>) = [1 / (4&pi;&epsilon;<sub>0</sub>)] [q<sub>1</sub> q<sub>2</sub> / r<sub>12</sub>].<br><br><b>3. Work in bringing q<sub>3</sub> from infinity to r<sub>3</sub>:</b><br>Potential at r<sub>3</sub> due to q<sub>1</sub> and q<sub>2</sub> is V<sub>12</sub>(r<sub>3</sub>) = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ q<sub>1</sub> / r<sub>13</sub> + q<sub>2</sub> / r<sub>23</sub> ].<br>W<sub>3</sub> = q<sub>3</sub> V<sub>12</sub>(r<sub>3</sub>) = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ q<sub>1</sub> q<sub>3</sub> / r<sub>13</sub> + q<sub>2</sub> q<sub>3</sub> / r<sub>23</sub> ].<br><br><b>4. Total Potential Energy:</b><br>U = W<sub>1</sub> + W<sub>2</sub> + W<sub>3</sub> = <b>[1 / (4&pi;&epsilon;<sub>0</sub>)] [ (q<sub>1</sub> q<sub>2</sub> / r<sub>12</sub>) + (q<sub>2</sub> q<sub>3</sub> / r<sub>23</sub>) + (q<sub>3</sub> q<sub>1</sub> / r<sub>31</sub>) ]</b>."
    },
    {
      q: "Discuss the effect of introducing a dielectric slab of dielectric constant K into a parallel plate capacitor under two conditions: (i) when battery remains connected, and (ii) when battery is disconnected.",
      sol: "<b>1. When Battery Remains Connected (V = constant):</b><br>- Potential Difference: V' = V (constant).<br>- Capacitance: C' = K C<sub>0</sub> (increases by K).<br>- Charge on Plates: Q' = C' V = K (C<sub>0</sub> V) = K Q<sub>0</sub> (increases by K).<br>- Electric Field: E' = V / d = E<sub>0</sub> (constant).<br>- Energy Stored: U' = 1/2 C' V<sup>2</sup> = K (1/2 C<sub>0</sub> V<sup>2</sup>) = K U<sub>0</sub> (increases by K).<br><br><b>2. When Battery is Disconnected (Q = constant):</b><br>- Charge: Q' = Q<sub>0</sub> (conserved).<br>- Capacitance: C' = K C<sub>0</sub> (increases by K).<br>- Potential Difference: V' = Q / C' = V<sub>0</sub> / K (decreases by K).<br>- Electric Field: E' = E<sub>0</sub> / K (decreases by K).<br>- Energy Stored: U' = Q<sup>2</sup> / (2 C') = U<sub>0</sub> / K (decreases by K)."
    },
    {
      q: "Provide an exhaustive master synthesis of JKBOSE / NCERT Unit I: Electrostatics (09 Marks) summarizing core principles, symmetry laws, and technological applications.",
      sol: "<b>1. Fundamental Electrostatic Principles:</b><br>- Quantization: q = &plusmn;n e (e = 1.602 &times; 10<sup>-19</sup> C).<br>- Coulomb's Law: <b>F</b> = [1 / (4&pi;&epsilon;<sub>0</sub>)] (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>) <b>r̂</b>.<br>- Superposition: <b>F</b><sub>net</sub> = &Sigma; <b>F</b><sub>i</sub>.<br><br><b>2. Fields and Potentials:</b><br>- Field: <b>E</b> = <b>F</b> / q<sub>0</sub>; Relation: <b>E = - &nabla;V</b> (E = -dV/dr).<br>- Dipole: <b>p</b> = q (2<b>a</b>); Torque <b>&tau;</b> = <b>p</b> &times; <b>E</b>; Energy U = -<b>p</b> &sdot; <b>E</b>.<br>- Potential: V = Q / (4&pi;&epsilon;<sub>0</sub> r); Equipotentials are normal to <b>E</b>.<br><br><b>3. Gauss's Law & Capacitance:</b><br>- Gauss's Law: &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>.<br>- Parallel Plate Capacitor: C<sub>0</sub> = &epsilon;<sub>0</sub> A / d, with dielectric slab C = &epsilon;<sub>0</sub> A / [d - t + t/K].<br>- Combinations: 1/C<sub>s</sub> = &Sigma; 1/C<sub>i</sub>; C<sub>p</sub> = &Sigma; C<sub>i</sub>.<br>- Stored Energy: U = 1/2 C V<sup>2</sup>; Energy Density u = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup>.<br><br><b>4. Applications:</b> Electrostatic shielding, Van de Graaff accelerators, defibrillators, photocopiers, and touchscreens."
    }
  ];

  let html = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">
  
  <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid ${themeColor}; padding-bottom: 10px;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 22px; font-weight: bold; text-align: center !important;">Class 12 Physics Unit I: Electrostatics (09 Marks) NCERT & Master Solutions</h2>
    <p style="color: #B0BEC5; margin: 5px 0 0 0; font-size: 15px; text-align: center !important;">Electric Charges, Fields, Potential & Capacitance — 100 Authentic Questions & Step-by-Step Solutions</p>
  </div>

  <h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 25px;">Part A: Multiple Choice Questions (Q1 - Q25)</h3>`;

  mcqsData.forEach((mcq, idx) => {
    const qNum = idx + 1;
    html += `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 16.5px; font-weight: bold; line-height: 1.55;">Q${qNum}: ${mcq.q}</h3>
    <div style="margin: 12px 0; text-align: left !important; line-height: 1.8; color: #FFCC80;">
      <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${mcq.opts[0]}</div>
      <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${mcq.opts[1]}</div>
      <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${mcq.opts[2]}</div>
      <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${mcq.opts[3]}</div>
    </div>
    <div style="background: rgba(255, 81, 47, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Explanation:</b>
      <b>Correct Answer: <span style="color: ${themeColor};">${mcq.ans}</span></b><br>
      ${mcq.exp}
    </div>
  </div>`;
  });

  html += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 30px;">Part B: Very Short Answer Questions (Q26 - Q55)</h3>`;
  vsasData.forEach((vsa, idx) => {
    const qNum = idx + 26;
    html += `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 16.5px; font-weight: bold; line-height: 1.55;">Q${qNum}: ${vsa.q}</h3>
    <div style="background: rgba(255, 81, 47, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Explanation:</b>
      ${vsa.sol}
    </div>
  </div>`;
  });

  html += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 30px;">Part C: Short Answer Questions (Q56 - Q85)</h3>`;
  sasData.forEach((sa, idx) => {
    const qNum = idx + 56;
    html += `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 16.5px; font-weight: bold; line-height: 1.55;">Q${qNum}: ${sa.q}</h3>
    <div style="background: rgba(255, 81, 47, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Step-by-Step Derivation:</b>
      ${sa.sol}
    </div>
  </div>`;
  });

  html += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 30px;">Part D: Long Answer Questions (Q86 - Q100)</h3>`;
  lasData.forEach((la, idx) => {
    const qNum = idx + 86;
    html += `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 16.5px; font-weight: bold; line-height: 1.55;">Q${qNum}: ${la.q}</h3>
    <div style="background: rgba(255, 81, 47, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Detailed Derivation & Theoretical Proof:</b>
      ${la.sol}
    </div>
  </div>`;
  });

  html += `\n</div>`;
  return html;
}

const overviewHtml = generateFullOverviewHtml();
const solutionsHtml = generate100GenuineQuestions();

const tsContent = `// Class 12 Physics Unit I: Electrostatics (JKBOSE / NCERT Official Syllabus - 09 Marks)
// High-Level Pradeep's / S.L. Arora Digital Reference Book Content & 100 Genuine Detailed Solutions

export const c12Phy1HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c12Phy1HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully rebuilt c12-phy-1.ts with COMPLETE JKBOSE UNIT I: ELECTROSTATICS (Charges, Fields, Potential, Capacitance & 100 Questions)!");
