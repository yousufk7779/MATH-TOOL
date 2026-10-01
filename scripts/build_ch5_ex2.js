const { themeColor, accentColor, styleBlock, frac } = require('./ch5_common');

function makePlaneSvg({
  xRange = [-5, 8],
  yRange = [-5, 8],
  linePoints = [], // [[x1, y1], [x2, y2]]
  isDashed = false,
  shadedPolygon = [], // [[x1, y1], [x2, y2], ...]
  intercepts = [], // [{x, y, label}]
  lineLabel = "",
  lineLabelPos = { x: 2, y: 4 },
  caption = ""
}) {
  const width = 420;
  const height = 320;
  const pad = 35;
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  const toSvgX = (x) => pad + ((x - xMin) / (xMax - xMin)) * (width - 2 * pad);
  const toSvgY = (y) => height - pad - ((y - yMin) / (yMax - yMin)) * (height - 2 * pad);

  // Axes
  const originX = toSvgX(0);
  const originY = toSvgY(0);

  // Grid lines
  let gridSvg = '';
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    if (x === 0) continue;
    const sx = toSvgX(x);
    gridSvg += `<line x1="${sx}" y1="${pad}" x2="${sx}" y2="${height - pad}" stroke="#F1F5F9" stroke-width="1" />`;
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    if (y === 0) continue;
    const sy = toSvgY(y);
    gridSvg += `<line x1="${pad}" y1="${sy}" x2="${width - pad}" y2="${sy}" stroke="#F1F5F9" stroke-width="1" />`;
  }

  // Ticks
  let ticksSvg = '';
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    if (x === 0) continue;
    const sx = toSvgX(x);
    ticksSvg += `<line x1="${sx}" y1="${originY - 3}" x2="${sx}" y2="${originY + 3}" stroke="#475569" stroke-width="1" />`;
    ticksSvg += `<text x="${sx}" y="${originY + 14}" fill="#64748B" font-size="10" text-anchor="middle" font-family="sans-serif">${x}</text>`;
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    if (y === 0) continue;
    const sy = toSvgY(y);
    ticksSvg += `<line x1="${originX - 3}" y1="${sy}" x2="${originX + 3}" stroke="#475569" stroke-width="1" />`;
    ticksSvg += `<text x="${originX - 6}" y="${sy + 3.5}" fill="#64748B" font-size="10" text-anchor="end" font-family="sans-serif">${y}</text>`;
  }

  // Shaded polygon
  let polySvg = '';
  if (shadedPolygon && shadedPolygon.length > 2) {
    const pts = shadedPolygon.map(([x, y]) => `${toSvgX(x)},${toSvgY(y)}`).join(' ');
    polySvg = `<polygon points="${pts}" fill="rgba(0, 230, 118, 0.22)" stroke="none" />`;
  }

  // Boundary Line
  let lineSvg = '';
  if (linePoints.length >= 2) {
    const p1 = linePoints[0];
    const p2 = linePoints[1];
    const x1 = toSvgX(p1[0]);
    const y1 = toSvgY(p1[1]);
    const x2 = toSvgX(p2[0]);
    const y2 = toSvgY(p2[1]);
    const dashAttr = isDashed ? 'stroke-dasharray="6,4"' : '';
    lineSvg = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#E11D48" stroke-width="2.5" ${dashAttr} />`;
  }

  // Intercept points
  let ptsSvg = '';
  intercepts.forEach(pt => {
    const px = toSvgX(pt.x);
    const py = toSvgY(pt.y);
    ptsSvg += `<circle cx="${px}" cy="${py}" r="4.5" fill="#E11D48" stroke="#FFFFFF" stroke-width="1.5" />`;
    if (pt.label) {
      ptsSvg += `<text x="${px + 6}" y="${py - 6}" fill="#0F172A" font-size="11" font-weight="700" font-family="sans-serif">${pt.label}</text>`;
    }
  });

  // Line label
  let lblSvg = '';
  if (lineLabel) {
    const lx = toSvgX(lineLabelPos.x);
    const ly = toSvgY(lineLabelPos.y);
    lblSvg = `<text x="${lx}" y="${ly}" fill="#E11D48" font-size="12" font-weight="800" font-family="sans-serif">${lineLabel}</text>`;
  }

  return `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      ${gridSvg}
      ${polySvg}
      <!-- X & Y Axes -->
      <line x1="${pad - 10}" y1="${originY}" x2="${width - pad + 10}" y2="${originY}" stroke="#1E293B" stroke-width="1.8" />
      <polygon points="${width - pad + 15},${originY} ${width - pad + 8},${originY - 3} ${width - pad + 8},${originY + 3}" fill="#1E293B" />
      <text x="${width - pad + 12}" y="${originY + 16}" fill="#1E293B" font-size="12" font-weight="700" font-family="sans-serif">X</text>

      <line x1="${originX}" y1="${height - pad + 10}" x2="${originX}" y2="${pad - 10}" stroke="#1E293B" stroke-width="1.8" />
      <polygon points="${originX},${pad - 15} ${originX - 3},${pad - 8} ${originX + 3},${pad - 8}" fill="#1E293B" />
      <text x="${originX - 16}" y="${pad - 4}" fill="#1E293B" font-size="12" font-weight="700" font-family="sans-serif">Y</text>
      <text x="${originX - 10}" y="${originY + 12}" fill="#64748B" font-size="10" font-weight="600" font-family="sans-serif">O</text>

      ${ticksSvg}
      ${lineSvg}
      ${ptsSvg}
      ${lblSvg}
    </svg>
    <div class="diagram-caption">📈 Graphical Solution Half-Plane: <span style="color: ${themeColor}; font-weight:700;">${caption}</span></div>
  </div>`;
}

function getExercise5_2() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Linear Inequalities &bull; Exercise 5.2
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Graphical Representation of Linear Inequalities in Two Variables &bull; 2D Cartesian Half-Planes &bull; Test Point Method
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b><i>x</i> + <i>y</i> &lt; 5</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b><i>x</i> + <i>y</i> &lt; 5</b></div>
        <div><b>Step 1 (Boundary Line):</b> Consider the corresponding linear equation:</div>
        <div><i>x</i> + <i>y</i> = 5</div>
        <div>Finding intercepts:</div>
        <div>• When <i>x</i> = 0 &rArr; <i>y</i> = 5 &nbsp;&rArr;&nbsp; Point <i>A</i>(0, 5)</div>
        <div>• When <i>y</i> = 0 &rArr; <i>x</i> = 5 &nbsp;&rArr;&nbsp; Point <i>B</i>(5, 0)</div>
        <div>Since the inequality is strict (&lt;), the boundary line <i>x</i> + <i>y</i> = 5 is drawn as a <b>dotted (dashed) line</b>, indicating that points on the line are excluded from the solution set.</div>
        <div><b>Step 2 (Test Point):</b> Choose origin (0, 0):</div>
        <div>0 + 0 &lt; 5 &rArr; <b>0 &lt; 5</b>, which is <b>TRUE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin satisfies the inequality. Therefore, the solution region is the open half-plane containing the origin (below the line <i>x</i> + <i>y</i> = 5).</div>
        ${makePlaneSvg({
          xRange: [-2, 8],
          yRange: [-2, 8],
          linePoints: [[-1, 6], [6, -1]],
          isDashed: true,
          shadedPolygon: [[-2, -2], [7, -2], [6, -1], [-1, 6], [-2, 6]],
          intercepts: [{ x: 0, y: 5, label: "(0,5)" }, { x: 5, y: 0, label: "(5,0)" }, { x: 0, y: 0, label: "" }],
          lineLabel: "x + y = 5",
          lineLabelPos: { x: 3.5, y: 3.5 },
          caption: "x + y < 5 (Dotted line, half-plane containing origin)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded open half-plane containing (0,0) excluding the line x + y = 5 is the required solution region.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b>2<i>x</i> + <i>y</i> &ge; 6</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>2<i>x</i> + <i>y</i> &ge; 6</b></div>
        <div><b>Step 1 (Boundary Line):</b> Draw the line 2<i>x</i> + <i>y</i> = 6 as a <b>solid line</b> (since &ge; includes equality).</div>
        <div>• When <i>x</i> = 0 &rArr; <i>y</i> = 6 &nbsp;&rArr;&nbsp; Point (0, 6)</div>
        <div>• When <i>y</i> = 0 &rArr; 2<i>x</i> = 6 &rArr; <i>x</i> = 3 &nbsp;&rArr;&nbsp; Point (3, 0)</div>
        <div><b>Step 2 (Test Point):</b> Substituting (0, 0):</div>
        <div>2(0) + 0 &ge; 6 &rArr; <b>0 &ge; 6</b>, which is <b>FALSE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin (0,0) does not satisfy the inequality. Thus, the solution region is the closed half-plane lying on and above/to the right of 2<i>x</i> + <i>y</i> = 6 (away from origin).</div>
        ${makePlaneSvg({
          xRange: [-2, 8],
          yRange: [-2, 8],
          linePoints: [[-0.5, 7], [4, -2]],
          isDashed: false,
          shadedPolygon: [[-0.5, 7], [8, 7], [8, -2], [4, -2]],
          intercepts: [{ x: 0, y: 6, label: "(0,6)" }, { x: 3, y: 0, label: "(3,0)" }],
          lineLabel: "2x + y = 6",
          lineLabelPos: { x: 2.5, y: 4.5 },
          caption: "2x + y ≥ 6 (Solid line, region away from origin)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded closed half-plane containing points on and above 2x + y = 6 represents the solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b>3<i>x</i> + 4<i>y</i> &le; 12</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>3<i>x</i> + 4<i>y</i> &le; 12</b></div>
        <div><b>Step 1 (Boundary Line):</b> Draw the solid line 3<i>x</i> + 4<i>y</i> = 12:</div>
        <div>• When <i>x</i> = 0 &rArr; 4<i>y</i> = 12 &rArr; <i>y</i> = 3 &nbsp;&rArr;&nbsp; Point (0, 3)</div>
        <div>• When <i>y</i> = 0 &rArr; 3<i>x</i> = 12 &rArr; <i>x</i> = 4 &nbsp;&rArr;&nbsp; Point (4, 0)</div>
        <div><b>Step 2 (Test Point):</b> Test origin (0, 0):</div>
        <div>3(0) + 4(0) &le; 12 &rArr; <b>0 &le; 12</b>, which is <b>TRUE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin satisfies the inequality. Therefore, the solution is the closed half-plane below/left of the line including the points on 3<i>x</i> + 4<i>y</i> = 12.</div>
        ${makePlaneSvg({
          xRange: [-2, 8],
          yRange: [-2, 8],
          linePoints: [[-1.5, 4.125], [6, -1.5]],
          isDashed: false,
          shadedPolygon: [[-2, -2], [6, -2], [6, -1.5], [-1.5, 4.125], [-2, 4.5]],
          intercepts: [{ x: 0, y: 3, label: "(0,3)" }, { x: 4, y: 0, label: "(4,0)" }],
          lineLabel: "3x + 4y = 12",
          lineLabelPos: { x: 3.5, y: 2.8 },
          caption: "3x + 4y ≤ 12 (Solid line, region containing origin)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded closed half-plane containing origin (0,0) and the boundary line 3x + 4y = 12 is the solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b><i>y</i> + 8 &ge; 2<i>x</i></b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b><i>y</i> + 8 &ge; 2<i>x</i> &hArr; 2<i>x</i> &minus; <i>y</i> &le; 8</b></div>
        <div><b>Step 1 (Boundary Line):</b> Draw the solid line 2<i>x</i> &minus; <i>y</i> = 8:</div>
        <div>• When <i>x</i> = 0 &rArr; <i>y</i> = &minus;8 &nbsp;&rArr;&nbsp; Point (0, &minus;8)</div>
        <div>• When <i>y</i> = 0 &rArr; 2<i>x</i> = 8 &rArr; <i>x</i> = 4 &nbsp;&rArr;&nbsp; Point (4, 0)</div>
        <div><b>Step 2 (Test Point):</b> Test origin (0, 0):</div>
        <div>0 + 8 &ge; 2(0) &rArr; <b>8 &ge; 0</b>, which is <b>TRUE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin satisfies the inequality. Therefore, the solution is the closed half-plane containing (0,0) (above and to the left of the line <i>y</i> + 8 = 2<i>x</i>).</div>
        ${makePlaneSvg({
          xRange: [-3, 7],
          yRange: [-9, 3],
          linePoints: [[-0.5, -9], [5.5, 3]],
          isDashed: false,
          shadedPolygon: [[-3, 3], [5.5, 3], [-0.5, -9], [-3, -9]],
          intercepts: [{ x: 0, y: -8, label: "(0,-8)" }, { x: 4, y: 0, label: "(4,0)" }],
          lineLabel: "y + 8 = 2x",
          lineLabelPos: { x: 2, y: -2 },
          caption: "y + 8 ≥ 2x (Solid line, region containing origin)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The closed half-plane containing origin and the boundary line y + 8 = 2x is the required solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b><i>x</i> &minus; <i>y</i> &le; 2</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b><i>x</i> &minus; <i>y</i> &le; 2</b></div>
        <div><b>Step 1 (Boundary Line):</b> Draw the solid line <i>x</i> &minus; <i>y</i> = 2:</div>
        <div>• When <i>x</i> = 0 &rArr; <i>y</i> = &minus;2 &nbsp;&rArr;&nbsp; Point (0, &minus;2)</div>
        <div>• When <i>y</i> = 0 &rArr; <i>x</i> = 2 &nbsp;&rArr;&nbsp; Point (2, 0)</div>
        <div><b>Step 2 (Test Point):</b> Test origin (0, 0):</div>
        <div>0 &minus; 0 &le; 2 &rArr; <b>0 &le; 2</b>, which is <b>TRUE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin satisfies the inequality. Therefore, the solution is the closed half-plane containing the origin (above the line <i>x</i> &minus; <i>y</i> = 2).</div>
        ${makePlaneSvg({
          xRange: [-3, 7],
          yRange: [-4, 6],
          linePoints: [[-2, -4], [7, 5]],
          isDashed: false,
          shadedPolygon: [[-3, 6], [7, 6], [7, 5], [-2, -4], [-3, -4]],
          intercepts: [{ x: 0, y: -2, label: "(0,-2)" }, { x: 2, y: 0, label: "(2,0)" }],
          lineLabel: "x - y = 2",
          lineLabelPos: { x: 4.5, y: 1.5 },
          caption: "x - y ≤ 2 (Solid line, region containing origin)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded closed half-plane containing (0,0) and the line x - y = 2 is the solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b>2<i>x</i> &minus; 3<i>y</i> &gt; 6</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>2<i>x</i> &minus; 3<i>y</i> &gt; 6</b></div>
        <div><b>Step 1 (Boundary Line):</b> Since the inequality is strict (&gt;), draw 2<i>x</i> &minus; 3<i>y</i> = 6 as a <b>dotted (dashed) line</b>:</div>
        <div>• When <i>x</i> = 0 &rArr; &minus;3<i>y</i> = 6 &rArr; <i>y</i> = &minus;2 &nbsp;&rArr;&nbsp; Point (0, &minus;2)</div>
        <div>• When <i>y</i> = 0 &rArr; 2<i>x</i> = 6 &rArr; <i>x</i> = 3 &nbsp;&rArr;&nbsp; Point (3, 0)</div>
        <div><b>Step 2 (Test Point):</b> Test origin (0, 0):</div>
        <div>2(0) &minus; 3(0) &gt; 6 &rArr; <b>0 &gt; 6</b>, which is <b>FALSE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin does not satisfy the inequality. Therefore, the solution is the open half-plane lying below 2<i>x</i> &minus; 3<i>y</i> = 6 (away from origin).</div>
        ${makePlaneSvg({
          xRange: [-2, 8],
          yRange: [-5, 5],
          linePoints: [[-2, -3.33], [7, 2.67]],
          isDashed: true,
          shadedPolygon: [[-2, -5], [8, -5], [8, 3.33], [7, 2.67], [-2, -3.33]],
          intercepts: [{ x: 0, y: -2, label: "(0,-2)" }, { x: 3, y: 0, label: "(3,0)" }],
          lineLabel: "2x - 3y = 6",
          lineLabelPos: { x: 4.5, y: 0.2 },
          caption: "2x - 3y > 6 (Dotted line, half-plane away from origin)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The open half-plane lying below the dotted line 2x - 3y = 6 represents the solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b>&minus;3<i>x</i> + 2<i>y</i> &ge; &minus;6</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>&minus;3<i>x</i> + 2<i>y</i> &ge; &minus;6</b></div>
        <div><b>Step 1 (Boundary Line):</b> Draw the solid line &minus;3<i>x</i> + 2<i>y</i> = &minus;6:</div>
        <div>• When <i>x</i> = 0 &rArr; 2<i>y</i> = &minus;6 &rArr; <i>y</i> = &minus;3 &nbsp;&rArr;&nbsp; Point (0, &minus;3)</div>
        <div>• When <i>y</i> = 0 &rArr; &minus;3<i>x</i> = &minus;6 &rArr; <i>x</i> = 2 &nbsp;&rArr;&nbsp; Point (2, 0)</div>
        <div><b>Step 2 (Test Point):</b> Test origin (0, 0):</div>
        <div>&minus;3(0) + 2(0) &ge; &minus;6 &rArr; <b>0 &ge; &minus;6</b>, which is <b>TRUE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin satisfies the inequality. Therefore, the solution is the closed half-plane containing (0,0) (above the line &minus;3<i>x</i> + 2<i>y</i> = &minus;6).</div>
        ${makePlaneSvg({
          xRange: [-2, 8],
          yRange: [-4, 6],
          linePoints: [[-1, -4.5], [6, 6]],
          isDashed: false,
          shadedPolygon: [[-2, 6], [-2, -4], [-1, -4.5], [6, 6]],
          intercepts: [{ x: 0, y: -3, label: "(0,-3)" }, { x: 2, y: 0, label: "(2,0)" }],
          lineLabel: "-3x + 2y = -6",
          lineLabelPos: { x: 3, y: 2 },
          caption: "-3x + 2y ≥ -6 (Solid line, region containing origin)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded closed half-plane containing origin and the line -3x + 2y = -6 is the solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b>3<i>y</i> &minus; 5<i>x</i> &lt; 30</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b>3<i>y</i> &minus; 5<i>x</i> &lt; 30</b></div>
        <div><b>Step 1 (Boundary Line):</b> Since the inequality is strict (&lt;), draw 3<i>y</i> &minus; 5<i>x</i> = 30 as a <b>dotted (dashed) line</b>:</div>
        <div>• When <i>x</i> = 0 &rArr; 3<i>y</i> = 30 &rArr; <i>y</i> = 10 &nbsp;&rArr;&nbsp; Point (0, 10)</div>
        <div>• When <i>y</i> = 0 &rArr; &minus;5<i>x</i> = 30 &rArr; <i>x</i> = &minus;6 &nbsp;&rArr;&nbsp; Point (&minus;6, 0)</div>
        <div><b>Step 2 (Test Point):</b> Test origin (0, 0):</div>
        <div>3(0) &minus; 5(0) &lt; 30 &rArr; <b>0 &lt; 30</b>, which is <b>TRUE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin satisfies the inequality. Therefore, the solution is the open half-plane containing (0,0) (below the line 3<i>y</i> &minus; 5<i>x</i> = 30).</div>
        ${makePlaneSvg({
          xRange: [-8, 4],
          yRange: [-2, 12],
          linePoints: [[-7, -1.67], [1, 11.67]],
          isDashed: true,
          shadedPolygon: [[-8, -2], [4, -2], [4, 12], [1, 11.67], [-7, -1.67]],
          intercepts: [{ x: 0, y: 10, label: "(0,10)" }, { x: -6, y: 0, label: "(-6,0)" }],
          lineLabel: "3y - 5x = 30",
          lineLabelPos: { x: -4, y: 5 },
          caption: "3y - 5x < 30 (Dotted line, half-plane containing origin)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The open half-plane below the line 3y - 5x = 30 containing the origin is the solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b><i>y</i> &lt; &minus;2</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b><i>y</i> &lt; &minus;2</b></div>
        <div><b>Step 1 (Boundary Line):</b> Draw the horizontal line <i>y</i> = &minus;2 as a <b>dotted (dashed) line</b> parallel to the X-axis.</div>
        <div><b>Step 2 (Test Point):</b> Test origin (0, 0):</div>
        <div>0 &lt; &minus;2, which is <b>FALSE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin does not satisfy the inequality. Therefore, the solution is the open half-plane strictly below the line <i>y</i> = &minus;2.</div>
        ${makePlaneSvg({
          xRange: [-5, 5],
          yRange: [-6, 4],
          linePoints: [[-5, -2], [5, -2]],
          isDashed: true,
          shadedPolygon: [[-5, -2], [5, -2], [5, -6], [-5, -6]],
          intercepts: [{ x: 0, y: -2, label: "(0,-2)" }],
          lineLabel: "y = -2",
          lineLabelPos: { x: 2, y: -1.5 },
          caption: "y < -2 (Horizontal dashed line, region below y = -2)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded open half-plane lying below the dashed line y = -2 is the solution region.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Solve the inequality graphically in two-dimensional plane:<br/>
      <b><i>x</i> &gt; &minus;3</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequality: <b><i>x</i> &gt; &minus;3</b></div>
        <div><b>Step 1 (Boundary Line):</b> Draw the vertical line <i>x</i> = &minus;3 as a <b>dotted (dashed) line</b> parallel to the Y-axis.</div>
        <div><b>Step 2 (Test Point):</b> Test origin (0, 0):</div>
        <div>0 &gt; &minus;3, which is <b>TRUE</b>.</div>
        <div><b>Step 3 (Feasible Region):</b> The origin satisfies the inequality. Therefore, the solution is the open half-plane to the right of the vertical line <i>x</i> = &minus;3.</div>
        ${makePlaneSvg({
          xRange: [-5, 5],
          yRange: [-5, 5],
          linePoints: [[-3, -5], [-3, 5]],
          isDashed: true,
          shadedPolygon: [[-3, -5], [5, -5], [5, 5], [-3, 5]],
          intercepts: [{ x: -3, y: 0, label: "(-3,0)" }],
          lineLabel: "x = -3",
          lineLabelPos: { x: -2.7, y: 3.5 },
          caption: "x > -3 (Vertical dashed line, region to the right of x = -3)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded open half-plane to the right of x = -3 (containing the origin) is the solution set.</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise5_2
};
