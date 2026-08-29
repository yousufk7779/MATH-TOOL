const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'rebuild_chem1_exact_physics_match.js');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Replace 9 Types Table with Responsive Structured Cards (100% Visible on all mobile screens)
const newTypesSection = `
  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <!-- Gaseous Solutions -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(56, 189, 248, 0.4); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
      <div style="background: rgba(56, 189, 248, 0.15); padding: 9px 14px; font-weight: bold; color: #38BDF8; font-size: 15px; border-bottom: 1px solid rgba(56, 189, 248, 0.2);">
        ☁️ 1. Gaseous Solutions (Solvent: Gas)
      </div>
      <div style="padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; font-size: 14.5px; line-height: 1.6;">
        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 6px;">
          <b style="color: #38BDF8;">• Gas in Gas:</b> <span style="color: #FFFFFF;">Mixture of dinitrogen (N<sub>2</sub>) and dioxygen (O<sub>2</sub>) gases (Air).</span>
        </div>
        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 6px;">
          <b style="color: #38BDF8;">• Liquid in Gas:</b> <span style="color: #FFFFFF;">Chloroform (CHCl<sub>3</sub>) vapours mixed with nitrogen gas; Humidity in air.</span>
        </div>
        <div>
          <b style="color: #38BDF8;">• Solid in Gas:</b> <span style="color: #FFFFFF;">Camphor vapours in nitrogen gas; Iodine vapours in air.</span>
        </div>
      </div>
    </div>

    <!-- Liquid Solutions -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(74, 222, 128, 0.4); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
      <div style="background: rgba(74, 222, 128, 0.15); padding: 9px 14px; font-weight: bold; color: #4ADE80; font-size: 15px; border-bottom: 1px solid rgba(74, 222, 128, 0.2);">
        💧 2. Liquid Solutions (Solvent: Liquid)
      </div>
      <div style="padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; font-size: 14.5px; line-height: 1.6;">
        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 6px;">
          <b style="color: #4ADE80;">• Gas in Liquid:</b> <span style="color: #FFFFFF;">Oxygen dissolved in water (sustains aquatic life); CO<sub>2</sub> in soda water.</span>
        </div>
        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 6px;">
          <b style="color: #4ADE80;">• Liquid in Liquid:</b> <span style="color: #FFFFFF;">Ethanol dissolved in water; Acetic acid in water (Vinegar).</span>
        </div>
        <div>
          <b style="color: #4ADE80;">• Solid in Liquid:</b> <span style="color: #FFFFFF;">Glucose dissolved in water; Sodium chloride (NaCl) in water.</span>
        </div>
      </div>
    </div>

    <!-- Solid Solutions -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(253, 200, 48, 0.4); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
      <div style="background: rgba(253, 200, 48, 0.15); padding: 9px 14px; font-weight: bold; color: #FDC830; font-size: 15px; border-bottom: 1px solid rgba(253, 200, 48, 0.2);">
        🪙 3. Solid Solutions (Solvent: Solid)
      </div>
      <div style="padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; font-size: 14.5px; line-height: 1.6;">
        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 6px;">
          <b style="color: #FDC830;">• Gas in Solid:</b> <span style="color: #FFFFFF;">Solution of Hydrogen (H<sub>2</sub>) gas in Palladium metal (occlusion).</span>
        </div>
        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 6px;">
          <b style="color: #FDC830;">• Liquid in Solid:</b> <span style="color: #FFFFFF;">Amalgam of mercury (liquid Hg) with sodium (solid Na metal).</span>
        </div>
        <div>
          <b style="color: #FDC830;">• Solid in Solid:</b> <span style="color: #FFFFFF;">Copper dissolved in Gold (22-Karat Gold); Brass (Cu + Zn).</span>
        </div>
      </div>
    </div>
  </div>`;

// Replace Section 1 Table
code = code.replace(
  /<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 18px 0; border-radius: 8px; border: 1px solid rgba\(255,64,129,0.35\);">\s*<table style="min-width: 580px; width: 100%; border-collapse: collapse; text-align: left; font-size: 14.5px; background: #0B0F19;">[\s\S]*?<\/table>\s*<\/div>/,
  newTypesSection
);

// 2. Replace Comparison Table with Responsive Comparative Cards (100% Visible on all mobile screens)
const newComparisonSection = `
  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <!-- Card 1: Ideal Solutions -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(253, 200, 48, 0.4); border-left: 5px solid #FDC830; border-radius: 8px; padding: 14px 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
      <div style="color: #FDC830; font-weight: bold; font-size: 16px; margin-bottom: 8px;">⭐ 1. Ideal Solutions (Strictly Obeys Raoult's Law)</div>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.7;">
        • <b>Intermolecular Forces:</b> F<sub>A-B</sub> = F<sub>A-A</sub> = F<sub>B-B</sub> (Identical molecular attraction)<br>
        • <b>Raoult's Law:</b> p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> &nbsp;|&nbsp; p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub> &nbsp;|&nbsp; p<sub>total</sub> = p<sub>A</sub> + p<sub>B</sub><br>
        • <b>Thermodynamics:</b> &Delta;H<sub>mix</sub> = 0 (No enthalpy change) &nbsp;|&nbsp; &Delta;V<sub>mix</sub> = 0 (No volume change)<br>
        • <b>Azeotropes:</b> Does not form any constant boiling azeotrope<br>
        • <b>Representative Systems:</b> Benzene + Toluene, n-Hexane + n-Heptane, Bromoethane + Chloroethane
      </div>
    </div>

    <!-- Card 2: Positive Deviation -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(248, 113, 113, 0.4); border-left: 5px solid #F87171; border-radius: 8px; padding: 14px 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
      <div style="color: #F87171; font-weight: bold; font-size: 16px; margin-bottom: 8px;">📈 2. Positive Deviation from Raoult's Law</div>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.7;">
        • <b>Intermolecular Forces:</b> F<sub>A-B</sub> &lt; F<sub>A-A</sub>, F<sub>B-B</sub> (Weaker attractions &rarr; higher escaping tendency)<br>
        • <b>Vapour Pressure:</b> p<sub>total</sub> &gt; p<sub>A</sub>&deg; &chi;<sub>A</sub> + p<sub>B</sub>&deg; &chi;<sub>B</sub> (Higher than ideal)<br>
        • <b>Thermodynamics:</b> &Delta;H<sub>mix</sub> &gt; 0 (Endothermic, absorbs heat) &nbsp;|&nbsp; &Delta;V<sub>mix</sub> &gt; 0 (Volume expansion)<br>
        • <b>Azeotrope:</b> Forms <b>Minimum Boiling Azeotrope</b> (e.g. 95.4% Ethanol + 4.6% Water, b.p. 351.15 K)<br>
        • <b>Representative Systems:</b> Ethanol + Acetone, Carbon disulfide (CS<sub>2</sub>) + Acetone, Ethanol + Water
      </div>
    </div>

    <!-- Card 3: Negative Deviation -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(56, 189, 248, 0.4); border-left: 5px solid #38BDF8; border-radius: 8px; padding: 14px 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
      <div style="color: #38BDF8; font-weight: bold; font-size: 16px; margin-bottom: 8px;">📉 3. Negative Deviation from Raoult's Law</div>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.7;">
        • <b>Intermolecular Forces:</b> F<sub>A-B</sub> &gt; F<sub>A-A</sub>, F<sub>B-B</sub> (Stronger attractions due to intermolecular H-bonding)<br>
        • <b>Vapour Pressure:</b> p<sub>total</sub> &lt; p<sub>A</sub>&deg; &chi;<sub>A</sub> + p<sub>B</sub>&deg; &chi;<sub>B</sub> (Lower than ideal)<br>
        • <b>Thermodynamics:</b> &Delta;H<sub>mix</sub> &lt; 0 (Exothermic, releases heat) &nbsp;|&nbsp; &Delta;V<sub>mix</sub> &lt; 0 (Volume contraction)<br>
        • <b>Azeotrope:</b> Forms <b>Maximum Boiling Azeotrope</b> (e.g. 68% HNO<sub>3</sub> + 32% Water, b.p. 393.5 K)<br>
        • <b>Representative Systems:</b> Chloroform (CHCl<sub>3</sub>) + Acetone, Phenol + Aniline, Nitric acid + Water
      </div>
    </div>
  </div>`;

// Replace Section 9 Table
code = code.replace(
  /<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 18px 0; border-radius: 8px; border: 1px solid rgba\(255,64,129,0.35\);">\s*<table style="min-width: 580px; width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; background: #0B0F19;">[\s\S]*?<\/table>\s*<\/div>/,
  newComparisonSection
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('✅ Replaced tables with 100% visible, fully responsive mobile cards!');
