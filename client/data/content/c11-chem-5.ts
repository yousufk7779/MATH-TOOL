// Class 11 Chemistry Chapter 5: Chemical Thermodynamics
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Chemistry | Class: 11 | Code: c11-chem-5

export const c11Chem5HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(255, 138, 101, 0.12), rgba(255, 61, 0, 0.12)); border: 1.5px solid rgba(255, 138, 101, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #FF8A65; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #FF8A65; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 5: Chemical Thermodynamics</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF8A65;">System &amp; Surroundings:</b> System is the specific macroscopic part of the universe under thermodynamic study; the remainder of the universe constitutes the surroundings.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF8A65;">First Law of Thermodynamics:</b> Energy can neither be created nor destroyed, only transformed from one form to another: &Delta;U = q + w.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF8A65;">Enthalpy (H):</b> Total heat content of a system at constant pressure defined as H = U + pV. For chemical reactions: &Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF8A65;">Hess's Law:</b> The total enthalpy change for a chemical reaction is identical whether the reaction takes place in one single step or in a series of multiple steps.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF8A65;">Entropy (S):</b> A quantitative state function measuring the degree of microscopic molecular randomness, thermal disorder, or chaos in a system: &Delta;S = q<sub>rev</sub> / T.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF8A65;">Gibbs Free Energy (G):</b> The thermodynamic potential available to do useful non-expansion work at constant T and p: &Delta;G = &Delta;H - T&Delta;S. Criterion for spontaneity is &Delta;G &lt; 0.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FF8A65; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Concepts of System, Types of Systems, Surroundings, Work, Heat, Energy, Extensive and Intensive Properties, State Functions
  </h2>

<p>
    Thermodynamics deals with energy transformations, heat transfers, and spontaneous physical/chemical changes in macroscopic matter. It does not depend on microscopic atomic mechanisms, providing rigorous universal laws governing equilibrium and energy conservation.
  </p>

  <h3 style="color: #FF8A65; margin-top: 18px; font-size: 16.5px;">(i) System, Surroundings, and Types of Systems</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF8A65;">1. Open System:</b> Can exchange <b>both matter and energy</b> with surroundings (e.g., hot water in an open beaker).</li>
      <li><b style="color: #FF8A65;">2. Closed System:</b> Can exchange <b>energy but not matter</b> with surroundings (e.g., boiling water in a sealed stainless steel vessel).</li>
      <li><b style="color: #FF8A65;">3. Isolated System:</b> Can exchange <b>neither matter nor energy</b> with surroundings (e.g., liquid in a perfectly insulated thermos flask).</li>
      <li><b style="color: #FF8A65;">Boundary Types:</b> Real vs imaginary, rigid vs flexible, and diathermic (heat-conducting) vs adiabatic (thermally insulated).</li>
    </ul>
  </div>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(ii) State Functions vs Path Functions &amp; Process Mechanics</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">State Functions:</b> Thermodynamic properties whose values depend exclusively on the current equilibrium state of the system, independent of the path taken to reach that state (e.g., <b>Pressure P, Volume V, Temperature T, Internal Energy U, Enthalpy H, Entropy S, Gibbs Free Energy G</b>). Cyclic integral &oint; dX = 0.</li>
    <li><b style="color: #FF8A65;">Path Functions:</b> Properties whose values depend directly on the path or mechanism followed during the transition between states (e.g., <b>Heat q, Work w</b>). Cyclic integral &oint; dq &ne; 0.</li>
    <li><b style="color: #FF8A65;">Thermodynamic Processes:</b>
      <br/>&bull; <i>Isothermal:</i> Constant temperature (&Delta;T = 0, &Delta;U = 0 for ideal gas).
      <br/>&bull; <i>Adiabatic:</i> No heat exchange with surroundings (q = 0).
      <br/>&bull; <i>Isobaric:</i> Constant pressure (&Delta;p = 0, q<sub>p</sub> = &Delta;H).
      <br/>&bull; <i>Isochoric:</i> Constant volume (&Delta;V = 0, w = 0, q<sub>v</sub> = &Delta;U).
      <br/>&bull; <i>Cyclic:</i> System returns to initial state (&Delta;U<sub>cycle</sub> = 0, &Delta;H<sub>cycle</sub> = 0).
    </li>
  </ul>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(iii) Extensive vs Intensive Properties &amp; IUPAC Sign Conventions</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF8A65;">Extensive Properties:</b> Depend on the quantity or mass of matter present in the system (e.g., <b>Mass m, Volume V, Internal Energy U, Enthalpy H, Heat Capacity C, Entropy S, Gibbs Free Energy G</b>). The ratio of two extensive properties is an intensive property (Density &rho; = m/V, Molar volume V<sub>m</sub> = V/n).</li>
      <li><b style="color: #FF8A65;">Intensive Properties:</b> Independent of the quantity of matter present (e.g., <b>Temperature T, Pressure p, Density &rho;, Refractive Index &mu;, Specific Heat c, Molar Heat Capacity, Viscosity &eta;, Surface Tension &gamma;</b>).</li>
      <li><b style="color: #FF8A65;">IUPAC Sign Conventions:</b>
        <br/>&bull; <i>Heat (q):</i> Heat absorbed by system = <b>+q</b>; Heat released by system = <b>-q</b>.
        <br/>&bull; <i>Work (w):</i> Work done ON system (compression) = <b>+w</b>; Work done BY system (expansion) = <b>-w</b>.
      </li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #FF8A65; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. First Law of Thermodynamics - Internal Energy and Enthalpy, Heat Capacity and Specific Heat
  </h2>

  <h3 style="color: #FF8A65; margin-top: 18px; font-size: 16.5px;">(i) First Law of Thermodynamics &amp; Internal Energy (U)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #FF8A65;">Internal Energy (U):</b> The sum total of all microscopic kinetic and potential energies of the constituent particles (translational, rotational, vibrational, electronic, and intermolecular potential energies). Absolute value cannot be measured; only change &Delta;U is experimentally accessible.
      <br/>&bull; <b style="color: #FF8A65;">Mathematical Formulation of First Law:</b>
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        &Delta;U = q + w &nbsp;|&nbsp; where w = -p<sub>ext</sub> &Delta;V (for pressure-volume work)
      </span>
      <br/>&bull; <i>For Reversible Isothermal Ideal Gas Expansion:</i>
      <br/><b>w<sub>rev</sub> = -2.303 nRT log<sub>10</sub>(V<sub>2</sub> / V<sub>1</sub>) = -2.303 nRT log<sub>10</sub>(p<sub>1</sub> / p<sub>2</sub>)</b>.
      <br/>Since &Delta;T = 0 &rArr; &Delta;U = 0 &rArr; <b>q = -w = 2.303 nRT log<sub>10</sub>(V<sub>2</sub> / V<sub>1</sub>)</b>.
      <br/>&bull; <i>For Free Expansion in Vacuum (p<sub>ext</sub> = 0):</i> <b>w = 0, q = 0 &rArr; &Delta;U = 0</b>.
    </p>
  </div>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(ii) Enthalpy (H) &amp; Relationship Between &Delta;H and &Delta;U</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Most chemical reactions occur in open laboratory vessels at constant atmospheric pressure. Heat absorbed at constant pressure equals enthalpy change: <b>q<sub>p</sub> = &Delta;H</b>, whereas heat absorbed at constant volume equals internal energy change: <b>q<sub>v</sub> = &Delta;U</b>.
      <br/>&bull; <b style="color: #FF8A65;">Enthalpy Definition:</b> <b>H = U + pV</b> &rArr; <b>&Delta;H = &Delta;U + p&Delta;V</b> (at constant pressure).
      <br/>&bull; <b style="color: #FF8A65;">Ideal Gas Relationship:</b> Applying ideal gas equation pV = nRT:
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        &Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT
      </span>
      <br/>where <b>&Delta;n<sub>g</sub> = &Sigma; n<sub>gaseous products</sub> - &Sigma; n<sub>gaseous reactants</sub></b>.
      <br/>- If &Delta;n<sub>g</sub> = 0 &rArr; &Delta;H = &Delta;U (e.g., H<sub>2(g)</sub> + I<sub>2(g)</sub> &rarr; 2HI<sub>(g)</sub>).
      <br/>- If &Delta;n<sub>g</sub> &gt; 0 &rArr; &Delta;H &gt; &Delta;U (e.g., PCl<sub>5(g)</sub> &rarr; PCl<sub>3(g)</sub> + Cl<sub>2(g)</sub>).
      <br/>- If &Delta;n<sub>g</sub> &lt; 0 &rArr; &Delta;H &lt; &Delta;U (e.g., N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &rarr; 2NH<sub>3(g)</sub>).
    </p>
  </div>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(iii) Heat Capacity &amp; Relation C<sub>p</sub> - C<sub>v</sub> = R</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #FF8A65;">Heat Capacity (C):</b> Amount of heat required to raise the temperature of a system by 1 Kelvin (or 1&deg;C): <b>q = C &Delta;T</b>.
      <br/>&bull; Molar heat capacity at constant volume: <b>C<sub>v</sub> = (&part;U / &part;T)<sub>v</sub></b>.
      <br/>&bull; Molar heat capacity at constant pressure: <b>C<sub>p</sub> = (&part;H / &part;T)<sub>p</sub></b>.
      <br/>&bull; <b style="color: #FF8A65;">Mayer's Relation Derivation:</b>
      <br/>H = U + pV = U + RT (for 1 mole of ideal gas).
      <br/>Differentiating with respect to temperature T:
      <br/>dH/dT = dU/dT + R &rArr; <b>C<sub>p</sub> = C<sub>v</sub> + R &rArr; C<sub>p</sub> - C<sub>v</sub> = R</b>.
      <br/>(C<sub>p</sub> &gt; C<sub>v</sub> because at constant pressure, heat supplied not only increases internal energy but also does work of expansion against external atmospheric pressure).
    </p>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #FF8A65; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Measurement of &Delta;U and &Delta;H, Hess's Law of Constant Heat Summation
  </h2>

  <h3 style="color: #FF8A65; margin-top: 18px; font-size: 16.5px;">(i) Calorimetry: Measurement of &Delta;U and &Delta;H</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF8A65;">Measurement of &Delta;U (Bomb Calorimeter):</b> Carried out in a rigid, sealed, heavy stainless-steel vessel immersed in a known mass of water inside an insulated jacket. Because volume remains constant (&Delta;V = 0), no work is done (w = 0). Heat evolved: <b>q<sub>v</sub> = &Delta;U = -C<sub>cal</sub> &times; &Delta;T &times; (M / m)</b>.</li>
      <li><b style="color: #FF8A65;">Measurement of &Delta;H (Coffee-Cup Calorimeter):</b> Carried out in an open polystyrene cup at constant atmospheric pressure. Heat evolved/absorbed: <b>q<sub>p</sub> = &Delta;H = m &times; c<sub>s</sub> &times; &Delta;T</b>.</li>
    </ul>
  </div>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(ii) Hess's Law of Constant Heat Summation</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Germain Henri Hess (1840): <i>"The total enthalpy change accompanying a chemical reaction is identical whether the reaction takes place in one single step or in several consecutive steps."</i>
      <br/>Because Enthalpy is a state function: <b>&Delta;H<sub>total</sub> = &Delta;H<sub>1</sub> + &Delta;H<sub>2</sub> + &Delta;H<sub>3</sub></b>.
      <br/>&bull; <b style="color: #FF8A65;">Applications of Hess's Law:</b>
      <br/>1. Determination of enthalpies of reactions that cannot be measured directly (e.g., C<sub>(graphite)</sub> + <sup>1</sup>/<sub>2</sub> O<sub>2(g)</sub> &rarr; CO<sub>(g)</sub>).
      <br/>2. Determination of lattice enthalpies of ionic solids via Born-Haber cycles.
      <br/>3. Determination of resonance energies and bond enthalpies.
    </p>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #FF8A65; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Enthalpy of Bond Dissociation, Combustion, Formation, Atomization, Sublimation, Phase Transition, Ionization, Solution and Dilution
  </h2>

  <h3 style="color: #FF8A65; margin-top: 18px; font-size: 16.5px;">(i) Enthalpy of Formation (&Delta;<sub>f</sub>H&deg;) &amp; Combustion (&Delta;<sub>c</sub>H&deg;)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">Standard Enthalpy of Formation (&Delta;<sub>f</sub>H&deg;):</b> Enthalpy change when one mole of a compound is formed from its constituent elements in their standard reference states (most stable thermodynamic states at 298.15 K, 1 bar).
      <br/>&bull; By convention, <b>&Delta;<sub>f</sub>H&deg; of any pure element in its standard reference state is assigned ZERO</b> [e.g., C<sub>(graphite)</sub> = 0, O<sub>2(g)</sub> = 0, Cl<sub>2(g)</sub> = 0, Br<sub>2(l)</sub> = 0, I<sub>2(s)</sub> = 0, Na<sub>(s)</sub> = 0; but C<sub>(diamond)</sub> &ne; 0].
      <br/>&bull; Reaction Enthalpy from Formation Enthalpies: <b>&Delta;<sub>r</sub>H&deg; = &Sigma; a &Delta;<sub>f</sub>H&deg;(Products) - &Sigma; b &Delta;<sub>f</sub>H&deg;(Reactants)</b>.
    </li>
    <li><b style="color: #FF8A65;">Standard Enthalpy of Combustion (&Delta;<sub>c</sub>H&deg;):</b> Enthalpy change when one mole of a substance undergoes complete combustion in excess oxygen under standard conditions. Always negative (exothermic) (e.g., CH<sub>4(g)</sub> + 2O<sub>2(g)</sub> &rarr; CO<sub>2(g)</sub> + 2H<sub>2</sub>O<sub>(l)</sub>, &Delta;<sub>c</sub>H&deg; = -890.3 kJ/mol).</li>
  </ul>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(ii) Phase Transition Enthalpies &amp; Atomization (&Delta;<sub>a</sub>H&deg;)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF8A65;">Enthalpy of Fusion (&Delta;<sub>fus</sub>H):</b> Heat required to transform 1 mole of solid into liquid at its melting point (e.g., H<sub>2</sub>O<sub>(s)</sub> &rarr; H<sub>2</sub>O<sub>(l)</sub>, &Delta;<sub>fus</sub>H = +6.01 kJ/mol).</li>
      <li><b style="color: #FF8A65;">Enthalpy of Vaporization (&Delta;<sub>vap</sub>H):</b> Heat required to vaporize 1 mole of liquid at its boiling point (e.g., H<sub>2</sub>O<sub>(l)</sub> &rarr; H<sub>2</sub>O<sub>(g)</sub>, &Delta;<sub>vap</sub>H = +40.79 kJ/mol).</li>
      <li><b style="color: #FF8A65;">Enthalpy of Sublimation (&Delta;<sub>sub</sub>H):</b> Heat required to convert 1 mole of solid directly into gas: <b>&Delta;<sub>sub</sub>H = &Delta;<sub>fus</sub>H + &Delta;<sub>vap</sub>H</b>.</li>
      <li><b style="color: #FF8A65;">Enthalpy of Atomization (&Delta;<sub>a</sub>H&deg;):</b> Enthalpy change on breaking all bonds in 1 mole of a substance to obtain isolated gaseous atoms (e.g., CH<sub>4(g)</sub> &rarr; C<sub>(g)</sub> + 4H<sub>(g)</sub>, &Delta;<sub>a</sub>H&deg; = +1665 kJ/mol).</li>
    </ul>
  </div>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(iii) Bond Enthalpies &amp; Enthalpy of Solution</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">Reaction Enthalpy from Bond Enthalpies:</b>
      <br/><b>&Delta;<sub>r</sub>H = &Sigma; Bond Enthalpies(Reactants Broken) - &Sigma; Bond Enthalpies(Products Formed)</b>.
    </li>
    <li><b style="color: #FF8A65;">Enthalpy of Solution (&Delta;<sub>sol</sub>H):</b> Enthalpy change when one mole of a solute dissolves in a specified volume of solvent: <b>&Delta;<sub>sol</sub>H = &Delta;<sub>lattice</sub>H + &Delta;<sub>hyd</sub>H</b>.
      <br/>- If |&Delta;<sub>hyd</sub>H| &gt; &Delta;<sub>lattice</sub>H &rArr; &Delta;<sub>sol</sub>H is negative (dissolution is exothermic).
      <br/>- If &Delta;<sub>lattice</sub>H &gt; |&Delta;<sub>hyd</sub>H| &rArr; &Delta;<sub>sol</sub>H is positive (dissolution is endothermic).
    </li>
  </ul>

  <!-- SECTION 5 -->
  <h2 style="color: #FF8A65; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Introduction of Entropy as State Function, Second Law of Thermodynamics, Gibbs Energy Change for Spontaneous and Non-Spontaneous Process, Criteria for Equilibrium
  </h2>

  <h3 style="color: #FF8A65; margin-top: 18px; font-size: 16.5px;">(i) Spontaneity &amp; Concept of Entropy (S)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      A <b>spontaneous process</b> occurs naturally under a given set of conditions without requiring continuous external driving force. Spontaneity is driven by two natural tendencies:
      <br/>1. Tendency toward minimum potential energy (enthalpy minimization &Delta;H &lt; 0).
      <br/>2. Tendency toward maximum randomness / chaos (entropy maximization &Delta;S &gt; 0).
      <br/>&bull; <b style="color: #FF8A65;">Entropy Definition:</b> <b>&Delta;S = q<sub>rev</sub> / T</b> (Units: J K<sup>-1</sup> mol<sup>-1</sup>).
      <br/>Phase change entropy: <b>&Delta;S<sub>fus</sub> = &Delta;H<sub>fus</sub> / T<sub>mp</sub></b>, <b>&Delta;S<sub>vap</sub> = &Delta;H<sub>vap</sub> / T<sub>bp</sub></b>.
    </p>
  </div>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(ii) Second &amp; Third Laws of Thermodynamics</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">Second Law of Thermodynamics:</b> <i>"The entropy of the universe (system + surroundings) increases continuously in every spontaneous (irreversible) process."</i>
      <br/><b>&Delta;S<sub>total</sub> = &Delta;S<sub>sys</sub> + &Delta;S<sub>surr</sub> &gt; 0</b> (Spontaneous).
      <br/><b>&Delta;S<sub>total</sub> = 0</b> (Equilibrium / Reversible).
      <br/><b>&Delta;S<sub>total</sub> &lt; 0</b> (Non-spontaneous / Impossible).
    </li>
    <li><b style="color: #FF8A65;">Third Law of Thermodynamics (Nernst Heat Theorem):</b> <i>"The entropy of any pure, perfectly crystalline substance approaches zero as absolute zero temperature (0 Kelvin) is approached."</i>
      <br/>Enables the calculation of <b>Absolute Standard Entropies (S&deg;)</b> for pure compounds.
    </li>
  </ul>

  <h3 style="color: #FF8A65; margin-top: 22px; font-size: 16.5px;">(iii) Gibbs Free Energy (G) &amp; Spontaneity Criteria</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      J. Willard Gibbs combined the First and Second Laws into a single master state function that evaluates spontaneity using only properties of the system at constant temperature and pressure:
      <br/><b>G = H - TS</b> &rArr; <b style="color: #FFFFFF;">&Delta;G = &Delta;H - T&Delta;S</b> (Gibbs-Helmholtz Equation).
      <br/>&bull; Since &Delta;S<sub>surr</sub> = -q<sub>p</sub>/T = -&Delta;H/T:
      <br/>&Delta;S<sub>total</sub> = &Delta;S<sub>sys</sub> - &Delta;H/T &rArr; -T&Delta;S<sub>total</sub> = &Delta;H - T&Delta;S<sub>sys</sub> = &Delta;G.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin-top: 8px;">
      <li><b style="color: #FF8A65;">Spontaneity Criteria:</b>
        <br/>1. <b style="color: #FF8A65;">&Delta;G &lt; 0:</b> Spontaneous process (Exergonic).
        <br/>2. <b style="color: #FF8A65;">&Delta;G = 0:</b> System is in dynamic thermodynamic equilibrium.
        <br/>3. <b style="color: #FF8A65;">&Delta;G &gt; 0:</b> Non-spontaneous process (Endergonic; spontaneous in reverse direction).
      </li>
      <li><b style="color: #FF8A65;">Relation to Equilibrium Constant:</b>
        <br/><b>&Delta;G&deg; = -2.303 RT log<sub>10</sub> K</b> (where K is equilibrium constant K<sub>c</sub> or K<sub>p</sub>).
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(191, 54, 12, 0.85)); border: 2px solid #FF8A65; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #FF8A65; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 5 Formula Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(255, 138, 101, 0.25); color: #FF8A65; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Law / Relationship</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Mathematical Equation</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Conditions / Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">First Law of Thermodynamics:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;U = q + w</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">w = -p<sub>ext</sub> &Delta;V (IUPAC convention)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">Isothermal Reversible Work:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">w<sub>rev</sub> = -2.303 nRT log<sub>10</sub>(V<sub>2</sub>/V<sub>1</sub>)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Ideal gas, T = constant, &Delta;U = 0</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">Enthalpy - Energy Relation:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;n<sub>g</sub> = gaseous products - gaseous reactants</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">Mayer's Relation:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">C<sub>p</sub> - C<sub>v</sub> = R</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">1 mole ideal gas, R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">Hess's Law:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;H<sub>total</sub> = &Sigma; &Delta;H<sub>steps</sub></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Independent of reaction pathway</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">Reaction Enthalpy:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;<sub>r</sub>H&deg; = &Sigma;&Delta;<sub>f</sub>H&deg;(prod) - &Sigma;&Delta;<sub>f</sub>H&deg;(react)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;<sub>f</sub>H&deg; of pure elements in standard state = 0</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">Entropy Definition:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;S = q<sub>rev</sub> / T</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Reversible path, Units: J K<sup>-1</sup> mol<sup>-1</sup></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">Gibbs-Helmholtz Equation:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;G = &Delta;H - T&Delta;S</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;G &lt; 0 Spontaneous, &Delta;G = 0 Equilibrium</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF8A65;">Standard Free Energy &amp; K:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&Delta;G&deg; = -2.303 RT log<sub>10</sub> K</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Relates thermodynamic potential to equilibrium</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Chem5HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(255, 138, 101, 0.15), rgba(255, 61, 0, 0.15)); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #FF8A65; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Thermodynamic Systems, First &amp; Second Laws, Definitions &amp; SI Units</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define an Isolated System.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A thermodynamic system that can exchange neither energy nor matter with its surroundings.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Give one real-world example of an open system.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Water boiling in an open beaker.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: Define an Intensive Property.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A property that is independent of the mass or quantity of matter present in the system (e.g., density, temperature).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Classify Heat Capacity as extensive or intensive.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Extensive property (Molar heat capacity is intensive).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: State the First Law of Thermodynamics mathematically.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;U = q + w.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the value of &Delta;U for an isothermal expansion of an ideal gas?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;U = 0 (since internal energy of an ideal gas depends solely on temperature).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: What is the work done in free expansion of an ideal gas in vacuum?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      w = 0 (because external pressure p<sub>ext</sub> = 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Define Enthalpy (H).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The sum of internal energy and pressure-volume product of a system: H = U + pV.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Under what condition is &Delta;H equal to &Delta;U?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When &Delta;n<sub>g</sub> = 0 (no net change in moles of gaseous substances) or in reactions involving only condensed phases.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: State the relationship between &Delta;H and &Delta;U for an ideal gas reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Write the relation between C_p and C_v for one mole of an ideal gas.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      C<sub>p</sub> - C<sub>v</sub> = R.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Why is C_p always greater than C_v?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because at constant pressure, heat supplied increases internal energy and also performs work against external atmospheric pressure.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: State Hess's Law of Constant Heat Summation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The total enthalpy change for a chemical reaction is identical whether it occurs in one step or in multiple steps.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What is the standard enthalpy of formation (&Delta;fH°) of pure elements in their reference states?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Zero by international convention.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: What is the standard reference state of Carbon?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Graphite (C<sub>graphite</sub>), for which &Delta;<sub>f</sub>H&deg; = 0 kJ/mol.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Define Standard Enthalpy of Combustion (&Delta;cH°).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Enthalpy change when one mole of a substance undergoes complete oxidation/combustion in excess oxygen under standard conditions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Is enthalpy of combustion always positive or negative?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Always negative (exothermic).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Define Enthalpy of Atomization (&Delta;aH°).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Enthalpy change when all chemical bonds in one mole of a substance are broken to obtain isolated gaseous atoms.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Define Lattice Enthalpy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Energy required to completely separate one mole of a solid ionic compound into isolated gaseous ions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: Define Enthalpy of Sublimation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Heat required to convert one mole of a solid directly into vapor at constant temperature: &Delta;<sub>sub</sub>H = &Delta;<sub>fus</sub>H + &Delta;<sub>vap</sub>H.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Define Entropy (S).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A thermodynamic state function that quantifies the degree of microscopic molecular disorder or randomness in a system.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: What are the SI units of Entropy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      J K<sup>-1</sup> mol<sup>-1</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What is the sign of &Delta;S when water freezes to ice at 0°C?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Negative (&Delta;S &lt; 0), because molecules become more ordered in the crystalline lattice.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: State the Second Law of Thermodynamics in terms of universe entropy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In every spontaneous (irreversible) process, the entropy of the universe increases: &Delta;S<sub>total</sub> &gt; 0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: State the Third Law of Thermodynamics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The entropy of any pure, perfectly crystalline substance is zero at absolute zero temperature (0 K).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Write the Gibbs-Helmholtz equation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G = &Delta;H - T&Delta;S.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: What is the criterion for spontaneity in terms of Gibbs Free Energy (&Delta;G)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G &lt; 0 (negative) at constant temperature and pressure.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is the value of &Delta;G at dynamic chemical equilibrium?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G = 0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Write the mathematical relation between standard free energy change (&Delta;G°) and equilibrium constant (K).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G&deg; = -2.303 RT log<sub>10</sub> K.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Under what conditions will a reaction be spontaneous at all temperatures?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When &Delta;H is negative (exothermic) and &Delta;S is positive (entropy increasing).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Under what conditions is a reaction non-spontaneous at all temperatures?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When &Delta;H is positive (endothermic) and &Delta;S is negative (entropy decreasing).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is an Adiabatic process?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A thermodynamic process in which no heat enters or leaves the system (q = 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: What is an Isochoric process?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A process occurring at constant volume (&Delta;V = 0), where no PV work is done (w = 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Which thermodynamic quantity is measured in a Bomb Calorimeter?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Internal energy change (&Delta;U = q<sub>v</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Which thermodynamic quantity is measured in an open Coffee-Cup Calorimeter?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Enthalpy change (&Delta;H = q<sub>p</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: For the reaction N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &rarr; 2NH<sub>3(g)</sub>, calculate &Delta;n_g.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;n<sub>g</sub> = 2 - (1 + 3) = -2.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: If a gas absorbs 200 J of heat and does 50 J of work, calculate &Delta;U.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;U = q + w = (+200) + (-50) = +150 J.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is the sign of &Delta;S for the dissolution of Sugar in Water?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Positive (&Delta;S &gt; 0), because crystal lattice dissolves into randomly distributed solvated molecules.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: State Trouton's Rule.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The entropy of vaporization of most unassociated liquids at their normal boiling points is approximately 88 J K<sup>-1</sup> mol<sup>-1</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: What is the physical significance of Gibbs Free Energy change (&Delta;G)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -&Delta;G represents the maximum useful non-expansion work obtainable from a system at constant T and p.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(255, 138, 101, 0.15), rgba(255, 61, 0, 0.15)); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF8A65; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Isothermal Work Calculations, Hess's Law Proofs, &Delta;H-&Delta;U Relational Numericals &amp; Spontaneity</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Differentiate between State Functions and Path Functions with two examples of each.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">State Functions:</b> Properties whose values depend solely on the initial and final states of the system, independent of the path taken (e.g., Internal energy U, Enthalpy H, Entropy S). &oint;dX = 0.<br/><b style="color: #FF8A65;">Path Functions:</b> Properties whose values depend on the pathway or mechanism of the process (e.g., Heat q, Work w). &oint;dq &ne; 0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Differentiate between Extensive and Intensive Properties with two examples of each.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">Extensive Properties:</b> Depend on the quantity or mass of matter in the system (e.g., Volume V, Mass m, Enthalpy H, Internal energy U).<br/><b style="color: #FF8A65;">Intensive Properties:</b> Independent of the size or quantity of matter (e.g., Temperature T, Pressure p, Density &rho;, Specific heat capacity c). The ratio of two extensive properties is an intensive property.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Derive the formula for work done during reversible isothermal expansion of an ideal gas.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For a reversible process, external pressure p<sub>ext</sub> = p - dp &approx; p = nRT / V.<br/>Work dw = -p<sub>ext</sub> dV = -(nRT / V) dV.<br/>Integrating from V<sub>1</sub> to V<sub>2</sub>:<br/>w<sub>rev</sub> = -&int; (nRT / V) dV = -nRT ln(V<sub>2</sub> / V<sub>1</sub>) = <b>-2.303 nRT log<sub>10</sub>(V<sub>2</sub> / V<sub>1</sub>)</b>.<br/>Using Boyle's law (p<sub>1</sub>V<sub>1</sub> = p<sub>2</sub>V<sub>2</sub>): w<sub>rev</sub> = <b>-2.303 nRT log<sub>10</sub>(p<sub>1</sub> / p<sub>2</sub>)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Calculate the work done when 2 moles of an ideal gas expand isothermally and reversibly from 10 L to 100 L at 300 K. (R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      n = 2 mol, T = 300 K, V<sub>1</sub> = 10 L, V<sub>2</sub> = 100 L.<br/>w = -2.303 nRT log<sub>10</sub>(V<sub>2</sub> / V<sub>1</sub>)<br/>w = -2.303 &times; 2 &times; 8.314 &times; 300 &times; log<sub>10</sub>(100 / 10)<br/>w = -2.303 &times; 2 &times; 8.314 &times; 300 &times; 1 = <b>-11488.3 J = -11.49 kJ</b>.<br/>(The negative sign indicates work is done BY the system).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Derive the relationship &Delta;H = &Delta;U + &Delta;n_gRT for a chemical reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      By definition, Enthalpy H = U + pV.<br/>For initial state: H<sub>1</sub> = U<sub>1</sub> + pV<sub>1</sub>; For final state: H<sub>2</sub> = U<sub>2</sub> + pV<sub>2</sub>.<br/>&Delta;H = H<sub>2</sub> - H<sub>1</sub> = (U<sub>2</sub> - U<sub>1</sub>) + p(V<sub>2</sub> - V<sub>1</sub>) = &Delta;U + p&Delta;V.<br/>For an ideal gas, pV = n<sub>g</sub>RT. At constant T and p: p&Delta;V = &Delta;n<sub>g</sub>RT.<br/>Substituting: <b>&Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: For the reaction: 2CO(g) + O2(g) &rarr; 2CO2(g), &Delta;H = -566 kJ at 298 K. Calculate &Delta;U.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;n<sub>g</sub> = 2 - (2 + 1) = -1.<br/>R = 8.314 &times; 10<sup>-3</sup> kJ K<sup>-1</sup> mol<sup>-1</sup>, T = 298 K.<br/>&Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT &rArr; &Delta;U = &Delta;H - &Delta;n<sub>g</sub>RT.<br/>&Delta;U = -566 - [(-1) &times; (8.314 &times; 10<sup>-3</sup>) &times; 298] = -566 - [-2.478] = <b>-563.52 kJ</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Derive Mayer's relation: C_p - C_v = R for one mole of an ideal gas.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Heat capacity at constant volume: C<sub>v</sub> = (&part;U / &part;T)<sub>v</sub> &rArr; dU = C<sub>v</sub> dT.<br/>Heat capacity at constant pressure: C<sub>p</sub> = (&part;H / &part;T)<sub>p</sub> &rArr; dH = C<sub>p</sub> dT.<br/>By definition: H = U + pV = U + RT (for 1 mole ideal gas).<br/>Differentiating with respect to T: dH/dT = dU/dT + R.<br/>Substituting C<sub>p</sub> and C<sub>v</sub>: C<sub>p</sub> = C<sub>v</sub> + R &rArr; <b>C<sub>p</sub> - C<sub>v</sub> = R</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain how a Bomb Calorimeter works to measure &Delta;U.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A bomb calorimeter consists of a sealed heavy steel vessel (the 'bomb') containing the reactant and pressurized oxygen, submerged in a water bath inside an insulated jacket.<br/>1. Reactant is ignited electrically.<br/>2. Because the steel bomb is completely rigid, volume change &Delta;V = 0, so work w = -p&Delta;V = 0.<br/>3. By First Law, &Delta;U = q<sub>v</sub> = -C<sub>cal</sub> &times; &Delta;T &times; (M/m), where C<sub>cal</sub> is calorimeter heat capacity and &Delta;T is temperature rise.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: State Hess's Law and calculate the enthalpy of formation of Carbon Monoxide (CO) from: (1) C + O2 &rarr; CO2 (&Delta;H = -393.5 kJ), (2) CO + 1/2 O2 &rarr; CO2 (&Delta;H = -283.0 kJ).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Target reaction: C<sub>(s)</sub> + <sup>1</sup>/<sub>2</sub> O<sub>2(g)</sub> &rarr; CO<sub>(g)</sub>.<br/>Subtracting equation (2) from equation (1):<br/>[C + O<sub>2</sub>] - [CO + <sup>1</sup>/<sub>2</sub> O<sub>2</sub>] &rarr; CO<sub>2</sub> - CO<sub>2</sub><br/>C + <sup>1</sup>/<sub>2</sub> O<sub>2</sub> &rarr; CO.<br/>&Delta;<sub>f</sub>H&deg;(CO) = &Delta;H<sub>1</sub> - &Delta;H<sub>2</sub> = -393.5 - (-283.0) = <b>-110.5 kJ mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Define Standard Enthalpy of Formation and explain why &Delta;fH° of Diamond is not zero.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Standard enthalpy of formation is the enthalpy change when 1 mole of a substance is formed from its constituent elements in their most stable reference states at 298.15 K and 1 bar.<br/>For Carbon, <b>Graphite</b> is the thermodynamically most stable allotrope under standard conditions, so &Delta;<sub>f</sub>H&deg;(Graphite) = 0.<br/><b>Diamond</b> is less stable than graphite; C<sub>graphite</sub> &rarr; C<sub>diamond</sub> requires +1.89 kJ/mol, so <b>&Delta;<sub>f</sub>H&deg;(Diamond) = +1.89 kJ mol<sup>-1</sup> &ne; 0</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Calculate the standard enthalpy of combustion of Methane (CH4) if &Delta;fH° of CH4, CO2, and H2O(l) are -74.8, -393.5, and -285.8 kJ/mol respectively.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Reaction: CH<sub>4(g)</sub> + 2O<sub>2(g)</sub> &rarr; CO<sub>2(g)</sub> + 2H<sub>2</sub>O<sub>(l)</sub>.<br/>&Delta;<sub>c</sub>H&deg; = [&Delta;<sub>f</sub>H&deg;(CO<sub>2</sub>) + 2&Delta;<sub>f</sub>H&deg;(H<sub>2</sub>O)] - [&Delta;<sub>f</sub>H&deg;(CH<sub>4</sub>) + 2&Delta;<sub>f</sub>H&deg;(O<sub>2</sub>)]<br/>&Delta;<sub>c</sub>H&deg; = [-393.5 + 2(-285.8)] - [-74.8 + 0]<br/>&Delta;<sub>c</sub>H&deg; = [-393.5 - 571.6] + 74.8 = -965.1 + 74.8 = <b>-890.3 kJ mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Define Bond Enthalpy and calculate &Delta;rH for: H2(g) + Cl2(g) &rarr; 2HCl(g). (Given: B.E. of H-H = 436, Cl-Cl = 242, H-Cl = 431 kJ/mol).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bond enthalpy is the energy required to break one mole of bonds in gaseous state.<br/>&Delta;<sub>r</sub>H = &Sigma; B.E.(Bonds Broken) - &Sigma; B.E.(Bonds Formed)<br/>&Delta;<sub>r</sub>H = [B.E.(H-H) + B.E.(Cl-Cl)] - [2 &times; B.E.(H-Cl)]<br/>&Delta;<sub>r</sub>H = [436 + 242] - [2 &times; 431] = 678 - 862 = <b>-184 kJ mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain the relationship between Enthalpy of Solution, Lattice Enthalpy, and Hydration Enthalpy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dissolution of an ionic solid involves: (1) Breaking the ionic lattice into gaseous ions (&Delta;<sub>lattice</sub>H, endothermic), (2) Hydrating gaseous ions by water dipoles (&Delta;<sub>hyd</sub>H, exothermic).<br/><b>&Delta;<sub>sol</sub>H = &Delta;<sub>lattice</sub>H + &Delta;<sub>hyd</sub>H</b>.<br/>If |&Delta;<sub>hyd</sub>H| &gt; &Delta;<sub>lattice</sub>H, dissolution is exothermic and thermodynamically favored.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Explain the physical concept of Entropy and why &Delta;S = q_rev / T.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Entropy measures molecular disorder and microstate degeneracy (S = k<sub>B</sub> ln W).<br/>Adding heat to a cold system creates vastly more relative disorder than adding the same heat to an already hot, chaotic system. Thus, entropy change is inversely proportional to absolute temperature T: <b>&Delta;S = q<sub>rev</sub> / T</b>. Reversible heat transfer ensures the system remains in quasi-static thermal equilibrium.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Calculate the entropy change for the fusion of 1 mole of ice at 0°C (273 K). (&Delta;fusH = 6.01 kJ/mol).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;S<sub>fus</sub> = &Delta;H<sub>fus</sub> / T<sub>mp</sub>.<br/>&Delta;H<sub>fus</sub> = 6010 J mol<sup>-1</sup>, T = 273 K.<br/>&Delta;S<sub>fus</sub> = 6010 / 273 = <b>+22.01 J K<sup>-1</sup> mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Explain why the entropy of a substance increases during vaporization more than during fusion.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In fusion (solid &rarr; liquid), molecules gain rotational and translational freedom, but remain closely packed with intermolecular forces intact (&Delta;S &approx; 22 J K<sup>-1</sup> mol<sup>-1</sup>). In vaporization (liquid &rarr; gas), intermolecular bonds are completely severed and molecular volume expands ~1000-fold, creating colossal translational disorder (&Delta;S &approx; 88 J K<sup>-1</sup> mol<sup>-1</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: State the Second Law of Thermodynamics and explain why a drop of ink spontaneously disperses in water.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Second Law: In any spontaneous process, the total entropy of the universe increases (&Delta;S<sub>total</sub> &gt; 0).<br/>When an ink drop is placed in water, ink molecules disperse throughout the water volume because the dispersed state has vastly more microscopic spatial arrangements (higher thermodynamic probability W) than the localized droplet, driving entropy upward spontaneous.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain the Third Law of Thermodynamics and its significance in determining absolute entropy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Third Law: The entropy of a perfectly crystalline pure substance is zero at absolute zero (0 K), because particles are locked into a single unique microstate (W = 1 &rArr; S = k<sub>B</sub> ln 1 = 0).<br/><b style="color: #FF8A65;">Significance:</b> Allows determination of absolute standard entropies S&deg; = &int; (C<sub>p</sub>/T) dT from 0 K to T without needing arbitrary reference standards.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Derive the Gibbs-Helmholtz equation &Delta;G = &Delta;H - T&Delta;S from fundamental thermodynamic relations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Total entropy change: &Delta;S<sub>total</sub> = &Delta;S<sub>sys</sub> + &Delta;S<sub>surr</sub>.<br/>At constant temperature and pressure, heat released to surroundings is q<sub>surr</sub> = -q<sub>sys</sub> = -&Delta;H<sub>sys</sub>.<br/>&Delta;S<sub>surr</sub> = -&Delta;H<sub>sys</sub> / T.<br/>&Delta;S<sub>total</sub> = &Delta;S<sub>sys</sub> - (&Delta;H<sub>sys</sub> / T).<br/>Multiplying throughout by -T:<br/>-T&Delta;S<sub>total</sub> = &Delta;H<sub>sys</sub> - T&Delta;S<sub>sys</sub>.<br/>Defining Gibbs free energy &Delta;G = -T&Delta;S<sub>total</sub> yields: <b>&Delta;G = &Delta;H - T&Delta;S</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Discuss the effect of temperature on the spontaneity of a reaction where &Delta;H > 0 and &Delta;S > 0.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In &Delta;G = &Delta;H - T&Delta;S:<br/>1. At low temperatures: The positive &Delta;H term dominates over T&Delta;S, resulting in &Delta;G &gt; 0 (<b>Non-spontaneous</b>).<br/>2. At high temperatures: The T&Delta;S term grows larger than &Delta;H, making &Delta;G &lt; 0 (<b>Spontaneous</b>).<br/>The transition occurs at equilibrium temperature: <b>T<sub>eq</sub> = &Delta;H / &Delta;S</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: For a reaction, &Delta;H = +30.5 kJ mol<sup>-1</sup> and &Delta;S = +66 J K<sup>-1</sup> mol<sup>-1</sup>. At what temperature does the reaction become spontaneous?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      At transition equilibrium: &Delta;G = 0 &rArr; T = &Delta;H / &Delta;S.<br/>&Delta;H = 30500 J mol<sup>-1</sup>, &Delta;S = 66 J K<sup>-1</sup> mol<sup>-1</sup>.<br/>T = 30500 / 66 = <b>462.1 K (189.1&deg;C)</b>.<br/>The reaction becomes spontaneous at all temperatures <b>T &gt; 462.1 K</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: For a reaction, &Delta;G° = -33.0 kJ/mol at 298 K. Calculate the equilibrium constant K. (R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;G&deg; = -2.303 RT log<sub>10</sub> K.<br/>-33000 = -2.303 &times; 8.314 &times; 298 &times; log<sub>10</sub> K<br/>-33000 = -5705.8 &times; log<sub>10</sub> K<br/>log<sub>10</sub> K = 33000 / 5705.8 = 5.783<br/>K = 10<sup>5.783</sup> = <b>6.07 &times; 10<sup>5</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain why an endothermic reaction can be spontaneous.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Spontaneity is determined by &Delta;G = &Delta;H - T&Delta;S, not &Delta;H alone. If an endothermic reaction (&Delta;H &gt; 0) produces a substantial increase in entropy (&Delta;S &gt; 0), at sufficiently high temperatures the negative T&Delta;S term outweighs &Delta;H, rendering &Delta;G negative (e.g., evaporation of water, melting of ice above 0&deg;C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Explain the concept of 'Standard State' in chemical thermodynamics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The standard state of a substance is its pure, most stable physical form at a specified temperature (customarily 298.15 K / 25&deg;C) and standard pressure of <b>1 bar (10<sup>5</sup> Pa)</b>. For solutes in solution, the standard state corresponds to a concentration of <b>1 mol L<sup>-1</sup> (1 M)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Show that for an isolated system, &Delta;U = 0 and &Delta;S &gt; 0 for a spontaneous change.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An isolated system cannot exchange heat or work with surroundings: q = 0 and w = 0. By First Law: &Delta;U = q + w = 0 + 0 = <b>0</b>. Since surroundings experience no change (&Delta;S<sub>surr</sub> = 0), by Second Law: &Delta;S<sub>total</sub> = &Delta;S<sub>sys</sub> &gt; 0. Thus, in an isolated system, spontaneous changes occur with <b>increasing entropy at constant internal energy</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the difference between Reversible and Irreversible Processes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">Reversible Process:</b> Carried out infinitesimally slowly such that driving force is only infinitesimally greater than opposing force; can be reversed at any point; maximum work is obtained. <b style="color: #FF8A65;">Irreversible Process:</b> Occurs rapidly and spontaneously with a finite difference between driving and opposing forces; cannot be reversed without external work; produces less work.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Calculate the change in internal energy when 1 g of liquid water at 100°C is converted to steam at 100°C. (&Delta;vapH = 2257 J/g, V_vap = 1671 cm<sup>3</sup>, V_liq = 1 cm<sup>3</sup>, p = 1 atm = 1.013 &times; 10<sup>5</sup> Pa).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      q = &Delta;<sub>vap</sub>H = 2257 J.<br/>&Delta;V = V<sub>vap</sub> - V<sub>liq</sub> = 1671 - 1 = 1670 cm<sup>3</sup> = 1670 &times; 10<sup>-6</sup> m<sup>3</sup>.<br/>w = -p&Delta;V = -(1.013 &times; 10<sup>5</sup>) &times; (1670 &times; 10<sup>-6</sup>) = -169.2 J.<br/>&Delta;U = q + w = 2257 - 169.2 = <b>+2087.8 J</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain why the enthalpy of neutralization of any strong acid with any strong base is constant (-57.1 kJ/mol).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Strong acids (HCl, HNO<sub>3</sub>) and strong bases (NaOH, KOH) are 100% dissociated in dilute aqueous solution. The net chemical reaction is identical in every case: <b>H<sup>+</sup><sub>(aq)</sub> + OH<sup>-</sup><sub>(aq)</sub> &rarr; H<sub>2</sub>O<sub>(l)</sub></b>. Because the reacting species and spectator ions (Na<sup>+</sup>, Cl<sup>-</sup>) are identical, the enthalpy evolved is universally <b>-57.1 kJ mol<sup>-1</sup> (-13.7 kcal/mol)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Why is the enthalpy of neutralization of a weak acid (e.g., CH3COOH) with a strong base less than -57.1 kJ/mol?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Acetic acid is a weak electrolyte that is only partially dissociated. A portion of the heat evolved during neutralization (~1.9 kJ/mol) is consumed in ionizing the undissociated CH<sub>3</sub>COOH molecules into CH<sub>3</sub>COO<sup>-</sup> and H<sup>+</sup> ions (enthalpy of ionization). Consequently, the net heat released is lower: -57.1 + 1.9 = <b>-55.2 kJ mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain the sign of &Delta;S in the following processes: (a) Liquid water boils to steam, (b) 2NO2(g) &rarr; N2O4(g).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FF8A65;">Liquid to Steam:</b> &Delta;S &gt; 0 (positive), because gas molecules have vastly greater randomness than liquid.<br/>(b) <b style="color: #FF8A65;">2NO<sub>2</sub> &rarr; N<sub>2</sub>O<sub>4</sub>:</b> &Delta;S &lt; 0 (negative), because 2 moles of gas combine to form 1 mole of gas, decreasing disorder.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: What is the significance of the ratio &gamma; = C_p / C_v?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The ratio &gamma; = C<sub>p</sub> / C<sub>v</sub> indicates the atomicity of a gas:<br/>&bull; Monatomic gas (He, Ar): &gamma; = (5/2 R) / (3/2 R) = <b>1.67</b>.<br/>&bull; Diatomic gas (O<sub>2</sub>, N<sub>2</sub>): &gamma; = (7/2 R) / (5/2 R) = <b>1.40</b>.<br/>&bull; Triatomic linear gas (CO<sub>2</sub>): &gamma; = <b>1.33</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain why adiabatic expansion of an ideal gas causes cooling.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In an adiabatic process, heat exchange q = 0. By First Law, &Delta;U = q + w = w. When a gas expands, it does work (w &lt; 0), so &Delta;U must be negative (&Delta;U &lt; 0). Since internal energy of an ideal gas is directly proportional to temperature (U &prop; T), a decrease in internal energy forces the temperature of the gas to fall, producing cooling.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Define Standard Molar Entropy (S°) and write the equation for calculating standard reaction entropy &Delta;rS°.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Standard molar entropy is the absolute entropy of one mole of a pure substance in its standard state at 298.15 K and 1 bar.<br/>Reaction entropy: <b>&Delta;<sub>r</sub>S&deg; = &Sigma; n S&deg;(Products) - &Sigma; m S&deg;(Reactants)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain why the entropy of an egg increases when it is hard-boiled.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      During boiling, heat denatures the albumin globular proteins, uncoiling their tightly ordered, folded polypeptide helical chains into randomized, entangled strands. This structural disordering increases entropy (&Delta;S &gt; 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: State two limitations of the First Law of Thermodynamics that led to the Second Law.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. The First Law states energy is conserved, but cannot predict the direction or spontaneity of a process (e.g., why heat flows spontaneously from hot to cold, never cold to hot).<br/>2. It places no restriction on the complete conversion of heat into work, which is practically impossible.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain the concept of Exergonic and Endergonic reactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">Exergonic Reaction:</b> A process where &Delta;G &lt; 0; releases free energy and is spontaneous under standard conditions. <b style="color: #FF8A65;">Endergonic Reaction:</b> A process where &Delta;G &gt; 0; requires input of free energy and is non-spontaneous.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain how the spontaneity of ATP hydrolysis drives non-spontaneous biochemical reactions in living cells.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ATP hydrolysis (ATP + H<sub>2</sub>O &rarr; ADP + P<sub>i</sub>) is strongly exergonic (&Delta;G&deg; = -30.5 kJ/mol). Cells couple this spontaneous reaction to endergonic anabolic reactions (such as protein synthesis or glucose phosphorylation) so that the net combined &Delta;G is negative, driving cellular metabolism spontaneously.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain why &Delta;G is a more convenient criterion of spontaneity than &Delta;Stotal.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &Delta;S<sub>total</sub> requires measuring entropy changes of both the system and the vast surroundings (&Delta;S<sub>total</sub> = &Delta;S<sub>sys</sub> + &Delta;S<sub>surr</sub>). In contrast, &Delta;G = &Delta;H - T&Delta;S requires measuring only thermodynamic variables of the system itself at constant T and p, making it experimentally practical.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: What is the work done when an ideal gas undergoes isobaric heating from T1 to T2 at pressure p?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      w = -p &Delta;V = -p(V<sub>2</sub> - V<sub>1</sub>). Since pV = nRT: <b>w = -nR(T<sub>2</sub> - T<sub>1</sub>) = -nR &Delta;T</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain why graphite is converted to diamond only at extremely high temperatures and pressures.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      C<sub>(graphite)</sub> &rarr; C<sub>(diamond)</sub> has &Delta;H&deg; = +1.89 kJ/mol and Diamond is denser (&rho; = 3.51 g/cm<sup>3</sup>) than graphite (&rho; = 2.26 g/cm<sup>3</sup>). High pressure shifts equilibrium toward the denser phase (Le Chatelier's principle), while high temperature provides activation energy to break the strong covalent network of graphite.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(255, 138, 101, 0.15), rgba(255, 61, 0, 0.15)); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF8A65; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master Reversible Work Proofs, Mayer's &amp; Adiabatic Equations, Carnot Cycle &amp; Equilibrium Proofs</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: State and derive the First Law of Thermodynamics. Explain its applications to Isothermal, Adiabatic, Isochoric, and Isobaric processes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Statement &amp; Derivation:</b> Energy cannot be created or destroyed: &Delta;U = q + w. For mechanical PV work: dw = -p<sub>ext</sub> dV &rArr; &Delta;U = q - &int; p<sub>ext</sub> dV.<br/><br/><b style="color: #FF8A65;">2. Applications:</b><br/>&bull; <i>Isothermal (T = const):</i> &Delta;T = 0 &rArr; &Delta;U = 0 &rArr; <b>q = -w</b>.<br/>&bull; <i>Adiabatic (q = 0):</i> <b>&Delta;U = w<sub>ad</sub></b> (Expansion cools the system; compression heats it).<br/>&bull; <i>Isochoric (V = const):</i> &Delta;V = 0 &rArr; w = 0 &rArr; <b>&Delta;U = q<sub>v</sub></b>.<br/>&bull; <i>Isobaric (p = const):</i> <b>&Delta;H = q<sub>p</sub> = &Delta;U + p&Delta;V</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Derive the expression for work done in Reversible Isothermal Expansion vs Irreversible Expansion of an Ideal Gas, and prove W_rev > W_irr.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Reversible Expansion:</b> External pressure matches internal pressure infinitesimally (p<sub>ext</sub> = p - dp). Integrating dw = -p dV:<br/>w<sub>rev</sub> = -&int; (nRT/V) dV = <b>-2.303 nRT log<sub>10</sub>(V<sub>2</sub>/V<sub>1</sub>)</b>.<br/><br/><b style="color: #FF8A65;">2. Irreversible (Single-step) Expansion:</b> Gas expands against constant final external pressure p<sub>2</sub>:<br/>w<sub>irr</sub> = -p<sub>2</sub>(V<sub>2</sub> - V<sub>1</sub>).<br/><br/><b style="color: #FF8A65;">3. Proof:</b> On a P-V indicator diagram, the area under the reversible curve is vastly greater than the rectangular area under the constant p<sub>2</sub> line. Since both works are negative, |w<sub>rev</sub>| &gt; |w<sub>irr</sub>|, proving reversible expansion extracts maximum possible work.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Explain Mayer's Relationship (Cp - Cv = R) and the adiabatic relationship (PV<sup>gamma</sup> = constant) with full mathematical derivations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Mayer's Derivation:</b> H = U + pV = U + RT (1 mol ideal gas). dH/dT = dU/dT + R. By definition C<sub>p</sub> = dH/dT and C<sub>v</sub> = dU/dT &rArr; <b>C<sub>p</sub> - C<sub>v</sub> = R</b>.<br/><br/><b>2. Adiabatic Relation (PV<sup>&gamma;</sup> = C):</b> In adiabatic process, dq = 0 &rArr; dU = dw = -p dV. Since dU = C<sub>v</sub> dT &rArr; C<sub>v</sub> dT = -p dV = -(RT/V) dV &rArr; (C<sub>v</sub>/R) (dT/T) = -dV/V.<br/>Using R = C<sub>p</sub> - C<sub>v</sub> &rArr; dT/T = -( &gamma; - 1) dV/V. Integrating: ln T + (&gamma; - 1) ln V = const &rArr; T V<sup>&gamma;-1</sup> = const.<br/>Substituting T = pV/R gives: <b>p V<sup>&gamma;</sup> = constant</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss Calorimetry in depth: Bomb Calorimeter construction, working, heat capacity calibration, and conversion of &Delta;U to &Delta;H.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Construction:</b> Heavy stainless-steel bomb with platinum crucible, oxygen inlet, and electric ignition wire, submerged in a stirred water bath inside an adiabatic vacuum jacket.<br/><br/><b style="color: #FF8A65;">2. Measurement:</b> &Delta;V = 0 &rArr; w = 0. Heat released q<sub>v</sub> = &Delta;U = -(m<sub>w</sub> c<sub>w</sub> + C<sub>bomb</sub>) &Delta;T = -C<sub>cal</sub> &Delta;T.<br/><br/><b style="color: #FF8A65;">3. Heat Capacity Calibration:</b> Calibrated using benzoic acid (&Delta;<sub>c</sub>H&deg; = -3227 kJ/mol): C<sub>cal</sub> = q<sub>known</sub> / &Delta;T.<br/><br/><b style="color: #FF8A65;">4. Conversion to &Delta;H:</b> Using the reaction stoichiometry: <b>&Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: State Hess's Law of Constant Heat Summation. Explain its thermodynamic basis and three major practical applications with numerical examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Principle:</b> Enthalpy is a state function; cyclic integral &oint;dH = 0. Enthalpy change depends only on initial reactants and final products, not the path.<br/><br/><b style="color: #FF8A65;">2. Applications:</b><br/>&bull; <i>Enthalpy of Inaccessible Reactions:</i> C<sub>graphite</sub> + <sup>1</sup>/<sub>2</sub> O<sub>2</sub> &rarr; CO cannot be measured directly because CO<sub>2</sub> always forms; calculated via Hess's law (-110.5 kJ/mol).<br/>&bull; <i>Born-Haber Cycle:</i> Calculates lattice enthalpy of ionic crystals: &Delta;<sub>lattice</sub>H = &Delta;<sub>sub</sub>H + &Delta;<sub>i</sub>H + <sup>1</sup>/<sub>2</sub>&Delta;<sub>diss</sub>H + &Delta;<sub>eg</sub>H - &Delta;<sub>f</sub>H&deg;.<br/>&bull; <i>Resonance Energy:</i> Difference between calculated bond enthalpies and experimental enthalpy of combustion (e.g., Benzene resonance energy = 150.5 kJ/mol).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss various Types of Reaction Enthalpies: Formation, Combustion, Atomization, Neutralization, Solution, and Dilution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. Formation (&Delta;<sub>f</sub>H&deg;):</b> Form 1 mol compound from pure reference elements. Reference states = 0.<br/><b>2. Combustion (&Delta;<sub>c</sub>H&deg;):</b> Complete oxidation of 1 mol substance in O<sub>2</sub>; always exothermic.<br/><b>3. Atomization (&Delta;<sub>a</sub>H&deg;):</b> Complete dissociation into gaseous atoms (e.g., CH<sub>4</sub> &rarr; C + 4H, &Delta;H = +1665 kJ).<br/><b style="color: #FF8A65;">4. Neutralization:</b> H<sup>+</sup><sub>(aq)</sub> + OH<sup>-</sup><sub>(aq)</sub> &rarr; H<sub>2</sub>O<sub>(l)</sub> (-57.1 kJ/mol for strong acid/base).<br/><b>5. Solution (&Delta;<sub>sol</sub>H):</b> &Delta;<sub>sol</sub>H = &Delta;<sub>lattice</sub>H + &Delta;<sub>hyd</sub>H.<br/><b style="color: #FF8A65;">6. Dilution:</b> Heat change when a solution is diluted from one concentration to another.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain the Second Law of Thermodynamics, Clausius and Kelvin-Planck Statements, and the Statistical/Entropy Definition of Spontaneity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Kelvin-Planck Statement:</b> Impossible to construct a heat engine operating in a cycle that absorbs heat from a reservoir and converts it 100% into work without rejecting heat.<br/><b style="color: #FF8A65;">2. Clausius Statement:</b> Impossible to construct a device operating in a cycle that transfers heat from a colder body to a hotter body without external work.<br/><b style="color: #FF8A65;">3. Entropy Formulation:</b> Total entropy of the universe increases in any spontaneous process: <b>&Delta;S<sub>univ</sub> = &Delta;S<sub>sys</sub> + &Delta;S<sub>surr</sub> &gt; 0</b>.<br/><b style="color: #FF8A65;">4. Statistical Interpretation:</b> Ludwig Boltzmann: S = k<sub>B</sub> ln W. Nature evolves toward states of maximum statistical probability and microstate degeneracy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Derive the Gibbs Free Energy Equation (&Delta;G = &Delta;H - T&Delta;S) and demonstrate how it unifies the driving forces of chemical reactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Derivation:</b> Total entropy &Delta;S<sub>total</sub> = &Delta;S<sub>sys</sub> + &Delta;S<sub>surr</sub>. At constant T and p, q<sub>surr</sub> = -&Delta;H<sub>sys</sub> &rArr; &Delta;S<sub>surr</sub> = -&Delta;H<sub>sys</sub> / T.<br/>&Delta;S<sub>total</sub> = &Delta;S<sub>sys</sub> - &Delta;H<sub>sys</sub> / T &rArr; -T&Delta;S<sub>total</sub> = &Delta;H<sub>sys</sub> - T&Delta;S<sub>sys</sub>.<br/>Defining &Delta;G = -T&Delta;S<sub>total</sub> gives <b>&Delta;G = &Delta;H - T&Delta;S</b>.<br/><br/><b style="color: #FF8A65;">2. Unification of Driving Forces:</b> Combines the enthalpy factor (&Delta;H, energy minimization) and entropy factor (-T&Delta;S, disorder maximization). Spontaneity occurs when &Delta;G &lt; 0, ensuring &Delta;S<sub>total</sub> &gt; 0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Analyze the Spontaneity of Chemical Reactions across all Four Combinations of &Delta;H and &Delta;S with complete thermodynamic temperature evaluation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Case 1 (&Delta;H &lt; 0, &Delta;S &gt; 0):</b> Both enthalpy and entropy favor reaction. &Delta;G is <b>always negative at all temperatures</b>. Reaction is universally spontaneous.<br/><b style="color: #FF8A65;">2. Case 2 (&Delta;H &gt; 0, &Delta;S &lt; 0):</b> Both factors oppose reaction. &Delta;G is <b>always positive at all temperatures</b>. Reaction is non-spontaneous at all temperatures.<br/><b style="color: #FF8A65;">3. Case 3 (&Delta;H &gt; 0, &Delta;S &gt; 0):</b> Enthalpy opposes, entropy favors. &Delta;G &lt; 0 only when T&Delta;S &gt; &Delta;H &rArr; <b>Spontaneous at HIGH temperatures</b> (T &gt; &Delta;H/&Delta;S).<br/><b style="color: #FF8A65;">4. Case 4 (&Delta;H &lt; 0, &Delta;S &lt; 0):</b> Enthalpy favors, entropy opposes. &Delta;G &lt; 0 only when |&Delta;H| &gt; T|&Delta;S| &rArr; <b>Spontaneous at LOW temperatures</b> (T &lt; &Delta;H/&Delta;S).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Derive the relationship between Standard Free Energy Change (&Delta;G°) and Equilibrium Constant (K): &Delta;G° = -RT ln K.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For any chemical reaction: G = G&deg; + RT ln Q, where Q is reaction quotient.<br/>&Delta;G = &Delta;G&deg; + RT ln Q.<br/>At dynamic chemical equilibrium, the driving force ceases: <b>&Delta;G = 0</b>, and Q becomes the equilibrium constant <b>K</b>.<br/>0 = &Delta;G&deg; + RT ln K &rArr; <b>&Delta;G&deg; = -RT ln K = -2.303 RT log<sub>10</sub> K</b>.<br/>&bull; If K &gt; 1 &rArr; &Delta;G&deg; &lt; 0 (Products favored at equilibrium).<br/>&bull; If K &lt; 1 &rArr; &Delta;G&deg; &gt; 0 (Reactants favored).<br/>&bull; If K = 1 &rArr; &Delta;G&deg; = 0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain the Born-Haber Cycle for the formation of 1 mole of solid NaCl crystal and calculate its Lattice Enthalpy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Reaction Steps:</b><br/>Na<sub>(s)</sub> &rarr; Na<sub>(g)</sub> (&Delta;<sub>sub</sub>H = +108.4 kJ)<br/>Na<sub>(g)</sub> &rarr; Na<sup>+</sup><sub>(g)</sub> + e<sup>-</sup> (&Delta;<sub>i</sub>H = +495.8 kJ)<br/><sup>1</sup>/<sub>2</sub> Cl<sub>2(g)</sub> &rarr; Cl<sub>(g)</sub> (<sup>1</sup>/<sub>2</sub> &Delta;<sub>diss</sub>H = +121 kJ)<br/>Cl<sub>(g)</sub> + e<sup>-</sup> &rarr; Cl<sup>-</sup><sub>(g)</sub> (&Delta;<sub>eg</sub>H = -348.6 kJ)<br/>Na<sup>+</sup><sub>(g)</sub> + Cl<sup>-</sup><sub>(g)</sub> &rarr; NaCl<sub>(s)</sub> (-&Delta;<sub>lattice</sub>H)<br/><br/><b style="color: #FF8A65;">2. Hess's Law Equation:</b><br/>&Delta;<sub>f</sub>H&deg;(NaCl) = &Delta;<sub>sub</sub>H + &Delta;<sub>i</sub>H + <sup>1</sup>/<sub>2</sub> &Delta;<sub>diss</sub>H + &Delta;<sub>eg</sub>H - &Delta;<sub>lattice</sub>H.<br/>-411.2 = 108.4 + 495.8 + 121 - 348.6 - &Delta;<sub>lattice</sub>H<br/>-411.2 = 376.6 - &Delta;<sub>lattice</sub>H &rArr; <b>&Delta;<sub>lattice</sub>H = 376.6 + 411.2 = +787.8 kJ mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Explain the Third Law of Thermodynamics, Nernst Heat Theorem, and the calculation of Absolute Entropies of substances.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Nernst Heat Theorem:</b> As temperature approaches 0 K, &Delta;G and &Delta;H approach each other asymptotically: lim<sub>T&rarr;0</sub> (d&Delta;G/dT) = -lim<sub>T&rarr;0</sub> &Delta;S = 0.<br/><br/><b style="color: #FF8A65;">2. Third Law Formulation:</b> The entropy of every pure, perfectly crystalline substance is zero at absolute zero (0 K). Any residual entropy (e.g., in CO, N<sub>2</sub>O, ice) arises from frozen molecular orientation defects.<br/><br/><b style="color: #FF8A65;">3. Determination of Absolute Entropy:</b> Since S(0) = 0:<br/><b>S(T) = &int;<sub>0</sub><sup>T</sup> (C<sub>p</sub>/T) dT + &Delta;H<sub>fus</sub>/T<sub>mp</sub> + &int;<sub>T<sub>mp</sub></sub><sup>T<sub>bp</sub></sup> (C<sub>p</sub>/T) dT + &Delta;H<sub>vap</sub>/T<sub>bp</sub> + &int;<sub>T<sub>bp</sub></sub><sup>T</sup> (C<sub>p</sub>/T) dT</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Discuss the Carnot Cycle: Four reversible stages, efficiency derivation &eta; = (T1 - T2)/T1, and relationship to the Second Law.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Four Stages of Ideal Carnot Engine:</b><br/>&bull; Stage 1: Reversible isothermal expansion at T<sub>1</sub> (absorbs q<sub>1</sub>, w<sub>1</sub> = -nRT<sub>1</sub> ln(V<sub>2</sub>/V<sub>1</sub>)).<br/>&bull; Stage 2: Reversible adiabatic expansion from T<sub>1</sub> to T<sub>2</sub> (w<sub>2</sub> = C<sub>v</sub>(T<sub>2</sub> - T<sub>1</sub>)).<br/>&bull; Stage 3: Reversible isothermal compression at T<sub>2</sub> (rejects q<sub>2</sub>, w<sub>3</sub> = -nRT<sub>2</sub> ln(V<sub>4</sub>/V<sub>3</sub>)).<br/>&bull; Stage 4: Reversible adiabatic compression from T<sub>2</sub> back to T<sub>1</sub> (w<sub>4</sub> = C<sub>v</sub>(T<sub>1</sub> - T<sub>2</sub>)).<br/><br/><b style="color: #FF8A65;">2. Efficiency (&eta;):</b> Total work w<sub>net</sub> = q<sub>1</sub> + q<sub>2</sub>.<br/>&eta; = -w<sub>net</sub> / q<sub>1</sub> = (q<sub>1</sub> + q<sub>2</sub>) / q<sub>1</sub> = <b>(T<sub>1</sub> - T<sub>2</sub>) / T<sub>1</sub> = 1 - T<sub>2</sub>/T<sub>1</sub></b>.<br/>Since T<sub>2</sub> &gt; 0 K, efficiency is strictly &lt; 100%, demonstrating that complete conversion of heat to work is impossible.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Calculate the standard Gibbs free energy change (&Delta;rG°) and predict spontaneity at 298 K for: 2NO(g) + O2(g) &rarr; 2NO2(g). Given: &Delta;fH°(NO)=90.25, &Delta;fH°(NO2)=33.18 kJ/mol; S°(NO)=210.76, S°(O2)=205.14, S°(NO2)=240.06 J K<sup>-1</sup> mol<sup>-1</sup>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. Calculate &Delta;<sub>r</sub>H&deg;:</b><br/>&Delta;<sub>r</sub>H&deg; = [2 &times; &Delta;<sub>f</sub>H&deg;(NO<sub>2</sub>)] - [2 &times; &Delta;<sub>f</sub>H&deg;(NO) + &Delta;<sub>f</sub>H&deg;(O<sub>2</sub>)]<br/>&Delta;<sub>r</sub>H&deg; = [2(33.18)] - [2(90.25) + 0] = 66.36 - 180.50 = <b>-114.14 kJ = -114140 J</b>.<br/><br/><b>2. Calculate &Delta;<sub>r</sub>S&deg;:</b><br/>&Delta;<sub>r</sub>S&deg; = [2 &times; S&deg;(NO<sub>2</sub>)] - [2 &times; S&deg;(NO) + S&deg;(O<sub>2</sub>)]<br/>&Delta;<sub>r</sub>S&deg; = [2(240.06)] - [2(210.76) + 205.14] = 480.12 - 626.66 = <b>-146.54 J K<sup>-1</sup></b>.<br/><br/><b>3. Calculate &Delta;<sub>r</sub>G&deg;:</b><br/>&Delta;<sub>r</sub>G&deg; = &Delta;<sub>r</sub>H&deg; - T&Delta;<sub>r</sub>S&deg; = -114140 - [298 &times; (-146.54)] = -114140 + 43668.9 = <b>-70.47 kJ mol<sup>-1</sup></b>.<br/>Since &Delta;<sub>r</sub>G&deg; &lt; 0, the reaction is <b>spontaneous</b> at 298 K.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain the concept of Residual Entropy and discuss why CO and H2O(ice) have non-zero entropy at 0 K.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Residual entropy is the non-zero entropy possessed by certain substances at 0 K due to molecular disorder, random dipole alignments, or structural degeneracy frozen into the lattice during cooling.<br/>1. <b style="color: #FF8A65;">Carbon Monoxide (CO):</b> Because C and O have similar sizes and small dipole moments, molecules freeze into the crystal lattice with random orientations (CO or OC): S<sub>residual</sub> = R ln 2 &approx; <b>5.76 J K<sup>-1</sup> mol<sup>-1</sup></b>.<br/>2. <b style="color: #FF8A65;">Ice:</b> In ice, each oxygen is tetrahedrally surrounded by four oxygens with two covalent O-H bonds and two hydrogen bonds. The random positions of protons yield S<sub>residual</sub> = R ln(3/2) &approx; <b>3.37 J K<sup>-1</sup> mol<sup>-1</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Explain the variation of Gibbs Free Energy with Temperature and Pressure: Derive the fundamental equations (dG = V dp - S dT) and Maxwell's Relations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. Fundamental Equation:</b> G = H - TS = U + pV - TS.<br/>Differentiating: dG = dU + p dp + V dp - T dS - S dT.<br/>From First and Second Laws: dU = T dS - p dV.<br/>Substituting: dG = (T dS - p dV) + p dV + V dp - T dS - S dT &rArr; <b>dG = V dp - S dT</b>.<br/><br/><b style="color: #FF8A65;">2. Partial Derivatives:</b><br/>(&part;G / &part;p)<sub>T</sub> = V &nbsp;|&nbsp; (&part;G / &part;T)<sub>p</sub> = -S.<br/><br/><b style="color: #FF8A65;">3. Maxwell's Thermodynamic Relation:</b> Cross-differentiating second partials:<br/><b>(&part;V / &part;T)<sub>p</sub> = -(&part;S / &part;p)<sub>T</sub></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Discuss the Thermodynamic Criteria of Equilibrium in terms of U, H, A, and G under different experimental constraints.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Isolated System: (dS)<sub>U,V</sub> &ge; 0 (At equilibrium, <b>dS = 0 and d<sup>2</sup>S &lt; 0</b>; entropy is maximum).<br/>2. Constant S and V: <b>(dU)<sub>S,V</sub> &le; 0</b> (Internal energy is minimum).<br/>3. Constant S and p: <b>(dH)<sub>S,p</sub> &le; 0</b> (Enthalpy is minimum).<br/>4. Constant T and V (Helmholtz energy A = U - TS): <b>(dA)<sub>T,V</sub> &le; 0</b> (Helmholtz energy is minimum).<br/>5. Constant T and p (Gibbs energy G = H - TS): <b>(dG)<sub>T,p</sub> &le; 0</b> (Gibbs free energy is minimum). Under standard laboratory conditions, <b>(dG)<sub>T,p</sub> = 0</b> is the universal criterion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain the principle and derivation of Kirchhoff's Equation relating reaction enthalpy to temperature.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kirchhoff's equation predicts the change in enthalpy of a reaction with temperature.<br/>By definition, dH/dT = C<sub>p</sub>.<br/>For a reaction: &Delta;<sub>r</sub>H = &Sigma; H(Products) - &Sigma; H(Reactants).<br/>Differentiating with respect to T: d(&Delta;<sub>r</sub>H) / dT = &Sigma; C<sub>p</sub>(Products) - &Sigma; C<sub>p</sub>(Reactants) = <b>&Delta;C<sub>p</sub></b>.<br/>Integrating between temperatures T<sub>1</sub> and T<sub>2</sub>:<br/>&int;<sub>&Delta;H<sub>1</sub></sub><sup>&Delta;H<sub>2</sub></sup> d(&Delta;<sub>r</sub>H) = &int;<sub>T<sub>1</sub></sub><sup>&Delta;H<sub>2</sub></sup> &Delta;C<sub>p</sub> dT<br/><b>&Delta;H<sub>2</sub> - &Delta;H<sub>1</sub> = &Delta;C<sub>p</sub> (T<sub>2</sub> - T<sub>1</sub>)</b> (Kirchhoff's Law for Enthalpy).<br/>Similarly for internal energy: <b>&Delta;U<sub>2</sub> - &Delta;U<sub>1</sub> = &Delta;C<sub>v</sub> (T<sub>2</sub> - T<sub>1</sub>)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the physical meaning of Clapeyron and Clausius-Clapeyron Equations for liquid-vapor phase equilibrium.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      At liquid-vapor equilibrium: &Delta;G = 0 &rArr; dG<sub>liq</sub> = dG<sub>vap</sub>.<br/>V<sub>liq</sub> dp - S<sub>liq</sub> dT = V<sub>vap</sub> dp - S<sub>vap</sub> dT.<br/>(V<sub>vap</sub> - V<sub>liq</sub>) dp = (S<sub>vap</sub> - S<sub>liq</sub>) dT.<br/><b>dp/dT = &Delta;S<sub>vap</sub> / &Delta;V<sub>vap</sub> = &Delta;H<sub>vap</sub> / [T (V<sub>vap</sub> - V<sub>liq</sub>)]</b> (Clapeyron Equation).<br/>Assuming V<sub>vap</sub> &gt;&gt; V<sub>liq</sub> and ideal gas behavior (V<sub>vap</sub> = RT/p):<br/>d(ln p) / dT = &Delta;H<sub>vap</sub> / RT<sup>2</sup>.<br/>Integrating gives the <b>Clausius-Clapeyron Equation</b>:<br/><b>log<sub>10</sub>(p<sub>2</sub> / p<sub>1</sub>) = [&Delta;H<sub>vap</sub> / 2.303 R] &times; [(T<sub>2</sub> - T<sub>1</sub>) / (T<sub>1</sub> T<sub>2</sub>)]</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF8A65; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an exhaustive Master Synthesis Matrix correlating First, Second, and Third Laws of Thermodynamics, Work Functions, and Equilibrium Criteria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF8A65;">1. First Law (&Delta;U = q + w):</b> Principle of energy conservation; internal energy U is a state function; w = -p&Delta;V; Mayer's relation C<sub>p</sub> - C<sub>v</sub> = R; &Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT.<br/><br/><b>2. Second Law (&Delta;S<sub>total</sub> &gt; 0):</b> Dictates process direction and spontaneity; entropy &Delta;S = q<sub>rev</sub>/T; Carnot efficiency &eta; = (T<sub>1</sub> - T<sub>2</sub>)/T<sub>1</sub>.<br/><br/><b>3. Third Law (S<sub>0 K</sub> = 0):</b> Perfectly crystalline substances have zero entropy at 0 K; permits calculation of absolute molar entropies S&deg;.<br/><br/><b style="color: #FF8A65;">4. Free Energy (&Delta;G = &Delta;H - T&Delta;S):</b> Unified spontaneity function at constant T and p (&Delta;G &lt; 0 spontaneous, &Delta;G = 0 equilibrium); relates to maximum non-PV work (-w<sub>useful</sub> = -&Delta;G) and equilibrium constant (&Delta;G&deg; = -2.303 RT log<sub>10</sub> K).<br/><br/><b style="color: #FF8A65;">5. Thermochemical Laws:</b> Hess's law enables additive state determination of formation, combustion, lattice, and bond enthalpies.
    </div>
  </div>

</div>
`;

export const c11Chem5Mcqs = [
  {
    "id": "c11-chem-5-mcq-1",
    "question": "Which of the following is a state function?",
    "options": [
      "A):   Work",
      "B):   Heat",
      "C):   Internal Energy",
      "D):   Heat capacity"
    ],
    "correctAnswer": "c",
    "explanation": "Internal energy (U) depends only on the current thermodynamic state of the system, not on the path taken, making it a state function."
  },
  {
    "id": "c11-chem-5-mcq-2",
    "question": "For an isothermal expansion of an ideal gas into vacuum (free expansion), which of the following is correct?",
    "options": [
      "A):   w = 0, q = 0, &Delta;U = 0",
      "B):   w &gt; 0, q = 0, &Delta;U = w",
      "C):   w &lt; 0, q = -w, &Delta;U = 0",
      "D):   w = 0, q &gt; 0, &Delta;U = q"
    ],
    "correctAnswer": "a",
    "explanation": "In free expansion into vacuum, p<sub>ext</sub> = 0 &rArr; w = 0. Since the process is isothermal, &Delta;T = 0 &rArr; &Delta;U = 0, which means q = &Delta;U - w = 0."
  },
  {
    "id": "c11-chem-5-mcq-3",
    "question": "Which of the following is an intensive property?",
    "options": [
      "A):   Volume",
      "B):   Enthalpy",
      "C):   Density",
      "D):   Heat capacity"
    ],
    "correctAnswer": "c",
    "explanation": "Density is an intensive property because it does not depend on the total quantity of matter in the system."
  },
  {
    "id": "c11-chem-5-mcq-4",
    "question": "For the reaction: N<sub>2(g)</sub> + 3H<sub>2(g)</sub> &rarr; 2NH<sub>3(g)</sub>, the relation between &Delta;H and &Delta;U is:",
    "options": [
      "A):   &Delta;H = &Delta;U",
      "B):   &Delta;H = &Delta;U + RT",
      "C):   &Delta;H = &Delta;U - 2RT",
      "D):   &Delta;H = &Delta;U + 2RT"
    ],
    "correctAnswer": "c",
    "explanation": "&Delta;n<sub>g</sub> = 2 - (1 + 3) = -2. Therefore, &Delta;H = &Delta;U + &Delta;n<sub>g</sub>RT = &Delta;U - 2RT."
  },
  {
    "id": "c11-chem-5-mcq-5",
    "question": "According to Mayer's relation, for one mole of an ideal gas:",
    "options": [
      "A):   C<sub>p</sub> + C<sub>v</sub> = R",
      "B):   C<sub>p</sub> - C<sub>v</sub> = R",
      "C):   C<sub>v</sub> - C<sub>p</sub> = R",
      "D):   C<sub>p</sub> / C<sub>v</sub> = R"
    ],
    "correctAnswer": "b",
    "explanation": "Mayer's equation states that C<sub>p</sub> - C<sub>v</sub> = R for one mole of an ideal gas."
  },
  {
    "id": "c11-chem-5-mcq-6",
    "question": "A Bomb Calorimeter measures heat change at:",
    "options": [
      "A):   Constant pressure (&Delta;H)",
      "B):   Constant volume (&Delta;U)",
      "C):   Constant temperature",
      "D):   Zero pressure"
    ],
    "correctAnswer": "b",
    "explanation": "A bomb calorimeter has a rigid, sealed volume (&Delta;V = 0), so it measures internal energy change q<sub>v</sub> = &Delta;U."
  },
  {
    "id": "c11-chem-5-mcq-7",
    "question": "The standard enthalpy of formation (&Delta;<sub>f</sub>H°) is zero by convention for which of the following?",
    "options": [
      "A):   C (diamond)",
      "B):   C (graphite)",
      "C):   H<sub>2</sub>O (l)",
      "D):   CO<sub>2</sub> (g)"
    ],
    "correctAnswer": "b",
    "explanation": "Graphite is the thermodynamically most stable standard reference state of Carbon at 298.15 K and 1 bar, so &Delta;<sub>f</sub>H&deg; is zero."
  },
  {
    "id": "c11-chem-5-mcq-8",
    "question": "Hess's Law is a direct consequence of:",
    "options": [
      "A):   Conservation of mass",
      "B):   First Law of Thermodynamics (Conservation of Energy)",
      "C):   Second Law of Thermodynamics",
      "D):   Le Chatelier's Principle"
    ],
    "correctAnswer": "b",
    "explanation": "Hess's law states that enthalpy change is independent of pathway, which is a direct manifestation of the conservation of energy (First Law)."
  },
  {
    "id": "c11-chem-5-mcq-9",
    "question": "What is the SI unit of Entropy?",
    "options": [
      "A):   J mol<sup>-1</sup>",
      "B):   J K<sup>-1</sup> mol<sup>-1</sup>",
      "C):   kJ mol<sup>-1</sup>",
      "D):   N m<sup>-2</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "Entropy &Delta;S = q<sub>rev</sub> / T, giving units of Joules per Kelvin per mole (J K<sup>-1</sup> mol<sup>-1</sup>)."
  },
  {
    "id": "c11-chem-5-mcq-10",
    "question": "In which of the following processes does entropy decrease (&Delta;S < 0)?",
    "options": [
      "A):   Melting of ice",
      "B):   Vaporization of liquid water",
      "C):   Dissolution of sugar in water",
      "D):   Freezing of liquid water into ice"
    ],
    "correctAnswer": "d",
    "explanation": "When liquid water freezes into crystalline ice, molecular randomness decreases, resulting in &Delta;S &lt; 0."
  },
  {
    "id": "c11-chem-5-mcq-11",
    "question": "For a process to be spontaneous at constant temperature and pressure, the Gibbs Free Energy change must be:",
    "options": [
      "A):   &Delta;G &gt; 0",
      "B):   &Delta;G &lt; 0",
      "C):   &Delta;G = 0",
      "D):   &Delta;G = &Delta;H"
    ],
    "correctAnswer": "b",
    "explanation": "The criterion for spontaneity at constant T and p is &Delta;G &lt; 0 (negative)."
  },
  {
    "id": "c11-chem-5-mcq-12",
    "question": "Under what conditions is a reaction spontaneous at all temperatures?",
    "options": [
      "A):   &Delta;H &gt; 0 and &Delta;S &gt; 0",
      "B):   &Delta;H &lt; 0 and &Delta;S &gt; 0",
      "C):   &Delta;H &lt; 0 and &Delta;S &lt; 0",
      "D):   &Delta;H &gt; 0 and &Delta;S &lt; 0"
    ],
    "correctAnswer": "b",
    "explanation": "When &Delta;H &lt; 0 and &Delta;S &gt; 0, both terms in &Delta;G = &Delta;H - T&Delta;S contribute negatively, making &Delta;G negative at every temperature."
  },
  {
    "id": "c11-chem-5-mcq-13",
    "question": "The Third Law of Thermodynamics states that the entropy of a pure, perfectly crystalline substance is zero at:",
    "options": [
      "A):   0°C",
      "B):   0 K",
      "C):   298 K",
      "D):   100 K"
    ],
    "correctAnswer": "b",
    "explanation": "According to the Third Law, perfect crystalline order corresponds to zero entropy at absolute zero (0 K)."
  },
  {
    "id": "c11-chem-5-mcq-14",
    "question": "The mathematical relation between standard free energy change (&Delta;G°) and equilibrium constant (K) is:",
    "options": [
      "A):   &Delta;G&deg; = RT ln K",
      "B):   &Delta;G&deg; = -RT ln K",
      "C):   &Delta;G&deg; = -T ln K",
      "D):   &Delta;G&deg; = -R ln K"
    ],
    "correctAnswer": "b",
    "explanation": "&Delta;G&deg; = -RT ln K = -2.303 RT log<sub>10</sub> K."
  },
  {
    "id": "c11-chem-5-mcq-15",
    "question": "In an adiabatic process, which of the following is strictly zero?",
    "options": [
      "A):   &Delta;T",
      "B):   q",
      "C):   w",
      "D):   &Delta;U"
    ],
    "correctAnswer": "b",
    "explanation": "By definition, an adiabatic system allows no heat transfer across its boundaries (q = 0)."
  },
  {
    "id": "c11-chem-5-mcq-16",
    "question": "If 1 mole of an ideal gas expands isothermally and reversibly from V<sub>1</sub> to V<sub>2</sub>, the work done is:",
    "options": [
      "A):   w = -p &Delta;V",
      "B):   w = -2.303 RT log<sub>10</sub>(V<sub>2</sub> / V<sub>1</sub>)",
      "C):   w = +2.303 RT log<sub>10</sub>(V<sub>2</sub> / V<sub>1</sub>)",
      "D):   w = 0"
    ],
    "correctAnswer": "b",
    "explanation": "For 1 mole of ideal gas, w<sub>rev</sub> = -2.303 RT log<sub>10</sub>(V<sub>2</sub> / V<sub>1</sub>)."
  },
  {
    "id": "c11-chem-5-mcq-17",
    "question": "The enthalpy of neutralization of any strong acid with a strong base is approximately:",
    "options": [
      "A):   -13.7 kJ mol<sup>-1</sup>",
      "B):   -57.1 kJ mol<sup>-1</sup>",
      "C):   +57.1 kJ mol<sup>-1</sup>",
      "D):   -890 kJ mol<sup>-1</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "The net reaction H<sup>+</sup><sub>(aq)</sub> + OH<sup>-</sup><sub>(aq)</sub> &rarr; H<sub>2</sub>O<sub>(l)</sub> releases -57.1 kJ mol<sup>-1</sup> (-13.7 kcal mol<sup>-1</sup>)."
  },
  {
    "id": "c11-chem-5-mcq-18",
    "question": "For an endothermic reaction to be spontaneous, which condition must be met?",
    "options": [
      "A):   &Delta;S must be negative",
      "B):   &Delta;S must be positive and T must be high",
      "C):   T must be 0 K",
      "D):   Pressure must be zero"
    ],
    "correctAnswer": "b",
    "explanation": "If &Delta;H &gt; 0, &Delta;G = &Delta;H - T&Delta;S can only be negative when &Delta;S &gt; 0 and T &gt; &Delta;H / &Delta;S."
  },
  {
    "id": "c11-chem-5-mcq-19",
    "question": "Which of the following equations correctly represents the relation between enthalpy of sublimation, fusion, and vaporization?",
    "options": [
      "A):   &Delta;<sub>sub</sub>H = &Delta;<sub>fus</sub>H - &Delta;<sub>vap</sub>H",
      "B):   &Delta;<sub>sub</sub>H = &Delta;<sub>fus</sub>H + &Delta;<sub>vap</sub>H",
      "C):   &Delta;<sub>fus</sub>H = &Delta;<sub>sub</sub>H + &Delta;<sub>vap</sub>H",
      "D):   &Delta;<sub>vap</sub>H = &Delta;<sub>sub</sub>H &times; &Delta;<sub>fus</sub>H"
    ],
    "correctAnswer": "b",
    "explanation": "Sublimation represents direct solid &rarr; vapor transition, which equals fusion (solid &rarr; liquid) plus vaporization (liquid &rarr; vapor)."
  },
  {
    "id": "c11-chem-5-mcq-20",
    "question": "For an isolated system undergoing a spontaneous change, which statement is correct?",
    "options": [
      "A):   &Delta;U = 0 and &Delta;S &gt; 0",
      "B):   &Delta;U &gt; 0 and &Delta;S = 0",
      "C):   &Delta;U &lt; 0 and &Delta;S &lt; 0",
      "D):   &Delta;U = 0 and &Delta;S &lt; 0"
    ],
    "correctAnswer": "a",
    "explanation": "In an isolated system, energy cannot cross boundaries (&Delta;U = 0), and any spontaneous change must increase entropy (&Delta;S &gt; 0)."
  },
  {
    "id": "c11-chem-5-mcq-21",
    "question": "The work done during an adiabatic expansion of an ideal gas is equal to:",
    "options": [
      "A):   -q",
      "B):   &Delta;U",
      "C):   -p &Delta;V",
      "D):   &Delta;H"
    ],
    "correctAnswer": "b",
    "explanation": "Since q = 0 in an adiabatic process, First Law gives &Delta;U = q + w = 0 + w &rArr; w = &Delta;U."
  },
  {
    "id": "c11-chem-5-mcq-22",
    "question": "Why does the temperature of a real gas drop during Joule-Thomson expansion?",
    "options": [
      "A):   Gas performs work against internal intermolecular attractive forces",
      "B):   Heat is absorbed by surroundings",
      "C):   Gas undergoes chemical dissociation",
      "D):   Entropy becomes zero"
    ],
    "correctAnswer": "a",
    "explanation": "During expansion, gas molecules separate against intermolecular van der Waals attractions at the expense of internal kinetic energy, causing cooling."
  },
  {
    "id": "c11-chem-5-mcq-23",
    "question": "What is the change in entropy when 1 mole of liquid water vaporizes at its boiling point (373 K)? (&Delta;vapH = 40.7 kJ/mol)",
    "options": [
      "A):   +109.1 J K<sup>-1</sup> mol<sup>-1</sup>",
      "B):   +40.7 J K<sup>-1</sup> mol<sup>-1</sup>",
      "C):   -109.1 J K<sup>-1</sup> mol<sup>-1</sup>",
      "D):   0 J K<sup>-1</sup> mol<sup>-1</sup>"
    ],
    "correctAnswer": "a",
    "explanation": "&Delta;S<sub>vap</sub> = &Delta;H<sub>vap</sub> / T<sub>bp</sub> = 40700 / 373 = +109.1 J K<sup>-1</sup> mol<sup>-1</sup>."
  },
  {
    "id": "c11-chem-5-mcq-24",
    "question": "The efficiency (&eta;) of a Carnot engine operating between temperatures T<sub>1</sub> (source) and T<sub>2</sub> (sink) is:",
    "options": [
      "A):   (T<sub>1</sub> + T<sub>2</sub>) / T<sub>1</sub>",
      "B):   (T<sub>1</sub> - T<sub>2</sub>) / T<sub>1</sub>",
      "C):   T<sub>2</sub> / T<sub>1</sub>",
      "D):   (T<sub>1</sub> - T<sub>2</sub>) / T<sub>2</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "Carnot efficiency is &eta; = (T<sub>1</sub> - T<sub>2</sub>) / T<sub>1</sub> = 1 - T<sub>2</sub>/T<sub>1</sub>."
  },
  {
    "id": "c11-chem-5-mcq-25",
    "question": "At the normal melting point of ice (273 K, 1 atm), the value of &Delta;G for the fusion of ice is:",
    "options": [
      "A):   Positive",
      "B):   Negative",
      "C):   Zero",
      "D):   Equal to &Delta;H<sub>fus</sub>"
    ],
    "correctAnswer": "c",
    "explanation": "At the normal melting point, ice and water exist in dynamic equilibrium, so &Delta;G = 0."
  }
];
