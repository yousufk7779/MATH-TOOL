import { ChapterContent } from "../types";

const ex51Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #4CAF50; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #4CAF50; padding-left: 15px; margin-top: 15px; background: rgba(76, 175, 80, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #4CAF50; font-weight: 700; }
    .step-label { color: #81C784; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. What will be the unit digit of the squares of the following numbers?</div>
      <div class="q-subtext">(i) 81</div>
      <div class="q-subtext">(ii) 272</div>
      <div class="q-subtext">(iii) 799</div>
      <div class="q-subtext">(iv) 3853</div>
      <div class="q-subtext">(v) 1234</div>
      <div class="q-subtext">(vi) 26387</div>
      <div class="q-subtext">(vii) 52698</div>
      <div class="q-subtext">(viii) 99880</div>
      <div class="q-subtext">(ix) 12796</div>
      <div class="q-subtext">(x) 55555</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 81:</span> Unit digit is 1. Since 1² = 1, unit digit will be <span class="ans-highlight">1</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 272:</span> Unit digit is 2. Since 2² = 4, unit digit will be <span class="ans-highlight">4</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 799:</span> Unit digit is 9. Since 9² = 81, unit digit will be <span class="ans-highlight">1</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 3853:</span> Unit digit is 3. Since 3² = 9, unit digit will be <span class="ans-highlight">9</span>.</div>
        <div class="sol-step"><span class="step-label">(v) 1234:</span> Unit digit is 4. Since 4² = 16, unit digit will be <span class="ans-highlight">6</span>.</div>
        <div class="sol-step"><span class="step-label">(vi) 26387:</span> Unit digit is 7. Since 7² = 49, unit digit will be <span class="ans-highlight">9</span>.</div>
        <div class="sol-step"><span class="step-label">(vii) 52698:</span> Unit digit is 8. Since 8² = 64, unit digit will be <span class="ans-highlight">4</span>.</div>
        <div class="sol-step"><span class="step-label">(viii) 99880:</span> Unit digit is 0. Since 0² = 0, unit digit will be <span class="ans-highlight">0</span>.</div>
        <div class="sol-step"><span class="step-label">(ix) 12796:</span> Unit digit is 6. Since 6² = 36, unit digit will be <span class="ans-highlight">6</span>.</div>
        <div class="sol-step"><span class="step-label">(x) 55555:</span> Unit digit is 5. Since 5² = 25, unit digit will be <span class="ans-highlight">5</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. The following numbers are obviously not perfect squares. Give reason.</div>
      <div class="q-subtext">(i) 1057</div>
      <div class="q-subtext">(ii) 23453</div>
      <div class="q-subtext">(iii) 7928</div>
      <div class="q-subtext">(iv) 222222</div>
      <div class="q-subtext">(v) 64000</div>
      <div class="q-subtext">(vi) 89722</div>
      <div class="q-subtext">(vii) 222000</div>
      <div class="q-subtext">(viii) 505050</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Reason:</span> Perfect squares end only with digits 0, 1, 4, 5, 6, 9 and an even number of zeroes.</div>
        <div class="sol-step"><span class="step-label">(i) 1057:</span> Ends with <span class="ans-highlight">7</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 23453:</span> Ends with <span class="ans-highlight">3</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 7928:</span> Ends with <span class="ans-highlight">8</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 222222:</span> Ends with <span class="ans-highlight">2</span>.</div>
        <div class="sol-step"><span class="step-label">(v) 64000:</span> Ends with an <span class="ans-highlight">odd number of zeroes (3 zeroes)</span>.</div>
        <div class="sol-step"><span class="step-label">(vi) 89722:</span> Ends with <span class="ans-highlight">2</span>.</div>
        <div class="sol-step"><span class="step-label">(vii) 222000:</span> Ends with an <span class="ans-highlight">odd number of zeroes (3 zeroes)</span>.</div>
        <div class="sol-step"><span class="step-label">(viii) 505050:</span> Ends with an <span class="ans-highlight">odd number of zeroes (1 zero)</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. The squares of which of the following would be odd numbers?</div>
      <div class="q-subtext">(i) 431</div>
      <div class="q-subtext">(ii) 2826</div>
      <div class="q-subtext">(iii) 7779</div>
      <div class="q-subtext">(iv) 82004</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">The square of an odd number is odd, and the square of an even number is even.</div>
        <div class="sol-step"><span class="ans-highlight">(i) 431</span> is an odd number. Therefore, its square will be odd.</div>
        <div class="sol-step">(ii) 2826 is an even number. Therefore, its square will be even.</div>
        <div class="sol-step"><span class="ans-highlight">(iii) 7779</span> is an odd number. Therefore, its square will be odd.</div>
        <div class="sol-step">(iv) 82004 is an even number. Therefore, its square will be even.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Observe the following pattern and find the missing digits.</div>
      <div class="q-subtext" style="font-family: monospace;">
        11² = 121<br/>
        101² = 10201<br/>
        1001² = 1002001<br/>
        100001² = 1......2......1<br/>
        10000001² = ....................
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">100001² = 1<span class="ans-highlight">0000</span>2<span class="ans-highlight">0000</span>1</div>
        <div class="sol-step">10000001² = <span class="ans-highlight">100000020000001</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Observe the following pattern and supply the missing numbers.</div>
      <div class="q-subtext" style="font-family: monospace;">
        11² = 121<br/>
        101² = 10201<br/>
        10101² = 102030201<br/>
        1010101² = ....................<br/>
        ........² = 10203040504030201
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">1010101² = <span class="ans-highlight">1020304030201</span></div>
        <div class="sol-step"><span class="ans-highlight">101010101</span>² = 10203040504030201</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. Using the given pattern, find the missing numbers</div>
      <div class="q-subtext" style="font-family: monospace;">
        1² + 2² + 2² = 3²<br/>
        2² + 3² + 6² = 7²<br/>
        3² + 4² + 12² = 13²<br/>
        4² + 5² + __² = 21²<br/>
        5² + __² + 30² = 31²<br/>
        6² + 7² + __² = __²
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Pattern rule: Third number = First × Second.</div>
        <div class="sol-step">Fourth number = Third + 1.</div>
        <div class="sol-step">4² + 5² + <span class="ans-highlight">20</span>² = 21²</div>
        <div class="sol-step">5² + <span class="ans-highlight">6</span>² + 30² = 31²</div>
        <div class="sol-step">6² + 7² + <span class="ans-highlight">42</span>² = <span class="ans-highlight">43</span>²</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. Without adding, find the sum.</div>
      <div class="q-subtext">(i) 1 + 3 + 5 + 7 + 9</div>
      <div class="q-subtext">(ii) 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19</div>
      <div class="q-subtext">(iii) 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21 + 23</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Sum of first 'n' odd natural numbers is n².</div>
        <div class="sol-step"><span class="step-label">(i)</span> Here n = 5.</div>
        <div class="sol-step">Sum = 5² = <span class="ans-highlight">25</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> Here n = 10.</div>
        <div class="sol-step">Sum = 10² = <span class="ans-highlight">100</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii)</span> Here n = 12.</div>
        <div class="sol-step">Sum = 12² = <span class="ans-highlight">144</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">8. (i) Express 49 as the sum of 7 odd numbers.<br/>(ii) Express 121 as the sum of 11 odd numbers.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> 49 is the square of 7.</div>
        <div class="sol-step">It can be expressed as the sum of the first 7 odd numbers:</div>
        <div class="sol-step">49 = <span class="ans-highlight">1 + 3 + 5 + 7 + 9 + 11 + 13</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> 121 is the square of 11.</div>
        <div class="sol-step">It can be expressed as the sum of the first 11 odd numbers:</div>
        <div class="sol-step">121 = <span class="ans-highlight">1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">9. How many numbers lie between squares of the following numbers?</div>
      <div class="q-subtext">(i) 12 and 13</div>
      <div class="q-subtext">(ii) 25 and 26</div>
      <div class="q-subtext">(iii) 99 and 100</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Non-perfect square numbers between n² and (n+1)² are 2n.</div>
        <div class="sol-step"><span class="step-label">(i)</span> Here n = 12.</div>
        <div class="sol-step">Numbers = 2 × 12 = <span class="ans-highlight">24</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii)</span> Here n = 25.</div>
        <div class="sol-step">Numbers = 2 × 25 = <span class="ans-highlight">50</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii)</span> Here n = 99.</div>
        <div class="sol-step">Numbers = 2 × 99 = <span class="ans-highlight">198</span>.</div>
      </div>
    </div>
  </div>
`;

const ex52Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #4CAF50; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #4CAF50; padding-left: 15px; margin-top: 15px; background: rgba(76, 175, 80, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #4CAF50; font-weight: 700; }
    .step-label { color: #81C784; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Find the Square of the following numbers.</div>
      <div class="q-subtext">(i) 32</div>
      <div class="q-subtext">(ii) 35</div>
      <div class="q-subtext">(iii) 86</div>
      <div class="q-subtext">(iv) 93</div>
      <div class="q-subtext">(v) 71</div>
      <div class="q-subtext">(vi) 46</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span> Using identity (a + b)² = a² + 2ab + b².</div>
        <div class="sol-step"><span class="step-label">(i) 32:</span></div>
        <div class="sol-step">(30 + 2)² = 30² + 2(30)(2) + 2²</div>
        <div class="sol-step">= 900 + 120 + 4 = <span class="ans-highlight">1024</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii) 35:</span></div>
        <div class="sol-step">(30 + 5)² = 30² + 2(30)(5) + 5²</div>
        <div class="sol-step">= 900 + 300 + 25 = <span class="ans-highlight">1225</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii) 86:</span></div>
        <div class="sol-step">(80 + 6)² = 80² + 2(80)(6) + 6²</div>
        <div class="sol-step">= 6400 + 960 + 36 = <span class="ans-highlight">7396</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(iv) 93:</span></div>
        <div class="sol-step">(90 + 3)² = 90² + 2(90)(3) + 3²</div>
        <div class="sol-step">= 8100 + 540 + 9 = <span class="ans-highlight">8649</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(v) 71:</span></div>
        <div class="sol-step">(70 + 1)² = 70² + 2(70)(1) + 1²</div>
        <div class="sol-step">= 4900 + 140 + 1 = <span class="ans-highlight">5041</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(vi) 46:</span></div>
        <div class="sol-step">(40 + 6)² = 40² + 2(40)(6) + 6²</div>
        <div class="sol-step">= 1600 + 480 + 36 = <span class="ans-highlight">2116</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Write a Pythagorean triplet whose one member is.</div>
      <div class="q-subtext">(i) 6</div>
      <div class="q-subtext">(ii) 14</div>
      <div class="q-subtext">(iii) 16</div>
      <div class="q-subtext">(iv) 18</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">The general form of a Pythagorean triplet is 2m, m² - 1, m² + 1.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(i) 6:</span></div>
        <div class="sol-step">Let 2m = 6, so m = 3.</div>
        <div class="sol-step">m² - 1 = 3² - 1 = 9 - 1 = 8.</div>
        <div class="sol-step">m² + 1 = 3² + 1 = 9 + 1 = 10.</div>
        <div class="sol-step">Triplet: <span class="ans-highlight">6, 8, 10</span>.</div>
        <br/>
        
        <div class="sol-step"><span class="step-label">(ii) 14:</span></div>
        <div class="sol-step">Let 2m = 14, so m = 7.</div>
        <div class="sol-step">m² - 1 = 7² - 1 = 49 - 1 = 48.</div>
        <div class="sol-step">m² + 1 = 7² + 1 = 49 + 1 = 50.</div>
        <div class="sol-step">Triplet: <span class="ans-highlight">14, 48, 50</span>.</div>
        <br/>
        
        <div class="sol-step"><span class="step-label">(iii) 16:</span></div>
        <div class="sol-step">Let 2m = 16, so m = 8.</div>
        <div class="sol-step">m² - 1 = 8² - 1 = 64 - 1 = 63.</div>
        <div class="sol-step">m² + 1 = 8² + 1 = 64 + 1 = 65.</div>
        <div class="sol-step">Triplet: <span class="ans-highlight">16, 63, 65</span>.</div>
        <br/>
        
        <div class="sol-step"><span class="step-label">(iv) 18:</span></div>
        <div class="sol-step">Let 2m = 18, so m = 9.</div>
        <div class="sol-step">m² - 1 = 9² - 1 = 81 - 1 = 80.</div>
        <div class="sol-step">m² + 1 = 9² + 1 = 81 + 1 = 82.</div>
        <div class="sol-step">Triplet: <span class="ans-highlight">18, 80, 82</span>.</div>
      </div>
    </div>
  </div>
`;

const ex53Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #4CAF50; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #4CAF50; padding-left: 15px; margin-top: 15px; background: rgba(76, 175, 80, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #4CAF50; font-weight: 700; }
    .step-label { color: #81C784; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. What could be the possible 'one's' digits of the square root of each of the following numbers?</div>
      <div class="q-subtext">(i) 9801</div>
      <div class="q-subtext">(ii) 99856</div>
      <div class="q-subtext">(iii) 998001</div>
      <div class="q-subtext">(iv) 657666025</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 9801:</span> Ends in 1. Square roots could end in <span class="ans-highlight">1 or 9</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 99856:</span> Ends in 6. Square roots could end in <span class="ans-highlight">4 or 6</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 998001:</span> Ends in 1. Square roots could end in <span class="ans-highlight">1 or 9</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 657666025:</span> Ends in 5. Square root will end in <span class="ans-highlight">5</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Without doing any calculation, find the numbers which are surely not perfect squares.</div>
      <div class="q-subtext">(i) 153</div>
      <div class="q-subtext">(ii) 257</div>
      <div class="q-subtext">(iii) 408</div>
      <div class="q-subtext">(iv) 441</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Perfect squares end only with digits 0, 1, 4, 5, 6, 9.</div>
        <div class="sol-step"><span class="ans-highlight">(i) 153</span> (Ends with 3),</div>
        <div class="sol-step"><span class="ans-highlight">(ii) 257</span> (Ends with 7),</div>
        <div class="sol-step"><span class="ans-highlight">(iii) 408</span> (Ends with 8) are surely not perfect squares.</div>
        <div class="sol-step">(iv) 441 ends with 1, so it can be a perfect square.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Find the square roots of 100 and 169 by the method of repeated subtraction.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution for 100:</span></div>
        <div class="sol-step">Subtract consecutive odd numbers:</div>
        <div class="sol-step">100-1=99, 99-3=96, 96-5=91, 91-7=84, 84-9=75,</div>
        <div class="sol-step">75-11=64, 64-13=51, 51-15=36, 36-17=19, 19-19=0.</div>
        <div class="sol-step">We subtracted 10 times. So, √100 = <span class="ans-highlight">10</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">Solution for 169:</span></div>
        <div class="sol-step">169-1=168, 168-3=165, 165-5=160, 160-7=153, 153-9=144,</div>
        <div class="sol-step">144-11=133, 133-13=120, 120-15=105, 105-17=88, 88-19=69,</div>
        <div class="sol-step">69-21=48, 48-23=25, 25-25=0.</div>
        <div class="sol-step">We subtracted 13 times. So, √169 = <span class="ans-highlight">13</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Find the square roots of the following numbers by the Prime Factorisation Method.</div>
      <div class="q-subtext">(i) 729</div>
      <div class="q-subtext">(ii) 400</div>
      <div class="q-subtext">(iii) 1764</div>
      <div class="q-subtext">(iv) 4096</div>
      <div class="q-subtext">(v) 7744</div>
      <div class="q-subtext">(vi) 9604</div>
      <div class="q-subtext">(vii) 5929</div>
      <div class="q-subtext">(viii) 9216</div>
      <div class="q-subtext">(ix) 529</div>
      <div class="q-subtext">(x) 8100</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 729:</span> 3×3×3×3×3×3. √729 = 3×3×3 = <span class="ans-highlight">27</span></div>
        <div class="sol-step"><span class="step-label">(ii) 400:</span> 2×2×2×2×5×5. √400 = 2×2×5 = <span class="ans-highlight">20</span></div>
        <div class="sol-step"><span class="step-label">(iii) 1764:</span> 2×2×3×3×7×7. √1764 = 2×3×7 = <span class="ans-highlight">42</span></div>
        <div class="sol-step"><span class="step-label">(iv) 4096:</span> 2¹². √4096 = 2⁶ = <span class="ans-highlight">64</span></div>
        <div class="sol-step"><span class="step-label">(v) 7744:</span> 2×2×2×2×2×2×11×11. √7744 = 2×2×2×11 = <span class="ans-highlight">88</span></div>
        <div class="sol-step"><span class="step-label">(vi) 9604:</span> 2×2×7×7×7×7. √9604 = 2×7×7 = <span class="ans-highlight">98</span></div>
        <div class="sol-step"><span class="step-label">(vii) 5929:</span> 7×7×11×11. √5929 = 7×11 = <span class="ans-highlight">77</span></div>
        <div class="sol-step"><span class="step-label">(viii) 9216:</span> 2¹⁰×3². √9216 = 2⁵×3 = 32×3 = <span class="ans-highlight">96</span></div>
        <div class="sol-step"><span class="step-label">(ix) 529:</span> 23×23. √529 = <span class="ans-highlight">23</span></div>
        <div class="sol-step"><span class="step-label">(x) 8100:</span> 2×2×3×3×3×3×5×5. √8100 = 2×3×3×5 = <span class="ans-highlight">90</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. For each of the following numbers, find the smallest whole number by which it should be multiplied so as to get a perfect square number. Also find the square root of the square number so obtained.</div>
      <div class="q-subtext">(i) 252</div>
      <div class="q-subtext">(ii) 180</div>
      <div class="q-subtext">(iii) 1008</div>
      <div class="q-subtext">(iv) 2028</div>
      <div class="q-subtext">(v) 1458</div>
      <div class="q-subtext">(vi) 768</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 252:</span> 2×2×3×3×7. Multiply by <span class="ans-highlight">7</span>. New number = 1764. Root = <span class="ans-highlight">42</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 180:</span> 2×2×3×3×5. Multiply by <span class="ans-highlight">5</span>. New number = 900. Root = <span class="ans-highlight">30</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 1008:</span> 2×2×2×2×3×3×7. Multiply by <span class="ans-highlight">7</span>. New number = 7056. Root = <span class="ans-highlight">84</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 2028:</span> 2×2×3×13×13. Multiply by <span class="ans-highlight">3</span>. New number = 6084. Root = <span class="ans-highlight">78</span>.</div>
        <div class="sol-step"><span class="step-label">(v) 1458:</span> 2×3×3×3×3×3×3. Multiply by <span class="ans-highlight">2</span>. New number = 2916. Root = <span class="ans-highlight">54</span>.</div>
        <div class="sol-step"><span class="step-label">(vi) 768:</span> 2×2×2×2×2×2×2×2×3. Multiply by <span class="ans-highlight">3</span>. New number = 2304. Root = <span class="ans-highlight">48</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. For each of the following numbers, find the smallest whole number by which it should be divided so as to get a perfect square. Also find the square root of the square number so obtained.</div>
      <div class="q-subtext">(i) 252</div>
      <div class="q-subtext">(ii) 2925</div>
      <div class="q-subtext">(iii) 396</div>
      <div class="q-subtext">(iv) 2645</div>
      <div class="q-subtext">(v) 2800</div>
      <div class="q-subtext">(vi) 1620</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 252:</span> 2×2×3×3×7. Divide by <span class="ans-highlight">7</span>. New number = 36. Root = <span class="ans-highlight">6</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 2925:</span> 3×3×5×5×13. Divide by <span class="ans-highlight">13</span>. New number = 225. Root = <span class="ans-highlight">15</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 396:</span> 2×2×3×3×11. Divide by <span class="ans-highlight">11</span>. New number = 36. Root = <span class="ans-highlight">6</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 2645:</span> 5×23×23. Divide by <span class="ans-highlight">5</span>. New number = 529. Root = <span class="ans-highlight">23</span>.</div>
        <div class="sol-step"><span class="step-label">(v) 2800:</span> 2×2×2×2×5×5×7. Divide by <span class="ans-highlight">7</span>. New number = 400. Root = <span class="ans-highlight">20</span>.</div>
        <div class="sol-step"><span class="step-label">(vi) 1620:</span> 2×2×3×3×3×3×5. Divide by <span class="ans-highlight">5</span>. New number = 324. Root = <span class="ans-highlight">18</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. The students of Class VIII of a school donated Rs 2401 in all, for Prime Minister's National Relief Fund. Each student donated as many rupees as the number of students in the class. Find the number of students in the class.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the number of students be x.</div>
        <div class="sol-step">Amount donated by each student = Rs x.</div>
        <div class="sol-step">Total donation = x × x = x² = 2401.</div>
        <div class="sol-step">Number of students = √2401 = <span class="ans-highlight">49</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">8. 2025 plants are to be planted in a garden in such a way that each row contains as many plants as the number of rows. Find the number of rows and the number of plants in each row.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the number of rows be x.</div>
        <div class="sol-step">The number of plants in each row = x.</div>
        <div class="sol-step">Total plants = x × x = x² = 2025.</div>
        <div class="sol-step">Number of rows = √2025 = <span class="ans-highlight">45</span>.</div>
        <div class="sol-step">So, there are 45 rows and 45 plants in each row.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">9. Find the smallest square number that is divisible by each of the numbers 4, 9 and 10.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">LCM of 4, 9, 10 is 180.</div>
        <div class="sol-step">Prime factors of 180 = 2 × 2 × 3 × 3 × 5.</div>
        <div class="sol-step">Here, 5 is not in a pair. Multiply by 5 to make it a perfect square.</div>
        <div class="sol-step">Smallest square number = 180 × 5 = <span class="ans-highlight">900</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">10. Find the smallest square number that is divisible by each of the numbers 8, 15 and 20.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">LCM of 8, 15, 20 is 120.</div>
        <div class="sol-step">Prime factors of 120 = 2 × 2 × 2 × 3 × 5.</div>
        <div class="sol-step">Here, 2, 3, and 5 are not in pairs. Multiply by 2 × 3 × 5 = 30.</div>
        <div class="sol-step">Smallest square number = 120 × 30 = <span class="ans-highlight">3600</span>.</div>
      </div>
    </div>
  </div>
`;

const ex54Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #4CAF50; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #4CAF50; padding-left: 15px; margin-top: 15px; background: rgba(76, 175, 80, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #4CAF50; font-weight: 700; }
    .step-label { color: #81C784; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Find the square root of each of the following numbers by Division method.</div>
      <div class="q-subtext">(i) 2304</div>
      <div class="q-subtext">(ii) 4489</div>
      <div class="q-subtext">(iii) 3481</div>
      <div class="q-subtext">(iv) 529</div>
      <div class="q-subtext">(v) 3249</div>
      <div class="q-subtext">(vi) 1369</div>
      <div class="q-subtext">(vii) 5776</div>
      <div class="q-subtext">(viii) 7921</div>
      <div class="q-subtext">(ix) 576</div>
      <div class="q-subtext">(x) 1024</div>
      <div class="q-subtext">(xi) 3136</div>
      <div class="q-subtext">(xii) 900</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> √2304 = <span class="ans-highlight">48</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> √4489 = <span class="ans-highlight">67</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> √3481 = <span class="ans-highlight">59</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> √529 = <span class="ans-highlight">23</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> √3249 = <span class="ans-highlight">57</span></div>
        <div class="sol-step"><span class="step-label">(vi)</span> √1369 = <span class="ans-highlight">37</span></div>
        <div class="sol-step"><span class="step-label">(vii)</span> √5776 = <span class="ans-highlight">76</span></div>
        <div class="sol-step"><span class="step-label">(viii)</span> √7921 = <span class="ans-highlight">89</span></div>
        <div class="sol-step"><span class="step-label">(ix)</span> √576 = <span class="ans-highlight">24</span></div>
        <div class="sol-step"><span class="step-label">(x)</span> √1024 = <span class="ans-highlight">32</span></div>
        <div class="sol-step"><span class="step-label">(xi)</span> √3136 = <span class="ans-highlight">56</span></div>
        <div class="sol-step"><span class="step-label">(xii)</span> √900 = <span class="ans-highlight">30</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Find the number of digits in the square root of each of the following numbers (without any calculation).</div>
      <div class="q-subtext">(i) 64</div>
      <div class="q-subtext">(ii) 144</div>
      <div class="q-subtext">(iii) 4489</div>
      <div class="q-subtext">(iv) 27225</div>
      <div class="q-subtext">(v) 390625</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Number of digits in square root = <span class='frac'><span class='num'>n</span><span class='den'>2</span></span> (if n is even) or (n+1)/2 (if n is odd).</div>
        <div class="sol-step"><span class="step-label">(i) 64:</span> n=2. Digits = <span class='frac'><span class='num'>2</span><span class='den'>2</span></span> = <span class="ans-highlight">1</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 144:</span> n=3. Digits = (3+1)/2 = <span class="ans-highlight">2</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 4489:</span> n=4. Digits = <span class='frac'><span class='num'>4</span><span class='den'>2</span></span> = <span class="ans-highlight">2</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 27225:</span> n=5. Digits = (5+1)/2 = <span class="ans-highlight">3</span>.</div>
        <div class="sol-step"><span class="step-label">(v) 390625:</span> n=6. Digits = <span class='frac'><span class='num'>6</span><span class='den'>2</span></span> = <span class="ans-highlight">3</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Find the square root of the following decimal numbers.</div>
      <div class="q-subtext">(i) 2.56</div>
      <div class="q-subtext">(ii) 7.29</div>
      <div class="q-subtext">(iii) 51.84</div>
      <div class="q-subtext">(iv) 42.25</div>
      <div class="q-subtext">(v) 31.36</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> √2.56 = <span class="ans-highlight">1.6</span></div>
        <div class="sol-step"><span class="step-label">(ii)</span> √7.29 = <span class="ans-highlight">2.7</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> √51.84 = <span class="ans-highlight">7.2</span></div>
        <div class="sol-step"><span class="step-label">(iv)</span> √42.25 = <span class="ans-highlight">6.5</span></div>
        <div class="sol-step"><span class="step-label">(v)</span> √31.36 = <span class="ans-highlight">5.6</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Find the least number which must be subtracted from each of the following numbers so as to get a perfect square. Also find the square root of the perfect square so obtained.</div>
      <div class="q-subtext">(i) 402</div>
      <div class="q-subtext">(ii) 1989</div>
      <div class="q-subtext">(iii) 3250</div>
      <div class="q-subtext">(iv) 825</div>
      <div class="q-subtext">(v) 4000</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Use division method to find the remainder.</div>
        <div class="sol-step"><span class="step-label">(i) 402:</span> Remainder is 2. Subtract <span class="ans-highlight">2</span>. Perfect square = 400. Root = <span class="ans-highlight">20</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 1989:</span> Remainder is 53. Subtract <span class="ans-highlight">53</span>. Perfect square = 1936. Root = <span class="ans-highlight">44</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 3250:</span> Remainder is 1. Subtract <span class="ans-highlight">1</span>. Perfect square = 3249. Root = <span class="ans-highlight">57</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 825:</span> Remainder is 41. Subtract <span class="ans-highlight">41</span>. Perfect square = 784. Root = <span class="ans-highlight">28</span>.</div>
        <div class="sol-step"><span class="step-label">(v) 4000:</span> Remainder is 31. Subtract <span class="ans-highlight">31</span>. Perfect square = 3969. Root = <span class="ans-highlight">63</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Find the least number which must be added to each of the following numbers so as to get a perfect square. Also find the square root of the perfect square so obtained.</div>
      <div class="q-subtext">(i) 525</div>
      <div class="q-subtext">(ii) 1750</div>
      <div class="q-subtext">(iii) 252</div>
      <div class="q-subtext">(iv) 1825</div>
      <div class="q-subtext">(v) 6412</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 525:</span> 22² < 525 < 23². Next square is 23² = 529. Add 529 - 525 = <span class="ans-highlight">4</span>. Root = <span class="ans-highlight">23</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 1750:</span> 41² < 1750 < 42². Next square is 42² = 1764. Add 1764 - 1750 = <span class="ans-highlight">14</span>. Root = <span class="ans-highlight">42</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 252:</span> 15² < 252 < 16². Next square is 16² = 256. Add 256 - 252 = <span class="ans-highlight">4</span>. Root = <span class="ans-highlight">16</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 1825:</span> 42² < 1825 < 43². Next square is 43² = 1849. Add 1849 - 1825 = <span class="ans-highlight">24</span>. Root = <span class="ans-highlight">43</span>.</div>
        <div class="sol-step"><span class="step-label">(v) 6412:</span> 80² < 6412 < 81². Next square is 81² = 6561. Add 6561 - 6412 = <span class="ans-highlight">149</span>. Root = <span class="ans-highlight">81</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. Find the length of the side of a square whose area is 441 m².</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Area of square = side² = 441.</div>
        <div class="sol-step">Side = √441 = <span class="ans-highlight">21 m</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. In a right triangle ABC, ∠B = 90°.<br/>(a) If AB = 6cm, BC = 8cm, find AC<br/>(b) If AC = 13cm, BC = 5cm, find AB</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Using Pythagoras theorem: AC² = AB² + BC².</div>
        <br/>
        <div class="sol-step"><span class="step-label">(a)</span> AC² = 6² + 8² = 36 + 64 = 100.</div>
        <div class="sol-step">AC = √100 = <span class="ans-highlight">10 cm</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(b)</span> 13² = AB² + 5² => 169 = AB² + 25.</div>
        <div class="sol-step">AB² = 169 - 25 = 144.</div>
        <div class="sol-step">AB = √144 = <span class="ans-highlight">12 cm</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">8. A gardener has 1000 plants. He wants to plant these in such a way that the number of rows and the number of columns remain same. Find the minimum number of plants he needs more for this.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Number of plants = 1000.</div>
        <div class="sol-step">We need to find the number to be added to 1000 to make it a perfect square.</div>
        <div class="sol-step">31² < 1000 < 32².</div>
        <div class="sol-step">32² = 1024.</div>
        <div class="sol-step">Number of plants needed more = 1024 - 1000 = <span class="ans-highlight">24 plants</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">9. There are 500 children in a school. For a P.T. drill they have to stand in such a manner that the number of rows is equal to number of columns. How many children would be left out in this arrangement?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Total children = 500.</div>
        <div class="sol-step">We need to find the remainder when square root of 500 is calculated by division method.</div>
        <div class="sol-step">22² = 484, which is less than 500.</div>
        <div class="sol-step">Remainder = 500 - 484 = 16.</div>
        <div class="sol-step">Therefore, <span class="ans-highlight">16 children</span> would be left out.</div>
      </div>
    </div>
  </div>
`;

export const c8Math5: ChapterContent = {
  id: "c8-math-5",
  number: 5,
  title: "Squares and Square Roots",
  introduction: "In this chapter, we explore the properties of square numbers and learn how to find the square root of a number using different methods.",
  mcqs: [
    { id: "m1", question: "The square of which of the following numbers would be an odd number?", options: ["431", "2826", "7770", "82004"], correctAnswer: "431" },
    { id: "m2", question: "Which of the following is not a perfect square?", options: ["100", "169", "257", "400"], correctAnswer: "257" },
    { id: "m3", question: "The unit digit of the square of 272 will be:", options: ["2", "4", "6", "8"], correctAnswer: "4" },
    { id: "m4", question: "How many non-perfect square numbers lie between the squares of 12 and 13?", options: ["24", "25", "26", "144"], correctAnswer: "24" },
    { id: "m5", question: "The sum of first n odd natural numbers is:", options: ["2n", "n²", "n+1", "n³"], correctAnswer: "n²" },
    { id: "m6", question: "If one member of a Pythagorean triplet is 6, the other two members are:", options: ["8, 10", "7, 9", "10, 12", "12, 14"], correctAnswer: "8, 10" },
    { id: "m7", question: "What will be the possible ones digit of the square root of 9801?", options: ["1 or 9", "2 or 8", "3 or 7", "4 or 6"], correctAnswer: "1 or 9" },
    { id: "m8", question: "The square root of 441 is:", options: ["11", "21", "31", "41"], correctAnswer: "21" },
    { id: "m9", question: "Which least number should be subtracted from 402 to make it a perfect square?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
    { id: "m10", question: "The number of digits in the square root of 390625 is:", options: ["2", "3", "4", "5"], correctAnswer: "3" }
  ],
  summary: [
    "Numbers ending with 2, 3, 7 or 8 are never perfect squares.",
    "The square of an even number is even and the square of an odd number is odd.",
    "There are 2n non-perfect square numbers between the squares of the numbers n and (n + 1)."
  ],
  exercises: [
    { id: "ex5-1", name: "Exercise 5.1", questions: [] },
    { id: "ex5-2", name: "Exercise 5.2", questions: [] },
    { id: "ex5-3", name: "Exercise 5.3", questions: [] },
    { id: "ex5-4", name: "Exercise 5.4", questions: [] }
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
        color: #4CAF50;
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
        background: rgba(0,0,0,0.2);
        overflow: hidden;
        min-width: 300px;
      }

      .prop-table th, .prop-table td {
        padding: 10px;
        border: 1px solid rgba(255,255,255,0.1);
        text-align: left;
        font-size: 15px;
      }

      .prop-table th {
        background: rgba(255,255,255,0.1);
        color: #81C784;
        font-weight: 700;
      }

      .table-container { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; border-radius: 12px; margin-top: 10px; border: 1px solid rgba(255,255,255,0.1); }

      .highlight { color: #81C784; font-weight: 600; }
      
      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }

      .formula-badge {
        background: rgba(76, 175, 80, 0.2);
        border: 1px dashed #4CAF50;
        padding: 10px;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
        color: #A5D6A7;
      }
        .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

    <div class="premium-container">
      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          A number is called a <strong>Perfect Square</strong> if it can be expressed as the product of a number by itself. For example, 25 is a perfect square because 25 = 5 × 5. Finding the square root is the inverse operation of squaring a number.
        </div>
      </div>

      <div class="section-box">
        <div class="section-header"><span>✦</span> Key Concepts & Properties</div>
      <div class="table-container">
        <table class="prop-table">
          <tr>
            <th>Concept</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><strong>Perfect Squares</strong></td>
            <td>
              Numbers like 1, 4, 9, 16, 25 are perfect squares. They always end with digits <span class="highlight">0, 1, 4, 5, 6, 9</span>.
            </td>
          </tr>
          <tr>
            <td><strong>Number of digits in Square Root</strong></td>
            <td>
              If a perfect square has <span class="highlight">n</span> digits, its square root has:<br/>
              <span class="highlight"><span class='frac'><span class='num'>n</span><span class='den'>2</span></span></span> digits (if n is even)<br/>
              <span class="highlight">(n+1)/2</span> digits (if n is odd)
            </td>
          </tr>
          <tr>
            <td><strong>Pythagorean Triplets</strong></td>
            <td>
              For any natural number m > 1, the Pythagorean triplet is given by:
              <div class="formula-badge">2m, m² - 1, m² + 1</div>
            </td>
          </tr>
        </table>
      </div>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex5-1": ex51Content,
    "ex5-2": ex52Content,
    "ex5-3": ex53Content,
    "ex5-4": ex54Content
  }
};
