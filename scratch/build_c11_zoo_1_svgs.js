const fs = require('fs');
const path = require('path');

function svgToBase64(svgString) {
  const cleanSvg = svgString.trim().replace(/\s+/g, ' ');
  const b64 = Buffer.from(cleanSvg).toString('base64');
  return `data:image/svg+xml;base64,${b64}`;
}

// Common SVG Header / Styles
const COMMON_DEFS = `
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#1E1B2E"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5722"/>
      <stop offset="100%" stop-color="#E64A19"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0097A7"/>
    </linearGradient>
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E676"/>
      <stop offset="100%" stop-color="#2E7D32"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#FF8F00"/>
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E040FB"/>
      <stop offset="100%" stop-color="#7B1FA2"/>
    </linearGradient>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF1744"/>
      <stop offset="100%" stop-color="#B71C1C"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#000" flood-opacity="0.6"/>
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
`;

// ==========================================
// 1. COELOM TYPES SVG
// ==========================================
const coelomTypesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 460" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="850" height="460" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="425" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Coelom Types Cross-Sectional Architecture (Basis of Classification)</text>

  <!-- Legend -->
  <g transform="translate(180, 58)">
    <circle cx="0" cy="0" r="7" fill="url(#cyanGrad)"/>
    <text x="12" y="4" font-family="sans-serif" font-size="12" fill="#00E5FF" font-weight="bold">Ectoderm</text>
    <circle cx="120" cy="0" r="7" fill="url(#orangeGrad)"/>
    <text x="132" y="4" font-family="sans-serif" font-size="12" fill="#FF3D00" font-weight="bold">Mesoderm</text>
    <circle cx="240" cy="0" r="7" fill="url(#goldGrad)"/>
    <text x="252" y="4" font-family="sans-serif" font-size="12" fill="#FFD700" font-weight="bold">Endoderm</text>
    <circle cx="360" cy="0" r="7" fill="#00E676"/>
    <text x="372" y="4" font-family="sans-serif" font-size="12" fill="#00E676" font-weight="bold">True Coelom</text>
  </g>

  <!-- Acoelomate -->
  <g transform="translate(45, 95)" filter="url(#shadow)">
    <rect width="235" height="330" rx="12" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="117" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FF3D00" text-anchor="middle">(a) Acoelomate</text>
    <text x="117" y="46" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Platyhelminthes (Flatworms)</text>
    <g transform="translate(117, 150)">
      <circle cx="0" cy="0" r="75" fill="url(#cyanGrad)" stroke="#FFF" stroke-width="1"/>
      <circle cx="0" cy="0" r="60" fill="url(#orangeGrad)"/>
      <circle cx="0" cy="0" r="28" fill="url(#goldGrad)"/>
      <circle cx="0" cy="0" r="14" fill="#0F172A" stroke="#FFD700" stroke-width="1.5"/>
      <text x="0" y="4" font-family="sans-serif" font-size="10" fill="#FFF" text-anchor="middle" font-weight="bold">Gut</text>
    </g>
    <rect x="15" y="245" width="205" height="65" rx="6" fill="rgba(255,61,0,0.12)" stroke="#FF3D00" stroke-width="1"/>
    <text x="117" y="265" font-family="sans-serif" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">No Body Cavity</text>
    <text x="117" y="283" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Solid Parenchyma Fill</text>
    <text x="117" y="299" font-family="sans-serif" font-size="10" fill="#FF9E80" text-anchor="middle">e.g. Taenia, Fasciola</text>
  </g>

  <!-- Pseudocoelomate -->
  <g transform="translate(307, 95)" filter="url(#shadow)">
    <rect width="235" height="330" rx="12" fill="#140A1D" stroke="#FFD700" stroke-width="1.5"/>
    <text x="117" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FFD700" text-anchor="middle">(b) Pseudocoelomate</text>
    <text x="117" y="46" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Aschelminthes (Roundworms)</text>
    <g transform="translate(117, 150)">
      <circle cx="0" cy="0" r="75" fill="url(#cyanGrad)" stroke="#FFF" stroke-width="1"/>
      <circle cx="0" cy="0" r="60" fill="#0B2B28" stroke="#00E5FF" stroke-width="1"/>
      <circle cx="-35" cy="-20" r="13" fill="url(#orangeGrad)"/>
      <circle cx="35" cy="-20" r="13" fill="url(#orangeGrad)"/>
      <circle cx="-36" cy="18" r="12" fill="url(#orangeGrad)"/>
      <circle cx="36" cy="18" r="12" fill="url(#orangeGrad)"/>
      <circle cx="0" cy="-42" r="11" fill="url(#orangeGrad)"/>
      <circle cx="0" cy="42" r="11" fill="url(#orangeGrad)"/>
      <circle cx="0" cy="0" r="26" fill="url(#goldGrad)"/>
      <circle cx="0" cy="0" r="13" fill="#0F172A" stroke="#FFD700" stroke-width="1.5"/>
      <text x="0" y="4" font-family="sans-serif" font-size="10" fill="#FFF" text-anchor="middle" font-weight="bold">Gut</text>
    </g>
    <rect x="15" y="245" width="205" height="65" rx="6" fill="rgba(255,215,0,0.12)" stroke="#FFD700" stroke-width="1"/>
    <text x="117" y="265" font-family="sans-serif" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">False Body Cavity</text>
    <text x="117" y="283" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Mesoderm in Scattered Pouches</text>
    <text x="117" y="299" font-family="sans-serif" font-size="10" fill="#FFD700" text-anchor="middle">e.g. Ascaris, Wuchereria</text>
  </g>

  <!-- Eucoelomate -->
  <g transform="translate(570, 95)" filter="url(#shadow)">
    <rect width="235" height="330" rx="12" fill="#140A1D" stroke="#00E676" stroke-width="1.5"/>
    <text x="117" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E676" text-anchor="middle">(c) Eucoelomate</text>
    <text x="117" y="46" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Annelids to Chordates</text>
    <g transform="translate(117, 150)">
      <circle cx="0" cy="0" r="75" fill="url(#cyanGrad)" stroke="#FFF" stroke-width="1"/>
      <circle cx="0" cy="0" r="62" fill="url(#orangeGrad)"/>
      <circle cx="0" cy="0" r="50" fill="url(#greenGrad)" opacity="0.8" stroke="#00E676" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="30" fill="url(#orangeGrad)"/>
      <circle cx="0" cy="0" r="22" fill="url(#goldGrad)"/>
      <circle cx="0" cy="0" r="11" fill="#0F172A" stroke="#FFD700" stroke-width="1.5"/>
      <text x="0" y="4" font-family="sans-serif" font-size="9" fill="#FFF" text-anchor="middle" font-weight="bold">Gut</text>
    </g>
    <rect x="15" y="245" width="205" height="65" rx="6" fill="rgba(0,230,118,0.12)" stroke="#00E676" stroke-width="1"/>
    <text x="117" y="265" font-family="sans-serif" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">True Coelom</text>
    <text x="117" y="283" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Completely Lined by Mesoderm</text>
    <text x="117" y="299" font-family="sans-serif" font-size="10" fill="#69F0AE" text-anchor="middle">e.g. Earthworm, Insects, Humans</text>
  </g>
</svg>`;

// ==========================================
// 2. EMBRYONIC GERM LAYERS SVG
// ==========================================
const germLayersSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="800" height="420" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="400" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Embryonic Germ Layer Organization (Diploblastic vs Triploblastic)</text>

  <!-- Left: Diploblastic -->
  <g transform="translate(45, 75)" filter="url(#shadow)">
    <rect width="335" height="315" rx="14" fill="#140A1D" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="167" y="30" font-family="sans-serif" font-size="17" font-weight="bold" fill="#00E5FF" text-anchor="middle">1. Diploblastic Organization</text>
    <text x="167" y="48" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Phyla Cnidaria &amp; Ctenophora</text>

    <g transform="translate(167, 160)">
      <!-- Outer Ectoderm -->
      <circle cx="0" cy="0" r="85" fill="url(#cyanGrad)" stroke="#FFF" stroke-width="1.5"/>
      <!-- Non-cellular Mesoglea -->
      <circle cx="0" cy="0" r="68" fill="url(#purpleGrad)" opacity="0.75"/>
      <text x="0" y="-50" font-family="sans-serif" font-size="10" fill="#E040FB" text-anchor="middle" font-weight="bold">Mesoglea Layer</text>
      <!-- Inner Endoderm -->
      <circle cx="0" cy="0" r="40" fill="url(#redGrad)"/>
      <!-- Gastrovascular Cavity -->
      <circle cx="0" cy="0" r="20" fill="#0F172A" stroke="#FFD700" stroke-width="1.5"/>
      <text x="0" y="4" font-family="sans-serif" font-size="10" fill="#FFD700" text-anchor="middle" font-weight="bold">Cavity</text>
    </g>

    <rect x="20" y="255" width="295" height="45" rx="6" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1"/>
    <text x="167" y="274" font-family="sans-serif" font-size="12" fill="#FFF" text-anchor="middle"><tspan fill="#00E5FF" font-weight="bold">2 Germ Layers:</tspan> Outer Ectoderm + Inner Endoderm</text>
    <text x="167" y="291" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Intervening undifferentiated jelly-like <tspan fill="#E040FB">Mesoglea</tspan></text>
  </g>

  <!-- Right: Triploblastic -->
  <g transform="translate(420, 75)" filter="url(#shadow)">
    <rect width="335" height="315" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="167" y="30" font-family="sans-serif" font-size="17" font-weight="bold" fill="#FF3D00" text-anchor="middle">2. Triploblastic Organization</text>
    <text x="167" y="48" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Platyhelminthes to Chordates</text>

    <g transform="translate(167, 160)">
      <!-- Outer Ectoderm -->
      <circle cx="0" cy="0" r="85" fill="url(#cyanGrad)" stroke="#FFF" stroke-width="1.5"/>
      <!-- Cellular Mesoderm -->
      <circle cx="0" cy="0" r="68" fill="url(#orangeGrad)"/>
      <text x="0" y="-50" font-family="sans-serif" font-size="10" fill="#FFF" text-anchor="middle" font-weight="bold">Mesoderm Layer</text>
      <!-- Inner Endoderm -->
      <circle cx="0" cy="0" r="40" fill="url(#redGrad)"/>
      <!-- Gut Cavity -->
      <circle cx="0" cy="0" r="20" fill="#0F172A" stroke="#FFD700" stroke-width="1.5"/>
      <text x="0" y="4" font-family="sans-serif" font-size="10" fill="#FFD700" text-anchor="middle" font-weight="bold">Gut</text>
    </g>

    <rect x="20" y="255" width="295" height="45" rx="6" fill="rgba(255,61,0,0.1)" stroke="#FF3D00" stroke-width="1"/>
    <text x="167" y="274" font-family="sans-serif" font-size="12" fill="#FFF" text-anchor="middle"><tspan fill="#FF3D00" font-weight="bold">3 Germ Layers:</tspan> Ectoderm + Mesoderm + Endoderm</text>
    <text x="167" y="291" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">3rd layer (<tspan fill="#FF3D00">Mesoderm</tspan>) enables organ systems</text>
  </g>
</svg>`;

// ==========================================
// 3. BODY SYMMETRY SVG
// ==========================================
const bodySymmetrySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 440" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="820" height="440" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="410" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Body Symmetry Patterns in Animal Kingdom</text>

  <!-- Left: Radial Symmetry -->
  <g transform="translate(40, 75)" filter="url(#shadow)">
    <rect width="355" height="335" rx="14" fill="#140A1D" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="177" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E5FF" text-anchor="middle">(a) Radial Symmetry</text>
    <text x="177" y="45" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Hydra, Jellyfish, Adult Echinoderms</text>

    <!-- Hydra / Cnidarian 3D Sketch -->
    <g transform="translate(177, 165)">
      <!-- Basal disc / Stalk -->
      <path d="M -18 70 Q 0 80 18 70 L 12 0 Q 0 -10 -12 0 Z" fill="url(#orangeGrad)" stroke="#FF5722"/>
      <!-- Body cylinder -->
      <ellipse cx="0" cy="0" rx="28" ry="14" fill="#E64A19"/>
      <!-- Tentacles extending radially -->
      <path d="M -15 -8 C -40 -40 -60 -20 -70 -50" stroke="#00E5FF" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 15 -8 C 40 -40 60 -20 70 -50" stroke="#00E5FF" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M -25 0 C -60 0 -75 20 -80 0" stroke="#00E5FF" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 25 0 C 60 0 75 20 80 0" stroke="#00E5FF" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 0 -12 C 0 -50 20 -70 0 -85" stroke="#00E5FF" stroke-width="4" fill="none" stroke-linecap="round"/>

      <!-- Radial symmetry planes (Dashed circles & lines) -->
      <line x1="0" y1="-95" x2="0" y2="90" stroke="#FFD700" stroke-width="2" stroke-dasharray="5,4"/>
      <line x1="-95" y1="0" x2="95" y2="0" stroke="#FFD700" stroke-width="2" stroke-dasharray="5,4"/>
      <line x1="-65" y1="-65" x2="65" y2="65" stroke="#FFD700" stroke-width="2" stroke-dasharray="5,4"/>
      <line x1="65" y1="-65" x2="-65" y2="65" stroke="#FFD700" stroke-width="2" stroke-dasharray="5,4"/>
    </g>

    <rect x="18" y="270" width="319" height="50" rx="6" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1"/>
    <text x="177" y="290" font-family="sans-serif" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">Multiple Planes of Symmetry</text>
    <text x="177" y="308" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Any central plane divides body into equal halves</text>
  </g>

  <!-- Right: Bilateral Symmetry -->
  <g transform="translate(425, 75)" filter="url(#shadow)">
    <rect width="355" height="335" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="177" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FF3D00" text-anchor="middle">(b) Bilateral Symmetry</text>
    <text x="177" y="45" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Platyhelminthes to Chordates</text>

    <!-- Planaria / Bilateral worm 3D Sketch -->
    <g transform="translate(177, 165)">
      <!-- Left Half -->
      <path d="M 0 -85 C -45 -60 -50 40 0 85 Z" fill="url(#cyanGrad)"/>
      <!-- Right Half -->
      <path d="M 0 -85 C 45 -60 50 40 0 85 Z" fill="url(#cyanGrad)" opacity="0.8"/>
      <!-- Eye spots -->
      <circle cx="-12" cy="-60" r="4" fill="#FFF"/><circle cx="-12" cy="-60" r="2" fill="#000"/>
      <circle cx="12" cy="-60" r="4" fill="#FFF"/><circle cx="12" cy="-60" r="2" fill="#000"/>
      <!-- Single Sagittal Plane (Bright Red Line) -->
      <line x1="0" y1="-100" x2="0" y2="100" stroke="#FF1744" stroke-width="3.5" filter="url(#glow)"/>
      <text x="5" y="-95" font-family="sans-serif" font-size="10" fill="#FF1744" font-weight="bold">Single Sagittal Plane</text>

      <!-- Labels for orientation -->
      <text x="0" y="-105" font-family="sans-serif" font-size="10" fill="#FFD700" text-anchor="middle" font-weight="bold">Anterior (Head)</text>
      <text x="0" y="115" font-family="sans-serif" font-size="10" fill="#FFD700" text-anchor="middle" font-weight="bold">Posterior (Tail)</text>
      <text x="-65" y="0" font-family="sans-serif" font-size="10" fill="#00E5FF" font-weight="bold">Left</text>
      <text x="45" y="0" font-family="sans-serif" font-size="10" fill="#00E5FF" font-weight="bold">Right</text>
    </g>

    <rect x="18" y="270" width="319" height="50" rx="6" fill="rgba(255,61,0,0.1)" stroke="#FF3D00" stroke-width="1"/>
    <text x="177" y="290" font-family="sans-serif" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">Single Plane of Symmetry</text>
    <text x="177" y="308" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Only 1 plane divides body into identical Left &amp; Right halves</text>
  </g>
</svg>`;

// ==========================================
// 4. BASIC CHORDATE CHARACTERISTICS SVG
// ==========================================
const chordateCharacteristicsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 450" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="850" height="450" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="425" y="36" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Generalized Chordate Body Plan (4 Fundamental Characteristics)</text>

  <g transform="translate(45, 65)" filter="url(#shadow)">
    <rect width="760" height="350" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>

    <!-- Fish-like Chordate Body Outline -->
    <path d="M 50 160 C 120 70 500 70 650 160 C 700 130 730 100 740 160 C 730 220 700 190 650 160 C 500 250 120 250 50 160 Z" fill="url(#cyanGrad)" opacity="0.25" stroke="#00E5FF" stroke-width="2"/>

    <!-- 1. Dorsal Hollow Nerve Cord -->
    <path d="M 100 120 C 250 100 500 100 680 145" stroke="#00E5FF" stroke-width="7" fill="none" filter="url(#glow)"/>
    <text x="350" y="95" font-family="sans-serif" font-size="13" font-weight="bold" fill="#00E5FF">1. Dorsal Tubular Hollow Nerve Cord</text>

    <!-- 2. Notochord -->
    <path d="M 120 142 C 270 122 520 122 660 155" stroke="#FFD700" stroke-width="9" fill="none" filter="url(#glow)"/>
    <text x="350" y="140" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFD700">2. Notochord (Flexible Dorsal Supporting Rod)</text>

    <!-- Alimentary Canal & Pharynx -->
    <path d="M 70 170 C 130 170 240 170 350 180 C 450 190 550 190 600 170" stroke="#FF5722" stroke-width="6" fill="none"/>
    <text x="60" y="195" font-family="sans-serif" font-size="12" fill="#FF5722" font-weight="bold">Mouth</text>
    <text x="590" y="195" font-family="sans-serif" font-size="12" fill="#FF5722" font-weight="bold">Anus</text>

    <!-- 3. Pharyngeal Gill Slits -->
    <g transform="translate(160, 155)">
      <ellipse cx="0" cy="0" rx="5" ry="14" fill="#FF1744"/>
      <ellipse cx="20" cy="0" rx="5" ry="14" fill="#FF1744"/>
      <ellipse cx="40" cy="0" rx="5" ry="14" fill="#FF1744"/>
      <ellipse cx="60" cy="0" rx="5" ry="14" fill="#FF1744"/>
      <ellipse cx="80" cy="0" rx="5" ry="14" fill="#FF1744"/>
    </g>
    <text x="120" y="215" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FF1744">3. Paired Pharyngeal Gill Slits</text>

    <!-- 4. Post-anal Tail -->
    <path d="M 600 170 C 650 170 700 160 730 160" stroke="#00E676" stroke-width="6" stroke-dasharray="4,2"/>
    <text x="630" y="215" font-family="sans-serif" font-size="13" font-weight="bold" fill="#00E676">4. Post-anal Tail</text>

    <!-- Muscle Segments (Myotomes) -->
    <path d="M 280 110 L 290 150 M 320 110 L 330 150 M 360 110 L 370 150 M 400 110 L 410 150" stroke="#FFF" stroke-width="1.5" opacity="0.5"/>

    <!-- Key Highlights Bar at Bottom -->
    <rect x="25" y="255" width="710" height="70" rx="10" fill="rgba(255,61,0,0.12)" stroke="#FF3D00" stroke-width="1.2"/>
    <text x="380" y="280" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFF" text-anchor="middle">Hallmarks of Phylum Chordata vs Non-Chordates</text>
    <text x="380" y="305" font-family="sans-serif" font-size="12" fill="#DDD" text-anchor="middle">Notochord Present • Central Nervous System Dorsal &amp; Hollow • Pharyngeal Gill Slits Present • Tail Present</text>
  </g>
</svg>`;

// ==========================================
// 5. CNIDARIA FORMS SVG
// ==========================================
const cnidariaFormsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 440" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="820" height="440" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="410" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Cnidaria Body Plan: Sessile Polyp vs Free-Swimming Medusa</text>

  <!-- Left: Polyp Form -->
  <g transform="translate(40, 75)" filter="url(#shadow)">
    <rect width="355" height="335" rx="14" fill="#140A1D" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="177" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E5FF" text-anchor="middle">(a) Polyp Body Form</text>
    <text x="177" y="45" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Sessile &amp; Cylindrical (e.g. Hydra, Adamsia)</text>

    <!-- Polyp Sketch -->
    <g transform="translate(177, 160)">
      <!-- Substrate -->
      <rect x="-60" y="75" width="120" height="10" rx="3" fill="#555"/>
      <!-- Body Stalk -->
      <path d="M -22 75 L -18 0 Q 0 -15 18 0 L 22 75 Z" fill="url(#cyanGrad)"/>
      <!-- Gastrovascular Cavity -->
      <path d="M -10 70 L -8 10 Q 0 0 8 10 L 10 70 Z" fill="#0F172A"/>
      <!-- Mouth UPWARD -->
      <ellipse cx="0" cy="-5" rx="8" ry="4" fill="#FFD700"/>
      <text x="0" y="-12" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold" text-anchor="middle">Mouth Upwards</text>
      <!-- Tentacles UPWARD -->
      <path d="M -12 -5 C -30 -30 -40 -50 -50 -70" stroke="#00E5FF" stroke-width="3.5" fill="none"/>
      <path d="M 12 -5 C 30 -30 40 -50 50 -70" stroke="#00E5FF" stroke-width="3.5" fill="none"/>
      <path d="M -6 -8 C -15 -40 -20 -60 -25 -75" stroke="#00E5FF" stroke-width="3.5" fill="none"/>
      <path d="M 6 -8 C 15 -40 20 -60 25 -75" stroke="#00E5FF" stroke-width="3.5" fill="none"/>
    </g>

    <rect x="18" y="265" width="319" height="55" rx="6" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1"/>
    <text x="177" y="285" font-family="sans-serif" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">Fixed / Sessile Habit</text>
    <text x="177" y="305" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Mouth &amp; Tentacles directed UPWARDS</text>
  </g>

  <!-- Right: Medusa Form -->
  <g transform="translate(425, 75)" filter="url(#shadow)">
    <rect width="355" height="335" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="177" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FF3D00" text-anchor="middle">(b) Medusa Body Form</text>
    <text x="177" y="45" font-family="sans-serif" font-size="12" fill="#AAA" text-anchor="middle">Free-swimming &amp; Umbrella (e.g. Aurelia)</text>

    <!-- Medusa Sketch -->
    <g transform="translate(177, 140)">
      <!-- Umbrella Bell -->
      <path d="M -75 20 C -75 -40 75 -40 75 20 C 50 10 -50 10 -75 20 Z" fill="url(#orangeGrad)"/>
      <!-- Manubrium & Mouth DOWNWARD -->
      <rect x="-10" y="15" width="20" height="30" fill="#FFD700" opacity="0.9"/>
      <text x="0" y="58" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold" text-anchor="middle">Mouth Downwards</text>
      <!-- Tentacles DOWNWARD -->
      <path d="M -65 20 C -70 40 -60 70 -65 95" stroke="#FF3D00" stroke-width="3" fill="none"/>
      <path d="M 65 20 C 70 40 60 70 65 95" stroke="#FF3D00" stroke-width="3" fill="none"/>
      <path d="M -40 18 C -45 45 -40 65 -45 90" stroke="#FF3D00" stroke-width="3" fill="none"/>
      <path d="M 40 18 C 45 45 40 65 45 90" stroke="#FF3D00" stroke-width="3" fill="none"/>
      <path d="M -15 20 C -20 50 -15 75 -20 100" stroke="#FF3D00" stroke-width="3" fill="none"/>
      <path d="M 15 20 C 20 50 15 75 20 100" stroke="#FF3D00" stroke-width="3" fill="none"/>
    </g>

    <rect x="18" y="265" width="319" height="55" rx="6" fill="rgba(255,61,0,0.1)" stroke="#FF3D00" stroke-width="1"/>
    <text x="177" y="285" font-family="sans-serif" font-size="12" fill="#FFF" font-weight="bold" text-anchor="middle">Free-Swimming Habit</text>
    <text x="177" y="305" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Mouth &amp; Tentacles directed DOWNWARDS</text>
  </g>
</svg>`;

// ==========================================
// 6. HEMICHORDATA SVG
// ==========================================
const hemichordataSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="800" height="420" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="400" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Hemichordata Anatomy: Structure of Balanoglossus (Tongue Worm)</text>

  <g transform="translate(40, 65)" filter="url(#shadow)">
    <rect width="720" height="325" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>

    <!-- Balanoglossus Body Sketch -->
    <g transform="translate(80, 130)">
      <!-- 1. Proboscis -->
      <path d="M 0 0 C -25 -25 -25 25 0 0 M 0 -22 C 30 -30 60 -25 70 0 C 60 25 30 30 0 22 Z" fill="url(#goldGrad)" stroke="#FF8F00" stroke-width="1.5"/>
      <text x="30" y="-35" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFD700">1. Proboscis</text>
      <line x1="35" y1="-30" x2="35" y2="-15" stroke="#FFD700" stroke-width="1.5"/>

      <!-- 2. Collar -->
      <path d="M 70 -25 L 110 -28 L 110 28 L 70 25 Z" fill="url(#orangeGrad)" stroke="#FF3D00" stroke-width="1.5"/>
      <text x="90" y="-35" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FF3D00">2. Collar</text>
      <line x1="90" y1="-30" x2="90" y2="-15" stroke="#FF3D00" stroke-width="1.5"/>

      <!-- 3. Trunk -->
      <!-- Branchiogenital Region -->
      <path d="M 110 -28 L 240 -25 L 240 25 L 110 28 Z" fill="url(#cyanGrad)"/>
      <g fill="#FFF" opacity="0.6">
        <circle cx="140" cy="-12" r="3"/><circle cx="160" cy="-12" r="3"/><circle cx="180" cy="-12" r="3"/><circle cx="200" cy="-12" r="3"/>
        <circle cx="140" cy="12" r="3"/><circle cx="160" cy="12" r="3"/><circle cx="180" cy="12" r="3"/><circle cx="200" cy="12" r="3"/>
      </g>
      <text x="175" y="-35" font-family="sans-serif" font-size="12" font-weight="bold" fill="#00E5FF">Branchiogenital Region (Gill Pores)</text>
      <line x1="175" y1="-30" x2="175" y2="-15" stroke="#00E5FF" stroke-width="1.5"/>

      <!-- Hepatic Region -->
      <path d="M 240 -25 L 380 -20 L 380 20 L 240 25 Z" fill="url(#greenGrad)"/>
      <!-- Hepatic caeca bumps -->
      <path d="M 250 -23 Q 265 -35 280 -22 Q 295 -35 310 -22 Q 325 -35 340 -21" stroke="#69F0AE" stroke-width="2" fill="none"/>
      <text x="310" y="-35" font-family="sans-serif" font-size="12" font-weight="bold" fill="#00E676">Hepatic Region</text>
      <line x1="310" y1="-30" x2="310" y2="-15" stroke="#00E676" stroke-width="1.5"/>

      <!-- Abdominal Region & Tail -->
      <path d="M 380 -20 C 450 -15 500 -10 540 0 C 500 10 450 15 380 20 Z" fill="url(#purpleGrad)"/>
      <text x="450" y="-25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#E040FB">Abdominal Region &amp; Anus</text>
      <line x1="450" y1="-20" x2="450" y2="-5" stroke="#E040FB" stroke-width="1.5"/>
    </g>

    <!-- Bottom Feature Box -->
    <rect x="25" y="235" width="670" height="65" rx="8" fill="rgba(255,61,0,0.12)" stroke="#FF3D00" stroke-width="1.2"/>
    <text x="360" y="258" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFF" text-anchor="middle">Key Hemichordate Feature: Stomochord &amp; Proboscis Gland</text>
    <text x="360" y="280" font-family="sans-serif" font-size="11.5" fill="#DDD" text-anchor="middle">Possesses Stomochord (buccal diverticulum in collar region). Excretion by Proboscis Gland.</text>
  </g>
</svg>`;

// ==========================================
// 7. PORIFERA SYCON SVG
// ==========================================
const syconPoriferaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 450" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="820" height="450" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="410" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Porifera Anatomy: Sycon (Sponge) Canal System &amp; Choanocytes</text>

  <!-- Left: 3D Sponge Anatomy -->
  <g transform="translate(40, 70)" filter="url(#shadow)">
    <rect width="360" height="345" rx="14" fill="#140A1D" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="180" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E5FF" text-anchor="middle">3D Sycon Body &amp; Water Canal System</text>

    <g transform="translate(180, 160)">
      <!-- Substrate -->
      <rect x="-70" y="100" width="140" height="12" rx="3" fill="#444"/>
      <!-- Sponge Body Urn Outer -->
      <path d="M -30 100 Q -65 20 -40 -60 L 40 -60 Q 65 20 30 100 Z" fill="url(#orangeGrad)"/>
      <!-- Inner Spongocoel Cavity -->
      <path d="M -15 100 Q -30 20 -20 -60 L 20 -60 Q 30 20 15 100 Z" fill="#0F172A"/>

      <!-- Osculum Fringe (Spicules at top) -->
      <path d="M -40 -60 L -45 -85 M -30 -60 L -32 -90 M -15 -60 L -12 -92 M 0 -60 L 0 -95 M 15 -60 L 12 -92 M 30 -60 L 32 -90 M 40 -60 L 45 -85" stroke="#FFD700" stroke-width="2"/>
      <text x="0" y="-102" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFD700" text-anchor="middle">Osculum (Water OUT)</text>
      <path d="M 0 -50 L 0 -75" stroke="#00E5FF" stroke-width="3" fill="none" marker-end="url(#arrow)"/>

      <!-- Ostia Pores (Water IN) -->
      <circle cx="-50" cy="-20" r="3" fill="#00E5FF"/><line x1="-70" y1="-20" x2="-52" y2="-20" stroke="#00E5FF" stroke-width="2"/>
      <circle cx="50" cy="-20" r="3" fill="#00E5FF"/><line x1="70" y1="-20" x2="52" y2="-20" stroke="#00E5FF" stroke-width="2"/>
      <circle cx="-55" cy="20" r="3" fill="#00E5FF"/><line x1="-75" y1="20" x2="-57" y2="20" stroke="#00E5FF" stroke-width="2"/>
      <circle cx="55" cy="20" r="3" fill="#00E5FF"/><line x1="75" y1="20" x2="57" y2="20" stroke="#00E5FF" stroke-width="2"/>
      <text x="-75" y="-28" font-family="sans-serif" font-size="10" fill="#00E5FF" font-weight="bold">Ostia (Water IN)</text>

      <text x="0" y="20" font-family="sans-serif" font-size="11" fill="#FFF" font-weight="bold" text-anchor="middle">Spongocoel Cavity</text>
    </g>

    <rect x="20" y="280" width="320" height="45" rx="6" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1"/>
    <text x="180" y="300" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">Water Flow Route:</text>
    <text x="180" y="316" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Ostia (Inhalant) ➔ Spongocoel ➔ Osculum (Exhalant)</text>
  </g>

  <!-- Right: Choanocyte Cell Callout -->
  <g transform="translate(425, 70)" filter="url(#shadow)">
    <rect width="355" height="345" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="177" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FF3D00" text-anchor="middle">Choanocyte (Collar Cell) 3D Detail</text>

    <g transform="translate(177, 160)">
      <!-- Cell Body -->
      <ellipse cx="0" cy="40" rx="35" ry="25" fill="url(#orangeGrad)"/>
      <circle cx="0" cy="40" r="10" fill="#FFD700"/>
      <text x="0" y="44" font-family="sans-serif" font-size="9" fill="#000" font-weight="bold" text-anchor="middle">Nucleus</text>
      <!-- Collar -->
      <path d="M -18 20 L -25 -20 L 25 -20 L 18 20 Z" fill="none" stroke="#00E5FF" stroke-width="2.5" stroke-dasharray="3,2"/>
      <text x="35" y="-5" font-family="sans-serif" font-size="11" fill="#00E5FF" font-weight="bold">Collar (Microvilli)</text>
      <!-- Flagellum -->
      <path d="M 0 15 C 5 -10 -5 -40 0 -70" stroke="#FFD700" stroke-width="3" fill="none"/>
      <text x="15" y="-50" font-family="sans-serif" font-size="11" fill="#FFD700" font-weight="bold">Flagellum</text>
    </g>

    <rect x="18" y="280" width="319" height="45" rx="6" fill="rgba(255,61,0,0.1)" stroke="#FF3D00" stroke-width="1"/>
    <text x="177" y="300" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">Choanocytes line Radial Canals &amp; Spongocoel</text>
    <text x="177" y="316" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Flagellum beats to create water current for filter feeding</text>
  </g>
</svg>`;

// ==========================================
// 8. TAENIA PLATYHELMINTHES SVG
// ==========================================
const taeniaPlatyhelminthesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 830 450" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="830" height="450" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="415" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Platyhelminthes Anatomy: Taenia solium (Pork Tapeworm)</text>

  <!-- Left: Scolex Detail -->
  <g transform="translate(40, 70)" filter="url(#shadow)">
    <rect width="345" height="345" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="172" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FF3D00" text-anchor="middle">1. Scolex (Head Structure) 3D</text>

    <g transform="translate(172, 160)">
      <!-- Rostellum with Hooks -->
      <path d="M -20 -40 Q 0 -60 20 -40 Z" fill="url(#goldGrad)"/>
      <path d="M -18 -45 L -28 -55 M -10 -50 L -15 -62 M 0 -52 L 0 -65 M 10 -50 L 15 -62 M 18 -45 L 28 -55" stroke="#FFF" stroke-width="2.5"/>
      <text x="0" y="-72" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFD700" text-anchor="middle">Rostellum &amp; Chitinous Hooks</text>

      <!-- Scolex Knob -->
      <circle cx="0" cy="0" r="45" fill="url(#orangeGrad)"/>

      <!-- 4 Muscular Suckers -->
      <circle cx="-22" cy="-15" r="14" fill="#140A1D" stroke="#FFD700" stroke-width="2"/>
      <circle cx="22" cy="-15" r="14" fill="#140A1D" stroke="#FFD700" stroke-width="2"/>
      <circle cx="-22" cy="18" r="14" fill="#140A1D" stroke="#FFD700" stroke-width="2"/>
      <circle cx="22" cy="18" r="14" fill="#140A1D" stroke="#FFD700" stroke-width="2"/>
      <text x="50" y="5" font-family="sans-serif" font-size="11" font-weight="bold" fill="#00E5FF">4 Suckers</text>

      <!-- Neck -->
      <rect x="-15" y="45" width="30" height="40" fill="url(#orangeGrad)"/>
      <text x="0" y="70" font-family="sans-serif" font-size="10" fill="#FFF" font-weight="bold" text-anchor="middle">Neck</text>
    </g>

    <rect x="18" y="280" width="309" height="45" rx="6" fill="rgba(255,61,0,0.1)" stroke="#FF3D00" stroke-width="1"/>
    <text x="172" y="300" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">Attachment Organs:</text>
    <text x="172" y="316" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Hooks &amp; Suckers anchor to host intestine</text>
  </g>

  <!-- Right: Strobila & Flame Cells -->
  <g transform="translate(410, 70)" filter="url(#shadow)">
    <rect width="380" height="345" rx="14" fill="#140A1D" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="190" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E5FF" text-anchor="middle">2. Proglottids &amp; Excretory Flame Cell</text>

    <!-- Ribbon Tapeworm Chain -->
    <g transform="translate(40, 110)">
      <!-- Immature -->
      <rect x="0" y="0" width="120" height="15" rx="2" fill="url(#cyanGrad)"/>
      <text x="130" y="12" font-family="sans-serif" font-size="11" fill="#00E5FF" font-weight="bold">Immature Proglottids</text>
      <!-- Mature -->
      <rect x="0" y="25" width="120" height="30" rx="3" fill="url(#cyanGrad)"/>
      <text x="130" y="45" font-family="sans-serif" font-size="11" fill="#00E5FF" font-weight="bold">Mature (Hermaphrodite)</text>
      <!-- Gravid -->
      <rect x="0" y="65" width="120" height="50" rx="4" fill="url(#orangeGrad)"/>
      <!-- Branched Uterus -->
      <path d="M 60 70 L 60 110 M 60 80 L 20 80 M 60 80 L 100 80 M 60 95 L 30 95 M 60 95 L 90 95" stroke="#FFD700" stroke-width="2"/>
      <text x="130" y="95" font-family="sans-serif" font-size="11" fill="#FF3D00" font-weight="bold">Gravid (Packed with Eggs)</text>
    </g>

    <!-- Flame Cell Box -->
    <g transform="translate(20, 235)">
      <rect width="340" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.2"/>
      <text x="170" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#00E5FF" text-anchor="middle">Specialized Excretory System: Flame Cells</text>
      <text x="170" y="50" font-family="sans-serif" font-size="11.5" fill="#DDD" text-anchor="middle">Flatworms feature <tspan fill="#FFD700" font-weight="bold">Flame Cells (Protonephridia)</tspan></text>
      <text x="170" y="70" font-family="sans-serif" font-size="11" fill="#AAA" text-anchor="middle">Function: Osmoregulation &amp; Nitrogenous Excretion</text>
    </g>
  </g>
</svg>`;

// ==========================================
// 9. ASCARIS ASCHELMINTHES SVG
// ==========================================
const ascarisAschelminthesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 830 450" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="830" height="450" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="415" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Aschelminthes Anatomy: Ascaris lumbricoides Sexual Dimorphism</text>

  <!-- Left: Female Ascaris -->
  <g transform="translate(40, 70)" filter="url(#shadow)">
    <rect width="355" height="345" rx="14" fill="#140A1D" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="177" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E5FF" text-anchor="middle">Female Ascaris (Larger &amp; Straight)</text>

    <g transform="translate(177, 160)">
      <!-- Mouth lips at top -->
      <ellipse cx="0" cy="-90" rx="8" ry="4" fill="#FFD700"/>
      <text x="0" y="-98" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold" text-anchor="middle">Mouth (3 Lips)</text>

      <!-- Straight Body Cylindrical -->
      <path d="M -12 -90 Q -14 0 -10 90 L 10 90 Q 14 0 12 -90 Z" fill="url(#cyanGrad)"/>
      <line x1="0" y1="-85" x2="0" y2="85" stroke="#FFF" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.6"/>

      <!-- Vulvar aperture -->
      <circle cx="0" cy="-30" r="4" fill="#FF1744"/>
      <text x="20" y="-26" font-family="sans-serif" font-size="10" fill="#FF1744" font-weight="bold">Gonopore</text>

      <!-- Straight Tail Anus -->
      <text x="0" y="105" font-family="sans-serif" font-size="11" fill="#00E5FF" font-weight="bold" text-anchor="middle">Straight Tail (Terminal Anus)</text>
    </g>

    <rect x="18" y="280" width="319" height="45" rx="6" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1"/>
    <text x="177" y="300" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">Length: 20 - 40 cm</text>
    <text x="177" y="316" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Posterior end is strictly STRAIGHT</text>
  </g>

  <!-- Right: Male Ascaris -->
  <g transform="translate(435, 70)" filter="url(#shadow)">
    <rect width="355" height="345" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="177" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FF3D00" text-anchor="middle">Male Ascaris (Smaller &amp; Curved Tail)</text>

    <g transform="translate(177, 160)">
      <!-- Mouth lips -->
      <ellipse cx="0" cy="-90" rx="7" ry="3" fill="#FFD700"/>

      <!-- Curved Body (J-shaped hook tail) -->
      <path d="M -9 -90 Q -10 -20 0 30 C 10 60 50 70 40 90 C 30 100 0 70 -9 40 Q -15 -20 -9 -90 Z" fill="url(#orangeGrad)"/>

      <!-- Penial Spicules at curved tail -->
      <path d="M 35 80 L 50 95 M 32 84 L 47 99" stroke="#FFD700" stroke-width="2.5"/>
      <text x="55" y="105" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold">Penial Spicules</text>

      <text x="-20" y="105" font-family="sans-serif" font-size="11" fill="#FF3D00" font-weight="bold">Curved Tail</text>
    </g>

    <rect x="18" y="280" width="319" height="45" rx="6" fill="rgba(255,61,0,0.1)" stroke="#FF3D00" stroke-width="1"/>
    <text x="177" y="300" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">Length: 15 - 30 cm</text>
    <text x="177" y="316" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Posterior end is SHARPLY CURVED VENTRALLY</text>
  </g>
</svg>`;

// ==========================================
// 10. ANNELIDA NEREIS & EARTHWORM SVG
// ==========================================
const annelidaNereisEarthwormSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 450" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="840" height="450" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="420" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Annelida Anatomy: Nereis (Parapodia) &amp; Earthworm Metamerism</text>

  <!-- Left: Nereis Parapodia -->
  <g transform="translate(40, 70)" filter="url(#shadow)">
    <rect width="360" height="345" rx="14" fill="#140A1D" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="180" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E5FF" text-anchor="middle">1. Nereis (Lateral Parapodia)</text>

    <g transform="translate(180, 150)">
      <!-- Segmented Worm Body Vertical -->
      <rect x="-25" y="-70" width="50" height="140" rx="4" fill="url(#cyanGrad)"/>
      <!-- Metameric Ring Lines -->
      <line x1="-25" y1="-40" x2="25" y2="-40" stroke="#FFF" stroke-width="1.5"/>
      <line x1="-25" y1="-10" x2="25" y2="-10" stroke="#FFF" stroke-width="1.5"/>
      <line x1="-25" y1="20" x2="25" y2="20" stroke="#FFF" stroke-width="1.5"/>
      <line x1="-25" y1="50" x2="25" y2="50" stroke="#FFF" stroke-width="1.5"/>

      <!-- Parapodia Flaps extending sideways -->
      <!-- Left parapodia -->
      <path d="M -25 -55 Q -50 -60 -60 -40 Q -50 -20 -25 -25 Z" fill="url(#orangeGrad)"/>
      <path d="M -25 -25 Q -50 -30 -60 -10 Q -50 10 -25 5 Z" fill="url(#orangeGrad)"/>
      <path d="M -25 5 Q -50 0 -60 20 Q -50 40 -25 35 Z" fill="url(#orangeGrad)"/>
      <!-- Setae bristles -->
      <line x1="-60" y1="-40" x2="-75" y2="-45" stroke="#FFD700" stroke-width="2"/>
      <line x1="-60" y1="-10" x2="-75" y2="-15" stroke="#FFD700" stroke-width="2"/>
      <line x1="-60" y1="20" x2="-75" y2="15" stroke="#FFD700" stroke-width="2"/>

      <!-- Right parapodia -->
      <path d="M 25 -55 Q 50 -60 60 -40 Q 50 -20 25 -25 Z" fill="url(#orangeGrad)"/>
      <path d="M 25 -25 Q 50 -30 60 -10 Q 50 10 25 5 Z" fill="url(#orangeGrad)"/>
      <path d="M 25 5 Q 50 0 60 20 Q 50 40 25 35 Z" fill="url(#orangeGrad)"/>
      <line x1="60" y1="-40" x2="75" y2="-45" stroke="#FFD700" stroke-width="2"/>
      <line x1="60" y1="-10" x2="75" y2="-15" stroke="#FFD700" stroke-width="2"/>
      <line x1="60" y1="20" x2="75" y2="15" stroke="#FFD700" stroke-width="2"/>

      <text x="80" y="-10" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FF3D00">Parapodia</text>
    </g>

    <rect x="20" y="280" width="320" height="45" rx="6" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1"/>
    <text x="180" y="300" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">Aquatic Annelid Feature:</text>
    <text x="180" y="316" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Parapodia serve for Swimming &amp; Respiration</text>
  </g>

  <!-- Right: Earthworm Metamerism -->
  <g transform="translate(440, 70)" filter="url(#shadow)">
    <rect width="360" height="345" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="180" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FF3D00" text-anchor="middle">2. Earthworm Metamerism &amp; Clitellum</text>

    <g transform="translate(180, 150)">
      <!-- Long Segmented Body Horizontal -->
      <rect x="-130" y="-20" width="260" height="40" rx="20" fill="url(#orangeGrad)"/>
      <!-- Metameric Rings -->
      <line x1="-100" y1="-20" x2="-100" y2="20" stroke="#FFF" stroke-width="1.5" opacity="0.6"/>
      <line x1="-80" y1="-20" x2="-80" y2="20" stroke="#FFF" stroke-width="1.5" opacity="0.6"/>
      <line x1="-60" y1="-20" x2="-60" y2="20" stroke="#FFF" stroke-width="1.5" opacity="0.6"/>

      <!-- Clitellum Collar (Seg 14-16) -->
      <rect x="-30" y="-24" width="60" height="48" rx="6" fill="url(#goldGrad)" stroke="#FFF" stroke-width="1"/>
      <text x="0" y="5" font-family="sans-serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Clitellum</text>

      <line x1="40" y1="-20" x2="40" y2="20" stroke="#FFF" stroke-width="1.5" opacity="0.6"/>
      <line x1="60" y1="-20" x2="60" y2="20" stroke="#FFF" stroke-width="1.5" opacity="0.6"/>
      <line x1="80" y1="-20" x2="80" y2="20" stroke="#FFF" stroke-width="1.5" opacity="0.6"/>
      <line x1="100" y1="-20" x2="100" y2="20" stroke="#FFF" stroke-width="1.5" opacity="0.6"/>

      <text x="-120" y="-30" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold">Anterior</text>
      <text x="100" y="-30" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold">Posterior</text>
    </g>

    <rect x="20" y="280" width="320" height="45" rx="6" fill="rgba(255,61,0,0.1)" stroke="#FF3D00" stroke-width="1"/>
    <text x="180" y="300" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">True Metameric Segmentation</text>
    <text x="180" y="316" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Internal &amp; External Ring Segments + Nephridia</text>
  </g>
</svg>`;

// ==========================================
// 11. ARTHROPODA BODY PLAN SVG
// ==========================================
const arthropodaBodyPlanSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 450" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="840" height="450" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="420" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Arthropoda Architecture: Tagmatization &amp; Jointed Appendages</text>

  <g transform="translate(45, 65)" filter="url(#shadow)">
    <rect width="750" height="350" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>

    <!-- Prawn / Insect 3D Diagram -->
    <g transform="translate(100, 130)">
      <!-- Head Tagma -->
      <path d="M 0 0 Q 30 -40 70 -20 Q 80 0 70 20 Q 30 40 0 0 Z" fill="url(#orangeGrad)"/>
      <circle cx="50" cy="-15" r="7" fill="#00E5FF"/>
      <text x="50" y="-30" font-family="sans-serif" font-size="10" fill="#00E5FF" font-weight="bold">Compound Eye</text>
      <!-- Antennae -->
      <path d="M 65 -20 C 100 -50 140 -60 170 -70" stroke="#FFD700" stroke-width="2.5" fill="none"/>
      <text x="120" y="-60" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold">Antenna</text>
      <text x="25" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FF3D00">1. HEAD</text>

      <!-- Thorax Tagma -->
      <rect x="70" y="-30" width="140" height="60" rx="8" fill="url(#goldGrad)"/>
      <text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFD700" text-anchor="middle">2. THORAX</text>

      <!-- Jointed Legs extending downwards -->
      <g stroke="#FFD700" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 90 30 L 80 60 L 60 85 M 120 30 L 110 65 L 90 90 M 150 30 L 140 65 L 120 90 M 180 30 L 170 65 L 150 90"/>
      </g>
      <text x="110" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFD700">Jointed Appendages (Legs)</text>

      <!-- Abdomen Tagma -->
      <path d="M 210 -30 L 390 -20 Q 430 0 390 20 L 210 30 Z" fill="url(#cyanGrad)"/>
      <!-- Abdominal segments -->
      <line x1="250" y1="-28" x2="250" y2="28" stroke="#FFF" stroke-width="1.5"/>
      <line x1="290" y1="-25" x2="290" y2="25" stroke="#FFF" stroke-width="1.5"/>
      <line x1="330" y1="-23" x2="330" y2="23" stroke="#FFF" stroke-width="1.5"/>
      <line x1="370" y1="-21" x2="370" y2="21" stroke="#FFF" stroke-width="1.5"/>
      <text x="300" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#00E5FF" text-anchor="middle">3. ABDOMEN</text>
    </g>

    <!-- Bottom Feature Cards -->
    <g transform="translate(25, 235)">
      <rect width="345" height="90" rx="8" fill="rgba(255,61,0,0.12)" stroke="#FF3D00" stroke-width="1"/>
      <text x="172" y="25" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#FF3D00" text-anchor="middle">Chitinous Exoskeleton</text>
      <text x="172" y="48" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Tough cuticle exoskeleton shed during Ecdysis / Moulting</text>
      <text x="172" y="68" font-family="sans-serif" font-size="11" fill="#AAA" text-anchor="middle">Open Circulatory System with Hemolymph</text>

      <rect x="365" y="0" width="345" height="90" rx="8" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1"/>
      <text x="537" y="25" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#00E5FF" text-anchor="middle">Excretion via Malpighian Tubules</text>
      <text x="537" y="48" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Yellow blind tubules removing uric acid wastes</text>
      <text x="537" y="68" font-family="sans-serif" font-size="11" fill="#AAA" text-anchor="middle">Largest Phylum (Over 2/3rd of species on Earth!)</text>
    </g>
  </g>
</svg>`;

// ==========================================
// 12. ECHINODERMATA ASTERIAS SVG
// ==========================================
const echinodermataAsteriasSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 460" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="850" height="460" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="425" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Echinodermata Anatomy: Asterias (Starfish) &amp; Water Vascular System</text>

  <!-- Left: Aboral & Oral Starfish -->
  <g transform="translate(40, 70)" filter="url(#shadow)">
    <rect width="360" height="355" rx="14" fill="#140A1D" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="180" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E5FF" text-anchor="middle">1. Starfish Structure (5 Arms)</text>

    <!-- Starfish 5-point star 3D -->
    <g transform="translate(180, 160)">
      <!-- Star Arms -->
      <path d="M 0 -75 L 18 -25 L 70 -20 L 30 15 L 45 65 L 0 32 L -45 65 L -30 15 L -70 -20 L -18 -25 Z" fill="url(#orangeGrad)" stroke="#FFD700" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="22" fill="#E64A19"/>

      <!-- Madreporite plate off center -->
      <circle cx="12" cy="-10" r="5" fill="#FFD700"/>
      <text x="35" y="-12" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold">Madreporite</text>

      <text x="0" y="4" font-family="sans-serif" font-size="10" fill="#FFF" font-weight="bold" text-anchor="middle">Central Disc</text>

      <!-- Spines bumps -->
      <circle cx="0" cy="-45" r="2" fill="#FFF"/><circle cx="35" cy="-10" r="2" fill="#FFF"/><circle cx="22" cy="35" r="2" fill="#FFF"/><circle cx="-22" cy="35" r="2" fill="#FFF"/><circle cx="-35" cy="-10" r="2" fill="#FFF"/>
    </g>

    <rect x="20" y="290" width="320" height="45" rx="6" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1"/>
    <text x="180" y="308" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">Adult Radial Symmetry (Pentamerous)</text>
    <text x="180" y="324" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Note: Larva exhibits Bilateral Symmetry!</text>
  </g>

  <!-- Right: Water Vascular System Circuit -->
  <g transform="translate(430, 70)" filter="url(#shadow)">
    <rect width="380" height="355" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="190" y="28" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FF3D00" text-anchor="middle">2. Water Vascular System (Ambulacral)</text>

    <!-- Hydraulic Circuit Flow -->
    <g transform="translate(190, 150)">
      <!-- Ring Canal -->
      <circle cx="0" cy="0" r="35" fill="none" stroke="#00E5FF" stroke-width="6"/>
      <text x="0" y="4" font-family="sans-serif" font-size="10" fill="#00E5FF" font-weight="bold" text-anchor="middle">Ring Canal</text>

      <!-- Madreporite & Stone Canal -->
      <circle cx="25" cy="-25" r="7" fill="#FFD700"/>
      <line x1="25" y1="-25" x2="15" y2="-15" stroke="#FFD700" stroke-width="3"/>
      <text x="45" y="-30" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold">Madreporite</text>

      <!-- 5 Radial Canals -->
      <line x1="0" y1="-35" x2="0" y2="-90" stroke="#00E5FF" stroke-width="4"/>
      <line x1="33" y1="-12" x2="85" y2="-30" stroke="#00E5FF" stroke-width="4"/>
      <line x1="20" y1="28" x2="55" y2="75" stroke="#00E5FF" stroke-width="4"/>
      <line x1="-20" y1="28" x2="-55" y2="75" stroke="#00E5FF" stroke-width="4"/>
      <line x1="-33" y1="-12" x2="-85" y2="-30" stroke="#00E5FF" stroke-width="4"/>

      <!-- Tube Feet (Podia) on top arm -->
      <circle cx="-12" cy="-60" r="4" fill="#00E676"/><circle cx="12" cy="-60" r="4" fill="#00E676"/>
      <circle cx="-12" cy="-80" r="4" fill="#00E676"/><circle cx="12" cy="-80" r="4" fill="#00E676"/>
      <text x="35" y="-70" font-family="sans-serif" font-size="11" fill="#00E676" font-weight="bold">Tube Feet (Podia)</text>
    </g>

    <rect x="20" y="290" width="340" height="45" rx="6" fill="rgba(255,61,0,0.1)" stroke="#FF3D00" stroke-width="1"/>
    <text x="190" y="308" font-family="sans-serif" font-size="11.5" fill="#FFF" font-weight="bold" text-anchor="middle">Hydraulic Tube Feet Functions:</text>
    <text x="190" y="324" font-family="sans-serif" font-size="11" fill="#DDD" text-anchor="middle">Locomotion, Food Capture &amp; Respiration</text>
  </g>
</svg>`;

// ==========================================
// 13. BIOSPHERE RESERVE SVG
// ==========================================
const biosphereReserveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 480" width="100%" height="100%">
  ${COMMON_DEFS}
  <rect width="860" height="480" rx="16" fill="url(#bgGrad)" stroke="#FF3D00" stroke-width="2.5"/>
  <text x="430" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FF3D00" text-anchor="middle">3D Biosphere Reserve Zonation Architecture (Core, Buffer &amp; Transition Zones)</text>

  <!-- Concentric Rings Graphic -->
  <g transform="translate(230, 250)" filter="url(#shadow)">
    <!-- 3. Outer Transition Zone Ring -->
    <circle cx="0" cy="0" r="180" fill="url(#cyanGrad)" opacity="0.3" stroke="#00E5FF" stroke-width="2.5"/>
    <text x="0" y="-155" font-family="sans-serif" font-size="12" fill="#00E5FF" font-weight="bold" text-anchor="middle">3. TRANSITION / MANIPULATION ZONE</text>
    <text x="0" y="-138" font-family="sans-serif" font-size="10.5" fill="#DDD" text-anchor="middle">(Human Settlements, Sustainable Agriculture &amp; Forestry)</text>

    <!-- 2. Middle Buffer Zone Ring -->
    <circle cx="0" cy="0" r="120" fill="url(#goldGrad)" opacity="0.35" stroke="#FFD700" stroke-width="2.5"/>
    <text x="0" y="-98" font-family="sans-serif" font-size="12" fill="#FFD700" font-weight="bold" text-anchor="middle">2. BUFFER ZONE</text>
    <text x="0" y="-82" font-family="sans-serif" font-size="10.5" fill="#DDD" text-anchor="middle">(Research, Environmental Education, Eco-Tourism)</text>

    <!-- 1. Inner Core Zone Disc -->
    <circle cx="0" cy="0" r="65" fill="url(#redGrad)" stroke="#FF1744" stroke-width="3" filter="url(#glow)"/>
    <text x="0" y="-12" font-family="sans-serif" font-size="13" fill="#FFF" font-weight="bold" text-anchor="middle">1. CORE ZONE</text>
    <text x="0" y="6" font-family="sans-serif" font-size="10" fill="#FFD700" font-weight="bold" text-anchor="middle">STRICTLY PROTECTED</text>
    <text x="0" y="22" font-family="sans-serif" font-size="9.5" fill="#FFF" text-anchor="middle">Zero Human Activity</text>
  </g>

  <!-- Right Side Card: J&K / Ladakh National Parks Reference -->
  <g transform="translate(460, 70)" filter="url(#shadow)">
    <rect width="360" height="375" rx="14" fill="#140A1D" stroke="#FF3D00" stroke-width="1.5"/>
    <text x="180" y="28" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FF3D00" text-anchor="middle">National Parks Reference (J&amp;K / Ladakh)</text>

    <!-- Park 1 -->
    <g transform="translate(15, 45)">
      <rect width="330" height="55" rx="6" fill="rgba(255,61,0,0.12)" stroke="#FF3D00" stroke-width="1"/>
      <text x="12" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FF3D00">1. Dachigam National Park (Srinagar)</text>
      <text x="12" y="40" font-family="sans-serif" font-size="11" fill="#FFF">Exclusive Refuge for <tspan fill="#FFD700" font-weight="bold">Hangul (Kashmir Stag)</tspan></text>
    </g>

    <!-- Park 2 -->
    <g transform="translate(15, 110)">
      <rect width="330" height="55" rx="6" fill="rgba(255,215,0,0.12)" stroke="#FFD700" stroke-width="1"/>
      <text x="12" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFD700">2. Kishtwar High Altitude NP</text>
      <text x="12" y="40" font-family="sans-serif" font-size="11" fill="#FFF">Protects <tspan fill="#69F0AE">Himalayan Brown Bear &amp; Musk Deer</tspan></text>
    </g>

    <!-- Park 3 -->
    <g transform="translate(15, 175)">
      <rect width="330" height="55" rx="6" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1"/>
      <text x="12" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#00E5FF">3. Salim Ali NP (City Forest, Srinagar)</text>
      <text x="12" y="40" font-family="sans-serif" font-size="11" fill="#FFF">Named after Birdman; Wetland Avian Habitat</text>
    </g>

    <!-- Park 4 -->
    <g transform="translate(15, 240)">
      <rect width="330" height="55" rx="6" fill="rgba(224,64,251,0.12)" stroke="#E040FB" stroke-width="1"/>
      <text x="12" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#E040FB">4. Kazinag National Park (Baramulla)</text>
      <text x="12" y="40" font-family="sans-serif" font-size="11" fill="#FFF">Flagship: <tspan fill="#E040FB" font-weight="bold">Markhor (World's Largest Wild Goat)</tspan></text>
    </g>

    <!-- Park 5 -->
    <g transform="translate(15, 305)">
      <rect width="330" height="55" rx="6" fill="rgba(0,230,118,0.12)" stroke="#00E676" stroke-width="1"/>
      <text x="12" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#00E676">5. Hemis High Altitude NP (Ladakh)</text>
      <text x="12" y="40" font-family="sans-serif" font-size="11" fill="#FFF"><tspan fill="#00E676" font-weight="bold">Largest NP in India (4,400 sq km)</tspan> • Snow Leopard</text>
    </g>
  </g>
</svg>`;

// Export all as base64 map
const svgs = {
  coelomTypesSvg: svgToBase64(coelomTypesSvg),
  germLayersSvg: svgToBase64(germLayersSvg),
  bodySymmetrySvg: svgToBase64(bodySymmetrySvg),
  chordateCharacteristicsSvg: svgToBase64(chordateCharacteristicsSvg),
  cnidariaFormsSvg: svgToBase64(cnidariaFormsSvg),
  hemichordataSvg: svgToBase64(hemichordataSvg),
  syconPoriferaSvg: svgToBase64(syconPoriferaSvg),
  taeniaPlatyhelminthesSvg: svgToBase64(taeniaPlatyhelminthesSvg),
  ascarisAschelminthesSvg: svgToBase64(ascarisAschelminthesSvg),
  annelidaNereisEarthwormSvg: svgToBase64(annelidaNereisEarthwormSvg),
  arthropodaBodyPlanSvg: svgToBase64(arthropodaBodyPlanSvg),
  echinodermataAsteriasSvg: svgToBase64(echinodermataAsteriasSvg),
  biosphereReserveSvg: svgToBase64(biosphereReserveSvg)
};

console.log("All 13 SVGs generated successfully!");
fs.writeFileSync(path.join(__dirname, 'svg_b64_map.json'), JSON.stringify(svgs, null, 2));
