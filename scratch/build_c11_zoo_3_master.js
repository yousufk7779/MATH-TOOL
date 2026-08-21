const fs = require('fs');
const path = require('path');

// Helper to convert SVG text to Base64 data URL
function svgToBase64(svgString) {
  const cleanSvg = svgString.trim().replace(/\s+/g, ' ');
  const b64 = Buffer.from(cleanSvg).toString('base64');
  return `data:image/svg+xml;base64,${b64}`;
}

const themeColor = "#FF007F"; // Deep Pink / Rose for Zoology Ch 3

// Read SVGs script and execute to get base64 URLs
const {
  svgProkaryote, svgFluidMosaic, svgEndomembrane, svgMitochondrion, svgChloroplast,
  svgCiliaAxoneme, svgCentriole, svgNucleus, svgCellCycle, svgMitosis, svgMeiosisProphase1
} = require('./build_c11_zoo_3_svgs.js');

// Helper for rendering image container
function renderDiagram(imgSrc, altText, captionText) {
  return `<div style="text-align: center; margin: 24px 0;">
  <img src="${imgSrc}" alt="${altText}" style="max-width: 100%; border-radius: 10px; border: 1.5px solid ${themeColor}; box-shadow: 0 4px 15px rgba(255, 0, 127, 0.2);" />
  <p style="color: ${themeColor}; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-align: center !important;">${captionText}</p>
</div>`;
}

// Write master file creator script
console.log("Building c11-zoo-3.ts...");
