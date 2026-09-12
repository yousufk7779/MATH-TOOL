// Class 12 Education Unit 7: Statistics in Education (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #FF007F (Neon Rose / Vivid Magenta matching Chapter 7)

const themeColor = "#FF007F";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Edu7HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(255, 0, 127, 0.08); border: 1.5px solid #FF007F; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF007F; font-weight: bold; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">📊 Quick Glossary &amp; Core Statistical Concepts</h2>
    <p class="text-center" style="color: #FF80BF; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Class 12 Unit 7: Statistics in Education (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">1. Variability (Dispersion / Scatter):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The degree of spread, scatter, or dispersion of individual scores around a central measure of average (Mean, Median, or Mode). It indicates whether a group of students is homogeneous (closely clustered) or heterogeneous (widely scattered).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">2. Standard Deviation (&sigma; / SD):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Introduced by Karl Pearson in 1893, it is the square root of the arithmetic mean of the squared deviations of scores from their arithmetic mean. It is the most stable, reliable, and mathematically rigorous measure of dispersion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">3. Quartile Deviation (QD / Semi-Interquartile Range):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">One-half of the distance between the third quartile (75th percentile, Q3) and the first quartile (25th percentile, Q1): QD = (Q3 &minus; Q1) / 2. It is insensitive to extreme outlier scores.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">4. Correlation Coefficient (r / &rho;):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A mathematical index quantifying the strength and direction of relationship between two paired variables (X and Y), strictly bounded between &minus;1.00 (perfect negative) and +1.00 (perfect positive).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">5. Spearman's Rank Difference vs. Pearson's Product-Moment:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Spearman's Rho (&rho;)</b> is a non-parametric method based on ordinal rank differences used for small samples (N &lt; 30). <b>Pearson's (r)</b> is a parametric method based on continuous score deviations used for large normal samples.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 7.1 -->
  <h2 style="color: #FF007F; font-weight: bold; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">7.1 Concept/ applicability of variability</h2>

  <p>In educational measurement, calculating the measures of central tendency &mdash; the Mean, Median, and Mode &mdash; provides only a single representative central value for a class. However, relying exclusively on averages can be deeply misleading. Consider two classroom sections of 30 students each: in Section A, every student scores between 48 and 52 marks, giving a Mean of 50. In Section B, half the students score 10 marks while the other half score 90 marks, also yielding a Mean of 50. Although their averages are identical, Section A is highly <b>homogeneous</b> (compactly clustered), whereas Section B is wildly <b>heterogeneous</b> (widely scattered). To capture this essential spread, educational statisticians compute <b style="color: #FF007F;">Variability</b> (also termed <i>Dispersion</i> or <i>Scatter</i>).</p>

  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(i) Meaning of Variability</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF007F; border-radius: 8px; padding: 14px 16px; margin: 18px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #FF007F;">Standard Definition:</b> <i>Variability refers to the extent to which the scores in a distribution are spread out, scattered, or dispersed around a central tendency (the Mean or Median). A small measure of variability indicates close clustering and high group uniformity; a large measure of variability indicates widespread dispersion and extreme individual differences.</i>
    </p>
  </div>

  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(ii) Educational Applicability &amp; Need of Variability</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px;">1. Judging the Representativeness of the Mean:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        When variability is small, the calculated Mean is highly dependable, accurate, and truly representative of student performance. When variability is enormous, the Mean is an artificial mathematical abstraction that conceals huge educational disparities.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px;">2. Comparing the Uniformity of Two Groups or Two Subjects:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Variability reveals whether Section A is more consistent in performance than Section B, or whether a class displays more uniform ability in Mathematics compared to English literature.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px;">3. Facilitating Homogeneous Ability Grouping:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Knowledge of score spread enables school principals to group students appropriately for remedial coaching, honors seminars, and differentiated instruction based on actual cognitive dispersion.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px;">4. Essential Gateway to Advanced Inferential Statistics:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Without measures of variability (particularly the Standard Deviation), it is mathematically impossible to compute Correlation, Z-scores, Standard Errors, Analysis of Variance (ANOVA), or normalize test scores on the Bell Curve.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: HOMOGENEOUS VS HETEROGENEOUS DISTRIBUTIONS (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="24" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">THE CONCEPT OF VARIABILITY: SAME MEAN, DIFFERENT SPREAD</text>

        <!-- Base Axis -->
        <line x1="30" y1="190" x2="410" y2="190" stroke="#334155" stroke-width="2" />

        <!-- Center Mean Line -->
        <line x1="220" y1="35" x2="220" y2="190" stroke="#0F172A" stroke-width="1.8" stroke-dasharray="3,3" />
        <text x="220" y="208" font-size="10" font-weight="bold" fill="#0F172A" text-anchor="middle">COMMON MEAN (M = 50)</text>

        <!-- Curve A: Homogeneous Group (Leptokurtic / High Peak, Low Spread) -->
        <path d="M 120 190 Q 170 185 190 80 Q 220 40 250 80 Q 270 185 320 190" fill="none" stroke="#16A34A" stroke-width="3" />
        <rect x="150" y="55" width="140" height="22" rx="4" fill="#DCFCE7" stroke="#16A34A" stroke-width="1" />
        <text x="220" y="70" font-size="9" font-weight="bold" fill="#15803D" text-anchor="middle">GROUP A: LOW VARIABILITY</text>

        <!-- Curve B: Heterogeneous Group (Platykurtic / Broad, Wide Spread) -->
        <path d="M 45 190 Q 110 170 160 130 Q 220 100 280 130 Q 330 170 395 190" fill="none" stroke="#FF007F" stroke-width="2.5" stroke-dasharray="5,3" />
        <rect x="145" y="112" width="150" height="22" rx="4" fill="#FCE7F3" stroke="#FF007F" stroke-width="1" />
        <text x="220" y="127" font-size="9" font-weight="bold" fill="#BE185D" text-anchor="middle">GROUP B: HIGH VARIABILITY</text>

        <!-- Legend / Footnote -->
        <text x="80" y="175" font-size="8.5" fill="#334155">Scores: 10 &mdash; 90</text>
        <text x="360" y="175" font-size="8.5" fill="#334155">Scores: 45 &mdash; 55</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Meaning of Variability: Group A (solid green) has identical mean to Group B (dashed pink), but Group A is tightly clustered (homogeneous) while Group B is widely dispersed (heterogeneous).
    </div>
  </div>

  <!-- SECTION 7.2 -->
  <h2 style="color: #FF007F; font-weight: bold; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px;">7.2 Methods of determining variability (Calculation and Uses): Range, Mean deviation, Quartile deviation, Standard deviation</h2>

  <p>In educational statistics, four established mathematical methods are utilized to quantify the dispersion of test scores, ranked in order of increasing statistical refinement:</p>

  <!-- METHOD 1: RANGE -->
  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(i) The Range</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF007F; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 6px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #FF007F;">Definition &amp; Formula:</b> The Range is the simplest, crudest measure of variability. It is the rough difference between the highest score and the lowest score in a distribution:
      <br /><span style="font-family: monospace; color: #FF80BF; font-weight: bold; font-size: 16px;">Range = Highest Score (H) &minus; Lowest Score (L)</span>
    </p>
    <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: #FF007F;">Merits &amp; Limitations:</b> It can be computed in seconds; however, it is highly unstable because it is governed exclusively by the two most extreme outlier scores, completely ignoring all intermediate scores.
      <br /><b style="color: #FF007F;">Uses:</b> Quick preliminary surveys of test scores, daily temperature variations, and stock market bounds.
    </p>
  </div>

  <!-- METHOD 2: QUARTILE DEVIATION -->
  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(ii) Quartile Deviation (QD / Semi-Interquartile Range)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF007F; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 6px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #FF007F;">Definition &amp; Formula:</b> Quartile Deviation is one-half of the distance between the third quartile (Q3, the 75th percentile) and the first quartile (Q1, the 25th percentile):
      <br /><span style="font-family: monospace; color: #FF80BF; font-weight: bold; font-size: 16px;">QD = (Q3 &minus; Q1) / 2</span>
    </p>
    <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: #FF007F;">Merits &amp; Limitations:</b> It focuses on the middle 50% of scores and is completely impervious to bizarre, distorted extreme scores. However, it ignores the top 25% and bottom 25% of scores and is not amenable to algebraic manipulation.
      <br /><b style="color: #FF007F;">Uses:</b> Best deployed when the distribution is heavily skewed, when extreme scores distort the mean, or when the Median is the measure of central tendency.
    </p>
  </div>

  <!-- METHOD 3: MEAN DEVIATION -->
  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(iii) Mean Deviation (MD / Average Deviation)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF007F; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 6px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #FF007F;">Definition &amp; Formula:</b> Mean Deviation is the arithmetic mean of the absolute deviations of all individual scores from the distribution's Mean (or Median), strictly ignoring plus and minus signs:
      <br /><span style="font-family: monospace; color: #FF80BF; font-weight: bold; font-size: 16px;">MD = &sum; |x| / N = &sum; |X &minus; Mean| / N</span>
    </p>
    <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: #FF007F;">Merits &amp; Limitations:</b> It takes every single score in the class into account and is intuitively easy to comprehend. However, artificially dropping algebraic plus/minus signs mathematically violates rigorous algebraic laws.
      <br /><b style="color: #FF007F;">Uses:</b> When an easily interpretable measure of average scatter incorporating all students is required without complex calculations.
    </p>
  </div>

  <!-- METHOD 4: STANDARD DEVIATION -->
  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(iv) Standard Deviation (&sigma; / SD / Root-Mean-Square Deviation)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF007F; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 6px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #FF007F;">Definition &amp; Formula:</b> Introduced by Karl Pearson in 1893, Standard Deviation is the square root of the arithmetic mean of the squared deviations from the Mean. Squaring the deviations mathematically resolves negative signs without violating algebraic laws:
      <br /><span style="font-family: monospace; color: #FF80BF; font-weight: bold; font-size: 16px;">&sigma; = &radic;[ &sum; x&sup2; / N ] = &radic;[ &sum; (X &minus; M)&sup2; / N ]</span>
    </p>
    <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: #FF007F;">Merits &amp; Limitations:</b> The gold standard of educational statistics. It is stable, mathematically pure, minimally affected by sample fluctuations, and serves as the building block for Z-scores and ANOVA. However, it requires tedious calculations.
      <br /><b style="color: #FF007F;">Uses:</b> Educational research, board examination scaling, psychometric test standardization, and calculating Pearson's correlation.
    </p>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 2: HIERARCHY OF VARIABILITY MEASURES (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">THE FOUR MEASURES OF VARIABILITY (RELIABILITY HIERARCHY)</text>

        <!-- 1. Range -->
        <rect x="20" y="42" width="185" height="75" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.6" />
        <text x="112" y="60" font-size="10.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">1. RANGE (H &minus; L)</text>
        <text x="112" y="76" font-size="8.5" fill="#991B1B" text-anchor="middle">&bull; Quickest &amp; crudest measure</text>
        <text x="112" y="90" font-size="8.5" fill="#334155" text-anchor="middle">&bull; Uses only 2 extreme scores</text>
        <text x="112" y="104" font-size="8" fill="#475569" text-anchor="middle">Unreliable &bull; Preliminary use</text>

        <!-- 2. Quartile Deviation -->
        <rect x="235" y="42" width="185" height="75" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="1.6" />
        <text x="327" y="60" font-size="10.5" font-weight="bold" fill="#B45309" text-anchor="middle">2. QUARTILE DEV. (QD)</text>
        <text x="327" y="76" font-size="8.5" fill="#92400E" text-anchor="middle">&bull; Formula: (Q3 &minus; Q1) / 2</text>
        <text x="327" y="90" font-size="8.5" fill="#334155" text-anchor="middle">&bull; Middle 50% &bull; Used with Median</text>
        <text x="327" y="104" font-size="8" fill="#475569" text-anchor="middle">Immune to extreme distorted scores</text>

        <!-- 3. Mean Deviation -->
        <rect x="20" y="132" width="185" height="75" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.6" />
        <text x="112" y="150" font-size="10.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">3. MEAN DEV. (MD)</text>
        <text x="112" y="166" font-size="8.5" fill="#1E40AF" text-anchor="middle">&bull; Formula: &sum;|x| / N</text>
        <text x="112" y="180" font-size="8.5" fill="#334155" text-anchor="middle">&bull; Ignores + / &minus; algebraic signs</text>
        <text x="112" y="194" font-size="8" fill="#475569" text-anchor="middle">Takes all scores into account</text>

        <!-- 4. Standard Deviation -->
        <rect x="235" y="132" width="185" height="75" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8" />
        <text x="327" y="150" font-size="10.5" font-weight="bold" fill="#15803D" text-anchor="middle">4. STANDARD DEV. (&sigma;)</text>
        <text x="327" y="166" font-size="8.5" fill="#166534" text-anchor="middle">&bull; Formula: &radic;[&sum;x&sup2; / N]</text>
        <text x="327" y="180" font-size="8.5" fill="#334155" text-anchor="middle">&bull; Karl Pearson (1893) &bull; Pure algebra</text>
        <text x="327" y="194" font-size="8" font-weight="bold" fill="#15803D" text-anchor="middle">Most stable &amp; reliable in research</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Dispersion Spectrum: Range is fastest but crudest; Quartile Deviation guards against outliers; Mean Deviation averages absolute spread; Standard Deviation is the mathematically supreme gold standard.
    </div>
  </div>

  <!-- SECTION 7.3 -->
  <h2 style="color: #FF007F; font-weight: bold; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px;">7.3 Correlation: applications and types</h2>

  <p>In educational psychology, we constantly investigate whether two separate student traits or abilities are related to each other. For example: Does high intelligence correspond to high examination scores? Does examination anxiety impair academic recall? <b style="color: #FF007F;">Correlation</b> is the mathematical technique that investigates and quantifies the degree of mutual association or co-variation between two paired variables.</p>

  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(i) The Coefficient of Correlation (r / &rho;)</h3>
  <p>The strength and direction of correlation are represented by a single index called the <b>Coefficient of Correlation</b>, bounded strictly between <b>&minus;1.00 and +1.00</b>:</p>
  <ul style="padding-left: 20px; line-height: 1.8; color: #FFFFFF;">
    <li><b style="color: #FF007F; font-weight: bold;">+1.00:</b> Perfect Positive Correlation.</li>
    <li><b style="color: #FF007F; font-weight: bold;">+0.70 to +0.99:</b> High Positive Correlation.</li>
    <li><b style="color: #FF007F; font-weight: bold;">+0.30 to +0.69:</b> Moderate Positive Correlation.</li>
    <li><b style="color: #FF007F; font-weight: bold;">0.00:</b> Zero / Absence of Correlation.</li>
    <li><b style="color: #FF007F; font-weight: bold;">&minus;0.01 to &minus;0.99:</b> Negative Correlation.</li>
    <li><b style="color: #FF007F; font-weight: bold;">&minus;1.00:</b> Perfect Negative Correlation.</li>
  </ul>

  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(ii) Types of Correlation</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-weight: bold; font-size: 16px;">📈 1. Positive Correlation (0 &lt; r &le; +1.00):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Occurs when two variables move in the <b>same direction</b>. An increase in variable X is accompanied by a corresponding increase in variable Y (or decrease in X accompanied by decrease in Y).
        <br /><i>Examples:</i> Study hours and board marks; Height and weight; Vocabulary size and reading comprehension.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-weight: bold; font-size: 16px;">📉 2. Negative Correlation (&minus;1.00 &le; r &lt; 0):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Occurs when two variables move in <b>opposite directions</b>. As variable X increases, variable Y systematically decreases.
        <br /><i>Examples:</i> Acute examination anxiety and performance recall; Number of school absences and academic grades; Driving speed and remaining fuel.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(148, 163, 184, 0.4); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-weight: bold; font-size: 16px;">⚪ 3. Zero Correlation (r = 0.00):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Occurs when there is a complete absence of any linear relationship. Changes in variable X have zero bearing on variable Y.
        <br /><i>Examples:</i> Shoe size and intelligence quotient (IQ); Body weight and mathematical aptitude; Hair length and musical talent.
      </p>
    </div>
  </div>

  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(iii) Educational Applications of Correlation</h3>
  <ul style="padding-left: 20px; line-height: 1.8; color: #FFFFFF;">
    <li><b style="color: #FF007F;">1. Prediction and Prognosis:</b> Enables educators to forecast future college performance based on Class 10/12 board marks.</li>
    <li><b style="color: #FF007F;">2. Determining Test Reliability:</b> Using test-retest or split-half methods to correlate test administrations, ensuring consistent measurement.</li>
    <li><b style="color: #FF007F;">3. Determining Test Validity:</b> Correlating scores on a new aptitude test against proven real-world job performance criteria.</li>
    <li><b style="color: #FF007F;">4. Vocational and Educational Counseling:</b> Helping students choose career streams matching their proven correlated aptitudes.</li>
  </ul>

  <!-- STANDALONE CLEAN DIAGRAM 3: SCATTER PLOTS OF CORRELATION (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 210" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="210" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="20" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">SCATTER PLOTS: THE THREE CARDINAL CORRELATION PATTERNS</text>

        <!-- Plot 1: Positive Correlation -->
        <rect x="20" y="38" width="115" height="135" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.4" />
        <text x="77" y="55" font-size="9.5" font-weight="bold" fill="#15803D" text-anchor="middle">POSITIVE (r &gt; 0)</text>
        <!-- Axes -->
        <line x1="35" y1="150" x2="120" y2="150" stroke="#334155" stroke-width="1.2" />
        <line x1="35" y1="70" x2="35" y2="150" stroke="#334155" stroke-width="1.2" />
        <!-- Dots rising left-to-right -->
        <circle cx="45" cy="140" r="3" fill="#16A34A" />
        <circle cx="60" cy="125" r="3" fill="#16A34A" />
        <circle cx="75" cy="110" r="3" fill="#16A34A" />
        <circle cx="90" cy="95" r="3" fill="#16A34A" />
        <circle cx="108" cy="78" r="3" fill="#16A34A" />
        <text x="77" y="165" font-size="8" fill="#166534" text-anchor="middle">Study &harr; Marks</text>

        <!-- Plot 2: Zero Correlation -->
        <rect x="162" y="38" width="115" height="135" rx="6" fill="#F8FAFC" stroke="#64748B" stroke-width="1.4" />
        <text x="220" y="55" font-size="9.5" font-weight="bold" fill="#334155" text-anchor="middle">ZERO (r = 0.00)</text>
        <!-- Axes -->
        <line x1="177" y1="150" x2="262" y2="150" stroke="#334155" stroke-width="1.2" />
        <line x1="177" y1="70" x2="177" y2="150" stroke="#334155" stroke-width="1.2" />
        <!-- Dots scattered randomly -->
        <circle cx="190" cy="85" r="3" fill="#64748B" />
        <circle cx="210" cy="135" r="3" fill="#64748B" />
        <circle cx="235" cy="80" r="3" fill="#64748B" />
        <circle cx="245" cy="120" r="3" fill="#64748B" />
        <circle cx="220" cy="105" r="3" fill="#64748B" />
        <circle cx="195" cy="125" r="3" fill="#64748B" />
        <text x="220" y="165" font-size="8" fill="#475569" text-anchor="middle">Shoe Size &harr; IQ</text>

        <!-- Plot 3: Negative Correlation -->
        <rect x="305" y="38" width="115" height="135" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.4" />
        <text x="362" y="55" font-size="9.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">NEGATIVE (r &lt; 0)</text>
        <!-- Axes -->
        <line x1="320" y1="150" x2="405" y2="150" stroke="#334155" stroke-width="1.2" />
        <line x1="320" y1="70" x2="320" y2="150" stroke="#334155" stroke-width="1.2" />
        <!-- Dots falling left-to-right -->
        <circle cx="330" cy="78" r="3" fill="#EF4444" />
        <circle cx="348" cy="95" r="3" fill="#EF4444" />
        <circle cx="365" cy="110" r="3" fill="#EF4444" />
        <circle cx="382" cy="125" r="3" fill="#EF4444" />
        <circle cx="398" cy="140" r="3" fill="#EF4444" />
        <text x="362" y="165" font-size="8" fill="#991B1B" text-anchor="middle">Anxiety &harr; Recall</text>

        <!-- Bottom Caption -->
        <text x="220" y="195" font-size="9" font-weight="bold" fill="#0F172A" text-anchor="middle">Co-variation index ranges from &minus;1.00 (Opposite) to +1.00 (Identical)</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 Visualizing Correlation: Rising slope reflects positive co-variation; random dispersion reflects zero correlation; falling slope reflects negative inverse co-variation.
    </div>
  </div>

  <!-- SECTION 7.4 -->
  <h2 style="color: #FF007F; font-weight: bold; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px;">7.4 Computation of correlation through Rank difference method (Spearman) and Product moment method (Pearson)</h2>

  <p>To calculate the coefficient of correlation in classroom and psychometric testing, two primary methods are prescribed:</p>

  <!-- METHOD 1: SPEARMAN'S RANK DIFFERENCE METHOD -->
  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(i) Spearman's Rank Difference Method (&rho; / Rho)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF007F; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #FF007F;">Formulated by:</b> British psychologist <b>Charles Spearman</b> in 1904. It is a non-parametric method used when scores are arranged in ordinal ranks, when sample size is small (<b>N &lt; 30</b>), or when qualitative attributes (beauty, leadership, honesty) are being compared.
    </p>
    <p style="margin: 0 0 8px 0; font-family: monospace; color: #FF80BF; font-weight: bold; font-size: 16px;">
      &rho; = 1 &minus; [ 6 &sum; D&sup2; / (N(N&sup2; &minus; 1)) ]
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li><b style="color: #FF007F;">&rho; (Rho):</b> Coefficient of Rank Correlation.</li>
      <li><b style="color: #FF007F;">D:</b> Difference between paired ranks of a student (D = R1 &minus; R2).</li>
      <li><b style="color: #FF007F;">&sum; D&sup2;:</b> Sum of the squares of rank differences.</li>
      <li><b style="color: #FF007F;">N:</b> Total number of paired students/observations.</li>
    </ul>
  </div>

  <!-- METHOD 2: PEARSON'S PRODUCT-MOMENT METHOD -->
  <h3 style="color: #FF007F; font-weight: bold; margin-top: 24px;">(ii) Pearson's Product-Moment Correlation Method (r)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF007F; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #FF007F;">Formulated by:</b> <b>Karl Pearson</b>. It is the most mathematically rigorous, stable parametric measure of correlation, designed for continuous interval/ratio data and large sample sizes (<b>N &gt; 30</b>).
    </p>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: #FF007F;">Deviation Formula:</b>
      <br /><span style="font-family: monospace; color: #FF80BF; font-weight: bold; font-size: 16px;">r = &sum; xy / (N &sigma;x &sigma;y) = &sum; xy / &radic;[ (&sum; x&sup2;) &times; (&sum; y&sup2;) ]</span>
      <br />where <span style="font-family: monospace;">x = (X &minus; Mx)</span> and <span style="font-family: monospace;">y = (Y &minus; My)</span>.
    </p>
    <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: #FF007F;">Raw Score Formula:</b>
      <br /><span style="font-family: monospace; color: #FF80BF; font-weight: bold; font-size: 15px;">r = [ N &sum; XY &minus; (&sum;X)(&sum;Y) ] / &radic;[ {N &sum;X&sup2; &minus; (&sum;X)&sup2;} {N &sum;Y&sup2; &minus; (&sum;Y)&sup2;} ]</span>
    </p>
  </div>

  <!-- COMPARISON TABLE BOX -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid #FF007F; border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 17px; font-weight: bold; margin: 0 0 12px 0;">
      📊 Master Comparative Matrix: Spearman (Rho) vs. Pearson (r)
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #F8FAFC;">
        <thead>
          <tr style="background: rgba(255, 0, 127, 0.25); border-bottom: 2px solid #FF007F;">
            <th style="padding: 10px; text-align: left;">Dimension</th>
            <th style="padding: 10px; text-align: left;">Spearman's Rank Difference (&rho;)</th>
            <th style="padding: 10px; text-align: left;">Pearson's Product-Moment (r)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: #FF007F;">Statistical Nature</td>
            <td style="padding: 10px;">Non-parametric (ordinal scale).</td>
            <td style="padding: 10px;">Parametric (interval/ratio continuous scale).</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: #FF007F;">Sample Size</td>
            <td style="padding: 10px;">Ideal for small samples (N &lt; 30).</td>
            <td style="padding: 10px;">Mandatory for large samples (N &gt; 30).</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: #FF007F;">Underlying Data</td>
            <td style="padding: 10px;">Ranks, qualitative attributes (judges, debate).</td>
            <td style="padding: 10px;">Exact quantitative test marks and continuous scores.</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #FF007F;">Calculation Speed</td>
            <td style="padding: 10px;">Fast, simple arithmetic differences.</td>
            <td style="padding: 10px;">Laborious, mathematically rigorous.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: Q & A (SOLUTIONS)                          */
/* -------------------------------------------------------------------------- */

export const c12Edu7HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(255, 0, 127, 0.08); border-left: 4px solid #FF007F; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
    <h3 style="color: #FF007F; font-weight: bold; margin: 0 0 6px 0; font-size: 18px; font-weight: bold;">🎯 Golden 25 Board Examination Q &amp; A Blueprint</h3>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">
      Class 12 Unit 7: Statistics in Education (10 Marks) &bull; Strictly 12 VSAT (1 &amp; 2 Marks), 8 SAT (4 Marks), and 5 LAT (6 Marks).
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER TYPE (1 & 2 MARKS) - 12 QUESTIONS          -->
  <!-- ======================================================================== -->
  <h2 style="color: #FF007F; font-weight: bold; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 25px;">
    Section A: Very Short Answer Questions (1 &amp; 2 Marks)
  </h2>

  <!-- Q1 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q1: Define 'Variability' in educational statistics.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #FF007F;">Variability</b> refers to the degree of spread, scatter, or dispersion of individual test scores around a measure of central tendency (the Mean or Median).
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q2: State the formula for calculating Range and give an example.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #FF007F;">Range = Highest Score (H) &minus; Lowest Score (L)</b>. For scores 20, 35, 50, 65, 80: Range = 80 &minus; 20 = 60.
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q3: What is Quartile Deviation (QD)? State its mathematical formula.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #FF007F;">Quartile Deviation</b> is one-half of the distance between the 75th percentile (Q3) and the 25th percentile (Q1): <b style="color: #FF007F;">QD = (Q3 &minus; Q1) / 2</b>.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q4: Why does Mean Deviation ignore plus and minus signs?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      By mathematical definition, the algebraic sum of deviations from the Mean is always zero (&sum; x = 0). Therefore, Mean Deviation ignores plus and minus signs to compute the absolute average distance of scores from the mean.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q5: Who introduced the concept of Standard Deviation, and in which year?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The concept of Standard Deviation was introduced by the eminent British mathematician <b style="color: #FF007F;">Karl Pearson</b> in <b style="color: #FF007F;">1893</b>.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q6: State the formula of Standard Deviation (&sigma;) for ungrouped data.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #FF007F;">&sigma; = &radic;[ &sum; x&sup2; / N ]</b>, where <b style="color: #FF007F;">x = (X &minus; Mean)</b> is the deviation of each score from the mean, and <b style="color: #FF007F;">N</b> is the total number of scores.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q7: Define Correlation in educational measurement.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #FF007F;">Correlation</b> is the mathematical technique used to measure and describe the strength and direction of mutual relationship or co-variation between two paired variables.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q8: Differentiate between Positive and Negative Correlation with one example of each.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      In <b style="color: #FF007F;">Positive Correlation</b>, variables move in the same direction (e.g., study time and test marks). In <b style="color: #FF007F;">Negative Correlation</b>, variables move in opposite directions (e.g., examination anxiety and academic recall).
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q9: What is Zero Correlation? Give an educational example.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #FF007F;">Zero Correlation (r = 0.00)</b> indicates complete absence of any linear relationship between two variables (e.g., a student's shoe size and their intelligence quotient [IQ]).
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q10: What is the permissible numerical range of the Correlation Coefficient (r)?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The coefficient of correlation is strictly bounded between <b style="color: #FF007F;">&minus;1.00 (perfect negative)</b> and <b style="color: #FF007F;">+1.00 (perfect positive)</b>.
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q11: State Spearman's Rank Difference formula for correlation.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #FF007F;">&rho; = 1 &minus; [ 6 &sum; D&sup2; / (N(N&sup2; &minus; 1)) ]</b>, where D is the difference between paired ranks (R1 &minus; R2) and N is the number of pairs.
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q12: State Pearson's Product-Moment formula for correlation using score deviations.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #FF007F;">r = &sum; xy / &radic;[ (&sum; x&sup2;) &times; (&sum; y&sup2;) ]</b>, where x = X &minus; Mx and y = Y &minus; My.
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER TYPE (4 MARKS) - 8 QUESTIONS                    -->
  <!-- ======================================================================== -->
  <h2 style="color: #FF007F; font-weight: bold; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px;">
    Section B: Short Answer Questions (4 Marks)
  </h2>

  <!-- Q13 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q13: Explain why measures of central tendency alone are inadequate to describe a distribution.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Central tendencies describe only the middle point, hiding critical score spread:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #FF007F;">1. Concealing Individual Differences:</b> Two classes may both have a Mean of 50, but one class may consist of closely grouped average learners, while the other has geniuses and failing students.</li>
        <li><b style="color: #FF007F;">2. Misleading Pedagogical Decisions:</b> A teacher looking only at the Mean may prepare a single intermediate lesson, alienating struggling students and boring gifted learners.</li>
        <li><b style="color: #FF007F;">3. Assessing Consistency:</b> Variability reveals whether a group's performance is stable or unpredictable.</li>
        <li><b style="color: #FF007F;">4. Conclusion:</b> An average without variability is like describing a city's climate by average annual temperature without mentioning winter freezes or summer heatwaves.</li>
      </ul>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q14: Compare Range, Quartile Deviation, Mean Deviation, and Standard Deviation in terms of reliability and utility.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      The four dispersion measures represent escalating levels of statistical precision:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #FF007F;">1. Range:</b> Fastest to compute, but least reliable because it depends solely on two extreme outliers.</li>
        <li><b style="color: #FF007F;">2. Quartile Deviation (QD):</b> Measures middle 50% spread; highly useful for skewed distributions, but ignores 50% of the sample data.</li>
        <li><b style="color: #FF007F;">3. Mean Deviation (MD):</b> Averages absolute distances of all scores; highly intuitive, but mathematically flawed by ignoring algebraic signs.</li>
        <li><b style="color: #FF007F;">4. Standard Deviation (&sigma;):</b> Most reliable, stable, and mathematically sound; serves as the cornerstone for advanced inferential statistics.</li>
      </ul>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q15: Calculate the Range and Quartile Deviation for the given scores: 12, 15, 18, 22, 25, 28, 32.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      <b style="color: #FF007F;">Step 1 &mdash; Calculate Range:</b>
      <br />Highest Score (H) = 32, Lowest Score (L) = 12.
      <br /><span style="font-family: monospace; color: #FF80BF;">Range = H &minus; L = 32 &minus; 12 = 20</span>.
      <br /><b style="color: #FF007F;">Step 2 &mdash; Calculate Quartile Deviation (QD):</b>
      <br />Total items N = 7 (already in ascending order).
      <br />Q1 = (N + 1)/4 th term = 8/4 = 2nd term = 15.
      <br />Q3 = 3(N + 1)/4 th term = 3(8)/4 = 6th term = 28.
      <br /><span style="font-family: monospace; color: #FF80BF;">QD = (Q3 &minus; Q1) / 2 = (28 &minus; 15) / 2 = 13 / 2 = 6.5</span>.
    </div>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q16: Calculate the Mean Deviation from the mean for the scores: 6, 8, 10, 12, 14.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      <b style="color: #FF007F;">Step 1 &mdash; Calculate Mean (M):</b>
      <br />&sum; X = 6 + 8 + 10 + 12 + 14 = 50. N = 5.
      <br />Mean (M) = 50 / 5 = 10.
      <br /><b style="color: #FF007F;">Step 2 &mdash; Compute Absolute Deviations |x| = |X &minus; M|:</b>
      <br />|6 &minus; 10| = 4; |8 &minus; 10| = 2; |10 &minus; 10| = 0; |12 &minus; 10| = 2; |14 &minus; 10| = 4.
      <br />&sum; |x| = 4 + 2 + 0 + 2 + 4 = 12.
      <br /><b style="color: #FF007F;">Step 3 &mdash; Apply Formula:</b>
      <br /><span style="font-family: monospace; color: #FF80BF;">MD = &sum; |x| / N = 12 / 5 = 2.4</span>.
    </div>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q17: Calculate the Standard Deviation (&sigma;) for the ungrouped scores: 4, 6, 8, 10, 12.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      <b style="color: #FF007F;">Step 1 &mdash; Calculate Mean (M):</b>
      <br />&sum; X = 4 + 6 + 8 + 10 + 12 = 40. N = 5.
      <br />Mean (M) = 40 / 5 = 8.
      <br /><b style="color: #FF007F;">Step 2 &mdash; Compute Deviations (x = X &minus; M) and Squared Deviations (x&sup2;):</b>
      <br />(4 &minus; 8)&sup2; = (&minus;4)&sup2; = 16; (6 &minus; 8)&sup2; = (&minus;2)&sup2; = 4; (8 &minus; 8)&sup2; = 0&sup2; = 0; (10 &minus; 8)&sup2; = 2&sup2; = 4; (12 &minus; 8)&sup2; = 4&sup2; = 16.
      <br />&sum; x&sup2; = 16 + 4 + 0 + 4 + 16 = 40.
      <br /><b style="color: #FF007F;">Step 3 &mdash; Apply Standard Deviation Formula:</b>
      <br /><span style="font-family: monospace; color: #FF80BF;">&sigma; = &radic;[ &sum; x&sup2; / N ] = &radic;[ 40 / 5 ] = &radic;8 &approx; 2.83</span>.
    </div>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q18: Explain the educational applications of correlation in testing, prediction, and guidance.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Correlation is an indispensable tool in educational practice:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #FF007F;">1. Predictive Prognosis:</b> Correlating admission test scores with subsequent academic performance helps predict student success in professional courses.</li>
        <li><b style="color: #FF007F;">2. Determining Reliability:</b> Correlating scores obtained by students on test-retest administrations proves whether an examination tool is consistent.</li>
        <li><b style="color: #FF007F;">3. Validating Achievement Tests:</b> Correlating school examination marks with established standardized tests determines test validity.</li>
        <li><b style="color: #FF007F;">4. Career &amp; Stream Guidance:</b> Evaluating correlation between mechanical aptitude and engineering performance guides students into suitable vocational streams.</li>
      </ul>
    </div>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q19: Calculate the Spearman Rank Correlation Coefficient (&rho;) for 5 students ranked in English (X) and History (Y): Ranks (1, 2, 3, 4, 5) and (2, 1, 4, 3, 5).</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      <b style="color: #FF007F;">Step 1 &mdash; Calculate Rank Differences (D = R1 &minus; R2) and D&sup2;:</b>
      <br />Student 1: D = 1 &minus; 2 = &minus;1 &rarr; D&sup2; = 1
      <br />Student 2: D = 2 &minus; 1 = +1 &rarr; D&sup2; = 1
      <br />Student 3: D = 3 &minus; 4 = &minus;1 &rarr; D&sup2; = 1
      <br />Student 4: D = 4 &minus; 3 = +1 &rarr; D&sup2; = 1
      <br />Student 5: D = 5 &minus; 5 = 0 &rarr; D&sup2; = 0
      <br />&sum; D&sup2; = 1 + 1 + 1 + 1 + 0 = 4. N = 5.
      <br /><b style="color: #FF007F;">Step 2 &mdash; Apply Spearman's Formula:</b>
      <br />&rho; = 1 &minus; [ 6 &sum; D&sup2; / (N(N&sup2; &minus; 1)) ] = 1 &minus; [ 6(4) / (5(25 &minus; 1)) ]
      <br />&rho; = 1 &minus; [ 24 / (5 &times; 24) ] = 1 &minus; [ 1 / 5 ] = 1 &minus; 0.20 = <b style="color: #FF80BF;">+0.80</b>.
      <br /><span style="color: #38EF7D;">Interpretation: There is a very high positive correlation (+0.80) between English and History ranks.</span>
    </div>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q20: Differentiate systematically between Spearman's Rank Difference method and Pearson's Product-Moment method.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Spearman and Pearson methods serve different statistical scenarios:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #FF007F;">1. Data Scale:</b> Spearman (&rho;) uses ordinal rank data; Pearson (r) requires continuous interval/ratio score data.</li>
        <li><b style="color: #FF007F;">2. Sample Size:</b> Spearman is designed for small samples (N &lt; 30); Pearson requires large normal distributions (N &gt; 30).</li>
        <li><b style="color: #FF007F;">3. Mathematical Nature:</b> Spearman is a non-parametric distribution-free technique; Pearson is a parametric technique assuming normality.</li>
        <li><b style="color: #FF007F;">4. Computational Ease:</b> Spearman is rapid and simple; Pearson requires calculating extensive cross-products and standard deviations.</li>
      </ul>
    </div>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION C: LONG ANSWER TYPE (6 MARKS) - 5 QUESTIONS                     -->
  <!-- ======================================================================== -->
  <h2 style="color: #FF007F; font-weight: bold; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px;">
    Section C: Long Answer Questions (6 Marks)
  </h2>

  <!-- Q21 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q21: Comprehensive Exposition of Variability: Meaning, Need, and Detailed Comparative Analysis of the Four Measures of Dispersion.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #FF007F;">I. Concept of Variability:</b><br />
      While central tendencies identify the focal center of gravity, Variability quantifies the degree of dispersion or scatter of scores around that average. It answers whether a classroom is homogeneous or heterogeneous.</p>

      <p><b style="color: #FF007F;">II. Four Measures of Dispersion Compared:</b><br />
      (1) <b style="color: #FF007F;">Range (H &minus; L):</b> Fastest, crudest measure. Governed exclusively by two extreme outliers, ignoring all intermediate scores.<br />
      (2) <b style="color: #FF007F;">Quartile Deviation (QD = [Q3 &minus; Q1] / 2):</b> Measures middle 50% spread. Ideal for truncated or skewed distributions with extreme outliers, but ignores top and bottom 25% data.<br />
      (3) <b style="color: #FF007F;">Mean Deviation (MD = &sum;|x| / N):</b> Arithmetic mean of absolute deviations. Considers every score, but artificially ignores algebraic signs, violating algebraic laws.<br />
      (4) <b style="color: #FF007F;">Standard Deviation (&sigma; = &radic;[&sum;x&sup2; / N]):</b> The square root of mean squared deviations. Pure algebra, mathematically stable, minimally affected by sample fluctuations.</p>

      <p><b style="color: #FF007F;">III. Educational Significance:</b><br />
      Educators use variability to judge mean reliability, evaluate teacher effectiveness, design homogeneous ability groups, and conduct educational research.</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q22: Exhaustive Analysis of Standard Deviation: Mathematical Definition, Properties, and Superiority in Educational Measurement.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #FF007F;">I. Definition &amp; Formulations:</b><br />
      Formulated by Karl Pearson in 1893, Standard Deviation (&sigma;) is the square root of the arithmetic mean of squared deviations from the Mean. For ungrouped data: &sigma; = &radic;[ &sum; x&sup2; / N ]. For grouped data: &sigma; = i &times; &radic;[ (&sum; fx'&sup2; / N) &minus; (&sum; fx' / N)&sup2; ].</p>

      <p><b style="color: #FF007F;">II. Why Standard Deviation is the Gold Standard:</b><br />
      (1) <b style="color: #FF007F;">Algebraic Integrity:</b> By squaring deviations, negative signs vanish naturally without mathematically illegitimate absolute-value assumptions.<br />
      (2) <b style="color: #FF007F;">Sample Stability:</b> Displays the smallest sampling fluctuation among all dispersion measures.<br />
      (3) <b style="color: #FF007F;">Normal Curve Properties:</b> In a normal bell curve, exactly 68.26% of cases fall within Mean &plusmn; 1&sigma;; 95.44% fall within Mean &plusmn; 2&sigma;; and 99.73% fall within Mean &plusmn; 3&sigma;.<br />
      (4) <b style="color: #FF007F;">Foundation for Inferential Statistics:</b> Indispensable for computing Z-scores, T-scores, Standard Error, Pearson's r, and ANOVA.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q23: Critical Analysis of Correlation: Meaning, Types, and Pedagogical Applications in School Decision-Making.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #FF007F;">I. Concept of Correlation:</b><br />
      Pioneered by Francis Galton and Karl Pearson, correlation quantifies the degree and direction of co-variation between two paired variables, represented by a coefficient ranging from &minus;1.00 to +1.00.</p>

      <p><b style="color: #FF007F;">II. Types of Correlation:</b><br />
      (1) <b style="color: #FF007F;">Positive Correlation (r &gt; 0):</b> Variables change in the same direction (e.g., intelligence and scholastic achievement).<br />
      (2) <b style="color: #FF007F;">Negative Correlation (r &lt; 0):</b> Variables change in opposite directions (e.g., chronic absenteeism and grade point average).<br />
      (3) <b style="color: #FF007F;">Zero Correlation (r = 0.00):</b> No linear relationship exists (e.g., shoe size and memory span).<br />
      (4) <b style="color: #FF007F;">Linear vs. Curvilinear:</b> Constant proportionality vs. variable changes (like the Yerkes-Dodson arousal curve).</p>

      <p><b style="color: #FF007F;">III. Pedagogical Decision-Making:</b><br />
      Schools use correlation to establish psychometric test reliability, validate internal examination papers against board standards, predict academic success, and provide scientific stream counseling.</p>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q24: Detailed Comparative Exposition of Spearman's Rank Difference Method and Pearson's Product-Moment Method.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #FF007F;">I. Theoretical Paradigms:</b><br />
      Spearman's Rho (&rho;) is a non-parametric technique operating on ordinal rank orders, while Pearson's r is a parametric technique operating on continuous quantitative deviations from the mean.</p>

      <p><b style="color: #FF007F;">II. Comprehensive Comparison:</b><br />
      (1) <b style="color: #FF007F;">Mathematical Formulas:</b> Spearman: &rho; = 1 &minus; [ 6 &sum; D&sup2; / (N(N&sup2; &minus; 1)) ]. Pearson: r = &sum; xy / &radic;[ (&sum; x&sup2;) &times; (&sum; y&sup2;) ].<br />
      (2) <b style="color: #FF007F;">Sample Requirements:</b> Spearman is ideal for small samples (N &lt; 30); Pearson requires large normally distributed samples (N &gt; 30).<br />
      (3) <b style="color: #FF007F;">Suitability:</b> Spearman handles qualitative judgments (debate ranks, art contests, teacher ratings); Pearson handles continuous numerical test scores.<br />
      (4) <b style="color: #FF007F;">Precision:</b> Pearson is more sensitive and mathematically powerful; Spearman is faster but loses granular score distance information by reducing scores to ranks.</p>
    </div>
  </div>

  <!-- Q25 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #FF007F; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q25: Full Numerical Board Master Problem: Step-by-Step Computation and Interpretation of Spearman's Rank Correlation (&rho;).
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #FF007F;">Problem Statement:</b><br />
      Calculate the Spearman Rank Correlation Coefficient (&rho;) between scores obtained by 7 students in English (X) and Mathematics (Y), and interpret the result.</p>

      <div style="overflow-x: auto; margin: 10px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; color: #FFFFFF; text-align: center;">
          <thead>
            <tr style="background: rgba(255, 0, 127, 0.3); border-bottom: 2px solid #FF007F;">
              <th style="padding: 6px;">Student</th>
              <th style="padding: 6px;">English (X)</th>
              <th style="padding: 6px;">Maths (Y)</th>
              <th style="padding: 6px;">Rank X (R1)</th>
              <th style="padding: 6px;">Rank Y (R2)</th>
              <th style="padding: 6px;">D = R1 &minus; R2</th>
              <th style="padding: 6px;">D&sup2;</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>A</td><td>80</td><td>75</td><td>1</td><td>2</td><td>&minus;1</td><td>1</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>B</td><td>75</td><td>80</td><td>2</td><td>1</td><td>+1</td><td>1</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>C</td><td>70</td><td>65</td><td>3</td><td>4</td><td>&minus;1</td><td>1</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>D</td><td>65</td><td>70</td><td>4</td><td>3</td><td>+1</td><td>1</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>E</td><td>60</td><td>55</td><td>5</td><td>6</td><td>&minus;1</td><td>1</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>F</td><td>55</td><td>60</td><td>6</td><td>5</td><td>+1</td><td>1</td></tr>
            <tr><td>G</td><td>50</td><td>50</td><td>7</td><td>7</td><td>0</td><td>0</td></tr>
          </tbody>
        </table>
      </div>

      <p><b style="color: #FF007F;">Calculations:</b><br />
      &sum; D&sup2; = 1 + 1 + 1 + 1 + 1 + 1 + 0 = <b>6</b>. Total pairs N = <b>7</b>.<br />
      N(N&sup2; &minus; 1) = 7(49 &minus; 1) = 7 &times; 48 = <b>336</b>.<br />
      6 &times; &sum; D&sup2; = 6 &times; 6 = <b>36</b>.<br />
      &rho; = 1 &minus; [ 36 / 336 ] = 1 &minus; 0.107 = <b style="color: #FF80BF; font-size: 16px;">+0.893 &approx; +0.89</b>.</p>

      <p><b style="color: #FF007F;">Pedagogical Interpretation:</b><br />
      The obtained coefficient &rho; = +0.89 signifies a <b>very high positive correlation</b> between English and Mathematics achievement among these students. Students who rank high in English consistently rank high in Mathematics, indicating high generalized scholastic ability across both linguistic and mathematical domains.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS (INTERACTIVE)                         */
/* -------------------------------------------------------------------------- */

export const c12Edu7Mcqs = [
  {
    "id": "c12-edu-7-mcq-1",
    "question": "Who introduced the concept of Standard Deviation in statistical science in 1893?",
    "options": [
      "A):   Charles Spearman",
      "B):   Karl Pearson",
      "C):   Francis Galton",
      "D):   Lewis Terman"
    ],
    "correctAnswer": "b",
    "explanation": "Karl Pearson introduced the Standard Deviation in 1893 as the root-mean-square deviation from the arithmetic mean."
  },
  {
    "id": "c12-edu-7-mcq-2",
    "question": "What is the simplest and crudest measure of variability in statistics?",
    "options": [
      "A):   Range",
      "B):   Quartile Deviation",
      "C):   Mean Deviation",
      "D):   Standard Deviation"
    ],
    "correctAnswer": "a",
    "explanation": "The Range (Highest &minus; Lowest score) is the simplest, quickest, but crudest measure of dispersion."
  },
  {
    "id": "c12-edu-7-mcq-3",
    "question": "The formula for calculating Quartile Deviation (QD) is:",
    "options": [
      "A):   Q3 &minus; Q1",
      "B):   (Q3 + Q1) / 2",
      "C):   (Q3 &minus; Q1) / 2",
      "D):   (Q3 &times; Q1) / 2"
    ],
    "correctAnswer": "c",
    "explanation": "Quartile Deviation is half of the interquartile range: QD = (Q3 &minus; Q1) / 2."
  },
  {
    "id": "c12-edu-7-mcq-4",
    "question": "The permissible numerical range of the Coefficient of Correlation (r) is strictly between:",
    "options": [
      "A):   0.00 and +1.00",
      "B):   0.00 and +100.00",
      "C):   &minus;&infin; and +&infin;",
      "D):   &minus;1.00 and +1.00"
    ],
    "correctAnswer": "d",
    "explanation": "The correlation coefficient is mathematically bounded strictly between &minus;1.00 (perfect negative) and +1.00 (perfect positive)."
  },
  {
    "id": "c12-edu-7-mcq-5",
    "question": "Who developed the Rank Difference method of correlation in 1904?",
    "options": [
      "A):   Karl Pearson",
      "B):   Charles Spearman",
      "C):   B. F. Skinner",
      "D):   Edward Thorndike"
    ],
    "correctAnswer": "b",
    "explanation": "Charles Spearman developed the Rank Difference correlation method (&rho;) in 1904 for ordinal rank data."
  },
  {
    "id": "c12-edu-7-mcq-6",
    "question": "A correlation coefficient of r = 0.00 between shoe size and intelligence indicates:",
    "options": [
      "A):   Zero correlation (no linear relationship)",
      "B):   Perfect positive correlation",
      "C):   Severe negative correlation",
      "D):   Calculation error"
    ],
    "correctAnswer": "a",
    "explanation": "r = 0.00 denotes zero correlation, meaning no systematic linear association exists between the two variables."
  },
  {
    "id": "c12-edu-7-mcq-7",
    "question": "Which Greek letter is standardly used to designate the Standard Deviation of a distribution?",
    "options": [
      "A):   &alpha; (Alpha)",
      "B):   &beta; (Beta)",
      "C):   &theta; (Theta)",
      "D):   &sigma; (Sigma)"
    ],
    "correctAnswer": "d",
    "explanation": "The lowercase Greek letter &sigma; (Sigma) is universally used to denote Standard Deviation."
  },
  {
    "id": "c12-edu-7-mcq-8",
    "question": "What happens to the sum of deviations of all scores from their arithmetic mean (&sum; x) if algebraic signs are NOT ignored?",
    "options": [
      "A):   It equals the range",
      "B):   It equals the standard deviation",
      "C):   It always equals zero (&sum; x = 0)",
      "D):   It equals 100"
    ],
    "correctAnswer": "c",
    "explanation": "A fundamental mathematical property of the arithmetic mean is that the algebraic sum of deviations from it is always exactly zero."
  },
  {
    "id": "c12-edu-7-mcq-9",
    "question": "If an increase in study hours is accompanied by a systematic increase in test marks, the correlation is:",
    "options": [
      "A):   Negative",
      "B):   Positive",
      "C):   Zero",
      "D):   Spurious"
    ],
    "correctAnswer": "b",
    "explanation": "When both variables move in the same direction, the correlation is Positive."
  },
  {
    "id": "c12-edu-7-mcq-10",
    "question": "Which measure of dispersion is immune to extreme outlier scores because it considers only the middle 50% of the distribution?",
    "options": [
      "A):   Quartile Deviation",
      "B):   Range",
      "C):   Mean Deviation",
      "D):   Standard Deviation"
    ],
    "correctAnswer": "a",
    "explanation": "Quartile Deviation is computed between Q1 and Q3, ignoring the top 25% and bottom 25% outlier extremes."
  },
  {
    "id": "c12-edu-7-mcq-11",
    "question": "In an examination, the highest score is 95 and the lowest score is 35. What is the Range?",
    "options": [
      "A):   50",
      "B):   65",
      "C):   60",
      "D):   130"
    ],
    "correctAnswer": "c",
    "explanation": "Range = Highest &minus; Lowest = 95 &minus; 35 = 60."
  },
  {
    "id": "c12-edu-7-mcq-12",
    "question": "Why is the Standard Deviation considered mathematically superior to the Mean Deviation?",
    "options": [
      "A):   Because it ignores all negative signs arbitrarily",
      "B):   Because it is always equal to the Median",
      "C):   Because it does not require a Mean",
      "D):   Because it squares the deviations, resolving negative signs according to valid algebraic laws"
    ],
    "correctAnswer": "d",
    "explanation": "Standard Deviation squares the deviations ((&minus;x)&sup2; = +x&sup2;), resolving negative signs algebraically without arbitrary absolute-value omissions."
  },
  {
    "id": "c12-edu-7-mcq-13",
    "question": "When a psychologist correlates judges' rankings in an inter-school debate contest with N = 12, which correlation method is appropriate?",
    "options": [
      "A):   Spearman's Rank Difference Method",
      "B):   Pearson's Product-Moment Method",
      "C):   Quartile Deviation",
      "D):   Range analysis"
    ],
    "correctAnswer": "a",
    "explanation": "Spearman's Rank Difference method is specifically designed for ordinal ranks and small samples (N &lt; 30)."
  },
  {
    "id": "c12-edu-7-mcq-14",
    "question": "If the third quartile Q3 is 60 and the first quartile Q1 is 40, what is the Quartile Deviation (QD)?",
    "options": [
      "A):   20",
      "B):   10",
      "C):   50",
      "D):   100"
    ],
    "correctAnswer": "b",
    "explanation": "QD = (Q3 &minus; Q1) / 2 = (60 &minus; 40) / 2 = 20 / 2 = 10."
  },
  {
    "id": "c12-edu-7-mcq-15",
    "question": "In a perfectly normal distribution curve, approximately what percentage of student scores fall within Mean &plusmn; 1 Standard Deviation (&sigma;)?",
    "options": [
      "A):   50%",
      "B):   99.73%",
      "C):   95.44%",
      "D):   68.26%"
    ],
    "correctAnswer": "d",
    "explanation": "In a normal distribution, approximately 68.26% of all cases lie within 1 standard deviation on either side of the mean."
  },
  {
    "id": "c12-edu-7-mcq-16",
    "question": "If acute examination anxiety causes a severe drop in memory recall during a test, the correlation between anxiety and recall is:",
    "options": [
      "A):   Positive",
      "B):   Zero",
      "C):   Negative",
      "D):   Neutral"
    ],
    "correctAnswer": "c",
    "explanation": "When one variable increases (anxiety) while the other decreases (recall), the relationship is Negative."
  },
  {
    "id": "c12-edu-7-mcq-17",
    "question": "Two classroom sections have identical Mean marks of 65. Section X has &sigma; = 3.2, while Section Y has &sigma; = 14.8. What does this indicate?",
    "options": [
      "A):   Section Y is more homogeneous than Section X",
      "B):   Section X is far more homogeneous and uniform in performance than Section Y",
      "C):   Both sections have identical student scores",
      "D):   Section X has higher failure rate"
    ],
    "correctAnswer": "b",
    "explanation": "A smaller standard deviation indicates that student scores are tightly clustered around the mean (homogeneous)."
  },
  {
    "id": "c12-edu-7-mcq-18",
    "question": "What is the primary operational assumption required before using Pearson's Product-Moment correlation (r)?",
    "options": [
      "A):   Variables must be continuous, measured on an interval or ratio scale, and approximately normally distributed",
      "B):   Data must be in qualitative ordinal ranks",
      "C):   Sample size must be less than 5",
      "D):   Variables must have zero variance"
    ],
    "correctAnswer": "a",
    "explanation": "Pearson's r is a parametric measure requiring continuous interval/ratio score distributions and linear relationship."
  },
  {
    "id": "c12-edu-7-mcq-19",
    "question": "In Spearman's rank correlation formula, what does &sum; D&sup2; represent?",
    "options": [
      "A):   Sum of student roll numbers",
      "B):   Square root of the standard deviation",
      "C):   Total number of subjects",
      "D):   Sum of the squared differences between paired ranks"
    ],
    "correctAnswer": "d",
    "explanation": "&sum; D&sup2; represents the sum of the squared differences between the ranks assigned to each individual in the two variables (D = R1 &minus; R2)."
  },
  {
    "id": "c12-edu-7-mcq-20",
    "question": "If the ranks of 6 students in Physics and Chemistry are identical (1, 2, 3, 4, 5, 6 in both), what is the value of Spearman's &rho;?",
    "options": [
      "A):   0.00",
      "B):   &minus;1.00",
      "C):   +1.00",
      "D):   +0.50"
    ],
    "correctAnswer": "c",
    "explanation": "If ranks are identical, every D = 0, so &sum; D&sup2; = 0. Substituting in formula: &rho; = 1 &minus; 0 = +1.00 (perfect positive correlation)."
  },
  {
    "id": "c12-edu-7-mcq-21",
    "question": "A high school counselor correlates students' Class 10 science test scores with their subsequent Class 12 NEET entrance ranks and finds r = +0.82. How should this result be used?",
    "options": [
      "A):   To discourage all students from taking science",
      "B):   As a reliable predictive indicator for academic stream counseling and career prognosis",
      "C):   To cancel the board examinations",
      "D):   To force all students into arts"
    ],
    "correctAnswer": "b",
    "explanation": "A high positive correlation (+0.82) confirms strong predictive validity, making it a reliable tool for educational stream guidance."
  },
  {
    "id": "c12-edu-7-mcq-22",
    "question": "For a dataset with scores 5, 5, 5, 5, 5, what are the Mean and the Standard Deviation?",
    "options": [
      "A):   Mean = 5, &sigma; = 5",
      "B):   Mean = 25, &sigma; = 0",
      "C):   Mean = 0, &sigma; = 5",
      "D):   Mean = 5, &sigma; = 0"
    ],
    "correctAnswer": "d",
    "explanation": "When all scores in a distribution are identical, there is zero scatter; hence Mean = 5 and &sigma; = 0."
  },
  {
    "id": "c12-edu-7-mcq-23",
    "question": "Why is Quartile Deviation particularly recommended over Standard Deviation when analyzing income or wealth distributions of student families?",
    "options": [
      "A):   Because income distributions are heavily skewed with extreme billionaire outliers that artificially distort the mean and standard deviation",
      "B):   Because QD requires computers",
      "C):   Because income cannot be counted in numbers",
      "D):   Because standard deviation is only for physics"
    ],
    "correctAnswer": "a",
    "explanation": "Income and wealth data are notoriously skewed by extreme outliers; Quartile Deviation focuses on the middle 50%, remaining unaffected by extreme wealth."
  },
  {
    "id": "c12-edu-7-mcq-24",
    "question": "If a researcher obtains a correlation coefficient of r = +1.25 between motivation and memory recall, what must be concluded?",
    "options": [
      "A):   Motivation causes infinite memory",
      "B):   The result proves superior learning",
      "C):   A mathematical calculation error occurred, because r can never exceed +1.00",
      "D):   The test is 125% valid"
    ],
    "correctAnswer": "c",
    "explanation": "The correlation coefficient can NEVER exceed +1.00 or fall below &minus;1.00; any value like +1.25 indicates a calculation error."
  },
  {
    "id": "c12-edu-7-mcq-25",
    "question": "Which measure of variability should a curriculum committee use when standardizing a nationwide board examination paper?",
    "options": [
      "A):   Range",
      "B):   Standard Deviation",
      "C):   Quartile Deviation",
      "D):   Mode deviation"
    ],
    "correctAnswer": "b",
    "explanation": "Standard Deviation is the universally mandated measure for standardizing national examinations, scaling score distributions, and equating test forms."
  }
];
