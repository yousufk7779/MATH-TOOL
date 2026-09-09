// scripts/c11_phy_10_mcqs.js
const { sanitizeMath } = require('./sanitize_math');

const rawMcqs = [
  // Q1 - Basic - Key: A
  {
    id: "c11-phy-10-mcq-1",
    question: "What is the phase difference between the displacement and velocity of a particle executing Simple Harmonic Motion?",
    options: [
      "A):   $\\frac{\\pi}{2}\\text{ radians}$ ($90^{\\circ}$)",
      "B):   $\\pi\\text{ radians}$ ($180^{\\circ}$)",
      "C):   Zero",
      "D):   $2\\pi\\text{ radians}$"
    ],
    correctAnswer: "A",
    explanation: "In S.H.M, if displacement is $x = A \\cos(\\omega t)$, velocity is $v = -\\omega A \\sin(\\omega t) = \\omega A \\cos(\\omega t + \\pi/2)$. Hence velocity leads displacement by a phase angle of $\\pi/2\\text{ radians}$."
  },
  // Q2 - Basic - Key: B
  {
    id: "c11-phy-10-mcq-2",
    question: "In linear Simple Harmonic Motion, the restoring force acting on an oscillating particle is directly proportional to:",
    options: [
      "A):   Square of displacement ($x^2$)",
      "B):   Displacement from mean position ($x$)",
      "C):   Velocity ($v$)",
      "D):   Time period ($T$)"
    ],
    correctAnswer: "B",
    explanation: "By definition of S.H.M, Hooke's Law dictates that restoring force is directly proportional to displacement from the mean position and directed toward it: $F = -kx$."
  },
  // Q3 - Basic - Key: C
  {
    id: "c11-phy-10-mcq-3",
    question: "At what displacement $x$ from the mean position is the kinetic energy of a simple harmonic oscillator equal to its potential energy?",
    options: [
      "A):   $x = \\pm A$",
      "B):   $x = \\pm \\frac{A}{2}$",
      "C):   $x = \\pm \\frac{A}{\\sqrt{2}}$",
      "D):   $x = 0$"
    ],
    correctAnswer: "C",
    explanation: "Equating $E_k = U \\implies \\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} k x^2 \\implies 2x^2 = A^2 \\implies x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707 A$."
  },
  // Q4 - Basic - Key: D
  {
    id: "c11-phy-10-mcq-4",
    question: "For small oscillations, the time period of a simple pendulum depends upon which of the following physical factors?",
    options: [
      "A):   Mass of the bob",
      "B):   Material of the bob",
      "C):   Amplitude of oscillation",
      "D):   Effective length of the pendulum string"
    ],
    correctAnswer: "D",
    explanation: "From $T = 2\\pi \\sqrt{L/g}$, the period depends exclusively on effective length $L$ and local gravitational acceleration $g$. It is strictly independent of the bob's mass, density, and amplitude."
  },
  // Q5 - Basic - Key: A
  {
    id: "c11-phy-10-mcq-5",
    question: "When an ideal spring of force constant $k$ is cut into two equal halves, the force constant of each half becomes:",
    options: [
      "A):   $2k$",
      "B):   $\\frac{k}{2}$",
      "C):   $k$",
      "D):   $4k$"
    ],
    correctAnswer: "A",
    explanation: "Spring constant is inversely proportional to spring length ($k \\propto 1/L$). Halving the length doubles the stiffness to $2k$."
  },
  // Q6 - Basic - Key: B
  {
    id: "c11-phy-10-mcq-6",
    question: "The acceleration $a$ of a particle executing S.H.M at displacement $x$ from its mean position is given by:",
    options: [
      "A):   $+\\omega^2 x$",
      "B):   $-\\omega^2 x$",
      "C):   $-\\omega x^2$",
      "D):   $+\\omega x$"
    ],
    correctAnswer: "B",
    explanation: "From the fundamental differential equation of S.H.M $\\frac{d^2x}{dt^2} + \\omega^2 x = 0$, the acceleration is $a = -\\omega^2 x$, acting opposite to displacement."
  },
  // Q7 - Basic - Key: C
  {
    id: "c11-phy-10-mcq-7",
    question: "In a harmonic progressive wave $y(x,t) = A \\sin(kx - \\omega t)$, the wave propagation speed $v$ is given by:",
    options: [
      "A):   $\\omega k$",
      "B):   $\\frac{k}{\\omega}$",
      "C):   $\\frac{\\omega}{k}$",
      "D):   $\\frac{1}{\\omega k}$"
    ],
    correctAnswer: "C",
    explanation: "Wave velocity is $v = \\nu \\lambda = \\left( \\frac{\\omega}{2\\pi} \\right) \\left( \\frac{2\\pi}{k} \\right) = \\frac{\\omega}{k}$."
  },
  // Q8 - Basic - Key: D
  {
    id: "c11-phy-10-mcq-8",
    question: "In any standing wave pattern, the distance between two consecutive displacement nodes is:",
    options: [
      "A):   $\\lambda$",
      "B):   $2\\lambda$",
      "C):   $\\frac{\\lambda}{4}$",
      "D):   $\\frac{\\lambda}{2}$"
    ],
    correctAnswer: "D",
    explanation: "Nodes occur at intervals of $\\lambda/2$. The distance between two consecutive nodes (or two consecutive antinodes) is always $\\lambda/2$."
  },
  // Q9 - Basic - Key: A
  {
    id: "c11-phy-10-mcq-9",
    question: "An organ pipe open at both ends produces sound containing which harmonic frequencies?",
    options: [
      "A):   All integer harmonics ($f_1, 2f_1, 3f_1, 4f_1, \\dots$)",
      "B):   Only odd harmonics ($f_1, 3f_1, 5f_1, \\dots$)",
      "C):   Only even harmonics ($2f_1, 4f_1, 6f_1, \\dots$)",
      "D):   Only the fundamental frequency"
    ],
    correctAnswer: "A",
    explanation: "In an open organ pipe, antinodes form at both open ends, giving frequencies $f_n = n \\left( \\frac{v}{2L} \\right) = n f_1$, generating all harmonics ($1:2:3:4$)."
  },
  // Q10 - Basic - Key: B
  {
    id: "c11-phy-10-mcq-10",
    question: "A closed organ pipe (closed at one end, open at the other) produces harmonic overtones in the frequency ratio:",
    options: [
      "A):   $1 : 2 : 3 : 4$",
      "B):   $1 : 3 : 5 : 7$",
      "C):   $2 : 4 : 6 : 8$",
      "D):   $1 : 4 : 9 : 16$"
    ],
    correctAnswer: "B",
    explanation: "With a node at the closed end and an antinode at the open end, frequencies satisfy $f'_n = (2n - 1) \\frac{v}{4L}$, yielding only odd harmonics ($1 : 3 : 5 : 7$)."
  },
  // Q11 - Basic - Key: C
  {
    id: "c11-phy-10-mcq-11",
    question: "When a mechanical wave is reflected from a rigid (fixed) boundary, what phase change is introduced in the reflected wave?",
    options: [
      "A):   Zero",
      "B):   $\\frac{\\pi}{2}\\text{ radians}$ ($90^{\\circ}$)",
      "C):   $\\pi\\text{ radians}$ ($180^{\\circ}$)",
      "D):   $2\\pi\\text{ radians}$ ($360^{\\circ}$)"
    ],
    correctAnswer: "C",
    explanation: "Reflection at a denser or fixed boundary imposes zero displacement at the boundary, requiring an inverted reflected wave with an abrupt phase shift of $\\pi\\text{ radians}$ ($180^{\\circ}$)."
  },
  // Q12 - Basic - Key: D
  {
    id: "c11-phy-10-mcq-12",
    question: "The acoustic phenomenon of beats is a direct physical consequence of:",
    options: [
      "A):   Reflection of sound waves from distant walls",
      "B):   Refraction of sound waves across air thermal layers",
      "C):   Doppler shift from moving sources",
      "D):   Superposition of two waves of slightly different frequencies"
    ],
    correctAnswer: "D",
    explanation: "Beats occur when two collinear sound waves of nearly equal frequencies and comparable amplitudes interfere, producing periodic waxing and waning of loudness at frequency $f_b = |f_1 - f_2|$."
  },
  // Q13 - Basic - Key: A
  {
    id: "c11-phy-10-mcq-13",
    question: "If the tension in a stretched string is increased by a factor of 4 while its length and mass are kept constant, the speed of transverse waves on it becomes:",
    options: [
      "A):   Doubled ($2v$)",
      "B):   Quadrupled ($4v$)",
      "C):   Halved ($v/2$)",
      "D):   Unchanged"
    ],
    correctAnswer: "A",
    explanation: "From $v = \\sqrt{T/\\mu}$, wave speed is directly proportional to $\\sqrt{T}$. Quadrupling tension ($T \\to 4T$) causes speed to scale by $\\sqrt{4} = 2$ times."
  },
  // Q14 - Basic - Key: B
  {
    id: "c11-phy-10-mcq-14",
    question: "What is the precise time period of a standard Seconds Pendulum on Earth?",
    options: [
      "A):   $1\\text{ second}$",
      "B):   $2\\text{ seconds}$",
      "C):   $0.5\\text{ seconds}$",
      "D):   $4\\text{ seconds}$"
    ],
    correctAnswer: "B",
    explanation: "A Seconds Pendulum takes exactly $1\\text{ second}$ to swing from one extreme to the other (half period), giving a full oscillation time period of $T = 2\\text{ seconds}$."
  },
  // Q15 - Basic - Key: C
  {
    id: "c11-phy-10-mcq-15",
    question: "The speed of sound in air at a given constant temperature is completely independent of:",
    options: [
      "A):   The humidity of the air",
      "B):   The chemical molecular mass of the gas",
      "C):   The atmospheric pressure",
      "D):   The adiabatic index $\\gamma$"
    ],
    correctAnswer: "C",
    explanation: "From $v = \\sqrt{\\gamma P / \\rho}$, by Boyle's Law at constant temperature, $P/\\rho = \\text{constant}$. Changing pressure causes a proportional change in density, leaving sound speed strictly unaltered."
  },
  // Q16 - Moderate/Numerical - Key: D
  {
    id: "c11-phy-10-mcq-16",
    question: "A particle executes S.H.M with amplitude $A$ and time period $T$. What is the time taken to travel from the mean position ($x=0$) to half its amplitude ($x = A/2$)?",
    options: [
      "A):   $\\frac{T}{4}$",
      "B):   $\\frac{T}{6}$",
      "C):   $\\frac{T}{8}$",
      "D):   $\\frac{T}{12}$"
    ],
    correctAnswer: "D",
    explanation: "$x = A \\sin(\\omega t) \\implies \\frac{A}{2} = A \\sin(\\omega t) \\implies \\omega t = \\frac{\\pi}{6} \\implies \\left(\\frac{2\\pi}{T}\\right) t = \\frac{\\pi}{6} \\implies t = \\frac{T}{12}$."
  },
  // Q17 - Moderate/Numerical - Key: A
  {
    id: "c11-phy-10-mcq-17",
    question: "If the length of a simple pendulum is increased by $44\\%$, by what percentage does its time period increase?",
    options: [
      "A):   $20\\%$",
      "B):   $44\\%$",
      "C):   $22\\%$",
      "D):   $10\\%$"
    ],
    correctAnswer: "A",
    explanation: "$T \\propto \\sqrt{L}$. New length is $1.44 L_1$, so new period is $T_2 = \\sqrt{1.44} T_1 = 1.20 T_1$, representing an increase of $0.20 = 20\\%$."
  },
  // Q18 - Moderate/Numerical - Key: B
  {
    id: "c11-phy-10-mcq-18",
    question: "Two tuning forks of frequencies $256\\text{ Hz}$ and $260\\text{ Hz}$ are sounded together. What are the beat frequency and beat period?",
    options: [
      "A):   $4\\text{ Hz}$ and $4\\text{ s}$",
      "B):   $4\\text{ Hz}$ and $0.25\\text{ s}$",
      "C):   $2\\text{ Hz}$ and $0.5\\text{ s}$",
      "D):   $8\\text{ Hz}$ and $0.125\\text{ s}$"
    ],
    correctAnswer: "B",
    explanation: "Beat frequency is $f_b = |260 - 256| = 4\\text{ Hz}$. The beat period is $T_b = \\frac{1}{f_b} = \\frac{1}{4} = 0.25\\text{ seconds}$."
  },
  // Q19 - Moderate - Key: C
  {
    id: "c11-phy-10-mcq-19",
    question: "Two identical springs, each of force constant $k$, are connected in series. What is the equivalent force constant of the combination?",
    options: [
      "A):   $2k$",
      "B):   $k$",
      "C):   $\\frac{k}{2}$",
      "D):   $\\frac{k}{4}$"
    ],
    correctAnswer: "C",
    explanation: "For springs in series: $\\frac{1}{k_{\\text{eq}}} = \\frac{1}{k} + \\frac{1}{k} = \\frac{2}{k} \\implies k_{\\text{eq}} = \\frac{k}{2}$."
  },
  // Q20 - Moderate/Numerical - Key: D
  {
    id: "c11-phy-10-mcq-20",
    question: "The fundamental frequency of a closed organ pipe is $200\\text{ Hz}$. What is the frequency of its first overtone (3rd harmonic)?",
    options: [
      "A):   $300\\text{ Hz}$",
      "B):   $400\\text{ Hz}$",
      "C):   $500\\text{ Hz}$",
      "D):   $600\\text{ Hz}$"
    ],
    correctAnswer: "D",
    explanation: "A closed pipe generates only odd harmonics: $f'_1, 3f'_1, 5f'_1, \\dots$ The first overtone is the 3rd harmonic: $f'_2 = 3 f'_1 = 3 \\times 200 = 600\\text{ Hz}$."
  },
  // Q21 - Moderate/Numerical - Key: A
  {
    id: "c11-phy-10-mcq-21",
    question: "A harmonic wave is described by $y(x,t) = 0.05 \\sin(20\\pi t - 2\\pi x)\\text{ m}$. What is the wavelength $\\lambda$ of this wave?",
    options: [
      "A):   $1.0\\text{ m}$",
      "B):   $2.0\\text{ m}$",
      "C):   $0.5\\text{ m}$",
      "D):   $10\\text{ m}$"
    ],
    correctAnswer: "A",
    explanation: "Comparing with $y = A \\sin(\\omega t - kx)$, wave number is $k = 2\\pi\\text{ m}^{-1}$. Since $k = \\frac{2\\pi}{\\lambda}$, we have $\\lambda = \\frac{2\\pi}{2\\pi} = 1.0\\text{ m}$."
  },
  // Q22 - Moderate - Key: B
  {
    id: "c11-phy-10-mcq-22",
    question: "For a particle executing S.H.M of angular frequency $\\omega$, what is the ratio of its maximum velocity to its maximum acceleration?",
    options: [
      "A):   $\\omega$",
      "B):   $\\frac{1}{\\omega}$",
      "C):   $\\omega^2$",
      "D):   $\\frac{1}{\\omega^2}$"
    ],
    correctAnswer: "B",
    explanation: "$v_{\\text{max}} = \\omega A$ and $|a_{\\text{max}}| = \\omega^2 A$. Dividing gives $\\frac{v_{\\text{max}}}{|a_{\\text{max}}|} = \\frac{\\omega A}{\\omega^2 A} = \\frac{1}{\\omega}$."
  },
  // Q23 - Moderate/Numerical - Key: C
  {
    id: "c11-phy-10-mcq-23",
    question: "An organ pipe open at both ends has length $85\\text{ cm}$. If the speed of sound in air is $340\\text{ m/s}$, what is the fundamental frequency of the pipe?",
    options: [
      "A):   $100\\text{ Hz}$",
      "B):   $150\\text{ Hz}$",
      "C):   $200\\text{ Hz}$",
      "D):   $400\\text{ Hz}$"
    ],
    correctAnswer: "C",
    explanation: "For an open pipe, $f_1 = \\frac{v}{2L} = \\frac{340}{2 \\times 0.85} = \\frac{340}{1.70} = 200\\text{ Hz}$."
  },
  // Q24 - Moderate/Numerical - Key: D
  {
    id: "c11-phy-10-mcq-24",
    question: "A tuning fork produces $4\\text{ beats/s}$ with a standard fork of frequency $288\\text{ Hz}$. When its prongs are loaded with a small amount of wax, the beat frequency decreases to $2\\text{ beats/s}$. What was its original frequency?",
    options: [
      "A):   $284\\text{ Hz}$",
      "B):   $286\\text{ Hz}$",
      "C):   $290\\text{ Hz}$",
      "D):   $292\\text{ Hz}$"
    ],
    correctAnswer: "D",
    explanation: "Initial possible frequencies are $288 \\pm 4 = 292\\text{ Hz}$ or $284\\text{ Hz}$. Waxing decreases the fork frequency. If frequency was $292\\text{ Hz}$, decreasing it brings it closer to $288\\text{ Hz}$, reducing beats to $2$. If it were $284\\text{ Hz}$, decreasing it would increase beat frequency beyond $4$. Thus, original frequency was $292\\text{ Hz}$."
  },
  // Q25 - Advance - Key: D
  {
    id: "c11-phy-10-mcq-25",
    question: "A simple pendulum of period $T$ is suspended inside an elevator accelerating vertically upward with acceleration $a = g$. What is its new time period $T'$?",
    options: [
      "A):   $2T$",
      "B):   $\\sqrt{2} T$",
      "C):   $\\frac{T}{2}$",
      "D):   $\\frac{T}{\\sqrt{2}}$"
    ],
    correctAnswer: "D",
    explanation: "When accelerating upward with $a = g$, effective gravity is $g_{\\text{eff}} = g + a = 2g$. The new period is $T' = 2\\pi \\sqrt{\\frac{L}{2g}} = \\frac{1}{\\sqrt{2}} \\left( 2\\pi \\sqrt{\\frac{L}{g}} \\right) = \\frac{T}{\\sqrt{2}}$."
  }
];

const c11Phy10Mcqs = rawMcqs.map(mcq => ({
  id: mcq.id,
  question: sanitizeMath(mcq.question),
  options: mcq.options.map(opt => sanitizeMath(opt)),
  correctAnswer: mcq.correctAnswer,
  explanation: sanitizeMath(mcq.explanation)
}));

module.exports = { c11Phy10Mcqs };
