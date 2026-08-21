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

function cardWrapper(title, content) {
  return `
  <div style="background: rgba(0,0,0,0.22); border: 1.2px solid rgba(255, 81, 47, 0.3); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 18px; font-weight: bold;">${title}</h3>
    <div style="color: #E2E8F0; line-height: 1.7; font-size: 15.5px;">${content}</div>
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

const svg6_potential_equipotential = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 520" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow6" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">6. EQUIPOTENTIAL SURFACES (POINT +q)</text>

    <circle cx="217" cy="230" r="140" fill="rgba(0,229,255,0.03)" stroke="#00E5FF" stroke-width="1.5" stroke-dasharray="5,5"/>
    <text x="217" y="80" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">V3 = 10 V</text>

    <circle cx="217" cy="230" r="95" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-width="1.8" stroke-dasharray="5,5"/>
    <text x="217" y="125" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">V2 = 20 V</text>

    <circle cx="217" cy="230" r="50" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="2.2" stroke-dasharray="5,5"/>
    <text x="217" y="170" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="13.5" font-weight="bold">V1 = 40 V</text>

    <circle cx="217" cy="230" r="22" fill="url(#qRedGlow6)" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="217" y="236" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+q</text>

    <line x1="217" y1="205" x2="217" y2="70" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <line x1="217" y1="255" x2="217" y2="390" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <line x1="192" y1="230" x2="55" y2="230" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <line x1="242" y1="230" x2="380" y2="230" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>

    <text x="217" y="415" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">E is always Normal to Equipotential Surface</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 6.1: Concentric Equipotential Spheres</text>
  </g>

  <line x1="460" y1="25" x2="460" y2="495" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(470, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">EQUIPOTENTIALS IN UNIFORM FIELD</text>

    <line x1="30" y1="120" x2="400" y2="120" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed1)"/>
    <line x1="30" y1="210" x2="400" y2="210" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed1)"/>
    <line x1="30" y1="300" x2="400" y2="300" stroke="#FF512F" stroke-width="2" marker-end="url(#mRed1)"/>
    <text x="385" y="105" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">E (Field)</text>

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

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">7. PARALLEL PLATE CAPACITOR (DIELECTRIC)</text>

    <rect x="65" y="80" width="18" height="280" rx="4" fill="#FF512F"/>
    <text x="74" y="65" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">+Q (+&#963;)</text>

    <rect x="350" y="80" width="18" height="280" rx="4" fill="#00E5FF"/>
    <text x="359" y="65" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">-Q (-&#963;)</text>

    <rect x="150" y="80" width="135" height="280" rx="4" fill="rgba(255,215,0,0.18)" stroke="#FFD700" stroke-width="2"/>
    <text x="217" y="210" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">Dielectric (K)</text>
    <text x="217" y="235" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5">Thickness t</text>

    <text x="165" y="150" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">-&#963;p</text>
    <text x="165" y="220" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">-&#963;p</text>
    <text x="165" y="290" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">-&#963;p</text>

    <text x="260" y="150" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">+&#963;p</text>
    <text x="260" y="220" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">+&#963;p</text>
    <text x="260" y="290" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">+&#963;p</text>

    <line x1="65" y1="385" x2="368" y2="385" stroke="#94A3B8" stroke-width="2"/>
    <line x1="65" y1="380" x2="65" y2="390" stroke="#94A3B8" stroke-width="2"/>
    <line x1="368" y1="380" x2="368" y2="390" stroke="#94A3B8" stroke-width="2"/>
    <text x="217" y="405" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="15" font-weight="bold">Distance d</text>

    <text x="217" y="430" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="15" font-weight="bold">C = &#949;0 A / (d - t + t/K)</text>

    <rect x="25" y="445" width="385" height="34" rx="6" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1"/>
    <text x="217" y="468" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14.5" font-weight="bold">Fig 7.1: Parallel Plate Capacitor with Dielectric</text>
  </g>

  <line x1="460" y1="25" x2="460" y2="495" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(470, 15)">
    <rect x="0" y="0" width="435" height="490" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="217" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">COMBINATIONS OF CAPACITORS</text>

    <rect x="20" y="60" width="395" height="175" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
    <text x="35" y="85" fill="#FFD700" font-family="sans-serif" font-size="15.5" font-weight="bold">Series: Q is Same, V = V1 + V2 + V3</text>

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

    <rect x="20" y="250" width="395" height="180" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
    <text x="35" y="275" fill="#FFD700" font-family="sans-serif" font-size="15.5" font-weight="bold">Parallel: V is Same, Q = Q1 + Q2</text>

    <line x1="50" y1="350" x2="110" y2="350" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="110" y1="305" x2="110" y2="395" stroke="#FFFFFF" stroke-width="2.5"/>

    <line x1="110" y1="315" x2="190" y2="315" stroke="#FFFFFF" stroke-width="2"/>
    <line x1="190" y1="295" x2="190" y2="335" stroke="#FF512F" stroke-width="3.5"/>
    <line x1="205" y1="295" x2="205" y2="335" stroke="#FF512F" stroke-width="3.5"/>
    <text x="197" y="290" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="13" font-weight="bold">C1</text>
    <line x1="205" y1="315" x2="285" y2="315" stroke="#FFFFFF" stroke-width="2"/>

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

console.log("Compiling comprehensive 5-layer gold standard textbook content...");
