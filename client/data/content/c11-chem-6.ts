// Class 11 Chemistry Chapter 6: Equilibrium
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Chemistry | Class: 11 | Code: c11-chem-6

export const c11Chem6HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(171, 71, 188, 0.12), rgba(142, 36, 170, 0.12)); border: 1.5px solid rgba(171, 71, 188, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #AB47BC; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #AB47BC; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 6: Equilibrium</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #AB47BC;">Dynamic Equilibrium:</b> A microscopic steady state wherein forward and reverse reaction rates become strictly equal, rendering macroscopic concentrations constant over time.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #AB47BC;">Law of Chemical Equilibrium:</b> At a fixed temperature, the product of molar concentrations of products raised to their stoichiometric coefficients divided by reactants is a constant (K<sub>c</sub>).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #AB47BC;">Le Chatelier's Principle:</b> If a stress (change in concentration, pressure, temperature) is applied to an equilibrium system, the system readjusts in the direction that nullifies the stress.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #AB47BC;">pH Scale (S&oslash;rensen):</b> The negative logarithm (base 10) of the molar hydronium ion concentration: pH = -log<sub>10</sub>[H<sub>3</sub>O<sup>+</sup>].
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #AB47BC;">Buffer Solution:</b> A solution that resists changes in hydrogen ion concentration (pH) upon addition of small quantities of strong acid, base, or dilution.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #AB47BC;">Solubility Product (K<sub>sp</sub>):</b> The product of molar concentrations of constituent ions in a saturated solution of a sparingly soluble salt, raised to their stoichiometric powers.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #AB47BC; border-bottom: 2px solid #AB47BC; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Equilibrium in Physical and Chemical Processes, Dynamic Nature of Equilibrium
  </h2>

<p>
    Equilibrium represents the final state of all reversible natural and chemical processes. It is fundamentally dynamic—chemical transformations do not halt at equilibrium; rather, forward and reverse microscopic reactions proceed with exactly matched velocities (Rate<sub>f</sub> = Rate<sub>b</sub>).
  </p>

  <h3 style="color: #AB47BC; margin-top: 18px; font-size: 16.5px;">(i) Physical Equilibria &amp; Phase Transformations</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #AB47BC;">1. Solid-Liquid Equilibrium:</b> H<sub>2</sub>O<sub>(s)</sub> &hArr; H<sub>2</sub>O<sub>(l)</sub> at 273 K (0&deg;C) and 1 atm. Rate of melting = Rate of freezing. The temperature at which solid and liquid coexist in equilibrium at 1 atm is the normal melting point.</li>
      <li><b style="color: #AB47BC;">2. Liquid-Vapor Equilibrium:</b> H<sub>2</sub>O<sub>(l)</sub> &hArr; H<sub>2</sub>O<sub>(g)</sub> in a sealed vessel. Rate of vaporization = Rate of condensation. The equilibrium pressure exerted by the vapor is the saturated vapor pressure (V.P. &prop; T).</li>
      <li><b style="color: #AB47BC;">3. Solid-Vapor Equilibrium:</b> I<sub>2(s)</sub> &hArr; I<sub>2(vapor)</sub> (sublimation in a closed chamber). Rate of sublimation = Rate of deposition.</li>
    </ul>
  </div>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(ii) Dissolution Equilibria (Solids &amp; Gases in Liquids)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #AB47BC;">Solid in Liquid:</b> Sugar<sub>(solid)</sub> &hArr; Sugar<sub>(solution)</sub>. In a saturated solution, Rate of dissolution = Rate of crystallization. Concentration remains strictly constant at a given temperature.</li>
    <li><b style="color: #AB47BC;">Gas in Liquid (Henry's Law):</b> CO<sub>2(g)</sub> &hArr; CO<sub>2(aq)</sub>. William Henry (1803): <i>"The mass of a gas dissolved in a given volume of liquid at constant temperature is directly proportional to the partial pressure of the gas above the liquid:"</i> <b>m = k<sub>H</sub> p</b> &nbsp;|&nbsp; <b>p = K<sub>H</sub> x</b>. Applied in carbonated soft drinks sealed under high CO<sub>2</sub> pressure.</li>
  </ul>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(iii) Chemical Equilibria &amp; Dynamic Nature</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Consider the reversible reaction: <b>aA + bB &hArr; cC + dD</b>.
      <br/>Initially, forward rate is maximal and reverse rate is zero. As reactants consume and products accumulate, forward rate decreases while reverse rate accelerates, eventually converging at equilibrium where:
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        Rate<sub>forward</sub> = Rate<sub>reverse</sub> &nbsp;&ne;&nbsp; 0 (Dynamic Steady State)
      </span>
      <br/>&bull; <b style="color: #AB47BC;">Proof of Dynamic Nature (Haber's Deuterium Experiment):</b> In Haber's synthesis, establishing equilibrium with N<sub>2</sub> and H<sub>2</sub>, then introducing heavy hydrogen D<sub>2</sub>, results in the formation of deuterated ammonia molecules (NH<sub>2</sub>D, NHD<sub>2</sub>, ND<sub>3</sub>) without changing total ammonia concentration. This conclusively proves forward and reverse reactions proceed continuously.
    </p>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #AB47BC; border-bottom: 2px solid #AB47BC; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Law of Mass Action, Equilibrium Constant (Kc, Kp), Factors Affecting Equilibrium
  </h2>

<h3 style="color: #AB47BC; margin-top: 18px; font-size: 16.5px;">(i) Law of Mass Action &amp; Expression for K<sub>c</sub></h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Formulated by Cato Maximilian Guldberg and Peter Waage (1864): <i>"The rate of a chemical reaction at any instant is directly proportional to the product of active masses (molar concentrations) of reacting substances raised to powers equal to their stoichiometric coefficients."</i>
      <br/>For: aA + bB &hArr; cC + dD:
      <br/>Rate<sub>f</sub> = k<sub>f</sub> [A]<sup>a</sup> [B]<sup>b</sup> &nbsp;|&nbsp; Rate<sub>b</sub> = k<sub>b</sub> [C]<sup>c</sup> [D]<sup>d</sup>
      <br/>At equilibrium, Rate<sub>f</sub> = Rate<sub>b</sub> &rArr; k<sub>f</sub> [A]<sup>a</sup> [B]<sup>b</sup> = k<sub>b</sub> [C]<sup>c</sup> [D]<sup>d</sup>:
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        K<sub>c</sub> = <span style="display:inline-flex; flex-direction:column; vertical-align:middle; text-align:center; font-size:0.9em; line-height:1; margin:0 4px;"><span style="border-bottom:1.5px solid currentColor; padding:0 2px;">k<sub>f</sub></span><span style="padding:0 2px;">k<sub>b</sub></span></span> = <span style="display:inline-flex; flex-direction:column; vertical-align:middle; text-align:center; font-size:0.9em; line-height:1; margin:0 4px;"><span style="border-bottom:1.5px solid currentColor; padding:0 2px;">[C]<sup>c</sup> [D]<sup>d</sup></span><span style="padding:0 2px;">[A]<sup>a</sup> [B]<sup>b</sup></span></span>
      </span>
    </p>
  </div>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(ii) Equilibrium Constant for Gaseous Systems (K<sub>p</sub>) &amp; Relation K<sub>p</sub> = K<sub>c</sub>(RT)<sup>&Delta;n<sub>g</sub></sup></h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      For reactions involving ideal gases, partial pressures p<sub>i</sub> are employed:
      <br/><b>K<sub>p</sub> = (p<sub>C</sub><sup>c</sup> &times; p<sub>D</sub><sup>d</sup>) / (p<sub>A</sub><sup>a</sup> &times; p<sub>B</sub><sup>b</sup>)</b>.
      <br/>Using ideal gas law: p<sub>i</sub> = (n<sub>i</sub> / V) RT = c<sub>i</sub> RT = [i] RT.
      <br/>Substituting into K<sub>p</sub> expression:
      <br/>K<sub>p</sub> = ([C]RT)<sup>c</sup> ([D]RT)<sup>d</sup> / [([A]RT)<sup>a</sup> ([B]RT)<sup>b</sup>] = K<sub>c</sub> (RT)<sup>(c + d) - (a + b)</sup>.
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        K<sub>p</sub> = K<sub>c</sub> (RT)<sup>&Delta;n<sub>g</sub></sup>
      </span>
      <br/>&bull; If &Delta;n<sub>g</sub> = 0 &rArr; K<sub>p</sub> = K<sub>c</sub> (e.g., H<sub>2(g)</sub> + I<sub>2(g)</sub> &hArr; 2HI<sub>(g)</sub>).
      <br/>&bull; If &Delta;n<sub>g</sub> &gt; 0 &rArr; K<sub>p</sub> &gt; K<sub>c</sub> (e.g., PCl<sub>5(g)</sub> &hArr; PCl<sub>3(g)</sub> + Cl<sub>2(g)</sub>).
      <br/>&bull; If &Delta;n<sub>g</sub> &lt; 0 &rArr; K<sub>p</sub> &lt; K<sub>c</sub> (e.g., N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &hArr; 2NH<sub>3(g)</sub>).
    </p>
  </div>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(iii) Reaction Quotient (Q<sub>c</sub>) &amp; Predicting Direction</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The <b>Reaction Quotient (Q<sub>c</sub>)</b> has the same mathematical form as K<sub>c</sub>, but evaluates arbitrary concentrations at any given point during the reaction:
      <br/>1. <b>Q<sub>c</sub> &lt; K<sub>c</sub>:</b> Reaction proceeds in <b>FORWARD direction</b> (reactants &rarr; products).
      <br/>2. <b>Q<sub>c</sub> = K<sub>c</sub>:</b> System is at <b>DYNAMIC EQUILIBRIUM</b>.
      <br/>3. <b>Q<sub>c</sub> &gt; K<sub>c</sub>:</b> Reaction proceeds in <b>REVERSE direction</b> (products &rarr; reactants).
    </p>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #AB47BC; border-bottom: 2px solid #AB47BC; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Le Chatelier's Principle
  </h2>

  <h3 style="color: #AB47BC; margin-top: 18px; font-size: 16.5px;">(i) Statement of Le Chatelier's Principle &amp; Concentration Effects</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Henri Louis Le Chatelier (1884): <i>"If a system in chemical equilibrium is subjected to a disturbance in temperature, pressure, or concentration, the equilibrium shifts in such a direction so as to counteract and undo the applied disturbance."</i>
      <br/>&bull; <b style="color: #AB47BC;">Concentration Effects:</b>
      <br/>- Adding reactant or removing product: Shifts <b>FORWARD</b> (Q &lt; K).
      <br/>- Adding product or removing reactant: Shifts <b>REVERSE</b> (Q &gt; K).
    </p>
  </div>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(ii) Effect of Pressure and Volume Changes</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #AB47BC;">Increasing Pressure (or Decreasing Volume):</b> Equilibrium shifts toward the side with <b>FEWER moles of gas</b> to reduce total gas pressure.
      <br/>&bull; In Haber synthesis: N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &hArr; 2NH<sub>3(g)</sub> (&Delta;n<sub>g</sub> = 2 - 4 = -2). High pressure (200 atm) shifts reaction <b>forward</b>, maximizing ammonia yield.
      <br/>&bull; In PCl<sub>5(g)</sub> &hArr; PCl<sub>3(g)</sub> + Cl<sub>2(g)</sub> (&Delta;n<sub>g</sub> = +1): High pressure shifts reaction <b>backward</b>.
      <br/>&bull; If &Delta;n<sub>g</sub> = 0 (e.g., H<sub>2</sub> + I<sub>2</sub> &hArr; 2HI): Pressure has <b>NO effect</b> on equilibrium position.
    </li>
  </ul>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(iii) Effect of Temperature, Catalyst &amp; Inert Gas Addition</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #AB47BC;">Temperature Effect (Van't Hoff Equation):</b>
        <br/>- <i>Exothermic Reactions (&Delta;H &lt; 0):</i> Increasing temperature shifts equilibrium in <b>reverse (endothermic) direction</b>; K<sub>eq</sub> decreases.
        <br/>- <i>Endothermic Reactions (&Delta;H &gt; 0):</i> Increasing temperature shifts equilibrium in <b>forward direction</b>; K<sub>eq</sub> increases.
        <br/><b>log<sub>10</sub>(K<sub>2</sub> / K<sub>1</sub>) = [&Delta;H&deg; / 2.303 R] &times; [(T<sub>2</sub> - T<sub>1</sub>) / (T<sub>1</sub> T<sub>2</sub>)]</b>.
      </li>
      <li><b style="color: #AB47BC;">Effect of Catalyst:</b> Lowers activation energy E<sub>a</sub> equally for both forward and reverse paths. <b>Does not shift equilibrium or change K<sub>eq</sub></b>; merely accelerates attainment of equilibrium.</li>
      <li><b style="color: #AB47BC;">Inert Gas Addition:</b>
        <br/>- <i>At Constant Volume:</i> Total pressure rises, but partial pressures and concentrations of reacting gases remain unchanged &rArr; <b>NO SHIFT</b>.
        <br/>- <i>At Constant Pressure:</i> Total volume expands to maintain p, lowering partial pressures &rArr; Shifts toward <b>GREATER number of gaseous moles</b> (if &Delta;n<sub>g</sub> &gt; 0, shifts forward; if &Delta;n<sub>g</sub> &lt; 0, shifts backward).
      </li>
    </ul>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #AB47BC; border-bottom: 2px solid #AB47BC; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Ionic Equilibrium - Ionization of Acids and Bases, Strong and Weak Electrolytes, Degree of Ionization
  </h2>

<h3 style="color: #AB47BC; margin-top: 18px; font-size: 16.5px;">(i) Electrolytes &amp; Ostwald's Dilution Law</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #AB47BC;">Degree of Dissociation (&alpha;):</b> Fraction of total electrolyte dissociated into ions: &alpha; = (Moles dissociated) / (Total moles taken).
      <br/>&bull; <b style="color: #AB47BC;">Ostwald's Dilution Law for Weak Binary Electrolyte AB:</b>
      <br/>AB &hArr; A<sup>+</sup> + B<sup>-</sup> (Initial C, Equilibrium C(1 - &alpha;), C&alpha;, C&alpha;).
      <br/>K<sub>a</sub> = (C&alpha; &times; C&alpha;) / [C(1 - &alpha;)] = C&alpha;<sup>2</sup> / (1 - &alpha;).
      <br/>For weak electrolytes where &alpha; &lt;&lt; 1, (1 - &alpha;) &approx; 1:
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        K<sub>a</sub> &approx; C &alpha;<sup>2</sup> &rArr; &alpha; = &radic;(K<sub>a</sub> / C) = &radic;(K<sub>a</sub> &times; V)
      </span>
      <br/>As dilution increases (C &rarr; 0, V &rarr; &infin;), the degree of dissociation &alpha; approaches unity (100%).
    </p>
  </div>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(ii) Acid-Base Concepts &amp; Conjugate Pairs</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #AB47BC;">1. Arrhenius Theory (1884):</b> Acid furnishes H<sup>+</sup> ions in aqueous solution; Base furnishes OH<sup>-</sup> ions. (Limited strictly to aqueous media).</li>
    <li><b style="color: #AB47BC;">2. Br&oslash;nsted-Lowry Theory (1923):</b> Acid is a <b>proton (H<sup>+</sup>) donor</b>; Base is a <b>proton acceptor</b>.
      <br/>&bull; <i>Conjugate Acid-Base Pair:</i> Species differing only by a single proton (H<sup>+</sup>):
      <br/>HCl + H<sub>2</sub>O &hArr; H<sub>3</sub>O<sup>+</sup> + Cl<sup>-</sup> (Cl<sup>-</sup> is conjugate base of strong acid HCl).
      <br/>&bull; Strong acid possesses a weak conjugate base; weak acid possesses a strong conjugate base.
      <br/>&bull; <i>Amphoteric Species:</i> Can donate or accept protons (e.g., H<sub>2</sub>O, HCO<sub>3</sub><sup>-</sup>, HSO<sub>4</sub><sup>-</sup>).
    </li>
    <li><b style="color: #AB47BC;">3. Lewis Theory (1923):</b> Acid is an <b>electron pair acceptor</b> (electrophile with vacant orbital, e.g., BF<sub>3</sub>, AlCl<sub>3</sub>, H<sup>+</sup>); Base is an <b>electron pair donor</b> (nucleophile with lone pair, e.g., :NH<sub>3</sub>, H<sub>2</sub>O:, OH<sup>-</sup>).</li>
  </ul>

  <!-- SECTION 5 -->
  <h2 style="color: #AB47BC; border-bottom: 2px solid #AB47BC; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Concept of pH, Hydrolysis of Salts, Buffer Solutions, Solubility Product, Common Ion Effect
  </h2>

  <h3 style="color: #AB47BC; margin-top: 18px; font-size: 16.5px;">(i) Ionic Product of Water (K<sub>w</sub>) &amp; pH Scale</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Water undergoes auto-ionization: H<sub>2</sub>O<sub>(l)</sub> + H<sub>2</sub>O<sub>(l)</sub> &hArr; H<sub>3</sub>O<sup>+</sup><sub>(aq)</sub> + OH<sup>-</sup><sub>(aq)</sub>.
      <br/><b>K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>] [OH<sup>-</sup>] = 1.0 &times; 10<sup>-14</sup> at 298 K (25&deg;C)</b>.
      <br/>Taking negative logarithms: <b>pK<sub>w</sub> = pH + pOH = 14.0</b>.
      <br/>Auto-ionization is endothermic; as temperature rises, K<sub>w</sub> increases (at 60&deg;C, K<sub>w</sub> &approx; 10<sup>-13</sup> &rArr; neutral pH = 6.5).
    </p>
  </div>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(ii) Hydrolysis of Salts &amp; Hydrolysis Constant (K<sub>h</sub>)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #AB47BC;">1. Strong Acid + Strong Base (NaCl, KNO<sub>3</sub>):</b> Neither ion hydrolyzes. Solution is <b>Neutral (pH = 7.0)</b>.</li>
      <li><b style="color: #AB47BC;">2. Weak Acid + Strong Base (CH<sub>3</sub>COONa):</b> Anion hydrolyzes. Solution is <b>Basic (pH &gt; 7)</b>:
        <br/><b>K<sub>h</sub> = K<sub>w</sub> / K<sub>a</sub></b> &nbsp;|&nbsp; <b>pH = 7 + <sup>1</sup>/<sub>2</sub> pK<sub>a</sub> + <sup>1</sup>/<sub>2</sub> log C</b>.
      </li>
      <li><b style="color: #AB47BC;">3. Strong Acid + Weak Base (NH<sub>4</sub>Cl):</b> Cation hydrolyzes. Solution is <b>Acidic (pH &lt; 7)</b>:
        <br/><b>K<sub>h</sub> = K<sub>w</sub> / K<sub>b</sub></b> &nbsp;|&nbsp; <b>pH = 7 - <sup>1</sup>/<sub>2</sub> pK<sub>b</sub> - <sup>1</sup>/<sub>2</sub> log C</b>.
      </li>
      <li><b style="color: #AB47BC;">4. Weak Acid + Weak Base (CH<sub>3</sub>COONH<sub>4</sub>):</b> Both ions hydrolyze:
        <br/><b>K<sub>h</sub> = K<sub>w</sub> / (K<sub>a</sub> &times; K<sub>b</sub>)</b> &nbsp;|&nbsp; <b>pH = 7 + <sup>1</sup>/<sub>2</sub> pK<sub>a</sub> - <sup>1</sup>/<sub>2</sub> pK<sub>b</sub></b> (Independent of concentration C).
      </li>
    </ul>
  </div>

  <h3 style="color: #AB47BC; margin-top: 22px; font-size: 16.5px;">(iii) Buffer Solutions, Henderson Equation &amp; Solubility Product (K<sub>sp</sub>)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #AB47BC;">Henderson-Hasselbalch Equations:</b>
        <br/>&bull; <i>Acidic Buffer (CH<sub>3</sub>COOH + CH<sub>3</sub>COONa):</i> <b>pH = pK<sub>a</sub> + log<sub>10</sub> ([Salt] / [Acid])</b>.
        <br/>&bull; <i>Basic Buffer (NH<sub>4</sub>OH + NH<sub>4</sub>Cl):</i> <b>pOH = pK<sub>b</sub> + log<sub>10</sub> ([Salt] / [Base])</b> &rArr; pH = 14 - pOH.
      </li>
      <li><b style="color: #AB47BC;">Common Ion Effect:</b> Suppression of the degree of dissociation of a weak electrolyte by the addition of a strong electrolyte furnishing a common ion (e.g., adding CH<sub>3</sub>COONa suppresses CH<sub>3</sub>COOH dissociation; adding NH<sub>4</sub>Cl suppresses NH<sub>4</sub>OH dissociation in qualitative Group III analysis).</li>
      <li><b style="color: #AB47BC;">Solubility Product &amp; Precipitation Criteria:</b>
        <br/>For salt A<sub>x</sub>B<sub>y(s)</sub> &hArr; x A<sup>y+</sup> + y B<sup>x-</sup> &rArr; <b>K<sub>sp</sub> = [A<sup>y+</sup>]<sup>x</sup> [B<sup>x-</sup>]<sup>y</sup></b>.
        <br/>- <b>Q<sub>sp</sub> &lt; K<sub>sp</sub>:</b> Unsaturated solution; no precipitate forms.
        <br/>- <b>Q<sub>sp</sub> = K<sub>sp</sub>:</b> Saturated solution in dynamic equilibrium.
        <br/>- <b>Q<sub>sp</sub> &gt; K<sub>sp</sub>:</b> Supersaturated solution; <b>PRECIPITATION OCCURS</b>.
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(74, 20, 140, 0.85)); border: 2px solid #AB47BC; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #AB47BC; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 6 Formula Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(171, 71, 188, 0.25); color: #AB47BC; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Equilibrium Concept / Law</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Mathematical Expression</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Relationship / Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">K<sub>p</sub> vs K<sub>c</sub>:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">K<sub>p</sub> = K<sub>c</sub> (RT)<sup>&Delta;n<sub>g</sub></sup></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;n<sub>g</sub> = moles gaseous products - reactants</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">Van't Hoff Isochore:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">log<sub>10</sub>(K<sub>2</sub>/K<sub>1</sub>) = [&Delta;H&deg; / 2.303R] [(T<sub>2</sub>-T<sub>1</sub>)/(T<sub>1</sub>T<sub>2</sub>)]</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;H &gt; 0 &rArr; K increases with T</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">Ostwald's Dilution Law:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&alpha; = &radic;(K<sub>a</sub> / C)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Valid for weak electrolytes (&alpha; &lt;&lt; 1)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">Water Auto-ionization:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>][OH<sup>-</sup>] = 10<sup>-14</sup></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">pH + pOH = 14.0 at 25&deg;C</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">Henderson (Acidic Buffer):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">pH = pK<sub>a</sub> + log<sub>10</sub>([Salt] / [Acid])</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Max buffer capacity when [Salt] = [Acid]</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">Henderson (Basic Buffer):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">pOH = pK<sub>b</sub> + log<sub>10</sub>([Salt] / [Base])</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">pH = 14 - pOH</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">Salt Hydrolysis (WA + SB):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">pH = 7 + <sup>1</sup>/<sub>2</sub> pK<sub>a</sub> + <sup>1</sup>/<sub>2</sub> log C</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Basic solution (e.g., CH<sub>3</sub>COONa)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">Salt Hydrolysis (SA + WB):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">pH = 7 - <sup>1</sup>/<sub>2</sub> pK<sub>b</sub> - <sup>1</sup>/<sub>2</sub> log C</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Acidic solution (e.g., NH<sub>4</sub>Cl)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #AB47BC;">Solubility Product (AB<sub>2</sub>):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">K<sub>sp</sub> = 4 S<sup>3</sup> &rArr; S = (K<sub>sp</sub> / 4)<sup>1/3</sup></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">S = molar solubility (mol L<sup>-1</sup>)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Chem6HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(171, 71, 188, 0.15), rgba(142, 36, 170, 0.15)); border: 1.5px solid rgba(171, 71, 188, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #AB47BC; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Dynamic Equilibrium, Mass Action, Le Chatelier Statements &amp; pH Definitions</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define Dynamic Equilibrium.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A state in a reversible process where forward and reverse rates are equal, keeping concentrations constant.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: State the Law of Mass Action.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The rate of a chemical reaction is directly proportional to the product of the active masses of the reactants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: Write the relation between K_p and K_c.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      K<sub>p</sub> = K<sub>c</sub>(RT)<sup>&Delta;n<sub>g</sub></sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Under what condition is K_p equal to K_c?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When &Delta;n<sub>g</sub> = 0 (equal number of gaseous moles on both sides).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What is the Reaction Quotient (Q_c)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The ratio of molar concentrations of products to reactants at any arbitrary point in a reaction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What does Q_c &lt; K_c indicate about reaction direction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The reaction proceeds in the forward direction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: What does Q_c &gt; K_c indicate about reaction direction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The reaction proceeds in the reverse direction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: State Le Chatelier's Principle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      If a system at equilibrium is perturbed by changes in concentration, pressure, or temperature, it shifts to counteract the disturbance.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What is the effect of increasing pressure on: N2(g) + 3H2(g) &hArr; 2NH3(g)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Equilibrium shifts in the forward direction toward fewer moles of gas.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What is the effect of a catalyst on equilibrium position?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A catalyst accelerates both forward and reverse rates equally without shifting the equilibrium position.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: How does temperature affect an exothermic equilibrium reaction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Increasing temperature shifts the equilibrium in the reverse (endothermic) direction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: What is the effect of adding an inert gas at constant volume to an equilibrium mixture?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      No effect on the equilibrium position.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: State Henry's Law.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The mass of a gas dissolved in a liquid is directly proportional to the partial pressure of the gas above the liquid: m = k<sub>H</sub> p.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Define Ostwald's Dilution Law.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For a weak electrolyte, the degree of dissociation is inversely proportional to the square root of its molar concentration: &alpha; = &radic;(K<sub>a</sub> / C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Define a Brønsted-Lowry Acid and Base.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An acid is a proton (H<sup>+</sup>) donor; a base is a proton acceptor.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: What is a Conjugate Acid-Base Pair?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A pair of chemical species that differ by only a single proton (H<sup>+</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: What is the conjugate base of H2O?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hydroxide ion (OH<sup>-</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: What is the conjugate acid of NH3?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ammonium ion (NH<sub>4</sub><sup>+</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Define a Lewis Base.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A chemical species capable of donating an electron pair (e.g., :NH<sub>3</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: Classify BF3 as an Arrhenius, Brønsted, or Lewis acid.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lewis acid (electron pair acceptor with incomplete octet).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Define the Ionic Product of Water (K_w).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The product of molar concentrations of hydronium and hydroxide ions in water: K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>][OH<sup>-</sup>] = 10<sup>-14</sup> at 25°C.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Define pH.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The negative logarithm to base 10 of the hydronium ion concentration: pH = -log<sub>10</sub>[H<sub>3</sub>O<sup>+</sup>].
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What is the pH of pure water at 25°C?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      pH = 7.0 (Neutral).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: How does the pH of pure water change when heated to 60°C?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      pH decreases below 7 (to ~6.5) because water dissociation is endothermic, but water remains neutral since [H<sup>+</sup>] = [OH<sup>-</sup>].
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Define a Buffer Solution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A solution that resists changes in its pH upon addition of small amounts of strong acid or base.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Give an example of an Acidic Buffer.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Equimolar mixture of Acetic acid (CH<sub>3</sub>COOH) and Sodium acetate (CH<sub>3</sub>COONa).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Give an example of a Basic Buffer.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Equimolar mixture of Ammonium hydroxide (NH<sub>4</sub>OH) and Ammonium chloride (NH<sub>4</sub>Cl).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Write the Henderson-Hasselbalch equation for an acidic buffer.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      pH = pK<sub>a</sub> + log<sub>10</sub>([Salt] / [Acid]).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Define Common Ion Effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The suppression of dissociation of a weak electrolyte by adding a strong electrolyte providing a common ion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Define Solubility Product (K_sp).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The product of molar concentrations of ions in a saturated solution of a sparingly soluble salt, raised to their stoichiometric powers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Write the relation between K_sp and molar solubility S for AgCl.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      K<sub>sp</sub> = S<sup>2</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: Write the relation between K_sp and molar solubility S for CaF2.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      K<sub>sp</sub> = 4 S<sup>3</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Under what condition does precipitation occur?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Precipitation occurs when Ionic Product Q<sub>sp</sub> exceeds Solubility Product K<sub>sp</sub> (Q<sub>sp</sub> &gt; K<sub>sp</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What is the pH of 0.001 M HCl solution?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      pH = -log(10<sup>-3</sup>) = 3.0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: What is the pH of 0.01 M NaOH solution?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      pOH = -log(10<sup>-2</sup>) = 2.0 &rArr; pH = 14 - 2 = 12.0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What type of salt hydrolysis occurs in aqueous NH4Cl?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cationic hydrolysis, producing an acidic solution (pH &lt; 7).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: What type of salt hydrolysis occurs in aqueous CH3COONa?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Anionic hydrolysis, producing a basic solution (pH &gt; 7).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: Why does NaCl not undergo hydrolysis in water?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Both Na<sup>+</sup> and Cl<sup>-</sup> are spectator ions of strong base (NaOH) and strong acid (HCl) with negligible hydrolytic tendency.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: What is the value of &Delta;G at chemical equilibrium?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G = 0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Write the relation between &Delta;G° and equilibrium constant K.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G&deg; = -2.303 RT log<sub>10</sub> K.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(171, 71, 188, 0.15), rgba(142, 36, 170, 0.15)); border: 1.5px solid rgba(171, 71, 188, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #AB47BC; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Kp-Kc Calculations, Buffer Equations, Salt Hydrolysis Proofs &amp; Solubility Numericals</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain the dynamic nature of chemical equilibrium using the synthesis of Ammonia with Deuterium.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When Haber synthesis of ammonia reaches equilibrium: N<sub>2</sub> + 3H<sub>2</sub> &hArr; 2NH<sub>3</sub>, Deuterium (D<sub>2</sub>) is introduced into the vessel. After some time, mass spectrometry reveals mixed species (NH<sub>2</sub>D, NHD<sub>2</sub>, ND<sub>3</sub>) while total ammonia concentration remains unchanged. This proves molecules continue to react forward and reverse at equal rates, demonstrating dynamic equilibrium.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Derive the relation K_p = K_c(RT)&Delta;n_g for a general reversible gaseous reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For aA<sub>(g)</sub> + bB<sub>(g)</sub> &hArr; cC<sub>(g)</sub> + dD<sub>(g)</sub>:<br/>K<sub>p</sub> = (p<sub>C</sub><sup>c</sup> p<sub>D</sub><sup>d</sup>) / (p<sub>A</sub><sup>a</sup> p<sub>B</sub><sup>b</sup>).<br/>Using p<sub>i</sub> = c<sub>i</sub>RT = [i]RT:<br/>K<sub>p</sub> = ([C]RT)<sup>c</sup> ([D]RT)<sup>d</sup> / [([A]RT)<sup>a</sup> ([B]RT)<sup>b</sup>]<br/>K<sub>p</sub> = ([C]<sup>c</sup> [D]<sup>d</sup> / [A]<sup>a</sup> [B]<sup>b</sup>) &times; (RT)<sup>(c + d) - (a + b)</sup><br/><b>K<sub>p</sub> = K<sub>c</sub>(RT)<sup>&Delta;n<sub>g</sub></sup></b>, where &Delta;n<sub>g</sub> = (c + d) - (a + b).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: At 500 K, K_p = 1.80 &times; 10<sup>-2</sup> for: N2(g) + 3H2(g) &hArr; 2NH3(g). Calculate K_c. (R = 0.0821 L atm K<sup>-1</sup> mol<sup>-1</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;n<sub>g</sub> = 2 - (1 + 3) = -2.<br/>K<sub>p</sub> = K<sub>c</sub>(RT)<sup>&Delta;n<sub>g</sub></sup> &rArr; K<sub>c</sub> = K<sub>p</sub> / (RT)<sup>-2</sup> = K<sub>p</sub>(RT)<sup>2</sup>.<br/>K<sub>c</sub> = (1.80 &times; 10<sup>-2</sup>) &times; (0.0821 &times; 500)<sup>2</sup><br/>K<sub>c</sub> = (1.80 &times; 10<sup>-2</sup>) &times; (41.05)<sup>2</sup> = (1.80 &times; 10<sup>-2</sup>) &times; 1685.1 = <b>30.33 L<sup>2</sup> mol<sup>-2</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: State Le Chatelier's Principle and apply it to predict the optimum conditions for Haber's synthesis of Ammonia.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Reaction: N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &hArr; 2NH<sub>3(g)</sub> &Delta;H = -92.4 kJ mol<sup>-1</sup> (&Delta;n<sub>g</sub> = -2).<br/>1. <b style="color: #AB47BC;">High Pressure (200 atm):</b> Shifts equilibrium toward fewer moles (forward), increasing yield.<br/>2. <b style="color: #AB47BC;">Moderate Temperature (700 K):</b> Forward reaction is exothermic; low T favors yield, but rate is too slow; 700 K is the optimal compromise.<br/>3. <b style="color: #AB47BC;">Catalyst:</b> Finely divided Iron with Molybdenum promoter accelerates attainment of equilibrium.<br/>4. <b style="color: #AB47BC;">Continuous Removal of NH<sub>3</sub>:</b> Liquefying and removing NH<sub>3</sub> continuously draws equilibrium forward.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Derive Ostwald's Dilution Law for a weak monobasic acid HA.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      HA &hArr; H<sup>+</sup> + A<sup>-</sup>.<br/>Initial: C, 0, 0.<br/>Equilibrium: C(1 - &alpha;), C&alpha;, C&alpha;.<br/>K<sub>a</sub> = [H<sup>+</sup>][A<sup>-</sup>] / [HA] = (C&alpha; &times; C&alpha;) / [C(1 - &alpha;)] = C&alpha;<sup>2</sup> / (1 - &alpha;).<br/>For weak acid &alpha; &lt;&lt; 1 &rArr; (1 - &alpha;) &approx; 1:<br/><b>K<sub>a</sub> = C &alpha;<sup>2</sup> &rArr; &alpha; = &radic;(K<sub>a</sub> / C)</b>.<br/>Also, [H<sup>+</sup>] = C&alpha; = C &radic;(K<sub>a</sub> / C) = <b>&radic;(K<sub>a</sub> C)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Calculate the degree of ionization and pH of 0.1 M Acetic acid solution. (Ka = 1.8 &times; 10<sup>-5</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &alpha; = &radic;(K<sub>a</sub> / C) = &radic;[(1.8 &times; 10<sup>-5</sup>) / 0.1] = &radic;(1.8 &times; 10<sup>-4</sup>) = <b>1.34 &times; 10<sup>-2</sup> (1.34%)</b>.<br/>[H<sup>+</sup>] = C&alpha; = 0.1 &times; (1.34 &times; 10<sup>-2</sup>) = 1.34 &times; 10<sup>-3</sup> M.<br/>pH = -log<sub>10</sub>(1.34 &times; 10<sup>-3</sup>) = 3 - log(1.34) = 3 - 0.127 = <b>2.87</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Explain the Brønsted-Lowry concept of Conjugate Acid-Base Pairs with two complete reaction examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A conjugate acid-base pair differs by one proton (H<sup>+</sup>). An acid donates H<sup>+</sup> to become its conjugate base; a base accepts H<sup>+</sup> to become its conjugate acid.<br/>1. <b>NH<sub>3</sub> + H<sub>2</sub>O &hArr; NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup>:</b> NH<sub>3</sub> (base) and NH<sub>4</sub><sup>+</sup> (conjugate acid); H<sub>2</sub>O (acid) and OH<sup>-</sup> (conjugate base).<br/>2. <b>CH<sub>3</sub>COOH + H<sub>2</sub>O &hArr; CH<sub>3</sub>COO<sup>-</sup> + H<sub>3</sub>O<sup>+</sup>:</b> CH<sub>3</sub>COOH (acid) and CH<sub>3</sub>COO<sup>-</sup> (conjugate base); H<sub>2</sub>O (base) and H<sub>3</sub>O<sup>+</sup> (conjugate acid).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Differentiate between Arrhenius, Brønsted-Lowry, and Lewis definitions of Acids and Bases in a comparative matrix.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #AB47BC;">Arrhenius:</b> Acid yields H<sup>+</sup> in water; Base yields OH<sup>-</sup> in water. Limited to aqueous solutions.<br/>2. <b style="color: #AB47BC;">Br&oslash;nsted-Lowry:</b> Acid is proton donor; Base is proton acceptor. Applicable to non-aqueous media.<br/>3. <b style="color: #AB47BC;">Lewis:</b> Acid is electron-pair acceptor; Base is electron-pair donor. Encompasses reactions without proton transfer (e.g., BF<sub>3</sub> + :NH<sub>3</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Derive the Henderson-Hasselbalch equation for an Acidic Buffer.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For weak acid HA: HA &hArr; H<sup>+</sup> + A<sup>-</sup> &rArr; K<sub>a</sub> = [H<sup>+</sup>][A<sup>-</sup>] / [HA].<br/>Rearranging for [H<sup>+</sup>]: [H<sup>+</sup>] = K<sub>a</sub> &times; [HA] / [A<sup>-</sup>].<br/>Taking negative logarithm (-log<sub>10</sub>):<br/>-log[H<sup>+</sup>] = -log K<sub>a</sub> - log([HA] / [A<sup>-</sup>]) = -log K<sub>a</sub> + log([A<sup>-</sup>] / [HA]).<br/>Since common ion suppresses HA dissociation, [HA] &approx; [Acid] and [A<sup>-</sup>] &approx; [Salt]:<br/><b>pH = pK<sub>a</sub> + log<sub>10</sub>([Salt] / [Acid])</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Calculate the pH of a buffer solution containing 0.1 M Acetic acid and 0.2 M Sodium acetate. (Ka of CH3COOH = 1.8 &times; 10<sup>-5</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      pK<sub>a</sub> = -log(1.8 &times; 10<sup>-5</sup>) = 5 - 0.255 = 4.745.<br/>pH = pK<sub>a</sub> + log([Salt] / [Acid])<br/>pH = 4.745 + log(0.2 / 0.1) = 4.745 + log(2)<br/>pH = 4.745 + 0.301 = <b>5.05</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain the mechanism of Buffer Action in an acidic buffer (CH3COOH + CH3COONa).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Buffer contains abundant CH<sub>3</sub>COOH molecules and CH<sub>3</sub>COO<sup>-</sup> ions.<br/>1. <b style="color: #AB47BC;">Addition of Strong Acid (H<sup>+</sup>):</b> Added H<sup>+</sup> combines with conjugate base: <b>CH<sub>3</sub>COO<sup>-</sup> + H<sup>+</sup> &rarr; CH<sub>3</sub>COOH</b>. H<sup>+</sup> is neutralized; pH remains constant.<br/>2. <b style="color: #AB47BC;">Addition of Strong Base (OH<sup>-</sup>):</b> Added OH<sup>-</sup> is neutralized by undissociated acid: <b>CH<sub>3</sub>COOH + OH<sup>-</sup> &rarr; CH<sub>3</sub>COO<sup>-</sup> + H<sub>2</sub>O</b>. pH remains constant.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain Common Ion Effect and its application in qualitative analysis of Group II and Group III cations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Common ion effect is the suppression of dissociation of a weak electrolyte by adding a strong electrolyte sharing a common ion.<br/>1. <b style="color: #AB47BC;">Group II Analysis:</b> H<sub>2</sub>S gas is passed in presence of dil. HCl. Common ion H<sup>+</sup> suppresses H<sub>2</sub>S dissociation, lowering [S<sup>2-</sup>] so that only Group II cations with extremely low K<sub>sp</sub> (CuS, PbS) precipitate.<br/>2. <b style="color: #AB47BC;">Group III Analysis:</b> NH<sub>4</sub>OH is added in presence of solid NH<sub>4</sub>Cl. Common ion NH<sub>4</sub><sup>+</sup> suppresses [OH<sup>-</sup>], precipitating only Group III hydroxides with low K<sub>sp</sub> (Fe(OH)<sub>3</sub>, Al(OH)<sub>3</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Derive the pH formula for the salt of a Weak Acid and Strong Base (e.g., CH3COONa).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      CH<sub>3</sub>COONa dissociates completely into Na<sup>+</sup> and CH<sub>3</sub>COO<sup>-</sup>. Anion hydrolyzes: CH<sub>3</sub>COO<sup>-</sup> + H<sub>2</sub>O &hArr; CH<sub>3</sub>COOH + OH<sup>-</sup>.<br/>K<sub>h</sub> = [CH<sub>3</sub>COOH][OH<sup>-</sup>] / [CH<sub>3</sub>COO<sup>-</sup>] = K<sub>w</sub> / K<sub>a</sub>.<br/>[OH<sup>-</sup>] = &radic;(K<sub>h</sub> C) = &radic;[(K<sub>w</sub> / K<sub>a</sub>) C].<br/>[H<sup>+</sup>] = K<sub>w</sub> / [OH<sup>-</sup>] = &radic;[(K<sub>w</sub> K<sub>a</sub>) / C].<br/>Taking -log: <b>pH = 7 + <sup>1</sup>/<sub>2</sub> pK<sub>a</sub> + <sup>1</sup>/<sub>2</sub> log C</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Derive the pH formula for the salt of a Strong Acid and Weak Base (e.g., NH4Cl).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      NH<sub>4</sub>Cl dissociates into NH<sub>4</sub><sup>+</sup> and Cl<sup>-</sup>. Cation hydrolyzes: NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O &hArr; NH<sub>4</sub>OH + H<sup>+</sup>.<br/>K<sub>h</sub> = [NH<sub>4</sub>OH][H<sup>+</sup>] / [NH<sub>4</sub><sup>+</sup>] = K<sub>w</sub> / K<sub>b</sub>.<br/>[H<sup>+</sup>] = &radic;(K<sub>h</sub> C) = &radic;[(K<sub>w</sub> / K<sub>b</sub>) C].<br/>Taking -log: <b>pH = 7 - <sup>1</sup>/<sub>2</sub> pK<sub>b</sub> - <sup>1</sup>/<sub>2</sub> log C</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Calculate the pH of 0.1 M Ammonium acetate solution. (Ka of CH3COOH = 1.8 &times; 10<sup>-5</sup>, Kb of NH4OH = 1.8 &times; 10<sup>-5</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For salt of weak acid and weak base: pH = 7 + <sup>1</sup>/<sub>2</sub> pK<sub>a</sub> - <sup>1</sup>/<sub>2</sub> pK<sub>b</sub>.<br/>pK<sub>a</sub> = 4.745, pK<sub>b</sub> = 4.745.<br/>pH = 7 + <sup>1</sup>/<sub>2</sub>(4.745) - <sup>1</sup>/<sub>2</sub>(4.745) = <b>7.0 (Neutral)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: The solubility of AgCl in water at 25°C is 1.06 &times; 10<sup>-5</sup> mol L<sup>-1</sup>. Calculate its Solubility Product (K_sp).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      AgCl<sub>(s)</sub> &hArr; Ag<sup>+</sup><sub>(aq)</sub> + Cl<sup>-</sup><sub>(aq)</sub>.<br/>[Ag<sup>+</sup>] = S = 1.06 &times; 10<sup>-5</sup> M, [Cl<sup>-</sup>] = S = 1.06 &times; 10<sup>-5</sup> M.<br/>K<sub>sp</sub> = [Ag<sup>+</sup>][Cl<sup>-</sup>] = S<sup>2</sup> = (1.06 &times; 10<sup>-5</sup>)<sup>2</sup> = <b>1.12 &times; 10<sup>-10</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Calculate the molar solubility of Lead Iodide (PbI2) in water if K_sp = 7.1 &times; 10<sup>-9</sup>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      PbI<sub>2(s)</sub> &hArr; Pb<sup>2+</sup><sub>(aq)</sub> + 2I<sup>-</sup><sub>(aq)</sub>.<br/>[Pb<sup>2+</sup>] = S, [I<sup>-</sup>] = 2S.<br/>K<sub>sp</sub> = [Pb<sup>2+</sup>][I<sup>-</sup>]<sup>2</sup> = S &times; (2S)<sup>2</sup> = 4 S<sup>3</sup>.<br/>4 S<sup>3</sup> = 7.1 &times; 10<sup>-9</sup> &rArr; S<sup>3</sup> = 1.775 &times; 10<sup>-9</sup>.<br/>S = (1.775 &times; 10<sup>-9</sup>)<sup>1/3</sup> = <b>1.21 &times; 10<sup>-3</sup> mol L<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain why the solubility of AgCl is lower in 0.1 M NaCl solution than in pure water.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In pure water: AgCl &hArr; Ag<sup>+</sup> + Cl<sup>-</sup>, K<sub>sp</sub> = S<sup>2</sup> &rArr; S = 1.06 &times; 10<sup>-5</sup> M.<br/>In 0.1 M NaCl: NaCl completely ionizes providing [Cl<sup>-</sup>] = 0.1 M.<br/>K<sub>sp</sub> = [Ag<sup>+</sup>][Cl<sup>-</sup>] = S' &times; 0.1 = 1.12 &times; 10<sup>-10</sup> &rArr; S' = <b>1.12 &times; 10<sup>-9</sup> M</b>.<br/>The common Cl<sup>-</sup> ion shifts equilibrium reverse (Le Chatelier), reducing solubility by ~10,000-fold.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Will a precipitate form when equal volumes of 2 &times; 10<sup>-4</sup> M AgNO3 and 2 &times; 10<sup>-4</sup> M NaCl are mixed? (K_sp of AgCl = 1.8 &times; 10<sup>-10</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When equal volumes are mixed, total volume doubles, halving concentrations:<br/>[Ag<sup>+</sup>] = (2 &times; 10<sup>-4</sup>) / 2 = 10<sup>-4</sup> M.<br/>[Cl<sup>-</sup>] = (2 &times; 10<sup>-4</sup>) / 2 = 10<sup>-4</sup> M.<br/>Ionic Product Q<sub>sp</sub> = [Ag<sup>+</sup>][Cl<sup>-</sup>] = 10<sup>-4</sup> &times; 10<sup>-4</sup> = <b>10<sup>-8</sup></b>.<br/>Since Q<sub>sp</sub> (10<sup>-8</sup>) &gt; K<sub>sp</sub> (1.8 &times; 10<sup>-10</sup>), <b>precipitation of AgCl WILL OCCUR</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the concept of Auto-ionization of Water and derive the value of K_w at 25°C.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Water undergoes amphiprotic self-ionization: H<sub>2</sub>O + H<sub>2</sub>O &hArr; H<sub>3</sub>O<sup>+</sup> + OH<sup>-</sup>.<br/>Equilibrium constant K = [H<sub>3</sub>O<sup>+</sup>][OH<sup>-</sup>] / [H<sub>2</sub>O]<sup>2</sup>.<br/>Since water is in huge excess, [H<sub>2</sub>O] is constant: K &times; [H<sub>2</sub>O]<sup>2</sup> = K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>][OH<sup>-</sup>].<br/>At 25&deg;C, electrical conductivity shows [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>-</sup>] = 1.0 &times; 10<sup>-7</sup> M.<br/><b>K<sub>w</sub> = (10<sup>-7</sup>) &times; (10<sup>-7</sup>) = 1.0 &times; 10<sup>-14</sup> mol<sup>2</sup> L<sup>-2</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain why the pH of a 10<sup>-8</sup> M HCl solution is not 8.0.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      HCl is a strong acid, but at 10<sup>-8</sup> M, the concentration is so dilute that H<sup>+</sup> ions from the auto-ionization of water cannot be neglected.<br/>Total [H<sup>+</sup>] = [H<sup>+</sup>]<sub>HCl</sub> + [H<sup>+</sup>]<sub>water</sub> = 10<sup>-8</sup> + x.<br/>K<sub>w</sub> = (10<sup>-8</sup> + x)(x) = 10<sup>-14</sup> &rArr; x<sup>2</sup> + 10<sup>-8</sup>x - 10<sup>-14</sup> = 0.<br/>Solving: x = 0.95 &times; 10<sup>-7</sup> M &rArr; Total [H<sup>+</sup>] = 1.05 &times; 10<sup>-7</sup> M.<br/>pH = -log(1.05 &times; 10<sup>-7</sup>) = <b>6.98</b> (Slightly acidic, never basic).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Explain the relation between standard free energy change (&Delta;G°) and equilibrium constant (K) with physical interpretation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G&deg; = -2.303 RT log<sub>10</sub> K.<br/>1. <b style="color: #AB47BC;">K &gt; 1:</b> log K is positive &rArr; &Delta;G&deg; &lt; 0. Reaction is exergonic and spontaneous under standard conditions; products dominate at equilibrium.<br/>2. <b style="color: #AB47BC;">K &lt; 1:</b> log K is negative &rArr; &Delta;G&deg; &gt; 0. Reaction is endergonic; reactants dominate.<br/>3. <b style="color: #AB47BC;">K = 1:</b> &Delta;G&deg; = 0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Calculate &Delta;G° for a reaction having equilibrium constant K = 10 at 300 K. (R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G&deg; = -2.303 RT log<sub>10</sub> K<br/>&Delta;G&deg; = -2.303 &times; 8.314 &times; 300 &times; log<sub>10</sub>(10)<br/>&Delta;G&deg; = -5744.1 &times; 1 = <b>-5744.1 J mol<sup>-1</sup> = -5.74 kJ mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Explain the effect of inert gas addition at (a) Constant Volume, (b) Constant Pressure on: PCl5(g) &hArr; PCl3(g) + Cl2(g).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #AB47BC;">At Constant Volume:</b> Total pressure increases, but partial pressures of PCl<sub>5</sub>, PCl<sub>3</sub>, and Cl<sub>2</sub> remain unchanged; thus, <b>NO SHIFT</b> occurs.<br/>(b) <b style="color: #AB47BC;">At Constant Pressure:</b> Addition of gas requires volume expansion to maintain constant pressure. This dilution reduces partial pressures, shifting equilibrium toward the side with more moles (&Delta;n<sub>g</sub> = +1), so reaction shifts <b>FORWARD</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Why is an aqueous solution of Ferric Chloride (FeCl3) acidic?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      FeCl<sub>3</sub> dissociates into Fe<sup>3+</sup> and Cl<sup>-</sup>. Fe<sup>3+</sup> is a small, highly charged cation that strongly polarizes coordinated water molecules (cationic hydrolysis):<br/>[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + H<sub>2</sub>O &hArr; [Fe(H<sub>2</sub>O)<sub>5</sub>(OH)]<sup>2+</sup> + H<sub>3</sub>O<sup>+</sup>.<br/>The generation of excess H<sub>3</sub>O<sup>+</sup> ions renders the solution acidic (pH &lt; 7).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain why pure NaCl precipitates when dry HCl gas is passed through a saturated brine solution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Brine contains Na<sup>+</sup> and Cl<sup>-</sup> in equilibrium with solid NaCl: NaCl<sub>(s)</sub> &hArr; Na<sup>+</sup> + Cl<sup>-</sup>. Saturated solution satisfies [Na<sup>+</sup>][Cl<sup>-</sup>] = K<sub>sp</sub>. Passing HCl gas introduces a high concentration of common Cl<sup>-</sup> ions. The ionic product [Na<sup>+</sup>][Cl<sup>-</sup>] exceeds K<sub>sp</sub>, forcing pure NaCl to precipitate out immediately.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the difference between Hydrolysis Constant (Kh), Degree of Hydrolysis (h), and pH of salt solutions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #AB47BC;">Hydrolysis Constant (K<sub>h</sub>):</b> Equilibrium constant for the hydrolytic reaction between salt ions and water. <b style="color: #AB47BC;">Degree of Hydrolysis (h):</b> Fraction of total salt hydrolyzed at equilibrium: h = &radic;(K<sub>h</sub> / C). <b style="color: #AB47BC;">pH:</b> Measure of resulting [H<sup>+</sup>] or [OH<sup>-</sup>] produced by the hydrolysis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: What is Buffer Capacity? When is the buffer capacity of an acidic buffer maximum?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Buffer capacity is the number of moles of strong acid or base required to change the pH of one liter of buffer solution by 1 unit: &beta; = db / d(pH).<br/>Buffer capacity is <b>maximum when [Salt] = [Acid]</b>, which corresponds to <b>pH = pK<sub>a</sub></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain the amphoteric nature of Water using chemical equations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Water acts as a Br&oslash;nsted base when reacting with acids by accepting a proton: <b>HCl + H<sub>2</sub>O &hArr; H<sub>3</sub>O<sup>+</sup> + Cl<sup>-</sup></b>.<br/>Water acts as a Br&oslash;nsted acid when reacting with bases by donating a proton: <b>NH<sub>3</sub> + H<sub>2</sub>O &hArr; NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup></b>. This dual proton donor/acceptor behavior defines amphoterism.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Why is liquid ammonia used as an ionizing solvent? Compare its self-ionization with water.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Liquid ammonia has a high dielectric constant and self-ionizes similarly to water:<br/><b>2NH<sub>3</sub> &hArr; NH<sub>4</sub><sup>+</sup> (Ammonium ion, Acid) + NH<sub>2</sub><sup>-</sup> (Amide ion, Base)</b>.<br/>Self-ionization constant K<sub>am</sub> = [NH<sub>4</sub><sup>+</sup>][NH<sub>2</sub><sup>-</sup>] &approx; 10<sup>-30</sup> at -50&deg;C. Substances furnishing NH<sub>4</sub><sup>+</sup> act as acids in liquid NH<sub>3</sub>, while metal amides act as bases.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: For a reaction A + B &hArr; C + D, the initial concentrations of A and B are equal. At equilibrium, [C] = 2[A]. Calculate K_c.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Let initial [A] = [B] = a, and [C] = [D] = 0.<br/>At equilibrium: [C] = x, [D] = x, [A] = a - x, [B] = a - x.<br/>Given: [C] = 2[A] &rArr; x = 2(a - x) &rArr; x = 2a - 2x &rArr; 3x = 2a &rArr; x = 2a/3.<br/>[A] = a - 2a/3 = a/3; [B] = a/3; [C] = 2a/3; [D] = 2a/3.<br/>K<sub>c</sub> = ([C][D]) / ([A][B]) = [(2a/3)(2a/3)] / [(a/3)(a/3)] = 4/1 = <b>4.0</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain why the solubility of a sparingly soluble salt of a weak acid (e.g., CaCO3) increases in acidic solution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      CaCO<sub>3(s)</sub> &hArr; Ca<sup>2+</sup> + CO<sub>3</sub><sup>2-</sup>. In acidic solution, H<sup>+</sup> ions react with carbonate ions: <b>CO<sub>3</sub><sup>2-</sup> + 2H<sup>+</sup> &hArr; H<sub>2</sub>CO<sub>3</sub> &rarr; H<sub>2</sub>O + CO<sub>2(g)</sub></b>. This removal of CO<sub>3</sub><sup>2-</sup> continuously pulls the dissolution equilibrium forward (Le Chatelier's principle), greatly increasing the solubility of CaCO<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain the effect of temperature on the value of equilibrium constant for an endothermic reaction using Van't Hoff equation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Van't Hoff isochore: d(ln K) / dT = &Delta;H&deg; / RT<sup>2</sup>.<br/>For an endothermic reaction, &Delta;H&deg; &gt; 0. Therefore, d(ln K) / dT &gt; 0, which means ln K increases as temperature T increases. Heat acts effectively as a reactant, so raising temperature drives the reaction forward, increasing the equilibrium constant K.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain the physiological importance of the Carbonic Acid - Bicarbonate Buffer System in human blood.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Human blood maintains a strict physiological pH of <b>7.40 &plusmn; 0.05</b> via the buffer equilibrium: <b>CO<sub>2(aq)</sub> + H<sub>2</sub>O &hArr; H<sub>2</sub>CO<sub>3</sub> &hArr; H<sup>+</sup> + HCO<sub>3</sub><sup>-</sup></b>.<br/>Excess metabolic H<sup>+</sup> is neutralized by HCO<sub>3</sub><sup>-</sup> (forming H<sub>2</sub>CO<sub>3</sub> and expelled as CO<sub>2</sub> via lungs); excess OH<sup>-</sup> is neutralized by H<sub>2</sub>CO<sub>3</sub>. If blood pH falls below 7.35 (acidosis) or rises above 7.45 (alkalosis), critical enzyme disruption occurs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: State the relationship between Solubility (S in g/L) and Molar Solubility (s in mol/L).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Molar solubility s (mol L<sup>-1</sup>) = Solubility S (g L<sup>-1</sup>) / Molar Mass M (g mol<sup>-1</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain why solid and pure liquid concentrations are omitted from equilibrium constant expressions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The active mass (molar concentration) of a pure solid or liquid is given by: [X] = Density / Molar Mass. Because density and molar mass are intrinsic physical constants at a fixed temperature, the concentration of a pure solid or liquid remains completely constant regardless of how much material is present, and is incorporated directly into the value of K.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain how an indicator works during acid-base titration using Ostwald's theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Acid-base indicators are weak organic acids (HIn) or bases whose undissociated molecules possess a color distinct from their ionized conjugate ions: <b>HIn (Color A) &hArr; H<sup>+</sup> + In<sup>-</sup> (Color B)</b>.<br/>In acidic solution, high [H<sup>+</sup>] suppresses ionization (Color A dominates). In basic solution, OH<sup>-</sup> removes H<sup>+</sup>, shifting equilibrium to In<sup>-</sup> (Color B dominates). The color change occurs over pH range = pK<sub>In</sub> &plusmn; 1.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Calculate the pH of a 0.05 M Ba(OH)2 solution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ba(OH)<sub>2</sub> is a strong diprotic base: Ba(OH)<sub>2</sub> &rarr; Ba<sup>2+</sup> + 2OH<sup>-</sup>.<br/>[OH<sup>-</sup>] = 2 &times; 0.05 = 0.10 M = 10<sup>-1</sup> M.<br/>pOH = -log(10<sup>-1</sup>) = 1.0.<br/>pH = 14 - pOH = 14 - 1.0 = <b>13.0</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain why adding NH4Cl to an aqueous solution of NH4OH decreases its hydroxide ion concentration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      NH<sub>4</sub>OH is a weak base: NH<sub>4</sub>OH &hArr; NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup>. NH<sub>4</sub>Cl is a soluble strong electrolyte that completely dissociates: NH<sub>4</sub>Cl &rarr; NH<sub>4</sub><sup>+</sup> + Cl<sup>-</sup>. The large excess of common NH<sub>4</sub><sup>+</sup> ions forces the NH<sub>4</sub>OH dissociation equilibrium in the reverse direction according to Le Chatelier's principle, drastically suppressing [OH<sup>-</sup>] and lowering the pH.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: What is the physical significance of the magnitude of an Equilibrium Constant?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #AB47BC;">K &gt; 10<sup>3</sup>:</b> Reaction proceeds almost to completion; products predominate heavily.<br/>2. <b style="color: #AB47BC;">K &lt; 10<sup>-3</sup>:</b> Reaction hardly proceeds; reactants predominate heavily.<br/>3. <b style="color: #AB47BC;">10<sup>-3</sup> &le; K &le; 10<sup>3</sup>:</b> Appreciable concentrations of both reactants and products coexist at equilibrium.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(171, 71, 188, 0.15), rgba(142, 36, 170, 0.15)); border: 1.5px solid rgba(171, 71, 188, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #AB47BC; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Comprehensive Equilibrium Proofs, Van't Hoff Derivations &amp; Industrial Systems</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: State and derive the Law of Chemical Equilibrium. Distinguish between Homogeneous and Heterogeneous Equilibria with five examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #AB47BC;">1. Derivation:</b> For aA + bB &hArr; cC + dD, forward rate r<sub>f</sub> = k<sub>f</sub>[A]<sup>a</sup>[B]<sup>b</sup> and reverse rate r<sub>b</sub> = k<sub>b</sub>[C]<sup>c</sup>[D]<sup>d</sup>. At dynamic equilibrium r<sub>f</sub> = r<sub>b</sub> &rArr; k<sub>f</sub>[A]<sup>a</sup>[B]<sup>b</sup> = k<sub>b</sub>[C]<sup>c</sup>[D]<sup>d</sup> &rArr; K<sub>c</sub> = k<sub>f</sub>/k<sub>b</sub> = ([C]<sup>c</sup>[D]<sup>d</sup>) / ([A]<sup>a</sup>[B]<sup>b</sup>).<br/><br/><b style="color: #AB47BC;">2. Homogeneous Equilibria:</b> All reactants and products exist in a single phase.<br/>&bull; Gaseous: N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &hArr; 2NH<sub>3(g)</sub><br/>&bull; Liquid: CH<sub>3</sub>COOH<sub>(l)</sub> + C<sub>2</sub>H<sub>5</sub>OH<sub>(l)</sub> &hArr; CH<sub>3</sub>COOC<sub>2</sub>H<sub>5(l)</sub> + H<sub>2</sub>O<sub>(l)</sub><br/><br/><b style="color: #AB47BC;">3. Heterogeneous Equilibria:</b> Reactants and products exist in multiple distinct phases. Pure solids/liquids are omitted from K expressions.<br/>&bull; CaCO<sub>3(s)</sub> &hArr; CaO<sub>(s)</sub> + CO<sub>2(g)</sub> &rArr; K<sub>c</sub> = [CO<sub>2</sub>], K<sub>p</sub> = p<sub>CO2</sub>.<br/>&bull; NH<sub>4</sub>HS<sub>(s)</sub> &hArr; NH<sub>3(g)</sub> + H<sub>2</sub>S<sub>(g)</sub> &rArr; K<sub>p</sub> = p<sub>NH3</sub> &times; p<sub>H2S</sub>.<br/>&bull; Fe<sub>(s)</sub> + 4H<sub>2</sub>O<sub>(g)</sub> &hArr; Fe<sub>3</sub>O<sub>4(s)</sub> + 4H<sub>2(g)</sub> &rArr; K<sub>c</sub> = [H<sub>2</sub>]<sup>4</sup> / [H<sub>2</sub>O]<sup>4</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Discuss Le Chatelier's Principle comprehensively: Effect of Concentration, Pressure, Volume, Temperature, Catalyst, and Inert Gas with Industrial Applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #AB47BC;">1. Core Law:</b> Perturbing a system in equilibrium causes a shift that opposes and minimizes the disturbance.<br/><br/><b style="color: #AB47BC;">2. Parameters:</b><br/>&bull; <i>Concentration:</i> Adding reactant shifts forward; removing product shifts forward.<br/>&bull; <i>Pressure:</i> Increasing pressure shifts toward fewer gas moles (&Delta;n<sub>g</sub> &lt; 0).<br/>&bull; <i>Temperature:</i> Raising T favors endothermic direction (&Delta;H &gt; 0); lowering T favors exothermic direction.<br/>&bull; <i>Catalyst:</i> Accelerates rates equally; no equilibrium shift.<br/>&bull; <i>Inert Gas:</i> At constant V, no shift; at constant p, shifts toward more moles (&Delta;n<sub>g</sub> &gt; 0).<br/><br/><b style="color: #AB47BC;">3. Industrial Syntheses:</b><br/>&bull; <i>Haber Process (NH<sub>3</sub>):</i> 200 atm, 700 K, Fe catalyst.<br/>&bull; <i>Contact Process (SO<sub>3</sub>):</i> 2SO<sub>2</sub> + O<sub>2</sub> &hArr; 2SO<sub>3</sub> (&Delta;H = -196 kJ); 1-2 atm, 720 K, V<sub>2</sub>O<sub>5</sub> catalyst.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Derive the Henderson-Hasselbalch Equations for both Acidic and Basic Buffers, and explain the mechanism of Buffer Action with chemical equations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #AB47BC;">1. Acidic Buffer (HA + NaA):</b> HA &hArr; H<sup>+</sup> + A<sup>-</sup> &rArr; K<sub>a</sub> = [H<sup>+</sup>][A<sup>-</sup>]/[HA].<br/>[H<sup>+</sup>] = K<sub>a</sub> [HA]/[A<sup>-</sup>]. Taking -log: pH = pK<sub>a</sub> + log([A<sup>-</sup>]/[HA]) &rArr; <b>pH = pK<sub>a</sub> + log<sub>10</sub>([Salt] / [Acid])</b>.<br/><br/><b style="color: #AB47BC;">2. Basic Buffer (BOH + BCl):</b> BOH &hArr; B<sup>+</sup> + OH<sup>-</sup> &rArr; K<sub>b</sub> = [B<sup>+</sup>][OH<sup>-</sup>]/[BOH].<br/>[OH<sup>-</sup>] = K<sub>b</sub> [BOH]/[B<sup>+</sup>]. Taking -log: <b>pOH = pK<sub>b</sub> + log<sub>10</sub>([Salt] / [Base])</b> &rArr; pH = 14 - pOH.<br/><br/><b style="color: #AB47BC;">3. Mechanism:</b> In acidic buffer, added H<sup>+</sup> is trapped by CH<sub>3</sub>COO<sup>-</sup> &rarr; CH<sub>3</sub>COOH; added OH<sup>-</sup> is neutralized by CH<sub>3</sub>COOH &rarr; CH<sub>3</sub>COO<sup>-</sup> + H<sub>2</sub>O. Keeps pH stable.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Explain the Hydrolysis of Salts in exhaustive detail: Four classes of salts, derivation of Hydrolysis Constants (Kh), Degree of Hydrolysis (h), and pH.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #AB47BC;">1. Strong Acid + Strong Base (NaCl):</b> No hydrolysis; pH = 7.0.<br/><br/><b>2. Weak Acid + Strong Base (CH<sub>3</sub>COONa):</b> CH<sub>3</sub>COO<sup>-</sup> + H<sub>2</sub>O &hArr; CH<sub>3</sub>COOH + OH<sup>-</sup>.<br/>K<sub>h</sub> = K<sub>w</sub>/K<sub>a</sub>; h = &radic;(K<sub>h</sub>/C); [OH<sup>-</sup>] = Ch = &radic;(K<sub>h</sub>C) &rArr; <b>pH = 7 + <sup>1</sup>/<sub>2</sub>pK<sub>a</sub> + <sup>1</sup>/<sub>2</sub>log C</b>.<br/><br/><b>3. Strong Acid + Weak Base (NH<sub>4</sub>Cl):</b> NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O &hArr; NH<sub>4</sub>OH + H<sup>+</sup>.<br/>K<sub>h</sub> = K<sub>w</sub>/K<sub>b</sub>; h = &radic;(K<sub>h</sub>/C); [H<sup>+</sup>] = &radic;(K<sub>h</sub>C) &rArr; <b>pH = 7 - <sup>1</sup>/<sub>2</sub>pK<sub>b</sub> - <sup>1</sup>/<sub>2</sub>log C</b>.<br/><br/><b>4. Weak Acid + Weak Base (CH<sub>3</sub>COONH<sub>4</sub>):</b> Both ions hydrolyze.<br/>K<sub>h</sub> = K<sub>w</sub>/(K<sub>a</sub> K<sub>b</sub>); h = &radic;K<sub>h</sub>; <b>pH = 7 + <sup>1</sup>/<sub>2</sub>pK<sub>a</sub> - <sup>1</sup>/<sub>2</sub>pK<sub>b</sub></b> (Independent of C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Discuss Solubility Product (Ksp) and Common Ion Effect in complete depth: Calculations for AB, AB2, A2B3 salts, and applications in qualitative analysis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. Salt Types &amp; K<sub>sp</sub> Relations:</b><br/>&bull; AB (AgCl): K<sub>sp</sub> = S &times; S = <b>S<sup>2</sup></b> &rArr; S = &radic;K<sub>sp</sub>.<br/>&bull; AB<sub>2</sub> (CaF<sub>2</sub>, PbCl<sub>2</sub>): K<sub>sp</sub> = S &times; (2S)<sup>2</sup> = <b>4 S<sup>3</sup></b> &rArr; S = (K<sub>sp</sub>/4)<sup>1/3</sup>.<br/>&bull; A<sub>2</sub>B<sub>3</sub> (As<sub>2</sub>S<sub>3</sub>): K<sub>sp</sub> = (2S)<sup>2</sup> &times; (3S)<sup>3</sup> = <b>108 S<sup>5</sup></b> &rArr; S = (K<sub>sp</sub>/108)<sup>1/5</sup>.<br/><br/><b style="color: #AB47BC;">2. Precipitation Principle:</b> Precipitation occurs when Ionic Product Q<sub>sp</sub> &gt; K<sub>sp</sub>.<br/><br/><b style="color: #AB47BC;">3. Analytical Applications:</b><br/>&bull; Separation of Group II from Group IV cations by controlling sulfide ion concentration via common ion effect of HCl on H<sub>2</sub>S.<br/>&bull; Purification of common salt by passing dry HCl gas through saturated brine.<br/>&bull; Salting out of soap by adding NaCl.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Derive the Van't Hoff Equation relating equilibrium constant to temperature, and discuss its thermodynamic significance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      From thermodynamics: &Delta;G&deg; = -RT ln K and &Delta;G&deg; = &Delta;H&deg; - T&Delta;S&deg;.<br/>Equating: -RT ln K = &Delta;H&deg; - T&Delta;S&deg; &rArr; ln K = -(&Delta;H&deg; / RT) + (&Delta;S&deg; / R).<br/>Differentiating with respect to T (assuming &Delta;H&deg; and &Delta;S&deg; constant):<br/><b>d(ln K) / dT = &Delta;H&deg; / RT<sup>2</sup></b> (Van't Hoff Equation).<br/>Integrating between T<sub>1</sub> and T<sub>2</sub>:<br/><b>log<sub>10</sub>(K<sub>2</sub> / K<sub>1</sub>) = [&Delta;H&deg; / 2.303 R] &times; [(T<sub>2</sub> - T<sub>1</sub>) / (T<sub>1</sub> T<sub>2</sub>)]</b>.<br/>&bull; If &Delta;H&deg; &gt; 0 (Endothermic): K<sub>2</sub> &gt; K<sub>1</sub> (K increases with T).<br/>&bull; If &Delta;H&deg; &lt; 0 (Exothermic): K<sub>2</sub> &lt; K<sub>1</sub> (K decreases with T).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain the Bronsted-Lowry and Lewis acid-base theories with comprehensive classification of Lewis acids and bases.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #AB47BC;">1. Br&oslash;nsted-Lowry:</b> Acid is proton donor, Base is proton acceptor. Conjugate pairs differ by H<sup>+</sup>. Strengths relate via K<sub>a</sub> &times; K<sub>b</sub> = K<sub>w</sub>.<br/><br/><b style="color: #AB47BC;">2. Lewis Classification:</b><br/>&bull; <i>Lewis Acids (Electrophiles):</i> (a) Incomplete octet molecules (BF<sub>3</sub>, AlCl<sub>3</sub>), (b) Simple metal cations (Ag<sup>+</sup>, Fe<sup>3+</sup>), (c) Molecules with vacant d-orbitals (SiF<sub>4</sub>, SnCl<sub>4</sub>), (d) Molecules with polar double bonds (O=C=O).<br/>&bull; <i>Lewis Bases (Nucleophiles):</i> (a) Neutral molecules with lone pairs (:NH<sub>3</sub>, H<sub>2</sub>O:), (b) Negatively charged anions (OH<sup>-</sup>, CN<sup>-</sup>, Cl<sup>-</sup>), (c) Unsaturated alkenes/alkynes with electron-rich &pi; bonds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Explain the relationship between Degree of Dissociation (&alpha;), Vapor Density, and Molecular Mass for a decomposing gas like PCl5.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For dissociation: PCl<sub>5(g)</sub> &hArr; PCl<sub>3(g)</sub> + Cl<sub>2(g)</sub>.<br/>Initial moles: 1; At equilibrium: 1 - &alpha;, &alpha;, &alpha;. Total moles = 1 + &alpha;.<br/>Since mass is conserved: (Theoretical Molar Mass M) / (Experimental Observed Mass M<sub>obs</sub>) = Total equilibrium moles / Initial moles = (1 + &alpha;) / 1.<br/>Since M = 2D (where D is theoretical vapor density and d is observed vapor density):<br/>D / d = 1 + &alpha; &rArr; <b>&alpha; = (D - d) / d = (M - M<sub>obs</sub>) / M<sub>obs</sub></b>.<br/>For general decomposition: A &hArr; n B: <b>&alpha; = (D - d) / [(n - 1) d]</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain the pH titration curves of: (a) Strong Acid vs Strong Base, (b) Weak Acid vs Strong Base, (c) Strong Acid vs Weak Base, with suitable indicator selection.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #AB47BC;">1. Strong Acid vs Strong Base (HCl vs NaOH):</b> Sharp vertical pH jump between pH 3.5 and 10.5 at equivalence point (pH = 7.0). Both Methyl Orange (pH 3.1-4.4) and Phenolphthalein (pH 8.2-10.0) work.<br/><br/><b>2. Weak Acid vs Strong Base (CH<sub>3</sub>COOH vs NaOH):</b> Equivalence point is alkaline (pH ~8.8) due to salt hydrolysis. pH jump occurs between 7.0 and 10.5. <b>Phenolphthalein is the only suitable indicator</b>; Methyl Orange fails.<br/><br/><b>3. Strong Acid vs Weak Base (HCl vs NH<sub>4</sub>OH):</b> Equivalence point is acidic (pH ~5.2). pH jump occurs between 3.5 and 7.0. <b>Methyl Orange is the only suitable indicator</b>; Phenolphthalein fails.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: The equilibrium constant for the reaction: H2(g) + I2(g) &hArr; 2HI(g) is 50.0 at 448°C. If 0.50 mol of H2 and 0.50 mol of I2 are placed in a 1.0 L vessel, calculate equilibrium concentrations of all species.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Initial [H<sub>2</sub>] = 0.50 M, [I<sub>2</sub>] = 0.50 M, [HI] = 0.<br/>At equilibrium: [H<sub>2</sub>] = 0.50 - x, [I<sub>2</sub>] = 0.50 - x, [HI] = 2x.<br/>K<sub>c</sub> = [HI]<sup>2</sup> / ([H<sub>2</sub>][I<sub>2</sub>]) = (2x)<sup>2</sup> / (0.50 - x)<sup>2</sup> = 50.0.<br/>Taking square root on both sides:<br/>2x / (0.50 - x) = &radic;50.0 = 7.071.<br/>2x = 7.071(0.50 - x) = 3.5355 - 7.071x.<br/>9.071x = 3.5355 &rArr; x = 3.5355 / 9.071 = <b>0.390 M</b>.<br/>Equilibrium concentrations:<br/>&bull; <b>[H<sub>2</sub>] = 0.50 - 0.390 = 0.110 M</b>.<br/>&bull; <b>[I<sub>2</sub>] = 0.50 - 0.390 = 0.110 M</b>.<br/>&bull; <b>[HI] = 2(0.390) = 0.780 M</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain the concept of Simultaneous Equilibria and calculate the solubility of Ag2CrO4 in a solution containing 0.1 M AgNO3. (Ksp of Ag2CrO4 = 1.1 &times; 10<sup>-12</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ag<sub>2</sub>CrO<sub>4(s)</sub> &hArr; 2Ag<sup>+</sup><sub>(aq)</sub> + CrO<sub>4</sub><sup>2-</sup><sub>(aq)</sub>.<br/>Let solubility be S mol L<sup>-1</sup>. [CrO<sub>4</sub><sup>2-</sup>] = S.<br/>AgNO<sub>3</sub> dissociates completely: [Ag<sup>+</sup>]<sub>AgNO3</sub> = 0.1 M.<br/>Total [Ag<sup>+</sup>] = 2S + 0.1 &approx; 0.1 M (since S &lt;&lt; 0.1 due to common ion effect).<br/>K<sub>sp</sub> = [Ag<sup>+</sup>]<sup>2</sup> [CrO<sub>4</sub><sup>2-</sup>] = (0.1)<sup>2</sup> &times; S = 1.1 &times; 10<sup>-12</sup>.<br/>0.01 &times; S = 1.1 &times; 10<sup>-12</sup> &rArr; <b>S = 1.1 &times; 10<sup>-10</sup> mol L<sup>-1</sup></b>.<br/>(In pure water, S = (K<sub>sp</sub>/4)<sup>1/3</sup> = 6.5 &times; 10<sup>-5</sup> M; common ion decreases solubility by ~600,000-fold).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Discuss the Ostwald-Walker dynamic method for the determination of relative lowering of vapor pressure and equilibrium constant.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Air is bubbled successively through: (1) A train of weighed bulbs containing solution, (2) A train of bulbs containing pure solvent, (3) A U-tube containing anhydrous CaCl<sub>2</sub>.<br/>&bull; Loss in mass of solution bulbs &prop; vapor pressure of solution (p).<br/>&bull; Loss in mass of solvent bulbs &prop; (p&deg; - p).<br/>&bull; Total gain in mass of CaCl<sub>2</sub> tube &prop; p&deg;.<br/>Relative lowering: (p&deg; - p) / p&deg; = (Loss in solvent bulbs) / (Total gain in CaCl<sub>2</sub> tube). Directly calculates solute molar mass and thermodynamic activity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain the ionization of Polyprotic Weak Acids (e.g., H3PO4, H2S) and why Ka1 &gt;&gt; Ka2 &gt;&gt; Ka3.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Polyprotic acids ionize stepwise:<br/>H<sub>3</sub>PO<sub>4</sub> &hArr; H<sup>+</sup> + H<sub>2</sub>PO<sub>4</sub><sup>-</sup> (K<sub>a1</sub> = 7.5 &times; 10<sup>-3</sup>)<br/>H<sub>2</sub>PO<sub>4</sub><sup>-</sup> &hArr; H<sup>+</sup> + HPO<sub>4</sub><sup>2-</sup> (K<sub>a2</sub> = 6.2 &times; 10<sup>-8</sup>)<br/>HPO<sub>4</sub><sup>2-</sup> &hArr; H<sup>+</sup> + PO<sub>4</sub><sup>3-</sup> (K<sub>a3</sub> = 4.2 &times; 10<sup>-13</sup>).<br/>K<sub>a1</sub> &gt;&gt; K<sub>a2</sub> &gt;&gt; K<sub>a3</sub> because it is electrostaticly much harder to remove a positively charged proton (H<sup>+</sup>) from a negatively charged anion (H<sub>2</sub>PO<sub>4</sub><sup>-</sup>) than from a neutral molecule (H<sub>3</sub>PO<sub>4</sub>), and harder still from a divalent anion (HPO<sub>4</sub><sup>2-</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the concept of Acid-Base Neutralization Indicators: Two-color equilibrium, Transition interval, and Universal Indicator.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Indicators are weak dyes (HIn &hArr; H<sup>+</sup> + In<sup>-</sup>).<br/>K<sub>In</sub> = [H<sup>+</sup>][In<sup>-</sup>] / [HIn] &rArr; pH = pK<sub>In</sub> + log([In<sup>-</sup>]/[HIn]).<br/>The human eye perceives Color 1 when [HIn] &ge; 10[In<sup>-</sup>] (pH &le; pK<sub>In</sub> - 1), and Color 2 when [In<sup>-</sup>] &ge; 10[HIn] (pH &ge; pK<sub>In</sub> + 1). Thus, the visible transition interval spans <b>pH = pK<sub>In</sub> &plusmn; 1 (2 pH units)</b>.<br/>A <b>Universal Indicator</b> combines multiple dyes (thymol blue, methyl red, bromothymol blue, phenolphthalein) to display a smooth rainbow spectrum from pH 1 to 14.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain why the degree of hydrolysis of the salt of a weak acid and weak base is independent of concentration, while for other salts it depends on concentration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For salt of weak acid and weak base (CH<sub>3</sub>COONH<sub>4</sub>):<br/>CH<sub>3</sub>COO<sup>-</sup> + NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O &hArr; CH<sub>3</sub>COOH + NH<sub>4</sub>OH.<br/>K<sub>h</sub> = (C h &times; C h) / [C(1 - h) &times; C(1 - h)] = h<sup>2</sup> / (1 - h)<sup>2</sup>.<br/>Concentration C cancels out completely: <b>h = &radic;K<sub>h</sub> / (1 + &radic;K<sub>h</sub>)</b>.<br/>For salts of weak acid + strong base, K<sub>h</sub> = C h<sup>2</sup> / (1 - h), so h = &radic;(K<sub>h</sub>/C) &prop; 1/&radic;C, which depends directly on dilution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Calculate the change in pH when 0.01 mol of HCl is added to 1.0 L of a buffer containing 0.10 M CH3COOH and 0.10 M CH3COONa. (pKa = 4.74).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Initial pH = pK<sub>a</sub> + log(0.10/0.10) = <b>4.74</b>.<br/>Adding 0.01 mol HCl reacts with acetate ions: CH<sub>3</sub>COO<sup>-</sup> + H<sup>+</sup> &rarr; CH<sub>3</sub>COOH.<br/>New [CH<sub>3</sub>COO<sup>-</sup>] = 0.10 - 0.01 = 0.09 M.<br/>New [CH<sub>3</sub>COOH] = 0.10 + 0.01 = 0.11 M.<br/>New pH = 4.74 + log(0.09 / 0.11) = 4.74 + log(0.818) = 4.74 - 0.087 = <b>4.65</b>.<br/>Change in pH = 4.74 - 4.65 = <b>0.09 units</b> (Demonstrates robust buffer stabilization).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the Fractional Precipitation of metal ions using selective solubility product control.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When two cations form precipitates with the same reagent, the cation whose precipitation requirement (Q<sub>sp</sub> &gt; K<sub>sp</sub>) is met at the lower reagent concentration precipitates first.<br/>Example: A solution contains 0.1 M Cl<sup>-</sup> and 0.1 M CrO<sub>4</sub><sup>2-</sup>. AgNO<sub>3</sub> is added.<br/>&bull; For AgCl: [Ag<sup>+</sup>] needed = K<sub>sp</sub>/[Cl<sup>-</sup>] = 1.8 &times; 10<sup>-10</sup> / 0.1 = <b>1.8 &times; 10<sup>-9</sup> M</b>.<br/>&bull; For Ag<sub>2</sub>CrO<sub>4</sub>: [Ag<sup>+</sup>] needed = &radic;(K<sub>sp</sub>/[CrO<sub>4</sub><sup>2-</sup>]) = &radic;(1.1 &times; 10<sup>-12</sup> / 0.1) = <b>3.3 &times; 10<sup>-6</sup> M</b>.<br/>AgCl precipitates first until [Cl<sup>-</sup>] drops below 5 &times; 10<sup>-5</sup> M before red Ag<sub>2</sub>CrO<sub>4</sub> begins to precipitate.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the relationship between Chemical Equilibrium and Chemical Kinetics: Microscopic Reversibility and Detailed Balancing.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      At dynamic equilibrium, macroscopic properties are invariant because forward rate equals reverse rate: r<sub>f</sub> = r<sub>b</sub>.<br/><b style="color: #AB47BC;">Principle of Detailed Balancing:</b> At equilibrium, every elementary microscopic reaction pathway is balanced by its exact reverse elementary pathway occurring at the same rate.<br/>For elementary step: A + B &hArr; C + D, r<sub>f</sub> = k<sub>f</sub>[A][B] and r<sub>b</sub> = k<sub>b</sub>[C][D].<br/>k<sub>f</sub>[A][B] = k<sub>b</sub>[C][D] &rArr; [C][D] / ([A][B]) = k<sub>f</sub> / k<sub>b</sub> = <b>K<sub>c</sub></b>.<br/>This bridges thermodynamic equilibrium constant K<sub>c</sub> directly with kinetic rate constants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the concept of Salt Effect (Inert Ion Effect) on the solubility of sparingly soluble salts.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Adding an inert strong electrolyte without a common ion (e.g., KNO<sub>3</sub> added to AgCl solution) increases the total ionic strength of the solution: I = <sup>1</sup>/<sub>2</sub> &Sigma; c<sub>i</sub> z<sub>i</sub><sup>2</sup>.<br/>According to Debye-H&uuml;ckel limiting law, higher ionic strength stabilizes individual ions via an ionic atmosphere, lowering mean activity coefficients (&gamma;<sub>&plusmn;</sub> &lt; 1). Since thermodynamic K<sub>sp</sub>&deg; = a<sub>Ag+</sub> &times; a<sub>Cl-</sub> = &gamma;<sub>&plusmn;</sub><sup>2</sup> [Ag<sup>+</sup>][Cl<sup>-</sup>] must remain constant, the molar concentrations [Ag<sup>+</sup>] and [Cl<sup>-</sup>] must increase, <b>increasing the solubility of AgCl</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #AB47BC; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an exhaustive Master Synthesis Matrix correlating Chemical Equilibrium, Le Chatelier's Principle, Ionic Equilibria, and Analytical Applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #AB47BC;">1. Chemical Equilibrium:</b> Mass action law K<sub>c</sub> = k<sub>f</sub>/k<sub>b</sub>; K<sub>p</sub> = K<sub>c</sub>(RT)<sup>&Delta;n<sub>g</sub></sup>; Reaction quotient Q predicts direction (&Delta;G&deg; = -2.303 RT log K).<br/><br/><b style="color: #AB47BC;">2. Le Chatelier's Framework:</b> Concentration, pressure (&Delta;n<sub>g</sub>), temperature (Van't Hoff isochore), and inert gas addition dictate shifts; optimizes industrial Haber and Contact processes.<br/><br/><b style="color: #AB47BC;">3. Ionic Equilibria:</b> Ostwald's dilution law for weak acids/bases (&alpha; = &radic;(K/C)); Br&oslash;nsted conjugate pairs; Lewis electron-pair donation.<br/><br/><b style="color: #AB47BC;">4. pH &amp; Buffers:</b> S&oslash;rensen scale (pH = -log[H<sup>+</sup>]); Henderson-Hasselbalch equations maintain homeostasis (blood bicarbonate buffer).<br/><br/><b style="color: #AB47BC;">5. Solubility &amp; Salt Hydrolysis:</b> K<sub>sp</sub> precipitation criteria (Q<sub>sp</sub> &gt; K<sub>sp</sub>) and common ion effect govern qualitative inorganic cation analysis (Groups II, III).
    </div>
  </div>

</div>
`;

export const c11Chem6Mcqs = [
  {
    "id": "c11-chem-6-mcq-1",
    "question": "At dynamic chemical equilibrium:",
    "options": [
      "A):   Reactants are completely converted to products",
      "B):   Rates of forward and reverse reactions are equal",
      "C):   Concentrations of reactants and products must be equal",
      "D):   Reactions stop completely"
    ],
    "correctAnswer": "b",
    "explanation": "At dynamic equilibrium, forward and reverse reactions proceed at equal rates, keeping macroscopic concentrations constant."
  },
  {
    "id": "c11-chem-6-mcq-2",
    "question": "For the reaction: H<sub>2(g)</sub> + I<sub>2(g)</sub> &hArr; 2HI<sub>(g)</sub>, the relation between K<sub>p</sub> and K<sub>c</sub> is:",
    "options": [
      "A):   K<sub>p</sub> = K<sub>c</sub>(RT)",
      "B):   K<sub>p</sub> = K<sub>c</sub>",
      "C):   K<sub>p</sub> = K<sub>c</sub>(RT)<sup>-1</sup>",
      "D):   K<sub>p</sub> = K<sub>c</sub>(RT)<sup>2</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "&Delta;n<sub>g</sub> = 2 - (1 + 1) = 0. Therefore, K<sub>p</sub> = K<sub>c</sub>(RT)<sup>0</sup> = K<sub>c</sub>."
  },
  {
    "id": "c11-chem-6-mcq-3",
    "question": "If Reaction Quotient Q<sub>c</sub> is less than Equilibrium Constant K<sub>c</sub> (Q<sub>c</sub> < K<sub>c</sub>), the reaction will:",
    "options": [
      "A):   Proceed in the reverse direction",
      "B):   Proceed in the forward direction",
      "C):   Remain in equilibrium",
      "D):   Stop reacting"
    ],
    "correctAnswer": "b",
    "explanation": "When Q<sub>c</sub> &lt; K<sub>c</sub>, products must accumulate and reactants must be consumed to reach equilibrium, driving the reaction forward."
  },
  {
    "id": "c11-chem-6-mcq-4",
    "question": "According to Le Chatelier's Principle, an increase in pressure on the system: N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &hArr; 2NH<sub>3(g)</sub> will:",
    "options": [
      "A):   Shift equilibrium in the forward direction",
      "B):   Shift equilibrium in the reverse direction",
      "C):   Have no effect on equilibrium",
      "D):   Decrease the rate of reaction"
    ],
    "correctAnswer": "a",
    "explanation": "Increasing pressure shifts equilibrium toward the side with fewer gas moles (4 moles on left &rarr; 2 moles on right), favoring the forward direction."
  },
  {
    "id": "c11-chem-6-mcq-5",
    "question": "What is the effect of adding a catalyst to a reversible reaction at equilibrium?",
    "options": [
      "A):   Increases the yield of products",
      "B):   Shifts equilibrium forward",
      "C):   Increases the value of K<sub>c</sub>",
      "D):   Accelerates attainment of equilibrium without shifting position"
    ],
    "correctAnswer": "d",
    "explanation": "A catalyst lowers activation energy equally for both forward and reverse paths, speeding up the approach to equilibrium without changing K<sub>c</sub> or position."
  },
  {
    "id": "c11-chem-6-mcq-6",
    "question": "According to Ostwald's Dilution Law, the degree of dissociation (&alpha;) of a weak electrolyte is proportional to:",
    "options": [
      "A):   C",
      "B):   &radic;C",
      "C):   1 / &radic;C",
      "D):   1 / C"
    ],
    "correctAnswer": "c",
    "explanation": "&alpha; = &radic;(K<sub>a</sub> / C), so &alpha; is inversely proportional to &radic;C (directly proportional to square root of dilution &radic;V)."
  },
  {
    "id": "c11-chem-6-mcq-7",
    "question": "What is the conjugate base of HCO<sub>3</sub><sup>-</sup>?",
    "options": [
      "A):   H<sub>2</sub>CO<sub>3</sub>",
      "B):   CO<sub>3</sub><sup>2-</sup>",
      "C):   CO<sub>2</sub>",
      "D):   H<sup>+</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "A conjugate base is formed by removing one proton (H<sup>+</sup>) from the acid: HCO<sub>3</sub><sup>-</sup> - H<sup>+</sup> = CO<sub>3</sub><sup>2-</sup>."
  },
  {
    "id": "c11-chem-6-mcq-8",
    "question": "Which of the following is a Lewis acid?",
    "options": [
      "A):   NH<sub>3</sub>",
      "B):   H<sub>2</sub>O",
      "C):   BF<sub>3</sub>",
      "D):   OH<sup>-</sup>"
    ],
    "correctAnswer": "c",
    "explanation": "BF<sub>3</sub> has an incomplete octet (6 valence electrons) with a vacant 2p orbital, allowing it to accept an electron pair as a Lewis acid."
  },
  {
    "id": "c11-chem-6-mcq-9",
    "question": "The value of the ionic product of water (K<sub>w</sub>) at 25°C is:",
    "options": [
      "A):   1.0 &times; 10<sup>-7</sup>",
      "B):   1.0 &times; 10<sup>-14</sup>",
      "C):   1.0 &times; 10<sup>-10</sup>",
      "D):   1.0 &times; 10<sup>-1</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "At 25&deg;C (298 K), K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>][OH<sup>-</sup>] = (10<sup>-7</sup>)(10<sup>-7</sup>) = 1.0 &times; 10<sup>-14</sup> mol<sup>2</sup> L<sup>-2</sup>."
  },
  {
    "id": "c11-chem-6-mcq-10",
    "question": "What is the pH of a 0.001 M NaOH solution at 25°C?",
    "options": [
      "A):   3",
      "B):   11",
      "C):   14",
      "D):   7"
    ],
    "correctAnswer": "b",
    "explanation": "[OH<sup>-</sup>] = 10<sup>-3</sup> M &rArr; pOH = -log(10<sup>-3</sup>) = 3 &rArr; pH = 14 - pOH = 14 - 3 = 11."
  },
  {
    "id": "c11-chem-6-mcq-11",
    "question": "An acidic buffer solution can be prepared by mixing equimolar amounts of:",
    "options": [
      "A):   HCl and NaCl",
      "B):   CH<sub>3</sub>COOH and CH<sub>3</sub>COONa",
      "C):   NaOH and NaCl",
      "D):   NH<sub>4</sub>OH and NH<sub>4</sub>Cl"
    ],
    "correctAnswer": "b",
    "explanation": "An acidic buffer consists of a weak acid and its salt with a strong base (CH<sub>3</sub>COOH + CH<sub>3</sub>COONa)."
  },
  {
    "id": "c11-chem-6-mcq-12",
    "question": "According to the Henderson-Hasselbalch equation, the pH of an acidic buffer is equal to pK<sub>a</sub> when:",
    "options": [
      "A):   [Salt] = 2 [Acid]",
      "B):   [Salt] = [Acid]",
      "C):   [Salt] = 0",
      "D):   [Acid] = 0"
    ],
    "correctAnswer": "b",
    "explanation": "pH = pK<sub>a</sub> + log([Salt]/[Acid]). When [Salt] = [Acid], log(1) = 0, so pH = pK<sub>a</sub>."
  },
  {
    "id": "c11-chem-6-mcq-13",
    "question": "An aqueous solution of Ammonium Chloride (NH<sub>4</sub>Cl) is:",
    "options": [
      "A):   Neutral (pH = 7)",
      "B):   Acidic (pH &lt; 7)",
      "C):   Basic (pH &gt; 7)",
      "D):   Strongly basic"
    ],
    "correctAnswer": "b",
    "explanation": "NH<sub>4</sub>Cl is the salt of a strong acid (HCl) and a weak base (NH<sub>4</sub>OH). The NH<sub>4</sub><sup>+</sup> cation undergoes hydrolysis to yield H<sup>+</sup>, making the solution acidic."
  },
  {
    "id": "c11-chem-6-mcq-14",
    "question": "The pH of an aqueous solution of Sodium Acetate (CH<sub>3</sub>COONa) is given by:",
    "options": [
      "A):   pH = 7 + 1/2 pK<sub>a</sub> + 1/2 log C",
      "B):   pH = 7 - 1/2 pK<sub>b</sub> - 1/2 log C",
      "C):   pH = 7 + 1/2 pK<sub>a</sub> - 1/2 pK<sub>b</sub>",
      "D):   pH = 7.0"
    ],
    "correctAnswer": "a",
    "explanation": "For the salt of a weak acid and strong base, anionic hydrolysis produces an alkaline solution: pH = 7 + 1/2 pK<sub>a</sub> + 1/2 log C."
  },
  {
    "id": "c11-chem-6-mcq-15",
    "question": "Precipitation of a sparingly soluble salt occurs when:",
    "options": [
      "A):   Ionic Product Q<sub>sp</sub> &lt; K<sub>sp</sub>",
      "B):   Ionic Product Q<sub>sp</sub> = K<sub>sp</sub>",
      "C):   Ionic Product Q<sub>sp</sub> &gt; K<sub>sp</sub>",
      "D):   K<sub>sp</sub> = 0"
    ],
    "correctAnswer": "c",
    "explanation": "When the ionic product Q<sub>sp</sub> exceeds the equilibrium solubility product K<sub>sp</sub>, the solution becomes supersaturated and precipitate forms."
  },
  {
    "id": "c11-chem-6-mcq-16",
    "question": "The relationship between solubility product (K<sub>sp</sub>) and molar solubility (S) for Lead Chloride (PbCl<sub>2</sub>) is:",
    "options": [
      "A):   K<sub>sp</sub> = S<sup>2</sup>",
      "B):   K<sub>sp</sub> = 4 S<sup>3</sup>",
      "C):   K<sub>sp</sub> = 27 S<sup>4</sup>",
      "D):   K<sub>sp</sub> = 108 S<sup>5</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "PbCl<sub>2(s)</sub> &hArr; Pb<sup>2+</sup> + 2Cl<sup>-</sup>. K<sub>sp</sub> = [Pb<sup>2+</sup>][Cl<sup>-</sup>]<sup>2</sup> = (S)(2S)<sup>2</sup> = 4 S<sup>3</sup>."
  },
  {
    "id": "c11-chem-6-mcq-17",
    "question": "Why does the solubility of AgCl decrease in 0.1 M NaCl compared to pure water?",
    "options": [
      "A):   Temperature increases",
      "B):   Common ion effect of Cl<sup>-</sup> shifts equilibrium reverse",
      "C):   NaCl reacts with AgCl",
      "D):   AgCl dissociates completely"
    ],
    "correctAnswer": "b",
    "explanation": "The presence of common Cl<sup>-</sup> ions from NaCl shifts the dissolution equilibrium of AgCl backward, drastically lowering its solubility."
  },
  {
    "id": "c11-chem-6-mcq-18",
    "question": "In qualitative analysis of Group II cations, H<sub>2</sub>S gas is passed in presence of dil. HCl to:",
    "options": [
      "A):   Increase [S<sup>2-</sup>] concentration",
      "B):   Suppress [S<sup>2-</sup>] concentration via common ion effect",
      "C):   Precipitate Group IV cations",
      "D):   Oxidize metal ions"
    ],
    "correctAnswer": "b",
    "explanation": "The H<sup>+</sup> ions from HCl suppress the ionization of weak acid H<sub>2</sub>S, keeping [S<sup>2-</sup>] low so that only Group II sulfides with very low K<sub>sp</sub> precipitate."
  },
  {
    "id": "c11-chem-6-mcq-19",
    "question": "The pH of a 1.0 &times; 10<sup>-8</sup> M HCl solution is:",
    "options": [
      "A):   8.0",
      "B):   6.98",
      "C):   7.0",
      "D):   1.0"
    ],
    "correctAnswer": "b",
    "explanation": "In extremely dilute acid, H<sup>+</sup> from water auto-ionization (10<sup>-7</sup> M) must be added, yielding [H<sup>+</sup>] &approx; 1.05 &times; 10<sup>-7</sup> M &rArr; pH = 6.98."
  },
  {
    "id": "c11-chem-6-mcq-20",
    "question": "For an endothermic reaction, the value of equilibrium constant K:",
    "options": [
      "A):   Increases with increase in temperature",
      "B):   Decreases with increase in temperature",
      "C):   Is independent of temperature",
      "D):   Becomes zero"
    ],
    "correctAnswer": "a",
    "explanation": "According to Van't Hoff isochore, d(ln K)/dT = &Delta;H&deg; / RT<sup>2</sup> &gt; 0 for endothermic reactions, so K increases with rising temperature."
  },
  {
    "id": "c11-chem-6-mcq-21",
    "question": "What is the pH of human blood maintained by the bicarbonate buffer system?",
    "options": [
      "A):   6.8",
      "B):   7.4",
      "C):   8.2",
      "D):   5.5"
    ],
    "correctAnswer": "b",
    "explanation": "Human blood is tightly buffered at pH 7.40 &plusmn; 0.05 by the carbonic acid-bicarbonate buffer system."
  },
  {
    "id": "c11-chem-6-mcq-22",
    "question": "The mathematical relation between &Delta;G° and equilibrium constant K is:",
    "options": [
      "A):   &Delta;G&deg; = -2.303 RT log<sub>10</sub> K",
      "B):   &Delta;G&deg; = 2.303 RT log<sub>10</sub> K",
      "C):   &Delta;G&deg; = -RT / log K",
      "D):   &Delta;G&deg; = 0"
    ],
    "correctAnswer": "a",
    "explanation": "&Delta;G&deg; = -RT ln K = -2.303 RT log<sub>10</sub> K."
  },
  {
    "id": "c11-chem-6-mcq-23",
    "question": "Which of the following salts will NOT undergo hydrolysis in water?",
    "options": [
      "A):   CH<sub>3</sub>COONa",
      "B):   NH<sub>4</sub>Cl",
      "C):   KNO<sub>3</sub>",
      "D):   FeCl<sub>3</sub>"
    ],
    "correctAnswer": "c",
    "explanation": "KNO<sub>3</sub> is formed from strong base (KOH) and strong acid (HNO<sub>3</sub>); neither K<sup>+</sup> nor NO<sub>3</sub><sup>-</sup> hydrolyzes in water."
  },
  {
    "id": "c11-chem-6-mcq-24",
    "question": "What happens when an inert gas is added at constant volume to a system in chemical equilibrium?",
    "options": [
      "A):   Equilibrium shifts forward",
      "B):   Equilibrium shifts backward",
      "C):   No shift in equilibrium position occurs",
      "D):   K<sub>c</sub> increases"
    ],
    "correctAnswer": "c",
    "explanation": "At constant volume, the partial pressures and molar concentrations of reacting gases remain unchanged, so the equilibrium position does not shift."
  },
  {
    "id": "c11-chem-6-mcq-25",
    "question": "The units of K<sub>p</sub> for the reaction: PCl<sub>5(g)</sub> &hArr; PCl<sub>3(g)</sub> + Cl<sub>2(g)</sub> are:",
    "options": [
      "A):   Dimensionless",
      "B):   atm",
      "C):   atm<sup>-1</sup>",
      "D):   atm<sup>2</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "&Delta;n<sub>g</sub> = (1 + 1) - 1 = +1. Units of K<sub>p</sub> = (atm)<sup>&Delta;n<sub>g</sub></sup> = atm."
  }
];
