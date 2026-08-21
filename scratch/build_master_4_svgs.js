const fs = require('fs');
const path = require('path');

function svgToBase64(svgString) {
  const cleanSvg = svgString.trim().replace(/\s+/g, ' ');
  const b64 = Buffer.from(cleanSvg).toString('base64');
  return `data:image/svg+xml;base64,${b64}`;
}

// Common SVG Styling & Gradients
const DEFS = `
  <defs>
    <linearGradient id="bgBannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1A2E26"/>
      <stop offset="50%" stop-color="#2D4A3E"/>
      <stop offset="100%" stop-color="#1A2E26"/>
    </linearGradient>
    <linearGradient id="cardBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F4F8F5"/>
      <stop offset="100%" stop-color="#E2EBE5"/>
    </linearGradient>
    <linearGradient id="blueCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EBF3FA"/>
      <stop offset="100%" stop-color="#D5E5F2"/>
    </linearGradient>
    <linearGradient id="anemoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E57373"/>
      <stop offset="50%" stop-color="#EF5350"/>
      <stop offset="100%" stop-color="#C62828"/>
    </linearGradient>
    <linearGradient id="planariaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#81D4FA"/>
      <stop offset="50%" stop-color="#4FC3F7"/>
      <stop offset="100%" stop-color="#0288D1"/>
    </linearGradient>
    <linearGradient id="ectodermG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#42A5F5"/>
      <stop offset="100%" stop-color="#1565C0"/>
    </linearGradient>
    <linearGradient id="mesodermG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EF5350"/>
      <stop offset="100%" stop-color="#C62828"/>
    </linearGradient>
    <linearGradient id="endodermG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFCA28"/>
      <stop offset="100%" stop-color="#FF8F00"/>
    </linearGradient>
    <linearGradient id="chordateBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B2EBF2"/>
      <stop offset="50%" stop-color="#80DEEA"/>
      <stop offset="100%" stop-color="#00ACC1"/>
    </linearGradient>
    <linearGradient id="notochordG" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFE082"/>
      <stop offset="50%" stop-color="#FFCA28"/>
      <stop offset="100%" stop-color="#FFA000"/>
    </linearGradient>
    <linearGradient id="nerveCordG" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#90CAF9"/>
      <stop offset="100%" stop-color="#1E88E5"/>
    </linearGradient>
    <linearGradient id="coreZoneG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#388E3C"/>
      <stop offset="100%" stop-color="#1B5E20"/>
    </linearGradient>
    <linearGradient id="bufferZoneG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A5D6A7"/>
      <stop offset="100%" stop-color="#66BB6A"/>
    </linearGradient>
    <linearGradient id="transitionZoneG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B3E5FC"/>
      <stop offset="100%" stop-color="#81D4FA"/>
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.15"/>
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
`;

// =========================================================================
// MASTER DIAGRAM 1: Fundamental Body Plans (Radial, Bilateral, Body Cavity)
// =========================================================================
const diagram1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" width="100%" height="100%">
  ${DEFS}
  <!-- Card Background -->
  <rect width="900" height="520" rx="14" fill="url(#cardBgGrad)" stroke="#A3C2B0" stroke-width="2" filter="url(#softShadow)"/>

  <!-- Top Title Banner -->
  <rect width="900" height="58" rx="14" fill="url(#bgBannerGrad)"/>
  <rect y="44" width="900" height="14" fill="#1A2E26"/>
  <text x="450" y="36" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">Basic Anatomical Criteria for Animal Classification</text>
  <text x="450" y="52" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#81C784" text-anchor="middle" letter-spacing="1">FUNDAMENTAL BODY PLANS</text>

  <!-- Panel 1: Radial Symmetry -->
  <g transform="translate(20, 80)">
    <rect width="270" height="415" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <text x="135" y="32" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1B5E20" text-anchor="middle">Radial Symmetry</text>
    <line x1="20" y1="42" x2="250" y2="42" stroke="#A5D6A7" stroke-width="1.5"/>

    <!-- 3D Sea Anemone / Hydra Drawing -->
    <g transform="translate(135, 210)">
      <!-- Basal Disc -->
      <ellipse cx="0" cy="110" rx="45" ry="16" fill="#8D6E63"/>
      <!-- Column Body -->
      <path d="M -38 110 C -45 50 -40 -10 -30 -40 L 30 -40 C 40 -10 45 50 38 110 Z" fill="url(#anemoneGrad)"/>
      <ellipse cx="0" cy="-40" rx="30" ry="12" fill="#EF5350"/>

      <!-- Tentacles extending radially in 3D -->
      <!-- Back tentacles -->
      <path d="M -20 -45 C -35 -85 -55 -100 -70 -110" stroke="#FF7043" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M -10 -48 C -15 -90 -30 -115 -40 -130" stroke="#FF7043" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M 0 -50 C 0 -95 0 -120 0 -135" stroke="#FF7043" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M 10 -48 C 15 -90 30 -115 40 -130" stroke="#FF7043" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M 20 -45 C 35 -85 55 -100 70 -110" stroke="#FF7043" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <!-- Front tentacles -->
      <path d="M -28 -38 C -50 -60 -75 -70 -90 -65" stroke="#FF5722" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 28 -38 C 50 -60 75 -70 90 -65" stroke="#FF5722" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M -22 -32 C -45 -40 -65 -35 -80 -25" stroke="#FF5722" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 22 -32 C 45 -40 65 -35 80 -25" stroke="#FF5722" stroke-width="5" fill="none" stroke-linecap="round"/>

      <!-- Central Oral Mouth -->
      <ellipse cx="0" cy="-40" rx="8" ry="4" fill="#B71C1C"/>

      <!-- Radial Symmetry Axes (Dashed lines) -->
      <line x1="0" y1="-140" x2="0" y2="125" stroke="#2E7D32" stroke-width="2" stroke-dasharray="6,4"/>
      <line x1="-95" y1="-40" x2="95" y2="-40" stroke="#2E7D32" stroke-width="2" stroke-dasharray="6,4"/>
      <line x1="-70" y1="-110" x2="70" y2="30" stroke="#2E7D32" stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="70" y1="-110" x2="-70" y2="30" stroke="#2E7D32" stroke-width="1.5" stroke-dasharray="5,4"/>
    </g>

    <rect x="20" y="365" width="230" height="35" rx="6" fill="#E8F5E9" stroke="#81C784" stroke-width="1"/>
    <text x="135" y="387" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2E7D32" text-anchor="middle">Radial Symmetry</text>
  </g>

  <!-- Panel 2: Bilateral Symmetry -->
  <g transform="translate(305, 80)">
    <rect width="270" height="415" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <text x="135" y="32" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1B5E20" text-anchor="middle">Bilateral Symmetry</text>
    <line x1="20" y1="42" x2="250" y2="42" stroke="#A5D6A7" stroke-width="1.5"/>

    <!-- 3D Planarian Flatworm Drawing -->
    <g transform="translate(135, 205)">
      <!-- Body Outline (Left Half) -->
      <path d="M 0 -130 C -35 -100 -45 -50 -40 20 C -35 70 -20 110 0 135 Z" fill="url(#planariaGrad)"/>
      <!-- Body Outline (Right Half) -->
      <path d="M 0 -130 C 35 -100 45 -50 40 20 C 35 70 20 110 0 135 Z" fill="url(#planariaGrad)" opacity="0.85"/>

      <!-- Triangular Head Auricles -->
      <path d="M 0 -130 Q -45 -115 -50 -100 Q -30 -90 0 -95" fill="#4FC3F7"/>
      <path d="M 0 -130 Q 45 -115 50 -100 Q 30 -90 0 -95" fill="#29B6F6"/>

      <!-- Eyespots -->
      <ellipse cx="-12" cy="-105" rx="5" ry="7" fill="#FFFFFF"/>
      <circle cx="-13" cy="-105" r="3" fill="#000000"/>
      <ellipse cx="12" cy="-105" rx="5" ry="7" fill="#FFFFFF"/>
      <circle cx="11" cy="-105" r="3" fill="#000000"/>

      <!-- Single Sagittal Plane Line -->
      <line x1="0" y1="-145" x2="0" y2="145" stroke="#C62828" stroke-width="2.5" stroke-dasharray="6,3" filter="url(#glow)"/>
      <text x="0" y="-148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#C62828" text-anchor="middle">Sagittal Plane</text>

      <!-- Orientation Labels -->
      <text x="-48" y="0" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0288D1">Left</text>
      <text x="25" y="0" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0288D1">Right</text>
    </g>

    <rect x="20" y="365" width="230" height="35" rx="6" fill="#E1F5FE" stroke="#4FC3F7" stroke-width="1"/>
    <text x="135" y="387" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0288D1" text-anchor="middle">Bilateral Symmetry</text>
  </g>

  <!-- Panel 3: Body Cavity Types -->
  <g transform="translate(590, 80)">
    <rect width="290" height="415" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <text x="145" y="32" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1B5E20" text-anchor="middle">Body Cavity Types</text>
    <line x1="20" y1="42" x2="270" y2="42" stroke="#A5D6A7" stroke-width="1.5"/>

    <!-- Legend right -->
    <g transform="translate(185, 60)">
      <circle cx="0" cy="0" r="5" fill="url(#ectodermG)"/><text x="10" y="4" font-family="sans-serif" font-size="10" fill="#1565C0" font-weight="bold">Ectoderm</text>
      <circle cx="0" cy="18" r="5" fill="url(#mesodermG)"/><text x="10" y="22" font-family="sans-serif" font-size="10" fill="#C62828" font-weight="bold">Mesoderm</text>
      <circle cx="0" cy="36" r="5" fill="url(#endodermG)"/><text x="10" y="40" font-family="sans-serif" font-size="10" fill="#FF8F00" font-weight="bold">Endoderm</text>
    </g>

    <!-- 1. Acoelomate Disc -->
    <g transform="translate(90, 105)">
      <circle cx="0" cy="0" r="42" fill="url(#ectodermG)"/>
      <circle cx="0" cy="0" r="33" fill="url(#mesodermG)"/>
      <circle cx="0" cy="0" r="16" fill="url(#endodermG)"/>
      <circle cx="0" cy="0" r="8" fill="#FFFFFF"/>
      <text x="0" y="58" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2E7D32" text-anchor="middle">Acoelomate</text>
    </g>

    <!-- 2. Pseudocoelomate Disc -->
    <g transform="translate(90, 220)">
      <circle cx="0" cy="0" r="42" fill="url(#ectodermG)"/>
      <circle cx="0" cy="0" r="33" fill="#E0F2F1" stroke="#00897B" stroke-width="1"/>
      <circle cx="-20" cy="-10" r="7" fill="url(#mesodermG)"/>
      <circle cx="20" cy="-10" r="7" fill="url(#mesodermG)"/>
      <circle cx="-20" cy="10" r="7" fill="url(#mesodermG)"/>
      <circle cx="20" cy="10" r="7" fill="url(#mesodermG)"/>
      <circle cx="0" cy="-22" r="6" fill="url(#mesodermG)"/>
      <circle cx="0" cy="22" r="6" fill="url(#mesodermG)"/>
      <circle cx="0" cy="0" r="15" fill="url(#endodermG)"/>
      <circle cx="0" cy="0" r="7" fill="#FFFFFF"/>
      <text x="0" y="58" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2E7D32" text-anchor="middle">Pseudocoelomate</text>
    </g>

    <!-- 3. Eucoelomate Disc -->
    <g transform="translate(90, 335)">
      <circle cx="0" cy="0" r="42" fill="url(#ectodermG)"/>
      <circle cx="0" cy="0" r="34" fill="url(#mesodermG)"/>
      <circle cx="0" cy="0" r="27" fill="#A5D6A7" stroke="#2E7D32" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="16" fill="url(#mesodermG)"/>
      <circle cx="0" cy="0" r="11" fill="url(#endodermG)"/>
      <circle cx="0" cy="0" r="5" fill="#FFFFFF"/>
      <text x="0" y="58" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2E7D32" text-anchor="middle">Eucoelomate</text>
    </g>
  </g>
</svg>`;

// =========================================================================
// MASTER DIAGRAM 2: Basic Chordate Body Plan & Chordate vs Non-Chordate
// =========================================================================
const diagram2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" width="100%" height="100%">
  ${DEFS}
  <!-- Card Background -->
  <rect width="900" height="520" rx="14" fill="url(#blueCardGrad)" stroke="#A2C4DD" stroke-width="2" filter="url(#softShadow)"/>

  <!-- Top Title Banner -->
  <rect width="900" height="58" rx="14" fill="url(#bgBannerGrad)"/>
  <rect y="44" width="900" height="14" fill="#1A2E26"/>
  <text x="450" y="36" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">BASIC CHORDATE BODY PLAN</text>
  <text x="450" y="52" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#80DEEA" text-anchor="middle" letter-spacing="1">Unique and Defining Chordate Characteristics</text>

  <!-- Main Chordate Anatomical Diagram -->
  <g transform="translate(30, 80)">
    <rect width="840" height="270" rx="12" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="1.5" filter="url(#softShadow)"/>

    <!-- Fish-like Chordate Body Outline -->
    <g transform="translate(420, 130)">
      <!-- Body contour -->
      <path d="M -380 0 C -300 -90 100 -90 320 0 C 350 -20 380 -50 390 0 C 380 50 350 20 320 0 C 100 90 -300 90 -380 0 Z" fill="url(#chordateBody)" opacity="0.45" stroke="#00838F" stroke-width="2.5"/>

      <!-- Dorsal Hollow Nerve Cord (Cyan Tube) -->
      <path d="M -330 -40 C -180 -60 100 -60 305 -15" stroke="url(#nerveCordG)" stroke-width="10" fill="none" stroke-linecap="round" filter="url(#glow)"/>

      <!-- Notochord (Yellow Rod) -->
      <path d="M -310 -18 C -160 -38 110 -38 285 -5" stroke="url(#notochordG)" stroke-width="12" fill="none" stroke-linecap="round" filter="url(#glow)"/>

      <!-- Alimentary Canal -->
      <path d="M -360 15 C -250 20 -100 20 150 25 C 220 30 255 25 270 15" stroke="#E64A19" stroke-width="7" fill="none" stroke-linecap="round"/>

      <!-- Pharyngeal Gill Slits -->
      <g transform="translate(-210, 10)">
        <ellipse cx="0" cy="0" rx="6" ry="18" fill="#D32F2F"/>
        <ellipse cx="22" cy="0" rx="6" ry="18" fill="#D32F2F"/>
        <ellipse cx="44" cy="0" rx="6" ry="18" fill="#D32F2F"/>
        <ellipse cx="66" cy="0" rx="6" ry="18" fill="#D32F2F"/>
        <ellipse cx="88" cy="0" rx="6" ry="18" fill="#D32F2F"/>
      </g>

      <!-- Post-anal Tail -->
      <path d="M 270 15 C 310 15 350 5 385 0" stroke="#2E7D32" stroke-width="6" fill="none" stroke-dasharray="5,3"/>

      <!-- Muscle Segment V-Myotomes -->
      <path d="M -50 -50 L -35 -20 L -50 10 M 20 -50 L 35 -20 L 20 10 M 90 -45 L 105 -18 L 90 10 M 160 -40 L 175 -15 L 160 10" stroke="#FFFFFF" stroke-width="2" opacity="0.65"/>
    </g>

    <!-- Pointer Labels & Callouts -->
    <!-- Notochord Callout -->
    <line x1="280" y1="75" x2="210" y2="35" stroke="#FFA000" stroke-width="1.5"/>
    <rect x="130" y="18" width="110" height="28" rx="5" fill="#FFF8E1" stroke="#FFA000" stroke-width="1"/>
    <text x="185" y="37" font-family="sans-serif" font-size="13" font-weight="bold" fill="#F57F17" text-anchor="middle">Notochord</text>

    <!-- Nerve Cord Callout -->
    <line x1="480" y1="65" x2="520" y2="35" stroke="#1976D2" stroke-width="1.5"/>
    <rect x="490" y="18" width="220" height="28" rx="5" fill="#E3F2FD" stroke="#1976D2" stroke-width="1"/>
    <text x="600" y="37" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0D47A1" text-anchor="middle">Dorsal Hollow Nerve Cord</text>

    <!-- Pharyngeal Gill Slits Callout -->
    <line x1="220" y1="150" x2="160" y2="210" stroke="#D32F2F" stroke-width="1.5"/>
    <rect x="60" y="200" width="180" height="28" rx="5" fill="#FFEBEE" stroke="#D32F2F" stroke-width="1"/>
    <text x="150" y="219" font-family="sans-serif" font-size="13" font-weight="bold" fill="#B71C1C" text-anchor="middle">Pharyngeal Gill Slits</text>

    <!-- Post-anal Tail Callout -->
    <line x1="720" y1="140" x2="720" y2="195" stroke="#2E7D32" stroke-width="1.5"/>
    <rect x="650" y="195" width="140" height="28" rx="5" fill="#E8F5E9" stroke="#2E7D32" stroke-width="1"/>
    <text x="720" y="214" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1B5E20" text-anchor="middle">Post-anal Tail</text>
  </g>

  <!-- Bottom Section: Chordate vs. Non-Chordate Sub-Card -->
  <g transform="translate(30, 365)">
    <rect width="840" height="135" rx="10" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="1.5" filter="url(#softShadow)"/>
    <text x="420" y="26" font-family="sans-serif" font-size="15" font-weight="bold" fill="#37474F" text-anchor="middle">Chordate &nbsp; vs. &nbsp; Non-Chordate</text>
    <line x1="420" y1="35" x2="420" y2="125" stroke="#CFD8DC" stroke-width="1.5"/>

    <!-- Left: Chordate (Fish) -->
    <g transform="translate(180, 75)">
      <!-- Fish Illustration -->
      <path d="M -100 0 C -60 -30 20 -30 60 0 C 80 -15 95 -25 100 0 C 95 25 80 15 60 0 C 20 30 -60 30 -100 0 Z" fill="#80DEEA" stroke="#00838F" stroke-width="2"/>
      <circle cx="-60" cy="-8" r="4" fill="#000"/>
      <!-- Green Checkmarks -->
      <text x="-135" y="8" font-family="sans-serif" font-size="22" font-weight="bold" fill="#2E7D32">✔</text>
      <text x="115" y="8" font-family="sans-serif" font-size="22" font-weight="bold" fill="#2E7D32">✔</text>
      <text x="0" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#00695C" text-anchor="middle">Chordate ✔</text>
    </g>

    <!-- Right: Non-Chordate (Earthworm) -->
    <g transform="translate(620, 75)">
      <!-- Worm Illustration -->
      <path d="M -90 -10 C -50 20 -10 -20 30 10 C 60 25 80 5 90 0" stroke="#8D6E63" stroke-width="12" fill="none" stroke-linecap="round"/>
      <!-- Red Crossmarks -->
      <text x="-135" y="8" font-family="sans-serif" font-size="22" font-weight="bold" fill="#C62828">✖</text>
      <text x="115" y="8" font-family="sans-serif" font-size="22" font-weight="bold" fill="#C62828">✖</text>
      <text x="0" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#D84315" text-anchor="middle">Non-Chordate ✖</text>
    </g>
  </g>
</svg>`;

// =========================================================================
// MASTER DIAGRAM 3: Representative Organisms Flashcards (6 Phyla)
// =========================================================================
const diagram3Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 540" width="100%" height="100%">
  ${DEFS}
  <!-- Card Background -->
  <rect width="900" height="540" rx="14" fill="url(#cardBgGrad)" stroke="#A3C2B0" stroke-width="2" filter="url(#softShadow)"/>

  <!-- Top Title Banner -->
  <rect width="900" height="58" rx="14" fill="url(#bgBannerGrad)"/>
  <rect y="44" width="900" height="14" fill="#1A2E26"/>
  <text x="450" y="34" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">REPRESENTATIVE ORGANISMS <tspan font-size="12" fill="#A5D6A7">(SAMPLE FLASHCARDS)</tspan></text>
  <text x="450" y="52" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#81C784" text-anchor="middle" letter-spacing="1">Examples from Key Non-Chordate Phyla</text>

  <!-- Grid of 6 Flashcards (3 cols x 2 rows) -->

  <!-- Card 1: Sycon (Porifera) -->
  <g transform="translate(30, 85)">
    <rect width="260" height="205" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <!-- Sycon Drawing -->
    <g transform="translate(130, 95)">
      <!-- Rock Base -->
      <rect x="-40" y="55" width="80" height="10" rx="3" fill="#795548"/>
      <!-- Urn Sponge Body -->
      <path d="M -22 55 C -45 10 -30 -35 -20 -50 L 20 -50 C 30 -35 45 10 22 55 Z" fill="#FF7043" stroke="#D84315" stroke-width="1.5"/>
      <!-- Osculum Spicules -->
      <path d="M -20 -50 L -25 -65 M -10 -50 L -12 -68 M 0 -50 L 0 -70 M 10 -50 L 12 -68 M 20 -50 L 25 -65" stroke="#FFA000" stroke-width="2"/>
    </g>
    <text x="130" y="170" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="middle">Sycon</text>
    <text x="130" y="190" font-family="sans-serif" font-size="13" fill="#558B2F" text-anchor="middle">(Porifera)</text>
  </g>

  <!-- Card 2: Hydra (Cnidaria) -->
  <g transform="translate(320, 85)">
    <rect width="260" height="205" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <!-- Hydra Drawing -->
    <g transform="translate(130, 95)">
      <!-- Stalk -->
      <path d="M -12 55 L -10 0 Q 0 -10 10 0 L 12 55 Z" fill="#80CBC4" stroke="#00695C" stroke-width="1.5"/>
      <!-- Tentacles -->
      <path d="M -8 0 C -25 -25 -35 -40 -45 -55" stroke="#4DB6AC" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M 8 0 C 25 -25 35 -40 45 -55" stroke="#4DB6AC" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M -4 -5 C -12 -30 -18 -45 -22 -62" stroke="#4DB6AC" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M 4 -5 C 12 -30 18 -45 22 -62" stroke="#4DB6AC" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <!-- Cnidocyte Callout -->
      <rect x="25" y="-30" width="65" height="20" rx="4" fill="#E0F2F1" stroke="#00796B" stroke-width="1"/>
      <text x="57" y="-16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#004D40" text-anchor="middle">Cnidocyte</text>
      <line x1="25" y1="-20" x2="10" y2="-20" stroke="#00796B" stroke-width="1"/>
    </g>
    <text x="130" y="170" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="middle">Hydra</text>
    <text x="130" y="190" font-family="sans-serif" font-size="13" fill="#558B2F" text-anchor="middle">(Cnidaria)</text>
  </g>

  <!-- Card 3: Ascaris (Aschelminthes) -->
  <g transform="translate(610, 85)">
    <rect width="260" height="205" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <!-- Ascaris Worm Drawing -->
    <g transform="translate(130, 90)">
      <path d="M -60 -40 C -10 -60 40 20 60 55" stroke="#D7CCC8" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M -60 -40 C -10 -60 40 20 60 55" stroke="#A1887F" stroke-width="8" fill="none" stroke-linecap="round"/>
    </g>
    <text x="130" y="170" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="middle">Ascaris</text>
    <text x="130" y="190" font-family="sans-serif" font-size="13" fill="#558B2F" text-anchor="middle">(Aschelminthes)</text>
  </g>

  <!-- Card 4: Earthworm (Annelida) -->
  <g transform="translate(30, 305)">
    <rect width="260" height="205" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <!-- Earthworm Drawing -->
    <g transform="translate(130, 315)">
      <path d="M -70 40 C -40 -30 20 30 70 -40" stroke="#8D6E63" stroke-width="14" fill="none" stroke-linecap="round"/>
      <!-- Clitellum -->
      <ellipse cx="-5" cy="5" rx="12" ry="10" fill="#D7CCC8"/>
    </g>
    <text x="130" y="170" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="middle">Earthworm</text>
    <text x="130" y="190" font-family="sans-serif" font-size="13" fill="#558B2F" text-anchor="middle">(Annelida)</text>
  </g>

  <!-- Card 5: Prawn (Arthropoda) -->
  <g transform="translate(320, 305)">
    <rect width="260" height="205" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <!-- Prawn Drawing -->
    <g transform="translate(130, 315)">
      <!-- Carapace & Abdomen -->
      <path d="M -50 -10 Q -20 -35 20 -15 Q 50 10 70 35 Z" fill="#FF8A65" stroke="#D84315" stroke-width="1.5"/>
      <!-- Antennae -->
      <path d="M -45 -15 C -65 -35 -75 -45 -85 -55" stroke="#FF7043" stroke-width="2" fill="none"/>
      <!-- Jointed Legs Callout -->
      <rect x="-60" y="-55" width="115" height="20" rx="4" fill="#FBE9E7" stroke="#FF7043" stroke-width="1"/>
      <text x="-3" y="-41" font-family="sans-serif" font-size="10" font-weight="bold" fill="#D84315" text-anchor="middle">Jointed Appendages</text>
    </g>
    <text x="130" y="170" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="middle">Prawn</text>
    <text x="130" y="190" font-family="sans-serif" font-size="13" fill="#558B2F" text-anchor="middle">(Arthropoda)</text>
  </g>

  <!-- Card 6: Starfish (Echinodermata) -->
  <g transform="translate(610, 305)">
    <rect width="260" height="205" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <!-- Starfish Drawing -->
    <g transform="translate(130, 310)">
      <path d="M 0 -45 L 12 -15 L 42 -12 L 18 10 L 26 40 L 0 20 L -26 40 L -18 10 L -42 -12 L -12 -15 Z" fill="#FF7043" stroke="#D84315" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="10" fill="#E64A19"/>
      <!-- Water Vascular Callout -->
      <rect x="0" y="-58" width="120" height="20" rx="4" fill="#E8F5E9" stroke="#2E7D32" stroke-width="1"/>
      <text x="60" y="-44" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B5E20" text-anchor="middle">Water Vascular System</text>
    </g>
    <text x="130" y="170" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="middle">Starfish</text>
    <text x="130" y="190" font-family="sans-serif" font-size="13" fill="#558B2F" text-anchor="middle">(Echinodermata)</text>
  </g>
</svg>`;

// =========================================================================
// MASTER DIAGRAM 4: Biosphere Reserve Zonation & Selected National Parks
// =========================================================================
const diagram4Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" width="100%" height="100%">
  ${DEFS}
  <!-- Card Background -->
  <rect width="900" height="520" rx="14" fill="url(#cardBgGrad)" stroke="#A3C2B0" stroke-width="2" filter="url(#softShadow)"/>

  <!-- Top Title Banner -->
  <rect width="900" height="58" rx="14" fill="url(#bgBannerGrad)"/>
  <rect y="44" width="900" height="14" fill="#1A2E26"/>
  <text x="450" y="34" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">BIOSPHERE RESERVE ZONATION &amp; NATIONAL PARKS</text>
  <text x="450" y="52" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#81C784" text-anchor="middle" letter-spacing="1">Protected Areas and Conservation Models</text>

  <!-- Left: Biosphere Concentric Rings -->
  <g transform="translate(30, 80)">
    <rect width="470" height="415" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>

    <g transform="translate(235, 205)">
      <!-- Outer Transition Zone Ring -->
      <circle cx="0" cy="0" r="170" fill="url(#transitionZoneG)" stroke="#0288D1" stroke-width="2"/>
      <path d="M -150 0 A 150 150 0 1 1 150 0" fill="none" id="transTextPath"/>
      <text font-family="sans-serif" font-size="14" font-weight="bold" fill="#01579B" text-anchor="middle" dy="-140">TRANSITION/MANIPULATION ZONE</text>
      <text font-family="sans-serif" font-size="11" font-weight="bold" fill="#0277BD" text-anchor="middle" dy="-124">Human Settlements</text>

      <!-- Middle Buffer Zone Ring -->
      <circle cx="0" cy="0" r="115" fill="url(#bufferZoneG)" stroke="#2E7D32" stroke-width="2"/>
      <text font-family="sans-serif" font-size="14" font-weight="bold" fill="#1B5E20" text-anchor="middle" dy="-85">BUFFER ZONE</text>
      <text font-family="sans-serif" font-size="11" font-weight="bold" fill="#2E7D32" text-anchor="middle" dy="-68">Sustainable Use</text>

      <!-- Inner Core Zone Disc -->
      <circle cx="0" cy="0" r="62" fill="url(#coreZoneG)" stroke="#1B5E20" stroke-width="2" filter="url(#glow)"/>
      <text font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle" dy="-15">CORE ZONE</text>
      <text font-family="sans-serif" font-size="10" font-weight="bold" fill="#E8F5E9" text-anchor="middle" dy="2">Strictly Protected;</text>
      <text font-family="sans-serif" font-size="10" font-weight="bold" fill="#E8F5E9" text-anchor="middle" dy="16">Wildlife Only</text>

      <!-- Bottom Buffer Text -->
      <text font-family="sans-serif" font-size="14" font-weight="bold" fill="#1B5E20" text-anchor="middle" dy="68">BUFFER ZONE</text>
      <text font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2E7D32" text-anchor="middle" dy="84">Controlled Human Activity,</text>
      <text font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2E7D32" text-anchor="middle" dy="98">Research &amp; Education</text>

      <!-- Bottom Transition Text -->
      <text font-family="sans-serif" font-size="14" font-weight="bold" fill="#01579B" text-anchor="middle" dy="136">TRANSITION/MANIPULATION ZONE</text>
      <text font-family="sans-serif" font-size="11" font-weight="bold" fill="#0277BD" text-anchor="middle" dy="152">Human Settlements</text>
    </g>
  </g>

  <!-- Right: Selected National Parks Reference Badges -->
  <g transform="translate(520, 80)">
    <rect width="350" height="415" rx="10" fill="#FFFFFF" stroke="#C8D6CD" stroke-width="1.5" filter="url(#softShadow)"/>
    <text x="175" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#37474F" text-anchor="middle" letter-spacing="0.5">SELECTED NATIONAL PARKS</text>
    <text x="175" y="46" font-family="sans-serif" font-size="11" font-weight="bold" fill="#78909C" text-anchor="middle" letter-spacing="1">REFERENCE:</text>

    <!-- Park 1: Dachigam -->
    <g transform="translate(20, 65)">
      <text x="140" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="end">Dachigam</text>
      <circle cx="205" cy="22" r="22" fill="#81C784" stroke="#2E7D32" stroke-width="1.5"/>
      <path d="M 192 30 Q 205 10 218 30 Z" fill="#388E3C"/>
      <path d="M 198 30 Q 205 18 212 30 Z" fill="#1B5E20"/>
    </g>

    <!-- Park 2: Kishtwar -->
    <g transform="translate(20, 130)">
      <text x="140" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="end">Kishtwar</text>
      <circle cx="205" cy="22" r="22" fill="#BCAAA4" stroke="#6D4C41" stroke-width="1.5"/>
      <polygon points="192,34 205,12 218,34" fill="#8D6E63"/>
      <polygon points="198,34 205,20 212,34" fill="#5D4037"/>
    </g>

    <!-- Park 3: Salim Ali -->
    <g transform="translate(20, 195)">
      <text x="140" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="end">Salim Ali</text>
      <circle cx="205" cy="22" r="22" fill="#80DEEA" stroke="#00838F" stroke-width="1.5"/>
      <path d="M 188 26 Q 205 12 222 26" fill="none" stroke="#00ACC1" stroke-width="2"/>
    </g>

    <!-- Park 4: Kazinag -->
    <g transform="translate(20, 260)">
      <text x="140" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="end">Kazinag</text>
      <circle cx="205" cy="22" r="22" fill="#A1887F" stroke="#4E342E" stroke-width="1.5"/>
      <polygon points="190,34 205,8 220,34" fill="#6D4C41"/>
    </g>

    <!-- Park 5: Hemis -->
    <g transform="translate(20, 325)">
      <text x="140" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2E7D32" text-anchor="end">Hemis</text>
      <circle cx="205" cy="22" r="22" fill="#B0BEC5" stroke="#37474F" stroke-width="1.5"/>
      <polygon points="188,34 205,10 222,34" fill="#78909C"/>
    </g>
  </g>
</svg>`;

const masterSvgs = {
  diagram1Svg: svgToBase64(diagram1Svg),
  diagram2Svg: svgToBase64(diagram2Svg),
  diagram3Svg: svgToBase64(diagram3Svg),
  diagram4Svg: svgToBase64(diagram4Svg)
};

fs.writeFileSync(path.join(__dirname, 'master_svg_map.json'), JSON.stringify(masterSvgs, null, 2));
console.log("Master 4 SVGs generated successfully!");
