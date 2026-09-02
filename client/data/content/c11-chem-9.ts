// Class 11 Chemistry Chapter 9: Hydrocarbons
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Chemistry | Class: 11 | Code: c11-chem-9

export const c11Chem9HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(41, 182, 246, 0.12), rgba(2, 136, 209, 0.12)); border: 1.5px solid rgba(41, 182, 246, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #29B6F6; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #29B6F6; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 9: Hydrocarbons</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #29B6F6;">Conformation:</b> The infinite spatial arrangements of atoms in a molecule that arise through free rotation about a carbon-carbon single (&sigma;) bond without breaking bonds.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #29B6F6;">Torsional Strain:</b> The electronic repulsion experienced between bonding electron pairs of adjacent C-H bonds when they eclipse each other (maximal in eclipsed conformation).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #29B6F6;">Geometrical Isomerism:</b> Diastereomerism arising from restricted rotation about a double bond, resulting in distinct cis (same side) and trans (opposite sides) isomers.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #29B6F6;">Markownikoff's Rule:</b> In the ionic addition of an unsymmetrical reagent (HX) to an unsymmetrical alkene, the negative part adds to the carbon having fewer hydrogen atoms.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #29B6F6;">Ozonolysis:</b> Cleavage of an alkene or alkyne double/triple bond with ozone followed by Zn/H<sub>2</sub>O reduction to identify the position of multiple bonds by analyzing carbonyl products.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #29B6F6;">Hückel's Rule (4n + 2):</b> A planar, cyclic, fully conjugated system possessing (4n + 2) &pi;-electrons possesses exceptional aromatic resonance stabilization.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #29B6F6; border-bottom: 2px solid #29B6F6; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Classification of Hydrocarbons and Alkanes
  </h2>

  <!-- PRESERVED IMAGE 1 -->
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDMzNTciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMjlCNkY2IiBmbG9vZC1vcGFjaXR5PSIwLjUiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPjNEIEV0aGFuZSBDb25mb3JtYXRpb25zICZhbXA7IEh5ZHJvY2FyYm9uIEJvbmRpbmcgQXJjaGl0ZWN0dXJlPC90ZXh0PgogIAogIDwhLS0gTGVmdCBCb3g6IE5ld21hbiBQcm9qZWN0aW9ucyBvZiBFdGhhbmUgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TmV3bWFuIFByb2plY3Rpb25zIG9mIEV0aGFuZSAoQ+KCgkjigoYpPC90ZXh0PgoKICAgIDwhLS0gU3RhZ2dlcmVkIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAsIDE0MCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiMyOUI2RjYiLz4KICAgICAgPCEtLSBGcm9udCBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSItNDUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjM5IiB5Mj0iMjIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9Ii0zOSIgeTI9IjIyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTUyIiByPSI4IiBmaWxsPSIjRTBFMEUwIi8+PHRleHQgeD0iMCIgeT0iLTQ5IiBmb250LXNpemU9IjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5IPC90ZXh0PgogICAgICA8Y2lyY2xlIGN4PSI0NSIgY3k9IjI2IiByPSI4IiBmaWxsPSIjRTBFMEUwIi8+PHRleHQgeD0iNDUiIHk9IjI5IiBmb250LXNpemU9IjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5IPC90ZXh0PgogICAgICA8Y2lyY2xlIGN4PSItNDUiIGN5PSIyNiIgcj0iOCIgZmlsbD0iI0UwRTBFMCIvPjx0ZXh0IHg9Ii00NSIgeT0iMjkiIGZvbnQtc2l6ZT0iOSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkg8L3RleHQ+CiAgICAgIDwhLS0gQmFjayBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iNDUiIHgyPSIwIiB5Mj0iNTUiIHN0cm9rZT0iIzgxRDRGQSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGxpbmUgeDE9Ii0zOSIgeTE9Ii0yMiIgeDI9Ii00OCIgeTI9Ii0yNyIgc3Ryb2tlPSIjODFENEZBIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iMzkiIHkxPSItMjIiIHgyPSI0OCIgeTI9Ii0yNyIgc3Ryb2tlPSIjODFENEZBIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSIyMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3RhZ2dlcmVkIChEaWhlZHJhbCA2MMKwKTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMjQyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWF4IFN0YWJpbGl0eSB8IE1pbiBUb3JzaW9uYWwgU3RyYWluPC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gRWNsaXBzZWQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjAsIDE0MCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiMyOUI2RjYiLz4KICAgICAgPCEtLSBGcm9udCBDLUggLS0+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSItNDUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjM5IiB5Mj0iMjIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9Ii0zOSIgeTI9IjIyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgICA8IS0tIEVjbGlwc2VkIEJhY2sgQy1IIChzbGlnaHRseSBvZmZzZXQpIC0tPgogICAgICA8bGluZSB4MT0iOCIgeTE9Ii00NCIgeDI9IjEyIiB5Mj0iLTUyIiBzdHJva2U9IiNGRjUyNTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDxsaW5lIHgxPSI0NCIgeTE9IjE2IiB4Mj0iNTIiIHkyPSIyMCIgc3Ryb2tlPSIjRkY1MjUyIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSIyMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNTI1MiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RWNsaXBzZWQgKERpaGVkcmFsIDDCsCk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjI0MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1pbiBTdGFiaWxpdHkgfCArMTIuNSBrSi9tb2wgU3RyYWluPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBSaWdodCBCb3g6IEh5ZHJvY2FyYm9uIENsYXNzZXMgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDIwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSg0MSwxODIsMjQ2LDAuMDYpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MUQ0RkEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkh5ZHJvY2FyYm9uIENsYXNzaWZpY2F0aW9uICZhbXA7IEJvbmRpbmc8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjU1IiB3aWR0aD0iMzEwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4xLiBBbGthbmVzIChDX24gSF8ybisyKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgU2luZ2xlIM+DLWJvbmRzLCBzcMKzIHRldHJhaGVkcmFsICgxMDkuNcKwKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBGcmVlIFJhZGljYWwgSGFsb2dlbmF0aW9uICZhbXA7IFd1cnR6IFJlYWN0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4yLiBBbGtlbmVzIChDX24gSF8ybik6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE3MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiBEb3VibGUgYm9uZCAoMSDPgyArIDEgz4ApLCBzcMKyIHRyaWdvbmFsIHBsYW5hciAoMTIwwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE5MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzgxRDRGQSI+4oCiIEdlb21ldHJpY2FsIElzb21lcmlzbSAmYW1wOyBFbGVjdHJvcGhpbGljIEFkZGl0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIyMTUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij4zLiBBbGt5bmVzIChDX24gSF8ybi0yKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjUzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCI+4oCiIFRyaXBsZSBib25kICgxIM+DICsgMiDPgCksIHNwIGxpbmVhciAoMTgwwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjI3MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzgxRDRGQSI+4oCiIEFjaWRpYyBUZXJtaW5hbCBIeWRyb2dlbnMgKEhD4omhQ0ggKyBOYSDin7YgTmFD4omhQ0gpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(41, 182, 246, 0.35); border: 1.5px solid #29B6F6;" alt="3D Ethane Conformations" /><p style="color: #29B6F6; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 9.1: 3D Ethane Conformations (Newman &amp; Sawhorse Projections) &amp; Hydrocarbon Classification</p></div>

  

  <p>
    Hydrocarbons are organic compounds composed exclusively of carbon and hydrogen. Alkanes are saturated aliphatic hydrocarbons possessing the general molecular formula C<sub>n</sub>H<sub>2n+2</sub>, where all carbon atoms are sp<sup>3</sup> hybridized and bound by unreactive &sigma;-bonds (historically termed <i>paraffins</i> from Latin <i>parum affinis</i> = little affinity).
  </p>

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 16.5px;">(i) Alkanes: Nomenclature, Isomerism &amp; Conformations</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #29B6F6;">Nomenclature &amp; Chain Isomerism:</b> Methane (CH<sub>4</sub>), Ethane (C<sub>2</sub>H<sub>6</sub>), and Propane (C<sub>3</sub>H<sub>8</sub>) have no isomers. Butane (C<sub>4</sub>H<sub>10</sub>) forms 2 isomers (n-butane, isobutane); Pentane (C<sub>5</sub>H<sub>12</sub>) forms 3 isomers; Hexane forms 5; Decane (C<sub>10</sub>H<sub>22</sub>) forms 75 structural isomers.</li>
      <li><b style="color: #29B6F6;">Conformations of Ethane (Newman &amp; Sawhorse Projections):</b>
        <br/>Free rotation about the C-C &sigma;-bond produces infinite conformations:
        <br/>1. <b style="color: #29B6F6;">Staggered Conformation:</b> C-H bonds on adjacent carbons are positioned maximally far apart (dihedral angle &theta; = 60&deg;). Minimum electrostatic electron-cloud repulsion (zero torsional strain). <b>Most stable conformation (lowest energy)</b>.
        <br/>2. <b style="color: #29B6F6;">Eclipsed Conformation:</b> C-H bonds directly align in the same plane (&theta; = 0&deg;). Maximum electronic repulsion between bonding pairs gives high <b>torsional strain (12.5 kJ/mol)</b>. <b>Least stable conformation</b>.
        <br/>3. <b style="color: #29B6F6;">Skew Conformations:</b> All intermediate rotational states (0&deg; &lt; &theta; &lt; 60&deg;).
      </li>
    </ul>
  </div>

  <h3 style="color: #29B6F6; margin-top: 22px; font-size: 16.5px;">(ii) Methods of Preparation of Alkanes</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #29B6F6;">1. Sabatier-Senderens Reaction (Hydrogenation of Alkenes/Alkynes):</b>
        <br/>R-CH=CH<sub>2</sub> + H<sub>2</sub> &rarr; R-CH<sub>2</sub>-CH<sub>3</sub> (Ni at 523 K, or Pt/Pd at 298 K).
      </li>
      <li><b style="color: #29B6F6;">2. Wurtz Reaction:</b>
        <br/>Two molecules of alkyl halide react with metallic sodium in dry ether:
        <br/><b>2R-X + 2Na &rarr; R-R + 2NaX</b>.
        <br/>(Excellent for preparing symmetrical alkanes with even numbers of carbon atoms; unsuitable for odd-carbon alkanes due to inseparable mixtures of three alkanes).
      </li>
      <li><b style="color: #29B6F6;">3. Decarboxylation of Carboxylic Acids (Soda-Lime):</b>
        <br/>Heating sodium carboxylate with soda-lime (NaOH + CaO in 3:1 ratio):
        <br/><b>R-COONa + NaOH &rarr; R-H + Na<sub>2</sub>CO<sub>3</sub></b>. (Produces an alkane with one fewer carbon atom).
      </li>
      <li><b style="color: #29B6F6;">4. Kolbe's Electrolytic Method:</b>
        <br/>Electrolysis of concentrated aqueous sodium carboxylate:
        <br/>Anode (Oxidation): 2RCOO<sup>-</sup> &rarr; 2RCOO<sup>&bull;</sup> + 2e<sup>-</sup> &rarr; <b>R-R + 2CO<sub>2</sub></b>.
        <br/>Cathode (Reduction): 2H<sub>2</sub>O + 2e<sup>-</sup> &rarr; <b>H<sub>2(g)</sub> + 2OH<sup>-</sup></b>.
      </li>
    </ul>
  </div>

  <h3 style="color: #29B6F6; margin-top: 22px; font-size: 16.5px;">(iii) Chemical Reactions &amp; Free Radical Halogenation Mechanism</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #29B6F6;">Mechanism of Free Radical Chlorination of Methane:</b>
      <br/>&bull; <i>Step 1: Chain Initiation:</i> Cl-Cl &rarr; 2Cl<sup>&bull;</sup> (h&nu; or &Delta;, homolytic cleavage).
      <br/>&bull; <i>Step 2: Chain Propagation:</i>
      <br/>(a) CH<sub>4</sub> + Cl<sup>&bull;</sup> &rarr; CH<sub>3</sub><sup>&bull;</sup> + HCl
      <br/>(b) CH<sub>3</sub><sup>&bull;</sup> + Cl<sub>2</sub> &rarr; CH<sub>3</sub>Cl + Cl<sup>&bull;</sup> (Propagates chain; yields CH<sub>2</sub>Cl<sub>2</sub>, CHCl<sub>3</sub>, CCl<sub>4</sub>).
      <br/>&bull; <i>Step 3: Chain Termination:</i> Radicals pair up: Cl<sup>&bull;</sup> + Cl<sup>&bull;</sup> &rarr; Cl<sub>2</sub>; CH<sub>3</sub><sup>&bull;</sup> + Cl<sup>&bull;</sup> &rarr; CH<sub>3</sub>Cl; <b>CH<sub>3</sub><sup>&bull;</sup> + CH<sub>3</sub><sup>&bull;</sup> &rarr; CH<sub>3</sub>-CH<sub>3</sub> (Ethane formation proves free radical mechanism)</b>.
      <br/>&bull; <i>Combustion:</i> C<sub>n</sub>H<sub>2n+2</sub> + [(3n + 1)/2] O<sub>2</sub> &rarr; n CO<sub>2</sub> + (n + 1) H<sub>2</sub>O + Heat.
      <br/>&bull; <i>Aromatization (Catalytic Reforming):</i> n-Hexane passed over Cr<sub>2</sub>O<sub>3</sub>/Al<sub>2</sub>O<sub>3</sub> at 773 K and 10-20 atm yields <b>Benzene</b>.
    </p>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #29B6F6; border-bottom: 2px solid #29B6F6; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Alkenes: Structure, Isomerism, Preparation and Reactions
  </h2>

  <!-- PRESERVED IMAGE 2 -->
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDJkNDIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbGtlbmUgUmVhY3Rpb24gTWVjaGFuaXNtcyAmYW1wOyBHZW9tZXRyaWNhbCBJc29tZXJpc208L3RleHQ+CgogIDwhLS0gTGVmdCBCb3g6IEdlb21ldHJpY2FsIElzb21lcmlzbSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoNDEsMTgyLDI0NiwwLjA2KSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HZW9tZXRyaWNhbCBJc29tZXJpc20gKGNpcyAvIHRyYW5zKTwvdGV4dD4KCiAgICA8IS0tIGNpcy1CdXQtMi1lbmUgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MCwgMTMwKSI+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSIwIiB4Mj0iMzAiIHkyPSIwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSItNiIgeDI9IjMwIiB5Mj0iLTYiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDwhLS0gR3JvdXBzIG9uIHRvcCAtLT4KICAgICAgPGxpbmUgeDE9Ii0zMCIgeTE9IjAiIHgyPSItNTUiIHkyPSItMzUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDx0ZXh0IHg9Ii02NSIgeT0iLTQwIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiI+Q0jigoM8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1NSIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgICAgPHRleHQgeD0iNTUiIHk9Ii00MCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPkNI4oKDPC90ZXh0PgogICAgICA8IS0tIEggb24gYm90dG9tIC0tPgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9Ii01NSIgeT0iNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNFMEUwRTAiPkg8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0UwRTBFMCI+SDwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iODUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y2lzLUJ1dC0yLWVuZTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMTAzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrwgJmd0OyAwIHwgSGlnaGVyIGIucC4gKDQgwrBDKTwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIHRyYW5zLUJ1dC0yLWVuZSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MCwgMTMwKSI+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSIwIiB4Mj0iMzAiIHkyPSIwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICAgIDxsaW5lIHgxPSItMzAiIHkxPSItNiIgeDI9IjMwIiB5Mj0iLTYiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDwhLS0gT3Bwb3NpdGUgZ3JvdXBzIC0tPgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01NSIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgICAgPHRleHQgeD0iLTY1IiB5PSItNDAiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2Ij5DSOKCgzwvdGV4dD4KICAgICAgPGxpbmUgeDE9IjMwIiB5MT0iMCIgeDI9IjU1IiB5Mj0iMzUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgIDx0ZXh0IHg9IjU1IiB5PSI1MCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPkNI4oKDPC90ZXh0PgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iMCIgeDI9Ii01MCIgeTI9IjM1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICAgIDx0ZXh0IHg9Ii01NSIgeT0iNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNFMEUwRTAiPkg8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSI1MCIgeTI9Ii0zNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSI1MCIgeT0iLTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRTBFMEUwIj5IPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSI4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50cmFucy1CdXQtMi1lbmU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjEwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPs68ID0gMCB8IEhpZ2hlciBtLnAuICgtMTA1IMKwQyk8L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIFJpZ2h0IEJveDogQWRkaXRpb24gJiBPem9ub2x5c2lzIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoNDEsMTgyLDI0NiwwLjA2KSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjODFENEZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbGVjdHJvcGhpbGljIEFkZGl0aW9uICZhbXA7IE96b25vbHlzaXM8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjU1IiB3aWR0aD0iMzEwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5NYXJrb3ZuaWtvdidzIEFkZGl0aW9uIFJ1bGU6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjkzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCI+4oCiIEjigbogYWRkcyB0byBmb3JtIG1vcmUgc3RhYmxlIGNhcmJvY2F0aW9uICgywrAgJmd0OyAxwrApPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iIzAwRTY3NiI+Q0jigoMtQ0g9Q0jigoIgKyBIQnIg4p+2IENI4oKDLUNIKEJyKS1DSOKCgyAoTWFqb3IpPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5LaGFyYXNjaCBQZXJveGlkZSBFZmZlY3QgKEFudGktTWFya292bmlrb3YpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNzMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgRnJlZSByYWRpY2FsIGFkZGl0aW9uIG9mIEhCciBpbiBvcmdhbmljIHBlcm94aWRlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiMwMEU2NzYiPkNI4oKDLUNIPUNI4oKCICsgSEJyIC8gUGVyb3hpZGUg4p+2IENI4oKDQ0jigoJDSOKCgkJyPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIyMTUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2Ij5SZWR1Y3RpdmUgT3pvbm9seXNpcyAoT+KCgyAvIFpuICsgSOKCgk8pOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIyNTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgQ2xlYXZlcyBDPUMgZG91YmxlIGJvbmQgaW50byBjYXJib255bHMgKENITyAvIEM9Tyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjODFENEZBIj7igKIgS2V5IGFuYWx5dGljYWwgdG9vbCBmb3IgZG91YmxlIGJvbmQgbG9jYXRpb24hPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(41, 182, 246, 0.35); border: 1.5px solid #29B6F6;" alt="3D Alkene Reactions" /><p style="color: #29B6F6; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 9.2: Alkene Geometrical Isomerism (cis/trans), Markownikoff Addition &amp; Reductive Ozonolysis</p></div>

  

  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 16.5px;">(i) Nomenclature, Structure of Double Bond &amp; Geometrical Isomerism</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Alkenes contain a carbon-carbon double bond (C=C: one strong &sigma;-bond + one sideways &pi;-bond).
      <br/>&bull; C=C Bond Length: 134 pm; Bond energy: 681 kJ/mol.
      <br/>&bull; <b style="color: #29B6F6;">Geometrical Isomerism (cis-trans Isomerism):</b> Arises due to <b>restricted rotation about the &pi;-bond</b> (rotating requires breaking the &pi;-bond, activation energy ~260 kJ/mol). Requires both carbons to bear two different groups (abC=Cab):
      <br/>- <b style="color: #29B6F6;">cis-Isomer:</b> Identical groups on the same side of the double bond. Possesses higher dipole moment (&mu; &gt; 0), higher boiling point, but lower melting point (poor crystal packing).
      <br/>- <b style="color: #29B6F6;">trans-Isomer:</b> Identical groups on opposite sides. Dipole moments cancel (&mu; &approx; 0), higher symmetry permits tight crystal lattice packing, resulting in <b>higher melting point</b>.
    </p>
  </div>

  <h3 style="color: #29B6F6; margin-top: 22px; font-size: 16.5px;">(ii) Methods of Preparation of Alkenes</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #29B6F6;">1. Dehydrohalogenation of Alkyl Halides (&beta;-Elimination):</b>
      <br/>R-CH<sub>2</sub>-CH<sub>2</sub>X + alcoholic KOH &rarr; R-CH=CH<sub>2</sub> + KX + H<sub>2</sub>O.
      <br/>Governed by <b>Saytzeff's Rule</b>: More alkyl-substituted alkene is the major product.
    </li>
    <li><b style="color: #29B6F6;">2. Acid-Catalyzed Dehydration of Alcohols:</b>
      <br/>Heating alcohol with conc. H<sub>2</sub>SO<sub>4</sub> at 443 K (170&deg;C):
      <br/>CH<sub>3</sub>CH<sub>2</sub>OH &rarr; CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub>O. Ease of dehydration: <b>3&deg; &gt; 2&deg; &gt; 1&deg;</b> (via carbocation stability).
    </li>
    <li><b style="color: #29B6F6;">3. Controlled Hydrogenation of Alkynes:</b>
      <br/>- <i>Lindlar's Catalyst (Pd/CaCO<sub>3</sub> poisoned with quinoline):</i> Yields <b>cis-Alkene</b> (syn-addition).
      <br/>- <i>Birch Reduction (Na in liquid NH<sub>3</sub>):</i> Yields <b>trans-Alkene</b> (anti-addition).
    </li>
  </ul>

  <h3 style="color: #29B6F6; margin-top: 22px; font-size: 16.5px;">(iii) Electrophilic Addition Reactions &amp; Ozonolysis</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #29B6F6;">1. Markownikoff's Rule:</b> CH<sub>3</sub>-CH=CH<sub>2</sub> + HBr &rarr; CH<sub>3</sub>-CH(Br)-CH<sub>3</sub> (2-Bromopropane). Electrophilic H<sup>+</sup> attaches to terminal carbon to generate the more stable 2&deg; carbocation.</li>
      <li><b style="color: #29B6F6;">2. Anti-Markownikoff Addition (Peroxide Effect):</b> CH<sub>3</sub>-CH=CH<sub>2</sub> + HBr + (C<sub>6</sub>H<sub>5</sub>CO)<sub>2</sub>O<sub>2</sub> &rarr; CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>Br (1-Bromopropane). Free radical chain mechanism.</li>
      <li><b style="color: #29B6F6;">3. Baeyer's Test:</b> Cold, dilute alkaline KMnO<sub>4</sub> (1%) oxidizes alkenes to vicinal glycols (syn-hydroxylation), with sharp decolorization of purple KMnO<sub>4</sub> to brown MnO<sub>2</sub>.</li>
      <li><b style="color: #29B6F6;">4. Ozonolysis (Reductive Cleavage with Zn/H<sub>2</sub>O):</b>
        <br/>Alkene reacts with O<sub>3</sub> to form cyclic ozonide, which cleaved with Zn dust yields aldehydes/ketones:
        <br/>&bull; CH<sub>3</sub>-CH=CH-CH<sub>3</sub> &rarr; <b>2 CH<sub>3</sub>CHO (Acetaldehyde)</b>.
        <br/>&bull; (CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub> &rarr; <b>CH<sub>3</sub>COCH<sub>3</sub> (Acetone) + HCHO (Formaldehyde)</b>.
        <br/>Locates position of double bonds by identifying fragments!
      </li>
    </ul>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #29B6F6; border-bottom: 2px solid #29B6F6; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Alkynes: Structure, Acidic Character, Preparation and Reactions
  </h2>

  <!-- NEW STANDALONE SVG CARD FOR ALKYNES & ACIDITY -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(41, 182, 246, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title Banner -->
      <text x="250" y="26" fill="#29B6F6" font-size="14" font-weight="bold" text-anchor="middle">
        Structure of Triple Bond &amp; Acidity of Terminal Alkynes
      </text>

      <!-- Left: Triple Bond sp Hybridization -->
      <g transform="translate(30, 45)">
        <rect width="210" height="110" rx="6" fill="rgba(41, 182, 246, 0.15)" stroke="#29B6F6" stroke-width="1.2"/>
        <text x="105" y="22" fill="#29B6F6" font-size="11.5" font-weight="bold" text-anchor="middle">Carbon-Carbon Triple Bond</text>
        <text x="105" y="44" fill="#FFFFFF" font-size="11" text-anchor="middle">H &mdash; C &equiv; C &mdash; H (Linear, 180&deg;)</text>
        <text x="105" y="66" fill="#CBD5E1" font-size="10" text-anchor="middle">1 &sigma;-bond (sp-sp) + 2 &pi;-bonds (2p-2p)</text>
        <text x="105" y="86" fill="#81D4FA" font-size="10" text-anchor="middle">Cylindrical &pi;-electron cloud around axis</text>
        <text x="105" y="102" fill="#FFE082" font-size="9.5" font-weight="bold" text-anchor="middle">C&equiv;C Bond Length = 120 pm</text>
      </g>

      <!-- Right: Acidity Mechanism -->
      <g transform="translate(260, 45)">
        <rect width="210" height="110" rx="6" fill="rgba(255, 138, 101, 0.15)" stroke="#FF8A65" stroke-width="1.2"/>
        <text x="105" y="22" fill="#FF8A65" font-size="11.5" font-weight="bold" text-anchor="middle">Acidity of Terminal Alkynes</text>
        <text x="105" y="44" fill="#FFFFFF" font-size="10.5" text-anchor="middle">sp Carbon: 50% s-character</text>
        <text x="105" y="64" fill="#CBD5E1" font-size="10" text-anchor="middle">High electronegativity stabilizes C:<sup>-</sup></text>
        <text x="105" y="84" fill="#69F0AE" font-size="10" font-weight="bold" text-anchor="middle">HC&equiv;CH + NaNH<sub>2</sub> &rarr; HC&equiv;C<sup>-</sup>Na<sup>+</sup> + NH<sub>3</sub></text>
        <text x="105" y="102" fill="#FFAB91" font-size="9.5" text-anchor="middle">Forms White ppt with Tollen's Reagent</text>
      </g>

      <!-- Bottom: Cyclic Polymerization -->
      <g transform="translate(30, 168)">
        <rect width="440" height="95" rx="6" fill="rgba(41, 182, 246, 0.12)" stroke="#29B6F6" stroke-width="1.2"/>
        <text x="220" y="22" fill="#29B6F6" font-size="12" font-weight="bold" text-anchor="middle">
          Cyclic Trimerization: Ethyne &rarr; Benzene
        </text>
        <text x="220" y="44" fill="#FFFFFF" font-size="11.5" text-anchor="middle">
          3 HC &equiv; CH &nbsp; &mdash;&mdash;&gt; &nbsp; C<sub>6</sub>H<sub>6</sub> (Benzene)
        </text>
        <text x="220" y="64" fill="#CBD5E1" font-size="10.5" text-anchor="middle">
          Passed through Red Hot Iron Tube at 873 K (Aromatic Ring Synthesis)
        </text>
        <text x="220" y="82" fill="#69F0AE" font-size="10" font-weight="bold" text-anchor="middle">
          Converts linear alkyne into fully delocalized aromatic sextet!
        </text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 9.4: 3D Structure of Triple Bond (sp Cylindrical Cloud), Acidity of Terminal Alkynes &amp; Cyclic Trimerization to Benzene
  </div>
</div>


  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 16.5px;">(i) Structure of Triple Bond &amp; Physical Properties</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Alkynes possess general formula C<sub>n</sub>H<sub>2n-2</sub>. The C&equiv;C triple bond consists of one axial &sigma;-bond (sp-sp overlap) and two mutually perpendicular &pi;-bonds (2p<sub>y</sub>-2p<sub>y</sub> and 2p<sub>z</sub>-2p<sub>z</sub>).
      <br/>&bull; C&equiv;C bond length = 120 pm; Bond dissociation energy = 823 kJ/mol.
      <br/>&bull; The two &pi;-bonds merge to form a uniform <b>cylindrical electron cloud</b> symmetrical about the internuclear axis.
    </p>
  </div>

  <h3 style="color: #29B6F6; margin-top: 22px; font-size: 16.5px;">(ii) Preparation &amp; Acidic Character of Terminal Alkynes</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #29B6F6;">Preparation from Calcium Carbide:</b> CaC<sub>2</sub> + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + HC&equiv;CH.</li>
      <li><b style="color: #29B6F6;">Dehalogenation of Vicinal Dihalides:</b> Br-CH<sub>2</sub>-CH<sub>2</sub>-Br + 2 alcoholic KOH (or NaNH<sub>2</sub>) &rarr; HC&equiv;CH + 2KBr + 2H<sub>2</sub>O.</li>
      <li><b style="color: #29B6F6;">Acidic Character of Terminal Alkynes (HC&equiv;CR):</b>
        <br/>The sp-hybridized carbon possesses <b>50% s-character</b>. The electrons in an sp orbital are held closer to the positively charged nucleus, rendering sp carbon strongly electronegative. Consequently, the C-H bond is polarized (C<sup>&delta;-</sup>-H<sup>&delta;+</sup>), allowing terminal protons to be abstracted by strong bases:
        <br/>&bull; HC&equiv;CH + NaNH<sub>2</sub> &rarr; HC&equiv;C<sup>-</sup>Na<sup>+</sup> + NH<sub>3</sub>.
        <br/>&bull; Reaction with Ammoniacal Silver Nitrate (Tollen's Reagent): HC&equiv;CH + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> &rarr; <b>Ag-C&equiv;C-Ag&darr; (White precipitate of Disilver acetylide)</b> + 2NH<sub>4</sub><sup>+</sup> + 2NH<sub>3</sub>.
        <br/>&bull; Reaction with Ammoniacal Cuprous Chloride: HC&equiv;CH + 2[Cu(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> &rarr; <b>Cu-C&equiv;C-Cu&darr; (Red precipitate of Dicopper acetylide)</b>.
        <br/>(Internal alkynes like but-2-yne do not possess terminal hydrogens and fail these tests).
      </li>
    </ul>
  </div>

  <h3 style="color: #29B6F6; margin-top: 22px; font-size: 16.5px;">(iii) Chemical Addition Reactions &amp; Cyclic Polymerization</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #29B6F6;">Hydration of Alkynes (Kucherov Reaction):</b>
      <br/>Passing alkyne into warm 40% H<sub>2</sub>SO<sub>4</sub> containing 1% HgSO<sub>4</sub> catalyst at 333 K:
      <br/>&bull; HC&equiv;CH + H<sub>2</sub>O &rarr; [CH<sub>2</sub>=CH-OH] (Vinyl alcohol) &hArr; <b>CH<sub>3</sub>CHO (Acetaldehyde)</b> (via keto-enol tautomerism).
      <br/>&bull; CH<sub>3</sub>-C&equiv;CH + H<sub>2</sub>O &rarr; [CH<sub>3</sub>-C(OH)=CH<sub>2</sub>] &hArr; <b>CH<sub>3</sub>COCH<sub>3</sub> (Acetone)</b>.
    </li>
    <li><b style="color: #29B6F6;">Cyclic Polymerization:</b>
      <br/>Passing ethyne through a <b>red-hot iron tube at 873 K</b> results in cyclic trimerization to yield <b>Benzene (C<sub>6</sub>H<sub>6</sub>)</b>.
    </li>
  </ul>

  <!-- SECTION 4 -->
  <h2 style="color: #29B6F6; border-bottom: 2px solid #29B6F6; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Aromatic Hydrocarbons: Benzene, Aromaticity, Electrophilic Substitution and Directive Influence
  </h2>

  <!-- PRESERVED IMAGE 3 -->
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDNkNWMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTJjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Bcm9tYXRpYyBIeWRyb2NhcmJvbnM6IEJlbnplbmUgUmVzb25hbmNlICZhbXA7IERpcmVjdGl2ZSBJbmZsdWVuY2U8L3RleHQ+CgogIDwhLS0gTGVmdCBCb3g6IEJlbnplbmUgUmVzb25hbmNlICYgQXJvbWF0aWNpdHkgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmVuemVuZSAoQ+KChkjigoYpIFJlc29uYW5jZSAmYW1wOyBBcm9tYXRpY2l0eTwvdGV4dD4KCiAgICA8IS0tIEtla3Vsw6kgc3RydWN0dXJlcyAmIEh5YnJpZCAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwLCAxMzApIj4KICAgICAgPHBvbHlnb24gcG9pbnRzPSIwLC0zMCAyNiwtMTUgMjYsMTUgMCwzMCAtMjYsMTUgLTI2LC0xNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iLTIwIiB5MT0iLTExIiB4Mj0iLTIwIiB5Mj0iMTEiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgICAgPGxpbmUgeDE9IjQiIHkxPSItMjMiIHgyPSIyMiIgeTI9Ii0xMiIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8bGluZSB4MT0iNCIgeTE9IjIzIiB4Mj0iMjIiIHkyPSIxMiIgc3Ryb2tlPSIjMjlCNkY2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8dGV4dCB4PSIwIiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPktla3Vsw6kgSTwvdGV4dD4KICAgIDwvZz4KCiAgICA8dGV4dCB4PSIxNzUiIHk9IjEzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjlCNkY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ih4Hih4E8L3RleHQ+CgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgwLCAxMzApIj4KICAgICAgPHBvbHlnb24gcG9pbnRzPSIwLC0zMCAyNiwtMTUgMjYsMTUgMCwzMCAtMjYsMTUgLTI2LC0xNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMyIvPgogICAgICA8dGV4dCB4PSIwIiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM4MUQ0RkEiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZXNvbmFuY2UgSHlicmlkPC90ZXh0PgogICAgPC9nPgoKICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkjDvGNrZWwncyBSdWxlOiAoNG4gKyAyKSDPgC1lbGVjdHJvbnMgKG4gPSAxKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0RERCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oCiIEFsbCBDLUMgYm9uZHMgZXF1YWwgKDEzOSBwbSwgYmV0d2VlbiAxNTQgJmFtcDsgMTM0IHBtKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMjYzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oCiIFJlc29uYW5jZSBFbmVyZ3kgPSAxNTIga0ovbW9sPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBSaWdodCBCb3g6IEVsZWN0cm9waGlsaWMgU3Vic3RpdHV0aW9uICYgRGlyZWN0aXZlIEluZmx1ZW5jZSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMxMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDQxLDE4MiwyNDYsMC4wNikiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzgxRDRGQSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U19FIEFyIFJlYWN0aW9ucyAmYW1wOyBEaXJlY3RpdmUgSW5mbHVlbmNlPC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSI1MCIgd2lkdGg9IjMxMCIgaGVpZ2h0PSI3NSIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIzMCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzI5QjZGNiI+U19FIEFyIE1lY2hhbmlzbSBTdGVwczo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iODgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNEREQiPjEuIEdlbmVyYXRpb24gb2YgRWxlY3Ryb3BoaWxlIChOT+KCguKBuiwgQ2zigbosIFLigbosIFJDT+KBuik8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTA0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjREREIj4yLiBGb3JtYXRpb24gb2YgQXJlbml1bSBJb24gKM+DLWNvbXBsZXggaW50ZXJtZWRpYXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMTkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiMwMEU2NzYiPjMuIExvc3Mgb2YgSOKBuiBmcm9tIM+DLWNvbXBsZXggcmVzdG9yaW5nIGFyb21hdGljaXR5PC90ZXh0PgoKICAgIDxyZWN0IHg9IjIwIiB5PSIxMzUiIHdpZHRoPSIzMTAiIGhlaWdodD0iNzUiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiMyOUI2RjYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2Ij5PcnRobyAmYW1wOyBQYXJhIERpcmVjdGluZyBHcm91cHMgKEFjdGl2YXRpbmcpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNzMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNEREQiPuKAoiBFbGVjdHJvbiBkb25hdGluZzogLU9ILCAtTkjigoIsIC1PQ0jigoMsIC1DSOKCgzwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBJbmNyZWFzZXMgZWxlY3Ryb24gZGVuc2l0eSBhdCBvcnRobyAmYW1wOyBwYXJhIHBvc2l0aW9ucyE8L3RleHQ+CgogICAgPHJlY3QgeD0iMjAiIHk9IjIyMCIgd2lkdGg9IjMxMCIgaGVpZ2h0PSI3NSIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZT0iIzI5QjZGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPk1ldGEgRGlyZWN0aW5nIEdyb3VwcyAoRGVhY3RpdmF0aW5nKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMjU4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjREREIj7igKIgRWxlY3Ryb24gd2l0aGRyYXdpbmc6IC1OT+KCgiwgLUNOLCAtQ0hPLCAtQ09PSDwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIyNzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiM4MUQ0RkEiPuKAoiBXaXRoZHJhd3MgZeKBuyBkZW5zaXR5IGZyb20gby9wLCBkaXJlY3RpbmcgReKBuiB0byBtZXRhPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(41, 182, 246, 0.35); border: 1.5px solid #29B6F6;" alt="3D Aromatic Hydrocarbons" /><p style="color: #29B6F6; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 9.3: Benzene Aromaticity (Resonance Hybrid), Electrophilic Substitution Mechanism &amp; Directive Influence</p></div>

  

  <!-- NEW STANDALONE SVG CARD FOR SEAR MECHANISM & DIRECTIVE INFLUENCE -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(41, 182, 246, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#29B6F6" font-size="14" font-weight="bold" text-anchor="middle">
        Electrophilic Aromatic Substitution (S<sub>E</sub>Ar) &amp; Directive Influence
      </text>

      <!-- 3-Step SEAr Mechanism -->
      <g transform="translate(30, 45)">
        <rect width="440" height="98" rx="6" fill="rgba(38, 198, 218, 0.12)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="220" y="20" fill="#26C6DA" font-size="11.5" font-weight="bold" text-anchor="middle">3-Step General S<sub>E</sub>Ar Mechanism</text>
        
        <text x="20" y="42" fill="#FDC830" font-size="10.5" font-weight="bold">Step 1: Generation of Electrophile (E<sup>+</sup>):</text>
        <text x="280" y="42" fill="#FFFFFF" font-size="10">HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> &rarr; NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>-</sup></text>

        <text x="20" y="64" fill="#FDC830" font-size="10.5" font-weight="bold">Step 2: Formation of Arenium Ion (&sigma;-Complex):</text>
        <text x="280" y="64" fill="#FFFFFF" font-size="10">Slow, Rate-determining step (Resonance delocalized)</text>

        <text x="20" y="86" fill="#FDC830" font-size="10.5" font-weight="bold">Step 3: Loss of Proton (Aromaticity Restored):</text>
        <text x="280" y="86" fill="#69F0AE" font-size="10" font-weight="bold">Fast deprotonation by base &rarr; Substituted Benzene</text>
      </g>

      <!-- Directive Influence Comparison -->
      <g transform="translate(30, 155)">
        <!-- Ortho/Para Directing -->
        <rect x="0" y="0" width="210" height="110" rx="6" fill="rgba(102, 187, 106, 0.15)" stroke="#66BB6A" stroke-width="1.2"/>
        <text x="105" y="22" fill="#66BB6A" font-size="11.5" font-weight="bold" text-anchor="middle">Ortho / Para Directing (Activators)</text>
        <text x="105" y="44" fill="#FFFFFF" font-size="10" text-anchor="middle">+R / +M effect increases electron density</text>
        <text x="105" y="62" fill="#CBD5E1" font-size="9.5" text-anchor="middle">specifically at Ortho &amp; Para positions</text>
        <text x="105" y="82" fill="#81C784" font-size="10" font-weight="bold" text-anchor="middle">-OH, -NH<sub>2</sub>, -OCH<sub>3</sub>, -CH<sub>3</sub></text>
        <text x="105" y="98" fill="#FFE082" font-size="9" text-anchor="middle">Halogens: -I deactivates, but +R directs o,p</text>

        <!-- Meta Directing -->
        <rect x="230" y="0" width="210" height="110" rx="6" fill="rgba(244, 67, 54, 0.15)" stroke="#F44336" stroke-width="1.2"/>
        <text x="335" y="22" fill="#F44336" font-size="11.5" font-weight="bold" text-anchor="middle">Meta Directing (Deactivators)</text>
        <text x="335" y="44" fill="#FFFFFF" font-size="10" text-anchor="middle">-R / -M and -I withdraw &pi;-electrons</text>
        <text x="335" y="62" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Depletes ortho &amp; para heavily</text>
        <text x="335" y="82" fill="#FF8A65" font-size="10" font-weight="bold" text-anchor="middle">-NO<sub>2</sub>, -CN, -CHO, -COOH, -SO<sub>3</sub>H</text>
        <text x="335" y="98" fill="#FFCDD2" font-size="9" text-anchor="middle">Meta position is comparatively less depleted</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 9.5: Electrophilic Aromatic Substitution (S<sub>E</sub>Ar) 3-Step Reaction Mechanism (&sigma;-Complex Arenium Ion) &amp; Ortho/Para vs Meta Directive Influence Matrix
  </div>
</div>


  <h3 style="color: #29B6F6; margin-top: 18px; font-size: 16.5px;">(i) Benzene Structure, Resonance &amp; Hückel's Rule</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Benzene (C<sub>6</sub>H<sub>6</sub>, isolated by Michael Faraday, 1825) is a planar regular hexagonal ring of six sp<sup>2</sup>-hybridized carbons with 120&deg; bond angles.
      <br/>&bull; <b style="color: #29B6F6;">Resonance Hybrid:</b> Kekulé structures with alternating double bonds contribute equally to a resonance hybrid. All six C-C bond lengths are completely identical at <b>139 pm</b> (intermediate between C-C 154 pm and C=C 134 pm). Resonance energy = <b>150.6 kJ/mol (36 kcal/mol)</b>.
      <br/>&bull; <b style="color: #29B6F6;">Hückel's Rule of Aromaticity:</b> Planar, monocyclic ring with <b>(4n + 2) delocalized &pi;-electrons</b>:
      <br/>- Benzene: n = 1 &rArr; 6 &pi;-electrons (Aromatic).
      <br/>- Naphthalene: n = 2 &rArr; 10 &pi;-electrons (Aromatic).
      <br/>- Cyclopentadienyl anion: n = 1 &rArr; 6 &pi;-electrons (Aromatic).
      <br/>- Tropylium cation: n = 1 &rArr; 6 &pi;-electrons (Aromatic).
      <br/>- Cyclobutadiene: 4 &pi;-electrons (4n) &rArr; <b>Antiaromatic</b> (extremely unstable).
    </p>
  </div>

  <h3 style="color: #29B6F6; margin-top: 22px; font-size: 16.5px;">(ii) Electrophilic Aromatic Substitution (S<sub>E</sub>Ar) Mechanism</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Because benzene possesses an electron-rich &pi;-cloud above and below its ring plane, it repels nucleophiles and reacts exclusively with strong electrophiles via a 3-step substitution that preserves aromatic stability:
      <br/>1. <b style="color: #29B6F6;">Step 1: Generation of Electrophile (E<sup>+</sup>):</b>
        <br/>&bull; <i>Nitration:</i> HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> &rarr; <b>NO<sub>2</sub><sup>+</sup> (Nitronium ion)</b> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>-</sup>.
        <br/>&bull; <i>Halogenation:</i> Cl<sub>2</sub> + anhydrous AlCl<sub>3</sub> &rarr; <b>Cl<sup>+</sup> (Chloronium ion)</b> + AlCl<sub>4</sub><sup>-</sup>.
        <br/>&bull; <i>Sulphonation:</i> 2H<sub>2</sub>SO<sub>4</sub> &hArr; <b>SO<sub>3</sub> (Neutral electrophile)</b> + H<sub>3</sub>O<sup>+</sup> + HSO<sub>4</sub><sup>-</sup>.
        <br/>&bull; <i>Friedel-Crafts Alkylation:</i> CH<sub>3</sub>Cl + AlCl<sub>3</sub> &rarr; <b>CH<sub>3</sub><sup>+</sup> (Methyl carbocation)</b> + AlCl<sub>4</sub><sup>-</sup>.
        <br/>&bull; <i>Friedel-Crafts Acylation:</i> CH<sub>3</sub>COCl + AlCl<sub>3</sub> &rarr; <b>CH<sub>3</sub>-C<sup>+</sup>=O (Acylium ion)</b> + AlCl<sub>4</sub><sup>-</sup>.
      <br/>2. <b style="color: #29B6F6;">Step 2: Formation of Arenium Ion (&sigma;-Complex, Slow Step):</b> Electrophile attacks benzene ring, forming a resonance-stabilized arenium ion where aromaticity is temporarily disrupted.
      <br/>3. <b style="color: #29B6F6;">Step 3: Loss of Proton (Fast Step):</b> Base abstracts ring proton from sp<sup>3</sup> carbon, restoring aromatic resonance stability.
    </p>
  </div>

  <h3 style="color: #29B6F6; margin-top: 22px; font-size: 16.5px;">(iii) Directive Influence of Substituents &amp; Polynuclear Aromatics</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 182, 246, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #29B6F6;">Ortho/Para-Directing Groups (Activating):</b> Groups that release electron density into the ring through +R resonance effects (-OH, -NH<sub>2</sub>, -OCH<sub>3</sub>) or hyperconjugation/inductive effects (-CH<sub>3</sub>). Electron density is selectively magnified at ortho and para positions, directing electrophiles there.</li>
      <li><b style="color: #29B6F6;">Meta-Directing Groups (Deactivating):</b> Groups that withdraw electron density through -R and -I effects (-NO<sub>2</sub>, -CN, -CHO, -COOH, -SO<sub>3</sub>H). Ortho and para positions become strongly positive; the meta position is comparatively less depleted, directing electrophiles to meta.</li>
      <li><b style="color: #29B6F6;">Halogens (Anomalous Behavior):</b> Due to strong -I effect, halogens withdraw electrons and deactivate the ring; but due to +R lone pair resonance, they direct incoming electrophiles to <b>ortho and para positions</b>.</li>
      <li><b style="color: #29B6F6;">Carcinogenicity &amp; Toxicity:</b> Polynuclear aromatic hydrocarbons (PAHs) containing fused benzene rings (e.g., 1,2-Benzanthracene, 3-methylcholanthrene, 1,2-Benzpyrene) formed during incomplete combustion of tobacco, coal, and petroleum are potent <b>carcinogens</b> that enter human cells and bind covalently to DNA, causing oncogenic mutations.</li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(1, 87, 155, 0.85)); border: 2px solid #29B6F6; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #29B6F6; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 9 Formula &amp; Reaction Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(41, 182, 246, 0.25); color: #29B6F6; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Hydrocarbon Reaction</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Reagents &amp; Conditions</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Major Product &amp; Mechanism</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">Wurtz Reaction:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">2 R-X + 2 Na in dry ether</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">R-R (Symmetrical alkane)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">Kolbe Electrolysis:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Aqueous 2 R-COONa (Electrolysis)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">R-R + 2 CO<sub>2</sub> at Anode; H<sub>2</sub> at Cathode</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">Ethane Conformations:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&theta; = 60&deg; (Staggered) vs &theta; = 0&deg; (Eclipsed)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Staggered is more stable by 12.5 kJ/mol</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">Markownikoff Addition:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Alkene + HX (Ionic mechanism)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Negative part to carbon with fewer H's</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">Kharasch Peroxide Effect:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Alkene + HBr + Peroxide</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Anti-Markownikoff (Free radical; HBr only)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">Ozonolysis:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">1. O<sub>3</sub>, 2. Zn / H<sub>2</sub>O</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cleaves C=C into aldehydes / ketones</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">Terminal Alkyne Acidity:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">R-C&equiv;CH + NaNH<sub>2</sub> (or ammoniacal AgNO<sub>3</sub>)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">R-C&equiv;C<sup>-</sup>Na<sup>+</sup> (sp carbon holds e<sup>-</sup> tightly)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">Hückel Rule:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">(4n + 2) &pi;-electrons, planar ring</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Aromatic resonance energy (Benzene = 150.6 kJ/mol)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #29B6F6;">S<sub>E</sub>Ar Mechanism:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Benzene + E<sup>+</sup> (Nitration, Friedel-Crafts)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&sigma;-Complex arenium ion &rarr; Substituted benzene</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Chem9HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(41, 182, 246, 0.15), rgba(2, 136, 209, 0.15)); border: 1.5px solid rgba(41, 182, 246, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #29B6F6; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Hydrocarbon Formulas, Conformations, Reagents &amp; Aromatic Substitution Basics</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: What is the general formula of Alkanes?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      C<sub>n</sub>H<sub>2n+2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: What is the hybridization and geometry of carbon in Methane?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>3</sup> hybridized and tetrahedral.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is the dihedral angle in the Staggered conformation of Ethane?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      60&deg;.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: What is the dihedral angle in the Eclipsed conformation of Ethane?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      0&deg;.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Which conformation of ethane is more stable: Staggered or Eclipsed?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Staggered conformation (minimum torsional strain).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the magnitude of the torsional barrier in Ethane?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Approximately 12.5 kJ mol<sup>-1</sup> (3 kcal mol<sup>-1</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Name the alkane that cannot be prepared by the Wurtz reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Methane (CH<sub>4</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What is Soda-Lime?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A 3:1 mixture of Sodium hydroxide (NaOH) and Calcium oxide (CaO).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What gas is liberated at the anode during Kolbe's electrolysis of aqueous Sodium acetate?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Carbon dioxide (CO<sub>2</sub>) and Ethane (C<sub>2</sub>H<sub>6</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What gas is liberated at the cathode during Kolbe's electrolysis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hydrogen gas (H<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What is the catalyst used in Sabatier-Senderens reaction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Finely divided Nickel (Ni) at 523 K.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: What is the C=C bond length in Ethene?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      134 pm (1.34 &Aring;).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What is the C&equiv;C bond length in Ethyne?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      120 pm (1.20 &Aring;).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What type of isomerism is shown by But-2-ene?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Geometrical isomerism (cis-trans isomerism).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Which isomer of but-2-ene has a higher dipole moment: cis or trans?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      cis-But-2-ene (&mu; &gt; 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Which isomer of but-2-ene has a higher melting point: cis or trans?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      trans-But-2-ene (due to higher symmetry and tighter crystal lattice packing).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: State Saytzeff's Rule.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In dehydrohalogenation reactions, the more alkyl-substituted alkene is formed as the major product.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: What is Lindlar's Catalyst?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Palladium supported on CaCO<sub>3</sub> partially poisoned with quinoline or lead acetate.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What stereoisomer is formed when an alkyne is reduced with Lindlar's catalyst?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      cis-Alkene (syn-addition of H<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What stereoisomer is formed when an alkyne is reduced by Sodium in liquid Ammonia (Birch reduction)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      trans-Alkene (anti-addition of H<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: State Markownikoff's Rule.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In electrophilic addition of an unsymmetrical reagent to an unsymmetrical alkene, the negative part adds to the double-bonded carbon with fewer hydrogens.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Under what conditions does the addition of HBr to an unsymmetrical alkene violate Markownikoff's rule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the presence of organic peroxides (Peroxide / Kharasch effect).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Why does the Peroxide effect not apply to HCl or HI?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because one of the chain propagation steps is endothermic for HCl and HI.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What is Baeyer's Reagent?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cold, dilute, 1% alkaline potassium permanganate (KMnO<sub>4</sub>) solution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What is the observation when Baeyer's reagent is treated with an alkene?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The purple color of KMnO<sub>4</sub> discharges and a brown precipitate of MnO<sub>2</sub> forms.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: What are the products of reductive ozonolysis of Ethene?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Two molecules of Formaldehyde (HCHO).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: What is the hybridization of carbon atoms in Ethyne?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp hybridized.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Why are terminal alkynes weakly acidic in nature?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because sp carbon has 50% s-character and high electronegativity, stabilizing the negative charge on the conjugate carbanion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: What reagent is used to distinguish terminal alkynes from internal alkynes?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ammoniacal Silver Nitrate (Tollen's reagent) or Ammoniacal Cuprous Chloride.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What precipitate is formed when Ethyne is passed into ammoniacal AgNO3?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      White precipitate of Disilver acetylide (Ag-C&equiv;C-Ag).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: What precipitate is formed when Ethyne is passed into ammoniacal Cu2Cl2?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Red precipitate of Dicopper acetylide (Cu-C&equiv;C-Cu).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What product is formed when Ethyne undergoes hydration in presence of HgSO4 and dilute H2SO4 at 333 K?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Acetaldehyde (Ethanal, CH<sub>3</sub>CHO).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: What product is obtained by cyclic trimerization of Ethyne passed through a red-hot iron tube at 873 K?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Benzene (C<sub>6</sub>H<sub>6</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: State Hückel's Rule of Aromaticity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A planar, cyclic, fully conjugated system possessing (4n + 2) &pi;-electrons is aromatic.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: What is the resonance energy of Benzene?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      150.6 kJ mol<sup>-1</sup> (36 kcal mol<sup>-1</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What is the electrophile in the Nitration of Benzene?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nitronium ion (NO<sub>2</sub><sup>+</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: What is the electrophile in the Halogenation of Benzene using Cl2 and anhydrous AlCl3?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Chloronium ion (Cl<sup>+</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is the electrophile in the Sulphonation of Benzene?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sulfur trioxide (SO<sub>3</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Is the -NO2 group ortho/para-directing or meta-directing?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Meta-directing (and ring-deactivating).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Is the -OH group ortho/para-directing or meta-directing?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ortho/para-directing (and ring-activating).
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(41, 182, 246, 0.15), rgba(2, 136, 209, 0.15)); border: 1.5px solid rgba(41, 182, 246, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #29B6F6; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Markownikoff vs Kharasch, Ozonolysis Deductions, Hückel Aromaticity &amp; Interconversions</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Draw Sawhorse and Newman projections for the Staggered and Eclipsed conformations of Ethane and compare their stabilities.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In <b style="color: #29B6F6;">Staggered conformation</b>, the dihedral angle &theta; = 60&deg;; C-H bonds are maximally separated, minimizing electron cloud repulsion (zero torsional strain), making it the most stable (energy minimum).<br/>In <b style="color: #29B6F6;">Eclipsed conformation</b>, &theta; = 0&deg;; C-H bonds directly align in the same plane, causing maximal electronic repulsion between bonding pairs. This produces 12.5 kJ/mol of torsional strain, making it the least stable.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Explain why the Wurtz reaction is NOT suitable for preparing alkanes with an odd number of carbon atoms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When two different alkyl halides (e.g., CH<sub>3</sub>Br and CH<sub>3</sub>CH<sub>2</sub>Br) are reacted with sodium: 2Na + R-X + R'-X &rarr; R-R + R'-R' + R-R'. Three different alkanes are formed simultaneously (Ethane, Butane, and Propane). Because these alkanes have very close boiling points, their physical separation by fractional distillation is practically impossible, resulting in poor yields of the desired odd-carbon alkane.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the mechanism of Free Radical Chlorination of Methane with equations for initiation, propagation, and termination.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #29B6F6;">Initiation:</b> Cl<sub>2</sub> &rarr; 2Cl<sup>&bull;</sup> (h&nu;, homolytic cleavage).<br/>2. <b style="color: #29B6F6;">Propagation:</b><br/>(a) CH<sub>4</sub> + Cl<sup>&bull;</sup> &rarr; CH<sub>3</sub><sup>&bull;</sup> + HCl<br/>(b) CH<sub>3</sub><sup>&bull;</sup> + Cl<sub>2</sub> &rarr; CH<sub>3</sub>Cl + Cl<sup>&bull;</sup> (Chain continues).<br/>3. <b style="color: #29B6F6;">Termination:</b> Radicals combine: Cl<sup>&bull;</sup> + Cl<sup>&bull;</sup> &rarr; Cl<sub>2</sub>; CH<sub>3</sub><sup>&bull;</sup> + Cl<sup>&bull;</sup> &rarr; CH<sub>3</sub>Cl; <b>CH<sub>3</sub><sup>&bull;</sup> + CH<sub>3</sub><sup>&bull;</sup> &rarr; CH<sub>3</sub>-CH<sub>3</sub></b> (Isolation of ethane proves free radical mechanism).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain Geometrical Isomerism in Alkenes and why But-2-ene exhibits it while But-1-ene does not.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Geometrical isomerism requires restricted rotation about the C=C &pi;-bond, and <b>both double-bonded carbons must bear two distinct groups</b> (abC=Cab).<br/>In <b style="color: #29B6F6;">But-2-ene (CH<sub>3</sub>-CH=CH-CH<sub>3</sub>)</b>: Each sp<sup>2</sup> carbon is bonded to -H and -CH<sub>3</sub>. It forms two distinct diastereomers: cis-but-2-ene (methyls on same side) and trans-but-2-ene (methyls on opposite sides).<br/>In <b style="color: #29B6F6;">But-1-ene (CH<sub>2</sub>=CH-CH<sub>2</sub>-CH<sub>3</sub>)</b>: C1 is bonded to two identical hydrogen atoms; swapping them yields the identical molecule.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain why trans-But-2-ene has a higher melting point but a lower boiling point than cis-But-2-ene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #29B6F6;">Boiling Point:</b> cis-But-2-ene has reinforcing C-CH<sub>3</sub> bond dipoles (&mu; = 0.33 D); trans-isomer has opposing dipoles that cancel (&mu; = 0). Stronger dipole-dipole attractions in cis give it a higher boiling point (4&deg;C vs 1&deg;C).<br/>2. <b style="color: #29B6F6;">Melting Point:</b> trans-But-2-ene has a highly symmetrical shape that packs far more tightly and efficiently into a crystalline lattice, requiring significantly more thermal energy to disrupt (m.p. -106&deg;C for trans vs -139&deg;C for cis).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Explain Markownikoff's Rule and justify its mechanism through carbocation stability.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Reaction: CH<sub>3</sub>-CH=CH<sub>2</sub> + HBr &rarr; CH<sub>3</sub>-CH(Br)-CH<sub>3</sub> (2-Bromopropane).<br/>Electrophilic addition of H<sup>+</sup> can follow two paths:<br/>- Path A: H<sup>+</sup> attaches to C1 &rarr; <b>CH<sub>3</sub>-CH<sup>+</sup>-CH<sub>3</sub> (Secondary 2&deg; carbocation)</b>.<br/>- Path B: H<sup>+</sup> attaches to C2 &rarr; <b>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub><sup>+</sup> (Primary 1&deg; carbocation)</b>.<br/>Because the 2&deg; carbocation is stabilized by 6 hyperconjugative &alpha;-hydrogens and two +I methyl groups, Path A has a much lower activation energy, forming the 2&deg; carbocation exclusively. Br<sup>-</sup> attacks the 2&deg; carbocation to yield 2-bromopropane.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Explain the Peroxide Effect (Kharasch Effect) on the addition of HBr to Propene with free radical mechanism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In presence of organic peroxides: R-O-O-R &rarr; 2R-O<sup>&bull;</sup>.<br/>R-O<sup>&bull;</sup> + H-Br &rarr; R-OH + Br<sup>&bull;</sup>.<br/>Br<sup>&bull;</sup> radical adds to propene to generate the more stable radical:<br/>CH<sub>3</sub>-CH=CH<sub>2</sub> + Br<sup>&bull;</sup> &rarr; <b>CH<sub>3</sub>-CH<sup>&bull;</sup>-CH<sub>2</sub>Br (Secondary 2&deg; free radical, Major)</b>.<br/>CH<sub>3</sub>-CH<sup>&bull;</sup>-CH<sub>2</sub>Br + HBr &rarr; <b>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>Br (1-Bromopropane, Anti-Markownikoff)</b> + Br<sup>&bull;</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: An alkene 'A' on ozonolysis gives a mixture of Acetone and Acetaldehyde. Identify 'A' and write its IUPAC name and structure.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ozonolysis cleaves C=C to form C=O bonds. Working backward by joining carbonyl carbons with a double bond:<br/>Products: (CH<sub>3</sub>)<sub>2</sub>C=O (Acetone) + O=CH-CH<sub>3</sub> (Acetaldehyde).<br/>Join: <b>(CH<sub>3</sub>)<sub>2</sub>C = CH-CH<sub>3</sub></b>.<br/>Structure: 2-Methylbut-2-ene.<br/>IUPAC Name: <b style="color: #29B6F6;">2-Methylbut-2-ene</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain the acidic nature of Terminal Alkynes and compare the acidities of Ethyne, Ethene, and Ethane.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Terminal alkynes possess a hydrogen bonded to an sp-hybridized carbon. Electronegativity increases with s-character: <b>sp (50% s) &gt; sp<sup>2</sup> (33.3% s) &gt; sp<sup>3</sup> (25% s)</b>.<br/>The sp carbon strongly attracts bonding electrons, polarizing C-H and stabilizing the negative charge on the conjugate carbanion (HC&equiv;C<sup>-</sup>).<br/>Acidity order: <b>HC&equiv;CH (sp, pKa ~25) &gt;&gt; CH<sub>2</sub>=CH<sub>2</sub> (sp<sup>2</sup>, pKa ~44) &gt;&gt; CH<sub>3</sub>-CH<sub>3</sub> (sp<sup>3</sup>, pKa ~50)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: How will you distinguish between: (a) Hex-1-yne and Hex-2-yne, (b) Ethene and Ethane?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #29B6F6;">Hex-1-yne vs Hex-2-yne:</b> Add ammoniacal AgNO<sub>3</sub> (Tollen's reagent). Hex-1-yne (terminal alkyne) forms a <b>white precipitate of silver acetylide</b>; Hex-2-yne (internal alkyne) has no acidic terminal proton and shows no reaction.<br/>(b) <b style="color: #29B6F6;">Ethene vs Ethane:</b> Add Bromine water (reddish-brown) or Baeyer's reagent (alkaline KMnO<sub>4</sub>, purple). Ethene (unsaturated) <b>decolorizes both reagents</b>; Ethane (saturated) does not react.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Describe Kucherov's Reaction (Hydration of Alkynes) with equations for Ethyne and Propyne.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Alkynes add water in the presence of 40% H<sub>2</sub>SO<sub>4</sub> and 1% HgSO<sub>4</sub> catalyst at 333 K:<br/>1. <b style="color: #29B6F6;">Ethyne:</b> HC&equiv;CH + H<sub>2</sub>O &rarr; [CH<sub>2</sub>=CH-OH] (Unstable enol) &hArr; <b>CH<sub>3</sub>CHO (Acetaldehyde)</b>.<br/>2. <b style="color: #29B6F6;">Propyne:</b> CH<sub>3</sub>-C&equiv;CH + H<sub>2</sub>O &rarr; [CH<sub>3</sub>-C(OH)=CH<sub>2</sub>] &hArr; <b>CH<sub>3</sub>COCH<sub>3</sub> (Acetone)</b>.<br/>Follows Markownikoff's rule followed by spontaneous keto-enol tautomerism.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain the mechanism of Cyclic Polymerization of Ethyne to form Benzene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When pure ethyne gas is passed through a <b>red-hot iron or quartz tube at 873 K</b>, three molecules of ethyne undergo cyclic addition:<br/><b>3 HC&equiv;CH &rarr; C<sub>6</sub>H<sub>6</sub> (Benzene)</b>.<br/>The three cylindrical &pi;-electron systems of ethyne open up and reform into a continuous, cyclic, fully delocalized aromatic sextet of 6 &pi;-electrons, releasing substantial aromatic resonance energy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain the structure of Benzene based on resonance and molecular orbital theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Benzene is a planar regular hexagon of six sp<sup>2</sup> carbons. Each carbon forms two C-C &sigma;-bonds (139 pm) and one C-H &sigma;-bond (109 pm). Each carbon retains an unhybridized 2p<sub>z</sub> orbital perpendicular to the molecular plane.<br/>All six 2p<sub>z</sub> orbitals overlap sideways equally with neighbors on both sides, forming two continuous doughnut-shaped <b>delocalized &pi;-electron clouds</b> (one above and one below the ring plane) containing 6 &pi;-electrons, giving uniform C-C bond lengths of 139 pm and 150.6 kJ/mol resonance energy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Apply Hückel's Rule to determine whether each of the following is aromatic: (a) Benzene, (b) Cyclopentadienyl anion, (c) Cycloheptatrienyl cation (Tropylium ion), (d) Cyclooctatetraene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #29B6F6;">Benzene:</b> Planar, cyclic, fully conjugated, 6 &pi;-electrons (4n+2 with n=1) &rArr; <b>Aromatic</b>.<br/>(b) <b style="color: #29B6F6;">Cyclopentadienyl anion (C<sub>5</sub>H<sub>5</sub><sup>-</sup>):</b> 5 carbons with 2 &pi;-bonds + 1 lone pair = 6 &pi;-electrons (n=1) &rArr; <b>Aromatic</b>.<br/>(c) <b style="color: #29B6F6;">Tropylium cation (C<sub>7</sub>H<sub>7</sub><sup>+</sup>):</b> 7 carbons with 3 &pi;-bonds = 6 &pi;-electrons (n=1) &rArr; <b>Aromatic</b>.<br/>(d) <b style="color: #29B6F6;">Cyclooctatetraene (C<sub>8</sub>H<sub>8</sub>):</b> 8 &pi;-electrons (4n). It avoids antiaromaticity by adopting a non-planar <b>tub-shaped conformation</b> &rArr; <b>Non-Aromatic</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Explain the 3-step general mechanism of Electrophilic Aromatic Substitution (SEAr) on Benzene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #29B6F6;">Generation of Electrophile (E<sup>+</sup>):</b> Reagents react to produce an active electrophile (e.g., NO<sub>2</sub><sup>+</sup>, Cl<sup>+</sup>).<br/>2. <b style="color: #29B6F6;">Formation of Arenium Ion (&sigma;-Complex):</b> Electrophile attacks the &pi;-cloud, forming a resonance-stabilized arenium carbocation (Wheland intermediate) in which aromaticity is temporarily lost (Slow, Rate-determining step).<br/>3. <b style="color: #29B6F6;">Loss of Proton:</b> A base removes the sp<sup>3</sup> proton, restoring the stable aromatic 6 &pi;-electron sextet (Fast step).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Explain the mechanism of Friedel-Crafts Alkylation and Acylation of Benzene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">Alkylation:</b> CH<sub>3</sub>Cl + anhydrous AlCl<sub>3</sub> &rarr; CH<sub>3</sub><sup>+</sup> + AlCl<sub>4</sub><sup>-</sup>. The methyl carbocation attacks benzene to yield <b>Toluene (C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub>)</b>.<br/><b style="color: #29B6F6;">Acylation:</b> CH<sub>3</sub>COCl + anhydrous AlCl<sub>3</sub> &rarr; CH<sub>3</sub>-C<sup>+</sup>=O (Acylium ion) + AlCl<sub>4</sub><sup>-</sup>. Acylium ion attacks benzene to yield <b>Acetophenone (C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>)</b>.<br/>Acylation is superior because the acyl group deactivates the ring against polyalkylation, and the resonance-stabilized acylium ion does not undergo rearrangement.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Explain why the -OH group is ortho/para-directing and ring-activating in phenol.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In phenol, oxygen possesses unshared lone pairs directly conjugated with the benzene ring. Via <b>+R (resonance) effect</b>, oxygen donates electron density into the ring, producing canonical structures with negative charges localized at the <b>ortho and para positions</b>. This increases electron density across the ring (activating it toward electrophilic attack) and directs incoming electrophiles preferentially to ortho and para positions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain why the -NO2 group is meta-directing and ring-deactivating in nitrobenzene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In nitrobenzene, the nitrogen atom carries a formal positive charge and is bonded to strongly electronegative oxygen atoms. Via <b>-R and -I effects</b>, -NO<sub>2</sub> withdraws &pi;-electron density out of the ring. Resonance structures reveal formal positive charges appearing at the ortho and para positions. This deactivates the entire ring toward electrophiles; the <b>meta positions are comparatively less electron-deficient</b>, directing substitution to meta.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain the anomalous behavior of Halogens in electrophilic aromatic substitution (Deactivating yet Ortho/Para-directing).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Halogens exert two opposing electronic effects on the benzene ring:<br/>1. <b style="color: #29B6F6;">-I (Inductive) Effect:</b> Strong electronegativity pulls &sigma;-electrons away, deactivating the ring overall (rate of substitution is slower than benzene).<br/>2. <b style="color: #29B6F6;">+R (Resonance) Effect:</b> Lone pairs on halogen delocalize into the &pi;-system, selectively stabilizing the positive charge of the arenium ion when attack occurs at the <b>ortho and para positions</b>.<br/>Inductive effect dictates reactivity (deactivation), while resonance effect dictates regiochemistry (ortho/para-direction).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the carcinogenicity of Polynuclear Aromatic Hydrocarbons (PAHs) with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      PAHs contain two or more fused benzene rings (e.g., 1,2-Benzanthracene, 3-Methylcholanthrene, 1,2-Benzpyrene). Formed during incomplete combustion of coal, petroleum, and tobacco.<br/>When inhaled or absorbed, cellular cytochrome P450 enzymes metabolize PAHs into highly reactive <b>diol-epoxides</b>. These reactive epoxides bind covalently to guanine bases in cellular DNA, causing permanent frameshift mutations that trigger uncontrolled malignant tumors (cancer).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Convert: (a) Methane to Ethane, (b) Ethane to Methane.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #29B6F6;">Methane to Ethane:</b> CH<sub>4</sub> + Cl<sub>2</sub> (h&nu;) &rarr; CH<sub>3</sub>Cl + HCl. 2CH<sub>3</sub>Cl + 2Na (dry ether, Wurtz reaction) &rarr; <b>CH<sub>3</sub>-CH<sub>3</sub> (Ethane)</b>.<br/>(b) <b style="color: #29B6F6;">Ethane to Methane:</b> C<sub>2</sub>H<sub>6</sub> + Cl<sub>2</sub> (h&nu;) &rarr; C<sub>2</sub>H<sub>5</sub>Cl &rarr; (+ aq. KOH) &rarr; C<sub>2</sub>H<sub>5</sub>OH &rarr; (+ K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>/H<sup>+</sup>) &rarr; CH<sub>3</sub>COOH &rarr; (+ NaOH) &rarr; CH<sub>3</sub>COONa &rarr; (+ Soda-lime, &Delta;) &rarr; <b>CH<sub>4</sub> (Methane)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Convert: (a) Ethyne to Ethene, (b) Ethene to Ethyne.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #29B6F6;">Ethyne to Ethene:</b> HC&equiv;CH + H<sub>2</sub> in presence of Lindlar's catalyst (Pd/CaCO<sub>3</sub> + quinoline) &rarr; <b>CH<sub>2</sub>=CH<sub>2</sub> (Ethene)</b>.<br/>(b) <b style="color: #29B6F6;">Ethene to Ethyne:</b> CH<sub>2</sub>=CH<sub>2</sub> + Br<sub>2</sub> in CCl<sub>4</sub> &rarr; Br-CH<sub>2</sub>-CH<sub>2</sub>-Br (1,2-Dibromoethane). Treated with alcoholic KOH followed by NaNH<sub>2</sub> &rarr; <b>HC&equiv;CH (Ethyne)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain why Benzene undergoes substitution reactions easily but resists addition reactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Benzene possesses extraordinary aromatic resonance stability (resonance energy = 150.6 kJ/mol) due to complete delocalization of its 6 &pi;-electrons. Electrophilic substitution replaces a ring hydrogen while <b>regenerating the intact aromatic &pi;-sextet</b>, preserving full resonance energy. Addition reactions would require breaking the conjugated &pi;-system, destroying aromaticity, which is thermodynamically highly unfavored.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: What is Pyrolysis (Cracking) of Alkanes? Give an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The thermal decomposition of higher alkanes into lower alkanes, alkenes, and hydrogen upon heating to high temperatures (~773-1073 K) in the absence of oxygen.<br/>Example: <b>C<sub>6</sub>H<sub>14</sub> (Hexane at 773 K) &rarr; C<sub>6</sub>H<sub>12</sub> + H<sub>2</sub>, C<sub>4</sub>H<sub>8</sub> + C<sub>2</sub>H<sub>6</sub>, C<sub>3</sub>H<sub>6</sub> + C<sub>2</sub>H<sub>4</sub> + CH<sub>4</sub></b>.<br/>Proceeds via free radical fission; applied industrially in petroleum refineries to convert heavy gas oils into high-octane petrol.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain the Kolbe Electrolytic method for preparing Ethyne from Potassium maleate or fumarate.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Electrolysis of concentrated aqueous Potassium maleate (or fumarate):<br/>Anode (Oxidation): <sup>-</sup>OOC-CH=CH-COO<sup>-</sup> &rarr; <sup>&bull;</sup>OOC-CH=CH-COO<sup>&bull;</sup> + 2e<sup>-</sup> &rarr; <b>HC&equiv;CH (Ethyne) + 2CO<sub>2</sub></b>.<br/>Cathode (Reduction): 2H<sub>2</sub>O + 2e<sup>-</sup> &rarr; <b>H<sub>2</sub> + 2OH<sup>-</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Write equations to show how Benzene is converted into: (a) Chlorobenzene, (b) Toluene, (c) Acetophenone.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #29B6F6;">Chlorobenzene:</b> C<sub>6</sub>H<sub>6</sub> + Cl<sub>2</sub> + anhydrous AlCl<sub>3</sub> (dark) &rarr; <b>C<sub>6</sub>H<sub>5</sub>Cl + HCl</b>.<br/>(b) <b style="color: #29B6F6;">Toluene:</b> C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>Cl + anhydrous AlCl<sub>3</sub> (Friedel-Crafts alkylation) &rarr; <b>C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + HCl</b>.<br/>(c) <b style="color: #29B6F6;">Acetophenone:</b> C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl + anhydrous AlCl<sub>3</sub> (Friedel-Crafts acylation) &rarr; <b>C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> + HCl</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: What happens when Benzene is treated with excess Chlorine in the presence of UV light?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the presence of bright sunlight or UV light, the aromatic &pi;-electron delocalization is overcome by free radicals, undergoing addition of 3 chlorine molecules:<br/><b>C<sub>6</sub>H<sub>6</sub> + 3Cl<sub>2</sub> (UV light) &rarr; C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub> (Benzene hexachloride / BHC / Gammaxene / Lindane)</b>.<br/>Acts as an agricultural insecticide.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain the oxidation of Alkenes with acidic KMnO4 at elevated temperature.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hot, acidified KMnO<sub>4</sub> causes oxidative cleavage of the double bond:<br/>- =CH<sub>2</sub> terminal group oxidizes to CO<sub>2</sub> + H<sub>2</sub>O.<br/>- =CH-R group oxidizes to carboxylic acid R-COOH.<br/>- =C(R)<sub>2</sub> disubstituted group oxidizes to ketone R<sub>2</sub>C=O.<br/>Example: <b>(CH<sub>3</sub>)<sub>2</sub>C=CH-CH<sub>3</sub> + [O] &rarr; (CH<sub>3</sub>)<sub>2</sub>C=O (Acetone) + CH<sub>3</sub>COOH (Acetic acid)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain why 1-Butene and 2-Butene give different products on ozonolysis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ozonolysis cleaves the double bond completely:<br/>&bull; <b style="color: #29B6F6;">But-1-ene (CH<sub>3</sub>-CH<sub>2</sub>-CH=CH<sub>2</sub>):</b> Yields <b>Propanal (CH<sub>3</sub>CH<sub>2</sub>CHO) and Formaldehyde (HCHO)</b>.<br/>&bull; <b style="color: #29B6F6;">But-2-ene (CH<sub>3</sub>-CH=CH-CH<sub>3</sub>):</b> Yields two identical molecules of <b>Acetaldehyde (CH<sub>3</sub>CHO)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain the Action of heat on Calcium Carbide.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Industrial synthesis of ethyne: Limestone (CaCO<sub>3</sub>) is heated to CaO + CO<sub>2</sub>. Calcium oxide is reduced with coke in an electric arc furnace at 2273 K: <b>CaO + 3C &rarr; CaC<sub>2</sub> (Calcium carbide) + CO</b>.<br/>Hydrolysis of calcium carbide yields ethyne: <b>CaC<sub>2</sub> + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + HC&equiv;CH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain why Cyclooctatetraene is not aromatic even though it has alternating double bonds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cyclooctatetraene (C<sub>8</sub>H<sub>8</sub>) has 8 &pi;-electrons. If it were planar, it would have 4n &pi;-electrons (n=2) and be antiaromatic (thermodynamically unstable). To avoid this severe antiaromatic destabilization, the molecule puckers out of planarity into a non-planar <b>tub-shaped conformation</b>. Because p-orbitals cannot overlap continuously in a non-planar geometry, it behaves simply as a conjugated, non-aromatic polyene.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Arrange Ethane, Ethene, and Ethyne in order of increasing C-C bond length and bond strength.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bond Length: <b>Ethyne (120 pm) &lt; Ethene (134 pm) &lt; Ethane (154 pm)</b>.<br/>Bond Dissociation Energy: <b>Ethane (348 kJ/mol) &lt; Ethene (681 kJ/mol) &lt; Ethyne (823 kJ/mol)</b>.<br/>Triple bond has three electron pairs holding carbon nuclei closer together, making it the shortest and strongest bond.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain why Friedel-Crafts alkylation of Benzene with 1-Chloropropane yields Isopropylbenzene as the major product.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Generation of electrophile: CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-Cl + AlCl<sub>3</sub> &rarr; CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub><sup>+</sup> (Primary 1&deg; carbocation).<br/>The primary carbocation rapidly undergoes a <b>1,2-hydride shift</b> to form the much more stable secondary carbocation: <b>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub><sup>+</sup> &rarr; CH<sub>3</sub>-CH<sup>+</sup>-CH<sub>3</sub> (2&deg; Isopropyl carbocation)</b>.<br/>The isopropyl carbocation attacks benzene to yield <b>Cumene (Isopropylbenzene, 65-70%)</b> as the major product.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: How can you prepare pure n-Propylbenzene without rearrangement using Friedel-Crafts chemistry?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Use <b style="color: #29B6F6;">Friedel-Crafts Acylation</b> followed by Clemmensen or Wolff-Kishner reduction:<br/>1. Benzene + Propanoyl chloride (CH<sub>3</sub>CH<sub>2</sub>COCl) + AlCl<sub>3</sub> &rarr; <b>Propiophenone (C<sub>6</sub>H<sub>5</sub>COCH<sub>2</sub>CH<sub>3</sub>)</b>. (Acylium ion CH<sub>3</sub>CH<sub>2</sub>CO<sup>+</sup> does not rearrange).<br/>2. Clemmensen Reduction: Propiophenone + Zn-Hg / conc. HCl &rarr; <b>n-Propylbenzene (C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>)</b> in 100% linear yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Explain why Nitrobenzene does NOT undergo Friedel-Crafts reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The -NO<sub>2</sub> group is an extraordinarily strong <b>electron-withdrawing group (-R and -I)</b> that severely deactivates the benzene ring, making it insufficiently nucleophilic to attack carbocations. Furthermore, anhydrous AlCl<sub>3</sub> coordinates with the oxygen atoms of the -NO<sub>2</sub> group, completely neutralizing the Lewis acid catalyst.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain why Ethene reacts with Bromine in CCl4 via an anti-addition stereochemical pathway.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bromine electrophile (Br<sup>+</sup>) attacks the &pi;-bond, forming a cyclic <b>bromonium ion intermediate</b> (three-membered ring with positive charge on bromine) that blocks one face of the molecule. The nucleophilic bromide ion (Br<sup>-</sup>) is forced to perform a backside attack on the opposite face, opening the ring to produce strictly the <b>anti-addition product (trans-1,2-dibromoethane)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: What is the role of Anhydrous AlCl3 in Friedel-Crafts reactions?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Anhydrous AlCl<sub>3</sub> is an electron-deficient Lewis acid with a vacant p-orbital. It abstracts a halide ion (Cl<sup>-</sup>) from the alkyl/acyl halide to generate the powerful carbocation or acylium ion electrophile: <b>R-Cl + AlCl<sub>3</sub> &rarr; R<sup>+</sup> + AlCl<sub>4</sub><sup>-</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain the combustion of hydrocarbons and why compressed natural gas (CNG) is preferred over petrol.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Combustion: C<sub>n</sub>H<sub>2n+2</sub> + [(3n+1)/2]O<sub>2</sub> &rarr; n CO<sub>2</sub> + (n+1)H<sub>2</sub>O + Heat. CNG is primarily Methane (CH<sub>4</sub>), having the highest hydrogen-to-carbon ratio (4:1). It burns cleanly and completely to CO<sub>2</sub> and H<sub>2</sub>O without producing carbon monoxide (CO), unburnt hydrocarbons, sulfur oxides, or toxic lead/benzene particulates, making it eco-friendly.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: How does Benzene react with Ozone? Write the structure and hydrolysis products of the ozonide.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Benzene contains three conjugated double bonds. It adds three molecules of ozone to form a crystalline <b>Benzene Triozonide (C<sub>6</sub>H<sub>6</sub>O<sub>9</sub>)</b>.<br/>Hydrolysis with Zn dust and water cleaves the triozonide into <b>three molecules of Glyoxal (CHO-CHO)</b>: <b>C<sub>6</sub>H<sub>6</sub>O<sub>9</sub> + 3Zn + 3H<sub>2</sub>O &rarr; 3 CHO-CHO + 3Zn(OH)<sub>2</sub></b>. Confirms Kekulé's alternating structure.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain why boiling points of isomeric alkanes decrease with branching.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Intermolecular attractions in non-polar alkanes are London dispersion forces, which depend directly on molecular surface area. Linear unbranched alkanes have extended zigzag chains with large surface contact areas. Branching makes the molecule compact and spherical, minimizing surface area of contact. Weaker dispersion forces lower the boiling point (e.g., n-pentane b.p. 36&deg;C vs neopentane b.p. 9.5&deg;C).
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(41, 182, 246, 0.15), rgba(2, 136, 209, 0.15)); border: 1.5px solid rgba(41, 182, 246, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #29B6F6; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Complete Ethane Conformations, Detailed SEAr Mechanisms &amp; Master Hydrocarbon Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss the Conformations of Ethane in complete depth: Newman and Sawhorse Projections, Torsional Strain, Energy Profile Diagram, and Relative Stabilities.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Principles:</b> Free rotation about the C-C &sigma;-bond produces infinite spatial arrangements called conformers.<br/><br/><b style="color: #29B6F6;">2. Extreme Conformations:</b><br/>&bull; <i>Staggered (&theta; = 60&deg;):</i> Hydrogen atoms on adjacent carbons are situated at maximum distance. Zero torsional strain; minimum electronic repulsion. Most stable conformation (energy minimum).<br/>&bull; <i>Eclipsed (&theta; = 0&deg;):</i> Hydrogens on adjacent carbons directly align. Bonding electron pairs repel maximally, generating <b>12.5 kJ/mol (3.0 kcal/mol) of torsional strain</b>. Least stable conformation (energy maximum).<br/>&bull; <i>Skew:</i> All intermediate conformations (0&deg; &lt; &theta; &lt; 60&deg;).<br/><br/><b style="color: #29B6F6;">3. Energy Profile:</b> Displays three identical energy maxima (eclipsed) and minima (staggered) per 360&deg; rotation. At room temperature, thermal collisions (~2.5 kJ/mol) provide sufficient kinetic energy to overcome the 12.5 kJ/mol barrier, rendering conformers rapidly interconvertible and non-separable.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Discuss the Preparation of Alkanes: Detailed Reaction Conditions, Mechanisms, and Limitations of Wurtz, Kolbe Electrolytic, and Decarboxylation Methods.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Wurtz Reaction:</b> 2 R-X + 2 Na &rarr; R-R + 2 NaX (dry ether). Free radical and organometallic (RNa) mechanisms. Limited to symmetrical alkanes with even carbon numbers; fails for methane; tertiary halides undergo dehydrohalogenation to alkenes.<br/><br/><b style="color: #29B6F6;">2. Kolbe's Electrolytic Method:</b> Electrolysis of concentrated sodium carboxylate.<br/>&bull; Anode: 2RCOO<sup>-</sup> &rarr; 2RCOO<sup>&bull;</sup> + 2e<sup>-</sup> &rarr; 2R<sup>&bull;</sup> + 2CO<sub>2</sub> &rarr; <b>R-R</b>.<br/>&bull; Cathode: 2H<sub>2</sub>O + 2e<sup>-</sup> &rarr; <b>H<sub>2</sub> + 2OH<sup>-</sup></b>.<br/>Cannot prepare methane; produces minor alkene/ester byproducts.<br/><br/><b style="color: #29B6F6;">3. Decarboxylation (Soda-Lime):</b> R-COONa + NaOH &rarr; <b>R-H + Na<sub>2</sub>CO<sub>3</sub></b> (&Delta;, 630 K). Shortens carbon chain by 1 unit; CaO keeps NaOH dry and prevents glass fusion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Explain the Mechanism of Electrophilic Addition of Alkenes: Markownikoff's Rule, Carbocation Stabilities, and the Free-Radical Peroxide (Kharasch) Effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Markownikoff Ionic Addition:</b><br/>&bull; Step 1: &pi;-electrons attack electrophile H<sup>+</sup>, forming the more stable carbocation (3&deg; &gt; 2&deg; &gt; 1&deg; due to hyperconjugation).<br/>&bull; Step 2: Halide nucleophile X<sup>-</sup> attacks the carbocation.<br/>In propene, addition of H<sup>+</sup> gives 2&deg; carbocation CH<sub>3</sub>CH<sup>+</sup>CH<sub>3</sub> rather than 1&deg; carbocation, leading to 2-bromopropane.<br/><br/><b style="color: #29B6F6;">2. Peroxide Effect (Free Radical Addition):</b><br/>&bull; Initiation: Peroxide &rarr; 2RO<sup>&bull;</sup>; RO<sup>&bull;</sup> + HBr &rarr; ROH + Br<sup>&bull;</sup>.<br/>&bull; Propagation: Br<sup>&bull;</sup> adds to terminal CH<sub>2</sub> to form the more stable 2&deg; free radical CH<sub>3</sub>CH<sup>&bull;</sup>CH<sub>2</sub>Br. This radical abstracts H from HBr to yield <b>1-bromopropane</b>.<br/>&bull; Thermodynamic Specificity: Only for HBr are both propagation steps exothermic (&Delta;H &lt; 0). For HCl, H-Cl bond cleavage is endothermic; for HI, I-I combination is favored over addition.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss Ozonolysis of Alkenes in comprehensive depth: Mechanism of Ozonide Formation, Reductive Cleavage, and Structural Determination of Unknown Alkenes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Mechanism:</b> Alkene reacts with ozone (1,3-dipolar cycloaddition) to form an initial molozonide, which rearranges into a stable cyclic <b>ozonide</b>.<br/>Reductive cleavage with Zn dust and H<sub>2</sub>O hydrolyzes the ozonide into carbonyl compounds: <b>&gt;C=C&lt; + O<sub>3</sub> &rarr; Ozonide &rarr; &gt;C=O + O=C&lt; + ZnO + H<sub>2</sub>O</b>. (Zn prevents H<sub>2</sub>O<sub>2</sub> from oxidizing aldehydes to carboxylic acids).<br/><br/><b style="color: #29B6F6;">2. Analytical Deduction:</b> Identifies double bond location by rejoining carbonyl carbons:<br/>&bull; Ethene &rarr; 2 HCHO.<br/>&bull; Propene &rarr; CH<sub>3</sub>CHO + HCHO.<br/>&bull; 2-Methylbut-2-ene &rarr; Acetone + Acetaldehyde.<br/>&bull; Cyclohexene &rarr; Hexanedial (OHC-(CH<sub>2</sub>)<sub>4</sub>-CHO).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Explain the Acidity of Terminal Alkynes: Hybridization Basis, Chemical Reactions, Formation of Metal Acetylides, and Industrial Separation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Electronic Basis:</b> Carbon in alkynes is sp hybridized (50% s-character). High s-character brings electrons closer to nucleus, maximizing electronegativity. Polarizes C-H bond and stabilizes conjugate acetylide anion (R-C&equiv;C<sup>-</sup>). Acidity: <b>Ethyne &gt; Ethene &gt; Ethane</b>.<br/><br/><b style="color: #29B6F6;">2. Chemical Proofs:</b><br/>&bull; 2HC&equiv;CH + 2Na &rarr; 2HC&equiv;C<sup>-</sup>Na<sup>+</sup> + H<sub>2(g)</sub>.<br/>&bull; HC&equiv;CH + NaNH<sub>2</sub> &rarr; HC&equiv;C<sup>-</sup>Na<sup>+</sup> + NH<sub>3</sub>.<br/>&bull; Tollen's Test: HC&equiv;CH + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]OH &rarr; <b>Ag-C&equiv;C-Ag&darr; (White ppt)</b>.<br/>&bull; Ammoniacal Cu<sub>2</sub>Cl<sub>2</sub>: HC&equiv;CH + 2[Cu(NH<sub>3</sub>)<sub>2</sub>]Cl &rarr; <b>Cu-C&equiv;C-Cu&darr; (Red ppt)</b>.<br/><br/><b style="color: #29B6F6;">3. Industrial Separation:</b> Mixtures of alkynes and alkenes are separated by precipitating terminal alkynes as silver/copper acetylides, filtering, and regenerating pure alkyne with dilute mineral acid: Ag-C&equiv;C-Ag + 2HNO<sub>3</sub> &rarr; HC&equiv;CH + 2AgNO<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss the Structure and Aromaticity of Benzene: Kekulé Model, Resonance Theory, Molecular Orbital Picture, and Thermodynamic Resonance Energy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Kekulé Model &amp; Limitations:</b> Proposed oscillating cyclohexatriene structure. Failed to explain why benzene does not decolorize bromine water or KMnO<sub>4</sub>, and why all C-C bonds are equal.<br/><br/><b style="color: #29B6F6;">2. Resonance Theory:</b> Benzene is a resonance hybrid of two equivalent Kekulé structures and three Dewar structures. All six C-C bonds are identical at <b>139 pm</b> (intermediate between 154 pm single and 134 pm double bond). Resonance energy = <b>150.6 kJ/mol (36 kcal/mol)</b>.<br/><br/><b style="color: #29B6F6;">3. Molecular Orbital Representation:</b> Six sp<sup>2</sup> carbons form a planar hexagonal &sigma;-skeleton. Six unhybridized 2p<sub>z</sub> orbitals overlap sideways to form three bonding &pi;-molecular orbitals (&psi;<sub>1</sub>, &psi;<sub>2</sub>, &psi;<sub>3</sub>) completely occupied by 6 &pi;-electrons, creating two continuous doughnut-shaped delocalized &pi;-electron rings.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Detail the Complete Mechanism of Electrophilic Aromatic Substitution (SEAr) on Benzene for: Nitration, Halogenation, Sulphonation, and Friedel-Crafts Reactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Nitration:</b><br/>&bull; Electrophile: HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> &rarr; NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>-</sup>.<br/>&bull; Arenium ion: NO<sub>2</sub><sup>+</sup> attacks benzene &rarr; &sigma;-complex.<br/>&bull; Deprotonation: HSO<sub>4</sub><sup>-</sup> removes proton &rarr; <b>Nitrobenzene</b>.<br/><br/><b style="color: #29B6F6;">2. Halogenation:</b> Cl<sub>2</sub> + AlCl<sub>3</sub> &rarr; Cl<sup>+</sup> + AlCl<sub>4</sub><sup>-</sup> &rarr; &sigma;-complex &rarr; <b>Chlorobenzene</b>.<br/><br/><b style="color: #29B6F6;">3. Sulphonation:</b> 2H<sub>2</sub>SO<sub>4</sub> &hArr; SO<sub>3</sub> + H<sub>3</sub>O<sup>+</sup> + HSO<sub>4</sub><sup>-</sup> &rarr; attack of neutral SO<sub>3</sub> electrophile &rarr; proton transfer &rarr; <b>Benzenesulphonic acid</b>.<br/><br/><b style="color: #29B6F6;">4. Friedel-Crafts Alkylation &amp; Acylation:</b><br/>&bull; CH<sub>3</sub>Cl + AlCl<sub>3</sub> &rarr; CH<sub>3</sub><sup>+</sup> &rarr; <b>Toluene</b>.<br/>&bull; CH<sub>3</sub>COCl + AlCl<sub>3</sub> &rarr; CH<sub>3</sub>CO<sup>+</sup> &rarr; <b>Acetophenone</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Explain the Directive Influence of Substituents on Benzene: Complete Resonance Analysis of Ortho/Para Activators and Meta Deactivators.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. Ortho/Para Activators (-OH, -NH<sub>2</sub>, -CH<sub>3</sub>):</b><br/>+R resonance delocalization places negative formal charges on ortho and para positions of the ring. Attack of electrophile at ortho or para produces an especially stable canonical contributor with complete octets on all atoms (oxonium/imminium form). Attack at meta cannot involve the substituent's lone pair, making meta pathway much higher in energy.<br/><br/><b>2. Meta Deactivators (-NO<sub>2</sub>, -CN, -COOH):</b><br/>-R and -I effects pull electron density out of the ring. Ortho and para attacks produce a canonical structure where positive charge is placed directly on the carbon bearing the positively polarized substituent, causing severe electrostatic repulsion. Meta attack avoids this highly unstable contributor, so substitution occurs at meta.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Discuss the Industrial Chemistry of Alkanes and Alkenes: Catalytic Cracking, Reforming (Aromatization), and Polymerization to Plastics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Catalytic Cracking:</b> Thermal/catalytic cleavage of high-boiling heavy petroleum fractions into lighter gasoline fractions using zeolite catalysts at 773 K.<br/><br/><b style="color: #29B6F6;">2. Catalytic Reforming (Aromatization):</b> Straight-chain alkanes with 6-8 carbons are passed over Cr<sub>2</sub>O<sub>3</sub>-Mo<sub>2</sub>O<sub>3</sub> on Al<sub>2</sub>O<sub>3</sub> at 773 K and 10-20 atm to undergo dehydrogenation and cyclization: n-Hexane &rarr; <b>Benzene</b>; n-Heptane &rarr; <b>Toluene</b>.<br/><br/><b style="color: #29B6F6;">3. Polymerization:</b><br/>&bull; Ethene under high pressure (1000-2000 atm) and 473 K gives <b>Low Density Polyethylene (LDPE)</b>.<br/>&bull; Ethene with Ziegler-Natta catalyst [TiCl<sub>4</sub> + Al(C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>] gives <b>High Density Polyethylene (HDPE)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Explain the Physical Properties of Alkanes, Alkenes, and Alkynes: Boiling Points, Melting Points, Densities, and Solubilities based on Intermolecular Forces.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Boiling Points:</b> Increase smoothly with molecular weight (~20-30 K per -CH<sub>2</sub>- group) due to increasing molecular surface area and London dispersion forces. Branching lowers boiling points (spherical shape decreases surface contact). Alkyne &gt; Alkene &gt; Alkane for same carbon number (dipoles in terminal alkynes).<br/><br/><b style="color: #29B6F6;">2. Melting Points:</b> Depend on crystal lattice symmetry. Alkanes with even number of carbons pack more tightly, exhibiting higher melting points than adjacent odd-carbon alkanes (alternation effect). trans-Alkenes melt higher than cis-alkenes.<br/><br/><b style="color: #29B6F6;">3. Density &amp; Solubility:</b> Densities are &lt; 1.0 g/cm<sup>3</sup> (all hydrocarbons float on water). Insoluble in polar water due to inability to form hydrogen bonds; completely miscible in non-polar organic solvents (benzene, ether, CCl<sub>4</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Discuss the Chemistry of Geometrical Isomerism: Dipole Moments, Boiling Points, Melting Points, and Interconversion of cis and trans Isomers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Criterion:</b> Restricted rotation about C=C bond where both carbons bear different groups (abC=Cab).<br/><br/><b style="color: #29B6F6;">2. Physical Properties Comparison:</b><br/>&bull; <i>Dipole Moment:</i> cis-Isomer has vector sum &mu; &gt; 0; trans-isomer dipoles cancel (&mu; &approx; 0).<br/>&bull; <i>Boiling Point:</i> cis &gt; trans (stronger dipole-dipole attractions in cis).<br/>&bull; <i>Melting Point:</i> trans &gt; cis (trans isomer is symmetrical, packing tightly into crystal lattice).<br/>&bull; <i>Stability:</i> trans &gt; cis (steric repulsion between bulky groups on same side destabilizes cis).<br/><br/><b style="color: #29B6F6;">3. Interconversion:</b> Achieved by irradiation with UV light or heating to ~500 K, which breaks the &pi;-bond, allowing free rotation before reforming the thermodynamically favored trans isomer.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Explain the Preparation and Industrial Chemistry of Ethyne: Electric Arc Synthesis, Dehydrohalogenation, and Modern Acetylene Chemicals.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Synthesis:</b><br/>&bull; Hydrolysis of Calcium Carbide: CaC<sub>2</sub> + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + HC&equiv;CH.<br/>&bull; Methane Partial Oxidation: 2CH<sub>4</sub> + <sup>3</sup>/<sub>2</sub> O<sub>2</sub> &rarr; HC&equiv;CH + 3H<sub>2</sub>O (1773 K, electric arc).<br/><br/><b style="color: #29B6F6;">2. Industrial Applications:</b><br/>&bull; <i>Oxy-acetylene Flame:</i> Ethyne burns in pure O<sub>2</sub> at ~3300&deg;C, used for cutting and welding metals.<br/>&bull; <i>Vinyl Polymers:</i> Addition of HCl yields vinyl chloride (CH<sub>2</sub>=CHCl) for PVC plastics; addition of acetic acid yields vinyl acetate.<br/>&bull; <i>Chlorinated Solvents:</i> Addition of Cl<sub>2</sub> gives Westron (CHCl<sub>2</sub>-CHCl<sub>2</sub>) and Westrosol (CHCl=CCl<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Discuss the Combustion, Incomplete Combustion, Controlled Oxidation, and Isomerization Reactions of Alkanes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Complete Combustion:</b> C<sub>n</sub>H<sub>2n+2</sub> + [(3n+1)/2]O<sub>2</sub> &rarr; n CO<sub>2</sub> + (n+1)H<sub>2</sub>O + &Delta;H (Fuel energy).<br/><b style="color: #29B6F6;">2. Incomplete Combustion:</b> 2CH<sub>4</sub> + 3O<sub>2</sub> &rarr; 2CO + 4H<sub>2</sub>O; CH<sub>4</sub> + O<sub>2</sub> &rarr; C (Carbon black) + 2H<sub>2</sub>O. (Carbon black used in printer inks and automobile tyres).<br/><b style="color: #29B6F6;">3. Controlled Catalytic Oxidation:</b><br/>&bull; 2CH<sub>4</sub> + O<sub>2</sub> &rarr; 2CH<sub>3</sub>OH (Cu tube, 523 K, 100 atm).<br/>&bull; CH<sub>4</sub> + O<sub>2</sub> &rarr; HCHO + H<sub>2</sub>O (Mo<sub>2</sub>O<sub>3</sub> catalyst, &Delta;).<br/>&bull; 2(CH<sub>3</sub>)<sub>3</sub>CH + O<sub>2</sub> &rarr; 2(CH<sub>3</sub>)<sub>3</sub>C-OH (KMnO<sub>4</sub> oxidizes 3&deg; hydrogen to alcohol).<br/><b style="color: #29B6F6;">4. Isomerization:</b> Straight-chain alkanes heated with anhydrous AlCl<sub>3</sub> and HCl gas at 573 K isomerize to branched alkanes (n-butane &rarr; isobutane; increases octane rating).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the Addition Reactions of Alkenes with: (a) Hydrogen, (b) Halogens, (c) Water, (d) Sulfuric acid, with complete mechanisms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Hydrogenation:</b> Syn-addition of H<sub>2</sub> over metal catalyst (Ni, Pt, Pd).<br/><b style="color: #29B6F6;">2. Halogenation:</b> Anti-addition of Br<sub>2</sub> in CCl<sub>4</sub> via cyclic bromonium ion to give vicinal dibromides (decolorizes orange-red bromine water).<br/><b style="color: #29B6F6;">3. Hydration (Acid-Catalyzed):</b> Alkene + H<sub>2</sub>O + H<sub>2</sub>SO<sub>4</sub> &rarr; Alcohol. Follows Markownikoff's rule via carbocation intermediate.<br/><b>4. Addition of H<sub>2</sub>SO<sub>4</sub>:</b> Alkene dissolves in cold conc. H<sub>2</sub>SO<sub>4</sub> to form alkyl hydrogen sulfates: CH<sub>2</sub>=CH<sub>2</sub> + HOSO<sub>2</sub>OH &rarr; CH<sub>3</sub>CH<sub>2</sub>OSO<sub>2</sub>OH. On boiling with water, hydrolyzes to ethanol: CH<sub>3</sub>CH<sub>2</sub>OH + H<sub>2</sub>SO<sub>4</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain the Addition Reactions of Alkynes: Addition of Dihydrogen, Halogens, Hydrogen Halides, and Water with mechanisms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because alkynes possess two &pi;-bonds, addition occurs in two successive stages:<br/>1. <b style="color: #29B6F6;">Dihydrogen:</b> HC&equiv;CH + H<sub>2</sub> &rarr; CH<sub>2</sub>=CH<sub>2</sub> &rarr; (+ H<sub>2</sub>) &rarr; CH<sub>3</sub>-CH<sub>3</sub>.<br/>2. <b style="color: #29B6F6;">Halogens:</b> HC&equiv;CH + Br<sub>2</sub> &rarr; CH(Br)=CH(Br) (1,2-Dibromoethene) &rarr; (+ Br<sub>2</sub>) &rarr; CHBr<sub>2</sub>-CHBr<sub>2</sub> (1,1,2,2-Tetrabromoethane). Decolorizes bromine.<br/>3. <b style="color: #29B6F6;">Hydrogen Halides:</b> HC&equiv;CH + HBr &rarr; CH<sub>2</sub>=CHBr (Vinyl bromide) &rarr; (+ HBr, Markownikoff) &rarr; <b>CH<sub>3</sub>-CHBr<sub>2</sub> (Geminal dibromide, 1,1-Dibromoethane)</b>.<br/>4. <b style="color: #29B6F6;">Water (Kucherov):</b> Adds H<sub>2</sub>O across triple bond; intermediate enol tautomerizes to carbonyl.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Discuss the Birch Reduction of Alkynes and Aromatic Compounds: Mechanism, Reagents, and Stereochemical Outcome.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Birch Reduction of Alkynes:</b> Reduction with Sodium or Lithium in liquid ammonia in presence of an alcohol (EtOH) donor: <b>R-C&equiv;C-R + 2Na + 2NH<sub>3</sub> &rarr; trans-Alkene + 2NaNH<sub>2</sub></b>.<br/>&bull; Mechanism: Electron transfer from Na to alkyne &pi;* orbital forms a radical anion. Protonation by NH<sub>3</sub>/EtOH gives a vinyl radical, which adopts the more stable <b>trans-conformation</b> (minimizing steric and electronic repulsion). A second electron transfer and protonation locks the product strictly into the <b>trans-alkene</b>.<br/><br/><b style="color: #29B6F6;">2. Birch Reduction of Benzene:</b> Benzene treated with Na in liquid NH<sub>3</sub>/EtOH reduces to <b>Cyclohexa-1,4-diene</b> (non-conjugated diene).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the Electrophilic Addition of Halogens to Dienes: 1,2-Addition vs 1,4-Addition (Kinetic vs Thermodynamic Control).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In conjugated dienes (Buta-1,3-diene CH<sub>2</sub>=CH-CH=CH<sub>2</sub> + HBr):<br/>Electrophilic protonation yields an <b>allylic carbocation</b> resonance hybrid: [CH<sub>3</sub>-CH<sup>+</sup>-CH=CH<sub>2</sub> &hArr; CH<sub>3</sub>-CH=CH-CH<sub>2</sub><sup>+</sup>].<br/>1. <b style="color: #29B6F6;">1,2-Addition Product (3-Bromobut-1-ene):</b> Formed by attack at C2. Has lower activation energy (formed faster). Predominates at low temperatures (193 K / -80&deg;C) &rArr; <b>Kinetic Product</b>.<br/>2. <b style="color: #29B6F6;">1,4-Addition Product (1-Bromobut-2-ene):</b> Formed by attack at C4. Alkene is more substituted and thermodynamically more stable. Predominates at higher temperatures (313 K / 40&deg;C) and equilibrium &rArr; <b>Thermodynamic Product</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the Structure, Reactivity, and Industrial Uses of Toluene (Methylbenzene).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Structure &amp; Reactivity:</b> Methyl group (-CH<sub>3</sub>) exerts +I and hyperconjugative electron release into the benzene ring, activating the ring and directing electrophilic substitution to <b>ortho and para positions</b>.<br/>&bull; Nitration: Yields o-nitrotoluene and p-nitrotoluene; vigorous nitration gives <b>2,4,6-Trinitrotoluene (TNT, High explosive)</b>.<br/>&bull; Side-Chain Chlorination: Cl<sub>2</sub> in UV light attacks methyl group via free radicals: C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl (Benzyl chloride) &rarr; C<sub>6</sub>H<sub>5</sub>CHCl<sub>2</sub> (Benzal chloride) &rarr; C<sub>6</sub>H<sub>5</sub>CCl<sub>3</sub> (Benzotrichloride).<br/>&bull; Side-Chain Oxidation: Alkaline KMnO<sub>4</sub> oxidizes the entire alkyl side chain quantitatively to <b>Benzoic acid (C<sub>6</sub>H<sub>5</sub>COOH)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the Environmental Impact and Toxicity of Hydrocarbons: Photochemical Smog, Greenhouse Warming, and Oil Spills.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Photochemical Smog:</b> Unburnt hydrocarbons from automobile exhausts react with nitrogen oxides (NO<sub>x</sub>) in sunlight to generate ozone (O<sub>3</sub>), Peroxyacetyl nitrate (PAN), and aldehydes, causing severe respiratory distress and eye irritation.<br/><b style="color: #29B6F6;">2. Greenhouse Warming:</b> Methane (CH<sub>4</sub>) has a global warming potential ~28 times greater than CO<sub>2</sub> over 100 years, heavily driving climate change.<br/><b style="color: #29B6F6;">3. Ocean Oil Spills:</b> Crude petroleum spills create impenetrable surface slicks that block atmospheric oxygen exchange and sunlight penetration, killing marine phytoplankton, fish, and birds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #29B6F6; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an exhaustive Master Synthesis Matrix correlating Alkanes, Alkenes, Alkynes, and Aromatic Hydrocarbons.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #29B6F6;">1. Saturated Alkanes:</b> sp<sup>3</sup> tetrahedral; free rotation (staggered vs eclipsed); prepared via Wurtz, Kolbe, decarboxylation; react via free radical substitution.<br/><br/><b style="color: #29B6F6;">2. Unsaturated Alkenes:</b> sp<sup>2</sup> planar; restricted rotation (cis/trans geometrical isomerism); prepared by Saytzeff elimination; react via electrophilic addition (Markownikoff rule, peroxide effect) and ozonolysis.<br/><br/><b style="color: #29B6F6;">3. Unsaturated Alkynes:</b> sp linear; acidic terminal C-H (NaNH<sub>2</sub>, Tollen's Ag ppt); hydration to carbonyls (Kucherov); cyclic trimerization to benzene.<br/><br/><b style="color: #29B6F6;">4. Aromatic Benzene:</b> Planar hexagonal (4n+2 Hückel aromatic sextet); exceptional resonance stability (150.6 kJ/mol); reacts via electrophilic aromatic substitution (SEAr: nitration, Friedel-Crafts) preserving aromaticity.<br/><br/><b style="color: #29B6F6;">5. Regiochemistry:</b> Ortho/para activating groups (+R, hyperconjugation) vs Meta deactivating groups (-R, -I).
    </div>
  </div>

</div>
`;

export const c11Chem9Mcqs = [
  {
    "id": "c11-chem-9-mcq-1",
    "question": "Which conformation of Ethane is thermodynamically the most stable?",
    "options": [
      "A):   Eclipsed conformation",
      "B):   Staggered conformation",
      "C):   Skew conformation",
      "D):   All have identical stability"
    ],
    "correctAnswer": "b",
    "explanation": "In the staggered conformation, the dihedral angle is 60&deg;, maximizing distance between C-H bonds and minimizing torsional strain."
  },
  {
    "id": "c11-chem-9-mcq-2",
    "question": "The magnitude of the torsional strain barrier in Ethane is approximately:",
    "options": [
      "A):   25.0 kJ/mol",
      "B):   12.5 kJ/mol",
      "C):   50.0 kJ/mol",
      "D):   0 kJ/mol"
    ],
    "correctAnswer": "b",
    "explanation": "The energy difference between staggered and eclipsed conformations of ethane is ~12.5 kJ/mol (3.0 kcal/mol)."
  },
  {
    "id": "c11-chem-9-mcq-3",
    "question": "Which of the following alkanes CANNOT be prepared by the Wurtz reaction?",
    "options": [
      "A):   Ethane",
      "B):   Methane",
      "C):   Butane",
      "D):   Hexane"
    ],
    "correctAnswer": "b",
    "explanation": "Wurtz reaction involves coupling of two alkyl radicals (2R-X &rarr; R-R); methane has only one carbon and cannot be synthesized this way."
  },
  {
    "id": "c11-chem-9-mcq-4",
    "question": "In Kolbe's electrolytic synthesis, ethane gas is liberated at the:",
    "options": [
      "A):   Cathode",
      "B):   Anode",
      "C):   Both electrodes",
      "D):   Does not liberate gas"
    ],
    "correctAnswer": "b",
    "explanation": "Acetate ions lose electrons at the anode to form acetate radicals, which decarboxylate and dimerize into ethane: 2CH<sub>3</sub>COO<sup>-</sup> &rarr; C<sub>2</sub>H<sub>6</sub> + 2CO<sub>2</sub> + 2e<sup>-</sup>."
  },
  {
    "id": "c11-chem-9-mcq-5",
    "question": "Which of the following alkenes can exhibit Geometrical (cis-trans) Isomerism?",
    "options": [
      "A):   Ethene",
      "B):   Propene",
      "C):   But-1-ene",
      "D):   But-2-ene"
    ],
    "correctAnswer": "d",
    "explanation": "In But-2-ene (CH<sub>3</sub>-CH=CH-CH<sub>3</sub>), both double-bonded carbons hold two distinct groups (-H and -CH<sub>3</sub>), allowing cis and trans forms."
  },
  {
    "id": "c11-chem-9-mcq-6",
    "question": "Why does trans-But-2-ene have a higher melting point than cis-But-2-ene?",
    "options": [
      "A):   trans-Isomer has higher dipole moment",
      "B):   trans-Isomer has greater molecular symmetry and packs better in crystal lattice",
      "C):   cis-Isomer is non-polar",
      "D):   trans-Isomer has weaker intermolecular forces"
    ],
    "correctAnswer": "b",
    "explanation": "The symmetrical trans geometry allows tighter, more efficient crystal packing, requiring more thermal energy to melt."
  },
  {
    "id": "c11-chem-9-mcq-7",
    "question": "Reduction of an alkyne with Lindlar's catalyst (Pd/CaCO<sub>3</sub> + quinoline) yields:",
    "options": [
      "A):   trans-Alkene",
      "B):   cis-Alkene",
      "C):   Alkane",
      "D):   Polymer"
    ],
    "correctAnswer": "b",
    "explanation": "Lindlar's catalyst causes stereoselective syn-addition of hydrogen, producing the cis-alkene."
  },
  {
    "id": "c11-chem-9-mcq-8",
    "question": "Addition of HBr to Propene in the absence of peroxides yields 2-Bromopropane according to:",
    "options": [
      "A):   Saytzeff's rule",
      "B):   Hückel's rule",
      "C):   Markownikoff's rule",
      "D):   Kharasch effect"
    ],
    "correctAnswer": "c",
    "explanation": "Markownikoff's rule dictates that the electrophilic H<sup>+</sup> attaches to CH<sub>2</sub> to form the more stable secondary carbocation, giving 2-bromopropane."
  },
  {
    "id": "c11-chem-9-mcq-9",
    "question": "The Peroxide Effect (Anti-Markownikoff addition) is observed ONLY with:",
    "options": [
      "A):   HF",
      "B):   HCl",
      "C):   HBr",
      "D):   HI"
    ],
    "correctAnswer": "c",
    "explanation": "Only for HBr are both propagation steps in the free-radical chain mechanism thermodynamically exothermic."
  },
  {
    "id": "c11-chem-9-mcq-10",
    "question": "Ozonolysis of an alkene produces two molecules of Acetone ((CH<sub>3</sub>)<sub>2</sub>C=O). The alkene is:",
    "options": [
      "A):   2,3-Dimethylbut-2-ene",
      "B):   2-Methylbut-2-ene",
      "C):   But-2-ene",
      "D):   Hex-3-ene"
    ],
    "correctAnswer": "a",
    "explanation": "Joining two acetone units at the carbonyl carbons: (CH<sub>3</sub>)<sub>2</sub>C = C(CH<sub>3</sub>)<sub>2</sub> (2,3-Dimethylbut-2-ene)."
  },
  {
    "id": "c11-chem-9-mcq-11",
    "question": "Which of the following alkynes has acidic hydrogen atoms?",
    "options": [
      "A):   But-2-yne",
      "B):   Pent-2-yne",
      "C):   But-1-yne",
      "D):   Hex-3-yne"
    ],
    "correctAnswer": "c",
    "explanation": "But-1-yne is a terminal alkyne (CH<sub>3</sub>CH<sub>2</sub>-C&equiv;C-H) containing an acidic sp C-H bond."
  },
  {
    "id": "c11-chem-9-mcq-12",
    "question": "When Ethyne is passed into ammoniacal Silver Nitrate (Tollen's reagent), the precipitate formed is:",
    "options": [
      "A):   Red precipitate of Cu<sub>2</sub>C<sub>2</sub>",
      "B):   White precipitate of Ag<sub>2</sub>C<sub>2</sub>",
      "C):   Black precipitate of Ag",
      "D):   Yellow precipitate of AgI"
    ],
    "correctAnswer": "b",
    "explanation": "Ethyne reacts with Tollen's reagent to precipitate white disilver acetylide (Ag-C&equiv;C-Ag)."
  },
  {
    "id": "c11-chem-9-mcq-13",
    "question": "Hydration of Ethyne in presence of 40% H<sub>2</sub>SO<sub>4</sub> and 1% HgSO<sub>4</sub> at 333 K yields:",
    "options": [
      "A):   Ethanol",
      "B):   Acetaldehyde (Ethanal)",
      "C):   Acetic acid",
      "D):   Acetone"
    ],
    "correctAnswer": "b",
    "explanation": "Hydration gives unstable vinyl alcohol (CH<sub>2</sub>=CH-OH) which rapidly tautomerizes into acetaldehyde (CH<sub>3</sub>CHO)."
  },
  {
    "id": "c11-chem-9-mcq-14",
    "question": "When Ethyne is passed through a red-hot iron tube at 873 K, the product formed is:",
    "options": [
      "A):   Ethene",
      "B):   Benzene",
      "C):   Cyclohexane",
      "D):   Toluene"
    ],
    "correctAnswer": "b",
    "explanation": "Three molecules of ethyne undergo cyclic trimerization to yield Benzene: 3 HC&equiv;CH &rarr; C<sub>6</sub>H<sub>6</sub>."
  },
  {
    "id": "c11-chem-9-mcq-15",
    "question": "What is the resonance stabilization energy of Benzene?",
    "options": [
      "A):   50 kJ/mol",
      "B):   150.6 kJ/mol",
      "C):   300 kJ/mol",
      "D):   0 kJ/mol"
    ],
    "correctAnswer": "b",
    "explanation": "Benzene has a resonance energy of 150.6 kJ/mol (36 kcal/mol), accounting for its exceptional chemical stability."
  },
  {
    "id": "c11-chem-9-mcq-16",
    "question": "According to Hückel's rule, an aromatic planar cyclic system must contain:",
    "options": [
      "A):   4n &pi;-electrons",
      "B):   (4n + 2) &pi;-electrons",
      "C):   (2n + 2) &pi;-electrons",
      "D):   2n &pi;-electrons"
    ],
    "correctAnswer": "b",
    "explanation": "Hückel's aromaticity criterion requires (4n + 2) delocalized &pi;-electrons (n = 0, 1, 2, 3...)."
  },
  {
    "id": "c11-chem-9-mcq-17",
    "question": "What is the active electrophile in the Nitration of Benzene?",
    "options": [
      "A):   NO<sub>2</sub><sup>-</sup>",
      "B):   NO<sub>2</sub><sup>+</sup> (Nitronium ion)",
      "C):   NO<sup>+</sup>",
      "D):   HNO<sub>3</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "Nitration generates the linear nitronium ion: HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> &rarr; NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>-</sup>."
  },
  {
    "id": "c11-chem-9-mcq-18",
    "question": "In Friedel-Crafts alkylation of Benzene, the role of anhydrous AlCl<sub>3</sub> is to:",
    "options": [
      "A):   Absorb water",
      "B):   Act as a Lewis acid to generate the carbocation electrophile",
      "C):   Act as a reducing agent",
      "D):   Oxidize benzene"
    ],
    "correctAnswer": "b",
    "explanation": "AlCl<sub>3</sub> is a Lewis acid that abstracts chloride from R-Cl to generate the carbocation: R-Cl + AlCl<sub>3</sub> &rarr; R<sup>+</sup> + AlCl<sub>4</sub><sup>-</sup>."
  },
  {
    "id": "c11-chem-9-mcq-19",
    "question": "Which of the following substituents on Benzene is Meta-directing and Deactivating?",
    "options": [
      "A):   -OH",
      "B):   -NH<sub>2</sub>",
      "C):   -NO<sub>2</sub>",
      "D):   -CH<sub>3</sub>"
    ],
    "correctAnswer": "c",
    "explanation": "The -NO<sub>2</sub> group exerts powerful -R and -I electron-withdrawing effects, deactivating the ring and directing substitution to meta."
  },
  {
    "id": "c11-chem-9-mcq-20",
    "question": "Although Chlorine is electron-withdrawing (-I), it directs incoming electrophiles to Ortho and Para positions because of:",
    "options": [
      "A):   Hyperconjugation",
      "B):   +R (Resonance) donation of its lone pairs",
      "C):   Steric hindrance",
      "D):   Inductive effect"
    ],
    "correctAnswer": "b",
    "explanation": "Chlorine donates its unshared 3p lone pair into the &pi;-system (+R effect), selectively stabilizing the arenium intermediate at ortho/para positions."
  },
  {
    "id": "c11-chem-9-mcq-21",
    "question": "What is the product when Benzene is treated with excess Chlorine in presence of UV light?",
    "options": [
      "A):   Chlorobenzene",
      "B):   Hexachlorobenzene (C<sub>6</sub>Cl<sub>6</sub>)",
      "C):   Benzene hexachloride (BHC / Gammaxene / C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub>)",
      "D):   1,4-Dichlorobenzene"
    ],
    "correctAnswer": "c",
    "explanation": "Under UV light, chlorine undergoes free-radical addition across all three double bonds to produce C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub> (Gammaxene / BHC)."
  },
  {
    "id": "c11-chem-9-mcq-22",
    "question": "The C-C-C bond angle in Benzene is:",
    "options": [
      "A):   109&deg;28'",
      "B):   120&deg;",
      "C):   180&deg;",
      "D):   90&deg;"
    ],
    "correctAnswer": "b",
    "explanation": "Benzene is a regular planar hexagon with sp<sup>2</sup> hybridization and 120&deg; bond angles."
  },
  {
    "id": "c11-chem-9-mcq-23",
    "question": "Which of the following compounds is Antiaromatic?",
    "options": [
      "A):   Benzene",
      "B):   Cyclobutadiene",
      "C):   Naphthalene",
      "D):   Tropylium cation"
    ],
    "correctAnswer": "b",
    "explanation": "Cyclobutadiene is a planar cyclic conjugated ring with 4 &pi;-electrons (4n with n = 1), making it antiaromatic and highly unstable."
  },
  {
    "id": "c11-chem-9-mcq-24",
    "question": "Dehydrohalogenation of 2-Bromobutane with alcoholic KOH yields But-2-ene as the major product according to:",
    "options": [
      "A):   Hofmann's rule",
      "B):   Saytzeff's rule",
      "C):   Markownikoff's rule",
      "D):   Kharasch rule"
    ],
    "correctAnswer": "b",
    "explanation": "Saytzeff's rule dictates that the more alkyl-substituted alkene (But-2-ene, having 6 &alpha;-hydrogens) is formed preferentially."
  },
  {
    "id": "c11-chem-9-mcq-25",
    "question": "Why are polynuclear aromatic hydrocarbons like 1,2-Benzpyrene hazardous to human health?",
    "options": [
      "A):   They cause corrosion",
      "B):   They are potent carcinogenic agents that damage DNA",
      "C):   They deplete the ozone layer directly",
      "D):   They are explosive gases"
    ],
    "correctAnswer": "b",
    "explanation": "Fused polynuclear aromatics formed by incomplete combustion are metabolically converted to reactive epoxides that covalently bind to DNA, causing cancer."
  }
];
