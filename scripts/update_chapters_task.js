const fs = require('fs');
const path = require('path');

const chapsData = {
    'chapter1': {
        title: 'Chapter 1: Real Numbers',
        intro: 'Real numbers constitute the foundation of mathematics. Every number that can be plotted on a number line is a real number. This chapter covers properties of integers, rational, and irrational numbers.',
        def: 'Real Numbers (R): Set of rational and irrational numbers. Prime: Has exactly two factors. Composite: More than two factors. Rational: Written as p/q. Irrational: Cannot be written as p/q.',
        key: 'The Fundamental Theorem of Arithmetic: Every composite number can be factored as a product of primes uniquely. Properties of irrational numbers like √2, √3.',
        crux: 'Proving absolute irrationality using the method of contradiction and determining HCF & LCM using unique prime factorization.',
        summary: 'Real numbers connect abstract algebra to tangible measurement. The relationship HCF × LCM = a × b holds true for any two positive integers.'
    },
    'chapter2': {
        title: 'Chapter 2: Polynomials',
        intro: 'A polynomial is an algebraic expression consisting of variables and coefficients, with non-negative exponent values. It forms the core of algebraic equations.',
        def: 'Degree: The highest power of x in p(x). Zero of a Polynomial: A real number k is a zero if p(k) = 0. Linear: Degree 1. Quadratic: Degree 2. Cubic: Degree 3.',
        key: 'The geometrical meaning of zeros represents the x-intercepts of the polynomial graph. The relationship between zeros and coefficients for quadratic polynomials is fundamental.',
        crux: 'A polynomial of degree n can have at most n real zeros. For a quadratic ax² + bx + c, Sum of zeros = -b/a, Product of zeros = c/a.',
        summary: 'Polynomials offer a way to model multiple outcomes algebraically and graphically. Their roots determine where the function crosses the axis.'
    },
    'chapter3': {
        title: 'Chapter 3: Pair of Linear Equations in Two Variables',
        intro: 'Two linear equations in the same two variables x and y form a pair of linear equations. They geometrically represent two straight lines on a Cartesian plane.',
        def: 'Consistent system: Has at least one solution. Inconsistent system: Has no solution. Dependent system: Has infinitely many solutions.',
        key: 'The lines can intersect (unique solution), be parallel (no solution), or overlap (infinite solutions). Solutions can be found graphically or algebraically.',
        crux: 'Algebraic methods include substitution, elimination, and cross-multiplication. The ratio of coefficients (a1/a2, b1/b2, c1/c2) dictates the nature of the lines.',
        summary: 'We use paired linear equations to intuitively solve real-life literal word problems with two unknowns, applying both coordinate geometry and algebra.'
    },
    'chapter4': {
        title: 'Chapter 4: Quadratic Equations',
        intro: 'A quadratic equation is a second-degree polynomial equation in a single variable x, typically written in the standard form ax² + bx + c = 0.',
        def: 'Roots: The values of x that satisfy the equation. Discriminant (D): Evaluated as b² - 4ac, which determines the nature of the roots.',
        key: 'Solved using methods like factorization, completing the square, or the quadratic formula x = (-b ± √D) / 2a.',
        crux: 'If D > 0, roots are real and distinct. If D = 0, roots are real and equal. If D < 0, there are no real roots.',
        summary: 'Quadratic equations naturally model situations involving gravity, area, and parabolic trajectories. The discriminant is the fastest tool to check root validity.'
    },
    'chapter5': {
        title: 'Chapter 5: Arithmetic Progressions',
        intro: 'An Arithmetic Progression (AP) is a sequence of numbers in which each term is obtained by adding a fixed number to the preceding term.',
        def: 'First term (a): The starting value. Common difference (d): The constant difference between consecutive terms. nth term (an): The general term of the AP.',
        key: 'The formula for the nth term is an = a + (n-1)d. The formula for the sum of the first n terms is Sn = n/2 [2a + (n-1)d].',
        crux: 'Recognizing the constant difference makes predicting future values simple. If a, b, c are in AP, then 2b = a + c.',
        summary: 'Progressions streamline repetitive arithmetic addition, proving highly useful in compounding, simple interest, and uniform growth models.'
    },
    'chapter6': {
        title: 'Chapter 6: Triangles',
        intro: 'A triangle is a closed shape with three angles. This chapter dives beyond basic properties into the fascinating world of geometric similarity.',
        def: 'Similar Figures: Same shape but not necessarily the same size. Congruent Figures: Exactly the same shape and size. Equiangular Triangles: Corresponding angles are equal.',
        key: 'Basic Proportionality Theorem (BPT/Thales Theorem): A line parallel to one side dividing the other two sides divides them in the same ratio. Similarity criteria: AA, SAS, SSS.',
        crux: 'When triangles are similar, their corresponding angles are equal, and the ratio of their corresponding sides is perfectly constant.',
        summary: 'Similarity forms the bedrock of trigonometry and scaling. It distinguishes exactness (congruence) from scaled replicas (similarity).'
    },
    'chapter7': {
        title: 'Chapter 7: Coordinate Geometry',
        intro: 'Coordinate geometry acts as an analytical bridge linking algebraic equations to geometry by plotting points, lines, and curves on a 2D plane.',
        def: 'Origin (0,0): The intersection of axes. Abscissa: The x-coordinate. Ordinate: The y-coordinate. Collinear Points: Three or more points lying on a single straight line.',
        key: 'The Distance Formula: d = √[(x2-x1)² + (y2-y1)²]. The Section Formula: Finding the coordinates of a point dividing a line segment in an m:n ratio internally.',
        crux: 'Using coordinates, we can accurately prove geometrical theorem without visually drawing the shape, simply relying on numbers and formulas.',
        summary: 'Plotting maps, GPS tracking, and digital drawing heavily rely on coordinate geometry to calculate spatial distances and section proportions.'
    },
    'chapter8': {
        title: 'Chapter 8: Introduction to Trigonometry',
        intro: 'Trigonometry is the study of relationships between the sides and angles of a right-angled triangle. It implies measuring the elements of a triangle.',
        def: 'Sine, Cosine, Tangent: The primary ratios linking specific side lengths (Perpendicular, Base, Hypotenuse) to an angle θ. Reciprocals: Cosec, Sec, Cot.',
        key: 'The trigonometric ratios of standard angles (0°, 30°, 45°, 60°, 90°) must be memorized. Key identity: sin²θ + cos²θ = 1.',
        crux: 'Given just one side and one acute angle in a right triangle, trigonometry allows us to determine all other remaining sides and angles.',
        summary: 'Trigonometry translates angular orientation into lengths, providing foundational principles heavily utilized in physics and engineering disciplines.'
    },
    'chapter9': {
        title: 'Chapter 9: Some Applications of Trigonometry',
        intro: 'This chapter applies trigonometric ratios practically, allowing calculation of heights and distances of objects you cannot directly measure.',
        def: 'Line of Sight: The line drawn from the eye of the observer to the object. Angle of Elevation: Looking upwards above the horizontal. Angle of Depression: Looking downwards below the horizontal.',
        key: 'Drawing accurate right-angled geometric diagrams from word problems is 90% of the solution. Using tanθ is extremely common for altitude and base relations.',
        crux: 'Distinguishing between elevation and depression ensures correct geometric orientation, though alternate interior angles often make them mathematically identical.',
        summary: 'From navigating planes to designing skyscraper heights, applied trigonometry removes the need for impossible physical measurements.'
    },
    'chapter10': {
        title: 'Chapter 10: Circles',
        intro: 'A circle is the locus of all points in a plane equidistant from a fixed center. This chapter predominantly examines the properties of lines touching circles.',
        def: 'Tangent: A straight line that touches the circle at exactly one point. Secant: A line that intersects the circle at two distinct points. Point of Contact: Where the tangent touches the circle.',
        key: 'A tangent to a circle is strictly perpendicular to the radius right at the point of contact. Furthermore, lengths of the two tangents drawn from an external point are always equal.',
        crux: 'The symmetrical, equal tangent properties heavily assist in unraveling seemingly complex polygon-circle circumscription configurations.',
        summary: 'Circles represent flawless symmetry. Their interacting tangents shape gears, belts, and wheels in fundamental mechanical physics.'
    },
    'chapter11': {
        title: 'Chapter 11: Areas Related to Circles',
        intro: 'Extending beyond simple area (πr²), this covers the calculation of areas of specific subsections of a circle based on central angles.',
        def: 'Sector: The region bounded by two radii and an arc (like a pizza slice). Segment: The region bounded by a chord and an arc. Arc: A continuous piece of the circle circumference.',
        key: 'Area of a sector of angle θ is (θ/360°) × πr². Length of an arc is (θ/360°) × 2πr. Area of segment requires subtracting triangle area from sector area.',
        crux: 'Understanding the proportion that the angle θ represents out of the full 360° directly evaluates the fractional area or perimeter.',
        summary: 'These specialized area formulas allow precise calculation in real scenarios, such as wiped windshield area or architectural window panes.'
    },
    'chapter12': {
        title: 'Chapter 12: Surface Areas and Volumes',
        intro: 'A transition from 2D plane geometry to 3D solid geometry, analyzing objects like cubes, cylinders, cones, and spheres, or combinations thereof.',
        def: 'Lateral/Curved Surface Area (CSA): The area of outer surfaces excluding top and bottom. Total Surface Area (TSA): Area of all faces. Volume: The capacity or space occupied by a 3D object.',
        key: 'When calculating the surface area of a combined solid, we only add the visible outer surfaces. For volumes, we purely add or subtract the internal capacities.',
        crux: 'Conservation of Volume - if you melt a metallic sphere to cast cylinders, the total volume mathematically remains exactly equal.',
        summary: 'Volume capacity and surface packaging optimization strictly depend on these formulas across shipping, manufacturing, and plumbing industries.'
    },
    'chapter13': {
        title: 'Chapter 13: Statistics',
        intro: 'Statistics is the systematic collection, representation, and mathematical analysis of vast quantities of numerical data.',
        def: 'Mean: The arithmetic average. Median: The middlemost value when sorted. Mode: The value that occurs with maximum frequency. Class Mark: The midpoint of a class interval.',
        key: 'Methods for mean include Direct, Assumed Mean, and Step-Deviation methods. The empirical relationship is 3 Median = Mode + 2 Mean.',
        crux: 'Grouped data requires specific formulas to estimate central tendencies. Choosing the correct calculation method drastically reduces arithmetic burden.',
        summary: 'Without statistics, data is just arbitrary numbers. These tools consolidate massive datasets into single, comprehensible summary values.'
    },
    'chapter14': {
        title: 'Chapter 14: Probability',
        intro: 'Probability fundamentally models the mathematical certainty or uncertainty of random events, ranging securely from impossible to absolutely sure.',
        def: 'Experiment: An action with measurable results. Favorable Outcomes: Results ensuring the event occurs. Sure Event: Probability of 1. Impossible Event: Probability of 0.',
        key: 'Theoretical Probability P(E) = Number of outcomes favorable to E / Total number of possible outcomes. P(E) + P(not E) = 1.',
        crux: 'The total mathematical chance always sums identically to 1. Understanding independent events, decks of cards, and dice rolls is paramount.',
        summary: 'Probability quantifies chance, making it invaluable for actuarial sciences, weather forecasting, game theory, and long-term risk assessment.'
    }
};

const basePath = 'd:/MATH-T-new/client/assets/chapters';
const imgRegex = /<img[^>]+>/g;

function processHTMLFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processHTMLFiles(fullPath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // Add global img styling in all html files
            // Using a simple head inject to make images nicely rectangular and reduced height
            const imgStyle = `
    <style>
        img {
            max-width: 100%;
            height: auto;
            max-height: 250px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border-radius: 8px;
        }
    </style>
`;
            // Check if we already injected our specific style
            if (!content.includes('max-height: 250px;') && content.includes('</head>')) {
                content = content.replace('</head>', imgStyle + '</head>');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

function updateOverview(chapterDirName) {
    const data = chapsData[chapterDirName];
    if (!data) return;

    const overviewPath = path.join(basePath, chapterDirName, 'overview.html');

    const overviewTitle = data.title.split(': ')[1] || data.title;

    const newHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${overviewTitle} - Overview</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');
        body {
            font-family: 'Kalam', cursive;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #6C63FF;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }
        .logo {
            color: #6C63FF;
            font-size: 24px;
            font-weight: 800;
        }
        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }
        .section-title {
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            color: #6C63FF;
            margin-top: 25px;
            margin-bottom: 10px;
            font-size: 1.2em;
            border-bottom: 2px dashed #6C63FF;
            padding-bottom: 5px;
        }
        .content-text {
            font-size: 1.1em;
            line-height: 1.6;
            margin-bottom: 15px;
            padding-left: 12px;
            border-left: 4px solid #6C63FF;
            background-color: rgba(108, 99, 255, 0.03);
            border-radius: 0 8px 8px 0;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-right: 10px;
            color: #333;
        }
        .highlight-text {
            font-weight: 700;
            color: #6C63FF;
        }
        img {
            max-width: 100%;
            height: auto;
            max-height: 250px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">JIGUU</div>
        <div class="chapter-title">${data.title}</div>
    </div>

    <div class="section-title">Basic Introductions</div>
    <div class="content-text"><span class="highlight-text">»</span> ${data.intro}</div>

    <div class="section-title">Definitions</div>
    <div class="content-text"><span class="highlight-text">»</span> ${data.def}</div>

    <div class="section-title">Key points</div>
    <div class="content-text"><span class="highlight-text">»</span> ${data.key}</div>

    <div class="section-title">Crux</div>
    <div class="content-text"><span class="highlight-text">»</span> ${data.crux}</div>

    <div class="section-title">Summary</div>
    <div class="content-text"><span class="highlight-text">»</span> ${data.summary}</div>
</body>
</html>`;

    // Only update if directory exists
    if (fs.existsSync(path.join(basePath, chapterDirName))) {
        fs.writeFileSync(overviewPath, newHtml, 'utf8');
        console.log("Updated overview for " + chapterDirName);
    }
}

// 1. Process all HTML files to inject image CSS
console.log('Injecting image styles into all HTML files...');
processHTMLFiles(basePath);
console.log('Image styles injected successfully.');

// 2. Generate and replace all overview.html content
console.log('Replacing overview.html with new content and formatting...');
for (let i = 1; i <= 14; i++) {
    updateOverview('chapter' + i);
}
console.log('All overviews successfully updated.');
