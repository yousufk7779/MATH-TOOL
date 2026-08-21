const fs = require('fs');
const path = require('path');

// Helper to convert SVG text to Base64 data URL
function svgToBase64(svgString) {
  const cleanSvg = svgString.trim().replace(/\s+/g, ' ');
  const b64 = Buffer.from(cleanSvg).toString('base64');
  return `data:image/svg+xml;base64,${b64}`;
}

// 1. Bacterial Cell SVG
const svgProkaryote = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <defs>
    <linearGradient id="capsuleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF007F" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#C2185B" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <title>Prokaryotic Cell Structure (Bacterium)</title>
  
  <!-- Outer Capsule -->
  <rect x="120" y="80" width="480" height="240" rx="120" fill="url(#capsuleGrad)" stroke="#FF007F" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="360" y="70" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Glycocalyx / Capsule</text>

  <!-- Cell Wall -->
  <rect x="140" y="98" width="440" height="204" rx="102" fill="none" stroke="#00E676" stroke-width="3"/>
  <text x="360" y="93" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Peptidoglycan Cell Wall</text>

  <!-- Plasma Membrane -->
  <rect x="156" y="114" width="408" height="172" rx="86" fill="#1E293B" stroke="#00E5FF" stroke-width="2.5"/>

  <!-- Mesosome -->
  <path d="M 240 114 Q 260 160 230 180 Q 210 160 220 114" fill="#0F172A" stroke="#00E5FF" stroke-width="2"/>
  <text x="210" y="205" fill="#00E5FF" font-family="sans-serif" font-size="11" font-weight="bold">Mesosome</text>

  <!-- Nucleoid DNA -->
  <path d="M 300 160 C 330 130 380 230 420 170 C 450 140 400 230 350 200 C 310 240 280 180 300 160 Z" fill="none" stroke="#FFD700" stroke-width="3.5" stroke-linejoin="round"/>
  <text x="370" y="185" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Nucleoid (Naked Circular DNA)</text>

  <!-- Plasmid -->
  <circle cx="480" cy="220" r="18" fill="none" stroke="#E040FB" stroke-width="3"/>
  <text x="480" y="255" fill="#E040FB" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Plasmid DNA</text>

  <!-- 70S Ribosomes -->
  <circle cx="280" cy="230" r="4" fill="#FFD700"/><circle cx="310" cy="245" r="4" fill="#FFD700"/><circle cx="440" cy="240" r="4" fill="#FFD700"/>
  <circle cx="460" cy="150" r="4" fill="#FFD700"/><circle cx="200" cy="220" r="4" fill="#FFD700"/>
  <text x="280" y="260" fill="#FFD700" font-family="sans-serif" font-size="11">70S Ribosomes</text>

  <!-- Flagellum -->
  <path d="M 120 200 C 70 170 50 230 10 200" fill="none" stroke="#FF3D00" stroke-width="4" stroke-linecap="round"/>
  <text x="50" y="170" fill="#FF3D00" font-family="sans-serif" font-size="12" font-weight="bold">Flagellum</text>

  <!-- Pili / Fimbriae -->
  <line x1="250" y1="80" x2="245" y2="45" stroke="#FF007F" stroke-width="2"/>
  <line x1="450" y1="80" x2="455" y2="45" stroke="#FF007F" stroke-width="2"/>
  <line x1="550" y1="120" x2="585" y2="100" stroke="#FF007F" stroke-width="2"/>
  <line x1="550" y1="280" x2="585" y2="300" stroke="#FF007F" stroke-width="2"/>
  <line x1="300" y1="320" x2="295" y2="355" stroke="#FF007F" stroke-width="2"/>
  <line x1="420" y1="320" x2="425" y2="355" stroke="#FF007F" stroke-width="2"/>
  <text x="590" y="95" fill="#FF007F" font-family="sans-serif" font-size="12" font-weight="bold">Pili / Fimbriae</text>

  <!-- Legend Header -->
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.1: Ultrastructure of a Typical Prokaryotic Bacterial Cell</text>
</svg>`;

// 2. Fluid Mosaic Model SVG
const svgFluidMosaic = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <title>Fluid Mosaic Model of Cell Membrane</title>
  
  <!-- Hydrophilic Heads Top -->
  ${Array.from({length: 18}).map((_, i) => `<circle cx="${60 + i*38}" cy="120" r="14" fill="#FF007F" stroke="#FF4081" stroke-width="1.5"/>`).join('')}
  
  <!-- Fatty Acid Tails Top -->
  ${Array.from({length: 18}).map((_, i) => `
    <line x1="${54 + i*38}" y1="134" x2="${54 + i*38}" y2="175" stroke="#FFD700" stroke-width="2"/>
    <line x1="${66 + i*38}" y1="134" x2="${66 + i*38}" y2="175" stroke="#FFD700" stroke-width="2"/>
  `).join('')}

  <!-- Fatty Acid Tails Bottom -->
  ${Array.from({length: 18}).map((_, i) => `
    <line x1="${54 + i*38}" y1="185" x2="${54 + i*38}" y2="226" stroke="#FFD700" stroke-width="2"/>
    <line x1="${66 + i*38}" y1="185" x2="${66 + i*38}" y2="226" stroke="#FFD700" stroke-width="2"/>
  `).join('')}

  <!-- Hydrophilic Heads Bottom -->
  ${Array.from({length: 18}).map((_, i) => `<circle cx="${60 + i*38}" cy="240" r="14" fill="#FF007F" stroke="#FF4081" stroke-width="1.5"/>`).join('')}

  <!-- Integral Transmembrane Protein -->
  <path d="M 230 95 C 210 120 210 240 230 265 L 285 265 C 305 240 305 120 285 95 Z" fill="#00E5FF" stroke="#00B0FF" stroke-width="2"/>
  <text x="257" y="185" fill="#0F172A" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 257 185)">Integral Protein</text>

  <!-- Channel Protein Pore -->
  <path d="M 460 95 L 490 95 C 500 130 500 230 490 265 L 460 265 C 470 230 470 130 460 95 Z" fill="#00E676" stroke="#00C853" stroke-width="2"/>
  <path d="M 510 95 L 540 95 C 530 130 530 230 540 265 L 510 265 C 520 230 520 130 510 95 Z" fill="#00E676" stroke="#00C853" stroke-width="2"/>
  <text x="500" y="185" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 500 185)">Channel Pore</text>

  <!-- Peripheral Protein -->
  <ellipse cx="140" cy="270" rx="35" ry="20" fill="#E040FB" stroke="#AA00FF" stroke-width="2"/>
  <text x="140" y="274" fill="#FFFFFF" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Peripheral Protein</text>

  <!-- Glycoprotein Chain -->
  <polyline points="257,95 240,60 260,40 250,15" fill="none" stroke="#E040FB" stroke-width="3"/>
  <circle cx="240" cy="60" r="5" fill="#FFD700"/>
  <circle cx="260" cy="40" r="5" fill="#FFD700"/>
  <circle cx="250" cy="15" r="5" fill="#FFD700"/>
  <text x="310" y="35" fill="#E040FB" font-family="sans-serif" font-size="12" font-weight="bold">Glycoprotein Chain</text>

  <!-- Cholesterol -->
  <rect x="375" y="150" width="12" height="40" rx="4" fill="#FFD700" stroke="#FFAB00" stroke-width="1.5"/>
  <text x="381" y="205" fill="#FFD700" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Cholesterol</text>

  <!-- Labels & Region Headers -->
  <text x="375" y="70" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Extracellular Fluid (Hydrophilic Polar Heads)</text>
  <text x="375" y="310" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Cytoplasm (Intracellular Side)</text>
  <text x="660" y="180" fill="#FFD700" font-family="sans-serif" font-size="11" font-weight="bold">Hydrophobic<br/>Fatty Acid<br/>Tail Core</text>

  <!-- Figure Title -->
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.2: Fluid Mosaic Model of Cell Membrane (Singer &amp; Nicolson, 1972)</text>
</svg>`;

// 3. Endomembrane System SVG
const svgEndomembrane = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <title>The Endomembrane System</title>
  
  <!-- Nuclear Envelope Portion -->
  <path d="M 40 40 Q 180 200 40 360" fill="none" stroke="#FF007F" stroke-width="6"/>
  <path d="M 20 50 Q 150 200 20 350" fill="none" stroke="#FF007F" stroke-width="4" stroke-dasharray="30,10"/>
  <text x="60" y="195" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold">Nuclear<br/>Envelope</text>

  <!-- Rough ER -->
  <path d="M 120 80 Q 280 60 220 120 Q 320 100 200 160 Q 300 140 180 200" fill="none" stroke="#E040FB" stroke-width="8" stroke-linecap="round"/>
  <!-- Ribosomes on RER -->
  <circle cx="150" cy="73" r="3" fill="#FFD700"/><circle cx="200" cy="68" r="3" fill="#FFD700"/><circle cx="240" cy="73" r="3" fill="#FFD700"/>
  <circle cx="170" cy="115" r="3" fill="#FFD700"/><circle cx="230" cy="108" r="3" fill="#FFD700"/><circle cx="270" cy="115" r="3" fill="#FFD700"/>
  <circle cx="180" cy="155" r="3" fill="#FFD700"/><circle cx="230" cy="148" r="3" fill="#FFD700"/>
  <text x="240" y="45" fill="#E040FB" font-family="sans-serif" font-size="13" font-weight="bold">Rough Endoplasmic Reticulum (RER)</text>

  <!-- Smooth ER -->
  <path d="M 150 250 Q 240 240 200 290 Q 260 280 180 330" fill="none" stroke="#00E676" stroke-width="7" stroke-linecap="round"/>
  <text x="210" y="345" fill="#00E676" font-family="sans-serif" font-size="13" font-weight="bold">Smooth ER (SER)</text>

  <!-- Transport Vesicles -->
  <circle cx="340" cy="140" r="12" fill="#334155" stroke="#00E5FF" stroke-width="2"/>
  <circle cx="360" cy="180" r="10" fill="#334155" stroke="#00E5FF" stroke-width="2"/>
  <text x="330" y="115" fill="#00E5FF" font-family="sans-serif" font-size="11" font-weight="bold">Transport Vesicles</text>

  <!-- Golgi Apparatus Cisternae -->
  <path d="M 430 100 C 470 120 470 240 430 260" fill="none" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>
  <path d="M 460 110 C 495 130 495 230 460 250" fill="none" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>
  <path d="M 490 120 C 520 140 520 220 490 240" fill="none" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>
  <path d="M 520 135 C 545 150 545 210 520 225" fill="none" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>

  <!-- Golgi Faces -->
  <text x="410" y="85" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Cis (Forming) Face</text>
  <text x="520" y="105" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Trans (Maturing) Face</text>

  <!-- Secretory Vesicles & Lysosomes -->
  <circle cx="580" cy="150" r="14" fill="#334155" stroke="#FF007F" stroke-width="2.5"/>
  <text x="605" y="155" fill="#FF007F" font-family="sans-serif" font-size="11" font-weight="bold">Secretory Vesicle</text>

  <circle cx="570" cy="220" r="16" fill="#1E293B" stroke="#00E676" stroke-width="2.5"/>
  <text x="595" y="225" fill="#00E676" font-family="sans-serif" font-size="11" font-weight="bold">Lysosome (Hydrolases)</text>

  <!-- Vacuole -->
  <ellipse cx="640" cy="300" rx="45" ry="30" fill="#1E293B" stroke="#00E5FF" stroke-width="2.5"/>
  <text x="640" y="304" fill="#00E5FF" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Vacuole (Tonoplast)</text>

  <!-- Flow Arrows -->
  <path d="M 280 130 L 320 135" fill="none" stroke="#E0E0E0" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M 380 160 L 420 165" fill="none" stroke="#E0E0E0" stroke-width="2"/>
  <path d="M 535 180 L 560 180" fill="none" stroke="#E0E0E0" stroke-width="2"/>

  <!-- Figure Title -->
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.3: Functional Coordination in the Endomembrane System (ER ➔ Golgi ➔ Vesicles/Lysosomes/Vacuole)</text>
</svg>`;

// 4. Mitochondrion SVG
const svgMitochondrion = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <title>Ultrastructure of Mitochondrion</title>
  
  <!-- Outer Membrane -->
  <ellipse cx="375" cy="200" rx="300" ry="140" fill="#1E293B" stroke="#FF007F" stroke-width="4"/>
  <text x="375" y="48" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Outer Membrane (Smooth &amp; Permeable)</text>

  <!-- Inner Membrane & Cristae -->
  <path d="M 120 200 
           C 120 110, 630 110, 630 200
           C 630 290, 120 290, 120 200 Z" 
        fill="none" stroke="#00E5FF" stroke-width="3"/>
        
  <!-- Cristae Foldings -->
  <path d="M 170 130 Q 230 210 170 270 
           M 250 115 Q 310 220 250 285
           M 330 110 Q 380 220 330 290
           M 410 110 Q 450 220 410 290
           M 490 115 Q 530 210 490 285
           M 560 130 Q 600 200 560 270" 
        fill="none" stroke="#00E5FF" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Intermembrane Space -->
  <text x="180" y="85" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Intermembrane Space</text>
  <line x1="220" y1="92" x2="250" y2="120" stroke="#FFD700" stroke-width="1.5"/>

  <!-- Matrix -->
  <text x="375" y="205" fill="#00E676" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Matrix (Site of Krebs Cycle)</text>

  <!-- F0-F1 Oxysomes / ATP Synthase Knobs -->
  <circle cx="345" cy="160" r="4" fill="#FFD700"/><line x1="345" y1="160" x2="345" y2="152" stroke="#FFD700" stroke-width="2"/>
  <circle cx="425" cy="160" r="4" fill="#FFD700"/><line x1="425" y1="160" x2="425" y2="152" stroke="#FFD700" stroke-width="2"/>
  <circle cx="345" cy="240" r="4" fill="#FFD700"/><line x1="345" y1="240" x2="345" y2="248" stroke="#FFD700" stroke-width="2"/>
  <text x="450" y="150" fill="#FFD700" font-family="sans-serif" font-size="11" font-weight="bold">F0-F1 ATP Synthase (Oxysome)</text>

  <!-- Circular mtDNA -->
  <circle cx="280" cy="230" r="14" fill="none" stroke="#E040FB" stroke-width="2.5"/>
  <text x="280" y="260" fill="#E040FB" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Circular mtDNA</text>

  <!-- 70S Ribosomes -->
  <circle cx="480" cy="220" r="3.5" fill="#FFD700"/><circle cx="500" cy="230" r="3.5" fill="#FFD700"/><circle cx="470" cy="240" r="3.5" fill="#FFD700"/>
  <text x="530" y="235" fill="#FFD700" font-family="sans-serif" font-size="11">70S Ribosomes</text>

  <!-- Crista Label -->
  <text x="590" y="325" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">Crista (Inner Fold)</text>
  <line x1="575" y1="310" x2="560" y2="260" stroke="#00E5FF" stroke-width="1.5"/>

  <!-- Figure Title -->
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.4: Ultrastructure of Mitochondrion ("Powerhouse of the Cell")</text>
</svg>`;

// 5. Chloroplast SVG
const svgChloroplast = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <title>Detailed Ultrastructure of Chloroplast</title>
  
  <!-- Outer Membrane -->
  <ellipse cx="375" cy="200" rx="300" ry="140" fill="#1E293B" stroke="#00E676" stroke-width="4"/>
  <text x="375" y="48" fill="#00E676" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Outer Membrane</text>

  <!-- Inner Membrane -->
  <ellipse cx="375" cy="200" rx="280" ry="125" fill="none" stroke="#00E676" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="375" y="70" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Inner Membrane</text>

  <!-- Stroma -->
  <text x="375" y="210" fill="#E0E0E0" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Stroma Fluid (Site of Dark Reaction / Calvin Cycle)</text>

  <!-- Granum Stack 1 -->
  <g transform="translate(180, 130)">
    <rect x="0" y="0" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="18" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="36" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="54" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="72" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <text x="35" y="-10" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Granum</text>
  </g>

  <!-- Granum Stack 2 -->
  <g transform="translate(500, 130)">
    <rect x="0" y="0" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="18" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="36" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="54" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="72" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <text x="35" y="-10" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Granum</text>
  </g>

  <!-- Stroma Lamella Bridge -->
  <line x1="250" y1="166" x2="500" y2="166" stroke="#00E676" stroke-width="5" stroke-linecap="round"/>
  <text x="375" y="155" fill="#00E676" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Stroma Lamella (Frets)</text>

  <!-- Thylakoid Label -->
  <text x="110" y="270" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Thylakoid Disc</text>
  <line x1="160" y1="265" x2="180" y2="210" stroke="#FFD700" stroke-width="1.5"/>

  <!-- Chloroplast DNA & Ribosomes -->
  <circle cx="340" cy="270" r="12" fill="none" stroke="#E040FB" stroke-width="2"/>
  <text x="340" y="298" fill="#E040FB" font-family="sans-serif" font-size="11" text-anchor="middle">cpDNA</text>

  <circle cx="420" cy="270" r="3.5" fill="#FFD700"/><circle cx="440" cy="275" r="3.5" fill="#FFD700"/>
  <text x="430" y="298" fill="#FFD700" font-family="sans-serif" font-size="11" text-anchor="middle">70S Ribosomes</text>

  <!-- Figure Title -->
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.5: Detailed Ultrastructure of Chloroplast (Grana, Thylakoids &amp; Stroma)</text>
</svg>`;

// 6. Cilia/Flagella 9+2 Axoneme SVG
const svgCiliaAxoneme = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="700" height="450" rx="12" fill="#0F172A"/>
  <title>Cilia and Flagella Axoneme Cross-Section (9+2 Arrangement)</title>

  <!-- Outer Plasma Membrane -->
  <circle cx="350" cy="210" r="180" fill="#1E293B" stroke="#FF007F" stroke-width="4"/>
  <text x="350" y="22" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Plasma Membrane</text>

  <!-- Central Sheath -->
  <circle cx="350" cy="210" r="45" fill="none" stroke="#FFD700" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="350" y="152" fill="#FFD700" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Central Sheath</text>

  <!-- Central Singlet Microtubules (1+1 = 2) -->
  <circle cx="335" cy="210" r="12" fill="#00E5FF" stroke="#00B0FF" stroke-width="2"/>
  <circle cx="365" cy="210" r="12" fill="#00E5FF" stroke="#00B0FF" stroke-width="2"/>
  <line x1="347" y1="210" x2="353" y2="210" stroke="#E0E0E0" stroke-width="3"/>
  <text x="350" y="240" fill="#00E5FF" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">2 Central Singlets</text>

  <!-- 9 Peripheral Microtubule Doublets -->
  ${Array.from({length: 9}).map((_, i) => {
    const angle = (i * 40 - 90) * Math.PI / 180;
    const cx = 350 + 130 * Math.cos(angle);
    const cy = 210 + 130 * Math.sin(angle);
    const rAngle = i * 40 - 90;
    return `
      <!-- Doublet (A & B tubule) -->
      <g transform="translate(${cx}, ${cy}) rotate(${rAngle})">
        <circle cx="-7" cy="0" r="10" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
        <circle cx="7" cy="0" r="10" fill="#A7F3D0" stroke="#00C853" stroke-width="1.5"/>
        <!-- Dynein Arms -->
        <path d="M -12 -8 C -18 -12 -18 12 -12 8" fill="none" stroke="#FF3D00" stroke-width="2"/>
      </g>
      <!-- Radial Spoke -->
      <line x1="${cx}" y1="${cy}" x2="${350 + 45 * Math.cos(angle)}" y2="${210 + 45 * Math.sin(angle)}" stroke="#E040FB" stroke-width="2"/>
    `;
  }).join('')}

  <!-- Labels -->
  <text x="590" y="110" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold">9 Peripheral<br/>Doublets (A+B)</text>
  <text x="590" y="220" fill="#FF3D00" font-family="sans-serif" font-size="12" font-weight="bold">Dynein Arms<br/>(ATPase Activity)</text>
  <text x="590" y="310" fill="#E040FB" font-family="sans-serif" font-size="12" font-weight="bold">Radial Spokes</text>

  <!-- Figure Title -->
  <text x="350" y="425" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.6: Cilia &amp; Flagella Axoneme Cross-Section Showing 9+2 Microtubule Array</text>
</svg>`;

// 7. Centriole 9+0 Cartwheel SVG
const svgCentriole = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="700" height="450" rx="12" fill="#0F172A"/>
  <title>Centriole Cartwheel Structure (9+0 Array)</title>

  <!-- Central Hub -->
  <circle cx="350" cy="210" r="28" fill="#FFD700" stroke="#FFAB00" stroke-width="2.5"/>
  <text x="350" y="214" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Central Hub</text>

  <!-- 9 Peripheral Microtubule Triplets -->
  ${Array.from({length: 9}).map((_, i) => {
    const angle = (i * 40 - 90) * Math.PI / 180;
    const cx = 350 + 140 * Math.cos(angle);
    const cy = 210 + 140 * Math.sin(angle);
    const rAngle = i * 40 - 60;
    return `
      <!-- Triplet (A, B, C tubules) -->
      <g transform="translate(${cx}, ${cy}) rotate(${rAngle})">
        <circle cx="-12" cy="0" r="8" fill="#FF007F" stroke="#C2185B" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="8" fill="#00E5FF" stroke="#00B0FF" stroke-width="1.5"/>
        <circle cx="12" cy="0" r="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
      </g>
      <!-- Radial Spoke from Hub -->
      <line x1="${350 + 28 * Math.cos(angle)}" y1="${210 + 28 * Math.sin(angle)}" x2="${cx}" y2="${cy}" stroke="#FFD700" stroke-width="2.5"/>
    `;
  }).join('')}

  <!-- Labels -->
  <text x="580" y="130" fill="#FF007F" font-family="sans-serif" font-size="12" font-weight="bold">9 Peripheral Triplets<br/>(A, B, C Tubules)</text>
  <text x="580" y="230" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Radial Spokes<br/>(Pinwheel Structure)</text>
  <text x="580" y="320" fill="#00E5FF" font-family="sans-serif" font-size="12" font-weight="bold">9+0 Microtubule<br/>Pattern (No Central Pair)</text>

  <!-- Figure Title -->
  <text x="350" y="425" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.7: Centriole Cross-Section (9+0 Microtubule Triplet Cartwheel Pattern)</text>
</svg>`;

// 8. Nucleus & Chromatin SVG
const svgNucleus = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <title>Nucleus and Chromatin Organisation</title>

  <!-- Double Nuclear Envelope -->
  <circle cx="375" cy="200" r="160" fill="#1E293B" stroke="#FF007F" stroke-width="5" stroke-dasharray="40,12"/>
  <text x="375" y="25" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Double Nuclear Envelope with Nuclear Pores</text>

  <!-- Nucleolus -->
  <circle cx="320" cy="180" r="45" fill="#E040FB" stroke="#AA00FF" stroke-width="2.5"/>
  <text x="320" y="184" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Nucleolus<br/>(rRNA Synthesis)</text>

  <!-- Heterochromatin (Dense Peripheral) -->
  <path d="M 240 120 C 260 90, 480 90, 500 120" fill="none" stroke="#FFD700" stroke-width="6"/>
  <path d="M 230 260 C 260 300, 480 300, 510 260" fill="none" stroke="#FFD700" stroke-width="6"/>
  <text x="515" y="105" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Heterochromatin (Dense / Inactive)</text>

  <!-- Euchromatin (Loosely Packed Interior) -->
  <path d="M 390 140 Q 440 180 400 240 Q 460 210 430 270" fill="none" stroke="#00E5FF" stroke-width="2.5"/>
  <text x="470" y="220" fill="#00E5FF" font-family="sans-serif" font-size="12" font-weight="bold">Euchromatin<br/>(Loosely Packed / Active)</text>

  <!-- Nucleosome Inset Box -->
  <rect x="50" y="260" width="180" height="120" rx="8" fill="#0F172A" stroke="#00E676" stroke-width="2"/>
  <circle cx="110" cy="320" r="24" fill="#00E676" stroke="#00C853" stroke-width="2"/>
  <text x="110" y="324" fill="#0F172A" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Histone<br/>Octamer</text>
  <path d="M 70 320 C 70 290 150 290 150 320 C 150 350 70 350 70 320" fill="none" stroke="#FF007F" stroke-width="3"/>
  <text x="140" y="370" fill="#00E676" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Nucleosome Unit</text>

  <!-- Figure Title -->
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.8: Nuclear Envelope, Nucleolus, Heterochromatin vs Euchromatin &amp; Nucleosome Unit</text>
</svg>`;

// 9. Cell Cycle SVG
const svgCellCycle = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 450" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="650" height="450" rx="12" fill="#0F172A"/>
  <title>Cell Cycle Phases (G1, S, G2, G0, M)</title>

  <!-- Donut Chart Circle -->
  <circle cx="325" cy="210" r="140" fill="none" stroke="#334155" stroke-width="35"/>

  <!-- G1 Phase Arc -->
  <path d="M 325 70 A 140 140 0 0 1 465 210" fill="none" stroke="#00E676" stroke-width="35"/>
  <text x="430" y="130" fill="#00E676" font-family="sans-serif" font-size="14" font-weight="bold">G1 Phase (Growth)</text>

  <!-- S Phase Arc -->
  <path d="M 465 210 A 140 140 0 0 1 325 350" fill="none" stroke="#00E5FF" stroke-width="35"/>
  <text x="420" y="300" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">S Phase (DNA Replication)</text>

  <!-- G2 Phase Arc -->
  <path d="M 325 350 A 140 140 0 0 1 185 210" fill="none" stroke="#E040FB" stroke-width="35"/>
  <text x="120" y="300" fill="#E040FB" font-family="sans-serif" font-size="14" font-weight="bold">G2 Phase (Preparation)</text>

  <!-- M Phase Arc -->
  <path d="M 185 210 A 140 140 0 0 1 325 70" fill="none" stroke="#FF007F" stroke-width="35"/>
  <text x="180" y="120" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">M Phase (Mitosis)</text>

  <!-- G0 Phase Branch -->
  <path d="M 465 210 Q 550 210 580 160" fill="none" stroke="#FFD700" stroke-width="4" stroke-dasharray="6,4"/>
  <circle cx="580" cy="160" r="18" fill="#FFD700" stroke="#FFAB00" stroke-width="2"/>
  <text x="580" y="164" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">G0</text>
  <text x="580" y="125" fill="#FFD700" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Quiescent Stage</text>

  <!-- Center Text -->
  <text x="325" y="200" fill="#E0E0E0" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">INTERPHASE</text>
  <text x="325" y="225" fill="#94A3B8" font-family="sans-serif" font-size="13" text-anchor="middle">(~95% Duration)</text>

  <!-- Figure Title -->
  <text x="325" y="425" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.9: Diagrammatic View of Cell Cycle (Interphase &amp; M-Phase with G0 Arrest)</text>
</svg>`;

// 10. Mitosis Stages SVG
const svgMitosis = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="800" height="420" rx="12" fill="#0F172A"/>
  <title>Stages of Mitosis (Equational Division)</title>

  <!-- Prophase -->
  <g transform="translate(30, 70)">
    <circle cx="65" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 50 80 Q 70 120 50 130 M 80 70 Q 60 110 80 120" fill="none" stroke="#FFD700" stroke-width="3"/>
    <text x="65" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">1. Prophase</text>
    <text x="65" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Condensation</text>
  </g>

  <!-- Metaphase -->
  <g transform="translate(180, 70)">
    <circle cx="65" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <line x1="65" y1="45" x2="65" y2="155" stroke="#00E5FF" stroke-width="2" stroke-dasharray="4,2"/>
    <line x1="50" y1="100" x2="80" y2="100" stroke="#FFD700" stroke-width="5"/>
    <text x="65" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">2. Metaphase</text>
    <text x="65" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Equatorial Plate</text>
  </g>

  <!-- Anaphase -->
  <g transform="translate(330, 70)">
    <circle cx="65" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 35 90 L 45 100 L 35 110 M 95 90 L 85 100 L 95 110" fill="none" stroke="#FFD700" stroke-width="3"/>
    <text x="65" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3. Anaphase</text>
    <text x="65" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Chromatid Segregation</text>
  </g>

  <!-- Telophase -->
  <g transform="translate(480, 70)">
    <ellipse cx="65" cy="100" rx="60" ry="45" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <circle cx="35" cy="100" r="18" fill="none" stroke="#FF007F" stroke-width="1.5" stroke-dasharray="4,2"/>
    <circle cx="95" cy="100" r="18" fill="none" stroke="#FF007F" stroke-width="1.5" stroke-dasharray="4,2"/>
    <text x="65" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">4. Telophase</text>
    <text x="65" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Re-formation</text>
  </g>

  <!-- Cytokinesis -->
  <g transform="translate(630, 70)">
    <circle cx="35" cy="100" r="30" fill="#1E293B" stroke="#00E676" stroke-width="2"/>
    <circle cx="95" cy="100" r="30" fill="#1E293B" stroke="#00E676" stroke-width="2"/>
    <text x="65" y="185" fill="#00E676" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">5. Cytokinesis</text>
    <text x="65" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">2 Daughter Cells (2n)</text>
  </g>

  <!-- Flow Arrows -->
  <line x1="155" y1="170" x2="175" y2="170" stroke="#E0E0E0" stroke-width="2"/>
  <line x1="305" y1="170" x2="325" y2="170" stroke="#E0E0E0" stroke-width="2"/>
  <line x1="455" y1="170" x2="475" y2="170" stroke="#E0E0E0" stroke-width="2"/>
  <line x1="605" y1="170" x2="625" y2="170" stroke="#E0E0E0" stroke-width="2"/>

  <!-- Figure Title -->
  <text x="400" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.10: Stages of Mitosis (Prophase ➔ Metaphase ➔ Anaphase ➔ Telophase ➔ Cytokinesis)</text>
</svg>`;

// 11. Meiosis Prophase I Sub-stages SVG
const svgMeiosisProphase1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="850" height="420" rx="12" fill="#0F172A"/>
  <title>Sub-stages of Meiosis I Prophase I</title>

  <!-- Leptotene -->
  <g transform="translate(20, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 40 80 Q 70 140 100 80 M 50 120 Q 70 70 90 120" fill="none" stroke="#FFD700" stroke-width="2"/>
    <text x="70" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">1. Leptotene</text>
    <text x="70" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Thin Threads / Bouquet</text>
  </g>

  <!-- Zygotene -->
  <g transform="translate(185, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <line x1="55" y1="60" x2="55" y2="140" stroke="#FFD700" stroke-width="3"/>
    <line x1="62" y1="60" x2="62" y2="140" stroke="#00E5FF" stroke-width="3"/>
    <line x1="55" y1="100" x2="62" y2="100" stroke="#00E676" stroke-width="2"/>
    <text x="70" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">2. Zygotene</text>
    <text x="70" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Synapsis / Bivalents</text>
  </g>

  <!-- Pachytene -->
  <g transform="translate(350, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 55 60 Q 70 100 55 140 M 65 60 Q 50 100 65 140" fill="none" stroke="#FFD700" stroke-width="3"/>
    <circle cx="60" cy="100" r="5" fill="#FF007F"/>
    <text x="70" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3. Pachytene</text>
    <text x="70" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Crossing Over (Recombinase)</text>
  </g>

  <!-- Diplotene -->
  <g transform="translate(515, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 45 70 L 60 100 L 45 130 M 85 70 L 60 100 L 85 130" fill="none" stroke="#FFD700" stroke-width="3"/>
    <text x="70" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">4. Diplotene</text>
    <text x="70" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Chiasmata (X-shape)</text>
  </g>

  <!-- Diakinesis -->
  <g transform="translate(680, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#00E676" stroke-width="2" stroke-dasharray="6,4"/>
    <line x1="45" y1="70" x2="45" y2="130" stroke="#FFD700" stroke-width="3"/>
    <line x1="95" y1="70" x2="95" y2="130" stroke="#00E5FF" stroke-width="3"/>
    <text x="70" y="185" fill="#00E676" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">5. Diakinesis</text>
    <text x="70" y="202" fill="#94A3B8" font-family="sans-serif" font-size="10" text-anchor="middle">Terminalisation</text>
  </g>

  <!-- Figure Title -->
  <text x="425" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.11: Sequential Sub-stages of Prophase I in Meiosis I (Leptotene ➔ Zygotene ➔ Pachytene ➔ Diplotene ➔ Diakinesis)</text>
</svg>`;

// Convert SVGs to Base64
const imgProkaryote = svgToBase64(svgProkaryote);
const imgFluidMosaic = svgToBase64(svgFluidMosaic);
const imgEndomembrane = svgToBase64(svgEndomembrane);
const imgMitochondrion = svgToBase64(svgMitochondrion);
const imgChloroplast = svgToBase64(svgChloroplast);
const imgCiliaAxoneme = svgToBase64(svgCiliaAxoneme);
const imgCentriole = svgToBase64(svgCentriole);
const imgNucleus = svgToBase64(svgNucleus);
const imgCellCycle = svgToBase64(svgCellCycle);
const imgMitosis = svgToBase64(svgMitosis);
const imgMeiosisProphase1 = svgToBase64(svgMeiosisProphase1);

console.log("SVGs successfully converted to Base64!");
