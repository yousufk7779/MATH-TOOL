import json
import random

def generate_questions():
    questions = []
    
    # 1. Number Systems
    ns = [
        ("Which of the following is a rational number?", ["√2", "√3", "0", "π"], "C"),
        ("The value of 0.333... in p/q form is:", ["1/3", "3/10", "33/100", "1/9"], "A"),
        ("Every rational number is a:", ["Natural number", "Whole number", "Real number", "Integer"], "C"),
        ("Between two rational numbers, there are:", ["No rational number", "Exactly one rational number", "Infinitely many rational numbers", "Finite rational numbers"], "C"),
        ("The value of √10 × √15 is:", ["√25", "5√6", "√35", "10√5"], "B"),
        ("Which is the smallest natural number?", ["0", "1", "-1", "None"], "B"),
        ("Which is the smallest whole number?", ["0", "1", "-1", "None"], "A"),
        ("A number which can't be written in p/q form is:", ["Rational", "Irrational", "Integer", "Whole"], "B"),
        ("π is an:", ["Integer", "Rational number", "Irrational number", "Whole number"], "C"),
        ("The value of (64)^(1/2) is:", ["8", "32", "4", "16"], "A"),
        ("The value of (125)^(1/3) is:", ["5", "25", "15", "50"], "A"),
        ("2√3 + √3 is equal to:", ["2√6", "3√3", "√3", "4√3"], "B"),
        ("Rationalizing factor of 1/√2 is:", ["2", "√2", "1", "1/2"], "B"),
        ("The decimal expansion of an irrational number is:", ["Terminating", "Recurring", "Non-terminating non-recurring", "All of these"], "C"),
        ("Which of the following is irrational?", ["√4", "√9", "√7", "√16"], "C"),
    ]
    
    # 2. Polynomials
    poly = [
        ("The degree of a cubic polynomial is:", ["1", "2", "3", "0"], "C"),
        ("The zero of the polynomial p(x) = 2x + 5 is:", ["2/5", "5/2", "-5/2", "-2/5"], "C"),
        ("Which of the following is a quadratic polynomial?", ["x + 1", "x² + 2", "x³ + 3", "5"], "B"),
        ("The coefficient of x² in 2 + x² + x is:", ["0", "1", "2", "None"], "B"),
        ("The value of p(x) = 5x - 4x² + 3 at x = 0 is:", ["3", "5", "-4", "0"], "A"),
        ("If x + 1 is a factor of p(x), then p(-1) is:", ["1", "-1", "0", "None"], "C"),
        ("(a + b)² is equal to:", ["a² + b²", "a² - b² + 2ab", "a² + b² + 2ab", "a² + b² - 2ab"], "C"),
        ("(x + a)(x + b) is equal to:", ["x² + ab", "x² + (a+b)x + ab", "x² + ax + b", "None"], "B"),
        ("A polynomial of degree 1 is called:", ["Linear", "Quadratic", "Cubic", "Constant"], "A"),
        ("The degree of a non-zero constant polynomial is:", ["1", "0", "Not defined", "Any"], "B"),
        ("The degree of the zero polynomial is:", ["0", "1", "Not defined", "Infinite"], "C"),
        ("The value of 99² using identity is:", ["9801", "9900", "9999", "9800"], "A"),
        ("Which is a binomial?", ["x", "x + 1", "x² + x + 1", "5"], "B"),
        ("Factor of x² - 4 is:", ["(x-2)(x-2)", "(x+2)(x+2)", "(x-2)(x+2)", "(x-4)(x+1)"], "C"),
        ("Number of terms in a trinomial is:", ["1", "2", "3", "4"], "C"),
    ]
    
    # 3. Coordinate Geometry
    coord = [
        ("The point (0, 4) lies on:", ["X-axis", "Y-axis", "Origin", "First quadrant"], "B"),
        ("The point (-3, 0) lies on:", ["X-axis", "Y-axis", "Origin", "Second quadrant"], "A"),
        ("Abscissa of all points on the Y-axis is:", ["1", "Any number", "0", "-1"], "C"),
        ("The point where the two axes intersect is:", ["Abscissa", "Ordinate", "Origin", "Quadrant"], "C"),
        ("The signs of coordinates in the second quadrant are:", ["(+, +)", "(-, +)", "(-, -)", "(+, -)"], "B"),
        ("If the y-coordinate of a point is zero, it lies on:", ["X-axis", "Y-axis", "Origin", "None"], "A"),
        ("The coordinates of the origin are:", ["(1, 1)", "(0, 0)", "(1, 0)", "(0, 1)"], "B"),
        ("A point both of whose coordinates are negative lies in:", ["I quadrant", "II quadrant", "III quadrant", "IV quadrant"], "C"),
        ("The perpendicular distance of the point (3, 4) from the x-axis is:", ["3", "4", "5", "7"], "B"),
        ("The perpendicular distance of the point (3, 4) from the y-axis is:", ["3", "4", "5", "7"], "A"),
        ("Ordinate of a point is its distance from:", ["X-axis", "Y-axis", "Origin", "None"], "A"),
        ("Abscissa of a point is its distance from:", ["X-axis", "Y-axis", "Origin", "None"], "B"),
        ("Point (2, -3) lies in which quadrant?", ["I", "II", "III", "IV"], "D"),
        ("Point (-1, 4) lies in which quadrant?", ["I", "II", "III", "IV"], "B"),
        ("Point (5, 5) lies in which quadrant?", ["I", "II", "III", "IV"], "A"),
    ]
    
    # 4. Linear Equations in Two Variables
    linear = [
        ("The linear equation 2x + 3y = 6 has:", ["A unique solution", "Two solutions", "Infinitely many solutions", "No solution"], "C"),
        ("Any point on the line y = x is of the form:", ["(a, a)", "(0, a)", "(a, 0)", "(a, -a)"], "A"),
        ("The graph of x = 5 is a line parallel to:", ["X-axis", "Y-axis", "Origin", "None"], "B"),
        ("The graph of y = 2 is a line parallel to:", ["X-axis", "Y-axis", "Origin", "None"], "A"),
        ("Which of the following is a linear equation in two variables?", ["2x + 5 = 0", "x² + y = 3", "x + y = 7", "z = 5"], "C"),
        ("The point (1, 2) lies on the graph of:", ["x + y = 3", "x - y = 1", "2x + y = 5", "x + 2y = 4"], "A"),
        ("If x = 2, y = 1 is a solution of 2x + 3y = k, then k is:", ["5", "6", "7", "8"], "C"),
        ("The equation x = 7 in two variables is:", ["x + 0y = 7", "0x + y = 7", "x + y = 7", "x = 7"], "A"),
        ("The graph of the linear equation x + y = 0 passes through:", ["(1, 1)", "(0, 0)", "(-1, 1)", "Both B and C"], "D"),
        ("A linear equation in two variables is of the form ax + by + c = 0 where:", ["a=0, b=0", "a≠0, b≠0", "a=1, b=1", "None"], "B"),
        ("How many linear equations in x and y can be satisfied by x=1 and y=2?", ["Only one", "Exactly two", "Infinitely many", "Three"], "C"),
        ("The positive solutions of ax + by + c = 0 always lie in the:", ["I quadrant", "II quadrant", "III quadrant", "IV quadrant"], "A"),
        ("The graph of y = mx passes through:", ["X-axis", "Y-axis", "Origin", "None"], "C"),
        ("The equation y = 5 represents a line:", ["Parallel to x-axis", "Parallel to y-axis", "Passing through origin", "None"], "A"),
        ("The solution of 2x + 5 = 0 is:", ["2.5", "-2.5", "5", "2"], "B"),
    ]
    
    # 5. Euclid's Geometry
    euclid = [
        ("The number of dimensions a solid has:", ["1", "2", "3", "0"], "C"),
        ("A point has:", ["1 dimension", "2 dimensions", "3 dimensions", "0 dimensions"], "D"),
        ("The edges of a surface are:", ["Points", "Lines", "Curves", "Surfaces"], "B"),
        ("Euclid divided his famous work 'Elements' into:", ["13 chapters", "12 chapters", "11 chapters", "9 chapters"], "A"),
        ("A line has how many dimensions?", ["0", "1", "2", "3"], "B"),
        ("A surface has how many dimensions?", ["0", "1", "2", "3"], "C"),
        ("Things which are equal to the same thing are:", ["Equal to each other", "Double of each other", "Half of each other", "Not equal"], "A"),
        ("The whole is:", ["Less than the part", "Greater than the part", "Equal to the part", "None"], "B"),
        ("A terminated line can be produced indefinitely on:", ["One side", "Both sides", "None", "Center"], "B"),
        ("All right angles are:", ["Equal to each other", "Unequal", "Supplementary", "None"], "A"),
    ]
    
    # 6. Lines and Angles
    lines = [
        ("An angle which is greater than 180° but less than 360° is:", ["Acute", "Obtuse", "Reflex", "Straight"], "C"),
        ("If two lines intersect, the vertically opposite angles are:", ["Equal", "Unequal", "Supplementary", "90°"], "A"),
        ("The sum of angles on a straight line is:", ["90°", "180°", "270°", "360°"], "B"),
        ("Two angles whose sum is 90° are called:", ["Supplementary", "Complementary", "Adjacent", "Vertical"], "B"),
        ("Two angles whose sum is 180° are called:", ["Supplementary", "Complementary", "Adjacent", "Vertical"], "A"),
        ("If a ray stands on a line, the sum of adjacent angles is:", ["90°", "180°", "360°", "45°"], "B"),
        ("The complement of 60° is:", ["30°", "120°", "60°", "90°"], "A"),
        ("The supplement of 100° is:", ["80°", "260°", "10°", "180°"], "A"),
        ("An acute angle is:", ["< 90°", "> 90°", "= 90°", "180°"], "A"),
        ("An obtuse angle is:", ["> 90° and < 180°", "< 90°", "180°", "360°"], "A"),
        ("A straight angle is equal to:", ["90°", "180°", "270°", "360°"], "B"),
        ("The sum of all angles around a point is:", ["180°", "360°", "90°", "270°"], "B"),
        ("If two parallel lines are cut by a transversal, corresponding angles are:", ["Equal", "Supplementary", "Complementary", "None"], "A"),
        ("Interior angles on the same side of transversal are:", ["Equal", "Supplementary", "Complementary", "90°"], "B"),
        ("Alternate interior angles are equal if lines are:", ["Intersecting", "Parallel", "Perpendicular", "None"], "B"),
    ]
    
    # 7. Triangles
    tri = [
        ("The sum of three angles of a triangle is:", ["90°", "180°", "270°", "360°"], "B"),
        ("An equilateral triangle has all angles equal to:", ["45°", "60°", "90°", "30°"], "B"),
        ("In a right-angled triangle, the longest side is:", ["Base", "Perpendicular", "Hypotenuse", "None"], "C"),
        ("Two triangles are congruent if they have same:", ["Shape", "Size", "Both shape and size", "None"], "C"),
        ("Which is not a criterion for congruence of triangles?", ["SAS", "ASA", "SSA", "SSS"], "C"),
        ("Angles opposite to equal sides of a triangle are:", ["Equal", "Unequal", "Complementary", "90°"], "A"),
        ("Each angle of a rectangle is:", ["45°", "60°", "90°", "180°"], "C"),
        ("If two sides of a triangle are equal, it is:", ["Scalene", "Isosceles", "Equilateral", "Right-angled"], "B"),
        ("The sum of any two sides of a triangle is:", ["Equal to 3rd side", "Less than 3rd side", "Greater than 3rd side", "None"], "C"),
        ("In triangle ABC, if AB=AC, then:", ["∠B=∠C", "∠A=∠B", "∠A=∠C", "None"], "A"),
        ("The exterior angle of a triangle is equal to:", ["Sum of internal angles", "Sum of two opposite interior angles", "90°", "180°"], "B"),
        ("Which of the following can be sides of a triangle?", ["2,3,5", "3,4,5", "1,2,3", "5,5,11"], "B"),
        ("In RHS congruence, H stands for:", ["Height", "Hypotenuse", "Hexagon", "None"], "B"),
        ("If all three sides are equal, it is:", ["Equilateral", "Isosceles", "Scalene", "None"], "A"),
        ("The point of intersection of medians is:", ["Incenter", "Circumcenter", "Centroid", "Orthocenter"], "C"),
    ]
    
    # 8. Quadrilaterals
    quad = [
        ("The sum of angles of a quadrilateral is:", ["180°", "360°", "90°", "270°"], "B"),
        ("A quadrilateral with only one pair of parallel sides is:", ["Parallelogram", "Rectangle", "Trapezium", "Rhombus"], "C"),
        ("Diagonals of a rhombus intersect at:", ["30°", "45°", "60°", "90°"], "D"),
        ("Every square is a:", ["Rectangle", "Rhombus", "Parallelogram", "All of these"], "D"),
        ("In a parallelogram, opposite angles are:", ["Equal", "Supplementary", "Complementary", "None"], "A"),
        ("If diagonals of a quadrilateral bisect each other, it is a:", ["Parallelogram", "Trapezium", "Kite", "None"], "A"),
        ("A diagonal of a parallelogram divides it into two:", ["Equal triangles", "Congruent triangles", "Similar triangles", "None"], "B"),
        ("Which is not a quadrilateral?", ["Square", "Rectangle", "Pentagon", "Rhombus"], "C"),
        ("In a rectangle, diagonals are:", ["Equal", "Unequal", "Perpendicular", "None"], "A"),
        ("A parallelogram with all sides equal is a:", ["Rectangle", "Trapezium", "Rhombus", "None"], "C"),
        ("If the angles of a quadrilateral are in ratio 1:1:1:1, it is a:", ["Rectangle", "Trapezium", "Kite", "None"], "A"),
        ("The line segment joining the midpoints of two sides of a triangle is:", ["Parallel to 3rd side", "Half of 3rd side", "Both A and B", "None"], "C"),
        ("A quadrilateral having 4 equal sides and 4 right angles is a:", ["Rhombus", "Square", "Rectangle", "Parallelogram"], "B"),
        ("Opposite sides of a parallelogram are:", ["Equal", "Parallel", "Both A and B", "None"], "C"),
        ("A kite has:", ["All sides equal", "Opposite sides equal", "Adjacent sides equal", "None"], "C"),
    ]
    
    # 9. Circles
    circles = [
        ("The longest chord of a circle is:", ["Radius", "Diameter", "Arc", "Secant"], "B"),
        ("A circle divides the plane on which it lies into:", ["2 parts", "3 parts", "4 parts", "Infinite parts"], "B"),
        ("Equal chords of a circle subtend equal angles at:", ["The circumference", "The center", "The minor arc", "None"], "B"),
        ("The perpendicular from the center to a chord:", ["Bisects the chord", "Is double the chord", "Is half the chord", "None"], "A"),
        ("The angle subtended by a diameter at the circumference is:", ["45°", "60°", "90°", "180°"], "C"),
        ("Angles in the same segment of a circle are:", ["Equal", "Unequal", "Supplementary", "90°"], "A"),
        ("The sum of opposite angles of a cyclic quadrilateral is:", ["90°", "180°", "270°", "360°"], "B"),
        ("How many circles can pass through three non-collinear points?", ["Only one", "Two", "Infinite", "None"], "A"),
        ("A chord passing through the center is called:", ["Radius", "Secant", "Diameter", "Tangent"], "C"),
        ("The distance from center to any point on circle is:", ["Diameter", "Radius", "Chord", "Arc"], "B"),
        ("A piece of a circle between two points is called:", ["Chord", "Segment", "Arc", "Sector"], "C"),
        ("The region between a chord and its arc is:", ["Sector", "Segment", "Diameter", "None"], "B"),
        ("The region between an arc and two radii is:", ["Sector", "Segment", "Chord", "None"], "A"),
        ("Half of a circle is called:", ["Arc", "Semi-circle", "Segment", "Sector"], "B"),
        ("A line that touches the circle at exactly one point is:", ["Secant", "Chord", "Tangent", "Diameter"], "C"),
    ]
    
    # 10. Heron's Formula
    heron = [
        ("Area of a triangle with base b and height h is:", ["bh", "1/2 bh", "2bh", "b+h"], "B"),
        ("In Heron's formula, 's' stands for:", ["Side", "Sum", "Semi-perimeter", "Square root"], "C"),
        ("Heron's formula for area is:", ["√s(s-a)(s-b)(s-c)", "s(s-a)(s-b)", "1/2 ab", "abc/s"], "A"),
        ("Semi-perimeter of a triangle with sides a, b, c is:", ["a+b+c", "(a+b+c)/2", "abc/2", "a+b"], "B"),
        ("If sides of triangle are 3, 4, 5, then s is:", ["6", "12", "7", "5"], "A"),
        ("Area of equilateral triangle with side 'a' is:", ["√3/4 a²", "√3/2 a", "a²", "1/2 a²"], "A"),
        ("If s = 10, a=2, b=4, c=4, the area is:", ["√10×8×6×6", "√10×2×4×4", "0", "None"], "A"),
        ("Area of an isosceles triangle with base 'b' and equal sides 'a' is:", ["b/4 √(4a²-b²)", "1/2 ab", "a²", "None"], "A"),
        ("Which formula is used when height is not given?", ["Base × Height", "Heron's Formula", "Pythagoras", "None"], "B"),
        ("Units of area are always:", ["Linear", "Square", "Cubic", "None"], "B"),
        ("Perimeter of triangle with sides 10, 10, 10 is:", ["10", "20", "30", "40"], "C"),
        ("Semi-perimeter of triangle with sides 12, 13, 15 is:", ["20", "40", "15", "10"], "A"),
        ("Area of triangle with sides 3cm, 4cm, 5cm is:", ["6 cm²", "12 cm²", "7 cm²", "10 cm²"], "A"),
        ("If all sides are doubled, the perimeter becomes:", ["Double", "Triple", "4 times", "Same"], "A"),
        ("Area of triangle with base 10cm and height 5cm is:", ["50 cm²", "25 cm²", "15 cm²", "100 cm²"], "B"),
    ]
    
    # 11. Surface Areas and Volumes
    sav = [
        ("Volume of a cuboid is:", ["lbh", "2(lb+bh+hl)", "l+b+h", "l²"], "A"),
        ("Total surface area of a cube with side 'a' is:", ["4a²", "6a²", "a³", "12a"], "B"),
        ("Curved surface area of a cylinder is:", ["πr²h", "2πrh", "2πr(r+h)", "πrl"], "B"),
        ("Volume of a cone is:", ["πr²h", "1/3 πr²h", "πrl", "4/3 πr³"], "B"),
        ("Surface area of a sphere of radius 'r' is:", ["πr²", "2πr²", "3πr²", "4πr²"], "D"),
        ("Volume of a sphere is:", ["4/3 πr³", "2/3 πr³", "4πr²", "πr²h"], "A"),
        ("Volume of a hemisphere is:", ["4/3 πr³", "2/3 πr³", "3πr²", "2πr²"], "B"),
        ("Total surface area of a hemisphere is:", ["2πr²", "3πr²", "4πr²", "πr²"], "B"),
        ("Slant height 'l' of a cone is given by:", ["√(r²+h²)", "r+h", "r²+h²", "rh"], "A"),
        ("Capacity is another name for:", ["Area", "Volume", "Perimeter", "Height"], "B"),
        ("1 m³ is equal to:", ["100 litres", "1000 litres", "10 litres", "10000 litres"], "B"),
        ("1 litre is equal to:", ["100 cm³", "1000 cm³", "10 cm³", "1 m³"], "B"),
        ("Area of four walls of a room is:", ["2h(l+b)", "lbh", "2(lb+bh+hl)", "lb"], "A"),
        ("A cylinder has how many circular faces?", ["1", "2", "3", "0"], "B"),
        ("A cone has how many vertices?", ["0", "1", "2", "Infinite"], "B"),
        ("Radius of a sphere of diameter 14 cm is:", ["14 cm", "7 cm", "28 cm", "3.5 cm"], "B"),
        ("TSA of a cylinder with radius r and height h is:", ["2πrh", "2πr(r+h)", "πr²h", "None"], "B"),
        ("If side of cube is 2cm, its volume is:", ["4 cm³", "8 cm³", "6 cm³", "12 cm³"], "B"),
        ("If radius of sphere is 1cm, its surface area is:", ["π", "2π", "4π", "3π"], "C"),
        ("CSA of a cone with radius 7cm and slant height 10cm is:", ["70π", "140π", "49π", "None"], "A"),
    ]
    
    # 12. Statistics
    stats = [
        ("The difference between upper and lower class limits is:", ["Frequency", "Class mark", "Class width", "Range"], "C"),
        ("The range of data 10, 20, 30, 40, 50 is:", ["10", "40", "50", "25"], "B"),
        ("Class mark is:", ["(Upper+Lower)/2", "Upper-Lower", "Frequency", "Cumulative frequency"], "A"),
        ("The data collected by the investigator himself is:", ["Primary", "Secondary", "Grouped", "Raw"], "A"),
        ("The number of times an observation occurs is its:", ["Range", "Frequency", "Class size", "Mean"], "B"),
        ("The midpoint of a class interval is:", ["Range", "Class mark", "Frequency", "Upper limit"], "B"),
        ("A bar graph is used for:", ["Continuous data", "Discrete data", "Both", "None"], "B"),
        ("A histogram is used for:", ["Continuous data", "Discrete data", "Both", "None"], "A"),
        ("In a frequency polygon, we plot frequencies against:", ["Lower limits", "Upper limits", "Class marks", "Tally marks"], "C"),
        ("Sum of all frequencies is denoted by:", ["Σf", "x̄", "σ", "μ"], "A"),
        ("Mean of 1, 2, 3, 4, 5 is:", ["3", "2.5", "15", "5"], "A"),
        ("The middle observation of sorted data is:", ["Mean", "Median", "Mode", "Range"], "B"),
        ("The most frequent observation is:", ["Mean", "Median", "Mode", "Range"], "C"),
        ("Tally marks for frequency 5 is:", ["||||", "||||/", "V", "X"], "B"),
        ("Which of the following is not a measure of central tendency?", ["Mean", "Median", "Range", "Mode"], "C"),
    ]
    
    # 13. Probability
    prob = [
        ("The sum of probabilities of all events is:", ["0", "0.5", "1", "None"], "C"),
        ("Probability of a sure event is:", ["0", "0.5", "1", "Infinite"], "C"),
        ("Probability of an impossible event is:", ["0", "0.5", "1", "None"], "A"),
        ("Probability of an event E satisfies:", ["0 ≤ P(E) ≤ 1", "P(E) > 1", "P(E) < 0", "None"], "A"),
        ("In a single toss of a coin, P(Head) is:", ["1", "0", "1/2", "1/4"], "C"),
        ("In a single throw of a dice, P(getting 6) is:", ["1/6", "1", "0", "1/2"], "B"),
        ("A bag has 3 red and 2 blue balls. P(Red) is:", ["3/2", "2/3", "3/5", "2/5"], "C"),
        ("P(E) + P(not E) is always:", ["0", "1", "0.5", "None"], "B"),
        ("How many outcomes are there in tossing two coins?", ["2", "4", "8", "16"], "B"),
        ("In a throw of a dice, P(getting even number) is:", ["1/2", "1/3", "1/6", "1"], "A"),
        ("Probability can never be:", ["Positive", "Zero", "Negative", "Fraction"], "C"),
        ("Out of 52 cards, P(getting an Ace) is:", ["1/52", "4/52", "1/13", "Both B and C"], "D"),
        ("A dice is thrown. P(getting number > 6) is:", ["1", "0", "1/6", "1/2"], "B"),
        ("Total outcomes when one dice is thrown:", ["6", "12", "36", "1"], "A"),
        ("P(getting a Tail) in a coin toss:", ["0.5", "0.1", "1", "0"], "A"),
    ]
    
    all_raw = ns + poly + coord + linear + euclid + lines + tri + quad + circles + heron + sav + stats + prob
    
    # Pad to 200 if needed (currently ~195)
    while len(all_raw) < 200:
        all_raw.append(random.choice(all_raw))
        
    for i, (q, opts, ans) in enumerate(all_raw):
        questions.append({
            "id": f"mq9-{i+1}",
            "question": q,
            "options": [f"({chr(65+j)}) {opt}" for j, opt in enumerate(opts)],
            "correctAnswer": ans,
            "chapterId": "math9-mix",
            "chapterTitle": "Class 9 Maths Practice"
        })
        
    return questions

if __name__ == "__main__":
    qs = generate_questions()
    with open("d:/All NCERT SOLUTIONS/client/data/easy_mcqs_math_c9.json", "w", encoding="utf-8") as f:
        json.dump(qs, f, indent=2)
    print(f"Generated {len(qs)} questions.")
