// scripts/c11_phy_7_solutions_part2.js
const { themeColor, frac } = require('./c11_phy_7_helpers');

const solutionsPart2 = `
<!-- SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS) (Q41 TO Q80) -->
<div style="margin-top: 35px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid ${themeColor};">
  <h2 style="color: ${themeColor}; font-size: 20px; margin: 0;">SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS)</h2>
  <p style="color: #94A3B8; font-size: 13px; margin: 4px 0 0 0;">Comprehensive board numericals, conceptual reasoning, 2-mark derivations, and analytical comparisons across Solids, Fluids, and Thermal Physics.</p>
</div>

<!-- SOLIDS SA QUESTIONS (Q41 to Q52) -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q41: Why is Steel More Elastic Than Rubber? Provide Mathematical Proof</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> By considering two wires of equal length and cross-sectional area—one made of steel and the other of rubber—subjected to the same stretching force, prove mathematically why steel is regarded as more elastic than rubber in physics.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Let two wires of steel and rubber have identical original length $L$ and identical cross-sectional area $A$. Let equal stretching force $F$ be applied to each wire.<br/>
    The elongation produced in the steel wire is $\\Delta L_s$ and in the rubber wire is $\\Delta L_r$. Young's modulus for each material is:
    $$Y_s = \\frac{F \\cdot L}{A \\cdot \\Delta L_s} \\quad \\text{and} \\quad Y_r = \\frac{F \\cdot L}{A \\cdot \\Delta L_r}$$
    Dividing the two equations gives:
    $$\\frac{Y_s}{Y_r} = \\frac{\\Delta L_r}{\\Delta L_s}$$
    Experimentally, for the same deforming force, rubber stretches vastly more than steel, i.e., $\\Delta L_r \\gg \\Delta L_s$. Therefore:
    $$\\frac{Y_s}{Y_r} > 1 \\implies Y_s > Y_r$$
    In physics, elasticity is measured by the magnitude of restoring force developed per unit strain (measured by modulus of elasticity), not by how easily an object stretches. Since steel offers greater restoring stress and resists deformation much more strongly, steel is strictly more elastic than rubber.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q42: Calculation of Elongation of a Suspended Steel Wire Under Load</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A steel wire of length 2.0 m and radius 1.0 mm is clamped firmly at one end and carries a mass of 4.0 kg suspended at its free end. Calculate the elongation produced in the wire. Take $g = 9.8\\text{ m/s}^{2}$ and $Y_{\\text{steel}} = 2.0 \\times 10^{11}\\text{ N/m}^{2}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given:
    Original length $L = 2.0\\text{ m}$, radius $r = 1.0\\text{ mm} = 1.0 \\times 10^{-3}\\text{ m}$.<br/>
    Cross-sectional area $A = \\pi r^{2} = 3.1416 \\times (10^{-3})^{2} = 3.1416 \\times 10^{-6}\\text{ m}^{2}$.<br/>
    Stretching force $F = mg = 4.0 \\times 9.8 = 39.2\\text{ N}$.<br/>
    Young's modulus $Y = 2.0 \\times 10^{11}\\text{ N/m}^{2}$.<br/>
    Using the formula for Young's modulus:
    $$Y = \\frac{F \\cdot L}{A \\cdot \\Delta L} \\implies \\Delta L = \\frac{F \\cdot L}{A \\cdot Y}$$
    Substituting the values:
    $$\\Delta L = \\frac{39.2 \\times 2.0}{(3.1416 \\times 10^{-6}) \\times (2.0 \\times 10^{11})} = \\frac{78.4}{6.2832 \\times 10^{5}} \\approx 1.25 \\times 10^{-4}\\text{ m} = 0.125\\text{ mm}$$
    Hence, the elongation produced in the steel wire is <strong>$0.125\\text{ mm}$</strong> (or $1.25 \\times 10^{-4}\\text{ m}$).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q43: Calculation of Work Done in Stretching a Wire and Energy Density</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A copper wire of length 3 m and cross-sectional area $1.5\\text{ mm}^{2}$ is stretched by a force of 150 N. If Young's modulus of copper is $1.2 \\times 10^{11}\\text{ N/m}^{2}$, calculate: (i) the elongation of the wire, (ii) the work done in stretching the wire, and (iii) the elastic potential energy stored per unit volume.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $L = 3\\text{ m}$, $A = 1.5\\text{ mm}^{2} = 1.5 \\times 10^{-6}\\text{ m}^{2}$, $F = 150\\text{ N}$, $Y = 1.2 \\times 10^{11}\\text{ N/m}^{2}$.<br/>
    <strong>(i) Elongation:</strong>
    $$\\Delta L = \\frac{F \\cdot L}{A \\cdot Y} = \\frac{150 \\times 3}{(1.5 \\times 10^{-6}) \\times (1.2 \\times 10^{11})} = \\frac{450}{1.8 \\times 10^{5}} = 2.5 \\times 10^{-3}\\text{ m} = 2.5\\text{ mm}$$
    <strong>(ii) Work Done (Elastic Potential Energy):</strong>
    $$W = \\frac{1}{2} F \\cdot \\Delta L = \\frac{1}{2} \\times 150 \\times (2.5 \\times 10^{-3}) = 0.1875\\text{ J}$$
    <strong>(iii) Energy Density (energy per unit volume):</strong>
    $$u = \\frac{W}{\\text{Volume}} = \\frac{W}{A \\cdot L} = \\frac{0.1875}{(1.5 \\times 10^{-6}) \\times 3} = \\frac{0.1875}{4.5 \\times 10^{-6}} \\approx 41,667\\text{ J/m}^{3} = 4.17 \\times 10^{4}\\text{ J/m}^{3}$$
    Alternatively: $u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain} = \\frac{1}{2} \\times \\left(\\frac{150}{1.5 \\times 10^{-6}}\\right) \\times \\left(\\frac{2.5 \\times 10^{-3}}{3}\\right) = 4.17 \\times 10^{4}\\text{ J/m}^{3}$.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q44: Bulk Modulus and Fractional Compression of Water at Ocean Depths</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> The bulk modulus of water is $2.1 \\times 10^{9}\\text{ N/m}^{2}$. Compute the fractional compression ($\\Delta V / V$) of a volume of water at a depth in the ocean where the hydrostatic pressure is $2.0 \\times 10^{7}\\text{ N/m}^{2}$ (roughly 200 atmospheres). By what percentage does the volume decrease?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: Bulk modulus $B = 2.1 \\times 10^{9}\\text{ N/m}^{2}$, increase in pressure $\\Delta P = 2.0 \\times 10^{7}\\text{ N/m}^{2}$.<br/>
    By definition of Bulk modulus:
    $$B = -\\frac{\\Delta P}{\\Delta V / V} \\implies \\left|\\frac{\\Delta V}{V}\\right| = \\frac{\\Delta P}{B}$$
    Substituting the given values:
    $$\\left|\\frac{\\Delta V}{V}\\right| = \\frac{2.0 \\times 10^{7}}{2.1 \\times 10^{9}} = \\frac{2.0}{210} \\approx 9.52 \\times 10^{-3} = 0.00952$$
    Percentage decrease in volume:
    $$\\% \\text{ decrease} = \\left|\\frac{\\Delta V}{V}\\right| \\times 100\\% = 0.00952 \\times 100\\% \\approx 0.952\\%$$
    This remarkably small volume decrease (less than 1%) demonstrates why liquids are treated as practically incompressible in ordinary fluid mechanics.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q45: Distinguish Between Ductile, Brittle, and Elastomeric Materials</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Differentiate clearly between ductile materials, brittle materials, and elastomers on the basis of their stress-strain behavior, plastic deformation region, and give two engineering or biological examples of each.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Ductile Materials:</b> These materials possess a large plastic deformation range between the elastic limit and the fracture point. They can be drawn into thin wires or sheets without fracturing (e.g., mild steel, copper, aluminium, gold).<br/>
    <b style="color: ${themeColor};">2. Brittle Materials:</b> These materials fracture almost immediately after exceeding the elastic limit with virtually zero plastic deformation range. The yield point and breaking point are very close together (e.g., cast iron, glass, ceramic, chalk).<br/>
    <b style="color: ${themeColor};">3. Elastomers:</b> These materials can undergo enormous elastic strains (several hundred percent) reversibly, but do not obey Hooke's law over most of the range, showing non-linear stress-strain curves with pronounced elastic hysteresis (e.g., vulcanized rubber, tissue of aorta).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q46: Poisson's Ratio: Definition, Theoretical vs Practical Limits</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define Poisson's ratio ($\\sigma$). Explain why a stretching force causes lateral contraction. State the theoretical limits of Poisson's ratio and its practical range for ordinary engineering materials.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    When a deforming longitudinal tensile force is applied to a cylindrical wire of original length $L$ and diameter $D$, its length increases by $\\Delta L$ while its diameter simultaneously contracts by $\\Delta D$.<br/>
    <b style="color: ${themeColor};">Definition:</b> Within the elastic limit, the ratio of lateral strain to longitudinal strain is constant for a given material and is known as <strong>Poisson's ratio</strong> ($\\sigma$):
    $$\\sigma = \\frac{\\text{Lateral Strain}}{\\text{Longitudinal Strain}} = -\\frac{\\Delta D / D}{\\Delta L / L}$$
    The negative sign signifies that when length increases ($\\Delta L > 0$), the lateral dimension decreases ($\\Delta D < 0$).<br/>
    <b style="color: ${themeColor};">Theoretical Limits:</b> From classical elasticity theory of isotropic solids, $-1.0 \\le \\sigma \\le +0.5$.<br/>
    <b style="color: ${themeColor};">Practical Limits:</b> For all standard natural solid materials, lateral dimensions decrease during tensile elongation, so $\\sigma$ is positive. The practical range for engineering materials (steel, brass, copper, aluminium) is <strong>$0.20 \\le \\sigma \\le 0.40$</strong>. For ideal incompressible materials (like rubber), $\\sigma \\approx 0.50$, while for cork $\\sigma \\approx 0$.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q47: Why are Heavy Structural Girders Shaped as I-Beams (I-Section)?</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> In the construction of bridges and multi-storey buildings, structural steel girders are designed with an I-shaped cross-section rather than a solid rectangular cross-section. Explain the physical and mathematical reasons behind this design.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    When a horizontal girder of length $L$, breadth $b$, and depth $d$ supported at both ends carries a central load $W$, the vertical sag or depression $\\delta$ at its center is given by:
    $$\\delta = \\frac{W \\cdot L^{3}}{4 Y b d^{3}}$$
    From this formula:<br/>
    1. Depression $\\delta$ is inversely proportional to the cube of depth ($d^{3}$), whereas it is inversely proportional to breadth ($b$) only to the first power. Thus, increasing depth is vastly more effective in reducing depression and preventing bending than increasing width.<br/>
    2. However, a deep, narrow rectangular bar has a tendency to buckle sideways under heavy vertical loads.<br/>
    3. During bending, maximum compressive stress occurs at the top surface, maximum tensile stress occurs at the bottom surface, and stress at the central neutral layer is practically zero.<br/>
    Therefore, in an <strong>I-section girder</strong>, large flanges are provided at the top and bottom (where stresses are highest) connected by a thinner central vertical web. This maximizes resistance to bending, provides lateral stability against buckling, and significantly reduces the weight and cost of the girder.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q48: Breaking Stress vs Breaking Force for Thick vs Thin Wires</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A heavy load is supported by a wire of radius $r$. If the radius of the wire is doubled, what will be the effect on: (i) the breaking stress of the material, and (ii) the maximum load (breaking load) the wire can support without breaking?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <strong>(i) Breaking Stress:</strong> Breaking stress is an intensive property of the material dependent solely on interatomic bonding and metallurgical structure. It is strictly independent of the dimensions (length or radius) of the wire. Therefore, when the radius of the wire is doubled, the breaking stress <strong>remains unchanged</strong>.<br/>
    <strong>(ii) Maximum Breaking Load:</strong> The breaking load $F_{\\text{break}}$ is given by:
    $$F_{\\text{break}} = \\text{Breaking Stress} \\times A = \\text{Breaking Stress} \\times (\\pi r^{2})$$
    Since area $A \\propto r^{2}$, doubling the radius ($r' = 2r$) increases the cross-sectional area by a factor of $2^{2} = 4$.<br/>
    Consequently, the maximum breaking load becomes:
    $$F'_{\\text{break}} = 4 \\cdot F_{\\text{break}}$$
    The maximum load the wire can sustain without breaking increases by <strong>4 times</strong> (four-fold).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q49: Calculation of Lateral Strain and Change in Diameter Using Poisson's Ratio</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A brass rod of diameter 10 mm and length 1.0 m is subjected to a tensile force that causes a longitudinal elongation of 0.5 mm. If Poisson's ratio for brass is 0.35, determine: (i) the longitudinal strain, (ii) the lateral strain, and (iii) the change in the diameter of the rod.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $D = 10\\text{ mm} = 1.0 \\times 10^{-2}\\text{ m}$, $L = 1.0\\text{ m}$, $\\Delta L = 0.5\\text{ mm} = 5.0 \\times 10^{-4}\\text{ m}$, $\\sigma = 0.35$.<br/>
    <strong>(i) Longitudinal Strain:</strong>
    $$\\epsilon_{\\text{long}} = \\frac{\\Delta L}{L} = \\frac{5.0 \\times 10^{-4}}{1.0} = 5.0 \\times 10^{-4}$$
    <strong>(ii) Lateral Strain:</strong>
    From $\\sigma = \\frac{\\epsilon_{\\text{lat}}}{\\epsilon_{\\text{long}}}$, we have:
    $$\\epsilon_{\\text{lat}} = \\sigma \\times \\epsilon_{\\text{long}} = 0.35 \\times (5.0 \\times 10^{-4}) = 1.75 \\times 10^{-4}$$
    <strong>(iii) Change in Diameter:</strong>
    $$\\epsilon_{\\text{lat}} = \\frac{|\\Delta D|}{D} \\implies |\\Delta D| = \\epsilon_{\\text{lat}} \\times D = (1.75 \\times 10^{-4}) \\times 10\\text{ mm} = 1.75 \\times 10^{-3}\\text{ mm} = 1.75\\text{ }\\mu\\text{m}$$
    Since elongation causes lateral contraction, the diameter decreases by <strong>$1.75 \\times 10^{-3}\\text{ mm}$</strong>.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q50: Shear Modulus of Rigidity: Physical Intuition and Displaced Faces</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A metallic cube of side 10 cm has its bottom face rigidly clamped to a tabletop. A tangential horizontal force of $5.0 \\times 10^{4}\\text{ N}$ is applied to its top face. If the shear modulus of the metal is $2.5 \\times 10^{10}\\text{ N/m}^{2}$, calculate: (i) the shearing stress, (ii) the shear strain (in radians), and (iii) the lateral displacement of the top edge relative to the bottom face.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: Side of cube $L = 10\\text{ cm} = 0.10\\text{ m}$. Area of top face $A = L^{2} = (0.10)^{2} = 0.01\\text{ m}^{2} = 10^{-2}\\text{ m}^{2}$.<br/>
    Tangential force $F = 5.0 \\times 10^{4}\\text{ N}$, shear modulus $G = 2.5 \\times 10^{10}\\text{ N/m}^{2}$.<br/>
    <strong>(i) Shearing Stress:</strong>
    $$\\sigma_s = \\frac{F}{A} = \\frac{5.0 \\times 10^{4}}{10^{-2}} = 5.0 \\times 10^{6}\\text{ N/m}^{2}$$
    <strong>(ii) Shearing Strain ($\\theta$):</strong>
    $$G = \\frac{\\sigma_s}{\\theta} \\implies \\theta = \\frac{\\sigma_s}{G} = \\frac{5.0 \\times 10^{6}}{2.5 \\times 10^{10}} = 2.0 \\times 10^{-4}\\text{ radians}$$
    <strong>(iii) Lateral Displacement ($\\Delta x$):</strong>
    $$\\theta \\approx \\frac{\\Delta x}{L} \\implies \\Delta x = \\theta \\cdot L = (2.0 \\times 10^{-4}) \\times 0.10 = 2.0 \\times 10^{-5}\\text{ m} = 0.02\\text{ mm}$$
    The top edge is laterally displaced by <strong>$0.02\\text{ mm}$</strong> ($20\\text{ }\\mu\\text{m}$).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q51: Explain Elastic After-Effect and Elastic Fatigue with Real-World Examples</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Clearly explain: (i) Elastic after-effect, and (ii) Elastic fatigue. Why are railway bridges declared unsafe after prolonged service of 50 to 60 years?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">(i) Elastic After-Effect:</b> The temporary time delay in recovering original dimensions completely after the removal of deforming forces is known as the elastic after-effect. For substances like phosphor-bronze and quartz, this delay is virtually zero, making them ideal suspension fibers in moving-coil galvanometers.<br/>
    <b style="color: ${themeColor};">(ii) Elastic Fatigue:</b> The progressive loss of elastic strength and resilience of a material subjected to repeated, alternating cyclic stresses over a prolonged duration is called elastic fatigue. Under continuous cycles of loading and unloading, micro-cracks develop in the crystal lattice.<br/>
    <b style="color: ${themeColor};">Bridge Safety:</b> A railway bridge undergoes continuous cyclic loading every time trains pass over it. After 50–60 years of millions of stress cycles, the structural steel suffers from severe elastic fatigue, reducing its elastic limit and fracture threshold. Therefore, bridges are retired to prevent catastrophic collapse under normal operational loads.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q52: Two Wires of Different Materials in Series: Equivalent Elongation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A steel wire and a brass wire, both of equal length 1.5 m and diameter 2.0 mm, are connected end-to-end to form a composite wire of length 3.0 m. A tensile load of 100 N is applied. Find: (i) the elongation of each wire, and (ii) the total elongation. ($Y_{\\text{steel}} = 2.0 \\times 10^{11}\\text{ N/m}^{2}$, $Y_{\\text{brass}} = 1.0 \\times 10^{11}\\text{ N/m}^{2}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Both wires carry the identical tension force $F = 100\\text{ N}$ because they are in series.<br/>
    Common radius $r = 1.0\\text{ mm} = 10^{-3}\\text{ m} \\implies A = \\pi r^{2} = 3.1416 \\times 10^{-6}\\text{ m}^{2}$. Length $L = 1.5\\text{ m}$.<br/>
    <strong>(i) Elongations:</strong>
    $$\\Delta L_s = \\frac{F \\cdot L}{A \\cdot Y_s} = \\frac{100 \\times 1.5}{(3.1416 \\times 10^{-6}) \\times (2.0 \\times 10^{11})} = \\frac{150}{6.2832 \\times 10^{5}} \\approx 2.39 \\times 10^{-4}\\text{ m} = 0.239\\text{ mm}$$
    $$\\Delta L_b = \\frac{F \\cdot L}{A \\cdot Y_b} = \\frac{100 \\times 1.5}{(3.1416 \\times 10^{-6}) \\times (1.0 \\times 10^{11})} = \\frac{150}{3.1416 \\times 10^{5}} \\approx 4.77 \\times 10^{-4}\\text{ m} = 0.477\\text{ mm}$$
    <strong>(ii) Total Elongation:</strong>
    $$\\Delta L_{\\text{total}} = \\Delta L_s + \\Delta L_b = 0.239\\text{ mm} + 0.477\\text{ mm} = 0.716\\text{ mm}$$
  </div>
</div>

<!-- FLUIDS SA QUESTIONS (Q53 to Q68) -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q53: Working Principle and Mechanical Advantage of a Hydraulic Lift</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain the working principle of a hydraulic lift using Pascal's law. If the area of the smaller piston is $5\\text{ cm}^{2}$ and that of the larger piston is $250\\text{ cm}^{2}$, calculate the force required on the smaller piston to lift an automobile of mass 1500 kg ($g = 9.8\\text{ m/s}^{2}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Principle:</b> A hydraulic lift operates on <strong>Pascal's Principle</strong>: any pressure applied to an enclosed incompressible fluid is transmitted equally and undiminished to every point of the fluid and the container walls.<br/>
    Let force $F_1$ be applied to smaller piston of area $A_1$. The pressure generated is $P_1 = F_1 / A_1$. This pressure is transmitted to the larger piston of area $A_2$, producing upward lifting force:
    $$F_2 = P_1 \\times A_2 = F_1 \\times \\left(\\frac{A_2}{A_1}\\right)$$
    The mechanical advantage is $MA = \\frac{A_2}{A_1}$.<br/>
    <b style="color: ${themeColor};">Numerical Calculation:</b><br/>
    Weight to lift $F_2 = mg = 1500 \\times 9.8 = 14,700\\text{ N}$.<br/>
    Area ratio $\\frac{A_2}{A_1} = \\frac{250\\text{ cm}^{2}}{5\\text{ cm}^{2}} = 50$.<br/>
    Force required on small piston:
    $$F_1 = \\frac{F_2}{A_2 / A_1} = \\frac{14,700}{50} = 294\\text{ N}$$
    Thus, a modest force of only <strong>294 N</strong> lifts a heavy 1500 kg automobile.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q54: Hydrostatic Pressure at the Bottom of Mariana Trench</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> The Mariana Trench is located in the Pacific Ocean at a depth of about 11.0 km below the water surface. If the average density of seawater is $1030\\text{ kg/m}^{3}$ and atmospheric pressure is $1.01 \\times 10^{5}\\text{ Pa}$, calculate: (i) the gauge pressure, and (ii) the absolute total pressure at this depth. ($g = 9.8\\text{ m/s}^{2}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: Depth $h = 11.0\\text{ km} = 11,000\\text{ m}$, $\\rho = 1030\\text{ kg/m}^{3}$, $P_{\\text{atm}} = 1.01 \\times 10^{5}\\text{ Pa}$, $g = 9.8\\text{ m/s}^{2}$.<br/>
    <strong>(i) Gauge Pressure ($P_g$):</strong>
    $$P_g = \\rho g h = 1030 \\times 9.8 \\times 11,000 = 1.11034 \\times 10^{8}\\text{ Pa} \\approx 1.11 \\times 10^{8}\\text{ Pa}$$
    <strong>(ii) Absolute Total Pressure ($P$):</strong>
    $$P = P_{\\text{atm}} + P_g = 1.01 \\times 10^{5} + 1.11034 \\times 10^{8} = 1.11135 \\times 10^{8}\\text{ Pa} \\approx 1.11 \\times 10^{8}\\text{ Pa}$$
    Expressed in atmospheres ($1\\text{ atm} = 1.013 \\times 10^{5}\\text{ Pa}$):
    $$P \\approx \\frac{1.11135 \\times 10^{8}}{1.013 \\times 10^{5}} \\approx 1097\\text{ atmospheres}$$
    This massive pressure is approximately 1100 times atmospheric pressure at sea level.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q55: U-Tube Manometer with Immiscible Liquids</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A U-tube contains water and methylated spirit separated by mercury. In one arm, a column of 10.0 cm of water is poured, and in the other arm, spirit is poured until the mercury surfaces in both arms are at the same horizontal level. If the spirit column height is 12.5 cm, determine the specific gravity (relative density) of the spirit.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Since the mercury surfaces in both limbs are at the identical horizontal level, the pressures exerted by the liquid columns on the two sides of the mercury must balance each other:<br/>
    $$P_{\\text{water limb}} = P_{\\text{spirit limb}}$$
    $$P_{\\text{atm}} + h_w \\rho_w g = P_{\\text{atm}} + h_s \\rho_s g$$
    Subtracting atmospheric pressure $P_{\\text{atm}}$ and dividing by $g$:
    $$h_w \\rho_w = h_s \\rho_s \\implies \\frac{\\rho_s}{\\rho_w} = \\frac{h_w}{h_s}$$
    Given $h_w = 10.0\\text{ cm}$ and $h_s = 12.5\\text{ cm}$:
    $$\\text{Specific Gravity of Spirit} = \\frac{\\rho_s}{\\rho_w} = \\frac{10.0\\text{ cm}}{12.5\\text{ cm}} = 0.80$$
    Hence, the relative density of the methylated spirit is <strong>0.80</strong> (and its density is $800\\text{ kg/m}^{3}$).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q56: Calculation of Terminal Velocity of a Falling Raindrop</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Calculate the terminal velocity of a spherical raindrop of radius 0.2 mm falling through air. The density of air is $1.2\\text{ kg/m}^{3}$, density of water is $1000\\text{ kg/m}^{3}$, viscosity of air is $1.8 \\times 10^{-5}\\text{ Pa}\\cdot\\text{s}$, and $g = 9.8\\text{ m/s}^{2}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $r = 0.2\\text{ mm} = 2.0 \\times 10^{-4}\\text{ m}$, $\\rho = 1000\\text{ kg/m}^{3}$, $\\sigma = 1.2\\text{ kg/m}^{3}$, $\\eta = 1.8 \\times 10^{-5}\\text{ Pa}\\cdot\\text{s}$.<br/>
    Terminal velocity formula:
    $$v_t = \\frac{2}{9} \\frac{r^{2}(\\rho - \\sigma)g}{\\eta}$$
    Substituting the values:
    $$v_t = \\frac{2}{9} \\times \\frac{(2.0 \\times 10^{-4})^{2} \\times (1000 - 1.2) \\times 9.8}{1.8 \\times 10^{-5}}$$
    $$v_t = \\frac{2}{9} \\times \\frac{(4.0 \\times 10^{-8}) \\times 998.8 \\times 9.8}{1.8 \\times 10^{-5}} = \\frac{2 \\times 3.915 \\times 10^{-4}}{1.62 \\times 10^{-4}} \\approx 4.83\\text{ m/s}$$
    The terminal speed of the raindrop is approximately <strong>$4.83\\text{ m/s}$</strong>.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q57: Reynolds Number and Prediction of Streamline vs Turbulent Flow</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Water flows through a horizontal pipe of internal diameter 2.0 cm at a rate of 3.0 liters per minute. Determine the speed of water and calculate the Reynolds number. Is the flow laminar, transition, or turbulent? (Take $\\eta_{\\text{water}} = 1.0 \\times 10^{-3}\\text{ Pa}\\cdot\\text{s}$, $\\rho = 1000\\text{ kg/m}^{3}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Diameter $D = 2.0\\text{ cm} = 0.02\\text{ m}$, radius $r = 0.01\\text{ m}$.<br/>
    Cross-sectional area $A = \\pi r^{2} = 3.1416 \\times (0.01)^{2} = 3.1416 \\times 10^{-4}\\text{ m}^{2}$.<br/>
    Volume flow rate $Q = 3.0\\text{ L/min} = \\frac{3.0 \\times 10^{-3}\\text{ m}^{3}}{60\\text{ s}} = 5.0 \\times 10^{-5}\\text{ m}^{3}/\\text{s}$.<br/>
    Speed of flow $v = \\frac{Q}{A} = \\frac{5.0 \\times 10^{-5}}{3.1416 \\times 10^{-4}} \\approx 0.159\\text{ m/s}$.<br/>
    Reynolds number ($R_e$):
    $$R_e = \\frac{\\rho v D}{\\eta} = \\frac{1000 \\times 0.159 \\times 0.02}{1.0 \\times 10^{-3}} = 3180$$
    Since $2000 < R_e < 3000-4000$, the flow is in the <strong>transition (unstable) regime</strong> between laminar streamline and turbulent flow.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q58: Venturimeter: Formula for Flow Speed and Volume Rate</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A horizontal pipeline of cross-sectional area $40\\text{ cm}^{2}$ carries water. At a constriction (throat), the cross-sectional area narrows to $20\\text{ cm}^{2}$. A differential manometer connected between the main pipe and throat shows a height difference of 5.0 cm of water. Calculate the speed of water in the main pipe and the volume discharge rate ($g = 9.8\\text{ m/s}^{2}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Let $A_1 = 40\\text{ cm}^{2} = 4.0 \\times 10^{-3}\\text{ m}^{2}$, $A_2 = 20\\text{ cm}^{2} = 2.0 \\times 10^{-3}\\text{ m}^{2}$.<br/>
    Height difference in water manometer $h = 5.0\\text{ cm} = 0.05\\text{ m}$. Pressure difference $P_1 - P_2 = \\rho g h$.<br/>
    From Bernoulli's theorem and equation of continuity ($v_2 = \\frac{A_1}{A_2} v_1 = 2 v_1$):
    $$P_1 - P_2 = \\frac{1}{2}\\rho (v_2^{2} - v_1^{2}) = \\frac{1}{2}\\rho [(2v_1)^{2} - v_1^{2}] = \\frac{3}{2}\\rho v_1^{2}$$
    Equating to $\\rho g h$:
    $$\\rho g h = \\frac{3}{2}\\rho v_1^{2} \\implies v_1 = \\sqrt{\\frac{2gh}{3}}$$
    Substituting $g = 9.8\\text{ m/s}^{2}$, $h = 0.05\\text{ m}$:
    $$v_1 = \\sqrt{\\frac{2 \\times 9.8 \\times 0.05}{3}} = \\sqrt{\\frac{0.98}{3}} = \\sqrt{0.3267} \\approx 0.572\\text{ m/s}$$
    Volume discharge rate:
    $$Q = A_1 v_1 = (4.0 \\times 10^{-3}) \\times 0.572 \\approx 2.29 \\times 10^{-3}\\text{ m}^{3}/\\text{s} = 2.29\\text{ L/s}$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q59: Torricelli's Law of Efflux and Calculation of Liquid Range</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A tall cylindrical water tank open at the top has a small puncture hole of diameter 2 mm punched in its side wall at a depth of 4.9 m below the free water surface. Calculate: (i) the velocity of efflux of water escaping from the hole, and (ii) the volume of water flowing out per second ($g = 9.8\\text{ m/s}^{2}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <strong>(i) Velocity of Efflux:</strong>
    By Torricelli's Law, the speed of efflux from an open container orifice at depth $h$ is:
    $$v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 4.9} = \\sqrt{96.04} = 9.8\\text{ m/s}$$
    <strong>(ii) Volume Flow Rate:</strong>
    Radius of hole $r = 1\\text{ mm} = 10^{-3}\\text{ m}$. Area $a = \\pi r^{2} = 3.1416 \\times 10^{-6}\\text{ m}^{2}$.
    $$Q = a \\cdot v = (3.1416 \\times 10^{-6}) \\times 9.8 \\approx 3.08 \\times 10^{-5}\\text{ m}^{3}/\\text{s} = 30.8\\text{ cm}^{3}/\\text{s}$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q60: Dynamic Lift on an Aeroplane Wing (Aerofoil) Explained by Bernoulli</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain how the aerodynamic shape of an airplane wing (aerofoil) produces upward dynamic lift during horizontal flight using Bernoulli's theorem.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    An airplane wing is designed with an asymmetric aerodynamic cross-section (aerofoil) where the upper surface is curved convexly while the lower surface is relatively flat.<br/>
    1. During flight, air dividing at the leading edge travels faster over the curved upper surface than underneath the flatter lower surface ($v_{\\text{top}} > v_{\\text{bottom}}$).<br/>
    2. According to <strong>Bernoulli's Equation</strong>:
    $$P + \\frac{1}{2}\\rho v^{2} = \\text{constant}$$
    Regions of higher air speed experience lower static pressure. Consequently, static pressure on top of the wing drops below that under the bottom of the wing ($P_{\\text{top}} < P_{\\text{bottom}}$).<br/>
    3. This net upward pressure difference $\\Delta P = P_{\\text{bottom}} - P_{\\text{top}}$ acts over the total wing surface area $A$, generating an upward resultant aerodynamic force called <strong>dynamic lift</strong>:
    $$F_{\\text{lift}} = \\Delta P \\cdot A = \\frac{1}{2}\\rho (v_{\\text{top}}^{2} - v_{\\text{bottom}}^{2}) A$$
    When dynamic lift equals the aircraft weight, level flight is maintained.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q61: Magnus Effect: Deviation in Path of a Spinning Ball</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is the Magnus effect? Explain with a neat conceptual explanation why a spinning cricket or tennis ball curves in mid-air away from its parabolic trajectory.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Magnus Effect:</b> The dynamic lateral force experienced by a spinning cylinder or sphere translating through a fluid, causing its trajectory to curve, is known as the <strong>Magnus Effect</strong>.<br/>
    <b style="color: ${themeColor};">Mechanism:</b><br/>
    1. When a ball spins with topspin while flying forward through air, friction between the rough ball surface and adjacent air drags a thin layer of air around with it.<br/>
    2. On the top side of the ball, the rotational motion opposes the oncoming airstream, reducing the relative airspeed ($v_{\\text{top}} = v - v_{\\text{spin}}$).<br/>
    3. On the bottom side, the rotational motion acts in the same direction as the oncoming airstream, accelerating the relative airspeed ($v_{\\text{bottom}} = v + v_{\\text{spin}}$).<br/>
    4. By Bernoulli's principle, higher velocity on the bottom creates lower pressure, while lower velocity on the top creates higher pressure ($P_{\\text{top}} > P_{\\text{bottom}}$).<br/>
    5. This downward pressure difference forces the ball to dip downwards much faster than gravity alone, producing sharp late dip (or lateral swerve in sideways swing bowling).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q62: Excess Pressure Inside Soap Bubble vs Water Drop Calculation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Find the excess pressure inside: (i) a spherical water drop of radius 1.5 mm, and (ii) a soap bubble of the same radius. Take the surface tension of water as $0.075\\text{ N/m}$ and that of soap solution as $0.030\\text{ N/m}$. Why does a soap bubble have double the factor in its excess pressure formula?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $R = 1.5\\text{ mm} = 1.5 \\times 10^{-3}\\text{ m}$, $T_{\\text{water}} = 0.075\\text{ N/m}$, $T_{\\text{soap}} = 0.030\\text{ N/m}$.<br/>
    <strong>(i) Water Drop (1 free liquid-air interface):</strong>
    $$\\Delta P_{\\text{drop}} = \\frac{2T_{\\text{water}}}{R} = \\frac{2 \\times 0.075}{1.5 \\times 10^{-3}} = \\frac{0.150}{1.5 \\times 10^{-3}} = 100\\text{ Pa}$$
    <strong>(ii) Soap Bubble (2 free liquid-air interfaces: inner and outer):</strong>
    $$\\Delta P_{\\text{bubble}} = \\frac{4T_{\\text{soap}}}{R} = \\frac{4 \\times 0.030}{1.5 \\times 10^{-3}} = \\frac{0.120}{1.5 \\times 10^{-3}} = 80\\text{ Pa}$$
    <strong>Reason for Factor 4:</strong> A liquid drop is solid liquid inside with only one outer free surface. A soap bubble consists of a thin spherical liquid film enclosing an air pocket inside; thus it has <strong>two free liquid-air surfaces</strong> (inner and outer). Both surfaces contribute surface tension force, resulting in $\\Delta P = \\frac{4T}{R}$.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q63: Work Done in Blowing a Soap Bubble from Radius $R_1$ to $R_2$</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Calculate the work done in blowing a soap bubble of radius 2.0 cm to a radius of 4.0 cm. The surface tension of the soap solution is $0.030\\text{ N/m}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $R_1 = 2.0\\text{ cm} = 0.02\\text{ m}$, $R_2 = 4.0\\text{ cm} = 0.04\\text{ m}$, $T = 0.030\\text{ N/m}$.<br/>
    A soap bubble has two free surfaces. Total surface area of a soap bubble of radius $R$ is:
    $$A = 2 \\times (4\\pi R^{2}) = 8\\pi R^{2}$$
    Increase in surface area:
    $$\\Delta A = 8\\pi (R_2^{2} - R_1^{2}) = 8\\pi [(0.04)^{2} - (0.02)^{2}] = 8\\pi [0.0016 - 0.0004] = 8\\pi \\times 0.0012 = 9.6\\pi \\times 10^{-3}\\text{ m}^{2}$$
    Work done:
    $$W = T \\cdot \\Delta A = 0.030 \\times (9.6\\pi \\times 10^{-3}) = 2.88\\pi \\times 10^{-4}\\text{ J} \\approx 2.88 \\times 3.1416 \\times 10^{-4} \\approx 9.05 \\times 10^{-4}\\text{ J}$$
    Hence, the work required is approximately <strong>$9.05 \\times 10^{-4}\\text{ J}$</strong>.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q64: Energy Released When Small Droplets Coalesce into One Large Drop</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> One thousand ($10^{3}$) identical mercury droplets, each of radius $r = 1.0\\text{ mm}$, merge together to form a single large spherical drop. If surface tension of mercury is $0.465\\text{ N/m}$, calculate: (i) the radius of the large drop, and (ii) the energy released during coalescence.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $n = 1000 = 10^{3}$, $r = 1.0\\text{ mm} = 10^{-3}\\text{ m}$, $T = 0.465\\text{ N/m}$.<br/>
    <strong>(i) Radius of the Large Drop ($R$):</strong>
    By conservation of volume:
    $$\\frac{4}{3}\\pi R^{3} = n \\cdot \\frac{4}{3}\\pi r^{3} \\implies R = n^{1/3} r = (1000)^{1/3} \\times 10^{-3} = 10 \\times 10^{-3}\\text{ m} = 1.0\\text{ cm}$$
    <strong>(ii) Energy Released:</strong>
    Initial surface area of $n$ droplets: $A_i = n(4\\pi r^{2}) = 1000 \\times 4\\pi (10^{-3})^{2} = 4\\pi \\times 10^{-3}\\text{ m}^{2}$.<br/>
    Final surface area of single drop: $A_f = 4\\pi R^{2} = 4\\pi (10^{-2})^{2} = 4\\pi \\times 10^{-4}\\text{ m}^{2}$.<br/>
    Decrease in surface area:
    $$\\Delta A = A_i - A_f = 4\\pi (10^{-3} - 10^{-4}) = 4\\pi (9 \\times 10^{-4}) = 3.6\\pi \\times 10^{-3}\\text{ m}^{2}$$
    Energy released as heat:
    $$E_{\\text{released}} = T \\cdot \\Delta A = 0.465 \\times (3.6\\pi \\times 10^{-3}) \\approx 0.465 \\times 0.01131 \\approx 5.26 \\times 10^{-3}\\text{ J}$$
    This released surface energy slightly warms the mercury drop.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q65: Capillary Rise: Calculation of Height in a Glass Tube</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A capillary tube of bore diameter 0.4 mm is dipped vertically into a beaker of clean water. Find the height to which water will rise in the tube. Take $T_{\\text{water}} = 0.073\\text{ N/m}$, contact angle $\\theta = 0^{\\circ}$, $\\rho = 1000\\text{ kg/m}^{3}$, and $g = 9.8\\text{ m/s}^{2}$. What happens if the tube is pushed down until only 2.0 cm remains above the water level?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Bore diameter $2r = 0.4\\text{ mm} \\implies r = 0.2\\text{ mm} = 2.0 \\times 10^{-4}\\text{ m}$.<br/>
    Capillary ascent formula:
    $$h = \\frac{2T\\cos\\theta}{r\\rho g} = \\frac{2 \\times 0.073 \\times \\cos(0^{\\circ})}{(2.0 \\times 10^{-4}) \\times 1000 \\times 9.8} = \\frac{0.146}{1.96} \\approx 0.0745\\text{ m} = 7.45\\text{ cm}$$
    <b style="color: ${themeColor};">Insufficient Length Case:</b> If the tube of length only 2.0 cm is provided ($l < h$), <strong>water will NOT overflow</strong> out of the top. Instead, water rises to the very rim (2.0 cm) and the radius of curvature $R$ of the concave meniscus increases ($h \\cdot R = \\text{constant}$), making the meniscus flatter ($\cos\\theta'$ decreases) so that:
    $$h' R' = h R \\implies R' = \\frac{h}{h'} R$$
    The water meniscus adjusts its curvature to balance the hydrostatic pressure without overflowing.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q66: Explain Why Detergents and Soaps Clean Clothes Effectively</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Water alone cannot easily remove oily grease and dirt from clothes. Explain how the addition of detergents dramatically improves washing efficiency in terms of surface tension and angle of contact.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <strong>Reduction of Surface Tension:</strong> Pure water has a relatively high surface tension ($0.073\\text{ N/m}$) due to strong hydrogen bonding. It prefers to form spherical droplets rather than spreading. Detergent molecules are surfactants that disrupt hydrogen bonds, reducing surface tension to below $0.030\\text{ N/m}$.<br/>
    2. <strong>Reduction of Contact Angle:</strong> Detergents make the contact angle $\\theta$ between water and fabric fibers acute (close to $0^{\\circ}$). This drastically enhances the wetting power, enabling water to penetrate narrow capillary pores between fabric threads.<br/>
    3. <strong>Micelle Action:</strong> Detergent molecules have hydrophobic non-polar hydrocarbon tails that attach to oil/grease and hydrophilic ionic heads that face the water. During agitation, oil droplets are broken into tiny suspended droplets (micelles) that are rinsed away with water.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q67: Why Do Small Raindrops Fall Slowly While Large Hailstones Fall Fast?</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using the formula for terminal velocity, explain why tiny cloud droplets stay floating in the air for hours while large hailstones crash to the ground with destructive speeds.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    The terminal velocity of a falling spherical body is given by:
    $$v_t = \\frac{2}{9}\\frac{r^{2}(\\rho - \\sigma)g}{\\eta} \\propto r^{2}$$
    From this relation, terminal speed depends directly on the <strong>square of the radius ($r^{2}$)</strong>:<br/>
    1. A microscopic cloud droplet has radius $r \\approx 10\\text{ }\\mu\\text{m} = 10^{-5}\\text{ m}$. Its terminal velocity is negligibly small ($v_t \\approx 0.01\\text{ m/s} = 1\\text{ cm/s}$); gentle thermal updrafts easily keep it suspended as a cloud.<br/>
    2. A large hailstone of radius $r \\approx 1.0\\text{ cm} = 10^{-2}\\text{ m}$ is $1000$ times larger in radius. Since $v_t \\propto r^{2}$, its terminal velocity is $(1000)^{2} = 10^{6}$ times greater, reaching over $30\\text{ to }40\\text{ m/s}$ ($110\\text{ to }140\\text{ km/h}$), causing severe damage upon impact.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q68: Bernoulli's Principle in Action: Atomizer / Paint Sprayer</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the working of an atomizer (or scent spray / paint gun) based on Bernoulli's theorem.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. An atomizer consists of a squeeze rubber bulb, a horizontal constriction tube (nozzle), and a vertical suction tube dipping into a perfume or paint container.<br/>
    2. When the bulb is squeezed, a high-velocity jet of air shoots rapidly through the narrow horizontal nozzle ($v_{\\text{air}}$ is very high).<br/>
    3. By Bernoulli's equation ($P + \\frac{1}{2}\\rho v^{2} = \\text{constant}$), this high speed creates a localized drop in static pressure ($P < P_{\\text{atm}}$) directly over the top opening of the vertical tube.<br/>
    4. Since atmospheric pressure $P_{\\text{atm}}$ acts continuously on the liquid surface in the container, the higher external pressure pushes the liquid up the tube into the air stream.<br/>
    5. The fast-moving air blast instantly shears the emerging liquid column into a fine misty spray of microscopic droplets.
  </div>
</div>

<!-- THERMAL SA QUESTIONS (Q69 to Q80) -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q69: Thermal Stress in a Clamped Rod Prevented from Expanding</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A steel rod of cross-sectional area $4.0\\text{ cm}^{2}$ and length 1.0 m is clamped rigidly at both ends at a temperature of $20^{\\circ}\\text{C}$. If the temperature is raised to $60^{\\circ}\\text{C}$, calculate the compressive thermal stress and the force exerted on the rigid clamps. ($Y_{\\text{steel}} = 2.0 \\times 10^{11}\\text{ N/m}^{2}$, $\\alpha_{\\text{steel}} = 1.2 \\times 10^{-5}\\text{ K}^{-1}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $A = 4.0\\text{ cm}^{2} = 4.0 \\times 10^{-4}\\text{ m}^{2}$, $\\Delta T = 60 - 20 = 40^{\\circ}\\text{C} = 40\\text{ K}$.<br/>
    If the rod were free to expand, its thermal expansion would be $\\Delta L = L \\alpha \\Delta T$.<br/>
    Since rigid clamps prevent this expansion, thermal strain developed is:
    $$\\epsilon = \\frac{\\Delta L}{L} = \\alpha \\Delta T = (1.2 \\times 10^{-5}) \\times 40 = 4.8 \\times 10^{-4}$$
    Compressive Thermal Stress:
    $$\\sigma = Y \\cdot \\epsilon = Y \\alpha \\Delta T = (2.0 \\times 10^{11}) \\times (4.8 \\times 10^{-4}) = 9.6 \\times 10^{7}\\text{ N/m}^{2}$$
    Force exerted on the clamps:
    $$F = \\sigma \\cdot A = (9.6 \\times 10^{7}) \\times (4.0 \\times 10^{-4}) = 3.84 \\times 10^{4}\\text{ N} = 38.4\\text{ kN}$$
    This massive force of 38.4 kN illustrates why expansion gaps and rollers must be provided in railway tracks and steel bridges.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q70: Working of a Bimetallic Strip and Its Thermostatic Applications</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is a bimetallic strip? Explain how it bends when heated and when cooled. Mention two practical applications.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    A bimetallic strip consists of two equal strips of different metals (such as brass and invar/iron) riveted together tightly along their length.<br/>
    1. <strong>Upon Heating:</strong> Brass expands much more than iron ($\\alpha_{\\text{brass}} > \\alpha_{\\text{iron}}$). Because the strips are bonded, the composite strip curves into an arc with the higher-expanding metal (brass) on the outer convex side and the lower-expanding metal on the inner concave side.<br/>
    2. <strong>Upon Cooling:</strong> Brass contracts more than iron; consequently, the strip bends in the opposite direction with brass on the inner concave curve.<br/>
    <b style="color: ${themeColor};">Applications:</b><br/>
    - <strong>Thermostats:</strong> In electric irons, geysers, and refrigerators to automatically make or break the electric circuit when preset temperatures are reached.<br/>
    - <strong>Fire Alarms:</strong> Heat bends the strip to touch a contact screw, completing the bell circuit to trigger the alarm.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q71: Derivation of the Relation Between $\\alpha$ and $\\beta$ ($\\beta = 2\\alpha$)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive the mathematical relationship between the coefficient of linear expansion ($\\alpha$) and superficial (areal) expansion ($\\beta$) of an isotropic solid.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Consider a square sheet of an isotropic solid of side $L_0$ at $0^{\\circ}\\text{C}$. Its initial area is $A_0 = L_0^{2}$.<br/>
    When heated by temperature $\\Delta T$, the side becomes:
    $$L = L_0 (1 + \\alpha \\Delta T)$$
    The expanded area $A$ is:
    $$A = L^{2} = L_0^{2}(1 + \\alpha \\Delta T)^{2} = A_0 (1 + 2\\alpha \\Delta T + \\alpha^{2} \\Delta T^{2})$$
    Since $\\alpha$ is on the order of $10^{-5}\\text{ K}^{-1}$, the second-order term $\\alpha^{2}\\Delta T^{2}$ is extremely small (order $10^{-10}$) and can be safely neglected:<br/>
    $$A \\approx A_0 (1 + 2\\alpha \\Delta T)$$
    By definition of coefficient of superficial expansion:
    $$A = A_0 (1 + \\beta \\Delta T)$$
    Comparing the two expressions gives directly:
    $$\\beta = 2\\alpha$$
    Thus, the coefficient of superficial expansion is exactly double the coefficient of linear expansion.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q72: Derivation of the Relation Between $\\alpha$ and $\\gamma$ ($\\gamma = 3\\alpha$)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive the relation between the coefficient of linear expansion ($\\alpha$) and coefficient of cubical (volume) expansion ($\\gamma$). Hence show that $\\alpha : \\beta : \\gamma = 1 : 2 : 3$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Consider a cube of an isotropic solid of edge $L_0$ at $0^{\\circ}\\text{C}$. Its initial volume is $V_0 = L_0^{3}$.<br/>
    When temperature is raised by $\\Delta T$, each edge expands to $L = L_0 (1 + \\alpha \\Delta T)$.<br/>
    The new volume $V$ is:
    $$V = L^{3} = L_0^{3}(1 + \\alpha \\Delta T)^{3} = V_0 (1 + 3\\alpha \\Delta T + 3\\alpha^{2} \\Delta T^{2} + \\alpha^{3} \\Delta T^{3})$$
    Neglecting higher powers $\\alpha^{2}$ and $\\alpha^{3}$ because $\\alpha \\ll 1$:
    $$V \\approx V_0 (1 + 3\\alpha \\Delta T)$$
    By definition of cubical expansion:
    $$V = V_0 (1 + \\gamma \\Delta T)$$
    Comparing coefficients yields:
    $$\\gamma = 3\\alpha$$
    Combining the results:
    $$\\alpha = \\alpha, \\quad \\beta = 2\\alpha, \\quad \\gamma = 3\\alpha \\implies \\alpha : \\beta : \\gamma = 1 : 2 : 3$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q73: Calorimetry: Ice at 0°C Added to Warm Water Calculation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> 50 g of ice at $0^{\\circ}\\text{C}$ is placed in a calorimeter containing 200 g of water at $30^{\\circ}\\text{C}$. Neglecting the heat capacity of the calorimeter, find the final equilibrium temperature of the mixture. (Take $L_f = 336\\text{ J/g}$ and $c_{\\text{water}} = 4.186\\text{ J/g}\\cdot^{\\circ}\\text{C}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Heat required to melt all 50 g of ice into water at $0^{\\circ}\\text{C}$:
    $$Q_1 = m_{\\text{ice}} L_f = 50 \\times 336 = 16,800\\text{ J}$$
    Maximum heat available from warm water cooling from $30^{\\circ}\\text{C}$ to $0^{\\circ}\\text{C}$:
    $$Q_{\\text{avail}} = m_w c_w \\Delta T = 200 \\times 4.186 \\times 30 = 25,116\\text{ J}$$
    Since $Q_{\\text{avail}} > Q_1$, all the ice melts completely and the final equilibrium temperature $T$ lies between $0^{\\circ}\\text{C}$ and $30^{\\circ}\\text{C}$.<br/>
    By Principle of Calorimetry (Heat gained = Heat lost):
    $$m_{\\text{ice}} L_f + m_{\\text{ice}} c_w (T - 0) = m_w c_w (30 - T)$$
    $$16,800 + 50 \\times 4.186 \\times T = 25,116 - 200 \\times 4.186 \\times T$$
    $$16,800 + 209.3 T = 25,116 - 837.2 T$$
    $$(209.3 + 837.2) T = 25,116 - 16,800$$
    $$1046.5 T = 8316 \\implies T = \\frac{8316}{1046.5} \\approx 7.95^{\\circ}\\text{C}$$
    The final equilibrium temperature of the mixture is approximately <strong>$7.95^{\\circ}\\text{C}$</strong>.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q74: Why is Steam at 100°C More Severe than Boiling Water at 100°C?</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Burns caused by steam at $100^{\\circ}\\text{C}$ are substantially more severe and painful than burns caused by liquid water at $100^{\\circ}\\text{C}$. Explain the thermodynamics behind this observation with quantitative values.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Even though both steam and boiling water are at the identical temperature of $100^{\\circ}\\text{C}$:<br/>
    1. <strong>Latent Heat of Vaporization:</strong> When 1 g of boiling water at $100^{\\circ}\\text{C}$ contacts skin and cools to body temperature ($37^{\\circ}\\text{C}$), it releases only sensible heat:
    $$Q_{\\text{water}} = m c \\Delta T = 1 \\times 4.186 \\times (100 - 37) \\approx 263.7\\text{ J}$$
    2. In contrast, 1 g of steam at $100^{\\circ}\\text{C}$ must first condense into water at $100^{\\circ}\\text{C}$, releasing its immense <strong>latent heat of vaporization</strong>:
    $$L_v = 2260\\text{ J/g}$$
    Then the resulting hot water at $100^{\\circ}\\text{C}$ further cools down to $37^{\\circ}\\text{C}$, releasing another $263.7\\text{ J}$.<br/>
    Total heat released by 1 g steam:
    $$Q_{\\text{steam}} = 2260 + 263.7 = 2523.7\\text{ J}$$
    Steam delivers nearly <strong>10 times more thermal energy</strong> per gram to biological tissue, causing deep thermal destruction and severe second-degree scalds.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q75: Steady State Heat Conduction Through a Compound Bar (Series)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Two slabs of equal thickness $d$ and equal cross-sectional area $A$ are placed in series thermal contact. Their thermal conductivities are $K_1$ and $K_2$. The outer face of slab 1 is maintained at temperature $T_1$ and the outer face of slab 2 at $T_2$ ($T_1 > T_2$). Find: (i) the interface temperature $T$, and (ii) the equivalent thermal conductivity $K_{\\text{eq}}$ of the composite slab.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    In steady state, the rate of heat flow $H$ through both slabs in series is identical:<br/>
    $$H = \\frac{K_1 A (T_1 - T)}{d} = \\frac{K_2 A (T - T_2)}{d}$$
    Equating the two:
    $$K_1(T_1 - T) = K_2(T - T_2) \\implies K_1 T_1 + K_2 T_2 = (K_1 + K_2)T$$
    <strong>(i) Interface Temperature:</strong>
    $$T = \\frac{K_1 T_1 + K_2 T_2}{K_1 + K_2}$$
    <strong>(ii) Equivalent Thermal Conductivity ($K_{\\text{eq}}$):</strong>
    Total thickness is $2d$. Thermal resistance of two slabs in series:
    $$R_{\\text{total}} = R_1 + R_2 \\implies \\frac{2d}{K_{\\text{eq}} A} = \\frac{d}{K_1 A} + \\frac{d}{K_2 A}$$
    $$\\frac{2}{K_{\\text{eq}}} = \\frac{1}{K_1} + \\frac{1}{K_2} = \\frac{K_1 + K_2}{K_1 K_2} \\implies K_{\\text{eq}} = \\frac{2 K_1 K_2}{K_1 + K_2}$$
    The equivalent thermal conductivity is the <strong>harmonic mean</strong> of the individual conductivities.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q76: Wien's Displacement Law: Calculation of Sun's Surface Temperature</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Wien's displacement law. The solar spectrum exhibits a maximum spectral emissive power at wavelength $\\lambda_{\\max} = 490\\text{ nm}$ (in the green-yellow region). Calculate the effective surface temperature of the Sun. (Wien's constant $b = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Wien's Displacement Law:</b> The wavelength $\\lambda_{\\max}$ corresponding to peak radiant emission of a blackbody is inversely proportional to its absolute thermodynamic temperature $T$:
    $$\\lambda_{\\max} \\cdot T = b = \\text{constant} = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$$
    As temperature increases, the peak shifts ("displaces") toward shorter wavelengths.<br/>
    <b style="color: ${themeColor};">Calculation:</b><br/>
    Given $\\lambda_{\\max} = 490\\text{ nm} = 490 \\times 10^{-9}\\text{ m} = 4.90 \\times 10^{-7}\\text{ m}$.
    $$T = \\frac{b}{\\lambda_{\\max}} = \\frac{2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}}{4.90 \\times 10^{-7}\\text{ m}} \\approx 5914\\text{ K}$$
    The effective surface temperature of the Sun is approximately <strong>$5914\\text{ K}$</strong> (or $\\approx 5640^{\\circ}\\text{C}$).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q77: Stefan-Boltzmann Law: Radiant Heat Loss of a Hot Spherical Body</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A spherical blackbody of radius 5.0 cm is maintained at a temperature of $500^{\\circ}\\text{C}$ in an evacuated enclosure whose walls are kept at $27^{\\circ}\\text{C}$. Calculate: (i) the total radiant power emitted, and (ii) the net rate of heat loss from the sphere. (Take $\\sigma = 5.67 \\times 10^{-8}\\text{ W/m}^{2}\\cdot\\text{K}^{4}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Absolute temperature of body $T = 500 + 273 = 773\\text{ K}$.<br/>
    Absolute temperature of enclosure $T_0 = 27 + 273 = 300\\text{ K}$.<br/>
    Surface area of sphere:
    $$A = 4\\pi r^{2} = 4\\pi (0.05)^{2} = 0.01\\pi\\text{ m}^{2} \\approx 3.1416 \\times 10^{-2}\\text{ m}^{2}$$
    <strong>(i) Total Radiant Power Emitted:</strong>
    $$P_{\\text{emit}} = \\sigma A T^{4} = (5.67 \\times 10^{-8}) \\times (3.1416 \\times 10^{-2}) \\times (773)^{4}$$
    Since $(773)^{4} \\approx 3.57 \\times 10^{11}$:
    $$P_{\\text{emit}} \\approx 5.67 \\times 10^{-8} \\times 0.031416 \\times 3.57 \\times 10^{11} \\approx 636\\text{ W}$$
    <strong>(ii) Net Rate of Heat Loss:</strong>
    $$P_{\\text{net}} = \\sigma A (T^{4} - T_0^{4}) = (5.67 \\times 10^{-8}) \\times (0.031416) \\times [(773)^{4} - (300)^{4}]$$
    Since $(300)^{4} = 8.1 \\times 10^{9} = 0.081 \\times 10^{11}$:
    $$P_{\\text{net}} \\approx 1.781 \\times 10^{-9} \\times (3.57 \\times 10^{11} - 0.081 \\times 10^{11}) = 1.781 \\times 10^{-9} \\times 3.489 \\times 10^{11} \\approx 621\\text{ W}$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q78: Qualitative Features of Blackbody Radiation Spectrum</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the four fundamental experimental characteristics of the blackbody radiation spectral curves ($E_\\lambda$ versus $\\lambda$) discovered by Lummer and Pringsheim.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    The experimental curves plotted by Lummer and Pringsheim reveal:<br/>
    1. <strong>Continuous Spectrum:</strong> Thermal radiation is emitted across all continuous wavelengths from 0 to $\\infty$, but energy is distributed non-uniformly across wavelengths.<br/>
    2. <strong>Pronounced Peak:</strong> For each temperature, radiant energy $E_\\lambda$ rises to a distinct maximum ($E_{\\max}$) at a specific wavelength $\\lambda_{\\max}$ and then drops asymptotically towards zero at longer wavelengths.<br/>
    3. <strong>Wien's Shift:</strong> As the temperature of the blackbody rises, the peak wavelength $\\lambda_{\\max}$ shifts monotonically toward shorter wavelengths (higher frequencies), satisfying $\\lambda_{\\max} T = \\text{constant}$.<br/>
    4. <strong>Stefan-Boltzmann Total Energy Growth:</strong> The total radiant energy emitted per second per unit area (represented by the total area under the $E_\\lambda - \\lambda$ curve) increases drastically with absolute temperature, proportional to $T^{4}$ ($\\text{Area} = \\int_0^\\infty E_\\lambda d\\lambda = \\sigma T^{4}$).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q79: Anomalous Expansion of Water: Density Maximum at 4°C</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain what is meant by the anomalous expansion of water between $0^{\\circ}\\text{C}$ and $4^{\\circ}\\text{C}$. Why does the coefficient of cubical expansion $\\gamma$ of water become negative in this range?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Almost all normal liquids continuously expand when heated, increasing in volume and decreasing in density.<br/>
    <b style="color: ${themeColor};">Anomalous Behavior:</b> Water exhibits an extraordinary anomaly between $0^{\\circ}\\text{C}$ and $4^{\\circ}\\text{C}$:<br/>
    1. When liquid water at $0^{\\circ}\\text{C}$ is heated, its volume continuously <strong>contracts</strong> until it reaches a sharp minimum volume at $4^{\\circ}\\text{C}$.<br/>
    2. Consequently, water achieves its <strong>maximum density ($1.000\\text{ g/cm}^{3} = 1000\\text{ kg/m}^{3}$) at exactly $4^{\\circ}\\text{C}$</strong>.<br/>
    3. Only above $4^{\\circ}\\text{C}$ does water resume standard liquid behavior and expand with rising temperature.<br/>
    <b style="color: ${themeColor};">Negative $\\gamma$:</b> Since volume decreases with increasing temperature between $0^{\\circ}\\text{C}$ and $4^{\\circ}\\text{C}$ ($\\Delta V / \\Delta T < 0$), the coefficient of volume expansion $\\gamma = \\frac{1}{V}\\frac{\\Delta V}{\\Delta T}$ is strictly <strong>negative</strong> in this interval.<br/>
    <b style="color: ${themeColor};">Molecular Origin:</b> Ice has an open cage-like hexagonal crystal structure due to tetrahedral hydrogen bonds. When ice melts at $0^{\\circ}\\text{C}$, some cages collapse, packing molecules closer together. Between $0^{\\circ}\\text{C}$ and $4^{\\circ}\\text{C}$, the collapse of cage structures dominates over normal thermal vibrational expansion.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q80: Why Cooking in a Pressure Cooker is Faster at High Altitudes</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Cooking pulses and vegetables in an open pot is extremely difficult and slow at high altitudes (e.g., in Leh or Mount Everest base camp), but a pressure cooker cooks quickly even on mountain tops. Explain this using phase equilibria and vapor pressure concepts.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <strong>Definition of Boiling Point:</strong> A liquid boils when its saturated vapor pressure equals the surrounding external atmospheric pressure.<br/>
    2. <strong>High Altitude Open Cooking:</strong> At high altitudes, atmospheric pressure drops significantly (e.g., to $\\approx 70\\text{ kPa}$ at 3000 m). Consequently, water reaches vapor pressure equality and boils at a much lower temperature (around $88^{\\circ}\\text{C}$ to $90^{\\circ}\\text{C}$). Because boiling is an isothermal process, no matter how much heat is supplied, the water temperature never rises above $90^{\\circ}\\text{C}$. Chemical cooking reactions proceed very slowly at this lower temperature.<br/>
    3. <strong>Pressure Cooker Action:</strong> A pressure cooker has a sealed lid with a weighted valve that traps steam. The internal pressure builds up to about $2\\text{ atmospheres}$ ($200\\text{ kPa}$). At this elevated pressure, the boiling point of water is forced up to approximately $120^{\\circ}\\text{C}$ to $125^{\\circ}\\text{C}$. The substantially hotter water and steam transfer heat rapidly, cooking food in a fraction of the time.
  </div>
</div>
`;

module.exports = { solutionsPart2 };
