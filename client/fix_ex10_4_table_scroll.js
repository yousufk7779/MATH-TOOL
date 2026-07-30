const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'data', 'content', 'c7-math-10.ts');
let content = fs.readFileSync(targetFile, 'utf-8');

const oldEx104Q2 = `            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Use the given algebraic expression to complete the table of number patterns:</div>
                <div class="sol-body">
                    <div class="landscape-table-box">
                        <div class="scroll-hint">↔ Scroll/Swipe horizontally for full Landscape Table View</div>
                        <table class="wide-table">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Expression</th>
                                    <th>1st (n=1)</th>
                                    <th>2nd (n=2)</th>
                                    <th>3rd (n=3)</th>
                                    <th>4th (n=4)</th>
                                    <th>5th (n=5)</th>
                                    <th>10th (n=10)</th>
                                    <th>100th (n=100)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>(i)</td>
                                    <td><b>2n - 1</b></td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td>7</td>
                                    <td>9</td>
                                    <td>19</td>
                                    <td><span class="ans-highlight">199</span></td>
                                </tr>
                                <tr>
                                    <td>(ii)</td>
                                    <td><b>3n + 2</b></td>
                                    <td>5</td>
                                    <td>8</td>
                                    <td>11</td>
                                    <td>14</td>
                                    <td><span class="ans-highlight">17</span></td>
                                    <td><span class="ans-highlight">32</span></td>
                                    <td><span class="ans-highlight">302</span></td>
                                </tr>
                                <tr>
                                    <td>(iii)</td>
                                    <td><b>4n + 1</b></td>
                                    <td>5</td>
                                    <td>9</td>
                                    <td>13</td>
                                    <td>17</td>
                                    <td><span class="ans-highlight">21</span></td>
                                    <td><span class="ans-highlight">41</span></td>
                                    <td><span class="ans-highlight">401</span></td>
                                </tr>
                                <tr>
                                    <td>(iv)</td>
                                    <td><b>7n + 20</b></td>
                                    <td>27</td>
                                    <td>34</td>
                                    <td>41</td>
                                    <td>48</td>
                                    <td><span class="ans-highlight">55</span></td>
                                    <td><span class="ans-highlight">90</span></td>
                                    <td><span class="ans-highlight">720</span></td>
                                </tr>
                                <tr>
                                    <td>(v)</td>
                                    <td><b>n² + 1</b></td>
                                    <td>2</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>17</td>
                                    <td><span class="ans-highlight">26</span></td>
                                    <td><span class="ans-highlight">101</span></td>
                                    <td><span class="ans-highlight">10001</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>`;

const newEx104Q2 = `            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Use the given algebraic expression to complete the table of number patterns:</div>
                <div class="sol-body">
                    <!-- Scrollable Table Section -->
                    <div style="width: 100%; box-sizing: border-box; overflow-x: scroll; -webkit-overflow-scrolling: touch; touch-action: pan-x; display: block; margin: 15px 0; border: 2px solid rgba(253, 200, 48, 0.5); border-radius: 12px; background: #161625; padding: 12px;">
                        <div style="font-size: 0.85em; color: #FDC830; margin-bottom: 12px; font-weight: bold; text-align: center; background: rgba(253, 200, 48, 0.15); padding: 8px; border-radius: 6px;">
                            ↔ Scroll/Swipe horizontally to view full table
                        </div>
                        <table style="min-width: 680px; width: max-content; border-collapse: collapse; display: table;">
                            <thead>
                                <tr style="background: rgba(253, 200, 48, 0.25);">
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">S.No.</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">Expression</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">1st (n=1)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">2nd (n=2)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">3rd (n=3)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">4th (n=4)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">5th (n=5)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">10th (n=10)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">100th (n=100)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(i)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>2n - 1</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">1</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">3</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">5</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">7</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">9</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">19</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">199</span></td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(ii)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>3n + 2</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">5</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">8</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">11</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">14</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">17</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">32</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">302</span></td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(iii)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>4n + 1</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">5</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">9</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">13</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">17</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">21</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">41</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">401</span></td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(iv)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>7n + 20</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">27</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">34</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">41</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">48</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">55</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">90</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">720</span></td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(v)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>n² + 1</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">2</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">5</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">10</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">17</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">26</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">101</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">10001</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Step-by-Step Vertical Breakdown Cards -->
                    <div class="sol-step" style="margin-top: 25px;"><b style="color:#FDC830; font-size: 1.1em;">Step-wise Solution Breakdown for Each Expression:</b></div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(i) Expression: 2n - 1</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 2(1) - 1 = 1</div>
                        <div class="sol-step">• 2nd term (n=2): 2(2) - 1 = 3</div>
                        <div class="sol-step">• 3rd term (n=3): 2(3) - 1 = 5</div>
                        <div class="sol-step">• 4th term (n=4): 2(4) - 1 = 7</div>
                        <div class="sol-step">• 5th term (n=5): 2(5) - 1 = 9</div>
                        <div class="sol-step">• 10th term (n=10): 2(10) - 1 = 19</div>
                        <div class="sol-step">• 100th term (n=100): 2(100) - 1 = 200 - 1 = <span class="ans-highlight">199</span></div>
                    </div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(ii) Expression: 3n + 2</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 3(1) + 2 = 5</div>
                        <div class="sol-step">• 2nd term (n=2): 3(2) + 2 = 8</div>
                        <div class="sol-step">• 3rd term (n=3): 3(3) + 2 = 11</div>
                        <div class="sol-step">• 4th term (n=4): 3(4) + 2 = 14</div>
                        <div class="sol-step">• 5th term (n=5): 3(5) + 2 = 15 + 2 = <span class="ans-highlight">17</span></div>
                        <div class="sol-step">• 10th term (n=10): 3(10) + 2 = 30 + 2 = <span class="ans-highlight">32</span></div>
                        <div class="sol-step">• 100th term (n=100): 3(100) + 2 = 300 + 2 = <span class="ans-highlight">302</span></div>
                    </div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(iii) Expression: 4n + 1</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 4(1) + 1 = 5</div>
                        <div class="sol-step">• 2nd term (n=2): 4(2) + 1 = 9</div>
                        <div class="sol-step">• 3rd term (n=3): 4(3) + 1 = 13</div>
                        <div class="sol-step">• 4th term (n=4): 4(4) + 1 = 17</div>
                        <div class="sol-step">• 5th term (n=5): 4(5) + 1 = 20 + 1 = <span class="ans-highlight">21</span></div>
                        <div class="sol-step">• 10th term (n=10): 4(10) + 1 = 40 + 1 = <span class="ans-highlight">41</span></div>
                        <div class="sol-step">• 100th term (n=100): 4(100) + 1 = 400 + 1 = <span class="ans-highlight">401</span></div>
                    </div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(iv) Expression: 7n + 20</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 7(1) + 20 = 27</div>
                        <div class="sol-step">• 2nd term (n=2): 7(2) + 20 = 34</div>
                        <div class="sol-step">• 3rd term (n=3): 7(3) + 20 = 41</div>
                        <div class="sol-step">• 4th term (n=4): 7(4) + 20 = 48</div>
                        <div class="sol-step">• 5th term (n=5): 7(5) + 20 = 35 + 20 = <span class="ans-highlight">55</span></div>
                        <div class="sol-step">• 10th term (n=10): 7(10) + 20 = 70 + 20 = <span class="ans-highlight">90</span></div>
                        <div class="sol-step">• 100th term (n=100): 7(100) + 20 = 700 + 20 = <span class="ans-highlight">720</span></div>
                    </div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(v) Expression: n² + 1</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 1² + 1 = 2</div>
                        <div class="sol-step">• 2nd term (n=2): 2² + 1 = 5</div>
                        <div class="sol-step">• 3rd term (n=3): 3² + 1 = 10</div>
                        <div class="sol-step">• 4th term (n=4): 4² + 1 = 17</div>
                        <div class="sol-step">• 5th term (n=5): 5² + 1 = 25 + 1 = <span class="ans-highlight">26</span></div>
                        <div class="sol-step">• 10th term (n=10): 10² + 1 = 100 + 1 = <span class="ans-highlight">101</span></div>
                        <div class="sol-step">• 100th term (n=100): 100² + 1 = 10000 + 1 = <span class="ans-highlight">10001</span></div>
                    </div>
                </div>
            </div>`;

content = content.replace(oldEx104Q2, newEx104Q2);
fs.writeFileSync(targetFile, content, 'utf-8');
console.log("Successfully updated Ex 10.4 Q2 in c7-math-10.ts with inline scroll styles & vertical step breakdown!");
