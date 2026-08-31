const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.user_uploaded';

const imageFiles = {
  rateOfReaction: 'media_1788190774269.jpg',
  tempFactor: 'media_1788190774418.jpg',
  catalystFactor: 'media_1788190774581.jpg',
  zeroOrder: 'media_1788190774769.jpg',
  firstOrder: 'media_1788190774814.jpg',
  halfLife: 'media_1788190790555.jpg',
  collisionTheory: 'media_1788190790813.jpg',
  arrhenius: 'media_1788190790849.jpg'
};

const b64Map = {};
for (const [key, file] of Object.entries(imageFiles)) {
  const filePath = path.join(userUploadedDir, file);
  const data = fs.readFileSync(filePath);
  b64Map[key] = `data:image/jpeg;base64,${data.toString('base64')}`;
  console.log(`Loaded ${key} (${file}), size: ${data.length} bytes, b64 length: ${b64Map[key].length}`);
}

function makeCard(b64, caption, alt) {
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 82, 82, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const cards = {
  rateOfReaction: makeCard(
    b64Map.rateOfReaction,
    "<b>Rate of Reaction vs Concentration:</b> As reactant concentration increases, the number of reacting particles per unit volume rises, leading to higher collision frequency and an accelerated rate of reaction.",
    "Rate of Reaction Concentration"
  ),
  tempFactor: makeCard(
    b64Map.tempFactor,
    "<b>Effect of Temperature on Reaction Rate:</b> Increasing temperature drastically increases the fraction of molecules with kinetic energy exceeding activation energy (E<sub>a</sub>), roughly doubling the rate for every 10 &deg;C rise.",
    "Factors Affecting Rate Temperature"
  ),
  catalystFactor: makeCard(
    b64Map.catalystFactor,
    "<b>Effect of Catalyst on Activation Energy (E<sub>a</sub>):</b> A catalyst provides an alternate reaction pathway with significantly lower activation energy (E<sub>a</sub>), increasing the rate of both forward and reverse reactions without altering &Delta;H or equilibrium position.",
    "Factors Affecting Rate Catalyst"
  ),
  zeroOrder: makeCard(
    b64Map.zeroOrder,
    "<b>Zero-Order Reaction Integrated Rate Plot:</b> Linear decrease of reactant concentration [A] with time t (slope = -k, y-intercept = [A]<sub>0</sub>). Half-life t<sub>1/2</sub> = [A]<sub>0</sub> / (2k) is directly proportional to initial concentration.",
    "Zero Order Reaction Integrated Rate Expression"
  ),
  firstOrder: makeCard(
    b64Map.firstOrder,
    "<b>First-Order Reaction Integrated Rate Plot:</b> Linear relationship between ln [A] and time t (slope = -k, y-intercept = ln [A]<sub>0</sub>). Half-life t<sub>1/2</sub> = 0.693 / k is completely independent of initial concentration.",
    "First Order Reaction Integrated Rate Expression"
  ),
  halfLife: makeCard(
    b64Map.halfLife,
    "<b>Half-Life Period (t<sub>1/2</sub>) in First-Order Kinetics:</b> During each successive half-life interval, the reactant concentration reduces by exactly 50% ([A]<sub>0</sub> &rarr; [A]<sub>0</sub>/2 &rarr; [A]<sub>0</sub>/4 &rarr; [A]<sub>0</sub>/8...), with constant t<sub>1/2</sub> = 0.693 / k.",
    "Half Life Period First Order Kinetics"
  ),
  arrhenius: makeCard(
    b64Map.arrhenius,
    "<b>Activation Energy (E<sub>a</sub>) & Arrhenius Equation (k = A e<sup>-E<sub>a</sub>/RT</sup>):</b> Reactant molecules must absorb threshold energy to overcome the activation barrier (E<sub>a</sub>) and form the activated transition state complex.",
    "Activation Energy Arrhenius Equation"
  ),
  collisionTheory: makeCard(
    b64Map.collisionTheory,
    "<b>Collision Theory & Orientation Barrier:</b> For a collision to be chemically effective, molecules must possess sufficient energy (&ge; E<sub>a</sub>) AND strike each other with the correct spatial orientation to facilitate bond cleavage and product formation.",
    "Concept of Collision Theory Effective vs Ineffective Collision"
  )
};

let overviewHtml = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_3_overview_extracted.html', 'utf8');

// 1. Insert Rate of Reaction card in Section 1 after (ii) Average Rate vs Instantaneous Rate
const target1 = '<h3 style="color: #FF5252; margin-top: 24px;">(ii) Average Rate vs Instantaneous Rate</h3>';
if (overviewHtml.includes(target1)) {
  overviewHtml = overviewHtml.replace(target1, target1 + '\n\n' + cards.rateOfReaction);
  console.log("Inserted Card 1: Rate of Reaction in Section 1(ii)");
}

// 2. Insert Temperature Factor card in Section 2 after Temperature block
const targetTemp = '<b style="color: #FF5252; font-size: 16px; display: block; margin-bottom: 4px;">2. Temperature:</b>';
if (overviewHtml.includes(targetTemp)) {
  const tempDivEnd = overviewHtml.indexOf('</div>', overviewHtml.indexOf(targetTemp)) + 6;
  overviewHtml = overviewHtml.slice(0, tempDivEnd) + '\n\n' + cards.tempFactor + overviewHtml.slice(tempDivEnd);
  console.log("Inserted Card 2: Temperature Factor in Section 2");
}

// 3. Insert Catalyst Factor card in Section 2 after Catalyst block
const targetCat = '<b style="color: #FF5252; font-size: 16px; display: block; margin-bottom: 4px;">3. Presence of Catalyst:</b>';
if (overviewHtml.includes(targetCat)) {
  const catDivEnd = overviewHtml.indexOf('</div>', overviewHtml.indexOf(targetCat)) + 6;
  overviewHtml = overviewHtml.slice(0, catDivEnd) + '\n\n' + cards.catalystFactor + overviewHtml.slice(catDivEnd);
  console.log("Inserted Card 3: Catalyst Factor in Section 2");
}

// 4. Insert Zero Order card in Section 5(i) after Zero Order derivation box
const targetZero = '<h3 style="color: #FF5252; margin-top: 20px;">(i) Zero Order Reactions</h3>';
if (overviewHtml.includes(targetZero)) {
  overviewHtml = overviewHtml.replace(targetZero, targetZero + '\n\n' + cards.zeroOrder);
  console.log("Inserted Card 4: Zero Order in Section 5(i)");
}

// 5. Insert First Order card in Section 5(ii) after First Order derivation box
const targetFirst = '<h3 style="color: #FF5252; margin-top: 24px;">(ii) First Order Reactions</h3>';
if (overviewHtml.includes(targetFirst)) {
  overviewHtml = overviewHtml.replace(targetFirst, targetFirst + '\n\n' + cards.firstOrder);
  console.log("Inserted Card 5: First Order in Section 5(ii)");
}

// 6. Insert Half-Life card in Section 5(ii) after Worked Numerical Example
const targetHalfLife = '📝 WORKED BOARD NUMERICAL EXAMPLE: First Order Kinetic Calculation';
if (overviewHtml.includes(targetHalfLife)) {
  const numDivEnd = overviewHtml.indexOf('</div>\n  </div>', overviewHtml.indexOf(targetHalfLife)) + 14;
  overviewHtml = overviewHtml.slice(0, numDivEnd) + '\n\n' + cards.halfLife + overviewHtml.slice(numDivEnd);
  console.log("Inserted Card 6: Half-Life Period in Section 5(ii)");
}

// 7. Insert Arrhenius card in Section 6(i) after Arrhenius Equation & Activation Energy
const targetArrhenius = '<h3 style="color: #FF5252; margin-top: 20px;">(i) Arrhenius Equation &amp; Activation Energy (E<sub>a</sub>)</h3>';
if (overviewHtml.includes(targetArrhenius)) {
  overviewHtml = overviewHtml.replace(targetArrhenius, targetArrhenius + '\n\n' + cards.arrhenius);
  console.log("Inserted Card 7: Activation Energy & Arrhenius in Section 6(i)");
}

// 8. Insert Collision Theory card in Section 7 after (i) Two Essential Criteria for Effective Collisions
const targetCollision = '<h3 style="color: #FF5252; margin-top: 20px;">(i) Two Essential Criteria for Effective Collisions</h3>';
if (overviewHtml.includes(targetCollision)) {
  overviewHtml = overviewHtml.replace(targetCollision, targetCollision + '\n\n' + cards.collisionTheory);
  console.log("Inserted Card 8: Collision Theory in Section 7(i)");
}

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_3_overview_with_all_8_cards.html', overviewHtml, 'utf8');

// Update c12-chem-3.ts
const fullTs = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-3.ts', 'utf8');
const restTs = fullTs.slice(fullTs.indexOf('export const c12Chem3HtmlSolutions'));

const newTsContent = `// Class 12 Chemistry Unit III: Chemical Kinetics (Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem3HtmlOverview = ${JSON.stringify(overviewHtml)};

${restTs}`;

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-3.ts', newTsContent, 'utf8');
console.log("Successfully updated client/data/content/c12-chem-3.ts with ALL 8 diagrams!");
