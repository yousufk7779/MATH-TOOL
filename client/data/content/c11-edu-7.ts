// Class 11 Education Unit 7: Statistics and Education (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #FF007F (Neon Rose / Magenta Pink matching Chapter 7)

const themeColor = "#FF007F";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Edu7HtmlOverview = `
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
  <div style="background: rgba(255, 0, 127, 0.06); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">📊 Quick Glossary &amp; Core Statistical Concepts</h2>
    <p class="text-center" style="color: #FF80BF; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Unit 7: Statistics and Education (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Statistics:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The scientific body of mathematical methods employed for the collection, organization, summarization, graphical presentation, analysis, and meaningful interpretation of numerical data.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Educational Statistics:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The specialized branch of statistics that applies quantitative measurement and statistical tools to educational evaluation, test scores, pupil intelligence, academic achievement, and institutional planning (Garrett).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Frequency Distribution:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A systematic tabular arrangement of raw scores into non-overlapping groups or class intervals along with the corresponding frequency (number of occurrences) of students falling in each class.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Measures of Central Tendency:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Statistical averages (Mean, Median, Mode) that represent the central point or typical score around which all individual observations in a frequency distribution tend to cluster.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Ogive:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A cumulative frequency line graph (S-shaped curve) constructed using cumulative frequencies plotted against class boundaries, utilized specifically for locating the Median and percentiles graphically.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 7.1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7.1 Statistics: Meaning and significance in Education</h2>

  <p>In contemporary educational science, evaluation is no longer based on subjective teacher impressions or arbitrary guesswork. When hundreds of students sit for board examinations, psychological assessments, or aptitude evaluations, teachers and administrators are confronted with massive stacks of chaotic raw marks. Without mathematical reduction, these numbers remain unintelligible. Statistics is the scientific language through which raw figures are transformed into precise, meaningful, and actionable educational insights.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Etymology and Definitions of Statistics</h3>
  <p>The term <b style="color: ${themeColor};">"Statistics"</b> has its roots in several classical European languages, all reflecting statecraft and governance:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Latin word:</b> <i>Status</i> (meaning a political state or condition of affairs).</li>
    <li><b style="color: ${themeColor};">Italian word:</b> <i>Statista</i> (meaning a statesman or person skilled in state administration).</li>
    <li><b style="color: ${themeColor};">German word:</b> <i>Statistik</i> (first introduced by Gottfried Achenwall in 1749 to denote the comprehensive collection of state revenue, population, and military data).</li>
    <li><b style="color: ${themeColor};">French word:</b> <i>Statistique</i>.</li>
  </ul>

  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 18px 0;">
    <h4 style="color: ${themeColor}; margin: 0 0 8px 0;">📖 Two Broad Senses of Statistics:</h4>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: ${themeColor};">1. Statistics in the Plural Sense (Numerical Data):</b> According to <b>Horace Secrist</b>, <i>"By statistics we mean aggregates of facts affected to a marked extent by multiplicity of causes, numerically expressed, enumerated or estimated according to reasonable standards of accuracy, collected in a systematic manner for a predetermined purpose, and placed in relation to each other."</i>
    </p>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: ${themeColor};">2. Statistics in the Singular Sense (Statistical Science):</b> According to <b>Croxton and Cowden</b>, <i>"Statistics may be defined as the science of collection, presentation, analysis and interpretation of numerical data."</i>
    </p>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Educational Statistics (Garrett's Definition)</h3>
  <p>In pedagogical disciplines, <b>Henry E. Garrett</b> defined Educational Statistics as the indispensable mathematical methodology applied to psychology and education to interpret test results, measure mental traits, establish norms, and validate pedagogical research hypotheses.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Significance and Functions of Statistics in Education</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">1. Condensation and Simplification of Bulky Data:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        It condenses chaotic masses of scores of hundreds of pupils into a single concise frequency table, a histogram, or a single representative numerical value (such as the Mean mark of 68%).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">2. Accurate and Objective Comparison:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        It allows valid comparisons between individual students, between two sections of a class, across different academic years, or between distinct school districts using standardized percentiles and standard scores.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">3. Measuring Individual Differences:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Psychological variability in intelligence, mechanical aptitude, memory span, and reading speed can only be scientifically quantified and categorized (into gifted, average, or slow learners) through statistical standard deviations and normal probability curves.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">4. Prediction and Educational Prognosis:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        By establishing correlation coefficients between class 10 aptitude scores and higher secondary science success, educators can offer evidence-based career guidance.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">5. Construction and Standardization of Tests:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        No examination paper or psychometric test can be considered scientifically reliable or valid without item analysis, difficulty index calculation, and discrimination power evaluation computed via statistics.
      </p>
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Inherent Limitations of Statistics</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Deals only with Aggregates:</b> A single isolated mark (e.g., Rahul scored 72) has no statistical significance unless compared against the group distribution.</li>
    <li><b style="color: ${themeColor};">Restricted to Quantitative Phenomena:</b> Pure qualitative human qualities like empathy, artistic creativity, moral character, or spiritual dedication cannot be directly measured by statistics without psychometric scaling.</li>
    <li><b style="color: ${themeColor};">Statistical Truths are Probabilistic:</b> Laws of statistics are true only on the average and over large sample sizes; they do not apply uniformly to every individual case.</li>
    <li><b style="color: ${themeColor};">Prone to Deliberate Misuse:</b> In the hands of untrained or biased personnel, statistics can be manipulated to produce misleading claims (e.g., presenting selective percentages to mask institutional failure).</li>
  </ul>

  <!-- SECTION 7.2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">7.2 Graphical representation of Data: Histogram, Frequency polygon/ Ogive, Pie chart</h2>

  <p>While statistical frequency tables organize numerical data, human cognition processes visual images far faster than rows of numbers. Graphical representation translates abstract tables into clear geometrical patterns, instantly displaying central peaks, dispersion, symmetry, and skewness.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Fundamental Rules of Graphic Presentation</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Axes Allocation:</b> Independent variable (scores, class intervals, or test limits) is invariably plotted on the horizontal <b>X-axis (Abscissa)</b>; dependent variable (frequencies) is plotted on the vertical <b>Y-axis (Ordinate)</b>.</li>
    <li><b style="color: ${themeColor};">Scale Selection:</b> Scales should be chosen so that the entire graph fits harmoniously on the sheet. The conventional guideline (the <b>75% Rule</b>) states that the maximum vertical height of the curve should be approximately 75% of its total horizontal width.</li>
    <li><b style="color: ${themeColor};">False Base Line (Kink / Zig-zag line):</b> When class intervals start at a high score far above zero (e.g., 50-60), a small jagged break (&#8767;) is made near the origin to maintain proportionality.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Histogram (Column Diagram)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 12px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      A <b style="color: ${themeColor};">Histogram</b> is a two-dimensional bar graph composed of contiguous (adjoining) vertical rectangles erected on the exact continuous class boundaries of a frequency distribution. 
      <br/><br/>
      &bull; <b>Base of rectangle</b> = True class width (exact lower limit to exact upper limit, e.g., 19.5 to 29.5).
      <br/>
      &bull; <b>Height of rectangle</b> = Corresponding class frequency.
      <br/>
      &bull; <b>Continuous Nature:</b> Since class intervals are continuous, there is <b>zero gap</b> between adjacent rectangles. The total area enclosed by all bars is strictly proportional to the total frequency ($N$).
    </p>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Frequency Polygon</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 12px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      A <b style="color: ${themeColor};">Frequency Polygon</b> is a closed multi-segmented line graph constructed by plotting the class frequency directly against the exact <b>Midpoint (Mid-value, X)</b> of each class interval, and connecting adjacent plotted points with straight line segments.
      <br/><br/>
      &bull; <b>Closing the Polygon:</b> To make it a true closed geometrical polygon resting on the horizontal baseline, the two end-points are extended to the midpoints of the two immediate hypothetical adjacent class intervals (one below the lowest class and one above the highest class) where the frequency is strictly <b>zero</b>.
      <br/>
      &bull; <b>Equivalence with Histogram:</b> The total area under a frequency polygon is mathematically equal to the total area of the corresponding histogram.
    </p>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Ogive (Cumulative Frequency Curve)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 12px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      An <b style="color: ${themeColor};">Ogive</b> (pronounced <i>oh-jive</i>) is a smooth cumulative frequency curve shaped like an elongated S-curve.
      <br/><br/>
      &bull; <b>'Less than' Ogive:</b> Plotted by taking the <i>upper exact class limits</i> on the X-axis and the cumulative frequencies starting from the bottom class upwards on the Y-axis. The curve rises continuously from bottom-left to top-right.
      <br/>
      &bull; <b>'More than' Ogive:</b> Plotted by taking the <i>lower exact class limits</i> on the X-axis and cumulative frequencies counting downwards from top to bottom. The curve slopes downwards.
      <br/>
      &bull; <b style="color: ${themeColor};">Graphical Determination of Median:</b> If both curves are drawn on the same coordinate axes, the point of intersection projected vertically downward onto the horizontal X-axis gives the exact <b>Median</b> of the distribution! Alternatively, draw a horizontal line at N/2 on the Y-axis to meet the Ogive; dropping a perpendicular to the X-axis identifies the Median directly.
    </p>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(v) Pie Chart (Sector Diagram / Circle Graph)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 12px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      A <b style="color: ${themeColor};">Pie Chart</b> is a circular statistical diagram where a complete circle of 360&deg; is partitioned into radial sectors, each representing a distinct component category of the educational data.
      <br/><br/>
      &bull; <b>Central Angle Formula:</b> The angle subtended at the center by each category sector is calculated as:
      <div class="text-center" style="margin: 10px 0; font-weight: bold; color: ${themeColor}; font-size: 16px;">
        Sector Angle (&theta;) = (Class Frequency / Total N) &times; 360&deg;
      </div>
      &bull; <b>Educational Application:</b> Ideal for showing the proportion of school budgets allocated across salaries, infrastructure, laboratory equipment, and sports; or displaying student enrollment percentages across Science, Arts, Commerce, and Vocational streams.
    </p>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: GRAPHICAL REPRESENTATIONS OF DATA (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 520px;">
      <svg viewBox="0 0 500 320" style="width: 100%; max-width: 490px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- 4 Quadrant Grid -->
        <rect x="0" y="0" width="500" height="320" fill="#FFFDF8" rx="8" />
        <line x1="250" y1="10" x2="250" y2="310" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4,4" />
        <line x1="10" y1="160" x2="490" y2="160" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4,4" />

        <!-- Quadrant 1: Histogram (Top-Left) -->
        <g transform="translate(15, 15)">
          <text x="110" y="16" font-size="13" font-weight="bold" fill="#0F172A" text-anchor="middle">1. HISTOGRAM</text>
          <!-- Axes -->
          <line x1="25" y1="125" x2="215" y2="125" stroke="#334155" stroke-width="2" />
          <line x1="25" y1="25" x2="25" y2="125" stroke="#334155" stroke-width="2" />
          <!-- Continuous Bars -->
          <rect x="35" y="90" width="32" height="35" fill="#FF007F" opacity="0.85" stroke="#BE185D" stroke-width="1.5" />
          <rect x="67" y="60" width="32" height="65" fill="#FF007F" opacity="0.85" stroke="#BE185D" stroke-width="1.5" />
          <rect x="99" y="35" width="32" height="90" fill="#FF007F" opacity="0.85" stroke="#BE185D" stroke-width="1.5" />
          <rect x="131" y="55" width="32" height="70" fill="#FF007F" opacity="0.85" stroke="#BE185D" stroke-width="1.5" />
          <rect x="163" y="95" width="32" height="30" fill="#FF007F" opacity="0.85" stroke="#BE185D" stroke-width="1.5" />
          <text x="115" y="140" font-size="10" font-weight="600" fill="#64748B" text-anchor="middle">Class Boundaries &bull; No Gaps</text>
        </g>

        <!-- Quadrant 2: Frequency Polygon (Top-Right) -->
        <g transform="translate(265, 15)">
          <text x="110" y="16" font-size="13" font-weight="bold" fill="#0F172A" text-anchor="middle">2. FREQUENCY POLYGON</text>
          <!-- Axes -->
          <line x1="25" y1="125" x2="215" y2="125" stroke="#334155" stroke-width="2" />
          <line x1="25" y1="25" x2="25" y2="125" stroke="#334155" stroke-width="2" />
          <!-- Closed Polygon Line -->
          <polyline points="25,125 51,90 83,60 115,35 147,55 179,95 205,125" fill="rgba(37, 99, 235, 0.15)" stroke="#2563EB" stroke-width="2.5" />
          <!-- Midpoint Dots -->
          <circle cx="51" cy="90" r="3.5" fill="#2563EB" />
          <circle cx="83" cy="60" r="3.5" fill="#2563EB" />
          <circle cx="115" cy="35" r="3.5" fill="#2563EB" />
          <circle cx="147" cy="55" r="3.5" fill="#2563EB" />
          <circle cx="179" cy="95" r="3.5" fill="#2563EB" />
          <text x="115" y="140" font-size="10" font-weight="600" fill="#64748B" text-anchor="middle">Midpoints &bull; Closed Ends</text>
        </g>

        <!-- Quadrant 3: Ogive (Bottom-Left) -->
        <g transform="translate(15, 170)">
          <text x="110" y="16" font-size="13" font-weight="bold" fill="#0F172A" text-anchor="middle">3. OGIVE (CUMULATIVE CURVE)</text>
          <!-- Axes -->
          <line x1="25" y1="120" x2="215" y2="120" stroke="#334155" stroke-width="2" />
          <line x1="25" y1="20" x2="25" y2="120" stroke="#334155" stroke-width="2" />
          <!-- Less Than Ogive (Red Rose) -->
          <path d="M 35 115 Q 90 105 115 65 T 195 25" fill="none" stroke="#E11D48" stroke-width="2.5" />
          <!-- More Than Ogive (Emerald) -->
          <path d="M 35 25 Q 90 35 115 65 T 195 115" fill="none" stroke="#059669" stroke-width="2.5" />
          <!-- Median Intersection Point -->
          <circle cx="115" cy="65" r="4.5" fill="#7C3AED" stroke="#FFFFFF" stroke-width="1.5" />
          <line x1="115" y1="65" x2="115" y2="120" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="3,3" />
          <text x="115" y="133" font-size="10" font-weight="bold" fill="#7C3AED" text-anchor="middle">Median (Mdn)</text>
        </g>

        <!-- Quadrant 4: Pie Chart (Bottom-Right) -->
        <g transform="translate(265, 170)">
          <text x="110" y="16" font-size="13" font-weight="bold" fill="#0F172A" text-anchor="middle">4. PIE CHART (360&deg; SECTORS)</text>
          <!-- Circular Sectors -->
          <g transform="translate(115, 75)">
            <!-- Science: 144 deg (40%) -->
            <path d="M 0 0 L 0 -50 A 50 50 0 0 1 47.5 15.4 Z" fill="#FF007F" stroke="#FFFFFF" stroke-width="1.5" />
            <!-- Arts: 108 deg (30%) -->
            <path d="M 0 0 L 47.5 15.4 A 50 50 0 0 1 -29.4 40.4 Z" fill="#3B82F6" stroke="#FFFFFF" stroke-width="1.5" />
            <!-- Commerce: 72 deg (20%) -->
            <path d="M 0 0 L -29.4 40.4 A 50 50 0 0 1 -47.5 -15.4 Z" fill="#10B981" stroke="#FFFFFF" stroke-width="1.5" />
            <!-- Vocational: 36 deg (10%) -->
            <path d="M 0 0 L -47.5 -15.4 A 50 50 0 0 1 0 -50 Z" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
          </g>
          <text x="115" y="136" font-size="10" font-weight="600" fill="#64748B" text-anchor="middle">Angle = (f / N) &times; 360&deg;</text>
        </g>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 Graphical Representation Master Suite: Continuous Histogram, Closed Midpoint Frequency Polygon, Ogive Median Intersection, and Proportional 360&deg; Pie Chart
    </div>
  </div>

  <!-- SECTION 7.3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">7.3 Descriptive statistics: Measures of Central Tendency from grouped and ungrouped data (Mean, Median, Mode)</h2>

  <p>A <b style="color: ${themeColor};">Measure of Central Tendency</b> is a single representative value that describes the center or average of an entire frequency distribution. It captures the general level of performance of a class in one single score, around which other marks cluster. The three classic measures of central tendency are the <b>Arithmetic Mean</b>, the <b>Median</b>, and the <b>Mode</b>.</p>

  <!-- MEAN (ARITHMETIC AVERAGE) -->
  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Arithmetic Mean (&mu; or X&#772;)</h3>
  <p>The Arithmetic Mean is the sum of all individual scores divided by the total number of scores. It is the most sensitive, widely used, and mathematically stable measure of central tendency.</p>

  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <h4 style="color: ${themeColor}; margin: 0 0 8px 0;">📐 Formulas for Arithmetic Mean:</h4>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>1. Ungrouped Data:</b>
      <br/>
      X&#772; = (&sum; X) / N
      <br/>
      <span style="font-size: 14px; color: #CBD5E1;">Where &sum; X = Sum of all individual scores, and N = Total number of observations.</span>
    </p>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>2. Grouped Data &mdash; Direct Method:</b>
      <br/>
      X&#772; = (&sum; f X) / N
      <br/>
      <span style="font-size: 14px; color: #CBD5E1;">Where f = Class frequency, X = Midpoint of class interval, and N = &sum; f.</span>
    </p>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>3. Grouped Data &mdash; Assumed Mean (Step Deviation / Short-cut) Method:</b>
      <br/>
      X&#772; = AM + [(&sum; f d') / N] &times; i
      <br/>
      <span style="font-size: 14px; color: #CBD5E1;">Where AM = Assumed Mean (midpoint of central class), d' = (X - AM) / i (step-deviation in units of class interval), and i = Length/width of class interval.</span>
    </p>
  </div>

  <!-- WORKED EXAMPLE: MEAN -->
  <div style="background: rgba(0, 0, 0, 0.35); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 8px; padding: 14px 16px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 6px;">📝 Step-by-Step Worked Calculation: Mean (Grouped Data)</b>
    <p style="font-size: 14px; color: #E2E8F0; margin: 0 0 10px 0;">Calculate the Mean for the following test scores of 50 students:</p>
    
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13.5px; color: #FFFFFF;">
        <thead>
          <tr style="background: rgba(255, 0, 127, 0.2); border-bottom: 2px solid ${themeColor};">
            <th style="padding: 6px;">Class Interval</th>
            <th style="padding: 6px;">Midpoint (X)</th>
            <th style="padding: 6px;">Frequency (f)</th>
            <th style="padding: 6px;">d' = (X - 35)/10</th>
            <th style="padding: 6px;">f &times; d'</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>50 &ndash; 60</td><td>55</td><td>4</td><td>+2</td><td>+8</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>40 &ndash; 50</td><td>45</td><td>12</td><td>+1</td><td>+12</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255, 0, 127, 0.1);"><td style="font-weight: bold; color: ${themeColor};">30 &ndash; 40 (AM)</td><td>35</td><td>18</td><td>0</td><td>0</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>20 &ndash; 30</td><td>25</td><td>10</td><td>&minus;1</td><td>&minus;10</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>10 &ndash; 20</td><td>15</td><td>6</td><td>&minus;2</td><td>&minus;12</td></tr>
          <tr style="font-weight: bold; background: rgba(255,255,255,0.05);"><td colspan="2">Total</td><td>N = 50</td><td>&mdash;</td><td>&sum; f d' = &minus;2</td></tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 10px; font-size: 14.5px; color: #F1F5F9; line-height: 1.7;">
      <b>Calculation using Step-Deviation:</b><br/>
      X&#772; = AM + [(&sum; f d') / N] &times; i = 35 + [(-2) / 50] &times; 10 = 35 - 0.40 = <b>34.60</b>
    </div>
  </div>

  <!-- MEDIAN -->
  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Median (Mdn)</h3>
  <p>The Median is the positional average. It is the exact middle point of an array of scores ranked in ascending or descending order of magnitude, dividing the distribution into two equal halves (50% cases lie above and 50% lie below).</p>

  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <h4 style="color: ${themeColor}; margin: 0 0 8px 0;">📐 Formulas for Median:</h4>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>1. Ungrouped Data:</b> First rank the scores in serial order.
      <br/>
      &bull; If N is <b>odd</b>: Median = [(N + 1) / 2]-th score.
      <br/>
      &bull; If N is <b>even</b>: Median = Average of (N / 2)-th score and [(N / 2) + 1]-th score.
    </p>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>2. Grouped Data Formula:</b>
      <br/>
      Median = L + [((N / 2) - F) / f_m] &times; i
      <br/>
      <span style="font-size: 14px; color: #CBD5E1;">
        Where:
        <br/>&bull; L = Exact lower limit (boundary) of the median class.
        <br/>&bull; N = Total frequency (&sum; f), so N/2 is half of total cases.
        <br/>&bull; F = Total cumulative frequency of all classes preceding (below) the median class.
        <br/>&bull; f_m = Actual frequency of the median class.
        <br/>&bull; i = Length/width of the class interval.
      </span>
    </p>
  </div>

  <!-- WORKED EXAMPLE: MEDIAN -->
  <div style="background: rgba(0, 0, 0, 0.35); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 8px; padding: 14px 16px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 6px;">📝 Step-by-Step Worked Calculation: Median (Grouped Data)</b>
    <p style="font-size: 14px; color: #E2E8F0; margin: 0 0 10px 0;">Find the Median for N = 50 (from the previous distribution):</p>
    
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13.5px; color: #FFFFFF;">
        <thead>
          <tr style="background: rgba(255, 0, 127, 0.2); border-bottom: 2px solid ${themeColor};">
            <th style="padding: 6px;">Class Interval</th>
            <th style="padding: 6px;">Exact Limits</th>
            <th style="padding: 6px;">f</th>
            <th style="padding: 6px;">Cumulative Frequency (cf)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>50 &ndash; 60</td><td>49.5 &ndash; 59.5</td><td>4</td><td>50</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>40 &ndash; 50</td><td>39.5 &ndash; 49.5</td><td>12</td><td>46</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255, 0, 127, 0.1);"><td style="font-weight: bold; color: ${themeColor};">30 &ndash; 40 (Median Class)</td><td>29.5 &ndash; 39.5</td><td>18</td><td>34</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>20 &ndash; 30</td><td>19.5 &ndash; 29.5</td><td>10</td><td>16</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>10 &ndash; 20</td><td>9.5 &ndash; 19.5</td><td>6</td><td>6</td></tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 10px; font-size: 14.5px; color: #F1F5F9; line-height: 1.7;">
      <b>Step 1:</b> Find N/2 = 50 / 2 = 25.<br/>
      <b>Step 2:</b> Looking at cumulative frequencies from bottom up, 25 falls in class <b>30&ndash;40</b> (since cf reaches 16 in 20-30, and up to 34 in 30-40). Thus, Median class = 30&ndash;40.<br/>
      <b>Step 3:</b> L = 29.5, F = 16, f_m = 18, i = 10.<br/>
      Median = 29.5 + [(25 - 16) / 18] &times; 10 = 29.5 + (9 / 18) &times; 10 = 29.5 + 5.0 = <b>34.50</b>
    </div>
  </div>

  <!-- MODE -->
  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Mode (Mo)</h3>
  <p>The Mode is the most frequent or popular value in a distribution &mdash; the point on the score scale where frequencies reach their absolute maximum density.</p>

  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <h4 style="color: ${themeColor}; margin: 0 0 8px 0;">📐 Formulas for Mode:</h4>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>1. Ungrouped Data:</b> By simple inspection, the score that appears with the highest frequency. (e.g., in 12, 15, 15, 18, 15, 20 &rarr; Mode = 15).
    </p>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>2. Empirical Formula (Karl Pearson's Relationship):</b>
      <br/>
      Mode = 3Median - 2Mean
      <br/>
      <span style="font-size: 14px; color: #CBD5E1;">For our calculated sample: Mode = 3(34.50) - 2(34.60) = 103.50 - 69.20 = <b>34.30</b>.</span>
    </p>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>3. Grouped Data Interpolation Formula:</b>
      <br/>
      Mode = L + [(f_1 - f_0) / (2f_1 - f_0 - f_2)] &times; i
      <br/>
      <span style="font-size: 14px; color: #CBD5E1;">Where L = Lower limit of modal class, f_1 = Frequency of modal class, f_0 = Frequency of preceding class, and f_2 = Frequency of succeeding class.</span>
    </p>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 2: NORMAL VS SKEWED CURVES (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 500px;">
      <svg viewBox="0 0 460 250" style="width: 100%; max-width: 450px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="460" height="250" fill="#FFFDF8" rx="8" />

        <!-- Panel 1: Symmetrical Normal Distribution -->
        <g transform="translate(10, 15)">
          <text x="100" y="16" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">Symmetrical Curve</text>
          <!-- Bell Curve -->
          <path d="M 10 160 Q 60 160 85 90 Q 100 25 100 25 Q 100 25 115 90 Q 140 160 190 160" fill="rgba(255, 0, 127, 0.12)" stroke="#FF007F" stroke-width="2.5" />
          <line x1="5" y1="160" x2="195" y2="160" stroke="#334155" stroke-width="2" />
          <!-- Coincident Center Line -->
          <line x1="100" y1="25" x2="100" y2="160" stroke="#7C3AED" stroke-width="2" stroke-dasharray="3,3" />
          <text x="100" y="180" font-size="10.5" font-weight="bold" fill="#7C3AED" text-anchor="middle">Mean = Median = Mode</text>
          <text x="100" y="196" font-size="9.5" fill="#64748B" text-anchor="middle">Zero Skewness (Perfect Symmetry)</text>
        </g>

        <!-- Panel 2: Positively Skewed Distribution -->
        <g transform="translate(240, 15)">
          <text x="100" y="16" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">Positively Skewed Curve</text>
          <!-- Skewed Curve (Peak on Left, Long Tail on Right) -->
          <path d="M 10 160 Q 35 155 55 40 Q 65 30 75 45 Q 110 120 190 160" fill="rgba(37, 99, 235, 0.12)" stroke="#2563EB" stroke-width="2.5" />
          <line x1="5" y1="160" x2="195" y2="160" stroke="#334155" stroke-width="2" />
          
          <!-- Mode (Peak) -->
          <line x1="62" y1="35" x2="62" y2="160" stroke="#E11D48" stroke-width="1.8" />
          <text x="62" y="174" font-size="9" font-weight="bold" fill="#E11D48" text-anchor="middle">Mo</text>

          <!-- Median (Middle) -->
          <line x1="82" y1="70" x2="82" y2="160" stroke="#059669" stroke-width="1.8" stroke-dasharray="2,2" />
          <text x="82" y="174" font-size="9" font-weight="bold" fill="#059669" text-anchor="middle">Mdn</text>

          <!-- Mean (Pulled to Tail) -->
          <line x1="105" y1="110" x2="105" y2="160" stroke="#2563EB" stroke-width="1.8" stroke-dasharray="3,3" />
          <text x="105" y="174" font-size="9" font-weight="bold" fill="#2563EB" text-anchor="middle">Mean</text>

          <text x="100" y="196" font-size="10" font-weight="bold" fill="#0F172A" text-anchor="middle">Mode &lt; Median &lt; Mean</text>
          <text x="100" y="210" font-size="9" fill="#64748B" text-anchor="middle">(Mean pulled by high outliers)</text>
        </g>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 Relative Positions of Averages: In a Normal Distribution, Mean, Median &amp; Mode coincide. In Positively Skewed distributions (tough exam), Mean is pulled farthest towards the high tail!
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 3: DECISION FLOWCHART: WHEN TO USE MEAN VS MEDIAN VS MODE -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 440px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Root Node -->
        <rect x="130" y="12" width="180" height="32" rx="6" fill="#0F172A" />
        <text x="220" y="32" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Educational Data Goal</text>

        <!-- Branch Lines -->
        <line x1="220" y1="44" x2="220" y2="70" stroke="#475569" stroke-width="2" />
        <line x1="70" y1="70" x2="370" y2="70" stroke="#475569" stroke-width="2" />
        <line x1="70" y1="70" x2="70" y2="95" stroke="#475569" stroke-width="2" />
        <line x1="220" y1="70" x2="220" y2="95" stroke="#475569" stroke-width="2" />
        <line x1="370" y1="70" x2="370" y2="95" stroke="#475569" stroke-width="2" />

        <!-- 3 Intermediate Criteria Boxes -->
        <!-- Left: Mean -->
        <rect x="10" y="95" width="120" height="42" rx="6" fill="#FCE7F3" stroke="#FF007F" stroke-width="1.5" />
        <text x="70" y="112" font-size="10.5" font-weight="bold" fill="#9D174D" text-anchor="middle">Normal Data</text>
        <text x="70" y="127" font-size="9.5" fill="#475569" text-anchor="middle">No extreme outliers</text>

        <!-- Center: Median -->
        <rect x="160" y="95" width="120" height="42" rx="6" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.5" />
        <text x="220" y="112" font-size="10.5" font-weight="bold" fill="#0369A1" text-anchor="middle">Skewed / Outliers</text>
        <text x="220" y="127" font-size="9.5" fill="#475569" text-anchor="middle">Open-ended classes</text>

        <!-- Right: Mode -->
        <rect x="310" y="95" width="120" height="42" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5" />
        <text x="370" y="112" font-size="10.5" font-weight="bold" fill="#B45309" text-anchor="middle">Nominal / Popular</text>
        <text x="370" y="127" font-size="9.5" fill="#475569" text-anchor="middle">Most frequent choice</text>

        <!-- Connecting Lines to Actions -->
        <line x1="70" y1="137" x2="70" y2="160" stroke="#475569" stroke-width="1.5" />
        <line x1="220" y1="137" x2="220" y2="160" stroke="#475569" stroke-width="1.5" />
        <line x1="370" y1="137" x2="370" y2="160" stroke="#475569" stroke-width="1.5" />

        <!-- 3 Result Action Pills -->
        <rect x="15" y="160" width="110" height="45" rx="20" fill="#FF007F" />
        <text x="70" y="182" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">USE MEAN</text>
        <text x="70" y="196" font-size="9.5" fill="#FCE7F3" text-anchor="middle">(Algebraic Centroid)</text>

        <rect x="165" y="160" width="110" height="45" rx="20" fill="#0284C7" />
        <text x="220" y="182" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">USE MEDIAN</text>
        <text x="220" y="196" font-size="9.5" fill="#E0F2FE" text-anchor="middle">(Positional 50%)</text>

        <rect x="315" y="160" width="110" height="45" rx="20" fill="#D97706" />
        <text x="370" y="182" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">USE MODE</text>
        <text x="370" y="196" font-size="9.5" fill="#FEF3C7" text-anchor="middle">(Modal Peak)</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 Decision Flowchart: How educational researchers choose the ideal measure of central tendency based on distribution shape, presence of extreme outliers, and measurement scale.
    </div>
  </div>

  <!-- COMPARATIVE EVALUATION MATRIX: MEAN VS MEDIAN VS MODE -->
  <h3 style="color: ${themeColor}; margin-top: 28px;">(iv) Comparative Analysis: Mean vs Median vs Mode</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px; margin: 16px 0; overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; color: #FFFFFF;">
      <thead>
        <tr style="background: rgba(255, 0, 127, 0.25); border-bottom: 2px solid ${themeColor};">
          <th style="padding: 10px; width: 22%;">Dimension</th>
          <th style="padding: 10px; width: 26%;">Arithmetic Mean (X&#772;)</th>
          <th style="padding: 10px; width: 26%;">Median (Mdn)</th>
          <th style="padding: 10px; width: 26%;">Mode (Mo)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 9px; font-weight: bold; color: ${themeColor};">Nature</td>
          <td style="padding: 9px;">Mathematical / Algebraic average.</td>
          <td style="padding: 9px;">Positional average (50th percentile).</td>
          <td style="padding: 9px;">Inspectional / Density average.</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
          <td style="padding: 9px; font-weight: bold; color: ${themeColor};">Sensitivity to Outliers</td>
          <td style="padding: 9px; color: #F87171;">Highly sensitive; violently distorted by one freak score.</td>
          <td style="padding: 9px; color: #4ADE80;">Completely immune to extreme high/low marks.</td>
          <td style="padding: 9px; color: #4ADE80;">Unaffected by extreme values.</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 9px; font-weight: bold; color: ${themeColor};">Based on All Scores?</td>
          <td style="padding: 9px;">Yes, every single score enters calculation.</td>
          <td style="padding: 9px;">No, depends only on ranks and middle count.</td>
          <td style="padding: 9px;">No, depends only on the single peak class.</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
          <td style="padding: 9px; font-weight: bold; color: ${themeColor};">Open-Ended Intervals</td>
          <td style="padding: 9px;">Cannot be calculated without arbitrary limits.</td>
          <td style="padding: 9px;">Easily calculated without assuming limits.</td>
          <td style="padding: 9px;">Easily calculated if modal class is closed.</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 9px; font-weight: bold; color: ${themeColor};">Algebraic Treatment</td>
          <td style="padding: 9px;">Ideal for advanced analysis (SD, ANOVA, correlation).</td>
          <td style="padding: 9px;">Not amenable to further algebraic operations.</td>
          <td style="padding: 9px;">Unsuitable for further mathematical expansion.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 9px; font-weight: bold; color: ${themeColor};">Graphical Finding</td>
          <td style="padding: 9px;">Cannot be determined from a graph directly.</td>
          <td style="padding: 9px; color: #38BDF8;">Readily determined via Ogive curves.</td>
          <td style="padding: 9px; color: #38BDF8;">Readily determined from a Histogram.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- MASTER FORMULA REVISION CHEAT SHEET -->
  <div style="background: rgba(255, 0, 127, 0.08); border: 2px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px;">
    <h3 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">⚡ Master Formula Revision Cheat Sheet</h3>
    <p class="text-center" style="color: #FF80BF; margin: 0 0 16px 0; font-size: 13.5px;">All Mathematical Equations for Unit 7: Statistics and Education</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
      <div style="background: rgba(0,0,0,0.3); padding: 12px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor}; font-size: 14px;">Arithmetic Mean (Ungrouped):</b>
        <div style="color: #FFFFFF; font-size: 15px; margin-top: 4px; font-weight: 600;">X&#772; = (&sum; X) / N</div>
      </div>

      <div style="background: rgba(0,0,0,0.3); padding: 12px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor}; font-size: 14px;">Mean (Grouped Direct):</b>
        <div style="color: #FFFFFF; font-size: 15px; margin-top: 4px; font-weight: 600;">X&#772; = (&sum; f X) / N</div>
      </div>

      <div style="background: rgba(0,0,0,0.3); padding: 12px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor}; font-size: 14px;">Mean (Assumed / Step-Deviation):</b>
        <div style="color: #FFFFFF; font-size: 15px; margin-top: 4px; font-weight: 600;">X&#772; = AM + [(&sum; f d') / N] &times; i</div>
      </div>

      <div style="background: rgba(0,0,0,0.3); padding: 12px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor}; font-size: 14px;">Median (Grouped Data):</b>
        <div style="color: #FFFFFF; font-size: 15px; margin-top: 4px; font-weight: 600;">Median = L + [((N / 2) - F) / f_m] &times; i</div>
      </div>

      <div style="background: rgba(0,0,0,0.3); padding: 12px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor}; font-size: 14px;">Mode (Grouped Interpolation):</b>
        <div style="color: #FFFFFF; font-size: 15px; margin-top: 4px; font-weight: 600;">Mode = L + [(f_1 - f_0) / (2f_1 - f_0 - f_2)] &times; i</div>
      </div>

      <div style="background: rgba(0,0,0,0.3); padding: 12px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor}; font-size: 14px;">Karl Pearson's Empirical Mode:</b>
        <div style="color: #FFFFFF; font-size: 15px; margin-top: 4px; font-weight: 600;">Mode = 3Median - 2Mean</div>
      </div>

      <div style="background: rgba(0,0,0,0.3); padding: 12px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor}; font-size: 14px;">Pie Chart Sector Central Angle:</b>
        <div style="color: #FFFFFF; font-size: 15px; margin-top: 4px; font-weight: 600;">&theta; = (f / N) &times; 360&deg;</div>
      </div>

      <div style="background: rgba(0,0,0,0.3); padding: 12px 14px; border-radius: 8px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor}; font-size: 14px;">Midpoint (Mid-value of Class):</b>
        <div style="color: #FFFFFF; font-size: 15px; margin-top: 4px; font-weight: 600;">X = (Lower Limit + Upper Limit) / 2</div>
      </div>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: Q & A (SOLUTIONS)                          */
/* -------------------------------------------------------------------------- */

export const c11Edu7HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(255, 0, 127, 0.08); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
    <h3 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 18px; font-weight: bold;">🎯 Golden 25 Board Examination Q &amp; A Blueprint</h3>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">
      Unit 7: Statistics and Education (10 Marks) &bull; Strictly 12 VSAT (1 &amp; 2 Marks), 8 SAT (4 Marks), and 5 LAT (6 Marks).
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER TYPE (1 & 2 MARKS) - 12 QUESTIONS          -->
  <!-- ======================================================================== -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">
    Section A: Very Short Answer Questions (1 &amp; 2 Marks)
  </h2>

  <!-- Q1 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q1: From which European root words is the term 'Statistics' derived?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The word <b style="color: ${themeColor};">"Statistics"</b> is derived from the Latin word <i>'Status'</i>, the Italian word <i>'Statista'</i>, the German word <i>'Statistik'</i>, and the French word <i>'Statistique'</i>, all fundamentally meaning a political state or governmental affairs.
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q2: Define Educational Statistics according to Henry E. Garrett.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      According to <b style="color: ${themeColor};">Garrett</b>, Educational Statistics is the specialized branch of statistical science that deals with the collection, analysis, and interpretation of mental and educational measurements, test scores, and research data in educational psychology and pedagogy.
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q3: Differentiate between grouped data and ungrouped data.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: ${themeColor};">Ungrouped data</b> is raw, unorganized marks recorded individually for each student (e.g., 15, 22, 18, 29). <b style="color: ${themeColor};">Grouped data</b> is organized systematically into condensed class intervals with corresponding frequencies (e.g., marks 10&ndash;20: 5 students).
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q4: What is a Histogram?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      A <b style="color: ${themeColor};">Histogram</b> is a two-dimensional bar diagram constructed on exact class boundaries where continuous rectangular columns are erected with class widths as bases and frequencies as heights, with zero gap between adjoining rectangles.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q5: Why is a Frequency Polygon closed at both extreme ends?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      A frequency polygon is extended to hypothetical midpoints of zero-frequency class intervals at both ends so that it forms a complete, closed geometrical figure resting on the horizontal baseline, making its total area mathematically equal to the area of the histogram.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q6: State the mathematical formula to find the sector angle in a Pie Chart.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The central angle (&theta;) of any component sector in a Pie Chart is given by:
      <br/>
      <b style="color: ${themeColor};">&theta; = [(Frequency of Category, f) / (Total Frequency, N)] &times; 360&deg;</b>.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q7: What is an Ogive, and how is it used to locate the Median graphically?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      An <b style="color: ${themeColor};">Ogive</b> is a cumulative frequency line curve. The Median is located graphically either at the horizontal coordinate where a line from N/2 on the vertical axis intersects the Ogive, or at the intersection point of the 'Less than' and 'More than' Ogives dropped down to the X-axis.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q8: Define Arithmetic Mean and state its formula for ungrouped data.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: ${themeColor};">Arithmetic Mean</b> is the sum of all numerical values in a dataset divided by the total number of items:
      <br/>
      <b style="color: ${themeColor};">X&#772; = (&sum; X) / N</b>, where &sum; X is the sum of raw scores and N is the total number of pupils.
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q9: Define Median and state its formula for grouped frequency distributions.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: ${themeColor};">Median</b> is the exact central score dividing an ordered distribution into two equal halves. For grouped data:
      <br/>
      <b style="color: ${themeColor};">Median = L + [((N / 2) - F) / f_m] &times; i</b>, where L is lower limit of median class, F is cumulative frequency below median class, and f_m is median class frequency.
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q10: State Karl Pearson's empirical formula connecting Mean, Median, and Mode.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      In moderately asymmetrical distributions, the relationship is given by:
      <br/>
      <b style="color: ${themeColor};">Mode = 3Median - 2Mean</b>.
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q11: In an examination, the Mean marks is 48 and the Median is 45. Calculate the Mode.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      Using the empirical formula:
      <br/>
      Mode = 3Median - 2Mean = 3(45) - 2(48) = 135 - 96 = <b>39</b>.
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q12: Why is the Median preferred over the Mean when extreme scores (outliers) are present?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      Because the Mean is sensitive to every numerical score, a single extremely high or zero mark will violently distort it. The <b style="color: ${themeColor};">Median</b> depends purely on the central rank order and remains completely unaffected by extreme outliers.
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER TYPE (4 MARKS) - 8 QUESTIONS                     -->
  <!-- ======================================================================== -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    Section B: Short Answer Questions (4 Marks)
  </h2>

  <!-- Q13 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q13: Explain four major importances of Statistics in the field of education.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Precise Evaluation of Student Learning:</b> Replaces vague subjective labels like 'good' or 'poor' with scientific metrics such as percentile ranks and standardized test marks.</li>
      <li><b style="color: ${themeColor};">2. Meaningful Data Condensation:</b> Summarizes hundreds of chaotic examination marks into a single understandable frequency table and central average (Mean).</li>
      <li><b style="color: ${themeColor};">3. Identifying Individual Differences:</b> Allows schools to detect gifted students, average learners, and learning-disabled children through standard deviation and normal curve plotting.</li>
      <li><b style="color: ${themeColor};">4. Standardizing Psychological Tests:</b> Essential for calculating item difficulty index, test reliability, and criterion validity of board question papers and psychometric tools.</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q14: Distinguish between a Histogram and a Frequency Polygon with four points of difference.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Geometric Form:</b> A Histogram is a series of adjoining rectangular vertical columns; a Frequency Polygon is a multi-sided closed line graph.</li>
      <li><b style="color: ${themeColor};">2. Plotting Basis:</b> Rectangles in a Histogram are erected on true <i>exact class boundaries</i>; points in a Frequency Polygon are plotted over <i>class midpoints</i>.</li>
      <li><b style="color: ${themeColor};">3. Continuity:</b> In a Histogram, columns stand edge-to-edge with no gaps; a Frequency Polygon must be deliberately closed by connecting to hypothetical zero-frequency intervals at both ends.</li>
      <li><b style="color: ${themeColor};">4. Multiple Comparisons:</b> Two or more distributions cannot be overlaid clearly on a single Histogram; however, multiple Frequency Polygons can easily be drawn on the same coordinate axes to compare multiple class sections.</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q15: Explain the construction and educational uses of an Ogive curve.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Construction Principle:</b> Cumulative frequencies are computed (either 'less than' or 'more than'). In a 'Less than' Ogive, cumulative counts are plotted against exact upper class limits and joined in a smooth S-shaped curve.</li>
      <li><b style="color: ${themeColor};">2. Direct Graphical Median:</b> Locating N/2 on the vertical axis and reading the corresponding horizontal coordinate provides the exact Median without computing complex interpolation formulas.</li>
      <li><b style="color: ${themeColor};">3. Determination of Quartiles and Percentiles:</b> Readily identifies Q_1 (at N/4), Q_3 (at 3N/4), and deciles to categorize top 10% merit students for scholarships.</li>
      <li><b style="color: ${themeColor};">4. Evaluating Class Pass Percentages:</b> Allows teachers to visually determine what percentage of pupils scored above any specific cut-off mark (e.g., marks &ge; 40).</li>
    </ul>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q16: Calculate the Arithmetic Mean from the following ungrouped scores of 10 students: 18, 22, 25, 30, 15, 28, 35, 20, 32, 25.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <b style="color: ${themeColor};">Step 1: Formula:</b> X&#772; = (&sum; X) / N.<br/>
      <b style="color: ${themeColor};">Step 2: Sum of scores (&sum; X):</b><br/>
      &sum; X = 18 + 22 + 25 + 30 + 15 + 28 + 35 + 20 + 32 + 25 = 250.<br/>
      <b style="color: ${themeColor};">Step 3: Total number of observations (N):</b> N = 10.<br/>
      <b style="color: ${themeColor};">Step 4: Calculation:</b><br/>
      X&#772; = 250 / 10 = <b>25.0</b>.<br/>
      <span style="color: #4ADE80; font-weight: bold;">Answer: The Arithmetic Mean score is 25.</span>
    </div>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q17: Calculate the Median from the following test marks: 12, 18, 25, 14, 30, 22, 28, 35, 20.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <b style="color: ${themeColor};">Step 1: Arrange scores in ascending order:</b><br/>
      12, 14, 18, 20, 22, 25, 28, 30, 35.<br/>
      <b style="color: ${themeColor};">Step 2: Identify total number of scores (N):</b><br/>
      Here, N = 9 (which is an <b>odd number</b>).<br/>
      <b style="color: ${themeColor};">Step 3: Positional Formula:</b><br/>
      Median = [(N + 1) / 2]-th score = [(9 + 1) / 2]-th score = 5th score.<br/>
      <b style="color: ${themeColor};">Step 4: Identify 5th score in the ranked series:</b><br/>
      1st=12, 2nd=14, 3rd=18, 4th=20, <b>5th=22</b>.<br/>
      <span style="color: #4ADE80; font-weight: bold;">Answer: The Median mark is 22.</span>
    </div>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q18: State four merits and four demerits of Arithmetic Mean.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">Merit 1 (Rigidly Defined):</b> Defined by a strict mathematical formula that yields a single unambiguous result.</li>
      <li><b style="color: ${themeColor};">Merit 2 (Based on All Observations):</b> Utilizes every single score in the dataset, making it highly representative.</li>
      <li><b style="color: ${themeColor};">Merit 3 (Algebraic Stability):</b> Highly amenable to further algebraic manipulation such as standard deviations, correlations, and ANOVA.</li>
      <li><b style="color: ${themeColor};">Merit 4 (Sampling Reliability):</b> Fluctuates the least under repeated random samplings from the same population.</li>
      <li><b style="color: #F87171;">Demerit 1 (Outlier Vulnerability):</b> Severely influenced by extreme values; a single extreme score can distort the entire average.</li>
      <li><b style="color: #F87171;">Demerit 2 (Cannot Handle Open-Ended Classes):</b> Cannot be calculated if intervals are 'Below 20' or 'Above 80' without guessing boundaries.</li>
      <li><b style="color: #F87171;">Demerit 3 (Misleading Impressions):</b> Can produce hypothetical values that do not correspond to any real student score (e.g., 24.7 marks).</li>
      <li><b style="color: #F87171;">Demerit 4 (Non-Graphical):</b> Cannot be directly inspected or pinpointed from a graph.</li>
    </ul>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q19: Explain the concept of Mode. State two practical educational applications.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Core Concept:</b> The Mode is the score that occurs with the maximum frequency in a distribution &mdash; the point of greatest concentration or popularity.</li>
      <li><b style="color: ${themeColor};">2. Grouped Calculation:</b> Found by locating the modal class (class with highest frequency) and applying interpolation: Mode = L + [(f_1 - f_0) / (2f_1 - f_0 - f_2)] &times; i.</li>
      <li><b style="color: ${themeColor};">3. Application in School Uniforms &amp; Books:</b> Used by school administrations to order uniform sizes, desks, or textbooks based on the most common student measurements.</li>
      <li><b style="color: ${themeColor};">4. Evaluating Common Student Errors:</b> Identifies the most frequent misconception or error committed by students in a multiple-choice examination.</li>
    </ul>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q20: Under what specific conditions should an educator choose Mean, Median, or Mode?</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Choose Mean:</b> When the score distribution is reasonably symmetrical, scores are interval/ratio data, and further advanced statistical analysis (like SD or correlation) is planned.</li>
      <li><b style="color: ${themeColor};">2. Choose Median:</b> When the distribution is highly skewed, contains extreme outliers (very high or very low scores), or contains open-ended classes (e.g., 'Above 90').</li>
      <li><b style="color: ${themeColor};">3. Choose Median for Ordinal Data:</b> When evaluating ranked qualitative attributes like ranking in poetry, discipline, or painting contests.</li>
      <li><b style="color: ${themeColor};">4. Choose Mode:</b> When the quickest estimate of central tendency is needed by simple inspection, or when identifying the most popular choice in categorical surveys.</li>
    </ul>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION C: LONG ANSWER TYPE (6 MARKS) - 5 QUESTIONS                      -->
  <!-- ======================================================================== -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    Section C: Long Answer Questions (6 Marks)
  </h2>

  <!-- Q21 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q21: What is Statistics? Discuss in detail its significance, functions, and limitations in education.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p><b style="color: ${themeColor};">1. Introduction &amp; Concept:</b><br/>
      Statistics is the science that deals with the collection, presentation, analysis, and interpretation of quantitative educational facts. In modern schools, teachers assess cognitive, affective, and psychomotor development across large student cohorts. Statistics transforms these raw examination figures into meaningful summaries.</p>

      <p><b style="color: ${themeColor};">2. Five Core Functions in Education:</b></p>
      <ul style="padding-left: 20px;">
        <li><b style="color: ${themeColor};">(a) Summarization:</b> Condenses bulky mark sheets into single figures like Mean or Median.</li>
        <li><b style="color: ${themeColor};">(b) Scientific Comparison:</b> Enables relative grading by comparing an individual's score to the group mean via percentile ranks.</li>
        <li><b style="color: ${themeColor};">(c) Test Standardization:</b> Crucial for establishing item difficulty, discrimination index, and reliability in state board examinations.</li>
        <li><b style="color: ${themeColor};">(d) Educational Planning:</b> Guides state education departments in projecting future enrollment, teacher requirements, and budget allocations.</li>
        <li><b style="color: ${themeColor};">(e) Educational Research:</b> Tests educational hypotheses, such as verifying whether digital smart boards significantly improve science comprehension over traditional lecturing.</li>
      </ul>

      <p><b style="color: ${themeColor};">3. Key Limitations:</b><br/>
      Despite its immense utility, statistics deals strictly with group aggregates rather than isolated individuals; it cannot measure pure qualitative virtues like honesty or artistic creativity without psychometric conversion; its laws hold true only on the average; and it can be misused if applied by untrained hands.</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q22: Explain the four major graphical representations of educational data (Histogram, Frequency Polygon, Ogive, Pie Chart) and their relative advantages.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p><b style="color: ${themeColor};">1. Introduction:</b><br/>
      Graphical presentation is a visual method of communicating statistical tables. Graphs possess instant visual appeal, facilitate rapid comprehension, and reveal the underlying shape of score distributions.</p>

      <p><b style="color: ${themeColor};">2. Detailed Examination of the Four Graphs:</b></p>
      <ul style="padding-left: 20px;">
        <li><b style="color: ${themeColor};">(a) Histogram:</b> Built using adjacent vertical columns erected on continuous class boundaries. Advantage: Clearly displays density of scores across intervals and allows visual determination of Mode.</li>
        <li><b style="color: ${themeColor};">(b) Frequency Polygon:</b> Constructed by joining class frequencies plotted over midpoints, closed at both ends by extending to zero-frequency intervals. Advantage: Ideal for overlaying multiple curves to compare multiple class sections.</li>
        <li><b style="color: ${themeColor};">(c) Ogive (Cumulative Frequency Curve):</b> S-shaped curve plotted using cumulative frequencies against class limits. Advantage: Specifically utilized for finding the Median, Quartiles, and percentiles directly from the graph.</li>
        <li><b style="color: ${themeColor};">(d) Pie Chart:</b> Circular chart partitioned into radial sectors where each angle equals (f / N) &times; 360&deg;. Advantage: Outstanding for illustrating proportional budget breakdowns or stream-wise enrollment percentages.</li>
      </ul>

      <p><b style="color: ${themeColor};">3. Conclusion:</b><br/>
      Each graphical method serves a specialized pedagogical role: histograms for score concentration, polygons for group comparisons, ogives for positional cut-offs, and pie charts for categorical proportions.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q23: Calculate the Arithmetic Mean (using both Direct and Step-Deviation methods) for the following frequency distribution:</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p style="margin-bottom: 10px;">Scores: 10&ndash;20 (f=5), 20&ndash;30 (f=8), 30&ndash;40 (f=15), 40&ndash;50 (f=12), 50&ndash;60 (f=6), 60&ndash;70 (f=4). Total N = 50.</p>
      
      <div style="overflow-x: auto; margin-bottom: 12px;">
        <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13.5px;">
          <tr style="background: rgba(255, 0, 127, 0.2); border-bottom: 2px solid ${themeColor};">
            <th style="padding: 6px;">Class Interval</th><th>f</th><th>Midpoint (X)</th><th>f &times; X</th><th>d'=(X-35)/10</th><th>f &times; d'</th>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>10 &ndash; 20</td><td>5</td><td>15</td><td>75</td><td>&minus;2</td><td>&minus;10</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>20 &ndash; 30</td><td>8</td><td>25</td><td>200</td><td>&minus;1</td><td>&minus;8</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255, 0, 127, 0.1);"><td>30 &ndash; 40 (AM)</td><td>15</td><td>35</td><td>525</td><td>0</td><td>0</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>40 &ndash; 50</td><td>12</td><td>45</td><td>540</td><td>+1</td><td>+12</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>50 &ndash; 60</td><td>6</td><td>55</td><td>330</td><td>+2</td><td>+12</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>60 &ndash; 70</td><td>4</td><td>65</td><td>260</td><td>+3</td><td>+12</td></tr>
          <tr style="font-weight: bold; background: rgba(255,255,255,0.05);"><td colspan="2">Total: N = 50</td><td>&mdash;</td><td>&sum; fX = 1930</td><td>&mdash;</td><td>&sum; fd' = +18</td></tr>
        </table>
      </div>

      <p><b style="color: ${themeColor};">Method 1 (Direct Method):</b><br/>
      X&#772; = (&sum; f X) / N = 1930 / 50 = <b>38.60</b>.</p>

      <p><b style="color: ${themeColor};">Method 2 (Step-Deviation Method):</b><br/>
      Let Assumed Mean AM = 35, class width i = 10.<br/>
      X&#772; = AM + [(&sum; f d') / N] &times; i = 35 + (18 / 50) &times; 10 = 35 + 3.60 = <b>38.60</b>.</p>
      
      <p style="color: #4ADE80; font-weight: bold;">Both methods yield identical Mean = 38.60.</p>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q24: Calculate the Median for the following frequency distribution of examination marks:</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p style="margin-bottom: 10px;">Scores: 0&ndash;10 (f=4), 10&ndash;20 (f=7), 20&ndash;30 (f=12), 30&ndash;40 (f=10), 40&ndash;50 (f=5), 50&ndash;60 (f=2). Total N = 40.</p>
      
      <div style="overflow-x: auto; margin-bottom: 12px;">
        <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13.5px;">
          <tr style="background: rgba(255, 0, 127, 0.2); border-bottom: 2px solid ${themeColor};">
            <th style="padding: 6px;">Class Interval</th><th>Frequency (f)</th><th>Cumulative Frequency (cf)</th>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>0 &ndash; 10</td><td>4</td><td>4</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>10 &ndash; 20</td><td>7</td><td>11</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255, 0, 127, 0.1);"><td style="font-weight: bold; color: ${themeColor};">20 &ndash; 30 (Median Class)</td><td>12</td><td>23</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>30 &ndash; 40</td><td>10</td><td>33</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>40 &ndash; 50</td><td>5</td><td>38</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td>50 &ndash; 60</td><td>2</td><td>40</td></tr>
        </table>
      </div>

      <p><b style="color: ${themeColor};">Step 1: Find N/2:</b><br/>
      N / 2 = 40 / 2 = 20.</p>

      <p><b style="color: ${themeColor};">Step 2: Locate Median Class:</b><br/>
      The 20th item falls in the class <b>20&ndash;30</b> (since cf below it is 11, and cf of 20-30 reaches 23). Thus, Median Class = 20&ndash;30.</p>

      <p><b style="color: ${themeColor};">Step 3: State parameters:</b><br/>
      L = 20, F = 11 (cumulative frequency before median class), f_m = 12, i = 10.</p>

      <p><b style="color: ${themeColor};">Step 4: Formula &amp; Calculation:</b><br/>
      Median = L + [((N / 2) - F) / f_m] &times; i = 20 + [(20 - 11) / 12] &times; 10<br/>
      Median = 20 + (9 / 12) &times; 10 = 20 + 0.75 &times; 10 = 20 + 7.50 = <b>27.50</b>.</p>
      
      <p style="color: #4ADE80; font-weight: bold;">Answer: The Median score of the distribution is 27.50.</p>
    </div>
  </div>

  <!-- Q25 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q25: Define Central Tendency. Critically compare Arithmetic Mean, Median, and Mode in terms of concept, computation, merits, limitations, and specific educational utility.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p><b style="color: ${themeColor};">1. Definition:</b><br/>
      A Measure of Central Tendency is a single representative central value around which all the individual scores of a distribution tend to cluster. It serves as an index of group performance.</p>

      <p><b style="color: ${themeColor};">2. Comparative Synthesis across Dimensions:</b></p>
      <ul style="padding-left: 20px;">
        <li><b style="color: ${themeColor};">(a) Conceptual Foundation:</b> Mean is the mathematical centroid; Median is the 50th percentile rank; Mode is the peak frequency point.</li>
        <li><b style="color: ${themeColor};">(b) Computational Demand:</b> Mean requires the sum of all scores; Median requires cumulative frequency tracking; Mode can often be identified by inspection or Pearson's empirical approximation.</li>
        <li><b style="color: ${themeColor};">(c) Robustness:</b> Median and Mode are robust against extreme outliers; Mean is fragile and pulled strongly toward skewed tails.</li>
        <li><b style="color: ${themeColor};">(d) Mathematical Fertility:</b> Mean is the only measure suitable for advanced algebraic operations like standard deviation and correlation; Median and Mode cannot be algebraically combined across subsets.</li>
      </ul>

      <p><b style="color: ${themeColor};">3. Pedagogical Recommendation:</b><br/>
      Educators should employ the <b>Mean</b> for grading standard examinations when distributions are normal; the <b>Median</b> for reporting skewed school performance or handling open-ended score brackets; and the <b>Mode</b> for determining common classroom needs or standard supply sizes.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS INTERACTIVE QUIZ                      */
/* -------------------------------------------------------------------------- */

export const c11Edu7Mcqs = [
  // Tier 1: Basic Recall & Definitions (Q1 to Q10)
  {
    id: "c11-edu-7-mcq-1",
    question: "The Latin word from which the term 'Statistics' is derived is:",
    options: [
      "A):   Status",
      "B):   Statista",
      "C):   Statistik",
      "D):   Static"
    ],
    correctAnswer: "A",
    explanation: "Statistics is derived from the Latin word 'Status', Italian word 'Statista', and German word 'Statistik', all denoting a political state."
  },
  {
    id: "c11-edu-7-mcq-2",
    question: "In the singular sense, Statistics is defined as:",
    options: [
      "A):   Only numerical raw marks",
      "B):   The science of collection, presentation, analysis, and interpretation of data",
      "C):   A collection of random qualitative opinions",
      "D):   Government taxation records only"
    ],
    correctAnswer: "B",
    explanation: "According to Croxton & Cowden, in the singular sense Statistics is the science of collection, presentation, analysis, and interpretation of numerical data."
  },
  {
    id: "c11-edu-7-mcq-3",
    question: "Which educational psychologist famously emphasized the vital role of statistics in mental measurement and testing?",
    options: [
      "A):   John Dewey",
      "B):   Jean Piaget",
      "C):   Henry E. Garrett",
      "D):   B.F. Skinner"
    ],
    correctAnswer: "C",
    explanation: "Henry E. Garrett is celebrated for authoring 'Statistics in Psychology and Education', establishing statistical foundations in testing."
  },
  {
    id: "c11-edu-7-mcq-4",
    question: "A Histogram is constructed using continuous rectangular bars erected on:",
    options: [
      "A):   Class midpoints",
      "B):   Exact class boundaries",
      "C):   Cumulative frequencies only",
      "D):   Arbitrary qualitative ranks"
    ],
    correctAnswer: "B",
    explanation: "The base of each rectangle in a histogram corresponds to the true continuous class boundaries (exact limits) with zero gap between them."
  },
  {
    id: "c11-edu-7-mcq-5",
    question: "In a Frequency Polygon, the class frequencies are plotted directly against the:",
    options: [
      "A):   Upper class limits",
      "B):   Lower class limits",
      "C):   Class midpoints (mid-values)",
      "D):   Origin"
    ],
    correctAnswer: "C",
    explanation: "A frequency polygon plots frequencies at the midpoint of each class interval, joined by straight line segments."
  },
  {
    id: "c11-edu-7-mcq-6",
    question: "What is the total sum of angles at the center of a Pie Chart?",
    options: [
      "A):   180°",
      "B):   270°",
      "C):   360°",
      "D):   100°"
    ],
    correctAnswer: "C",
    explanation: "A full circle encompasses 360 degrees, and each category sector angle is proportional to its frequency divided by N multiplied by 360°."
  },
  {
    id: "c11-edu-7-mcq-7",
    question: "The point of intersection of 'Less than' and 'More than' Ogives corresponds on the X-axis to the:",
    options: [
      "A):   Arithmetic Mean",
      "B):   Median",
      "C):   Mode",
      "D):   Standard Deviation"
    ],
    correctAnswer: "B",
    explanation: "The point where the rising and falling cumulative frequency curves intersect projects vertically down to the exact Median on the score axis."
  },
  {
    id: "c11-edu-7-mcq-8",
    question: "Which measure of central tendency is calculated as the sum of all scores divided by the total number of scores?",
    options: [
      "A):   Arithmetic Mean",
      "B):   Median",
      "C):   Mode",
      "D):   Range"
    ],
    correctAnswer: "A",
    explanation: "The Arithmetic Mean is the arithmetic average: Mean = (∑ X) / N."
  },
  {
    id: "c11-edu-7-mcq-9",
    question: "The score value that occurs most frequently in a distribution is known as the:",
    options: [
      "A):   Mean",
      "B):   Median",
      "C):   Mode",
      "D):   Variance"
    ],
    correctAnswer: "C",
    explanation: "The Mode is the point of maximum frequency density or greatest popularity in a dataset."
  },
  {
    id: "c11-edu-7-mcq-10",
    question: "Which of the following represents an inherent limitation of Statistics?",
    options: [
      "A):   It condenses bulky data",
      "B):   It deals only with aggregates, not isolated individuals",
      "C):   It enables objective comparisons",
      "D):   It facilitates graphical presentation"
    ],
    correctAnswer: "B",
    explanation: "Statistics cannot study an isolated single score without referencing group context; it deals solely with numerical aggregates."
  },

  // Tier 2: Conceptual & Structural Questions (Q11 to Q18)
  {
    id: "c11-edu-7-mcq-11",
    question: "Why are the two extreme ends of a Frequency Polygon extended to adjacent hypothetical intervals?",
    options: [
      "A):   To make it touch zero frequency and form a closed polygon",
      "B):   To increase the total frequency count",
      "C):   To convert it into a Pie chart",
      "D):   To remove outliers"
    ],
    correctAnswer: "A",
    explanation: "Connecting to hypothetical midpoints with zero frequency closes the polygon against the horizontal baseline, making its area equal to that of the histogram."
  },
  {
    id: "c11-edu-7-mcq-12",
    question: "Karl Pearson's empirical formula linking the three measures of central tendency is:",
    options: [
      "A):   Mode = 2Median - 3Mean",
      "B):   Mode = 3Median - 2Mean",
      "C):   Mean = 3Median - 2Mode",
      "D):   Median = 3Mode - 2Mean"
    ],
    correctAnswer: "B",
    explanation: "In moderately skewed distributions, the empirical relationship is: Mode = 3Median - 2Mean."
  },
  {
    id: "c11-edu-7-mcq-13",
    question: "If a test score distribution has extreme outliers (e.g. one student scored 100 while all others scored 20), which average is least distorted?",
    options: [
      "A):   Arithmetic Mean",
      "B):   Median",
      "C):   Weighted Mean",
      "D):   Harmonic Mean"
    ],
    correctAnswer: "B",
    explanation: "The Median is a positional average depending solely on rank order, making it unaffected by extreme outlier scores."
  },
  {
    id: "c11-edu-7-mcq-14",
    question: "In a perfectly symmetrical, normal bell-shaped distribution curve:",
    options: [
      "A):   Mean > Median > Mode",
      "B):   Mode > Median > Mean",
      "C):   Mean = Median = Mode",
      "D):   Mean + Median = Mode"
    ],
    correctAnswer: "C",
    explanation: "In a symmetrical normal distribution, the Mean, Median, and Mode coincide at the exact center of the curve."
  },
  {
    id: "c11-edu-7-mcq-15",
    question: "When class intervals are open-ended (e.g., 'Below 20' and 'Above 80'), which measure of central tendency can STILL be accurately computed?",
    options: [
      "A):   Arithmetic Mean",
      "B):   Median",
      "C):   Standard Deviation",
      "D):   Combined Mean"
    ],
    correctAnswer: "B",
    explanation: "The Median depends only on the central frequency count; hence open-ended extreme intervals do not impede its calculation."
  },
  {
    id: "c11-edu-7-mcq-16",
    question: "In the step-deviation formula Mean = AM + [(∑ f d') / N] × i, the symbol 'i' stands for:",
    options: [
      "A):   Individual score",
      "B):   Assumed mean",
      "C):   Length/width of class interval",
      "D):   Total frequency"
    ],
    correctAnswer: "C",
    explanation: "'i' represents the size or width of the class interval (e.g., for class 20-30, i = 10)."
  },
  {
    id: "c11-edu-7-mcq-17",
    question: "In a positively skewed distribution where the exam was unusually difficult, the relative order of averages is:",
    options: [
      "A):   Mean < Median < Mode",
      "B):   Mode < Median < Mean",
      "C):   Mean = Median > Mode",
      "D):   Mode = Mean < Median"
    ],
    correctAnswer: "B",
    explanation: "In a positive skew, the tail extends to the right; the Mean is pulled furthest toward high scores, resulting in Mode < Median < Mean."
  },
  {
    id: "c11-edu-7-mcq-18",
    question: "Which graphic representation is most suitable for displaying the budget allocation of a school across various departments?",
    options: [
      "A):   Ogive",
      "B):   Pie Chart",
      "C):   Frequency Polygon",
      "D):   Scatter plot"
    ],
    correctAnswer: "B",
    explanation: "A Pie Chart displays parts of a whole proportionally as radial angular sectors of a circle."
  },

  // Tier 3: Numerical & Analytical Application Questions (Q19 to Q25)
  {
    id: "c11-edu-7-mcq-19",
    question: "The test scores of 5 students are 12, 16, 20, 24, and 28. What is the Arithmetic Mean?",
    options: [
      "A):   18",
      "B):   20",
      "C):   22",
      "D):   24"
    ],
    correctAnswer: "B",
    explanation: "Mean = (12 + 16 + 20 + 24 + 28) / 5 = 100 / 5 = 20."
  },
  {
    id: "c11-edu-7-mcq-20",
    question: "Find the Median of the following ranked scores: 8, 11, 14, 17, 21, 25.",
    options: [
      "A):   14.5",
      "B):   15.5",
      "C):   17.0",
      "D):   16.0"
    ],
    correctAnswer: "B",
    explanation: "Since N = 6 (even), Median = average of 3rd and 4th scores = (14 + 17) / 2 = 31 / 2 = 15.5."
  },
  {
    id: "c11-edu-7-mcq-21",
    question: "If a frequency distribution has Mean = 52 and Median = 50, what is its empirical Mode?",
    options: [
      "A):   46",
      "B):   48",
      "C):   50",
      "D):   54"
    ],
    correctAnswer: "A",
    explanation: "Mode = 3Median - 2Mean = 3(50) - 2(52) = 150 - 104 = 46."
  },
  {
    id: "c11-edu-7-mcq-22",
    question: "In a class of 60 students, 15 opted for Science. What is the central angle for the Science sector in a Pie Chart?",
    options: [
      "A):   60°",
      "B):   75°",
      "C):   90°",
      "D):   120°"
    ],
    correctAnswer: "C",
    explanation: "Angle = (15 / 60) × 360° = (1/4) × 360° = 90°."
  },
  {
    id: "c11-edu-7-mcq-23",
    question: "What is the midpoint (X) of the class interval 30 – 40?",
    options: [
      "A):   30",
      "B):   34.5",
      "C):   35",
      "D):   40"
    ],
    correctAnswer: "C",
    explanation: "Midpoint = (Lower Limit + Upper Limit) / 2 = (30 + 40) / 2 = 70 / 2 = 35."
  },
  {
    id: "c11-edu-7-mcq-24",
    question: "If the scores of 7 pupils are 14, 18, 14, 22, 14, 25, and 18, what is the Mode?",
    options: [
      "A):   14",
      "B):   18",
      "C):   22",
      "D):   25"
    ],
    correctAnswer: "A",
    explanation: "The score 14 appears 3 times, which is the highest frequency; hence the Mode is 14."
  },
  {
    id: "c11-edu-7-mcq-25",
    question: "In grouped data calculation, if N = 80, the Median class is the class interval whose cumulative frequency first contains or exceeds:",
    options: [
      "A):   20",
      "B):   40",
      "C):   60",
      "D):   80"
    ],
    correctAnswer: "B",
    explanation: "Median class is located at N/2 = 80 / 2 = 40; it is the first class whose cumulative frequency equals or exceeds 40."
  }
];
