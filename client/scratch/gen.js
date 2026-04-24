const class10Chapters = [
  { id: "ch1", number: 1, name: "Real Numbers", color: "#E91E63" },
  { id: "ch2", number: 2, name: "Polynomials", color: "#00C853" },
  { id: "ch3", number: 3, name: "Pair of Linear Equations", color: "#FFAB00" },
  { id: "ch4", number: 4, name: "Quadratic Equations", color: "#AA00FF" },
  { id: "ch5", number: 5, name: "Arithmetic Progressions", color: "#00B8D4" },
  { id: "ch6", number: 6, name: "Triangles", color: "#F06292" },
  { id: "ch7", number: 7, name: "Coordinate Geometry", color: "#6200EA" },
  { id: "ch8", number: 8, name: "Introduction to Trigonometry", color: "#FF6D00" },
  { id: "ch9", number: 9, name: "Some Applications of Trigonometry", color: "#0091EA" },
  { id: "ch10", number: 10, name: "Circles", color: "#FFD600" },
  { id: "ch11", number: 11, name: "Areas Related to Circles", color: "#00D4FF" },
  { id: "ch12", number: 12, name: "Surface Areas and Volumes", color: "#00BFA5" },
  { id: "ch13", number: 13, name: "Statistics", color: "#E040FB" },
  { id: "ch14", number: 14, name: "Probability", color: "#64DD17" },
];

let out = "";
[9, 8, 7].forEach(c => {
  out += `  "Class ${c}": {\n    "Mathematics": [\n`;
  class10Chapters.forEach((ch, i) => {
    out += `      { id: "c${c}-math-${ch.number}", number: ${ch.number}, name: "Chapter ${ch.number}", color: "${ch.color}" },\n`;
  });
  out += `    ]\n  },\n`;
});
console.log(out);
