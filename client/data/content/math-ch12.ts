import { ChapterContent } from "../types";

export const mathCh12: ChapterContent = {
  id: "ch12",
  number: 12,
  title: "Surface Areas and Volumes",
  isHtmlView: true,
  introduction:
    "In this chapter, we study 3D combination solids formed by joining basic 3D shapes like cubes, cuboids, cylinders, cones, spheres, and hemispheres. We calculate Total Surface Area (sum of visible curved surfaces) and Total Volume (sum of individual component volumes).",
  definitions: [
    { term: "Combination of Solids", description: "A composite 3D figure created by combining two or more basic 3D objects." },
    { term: "Curved Surface Area (CSA)", description: "The area of all curved outer surfaces excluding flat top/bottom bases." },
    { term: "Total Surface Area (TSA)", description: "The total area of all exposed outer faces of the combined solid." }
  ],
  keyPoints: [
    "Surface Area of Combined Solid: Sum of CSAs of individual visible parts (joined internal faces are excluded).",
    "Volume of Combined Solid: Sum of volumes of individual component solids.",
    "Formulas: Cube (6a²), Cuboid (2(lb+bh+hl)), Cylinder CSA (2πrh), Cone CSA (πrl where l = √(r²+h²)), Sphere Area (4πr²), Hemisphere CSA (2πr²)."
  ],
  formulas: [
    { name: "Slant Height of Cone", formula: "l = \sqrt{r^2 + h^2}" },
    { name: "Cone CSA", formula: "CSA = \pi r l" },
    { name: "Hemisphere CSA", formula: "CSA = 2 \pi r^2" },
    { name: "Sphere Volume", formula: "V = \frac{4}{3} \pi r^3" }
  ],
  crux: [],
  exercises: [
    { id: "ex12-1", name: "Exercise 12.1", questions: [] },
    { id: "ex12-2", name: "Exercise 12.2", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #009688; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(0, 150, 136, 0.05); border-left: 4px solid #009688; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #009688; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Surface Areas and Volumes</div>
            <p class="content-text">Calculate surface areas and volumes of complex combined 3D shapes (tents, toys, vessels, gulab jamuns) using component formulas.</p>
            <div class="point-box">
                <div class="point-item">Combined Surface Area: Sum of visible CSAs.</div>
                <div class="point-item">Combined Volume: Sum of volumes of individual solids.</div>
                <div class="point-item">Slant Height: l = √(r² + h²) for conical parts.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex12-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #009688; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #009688; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80CBC4; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #009688; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80CBC4; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #009688; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. 2 cubes each of volume 64 cm&sup3; are joined end to end. Find the surface area of the resulting cuboid:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="200" height="100" viewBox="0 0 200 100">
                            <!-- Two Cubes joined -->
                            <rect x="20" y="30" width="80" height="50" fill="rgba(0,150,136,0.2)" stroke="#009688" stroke-width="2"/>
                            <rect x="100" y="30" width="80" height="50" fill="rgba(0,150,136,0.4)" stroke="#009688" stroke-width="2"/>
                            <text x="60" y="60" fill="#fff" font-size="11">Cube 1</text>
                            <text x="140" y="60" fill="#fff" font-size="11">Cube 2</text>
                            <text x="100" y="95" fill="#80CBC4" font-size="11" text-anchor="middle">Total Length = 8 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Volume of each cube = a&sup3; = 64 cm&sup3; &rArr; a = 4 cm</div>
                    <div class="sol-step">Dimensions of resulting cuboid:</div>
                    <div class="sol-step">Length l = 4 + 4 = 8 cm</div>
                    <div class="sol-step">Breadth b = 4 cm &nbsp;,&nbsp; Height h = 4 cm</div>
                    <div class="sol-step">Surface Area = 2(lb + bh + hl)</div>
                    <div class="sol-step">= 2(8 &times; 4 + 4 &times; 4 + 4 &times; 8)</div>
                    <div class="sol-step">= 2(32 + 16 + 32) = 2(80) = 160 cm&sup2;</div>
                    <div class="sol-step"><span class="ans-highlight">Surface area of cuboid = 160 cm&sup2;</span></div>
                </div>
            </div>
        </div>
    `,
    "ex12-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #009688; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #009688; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80CBC4; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #009688; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80CBC4; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. Find the volume of the solid in terms of &pi;:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius r = 1 cm &nbsp;,&nbsp; Height of cone h = 1 cm</div>
                    <div class="sol-step">Volume of solid = Volume of Cone + Volume of Hemisphere</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">3</span></div>&pi;r&sup2;h + <div class="frac"><span class="num">2</span><span class="den">3</span></div>&pi;r&sup3;</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">3</span></div>&pi;(1)&sup2;(1) + <div class="frac"><span class="num">2</span><span class="den">3</span></div>&pi;(1)&sup3;</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">3</span></div>&pi; + <div class="frac"><span class="num">2</span><span class="den">3</span></div>&pi; = <div class="frac"><span class="num">3</span><span class="den">3</span></div>&pi; = &pi; cm&sup3;</div>
                    <div class="sol-step"><span class="ans-highlight">Volume of solid = &pi; cm&sup3;</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m12-mcq-1", question: "A solid is cone on a hemisphere with r = 1 cm and height of cone = 1 cm. Its volume is:", options: ["π cm³", "2π cm³", "3π cm³", "4π cm³"], correctAnswer: "a", explanation: "V = 1/3 π(1)²(1) + 2/3 π(1)³ = 1/3 π + 2/3 π = π cm³." },
    { id: "c10m12-mcq-2", question: "Combining two cubes of side 'a' end to end results in a cuboid with surface area:", options: ["12a²", "10a²", "8a²", "6a²"], correctAnswer: "b", explanation: "l = 2a, b = a, h = a. Surface area = 2(2a² + a² + 2a²) = 2(5a²) = 10a²." },
    { id: "c10m12-mcq-3", question: "A cylindrical pencil sharpened at one end is combination of:", options: ["A cone and a cylinder", "Frustum and cylinder", "Hemisphere and cylinder", "Two cylinders"], correctAnswer: "a", explanation: "Sharpened tip is a cone and body is a cylinder." },
    { id: "c10m12-mcq-4", question: "A surahi is the combination of:", options: ["A sphere and a cylinder", "A hemisphere and a cylinder", "Two hemispheres", "A cylinder and a cone"], correctAnswer: "a", explanation: "Spherical base with a cylindrical neck." },
    { id: "c10m12-mcq-5", question: "A plumbline (sahul) used by masons is combination of:", options: ["A cone and a cylinder", "A hemisphere and a cone", "Frustum and cylinder", "Sphere and cylinder"], correctAnswer: "b", explanation: "Conical bottom topped with a hemispherical top." },
    { id: "c10m12-mcq-6", question: "Volume of a sphere of radius r is:", options: ["4/3 πr³", "2/3 πr³", "4πr²", "3πr²"], correctAnswer: "a", explanation: "Sphere volume formula is V = 4/3 πr³." },
    { id: "c10m12-mcq-7", question: "Total Surface Area of a solid hemisphere of radius r is:", options: ["2πr²", "3πr²", "4πr²", "2/3 πr³"], correctAnswer: "b", explanation: "TSA of solid hemisphere = CSA + Base = 2πr² + πr² = 3πr²." },
    { id: "c10m12-mcq-8", question: "If radius of a sphere is doubled, its volume becomes:", options: ["2 times", "4 times", "8 times", "16 times"], correctAnswer: "c", explanation: "Volume is proportional to r³. (2)³ = 8 times." },
    { id: "c10m12-mcq-9", question: "The ratio of total surface area to curved surface area of a hemisphere is:", options: ["3 : 2", "2 : 3", "4 : 3", "3 : 4"], correctAnswer: "a", explanation: "TSA/CSA = 3πr² / 2πr² = 3/2 = 3 : 2." },
    { id: "c10m12-mcq-10", question: "If the radius of a cylinder is doubled and height is halved, its volume will be:", options: ["Same", "Doubled", "Halved", "4 times"], correctAnswer: "b", explanation: "New V = π(2r)²(h/2) = π(4r²)(h/2) = 2 πr²h (Doubled)." }
  ]
};
