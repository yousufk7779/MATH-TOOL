const { themeColor, frac } = require('./c11_phy_3_helpers');

function getVsaQuestions() {
  const qList = [
    {
      q: "Define force in classical mechanics. State its SI base unit and dimensional formula.",
      sol: "Force is an external push or pull that changes or tends to change the state of rest, uniform rectilinear motion, or shape and size of a body.<br><b>SI Unit:</b> Newton (N = kg m s<sup>-2</sup>) &bull; <b>Dimensional Formula:</b> [M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>]."
    },
    {
      q: "What is meant by the 'Aristotelian Fallacy' regarding physical motion?",
      sol: "The ancient Greek philosopher Aristotle asserted that an external force is continuously required to keep a body in uniform motion. This is a fallacy because in the absence of opposing resistive forces (like friction and air drag), no external force is needed to sustain constant velocity."
    },
    {
      q: "State Newton's First Law of Motion. What two fundamental concepts does it establish?",
      sol: "<b>Statement:</b> Every physical body continues in its state of rest or uniform motion in a straight line unless acted upon by an external unbalanced force.<br>It establishes: (1) <b>Inertia</b> of matter, and (2) <b>Qualitative definition of force</b>."
    },
    {
      q: "Define Inertia. What physical quantity serves as the direct quantitative measure of a body's inertia?",
      sol: "Inertia is the inherent property of a body by virtue of which it resists any alteration in its state of rest or uniform rectilinear motion.<br>The <b>inertial mass (m)</b> of the body is the direct quantitative measure of its inertia."
    },
    {
      q: "Enumerate the three types of inertia with one classic practical example for each.",
      sol: "1. <b>Inertia of Rest:</b> Dust particles fly out when a carpet is beaten with a stick.<br>2. <b>Inertia of Motion:</b> A passenger lurches forward when a speeding bus suddenly applies brakes.<br>3. <b>Inertia of Direction:</b> Sparks flying off a rotating grinding wheel travel tangentially."
    },
    {
      q: "Why do passengers standing in a bus fall backward when the bus starts moving forward abruptly?",
      sol: "When the bus starts abruptly, the lower part of the passengers' bodies in contact with the floor is accelerated forward by friction, while their upper bodies tend to remain stationary due to <b>inertia of rest</b>, causing them to fall backward."
    },
    {
      q: "Why does an athlete run some distance before taking a long jump?",
      sol: "By sprinting before jumping, the athlete acquires <b>inertia of motion</b>. This forward velocity adds to the propulsion force generated at takeoff, allowing the athlete to cover a greater horizontal flight distance."
    },
    {
      q: "Why are mudguards placed over the wheels of moving vehicles?",
      sol: "Mud adhering to rotating tires flies off tangentially at every instant due to <b>inertia of direction</b>. Mudguards intercept these flying mud particles and prevent them from splashing over the vehicle or other motorists."
    },
    {
      q: "What is an Inertial Frame of Reference? Give an example.",
      sol: "An inertial frame of reference is a coordinate system in which Newton's laws of motion hold strictly true without introducing fictitious or pseudo-forces. A reference frame fixed to the Earth (approximated) or moving with constant velocity relative to deep space stars is an inertial frame."
    },
    {
      q: "Is a rotating platform or turntable an inertial frame of reference? Justify.",
      sol: "<b>No.</b> A rotating platform undergoes continuous centripetal acceleration (a = &omega;<sup>2</sup> r &ne; 0) directed toward its center of rotation. Any accelerating frame is a <b>non-inertial frame</b>, requiring pseudo-forces (centrifugal force) to analyze motion."
    },
    {
      q: "Define Linear Momentum. Is it a scalar or a vector quantity? State its SI unit.",
      sol: "Linear momentum is defined as the total quantity of motion contained within a body, measured as the product of mass and velocity: <b>p = m v</b>.<br>It is a <b>vector quantity</b> pointing along the velocity vector. <b>SI Unit:</b> kg m s<sup>-1</sup> (or N s)."
    },
    {
      q: "State Newton's Second Law of Motion in its universal differential form.",
      sol: "The time rate of change of linear momentum of an object is directly proportional to the applied net external force and takes place along the direction of the force: <b>F = " + frac('dp', 'dt') + "</b>."
    },
    {
      q: "Under what specific condition does the equation F = dp/dt reduce to F = m a?",
      sol: "Since p = mv, F = " + frac('d', 'dt') + "(mv) = m " + frac('dv', 'dt') + " + v " + frac('dm', 'dt') + ". The equation reduces strictly to <b>F = ma</b> when the inertial mass of the particle is <b>constant</b> (" + frac('dm', 'dt') + " = 0)."
    },
    {
      q: "Write the mathematical expression of Newton's Second Law for a variable mass system.",
      sol: "For a variable mass system (such as an accelerating rocket burning propellant):<br><b>F = m " + frac('dv', 'dt') + " + v<sub>rel</sub> " + frac('dm', 'dt') + "</b>, where v<sub>rel</sub> is the relative ejection velocity of mass dm/dt."
    },
    {
      q: "Define the SI absolute unit of force: One Newton (1 N).",
      sol: "<b>One Newton (1 N)</b> is defined as that magnitude of external unbalanced force which produces an acceleration of exactly 1 m s<sup>-2</sup> when acting on a body of mass 1 kg (1 N = 1 kg &times; 1 m s<sup>-2</sup>)."
    },
    {
      q: "Define the CGS unit of force (1 dyne) and establish its mathematical relation with 1 Newton.",
      sol: "<b>1 dyne</b> is that force which accelerates a mass of 1 gram by 1 cm s<sup>-2</sup>.<br>1 N = 1 kg &times; 1 m s<sup>-2</sup> = (10<sup>3</sup> g) &times; (10<sup>2</sup> cm s<sup>-2</sup>) = 10<sup>5</sup> g cm s<sup>-2</sup> = <b>10<sup>5</sup> dyne</b>."
    },
    {
      q: "Define 1 kilogram-force (1 kgf) and convert it into Newtons (g = 9.8 m/s²).",
      sol: "<b>1 kgf</b> is the gravitational force exerted by Earth on a standard mass of 1 kilogram.<br>1 kgf = 1 kg &times; g = 1 kg &times; 9.8 m s<sup>-2</sup> = <b>9.8 N</b>."
    },
    {
      q: "Why is Newton's Second Law regarded as the fundamental law of motion?",
      sol: "Because both Newton's First Law and Newton's Third Law can be mathematically deduced from the Second Law. When F = 0, a = 0 (First Law); and in an isolated system with no external force, dp_total/dt = 0 leads to Action = -Reaction (Third Law)."
    },
    {
      q: "Define Impulse of a force. State its SI unit and dimensional formula.",
      sol: "Impulse is the total effect produced by a force acting over a finite duration, measured as the time integral of force: <b>J = &int; F dt = F<sub>avg</sub> &Delta;t</b>.<br><b>SI Unit:</b> N s (or kg m s<sup>-1</sup>) &bull; <b>Dimensional Formula:</b> [M<sup>1</sup> L<sup>1</sup> T<sup>-1</sup>]."
    },
    {
      q: "State the Impulse-Momentum Theorem.",
      sol: "The impulse delivered to a particle by an applied force over any time interval is identically equal to the change in linear momentum of the particle: <b>J = &Delta;p = p<sub>2</sub> - p<sub>1</sub></b>."
    },
    {
      q: "What physical quantity is represented by the geometric area under a Force-Time (F-t) graph?",
      sol: "The area under the Force-Time (F-t) curve bounded by the time axis represents the <b>Impulse (J)</b> delivered by the force, which is equal to the <b>net change in linear momentum (&Delta;p)</b>."
    },
    {
      q: "Why does a cricketer pull his hands backward while catching a high-speed cricket ball?",
      sol: "Pulling hands back lengthens the impact time interval &Delta;t. Since impulse &Delta;p = F<sub>avg</sub> &Delta;t is fixed, increasing &Delta;t substantially reduces the average impulsive force F<sub>avg</sub> exerted on the cricketer's palms, preventing injury."
    },
    {
      q: "Why are automobiles manufactured with crumple zones and hydraulic shock absorbers?",
      sol: "Shock absorbers and crumple zones increase the duration &Delta;t over which collisions or road bumps occur, thereby dramatically minimizing the peak impulsive force transmitted to vehicle occupants."
    },
    {
      q: "Why are fragile glassware and porcelain chinaware packed with straw, paper, or bubble wrap?",
      sol: "The soft packing material deforms upon impact, increasing the deceleration time &Delta;t during drops or transport, thereby drastically reducing the impulsive force exerted on the brittle glassware."
    },
    {
      q: "State Newton's Third Law of Motion in vector notation.",
      sol: "To every action, there is always an equal and opposite reaction: <b>F<sub>AB</sub> = -F<sub>BA</sub></b>, where F<sub>AB</sub> is the force exerted on body A by body B, and F<sub>BA</sub> is the force exerted on body B by body A."
    },
    {
      q: "Do action and reaction forces act on the same body or on different bodies?",
      sol: "Action and reaction forces <b>always act on two entirely different, interacting bodies</b>. Because they act on different bodies, they never balance or cancel each other out."
    },
    {
      q: "A heavy horse pulls a light cart. If the force exerted by horse on cart equals the force exerted by cart on horse, how does the cart accelerate forward?",
      sol: "The horse and cart accelerate because the horse pushes backward on the ground with force F, and the ground exerts an equal and opposite forward reaction force R on the horse's hooves. If this forward reaction exceeds wheel friction, the combined system accelerates."
    },
    {
      q: "State the Principle of Conservation of Linear Momentum.",
      sol: "In the absence of any net external unbalanced force (&Sigma; F<sub>ext</sub> = 0), the total vector linear momentum of an isolated system of interacting particles remains strictly constant over time."
    },
    {
      q: "A rifle fires a bullet of mass m with muzzle speed v. If rifle mass is M, write its recoil speed.",
      sol: "By conservation of linear momentum: 0 = m v + M V<sub>R</sub> &rArr; <b>V<sub>R</sub> = -" + frac('m', 'M') + " v</b>.<br>The negative sign confirms the rifle recoils in the direction opposite to bullet travel."
    },
    {
      q: "On what fundamental physical law is the propulsion of rockets and jet engines based?",
      sol: "Rocket and jet propulsion is based on <b>Newton's Third Law of Motion</b> and the <b>Law of Conservation of Linear Momentum</b> in variable-mass reactive systems."
    },
    {
      q: "Define Concurrent Forces.",
      sol: "Concurrent forces are forces whose lines of action pass through a single, common spatial point."
    },
    {
      q: "What is the condition for translational equilibrium of a particle subjected to coplanar forces?",
      sol: "The vector resultant of all forces acting on the particle must vanish: <b>&Sigma; F = 0</b>, which requires <b>&Sigma; F<sub>x</sub> = 0</b> and <b>&Sigma; F<sub>y</sub> = 0</b>."
    },
    {
      q: "State Lami's Theorem for three coplanar concurrent forces in equilibrium.",
      sol: "If three concurrent forces F<sub>1</sub>, F<sub>2</sub>, F<sub>3</sub> keep a body in equilibrium: <b>" + frac('F<sub>1</sub>', 'sin &alpha;') + " = " + frac('F<sub>2</sub>', 'sin &beta;') + " = " + frac('F<sub>3</sub>', 'sin &gamma;') + "</b>, where &alpha;, &beta;, &gamma; are angles opposite to F<sub>1</sub>, F<sub>2</sub>, F<sub>3</sub>."
    },
    {
      q: "What is Static Friction? Why is it classified as a self-adjusting force?",
      sol: "Static friction is the opposing force between two contact surfaces that prevents impending relative motion. It is <b>self-adjusting</b> because its magnitude automatically matches the applied external force (f<sub>s</sub> = F<sub>applied</sub>) up to the limiting friction value."
    },
    {
      q: "Define Limiting Friction (f_L) and write its formula in terms of normal reaction N.",
      sol: "Limiting friction is the maximum threshold value of static friction beyond which relative sliding commences: <b>f<sub>L</sub> = &mu;<sub>s</sub> N</b>, where &mu;<sub>s</sub> is the coefficient of static friction."
    },
    {
      q: "Define Kinetic Friction (f_k). Why is the coefficient of kinetic friction less than static friction (&mu;_k < &mu;_s)?",
      sol: "Kinetic friction is the opposing force between surfaces in actual relative sliding motion: <b>f<sub>k</sub> = &mu;<sub>k</sub> N</b>.<br>&mu;<sub>k</sub> < &mu;<sub>s</sub> because once sliding starts, contact asperities do not have enough time to form deep, interlocking cold-welded bonds."
    },
    {
      q: "Define Angle of Friction (&theta;) and write its relation with the coefficient of static friction &mu;_s.",
      sol: "Angle of friction is the angle that the resultant of limiting friction f<sub>L</sub> and normal reaction N makes with the normal reaction: <b>tan &theta; = &mu;<sub>s</sub> &rArr; &theta; = tan<sup>-1</sup>(&mu;<sub>s</sub>)</b>."
    },
    {
      q: "Define Angle of Repose (&alpha;). State its relationship with Angle of Friction (&theta;).",
      sol: "Angle of repose is the maximum inclination angle of a rough inclined plane at which a body placed on it remains at rest without sliding down under gravity: <b>tan &alpha; = &mu;<sub>s</sub></b>.<br>Therefore, <b>&alpha; = &theta; (Angle of Repose = Angle of Friction)</b>."
    },
    {
      q: "Write the formula for the acceleration of a mass m sliding down a rough incline of angle &alpha; with kinetic friction &mu;_k.",
      sol: "The net downward force is mg sin &alpha; - f<sub>k</sub> = mg sin &alpha; - &mu;<sub>k</sub> mg cos &alpha;.<br>Acceleration: <b>a = g (sin &alpha; - &mu;<sub>k</sub> cos &alpha;)</b>."
    },
    {
      q: "State the formula for maximum safe speed of a vehicle rounding an unbanked, level circular road of radius r.",
      sol: "Centripetal force is provided solely by static friction: mv<sup>2</sup>/r &le; &mu;<sub>s</sub> mg &rArr; <b>v<sub>max</sub> = &radic;(&mu;<sub>s</sub> r g)</b>."
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 1}: ${item.q}</h3>
    <div style="background: rgba(255, 138, 101, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Standard Answer (1 Mark):</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getVsaQuestions };
