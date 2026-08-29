const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\a5d89c48-b99a-4b0b-8fde-e8954f944404\\.user_uploaded';

const imageMap = {
  1: { file: 'media_1787936433553.jpg', title: 'Electric Current (Flow of Electrons & Direction of Current)', caption: 'Electric current is the net rate of flow of charge: I = Q / t (Unit: Ampere A). Conventional current flows from high to low potential, opposite to electron flow.' },
  2: { file: 'media_1787936433810.jpg', title: 'Drift Velocity & Electron Mobility', caption: 'Free electrons drift through metal lattice ions with small average drift velocity v_d. Current I = n e A v_d, and mobility μ = v_d / E.' },
  3: { file: 'media_1787936433993.jpg', title: "Ohm's Law Circuit & Principle", caption: "At constant temperature, electric current I is directly proportional to potential difference V: V = I R." },
  4: { file: 'media_1787936434191.jpg', title: 'V–I Characteristics (Linear Ohmic vs Non-Linear Devices)', caption: 'V–I graph is a linear straight line (R = constant) for Ohmic metallic conductors, and non-linear for non-ohmic devices like diodes and vacuum tubes.' },
  5: { file: 'media_1787936434363.jpg', title: 'Electrical Resistivity & Conductivity of a Conductor', caption: 'Resistance of cylindrical conductor of length L and area A: R = ρ L / A. Conductivity σ = 1 / ρ (Unit: S m⁻¹).' },
  6: { file: 'media_1787936451537.jpg', title: 'Temperature Dependence of Resistance', caption: 'Resistance increases linearly with temperature for metals (α > 0) according to R_T = R₀(1 + αΔT), while remaining almost independent for standard alloys (α ≈ 0).' },
  7: { file: 'media_1787936451588.jpg', title: 'Resistors in Series and Parallel Combinations', caption: 'Series: R_s = R₁ + R₂ + R₃ (same current, voltages add). Parallel: 1/R_p = 1/R₁ + 1/R₂ + 1/R₃ (same voltage, currents add).' },
  8: { file: 'media_1787936451677.jpg', title: 'Cell with Internal Resistance & Terminal Voltage', caption: 'Real electrochemical cell of EMF E with internal resistance r connected to external resistor R: Terminal potential difference V = E - I r.' },
  9: { file: 'media_1787936451720.jpg', title: 'EMF vs Terminal Voltage (Open vs Closed Circuit)', caption: 'Electromotive Force (EMF E) is the terminal potential difference in an open circuit (no current). When current flows (closed circuit), terminal voltage V < E.' },
  10: { file: 'media_1787936451732.jpg', title: "Kirchhoff's Rules (Junction Rule & Loop Rule)", caption: "Junction Rule (KCL): Net incoming current equals outgoing current (Σ I = 0, charge conservation). Loop Rule (KVL): Algebraic sum of potential changes around any closed loop is zero (Σ ΔV = 0, energy conservation)." },
  11: { file: 'media_1787936466422.jpg', title: 'Wheatstone Bridge Principle & Balance Condition', caption: 'Bridge network of 4 resistors P, Q, R, S and central galvanometer G. At balance (null deflection G = 0): P / Q = R / S.' },
  12: { file: 'media_1787936466633.jpg', title: 'Meter Bridge (Practical Form of Wheatstone Bridge)', caption: 'Slide wire meter bridge of 1 m uniform resistance wire with sliding jockey. At null point length l: R / X = l / (100 - l), enabling precise measurement of unknown resistance X.' },
  13: { file: 'media_1787936466890.jpg', title: 'Standard Circuit Symbols of Common Electrical Elements', caption: 'Standard schematic symbols for Resistor, Single Cell, Multi-Cell Battery, Ammeter (A), Voltmeter (V), and Variable Resistor / Rheostat.' },
  14: { file: 'media_1787936467290.jpg', title: 'Electrical Energy & Electrical Power', caption: 'Electrical power dissipated in resistor: P = V I = I² R = V² / R (Unit: Watt W). Total electrical heat energy: H = P t = V I t (Unit: Joule J).' },
  15: { file: 'media_1787936467326.jpg', title: 'Resistivity of Standard Conducting & Resistance Materials', caption: 'Representative resistivity values at room temperature: Silver (1.6 × 10⁻⁸ Ω m), Copper (1.7 × 10⁻⁸ Ω m), Aluminium (2.8 × 10⁻⁸ Ω m), Tungsten (5.6 × 10⁻⁸ Ω m), and Nichrome alloy (1.1 × 10⁻⁶ Ω m).' }
};

const result = {};
for (const [key, info] of Object.entries(imageMap)) {
  const filePath = path.join(userUploadedDir, info.file);
  const buf = fs.readFileSync(filePath);
  result[key] = {
    ...info,
    b64: `data:image/jpeg;base64,${buf.toString('base64')}`
  };
  console.log(`Loaded diagram ${key}: ${info.title} (b64 length: ${result[key].b64.length})`);
}

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_phy_2_15_diagrams.json', JSON.stringify(result, null, 2), 'utf8');
console.log("Saved c12_phy_2_15_diagrams.json successfully!");
