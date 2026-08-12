// Class 11 Botany Chapter 4 - Plant Physiology (Respiration, Photosynthesis, Plant Growth & Development)
// High-Level Full Reference Book Content (PW / Vedantu / RD Sharma / Unacademy Standard)

export const c11Bot4HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.5px solid #00E5FF; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #00E5FF; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: #00E5FF; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Chapter 4: Plant Physiology</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">1. Cellular Respiration:</b> Enzyme-catalyzed oxidative breakdown of organic substrates (glucose) releasing metabolic energy stored as ATP.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">2. Glycolysis (EMP Pathway):</b> Anaerobic sequence of 10 cytosolic reactions converting 1 Glucose (6C) into 2 Pyruvic acid (3C) molecules yielding net 2 ATP and 2 NADH.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">3. Krebs Cycle (TCA Cycle):</b> Cyclic sequence of mitochondrial matrix reactions oxidizing Acetyl-CoA (2C) into CO2, generating NADH, FADH2, and GTP/ATP.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">4. Electron Transport System (ETS):</b> Series of inner mitochondrial membrane electron carriers (Complex I to IV) transferring electrons to O2 while pumping protons to synthesize ATP.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">5. Chemiosmotic Hypothesis:</b> Peter Mitchell's theory stating ATP synthesis is driven by a proton gradient (proton motive force) across thylakoid/inner mitochondrial membranes through ATP Synthase (F0F1).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">6. Amphibolic Pathway:</b> Metabolic pathway serving both catabolic (breakdown) and anabolic (synthesis) functions (e.g. Respiration).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">7. Respiratory Quotient (RQ):</b> Ratio of volume of CO2 evolved to volume of O2 consumed during respiration (RQ = 1.0 for Carbohydrates, 0.7 for Fats, 0.9 for Proteins).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">8. Photosynthesis:</b> Physicochemical process by which green plants utilize solar light energy absorbed by chlorophyll to convert CO2 and H2O into Glucose and O2.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">9. Photolysis of Water:</b> Light-driven splitting of H2O associated with PS II on thylakoid lumen side releasing 2 H+, 2 e-, and 1/2 O2.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">10. Z-Scheme (Non-Cyclic):</b> Sequential electron transport involving PS II (P680) and PS I (P700) producing both ATP and NADPH + H+ with O2 evolution.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">11. C3 Calvin Cycle:</b> Universal dark reaction pathway where CO2 is fixed by RuBisCO into 3-PGA (3C), consuming 18 ATP and 12 NADPH per Glucose.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">12. C4 Hatch &amp; Slack Pathway:</b> CO2 fixation pathway in tropical plants (Maize) utilizing PEPcase in mesophyll cells and RuBisCO in bundle sheath cells (Kranz Anatomy) to suppress Photorespiration.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">13. Photorespiration (C2 Cycle):</b> Energy-wasting light-dependent pathway where RuBisCO binds O2 instead of CO2, consuming ATP and releasing CO2 without sugar/ATP production.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">14. Blackman's Law of Limiting Factors:</b> Principle stating that when a chemical process is conditioned by several factors, its rate is limited by the factor present at sub-optimal minimum value.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">15. Sigmoid Growth Curve:</b> S-shaped growth curve characteristic of living organisms under natural conditions comprising Lag, Log (Exponential), and Stationary phases.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">16. Differentiation, Dedifferentiation, Redifferentiation:</b> Maturation of meristematic cells (Differentiation), reversion of mature cells to meristematic state (Dedifferentiation), and re-maturation of dedifferentiated cells (Redifferentiation).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">17. Plant Growth Regulators (PGRs):</b> Small organic signaling molecules regulating growth, cell division, morphogenesis, and environmental responses (Auxins, Gibberellins, Cytokinins, Ethylene, ABA).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00E5FF; border-radius: 6px;">
        <b style="color: #00E5FF;">18. Apical Dominance:</b> Suppression of lateral axillary bud growth by auxins synthesized at shoot apex.
      </div>
    </div>
  </div>


  <!-- EXACT SYLLABUS HEADING 1 WORD-FOR-WORD -->
  <h2 style="color: #00E5FF; margin-top: 10px; font-size: 20px; font-weight: bold;">Respiration: Cellular respiration; Glycolysis, Kreb’s cycle and Electron transport system (along with ATP energetics); Chemiosmotic hypothesis; Aerobic and Anaerobic respirations; Amphibolic pathways; Respiratory quotient</h2>
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMDBFNUZGIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkNlbGx1bGFyIFJlc3BpcmF0aW9uIFBhdGh3YXlzICZhbXA7IEFUUCBFbmVyZ2V0aWNzPC90ZXh0PgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gMS4gR2x5Y29seXNpcyAoQ3l0b3BsYXNtKSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyNDYiIGhlaWdodD0iNDMwIiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDgpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTIzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEuIEdMWUNPTFlTSVMgKEN5dG9wbGFzbSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTVGRiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIyMCIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgU3Vic3RyYXRlIEJyZWFrZG93bjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkdsdWNvc2UgKDZDKSDinpQgMiBQeXJ1dmF0ZSAoM0MpPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEyMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+QW5hZXJvYmljIC8gRU1QIFBhdGh3YXk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4xMCBFbnp5bWUtY2F0YWx5emVkIHN0ZXBzPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEwIiB5PSIxNzgiIHdpZHRoPSIyMjYiIGhlaWdodD0iMTE4IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgQVRQICZhbXA7IE5BREggWWllbGQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjIyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4yIEFUUCBjb25zdW1lZCBpbml0aWFsbHk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj40IEFUUCBmb3JtZWQgZGlyZWN0bHk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5OZXQ6IDIgQVRQICsgMiBOQURIPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjI4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iIzY5RjBBRSI+VG90YWwgWWllbGQgPSA2IHRvIDggQVRQPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEwIiB5PSIzMTAiIHdpZHRoPSIyMjYiIGhlaWdodD0iMTA4IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgRmVybWVudGF0aW9uIE9wdGlvbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIzNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkxhY3RpYyBBY2lkIC8gQWxjb2hvbGljPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+SW4gYWJzZW5jZSBvZiBPeHlnZW48L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMzk0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5OZXQgWWllbGQgPSAyIEFUUCBvbmx5PC90ZXh0PgoKICAgIDwhLS0gMi4gS3JlYnMgQ3ljbGUgKE1pdG9jaG9uZHJpYWwgTWF0cml4KSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2NywgMCkiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQ2IiBoZWlnaHQ9IjQzMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDI1NSwxNDUsMCwwLjA4KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHRleHQgeD0iMTIzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIEtSRUJTIENZQ0xFIChNYXRyaXgpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQxODAiPuKAoiBMaW5rIFJlYWN0aW9uPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5QeXJ1dmF0ZSDinpQgQWNldHlsLUNvQSAoMkMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5QeXJ1dmF0ZSBEZWh5ZHJvZ2VuYXNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5ZaWVsZHM6IDIgTkFESCArIDIgQ08yPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjE3OCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSIxMTgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIFRDQSBDeWNsZSBTZXF1ZW5jZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjIyMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+T0FBICg0QykgKyBBY2V0eWwtQ29BPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj7inpQgQ2l0cmF0ZSAoNkMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5EZWNhcmJveHlsYXRpb25zPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj5BbXBoaWJvbGljIHBhdGh3YXk8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMCIgeT0iMzEwIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj7igKIgWWllbGQgcGVyIEdsdWNvc2U8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPjYgTkFESCAoMTggQVRQIGVxdWl2KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+MiBGQURIMiAoNCBBVFAgZXF1aXYpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMzk0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4yIEdUUC9BVFAgZGlyZWN0PC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gMy4gRVRTICYgQ2hlbWlvc21vc2lzIChJbm5lciBNZW1icmFuZSkgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzQsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjI0NiIgaGVpZ2h0PSI0MzAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4wOCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjEyMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zLiBFVFMgJmFtcDsgQ0hFTUlPU01PU0lTPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiBFbGVjdHJvbiBUcmFuc3BvcnQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkNvbXBsZXggSSB0byBJViBpbiBDcmlzdGFlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5VYmlxdWlub25lICZhbXA7IEN5dCBjPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5GaW5hbCBhY2NlcHRvcjogT3h5Z2VuPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjE3OCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSIxMTgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIFByb3RvbiBHcmFkaWVudDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjIyMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+SCsgcHVtcGVkIHRvIGludGVybWVtYnJhbmU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIyNDIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkhpZ2ggcHJvdG9uIGdyYWRpZW50PC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5Ecml2ZXMgQVRQIFN5bnRoYXNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzY5RjBBRSI+MSBOQURIPTMgQVRQfDEgRkFESDI9MiBBVFA8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMCIgeT0iMzEwIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgTmV0IEFUUCBCYWxhbmNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMzU0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5HbHljb2x5c2lzOiA4IEFUUDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+TGluayArIEtyZWJzOiAzMCBBVFA8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPlRvdGFsIE5ldCA9IDM2IHRvIDM4IEFUUDwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFlcm9iaWMgUmVzcGlyYXRpb246IDEgR2x1Y29zZSArIDYgTzIg4p6UIDYgQ08yICsgNiBIMk8gKyAzOCBBVFAgKFJlc3BpcmF0b3J5IFF1b3RpZW50ID0gMS4wKTwvdGV4dD4KICA8L2c+Cjwvc3ZnPg==" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 229, 255, 0.4); border: 2px solid #00E5FF;" alt="3D Cellular Respiration Architecture" /><p style="color: #00E5FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.1: 3D Cellular Respiration Master Architecture (Glycolysis, Link Reaction, Krebs Cycle &amp; ETS ATP Energetics)</p></div>

  <p>Cellular respiration is an essential catabolic biochemical process occurring in all living cells where organic food molecules (primarily Glucose) are oxidized to extract chemical energy in the form of Adenosine Triphosphate (ATP), the universal energy currency of life.</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Cellular Respiration Overview, Aerobic vs Anaerobic Respiration &amp; Glycolysis (EMP Pathway)</h3>
  <p>• <b style="color: #00E5FF;">Aerobic vs Anaerobic Respiration:</b><br>
  - <b style="color: #00E5FF;">Aerobic Respiration:</b> Occurs in the presence of molecular Oxygen (O2) in cytoplasm and mitochondria. Complete oxidation of Glucose into CO2 and H2O yielding a net gain of <b>36 to 38 ATP</b> per Glucose.<br>
  - <b style="color: #00E5FF;">Anaerobic Respiration (Fermentation):</b> Occurs in the absence of O2 in cytoplasm. Incomplete oxidation yielding only <b>2 ATP</b> per Glucose.<br>
  &nbsp;&nbsp;a) <b style="color: #00E5FF;">Alcoholic Fermentation:</b> Pyruvate ➔ Acetaldehyde ➔ Ethanol + CO2 (Yeast).<br>
  &nbsp;&nbsp;b) <b style="color: #00E5FF;">Lactic Acid Fermentation:</b> Pyruvate ➔ Lactic acid (Lactic acid bacteria &amp; oxygen-depleted human muscle cells).<br><br>
  • <b style="color: #00E5FF;">Glycolysis (EMP Pathway):</b> Discovered by <b style="color: #00E5FF;">Embden, Meyerhof, and Parnas</b>. Occurs in the <b>Cytoplasm</b> of ALL living organisms (universal pathway).<br>
  - Converts 1 molecule of Glucose (6C) into 2 molecules of Pyruvic Acid (3C) through 10 enzyme-catalyzed steps.<br>
  - <b style="color: #00E5FF;">Preparatory Phase:</b> Consumes 2 ATP (Glucose ➔ Glucose-6-P ➔ Fructose-6-P ➔ Fructose-1,6-bisP).<br>
  - <b style="color: #00E5FF;">Payoff Phase:</b> Produces 4 ATP directly via Substrate-Level Phosphorylation and 2 NADH + H+.<br>
  - <b style="color: #00E5FF;">Net Glycolytic Yield:</b> <b>2 Pyruvate + 2 ATP (net) + 2 NADH + H+</b>.</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Krebs Cycle (Citric Acid Cycle / TCA Cycle) &amp; Link Reaction</h3>
  <p>• <b style="color: #00E5FF;">Link Reaction (Transition Step):</b> Pyruvate enters mitochondrial matrix. Oxidative decarboxylation catalyzed by <i>Pyruvate Dehydrogenase</i> complex connects Glycolysis to Krebs cycle:<br>
  <div style="text-align: center; margin: 10px 0; font-weight: bold; color: #00E5FF;">
    2 Pyruvate (3C) + 2 CoA + 2 NAD<sup>+</sup> ➔ 2 Acetyl-CoA (2C) + 2 CO<sub>2</sub> + 2 NADH + 2 H<sup>+</sup>
  </div>
  • <b style="color: #00E5FF;">Krebs Cycle (TCA Cycle):</b> Discovered by <b style="color: #00E5FF;">Sir Hans Krebs</b>. Takes place in the <b>Mitochondrial Matrix</b>.<br>
  1. Acetyl-CoA (2C) condenses with Oxaloacetic Acid (OAA, 4C) catalyzed by <i>Citrate Synthase</i> to form Citric Acid (6C).<br>
  2. Isomerization to Isocitrate followed by two successive oxidative decarboxylations yields α-Ketoglutaric acid (5C) and Succinyl-CoA (4C), releasing 2 CO2 and 2 NADH.<br>
  3. Succinyl-CoA forms Succinic acid, generating 1 GTP (Substrate-Level Phosphorylation).<br>
  4. Oxidation of Succinate to Fumarate produces 1 FADH2 (catalyzed by <i>Succinate Dehydrogenase</i> located on inner mitochondrial membrane).<br>
  5. Fumarate hydrates to Malate, which oxidizes back to OAA generating 1 NADH.<br>
  - <b style="color: #00E5FF;">Yield per Glucose (2 turns of cycle):</b> <b>6 NADH + 2 FADH<sub>2</sub> + 2 GTP/ATP + 4 CO<sub>2</sub></b>.</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(iii) Electron Transport System (ETS), Oxidative Phosphorylation &amp; Chemiosmotic Hypothesis</h3>
  <p>• <b style="color: #00E5FF;">Electron Transport System (ETS):</b> Located in the <b>Inner Mitochondrial Membrane (Cristae)</b>. Consists of 5 multiprotein complexes:<br>
  - <b style="color: #00E5FF;">Complex I:</b> NADH Dehydrogenase (oxidizes NADH, pumps H+ into intermembrane space).<br>
  - <b style="color: #00E5FF;">Complex II:</b> Succinate Dehydrogenase (oxidizes FADH2).<br>
  - <b style="color: #00E5FF;">Complex III:</b> Cytochrome bc1 complex.<br>
  - <b style="color: #00E5FF;">Complex IV:</b> Cytochrome c Oxidase (contains cytochromes a, a3 and 2 copper centers; passes e- to final acceptor O2 to form H2O).<br>
  - <b style="color: #00E5FF;">Complex V:</b> ATP Synthase (F0F1 complex).<br><br>
  • <b style="color: #00E5FF;">Chemiosmotic Hypothesis (<b style="color: #00E5FF;">Peter Mitchell</b>):</b> Transfer of electrons along Complex I, III, IV drives active pumping of H+ protons from matrix into intermembrane space, creating a steep <b>Proton Gradient (pH gradient &amp; membrane potential)</b> across inner membrane. Flow of H+ protons back into matrix down electrochemical gradient through F0 channel of ATP Synthase causes conformational changes in F1 headpiece, synthesizing ATP from ADP and Pi.<br>
  - Oxidation of <b>1 NADH</b> yields <b>3 ATP</b>.<br>
  - Oxidation of <b>1 FADH<sub>2</sub></b> yields <b>2 ATP</b>.</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(iv) ATP Energetics, Amphibolic Pathway &amp; Respiratory Quotient (RQ)</h3>
  <p>• <b style="color: #00E5FF;">Net ATP Energetics Balance Sheet (per Glucose):</b><br>
  - Glycolysis: Net 2 ATP (direct) + 2 NADH (6 ATP via ETS) = 8 ATP.<br>
  - Link Reaction: 2 NADH (6 ATP via ETS) = 6 ATP.<br>
  - Krebs Cycle: 2 GTP (2 ATP direct) + 6 NADH (18 ATP) + 2 FADH2 (4 ATP) = 24 ATP.<br>
  - <b style="color: #00E5FF;">Total Net Yield:</b> <b>38 ATP</b> (or 36 ATP depending on glycerol-phosphate shuttle).<br><br>
  • <b style="color: #00E5FF;">Amphibolic Pathway:</b> Respiratory pathway is NOT purely catabolic. Intermediates are withdrawn for biosynthesis (anabolism): Acetyl-CoA is used for fatty acid synthesis, α-Ketoglutarate and OAA for amino acid synthesis. Hence, respiration is an <b>Amphibolic Pathway</b>.<br><br>
  • <b style="color: #00E5FF;">Respiratory Quotient (RQ):</b><br>
  <div style="text-align: center; margin: 10px 0; font-weight: bold; color: #00E5FF;">
    RQ = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Volume of CO<sub>2</sub> Evolved</span><span style="display:block; padding:0 4px;">Volume of O<sub>2</sub> Consumed</span></span>
  </div>
  - <b style="color: #00E5FF;">Carbohydrates (Glucose):</b> RQ = 1.0 (<span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">6 CO<sub>2</sub></span><span style="display:block; padding:0 4px;">6 O<sub>2</sub></span></span>).<br>
  - <b style="color: #00E5FF;">Fats (Tripalmitin):</b> RQ = 0.7 (<span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">102 CO<sub>2</sub></span><span style="display:block; padding:0 4px;">145 O<sub>2</sub></span></span>).<br>
  - <b style="color: #00E5FF;">Proteins:</b> RQ = 0.9.<br>
  - <b style="color: #00E5FF;">Organic Acids (Malic Acid):</b> RQ &gt; 1.0 (1.33).</p>


  <!-- EXACT SYLLABUS HEADING 2 WORD-FOR-WORD -->
  <h2 style="color: #00E5FF; margin-top: 30px; font-size: 20px; font-weight: bold;">Photosynthesis: Historical background; Site of Photosynthesis; Photosynthetic pigments; Mechanism of Photosynthesis – Light dependent phase (Light reaction), Photosystems; Cyclic and non-cyclic photophosphorylations; Light independent (biosynthetic) phase – Calvin (C3) cycle and Hatch &amp; Slack (C4) cycle; Factors affecting photosynthesis; Photorespiration.</h2>
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QaG90b3N5bnRoZXNpczogTGlnaHQtRGVwZW5kZW50IFJlYWN0aW9ucyAmYW1wOyBaLVNjaGVtZTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIE5vbi1DeWNsaWMgUGhvdG9waG9zcGhvcnlsYXRpb24gKFotU2NoZW1lKSAtLT4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEuIE5vbi1DeWNsaWMgWi1TY2hlbWUgKFBTIElJICsgUFMgSSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj5LZXkgTWVjaGFuaXNtIFN0ZXBzOjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9Ijk4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5QaG90b3N5c3RlbSBJSSAoUDY4MCk6PC90c3Bhbj4gQWJzb3JicyA2ODBubSBsaWdodDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgRXhjaXRlZCBlLSB0cmFuc2ZlcnJlZCB0byBQaGVvcGh5dGluIGFjY2VwdG9yLjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+V2F0ZXIgU3BsaXR0aW5nIChQaG90b2x5c2lzKTo8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgMiBIMk8g4p6UIDQgSCsgKyBPMiArIDQgZS0gKFJlcGxhY2VzIFBTIElJIGUtKS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIxOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQxODAiPkVsZWN0cm9uIFRyYW5zcG9ydCBDaGFpbjo8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgUGxhc3RvcXVpbm9uZSDinpQgQ3l0IGI2ZiDinpQgUGxhc3RvY3lhbmluIOKelCBQUyBJLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgRHJpdmVzIEFUUCBzeW50aGVzaXMgdmlhIGNoZW1pb3Ntb3Npcy48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIyNjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPlBob3Rvc3lzdGVtIEkgKFA3MDApOjwvdHNwYW4+IEFic29yYnMgNzAwbm0gbGlnaHQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjg0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIGUtIHRyYW5zZmVycmVkIHRvIEZlcnJlZG94aW4g4p6UIE5BRFArIFJlZHVjdGFzZS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIzMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgQXNzaW1pbGF0b3J5IFBvd2VyIFlpZWxkOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPiAgUHJvZHVjZXMgQk9USCBBVFAgYW5kIE5BRFBIICsgSCs8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMzUyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIHdpdGggb3h5Z2VuIGV2b2x1dGlvbiAoTzIgcmVsZWFzZSkhPC90ZXh0PgoKICAgIDwhLS0gMi4gQ3ljbGljIFBob3RvcGhvc3Bob3J5bGF0aW9uIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgwRDhGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gQ3ljbGljIFBob3RvcGhvc3Bob3J5bGF0aW9uIChQUyBJIE9ubHkpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSI3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiPktleSBNZWNoYW5pc20gU3RlcHM6PC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9Ijk4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5PY2N1cnMgaW4gU3Ryb21hIExhbWVsbGFlOjwvdHNwYW4+PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIExhY2tzIFBTIElJIGFuZCBOQURQIFJlZHVjdGFzZSBlbnp5bWUuPC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+Q3ljbGljIEVsZWN0cm9uIExvb3A6PC90c3Bhbj48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgUDcwMCAoUFMgSSkg4p6UIFByaW1hcnkgQWNjZXB0b3Ig4p6UIEZlcnJlZG94aW48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxODgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAg4p6UIEN5dCBiNmYg4p6UIFBsYXN0b2N5YW5pbiDinpQgUmV0dXJucyB0byBQNzAwITwvdGV4dD4KICAgICAgCiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM2OUYwQUUiPlByb3RvbiBHcmFkaWVudCAmYW1wOyBBVFAgU3ludGhlc2lzOjwvdHNwYW4+PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjM2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIFByb3RvbnMgcHVtcGVkIHRvIFRoeWxha29pZCBsdW1lbiBnZW5lcmF0ZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjI1NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBncmFkaWVudCBkcml2aW5nIEFUUCBTeW50aGFzZSAoRjBGMSkuPC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9IjI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPuKAoiBLZXkgRGlmZmVyZW5jZXMgZnJvbSBOb24tQ3ljbGljOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjMwNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICAxLiBOTyBQaG90b2x5c2lzIG9mIHdhdGVyIChOTyBPMiBldm9sdmVkISkuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMzI2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIDIuIFByb2R1Y2VzIEFUUCBPTkxZIChOTyBOQURQSCBmb3JtZWQpLjwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRoeWxha29pZCBNZW1icmFuZTogTGlnaHQgRW5lcmd5IOKelCBBVFAgJmFtcDsgTkFEUEggKEFzc2ltaWxhdG9yeSBQb3dlciBmb3IgRGFyayBSZWFjdGlvbnMpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 229, 255, 0.4); border: 2px solid #00E5FF;" alt="3D Photosynthesis Z-Scheme" /><p style="color: #00E5FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.2: 3D Photosynthesis Architecture (Z-Scheme Non-Cyclic &amp; Cyclic Photophosphorylation &amp; Photolysis)</p></div>

  <p>Photosynthesis is the fundamental anabolic bio-energetic process by which autotrophic plants capture solar radiant energy and convert it into chemical energy stored in glucose bonds, releasing O2 as a life-sustaining byproduct.</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Historical Background, Site of Photosynthesis &amp; Photosynthetic Pigments</h3>
  <p>• <b style="color: #00E5FF;">Historical Milestones:</b><br>
  - <b style="color: #00E5FF;">Joseph Priestley (1770):</b> Discovered essential role of air in plant growth and discovered Oxygen using bell jar experiments.<br>
  - <b style="color: #00E5FF;">Jan Ingenhousz (1779):</b> Showed that sunlight is essential for plants to purify air and produce O2 bubbles in green parts.<br>
  - <b style="color: #00E5FF;">Julius von Sachs (1854):</b> Demonstrated that photosynthesis produces Glucose stored as starch in chloroplasts.<br>
  - <b style="color: #00E5FF;">T.W. Engelmann (1888):</b> Used prism to split light on <i>Cladophora</i> algae and aerobic bacteria to plot the first <b>Action Spectrum</b> of photosynthesis (blue and red light regions).<br>
  - <b style="color: #00E5FF;">Cornelis van Niel (1931):</b> Demonstrated that O2 evolved during photosynthesis originates from H2O, NOT CO2, using purple/green sulfur bacteria.<br><br>
  • <b style="color: #00E5FF;">Site of Photosynthesis &amp; Pigments:</b> Occurs in <b>Chloroplasts</b>.<br>
  - <b style="color: #00E5FF;">Light Reaction Site:</b> Thylakoid Membranes (Grana).<br>
  - <b style="color: #00E5FF;">Dark Reaction Site:</b> Stroma.<br>
  - <b style="color: #00E5FF;">Pigment Types:</b> <i>Chlorophyll a</i> (bright/blue green - primary reaction center), <i>Chlorophyll b</i> (yellow green), <i>Xanthophylls</i> (yellow), and <i>Carotenoids</i> (yellow to yellow-orange - accessory pigments protecting against photo-oxidation).</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Mechanism of Photosynthesis: Light-Dependent Phase, Photosystems (PS I &amp; PS II), Cyclic &amp; Non-Cyclic Photophosphorylation</h3>
  <p>• <b style="color: #00E5FF;">Photosystems &amp; Light Absorption:</b> Pigments organize into Light Harvesting Complexes (LHC) surrounding a reaction center.<br>
  - <b style="color: #00E5FF;">Photosystem II (PS II):</b> Reaction center <b>P680</b> (absorbs 680nm red light). Associated with Water Splitting Complex on inner thylakoid lumen side.<br>
  - <b style="color: #00E5FF;">Photosystem I (PS I):</b> Reaction center <b>P700</b> (absorbs 700nm red light).<br><br>
  • <b style="color: #00E5FF;">Non-Cyclic Photophosphorylation (Z-Scheme):</b> Involves both PS II and PS I operating in series.<br>
  1. Light excites P680 in PS II; e- ejected and accepted by primary e- acceptor (Pheophytin).<br>
  2. e- passes down ETC (Plastoquinone ➔ Cytochrome b6f ➔ Plastocyanin) to PS I, generating ATP via chemiosmosis.<br>
  3. Photolysis of H2O supplies e- to PS II: 2 H2O ➔ 4 H+ + O2 + 4 e-.<br>
  4. Light excites P700 in PS I; e- transferred to Ferredoxin and finally to NADP+ Reductase forming <b>NADPH + H+</b>.<br>
  - <b style="color: #00E5FF;">Net Output:</b> <b>ATP + NADPH + H<sup>+</sup> + O<sub>2</sub> evolution</b>.<br><br>
  • <b style="color: #00E5FF;">Cyclic Photophosphorylation:</b> Occurs in <b>Stroma Lamellae</b> (which lack PS II and NADP Reductase).<br>
  - e- ejected from P700 (PS I) cycles back to P700 via Ferredoxin and Cytochrome complex.<br>
  - <b style="color: #00E5FF;">Net Output:</b> Synthesizes <b>ATP ONLY</b> (NO NADPH, NO O2 evolution).</p>

  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMDBFNUZGIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkRhcmsgUmVhY3Rpb25zOiBDMyBDYWx2aW4gQ3ljbGUgdnMgQzQgSGF0Y2ggJmFtcDsgU2xhY2sgUGF0aHdheTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIExlZnQgQm94OiBDMyBDYWx2aW4gQ3ljbGUgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQzNSIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjA2KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBDMyBDYWx2aW4gQ3ljbGUgKFN0cm9tYSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4zIE1hc3RlciBQaGFzZXM6PC90ZXh0PgogICAgCiAgICA8dGV4dCB4PSIyNSIgeT0iOTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4xLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+Q2FyYm94eWxhdGlvbjo8L3RzcGFuPiBDTzIgKyBSdUJQICg1Qykg4p6UIDMtUEdBPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjExOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgQ2F0YWx5emVkIGJ5IFJ1QmlzQ08gZW56eW1lLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNBQUEiPiAgIEZpcnN0IHN0YWJsZSBwcm9kdWN0ID0gMy1QR0EgKDNDKS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4yLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+UmVkdWN0aW9uOjwvdHNwYW4+IDIgQVRQICsgMiBOQURQSCBwZXIgQ08yPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjE4NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgRm9ybXMgVHJpb3NlIFBob3NwaGF0ZSAvIEdsdWNvc2UuPC90ZXh0PgoKICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+UmVnZW5lcmF0aW9uOjwvdHNwYW4+IDEgQVRQIHBlciBDTzI8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBSZWdlbmVyYXRlcyBSdUJQIGFjY2VwdG9yIG1vbGVjdWxlLjwvdGV4dD4KCiAgICA8dGV4dCB4PSIyNSIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIENvc3QgcGVyIEdsdWNvc2UgKDYgQ08yKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjg0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIFJlcXVpcmVzIDE4IEFUUCArIDEyIE5BRFBILjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9IjMxMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPuKAoiBQaG90b3Jlc3BpcmF0aW9uIFJpc2s6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjMzNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBSdUJpc0NPIG94eWdlbmFzZSBhY3Rpdml0eSB3YXN0ZXMgZW5lcmd5PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjM1NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBpbiBoaWdoIE8yIGFuZCBoaWdoIHRlbXBlcmF0dXJlITwvdGV4dD4KCiAgICA8IS0tIFJpZ2h0IEJveDogQzQgSGF0Y2ggJiBTbGFjayBQYXRod2F5IC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgwRDhGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gQzQgSGF0Y2ggJmFtcDsgU2xhY2sgUGF0aHdheTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI0OCIgd2lkdGg9IjM1NiIgaGVpZ2h0PSIzNzIiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj5LcmFueiBBbmF0b215ICZhbXA7IFNwYXRpYWwgU2VwYXJhdGlvbjo8L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iOTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPk1lc29waHlsbCBDZWxsczo8L3RzcGFuPiBQcmltYXJ5IENPMiBGaXhhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjExOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgUEVQICgzQykgKyBDTzIg4p6UIE9BQSAoNEMgT3hhbG9hY2V0YXRlKS48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNBQUEiPiAgIFBFUGNhc2UgaGFzIE5PIG94eWdlbmFzZSBhY3Rpdml0eSE8L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iMTY2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5CdW5kbGUgU2hlYXRoIENlbGxzOjwvdHNwYW4+IFNlY29uZGFyeSBGaXhhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjE4NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgTWFsYXRlIHRyYW5zcG9ydGVkIOKelCBEZWNhcmJveHlsYXRlZCB0byBDTzIuPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjA2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBIaWdoIENPMiBzdXBwcmVzc2VzIFBob3RvcmVzcGlyYXRpb24hPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjI2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBSdUJpc0NPIGZpeGVzIENPMiBpbiBDMyBjeWNsZS48L3RleHQ+CgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjU0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIENvc3QgcGVyIEdsdWNvc2UgKDYgQ08yKTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSIyNzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPiAgUmVxdWlyZXMgMzAgQVRQICsgMTIgTkFEUEguPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjk2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIChIaWdoZXIgZWZmaWNpZW5jeSBhdCBoaWdoIHRlbXAhKS48L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iMzI0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIEV4YW1wbGVzOiBNYWl6ZSwgU3VnYXJjYW5lLCBTb3JnaHVtLjwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM0IFBsYW50cyBhdm9pZCBQaG90b3Jlc3BpcmF0aW9uIHZpYSBLcmFueiBBbmF0b215ICZhbXA7IFBFUGNhc2Ug4p6UIEhpZ2hlciB5aWVsZCBhdCBoaWdoIHRlbXAhPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 229, 255, 0.4); border: 2px solid #00E5FF;" alt="3D C3 vs C4 Pathways" /><p style="color: #00E5FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.3: 3D C3 Calvin Cycle vs C4 Hatch &amp; Slack Pathway Architecture</p></div>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(iii) Light-Independent Phase: Calvin (C3) Cycle, Hatch &amp; Slack (C4) Cycle &amp; Photorespiration</h3>
  <p>• <b style="color: #00E5FF;">Calvin (C3) Cycle:</b> Discovered by <b style="color: #00E5FF;">Melvin Calvin</b> using <sup>14</sup>C in <i>Chlorella</i>. Universal pathway in all photosynthetic plants.<br>
  - <b style="color: #00E5FF;">Phase 1: Carboxylation:</b> CO2 binds Ribulose-1,5-bisphosphate (RuBP, 5C) catalyzed by <b>RuBisCO</b> (RuBP carboxylase-oxygenase) forming 2 molecules of 3-Phosphoglycerate (3-PGA, 3C - first stable product).<br>
  - <b style="color: #00E5FF;">Phase 2: Reduction:</b> Consumes 2 ATP and 2 NADPH per CO2 to form Triose phosphate (Glucose).<br>
  - <b style="color: #00E5FF;">Phase 3: Regeneration:</b> Consumes 1 ATP to regenerate RuBP acceptor.<br>
  - <b style="color: #00E5FF;">Cost per Glucose (6 CO2 fixed):</b> <b>18 ATP + 12 NADPH</b>.<br><br>
  • <b style="color: #00E5FF;">Hatch &amp; Slack (C4) Cycle:</b> Specialized adaptation in tropical plants (Maize, Sugarcane, Sorghum) exhibiting <b>Kranz Anatomy</b> (large bundle sheath cells with thick walls and high chloroplast density).<br>
  - <b style="color: #00E5FF;">Primary Fixation (Mesophyll):</b> CO2 fixed by <b>PEPcase</b> (Phosphoenolpyruvate carboxylase, 3C) forming Oxaloacetic acid (OAA, 4C - first stable product). PEPcase has NO oxygenase activity.<br>
  - <b style="color: #00E5FF;">Secondary Fixation (Bundle Sheath):</b> Malate (4C) transported to bundle sheath cells and decarboxylated to release high concentration CO2 to RuBisCO for Calvin cycle.<br>
  - <b style="color: #00E5FF;">Cost per Glucose:</b> <b>30 ATP + 12 NADPH</b> (Prevents Photorespiration!).<br><br>
  • <b style="color: #00E5FF;">Photorespiration (C2 Cycle):</b> Energy-wasting process occurring in C3 plants under high O2, high temperature, and high light intensity. RuBisCO binds O2 instead of CO2, converting RuBP into 1 molecule of 3-PGA and 1 molecule of Phosphoglycolate (2C). Involves <b>3 organelles: Chloroplast, Peroxisome, Mitochondria</b>. Consumes ATP and releases CO2 without producing ATP or NADPH.</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(iv) Factors Affecting Photosynthesis</h3>
  <p>• <b style="color: #00E5FF;">Blackman's Law of Limiting Factors (<b style="color: #00E5FF;">F.F. Blackman</b>, 1905):</b> "If a chemical process is affected by more than one factor, its rate is determined by the factor which is nearest to its minimal value."<br>
  • <b style="color: #00E5FF;">Key Factors:</b><br>
  1. <b style="color: #00E5FF;">Light Intensity &amp; Quality:</b> Light saturation occurs at 10% of full sunlight. Red and blue light give maximum rate.<br>
  2. <b style="color: #00E5FF;">CO2 Concentration:</b> Major limiting factor. Saturation for C3 plants at 450 μL/L; C4 plants saturation at 360 μL/L.<br>
  3. <b style="color: #00E5FF;">Temperature:</b> Dark reactions enzyme-controlled; C4 plants have higher optimum temperature (30-45°C) than C3 plants (20-25°C).<br>
  4. <b style="color: #00E5FF;">Water:</b> Water stress causes stomatal closure, reducing CO2 availability.</p>

  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkNCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFudCBHcm93dGggUmVndWxhdG9ycyAoUEdScykgJmFtcDsgR3Jvd3RoIEN1cnZlczwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIExlZnQgQm94OiA1IFBHUnMgTWFzdGVyIFN1bW1hcnkgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQzNSIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjA2KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41IFBsYW50IEdyb3d0aCBSZWd1bGF0b3JzIChQR1JzKTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iNDgiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTVGRiI+MS4gQXV4aW5zIChJQUEgLyBJQkEgLyBOQUEpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSI4OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+QXBpY2FsIERvbWluYW5jZSwgQ2VsbCBFbG9uZ2F0aW9uLCBSb290aW5nPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIxMjQiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjE0NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiPjIuIEdpYmJlcmVsbGlucyAoR0EzKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMTY0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5TdGVtIEJvbHRpbmcsIFNlZWQgR2VybWluYXRpb24sIFN1Z2FyY2FuZSB5aWVsZDwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iMjAwIiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4zLiBDeXRva2luaW5zIChaZWF0aW4gLyBLaW5ldGluKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5DZWxsIERpdmlzaW9uLCBPdmVyY29tZXMgQXBpY2FsIERvbWluYW5jZTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iMjc2IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyOTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj40LiBFdGh5bGVuZSAoR2FzZW91cyAtIEV0aGVwaG9uKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5GcnVpdCBSaXBlbmluZywgVHJpcGxlIFJlc3BvbnNlLCBBYnNjaXNzaW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIzNTIiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjM3MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPjUuIEFic2Npc2ljIEFjaWQgKEFCQSAtIFN0cmVzcyBIb3Jtb25lKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzkyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5TdG9tYXRhbCBDbG9zdXJlLCBTZWVkIERvcm1hbmN5LCBTdHJlc3MgdG9sZXJhbmNlPC90ZXh0PgoKICAgIDwhLS0gUmlnaHQgQm94OiBHcm93dGggUmF0ZXMgJiBDdXJ2ZXMgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAsIDApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjM4MCIgaGVpZ2h0PSI0MzUiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIyOSwyNTUsMC4wNikiIHN0cm9rZT0iIzAwRTVGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hcm93dGggUmF0ZXMgJmFtcDsgU2lnbW9pZCBDdXJ2ZTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI0OCIgd2lkdGg9IjM1NiIgaGVpZ2h0PSIxNzUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4xLiBBcml0aG1ldGljIEdyb3d0aDo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSI5NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIE9ubHkgMSBkYXVnaHRlciBjZWxsIGRpdmlkZXMgd2hpbGUgb3RoZXI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPiAgZGlmZmVyZW50aWF0ZXMgaW50byBwZXJtYW5lbnQgY2VsbC48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPuKAoiBMaW5lYXIgR3Jvd3RoIEZvcm11bGE6IEx0ID0gTDAgKyBydDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIENvbnN0YW50IGdyb3d0aCByYXRlIChSb290IHRpcCBlbG9uZ2F0aW9uKS48L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMjM1IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjE4NyIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNjEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4yLiBHZW9tZXRyaWMgR3Jvd3RoIChTLVNpZ21vaWQgQ3VydmUpOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjI4MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIEJvdGggZGF1Z2h0ZXIgY2VsbHMgcmV0YWluIGRpdmlzaW9uIGNhcGFjaXR5LjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjMwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIEZvcm11bGE6IFcxID0gVzAgKiBlXihydCk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPjEuIExhZyBQaGFzZSDinpQgMi4gTG9nIChFeHBvbmVudGlhbCkgUGhhc2U8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzNDciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPuKelCAzLiBTdGF0aW9uYXJ5IFBoYXNlIChOdXRyaWVudCBsaW1pdGF0aW9uKS48L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDUxNSkiPgogICAgPHJlY3Qgd2lkdGg9Ijc4MCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjE1KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuOCIvPgogICAgPHRleHQgeD0iMzkwIiB5PSIzMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EZXZlbG9wbWVudCA9IEdyb3d0aCArIERpZmZlcmVudGlhdGlvbiAoUmVndWxhdGVkIGJ5IEF1eGluLCBHQSwgQ3l0b2tpbmluLCBFdGh5bGVuZSAmYW1wOyBBQkEpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 229, 255, 0.4); border: 2px solid #00E5FF;" alt="3D PGRs &amp; Growth Rates" /><p style="color: #00E5FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.4: 3D Plant Growth Regulators (PGRs) Action &amp; Growth Rate Curves (Arithmetic vs Sigmoid)</p></div>

  <!-- EXACT SYLLABUS HEADING 3 WORD-FOR-WORD -->
  <h2 style="color: #00E5FF; margin-top: 30px; font-size: 20px; font-weight: bold;">Plant Growth and Development: Characteristics of plant growth; phases of growth, growth rate, growth curve; conditions of growth; differentiation, dedifferentiation and redifferentiation</h2>
  
  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Characteristics of Plant Growth, Growth Phases &amp; Growth Rates</h3>
  <p>• <b style="color: #00E5FF;">Characteristics of Plant Growth:</b> Irreversible permanent increase in size, volume, or dry mass of an organ or cell. Plant growth is unique because it is <b>Indeterminate / Open</b> due to presence of active meristems.<br>
  • <b style="color: #00E5FF;">3 Phases of Growth:</b><br>
  1. <b style="color: #00E5FF;">Meristematic Phase:</b> Cells at root/shoot apex with thin cellulosic walls, abundant plasmodesmata, and dense cytoplasm constantly dividing.<br>
  2. <b style="color: #00E5FF;">Elongation Phase:</b> Cells proximal to meristem undergo vacuolation, cell enlargement, and new cell wall deposition.<br>
  3. <b style="color: #00E5FF;">Maturation Phase:</b> Cells attain maximal size, wall thickening, and structural differentiation.<br><br>
  • <b style="color: #00E5FF;">Growth Rates:</b> Increased growth per unit time.<br>
  - <b style="color: #00E5FF;">Arithmetic Growth:</b> Only 1 daughter cell divides while other differentiates (e.g. Root tip elongation). Linear curve: <b>L<sub>t</sub> = L<sub>0</sub> + rt</b>.<br>
  - <b style="color: #00E5FF;">Geometric Growth:</b> Both daughter cells retain division capacity. Exponential curve: <b>W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup></b>.</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Growth Curves, Growth Conditions, Differentiation, Dedifferentiation and Redifferentiation</h3>
  <p>• <b style="color: #00E5FF;">Sigmoid Growth Curve (S-Curve):</b> Characteristic of cells, tissues, and entire plants growing in natural environments. Features 3 phases: <b>Lag Phase</b> (initial slow growth) ➔ <b>Log / Exponential Phase</b> (rapid growth) ➔ <b>Stationary Phase</b> (growth slows due to limited nutrients/space).<br>
  • <b style="color: #00E5FF;">Differentiation, Dedifferentiation &amp; Redifferentiation:</b><br>
  - <b style="color: #00E5FF;">Differentiation:</b> Structural and functional maturation of meristematic cells into permanent tissues (e.g. loss of protoplasm to form tracheary elements).<br>
  - <b style="color: #00E5FF;">Dedifferentiation:</b> Process where living differentiated permanent cells regain meristematic capacity to divide (e.g. formation of Interfascicular Cambium and Cork Cambium from parenchyma).<br>
  - <b style="color: #00E5FF;">Redifferentiation:</b> Process where dedifferentiated meristematic tissues lose division capacity again and mature into permanent tissues (e.g. Secondary Xylem, Secondary Phloem, Cork).</p>


  <!-- EXACT SYLLABUS HEADING 4 WORD-FOR-WORD -->
  <h2 style="color: #00E5FF; margin-top: 30px; font-size: 20px; font-weight: bold;">Sequence of developmental process in a plant cell; Plant growth regulators; Discovery and physiological effects of Auxins, Gibberellins, Cytokinins, Ethylene and Abscissic Acid</h2>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Sequence of Developmental Process in a Plant Cell &amp; PGR Classification</h3>
  <p>• <b style="color: #00E5FF;">Developmental Process Sequence:</b> Development = Growth + Differentiation.<br>
  - Sequence in plant cell: <b>Meristematic Cell ➔ Cell Division ➔ Plasmatic Growth ➔ Cell Elongation/Enlargement ➔ Cell Maturation / Differentiation ➔ Mature Cell ➔ Senescence ➔ Death</b>.<br>
  • <b style="color: #00E5FF;">Plant Growth Regulators (PGRs) Classification:</b><br>
  - <b style="color: #00E5FF;">Plant Growth Promoters:</b> Auxins, Gibberellins, Cytokinins (promote cell division, tropic growth, flowering).<br>
  - <b style="color: #00E5FF;">Plant Growth Inhibitors:</b> Abscisic Acid (ABA) and Ethylene (promote dormancy, abscission, stress response).</p>

  <h3 style="color: #00E5FF; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Discovery, Physiological Effects &amp; Applications of 5 Master PGRs</h3>
  <p>• <b style="color: #00E5FF;">1. Auxins (Indole-3-acetic acid / IAA, IBA, NAA, 2,4-D):</b><br>
  - <b style="color: #00E5FF;">Discovery:</b> <b style="color: #00E5FF;">Charles and Francis Darwin</b> observed phototropism in canary grass coleoptiles; <b style="color: #00E5FF;">F.W. Went</b> isolated Auxin from <i>Avena sativa</i> oat coleoptile tips.<br>
  - <b style="color: #00E5FF;">Physiological Effects:</b> Controls <b>Apical Dominance</b> (suppresses lateral buds), promotes cell elongation, root initiation in stem cuttings, induces parthenocarpy in tomatoes, selective herbicide (2,4-D kills broad-leaved dicot weeds).<br><br>
  • <b style="color: #00E5FF;">2. Gibberellins (GA3 - Gibberellic Acid):</b><br>
  - <b style="color: #00E5FF;">Discovery:</b> <b style="color: #00E5FF;">E. Kurosawa</b> observed 'Foolish Seedling' (Bakanae) disease in rice caused by fungus <i>Gibberella fujikuroi</i>.<br>
  - <b style="color: #00E5FF;">Physiological Effects:</b> Promotes internodal stem elongation (bolting in rosette plants like cabbage), breaks seed dormancy by synthesizing α-amylase enzyme, increases sugarcane stem length (yield by 20 tonnes/acre), delays senescence.<br><br>
  • <b style="color: #00E5FF;">3. Cytokinins (Kinetin, Zeatin):</b><br>
  - <b style="color: #00E5FF;">Discovery:</b> <b style="color: #00E5FF;">Skoog and Miller</b> discovered Kinetin from autoclaved herring sperm DNA; naturally isolated as Zeatin from corn kernels.<br>
  - <b style="color: #00E5FF;">Physiological Effects:</b> Promotes active cell division (cytokinesis), overcomes apical dominance (promotes lateral shoot growth), delays leaf senescence (Richmond-Lang effect by mobilization of nutrients).<br><br>
  • <b style="color: #00E5FF;">4. Ethylene (Gaseous PGR - Ethephon):</b><br>
  - <b style="color: #00E5FF;">Discovery:</b> <b style="color: #00E5FF;">Cousins</b> confirmed volatile gas from ripened oranges accelerated banana ripening.<br>
  - <b style="color: #00E5FF;">Physiological Effects:</b> Promotes <b>Fruit Ripening</b> (climacteric respiration rise), triple response on seedlings (horizontal growth, swelling of axis, apical hook), promotes abscission of leaves/flowers, induces flowering in mango and pineapple.<br><br>
  • <b style="color: #00E5FF;">5. Abscisic Acid (ABA - Stress Hormone):</b><br>
  - <b style="color: #00E5FF;">Discovery:</b> Isolated independently as Inhibitor-β, Abscisin II, and Dormin.<br>
  - <b style="color: #00E5FF;">Physiological Effects:</b> Acts as a general growth inhibitor, closes stomata during drought/water stress (stress hormone), induces seed dormancy and inhibits seed germination (antagonist to Gibberellins).</p>


  <!-- BOTTOM CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 131, 143, 0.15)); border: 1.5px solid #00E5FF; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #00E5FF; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Chapter 4 Plant Physiology Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b style="color: #00E5FF;">Respiration Net Yield:</b> Glycolysis (8 ATP) + Link (6 ATP) + Krebs (24 ATP) = 38 ATP per Glucose.</li>
      <li><b style="color: #00E5FF;">Respiratory Quotient (RQ):</b> Carbohydrates = 1.0 | Fats = 0.7 | Proteins = 0.9 | Organic Acids &gt; 1.0.</li>
      <li><b style="color: #00E5FF;">Light Reactions:</b> Z-scheme PS II + PS I (ATP + NADPH + O2) vs Cyclic PS I (ATP only).</li>
      <li><b style="color: #00E5FF;">Dark Reactions:</b> C3 Calvin (18 ATP, RuBisCO) vs C4 Hatch &amp; Slack (30 ATP, PEPcase, Kranz Anatomy).</li>
      <li><b style="color: #00E5FF;">5 PGRs Summary:</b> Auxin (Apical dominance) | GA (Bolting) | Cytokinin (Cell division) | Ethylene (Fruit ripening) | ABA (Stomatal closure).</li>
    </ul>
  </div>

</div>
`;

export const c11Bot4HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- SECTION A: OBJECTIVE & MCQS (25 Questions) -->
  <div style="background: rgba(0, 229, 255, 0.12); border: 1.5px solid #00E5FF; border-radius: 10px; padding: 14px; margin-bottom: 20px;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION A: Objective & Multiple Choice Questions (Q1 to Q25)</h2>
    <p style="color: #00E5FF; margin: 0; font-size: 14px;">25 Expected MCQs • 1 Mark Each (18 Conceptual Theory + 7 Physiological Identification)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q1. Where does Glycolysis (EMP Pathway) take place in a living cell?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Mitochondrial Matrix &nbsp;&nbsp;&nbsp;&nbsp; (B) Cytoplasm<br>
      (C) Thylakoid Membrane &nbsp;&nbsp;&nbsp;&nbsp; (D) Inner Mitochondrial Membrane
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Cytoplasm</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Glycolysis occurs in the cell cytoplasm in all living organisms.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q2. What is the net ATP yield produced directly via substrate-level phosphorylation in Glycolysis?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 1 ATP &nbsp;&nbsp;&nbsp;&nbsp; (B) 2 ATP<br>
      (C) 4 ATP &nbsp;&nbsp;&nbsp;&nbsp; (D) 38 ATP
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) 2 ATP</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Glycolysis consumes 2 ATP and produces 4 ATP, yielding a net direct gain of 2 ATP.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q3. The primary enzyme complex catalyzing the Link Reaction (Pyruvate to Acetyl-CoA) is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Citrate Synthase &nbsp;&nbsp;&nbsp;&nbsp; (B) Pyruvate Dehydrogenase<br>
      (C) RuBisCO &nbsp;&nbsp;&nbsp;&nbsp; (D) PEPcase
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Pyruvate Dehydrogenase</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Pyruvate Dehydrogenase catalyzes oxidative decarboxylation of pyruvate into Acetyl-CoA.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q4. Where does Krebs Cycle (TCA Cycle) take place?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Cytoplasm &nbsp;&nbsp;&nbsp;&nbsp; (B) Mitochondrial Matrix<br>
      (C) Thylakoid Lumen &nbsp;&nbsp;&nbsp;&nbsp; (D) Peroxisome
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Mitochondrial Matrix</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Krebs cycle enzymes are located in the fluid matrix of mitochondria.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q5. The Respiratory Quotient (RQ) for Carbohydrates (Glucose) is equal to:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 0.7 &nbsp;&nbsp;&nbsp;&nbsp; (B) 0.9<br>
      (C) 1.0 &nbsp;&nbsp;&nbsp;&nbsp; (D) 1.33
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (C) 1.0</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Carbohydrates undergo complete oxidation where volume of CO2 evolved equals volume of O2 consumed (RQ = 1.0).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q6. The Respiratory Quotient (RQ) for Fats (Tripalmitin) is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 1.0 &nbsp;&nbsp;&nbsp;&nbsp; (B) 0.7<br>
      (C) 0.9 &nbsp;&nbsp;&nbsp;&nbsp; (D) Infinity
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) 0.7</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Fats require more oxygen for oxidation relative to CO2 evolved, resulting in RQ = 0.7.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q7. Who proposed the Chemiosmotic Hypothesis for ATP synthesis?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Melvin Calvin &nbsp;&nbsp;&nbsp;&nbsp; (B) Peter Mitchell<br>
      (C) Hans Krebs &nbsp;&nbsp;&nbsp;&nbsp; (D) Joseph Priestley
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Peter Mitchell</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Peter Mitchell proposed the chemiosmotic hypothesis driving ATP synthesis via proton gradients.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q8. Photolysis of water associated with Photosystem II occurs on the:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Stroma side &nbsp;&nbsp;&nbsp;&nbsp; (B) Inner Thylakoid Lumen side<br>
      (C) Outer Envelope &nbsp;&nbsp;&nbsp;&nbsp; (D) Peroxisome
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Inner Thylakoid Lumen side</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Water splitting complex is physically located on the inner lumen side of thylakoid membranes.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q9. The primary CO2 acceptor molecule in C3 Calvin Cycle is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) PEP (3C) &nbsp;&nbsp;&nbsp;&nbsp; (B) RuBP (5C)<br>
      (C) OAA (4C) &nbsp;&nbsp;&nbsp;&nbsp; (D) 3-PGA (3C)
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) RuBP (5C)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Ribulose-1,5-bisphosphate (RuBP, 5C) is the primary CO2 acceptor in C3 plants.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q10. The first stable 4-carbon compound formed in C4 Hatch & Slack Pathway is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 3-PGA &nbsp;&nbsp;&nbsp;&nbsp; (B) Oxaloacetic Acid (OAA)<br>
      (C) Malic Acid &nbsp;&nbsp;&nbsp;&nbsp; (D) Citric Acid
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Oxaloacetic Acid (OAA)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> PEPcase fixes CO2 to PEP forming 4-carbon Oxaloacetic acid (OAA).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q11. Specialized leaf anatomy in C4 plants featuring large bundle sheath cells is termed:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dorsiventral Anatomy &nbsp;&nbsp;&nbsp;&nbsp; (B) Isobilateral Anatomy<br>
      (C) Kranz Anatomy &nbsp;&nbsp;&nbsp;&nbsp; (D) Xerophytic Anatomy
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (C) Kranz Anatomy</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Kranz anatomy features wreath-like concentric layers of bundle sheath cells around veins in C4 leaves.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q12. Primary CO2 fixing enzyme in C4 mesophyll cells which lacks oxygenase activity is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) RuBisCO &nbsp;&nbsp;&nbsp;&nbsp; (B) PEPcase<br>
      (C) ATP Synthase &nbsp;&nbsp;&nbsp;&nbsp; (D) Carbonic Anhydrase
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) PEPcase</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> PEPcase binds CO2 efficiently without binding O2, suppressing Photorespiration in C4 plants.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q13. Photorespiration (C2 Cycle) involves which three cell organelles in sequence?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Chloroplast, Mitochondria, Lysosome &nbsp;&nbsp;&nbsp;&nbsp; (B) Chloroplast, Peroxisome, Mitochondria<br>
      (C) Golgi, Endoplasmic Reticulum, Vacuole &nbsp;&nbsp;&nbsp;&nbsp; (D) Nucleus, Ribosome, Chloroplast
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Chloroplast, Peroxisome, Mitochondria</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Photorespiration proceeds through Chloroplast ➔ Peroxisome ➔ Mitochondria.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q14. Blackman's Law of Limiting Factors was proposed in the year:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 1888 &nbsp;&nbsp;&nbsp;&nbsp; (B) 1905<br>
      (C) 1931 &nbsp;&nbsp;&nbsp;&nbsp; (D) 1954
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) 1905</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> F.F. Blackman formulated the Law of Limiting Factors in 1905.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q15. The S-shaped growth curve characteristic of living organisms in natural conditions is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Linear Curve &nbsp;&nbsp;&nbsp;&nbsp; (B) Sigmoid Growth Curve<br>
      (C) Parabolic Curve &nbsp;&nbsp;&nbsp;&nbsp; (D) Hyperbolic Curve
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Sigmoid Growth Curve</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Sigmoid curve features Lag, Log (exponential), and Stationary phases.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q16. Which PGR induces Apical Dominance by suppressing lateral axillary buds?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Gibberellin &nbsp;&nbsp;&nbsp;&nbsp; (B) Auxin (IAA)<br>
      (C) Cytokinin &nbsp;&nbsp;&nbsp;&nbsp; (D) Abscisic Acid
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Auxin (IAA)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Auxins synthesized at shoot apex suppress the growth of lateral axillary buds.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q17. Foolish Seedling (Bakanae) disease of rice led to the discovery of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Auxin &nbsp;&nbsp;&nbsp;&nbsp; (B) Gibberellin (GA3)<br>
      (C) Ethylene &nbsp;&nbsp;&nbsp;&nbsp; (D) Cytokinin
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Gibberellin (GA3)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> E. Kurosawa discovered Gibberellin from the fungus Gibberella fujikuroi causing Bakanae disease.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q18. Which PGR promotes internodal stem elongation (bolting) in rosette plants like Cabbage?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Auxin &nbsp;&nbsp;&nbsp;&nbsp; (B) Gibberellin<br>
      (C) ABA &nbsp;&nbsp;&nbsp;&nbsp; (D) Ethylene
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Gibberellin</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Gibberellin induces dramatic stem bolting prior to flowering in rosette plants.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q19. Which PGR overcomes Apical Dominance by promoting lateral shoot growth?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Auxin &nbsp;&nbsp;&nbsp;&nbsp; (B) Cytokinin<br>
      (C) ABA &nbsp;&nbsp;&nbsp;&nbsp; (D) Ethylene
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) Cytokinin</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Cytokinin antagonizes auxin by stimulating lateral bud outgrowth.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q20. Which plant hormone is a volatile gas that accelerates fruit ripening?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Auxin &nbsp;&nbsp;&nbsp;&nbsp; (B) Gibberellin<br>
      (C) Ethylene (Ethephon) &nbsp;&nbsp;&nbsp;&nbsp; (D) Cytokinin
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (C) Ethylene (Ethephon)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Ethylene is a gaseous PGR triggering climacteric fruit ripening.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q21. Which PGR is known as the 'Stress Hormone' because it closes stomata during drought?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Auxin &nbsp;&nbsp;&nbsp;&nbsp; (B) Gibberellin<br>
      (C) Cytokinin &nbsp;&nbsp;&nbsp;&nbsp; (D) Abscisic Acid (ABA)
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (D) Abscisic Acid (ABA)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> ABA triggers stomatal closure to conserve water during drought conditions.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q22. The first stable 3-carbon product of C3 Calvin Cycle is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) OAA &nbsp;&nbsp;&nbsp;&nbsp; (B) 3-Phosphoglycerate (3-PGA)<br>
      (C) RuBP &nbsp;&nbsp;&nbsp;&nbsp; (D) Glucose
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) 3-Phosphoglycerate (3-PGA)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> CO2 fixation by RuBisCO yields two 3C molecules of 3-PGA.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q23. How many ATP molecules are consumed to synthesize 1 Glucose molecule in C3 Calvin Cycle?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 12 ATP &nbsp;&nbsp;&nbsp;&nbsp; (B) 18 ATP<br>
      (C) 30 ATP &nbsp;&nbsp;&nbsp;&nbsp; (D) 38 ATP
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) 18 ATP</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> C3 Calvin cycle consumes 18 ATP and 12 NADPH per glucose synthesized.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q24. How many ATP molecules are consumed to synthesize 1 Glucose molecule in C4 Hatch & Slack Pathway?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 18 ATP &nbsp;&nbsp;&nbsp;&nbsp; (B) 24 ATP<br>
      (C) 30 ATP &nbsp;&nbsp;&nbsp;&nbsp; (D) 38 ATP
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (C) 30 ATP</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> C4 pathway requires 30 ATP and 12 NADPH per glucose molecule.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #00E5FF;">Q25. Which PGR is widely used as a selective herbicide to kill broad-leaved dicot weeds?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) GA3 &nbsp;&nbsp;&nbsp;&nbsp; (B) 2,4-D (Auxin)<br>
      (C) Kinetin &nbsp;&nbsp;&nbsp;&nbsp; (D) ABA
    </div>
    <div style="background: rgba(0, 229, 255, 0.15); border-left: 3.5px solid #00E5FF; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #00E5FF;">✓ Answer: (B) 2,4-D (Auxin)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Synthetic auxin 2,4-D selectively eliminates broad-leaved dicot weeds without harming monocot crops.</span>
    </div>
  </div>
  <!-- SECTION B: VERY SHORT ANSWER QUESTIONS (Q26 to Q55) -->
  <div style="background: rgba(0, 229, 255, 0.12); border: 1.5px solid #00E5FF; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION B: Very Short Answer Questions (Q26 to Q55)</h2>
    <p style="color: #00E5FF; margin: 0; font-size: 14px;">30 Expected VSA Questions • 2 Marks Each (22 Conceptual Theory + 8 Physiological Equations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q26. Define Cellular Respiration.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Enzyme-catalyzed oxidative breakdown of organic substrates (glucose) releasing metabolic energy stored as ATP.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q27. State site and net yield of Glycolysis.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>Site:</b> Cytoplasm.<br><b style='color: #00E5FF;'>Net Yield:</b> 2 Pyruvate + 2 ATP (net) + 2 NADH + H+.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q28. Write equation for Link Reaction connecting Glycolysis to Krebs Cycle.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      2 Pyruvate + 2 CoA + 2 NAD+ ➔ 2 Acetyl-CoA + 2 CO2 + 2 NADH + 2 H+.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q29. State site and net yield per Glucose of Krebs Cycle.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>Site:</b> Mitochondrial Matrix.<br><b style='color: #00E5FF;'>Net Yield:</b> 6 NADH + 2 FADH2 + 2 GTP/ATP + 4 CO2.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q30. What is Complex V in Mitochondrial ETS?</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      ATP Synthase complex (F0F1) which synthesizes ATP from ADP and Pi driven by proton flow.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q31. Define Respiratory Quotient (RQ) and give RQ values for Glucose and Fats.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Ratio of volume of CO2 evolved to volume of O2 consumed.<br>Glucose RQ = 1.0 | Fats (Tripalmitin) RQ = 0.7.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q32. Why is Respiration termed an Amphibolic Pathway?</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Serves both catabolic (breakdown) and anabolic (synthesis of amino acids/fatty acids) functions.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q33. State contribution of T.W. Engelmann in Photosynthesis.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Plotted first Action Spectrum of photosynthesis using <i>Cladophora</i> algae and aerobic bacteria, identifying blue/red light absorption.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q34. State site of Light and Dark reactions in Chloroplast.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>Light Reaction:</b> Thylakoid Membranes (Grana).<br><b style='color: #00E5FF;'>Dark Reaction:</b> Stroma.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q35. Differentiate Photosystem I and Photosystem II based on reaction centers.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>PS I:</b> Reaction center P700 (700nm).<br><b style='color: #00E5FF;'>PS II:</b> Reaction center P680 (680nm).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q36. State Photolysis equation of water.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      2 H2O ➔ 4 H+ + O2 + 4 e- (Associated with PS II in thylakoid lumen).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q37. Differentiate Cyclic and Non-cyclic photophosphorylation.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>Non-cyclic:</b> PS II + PS I, yields ATP + NADPH + O2.<br><b style='color: #00E5FF;'>Cyclic:</b> PS I only, yields ATP only (no O2).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q38. Name primary CO2 acceptor and first stable product in C3 plants.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>Primary Acceptor:</b> RuBP (5C).<br><b style='color: #00E5FF;'>First Product:</b> 3-Phosphoglycerate (3-PGA, 3C).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q39. Name primary CO2 acceptor and first stable product in C4 plants.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>Primary Acceptor:</b> PEP (3C).<br><b style='color: #00E5FF;'>First Product:</b> Oxaloacetic Acid (OAA, 4C).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q40. Define Kranz Anatomy in C4 leaves.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Wreath-like concentric arrangement of large chloroplast-rich bundle sheath cells around leaf veins.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q41. Why does C4 pathway avoid Photorespiration?</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      PEPcase in mesophyll fixes CO2 efficiently without oxygenase activity, pumping high CO2 concentration to RuBisCO in bundle sheath.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q42. What is Photorespiration (C2 Cycle)?</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Energy-wasting process where RuBisCO binds O2 instead of CO2, consuming ATP and releasing CO2 without sugar production.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q43. State 3 organelles involved in Photorespiration.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      1. Chloroplast, 2. Peroxisome, 3. Mitochondria.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q44. State Blackman's Law of Limiting Factors.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      When a chemical process is conditioned by several factors, its rate is limited by the factor present at sub-optimal minimum value.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q45. Define Apical Dominance and name hormone responsible.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Suppression of lateral axillary bud growth by shoot apex.<br>Hormone Responsible: <b>Auxin (IAA)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q46. What is Bolting? Name the PGR inducing it.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Rapid internodal stem elongation prior to flowering in rosette plants.<br>PGR Responsible: <b>Gibberellin (GA3)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q47. State 2 functions of Cytokinins.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      1. Promotes active cell division (cytokinesis).<br>2. Overcomes apical dominance and delays leaf senescence.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q48. Why is Abscisic Acid (ABA) called the Stress Hormone?</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Induces rapid stomatal closure during drought/water stress to prevent transpiration loss.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q49. State function of Ethylene in post-harvest fruit management.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Accelerates climacteric fruit ripening and uniform coloration in bananas, tomatoes, and mangoes.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q50. Differentiate Arithmetic Growth and Geometric Growth.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>Arithmetic:</b> 1 daughter cell divides (linear curve: Lt = L0 + rt).<br><b style='color: #00E5FF;'>Geometric:</b> Both daughter cells divide (S-sigmoid curve: W1 = W0 ert).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q51. Define Differentiation, Dedifferentiation, and Redifferentiation.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      <b style='color: #00E5FF;'>Differentiation:</b> Cell maturation into permanent tissue.<br><b style='color: #00E5FF;'>Dedifferentiation:</b> Permanent cells regain division power.<br><b style='color: #00E5FF;'>Redifferentiation:</b> Dedifferentiated cells mature again.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q52. State 3 phases of Sigmoid Growth Curve.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      1. Lag Phase, 2. Log (Exponential) Phase, 3. Stationary Phase.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q53. Calculate ATP yield from 1 molecule of NADH and 1 FADH2 in ETS.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      1 NADH = 3 ATP | 1 FADH2 = 2 ATP.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q54. Why is RuBisCO termed the most abundant enzyme on Earth?</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      Present in all photosynthetic green plant chloroplasts, fixing CO2 across global biomes.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q55. Give 2 examples of synthetic Auxins used in agriculture.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Answer:</b><br>
      1. NAA (Naphthalene acetic acid), 2. 2,4-D (2,4-Dichlorophenoxyacetic acid).
    </div>
  </div>
  <!-- SECTION C: SHORT ANSWER QUESTIONS (Q56 to Q85) -->
  <div style="background: rgba(0, 229, 255, 0.12); border: 1.5px solid #00E5FF; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION C: Short Answer Questions (Q56 to Q85)</h2>
    <p style="color: #00E5FF; margin: 0; font-size: 14px;">30 Expected SA Questions • 3 Marks Each (22 Conceptual Theory + 8 Physiological Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q56. Detail Cellular Respiration master architecture with 3D diagram.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Respiration connects Glycolysis in cytoplasm to Krebs cycle & ETS in mitochondria yielding 38 ATP.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMDBFNUZGIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkNlbGx1bGFyIFJlc3BpcmF0aW9uIFBhdGh3YXlzICZhbXA7IEFUUCBFbmVyZ2V0aWNzPC90ZXh0PgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gMS4gR2x5Y29seXNpcyAoQ3l0b3BsYXNtKSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyNDYiIGhlaWdodD0iNDMwIiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDgpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTIzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEuIEdMWUNPTFlTSVMgKEN5dG9wbGFzbSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTVGRiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIyMCIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgU3Vic3RyYXRlIEJyZWFrZG93bjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkdsdWNvc2UgKDZDKSDinpQgMiBQeXJ1dmF0ZSAoM0MpPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEyMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+QW5hZXJvYmljIC8gRU1QIFBhdGh3YXk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4xMCBFbnp5bWUtY2F0YWx5emVkIHN0ZXBzPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEwIiB5PSIxNzgiIHdpZHRoPSIyMjYiIGhlaWdodD0iMTE4IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgQVRQICZhbXA7IE5BREggWWllbGQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjIyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4yIEFUUCBjb25zdW1lZCBpbml0aWFsbHk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj40IEFUUCBmb3JtZWQgZGlyZWN0bHk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5OZXQ6IDIgQVRQICsgMiBOQURIPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjI4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iIzY5RjBBRSI+VG90YWwgWWllbGQgPSA2IHRvIDggQVRQPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEwIiB5PSIzMTAiIHdpZHRoPSIyMjYiIGhlaWdodD0iMTA4IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgRmVybWVudGF0aW9uIE9wdGlvbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIzNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkxhY3RpYyBBY2lkIC8gQWxjb2hvbGljPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+SW4gYWJzZW5jZSBvZiBPeHlnZW48L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMzk0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5OZXQgWWllbGQgPSAyIEFUUCBvbmx5PC90ZXh0PgoKICAgIDwhLS0gMi4gS3JlYnMgQ3ljbGUgKE1pdG9jaG9uZHJpYWwgTWF0cml4KSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2NywgMCkiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQ2IiBoZWlnaHQ9IjQzMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDI1NSwxNDUsMCwwLjA4KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHRleHQgeD0iMTIzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIEtSRUJTIENZQ0xFIChNYXRyaXgpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQxODAiPuKAoiBMaW5rIFJlYWN0aW9uPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5QeXJ1dmF0ZSDinpQgQWNldHlsLUNvQSAoMkMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5QeXJ1dmF0ZSBEZWh5ZHJvZ2VuYXNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5ZaWVsZHM6IDIgTkFESCArIDIgQ08yPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjE3OCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSIxMTgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIFRDQSBDeWNsZSBTZXF1ZW5jZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjIyMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+T0FBICg0QykgKyBBY2V0eWwtQ29BPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj7inpQgQ2l0cmF0ZSAoNkMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5EZWNhcmJveHlsYXRpb25zPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj5BbXBoaWJvbGljIHBhdGh3YXk8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMCIgeT0iMzEwIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj7igKIgWWllbGQgcGVyIEdsdWNvc2U8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPjYgTkFESCAoMTggQVRQIGVxdWl2KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+MiBGQURIMiAoNCBBVFAgZXF1aXYpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMzk0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4yIEdUUC9BVFAgZGlyZWN0PC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gMy4gRVRTICYgQ2hlbWlvc21vc2lzIChJbm5lciBNZW1icmFuZSkgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzQsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjI0NiIgaGVpZ2h0PSI0MzAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4wOCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjEyMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zLiBFVFMgJmFtcDsgQ0hFTUlPU01PU0lTPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiBFbGVjdHJvbiBUcmFuc3BvcnQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkNvbXBsZXggSSB0byBJViBpbiBDcmlzdGFlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5VYmlxdWlub25lICZhbXA7IEN5dCBjPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5GaW5hbCBhY2NlcHRvcjogT3h5Z2VuPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjE3OCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSIxMTgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIFByb3RvbiBHcmFkaWVudDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjIyMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+SCsgcHVtcGVkIHRvIGludGVybWVtYnJhbmU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIyNDIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkhpZ2ggcHJvdG9uIGdyYWRpZW50PC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5Ecml2ZXMgQVRQIFN5bnRoYXNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzY5RjBBRSI+MSBOQURIPTMgQVRQfDEgRkFESDI9MiBBVFA8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMCIgeT0iMzEwIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgTmV0IEFUUCBCYWxhbmNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMzU0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5HbHljb2x5c2lzOiA4IEFUUDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+TGluayArIEtyZWJzOiAzMCBBVFA8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPlRvdGFsIE5ldCA9IDM2IHRvIDM4IEFUUDwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFlcm9iaWMgUmVzcGlyYXRpb246IDEgR2x1Y29zZSArIDYgTzIg4p6UIDYgQ08yICsgNiBIMk8gKyAzOCBBVFAgKFJlc3BpcmF0b3J5IFF1b3RpZW50ID0gMS4wKTwvdGV4dD4KICA8L2c+Cjwvc3ZnPg==' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #00E5FF;' alt='Respiration Architecture' /><p style='color: #00E5FF; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q56: 3D Cellular Respiration Master Architecture</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q57. Detail Photosynthesis Light Reactions Z-Scheme with 3D diagram.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Z-scheme involves PS II & PS I in series, photolysis of water, and chemiosmosis generating ATP & NADPH.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QaG90b3N5bnRoZXNpczogTGlnaHQtRGVwZW5kZW50IFJlYWN0aW9ucyAmYW1wOyBaLVNjaGVtZTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIE5vbi1DeWNsaWMgUGhvdG9waG9zcGhvcnlsYXRpb24gKFotU2NoZW1lKSAtLT4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEuIE5vbi1DeWNsaWMgWi1TY2hlbWUgKFBTIElJICsgUFMgSSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj5LZXkgTWVjaGFuaXNtIFN0ZXBzOjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9Ijk4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5QaG90b3N5c3RlbSBJSSAoUDY4MCk6PC90c3Bhbj4gQWJzb3JicyA2ODBubSBsaWdodDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgRXhjaXRlZCBlLSB0cmFuc2ZlcnJlZCB0byBQaGVvcGh5dGluIGFjY2VwdG9yLjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+V2F0ZXIgU3BsaXR0aW5nIChQaG90b2x5c2lzKTo8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgMiBIMk8g4p6UIDQgSCsgKyBPMiArIDQgZS0gKFJlcGxhY2VzIFBTIElJIGUtKS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIxOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQxODAiPkVsZWN0cm9uIFRyYW5zcG9ydCBDaGFpbjo8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgUGxhc3RvcXVpbm9uZSDinpQgQ3l0IGI2ZiDinpQgUGxhc3RvY3lhbmluIOKelCBQUyBJLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgRHJpdmVzIEFUUCBzeW50aGVzaXMgdmlhIGNoZW1pb3Ntb3Npcy48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIyNjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPlBob3Rvc3lzdGVtIEkgKFA3MDApOjwvdHNwYW4+IEFic29yYnMgNzAwbm0gbGlnaHQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjg0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIGUtIHRyYW5zZmVycmVkIHRvIEZlcnJlZG94aW4g4p6UIE5BRFArIFJlZHVjdGFzZS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIzMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgQXNzaW1pbGF0b3J5IFBvd2VyIFlpZWxkOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPiAgUHJvZHVjZXMgQk9USCBBVFAgYW5kIE5BRFBIICsgSCs8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMzUyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIHdpdGggb3h5Z2VuIGV2b2x1dGlvbiAoTzIgcmVsZWFzZSkhPC90ZXh0PgoKICAgIDwhLS0gMi4gQ3ljbGljIFBob3RvcGhvc3Bob3J5bGF0aW9uIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgwRDhGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gQ3ljbGljIFBob3RvcGhvc3Bob3J5bGF0aW9uIChQUyBJIE9ubHkpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSI3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiPktleSBNZWNoYW5pc20gU3RlcHM6PC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9Ijk4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5PY2N1cnMgaW4gU3Ryb21hIExhbWVsbGFlOjwvdHNwYW4+PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIExhY2tzIFBTIElJIGFuZCBOQURQIFJlZHVjdGFzZSBlbnp5bWUuPC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+Q3ljbGljIEVsZWN0cm9uIExvb3A6PC90c3Bhbj48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgUDcwMCAoUFMgSSkg4p6UIFByaW1hcnkgQWNjZXB0b3Ig4p6UIEZlcnJlZG94aW48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxODgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAg4p6UIEN5dCBiNmYg4p6UIFBsYXN0b2N5YW5pbiDinpQgUmV0dXJucyB0byBQNzAwITwvdGV4dD4KICAgICAgCiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM2OUYwQUUiPlByb3RvbiBHcmFkaWVudCAmYW1wOyBBVFAgU3ludGhlc2lzOjwvdHNwYW4+PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjM2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIFByb3RvbnMgcHVtcGVkIHRvIFRoeWxha29pZCBsdW1lbiBnZW5lcmF0ZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjI1NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBncmFkaWVudCBkcml2aW5nIEFUUCBTeW50aGFzZSAoRjBGMSkuPC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9IjI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPuKAoiBLZXkgRGlmZmVyZW5jZXMgZnJvbSBOb24tQ3ljbGljOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjMwNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICAxLiBOTyBQaG90b2x5c2lzIG9mIHdhdGVyIChOTyBPMiBldm9sdmVkISkuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMzI2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIDIuIFByb2R1Y2VzIEFUUCBPTkxZIChOTyBOQURQSCBmb3JtZWQpLjwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRoeWxha29pZCBNZW1icmFuZTogTGlnaHQgRW5lcmd5IOKelCBBVFAgJmFtcDsgTkFEUEggKEFzc2ltaWxhdG9yeSBQb3dlciBmb3IgRGFyayBSZWFjdGlvbnMpPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #00E5FF;' alt='Photosynthesis Z-Scheme' /><p style='color: #00E5FF; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q57: 3D Light Reactions Z-Scheme Architecture</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q58. Compare C3 Calvin Cycle and C4 Hatch & Slack Pathway with 3D diagram.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      C3 uses RuBisCO (18 ATP yield); C4 uses PEPcase in mesophyll + RuBisCO in bundle sheath (30 ATP, suppresses Photorespiration).<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMDBFNUZGIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkRhcmsgUmVhY3Rpb25zOiBDMyBDYWx2aW4gQ3ljbGUgdnMgQzQgSGF0Y2ggJmFtcDsgU2xhY2sgUGF0aHdheTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIExlZnQgQm94OiBDMyBDYWx2aW4gQ3ljbGUgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQzNSIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjA2KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBDMyBDYWx2aW4gQ3ljbGUgKFN0cm9tYSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4zIE1hc3RlciBQaGFzZXM6PC90ZXh0PgogICAgCiAgICA8dGV4dCB4PSIyNSIgeT0iOTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4xLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+Q2FyYm94eWxhdGlvbjo8L3RzcGFuPiBDTzIgKyBSdUJQICg1Qykg4p6UIDMtUEdBPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjExOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgQ2F0YWx5emVkIGJ5IFJ1QmlzQ08gZW56eW1lLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNBQUEiPiAgIEZpcnN0IHN0YWJsZSBwcm9kdWN0ID0gMy1QR0EgKDNDKS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4yLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+UmVkdWN0aW9uOjwvdHNwYW4+IDIgQVRQICsgMiBOQURQSCBwZXIgQ08yPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjE4NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgRm9ybXMgVHJpb3NlIFBob3NwaGF0ZSAvIEdsdWNvc2UuPC90ZXh0PgoKICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+UmVnZW5lcmF0aW9uOjwvdHNwYW4+IDEgQVRQIHBlciBDTzI8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBSZWdlbmVyYXRlcyBSdUJQIGFjY2VwdG9yIG1vbGVjdWxlLjwvdGV4dD4KCiAgICA8dGV4dCB4PSIyNSIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIENvc3QgcGVyIEdsdWNvc2UgKDYgQ08yKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjg0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIFJlcXVpcmVzIDE4IEFUUCArIDEyIE5BRFBILjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9IjMxMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPuKAoiBQaG90b3Jlc3BpcmF0aW9uIFJpc2s6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjMzNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBSdUJpc0NPIG94eWdlbmFzZSBhY3Rpdml0eSB3YXN0ZXMgZW5lcmd5PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjM1NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBpbiBoaWdoIE8yIGFuZCBoaWdoIHRlbXBlcmF0dXJlITwvdGV4dD4KCiAgICA8IS0tIFJpZ2h0IEJveDogQzQgSGF0Y2ggJiBTbGFjayBQYXRod2F5IC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgwRDhGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gQzQgSGF0Y2ggJmFtcDsgU2xhY2sgUGF0aHdheTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI0OCIgd2lkdGg9IjM1NiIgaGVpZ2h0PSIzNzIiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj5LcmFueiBBbmF0b215ICZhbXA7IFNwYXRpYWwgU2VwYXJhdGlvbjo8L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iOTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPk1lc29waHlsbCBDZWxsczo8L3RzcGFuPiBQcmltYXJ5IENPMiBGaXhhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjExOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgUEVQICgzQykgKyBDTzIg4p6UIE9BQSAoNEMgT3hhbG9hY2V0YXRlKS48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNBQUEiPiAgIFBFUGNhc2UgaGFzIE5PIG94eWdlbmFzZSBhY3Rpdml0eSE8L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iMTY2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5CdW5kbGUgU2hlYXRoIENlbGxzOjwvdHNwYW4+IFNlY29uZGFyeSBGaXhhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjE4NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgTWFsYXRlIHRyYW5zcG9ydGVkIOKelCBEZWNhcmJveHlsYXRlZCB0byBDTzIuPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjA2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBIaWdoIENPMiBzdXBwcmVzc2VzIFBob3RvcmVzcGlyYXRpb24hPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjI2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBSdUJpc0NPIGZpeGVzIENPMiBpbiBDMyBjeWNsZS48L3RleHQ+CgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjU0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIENvc3QgcGVyIEdsdWNvc2UgKDYgQ08yKTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSIyNzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPiAgUmVxdWlyZXMgMzAgQVRQICsgMTIgTkFEUEguPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjk2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIChIaWdoZXIgZWZmaWNpZW5jeSBhdCBoaWdoIHRlbXAhKS48L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iMzI0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIEV4YW1wbGVzOiBNYWl6ZSwgU3VnYXJjYW5lLCBTb3JnaHVtLjwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM0IFBsYW50cyBhdm9pZCBQaG90b3Jlc3BpcmF0aW9uIHZpYSBLcmFueiBBbmF0b215ICZhbXA7IFBFUGNhc2Ug4p6UIEhpZ2hlciB5aWVsZCBhdCBoaWdoIHRlbXAhPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #00E5FF;' alt='C3 vs C4 Pathways' /><p style='color: #00E5FF; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q58: 3D C3 Calvin vs C4 Hatch & Slack Pathways Architecture</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q59. Detail PGRs action and Sigmoid Growth Curve with 3D diagram.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Growth features Lag, Log, Stationary phases regulated by Auxin, GA, Cytokinin, Ethylene, and ABA.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkNCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFudCBHcm93dGggUmVndWxhdG9ycyAoUEdScykgJmFtcDsgR3Jvd3RoIEN1cnZlczwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIExlZnQgQm94OiA1IFBHUnMgTWFzdGVyIFN1bW1hcnkgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQzNSIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjA2KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41IFBsYW50IEdyb3d0aCBSZWd1bGF0b3JzIChQR1JzKTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iNDgiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTVGRiI+MS4gQXV4aW5zIChJQUEgLyBJQkEgLyBOQUEpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSI4OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+QXBpY2FsIERvbWluYW5jZSwgQ2VsbCBFbG9uZ2F0aW9uLCBSb290aW5nPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIxMjQiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjE0NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiPjIuIEdpYmJlcmVsbGlucyAoR0EzKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMTY0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5TdGVtIEJvbHRpbmcsIFNlZWQgR2VybWluYXRpb24sIFN1Z2FyY2FuZSB5aWVsZDwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iMjAwIiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4zLiBDeXRva2luaW5zIChaZWF0aW4gLyBLaW5ldGluKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5DZWxsIERpdmlzaW9uLCBPdmVyY29tZXMgQXBpY2FsIERvbWluYW5jZTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iMjc2IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyOTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj40LiBFdGh5bGVuZSAoR2FzZW91cyAtIEV0aGVwaG9uKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5GcnVpdCBSaXBlbmluZywgVHJpcGxlIFJlc3BvbnNlLCBBYnNjaXNzaW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIzNTIiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjM3MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPjUuIEFic2Npc2ljIEFjaWQgKEFCQSAtIFN0cmVzcyBIb3Jtb25lKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzkyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5TdG9tYXRhbCBDbG9zdXJlLCBTZWVkIERvcm1hbmN5LCBTdHJlc3MgdG9sZXJhbmNlPC90ZXh0PgoKICAgIDwhLS0gUmlnaHQgQm94OiBHcm93dGggUmF0ZXMgJiBDdXJ2ZXMgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAsIDApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjM4MCIgaGVpZ2h0PSI0MzUiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIyOSwyNTUsMC4wNikiIHN0cm9rZT0iIzAwRTVGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hcm93dGggUmF0ZXMgJmFtcDsgU2lnbW9pZCBDdXJ2ZTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI0OCIgd2lkdGg9IjM1NiIgaGVpZ2h0PSIxNzUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4xLiBBcml0aG1ldGljIEdyb3d0aDo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSI5NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIE9ubHkgMSBkYXVnaHRlciBjZWxsIGRpdmlkZXMgd2hpbGUgb3RoZXI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPiAgZGlmZmVyZW50aWF0ZXMgaW50byBwZXJtYW5lbnQgY2VsbC48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPuKAoiBMaW5lYXIgR3Jvd3RoIEZvcm11bGE6IEx0ID0gTDAgKyBydDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIENvbnN0YW50IGdyb3d0aCByYXRlIChSb290IHRpcCBlbG9uZ2F0aW9uKS48L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMjM1IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjE4NyIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNjEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4yLiBHZW9tZXRyaWMgR3Jvd3RoIChTLVNpZ21vaWQgQ3VydmUpOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjI4MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIEJvdGggZGF1Z2h0ZXIgY2VsbHMgcmV0YWluIGRpdmlzaW9uIGNhcGFjaXR5LjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjMwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIEZvcm11bGE6IFcxID0gVzAgKiBlXihydCk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPjEuIExhZyBQaGFzZSDinpQgMi4gTG9nIChFeHBvbmVudGlhbCkgUGhhc2U8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzNDciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPuKelCAzLiBTdGF0aW9uYXJ5IFBoYXNlIChOdXRyaWVudCBsaW1pdGF0aW9uKS48L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDUxNSkiPgogICAgPHJlY3Qgd2lkdGg9Ijc4MCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjE1KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuOCIvPgogICAgPHRleHQgeD0iMzkwIiB5PSIzMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EZXZlbG9wbWVudCA9IEdyb3d0aCArIERpZmZlcmVudGlhdGlvbiAoUmVndWxhdGVkIGJ5IEF1eGluLCBHQSwgQ3l0b2tpbmluLCBFdGh5bGVuZSAmYW1wOyBBQkEpPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #00E5FF;' alt='PGRs & Growth Curves' /><p style='color: #00E5FF; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q59: 3D PGRs Action & Sigmoid Growth Curve</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q60. Detail 10 steps of Glycolysis (EMP Pathway) with enzymes.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Glucose ➔ G-6-P ➔ F-6-P ➔ F-1,6-BP ➔ DHAP/G-3-P ➔ 1,3-BPGA ➔ 3-PGA ➔ 2-PGA ➔ PEP ➔ Pyruvate.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q61. Explain Krebs Cycle steps from Citrate synthesis to OAA regeneration.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Acetyl-CoA + OAA ➔ Citrate ➔ Isocitrate ➔ α-Ketoglutarate ➔ Succinyl-CoA ➔ Succinate ➔ Fumarate ➔ Malate ➔ OAA.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q62. Detail 5 ETS complexes in inner mitochondrial membrane.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Complex I (NADH Dehydrogenase), II (Succinate Dehydrogenase), III (Cyt bc1), IV (Cyt c Oxidase), V (ATP Synthase F0F1).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q63. Explain Chemiosmotic Hypothesis of ATP synthesis in Mitochondria & Chloroplasts.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Proton pumping creates H+ gradient across membrane; H+ flow down gradient through F0 channel drives F1 headpiece ATP synthesis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q64. Compare Aerobic and Anaerobic Respiration in tabular format.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Aerobic (O2 present, 38 ATP yield, complete CO2/H2O breakdown); Anaerobic (O2 absent, 2 ATP yield, Ethanol/Lactic acid).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q65. Detail ATP energetics balance sheet for 1 Glucose molecule.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Glycolysis (8 ATP) + Link reaction (6 ATP) + Krebs cycle (24 ATP) = Net 38 ATP.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q66. Explain why Respiratory Quotient (RQ) varies for Carbohydrates, Fats, and Proteins.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Depends on oxygen content of substrate; fats require more O2 for oxidation (RQ=0.7), carbohydrates have equal O2/CO2 (RQ=1.0).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q67. Detail historical experiments of Priestley, Ingenhousz, Sachs, Engelmann, and Van Niel.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Priestley (bell jar O2), Ingenhousz (sunlight bubbles), Sachs (starch), Engelmann (action spectrum), Van Niel (H2O source of O2).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q68. Compare Photosystem I (PS I) and Photosystem II (PS II).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      PS I (P700, stroma/grana lamellae, cyclic/non-cyclic); PS II (P680, grana lamellae, photolysis of water, non-cyclic).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q69. Explain Non-Cyclic Photophosphorylation Z-Scheme step-by-step.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      PS II P680 ➔ e- acceptor ➔ ETC ➔ PS I P700 ➔ Ferredoxin ➔ NADP+ Reductase ➔ NADPH + H+ (with ATP & O2).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q70. Detail 3 phases of Calvin (C3) Cycle: Carboxylation, Reduction, Regeneration.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Carboxylation (RuBisCO fixes CO2 to RuBP), Reduction (ATP+NADPH form G-3-P), Regeneration (ATP regenerates RuBP).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q71. Detail Kranz Anatomy and Hatch & Slack (C4) Pathway.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Mesophyll PEPcase fixes CO2 to OAA (4C) ➔ Malate transported to Bundle Sheath ➔ Decarboxylated to CO2 for RuBisCO Calvin cycle.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q72. Compare C3 plants and C4 plants in tabular format.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      C3 (RuBisCO primary, 18 ATP, Photorespiration occurs, 20-25°C); C4 (PEPcase primary, Kranz anatomy, 30 ATP, No photorespiration, 30-45°C).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q73. Detail Photorespiration (C2 Cycle) steps in Chloroplast, Peroxisome, and Mitochondria.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      RuBisCO binds O2 forming Phosphoglycolate ➔ Peroxisome glycine ➔ Mitochondria serine + CO2 release (wastes 25% fixed carbon).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q74. Explain Blackman's Law of Limiting Factors with light and CO2 concentration curves.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Photosynthesis rate increases linearly with limiting factor until saturation point, after which another factor becomes limiting.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q75. Detail Arithmetic vs Geometric Growth Rates with mathematical formulas.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Arithmetic (Lt = L0 + rt, linear); Geometric (W1 = W0 ert, exponential S-curve).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q76. Explain Sigmoid Growth Curve phases: Lag, Log, Stationary.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Lag (adaptation/slow), Log (maximum exponential rate), Stationary (nutrient depletion/space limit).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q77. Compare Differentiation, Dedifferentiation, and Redifferentiation with plant examples.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Differentiation (parenchyma to vessel); Dedifferentiation (parenchyma to interfascicular cambium); Redifferentiation (cambium to secondary xylem).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q78. Detail Discovery, Physiological Effects, and Applications of Auxins.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Isolated by Went; causes apical dominance, root initiation, parthenocarpy; 2,4-D used as selective weedicide.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q79. Detail Discovery, Physiological Effects, and Applications of Gibberellins.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Bakanae fungus discovery; causes stem bolting, breaks seed dormancy via α-amylase, increases sugarcane yield.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q80. Detail Discovery, Physiological Effects, and Applications of Cytokinins.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Discovered by Skoog/Miller; promotes cytokinesis, overcomes apical dominance, delays leaf senescence.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q81. Detail Discovery, Physiological Effects, and Applications of Ethylene.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Volatile fruit ripening gas; triple response in seedlings, promotes leaf/flower abscission, Ethephon fruit ripening.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q82. Detail Discovery, Physiological Effects, and Applications of Abscisic Acid (ABA).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Stress hormone; closes stomata during drought, induces seed dormancy, inhibits growth.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q83. Detail sequence of developmental process in a plant cell.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Cell division ➔ Plasmatic growth ➔ Elongation ➔ Maturation/Differentiation ➔ Senescence ➔ Death.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q84. Compare Plant Growth Promoters (Auxin, GA, Cytokinin) and Growth Inhibitors (Ethylene, ABA).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Promoters stimulate division, elongation, and organogenesis; Inhibitors induce dormancy, abscission, and stress tolerance.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #00E5FF;">Q85. Explain role of ATP and NADPH as Assimilatory Power in dark reactions.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); border-left: 3px solid #00E5FF; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #00E5FF;">Detailed Solution:</b><br>
      Light reaction generates ATP (energy) and NADPH (reducing power) required to reduce CO2 into Glucose in Calvin cycle.
    </div>
  </div>
  <!-- SECTION D: LONG ANSWER QUESTIONS (Q86 to Q100) -->
  <div style="background: rgba(0, 229, 255, 0.12); border: 1.5px solid #00E5FF; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION D: Long Answer Questions (Q86 to Q100)</h2>
    <p style="color: #00E5FF; margin: 0; font-size: 14px;">15 Advanced Conceptual & Analytical Questions • 5 Marks Each (Roman Subparts: (i) Theory + (ii) Step Numerical/Physiological Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q86: Cellular Respiration Master Pathways & ATP Yield</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail complete pathway of Aerobic Respiration (Glycolysis ➔ Link Reaction ➔ Krebs Cycle ➔ ETS).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Glycolysis in cytoplasm forms 2 Pyruvate; Link reaction forms Acetyl-CoA; Krebs cycle oxidizes Acetyl-CoA in matrix; ETS in cristae oxidizes NADH/FADH2.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Construct complete net ATP energetics balance sheet for 1 Glucose molecule.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Glycolysis (8 ATP) + Link (6 ATP) + Krebs (24 ATP) = 38 Net ATP.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q87: Mitochondrial ETS & Chemiosmotic Coupling</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail structure and function of 5 ETS complexes in inner mitochondrial membrane.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Complex I (NADH Deh), II (Succinate Deh), III (Cyt bc1), IV (Cyt c Oxidase), V (ATP Synthase F0F1).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Explain Chemiosmotic Hypothesis of ATP synthesis with proton gradient mechanism.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Electron flow pumps H+ into intermembrane space; H+ influx through F0 drives F1 ATP synthesis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q88: Photosynthesis Light Reactions & Z-Scheme</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail Non-Cyclic Photophosphorylation (Z-Scheme) involving PS II (P680) and PS I (P700).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Light excites P680 ➔ e- acceptor ➔ ETC ➔ P700 ➔ Ferredoxin ➔ NADP+ Reductase ➔ NADPH + H+ (Photolysis yields O2).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Compare Non-Cyclic and Cyclic Photophosphorylation in Stroma Lamellae.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Non-cyclic (PS II + PS I, ATP + NADPH + O2); Cyclic (PS I only, ATP only, no photolysis/O2).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q89: C3 Calvin Cycle vs C4 Hatch & Slack Pathway</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail 3 phases of Calvin (C3) Cycle (Carboxylation, Reduction, Regeneration) with ATP/NADPH stoichiometry.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Carboxylation (RuBisCO fixes CO2 to 3-PGA); Reduction (2 ATP + 2 NADPH per CO2); Regeneration (1 ATP per CO2). Total 18 ATP + 12 NADPH per Glucose.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Detail C4 Hatch & Slack Pathway, Kranz Anatomy, and PEPcase CO2 fixation mechanism.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Kranz anatomy; PEPcase fixes CO2 to OAA (4C) in mesophyll ➔ Malate transported to bundle sheath ➔ CO2 released for RuBisCO Calvin cycle (30 ATP total).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q90: Photorespiration (C2 Cycle) & Energetic Waste</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail enzymatic mechanism of Photorespiration involving Chloroplast, Peroxisome, and Mitochondria.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      RuBisCO oxygenase activity forms 3-PGA + Phosphoglycolate (2C) ➔ Peroxisome ➔ Mitochondria releases CO2.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Explain why C4 plants completely avoid Photorespiration, achieving higher photosynthetic efficiency.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Spatial separation: PEPcase in mesophyll pumps high CO2 concentration around RuBisCO in bundle sheath cells.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q91: Factors Affecting Photosynthesis & Blackman's Law</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail Blackman's Law of Limiting Factors with light intensity and CO2 concentration curves.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Rate is limited by the sub-optimal factor. Saturation point at 10% sunlight for light; 450 μL/L for C3, 360 μL/L for C4.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Explain effect of Temperature, Water Stress, and Oxygen concentration on C3 vs C4 plants.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      C4 plants have higher optimum temp (30-45°C) and water efficiency than C3 plants (20-25°C).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q92: Plant Growth Phases & Mathematical Growth Rates</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail 3 phases of growth (Meristematic, Elongation, Maturation) and conditions required for growth.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Meristematic (cell division), Elongation (vacuolation/enlargement), Maturation (wall differentiation).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Compare Arithmetic Growth (Lt = L0 + rt) and Geometric Growth (W1 = W0 ert) with Sigmoid Curve.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Arithmetic (linear rate, root tip); Geometric (exponential S-curve with Lag, Log, Stationary phases).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q93: Differentiation, Dedifferentiation & Redifferentiation Architecture</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail cellular changes during Differentiation (formation of tracheary elements).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Cells lose protoplasm, develop lignified thick secondary walls for water conduction under tension.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Explain Dedifferentiation and Redifferentiation with origin of Vascular Cambium and Cork Cambium.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Parenchyma dedifferentiates into interfascicular cambium/phellogen, which redifferentiates into secondary xylem/phloem/cork.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q94: Auxins & Gibberellins: Discovery & Physiology</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail Discovery, Biosynthesis, Physiological Effects, and Agricultural Uses of Auxins (IAA, NAA, 2,4-D).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Isolated by Went; controls apical dominance, cell elongation, root initiation, weed control (2,4-D).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Detail Discovery, Physiological Effects, and Agricultural Uses of Gibberellins (GA3).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Bakanae fungus discovery; induces stem bolting, breaks seed dormancy, increases sugarcane length.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q95: Cytokinins, Ethylene & ABA: Discovery & Physiology</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail Discovery, Physiological Effects, and Applications of Cytokinins (Kinetin, Zeatin).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Discovered by Skoog/Miller; promotes cell division, lateral shoot growth, delays leaf senescence.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Detail Discovery, Physiological Effects, and Applications of Ethylene and Abscisic Acid (ABA).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Ethylene (fruit ripening gas, Ethephon); ABA (stress hormone, closes stomata, seed dormancy).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q96: Chemiosmotic ATP Synthesis Comparison (Respiration vs Photosynthesis)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Compare Chemiosmosis in Mitochondrial Cristae (ETS) vs Chloroplast Thylakoids (Photophosphorylation).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Mitochondria: H+ pumped outward to intermembrane space; Chloroplast: H+ pumped inward to thylakoid lumen. Both drive F0F1 ATP Synthase.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Calculate total ATP produced when 1 molecule of Glucose undergoes aerobic vs anaerobic respiration.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Aerobic = 38 ATP; Anaerobic = 2 ATP.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q97: Photosynthetic Pigments & Action Spectra Audit</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail chemical nature and absorption spectra of Chlorophyll a, b, Xanthophylls, and Carotenoids.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Chlorophyll a (primary P680/P700 reaction center); accessory pigments absorb blue/violet light and prevent photo-oxidation.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Explain Engelmann's experiment matching Absorption Spectrum with Action Spectrum.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      Blue and red light wavelengths drive maximum O2 production and bacterial accumulation in <i>Cladophora</i>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q98: Hatch & Slack Pathway Spatial Architecture</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Detail cell-to-cell transport of organic acids between Mesophyll and Bundle Sheath cells in C4 plants.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      PEPcase fixes CO2 to OAA ➔ Malate transported via plasmodesmata to Bundle Sheath ➔ Decarboxylated to Pyruvate + CO2.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Explain why C4 plants have higher water-use efficiency and heat tolerance than C3 plants.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      PEPcase operates efficiently at low CO2; stomata remain partially closed, reducing transpiration water loss.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q99: PGR Synergism & Antagonism in Plant Development</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Explain Apical Dominance interplay between Auxin (inhibitor) and Cytokinin (promoter).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Auxin at apex suppresses lateral buds; Cytokinin applied to lateral buds overrides auxin and promotes branching.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Explain Seed Dormancy interplay between Abscisic Acid (dormancy inducer) and Gibberellin (germination promoter).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      ABA maintains dormancy during stress; GA breaks dormancy by inducing α-amylase for starch mobilization.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #00E5FF;">Q100: Master Synthesis: Unified Plant Physiology Framework</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(i) Synthesize complete unified plant physiology framework connecting Respiration (Energy Release) ⟶ Photosynthesis (Energy Capture) ⟶ Growth &amp; Development (PGR Regulation).</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 8px 12px; border-left: 3px solid #00E5FF; margin-bottom: 10px;">
      Photosynthesis captures solar energy into Glucose (Assimilatory power); Respiration oxidizes Glucose to ATP; PGRs channel ATP energy into cell division, elongation, and organ development.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #00E5FF;">(ii) Write diagnostic physiological key comparing C3 Plant, C4 Plant, CAM Plant, and Photorespiration.</b></p>
    <div style="background: rgba(0, 229, 255, 0.05); padding: 10px 12px; border-left: 3px solid #00E5FF;">
      1. RuBisCO primary + 18 ATP = C3. 2. PEPcase primary + Kranz anatomy + 30 ATP = C4. 3. Night CO2 fixation = CAM. 4. O2 binding RuBisCO = Photorespiration.
    </div>
  </div>
</div>
`;
