const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F";

// SVG 1: Coulomb's Law & Superposition (Section 3)
const svg1_coulomb = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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
    <marker id="mRed1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGreen1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#76FF03"/>
    </marker>
    <marker id="mYellow1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#FFD700"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">1. COULOMB'S LAW (VECTOR FORM)</text>

    <circle cx="70" cy="410" r="6" fill="#94A3B8"/>
    <text x="50" y="440" fill="#94A3B8" font-family="sans-serif" font-size="16" font-weight="bold">O (Origin)</text>

    <circle cx="180" cy="150" r="26" fill="url(#qRedGlow1)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="180" y="157" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">+q1</text>

    <circle cx="350" cy="280" r="26" fill="url(#qCyanGlow1)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="350" y="287" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">+q2</text>

    <line x1="70" y1="410" x2="162" y2="170" stroke="#94A3B8" stroke-width="3" marker-end="url(#mYellow1)"/>
    <text x="95" y="280" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">r1</text>

    <line x1="70" y1="410" x2="330" y2="295" stroke="#94A3B8" stroke-width="3" marker-end="url(#mYellow1)"/>
    <text x="210" y="380" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">r2</text>

    <line x1="180" y1="150" x2="330" y2="265" stroke="#00E5FF" stroke-width="3.5" marker-end="url(#mCyan1)"/>
    <text x="280" y="200" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">r21 = r2 - r1</text>

    <line x1="180" y1="150" x2="90" y2="80" stroke="#FF512F" stroke-width="3.5" marker-end="url(#mRed1)"/>
    <text x="145" y="70" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">F12 = -F21</text>

    <line x1="350" y1="280" x2="435" y2="345" stroke="#FF512F" stroke-width="3.5" marker-end="url(#mRed1)"/>
    <text x="385" y="375" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">F21</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 1.1: Coulomb's Law (Newton's 3rd Law)</text>
  </g>

  <g transform="translate(490, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">SUPERPOSITION PRINCIPLE</text>

    <circle cx="190" cy="260" r="26" fill="url(#qGoldGlow1)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="190" y="267" text-anchor="middle" fill="#0B0F19" font-family="sans-serif" font-size="18" font-weight="bold">+q0</text>

    <circle cx="160" cy="95" r="20" fill="url(#qRedGlow1)"/>
    <text x="160" y="101" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">q1</text>

    <circle cx="70" cy="395" r="20" fill="url(#qCyanGlow1)"/>
    <text x="70" y="401" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">q2</text>

    <circle cx="360" cy="395" r="20" fill="url(#qCyanGlow1)"/>
    <text x="360" y="401" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">q3</text>

    <line x1="190" y1="260" x2="210" y2="370" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen1)"/>
    <text x="170" y="355" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">F1</text>

    <line x1="190" y1="260" x2="290" y2="155" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen1)"/>
    <text x="240" y="185" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">F2</text>

    <line x1="190" y1="260" x2="95" y2="165" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen1)"/>
    <text x="115" y="205" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">F3</text>

    <line x1="290" y1="155" x2="375" y2="155" stroke="#94A3B8" stroke-width="2" stroke-dasharray="5,5"/>
    <line x1="190" y1="260" x2="375" y2="155" stroke="#FF512F" stroke-width="4" marker-end="url(#mRed1)"/>
    <text x="345" y="130" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">F_net = Sum Fi</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 1.2: Superposition of Forces</text>
  </g>
</svg>`;

// SVG 2: Electric Field Patterns (Section 4)
const svg2_field_lines = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow2" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow2" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="mRed2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGold2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FFD700"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="930" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="465" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="20" font-weight="bold">2. ELECTRIC FIELD PATTERNS &amp; FIELD LINES</text>

    <!-- Sub 1: Isolated +q -->
    <g transform="translate(15, 60)">
      <rect x="0" y="0" width="210" height="430" rx="12" fill="rgba(255,81,47,0.06)" stroke="#FF512F" stroke-width="1.5"/>
      <text x="105" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">Isolated +q</text>
      <circle cx="105" cy="210" r="26" fill="url(#qRedGlow2)" stroke="#FFFFFF" stroke-width="2"/>
      <text x="105" y="218" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="24" font-weight="bold">+</text>

      <line x1="105" y1="184" x2="105" y2="85" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed2)"/>
      <line x1="105" y1="236" x2="105" y2="335" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed2)"/>
      <line x1="79" y1="210" x2="15" y2="210" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed2)"/>
      <line x1="131" y1="210" x2="195" y2="210" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed2)"/>

      <line x1="86" y1="191" x2="28" y2="133" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed2)"/>
      <line x1="124" y1="229" x2="182" y2="287" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed2)"/>
      <line x1="124" y1="191" x2="182" y2="133" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed2)"/>
      <line x1="86" y1="229" x2="28" y2="287" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed2)"/>

      <text x="105" y="390" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">Radially Outward</text>
    </g>

    <!-- Sub 2: Isolated -q -->
    <g transform="translate(240, 60)">
      <rect x="0" y="0" width="210" height="430" rx="12" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-width="1.5"/>
      <text x="105" y="34" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="18" font-weight="bold">Isolated -q</text>
      <circle cx="105" cy="210" r="26" fill="url(#qCyanGlow2)" stroke="#FFFFFF" stroke-width="2"/>
      <text x="105" y="218" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="28" font-weight="bold">-</text>

      <line x1="105" y1="85" x2="105" y2="184" stroke="#00E5FF" stroke-width="3" marker-end="url(#mCyan2)"/>
      <line x1="105" y1="335" x2="105" y2="236" stroke="#00E5FF" stroke-width="3" marker-end="url(#mCyan2)"/>
      <line x1="15" y1="210" x2="79" y2="210" stroke="#00E5FF" stroke-width="3" marker-end="url(#mCyan2)"/>
      <line x1="195" y1="210" x2="131" y2="210" stroke="#00E5FF" stroke-width="3" marker-end="url(#mCyan2)"/>

      <line x1="28" y1="133" x2="86" y2="191" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="182" y1="287" x2="124" y2="229" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="182" y1="133" x2="124" y2="191" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>
      <line x1="28" y1="287" x2="86" y2="229" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan2)"/>

      <text x="105" y="390" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">Radially Inward</text>
    </g>

    <!-- Sub 3: Electric Dipole -->
    <g transform="translate(465, 60)">
      <rect x="0" y="0" width="225" height="430" rx="12" fill="rgba(255,215,0,0.06)" stroke="#FFD700" stroke-width="1.5"/>
      <text x="112" y="34" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">Electric Dipole</text>
      <circle cx="55" cy="210" r="22" fill="url(#qRedGlow2)" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="55" y="217" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">+</text>

      <circle cx="170" cy="210" r="22" fill="url(#qCyanGlow2)" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="170" y="217" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="22" font-weight="bold">-</text>

      <line x1="77" y1="210" x2="148" y2="210" stroke="#FFD700" stroke-width="3" marker-end="url(#mGold2)"/>
      <path d="M 55 188 Q 112 120 170 188" fill="none" stroke="#FFD700" stroke-width="2.5"/>
      <path d="M 55 232 Q 112 300 170 232" fill="none" stroke="#FFD700" stroke-width="2.5"/>
      <path d="M 55 188 Q 112 65 170 188" fill="none" stroke="#FFD700" stroke-width="2"/>
      <path d="M 55 232 Q 112 355 170 232" fill="none" stroke="#FFD700" stroke-width="2"/>

      <text x="112" y="390" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">Curved (+ to -)</text>
    </g>

    <!-- Sub 4: Like Charges -->
    <g transform="translate(705, 60)">
      <rect x="0" y="0" width="210" height="430" rx="12" fill="rgba(118,255,3,0.06)" stroke="#76FF03" stroke-width="1.5"/>
      <text x="105" y="34" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="18" font-weight="bold">Like Charges</text>
      <circle cx="50" cy="210" r="22" fill="url(#qRedGlow2)" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="50" y="217" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">+</text>

      <circle cx="160" cy="210" r="22" fill="url(#qRedGlow2)" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="160" y="217" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">+</text>

      <path d="M 50 188 Q 85 140 90 75" fill="none" stroke="#76FF03" stroke-width="2.5"/>
      <path d="M 50 232 Q 85 280 90 345" fill="none" stroke="#76FF03" stroke-width="2.5"/>
      <path d="M 160 188 Q 125 140 120 75" fill="none" stroke="#76FF03" stroke-width="2.5"/>
      <path d="M 160 232 Q 125 280 120 345" fill="none" stroke="#76FF03" stroke-width="2.5"/>

      <circle cx="105" cy="210" r="7" fill="#76FF03"/>
      <text x="105" y="190" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">N</text>
      <text x="105" y="390" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">Neutral Point (E = 0)</text>
    </g>
  </g>
</svg>`;

// SVG 3: Dipole Axial & Equatorial Fields (Section 4)
const svg3_dipole = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow3" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow3" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="mRed3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGreen3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#76FF03"/>
    </marker>
    <marker id="mGold3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#FFD700"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">3. ELECTRIC DIPOLE (AXIAL POINT)</text>

    <line x1="20" y1="240" x2="430" y2="240" stroke="#475569" stroke-width="2.5" stroke-dasharray="6,6"/>

    <circle cx="85" cy="240" r="22" fill="url(#qCyanGlow3)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="85" y="247" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="bold">-q</text>

    <circle cx="205" cy="240" r="22" fill="url(#qRedGlow3)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="205" y="247" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="bold">+q</text>

    <circle cx="145" cy="240" r="5" fill="#FFD700"/>
    <text x="145" y="265" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">O</text>

    <line x1="85" y1="290" x2="205" y2="290" stroke="#94A3B8" stroke-width="2"/>
    <line x1="85" y1="285" x2="85" y2="295" stroke="#94A3B8" stroke-width="2"/>
    <line x1="205" y1="285" x2="205" y2="295" stroke="#94A3B8" stroke-width="2"/>
    <text x="145" y="315" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="16" font-weight="bold">2a</text>

    <line x1="95" y1="175" x2="195" y2="175" stroke="#FFD700" stroke-width="3.5" marker-end="url(#mGold3)"/>
    <text x="145" y="160" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">p (Dipole Moment)</text>

    <line x1="145" y1="350" x2="380" y2="350" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="5,5"/>
    <text x="260" y="375" text-anchor="middle" fill="#38BDF8" font-family="sans-serif" font-size="16.5" font-weight="bold">Distance r</text>

    <circle cx="380" cy="240" r="8" fill="#76FF03"/>
    <text x="380" y="215" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">P (Axial)</text>

    <line x1="380" y1="240" x2="445" y2="240" stroke="#76FF03" stroke-width="4" marker-end="url(#mGreen3)"/>
    <text x="360" y="180" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="17.5" font-weight="bold">E_axial || p</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 3.1: Axial Field E = 2p / (4&#960;&#949;0 r&#179;)</text>
  </g>

  <g transform="translate(490, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">EQUATORIAL POINT RESOLUTION</text>

    <line x1="60" y1="380" x2="260" y2="380" stroke="#475569" stroke-width="2.5"/>
    <circle cx="80" cy="380" r="20" fill="url(#qCyanGlow3)"/>
    <text x="80" y="387" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">-q</text>

    <circle cx="240" cy="380" r="20" fill="url(#qRedGlow3)"/>
    <text x="240" y="387" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+q</text>

    <line x1="100" y1="350" x2="220" y2="350" stroke="#FFD700" stroke-width="3" marker-end="url(#mGold3)"/>
    <text x="160" y="340" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">p</text>

    <g transform="translate(190, 210)">
      <line x1="0" y1="0" x2="-90" y2="-90" stroke="#38BDF8" stroke-width="3" marker-end="url(#mCyan3)"/>
      <text x="-105" y="-100" fill="#38BDF8" font-family="sans-serif" font-size="16" font-weight="bold">E_+ (from +q)</text>

      <line x1="0" y1="0" x2="90" y2="-90" stroke="#38BDF8" stroke-width="3" marker-end="url(#mCyan3)"/>
      <text x="60" y="-100" fill="#38BDF8" font-family="sans-serif" font-size="16" font-weight="bold">E_- (towards -q)</text>

      <path d="M 0 -35 A 35 35 0 0 0 -25 -25" fill="none" stroke="#FFD700" stroke-width="2.5"/>
      <text x="-15" y="-45" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">&#952;</text>

      <path d="M 0 -35 A 35 35 0 0 1 25 -25" fill="none" stroke="#FFD700" stroke-width="2.5"/>
      <text x="15" y="-45" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">&#952;</text>

      <line x1="0" y1="0" x2="-130" y2="0" stroke="#FF512F" stroke-width="4.5" marker-end="url(#mRed3)"/>
      <text x="-65" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">2 E cos &#952; (Resultant)</text>

      <circle cx="0" cy="0" r="6" fill="#76FF03"/>
      <text x="15" y="15" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">P</text>
    </g>

    <rect x="240" y="400" width="190" height="42" rx="8" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="1.8"/>
    <text x="335" y="427" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">E_eq || -p</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 3.2: Equatorial Field E = p / (4&#960;&#949;0 r&#179;)</text>
  </g>
</svg>`;

// SVG 4: Torque on Dipole & Electric Flux (Section 5)
const svg4_torque_flux = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow4" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow4" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="mRed4" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#FF512F"/>
    </marker>
    <marker id="mCyan4" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#00E5FF"/>
    </marker>
    <marker id="mGreen4" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">4. TORQUE ON A DIPOLE IN FIELD</text>

    <line x1="30" y1="100" x2="420" y2="100" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan4)"/>
    <line x1="30" y1="180" x2="420" y2="180" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan4)"/>
    <line x1="30" y1="260" x2="420" y2="260" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan4)"/>
    <line x1="30" y1="340" x2="420" y2="340" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan4)"/>
    <text x="405" y="85" fill="#00E5FF" font-family="sans-serif" font-size="20" font-weight="bold">E (Field)</text>

    <line x1="120" y1="340" x2="300" y2="160" stroke="#FFD700" stroke-width="4"/>

    <circle cx="120" cy="340" r="22" fill="url(#qCyanGlow4)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="120" y="347" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="bold">-q</text>

    <circle cx="300" cy="160" r="22" fill="url(#qRedGlow4)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="300" y="167" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="bold">+q</text>

    <path d="M 180 340 A 60 60 0 0 0 170 290" fill="none" stroke="#FFD700" stroke-width="2.5"/>
    <text x="190" y="325" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">&#952;</text>

    <line x1="300" y1="160" x2="390" y2="160" stroke="#76FF03" stroke-width="3.5" marker-end="url(#mGreen4)"/>
    <text x="350" y="145" fill="#76FF03" font-family="sans-serif" font-size="18" font-weight="bold">+qE</text>

    <line x1="120" y1="340" x2="30" y2="340" stroke="#76FF03" stroke-width="3.5" marker-end="url(#mGreen4)"/>
    <text x="45" y="365" fill="#76FF03" font-family="sans-serif" font-size="18" font-weight="bold">-qE</text>

    <line x1="300" y1="160" x2="300" y2="340" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="5,5"/>
    <line x1="120" y1="340" x2="300" y2="340" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="5,5"/>
    <text x="315" y="255" fill="#FFD700" font-family="sans-serif" font-size="17" font-weight="bold">2a sin &#952;</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 4.1: Torque &#964; = p E sin &#952;</text>
  </g>

  <g transform="translate(490, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">ELECTRIC FLUX (Phi_E)</text>

    <path d="M 50 160 Q 220 190 400 120" fill="none" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan4)"/>
    <path d="M 50 220 Q 220 240 400 210" fill="none" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan4)"/>
    <path d="M 50 280 Q 220 280 400 290" fill="none" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan4)"/>
    <path d="M 50 340 Q 220 320 400 370" fill="none" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mCyan4)"/>
    <text x="410" y="115" fill="#00E5FF" font-family="sans-serif" font-size="19" font-weight="bold">E (Lines)</text>

    <polygon points="170,170 260,135 290,310 200,345" fill="rgba(255,81,47,0.35)" stroke="#FF512F" stroke-width="3"/>

    <line x1="230" y1="240" x2="330" y2="185" stroke="#76FF03" stroke-width="4" marker-end="url(#mGreen4)"/>
    <text x="345" y="180" fill="#76FF03" font-family="sans-serif" font-size="19" font-weight="bold">dA</text>

    <path d="M 280 215 A 30 30 0 0 0 290 235" fill="none" stroke="#FFD700" stroke-width="2.5"/>
    <text x="300" y="240" fill="#FFD700" font-family="sans-serif" font-size="18" font-weight="bold">&#952;</text>

    <rect x="35" y="390" width="385" height="52" rx="8" fill="rgba(255,215,0,0.12)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="227" y="422" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="17" font-weight="bold">&#934;_E = &#8747; E &#183; dA = &#8747; E dA cos &#952;</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 4.2: Electric Flux Through Area dA</text>
  </g>
</svg>`;

// SVG 5: Gauss's Law Applications: Wire, Sheet & Shell (Section 6)
const svg5_gauss_all = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
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
    <rect x="0" y="0" width="930" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="465" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="20" font-weight="bold">5. GAUSS'S THEOREM: 3 CORE APPLICATIONS</text>

    <!-- Sub 1: Infinitely Long Wire -->
    <g transform="translate(15, 60)">
      <rect x="0" y="0" width="290" height="430" rx="12" fill="rgba(255,81,47,0.06)" stroke="#FF512F" stroke-width="1.5"/>
      <text x="145" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">1. Long Wire (&#955;)</text>

      <line x1="20" y1="210" x2="270" y2="210" stroke="#FF512F" stroke-width="6"/>
      <circle cx="60" cy="210" r="3.5" fill="#FFFFFF"/>
      <circle cx="120" cy="210" r="3.5" fill="#FFFFFF"/>
      <circle cx="180" cy="210" r="3.5" fill="#FFFFFF"/>
      <circle cx="240" cy="210" r="3.5" fill="#FFFFFF"/>
      <text x="275" y="235" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+&#955;</text>

      <ellipse cx="75" cy="210" rx="16" ry="50" fill="none" stroke="#00E5FF" stroke-width="2" stroke-dasharray="4,4"/>
      <ellipse cx="215" cy="210" rx="16" ry="50" fill="none" stroke="#00E5FF" stroke-width="2"/>
      <line x1="75" y1="160" x2="215" y2="160" stroke="#00E5FF" stroke-width="2"/>
      <line x1="75" y1="260" x2="215" y2="260" stroke="#00E5FF" stroke-width="2"/>

      <line x1="145" y1="160" x2="145" y2="105" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen5)"/>
      <text x="145" y="90" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="16" font-weight="bold">E || dA</text>

      <text x="145" y="335" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14">Cylindrical Gaussian Surface</text>
      <text x="145" y="380" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16" font-weight="bold">E = &#955; / (2&#960;&#949;0 r)</text>
    </g>

    <!-- Sub 2: Infinite Plane Sheet -->
    <g transform="translate(320, 60)">
      <rect x="0" y="0" width="290" height="430" rx="12" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-width="1.5"/>
      <text x="145" y="34" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">2. Infinite Sheet (&#963;)</text>

      <!-- Infinite Sheet Plane -->
      <polygon points="120,85 165,65 165,335 120,355" fill="rgba(255,81,47,0.3)" stroke="#FF512F" stroke-width="2.5"/>
      <text x="142" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">+++ &#963; +++</text>

      <!-- Pillbox Gaussian Cylinder -->
      <ellipse cx="60" cy="205" rx="14" ry="32" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" stroke-width="2"/>
      <ellipse cx="225" cy="205" rx="14" ry="32" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" stroke-width="2"/>
      <line x1="60" y1="173" x2="225" y2="173" stroke="#00E5FF" stroke-width="2"/>
      <line x1="60" y1="237" x2="225" y2="237" stroke="#00E5FF" stroke-width="2"/>

      <line x1="60" y1="205" x2="15" y2="205" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen5)"/>
      <text x="35" y="195" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">E A</text>

      <line x1="225" y1="205" x2="270" y2="205" stroke="#76FF03" stroke-width="3" marker-end="url(#mGreen5)"/>
      <text x="250" y="195" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">E A</text>

      <text x="145" y="335" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14">Total Flux = 2 E A</text>
      <text x="145" y="380" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16" font-weight="bold">E = &#963; / (2&#949;0)</text>
    </g>

    <!-- Sub 3: Spherical Shell -->
    <g transform="translate(625, 60)">
      <rect x="0" y="0" width="290" height="430" rx="12" fill="rgba(118,255,3,0.06)" stroke="#76FF03" stroke-width="1.5"/>
      <text x="145" y="34" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">3. Spherical Shell (Q)</text>

      <circle cx="145" cy="195" r="75" fill="none" stroke="#FF512F" stroke-width="3.5"/>
      <text x="145" y="128" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold">++ Shell (R) ++</text>

      <circle cx="145" cy="195" r="40" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.8" stroke-dasharray="4,4"/>
      <text x="145" y="195" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">E_in = 0</text>
      <text x="145" y="215" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="12">(Inside cavity)</text>

      <circle cx="145" cy="195" r="105" fill="none" stroke="#00E5FF" stroke-width="1.8" stroke-dasharray="5,5"/>

      <text x="145" y="335" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="14.5" font-weight="bold">E_out = Q / (4&#960;&#949;0 r&#178;)</text>
      <text x="145" y="380" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16" font-weight="bold">E_in = 0</text>
    </g>
  </g>
</svg>`;

// SVG 6: Equipotential Surfaces & Potential (Section 9)
const svg6_potential_equipotential = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow6" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">6. EQUIPOTENTIAL SURFACES (POINT +q)</text>

    <circle cx="227" cy="240" r="150" fill="rgba(0,229,255,0.03)" stroke="#00E5FF" stroke-width="1.8" stroke-dasharray="6,6"/>
    <text x="227" y="80" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">V3 = 10 V</text>

    <circle cx="227" cy="240" r="105" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-width="2" stroke-dasharray="6,6"/>
    <text x="227" y="125" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">V2 = 20 V</text>

    <circle cx="227" cy="240" r="55" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="2.5" stroke-dasharray="6,6"/>
    <text x="227" y="175" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">V1 = 40 V</text>

    <circle cx="227" cy="240" r="26" fill="url(#qRedGlow6)" stroke="#FFFFFF" stroke-width="2"/>
    <text x="227" y="247" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">+q</text>

    <line x1="227" y1="214" x2="227" y2="70" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed1)"/>
    <line x1="227" y1="266" x2="227" y2="410" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed1)"/>
    <line x1="201" y1="240" x2="55" y2="240" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed1)"/>
    <line x1="253" y1="240" x2="400" y2="240" stroke="#FF512F" stroke-width="3" marker-end="url(#mRed1)"/>

    <text x="227" y="435" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15.5" font-weight="bold">E is always Normal to Equipotential Surface</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 6.1: Concentric Equipotential Spheres</text>
  </g>

  <g transform="translate(490, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">EQUIPOTENTIALS IN UNIFORM FIELD</text>

    <line x1="30" y1="120" x2="420" y2="120" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <line x1="30" y1="220" x2="420" y2="220" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <line x1="30" y1="320" x2="420" y2="320" stroke="#FF512F" stroke-width="2.5" marker-end="url(#mRed1)"/>
    <text x="405" y="105" fill="#FF512F" font-family="sans-serif" font-size="19" font-weight="bold">E (Field)</text>

    <polygon points="100,80 145,60 145,380 100,400" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="2.5"/>
    <text x="122" y="425" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">V1 = 60V</text>

    <polygon points="200,80 245,60 245,380 200,400" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="2.5"/>
    <text x="222" y="425" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">V2 = 40V</text>

    <polygon points="300,80 345,60 345,380 300,400" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="2.5"/>
    <text x="322" y="425" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">V3 = 20V</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 6.2: Equipotential Planes in Uniform Field</text>
  </g>
</svg>`;

// SVG 7: Conductor Properties & Electrostatic Shielding (Section 10)
const svg7_conductor_shielding = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow7B" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <marker id="mRed7B" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#FF512F"/>
    </marker>
    <marker id="mGreen7B" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="930" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="465" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="20" font-weight="bold">7. ELECTROSTATIC PROPERTIES OF CONDUCTORS &amp; SHIELDING</text>

    <!-- Conductor in Field -->
    <g transform="translate(25, 60)">
      <rect x="0" y="0" width="425" height="430" rx="12" fill="rgba(255,81,47,0.06)" stroke="#FF512F" stroke-width="1.5"/>
      <text x="212" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">Conductor in External Field</text>

      <line x1="20" y1="130" x2="110" y2="130" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mRed7B)"/>
      <line x1="20" y1="210" x2="110" y2="210" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mRed7B)"/>
      <line x1="20" y1="290" x2="110" y2="290" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mRed7B)"/>

      <line x1="315" y1="130" x2="405" y2="130" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mRed7B)"/>
      <line x1="315" y1="210" x2="405" y2="210" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mRed7B)"/>
      <line x1="315" y1="290" x2="405" y2="290" stroke="#00E5FF" stroke-width="2.5" marker-end="url(#mRed7B)"/>

      <!-- Solid Conductor Block -->
      <rect x="110" y="100" width="205" height="220" rx="12" fill="rgba(148,163,184,0.3)" stroke="#94A3B8" stroke-width="3"/>
      <text x="125" y="140" fill="#00E5FF" font-family="sans-serif" font-size="18" font-weight="bold">- - -</text>
      <text x="125" y="215" fill="#00E5FF" font-family="sans-serif" font-size="18" font-weight="bold">- - -</text>
      <text x="125" y="290" fill="#00E5FF" font-family="sans-serif" font-size="18" font-weight="bold">- - -</text>

      <text x="285" y="140" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">+ + +</text>
      <text x="285" y="215" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">+ + +</text>
      <text x="285" y="290" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">+ + +</text>

      <text x="212" y="210" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="18" font-weight="bold">E_net = 0</text>
      <text x="212" y="235" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14">(E0 + Eind = 0)</text>

      <text x="212" y="375" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Charge resides strictly on Surface</text>
      <text x="212" y="405" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">Potential V is constant throughout</text>
    </g>

    <!-- Electrostatic Shielding (Faraday Cage) -->
    <g transform="translate(480, 60)">
      <rect x="0" y="0" width="425" height="430" rx="12" fill="rgba(118,255,3,0.06)" stroke="#76FF03" stroke-width="1.5"/>
      <text x="212" y="34" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="18" font-weight="bold">Electrostatic Shielding (Cavity)</text>

      <!-- Hollow Conductor Shell -->
      <path d="M 60 210 Q 60 90 212 90 Q 365 90 365 210 Q 365 330 212 330 Q 60 330 60 210 Z" fill="rgba(255,81,47,0.2)" stroke="#FF512F" stroke-width="3"/>
      
      <!-- Inner Cavity -->
      <ellipse cx="212" cy="210" rx="75" ry="60" fill="#0B0F19" stroke="#76FF03" stroke-width="2.5" stroke-dasharray="6,6"/>
      <text x="212" y="205" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="20" font-weight="bold">E_cavity = 0</text>
      <text x="212" y="230" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Protected Sensitive Device</text>

      <text x="65" y="140" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+++</text>
      <text x="335" y="140" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+++</text>
      <text x="65" y="290" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+++</text>
      <text x="335" y="290" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">+++</text>

      <text x="212" y="375" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15.5" font-weight="bold">Zero Field Inside Cavity</text>
      <text x="212" y="405" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Basis of Faraday Cage &amp; Safe Cars in Lightning</text>
    </g>
  </g>
</svg>`;

// SVG 8: Principle of a Capacitor (3-Step Working Mechanism) (Section 12)
const svg8_capacitor_principle = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow8" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow8" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="930" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="465" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="20" font-weight="bold">8. WORKING PRINCIPLE OF A CAPACITOR (STEP-WISE MECHANISM)</text>

    <!-- STEP 1: Isolated Plate A -->
    <g transform="translate(25, 60)">
      <rect x="0" y="0" width="270" height="430" rx="12" fill="rgba(255,81,47,0.06)" stroke="#FF512F" stroke-width="1.5"/>
      <text x="135" y="34" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">Step 1: Isolated Plate A</text>

      <rect x="125" y="80" width="20" height="240" rx="4" fill="#FF512F"/>
      <text x="135" y="65" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+Q Charge</text>

      <text x="135" y="350" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Potential V is High</text>
      <text x="135" y="380" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="14">Capacitance C = Q / V</text>
      <text x="135" y="405" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Limited Capacity</text>
    </g>

    <!-- STEP 2: Uncharged Plate B Brought Near -->
    <g transform="translate(325, 60)">
      <rect x="0" y="0" width="280" height="430" rx="12" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-width="1.5"/>
      <text x="140" y="34" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="17" font-weight="bold">Step 2: Plate B Brought Near</text>

      <rect x="80" y="80" width="18" height="240" rx="4" fill="#FF512F"/>
      <text x="89" y="65" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">+Q (Plate A)</text>

      <rect x="180" y="80" width="18" height="240" rx="4" fill="#94A3B8"/>
      <text x="189" y="65" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="15" font-weight="bold">Plate B</text>

      <text x="155" y="140" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">-q</text>
      <text x="155" y="200" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">-q</text>
      <text x="155" y="260" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">-q</text>

      <text x="210" y="140" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+q</text>
      <text x="210" y="200" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+q</text>
      <text x="210" y="260" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+q</text>

      <text x="140" y="350" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">Induction of -q &amp; +q</text>
      <text x="140" y="380" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="14">-q lowers V, +q raises V</text>
      <text x="140" y="405" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Net V Drops Slightly</text>
    </g>

    <!-- STEP 3: Plate B Earthed (Final Capacitor) -->
    <g transform="translate(635, 60)">
      <rect x="0" y="0" width="270" height="430" rx="12" fill="rgba(118,255,3,0.06)" stroke="#76FF03" stroke-width="1.5"/>
      <text x="135" y="34" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="17" font-weight="bold">Step 3: Plate B Earthed</text>

      <rect x="70" y="80" width="18" height="240" rx="4" fill="#FF512F"/>
      <text x="79" y="65" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">+Q (Plate A)</text>

      <rect x="170" y="80" width="18" height="240" rx="4" fill="#00E5FF"/>
      <text x="179" y="65" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">-Q (Plate B)</text>

      <!-- Earth Connection Symbol -->
      <line x1="188" y1="200" x2="235" y2="200" stroke="#76FF03" stroke-width="3"/>
      <line x1="235" y1="200" x2="235" y2="230" stroke="#76FF03" stroke-width="3"/>
      <line x1="220" y1="230" x2="250" y2="230" stroke="#76FF03" stroke-width="3.5"/>
      <line x1="225" y1="237" x2="245" y2="237" stroke="#76FF03" stroke-width="2.5"/>
      <line x1="230" y1="244" x2="240" y2="244" stroke="#76FF03" stroke-width="2"/>
      <text x="235" y="265" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="13.5" font-weight="bold">Earth</text>

      <text x="135" y="350" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15.5" font-weight="bold">+q flows to Ground</text>
      <text x="135" y="380" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Potential V' &lt;&lt; V Drops Massively</text>
      <text x="135" y="405" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="15" font-weight="bold">C = Q / V' &#8594; Huge Boost!</text>
    </g>
  </g>
</svg>`;

// SVG 9: Capacitors with Dielectric/Metal Slab & Combinations (Section 12 & 13)
const svg9_capacitors_combinations = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <radialGradient id="qRedGlow9" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </radialGradient>
    <radialGradient id="qCyanGlow9" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </radialGradient>
    <marker id="mGreen9" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#76FF03"/>
    </marker>
  </defs>

  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">9. CAPACITOR WITH DIELECTRIC SLAB</text>

    <rect x="65" y="80" width="20" height="290" rx="4" fill="#FF512F"/>
    <text x="75" y="65" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+Q (+&#963;)</text>

    <rect x="370" y="80" width="20" height="290" rx="4" fill="#00E5FF"/>
    <text x="380" y="65" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">-Q (-&#963;)</text>

    <rect x="160" y="80" width="145" height="290" rx="4" fill="rgba(255,215,0,0.18)" stroke="#FFD700" stroke-width="2.5"/>
    <text x="232" y="215" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="19" font-weight="bold">Dielectric (K)</text>
    <text x="232" y="240" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="15">Thickness t</text>

    <text x="175" y="150" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">-&#963;p</text>
    <text x="175" y="225" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">-&#963;p</text>
    <text x="175" y="300" fill="#00E5FF" font-family="sans-serif" font-size="16" font-weight="bold">-&#963;p</text>

    <text x="275" y="150" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+&#963;p</text>
    <text x="275" y="225" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+&#963;p</text>
    <text x="275" y="300" fill="#FF512F" font-family="sans-serif" font-size="16" font-weight="bold">+&#963;p</text>

    <line x1="65" y1="395" x2="390" y2="395" stroke="#94A3B8" stroke-width="2.5"/>
    <line x1="65" y1="390" x2="65" y2="400" stroke="#94A3B8" stroke-width="2.5"/>
    <line x1="390" y1="390" x2="390" y2="400" stroke="#94A3B8" stroke-width="2.5"/>
    <text x="227" y="420" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="16" font-weight="bold">Distance d</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16" font-weight="bold">C = &#949;0 A / (d - t + t/K)</text>
  </g>

  <g transform="translate(490, 15)">
    <rect x="0" y="0" width="455" height="510" rx="14" fill="rgba(15,23,42,0.92)" stroke="#FF512F" stroke-width="2"/>
    <text x="227" y="38" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="18" font-weight="bold">COMBINATIONS OF CAPACITORS</text>

    <!-- Series -->
    <rect x="20" y="60" width="415" height="185" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
    <text x="35" y="85" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">Series: Q is Same, V = V1 + V2 + V3</text>

    <line x1="40" y1="135" x2="115" y2="135" stroke="#FFFFFF" stroke-width="3"/>
    <line x1="115" y1="110" x2="115" y2="160" stroke="#00E5FF" stroke-width="4"/>
    <line x1="130" y1="110" x2="130" y2="160" stroke="#00E5FF" stroke-width="4"/>
    <text x="122" y="105" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">C1</text>

    <line x1="130" y1="135" x2="210" y2="135" stroke="#FFFFFF" stroke-width="3"/>
    <line x1="210" y1="110" x2="210" y2="160" stroke="#00E5FF" stroke-width="4"/>
    <line x1="225" y1="110" x2="225" y2="160" stroke="#00E5FF" stroke-width="4"/>
    <text x="217" y="105" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">C2</text>

    <line x1="225" y1="135" x2="305" y2="135" stroke="#FFFFFF" stroke-width="3"/>
    <line x1="305" y1="110" x2="305" y2="160" stroke="#00E5FF" stroke-width="4"/>
    <line x1="320" y1="110" x2="320" y2="160" stroke="#00E5FF" stroke-width="4"/>
    <text x="312" y="105" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14.5" font-weight="bold">C3</text>
    <line x1="320" y1="135" x2="400" y2="135" stroke="#FFFFFF" stroke-width="3"/>

    <text x="227" y="205" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16" font-weight="bold">1 / Cs = 1/C1 + 1/C2 + 1/C3</text>

    <!-- Parallel -->
    <rect x="20" y="260" width="415" height="190" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
    <text x="35" y="285" fill="#FFD700" font-family="sans-serif" font-size="16" font-weight="bold">Parallel: V is Same, Q = Q1 + Q2</text>

    <line x1="50" y1="365" x2="115" y2="365" stroke="#FFFFFF" stroke-width="3"/>
    <line x1="115" y1="320" x2="115" y2="410" stroke="#FFFFFF" stroke-width="3"/>

    <line x1="115" y1="330" x2="200" y2="330" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="200" y1="310" x2="200" y2="350" stroke="#FF512F" stroke-width="4"/>
    <line x1="215" y1="310" x2="215" y2="350" stroke="#FF512F" stroke-width="4"/>
    <text x="207" y="305" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">C1</text>
    <line x1="215" y1="330" x2="300" y2="330" stroke="#FFFFFF" stroke-width="2.5"/>

    <line x1="115" y1="400" x2="200" y2="400" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="200" y1="380" x2="200" y2="420" stroke="#FF512F" stroke-width="4"/>
    <line x1="215" y1="380" x2="215" y2="420" stroke="#FF512F" stroke-width="4"/>
    <text x="207" y="375" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14" font-weight="bold">C2</text>
    <line x1="215" y1="400" x2="300" y2="400" stroke="#FFFFFF" stroke-width="2.5"/>

    <line x1="300" y1="320" x2="300" y2="410" stroke="#FFFFFF" stroke-width="3"/>
    <line x1="300" y1="365" x2="400" y2="365" stroke="#FFFFFF" stroke-width="3"/>

    <text x="227" y="438" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16" font-weight="bold">Cp = C1 + C2 + C3</text>

    <rect x="25" y="460" width="405" height="38" rx="8" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="227" y="485" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="bold">Fig 9.2: Series &amp; Parallel Circuits</text>
  </g>
</svg>`;

module.exports = {
  svg1_coulomb,
  svg2_field_lines,
  svg3_dipole,
  svg4_torque_flux,
  svg5_gauss_all,
  svg6_potential_equipotential,
  svg7_conductor_shielding,
  svg8_capacitor_principle,
  svg9_capacitors_combinations
};
