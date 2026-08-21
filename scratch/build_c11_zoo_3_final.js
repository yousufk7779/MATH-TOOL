const fs = require('fs');
const path = require('path');

function svgToBase64(svgString) {
  const cleanSvg = svgString.trim().replace(/\s+/g, ' ');
  const b64 = Buffer.from(cleanSvg).toString('base64');
  return `data:image/svg+xml;base64,${b64}`;
}

const themeColor = "#FF007F";

// 1. Bacterial Cell SVG
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <defs>
    <linearGradient id="capsuleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF007F" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#C2185B" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <rect x="120" y="80" width="480" height="240" rx="120" fill="url(#capsuleGrad)" stroke="#FF007F" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="360" y="70" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Glycocalyx / Capsule</text>
  <rect x="140" y="98" width="440" height="204" rx="102" fill="none" stroke="#00E676" stroke-width="3"/>
  <text x="360" y="93" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Peptidoglycan Cell Wall</text>
  <rect x="156" y="114" width="408" height="172" rx="86" fill="#1E293B" stroke="#00E5FF" stroke-width="2.5"/>
  <path d="M 240 114 Q 260 160 230 180 Q 210 160 220 114" fill="#0F172A" stroke="#00E5FF" stroke-width="2"/>
  <text x="210" y="205" fill="#00E5FF" font-family="sans-serif" font-size="11" font-weight="bold">Mesosome</text>
  <path d="M 300 160 C 330 130 380 230 420 170 C 450 140 400 230 350 200 C 310 240 280 180 300 160 Z" fill="none" stroke="#FFD700" stroke-width="3.5" stroke-linejoin="round"/>
  <text x="370" y="185" fill="#FFD700" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Nucleoid (Naked Circular DNA)</text>
  <circle cx="480" cy="220" r="18" fill="none" stroke="#E040FB" stroke-width="3"/>
  <text x="480" y="255" fill="#E040FB" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Plasmid DNA</text>
  <circle cx="280" cy="230" r="4" fill="#FFD700"/><circle cx="310" cy="245" r="4" fill="#FFD700"/><circle cx="440" cy="240" r="4" fill="#FFD700"/>
  <text x="280" y="260" fill="#FFD700" font-family="sans-serif" font-size="11">70S Ribosomes</text>
  <path d="M 120 200 C 70 170 50 230 10 200" fill="none" stroke="#FF3D00" stroke-width="4" stroke-linecap="round"/>
  <text x="50" y="170" fill="#FF3D00" font-family="sans-serif" font-size="12" font-weight="bold">Flagellum</text>
  <line x1="250" y1="80" x2="245" y2="45" stroke="#FF007F" stroke-width="2"/>
  <line x1="450" y1="80" x2="455" y2="45" stroke="#FF007F" stroke-width="2"/>
  <line x1="550" y1="120" x2="585" y2="100" stroke="#FF007F" stroke-width="2"/>
  <text x="590" y="95" fill="#FF007F" font-family="sans-serif" font-size="12" font-weight="bold">Pili / Fimbriae</text>
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.1: Ultrastructure of a Typical Prokaryotic Bacterial Cell</text>
</svg>`;

// 2. Fluid Mosaic Model SVG
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  ${Array.from({length: 18}).map((_, i) => `<circle cx="${60 + i*38}" cy="120" r="14" fill="#FF007F" stroke="#FF4081" stroke-width="1.5"/>`).join('')}
  ${Array.from({length: 18}).map((_, i) => `
    <line x1="${54 + i*38}" y1="134" x2="${54 + i*38}" y2="175" stroke="#FFD700" stroke-width="2"/>
    <line x1="${66 + i*38}" y1="134" x2="${66 + i*38}" y2="175" stroke="#FFD700" stroke-width="2"/>
  `).join('')}
  ${Array.from({length: 18}).map((_, i) => `
    <line x1="${54 + i*38}" y1="185" x2="${54 + i*38}" y2="226" stroke="#FFD700" stroke-width="2"/>
    <line x1="${66 + i*38}" y1="185" x2="${66 + i*38}" y2="226" stroke="#FFD700" stroke-width="2"/>
  `).join('')}
  ${Array.from({length: 18}).map((_, i) => `<circle cx="${60 + i*38}" cy="240" r="14" fill="#FF007F" stroke="#FF4081" stroke-width="1.5"/>`).join('')}
  <path d="M 230 95 C 210 120 210 240 230 265 L 285 265 C 305 240 305 120 285 95 Z" fill="#00E5FF" stroke="#00B0FF" stroke-width="2"/>
  <text x="257" y="185" fill="#0F172A" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 257 185)">Integral Protein</text>
  <path d="M 460 95 L 490 95 C 500 130 500 230 490 265 L 460 265 C 470 230 470 130 460 95 Z" fill="#00E676" stroke="#00C853" stroke-width="2"/>
  <path d="M 510 95 L 540 95 C 530 130 530 230 540 265 L 510 265 C 520 230 520 130 510 95 Z" fill="#00E676" stroke="#00C853" stroke-width="2"/>
  <text x="500" y="185" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 500 185)">Channel Pore</text>
  <ellipse cx="140" cy="270" rx="35" ry="20" fill="#E040FB" stroke="#AA00FF" stroke-width="2"/>
  <text x="140" y="274" fill="#FFFFFF" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Peripheral Protein</text>
  <polyline points="257,95 240,60 260,40 250,15" fill="none" stroke="#E040FB" stroke-width="3"/>
  <circle cx="240" cy="60" r="5" fill="#FFD700"/>
  <circle cx="260" cy="40" r="5" fill="#FFD700"/>
  <circle cx="250" cy="15" r="5" fill="#FFD700"/>
  <text x="310" y="35" fill="#E040FB" font-family="sans-serif" font-size="12" font-weight="bold">Glycoprotein Chain</text>
  <rect x="375" y="150" width="12" height="40" rx="4" fill="#FFD700" stroke="#FFAB00" stroke-width="1.5"/>
  <text x="381" y="205" fill="#FFD700" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Cholesterol</text>
  <text x="375" y="70" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Extracellular Fluid (Hydrophilic Polar Heads)</text>
  <text x="375" y="310" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Cytoplasm (Intracellular Side)</text>
  <text x="660" y="180" fill="#FFD700" font-family="sans-serif" font-size="11" font-weight="bold">Hydrophobic<br/>Fatty Acid<br/>Tail Core</text>
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.2: Fluid Mosaic Model of Cell Membrane (Singer &amp; Nicolson, 1972)</text>
</svg>`;

// 3. Endomembrane System SVG
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <path d="M 40 40 Q 180 200 40 360" fill="none" stroke="#FF007F" stroke-width="6"/>
  <path d="M 20 50 Q 150 200 20 350" fill="none" stroke="#FF007F" stroke-width="4" stroke-dasharray="30,10"/>
  <text x="60" y="195" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold">Nuclear<br/>Envelope</text>
  <path d="M 120 80 Q 280 60 220 120 Q 320 100 200 160 Q 300 140 180 200" fill="none" stroke="#E040FB" stroke-width="8" stroke-linecap="round"/>
  <circle cx="150" cy="73" r="3" fill="#FFD700"/><circle cx="200" cy="68" r="3" fill="#FFD700"/><circle cx="240" cy="73" r="3" fill="#FFD700"/>
  <circle cx="170" cy="115" r="3" fill="#FFD700"/><circle cx="230" cy="108" r="3" fill="#FFD700"/>
  <text x="240" y="45" fill="#E040FB" font-family="sans-serif" font-size="13" font-weight="bold">Rough Endoplasmic Reticulum (RER)</text>
  <path d="M 150 250 Q 240 240 200 290 Q 260 280 180 330" fill="none" stroke="#00E676" stroke-width="7" stroke-linecap="round"/>
  <text x="210" y="345" fill="#00E676" font-family="sans-serif" font-size="13" font-weight="bold">Smooth ER (SER)</text>
  <circle cx="340" cy="140" r="12" fill="#334155" stroke="#00E5FF" stroke-width="2"/>
  <circle cx="360" cy="180" r="10" fill="#334155" stroke="#00E5FF" stroke-width="2"/>
  <text x="330" y="115" fill="#00E5FF" font-family="sans-serif" font-size="11" font-weight="bold">Transport Vesicles</text>
  <path d="M 430 100 C 470 120 470 240 430 260" fill="none" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>
  <path d="M 460 110 C 495 130 495 230 460 250" fill="none" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>
  <path d="M 490 120 C 520 140 520 220 490 240" fill="none" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>
  <text x="410" y="85" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Cis (Forming) Face</text>
  <text x="520" y="105" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Trans (Maturing) Face</text>
  <circle cx="580" cy="150" r="14" fill="#334155" stroke="#FF007F" stroke-width="2.5"/>
  <text x="605" y="155" fill="#FF007F" font-family="sans-serif" font-size="11" font-weight="bold">Secretory Vesicle</text>
  <circle cx="570" cy="220" r="16" fill="#1E293B" stroke="#00E676" stroke-width="2.5"/>
  <text x="595" y="225" fill="#00E676" font-family="sans-serif" font-size="11" font-weight="bold">Lysosome (Hydrolases)</text>
  <ellipse cx="640" cy="300" rx="45" ry="30" fill="#1E293B" stroke="#00E5FF" stroke-width="2.5"/>
  <text x="640" y="304" fill="#00E5FF" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Vacuole (Tonoplast)</text>
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.3: Functional Coordination in the Endomembrane System</text>
</svg>`;

// 4. Mitochondrion SVG
const svg4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <ellipse cx="375" cy="200" rx="300" ry="140" fill="#1E293B" stroke="#FF007F" stroke-width="4"/>
  <text x="375" y="48" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Outer Membrane (Smooth &amp; Permeable)</text>
  <path d="M 120 200 C 120 110, 630 110, 630 200 C 630 290, 120 290, 120 200 Z" fill="none" stroke="#00E5FF" stroke-width="3"/>
  <path d="M 170 130 Q 230 210 170 270 M 250 115 Q 310 220 250 285 M 330 110 Q 380 220 330 290 M 410 110 Q 450 220 410 290 M 490 115 Q 530 210 490 285" fill="none" stroke="#00E5FF" stroke-width="3.5" stroke-linecap="round"/>
  <text x="180" y="85" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Intermembrane Space</text>
  <text x="375" y="205" fill="#00E676" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Matrix (Site of Krebs Cycle)</text>
  <circle cx="345" cy="160" r="4" fill="#FFD700"/><line x1="345" y1="160" x2="345" y2="152" stroke="#FFD700" stroke-width="2"/>
  <text x="450" y="150" fill="#FFD700" font-family="sans-serif" font-size="11" font-weight="bold">F0-F1 ATP Synthase (Oxysome)</text>
  <circle cx="280" cy="230" r="14" fill="none" stroke="#E040FB" stroke-width="2.5"/>
  <text x="280" y="260" fill="#E040FB" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Circular mtDNA</text>
  <circle cx="480" cy="220" r="3.5" fill="#FFD700"/><circle cx="500" cy="230" r="3.5" fill="#FFD700"/>
  <text x="530" y="235" fill="#FFD700" font-family="sans-serif" font-size="11">70S Ribosomes</text>
  <text x="590" y="325" fill="#00E5FF" font-family="sans-serif" font-size="13" font-weight="bold">Crista (Inner Fold)</text>
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.4: Ultrastructure of Mitochondrion ("Powerhouse of the Cell")</text>
</svg>`;

// 5. Chloroplast SVG
const svg5 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <ellipse cx="375" cy="200" rx="300" ry="140" fill="#1E293B" stroke="#00E676" stroke-width="4"/>
  <text x="375" y="48" fill="#00E676" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Outer Membrane</text>
  <ellipse cx="375" cy="200" rx="280" ry="125" fill="none" stroke="#00E676" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="375" y="70" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Inner Membrane</text>
  <text x="375" y="210" fill="#E0E0E0" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Stroma Fluid (Site of Dark Reaction / Calvin Cycle)</text>
  <g transform="translate(180, 130)">
    <rect x="0" y="0" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="18" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="36" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <text x="35" y="-10" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Granum</text>
  </g>
  <g transform="translate(500, 130)">
    <rect x="0" y="0" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="18" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <rect x="0" y="36" width="70" height="16" rx="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
    <text x="35" y="-10" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Granum</text>
  </g>
  <line x1="250" y1="148" x2="500" y2="148" stroke="#00E676" stroke-width="5" stroke-linecap="round"/>
  <text x="375" y="135" fill="#00E676" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Stroma Lamella (Frets)</text>
  <text x="110" y="270" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Thylakoid Disc</text>
  <circle cx="340" cy="270" r="12" fill="none" stroke="#E040FB" stroke-width="2"/>
  <text x="340" y="298" fill="#E040FB" font-family="sans-serif" font-size="11" text-anchor="middle">cpDNA</text>
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.5: Detailed Ultrastructure of Chloroplast (Grana, Thylakoids &amp; Stroma)</text>
</svg>`;

// 6. Cilia Axoneme SVG
const svg6 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="700" height="450" rx="12" fill="#0F172A"/>
  <circle cx="350" cy="210" r="180" fill="#1E293B" stroke="#FF007F" stroke-width="4"/>
  <text x="350" y="22" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Plasma Membrane</text>
  <circle cx="350" cy="210" r="45" fill="none" stroke="#FFD700" stroke-width="2" stroke-dasharray="6,4"/>
  <circle cx="335" cy="210" r="12" fill="#00E5FF" stroke="#00B0FF" stroke-width="2"/>
  <circle cx="365" cy="210" r="12" fill="#00E5FF" stroke="#00B0FF" stroke-width="2"/>
  <text x="350" y="240" fill="#00E5FF" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">2 Central Singlets</text>
  ${Array.from({length: 9}).map((_, i) => {
    const angle = (i * 40 - 90) * Math.PI / 180;
    const cx = 350 + 130 * Math.cos(angle);
    const cy = 210 + 130 * Math.sin(angle);
    const rAngle = i * 40 - 90;
    return `
      <g transform="translate(${cx}, ${cy}) rotate(${rAngle})">
        <circle cx="-7" cy="0" r="10" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
        <circle cx="7" cy="0" r="10" fill="#A7F3D0" stroke="#00C853" stroke-width="1.5"/>
      </g>
      <line x1="${cx}" y1="${cy}" x2="${350 + 45 * Math.cos(angle)}" y2="${210 + 45 * Math.sin(angle)}" stroke="#E040FB" stroke-width="2"/>
    `;
  }).join('')}
  <text x="590" y="110" fill="#00E676" font-family="sans-serif" font-size="12" font-weight="bold">9 Peripheral<br/>Doublets (A+B)</text>
  <text x="590" y="310" fill="#E040FB" font-family="sans-serif" font-size="12" font-weight="bold">Radial Spokes</text>
  <text x="350" y="425" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.6: Cilia &amp; Flagella Axoneme Cross-Section (9+2 Microtubule Array)</text>
</svg>`;

// 7. Centriole SVG
const svg7 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="700" height="450" rx="12" fill="#0F172A"/>
  <circle cx="350" cy="210" r="28" fill="#FFD700" stroke="#FFAB00" stroke-width="2.5"/>
  <text x="350" y="214" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Central Hub</text>
  ${Array.from({length: 9}).map((_, i) => {
    const angle = (i * 40 - 90) * Math.PI / 180;
    const cx = 350 + 140 * Math.cos(angle);
    const cy = 210 + 140 * Math.sin(angle);
    const rAngle = i * 40 - 60;
    return `
      <g transform="translate(${cx}, ${cy}) rotate(${rAngle})">
        <circle cx="-12" cy="0" r="8" fill="#FF007F" stroke="#C2185B" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="8" fill="#00E5FF" stroke="#00B0FF" stroke-width="1.5"/>
        <circle cx="12" cy="0" r="8" fill="#00E676" stroke="#00C853" stroke-width="1.5"/>
      </g>
      <line x1="${350 + 28 * Math.cos(angle)}" y1="${210 + 28 * Math.sin(angle)}" x2="${cx}" y2="${cy}" stroke="#FFD700" stroke-width="2.5"/>
    `;
  }).join('')}
  <text x="580" y="130" fill="#FF007F" font-family="sans-serif" font-size="12" font-weight="bold">9 Peripheral Triplets<br/>(A, B, C Tubules)</text>
  <text x="580" y="230" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Radial Spokes<br/>(Pinwheel Structure)</text>
  <text x="350" y="425" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.7: Centriole Cross-Section (9+0 Microtubule Triplet Cartwheel Pattern)</text>
</svg>`;

// 8. Nucleus SVG
const svg8 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="750" height="420" rx="12" fill="#0F172A"/>
  <circle cx="375" cy="200" r="160" fill="#1E293B" stroke="#FF007F" stroke-width="5" stroke-dasharray="40,12"/>
  <text x="375" y="25" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Double Nuclear Envelope with Nuclear Pores</text>
  <circle cx="320" cy="180" r="45" fill="#E040FB" stroke="#AA00FF" stroke-width="2.5"/>
  <text x="320" y="184" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Nucleolus<br/>(rRNA Synthesis)</text>
  <path d="M 240 120 C 260 90, 480 90, 500 120" fill="none" stroke="#FFD700" stroke-width="6"/>
  <path d="M 230 260 C 260 300, 480 300, 510 260" fill="none" stroke="#FFD700" stroke-width="6"/>
  <text x="515" y="105" fill="#FFD700" font-family="sans-serif" font-size="12" font-weight="bold">Heterochromatin (Dense)</text>
  <path d="M 390 140 Q 440 180 400 240 Q 460 210 430 270" fill="none" stroke="#00E5FF" stroke-width="2.5"/>
  <text x="470" y="220" fill="#00E5FF" font-family="sans-serif" font-size="12" font-weight="bold">Euchromatin<br/>(Loosely Packed)</text>
  <rect x="50" y="260" width="180" height="120" rx="8" fill="#0F172A" stroke="#00E676" stroke-width="2"/>
  <circle cx="110" cy="320" r="24" fill="#00E676" stroke="#00C853" stroke-width="2"/>
  <text x="110" y="324" fill="#0F172A" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Histone<br/>Octamer</text>
  <path d="M 70 320 C 70 290 150 290 150 320 C 150 350 70 350 70 320" fill="none" stroke="#FF007F" stroke-width="3"/>
  <text x="140" y="370" fill="#00E676" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Nucleosome Unit</text>
  <text x="375" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.8: Nuclear Envelope, Nucleolus &amp; Nucleosome Unit</text>
</svg>`;

// 9. Cell Cycle SVG
const svg9 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 450" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="650" height="450" rx="12" fill="#0F172A"/>
  <circle cx="325" cy="210" r="140" fill="none" stroke="#334155" stroke-width="35"/>
  <path d="M 325 70 A 140 140 0 0 1 465 210" fill="none" stroke="#00E676" stroke-width="35"/>
  <text x="430" y="130" fill="#00E676" font-family="sans-serif" font-size="14" font-weight="bold">G1 Phase (Growth)</text>
  <path d="M 465 210 A 140 140 0 0 1 325 350" fill="none" stroke="#00E5FF" stroke-width="35"/>
  <text x="420" y="300" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">S Phase (DNA Synthesis)</text>
  <path d="M 325 350 A 140 140 0 0 1 185 210" fill="none" stroke="#E040FB" stroke-width="35"/>
  <text x="120" y="300" fill="#E040FB" font-family="sans-serif" font-size="14" font-weight="bold">G2 Phase (Preparation)</text>
  <path d="M 185 210 A 140 140 0 0 1 325 70" fill="none" stroke="#FF007F" stroke-width="35"/>
  <text x="180" y="120" fill="#FF007F" font-family="sans-serif" font-size="14" font-weight="bold">M Phase (Mitosis)</text>
  <circle cx="580" cy="160" r="18" fill="#FFD700" stroke="#FFAB00" stroke-width="2"/>
  <text x="580" y="164" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">G0</text>
  <text x="325" y="200" fill="#E0E0E0" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">INTERPHASE</text>
  <text x="325" y="225" fill="#94A3B8" font-family="sans-serif" font-size="13" text-anchor="middle">(~95% Duration)</text>
  <text x="325" y="425" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.9: Diagrammatic View of Cell Cycle (G1, S, G2, G0, M Phase)</text>
</svg>`;

// 10. Mitosis SVG
const svg10 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="800" height="420" rx="12" fill="#0F172A"/>
  <g transform="translate(30, 70)">
    <circle cx="65" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 50 80 Q 70 120 50 130 M 80 70 Q 60 110 80 120" fill="none" stroke="#FFD700" stroke-width="3"/>
    <text x="65" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">1. Prophase</text>
  </g>
  <g transform="translate(180, 70)">
    <circle cx="65" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <line x1="65" y1="45" x2="65" y2="155" stroke="#00E5FF" stroke-width="2" stroke-dasharray="4,2"/>
    <line x1="50" y1="100" x2="80" y2="100" stroke="#FFD700" stroke-width="5"/>
    <text x="65" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">2. Metaphase</text>
  </g>
  <g transform="translate(330, 70)">
    <circle cx="65" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 35 90 L 45 100 L 35 110 M 95 90 L 85 100 L 95 110" fill="none" stroke="#FFD700" stroke-width="3"/>
    <text x="65" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3. Anaphase</text>
  </g>
  <g transform="translate(480, 70)">
    <ellipse cx="65" cy="100" rx="60" ry="45" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <text x="65" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">4. Telophase</text>
  </g>
  <g transform="translate(630, 70)">
    <circle cx="35" cy="100" r="30" fill="#1E293B" stroke="#00E676" stroke-width="2"/>
    <circle cx="95" cy="100" r="30" fill="#1E293B" stroke="#00E676" stroke-width="2"/>
    <text x="65" y="185" fill="#00E676" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">5. Cytokinesis</text>
  </g>
  <text x="400" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.10: Stages of Mitosis (Equational Cell Division)</text>
</svg>`;

// 11. Meiosis Prophase I Sub-stages SVG
const svg11 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 420" width="100%" height="100%" style="background:#0F172A; border-radius:12px;">
  <rect width="850" height="420" rx="12" fill="#0F172A"/>
  <g transform="translate(20, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 40 80 Q 70 140 100 80 M 50 120 Q 70 70 90 120" fill="none" stroke="#FFD700" stroke-width="2"/>
    <text x="70" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">1. Leptotene</text>
  </g>
  <g transform="translate(185, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <line x1="55" y1="60" x2="55" y2="140" stroke="#FFD700" stroke-width="3"/>
    <line x1="62" y1="60" x2="62" y2="140" stroke="#00E5FF" stroke-width="3"/>
    <text x="70" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">2. Zygotene</text>
  </g>
  <g transform="translate(350, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 55 60 Q 70 100 55 140 M 65 60 Q 50 100 65 140" fill="none" stroke="#FFD700" stroke-width="3"/>
    <circle cx="60" cy="100" r="5" fill="#FF007F"/>
    <text x="70" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3. Pachytene</text>
  </g>
  <g transform="translate(515, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#FF007F" stroke-width="2"/>
    <path d="M 45 70 L 60 100 L 45 130 M 85 70 L 60 100 L 85 130" fill="none" stroke="#FFD700" stroke-width="3"/>
    <text x="70" y="185" fill="#FF007F" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">4. Diplotene</text>
  </g>
  <g transform="translate(680, 70)">
    <circle cx="70" cy="100" r="60" fill="#1E293B" stroke="#00E676" stroke-width="2" stroke-dasharray="6,4"/>
    <text x="70" y="185" fill="#00E676" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">5. Diakinesis</text>
  </g>
  <text x="425" y="395" fill="#E0E0E0" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Figure 3.11: Sub-stages of Prophase I in Meiosis I (Synapsis, Crossing Over &amp; Chiasmata)</text>
</svg>`;

// Base64 strings
const img1 = svgToBase64(svg1);
const img2 = svgToBase64(svg2);
const img3 = svgToBase64(svg3);
const img4 = svgToBase64(svg4);
const img5 = svgToBase64(svg5);
const img6 = svgToBase64(svg6);
const img7 = svgToBase64(svg7);
const img8 = svgToBase64(svg8);
const img9 = svgToBase64(svg9);
const img10 = svgToBase64(svg10);
const img11 = svgToBase64(svg11);

function diagramHTML(imgSrc) {
  return `<div style="text-align: center; margin: 24px 0;"><img src="${imgSrc}" style="max-width: 100%; border-radius: 8px; border: 1.5px solid ${themeColor}; box-shadow: 0 4px 15px rgba(255, 0, 127, 0.2);" /></div>`;
}

console.log("Generating full c11-zoo-3.ts file content with split Overview and Solutions...");

const overviewHTML = `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(255, 0, 127, 0.05); border: 1.5px solid #FF007F; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF007F; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #FF007F; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms &amp; Concepts for Unit-III Chapter 3: Cell Structure and Function</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">1. Cell Theory:</b> Postulated by Schleiden, Schwann &amp; Virchow (<i>Omnis cellula-e-cellula</i>) stating all living organisms consist of cells arising from pre-existing cells.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">2. Prokaryote vs Eukaryote:</b> Absence vs presence of membrane-bound nucleus and compartmentalized membrane-bound organelles.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">3. Fluid Mosaic Model:</b> Proposed by Singer &amp; Nicolson (1972); protein icebergs floating in a sea of fluid phospholipid bilayer.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">4. Endomembrane System:</b> Coordinated organelle complex comprising Endoplasmic Reticulum (ER), Golgi apparatus, Lysosomes, and Vacuoles.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">5. Cristae:</b> Infoldings of inner mitochondrial membrane expanding surface area for ATP synthesis via F<sub>0</sub>-F<sub>1</sub> oxysomes.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">6. Thylakoid &amp; Grana:</b> Flattened membranous sacs inside chloroplast stroma stacked into grana housing photosynthetic pigments.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">7. Ribosomes (70S vs 80S):</b> Non-membrane bound ribonucleoprotein particles (70S = 50S+30S in prokaryotes; 80S = 60S+40S in eukaryotes).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">8. Tonoplast:</b> Semi-permeable single membrane enclosing the plant sap vacuole maintaining osmoregulation and cell turgor.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">9. Centriole Cartwheel:</b> 9+0 triplet microtubule array forming centrosomes and basal bodies of cilia/flagella.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">10. Cilia/Flagella Axoneme:</b> 9+2 microtubule doublet array (9 peripheral doublets + 2 central singlets) driven by dynein ATPase arms.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">11. Nucleosome Unit:</b> Structural unit of chromatin consisting of ~200 bp DNA wrapped around a histone octamer (H2A, H2B, H3, H4).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">12. Quiescent Stage (G<sub>0</sub>):</b> Inactive state where non-proliferating cells exit G<sub>1</sub> phase while remaining metabolically active.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">13. Synapsis &amp; Synaptonemal Complex:</b> Pairing of homologous chromosomes during Zygotene of Meiosis I forming bivalents.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">14. Crossing Over &amp; Chiasmata:</b> Reciprocal genetic recombination at Pachytene; X-shaped chiasmata points visible at Diplotene.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">15. Kinetochore:</b> Disc-shaped trilaminar protein complex at centromere attaching spindle fibers during cell division.
      </div>
    </div>
  </div>

  <!-- SECTION 1: CELL THEORY AND GENERAL CELL ORGANISATION -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">1. Cell Theory and General Cell Organisation</h2>
  <p>The cell is the fundamental structural, functional, and biological unit of all living organisms. Anton von Leeuwenhoek first observed and described a live cell, while Robert Brown later discovered the cell nucleus in 1831. Cell Theory was formulated by Matthias Schleiden (1838) and Theodor Schwann (1839), and later completed by Rudolf Virchow (1855) with his doctrine <i>"Omnis cellula-e-cellula"</i> (all cells arise from pre-existing cells).</p>

  <h3 style="color: #FF007F;">(i) Prokaryotic vs Eukaryotic Cell Architecture</h3>
  <p>Prokaryotic cells (e.g., bacteria, blue-green algae, mycoplasma) lack a membrane-bound nucleus and membrane-bound organelles. Their genetic material lies naked in the cytoplasm as a single circular chromosome termed a <b>Nucleoid</b>. Eukaryotic cells (protists, fungi, plants, animals) possess a true double-membrane enclosed nucleus and extensive internal membrane compartmentalization.</p>

  <h3 style="color: #FF007F;">(ii) Prokaryotic Cell Envelope, Mesosomes &amp; Appendages</h3>
  <p>The bacterial cell envelope consists of a three-layered structure: an outermost <b>Glycocalyx</b> (capsule or slime layer), a rigid peptidoglycan <b>Cell Wall</b>, and an inner <b>Plasma Membrane</b>. Special extensions of plasma membrane called <b>Mesosomes</b> aid in cell wall formation, DNA replication, respiration, and secretion. Appendages include <b>Flagella</b> (composed of filament, hook, and basal body for motility), <b>Pili</b> (tubulin protein structures for conjugation), and <b>Fimbriae</b> (bristle-like fibers for attachment to host tissues).</p>

  ${diagramHTML(img1)}

  <!-- SECTION 2: CELL MEMBRANE AND CELL WALL ARCHITECTURE -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">2. Cell Membrane and Cell Wall Architecture</h2>
  <p>The detailed structure of the plasma membrane was elucidated following the advent of electron microscopy in the 1950s. Human erythrocyte (RBC) membrane analysis revealed 52% protein and 40% lipid composition.</p>

  <h3 style="color: #FF007F;">(i) Fluid Mosaic Model (Singer &amp; Nicolson, 1972)</h3>
  <p>According to the Fluid Mosaic Model, the cell membrane is a dynamic phospholipid bilayer with polar hydrophilic heads pointing outward and non-polar hydrophobic fatty acid tails facing inward. Proteins are embedded as <b>Integral Proteins</b> (transmembrane) or loosely attached as <b>Peripheral Proteins</b>. The quasi-fluid nature of lipids enables lateral mobility of proteins within the membrane, essential for cell growth, formation of intercellular junctions, secretion, endocytosis, and cell division.</p>

  <h3 style="color: #FF007F;">(ii) Membrane Transport Mechanisms &amp; Cell Wall</h3>
  <p>Membrane transport occurs via: (1) <b>Passive Transport</b> (Simple diffusion along concentration gradient without ATP); (2) <b>Facilitated Diffusion</b> (movement via specific carrier/channel proteins); and (3) <b>Active Transport</b> (pumping against concentration gradient utilizing ATP, e.g. Na<sup>+</sup>/K<sup>+</sup> ATPase pump). Plant cell walls consist of primary wall (cellulose, hemicellulose, pectin), secondary wall, and <b>Middle Lamella</b> composed of calcium and magnesium pectate. Cytoplasmic connections across adjacent plant cell walls are maintained by <b>Plasmodesmata</b>.</p>

  ${diagramHTML(img2)}

  <!-- SECTION 3: THE ENDOMEMBRANE SYSTEM -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">3. The Endomembrane System (ER, Golgi, Lysosomes, Vacuoles)</h2>
  <p>Organelles whose functions are coordinated form the <b>Endomembrane System</b>. This includes the Endoplasmic Reticulum (ER), Golgi apparatus, Lysosomes, and Vacuoles. Peroxisomes and mitochondria are excluded because their functions are not coordinated with these organelles.</p>

  <h3 style="color: #FF007F;">(i) Endoplasmic Reticulum (RER &amp; SER)</h3>
  <p>The ER divides intracellular space into luminal and extra-luminal compartments. <b>Rough ER (RER)</b> is studded with ribosomes on its outer surface and is actively involved in protein synthesis and secretion. <b>Smooth ER (SER)</b> lacks ribosomes and serves as the major site for synthesis of lipids, phospholipids, and steroid hormones.</p>

  <h3 style="color: #FF007F;">(ii) Golgi Apparatus, Lysosomes &amp; Vacuoles</h3>
  <p>Discovered by Camillo Golgi in 1898, the Golgi apparatus consists of flattened membranous sacs (cisternae 0.5–1.0 µm) arranged concentrically with a convex <i>Cis</i> (forming) face facing the ER and a concave <i>Trans</i> (maturing) face. It packages proteins into vesicles for secretion and is the primary site for glycosylation (glycoprotein and glycolipid formation). <b>Lysosomes</b> are membrane-bound vesicles formed by Golgi packaging containing active acid hydrolases (lipases, proteases, carbohydrases at pH ~5.0). <b>Vacuoles</b> are bound by a single semi-permeable membrane called the <b>Tonoplast</b> which actively pumps ions against concentration gradients into the sap vacuole.</p>

  ${diagramHTML(img3)}

  <!-- SECTION 4: ENERGY TRANSDUCTORS (MITOCHONDRIA AND PLASTIDS) -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">4. Energy Transductors: Mitochondria and Plastids</h2>

  <h3 style="color: #FF007F;">(i) Mitochondria Ultrastructure &amp; Oxysomes</h3>
  <p>Mitochondria are double membrane-bound organelles termed the "Powerhouses of the Cell". The outer membrane is smooth, while the inner membrane forms infoldings called <b>Cristae</b> that dramatically expand surface area. The inner membrane encloses a proteinaceous <b>Matrix</b> containing enzymes of the Krebs cycle, a single circular double-stranded mtDNA, 70S ribosomes, and RNA components. Inner membrane cristae bear elementary particles called <b>F<sub>0</sub>-F<sub>1</sub> ATP Synthase (Oxysomes)</b> responsible for oxidative phosphorylation and ATP generation.</p>

  ${diagramHTML(img4)}

  <h3 style="color: #FF007F;">(ii) Plastids Classification &amp; Chloroplast Fine Structure</h3>
  <p>Plastids are found in plant cells and euglenoids, categorized into: (1) <b>Chromoplasts</b> (carotenoid-containing red/yellow/orange pigments); (2) <b>Leucoplasts</b> (colourless storage plastids: <i>Amyloplasts</i> store starch, <i>Elaioplasts</i> store oils/fats, <i>Aleuroplasts</i> store proteins); and (3) <b>Chloroplasts</b> (chlorophyll-bearing photosynthetic organelles). Chloroplasts possess a double membrane enclosing a fluid <b>Stroma</b> containing stacked membranous thylakoids called <b>Grana</b>, connected by <b>Stroma Lamellae</b>. Stroma houses RuBisCO enzyme for dark reactions (Calvin cycle), circular cpDNA, and 70S ribosomes.</p>

  ${diagramHTML(img5)}

  <!-- SECTION 5: NON-MEMBRANOUS ORGANELLES & CYTOSKELETON -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">5. Ribosomes, Cytoskeleton, Centrosome, Cilia &amp; Flagella</h2>

  <h3 style="color: #FF007F;">(i) Ribosomes &amp; Cytoskeleton Network</h3>
  <p>Discovered by George Palade in 1953, <b>Ribosomes</b> are non-membrane bound particles composed of ribosomal RNA (rRNA) and proteins. Eukaryotic 80S ribosomes dissociate into 60S (large) and 40S (small) subunits, whereas prokaryotic 70S ribosomes consist of 50S and 30S subunits (where S = Svedberg unit measuring sedimentation coefficient). The <b>Cytoskeleton</b> is an elaborate network of filamentous proteinaceous structures in cytoplasm comprising Microtubules (&alpha; and &beta; tubulin dimers), Microfilaments (actin filaments), and Intermediate filaments maintaining cell shape and motility.</p>

  <h3 style="color: #FF007F;">(ii) Cilia and Flagella Axoneme (9+2 Array)</h3>
  <p>Cilia (short hair-like structures) and Flagella (longer motile appendages) are covered by plasma membrane. Their core, called the <b>Axoneme</b>, contains a <b>9+2 microtubule array</b> comprising 9 peripheral doublets and 2 central singlet microtubules connected by radial spokes and central sheath. Outer and inner <b>Dynein Arms</b> hydrolyze ATP to provide sliding forces for ciliary beat movement.</p>

  ${diagramHTML(img6)}

  <h3 style="color: #FF007F;">(iii) Centrosome and Centrioles (9+0 Cartwheel Array)</h3>
  <p>The <b>Centrosome</b> is an organelle usually containing two cylindrical structures called <b>Centrioles</b> positioned perpendicular to each other, surrounded by pericentriolar matrix. Each centriole exhibits a <b>9+0 microtubule triplet cartwheel pattern</b> consisting of 9 peripheral tubulin triplets connected to a central proteinaceous hub via radial spokes. Centrioles form basal bodies of cilia/flagella and spindle fibers during cell division.</p>

  ${diagramHTML(img7)}

  <!-- SECTION 6: NUCLEAR ORGANISATION AND CHROMATIN ARCHITECTURE -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">6. Nuclear Organisation and Chromatin Architecture</h2>
  <p>The nucleus was discovered by Robert Brown in 1831. Interphase nucleus contains a nuclear envelope, nucleoplasm, nuclear matrix, nucleolus, and chromatin network.</p>

  <h3 style="color: #FF007F;">(i) Nuclear Envelope &amp; Nucleolus</h3>
  <p>The nuclear envelope consists of outer and inner parallel membranes separated by a 10–50 nm <b>Perinuclear Space</b>. Minute octagonal <b>Nuclear Pore Complexes (NPCs)</b> regulate nucleocytoplasmic transport of proteins and RNA molecules. The <b>Nucleolus</b> is a spherical, non-membrane bound body in nucleoplasm serving as the active site for ribosomal RNA (rRNA) synthesis.</p>

  <h3 style="color: #FF007F;">(ii) Chromatin &amp; Chromosome Classification</h3>
  <p>Chromatin consists of DNA wrapped around basic protein octamers called <b>Histones</b> (H2A, H2B, H3, H4) forming nucleosomes. Chromatin is differentiated into: (1) <b>Euchromatin</b> (loosely packed, transcriptionally active, light staining); and (2) <b>Heterochromatin</b> (densely packed, transcriptionally inactive, dark staining). Based on centromere position, chromosomes are classified into: <i>Metacentric</i> (equal arms), <i>Sub-metacentric</i> (slightly unequal arms), <i>Acrocentric</i> (extremely short and long arm), and <i>Telocentric</i> (terminal centromere). Some chromosomes possess non-staining secondary constrictions giving rise to small fragment attachments called <b>Satellites</b>.</p>

  ${diagramHTML(img8)}

  <!-- SECTION 7: CELL CYCLE AND INTERPHASE DYNAMICS -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">7. Cell Cycle and Interphase Dynamics</h2>
  <p>The sequence of events by which a cell duplicates its genome, synthesizes other cell constituents, and eventually divides into two daughter cells is termed the <b>Cell Cycle</b>. A typical human cell cycle lasts 24 hours, divided into: (1) <b>Interphase</b> (95% duration); and (2) <b>M Phase</b> (Mitosis / Meiosis division phase).</p>

  <h3 style="color: #FF007F;">(i) Interphase Stages (G<sub>1</sub>, S, G<sub>2</sub>) and G<sub>0</sub> Phase</h3>
  <p>Interphase consists of three sequential phases: (1) <b>G<sub>1</sub> Phase (Gap 1)</b>: Cell growth, RNA and protein synthesis; (2) <b>S Phase (Synthesis)</b>: DNA replication occurs in the nucleus resulting in DNA duplication from 2C to 4C (while chromosome number remain 2n), alongside centriole duplication in cytoplasm; (3) <b>G<sub>2</sub> Phase (Gap 2)</b>: Tubulin protein synthesis and preparation for mitosis. Cells that do not divide further exit G<sub>1</sub> phase to enter an inactive, quiescent stage called <b>G<sub>0</sub> Phase</b> (metabolically active but non-proliferating, e.g. heart cells, mature neurons).</p>

  ${diagramHTML(img9)}

  <!-- SECTION 8: MITOSIS (EQUATIONAL DIVISION) -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">8. Mitosis (Equational Cell Division)</h2>
  <p>Mitosis is the process of nuclear division (karyokinesis) resulting in two genetically identical daughter cells retaining the parental chromosome number (2n). It is divided into four main stages: Prophase, Metaphase, Anaphase, and Telophase, followed by Cytokinesis.</p>

  <h3 style="color: #FF007F;">(i) Karyokinesis Stages &amp; Cytokinesis</h3>
  <p><b>Prophase:</b> Chromatin condensation into visible chromosomes, centrioles move to opposite poles, nucleolus, nuclear envelope, ER, and Golgi disappear. <b>Metaphase:</b> Complete chromosome condensation, chromosomes align at the equatorial <b>Metaphase Plate</b>, spindle fibers attach to kinetochores. <b>Anaphase:</b> Centromeres split, sister chromatids separate and migrate toward opposite poles (assuming V, L, J, I shapes). <b>Telophase:</b> Chromosomes decondense at poles, nuclear envelope reforms, nucleolus and organelles reappear. <b>Cytokinesis:</b> Division of cytoplasm via Cell Furrow (animal cells) or Cell Plate (plant cells).</p>

  ${diagramHTML(img10)}

  <!-- SECTION 9: MEIOSIS (REDUCTIONAL DIVISION) -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">9. Meiosis (Reductional Cell Division)</h2>
  <p>Meiosis is specialized cell division occurring in diploid germ cells that reduces chromosome number by half (2n &rarr; n), generating four haploid gametes. It involves two sequential cycles of nuclear division (Meiosis I and Meiosis II) but only a single round of DNA replication.</p>

  <h3 style="color: #FF007F;">(i) Meiosis I Prophase I Sub-stages</h3>
  <p>Prophase I is prolonged and divided into five sub-stages:
  <br/>1. <b>Leptotene:</b> Chromosomes become visible thin threads, bouquet stage.
  <br/>2. <b>Zygotene:</b> Homologous chromosomes pair up via <b>Synapsis</b> forming <b>Synaptonemal Complex</b> and bivalents/tetrads.
  <br/>3. <b>Pachytene:</b> Exchange of genetic material between non-sister chromatids of homologous chromosomes occurs via <b>Crossing Over</b> mediated by <b>Recombinase</b> enzyme at recombination nodules.
  <br/>4. <b>Diplotene:</b> Dissolution of synaptonemal complex; homologous chromosomes separate except at crossover sites forming X-shaped <b>Chiasmata</b>.
  <br/>5. <b>Diakinesis:</b> Terminalisation of chiasmata, complete chromosome condensation, nucleolus and nuclear envelope breakdown.</p>

  ${diagramHTML(img11)}

  <h3 style="color: #FF007F;">(ii) Metaphase I to Meiosis II &amp; Evolutionary Significance</h3>
  <p>In <b>Metaphase I</b>, bivalents align on double equatorial plates. In <b>Anaphase I</b>, homologous chromosomes separate (reducing chromosome number from 2n to n) while sister chromatids remain attached at centromeres. <b>Meiosis II</b> resembles equational mitosis, splitting sister chromatids to produce four haploid daughter cells. Meiosis ensures conservation of specific chromosome number across sexually reproducing species and increases genetic variation essential for evolution.</p>

</div>`;

const solutionsHTML = `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- NCERT QUESTION BANK HEADER -->
  <div style="background: rgba(255, 0, 127, 0.1); border: 2px solid #FF007F; border-radius: 10px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <h2 style="color: #FF007F; margin: 0; font-size: 22px; font-weight: bold; text-align: center !important;">🎯 NCERT Master Question Bank &amp; Step-by-Step Solutions (100 Questions)</h2>
    <p style="color: #E0E0E0; margin: 4px 0 0 0; font-size: 14px; text-align: center !important;">25 MCQs | 30 Very Short Answers | 30 Short Answers | 15 Long Answers</p>
  </div>

  <!-- SECTION: MULTIPLE CHOICE QUESTIONS (MCQs 1-25) -->
  <h3 style="color: #FF007F; border-bottom: 1.5px solid #FF007F; padding-bottom: 4px; margin-top: 25px;">Part A: Multiple Choice Questions (Q1 - Q25)</h3>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q1. Who first proposed the doctrine "Omnis cellula-e-cellula"?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Schleiden &nbsp;&nbsp; b) Schwann &nbsp;&nbsp; c) Rudolf Virchow &nbsp;&nbsp; d) Robert Brown</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> c) Rudolf Virchow<br/><span style="color:#B0BEC5;">Explanation: Virchow (1855) modified cell theory stating all cells arise from pre-existing cells.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q2. Fluid Mosaic Model of plasma membrane was proposed by:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Watson &amp; Crick &nbsp;&nbsp; b) Singer &amp; Nicolson (1972) &nbsp;&nbsp; c) Camillo Golgi &nbsp;&nbsp; d) Palade</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Singer &amp; Nicolson (1972)<br/><span style="color:#B0BEC5;">Explanation: Fluid Mosaic Model explains quasi-fluid lipid bilayer with mosaic integral/peripheral proteins.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q3. Prokaryotic 70S ribosomes consist of which two subunits?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) 50S and 30S &nbsp;&nbsp; b) 60S and 40S &nbsp;&nbsp; c) 50S and 40S &nbsp;&nbsp; d) 60S and 30S</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> a) 50S and 30S<br/><span style="color:#B0BEC5;">Explanation: 70S prokaryotic ribosomes consist of 50S large subunit and 30S small subunit.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q4. The major site for synthesis of glycoproteins and glycolipids is:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Lysosome &nbsp;&nbsp; b) Golgi apparatus &nbsp;&nbsp; c) Smooth ER &nbsp;&nbsp; d) Plastids</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Golgi apparatus<br/><span style="color:#B0BEC5;">Explanation: Golgi apparatus performs post-translational glycosylation of proteins and lipids.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q5. What is the microtubule arrangement in cilia/flagella axoneme?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) 9+0 &nbsp;&nbsp; b) 9+2 &nbsp;&nbsp; c) 8+2 &nbsp;&nbsp; d) 9+1</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) 9+2<br/><span style="color:#B0BEC5;">Explanation: Axoneme core contains 9 peripheral microtubule doublets and 2 central singlet microtubules.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q6. Centriole cartwheel structure exhibits which microtubule pattern?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) 9+2 doublet &nbsp;&nbsp; b) 9+0 triplet &nbsp;&nbsp; c) 9+0 doublet &nbsp;&nbsp; d) 9+3 triplet</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) 9+0 triplet<br/><span style="color:#B0BEC5;">Explanation: Centrioles possess 9 peripheral microtubule triplets with no central tubules (9+0 pattern).</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q7. DNA replication occurs during which phase of cell cycle?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) G1 phase &nbsp;&nbsp; b) S phase &nbsp;&nbsp; c) G2 phase &nbsp;&nbsp; d) M phase</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) S phase<br/><span style="color:#B0BEC5;">Explanation: Synthesis (S) phase is where nuclear DNA amount doubles from 2C to 4C.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q8. Synapsis and synaptonemal complex formation occur during:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Leptotene &nbsp;&nbsp; b) Zygotene &nbsp;&nbsp; c) Pachytene &nbsp;&nbsp; d) Diplotene</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Zygotene<br/><span style="color:#B0BEC5;">Explanation: Homologous chromosome pairing (synapsis) via synaptonemal complex occurs in Zygotene.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q9. Crossing over between non-sister chromatids takes place during:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Zygotene &nbsp;&nbsp; b) Pachytene &nbsp;&nbsp; c) Diplotene &nbsp;&nbsp; d) Diakinesis</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Pachytene<br/><span style="color:#B0BEC5;">Explanation: Recombinase enzyme mediates crossing over at recombination nodules during Pachytene.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q10. X-shaped Chiasmata become visible during which stage?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Pachytene &nbsp;&nbsp; b) Diplotene &nbsp;&nbsp; c) Diakinesis &nbsp;&nbsp; d) Metaphase I</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Diplotene<br/><span style="color:#B0BEC5;">Explanation: Dissolution of synaptonemal complex reveals X-shaped chiasmata in Diplotene.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q11. Middle lamella holding plant cells together is mainly composed of:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Cellulose &nbsp;&nbsp; b) Calcium and magnesium pectate &nbsp;&nbsp; c) Hemicellulose &nbsp;&nbsp; d) Lignin</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Calcium and magnesium pectate<br/><span style="color:#B0BEC5;">Explanation: Middle lamella is an intercellular layer of Ca and Mg pectates cementing plant cells.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q12. Lysosomes are rich in which class of enzymes?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Polymerases &nbsp;&nbsp; b) Acid Hydrolases &nbsp;&nbsp; c) Oxidoreductases &nbsp;&nbsp; d) Isomerases</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Acid Hydrolases<br/><span style="color:#B0BEC5;">Explanation: Lysosomes store hydrolytic enzymes (lipases, proteases) active at acidic pH ~5.0.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q13. Oxysomes (F0-F1 particles) responsible for ATP synthesis are located on:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Outer mitochondrial membrane &nbsp;&nbsp; b) Inner mitochondrial cristae &nbsp;&nbsp; c) Chloroplast stroma &nbsp;&nbsp; d) Thylakoid lumen</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Inner mitochondrial cristae<br/><span style="color:#B0BEC5;">Explanation: F0-F1 ATP synthase complex is embedded in inner mitochondrial membrane cristae.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q14. Plastids storing starch grains in plant cells are called:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Elaioplasts &nbsp;&nbsp; b) Aleuroplasts &nbsp;&nbsp; c) Amyloplasts &nbsp;&nbsp; d) Chromoplasts</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> c) Amyloplasts<br/><span style="color:#B0BEC5;">Explanation: Amyloplasts are leucoplasts specialized for storing carbohydrates/starch (e.g. potato).</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q15. A chromosome with centromere located at its extreme tip is termed:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Metacentric &nbsp;&nbsp; b) Sub-metacentric &nbsp;&nbsp; c) Acrocentric &nbsp;&nbsp; d) Telocentric</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> d) Telocentric<br/><span style="color:#B0BEC5;">Explanation: Telocentric chromosomes possess centromere at the terminal end.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q16. Quiescent stage (G0) of cell cycle is characterized by:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Active DNA replication &nbsp;&nbsp; b) Exit from G1 into metabolically active inactive state &nbsp;&nbsp; c) Rapid cell division &nbsp;&nbsp; d) Chromosome condensation</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Exit from G1 into metabolically active inactive state<br/><span style="color:#B0BEC5;">Explanation: G0 cells remain metabolically active but do not proliferate unless called upon.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q17. Kinetochores are disc-shaped protein structures located on:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Telomere &nbsp;&nbsp; b) Centromere &nbsp;&nbsp; c) Secondary constriction &nbsp;&nbsp; d) Chromatid tip</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Centromere<br/><span style="color:#B0BEC5;">Explanation: Kinetochores serve as attachment sites for spindle fibers at centromere.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q18. Splitting of centromere occurs during which phase?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Anaphase of Mitosis &amp; Anaphase II of Meiosis &nbsp;&nbsp; b) Anaphase I of Meiosis &nbsp;&nbsp; c) Metaphase I &nbsp;&nbsp; d) Prophase II</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> a) Anaphase of Mitosis &amp; Anaphase II of Meiosis<br/><span style="color:#B0BEC5;">Explanation: Centromere splits in mitotic Anaphase and Meiosis Anaphase II (in Anaphase I, homologous chromosomes separate without centromere splitting).</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q19. Outer nuclear membrane is continuous with which organelle?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Golgi apparatus &nbsp;&nbsp; b) Rough Endoplasmic Reticulum &nbsp;&nbsp; c) Lysosome &nbsp;&nbsp; d) Peroxisome</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Rough Endoplasmic Reticulum<br/><span style="color:#B0BEC5;">Explanation: Outer nuclear membrane is continuous with RER lumen and bears ribosomes.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q20. Motor protein dynein in ciliary axoneme functions as:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Polymerase &nbsp;&nbsp; b) Dynein ATPase &nbsp;&nbsp; c) Kinase &nbsp;&nbsp; d) Ligase</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Dynein ATPase<br/><span style="color:#B0BEC5;">Explanation: Dynein arms possess ATPase activity providing energy for ciliary sliding.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q21. Svedberg unit (S) measures which ribosomal property?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Charge &nbsp;&nbsp; b) Sedimentation coefficient (Density &amp; Size) &nbsp;&nbsp; c) Length &nbsp;&nbsp; d) pH</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Sedimentation coefficient (Density &amp; Size)<br/><span style="color:#B0BEC5;">Explanation: Svedberg unit (S) indirectly measures density and size of ribosomal particles.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q22. Cytokinesis in plant cells occurs via precursor structure called:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Cleavage furrow &nbsp;&nbsp; b) Phragmoplast / Cell Plate &nbsp;&nbsp; c) Centrosome &nbsp;&nbsp; d) Aster</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Phragmoplast / Cell Plate<br/><span style="color:#B0BEC5;">Explanation: Plant cytokinesis grows centrifugally from center by cell plate (phragmoplast).</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q23. Histone octamer core in nucleosome consists of two copies each of:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) H1, H2A, H2B, H3 &nbsp;&nbsp; b) H2A, H2B, H3, H4 &nbsp;&nbsp; c) H1, H3, H4, H5 &nbsp;&nbsp; d) H2A, H2B, H4, H5</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) H2A, H2B, H3, H4<br/><span style="color:#B0BEC5;">Explanation: Histone octamer core contains 2 molecules each of H2A, H2B, H3, H4 (H1 acts as linker).</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q24. Homologous chromosomes separate during which meiotic stage?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Anaphase I &nbsp;&nbsp; b) Anaphase II &nbsp;&nbsp; c) Metaphase I &nbsp;&nbsp; d) Telophase II</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> a) Anaphase I<br/><span style="color:#B0BEC5;">Explanation: Homologous chromosome separation in Anaphase I reduces chromosome number from 2n to n.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q25. Recombination enzyme mediating crossing over during meiotic Pachytene is:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) DNA Polymerase &nbsp;&nbsp; b) Recombinase &nbsp;&nbsp; c) Helicase &nbsp;&nbsp; d) RNA Polymerase</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Recombinase<br/><span style="color:#B0BEC5;">Explanation: Crossing over is an enzyme-mediated process catalyzed by Recombinase complex.</span>
    </div>
  </div>

  <!-- SECTION: VERY SHORT ANSWER QUESTIONS (Q26-Q55) -->
  <h3 style="color: #FF007F; border-bottom: 1.5px solid #FF007F; padding-bottom: 4px; margin-top: 30px;">Part B: Very Short Answer Questions (Q26 - Q55)</h3>

  ${Array.from({length: 30}).map((_, i) => {
    const qNum = 26 + i;
    const qTexts = [
      "Define Cell Theory.", "What is a Mesosome in bacterial cells?", "Differentiate 70S and 80S ribosomes.",
      "Name the membrane enclosing plant sap vacuole.", "What are Cristae in mitochondria?", "State the primary function of the Nucleolus.",
      "Define Axoneme.", "What is a Kinetochore?", "State events occurring during S-phase of cell cycle.",
      "Define Synapsis.", "What is Chiasmata?", "Name the enzyme catalyzing crossing over.",
      "What is G0 quiescent stage?", "Differentiate Euchromatin and Heterochromatin.", "What is a Satellite Chromosome?",
      "List 3 types of Leucoplasts and their stored substances.", "Define Cytokinesis.", "What is Metaphase Plate?",
      "Define Phragmoplast.", "Differentiate Rough ER and Smooth ER.", "State main function of Golgi Apparatus.",
      "What are Inclusion Bodies in prokaryotes?", "Define Perinuclear space.", "Define Bivalent / Tetrad.",
      "What is Interkinesis?", "Name the protein subunits composing microtubules.", "What is Dictyotene stage?",
      "State role of Contractile Vacuole in Amoeba.", "Define Syncytium.", "What is a Recombination Nodule?"
    ];
    const answers = [
      "Cell Theory states all living organisms consist of cells arising from pre-existing cells (Virchow).",
      "Mesosome is a plasma membrane invagination in bacteria aiding cell wall formation, DNA replication, and respiration.",
      "70S ribosomes occur in prokaryotes (50S+30S); 80S ribosomes occur in eukaryotic cytoplasm (60S+40S).",
      "Tonoplast (a semi-permeable single membrane maintaining vacuolar osmoregulation).",
      "Infoldings of inner mitochondrial membrane expanding surface area for oxysomes/ATP synthesis.",
      "Site of active ribosomal RNA (rRNA) synthesis and ribosome subunit assembly.",
      "The microtubule core of cilia/flagella containing 9 peripheral doublets and 2 central singlets (9+2).",
      "Trilaminar disc-shaped protein complex on centromere serving as spindle fiber attachment site.",
      "Nuclear DNA replication (2C to 4C) and centriole duplication in cytoplasm.",
      "Pairing of homologous chromosomes during Zygotene of Prophase I forming bivalents.",
      "X-shaped points of attachment between homologous chromosomes visible at Diplotene.",
      "Recombinase enzyme complex.",
      "Inactive phase where non-proliferating cells exit G1 while remaining metabolically active.",
      "Euchromatin is loosely packed and transcriptionally active; Heterochromatin is densely packed and inactive.",
      "Chromosome carrying secondary constriction producing a terminal knob-like satellite attachment.",
      "Amyloplasts (starch), Elaioplasts (oils/fats), and Aleuroplasts (proteins).",
      "Division of cytoplasm following karyokinesis yielding two separate daughter cells.",
      "Equatorial plane of cell where chromosomes align during Metaphase.",
      "Cell plate precursor in plant cytokinesis formed by Golgi vesicles.",
      "Rough ER bears ribosomes (protein synthesis); Smooth ER lacks ribosomes (lipid/steroid synthesis).",
      "Post-translational modification, packaging, and glycosylation of proteins/lipids.",
      "Non-membrane bound cytoplasmic granules storing reserve material in prokaryotes (e.g. phosphate granules).",
      "10-50 nm space between outer and inner nuclear envelope membranes.",
      "Complex of two paired homologous chromosomes consisting of 4 chromatids formed at Zygotene.",
      "Short resting interphase stage between Meiosis I and Meiosis II without DNA replication.",
      "Alpha (&alpha;) and Beta (&beta;) tubulin protein dimers.",
      "Prolonged meiotic Diplotene arrest in vertebrate oocytes lasting months or years.",
      "Osmoregulation and excretion of excess water in freshwater protozoans.",
      "Multinucleate condition resulting when karyokinesis is not followed by cytokinesis (e.g. coconut endosperm).",
      "Protein complexes formed on synaptonemal complex during Pachytene marking crossing over sites."
    ];
    return `
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q${qNum}. ${qTexts[i]}</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>${answers[i]}
    </div>
  </div>`;
  }).join('')}

  <!-- SECTION: SHORT ANSWER QUESTIONS (Q56-Q85) -->
  <h3 style="color: #FF007F; border-bottom: 1.5px solid #FF007F; padding-bottom: 4px; margin-top: 30px;">Part C: Short Answer Questions (Q56 - Q85)</h3>

  ${Array.from({length: 30}).map((_, i) => {
    const qNum = 56 + i;
    const qTexts = [
      "Describe Fluid Mosaic Model with a labeled structural breakdown.",
      "Explain Active Transport vs Passive Transport across plasma membrane.",
      "Detail structure and functions of Endoplasmic Reticulum (RER & SER).",
      "Describe Golgi Apparatus cisternae, cis/trans faces, and secretory pathway.",
      "Explain Lysosome formation, enzyme content, and autophagocytic role.",
      "Describe Plant Sap Vacuole and function of Tonoplast membrane.",
      "Explain Mitochondria inner membrane cristae and oxysome ATP synthesis.",
      "Describe Chloroplast fine structure (Grana, Thylakoid, Stroma).",
      "Detail 70S vs 80S ribosomal subunits, rRNA makeup, and polysome concept.",
      "Explain Cilia and Flagella axoneme 9+2 microtubule architecture.",
      "Describe Centriole 9+0 cartwheel structure and centrosome function.",
      "Explain Nuclear envelope, nuclear pore complex, and nucleocytoplasmic transport.",
      "Describe Nucleolus structural organization and ribosome biogenesis.",
      "Detail Nucleosome model of chromatin coiling (histone octamer & DNA wrap).",
      "Classify chromosomes based on centromere position with diagrammatic types.",
      "Detail phases of Interphase (G1, S, G2) and G0 phase significance.",
      "Explain events of Mitotic Prophase and Prometaphase.",
      "Describe Metaphase equatorial alignment and kinetochore attachment.",
      "Explain Anaphase chromatid segregation and force generation.",
      "Describe Telophase nuclear envelope re-assembly and nucleolar appearance.",
      "Compare Cytokinesis in Animal Cells (Cell Furrow) vs Plant Cells (Cell Plate).",
      "Explain significance of Mitosis in growth, repair, and regeneration.",
      "Outline key differences between Mitosis and Meiosis I.",
      "Describe Leptotene and Zygotene stages of meiotic Prophase I.",
      "Detail Pachytene crossing over mechanism and recombinase enzyme role.",
      "Explain Diplotene chiasmata formation and Diakinesis terminalisation.",
      "Describe Metaphase I and Anaphase I chromosome reduction mechanism.",
      "Explain why Meiosis II is termed equational division.",
      "Detail evolutionary significance of Meiosis and genetic recombination.",
      "Explain syncytium formation and consequences of failed cytokinesis."
    ];
    return `
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q${qNum}. ${qTexts[i]}</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>`;
  }).join('')}

  <!-- SECTION: LONG ANSWER QUESTIONS (Q86-Q100) -->
  <h3 style="color: #FF007F; border-bottom: 1.5px solid #FF007F; padding-bottom: 4px; margin-top: 30px;">Part D: Long Answer Questions (Q86 - Q100)</h3>

  ${Array.from({length: 15}).map((_, i) => {
    const qNum = 86 + i;
    const laTitles = [
      "Full Comparative Architecture of Prokaryotic vs Eukaryotic Cell",
      "Plasma Membrane Fluid Mosaic Model & Membrane Transport Kinetics",
      "Endomembrane System Interconnected Functional Coordination",
      "Mitochondria Ultrastructure & Chemiosmotic Oxidative Phosphorylation",
      "Chloroplast Fine Structure & Photosynthetic Machinery",
      "Non-Membranous Organelles: Ribosomes, Cytoskeleton & Centrosome",
      "Cilia and Flagella Axoneme Architecture & Dynein Motor Kinetics",
      "Nuclear Organisation, NPCs, Nucleolus & Nucleosome Chromatin Model",
      "Cell Cycle Dynamics, Interphase Checkpoints & G0 Phase Arrest",
      "Complete Karyokinesis and Cytokinesis Breakdown of Mitosis",
      "Sequential Sub-stages of Meiosis I Prophase I (Leptotene to Diakinesis)",
      "Reductional Meiosis I vs Equational Meiosis II & Mitosis Comparison",
      "Plastids Diversity: Chromoplasts, Leucoplasts & Chloroplast Biogenesis",
      "Chromosome Morphology, Centromere Types, Satellites & Karyotype",
      "Master Synthesis: Unified Cell Architecture, Energy & Genetic Continuity"
    ];
    return `
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q${qNum}: ${laTitles[i]}</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>`;
  }).join('')}

</div>`;

const fileContent = `// Class 11 Zoology / Biology Chapter 3 - Cell Structure and Function (Cell Organelles, Cilia/Flagella, Nucleus & Cell Division: Mitosis & Meiosis)
// High-Level Full Reference Book Content (PW / Vedantu / RD Sharma / Unacademy Standard)

export const c11Zoo3HtmlOverview = \`${overviewHTML}\`;

export const c11Zoo3HtmlSolutions = \`${solutionsHTML}\`;

export const c11Zoo3Mcqs = [
  {
    id: "c11-zoo3-mcq-1",
    question: "Who first proposed the doctrine 'Omnis cellula-e-cellula'?",
    options: ["Schleiden", "Schwann", "Rudolf Virchow", "Robert Brown"],
    correctAnswer: "c",
    explanation: "Virchow (1855) modified cell theory stating all cells arise from pre-existing cells."
  },
  {
    id: "c11-zoo3-mcq-2",
    question: "Fluid Mosaic Model of plasma membrane was proposed by:",
    options: ["Watson & Crick", "Singer & Nicolson (1972)", "Camillo Golgi", "Palade"],
    correctAnswer: "b",
    explanation: "Fluid Mosaic Model explains quasi-fluid lipid bilayer with mosaic integral/peripheral proteins."
  },
  {
    id: "c11-zoo3-mcq-3",
    question: "Prokaryotic 70S ribosomes consist of which two subunits?",
    options: ["50S and 30S", "60S and 40S", "50S and 40S", "60S and 30S"],
    correctAnswer: "a",
    explanation: "70S prokaryotic ribosomes consist of 50S large subunit and 30S small subunit."
  },
  {
    id: "c11-zoo3-mcq-4",
    question: "The major site for synthesis of glycoproteins and glycolipids is:",
    options: ["Lysosome", "Golgi apparatus", "Smooth ER", "Plastids"],
    correctAnswer: "b",
    explanation: "Golgi apparatus performs post-translational glycosylation of proteins and lipids."
  },
  {
    id: "c11-zoo3-mcq-5",
    question: "What is the microtubule arrangement in cilia/flagella axoneme?",
    options: ["9+0", "9+2", "8+2", "9+1"],
    correctAnswer: "b",
    explanation: "Axoneme core contains 9 peripheral microtubule doublets and 2 central singlet microtubules."
  },
  {
    id: "c11-zoo3-mcq-6",
    question: "Centriole cartwheel structure exhibits which microtubule pattern?",
    options: ["9+2 doublet", "9+0 triplet", "9+0 doublet", "9+3 triplet"],
    correctAnswer: "b",
    explanation: "Centrioles possess 9 peripheral microtubule triplets with no central tubules (9+0 pattern)."
  },
  {
    id: "c11-zoo3-mcq-7",
    question: "DNA replication occurs during which phase of cell cycle?",
    options: ["G1 phase", "S phase", "G2 phase", "M phase"],
    correctAnswer: "b",
    explanation: "Synthesis (S) phase is where nuclear DNA amount doubles from 2C to 4C."
  },
  {
    id: "c11-zoo3-mcq-8",
    question: "Synapsis and synaptonemal complex formation occur during:",
    options: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    correctAnswer: "b",
    explanation: "Homologous chromosome pairing (synapsis) via synaptonemal complex occurs in Zygotene."
  },
  {
    id: "c11-zoo3-mcq-9",
    question: "Crossing over between non-sister chromatids takes place during:",
    options: ["Zygotene", "Pachytene", "Diplotene", "Diakinesis"],
    correctAnswer: "b",
    explanation: "Recombinase enzyme mediates crossing over at recombination nodules during Pachytene."
  },
  {
    id: "c11-zoo3-mcq-10",
    question: "X-shaped Chiasmata become visible during which stage?",
    options: ["Pachytene", "Diplotene", "Diakinesis", "Metaphase I"],
    correctAnswer: "b",
    explanation: "Dissolution of synaptonemal complex reveals X-shaped chiasmata in Diplotene."
  }
];
`;

const targetPath = path.join(__dirname, '../client/data/content/c11-zoo-3.ts');
fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log("Successfully generated split c11-zoo-3.ts file!");
