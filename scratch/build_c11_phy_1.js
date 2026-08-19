const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F";

// Clean compact inline stacked fraction that DOES NOT break lines vertically
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(255, 81, 47, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 4px;">📌 Definition (${term}):</b>
    <p style="margin: 0; color: #FFFFFF; line-height: 1.6; font-size: 15.5px;">${definition}</p>
  </div>`;
}

// Diagram placeholder
function diagramPlaceholder(title, description) {
  return `
  <div style="border: 2px dashed ${themeColor}; border-radius: 12px; padding: 18px; text-align: center; margin: 20px 0; background: rgba(255, 81, 47, 0.04);">
    <div style="font-size: 22px; margin-bottom: 4px;">🖼️</div>
    <div style="color: ${themeColor}; font-weight: bold; font-size: 15.5px; margin-bottom: 4px;">[ Diagram Placeholder: ${title} ]</div>
    <div style="color: #B0BEC5; font-size: 13.5px; max-width: 600px; margin: 0 auto; line-height: 1.4;">${description}</div>
  </div>`;
}

// Helper for subtopic item with title in themeColor on new line with white explanation text
function colonTopic(title, explanation) {
  return `
  <div style="margin-bottom: 12px;">
    <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 3px;">• ${title}:</b>
    <span style="color: #FFFFFF; line-height: 1.6; display: block; font-size: 15px;">${explanation}</span>
  </div>`;
}

// Helper for single line code formula (strictly nowrap to prevent awkward word wrap on mobile)
function singleLineCode(codeText) {
  return `<code style="font-size: 14px; white-space: nowrap; font-family: monospace; color: #FFFFFF; display: inline-block;">${codeText}</code>`;
}

// Generate Overview HTML
let overviewHtml = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit I: Physical World and Measurement (Units and Measurements)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Physical Quantity:</b>
        <span style="color: #FFFFFF;">Any property of a material or system that can be quantified and measured using an accepted standard.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Unit of Measurement:</b>
        <span style="color: #FFFFFF;">An arbitrarily chosen, internationally accepted standard reference quantity used to compare physical measurements.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Fundamental Quantities:</b>
        <span style="color: #FFFFFF;">Base physical quantities that are independent of each other and cannot be defined in terms of other quantities (e.g. Mass, Length, Time).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Derived Quantities:</b>
        <span style="color: #FFFFFF;">Quantities that can be expressed as mathematical combinations of fundamental base quantities (e.g. Velocity, Force, Work).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. SI Units:</b>
        <span style="color: #FFFFFF;">Le Système International d'Unités - the modern metric standard system based on 7 base and 2 supplementary units.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Significant Figures:</b>
        <span style="color: #FFFFFF;">The total number of reliable digits in a measured quantity plus the first single digit that is uncertain.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Dimensions:</b>
        <span style="color: #FFFFFF;">The powers (exponents) to which fundamental units are raised to represent a physical quantity.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Dimensional Formula:</b>
        <span style="color: #FFFFFF;">An expression showing which base quantities and what powers enter into the unit of a physical quantity (e.g. Force = [M L T<sup>-2</sup>]).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Principle of Homogeneity:</b>
        <span style="color: #FFFFFF;">The fundamental principle stating that dimensions of all terms on both sides of a valid physical equation must be identical.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Systematic Error:</b>
        <span style="color: #FFFFFF;">Errors that tend to occur in one direction only (either positive or negative) due to instrument flaws or technique.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: NEED FOR MEASUREMENT -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">Need for Measurement</h2>
  
  ${defCard("Measurement", "Measurement is the process of comparing an unknown physical quantity with a standard reference magnitude of the exact same physical kind to determine how many times the standard is contained within it.")}

  <p>Physics is an exact quantitative science based on observation, experimentation, and accurate numerical measurement. Qualitative descriptions such as 'hot', 'heavy', or 'fast' are subjective and insufficient for scientific analysis. To establish exact quantitative laws of nature, physical quantities must be measured accurately using well-defined standards.</p>
  
  <p>Every physical measurement consists of two essential parts: a numerical value (magnitude <i>n</i>) and a unit of measurement (<i>u</i>). The physical quantity <i>Q</i> is mathematically represented as:</p>
  
  ${eqBox("<b>Q = n × u</b>")}

  <p>If a physical quantity is measured in two different unit systems with units <i>u</i><sub>1</sub> and <i>u</i><sub>2</sub> having numerical values <i>n</i><sub>1</sub> and <i>n</i><sub>2</sub> respectively, the total magnitude remains unchanged:</p>
  
  ${eqBox("<b>n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub> &nbsp; ⇒ &nbsp; n ∝ " + frac('1', 'u') + "</b>")}

  <p>This fundamental inverse relationship implies that the larger the unit chosen for measurement, the smaller will be the numerical value obtained for the given quantity.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Role of Measurement in Physical Sciences</h3>
  <p>Accurate measurement enables physicists to test theoretical predictions against experimental data. From describing subatomic particle trajectories to calculating planetary orbits across light years, measurement bridges theoretical models with real-world physical reality.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Characteristics of a Standard Unit</h3>
  <p>To serve as a reliable reference standard, a unit of measurement must possess the following essential characteristics:</p>
  
  <div style="margin: 12px 0;">
    ${colonTopic("Well-Defined", "The definition of the unit must be clear, precise, and completely unambiguous.")}
    ${colonTopic("Invariable", "The standard unit must not change with environmental factors like temperature, pressure, or location.")}
    ${colonTopic("Easily Reproducible", "It should be possible to replicate the standard unit with high precision anywhere in the world.")}
    ${colonTopic("Universally Accepted", "It must be internationally agreed upon by the global scientific community.")}
  </div>

  ${diagramPlaceholder("Comparison of Measurement Process & Unit Standard", "Schematic diagram showing an unknown physical quantity being measured against a calibrated standard unit scale Q = n × u.")}

  <!-- SECTION 2: UNITS OF MEASUREMENT & SYSTEMS OF UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">Units of Measurement & Systems of Units</h2>

  ${defCard("System of Units", "A complete set of units containing both fundamental base units and derived units used to measure all types of physical quantities in a given scientific framework.")}

  <p>Historically, different countries and regions developed independent systems of units based on local conventions for length, mass, and time. Before the global adoption of the metric system, three major unit systems were widely employed in science and engineering:</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) CGS System (Gaussian System)</h3>
  <p>Originating in France, the CGS system is a metric system based on three fundamental units:</p>
  <div style="margin: 10px 0;">
    ${colonTopic("Length", "Centimetre (cm)")}
    ${colonTopic("Mass", "Gram (g)")}
    ${colonTopic("Time", "Second (s)")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) FPS System (British Engineering System)</h3>
  <p>The FPS system is a non-metric imperial system based on:</p>
  <div style="margin: 10px 0;">
    ${colonTopic("Length", "Foot (ft)")}
    ${colonTopic("Mass", "Pound (lb)")}
    ${colonTopic("Time", "Second (s)")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) MKS System</h3>
  <p>The MKS system is a coherent metric system based on larger practical units:</p>
  <div style="margin: 10px 0;">
    ${colonTopic("Length", "Metre (m)")}
    ${colonTopic("Mass", "Kilogram (kg)")}
    ${colonTopic("Time", "Second (s)")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iv) Need for a Universal System</h3>
  <p>As international scientific collaboration and commerce expanded in the 20th century, converting between disparate systems like FPS and CGS caused severe confusion and errors. This highlighted the urgent necessity for a unified, coherent global standard system of units.</p>

  ${diagramPlaceholder("Comparison Table of CGS, FPS, MKS and SI Systems", "Comparative chart displaying the base dimensions of Length, Mass, and Time across CGS, FPS, MKS, and SI unit systems.")}

  <!-- SECTION 3: SI UNITS: FUNDAMENTAL AND DERIVED UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">SI Units: Fundamental and Derived Units</h2>

  ${defCard("SI System (Système International d'Unités)", "The modern international metric standard system established in 1960 by the General Conference on Weights and Measures (CGPM), built upon 7 fundamental base units and 2 supplementary units.")}

  <p>The International System of Units (SI) is a <b>coherent system of units</b>, meaning that derived units are obtained directly by simple multiplication or division of base units without introducing numerical conversion factors.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) The 7 SI Base Fundamental Quantities & Units</h3>
  <p>All physical quantities in the universe can be expressed in terms of 7 independent fundamental base quantities:</p>

  <!-- TABLE WITH CLEAN INLINE SLASHES FOR CELL VISIBILITY -->
  <div style="overflow-x: auto; margin: 15px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.25); text-align: left; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(255, 81, 47, 0.2); color: ${themeColor}; border-bottom: 2px solid ${themeColor};">
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Base Quantity</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">SI Unit</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Symbol</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Definition Basis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Length</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">metre</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>m</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Path length traveled by light in vacuum in 1 / 299,792,458 s.</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Mass</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">kilogram</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>kg</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Defined by fixing Planck's constant h = 6.62607015 × 10<sup>-34</sup> J s.</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Time</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">second</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>s</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Duration of 9,192,631,770 periods of Cs-133 radiation.</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Electric Current</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">ampere</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>A</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Defined by elementary charge e = 1.602176634 × 10<sup>-19</sup> C.</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Thermodynamic Temp.</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">kelvin</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>K</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Defined by Boltzmann constant k = 1.380649 × 10<sup>-23</sup> J K<sup>-1</sup>.</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Amount of Substance</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">mole</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>mol</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Contains exactly 6.02214076 × 10<sup>23</sup> entities (Avogadro constant).</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Luminous Intensity</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">candela</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>cd</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Intensity of 540 × 10<sup>12</sup> Hz source emitting 1/683 W sr<sup>-1</sup>.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Supplementary SI Units</h3>
  <p>In addition to 7 base units, SI includes two supplementary dimensionless geometrical units:</p>
  <div style="margin: 10px 0;">
    ${colonTopic("Plane Angle (dθ)", "Measured in <b>radian (rad)</b>. Defined as arc length divided by radius: " + singleLineCode("dθ = ds / r"))}
    ${colonTopic("Solid Angle (dΩ)", "Measured in <b>steradian (sr)</b>. Defined as intercepted area divided by radius squared: " + singleLineCode("dΩ = dA / r<sup>2</sup>"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Derived Units</h3>
  <p>Derived units are mathematical combinations of fundamental units. Examples include:</p>
  <div style="margin: 10px 0;">
    ${colonTopic("Speed / Velocity", singleLineCode("unit = m / s = m s<sup>-1</sup>"))}
    ${colonTopic("Acceleration", singleLineCode("unit = m / s<sup>2</sup> = m s<sup>-2</sup>"))}
    ${colonTopic("Force", singleLineCode("1 Newton (N) = 1 kg m s<sup>-2</sup>"))}
    ${colonTopic("Pressure", singleLineCode("1 Pascal (Pa) = 1 N / m<sup>2</sup> = 1 kg m<sup>-1</sup> s<sup>-2</sup>"))}
    ${colonTopic("Work / Energy", singleLineCode("1 Joule (J) = 1 N m = 1 kg m<sup>2</sup> s<sup>-2</sup>"))}
    ${colonTopic("Power", singleLineCode("1 Watt (W) = 1 J / s = 1 kg m<sup>2</sup> s<sup>-3</sup>"))}
  </div>

  ${diagramPlaceholder("7 SI Base Units and 2 Supplementary Geometrical Units Chart", "Visual flowchart showing how 7 Base SI Units combine to form Derived Units like Force, Pressure, Energy, and Power.")}

  <!-- SECTION 4: SIGNIFICANT FIGURES & ERROR ANALYSIS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">Significant Figures & Error Analysis</h2>

  ${defCard("Significant Figures", "The total number of reliable digits in a measured quantity plus the first single uncertain digit that carries experimental ambiguity.")}

  <p>Every experimental measurement contains an intrinsic degree of uncertainty depending on the precision of the measuring instrument. Significant figures indicate the precision of a measurement.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Rules for Determining Significant Figures</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Rule 1: All Non-Zero Digits", "All non-zero digits are significant (e.g. 143.85 has 5 significant figures).")}
    ${colonTopic("Rule 2: Trapped Zeros", "All zeros occurring between two non-zero digits are significant (e.g. 2008.05 has 6 significant figures).")}
    ${colonTopic("Rule 3: Leading Zeros", "Leading zeros to the left of the first non-zero digit are NEVER significant (e.g. 0.0042 has only 2 significant figures).")}
    ${colonTopic("Rule 4: Trailing Zeros with Decimal", "Trailing zeros in a number with a decimal point ARE significant (e.g. 3.500 has 4 significant figures).")}
    ${colonTopic("Rule 5: Whole Number Trailing Zeros", "Trailing zeros in a whole number without a decimal point are ambiguous; use scientific notation N × 10<sup>x</sup> (e.g. 4.70 × 10<sup>3</sup> has 3 significant figures).")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Rounding Off Numbers & Arithmetic Operations</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Addition & Subtraction Rule", "The final calculated result should retain only as many decimal places as present in the measurement having the least number of decimal places.")}
    ${colonTopic("Multiplication & Division Rule", "The final calculated result should retain only as many significant figures as present in the original number with the least significant figures.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Error Analysis & Types of Errors</h3>
  <p>The difference between the true value and the measured value of a physical quantity is called an <b>experimental error</b>.</p>

  <div style="margin: 12px 0;">
    ${colonTopic("Absolute Error (Δa<sub>i</sub>)", "Magnitude of difference between true value a<sub>m</sub> and individual measured value a<sub>i</sub>:<br>" + singleLineCode("Δa<sub>i</sub> = |a<sub>m</sub> - a<sub>i</sub>|"))}
    ${colonTopic("Mean Absolute Error (Δa<sub>mean</sub>)", "Arithmetic mean of absolute errors of all individual measurements.")}
    ${colonTopic("Relative Error", "Ratio of mean absolute error to mean value:<br>" + singleLineCode("Relative Error = Δa<sub>mean</sub> / a<sub>mean</sub>"))}
    ${colonTopic("Percentage Error", "Relative error expressed in percent:<br>" + singleLineCode("Percentage Error = (Δa<sub>mean</sub> / a<sub>mean</sub>) × 100%"))}
  </div>

  <!-- CLEAN STRUCTURED BREAKDOWN FOR COMBINATION OF ERRORS (REQUESTED BY USER) -->
  <h3 style="color: ${themeColor}; margin-top: 22px;">Combination of Errors</h3>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-weight: bold; font-size: 15.5px; margin-bottom: 4px;">• If Z = A + B &nbsp;or&nbsp; Z = A - B:</div>
    <b style="color: ${themeColor}; display: block; font-size: 15px; margin-bottom: 4px;">Maximum Absolute Error:</b>
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px; display: inline-block; white-space: nowrap;">ΔZ = ΔA + ΔB</div>
  </div>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-weight: bold; font-size: 15.5px; margin-bottom: 4px;">• If Z = A × B &nbsp;or&nbsp; Z = A / B:</div>
    <b style="color: ${themeColor}; display: block; font-size: 15px; margin-bottom: 4px;">Maximum Relative Error:</b>
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px; display: inline-block; white-space: nowrap;">` + frac('ΔZ', 'Z') + ` = ` + frac('ΔA', 'A') + ` + ` + frac('ΔB', 'B') + `</div>
  </div>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-weight: bold; font-size: 15.5px; margin-bottom: 4px;">• If Z = A<sup>p</sup> B<sup>q</sup> / C<sup>r</sup>:</div>
    <b style="color: ${themeColor}; display: block; font-size: 15px; margin-bottom: 4px;">Maximum Fractional Error:</b>
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px; display: inline-block; white-space: nowrap;">` + frac('ΔZ', 'Z') + ` = p ` + frac('ΔA', 'A') + ` + q ` + frac('ΔB', 'B') + ` + r ` + frac('ΔC', 'C') + `</div>
  </div>

  ${diagramPlaceholder("Significant Figures Rules & Error Propagation Tree", "Diagram depicting rules for counting significant figures and step-by-step formula tree for combining absolute and percentage errors.")}

  <!-- SECTION 5: DIMENSIONS OF PHYSICAL QUANTITIES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">Dimensions of Physical Quantities</h2>

  ${defCard("Dimensions", "The powers or exponents to which fundamental base quantities (Mass [M], Length [L], Time [T], Current [I], Temp [K]) are raised to represent a given physical quantity.")}

  <p>In mechanics, all physical quantities can be represented dimensionally in terms of three fundamental base dimensions: Mass <b>[M]</b>, Length <b>[L]</b>, and Time <b>[T]</b>. In thermodynamics and electromagnetism, Temperature <b>[K]</b> and Electric Current <b>[A]</b> are added.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Dimensional Formula & Dimensional Equation</h3>
  <p>An expression showing how and which fundamental quantities enter into a physical quantity is called its <b>dimensional formula</b>. When a physical quantity is equated with its dimensional formula, it is called a <b>dimensional equation</b>.</p>

  <!-- TABLE WITH CLEAN INLINE SLASHES FOR CELL VISIBILITY -->
  <div style="overflow-x: auto; margin: 15px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.25); text-align: left; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(255, 81, 47, 0.2); color: ${themeColor}; border-bottom: 2px solid ${themeColor};">
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Physical Quantity</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Defining Relation</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Dimensional Formula</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">SI Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Area</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Length × Breadth</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>0</sup> L<sup>2</sup> T<sup>0</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">m<sup>2</sup></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Volume</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Length × Breadth × Height</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>0</sup> L<sup>3</sup> T<sup>0</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">m<sup>3</sup></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Density</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Mass / Volume</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>1</sup> L<sup>-3</sup> T<sup>0</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">kg m<sup>-3</sup></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Velocity / Speed</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Displacement / Time</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>0</sup> L<sup>1</sup> T<sup>-1</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">m s<sup>-1</sup></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Acceleration</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Velocity Change / Time</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>0</sup> L<sup>1</sup> T<sup>-2</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">m s<sup>-2</sup></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Linear Momentum</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Mass × Velocity</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>1</sup> L<sup>1</sup> T<sup>-1</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">kg m s<sup>-1</sup></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Force</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Mass × Acceleration</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">N (kg m s<sup>-2</sup>)</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work / Energy</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Force × Distance</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">J (kg m<sup>2</sup> s<sup>-2</sup>)</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Power</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work / Time</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>1</sup> L<sup>2</sup> T<sup>-3</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">W (J s<sup>-1</sup>)</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Pressure / Stress</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Force / Area</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>[M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Pa (N m<sup>-2</sup>)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Classification of Physical Quantities</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Dimensional Variables", "Quantities possessing dimensions and variable values (e.g. Velocity, Force).")}
    ${colonTopic("Dimensional Constants", "Quantities possessing dimensions but constant fixed values (e.g. Gravitational Constant G = [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>], Planck's Constant h = [M L<sup>2</sup> T<sup>-1</sup>]).")}
    ${colonTopic("Dimensionless Variables", "Quantities having variable values but zero dimensions [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>] (e.g. Strain, Angle, Relative Density, Refractive Index).")}
    ${colonTopic("Dimensionless Constants", "Pure numbers having constant values and zero dimensions (e.g. π, e, 1, 2, 3).")}
  </div>

  ${diagramPlaceholder("Classification Matrix of Physical Quantities by Dimensions", "2x2 grid diagram showing Dimensional Variables, Dimensional Constants, Dimensionless Variables, and Dimensionless Constants with clear examples.")}

  <!-- SECTION 6: DIMENSIONAL ANALYSIS AND ITS APPLICATIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">Dimensional Analysis and Its Applications</h2>

  ${defCard("Principle of Homogeneity of Dimensions", "The fundamental law stating that a physical equation is dimensionally correct if and only if the dimensions of every term on the left-hand side (LHS) are identical to the dimensions of every term on the right-hand side (RHS).")}

  <p>Dimensional analysis is a powerful analytical technique used in physics to inspect physical relations, derive empirical formulas, and convert numerical values between different unit systems.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Principle of Homogeneity of Dimensions</h3>
  <p>Only physical quantities having identical dimensions can be added, subtracted, or equated. For an equation <code>A + B = C</code>, the dimensions of A, B, and C must be strictly identical:</p>
  ${eqBox("<b>[A] = [B] = [C]</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Application 1: Checking the Dimensional Correctness of an Equation</h3>
  <p>To verify a physical equation, compare the dimensional formulas of LHS and RHS.</p>
  <p><b>Example:</b> Check correctness of equation of motion <code>s = u t + ` + frac('1', '2') + ` a t<sup>2</sup></code>.</p>

  <!-- EACH STEP ON A CLEAN NEW LINE WITH NOWRAP MATH STATEMENTS -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 81, 47, 0.25); border-radius: 8px; padding: 12px 16px; margin: 12px 0; font-size: 14.5px;">
    <div style="margin-bottom: 8px; color: ${themeColor}; font-weight: bold; white-space: nowrap; overflow-x: auto;">• LHS: [s] = [L]</div>
    <div style="margin-bottom: 8px; color: #FFFFFF; font-weight: bold; white-space: nowrap; overflow-x: auto;">• RHS Term 1: [u t] = [L T<sup>-1</sup>] × [T] = [L]</div>
    <div style="color: #FFFFFF; font-weight: bold; white-space: nowrap; overflow-x: auto;">• RHS Term 2: [` + frac('1', '2') + ` a t<sup>2</sup>] = [1] × [L T<sup>-2</sup>] × [T<sup>2</sup>] = [L] <span style="color: #B0BEC5; font-weight: normal;">(Pure number ` + frac('1', '2') + ` is dimensionless)</span></div>
  </div>

  <p>Since LHS = RHS = [L], the equation is dimensionally homogeneous and correct!</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Application 2: Deriving Relationships Between Physical Quantities</h3>
  <p>If a physical quantity depends on other factors, its functional dependence can be derived by equating dimensions.</p>
  <p><b>Example:</b> Derive period of simple pendulum T depending on mass m, length l, and acceleration due to gravity g.</p>
  <p>Assume <code>T = k m<sup>a</sup> l<sup>b</sup> g<sup>c</sup></code> where k is dimensionless constant.</p>
  <p>Substitute dimensions: <code>[M<sup>0</sup> L<sup>0</sup> T<sup>1</sup>] = [M]<sup>a</sup> [L]<sup>b</sup> [L T<sup>-2</sup>]<sup>c</sup> = [M<sup>a</sup> L<sup>b+c</sup> T<sup>-2c</sup>]</code></p>

  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 81, 47, 0.25); border-radius: 8px; padding: 12px 16px; margin: 12px 0; font-size: 14.5px;">
    <div style="margin-bottom: 6px; color: #FFFFFF; white-space: nowrap;">• Power of M: <b>a = 0</b></div>
    <div style="margin-bottom: 6px; color: #FFFFFF; white-space: nowrap;">• Power of T: <b>-2c = 1 &nbsp; ⇒ &nbsp; c = -` + frac('1', '2') + `</b></div>
    <div style="color: #FFFFFF; white-space: nowrap;">• Power of L: <b>b + c = 0 &nbsp; ⇒ &nbsp; b = -c = ` + frac('1', '2') + `</b></div>
  </div>

  ${eqBox("<b>T = k m<sup>0</sup> l<sup>1/2</sup> g<sup>-1/2</sup> = k " + frac('√l', '√g') + " = 2 π " + frac('√l', '√g') + "</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iv) Application 3: Conversion of Units from One System to Another</h3>
  <p>Based on <code>n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub></code>:</p>
  ${eqBox("<b>n<sub>2</sub> = n<sub>1</sub> × [ " + frac('M<sub>1</sub>', 'M<sub>2</sub>') + " ]<sup>a</sup> [ " + frac('L<sub>1</sub>', 'L<sub>2</sub>') + " ]<sup>b</sup> [ " + frac('T<sub>1</sub>', 'T<sub>2</sub>') + " ]<sup>c</sup></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(v) Limitations of Dimensional Analysis</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Limitation 1: Constant Identification", "It cannot determine the value of dimensionless proportional constants (like 2π, 1/2).")}
    ${colonTopic("Limitation 2: Variable Count Boundary", "It fails if a physical quantity depends on more than 3 fundamental base quantities in mechanics.")}
    ${colonTopic("Limitation 3: Non-Algebraic Functions", "It cannot derive formulas containing trigonometric (sin, cos), exponential (e<sup>x</sup>), or logarithmic (log x) functions.")}
    ${colonTopic("Limitation 4: Scalar/Vector Ambiguity", "It cannot distinguish whether a physical quantity is a scalar or a vector.")}
  </div>

  ${diagramPlaceholder("3 Applications & Limitations of Dimensional Analysis Flowchart", "Flowchart detailing the 3 core applications of dimensional analysis and its 4 fundamental limitations.")}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE END OF OVERVIEW SECTION) -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Astronomical Conversions & Fast Rules Summary for Chapter 1</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Measurement Relation:</b>
        <span style="color: #FFFFFF; white-space: nowrap; display: block; overflow-x: auto;">Q = n × u &nbsp;|&nbsp; n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub> &nbsp;|&nbsp; n ∝ ` + frac('1', 'u') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Astronomical Distance Units:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">1 AU = 1.496 × 10<sup>11</sup> m<br>1 ly = 9.46 × 10<sup>15</sup> m<br>1 Parsec (pc) = 3.08 × 10<sup>16</sup> m = 3.26 ly</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• SI Supplementary Units:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Plane Angle: dθ = ` + frac('ds', 'r') + ` (radian, rad)<br>Solid Angle: dΩ = ` + frac('dA', 'r<sup>2</sup>') + ` (steradian, sr)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Error Formulas:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Relative Error = ` + frac('Δa<sub>mean</sub>', 'a<sub>mean</sub>') + `<br>Percentage Error = ` + frac('Δa<sub>mean</sub>', 'a<sub>mean</sub>') + ` × 100%<br>Power Error (Z = A<sup>p</sup>): ` + frac('ΔZ', 'Z') + ` = p ` + frac('ΔA', 'A') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Unit Conversion Rule:</b>
        <span style="color: #FFFFFF; white-space: nowrap; display: block; overflow-x: auto;">n<sub>2</sub> = n<sub>1</sub> × [ ` + frac('M<sub>1</sub>', 'M<sub>2</sub>') + ` ]<sup>a</sup> [ ` + frac('L<sub>1</sub>', 'L<sub>2</sub>') + ` ]<sup>b</sup> [ ` + frac('T<sub>1</sub>', 'T<sub>2</sub>') + ` ]<sup>c</sup></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Principle of Homogeneity:</b>
        <span style="color: #FFFFFF; display: block;">For A + B = C, dimensions [A] = [B] = [C] must be strictly identical.</span>
      </div>
    </div>
  </div>

</div>
`;

// Helper for solution box
function solBox(qNo, title, question, solution) {
  return `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">Q${qNo}: ${title}</h3>
    <div style="color: #F0F0F0; margin-bottom: 12px; line-height: 1.6; font-size: 15.5px;">${question}</div>
    <div style="background: rgba(255, 81, 47, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Explanation:</b>
      ${solution}
    </div>
  </div>`;
}

// Generate Solutions HTML
let solutionsHtml = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">
  
  <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid ${themeColor}; padding-bottom: 10px;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 22px; font-weight: bold; text-align: center !important;">NCERT & Master Solutions Guide</h2>
    <p style="color: #B0BEC5; margin: 5px 0 0 0; font-size: 15px; text-align: center !important;">Unit I: Physical World and Measurement (Units and Measurements) — 100 Practice Questions (Theoretical & Numerical)</p>
  </div>
`;

// Rebalanced 100 Questions: Progressive mix of fundamental theoretical questions, reasoning, and numerical solutions
const mcqs = [
  { q: "Which of the following is NOT a fundamental base SI unit?", opts: ["a) kelvin", "b) candela", "c) newton", "d) mole"], ans: "c) newton", exp: "Newton is a derived unit of Force (1 N = 1 kg m s<sup>-2</sup>), whereas kelvin, candela, and mole are SI fundamental base units." },
  { q: "Why is measurement essential in physical sciences?", opts: ["a) To describe qualitative feelings", "b) To establish quantitative natural laws", "c) To eliminate math from physics", "d) To avoid experimentation"], ans: "b) To establish quantitative natural laws", exp: "Measurement provides exact numerical values (Q = n × u) necessary to formulate and verify quantitative physical laws." },
  { q: "The relation between numerical magnitude n and unit u of a physical quantity is:", opts: ["a) n ∝ u", "b) n ∝ u<sup>2</sup>", "c) n ∝ " + frac('1', 'u'), "d) n = u"], ans: "c) n ∝ " + frac('1', 'u'), exp: "Since total magnitude Q = n × u is constant, numerical value n is inversely proportional to unit size u (n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub>)." },
  { q: "The plane angle (radian) and solid angle (steradian) are classified as:", opts: ["a) Fundamental units", "b) Derived units", "c) Supplementary dimensionless units", "d) Imperial units"], ans: "c) Supplementary dimensionless units", exp: "Radian and Steradian are supplementary SI units, but plane angle (ds/r) and solid angle (dA/r<sup>2</sup>) carry no dimensions [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]." },
  { q: "Light year is a unit used for measuring:", opts: ["a) Time duration", "b) Astronomical distance", "c) Intensity of light", "d) Velocity of photons"], ans: "b) Astronomical distance", exp: "Light year (1 ly = 9.46 × 10<sup>15</sup> m) measures the distance light travels in vacuum in one year." },
  { q: "The dimensional formula for Universal Gravitational Constant G is:", opts: ["a) [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]", "b) [M<sup>1</sup> L<sup>3</sup> T<sup>-2</sup>]", "c) [M<sup>-2</sup> L<sup>3</sup> T<sup>-1</sup>]", "d) [M<sup>-1</sup> L<sup>2</sup> T<sup>-2</sup>]"], ans: "a) [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]", exp: "From F = G " + frac('m<sub>1</sub> m<sub>2</sub>', 'r<sup>2</sup>') + ", G = " + frac('F r<sup>2</sup>', 'm<sub>1</sub> m<sub>2</sub>') + " = " + frac('[M L T<sup>-2</sup>] [L<sup>2</sup>]', '[M<sup>2</sup>]') + " = [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]." },
  { q: "Which rule applies to leading zeros when counting significant figures?", opts: ["a) They are always significant", "b) They are never significant", "c) They are significant if after decimal", "d) They depend on temperature"], ans: "b) They are never significant", exp: "Leading zeros before the first non-zero digit merely fix decimal position and are never significant (e.g. 0.0045 has 2 sig figs)." },
  { q: "The number of significant figures in 0.007020 is:", opts: ["a) 3", "b) 4", "c) 6", "d) 7"], ans: "b) 4", exp: "Leading zeros (0.00) are non-significant. Non-zero digits (7, 0, 2) and trailing zero after decimal (0) are significant. Total = 4." },
  { q: "Which pair of physical quantities has identical dimensions?", opts: ["a) Work and Power", "b) Impulse and Linear Momentum", "c) Force and Torque", "d) Stress and Strain"], ans: "b) Impulse and Linear Momentum", exp: "Impulse = Force × Time = [M L T<sup>-1</sup>], which equals Linear Momentum = Mass × Velocity = [M L T<sup>-1</sup>]." },
  { q: "The dimensional formula for Planck's constant h is identical to:", opts: ["a) Force", "b) Linear momentum", "c) Angular momentum", "d) Energy"], ans: "c) Angular momentum", exp: "Planck's constant h = E/ν = [M L<sup>2</sup> T<sup>-1</sup>], which equals Angular Momentum L = m v r = [M L<sup>2</sup> T<sup>-1</sup>]." },
  { q: "If error in measuring radius of a sphere is 2%, the percentage error in its volume is:", opts: ["a) 2%", "b) 4%", "c) 6%", "d) 8%"], ans: "c) 6%", exp: "Volume V = " + frac('4', '3') + " π r<sup>3</sup>. Percentage error " + frac('ΔV', 'V') + " × 100 = 3 × (" + frac('Δr', 'r') + " × 100) = 3 × 2% = 6%." },
  { q: "What is the SI unit of Solid Angle?", opts: ["a) Radian", "b) Steradian", "c) Degree", "d) Candela"], ans: "b) Steradian", exp: "Steradian (sr) is the supplementary SI unit for solid angle." },
  { q: "Which of the following is a dimensionless constant?", opts: ["a) Gravitational constant G", "b) Refractive index n", "c) Euler number e", "d) Planck's constant h"], ans: "c) Euler number e", exp: "Euler number e and π are dimensionless pure number constants [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]." },
  { q: "In 1.000 g, the number of significant figures is:", opts: ["a) 1", "b) 2", "c) 3", "d) 4"], ans: "d) 4", exp: "Trailing zeros after a decimal point are significant. 1.000 has 4 significant figures." },
  { q: "The dimensional formula for Surface Tension is:", opts: ["a) [M L T<sup>-2</sup>]", "b) [M L<sup>0</sup> T<sup>-2</sup>]", "c) [M L<sup>-1</sup> T<sup>-2</sup>]", "d) [M L<sup>2</sup> T<sup>-2</sup>]"], ans: "b) [M L<sup>0</sup> T<sup>-2</sup>]", exp: "Surface Tension = " + frac('Force', 'Length') + " = " + frac('[M L T<sup>-2</sup>]', '[L]') + " = [M L<sup>0</sup> T<sup>-2</sup>]." },
  { q: "Which measurement is most precise among the following?", opts: ["a) 5.00 mm", "b) 5.00 cm", "c) 5.00 m", "d) 5.00 km"], ans: "a) 5.00 mm", exp: "5.00 mm has the smallest least count (0.01 mm), giving the highest experimental precision." },
  { q: "1 Astronomical Unit (AU) represents the mean distance between:", opts: ["a) Earth and Sun", "b) Earth and Moon", "c) Sun and Moon", "d) Sun and Jupiter"], ans: "a) Earth and Sun", exp: "1 AU = 1.496 × 10<sup>11</sup> m, the mean distance from Earth to Sun." },
  { q: "The dimensional formula for Coefficient of Viscosity η is:", opts: ["a) [M L<sup>-1</sup> T<sup>-1</sup>]", "b) [M L T<sup>-1</sup>]", "c) [M L<sup>-2</sup> T<sup>-1</sup>]", "d) [M L<sup>-1</sup> T<sup>-2</sup>]"], ans: "a) [M L<sup>-1</sup> T<sup>-1</sup>]", exp: "From Stokes' Law F = 6π η r v, η = " + frac('F', 'r v') + " = " + frac('[M L T<sup>-2</sup>]', '[L] [L T<sup>-1</sup>]') + " = [M L<sup>-1</sup> T<sup>-1</sup>]." },
  { q: "The ratio of SI unit (Newton) to CGS unit (Dyne) of Force is:", opts: ["a) 10<sup>3</sup>", "b) 10<sup>5</sup>", "c) 10<sup>7</sup>", "d) 10<sup>-5</sup>"], ans: "b) 10<sup>5</sup>", exp: "1 Newton (SI) = 1 kg m s<sup>-2</sup> = 1000 g × 100 cm s<sup>-2</sup> = 10<sup>5</sup> dynes." },
  { q: "A physical quantity P is given by P = " + frac('A<sup>2</sup> B', 'C') + ". Errors in A, B, C are 1%, 2%, 3%. Error in P is:", opts: ["a) 4%", "b) 7%", "c) 6%", "d) 5%"], ans: "b) 7%", exp: "Total percentage error = 2(1%) + 1(2%) + 1(3%) = 2% + 2% + 3% = 7%." },
  { q: "The dimensions of Torque are identical to:", opts: ["a) Force", "b) Power", "c) Work", "d) Impulse"], ans: "c) Work", exp: "Torque = Force × distance = [M L<sup>2</sup> T<sup>-2</sup>], identical to Work = [M L<sup>2</sup> T<sup>-2</sup>]." },
  { q: "Systematic errors can be minimized by:", opts: ["a) Taking arithmetic mean of observations", "b) Calibrating instruments & improving technique", "c) Changing observers", "d) Increasing least count"], ans: "b) Calibrating instruments & improving technique", exp: "Systematic errors arise from known causes like instrument zero error; proper calibration minimizes them." },
  { q: "Which of the following is NOT dimensionless?", opts: ["a) Strain", "b) Angle", "c) Refractive index", "d) Universal Gravitational constant G"], ans: "d) Universal Gravitational constant G", exp: "G has dimensions [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>], whereas strain, angle, and refractive index are dimensionless." },
  { q: "1 Parsec equals how many light years?", opts: ["a) 3.26 ly", "b) 9.46 ly", "c) 1.5 ly", "d) 10 ly"], ans: "a) 3.26 ly", exp: "1 Parsec (parallax second) = 3.08 × 10<sup>16</sup> m = 3.26 light years." },
  { q: "Round off 4.345 to 3 significant figures:", opts: ["a) 4.34", "b) 4.35", "c) 4.30", "d) 4.40"], ans: "a) 4.34", exp: "When dropping 5 preceded by an even digit (4), the even digit remains unchanged (4.34)." }
];

solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 25px;">Part A: Multiple Choice Questions (Q1 - Q25)</h3>`;

// MCQ RENDERING WITH VERTICAL STACKED LEFT-ALIGNED OPTIONS (PREVENTS TEXT JUSTIFICATION & OVERLAP DISTORTIONS)
mcqs.forEach((item, index) => {
  let qNo = index + 1;
  let qText = `${item.q}<div style="margin: 12px 0; text-align: left !important; line-height: 1.8; color: #FFCC80;">
    <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${item.opts[0]}</div>
    <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${item.opts[1]}</div>
    <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${item.opts[2]}</div>
    <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${item.opts[3]}</div>
  </div>`;
  let solText = `<b>Correct Answer: <span style="color: ${themeColor};">${item.ans}</span></b><br>${item.exp}`;
  solutionsHtml += solBox(qNo, "Multiple Choice Question", qText, solText);
});

// VSAs Q26-Q55: Strong Theoretical Focus
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part B: Very Short Answer Questions (Q26 - Q55)</h3>`;

const vsas = [
  { t: "Why Measurement is Needed", q: "Why is measurement essential in physical sciences?", s: "Physics is a quantitative science based on exact observation. Qualitative descriptions (like 'hot' or 'heavy') are subjective; measurement provides precise numerical values (Q = n × u) necessary to test and establish natural physical laws." },
  { t: "Define Physical Quantity", q: "What is meant by a physical quantity in physics?", s: "A physical quantity is any quantifiable property of a material or natural phenomenon that can be measured using an accepted standard unit (e.g. Mass, Length, Time, Force)." },
  { t: "Define Fundamental Base Unit", q: "Define a fundamental base unit with one standard example.", s: "A fundamental unit is a base reference unit defined independently of all other units (e.g. metre for length, kilogram for mass, second for time)." },
  { t: "Define Derived Unit", q: "What is a derived unit? Give two examples.", s: "A derived unit is an SI unit expressed as a mathematical combination of base fundamental units. Examples: unit of velocity (m s<sup>-1</sup>) and unit of force (kg m s<sup>-2</sup>)." },
  { t: "Define Light Year", q: "Define one light year and state its value in SI units.", s: "One light year (1 ly) is the total distance traveled by light in vacuum in one Julian year. 1 ly = 9.46 × 10<sup>15</sup> metres." },
  { t: "Define Parsec", q: "What is a parsec? State its value in light years.", s: "One parsec (parallax second) is the distance at which an arc of length 1 AU subtends an angle of 1 arc second. 1 Parsec = 3.08 × 10<sup>16</sup> m = 3.26 light years." },
  { t: "Define Astronomical Unit (AU)", q: "Define Astronomical Unit.", s: "An Astronomical Unit (1 AU) is the mean distance between the center of the Earth and the center of the Sun. 1 AU = 1.496 × 10<sup>11</sup> m." },
  { t: "Radian Definition", q: "Define one radian plane angle.", s: "One radian is the plane angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle (dθ = ds / r)." },
  { t: "Steradian Definition", q: "Define one steradian solid angle.", s: "One steradian is the solid angle subtended at the center of a sphere by a surface area equal to the square of the radius of the sphere (dΩ = dA / r<sup>2</sup>)." },
  { t: "Significant Figures Definition", q: "What are significant figures in experimental measurement?", s: "Significant figures comprise all reliable digits known with certainty plus the first single digit that is uncertain in a measured value." },
  { t: "Precision vs Accuracy", q: "Distinguish between precision and accuracy in 1 sentence.", s: "Accuracy indicates how close a measured value is to the true value, whereas precision indicates the resolution or closeness of multiple repeated measurements." },
  { t: "Significant Figures in 0.0050", q: "How many significant figures are present in 0.0050 m?", s: "There are 2 significant figures (5 and the trailing zero). Leading zeros before 5 are non-significant decimal markers." },
  { t: "Dimensional Formula of Force", q: "State the dimensional formula of Force.", s: "Dimensional formula of Force F = [M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>]." },
  { t: "Dimensional Formula of Work", q: "State the dimensional formula of Work and Energy.", s: "Dimensional formula of Work W = [M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]." },
  { t: "Dimensional Formula of Pressure", q: "State the dimensional formula of Pressure.", s: "Dimensional formula of Pressure = Force / Area = [M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]." },
  { t: "Principle of Homogeneity", q: "State the Principle of Homogeneity of Dimensions.", s: "It states that a physical equation is dimensionally valid if and only if the dimensions of all terms on both sides of the equation are strictly identical." },
  { t: "Dimensionless Quantity with Unit", q: "Name a physical quantity that has a unit but no dimensions.", s: "Plane angle (unit: radian) and Solid angle (unit: steradian) have SI units but are dimensionless [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]." },
  { t: "Dimensional Constant Example", q: "Give two examples of dimensional constants.", s: "Universal Gravitational Constant G ([M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]) and Planck's constant h ([M L<sup>2</sup> T<sup>-1</sup>])." },
  { t: "Dimensionless Constant Example", q: "Give two examples of dimensionless constants.", s: "Pure numerical digits (1, 2, 3) and mathematical constants like π and e." },
  { t: "Absolute Error Definition", q: "Define absolute error in measurement.", s: "Absolute error is the magnitude of difference between the true mean value of a physical quantity and an individual measured value: Δa = |a<sub>m</sub> - a<sub>i</sub>|." },
  { t: "Relative Error Definition", q: "Define relative error.", s: "Relative error is the ratio of mean absolute error to the mean true value of the measured physical quantity: Relative Error = Δa<sub>mean</sub> / a<sub>mean</sub>." },
  { t: "Percentage Error Definition", q: "Define percentage error.", s: "Percentage error is relative error expressed in percentage: Percentage Error = (Δa<sub>mean</sub> / a<sub>mean</sub>) × 100%." },
  { t: "Dimensions of Impulse", q: "State the dimensions of Impulse.", s: "Impulse = Force × Time = [M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>] × [T] = [M<sup>1</sup> L<sup>1</sup> T<sup>-1</sup>]." },
  { t: "Dimensions of Power", q: "State the dimensional formula of Power.", s: "Power = Work / Time = [M<sup>1</sup> L<sup>2</sup> T<sup>-3</sup>]." },
  { t: "Dimensions of Frequency", q: "State the dimensional formula of Frequency.", s: "Frequency = 1 / Time Period = [M<sup>0</sup> L<sup>0</sup> T<sup>-1</sup>]." },
  { t: "Dimensions of Gravitational Constant", q: "State the dimensions of Universal Gravitational Constant G.", s: "Dimensions of G = [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]." },
  { t: "SI Unit of Surface Tension", q: "State the SI unit and dimensional formula of Surface Tension.", s: "SI unit is N m<sup>-1</sup> (or kg s<sup>-2</sup>) and dimensional formula is [M<sup>1</sup> L<sup>0</sup> T<sup>-2</sup>]." },
  { t: "Rule for Addition of Significant Figures", q: "State the rule for significant figures in addition/subtraction.", s: "The final result should retain only as many decimal places as present in the measurement with the least decimal places." },
  { t: "Rule for Multiplication of Significant Figures", q: "State the rule for significant figures in multiplication/division.", s: "The final result should retain only as many significant figures as present in the original measurement with the least significant figures." },
  { t: "Limitation of Dimensional Analysis", q: "State one main limitation of dimensional analysis.", s: "It cannot determine dimensionless proportional constants (like 2π or 1/2) or derive trigonometric/exponential relations." }
];

vsas.forEach((item, idx) => {
  let qNo = idx + 26;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// SAs Q56-Q85: Theoretical & Conceptual Reasoning Mixed with Simple Derivations
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part C: Short Answer Questions (Q56 - Q85)</h3>`;

const sas = [
  { t: "Characteristics of a Standard Unit", q: "What are the four essential characteristics that a standard unit of measurement must possess?", s: "1. <b>Well-Defined:</b> Definition must be clear, precise, and unambiguous.<br>2. <b>Invariable:</b> Must remain constant irrespective of temperature, pressure, or location.<br>3. <b>Easily Reproducible:</b> Must be capable of exact replication globally.<br>4. <b>Universally Accepted:</b> Internationally agreed upon by global scientific consensus." },
  { t: "Explain CGS, FPS, and MKS Systems", q: "Briefly describe the CGS, FPS, and MKS unit systems.", s: "1. <b>CGS System:</b> Metric system based on Centimetre (length), Gram (mass), and Second (time).<br>2. <b>FPS System:</b> Imperial British system based on Foot (length), Pound (mass), and Second (time).<br>3. <b>MKS System:</b> Metric system based on Metre (length), Kilogram (mass), and Second (time)." },
  { t: "Why SI System is Preferred", q: "State three advantages of the SI system over traditional unit systems.", s: "1. <b>Coherent System:</b> All derived units are obtained directly by simple multiplication/division of base units without conversion factors.<br>2. <b>Rational System:</b> Assigns only one specific unit to a given physical quantity (e.g. Joule for all forms of energy).<br>3. <b>Universal Metric System:</b> Based on powers of 10, making calculations and scaling simple." },
  { t: "Explain Systematic Errors and Remedies", q: "What are systematic errors? Classify their types and explain how to minimize them.", s: "Systematic errors are unidirectional errors occurring due to known flaws.<br><b>Types:</b> (i) Instrumental errors (zero error), (ii) Personal errors (parallax), (iii) Imperfection in technique.<br><b>Remedies:</b> Calibrate instruments against standards, correct zero errors, and refine experimental technique." },
  { t: "Explain Random Errors and Least Count Error", q: "What are random errors and least count errors? How are random errors minimized?", s: "<b>Random Errors:</b> Irregular unpredictable variations due to random environmental changes or human reaction time.<br><b>Least Count Error:</b> Uncertainty associated with the resolution limit of the instrument.<br><b>Minimization:</b> Taking arithmetic mean of a large number of repeated measurements." },
  { t: "Check Correctness of s = ut + 1/2 at<sup>2</sup>", q: "Check the dimensional correctness of equation s = u t + " + frac('1', '2') + " a t<sup>2</sup>.", s: "LHS dimension: [s] = [L].<br>RHS Term 1: [u t] = [L T<sup>-1</sup>] × [T] = [L].<br>RHS Term 2: [" + frac('1', '2') + " a t<sup>2</sup>] = [1] × [L T<sup>-2</sup>] × [T<sup>2</sup>] = [L].<br>Since LHS = [L] and each term on RHS = [L], by Principle of Homogeneity, the equation is dimensionally correct!" },
  { t: "Derive Time Period of Simple Pendulum", q: "Derive an expression for time period T of a simple pendulum depending on length l and acceleration due to gravity g.", s: "Let T = k l<sup>a</sup> g<sup>b</sup>.<br>Substitute dimensions: [M<sup>0</sup> L<sup>0</sup> T<sup>1</sup>] = [L]<sup>a</sup> [L T<sup>-2</sup>]<sup>b</sup> = [L<sup>a+b</sup> T<sup>-2b</sup>].<br>Equating powers:<br>- Power of T: -2b = 1 ⇒ b = -" + frac('1', '2') + "<br>- Power of L: a + b = 0 ⇒ a = -b = " + frac('1', '2') + "<br>Hence T = k l<sup>1/2</sup> g<sup>-1/2</sup> = k " + frac('√l', '√g') + " = 2 π " + frac('√l', '√g') + "." },
  { t: "Derive Centripetal Force Relation", q: "Derive expression for centripetal force F acting on a body of mass m moving with velocity v in radius r.", s: "Let F = k m<sup>a</sup> v<sup>b</sup> r<sup>c</sup>.<br>Dimensions: [M L T<sup>-2</sup>] = [M]<sup>a</sup> [L T<sup>-1</sup>]<sup>b</sup> [L]<sup>c</sup> = [M<sup>a</sup> L<sup>b+c</sup> T<sup>-b</sup>].<br>Equating powers:<br>- Mass: a = 1<br>- Time: -b = -2 ⇒ b = 2<br>- Length: b + c = 1 ⇒ 2 + c = 1 ⇒ c = -1<br>Hence F = k m<sup>1</sup> v<sup>2</sup> r<sup>-1</sup> = " + frac('m v<sup>2</sup>', 'r') + "." },
  { t: "Convert 1 Newton into Dynes", q: "Convert 1 Newton (SI unit of Force) into Dynes (CGS unit) using dimensional analysis.", s: "Force formula F = [M L T<sup>-2</sup>].<br>Dimensions: a = 1, b = 1, c = -2.<br>Formula: n<sub>2</sub> = n<sub>1</sub> [M<sub>1</sub>/M<sub>2</sub>]<sup>1</sup> [L<sub>1</sub>/L<sub>2</sub>]<sup>1</sup> [T<sub>1</sub>/T<sub>2</sub>]<sup>-2</sup><br>n<sub>2</sub> = 1 × [1 kg / 1 g]<sup>1</sup> [1 m / 1 cm]<sup>1</sup> [1 s / 1 s]<sup>-2</sup><br>n<sub>2</sub> = 1 × (1000) × (100) × (1) = 10<sup>5</sup>.<br><b>Hence, 1 Newton = 10<sup>5</sup> Dynes.</b>" },
  { t: "Convert 1 Joule into Ergs", q: "Convert 1 Joule (SI unit of Work) into Ergs (CGS unit) using dimensional analysis.", s: "Work formula W = [M L<sup>2</sup> T<sup>-2</sup>].<br>Dimensions: a = 1, b = 2, c = -2.<br>n<sub>2</sub> = 1 × [1 kg / 1 g]<sup>1</sup> [1 m / 1 cm]<sup>2</sup> [1 s / 1 s]<sup>-2</sup><br>n<sub>2</sub> = 1 × (1000) × (100)<sup>2</sup> × (1) = 1000 × 10000 = 10<sup>7</sup>.<br><b>Hence, 1 Joule = 10<sup>7</sup> Ergs.</b>" },
  { t: "Percentage Error in Density Calculation", q: "Mass of a cube is (10.0 ± 0.1) kg and edge length is (2.00 ± 0.01) m. Calculate percentage error in density.", s: "Density ρ = Mass / Volume = " + frac('M', 'L<sup>3</sup>') + ".<br>Percentage error " + frac('Δρ', 'ρ') + " × 100 = " + frac('ΔM', 'M') + " × 100 + 3 (" + frac('ΔL', 'L') + " × 100).<br>Error in M = " + frac('0.1', '10.0') + " × 100 = 1%.<br>Error in L = " + frac('0.01', '2.00') + " × 100 = 0.5%.<br>Total error in density = 1% + 3(0.5%) = 1% + 1.5% = <b>2.5%</b>." },
  { t: "Find Dimensions of Constants a and b in Van der Waals Equation", q: "In Van der Waals equation (P + " + frac('a', 'V<sup>2</sup>') + ") (V - b) = R T, find dimensions of constants a and b.", s: "By Principle of Homogeneity:<br>1. Since b is subtracted from Volume V, [b] = [V] = <b>[M<sup>0</sup> L<sup>3</sup> T<sup>0</sup>]</b>.<br>2. Since " + frac('a', 'V<sup>2</sup>') + " is added to Pressure P, [" + frac('a', 'V<sup>2</sup>') + "] = [P] = [M L<sup>-1</sup> T<sup>-2</sup>].<br>[a] = [P] × [V<sup>2</sup>] = [M L<sup>-1</sup> T<sup>-2</sup>] × [L<sup>6</sup>] = <b>[M L<sup>5</sup> T<sup>-2</sup>]</b>." },
  { t: "Find Dimensions of a, b, c, d in v = a + bt + c/(d+t)", q: "In velocity equation v = a + b t + " + frac('c', 'd + t') + ", find dimensions of a, b, c, d.", s: "1. [a] = [v] = <b>[L T<sup>-1</sup>]</b>.<br>2. [b t] = [v] ⇒ [b] = [v]/[t] = <b>[L T<sup>-2</sup>]</b>.<br>3. In denominator (d + t), d is added to time t, so [d] = [t] = <b>[T]</b>.<br>4. [" + frac('c', 'd+t') + "] = [v] ⇒ [c] / [T] = [L T<sup>-1</sup>] ⇒ [c] = <b>[L]</b>." },
  { t: "Classification of Physical Quantities by Dimensions", q: "Explain the four-way classification of physical quantities based on dimensions with two examples each.", s: "1. <b>Dimensional Variables:</b> Have dimensions and variable values (Velocity, Force).<br>2. <b>Dimensional Constants:</b> Have dimensions and fixed values (Gravitational constant G, Planck's constant h).<br>3. <b>Dimensionless Variables:</b> Variable values but no dimensions (Angle, Strain, Relative density).<br>4. <b>Dimensionless Constants:</b> Fixed values and no dimensions (Pure numbers 1, 2, π, e)." },
  { t: "Explain Parallax Method theoretically", q: "Explain the basic principle of parallax method used for measuring astronomical distances.", s: "Parallax is the apparent change in position of an object relative to a distant background when viewed from two different positions B apart.<br>Angle subtended at target = Parallax angle θ (in radians).<br>Distance D = " + frac('Basis B', 'Parallax Angle θ') + "." },
  { t: "Significant Figures Rules Example", q: "State 4 rules for identifying significant figures with an example for each.", s: "1. Non-zero digits are significant: 423 (3 sig figs).<br>2. Zeros between non-zeros are significant: 5006 (4 sig figs).<br>3. Leading zeros are non-significant: 0.007 (1 sig fig).<br>4. Trailing zeros after decimal are significant: 8.400 (4 sig figs)." },
  { t: "Differentiate Absolute, Relative, and Percentage Error", q: "Explain Absolute Error, Relative Error, and Percentage Error with mathematical expressions.", s: "Let mean value be a<sub>m</sub>.<br>1. Absolute Error Δa<sub>i</sub> = |a<sub>m</sub> - a<sub>i</sub>|.<br>2. Relative Error = " + frac('Mean Absolute Error Δa<sub>mean</sub>', 'Mean Value a<sub>m</sub>') + ".<br>3. Percentage Error = Relative Error × 100%." },
  { t: "Significant Figures in Arithmetic Calculations", q: "Calculate (2.45 × 0.12) to correct significant figures.", s: "2.45 has 3 sig figs, 0.12 has 2 sig figs.<br>Product = 0.294.<br>By multiplication rule, result must be rounded to 2 significant figures: <b>0.29</b>." },
  { t: "Dimensions of Kinetic Energy", q: "Prove dimensionally that Kinetic Energy E<sub>k</sub> = " + frac('1', '2') + " m v<sup>2</sup> has same dimensions as Work.", s: "Kinetic Energy [E<sub>k</sub>] = [m] × [v]<sup>2</sup> = [M] × [L T<sup>-1</sup>]<sup>2</sup> = [M L<sup>2</sup> T<sup>-2</sup>].<br>Work [W] = [Force] × [Distance] = [M L T<sup>-2</sup>] × [L] = [M L<sup>2</sup> T<sup>-2</sup>].<br>Both have identical dimensions <b>[M L<sup>2</sup> T<sup>-2</sup>]</b>." },
  { t: "Dimensions of Frequency of Stretched String", q: "Derive frequency f of a stretched string depending on length L, tension T (force), and mass per unit length m.", s: "Let f = k L<sup>a</sup> T<sup>b</sup> m<sup>c</sup>.<br>[T<sup>-1</sup>] = [L]<sup>a</sup> [M L T<sup>-2</sup>]<sup>b</sup> [M L<sup>-1</sup>]<sup>c</sup> = [M<sup>b+c</sup> L<sup>a+b-c</sup> T<sup>-2b</sup>].<br>- Time: -2b = -1 ⇒ b = " + frac('1', '2') + "<br>- Mass: b + c = 0 ⇒ c = -b = -" + frac('1', '2') + "<br>- Length: a + b - c = 0 ⇒ a + " + frac('1', '2') + " - (-" + frac('1', '2') + ") = 0 ⇒ a + 1 = 0 ⇒ a = -1.<br>Hence f = " + frac('k', 'L') + " " + frac('√T', '√m') + " = " + frac('1', '2L') + " " + frac('√T', '√m') + "." },
  { t: "Check Dimensional Correctness of v<sup>2</sup> - u<sup>2</sup> = 2 a s", q: "Verify dimensional correctness of third equation of motion v<sup>2</sup> - u<sup>2</sup> = 2 a s.", s: "LHS: [v<sup>2</sup>] = [L T<sup>-1</sup>]<sup>2</sup> = [L<sup>2</sup> T<sup>-2</sup>], [u<sup>2</sup>] = [L<sup>2</sup> T<sup>-2</sup>].<br>LHS = [L<sup>2</sup> T<sup>-2</sup>].<br>RHS: [2 a s] = [1] × [L T<sup>-2</sup>] × [L] = [L<sup>2</sup> T<sup>-2</sup>].<br>LHS = RHS = [L<sup>2</sup> T<sup>-2</sup>]. Equation is dimensionally correct!" },
  { t: "Dimensions of Modulus of Elasticity", q: "Derive dimensional formula for Young's Modulus Y.", s: "Young's Modulus Y = Stress / Strain = " + frac('Force / Area', 'Change in Length / Original Length') + ".<br>[Y] = " + frac('[M L T<sup>-2</sup>] / [L<sup>2</sup>]', '[L] / [L]') + " = " + frac('[M L<sup>-1</sup> T<sup>-2</sup>]', '[1]') + " = <b>[M L<sup>-1</sup> T<sup>-2</sup>]</b>." },
  { t: "Dimensions of Angular Momentum", q: "Find dimensions of Angular Momentum L = m v r.", s: "[L] = [m] × [v] × [r] = [M] × [L T<sup>-1</sup>] × [L] = <b>[M L<sup>2</sup> T<sup>-1</sup>]</b>." },
  { t: "Dimensions of Specific Heat Capacity", q: "Derive dimensional formula for Specific Heat Capacity c from Q = m c ΔT.", s: "c = " + frac('Q', 'm ΔT') + " = " + frac('[M L<sup>2</sup> T<sup>-2</sup>]', '[M] [K]') + " = <b>[M<sup>0</sup> L<sup>2</sup> T<sup>-2</sup> K<sup>-1</sup>]</b>." },
  { t: "Dimensions of Stefan's Constant", q: "Find dimensions of Stefan's constant σ from E = σ T<sup>4</sup> (Energy per unit area per unit time).", s: "E = Energy / (Area × Time) = " + frac('[M L<sup>2</sup> T<sup>-2</sup>]', '[L<sup>2</sup>] [T]') + " = [M T<sup>-3</sup>].<br>σ = " + frac('E', 'T<sup>4</sup>') + " = " + frac('[M T<sup>-3</sup>]', '[K<sup>4</sup>]') + " = <b>[M T<sup>-3</sup> K<sup>-4</sup>]</b>." },
  { t: "Dimensions of Universal Gas Constant R", q: "Derive dimensions of Universal Gas Constant R from P V = n R T.", s: "R = P V / (n T) = " + frac('[M L<sup>-1</sup> T<sup>-2</sup>] [L<sup>3</sup>]', '[mol] [K]') + " = <b>[M L<sup>2</sup> T<sup>-2</sup> K<sup>-1</sup> mol<sup>-1</sup>]</b>." },
  { t: "Check Correctness of T = 2π √(m/k)", q: "Verify dimensionally T = 2 π " + frac('√m', '√k') + " where k is spring factor (Force per unit length).", s: "Spring constant k = Force / Length = [M L T<sup>-2</sup>] / [L] = [M T<sup>-2</sup>].<br>RHS: [" + frac('√m', '√k') + "] = [M / (M T<sup>-2</sup>)]<sup>1/2</sup> = [T<sup>2</sup>]<sup>1/2</sup> = [T].<br>LHS = [T]. Equation is dimensionally correct!" },
  { t: "Express 1 g cm<sup>-3</sup> in kg m<sup>-3</sup>", q: "Convert density of water 1 g cm<sup>-3</sup> into SI unit kg m<sup>-3</sup>.", s: "1 g = 10<sup>-3</sup> kg.<br>1 cm<sup>-3</sup> = (10<sup>-2</sup> m)<sup>-3</sup> = 10<sup>6</sup> m<sup>-3</sup>.<br>Density = 1 × 10<sup>-3</sup> kg × 10<sup>6</sup> m<sup>-3</sup> = <b>1000 kg m<sup>-3</sup></b>." },
  { t: "Dimensions of Solar Constant", q: "Find dimensional formula of Solar Constant (Energy received per unit area per unit time).", s: "Solar Constant = Energy / (Area × Time) = " + frac('[M L<sup>2</sup> T<sup>-2</sup>]', '[L<sup>2</sup>] [T]') + " = <b>[M<sup>1</sup> L<sup>0</sup> T<sup>-3</sup>]</b>." },
  { t: "Combination of Fractional Errors", q: "If x = a<sup>3</sup> b<sup>2</sup> / √c, find expression for relative error in x.", s: "Relative error " + frac('Δx', 'x') + " = 3 " + frac('Δa', 'a') + " + 2 " + frac('Δb', 'b') + " + " + frac('1', '2') + " " + frac('Δc', 'c') + "." }
];

sas.forEach((item, idx) => {
  let qNo = idx + 56;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// LAs Q86-Q100: Deep Multi-Part Theoretical Derivations & Analytical Master Problems
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part D: Long Answer Questions (Q86 - Q100)</h3>`;

const las = [
  { t: "Complete Theory of SI System & Base Units", q: "Describe the SI system of units in detail. List all 7 base fundamental quantities with their units, symbols, and official definition bases.", s: "The International System of Units (SI) is a coherent, rationalized decimal metric system adopted globally.<br><br><b>7 Base SI Quantities:</b><br>1. <b>Length (metre, m):</b> Defined by path traveled by light in vacuum in 1/299792458 s.<br>2. <b>Mass (kilogram, kg):</b> Defined by fixing Planck's constant h = 6.62607015 × 10<sup>-34</sup> J s.<br>3. <b>Time (second, s):</b> Defined by 9192631770 periods of radiation of Cs-133 atom.<br>4. <b>Electric Current (ampere, A):</b> Defined by elementary charge e = 1.602176634 × 10<sup>-19</sup> C.<br>5. <b>Thermodynamic Temp (kelvin, K):</b> Defined by Boltzmann constant k = 1.380649 × 10<sup>-23</sup> J K<sup>-1</sup>.<br>6. <b>Amount of Substance (mole, mol):</b> Defined by Avogadro constant N<sub>A</sub> = 6.02214076 × 10<sup>23</sup>.<br>7. <b>Luminous Intensity (candela, cd):</b> Defined by 540 × 10<sup>12</sup> Hz monochromatic source." },
  { t: "Comprehensive Error Analysis & Error Combination Proofs", q: "Explain Systematic and Random errors. Derive mathematical expressions for error combination in (i) Addition, (ii) Multiplication, and (iii) Power raised quantity.", s: "<b>Systematic Errors:</b> Biased errors occurring in one direction due to instrument flaw, personal bias, or imperfect experimental technique.<br><b>Random Errors:</b> Irregular unpredictable fluctuations in environmental factors or observation.<br><br><b>Error Combination Derivations:</b><br><b>(i) Addition Z = A + B:</b><br>Z ± ΔZ = (A ± ΔA) + (B ± ΔB) = (A + B) ± (ΔA + ΔB).<br>Maximum absolute error <b>ΔZ = ΔA + ΔB</b>.<br><br><b>(ii) Multiplication Z = A × B:</b><br>Z ± ΔZ = (A ± ΔA)(B ± ΔB) = A B ± A ΔB ± B ΔA ± ΔA ΔB.<br>Divide both sides by Z = A B:<br>1 ± " + frac('ΔZ', 'Z') + " = 1 ± " + frac('ΔB', 'B') + " ± " + frac('ΔA', 'A') + ".<br>Maximum relative error <b>" + frac('ΔZ', 'Z') + " = " + frac('ΔA', 'A') + " + " + frac('ΔB', 'B') + "</b>.<br><br><b>(iii) Power Quantity Z = A<sup>p</sup>:</b><br>Taking log: ln Z = p ln A. Differentiating: <b>" + frac('ΔZ', 'Z') + " = p " + frac('ΔA', 'A') + "</b>." },
  { t: "Detailed Method of Dimensional Analysis Applications", q: "Explain the three main applications of dimensional analysis with one detailed numerical example for each application.", s: "<b>Application 1: Checking Equation Correctness</b><br>Example: Verify v = u + a t.<br>LHS = [L T<sup>-1</sup>], RHS = [L T<sup>-1</sup>] + [L T<sup>-2</sup>][T] = [L T<sup>-1</sup>]. LHS = RHS.<br><br><b>Application 2: Deriving Relations</b><br>Example: Derive viscous force F = 6π η r v on sphere of radius r moving at velocity v in medium of viscosity η.<br>F = k η<sup>a</sup> r<sup>b</sup> v<sup>c</sup> ⇒ [M L T<sup>-2</sup>] = [M L<sup>-1</sup> T<sup>-1</sup>]<sup>a</sup> [L]<sup>b</sup> [L T<sup>-1</sup>]<sup>c</sup>.<br>a = 1, -a + b + c = 1 ⇒ b = 1, -a - c = -2 ⇒ c = 1.<br>Hence F = 6π η r v.<br><br><b>Application 3: Unit System Conversion</b><br>Convert G = 6.67 × 10<sup>-11</sup> N m<sup>2</sup> kg<sup>-2</sup> to CGS units (cm<sup>3</sup> g<sup>-1</sup> s<sup>-2</sup>).<br>G<sub>CGS</sub> = 6.67 × 10<sup>-11</sup> × (1000 g / 1 g)<sup>-1</sup> (100 cm / 1 cm)<sup>3</sup> (1 s / 1 s)<sup>-2</sup> = <b>6.67 × 10<sup>-8</sup> cm<sup>3</sup> g<sup>-1</sup> s<sup>-2</sup></b>." },
  { t: "Limitations and Failures of Dimensional Analysis", q: "Discuss in detail all the limitations and boundary conditions where dimensional analysis fails.", s: "1. <b>Dimensionless Proportionality Constants:</b> Proportionality constants (like 1/2 in 1/2 mv<sup>2</sup> or 2π in pendulum formula) carry no dimensions and cannot be deduced theoretically.<br>2. <b>More than 3 Base Variables:</b> In mechanics, if a quantity depends on 4 or more independent variables, equating M, L, T yields only 3 linear equations, making unique solution impossible.<br>3. <b>Trigonometric, Exponential & Logarithmic Functions:</b> Functions like sin(ωt), e<sup>-kx</sup>, or log(x) are inherently dimensionless; dimensional analysis cannot handle sum/difference of such functions.<br>4. <b>Sum of Terms:</b> Formulas containing sum of terms (like s = ut + 1/2 at<sup>2</sup>) cannot be derived directly from zero." },
  { t: "Comprehensive Method of Measuring Large Distances", q: "Explain (i) Parallax method for measuring astronomical distances, and (ii) Reflection/Echo method (SONAR/RADAR).", s: "<b>(i) Parallax Method:</b><br>To measure distance D of distant planet P from Earth observatories A and B separated by baseline b:<br>Parallax angle = θ.<br>Since b << D, arc length ≈ b.<br>Angle θ = " + frac('b', 'D') + " ⇒ D = " + frac('b', 'θ') + " (in radians).<br><br><b>(ii) RADAR / Echo Method:</b><br>A high frequency signal is transmitted towards target distance x and reflected echo received after time t.<br>Total distance traveled by signal = 2 x = v × t.<br>Target distance <b>x = " + frac('v × t', '2') + "</b>." },
  { t: "Significant Figures & Rounding Rules Deep Dive", q: "State all rules for determining significant figures, rounding off rules, and arithmetic operation guidelines with illustrative examples.", s: "<b>1. Significant Figures Rules:</b><br>- Non-zero digits are significant (e.g. 14.8 -> 3).<br>- Trapped zeros are significant (e.g. 4005 -> 4).<br>- Leading zeros are NOT significant (e.g. 0.0025 -> 2).<br>- Trailing zeros with decimal are significant (e.g. 5.200 -> 4).<br><br><b>2. Rounding Off Rules:</b><br>- Digit < 5: preceding digit unchanged (3.42 -> 3.4).<br>- Digit > 5: preceding digit increased by 1 (3.47 -> 3.5).<br>- Digit = 5: if preceding is even, unchanged (4.25 -> 4.2); if odd, increased by 1 (4.35 -> 4.4)." },
  { t: "Derivation of Capillary Rise Formula", q: "Derive expression for height h of liquid rise in a capillary tube of radius r, liquid density ρ, surface tension T, and gravity g using dimensional analysis.", s: "Assume capillary height h = k T<sup>a</sup> r<sup>b</sup> ρ<sup>c</sup> g<sup>d</sup>.<br>Dimensions:<br>[L] = [M T<sup>-2</sup>]<sup>a</sup> [L]<sup>b</sup> [M L<sup>-3</sup>]<sup>c</sup> [L T<sup>-2</sup>]<sup>d</sup> = [M<sup>a+c</sup> L<sup>b-3c+d</sup> T<sup>-2a-2d</sup>].<br>Equating powers:<br>1. Mass: a + c = 0 ⇒ c = -a<br>2. Time: -2a - 2d = 0 ⇒ d = -a<br>3. Length: b - 3c + d = 1 ⇒ b - 3(-a) + (-a) = 1 ⇒ b + 2a = 1.<br>For surface tension driven rise, a = 1 ⇒ c = -1, d = -1, b = 1 - 2 = -1.<br>Hence h = " + frac('k T', 'r ρ g') + " = " + frac('2 T cos θ', 'r ρ g') + "." },
  { t: "Derivation of Velocity of Transverse Wave in String", q: "Derive the velocity v of a transverse wave in a stretched string depending on tension T and mass per unit length m.", s: "Let v = k T<sup>a</sup> m<sup>b</sup>.<br>Dimensions: [L T<sup>-1</sup>] = [M L T<sup>-2</sup>]<sup>a</sup> [M L<sup>-1</sup>]<sup>b</sup> = [M<sup>a+b</sup> L<sup>a-b</sup> T<sup>-2a</sup>].<br>- Time: -2a = -1 ⇒ a = " + frac('1', '2') + "<br>- Mass: a + b = 0 ⇒ c = -b = -" + frac('1', '2') + "<br>- Check Length: a - b = " + frac('1', '2') + " - (-" + frac('1', '2') + ") = 1 (Verified).<br>Hence <b>v = " + frac('√T', '√m') + "</b>." },
  { t: "Derivation of Speed of Sound in Gas (Laplace Formula)", q: "Derive expression for speed of sound v in a gas of pressure P and density ρ using dimensional analysis.", s: "Let v = k P<sup>a</sup> ρ<sup>b</sup>.<br>Dimensions: [L T<sup>-1</sup>] = [M L<sup>-1</sup> T<sup>-2</sup>]<sup>a</sup> [M L<sup>-3</sup>]<sup>b</sup> = [M<sup>a+b</sup> L<sup>-a-3b</sup> T<sup>-2a</sup>].<br>- Time: -2a = -1 ⇒ a = " + frac('1', '2') + "<br>- Mass: a + b = 0 ⇒ b = -a = -" + frac('1', '2') + "<br>- Length: -a - 3b = -" + frac('1', '2') + " - 3(-" + frac('1', '2') + ") = 1 (Verified).<br>Hence <b>v = " + frac('√P', '√ρ') + " = " + frac('√(γ P)', '√ρ') + "</b> (where γ is adiabatic index)." },
  { t: "Derivation of Rate of Flow through Capillary (Poiseuille Formula)", q: "Derive volume rate of flow V/t of liquid through capillary tube of radius r under pressure gradient P/l and viscosity η.", s: "Let rate of flow Q = " + frac('V', 't') + " = k r<sup>a</sup> P<sup>b</sup> l<sup>c</sup> η<sup>d</sup>.<br>Dimensions of Q: [L<sup>3</sup> T<sup>-1</sup>].<br>[L<sup>3</sup> T<sup>-1</sup>] = [L]<sup>a</sup> [M L<sup>-1</sup> T<sup>-2</sup>]<sup>b</sup> [L]<sup>c</sup> [M L<sup>-1</sup> T<sup>-1</sup>]<sup>d</sup>.<br>Equating powers:<br>Mass: b + d = 0 ⇒ d = -b<br>Time: -2b - d = -1 ⇒ -2b - (-b) = -1 ⇒ b = 1 ⇒ d = -1.<br>Length: a - b + c - d = 3 ⇒ a - 1 + c - (-1) = 3 ⇒ a + c = 3.<br>Since P and l appear together as pressure gradient P/l, c = -1 ⇒ a = 4.<br>Hence <b>Q = " + frac('π r<sup>4</sup> P', '8 η l') + "</b>." },
  { t: "Error Analysis in Experiment of Simple Pendulum", q: "In simple pendulum experiment, length l = (100 ± 0.1) cm and time for 100 oscillations t = (90 ± 1) s. Calculate percentage error in g.", s: "Formula T = 2π √(l/g) ⇒ g = 4π<sup>2</sup> " + frac('l', 'T<sup>2</sup>') + ".<br>Percentage error in g:<br>" + frac('Δg', 'g') + " × 100 = (" + frac('Δl', 'l') + " × 100) + 2 (" + frac('ΔT', 'T') + " × 100).<br>Error in l = " + frac('0.1', '100') + " × 100 = 0.1%.<br>Error in T = " + frac('1', '90') + " × 100 = 1.11%.<br>Total percentage error in g = 0.1% + 2(1.11%) = 0.1% + 2.22% = <b>2.32%</b>." },
  { t: "Dimensions of Electromagnetic & Thermodynamic Constants", q: "Derive dimensional formulas for: (i) Permittivity of free space ε<sub>0</sub>, (ii) Permeability of free space μ<sub>0</sub>, (iii) Boltzmann constant k.", s: "<b>(i) Permittivity ε<sub>0</sub>:</b><br>From Coulomb's Law F = " + frac('1', '4π ε<sub>0</sub>') + " " + frac('q<sub>1</sub> q<sub>2</sub>', 'r<sup>2</sup>') + ".<br>ε<sub>0</sub> = " + frac('q<sup>2</sup>', 'F r<sup>2</sup>') + " = " + frac('[A T]<sup>2</sup>', '[M L T<sup>-2</sup>] [L<sup>2</sup>]') + " = <b>[M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]</b>.<br><br><b>(ii) Permeability μ<sub>0</sub>:</b><br>From c = 1/√(μ<sub>0</sub> ε<sub>0</sub>) ⇒ μ<sub>0</sub> = 1/(c<sup>2</sup> ε<sub>0</sub>).<br>μ<sub>0</sub> = " + frac('1', '[L T<sup>-1</sup>]<sup>2</sup> [M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]') + " = <b>[M L T<sup>-2</sup> A<sup>-2</sup>]</b>.<br><br><b>(iii) Boltzmann constant k:</b><br>From E = 3/2 k T ⇒ k = E / T = <b>[M L<sup>2</sup> T<sup>-2</sup> K<sup>-1</sup>]</b>." },
  { t: "Derivation of Terminal Velocity (Stokes' Law)", q: "Derive terminal velocity v<sub>t</sub> of sphere of radius r, density ρ falling in fluid of density σ and viscosity η.", s: "Net downward force F = Weight - Buoyancy = " + frac('4', '3') + " π r<sup>3</sup> (ρ - σ) g.<br>Viscous drag force F<sub>v</sub> = 6 π η r v<sub>t</sub>.<br>At terminal velocity F = F<sub>v</sub>:<br>6 π η r v<sub>t</sub> = " + frac('4', '3') + " π r<sup>3</sup> (ρ - σ) g.<br><b>v<sub>t</sub> = " + frac('2 r<sup>2</sup> (ρ - σ) g', '9 η') + "</b>." },
  { t: "Dimensional Correctness of Relativistic Mass", q: "Check dimensional correctness of Einstein's mass variation formula m = " + frac('m<sub>0</sub>', '√(1 - v<sup>2</sup>/c<sup>2</sup>)') + ".", s: "LHS = [m] = [M].<br>RHS Numerator = [m<sub>0</sub>] = [M].<br>RHS Denominator: v<sup>2</sup>/c<sup>2</sup> = [L T<sup>-1</sup>]<sup>2</sup> / [L T<sup>-1</sup>]<sup>2</sup> = [1] (Dimensionless).<br>Hence 1 - v<sup>2</sup>/c<sup>2</sup> is dimensionless [1].<br>RHS = [M] / [1] = [M].<br>LHS = RHS = [M]. Equation is dimensionally valid!" },
  { t: "Master Numerical Problem on Error Propagation", q: "A physical quantity X is calculated using X = " + frac('a<sup>2</sup> b<sup>3</sup>', 'c √d') + ". If percentage errors in a, b, c, d are 2%, 1%, 3%, 4% respectively, calculate maximum percentage error in X.", s: "Fractional error expression:<br>" + frac('Δx', 'x') + " = 2 " + frac('Δa', 'a') + " + 3 " + frac('Δb', 'b') + " + 1 " + frac('Δc', 'c') + " + " + frac('1', '2') + " " + frac('Δd', 'd') + ".<br><br>Substitute percentage errors:<br>Percentage error in X = 2(2%) + 3(1%) + 1(3%) + " + frac('1', '2') + "(4%)<br>= 4% + 3% + 3% + 2% = <b>12%</b>." }
];

las.forEach((item, idx) => {
  let qNo = idx + 86;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

solutionsHtml += `</div>`;

console.log("NoWrap Code Solutions HTML generated successfully.");

// Construct final TS content string
const tsContent = `// Class 11 Physics Unit I: Physical World and Measurement (Units and Measurements)
// High-Level Reference Book Content & NCERT Solutions

export const c11Phy1HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy1HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-1.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote c11-phy-1.ts to " + outputPath);
