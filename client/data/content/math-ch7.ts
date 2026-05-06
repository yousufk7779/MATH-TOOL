import { ChapterContent } from "../types";

export const mathCh7: ChapterContent = {
    "id": "ch7",
    "number": 7,
    "title": "Coordinate Geometry",
    "introduction": "Coordinate geometry acts as an analytical bridge linking algebraic equations to geometry by plotting points, lines, and curves on a 2D plane.",
    "definitions": [
        {
            "term": "<div class='content-text'>Origin (0,0)",
            "description": "The intersection of axes.</div>"
        },
        {
            "term": "<div class='content-text'>Abscissa",
            "description": "The x-coordinate.</div>"
        },
        {
            "term": "<div class='content-text'>Ordinate",
            "description": "The y-coordinate.</div>"
        },
        {
            "term": "<div class='content-text'>Collinear Points",
            "description": "Three or more points lying on a single straight line.</div>"
        }
    ],
    "keyPoints": [
        "<div class='content-text'>The Distance Formula: d = √[(x2-x1)² + (y2-y1)²].</div>",
        "<div class='content-text'>The Section Formula: Finding the coordinates of a point dividing a line segment in an m:n ratio internally.</div>"
    ],
    "formulas": [],
    "crux": [
        "<div class='content-text'>Using coordinates, we can accurately prove geometrical theorem without visually drawing the shape, simply relying on numbers and formulas.</div>"
    ],
    "summary": [
        "<div class='content-text'>Plotting maps, GPS tracking, and digital drawing heavily rely on coordinate geometry to calculate spatial distances and section proportions.</div>",
        "<div class='content-text'>Carefully read and understand every problem statement before jumping into the solution.</div>",
        "<div class='content-text'>A strong grasp of the core concepts is the key to solving complex problems easily.</div>",
        "<div class='content-text'>Make a habit of practicing the solved examples to get familiar with standard solution formats.</div>"
    ],
    "examples": [
        {
            "id": "q1",
            "number": "1",
            "question": "<span style=\"font-weight: normal;\">Do the points (3, 2), (-2, -3) and (2, 3) form a triangle? If so, name the type of triangle formed.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Let P(3, 2), Q(-2, -3) and R(2, 3).",
                "PQ = √((-2-3)² + (-3-2)²) = √((-5)² + (-5)²) = √(50) approx 7.07",
                "QR = √((2-(-2))² + (3-(-3))²) = √(4² + 6²) = √(16+36) = √(52) approx 7.21",
                "PR = √((2-3)² + (3-2)²) = √((-1)² + 1²) = √2 approx 1.41",
                "Since sums of any two sides > third, they form a triangle.",
                "Also PQ² + PR² = 50 + 2 = 52 = QR².",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Triangle Type = Right-Angled Triangle</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Triangle Type = Right-Angled Triangle</span>"
        },
        {
            "id": "q2",
            "number": "2",
            "question": "<span style=\"font-weight: normal;\">Show that the points (1, 7), (4, 2), (-1, -1) and (-4, 4) form a square.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Let A(1, 7), B(4, 2), C(-1, -1), D(-4, 4).",
                "AB = √((4-1)² + (2-7)²) = √(9+25) = √(34)",
                "BC = √((-1-4)² + (-1-2)²) = √(25+9) = √(34)",
                "CD = √((-4-(-1))² + (4-(-1))²) = √(9+25) = √(34)",
                "DA = √((1-(-4))² + (7-4)²) = √(25+9) = √(34)",
                "Diagonals: AC = √((-1-1)² + (-1-7)²) = √(4+64) = √(68)",
                "BD = √((-4-4)² + (4-2)²) = √(64+4) = √(68)",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Quadrilateral Type = Square</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Quadrilateral Type = Square</span>"
        },
        {
            "id": "q3",
            "number": "3",
            "question": "<span style=\"font-weight: normal;\">Fig. 7.6 shows the arrangement of desks in a classroom. Ashima, Bharti and Camella are seated at A(3, 1), B(6, 4) and C(8, 6) respectively. Do you think they are seated in a line? Give reasons for your answer.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Using Distance Formula:",
                "AB = √((6-3)² + (4-1)²) = √(3² + 3²) = √(9+9) = √(18) = 3√2",
                "BC = √((8-6)² + (6-4)²) = √(2² + 2²) = √(4+4) = √8 = 2√2",
                "AC = √((8-3)² + (6-1)²) = √(5² + 5²) = √(25+25) = √(50) = 5√2",
                "Since AB + BC = 3√2 + 2√2 = 5√2 = AC, the points A, B and C are collinear.",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Collinearity = Points are Collinear</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Collinearity = Points are Collinear</span>"
        },
        {
            "id": "q4",
            "number": "4",
            "question": "<span style=\"font-weight: normal;\">Find a relation between x and y such that the point (x, y) is equidistant from the points (7, 1) and (3, 5).</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Let P(x, y) be equidistant from A(7, 1) and B(3, 5).",
                "We are given AP = BP, so AP² = BP².",
                "(x - 7)² + (y - 1)² = (x - 3)² + (y - 5)²",
                "x² - 14x + 49 + y² - 2y + 1 = x² - 6x + 9 + y² - 10y + 25",
                "x² - 14x + y² - 2y + 50 = x² - 6x + y² - 10y + 34",
                "-14x + 6x - 2y + 10y + 50 - 34 = 0",
                "-8x + 8y + 16 = 0",
                "Dividing by -8: x - y - 2 = 0 or x - y = 2.",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Relation = x - 3y + 7 = 0</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Relation = x - 3y + 7 = 0</span>"
        },
        {
            "id": "q5",
            "number": "5",
            "question": "<span style=\"font-weight: normal;\">Find a point on the y-axis which is equidistant from the points A(6, 5) and B(-4, 3).</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "We know that a point on the y-axis is of the form (0, y).",
                "Let the point P(0, y) be equidistant from A(6, 5) and B(-4, 3).",
                "PA² = PB²",
                "(0 - 6)² + (y - 5)² = (0 - (-4))² + (y - 3)²",
                "36 + y² - 10y + 25 = 16 + y² - 6y + 9",
                "61 - 10y = 25 - 6y",
                "-10y + 6y = 25 - 61",
                "-4y = -36 ⇒ y = 9",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Values of y = -3, 9</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Values of y = -3, 9</span>"
        },
        {
            "id": "q6",
            "number": "6",
            "question": "<span style=\"font-weight: normal;\">Find the coordinates of the point which divides the line segment joining the points (4, -3) and (8, 5) in the ratio 3 : 1 internally.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Let P(x, y) divide AB in 3:1.",
                "x = 3(8) + 1(4)/3+1 = 24+4/4 = 28/4 = 7",
                "y = 3(5) + 1(-3)/3+1 = 15-3/4 = 12/4 = 3",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of P = (4, -3)</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of P = (4, -3)</span>"
        },
        {
            "id": "q7",
            "number": "7",
            "question": "<span style=\"font-weight: normal;\">In what ratio does the point (-4, 6) divide the line segment joining the points A(-6, 10) and B(3, -8)?</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Let the ratio be m_1 : m_2. Using Section Formula for x-coordinate:",
                "-4 = m_1(3) + m_2(-6)/m_1 + m_2",
                "-4(m_1 + m_2) = 3m_1 - 6m_2",
                "-4m_1 - 4m_2 = 3m_1 - 6m_2",
                "2m_2 = 7m_1 ⇒ m_1/m_2 = 2/7",
                "Verification for y-coordinate: 2(-8) + 7(10)/2+7 = -16 + 70/9 = 54/9 = 6. (Matches).",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Ratio = 2:7</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Ratio = 2:7</span>"
        },
        {
            "id": "q8",
            "number": "8",
            "question": "<span style=\"font-weight: normal;\">Find the coordinates of the points of trisection (i.e., points dividing in three equal parts) of the line segment joining the points A(2, -2) and B(-7, 4).</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Let P and Q be the points of trisection of AB.",
                "Case 1: P divides AB in ratio 1:2.",
                "P = ( 1(-7) + 2(2)/1+2, 1(4) + 2(-2)/1+2 (",
                "P = ( -7+4/3, 4-4/3 ( = ( -3/3, 0 ( = (-1, 0)",
                "Case 2: Q divides AB in ratio 2:1.",
                "Q = ( 2(-7) + 1(2)/2+1, 2(4) + 1(-2)/2+1 (",
                "Q = ( -14+2/3, 8-2/3 ( = ( -12/3, 6/3 ( = (-4, 2)",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Trisection Points = (0, -4) and (-2, -5)</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Trisection Points = (0, -4) and (-2, -5)</span>"
        },
        {
            "id": "q9",
            "number": "9",
            "question": "<span style=\"font-weight: normal;\">Find the ratio in which the y-axis divides the line segment joining the points (5, -6) and (-1, -4). Also find the point of intersection.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Let the ratio be k : 1. The point on y-axis is (0, y).",
                "x-coordinate = 0.",
                "k(-1) + 1(5)/k+1 = 0",
                "-k + 5 = 0 ⇒ k = 5. So ratio is 5:1.",
                "Now finding y-coordinate:",
                "y = 5(-4) + 1(-6)/5+1 = -20 - 6/6 = -26/6 = -13/3",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Ratio = 1:1, Coordinates = (0, -13/3)</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Ratio = 1:1, Coordinates = (0, -13/3)</span>"
        },
        {
            "id": "q10",
            "number": "10",
            "question": "<span style=\"font-weight: normal;\">If the points A(6, 1), B(8, 2), C(9, 4) and D(7, 3) are the vertices of a parallelogram, taken in order, find the value of p.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
            "solution": [
                "Diagonals of a parallelogram bisect each other. So midpoint of AC = midpoint of BD.",
                "Midpoint of AC = ( 6+9/2, 1+4/2 ( = (7.5, 2.5)",
                "Midpoint of BD = ( 8+p/2, 2+3/2 ( = ( 8+p/2, 2.5 (",
                "Equating x-coordinates:",
                "8+p/2 = 7.5 ⇒ 8+p = 15 ⇒ p = 7.",
                "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of P = (2, 5/2)</span>"
            ],
            "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of P = (2, 5/2)</span>"
        }
    ],
    "exercises": [
        {
            "id": "ex71_",
            "name": "Exercise 7.1",
            "questions": [
                {
                    "id": "ex7_1_q1_1",
                    "number": "1",
                    "question": "<span style=\"font-weight: normal;\">Find the distance between the following pairs of points: (i) (2, 3), (4, 1)</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
                    "solution": [
                        "Let P(2, 3) and Q(4, 1).",
                        "Distance PQ = √((x_2 - x_1)² + (y_2 - y_1)²)",
                        "= √((4 - 2)² + (1 - 3)²)",
                        "= √(2² + (-2)²)",
                        "= √(4 + 4)",
                        "= √8 = √(4 × 2) = 2√2",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = 4√2 units</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = 4√2 units</span>"
                },
                {
                    "id": "ex7_1_q1_2",
                    "number": "1",
                    "question": "<span style=\"font-weight: normal;\">Find the distance between the following pairs of points: (ii) (-5, 7), (-1, 3)</span>",
                    "image": "",
                    "solution": [
                        "Let P(-5, 7) and Q(-1, 3).",
                        "Distance PQ = √((-1 - (-5))² + (3 - 7)²)",
                        "= √(4² + (-4)²)",
                        "= √(16 + 16)",
                        "= √(32) = √(16 × 2) = 4√2",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = 4√2 units</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = 4√2 units</span>"
                },
                {
                    "id": "ex7_1_q1_3",
                    "number": "1",
                    "question": "<span style=\"font-weight: normal;\">Find the distance between the following pairs of points: (iii) (a, b), (-a, -b)</span>",
                    "image": "",
                    "solution": [
                        "Let P(a, b) and Q(-a, -b).",
                        "Distance PQ = √((-a - a)² + (-b - b)²)",
                        "= √((-2a)² + (-2b)²)",
                        "= √(4a² + 4b²)",
                        "= √(4(a² + b²)) = 2√(a² + b²)",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = 2√(a² + b²) units</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = 2√(a² + b²) units</span>"
                },
                {
                    "id": "ex7_1_q2",
                    "number": "2",
                    "question": "<span style=\"font-weight: normal;\">Find the distance between the points (0, 0) and (36, 15). Can you now find the distance between the two towns A and B discussed in Section 7.2?</span>",
                    "image": "",
                    "solution": [
                        "Let A(0, 0) and B(36, 15).",
                        "Distance AB = √((36 - 0)² + (15 - 0)²)",
                        "= √(36² + 15²)",
                        "= √(1296 + 225)",
                        "= √(1521) = 39",
                        "Yes, the distance between the two towns A and B is 39 km.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = 39 units</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = 39 units</span>"
                },
                {
                    "id": "ex7_1_q3",
                    "number": "3",
                    "question": "<span style=\"font-weight: normal;\">Determine if the points (1, 5), (2, 3) and (-2, -11) are collinear.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
                    "solution": [
                        "Let A(1, 5), B(2, 3), C(-2, -11).",
                        "AB = √((2-1)² + (3-5)²) = √(1² + (-2)²) = √(1 + 4) = √5 approx 2.23",
                        "BC = √((-2-2)² + (-11-3)²) = √((-4)² + (-14)²) = √(16 + 196) = √(212) approx 14.56",
                        "AC = √((-2-1)² + (-11-5)²) = √((-3)² + (-16)²) = √(9 + 256) = √(265) approx 16.27",
                        "Check if sum of two smaller equals largest:",
                        "AB + BC = 2.23 + 14.56 = 16.79",
                        "This is not equal to AC (16.27).",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Collinearity = Points are not collinear</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Collinearity = Points are not collinear</span>"
                },
                {
                    "id": "ex7_1_q4",
                    "number": "4",
                    "question": "<span style=\"font-weight: normal;\">Check whether (5, -2), (6, 4) and (7, -2) are the vertices of an isosceles triangle.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
                    "solution": [
                        "Let A(5, -2), B(6, 4), C(7, -2).",
                        "AB = √((6-5)² + (4-(-2))²) = √(1² + 6²) = √(1 + 36) = √(37)",
                        "BC = √((7-6)² + (-2-4)²) = √(1² + (-6)²) = √(1 + 36) = √(37)",
                        "AC = √((7-5)² + (-2-(-2))²) = √(2² + 0²) = √4 = 2",
                        "Since AB = BC = √(37), two sides are equal.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Isosceles Triangle = Yes</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Isosceles Triangle = Yes</span>"
                },
                {
                    "id": "ex7_1_q5",
                    "number": "5",
                    "question": "<span style=\"font-weight: normal;\">In a classroom, 4 friends are seated at points A(3, 4), B(6, 7), C(9, 4) and D(6, 1). Champa and Chameli walk into the class and after observing for a few minutes Champa asks Chameli, “Don’t you think ABCD is a square?” Chameli disagrees. Using distance formula, find which of them is correct.</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
                    "solution": [
                        "A(3, 4), B(6, 7), C(9, 4), D(6, 1).",
                        "AB = √((6-3)² + (7-4)²) = √(3² + 3²) = √(18) = 3√2",
                        "BC = √((9-6)² + (4-7)²) = √(3² + (-3)²) = √(18) = 3√2",
                        "CD = √((6-9)² + (1-4)²) = √((-3)² + (-3)²) = √(18) = 3√2",
                        "DA = √((3-6)² + (4-1)²) = √((-3)² + 3²) = √(18) = 3√2",
                        "All sides are equal. Now check diagonals.",
                        "AC = √((9-3)² + (4-4)²) = √(6² + 0²) = √(36) = 6",
                        "BD = √((6-6)² + (1-7)²) = √(0² + (-6)²) = √(36) = 6",
                        "Diagonals are also equal. Since all sides and both diagonals are equal, ABCD is a square.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Correct Person = Champa is correct</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Correct Person = Champa is correct</span>"
                },
                {
                    "id": "ex7_1_q6_1",
                    "number": "6",
                    "question": "<span style=\"font-weight: normal;\">Name the type of quadrilateral formed, if any, by the following points, and give reasons for your answer: (i) (-1, -2), (1, 0), (-1, 2), (-3, 0)</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
                    "solution": [
                        "Let A(-1,-2), B(1,0), C(-1,2), D(-3,0).",
                        "AB = √((1-(-1))² + (0-(-2))²) = √(2² + 2²) = √8 = 2√2",
                        "BC = √((-1-1)² + (2-0)²) = √((-2)² + 2²) = √8 = 2√2",
                        "CD = √((-3-(-1))² + (0-2)²) = √((-2)² + (-2)²) = √8 = 2√2",
                        "DA = √((-1-(-3))² + (-2-0)²) = √(2² + (-2)²) = √8 = 2√2",
                        "All sides are equal. Now checking diagonals:",
                        "AC = √((-1-(-1))² + (2-(-2))²) = √(0² + 4²) = 4",
                        "BD = √((-3-1)² + (0-0)²) = √((-4)² + 0²) = 4",
                        "Diagonals are equal.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Quadrilateral Type = Square</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Quadrilateral Type = Square</span>"
                },
                {
                    "id": "ex7_1_q6_2",
                    "number": "6",
                    "question": "<span style=\"font-weight: normal;\">Name the type of quadrilateral formed, if any, by the following points, and give reasons for your answer: (ii) (-3, 5), (3, 1), (0, 3), (-1, -4)</span>",
                    "image": "",
                    "solution": [
                        "Let A(-3,5), B(3,1), C(0,3), D(-1,-4).",
                        "AB = √((3-(-3))² + (1-5)²) = √(6² + (-4)²) = √(36 + 16) = √(52) = 2√(13)",
                        "BC = √((0-3)² + (3-1)²) = √((-3)² + 2²) = √(9 + 4) = √(13)",
                        "AC = √((0-(-3))² + (3-5)²) = √(3² + (-2)²) = √(9 + 4) = √(13)",
                        "Here, AC + BC = √(13) + √(13) = 2√(13) = AB.",
                        "Since sums of two distances equals the third, the points are collinear.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Quadrilateral Type = None (Points are collinear)</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Quadrilateral Type = None (Points are collinear)</span>"
                },
                {
                    "id": "ex7_1_q6_3",
                    "number": "6",
                    "question": "<span style=\"font-weight: normal;\">Name the type of quadrilateral formed, if any, by the following points, and give reasons for your answer: (iii) (4, 5), (7, 6), (4, 3), (1, 2)</span>",
                    "image": "",
                    "solution": [
                        "Let A(4,5), B(7,6), C(4,3), D(1,2).",
                        "AB = √(10), BC = 3√2, CD = √(10), DA = 3√2.",
                        "Opposite sides are equal. It is a parallelogram or rectangle.",
                        "Check diagonals:",
                        "AC = 2, BD = √(52).",
                        "Diagonals are unequal.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Quadrilateral Type = Parallelogram</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Quadrilateral Type = Parallelogram</span>"
                },
                {
                    "id": "ex7_1_q7",
                    "number": "7",
                    "question": "<span style=\"font-weight: normal;\">Find the point on the x-axis which is equidistant from (2, -5) and (-2, 9).</span><br/><br/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; display: block; margin: 10px auto;\" />",
                    "solution": [
                        "Let point be P(x, 0). A(2, -5), B(-2, 9).",
                        "PA = PB ⇒ PA² = PB²",
                        "(x - 2)² + (0 - (-5))² = (x - (-2))² + (0 - 9)²",
                        "(x - 2)² + 25 = (x + 2)² + 81",
                        "x² - 4x + 4 + 25 = x² + 4x + 4 + 81",
                        "-4x - 4x = 81 - 25",
                        "-8x = 56 ⇒ x = -7",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Point on x-axis = (-7, 0)</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Point on x-axis = (-7, 0)</span>"
                },
                {
                    "id": "ex7_1_q8",
                    "number": "8",
                    "question": "<span style=\"font-weight: normal;\">Find the values of y for which the distance between the points P(2, -3) and Q(10, y) is 10 units.</span>",
                    "image": "",
                    "solution": [
                        "Given PQ = 10 ⇒ PQ² = 100.",
                        "(10 - 2)² + (y - (-3))² = 100",
                        "8² + (y + 3)² = 100",
                        "64 + (y + 3)² = 100 ⇒ (y + 3)² = 36",
                        "y + 3 = ± 6",
                        "Case 1: y + 3 = 6 ⇒ y = 3.",
                        "Case 2: y + 3 = -6 ⇒ y = -9.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Values of y = -9, 3</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Values of y = -9, 3</span>"
                },
                {
                    "id": "ex7_1_q9",
                    "number": "9",
                    "question": "<span style=\"font-weight: normal;\">If Q(0, 1) is equidistant from P(5, -3) and R(x, 6), find the values of x. Also find the distances QR and PR.</span>",
                    "image": "",
                    "solution": [
                        "QP = QR ⇒ QP² = QR².",
                        "(5 - 0)² + (-3 - 1)² = (x - 0)² + (6 - 1)²",
                        "25 + 16 = x² + 25 ⇒ x² = 16 ⇒ x = ± 4.",
                        "Case 1 (x=4): QR = √(41), PR = √((4-5)² + (6+3)²) = √(1 + 81) = √(82).",
                        "Case 2 (x=-4): QR = √(41), PR = √((-4-5)² + (6+3)²) = √(81 + 81) = √(162) = 9√2.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">x = ±4, QR = √41, PR = √82 or 9√2</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">x = ±4, QR = √41, PR = √82 or 9√2</span>"
                },
                {
                    "id": "ex7_1_q10",
                    "number": "10",
                    "question": "<span style=\"font-weight: normal;\">Find a relation between x and y such that the point (x, y) is equidistant from the point (3, 6) and (-3, 4).</span>",
                    "image": "",
                    "solution": [
                        "Let P(x, y), A(3, 6), B(-3, 4). PA² = PB².",
                        "(x - 3)² + (y - 6)² = (x + 3)² + (y - 4)²",
                        "x² - 6x + 9 + y² - 12y + 36 = x² + 6x + 9 + y² - 8y + 16",
                        "-6x - 12y + 45 = 6x - 8y + 25",
                        "-12x - 4y + 20 = 0",
                        "3x + y - 5 = 0",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Relation = 3x + y - 5 = 0</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Relation = 3x + y - 5 = 0</span>"
                }
            ]
        },
        {
            "id": "ex72_",
            "name": "Exercise 7.2",
            "questions": [
                {
                    "id": "ex7_2_q1",
                    "number": "1",
                    "question": "<span style=\"font-weight: normal;\">Find the coordinates of the point which divides the join of (-1, 7) and (4, -3) in the ratio 2 : 3.</span>",
                    "image": "",
                    "solution": [
                        "Let P(x, y) divide AB in 2:3. A(-1, 7), B(4, -3).",
                        "Coordinates x = m_1x_2 + m_2x_1/m_1 + m_2 = 2(4) + 3(-1)/2 + 3",
                        "x = 8 - 3/5 = 5/5 = 1",
                        "y = m_1y_2 + m_2y_1/m_1 + m_2 = 2(-3) + 3(7)/2 + 3",
                        "y = -6 + 21/5 = 15/5 = 3",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of Point = (1, 3)</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of Point = (1, 3)</span>"
                },
                {
                    "id": "ex7_2_q2",
                    "number": "2",
                    "question": "<span style=\"font-weight: normal;\">Find the coordinates of the points of trisection of the line segment joining (4, -1) and (-2, -3).</span>",
                    "image": "",
                    "solution": [
                        "Let A(4, -1) and B(-2, -3). Points P, Q trisect AB.",
                        "P divides AB in 1:2.",
                        "x_P = 1(-2) + 2(4)/3 = -2 + 8/3 = 2",
                        "y_P = 1(-3) + 2(-1)/3 = -3 - 2/3 = -5/3",
                        "Q divides AB in 2:1.",
                        "x_Q = 2(-2) + 1(4)/3 = -4 + 4/3 = 0",
                        "y_Q = 2(-3) + 1(-1)/3 = -6 - 1/3 = -7/3",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Trisection Points = (2, -5/3), (0, -7/3)</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Trisection Points = (2, -5/3), (0, -7/3)</span>"
                },
                {
                    "id": "ex7_2_q3",
                    "number": "3",
                    "question": "<span style=\"font-weight: normal;\">To conduct Sports Day activities, in your rectangular shaped school ground ABCD, lines have been drawn with chalk powder at a distance of 1m each. 100 flower pots have been placed at a distance of 1m from each other along AD, as shown in Fig. 7.12. Niharika runs 1/4th the distance AD on the 2nd line and posts a green flag. Preet runs 1/5th the distance AD on the eighth line and posts a red flag. What is the distance between both the flags? If Rashmi has to post a blue flag exactly halfway between the line segment joining the two flags, where should she post her flag?</span>",
                    "image": "",
                    "solution": [
                        "Given: AD = 100m.",
                        "Niharika's Green Flag (G): On 2nd line, x_1 = 2. Distance = 1/4 × 100 = 25m. So, y_1 = 25. G(2, 25).",
                        "Preet's Red Flag (R): On 8th line, x_2 = 8. Distance = 1/5 × 100 = 20m. So, y_2 = 20. R(8, 20).",
                        "Distance between flags (GR):",
                        "GR = √((8-2)² + (20-25)²) = √(6² + (-5)²) = √(36 + 25) = √(61)m.",
                        "Rashmi's Blue Flag (B) is halfway:",
                        "x = 2+8/2 = 5. y = 25+20/2 = 22.5.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = √61 m, Position = 5th line at 22.5 m</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Distance = √61 m, Position = 5th line at 22.5 m</span>"
                },
                {
                    "id": "ex7_2_q4",
                    "number": "4",
                    "question": "<span style=\"font-weight: normal;\">Determine the ratio in which the line segment joining the points (-3, 10) and (6, -8) is divided by (-1, 6).</span>",
                    "image": "",
                    "solution": [
                        "Let ratio be k:1. P(-1, 6).",
                        "x = k(6) + 1(-3)/k + 1 = -1 ⇒ 6k - 3 = -k - 1",
                        "7k = 2 ⇒ k = 2/7",
                        "Verify with y: 2/7(-8) + 10/2/7 + 1 = -16/7 + 70/7/9/7 = 54/9 = 6 (True).",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Ratio = 2:7</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Ratio = 2:7</span>"
                },
                {
                    "id": "ex7_2_q5",
                    "number": "5",
                    "question": "<span style=\"font-weight: normal;\">Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division.</span>",
                    "image": "",
                    "solution": [
                        "Let ratio be k:1. Point on x-axis: P(x, 0).",
                        "y = k(5) + 1(-5)/k + 1 = 0 ⇒ 5k - 5 = 0 ⇒ k = 1.",
                        "Ratio is 1:1.",
                        "x = 1(-4) + 1(1)/2 = -3/2.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Ratio = 1:1, Point = (-3/2, 0)</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Ratio = 1:1, Point = (-3/2, 0)</span>"
                },
                {
                    "id": "ex7_2_q6",
                    "number": "6",
                    "question": "<span style=\"font-weight: normal;\">If (1, 2), (4, y), (x, 6) and (3, 5) are the vertices of a parallelogram taken in order, find x and y.</span>",
                    "image": "",
                    "solution": [
                        "Diagonals bisect each other. Midpoint AC = Midpoint BD.",
                        "(1+x/2, 2+6/2( = (4+3/2, y+5/2(",
                        "1+x/2 = 7/2 ⇒ 1 + x = 7 ⇒ x = 6.",
                        "8/2 = y+5/2 ⇒ 8 = y + 5 ⇒ y = 3.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">x = 6, y = 3</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">x = 6, y = 3</span>"
                },
                {
                    "id": "ex7_2_q7",
                    "number": "7",
                    "question": "<span style=\"font-weight: normal;\">Find the coordinates of a point A, where AB is the diameter of a circle whose centre is (2, -3) and B is (1, 4).</span>",
                    "image": "",
                    "solution": [
                        "Let A(x, y). Centre C(2, -3) is midpoint of AB.",
                        "x+1/2 = 2 ⇒ x + 1 = 4 ⇒ x = 3.",
                        "y+4/2 = -3 ⇒ y + 4 = -6 ⇒ y = -10.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of A = (3, -10)</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of A = (3, -10)</span>"
                },
                {
                    "id": "ex7_2_q8",
                    "number": "8",
                    "question": "<span style=\"font-weight: normal;\">If A and B are (-2, -2) and (2, -4), respectively, find the coordinates of P such that AP = 3/7 AB and P lies on the line segment AB.</span>",
                    "image": "",
                    "solution": [
                        "AP = 3/7AB ⇒ AP:PB = 3:4.",
                        "x = 3(2) + 4(-2)/7 = 6-8/7 = -2/7.",
                        "y = 3(-4) + 4(-2)/7 = -12-8/7 = -20/7.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of P = (-2/7, -20/7)</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Coordinates of P = (-2/7, -20/7)</span>"
                },
                {
                    "id": "ex7_2_q9",
                    "number": "9",
                    "question": "<span style=\"font-weight: normal;\">Find the coordinates of the points which divide the line segment joining A(-2, 2) and B(2, 8) into four equal parts.</span>",
                    "image": "",
                    "solution": [
                        "Midpoint Q of AB = (0, 5).",
                        "Midpoint P of AQ = (-1, 3.5) or (-1, 7/2).",
                        "Midpoint R of QB = (1, 6.5) or (1, 13/2).",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Points = (-1, 7/2), (0, 5), (1, 13/2)</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Points = (-1, 7/2), (0, 5), (1, 13/2)</span>"
                },
                {
                    "id": "ex7_2_q10",
                    "number": "10",
                    "question": "<span style=\"font-weight: normal;\">Find the area of a rhombus if its vertices are (3, 0), (4, 5), (-1, 4) and (-2, -1) taken in order. [Hint : Area of a rhombus = 1/2 (product of its diagonals)]</span>",
                    "image": "",
                    "solution": [
                        "AC = √((-1-3)² + (4-0)²) = √(16+16) = √(32) = 4√2.",
                        "BD = √((-2-4)² + (-1-5)²) = √(36+36) = √(72) = 6√2.",
                        "Area = 1/2 × 4√2 × 6√2 = 1/2 × 24 × 2 = 24.",
                        "<span style=\"color: #7986CB; font-weight: normal ;\">Area of Rhombus = 24 sq. units</span>"
                    ],
                    "answer": "<span style=\"color: #7986CB; font-weight: normal ;\">Area of Rhombus = 24 sq. units</span>"
                }
            ]
        }
    ],
    "mcqs": [
        {
            "id": "mcq1",
            "question": "<span style=\"font-weight: normal;\">The distance of the point P(2, 3) from the x-axis is</span>",
            "options": [
                "(A) 2",
                "(B) 3",
                "(C) 1",
                "(D) 5"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq2",
            "question": "<span style=\"font-weight: normal;\">The distance between the points A(0, 6) and B(0, -2) is</span>",
            "options": [
                "(A) 6",
                "(B) 8",
                "(C) 4",
                "(D) 2"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq3",
            "question": "<span style=\"font-weight: normal;\">The distance of the point P(-6, 8) from the origin is</span>",
            "options": [
                "(A) 8",
                "(B) 2√7",
                "(C) 10",
                "(D) 6"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq4",
            "question": "<span style=\"font-weight: normal;\">The distance between the points (0, 5) and (-5, 0) is</span>",
            "options": [
                "(A) 5",
                "(B) 5√2",
                "(C) 2√5",
                "(D) 10"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq5",
            "question": "<span style=\"font-weight: normal;\">If the distance between the points (2, -2) and (-1, x) is 5, one of the values of x is</span>",
            "options": [
                "(A) -2",
                "(B) 2",
                "(C) -1",
                "(D) 1"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq6",
            "question": "<span style=\"font-weight: normal;\">The mid-point of the line segment joining the points A(-2, 8) and B(-6, -4) is</span>",
            "options": [
                "(A) (-4, -6)",
                "(B) (2, 6)",
                "(C) (-4, 2)",
                "(D) (4, 2)"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq7",
            "question": "<span style=\"font-weight: normal;\">If the points A(1, 2), O(0, 0) and C(a, b) are collinear, then</span>",
            "options": [
                "(A) a = b",
                "(B) a = 2b",
                "(C) 2a = b",
                "(D) a = -b"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq8",
            "question": "<span style=\"font-weight: normal;\">The point which divides the line segment joining the points (7, -6) and (3, 4) in ratio 1 : 2 internally lies in the</span>",
            "options": [
                "(A) I quadrant",
                "(B) II quadrant",
                "(C) III quadrant",
                "(D) IV quadrant"
            ],
            "correctAnswer": "D"
        },
        {
            "id": "mcq9",
            "question": "<span style=\"font-weight: normal;\">The coordinates of the point which is equidistant from the three vertices of the ∆ AOB as shown in the Fig. is</span>",
            "options": [
                "(A) (x, y)",
                "(B) (y, x)",
                "(C) (x/2, y/2)",
                "(D) (y/2, x/2)"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq10",
            "question": "<span style=\"font-weight: normal;\">A circle drawn with origin as the centre passes through (13/2, 0). The point which does not lie in the interior of the circle is</span>",
            "options": [
                "(A) (-3/4, 1)",
                "(B) (2, 7/3)",
                "(C) (5, -1/2)",
                "(D) (-6, 5/2)"
            ],
            "correctAnswer": "D"
        }
    ]
};
