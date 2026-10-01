const themeColor = "#FF9100";
const accentColor = "#FFB74D";

const styleBlock = `
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
    border: 1.5px solid rgba(255, 145, 0, 0.35) !important; 
    border-radius: 12px !important; 
    padding: 16px !important; 
    margin-bottom: 24px !important; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; 
  }
  .q-title { 
    font-size: 18px !important; 
    font-weight: 800 !important; 
    color: #FF9100 !important; 
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
    border-left: 3.5px solid #FF9100 !important; 
    border-radius: 8px !important; 
    padding: 14px 16px !important; 
    margin-top: 12px !important; 
    text-align: left !important; 
  }
  .sol-title { 
    font-size: 15.5px !important; 
    font-weight: 800 !important; 
    color: #FFB74D !important; 
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
  .reason {
    color: #94A3B8 !important;
    font-size: 13.5px !important;
    font-style: italic !important;
    display: inline-block !important;
    margin-left: 6px !important;
  }
  .ans-box { 
    background: rgba(76, 175, 80, 0.12) !important; 
    border: 1px solid #4CAF50 !important; 
    border-radius: 6px !important; 
    padding: 8px 12px !important; 
    margin-top: 12px !important; 
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
    display: block !important; 
    background: #FFFFFF !important; 
    border: 1.5px solid rgba(255, 145, 0, 0.45) !important; 
    border-radius: 10px !important; 
    padding: 12px 10px !important; 
    margin: 14px auto 8px auto !important; 
    width: 100% !important; 
    max-width: 440px !important; 
    box-sizing: border-box !important; 
    overflow: hidden !important; 
    box-shadow: 0 4px 18px rgba(0,0,0,0.35) !important; 
    text-align: center !important; 
  }
  .diagram-wrapper svg { 
    display: block !important; 
    width: 100% !important; 
    height: auto !important; 
    margin: 0 auto !important; 
  }
  .diagram-caption { 
    color: #CBD5E1 !important; 
    font-size: 13.5px !important; 
    font-weight: 600 !important; 
    text-align: center !important; 
    margin-top: 8px !important; 
    margin-bottom: 14px !important; 
    line-height: 1.45 !important; 
  }
</style>
`;

module.exports = {
  themeColor,
  accentColor,
  styleBlock
};
