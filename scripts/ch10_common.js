// Common styling and helper functions for Class 11 Math Chapter 10: Conic Sections
const THEME_COLOR = "#00E5FF";

const STYLES = `
<style>
  * { box-sizing: border-box; }
  body { 
    margin: 0; 
    padding: 4px 2px; 
    color: #FFFFFF; 
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
    font-size: 15.5px; 
    line-height: 1.6;
    background-color: transparent;
  }
  .frac { 
    display: inline-flex !important; 
    flex-direction: column !important; 
    vertical-align: middle !important; 
    text-align: center !important; 
    font-size: 0.95em !important; 
    margin: 2px 6px !important; 
    line-height: 1.25 !important; 
  }
  .frac .num { 
    border-bottom: 1.5px solid currentColor !important; 
    padding: 1px 4px !important; 
    text-align: center !important; 
  }
  .frac .den { 
    padding: 1px 4px !important; 
    text-align: center !important; 
  }
  .q-card { 
    background: rgba(15, 23, 42, 0.75) !important; 
    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; 
    border-left: 4px solid ${THEME_COLOR} !important;
    border-radius: 12px !important; 
    padding: 16px !important; 
    margin-bottom: 24px !important; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; 
  }
  .q-title { 
    font-size: 18px !important; 
    font-weight: 800 !important; 
    color: ${THEME_COLOR} !important; 
    margin-bottom: 10px !important; 
    display: flex !important; 
    align-items: center !important; 
    gap: 8px !important; 
  }
  .q-text { 
    font-size: 15.5px !important; 
    color: #FFFFFF !important; 
    line-height: 2.1 !important; 
    margin-bottom: 16px !important; 
    font-weight: 500 !important; 
    text-align: left !important; 
  }
  .sol-box { 
    background: rgba(0, 0, 0, 0.35) !important; 
    border-left: 3.5px solid ${THEME_COLOR} !important; 
    border-radius: 8px !important; 
    padding: 14px 16px !important; 
    margin-top: 12px !important; 
    text-align: left !important; 
  }
  .sol-title { 
    font-size: 15.5px !important; 
    font-weight: 800 !important; 
    color: #E2E8F0 !important; 
    margin-bottom: 10px !important; 
    display: flex !important; 
    align-items: center !important; 
    gap: 6px !important; 
  }
  .sol-step { 
    font-size: 15px !important; 
    color: #E2E8F0 !important; 
    line-height: 2.35 !important; 
    text-align: left !important; 
  }
  .sol-step div { 
    margin-top: 6px !important; 
    margin-bottom: 6px !important; 
    text-align: left !important; 
  }
  .ans-box { 
    background: rgba(76, 175, 80, 0.12) !important; 
    border: 1px solid #4CAF50 !important; 
    border-radius: 6px !important; 
    padding: 8px 12px !important; 
    margin-top: 10px !important; 
    display: inline-block !important; 
  }
  .ans-label { 
    color: #81C784 !important; 
    font-weight: 700 !important; 
    margin-right: 6px !important; 
  }
  .ans-val { 
    color: #FFFFFF !important; 
    font-weight: 700 !important; 
  }
  .diagram-wrapper {
    background: rgba(15, 23, 42, 0.9);
    border: 1.5px solid rgba(0, 229, 255, 0.4);
    border-radius: 10px;
    padding: 14px 16px;
    margin: 18px 0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.35);
    text-align: center;
  }
  .diagram-svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    margin: 0 auto;
    max-width: 460px;
  }
  .diagram-caption {
    color: #CBD5E1;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    line-height: 1.5;
    font-weight: 500;
  }
</style>
`;

function frac(num, den) {
  return `<span class="frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
}

function qCard(qNum, qText, stepsHtml, ansVal) {
  return `
  <!-- Question ${qNum} -->
  <div class="q-card">
    <div class="q-title">✦ Question ${qNum}</div>
    <div class="q-text">
      ${qText}
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        ${stepsHtml}
      </div>
      <div class="ans-box">
        <span class="ans-label">✓ Final Answer:</span>
        <span class="ans-val">${ansVal}</span>
      </div>
    </div>
  </div>`;
}

function exBanner(exTitle, exSubtitle) {
  return `
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${THEME_COLOR}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${THEME_COLOR};">
      📘 Conic Sections &bull; ${exTitle}
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      ${exSubtitle} &bull; Class 11 Mathematics
    </div>
  </div>`;
}

module.exports = {
  THEME_COLOR,
  STYLES,
  frac,
  qCard,
  exBanner
};
