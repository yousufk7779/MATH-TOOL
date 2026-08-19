const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\d123af52-ff96-4b27-bff2-978545bba9ee';

// 1. SKELETON AND JOINTS SVG (16:9 Widescreen Dark Slate 3D Render)
const skeletonSVG = `<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="50%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#070A10"/>
    </linearGradient>
    <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#FBBF24"/>
    </linearGradient>
    <linearGradient id="blue3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0088FF"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="1280" height="720" fill="url(#bg)"/>

  <!-- TITLE HEADER -->
  <rect x="40" y="25" width="1200" height="55" rx="10" fill="rgba(0, 176, 255, 0.1)" stroke="#00B0FF" stroke-width="1.5"/>
  <text x="640" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="bold" fill="#00B0FF" text-anchor="middle">HUMAN SKELETON &amp; SYNOVIAL JOINTS (3D ANATOMICAL RENDERING)</text>

  <!-- CENTER: 3D HUMAN SKELETON OUTLINE -->
  <g transform="translate(480, 100)">
    <!-- Body Silhouette -->
    <path d="M160,20 C180,20 195,35 195,55 C195,75 180,90 160,90 C140,90 125,75 125,55 C125,35 140,20 160,20 Z
             M160,95 L160,110 M120,115 L200,115 L220,240 L210,380 L195,560 L180,560 L170,390 L160,260 L150,390 L140,560 L125,560 L110,380 L100,240 Z"
          fill="rgba(0, 229, 255, 0.05)" stroke="#00E5FF" stroke-width="1.5" stroke-dasharray="4,4" />

    <!-- 3D Skull -->
    <ellipse cx="160" cy="55" rx="30" ry="35" fill="none" stroke="#E2E8F0" stroke-width="3" filter="url(#glow)"/>
    <ellipse cx="150" cy="50" rx="6" ry="8" fill="#00E5FF"/>
    <ellipse cx="170" cy="50" rx="6" ry="8" fill="#00E5FF"/>

    <!-- 3D Spine & Ribcage -->
    <line x1="160" y1="90" x2="160" y2="300" stroke="#FBBF24" stroke-width="4" filter="url(#glow)"/>
    <!-- Ribs -->
    <path d="M160,120 Q130,130 120,150 Q160,165 160,165 M160,120 Q190,130 200,150 Q160,165 160,165
             M160,140 Q120,155 110,180 Q160,195 160,195 M160,140 Q200,155 210,180 Q160,195 160,195
             M160,160 Q115,175 105,200 Q160,215 160,215 M160,160 Q205,175 215,200 Q160,215 160,215"
          fill="none" stroke="#E2E8F0" stroke-width="2.5"/>

    <!-- Pelvis -->
    <path d="M125,280 Q160,260 195,280 Q205,320 160,330 Q115,320 125,280 Z" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="3"/>

    <!-- Limbs Bones -->
    <!-- Arms -->
    <line x1="120" y1="115" x2="80" y2="230" stroke="#E2E8F0" stroke-width="4"/>
    <line x1="80" y1="230" x2="50" y2="340" stroke="#E2E8F0" stroke-width="3"/>
    <line x1="200" y1="115" x2="240" y2="230" stroke="#E2E8F0" stroke-width="4"/>
    <line x1="240" y1="230" x2="270" y2="340" stroke="#E2E8F0" stroke-width="3"/>
    <!-- Legs -->
    <line x1="140" y1="320" x2="130" y2="460" stroke="#E2E8F0" stroke-width="5"/>
    <line x1="130" y1="460" x2="120" y2="580" stroke="#E2E8F0" stroke-width="4"/>
    <line x1="180" y1="320" x2="190" y2="460" stroke="#E2E8F0" stroke-width="5"/>
    <line x1="190" y1="460" x2="200" y2="580" stroke="#E2E8F0" stroke-width="4"/>
  </g>

  <!-- LEFT CALLOUT 1: PIVOT JOINT -->
  <g transform="translate(60, 110)">
    <rect width="360" height="170" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="180" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#00E5FF" text-anchor="middle">1. PIVOT JOINT (Atlas &amp; Axis C1-C2)</text>
    <!-- 3D Pivot Cylinder -->
    <ellipse cx="180" cy="75" rx="35" ry="12" fill="url(#blue3D)" stroke="#FFF"/>
    <rect x="145" y="75" width="70" height="45" fill="url(#blue3D)" opacity="0.8"/>
    <ellipse cx="180" cy="120" rx="35" ry="12" fill="#0088FF" stroke="#FFF"/>
    <path d="M125,95 C145,70 215,70 235,95" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="4,4" marker-end="url(#arrow)"/>
    <text x="180" y="155" font-family="sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">Rotational movement around central axis</text>
  </g>

  <!-- LEFT CALLOUT 2: HINGE JOINT -->
  <g transform="translate(60, 300)">
    <rect width="360" height="170" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="180" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#F59E0B" text-anchor="middle">2. HINGE JOINT (Knee &amp; Elbow)</text>
    <!-- 3D Hinge -->
    <rect x="130" y="60" width="100" height="25" rx="5" fill="#38BDF8"/>
    <circle cx="180" cy="95" r="18" fill="#F59E0B" stroke="#FFF" stroke-width="2"/>
    <rect x="168" y="105" width="24" height="40" rx="4" fill="#38BDF8"/>
    <text x="180" y="155" font-family="sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">Uniaxial back &amp; forth movement (Flexion/Extension)</text>
  </g>

  <!-- LEFT CALLOUT 3: BALL & SOCKET JOINT -->
  <g transform="translate(60, 490)">
    <rect width="360" height="180" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#10B981" stroke-width="1.5"/>
    <text x="180" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#10B981" text-anchor="middle">3. BALL-AND-SOCKET JOINT (Shoulder &amp; Hip)</text>
    <!-- 3D Ball & Socket -->
    <path d="M135,70 A35,35 0 0,0 225,70 Z" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2.5"/>
    <circle cx="180" cy="85" r="24" fill="url(#blue3D)" stroke="#FFF" stroke-width="2"/>
    <rect x="170" y="109" width="20" height="35" fill="#0088FF"/>
    <text x="180" y="162" font-family="sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">Multiaxial 360° rotational movement</text>
  </g>

  <!-- RIGHT CALLOUT: MUSCLE TISSUE TYPES -->
  <g transform="translate(860, 110)">
    <rect width="360" height="560" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#EC4899" stroke-width="1.5"/>
    <text x="180" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#EC4899" text-anchor="middle">MUSCLE TISSUE TYPES (3D)</text>

    <!-- Skeletal Muscle -->
    <g transform="translate(20, 60)">
      <rect width="320" height="140" rx="8" fill="rgba(236, 72, 153, 0.1)" stroke="#EC4899"/>
      <text x="160" y="25" font-family="sans-serif" font-size="15" font-weight="bold" fill="#F472B6" text-anchor="middle">A. Skeletal Muscle (Striated, Voluntary)</text>
      <rect x="30" y="40" width="260" height="15" fill="#EF4444" rx="3"/>
      <rect x="30" y="65" width="260" height="15" fill="#EF4444" rx="3"/>
      <rect x="30" y="90" width="260" height="15" fill="#EF4444" rx="3"/>
      <!-- Striations -->
      <line x1="60" y1="40" x2="60" y2="105" stroke="#FFF" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="120" y1="40" x2="120" y2="105" stroke="#FFF" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="180" y1="40" x2="180" y2="105" stroke="#FFF" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="240" y1="40" x2="240" y2="105" stroke="#FFF" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="160" y="128" font-family="sans-serif" font-size="12" fill="#CBD5E1" text-anchor="middle">Multinucleate cylindrical fibers with sarcomere Z-lines</text>
    </g>

    <!-- Cardiac Muscle -->
    <g transform="translate(20, 225)">
      <rect width="320" height="140" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6"/>
      <text x="160" y="25" font-family="sans-serif" font-size="15" font-weight="bold" fill="#60A5FA" text-anchor="middle">B. Cardiac Muscle (Striated, Involuntary)</text>
      <path d="M30,45 L150,45 L170,70 L290,70 M30,70 L140,70 M160,95 L290,95" stroke="#3B82F6" stroke-width="12" fill="none" stroke-linecap="round"/>
      <!-- Intercalated Discs -->
      <line x1="100" y1="40" x2="100" y2="75" stroke="#FBBF24" stroke-width="3"/>
      <line x1="220" y1="65" x2="220" y2="100" stroke="#FBBF24" stroke-width="3"/>
      <text x="160" y="128" font-family="sans-serif" font-size="12" fill="#CBD5E1" text-anchor="middle">Branched fibers with Intercalated Discs for pulse wave</text>
    </g>

    <!-- Smooth Muscle -->
    <g transform="translate(20, 390)">
      <rect width="320" height="145" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981"/>
      <text x="160" y="25" font-family="sans-serif" font-size="15" font-weight="bold" fill="#34D399" text-anchor="middle">C. Smooth Muscle (Unstriated, Involuntary)</text>
      <path d="M30,65 Q160,40 290,65 Q160,90 30,65 Z" fill="#059669" opacity="0.8"/>
      <circle cx="160" cy="65" r="8" fill="#FBBF24"/>
      <text x="160" y="128" font-family="sans-serif" font-size="12" fill="#CBD5E1" text-anchor="middle">Spindle-shaped uninucleate cells (Visceral organs)</text>
    </g>
  </g>
</svg>`;

// 2. NEURON AND REFLEX ARC SVG (16:9 Widescreen Dark Slate 3D Render)
const neuronSVG = `<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="50%" stop-color="#17172A"/>
      <stop offset="100%" stop-color="#070A10"/>
    </linearGradient>
    <linearGradient id="axonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="50%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#00E5FF"/>
    </linearGradient>
    <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1280" height="720" fill="url(#bg2)"/>

  <!-- TITLE HEADER -->
  <rect x="40" y="25" width="1200" height="55" rx="10" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="640" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="bold" fill="#F59E0B" text-anchor="middle">TYPICAL NEURON STRUCTURE, CHEMICAL SYNAPSE &amp; REFLEX ARC (3D)</text>

  <!-- TOP SECTION: TYPICAL NEURON -->
  <g transform="translate(50, 105)">
    <rect width="780" height="340" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="390" y="32" font-family="sans-serif" font-size="18" font-weight="bold" fill="#00E5FF" text-anchor="middle">A. MULTIPOLAR NEURON ARCHITECTURE</text>

    <!-- Cell Body (Soma) -->
    <g transform="translate(120, 180)">
      <!-- Dendrites -->
      <path d="M-20,-40 L-60,-80 M-30,-10 L-80,-30 M-30,20 L-80,40 M-10,40 L-50,80 M10,-40 L20,-90" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <circle cx="0" cy="0" r="45" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" stroke-width="3" filter="url(#glow2)"/>
      <circle cx="0" cy="0" r="16" fill="#EF4444"/>
      <text x="0" y="6" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFF" text-anchor="middle">Nucleus</text>
      <!-- Nissl Granules -->
      <circle cx="-18" cy="-15" r="3" fill="#FBBF24"/>
      <circle cx="18" cy="-15" r="3" fill="#FBBF24"/>
      <circle cx="-15" cy="18" r="3" fill="#FBBF24"/>
      <circle cx="15" cy="18" r="3" fill="#FBBF24"/>
      <text x="0" y="68" font-family="sans-serif" font-size="14" font-weight="bold" fill="#F59E0B" text-anchor="middle">Cell Body (Soma)</text>
    </g>

    <!-- Axon & Myelin Sheath -->
    <g transform="translate(165, 180)">
      <!-- Central Axon Line -->
      <line x1="0" y1="0" x2="460" y2="0" stroke="#00E5FF" stroke-width="6" filter="url(#glow2)"/>

      <!-- Myelin Sheaths (3D Blocks) -->
      <!-- Sheath 1 -->
      <rect x="30" y="-22" width="75" height="44" rx="10" fill="url(#axonGlow)" opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
      <circle cx="67" cy="0" r="4" fill="#1E293B"/>
      <!-- Node of Ranvier 1 -->
      <text x="115" y="-30" font-family="sans-serif" font-size="11" fill="#38BDF8" text-anchor="middle">Node of Ranvier</text>
      <line x1="115" y1="-24" x2="115" y2="-5" stroke="#38BDF8" stroke-dasharray="2,2"/>

      <!-- Sheath 2 -->
      <rect x="130" y="-22" width="75" height="44" rx="10" fill="url(#axonGlow)" opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
      <circle cx="167" cy="0" r="4" fill="#1E293B"/>

      <!-- Sheath 3 -->
      <rect x="230" y="-22" width="75" height="44" rx="10" fill="url(#axonGlow)" opacity="0.85" stroke="#FFF" stroke-width="1.5"/>
      <circle cx="267" cy="0" r="4" fill="#1E293B"/>

      <!-- Sheath 4 -->
      <rect x="330" y="-22" width="75" height="44" rx="10" fill="url(#axonGlow)" opacity="0.85" stroke="#FFF" stroke-width="1.5"/>

      <!-- Axon Terminals -->
      <path d="M440,0 L490,-35 M440,0 L500,-10 M440,0 L500,15 M440,0 L490,40" stroke="#00E5FF" stroke-width="3"/>
      <circle cx="490" cy="-35" r="6" fill="#10B981"/>
      <circle cx="500" cy="-10" r="6" fill="#10B981"/>
      <circle cx="500" cy="15" r="6" fill="#10B981"/>
      <circle cx="490" cy="40" r="6" fill="#10B981"/>
      <text x="495" y="65" font-family="sans-serif" font-size="13" font-weight="bold" fill="#10B981" text-anchor="middle">Axon Terminals</text>
    </g>

    <!-- Direction Arrow -->
    <path d="M220,270 L550,270" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6,6" marker-end="url(#arrow)"/>
    <text x="385" y="295" font-family="sans-serif" font-size="13" font-weight="bold" fill="#F59E0B" text-anchor="middle">Nerve Impulse Direction (Saltatory Conduction)</text>
  </g>

  <!-- RIGHT SECTION: CHEMICAL SYNAPSE -->
  <g transform="translate(855, 105)">
    <rect width="375" height="340" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#10B981" stroke-width="1.5"/>
    <text x="187" y="32" font-family="sans-serif" font-size="17" font-weight="bold" fill="#10B981" text-anchor="middle">B. CHEMICAL SYNAPSE INSET</text>

    <!-- Pre-synaptic Knob -->
    <path d="M120,60 C120,160 255,160 255,60 Z" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="3"/>
    <text x="187" y="85" font-family="sans-serif" font-size="12" fill="#A7F3D0" text-anchor="middle">Pre-synaptic Terminal</text>

    <!-- Neurotransmitter Vesicles -->
    <circle cx="160" cy="115" r="8" fill="#F59E0B"/>
    <circle cx="190" cy="120" r="8" fill="#F59E0B"/>
    <circle cx="215" cy="110" r="8" fill="#F59E0B"/>

    <!-- Synaptic Cleft -->
    <rect x="100" y="170" width="175" height="15" fill="rgba(0, 229, 255, 0.15)" stroke="#00E5FF" stroke-dasharray="2,2"/>
    <text x="187" y="182" font-family="sans-serif" font-size="10" font-weight="bold" fill="#00E5FF" text-anchor="middle">Synaptic Cleft (20 nm)</text>

    <!-- Released Molecules -->
    <circle cx="150" cy="177" r="3" fill="#F59E0B"/>
    <circle cx="175" cy="177" r="3" fill="#F59E0B"/>
    <circle cx="200" cy="177" r="3" fill="#F59E0B"/>

    <!-- Post-synaptic Membrane & Receptors -->
    <path d="M100,195 L275,195 L275,240 L100,240 Z" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="2"/>
    <rect x="135" y="192" width="12" height="10" fill="#EF4444" rx="2"/>
    <rect x="170" y="192" width="12" height="10" fill="#EF4444" rx="2"/>
    <rect x="205" y="192" width="12" height="10" fill="#EF4444" rx="2"/>
    <text x="187" y="225" font-family="sans-serif" font-size="12" fill="#93C5FD" text-anchor="middle">Post-synaptic Receptors</text>
    <text x="187" y="295" font-family="sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">Acetylcholine neurotransmitter binding</text>
  </g>

  <!-- BOTTOM SECTION: REFLEX ARC PATHWAY -->
  <g transform="translate(50, 465)">
    <rect width="1180" height="225" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#EC4899" stroke-width="1.5"/>
    <text x="590" y="32" font-family="sans-serif" font-size="18" font-weight="bold" fill="#EC4899" text-anchor="middle">C. REFLEX ARC PATHWAY (INVOLUNTARY SPINAL RESPONSE)</text>

    <!-- Step 1: Receptor -->
    <g transform="translate(80, 60)">
      <circle cx="50" cy="45" r="35" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="2"/>
      <text x="50" y="42" font-family="sans-serif" font-size="20" text-anchor="middle">🔥</text>
      <text x="50" y="105" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FCA5A5" text-anchor="middle">1. Stimulus / Receptor</text>
    </g>

    <!-- Arrow 1 -->
    <path d="M175,105 L265,105" stroke="#F59E0B" stroke-width="3" marker-end="url(#arrow)"/>

    <!-- Step 2: Afferent Sensory Neuron -->
    <g transform="translate(280, 60)">
      <rect width="160" height="90" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="1.5"/>
      <text x="80" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FBBF24" text-anchor="middle">2. Afferent Neuron</text>
      <text x="80" y="60" font-family="sans-serif" font-size="12" fill="#E2E8F0" text-anchor="middle">Sensory Impulse</text>
      <text x="80" y="118" font-family="sans-serif" font-size="12" fill="#CBD5E1" text-anchor="middle">Dorsal Root Ganglion</text>
    </g>

    <!-- Arrow 2 -->
    <path d="M455,105 L545,105" stroke="#F59E0B" stroke-width="3" marker-end="url(#arrow)"/>

    <!-- Step 3: Spinal Cord Interneuron -->
    <g transform="translate(560, 60)">
      <rect width="180" height="90" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="1.5"/>
      <text x="90" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#34D399" text-anchor="middle">3. Spinal Cord (CNS)</text>
      <text x="90" y="60" font-family="sans-serif" font-size="12" fill="#E2E8F0" text-anchor="middle">Interneuron Integration</text>
      <text x="90" y="118" font-family="sans-serif" font-size="12" fill="#CBD5E1" text-anchor="middle">Grey Matter Synapse</text>
    </g>

    <!-- Arrow 3 -->
    <path d="M755,105 L845,105" stroke="#F59E0B" stroke-width="3" marker-end="url(#arrow)"/>

    <!-- Step 4: Efferent Motor Neuron -->
    <g transform="translate(860, 60)">
      <rect width="160" height="90" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="1.5"/>
      <text x="80" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#60A5FA" text-anchor="middle">4. Efferent Neuron</text>
      <text x="80" y="60" font-family="sans-serif" font-size="12" fill="#E2E8F0" text-anchor="middle">Motor Signal</text>
      <text x="80" y="118" font-family="sans-serif" font-size="12" fill="#CBD5E1" text-anchor="middle">Ventral Root</text>
    </g>

    <!-- Arrow 4 -->
    <path d="M1035,105 L1085,105" stroke="#F59E0B" stroke-width="3" marker-end="url(#arrow)"/>

    <!-- Step 5: Effector Muscle -->
    <g transform="translate(1095, 60)">
      <circle cx="35" cy="45" r="30" fill="rgba(236, 72, 153, 0.2)" stroke="#EC4899" stroke-width="2"/>
      <text x="35" y="52" font-family="sans-serif" font-size="14" font-weight="bold" fill="#F472B6" text-anchor="middle">💪</text>
      <text x="35" y="105" font-family="sans-serif" font-size="13" font-weight="bold" fill="#F472B6" text-anchor="middle">5. Effector</text>
    </g>
  </g>
</svg>`;

// 3. ENDOCRINE SYSTEM SVG (16:9 Widescreen Dark Slate 3D Render)
const endocrineSVG = `<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="50%" stop-color="#1E102A"/>
      <stop offset="100%" stop-color="#070A10"/>
    </linearGradient>
    <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1280" height="720" fill="url(#bg3)"/>

  <!-- TITLE HEADER -->
  <rect x="40" y="25" width="1200" height="55" rx="10" fill="rgba(168, 85, 247, 0.1)" stroke="#A855F7" stroke-width="1.5"/>
  <text x="640" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="bold" fill="#A855F7" text-anchor="middle">HUMAN ENDOCRINE GLANDS &amp; MECHANISM OF HORMONE ACTION (3D)</text>

  <!-- LEFT SECTION: 3D HUMAN BODY WITH ENDOCRINE GLANDS -->
  <g transform="translate(50, 105)">
    <rect width="520" height="580" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#A855F7" stroke-width="1.5"/>
    <text x="260" y="32" font-family="sans-serif" font-size="18" font-weight="bold" fill="#A855F7" text-anchor="middle">A. MAJOR ENDOCRINE GLANDS</text>

    <!-- Translucent Body Outline -->
    <path d="M260,60 Q290,60 290,110 Q320,140 330,220 Q310,340 310,420 Q320,530 300,560 L220,560 Q200,530 210,420 Q210,340 190,220 Q200,140 230,110 Q230,60 260,60 Z"
          fill="rgba(168, 85, 247, 0.06)" stroke="#A855F7" stroke-width="1.5" stroke-dasharray="4,4"/>

    <!-- 1. Hypothalamus & Pituitary -->
    <circle cx="260" cy="95" r="8" fill="#EC4899" filter="url(#purpleGlow)"/>
    <line x1="268" y1="95" x2="380" y2="95" stroke="#EC4899" stroke-width="1.5"/>
    <rect x="385" y="80" width="120" height="30" rx="5" fill="rgba(236, 72, 153, 0.2)" stroke="#EC4899"/>
    <text x="445" y="100" font-family="sans-serif" font-size="12" font-weight="bold" fill="#F472B6" text-anchor="middle">Pituitary / GH, TSH</text>

    <!-- 2. Thyroid & Parathyroid -->
    <path d="M250,150 Q260,140 270,150 Q270,165 250,165 Z" fill="#F59E0B"/>
    <line x1="270" y1="155" x2="380" y2="155" stroke="#F59E0B" stroke-width="1.5"/>
    <rect x="385" y="140" width="120" height="30" rx="5" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B"/>
    <text x="445" y="160" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FBBF24" text-anchor="middle">Thyroid / Thyroxine</text>

    <!-- 3. Adrenals & Pancreas -->
    <circle cx="245" cy="270" r="10" fill="#10B981"/>
    <circle cx="275" cy="270" r="10" fill="#10B981"/>
    <line x1="285" y1="270" x2="380" y2="270" stroke="#10B981" stroke-width="1.5"/>
    <rect x="385" y="255" width="120" height="30" rx="5" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981"/>
    <text x="445" y="275" font-family="sans-serif" font-size="12" font-weight="bold" fill="#34D399" text-anchor="middle">Adrenal &amp; Pancreas</text>

    <!-- 4. Gonads (Ovary / Testis) -->
    <circle cx="260" cy="460" r="12" fill="#3B82F6"/>
    <line x1="272" y1="460" x2="380" y2="460" stroke="#3B82F6" stroke-width="1.5"/>
    <rect x="385" y="445" width="120" height="30" rx="5" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6"/>
    <text x="445" y="465" font-family="sans-serif" font-size="12" font-weight="bold" fill="#60A5FA" text-anchor="middle">Gonads / Steroids</text>
  </g>

  <!-- RIGHT SECTION: MECHANISM OF HORMONE ACTION -->
  <g transform="translate(600, 105)">
    <rect width="630" height="580" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="315" y="32" font-family="sans-serif" font-size="18" font-weight="bold" fill="#00E5FF" text-anchor="middle">B. MECHANISM OF HORMONE ACTION</text>

    <!-- 1. Protein Hormone Mechanism -->
    <g transform="translate(20, 60)">
      <rect width="590" height="235" rx="10" fill="rgba(0, 229, 255, 0.05)" stroke="#00E5FF" stroke-width="1"/>
      <text x="295" y="25" font-family="sans-serif" font-size="15" font-weight="bold" fill="#38BDF8" text-anchor="middle">1. Water-Soluble Protein Hormone (Membrane Receptor)</text>

      <!-- Cell Membrane -->
      <line x1="160" y1="45" x2="160" y2="215" stroke="#F59E0B" stroke-width="8"/>
      <text x="145" y="130" font-family="sans-serif" font-size="11" fill="#FBBF24" text-anchor="middle" transform="rotate(-90, 145, 130)">Cell Membrane</text>

      <!-- Hormone & Receptor -->
      <circle cx="50" cy="130" r="14" fill="#EC4899"/>
      <text x="50" y="134" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFF" text-anchor="middle">FSH</text>

      <path d="M150,115 L170,115 L170,145 L150,145 Z" fill="#EF4444"/>
      <path d="M64,130 L145,130" stroke="#EC4899" stroke-width="3" stroke-dasharray="3,3"/>

      <!-- Secondary Messenger Cascade -->
      <g transform="translate(200, 70)">
        <rect width="360" height="135" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#10B981"/>
        <text x="180" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#34D399" text-anchor="middle">Secondary Messenger Generation</text>
        <text x="180" y="55" font-family="sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">Receptor Response &#8594; Adenylate Cyclase Activation</text>
        <rect x="70" y="70" width="220" height="30" rx="5" fill="#10B981" opacity="0.2"/>
        <text x="180" y="90" font-family="sans-serif" font-size="12" font-weight="bold" fill="#A7F3D0" text-anchor="middle">cAMP / IP3 / Ca2+ Messenger Cascade</text>
        <text x="180" y="120" font-family="sans-serif" font-size="12" fill="#CBD5E1" text-anchor="middle">&#8595; Biochemical Response &amp; Physiological Effect</text>
      </g>
    </g>

    <!-- 2. Steroid Hormone Mechanism -->
    <g transform="translate(20, 315)">
      <rect width="590" height="240" rx="10" fill="rgba(168, 85, 247, 0.05)" stroke="#A855F7" stroke-width="1"/>
      <text x="295" y="25" font-family="sans-serif" font-size="15" font-weight="bold" fill="#C084FC" text-anchor="middle">2. Lipid-Soluble Steroid Hormone (Intracellular Nuclear Receptor)</text>

      <!-- Cell Membrane & Diffusion -->
      <line x1="160" y1="45" x2="160" y2="220" stroke="#F59E0B" stroke-width="8"/>
      <circle cx="50" cy="130" r="14" fill="#3B82F6"/>
      <text x="50" y="134" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFF" text-anchor="middle">Estrogen</text>

      <!-- Direct Diffusion Arrow -->
      <path d="M64,130 L230,130" stroke="#3B82F6" stroke-width="3" marker-end="url(#arrow)"/>
      <text x="110" y="120" font-family="sans-serif" font-size="10" fill="#93C5FD" text-anchor="middle">Direct Lipid Diffusion</text>

      <!-- Nucleus & Genome Integration -->
      <g transform="translate(240, 60)">
        <rect width="320" height="150" rx="8" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" stroke-width="1.5"/>
        <text x="160" y="25" font-family="sans-serif" font-size="14" font-weight="bold" fill="#E9D5FF" text-anchor="middle">Intracellular Nucleus</text>
        <circle cx="50" cy="75" r="18" fill="#A855F7"/>
        <text x="50" y="80" font-family="sans-serif" font-size="10" fill="#FFF" text-anchor="middle">H-R Complex</text>
        <!-- DNA Strand -->
        <path d="M100,75 Q130,55 160,75 Q190,95 220,75 Q250,55 280,75" fill="none" stroke="#F59E0B" stroke-width="3"/>
        <text x="180" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FBBF24" text-anchor="middle">Gene Expression &amp; mRNA Synthesis</text>
        <text x="180" y="138" font-family="sans-serif" font-size="11" fill="#CBD5E1" text-anchor="middle">Tissue Growth and Differentiation</text>
      </g>
    </g>
  </g>
</svg>`;

async function renderAll() {
  await sharp(Buffer.from(skeletonSVG)).jpeg({ quality: 95 }).toFile(path.join(brainDir, 'c11_zoo4_3d_skeleton_and_joints.jpg'));
  console.log('Successfully generated fresh 3D SVG render for skeleton_and_joints!');

  await sharp(Buffer.from(neuronSVG)).jpeg({ quality: 95 }).toFile(path.join(brainDir, 'c11_zoo4_3d_neuron_and_reflex.jpg'));
  console.log('Successfully generated fresh 3D SVG render for neuron_and_reflex!');

  await sharp(Buffer.from(endocrineSVG)).jpeg({ quality: 95 }).toFile(path.join(brainDir, 'c11_zoo4_3d_endocrine_system.jpg'));
  console.log('Successfully generated fresh 3D SVG render for endocrine_system!');
}

renderAll().catch(err => console.error(err));
