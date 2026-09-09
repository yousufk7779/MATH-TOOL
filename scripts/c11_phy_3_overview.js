const {
  themeColor,
  frac,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_3_helpers');

function buildOverview() {
  return `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- CHAPTER TITLE BANNER -->
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h1 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 24px; font-weight: bold; text-align: center !important;">
      Unit III: Laws of Motion (07 Marks)
    </h1>
    <p style="color: #CBD5E1; margin: 0; font-size: 15px; text-align: center !important;">
      Comprehensive Reference Textbook Guide &bull; JKBOSE / CBSE Official Syllabus Alignment
    </p>
  </div>

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 10px; padding: 16px; margin-bottom: 25px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">
      ⚡ Quick Glossary & Fundamental Operational Quantities
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Force (F):</b> External agency (push or pull) that changes or tends to change the state of rest or uniform motion. SI Unit: <b>Newton (N)</b> &bull; Dimensions: <b>[M L T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Linear Momentum (p):</b> Quantity of motion contained in a body; $\vec{p} = m\vec{v}$. SI Unit: <b>kg m s<sup>-1</sup></b> &bull; Dimensions: <b>[M L T<sup>-1</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Impulse (J):</b> Product of average force and duration of impact; $\vec{J} = \vec{F}_{\text{avg}} \Delta t = \Delta\vec{p}$. SI Unit: <b>N s (or kg m s<sup>-1</sup>)</b> &bull; Dimensions: <b>[M L T<sup>-1</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Coefficient of Friction (&mu;):</b> Ratio of limiting friction to normal reaction; $\mu = f_L / N$. <b>Dimensionless & Unitless [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]</b>.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    1. Intuitive Concept of Force & Galileo's Historical Insight
  </h2>
  <p>
    In classical Newtonian mechanics, our intuitive understanding of <b>force</b> originates from muscular sensation—pushing a heavy crate, pulling a cart, stretching a spring, or kicking a football. Historically, the Greek philosopher Aristotle asserted that a constant external force is continuously required to keep a body in uniform rectilinear motion ("Aristotelian fallacy"). Aristotle argued that an arrow in flight continues forward only because air rushes behind it to push it. If the force ceased, the body would naturally come to rest.
  </p>
  <p>
    <b>Galileo Galilei</b> shattered this misconception through ingenious thought experiments with double inclined planes. Galileo observed that a marble released from rest on a smooth inclined plane rolls down, accelerating, and ascends an opposing inclined plane to almost the exact same vertical height from which it was released. When Galileo progressively decreased the inclination angle of the opposing plane, the marble traveled farther and farther along the slope to achieve that same vertical altitude.
  </p>
  <p>
    In the limiting case where the opposing slope is reduced to horizontal, Galileo deduced that if all opposing forces such as friction and air resistance could be eliminated entirely, the marble would roll along the horizontal surface forever with constant speed without requiring any pushing force! Therefore, Galileo concluded: <i>An external force is required not to maintain uniform motion, but to alter the state of motion (i.e. to produce acceleration or deceleration).</i>
  </p>

  ${analogyBox(
    "Ice Hockey Puck on Low-Friction Surface",
    "A hockey puck struck across rough concrete halts in a couple of meters due to large friction. The same puck struck with identical effort across polished rink ice slides for dozens of meters. On an idealized frictionless surface in deep outer space, the puck would glide forever at constant velocity without burning a single drop of fuel."
  )}

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    2. Inertia & Newton's First Law of Motion
  </h2>
  <p>
    <b>Inertia</b> (from the Latin word <i>iners</i>, meaning idle or sluggish) is that inherent physical property of all material bodies by virtue of which they resist any change in their existing state of rest or of uniform motion along a straight line. The mass of a body is the direct quantitative measure of its inertia: a massive locomotive possesses enormously greater inertia than a bicycle and requires vastly larger net forces to change its speed.
  </p>

  ${defBox(
    "Newton's First Law of Motion",
    "Every physical body continues in its state of rest or of uniform motion along a straight line, unless it is compelled to change that state by an unbalanced external force impressed upon it.",
    "—",
    "[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]"
  )}

  <p>
    Newton's First Law provides two vital conceptual insights:
  </p>
  <ul>
    <li><b style="color: ${themeColor};">(i) Qualitative Definition of Force:</b> Force is defined as that external push, pull, or interaction which alters or tends to alter the natural state of rest or uniform rectilinear motion of a body.</li>
    <li><b style="color: ${themeColor};">(ii) Definition of Inertial Frame of Reference:</b> An inertial frame is any reference frame in which Newton's First Law holds true without invoking artificial pseudo-forces. Any frame at rest or moving with constant velocity relative to distant fixed stars is an inertial frame.</li>
  </ul>

  <p>
    Physicists classify inertia into three distinct physical manifestations:
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. Inertia of Rest:</b> The tendency of a body to remain at rest unless disturbed. <i>Examples:</i> When a bus abruptly starts moving forward, standing passengers jerk backward because their feet move forward with the floor while their upper bodies tend to stay stationary. When a tree branch is vigorously shaken, ripe fruits detach because the branches move while the fruits tend to remain at rest.</li>
    <li><b style="color: ${themeColor};">2. Inertia of Motion:</b> The tendency of a moving body to maintain its velocity. <i>Examples:</i> When a speeding car slams on its brakes, passengers lurch forward because their bodies maintain forward velocity. An athlete runs a considerable distance before taking a long jump to gain inertia of motion.</li>
    <li><b style="color: ${themeColor};">3. Inertia of Direction:</b> The tendency of a moving body to maintain its straight-line trajectory. <i>Examples:</i> When a vehicle takes a sharp turn around a curved bend, passengers are thrown outward along the tangent to the curve. Sparks flying off a grinding wheel travel strictly along the tangent to the rotating rim.</li>
  </ul>

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    3. Linear Momentum & Newton's Second Law of Motion
  </h2>
  <p>
    Common experience demonstrates that the destructive impact of a moving object depends simultaneously on both its mass and its velocity. A cricket ball thrown at 100 km/h hurts the hand severely, whereas a table-tennis ball moving at the same speed is caught effortlessly. Conversely, a tiny bullet weighing merely 10 grams fired from a rifle penetrates steel armor because of its immense velocity.
  </p>

  ${defBox(
    "Linear Momentum (p)",
    "The linear momentum of a body is defined as the total quantity of translational motion contained in it, measured mathematically as the product of its inertial mass and its instantaneous velocity vector.",
    "kg m s<sup>-1</sup> (or N s)",
    "[M<sup>1</sup> L<sup>1</sup> T<sup>-1</sup>]"
  )}

  <p>
    Mathematically: $\vec{p} = m \vec{v}$. Linear momentum is a vector quantity pointing in the exact spatial direction of the velocity vector $\vec{v}$.
  </p>

  ${defBox(
    "Newton's Second Law of Motion",
    "The time rate of change of linear momentum of an object is directly proportional to the applied unbalanced external force, and this change takes place along the direction in which the force acts.",
    "Newton (N)",
    "[M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>]"
  )}

  ${stepDerivationBox(
    "Mathematical Derivation of F = m a from Second Law",
    [
      {
        name: "Proportionality Statement",
        content: `By Newton's Second Law: $\\vec{F} \\propto ${frac('d\\vec{p}', 'dt')} \\implies \\vec{F} = k \\, ${frac('d\\vec{p}', 'dt')}$, where $k$ is a constant of proportionality.`
      },
      {
        name: "Substitute Momentum Vector",
        content: `Substitute $\\vec{p} = m\\vec{v}$:
          <br>$\\vec{F} = k \\, ${frac('d', 'dt')}(m\\vec{v}) = k \\left( m \\, ${frac('d\\vec{v}', 'dt')} + \\vec{v} \\, ${frac('dm', 'dt')} \\right)$.`
      },
      {
        name: "Condition of Constant Mass",
        content: `In non-relativistic classical mechanics, the mass $m$ of a rigid particle is strictly constant ($dm/dt = 0$):
          <br>$\\vec{F} = k \\, m \\, ${frac('d\\vec{v}', 'dt')} = k \\, m \\vec{a}$.`
      },
      {
        name: "Unit Calibration of Proportionality Constant",
        content: `By SI definition, $1\\text{ Newton}$ is the force which produces an acceleration of $1\\text{ m s}^{-2}$ in a mass of $1\\text{ kg}$.
          <br>Substituting $F = 1\\text{ N}$, $m = 1\\text{ kg}$, $a = 1\\text{ m s}^{-2}$ yields $k = 1$.`
      },
      {
        name: "Final Master Vector Equation",
        content: `<div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold;">
          \\vec{F} = m \\vec{a} = m \\, ${frac('d\\vec{v}', 'dt')} = m \\, ${frac('d^2\\vec{r}', 'dt^2')}
        </div>`
      }
    ]
  )}

  <p>
    <b>Component Form of Second Law:</b><br>
    Since $\vec{F} = m\vec{a}$ is a 3-dimensional vector relation, it resolves into three independent scalar Cartesian equations:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 138, 101, 0.35); border-radius: 8px; padding: 10px 16px; text-align: center; margin: 12px 0; font-size: 15.5px; color: #FFCC80;">
    <b>F<sub>x</sub> = m a<sub>x</sub> = m ${frac('d v_x', 'dt')}, \quad F<sub>y</sub> = m a<sub>y</sub> = m ${frac('d v_y', 'dt')}, \quad F<sub>z</sub> = m a<sub>z</sub> = m ${frac('d v_z', 'dt')}</b>
  </div>

  <p>
    <b>Proof that Newton's Second Law is the Real Law of Motion:</b><br>
    Newton's Second Law is regarded as the master fundamental law because both the First Law and the Third Law are completely contained within it:
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. First Law Contained in Second Law:</b> From $\vec{F} = m\vec{a}$, if the net external force is zero ($\vec{F} = \vec{0}$), then since $m \ne 0$, we have $\vec{a} = \vec{0}$. Zero acceleration implies that velocity $\vec{v} = \text{constant}$. That is, an object at rest remains at rest ($\vec{v} = \vec{0}$), and an object in motion continues at constant velocity along a straight line. This is precisely Newton's First Law.</li>
    <li><b style="color: ${themeColor};">2. Third Law Contained in Second Law:</b> Consider an isolated system of two interacting bodies $A$ and $B$. In the absence of external forces ($F_{\text{ext}} = 0$), the total rate of change of momentum is zero: $\frac{d\vec{p}_A}{dt} + \frac{d\vec{p}_B}{dt} = \vec{0} \implies \vec{F}_{AB} + \vec{F}_{BA} = \vec{0} \implies \vec{F}_{AB} = -\vec{F}_{BA}$. This is precisely Newton's Third Law (Action = -Reaction).</li>
  </ul>

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    4. Impulse & The Impulse-Momentum Theorem
  </h2>
  <p>
    In numerous real-world physical situations—such as a bat striking a cricket ball, a foot kicking a soccer ball, or an automobile collision—a very large force acts for an extremely short interval of time. Such forces are designated as <b>impulsive forces</b>. Because impulsive forces change violently during the fleeting millisecond contact duration, measuring the instantaneous force $F(t)$ is practically impossible. Instead, we measure the total impact delivered, known as <b>Impulse</b>.
  </p>

  ${defBox(
    "Impulse of a Force (J)",
    "Impulse is defined as the total effect of a force acting over a finite time interval, measured mathematically as the time integral of the force vector over that duration.",
    "N s (or kg m s<sup>-1</sup>)",
    "[M<sup>1</sup> L<sup>1</sup> T<sup>-1</sup>]"
  )}

  <p>
    <b>The Impulse-Momentum Theorem:</b><br>
    From Newton's Second Law: $\vec{F} = \frac{d\vec{p}}{dt} \implies d\vec{p} = \vec{F} \, dt$.<br>
    Integrating both sides over the collision duration from $t_1$ to $t_2$:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 138, 101, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 14px 0; font-size: 16px; color: #76FF03;">
    <b>\vec{J} = \int_{t_1}^{t_2} \vec{F} \, dt = \vec{F}_{\text{avg}} \Delta t = \vec{p}_2 - \vec{p}_1 = \Delta\vec{p}</b>
  </div>
  <p>
    <i>The impulse of an applied force equals the total change in linear momentum of the body.</i> On a Force-Time ($F-t$) graph, the impulse is geometrically represented by the <b>area under the curve</b> bounded by the time axis.
  </p>

  ${analogyBox(
    "Why Catching a Fast Ball Requires Pulling Hands Back",
    "To stop a moving cricket ball, its momentum must be brought to zero, so change in momentum &Delta;p is fixed. Since J = F_avg &times; &Delta;t = &Delta;p, increasing the stopping time &Delta;t by pulling hands backward drastically reduces the average force F_avg exerted on the palms, preventing painful bone injury."
  )}

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    5. Newton's Third Law of Motion & Action-Reaction Pairs
  </h2>
  <p>
    Forces in nature never occur in isolation as single entities; they always arise as mutual interactions between pairs of bodies. If body $A$ exerts a force on body $B$, body $B$ simultaneously exerts an equal and opposite force on body $A$.
  </p>

  ${defBox(
    "Newton's Third Law of Motion",
    "To every action, there is always an equal and opposite reaction; or, the mutual actions of two bodies upon each other are always equal in magnitude and oppositely directed along the line joining them.",
    "—",
    "[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 14px 0;">
    \vec{F}_{AB} = -\vec{F}_{BA} \quad \Longleftrightarrow \quad |\vec{F}_{AB}| = |\vec{F}_{BA}|
  </div>

  <p>
    <b>Essential Characteristics of Action-Reaction Pairs:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. They Act on Different Bodies:</b> Action acts on body $B$, while reaction acts on body $A$. Because they act on two entirely distinct bodies, <b>action and reaction can NEVER cancel each other out</b>.</li>
    <li><b style="color: ${themeColor};">2. Simultaneous Occurrence:</b> Action and reaction arise at the exact same instant of time. There is no time delay between action and reaction; neither is the "cause" nor the other the "effect".</li>
    <li><b style="color: ${themeColor};">3. Same Physical Nature:</b> The action and reaction forces are always of the exact same physical origin (e.g. both gravitational, both normal contact, or both electrostatic).</li>
  </ul>

  ${examTrapBox(
    "Normal Reaction vs Gravitational Weight",
    "Students frequently state that Normal Reaction N and Weight mg form an action-reaction pair on a table. This is FALSE! Weight mg is the gravitational pull of the Earth on the book, whose true reaction is the book's gravitational pull on the Earth. Normal reaction N is the contact force of the table pushing up on the book, whose true reaction is the book pressing down on the table."
  )}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    6. Law of Conservation of Linear Momentum & Applications
  </h2>
  <p>
    The Principle of Conservation of Linear Momentum is one of the most profound and universal conservation laws in all of physics, holding true across quantum subatomic collisions as well as galactic astrophysics.
  </p>

  ${defBox(
    "Law of Conservation of Linear Momentum",
    "If no net external unbalanced force acts upon an isolated system of interacting particles, the total vector linear momentum of the system remains strictly constant over time.",
    "—",
    "—"
  )}

  <p>
    <b>Rigorous Mathematical Proof from Newton's Laws:</b><br>
    Consider an isolated two-body system consisting of particles $A$ and $B$. Let $\vec{F}_{AB}$ be the force exerted on $A$ by $B$, and $\vec{F}_{BA}$ be the force exerted on $B$ by $A$.<br>
    By Newton's Second Law: $\vec{F}_{AB} = \frac{d\vec{p}_A}{dt}$ and $\vec{F}_{BA} = \frac{d\vec{p}_B}{dt}$.<br>
    By Newton's Third Law: $\vec{F}_{AB} = -\vec{F}_{BA} \implies \vec{F}_{AB} + \vec{F}_{BA} = \vec{0}$.<br>
    Therefore:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 16px; font-weight: bold; margin: 12px 0;">
    ${frac('d\\vec{p}_A', 'dt')} + ${frac('d\\vec{p}_B', 'dt')} = ${frac('d', 'dt')}(\vec{p}_A + \vec{p}_B) = \vec{0} \implies \vec{P}_{\text{total}} = \vec{p}_A + \vec{p}_B = \text{Constant Vector}
  </div>

  <p>
    <b>Major Practical Applications:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. Recoil Velocity of a Gun:</b> Before firing, the gun and bullet are at rest, so total initial momentum is zero. When a bullet of mass $m$ is discharged with muzzle velocity $\vec{v}$, the gun of mass $M$ recoils backward with velocity $\vec{V}_R$ to conserve momentum:
      <div style="text-align: center; color: #FFCC80; margin: 6px 0; font-size: 15px;">
        m\vec{v} + M\vec{V}_R = \vec{0} \implies \mathbf{\vec{V}_R = -${frac('m', 'M')} \vec{v}}
      </div>
      Because gun mass $M \gg m$, recoil velocity $V_R \ll v$.
    </li>
    <li><b style="color: ${themeColor};">2. Rocket Propulsion (Variable Mass System):</b> A rocket operates on the ejection of combustion gases at high speed $u$ relative to the rocket nozzle. As gas of mass $\Delta m$ is expelled backward, the rocket recoils forward, experiencing instantaneous upward thrust:
      <div style="text-align: center; color: #FFCC80; margin: 6px 0; font-size: 15px;">
        \mathbf{F_{\text{thrust}} = -u \, ${frac('dm', 'dt')}} \quad \text{and} \quad \mathbf{v(t) = v_0 + u \ln\left(${frac('m_0', 'm')}\right) - gt}
      </div>
    </li>
    <li><b style="color: ${themeColor};">3. Explosion of a Bomb at Rest:</b> A stationary bomb has zero momentum. When it detonates into three fragments of masses $m_1, m_2, m_3$ flying with velocities $\vec{v}_1, \vec{v}_2, \vec{v}_3$, their vector sum satisfies: $m_1\vec{v}_1 + m_2\vec{v}_2 + m_3\vec{v}_3 = \vec{0}$.</li>
  </ul>

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    7. Equilibrium of Concurrent Forces & Lami's Theorem
  </h2>
  <p>
    Forces whose lines of action pass through a single common point are termed <b>concurrent forces</b>. A body subjected to concurrent forces is said to be in <b>translational equilibrium</b> if its linear acceleration is identically zero ($\vec{a} = \vec{0}$).
  </p>
  <p>
    <b>Condition for Equilibrium:</b> The vector sum of all concurrent forces acting on the particle must be zero:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 16px; font-weight: bold; margin: 12px 0;">
    \sum \vec{F} = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n = \vec{0} \quad \Longleftrightarrow \quad \sum F_x = 0, \; \sum F_y = 0, \; \sum F_z = 0
  </div>

  ${defBox(
    "Lami's Theorem",
    "If three coplanar concurrent forces acting at a point keep a particle in static equilibrium, each force is directly proportional to the sine of the angle included between the other two forces.",
    "—",
    "—"
  )}

  <p>
    Mathematically, if forces $\vec{F}_1, \vec{F}_2, \vec{F}_3$ maintain equilibrium, and $\alpha, \beta, \gamma$ are the angles opposite to $\vec{F}_1, \vec{F}_2, \vec{F}_3$ respectively:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 138, 101, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 14px 0; font-size: 16.5px; color: #76FF03;">
    <b>${frac('F_1', '\sin\alpha')} = ${frac('F_2', '\sin\beta')} = ${frac('F_3', '\sin\gamma')}</b>
  </div>

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    8. Friction: Static, Kinetic, Rolling & Lubrication
  </h2>
  <p>
    Whenever a solid body moves or tends to move over the surface of another body, an opposing tangential force comes into play parallel to the contact interface. This resisting contact force is called <b>friction</b>.
  </p>
  <p>
    <b>Physical Origin of Friction:</b><br>
    Microscopic examination reveals that even the most mirror-polished surfaces possess irregular microscopic peaks ("asperities") and valleys. When two surfaces are placed in contact, they touch only at the high tips of these asperities. Consequently, the <i>actual contact area</i> is thousands of times smaller than the <i>apparent macroscopic area</i>. At these tiny contact tips, the local pressure is enormous, causing atomic bonds to weld together (cold welding). To slide one surface across another, these microscopic adhesive welds must be sheared apart.
  </p>

  <p>
    <b>Classification of Friction:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. Static Friction (f_s):</b> The opposing force that comes into play between two contact surfaces when there is an applied force tending to cause motion, but no relative motion has yet commenced. Static friction is a <b>self-adjusting force</b>: its magnitude exactly equals the applied external force ($f_s = F_{\text{applied}}$) up to a certain maximum threshold.</li>
    <li><b style="color: ${themeColor};">2. Limiting Friction (f_L):</b> The maximum, ultimate value of static friction beyond which the body begins to slide.
      <div style="text-align: center; color: #FFCC80; margin: 8px 0; font-size: 15.5px;">
        \mathbf{f_L = \mu_s N} \quad \text{where } \mu_s \text{ is the coefficient of static friction.}
      </div>
    </li>
    <li><b style="color: ${themeColor};">3. Kinetic (Sliding) Friction (f_k):</b> The opposing force that acts between two surfaces once relative sliding motion has actually commenced:
      <div style="text-align: center; color: #FFCC80; margin: 8px 0; font-size: 15.5px;">
        \mathbf{f_k = \mu_k N} \quad \text{where } \mu_k \text{ is the coefficient of kinetic friction.}
      </div>
      <b>Crucial Fact:</b> Because moving asperities do not get sufficient time to establish strong cold-welded junctions, <b>$\mu_k < \mu_s$</b> (kinetic friction is always strictly less than limiting friction).
    </li>
    <li><b style="color: ${themeColor};">4. Rolling Friction (f_r):</b> The resistance experienced when a spherical or cylindrical wheel rolls over a surface without slipping. Rolling friction is caused primarily by the local deformation of both the wheel and the supporting surface, creating a small uphill depression mound. Rolling friction is vastly smaller than sliding friction ($f_r \ll f_k \ll f_s$).</li>
  </ul>

  <!-- COMPARISON TABLE: FRICTION TYPES -->
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.7); font-size: 14px; border: 1px solid rgba(255, 138, 101, 0.3);">
      <thead>
        <tr style="background: rgba(255, 138, 101, 0.15); border-bottom: 2px solid ${themeColor};">
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Feature</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Static Friction (f_s)</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Kinetic Friction (f_k)</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Rolling Friction (f_r)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; font-weight: bold; color: #CBD5E1;">Relative Motion</td>
          <td style="padding: 9px; color: #E2E8F0;">Zero (impending motion only)</td>
          <td style="padding: 9px; color: #E2E8F0;">Active relative sliding</td>
          <td style="padding: 9px; color: #E2E8F0;">Pure rolling without sliding</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; font-weight: bold; color: #CBD5E1;">Magnitude</td>
          <td style="padding: 9px; color: #E2E8F0;">Self-adjusting ($0 \le f_s \le \mu_s N$)</td>
          <td style="padding: 9px; color: #E2E8F0;">Constant ($f_k = \mu_k N$)</td>
          <td style="padding: 9px; color: #E2E8F0;">Minimal ($f_r = \mu_r N / R$)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; font-weight: bold; color: #CBD5E1;">Relative Value</td>
          <td style="padding: 9px; color: #E2E8F0;">Peak value $f_L$ is highest</td>
          <td style="padding: 9px; color: #E2E8F0;">Lower than limiting friction</td>
          <td style="padding: 9px; color: #E2E8F0;">Smallest of all (~100 to 1000x smaller)</td>
        </tr>
        <tr>
          <td style="padding: 9px; font-weight: bold; color: #CBD5E1;">Primary Origin</td>
          <td style="padding: 9px; color: #E2E8F0;">Interlocking & static cold welds</td>
          <td style="padding: 9px; color: #E2E8F0;">Shearing of transient welds</td>
          <td style="padding: 9px; color: #E2E8F0;">Surface deformation depression</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    <b>Angle of Friction (&theta;) & Angle of Repose (&alpha;):</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Angle of Friction (&theta;):</b> The angle that the resultant of limiting friction $f_L$ and normal reaction $N$ makes with the normal reaction vector:
      <div style="text-align: center; color: #FFCC80; margin: 6px 0; font-size: 15px;">
        \tan\theta = ${frac('f_L', 'N')} = ${frac('\mu_s N', 'N')} = \mathbf{\mu_s} \implies \mathbf{\theta = \tan^{-1}(\mu_s)}
      </div>
    </li>
    <li><b style="color: ${themeColor};">Angle of Repose (&alpha;):</b> The minimum angle of inclination of a rough ramp at which a body placed upon it just begins to slide down under its own weight:
      <div style="text-align: center; color: #FFCC80; margin: 6px 0; font-size: 15px;">
        mg\sin\alpha = f_L = \mu_s(mg\cos\alpha) \implies \tan\alpha = \mathbf{\mu_s} \implies \mathbf{\alpha = \tan^{-1}(\mu_s)}
      </div>
    </li>
    <li><b style="color: ${themeColor};">Fundamental Identity:</b> Since $\tan\theta = \mu_s$ and $\tan\alpha = \mu_s$, it follows that <b>$\theta = \alpha$ (Angle of Friction = Angle of Repose)</b>.</li>
  </ul>

  <p>
    <b>Why Pulling a Lawn Mower is Easier than Pushing It:</b><br>
    When pushing a mower with force $F$ at angle $\theta$ below horizontal, the downward component $F\sin\theta$ adds to weight, increasing normal reaction $N = mg + F\sin\theta$ and raising friction to $f_k = \mu(mg + F\sin\theta)$. Conversely, when pulling at angle $\theta$ above horizontal, the upward component $F\sin\theta$ relieves normal reaction $N = mg - F\sin\theta$, reducing friction to $f_k = \mu(mg - F\sin\theta)$. Thus pulling encounters significantly less friction.
  </p>

  <p>
    <b>Methods of Reducing Friction & Lubrication:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. Lubrication:</b> Applying liquid lubricants (engine oils), semi-solids (grease), or solid lubricants (graphite) forms a thin hydrodynamic film separating the metallic asperities, replacing solid-solid friction with much lower fluid-shear viscosity.</li>
    <li><b style="color: ${themeColor};">2. Ball Bearings:</b> By placing hardened steel ball bearings between a rotating wheel axle and its housing, high-drag sliding friction is converted into microscopic rolling friction.</li>
    <li><b style="color: ${themeColor};">3. Streamlining:</b> Shaping automobiles, airplanes, and high-speed bullet trains with aerodynamic teardrop profiles reduces fluid drag.</li>
  </ul>

  <!-- SECTION 9 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    9. Dynamics of Uniform Circular Motion & Banking of Roads
  </h2>
  <p>
    In kinematics, we established that an object executing uniform circular motion undergoes continuous radial acceleration: $a_c = v^2/r$. By Newton's Second Law, this inward acceleration requires a net inward radial force, termed the <b>Centripetal Force</b>.
  </p>

  ${defBox(
    "Centripetal Force (F_c)",
    "The net inward radial force acting along the radius towards the center of a curved circular trajectory necessary to continuously alter the direction of an object's velocity vector.",
    "Newton (N)",
    "[M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>]"
  )}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 138, 101, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 14px 0; font-size: 16.5px; color: #76FF03;">
    <b>F_c = ${frac('m v^2', 'r')} = m \omega^2 r = 4\pi^2 m \nu^2 r</b>
  </div>

  <p>
    <b>Case I: Vehicle on a Level Circular Road:</b><br>
    When an automobile traverses an unbanked, flat circular road of radius $r$, the only horizontal force acting toward the center is the <b>static friction</b> between the tire rubber and the tarmac. The vertical forces are in balance: $N = mg$.<br>
    For the vehicle to turn safely without skidding outward, the required centripetal force cannot exceed the maximum available static friction:
  </p>
  <div style="text-align: center; color: #FFCC80; margin: 10px 0; font-size: 16px;">
    ${frac('m v^2', 'r')} \le f_L = \mu_s N = \mu_s m g \implies v^2 \le \mu_s r g \implies \mathbf{v_{\max} = \sqrt{\mu_s r g}}
  </div>
  <p>
    <i>Notice that $v_{\max}$ is independent of vehicle mass $m$, but depends heavily on $\mu_s$. On wet or icy roads where $\mu_s \to 0$, level turning becomes impossible without skidding.</i>
  </p>

  <p>
    <b>Case II: Vehicle on a Banked Road (Elevated Outer Edge):</b><br>
    To eliminate complete reliance on tire friction, curves on highways and race tracks are <b>banked</b>—meaning the outer edge of the curved roadway is elevated above the inner edge by an angle $\theta$.
  </p>

  ${stepDerivationBox(
    "Derivation of Optimum & Maximum Safe Speeds on Banked Road",
    [
      {
        name: "Resolution of Normal Reaction",
        content: `When the road is banked at angle $\\theta$, the normal reaction $\\vec{N}$ tilts inward at angle $\\theta$ to the vertical:
          <br>&bull; Vertical component: $N \\cos\\theta$ balances the downward weight and friction components.
          <br>&bull; Horizontal component: $N \\sin\\theta$ acts directly toward the center of curvature, providing centripetal force.`
      },
      {
        name: "Optimum Speed (Zero Friction, mu = 0)",
        content: `If we seek a speed $v_0$ where no friction is required at all (saving tire wear):
          <br>$N \\sin\\theta = ${frac('m v_0^2', 'r')}$ and $N \\cos\\theta = mg$.
          <br>Dividing these equations: $\\tan\\theta = ${frac('v_0^2', 'rg')} \\implies \\mathbf{v_0 = \\sqrt{rg\\tan\\theta}}$.`
      },
      {
        name: "Maximum Speed with Friction (Upper Safe Limit)",
        content: `At maximum speed $v_{\\max}$, the vehicle tends to skid outward up the bank, generating limiting friction $f_L = \\mu_s N$ directed downward along the banked incline.
          <br>Resolving horizontally: $N \\sin\\theta + f_L \\cos\\theta = ${frac('m v_{\\max}^2', 'r')} \\implies N(\\sin\\theta + \\mu_s\\cos\\theta) = ${frac('m v_{\\max}^2', 'r')}$.
          <br>Resolving vertically: $N \\cos\\theta - f_L \\sin\\theta = mg \\implies N(\\cos\\theta - \\mu_s\\sin\\theta) = mg$.`
      },
      {
        name: "Final Master Banking Equation",
        content: `Dividing horizontal by vertical:
          <br>${frac('v_{\\max}^2', 'rg')} = ${frac('N(\\sin\\theta + \\mu_s\\cos\\theta)', 'N(\\cos\\theta - \\mu_s\\sin\\theta)')} = ${frac('\\mu_s + \\tan\\theta', '1 - \\mu_s\\tan\\theta')}$.
          <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin-top: 8px;">
            v_{\\max} = \\sqrt{rg \\left( ${frac('\\mu_s + \\tan\\theta', '1 - \\mu_s\\tan\\theta')} \\right)}
          </div>`
      }
    ]
  )}

  <p>
    <b>Case III: Bending of a Cyclist:</b><br>
    A cyclist negotiating a sharp curve leans inward at an angle $\theta$ with the vertical. The normal reaction from the ground tilts inward, so $N\sin\theta$ provides centripetal force ($N\sin\theta = mv^2/r$) while $N\cos\theta$ balances weight ($N\cos\theta = mg$). Dividing gives:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 16px; font-weight: bold; margin: 12px 0;">
    \tan\theta = ${frac('v^2', 'rg')} \implies \theta = \tan^{-1}\left(${frac('v^2', 'rg')}\right)
  </div>

  <!-- MASTER REVISION FORMULA CHEAT SHEET -->
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">
      ⚡ Master Revision Formula Cheat Sheet
    </h2>
    <p class="text-center" style="color: #CBD5E1; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">
      Comprehensive Operational Equations &bull; Unit III: Laws of Motion (07 Marks)
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Momentum & Second Law:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\vec{p} = m \vec{v}$<br>
          $\vec{F} = ${frac('d\vec{p}', 'dt')} = m \vec{a} = m \, ${frac('d^2\vec{r}', 'dt^2')}$<br>
          $\vec{F} = m ${frac('d\vec{v}', 'dt')} + \vec{v} ${frac('dm', 'dt')} \quad \text{(Variable Mass)}$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Impulse & Third Law:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\vec{J} = \vec{F}_{\text{avg}} \Delta t = \int \vec{F} dt = \Delta\vec{p}$<br>
          $\vec{J} = \text{Area under } F-t \text{ curve}$<br>
          $\vec{F}_{AB} = -\vec{F}_{BA} \quad \text{(Action-Reaction)}$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Momentum Conservation & Recoil:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\sum \vec{F}_{\text{ext}} = \vec{0} \implies \vec{P}_{\text{total}} = \text{const}$<br>
          Recoil: $V_R = -${frac('m', 'M')} v$<br>
          Rocket Thrust: $F = -u \, ${frac('dm', 'dt')}$<br>
          Rocket Velocity: $v = u \ln(${frac('m_0', 'm')}) - gt$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Equilibrium & Lami's Law:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\sum \vec{F} = \vec{0} \Longleftrightarrow \sum F_x = 0, \sum F_y = 0$<br>
          ${frac('F_1', '\sin\alpha')} = ${frac('F_2', '\sin\beta')} = ${frac('F_3', '\sin\gamma')}$<br>
          Atwood Accel: $a = \left(${frac('m_1 - m_2', 'm_1 + m_2')}\right) g$<br>
          Atwood Tension: $T = \left(${frac('2 m_1 m_2', 'm_1 + m_2')}\right) g$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Laws of Friction:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Limiting Friction: $f_L = \mu_s N$<br>
          Kinetic Friction: $f_k = \mu_k N \quad (\mu_k < \mu_s)$<br>
          Angle of Friction: $\tan\theta = \mu_s$<br>
          Angle of Repose: $\tan\alpha = \mu_s \implies \theta = \alpha$<br>
          Rough Incline Accel: $a = g(\sin\alpha - \mu_k\cos\alpha)$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Circular Motion & Banking:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Centripetal Force: $F_c = ${frac('m v^2', 'r')} = m\omega^2 r$<br>
          Level Road Max Speed: $v_{\max} = \sqrt{\mu_s r g}$<br>
          Optimum Banking: $\tan\theta = ${frac('v_0^2', 'rg')} \implies v_0 = \sqrt{rg\tan\theta}$<br>
          Banked Max Speed: $v_{\max} = \sqrt{rg \left(${frac('\mu_s + \tan\theta', '1 - \mu_s\tan\theta')}\right)}$<br>
          Cyclist Lean: $\tan\theta = ${frac('v^2', 'rg')}$
        </span>
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
