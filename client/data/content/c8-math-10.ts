import { ChapterContent } from "../types";

const ex101Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FFD600; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FFD600; padding-left: 15px; margin-top: 15px; background: rgba(255, 214, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FFD600; font-weight: 700; }
    .step-label { color: #FFE082; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Evaluate</div>
      <div class="q-subtext">(i) 3<sup>-2</sup></div>
      <div class="q-subtext">(ii) (-4)<sup>-2</sup></div>
      <div class="q-subtext">(iii) (<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>)<sup>-5</sup></div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> 3<sup>-2</sup> = <span class='frac'><span class='num'>1</span><span class='den'>3<sup>2</sup></span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>9</span></span></span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> (-4)<sup>-2</sup> = <span class='frac'><span class='num'>1</span><span class='den'>(-4)<sup>2</sup></span></span> = <span class='frac'><span class='num'>1</span><span class='den'>(-4) × (-4)</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>16</span></span></span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii)</span> (<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>)<sup>-5</sup> = (<span class='frac'><span class='num'>2</span><span class='den'>1</span></span>)<sup>5</sup> = 2<sup>5</sup> = <span class="ans-highlight">32</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Simplify and express the result in power notation with positive exponent.</div>
      <div class="q-subtext">(i) (-4)<sup>5</sup> ÷ (-4)<sup>8</sup></div>
      <div class="q-subtext">(ii) (<span class='frac'><span class='num'>1</span><span class='den'>2<sup>3</sup></span></span>)<sup>2</sup></div>
      <div class="q-subtext">(iii) (-3)<sup>4</sup> × (<span class='frac'><span class='num'>5</span><span class='den'>3</span></span>)<sup>4</sup></div>
      <div class="q-subtext">(iv) (3<sup>-7</sup> ÷ 3<sup>-10</sup>) × 3<sup>-5</sup></div>
      <div class="q-subtext">(v) 2<sup>-3</sup> × (-7)<sup>-3</sup></div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> (-4)<sup>5</sup> ÷ (-4)<sup>8</sup> = (-4)<sup>5 - 8</sup> = (-4)<sup>-3</sup> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>(-4)<sup>3</sup></span></span></span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> (<span class='frac'><span class='num'>1</span><span class='den'>2<sup>3</sup></span></span>)<sup>2</sup> = <span class='frac'><span class='num'>1<sup>2</sup></span><span class='den'>(2<sup>3</sup>)<sup>2</sup></span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>2<sup>6</sup></span></span></span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii)</span> (-3)<sup>4</sup> × (<span class='frac'><span class='num'>5</span><span class='den'>3</span></span>)<sup>4</sup> = (-3 × <span class='frac'><span class='num'>5</span><span class='den'>3</span></span>)<sup>4</sup> = (-5)<sup>4</sup> = <span class="ans-highlight">5<sup>4</sup></span></div>
        <div class="sol-step">(Note: Since power is even, negative sign is eliminated).</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iv)</span> (3<sup>-7</sup> ÷ 3<sup>-10</sup>) × 3<sup>-5</sup> = 3<sup>-7 - (-10)</sup> × 3<sup>-5</sup></div>
        <div class="sol-step">= 3<sup>-7 + 10</sup> × 3<sup>-5</sup> = 3<sup>3</sup> × 3<sup>-5</sup></div>
        <div class="sol-step">= 3<sup>3 + (-5)</sup> = 3<sup>-2</sup> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>3<sup>2</sup></span></span></span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(v)</span> 2<sup>-3</sup> × (-7)<sup>-3</sup> = [2 × (-7)]<sup>-3</sup></div>
        <div class="sol-step">= (-14)<sup>-3</sup> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>(-14)<sup>3</sup></span></span></span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Find the value of.</div>
      <div class="q-subtext">(i) (3<sup>0</sup> + 4<sup>-1</sup>) × 2<sup>2</sup></div>
      <div class="q-subtext">(ii) (2<sup>-1</sup> × 4<sup>-1</sup>) ÷ 2<sup>-2</sup></div>
      <div class="q-subtext">(iii) (<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>)<sup>-2</sup> + (<span class='frac'><span class='num'>1</span><span class='den'>3</span></span>)<sup>-2</sup> + (<span class='frac'><span class='num'>1</span><span class='den'>4</span></span>)<sup>-2</sup></div>
      <div class="q-subtext">(iv) (3<sup>-1</sup> + 4<sup>-1</sup> + 5<sup>-1</sup>)<sup>0</sup></div>
      <div class="q-subtext">(v) { (<span class='frac'><span class='num'>-2</span><span class='den'>3</span></span>)<sup>-2</sup> }<sup>2</sup></div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> (3<sup>0</sup> + 4<sup>-1</sup>) × 2<sup>2</sup> = (1 + <span class='frac'><span class='num'>1</span><span class='den'>4</span></span>) × 4</div>
        <div class="sol-step">= (<span class='frac'><span class='num'>5</span><span class='den'>4</span></span>) × 4 = <span class="ans-highlight">5</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> (2<sup>-1</sup> × 4<sup>-1</sup>) ÷ 2<sup>-2</sup> = (<span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × <span class='frac'><span class='num'>1</span><span class='den'>4</span></span>) ÷ (<span class='frac'><span class='num'>1</span><span class='den'>2<sup>2</sup></span></span>)</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>8</span></span> ÷ <span class='frac'><span class='num'>1</span><span class='den'>4</span></span> = <span class='frac'><span class='num'>1</span><span class='den'>8</span></span> × 4 = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>2</span></span></span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii)</span> (<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>)<sup>-2</sup> + (<span class='frac'><span class='num'>1</span><span class='den'>3</span></span>)<sup>-2</sup> + (<span class='frac'><span class='num'>1</span><span class='den'>4</span></span>)<sup>-2</sup> = (2)<sup>2</sup> + (3)<sup>2</sup> + (4)<sup>2</sup></div>
        <div class="sol-step">= 4 + 9 + 16 = <span class="ans-highlight">29</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(iv)</span> (3<sup>-1</sup> + 4<sup>-1</sup> + 5<sup>-1</sup>)<sup>0</sup></div>
        <div class="sol-step">Since a<sup>0</sup> = 1 for any non-zero 'a', the value is <span class="ans-highlight">1</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(v)</span> { (<span class='frac'><span class='num'>-2</span><span class='den'>3</span></span>)<sup>-2</sup> }<sup>2</sup> = (<span class='frac'><span class='num'>-2</span><span class='den'>3</span></span>)<sup>-2 × 2</sup> = (<span class='frac'><span class='num'>-2</span><span class='den'>3</span></span>)<sup>-4</sup></div>
        <div class="sol-step">= (<span class='frac'><span class='num'>-3</span><span class='den'>2</span></span>)<sup>4</sup> = <span class='frac'><span class='num'>(-3)<sup>4</sup></span><span class='den'>2<sup>4</sup></span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>81</span><span class='den'>16</span></span></span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Evaluate:</div>
      <div class="q-subtext">(i) <span class='frac'><span class='num'>8<sup>-1</sup> × 5<sup>3</sup></span><span class='den'>2<sup>-4</sup></span></span></div>
      <div class="q-subtext">(ii) (5<sup>-1</sup> × 2<sup>-1</sup>) × 6<sup>-1</sup></div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> <span class='frac'><span class='num'>8<sup>-1</sup> × 5<sup>3</sup></span><span class='den'>2<sup>-4</sup></span></span> = <span class='frac'><span class='num'>2<sup>4</sup> × 5<sup>3</sup></span><span class='den'>8<sup>1</sup></span></span></div>
        <div class="sol-step">= <span class='frac'><span class='num'>16 × 125</span><span class='den'>8</span></span> = 2 × 125 = <span class="ans-highlight">250</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> (5<sup>-1</sup> × 2<sup>-1</sup>) × 6<sup>-1</sup> = (<span class='frac'><span class='num'>1</span><span class='den'>5</span></span> × <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>) × <span class='frac'><span class='num'>1</span><span class='den'>6</span></span></div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>10</span></span> × <span class='frac'><span class='num'>1</span><span class='den'>6</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>60</span></span></span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Find the value of m for which 5<sup>m</sup> ÷ 5<sup>-3</sup> = 5<sup>5</sup>.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Given: 5<sup>m</sup> ÷ 5<sup>-3</sup> = 5<sup>5</sup></div>
        <div class="sol-step">Using law a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m - n</sup>:</div>
        <div class="sol-step">5<sup>m - (-3)</sup> = 5<sup>5</sup></div>
        <div class="sol-step">5<sup>m + 3</sup> = 5<sup>5</sup></div>
        <div class="sol-step">Comparing exponents since bases are equal:</div>
        <div class="sol-step">m + 3 = 5</div>
        <div class="sol-step">m = 5 - 3</div>
        <div class="sol-step"><span class="ans-highlight">m = 2</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. Evaluate:</div>
      <div class="q-subtext">(i) { (<span class='frac'><span class='num'>1</span><span class='den'>3</span></span>)<sup>-1</sup> - (<span class='frac'><span class='num'>1</span><span class='den'>4</span></span>)<sup>-1</sup> }<sup>-1</sup></div>
      <div class="q-subtext">(ii) (<span class='frac'><span class='num'>5</span><span class='den'>8</span></span>)<sup>-7</sup> × (<span class='frac'><span class='num'>8</span><span class='den'>5</span></span>)<sup>-4</sup></div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> { (<span class='frac'><span class='num'>1</span><span class='den'>3</span></span>)<sup>-1</sup> - (<span class='frac'><span class='num'>1</span><span class='den'>4</span></span>)<sup>-1</sup> }<sup>-1</sup> = { 3 - 4 }<sup>-1</sup></div>
        <div class="sol-step">= {-1}<sup>-1</sup> = <span class='frac'><span class='num'>1</span><span class='den'>-1</span></span> = <span class="ans-highlight">-1</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> (<span class='frac'><span class='num'>5</span><span class='den'>8</span></span>)<sup>-7</sup> × (<span class='frac'><span class='num'>8</span><span class='den'>5</span></span>)<sup>-4</sup> = (<span class='frac'><span class='num'>8</span><span class='den'>5</span></span>)<sup>7</sup> × (<span class='frac'><span class='num'>8</span><span class='den'>5</span></span>)<sup>-4</sup></div>
        <div class="sol-step">= (<span class='frac'><span class='num'>8</span><span class='den'>5</span></span>)<sup>7 + (-4)</sup> = (<span class='frac'><span class='num'>8</span><span class='den'>5</span></span>)<sup>3</sup></div>
        <div class="sol-step">= <span class='frac'><span class='num'>8<sup>3</sup></span><span class='den'>5<sup>3</sup></span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>512</span><span class='den'>125</span></span></span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. Simplify:</div>
      <div class="q-subtext">(i) <span class='frac'><span class='num'>25 × t<sup>-4</sup></span><span class='den'>5<sup>-3</sup> × 10 × t<sup>-8</sup></span></span> (t ≠ 0)</div>
      <div class="q-subtext">(ii) <span class='frac'><span class='num'>3<sup>-5</sup> × 10<sup>-5</sup> × 125</span><span class='den'>5<sup>-7</sup> × 6<sup>-5</sup></span></span></div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> <span class='frac'><span class='num'>25 × t<sup>-4</sup></span><span class='den'>5<sup>-3</sup> × 10 × t<sup>-8</sup></span></span> = <span class='frac'><span class='num'>5<sup>2</sup> × t<sup>-4</sup></span><span class='den'>5<sup>-3</sup> × (2 × 5) × t<sup>-8</sup></span></span></div>
        <div class="sol-step">= <span class='frac'><span class='num'>5<sup>2</sup> × t<sup>-4</sup></span><span class='den'>5<sup>-2</sup> × 2 × t<sup>-8</sup></span></span></div>
        <div class="sol-step">= <span class='frac'><span class='num'>5<sup>2 - (-2)</sup> × t<sup>-4 - (-8)</sup></span><span class='den'>2</span></span></div>
        <div class="sol-step">= <span class='frac'><span class='num'>5<sup>4</sup> × t<sup>4</sup></span><span class='den'>2</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>625 t<sup>4</sup></span><span class='den'>2</span></span></span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> <span class='frac'><span class='num'>3<sup>-5</sup> × 10<sup>-5</sup> × 125</span><span class='den'>5<sup>-7</sup> × 6<sup>-5</sup></span></span></div>
        <div class="sol-step">= <span class='frac'><span class='num'>3<sup>-5</sup> × (2 × 5)<sup>-5</sup> × 5<sup>3</sup></span><span class='den'>5<sup>-7</sup> × (2 × 3)<sup>-5</sup></span></span></div>
        <div class="sol-step">= <span class='frac'><span class='num'>3<sup>-5</sup> × 2<sup>-5</sup> × 5<sup>-5</sup> × 5<sup>3</sup></span><span class='den'>5<sup>-7</sup> × 2<sup>-5</sup> × 3<sup>-5</sup></span></span></div>
        <div class="sol-step">= 3<sup>-5 - (-5)</sup> × 2<sup>-5 - (-5)</sup> × 5<sup>-5 + 3 - (-7)</sup></div>
        <div class="sol-step">= 3<sup>0</sup> × 2<sup>0</sup> × 5<sup>-2 + 7</sup></div>
        <div class="sol-step">= 1 × 1 × 5<sup>5</sup> = <span class="ans-highlight">3125</span></div>
      </div>
    </div>
  </div>
`;

const ex102Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FFD600; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FFD600; padding-left: 15px; margin-top: 15px; background: rgba(255, 214, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FFD600; font-weight: 700; }
    .step-label { color: #FFE082; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Express the following numbers in standard form.</div>
      <div class="q-subtext">(i) 0.0000000000085</div>
      <div class="q-subtext">(ii) 0.00000000000942</div>
      <div class="q-subtext">(iii) 6020000000000000</div>
      <div class="q-subtext">(iv) 0.00000000837</div>
      <div class="q-subtext">(v) 31860000000</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> 0.0000000000085 = <span class="ans-highlight">8.5 × 10<sup>-12</sup></span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> 0.00000000000942 = <span class="ans-highlight">9.42 × 10<sup>-12</sup></span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> 6020000000000000 = <span class="ans-highlight">6.02 × 10<sup>15</sup></span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> 0.00000000837 = <span class="ans-highlight">8.37 × 10<sup>-9</sup></span></div>
        <div class="sol-step"><span class="step-label">(v)</span> 31860000000 = <span class="ans-highlight">3.186 × 10<sup>10</sup></span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Express the following numbers in usual form.</div>
      <div class="q-subtext">(i) 3.02 × 10<sup>-6</sup></div>
      <div class="q-subtext">(ii) 4.5 × 10<sup>4</sup></div>
      <div class="q-subtext">(iii) 3 × 10<sup>-8</sup></div>
      <div class="q-subtext">(iv) 1.0001 × 10<sup>9</sup></div>
      <div class="q-subtext">(v) 5.8 × 10<sup>12</sup></div>
      <div class="q-subtext">(vi) 3.61492 × 10<sup>6</sup></div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> 3.02 × 10<sup>-6</sup> = <span class="ans-highlight">0.00000302</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> 4.5 × 10<sup>4</sup> = <span class="ans-highlight">45000</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> 3 × 10<sup>-8</sup> = <span class="ans-highlight">0.00000003</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> 1.0001 × 10<sup>9</sup> = <span class="ans-highlight">1000100000</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> 5.8 × 10<sup>12</sup> = <span class="ans-highlight">5800000000000</span></div>
        <div class="sol-step"><span class="step-label">(vi)</span> 3.61492 × 10<sup>6</sup> = <span class="ans-highlight">3614920</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Express the numbers appearing in the following statements in standard form.</div>
      <div class="q-subtext">(i) 1 micron is equal to <span class='frac'><span class='num'>1</span><span class='den'>1000000</span></span> m.</div>
      <div class="q-subtext">(ii) Charge of an electron is 0.000,000,000,000,000,000,16 coulomb.</div>
      <div class="q-subtext">(iii) Size of a bacteria is 0.0000005 m.</div>
      <div class="q-subtext">(iv) Size of a plant cell is 0.00001275 m.</div>
      <div class="q-subtext">(v) Thickness of a thick paper is 0.07 mm.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> <span class='frac'><span class='num'>1</span><span class='den'>1000000</span></span> m = <span class="ans-highlight">1 × 10<sup>-6</sup> m</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> 0.00000000000000000016 coulomb = <span class="ans-highlight">1.6 × 10<sup>-19</sup> coulomb</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> 0.0000005 m = <span class="ans-highlight">5.0 × 10<sup>-7</sup> m</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> 0.00001275 m = <span class="ans-highlight">1.275 × 10<sup>-5</sup> m</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> 0.07 mm = <span class="ans-highlight">7 × 10<sup>-2</sup> mm</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. In a stack there are 5 books each of thickness 20 mm and 5 paper sheets each of thickness 0.016 mm. What is the total thickness of the stack?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Thickness of 1 book = 20 mm</div>
        <div class="sol-step">Thickness of 5 books = 5 × 20 = 100 mm</div>
        <div class="sol-step">Thickness of 1 paper sheet = 0.016 mm</div>
        <div class="sol-step">Thickness of 5 paper sheets = 5 × 0.016 = 0.08 mm</div>
        <div class="sol-step">Total thickness of the stack = 100 mm + 0.08 mm</div>
        <div class="sol-step">= 100.08 mm</div>
        <div class="sol-step">In standard form: <span class="ans-highlight">1.0008 × 10<sup>2</sup> mm</span></div>
      </div>
    </div>
  </div>
`;

export const c8Math10: ChapterContent = {
  id: "c8-math-10",
  number: 10,
  title: "Exponents and Powers",
  introduction: "In this chapter, we extend our knowledge of exponents by learning about numbers with negative exponents. We will also learn how to express very small and very large numbers in standard form.",
  mcqs: [
    { id: "m1", question: "aᵐ × aⁿ is equal to:", options: ["aᵐ⁻ⁿ", "aᵐⁿ", "aᵐ⁺ⁿ", "aᵐ/ⁿ"], correctAnswer: "aᵐ⁺ⁿ" },
    { id: "m2", question: "a⁰ (where a ≠ 0) is equal to:", options: ["0", "a", "1", "-1"], correctAnswer: "1" },
    { id: "m3", question: "The value of 2⁻³ is:", options: ["-6", "<span class='frac'><span class='num'>1</span><span class='den'>8</span></span>", "-8", "8"], correctAnswer: "<span class='frac'><span class='num'>1</span><span class='den'>8</span></span>" },
    { id: "m4", question: "Standard form of 0.000045 is:", options: ["45 × 10⁻⁶", "4.5 × 10⁻⁵", "4.5 × 10⁵", "0.45 × 10⁻⁴"], correctAnswer: "4.5 × 10⁻⁵" },
    { id: "m5", question: "(3⁰ + 4⁰ + 5⁰) equals:", options: ["12", "0", "1", "3"], correctAnswer: "3" },
    { id: "m6", question: "(aᵐ)ⁿ is equal to:", options: ["aᵐ⁺ⁿ", "aᵐ⁻ⁿ", "aᵐⁿ", "aᵐ/ⁿ"], correctAnswer: "aᵐⁿ" },
    { id: "m7", question: "Usual form of 3.02 × 10⁻⁴ is:", options: ["0.0302", "0.00302", "0.000302", "0.0000302"], correctAnswer: "0.000302" },
    { id: "m8", question: "aᵐ ÷ aⁿ is equal to:", options: ["aᵐ⁺ⁿ", "aᵐ⁻ⁿ", "aᵐⁿ", "aᵐ/ⁿ"], correctAnswer: "aᵐ⁻ⁿ" },
    { id: "m9", question: "Multiplicative inverse of 10⁻¹⁰⁰ is:", options: ["10¹⁰", "-10¹⁰⁰", "10¹⁰⁰", "10⁻¹⁰"], correctAnswer: "10¹⁰⁰" },
    { id: "m10", question: "Value of (1/2)⁻¹ is:", options: ["-2", "2", "1/2", "-1/2"], correctAnswer: "2" }
  ],
  summary: [
    "Numbers with negative exponents obey the same laws of exponents as positive exponents.",
    "a<sup>-m</sup> = <span class='frac'><span class='num'>1</span><span class='den'>a<sup>m</sup></span></span>, for any non-zero integer a.",
    "Very small numbers can be expressed in standard form using negative exponents.",
    "Standard form is represented as k × 10<sup>n</sup>, where 1 ≤ k < 10 and n is an integer."
  ],
  exercises: [
    { id: "ex10-1", name: "Exercise 10.1", questions: [] },
    { id: "ex10-2", name: "Exercise 10.2", questions: [] }
  ],
  isHtmlView: true,
  htmlOverview: `
    <style>
      .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
      .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
      .frac .den { padding: 0 2px; }
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
      
      .premium-container {
        padding: 20px;
        color: #ffffff;
        font-family: 'Outfit', sans-serif !important;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        border-radius: 20px;
        margin: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      .section-box {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 20px;
        backdrop-filter: blur(10px);
      }

      .section-header {
        color: #FFD600;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .prop-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
        background: rgba(0,0,0,0.2);
        border-radius: 12px;
        overflow: hidden;
      }

      .prop-table th, .prop-table td {
        padding: 12px;
        border: 1px solid rgba(255,255,255,0.1);
        text-align: left;
        font-size: 15px;
      }

      .prop-table th {
        background: rgba(255,255,255,0.1);
        color: #FFE082;
        font-weight: 700;
      }

      .highlight { color: #FFE082; font-weight: 600; }
      
      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }
    </style>

    <div class="premium-container">
      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          In this chapter, we extend our knowledge of exponents by learning about numbers with negative exponents. We will also learn how to express very small and very large numbers in standard form.
        </div>
      </div>
      <div class="section-box">
        <div class="section-header"><span>✦</span> Laws of Exponents</div>
        <table class="prop-table">
          <tr>
            <th>Law</th>
            <th>Formula</th>
          </tr>
          <tr>
            <td><strong>Multiplication</strong></td>
            <td><span class="highlight">a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></span></td>
          </tr>
          <tr>
            <td><strong>Division</strong></td>
            <td><span class="highlight">a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m-n</sup></span></td>
          </tr>
          <tr>
            <td><strong>Power of a Power</strong></td>
            <td><span class="highlight">(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup></span></td>
          </tr>
          <tr>
            <td><strong>Power of a Product</strong></td>
            <td><span class="highlight">a<sup>m</sup> × b<sup>m</sup> = (ab)<sup>m</sup></span></td>
          </tr>
          <tr>
            <td><strong>Power of a Fraction</strong></td>
            <td><span class="highlight">a<sup>m</sup> ÷ b<sup>m</sup> = (<span class='frac'><span class='num'>a</span><span class='den'>b</span></span>)<sup>m</sup></span></td>
          </tr>
          <tr>
            <td><strong>Negative Exponent</strong></td>
            <td><span class="highlight">a<sup>-m</sup> = <span class='frac'><span class='num'>1</span><span class='den'>a<sup>m</sup></span></span></span></td>
          </tr>
          <tr>
            <td><strong>Zero Exponent</strong></td>
            <td><span class="highlight">a<sup>0</sup> = 1</span> (for a ≠ 0)</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex10-1": ex101Content,
    "ex10-2": ex102Content
  }
};
