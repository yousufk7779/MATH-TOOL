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
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${defContent}</div>
  </div>`;
}

function analogyBox(title, text) {
  return `
  <div style="background: rgba(16, 185, 129, 0.08); border-left: 4.5px solid #10B981; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #10B981; font-size: 16.5px; display: block; margin-bottom: 6px;">💡 REAL-WORLD INTUITION &amp; ANALOGY: ${title}</b>
    <div style="color: #E2E8F0; font-size: 15.5px; line-height: 1.65;">${text}</div>
  </div>`;
}

function stepDerivationBox(title, stepsHtml) {
  return `
  <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,81,47,0.3); padding-bottom: 6px;">
      📐 STEP-BY-STEP MATHEMATICAL DERIVATION: ${title}
    </div>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.75;">
      ${stepsHtml}
    </div>
  </div>`;
}

function examTrapBox(title, text) {
  return `
  <div style="background: rgba(239, 68, 68, 0.08); border-left: 4.5px solid #EF4444; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #EF4444; font-size: 16.5px; display: block; margin-bottom: 6px;">⚠️ BOARD EXAM TRAP &amp; COMMON MISCONCEPTION: ${title}</b>
    <div style="color: #FEE2E2; font-size: 15.5px; line-height: 1.65;">${text}</div>
  </div>`;
}

function solvedExampleBox(title, prob, sol) {
  return `
  <div style="background: rgba(59, 130, 246, 0.08); border-left: 4.5px solid #3B82F6; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #3B82F6; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 WORKED BOARD NUMERICAL EXAMPLE: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65; margin-bottom: 8px;"><b>Problem:</b> ${prob}</div>
    <div style="color: #93C5FD; font-size: 15px; line-height: 1.65; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 6px;"><b>Step-by-Step Solution:</b><br>${sol}</div>
  </div>`;
}

function svgCard(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(255, 81, 47, 0.25);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 17.5px; margin-bottom: 14px; text-align: center; letter-spacing: 0.5px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 840px; margin: 0 auto; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
      ${svgContent}
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 14px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

// SVG 1: Partial Dielectric Slab in Capacitor
const svgDielectricSlab = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 400" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="slabGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#00E5FF" stop-opacity="0.85"/>
    </linearGradient>
    <marker id="capArr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#FF512F"/>
    </marker>
    <marker id="slabArr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#00E5FF"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="420" y="36" fill="#FF512F" font-size="20" font-weight="bold" text-anchor="middle" letter-spacing="0.5">PARALLEL PLATE CAPACITOR WITH DIELECTRIC SLAB (Thickness t &lt; d)</text>

  <!-- Left Plate (+Q, +sigma) -->
  <rect x="140" y="70" width="22" height="240" rx="4" fill="#FF512F" stroke="#FFE0B2" stroke-width="2"/>
  <text x="120" y="195" fill="#FF512F" font-size="18" font-weight="bold" text-anchor="end">+Q (+&#963;)</text>
  <text x="151" y="105" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle">+</text>
  <text x="151" y="145" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle">+</text>
  <text x="151" y="185" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle">+</text>
  <text x="151" y="225" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle">+</text>
  <text x="151" y="265" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle">+</text>
  <text x="151" y="300" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle">+</text>

  <!-- Right Plate (-Q, -sigma) -->
  <rect x="678" y="70" width="22" height="240" rx="4" fill="#00E5FF" stroke="#E0F7FA" stroke-width="2"/>
  <text x="720" y="195" fill="#00E5FF" font-size="18" font-weight="bold" text-anchor="start">-Q (-&#963;)</text>
  <text x="689" y="105" fill="#000000" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="689" y="145" fill="#000000" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="689" y="185" fill="#000000" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="689" y="225" fill="#000000" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="689" y="265" fill="#000000" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="689" y="300" fill="#000000" font-size="18" font-weight="bold" text-anchor="middle">-</text>

  <!-- Dielectric Slab (Thickness t) -->
  <rect x="320" y="85" width="200" height="210" rx="8" fill="url(#slabGrad)" stroke="#38BDF8" stroke-width="2"/>
  <!-- Bound surface charges on slab -->
  <text x="332" y="125" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="332" y="165" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="332" y="205" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="332" y="245" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="332" y="280" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="305" y="100" fill="#F87171" font-size="13" font-weight="bold" text-anchor="end">-&#963;&#7522;</text>

  <text x="508" y="125" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="508" y="165" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="508" y="205" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="508" y="245" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="508" y="280" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="535" y="100" fill="#4ADE80" font-size="13" font-weight="bold" text-anchor="start">+&#963;&#7522;</text>

  <!-- Electric Field Vectors in Air (E0) -->
  <line x1="170" y1="140" x2="310" y2="140" stroke="#FF8A65" stroke-width="2.5" marker-end="url(#capArr)"/>
  <line x1="170" y1="240" x2="310" y2="240" stroke="#FF8A65" stroke-width="2.5" marker-end="url(#capArr)"/>
  <text x="240" y="130" fill="#FF8A65" font-size="15" font-weight="bold" text-anchor="middle">E&#8320; (Air)</text>

  <!-- Inside Dielectric (E = E0 / K) -->
  <line x1="345" y1="190" x2="495" y2="190" stroke="#FFFFFF" stroke-width="2.5" marker-end="url(#slabArr)"/>
  <text x="420" y="175" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle">E = E&#8320; / K</text>
  <text x="420" y="235" fill="#E0F2FE" font-size="14" font-weight="bold" text-anchor="middle">Dielectric (K &gt; 1)</text>

  <!-- Right Air Gap -->
  <line x1="530" y1="140" x2="670" y2="140" stroke="#FF8A65" stroke-width="2.5" marker-end="url(#capArr)"/>
  <line x1="530" y1="240" x2="670" y2="240" stroke="#FF8A65" stroke-width="2.5" marker-end="url(#capArr)"/>
  <text x="600" y="130" fill="#FF8A65" font-size="15" font-weight="bold" text-anchor="middle">E&#8320; (Air)</text>

  <!-- Dimension Lines -->
  <line x1="151" y1="335" x2="689" y2="335" stroke="#94A3B8" stroke-width="2"/>
  <line x1="151" y1="325" x2="151" y2="345" stroke="#94A3B8" stroke-width="2"/>
  <line x1="689" y1="325" x2="689" y2="345" stroke="#94A3B8" stroke-width="2"/>
  <text x="420" y="355" fill="#94A3B8" font-size="16" font-weight="bold" text-anchor="middle">Plate Separation (d)</text>

  <!-- Slab Thickness t -->
  <line x1="320" y1="65" x2="520" y2="65" stroke="#38BDF8" stroke-width="2"/>
  <line x1="320" y1="58" x2="320" y2="72" stroke="#38BDF8" stroke-width="2"/>
  <line x1="520" y1="58" x2="520" y2="72" stroke="#38BDF8" stroke-width="2"/>
  <text x="420" y="58" fill="#38BDF8" font-size="15" font-weight="bold" text-anchor="middle">Thickness (t)</text>

  <!-- Formula Summary Pill -->
  <rect x="220" y="365" width="400" height="28" rx="14" fill="rgba(255,81,47,0.15)" stroke="#FF512F" stroke-width="1.5"/>
  <text x="420" y="384" fill="#FF512F" font-size="14.5" font-weight="bold" text-anchor="middle">Capacitance: C = &#949;&#8320;A / [ (d - t) + t/K ]</text>
</svg>`;

// SVG 2: Series vs Parallel Combinations
const svgCombinations = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 440" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <defs>
    <linearGradient id="c1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF8A65"/>
      <stop offset="100%" stop-color="#FF512F"/>
    </linearGradient>
    <linearGradient id="c2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="c3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4ADE80"/>
      <stop offset="100%" stop-color="#16A34A"/>
    </linearGradient>
  </defs>

  <!-- Title -->
  <text x="420" y="34" fill="#FF512F" font-size="20" font-weight="bold" text-anchor="middle">COMBINATION OF CAPACITORS (SERIES VS PARALLEL)</text>

  <!-- Divider -->
  <line x1="420" y1="50" x2="420" y2="420" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- LEFT PANEL: SERIES -->
  <text x="210" y="70" fill="#FF8A65" font-size="18" font-weight="bold" text-anchor="middle">&#10148; SERIES COMBINATION (Same Q)</text>

  <!-- Wire & Battery -->
  <path d="M 60 170 L 110 170" fill="none" stroke="#FDE047" stroke-width="3"/>
  <path d="M 150 170 L 190 170" fill="none" stroke="#FDE047" stroke-width="3"/>
  <path d="M 230 170 L 270 170" fill="none" stroke="#FDE047" stroke-width="3"/>
  <path d="M 310 170 L 360 170" fill="none" stroke="#FDE047" stroke-width="3"/>
  <path d="M 60 170 L 60 270 L 180 270" fill="none" stroke="#FDE047" stroke-width="3"/>
  <path d="M 240 270 L 360 270 L 360 170" fill="none" stroke="#FDE047" stroke-width="3"/>

  <!-- Battery -->
  <line x1="200" y1="250" x2="200" y2="290" stroke="#4ADE80" stroke-width="4"/>
  <line x1="220" y1="260" x2="220" y2="280" stroke="#F87171" stroke-width="4"/>
  <text x="210" y="315" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">Voltage V</text>
  <text x="188" y="245" fill="#4ADE80" font-size="14" font-weight="bold">+</text>
  <text x="228" y="255" fill="#F87171" font-size="14" font-weight="bold">-</text>

  <!-- C1 Plates -->
  <line x1="110" y1="140" x2="110" y2="200" stroke="#FF512F" stroke-width="5"/>
  <line x1="150" y1="140" x2="150" y2="200" stroke="#FF512F" stroke-width="5"/>
  <text x="130" y="125" fill="#FF8A65" font-size="15" font-weight="bold" text-anchor="middle">C&#8321; (V&#8321;)</text>
  <text x="100" y="155" fill="#4ADE80" font-size="12" font-weight="bold">+q</text>
  <text x="158" y="155" fill="#F87171" font-size="12" font-weight="bold">-q</text>

  <!-- C2 Plates -->
  <line x1="190" y1="140" x2="190" y2="200" stroke="#38BDF8" stroke-width="5"/>
  <line x1="230" y1="140" x2="230" y2="200" stroke="#38BDF8" stroke-width="5"/>
  <text x="210" y="125" fill="#38BDF8" font-size="15" font-weight="bold" text-anchor="middle">C&#8322; (V&#8322;)</text>
  <text x="180" y="155" fill="#4ADE80" font-size="12" font-weight="bold">+q</text>
  <text x="238" y="155" fill="#F87171" font-size="12" font-weight="bold">-q</text>

  <!-- C3 Plates -->
  <line x1="270" y1="140" x2="270" y2="200" stroke="#4ADE80" stroke-width="5"/>
  <line x1="310" y1="140" x2="310" y2="200" stroke="#4ADE80" stroke-width="5"/>
  <text x="290" y="125" fill="#4ADE80" font-size="15" font-weight="bold" text-anchor="middle">C&#8323; (V&#8323;)</text>
  <text x="260" y="155" fill="#4ADE80" font-size="12" font-weight="bold">+q</text>
  <text x="318" y="155" fill="#F87171" font-size="12" font-weight="bold">-q</text>

  <!-- Series Box -->
  <rect x="40" y="345" width="340" height="70" rx="10" fill="rgba(255,81,47,0.12)" stroke="#FF512F" stroke-width="1.5"/>
  <text x="210" y="372" fill="#FFFFFF" font-size="14.5" font-weight="bold" text-anchor="middle">&#8226; Charge Q is constant across all</text>
  <text x="210" y="398" fill="#FF8A65" font-size="15.5" font-weight="bold" text-anchor="middle">1/C&#8347; = 1/C&#8321; + 1/C&#8322; + 1/C&#8323;</text>

  <!-- RIGHT PANEL: PARALLEL -->
  <text x="630" y="70" fill="#38BDF8" font-size="18" font-weight="bold" text-anchor="middle">&#10148; PARALLEL COMBINATION (Same V)</text>

  <!-- Parallel Wires -->
  <path d="M 500 240 L 460 240 L 460 300 L 600 300" fill="none" stroke="#FDE047" stroke-width="3"/>
  <path d="M 660 300 L 800 300 L 800 240 L 760 240" fill="none" stroke="#FDE047" stroke-width="3"/>

  <!-- Vertical buses -->
  <line x1="500" y1="120" x2="500" y2="240" stroke="#FDE047" stroke-width="3"/>
  <line x1="760" y1="120" x2="760" y2="240" stroke="#FDE047" stroke-width="3"/>

  <!-- Branch 1 (C1) -->
  <line x1="500" y1="120" x2="610" y2="120" stroke="#FDE047" stroke-width="3"/>
  <line x1="650" y1="120" x2="760" y2="120" stroke="#FDE047" stroke-width="3"/>
  <line x1="610" y1="100" x2="610" y2="140" stroke="#FF512F" stroke-width="5"/>
  <line x1="650" y1="100" x2="650" y2="140" stroke="#FF512F" stroke-width="5"/>
  <text x="630" y="92" fill="#FF8A65" font-size="14" font-weight="bold" text-anchor="middle">C&#8321; (q&#8321;)</text>

  <!-- Branch 2 (C2) -->
  <line x1="500" y1="180" x2="610" y2="180" stroke="#FDE047" stroke-width="3"/>
  <line x1="650" y1="180" x2="760" y2="180" stroke="#FDE047" stroke-width="3"/>
  <line x1="610" y1="160" x2="610" y2="200" stroke="#38BDF8" stroke-width="5"/>
  <line x1="650" y1="160" x2="650" y2="200" stroke="#38BDF8" stroke-width="5"/>
  <text x="630" y="172" fill="#38BDF8" font-size="14" font-weight="bold" text-anchor="middle">C&#8322; (q&#8322;)</text>

  <!-- Branch 3 (C3) -->
  <line x1="500" y1="240" x2="610" y2="240" stroke="#FDE047" stroke-width="3"/>
  <line x1="650" y1="240" x2="760" y2="240" stroke="#FDE047" stroke-width="3"/>
  <line x1="610" y1="220" x2="610" y2="260" stroke="#4ADE80" stroke-width="5"/>
  <line x1="650" y1="220" x2="650" y2="260" stroke="#4ADE80" stroke-width="5"/>
  <text x="630" y="232" fill="#4ADE80" font-size="14" font-weight="bold" text-anchor="middle">C&#8323; (q&#8323;)</text>

  <!-- Parallel Battery -->
  <line x1="620" y1="280" x2="620" y2="320" stroke="#4ADE80" stroke-width="4"/>
  <line x1="640" y1="290" x2="640" y2="310" stroke="#F87171" stroke-width="4"/>
  <text x="630" y="340" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">Voltage V (Across all)</text>

  <!-- Parallel Box -->
  <rect x="460" y="355" width="340" height="60" rx="10" fill="rgba(56,189,248,0.12)" stroke="#38BDF8" stroke-width="1.5"/>
  <text x="630" y="380" fill="#FFFFFF" font-size="14.5" font-weight="bold" text-anchor="middle">&#8226; Voltage V is identical across all</text>
  <text x="630" y="404" fill="#38BDF8" font-size="15.5" font-weight="bold" text-anchor="middle">C&#8346; = C&#8321; + C&#8322; + C&#8323;</text>
</svg>`;

// Read existing c12-phy-1.ts
const c12Path = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const rawFile = fs.readFileSync(c12Path, 'utf8');

const ovMatch = rawFile.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
const solMatch = rawFile.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);\s*export const c12Phy1Mcqs/);
const mcqMatch = rawFile.match(/export const c12Phy1Mcqs = ([\s\S]*?);?\s*$/);

let existingOverviewHtml = JSON.parse(ovMatch[1]);

// Find Diagram 20 Card from existing overview
const d20Start = existingOverviewHtml.indexOf('📸 Diagram 20:');
let d20CardHtml = "";
if (d20Start !== -1) {
  const cardContainerStart = existingOverviewHtml.lastIndexOf('<div style="background: rgba(15, 23, 42, 0.9);', d20Start);
  const cardContainerEnd = existingOverviewHtml.indexOf('</div>\n  </div>', d20Start) + 14;
  d20CardHtml = existingOverviewHtml.slice(cardContainerStart, cardContainerEnd);
} else {
  console.error("Diagram 20 card not found!");
}

// Locate where section 12 starts
const sec12Start = existingOverviewHtml.indexOf('12. Capacitors, Capacitance');
const h2Sec12Start = existingOverviewHtml.lastIndexOf('<h2', sec12Start);

// Base HTML before section 12
const baseOverviewHtml = existingOverviewHtml.slice(0, h2Sec12Start);

// Build Enhanced Section 12, 13, 14
const newSectionsHtml = `
  <!-- SECTION 12 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">12. Capacitors, Capacitance &amp; Parallel Plate Capacitor (With &amp; Without Dielectric Medium)</h2>

  <p>A <b>capacitor</b> (or condenser) is an electrical arrangement composed of two conducting plates separated by an insulating medium (vacuum, air, or a dielectric) that is engineered specifically to store electric charge and electrostatic potential energy in its localized electric field. When a potential difference <i>V</i> is applied across the plates, equal and opposite charges <i>+Q</i> and <i>-Q</i> accumulate on the inner conducting surfaces. Experiments confirm that the magnitude of charge <i>Q</i> stored is directly proportional to the potential difference <i>V</i> across the plates:</p>

  ${eqBox(`<b>Q &prop; V &nbsp;&implies;&nbsp; Q = C V &nbsp;&implies;&nbsp; C = ${frac('Q', 'V')}</b>`)}

  ${defBox('Capacitance &amp; SI Unit (Farad)', `
    <b>Capacitance (C):</b> The capacitance of a conductor or capacitor is defined as the ratio of the magnitude of electric charge on either plate to the electrostatic potential difference established between them.<br><br>
    <b>SI Unit:</b> <b>Farad (F)</b>, where 1 Farad = 1 Coulomb per Volt (1 C V<sup>-1</sup>). Since 1 Farad is an extraordinarily immense unit in practice, submultiples are standard in electrical engineering:
    <ul style="margin: 6px 0 0 18px; line-height: 1.6;">
      <li>Microfarad: 1 &mu;F = 10<sup>-6</sup> F</li>
      <li>Nanofarad: 1 nF = 10<sup>-9</sup> F</li>
      <li>Picofarad: 1 pF = 10<sup>-12</sup> F</li>
    </ul>
    <b>Dimensional Formula:</b> [C] = [Q] / [V] = [I T] / [M L<sup>2</sup> T<sup>-3</sup> I<sup>-1</sup>] = <b>[M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> I<sup>2</sup>]</b>.
  `)}

  ${analogyBox('The Flexible Water Tank Analogy', `
    Think of a capacitor as a cylindrical water tank and potential difference <i>V</i> as the water pressure (height of liquid column). The cross-sectional area of the tank is its <b>capacitance (C)</b>. A wider tank (larger <i>C</i>) stores a far greater volume of water <i>Q</i> for every unit increase in water level (voltage <i>V</i>). Inserting a dielectric material behaves like making the tank walls flexible and stretchable, enabling it to hold <i>K</i> times more charge at the exact same pressure!
  `)}

  <!-- USER-PROVIDED DIAGRAM 20 (HIGH RESOLUTION PRESERVED) -->
  ${d20CardHtml}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Principle of a Parallel Plate Capacitor</h3>
  <p>Consider an isolated conducting plate A charged to a positive potential <i>+V</i>. When an uncharged conducting plate B is placed close and parallel to plate A, electrostatic induction occurs: negative bound charges are induced on the near face of B (lowering the potential of A), while positive free charges are induced on the far face of B (raising the potential of A). When the outer face of plate B is connected to ground (earthed), all free positive charges flow into the earth. As a result, the potential of plate A drops drastically while its charge <i>Q</i> remains unchanged. To bring the potential of plate A back to its initial value, a large amount of additional charge can now be deposited on it. This establishes the fundamental principle: <i>the capacitance of a charged conductor is increased substantially by placing an earthed conductor in close proximity to it.</i></p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Capacitance of a Parallel Plate Capacitor (Without Dielectric / Air Medium)</h3>
  <p>Consider two large, plane, parallel conducting plates, each of cross-sectional area <i>A</i>, separated by a small distance <i>d</i> in vacuum or air. Let surface charge density on plate 1 be <i>+&sigma; = +Q / A</i> and on plate 2 be <i>-&sigma; = -Q / A</i>.</p>

  ${stepDerivationBox('Parallel Plate Capacitor in Vacuum/Air', `
    <b>Step 1 (Electric Field Regions):</b> By Gauss's Law, the electric fields in outer regions I (left of plate 1) and III (right of plate 2) cancel each other to zero:
    ${eqBox(`E<sub>I</sub> = ${frac('&sigma;', '2 &epsilon;<sub>0</sub>')} - ${frac('&sigma;', '2 &epsilon;<sub>0</sub>')} = 0, &nbsp;&nbsp;&nbsp; E<sub>III</sub> = 0`)}
    In the interior region II between the two plates, the fields due to both plates add constructively in the same direction (from positive to negative plate):
    ${eqBox(`E<sub>0</sub> = ${frac('&sigma;', '2 &epsilon;<sub>0</sub>')} + ${frac('&sigma;', '2 &epsilon;<sub>0</sub>')} = ${frac('&sigma;', '&epsilon;<sub>0</sub>')} = ${frac('Q', '&epsilon;<sub>0</sub> A')}`)}

    <b>Step 2 (Potential Difference):</b> Since the electric field <i>E<sub>0</sub></i> is uniform throughout the region of separation <i>d</i>, the potential difference <i>V<sub>0</sub></i> is:
    ${eqBox(`V<sub>0</sub> = E<sub>0</sub> &sdot; d = ${frac('Q d', '&epsilon;<sub>0</sub> A')}`)}

    <b>Step 3 (Capacitance Formulation):</b> By definition of capacitance:
    ${eqBox(`C<sub>0</sub> = ${frac('Q', 'V<sub>0</sub>')} = ${frac('Q', frac('Q d', '&epsilon;<sub>0</sub> A'))} &implies; <b>C<sub>0</sub> = ${frac('&epsilon;<sub>0</sub> A', 'd')}</b>`)}
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Capacitance with Dielectric Medium Completely Filling the Plates</h3>
  <p>When an insulating dielectric medium of dielectric constant (relative permittivity) <i>K</i> is inserted so that it completely fills the space between the plates, electric polarization takes place. The electric field induces bound surface charges <i>+&sigma;<sub>p</sub></i> and <i>-&sigma;<sub>p</sub></i> on the faces of the dielectric slab, creating an internal opposing electric field <i>E<sub>p</sub></i>. The net electric field inside the dielectric is reduced by a factor of <i>K</i>:</p>

  ${eqBox(`E = E<sub>0</sub> - E<sub>p</sub> = ${frac('E<sub>0</sub>', 'K')} &implies; V = E d = ${frac('V<sub>0</sub>', 'K')}`)}

  <p>Consequently, the capacitance of the capacitor increases by a factor of <i>K</i>:</p>

  ${eqBox(`C = ${frac('Q', 'V')} = ${frac('Q', frac('V<sub>0</sub>', 'K'))} = K &sdot; ${frac('Q', 'V<sub>0</sub>')} &implies; <b>C = K C<sub>0</sub> = ${frac('K &epsilon;<sub>0</sub> A', 'd')} = ${frac('&epsilon; A', 'd')}</b>`)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Capacitance with a Dielectric Slab of Thickness t &lt; d (Partial Filling)</h3>
  <p>Consider a parallel plate capacitor of plate area <i>A</i> and separation <i>d</i>. Suppose a dielectric slab of thickness <i>t</i> (where <i>t &lt; d</i>) and dielectric constant <i>K</i> is placed between the plates.</p>

  ${stepDerivationBox('Parallel Plate Capacitor with Dielectric Slab of Thickness t', `
    <b>Step 1 (Electric Field Distribution):</b>
    <ul style="margin: 6px 0 6px 18px;">
      <li>In the air space of thickness <b>(d - t)</b>, the electric field is <b>E<sub>0</sub> = ${frac('&sigma;', '&epsilon;<sub>0</sub>')} = ${frac('Q', '&epsilon;<sub>0</sub> A')}</b>.</li>
      <li>Inside the dielectric slab of thickness <b>t</b>, the reduced electric field is <b>E = ${frac('E<sub>0</sub>', 'K')}</b>.</li>
    </ul>

    <b>Step 2 (Total Potential Difference V):</b>
    ${eqBox(`V = E<sub>0</sub>(d - t) + E &sdot; t = E<sub>0</sub>(d - t) + ${frac('E<sub>0</sub>', 'K')} t = E<sub>0</sub> \\left[ (d - t) + ${frac('t', 'K')} \\right]`)}
    Substituting <i>E<sub>0</sub> = Q / (&epsilon;<sub>0</sub> A)</i>:
    ${eqBox(`V = ${frac('Q', '&epsilon;<sub>0</sub> A')} \\left[ (d - t) + ${frac('t', 'K')} \\right] = ${frac('Q', '&epsilon;<sub>0</sub> A')} \\left[ d - t \\left(1 - ${frac('1', 'K')}\\right) \\right]`)}

    <b>Step 3 (Capacitance C):</b>
    ${eqBox(`C = ${frac('Q', 'V')} = <b>${frac('&epsilon;<sub>0</sub> A', 'd - t + ' + frac('t', 'K'))} = ${frac('&epsilon;<sub>0</sub> A', 'd - t \\left(1 - ' + frac('1', 'K') + '\\right)')}</b>`)}
  `)}

  ${svgCard('PARALLEL PLATE CAPACITOR WITH PARTIAL DIELECTRIC SLAB', 'Detailed physical layout showing air region field E₀, slab field E = E₀/K, bound charges ±σₚ, and plate separation geometry.', svgDielectricSlab)}

  <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 81, 47, 0.3); border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 16px;">🔍 Special Boundary Cases:</b>
    <ol style="margin: 8px 0 0 20px; line-height: 1.8; color: #E2E8F0;">
      <li><b>Case 1 (Complete Filling, t = d):</b> When the dielectric slab fills the entire space, <i>t = d</i>:
        <div style="color: #4ADE80; font-weight: bold; margin: 4px 0;">C = &epsilon;<sub>0</sub> A / [ d - d + d/K ] = K &epsilon;<sub>0</sub> A / d = K C<sub>0</sub>.</div>
      </li>
      <li><b>Case 2 (Conducting / Metallic Slab of Thickness t, K = &infin;):</b> Inside a conductor in electrostatic equilibrium, electric field <i>E = 0</i> (which corresponds to <i>K = &infin;</i>). Therefore:
        <div style="color: #38BDF8; font-weight: bold; margin: 4px 0;">C = ${frac('&epsilon;<sub>0</sub> A', 'd - t + ' + frac('t', '&infin;'))} &implies; <b>C = ${frac('&epsilon;<sub>0</sub> A', 'd - t')}</b>.</div>
        <i>(A conducting slab reduces the effective plate separation from d to d - t).</i>
      </li>
      <li><b>Case 3 (Multiple Dielectric Slabs of thicknesses t₁, t₂, ... and constants K₁, K₂, ...):</b>
        <div style="color: #FDE047; font-weight: bold; margin: 4px 0;">C = ${frac('&epsilon;<sub>0</sub> A', 'd - &Sigma; t<sub>i</sub> + &Sigma; ' + frac('t<sub>i</sub>', 'K<sub>i</sub>'))}.</div>
      </li>
    </ol>
  </div>

  ${solvedExampleBox(
    'Capacitance with Mica Slab Insertion',
    'A parallel plate capacitor with air between plates has a capacitance of 8 pF. The distance between the plates is d = 4 mm. If a mica slab of thickness t = 3 mm and dielectric constant K = 6 is inserted between the plates, calculate its new capacitance.',
    `<b>Given:</b> C<sub>0</sub> = 8 pF = 8 &times; 10<sup>-12</sup> F, d = 4 mm, t = 3 mm, K = 6.<br>
     <b>Formula:</b> C = &epsilon;<sub>0</sub> A / [ d - t + t/K ].<br>
     We know &epsilon;<sub>0</sub> A / d = C<sub>0</sub> &implies; &epsilon;<sub>0</sub> A = C<sub>0</sub> &sdot; d = 8 pF &times; 4 mm = 32 pF&sdot;mm.<br>
     Effective denominator: d - t + t/K = 4 - 3 + 3/6 = 1 + 0.5 = 1.5 mm.<br>
     <b>Calculation:</b> C = (32 pF&sdot;mm) / (1.5 mm) = <b>21.33 pF</b>.<br>
     <b>Result:</b> The capacitance increases by a factor of 2.67 from 8 pF to 21.33 pF.`
  )}

  <!-- SECTION 13 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">13. Combination of Capacitors in Series and in Parallel</h2>

  <p>In electrical circuits, individual capacitors are combined in specific configurations to achieve a desired equivalent capacitance or to distribute operating voltages safely across multiple components.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Capacitors in Series Combination</h3>
  <p>Two or more capacitors are connected in <b>series</b> when they are joined end-to-end sequentially along a single conduction path so that the second plate of the first capacitor is connected to the first plate of the second capacitor, and so on.</p>

  ${stepDerivationBox('Equivalent Capacitance of Series Combination (1/Cₛ = 1/C₁ + 1/C₂ + 1/C₃)', `
    <b>Fundamental Physical Conditions for Series:</b>
    <ol style="margin: 6px 0 6px 18px;">
      <li><b>Identical Charge (Q):</b> By electrostatic induction, the charge <i>Q</i> on each and every capacitor in the series chain is identical:
        ${eqBox(`Q<sub>1</sub> = Q<sub>2</sub> = Q<sub>3</sub> = ... = Q`)}
      </li>
      <li><b>Potential Difference Divides:</b> The total applied potential difference <i>V</i> from the source equals the sum of the potential drops across each capacitor:
        ${eqBox(`V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub>`)}
      </li>
    </ol>

    <b>Step-by-Step Derivation:</b><br>
    From the definition of capacitance <i>V = Q / C</i>:
    ${eqBox(`V<sub>1</sub> = ${frac('Q', 'C<sub>1</sub>')}, &nbsp;&nbsp; V<sub>2</sub> = ${frac('Q', 'C<sub>2</sub>')}, &nbsp;&nbsp; V<sub>3</sub> = ${frac('Q', 'C<sub>3</sub>')}`)}
    Substituting into the total voltage equation:
    ${eqBox(`V = ${frac('Q', 'C<sub>1</sub>')} + ${frac('Q', 'C<sub>2</sub>')} + ${frac('Q', 'C<sub>3</sub>')} = Q \\left[ ${frac('1', 'C<sub>1</sub>')} + ${frac('1', 'C<sub>2</sub>')} + ${frac('1', 'C<sub>3</sub>')} \\right]`)}
    If <i>C<sub>s</sub></i> is the equivalent capacitance of the series combination, then <i>V = Q / C<sub>s</sub></i>:
    ${eqBox(`${frac('Q', 'C<sub>s</sub>')} = Q \\left[ ${frac('1', 'C<sub>1</sub>')} + ${frac('1', 'C<sub>2</sub>')} + ${frac('1', 'C<sub>3</sub>')} \\right] &implies; <b>${frac('1', 'C<sub>s</sub>')} = ${frac('1', 'C<sub>1</sub>')} + ${frac('1', 'C<sub>2</sub>')} + ${frac('1', 'C<sub>3</sub>')}</b>`)}
  `)}

  <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 81, 47, 0.3); border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 16px;">⚡ Crucial Series Combination Properties:</b>
    <ul style="margin: 8px 0 0 20px; line-height: 1.8; color: #E2E8F0;">
      <li><b>Two Capacitors Only:</b> <b>C<sub>s</sub> = ${frac('C<sub>1</sub> C<sub>2</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}</b> (Product over Sum).</li>
      <li><b>n Identical Capacitors (each of capacitance C):</b> <b>C<sub>s</sub> = ${frac('C', 'n')}</b>.</li>
      <li><b>Potential Division Formula (for 2 series capacitors):</b>
        ${eqBox(`V<sub>1</sub> = \\left(${frac('C<sub>2</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}\\right) V, &nbsp;&nbsp;&nbsp; V<sub>2</sub> = \\left(${frac('C<sub>1</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}\\right) V`)}
        <i>(The smaller capacitor withstands the larger potential difference!)</i>
      </li>
      <li><b>Important Rule:</b> The equivalent capacitance <i>C<sub>s</sub></i> is always strictly <b>smaller than the smallest individual capacitance</b> in the series combination.</li>
    </ul>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Capacitors in Parallel Combination</h3>
  <p>Capacitors are connected in <b>parallel</b> when the positive plates of all capacitors are connected to one common node/terminal, and the negative plates are connected to another common node/terminal.</p>

  ${stepDerivationBox('Equivalent Capacitance of Parallel Combination (Cₚ = C₁ + C₂ + C₃)', `
    <b>Fundamental Physical Conditions for Parallel:</b>
    <ol style="margin: 6px 0 6px 18px;">
      <li><b>Identical Potential Difference (V):</b> The potential difference across every capacitor in parallel is identical and equals the terminal supply voltage <i>V</i>:
        ${eqBox(`V<sub>1</sub> = V<sub>2</sub> = V<sub>3</sub> = ... = V`)}
      </li>
      <li><b>Charge Divides:</b> The total charge <i>Q</i> drawn from the battery is distributed among the individual branches:
        ${eqBox(`Q = Q<sub>1</sub> + Q<sub>2</sub> + Q<sub>3</sub>`)}
      </li>
    </ol>

    <b>Step-by-Step Derivation:</b><br>
    Since <i>Q = C V</i> for each branch:
    ${eqBox(`Q<sub>1</sub> = C<sub>1</sub> V, &nbsp;&nbsp; Q<sub>2</sub> = C<sub>2</sub> V, &nbsp;&nbsp; Q<sub>3</sub> = C<sub>3</sub> V`)}
    Substituting into the total charge equation:
    ${eqBox(`Q = C<sub>1</sub> V + C<sub>2</sub> V + C<sub>3</sub> V = (C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub>) V`)}
    If <i>C<sub>p</sub></i> is the equivalent capacitance of the parallel group, then <i>Q = C<sub>p</sub> V</i>:
    ${eqBox(`C<sub>p</sub> V = (C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub>) V &implies; <b>C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub></b>`)}
  `)}

  <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 81, 47, 0.3); border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 16px;">⚡ Crucial Parallel Combination Properties:</b>
    <ul style="margin: 8px 0 0 20px; line-height: 1.8; color: #E2E8F0;">
      <li><b>n Identical Capacitors (each of capacitance C):</b> <b>C<sub>p</sub> = n &sdot; C</b>.</li>
      <li><b>Charge Division Formula (for 2 parallel capacitors):</b>
        ${eqBox(`Q<sub>1</sub> = \\left(${frac('C<sub>1</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}\\right) Q, &nbsp;&nbsp;&nbsp; Q<sub>2</sub> = \\left(${frac('C<sub>2</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}\\right) Q`)}
        <i>(The larger capacitor stores the larger fraction of total charge!)</i>
      </li>
      <li><b>Important Rule:</b> The equivalent capacitance <i>C<sub>p</sub></i> is always strictly <b>greater than the largest individual capacitance</b> in the parallel combination.</li>
    </ul>
  </div>

  ${svgCard('CIRCUIT TOPOLOGIES: SERIES VS PARALLEL CAPACITOR NETWORKS', 'Comparative schematic diagram showing charge flow and potential distribution in Series (identical Q, divided V) versus Parallel (identical V, divided Q) configurations.', svgCombinations)}

  <!-- COMPARISON TABLE: SERIES VS PARALLEL -->
  <div style="overflow-x: auto; margin: 24px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px; background: #0B0F19; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,81,47,0.3);">
      <thead>
        <tr style="background: rgba(255,81,47,0.25); color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F;">
          <th style="padding: 12px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Feature / Parameter</th>
          <th style="padding: 12px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Series Combination</th>
          <th style="padding: 12px 14px;">Parallel Combination</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">1. Charge (Q)</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);"><b>Same</b> across every capacitor (Q₁ = Q₂ = Q)</td>
          <td style="padding: 10px 14px;"><b>Divides:</b> Q = Q₁ + Q₂ + ... + Qₙ</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">2. Potential Difference (V)</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);"><b>Divides:</b> V = V₁ + V₂ + ... + Vₙ</td>
          <td style="padding: 10px 14px;"><b>Same</b> across every capacitor (V₁ = V₂ = V)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">3. Equivalent Capacitance</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);"><b>1/Cₛ = 1/C₁ + 1/C₂ + ... + 1/Cₙ</b></td>
          <td style="padding: 10px 14px;"><b>Cₚ = C₁ + C₂ + ... + Cₙ</b></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">4. n Identical Capacitors</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Cₛ = C / n</td>
          <td style="padding: 10px 14px;">Cₚ = n &sdot; C</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">5. Magnitude of C_eq</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Less than smallest capacitor (Cₛ &lt; C_min)</td>
          <td style="padding: 10px 14px;">Greater than largest capacitor (Cₚ &gt; C_max)</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">6. Primary Objective</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">To operate on high voltages safely</td>
          <td style="padding: 10px 14px;">To maximize total charge storage at given voltage</td>
        </tr>
      </tbody>
    </table>
  </div>

  ${solvedExampleBox(
    'Mixed Series-Parallel Network Equivalent Capacitance',
    'Three capacitors of capacitances 2 &mu;F, 3 &mu;F, and 6 &mu;F are given. Find the equivalent capacitance when (a) they are all connected in series, (b) they are all connected in parallel, and (c) 2 &mu;F and 3 &mu;F are connected in parallel and the combination is connected in series with the 6 &mu;F capacitor.',
    `<b>(a) In Series:</b> 1/C<sub>s</sub> = 1/2 + 1/3 + 1/6 = (3 + 2 + 1) / 6 = 6/6 = 1 &mu;F<sup>-1</sup> &implies; <b>C<sub>s</sub> = 1 &mu;F</b>.<br>
     <b>(b) In Parallel:</b> C<sub>p</sub> = 2 + 3 + 6 = <b>11 &mu;F</b>.<br>
     <b>(c) Mixed:</b> Parallel branch C' = 2 + 3 = 5 &mu;F. Now C' in series with 6 &mu;F: C<sub>eq</sub> = (5 &times; 6) / (5 + 6) = <b>30/11 &mu;F &approx; 2.73 &mu;F</b>.`
  )}

  <!-- SECTION 14 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">14. Energy Stored in a Capacitor, Energy Density &amp; Loss of Energy on Sharing Charges (Formulae Only)</h2>

  <p><i>(Note as per official syllabus: No mathematical derivation required; complete formulae and physical concepts only).</i></p>

  <p>When a capacitor is charged by a battery, work is done by the charging source against the electrostatic repulsive force of the charges already accumulated on the plates. This work is stored entirely as <b>electrostatic potential energy (U)</b> in the electric field localized within the dielectric or vacuum volume separating the plates.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Formulae for Energy Stored in a Charged Capacitor</h3>
  <p>The total electrostatic potential energy <i>U</i> stored in a capacitor of capacitance <i>C</i> holding charge <i>Q</i> at potential difference <i>V</i> can be expressed in three equivalent mathematical forms:</p>

  ${eqBox(`<b>U = ${frac('1', '2')} C V<sup>2</sup> = ${frac('Q<sup>2</sup>', '2 C')} = ${frac('1', '2')} Q V</b>`)}

  ${examTrapBox('The 50% Energy Loss Mystery During Charging', `
    <b>Question:</b> When a battery of electromotive force <i>V</i> charges a capacitor to charge <i>Q</i>, the work performed by the battery is <b>W = Q V</b>. Why is the energy stored in the capacitor only <b>U = &frac12; Q V</b>?<br><br>
    <b>Explanation:</b> Exactly <b>50% of the total energy supplied by the battery (W / 2 = &frac12; Q V) is unconditionally dissipated as heat</b> in the connecting circuit wires and emitted as electromagnetic radiation during the charging transient current. This 50% energy loss occurs regardless of how small or zero the resistance <i>R</i> of the connecting wires might be!
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Electrostatic Energy Density (u)</h3>
  <p><b>Energy density (u)</b> is defined as the electrostatic potential energy stored per unit volume in the electric field between the plates of a capacitor.</p>

  ${eqBox(`<b>u = ${frac('Total Stored Energy (U)', 'Volume of Space (A &sdot; d)')} = ${frac('1', '2')} &epsilon;<sub>0</sub> E<sup>2</sup></b> &nbsp;&nbsp;&nbsp; \\text{(in vacuum/air)}`)}

  <p>In a dielectric medium of relative permittivity <i>K</i> (dielectric constant) and permittivity <i>&epsilon; = K &epsilon;<sub>0</sub></i>:</p>

  ${eqBox(`<b>u = ${frac('1', '2')} K &epsilon;<sub>0</sub> E<sup>2</sup> = ${frac('1', '2')} &epsilon; E<sup>2</sup></b>`)}

  <ul style="margin: 8px 0 0 20px; line-height: 1.8; color: #E2E8F0;">
    <li><b>SI Unit of Energy Density:</b> <b>J m<sup>-3</sup></b> (Joules per cubic meter) or <b>N m<sup>-2</sup></b> (Pascal).</li>
    <li><b>Dimensional Formula:</b> [u] = [Work / Volume] = [M L<sup>2</sup> T<sup>-2</sup>] / [L<sup>3</sup>] = <b>[M L<sup>-1</sup> T<sup>-2</sup>]</b> (same dimensions as pressure and stress).</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Redistribution of Charges, Common Potential &amp; Energy Loss on Sharing</h3>
  <p>When two insulated conductors or capacitors of capacitances <i>C<sub>1</sub></i> and <i>C<sub>2</sub></i> charged to different initial potentials <i>V<sub>1</sub></i> and <i>V<sub>2</sub></i> are connected together by a conducting wire, positive charge flows from the conductor at higher potential to the one at lower potential until both attain a common potential <i>V</i>.</p>

  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 10px; padding: 16px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16px;">📌 Key Formulae for Sharing of Charges:</b>
    <ol style="margin: 8px 0 0 20px; line-height: 1.8; color: #FFFFFF;">
      <li><b>Common Potential (V):</b> By conservation of total electric charge:
        ${eqBox(`V = ${frac('Total Initial Charge', 'Total Capacitance')} = ${frac('Q<sub>1</sub> + Q<sub>2</sub>', 'C<sub>1</sub> + C<sub>2</sub>')} = <b>${frac('C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}</b>`)}
      </li>
      <li><b>Charges After Sharing (Q₁', Q₂'):</b>
        ${eqBox(`Q<sub>1</sub>' = C<sub>1</sub> V = \\left(${frac('C<sub>1</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}\\right) (Q<sub>1</sub> + Q<sub>2</sub>), &nbsp;&nbsp;&nbsp; Q<sub>2</sub>' = C<sub>2</sub> V = \\left(${frac('C<sub>2</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}\\right) (Q<sub>1</sub> + Q<sub>2</sub>)`)}
        <i>(Charges distribute directly in the ratio of their capacitances: Q₁' / Q₂' = C₁ / C₂).</i>
      </li>
      <li><b>Loss of Electrostatic Energy on Sharing (&Delta;U):</b>
        ${eqBox(`\\Delta U = U_{\\text{initial}} - U_{\\text{final}} = <b>${frac('C<sub>1</sub> C<sub>2</sub> (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup>', '2 (C<sub>1</sub> + C<sub>2</sub>)')}</b>`)}
        <div style="color: #4ADE80; font-size: 14.5px; margin-top: 6px;">
          💡 <b>Physical Significance:</b> Since <i>(V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup> &ge; 0</i> always, <b>&Delta;U is always positive</b> (&Delta;U &gt; 0). This proves that electrostatic potential energy is strictly lost as heat in the connecting wire and spark/radiation during charge equalization.
        </div>
      </li>
    </ol>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Master Reference Table: Effect of Dielectric Slab (K) Under Two Distinct Conditions</h3>
  <p>The insertion of a dielectric slab of constant <i>K</i> into a charged parallel plate capacitor produces completely different physical outcomes depending on whether the battery remains connected or is disconnected before slab insertion:</p>

  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px; background: #0B0F19; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,81,47,0.3);">
      <thead>
        <tr style="background: rgba(255,81,47,0.25); color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F;">
          <th style="padding: 12px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Physical Quantity</th>
          <th style="padding: 12px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Case 1: Battery Disconnected (Charge Q Constant)</th>
          <th style="padding: 12px 14px;">Case 2: Battery Connected (Voltage V Constant)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">1. Capacitance (C)</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Increases K times (C' = K C₀)</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold;">Increases K times (C' = K C₀)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">2. Charge (Q)</td>
          <td style="padding: 10px 14px; color: #FDE047; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Remains Constant (Q' = Q₀)</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold;">Increases K times (Q' = K Q₀)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">3. Potential Difference (V)</td>
          <td style="padding: 10px 14px; color: #F87171; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Decreases (V' = V₀ / K)</td>
          <td style="padding: 10px 14px; color: #FDE047; font-weight: bold;">Remains Constant (V' = V₀)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">4. Electric Field (E)</td>
          <td style="padding: 10px 14px; color: #F87171; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Decreases (E' = E₀ / K)</td>
          <td style="padding: 10px 14px; color: #FDE047; font-weight: bold;">Remains Constant (E' = E₀)</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">5. Stored Energy (U)</td>
          <td style="padding: 10px 14px; color: #F87171; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Decreases (U' = U₀ / K)</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold;">Increases K times (U' = K U₀)</td>
        </tr>
      </tbody>
    </table>
  </div>

  ${solvedExampleBox(
    'Energy Loss on Connecting Two Charged Capacitors',
    'A 600 pF capacitor is charged by a 200 V supply. It is then disconnected from the supply and connected in parallel to another uncharged 600 pF capacitor. How much electrostatic energy is lost in the process?',
    `<b>Given:</b> C<sub>1</sub> = 600 pF = 600 &times; 10<sup>-12</sup> F, V<sub>1</sub> = 200 V.<br>
     Second capacitor: C<sub>2</sub> = 600 pF, V<sub>2</sub> = 0 V.<br>
     <b>Initial Energy:</b> U<sub>initial</sub> = &frac12; C<sub>1</sub> V<sub>1</sub><sup>2</sup> = &frac12; &times; (600 &times; 10<sup>-12</sup>) &times; (200)<sup>2</sup> = 1.2 &times; 10<sup>-5</sup> J.<br>
     <b>Common Potential:</b> V = (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>) = (600 &times; 200 + 0) / (600 + 600) = 100 V.<br>
     <b>Final Total Energy:</b> U<sub>final</sub> = &frac12; (C<sub>1</sub> + C<sub>2</sub>) V<sup>2</sup> = &frac12; &times; (1200 &times; 10<sup>-12</sup>) &times; (100)<sup>2</sup> = 0.6 &times; 10<sup>-5</sup> J.<br>
     <b>Energy Loss:</b> &Delta;U = U<sub>initial</sub> - U<sub>final</sub> = (1.2 - 0.6) &times; 10<sup>-5</sup> J = <b>0.6 &times; 10<sup>-5</sup> J (or 6 &mu;J)</b>.<br>
     <i>(Direct Formula Verification: &Delta;U = [ C₁ C₂ (V₁ - V₂)² ] / [ 2 (C₁ + C₂) ] = [ (600 &times; 600 &times; 200²) / (2 &times; 1200) ] &times; 10<sup>-12</sup> = 6 &times; 10<sup>-6</sup> J = 6 &mu;J).</i>`
  )}

</div>
`;

const finalOverviewHtml = baseOverviewHtml + newSectionsHtml;

// Write back to c12-phy-1.ts
const newFileCode = `// Class 12 Physics Unit I: Electrostatics (JKBOSE / NCERT Official Syllabus - 09 Marks)
// Comprehensive Deep Reference Book Standard (Pradeep's / S.L. Arora) with 5-Layer Topic Breakdown

export const c12Phy1HtmlOverview = ${JSON.stringify(finalOverviewHtml)};

export const c12Phy1HtmlSolutions = ${solMatch[1]};

export const c12Phy1Mcqs = ${mcqMatch[1]};
`;

fs.writeFileSync(c12Path, newFileCode, 'utf8');
console.log("Successfully rebuilt c12-phy-1.ts with complete, high-yield capacitor sections and SVGs!");
