// Class 11 Chemistry Chapter 8 - ORGANIC CHEMISTRY-SOME BASIC PRINCIPLES AND TECHNIQUES
// High-Level Full Reference Book Content (PW / Vedantu / RD Sharma / Unacademy Standard)

export const c11Chem8HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(255, 0, 127, 0.05); border: 1.5px solid #FF007F; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF007F; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: #FF007F; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Chapter 8: ORGANIC CHEMISTRY-SOME BASIC PRINCIPLES AND TECHNIQUES</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">1. Organic Chemistry:</b> Branch of chemistry studying covalent carbon compounds, excluding simple oxides, carbonates, and cyanides.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">2. Catenation:</b> Unique self-linking property of carbon atoms to form long open chains or cyclic rings via stable C-C covalent bonds.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">3. Functional Group:</b> Specific atom or group of atoms in an organic molecule responsible for its characteristic physical and chemical properties.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">4. Homologous Series:</b> Series of organic compounds with same functional group, similar chemical properties, and adjacent members differing by -CH<sub>2</sub>- (14 u).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">5. IUPAC Nomenclature:</b> Systematic international rules for naming organic compounds based on Root Word, Primary/Secondary Prefixes, and Suffixes.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">6. Structural Isomerism:</b> Compounds having same molecular formula but different structural arrangements (Chain, Position, Functional Group, Metamerism, Tautomerism).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">7. Inductive Effect (I):</b> Permanent polarization of a single σ-bond due to difference in electronegativity of adjacent atoms transmitted along carbon chain.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">8. Electromeric Effect (E):</b> Temporary complete transfer of shared π-electron pair to one of the bonded atoms in presence of an attacking reagent.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">9. Resonance Effect (R / M):</b> Polarity produced in a molecule by interaction of two π-bonds or a π-bond and lone pair of electrons on adjacent atoms.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">10. Hyperconjugation:</b> Delocalization of σ-electrons of C-H bond of an alkyl group directly attached to an unsaturated system or carbocation (No-bond resonance).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">11. Homolytic Fission:</b> Symmetrical cleavage of a covalent bond where each bonded atom retains one electron, forming neutral Free Radicals.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">12. Heterolytic Fission:</b> Unsymmetrical cleavage of a covalent bond where the more electronegative atom retains both shared electrons, forming Carbocation and Carbanion.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">13. Carbocation:</b> Positively charged carbon intermediate containing 6 valence electrons and sp<sup>2</sup> planar geometry (Stability: 3° > 2° > 1° > CH<sub>3</sub><sup>+</sup>).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">14. Carbanion:</b> Negatively charged carbon species containing 8 valence electrons with a lone pair and sp<sup>3</sup> pyramidal geometry (Stability: CH<sub>3</sub><sup>-</sup> > 1° > 2° > 3°).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">15. Free Radical:</b> Neutral chemical species containing an unpaired valence electron generated by homolytic cleavage (Stability: 3° > 2° > 1° > CH<sub>3</sub><sup>•</sup>).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">16. Electrophile (E<sup>+</sup>):</b> Electron-deficient species that accepts an electron pair during chemical reaction (Lewis acids like H<sup>+</sup>, NO<sub>2</sub><sup>+</sup>, BF<sub>3</sub>, AlCl<sub>3</sub>).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">17. Nucleophile (Nu<sup>-</sup>):</b> Electron-rich species containing lone pairs capable of donating an electron pair (Lewis bases like OH<sup>-</sup>, CN<sup>-</sup>, NH<sub>3</sub>, H<sub>2</sub>O).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">18. Steam Distillation:</b> Separation of steam-volatile liquids insoluble in water, boiling below their normal boiling point.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">19. Chromatography:</b> Separation method based on differential partitioning of mixture components between Stationary Phase and Mobile Phase.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">20. Lassaigne's Test:</b> Qualitative detection method where organic elements (N, S, Halogens) are converted into ionic sodium salts by sodium fusion.
      </div>
    </div>
  </div>

  <!-- EXACT SYLLABUS HEADING 1 WORD-FOR-WORD -->
  <h2 style="color: #FF007F; margin-top: 10px; font-size: 20px; font-weight: bold;">1. General Introduction to Organic Chemistry, Classification and IUPAC Nomenclature of Organic Compounds</h2>
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMyZDAwMmQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0ic2hhZG93Ij4KICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjQiIHN0ZERldmlhdGlvbj0iNiIgZmxvb2QtY29sb3I9IiNGRjAwN0YiIGZsb29kLW9wYWNpdHk9IjAuNSIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiByeD0iMTYiIGZpbGw9InVybCgjYmdHcmFkMSkiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjAwN0YiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4zRCBIeWJyaWRpemF0aW9uICZhbXA7IE9yZ2FuaWMgTW9sZWN1bGFyIEdlb21ldHJ5IEFyY2hpdGVjdHVyZTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIyMTAiIGhlaWdodD0iMzAwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNwwrMgVGV0cmFoZWRyYWwgKDEwOS41wrApPC90ZXh0PgogICAgPGNpcmNsZSBjeD0iMTA1IiBjeT0iMTQwIiByPSIyMiIgZmlsbD0iI0ZGMDA3RiIvPgogICAgPHRleHQgeD0iMTA1IiB5PSIxNDYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzwvdGV4dD4KICAgIDxsaW5lIHgxPSIxMDUiIHkxPSIxMTgiIHgyPSIxMDUiIHkyPSI2OCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMuNSIvPgogICAgPGNpcmNsZSBjeD0iMTA1IiBjeT0iNjIiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjY3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iMTI1IiB5MT0iMTUwIiB4Mj0iMTY1IiB5Mj0iMTg1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICA8Y2lyY2xlIGN4PSIxNzIiIGN5PSIxOTEiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxNzIiIHk9IjE5NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHBvbHlnb24gcG9pbnRzPSI5MCwxNTAgNDUsMTg1IDU1LDE5NSIgZmlsbD0iI0ZGMDA3RiIvPgogICAgPGNpcmNsZSBjeD0iNDUiIGN5PSIxOTEiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSI0NSIgeT0iMTk2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iOTUiIHkxPSIxMzAiIHgyPSI2NSIgeTI9IjEwMCIgc3Ryb2tlPSIjQUFBIiBzdHJva2UtZGFzaGFycmF5PSIzLDMiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGNpcmNsZSBjeD0iNTgiIGN5PSI5MyIgcj0iMTQiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjU4IiB5PSI5OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIENI4oKELCBFdGhhbmUgQ+KCgkjigoY8L3RleHQ+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQgz4MtYm9uZHMgfCAwIM+ALWJvbmRzPC90ZXh0PgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTUsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMjEwIiBoZWlnaHQ9IjMwMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDI1NSwwLDEyNywwLjA2KSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTA1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY2NkM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zcMKyIFRyaWdvbmFsIFBsYW5hciAoMTIwwrApPC90ZXh0PgogICAgPGNpcmNsZSBjeD0iNzAiIGN5PSIxNDAiIHI9IjIwIiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8dGV4dCB4PSI3MCIgeT0iMTQ2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+CiAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxNDAiIHI9IjIwIiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8dGV4dCB4PSIxNDAiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DPC90ZXh0PgogICAgPGxpbmUgeDE9IjkwIiB5MT0iMTMzIiB4Mj0iMTIwIiB5Mj0iMTMzIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGxpbmUgeDE9IjkwIiB5MT0iMTQ3IiB4Mj0iMTIwIiB5Mj0iMTQ3IiBzdHJva2U9IiNGRjY2QzQiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGxpbmUgeDE9IjU1IiB5MT0iMTI1IiB4Mj0iMzAiIHkyPSI5MCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgIDxjaXJjbGUgY3g9IjIzIiBjeT0iODIiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIyMyIgeT0iODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSI1NSIgeTE9IjE1NSIgeDI9IjMwIiB5Mj0iMTkwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGNpcmNsZSBjeD0iMjMiIGN5PSIxOTgiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIyMyIgeT0iMjAyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iMTU1IiB5MT0iMTI1IiB4Mj0iMTgwIiB5Mj0iOTAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODciIGN5PSI4MiIgcj0iMTIiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjE4NyIgeT0iODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSIxNTUiIHkxPSIxNTUiIHgyPSIxODAiIHkyPSIxOTAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODciIGN5PSIxOTgiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxODciIHk9IjIwMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIEV0aGVuZSBD4oKCSOKChDwvdGV4dD4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMjc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MyDPgy1ib25kcyB8IDEgz4AtYm9uZDwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIxMCIgaGVpZ2h0PSIzMDAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c3AgTGluZWFyICgxODDCsCk8L3RleHQ+CiAgICA8Y2lyY2xlIGN4PSI3NSIgY3k9IjE0MCIgcj0iMTgiIGZpbGw9IiNGRjAwN0YiLz4KICAgIDx0ZXh0IHg9Ijc1IiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzwvdGV4dD4KICAgIDxjaXJjbGUgY3g9IjEzNSIgY3k9IjE0MCIgcj0iMTgiIGZpbGw9IiNGRjAwN0YiLz4KICAgIDx0ZXh0IHg9IjEzNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+CiAgICA8bGluZSB4MT0iOTMiIHkxPSIxMzIiIHgyPSIxMTciIHkyPSIxMzIiIHN0cm9rZT0iI0ZGNjZDNCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgIDxsaW5lIHgxPSI5MyIgeTE9IjE0MCIgeDI9IjExNyIgeTI9IjE0MCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgIDxsaW5lIHgxPSI5MyIgeTE9IjE0OCIgeDI9IjExNyIgeTI9IjE0OCIgc3Ryb2tlPSIjRkY2NkM0IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgPGxpbmUgeDE9IjU3IiB5MT0iMTQwIiB4Mj0iMzAiIHkyPSIxNDAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjE0MCIgcj0iMTIiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSIxNTMiIHkxPSIxNDAiIHgyPSIxODAiIHkyPSIxNDAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODgiIGN5PSIxNDAiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxODgiIHk9IjE0NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIEV0aHluZSBD4oKCSOKCgjwvdGV4dD4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMjc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MiDPgy1ib25kcyB8IDIgz4AtYm9uZHM8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.35); border: 1.5px solid #FF007F;" alt="3D Hybridization" /><p style="color: #FF007F; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 8.1: 3D Visualization of Carbon Hybridization (sp³, sp², sp) and Molecular Geometries</p></div>

  <p>Organic Chemistry is the study of carbon compounds containing hydrogen and other heteroatoms (O, N, S, P, Halogens). Carbon possesses a unique ability called <b>Catenation</b>—forming strong covalent bonds with other carbon atoms to yield open-chain (acyclic) and cyclic ring architectures. Carbon's tetravalency (4 valence electrons) allows it to form single (sp<sup>3</sup>, 109.5°), double (sp<sup>2</sup>, 120°), or triple bonds (sp, 180°).</p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(i) General Introduction, Tetravalency & Hybridization</h3>
  <p>• <b>Tetravalence of Carbon:</b> Carbon's ground state configuration is 1s<sup>2</sup> 2s<sup>2</sup> 2p<sub>x</sub><sup>1</sup> 2p<sub>y</sub><sup>1</sup>. Promotion of one 2s electron to 2p<sub>z</sub> orbital yields 4 unpaired electrons in excited state (2s<sup>1</sup> 2p<sub>x</sub><sup>1</sup> 2p<sub>y</sub><sup>1</sup> 2p<sub>z</sub><sup>1</sup>).<br>
  • <b>Hybridization & Geometry:</b><br>
  1. <i>sp<sup>3</sup> Hybridization:</i> 4 single σ-bonds, tetrahedral shape (109.5° angle, e.g. Methane CH<sub>4</sub>, Ethane C<sub>2</sub>H<sub>6</sub>).<br>
  2. <i>sp<sup>2</sup> Hybridization:</i> 3 σ-bonds + 1 π-bond, trigonal planar shape (120° angle, e.g. Ethene C<sub>2</sub>H<sub>4</sub>).<br>
  3. <i>sp Hybridization:</i> 2 σ-bonds + 2 π-bonds, linear shape (180° angle, e.g. Ethyne C<sub>2</sub>H<sub>2</sub>).</p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(ii) Classification of Organic Compounds & Isomerism</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b>Acyclic / Open-Chain Compounds (Aliphatic):</b> Straight or branched carbon chains (Alkanes, Alkenes, Alkynes).</li>
    <li><b>Alicyclic Compounds:</b> Ring structures exhibiting aliphatic chemical behavior (Cyclopropane, Cyclohexane).</li>
    <li><b>Aromatic Compounds:</b> Planar cyclic conjugated systems containing (4n + 2) π-electrons satisfying <b>Hückel's Rule</b> (Benzene, Toluene, Naphthalene, Phenol, Aniline).</li>
    <li><b>Heterocyclic Compounds:</b> Rings containing heteroatoms (N, O, S) alongside carbon (Pyridine, Furan, Thiophene, Pyrrole).</li>
    <li><b>Isomerism Types:</b><br>
    - <i>Chain Isomerism:</i> Different carbon skeletons (Pentane vs Isopentane).<br>
    - <i>Position Isomerism:</i> Different locants of same functional group (Propan-1-ol vs Propan-2-ol).<br>
    - <i>Functional Group Isomerism:</i> Different functional groups (Ethanol vs Methoxymethane).<br>
    - <i>Metamerism:</i> Different alkyl chains around polyvalent heteroatom (Ethoxyethane vs Methoxypropane).<br>
    - <i>Tautomerism:</i> Dynamic interconversion of keto and enol forms.</li>
  </ul>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(iii) IUPAC Rules for Nomenclature of Organic Compounds</h3>
  <p>The International Union of Pure and Applied Chemistry (IUPAC) name consists of 3 parts:<br>
  <span style="color: #FF007F; font-weight: bold; display: block; text-align: center; margin: 8px 0;">IUPAC Name = Secondary Prefix + Primary Prefix + Root Word + Primary Suffix + Secondary Suffix</span>
  <b>Functional Group Priority Order (Decreasing Seniority):</b><br>
  <b style="color: #FFF;">-COOH > -SO<sub>3</sub>H > -COOR > -COCl > -CONH<sub>2</sub> > -CN > -CHO > >C=O > -OH > -NH<sub>2</sub> > >C=C< > -C≡C-</b>.<br>
  <i>Example:</i> CH<sub>3</sub>-CH(OH)-CH<sub>2</sub>-COOH is named <b>3-Hydroxybutanoic acid</b> (-COOH gets locant 1; alcohol is named as prefix 'hydroxy').</p>


  <!-- EXACT SYLLABUS HEADING 2 WORD-FOR-WORD -->
  <h2 style="color: #FF007F; margin-top: 30px; font-size: 20px; font-weight: bold;">2. Electronic Displacement in a Covalent Bond: Inductive Effect, Electromeric Effect, Resonance and Hyper-Conjugation</h2>
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzMzAwMzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbGVjdHJvbmljIERpc3BsYWNlbWVudHMgJmFtcDsgT3JnYW5pYyBSZWFjdGlvbiBJbnRlcm1lZGlhdGVzIFN0YWJpbGl0eTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuKaoSBFbGVjdHJvbmljIERpc3BsYWNlbWVudCBFZmZlY3RzPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iNDUiIHgyPSIzMjAiIHkyPSI0NSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iNDAiIHk9IjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjEuIEluZHVjdGl2ZSBFZmZlY3QgKEkpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSI4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiAtSSAoV2l0aGRyYXdpbmcpOiAtTk/igoIgJmd0OyAtQ04gJmd0OyAtRiAmZ3Q7IC1DbCAmZ3Q7IC1CciAmZ3Q7IC1JPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjEwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiArSSAoRG9uYXRpbmcpOiAtQyhDSOKCgynigoMgJmd0OyAtQ0goQ0jigoMp4oKCICZndDsgLUPigoJI4oKFICZndDsgLUNI4oKDPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iMTIwIiB4Mj0iMzIwIiB5Mj0iMTIwIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNCIvPgogICAgPHRleHQgeD0iNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4yLiBSZXNvbmFuY2UgLyBNZXNvbWVyaWMgRWZmZWN0IChNL1IpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgK1IgKG8vcC1kaXJlY3RpbmcpOiAtT0gsIC1OSOKCgiwgLU9SLCAtaGFsb2dlbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIxNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgLVIgKG0tZGlyZWN0aW5nKTogLU5P4oKCLCAtQ04sIC1DSE8sIC1DT09IPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iMTk1IiB4Mj0iMzIwIiB5Mj0iMTk1IiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNCIvPgogICAgPHRleHQgeD0iNDAiIHk9IjIxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiBIeXBlcmNvbmp1Z2F0aW9uIChOby1Cb25kIFJlc29uYW5jZSk6PC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiBEZWxvY2FsaXphdGlvbiBvZiDPgyhDLUgpIGVsZWN0cm9ucyBpbnRvIGVtcHR5IHAvz4A8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iMjUzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCI+4oCiIE5vLiBvZiBTdHJ1Y3R1cmVzID0gTnVtYmVyIG9mIM6xLUh5ZHJvZ2VucyE8L3RleHQ+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPvCflKUgUmVhY3RpdmUgSW50ZXJtZWRpYXRlcyAmYW1wOyBTdGFiaWxpdHk8L3RleHQ+CiAgICA8cmVjdCB4PSIyNSIgeT0iNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzUiIHk9IjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjAwN0YiPkNhcmJvY2F0aW9ucyAoUuKBuiwgc3DCsiBQbGFuYXIsIDYgZeKBuyk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+QmVuenlsICZndDsgQWxseWwgJmd0OyAzwrAgJmd0OyAywrAgJmd0OyAxwrAgJmd0OyBDSOKCg+KBujwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIxMDciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNBQUEiPihTdGFiaWxpemVkIGJ5ICtJICZhbXA7IEh5cGVyY29uanVnYXRpb24gOSDOsS1IKTwvdGV4dD4KICAgIDxyZWN0IHg9IjI1IiB5PSIxMzAiIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzUiIHk9IjE1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIj5DYXJiYW5pb25zIChS4oG7LCBzcMKzIFB5cmFtaWRhbCwgOCBl4oG7KTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+Q0jigoPigbsgJmd0OyAxwrAgJmd0OyAywrAgJmd0OyAzwrA8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTg3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjQUFBIj4oRGVzdGFiaWxpemVkIGJ5ICtJIGFsa3lsIGdyb3Vwcyk8L3RleHQ+CiAgICA8cmVjdCB4PSIyNSIgeT0iMjEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjM1IiB5PSIyMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGMDA3RiI+RnJlZSBSYWRpY2FscyAoUuKAoiwgc3DCsiBQbGFuYXIsIDcgZeKBuyk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjI1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjPCsCAmZ3Q7IDLCsCAmZ3Q7IDHCsCAmZ3Q7IENI4oKD4oCiPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjI2NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iI0FBQSI+KEhvbW9seXRpYyBmaXNzaW9uIHByb2R1Y3QpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.35); border: 1.5px solid #FF007F;" alt="3D Intermediates" /><p style="color: #FF007F; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 8.2: 3D Electronic Displacement Mechanics &amp; Intermediate Stability Orders</p></div>

  <p>Chemical reactivity of organic molecules is dictated by electron distribution and electronic displacements within covalent bonds:</p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(i) Inductive Effect (+I / -I) & Electromeric Effect (+E / -E)</h3>
  <p>• <b>Inductive Effect (I):</b> Permanent shift of σ-electron density along a carbon chain caused by electronegative or electropositive substituents. Decreases rapidly with distance:<br>
  1. <i>-I Effect (Electron-Withdrawing):</i> -NO<sub>2</sub> > -CN > -F > -Cl > -Br > -I > -OCH<sub>3</sub> > -C<sub>6</sub>H<sub>5</sub>. Increases acidity of carboxylic acids!<br>
  2. <i>+I Effect (Electron-Donating):</i> -C(CH<sub>3</sub>)<sub>3</sub> (3°) > -CH(CH<sub>3</sub>)<sub>2</sub> (2°) > -CH<sub>2</sub>CH<sub>3</sub> (1°) > -CH<sub>3</sub> > -H. Increases stability of carbocations!<br>
  • <b>Electromeric Effect (E):</b> Temporary complete transfer of shared π-electron pair in presence of an attacking reagent (+E toward reagent, -E away from reagent).</p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(ii) Resonance Effect (Mesomeric Effect +R / -R)</h3>
  <p>Delocalization of π-electrons or lone pairs in conjugated systems producing intermediate <b>Resonance Hybrids</b>:<br>
  • <b>+R / +M Effect (Electron-Donating via Resonance):</b> Groups containing lone pairs (-OH, -OR, -NH<sub>2</sub>, -NR<sub>2</sub>, -halogen) increase electron density at <i>ortho</i> and <i>para</i> positions of benzene ring (activating, o/p-directing!).<br>
  • <b>-R / -M Effect (Electron-Withdrawing via Resonance):</b> Groups containing multiple bonds with electronegative atoms (-NO<sub>2</sub>, -CN, -CHO, -COOH, >C=O) decrease electron density at ortho/para positions (deactivating, meta-directing!).</p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(iii) Hyperconjugation (Baker-Nathan Effect)</h3>
  <p>Delocalization of σ-electrons of C<sub>α</sub>-H bonds of an alkyl group into an adjacent empty p-orbital of a carbocation or π-orbital of an alkene (<b>No-Bond Resonance</b>):<br>
  <span style="color: #FF007F; font-weight: bold; display: block; text-align: center; margin: 8px 0;">Number of Hyperconjugative Structures = Number of α-Hydrogen atoms</span>
  <i>Consequences:</i> Explains stability order of alkyl carbocations (3° with 9 α-H > 2° with 6 α-H > 1° with 3 α-H) and stability of substituted alkenes (Saytzeff rule!).</p>


  <!-- EXACT SYLLABUS HEADING 3 WORD-FOR-WORD -->
  <h2 style="color: #FF007F; margin-top: 30px; font-size: 20px; font-weight: bold;">3. Homolytic and Heterolytic Fission of a Covalent Bond, Free Radicals, Electrophiles, Nucleophiles, Carbocations and Carbanions</h2>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(i) Bond Cleavage: Homolytic vs Heterolytic Fission</h3>
  <p>• <b>Homolytic Fission:</b> Symmetrical cleavage where each atom takes 1 electron, forming neutral <b>Free Radicals (R<sup>•</sup>)</b>. Favored in non-polar solvents, UV light, or high T.<br>
  • <b>Heterolytic Fission:</b> Unsymmetrical cleavage where more electronegative atom takes both bonding electrons, forming charged ions: <b style="color: #FFF;">R-X ⟶ R<sup>+</sup> (Carbocation) + X<sup>-</sup> (Anion)</b>.</p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(ii) Reactive Intermediates (Carbocations, Carbanions, Free Radicals)</h3>
  <div style="background: rgba(255, 0, 127, 0.12); border: 1.5px solid #FF007F; border-radius: 10px; padding: 14px; margin: 15px 0;">
    <h4 style="color: #FF007F; margin: 0 0 8px 0; font-size: 17px; font-weight: bold;">Comparative Intermediate Stability Orders</h4>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
      <li>• <b>Carbocations (R<sup>+</sup>, sp<sup>2</sup> planar, 6 e<sup>-</sup>):</b> Stability: <b>Benzyl > Allyl > 3° (Tertiary) > 2° (Secondary) > 1° (Primary) > CH<sub>3</sub><sup>+</sup></b>. (Stabilized by +I and Hyperconjugation).</li>
      <li>• <b>Carbanions (R<sup>-</sup>, sp<sup>3</sup> pyramidal, 8 e<sup>-</sup>):</b> Stability: <b>CH<sub>3</sub><sup>-</sup> > 1° > 2° > 3°</b>. (Destabilized by +I electron-donating alkyl groups!).</li>
      <li>• <b>Free Radicals (R<sup>•</sup>, sp<sup>2</sup> planar, 7 e<sup>-</sup>):</b> Stability: <b>3° > 2° > 1° > CH<sub>3</sub><sup>•</sup></b>.</li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(iii) Attacking Reagents: Electrophiles (E<sup>+</sup>) vs Nucleophiles (Nu<sup>-</sup>)</h3>
  <p>• <b>Electrophiles (E<sup>+</sup>):</b> Electron-seeking Lewis acids with positive charge or electron deficiency (H<sup>+</sup>, NO<sub>2</sub><sup>+</sup>, Cl<sup>+</sup>, R<sup>+</sup>, BF<sub>3</sub>, AlCl<sub>3</sub>, FeCl<sub>3</sub>).<br>
  • <b>Nucleophiles (Nu<sup>-</sup>):</b> Nucleus-seeking Lewis bases with negative charge or unshared lone pairs (OH<sup>-</sup>, CN<sup>-</sup>, I<sup>-</sup>, RO<sup>-</sup>, H<sub>2</sub>O, NH<sub>3</sub>, R-NH<sub>2</sub>).</p>


  <!-- EXACT SYLLABUS HEADING 4 WORD-FOR-WORD -->
  <h2 style="color: #FF007F; margin-top: 30px; font-size: 20px; font-weight: bold;">4. Types of Organic Reactions</h2>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(i) Substitution Reactions (S<sub>N</sub>1, S<sub>N</sub>2, S<sub>E</sub>)</h3>
  <p>Reactions where an atom or group is replaced by another substituent:<br>
  • <b>Nucleophilic Substitution (S<sub>N</sub>1 vs S<sub>N</sub>2):</b><br>
  1. <i>S<sub>N</sub>1 (Unimolecular):</i> 2-step mechanism via carbocation intermediate. Rate = k[R-X]. Order of reactivity: 3° > 2° > 1°. Results in <b>Racemization</b>.<br>
  2. <i>S<sub>N</sub>2 (Bimolecular):</i> 1-step concerted mechanism via transition state. Rate = k[R-X][Nu<sup>-</sup>]. Order of reactivity: 1° > 2° > 3°. Results in <b>Walden Inversion</b>.<br>
  • <b>Electrophilic Aromatic Substitution (S<sub>E</sub>Ar):</b> Nitration, Halogenation, Sulfonation, Friedel-Crafts Alkylation/Acylation of Benzene.</p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(ii) Addition & Elimination Reactions</h3>
  <p>• <b>Addition Reactions:</b> Unsaturated double/triple bonds convert into saturated single bonds (Electrophilic addition to alkenes following <b>Markovnikov's Rule</b>; Anti-Markovnikov peroxide effect).<br>
  • <b>Elimination Reactions (E1 & E2):</b> Removal of two atoms/groups from adjacent carbons forming double bond (Dehydration of alcohols, Dehydrohalogenation of alkyl halides following <b>Saytzeff Rule</b>—more substituted alkene is major product!).</p>


  <!-- EXACT SYLLABUS HEADING 5 WORD-FOR-WORD -->
  <h2 style="color: #FF007F; margin-top: 30px; font-size: 20px; font-weight: bold;">5. Methods of Purification, Qualitative and Quantitative Analysis</h2>
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMyYjAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PcmdhbmljIFB1cmlmaWNhdGlvbiAmYW1wOyBRdWFudGl0YXRpdmUgQW5hbHlzaXMgTWFzdGVyIEFyY2hpdGVjdHVyZTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIyMzAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxMTUiIHk9IjI4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuKal++4jyBEaXN0aWxsYXRpb24gVGVjaG5pcXVlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgU2ltcGxlIERpc3RpbGxhdGlvbjo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5MaXF1aWRzIHdpdGggzpRiLnAuICZndDsgMzAgwrBDLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIEZyYWN0aW9uYWwgRGlzdGlsbGF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5GcmFjdGlvbmF0aW5nIGNvbHVtbiAozpRiLnAuICZsdDsgMzDCsEMpLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIFN0ZWFtIERpc3RpbGxhdGlvbjo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+U3RlYW0tdm9sYXRpbGUgJmFtcDsgd2F0ZXItaW5zb2x1YmxlPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjE3NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPihlLmcuIEFuaWxpbmUsIEVzc2VudGlhbCBvaWxzKS48L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMjA1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBWYWN1dW0gRGlzdGlsbGF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5SZWR1Y2VkIHByZXNzdXJlIGZvciBsaXF1aWRzPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIzNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPmRlY29tcG9zaW5nIGF0IG5vcm1hbCBiLnAuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjI1MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPihlLmcuIEdseWNlcm9sIGF0IDI5MCDCsEMpLjwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg1LCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIzMCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+nqiBDaHJvbWF0b2dyYXBoeSAmYW1wOyBSZjwvdGV4dD4KICAgIDxyZWN0IHg9Ijc1IiB5PSI0OCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGRiIgcng9IjQiIHN0cm9rZT0iIzg4OCIvPgogICAgPGxpbmUgeDE9Ijc1IiB5MT0iMTgwIiB4Mj0iMTU1IiB5Mj0iMTgwIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9Ijc1IiB5MT0iNjUiIHgyPSIxNTUiIHkyPSI2NSIgc3Ryb2tlPSIjMDBDODUzIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjE4MCIgcj0iNCIgZmlsbD0iIzg4OCIvPgogICAgPGNpcmNsZSBjeD0iMTE1IiBjeT0iMTEwIiByPSI1IiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8bGluZSB4MT0iMTY1IiB5MT0iMTgwIiB4Mj0iMTY1IiB5Mj0iNjUiIHN0cm9rZT0iIzAwQzg1MyIgc3Ryb2tlLWRhc2hhcnJheT0iMiwyIi8+CiAgICA8dGV4dCB4PSIxNzIiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMwMEM4NTMiPlNvbHZlbnQ8L3RleHQ+CiAgICA8bGluZSB4MT0iNjUiIHkxPSIxODAiIHgyPSI2NSIgeTI9IjExMCIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2UtZGFzaGFycmF5PSIyLDIiLz4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxNDgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkYwMDdGIj5Db21wb3VuZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJfZiBGb3JtdWxhOjwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIyMzUiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTUiIHJ4PSI2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+CiAgICA8dGV4dCB4PSIxMTUiIHk9IjI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRpc3RhbmNlIGJ5IENvbXBvdW5kPC90ZXh0PgogICAgPGxpbmUgeDE9IjM1IiB5MT0iMjYyIiB4Mj0iMTk1IiB5Mj0iMjYyIiBzdHJva2U9IiNGRkYiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGlzdGFuY2UgYnkgU29sdmVudCBGcm9udDwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIzMCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+TiiBRdWFudGl0YXRpdmUgRXN0aW1hdGlvbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5MaWViaWcgTWV0aG9kIChDICZhbXA7IEgpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSI3MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPuKAoiAlQyA9ICgxMi80NCkgw5cgKG1fQ0/igoIvbSkgw5cgMTAwPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+4oCiICVIID0gKDIvMTgpIMOXIChtX0jigoJPL20pIMOXIDEwMDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+S2plbGRhaGwgTWV0aG9kICglTik6PC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEzOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPuKAoiAlTiA9ICgxLjQgw5cgTiDDlyBWKSAvIG08L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMTY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPkR1bWFzIE1ldGhvZCAoJU4pOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj7igKIgJU4gPSAoMjgvMjI0MDApIMOXIChWX1NUUC9tKSDDlyAxMDA8L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMjE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPkNhcml1cyBNZXRob2QgKCVYICZhbXA7ICVTKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+4oCiICVYID0gKEF0LlcvQWdYKSDDlyAobV9BZ1gvbSkgw5cgMTAwPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjI1MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPuKAoiAlUyA9ICgzMi8yMzMpIMOXIChtX0JhU0/igoQvbSkgw5cgMTAwPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.35); border: 1.5px solid #FF007F;" alt="3D Distillation & Chromatography" /><p style="color: #FF007F; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 8.3: 3D Distillation Setup, TLC Chromatography R_f Mechanics &amp; Quantitative Estimation</p></div>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(i) Purification Techniques for Organic Compounds</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b>Crystallization:</b> Based on difference in solubility of organic compound and impurities in hot vs cold solvent.</li>
    <li><b>Sublimation:</b> Separates sublimable organic solids (Naphthalene, Camphor, Benzoic Acid) from non-sublimable impurities.</li>
    <li><b>Distillation Methods:</b><br>
    - <i>Simple Distillation:</i> Liquids boiling >30°C apart.<br>
    - <i>Fractional Distillation:</i> Liquids boiling close together (<30°C apart, e.g. Crude oil fractions).<br>
    - <i>Steam Distillation:</i> Steam-volatile, water-insoluble liquids (Aniline, Nitrobenzene, Essential oils).<br>
    - <i>Vacuum Distillation (Reduced Pressure):</i> Liquids decomposing at normal boiling point (Glycerol boils at 290°C, decomposes unless distilled under reduced pressure!).</li>
    <li><b>Chromatography:</b> Separates components based on differential adsorption/partitioning between Stationary Phase (silica/alumina) and Mobile Phase (solvent). R<sub>f</sub> value = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Distance traveled by compound</span><span style="display:block; padding:0 4px;">Distance traveled by solvent front</span></span>.</li>
  </ul>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(ii) Qualitative Analysis (Lassaigne's Test)</h3>
  <p>Organic elements (N, S, Halogens) are converted into ionic sodium salts by sodium metal fusion:<br>
  • <b>Nitrogen Test:</b> Sodium fusion extract + FeSO<sub>4</sub> + FeCl<sub>3</sub> + HCl ⟶ <b>Prussian Blue color [Fe<sub>4</sub>(Fe(CN)<sub>6</sub>)<sub>3</sub>]</b>.<br>
  • <b>Sulfur Test:</b> Extract + Lead Acetate ⟶ <b>Black precipitate (PbS)</b>.<br>
  • <b>Halogens Test:</b> Extract + HNO<sub>3</sub> + AgNO<sub>3</sub> ⟶ White ppt (AgCl, soluble in NH<sub>4</sub>OH), Yellow ppt (AgI, insoluble in NH<sub>4</sub>OH).</p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 18px;">(iii) Quantitative Estimation Formulas</h3>
  <div style="background: rgba(255, 0, 127, 0.12); border: 1.5px solid #FF007F; border-radius: 10px; padding: 14px; margin: 15px 0;">
    <h4 style="color: #FF007F; margin: 0 0 8px 0; font-size: 17px; font-weight: bold;">Master Quantitative Analysis Estimation Formulas</h4>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
      <li>• <b>% Carbon (Liebig Method):</b> %C = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">12</span><span style="display:block; padding:0 4px;">44</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Mass of CO<sub>2</sub></span><span style="display:block; padding:0 4px;">Mass of Organic Sample</span></span> × 100.</li>
      <li>• <b>% Hydrogen (Liebig Method):</b> %H = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">2</span><span style="display:block; padding:0 4px;">18</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Mass of H<sub>2</sub>O</span><span style="display:block; padding:0 4px;">Mass of Organic Sample</span></span> × 100.</li>
      <li>• <b>% Nitrogen (Dumas Method):</b> %N = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">28</span><span style="display:block; padding:0 4px;">22400</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Volume of N<sub>2</sub> (STP) in mL</span><span style="display:block; padding:0 4px;">Mass of Organic Sample</span></span> × 100.</li>
      <li>• <b>% Nitrogen (Kjeldahl Method):</b> %N = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">1.4 × N × V</span><span style="display:block; padding:0 4px;">Mass of Organic Sample</span></span> (where N & V are normality and volume of acid neutralized).</li>
      <li>• <b>% Halogen (Carius Method):</b> %X = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Atomic Mass of X</span><span style="display:block; padding:0 4px;">Molar Mass of AgX</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Mass of AgX</span><span style="display:block; padding:0 4px;">Mass of Sample</span></span> × 100.</li>
      <li>• <b>% Sulfur (Carius Method):</b> %S = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">32</span><span style="display:block; padding:0 4px;">233</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Mass of BaSO<sub>4</sub></span><span style="display:block; padding:0 4px;">Mass of Sample</span></span> × 100.</li>
    </ul>
  </div>

  <!-- BOTTOM FEATURE: MASTER CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(194, 24, 91, 0.15)); border: 1.5px solid #FF007F; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #FF007F; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Chapter 8 Formula Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b>Carbocation Stability:</b> 3° > 2° > 1° > CH<sub>3</sub><sup>+</sup> (Stabilized by +I & Hyperconjugation).</li>
      <li><b>Carbanion Stability:</b> CH<sub>3</sub><sup>-</sup> > 1° > 2° > 3°.</li>
      <li><b>Electrophile (E<sup>+</sup>):</b> Electron-pair acceptor | <b>Nucleophile (Nu<sup>-</sup>):</b> Electron-pair donor.</li>
      <li><b>Kjeldahl %N:</b> %N = (1.4 × N × V) / Mass of Sample.</li>
    </ul>
  </div>

</div>
`;

export const c11Chem8HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- SECTION A: OBJECTIVE & MCQS (25 Questions - 72% Theory) -->
  <div style="background: rgba(255, 0, 127, 0.12); border: 1.5px solid #FF007F; border-radius: 10px; padding: 14px; margin-bottom: 20px;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION A: Objective & Multiple Choice Questions (Q1 to Q25)</h2>
    <p style="color: #FF007F; margin: 0; font-size: 14px;">25 Expected MCQs • 1 Mark Each (18 Conceptual Theory + 7 Calculations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q1. What is the hybridization of Carbon atoms in Ethene (CH<sub>2</sub>=CH<sub>2</sub>)?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) sp<sup>3</sup> &nbsp;&nbsp;&nbsp;&nbsp; (B) sp<sup>2</sup><br>
      (C) sp &nbsp;&nbsp;&nbsp;&nbsp; (D) dsp<sup>2</sup>
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) sp<sup>2</sup></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Double bonded carbons in ethene possess 3 σ-bonds, undergoing sp<sup>2</sup> trigonal planar hybridization.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q2. Which carbocation is the MOST stable?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) CH<sub>3</sub><sup>+</sup> &nbsp;&nbsp;&nbsp;&nbsp; (B) CH<sub>3</sub>CH<sub>2</sub><sup>+</sup><br>
      (C) (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup> &nbsp;&nbsp;&nbsp;&nbsp; (D) (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (D) (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Tertiary (3°) carbocation is stabilized by +I effect of 3 alkyl groups and 9 hyperconjugative α-hydrogens.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q3. Which of the following is an Electrophile?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) OH<sup>-</sup> &nbsp;&nbsp;&nbsp;&nbsp; (B) NH<sub>3</sub><br>
      (C) BF<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (D) CN<sup>-</sup>
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (C) BF<sub>3</sub></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> BF<sub>3</sub> has an incomplete octet (6 valence e<sup>-</sup>) and acts as an electron-pair accepting Lewis acid.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q4. What type of bond cleavage forms Free Radicals?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Heterolytic Fission &nbsp;&nbsp;&nbsp;&nbsp; (B) Homolytic Fission<br>
      (C) Hydrolysis &nbsp;&nbsp;&nbsp;&nbsp; (D) Pyrolysis
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Homolytic Fission</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Homolytic cleavage splits shared electron pair symmetrically, producing neutral free radicals.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q5. Prussian blue color in Lassaigne's test for Nitrogen is due to formation of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (B) Na<sub>4</sub>[Fe(CN)<sub>6</sub>]<br>
      (C) Fe(SCN)<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (D) Fe(OH)<sub>3</sub>
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (A) Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Ferriferrocyanide Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> gives characteristic Prussian blue color.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q6. Glycerol (boiling point 290 °C) decomposes at its boiling point. Which purification technique is used?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Simple Distillation &nbsp;&nbsp;&nbsp;&nbsp; (B) Fractional Distillation<br>
      (C) Distillation under Reduced Pressure (Vacuum) &nbsp;&nbsp;&nbsp;&nbsp; (D) Steam Distillation
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (C) Distillation under Reduced Pressure (Vacuum)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Vacuum distillation lowers boiling point below decomposition temperature.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q7. Which electronic effect is TEMPORARY in the presence of an attacking reagent?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Inductive Effect &nbsp;&nbsp;&nbsp;&nbsp; (B) Electromeric Effect<br>
      (C) Resonance Effect &nbsp;&nbsp;&nbsp;&nbsp; (D) Hyperconjugation
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Electromeric Effect</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Electromeric effect is a temporary π-electron transfer operating only in presence of reagent.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q8. What is the order of stability of Carbanions?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 3° > 2° > 1° > CH<sub>3</sub><sup>-</sup> &nbsp;&nbsp;&nbsp;&nbsp; (B) CH<sub>3</sub><sup>-</sup> > 1° > 2° > 3°<br>
      (C) 2° > 3° > 1° > CH<sub>3</sub><sup>-</sup> &nbsp;&nbsp;&nbsp;&nbsp; (D) 3° > 1° > 2° > CH<sub>3</sub><sup>-</sup>
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) CH<sub>3</sub><sup>-</sup> > 1° > 2° > 3°</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> +I alkyl groups donate electron density, destabilizing negatively charged carbanions.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q9. Kjeldahl's method is NOT applicable for quantitative estimation of nitrogen in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Nitro compounds (-NO<sub>2</sub>) &nbsp;&nbsp;&nbsp;&nbsp; (B) Azo compounds (-N=N-)<br>
      (C) Pyridine (nitrogen in ring) &nbsp;&nbsp;&nbsp;&nbsp; (D) All of these
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (D) All of these</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Kjeldahl method fails for nitro, azo, and heterocyclic nitrogen compounds because N is not converted to (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q10. Which rule dictates the major product in Elimination reactions of alkyl halides?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Markovnikov Rule &nbsp;&nbsp;&nbsp;&nbsp; (B) Saytzeff Rule<br>
      (C) Hückel Rule &nbsp;&nbsp;&nbsp;&nbsp; (D) Kossel Rule
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Saytzeff Rule</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Saytzeff rule states the more substituted alkene (with more α-hydrogens) is the major elimination product.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q11. Hückel's Rule states that an aromatic compound must contain:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 4n π-electrons &nbsp;&nbsp;&nbsp;&nbsp; (B) (4n + 2) π-electrons<br>
      (C) 2n π-electrons &nbsp;&nbsp;&nbsp;&nbsp; (D) 6n π-electrons
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) (4n + 2) π-electrons</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Aromatic compounds possess a planar cyclic conjugated system with (4n + 2) π-electrons.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q12. In S<sub>N</sub>2 nucleophilic substitution, the reaction proceeds with:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Complete Racemization &nbsp;&nbsp;&nbsp;&nbsp; (B) Walden Inversion of Configuration<br>
      (C) Retention of Configuration &nbsp;&nbsp;&nbsp;&nbsp; (D) No change
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Walden Inversion of Configuration</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Backside nucleophilic attack in 1-step S<sub>N</sub>2 yields 100% Walden inversion.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q13. Which method is best suited to separate Aniline (boiling point 184 °C) from water?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Crystallization &nbsp;&nbsp;&nbsp;&nbsp; (B) Steam Distillation<br>
      (C) Sublimation &nbsp;&nbsp;&nbsp;&nbsp; (D) Fractional Crystallization
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Steam Distillation</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Aniline is steam-volatile and insoluble in water, making steam distillation ideal.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q14. Hyperconjugation involves delocalization of which type of electrons?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) π-electrons only &nbsp;&nbsp;&nbsp;&nbsp; (B) σ-electrons of C-H bond into empty p or π orbital<br>
      (C) Lone pair electrons &nbsp;&nbsp;&nbsp;&nbsp; (D) Inner shell electrons
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) σ-electrons of C-H bond into empty p or π orbital</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Hyperconjugation is no-bond resonance involving σ(C-H) electron delocalization.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q15. Which group shows strong -I (Electron-Withdrawing Inductive) Effect?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) -CH<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (B) -NO<sub>2</sub><br>
      (C) -C(CH<sub>3</sub>)<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (D) -C<sub>2</sub>H<sub>5</sub>
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) -NO<sub>2</sub></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> -NO<sub>2</sub> group has high electronegativity and exerts strong -I electron-withdrawing effect.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q16. In Carius method, 0.187 g organic compound gave 0.287 g AgCl (Molar mass AgCl = 143.5 g). % Chlorine is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 35.5% &nbsp;&nbsp;&nbsp;&nbsp; (B) 37.9%<br>
      (C) 48.2% &nbsp;&nbsp;&nbsp;&nbsp; (D) 25.0%
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) 37.9%</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> %Cl = (35.5 / 143.5) × (0.287 / 0.187) × 100 = 37.9%.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q17. What is the geometry of a Carbocation (R<sup>+</sup>)?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Tetrahedral &nbsp;&nbsp;&nbsp;&nbsp; (B) Trigonal Planar<br>
      (C) Pyramidal &nbsp;&nbsp;&nbsp;&nbsp; (D) Linear
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Trigonal Planar</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Carbocation carbon is sp<sup>2</sup> hybridized with an empty p-orbital and 120° bond angles.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q18. Which of the following is a Nucleophile?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) H<sup>+</sup> &nbsp;&nbsp;&nbsp;&nbsp; (B) NO<sub>2</sub><sup>+</sup><br>
      (C) NH<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (D) AlCl<sub>3</sub>
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (C) NH<sub>3</sub></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> NH<sub>3</sub> has an unshared lone pair of electrons on nitrogen, acting as a nucleophile.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q19. R<sub>f</sub> value in chromatography is calculated as:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Distance by solvent / Distance by compound &nbsp;&nbsp;&nbsp;&nbsp; (B) Distance by compound / Distance by solvent front<br>
      (C) Mass of compound / Total mass &nbsp;&nbsp;&nbsp;&nbsp; (D) Volume of solvent / Time
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Distance by compound / Distance by solvent front</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> R<sub>f</sub> = (Distance moved by substance) / (Distance moved by solvent front).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q20. What is the IUPAC name of CH<sub>3</sub>-CH=CH-COOH?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) But-2-enoic acid &nbsp;&nbsp;&nbsp;&nbsp; (B) But-1-enoic acid<br>
      (C) Crotonic acid &nbsp;&nbsp;&nbsp;&nbsp; (D) Butanoic acid
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (A) But-2-enoic acid</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> 4-carbon chain with -COOH at C1 and double bond at C2 = But-2-enoic acid.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q21. Which purification method separates Naphthalene from NaCl salt?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Distillation &nbsp;&nbsp;&nbsp;&nbsp; (B) Sublimation<br>
      (C) Filtration &nbsp;&nbsp;&nbsp;&nbsp; (D) Centrifugation
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Sublimation</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Naphthalene readily sublimates on heating while NaCl remains solid.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q22. Homolytic bond fission of C-C bond in ethane yields:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 2 Carbocations &nbsp;&nbsp;&nbsp;&nbsp; (B) 2 Methyl Free Radicals<br>
      (C) Carbocation + Carbanion &nbsp;&nbsp;&nbsp;&nbsp; (D) 2 Carbanions
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) 2 Methyl Free Radicals</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> H<sub>3</sub>C-CH<sub>3</sub> ⟶ 2 CH<sub>3</sub><sup>•</sup> free radicals.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q23. Estimation of Nitrogen by Dumas method measures Nitrogen as:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> &nbsp;&nbsp;&nbsp;&nbsp; (B) N<sub>2</sub> gas volume at STP<br>
      (C) NH<sub>3</sub> gas &nbsp;&nbsp;&nbsp;&nbsp; (D) NO<sub>2</sub> gas
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) N<sub>2</sub> gas volume at STP</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dumas method converts all organic N into N<sub>2</sub> gas collected over KOH solution.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q24. Which electronic effect explains why 2,4,6-Trinitrophenol (Picric Acid) is highly acidic?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Strong +I effect &nbsp;&nbsp;&nbsp;&nbsp; (B) Strong -I and -R electron-withdrawing effects of 3 -NO<sub>2</sub> groups<br>
      (C) +M effect &nbsp;&nbsp;&nbsp;&nbsp; (D) Hyperconjugation
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) Strong -I and -R electron-withdrawing effects of 3 -NO<sub>2</sub> groups</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> 3 -NO<sub>2</sub> groups strongly stabilize phenoxide anion via -I and -R effects.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #FF007F;">Q25. In Kjeldahl's method, 0.50 g compound required 20 mL of 0.5 N H<sub>2</sub>SO<sub>4</sub> for neutralization. % Nitrogen is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 14.0% &nbsp;&nbsp;&nbsp;&nbsp; (B) 28.0%<br>
      (C) 7.0% &nbsp;&nbsp;&nbsp;&nbsp; (D) 56.0%
    </div>
    <div style="background: rgba(255, 0, 127, 0.15); border-left: 3.5px solid #FF007F; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #FF007F;">✓ Answer: (B) 28.0%</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> %N = (1.4 × N × V) / m = (1.4 × 0.5 × 20) / 0.50 = 28.0%.</span>
    </div>
  </div>
  <!-- SECTION B: VERY SHORT ANSWER QUESTIONS (Q26 to Q55) -->
  <div style="background: rgba(255, 0, 127, 0.12); border: 1.5px solid #FF007F; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION B: Very Short Answer Questions (Q26 to Q55)</h2>
    <p style="color: #FF007F; margin: 0; font-size: 14px;">30 Expected VSA Questions • 2 Marks Each (22 Conceptual Theory + 8 Short Calculations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q26. Define Catenation and state why Carbon exhibits maximum catenation power.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Self-linking property of atoms to form long chains.<br>Carbon has high C-C bond energy (348 kJ/mol) and small atomic size.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q27. State hybridization and geometry of Carbon in CH<sub>4</sub>, C<sub>2</sub>H<sub>4</sub>, and C<sub>2</sub>H<sub>2</sub>.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      • CH<sub>4</sub>: <b>sp<sup>3</sup></b> (Tetrahedral, 109.5°).<br>• C<sub>2</sub>H<sub>4</sub>: <b>sp<sup>2</sup></b> (Trigonal Planar, 120°).<br>• C<sub>2</sub>H<sub>2</sub>: <b>sp</b> (Linear, 180°).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q28. Define Functional Group with 2 examples.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Atom or group of atoms determining chemical properties of molecule.<br>Examples: <b>-COOH</b> (Carboxylic acid), <b>-OH</b> (Alcohol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q29. Define Homologous Series and state 2 characteristics.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Series of organic compounds with same functional group.<br>1. Differ by -CH<sub>2</sub>- (14 u).<br>2. Possess similar chemical properties.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q30. Write IUPAC name of: (a) CH<sub>3</sub>-CH(CH<sub>3</sub>)-CH<sub>2</sub>-CHO, (b) CH<sub>3</sub>-CO-CH<sub>2</sub>-CH<sub>3</sub>.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      (a) <b>3-Methylbutanal</b>.<br>(b) <b>Butan-2-one</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q31. Define Inductive Effect. Differentiate +I and -I effects with examples.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Permanent σ-electron shift due to electronegativity difference.<br>• <b>+I:</b> Alkyl groups (-CH<sub>3</sub>, -C<sub>2</sub>H<sub>5</sub>).<br>• <b>-I:</b> Electronegative groups (-NO<sub>2</sub>, -F, -Cl).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q32. Define Electromeric Effect (E).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Temporary complete transfer of shared π-electron pair to one atom in presence of attacking reagent.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q33. Define Resonance Effect (Mesomeric Effect) and write resonance structures of Benzene.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Politary produced by π-electron delocalization.<br>Benzene exists as resonance hybrid of 2 Kekulé structures.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q34. Define Hyperconjugation and state its structural requirement.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Delocalization of σ(C-H) electrons into empty p or π orbital.<br>Requires at least one <b>α-Hydrogen atom</b> on carbon adjacent to sp<sup>2</sup> carbon.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q35. Differentiate Homolytic and Heterolytic bond fission.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      <b>Homolytic:</b> Symmetrical cleavage forming neutral <b>Free Radicals</b>.<br><b>Heterolytic:</b> Unsymmetrical cleavage forming <b>Carbocations & Carbanions</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q36. Why is Tertiary carbocation (3°) more stable than Primary carbocation (1°)?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      3° carbocation has 9 hyperconjugative α-hydrogens and 3 +I alkyl groups stabilizing positive charge.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q37. Why is Methyl carbanion (CH<sub>3</sub><sup>-</sup>) more stable than Tertiary carbanion ((CH<sub>3</sub>)<sub>3</sub>C<sup>-</sup>)?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      +I alkyl groups push electron density onto negative carbon, destabilizing tertiary carbanion.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q38. Define Electrophile and Nucleophile with 2 examples each.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      <b>Electrophile (E<sup>+</sup>):</b> Electron-pair acceptor (H<sup>+</sup>, BF<sub>3</sub>).<br><b>Nucleophile (Nu<sup>-</sup>):</b> Electron-pair donor (OH<sup>-</sup>, NH<sub>3</sub>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q39. Differentiate S<sub>N</sub>1 and S<sub>N</sub>2 reaction mechanisms in 2 points.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      1. S<sub>N</sub>1 is 2-step via carbocation (Racemization); S<sub>N</sub>2 is 1-step (Walden Inversion).<br>2. Reactivity: S<sub>N</sub>1 (3° > 2° > 1°); S<sub>N</sub>2 (1° > 2° > 3°).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q40. State Saytzeff Rule for Elimination reactions.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      During dehydrohalogenation, major product is the more substituted alkene (containing maximum α-hydrogens).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q41. State Markovnikov's Rule for electrophilic addition to alkenes.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Negative part of addendum attaches to carbon of double bond having FEWER hydrogen atoms.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q42. Define Sublimation and name 2 organic solids purified by sublimation.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Direct solid to vapor conversion.<br>Examples: <b>Naphthalene, Camphor, Benzoic acid</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q43. Why is Vacuum Distillation used for glycerol purification?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Glycerol boils at 290 °C where it decomposes; reduced pressure lowers boiling point below decomposition.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q44. Explain principle of Steam Distillation.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Used for steam-volatile, water-insoluble liquids. Liquid boils when sum of vapor pressures (P<sub>water</sub> + P<sub>organic</sub>) equals atmospheric pressure.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q45. Define R<sub>f</sub> value in Thin Layer Chromatography (TLC).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      <b>R<sub>f</sub> = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Distance traveled by compound</span><span style="display:block; padding:0 4px;">Distance traveled by solvent front</span></span></b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q46. What is Lassaigne's Test? Why is Sodium metal used?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Qualitative test for N, S, X.<br>Sodium converts covalent organic elements into ionic sodium salts (NaCN, Na<sub>2</sub>S, NaX).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q47. Why is nitric acid HNO<sub>3</sub> added to Lassaigne extract before testing for halogens?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Decomposes NaCN and Na<sub>2</sub>S as HCN and H<sub>2</sub>S gases to prevent interference with AgNO<sub>3</sub> test.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q48. State formula for % Carbon and % Hydrogen in Liebig's estimation method.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      • <b>%C = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">12</span><span style="display:block; padding:0 4px;">44</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">m<sub>CO2</sub></span><span style="display:block; padding:0 4px;">m</span></span> × 100</b>.<br>• <b>%H = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">2</span><span style="display:block; padding:0 4px;">18</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">m<sub>H2O</sub></span><span style="display:block; padding:0 4px;">m</span></span> × 100</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q49. State formula for % Nitrogen by Kjeldahl's method.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      <b>%N = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">1.4 × N × V</span><span style="display:block; padding:0 4px;">m</span></span></b> (where N & V are normality and volume of acid used).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q50. Why fails Kjeldahl's method for Nitrobenzene and Pyridine?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Nitrogen in nitro groups and heterocyclic rings is not converted into ammonium sulfate (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q51. State formula for % Halogen by Carius method.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      <b>%X = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Atomic Mass X</span><span style="display:block; padding:0 4px;">Molar Mass AgX</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">m<sub>AgX</sub></span><span style="display:block; padding:0 4px;">m</span></span> × 100</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q52. Calculate % Sulfur in a compound if 0.233 g sample gave 0.233 g BaSO<sub>4</sub>.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      %S = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">32</span><span style="display:block; padding:0 4px;">233</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.233</span><span style="display:block; padding:0 4px;">0.233</span></span> × 100 = <b>13.73%</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q53. What is Hückel's Rule of Aromaticity?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Aromatic compounds must be cyclic, planar, fully conjugated with <b>(4n + 2) π-electrons</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q54. Why is CH<sub>3</sub>COOH stronger acid than CH<sub>3</sub>CH<sub>2</sub>OH?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      Resonance stabilizes acetate ion CH<sub>3</sub>COO<sup>-</sup>; ethoxide ion C<sub>2</sub>H<sub>5</sub>O<sup>-</sup> lacks resonance.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q55. Write IUPAC name of: CH<sub>3</sub>-C(CH<sub>3</sub>)<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub>.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br>
      <b>2,2-Dimethylbutane</b>.
    </div>
  </div>
  <!-- SECTION C: SHORT ANSWER QUESTIONS (Q56 to Q85) -->
  <div style="background: rgba(255, 0, 127, 0.12); border: 1.5px solid #FF007F; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION C: Short Answer Questions (Q56 to Q85)</h2>
    <p style="color: #FF007F; margin: 0; font-size: 14px;">30 Expected SA Questions • 3 Marks Each (22 Conceptual Theory + 8 Step Calculations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q56. Explain tetravalency and hybridization of Carbon in CH<sub>4</sub>, C<sub>2</sub>H<sub>4</sub>, C<sub>2</sub>H<sub>2</sub> with orbital diagrams.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Carbon excites 2s ⟶ 2p<sub>z</sub> forming 4 unpaired electrons.<br>• CH<sub>4</sub>: sp<sup>3</sup> tetrahedral (109.5°).<br>• C<sub>2</sub>H<sub>4</sub>: sp<sup>2</sup> planar (120°, 1 π bond).<br>• C<sub>2</sub>H<sub>2</sub>: sp linear (180°, 2 π bonds).<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMyZDAwMmQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0ic2hhZG93Ij4KICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjQiIHN0ZERldmlhdGlvbj0iNiIgZmxvb2QtY29sb3I9IiNGRjAwN0YiIGZsb29kLW9wYWNpdHk9IjAuNSIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiByeD0iMTYiIGZpbGw9InVybCgjYmdHcmFkMSkiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjAwN0YiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4zRCBIeWJyaWRpemF0aW9uICZhbXA7IE9yZ2FuaWMgTW9sZWN1bGFyIEdlb21ldHJ5IEFyY2hpdGVjdHVyZTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIyMTAiIGhlaWdodD0iMzAwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNwwrMgVGV0cmFoZWRyYWwgKDEwOS41wrApPC90ZXh0PgogICAgPGNpcmNsZSBjeD0iMTA1IiBjeT0iMTQwIiByPSIyMiIgZmlsbD0iI0ZGMDA3RiIvPgogICAgPHRleHQgeD0iMTA1IiB5PSIxNDYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzwvdGV4dD4KICAgIDxsaW5lIHgxPSIxMDUiIHkxPSIxMTgiIHgyPSIxMDUiIHkyPSI2OCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMuNSIvPgogICAgPGNpcmNsZSBjeD0iMTA1IiBjeT0iNjIiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjY3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iMTI1IiB5MT0iMTUwIiB4Mj0iMTY1IiB5Mj0iMTg1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICA8Y2lyY2xlIGN4PSIxNzIiIGN5PSIxOTEiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxNzIiIHk9IjE5NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHBvbHlnb24gcG9pbnRzPSI5MCwxNTAgNDUsMTg1IDU1LDE5NSIgZmlsbD0iI0ZGMDA3RiIvPgogICAgPGNpcmNsZSBjeD0iNDUiIGN5PSIxOTEiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSI0NSIgeT0iMTk2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iOTUiIHkxPSIxMzAiIHgyPSI2NSIgeTI9IjEwMCIgc3Ryb2tlPSIjQUFBIiBzdHJva2UtZGFzaGFycmF5PSIzLDMiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGNpcmNsZSBjeD0iNTgiIGN5PSI5MyIgcj0iMTQiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjU4IiB5PSI5OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIENI4oKELCBFdGhhbmUgQ+KCgkjigoY8L3RleHQ+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQgz4MtYm9uZHMgfCAwIM+ALWJvbmRzPC90ZXh0PgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTUsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMjEwIiBoZWlnaHQ9IjMwMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDI1NSwwLDEyNywwLjA2KSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTA1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY2NkM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zcMKyIFRyaWdvbmFsIFBsYW5hciAoMTIwwrApPC90ZXh0PgogICAgPGNpcmNsZSBjeD0iNzAiIGN5PSIxNDAiIHI9IjIwIiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8dGV4dCB4PSI3MCIgeT0iMTQ2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+CiAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxNDAiIHI9IjIwIiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8dGV4dCB4PSIxNDAiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DPC90ZXh0PgogICAgPGxpbmUgeDE9IjkwIiB5MT0iMTMzIiB4Mj0iMTIwIiB5Mj0iMTMzIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGxpbmUgeDE9IjkwIiB5MT0iMTQ3IiB4Mj0iMTIwIiB5Mj0iMTQ3IiBzdHJva2U9IiNGRjY2QzQiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGxpbmUgeDE9IjU1IiB5MT0iMTI1IiB4Mj0iMzAiIHkyPSI5MCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgIDxjaXJjbGUgY3g9IjIzIiBjeT0iODIiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIyMyIgeT0iODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSI1NSIgeTE9IjE1NSIgeDI9IjMwIiB5Mj0iMTkwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGNpcmNsZSBjeD0iMjMiIGN5PSIxOTgiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIyMyIgeT0iMjAyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iMTU1IiB5MT0iMTI1IiB4Mj0iMTgwIiB5Mj0iOTAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODciIGN5PSI4MiIgcj0iMTIiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjE4NyIgeT0iODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSIxNTUiIHkxPSIxNTUiIHgyPSIxODAiIHkyPSIxOTAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODciIGN5PSIxOTgiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxODciIHk9IjIwMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIEV0aGVuZSBD4oKCSOKChDwvdGV4dD4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMjc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MyDPgy1ib25kcyB8IDEgz4AtYm9uZDwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIxMCIgaGVpZ2h0PSIzMDAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c3AgTGluZWFyICgxODDCsCk8L3RleHQ+CiAgICA8Y2lyY2xlIGN4PSI3NSIgY3k9IjE0MCIgcj0iMTgiIGZpbGw9IiNGRjAwN0YiLz4KICAgIDx0ZXh0IHg9Ijc1IiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzwvdGV4dD4KICAgIDxjaXJjbGUgY3g9IjEzNSIgY3k9IjE0MCIgcj0iMTgiIGZpbGw9IiNGRjAwN0YiLz4KICAgIDx0ZXh0IHg9IjEzNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+CiAgICA8bGluZSB4MT0iOTMiIHkxPSIxMzIiIHgyPSIxMTciIHkyPSIxMzIiIHN0cm9rZT0iI0ZGNjZDNCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgIDxsaW5lIHgxPSI5MyIgeTE9IjE0MCIgeDI9IjExNyIgeTI9IjE0MCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgIDxsaW5lIHgxPSI5MyIgeTE9IjE0OCIgeDI9IjExNyIgeTI9IjE0OCIgc3Ryb2tlPSIjRkY2NkM0IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgPGxpbmUgeDE9IjU3IiB5MT0iMTQwIiB4Mj0iMzAiIHkyPSIxNDAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjE0MCIgcj0iMTIiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSIxNTMiIHkxPSIxNDAiIHgyPSIxODAiIHkyPSIxNDAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODgiIGN5PSIxNDAiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxODgiIHk9IjE0NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIEV0aHluZSBD4oKCSOKCgjwvdGV4dD4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMjc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MiDPgy1ib25kcyB8IDIgz4AtYm9uZHM8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=' style='width: 100%; max-width: 480px; height: auto; border-radius: 8px; border: 1px solid #FF007F;' alt='Hybridization' /><p style='color: #FF007F; font-size: 12px; margin-top: 4px;'>Figure Q56: 3D Hybridization & Bond Geometries</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q57. Explain IUPAC rules for naming polyfunctional organic compounds with 2 examples.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      1. Principal functional group gets highest seniority suffix.<br>2. Longest carbon chain containing principal group selected.<br>3. Other groups named as prefixes in alphabetical order.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q58. Explain Inductive Effect (+I and -I). How does -I effect increase acidity of Monochloroacetic acid vs Acetic acid?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      -I electron-withdrawing Cl atom draws electron density from O-H bond, stabilizing Cl-CH<sub>2</sub>-COO<sup>-</sup> carboxylate anion.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q59. Explain Resonance Effect (+R and -R). Why is Phenol more acidic than Ethanol?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Phenoxide ion C<sub>6</sub>H<sub>5</sub>O<sup>-</sup> is stabilized by 5 resonance structures; ethoxide C<sub>2</sub>H<sub>5</sub>O<sup>-</sup> has no resonance stabilization.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q60. Explain Hyperconjugation and compare stability of propene vs ethene.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Propene has 3 hyperconjugative α-hydrogens on methyl group delocalizing into π-bond, making propene more stable than ethene.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q61. Compare Carbocations, Carbanions, and Free Radicals (Structure, Hybridization, Stability Order).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      • <b>Carbocation:</b> sp<sup>2</sup> planar, 6 e<sup>-</sup> (3° > 2° > 1°).<br>• <b>Carbanion:</b> sp<sup>3</sup> pyramidal, 8 e<sup>-</sup> (CH<sub>3</sub><sup>-</sup> > 1° > 2° > 3°).<br>• <b>Free Radical:</b> sp<sup>2</sup> planar, 7 e<sup>-</sup> (3° > 2° > 1°).<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzMzAwMzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbGVjdHJvbmljIERpc3BsYWNlbWVudHMgJmFtcDsgT3JnYW5pYyBSZWFjdGlvbiBJbnRlcm1lZGlhdGVzIFN0YWJpbGl0eTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuKaoSBFbGVjdHJvbmljIERpc3BsYWNlbWVudCBFZmZlY3RzPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iNDUiIHgyPSIzMjAiIHkyPSI0NSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iNDAiIHk9IjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjEuIEluZHVjdGl2ZSBFZmZlY3QgKEkpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSI4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiAtSSAoV2l0aGRyYXdpbmcpOiAtTk/igoIgJmd0OyAtQ04gJmd0OyAtRiAmZ3Q7IC1DbCAmZ3Q7IC1CciAmZ3Q7IC1JPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjEwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiArSSAoRG9uYXRpbmcpOiAtQyhDSOKCgynigoMgJmd0OyAtQ0goQ0jigoMp4oKCICZndDsgLUPigoJI4oKFICZndDsgLUNI4oKDPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iMTIwIiB4Mj0iMzIwIiB5Mj0iMTIwIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNCIvPgogICAgPHRleHQgeD0iNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4yLiBSZXNvbmFuY2UgLyBNZXNvbWVyaWMgRWZmZWN0IChNL1IpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgK1IgKG8vcC1kaXJlY3RpbmcpOiAtT0gsIC1OSOKCgiwgLU9SLCAtaGFsb2dlbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIxNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgLVIgKG0tZGlyZWN0aW5nKTogLU5P4oKCLCAtQ04sIC1DSE8sIC1DT09IPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iMTk1IiB4Mj0iMzIwIiB5Mj0iMTk1IiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNCIvPgogICAgPHRleHQgeD0iNDAiIHk9IjIxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiBIeXBlcmNvbmp1Z2F0aW9uIChOby1Cb25kIFJlc29uYW5jZSk6PC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiBEZWxvY2FsaXphdGlvbiBvZiDPgyhDLUgpIGVsZWN0cm9ucyBpbnRvIGVtcHR5IHAvz4A8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iMjUzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCI+4oCiIE5vLiBvZiBTdHJ1Y3R1cmVzID0gTnVtYmVyIG9mIM6xLUh5ZHJvZ2VucyE8L3RleHQ+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPvCflKUgUmVhY3RpdmUgSW50ZXJtZWRpYXRlcyAmYW1wOyBTdGFiaWxpdHk8L3RleHQ+CiAgICA8cmVjdCB4PSIyNSIgeT0iNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzUiIHk9IjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjAwN0YiPkNhcmJvY2F0aW9ucyAoUuKBuiwgc3DCsiBQbGFuYXIsIDYgZeKBuyk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+QmVuenlsICZndDsgQWxseWwgJmd0OyAzwrAgJmd0OyAywrAgJmd0OyAxwrAgJmd0OyBDSOKCg+KBujwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIxMDciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNBQUEiPihTdGFiaWxpemVkIGJ5ICtJICZhbXA7IEh5cGVyY29uanVnYXRpb24gOSDOsS1IKTwvdGV4dD4KICAgIDxyZWN0IHg9IjI1IiB5PSIxMzAiIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzUiIHk9IjE1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIj5DYXJiYW5pb25zIChS4oG7LCBzcMKzIFB5cmFtaWRhbCwgOCBl4oG7KTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+Q0jigoPigbsgJmd0OyAxwrAgJmd0OyAywrAgJmd0OyAzwrA8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTg3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjQUFBIj4oRGVzdGFiaWxpemVkIGJ5ICtJIGFsa3lsIGdyb3Vwcyk8L3RleHQ+CiAgICA8cmVjdCB4PSIyNSIgeT0iMjEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjM1IiB5PSIyMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGMDA3RiI+RnJlZSBSYWRpY2FscyAoUuKAoiwgc3DCsiBQbGFuYXIsIDcgZeKBuyk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjI1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjPCsCAmZ3Q7IDLCsCAmZ3Q7IDHCsCAmZ3Q7IENI4oKD4oCiPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjI2NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iI0FBQSI+KEhvbW9seXRpYyBmaXNzaW9uIHByb2R1Y3QpPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 480px; height: auto; border-radius: 8px; border: 1px solid #FF007F;' alt='Intermediates' /><p style='color: #FF007F; font-size: 12px; margin-top: 4px;'>Figure Q61: Comparative Intermediate Stability Orders</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q62. Compare S<sub>N</sub>1 and S<sub>N</sub>2 nucleophilic substitution reactions in 5 points.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      1. 2-step vs 1-step.<br>2. Carbocation intermediate vs Transition state.<br>3. Order: 3° > 2° > 1° (S<sub>N</sub>1) vs 1° > 2° > 3° (S<sub>N</sub>2).<br>4. Racemization vs Walden Inversion.<br>5. Polar protic solvent (S<sub>N</sub>1) vs Polar aprotic solvent (S<sub>N</sub>2).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q63. Explain Fractional Distillation and Steam Distillation with apparatus setups.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      • <b>Fractional:</b> Uses fractionating column for liquids with Δb.p. < 30 °C.<br>• <b>Steam:</b> Steam bubbled through water-insoluble steam-volatile liquid (Aniline).<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMyYjAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PcmdhbmljIFB1cmlmaWNhdGlvbiAmYW1wOyBRdWFudGl0YXRpdmUgQW5hbHlzaXMgTWFzdGVyIEFyY2hpdGVjdHVyZTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIyMzAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxMTUiIHk9IjI4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuKal++4jyBEaXN0aWxsYXRpb24gVGVjaG5pcXVlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgU2ltcGxlIERpc3RpbGxhdGlvbjo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5MaXF1aWRzIHdpdGggzpRiLnAuICZndDsgMzAgwrBDLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIEZyYWN0aW9uYWwgRGlzdGlsbGF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5GcmFjdGlvbmF0aW5nIGNvbHVtbiAozpRiLnAuICZsdDsgMzDCsEMpLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIFN0ZWFtIERpc3RpbGxhdGlvbjo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+U3RlYW0tdm9sYXRpbGUgJmFtcDsgd2F0ZXItaW5zb2x1YmxlPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjE3NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPihlLmcuIEFuaWxpbmUsIEVzc2VudGlhbCBvaWxzKS48L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMjA1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBWYWN1dW0gRGlzdGlsbGF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5SZWR1Y2VkIHByZXNzdXJlIGZvciBsaXF1aWRzPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIzNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPmRlY29tcG9zaW5nIGF0IG5vcm1hbCBiLnAuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjI1MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPihlLmcuIEdseWNlcm9sIGF0IDI5MCDCsEMpLjwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg1LCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIzMCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+nqiBDaHJvbWF0b2dyYXBoeSAmYW1wOyBSZjwvdGV4dD4KICAgIDxyZWN0IHg9Ijc1IiB5PSI0OCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGRiIgcng9IjQiIHN0cm9rZT0iIzg4OCIvPgogICAgPGxpbmUgeDE9Ijc1IiB5MT0iMTgwIiB4Mj0iMTU1IiB5Mj0iMTgwIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9Ijc1IiB5MT0iNjUiIHgyPSIxNTUiIHkyPSI2NSIgc3Ryb2tlPSIjMDBDODUzIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjE4MCIgcj0iNCIgZmlsbD0iIzg4OCIvPgogICAgPGNpcmNsZSBjeD0iMTE1IiBjeT0iMTEwIiByPSI1IiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8bGluZSB4MT0iMTY1IiB5MT0iMTgwIiB4Mj0iMTY1IiB5Mj0iNjUiIHN0cm9rZT0iIzAwQzg1MyIgc3Ryb2tlLWRhc2hhcnJheT0iMiwyIi8+CiAgICA8dGV4dCB4PSIxNzIiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMwMEM4NTMiPlNvbHZlbnQ8L3RleHQ+CiAgICA8bGluZSB4MT0iNjUiIHkxPSIxODAiIHgyPSI2NSIgeTI9IjExMCIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2UtZGFzaGFycmF5PSIyLDIiLz4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxNDgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkYwMDdGIj5Db21wb3VuZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJfZiBGb3JtdWxhOjwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIyMzUiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTUiIHJ4PSI2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+CiAgICA8dGV4dCB4PSIxMTUiIHk9IjI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRpc3RhbmNlIGJ5IENvbXBvdW5kPC90ZXh0PgogICAgPGxpbmUgeDE9IjM1IiB5MT0iMjYyIiB4Mj0iMTk1IiB5Mj0iMjYyIiBzdHJva2U9IiNGRkYiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGlzdGFuY2UgYnkgU29sdmVudCBGcm9udDwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIzMCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+TiiBRdWFudGl0YXRpdmUgRXN0aW1hdGlvbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5MaWViaWcgTWV0aG9kIChDICZhbXA7IEgpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSI3MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPuKAoiAlQyA9ICgxMi80NCkgw5cgKG1fQ0/igoIvbSkgw5cgMTAwPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+4oCiICVIID0gKDIvMTgpIMOXIChtX0jigoJPL20pIMOXIDEwMDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+S2plbGRhaGwgTWV0aG9kICglTik6PC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEzOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPuKAoiAlTiA9ICgxLjQgw5cgTiDDlyBWKSAvIG08L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMTY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPkR1bWFzIE1ldGhvZCAoJU4pOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj7igKIgJU4gPSAoMjgvMjI0MDApIMOXIChWX1NUUC9tKSDDlyAxMDA8L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMjE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPkNhcml1cyBNZXRob2QgKCVYICZhbXA7ICVTKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+4oCiICVYID0gKEF0LlcvQWdYKSDDlyAobV9BZ1gvbSkgw5cgMTAwPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjI1MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPuKAoiAlUyA9ICgzMi8yMzMpIMOXIChtX0JhU0/igoQvbSkgw5cgMTAwPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 480px; height: auto; border-radius: 8px; border: 1px solid #FF007F;' alt='Distillation' /><p style='color: #FF007F; font-size: 12px; margin-top: 4px;'>Figure Q63: Distillation & Purification Schematics</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q64. Explain Column Chromatography and Thin Layer Chromatography (TLC).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Separation based on differential adsorption on stationary silica gel phase eluted by mobile solvent phase.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q65. Explain Lassaigne's test for Nitrogen and Sulfur. Write chemical equations.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      • <b>Nitrogen:</b> Na + C + N ⟶ NaCN ⟶ Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> (Prussian blue).<br>• <b>Sulfur:</b> 2 Na + S ⟶ Na<sub>2</sub>S + Pb(CH<sub>3</sub>COO)<sub>2</sub> ⟶ PbS (Black ppt).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q66. 0.20 g of organic compound gave 0.44 g CO<sub>2</sub> and 0.18 g H<sub>2</sub>O in Liebig combustion. Calculate %C and %H.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      %C = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">12</span><span style="display:block; padding:0 4px;">44</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.44</span><span style="display:block; padding:0 4px;">0.20</span></span> × 100 = <b>60.0% C</b>.<br>%H = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">2</span><span style="display:block; padding:0 4px;">18</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.18</span><span style="display:block; padding:0 4px;">0.20</span></span> × 100 = <b>10.0% H</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q67. 0.30 g compound gave 30.0 mL N<sub>2</sub> at 27 °C and 750 mm Hg in Dumas method. Calculate %N (Aqueous tension = 10 mm Hg).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      P<sub>N2</sub> = 750 - 10 = 740 mm Hg.<br>V<sub>STP</sub> = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">740 × 30 × 273</span><span style="display:block; padding:0 4px;">760 × 300</span></span> = 26.58 mL.<br>%N = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">28 × 26.58</span><span style="display:block; padding:0 4px;">22400 × 0.30</span></span> × 100 = <b>11.07% N</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q68. 0.40 g organic compound in Kjeldahl method liberated NH<sub>3</sub> neutralizing 20.0 mL 0.25 N H<sub>2</sub>SO<sub>4</sub>. Calculate %N.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      %N = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">1.4 × N × V</span><span style="display:block; padding:0 4px;">m</span></span> = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">1.4 × 0.25 × 20.0</span><span style="display:block; padding:0 4px;">0.40</span></span> = <b>17.5% N</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q69. 0.25 g compound in Carius method gave 0.287 g AgCl. Calculate % Chlorine.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      %Cl = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">35.5</span><span style="display:block; padding:0 4px;">143.5</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.287</span><span style="display:block; padding:0 4px;">0.25</span></span> × 100 = <b>28.4% Cl</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q70. Explain Hückel's Rule of Aromaticity. Classify as Aromatic or Non-Aromatic: (a) Benzene, (b) Cyclooctatetraene, (c) Cyclopentadienyl anion.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      (a) Benzene: 6 π e<sup>-</sup> (n=1) ⟶ <b>Aromatic</b>.<br>(b) Cyclooctatetraene: 8 π e<sup>-</sup> (tub shaped) ⟶ <b>Non-aromatic</b>.<br>(c) Cyclopentadienyl anion: 6 π e<sup>-</sup> ⟶ <b>Aromatic</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q71. Explain Electromeric Effect (+E and -E) with examples.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      +E: π-electrons transfer toward attacking reagent (addition of H<sup>+</sup> to alkene). -E: π-electrons transfer away from reagent (addition of CN<sup>-</sup> to carbonyl).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q72. Explain why Benzyl carbocation (C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup>) is exceptionally stable.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Positive charge on benzylic carbon is delocalized over 4 resonance structures across aromatic ring.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q73. Explain Saytzeff vs Hofmann elimination rules with examples.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Saytzeff rule yields more substituted alkene (dehydrohalogenation with unhindered base). Hofmann rule yields less substituted alkene (bulky base).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q74. Explain Markovnikov addition of HBr to Propene and Anti-Markovnikov Peroxide Effect mechanism.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      • <b>Markovnikov:</b> Adds via more stable 2° carbocation ⟶ 2-Bromopropane.<br>• <b>Peroxide Effect:</b> Free radical mechanism via 2° free radical ⟶ 1-Bromopropane.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q75. Explain why Trichloroacetic acid (CCl<sub>3</sub>COOH) is 10,000 times stronger acid than Acetic acid.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      3 highly electronegative Cl atoms exert strong cumulative -I effect, stabilizing CCl<sub>3</sub>COO<sup>-</sup> carboxylate anion.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q76. Explain why Aniline is a weaker base than Methylamine.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Nitrogen lone pair in Aniline is delocalized into benzene ring (+R effect), making it less available for protonation.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q77. Calculate empirical formula of compound containing 40.0% C, 6.67% H, and 53.33% O.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Moles: C = 40/12 = 3.33, H = 6.67/1 = 6.67, O = 53.33/16 = 3.33.<br>Ratio: C:H:O = 1 : 2 : 1 ⟶ Empirical Formula = <b>CH<sub>2</sub>O</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q78. Explain principle of Paper Chromatography and partition mechanism.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Paper chromatography relies on partition of solute between water held in paper fibers (stationary phase) and moving solvent.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q79. Explain why Nitro group (-NO<sub>2</sub>) is Meta-directing and Deactivating in electrophilic aromatic substitution.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      -NO<sub>2</sub> exerts strong -R and -I effects, withdrawing electron density from ortho/para positions, leaving meta position relatively less electron-deficient.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q80. Explain why Alkyl groups act as +I (Electron-Donating) groups.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Hyperconjugation and sp<sup>3</sup> carbon lower electronegativity relative to sp<sup>2</sup> carbon push electron density.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q81. 0.15 g compound gave 0.12 g AgBr in Carius method. Calculate % Bromine (Atomic mass Br = 80, AgBr = 188).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      %Br = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">80</span><span style="display:block; padding:0 4px;">188</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.12</span><span style="display:block; padding:0 4px;">0.15</span></span> × 100 = <b>34.04% Br</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q82. 0.20 g compound gave 0.233 g BaSO<sub>4</sub> in Carius sulfur estimation. Calculate % Sulfur.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      %S = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">32</span><span style="display:block; padding:0 4px;">233</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.233</span><span style="display:block; padding:0 4px;">0.20</span></span> × 100 = <b>16.0% S</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q83. Distinguish between Homolytic and Heterolytic cleavage with energy requirements.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Homolytic requires less energy in non-polar environment; Heterolytic favored in polar solvent due to solvation energy of ions.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q84. Explain why Alkenes undergo Electrophilic Addition while Arenes undergo Electrophilic Substitution.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Arenes retain aromatic resonance stabilization energy by undergoing substitution rather than addition.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q85. Explain concept of Resonance Energy using Benzene as example.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Detailed Solution:</b><br>
      Resonance Energy = Difference between experimental heat of hydrogenation of Benzene (-208 kJ) and theoretical 3 double bonds (-360 kJ) = <b>152 kJ/mol</b>.
    </div>
  </div>
  <!-- SECTION D: LONG ANSWER QUESTIONS (Q86 to Q100) -->
  <div style="background: rgba(255, 0, 127, 0.12); border: 1.5px solid #FF007F; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION D: Long Answer Questions (Q86 to Q100)</h2>
    <p style="color: #FF007F; margin: 0; font-size: 14px;">15 Advanced Conceptual & Analytical Questions • 5 Marks Each (Roman Subparts: (i) Theory + (ii) Step Numerical/Calculations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q86: Electronic Displacements & Inductive vs Resonance Effects</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Inductive (+I/-I) and Resonance (+R/-R) effects with mechanisms, substituent series, and physical consequences.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Inductive effect is permanent σ-shift decreasing with distance. Resonance effect is π-electron delocalization producing resonance hybrids.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Explain relative acid strengths of: (a) Formic acid vs Acetic acid, (b) Monochloroacetic acid vs Trichloroacetic acid, (c) Phenol vs Ethanol.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) Formic acid > Acetic acid (+I of CH<sub>3</sub> destabilizes acetate).<br>(b) Trichloroacetic acid >>> Monochloroacetic acid (3 -I Cl atoms stabilize CCl<sub>3</sub>COO<sup>-</sup>).<br>(c) Phenol > Ethanol (Phenoxide ion is resonance stabilized).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q87: Hyperconjugation Mechanics & Carbocation Stability</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Hyperconjugation (Baker-Nathan Effect), no-bond resonance structures, and explain carbocation stability order.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Delocalization of σ(C-H) electrons into empty 2p orbital. Number of structures = number of α-hydrogens. Stability: 3° (9 α-H) > 2° (6 α-H) > 1° (3 α-H).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Draw all hyperconjugative structures for Tertiary-Butyl carbocation (CH_3)_3C_plus and Ethyl carbocation CH_3CH_2_plus. Explain why 3° is more stable.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> has 9 α-H giving 9 hyperconjugative structures; CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> has only 3 α-H giving 3 structures. Higher resonance stabilization makes 3° carbocation far more stable!
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q88: Organic Reactive Intermediates & Attacking Reagents</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Compare Carbocations, Carbanions, Free Radicals, Electrophiles, and Nucleophiles (Definitions, Geometry, Hybridization, Stability).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Carbocations (sp<sup>2</sup> planar 6 e<sup>-</sup>), Carbanions (sp<sup>3</sup> pyramidal 8 e<sup>-</sup>), Free Radicals (sp<sup>2</sup> 7 e<sup>-</sup>), Electrophiles (Lewis acids), Nucleophiles (Lewis bases).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Classify as Electrophile or Nucleophile: (a) H_plus, (b) OH_minus, (c) BF_3, (d) NH_3, (e) AlCl_3, (f) CN_minus, (g) NO_2_plus.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      • Electrophiles: <b>H<sup>+</sup>, BF<sub>3</sub>, AlCl<sub>3</sub>, NO<sub>2</sub><sup>+</sup></b>.<br>• Nucleophiles: <b>OH<sup>-</sup>, NH<sub>3</sub>, CN<sup>-</sup></b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q89: Substitution Reaction Mechanisms (S_N1 vs S_N2)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Mechanisms of S_N1 (unimolecular 2-step) and S_N2 (bimolecular 1-step) nucleophilic substitutions.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      S<sub>N</sub>1 proceeds via carbocation (3° > 2° > 1°, racemization). S<sub>N</sub>2 proceeds via transition state (1° > 2° > 3°, Walden inversion).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Predict major mechanism (S_N1 or S_N2) and product for: (a) 2-Bromo-2-methylpropane + aqueous KOH, (b) 1-Bromobutane + NaCN in acetone.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) 2-Bromo-2-methylpropane is 3° ⟶ <b>S<sub>N</sub>1 mechanism</b> ⟶ <b>2-Methylpropan-2-ol</b>.<br>(b) 1-Bromobutane is 1° ⟶ <b>S<sub>N</sub>2 mechanism</b> ⟶ <b>Pentanenitrile</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q90: Addition & Elimination Mechanisms (Markovnikov & Saytzeff Rules)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Electrophilic Addition (Markovnikov rule) and Elimination (Saytzeff rule) mechanisms with structural examples.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Markovnikov addition forms more stable carbocation intermediate. Saytzeff elimination yields more substituted alkene.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Explain mechanism of: (a) Addition of HBr to Propene forming 2-Bromopropane, (b) Dehydrohalogenation of 2-Bromobutane forming But-2-ene as major product.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) H<sup>+</sup> adds to form 2° carbocation CH<sub>3</sub>CH<sup>+</sup>CH<sub>3</sub> (more stable than 1°), followed by Br<sup>-</sup> attack ⟶ 2-Bromopropane.<br>(b) Base removes β-hydrogen from C3 yielding But-2-ene (6 α-H, major Saytzeff product) over But-1-ene (2 α-H).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q91: Purification Techniques (Distillation Methods Comparison)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Compare Simple, Fractional, Steam, and Vacuum Distillation methods with apparatus principles and industrial examples.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Simple (Δb.p. > 30°C), Fractional (Δb.p. < 30°C), Steam (steam-volatile water-insoluble), Vacuum (decomposes at b.p.).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Select most suitable purification method for: (a) Aniline from aniline-water mixture, (b) Glycerol from spent lye, (c) Crude petroleum components, (d) Naphthalene from sand.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) <b>Steam Distillation</b>.<br>(b) <b>Distillation under Reduced Pressure (Vacuum)</b>.<br>(c) <b>Fractional Distillation</b>.<br>(d) <b>Sublimation</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q92: Qualitative Elemental Analysis (Lassaigne's Test Mechanics)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Lassaigne's Sodium Fusion Test for N, S, Cl, Br, I with ionic equations and color chemistry.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Na fuses covalent elements into NaCN, Na<sub>2</sub>S, NaX.<br>N ⟶ Prussian blue Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>; S ⟶ Black PbS; Cl ⟶ White AgCl; Br ⟶ Pale yellow AgBr; I ⟶ Yellow AgI.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Explain: (a) Why Sodium metal is used for fusion, (b) Why Lassaigne extract is boiled with concentrated HNO_3 before halide test, (c) Test for simultaneous presence of N and S.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) Na is highly reactive metal converting non-polar covalent bonds into ionic sodium salts.<br>(b) Concentrated HNO<sub>3</sub> decomposes NaCN and Na<sub>2</sub>S into HCN and H<sub>2</sub>S gases to prevent AgCN/Ag<sub>2</sub>S precipitates.<br>(c) N and S together form NaSCN ⟶ ferric thiocyanate <b>Blood Red color [Fe(SCN)]<sup>2+</sup></b> with FeCl<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q93: Quantitative Nitrogen Estimation (Dumas vs Kjeldahl Methods)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Compare Dumas Method (volume of N_2 gas at STP) and Kjeldahl Method (titration of NH_3) for Nitrogen estimation.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Dumas converts all N to N<sub>2</sub> gas. Kjeldahl digests N with H<sub>2</sub>SO<sub>4</sub> to (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>, liberating NH<sub>3</sub>.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) 0.25 g organic compound in Dumas method yielded 31.5 mL N_2 gas collected over water at 27°C and 750 mm Hg. Calculate % Nitrogen (Aqueous tension at 27°C = 15 mm Hg).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      P<sub>dry N2</sub> = 750 - 15 = 735 mm Hg.<br>V<sub>STP</sub> = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">735 × 31.5 × 273</span><span style="display:block; padding:0 4px;">760 × 300</span></span> = 27.71 mL.<br>%N = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">28 × 27.71</span><span style="display:block; padding:0 4px;">22400 × 0.25</span></span> × 100 = <b>13.85% N</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q94: Quantitative Halogen & Sulfur Estimation (Carius Method)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Carius Method for quantitative estimation of Halogens (Cl, Br, I) and Sulfur in organic compounds.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Compound heated with fuming HNO<sub>3</sub> and AgNO<sub>3</sub> (for halogens) forming AgX ppt, or with BaCl<sub>2</sub> (for S) forming BaSO<sub>4</sub> ppt.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) 0.156 g organic compound in Carius method gave 0.235 g AgBr. In another experiment, 0.204 g compound gave 0.185 g BaSO_4. Calculate % Bromine and % Sulfur.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) %Br = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">80</span><span style="display:block; padding:0 4px;">188</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.235</span><span style="display:block; padding:0 4px;">0.156</span></span> × 100 = <b>64.05% Br</b>.<br>(b) %S = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">32</span><span style="display:block; padding:0 4px;">233</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.185</span><span style="display:block; padding:0 4px;">0.204</span></span> × 100 = <b>12.45% S</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q95: IUPAC Rules & Nomenclature of Polyfunctional Compounds</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail comprehensive IUPAC priority series, principal group selection, lowest locant rule, and alphabetical prefix ordering.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Priority: -COOH > -SO<sub>3</sub>H > -COOR > -COCl > -CONH<sub>2</sub> > -CN > -CHO > >C=O > -OH > -NH<sub>2</sub> > alkene > alkyne.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Write correct IUPAC names for: (a) CH_3-CH(OH)-CH_2-CO-CH_3, (b) HO-CH_2-CH_2-CH_2-COOH, (c) CH_2=CH-CH_2-C#CH, (d) CH_3-CH(NH_2)-COOH.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) <b>4-Hydroxypentan-2-one</b>.<br>(b) <b>4-Hydroxybutanoic acid</b>.<br>(c) <b>Pent-1-en-4-yne</b>.<br>(d) <b>2-Aminopropanoic acid (Alanine)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q96: Chromatographic Separations & Column vs TLC Mechanics</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Thin Layer Chromatography (TLC), Column Chromatography, R_f values, and visualization reagents (UV, Iodine, Ninhydrin).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      TLC uses thin layer silica on glass plate. Mobile phase ascends by capillary action. R<sub>f</sub> = (distance compound)/(distance solvent).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) In TLC experiment, solvent front moved 10.0 cm. Compound A moved 4.0 cm while Compound B moved 7.5 cm. Calculate R_f values of A and B, and identify which compound is more strongly adsorbed on silica.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      R<sub>f</sub>(A) = 4.0 / 10.0 = <b>0.40</b>.<br>R<sub>f</sub>(B) = 7.5 / 10.0 = <b>0.75</b>.<br><i>Conclusion:</i> <b>Compound A</b> has smaller R<sub>f</sub> value, meaning it is more polar and more strongly adsorbed on silica stationary phase!
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q97: Structural Isomerism & Stereoisomerism Fundamentals</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Structural Isomerism types (Chain, Position, Functional, Metamerism, Tautomerism) and Geometrical Isomerism (cis/trans).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Chain (carbon skeleton), Position (substituent locant), Functional (different functional group), Metamerism (alkyl chain around heteroatom), Tautomerism (keto-enol proton shift).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Identify type of isomerism between: (a) Propan-1-ol and Propan-2-ol, (b) Ethoxyethane and Methoxypropane, (c) Propanal and Propanone, (d) cis-But-2-ene and trans-But-2-ene.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) <b>Position Isomerism</b>.<br>(b) <b>Metamerism</b>.<br>(c) <b>Functional Group Isomerism</b>.<br>(d) <b>Geometrical Isomerism (Stereoisomerism)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q98: Aromaticity & Hückel's Rule Application to Cyclic Ions</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail Hückel's Rule criteria (Cyclic, Planar, (4n+2) π-electrons) and analyze non-benzenoid aromatic species.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      System must be planar ring with continuous p-orbital overlap containing 2, 6, 10, 14 π-electrons.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Determine aromatic character of: (a) Cyclopropenyl cation, (b) Tropylium cation (C_7H_7_plus), (c) Cyclooctatetraene, (d) Pyridine.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) Cyclopropenyl cation: 2 π e<sup>-</sup> (n=0) ⟶ <b>Aromatic</b>.<br>(b) Tropylium cation: 6 π e<sup>-</sup> (n=1) ⟶ <b>Aromatic</b>.<br>(c) Cyclooctatetraene: 8 π e<sup>-</sup> (tub non-planar) ⟶ <b>Non-Aromatic</b>.<br>(d) Pyridine: 6 π e<sup>-</sup> (lone pair outside ring) ⟶ <b>Aromatic</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q99: Empirical & Molecular Formula Calculations from Combustion Data</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detail step-by-step methodology for determining Empirical and Molecular Formulas from elemental composition and molar mass.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      1. Calculate % mass of elements. 2. Divide % by atomic mass for mole ratio. 3. Divide by smallest mole value for simple whole number ratio. 4. Molecular Formula = Empirical Formula × n.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) An organic compound contains 62.07% C, 10.34% H, and 27.59% O. Its vapor density is 29. Calculate its Empirical Formula and Molecular Formula.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Moles: C = 62.07/12 = 5.17, H = 10.34/1 = 10.34, O = 27.59/16 = 1.72.<br>Divide by 1.72: C = 3, H = 6, O = 1 ⟶ <b>Empirical Formula = C<sub>3</sub>H<sub>6</sub>O</b> (Empirical mass = 58).<br>Molar Mass = 2 × Vapor Density = 2 × 29 = 58 g/mol.<br>n = 58 / 58 = 1 ⟶ <b>Molecular Formula = C<sub>3</sub>H<sub>6</sub>O (Propanal / Propanone!)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q100: Master Synthesis: Electronic Structure, Intermediates, Reaction Mechanics & Purification Analysis</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Synthesize complete unified framework connecting Hybridization & Structure ⟶ Electronic Displacements (I, E, R, Hyperconjugation) ⟶ Reactive Intermediates (Carbocations, Carbanions, Radicals) ⟶ Organic Reaction Mechanisms (S_N, S_E, Addition, Elimination) ⟶ Purification & Quantitative Analysis.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Tetravalent carbon hybridization defines 3D geometry. Electronic displacements dictate electron distribution, directing homolytic/heterolytic bond cleavage into reactive intermediates. Intermediates determine S<sub>N</sub>1/S<sub>N</sub>2 substitution, electrophilic addition, and Saytzeff elimination pathways. Purification methods isolate pure products, validated by Lassaigne qualitative tests and Dumas/Kjeldahl/Carius quantitative analysis.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) For 2-Bromobutane: (a) Write reaction with aqueous KOH (mechanism & major product), (b) Write reaction with alcoholic KOH (mechanism & major Saytzeff product), (c) Explain how Carius method estimates Bromine content.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      (a) Aqueous KOH ⟶ <b>Nucleophilic Substitution (S<sub>N</sub>1/S<sub>N</sub>2)</b> ⟶ <b>Butan-2-ol</b>.<br>(b) Alcoholic KOH ⟶ <b>Elimination (E2)</b> ⟶ <b>But-2-ene</b> (Saytzeff major product with 6 α-H).<br>(c) Heating sample with fuming HNO<sub>3</sub> and AgNO<sub>3</sub> precipitates AgBr; %Br = (80 / 188) × (m<sub>AgBr</sub> / m) × 100.
    </div>
  </div>
</div>
`;
