const fs = require('fs');
const path = require('path');

// Execute build scripts for Ch 1 to 10 sequentially
const scripts = [
  'build_c11_phy_1_3d_master.js',
  'build_c11_phy_2_3d_master.js',
  'build_c11_phy_3_3d_master.js',
  'build_c11_phy_4_3d_master.js',
  'build_c11_phy_5_3d_master.js',
  'build_c11_phy_6_master.js',
  'build_c11_phy_7_master.js',
  'build_c11_phy_8_master.js',
  'build_c11_phy_9_master.js',
  'build_c11_phy_10_master.js'
];

console.log("Starting master build for all 10 Class 11 Physics chapters...");

scripts.forEach((script, idx) => {
  const scriptPath = path.join(__dirname, script);
  if (fs.existsSync(scriptPath)) {
    console.log(`\nExecuting (${idx + 1}/10): ${script}...`);
    require(scriptPath);
  } else {
    console.warn(`Script not found: ${script}`);
  }
});

console.log("\nMaster build finished successfully!");
