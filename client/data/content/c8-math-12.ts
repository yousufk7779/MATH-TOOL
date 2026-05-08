import { ChapterContent } from "../types";

const ex121Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #00BFA5; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #00BFA5; padding-left: 15px; margin-top: 15px; background: rgba(0, 191, 165, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #00BFA5; font-weight: 700; }
    .step-label { color: #4DB6AC; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Find the common factors of the given terms.</div>
      <div class="q-subtext">(i) 12x, 36</div>
      <div class="q-subtext">(ii) 2y, 22xy</div>
      <div class="q-subtext">(iii) 14pq, 28p²q²</div>
      <div class="q-subtext">(iv) 2x, 3x², 4</div>
      <div class="q-subtext">(v) 6abc, 24ab², 12a²b</div>
      <div class="q-subtext">(vi) 16x³, -4x², 32x</div>
      <div class="q-subtext">(vii) 10pq, 20qr, 30rp</div>
      <div class="q-subtext">(viii) 3x²y³, 10x³y², 6x²y²z</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> 12x = 2×2×3×x, 36 = 2×2×3×3. Common factors = 2×2×3 = <span class="ans-highlight">12</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> 2y = 2×y, 22xy = 2×11×x×y. Common factors = 2×y = <span class="ans-highlight">2y</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> 14pq = 2×7×p×q, 28p²q² = 2×2×7×p×p×q×q. Common factors = 2×7×p×q = <span class="ans-highlight">14pq</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> 2x, 3x², 4. Only common factor is <span class="ans-highlight">1</span>.</div>
        <div class="sol-step"><span class="step-label">(v)</span> 6abc, 24ab², 12a²b. Common factors = 6×a×b = <span class="ans-highlight">6ab</span></div>
        <div class="sol-step"><span class="step-label">(vi)</span> 16x³, -4x², 32x. Common factors = 4×x = <span class="ans-highlight">4x</span></div>
        <div class="sol-step"><span class="step-label">(vii)</span> 10pq, 20qr, 30rp. Common factors = <span class="ans-highlight">10</span></div>
        <div class="sol-step"><span class="step-label">(viii)</span> 3x²y³, 10x³y², 6x²y²z. Common factors = x²y² = <span class="ans-highlight">x²y²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Factorise the following expressions.</div>
      <div class="q-subtext">(i) 7x - 42</div>
      <div class="q-subtext">(ii) 6p - 12q</div>
      <div class="q-subtext">(iii) 7a² + 14a</div>
      <div class="q-subtext">(iv) -16z + 20z³</div>
      <div class="q-subtext">(v) 20l²m + 30alm</div>
      <div class="q-subtext">(vi) 5x²y - 15xy²</div>
      <div class="q-subtext">(vii) 10a² - 15b² + 20c²</div>
      <div class="q-subtext">(viii) -4a² + 4ab - 4ca</div>
      <div class="q-subtext">(ix) x²yz + xy²z + xyz²</div>
      <div class="q-subtext">(x) ax²y + bxy² + cxyz</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> 7(x - 6)</div>
        <div class="sol-step"><span class="step-label">(ii)</span> 6(p - 2q)</div>
        <div class="sol-step"><span class="step-label">(iii)</span> 7a(a + 2)</div>
        <div class="sol-step"><span class="step-label">(iv)</span> 4z(-4 + 5z²)</div>
        <div class="sol-step"><span class="step-label">(v)</span> 10lm(2l + 3a)</div>
        <div class="sol-step"><span class="step-label">(vi)</span> 5xy(x - 3y)</div>
        <div class="sol-step"><span class="step-label">(vii)</span> 5(2a² - 3b² + 4c²)</div>
        <div class="sol-step"><span class="step-label">(viii)</span> 4a(-a + b - c)</div>
        <div class="sol-step"><span class="step-label">(ix)</span> xyz(x + y + z)</div>
        <div class="sol-step"><span class="step-label">(x)</span> xy(ax + by + cz)</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Factorise.</div>
      <div class="q-subtext">(i) x² + xy + 8x + 8y</div>
      <div class="q-subtext">(ii) 15xy - 6x + 5y - 2</div>
      <div class="q-subtext">(iii) ax + bx - ay - by</div>
      <div class="q-subtext">(iv) 15pq + 15 + 9q + 25p</div>
      <div class="q-subtext">(v) z - 7 + 7xy - xyz</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> x(x + y) + 8(x + y) = <span class="ans-highlight">(x + y)(x + 8)</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> 3x(5y - 2) + 1(5y - 2) = <span class="ans-highlight">(5y - 2)(3x + 1)</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> x(a + b) - y(a + b) = <span class="ans-highlight">(a + b)(x - y)</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> 15pq + 25p + 9q + 15 = 5p(3q + 5) + 3(3q + 5) = <span class="ans-highlight">(3q + 5)(5p + 3)</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> (z - 7) - xy(z - 7) = <span class="ans-highlight">(z - 7)(1 - xy)</span></div>
      </div>
    </div>
  </div>
`;

const ex122Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #00BFA5; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #00BFA5; padding-left: 15px; margin-top: 15px; background: rgba(0, 191, 165, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #00BFA5; font-weight: 700; }
    .step-label { color: #4DB6AC; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Factorise the following expressions.</div>
      <div class="q-subtext">(i) a² + 8a + 16</div>
      <div class="q-subtext">(ii) p² - 10p + 25</div>
      <div class="q-subtext">(iii) 25m² + 30m + 9</div>
      <div class="q-subtext">(iv) 49y² + 84yz + 36z²</div>
      <div class="q-subtext">(v) 4x² - 8x + 4</div>
      <div class="q-subtext">(vi) 121b² - 88bc + 16c²</div>
      <div class="q-subtext">(vii) (l + m)² - 4lm</div>
      <div class="q-subtext">(viii) a⁴ + 2a²b² + b⁴</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> (a)² + 2(a)(4) + (4)² = <span class="ans-highlight">(a + 4)²</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> (p)² - 2(p)(5) + (5)² = <span class="ans-highlight">(p - 5)²</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> (5m)² + 2(5m)(3) + (3)² = <span class="ans-highlight">(5m + 3)²</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> (7y)² + 2(7y)(6z) + (6z)² = <span class="ans-highlight">(7y + 6z)²</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> 4(x² - 2x + 1) = 4(x - 1)²</div>
        <div class="sol-step"><span class="step-label">(vi)</span> (11b)² - 2(11b)(4c) + (4c)² = <span class="ans-highlight">(11b - 4c)²</span></div>
        <div class="sol-step"><span class="step-label">(vii)</span> l² + m² + 2lm - 4lm = l² + m² - 2lm = <span class="ans-highlight">(l - m)²</span></div>
        <div class="sol-step"><span class="step-label">(viii)</span> (a²)² + 2(a²)(b²) + (b²)² = <span class="ans-highlight">(a² + b²)²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Factorise.</div>
      <div class="q-subtext">(i) 4p² - 9q²</div>
      <div class="q-subtext">(ii) 63a² - 112b²</div>
      <div class="q-subtext">(iii) 49x² - 36</div>
      <div class="q-subtext">(iv) 16x⁵ - 144x³</div>
      <div class="q-subtext">(v) (l + m)² - (l - m)²</div>
      <div class="q-subtext">(vi) 9x²y² - 16</div>
      <div class="q-subtext">(vii) (x² - 2xy + y²) - z²</div>
      <div class="q-subtext">(viii) 25a² - 4b² + 28bc - 49c²</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> (2p)² - (3q)² = <span class="ans-highlight">(2p - 3q)(2p + 3q)</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> 7(9a² - 16b²) = 7(3a - 4b)(3a + 4b)</div>
        <div class="sol-step"><span class="step-label">(iii)</span> (7x)² - (6)² = <span class="ans-highlight">(7x - 6)(7x + 6)</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> 16x³(x² - 9) = 16x³(x - 3)(x + 3)</div>
        <div class="sol-step"><span class="step-label">(v)</span> [(l+m) - (l-m)][(l+m) + (l-m)] = [2m][2l] = <span class="ans-highlight">4lm</span></div>
        <div class="sol-step"><span class="step-label">(vi)</span> (3xy)² - (4)² = <span class="ans-highlight">(3xy - 4)(3xy + 4)</span></div>
        <div class="sol-step"><span class="step-label">(vii)</span> (x - y)² - z² = <span class="ans-highlight">(x - y - z)(x - y + z)</span></div>
        <div class="sol-step"><span class="step-label">(viii)</span> 25a² - (4b² - 28bc + 49c²) = (5a)² - (2b - 7c)² = <span class="ans-highlight">(5a - 2b + 7c)(5a + 2b - 7c)</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Factorise the expressions.</div>
      <div class="q-subtext">(i) ax² + bx</div>
      <div class="q-subtext">(ii) 7p² + 21q²</div>
      <div class="q-subtext">(iii) 2x³ + 2xy² + 2xz²</div>
      <div class="q-subtext">(iv) am² + bm² + bn² + an²</div>
      <div class="q-subtext">(v) (lm + l) + m + 1</div>
      <div class="q-subtext">(vi) y(y + z) + 9(y + z)</div>
      <div class="q-subtext">(vii) 5y² - 20y - 8z + 2yz</div>
      <div class="q-subtext">(viii) 10ab + 4a + 5b + 2</div>
      <div class="q-subtext">(ix) 6xy - 4y + 6 - 9x</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> x(ax + b)</div>
        <div class="sol-step"><span class="step-label">(ii)</span> 7(p² + 3q²)</div>
        <div class="sol-step"><span class="step-label">(iii)</span> 2x(x² + y² + z²)</div>
        <div class="sol-step"><span class="step-label">(iv)</span> m²(a + b) + n²(a + b) = <span class="ans-highlight">(a + b)(m² + n²)</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> l(m + 1) + 1(m + 1) = <span class="ans-highlight">(m + 1)(l + 1)</span></div>
        <div class="sol-step"><span class="step-label">(vi)</span> <span class="ans-highlight">(y + z)(y + 9)</span></div>
        <div class="sol-step"><span class="step-label">(vii)</span> 5y(y - 4) + 2z(y - 4) = <span class="ans-highlight">(y - 4)(5y + 2z)</span></div>
        <div class="sol-step"><span class="step-label">(viii)</span> 2a(5b + 2) + 1(5b + 2) = <span class="ans-highlight">(5b + 2)(2a + 1)</span></div>
        <div class="sol-step"><span class="step-label">(ix)</span> 2y(3x - 2) - 3(3x - 2) = <span class="ans-highlight">(3x - 2)(2y - 3)</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Factorise.</div>
      <div class="q-subtext">(i) a⁴ - b⁴</div>
      <div class="q-subtext">(ii) p⁴ - 81</div>
      <div class="q-subtext">(iii) x⁴ - (y + z)⁴</div>
      <div class="q-subtext">(iv) x⁴ - (x - z)⁴</div>
      <div class="q-subtext">(v) a⁴ - 2a²b² + b⁴</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> (a²)² - (b²)² = (a² - b²)(a² + b²) = <span class="ans-highlight">(a - b)(a + b)(a² + b²)</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> (p²)² - (9)² = (p² - 9)(p² + 9) = <span class="ans-highlight">(p - 3)(p + 3)(p² + 9)</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> (x² - (y+z)²)(x² + (y+z)²) = <span class="ans-highlight">(x - y - z)(x + y + z)(x² + (y+z)²)</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> (x² - (x-z)²)(x² + (x-z)²) = (x - x + z)(x + x - z)(x² + (x-z)²) = <span class="ans-highlight">z(2x - z)(x² + (x-z)²)</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> (a² - b²)² = <span class="ans-highlight">(a - b)²(a + b)²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Factorise the following expressions.</div>
      <div class="q-subtext">(i) p² + 6p + 8</div>
      <div class="q-subtext">(ii) q² - 10q + 21</div>
      <div class="q-subtext">(iii) p² + 6p - 16</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> p² + 4p + 2p + 8 = p(p + 4) + 2(p + 4) = <span class="ans-highlight">(p + 4)(p + 2)</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> q² - 7q - 3q + 21 = q(q - 7) - 3(q - 7) = <span class="ans-highlight">(q - 7)(q - 3)</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> p² + 8p - 2p - 16 = p(p + 8) - 2(p + 8) = <span class="ans-highlight">(p + 8)(p - 2)</span></div>
      </div>
    </div>
  </div>
`;

const ex123Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #00BFA5; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #00BFA5; padding-left: 15px; margin-top: 15px; background: rgba(0, 191, 165, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #00BFA5; font-weight: 700; }
    .step-label { color: #4DB6AC; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Carry out the following divisions.</div>
      <div class="q-subtext">(i) 28x⁴ ÷ 56x</div>
      <div class="q-subtext">(ii) -36y³ ÷ 9y²</div>
      <div class="q-subtext">(iii) 66pq²r³ ÷ 11qr²</div>
      <div class="q-subtext">(iv) 34x³y³z³ ÷ 51xy²z³</div>
      <div class="q-subtext">(v) 12a⁸b⁸ ÷ (-6a⁶b⁴)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> <span class='frac'><span class='num'>28x⁴</span><span class='den'>56x</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>x³</span><span class='den'>2</span></span></span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> <span class='frac'><span class='num'>-36y³</span><span class='den'>9y²</span></span> = <span class="ans-highlight">-4y</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> <span class='frac'><span class='num'>66pq²r³</span><span class='den'>11qr²</span></span> = <span class="ans-highlight">6pqr</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> <span class='frac'><span class='num'>34x³y³z³</span><span class='den'>51xy²z³</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>2</span><span class='den'>3</span></span> x²y</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> <span class='frac'><span class='num'>12a⁸b⁸</span><span class='den'>-6a⁶b⁴</span></span> = <span class="ans-highlight">-2a²b⁴</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Divide the given polynomial by the given monomial.</div>
      <div class="q-subtext">(i) (5x² - 6x) ÷ 3x</div>
      <div class="q-subtext">(ii) (3y⁸ - 4y⁶ + 5y⁴) ÷ y⁴</div>
      <div class="q-subtext">(iii) 8(x³y²z² + x²y³z² + x²y²z³) ÷ 4x²y²z²</div>
      <div class="q-subtext">(iv) (x³ + 2x² + 3x) ÷ 2x</div>
      <div class="q-subtext">(v) (p³q⁶ - p⁶q³) ÷ p³q³</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> <span class='frac'><span class='num'>x(5x - 6)</span><span class='den'>3x</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>5x - 6</span><span class='den'>3</span></span></span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> <span class='frac'><span class='num'>y⁴(3y⁴ - 4y² + 5)</span><span class='den'>y⁴</span></span> = <span class="ans-highlight">3y⁴ - 4y² + 5</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> <span class='frac'><span class='num'>8x²y²z²(x + y + z)</span><span class='den'>4x²y²z²</span></span> = <span class="ans-highlight">2(x + y + z)</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> <span class='frac'><span class='num'>x(x² + 2x + 3)</span><span class='den'>2x</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>x² + 2x + 3</span><span class='den'>2</span></span></span></div>
        <div class="sol-step"><span class="step-label">(v)</span> <span class='frac'><span class='num'>p³q³(q³ - p³)</span><span class='den'>p³q³</span></span> = <span class="ans-highlight">q³ - p³</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Work out the following divisions.</div>
      <div class="q-subtext">(i) (10x - 25) ÷ 5</div>
      <div class="q-subtext">(ii) (10x - 25) ÷ (2x - 5)</div>
      <div class="q-subtext">(iii) 10y(6y + 21) ÷ 5(2y + 7)</div>
      <div class="q-subtext">(iv) 9x²y²(3z - 24) ÷ 27xy(z - 8)</div>
      <div class="q-subtext">(v) 96abc(3a - 12)(5b - 30) ÷ 144(a - 4)(b - 6)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> <span class='frac'><span class='num'>5(2x - 5)</span><span class='den'>5</span></span> = <span class="ans-highlight">2x - 5</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> <span class='frac'><span class='num'>5(2x - 5)</span><span class='den'>2x - 5</span></span> = <span class="ans-highlight">5</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> <span class='frac'><span class='num'>10y[3(2y + 7)]</span><span class='den'>5(2y + 7)</span></span> = <span class='frac'><span class='num'>30y</span><span class='den'>5</span></span> = <span class="ans-highlight">6y</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> <span class='frac'><span class='num'>9x²y²[3(z - 8)]</span><span class='den'>27xy(z - 8)</span></span> = <span class='frac'><span class='num'>27x²y²</span><span class='den'>27xy</span></span> = <span class="ans-highlight">xy</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> <span class='frac'><span class='num'>96abc[3(a - 4)][5(b - 6)]</span><span class='den'>144(a - 4)(b - 6)</span></span> = <span class='frac'><span class='num'>96abc × 15</span><span class='den'>144</span></span> = <span class="ans-highlight">10abc</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Divide as directed.</div>
      <div class="q-subtext">(i) 5(2x + 1)(3x + 5) ÷ (2x + 1)</div>
      <div class="q-subtext">(ii) 26xy(x + 5)(y - 4) ÷ 13x(y - 4)</div>
      <div class="q-subtext">(iii) 52pqr(p + q)(q + r)(r + p) ÷ 104pq(q + r)(r + p)</div>
      <div class="q-subtext">(iv) 20(y + 4)(y² + 5y + 3) ÷ 5(y + 4)</div>
      <div class="q-subtext">(v) x(x + 1)(x + 2)(x + 3) ÷ x(x + 1)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> <span class="ans-highlight">5(3x + 5)</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> <span class="ans-highlight">2y(x + 5)</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> r(p + q) = <span class="ans-highlight"><span class='frac'><span class='num'>r(p + q)</span><span class='den'>2</span></span></span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> <span class="ans-highlight">4(y² + 5y + 3)</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> <span class="ans-highlight">(x + 2)(x + 3)</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Factorise the expressions and divide them as directed.</div>
      <div class="q-subtext">(i) (y² + 7y + 10) ÷ (y + 5)</div>
      <div class="q-subtext">(ii) (m² - 14m - 32) ÷ (m + 2)</div>
      <div class="q-subtext">(iii) (5p² - 25p + 20) ÷ (p - 1)</div>
      <div class="q-subtext">(iv) 4yz(z² + 6z - 16) ÷ 2y(z + 8)</div>
      <div class="q-subtext">(v) 5pq(p² - q²) ÷ 2p(p + q)</div>
      <div class="q-subtext">(vi) 12xy(9x² - 16y²) ÷ 4xy(3x + 4y)</div>
      <div class="q-subtext">(vii) 39y³(50y² - 98) ÷ 26y²(5y + 7)</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> <span class='frac'><span class='num'>(y + 5)(y + 2)</span><span class='den'>y + 5</span></span> = <span class="ans-highlight">y + 2</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> <span class='frac'><span class='num'>(m - 16)(m + 2)</span><span class='den'>m + 2</span></span> = <span class="ans-highlight">m - 16</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> <span class='frac'><span class='num'>5(p - 4)(p - 1)</span><span class='den'>p - 1</span></span> = <span class="ans-highlight">5(p - 4)</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> <span class='frac'><span class='num'>4yz(z + 8)(z - 2)</span><span class='den'>2y(z + 8)</span></span> = <span class="ans-highlight">2z(z - 2)</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> <span class='frac'><span class='num'>5pq(p - q)(p + q)</span><span class='den'>2p(p + q)</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>5</span><span class='den'>2</span></span> q(p - q)</span></div>
        <div class="sol-step"><span class="step-label">(vi)</span> <span class='frac'><span class='num'>12xy(3x - 4y)(3x + 4y)</span><span class='den'>4xy(3x + 4y)</span></span> = <span class="ans-highlight">3(3x - 4y)</span></div>
        <div class="sol-step"><span class="step-label">(vii)</span> <span class='frac'><span class='num'>39y³ × 2(25y² - 49)</span><span class='den'>26y²(5y + 7)</span></span> = <span class='frac'><span class='num'>78y³(5y - 7)(5y + 7)</span><span class='den'>26y²(5y + 7)</span></span> = <span class="ans-highlight">3y(5y - 7)</span></div>
      </div>
    </div>
  </div>
`;

export const c8Math12: ChapterContent = {
  id: "c8-math-12",
  number: 12,
  title: "Factorisation",
  introduction: "Factorisation is the reverse process of multiplication. It involves breaking down a number or an algebraic expression into a product of simpler terms or 'factors'. This chapter explores various methods of factorisation including common factors, grouping, and identities.",
  mcqs: [
    { id: "m1", question: "The common factor of 2y and 22xy is:", options: ["2", "y", "2y", "22"], correctAnswer: "C" },
    { id: "m2", question: "Factorisation of x² + xy is:", options: ["x(x+y)", "y(x+y)", "xy(x+1)", "x+y"], correctAnswer: "A" },
    { id: "m3", question: "(a+b)² is equal to:", options: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + ab + b²"], correctAnswer: "B" },
    { id: "m4", question: "a² - b² is equal to:", options: ["(a-b)²", "(a+b)²", "(a-b)(a+b)", "a² + b²"], correctAnswer: "C" },
    { id: "m5", question: "Factors of x² + 5x + 6 are:", options: ["(x+1)(x+6)", "(x+2)(x+3)", "(x-2)(x-3)", "(x+5)(x+1)"], correctAnswer: "B" },
    { id: "m6", question: "Common factor of 12x and 36 is:", options: ["12", "x", "3", "6"], correctAnswer: "A" },
    { id: "m7", question: "Factorisation of 7x - 42 is:", options: ["7(x-42)", "7(x-6)", "x(7-42)", "42(x-7)"], correctAnswer: "B" },
    { id: "m8", question: "Divide 10x by 5, the result is:", options: ["2x", "5x", "x/2", "2"], correctAnswer: "A" },
    { id: "m9", question: "The value of 101² - 99² is:", options: ["400", "200", "401", "399"], correctAnswer: "A" },
    { id: "m10", question: "Which of the following is a factor of x² - 4?", options: ["x-4", "x+4", "x-2", "x+1"], correctAnswer: "C" }
  ],
  summary: [
    "When we factorise an algebraic expression, we write it as a product of factors. These factors may be numbers, algebraic variables or algebraic expressions.",
    "Methods of factorisation: Common factors, Regrouping terms, Using Identities.",
    "Important Identities: (a+b)² = a² + 2ab + b², (a-b)² = a² - 2ab + b², a² - b² = (a-b)(a+b).",
    "Division of expressions: Polynomial ÷ Monomial and Polynomial ÷ Polynomial."
  ],
  exercises: [
    { id: "ex12-1", name: "Exercise 12.1", questions: [] },
    { id: "ex12-2", name: "Exercise 12.2", questions: [] },
    { id: "ex12-3", name: "Exercise 12.3", questions: [] }
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
        color: #00BFA5;
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
        color: #4DB6AC;
        font-weight: 700;
      }

      .highlight { color: #4DB6AC; font-weight: 600; }
      
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
          Factorisation is the reverse process of multiplication. It involves breaking down a number or an algebraic expression into a product of simpler terms or 'factors'. This chapter explores various methods of factorisation including common factors, grouping, and identities.
        </div>
      </div>
      <div class="section-box">
        <div class="section-header"><span>✦</span> Key Identities</div>
        <table class="prop-table">
          <tr>
            <th>Identity Name</th>
            <th>Formula</th>
          </tr>
          <tr>
            <td><strong>Square of Sum</strong></td>
            <td><span class="highlight">(a + b)² = a² + 2ab + b²</span></td>
          </tr>
          <tr>
            <td><strong>Square of Difference</strong></td>
            <td><span class="highlight">(a - b)² = a² - 2ab + b²</span></td>
          </tr>
          <tr>
            <td><strong>Difference of Squares</strong></td>
            <td><span class="highlight">a² - b² = (a - b)(a + b)</span></td>
          </tr>
          <tr>
            <td><strong>Trinomial Product</strong></td>
            <td><span class="highlight">(x + a)(x + b) = x² + (a+b)x + ab</span></td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex12-1": ex121Content,
    "ex12-2": ex122Content,
    "ex12-3": ex123Content
  }
};
