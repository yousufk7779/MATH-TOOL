// Class 11 Botany Chapter 4: Plant Physiology
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Botany | Class: 11 | Code: c11-bot-4

export const c11Bot4HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.12), rgba(0, 151, 167, 0.12)); border: 1.5px solid rgba(0, 229, 255, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #00E5FF; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 4: Plant Physiology</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Glycolysis (EMP Pathway):</b> Sequence of 10 cytosolic enzymatic reactions converting 1 molecule of glucose into 2 molecules of pyruvic acid with a net gain of 2 ATP and 2 NADH.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Chemiosmotic Hypothesis:</b> Peter Mitchell's (1961) mechanism showing that ATP synthesis in mitochondria and chloroplasts is driven by an electrochemical proton gradient across membranes.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Photophosphorylation:</b> The light-driven synthesis of ATP from ADP and inorganic phosphate in chloroplast thylakoids (Cyclic vs Non-Cyclic Z-scheme).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Kranz Anatomy:</b> Specialized leaf anatomy in C<sub>4</sub> plants characterized by large bundle sheath cells containing agranal chloroplasts surrounded by mesophyll cells.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Photorespiration (C<sub>2</sub> Cycle):</b> A wasteful light-induced respiratory process occurring in C<sub>3</sub> plants when RuBisCO binds O<sub>2</sub> instead of CO<sub>2</sub>, releasing CO<sub>2</sub> with zero ATP production.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Plant Growth Regulators (PGRs):</b> Small organic signaling molecules (Auxins, Gibberellins, Cytokinins, Ethylene, Abscisic Acid) that regulate growth, differentiation, and stress responses.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    Respiration: Cellular respiration; Glycolysis, Kreb’s cycle and Electron transport system (along with ATP energetics); Chemiosmotic hypothesis; Aerobic and Anaerobic respirations; Amphibolic pathways; Respiratory quotient
  </h2>

  <!-- PRESERVED IMAGE 1 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMDBFNUZGIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkNlbGx1bGFyIFJlc3BpcmF0aW9uIFBhdGh3YXlzICZhbXA7IEFUUCBFbmVyZ2V0aWNzPC90ZXh0PgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gMS4gR2x5Y29seXNpcyAoQ3l0b3BsYXNtKSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyNDYiIGhlaWdodD0iNDMwIiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDgpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTIzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEuIEdMWUNPTFlTSVMgKEN5dG9wbGFzbSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTVGRiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIyMCIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgU3Vic3RyYXRlIEJyZWFrZG93bjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkdsdWNvc2UgKDZDKSDinpQgMiBQeXJ1dmF0ZSAoM0MpPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEyMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+QW5hZXJvYmljIC8gRU1QIFBhdGh3YXk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4xMCBFbnp5bWUtY2F0YWx5emVkIHN0ZXBzPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEwIiB5PSIxNzgiIHdpZHRoPSIyMjYiIGhlaWdodD0iMTE4IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgQVRQICZhbXA7IE5BREggWWllbGQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjIyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4yIEFUUCBjb25zdW1lZCBpbml0aWFsbHk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj40IEFUUCBmb3JtZWQgZGlyZWN0bHk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5OZXQ6IDIgQVRQICsgMiBOQURIPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjI4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iIzY5RjBBRSI+VG90YWwgWWllbGQgPSA2IHRvIDggQVRQPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEwIiB5PSIzMTAiIHdpZHRoPSIyMjYiIGhlaWdodD0iMTA4IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIj7igKIgRmVybWVudGF0aW9uIE9wdGlvbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIzNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkxhY3RpYyBBY2lkIC8gQWxjb2hvbGljPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+SW4gYWJzZW5jZSBvZiBPeHlnZW48L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMzk0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5OZXQgWWllbGQgPSAyIEFUUCBvbmx5PC90ZXh0PgoKICAgIDwhLS0gMi4gS3JlYnMgQ3ljbGUgKE1pdG9jaG9uZHJpYWwgTWF0cml4KSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2NywgMCkiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQ2IiBoZWlnaHQ9IjQzMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDI1NSwxNDUsMCwwLjA4KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHRleHQgeD0iMTIzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIEtSRUJTIENZQ0xFIChNYXRyaXgpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQxODAiPuKAoiBMaW5rIFJlYWN0aW9uPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5QeXJ1dmF0ZSDinpQgQWNldHlsLUNvQSAoMkMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5QeXJ1dmF0ZSBEZWh5ZHJvZ2VuYXNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5ZaWVsZHM6IDIgTkFESCArIDIgQ08yPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjE3OCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSIxMTgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIFRDQSBDeWNsZSBTZXF1ZW5jZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjIyMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+T0FBICg0QykgKyBBY2V0eWwtQ29BPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj7inpQgQ2l0cmF0ZSAoNkMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5EZWNhcmJveHlsYXRpb25zPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj5BbXBoaWJvbGljIHBhdGh3YXk8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMCIgeT0iMzEwIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj7igKIgWWllbGQgcGVyIEdsdWNvc2U8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPjYgTkFESCAoMTggQVRQIGVxdWl2KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+MiBGQURIMiAoNCBBVFAgZXF1aXYpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMzk0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj4yIEdUUC9BVFAgZGlyZWN0PC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gMy4gRVRTICYgQ2hlbWlvc21vc2lzIChJbm5lciBNZW1icmFuZSkgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzQsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjI0NiIgaGVpZ2h0PSI0MzAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4wOCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjEyMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zLiBFVFMgJmFtcDsgQ0hFTUlPU01PU0lTPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjU1IiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiBFbGVjdHJvbiBUcmFuc3BvcnQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkNvbXBsZXggSSB0byBJViBpbiBDcmlzdGFlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5VYmlxdWlub25lICZhbXA7IEN5dCBjPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5GaW5hbCBhY2NlcHRvcjogT3h5Z2VuPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTAiIHk9IjE3OCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSIxMTgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIFByb3RvbiBHcmFkaWVudDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjIyMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+SCsgcHVtcGVkIHRvIGludGVybWVtYnJhbmU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIyNDIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPkhpZ2ggcHJvdG9uIGdyYWRpZW50PC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5Ecml2ZXMgQVRQIFN5bnRoYXNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzY5RjBBRSI+MSBOQURIPTMgQVRQfDEgRkFESDI9MiBBVFA8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMCIgeT0iMzEwIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjEwOCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgTmV0IEFUUCBCYWxhbmNlPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMCIgeT0iMzU0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5HbHljb2x5c2lzOiA4IEFUUDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAiIHk9IjM3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+TGluayArIEtyZWJzOiAzMCBBVFA8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPlRvdGFsIE5ldCA9IDM2IHRvIDM4IEFUUDwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFlcm9iaWMgUmVzcGlyYXRpb246IDEgR2x1Y29zZSArIDYgTzIg4p6UIDYgQ08yICsgNiBIMk8gKyAzOCBBVFAgKFJlc3BpcmF0b3J5IFF1b3RpZW50ID0gMS4wKTwvdGV4dD4KICA8L2c+Cjwvc3ZnPg==" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 229, 255, 0.4); border: 2px solid #00E5FF;" alt="3D Cellular Respiration Architecture" /><p style="color: #00E5FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.1: 3D Cellular Respiration Master Architecture (Glycolysis, Link Reaction, Krebs Cycle &amp; ETS ATP Energetics)</p></div>

  <p>
    Cellular respiration is an enzyme-mediated catabolic exergonic process in which energy-rich organic substrates (primarily glucose) are oxidized to release metabolic energy trapped as ATP (Adenosine Triphosphate), the universal energy currency of living cells.
  </p>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Cellular Respiration Overview, Aerobic vs Anaerobic Respiration &amp; Glycolysis (EMP Pathway)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Aerobic vs Anaerobic Respiration:</b>
        <br/>- <i>Aerobic:</i> Complete oxidation of glucose in the presence of O<sub>2</sub> yielding CO<sub>2</sub>, H<sub>2</sub>O, and <b>36-38 ATP</b>.
        <br/>- <i>Anaerobic (Fermentation):</i> Incomplete oxidation in absence of O<sub>2</sub>; alcoholic fermentation in yeast yields Ethanol + CO<sub>2</sub> and <b>2 ATP</b>; lactic acid fermentation in muscle/bacteria yields Lactic acid and 2 ATP.
      </li>
      <li><b style="color: #00E5FF;">Glycolysis (EMP Pathway - Embden, Meyerhof, Parnas, 1930):</b>
        <br/>Occurs in the <b>Cytosol</b>; independent of oxygen; universal to all living cells:
        <br/>1. Glucose &rarr; Glucose-6-phosphate (Hexokinase, uses 1 ATP).
        <br/>2. Fructose-6-phosphate &rarr; Fructose-1,6-bisphosphate (Phosphofructokinase / PFK - <b>Pacemaker enzyme</b>, uses 1 ATP).
        <br/>3. Cleavage into Glyceraldehyde-3-phosphate (PGAL) and DHAP.
        <br/>4. Oxidation: 2 PGAL &rarr; 2 1,3-Bisphosphoglycerate + <b>2 NADH + 2 H<sup>+</sup></b>.
        <br/>5. Substrate-level phosphorylation yields <b>4 ATP</b>.
        <br/>&bull; Net Yield: <b>2 Pyruvate (3C) + 2 ATP (net) + 2 NADH</b>.
      </li>
    </ul>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Krebs Cycle (Citric Acid Cycle / TCA Cycle) &amp; Link Reaction</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #00E5FF;">1. Link Reaction (Gate Reaction):</b> Pyruvate enters mitochondrial matrix and undergoes oxidative decarboxylation catalyzed by <i>Pyruvate Dehydrogenase complex</i>:
      <br/><b>2 Pyruvate + 2 CoA + 2 NAD<sup>+</sup> &rarr; 2 Acetyl-CoA (2C) + 2 CO<sub>2</sub> + 2 NADH + 2 H<sup>+</sup></b>.
      <br/><b style="color: #00E5FF;">2. Krebs Cycle (Sir Hans Krebs, 1937):</b>
      <br/>Acetyl-CoA (2C) condenses with Oxaloacetate (OAA, 4C) to form Citrate (6C). Through a cyclic series of oxidations in the mitochondrial matrix:
      <br/>- 2 Decarboxylations release 2 CO<sub>2</sub> per turn (4 CO<sub>2</sub> per glucose).
      <br/>- 3 Dehydrogenations reduce NAD<sup>+</sup> &rarr; <b>3 NADH</b> (at Isocitrate, &alpha;-Ketoglutarate, and Malate steps).
      <br/>- 1 Dehydrogenation reduces FAD &rarr; <b>1 FADH<sub>2</sub></b> (at Succinate to Fumarate step via Succinate Dehydrogenase).
      <br/>- 1 Substrate-level phosphorylation yields <b>1 GTP / ATP</b> (at Succinyl-CoA to Succinate).
      <br/>&bull; Total per Glucose (2 turns): <b>6 NADH + 2 FADH<sub>2</sub> + 2 ATP + 4 CO<sub>2</sub></b>.
    </p>
  </div>

  <!-- NEW STANDALONE SVG CARD FOR MITOCHONDRIAL ETS & CHEMIOSMOSIS -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#00E5FF" font-size="14" font-weight="bold" text-anchor="middle">
        Mitochondrial ETS Complexes &amp; Chemiosmotic ATP Synthesis
      </text>

      <!-- Complexes I to IV -->
      <g transform="translate(25, 45)">
        <rect width="450" height="105" rx="6" fill="rgba(38, 198, 218, 0.12)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="225" y="18" fill="#26C6DA" font-size="11" font-weight="bold" text-anchor="middle">
          Inner Mitochondrial Membrane Electron Transport Chain (Complexes I - IV)
        </text>

        <!-- Complex I -->
        <g transform="translate(10, 26)">
          <rect width="98" height="68" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="49" y="16" fill="#00E5FF" font-size="9" font-weight="bold" text-anchor="middle">Complex I</text>
          <text x="49" y="32" fill="#FFFFFF" font-size="8" text-anchor="middle">NADH Dehydrogenase</text>
          <text x="49" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">FMN &amp; Fe-S centers</text>
          <text x="49" y="60" fill="#69F0AE" font-size="8" font-weight="bold" text-anchor="middle">Pumps 4 H<sup>+</sup></text>
        </g>

        <!-- Complex II -->
        <g transform="translate(118, 26)">
          <rect width="98" height="68" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="49" y="16" fill="#00E5FF" font-size="9" font-weight="bold" text-anchor="middle">Complex II</text>
          <text x="49" y="32" fill="#FFFFFF" font-size="8" text-anchor="middle">Succinate Dehydr.</text>
          <text x="49" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">FAD &amp; Fe-S to UQ</text>
          <text x="49" y="60" fill="#FF8A65" font-size="8" font-weight="bold" text-anchor="middle">No H<sup>+</sup> pumped</text>
        </g>

        <!-- Complex III -->
        <g transform="translate(226, 26)">
          <rect width="98" height="68" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="49" y="16" fill="#00E5FF" font-size="9" font-weight="bold" text-anchor="middle">Complex III</text>
          <text x="49" y="32" fill="#FFFFFF" font-size="8" text-anchor="middle">Cytochrome bc<sub>1</sub></text>
          <text x="49" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Transfers to Cyt c</text>
          <text x="49" y="60" fill="#69F0AE" font-size="8" font-weight="bold" text-anchor="middle">Pumps 4 H<sup>+</sup></text>
        </g>

        <!-- Complex IV -->
        <g transform="translate(334, 26)">
          <rect width="105" height="68" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="52" y="16" fill="#00E5FF" font-size="9" font-weight="bold" text-anchor="middle">Complex IV</text>
          <text x="52" y="32" fill="#FFFFFF" font-size="8" text-anchor="middle">Cytochrome c Oxidase</text>
          <text x="52" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Cyt a, a<sub>3</sub> + Cu<sub>A</sub>, Cu<sub>B</sub></text>
          <text x="52" y="60" fill="#69F0AE" font-size="8" font-weight="bold" text-anchor="middle">&frac12; O<sub>2</sub> &rarr; H<sub>2</sub>O (2 H<sup>+</sup>)</text>
        </g>
      </g>

      <!-- Complex V: ATP Synthase -->
      <g transform="translate(25, 160)">
        <rect width="450" height="105" rx="6" fill="rgba(0, 229, 255, 0.12)" stroke="#00E5FF" stroke-width="1.2"/>
        <text x="225" y="18" fill="#00E5FF" font-size="11" font-weight="bold" text-anchor="middle">
          Complex V: F<sub>0</sub>-F<sub>1</sub> ATP Synthase (Chemiosmosis)
        </text>
        <text x="225" y="38" fill="#FFFFFF" font-size="9.5" text-anchor="middle">
          Proton Motive Force: High [H<sup>+</sup>] in Intermembrane Space &rarr; Matrix
        </text>
        <text x="120" y="60" fill="#CBD5E1" font-size="8.5" text-anchor="middle">
          &bull; <b>F<sub>0</sub> Channel:</b> Transmembrane proton channel
        </text>
        <text x="330" y="60" fill="#CBD5E1" font-size="8.5" text-anchor="middle">
          &bull; <b>F<sub>1</sub> Headpiece:</b> Rotational catalytic subunit
        </text>
        <text x="225" y="82" fill="#69F0AE" font-size="10" font-weight="bold" text-anchor="middle">
          Inflow of 2 H<sup>+</sup> down electrochemical gradient drives: ADP + Pi &rarr; ATP
        </text>
        <text x="225" y="96" fill="#FFE082" font-size="8.5" text-anchor="middle">
          1 NADH yields ~3 ATP (2.5 ATP) &bull; 1 FADH<sub>2</sub> yields ~2 ATP (1.5 ATP)
        </text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 4.5: Mitochondrial Electron Transport System (Complexes I-IV) &amp; Chemiosmotic Proton Gradient / F<sub>0</sub>-F<sub>1</sub> ATP Synthase Mechanics
  </div>
</div>


  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iii) Electron Transport System (ETS), Oxidative Phosphorylation &amp; Chemiosmotic Hypothesis</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Located on the <b>Inner Mitochondrial Membrane</b>:
      <br/>&bull; <b style="color: #00E5FF;">Complex I (NADH Dehydrogenase):</b> Transfers electrons from NADH to Ubiquinone (UQ), pumping 4 H<sup>+</sup> into intermembrane space.
      <br/>&bull; <b style="color: #00E5FF;">Complex II (Succinate Dehydrogenase):</b> Transfers electrons from FADH<sub>2</sub> to UQ (no protons pumped).
      <br/>&bull; <b>Complex III (Cytochrome bc<sub>1</sub>):</b> Transfers electrons from ubiquinol to mobile peripheral protein <b>Cytochrome c</b>, pumping 4 H<sup>+</sup>.
      <br/>&bull; <b style="color: #00E5FF;">Complex IV (Cytochrome c Oxidase):</b> Contains Cytochrome a, a<sub>3</sub> and two copper centers (Cu<sub>A</sub>, Cu<sub>B</sub>); delivers electrons to the terminal electron acceptor <b>Oxygen (O<sub>2</sub>)</b> to form water, pumping 2 H<sup>+</sup>.
      <br/>&bull; <b style="color: #00E5FF;">Chemiosmotic ATP Synthesis:</b> Pumping protons creates a high electrochemical proton gradient in the intermembrane space. Protons flow back into the matrix down their gradient through <b>Complex V (F<sub>0</sub>-F<sub>1</sub> ATP Synthase)</b>: 2 H<sup>+</sup> through F<sub>0</sub> channel activates catalytic rotation of F<sub>1</sub> headpiece to synthesize 1 ATP.
    </p>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iv) ATP Energetics, Amphibolic Pathway &amp; Respiratory Quotient (RQ)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Theoretical ATP Yield per Glucose:</b> 10 NADH (&times;3 = 30 ATP) + 2 FADH<sub>2</sub> (&times;2 = 4 ATP) + 4 Substrate ATP = <b>38 ATP</b> (or 36 ATP via glycerol-phosphate shuttle in some eukaryotic cells).</li>
      <li><b style="color: #00E5FF;">Amphibolic Pathway:</b> Respiration is not purely catabolic; its intermediates serve as precursors for anabolic syntheses: Acetyl-CoA is drawn off to synthesize fatty acids/terpenes; Succinyl-CoA synthesizes chlorophyll and cytochromes; &alpha;-Ketoglutarate and OAA synthesize amino acids. Hence, respiration is truly <b>Amphibolic</b> (both catabolic and anabolic).</li>
      <li><b style="color: #00E5FF;">Respiratory Quotient (RQ = Volume of CO<sub>2</sub> evolved / Volume of O<sub>2</sub> consumed):</b>
        <br/>- Carbohydrates (Glucose): <b>RQ = 1.0</b> (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O).
        <br/>- Fats (Tripalmitin): <b>RQ = 0.7</b> (2 C<sub>51</sub>H<sub>98</sub>O<sub>6</sub> + 145 O<sub>2</sub> &rarr; 102 CO<sub>2</sub> + 98 H<sub>2</sub>O; 102/145 &approx; 0.7).
        <br/>- Proteins: <b>RQ &approx; 0.9</b>.
        <br/>- Organic Acids (Malic acid): <b>RQ &gt; 1.0 (1.33)</b>.
        <br/>- Anaerobic Respiration: <b>RQ = &infin; (Infinity)</b> (CO<sub>2</sub> evolved without O<sub>2</sub> consumption).
      </li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    Photosynthesis: Historical background; Site of Photosynthesis; Photosynthetic pigments; Mechanism of Photosynthesis – Light dependent phase (Light reaction), Photosystems; Cyclic and non-cyclic photophosphorylations; Light independent (biosynthetic) phase – Calvin (C3) cycle and Hatch &amp; Slack (C4) cycle; Factors affecting photosynthesis; Photorespiration.
  </h2>

  <!-- PRESERVED IMAGE 2 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QaG90b3N5bnRoZXNpczogTGlnaHQtRGVwZW5kZW50IFJlYWN0aW9ucyAmYW1wOyBaLVNjaGVtZTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIE5vbi1DeWNsaWMgUGhvdG9waG9zcGhvcnlsYXRpb24gKFotU2NoZW1lKSAtLT4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEuIE5vbi1DeWNsaWMgWi1TY2hlbWUgKFBTIElJICsgUFMgSSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj5LZXkgTWVjaGFuaXNtIFN0ZXBzOjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9Ijk4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5QaG90b3N5c3RlbSBJSSAoUDY4MCk6PC90c3Bhbj4gQWJzb3JicyA2ODBubSBsaWdodDwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgRXhjaXRlZCBlLSB0cmFuc2ZlcnJlZCB0byBQaGVvcGh5dGluIGFjY2VwdG9yLjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+V2F0ZXIgU3BsaXR0aW5nIChQaG90b2x5c2lzKTo8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgMiBIMk8g4p6UIDQgSCsgKyBPMiArIDQgZS0gKFJlcGxhY2VzIFBTIElJIGUtKS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIxOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQxODAiPkVsZWN0cm9uIFRyYW5zcG9ydCBDaGFpbjo8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgUGxhc3RvcXVpbm9uZSDinpQgQ3l0IGI2ZiDinpQgUGxhc3RvY3lhbmluIOKelCBQUyBJLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgRHJpdmVzIEFUUCBzeW50aGVzaXMgdmlhIGNoZW1pb3Ntb3Npcy48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIyNjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPlBob3Rvc3lzdGVtIEkgKFA3MDApOjwvdHNwYW4+IEFic29yYnMgNzAwbm0gbGlnaHQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjg0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIGUtIHRyYW5zZmVycmVkIHRvIEZlcnJlZG94aW4g4p6UIE5BRFArIFJlZHVjdGFzZS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIzMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgQXNzaW1pbGF0b3J5IFBvd2VyIFlpZWxkOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPiAgUHJvZHVjZXMgQk9USCBBVFAgYW5kIE5BRFBIICsgSCs8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMzUyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIHdpdGggb3h5Z2VuIGV2b2x1dGlvbiAoTzIgcmVsZWFzZSkhPC90ZXh0PgoKICAgIDwhLS0gMi4gQ3ljbGljIFBob3RvcGhvc3Bob3J5bGF0aW9uIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgwRDhGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gQ3ljbGljIFBob3RvcGhvc3Bob3J5bGF0aW9uIChQUyBJIE9ubHkpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSI3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiPktleSBNZWNoYW5pc20gU3RlcHM6PC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9Ijk4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5PY2N1cnMgaW4gU3Ryb21hIExhbWVsbGFlOjwvdHNwYW4+PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIExhY2tzIFBTIElJIGFuZCBOQURQIFJlZHVjdGFzZSBlbnp5bWUuPC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+Q3ljbGljIEVsZWN0cm9uIExvb3A6PC90c3Bhbj48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAgUDcwMCAoUFMgSSkg4p6UIFByaW1hcnkgQWNjZXB0b3Ig4p6UIEZlcnJlZG94aW48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxODgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNEREQiPiAg4p6UIEN5dCBiNmYg4p6UIFBsYXN0b2N5YW5pbiDinpQgUmV0dXJucyB0byBQNzAwITwvdGV4dD4KICAgICAgCiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM2OUYwQUUiPlByb3RvbiBHcmFkaWVudCAmYW1wOyBBVFAgU3ludGhlc2lzOjwvdHNwYW4+PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjM2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIFByb3RvbnMgcHVtcGVkIHRvIFRoeWxha29pZCBsdW1lbiBnZW5lcmF0ZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjI1NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBncmFkaWVudCBkcml2aW5nIEFUUCBTeW50aGFzZSAoRjBGMSkuPC90ZXh0PgogICAgICAKICAgICAgPHRleHQgeD0iMjUiIHk9IjI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPuKAoiBLZXkgRGlmZmVyZW5jZXMgZnJvbSBOb24tQ3ljbGljOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjMwNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICAxLiBOTyBQaG90b2x5c2lzIG9mIHdhdGVyIChOTyBPMiBldm9sdmVkISkuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMzI2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIDIuIFByb2R1Y2VzIEFUUCBPTkxZIChOTyBOQURQSCBmb3JtZWQpLjwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRoeWxha29pZCBNZW1icmFuZTogTGlnaHQgRW5lcmd5IOKelCBBVFAgJmFtcDsgTkFEUEggKEFzc2ltaWxhdG9yeSBQb3dlciBmb3IgRGFyayBSZWFjdGlvbnMpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 229, 255, 0.4); border: 2px solid #00E5FF;" alt="3D Photosynthesis Z-Scheme" /><p style="color: #00E5FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.2: 3D Photosynthesis Architecture (Z-Scheme Non-Cyclic &amp; Cyclic Photophosphorylation &amp; Photolysis)</p></div>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Historical Background, Site of Photosynthesis &amp; Photosynthetic Pigments</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Pioneers:</b> Joseph Priestley (1770, bell jar experiment showing plants restore air); Jan Ingenhousz (1779, sunlight is essential); Julius von Sachs (1854, glucose is produced and stored as starch); T.W. Engelmann (1888, first action spectrum of photosynthesis using <i>Cladophora</i> and aerobic bacteria); <b>Cornelius van Niel (1931)</b> demonstrated that O<sub>2</sub> evolved comes from <b>water (H<sub>2</sub>O)</b>, not from CO<sub>2</sub>, later confirmed by Ruben and Kamen (1941) using radioisotope <sup>18</sup>O.</li>
      <li><b style="color: #00E5FF;">Chloroplast Architecture &amp; Pigments:</b>
        <br/>- Grana thylakoids (site of Light Reactions) + Stroma (site of Dark Reactions / Calvin cycle).
        <br/>- <b style="color: #00E5FF;">Chlorophyll a:</b> Bright/blue-green primary reaction center pigment.
        <br/>- <b style="color: #00E5FF;">Accessory Pigments:</b> Chlorophyll b (yellow-green), Xanthophylls (yellow), Carotenoids (yellow-orange); protect chlorophyll a from <b>photo-oxidation</b> and broaden the absorption spectrum.
      </li>
    </ul>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Mechanism of Photosynthesis: Light-Dependent Phase, Photosystems (PS I &amp; PS II), Cyclic &amp; Non-Cyclic Photophosphorylation</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      1. <b style="color: #00E5FF;">Non-Cyclic Photophosphorylation (Z-Scheme):</b>
        <br/>&bull; <b style="color: #00E5FF;">Photolysis of Water (Hill Reaction):</b> 2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + 4e<sup>-</sup> + O<sub>2</sub> (catalyzed by Oxygen Evolving Complex requiring Mn<sup>2+</sup> and Cl<sup>-</sup> on inner lumen face of PS II).
        <br/>&bull; PS II (P680) absorbs 680 nm light; excited electrons pass to Pheophytin &rarr; Plastoquinone (PQ) &rarr; Cytochrome b<sub>6</sub>f complex (pumping H<sup>+</sup> into thylakoid lumen) &rarr; Plastocyanin (PC) &rarr; PS I (P700).
        <br/>&bull; PS I absorbs 700 nm light; excited electrons pass to Ferredoxin &rarr; Ferredoxin-NADP<sup>+</sup> Reductase (FNR) to form <b>NADPH</b> on stroma side.
        <br/>&bull; Produces both <b>ATP and NADPH</b> (Assimilatory Power) along with O<sub>2</sub>.
      <br/>2. <b style="color: #00E5FF;">Cyclic Photophosphorylation:</b>
        <br/>Occurs in stroma lamellae (which lack PS II and NADP reductase). Excited electrons from PS I (P700) circulate back through Cytochrome b<sub>6</sub>f complex, generating <b>ATP only (no NADPH, no O<sub>2</sub>)</b>.
    </p>
  </div>

  <!-- PRESERVED IMAGE 3 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMDBFNUZGIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkRhcmsgUmVhY3Rpb25zOiBDMyBDYWx2aW4gQ3ljbGUgdnMgQzQgSGF0Y2ggJmFtcDsgU2xhY2sgUGF0aHdheTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIExlZnQgQm94OiBDMyBDYWx2aW4gQ3ljbGUgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQzNSIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjA2KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBDMyBDYWx2aW4gQ3ljbGUgKFN0cm9tYSk8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjM3MiIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4zIE1hc3RlciBQaGFzZXM6PC90ZXh0PgogICAgCiAgICA8dGV4dCB4PSIyNSIgeT0iOTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4xLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+Q2FyYm94eWxhdGlvbjo8L3RzcGFuPiBDTzIgKyBSdUJQICg1Qykg4p6UIDMtUEdBPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjExOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgQ2F0YWx5emVkIGJ5IFJ1QmlzQ08gZW56eW1lLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNBQUEiPiAgIEZpcnN0IHN0YWJsZSBwcm9kdWN0ID0gMy1QR0EgKDNDKS48L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjI1IiB5PSIxNjYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4yLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+UmVkdWN0aW9uOjwvdHNwYW4+IDIgQVRQICsgMiBOQURQSCBwZXIgQ08yPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjE4NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgRm9ybXMgVHJpb3NlIFBob3NwaGF0ZSAvIEdsdWNvc2UuPC90ZXh0PgoKICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iIzgwRDhGRiI+UmVnZW5lcmF0aW9uOjwvdHNwYW4+IDEgQVRQIHBlciBDTzI8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBSZWdlbmVyYXRlcyBSdUJQIGFjY2VwdG9yIG1vbGVjdWxlLjwvdGV4dD4KCiAgICA8dGV4dCB4PSIyNSIgeT0iMjYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIENvc3QgcGVyIEdsdWNvc2UgKDYgQ08yKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjg0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIFJlcXVpcmVzIDE4IEFUUCArIDEyIE5BRFBILjwvdGV4dD4KICAgIAogICAgPHRleHQgeD0iMjUiIHk9IjMxMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPuKAoiBQaG90b3Jlc3BpcmF0aW9uIFJpc2s6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjMzNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBSdUJpc0NPIG94eWdlbmFzZSBhY3Rpdml0eSB3YXN0ZXMgZW5lcmd5PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjM1NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0RERCI+ICBpbiBoaWdoIE8yIGFuZCBoaWdoIHRlbXBlcmF0dXJlITwvdGV4dD4KCiAgICA8IS0tIFJpZ2h0IEJveDogQzQgSGF0Y2ggJiBTbGFjayBQYXRod2F5IC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDM1IiByeD0iMTQiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMDYpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgwRDhGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gQzQgSGF0Y2ggJmFtcDsgU2xhY2sgUGF0aHdheTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI0OCIgd2lkdGg9IjM1NiIgaGVpZ2h0PSIzNzIiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyNSIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj5LcmFueiBBbmF0b215ICZhbXA7IFNwYXRpYWwgU2VwYXJhdGlvbjo8L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iOTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPk1lc29waHlsbCBDZWxsczo8L3RzcGFuPiBQcmltYXJ5IENPMiBGaXhhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjExOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgUEVQICgzQykgKyBDTzIg4p6UIE9BQSAoNEMgT3hhbG9hY2V0YXRlKS48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNBQUEiPiAgIFBFUGNhc2UgaGFzIE5PIG94eWdlbmFzZSBhY3Rpdml0eSE8L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iMTY2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5CdW5kbGUgU2hlYXRoIENlbGxzOjwvdHNwYW4+IFNlY29uZGFyeSBGaXhhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjE4NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0FBQSI+ICAgTWFsYXRlIHRyYW5zcG9ydGVkIOKelCBEZWNhcmJveHlsYXRlZCB0byBDTzIuPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjA2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBIaWdoIENPMiBzdXBwcmVzc2VzIFBob3RvcmVzcGlyYXRpb24hPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjI2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjQUFBIj4gICBSdUJpc0NPIGZpeGVzIENPMiBpbiBDMyBjeWNsZS48L3RleHQ+CgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjU0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+4oCiIENvc3QgcGVyIEdsdWNvc2UgKDYgQ08yKTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSIyNzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPiAgUmVxdWlyZXMgMzAgQVRQICsgMTIgTkFEUEguPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMjk2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjNjlGMEFFIj4gIChIaWdoZXIgZWZmaWNpZW5jeSBhdCBoaWdoIHRlbXAhKS48L3RleHQ+CiAgICAgIAogICAgICA8dGV4dCB4PSIyNSIgeT0iMzI0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjREREIj4gIEV4YW1wbGVzOiBNYWl6ZSwgU3VnYXJjYW5lLCBTb3JnaHVtLjwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQm90dG9tIEJhciAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTE1KSI+CiAgICA8cmVjdCB3aWR0aD0iNzgwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMjksMjU1LDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM0IFBsYW50cyBhdm9pZCBQaG90b3Jlc3BpcmF0aW9uIHZpYSBLcmFueiBBbmF0b215ICZhbXA7IFBFUGNhc2Ug4p6UIEhpZ2hlciB5aWVsZCBhdCBoaWdoIHRlbXAhPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 229, 255, 0.4); border: 2px solid #00E5FF;" alt="3D C3 vs C4 Pathways" /><p style="color: #00E5FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.3: 3D C3 Calvin Cycle vs C4 Hatch &amp; Slack Pathway Architecture</p></div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iii) Light-Independent Phase: Calvin (C3) Cycle, Hatch &amp; Slack (C4) Cycle &amp; Photorespiration</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Calvin Cycle (C<sub>3</sub> Pathway - Melvin Calvin, Nobel Prize 1961):</b>
        <br/>Occurs in stroma of all photosynthetic plants; 3 stages:
        <br/>1. <i>Carboxylation:</i> Primary CO<sub>2</sub> acceptor <b>RuBP (Ribulose-1,5-bisphosphate, 5C)</b> combines with CO<sub>2</sub> via <b>RuBisCO</b> to yield 2 molecules of <b>3-PGA (3-Phosphoglycerate, 3C)</b>.
        <br/>2. <i>Reduction:</i> Uses 2 ATP + 2 NADPH per CO<sub>2</sub> to form Triose phosphate (G3P).
        <br/>3. <i>Regeneration:</i> Uses 1 ATP to regenerate RuBP.
        <br/>&bull; Net for 1 Glucose (6 CO<sub>2</sub>): <b>6 CO<sub>2</sub> + 18 ATP + 12 NADPH &rarr; 1 Glucose + 18 ADP + 12 NADP<sup>+</sup></b>.
      </li>
      <li><b style="color: #00E5FF;">Hatch &amp; Slack Pathway (C<sub>4</sub> Pathway):</b>
        <br/>Adapted to tropical high-temperature regimes (Maize, Sugarcane, Sorghum); exhibits <b>Kranz Anatomy</b>:
        <br/>- Mesophyll cells: Primary CO<sub>2</sub> acceptor is <b>PEP (Phosphoenolpyruvate, 3C)</b> catalyzed by <b>PEPcase</b> (lacks RuBisCO; immune to O<sub>2</sub>). Forms 4C <b>Oxaloacetate (OAA)</b>, reduced to Malate.
        <br/>- Bundle Sheath cells: Malate transported in and decarboxylated to release high concentrations of CO<sub>2</sub> around RuBisCO, ensuring 100% efficiency of the Calvin cycle.
      </li>
    </ul>
  </div>

  <!-- NEW STANDALONE SVG CARD FOR PHOTORESPIRATION & BLACKMAN'S LAW -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#00E5FF" font-size="14" font-weight="bold" text-anchor="middle">
        Photorespiration (C<sub>2</sub> Cycle) &amp; Blackman's Law of Limiting Factors
      </text>

      <!-- Left Box: Photorespiratory Organelle Shuttling -->
      <g transform="translate(25, 45)">
        <rect width="215" height="135" rx="6" fill="rgba(244, 67, 54, 0.15)" stroke="#F44336" stroke-width="1.2"/>
        <text x="107" y="20" fill="#F44336" font-size="11" font-weight="bold" text-anchor="middle">Photorespiration (C<sub>2</sub> Cycle)</text>
        <text x="107" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">RuBisCO Oxygenase Activity at high O<sub>2</sub></text>
        <text x="107" y="56" fill="#EF9A9A" font-size="8.5" text-anchor="middle">RuBP + O<sub>2</sub> &rarr; 3-PGA (3C) + Phosphoglycolate (2C)</text>
        
        <text x="107" y="76" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">3 Organelles Cooperate:</text>
        <text x="107" y="92" fill="#CBD5E1" font-size="8" text-anchor="middle">1. Chloroplast (Glycolate synthesis)</text>
        <text x="107" y="106" fill="#CBD5E1" font-size="8" text-anchor="middle">2. Peroxisome (Glycine formation)</text>
        <text x="107" y="120" fill="#CBD5E1" font-size="8" text-anchor="middle">3. Mitochondria (Serine + CO<sub>2</sub> release)</text>
        <text x="107" y="130" fill="#FF8A65" font-size="7.5" font-weight="bold" text-anchor="middle">Wastes 25% of fixed carbon with ZERO ATP!</text>
      </g>

      <!-- Right Box: Blackman's Law -->
      <g transform="translate(260, 45)">
        <rect width="215" height="135" rx="6" fill="rgba(0, 229, 255, 0.15)" stroke="#00E5FF" stroke-width="1.2"/>
        <text x="107" y="20" fill="#00E5FF" font-size="11" font-weight="bold" text-anchor="middle">Blackman's Law (1905)</text>
        <text x="107" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">Law of Limiting Factors</text>
        <!-- Mini Curve sketch -->
        <line x1="30" y1="100" x2="185" y2="100" stroke="#FFFFFF" stroke-width="1"/>
        <line x1="30" y1="100" x2="30" y2="50" stroke="#FFFFFF" stroke-width="1"/>
        <path d="M 30,100 L 90,65 L 180,65" fill="none" stroke="#00E5FF" stroke-width="2"/>
        <text x="107" y="115" fill="#80D8FF" font-size="8" text-anchor="middle">Rate determined by factor</text>
        <text x="107" y="126" fill="#80D8FF" font-size="8" text-anchor="middle">at its lowest minimal value</text>
      </g>

      <!-- Bottom: C4 Advantage Summary -->
      <g transform="translate(25, 192)">
        <rect width="450" height="75" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(0, 229, 255, 0.3)"/>
        <text x="225" y="20" fill="#00E5FF" font-size="11" font-weight="bold" text-anchor="middle">
          Evolutionary Significance of C<sub>4</sub> Kranz Anatomy
        </text>
        <text x="225" y="38" fill="#FFFFFF" font-size="9.5" text-anchor="middle">
          C<sub>4</sub> plants (Maize, Sugarcane) concentrate CO<sub>2</sub> around RuBisCO via PEPcase in bundle sheath cells,
        </text>
        <text x="225" y="54" fill="#69F0AE" font-size="9.5" font-weight="bold" text-anchor="middle">
          completely eliminating photorespiratory waste &amp; doubling photosynthetic productivity!
        </text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 4.6: C<sub>2</sub> Photorespiratory Organelle Shuttling (Chloroplast &rarr; Peroxisome &rarr; Mitochondrion) &amp; Blackman's Law of Limiting Factors
  </div>
</div>


  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iv) Factors Affecting Photosynthesis</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #00E5FF;">Blackman's Law of Limiting Factors (F.F. Blackman, 1905):</b> If a chemical process is affected by more than one factor, its rate is determined by the factor which is nearest to its minimal value (limiting factor).
      <br/>- <b style="color: #00E5FF;">Light:</b> Linear rate increase at low intensities; light saturation occurs at 10% of full sunlight; high intensities cause photo-oxidation of chlorophyll.
      <br/>- <b style="color: #00E5FF;">Carbon Dioxide Concentration:</b> Major limiting factor in nature (atmospheric level ~0.04% / 400 ppm); C<sub>4</sub> plants saturate at 360 ppm; C<sub>3</sub> plants saturate at 450 ppm (exploited in greenhouse enrichment of tomatoes/bell peppers).
      <br/>- <b style="color: #00E5FF;">Temperature:</b> Enzymatic reactions are temperature-sensitive; C<sub>4</sub> optimum is 30-40&deg;C; C<sub>3</sub> optimum is 20-25&deg;C.
    </p>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    Plant Growth and Development: Characteristics of plant growth; phases of growth, growth rate, growth curve; conditions of growth; differentiation, dedifferentiation and redifferentiation
  </h2>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Characteristics of Plant Growth, Growth Phases &amp; Growth Rates</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Open Form of Growth:</b> Plant growth is unique because meristems continuously add new cells throughout life (indeterminate growth).</li>
      <li><b style="color: #00E5FF;">Phases of Growth:</b> Meristematic phase (rapid division) &rarr; Elongation phase (vacuolation, cell enlargement) &rarr; Maturation phase (thickened secondary walls, functional specialization).</li>
      <li><b style="color: #00E5FF;">Growth Rates:</b>
        <br/>- <i>Arithmetic Growth:</i> Following mitotic division, only one daughter cell continues to divide while the other differentiates (e.g., root elongation at constant rate): <b>L<sub>t</sub> = L<sub>0</sub> + rt</b> (Linear straight-line graph).
        <br/>- <i>Geometric Growth:</i> Both daughter cells retain the ability to divide, leading to exponential increase: <b>W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup></b> (r = relative growth rate / efficiency index).
      </li>
    </ul>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Growth Curves, Growth Conditions, Differentiation, Dedifferentiation and Redifferentiation</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      &bull; <b style="color: #00E5FF;">Sigmoid (S-shaped) Growth Curve:</b> Characteristic of living organisms growing in natural environments. Displays: <b>Lag Phase</b> (slow initial start) &rarr; <b>Log / Exponential Phase</b> (rapid geometric increase) &rarr; <b>Stationary Phase</b> (nutrient limitation slows growth).
      <br/>&bull; <b style="color: #00E5FF;">Differentiation:</b> Meristematic cells undergo structural maturation to perform specific tasks (e.g., tracheary elements lose protoplasts and deposit lignocellulosic secondary walls).
      <br/>&bull; <b style="color: #00E5FF;">Dedifferentiation:</b> Living differentiated permanent cells regain the capacity of mitotic division under certain conditions (e.g., formation of interfascicular cambium and cork cambium from fully differentiated parenchyma).
      <br/>&bull; <b style="color: #00E5FF;">Redifferentiation:</b> Dedifferentiated meristematic tissues lose division capacity once again to form mature secondary tissues (e.g., secondary xylem, secondary phloem, cork).
    </p>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    Sequence of developmental process in a plant cell; Plant growth regulators; Discovery and physiological effects of Auxins, Gibberellins, Cytokinins, Ethylene and Abscissic Acid
  </h2>

  <!-- PRESERVED IMAGE 4 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgNTgwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkNCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4NDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTI0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODIwIiBoZWlnaHQ9IjU4MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjQxMCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFudCBHcm93dGggUmVndWxhdG9ycyAoUEdScykgJmFtcDsgR3Jvd3RoIEN1cnZlczwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIExlZnQgQm94OiA1IFBHUnMgTWFzdGVyIFN1bW1hcnkgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQzNSIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjA2KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41IFBsYW50IEdyb3d0aCBSZWd1bGF0b3JzIChQR1JzKTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iNDgiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTVGRiI+MS4gQXV4aW5zIChJQUEgLyBJQkEgLyBOQUEpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSI4OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+QXBpY2FsIERvbWluYW5jZSwgQ2VsbCBFbG9uZ2F0aW9uLCBSb290aW5nPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIxMjQiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjE0NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiPjIuIEdpYmJlcmVsbGlucyAoR0EzKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMTY0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5TdGVtIEJvbHRpbmcsIFNlZWQgR2VybWluYXRpb24sIFN1Z2FyY2FuZSB5aWVsZDwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iMjAwIiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4zLiBDeXRva2luaW5zIChaZWF0aW4gLyBLaW5ldGluKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5DZWxsIERpdmlzaW9uLCBPdmVyY29tZXMgQXBpY2FsIERvbWluYW5jZTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxMiIgeT0iMjc2IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyOTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj40LiBFdGh5bGVuZSAoR2FzZW91cyAtIEV0aGVwaG9uKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5GcnVpdCBSaXBlbmluZywgVHJpcGxlIFJlc3BvbnNlLCBBYnNjaXNzaW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIzNTIiIHdpZHRoPSIzNTYiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjM3MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPjUuIEFic2Npc2ljIEFjaWQgKEFCQSAtIFN0cmVzcyBIb3Jtb25lKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzkyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmaWxsPSIjRkZGIj5TdG9tYXRhbCBDbG9zdXJlLCBTZWVkIERvcm1hbmN5LCBTdHJlc3MgdG9sZXJhbmNlPC90ZXh0PgoKICAgIDwhLS0gUmlnaHQgQm94OiBHcm93dGggUmF0ZXMgJiBDdXJ2ZXMgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAsIDApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjM4MCIgaGVpZ2h0PSI0MzUiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIyOSwyNTUsMC4wNikiIHN0cm9rZT0iIzAwRTVGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hcm93dGggUmF0ZXMgJmFtcDsgU2lnbW9pZCBDdXJ2ZTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI0OCIgd2lkdGg9IjM1NiIgaGVpZ2h0PSIxNzUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4xLiBBcml0aG1ldGljIEdyb3d0aDo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSI5NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIE9ubHkgMSBkYXVnaHRlciBjZWxsIGRpdmlkZXMgd2hpbGUgb3RoZXI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPiAgZGlmZmVyZW50aWF0ZXMgaW50byBwZXJtYW5lbnQgY2VsbC48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNGRkYiPuKAoiBMaW5lYXIgR3Jvd3RoIEZvcm11bGE6IEx0ID0gTDAgKyBydDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIENvbnN0YW50IGdyb3d0aCByYXRlIChSb290IHRpcCBlbG9uZ2F0aW9uKS48L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMjM1IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjE4NyIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNjEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj4yLiBHZW9tZXRyaWMgR3Jvd3RoIChTLVNpZ21vaWQgQ3VydmUpOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjI4MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIEJvdGggZGF1Z2h0ZXIgY2VsbHMgcmV0YWluIGRpdmlzaW9uIGNhcGFjaXR5LjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjMwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iI0ZGRiI+4oCiIEZvcm11bGE6IFcxID0gVzAgKiBlXihydCk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPjEuIExhZyBQaGFzZSDinpQgMi4gTG9nIChFeHBvbmVudGlhbCkgUGhhc2U8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIzNDciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiM2OUYwQUUiPuKelCAzLiBTdGF0aW9uYXJ5IFBoYXNlIChOdXRyaWVudCBsaW1pdGF0aW9uKS48L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDUxNSkiPgogICAgPHJlY3Qgd2lkdGg9Ijc4MCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDAsMjI5LDI1NSwwLjE1KSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuOCIvPgogICAgPHRleHQgeD0iMzkwIiB5PSIzMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODBEOEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EZXZlbG9wbWVudCA9IEdyb3d0aCArIERpZmZlcmVudGlhdGlvbiAoUmVndWxhdGVkIGJ5IEF1eGluLCBHQSwgQ3l0b2tpbmluLCBFdGh5bGVuZSAmYW1wOyBBQkEpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 229, 255, 0.4); border: 2px solid #00E5FF;" alt="3D PGRs &amp; Growth Rates" /><p style="color: #00E5FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.4: 3D Plant Growth Regulators (PGRs) Action &amp; Growth Rate Curves (Arithmetic vs Sigmoid)</p></div>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Sequence of Developmental Process in a Plant Cell &amp; PGR Classification</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Development is the sum of growth and differentiation:
      <br/><span style="font-weight: bold; color: #FFFFFF;">
        Meristematic Cell &rarr; Plasmatic Growth &rarr; Cell Division &rarr; Cell Expansion &rarr; Differentiation &rarr; Maturation &rarr; Senescence &rarr; Death.
      </span>
      <br/>- <b style="color: #00E5FF;">Plasticity:</b> Plants follow different pathways in response to environment to form different structures (e.g., <b>Heterophylly</b> in Cotton, Coriander, and <i>Ranunculus</i> / Buttercup where submerged leaves are dissected and aerial leaves are lobed).
    </p>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Discovery, Physiological Effects &amp; Applications of 5 Master PGRs</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">1. Auxins (Charles &amp; Francis Darwin, F.W. Went 1928):</b>
        <br/>- Natural: Indole-3-acetic acid (IAA), IBA. Synthetic: NAA, 2,4-D.
        <br/>- <b style="color: #00E5FF;">Apical Dominance:</b> Growing apical bud inhibits lateral axillary buds; decapitation promotes bushy branching (tea plantations).
        <br/>- Initiates rooting in stem cuttings; promotes parthenocarpy in tomatoes; <b>2,4-D acts as selective weedicide</b> killing broad-leaved dicot weeds.
      </li>
      <li><b style="color: #00E5FF;">2. Gibberellins (E. Kurosawa 1926, Bakanae / Foolish Seedling disease):</b>
        <br/>- Over 100 GAs known; GA<sub>3</sub> is most studied.
        <br/>- Causes <b>Bolting</b> (internode elongation prior to flowering) in rosette plants (Cabbage, Beet).
        <br/>- Increases length of grape stalks; extends sugarcane stems (yield +20 tonnes/acre); speeds up malting in brewing.
      </li>
      <li><b style="color: #00E5FF;">3. Cytokinins (Skoog &amp; Miller 1955, Kinetin):</b>
        <br/>- Discovered from autoclaved herring sperm DNA; natural form is <b>Zeatin</b> (from corn kernels).
        <br/>- Promotes cell division; overcomes apical dominance; delays leaf senescence (<b>Richmond-Lang Effect</b>).
      </li>
      <li><b style="color: #00E5FF;">4. Ethylene (Cousins 1910):</b>
        <br/>- Only gaseous hormone; synthesized in ripening fruits and senescent organs.
        <br/>- Promotes <b>Fruit Ripening</b> (triggers respiratory climacteric burst); breaks seed/bud dormancy; commercially applied as <b>Ethephon</b>.
      </li>
      <li><b style="color: #00E5FF;">5. Abscisic Acid (ABA - Stress Hormone):</b>
        <br/>- General plant growth inhibitor; induces <b>Stomatal Closure</b> during drought stress by stimulating K<sup>+</sup> efflux from guard cells; promotes seed dormancy and winter bud rest.
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(0, 96, 100, 0.85)); border: 2px solid #00E5FF; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #00E5FF; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 4 Plant Physiology Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(0, 229, 255, 0.25); color: #00E5FF; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Physiological Pathway / Hormone</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Cellular Site &amp; Primary Substrates</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Products &amp; Physiological Milestone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Glycolysis (EMP):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cytosol (Glucose &rarr; 2 Pyruvate)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">2 Pyruvate + 2 ATP (net) + 2 NADH</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Krebs Cycle (TCA):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Mitochondrial Matrix (2 Acetyl-CoA + OAA)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">6 NADH + 2 FADH<sub>2</sub> + 2 ATP + 4 CO<sub>2</sub></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">ETS &amp; Chemiosmosis:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Inner Mitochondrial Membrane (Complex I-V)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">34 ATP via proton motive force down F<sub>0</sub>-F<sub>1</sub></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Light Reactions (Z-Scheme):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Grana Thylakoids (PS II P680 + PS I P700)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">ATP + NADPH + O<sub>2</sub> (Photolysis of H<sub>2</sub>O)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Calvin (C3) Cycle:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Chloroplast Stroma (RuBP + CO<sub>2</sub> via RuBisCO)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">1 Glucose (uses 18 ATP + 12 NADPH per 6 CO<sub>2</sub>)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Hatch &amp; Slack (C4):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Mesophyll (PEPcase) + Bundle Sheath (RuBisCO)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Zero photorespiration; high water-use efficiency</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Photorespiration (C2):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Chloroplast &rarr; Peroxisome &rarr; Mitochondria</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Wastes 25% carbon; NO ATP or NADPH produced</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Auxins:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Shoot Apices (IAA, IBA, NAA, 2,4-D)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Apical dominance, root initiation, 2,4-D weedicide</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Gibberellins (GA):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Young leaves &amp; seeds (GA<sub>3</sub>)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Bolting in rosette plants, sugarcane stem lengthening</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Cytokinins:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Root tips &amp; developing seeds (Kinetin, Zeatin)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cell division, delay senescence (Richmond-Lang)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Ethylene &amp; ABA:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Ripening tissues (Ethylene); Stressed leaves (ABA)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Fruit ripening (climacteric); Stomatal closure &amp; dormancy</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Bot4HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 151, 167, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Respiration Energetics, Photosystems, Calvin Cycle Inputs, Growth Kinetics &amp; 5 Master PGRs</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define Cellular Respiration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An enzyme-mediated catabolic exergonic process where organic food substrates are oxidized to release metabolic energy trapped as ATP.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Where does Glycolysis take place inside the cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the Cytoplasm (Cytosol).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is the net yield of ATP in Glycolysis per molecule of glucose?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      2 ATP molecules.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Name the end product of Glycolysis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pyruvic acid (Pyruvate).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Name the pacemaker enzyme of Glycolysis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Phosphofructokinase (PFK).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the connecting link between Glycolysis and Krebs cycle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Acetyl-CoA.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Where does the Krebs Cycle occur in eukaryotic cells?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the Mitochondrial Matrix.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Name the first stable compound formed in the Krebs Cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Citric acid (Citrate, 6C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Name the enzyme of Krebs cycle located in the inner mitochondrial membrane rather than matrix.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Succinate Dehydrogenase (Complex II of ETS).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What is the terminal electron acceptor in Aerobic Respiration?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Molecular Oxygen (O<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Who proposed the Chemiosmotic Hypothesis of ATP synthesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Peter Mitchell (1961, Nobel Prize 1978).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: How many ATP molecules are theoretically produced from the complete oxidation of one glucose molecule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      36 to 38 ATP.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: Define Respiratory Quotient (RQ).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The ratio of the volume of CO<sub>2</sub> evolved to the volume of O<sub>2</sub> consumed in respiration (RQ = CO<sub>2</sub> / O<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What is the RQ value for Glucose (Carbohydrates)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1.0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: What is the RQ value for Fats (Tripalmitin)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      0.7.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: What is the RQ value in Anaerobic respiration?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Infinity (&infin;), because CO<sub>2</sub> is produced without consuming any O<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Why is the respiratory pathway called an Amphibolic pathway?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because its intermediates are utilized in both catabolic (breakdown) and anabolic (synthetic) reactions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Who proved that oxygen released during photosynthesis comes from water (H2O)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cornelius van Niel (1931), confirmed by Ruben and Kamen using <sup>18</sup>O.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Name the primary reaction center pigment of Photosystem I and Photosystem II.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      P700 for PS I and P680 for PS II.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What is the site of the Light Reactions of photosynthesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Thylakoid membranes (Grana) of chloroplasts.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What mineral ions are required for the Photolysis of water in PS II?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Manganese (Mn<sup>2+</sup>) and Chloride (Cl<sup>-</sup>) ions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: What are the products of the Light Reactions (Assimilatory Power)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ATP, NADPH, and O<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Where does Cyclic Photophosphorylation take place?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the Stroma Lamellae (which lack PS II and NADP reductase).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: Name the primary CO2 acceptor molecule in C3 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      RuBP (Ribulose-1,5-bisphosphate, 5C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Name the primary CO2 acceptor molecule in C4 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      PEP (Phosphoenolpyruvate, 3C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Name the first stable product of the Calvin (C3) Cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      3-PGA (3-Phosphoglyceric acid, 3C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Name the first stable product of the Hatch & Slack (C4) Pathway.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      OAA (Oxaloacetic acid, 4C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is Kranz Anatomy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Specialized leaf anatomy in C<sub>4</sub> plants with large bundle sheath cells containing agranal chloroplasts surrounded by mesophyll cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Name two C4 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Maize (<i>Zea mays</i>) and Sugarcane (<i>Saccharum officinarum</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What is Photorespiration (C2 cycle)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A wasteful light-induced respiratory process where RuBisCO fixes O<sub>2</sub> instead of CO<sub>2</sub>, releasing CO<sub>2</sub> without ATP yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: State Blackman's Law of Limiting Factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When a process is conditioned by several factors, its rate is limited by the pace of the slowest factor nearest to its minimum.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is the mathematical expression for Arithmetic Growth?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      L<sub>t</sub> = L<sub>0</sub> + rt.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: What is the mathematical expression for Geometric Growth?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What shape of growth curve is obtained in natural environments?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sigmoid (S-shaped) growth curve.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Define Plasticity in plants with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The ability of a plant to alter its morphology in response to environment (e.g., Heterophylly in Cotton and Buttercup).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Name the hormone responsible for Apical Dominance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Auxin (IAA).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Name the synthetic auxin widely used as a selective weedicide for broad-leaved dicot weeds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      2,4-D (2,4-Dichlorophenoxyacetic acid).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: Which plant hormone causes 'Bolting' (rapid stem elongation) in rosette plants like cabbage?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Gibberellin (GA<sub>3</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Which hormone delays leaf senescence (Richmond-Lang Effect)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cytokinin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Name the only gaseous plant hormone that promotes fruit ripening.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ethylene.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 151, 167, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Krebs Cycle Reactions, Chemiosmotic ATP Generation, C3 vs C4 Pathways, Photorespiration &amp; Hormone Actions</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain the three phases of Glycolysis (EMP Pathway) with net ATP accounting.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Phosphorylation / Energy-Investment Phase:</b> Glucose is phosphorylated twice (using 2 ATP) to form Fructose-1,6-bisphosphate.<br/>2. <b style="color: #00E5FF;">Cleavage Phase:</b> Fructose-1,6-bisphosphate is cleaved into two 3-carbon triose isomers: PGAL and DHAP.<br/>3. <b style="color: #00E5FF;">Energy-Generation Phase:</b> Both PGAL molecules are oxidized, producing <b>2 NADH + 2 H<sup>+</sup></b> and generating <b>4 ATP</b> via substrate-level phosphorylation.<br/>&bull; Net Yield: <b>4 ATP (gross) - 2 ATP (invested) = 2 ATP (net) + 2 NADH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Describe the Link Reaction (Oxidative Decarboxylation of Pyruvate).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Occurs in the mitochondrial matrix connecting glycolysis with the citric acid cycle. Catalyzed by the multi-enzyme <i>Pyruvate Dehydrogenase complex</i> requiring TPP, lipoic acid, CoA, Mg<sup>2+</sup>, and NAD<sup>+</sup>:<br/><b>2 Pyruvate (3C) + 2 CoA + 2 NAD<sup>+</sup> &rarr; 2 Acetyl-CoA (2C) + 2 CO<sub>2</sub> + 2 NADH + 2 H<sup>+</sup></b>.<br/>The 2-carbon Acetyl-CoA directly fuels the Krebs cycle, while the 2 NADH generate 6 ATP in the electron transport chain.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the Krebs Cycle and list the decarboxylation and dehydrogenation steps.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Decarboxylation Steps (Loss of CO<sub>2</sub>):</b><br/>(a) Oxalosuccinate &rarr; &alpha;-Ketoglutarate + CO<sub>2</sub>.<br/>(b) &alpha;-Ketoglutarate &rarr; Succinyl-CoA + CO<sub>2</sub>.<br/>2. <b style="color: #00E5FF;">Dehydrogenation Steps (Formation of Reduced Coenzymes):</b><br/>(a) Isocitrate &rarr; Oxalosuccinate (+ 1 NADH).<br/>(b) &alpha;-Ketoglutarate &rarr; Succinyl-CoA (+ 1 NADH).<br/>(c) Succinate &rarr; Fumarate (+ <b>1 FADH<sub>2</sub></b> via Succinate Dehydrogenase).<br/>(d) Malate &rarr; Oxaloacetate (+ 1 NADH).<br/>Per turn yields: <b>3 NADH + 1 FADH<sub>2</sub> + 1 ATP/GTP + 2 CO<sub>2</sub></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain the Chemiosmotic Hypothesis of ATP generation in Mitochondria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Proposed by Peter Mitchell (1961):<br/>1. As electrons flow through ETS Complexes I, III, and IV, free energy drives active pumping of protons (H<sup>+</sup>) from the matrix into the <b>Intermembrane Space</b>.<br/>2. This generates a steep <b>Electrochemical Proton Gradient (&Delta;&mu;H<sup>+</sup>)</b> and proton motive force across the impermeable inner membrane.<br/>3. Protons re-enter the matrix down their gradient through the transmembrane channel of <b>F<sub>0</sub></b> in ATP Synthase.<br/>4. The proton flow drives rotational conformational changes in the <b>F<sub>1</sub> catalytic headpiece</b>, synthesizing ATP from ADP + Pi.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain why the respiratory pathway is regarded as Amphibolic rather than purely Catabolic.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Respiration involves the catabolic breakdown of carbohydrates, fats, and proteins to release energy. However, its organic intermediates are routinely withdrawn to serve as crucial starting building blocks for anabolic biosynthetic pathways:<br/>- <i>Acetyl-CoA:</i> Precursor for the synthesis of fatty acids, cutin, and carotenoids.<br/>- <i>Succinyl-CoA:</i> Precursor for chlorophyll and cytochrome porphyrin rings.<br/>- <i>Oxaloacetate &amp; &alpha;-Ketoglutarate:</i> Precursors for amino acid syntheses.<br/>Because it serves both breakdown and synthetic roles, it is strictly <b>Amphibolic</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Differentiate between Cyclic and Non-Cyclic Photophosphorylation in four major aspects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Photosystems Involved:</b> Non-cyclic uses both PS II (P680) and PS I (P700); Cyclic uses <b>only PS I</b>.<br/>2. <b style="color: #00E5FF;">Photolysis of Water:</b> Non-cyclic involves water splitting and O<sub>2</sub> evolution; Cyclic does not split water or evolve O<sub>2</sub>.<br/>3. <b style="color: #00E5FF;">End Products:</b> Non-cyclic produces both <b>ATP and NADPH</b>; Cyclic produces <b>ATP only</b>.<br/>4. <b style="color: #00E5FF;">Electron Flow:</b> Non-cyclic is unidirectional (Z-scheme); Cyclic circulates electrons back to PS I.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Describe the Z-scheme of Light Reactions in photosynthesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Photons hit PS II (P680); excited electrons are captured by primary acceptor Pheophytin.<br/>2. Electrons pass down an electron transport chain: Plastoquinone (PQ) &rarr; Cytochrome b<sub>6</sub>f &rarr; Plastocyanin (PC), pumping H<sup>+</sup> into thylakoid lumen to generate ATP.<br/>3. The electron-deficient PS II oxidizes water via the Oxygen Evolving Complex, releasing O<sub>2</sub> and 4 H<sup>+</sup>.<br/>4. Plastocyanin delivers electrons to PS I (P700). PS I absorbs light and ejects electrons to Ferredoxin (Fd), which reduces NADP<sup>+</sup> to <b>NADPH</b> via FNR.<br/>5. Plotted on redox potential scale, the energy trajectory forms a characteristic <b>'Z' pattern</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain the three phases of the Calvin Cycle (C3 Pathway).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Carboxylation:</b> Fixation of CO<sub>2</sub> into a stable organic intermediate. RuBP (5C) reacts with CO<sub>2</sub> catalyzed by <b>RuBisCO</b> to produce two molecules of 3-PGA (3C).<br/>2. <b style="color: #00E5FF;">Reduction:</b> A series of reactions using <b>2 ATP and 2 NADPH per CO<sub>2</sub></b> to reduce 3-PGA into Triose phosphate (G3P) for glucose synthesis.<br/>3. <b style="color: #00E5FF;">Regeneration:</b> Continuous cycle requires regeneration of the CO<sub>2</sub> acceptor RuBP, consuming <b>1 ATP per CO<sub>2</sub></b>.<br/>Total per CO<sub>2</sub>: <b>3 ATP + 2 NADPH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain Kranz Anatomy and its significance in C4 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kranz ('wreath') anatomy is a specialized dual-cell leaf architecture in C<sub>4</sub> plants (Maize, Sugarcane):<br/>1. Large, thick-walled <b>Bundle Sheath Cells</b> form concentric rings around vascular bundles. They possess agranal chloroplasts rich in RuBisCO but lack PS II (preventing internal O<sub>2</sub> evolution).<br/>2. Surrounding <b>Mesophyll Cells</b> possess normal granal chloroplasts rich in <b>PEPcase</b> but lack RuBisCO.<br/><b style="color: #00E5FF;">Significance:</b> PEPcase traps CO<sub>2</sub> efficiently without binding O<sub>2</sub>. Malate delivers high CO<sub>2</sub> directly into bundle sheath cells around RuBisCO, <b>completely suppressing photorespiration</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain Photorespiration (C2 Cycle) and why it is absent in C4 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      RuBisCO possesses bifunctional catalytic activity (Carboxylase and Oxygenase). In C<sub>3</sub> plants under high temperature and high O<sub>2</sub>:low CO<sub>2</sub> ratios, RuBisCO binds O<sub>2</sub>, producing 1 molecule of 3-PGA (3C) and 1 molecule of <b>Phosphoglycolate (2C)</b>. Phosphoglycolate undergoes metabolic recycling through <b>Chloroplast &rarr; Peroxisome &rarr; Mitochondria</b>, releasing CO<sub>2</sub> and wasting 25% of fixed carbon with <b>zero ATP or NADPH generation</b>.<br/>In C<sub>4</sub> plants, photorespiration is absent because Kranz anatomy pumps high CO<sub>2</sub> around RuBisCO, ensuring it operates exclusively as a carboxylase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Differentiate between C3 Plants and C4 Plants in four fundamental characteristics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Kranz Anatomy:</b> Absent in C<sub>3</sub> plants; present in C<sub>4</sub> plants.<br/>2. <b style="color: #00E5FF;">Primary CO<sub>2</sub> Acceptor:</b> RuBP (5C) in C<sub>3</sub>; PEP (3C) in C<sub>4</sub>.<br/>3. <b style="color: #00E5FF;">First Stable Product:</b> 3-PGA (3C) in C<sub>3</sub>; Oxaloacetate (4C) in C<sub>4</sub>.<br/>4. <b style="color: #00E5FF;">Photorespiration:</b> High in C<sub>3</sub> (reduces productivity); completely absent in C<sub>4</sub> (higher photosynthetic yield).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain the factors affecting Photosynthesis according to Blackman's Law of Limiting Factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Light:</b> Light intensity increases rate linearly at low levels; light saturation occurs at ~10% of full sunlight. High light intensity causes photo-oxidation of chlorophyll.<br/>2. <b style="color: #00E5FF;">Carbon Dioxide:</b> Major limiting factor in nature (current level 0.04% / 400 ppm). Increasing CO<sub>2</sub> up to 0.05% increases photosynthetic productivity (utilized in greenhouse crops).<br/>3. <b style="color: #00E5FF;">Temperature:</b> Enzymatic dark reactions are temperature-dependent. C<sub>4</sub> plants have higher optimum (30-40&deg;C); C<sub>3</sub> plants have lower optimum (20-25&deg;C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain Arithmetic Growth vs Geometric Growth with mathematical formulas and graphical curves.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Arithmetic Growth:</b> One daughter cell divides while the other differentiates. Formula: <b>L<sub>t</sub> = L<sub>0</sub> + rt</b> (where L<sub>t</sub> = length at time t, r = growth rate). Yields a <b>linear straight-line graph</b> (e.g., root elongation).<br/>2. <b style="color: #00E5FF;">Geometric Growth:</b> Both daughter cells retain mitotic division ability. Formula: <b>W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup></b> (where W<sub>1</sub> = final weight, r = relative growth rate). Yields a classic <b>Sigmoid (S-shaped) curve</b> with lag, log, and stationary phases.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Define Differentiation, Dedifferentiation, and Redifferentiation with botanical examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Differentiation:</b> Meristematic cells undergo biochemical maturation to perform specialized tasks (e.g., parenchyma cells losing division to become tracheids with lignified walls).<br/>2. <b style="color: #00E5FF;">Dedifferentiation:</b> Differentiated permanent cells regain active mitotic division capacity under specific signals (e.g., cortical parenchyma becoming <b>cork cambium</b> or medullary rays forming <b>interfascicular cambium</b>).<br/>3. <b style="color: #00E5FF;">Redifferentiation:</b> Meristematic cells produced by dedifferentiation lose division capacity once again to form permanent secondary tissues (e.g., secondary xylem, cork).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Describe the discovery and physiological effects of Auxins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Discovery:</b> Charles and Francis Darwin observed canary grass coleoptile phototropism; F.W. Went (1928) isolated Auxin from oat (<i>Avena</i>) coleoptile tips using agar blocks.<br/>2. <b style="color: #00E5FF;">Physiological Effects:</b><br/>&bull; Promotes <b>Apical Dominance</b> (suppresses lateral buds).<br/>&bull; Initiates rooting in woody stem cuttings in horticulture.<br/>&bull; Induces parthenocarpy in tomatoes.<br/>&bull; Synthetic 2,4-D acts as a selective herbicide killing dicot weeds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Describe the discovery and physiological effects of Gibberellins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Discovery:</b> E. Kurosawa (1926) identified active substance from fungus <i>Gibberella fujikuroi</i> causing 'Bakanae' (foolish seedling) disease in rice.<br/>2. <b style="color: #00E5FF;">Physiological Effects:</b><br/>&bull; Causes <b>Bolting</b> (rapid internode elongation prior to flowering) in rosette plants (cabbage, beet).<br/>&bull; Lengthens stalks of seedless grapes and extends sugarcane stems.<br/>&bull; Accelerates &alpha;-amylase production during barley malting in brewing.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Describe the discovery and physiological effects of Cytokinins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Discovery:</b> Skoog and Miller (1955) identified Kinetin (modified adenine) from autoclaved herring sperm DNA; Letham isolated natural Zeatin from corn endosperm.<br/>2. <b style="color: #00E5FF;">Physiological Effects:</b><br/>&bull; Promotes active <b>Cell Division (Cytokinesis)</b> in tissue culture alongside auxin.<br/>&bull; Overcomes apical dominance, stimulating lateral bud growth.<br/>&bull; Delays leaf senescence by mobilizing nutrients (<b>Richmond-Lang Effect</b>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Describe the physiological effects and agricultural applications of Ethylene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ethylene is the only natural gaseous plant hormone:<br/>1. <b style="color: #00E5FF;">Fruit Ripening:</b> Promotes rapid ripening accompanied by a respiratory burst (climacteric) in bananas, apples, and tomatoes.<br/>2. <b style="color: #00E5FF;">Abscission &amp; Senescence:</b> Accelerates leaf, flower, and fruit abscission.<br/>3. <b style="color: #00E5FF;">Agricultural Use (Ethephon):</b> Aqueous Ethephon releases ethylene inside plant tissues, promoting uniform fruit ripening and female flower induction in cucumbers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain why Abscisic Acid (ABA) is called the 'Stress Hormone'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ABA is synthesized rapidly in response to environmental stresses (drought, salinity, extreme cold):<br/>1. <b style="color: #00E5FF;">Stomatal Closure:</b> During water deficit, ABA signals guard cells to rapidly efflux K<sup>+</sup> and Cl<sup>-</sup> ions, leading to endosmotic water loss and instant stomatal closure to prevent dehydration.<br/>2. <b style="color: #00E5FF;">Seed Dormancy:</b> Inhibits precocious seed germination and induces seed dormancy, ensuring seeds survive harsh winter conditions before germinating in spring.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the concept of Photoperiodism and classify plants based on photoperiodic responses.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Photoperiodism is the physiological response of plants to the relative lengths of light (day) and dark (night) periods regarding flowering (Garner &amp; Allard, 1920):<br/>1. <b style="color: #00E5FF;">Short Day Plants (SDPs):</b> Flower when day length is shorter than a critical photoperiod (require uninterrupted long nights; e.g., Soybean, Tobacco, Chrysanthemum).<br/>2. <b style="color: #00E5FF;">Long Day Plants (LDPs):</b> Flower when day length exceeds a critical photoperiod (e.g., Wheat, Radish, Spinach).<br/>3. <b style="color: #00E5FF;">Day Neutral Plants (DNPs):</b> Flowering is independent of photoperiod (e.g., Tomato, Sunflower, Maize).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: What is Vernalization? Explain its agricultural significance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Vernalization is the quantitative or qualitative promotion of flowering by a period of low-temperature (chilling at 1-6&deg;C) treatment during seed germination or early seedling growth.<br/><b style="color: #00E5FF;">Significance:</b><br/>1. Prevents precocious reproductive development late in the growing season until winter has passed.<br/>2. Enables winter varieties of crops (e.g., winter wheat) to be converted into spring varieties, shortening vegetative period and increasing crop yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Explain the mechanism of ATP synthesis by F0-F1 particles in mitochondria and chloroplasts.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The F<sub>0</sub>-F<sub>1</sub> ATP Synthase consists of:<br/>1. <b style="color: #00E5FF;">F<sub>0</sub> Subunit:</b> Hydrophobic transmembrane proton channel embedded in the membrane.<br/>2. <b style="color: #00E5FF;">F<sub>1</sub> Subunit:</b> Hydrophilic spherical headpiece protruding into the matrix/stroma containing catalytic sites for ATP synthesis.<br/><i>Mechanism:</i> Protons driven by electrochemical gradient flow through F<sub>0</sub>, rotating the central &gamma;-stalk. This mechanical rotation induces conformational cycles in the three &alpha;&beta; dimers of F<sub>1</sub> (Open &rarr; Loose &rarr; Tight), synthesizing ATP from ADP + Pi.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain the physiological role of Water in photosynthesis and cellular respiration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">In Photosynthesis:</b> Water serves as the universal electron and proton donor; photolysis of H<sub>2</sub>O in PS II replaces electrons lost by P680 and evolves O<sub>2</sub>.<br/>2. <b style="color: #00E5FF;">In Respiration:</b> Water is the ultimate byproduct formed when oxygen accepts terminal electrons and protons in Complex IV; water is also consumed in Krebs cycle hydration steps (e.g., fumarate to malate).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Differentiate between Aerobic Respiration and Fermentation in three major points.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Oxygen Requirement:</b> Aerobic requires continuous O<sub>2</sub>; Fermentation occurs in the strict absence of O<sub>2</sub>.<br/>2. <b style="color: #00E5FF;">Oxidation Degree:</b> Aerobic completely oxidizes glucose into inorganic CO<sub>2</sub> and H<sub>2</sub>O; Fermentation incompletely degrades glucose into organic ethanol or lactic acid.<br/>3. <b style="color: #00E5FF;">Energy Yield:</b> Aerobic yields 36-38 ATP per glucose (~40% efficiency); Fermentation yields only <b>2 ATP per glucose (&lt;7% efficiency)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain why RuBisCO is described as the most abundant enzyme on Earth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase) constitutes <b>up to 40-50% of total soluble protein in green leaves</b>. It is universally present in all photosynthetic autotrophs (algae, C<sub>3</sub>, C<sub>4</sub>, CAM plants, cyanobacteria) and catalyzes the primary carbon fixation reaction responsible for almost all biological life on Earth.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: What is Plastochron? Explain its developmental significance in plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Plastochron is the time interval between the initiation of two successive leaf primordia at the shoot apical meristem. It serves as an objective morphological time unit measuring plant developmental stages independent of chronological calendar time.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the role of Phycobilins in photosynthetic light harvesting.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Phycobilins (Phycocyanin, Phycoerythrin, Allophycocyanin) are water-soluble accessory photosynthetic bile pigments organized into complexes called <b>Phycobilisomes</b> on thylakoids of Red Algae and Cyanobacteria. They absorb green, yellow, and orange light wavelengths not absorbed by chlorophyll a and transfer excitation energy with &gt;90% quantum efficiency to chlorophyll a.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain the difference between Absolute Growth Rate and Relative Growth Rate.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Absolute Growth Rate (AGR):</b> The measurement and comparison of total growth per unit time: AGR = (L<sub>2</sub> - L<sub>1</sub>) / (t<sub>2</sub> - t<sub>1</sub>).<br/>2. <b style="color: #00E5FF;">Relative Growth Rate (RGR):</b> The growth per unit time expressed per unit of initial parameter (efficiency index): RGR = (ln W<sub>2</sub> - ln W<sub>1</sub>) / (t<sub>2</sub> - t<sub>1</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: What is the role of Manganese and Chlorine in Photosynthesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Manganese (Mn<sup>2+</sup>) and Chlorine (Cl<sup>-</sup>) are essential inorganic cofactors of the <b>Oxygen Evolving Complex (Water-Splitting Complex)</b> associated with Photosystem II. Four manganese ions undergo cyclical oxidations (S-states S<sub>0</sub> to S<sub>4</sub>) to catalyze the 4-electron photolysis: 2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + 4e<sup>-</sup> + O<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain the term 'Respiratory Climacteric' during fruit ripening.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Respiratory climacteric is a sharp, dramatic spike in cellular respiration rate (accompanied by huge oxygen uptake and ethylene release) that occurs during the ripening of climacteric fruits (e.g., Apple, Banana, Mango, Tomato), triggering color changes, starch breakdown to sugars, and fruit softening.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain how high temperatures affect Photosynthesis in C3 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In C<sub>3</sub> plants, elevated temperatures (&gt;30&deg;C):<br/>1. Decrease the solubility of CO<sub>2</sub> in water relative to O<sub>2</sub>.<br/>2. Alter the active site conformation of RuBisCO, significantly increasing its affinity for O<sub>2</sub> (oxygenase activity).<br/>3. Drastically increases the rate of wasteful <b>Photorespiration</b>, dropping net carbon assimilation by 30-50%.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain the difference between Substrate-Level Phosphorylation and Oxidative Phosphorylation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Substrate-Level Phosphorylation:</b> Direct enzymatic transfer of a high-energy phosphate group from a phosphorylated metabolic intermediate to ADP to synthesize ATP (occurs in Glycolysis and Krebs cycle without ETS).<br/>2. <b style="color: #00E5FF;">Oxidative Phosphorylation:</b> Synthesis of ATP from ADP + Pi driven by an electrochemical proton gradient generated during electron transfer to O<sub>2</sub> in the ETS.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain the role of Potassium (K+) ions in stomatal movements.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      According to Levitt's active K<sup>+</sup> transport hypothesis, light induces active extrusion of H<sup>+</sup> ions from guard cells. Potassium (K<sup>+</sup>) and Cl<sup>-</sup> ions rapidly flow into the guard cells to balance internal malate anions. This substantial osmotic ion accumulation lowers water potential, drawing water in by endosmosis, causing the guard cells to become turgid and the stomatal pore to open.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain why the ETS is located in the inner mitochondrial membrane rather than the outer membrane.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The inner mitochondrial membrane is extensively folded into <b>Cristae</b> to increase surface area for thousands of electron transport complexes and F<sub>0</sub>-F<sub>1</sub> ATP synthases. Crucially, the inner membrane is <b>strictly impermeable to protons (H<sup>+</sup>)</b>, allowing the maintenance of a high electrochemical proton gradient; the outer membrane contains large porins and is freely permeable.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: What is the Compensation Point in Photosynthesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The compensation point is the specific light intensity or CO<sub>2</sub> concentration at which the rate of photosynthetic carbon fixation exactly equals the rate of respiratory carbon release (Net gas exchange = 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain the role of Auxin in Herbicidal weed control (2,4-D).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Synthetic auxins like 2,4-D (2,4-Dichlorophenoxyacetic acid) are widely used as selective herbicides in monocot cereal crops (wheat, rice). Because dicotyledonous broad-leaved weeds absorb and translocate 2,4-D rapidly, it triggers uncontrolled, abnormal cellular proliferation, vascular occlusion, and rapid death of the weeds without harming monocot grass crops.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: What is Decapitation? Why is it practiced in tea plantations and hedge making?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Decapitation is the mechanical removal of the shoot apical bud. Removing the shoot apex eliminates the primary source of <b>Auxin</b>, releasing lateral axillary buds from apical dominance. Lateral buds sprout profusely into dense, bushy branches, vastly increasing harvestable tea leaf yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain the difference between Short Day Plants and Long Day Plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Short Day Plants (SDPs):</b> Flower only when the light period is shorter than a critical duration and the dark period is longer than a critical uninterrupted duration (e.g., Soybean, Chrysanthemum).<br/>2. <b style="color: #00E5FF;">Long Day Plants (LDPs):</b> Flower only when exposed to light periods exceeding a critical duration (e.g., Spinach, Wheat, Radish).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain the role of Cytochrome c in cellular respiration and apoptosis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cytochrome c is a small, water-soluble mobile peripheral hemeprotein loosely attached to the outer surface of the inner mitochondrial membrane. It shuttles single electrons between Complex III (Cyt bc<sub>1</sub>) and Complex IV (Cyt c oxidase). In damaged or stressed cells, its release from mitochondria into the cytosol triggers programmed cell death (apoptosis).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain why anaerobic respiration yields very little energy compared to aerobic respiration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In anaerobic respiration (fermentation), glucose is only partially degraded into organic compounds (ethanol or lactate) where most chemical bond energy remains trapped. Furthermore, electrons from NADH are discarded onto pyruvate derivatives rather than flowing through the ETS to generate ATP via chemiosmosis, yielding only 2 ATP per glucose.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 151, 167, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Complete Biochemical Reaction Proofs, Z-Scheme Details, 38-ATP Energetics &amp; Master Plant Physiology Synthesis Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss Glycolysis (EMP Pathway) in complete biochemical depth: All 10 Enzymatic Steps, Regulatory Pacemaker Reactions, and Energetics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Historical Discovery:</b> Gustav Embden, Otto Meyerhof, and Jakub Parnas (1930). Universal cytosolic sequence degrading 1 glucose (6C) into 2 pyruvates (3C).<br/><br/><b style="color: #00E5FF;">2. The 10 Enzymatic Reactions:</b><br/>&bull; <i>Step 1:</i> Glucose + ATP &rarr; Glucose-6-phosphate + ADP (Hexokinase).<br/>&bull; <i>Step 2:</i> Glucose-6-P &hArr; Fructose-6-P (Phosphoglucoisomerase).<br/>&bull; <i>Step 3:</i> Fructose-6-P + ATP &rarr; Fructose-1,6-bisphosphate + ADP (<b>Phosphofructokinase - PFK, Master Pacemaker Enzyme</b>).<br/>&bull; <i>Step 4:</i> Fructose-1,6-BP &hArr; Glyceraldehyde-3-P (PGAL) + DHAP (Aldolase).<br/>&bull; <i>Step 5:</i> DHAP &hArr; PGAL (Triose phosphate isomerase).<br/>&bull; <i>Step 6:</i> 2 PGAL + 2 NAD<sup>+</sup> + 2 Pi &rarr; 2 1,3-Bisphosphoglycerate + <b>2 NADH + 2 H<sup>+</sup></b> (G3P Dehydrogenase).<br/>&bull; <i>Step 7:</i> 2 1,3-BPG + 2 ADP &rarr; 2 3-Phosphoglycerate + <b>2 ATP</b> (Phosphoglycerate kinase).<br/>&bull; <i>Step 8:</i> 2 3-PGA &hArr; 2 2-Phosphoglycerate (Phosphoglyceromutase).<br/>&bull; <i>Step 9:</i> 2 2-PGA &hArr; 2 Phosphoenolpyruvate (PEP) + 2 H<sub>2</sub>O (Enolase).<br/>&bull; <i>Step 10:</i> 2 PEP + 2 ADP &rarr; 2 Pyruvate + <b>2 ATP</b> (Pyruvate kinase).<br/><br/><b style="color: #00E5FF;">3. Net Energetics:</b> 4 ATP produced - 2 ATP consumed = <b>2 ATP (net) + 2 NADH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Detail the Krebs Cycle (Citric Acid Cycle / TCA Cycle) in exhaustive depth: Biochemical Reactions, Decarboxylations, Dehydrogenations, and ATP Yield.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Principles:</b> Sir Hans Krebs (1937). Cyclic sequence in the mitochondrial matrix completely oxidizing Acetyl-CoA into CO<sub>2</sub>.<br/><br/><b style="color: #00E5FF;">2. Step-by-Step Cycle:</b><br/>&bull; <i>Condensation:</i> Acetyl-CoA (2C) + Oxaloacetate (4C) + H<sub>2</sub>O &rarr; Citrate (6C) + CoA (Citrate synthase).<br/>&bull; <i>Isomerization:</i> Citrate &hArr; cis-Aconitate &hArr; Isocitrate (Aconitase).<br/>&bull; <i>First Oxidation &amp; Decarboxylation:</i> Isocitrate + NAD<sup>+</sup> &rarr; &alpha;-Ketoglutarate (5C) + <b>CO<sub>2</sub> + NADH</b> (Isocitrate dehydrogenase).<br/>&bull; <i>Second Oxidation &amp; Decarboxylation:</i> &alpha;-Ketoglutarate + CoA + NAD<sup>+</sup> &rarr; Succinyl-CoA (4C) + <b>CO<sub>2</sub> + NADH</b> (&alpha;-Ketoglutarate dehydrogenase).<br/>&bull; <i>Substrate Phosphorylation:</i> Succinyl-CoA + GDP + Pi &rarr; Succinate + <b>GTP/ATP</b> + CoA (Succinate thiokinase).<br/>&bull; <i>Third Oxidation:</i> Succinate + FAD &rarr; Fumarate + <b>FADH<sub>2</sub></b> (Succinate dehydrogenase / Complex II).<br/>&bull; <i>Hydration:</i> Fumarate + H<sub>2</sub>O &rarr; Malate (Fumarase).<br/>&bull; <i>Fourth Oxidation:</i> Malate + NAD<sup>+</sup> &rarr; Oxaloacetate + <b>NADH</b> (Malate dehydrogenase).<br/><br/><b style="color: #00E5FF;">3. Cycle Total per Glucose:</b> 6 NADH + 2 FADH<sub>2</sub> + 2 ATP + 4 CO<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Discuss the Mitochondrial Electron Transport System (ETS) and Oxidative Phosphorylation: Complexes I to V, Redox Reactions, and Chemiosmosis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Complex Architecture of Inner Mitochondrial Membrane:</b><br/>&bull; <i>Complex I (NADH:Ubiquinone Oxidoreductase):</i> Contains FMN and 8 Fe-S clusters; transfers electrons from NADH to ubiquinone (UQ), pumping <b>4 H<sup>+</sup></b> into the intermembrane space.<br/>&bull; <i>Complex II (Succinate Dehydrogenase):</i> Contains FAD and Fe-S centers; oxidizes succinate to fumarate and transfers electrons to UQ; no protons pumped.<br/>&bull; <i>Complex III (Cytochrome bc<sub>1</sub> Complex):</i> Contains Cyt b, Cyt c<sub>1</sub>, and Rieske Fe-S center; transfers electrons from ubiquinol to mobile Cytochrome c via the Q-cycle, pumping <b>4 H<sup>+</sup></b>.<br/>&bull; <i>Complex IV (Cytochrome c Oxidase):</i> Contains Cytochromes a, a<sub>3</sub> and copper centers (Cu<sub>A</sub>, Cu<sub>B</sub>); delivers 4 electrons to reduce terminal O<sub>2</sub> to 2 H<sub>2</sub>O, pumping <b>2 H<sup>+</sup></b>.<br/><br/><b>2. Complex V (F<sub>0</sub>-F<sub>1</sub> ATP Synthase):</b> Proton motive force drives H<sup>+</sup> influx through F<sub>0</sub> channel, rotating F<sub>1</sub> headpiece to synthesize ATP (2 H<sup>+</sup> per ATP). Total yield: 1 NADH &rarr; 3 ATP; 1 FADH<sub>2</sub> &rarr; 2 ATP.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss the Light Reactions of Photosynthesis: Z-Scheme, Photosystems (PS I and PS II), Photolysis of Water, and ATP/NADPH Generation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Photosystem Architecture:</b> Located in thylakoid membranes; comprise Light Harvesting Complexes (LHC) surrounding reaction centers: PS II (P680) and PS I (P700).<br/><br/><b style="color: #00E5FF;">2. Photolysis of Water:</b> Oxygen Evolving Complex (Mn<sub>4</sub>CaO<sub>5</sub> cluster) on lumen face of PS II catalyzes: 2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + 4e<sup>-</sup> + O<sub>2</sub>.<br/><br/><b style="color: #00E5FF;">3. Non-Cyclic Electron Transport (Z-Scheme):</b><br/>Excited P680 &rarr; Pheophytin &rarr; Plastoquinone (PQ) &rarr; Cytochrome b<sub>6</sub>f (pumps H<sup>+</sup> into thylakoid lumen) &rarr; Plastocyanin (PC) &rarr; P700 (PS I). P700 absorbs 700 nm light &rarr; A<sub>0</sub> &rarr; Phylloquinone (A<sub>1</sub>) &rarr; Fe-S &rarr; Ferredoxin (Fd) &rarr; FNR enzyme reduces NADP<sup>+</sup> to <b>NADPH</b> in stroma.<br/><br/><b style="color: #00E5FF;">4. Photophosphorylation:</b> Proton accumulation inside thylakoid lumen creates steep &Delta;pH; proton efflux through CF<sub>0</sub>-CF<sub>1</sub> ATP synthase generates ATP in stroma.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Discuss the Calvin Cycle (C3 Pathway) in complete depth: Carboxylation, Reduction, Regeneration, Stoichiometry, and RuBisCO Properties.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Discovery &amp; Nature:</b> Melvin Calvin (1961 Nobel Prize) using <sup>14</sup>C in <i>Chlorella</i>. Fundamental cyclic enzymatic pathway in stroma synthesizing hexose sugars.<br/><br/><b style="color: #00E5FF;">2. The Three Phases:</b><br/>&bull; <i>Carboxylation:</i> 6 RuBP (5C) + 6 CO<sub>2</sub> + 6 H<sub>2</sub>O &rarr; 12 3-PGA (3C). Catalyzed by <b>RuBisCO</b> (Ribulose-1,5-bisphosphate carboxylase/oxygenase), the world's most abundant enzyme.<br/>&bull; <i>Reduction:</i> 12 3-PGA + 12 ATP &rarr; 12 1,3-BPG; 12 1,3-BPG + 12 NADPH &rarr; 12 G3P (Triose phosphate) + 12 NADP<sup>+</sup> + 12 Pi.<br/>2 molecules of G3P exit the cycle to synthesize <b>1 Glucose molecule (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>)</b>.<br/>&bull; <i>Regeneration:</i> 10 molecules of G3P undergo complex sugar reshuffling using 6 ATP to regenerate 6 molecules of RuBP.<br/><br/><b style="color: #00E5FF;">3. Cycle Energetics:</b> Synthesis of 1 Glucose requires <b>6 CO<sub>2</sub> + 18 ATP + 12 NADPH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Provide an Exhaustive Comparison of C3 Pathway, C4 Pathway, and CAM Pathway in Plants: Anatomy, Enzymes, Water Efficiency, and Ecology.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. C<sub>3</sub> Pathway:</b> Standard Calvin cycle; mesophyll only; RuBP primary acceptor via RuBisCO; photorespiration high (up to 30-40% carbon loss); temperature optimum 20-25&deg;C; Wheat, Rice, Potato.<br/><br/><b>2. C<sub>4</sub> Pathway (Hatch &amp; Slack):</b> Spatial separation of carbon fixation; <b>Kranz Anatomy</b> (mesophyll + bundle sheath); PEP primary acceptor via PEPcase; initial product OAA (4C); zero photorespiration; high water-use efficiency; temperature optimum 30-40&deg;C; Maize, Sugarcane.<br/><br/><b style="color: #00E5FF;">3. CAM Pathway (Crassulacean Acid Metabolism):</b> Temporal separation of carbon fixation in desert succulents (Cactus, Pineapple); stomata open at night (scotoactive) fixing CO<sub>2</sub> via PEPcase into malic acid stored in large vacuoles; stomata close during daytime to prevent desiccation while light reactions supply ATP/NADPH for Calvin cycle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Discuss Photorespiration (C2 Cycle) in complete depth: Causes, Organellar Shuttling (Chloroplast, Peroxisome, Mitochondria), and Evolutionary Wastefulness.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Molecular Basis:</b> RuBisCO active site cannot strictly discriminate between CO<sub>2</sub> and O<sub>2</sub>. When O<sub>2</sub> levels rise or temperature increases, RuBisCO oxygenates RuBP: <b>RuBP (5C) + O<sub>2</sub> &rarr; 3-PGA (3C) + 2-Phosphoglycolate (2C)</b>.<br/><br/><b style="color: #00E5FF;">2. The 3-Organelle Shuttling:</b><br/>&bull; <i>Chloroplast:</i> Phosphoglycolate is dephosphorylated to Glycolate, which exits into peroxisome.<br/>&bull; <i>Peroxisome:</i> Glycolate is oxidized by Glycolate Oxidase to Glyoxylate (producing toxic H<sub>2</sub>O<sub>2</sub>, degraded by catalase). Glyoxylate is transaminated to <b>Glycine</b>.<br/>&bull; <i>Mitochondria:</i> Two Glycine molecules (2 &times; 2C) combine to form one <b>Serine (3C) + CO<sub>2</sub> + NH<sub>3</sub></b>.<br/>&bull; Serine returns to peroxisome &rarr; Hydroxypyruvate &rarr; Glycerate &rarr; enters chloroplast &rarr; phosphorylated to 3-PGA consuming 1 ATP.<br/><br/><b style="color: #00E5FF;">3. Wastefulness:</b> Releases 25% of previously fixed CO<sub>2</sub> with <b>zero ATP or NADPH yield</b>; pure metabolic burden.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Explain the Discovery, Chemical Nature, Physiological Effects, and Commercial Applications of Auxins and Gibberellins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Auxins (IAA, NAA, 2,4-D):</b><br/>&bull; Discovered by Darwin and F.W. Went (1928, <i>Avena</i> curvature test).<br/>&bull; Induces <b>Apical Dominance</b> by suppressing axillary buds; maintains dormancy.<br/>&bull; Initiates rooting in stem cuttings in nurseries.<br/>&bull; Induces parthenocarpy in tomatoes.<br/>&bull; 2,4-D used as selective weedicide to clear dicot weeds in cereal crops.<br/><br/><b>2. Gibberellins (GA<sub>3</sub>):</b><br/>&bull; Discovered by Kurosawa (1926) from <i>Gibberella fujikuroi</i> causing foolish seedling disease.<br/>&bull; Causes <b>Bolting</b> (rapid internode elongation) in cabbage, beet, and carrots.<br/>&bull; Increases length of grape stalks and sugarcane stems (boosts yield +20 tonnes/acre).<br/>&bull; Induces &alpha;-amylase synthesis in germinating barley grains during industrial brewing.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain the Discovery, Chemical Nature, Physiological Effects, and Commercial Applications of Cytokinins, Ethylene, and Abscisic Acid.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Cytokinins (Kinetin, Zeatin):</b><br/>&bull; Discovered by Skoog and Miller (1955). Promotes cytokinesis, overcomes apical dominance, delays leaf senescence (<b>Richmond-Lang Effect</b>), and drives organogenesis in plant tissue culture (High cytokinin/auxin ratio &rarr; shoot regeneration).<br/><br/><b>2. Ethylene (C<sub>2</sub>H<sub>4</sub>):</b><br/>&bull; Gaseous hormone (Cousins, 1910). Triggers <b>Fruit Ripening</b> and respiratory climacteric burst; breaks seed dormancy; commercial aqueous <b>Ethephon</b> used to ripen fruits uniformly and promote female flowering in cucurbits.<br/><br/><b style="color: #00E5FF;">3. Abscisic Acid (ABA - Stress Hormone):</b><br/>&bull; Inhibitor-B / Dormin. Induces rapid <b>Stomatal Closure</b> during drought stress; maintains seed dormancy and prevents precocious germination.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Discuss Plant Growth Curves, Growth Rates, and the Concepts of Plasticity and Heterophylly with diagrams.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Growth Kinetics:</b> Growth displays an S-shaped <b>Sigmoid Curve</b> featuring:<br/>&bull; <i>Lag Phase:</i> Initial slow establishment.<br/>&bull; <i>Log / Exponential Phase:</i> Rapid geometric cell division and tissue expansion.<br/>&bull; <i>Stationary Phase:</i> Deceleration due to limited nutrients and space.<br/><br/><b style="color: #00E5FF;">2. Plasticity:</b> The ability of an individual plant to develop distinct structural forms in response to different environmental stimuli.<br/><br/><b style="color: #00E5FF;">3. Heterophylly:</b> Presence of more than one leaf shape on the same plant:<br/>&bull; <i>Developmental Heterophylly:</i> Juvenile leaves differ from mature leaves in Cotton, Coriander, and Eucalyptus.<br/>&bull; <i>Environmental Heterophylly:</i> In <i>Ranunculus tripartitus</i> (Buttercup), submerged leaves are highly dissected, narrow ribbons (minimizing water drag), while aerial leaves are broad, flat, and floating (maximizing light capture).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Detail the ATP Balance Sheet for Complete Aerobic Oxidation of One Molecule of Glucose in a Plant Cell.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Glycolysis (Cytoplasm):</b><br/>&bull; Substrate phosphorylation: 4 ATP gross - 2 ATP invested = <b>2 ATP (net)</b>.<br/>&bull; 2 NADH produced &rarr; via ETS yields <b>6 ATP</b> (or 4 ATP if glycerol-phosphate shuttle is used).<br/><br/><b style="color: #00E5FF;">2. Link Reaction (Mitochondrial Matrix):</b><br/>&bull; 2 Pyruvate &rarr; 2 Acetyl-CoA + 2 CO<sub>2</sub> + 2 NADH &rarr; via ETS yields <b>6 ATP</b>.<br/><br/><b style="color: #00E5FF;">3. Krebs Cycle (Mitochondrial Matrix, 2 turns):</b><br/>&bull; Substrate phosphorylation: 2 GTP / <b>2 ATP</b>.<br/>&bull; 6 NADH &rarr; via ETS yields <b>18 ATP</b>.<br/>&bull; 2 FADH<sub>2</sub> &rarr; via ETS yields <b>4 ATP</b>.<br/><br/><b style="color: #00E5FF;">4. Grand Total:</b> 2 + 6 + 6 + 2 + 18 + 4 = <b>38 ATP</b> (or 36 ATP in some eukaryotic tissues).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Discuss the Factors Affecting Cellular Respiration in Plants: Internal and External Parameters.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Temperature:</b> Follows van 't Hoff's rule (Q<sub>10</sub> &approx; 2 between 0&deg;C and 30&deg;C); optimum is 30-35&deg;C; temperatures &gt;45&deg;C denature respiratory enzymes.<br/><b style="color: #00E5FF;">2. Oxygen Concentration:</b> Essential for aerobic respiration; below critical concentration (extinction point ~2%), plants switch to anaerobic fermentation (<b>Pasteur Effect</b>).<br/><b style="color: #00E5FF;">3. Carbon Dioxide Concentration:</b> High CO<sub>2</sub> inhibits respiration; utilized industrially in controlled-atmosphere storage to preserve apples and pears for months.<br/><b style="color: #00E5FF;">4. Protoplasmic Hydration:</b> Dry seeds with 10% water respire at near-zero dormant rates; water imbibition activates enzymes, surging respiration 1000-fold.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain the Chemiosmotic Mechanism of ATP Synthesis in Chloroplasts and Contrast it with Mitochondria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Proton Gradient in Chloroplast:</b><br/>Protons accumulate in the <b>Thylakoid Lumen</b> (creating low pH ~4.5) via three mechanisms:<br/>(a) Photolysis of water releases 4 H<sup>+</sup> directly into the lumen.<br/>(b) Plastoquinone (PQ) pumps protons from stroma into lumen across Cytochrome b<sub>6</sub>f.<br/>(c) NADP reductase removes protons from the stroma to form NADPH.<br/><br/><b style="color: #00E5FF;">2. ATP Generation:</b> Protons flow back into the <b>Stroma</b> through CF<sub>0</sub>-CF<sub>1</sub> ATP Synthase, generating ATP on the stroma side for the Calvin cycle.<br/><br/><b style="color: #00E5FF;">3. Mitochondria vs Chloroplast:</b> In mitochondria, protons are pumped <i>outward</i> into the intermembrane space and flow <i>inward</i> to matrix; in chloroplasts, protons are pumped <i>inward</i> into thylakoid lumen and flow <i>outward</i> to stroma.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Discuss the Synthesis of Sucrose and Starch from Triose Phosphates following the Calvin Cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Glyceraldehyde-3-phosphate (G3P) and DHAP exported from chloroplast to cytosol via a Pi-translocator:<br/>1. <b style="color: #00E5FF;">Sucrose Synthesis (Cytoplasm):</b> G3P + DHAP &rarr; Fructose-1,6-bisphosphate &rarr; Fructose-6-P &rarr; Glucose-1-P. Reacts with UTP to form UDP-Glucose. UDP-Glucose + Fructose-6-P &rarr; Sucrose-phosphate &rarr; <b>Sucrose (major translocated sugar in phloem)</b>.<br/>2. <b style="color: #00E5FF;">Starch Synthesis (Chloroplast Stroma):</b> During active daytime photosynthesis, triose phosphates remain in stroma: G3P &rarr; Glucose-1-P. Reacts with ATP to form ADP-Glucose. Starch synthase polymerizes ADP-Glucose into <b>Insoluble Starch granules (transient daylight storage)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain the Phenomenon of Apical Dominance in Plants: Physiological Basis and Hormonal Interactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Apical dominance is the phenomenon whereby the presence of an active terminal apical shoot bud inhibits the outgrowth of lateral axillary buds:<br/>1. <b style="color: #00E5FF;">Auxin Role:</b> Synthesized in the apical bud and transported basipetally in polar fashion. High auxin levels in the stem induce biosynthesis of Strigolactones, which suppress axillary bud growth.<br/>2. <b style="color: #00E5FF;">Cytokinin Antagonism:</b> Cytokinins synthesized in roots move acropetally and directly promote axillary bud cell division. High cytokinin levels overcome apical dominance.<br/>3. <b style="color: #00E5FF;">Decapitation:</b> Removing the terminal shoot bud eliminates the auxin source, altering the auxin/cytokinin ratio and triggering bushy lateral branching.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Discuss the Physiological Mechanism of Stomatal Opening and Closing: Complete K+ Flux and Proton Pump Model.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Stomatal Opening (Daytime / Light):</b><br/>&bull; Blue light activates electrogenic <b>H<sup>+</sup>-ATPase proton pumps</b> on guard cell plasma membranes.<br/>&bull; Protons (H<sup>+</sup>) are actively pumped out into subsidiary cells, creating an electrical membrane potential (-120 mV).<br/>&bull; Voltage-gated inward potassium channels open; <b>K<sup>+</sup> and Cl<sup>-</sup> ions flood into guard cells</b>.<br/>&bull; Starch is metabolized to PEP, which fixes CO<sub>2</sub> via PEPcase into Malate<sup>2-</sup>.<br/>&bull; Potassium malate accumulation severely depresses osmotic potential (&Psi;<sub>s</sub>) and water potential (&Psi;<sub>w</sub>).<br/>&bull; Water enters guard cells by endosmosis; guard cells swell turgidly, pulling stomatal pore open.<br/><br/><b style="color: #00E5FF;">2. Stomatal Closing (Darkness / Water Stress):</b><br/>&bull; In darkness or drought, <b>ABA</b> binds guard cell receptors, activating Ca<sup>2+</sup> influx.<br/>&bull; Depolarization opens outward K<sup>+</sup> channels; K<sup>+</sup>, Cl<sup>-</sup>, and malate exit rapidly.<br/>&bull; Water leaves guard cells by exosmosis; guard cells become flaccid, closing the pore.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the Phenomenon of Senescence in Plants: Types, Hormonal Regulation, and Programmed Cell Death.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Senescence is the genetically programmed, developmental deterioration of plant organs leading to death:<br/>1. <b style="color: #00E5FF;">Types:</b> Overall senescence (annuals like wheat), Top senescence (perennial grasses dying to underground rhizomes), Deciduous leaf senescence (autumn leaf drop), Sequential senescence (older leaves at base die sequentially).<br/>2. <b style="color: #00E5FF;">Biochemical Changes:</b> Rapid degradation of chlorophyll (yellowing / chlorosis), breakdown of proteins into amino acids, nucleic acid degradation, and mobilization of nitrogen and phosphorus to young seeds.<br/>3. <b style="color: #00E5FF;">Hormonal Control:</b> Accelerated by <b>Ethylene and Abscisic Acid</b>; delayed by <b>Cytokinins and Auxins</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the Ecological and Agricultural Significance of C4 Photosynthesis in Global Climate Adaptation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Heat &amp; Drought Resilience:</b> C<sub>4</sub> plants operate at maximum photosynthetic efficiency between 30&deg;C and 45&deg;C where C<sub>3</sub> plants suffer severe photorespiratory collapse.<br/>2. <b style="color: #00E5FF;">Water-Use Efficiency:</b> Because PEPcase fixes CO<sub>2</sub> rapidly even at low internal concentrations, C<sub>4</sub> plants keep stomata partially closed, losing only ~250-300 g of water per g of CO<sub>2</sub> fixed (compared to 500-800 g in C<sub>3</sub> plants).<br/>3. <b style="color: #00E5FF;">Nitrogen-Use Efficiency:</b> C<sub>4</sub> plants require 30-50% less RuBisCO protein than C<sub>3</sub> plants, allowing higher photosynthetic yields in nitrogen-deficient tropical soils.<br/>4. <b style="color: #00E5FF;">Genetic Engineering:</b> Major international initiatives are transferring C<sub>4</sub> genes (PEPcase, PPDK, Kranz anatomy) into C<sub>3</sub> Rice to boost global grain yields by 50%.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the Practical Applications of Plant Growth Regulators in Modern Agriculture and Horticulture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Auxins (IBA, 2,4-D):</b> Clonal propagation via stem cutting rooting; broadleaf weed eradication; induction of seedless tomatoes.<br/>2. <b style="color: #00E5FF;">Gibberellins (GA<sub>3</sub>):</b> Extending grape pedicels (prevents fungal mold); increasing sugarcane tonnage; breaking seed dormancy; malting barley in brewing.<br/>3. <b style="color: #00E5FF;">Cytokinins:</b> Micropropagation organogenesis in plant tissue culture; prolonging shelf-life of green vegetables and cut flowers.<br/>4. <b style="color: #00E5FF;">Ethylene (Ethephon):</b> Synchronized fruit ripening in bananas, citrus, and pineapples; promoting female flowering in cucurbits.<br/>5. <b style="color: #00E5FF;">Abscisic Acid:</b> Antitranspirant spray to protect nursery seedlings during transplanting.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an Exhaustive Master Synthesis Matrix correlating Cellular Respiration, Photosynthesis, Plant Growth, and Plant Growth Regulators.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Cellular Respiration:</b> Glycolysis (cytoplasm, 2 ATP net, 2 NADH) &rarr; Link Reaction (matrix, 2 Acetyl-CoA, 2 NADH) &rarr; Krebs Cycle (matrix, 6 NADH, 2 FADH<sub>2</sub>, 2 ATP) &rarr; ETS &amp; Chemiosmosis (inner membrane Complexes I-V, 34 ATP via proton motive force down F<sub>0</sub>-F<sub>1</sub>). Amphibolic pathway; RQ values (Glucose=1.0, Fats=0.7, Anaerobic=&infin;).<br/><br/><b style="color: #00E5FF;">2. Photosynthesis:</b> Light Reactions (Thylakoids: PS II P680 photolysis of H<sub>2</sub>O &rarr; Z-scheme electron transport &rarr; PS I P700 &rarr; ATP + NADPH) &bull; Dark Reactions (Stroma: C<sub>3</sub> Calvin cycle with RuBisCO vs C<sub>4</sub> Hatch-Slack with Kranz anatomy and PEPcase; C<sub>2</sub> Photorespiration waste).<br/><br/><b style="color: #00E5FF;">3. Growth &amp; Development:</b> Arithmetic (L<sub>t</sub>=L<sub>0</sub>+rt) vs Geometric (W<sub>1</sub>=W<sub>0</sub>e<sup>rt</sup>); Sigmoid growth curve; Differentiation &hArr; Dedifferentiation &hArr; Redifferentiation; Plasticity &amp; Heterophylly.<br/><br/><b style="color: #00E5FF;">4. Master PGR Spectrum:</b> Promoters (Auxin: apical dominance &amp; rooting; Gibberellin: bolting &amp; stem extension; Cytokinin: cell division &amp; anti-senescence) vs Inhibitors (Ethylene: fruit ripening climacteric; ABA: stomatal closure stress response).
    </div>
  </div>

</div>
`;

export const c11Bot4Mcqs = [
  {
    "id": "c11-bot-4-mcq-1",
    "question": "The net yield of ATP produced directly during Glycolysis per glucose molecule is:",
    "options": [
      "A):   1 ATP",
      "B):   2 ATP",
      "C):   4 ATP",
      "D):   36 ATP"
    ],
    "correctAnswer": "b",
    "explanation": "Glycolysis produces 4 ATP gross by substrate-level phosphorylation but consumes 2 ATP, leaving a net gain of 2 ATP."
  },
  {
    "id": "c11-bot-4-mcq-2",
    "question": "The enzyme that catalyzes the pacemaker (rate-limiting) committed step of Glycolysis is:",
    "options": [
      "A):   Hexokinase",
      "B):   Phosphofructokinase (PFK)",
      "C):   Aldolase",
      "D):   Pyruvate kinase"
    ],
    "correctAnswer": "b",
    "explanation": "Phosphofructokinase (PFK) converts Fructose-6-phosphate to Fructose-1,6-bisphosphate, serving as the master regulatory pacemaker."
  },
  {
    "id": "c11-bot-4-mcq-3",
    "question": "In the Krebs cycle, the enzyme Succinate Dehydrogenase is uniquely located in:",
    "options": [
      "A):   Mitochondrial matrix",
      "B):   Outer mitochondrial membrane",
      "C):   Inner mitochondrial membrane (Complex II)",
      "D):   Cytoplasm"
    ],
    "correctAnswer": "c",
    "explanation": "Succinate Dehydrogenase is embedded in the inner mitochondrial membrane, directly linked to the ETS as Complex II."
  },
  {
    "id": "c11-bot-4-mcq-4",
    "question": "The terminal electron acceptor in the mitochondrial electron transport system (Complex IV) is:",
    "options": [
      "A):   Cytochrome c",
      "B):   Ubiquinone",
      "C):   Molecular Oxygen (O<sub>2</sub>)",
      "D):   NAD<sup>+</sup>"
    ],
    "correctAnswer": "c",
    "explanation": "Complex IV (Cytochrome c oxidase) transfers electrons to terminal O<sub>2</sub>, combining with protons to form water."
  },
  {
    "id": "c11-bot-4-mcq-5",
    "question": "According to Peter Mitchell's chemiosmotic hypothesis, ATP synthesis is driven by:",
    "options": [
      "A):   Direct hydrolysis of GTP",
      "B):   An electrochemical proton gradient across the inner membrane",
      "C):   Diffusion of glucose",
      "D):   Heat released by glycolysis"
    ],
    "correctAnswer": "b",
    "explanation": "The proton motive force generated by proton pumping through ETS drives protons through F<sub>0</sub>-F<sub>1</sub> ATP Synthase."
  },
  {
    "id": "c11-bot-4-mcq-6",
    "question": "The Respiratory Quotient (RQ) for fats like Tripalmitin is approximately:",
    "options": [
      "A):   1.0",
      "B):   0.7",
      "C):   0.9",
      "D):   Infinity"
    ],
    "correctAnswer": "b",
    "explanation": "Fats require more oxygen for oxidation than the volume of CO<sub>2</sub> released; for Tripalmitin, 102 CO<sub>2</sub> / 145 O<sub>2</sub> &approx; 0.7."
  },
  {
    "id": "c11-bot-4-mcq-7",
    "question": "The photolysis of water in Photosystem II requires which essential mineral ions?",
    "options": [
      "A):   Fe<sup>2+</sup> and Cu<sup>2+</sup>",
      "B):   Mn<sup>2+</sup> and Cl<sup>-</sup>",
      "C):   Mg<sup>2+</sup> and Zn<sup>2+</sup>",
      "D):   K<sup>+</sup> and Na<sup>+</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "Manganese (Mn<sup>2+</sup>) and chloride (Cl<sup>-</sup>) are vital cofactors for the water-splitting Oxygen Evolving Complex in PS II."
  },
  {
    "id": "c11-bot-4-mcq-8",
    "question": "Which of the following products is formed during Cyclic Photophosphorylation?",
    "options": [
      "A):   ATP only",
      "B):   ATP and NADPH",
      "C):   NADPH and O<sub>2</sub>",
      "D):   Glucose"
    ],
    "correctAnswer": "a",
    "explanation": "Cyclic photophosphorylation involves only PS I and produces ATP only; no NADPH is formed and no O<sub>2</sub> is evolved."
  },
  {
    "id": "c11-bot-4-mcq-9",
    "question": "The primary CO<sub>2</sub> acceptor molecule in the Calvin (C<sub>3</sub>) Cycle is:",
    "options": [
      "A):   PEP (Phosphoenolpyruvate)",
      "B):   RuBP (Ribulose-1,5-bisphosphate)",
      "C):   OAA (Oxaloacetate)",
      "D):   3-PGA"
    ],
    "correctAnswer": "b",
    "explanation": "RuBP (a 5-carbon ketose sugar) fixes CO<sub>2</sub> via RuBisCO to form 3-Phosphoglyceric acid (3-PGA)."
  },
  {
    "id": "c11-bot-4-mcq-10",
    "question": "The first stable compound formed in C<sub>4</sub> plants following CO<sub>2</sub> fixation is:",
    "options": [
      "A):   3-Phosphoglycerate (3C)",
      "B):   Oxaloacetate (4C)",
      "C):   Malate (4C)",
      "D):   Aspartate (4C)"
    ],
    "correctAnswer": "b",
    "explanation": "PEPcase in mesophyll cells fixes CO<sub>2</sub> into Phosphoenolpyruvate (3C) to form Oxaloacetic acid (4C)."
  },
  {
    "id": "c11-bot-4-mcq-11",
    "question": "Kranz anatomy in leaves is an evolutionary hallmark of which group of plants?",
    "options": [
      "A):   C<sub>3</sub> plants",
      "B):   C<sub>4</sub> plants (e.g., Maize, Sugarcane)",
      "C):   Hydrophytes",
      "D):   Bryophytes"
    ],
    "correctAnswer": "b",
    "explanation": "C<sub>4</sub> plants possess Kranz anatomy featuring prominent bundle sheath cells surrounded by mesophyll cells."
  },
  {
    "id": "c11-bot-4-mcq-12",
    "question": "Photorespiration occurs when the enzyme RuBisCO binds with:",
    "options": [
      "A):   CO<sub>2</sub> instead of O<sub>2</sub>",
      "B):   O<sub>2</sub> instead of CO<sub>2</sub>",
      "C):   Nitrogen gas",
      "D):   Water"
    ],
    "correctAnswer": "b",
    "explanation": "RuBisCO has oxygenase activity; at high O<sub>2</sub> and temperature, it oxygenates RuBP to phosphoglycolate and 3-PGA."
  },
  {
    "id": "c11-bot-4-mcq-13",
    "question": "The three organelles that cooperate in the photorespiratory C<sub>2</sub> cycle are:",
    "options": [
      "A):   Chloroplast, Golgisome, Endoplasmic reticulum",
      "B):   Chloroplast, Peroxisome, Mitochondria",
      "C):   Mitochondria, Ribosome, Vacuole",
      "D):   Nucleus, Chloroplast, Lysosome"
    ],
    "correctAnswer": "b",
    "explanation": "Photorespiration shuttles metabolites sequentially through Chloroplast &rarr; Peroxisome &rarr; Mitochondria."
  },
  {
    "id": "c11-bot-4-mcq-14",
    "question": "Who formulated the Law of Limiting Factors in 1905?",
    "options": [
      "A):   Melvin Calvin",
      "B):   F.F. Blackman",
      "C):   Cornelius van Niel",
      "D):   Julius von Sachs"
    ],
    "correctAnswer": "b",
    "explanation": "F.F. Blackman stated that when a process depends on multiple factors, its rate is dictated by the slowest factor."
  },
  {
    "id": "c11-bot-4-mcq-15",
    "question": "The mathematical formula representing geometric exponential growth is:",
    "options": [
      "A):   L<sub>t</sub> = L<sub>0</sub> + rt",
      "B):   W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup>",
      "C):   P = 2n",
      "D):   E = mc<sup>2</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "Geometric growth follows W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup>, where r is the relative growth rate and e is base of natural log."
  },
  {
    "id": "c11-bot-4-mcq-16",
    "question": "The phenomenon where a differentiated cell regains mitotic division capacity (e.g., cork cambium formation) is called:",
    "options": [
      "A):   Differentiation",
      "B):   Dedifferentiation",
      "C):   Redifferentiation",
      "D):   Senescence"
    ],
    "correctAnswer": "b",
    "explanation": "Dedifferentiation is the process whereby mature non-dividing permanent cells revert to an active meristematic state."
  },
  {
    "id": "c11-bot-4-mcq-17",
    "question": "Apical dominance, where the terminal bud suppresses the outgrowth of axillary lateral buds, is maintained by:",
    "options": [
      "A):   Gibberellin",
      "B):   Auxin",
      "C):   Cytokinin",
      "D):   Ethylene"
    ],
    "correctAnswer": "b",
    "explanation": "Auxin produced at the shoot tip moves basipetally to maintain apical dominance over lateral buds."
  },
  {
    "id": "c11-bot-4-mcq-18",
    "question": "Which synthetic auxin is extensively utilized as a selective herbicide to eliminate broad-leaved weeds?",
    "options": [
      "A):   IAA",
      "B):   2,4-D",
      "C):   IBA",
      "D):   GA<sub>3</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "2,4-D (2,4-Dichlorophenoxyacetic acid) selectively kills broad-leaved dicot weeds without harming monocot crops."
  },
  {
    "id": "c11-bot-4-mcq-19",
    "question": "Bakanae (foolish seedling) disease in rice led directly to the discovery of:",
    "options": [
      "A):   Auxins",
      "B):   Gibberellins",
      "C):   Cytokinins",
      "D):   Abscisic acid"
    ],
    "correctAnswer": "b",
    "explanation": "E. Kurosawa discovered gibberellins from the fungal pathogen Gibberella fujikuroi causing foolish seedling disease."
  },
  {
    "id": "c11-bot-4-mcq-20",
    "question": "Bolting, the rapid internode elongation prior to flowering in rosette plants like cabbage, is induced by:",
    "options": [
      "A):   Auxin",
      "B):   Gibberellin",
      "C):   Abscisic acid",
      "D):   Ethylene"
    ],
    "correctAnswer": "b",
    "explanation": "Gibberellins trigger rapid stem and internode extension (bolting) in cabbage, beet, and carrots."
  },
  {
    "id": "c11-bot-4-mcq-21",
    "question": "The delay of leaf senescence by nutrient mobilization under the influence of Cytokinins is known as the:",
    "options": [
      "A):   Pasteur Effect",
      "B):   Richmond-Lang Effect",
      "C):   Warburg Effect",
      "D):   Emerson Effect"
    ],
    "correctAnswer": "b",
    "explanation": "The Richmond-Lang effect describes the significant retardation of leaf senescence achieved by cytokinins."
  },
  {
    "id": "c11-bot-4-mcq-22",
    "question": "The only naturally occurring gaseous plant growth regulator is:",
    "options": [
      "A):   Auxin",
      "B):   Gibberellin",
      "C):   Ethylene",
      "D):   Abscisic acid"
    ],
    "correctAnswer": "c",
    "explanation": "Ethylene (C<sub>2</sub>H<sub>4</sub>) is the sole gaseous plant hormone, regulating fruit ripening and senescence."
  },
  {
    "id": "c11-bot-4-mcq-23",
    "question": "During severe drought and water stress, which hormone causes rapid stomatal closure in leaves?",
    "options": [
      "A):   Auxin",
      "B):   Cytokinin",
      "C):   Abscisic Acid (ABA)",
      "D):   Gibberellin"
    ],
    "correctAnswer": "c",
    "explanation": "Abscisic acid (the stress hormone) stimulates ion efflux from guard cells, causing flaccidity and rapid stomatal closure."
  },
  {
    "id": "c11-bot-4-mcq-24",
    "question": "The presence of two different forms of leaves on the same plant (Heterophylly) is an example of:",
    "options": [
      "A):   Senescence",
      "B):   Plasticity",
      "C):   Apical dominance",
      "D):   Vernalization"
    ],
    "correctAnswer": "b",
    "explanation": "Plasticity is the capacity of plants to alter developmental morphology in response to environmental cues."
  },
  {
    "id": "c11-bot-4-mcq-25",
    "question": "The promotion of flowering by a period of low-temperature chilling exposure is called:",
    "options": [
      "A):   Photoperiodism",
      "B):   Vernalization",
      "C):   Dormancy",
      "D):   Stratification"
    ],
    "correctAnswer": "b",
    "explanation": "Vernalization is the low-temperature (chilling) requirement for acquiring floral competence."
  }
];
