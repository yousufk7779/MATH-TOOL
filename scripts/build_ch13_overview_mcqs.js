const { THEME_COLOR, ACCENT_COLOR, frac } = require("./ch13_common");

function buildOverview() {
  const svgDispersion = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 460 220" style="width: 100%; max-width: 420px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Axes -->
        <line x1="30" y1="190" x2="430" y2="190" stroke="#64748B" stroke-width="1.8"/>
        <line x1="230" y1="20" x2="230" y2="190" stroke="#11998E" stroke-width="1.8" stroke-dasharray="4,4"/>
        <text x="235" y="35" font-size="12" font-weight="700" fill="#11998E">Mean (x̄)</text>
        <text x="420" y="205" font-size="12" font-weight="700" fill="#64748B">x</text>
        
        <!-- Low Dispersion Curve (Tightly clustered, tall) -->
        <path d="M 120 190 Q 230 20 340 190" fill="none" stroke="#38EF7D" stroke-width="3"/>
        <text x="175" y="70" font-size="11" font-weight="800" fill="#38EF7D">Low Dispersion (&sigma; small)</text>
        <text x="175" y="85" font-size="10" font-weight="600" fill="#81C784">(High Consistency)</text>

        <!-- High Dispersion Curve (Wide, spread out, flatter) -->
        <path d="M 50 190 Q 230 95 410 190" fill="none" stroke="#FF5722" stroke-width="2.5" stroke-dasharray="6,4"/>
        <text x="275" y="115" font-size="11" font-weight="800" fill="#FF5722">High Dispersion (&sigma; large)</text>
        <text x="275" y="130" font-size="10" font-weight="600" fill="#FF8A65">(High Variability)</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Concept of Dispersion: Comparing two distributions having the same mean but contrasting variance (spread).</div>
  </div>`;

  const svgDeviations = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 460 210" style="width: 100%; max-width: 420px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Number line -->
        <line x1="30" y1="130" x2="430" y2="130" stroke="#475569" stroke-width="2.2"/>
        <!-- Central Mean line -->
        <line x1="220" y1="40" x2="220" y2="170" stroke="#11998E" stroke-width="2.5"/>
        <circle cx="220" cy="130" r="5.5" fill="#11998E"/>
        <text x="210" y="190" font-size="13" font-weight="800" fill="#11998E">Mean x̄</text>

        <!-- Observation 1 (Left side) -->
        <circle cx="90" cy="130" r="5" fill="#38EF7D"/>
        <text x="80" y="155" font-size="11" font-weight="700" fill="#38EF7D">x₁</text>
        <line x1="90" y1="100" x2="220" y2="100" stroke="#38EF7D" stroke-width="2" marker-start="url(#arr-pt)" marker-end="url(#arr-pt)"/>
        <text x="130" y="92" font-size="11" font-weight="700" fill="#38EF7D">|x₁ &minus; x̄|</text>

        <!-- Observation 2 (Right side) -->
        <circle cx="360" cy="130" r="5" fill="#00E5FF"/>
        <text x="355" y="155" font-size="11" font-weight="700" fill="#00E5FF">x₂</text>
        <line x1="220" y1="65" x2="360" y2="65" stroke="#00E5FF" stroke-width="2"/>
        <text x="265" y="58" font-size="11" font-weight="700" fill="#00E5FF">|x₂ &minus; x̄|</text>

        <!-- Observation 3 (Close right) -->
        <circle cx="280" cy="130" r="5" fill="#FBBF24"/>
        <text x="275" y="155" font-size="11" font-weight="700" fill="#FBBF24">x₃</text>

        <defs>
          <marker id="arr-pt" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="4" markerHeight="4">
            <circle cx="3" cy="3" r="2.5" fill="#38EF7D"/>
          </marker>
        </defs>
      </svg>
    </div>
    <div class="diagram-caption">💡 Absolute Deviations: Quantifying individual distances |x<sub>i</sub> &minus; x̄| from the arithmetic mean.</div>
  </div>`;

  return `
<style>
  .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.95em; margin: 2px 6px; line-height: 1.25; }
  .frac .num { border-bottom: 1.5px solid currentColor; padding: 1px 4px; text-align: center; }
  .frac .den { padding: 1px 4px; text-align: center; }
  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(255, 255, 255, 0.15); border-left: 4px solid ${THEME_COLOR}; border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }
  .q-title { font-size: 18px; font-weight: 800; color: ${THEME_COLOR}; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 2.1; margin-bottom: 14px; font-weight: 500; text-align: left !important; }
  .sol-box { background: rgba(0, 0, 0, 0.35); border-left: 3.5px solid ${THEME_COLOR}; border-radius: 8px; padding: 14px 16px; margin-top: 12px; text-align: left !important; }
  .sol-title { font-size: 15.5px; font-weight: 800; color: #E2E8F0; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 2.35; text-align: left !important; }
  .sol-step div { margin-top: 6px; margin-bottom: 6px; text-align: left !important; }
  .diagram-wrapper { background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 18px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center; }
  .diagram-svg-container { display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 480px; }
  .diagram-caption { color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500; }
</style>

<div style="padding: 4px 2px;">
  <!-- Hero Banner -->
  <div style="background: linear-gradient(135deg, rgba(17, 153, 142, 0.25), rgba(0, 0, 0, 0.4)); border: 1.5px solid ${THEME_COLOR}; border-radius: 14px; padding: 18px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 22px; font-weight: 800; color: ${ACCENT_COLOR}; margin-bottom: 6px;">
      ✦ Chapter 13: Statistics
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.5;">
      Class 11 NCERT Mathematics &bull; Comprehensive Reference Guide &amp; Master Formula Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ 1. Quick Glossary &amp; Conceptual Foundations</div>
    <div class="q-text">
      While measures of central tendency (Mean, Median, Mode) locate the center of a distribution, <b>Measures of Dispersion</b> quantify the degree of scattering, variation, and scatter of observations around that central value.
    </div>
    <div class="sol-box">
      <div class="sol-title">Essential Statistical Axioms:</div>
      <div class="sol-step">
        <div>• <b style="color: ${ACCENT_COLOR};">Range:</b> Difference between maximum and minimum values: <i>Range = Maximum &minus; Minimum</i>. It ignores internal distribution.</div>
        <div>• <b style="color: ${ACCENT_COLOR};">Mean Deviation (MD):</b> Arithmetic mean of the absolute values of deviations from Mean or Median:
          <br/>&nbsp;&nbsp;<b><i>MD</i>(<i>x̄</i>) = ${frac("1", "N")} &sum; f<sub>i</sub>|x<sub>i</sub> &minus; x̄|</b>
        </div>
        <div>• <b style="color: ${ACCENT_COLOR};">Variance (&sigma;<sup>2</sup>):</b> Arithmetic mean of the squares of deviations from the arithmetic mean:
          <br/>&nbsp;&nbsp;<b>&sigma;<sup>2</sup> = ${frac("1", "N")} &sum; f<sub>i</sub>(x<sub>i</sub> &minus; x̄)<sup>2</sup></b>
        </div>
        <div>• <b style="color: ${ACCENT_COLOR};">Standard Deviation (&sigma;):</b> Positive square root of variance: <b>&sigma; = +&radic;Variance</b>. (Possesses original units of measurement).</div>
        <div>• <b style="color: ${ACCENT_COLOR};">Coefficient of Variation (CV):</b> Dimensionless measure of relative variability:
          <br/>&nbsp;&nbsp;<b><i>CV</i> = [${frac("&sigma;", "x̄")}] &times; 100</b>. Smaller <i>CV</i> indicates greater consistency/stability; larger <i>CV</i> indicates greater variability.</div>
      </div>
    </div>
  </div>

  ${svgDispersion}
  ${svgDeviations}

  <!-- Master Revision Formula Cheat Sheet -->
  <div class="q-card" style="border-color: ${THEME_COLOR};">
    <div class="q-title" style="color: ${ACCENT_COLOR}; font-size: 19px;">✦ 2. Master Revision Formula Cheat Sheet</div>
    <div style="font-size: 15px; color: #FFFFFF; line-height: 2.3;">
      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${ACCENT_COLOR};">1. Mean Deviation Formulas:</b><br/>
        &bull; <b>Ungrouped Data:</b> <i>MD</i>(<i>x̄</i>) = ${frac("&sum; |x<sub>i</sub> &minus; x̄|", "n")} &nbsp;|&nbsp; <i>MD</i>(<i>M</i>) = ${frac("&sum; |x<sub>i</sub> &minus; M|", "n")}<br/>
        &bull; <b>Grouped Data (Discrete &amp; Continuous):</b> <i>MD</i>(<i>x̄</i>) = ${frac("&sum; f<sub>i</sub> |x<sub>i</sub> &minus; x̄|", "N")}<br/>
        &bull; <b>Continuous Median:</b> <i>M</i> = <i>l</i> + [${frac("(N/2) &minus; C", "f")}] &times; <i>h</i>
      </div>

      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${ACCENT_COLOR};">2. Variance &amp; Standard Deviation Formulas:</b><br/>
        &bull; <b>Raw Observations:</b> &sigma;<sup>2</sup> = ${frac("1", "n")} &sum; <i>x</i><sub>i</sub><sup>2</sup> &minus; (<i>x̄</i>)<sup>2</sup><br/>
        &bull; <b>First n Natural Numbers:</b> Mean = <b>${frac("n + 1", "2")}</b> &nbsp;|&nbsp; Variance = <b>${frac("n<sup>2</sup> &minus; 1", "12")}</b><br/>
        &bull; <b>Frequency Distribution:</b> &sigma;<sup>2</sup> = ${frac("1", "N")} &sum; <i>f</i><sub>i</sub><i>x</i><sub>i</sub><sup>2</sup> &minus; (<i>x̄</i>)<sup>2</sup><br/>
        &bull; <b>Short-Cut / Step-Deviation Method:</b> &sigma;<sup>2</sup> = ${frac("h<sup>2</sup>", "N<sup>2</sup>")} [<i>N</i> &sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub><sup>2</sup> &minus; (&sum; <i>f</i><sub>i</sub><i>y</i><sub>i</sub>)<sup>2</sup>] &nbsp;where <i>y</i><sub>i</sub> = ${frac("x<sub>i</sub> &minus; A", "h")}
      </div>

      <div style="margin-bottom: 6px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${ACCENT_COLOR};">3. Linear Transformation &amp; Variability Rules:</b><br/>
        &bull; <b>Shift of Origin (y = x &plusmn; k):</b> Variance remains invariant: &sigma;<sub>y</sub><sup>2</sup> = &sigma;<sub>x</sub><sup>2</sup><br/>
        &bull; <b>Change of Scale (y = ax):</b> New Mean = <i>ax̄</i>, New Variance = <b>a<sup>2</sup>&sigma;<sup>2</sup></b>, New SD = <b>|a|&sigma;</b><br/>
        &bull; <b>Relative Stability:</b> Series with lower <i>CV</i> is more consistent/stable. Series with higher <i>CV</i> has greater variability.
      </div>
    </div>
  </div>
</div>`;
}

function buildMCQs() {
  return [
    {
      "id": "c11-math-13-mcq-1",
      "question": "Which of the following is NOT a measure of dispersion?",
      "options": [
        "A):   Mode",
        "B):   Mean Deviation",
        "C):   Range",
        "D):   Standard Deviation"
      ],
      "correctAnswer": "A",
      "explanation": "Mode is a measure of central tendency, whereas Range, Mean Deviation, and Standard Deviation are measures of dispersion."
    },
    {
      "id": "c11-math-13-mcq-2",
      "question": "The variance of the first n natural numbers is given by:",
      "options": [
        "A):   (n² − 1) / 6",
        "B):   (n + 1)² / 12",
        "C):   n(n + 1) / 12",
        "D):   (n² − 1) / 12"
      ],
      "correctAnswer": "D",
      "explanation": "Variance of first n natural numbers is σ² = (1/n)∑x² − (x̄)² = (n² − 1)/12."
    },
    {
      "id": "c11-math-13-mcq-3",
      "question": "If each observation in a data set is multiplied by 4, then the variance of the resulting observations is multiplied by:",
      "options": [
        "A):   4",
        "B):   2",
        "C):   8",
        "D):   16"
      ],
      "correctAnswer": "D",
      "explanation": "If yᵢ = a xᵢ, then Var(y) = a² Var(x). Here a = 4, so variance is multiplied by 4² = 16."
    },
    {
      "id": "c11-math-13-mcq-4",
      "question": "If each observation of a data set is increased by 10, the standard deviation will:",
      "options": [
        "A):   Increase by 10",
        "B):   Decrease by 10",
        "C):   Become 10 times",
        "D):   Remain unchanged"
      ],
      "correctAnswer": "D",
      "explanation": "Standard deviation is completely independent of a change of origin (adding or subtracting a constant)."
    },
    {
      "id": "c11-math-13-mcq-5",
      "question": "The sum of the deviations of observations from their arithmetic mean is always:",
      "options": [
        "A):   Maximum",
        "B):   Negative",
        "C):   Positive",
        "D):   Zero"
      ],
      "correctAnswer": "D",
      "explanation": "An algebraic property of arithmetic mean states that ∑(xᵢ − x̄) = 0."
    },
    {
      "id": "c11-math-13-mcq-6",
      "question": "Find the mean deviation about the mean for the observations: 3, 5, 7, 9, 11.",
      "options": [
        "A):   2.0",
        "B):   1.6",
        "C):   3.0",
        "D):   2.4"
      ],
      "correctAnswer": "D",
      "explanation": "Mean x̄ = 35/5 = 7. Deviations |xᵢ − 7|: 4, 2, 0, 2, 4. Sum = 12. MD = 12/5 = 2.4."
    },
    {
      "id": "c11-math-13-mcq-7",
      "question": "The coefficient of variation (CV) is computed using the formula:",
      "options": [
        "A):   (σ / x̄) × 100",
        "B):   (x̄ / σ) × 100",
        "C):   (σ² / x̄) × 100",
        "D):   (σ / N) × 100"
      ],
      "correctAnswer": "A",
      "explanation": "Coefficient of variation is defined as CV = (σ / x̄) × 100."
    },
    {
      "id": "c11-math-13-mcq-8",
      "question": "Between two series with the same mean, the one having greater standard deviation is said to be:",
      "options": [
        "A):   More consistent",
        "B):   More stable",
        "C):   More variable",
        "D):   More symmetric"
      ],
      "correctAnswer": "C",
      "explanation": "A series with higher standard deviation (and hence higher CV) shows greater variability."
    },
    {
      "id": "c11-math-13-mcq-9",
      "question": "The variance of 5, 5, 5, 5, 5 is:",
      "options": [
        "A):   5",
        "B):   25",
        "C):   0",
        "D):   1"
      ],
      "correctAnswer": "C",
      "explanation": "Since all observations are identical to the mean 5, all deviations are 0, so variance = 0."
    },
    {
      "id": "c11-math-13-mcq-10",
      "question": "The mean of the first n natural numbers is:",
      "options": [
        "A):   (n − 1) / 2",
        "B):   n / 2",
        "C):   (n + 1) / 2",
        "D):   (2n + 1) / 6"
      ],
      "correctAnswer": "C",
      "explanation": "Sum = n(n+1)/2. Mean = [n(n+1)/2] / n = (n+1)/2."
    },
    {
      "id": "c11-math-13-mcq-11",
      "question": "Find the variance of the observations: 2, 4, 6, 8, 10.",
      "options": [
        "A):   8",
        "B):   6",
        "C):   10",
        "D):   4"
      ],
      "correctAnswer": "A",
      "explanation": "Mean = 30/5 = 6. Deviations (xᵢ − 6): −4, −2, 0, 2, 4. Squares: 16, 4, 0, 4, 16. Sum = 40. Variance = 40/5 = 8."
    },
    {
      "id": "c11-math-13-mcq-12",
      "question": "The sum of absolute deviations of observations is minimum when taken from the:",
      "options": [
        "A):   Mean",
        "B):   Median",
        "C):   Mode",
        "D):   Geometric Mean"
      ],
      "correctAnswer": "B",
      "explanation": "A well-known mathematical theorem states that ∑|xᵢ − A| is minimized when A is the Median."
    },
    {
      "id": "c11-math-13-mcq-13",
      "question": "If standard deviation of a dataset is 5, what is the variance?",
      "options": [
        "A):   √5",
        "B):   10",
        "C):   25",
        "D):   125"
      ],
      "correctAnswer": "C",
      "explanation": "Variance = σ² = 5² = 25."
    },
    {
      "id": "c11-math-13-mcq-14",
      "question": "For a distribution, Mean = 50 and Standard Deviation = 10. The coefficient of variation is:",
      "options": [
        "A):   5%",
        "B):   10%",
        "C):   20%",
        "D):   50%"
      ],
      "correctAnswer": "C",
      "explanation": "CV = (σ / x̄) × 100 = (10 / 50) × 100 = 20%."
    },
    {
      "id": "c11-math-13-mcq-15",
      "question": "If yᵢ = 2xᵢ + 3 and standard deviation of x is 4, then standard deviation of y is:",
      "options": [
        "A):   11",
        "B):   8",
        "C):   16",
        "D):   7"
      ],
      "correctAnswer": "B",
      "explanation": "σ_y = |a| σ_x = |2| × 4 = 8 (the constant +3 does not affect SD)."
    },
    {
      "id": "c11-math-13-mcq-16",
      "question": "The mean deviation about median for observations 6, 7, 10, 12, 13, 4, 8, 12 is:",
      "options": [
        "A):   3.25",
        "B):   2.75",
        "C):   3.50",
        "D):   3.00"
      ],
      "correctAnswer": "B",
      "explanation": "Ordered: 4, 6, 7, 8, 10, 12, 12, 13 (n=8). Median = (8+10)/2 = 9. Absolute deviations from 9: 5, 3, 2, 1, 1, 3, 3, 4. Sum = 22. MD = 22/8 = 2.75."
    },
    {
      "id": "c11-math-13-mcq-17",
      "question": "If the variance of 10 observations is 16, what is the standard deviation?",
      "options": [
        "A):   4",
        "B):   256",
        "C):   8",
        "D):   1.6"
      ],
      "correctAnswer": "A",
      "explanation": "Standard deviation is the positive square root of variance: σ = √16 = 4."
    },
    {
      "id": "c11-math-13-mcq-18",
      "question": "In short-cut method with step-deviation yᵢ = (xᵢ − A)/h, the variance formula is:",
      "options": [
        "A):   (h/N) [N∑fᵢyᵢ² − (∑fᵢyᵢ)²]",
        "B):   (h²/N²) [N∑fᵢyᵢ² − (∑fᵢyᵢ)²]",
        "C):   (h²/N) [∑fᵢyᵢ² − (∑fᵢyᵢ)²]",
        "D):   h² [∑fᵢyᵢ² − (∑fᵢyᵢ)²]"
      ],
      "correctAnswer": "B",
      "explanation": "The short-cut variance formula is σ² = (h² / N²) [N∑fᵢyᵢ² − (∑fᵢyᵢ)²]."
    },
    {
      "id": "c11-math-13-mcq-19",
      "question": "The mean and variance of 7 observations are 8 and 16. If 5 observations are 2, 4, 10, 12, 14, the remaining two observations are:",
      "options": [
        "A):   5 and 9",
        "B):   4 and 10",
        "C):   6 and 8",
        "D):   7 and 7"
      ],
      "correctAnswer": "C",
      "explanation": "x + y = 56 − 42 = 14 and x² + y² = 100. Solving gives x = 6, y = 8."
    },
    {
      "id": "c11-math-13-mcq-20",
      "question": "The mean and variance of 8 observations are 9 and 9.25. If 6 observations are 6, 7, 10, 12, 12, 13, the other two observations are:",
      "options": [
        "A):   4 and 8",
        "B):   3 and 9",
        "C):   5 and 7",
        "D):   2 and 10"
      ],
      "correctAnswer": "A",
      "explanation": "x + y = 72 − 60 = 12 and x² + y² = 80. Solving gives x = 4, y = 8."
    },
    {
      "id": "c11-math-13-mcq-21",
      "question": "If Mean of Group A is 42 with σ = 12, and Mean of Group B is 32 with σ = 15, then:",
      "options": [
        "A):   Group A is more variable",
        "B):   Group B is more variable",
        "C):   Both are equally variable",
        "D):   Cannot be compared"
      ],
      "correctAnswer": "B",
      "explanation": "CV_A = (12/42) × 100 = 28.57%, while CV_B = (15/32) × 100 = 46.88%. Since CV_B > CV_A, Group B is more variable."
    },
    {
      "id": "c11-math-13-mcq-22",
      "question": "For n observations, if ∑(xᵢ − 5) = 10 and ∑(xᵢ − 5)² = 40 with n = 10, the variance is:",
      "options": [
        "A):   3",
        "B):   4",
        "C):   5",
        "D):   2"
      ],
      "correctAnswer": "A",
      "explanation": "Let dᵢ = xᵢ − 5. Var(x) = Var(d) = (1/n)∑dᵢ² − (d̄)² = (40/10) − (10/10)² = 4 − 1 = 3."
    },
    {
      "id": "c11-math-13-mcq-23",
      "question": "If the mean of 20 observations is 10 and an incorrect observation 8 is replaced by 12, the new correct mean is:",
      "options": [
        "A):   10.4",
        "B):   10.2",
        "C):   10.1",
        "D):   10.0"
      ],
      "correctAnswer": "B",
      "explanation": "Correct sum = (20 × 10) − 8 + 12 = 204. Correct Mean = 204 / 20 = 10.2."
    },
    {
      "id": "c11-math-13-mcq-24",
      "question": "Which measure of dispersion is most suitable when comparing datasets with different units or vastly different means?",
      "options": [
        "A):   Mean Deviation",
        "B):   Variance",
        "C):   Standard Deviation",
        "D):   Coefficient of Variation"
      ],
      "correctAnswer": "D",
      "explanation": "Coefficient of variation is a unitless, percentage ratio (σ/x̄ × 100) designed specifically to compare datasets of different units or magnitudes."
    },
    {
      "id": "c11-math-13-mcq-25",
      "question": "The variance of the first 10 multiples of 3 is:",
      "options": [
        "A):   64.25",
        "B):   74.25",
        "C):   84.25",
        "D):   54.25"
      ],
      "correctAnswer": "B",
      "explanation": "3, 6, ..., 30. x̄ = 16.5. σ² = (1/10)∑(xᵢ − 16.5)² = 742.5 / 10 = 74.25."
    }
  ];
}

module.exports = {
  buildOverview,
  buildMCQs
};
