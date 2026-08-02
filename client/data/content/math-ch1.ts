import { ChapterContent } from "../types";

export const mathCh1: ChapterContent = {
  id: "ch1",
  number: 1,
  title: "Real Numbers",
  isHtmlView: true,
  introduction:
    "Real numbers constitute the foundation of mathematics. Every number that can be plotted on a number line is a real number. This chapter covers prime factorisation, HCF and LCM relationships, and proofs of irrationality.",
  definitions: [
    { term: "Real Numbers (R)", description: "The set of all rational and irrational numbers." },
    { term: "Fundamental Theorem of Arithmetic", description: "Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique apart from the order of prime factors." },
    { term: "Prime Factorisation", description: "Finding prime numbers that multiply together to make the original number." },
    { term: "Irrational Number", description: "A number that cannot be written in the form p/q, where p and q are integers and q ≠ 0." }
  ],
  keyPoints: [
    "HCF(a, b) × LCM(a, b) = a × b for any two positive integers a and b.",
    "If p is a prime number and p divides a², then p divides a, where a is a positive integer.",
    "Method of Contradiction: A standard technique used to prove irrationality of numbers like √2, √3, and √5."
  ],
  formulas: [
    { name: "HCF and LCM Relation", formula: "\text{HCF}(a, b) \times \text{LCM}(a, b) = a \times b" }
  ],
  crux: [],
  exercises: [
    { id: "ex1-1", name: "Exercise 1.1", questions: [] },
    { id: "ex1-2", name: "Exercise 1.2", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #42A5F5; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(66, 165, 245, 0.05); border-left: 4px solid #42A5F5; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #42A5F5; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Real Numbers</div>
            <p class="content-text">Master the Fundamental Theorem of Arithmetic, prime factorisation techniques, HCF and LCM relationships, and proof of irrationality for Class 10 Board Examinations.</p>
            <div class="point-box">
                <div class="point-item">Fundamental Theorem of Arithmetic: Unique prime factorisation of every composite integer.</div>
                <div class="point-item">HCF & LCM: Product rule HCF(a, b) × LCM(a, b) = a × b for two numbers.</div>
                <div class="point-item">Irrationality Proofs: Stepwise contradiction method for √5, 3 + 2√5, etc.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex1-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #42A5F5; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #42A5F5; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #90CAF9; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #42A5F5; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #90CAF9; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border: 1px solid rgba(66, 165, 245, 0.3); border-radius: 10px; background: #161625; padding: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 5px 0; }
            th, td { border: 1px solid rgba(66, 165, 245, 0.3); padding: 10px 12px; text-align: left; color: #e0e0e0; }
            th { background: rgba(66, 165, 245, 0.15); color: #42A5F5; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Express each number as a product of its prime factors:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#42A5F5;">(i) 140</b></div>
                    <div class="svg-container">
                        <svg width="220" height="140" viewBox="0 0 220 140">
                            <!-- Factor Tree for 140 -->
                            <circle cx="110" cy="20" r="16" fill="rgba(66, 165, 245, 0.2)" stroke="#42A5F5" stroke-width="2"/>
                            <text x="110" y="25" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">140</text>
                            
                            <line x1="95" y1="33" x2="60" y2="55" stroke="#42A5F5" stroke-width="1.5"/>
                            <line x1="125" y1="33" x2="160" y2="55" stroke="#42A5F5" stroke-width="1.5"/>

                            <circle cx="60" cy="65" r="14" fill="#42A5F5"/>
                            <text x="60" y="70" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">2</text>
                            
                            <circle cx="160" cy="65" r="14" fill="rgba(66, 165, 245, 0.2)" stroke="#42A5F5" stroke-width="2"/>
                            <text x="160" y="70" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">70</text>

                            <line x1="150" y1="77" x2="125" y2="98" stroke="#42A5F5" stroke-width="1.5"/>
                            <line x1="170" y1="77" x2="190" y2="98" stroke="#42A5F5" stroke-width="1.5"/>

                            <circle cx="125" cy="110" r="14" fill="#42A5F5"/>
                            <text x="125" y="115" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">2</text>

                            <circle cx="190" cy="110" r="14" fill="rgba(66, 165, 245, 0.2)" stroke="#42A5F5" stroke-width="2"/>
                            <text x="190" y="115" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">35</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">140 &divide; 2 = 70</div>
                    <div class="sol-step">70 &divide; 2 = 35</div>
                    <div class="sol-step">35 &divide; 5 = 7</div>
                    <div class="sol-step">7 &divide; 7 = 1</div>
                    <div class="sol-step">140 = 2 &times; 2 &times; 5 &times; 7</div>
                    <div class="sol-step"><span class="ans-highlight">= 2&sup2; &times; 5 &times; 7</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(ii) 156</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">156 &divide; 2 = 78</div>
                    <div class="sol-step">78 &divide; 2 = 39</div>
                    <div class="sol-step">39 &divide; 3 = 13</div>
                    <div class="sol-step">13 &divide; 13 = 1</div>
                    <div class="sol-step">156 = 2 &times; 2 &times; 3 &times; 13</div>
                    <div class="sol-step"><span class="ans-highlight">= 2&sup2; &times; 3 &times; 13</span></div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(iii) 3825</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3825 &divide; 3 = 1275</div>
                    <div class="sol-step">1275 &divide; 3 = 425</div>
                    <div class="sol-step">425 &divide; 5 = 85</div>
                    <div class="sol-step">85 &divide; 5 = 17</div>
                    <div class="sol-step">17 &divide; 17 = 1</div>
                    <div class="sol-step">3825 = 3 &times; 3 &times; 5 &times; 5 &times; 17</div>
                    <div class="sol-step"><span class="ans-highlight">= 3&sup2; &times; 5&sup2; &times; 17</span></div>

                    <!-- Q1 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(iv) 5005</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5005 &divide; 5 = 1001</div>
                    <div class="sol-step">1001 &divide; 7 = 143</div>
                    <div class="sol-step">143 &divide; 11 = 13</div>
                    <div class="sol-step">13 &divide; 13 = 1</div>
                    <div class="sol-step"><span class="ans-highlight">5005 = 5 &times; 7 &times; 11 &times; 13</span></div>

                    <!-- Q1 (v) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(v) 7429</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">7429 &divide; 17 = 437</div>
                    <div class="sol-step">437 &divide; 19 = 23</div>
                    <div class="sol-step">23 &divide; 23 = 1</div>
                    <div class="sol-step"><span class="ans-highlight">7429 = 17 &times; 19 &times; 23</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the LCM and HCF of the following pairs of integers and verify that LCM &times; HCF = product of the two numbers:</div>
                <div class="sol-body">
                    <!-- Q2 (i) -->
                    <div class="sol-step"><b style="color:#42A5F5;">(i) 26 and 91</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factorisation of 26 = 2 &times; 13</div>
                    <div class="sol-step">Prime factorisation of 91 = 7 &times; 13</div>
                    <div class="sol-step">HCF(26, 91) = <span class="ans-highlight">13</span></div>
                    <div class="sol-step">LCM(26, 91) = 2 &times; 7 &times; 13 = <span class="ans-highlight">182</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">HCF &times; LCM = 13 &times; 182 = 2366</div>
                    <div class="sol-step">Product of numbers = 26 &times; 91 = 2366</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, HCF &times; LCM = Product of two numbers (Verified).</span></div>

                    <!-- Q2 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(ii) 510 and 92</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">510 = 2 &times; 3 &times; 5 &times; 17</div>
                    <div class="sol-step">92 = 2&sup2; &times; 23</div>
                    <div class="sol-step">HCF(510, 92) = <span class="ans-highlight">2</span></div>
                    <div class="sol-step">LCM(510, 92) = 2&sup2; &times; 3 &times; 5 &times; 17 &times; 23 = <span class="ans-highlight">23460</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">HCF &times; LCM = 2 &times; 23460 = 46920</div>
                    <div class="sol-step">Product of numbers = 510 &times; 92 = 46920</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, HCF &times; LCM = Product of two numbers (Verified).</span></div>

                    <!-- Q2 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(iii) 336 and 54</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">336 = 2⁴ &times; 3 &times; 7</div>
                    <div class="sol-step">54 = 2 &times; 3&sup3;</div>
                    <div class="sol-step">HCF(336, 54) = 2 &times; 3 = <span class="ans-highlight">6</span></div>
                    <div class="sol-step">LCM(336, 54) = 2⁴ &times; 3&sup3; &times; 7 = 16 &times; 27 &times; 7 = <span class="ans-highlight">3024</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">HCF &times; LCM = 6 &times; 3024 = 18144</div>
                    <div class="sol-step">Product of numbers = 336 &times; 54 = 18144</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, HCF &times; LCM = Product of two numbers (Verified).</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the LCM and HCF of the following integers by applying the prime factorisation method:</div>
                <div class="sol-body">
                    <!-- Q3 (i) -->
                    <div class="sol-step"><b style="color:#42A5F5;">(i) 12, 15 and 21</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">12 = 2&sup2; &times; 3</div>
                    <div class="sol-step">15 = 3 &times; 5</div>
                    <div class="sol-step">21 = 3 &times; 7</div>
                    <div class="sol-step">Common factor: 3</div>
                    <div class="sol-step"><span class="ans-highlight">HCF = 3</span></div>
                    <div class="sol-step">LCM = 2&sup2; &times; 3 &times; 5 &times; 7 = 4 &times; 3 &times; 5 &times; 7</div>
                    <div class="sol-step"><span class="ans-highlight">LCM = 420</span></div>

                    <!-- Q3 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(ii) 17, 23 and 29</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">17, 23, and 29 are all prime numbers.</div>
                    <div class="sol-step">17 = 1 &times; 17</div>
                    <div class="sol-step">23 = 1 &times; 23</div>
                    <div class="sol-step">29 = 1 &times; 29</div>
                    <div class="sol-step"><span class="ans-highlight">HCF = 1</span></div>
                    <div class="sol-step">LCM = 17 &times; 23 &times; 29</div>
                    <div class="sol-step"><span class="ans-highlight">LCM = 11339</span></div>

                    <!-- Q3 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(iii) 8, 9 and 25</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">8 = 2&sup3;</div>
                    <div class="sol-step">9 = 3&sup2;</div>
                    <div class="sol-step">25 = 5&sup2;</div>
                    <div class="sol-step">No common prime factor other than 1:</div>
                    <div class="sol-step"><span class="ans-highlight">HCF = 1</span></div>
                    <div class="sol-step">LCM = 2&sup3; &times; 3&sup2; &times; 5&sup2; = 8 &times; 9 &times; 25</div>
                    <div class="sol-step"><span class="ans-highlight">LCM = 1800</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Given that HCF(306, 657) = 9, find LCM(306, 657):</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">We know the relationship:</div>
                    <div class="sol-step">HCF(a, b) &times; LCM(a, b) = a &times; b</div>
                    <div class="sol-step">9 &times; LCM(306, 657) = 306 &times; 657</div>
                    <div class="sol-step">LCM(306, 657) = <div class="frac"><span class="num">306 &times; 657</span><span class="den">9</span></div></div>
                    <div class="sol-step">306 &divide; 9 = 34</div>
                    <div class="sol-step">LCM(306, 657) = 34 &times; 657</div>
                    <div class="sol-step"><span class="ans-highlight">LCM(306, 657) = 22338</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Check whether 6ⁿ can end with the digit 0 for any natural number n:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1. If any number ends with digit 0, it must be divisible by 10 (which means divisible by both 2 and 5).</div>
                    <div class="sol-step">2. Prime factorisation of 6ⁿ:</div>
                    <div class="sol-step">6ⁿ = (2 &times; 3)ⁿ = 2ⁿ &times; 3ⁿ</div>
                    <div class="sol-step">3. The prime factorisation of 6ⁿ contains only the prime numbers 2 and 3.</div>
                    <div class="sol-step">4. By Fundamental Theorem of Arithmetic, this prime factorisation is unique.</div>
                    <div class="sol-step">5. Since prime factor 5 is missing in 6ⁿ:</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, 6ⁿ can never end with digit 0 for any natural number n.</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Explain why 7 &times; 11 &times; 13 + 13 and 7 &times; 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1 + 5 are composite numbers:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#42A5F5;">Part 1: 7 &times; 11 &times; 13 + 13</b></div>
                    <div class="sol-step">Taking common factor 13:</div>
                    <div class="sol-step">= 13 &times; (7 &times; 11 + 1)</div>
                    <div class="sol-step">= 13 &times; (77 + 1)</div>
                    <div class="sol-step">= 13 &times; 78</div>
                    <div class="sol-step">= 13 &times; (2 &times; 3 &times; 13)</div>
                    <div class="sol-step">Since this expression has factors other than 1 and itself, <span class="ans-highlight">it is a composite number</span>.</div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">Part 2: 7 &times; 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1 + 5</b></div>
                    <div class="sol-step">Taking common factor 5:</div>
                    <div class="sol-step">= 5 &times; (7 &times; 6 &times; 4 &times; 3 &times; 2 &times; 1 + 1)</div>
                    <div class="sol-step">= 5 &times; (1008 + 1)</div>
                    <div class="sol-step">= 5 &times; 1009</div>
                    <div class="sol-step">Since this expression has factors 5 and 1009 other than 1 and itself, <span class="ans-highlight">it is a composite number</span>.</div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. There is a circular path around a sports field. Sonia takes 18 minutes to drive one round of the field, while Ravi takes 12 minutes for the same. Suppose they both start at the same point and at the same time, and go in the same direction. After how many minutes will they meet again at the starting point?</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <!-- Circular Track -->
                            <circle cx="100" cy="75" r="55" fill="none" stroke="#42A5F5" stroke-width="4"/>
                            <circle cx="100" cy="75" r="40" fill="none" stroke="rgba(66,165,245,0.2)" stroke-width="1.5"/>
                            <!-- Starting point -->
                            <circle cx="100" cy="20" r="5" fill="#FF5252"/>
                            <text x="100" y="12" fill="#FFE082" font-size="11" font-weight="bold" text-anchor="middle">Start Point</text>
                            <text x="100" y="70" fill="#42A5F5" font-size="11" font-weight="bold" text-anchor="middle">Sonia: 18 min</text>
                            <text x="100" y="85" fill="#90CAF9" font-size="11" text-anchor="middle">Ravi: 12 min</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">To find the time when they meet again at the starting point, we calculate the <b>LCM of 18 and 12</b>.</div>
                    <div class="sol-step">Prime factorisation of 18 = 2 &times; 3&sup2;</div>
                    <div class="sol-step">Prime factorisation of 12 = 2&sup2; &times; 3</div>
                    <div class="sol-step">LCM(18, 12) = 2&sup2; &times; 3&sup2; = 4 &times; 9 = <span class="ans-highlight">36</span></div>
                    <div class="sol-step"><span class="ans-highlight">They will meet again at the starting point after 36 minutes.</span></div>
                </div>
            </div>
        </div>
    `,
    "ex1-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #42A5F5; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #42A5F5; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #90CAF9; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #42A5F5; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #90CAF9; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Prove that &radic;5 is irrational:</div>
                <div class="sol-body">
                    <div class="sol-step">Proof (Method of Contradiction):-</div>
                    <div class="sol-step">1. Let us assume, to the contrary, that &radic;5 is rational.</div>
                    <div class="sol-step">2. Therefore, we can find co-prime integers <i>a</i> and <i>b</i> (where <i>b</i> &ne; 0) such that:</div>
                    <div class="sol-step">&radic;5 = <div class="frac"><span class="num">a</span><span class="den">b</span></div></div>
                    <div class="sol-step">3. Squaring both sides:</div>
                    <div class="sol-step">5 = <div class="frac"><span class="num">a&sup2;</span><span class="den">b&sup2;</span></div> &rArr; a&sup2; = 5b&sup2; &nbsp;&nbsp;&nbsp;--- (Equation 1)</div>
                    <div class="sol-step">4. Since 5 divides a&sup2;, by theorem, <b>5 divides a</b>.</div>
                    <div class="sol-step">5. So, we can write <b>a = 5c</b> for some integer <i>c</i>.</div>
                    <div class="sol-step">6. Substituting a = 5c into Equation 1:</div>
                    <div class="sol-step">(5c)&sup2; = 5b&sup2; &rArr; 25c&sup2; = 5b&sup2; &rArr; b&sup2; = 5c&sup2;</div>
                    <div class="sol-step">7. This means 5 divides b&sup2;, and so <b>5 divides b</b>.</div>
                    <div class="sol-step">8. Therefore, <i>a</i> and <i>b</i> have at least 5 as a common factor.</div>
                    <div class="sol-step">9. But this contradicts our assumption that <i>a</i> and <i>b</i> are co-prime (have no common factor other than 1).</div>
                    <div class="sol-step">10. This contradiction has arisen because of our incorrect assumption that &radic;5 is rational.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, &radic;5 is irrational.</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Prove that 3 + 2&radic;5 is irrational:</div>
                <div class="sol-body">
                    <div class="sol-step">Proof (Method of Contradiction):-</div>
                    <div class="sol-step">1. Let us assume that 3 + 2&radic;5 is rational.</div>
                    <div class="sol-step">2. Then we can find co-prime integers <i>a</i> and <i>b</i> (<i>b</i> &ne; 0) such that:</div>
                    <div class="sol-step">3 + 2&radic;5 = <div class="frac"><span class="num">a</span><span class="den">b</span></div></div>
                    <div class="sol-step">3. Rearranging to isolate &radic;5:</div>
                    <div class="sol-step">2&radic;5 = <div class="frac"><span class="num">a</span><span class="den">b</span></div> - 3 = <div class="frac"><span class="num">a - 3b</span><span class="den">b</span></div></div>
                    <div class="sol-step">&radic;5 = <div class="frac"><span class="num">a - 3b</span><span class="den">2b</span></div></div>
                    <div class="sol-step">4. Since <i>a</i> and <i>b</i> are integers, <div class="frac"><span class="num">a - 3b</span><span class="den">2b</span></div> is rational.</div>
                    <div class="sol-step">5. This implies that &radic;5 is rational.</div>
                    <div class="sol-step">6. But this contradicts the fact that &radic;5 is irrational.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, 3 + 2&radic;5 is irrational.</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Prove that the following are irrationals:</div>
                <div class="sol-body">
                    <!-- Q3 (i) -->
                    <div class="sol-step"><b style="color:#42A5F5;">(i) <div class="frac"><span class="num">1</span><span class="den">&radic;2</span></div></b></div>
                    <div class="sol-step">Proof:-</div>
                    <div class="sol-step">1. Let us assume <div class="frac"><span class="num">1</span><span class="den">&radic;2</span></div> is rational.</div>
                    <div class="sol-step">2. So, <div class="frac"><span class="num">1</span><span class="den">&radic;2</span></div> = <div class="frac"><span class="num">a</span><span class="den">b</span></div> (where <i>a</i>, <i>b</i> are co-prime integers, <i>b</i> &ne; 0).</div>
                    <div class="sol-step">3. Reciprocating both sides:</div>
                    <div class="sol-step">&radic;2 = <div class="frac"><span class="num">b</span><span class="den">a</span></div></div>
                    <div class="sol-step">4. Since <i>a</i> and <i>b</i> are integers, <div class="frac"><span class="num">b</span><span class="den">a</span></div> is rational, which implies &radic;2 is rational.</div>
                    <div class="sol-step">5. But this contradicts the fact that &radic;2 is irrational.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, <div class="frac"><span class="num">1</span><span class="den">&radic;2</span></div> is irrational.</span></div>

                    <!-- Q3 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(ii) 7&radic;5</b></div>
                    <div class="sol-step">Proof:-</div>
                    <div class="sol-step">1. Let us assume 7&radic;5 is rational.</div>
                    <div class="sol-step">2. So, 7&radic;5 = <div class="frac"><span class="num">a</span><span class="den">b</span></div> (where <i>a</i>, <i>b</i> are co-prime integers, <i>b</i> &ne; 0).</div>
                    <div class="sol-step">3. Rearranging:</div>
                    <div class="sol-step">&radic;5 = <div class="frac"><span class="num">a</span><span class="den">7b</span></div></div>
                    <div class="sol-step">4. Since <i>a</i> and <i>b</i> are integers, <div class="frac"><span class="num">a</span><span class="den">7b</span></div> is rational.</div>
                    <div class="sol-step">5. This implies &radic;5 is rational, contradicting the fact that &radic;5 is irrational.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, 7&radic;5 is irrational.</span></div>

                    <!-- Q3 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#42A5F5;">(iii) 6 + &radic;2</b></div>
                    <div class="sol-step">Proof:-</div>
                    <div class="sol-step">1. Let us assume 6 + &radic;2 is rational.</div>
                    <div class="sol-step">2. So, 6 + &radic;2 = <div class="frac"><span class="num">a</span><span class="den">b</span></div> (where <i>a</i>, <i>b</i> are co-prime integers, <i>b</i> &ne; 0).</div>
                    <div class="sol-step">3. Rearranging:</div>
                    <div class="sol-step">&radic;2 = <div class="frac"><span class="num">a</span><span class="den">b</span></div> - 6 = <div class="frac"><span class="num">a - 6b</span><span class="den">b</span></div></div>
                    <div class="sol-step">4. Since <i>a</i> and <i>b</i> are integers, <div class="frac"><span class="num">a - 6b</span><span class="den">b</span></div> is rational.</div>
                    <div class="sol-step">5. This implies &radic;2 is rational, contradicting the fact that &radic;2 is irrational.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence, 6 + &radic;2 is irrational.</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m1-mcq-1", question: "If two positive integers a and b are written as a = x³y² and b = xy³, where x, y are prime numbers, then HCF(a, b) is:", options: ["xy", "xy²", "x³y³", "x²y²"], correctAnswer: "b", explanation: "HCF takes the smallest power of common prime factors ➔ x¹y² = xy²." },
    { id: "c10m1-mcq-2", question: "The product of a non-zero rational and an irrational number is:", options: ["Always irrational", "Always rational", "Rational or irrational", "Zero"], correctAnswer: "a", explanation: "Multiplying any non-zero rational number with an irrational number always yields an irrational number." },
    { id: "c10m1-mcq-3", question: "If HCF(26, 169) = 13, then LCM(26, 169) is:", options: ["26", "52", "338", "13"], correctAnswer: "c", explanation: "LCM = (26 × 169) / 13 = 2 × 169 = 338." },
    { id: "c10m1-mcq-4", question: "The total number of factors of a prime number is:", options: ["1", "2", "3", "4"], correctAnswer: "b", explanation: "A prime number has exactly two factors: 1 and the number itself." },
    { id: "c10m1-mcq-5", question: "Which of the following is an irrational number?", options: ["√4", "3.14", "2 + √3", "22/7"], correctAnswer: "c", explanation: "Sum of a rational (2) and an irrational (√3) is always irrational." },
    { id: "c10m1-mcq-6", question: "If p and q are two co-prime numbers, then their HCF is:", options: ["0", "1", "p", "q"], correctAnswer: "b", explanation: "Co-prime numbers have no common factor other than 1." },
    { id: "c10m1-mcq-7", question: "The LCM of smallest two-digit composite number and smallest composite number is:", options: ["4", "12", "20", "44"], correctAnswer: "c", explanation: "Smallest composite = 4, Smallest 2-digit composite = 10. LCM(4, 10) = 20." },
    { id: "c10m1-mcq-8", question: "If n is a natural number, then 6ⁿ - 5ⁿ always ends with:", options: ["1", "3", "5", "7"], correctAnswer: "a", explanation: "6ⁿ ends in 6 and 5ⁿ ends in 5. So 6 - 5 = 1." },
    { id: "c10m1-mcq-9", question: "The HCF of two consecutive natural numbers is always:", options: ["0", "1", "2", "Product of the numbers"], correctAnswer: "b", explanation: "Any two consecutive natural numbers are always co-prime, so HCF = 1." },
    { id: "c10m1-mcq-10", question: "The exponent of 2 in the prime factorisation of 144 is:", options: ["2", "4", "5", "6"], correctAnswer: "b", explanation: "144 = 2⁴ × 3². The exponent of 2 is 4." }
  ]
};
