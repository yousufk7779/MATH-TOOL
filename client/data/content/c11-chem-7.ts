// Class 11 Chemistry Chapter 7: Redox Reactions
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Chemistry | Class: 11 | Code: c11-chem-7

export const c11Chem7HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(253, 200, 48, 0.12), rgba(243, 115, 53, 0.12)); border: 1.5px solid rgba(253, 200, 48, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #FDC830; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #FDC830; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 7: Redox Reactions</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FDC830;">Oxidation:</b> Loss of one or more electrons by an atom, ion, or molecule, leading to an algebraic increase in its oxidation state.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FDC830;">Reduction:</b> Gain of one or more electrons by an atom, ion, or molecule, leading to an algebraic decrease in its oxidation state.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FDC830;">Oxidizing Agent (Oxidant):</b> A chemical substance that accepts electrons, oxidizes another substance, and in the process gets reduced itself.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FDC830;">Reducing Agent (Reductant):</b> A chemical substance that donates electrons, reduces another substance, and in the process gets oxidized itself.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FDC830;">Oxidation Number (O.N.):</b> The residual electrical charge an atom appears to possess in a compound when all bonding electron pairs are assigned to the more electronegative partner.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FDC830;">Disproportionation:</b> A redox reaction in which an element in an intermediate oxidation state is simultaneously oxidized and reduced into two different products.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FDC830; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Concept of Oxidation and Reduction
  </h2>

<p>
    Oxidation and reduction reactions form the energetic basis of life, metallurgy, batteries, biological respiration, combustion, and corrosion. Historically viewed as oxygen and hydrogen transfers, the modern electronic theory unifies all redox phenomena into coordinated microscopic electron transfer events.
  </p>

  <h3 style="color: #FDC830; margin-top: 18px; font-size: 16.5px;">(i) Classical Concept of Oxidation</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Historically, oxidation is defined as:
      <br/>1. <b style="color: #FDC830;">Addition of Oxygen:</b> C<sub>(s)</sub> + O<sub>2(g)</sub> &rarr; CO<sub>2(g)</sub>; 2Mg + O<sub>2</sub> &rarr; 2MgO.
      <br/>2. <b style="color: #FDC830;">Addition of an Electronegative Element:</b> Mg + Cl<sub>2</sub> &rarr; MgCl<sub>2</sub>; Fe + S &rarr; FeS.
      <br/>3. <b style="color: #FDC830;">Removal of Hydrogen:</b> H<sub>2</sub>S + Cl<sub>2</sub> &rarr; 2HCl + S (H<sub>2</sub>S is oxidized to S).
      <br/>4. <b style="color: #FDC830;">Removal of an Electropositive Element:</b> 2KI + Cl<sub>2</sub> &rarr; 2KCl + I<sub>2</sub> (KI is oxidized to I<sub>2</sub>).
    </p>
  </div>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(ii) Classical Concept of Reduction</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Reduction is the exact converse of oxidation:
      <br/>1. <b style="color: #FDC830;">Addition of Hydrogen:</b> H<sub>2(g)</sub> + Cl<sub>2(g)</sub> &rarr; 2HCl<sub>(g)</sub>; C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub> &rarr; C<sub>2</sub>H<sub>6</sub>.
      <br/>2. <b style="color: #FDC830;">Addition of an Electropositive Element:</b> 2HgCl<sub>2</sub> + SnCl<sub>2</sub> &rarr; Hg<sub>2</sub>Cl<sub>2</sub> + SnCl<sub>4</sub>.
      <br/>3. <b style="color: #FDC830;">Removal of Oxygen:</b> CuO + H<sub>2</sub> &rarr; Cu + H<sub>2</sub>O; Fe<sub>2</sub>O<sub>3</sub> + 3CO &rarr; 2Fe + 3CO<sub>2</sub>.
      <br/>4. <b style="color: #FDC830;">Removal of an Electronegative Element:</b> 2FeCl<sub>3</sub> + H<sub>2</sub> &rarr; 2FeCl<sub>2</sub> + 2HCl.
    </p>
  </div>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(iii) Electronic Concept of Oxidation and Reduction (Modern Unification)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The modern quantum and electronic approach establishes that chemical change involves redistribution of valence electron density:
      <br/>&bull; <b style="color: #FDC830;">Oxidation (OIL - Oxidation Is Loss):</b> A process involving loss of electrons by a chemical entity:
      <br/><b>Na &rarr; Na<sup>+</sup> + e<sup>-</sup></b> &nbsp;|&nbsp; <b>Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + e<sup>-</sup></b> (De-electronation).
      <br/>&bull; <b style="color: #FDC830;">Reduction (RIG - Reduction Is Gain):</b> A process involving gain of electrons by a chemical entity:
      <br/><b>Cl<sub>2</sub> + 2e<sup>-</sup> &rarr; 2Cl<sup>-</sup></b> &nbsp;|&nbsp; <b>Cu<sup>2+</sup> + 2e<sup>-</sup> &rarr; Cu</b> (Electronation).
    </p>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #FDC830; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Redox Reactions
  </h2>

  <h3 style="color: #FDC830; margin-top: 18px; font-size: 16.5px;">(i) Definition of Redox Reactions and Half-Reaction Concept</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Free electrons cannot exist independently in macroscopic chemical solutions. Therefore, <b>oxidation and reduction must occur simultaneously</b>: the electrons released in an oxidation half-reaction are instantaneously captured in a complementary reduction half-reaction:
      <br/>&bull; Oxidation Half-Reaction: Zn<sub>(s)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + 2e<sup>-</sup>
      <br/>&bull; Reduction Half-Reaction: Cu<sup>2+</sup><sub>(aq)</sub> + 2e<sup>-</sup> &rarr; Cu<sub>(s)</sub>
      <br/>&bull; Overall Net Redox Reaction: <b>Zn<sub>(s)</sub> + Cu<sup>2+</sup><sub>(aq)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + Cu<sub>(s)</sub></b>.
    </p>
  </div>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(ii) Oxidising Agents (Oxidants) and Reducing Agents (Reductants)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FDC830;">Oxidizing Agent (Oxidant):</b> Substance that gains electrons, oxidizes another reactant, and has its own oxidation number decreased. Prominent oxidants: <b>KMnO<sub>4</sub>, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, concentrated HNO<sub>3</sub>, H<sub>2</sub>O<sub>2</sub>, F<sub>2</sub>, Cl<sub>2</sub>, O<sub>3</sub></b>.</li>
    <li><b style="color: #FDC830;">Reducing Agent (Reductant):</b> Substance that donates electrons, reduces another reactant, and has its own oxidation number increased. Prominent reductants: <b>Alkali metals (Na, K, Li), H<sub>2</sub>, H<sub>2</sub>S, SO<sub>2</sub>, SnCl<sub>2</sub>, oxalic acid (H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>), FeSO<sub>4</sub></b>.</li>
  </ul>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(iii) 4 Main Types of Redox Reactions</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FDC830;">1. Combination Reactions:</b> Two or more elements/compounds combine where at least one is in elemental state: <b>C<sup>0</sup> + O<sub>2</sub><sup>0</sup> &rarr; C<sup>+4</sup>O<sub>2</sub><sup>-2</sup></b>; <b>3Mg<sup>0</sup> + N<sub>2</sub><sup>0</sup> &rarr; Mg<sub>3</sub><sup>+2</sup>N<sub>2</sub><sup>-3</sup></b>.</li>
      <li><b style="color: #FDC830;">2. Decomposition Reactions:</b> Breakdown of a compound into constituent elements/compounds where at least one product is elemental: <b>2KClO<sub>3</sub><sup>+5</sup> &rarr; 2KCl<sup>-1</sup> + 3O<sub>2</sub><sup>0</sup></b>; <b>2NaH &rarr; 2Na + H<sub>2</sub></b>. (Note: CaCO<sub>3</sub> &rarr; CaO + CO<sub>2</sub> is NOT a redox reaction because oxidation numbers remain unchanged).</li>
      <li><b style="color: #FDC830;">3. Displacement Reactions:</b> An ion/atom in a compound is replaced by another element:
        <br/>&bull; <i>Metal Displacement:</i> Zn + CuSO<sub>4</sub> &rarr; ZnSO<sub>4</sub> + Cu; TiCl<sub>4</sub> + 2Mg &rarr; Ti + 2MgCl<sub>2</sub>.
        <br/>&bull; <i>Non-Metal Displacement:</i> 2Na + 2H<sub>2</sub>O &rarr; 2NaOH + H<sub>2</sub>; Cl<sub>2</sub> + 2KBr &rarr; 2KCl + Br<sub>2</sub>.
      </li>
      <li><b style="color: #FDC830;">4. Disproportionation Reactions:</b> An element in an intermediate oxidation state is simultaneously oxidized and reduced:
        <br/><b>2H<sub>2</sub>O<sub>2</sub><sup>-1</sup> &rarr; 2H<sub>2</sub>O<sup>-2</sup> + O<sub>2</sub><sup>0</sup></b> (Oxygen: -1 &rarr; -2 and 0).
        <br/><b>P<sub>4</sub><sup>0</sup> + 3OH<sup>-</sup> + 3H<sub>2</sub>O &rarr; PH<sub>3</sub><sup>-3</sup> + 3H<sub>2</sub>PO<sub>2</sub><sup>-+1</sup></b> (Phosphorus: 0 &rarr; -3 and +1).
        <br/><b>Cl<sub>2</sub><sup>0</sup> + 2OH<sup>-</sup> &rarr; Cl<sup>-1</sup> + ClO<sup>-+1</sup> + H<sub>2</sub>O</b> (Chlorine in cold alkali: 0 &rarr; -1 and +1).
      </li>
    </ul>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #FDC830; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Oxidation Number
  </h2>

<h3 style="color: #FDC830; margin-top: 18px; font-size: 16.5px;">(i) 7 Formal Rules for Assigning Oxidation Numbers</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FDC830;">Rule 1 (Elemental State):</b> In the free or uncombined elemental state, each atom has an oxidation number of <b>ZERO</b> (e.g., H<sub>2</sub>, O<sub>2</sub>, Cl<sub>2</sub>, O<sub>3</sub>, P<sub>4</sub>, S<sub>8</sub>, Na, Fe = 0).</li>
      <li><b style="color: #FDC830;">Rule 2 (Monoatomic Ions):</b> The oxidation number equals the actual charge on the ion (e.g., Na<sup>+</sup> = +1, Mg<sup>2+</sup> = +2, Al<sup>3+</sup> = +3, Cl<sup>-</sup> = -1, O<sup>2-</sup> = -2).</li>
      <li><b style="color: #FDC830;">Rule 3 (Fluorine):</b> As the most electronegative element, Fluorine always has an oxidation number of <b>-1</b> in all its compounds.</li>
      <li><b style="color: #FDC830;">Rule 4 (Oxygen):</b> Normally <b>-2</b> in most compounds (e.g., H<sub>2</sub>O, CO<sub>2</sub>).
        <br/><i>Exceptions:</i> In Peroxides (H<sub>2</sub>O<sub>2</sub>, Na<sub>2</sub>O<sub>2</sub>) O.N. = <b>-1</b>; In Superoxides (KO<sub>2</sub>) O.N. = <b>-<sup>1</sup>/<sub>2</sub></b>; In Oxygen difluoride (OF<sub>2</sub>) O.N. = <b>+2</b>; In Dioxygen difluoride (O<sub>2</sub>F<sub>2</sub>) O.N. = <b>+1</b>.
      </li>
      <li><b style="color: #FDC830;">Rule 5 (Hydrogen):</b> Normally <b>+1</b> when bonded to non-metals (HCl, H<sub>2</sub>O).
        <br/><i>Exception:</i> In binary metallic hydrides (LiH, NaH, CaH<sub>2</sub>) where H is bonded to strongly electropositive metals, O.N. = <b>-1</b>.
      </li>
      <li><b style="color: #FDC830;">Rule 6 (Alkali &amp; Alkaline Earth Metals):</b> Group 1 metals always have O.N. = <b>+1</b>; Group 2 metals always have O.N. = <b>+2</b>.</li>
      <li><b style="color: #FDC830;">Rule 7 (Algebraic Sum of Charges):</b>
        <br/>&bull; In a neutral molecule, &Sigma; O.N. = <b>0</b>.
        <br/>&bull; In a polyatomic ion, &Sigma; O.N. = <b>Net charge of the ion</b> (e.g., in SO<sub>4</sub><sup>2-</sup>, O.N. of S + 4(-2) = -2 &rArr; S = +6).
      </li>
    </ul>
  </div>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(ii) Step-by-Step Calculation of Oxidation Numbers</h3>
  <p>
    &bull; <b style="color: #FDC830;">Mn in KMnO<sub>4</sub>:</b> (+1) + x + 4(-2) = 0 &rArr; x - 7 = 0 &rArr; <b>x = +7</b>.
    <br/>&bull; <b style="color: #FDC830;">Cr in K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>:</b> 2(+1) + 2x + 7(-2) = 0 &rArr; 2x - 12 = 0 &rArr; <b>x = +6</b>.
    <br/>&bull; <b style="color: #FDC830;">P in H<sub>3</sub>PO<sub>4</sub>:</b> 3(+1) + x + 4(-2) = 0 &rArr; x - 5 = 0 &rArr; <b>x = +5</b>.
  </p>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(iii) Exceptional Structural and Fractional Oxidation Numbers</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FDC830;">Chromium Peroxide (CrO<sub>5</sub> - Butterfly Structure):</b>
        <br/>Direct formula gives Cr + 5(-2) = 0 &rArr; Cr = +10 (impossible, exceeds valence shell).
        <br/><i>Actual Structure:</i> Contains one oxo oxygen (=O, O.N. = -2) and two peroxide linkages (-O-O-, four peroxo oxygens each with O.N. = -1):
        <br/>Cr + 1(-2) + 4(-1) = 0 &rArr; <b>Cr = +6</b>.
      </li>
      <li><b style="color: #FDC830;">Caro's Acid (H<sub>2</sub>SO<sub>5</sub> - Peroxomonosulfuric acid):</b>
        <br/>Contains one peroxide bond (-O-O-): 2(+1) + S + 3(-2) + 2(-1) = 0 &rArr; <b>S = +6</b> (not +8).
      </li>
      <li><b style="color: #FDC830;">Marshall's Acid (H<sub>2</sub>S<sub>2</sub>O<sub>8</sub> - Peroxodisulfuric acid):</b>
        <br/>Contains one peroxide bridge: 2(+1) + 2S + 6(-2) + 2(-1) = 0 &rArr; 2S = 12 &rArr; <b>S = +6</b> (not +7).
      </li>
      <li><b style="color: #FDC830;">Carbon Suboxide (C<sub>3</sub>O<sub>2</sub>):</b> Structure: O=C=C=C=O. Terminal carbons have O.N. = +2; central carbon bonded only to carbons has O.N. = 0. Average O.N. = <b>+<sup>4</sup>/<sub>3</sub></b>.</li>
      <li><b style="color: #FDC830;">Tribromooctoxide (Br<sub>3</sub>O<sub>8</sub>):</b> Terminal Br atoms have O.N. = +6; central Br has O.N. = +4. Average O.N. = <b>+<sup>16</sup>/<sub>3</sub></b>.</li>
    </ul>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #FDC830; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Balancing of Chemical Equations in Redox Reactions
  </h2>

<h3 style="color: #FDC830; margin-top: 18px; font-size: 16.5px;">(i) Oxidation Number Method</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li>Write skeletal equation and assign oxidation numbers to identify oxidizing and reducing atoms.</li>
      <li>Calculate total increase and decrease in oxidation numbers per formula unit.</li>
      <li>Multiply the formulas by suitable integers to equate the total increase and decrease in oxidation numbers.</li>
      <li>Balance all atoms other than Hydrogen and Oxygen.</li>
      <li>Balance Oxygen by adding H<sub>2</sub>O molecules.</li>
      <li>Balance Hydrogen by adding H<sup>+</sup> ions (in acidic medium).</li>
    </ol>
  </div>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(ii) Ion-Electron / Half-Reaction Method</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li>Split the skeletal ionic equation into two half-reactions: Oxidation Half and Reduction Half.</li>
      <li>Balance all atoms other than H and O in each half-reaction.</li>
      <li>Balance Oxygen atoms by adding H<sub>2</sub>O to the oxygen-deficient side.</li>
      <li>Balance Hydrogen atoms by adding H<sup>+</sup> ions to the hydrogen-deficient side (in acidic medium).</li>
      <li>Balance electrical charges by adding electrons (e<sup>-</sup>) to the more positive side.</li>
      <li>Multiply the two half-reactions by suitable integers to equate the electron count, then add together to obtain the balanced equation.</li>
      <li><i>For Basic Medium:</i> Add OH<sup>-</sup> ions equal to H<sup>+</sup> ions to both sides; combine H<sup>+</sup> and OH<sup>-</sup> to form H<sub>2</sub>O and cancel common water molecules.</li>
    </ol>
  </div>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(iii) Fully Worked Step-by-Step Example in Acidic &amp; Basic Media</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #FDC830;">Permanganate Oxidation of Fe<sup>2+</sup> in Acidic Medium:</b>
      <br/>MnO<sub>4</sub><sup>-</sup> + Fe<sup>2+</sup> &rarr; Mn<sup>2+</sup> + Fe<sup>3+</sup>
      <br/>&bull; Oxidation: Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + e<sup>-</sup> &nbsp;(&times; 5)
      <br/>&bull; Reduction: MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup> + 4H<sub>2</sub>O &nbsp;(&times; 1)
      <br/>&bull; Sum: <b style="color: #FFFFFF;">MnO<sub>4</sub><sup>-</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> &rarr; Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O</b>.
    </p>
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: #FDC830; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Applications of Redox Reactions
  </h2>

  <h3 style="color: #FDC830; margin-top: 18px; font-size: 16.5px;">(i) Redox Titrations and Self-Indicators</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FDC830;">1. Potassium Permanganate (KMnO<sub>4</sub>) Titrations:</b> Acts as a powerful oxidant in acidic medium (dil. H<sub>2</sub>SO<sub>4</sub>). Acts as its own <b>Self-Indicator</b>: deeply intense purple MnO<sub>4</sub><sup>-</sup> reduces to almost colorless Mn<sup>2+</sup>. At equivalence point, the first excess drop of KMnO<sub>4</sub> imparts a persistent faint pink color.</li>
      <li><b style="color: #FDC830;">2. Potassium Dichromate (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) Titrations:</b> Orange Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> reduces to green Cr<sup>3+</sup>: Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + 6e<sup>-</sup> &rarr; 2Cr<sup>3+</sup> + 7H<sub>2</sub>O. Requires an external redox indicator such as <b>Diphenylamine</b> (produces deep violet end point).</li>
      <li><b style="color: #FDC830;">3. Iodometric Titrations:</b> Iodine liberated by oxidants is titrated against standard Sodium thiosulfate (Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>) using freshly prepared <b>Starch solution</b> as indicator (intense deep blue complex discolors sharply to colorless).</li>
    </ul>
  </div>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(ii) Electrochemical Cells, Galvanic Cells &amp; SHE</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FDC830;">Galvanic (Voltaic) Cell:</b> Converts chemical free energy of a spontaneous redox reaction into electrical energy (e.g., Daniell Cell: Zn<sub>(s)</sub> | Zn<sup>2+</sup><sub>(aq)</sub> || Cu<sup>2+</sup><sub>(aq)</sub> | Cu<sub>(s)</sub>).
        <br/>- <i>Anode (Negative pole, Left):</i> Site of Oxidation (Zn &rarr; Zn<sup>2+</sup> + 2e<sup>-</sup>).
        <br/>- <i>Cathode (Positive pole, Right):</i> Site of Reduction (Cu<sup>2+</sup> + 2e<sup>-</sup> &rarr; Cu).
        <br/>- <i>Mnemonic:</i> <b>LOAN</b> (Left, Oxidation, Anode, Negative).
      </li>
      <li><b style="color: #FDC830;">Functions of Salt Bridge:</b> Inverted U-tube containing inert electrolyte (KCl, KNO<sub>3</sub>, NH<sub>4</sub>NO<sub>3</sub>) in agar-agar gel.
        <br/>1. Completes the electrical circuit by permitting inter-compartment ionic migration.
        <br/>2. Maintains electrical neutrality in both half-cells, preventing charge accumulation that would halt current.
        <br/>3. Eliminates liquid junction potential.
      </li>
      <li><b style="color: #FDC830;">Standard Hydrogen Electrode (SHE):</b> Universal primary reference electrode with standard reduction potential assigned <b>E&deg; = 0.000 V</b> at all temperatures: Pt<sub>(s)</sub> | H<sub>2(g, 1 bar)</sub> | H<sup>+</sup><sub>(aq, 1 M)</sub>.</li>
    </ul>
  </div>

  <h3 style="color: #FDC830; margin-top: 22px; font-size: 16.5px;">(iii) Electrochemical Series, Metal Corrosion &amp; Sacrificial Protection</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #FDC830;">Electrochemical Series:</b> Arrangement of standard electrode reduction potentials (E&deg;):
      <br/>Li<sup>+</sup>/Li (-3.05 V, strongest reducing agent) &rarr; Zn<sup>2+</sup>/Zn (-0.76 V) &rarr; H<sup>+</sup>/H<sub>2</sub> (0.00 V) &rarr; Cu<sup>2+</sup>/Cu (+0.34 V) &rarr; F<sub>2</sub>/F<sup>-</sup> (+2.87 V, strongest oxidizing agent).
      <br/>&bull; A metal with more negative E&deg; displaces a metal with more positive E&deg; from its salt solution.
      <br/>&bull; <b style="color: #FDC830;">Corrosion (Rusting of Iron):</b> An electrochemical phenomenon forming hydrated ferric oxide Fe<sub>2</sub>O<sub>3</sub> &bull; xH<sub>2</sub>O. Prevented by <b>Galvanization</b> (coating with Zinc, which oxidizes sacrificially because E&deg;<sub>Zn2+/Zn</sub> = -0.76 V &lt; E&deg;<sub>Fe2+/Fe</sub> = -0.44 V).
    </p>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(127, 44, 0, 0.85)); border: 2px solid #FDC830; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #FDC830; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Redox Reactions Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(253, 200, 48, 0.25); color: #FDC830; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Redox Parameter / Law</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Formula / Key Expression</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Physical Significance / Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FDC830;">Oxidation vs Reduction:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">OIL RIG</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Oxidation Is Loss of e<sup>-</sup>; Reduction Is Gain of e<sup>-</sup></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FDC830;">Oxidation Number (O.N.):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Sigma; (O.N.) = Net Charge</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">0 for neutral molecule; equal to ion charge</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FDC830;">CrO<sub>5</sub> Butterfly State:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cr = +6</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">1 (=O, -2) + 4 (peroxo -O-, -1 each)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FDC830;">Disproportionation:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">2H<sub>2</sub>O<sub>2</sub> &rarr; 2H<sub>2</sub>O + O<sub>2</sub></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Same atom oxidized and reduced simultaneously</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FDC830;">Cell EMF (E&deg;<sub>cell</sub>):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Standard reduction potentials (Right - Left)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FDC830;">Daniell Cell Potential:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">E&deg;<sub>cell</sub> = 0.34 - (-0.76) = 1.10 V</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Zn<sub>(s)</sub> | Zn<sup>2+</sup><sub>(aq)</sub> || Cu<sup>2+</sup><sub>(aq)</sub> | Cu<sub>(s)</sub></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FDC830;">Standard Hydrogen Electrode:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">E&deg;<sub>H+/H2</sub> = 0.000 V</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Universal primary reference standard at 298 K</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FDC830;">Spontaneity &amp; EMF:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;G&deg; = -n F E&deg;<sub>cell</sub></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">E&deg;<sub>cell</sub> &gt; 0 &rArr; &Delta;G&deg; &lt; 0 (Spontaneous)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Chem7HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(253, 200, 48, 0.15), rgba(243, 115, 53, 0.15)); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #FDC830; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Oxidation &amp; Reduction Definitions, Rules, Types of Reactions &amp; Galvanic Cell Basics</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define Oxidation in terms of electron transfer.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Oxidation is the process involving loss of one or more electrons by an atom, ion, or molecule.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Define Reduction in terms of electron transfer.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Reduction is the process involving gain of one or more electrons by an atom, ion, or molecule.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: Define an Oxidizing Agent (Oxidant).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A substance that accepts electrons, oxidizes another species, and gets reduced itself.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Define a Reducing Agent (Reductant).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A substance that donates electrons, reduces another species, and gets oxidized itself.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What is a Redox Reaction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A chemical reaction involving simultaneous transfer of electrons between two species (oxidation and reduction).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the oxidation number of an element in its free uncombined state?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Zero (e.g., O<sub>2</sub>, H<sub>2</sub>, Cl<sub>2</sub>, Na = 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: What is the oxidation number of Fluorine in all its compounds?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Always -1 (Fluorine is the most electronegative element).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What is the oxidation number of Oxygen in Peroxides (e.g., H2O2)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -1.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What is the oxidation number of Oxygen in Superoxides (e.g., KO2)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -<sup>1</sup>/<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What is the oxidation number of Oxygen in OF2?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      +2.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What is the oxidation number of Hydrogen in binary metal hydrides (e.g., NaH, CaH2)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -1.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Calculate the oxidation number of Manganese in KMnO4.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      x = +7.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: Calculate the oxidation number of Chromium in K2Cr2O7.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      x = +6.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Calculate the oxidation number of Sulfur in H2SO4.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      x = +6.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Calculate the oxidation number of Nitrogen in HNO3.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      x = +5.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Calculate the oxidation number of Phosphorus in H3PO4.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      x = +5.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Calculate the oxidation number of Carbon in CH4.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      x = -4.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Calculate the oxidation number of Carbon in CO2.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      x = +4.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What is the oxidation number of Chlorine in ClO4<sup>-</sup>?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      x = +7.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What is the oxidation number of Chromium in CrO5 (Chromium peroxide)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      +6 (due to butterfly structure with two peroxide linkages).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What is the oxidation number of Sulfur in Caro's acid (H2SO5)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      +6 (contains one peroxide linkage).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Define a Disproportionation Reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A redox reaction in which an element in an intermediate oxidation state is simultaneously oxidized and reduced.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Give one example of a disproportionation reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      2H<sub>2</sub>O<sub>2</sub> &rarr; 2H<sub>2</sub>O + O<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: Why can Fluorine NOT undergo a disproportionation reaction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because Fluorine is the most electronegative element, exhibiting only 0 and -1 oxidation states; it has no positive oxidation states.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What type of redox reaction is: 2Na + Cl2 &rarr; 2NaCl?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Combination redox reaction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: What type of redox reaction is: 2KClO3 &rarr; 2KCl + 3O2?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Decomposition redox reaction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: What type of redox reaction is: Zn + CuSO4 &rarr; ZnSO4 + Cu?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Metal displacement redox reaction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Define an Electrochemical Cell.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A device that converts chemical energy of a spontaneous redox reaction into electrical energy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: What occurs at the Anode of a galvanic cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Oxidation (loss of electrons).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What occurs at the Cathode of a galvanic cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Reduction (gain of electrons).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: What is the sign of the Anode in a Galvanic cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Negative (-).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is the sign of the Cathode in a Galvanic cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Positive (+).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: What is the potential of the Standard Hydrogen Electrode (SHE)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      E&deg; = 0.000 V at all temperatures.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: State the formula for standard EMF of a cell (E°_cell).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: What is the standard cell potential of a Daniell Cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      E&deg;<sub>cell</sub> = 1.10 V.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What is the function of a Salt Bridge in a galvanic cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      It completes the circuit and maintains electrical neutrality between the two half-cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Name two electrolytes commonly used in a Salt Bridge.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      KCl and KNO<sub>3</sub> (in agar-agar gel).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: Why is KMnO4 called a Self-Indicator in redox titrations?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because the intensely purple MnO<sub>4</sub><sup>-</sup> ion acts as its own indicator, turning colorless at end point and faint pink with one excess drop.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: What is the relationship between standard free energy change (&Delta;G°) and cell EMF (E°_cell)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G&deg; = -n F E&deg;<sub>cell</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Under what condition is a redox cell reaction spontaneous?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When E&deg;<sub>cell</sub> is positive (E&deg;<sub>cell</sub> &gt; 0), making &Delta;G&deg; negative.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(253, 200, 48, 0.15), rgba(243, 115, 53, 0.15)); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FDC830; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Exceptional Structures (CrO5), Ion-Electron Balancing, EMF Calculations &amp; Corrosion Prevention</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Differentiate between Oxidation Number and Valency in four key respects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FDC830;">Sign:</b> Oxidation number has a sign (+, -, 0, fraction); valency is a pure combining number without a sign.<br/>2. <b style="color: #FDC830;">Zero Value:</b> Oxidation number can be zero (e.g., C in CH<sub>2</sub>Cl<sub>2</sub>); valency of an element in a compound is never zero.<br/>3. <b style="color: #FDC830;">Fractional Values:</b> Oxidation numbers can be fractional (e.g., Fe in Fe<sub>3</sub>O<sub>4</sub> is +8/3); valency is strictly an integer.<br/>4. <b style="color: #FDC830;">Constancy:</b> Valency is generally fixed for representative elements; oxidation numbers vary widely depending on bonding partners.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Calculate the oxidation number of Sulfur in: (a) Na2S2O3, (b) Na2S4O6, (c) H2SO5.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FDC830;">Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>:</b> 2(+1) + 2x + 3(-2) = 0 &rArr; 2x - 4 = 0 &rArr; <b>x = +2</b> (Central S is +5, terminal S is -1).<br/>(b) <b style="color: #FDC830;">Na<sub>2</sub>S<sub>4</sub>O<sub>6</sub>:</b> 2(+1) + 4x + 6(-2) = 0 &rArr; 4x - 10 = 0 &rArr; <b>x = +2.5 (+<sup>5</sup>/<sub>2</sub>)</b>.<br/>(c) <b style="color: #FDC830;">H<sub>2</sub>SO<sub>5</sub>:</b> Contains one peroxide bond (-O-O-): 2(+1) + x + 3(-2) + 2(-1) = 0 &rArr; <b>x = +6</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the butterfly structure of Chromium Peroxide (CrO5) and determine the true oxidation number of Chromium.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      If calculated by standard formula, Cr + 5(-2) = 0 gives Cr = +10, which is impossible because Chromium has only 6 valence electrons (3d<sup>5</sup> 4s<sup>1</sup>).<br/>In CrO<sub>5</sub>, Chromium has a butterfly structure containing <b>one oxo oxygen (=O, O.N. = -2)</b> and <b>four peroxo oxygens (-O-O-, O.N. = -1 each)</b>.<br/>Calculation: Cr + 1(-2) + 4(-1) = 0 &rArr; Cr - 6 = 0 &rArr; <b>Cr = +6</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain why HNO3 acts only as an oxidizing agent, while HNO2 can act as both an oxidizing and a reducing agent.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In HNO<sub>3</sub>, Nitrogen has oxidation state <b>+5</b>, which is its maximum possible valence state (Group 15). It cannot lose further electrons, so it can only be reduced (act as an oxidant).<br/>In HNO<sub>2</sub>, Nitrogen is in an intermediate oxidation state of <b>+3</b>. It can increase its O.N. to +5 (acting as a reductant) or decrease its O.N. to +2, +1, or 0 (acting as an oxidant).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain Disproportionation with chemical equations for: (a) Phosphorus in alkaline medium, (b) Chlorine in hot concentrated alkali.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FDC830;">Phosphorus:</b> P<sub>4</sub><sup>0</sup> + 3OH<sup>-</sup> + 3H<sub>2</sub>O &rarr; PH<sub>3</sub><sup>-3</sup> + 3H<sub>2</sub>PO<sub>2</sub><sup>-+1</sup>. P is reduced from 0 to -3 in PH<sub>3</sub> and oxidized from 0 to +1 in hypophosphite.<br/>(b) <b style="color: #FDC830;">Chlorine in hot alkali:</b> 3Cl<sub>2</sub><sup>0</sup> + 6OH<sup>-</sup> &rarr; 5Cl<sup>-1</sup> + ClO<sub>3</sub><sup>-+5</sup> + 3H<sub>2</sub>O. Cl is reduced from 0 to -1 in chloride and oxidized from 0 to +5 in chlorate.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Balance the following equation by Oxidation Number Method: Cr2O7<sup>2-</sup> + Fe<sup>2+</sup> + H<sup>+</sup> &rarr; Cr<sup>3+</sup> + Fe<sup>3+</sup> + H2O.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Oxidation numbers: Cr (+6 &rarr; +3, decrease of 3 per Cr, total 6 for Cr<sub>2</sub>); Fe (+2 &rarr; +3, increase of 1 per Fe).<br/>2. Equate O.N. changes: Multiply Fe<sup>2+</sup> and Fe<sup>3+</sup> by 6:<br/>Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 6Fe<sup>2+</sup> &rarr; 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup>.<br/>3. Balance Oxygen: Add 7 H<sub>2</sub>O to product side.<br/>4. Balance Hydrogen: Add 14 H<sup>+</sup> to reactant side:<br/><b>Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 6Fe<sup>2+</sup> + 14H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 7H<sub>2</sub>O</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Balance by Ion-Electron Method in acidic medium: MnO4<sup>-</sup> + C2O4<sup>2-</sup> + H<sup>+</sup> &rarr; Mn<sup>2+</sup> + CO2 + H2O.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Oxidation half: C<sub>2</sub>O<sub>4</sub><sup>2-</sup> &rarr; 2CO<sub>2</sub> + 2e<sup>-</sup> &nbsp;(&times; 5)<br/>2. Reduction half: MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup> + 4H<sub>2</sub>O &nbsp;(&times; 2)<br/>3. Multiply and add:<br/>10e<sup>-</sup> cancel on both sides:<br/><b>2MnO<sub>4</sub><sup>-</sup> + 5C<sub>2</sub>O<sub>4</sub><sup>2-</sup> + 16H<sup>+</sup> &rarr; 2Mn<sup>2+</sup> + 10CO2 + 8H<sub>2</sub>O</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Balance by Ion-Electron Method in basic medium: MnO4<sup>-</sup> + I<sup>-</sup> &rarr; MnO2 + I2.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Oxidation half: 2I<sup>-</sup> &rarr; I<sub>2</sub> + 2e<sup>-</sup> &nbsp;(&times; 3)<br/>2. Reduction half: MnO<sub>4</sub><sup>-</sup> + 4H<sup>+</sup> + 3e<sup>-</sup> &rarr; MnO<sub>2</sub> + 2H<sub>2</sub>O &nbsp;(&times; 2)<br/>Sum in acidic: 2MnO<sub>4</sub><sup>-</sup> + 6I<sup>-</sup> + 8H<sup>+</sup> &rarr; 2MnO<sub>2</sub> + 3I<sub>2</sub> + 4H<sub>2</sub>O.<br/>3. Convert to basic medium by adding 8 OH<sup>-</sup> to both sides:<br/>8H<sup>+</sup> + 8OH<sup>-</sup> = 8H<sub>2</sub>O. Cancel 4H<sub>2</sub>O:<br/><b>2MnO<sub>4</sub><sup>-</sup> + 6I<sup>-</sup> + 4H<sub>2</sub>O &rarr; 2MnO<sub>2</sub> + 3I<sub>2</sub> + 8OH<sup>-</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain the construction and working of a Daniell Cell with cell representation and electrode reactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Consists of a Zinc strip dipped in 1 M ZnSO<sub>4</sub> (Anode half-cell) and a Copper strip dipped in 1 M CuSO<sub>4</sub> (Cathode half-cell) connected by a salt bridge and external voltmeter.<br/>&bull; <b style="color: #FDC830;">Anode Reaction (Oxidation):</b> Zn<sub>(s)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + 2e<sup>-</sup>.<br/>&bull; <b style="color: #FDC830;">Cathode Reaction (Reduction):</b> Cu<sup>2+</sup><sub>(aq)</sub> + 2e<sup>-</sup> &rarr; Cu<sub>(s)</sub>.<br/>&bull; <b style="color: #FDC830;">Overall Reaction:</b> Zn<sub>(s)</sub> + Cu<sup>2+</sup><sub>(aq)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + Cu<sub>(s)</sub>.<br/>&bull; <b style="color: #FDC830;">Cell Notation:</b> Zn<sub>(s)</sub> | Zn<sup>2+</sup><sub>(1 M)</sub> || Cu<sup>2+</sup><sub>(1 M)</sub> | Cu<sub>(s)</sub> &nbsp;|&nbsp; E&deg;<sub>cell</sub> = 1.10 V.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: What is a Salt Bridge? Explain its three essential functions in an electrochemical cell.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A U-shaped glass tube packed with agar-agar gel saturated with an inert electrolyte (KCl, KNO<sub>3</sub>, or NH<sub>4</sub>NO<sub>3</sub>) whose ions have nearly identical ionic mobilities.<br/>1. <b style="color: #FDC830;">Completes Circuit:</b> Connects the two electrolytic solutions, permitting migration of ions.<br/>2. <b style="color: #FDC830;">Maintains Electrical Neutrality:</b> Cl<sup>-</sup> migrates into anode vessel to neutralize excess Zn<sup>2+</sup>; K<sup>+</sup> migrates into cathode vessel to replace consumed Cu<sup>2+</sup>.<br/>3. <b style="color: #FDC830;">Prevents Liquid Junction Potential:</b> Eliminates potential differences at the liquid-liquid boundary.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Describe the Standard Hydrogen Electrode (SHE): Construction, electrode reaction, and why E° is taken as 0.00 V.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Consists of a platinized platinum foil sealed in a glass tube immersed in 1 M HCl (a<sub>H+</sub> = 1), with pure H<sub>2</sub> gas bubbled continuously at 1 bar pressure and 298 K.<br/>&bull; Electrode Reaction: <b>2H<sup>+</sup><sub>(aq, 1 M)</sub> + 2e<sup>-</sup> &hArr; H<sub>2(g, 1 bar)</sub></b>.<br/>&bull; By international IUPAC convention, its standard reduction potential is arbitrarily assigned <b>E&deg; = 0.000 V</b> at all temperatures to serve as a universal reference benchmark for measuring other electrode potentials.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Calculate the standard cell potential (E°_cell) for the reaction: Zn(s) + 2Ag<sup>+</sup>(aq) &rarr; Zn<sup>2+</sup>(aq) + 2Ag(s). Given: E°(Zn<sup>2+</sup>/Zn) = -0.76 V, E°(Ag<sup>+</sup>/Ag) = +0.80 V.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Anode: Zn<sub>(s)</sub> &rarr; Zn<sup>2+</sup> + 2e<sup>-</sup> (Oxidation).<br/>Cathode: Ag<sup>+</sup> + e<sup>-</sup> &rarr; Ag<sub>(s)</sub> (Reduction).<br/>E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub><br/>E&deg;<sub>cell</sub> = E&deg;(Ag<sup>+</sup>/Ag) - E&deg;(Zn<sup>2+</sup>/Zn)<br/>E&deg;<sub>cell</sub> = (+0.80 V) - (-0.76 V) = 0.80 + 0.76 = <b>+1.56 V</b>.<br/>Since E&deg;<sub>cell</sub> &gt; 0, the reaction is spontaneous.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Can a solution of 1 M CuSO4 be stored in a vessel made of Iron? Justify using electrode potentials. (E°_Cu2+/Cu = +0.34 V, E°_Fe2+/Fe = -0.44 V).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      If CuSO<sub>4</sub> is stored in an iron vessel, the possible reaction is: Fe<sub>(s)</sub> + Cu<sup>2+</sup><sub>(aq)</sub> &rarr; Fe<sup>2+</sup><sub>(aq)</sub> + Cu<sub>(s)</sub>.<br/>E&deg;<sub>cell</sub> = E&deg;(Cu<sup>2+</sup>/Cu) - E&deg;(Fe<sup>2+</sup>/Fe) = (+0.34 V) - (-0.44 V) = <b>+0.78 V</b>.<br/>Since E&deg;<sub>cell</sub> is positive, the reaction is spontaneous; Iron will displace Copper, dissolving the vessel and forming holes. Therefore, <b>CuSO<sub>4</sub> CANNOT be stored in an iron container</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Explain the Electrochemical Series and state four of its major practical applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A series in which standard reduction potentials (E&deg;) of half-cells are arranged in order of decreasing or increasing values.<br/>1. <b style="color: #FDC830;">Comparing Oxidizing/Reducing Strength:</b> Low E&deg; (Li = -3.05 V) indicates powerful reductant; high E&deg; (F<sub>2</sub> = +2.87 V) indicates powerful oxidant.<br/>2. <b style="color: #FDC830;">Predicting Feasibility of Redox Reactions:</b> Reaction is feasible if E&deg;<sub>cell</sub> &gt; 0.<br/>3. <b style="color: #FDC830;">Displacement of Metals:</b> Metal with lower E&deg; displaces a metal with higher E&deg; from salt solutions.<br/>4. <b style="color: #FDC830;">Liberation of H<sub>2</sub> Gas:</b> Metals with negative E&deg; displace H<sub>2</sub> gas from dilute mineral acids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Explain the electrochemical mechanism of Rusting of Iron.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Rusting occurs via miniature electrochemical cells on the iron surface in the presence of H<sub>2</sub>O and dissolved O<sub>2</sub>:<br/>&bull; <b style="color: #FDC830;">Anodic Site:</b> Pure iron oxidizes: <b>2Fe<sub>(s)</sub> &rarr; 2Fe<sup>2+</sup> + 4e<sup>-</sup></b> (E&deg; = -0.44 V).<br/>&bull; <b style="color: #FDC830;">Cathodic Site:</b> Electrons migrate through iron to an impurity site where O<sub>2</sub> is reduced in presence of H<sup>+</sup> (from atmospheric CO<sub>2</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>CO<sub>3</sub>): <b>O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>-</sup> &rarr; 2H<sub>2</sub>O</b> (E&deg; = +1.23 V).<br/>&bull; Net Reaction: 2Fe + O<sub>2</sub> + 4H<sup>+</sup> &rarr; 2Fe<sup>2+</sup> + 2H<sub>2</sub>O (E&deg;<sub>cell</sub> = 1.67 V).<br/>Fe<sup>2+</sup> ions further oxidize to form hydrated ferric oxide: <b>Fe<sub>2</sub>O<sub>3</sub> &bull; xH<sub>2</sub>O (Rust)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Explain Sacrificial Protection and Galvanization for preventing the corrosion of iron.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">Sacrificial Protection:</b> Iron is electrically connected to a more reactive metal with more negative E&deg; (such as Zinc or Magnesium). The sacrificial metal acts as the anode, oxidizing preferentially to protect iron (e.g., Mg blocks attached to underground iron pipelines).<br/><b style="color: #FDC830;">Galvanization:</b> Coating iron with a thin protective layer of Zinc. Even if the zinc layer is scratched, Zinc oxidizes preferentially (E&deg;<sub>Zn2+/Zn</sub> = -0.76 V &lt; E&deg;<sub>Fe2+/Fe</sub> = -0.44 V), continuing to shield the underlying iron.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Why is dilute H2SO4 used instead of dilute HCl in KMnO4 titrations?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dilute H<sub>2</sub>SO<sub>4</sub> is an oxidizing acid that does not react with KMnO<sub>4</sub>. If dilute HCl is used, KMnO<sub>4</sub> oxidizes the chloride ions (Cl<sup>-</sup>) of HCl to chlorine gas: <b>2MnO<sub>4</sub><sup>-</sup> + 10Cl<sup>-</sup> + 16H<sup>+</sup> &rarr; 2Mn<sup>2+</sup> + 5Cl<sub>2(g)</sub> + 8H<sub>2</sub>O</b>. This consumes a portion of KMnO<sub>4</sub>, leading to erroneously high titer values.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Why is dilute HNO3 not used to acidify KMnO4 titrations?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nitric acid (HNO<sub>3</sub>) is itself a powerful oxidizing agent. It oxidizes the reducing agent (e.g., Fe<sup>2+</sup> or oxalic acid) independently, competing with KMnO<sub>4</sub> and causing severe titration errors.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Calculate the oxidation number of Iron in: (a) Fe2O3, (b) Fe3O4, (c) [Fe(CN)6]<sup>4-</sup>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FDC830;">Fe<sub>2</sub>O<sub>3</sub>:</b> 2x + 3(-2) = 0 &rArr; <b>x = +3</b>.<br/>(b) <b style="color: #FDC830;">Fe<sub>3</sub>O<sub>4</sub> (Mixed oxide FeO &bull; Fe<sub>2</sub>O<sub>3</sub>):</b> 3x + 4(-2) = 0 &rArr; <b>x = +<sup>8</sup>/<sub>3</sub></b> (One Fe<sup>2+</sup> and two Fe<sup>3+</sup>).<br/>(c) <b style="color: #FDC830;">[Fe(CN)<sub>6</sub>]<sup>4-</sup>:</b> CN has charge -1: x + 6(-1) = -4 &rArr; <b>x = +2</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain why H2O2 acts both as an oxidizing agent and a reducing agent.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In Hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>), Oxygen has an intermediate oxidation state of <b>-1</b> (peroxide).<br/>&bull; As an <b style="color: #FDC830;">Oxidizing Agent:</b> Oxygen is reduced from -1 to -2 (forming H<sub>2</sub>O): H<sub>2</sub>O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>-</sup> &rarr; 2H<sub>2</sub>O.<br/>&bull; As a <b style="color: #FDC830;">Reducing Agent:</b> Oxygen is oxidized from -1 to 0 (liberating O<sub>2</sub> gas): H<sub>2</sub>O<sub>2</sub> &rarr; O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>-</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain the term 'Stock Notation' with three examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Stock notation (Alfred Stock) specifies the oxidation state of a metal in Roman numerals inside parentheses immediately following the metal name/symbol.<br/>&bull; FeCl<sub>2</sub> &rarr; <b>Iron(II) chloride</b>.<br/>&bull; FeCl<sub>3</sub> &rarr; <b>Iron(III) chloride</b>.<br/>&bull; SnCl<sub>4</sub> &rarr; <b>Tin(IV) chloride</b>.<br/>&bull; MnO<sub>2</sub> &rarr; <b>Manganese(IV) oxide</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Identify the oxidizing and reducing agents in: 2FeCl3 + SnCl2 &rarr; 2FeCl2 + SnCl4.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Assign oxidation states:<br/>&bull; Fe in FeCl<sub>3</sub> (+3) &rarr; Fe in FeCl<sub>2</sub> (+2): Gain of electrons (Reduction) &rArr; <b>FeCl<sub>3</sub> is the Oxidizing Agent</b>.<br/>&bull; Sn in SnCl<sub>2</sub> (+2) &rarr; Sn in SnCl<sub>4</sub> (+4): Loss of electrons (Oxidation) &rArr; <b>SnCl<sub>2</sub> is the Reducing Agent</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain why standard reduction potential of Lithium is the most negative (-3.05 V) in the electrochemical series, although its ionization enthalpy is higher than Cesium.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Standard electrode potential for M<sub>(s)</sub> &rarr; M<sup>+</sup><sub>(aq)</sub> + e<sup>-</sup> is governed by three thermodynamic parameters: &Delta;H&deg; = &Delta;<sub>sub</sub>H + &Delta;<sub>i</sub>H + &Delta;<sub>hyd</sub>H.<br/>Due to the extraordinarily small ionic radius of Li<sup>+</sup> (76 pm), its <b>Hydration Enthalpy (&Delta;<sub>hyd</sub>H) is colossally exothermic</b> (-544 kJ/mol). This enormous hydration energy more than compensates for its higher ionization enthalpy, driving the overall free energy change strongly negative and making Lithium the strongest reducing agent in aqueous solution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Determine the oxidation number of each Carbon in: (a) Ethanol (CH3CH2OH), (b) Acetic Acid (CH3COOH).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FDC830;">Ethanol (CH<sub>3</sub>-CH<sub>2</sub>OH):</b><br/>- Methyl carbon (CH<sub>3</sub>-): C bonded to 3 H (+1) and 1 C (0) &rArr; x + 3(+1) = 0 &rArr; <b>C = -3</b>.<br/>- Methylene carbon (-CH<sub>2</sub>OH): C bonded to 2 H (+1), 1 C (0), 1 O (-1) &rArr; x + 2(+1) - 1 = 0 &rArr; <b>C = -1</b>.<br/>(Average = -2).<br/>(b) <b style="color: #FDC830;">Acetic acid (CH<sub>3</sub>-COOH):</b><br/>- Methyl carbon (CH<sub>3</sub>-): <b>C = -3</b>.<br/>- Carboxyl carbon (-COOH): C bonded to =O (-2), -OH (-1), 1 C (0) &rArr; x - 2 - 1 = 0 &rArr; <b>C = +3</b>.<br/>(Average = 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain why Zn displaces Hydrogen from dilute HCl, while Copper does not.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the electrochemical series: E&deg;(Zn<sup>2+</sup>/Zn) = -0.76 V and E&deg;(Cu<sup>2+</sup>/Cu) = +0.34 V.<br/>Zn has a negative reduction potential; it has a higher oxidation tendency than Hydrogen (E&deg; = 0.00 V): <b>Zn + 2H<sup>+</sup> &rarr; Zn<sup>2+</sup> + H<sub>2(g)</sub></b> (E&deg;<sub>cell</sub> = +0.76 V, spontaneous). Copper has a positive reduction potential; it cannot donate electrons to H<sup>+</sup> ions (E&deg;<sub>cell</sub> = -0.34 V, non-spontaneous).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the difference between Primary Cells and Secondary Cells with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">Primary Cells:</b> The redox reaction occurs only once; after use over a period of time, the battery becomes dead and cannot be recharged (e.g., Dry Leclanché Cell, Mercury Cell).<br/><b style="color: #FDC830;">Secondary Cells:</b> The redox reaction can be reversed by passing an external electrical current through it, allowing the battery to be recharged and reused through thousands of cycles (e.g., Lead-acid storage battery, Nickel-Cadmium battery, Lithium-ion battery).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain how Iodometric Titrations work and why starch is added near the end point.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An oxidizing agent is treated with excess KI to liberate an equivalent amount of Iodine: 2I<sup>-</sup> &rarr; I<sub>2</sub> + 2e<sup>-</sup>. The liberated I<sub>2</sub> is titrated against standard Sodium thiosulfate: <b>I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2-</sup> &rarr; 2I<sup>-</sup> + S<sub>4</sub>O<sub>6</sub><sup>2-</sup></b>.<br/>Starch indicator is added only near the end point (when the solution turns pale straw yellow). If added early, starch forms a tight, irreversible adsorption complex with high concentration of I<sub>2</sub> that releases iodine very slowly, causing inaccurate titer results.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Balance the disproportionation of Chlorine in cold dilute NaOH: Cl2 + OH<sup>-</sup> &rarr; Cl<sup>-</sup> + ClO<sup>-</sup> + H2O.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Oxidation half: Cl<sub>2</sub> + 4OH<sup>-</sup> &rarr; 2ClO<sup>-</sup> + 2H<sub>2</sub>O + 2e<sup>-</sup>.<br/>2. Reduction half: Cl<sub>2</sub> + 2e<sup>-</sup> &rarr; 2Cl<sup>-</sup>.<br/>Sum: 2Cl<sub>2</sub> + 4OH<sup>-</sup> &rarr; 2Cl<sup>-</sup> + 2ClO<sup>-</sup> + 2H<sub>2</sub>O.<br/>Dividing by 2 gives the simplest integer equation:<br/><b>Cl<sub>2</sub> + 2OH<sup>-</sup> &rarr; Cl<sup>-</sup> + ClO<sup>-</sup> + H<sub>2</sub>O</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain why fluorine reacts with ice to give: 2H2O(s) + 2F2(g) &rarr; 4HF(g) + O2(g). Identify the oxidant and reductant.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fluorine is a vastly stronger oxidizing agent than Oxygen (E&deg;<sub>F2/F-</sub> = +2.87 V vs E&deg;<sub>O2/H2O</sub> = +1.23 V). In this reaction:<br/>&bull; Fluorine: O.N. decreases from 0 to -1 in HF (Gain of electrons, Reduction) &rArr; <b>F<sub>2</sub> is the Oxidant</b>.<br/>&bull; Oxygen in H<sub>2</sub>O: O.N. increases from -2 to 0 in O<sub>2</sub> (Loss of electrons, Oxidation) &rArr; <b>H<sub>2</sub>O is the Reductant</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Calculate the standard free energy change (&Delta;G°) for the Daniell cell reaction. (F = 96500 C mol<sup>-1</sup>, E°_cell = 1.10 V).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Reaction: Zn<sub>(s)</sub> + Cu<sup>2+</sup><sub>(aq)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + Cu<sub>(s)</sub>.<br/>Number of electrons transferred n = 2.<br/>&Delta;G&deg; = -n F E&deg;<sub>cell</sub><br/>&Delta;G&deg; = -2 &times; 96500 C mol<sup>-1</sup> &times; 1.10 J C<sup>-1</sup><br/>&Delta;G&deg; = -212300 J mol<sup>-1</sup> = <b>-212.3 kJ mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain the redox reaction in a Lead-Acid Storage Battery during discharging.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      During discharge:<br/>&bull; <b style="color: #FDC830;">Anode:</b> Pb<sub>(s)</sub> + SO<sub>4</sub><sup>2-</sup><sub>(aq)</sub> &rarr; PbSO<sub>4(s)</sub> + 2e<sup>-</sup>.<br/>&bull; <b style="color: #FDC830;">Cathode:</b> PbO<sub>2(s)</sub> + 4H<sup>+</sup> + SO<sub>4</sub><sup>2-</sup> + 2e<sup>-</sup> &rarr; PbSO<sub>4(s)</sub> + 2H<sub>2</sub>O.<br/>&bull; <b style="color: #FDC830;">Overall:</b> <b>Pb<sub>(s)</sub> + PbO<sub>2(s)</sub> + 2H<sub>2</sub>SO<sub>4(aq)</sub> &rarr; 2PbSO<sub>4(s)</sub> + 2H<sub>2</sub>O</b>.<br/>H<sub>2</sub>SO<sub>4</sub> is consumed and density of battery electrolyte falls.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain why standard reduction potential of Copper is positive (+0.34 V) while Zinc is negative (-0.76 V).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cu<sub>(s)</sub> &rarr; Cu<sup>2+</sup><sub>(aq)</sub> + 2e<sup>-</sup> requires high sublimation energy (&Delta;<sub>sub</sub>H) and high ionization energy (&Delta;<sub>i</sub>H<sub>1</sub> + &Delta;<sub>i</sub>H<sub>2</sub>) which are not compensated by its hydration enthalpy, making conversion of Cu to Cu<sup>2+</sup> endothermic and non-spontaneous against SHE; hence E&deg; is positive. In Zinc, low ionization enthalpy and favorable hydration make oxidation spontaneous, yielding a negative reduction potential.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Determine the oxidation number of Nitrogen in: (a) NH4NO3, (b) N3H (Hydrazoic acid).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FDC830;">NH<sub>4</sub>NO<sub>3</sub>:</b> Compound composed of NH<sub>4</sub><sup>+</sup> and NO<sub>3</sub><sup>-</sup>.<br/>- In NH<sub>4</sub><sup>+</sup>: x + 4(+1) = +1 &rArr; <b>x = -3</b>.<br/>- In NO<sub>3</sub><sup>-</sup>: y + 3(-2) = -1 &rArr; <b>y = +5</b>.<br/>(b) <b style="color: #FDC830;">N<sub>3</sub>H:</b> 3x + (+1) = 0 &rArr; 3x = -1 &rArr; <b>x = -<sup>1</sup>/<sub>3</sub></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Why does a cut apple turn brown when exposed to air? How is this a redox process?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Apple tissues contain polyphenol oxidase enzymes and phenolic compounds. When sliced and exposed to atmospheric oxygen, the enzyme catalyzes the <b>oxidation of colorless polyphenols into brown quinones</b>, which polymerize to form brown melanin pigments. Dipping sliced apples in lemon juice (vitamin C, a reducing agent) prevents browning by reducing quinones back to phenols.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: What is the oxidation number of Iron in Brown Ring Complex [Fe(H2O)5(NO)]SO4?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the brown ring complex, NO acts as a positive nitrosonium ion (NO<sup>+</sup>):<br/>Complex cation: [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]<sup>2+</sup>.<br/>x + 5(0) + (+1) = +2 &rArr; <b>x = +1</b>.<br/>Iron has an unusual oxidation state of <b>+1</b> (d<sup>7</sup> configuration).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain why H2S is only a reducing agent, while SO2 can act as both an oxidizing and a reducing agent.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In H<sub>2</sub>S, Sulfur is in its lowest possible oxidation state <b>-2</b>. It can only lose electrons (increase O.N.), acting exclusively as a reductant.<br/>In SO<sub>2</sub>, Sulfur is in an intermediate oxidation state <b>+4</b> (range for S is -2 to +6). It can oxidize to +6 (reducing agent) or reduce to 0 or -2 (oxidizing agent).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain how an electric current is generated in a Fuel Cell (H2-O2 fuel cell).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In a Hydrogen-Oxygen fuel cell, H<sub>2</sub> and O<sub>2</sub> gases are bubbled through porous carbon electrodes containing platinum catalysts into aqueous KOH electrolyte:<br/>&bull; Anode: 2H<sub>2(g)</sub> + 4OH<sup>-</sup><sub>(aq)</sub> &rarr; 4H<sub>2</sub>O<sub>(l)</sub> + 4e<sup>-</sup>.<br/>&bull; Cathode: O<sub>2(g)</sub> + 2H<sub>2</sub>O<sub>(l)</sub> + 4e<sup>-</sup> &rarr; 4OH<sup>-</sup><sub>(aq)</sub>.<br/>&bull; Net: <b>2H<sub>2(g)</sub> + O<sub>2(g)</sub> &rarr; 2H<sub>2</sub>O<sub>(l)</sub></b> &nbsp;|&nbsp; E&deg; = 1.23 V.<br/>Produces direct electricity with ~70% efficiency and pure water as the only byproduct.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: What is the oxidation state of Phosphorus in Ba(H2PO2)2?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Barium hypophosphite contains Ba<sup>2+</sup> and two H<sub>2</sub>PO<sub>2</sub><sup>-</sup> ions.<br/>In H<sub>2</sub>PO<sub>2</sub><sup>-</sup>: 2(+1) + x + 2(-2) = -1 &rArr; 2 + x - 4 = -1 &rArr; x - 2 = -1 &rArr; <b>x = +1</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain why Nitric Oxide (NO) forms brown fumes of NO2 in air.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In colorless Nitric oxide gas (NO), Nitrogen has oxidation state +2. When exposed to atmospheric air, NO is readily oxidized by molecular oxygen to Nitrogen dioxide (NO<sub>2</sub>, where N has oxidation state +4): <b>2NO<sub>(g)</sub> + O<sub>2(g)</sub> &rarr; 2NO<sub>2(g)</sub></b>. NO<sub>2</sub> is a paramagnetic gas with a pungent reddish-brown color.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: What is the oxidation state of Platinum in [Pt(NH3)2Cl2]?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      NH<sub>3</sub> is a neutral ligand (charge 0); Cl has charge -1:<br/>x + 2(0) + 2(-1) = 0 &rArr; <b>x = +2</b> (Cisplatin).
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(253, 200, 48, 0.15), rgba(243, 115, 53, 0.15)); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FDC830; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Comprehensive Half-Reaction Derivations, Nernst Formulations, Quantitative Cell Potentials &amp; Metallurgy</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss the Electronic and Oxidation Number Concepts of Redox Reactions in complete depth: Principles, Definitions, and Comparison Matrix.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Electronic Concept:</b><br/>&bull; <i>Oxidation (De-electronation):</i> Process involving loss of electrons (OIL): Na &rarr; Na<sup>+</sup> + e<sup>-</sup>.<br/>&bull; <i>Reduction (Electronation):</i> Process involving gain of electrons (RIG): Cl<sub>2</sub> + 2e<sup>-</sup> &rarr; 2Cl<sup>-</sup>.<br/>&bull; <i>Coupling:</i> Oxidation and reduction occur simultaneously in complementary half-reactions.<br/><br/><b style="color: #FDC830;">2. Oxidation Number Concept:</b><br/>&bull; <i>Oxidation:</i> An algebraic increase in the oxidation number of an element.<br/>&bull; <i>Reduction:</i> An algebraic decrease in the oxidation number of an element.<br/>&bull; <i>Oxidant:</i> Species whose oxidation number decreases; accepts electrons.<br/>&bull; <i>Reductant:</i> Species whose oxidation number increases; donates electrons.<br/><br/><b style="color: #FDC830;">3. Comparison:</b> Electronic concept focuses on localized electron transfer; oxidation number concept tracks electron distribution across covalent and coordinate bonds via formal electronegativity rules.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Explain the 7 Official IUPAC Rules for Assigning Oxidation Numbers and determine the oxidation states in: CrO5, H2S2O8, C3O2, Br3O8, and Fe3O4.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Rules:</b> (1) Pure element = 0; (2) Monoatomic ion = charge; (3) Fluorine = -1 always; (4) Oxygen = -2 (peroxides -1, superoxides -1/2, OF<sub>2</sub> +2); (5) Hydrogen = +1 (hydrides -1); (6) Group 1 = +1, Group 2 = +2; (7) Sum of O.N. = total molecule charge.<br/><br/><b style="color: #FDC830;">2. Analysis of Exceptional Cases:</b><br/>&bull; <i>CrO<sub>5</sub>:</i> Butterfly structure with 1 oxo (=O, -2) and 2 peroxo linkages (-O-O-, -1 each) &rArr; Cr + (-2) + 4(-1) = 0 &rArr; <b>Cr = +6</b>.<br/>&bull; <i>H<sub>2</sub>S<sub>2</sub>O<sub>8</sub>:</i> Peroxodisulfuric acid with 1 peroxo bridge &rArr; 2(+1) + 2S + 6(-2) + 2(-1) = 0 &rArr; <b>S = +6</b>.<br/>&bull; <i>C<sub>3</sub>O<sub>2</sub>:</i> O=C=C=C=O; terminal carbons +2, central carbon 0 &rArr; <b>Average C = +<sup>4</sup>/<sub>3</sub></b>.<br/>&bull; <i>Br<sub>3</sub>O<sub>8</sub>:</i> Terminal Br atoms are +6, central Br is +4 &rArr; <b>Average Br = +<sup>16</sup>/<sub>3</sub></b>.<br/>&bull; <i>Fe<sub>3</sub>O<sub>4</sub>:</i> Mixed oxide FeO (+2) &bull; Fe<sub>2</sub>O<sub>3</sub> (+3) &rArr; <b>Average Fe = +<sup>8</sup>/<sub>3</sub></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Detail the Ion-Electron (Half-Reaction) Method for balancing redox equations in Acidic and Basic media with two fully worked derivations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Method Steps:</b> Split into half-reactions &rarr; Balance atoms other than H and O &rarr; Balance O with H<sub>2</sub>O &rarr; Balance H with H<sup>+</sup> &rarr; Balance charge with e<sup>-</sup> &rarr; Equate electrons and add &rarr; (For basic media: add OH<sup>-</sup> to both sides to neutralize H<sup>+</sup>).<br/><br/><b style="color: #FDC830;">2. Acidic Derivation:</b> Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + SO<sub>2</sub> &rarr; Cr<sup>3+</sup> + SO<sub>4</sub><sup>2-</sup><br/>&bull; Oxidation: [SO<sub>2</sub> + 2H<sub>2</sub>O &rarr; SO<sub>4</sub><sup>2-</sup> + 4H<sup>+</sup> + 2e<sup>-</sup>] &times; 3<br/>&bull; Reduction: [Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + 6e<sup>-</sup> &rarr; 2Cr<sup>3+</sup> + 7H<sub>2</sub>O] &times; 1<br/>&bull; Sum: <b>Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 3SO<sub>2</sub> + 2H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 3SO<sub>4</sub><sup>2-</sup> + H<sub>2</sub>O</b>.<br/><br/><b style="color: #FDC830;">3. Basic Derivation:</b> MnO<sub>4</sub><sup>-</sup> + Br<sup>-</sup> &rarr; MnO<sub>2</sub> + BrO<sub>3</sub><sup>-</sup><br/>&bull; Balanced in acid: 2MnO<sub>4</sub><sup>-</sup> + Br<sup>-</sup> + 2H<sup>+</sup> &rarr; 2MnO<sub>2</sub> + BrO<sub>3</sub><sup>-</sup> + H<sub>2</sub>O.<br/>&bull; Add 2OH<sup>-</sup> to both sides: <b>2MnO<sub>4</sub><sup>-</sup> + Br<sup>-</sup> + H<sub>2</sub>O &rarr; 2MnO<sub>2</sub> + BrO<sub>3</sub><sup>-</sup> + 2OH<sup>-</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss the 4 Main Types of Redox Reactions: Combination, Decomposition, Displacement, and Disproportionation with chemical equations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Combination:</b> Two substances combine into one with O.N. change: C<sup>0</sup> + O<sub>2</sub><sup>0</sup> &rarr; C<sup>+4</sup>O<sub>2</sub><sup>-2</sup>; 3Mg + N<sub>2</sub> &rarr; Mg<sub>3</sub>N<sub>2</sub>.<br/><br/><b style="color: #FDC830;">2. Decomposition:</b> Breakdown into simpler substances with O.N. change: 2KClO<sub>3</sub><sup>+5</sup> &rarr; 2KCl<sup>-1</sup> + 3O<sub>2</sub><sup>0</sup>. (Non-redox: CaCO<sub>3</sub> &rarr; CaO + CO<sub>2</sub>).<br/><br/><b style="color: #FDC830;">3. Displacement:</b><br/>&bull; <i>Metal Displacement:</i> Cu + 2AgNO<sub>3</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2Ag.<br/>&bull; <i>Non-Metal Displacement:</i> 2Na + 2H<sub>2</sub>O &rarr; 2NaOH + H<sub>2</sub>; Cl<sub>2</sub> + 2KBr &rarr; 2KCl + Br<sub>2</sub>.<br/><br/><b style="color: #FDC830;">4. Disproportionation:</b> Same element simultaneously oxidized and reduced:<br/>&bull; 2H<sub>2</sub>O<sub>2</sub><sup>-1</sup> &rarr; 2H<sub>2</sub>O<sup>-2</sup> + O<sub>2</sub><sup>0</sup>.<br/>&bull; P<sub>4</sub><sup>0</sup> + 3OH<sup>-</sup> + 3H<sub>2</sub>O &rarr; PH<sub>3</sub><sup>-3</sup> + 3H<sub>2</sub>PO<sub>2</sub><sup>-+1</sup>.<br/>&bull; Cl<sub>2</sub><sup>0</sup> + 2OH<sup>-</sup> &rarr; Cl<sup>-1</sup> + ClO<sup>-+1</sup> + H<sub>2</sub>O.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Explain the Electrochemical Cell (Galvanic Daniell Cell): Construction, Electrode Reactions, Salt Bridge Mechanism, and Cell Representation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Architecture:</b> Zinc electrode in ZnSO<sub>4</sub> (Anode, left) and Copper electrode in CuSO<sub>4</sub> (Cathode, right) connected via external wire and internal Salt Bridge.<br/><br/><b style="color: #FDC830;">2. Electrode Reactions:</b><br/>&bull; Anode (Oxidation): Zn<sub>(s)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + 2e<sup>-</sup> (E&deg; = -0.76 V).<br/>&bull; Cathode (Reduction): Cu<sup>2+</sup><sub>(aq)</sub> + 2e<sup>-</sup> &rarr; Cu<sub>(s)</sub> (E&deg; = +0.34 V).<br/>&bull; Overall: Zn<sub>(s)</sub> + Cu<sup>2+</sup><sub>(aq)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + Cu<sub>(s)</sub>.<br/><br/><b style="color: #FDC830;">3. Salt Bridge Functions:</b> Inverted U-tube containing agar-agar with KCl; closes electric circuit, maintains electroneutrality via Cl<sup>-</sup> &rarr; anode and K<sup>+</sup> &rarr; cathode, and prevents liquid junction potential.<br/><br/><b style="color: #FDC830;">4. Cell Representation:</b> Zn<sub>(s)</sub> | Zn<sup>2+</sup><sub>(aq, 1 M)</sub> || Cu<sup>2+</sup><sub>(aq, 1 M)</sub> | Cu<sub>(s)</sub> &nbsp;|&nbsp; E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub> = 0.34 - (-0.76) = <b>1.10 V</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Describe the Standard Hydrogen Electrode (SHE): Experimental Setup, Reactions, Limitations, and Measurement of Standard Electrode Potentials.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Setup:</b> Platinum foil coated with platinum black immersed in 1 M H<sup>+</sup> solution; pure H<sub>2</sub> gas bubbled at 1 bar and 298 K. Representation: Pt<sub>(s)</sub> | H<sub>2(g, 1 bar)</sub> | H<sup>+</sup><sub>(aq, 1 M)</sub>.<br/><br/><b style="color: #FDC830;">2. Assigned Potential:</b> By international convention, <b>E&deg;<sub>H+/H2</sub> = 0.000 V</b>.<br/><br/><b style="color: #FDC830;">3. Measurement:</b> Coupled with unknown half-cell. If connected to Zn/Zn<sup>2+</sup>, electrons flow from Zn to SHE; cell EMF = 0.76 V &rArr; E&deg;(Zn<sup>2+</sup>/Zn) = -0.76 V. If connected to Cu/Cu<sup>2+</sup>, electrons flow from SHE to Cu; EMF = 0.34 V &rArr; E&deg;(Cu<sup>2+</sup>/Cu) = +0.34 V.<br/><br/><b style="color: #FDC830;">4. Practical Limitations:</b> Difficult to maintain unit H<sup>+</sup> activity and exactly 1 bar H<sub>2</sub> pressure; platinum black is easily poisoned by impurities.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Discuss the Electrochemical Series in comprehensive depth: Arrangement, Features, and Four Major Industrial/Laboratory Applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Concept:</b> Tabulation of standard reduction potentials E&deg; at 298 K relative to SHE.<br/>&bull; Top: Li<sup>+</sup>/Li (-3.05 V) &rarr; highest oxidation tendency, strongest reducing agent.<br/>&bull; Bottom: F<sub>2</sub>/F<sup>-</sup> (+2.87 V) &rarr; highest reduction tendency, strongest oxidizing agent.<br/><br/><b style="color: #FDC830;">2. Applications:</b><br/>&bull; <i>Relative Reactivities:</i> Any metal with lower E&deg; can displace a metal with higher E&deg; from its aqueous solution (Zn displaces Cu).<br/>&bull; <i>Feasibility of Reactions:</i> E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub> &gt; 0 &rArr; &Delta;G&deg; &lt; 0 (Spontaneous).<br/>&bull; <i>Hydrogen Displacement:</i> Metals with negative E&deg; displace H<sub>2</sub> from acids.<br/>&bull; <i>Corrosion Prevention:</i> Zinc coating sacrificially protects iron because E&deg;<sub>Zn</sub> &lt; E&deg;<sub>Fe</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Explain the Electrochemical Mechanism of Rusting of Iron and discuss Four Methods of Corrosion Prevention.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Mechanism:</b> Iron surface behaves as a miniature electrochemical cell in presence of H<sub>2</sub>O and atmospheric O<sub>2</sub>:<br/>&bull; Anode: 2Fe<sub>(s)</sub> &rarr; 2Fe<sup>2+</sup> + 4e<sup>-</sup> (E&deg; = -0.44 V).<br/>&bull; Cathode: O<sub>2(g)</sub> + 4H<sup>+</sup> + 4e<sup>-</sup> &rarr; 2H<sub>2</sub>O (E&deg; = +1.23 V).<br/>&bull; Overall: 2Fe + O<sub>2</sub> + 4H<sup>+</sup> &rarr; 2Fe<sup>2+</sup> + 2H<sub>2</sub>O (E&deg; = +1.67 V).<br/>Fe<sup>2+</sup> further oxidizes: 4Fe<sup>2+</sup> + O<sub>2</sub> + (4 + 2x)H<sub>2</sub>O &rarr; <b>2Fe<sub>2</sub>O<sub>3</sub> &bull; xH<sub>2</sub>O (Rust)</b> + 8H<sup>+</sup>.<br/><br/><b style="color: #FDC830;">2. Prevention:</b><br/>(1) Barrier protection (painting, oiling, enameling).<br/>(2) Galvanization (sacrificial zinc coating).<br/>(3) Cathodic protection (attaching sacrificial Mg/Zn anodes).<br/>(4) Use of anti-rust solutions (alkaline phosphate/chromate).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Discuss Redox Titrations in analytical chemistry: Permanganometry, Dichrometry, and Iodometry with chemical equations and indicator principles.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. Permanganometry (KMnO<sub>4</sub>):</b> Operates in dilute H<sub>2</sub>SO<sub>4</sub> medium: MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup> + 4H<sub>2</sub>O. Acts as its own <b>Self-Indicator</b> (intense purple to colorless, end point faint pink). Used to standardize Fe<sup>2+</sup>, oxalic acid, and H<sub>2</sub>O<sub>2</sub>.<br/><br/><b>2. Dichrometry (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>):</b> Operates in acidic medium: Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + 6e<sup>-</sup> &rarr; 2Cr<sup>3+</sup> + 7H<sub>2</sub>O. Does not oxidize Cl<sup>-</sup>; can be used in presence of HCl. Requires <b>Diphenylamine</b> internal redox indicator (turns deep violet).<br/><br/><b style="color: #FDC830;">3. Iodometry &amp; Iodimetry:</b> Titration of liberated I<sub>2</sub> against standard Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>: I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2-</sup> &rarr; 2I<sup>-</sup> + S<sub>4</sub>O<sub>6</sub><sup>2-</sup> (Tetrathionate). Uses freshly prepared <b>Starch indicator</b> (sharp dark blue to colorless).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Calculate the standard cell potential (E°_cell), standard free energy change (&Delta;G°), and equilibrium constant (K) at 298 K for: 2Fe<sup>3+</sup>(aq) + 2I<sup>-</sup>(aq) &rarr; 2Fe<sup>2+</sup>(aq) + I2(s). Given: E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = +0.77 V, E°(I2/I<sup>-</sup>) = +0.54 V, F = 96500 C mol<sup>-1</sup>, R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. Calculate E&deg;<sub>cell</sub>:</b><br/>Cathode (Reduction): Fe<sup>3+</sup> + e<sup>-</sup> &rarr; Fe<sup>2+</sup> (E&deg; = +0.77 V).<br/>Anode (Oxidation): 2I<sup>-</sup> &rarr; I<sub>2</sub> + 2e<sup>-</sup> (E&deg; = +0.54 V).<br/>E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub> = 0.77 - 0.54 = <b>+0.23 V</b>.<br/><br/><b style="color: #FDC830;">2. Calculate &Delta;G&deg;:</b><br/>n = 2 moles of electrons transferred.<br/>&Delta;G&deg; = -n F E&deg;<sub>cell</sub> = -2 &times; 96500 &times; 0.23 = <b>-44390 J mol<sup>-1</sup> = -44.39 kJ mol<sup>-1</sup></b>.<br/><br/><b style="color: #FDC830;">3. Calculate Equilibrium Constant K:</b><br/>log<sub>10</sub> K = (n E&deg;<sub>cell</sub>) / 0.0591 = (2 &times; 0.23) / 0.0591 = 0.46 / 0.0591 = 7.783.<br/>K = 10<sup>7.783</sup> = <b>6.07 &times; 10<sup>7</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain the concept of Fractional Oxidation Numbers with structural derivations for: C3O2, Br3O8, and Na2S4O6.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fractional oxidation numbers arise when atoms of the same element in a molecule occupy chemically non-equivalent structural environments. The calculated value represents the mathematical average:<br/>1. <b style="color: #FDC830;">Carbon Suboxide (C<sub>3</sub>O<sub>2</sub>):</b> Structure: O=C=C=C=O. Terminal carbons are bonded to electronegative Oxygen &rArr; O.N. = +2. Central carbon is bonded only to identical Carbon atoms &rArr; O.N. = 0. Average O.N. = (2 + 0 + 2) / 3 = <b>+<sup>4</sup>/<sub>3</sub></b>.<br/>2. <b style="color: #FDC830;">Tribromooctoxide (Br<sub>3</sub>O<sub>8</sub>):</b> Terminal Br atoms are each bonded to three oxygens &rArr; O.N. = +6. Central Br is bonded to two oxygens and two Br atoms &rArr; O.N. = +4. Average = (6 + 4 + 6) / 3 = <b>+<sup>16</sup>/<sub>3</sub></b>.<br/>3. <b style="color: #FDC830;">Tetrathionate ion (S<sub>4</sub>O<sub>6</sub><sup>2-</sup>):</b> Structure: <sup>-</sup>O<sub>3</sub>S-S-S-SO<sub>3</sub><sup>-</sup>. Two terminal S atoms have O.N. = +5; two central sulfur atoms in the disulfane bridge have O.N. = 0. Average = (5 + 0 + 0 + 5) / 4 = <b>+2.5</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Explain why the reaction between KMnO4 and Mohr's salt is carried out in acidic medium and calculate its stoichiometric ratio.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mohr's salt is Ferrous ammonium sulfate: FeSO<sub>4</sub> &bull; (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> &bull; 6H<sub>2</sub>O, providing stable Fe<sup>2+</sup> ions.<br/>In acidic medium: MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup> + 4H<sub>2</sub>O (&times; 1)<br/>Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + e<sup>-</sup> (&times; 5)<br/>Overall equation: <b>MnO<sub>4</sub><sup>-</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> &rarr; Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O</b>.<br/>Stoichiometric Ratio: <b>1 mole KMnO<sub>4</sub> reacts with exactly 5 moles of Fe<sup>2+</sup></b>. In neutral or basic medium, MnO<sub>4</sub><sup>-</sup> reduces to insoluble brown MnO<sub>2</sub> precipitate, obscuring the titration end point.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Discuss the Nernst Equation for a general redox half-cell and full galvanic cell, and show how it predicts the effect of concentration on cell EMF.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Half-Cell Equation:</b> M<sup>n+</sup> + n e<sup>-</sup> &rarr; M<sub>(s)</sub>.<br/>E = E&deg; - (RT / nF) ln(1 / [M<sup>n+</sup>]) = <b>E&deg; + (0.0591 / n) log<sub>10</sub> [M<sup>n+</sup>]</b> at 298 K.<br/><br/><b style="color: #FDC830;">2. Full Galvanic Cell (Daniell Cell):</b><br/>Zn<sub>(s)</sub> + Cu<sup>2+</sup><sub>(aq)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + Cu<sub>(s)</sub>.<br/>E<sub>cell</sub> = E&deg;<sub>cell</sub> - (0.0591 / 2) log<sub>10</sub> ([Zn<sup>2+</sup>] / [Cu<sup>2+</sup>]).<br/><br/><b style="color: #FDC830;">3. Concentration Effects:</b><br/>&bull; Increasing [Cu<sup>2+</sup>] increases cell potential E<sub>cell</sub>.<br/>&bull; Increasing [Zn<sup>2+</sup>] decreases cell potential E<sub>cell</sub>.<br/>&bull; At equilibrium, E<sub>cell</sub> = 0, which gives E&deg;<sub>cell</sub> = (0.0591 / n) log K.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the Industrial Applications of Redox Reactions in Metallurgy: Extraction of Iron in Blast Furnace and Copper in Bessemer Converter.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Extraction of Iron:</b> In the blast furnace, Haematite (Fe<sub>2</sub>O<sub>3</sub>) is reduced to molten pig iron via carbon monoxide and coke:<br/>3Fe<sub>2</sub>O<sub>3</sub> + CO &rarr; 2Fe<sub>3</sub>O<sub>4</sub> + CO<sub>2</sub><br/>Fe<sub>3</sub>O<sub>4</sub> + CO &rarr; 3FeO + CO<sub>2</sub><br/><b>FeO + CO &rarr; Fe + CO<sub>2</sub></b> (Net redox reduction of Fe from +3 to 0).<br/><br/><b style="color: #FDC830;">2. Extraction of Copper (Auto-reduction):</b> In the Bessemer converter, Copper glance (Cu<sub>2</sub>S) undergoes self-reduction with copper oxide:<br/>2Cu<sub>2</sub>S + 3O<sub>2</sub> &rarr; 2Cu<sub>2</sub>O + 2SO<sub>2</sub><br/><b>2Cu<sub>2</sub>O + Cu<sub>2</sub>S &rarr; 6Cu + SO<sub>2</sub></b> (Copper reduced from +1 to 0; sulfur oxidized from -2 to +4 in SO<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain why the compound NO2 dimerizes to N2O4, and discuss the redox nature of this reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nitrogen dioxide (NO<sub>2</sub>) is an odd-electron molecule with 17 valence electrons. Nitrogen has an unpaired electron in an sp<sup>2</sup> hybrid orbital, making NO<sub>2</sub> paramagnetic and chemically reactive.<br/>To achieve a stable, paired electronic octet, two NO<sub>2</sub> molecules dimerize by pairing their odd electrons to form a central N-N covalent single bond: <b>2NO<sub>2</sub> (Brown, Paramagnetic) &hArr; N<sub>2</sub>O<sub>4</sub> (Colorless, Diamagnetic)</b>.<br/>The oxidation number of Nitrogen remains <b>+4</b> in both species; this is an association reaction that pairs electrons without formal change in oxidation numbers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Balance the following complex redox equation in acidic medium by the ion-electron method: As2S3 + NO3<sup>-</sup> + H<sup>+</sup> &rarr; H3AsO4 + SO4<sup>2-</sup> + NO + H2O.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Oxidation half (both As and S are oxidized):<br/>As<sub>2</sub>S<sub>3</sub> &rarr; 2H<sub>3</sub>AsO<sub>4</sub> + 3SO<sub>4</sub><sup>2-</sup><br/>Balance O and H:<br/>As<sub>2</sub>S<sub>3</sub> + 20H<sub>2</sub>O &rarr; 2H<sub>3</sub>AsO<sub>4</sub> + 3SO<sub>4</sub><sup>2-</sup> + 34H<sup>+</sup> + 28e<sup>-</sup> &nbsp;(&times; 3)<br/>2. Reduction half:<br/>NO<sub>3</sub><sup>-</sup> + 4H<sup>+</sup> + 3e<sup>-</sup> &rarr; NO + 2H<sub>2</sub>O &nbsp;(&times; 28)<br/>3. Multiply and add:<br/>3As<sub>2</sub>S<sub>3</sub> + 60H<sub>2</sub>O + 28NO<sub>3</sub><sup>-</sup> + 112H<sup>+</sup> &rarr; 6H<sub>3</sub>AsO<sub>4</sub> + 9SO<sub>4</sub><sup>2-</sup> + 102H<sup>+</sup> + 28NO + 56H<sub>2</sub>O.<br/>Cancel common H<sub>2</sub>O and H<sup>+</sup>:<br/><b>3As<sub>2</sub>S<sub>3</sub> + 28NO<sub>3</sub><sup>-</sup> + 4H<sub>2</sub>O + 10H<sup>+</sup> &rarr; 6H<sub>3</sub>AsO<sub>4</sub> + 9SO<sub>4</sub><sup>2-</sup> + 28NO</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain why Potassium Permanganate (KMnO4) is prepared industrially from Pyrolusite ore (MnO2) via alkaline oxidative fusion.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Step 1: Alkaline Oxidative Fusion:</b> Finely powdered Pyrolusite (MnO<sub>2</sub>, O.N. = +4) is fused with potassium hydroxide (KOH) in the presence of air (O<sub>2</sub>) or KNO<sub>3</sub> oxidant:<br/><b>2MnO<sub>2</sub> + 4KOH + O<sub>2</sub> &rarr; 2K<sub>2</sub>MnO<sub>4</sub> (Potassium Manganate, Dark Green) + 2H<sub>2</sub>O</b>.<br/>Manganese is oxidized from +4 to +6.<br/><br/><b style="color: #FDC830;">2. Step 2: Electrolytic Oxidation:</b> The green manganate solution is oxidized electrolytically at iron anodes:<br/>MnO<sub>4</sub><sup>2-</sup> &rarr; MnO<sub>4</sub><sup>-</sup> (Permanganate, Purple) + e<sup>-</sup>.<br/>Manganese is oxidized from +6 to +7.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain the biological significance of Redox Reactions in Photosynthesis and Cellular Respiration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Photosynthesis:</b> Light energy drives an endergonic redox reaction where water is oxidized to oxygen and CO<sub>2</sub> is reduced to glucose: <b>6CO<sub>2</sub> + 6H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></b>. Chlorophyll captures photons to power the electron transport chain.<br/><br/><b style="color: #FDC830;">2. Cellular Respiration:</b> Glucose is oxidized to CO<sub>2</sub> while Oxygen is reduced to H<sub>2</sub>O: <b>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O</b> (&Delta;G&deg; = -2870 kJ/mol). The released free energy is coupled to generate 36-38 ATP molecules via the mitochondrial electron transport chain (NADH/FADH<sub>2</sub> oxidation).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Discuss the Chemistry of Bleaching Agents: Chlorine vs Sulfur Dioxide bleaching mechanisms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">Chlorine Bleaching (Oxidative Bleaching):</b> Chlorine reacts with moisture to generate nascent oxygen: Cl<sub>2</sub> + H<sub>2</sub>O &rarr; 2HCl + [O]. The nascent oxygen permanently oxidizes colored organic pigments into colorless oxidation products: <b>Colored dye + [O] &rarr; Colorless substance</b>. Permanent bleaching; damages delicate fabrics like silk/wool.<br/><b style="color: #FDC830;">Sulfur Dioxide Bleaching (Reductive Bleaching):</b> SO<sub>2</sub> in moisture liberates nascent hydrogen: SO<sub>2</sub> + 2H<sub>2</sub>O &rarr; H<sub>2</sub>SO<sub>4</sub> + 2[H]. Nascent hydrogen reduces colored matter to colorless leuco-compounds: <b>Colored dye + 2[H] &rarr; Colorless substance</b>. Temporary bleaching; atmospheric oxygen slowly re-oxidizes the substance back to its original color.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FDC830; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an exhaustive Master Synthesis Matrix correlating Oxidation Numbers, Balancing Techniques, Galvanic Cells, and Industrial Applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FDC830;">1. Core Concepts:</b> Modern electron transfer (OIL RIG) and formal oxidation number rules (&Sigma; O.N. = net charge; exceptional structures CrO<sub>5</sub> +6, H<sub>2</sub>SO<sub>5</sub> +6).<br/><br/><b style="color: #FDC830;">2. Balancing Algorithms:</b> Oxidation number method (equating O.N. changes) and ion-electron method (acidic H<sup>+</sup>/H<sub>2</sub>O vs basic OH<sup>-</sup>/H<sub>2</sub>O balancing).<br/><br/><b style="color: #FDC830;">3. Electrochemical Cells:</b> Galvanic Daniell cell converts &Delta;G&deg; to electrical potential (E&deg;<sub>cell</sub> = 1.10 V); Salt bridge maintains electroneutrality; SHE benchmark (0.00 V).<br/><br/><b style="color: #FDC830;">4. Thermodynamic Coupling:</b> &Delta;G&deg; = -nFE&deg;<sub>cell</sub> = -2.303 RT log K.<br/><br/><b style="color: #FDC830;">5. Industrial Applications:</b> Self-indicating permanganometry, iodometric thiosulfate titrations, metallurgical blast furnace extraction, and sacrificial cathodic protection against rust.
    </div>
  </div>

</div>
`;

export const c11Chem7Mcqs = [
  {
    "id": "c11-chem-7-mcq-1",
    "question": "According to the modern electronic concept, oxidation is defined as:",
    "options": [
      "A):   Gain of electrons",
      "B):   Loss of electrons",
      "C):   Addition of hydrogen",
      "D):   Decrease in positive valency"
    ],
    "correctAnswer": "b",
    "explanation": "Oxidation is the process involving loss of electrons (OIL - Oxidation Is Loss)."
  },
  {
    "id": "c11-chem-7-mcq-2",
    "question": "What is the oxidation number of Oxygen in Potassium Superoxide (KO<sub>2</sub>)?",
    "options": [
      "A):   -2",
      "B):   -1",
      "C):   -1/2",
      "D):   +2"
    ],
    "correctAnswer": "c",
    "explanation": "In superoxides, the superoxide ion is O<sub>2</sub><sup>-</sup>, giving each oxygen atom an oxidation number of -1/2."
  },
  {
    "id": "c11-chem-7-mcq-3",
    "question": "The oxidation state of Chromium in Chromium Peroxide (CrO<sub>5</sub>) with a butterfly structure is:",
    "options": [
      "A):   +10",
      "B):   +6",
      "C):   +4",
      "D):   +3"
    ],
    "correctAnswer": "b",
    "explanation": "CrO<sub>5</sub> contains one oxo oxygen (=O, -2) and two peroxide linkages (-O-O-, four oxygens at -1 each): Cr + (-2) + 4(-1) = 0 &rArr; Cr = +6."
  },
  {
    "id": "c11-chem-7-mcq-4",
    "question": "Which of the following is a Disproportionation reaction?",
    "options": [
      "A):   2Na + Cl<sub>2</sub> &rarr; 2NaCl",
      "B):   CaCO<sub>3</sub> &rarr; CaO + CO<sub>2</sub>",
      "C):   2H<sub>2</sub>O<sub>2</sub> &rarr; 2H<sub>2</sub>O + O<sub>2</sub>",
      "D):   Zn + CuSO<sub>4</sub> &rarr; ZnSO<sub>4</sub> + Cu"
    ],
    "correctAnswer": "c",
    "explanation": "In H<sub>2</sub>O<sub>2</sub>, oxygen has O.N. -1 and is simultaneously reduced to -2 (in H<sub>2</sub>O) and oxidized to 0 (in O<sub>2</sub>)."
  },
  {
    "id": "c11-chem-7-mcq-5",
    "question": "Why can Fluorine NOT undergo a disproportionation reaction?",
    "options": [
      "A):   Fluorine is a gas",
      "B):   Fluorine exhibits only 0 and -1 oxidation states due to highest electronegativity",
      "C):   Fluorine has low ionization enthalpy",
      "D):   Fluorine has d-orbitals"
    ],
    "correctAnswer": "b",
    "explanation": "As the most electronegative element, Fluorine cannot show positive oxidation states, making simultaneous oxidation impossible."
  },
  {
    "id": "c11-chem-7-mcq-6",
    "question": "In the Daniell Cell (Zn-Cu), which electrode acts as the negative Anode?",
    "options": [
      "A):   Copper electrode",
      "B):   Zinc electrode",
      "C):   Platinum wire",
      "D):   Salt bridge"
    ],
    "correctAnswer": "b",
    "explanation": "Zinc has a lower reduction potential (-0.76 V) and oxidizes readily, acting as the negative anode."
  },
  {
    "id": "c11-chem-7-mcq-7",
    "question": "What is the standard cell potential (E°_cell) of a standard Daniell Cell?",
    "options": [
      "A):   0.76 V",
      "B):   1.10 V",
      "C):   0.34 V",
      "D):   2.00 V"
    ],
    "correctAnswer": "b",
    "explanation": "E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub> = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "c11-chem-7-mcq-8",
    "question": "The standard reduction potential of the Standard Hydrogen Electrode (SHE) is:",
    "options": [
      "A):   1.000 V",
      "B):   0.000 V",
      "C):   -0.76 V",
      "D):   +0.34 V"
    ],
    "correctAnswer": "b",
    "explanation": "By international IUPAC agreement, the potential of the standard hydrogen electrode is assigned exactly 0.000 V at all temperatures."
  },
  {
    "id": "c11-chem-7-mcq-9",
    "question": "What is the oxidation number of Sulfur in Caro's Acid (H<sub>2</sub>SO<sub>5</sub>)?",
    "options": [
      "A):   +8",
      "B):   +6",
      "C):   +4",
      "D):   +2"
    ],
    "correctAnswer": "b",
    "explanation": "Caro's acid contains one peroxo linkage (-O-O-): 2(+1) + S + 3(-2) + 2(-1) = 0 &rArr; S = +6."
  },
  {
    "id": "c11-chem-7-mcq-10",
    "question": "Why does Zinc protect Iron from rusting in Galvanization?",
    "options": [
      "A):   Zinc is harder than iron",
      "B):   Zinc has a more negative reduction potential (-0.76 V) and oxidizes sacrificially",
      "C):   Zinc forms an insoluble salt with iron",
      "D):   Zinc is a noble metal"
    ],
    "correctAnswer": "b",
    "explanation": "Because E&deg;(Zn<sup>2+</sup>/Zn) = -0.76 V is more negative than E&deg;(Fe<sup>2+</sup>/Fe) = -0.44 V, zinc oxidizes sacrificially in preference to iron."
  },
  {
    "id": "c11-chem-7-mcq-11",
    "question": "Which of the following is used as an inert electrolyte in a Salt Bridge?",
    "options": [
      "A):   H<sub>2</sub>SO<sub>4</sub>",
      "B):   KCl",
      "C):   NaOH",
      "D):   CH<sub>3</sub>COOH"
    ],
    "correctAnswer": "b",
    "explanation": "KCl is preferred because K<sup>+</sup> and Cl<sup>-</sup> ions have almost identical ionic mobilities, minimizing junction potentials."
  },
  {
    "id": "c11-chem-7-mcq-12",
    "question": "The oxidation number of Carbon in Carbon Suboxide (C<sub>3</sub>O<sub>2</sub>) is:",
    "options": [
      "A):   +2",
      "B):   +4/3",
      "C):   +1",
      "D):   0"
    ],
    "correctAnswer": "b",
    "explanation": "In O=C=C=C=O, terminal carbons are +2 and central carbon is 0; average O.N. = +4/3."
  },
  {
    "id": "c11-chem-7-mcq-13",
    "question": "In the reaction: 2FeCl<sub>3</sub> + SnCl<sub>2</sub> &rarr; 2FeCl<sub>2</sub> + SnCl<sub>4</sub>, the reducing agent is:",
    "options": [
      "A):   FeCl<sub>3</sub>",
      "B):   SnCl<sub>2</sub>",
      "C):   FeCl<sub>2</sub>",
      "D):   SnCl<sub>4</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "Tin is oxidized from +2 to +4, so SnCl<sub>2</sub> is the reducing agent."
  },
  {
    "id": "c11-chem-7-mcq-14",
    "question": "Which acid should be used to acidify KMnO<sub>4</sub> solution in redox titrations?",
    "options": [
      "A):   Dilute HCl",
      "B):   Dilute HNO<sub>3</sub>",
      "C):   Dilute H<sub>2</sub>SO<sub>4</sub>",
      "D):   Concentrated HCl"
    ],
    "correctAnswer": "c",
    "explanation": "Dilute H<sub>2</sub>SO<sub>4</sub> is not oxidized by KMnO<sub>4</sub>, unlike HCl which oxidizes to Cl<sub>2</sub>, or HNO<sub>3</sub> which interferes as an oxidant."
  },
  {
    "id": "c11-chem-7-mcq-15",
    "question": "The oxidation state of Nitrogen in Hydrazoic acid (N<sub>3</sub>H) is:",
    "options": [
      "A):   -3",
      "B):   -1/3",
      "C):   +3",
      "D):   +1"
    ],
    "correctAnswer": "b",
    "explanation": "3x + (+1) = 0 &rArr; x = -1/3."
  },
  {
    "id": "c11-chem-7-mcq-16",
    "question": "What is the stoichiometric ratio of KMnO<sub>4</sub> to Fe<sup>2+</sup> in acidic medium?",
    "options": [
      "A):   1 : 1",
      "B):   1 : 5",
      "C):   2 : 5",
      "D):   1 : 2"
    ],
    "correctAnswer": "b",
    "explanation": "MnO<sub>4</sub><sup>-</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> &rarr; Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O, so 1 mole of KMnO<sub>4</sub> reacts with 5 moles of Fe<sup>2+</sup>."
  },
  {
    "id": "c11-chem-7-mcq-17",
    "question": "Which of the following elements has the highest reduction potential in the electrochemical series?",
    "options": [
      "A):   Lithium",
      "B):   Fluorine",
      "C):   Chlorine",
      "D):   Oxygen"
    ],
    "correctAnswer": "b",
    "explanation": "Fluorine has E&deg; = +2.87 V, making it the strongest oxidizing agent in the electrochemical series."
  },
  {
    "id": "c11-chem-7-mcq-18",
    "question": "What is the oxidation state of Iron in the Brown Ring complex [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]SO<sub>4</sub>?",
    "options": [
      "A):   +1",
      "B):   +2",
      "C):   +3",
      "D):   0"
    ],
    "correctAnswer": "a",
    "explanation": "In the brown ring complex, NO exists as NO<sup>+</sup>, giving Iron an oxidation state of +1."
  },
  {
    "id": "c11-chem-7-mcq-19",
    "question": "Which of the following compounds exhibits fractional oxidation state for Bromine?",
    "options": [
      "A):   KBr",
      "B):   Br<sub>3</sub>O<sub>8</sub>",
      "C):   HBrO<sub>3</sub>",
      "D):   BrF<sub>3</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "In Br<sub>3</sub>O<sub>8</sub>, the average oxidation state of Bromine is +16/3."
  },
  {
    "id": "c11-chem-7-mcq-20",
    "question": "For a spontaneous cell reaction, standard free energy change (&Delta;G°) and cell potential (E°_cell) must be:",
    "options": [
      "A):   &Delta;G&deg; &gt; 0 and E&deg;<sub>cell</sub> &gt; 0",
      "B):   &Delta;G&deg; &lt; 0 and E&deg;<sub>cell</sub> &gt; 0",
      "C):   &Delta;G&deg; &lt; 0 and E&deg;<sub>cell</sub> &lt; 0",
      "D):   &Delta;G&deg; = 0 and E&deg;<sub>cell</sub> = 0"
    ],
    "correctAnswer": "b",
    "explanation": "&Delta;G&deg; = -n F E&deg;<sub>cell</sub>; a positive E&deg;<sub>cell</sub> ensures a negative &Delta;G&deg; for spontaneous reaction."
  },
  {
    "id": "c11-chem-7-mcq-21",
    "question": "Which indicator is used in the redox titration of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> with Mohr's salt?",
    "options": [
      "A):   Phenolphthalein",
      "B):   Diphenylamine",
      "C):   Methyl orange",
      "D):   Starch"
    ],
    "correctAnswer": "b",
    "explanation": "Diphenylamine is the standard internal redox indicator for dichromate titrations, producing a deep violet color at end point."
  },
  {
    "id": "c11-chem-7-mcq-22",
    "question": "Why does Lithium have the most negative standard reduction potential (-3.05 V)?",
    "options": [
      "A):   Low ionization enthalpy",
      "B):   Extremely high exothermic hydration enthalpy due to tiny Li<sup>+</sup> ion size",
      "C):   High sublimation enthalpy",
      "D):   High electronegativity"
    ],
    "correctAnswer": "b",
    "explanation": "The exceptionally high hydration energy of tiny Li<sup>+</sup> drives its overall oxidation potential to the most negative value in aqueous solution."
  },
  {
    "id": "c11-chem-7-mcq-23",
    "question": "What is the oxidation number of Sulfur in Marshall's acid (H<sub>2</sub>S<sub>2</sub>O<sub>8</sub>)?",
    "options": [
      "A):   +7",
      "B):   +6",
      "C):   +8",
      "D):   +4"
    ],
    "correctAnswer": "b",
    "explanation": "Marshall's acid has a peroxo bridge (-O-O-): 2(+1) + 2S + 6(-2) + 2(-1) = 0 &rArr; 2S = 12 &rArr; S = +6."
  },
  {
    "id": "c11-chem-7-mcq-24",
    "question": "In Iodometric titrations, when is the starch indicator added?",
    "options": [
      "A):   At the very beginning of titration",
      "B):   Near the end point when the solution turns pale yellow",
      "C):   After the equivalence point",
      "D):   Before adding KI"
    ],
    "correctAnswer": "b",
    "explanation": "Starch is added near the end point to prevent irreversible adsorption of high concentration of iodine onto the starch matrix."
  },
  {
    "id": "c11-chem-7-mcq-25",
    "question": "What happens when a Copper rod is placed in an aqueous Silver Nitrate (AgNO<sub>3</sub>) solution?",
    "options": [
      "A):   No reaction occurs",
      "B):   Copper dissolves forming blue Cu(NO<sub>3</sub>)<sub>2</sub> and silver metal deposits",
      "C):   Silver dissolves and copper precipitates",
      "D):   Hydrogen gas is evolved"
    ],
    "correctAnswer": "b",
    "explanation": "Because E&deg;(Cu<sup>2+</sup>/Cu) = +0.34 V is lower than E&deg;(Ag<sup>+</sup>/Ag) = +0.80 V, Copper displaces Silver: Cu + 2Ag<sup>+</sup> &rarr; Cu<sup>2+</sup> + 2Ag."
  }
];
