const { themeColor, accentColor, styleBlock, frac } = require('./ch5_common');

function makeSystemSvg({
  xRange = [-2, 10],
  yRange = [-2, 10],
  lines = [], // [{ points: [[x1,y1],[x2,y2]], isDashed: bool, color: string, label: string, labelPos: {x,y} }]
  shadedPolygon = [],
  caption = ""
}) {
  const width = 420;
  const height = 320;
  const pad = 35;
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  const toSvgX = (x) => pad + ((x - xMin) / (xMax - xMin)) * (width - 2 * pad);
  const toSvgY = (y) => height - pad - ((y - yMin) / (yMax - yMin)) * (height - 2 * pad);

  const originX = toSvgX(0);
  const originY = toSvgY(0);

  // Grid lines
  let gridSvg = '';
  const xStep = (xMax - xMin) > 20 ? 10 : ((xMax - xMin) > 10 ? 2 : 1);
  const yStep = (yMax - yMin) > 20 ? 10 : ((yMax - yMin) > 10 ? 2 : 1);

  for (let x = Math.ceil(xMin / xStep) * xStep; x <= Math.floor(xMax / xStep) * xStep; x += xStep) {
    if (x === 0) continue;
    const sx = toSvgX(x);
    gridSvg += `<line x1="${sx}" y1="${pad}" x2="${sx}" y2="${height - pad}" stroke="#F1F5F9" stroke-width="1" />`;
  }
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= Math.floor(yMax / yStep) * yStep; y += yStep) {
    if (y === 0) continue;
    const sy = toSvgY(y);
    gridSvg += `<line x1="${pad}" y1="${sy}" x2="${width - pad}" y2="${sy}" stroke="#F1F5F9" stroke-width="1" />`;
  }

  // Ticks
  let ticksSvg = '';
  for (let x = Math.ceil(xMin / xStep) * xStep; x <= Math.floor(xMax / xStep) * xStep; x += xStep) {
    if (x === 0) continue;
    const sx = toSvgX(x);
    ticksSvg += `<line x1="${sx}" y1="${originY - 3}" x2="${sx}" y2="${originY + 3}" stroke="#475569" stroke-width="1" />`;
    ticksSvg += `<text x="${sx}" y="${originY + 13}" fill="#64748B" font-size="9.5" text-anchor="middle" font-family="sans-serif">${x}</text>`;
  }
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= Math.floor(yMax / yStep) * yStep; y += yStep) {
    if (y === 0) continue;
    const sy = toSvgY(y);
    ticksSvg += `<line x1="${originX - 3}" y1="${sy}" x2="${originX + 3}" stroke="#475569" stroke-width="1" />`;
    ticksSvg += `<text x="${originX - 5}" y="${sy + 3.5}" fill="#64748B" font-size="9.5" text-anchor="end" font-family="sans-serif">${y}</text>`;
  }

  // Shaded feasible region
  let polySvg = '';
  if (shadedPolygon && shadedPolygon.length > 2) {
    const pts = shadedPolygon.map(([x, y]) => `${toSvgX(x)},${toSvgY(y)}`).join(' ');
    polySvg = `<polygon points="${pts}" fill="rgba(0, 230, 118, 0.28)" stroke="#00C853" stroke-width="1.5" stroke-dasharray="3,3" />`;
  }

  // Boundary Lines
  let linesSvg = '';
  const defaultColors = ["#E11D48", "#2563EB", "#7C3AED", "#EA580C"];
  lines.forEach((l, idx) => {
    const p1 = l.points[0];
    const p2 = l.points[1];
    const x1 = toSvgX(p1[0]);
    const y1 = toSvgY(p1[1]);
    const x2 = toSvgX(p2[0]);
    const y2 = toSvgY(p2[1]);
    const color = l.color || defaultColors[idx % defaultColors.length];
    const dashAttr = l.isDashed ? 'stroke-dasharray="6,4"' : '';
    linesSvg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2.2" ${dashAttr} />`;
    if (l.label && l.labelPos) {
      const lx = toSvgX(l.labelPos.x);
      const ly = toSvgY(l.labelPos.y);
      linesSvg += `<text x="${lx}" y="${ly}" fill="${color}" font-size="10.5" font-weight="800" font-family="sans-serif">${l.label}</text>`;
    }
  });

  return `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      ${gridSvg}
      ${polySvg}
      <!-- X & Y Axes -->
      <line x1="${pad - 10}" y1="${originY}" x2="${width - pad + 10}" y2="${originY}" stroke="#1E293B" stroke-width="1.8" />
      <polygon points="${width - pad + 15},${originY} ${width - pad + 8},${originY - 3} ${width - pad + 8},${originY + 3}" fill="#1E293B" />
      <text x="${width - pad + 12}" y="${originY + 14}" fill="#1E293B" font-size="11" font-weight="700" font-family="sans-serif">X</text>

      <line x1="${originX}" y1="${height - pad + 10}" x2="${originX}" y2="${pad - 10}" stroke="#1E293B" stroke-width="1.8" />
      <polygon points="${originX},${pad - 15} ${originX - 3},${pad - 8} ${originX + 3},${pad - 8}" fill="#1E293B" />
      <text x="${originX - 14}" y="${pad - 4}" fill="#1E293B" font-size="11" font-weight="700" font-family="sans-serif">Y</text>
      <text x="${originX - 9}" y="${originY + 12}" fill="#64748B" font-size="9.5" font-weight="600" font-family="sans-serif">O</text>

      ${ticksSvg}
      ${linesSvg}
    </svg>
    <div class="diagram-caption">📌 System Feasible Region: <span style="color: ${themeColor}; font-weight:700;">${caption}</span></div>
  </div>`;
}

function getExercise5_3() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Linear Inequalities &bull; Exercise 5.3
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      Solving Systems of Linear Inequalities in Two Variables Graphically &bull; Overlapping Half-Planes &bull; Feasible Region
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b><i>x</i> &ge; 3, &nbsp; <i>y</i> &ge; 2</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b><i>x</i> &ge; 3</b> &nbsp;&nbsp;&nbsp; (2) <b><i>y</i> &ge; 2</b></div>
        <div>• <b>Line 1:</b> <i>x</i> = 3 is a vertical solid line parallel to the Y-axis. The region <i>x</i> &ge; 3 lies to the right of this line. (Origin (0,0) gives 0 &ge; 3 &mdash; False).</div>
        <div>• <b>Line 2:</b> <i>y</i> = 2 is a horizontal solid line parallel to the X-axis. The region <i>y</i> &ge; 2 lies above this line. (Origin (0,0) gives 0 &ge; 2 &mdash; False).</div>
        <div>• <b>Intersection (Feasible Region):</b> The common region satisfying both inequalities is the unbounded upper-right quadrant formed by the corner point <b>(3, 2)</b>.</div>
        ${makeSystemSvg({
          xRange: [-1, 7],
          yRange: [-1, 7],
          lines: [
            { points: [[3, -1], [3, 7]], isDashed: false, color: "#E11D48", label: "x = 3", labelPos: { x: 3.2, y: 6.2 } },
            { points: [[-1, 2], [7, 2]], isDashed: false, color: "#2563EB", label: "y = 2", labelPos: { x: 5.5, y: 2.3 } }
          ],
          shadedPolygon: [[3, 2], [7, 2], [7, 7], [3, 7]],
          caption: "x ≥ 3 and y ≥ 2 (Upper right region from (3,2))"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded region to the right of x = 3 and above y = 2 represents the solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>3<i>x</i> + 2<i>y</i> &le; 12, &nbsp; <i>x</i> &ge; 1, &nbsp; <i>y</i> &ge; 2</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b>3<i>x</i> + 2<i>y</i> &le; 12</b> &nbsp;&nbsp;&nbsp; (2) <b><i>x</i> &ge; 1</b> &nbsp;&nbsp;&nbsp; (3) <b><i>y</i> &ge; 2</b></div>
        <div>• <b>Line 3<i>x</i> + 2<i>y</i> = 12:</b> Passes through (0, 6) and (4, 0). Testing (0, 0): 0 &le; 12 (True). Shade half-plane containing origin.</div>
        <div>• <b>Line <i>x</i> = 1:</b> Vertical solid line. Shade region to the right of <i>x</i> = 1.</div>
        <div>• <b>Line <i>y</i> = 2:</b> Horizontal solid line. Shade region above <i>y</i> = 2.</div>
        <div>• <b>Feasible Region:</b> The triangle bounded by the lines with vertices (1, 2), (${frac('8', '3')}, 2), and (1, 4.5).</div>
        ${makeSystemSvg({
          xRange: [-1, 6],
          yRange: [-1, 7],
          lines: [
            { points: [[-0.5, 6.75], [4.5, -0.75]], isDashed: false, color: "#E11D48", label: "3x + 2y = 12", labelPos: { x: 2.2, y: 3.8 } },
            { points: [[1, -1], [1, 7]], isDashed: false, color: "#2563EB", label: "x = 1", labelPos: { x: 1.2, y: 6.2 } },
            { points: [[-1, 2], [6, 2]], isDashed: false, color: "#7C3AED", label: "y = 2", labelPos: { x: 4.2, y: 2.3 } }
          ],
          shadedPolygon: [[1, 2], [2.67, 2], [1, 4.5]],
          caption: "3x + 2y ≤ 12, x ≥ 1, y ≥ 2 (Triangular bounded region)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded triangular region bounded by the three lines represents the feasible solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>2<i>x</i> + <i>y</i> &ge; 6, &nbsp; 3<i>x</i> + 4<i>y</i> &le; 12</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b>2<i>x</i> + <i>y</i> &ge; 6</b> &nbsp;&nbsp;&nbsp; (2) <b>3<i>x</i> + 4<i>y</i> &le; 12</b></div>
        <div>• <b>Line 2<i>x</i> + <i>y</i> = 6:</b> Intercepts (0, 6) and (3, 0). Testing (0, 0): 0 &ge; 6 (False). Region is above/right of line (away from origin).</div>
        <div>• <b>Line 3<i>x</i> + 4<i>y</i> = 12:</b> Intercepts (0, 3) and (4, 0). Testing (0, 0): 0 &le; 12 (True). Region is below/left of line (towards origin).</div>
        <div>• <b>Feasible Region:</b> The shaded angular region lying simultaneously above 2<i>x</i> + <i>y</i> = 6 and below 3<i>x</i> + 4<i>y</i> = 12.</div>
        ${makeSystemSvg({
          xRange: [-1, 6],
          yRange: [-2, 8],
          lines: [
            { points: [[-0.5, 7], [3.5, -1]], isDashed: false, color: "#E11D48", label: "2x + y = 6", labelPos: { x: 2.5, y: 2.5 } },
            { points: [[-1, 3.75], [5.5, -1.125]], isDashed: false, color: "#2563EB", label: "3x + 4y = 12", labelPos: { x: 3.5, y: 1 } }
          ],
          shadedPolygon: [[2.4, 1.2], [3, 0], [4, 0]],
          caption: "2x + y ≥ 6, 3x + 4y ≤ 12"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded region satisfying both half-planes simultaneously is the required solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b><i>x</i> + <i>y</i> &ge; 4, &nbsp; 2<i>x</i> &minus; <i>y</i> &lt; 0</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b><i>x</i> + <i>y</i> &ge; 4</b> (Solid line) &nbsp;&nbsp;&nbsp; (2) <b>2<i>x</i> &minus; <i>y</i> &lt; 0</b> (Dotted line)</div>
        <div>• <b>Line <i>x</i> + <i>y</i> = 4:</b> Intercepts (0, 4) and (4, 0). Testing (0, 0): 0 &ge; 4 (False). Feasible region lies away from origin (above the line).</div>
        <div>• <b>Line 2<i>x</i> &minus; <i>y</i> = 0 &rArr; <i>y</i> = 2<i>x</i>:</b> Passes through origin (0, 0) and (1, 2). Drawn as a dotted line. Testing point (4, 0): 2(4) &minus; 0 = 8 &lt; 0 (False). So shade region to the left/above <i>y</i> = 2<i>x</i> containing (0, 4).</div>
        <div>• <b>Feasible Region:</b> Intersection lies above both lines.</div>
        ${makeSystemSvg({
          xRange: [-2, 6],
          yRange: [-1, 7],
          lines: [
            { points: [[-1, 5], [5, -1]], isDashed: false, color: "#E11D48", label: "x + y = 4", labelPos: { x: 3.2, y: 1.5 } },
            { points: [[-0.5, -1], [3.5, 7]], isDashed: true, color: "#2563EB", label: "2x - y = 0", labelPos: { x: 1.5, y: 5.5 } }
          ],
          shadedPolygon: [[1.33, 2.67], [0, 4], [-1, 5], [-0.5, 7], [3.5, 7]],
          caption: "x + y ≥ 4, 2x - y < 0"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded common region above x + y = 4 and to the left of the dotted line 2x - y = 0 is the solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>2<i>x</i> &minus; <i>y</i> &gt; 1, &nbsp; <i>x</i> &minus; 2<i>y</i> &lt; &minus;1</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b>2<i>x</i> &minus; <i>y</i> &gt; 1</b> (Dotted line) &nbsp;&nbsp;&nbsp; (2) <b><i>x</i> &minus; 2<i>y</i> &lt; &minus;1</b> (Dotted line)</div>
        <div>• <b>Line 2<i>x</i> &minus; <i>y</i> = 1:</b> Passes through (0, &minus;1) and (0.5, 0). Testing (0, 0): 0 &gt; 1 (False). Region is below the line (away from origin).</div>
        <div>• <b>Line <i>x</i> &minus; 2<i>y</i> = &minus;1:</b> Passes through (0, 0.5) and (&minus;1, 0). Testing (0, 0): 0 &lt; &minus;1 (False). Region is above the line (away from origin).</div>
        <div>• <b>Feasible Region:</b> The shaded area common to both open half-planes.</div>
        ${makeSystemSvg({
          xRange: [-3, 5],
          yRange: [-3, 5],
          lines: [
            { points: [[-1, -3], [3, 5]], isDashed: true, color: "#E11D48", label: "2x - y = 1", labelPos: { x: 2, y: 1.5 } },
            { points: [[-3, -1], [5, 3]], isDashed: true, color: "#2563EB", label: "x - 2y = -1", labelPos: { x: 1.5, y: 2.5 } }
          ],
          shadedPolygon: [[1, 1], [3, 5], [5, 5], [5, 3]],
          caption: "2x - y > 1, x - 2y < -1"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded open region satisfying both inequalities represents the solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b><i>x</i> + <i>y</i> &le; 6, &nbsp; <i>x</i> + <i>y</i> &ge; 4</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b><i>x</i> + <i>y</i> &le; 6</b> &nbsp;&nbsp;&nbsp; (2) <b><i>x</i> + <i>y</i> &ge; 4</b></div>
        <div>• <b>Line <i>x</i> + <i>y</i> = 6:</b> Passes through (0, 6) and (6, 0). Testing (0, 0): 0 &le; 6 (True). Shade half-plane containing origin.</div>
        <div>• <b>Line <i>x</i> + <i>y</i> = 4:</b> Passes through (0, 4) and (4, 0). Testing (0, 0): 0 &ge; 4 (False). Shade half-plane away from origin.</div>
        <div>• <b>Feasible Region:</b> The parallel strip enclosed between the two parallel lines <i>x</i> + <i>y</i> = 4 and <i>x</i> + <i>y</i> = 6, including points on both boundary lines.</div>
        ${makeSystemSvg({
          xRange: [-1, 8],
          yRange: [-1, 8],
          lines: [
            { points: [[-0.5, 6.5], [6.5, -0.5]], isDashed: false, color: "#E11D48", label: "x + y = 6", labelPos: { x: 4, y: 3 } },
            { points: [[-0.5, 4.5], [4.5, -0.5]], isDashed: false, color: "#2563EB", label: "x + y = 4", labelPos: { x: 1.5, y: 1.5 } }
          ],
          shadedPolygon: [[-0.5, 4.5], [4.5, -0.5], [6.5, -0.5], [-0.5, 6.5]],
          caption: "4 ≤ x + y ≤ 6 (Parallel strip between the two lines)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded closed parallel strip between x + y = 4 and x + y = 6 is the solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>2<i>x</i> + <i>y</i> &ge; 8, &nbsp; <i>x</i> + 2<i>y</i> &ge; 10</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b>2<i>x</i> + <i>y</i> &ge; 8</b> &nbsp;&nbsp;&nbsp; (2) <b><i>x</i> + 2<i>y</i> &ge; 10</b></div>
        <div>• <b>Line 2<i>x</i> + <i>y</i> = 8:</b> Intercepts (0, 8) and (4, 0). Testing (0, 0): 0 &ge; 8 (False). Feasible region lies away from origin.</div>
        <div>• <b>Line <i>x</i> + 2<i>y</i> = 10:</b> Intercepts (0, 5) and (10, 0). Testing (0, 0): 0 &ge; 10 (False). Feasible region lies away from origin.</div>
        <div>• <b>Intersection Point:</b> Solving simultaneously: 2(10 &minus; 2<i>y</i>) + <i>y</i> = 8 &rArr; 20 &minus; 3<i>y</i> = 8 &rArr; <i>y</i> = 4, <i>x</i> = 2 &rArr; <b>(2, 4)</b>.</div>
        <div>• <b>Feasible Region:</b> The unbounded convex polygon with boundary formed by rays from (0, 8) through (2, 4) to (10, 0).</div>
        ${makeSystemSvg({
          xRange: [-2, 12],
          yRange: [-2, 10],
          lines: [
            { points: [[-0.5, 9], [5, -2]], isDashed: false, color: "#E11D48", label: "2x + y = 8", labelPos: { x: 3.5, y: 3.5 } },
            { points: [[-2, 6], [11, -0.5]], isDashed: false, color: "#2563EB", label: "x + 2y = 10", labelPos: { x: 6.5, y: 2.5 } }
          ],
          shadedPolygon: [[0, 8], [2, 4], [10, 0], [12, 0], [12, 10], [0, 10]],
          caption: "2x + y ≥ 8 and x + 2y ≥ 10 (Unbounded region above both lines)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded unbounded region lying on and above both lines is the required solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b><i>x</i> + <i>y</i> &le; 9, &nbsp; <i>y</i> &gt; <i>x</i>, &nbsp; <i>x</i> &ge; 0</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b><i>x</i> + <i>y</i> &le; 9</b> (Solid line) &nbsp;&nbsp;&nbsp; (2) <b><i>y</i> &gt; <i>x</i></b> (Dotted line) &nbsp;&nbsp;&nbsp; (3) <b><i>x</i> &ge; 0</b> (Y-axis)</div>
        <div>• <b>Line <i>x</i> + <i>y</i> = 9:</b> Passes through (0, 9) and (9, 0). Testing (0, 0): 0 &le; 9 (True). Shade region containing origin.</div>
        <div>• <b>Line <i>y</i> = <i>x</i>:</b> Passes through (0, 0) and (4.5, 4.5). Testing point (1, 0): 0 &gt; 1 (False). Shade region above the line <i>y</i> = <i>x</i>.</div>
        <div>• <b><i>x</i> &ge; 0:</b> Region on and to the right of the Y-axis.</div>
        <div>• <b>Feasible Region:</b> Triangular region bounded by Y-axis from (0,0) to (0,9), line <i>x</i> + <i>y</i> = 9 from (0,9) to (4.5, 4.5), and line <i>y</i> = <i>x</i> from (4.5, 4.5) to (0,0).</div>
        ${makeSystemSvg({
          xRange: [-1, 10],
          yRange: [-1, 10],
          lines: [
            { points: [[-0.5, 9.5], [9.5, -0.5]], isDashed: false, color: "#E11D48", label: "x + y = 9", labelPos: { x: 6, y: 4 } },
            { points: [[-1, -1], [9, 9]], isDashed: true, color: "#2563EB", label: "y = x", labelPos: { x: 5, y: 6.2 } }
          ],
          shadedPolygon: [[0, 0], [0, 9], [4.5, 4.5]],
          caption: "x + y ≤ 9, y > x, x ≥ 0 (Triangular region in 1st quadrant)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded triangular region in the first quadrant represents the solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>5<i>x</i> + 4<i>y</i> &le; 20, &nbsp; <i>x</i> &ge; 1, &nbsp; <i>y</i> &ge; 2</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b>5<i>x</i> + 4<i>y</i> &le; 20</b> &nbsp;&nbsp;&nbsp; (2) <b><i>x</i> &ge; 1</b> &nbsp;&nbsp;&nbsp; (3) <b><i>y</i> &ge; 2</b></div>
        <div>• <b>Line 5<i>x</i> + 4<i>y</i> = 20:</b> Intercepts (0, 5) and (4, 0). Testing (0, 0): 0 &le; 20 (True). Region lies towards origin.</div>
        <div>• <b>Line <i>x</i> = 1:</b> Vertical solid line. Region lies to the right (<i>x</i> &ge; 1).</div>
        <div>• <b>Line <i>y</i> = 2:</b> Horizontal solid line. Region lies above (<i>y</i> &ge; 2).</div>
        <div>• <b>Vertices of Feasible Region:</b> (1, 2), (2.4, 2), and (1, 3.75).</div>
        ${makeSystemSvg({
          xRange: [-1, 6],
          yRange: [-1, 6],
          lines: [
            { points: [[-0.5, 5.625], [4.5, -0.625]], isDashed: false, color: "#E11D48", label: "5x + 4y = 20", labelPos: { x: 2.2, y: 3.2 } },
            { points: [[1, -1], [1, 6]], isDashed: false, color: "#2563EB", label: "x = 1", labelPos: { x: 1.2, y: 5.2 } },
            { points: [[-1, 2], [6, 2]], isDashed: false, color: "#7C3AED", label: "y = 2", labelPos: { x: 4.5, y: 2.3 } }
          ],
          shadedPolygon: [[1, 2], [2.4, 2], [1, 3.75]],
          caption: "5x + 4y ≤ 20, x ≥ 1, y ≥ 2"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded triangular region bounded by the three lines is the feasible solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>3<i>x</i> + 4<i>y</i> &le; 60, &nbsp; <i>x</i> + 3<i>y</i> &le; 30, &nbsp; <i>x</i> &ge; 0, &nbsp; <i>y</i> &ge; 0</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given system:</div>
        <div>(1) <b>3<i>x</i> + 4<i>y</i> &le; 60</b> &nbsp;&nbsp;&nbsp; (2) <b><i>x</i> + 3<i>y</i> &le; 30</b> &nbsp;&nbsp;&nbsp; (3) <b><i>x</i> &ge; 0, <i>y</i> &ge; 0</b></div>
        <div>• <b>Line 3<i>x</i> + 4<i>y</i> = 60:</b> Intercepts (0, 15) and (20, 0). Testing (0, 0): 0 &le; 60 (True).</div>
        <div>• <b>Line <i>x</i> + 3<i>y</i> = 30:</b> Intercepts (0, 10) and (30, 0). Testing (0, 0): 0 &le; 30 (True).</div>
        <div>• <b>Intersection Point:</b> Solving 3<i>x</i> + 4<i>y</i> = 60 and 3<i>x</i> + 9<i>y</i> = 90 &rArr; 5<i>y</i> = 30 &rArr; <i>y</i> = 6, <i>x</i> = 12 &rArr; <b>(12, 6)</b>.</div>
        <div>• <b>Non-negativity:</b> <i>x</i> &ge; 0, <i>y</i> &ge; 0 restricts the solution to the first quadrant.</div>
        <div>• <b>Feasible Region:</b> Convex quadrilateral with vertices O(0, 0), A(20, 0), B(12, 6), C(0, 10).</div>
        ${makeSystemSvg({
          xRange: [-5, 35],
          yRange: [-5, 20],
          lines: [
            { points: [[-2, 16.5], [24, -3]], isDashed: false, color: "#E11D48", label: "3x + 4y = 60", labelPos: { x: 14, y: 11 } },
            { points: [[-3, 11], [33, -1]], isDashed: false, color: "#2563EB", label: "x + 3y = 30", labelPos: { x: 22, y: 4.5 } }
          ],
          shadedPolygon: [[0, 0], [20, 0], [12, 6], [0, 10]],
          caption: "3x + 4y ≤ 60, x + 3y ≤ 30, x ≥ 0, y ≥ 0 (First quadrant polygon)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded quadrilateral with corner points (0,0), (20,0), (12,6), and (0,10) is the solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>2<i>x</i> + <i>y</i> &ge; 4, &nbsp; <i>x</i> + <i>y</i> &le; 3, &nbsp; 2<i>x</i> &minus; 3<i>y</i> &le; 6</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b>2<i>x</i> + <i>y</i> &ge; 4</b> (Line through (0, 4) and (2, 0); origin gives 0 &ge; 4 [False])</div>
        <div>(2) <b><i>x</i> + <i>y</i> &le; 3</b> (Line through (0, 3) and (3, 0); origin gives 0 &le; 3 [True])</div>
        <div>(3) <b>2<i>x</i> &minus; 3<i>y</i> &le; 6</b> (Line through (0, &minus;2) and (3, 0); origin gives 0 &le; 6 [True])</div>
        <div>• <b>Feasible Region:</b> The shaded triangular region bounded by the three lines.</div>
        ${makeSystemSvg({
          xRange: [-1, 5],
          yRange: [-3, 5],
          lines: [
            { points: [[-0.5, 5], [3, -2]], isDashed: false, color: "#E11D48", label: "2x + y = 4", labelPos: { x: 0.5, y: 3.5 } },
            { points: [[-0.5, 3.5], [4, -1]], isDashed: false, color: "#2563EB", label: "x + y = 3", labelPos: { x: 2.5, y: 1.8 } },
            { points: [[-1, -2.67], [4.5, 1]], isDashed: false, color: "#7C3AED", label: "2x - 3y = 6", labelPos: { x: 2.5, y: -1 } }
          ],
          shadedPolygon: [[1, 2], [3, 0], [2.25, -0.5]],
          caption: "2x + y ≥ 4, x + y ≤ 3, 2x - 3y ≤ 6"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The common triangular shaded region satisfies all three inequalities simultaneously.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b><i>x</i> &minus; 2<i>y</i> &le; 3, &nbsp; 3<i>x</i> + 4<i>y</i> &ge; 12, &nbsp; <i>x</i> &ge; 0, &nbsp; <i>y</i> &ge; 1</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b><i>x</i> &minus; 2<i>y</i> &le; 3</b> (Passes through (3, 0) and (0, &minus;1.5); origin gives 0 &le; 3 [True])</div>
        <div>(2) <b>3<i>x</i> + 4<i>y</i> &ge; 12</b> (Passes through (4, 0) and (0, 3); origin gives 0 &ge; 12 [False])</div>
        <div>(3) <b><i>x</i> &ge; 0</b> (Right of Y-axis) &nbsp;&nbsp;&nbsp; (4) <b><i>y</i> &ge; 1</b> (Above horizontal line <i>y</i> = 1)</div>
        <div>• <b>Feasible Region:</b> The shaded area lying on and above <i>y</i> = 1, above 3<i>x</i> + 4<i>y</i> = 12, and above/left of <i>x</i> &minus; 2<i>y</i> = 3.</div>
        ${makeSystemSvg({
          xRange: [-1, 7],
          yRange: [-2, 6],
          lines: [
            { points: [[-1, -2], [6, 1.5]], isDashed: false, color: "#E11D48", label: "x - 2y = 3", labelPos: { x: 4.5, y: 0.2 } },
            { points: [[-0.5, 3.375], [5, -0.75]], isDashed: false, color: "#2563EB", label: "3x + 4y = 12", labelPos: { x: 3.5, y: 2 } },
            { points: [[-1, 1], [7, 1]], isDashed: false, color: "#7C3AED", label: "y = 1", labelPos: { x: 0.5, y: 1.3 } }
          ],
          shadedPolygon: [[0, 3], [2.67, 1], [5, 1], [6, 1.5], [6, 6], [0, 6]],
          caption: "x - 2y ≤ 3, 3x + 4y ≥ 12, x ≥ 0, y ≥ 1"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded feasible region satisfying all constraints is the solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 13 -->
  <div class="q-card">
    <div class="q-title">Question 13</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>4<i>x</i> + 3<i>y</i> &le; 60, &nbsp; <i>y</i> &ge; 2<i>x</i>, &nbsp; <i>x</i> &ge; 3, &nbsp; <i>x</i> &ge; 0, &nbsp; <i>y</i> &ge; 0</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b>4<i>x</i> + 3<i>y</i> &le; 60</b> &nbsp;&nbsp;&nbsp; (2) <b><i>y</i> &ge; 2<i>x</i></b> &nbsp;&nbsp;&nbsp; (3) <b><i>x</i> &ge; 3</b> &nbsp;&nbsp;&nbsp; (4) <b><i>x</i>, <i>y</i> &ge; 0</b></div>
        <div>• <b>Line 4<i>x</i> + 3<i>y</i> = 60:</b> Passes through (0, 20) and (15, 0). Testing (0, 0): 0 &le; 60 (True).</div>
        <div>• <b>Line <i>y</i> = 2<i>x</i>:</b> Passes through (0, 0) and (3, 6). Testing point (15, 0): 0 &ge; 30 (False). Region lies to the left of the line.</div>
        <div>• <b>Line <i>x</i> = 3:</b> Vertical solid line. Region lies to the right (<i>x</i> &ge; 3).</div>
        <div>• <b>Vertices of Polygon:</b> (3, 6), (6, 12), and (3, 16).</div>
        ${makeSystemSvg({
          xRange: [-2, 18],
          yRange: [-2, 22],
          lines: [
            { points: [[-1, 21.33], [16, -1.33]], isDashed: false, color: "#E11D48", label: "4x + 3y = 60", labelPos: { x: 10, y: 10 } },
            { points: [[-0.5, -1], [10, 20]], isDashed: false, color: "#2563EB", label: "y = 2x", labelPos: { x: 7, y: 16 } },
            { points: [[3, -2], [3, 22]], isDashed: false, color: "#7C3AED", label: "x = 3", labelPos: { x: 3.3, y: 2 } }
          ],
          shadedPolygon: [[3, 6], [6, 12], [3, 16]],
          caption: "4x + 3y ≤ 60, y ≥ 2x, x ≥ 3 (Bounded triangular region)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded triangular region with vertices (3, 6), (6, 12), and (3, 16) is the feasible solution set.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 14 -->
  <div class="q-card">
    <div class="q-title">Question 14</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b>3<i>x</i> + 2<i>y</i> &le; 150, &nbsp; <i>x</i> + 4<i>y</i> &le; 80, &nbsp; <i>x</i> &le; 15, &nbsp; <i>y</i> &ge; 0, &nbsp; <i>x</i> &ge; 0</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b>3<i>x</i> + 2<i>y</i> &le; 150</b> (Passes through (50, 0) and (0, 75))</div>
        <div>(2) <b><i>x</i> + 4<i>y</i> &le; 80</b> (Passes through (80, 0) and (0, 20))</div>
        <div>(3) <b><i>x</i> &le; 15</b> (Vertical line at <i>x</i> = 15; region to the left)</div>
        <div>(4) <b><i>x</i> &ge; 0, <i>y</i> &ge; 0</b> (First quadrant)</div>
        <div>• Since <i>x</i> &le; 15, the line 3<i>x</i> + 2<i>y</i> = 150 (which has <i>x</i> &ge; 40 in that region) is redundant for <i>x</i> &le; 15 because at <i>x</i> = 15, <i>y</i> &le; ${frac('80 &minus; 15', '4')} = 16.25, while 3(15) + 2<i>y</i> &le; 150 gives <i>y</i> &le; 52.5.</div>
        <div>• <b>Feasible Region:</b> Quadrilateral in the 1st quadrant with vertices (0, 0), (15, 0), (15, 16.25), and (0, 20).</div>
        ${makeSystemSvg({
          xRange: [-5, 60],
          yRange: [-5, 40],
          lines: [
            { points: [[-2, 20.5], [60, 5]], isDashed: false, color: "#2563EB", label: "x + 4y = 80", labelPos: { x: 30, y: 15 } },
            { points: [[15, -5], [15, 40]], isDashed: false, color: "#E11D48", label: "x = 15", labelPos: { x: 16, y: 30 } }
          ],
          shadedPolygon: [[0, 0], [15, 0], [15, 16.25], [0, 20]],
          caption: "3x + 2y ≤ 150, x + 4y ≤ 80, x ≤ 15, x, y ≥ 0"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded region with corner points (0,0), (15,0), (15, 16.25), and (0,20) is the solution.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 15 -->
  <div class="q-card">
    <div class="q-title">Question 15</div>
    <div class="q-text">
      Solve the following system of inequalities graphically:<br/>
      <b><i>x</i> + 2<i>y</i> &le; 10, &nbsp; <i>x</i> + <i>y</i> &ge; 1, &nbsp; <i>x</i> &minus; <i>y</i> &le; 0, &nbsp; <i>x</i> &ge; 0, &nbsp; <i>y</i> &ge; 0</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given inequalities:</div>
        <div>(1) <b><i>x</i> + 2<i>y</i> &le; 10</b> (Line through (10, 0) and (0, 5); origin satisfies: 0 &le; 10 [True])</div>
        <div>(2) <b><i>x</i> + <i>y</i> &ge; 1</b> (Line through (1, 0) and (0, 1); origin gives 0 &ge; 1 [False])</div>
        <div>(3) <b><i>x</i> &minus; <i>y</i> &le; 0 &rArr; <i>y</i> &ge; <i>x</i></b> (Line through origin; region above line)</div>
        <div>(4) <b><i>x</i> &ge; 0, <i>y</i> &ge; 0</b> (First quadrant)</div>
        <div>• <b>Corner Points of Feasible Region:</b></div>
        <div>• Intersection of <i>x</i> + <i>y</i> = 1 and <i>y</i> = <i>x</i> &rArr; (0.5, 0.5)</div>
        <div>• Intersection of <i>x</i> + 2<i>y</i> = 10 and <i>y</i> = <i>x</i> &rArr; (${frac('10', '3')}, ${frac('10', '3')}) &asymp; (3.33, 3.33)</div>
        <div>• On Y-axis (<i>x</i> = 0): between (0, 1) and (0, 5).</div>
        <div>• Feasible region is the polygon with vertices (0, 1), (0.5, 0.5), (3.33, 3.33), and (0, 5).</div>
        ${makeSystemSvg({
          xRange: [-1, 8],
          yRange: [-1, 7],
          lines: [
            { points: [[-1, 5.5], [8, 1]], isDashed: false, color: "#E11D48", label: "x + 2y = 10", labelPos: { x: 5, y: 3 } },
            { points: [[-0.5, 1.5], [2, -1]], isDashed: false, color: "#2563EB", label: "x + y = 1", labelPos: { x: 1.2, y: 0.2 } },
            { points: [[-1, -1], [6, 6]], isDashed: false, color: "#7C3AED", label: "x - y = 0", labelPos: { x: 4.5, y: 5 } }
          ],
          shadedPolygon: [[0, 1], [0.5, 0.5], [3.33, 3.33], [0, 5]],
          caption: "x + 2y ≤ 10, x + y ≥ 1, x - y ≤ 0, x, y ≥ 0 (Polygon in 1st quadrant)"
        })}
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">The shaded polygon with vertices (0,1), (0.5, 0.5), (3.33, 3.33), and (0,5) represents the solution set.</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise5_3
};
