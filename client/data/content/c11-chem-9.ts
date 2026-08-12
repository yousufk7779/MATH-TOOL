// Class 11 Chemistry Chapter 9 - Hydrocarbons
// High-Level Full Reference Book Content (PW / Vedantu / RD Sharma / Unacademy Standard)

export const c11Chem9HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(41, 182, 246, 0.05); border: 1.5px solid #29B6F6; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #29B6F6; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: #29B6F6; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Chapter 9: Hydrocarbons</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>1. Hydrocarbons:</b> Binary organic compounds containing only Carbon and Hydrogen atoms (Alkanes, Alkenes, Alkynes, Arenes).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>2. Alkanes (Paraffins):</b> Saturated hydrocarbons with general formula C<sub>n</sub>H<sub>2n+2</sub> containing only C-C single σ-bonds (sp<sup>3</sup> hybridized).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>3. Conformations:</b> Infinite spatial arrangements of atoms formed by free rotation around C-C single σ-bonds (Sawhorse and Newman projections).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>4. Staggered Conformation:</b> Conformation of Ethane where C-H bonds are maximum distance apart (dihedral angle 60°), minimum torsional strain, maximum stability.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>5. Eclipsed Conformation:</b> Conformation of Ethane where C-H bonds directly align (dihedral angle 0°), maximum torsional strain (+12.5 kJ/mol), minimum stability.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>6. Wurtz Reaction:</b> Coupling of two alkyl halide molecules using sodium metal in dry ether to prepare higher alkanes with even carbon count.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>7. Free Radical Halogenation:</b> Substitution reaction of alkanes with halogens in UV light proceeding via Initiation, Propagation, and Termination steps.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>8. Alkenes (Olefins):</b> Unsaturated hydrocarbons with general formula C<sub>n</sub>H<sub>2n</sub> containing at least one C=C double bond (sp<sup>2</sup> hybridized).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>9. Geometrical Isomerism:</b> Stereoisomerism due to restricted rotation around C=C double bond forming <i>cis</i> (same side) and <i>trans</i> (opposite side) isomers.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>10. Markovnikov's Rule:</b> Addition of unsymmetrical reagent (HX) to unsymmetrical alkene places negative part (X<sup>-</sup>) on carbon with fewer H atoms.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>11. Kharasch Peroxide Effect:</b> Addition of HBr to unsymmetrical alkenes in presence of organic peroxides yields Anti-Markovnikov product via free radicals.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>12. Ozonolysis:</b> Oxidative cleavage of double/triple bonds using O<sub>3</sub> followed by Zn/H<sub>2</sub>O reduction to yield aldehydes and ketones.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>13. Alkynes:</b> Unsaturated hydrocarbons with general formula C<sub>n</sub>H<sub>2n-2</sub> containing at least one C≡C triple bond (sp hybridized).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>14. Acidic Nature of Alkynes:</b> Terminal alkynes contain sp hybridized carbons with 50% s-character, making C-H bond acidic enough to react with Na metal or NaNH<sub>2</sub>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>15. Cyclic Polymerization:</b> Passing ethyne through red-hot iron tube at 873 K causes 3 molecules to polymerize into Benzene (C<sub>6</sub>H<sub>6</sub>).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>16. Aromaticity (Hückel's Rule):</b> Planar, cyclic, conjugated systems possessing (4n + 2) π-electrons exhibiting extraordinary thermodynamic stability.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>17. Electrophilic Aromatic Substitution (S<sub>E</sub>Ar):</b> Primary reaction mode of benzene where an electrophile replaces ring hydrogen, proceeding via Arenium ion (σ-complex).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>18. Friedel-Crafts Reactions:</b> Alkylation (RCl + AlCl<sub>3</sub>) or Acylation (RCOCl + AlCl<sub>3</sub>) of benzene introducing alkyl or acyl groups onto ring.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>19. Ortho/Para Directing Groups:</b> Electron-donating groups (-OH, -NH<sub>2</sub>, -CH<sub>3</sub>) that activate benzene ring and direct incoming electrophiles to ortho and para positions.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #29B6F6; border-radius: 6px;">
        <b style='color: #29B6F6;'>20. Meta Directing Groups:</b> Electron-withdrawing groups (-NO<sub>2</sub>, -CN, -CHO, -COOH) that deactivate benzene ring and direct incoming electrophiles to meta position.
      </div>
    </div>
  </div>


  <!-- EXACT SYLLABUS HEADING 1 WORD-FOR-WORD -->
  <h2 style="color: #29B6F6; margin-top: 10px; font-size: 20px; font-weight: bold;">1. Classification of Hydrocarbons and Alkanes</h2>
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDMzNTciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMjlCNkY2IiBmbG9vZC1vcGFjaXR5PSIwLjUiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPjNEIEV0aGFuZSBDb25mb3JtYXRpb25zICZhbXA7IEh5ZHJvY2FyYm9uIEJvbmRpbmcgQXJjaGl0ZWN0dXJlPC90ZXh0PgogIAogIDwhLS0gTGVmdCBCb3g6IE5ld21hbiBQcm9qZWN0aW9ucyBvZiBFdGhhbmUgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TmV3bWFuIFByb2plY3Rpb25zIG9mIEV0aGFuZSAoQ+KCgkjigoYpPC90ZXh0PgoKICAgIDwhLS0gU3RhZ2dlcmVkIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAsIDE0MCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiMyOUI2RjYiLz4KICAgICAgPCEtLSBGcm9udCBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSItNDUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjM5IiB5Mj0iMjIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9Ii0zOSIgeTI9IjIyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTUyIiByPSI4IiBmaWxsPSIjRTBFMEUwIi8+PHRleHQgeD0iMCIgeT0iLTQ5IiBmb250LXNpemU9IjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5IPC90ZXh0PgogICAgICA8Y2lyY2xlIGN4PSI0NSIgY3k9IjI2IiByPSI4IiBmaWxsPSIjRTBFMEUwIi8+PHRleHQgeD0iNDUiIHk9IjI5IiBmb250LXNpemU9IjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5IPC90ZXh0PgogICAgICA8Y2lyY2xlIGN4PSItNDUiIGN5PSIyNiIgcj0iOCIgZmlsbD0iI0UwRTBFMCIvPjx0ZXh0IHg9Ii00NSIgeT0iMjkiIGZvbnQtc2l6ZT0iOSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkg8L3RleHQ+CiAgICAgIDwhLS0gQmFjayBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iNDUiIHgyPSIwIiB5Mj0iNTUiIHN0cm9rZT0iIzgxRDRGQSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGxpbmUgeDE9Ii0zOSIgeTE9Ii0yMiIgeDI9Ii00OCIgeTI9Ii0yNyIgc3Ryb2tlPSIjODFENEZBIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iMzkiIHkxPSItMjIiIHgyPSI0OCIgeTI9Ii0yNyIgc3Ryb2tlPSIjODFENEZBIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSIyMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3RhZ2dlcmVkIChEaWhlZHJhbCA2MMKwKTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWF4IFN0YWJpbGl0eSB8IE1pbiBUb3JzaW9uYWwgU3RyYWluPC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gRWNsaXBzZWQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjAsIDE0MCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiMyOUI2RjYiLz4KICAgICAgPCEtLSBGcm9udCBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSItNDUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjM5IiB5Mj0iMjIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9Ii0zOSIgeTI9IjIyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgICA8IS0tIEVjbGlwc2VkIEJhY2sgQy1IIChzbGlnaHRseSBvZmZzZXQpIC0tPgogICAgICA8bGluZSB4MT0iOCIgeTE9Ii00NCIgeDI9IjEyIiB5Mj0iLTUyIiBzdHJva2U9IiNGRjUyNTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDxsaW5lIHgxPSI0NCIgeTE9IjE2IiB4Mj0iNTIiIHkyPSIyMCIgc3Ryb2tlPSIjRkY1MjUyIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSIyMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNTI1MiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RWNsaXBzZWQgKERpaGVkcmFsIDDCsCk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjI0MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1pbiBTdGFiaWxpdHkgfCArMTIuNSBrSi9tb2wgU3RyYWluPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBSaWdodCBCb3g6IEh5ZHJvY2FyYm9uIENsYXNzZXMgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDIwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSg0MSwxODIsMjQ2LDAuMDYpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MUQ0RkEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkh5ZHJvY2FyYm9uIENsYXNzaWZpY2F0aW9uICZhbXA7IEJvbmRpbmc8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjU1IiB3aWR0aD0iMzEwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4xLiBBbGthbmVzIChDX24gSF8ybisyKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgU2luZ2xlIM+DLWJvbmRzLCBzcMKzIHRldHJhaGVkcmFsICgxMDkuNcKwKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBGcmVlIFJhZGljYWwgSGFsb2dlbmF0aW9uICZhbXA7IFd1cnR6IFJlYWN0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4yLiBBbGtlbmVzIChDX24gSF8ybik6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE3MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiBEb3VibGUgYm9uZCAoMSDPgyArIDEgz4ApLCBzcMKyIHRyaWdvbmFsIHBsYW5hciAoMTIwwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE5MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzgxRDRGQSI+4oCiIEdlb21ldHJpY2FsIElzb21lcmlzbSAmYW1wOyBFbGVjdHJvcGhpbGljIEFkZGl0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIyMTUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4zLiBBbGt5bmVzIChDX24gSF8ybi0yKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjUzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCI+4oCiIFRyaXBsZSBib25kICgxIM+DICsgMiDPgCksIHNwIGxpbmVhciAoMTgwwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjI3MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzgxRDRGQSI+4oCiIEFjaWRpYyBUZXJtaW5hbCBIeWRyb2dlbnMgKEhD4omhQ0ggKyBOYSDin7YgTmFD4omhQ0gpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(41, 182, 246, 0.35); border: 1.5px solid #29B6F6;" alt="3D Ethane Conformations" /><p style="color: #29B6F6; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 9.1: 3D Ethane Conformations (Newman &amp; Sawhorse Projections) &amp; Hydrocarbon Classification</p></div>

  <p>Hydrocarbons are organic compounds composed exclusively of Carbon and Hydrogen. They are classified into <b>Saturated Hydrocarbons (Alkanes)</b> containing only single C-C σ-bonds, <b>Unsaturated Hydrocarbons (Alkenes & Alkynes)</b> containing C=C double or C≡C triple bonds, and <b>Aromatic Hydrocarbons (Arenes)</b> containing cyclic conjugated resonance systems.</p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(i) Alkanes: Nomenclature, Isomerism & Conformations</h3>
  <p>• <b>Nomenclature & Isomerism:</b> General formula C<sub>n</sub>H<sub>2n+2</sub>. Alkanes exhibit <b>Chain Isomerism</b> (e.g., Butane has 2 isomers: n-butane and isobutane; Pentane has 3 isomers: n-pentane, isopentane, neopentane).<br>
  • <b>Conformations of Ethane (C<sub>2</sub>H<sub>6</sub>):</b> Free rotation around C-C single σ-bond produces infinite spatial arrangements. Two extreme conformations:<br>
  1. <i>Staggered Conformation:</i> Dihedral angle = 60°. Minimum repulsion between C-H electron clouds. <b>Most stable conformation!</b><br>
  2. <i>Eclipsed Conformation:</i> Dihedral angle = 0°. Maximum repulsion creating <b>torsional strain (+12.5 kJ/mol)</b>. Least stable conformation.</p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(ii) Methods of Preparation of Alkanes</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b>Wurtz Reaction:</b> 2 R-X + 2 Na <span style='color: #29B6F6;'>⟶ (Dry Ether)</span> R-R + 2 NaX. <i>Used for even-carbon symmetric alkanes!</i></li>
    <li><b>Decarboxylation of Carboxylate Salts:</b> R-COONa + NaOH <span style='color: #29B6F6;'>⟶ (CaO / Heat)</span> R-H + Na<sub>2</sub>CO<sub>3</sub>. <i>Alkanes produced contain 1 less carbon than parent acid!</i></li>
    <li><b>Kolbe's Electrolytic Method:</b> Electrolysis of aqueous sodium carboxylate yields alkane at anode: 2 RCOO<sup>-</sup> <span style='color: #29B6F6;'>⟶</span> R-R + 2 CO<sub>2</sub> + 2 e<sup>-</sup>.</li>
    <li><b>Reduction of Alkyl Halides:</b> R-X + H<sub>2</sub> <span style='color: #29B6F6;'>⟶ (Zn / HCl or LiAlH<sub>4</sub>)</span> R-H + HX.</li>
  </ul>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(iii) Chemical Reactions & Free Radical Halogenation Mechanism</h3>
  <p>• <b>Free Radical Halogenation Mechanism (CH<sub>4</sub> + Cl<sub>2</sub> ⟶ CH<sub>3</sub>Cl + HCl in UV light):</b><br>
  1. <i>Initiation:</i> Homolytic cleavage of Cl<sub>2</sub> molecule: Cl-Cl <span style='color: #29B6F6;'>⟶ (hν)</span> 2 Cl<sup>•</sup>.<br>
  2. <i>Propagation:</i> Cl<sup>•</sup> + CH<sub>4</sub> ⟶ CH<sub>3</sub><sup>•</sup> + HCl; CH<sub>3</sub><sup>•</sup> + Cl<sub>2</sub> ⟶ CH<sub>3</sub>Cl + Cl<sup>•</sup>.<br>
  3. <i>Termination:</i> Coupling of free radicals: 2 Cl<sup>•</sup> ⟶ Cl<sub>2</sub>; CH<sub>3</sub><sup>•</sup> + Cl<sup>•</sup> ⟶ CH<sub>3</sub>Cl; 2 CH<sub>3</sub><sup>•</sup> ⟶ C<sub>2</sub>H<sub>6</sub>.<br>
  • <b>Combustion:</b> C<sub>n</sub>H<sub>2n+2</sub> + <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">(3n+1)</span><span style="display:block; padding:0 4px;">2</span></span> O<sub>2</sub> ⟶ n CO<sub>2</sub> + (n+1) H<sub>2</sub>O + ΔH.<br>
  • <b>Pyrolysis (Cracking):</b> Heating higher alkanes at high temperature (>700 K) breaks C-C and C-H bonds into lower alkanes, alkenes, and hydrogen gas.</p>


  <!-- EXACT SYLLABUS HEADING 2 WORD-FOR-WORD -->
  <h2 style="color: #29B6F6; margin-top: 30px; font-size: 20px; font-weight: bold;">2. Alkenes: Structure, Isomerism, Preparation and Reactions</h2>
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDJkNDIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbGtlbmUgUmVhY3Rpb24gTWVjaGFuaXNtcyAmYW1wOyBHZW9tZXRyaWNhbCBJc29tZXJpc208L3RleHQ+CgogIDwhLS0gTGVmdCBCb3g6IEdlb21ldHJpY2FsIElzb21lcmlzbSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoNDEsMTgyLDI0NiwwLjA2KSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HZW9tZXRyaWNhbCBJc29tZXJpc20gKGNpcyAvIHRyYW5zKTwvdGV4dD4KCiAgICA8IS0tIGNpcy1CdXQtMi1lbmUgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MCwgMTMwKSI+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSIwIiB4Mj0iMzAiIHkyPSIwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSItNiIgeDI9IjMwIiB5Mj0iLTYiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDwhLS0gR3JvdXBzIG9uIHRvcCAtLT4KICAgICAgPGxpbmUgeDE9Ii0zMCIgeTE9IjAiIHgyPSItNTUiIHkyPSItMzUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDx0ZXh0IHg9Ii02NSIgeT0iLTQwIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiI+Q0jigoM8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1NSIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgICAgPHRleHQgeD0iNTUiIHk9Ii00MCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPkNI4oKDPC90ZXh0PgogICAgICA8IS0tIEggb24gYm90dG9tIC0tPgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9Ii01NSIgeT0iNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNFMEUwRTAiPkg8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0UwRTBFMCI+SDwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iODUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y2lzLUJ1dC0yLWVuZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMTAzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrwgJmd0OyAwIHwgSGlnaGVyIGIucC4gKDQgwrBDKTwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIHRyYW5zLUJ1dC0yLWVuZSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MCwgMTMwKSI+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSIwIiB4Mj0iMzAiIHkyPSIwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSItNiIgeDI9IjMwIiB5Mj0iLTYiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDwhLS0gT3Bwb3NpdGUgZ3JvdXBzIC0tPgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01NSIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgICAgPHRleHQgeD0iLTY1IiB5PSItNDAiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2Ij5DSOKCgzwvdGV4dD4KICAgICAgPGxpbmUgeDE9IjMwIiB5MT0iMCIgeDI9IjU1IiB5Mj0iMzUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDx0ZXh0IHg9IjU1IiB5PSI1MCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPkNI4oKDPC90ZXh0PgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9Ii01NSIgeT0iNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNFMEUwRTAiPkg8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1MCIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSI1MCIgeT0iLTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRTBFMEUwIj5IPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSI4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50cmFucy1CdXQtMi1lbmU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjEwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPs68ID0gMCB8IEhpZ2hlciBtLnAuICgtMTA1IMKwQyk8L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIFJpZ2h0IEJveDogQWRkaXRpb24gJiBPem9ub2x5c2lzIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoNDEsMTgyLDI0NiwwLjA2KSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbGVjdHJvcGhpbGljIEFkZGl0aW9uICZhbXA7IE96b25vbHlzaXM8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjU1IiB3aWR0aD0iMzEwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5NYXJrb3ZuaWtvdidzIEFkZGl0aW9uIFJ1bGU6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjkzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCI+4oCiIEjigbogYWRkcyB0byBmb3JtIG1vcmUgc3RhYmxlIGNhcmJvY2F0aW9uICgywrAgJmd0OyAxwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzAwRTY3NiI+Q0jigoMtQ0g9Q0jigoIgKyBIQnIg4p+2IENI4oKDLUNIKEJyKS1DSOKCgyAoTWFqb3IpPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5LaGFyYXNjaCBQZXJveGlkZSBFZmZlY3QgKEFudGktTWFya292bmlrb3YpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNzMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgRnJlZSByYWRpY2FsIGFkZGl0aW9uIG9mIEhCciBpbiBvcmdhbmljIHBlcm94aWRlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiMwMEU2NzYiPkNI4oKDLUNIPUNI4oKCICsgSEJyIC8gUGVyb3hpZGUg4p+2IENI4oKDQ0jigoJDSOKCgkJyPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIyMTUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5SZWR1Y3RpdmUgT3pvbm9seXNpcyAoT+KCgyAvIFpuICsgSOKCgk8pOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIyNTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgQ2xlYXZlcyBDPUMgZG91YmxlIGJvbmQgaW50byBjYXJib255bHMgKENITyAvIEM9Tyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjODFENEZBIj7igKIgS2V5IGFuYWx5dGljYWwgdG9vbCBmb3IgZG91YmxlIGJvbmQgbG9jYXRpb24hPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(41, 182, 246, 0.35); border: 1.5px solid #29B6F6;" alt="3D Alkene Reactions" /><p style="color: #29B6F6; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 9.2: Alkene Geometrical Isomerism (cis/trans), Markownikoff Addition &amp; Reductive Ozonolysis</p></div>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(i) Nomenclature, Structure of Double Bond & Geometrical Isomerism</h3>
  <p>• <b>Structure of Ethene (CH<sub>2</sub>=CH<sub>2</sub>):</b> Carbon atoms are sp<sup>2</sup> hybridized forming 3 σ-bonds (120° trigonal planar geometry). The unhybridized 2p-orbitals overlap sideways to form 1 π-bond.<br>
  • <b>Geometrical Isomerism (cis / trans):</b> Restricted rotation around C=C double bond produces stereoisomers when each double bonded carbon has two different substituents:<br>
  - <i>cis-Isomer:</i> Identical groups on same side of double bond (e.g. cis-But-2-ene). Higher dipole moment (μ > 0) and higher boiling point!<br>
  - <i>trans-Isomer:</i> Identical groups on opposite sides (e.g. trans-But-2-ene). Symmetric, dipole moments cancel (μ = 0), higher melting point due to better crystal packing!</p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(ii) Methods of Preparation of Alkenes</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b>Dehydration of Alcohols:</b> R-CH<sub>2</sub>-CH<sub>2</sub>-OH <span style='color: #29B6F6;'>⟶ (Conc. H<sub>2</sub>SO<sub>4</sub> / 443 K)</span> R-CH=CH<sub>2</sub> + H<sub>2</sub>O. (Order of ease: 3° > 2° > 1° alcohols).</li>
    <li><b>Dehydrohalogenation of Alkyl Halides:</b> R-CH<sub>2</sub>-CH<sub>2</sub>-X + alc. KOH <span style='color: #29B6F6;'>⟶ (Δ)</span> R-CH=CH<sub>2</sub> + KX + H<sub>2</sub>O. Follows <b>Saytzeff Rule</b> (more substituted alkene is major product!).</li>
    <li><b>Controlled Partial Hydrogenation of Alkynes:</b><br>
    - Alkyne + H<sub>2</sub> <span style='color: #29B6F6;'>⟶ (Lindlar's Catalyst: Pd/CaCO<sub>3</sub> + Quinoline)</span> <b>cis-Alkene</b>.<br>
    - Alkyne + Na / Liquid NH<sub>3</sub> <span style='color: #29B6F6;'>⟶ (Birch Reduction)</span> <b>trans-Alkene</b>.</li>
  </ul>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(iii) Electrophilic Addition Reactions & Ozonolysis</h3>
  <p>• <b>Electrophilic Addition Mechanism:</b> π-electrons attack electrophile E<sup>+</sup> forming carbocation intermediate, followed by nucleophile attack.<br>
  • <b>Markovnikov's Addition vs Anti-Markovnikov Peroxide Effect:</b><br>
  - <i>Markovnikov Addition:</i> CH<sub>3</sub>-CH=CH<sub>2</sub> + HBr ⟶ <b>2-Bromopropane</b> (via 2° carbocation).<br>
  - <i>Kharasch Peroxide Effect:</i> CH<sub>3</sub>-CH=CH<sub>2</sub> + HBr <span style='color: #29B6F6;'>⟶ (Org. Peroxides)</span> <b>1-Bromopropane</b> (via 2° free radical).<br>
  • <b>Ozonolysis (Reductive):</b> Cleaves C=C bond with O<sub>3</sub> followed by Zn/H<sub>2</sub>O reduction. Used for locating double bond position:<br>
  <span style="color: #29B6F6; font-weight: bold; display: block; text-align: center; margin: 8px 0;">CH<sub>3</sub>-CH=CH-CH<sub>3</sub> + O<sub>3</sub> ⟶ Ozonide ⟶ (Zn/H<sub>2</sub>O) 2 CH<sub>3</sub>CHO (Acetaldehyde)</span>
  • <b>Baeyer's Test:</b> Cold dilute alkaline KMnO₄ (pink color) oxidizes alkenes to vicinal glycols, decolorizing pink solution (test for unsaturation!).</p>


  <!-- EXACT SYLLABUS HEADING 3 WORD-FOR-WORD -->
  <h2 style="color: #29B6F6; margin-top: 30px; font-size: 20px; font-weight: bold;">3. Alkynes: Structure, Acidic Character, Preparation and Reactions</h2>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(i) Structure of Triple Bond & Physical Properties</h3>
  <p>• <b>Structure of Ethyne (HC≡CH):</b> Carbon atoms are sp hybridized forming 1 σ-bond and 2 perpendicular π-bonds (linear 180° geometry, C≡C bond length = 120 pm).<br>
  • <b>Physical Properties:</b> Non-polar, insoluble in water, soluble in organic solvents. Boiling points increase with molecular mass.</p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(ii) Preparation & Acidic Character of Terminal Alkynes</h3>
  <p>• <b>Industrial Preparation from Calcium Carbide:</b> CaC<sub>2</sub> + 2 H<sub>2</sub>O ⟶ Ca(OH)<sub>2</sub> + HC≡CH.<br>
  • <b>Acidic Character of Terminal Alkynes:</b> Hydrogen attached to sp hybridized carbon has 50% s-character (high electronegativity), rendering it acidic:<br>
  1. <i>Reaction with Sodium Metal:</i> 2 HC≡CH + 2 Na ⟶ 2 HC≡C<sup>-</sup> Na<sup>+</sup> (Monosodium acetylide) + H<sub>2</sub>.<br>
  2. <i>Tollen's Test (Ammoniacal AgNO<sub>3</sub>):</i> HC≡CH + 2 AgNO<sub>3</sub> + 2 NH<sub>4</sub>OH ⟶ <b>White ppt of Silver Acetylide (AgC≡CAg)</b>.<br>
  3. <i>Ammoniacal Cuprous Chloride Test:</i> HC≡CH + Cu<sub>2</sub>Cl<sub>2</sub> + 2 NH<sub>4</sub>OH ⟶ <b>Red ppt of Copper Acetylide (CuC≡CCu)</b>.</p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(iii) Chemical Addition Reactions & Cyclic Polymerization</h3>
  <p>• <b>Addition Reactions:</b> Alkynes undergo two-step electrophilic addition of H<sub>2</sub>, X<sub>2</sub>, HX, and H<sub>2</sub>O.<br>
  • <b>Hydration of Alkynes:</b> HC≡CH + H<sub>2</sub>O <span style='color: #29B6F6;'>⟶ (1% HgSO<sub>4</sub> / 33% H<sub>2</sub>SO<sub>4</sub> at 333 K)</span> [CH<sub>2</sub>=CH-OH] <span style='color: #29B6F6;'>⟶ (Tautomerism)</span> <b>CH<sub>3</sub>CHO (Acetaldehyde)</b>. Propyne yields Acetone!<br>
  • <b>Cyclic Polymerization:</b> 3 HC≡CH <span style='color: #29B6F6;'>⟶ (Red hot iron tube / 873 K)</span> <b>Benzene (C<sub>6</sub>H<sub>6</sub>)</b>.</p>


  <!-- EXACT SYLLABUS HEADING 4 WORD-FOR-WORD -->
  <h2 style="color: #29B6F6; margin-top: 30px; font-size: 20px; font-weight: bold;">4. Aromatic Hydrocarbons: Benzene, Aromaticity, Electrophilic Substitution and Directive Influence</h2>
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDNkNWMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Bcm9tYXRpYyBIeWRyb2NhcmJvbnM6IEJlbnplbmUgUmVzb25hbmNlICZhbXA7IERpcmVjdGl2ZSBJbmZsdWVuY2U8L3RleHQ+CgogIDwhLS0gTGVmdCBCb3g6IEJlbnplbmUgUmVzb25hbmNlICYgQXJvbWF0aWNpdHkgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmVuemVuZSAoQ+KChkjigoYpIFJlc29uYW5jZSAmYW1wOyBBcm9tYXRpY2l0eTwvdGV4dD4KCiAgICA8IS0tIEtla3Vsw6kgc3RydWN0dXJlcyAmIEh5YnJpZCAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwLCAxMzApIj4KICAgICAgPHBvbHlnb24gcG9pbnRzPSIwLC0zMCAyNiwtMTUgMjYsMTUgMCwzMCAtMjYsMTUgLTI2LC0xNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iLTIwIiB5MT0iLTExIiB4Mj0iLTIwIiB5Mj0iMTEiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGxpbmUgeDE9IjQiIHkxPSItMjMiIHgyPSIyMiIgeTI9Ii0xMiIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iNCIgeTE9IjIzIiB4Mj0iMjIiIHkyPSIxMiIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPktla3Vsw6kgSTwvdGV4dD4KICAgIDwvZz4KCiAgICA8dGV4dCB4PSIxNzUiIHk9IjEzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ih4Hih4E8L3RleHQ+CgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgwLCAxMzApIj4KICAgICAgPHBvbHlnb24gcG9pbnRzPSIwLC0zMCAyNiwtMTUgMjYsMTUgMCwzMCAtMjYsMTUgLTI2LC0xNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMyIvPgogICAgICA8dGV4dCB4PSIwIiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM4MUQ0RkEiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZXNvbmFuY2UgSHlicmlkPC90ZXh0PgogICAgPC9nPgoKICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkjDvGNrZWwncyBSdWxlOiAoNG4gKyAyKSDPgC1lbGVjdHJvbnMgKG4gPSAxKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oCiIEFsbCBDLUMgYm9uZHMgZXF1YWwgKDEzOSBwbSwgYmV0d2VlbiAxNTQgJmFtcDsgMTM0IHBtKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjYzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oCiIFJlc29uYW5jZSBFbmVyZ3kgPSAxNTIga0ovbW9sPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBSaWdodCBCb3g6IEVsZWN0cm9waGlsaWMgU3Vic3RpdHV0aW9uICYgRGlyZWN0aXZlIEluZmx1ZW5jZSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U19FIEFyIFJlYWN0aW9ucyAmYW1wOyBEaXJlY3RpdmUgSW5mbHVlbmNlPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSI1MCIgd2lkdGg9IjMxMCIgaGVpZ2h0PSI3NSIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIzMCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzI5QjZGNiI+U19FIEFyIE1lY2hhbmlzbSBTdGVwczo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iODgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNEREQiPjEuIEdlbmVyYXRpb24gb2YgRWxlY3Ryb3BoaWxlIChOT+KCguKBuiwgQ2zigbosIFLigbosIFJDT+KBuik8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTA0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjREREIj4yLiBGb3JtYXRpb24gb2YgQXJlbml1bSBJb24gKM+DLWNvbXBsZXggaW50ZXJtZWRpYXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMTkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiMwMEU2NzYiPjMuIExvc3Mgb2YgSOKBuiBmcm9tIM+DLWNvbXBsZXggcmVzdG9yaW5nIGFyb21hdGljaXR5PC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzUiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2Ij5PcnRobyAmYW1wOyBQYXJhIERpcmVjdGluZyBHcm91cHMgKEFjdGl2YXRpbmcpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNzMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNEREQiPuKAoiBFbGVjdHJvbiBkb25hdGluZzogLU9ILCAtTkjigoIsIC1PQ0jigoMsIC1DSOKCgzwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBJbmNyZWFzZXMgZWxlY3Ryb24gZGVuc2l0eSBhdCBvcnRobyAmYW1wOyBwYXJhIHBvc2l0aW9ucyE8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjIyMCIgd2lkdGg9IjMxMCIgaGVpZ2h0PSI3NSIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPk1ldGEgRGlyZWN0aW5nIEdyb3VwcyAoRGVhY3RpdmF0aW5nKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjU4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjREREIj7igKIgRWxlY3Ryb24gd2l0aGRyYXdpbmc6IC1OT+KCgiwgLUNOLCAtQ0hPLCAtQ09PSDwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIyNzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBXaXRoZHJhd3MgZeKBuyBkZW5zaXR5IGZyb20gby9wLCBkaXJlY3RpbmcgReKBuiB0byBtZXRhPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(41, 182, 246, 0.35); border: 1.5px solid #29B6F6;" alt="3D Aromatic Hydrocarbons" /><p style="color: #29B6F6; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 9.3: Benzene Aromaticity (Resonance Hybrid), Electrophilic Substitution Mechanism &amp; Directive Influence</p></div>

  <p>Aromatic hydrocarbons (Arenes) contain cyclic planar conjugated systems exhibiting extraordinary thermodynamic stability due to electron delocalization.</p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(i) Benzene Structure, Resonance & Hückel's Rule</h3>
  <p>• <b>Kekulé Structure & Resonance Hybrid:</b> Benzene (C<sub>6</sub>H<sub>6</sub>) is a planar ring of 6 sp<sup>2</sup> carbon atoms. Delocalization of 6 π-electrons yields a resonance hybrid with equal C-C bond lengths (139 pm) and high <b>Resonance Energy (152 kJ/mol)</b>.<br>
  • <b>Hückel's Rule of Aromaticity:</b> Monocyclic conjugated planar rings containing <b>(4n + 2) π-electrons</b> (where n = 0, 1, 2...) are aromatic (Benzene has 6 π-electrons, n = 1).</p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(ii) Electrophilic Aromatic Substitution (S<sub>E</sub>Ar) Mechanism</h3>
  <p>S<sub>E</sub>Ar proceeds via 3 key steps: 1. Electrophile E<sup>+</sup> generation; 2. Attack on benzene ring forming carbocation <b>Arenium Ion (σ-complex)</b>; 3. Loss of proton restoring aromaticity.<br>
  • <b>Standard S<sub>E</sub>Ar Reactions of Benzene:</b><br>
  1. <i>Nitration:</i> C<sub>6</sub>H<sub>6</sub> + Conc. HNO<sub>3</sub> <span style='color: #29B6F6;'>⟶ (Conc. H<sub>2</sub>SO<sub>4</sub> / 333 K)</span> C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + H<sub>2</sub>O. (Electrophile: NO<sub>2</sub><sup>+</sup>).<br>
  2. <i>Halogenation:</i> C<sub>6</sub>H<sub>6</sub> + Cl<sub>2</sub> <span style='color: #29B6F6;'>⟶ (Anhyd. FeCl<sub>3</sub>)</span> C<sub>6</sub>H<sub>5</sub>Cl + HCl. (Electrophile: Cl<sup>+</sup>).<br>
  3. <i>Sulphonation:</i> C<sub>6</sub>H<sub>6</sub> + Fuming H<sub>2</sub>SO<sub>4</sub> <span style='color: #29B6F6;'>⟶ (SO<sub>3</sub>)</span> C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H. (Electrophile: SO<sub>3</sub>).<br>
  4. <i>Friedel-Crafts Alkylation:</i> C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>Cl <span style='color: #29B6F6;'>⟶ (Anhyd. AlCl<sub>3</sub>)</span> C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> (Toluene) + HCl.<br>
  5. <i>Friedel-Crafts Acylation:</i> C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl <span style='color: #29B6F6;'>⟶ (Anhyd. AlCl<sub>3</sub>)</span> C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> (Acetophenone) + HCl.</p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 18px;">(iii) Directive Influence of Substituents & Polynuclear Aromatics</h3>
  <p>• <b>Ortho & Para Directing Groups (Ring Activators):</b> Electron-donating groups (-OH, -NH<sub>2</sub>, -OCH<sub>3</sub>, -CH<sub>3</sub>) donate electron density via +R / +I, increasing electron density preferentially at <i>ortho</i> and <i>para</i> positions.<br>
  • <b>Meta Directing Groups (Ring Deactivators):</b> Electron-withdrawing groups (-NO<sub>2</sub>, -CN, -CHO, -COOH, -SO<sub>3</sub>H) withdraw electron density via -R / -I, deactivating ortho/para positions more than meta, directing incoming E<sup>+</sup> to <i>meta</i> position.<br>
  • <b>Halogens Exception:</b> Halogens (-Cl, -Br) are deactivating due to strong -I effect, but <b>ortho/para directing</b> due to +R lone-pair donation!<br>
  • <b>Carcinogenicity:</b> Polynuclear aromatic hydrocarbons (PAHs) containing >2 fused benzene rings (e.g., 1,2-Benzanthracene, 3-Methylcholanthrene) are toxic and carcinogenic.</p>


  <!-- BOTTOM CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(41, 182, 246, 0.15), rgba(2, 136, 209, 0.15)); border: 1.5px solid #29B6F6; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #29B6F6; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Chapter 9 Formula &amp; Reaction Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b>Wurtz Reaction:</b> 2 R-X + 2 Na ⟶ R-R + 2 NaX (Dry ether).</li>
      <li><b>Markovnikov Addition:</b> H<sup>+</sup> to double bond ⟶ More stable carbocation (2-Bromopropane).</li>
      <li><b>Peroxide Effect:</b> HBr + Peroxides ⟶ 1-Bromopropane (Free radical).</li>
      <li><b>Ozonolysis Cleavage:</b> Cleaves C=C ⟶ Aldehydes / Ketones (Zn/H<sub>2</sub>O).</li>
      <li><b>Ethyne Hydration:</b> HC≡CH + H<sub>2</sub>O (Hg<sup>2+</sup>/H<sup>+</sup>) ⟶ CH<sub>3</sub>CHO.</li>
      <li><b>Benzene S<sub>E</sub>Ar Electrophiles:</b> Nitration (NO<sub>2</sub><sup>+</sup>), Halogenation (Cl<sup>+</sup>), F-C Alkylation (R<sup>+</sup>).</li>
    </ul>
  </div>

</div>
`;

export const c11Chem9HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- SECTION A: OBJECTIVE & MCQS (25 Questions) -->
  <div style="background: rgba(41, 182, 246, 0.12); border: 1.5px solid #29B6F6; border-radius: 10px; padding: 14px; margin-bottom: 20px;">
    <h2 style="color: #29B6F6; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION A: Objective & Multiple Choice Questions (Q1 to Q25)</h2>
    <p style="color: #29B6F6; margin: 0; font-size: 14px;">25 Expected MCQs • 1 Mark Each (18 Conceptual Theory + 7 Calculations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q1. Which conformation of ethane is the MOST stable?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Eclipsed &nbsp;&nbsp;&nbsp;&nbsp; (B) Staggered<br>
      (C) Skew &nbsp;&nbsp;&nbsp;&nbsp; (D) Gauche
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Staggered</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> In staggered conformation, dihedral angle is 60°, minimizing torsional strain and electron cloud repulsion.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q2. Wurtz reaction of Chloromethane (CH<sub>3</sub>Cl) yields:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Methane &nbsp;&nbsp;&nbsp;&nbsp; (B) Ethane<br>
      (C) Propane &nbsp;&nbsp;&nbsp;&nbsp; (D) Butane
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Ethane</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> 2 CH<sub>3</sub>Cl + 2 Na ⟶ CH<sub>3</sub>-CH<sub>3</sub> + 2 NaCl.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q3. Addition of HBr to Propene in presence of organic peroxides yields:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 2-Bromopropane &nbsp;&nbsp;&nbsp;&nbsp; (B) 1-Bromopropane<br>
      (C) 1,2-Dibromopropane &nbsp;&nbsp;&nbsp;&nbsp; (D) 2-Propanol
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) 1-Bromopropane</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Kharasch peroxide effect causes anti-Markovnikov addition of HBr via 2° free radical intermediate.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q4. Ozonolysis of But-2-ene followed by Zn/H<sub>2</sub>O reduction yields:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Methanal &nbsp;&nbsp;&nbsp;&nbsp; (B) Ethanal (Acetaldehyde)<br>
      (C) Propanal &nbsp;&nbsp;&nbsp;&nbsp; (D) Acetone
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Ethanal (Acetaldehyde)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> CH<sub>3</sub>-CH=CH-CH<sub>3</sub> cleaves at double bond yielding 2 molecules of CH<sub>3</sub>CHO.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q5. Which reagent converts Alkynes into cis-Alkenes?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Na / liquid NH<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (B) Lindlar's Catalyst (Pd/CaCO<sub>3</sub> + Quinoline)<br>
      (C) Conc. H<sub>2</sub>SO<sub>4</sub> &nbsp;&nbsp;&nbsp;&nbsp; (D) Zn / HCl
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Lindlar's Catalyst (Pd/CaCO<sub>3</sub> + Quinoline)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Lindlar's poisoned catalyst selectively yields cis-alkenes via syn-addition of H<sub>2</sub>.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q6. What is the major product when Sodium Acetate is heated with Soda Lime (NaOH + CaO)?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Ethane &nbsp;&nbsp;&nbsp;&nbsp; (B) Methane<br>
      (C) Propane &nbsp;&nbsp;&nbsp;&nbsp; (D) Methanol
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Methane</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> CH<sub>3</sub>COONa + NaOH ⟶ CH<sub>3</sub>-H + Na<sub>2</sub>CO<sub>3</sub> (Decarboxylation).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q7. Which of the following is an Ortho/Para directing and Activating group?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) -NO<sub>2</sub> &nbsp;&nbsp;&nbsp;&nbsp; (B) -CHO<br>
      (C) -OH &nbsp;&nbsp;&nbsp;&nbsp; (D) -COOH
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (C) -OH</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> -OH group donates lone pair via +R effect, activating ring and directing electrophiles to o/p positions.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q8. Passing Ethyne (HC≡CH) through a red-hot iron tube at 873 K yields:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Ethene &nbsp;&nbsp;&nbsp;&nbsp; (B) Ethane<br>
      (C) Benzene &nbsp;&nbsp;&nbsp;&nbsp; (D) Toluene
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (C) Benzene</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> 3 HC≡CH ⟶ C<sub>6</sub>H<sub>6</sub> (Cyclic polymerization).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q9. What is the electrophile in the Nitration of Benzene?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) NO<sub>3</sub><sup>-</sup> &nbsp;&nbsp;&nbsp;&nbsp; (B) NO<sub>2</sub><sup>+</sup> (Nitronium ion)<br>
      (C) NO<sup>+</sup> &nbsp;&nbsp;&nbsp;&nbsp; (D) HNO<sub>3</sub>
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) NO<sub>2</sub><sup>+</sup> (Nitronium ion)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> HNO<sub>3</sub> + 2 H<sub>2</sub>SO<sub>4</sub> ⟶ NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2 HSO<sub>4</sub><sup>-</sup>.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q10. Which of the following does NOT exhibit Geometrical Isomerism?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) cis-But-2-ene &nbsp;&nbsp;&nbsp;&nbsp; (B) trans-But-2-ene<br>
      (C) Propene (CH<sub>3</sub>-CH=CH<sub>2</sub>) &nbsp;&nbsp;&nbsp;&nbsp; (D) Hex-3-ene
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (C) Propene (CH<sub>3</sub>-CH=CH<sub>2</sub>)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Propene has two identical H atoms on C1 (=CH<sub>2</sub>), so geometrical isomerism is absent.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q11. Which hydrocarbon has the HIGHEST boiling point?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) n-Pentane &nbsp;&nbsp;&nbsp;&nbsp; (B) Isopentane (2-Methylbutane)<br>
      (C) Neopentane (2,2-Dimethylpropane) &nbsp;&nbsp;&nbsp;&nbsp; (D) n-Butane
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (A) n-Pentane</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Straight-chain n-pentane has maximum surface area and stronger van der Waals forces than branched isomers.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q12. Reaction of Ethyne with Tollen's Reagent (Ammoniacal AgNO<sub>3</sub>) forms a precipitate of color:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Black &nbsp;&nbsp;&nbsp;&nbsp; (B) Red<br>
      (C) White (Silver Acetylide) &nbsp;&nbsp;&nbsp;&nbsp; (D) Yellow
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (C) White (Silver Acetylide)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> HC≡CH + 2 Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> ⟶ AgC≡CAg (White ppt) + 2 NH<sub>4</sub><sup>+</sup> + 2 NH<sub>3</sub>.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q13. In Friedel-Crafts Alkylation of Benzene with CH<sub>3</sub>Cl, the catalyst used is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Anhydrous AlCl<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (B) Conc. H<sub>2</sub>SO<sub>4</sub><br>
      (C) Pd / C &nbsp;&nbsp;&nbsp;&nbsp; (D) Ni
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (A) Anhydrous AlCl<sub>3</sub></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Anhydrous AlCl<sub>3</sub> acts as Lewis acid to generate CH<sub>3</sub><sup>+</sup> carbocation electrophile.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q14. Dehydration of Ethanol at 443 K with excess Conc. H<sub>2</sub>SO<sub>4</sub> yields:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Ethane &nbsp;&nbsp;&nbsp;&nbsp; (B) Ethene<br>
      (C) Diethyl ether &nbsp;&nbsp;&nbsp;&nbsp; (D) Ethyne
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Ethene</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> CH<sub>3</sub>CH<sub>2</sub>OH ⟶ CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub>O.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q15. According to Hückel's rule, a cyclic planar conjugated compound is aromatic if it contains:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) (4n + 1) π-electrons &nbsp;&nbsp;&nbsp;&nbsp; (B) (4n + 2) π-electrons<br>
      (C) 4n π-electrons &nbsp;&nbsp;&nbsp;&nbsp; (D) 2n π-electrons
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) (4n + 2) π-electrons</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Hückel's rule requires (4n + 2) π-electrons for aromatic stabilization.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q16. What is the major product of Markovnikov addition of HBr to 2-Methylpropene?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 1-Bromo-2-methylpropane &nbsp;&nbsp;&nbsp;&nbsp; (B) 2-Bromo-2-methylpropane<br>
      (C) 2-Bromobutane &nbsp;&nbsp;&nbsp;&nbsp; (D) 1-Bromobutane
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) 2-Bromo-2-methylpropane</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> H<sup>+</sup> adds to C1 forming stable 3° carbocation (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>, giving 2-bromo-2-methylpropane.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q17. Hydration of Ethyne (HC≡CH) in presence of 1% HgSO<sub>4</sub> / H<sub>2</sub>SO<sub>4</sub> at 333 K yields:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Ethanol &nbsp;&nbsp;&nbsp;&nbsp; (B) Ethanal (Acetaldehyde)<br>
      (C) Propanone &nbsp;&nbsp;&nbsp;&nbsp; (D) Ethene
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Ethanal (Acetaldehyde)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Hydration forms vinyl alcohol CH<sub>2</sub>=CH-OH which tautomerizes to acetaldehyde CH<sub>3</sub>CHO.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q18. Which group is Meta-directing and Deactivating?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) -CH<sub>3</sub> &nbsp;&nbsp;&nbsp;&nbsp; (B) -OCH<sub>3</sub><br>
      (C) -NO<sub>2</sub> &nbsp;&nbsp;&nbsp;&nbsp; (D) -NH<sub>2</sub>
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (C) -NO<sub>2</sub></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> -NO<sub>2</sub> withdraws electron density via -R and -I effects, directing electrophiles to meta position.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q19. What is the torsional strain energy difference between Eclipsed and Staggered Ethane?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 6.0 kJ/mol &nbsp;&nbsp;&nbsp;&nbsp; (B) 12.5 kJ/mol<br>
      (C) 25.0 kJ/mol &nbsp;&nbsp;&nbsp;&nbsp; (D) 50.0 kJ/mol
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) 12.5 kJ/mol</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Eclipsed ethane is 12.5 kJ/mol less stable than staggered ethane due to torsional strain.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q20. Chlorine attached to Benzene ring (Chlorobenzene) is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Ortho/Para directing and Activating &nbsp;&nbsp;&nbsp;&nbsp; (B) Ortho/Para directing and Deactivating<br>
      (C) Meta directing and Deactivating &nbsp;&nbsp;&nbsp;&nbsp; (D) Meta directing and Activating
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Ortho/Para directing and Deactivating</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Cl is deactivating due to strong -I effect, but o/p directing due to +R lone-pair donation.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q21. Which hydrocarbon test uses cold dilute alkaline KMnO<sub>4</sub> (Baeyer's Reagent)?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Test for Alkanes &nbsp;&nbsp;&nbsp;&nbsp; (B) Test for Unsaturation (Alkenes & Alkynes)<br>
      (C) Test for Aromaticity &nbsp;&nbsp;&nbsp;&nbsp; (D) Test for Halides
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Test for Unsaturation (Alkenes & Alkynes)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Unsaturated bonds decolorize pink Baeyer's reagent, forming vicinal glycols.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q22. Kolbe's electrolysis of aqueous Potassium Acetate yields which gas at Anode?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Methane &nbsp;&nbsp;&nbsp;&nbsp; (B) Ethane + CO<sub>2</sub><br>
      (C) Ethyne &nbsp;&nbsp;&nbsp;&nbsp; (D) Propane
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) Ethane + CO<sub>2</sub></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> 2 CH<sub>3</sub>COO<sup>-</sup> ⟶ C<sub>2</sub>H<sub>6</sub> + 2 CO<sub>2</sub> + 2 e<sup>-</sup> at anode.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q23. Ozonolysis of an alkene gave Acetone (CH<sub>3</sub>COCH<sub>3</sub>) and Formaldehyde (HCHO). The alkene is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) But-2-ene &nbsp;&nbsp;&nbsp;&nbsp; (B) 2-Methylpropene<br>
      (C) But-1-ene &nbsp;&nbsp;&nbsp;&nbsp; (D) Pent-2-ene
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) 2-Methylpropene</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> (CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub> + O<sub>3</sub> ⟶ Acetone + Formaldehyde.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q24. Which alkyne reacts with NaNH<sub>2</sub> to liberate Hydrogen gas?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) But-2-yne &nbsp;&nbsp;&nbsp;&nbsp; (B) But-1-yne<br>
      (C) Hex-3-yne &nbsp;&nbsp;&nbsp;&nbsp; (D) Pent-2-yne
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (B) But-1-yne</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Only terminal alkynes (containing ≡C-H) exhibit acidic character and react with NaNH<sub>2</sub>.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #29B6F6;'>Q25. Pyrolysis of Hexane (C<sub>6</sub>H<sub>14</sub>) at 773 K produces:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) C<sub>3</sub>H<sub>6</sub> + C<sub>2</sub>H<sub>4</sub> + CH<sub>4</sub> &nbsp;&nbsp;&nbsp;&nbsp; (B) Benzene<br>
      (C) Toluene &nbsp;&nbsp;&nbsp;&nbsp; (D) Hex-1-ene
    </div>
    <div style="background: rgba(41, 182, 246, 0.15); border-left: 3.5px solid #29B6F6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #29B6F6;'>✓ Answer: (A) C<sub>3</sub>H<sub>6</sub> + C<sub>2</sub>H<sub>4</sub> + CH<sub>4</sub></b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Pyrolysis cracks hexane into lower alkanes and alkenes.</span>
    </div>
  </div>
  <!-- SECTION B: VERY SHORT ANSWER QUESTIONS (Q26 to Q55) -->
  <div style="background: rgba(41, 182, 246, 0.12); border: 1.5px solid #29B6F6; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #29B6F6; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION B: Very Short Answer Questions (Q26 to Q55)</h2>
    <p style="color: #29B6F6; margin: 0; font-size: 14px;">30 Expected VSA Questions • 2 Marks Each (22 Conceptual Theory + 8 Short Calculations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q26. Define Hydrocarbons and state unbranched general formulas for Alkanes, Alkenes, Alkynes.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Binary organic compounds of C and H.<br>• Alkanes: C<sub>n</sub>H<sub>2n+2</sub> | Alkenes: C<sub>n</sub>H<sub>2n</sub> | Alkynes: C<sub>n</sub>H<sub>2n-2</sub>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q27. Differentiate Sawhorse and Newman projections of Ethane.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      <b>Sawhorse:</b> View along C-C bond axis tilted at 45°.<br><b>Newman:</b> View head-on down C-C bond with front carbon as dot and back carbon as circle.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q28. Why is Staggered conformation of Ethane more stable than Eclipsed?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Staggered has maximum dihedral angle (60°) minimizing electron cloud repulsion and torsional strain (+12.5 kJ/mol in eclipsed).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q29. Write chemical equation for Wurtz reaction of Ethyl bromide.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      2 C<sub>2</sub>H<sub>5</sub>Br + 2 Na <span style='color: #29B6F6;'>⟶ (Dry Ether)</span> C<sub>4</sub>H<sub>10</sub> (n-Butane) + 2 NaBr.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q30. Why cannot Wurtz reaction be used to prepare unsymmetrical alkanes like Propane?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Yields a mixture of three alkanes (Ethane, Propane, Butane) with close boiling points difficult to separate.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q31. Explain Decarboxylation of Sodium Propionate with Soda Lime.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      CH<sub>3</sub>CH<sub>2</sub>COONa + NaOH <span style='color: #29B6F6;'>⟶ (CaO / Heat)</span> CH<sub>3</sub>CH<sub>3</sub> (Ethane) + Na<sub>2</sub>CO<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q32. Write 3 steps of Free Radical Chlorination mechanism of Methane.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      1. <b>Initiation:</b> Cl<sub>2</sub> <span style='color: #29B6F6;'>⟶ (hν)</span> 2 Cl<sup>•</sup>.<br>2. <b>Propagation:</b> Cl<sup>•</sup> + CH<sub>4</sub> ⟶ CH<sub>3</sub><sup>•</sup> + HCl; CH<sub>3</sub><sup>•</sup> + Cl<sub>2</sub> ⟶ CH<sub>3</sub>Cl + Cl<sup>•</sup>.<br>3. <b>Termination:</b> 2 CH<sub>3</sub><sup>•</sup> ⟶ C<sub>2</sub>H<sub>6</sub>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q33. State Saytzeff Rule for Dehydrohalogenation of Alkyl Halides.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Major alkene product is the more substituted alkene possessing maximum number of α-hydrogens on double bonded carbons.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q34. Explain Geometrical Isomerism in But-2-ene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Restricted C=C rotation forms <b>cis-But-2-ene</b> (methyl groups same side) and <b>trans-But-2-ene</b> (methyl groups opposite sides).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q35. Why has trans-But-2-ene higher melting point than cis-But-2-ene?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      trans-Isomer is symmetrical, fitting better into crystal lattice with higher lattice energy.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q36. Write reaction for preparation of cis-But-2-ene and trans-But-2-ene from But-2-yne.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      • <b>cis-But-2-ene:</b> But-2-yne + H<sub>2</sub> <span style='color: #29B6F6;'>⟶ (Pd/CaCO<sub>3</sub> + Quinoline)</span> cis-But-2-ene.<br>• <b>trans-But-2-ene:</b> But-2-yne + Na / liquid NH<sub>3</sub> ⟶ trans-But-2-ene.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q37. State Markovnikov's Rule with an example.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Negative part of unsymmetrical reagent attaches to carbon of C=C double bond having fewer H atoms.<br>Example: CH<sub>3</sub>-CH=CH<sub>2</sub> + HBr ⟶ CH<sub>3</sub>-CH(Br)-CH<sub>3</sub> (2-Bromopropane).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q38. Explain Kharasch Peroxide Effect on addition of HBr to Propene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      In organic peroxides, HBr adds via free radicals forming 1-Bromopropane (Anti-Markovnikov addition).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q39. Why does Peroxide Effect operate with HBr but NOT with HCl or HI?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      H-Cl bond is too strong (1st step endothermic); H-I bond yields I<sup>•</sup> radicals that couple to I<sub>2</sub> instead of adding to alkene.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q40. Explain Reductive Ozonolysis of 2-Methylpropene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      (CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub> + O<sub>3</sub> ⟶ Ozonide <span style='color: #29B6F6;'>⟶ (Zn / H<sub>2</sub>O)</span> CH<sub>3</sub>COCH<sub>3</sub> (Acetone) + HCHO (Formaldehyde).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q41. Explain Baeyer's Test for unsaturation.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Alkenes decolorize pink cold dilute alkaline KMnO<sub>4</sub>, forming vicinal glycols (e.g. Ethene ⟶ Ethane-1,2-diol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q42. Why are Terminal Alkynes acidic in nature?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Terminal C≡C-H carbon is sp hybridized (50% s-character), pulling electron density from H and facilitating H<sup>+</sup> release.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q43. Write reaction of Ethyne with Sodium metal.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      2 HC≡CH + 2 Na ⟶ 2 HC≡C<sup>-</sup> Na<sup>+</sup> (Sodium Acetylide) + H<sub>2</sub> gas.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q44. How do you distinguish Ethyne from Ethene chemically?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Ethyne forms white ppt with Tollen's reagent (Ammoniacal AgNO<sub>3</sub>); Ethene does not react.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q45. Write reaction for Cyclic Polymerization of Ethyne to Benzene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      3 HC≡CH <span style='color: #29B6F6;'>⟶ (Red hot Fe tube / 873 K)</span> C<sub>6</sub>H<sub>6</sub> (Benzene).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q46. State Hückel's Rule of Aromaticity with 2 examples.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Cyclic planar conjugated system with <b>(4n + 2) π-electrons</b>.<br>Examples: <b>Benzene</b> (6 π e<sup>-</sup>, n=1), <b>Naphthalene</b> (10 π e<sup>-</sup>, n=2).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q47. Why is Benzene exceptionally stable despite containing 3 double bonds?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Continuous π-electron delocalization across ring yields high Resonance Energy (152 kJ/mol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q48. Write chemical equation for Nitration of Benzene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      C<sub>6</sub>H<sub>6</sub> + Conc. HNO<sub>3</sub> <span style='color: #29B6F6;'>⟶ (Conc. H<sub>2</sub>SO<sub>4</sub> / 333 K)</span> C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> (Nitrobenzene) + H<sub>2</sub>O.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q49. Write chemical equation for Friedel-Crafts Acylation of Benzene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl <span style='color: #29B6F6;'>⟶ (Anhyd. AlCl<sub>3</sub>)</span> C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> (Acetophenone) + HCl.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q50. Why is -OH group Ortho/Para directing in Benzene?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      -OH donates lone pair via +R effect, increasing electron density specifically at ortho and para positions.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q51. Why is -NO<sub>2</sub> group Meta directing in Benzene?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      -NO<sub>2</sub> withdraws electron density via -R and -I, deactivating ortho/para positions more than meta.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q52. Why are Halogens Ortho/Para directing despite being Deactivating?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      -I effect deactivates ring, but +R lone-pair donation stabilizes ortho/para transition states.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q53. What are Polynuclear Aromatic Hydrocarbons? Name 2 carcinogenic PAHs.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Compounds containing 2 or more fused benzene rings.<br>Examples: <b>Benzo[a]pyrene, 1,2-Benzanthracene</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q54. Write reaction for hydration of Propyne.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      CH<sub>3</sub>-C≡CH + H<sub>2</sub>O <span style='color: #29B6F6;'>⟶ (Hg<sup>2+</sup>/H<sup>+</sup> / 333 K)</span> [CH<sub>3</sub>-C(OH)=CH<sub>2</sub>] ⟶ <b>CH<sub>3</sub>COCH<sub>3</sub> (Acetone)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q55. Calculate mass of Carbon in 11 g of CO<sub>2</sub> produced by hydrocarbon combustion.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Answer:</b><br>
      Mass C = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">12</span><span style="display:block; padding:0 4px;">44</span></span> × 11 = <b>3.0 g Carbon</b>.
    </div>
  </div>
  <!-- SECTION C: SHORT ANSWER QUESTIONS (Q56 to Q85) -->
  <div style="background: rgba(41, 182, 246, 0.12); border: 1.5px solid #29B6F6; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #29B6F6; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION C: Short Answer Questions (Q56 to Q85)</h2>
    <p style="color: #29B6F6; margin: 0; font-size: 14px;">30 Expected SA Questions • 3 Marks Each (22 Conceptual Theory + 8 Step Calculations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q56. Explain Sawhorse and Newman projections of Ethane with 3D conformational energy diagrams.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Ethane has staggered (dihedral 60°, min strain) and eclipsed (dihedral 0°, max strain +12.5 kJ/mol) conformations.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDMzNTciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMjlCNkY2IiBmbG9vZC1vcGFjaXR5PSIwLjUiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPjNEIEV0aGFuZSBDb25mb3JtYXRpb25zICZhbXA7IEh5ZHJvY2FyYm9uIEJvbmRpbmcgQXJjaGl0ZWN0dXJlPC90ZXh0PgogIAogIDwhLS0gTGVmdCBCb3g6IE5ld21hbiBQcm9qZWN0aW9ucyBvZiBFdGhhbmUgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TmV3bWFuIFByb2plY3Rpb25zIG9mIEV0aGFuZSAoQ+KCgkjigoYpPC90ZXh0PgoKICAgIDwhLS0gU3RhZ2dlcmVkIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAsIDE0MCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiMyOUI2RjYiLz4KICAgICAgPCEtLSBGcm9udCBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSItNDUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjM5IiB5Mj0iMjIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9Ii0zOSIgeTI9IjIyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTUyIiByPSI4IiBmaWxsPSIjRTBFMEUwIi8+PHRleHQgeD0iMCIgeT0iLTQ5IiBmb250LXNpemU9IjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5IPC90ZXh0PgogICAgICA8Y2lyY2xlIGN4PSI0NSIgY3k9IjI2IiByPSI4IiBmaWxsPSIjRTBFMEUwIi8+PHRleHQgeD0iNDUiIHk9IjI5IiBmb250LXNpemU9IjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5IPC90ZXh0PgogICAgICA8Y2lyY2xlIGN4PSItNDUiIGN5PSIyNiIgcj0iOCIgZmlsbD0iI0UwRTBFMCIvPjx0ZXh0IHg9Ii00NSIgeT0iMjkiIGZvbnQtc2l6ZT0iOSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkg8L3RleHQ+CiAgICAgIDwhLS0gQmFjayBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iNDUiIHgyPSIwIiB5Mj0iNTUiIHN0cm9rZT0iIzgxRDRGQSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGxpbmUgeDE9Ii0zOSIgeTE9Ii0yMiIgeDI9Ii00OCIgeTI9Ii0yNyIgc3Ryb2tlPSIjODFENEZBIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iMzkiIHkxPSItMjIiIHgyPSI0OCIgeTI9Ii0yNyIgc3Ryb2tlPSIjODFENEZBIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSIyMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3RhZ2dlcmVkIChEaWhlZHJhbCA2MMKwKTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWF4IFN0YWJpbGl0eSB8IE1pbiBUb3JzaW9uYWwgU3RyYWluPC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gRWNsaXBzZWQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjAsIDE0MCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiMyOUI2RjYiLz4KICAgICAgPCEtLSBGcm9udCBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSItNDUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjM5IiB5Mj0iMjIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9Ii0zOSIgeTI9IjIyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgICA8IS0tIEVjbGlwc2VkIEJhY2sgQy1IIChzbGlnaHRseSBvZmZzZXQpIC0tPgogICAgICA8bGluZSB4MT0iOCIgeTE9Ii00NCIgeDI9IjEyIiB5Mj0iLTUyIiBzdHJva2U9IiNGRjUyNTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDxsaW5lIHgxPSI0NCIgeTE9IjE2IiB4Mj0iNTIiIHkyPSIyMCIgc3Ryb2tlPSIjRkY1MjUyIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSIyMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNTI1MiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RWNsaXBzZWQgKERpaGVkcmFsIDDCsCk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjI0MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1pbiBTdGFiaWxpdHkgfCArMTIuNSBrSi9tb2wgU3RyYWluPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBSaWdodCBCb3g6IEh5ZHJvY2FyYm9uIENsYXNzZXMgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDIwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSg0MSwxODIsMjQ2LDAuMDYpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MUQ0RkEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkh5ZHJvY2FyYm9uIENsYXNzaWZpY2F0aW9uICZhbXA7IEJvbmRpbmc8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjU1IiB3aWR0aD0iMzEwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4xLiBBbGthbmVzIChDX24gSF8ybisyKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgU2luZ2xlIM+DLWJvbmRzLCBzcMKzIHRldHJhaGVkcmFsICgxMDkuNcKwKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBGcmVlIFJhZGljYWwgSGFsb2dlbmF0aW9uICZhbXA7IFd1cnR6IFJlYWN0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4yLiBBbGtlbmVzIChDX24gSF8ybik6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE3MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiBEb3VibGUgYm9uZCAoMSDPgyArIDEgz4ApLCBzcMKyIHRyaWdvbmFsIHBsYW5hciAoMTIwwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE5MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzgxRDRGQSI+4oCiIEdlb21ldHJpY2FsIElzb21lcmlzbSAmYW1wOyBFbGVjdHJvcGhpbGljIEFkZGl0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIyMTUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4zLiBBbGt5bmVzIChDX24gSF8ybi0yKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjUzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCI+4oCiIFRyaXBsZSBib25kICgxIM+DICsgMiDPgCksIHNwIGxpbmVhciAoMTgwwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjI3MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzgxRDRGQSI+4oCiIEFjaWRpYyBUZXJtaW5hbCBIeWRyb2dlbnMgKEhD4omhQ0ggKyBOYSDin7YgTmFD4omhQ0gpPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 480px; height: auto; border-radius: 8px; border: 1px solid #29B6F6;' alt='Ethane Conformations' /><p style='color: #29B6F6; font-size: 12px; margin-top: 4px;'>Figure Q56: 3D Ethane Conformations & Hydrocarbon Bonding</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q57. Explain Free Radical Halogenation mechanism of Methane in detail with all 3 steps.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      1. <b>Initiation:</b> Cl<sub>2</sub> <span style='color: #29B6F6;'>⟶ (hν)</span> 2 Cl<sup>•</sup>.<br>2. <b>Propagation:</b> Cl<sup>•</sup> + CH<sub>4</sub> ⟶ CH<sub>3</sub><sup>•</sup> + HCl; CH<sub>3</sub><sup>•</sup> + Cl<sub>2</sub> ⟶ CH<sub>3</sub>Cl + Cl<sup>•</sup>.<br>3. <b>Termination:</b> 2 Cl<sup>•</sup> ⟶ Cl<sub>2</sub>; CH<sub>3</sub><sup>•</sup> + Cl<sup>•</sup> ⟶ CH<sub>3</sub>Cl; 2 CH<sub>3</sub><sup>•</sup> ⟶ C<sub>2</sub>H<sub>6</sub>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q58. Compare Wurtz Reaction, Kolbe's Electrolysis, and Decarboxylation methods for preparing alkanes.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      • <b>Wurtz:</b> 2 R-X + 2 Na ⟶ R-R (even carbon alkanes).<br>• <b>Kolbe:</b> 2 RCOOK + 2 H<sub>2</sub>O ⟶ R-R + 2 CO<sub>2</sub> at anode.<br>• <b>Decarboxylation:</b> RCOONa + NaOH ⟶ R-H + Na<sub>2</sub>CO<sub>3</sub> (alkane with n-1 carbons).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q59. Explain Geometrical Isomerism in Alkenes. Compare physical properties of cis and trans-But-2-ene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      cis-But-2-ene (polar, μ > 0, higher b.p. 4°C); trans-But-2-ene (non-polar, μ = 0, symmetrical, higher m.p. -105°C).<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDJkNDIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbGtlbmUgUmVhY3Rpb24gTWVjaGFuaXNtcyAmYW1wOyBHZW9tZXRyaWNhbCBJc29tZXJpc208L3RleHQ+CgogIDwhLS0gTGVmdCBCb3g6IEdlb21ldHJpY2FsIElzb21lcmlzbSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoNDEsMTgyLDI0NiwwLjA2KSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HZW9tZXRyaWNhbCBJc29tZXJpc20gKGNpcyAvIHRyYW5zKTwvdGV4dD4KCiAgICA8IS0tIGNpcy1CdXQtMi1lbmUgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MCwgMTMwKSI+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSIwIiB4Mj0iMzAiIHkyPSIwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSItNiIgeDI9IjMwIiB5Mj0iLTYiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDwhLS0gR3JvdXBzIG9uIHRvcCAtLT4KICAgICAgPGxpbmUgeDE9Ii0zMCIgeTE9IjAiIHgyPSItNTUiIHkyPSItMzUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDx0ZXh0IHg9Ii02NSIgeT0iLTQwIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiI+Q0jigoM8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1NSIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgICAgPHRleHQgeD0iNTUiIHk9Ii00MCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPkNI4oKDPC90ZXh0PgogICAgICA8IS0tIEggb24gYm90dG9tIC0tPgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9Ii01NSIgeT0iNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNFMEUwRTAiPkg8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0UwRTBFMCI+SDwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iODUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y2lzLUJ1dC0yLWVuZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMTAzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrwgJmd0OyAwIHwgSGlnaGVyIGIucC4gKDQgwrBDKTwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIHRyYW5zLUJ1dC0yLWVuZSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MCwgMTMwKSI+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSIwIiB4Mj0iMzAiIHkyPSIwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSItNiIgeDI9IjMwIiB5Mj0iLTYiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDwhLS0gT3Bwb3NpdGUgZ3JvdXBzIC0tPgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01NSIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgICAgPHRleHQgeD0iLTY1IiB5PSItNDAiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2Ij5DSOKCgzwvdGV4dD4KICAgICAgPGxpbmUgeDE9IjMwIiB5MT0iMCIgeDI9IjU1IiB5Mj0iMzUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDx0ZXh0IHg9IjU1IiB5PSI1MCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPkNI4oKDPC90ZXh0PgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9Ii01NSIgeT0iNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNFMEUwRTAiPkg8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1MCIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSI1MCIgeT0iLTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRTBFMEUwIj5IPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSI4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50cmFucy1CdXQtMi1lbmU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjEwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPs68ID0gMCB8IEhpZ2hlciBtLnAuICgtMTA1IMKwQyk8L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIFJpZ2h0IEJveDogQWRkaXRpb24gJiBPem9ub2x5c2lzIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoNDEsMTgyLDI0NiwwLjA2KSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbGVjdHJvcGhpbGljIEFkZGl0aW9uICZhbXA7IE96b25vbHlzaXM8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjU1IiB3aWR0aD0iMzEwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5NYXJrb3ZuaWtvdidzIEFkZGl0aW9uIFJ1bGU6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjkzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCI+4oCiIEjigbogYWRkcyB0byBmb3JtIG1vcmUgc3RhYmxlIGNhcmJvY2F0aW9uICgywrAgJmd0OyAxwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzAwRTY3NiI+Q0jigoMtQ0g9Q0jigoIgKyBIQnIg4p+2IENI4oKDLUNIKEJyKS1DSOKCgyAoTWFqb3IpPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5LaGFyYXNjaCBQZXJveGlkZSBFZmZlY3QgKEFudGktTWFya292bmlrb3YpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNzMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgRnJlZSByYWRpY2FsIGFkZGl0aW9uIG9mIEhCciBpbiBvcmdhbmljIHBlcm94aWRlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiMwMEU2NzYiPkNI4oKDLUNIPUNI4oKCICsgSEJyIC8gUGVyb3hpZGUg4p+2IENI4oKDQ0jigoJDSOKCgkJyPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIyMTUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5SZWR1Y3RpdmUgT3pvbm9seXNpcyAoT+KCgyAvIFpuICsgSOKCgk8pOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIyNTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgQ2xlYXZlcyBDPUMgZG91YmxlIGJvbmQgaW50byBjYXJib255bHMgKENITyAvIEM9Tyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjODFENEZBIj7igKIgS2V5IGFuYWx5dGljYWwgdG9vbCBmb3IgZG91YmxlIGJvbmQgbG9jYXRpb24hPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 480px; height: auto; border-radius: 8px; border: 1px solid #29B6F6;' alt='Alkene Isomerism' /><p style='color: #29B6F6; font-size: 12px; margin-top: 4px;'>Figure Q59: Alkene Geometrical Isomerism & Reactions</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q60. Explain Markovnikov Addition vs Peroxide Effect (Kharasch effect) mechanisms for Propene + HBr.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      • <b>Markovnikov:</b> Ionic addition via 2° carbocation ⟶ 2-Bromopropane.<br>• <b>Peroxide Effect:</b> Free radical addition via Br<sup>•</sup> ⟶ 1-Bromopropane.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q61. Explain Ozonolysis of alkenes. An alkene 'A' on ozonolysis gives Acetaldehyde and Acetone. Identify 'A'.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Cleavage of C=C by O<sub>3</sub> / Zn+H<sub>2</sub>O.<br>CH<sub>3</sub>CHO + CH<sub>3</sub>COCH<sub>3</sub> ⟶ Alkene 'A' is <b>2-Methylbut-2-ene [(CH<sub>3</sub>)<sub>2</sub>C=CH-CH<sub>3</sub>]</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q62. Explain Acidic Character of Terminal Alkynes with 3 characteristic chemical reactions.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      sp hybridization (50% s-character) makes C≡C-H acidic.<br>1. With Na ⟶ NaC≡CH + H<sub>2</sub>.<br>2. With Tollen's reagent ⟶ AgC≡CAg (White ppt).<br>3. With Cu<sub>2</sub>Cl<sub>2</sub> ⟶ CuC≡CCu (Red ppt).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q63. Detail Electrophilic Aromatic Substitution (S<sub>E</sub>Ar) mechanism of Benzene with 3D diagram.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      1. E<sup>+</sup> generation; 2. Arenium ion (σ-complex) formation; 3. Proton loss restoring aromaticity.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDNkNWMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Bcm9tYXRpYyBIeWRyb2NhcmJvbnM6IEJlbnplbmUgUmVzb25hbmNlICZhbXA7IERpcmVjdGl2ZSBJbmZsdWVuY2U8L3RleHQ+CgogIDwhLS0gTGVmdCBCb3g6IEJlbnplbmUgUmVzb25hbmNlICYgQXJvbWF0aWNpdHkgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmVuemVuZSAoQ+KChkjigoYpIFJlc29uYW5jZSAmYW1wOyBBcm9tYXRpY2l0eTwvdGV4dD4KCiAgICA8IS0tIEtla3Vsw6kgc3RydWN0dXJlcyAmIEh5YnJpZCAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwLCAxMzApIj4KICAgICAgPHBvbHlnb24gcG9pbnRzPSIwLC0zMCAyNiwtMTUgMjYsMTUgMCwzMCAtMjYsMTUgLTI2LC0xNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iLTIwIiB5MT0iLTExIiB4Mj0iLTIwIiB5Mj0iMTEiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGxpbmUgeDE9IjQiIHkxPSItMjMiIHgyPSIyMiIgeTI9Ii0xMiIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iNCIgeTE9IjIzIiB4Mj0iMjIiIHkyPSIxMiIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPktla3Vsw6kgSTwvdGV4dD4KICAgIDwvZz4KCiAgICA8dGV4dCB4PSIxNzUiIHk9IjEzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ih4Hih4E8L3RleHQ+CgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgwLCAxMzApIj4KICAgICAgPHBvbHlnb24gcG9pbnRzPSIwLC0zMCAyNiwtMTUgMjYsMTUgMCwzMCAtMjYsMTUgLTI2LC0xNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMyIvPgogICAgICA8dGV4dCB4PSIwIiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM4MUQ0RkEiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZXNvbmFuY2UgSHlicmlkPC90ZXh0PgogICAgPC9nPgoKICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkjDvGNrZWwncyBSdWxlOiAoNG4gKyAyKSDPgC1lbGVjdHJvbnMgKG4gPSAxKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oCiIEFsbCBDLUMgYm9uZHMgZXF1YWwgKDEzOSBwbSwgYmV0d2VlbiAxNTQgJmFtcDsgMTM0IHBtKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjYzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oCiIFJlc29uYW5jZSBFbmVyZ3kgPSAxNTIga0ovbW9sPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBSaWdodCBCb3g6IEVsZWN0cm9waGlsaWMgU3Vic3RpdHV0aW9uICYgRGlyZWN0aXZlIEluZmx1ZW5jZSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U19FIEFyIFJlYWN0aW9ucyAmYW1wOyBEaXJlY3RpdmUgSW5mbHVlbmNlPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSI1MCIgd2lkdGg9IjMxMCIgaGVpZ2h0PSI3NSIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIzMCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzI5QjZGNiI+U19FIEFyIE1lY2hhbmlzbSBTdGVwczo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iODgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNEREQiPjEuIEdlbmVyYXRpb24gb2YgRWxlY3Ryb3BoaWxlIChOT+KCguKBuiwgQ2zigbosIFLigbosIFJDT+KBuik8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTA0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjREREIj4yLiBGb3JtYXRpb24gb2YgQXJlbml1bSBJb24gKM+DLWNvbXBsZXggaW50ZXJtZWRpYXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMTkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiMwMEU2NzYiPjMuIExvc3Mgb2YgSOKBuiBmcm9tIM+DLWNvbXBsZXggcmVzdG9yaW5nIGFyb21hdGljaXR5PC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzUiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2Ij5PcnRobyAmYW1wOyBQYXJhIERpcmVjdGluZyBHcm91cHMgKEFjdGl2YXRpbmcpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNzMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNEREQiPuKAoiBFbGVjdHJvbiBkb25hdGluZzogLU9ILCAtTkjigoIsIC1PQ0jigoMsIC1DSOKCgzwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBJbmNyZWFzZXMgZWxlY3Ryb24gZGVuc2l0eSBhdCBvcnRobyAmYW1wOyBwYXJhIHBvc2l0aW9ucyE8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjIyMCIgd2lkdGg9IjMxMCIgaGVpZ2h0PSI3NSIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPk1ldGEgRGlyZWN0aW5nIEdyb3VwcyAoRGVhY3RpdmF0aW5nKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjU4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjREREIj7igKIgRWxlY3Ryb24gd2l0aGRyYXdpbmc6IC1OT+KCgiwgLUNOLCAtQ0hPLCAtQ09PSDwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIyNzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBXaXRoZHJhd3MgZeKBuyBkZW5zaXR5IGZyb20gby9wLCBkaXJlY3RpbmcgReKBuiB0byBtZXRhPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 480px; height: auto; border-radius: 8px; border: 1px solid #29B6F6;' alt='Aromatic Substitution' /><p style='color: #29B6F6; font-size: 12px; margin-top: 4px;'>Figure Q63: Benzene Resonance & S_E Ar Mechanism</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q64. Explain Friedel-Crafts Alkylation and Acylation of Benzene with equations and electrophiles.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      • <b>Alkylation:</b> C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>Cl <span style='color: #29B6F6;'>⟶ (AlCl<sub>3</sub>)</span> C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + HCl (E<sup>+</sup>: CH<sub>3</sub><sup>+</sup>).<br>• <b>Acylation:</b> C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl <span style='color: #29B6F6;'>⟶ (AlCl<sub>3</sub>)</span> C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> + HCl (E<sup>+</sup>: CH<sub>3</sub>CO<sup>+</sup>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q65. Explain Directive Influence of -OH and -NO<sub>2</sub> groups in Monosubstituted Benzene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      • <b>-OH:</b> +R donates e<sup>-</sup> density to ortho/para positions (o/p directing & activating).<br>• <b>-NO<sub>2</sub>:</b> -R & -I withdraws e<sup>-</sup> density from o/p positions (m directing & deactivating).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q66. Combustion of 0.20 g hydrocarbon gave 0.66 g CO<sub>2</sub> and 0.18 g H<sub>2</sub>O. Calculate %C, %H, and empirical formula.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      %C = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">12</span><span style="display:block; padding:0 4px;">44</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.66</span><span style="display:block; padding:0 4px;">0.20</span></span> × 100 = <b>90.0% C</b>.<br>%H = <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">2</span><span style="display:block; padding:0 4px;">18</span></span> × <span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">0.18</span><span style="display:block; padding:0 4px;">0.20</span></span> × 100 = <b>10.0% H</b>.<br>Ratio: C = 90/12 = 7.5, H = 10/1 = 10 ⟶ C:H = 3:4 ⟶ <b>C<sub>3</sub>H<sub>4</sub> (Propyne / Propadiene)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q67. How will you convert: (a) Ethyne to Benzene, (b) Benzene to Nitrobenzene, (c) Ethene to Ethane-1,2-diol?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      (a) 3 HC≡CH <span style='color: #29B6F6;'>⟶ (Red hot Fe tube / 873 K)</span> C<sub>6</sub>H<sub>6</sub>.<br>(b) C<sub>6</sub>H<sub>6</sub> + HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub> ⟶ C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>.<br>(c) CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub>O + [O] <span style='color: #29B6F6;'>⟶ (Cold alk. KMnO<sub>4</sub>)</span> HO-CH<sub>2</sub>-CH<sub>2</sub>-OH.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q68. Explain Pyrolysis (Cracking) of alkanes and its industrial application in petroleum refining.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Thermal decomposition of higher alkanes (>700 K) into lower alkanes, alkenes, and H<sub>2</sub>. Used in petrol production.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q69. Explain Birch Reduction of Alkynes to trans-Alkenes with mechanism.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Alkyne + Na / Liquid NH<sub>3</sub> ⟶ trans-Alkene via radical anion intermediate.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q70. Explain Hückel's Rule. Classify as Aromatic or Non-Aromatic: (a) Benzene, (b) Cyclopentadienyl anion, (c) Cyclooctatetraene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      (a) Benzene (6 π e<sup>-</sup>, n=1) ⟶ <b>Aromatic</b>.<br>(b) Cyclopentadienyl anion (6 π e<sup>-</sup>, n=1) ⟶ <b>Aromatic</b>.<br>(c) Cyclooctatetraene (8 π e<sup>-</sup>, non-planar) ⟶ <b>Non-aromatic</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q71. Explain why Chlorobenzene undergoes Electrophilic Substitution at Ortho and Para positions despite Chlorine being Deactivating.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      -I effect of Cl deactivates ring, but +R lone-pair donation stabilizes ortho/para σ-complex intermediates.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q72. Explain mechanism of Addition of Br<sub>2</sub> to Ethene forming 1,2-Dibromoethane.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Br<sub>2</sub> forms cyclic bromonium ion intermediate, followed by anti-attack of Br<sup>-</sup> ⟶ vicinal dibromide.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q73. An alkane C<sub>5</sub>H<sub>12</sub> yields ONLY ONE monochloro derivative on photochemical chlorination. Identify its structure.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      All 12 H atoms must be equivalent ⟶ <b>Neopentane [2,2-Dimethylpropane, C(CH<sub>3</sub>)<sub>4</sub>]</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q74. How will you convert: (a) Propene to Propan-2-ol, (b) Propene to Propan-1-ol?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      (a) CH<sub>3</sub>CH=CH<sub>2</sub> + H<sub>2</sub>O/H<sup>+</sup> (Markovnikov hydration) ⟶ CH<sub>3</sub>CH(OH)CH<sub>3</sub>.<br>(b) CH<sub>3</sub>CH=CH<sub>2</sub> + B<sub>2</sub>H<sub>6</sub> / H<sub>2</sub>O<sub>2</sub>,OH<sup>-</sup> (Hydroboration-Oxidation) ⟶ CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q75. Explain why Benzene undergoes Electrophilic Substitution rather than Electrophilic Addition.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Addition destroys 152 kJ/mol aromatic resonance stabilization; substitution retains aromatic ring integrity.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q76. Explain Kolbe's Electrolytic method for preparing Ethane from Sodium Acetate.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Anode: 2 CH<sub>3</sub>COO<sup>-</sup> ⟶ 2 CH<sub>3</sub>COO<sup>•</sup> + 2 e<sup>-</sup> ⟶ 2 CH<sub>3</sub><sup>•</sup> + 2 CO<sub>2</sub> ⟶ C<sub>2</sub>H<sub>6</sub>.<br>Cathode: 2 H<sub>2</sub>O + 2 e<sup>-</sup> ⟶ H<sub>2</sub> + 2 OH<sup>-</sup>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q77. Calculate volume of O<sub>2</sub> required at STP for complete combustion of 5.6 L of Ethene (C<sub>2</sub>H<sub>4</sub>).</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      C<sub>2</sub>H<sub>4</sub> + 3 O<sub>2</sub> ⟶ 2 CO<sub>2</sub> + 2 H<sub>2</sub>O.<br>1 vol C<sub>2</sub>H<sub>4</sub> requires 3 vol O<sub>2</sub> ⟶ Vol O<sub>2</sub> = 3 × 5.6 = <b>16.8 L O<sub>2</sub></b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q78. Explain why Alkynes are LESS reactive towards Electrophilic Addition than Alkenes.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Linear sp hybridized carbons hold π-electrons more tightly, making them less accessible to electrophiles.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q79. Explain Carcinogenicity of Polynuclear Aromatic Hydrocarbons (PAHs).</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      PAHs undergo metabolic oxidation into diol-epoxides that bind covalently to DNA, causing mutations and cancer.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q80. How will you convert Propene into Hexane?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      2 CH<sub>3</sub>CH=CH<sub>2</sub> + HBr/Peroxide ⟶ 2 CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br + 2 Na <span style='color: #29B6F6;'>⟶ (Wurtz)</span> n-Hexane.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q81. Explain Core-House Synthesis for preparing unsymmetrical alkanes.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      R<sub>2</sub>CuLi (Gilman Reagent) + R'X ⟶ R-R' + RCu + LiX.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q82. 0.14 g alkene on ozonolysis gave 0.12 g Formaldehyde and 0.23 g Acetone. Calculate molar mass of alkene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Molar mass = 30 (HCHO) + 58 (Acetone) - 32 (O<sub>2</sub>) = <b>56 g/mol (Isobutylene C<sub>4</sub>H<sub>8</sub>)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q83. Explain mechanism of Halogenation of Benzene in presence of FeCl<sub>3</sub>.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      FeCl<sub>3</sub> + Cl<sub>2</sub> ⟶ Cl<sup>+</sup> + FeCl<sub>4</sub><sup>-</sup>. Cl<sup>+</sup> attacks benzene forming arenium ion ⟶ Chlorobenzene + HCl.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q84. Distinguish between Hex-1-yne and Hex-2-yne chemically.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Hex-1-yne (terminal alkyne) forms white ppt with Tollen's reagent; Hex-2-yne (internal alkyne) does not react.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #29B6F6;'>Q85. Explain why 2,2-Dimethylpropane has lower boiling point than Pentane.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); border-left: 3px solid #29B6F6; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #29B6F6;'>Detailed Solution:</b><br>
      Spherical neopentane has smaller surface area and weaker van der Waals dispersion forces.
    </div>
  </div>
  <!-- SECTION D: LONG ANSWER QUESTIONS (Q86 to Q100) -->
  <div style="background: rgba(41, 182, 246, 0.12); border: 1.5px solid #29B6F6; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #29B6F6; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION D: Long Answer Questions (Q86 to Q100)</h2>
    <p style="color: #29B6F6; margin: 0; font-size: 14px;">15 Advanced Conceptual & Analytical Questions • 5 Marks Each (Roman Subparts: (i) Theory + (ii) Step Numerical/Calculations)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q86: Alkane Conformations & Free Radical Mechanism</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail Sawhorse and Newman projections of Ethane, torsional strain, relative stability of staggered vs eclipsed conformations.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      Staggered conformation has 60° dihedral angle with min electron cloud repulsion. Eclipsed has 0° dihedral angle with +12.5 kJ/mol torsional strain.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Detail 3-step Free Radical Chlorination mechanism of Methane with energy profile and termination products.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      1. Initiation: Cl<sub>2</sub> ⟶ 2 Cl<sup>•</sup>.<br>2. Propagation: Cl<sup>•</sup> + CH<sub>4</sub> ⟶ CH<sub>3</sub><sup>•</sup> + HCl; CH<sub>3</sub><sup>•</sup> + Cl<sub>2</sub> ⟶ CH<sub>3</sub>Cl + Cl<sup>•</sup>.<br>3. Termination: 2 CH<sub>3</sub><sup>•</sup> ⟶ C<sub>2</sub>H<sub>6</sub>; CH<sub>3</sub><sup>•</sup> + Cl<sup>•</sup> ⟶ CH<sub>3</sub>Cl.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q87: Alkene Geometrical Isomerism & Dipole Moment Analysis</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail conditions for Geometrical Isomerism, cis vs trans configuration, dipole moments, and physical constant differences.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      Requires double bond C=C with 2 different groups on each carbon. cis-Isomer (polar, μ > 0, higher b.p.); trans-Isomer (non-polar, μ = 0, symmetrical, higher m.p.).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Predict geometrical isomers for: (a) But-2-ene, (b) Pent-2-ene, (c) 1,2-Dichloroethene. Explain why 1,1-Dichloroethene lacks geometrical isomerism.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) cis & trans-But-2-ene.<br>(b) cis & trans-Pent-2-ene.<br>(c) cis & trans-1,2-Dichloroethene.<br><i>1,1-Dichloroethene</i> has two identical Cl atoms on C1, so rotation does not yield distinct stereoisomers.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q88: Markovnikov Addition vs Peroxide Effect Mechanics</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail Mechanism of Markovnikov electrophilic addition of HX to unsymmetrical alkenes and Kharasch Peroxide free radical effect.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      Markovnikov proceeds via 2° carbocation forming 2-haloalkane. Peroxide effect proceeds via 2° free radical forming 1-haloalkane.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Predict major products for: (a) Propene + HBr, (b) Propene + HBr in organic peroxides, (c) 2-Methylpropene + HCl.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) <b>2-Bromopropane</b>.<br>(b) <b>1-Bromopropane</b>.<br>(c) <b>2-Chloro-2-methylpropane</b> (via 3° carbocation).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q89: Ozonolysis & Structural Elucidation of Alkenes</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail Mechanism of Ozonolysis, ozonide intermediate formation, and reductive cleavage with Zn/H_2O.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      O<sub>3</sub> adds across C=C forming molozonide ⟶ ozonide ⟶ Zn/H<sub>2</sub>O cleavage yielding carbonyl compounds (CHO / C=O).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) An alkene 'X' (C_6H_12) on ozonolysis gives Propanone (Acetone) and Propanal. Determine IUPAC name and structure of 'X'.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      Rejoining carbonyl fragments (CH<sub>3</sub>)<sub>2</sub>C=O + O=CH-CH<sub>2</sub>CH<sub>3</sub> ⟶ Alkene 'X' is <b>2-Methylpent-2-ene [(CH<sub>3</sub>)<sub>2</sub>C=CH-CH<sub>2</sub>CH<sub>3</sub>]</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q90: Alkyne Chemistry: Acidic Character & Hydration Mechanics</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail Acidic character of terminal alkynes, sp hybridization 50% s-character, and chemical differentiation tests.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      sp carbon holds bonding electrons tightly. Reacts with Na, NaNH<sub>2</sub>, Ammoniacal AgNO<sub>3</sub> (white ppt), Ammoniacal Cu<sub>2</sub>Cl<sub>2</sub> (red ppt).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Write reactions for: (a) Ethyne + H_2O (Hg<sup>2+</sup>/H<sup>+</sup>), (b) Propyne + H_2O (Hg<sup>2+</sup>/H<sup>+</sup>), (c) Cyclic polymerization of Ethyne.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) HC≡CH + H<sub>2</sub>O ⟶ CH<sub>3</sub>CHO (Acetaldehyde).<br>(b) CH<sub>3</sub>C≡CH + H<sub>2</sub>O ⟶ CH<sub>3</sub>COCH<sub>3</sub> (Acetone).<br>(c) 3 HC≡CH <span style='color: #29B6F6;'>⟶ (873 K / Fe)</span> Benzene (C<sub>6</sub>H<sub>6</sub>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q91: Benzene Structure, Resonance & Hückel's Aromaticity Criteria</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail Kekulé structure, orbital picture of Benzene, resonance hybrid, resonance energy (152 kJ/mol), and Hückel's (4n+2) rule.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      Planar sp<sup>2</sup> carbon ring with delocalized 6 π-electrons. Satisfies (4n+2) for n=1, exhibiting aromatic stability.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Apply Hückel's Rule to classify as Aromatic, Anti-Aromatic, or Non-Aromatic: (a) Benzene, (b) Cyclobutadiene, (c) Tropylium Cation (C_7H_7_plus), (d) Cyclooctatetraene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) Benzene (6 π e<sup>-</sup>) ⟶ <b>Aromatic</b>.<br>(b) Cyclobutadiene (4 π e<sup>-</sup>) ⟶ <b>Anti-Aromatic</b>.<br>(c) Tropylium cation (6 π e<sup>-</sup>) ⟶ <b>Aromatic</b>.<br>(d) Cyclooctatetraene (8 π e<sup>-</sup> non-planar) ⟶ <b>Non-Aromatic</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q92: Mechanism of Electrophilic Aromatic Substitution (S_E Ar)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail 3-step general mechanism of S_E Ar: 1. Electrophile generation; 2. Arenium ion (σ-complex) formation; 3. Proton loss.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      E<sup>+</sup> attacks benzene forming resonance-stabilized carbocation (arenium ion). Proton loss restores aromaticity.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Write detailed step-by-step mechanisms for: (a) Nitration of Benzene, (b) Friedel-Crafts Alkylation of Benzene with CH_3Cl.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) HNO<sub>3</sub> + 2 H<sub>2</sub>SO<sub>4</sub> ⟶ NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2 HSO<sub>4</sub><sup>-</sup>. NO<sub>2</sub><sup>+</sup> attacks ring ⟶ Nitrobenzene.<br>(b) CH<sub>3</sub>Cl + AlCl<sub>3</sub> ⟶ CH<sub>3</sub><sup>+</sup> + AlCl<sub>4</sub><sup>-</sup>. CH<sub>3</sub><sup>+</sup> attacks ring ⟶ Toluene.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q93: Directive Influence of Substituents in Monosubstituted Benzene</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail Ortho/Para activating groups (-OH, -NH_2, -CH_3) and Meta deactivating groups (-NO_2, -CN, -COOH) with resonance structures.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      +R groups increase e<sup>-</sup> density at o/p positions. -R groups withdraw e<sup>-</sup> density from o/p, leaving meta less electron-deficient.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Predict major products for: (a) Mononitration of Phenol, (b) Mononitration of Nitrobenzene, (c) Monochlorination of Toluene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) <b>o-Nitrophenol + p-Nitrophenol</b>.<br>(b) <b>m-Dinitrobenzene</b>.<br>(c) <b>o-Chlorotoluene + p-Chlorotoluene</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q94: Halogen Directive Influence Paradox & Activation Analysis</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Explain the paradox why Halogens (-Cl, -Br) are Deactivating (-I effect) yet Ortho/Para Directing (+R effect) in Benzene.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      -I effect of electronegative halogen reduces overall ring electron density (deactivating). However, lone pair +R donation stabilizes arenium ion transition states specifically at ortho/para positions!
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Predict products for: (a) Mononitration of Chlorobenzene, (b) Monobromination of Anisole (C_6H_5OCH_3).</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) <b>o-Nitrochlorobenzene + p-Nitrochlorobenzene</b>.<br>(b) <b>p-Bromoanisole (Major) + o-Bromoanisole</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q95: Comprehensive Synthesis Routes in Organic Hydrocarbon Transformations</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail multi-step conversion pathways connecting Alkanes ⇋ Alkenes ⇋ Alkynes ⇋ Aromatic Hydrocarbons.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      Alkane ⟶ (Br<sub>2</sub>/hν) ⟶ Alkyl halide ⟶ (alc. KOH) ⟶ Alkene ⟶ (Br<sub>2</sub>/CCl<sub>4</sub>) ⟶ Dihalide ⟶ (alc. KOH + NaNH<sub>2</sub>) ⟶ Alkyne ⟶ (Red hot Fe) ⟶ Benzene.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Design 3-step synthesis routes for: (a) Methane to Ethane, (b) Ethyne to Nitrobenzene, (c) Benzene to Acetophenone.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) CH<sub>4</sub> + Cl<sub>2</sub>/hν ⟶ CH<sub>3</sub>Cl ⟶ (Wurtz Na/ether) ⟶ C<sub>2</sub>H<sub>6</sub>.<br>(b) 3 HC≡CH ⟶ (Red hot Fe) ⟶ C<sub>6</sub>H<sub>6</sub> ⟶ (HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub>) ⟶ C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>.<br>(c) C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl ⟶ (AlCl<sub>3</sub>) ⟶ C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q96: Combustion Stoichiometry & Gas Volume Calculations</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail general combustion equations for C_n H_2n+2, C_n H_2n, C_n H_2n-2 and Gay-Lussac gas volume laws.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      C<sub>n</sub>H<sub>2n+2</sub> + (3n+1)/2 O<sub>2</sub> ⟶ n CO<sub>2</sub> + (n+1) H<sub>2</sub>O.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) 10 mL of a gaseous hydrocarbon required 55 mL of O_2 for complete combustion, producing 40 mL of CO_2. Determine molecular formula of hydrocarbon.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      C<sub>n</sub>H<sub>m</sub> + (n + m/4) O<sub>2</sub> ⟶ n CO<sub>2</sub> + (m/2) H<sub>2</sub>O.<br>n = 40 / 10 = 4 (Carbons = 4).<br>n + m/4 = 55 / 10 = 5.5 ⟶ 4 + m/4 = 5.5 ⟶ m = 6.<br>Molecular Formula = <b>C<sub>4</sub>H<sub>6</sub> (Butyne / Butadiene!)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q97: Polynuclear Aromatic Hydrocarbons (PAHs) & Environmental Carcinogenicity</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail structures of Naphthalene, Anthracene, Phenanthrene, 1,2-Benzanthracene, and metabolic mechanism of PAH carcinogenicity.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      PAHs contain fused benzene rings. Metabolic oxidation by cytochrome P450 forms diol-epoxides that intercalate and mutate DNA.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) Explain: (a) Why Anthracene has resonance energy of 351 kJ/mol (less than 3 × 152 = 456 kJ/mol), (b) Environmental sources of carcinogenic PAHs.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) Resonance stabilization is shared over fused ring system.<br>(b) Incomplete combustion of tobacco, coal tar, petrol, and diesel exhaust.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q98: Baeyer's Test vs Bromine Water Test for Unsaturation</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Compare Bromine water test (CCl_4) and Baeyer's reagent test (alk. KMnO_4) for detecting double and triple bonds.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      Br<sub>2</sub>/CCl<sub>4</sub> decolorizes reddish-brown color forming dibromide. Baeyer's reagent decolorizes pink KMnO<sub>4</sub> forming glycol.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) How would you chemically distinguish between: (a) Hexane and Hex-1-ene, (b) Hex-1-ene and Hex-1-yne?</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) Hex-1-ene decolorizes Br<sub>2</sub>/CCl<sub>4</sub>; Hexane does not.<br>(b) Hex-1-yne forms white ppt with Tollen's reagent; Hex-1-ene does not.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q99: Empirical & Molecular Formula Determination from Combustion</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Detail quantitative combustion methodology for finding empirical formula, molar mass, and molecular structure.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      %C = (12/44)(m<sub>CO2</sub>/m)100; %H = (2/18)(m<sub>H2O</sub>/m)100. Divide by atomic mass for empirical formula.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) 0.21 g hydrocarbon gave 0.66 g CO_2 and 0.27 g H_2O. Its vapor density is 21. Determine Empirical and Molecular Formulas.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      %C = (12/44)(0.66/0.21)100 = 85.7% C.<br>%H = (2/18)(0.27/0.21)100 = 14.3% H.<br>Moles: C = 85.7/12 = 7.14, H = 14.3/1 = 14.3 ⟶ Ratio 1 : 2 ⟶ Empirical Formula = <b>CH<sub>2</sub></b> (Empirical mass = 14).<br>Molar Mass = 2 × 21 = 42 g/mol ⟶ n = 42 / 14 = 3 ⟶ <b>Molecular Formula = C<sub>3</sub>H<sub>6</sub> (Propene!)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #29B6F6;'>Q100: Master Synthesis: Unified Hydrocarbon Reaction Architecture & Industrial Transformations</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(i) Synthesize complete unified reaction framework connecting Alkanes (Substitution & Pyrolysis) ⟶ Alkenes (Electrophilic Addition & Ozonolysis) ⟶ Alkynes (Acidic Hydrogen & Polymerization) ⟶ Aromatic Hydrocarbons (S_E Ar & Directive Influence).</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 8px 12px; border-left: 3px solid #29B6F6; margin-bottom: 10px;">
      Alkanes undergo free radical substitution and thermal cracking. Alkenes undergo Markownikoff electrophilic addition and ozonolysis cleavage. Alkynes exhibit acidic C≡C-H behavior and undergo cyclic polymerization into Benzene. Benzene undergoes S<sub>E</sub>Ar reactions directed by o/p activating or meta deactivating substituents.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #29B6F6;'>(ii) For 1-Bromopropane: (a) Write reaction with alc. KOH (major alkene product), (b) Write reaction of alkene with HBr/Peroxide (major product), (c) Write reaction of product with Sodium metal in dry ether.</b></p>
    <div style="background: rgba(41, 182, 246, 0.05); padding: 10px 12px; border-left: 3px solid #29B6F6;">
      (a) alc. KOH ⟶ <b>Propene (CH<sub>3</sub>CH=CH<sub>2</sub>)</b>.<br>(b) Propene + HBr/Peroxide ⟶ <b>1-Bromopropane (CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br)</b>.<br>(c) 2 1-Bromopropane + 2 Na <span style='color: #29B6F6;'>⟶ (Wurtz)</span> <b>n-Hexane (C<sub>6</sub>H<sub>14</sub>)</b>.
    </div>
  </div>
</div>
`;
