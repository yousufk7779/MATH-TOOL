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
    <b style="color: #10B981; font-size: 16.5px; display: block; margin-bottom: 6px;">💡 REAL-WORLD INTUITION & ANALOGY: ${title}</b>
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
    <b style="color: #EF4444; font-size: 16.5px; display: block; margin-bottom: 6px;">⚠️ BOARD EXAM TRAP & COMMON MISCONCEPTION: ${title}</b>
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

// ==========================================
// SVG 1: Partial Dielectric Slab in Capacitor
// ==========================================
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
  <!-- Left face of slab: -q_p (-sigma_p) -->
  <text x="332" y="125" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="332" y="165" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="332" y="205" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="332" y="245" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="332" y="280" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">-</text>
  <text x="305" y="100" fill="#F87171" font-size="13" font-weight="bold" text-anchor="end">-&#963;&#7522;</text>

  <!-- Right face of slab: +q_p (+sigma_p) -->
  <text x="508" y="125" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="508" y="165" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="508" y="205" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="508" y="245" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="508" y="280" fill="#FFFFFF" font-size="15" font-weight="bold" text-anchor="middle">+</text>
  <text x="535" y="100" fill="#4ADE80" font-size="13" font-weight="bold" text-anchor="start">+&#963;&#7522;</text>

  <!-- Electric Field Vectors in Air (E0) -->
  <!-- Left Air Gap -->
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
  <!-- Plate Separation d -->
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

// ==========================================
// SVG 2: Series vs Parallel Combinations
// ==========================================
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

  <!-- ================= LEFT PANEL: SERIES ================= -->
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

  <!-- ================= RIGHT PANEL: PARALLEL ================= -->
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

console.log("SVGs successfully defined.");
