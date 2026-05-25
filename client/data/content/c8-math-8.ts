import { ChapterContent } from "../types";

const ex81Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FF6D00; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FF6D00; padding-left: 15px; margin-top: 15px; background: rgba(255, 109, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FF6D00; font-weight: 700; }
    .step-label { color: #FF9100; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Add the following.</div>
      <div class="q-subtext">(i) ab - bc, bc - ca, ca - ab</div>
      <div class="q-subtext">(ii) a - b + ab, b - c + bc, c - a + ac</div>
      <div class="q-subtext">(iii) 2p²q² - 3pq + 4, 5 + 7pq - 3p²q²</div>
      <div class="q-subtext">(iv) l² + m², m² + n², n² + l², 2lm + 2mn + 2nl</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> (ab - bc) + (bc - ca) + (ca - ab)</div>
        <div class="sol-step">= ab - ab - bc + bc - ca + ca = <span class="ans-highlight">0</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> (a - b + ab) + (b - c + bc) + (c - a + ac)</div>
        <div class="sol-step">= a - a - b + b - c + c + ab + bc + ac</div>
        <div class="sol-step">= <span class="ans-highlight">ab + bc + ac</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii)</span> (2p²q² - 3pq + 4) + (5 + 7pq - 3p²q²)</div>
        <div class="sol-step">= 2p²q² - 3p²q² - 3pq + 7pq + 4 + 5</div>
        <div class="sol-step">= <span class="ans-highlight">-p²q² + 4pq + 9</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(iv)</span> (l² + m²) + (m² + n²) + (n² + l²) + (2lm + 2mn + 2nl)</div>
        <div class="sol-step">= l² + l² + m² + m² + n² + n² + 2lm + 2mn + 2nl</div>
        <div class="sol-step">= <span class="ans-highlight">2l² + 2m² + 2n² + 2lm + 2mn + 2nl</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Subtract the following.</div>
      <div class="q-subtext">(a) Subtract 4a - 7ab + 3b + 12 from 12a - 9ab + 5b - 3</div>
      <div class="q-subtext">(b) Subtract 3xy + 5yz - 7zx from 5xy - 2yz - 2zx + 10xyz</div>
      <div class="q-subtext">(c) Subtract 4p²q - 3pq + 5pq² - 8p + 7q - 10 from 18 - 3p - 11q + 5pq - 2pq² + 5p²q</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(a)</span> (12a - 9ab + 5b - 3) - (4a - 7ab + 3b + 12)</div>
        <div class="sol-step">= 12a - 9ab + 5b - 3 - 4a + 7ab - 3b - 12</div>
        <div class="sol-step">= (12a - 4a) + (-9ab + 7ab) + (5b - 3b) + (-3 - 12)</div>
        <div class="sol-step">= <span class="ans-highlight">8a - 2ab + 2b - 15</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(b)</span> (5xy - 2yz - 2zx + 10xyz) - (3xy + 5yz - 7zx)</div>
        <div class="sol-step">= 5xy - 2yz - 2zx + 10xyz - 3xy - 5yz + 7zx</div>
        <div class="sol-step">= (5xy - 3xy) + (-2yz - 5yz) + (-2zx + 7zx) + 10xyz</div>
        <div class="sol-step">= <span class="ans-highlight">2xy - 7yz + 5zx + 10xyz</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(c)</span> (18 - 3p - 11q + 5pq - 2pq² + 5p²q) - (4p²q - 3pq + 5pq² - 8p + 7q - 10)</div>
        <div class="sol-step">= 18 - 3p - 11q + 5pq - 2pq² + 5p²q - 4p²q + 3pq - 5pq² + 8p - 7q + 10</div>
        <div class="sol-step">= (5p²q - 4p²q) + (-2pq² - 5pq²) + (5pq + 3pq) + (-3p + 8p) + (-11q - 7q) + (18 + 10)</div>
        <div class="sol-step">= <span class="ans-highlight">p²q - 7pq² + 8pq + 5p - 18q + 28</span></div>
      </div>
    </div>
  </div>
`;

const ex82Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FF6D00; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FF6D00; padding-left: 15px; margin-top: 15px; background: rgba(255, 109, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FF6D00; font-weight: 700; }
    .step-label { color: #FF9100; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .math-table { width: 100%; border-collapse: collapse; margin-top: 10px; color: #fff; font-size: 11px; }
    .math-table th, .math-table td { border: 1px solid rgba(255, 255, 255, 0.2); padding: 3px; text-align: center; white-space: nowrap; }
    .math-table th { background: rgba(255, 109, 0, 0.2); color: #FF9100; font-weight: bold; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Find the product of the following pairs of monomials</div>
      <div class="q-subtext">(i) 4, 7p</div>
      <div class="q-subtext">(ii) -4p, 7p</div>
      <div class="q-subtext">(iii) -4p, 7pq</div>
      <div class="q-subtext">(iv) 4p³, -3p</div>
      <div class="q-subtext">(v) 4p, 0</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> 4 × 7p = <span class="ans-highlight">28p</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> (-4p) × 7p = -4 × 7 × p × p = <span class="ans-highlight">-28p²</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> (-4p) × 7pq = -4 × 7 × p × p × q = <span class="ans-highlight">-28p²q</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> 4p³ × (-3p) = 4 × (-3) × p³ × p = <span class="ans-highlight">-12p⁴</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> 4p × 0 = <span class="ans-highlight">0</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Find the areas of rectangles with the following pairs of monomials as their lengths and breadths respectively.</div>
      <div class="q-subtext">(p, q); (10m, 5n); (20x², 5y²); (4x, 3x²); (3mn, 4np)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Area of rectangle = Length × Breadth</div>
        <div class="sol-step">(i) Area = p × q = <span class="ans-highlight">pq</span></div>
        <div class="sol-step">(ii) Area = 10m × 5n = <span class="ans-highlight">50mn</span></div>
        <div class="sol-step">(iii) Area = 20x² × 5y² = <span class="ans-highlight">100x²y²</span></div>
        <div class="sol-step">(iv) Area = 4x × 3x² = <span class="ans-highlight">12x³</span></div>
        <div class="sol-step">(v) Area = 3mn × 4np = <span class="ans-highlight">12mn²p</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Complete the table of products.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div style="overflow-x: auto;">
          <table class="math-table">
            <tr>
              <th>×</th>
              <th>2x</th>
              <th>-5y</th>
              <th>3x²</th>
              <th>-4xy</th>
              <th>7x²y</th>
              <th>-9x²y²</th>
            </tr>
            <tr>
              <th>2x</th>
              <td><span class="ans-highlight">4x²</span></td>
              <td><span class="ans-highlight">-10xy</span></td>
              <td><span class="ans-highlight">6x³</span></td>
              <td><span class="ans-highlight">-8x²y</span></td>
              <td><span class="ans-highlight">14x³y</span></td>
              <td><span class="ans-highlight">-18x³y²</span></td>
            </tr>
            <tr>
              <th>-5y</th>
              <td><span class="ans-highlight">-10xy</span></td>
              <td><span class="ans-highlight">25y²</span></td>
              <td><span class="ans-highlight">-15x²y</span></td>
              <td><span class="ans-highlight">20xy²</span></td>
              <td><span class="ans-highlight">-35x²y²</span></td>
              <td><span class="ans-highlight">45x²y³</span></td>
            </tr>
            <tr>
              <th>3x²</th>
              <td><span class="ans-highlight">6x³</span></td>
              <td><span class="ans-highlight">-15x²y</span></td>
              <td><span class="ans-highlight">9x⁴</span></td>
              <td><span class="ans-highlight">-12x³y</span></td>
              <td><span class="ans-highlight">21x⁴y</span></td>
              <td><span class="ans-highlight">-27x⁴y²</span></td>
            </tr>
            <tr>
              <th>-4xy</th>
              <td><span class="ans-highlight">-8x²y</span></td>
              <td><span class="ans-highlight">20xy²</span></td>
              <td><span class="ans-highlight">-12x³y</span></td>
              <td><span class="ans-highlight">16x²y²</span></td>
              <td><span class="ans-highlight">-28x³y²</span></td>
              <td><span class="ans-highlight">36x³y³</span></td>
            </tr>
            <tr>
              <th>7x²y</th>
              <td><span class="ans-highlight">14x³y</span></td>
              <td><span class="ans-highlight">-35x²y²</span></td>
              <td><span class="ans-highlight">21x⁴y</span></td>
              <td><span class="ans-highlight">-28x³y²</span></td>
              <td><span class="ans-highlight">49x⁴y²</span></td>
              <td><span class="ans-highlight">-63x⁴y³</span></td>
            </tr>
            <tr>
              <th>-9x²y²</th>
              <td><span class="ans-highlight">-18x³y²</span></td>
              <td><span class="ans-highlight">45x²y³</span></td>
              <td><span class="ans-highlight">-27x⁴y²</span></td>
              <td><span class="ans-highlight">36x³y³</span></td>
              <td><span class="ans-highlight">-63x⁴y³</span></td>
              <td><span class="ans-highlight">81x⁴y⁴</span></td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Obtain the volume of rectangular boxes with the following length, breadth and height respectively</div>
      <div class="q-subtext">(i) 5a, 3a², 7a⁴</div>
      <div class="q-subtext">(ii) 2p, 4q, 8r</div>
      <div class="q-subtext">(iii) xy, 2x²y, 2xy²</div>
      <div class="q-subtext">(iv) a, 2b, 3c</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Volume = Length × Breadth × Height</div>
        <div class="sol-step"><span class="step-label">(i)</span> Volume = 5a × 3a² × 7a⁴ = (5 × 3 × 7) × (a × a² × a⁴) = <span class="ans-highlight">105a⁷</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> Volume = 2p × 4q × 8r = (2 × 4 × 8) × (p × q × r) = <span class="ans-highlight">64pqr</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> Volume = xy × 2x²y × 2xy² = (1 × 2 × 2) × (x × x² × x) × (y × y × y²) = <span class="ans-highlight">4x⁴y⁴</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> Volume = a × 2b × 3c = (1 × 2 × 3) × (a × b × c) = <span class="ans-highlight">6abc</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Obtain the product of</div>
      <div class="q-subtext">(i) xy, yz, zx</div>
      <div class="q-subtext">(ii) a, -a², a³</div>
      <div class="q-subtext">(iii) 2, 4y, 8y², 16y³</div>
      <div class="q-subtext">(iv) a, 2b, 3c, 6abc</div>
      <div class="q-subtext">(v) m, -mn, mnp</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> xy × yz × zx = x²y²z² = <span class="ans-highlight">x²y²z²</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> a × (-a²) × a³ = <span class="ans-highlight">-a⁶</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> 2 × 4y × 8y² × 16y³ = (2 × 4 × 8 × 16) × (y × y² × y³) = <span class="ans-highlight">1024y⁶</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> a × 2b × 3c × 6abc = (1 × 2 × 3 × 6) × (a × b × c × abc) = <span class="ans-highlight">36a²b²c²</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> m × (-mn) × mnp = - (m × m × m) × (n × n) × p = <span class="ans-highlight">-m³n²p</span></div>
      </div>
    </div>
  </div>
`;

const ex83Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FF6D00; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FF6D00; padding-left: 15px; margin-top: 15px; background: rgba(255, 109, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FF6D00; font-weight: 700; }
    .step-label { color: #FF9100; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .math-table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; color: #fff; font-size: 14px; }
    .math-table th, .math-table td { border: 1px solid rgba(255, 255, 255, 0.2); padding: 8px 4px; text-align: center; }
    .math-table th { background: rgba(255, 109, 0, 0.2); color: #FF9100; font-weight: bold; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Carry out the multiplication of the expressions in each of the following pairs.</div>
      <div class="q-subtext">(i) 4p, q + r</div>
      <div class="q-subtext">(ii) ab, a - b</div>
      <div class="q-subtext">(iii) a + b, 7a²b²</div>
      <div class="q-subtext">(iv) a² - 9, 4a</div>
      <div class="q-subtext">(v) pq + qr + rp, 0</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> 4p × (q + r) = (4p × q) + (4p × r) = <span class="ans-highlight">4pq + 4pr</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> ab × (a - b) = (ab × a) - (ab × b) = <span class="ans-highlight">a²b - ab²</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> (a + b) × 7a²b² = (a × 7a²b²) + (b × 7a²b²) = <span class="ans-highlight">7a³b² + 7a²b³</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> (a² - 9) × 4a = (a² × 4a) - (9 × 4a) = <span class="ans-highlight">4a³ - 36a</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> (pq + qr + rp) × 0 = <span class="ans-highlight">0</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Complete the table.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div style="overflow-x: auto;">
          <table class="math-table">
            <tr>
              <th></th>
              <th>Expr 1</th>
              <th>Expr 2</th>
              <th>Product</th>
            </tr>
            <tr>
              <td>(i)</td>
              <td>a</td>
              <td>b + c + d</td>
              <td><span class="ans-highlight">ab + ac + ad</span></td>
            </tr>
            <tr>
              <td>(ii)</td>
              <td>x + y - 5</td>
              <td>5xy</td>
              <td><span class="ans-highlight">5x²y + 5xy² - 25xy</span></td>
            </tr>
            <tr>
              <td>(iii)</td>
              <td>p</td>
              <td>6p² - 7p + 5</td>
              <td><span class="ans-highlight">6p³ - 7p² + 5p</span></td>
            </tr>
            <tr>
              <td>(iv)</td>
              <td>4p²q²</td>
              <td>p² - q²</td>
              <td><span class="ans-highlight">4p⁴q² - 4p²q⁴</span></td>
            </tr>
            <tr>
              <td>(v)</td>
              <td>a + b + c</td>
              <td>abc</td>
              <td><span class="ans-highlight">a²bc + ab²c + abc²</span></td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Find the product.</div>
      <div class="q-subtext">(i) (a²) × (2a<sup>22</sup>) × (4a<sup>26</sup>)</div>
      <div class="q-subtext">(ii) (<span class='frac'><span class='num'>2</span><span class='den'>3</span></span> xy) × (-<span class='frac'><span class='num'>9</span><span class='den'>10</span></span> x²y²)</div>
      <div class="q-subtext">(iii) (-<span class='frac'><span class='num'>10</span><span class='den'>3</span></span> pq³) × (<span class='frac'><span class='num'>6</span><span class='den'>5</span></span> p³q)</div>
      <div class="q-subtext">(iv) x × x² × x³ × x⁴</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> (a²) × (2a<sup>22</sup>) × (4a<sup>26</sup>) = (1 × 2 × 4) × a<sup>(2 + 22 + 26)</sup> = <span class="ans-highlight">8a<sup>50</sup></span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> (<span class='frac'><span class='num'>2</span><span class='den'>3</span></span> xy) × (-<span class='frac'><span class='num'>9</span><span class='den'>10</span></span> x²y²) = (<span class='frac'><span class='num'>2</span><span class='den'>3</span></span> × -<span class='frac'><span class='num'>9</span><span class='den'>10</span></span>) × (x × x²) × (y × y²)</div>
        <div class="sol-step">= (-<span class='frac'><span class='num'>18</span><span class='den'>30</span></span>) x³y³ = <span class="ans-highlight">-<span class='frac'><span class='num'>3</span><span class='den'>5</span></span> x³y³</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> (-<span class='frac'><span class='num'>10</span><span class='den'>3</span></span> pq³) × (<span class='frac'><span class='num'>6</span><span class='den'>5</span></span> p³q) = (-<span class='frac'><span class='num'>10</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>6</span><span class='den'>5</span></span>) × (p × p³) × (q³ × q)</div>
        <div class="sol-step">= (-<span class='frac'><span class='num'>60</span><span class='den'>15</span></span>) p⁴q⁴ = <span class="ans-highlight">-4p⁴q⁴</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> x × x² × x³ × x⁴ = x<sup>(1 + 2 + 3 + 4)</sup> = <span class="ans-highlight">x<sup>10</sup></span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. (a) Simplify 3x (4x - 5) + 3 and find its values for (i) x = 3 (ii) x = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>.<br/>(b) Simplify a (a² + a + 1) + 5 and find its value for (i) a = 0, (ii) a = 1 (iii) a = -1.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(a)</span> 3x(4x - 5) + 3 = 12x² - 15x + 3</div>
        <div class="sol-step">(i) For x = 3: 12(3)² - 15(3) + 3 = 12(9) - 45 + 3 = 108 - 45 + 3 = <span class="ans-highlight">66</span></div>
        <div class="sol-step">(ii) For x = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>: 12(<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>)² - 15(<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>) + 3 = 12(<span class='frac'><span class='num'>1</span><span class='den'>4</span></span>) - <span class='frac'><span class='num'>15</span><span class='den'>2</span></span> + 3 = 3 - 7.5 + 3 = 6 - 7.5 = <span class="ans-highlight">-1.5 (or -<span class='frac'><span class='num'>3</span><span class='den'>2</span></span>)</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(b)</span> a(a² + a + 1) + 5 = a³ + a² + a + 5</div>
        <div class="sol-step">(i) For a = 0: 0³ + 0² + 0 + 5 = <span class="ans-highlight">5</span></div>
        <div class="sol-step">(ii) For a = 1: 1³ + 1² + 1 + 5 = 1 + 1 + 1 + 5 = <span class="ans-highlight">8</span></div>
        <div class="sol-step">(iii) For a = -1: (-1)³ + (-1)² + (-1) + 5 = -1 + 1 - 1 + 5 = <span class="ans-highlight">4</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. (a) Add: p (p - q), q (q - r) and r (r - p)<br/>(b) Add: 2x (z - x - y) and 2y (z - y - x)<br/>(c) Subtract: 3l (l - 4m + 5n) from 4l (10n - 3m + 2l)<br/>(d) Subtract: 3a (a + b + c) - 2b (a - b + c) from 4c (-a + b + c)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(a)</span> p(p - q) + q(q - r) + r(r - p)</div>
        <div class="sol-step">= p² - pq + q² - qr + r² - rp</div>
        <div class="sol-step">= <span class="ans-highlight">p² + q² + r² - pq - qr - rp</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(b)</span> 2x(z - x - y) + 2y(z - y - x)</div>
        <div class="sol-step">= 2xz - 2x² - 2xy + 2yz - 2y² - 2xy</div>
        <div class="sol-step">= <span class="ans-highlight">-2x² - 2y² - 4xy + 2yz + 2zx</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(c)</span> 4l(10n - 3m + 2l) - 3l(l - 4m + 5n)</div>
        <div class="sol-step">= (40ln - 12lm + 8l²) - (3l² - 12lm + 15ln)</div>
        <div class="sol-step">= 40ln - 12lm + 8l² - 3l² + 12lm - 15ln</div>
        <div class="sol-step">= (8l² - 3l²) + (-12lm + 12lm) + (40ln - 15ln)</div>
        <div class="sol-step">= <span class="ans-highlight">5l² + 25ln</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(d)</span> First simplify what to subtract:</div>
        <div class="sol-step">3a(a + b + c) - 2b(a - b + c) = 3a² + 3ab + 3ac - 2ab + 2b² - 2bc</div>
        <div class="sol-step">= 3a² + 2b² + ab + 3ac - 2bc</div>
        <div class="sol-step">Now subtract from 4c(-a + b + c) = -4ac + 4bc + 4c²:</div>
        <div class="sol-step">(-4ac + 4bc + 4c²) - (3a² + 2b² + ab + 3ac - 2bc)</div>
        <div class="sol-step">= -4ac + 4bc + 4c² - 3a² - 2b² - ab - 3ac + 2bc</div>
        <div class="sol-step">= <span class="ans-highlight">-3a² - 2b² + 4c² - ab + 6bc - 7ac</span></div>
      </div>
    </div>
  </div>
`;

const ex84Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FF6D00; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FF6D00; padding-left: 15px; margin-top: 15px; background: rgba(255, 109, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FF6D00; font-weight: 700; }
    .step-label { color: #FF9100; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Multiply</div>
      <div class="q-subtext">(i) (2x + 5) and (4x - 3)</div>
      <div class="q-subtext">(ii) (y - 8) and (3y - 4)</div>
      <div class="q-subtext">(iii) (2.5l - 0.5m) and (2.5l + 0.5m)</div>
      <div class="q-subtext">(iv) (a + 3b) and (x + 5)</div>
      <div class="q-subtext">(v) (2pq + 3q²) and (3pq - 2q²)</div>
      <div class="q-subtext">(vi) (<span class='frac'><span class='num'>3</span><span class='den'>4</span></span> a² + 3b²) and 4(a² - <span class='frac'><span class='num'>2</span><span class='den'>3</span></span> b²)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> (2x + 5)(4x - 3) = 2x(4x - 3) + 5(4x - 3) = 8x² - 6x + 20x - 15 = <span class="ans-highlight">8x² + 14x - 15</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> (y - 8)(3y - 4) = y(3y - 4) - 8(3y - 4) = 3y² - 4y - 24y + 32 = <span class="ans-highlight">3y² - 28y + 32</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> (2.5l - 0.5m)(2.5l + 0.5m) = (2.5l)² - (0.5m)² = <span class="ans-highlight">6.25l² - 0.25m²</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> (a + 3b)(x + 5) = a(x + 5) + 3b(x + 5) = <span class="ans-highlight">ax + 5a + 3bx + 15b</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> (2pq + 3q²)(3pq - 2q²) = 2pq(3pq - 2q²) + 3q²(3pq - 2q²) = 6p²q² - 4pq³ + 9pq³ - 6q⁴ = <span class="ans-highlight">6p²q² + 5pq³ - 6q⁴</span></div>
        <div class="sol-step"><span class="step-label">(vi)</span> (<span class='frac'><span class='num'>3</span><span class='den'>4</span></span> a² + 3b²) × 4(a² - <span class='frac'><span class='num'>2</span><span class='den'>3</span></span> b²) = (<span class='frac'><span class='num'>3</span><span class='den'>4</span></span> a² + 3b²)(4a² - <span class='frac'><span class='num'>8</span><span class='den'>3</span></span> b²)</div>
        <div class="sol-step">= <span class='frac'><span class='num'>3</span><span class='den'>4</span></span> a²(4a² - <span class='frac'><span class='num'>8</span><span class='den'>3</span></span> b²) + 3b²(4a² - <span class='frac'><span class='num'>8</span><span class='den'>3</span></span> b²) = 3a⁴ - 2a²b² + 12a²b² - 8b⁴ = <span class="ans-highlight">3a⁴ + 10a²b² - 8b⁴</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Find the product.</div>
      <div class="q-subtext">(i) (5 - 2x) (3 + x)</div>
      <div class="q-subtext">(ii) (x + 7y) (7x - y)</div>
      <div class="q-subtext">(iii) (a² + b) (a + b²)</div>
      <div class="q-subtext">(iv) (p² - q²) (2p + q)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> (5 - 2x)(3 + x) = 5(3 + x) - 2x(3 + x) = 15 + 5x - 6x - 2x² = <span class="ans-highlight">15 - x - 2x²</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> (x + 7y)(7x - y) = x(7x - y) + 7y(7x - y) = 7x² - xy + 49xy - 7y² = <span class="ans-highlight">7x² + 48xy - 7y²</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> (a² + b)(a + b²) = a²(a + b²) + b(a + b²) = <span class="ans-highlight">a³ + a²b² + ab + b³</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> (p² - q²)(2p + q) = p²(2p + q) - q²(2p + q) = <span class="ans-highlight">2p³ + p²q - 2pq² - q³</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Simplify</div>
      <div class="q-subtext">(i) (x² - 5) (x + 5) + 25</div>
      <div class="q-subtext">(ii) (a² + 5) (b³ + 3) + 5</div>
      <div class="q-subtext">(iii) (t + s²) (t² - s)</div>
      <div class="q-subtext">(iv) (a + b) (c - d) + (a - b) (c + d) + 2 (ac + bd)</div>
      <div class="q-subtext">(v) (x + y) (2x + y) + (x + 2y) (x - y)</div>
      <div class="q-subtext">(vi) (x + y) (x² - xy + y²)</div>
      <div class="q-subtext">(vii) (1.5x - 4y) (1.5x + 4y + 3) - 4.5x + 12y</div>
      <div class="q-subtext">(viii) (a + b + c) (a + b - c)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> (x² - 5)(x + 5) + 25 = x³ + 5x² - 5x - 25 + 25 = <span class="ans-highlight">x³ + 5x² - 5x</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> (a² + 5)(b³ + 3) + 5 = a²b³ + 3a² + 5b³ + 15 + 5 = <span class="ans-highlight">a²b³ + 3a² + 5b³ + 20</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> (t + s²)(t² - s) = t(t² - s) + s²(t² - s) = <span class="ans-highlight">t³ - ts + s²t² - s³</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> (ac - ad + bc - bd) + (ac + ad - bc - bd) + (2ac + 2bd)</div>
        <div class="sol-step">= ac + ac + 2ac - ad + ad + bc - bc - bd - bd + 2bd = <span class="ans-highlight">4ac</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> (2x² + xy + 2xy + y²) + (x² - xy + 2xy - 2y²)</div>
        <div class="sol-step">= 2x² + 3xy + y² + x² + xy - 2y² = <span class="ans-highlight">3x² + 4xy - y²</span></div>
        <div class="sol-step"><span class="step-label">(vi)</span> x(x² - xy + y²) + y(x² - xy + y²) = x³ - x²y + xy² + x²y - xy² + y³ = <span class="ans-highlight">x³ + y³</span></div>
        <div class="sol-step"><span class="step-label">(vii)</span> 1.5x(1.5x + 4y + 3) - 4y(1.5x + 4y + 3) - 4.5x + 12y</div>
        <div class="sol-step">= 2.25x² + 6xy + 4.5x - 6xy - 16y² - 12y - 4.5x + 12y = <span class="ans-highlight">2.25x² - 16y²</span></div>
        <div class="sol-step"><span class="step-label">(viii)</span> a(a + b - c) + b(a + b - c) + c(a + b - c)</div>
        <div class="sol-step">= a² + ab - ac + ba + b² - bc + ca + cb - c² = <span class="ans-highlight">a² + b² - c² + 2ab</span></div>
      </div>
    </div>
  </div>
`;

export const c8Math8: ChapterContent = {
  id: "c8-math-8",
  number: 8,
  title: "Algebraic Expressions and Identities",
  introduction:
    "In this chapter, we explore algebraic expressions, their addition, subtraction, and multiplication. We also learn about standard identities and how to apply them.",
  mcqs: [
    {
      id: "m1",
      question: "Which of the following is a binomial?",
      options: ["4x", "4x + 3", "4x² + 3x + 1", "7"],
      correctAnswer: "4x + 3",
    },
    {
      id: "m2",
      question: "The coefficient of x in the term -5xy is:",
      options: ["-5", "-5y", "y", "5"],
      correctAnswer: "-5y",
    },
    {
      id: "m3",
      question: "What is the product of 2x and 3y?",
      options: ["5xy", "6x", "6y", "6xy"],
      correctAnswer: "6xy",
    },
    {
      id: "m4",
      question: "The value of a² - b² is equal to:",
      options: ["(a+b)(a-b)", "(a-b)²", "a² + b²", "None of these"],
      correctAnswer: "(a+b)(a-b)",
    },
    {
      id: "m5",
      question: "Add 5x and 7x:",
      options: ["12x²", "12x", "35x", "35x²"],
      correctAnswer: "12x",
    },
    {
      id: "m6",
      question: "Subtract 3a from 8a:",
      options: ["5", "5a", "11a", "24a"],
      correctAnswer: "5a",
    },
    {
      id: "m7",
      question: "An algebraic expression containing three terms is called:",
      options: ["Monomial", "Binomial", "Trinomial", "Polynomial"],
      correctAnswer: "Trinomial",
    },
    {
      id: "m8",
      question: "What is the square of (x + y)?",
      options: ["x² + y²", "x² + 2xy + y²", "x² - 2xy + y²", "x²y²"],
      correctAnswer: "x² + 2xy + y²",
    },
    {
      id: "m9",
      question: "The product of a monomial and a binomial is a:",
      options: ["Monomial", "Binomial", "Trinomial", "None"],
      correctAnswer: "Binomial",
    },
    {
      id: "m10",
      question: "What is the volume of a box with dimensions 2, 3x, and 4y?",
      options: ["24xy", "9xy", "24x²y", "14xy"],
      correctAnswer: "24xy",
    },
  ],
  summary: [
    "Expressions are formed from variables and constants.",
    "Terms are added to form expressions. Terms themselves are formed as product of factors.",
    "Expressions that contain exactly one, two and three terms are called monomials, binomials and trinomials respectively.",
    "While adding or subtracting polynomials, we add or subtract like terms.",
    "An identity is an equality, which is true for all values of the variables in the equality.",
  ],
  exercises: [
    { id: "ex8-1", name: "Exercise 8.1", questions: [] },
    { id: "ex8-2", name: "Exercise 8.2", questions: [] },
    { id: "ex8-3", name: "Exercise 8.3", questions: [] },
    { id: "ex8-4", name: "Exercise 8.4", questions: [] },
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
        color: #FF6D00;
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
        color: #FF9100;
        font-weight: 700;
      }

      .highlight { color: #FF9100; font-weight: 600; }
      
      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }

      .formula-badge {
        background: rgba(255, 109, 0, 0.2);
        border: 1px dashed #FF6D00;
        padding: 10px;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
        color: #FF9100;
      }
        .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

    <div class="premium-container">
      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          An algebraic expression is a combination of constants and variables connected by arithmetic operators. <strong>Identities</strong> are special equations that are always true regardless of the values assigned to the variables.
        </div>
      </div>

      <div class="section-box">
        <div class="section-header"><span>✦</span> Standard Identities</div>
        <table class="prop-table">
          <tr>
            <th>Identity Name</th>
            <th>Formula</th>
          </tr>
          <tr>
            <td><strong>Square of a Binomial (Sum)</strong></td>
            <td>
              <span class="highlight">(a + b)² = a² + 2ab + b²</span>
            </td>
          </tr>
          <tr>
            <td><strong>Square of a Binomial (Difference)</strong></td>
            <td>
              <span class="highlight">(a - b)² = a² - 2ab + b²</span>
            </td>
          </tr>
          <tr>
            <td><strong>Difference of Squares</strong></td>
            <td>
              <span class="highlight">(a + b)(a - b) = a² - b²</span>
            </td>
          </tr>
          <tr>
            <td><strong>General Product</strong></td>
            <td>
              <span class="highlight">(x + a)(x + b) = x² + (a + b)x + ab</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex8-1": ex81Content,
    "ex8-2": ex82Content,
    "ex8-3": ex83Content,
    "ex8-4": ex84Content,
  },
};
