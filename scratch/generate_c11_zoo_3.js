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

function renderDiagram(imgSrc, caption) {
  return `<div style="text-align: center; margin: 24px 0;"><img src="${imgSrc}" style="max-width: 100%; border-radius: 8px; border: 1.5px solid ${themeColor};" /><br/><b style="color: ${themeColor}; font-size: 13.5px;">${caption}</b></div>`;
}

console.log("Generating full c11-zoo-3.ts file content...");
