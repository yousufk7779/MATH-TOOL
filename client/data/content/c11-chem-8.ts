// Class 11 Chemistry Chapter 8: Organic Chemistry – Some Basic Principles and Techniques
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Chemistry | Class: 11 | Code: c11-chem-8

export const c11Chem8HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.12), rgba(121, 40, 202, 0.12)); border: 1.5px solid rgba(255, 0, 127, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #FF007F; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 8: Organic Chemistry – Some Basic Principles and Techniques</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Catenation:</b> The exceptional ability of carbon atoms to link with one another through robust covalent single, double, or triple bonds to produce open chains and cyclic frameworks.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Inductive Effect (&plusmn;I):</b> Permanent polarization of a &sigma;-bond caused by electronegativity differences between adjacent atoms, diminishing rapidly across three carbon atoms.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Resonance (Mesomeric) Effect (&plusmn;R):</b> Permanent polarity produced in a conjugated system by interaction of two &pi;-bonds or a &pi;-bond with an adjacent unshared electron pair.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Hyperconjugation (No-Bond Resonance):</b> Delocalization of &sigma;-electrons of a C-H bond into an adjacent empty p-orbital or &pi;*-orbital of an unsaturated or electron-deficient center.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Carbocation:</b> A planar, sp<sup>2</sup>-hybridized trivalent carbon intermediate bearing a formal positive charge and an unfilled 2p orbital (6 valence electrons).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Lassaigne's Test:</b> Fusion of an organic compound with metallic sodium to convert covalently bonded nitrogen, sulfur, and halogens into water-soluble ionic sodium salts (NaCN, Na<sub>2</sub>S, NaX).
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. General Introduction to Organic Chemistry, Classification and IUPAC Nomenclature of Organic Compounds
  </h2>

  <!-- PRESERVED IMAGE 1 -->
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMyZDAwMmQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0ic2hhZG93Ij4KICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjQiIHN0ZERldmlhdGlvbj0iNiIgZmxvb2QtY29sb3I9IiNGRjAwN0YiIGZsb29kLW9wYWNpdHk9IjAuNSIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiByeD0iMTYiIGZpbGw9InVybCgjYmdHcmFkMSkiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjAwN0YiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4zRCBIeWJyaWRpemF0aW9uICZhbXA7IE9yZ2FuaWMgTW9sZWN1bGFyIEdlb21ldHJ5IEFyY2hpdGVjdHVyZTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIyMTAiIGhlaWdodD0iMzAwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNwwrMgVGV0cmFoZWRyYWwgKDEwOS41wrApPC90ZXh0PgogICAgPGNpcmNsZSBjeD0iMTA1IiBjeT0iMTQwIiByPSIyMiIgZmlsbD0iI0ZGMDA3RiIvPgogICAgPHRleHQgeD0iMTA1IiB5PSIxNDYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzwvdGV4dD4KICAgIDxsaW5lIHgxPSIxMDUiIHkxPSIxMTgiIHgyPSIxMDUiIHkyPSI2OCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMuNSIvPgogICAgPGNpcmNsZSBjeD0iMTA1IiBjeT0iNjIiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjY3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iMTI1IiB5MT0iMTUwIiB4Mj0iMTY1IiB5Mj0iMTg1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMy41Ii8+CiAgICA8Y2lyY2xlIGN4PSIxNzIiIGN5PSIxOTEiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxNzIiIHk9IjE5NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHBvbHlnb24gcG9pbnRzPSI5MCwxNTAgNDUsMTg1IDU1LDE5NSIgZmlsbD0iI0ZGMDA3RiIvPgogICAgPGNpcmNsZSBjeD0iNDUiIGN5PSIxOTEiIHI9IjE0IiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSI0NSIgeT0iMTk2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iOTUiIHkxPSIxMzAiIHgyPSI2NSIgeTI9IjEwMCIgc3Ryb2tlPSIjQUFBIiBzdHJva2UtZGFzaGFycmF5PSIzLDMiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGNpcmNsZSBjeD0iNTgiIGN5PSI5MyIgcj0iMTQiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjU4IiB5PSI5OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIENI4oKELCBFdGhhbmUgQ+KCgkjigoY8L3RleHQ+CiAgICA8dGV4dCB4PSIxMDUiIHk9IjI3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQgz4MtYm9uZHMgfCAwIM+ALWJvbmRzPC90ZXh0PgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTUsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMjEwIiBoZWlnaHQ9IjMwMCIgcng9IjEyIiBmaWxsPSJyZ2JhKDI1NSwwLDEyNywwLjA2KSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTA1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY2NkM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zcMKyIFRyaWdvbmFsIFBsYW5hciAoMTIwwrApPC90ZXh0PgogICAgPGNpcmNsZSBjeD0iNzAiIGN5PSIxNDAiIHI9IjIwIiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8dGV4dCB4PSI3MCIgeT0iMTQ2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+CiAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxNDAiIHI9IjIwIiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8dGV4dCB4PSIxNDAiIHk9IjE0NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DPC90ZXh0PgogICAgPGxpbmUgeDE9IjkwIiB5MT0iMTMzIiB4Mj0iMTIwIiB5Mj0iMTMzIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGxpbmUgeDE9IjkwIiB5MT0iMTQ3IiB4Mj0iMTIwIiB5Mj0iMTQ3IiBzdHJva2U9IiNGRjY2QzQiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGxpbmUgeDE9IjU1IiB5MT0iMTI1IiB4Mj0iMzAiIHkyPSI5MCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgIDxjaXJjbGUgY3g9IjIzIiBjeT0iODIiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIyMyIgeT0iODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSI1NSIgeTE9IjE1NSIgeDI9IjMwIiB5Mj0iMTkwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPGNpcmNsZSBjeD0iMjMiIGN5PSIxOTgiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIyMyIgeT0iMjAyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+CiAgICA8bGluZSB4MT0iMTU1IiB5MT0iMTI1IiB4Mj0iMTgwIiB5Mj0iOTAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODciIGN5PSI4MiIgcj0iMTIiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjE4NyIgeT0iODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSIxNTUiIHkxPSIxNTUiIHgyPSIxODAiIHkyPSIxOTAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODciIGN5PSIxOTgiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxODciIHk9IjIwMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIEV0aGVuZSBD4oKCSOKChDwvdGV4dD4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMjc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MyDPgy1ib25kcyB8IDEgz4AtYm9uZDwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIxMCIgaGVpZ2h0PSIzMDAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c3AgTGluZWFyICgxODDCsCk8L3RleHQ+CiAgICA8Y2lyY2xlIGN4PSI3NSIgY3k9IjE0MCIgcj0iMTgiIGZpbGw9IiNGRjAwN0YiLz4KICAgIDx0ZXh0IHg9Ijc1IiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzwvdGV4dD4KICAgIDxjaXJjbGUgY3g9IjEzNSIgY3k9IjE0MCIgcj0iMTgiIGZpbGw9IiNGRjAwN0YiLz4KICAgIDx0ZXh0IHg9IjEzNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+CiAgICA8bGluZSB4MT0iOTMiIHkxPSIxMzIiIHgyPSIxMTciIHkyPSIxMzIiIHN0cm9rZT0iI0ZGNjZDNCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAgIDxsaW5lIHgxPSI5MyIgeTE9IjE0MCIgeDI9IjExNyIgeTI9IjE0MCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgIDxsaW5lIHgxPSI5MyIgeTE9IjE0OCIgeDI9IjExNyIgeTI9IjE0OCIgc3Ryb2tlPSIjRkY2NkM0IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogICAgPGxpbmUgeDE9IjU3IiB5MT0iMTQwIiB4Mj0iMzAiIHkyPSIxNDAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjE0MCIgcj0iMTIiIGZpbGw9IiNFMEUwRTAiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD4KICAgIDxsaW5lIHgxPSIxNTMiIHkxPSIxNDAiIHgyPSIxODAiIHkyPSIxNDAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIxODgiIGN5PSIxNDAiIHI9IjEyIiBmaWxsPSIjRTBFMEUwIi8+CiAgICA8dGV4dCB4PSIxODgiIHk9IjE0NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0PgogICAgPHRleHQgeD0iMTA1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjREREIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lLmcuIEV0aHluZSBD4oKCSOKCgjwvdGV4dD4KICAgIDx0ZXh0IHg9IjEwNSIgeT0iMjc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MiDPgy1ib25kcyB8IDIgz4AtYm9uZHM8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.35); border: 1.5px solid #FF007F;" alt="3D Hybridization" /><p style="color: #FF007F; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 8.1: 3D Visualization of Carbon Hybridization (sp³, sp², sp) and Molecular Geometries</p></div>

  

  <p>
    Organic chemistry is the chemistry of carbon compounds. Carbon's atomic ground state (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>) promotes to 1s<sup>2</sup> 2s<sup>1</sup> 2p<sub>x</sub><sup>1</sup> 2p<sub>y</sub><sup>1</sup> 2p<sub>z</sub><sup>1</sup> upon excitation, providing four unpaired electrons that hybridize into sp<sup>3</sup> (tetrahedral, 109.5&deg;), sp<sup>2</sup> (trigonal planar, 120&deg;), or sp (linear, 180&deg;) orbital geometries.
  </p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) General Introduction, Tetravalency &amp; Hybridization</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Tetravalency of Carbon:</b> Carbon forms four strong covalent bonds. The sum of &sigma; and &pi; bonds always totals 4.</li>
      <li><b style="color: #FF007F;">Hybridization States:</b>
        <br/>&bull; <b>sp<sup>3</sup> Hybridization:</b> 4 &sigma;-bonds, 0 &pi;-bonds; Tetrahedral; bond angle 109&deg;28' (e.g., Methane CH<sub>4</sub>, Ethane C<sub>2</sub>H<sub>6</sub>).
        <br/>&bull; <b>sp<sup>2</sup> Hybridization:</b> 3 &sigma;-bonds, 1 &pi;-bond; Trigonal Planar; bond angle 120&deg; (e.g., Ethene C<sub>2</sub>H<sub>4</sub>, Benzene C<sub>6</sub>H<sub>6</sub>).
        <br/>&bull; <b style="color: #FF007F;">sp Hybridization:</b> 2 &sigma;-bonds, 2 &pi;-bonds; Linear; bond angle 180&deg; (e.g., Ethyne C<sub>2</sub>H<sub>2</sub>).
      </li>
      <li><b style="color: #FF007F;">Electronegativity vs s-Character:</b> sp (50% s) &gt; sp<sup>2</sup> (33.3% s) &gt; sp<sup>3</sup> (25% s). Terminal alkynes (HC&equiv;CH) are weakly acidic because sp-carbon strongly stabilizes the negative charge of the conjugate acetylide carbanion.</li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Classification of Organic Compounds &amp; Isomerism</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF007F;">Structural Classification:</b>
      <br/>- <i>Acyclic / Open Chain (Aliphatic):</i> Straight or branched alkanes, alkenes, alkynes.
      <br/>- <i>Cyclic / Closed Chain:</i> (a) Homocyclic / Carbocyclic (Alicyclic like cyclohexane, Aromatic like benzene), (b) Heterocyclic (contain ring atoms other than carbon, e.g., Pyridine, Furan, Thiophene).
    </li>
    <li><b style="color: #FF007F;">Isomerism Framework:</b> Compounds possessing the identical molecular formula but differing in structural arrangement or spatial orientation:
      <br/>1. <b style="color: #FF007F;">Chain Isomerism:</b> Differ in carbon chain skeleton (e.g., n-butane vs isobutane).
      <br/>2. <b style="color: #FF007F;">Position Isomerism:</b> Differ in position of functional group/multiple bond (e.g., But-1-ene vs But-2-ene; Propan-1-ol vs Propan-2-ol).
      <br/>3. <b style="color: #FF007F;">Functional Group Isomerism:</b> Differ in functional group (e.g., Ethanol CH<sub>3</sub>CH<sub>2</sub>OH vs Dimethyl ether CH<sub>3</sub>OCH<sub>3</sub>; Propanal vs Propanone).
      <br/>4. <b style="color: #FF007F;">Metamerism:</b> Unequal distribution of alkyl groups on either side of a bivalent functional group (e.g., Diethyl ether vs Methyl propyl ether).
      <br/>5. <b style="color: #FF007F;">Tautomerism:</b> Dynamic keto-enol chemical equilibrium involving rapid intramolecular proton migration.
    </li>
  </ul>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(iii) IUPAC Rules for Nomenclature of Organic Compounds</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      IUPAC Name = <b>Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix</b>.
      <br/>&bull; <b style="color: #FF007F;">Longest Continuous Carbon Chain:</b> Select the longest chain containing maximum functional groups and multiple bonds.
      <br/>&bull; <b style="color: #FF007F;">Lowest Locant Rule:</b> Number the chain from the end giving lowest set of locants to principal functional groups &gt; double bond &gt; triple bond &gt; substituents.
      <br/>&bull; <b style="color: #FF007F;">Priority Hierarchy of Functional Groups:</b>
      <br/><b>-COOH &gt; -SO<sub>3</sub>H &gt; -COOR &gt; -COCl &gt; -CONH<sub>2</sub> &gt; -CN &gt; -CHO &gt; &gt;C=O &gt; -OH &gt; -SH &gt; -NH<sub>2</sub> &gt; C=C &gt; C&equiv;C</b>.
    </p>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Electronic Displacement in a Covalent Bond: Inductive Effect, Electromeric Effect, Resonance and Hyper-Conjugation
  </h2>

  <!-- PRESERVED IMAGE 2 -->
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzMzAwMzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbGVjdHJvbmljIERpc3BsYWNlbWVudHMgJmFtcDsgT3JnYW5pYyBSZWFjdGlvbiBJbnRlcm1lZGlhdGVzIFN0YWJpbGl0eTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuKaoSBFbGVjdHJvbmljIERpc3BsYWNlbWVudCBFZmZlY3RzPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iNDUiIHgyPSIzMjAiIHkyPSI0NSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iNDAiIHk9IjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjEuIEluZHVjdGl2ZSBFZmZlY3QgKEkpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSI4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiAtSSAoV2l0aGRyYXdpbmcpOiAtTk/igoIgJmd0OyAtQ04gJmd0OyAtRiAmZ3Q7IC1DbCAmZ3Q7IC1CciAmZ3Q7IC1JPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjEwMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiArSSAoRG9uYXRpbmcpOiAtQyhDSOKCgynigoMgJmd0OyAtQ0goQ0jigoMp4oKCICZndDsgLUPigoJI4oKFICZndDsgLUNI4oKDPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iMTIwIiB4Mj0iMzIwIiB5Mj0iMTIwIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNCIvPgogICAgPHRleHQgeD0iNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4yLiBSZXNvbmFuY2UgLyBNZXNvbWVyaWMgRWZmZWN0IChNL1IpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgK1IgKG8vcC1kaXJlY3RpbmcpOiAtT0gsIC1OSOKCgiwgLU9SLCAtaGFsb2dlbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIxNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjREREIj7igKIgLVIgKG0tZGlyZWN0aW5nKTogLU5P4oKCLCAtQ04sIC1DSE8sIC1DT09IPC90ZXh0PgogICAgPGxpbmUgeDE9IjMwIiB5MT0iMTk1IiB4Mj0iMzIwIiB5Mj0iMTk1IiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNCIvPgogICAgPHRleHQgeD0iNDAiIHk9IjIxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiBIeXBlcmNvbmp1Z2F0aW9uIChOby1Cb25kIFJlc29uYW5jZSk6PC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREQiPuKAoiBEZWxvY2FsaXphdGlvbiBvZiDPgyhDLUgpIGVsZWN0cm9ucyBpbnRvIGVtcHR5IHAvz4A8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iMjUzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGNjZDNCI+4oCiIE5vLiBvZiBTdHJ1Y3R1cmVzID0gTnVtYmVyIG9mIM6xLUh5ZHJvZ2VucyE8L3RleHQ+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPvCflKUgUmVhY3RpdmUgSW50ZXJtZWRpYXRlcyAmYW1wOyBTdGFiaWxpdHk8L3RleHQ+CiAgICA8cmVjdCB4PSIyNSIgeT0iNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzUiIHk9IjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjAwN0YiPkNhcmJvY2F0aW9ucyAoUuKBuiwgc3DCsiBQbGFuYXIsIDYgZeKBuyk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+QmVuenlsICZndDsgQWxseWwgJmd0OyAzwrAgJmd0OyAywrAgJmd0OyAxwrAgJmd0OyBDSOKCg+KBujwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIxMDciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExLjUiIGZpbGw9IiNBQUEiPihTdGFiaWxpemVkIGJ5ICtJICZhbXA7IEh5cGVyY29uanVnYXRpb24gOSDOsS1IKTwvdGV4dD4KICAgIDxyZWN0IHg9IjI1IiB5PSIxMzAiIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMzUiIHk9IjE1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIj5DYXJiYW5pb25zIChS4oG7LCBzcMKzIFB5cmFtaWRhbCwgOCBl4oG7KTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMi41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+Q0jigoPigbsgJmd0OyAxwrAgJmd0OyAywrAgJmd0OyAzwrA8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTg3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMS41IiBmaWxsPSIjQUFBIj4oRGVzdGFiaWxpemVkIGJ5ICtJIGFsa3lsIGdyb3Vwcyk8L3RleHQ+CiAgICA8cmVjdCB4PSIyNSIgeT0iMjEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjM1IiB5PSIyMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGMDA3RiI+RnJlZSBSYWRpY2FscyAoUuKAoiwgc3DCsiBQbGFuYXIsIDcgZeKBuyk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjI1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjPCsCAmZ3Q7IDLCsCAmZ3Q7IDHCsCAmZ3Q7IENI4oKD4oCiPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjI2NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEuNSIgZmlsbD0iI0FBQSI+KEhvbW9seXRpYyBmaXNzaW9uIHByb2R1Y3QpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.35); border: 1.5px solid #FF007F;" alt="3D Intermediates" /><p style="color: #FF007F; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 8.2: 3D Electronic Displacement Mechanics &amp; Intermediate Stability Orders</p></div>

  

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Inductive Effect (+I / -I) &amp; Electromeric Effect (+E / -E)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Inductive Effect (I):</b> Permanent displacement of &sigma;-electrons along a carbon chain.
        <br/>- <i>-I Effect (Electron-Withdrawing):</i> -NO<sub>2</sub> &gt; -CN &gt; -COOH &gt; -F &gt; -Cl &gt; -Br &gt; -I &gt; -OH &gt; -C<sub>6</sub>H<sub>5</sub> &gt; -H (0). (Increases carboxylic acid strength: CCl<sub>3</sub>COOH &gt; CHCl<sub>2</sub>COOH &gt; CH<sub>2</sub>ClCOOH &gt; CH<sub>3</sub>COOH).
        <br/>- <i>+I Effect (Electron-Donating):</i> -(CH<sub>3</sub>)<sub>3</sub>C &gt; -(CH<sub>3</sub>)<sub>2</sub>CH &gt; -CH<sub>2</sub>CH<sub>3</sub> &gt; -CH<sub>3</sub> &gt; -H (0).
      </li>
      <li><b style="color: #FF007F;">Electromeric Effect (E):</b> Temporary complete transfer of a shared pair of &pi;-electrons to one of the bonded atoms in the presence of an attacking reagent.
        <br/>- <i>+E Effect:</i> &pi;-electrons shift toward the atom to which attacking reagent binds (e.g., electrophilic addition of H<sup>+</sup> to alkenes).
        <br/>- <i>-E Effect:</i> &pi;-electrons shift away from the atom to which attacking reagent binds (e.g., nucleophilic addition of CN<sup>-</sup> to carbonyl group).
      </li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Resonance Effect (Mesomeric Effect +R / -R)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Resonance occurs in conjugated systems containing alternating single and multiple bonds, or a &pi;-bond adjacent to a p-orbital bearing a charge/lone pair.
      <br/>&bull; <b style="color: #FF007F;">+R / +M Effect:</b> Electron-donating resonance groups transfer lone pairs into the conjugated &pi;-system, increasing electron density at ortho/para positions in aromatic rings: <b>-OH, -OR, -NH<sub>2</sub>, -NHR, -Cl, -Br</b>.
      <br/>&bull; <b style="color: #FF007F;">-R / -M Effect:</b> Electron-withdrawing resonance groups draw &pi;-electrons out of the conjugated system, decreasing electron density at ortho/para positions: <b>-NO<sub>2</sub>, -CN, -CHO, &gt;C=O, -COOH, -COOR</b>.
    </p>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(iii) Hyperconjugation (Baker-Nathan Effect)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Hyperconjugation is a permanent electronic displacement involving overlap of &sigma;-electrons of an &alpha;-C-H bond of an alkyl group with an adjacent empty/half-filled p-orbital or &pi;*-orbital.
      <br/>&bull; <b style="color: #FF007F;">No-Bond Resonance:</b> The C-H bond breaks conceptually without ionic detachment: Number of hyperconjugative structures = <b>Number of &alpha;-hydrogens</b>.
      <br/>&bull; Direct stabilization of: (1) Carbocations (Tertiary 3&deg; carbocation has 9 &alpha;-H &gt; Secondary 2&deg; has 6 &alpha;-H &gt; Primary 1&deg; has 3 &alpha;-H), (2) Alkyl free radicals, (3) Alkene stability (Tetra-alkylated alkenes &gt; Di-alkylated &gt; Ethene; Saytzeff rule).
    </p>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Homolytic and Heterolytic Fission of a Covalent Bond, Free Radicals, Electrophiles, Nucleophiles, Carbocations and Carbanions
  </h2>

  <!-- NEW STANDALONE SVG CARD FOR BOND CLEAVAGE & INTERMEDIATES -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title Banner -->
      <text x="250" y="26" fill="#FF007F" font-size="14" font-weight="bold" text-anchor="middle">
        Bond Cleavage &amp; Reactive Intermediates Stability
      </text>

      <!-- Top: Homolytic vs Heterolytic Cleavage -->
      <g transform="translate(30, 42)">
        <!-- Homolytic -->
        <rect width="210" height="75" rx="6" fill="rgba(38, 198, 218, 0.15)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="105" y="20" fill="#26C6DA" font-size="11.5" font-weight="bold" text-anchor="middle">Homolytic Fission (Symmetrical)</text>
        <text x="105" y="40" fill="#FFFFFF" font-size="11" text-anchor="middle">A &bull;&bull; B &rarr; A<sup>&bull;</sup> + B<sup>&bull;</sup> (Free Radicals)</text>
        <text x="105" y="58" fill="#80DEEA" font-size="10" text-anchor="middle">Initiated by UV Light / Heat / Peroxides</text>
      </g>

      <g transform="translate(260, 42)">
        <!-- Heterolytic -->
        <rect width="210" height="75" rx="6" fill="rgba(255, 138, 101, 0.15)" stroke="#FF8A65" stroke-width="1.2"/>
        <text x="105" y="20" fill="#FF8A65" font-size="11.5" font-weight="bold" text-anchor="middle">Heterolytic Fission (Unsymmetrical)</text>
        <text x="105" y="40" fill="#FFFFFF" font-size="11" text-anchor="middle">A &bull;&bull; B &rarr; A<sup>+</sup> + :B<sup>-</sup> (Ions)</text>
        <text x="105" y="58" fill="#FFAB91" font-size="10" text-anchor="middle">Forms Carbocations &amp; Carbanions in Polar Solvents</text>
      </g>

      <!-- Bottom: Relative Stability Hierarchies -->
      <g transform="translate(30, 130)">
        <rect width="440" height="135" rx="6" fill="rgba(255, 0, 127, 0.1)" stroke="#FF007F" stroke-width="1.2"/>
        <text x="220" y="22" fill="#FF007F" font-size="12" font-weight="bold" text-anchor="middle">
          Relative Stability Orders of Reactive Intermediates
        </text>

        <!-- Carbocations -->
        <text x="20" y="48" fill="#FDC830" font-size="11" font-weight="bold">Carbocations (C<sup>+</sup>, sp<sup>2</sup>, 6e<sup>-</sup>):</text>
        <text x="20" y="66" fill="#FFFFFF" font-size="10.5">3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>+</sup> &nbsp;|&nbsp; Benzyl &gt; Allyl &gt; 3&deg; (Hyperconjugation + +I effect)</text>

        <!-- Free Radicals -->
        <text x="20" y="90" fill="#69F0AE" font-size="11" font-weight="bold">Free Radicals (C<sup>&bull;</sup>, sp<sup>2</sup>, 7e<sup>-</sup>):</text>
        <text x="20" y="108" fill="#FFFFFF" font-size="10.5">3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>&bull;</sup> &nbsp;|&nbsp; Benzyl &gt; Allyl &gt; 3&deg; (Hyperconjugation stabilization)</text>

        <!-- Carbanions -->
        <text x="20" y="132" fill="#FF5252" font-size="11" font-weight="bold">Carbanions (C:<sup>-</sup>, sp<sup>3</sup>, 8e<sup>-</sup>):</text>
        <text x="200" y="132" fill="#FFFFFF" font-size="10.5">CH<sub>3</sub><sup>-</sup> &gt; 1&deg; &gt; 2&deg; &gt; 3&deg; (Reversed due to electron-repelling +I)</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 8.4: Homolytic vs Heterolytic Bond Cleavage Mechanisms &amp; 3D Relative Stability Hierarchies of Carbocations, Free Radicals &amp; Carbanions
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Bond Cleavage: Homolytic vs Heterolytic Fission</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Homolytic Fission (Symmetrical Cleavage):</b> Covalent bond breaks symmetrically such that each departing atom retains one bonding electron: <b>A &bull;&bull; B &rarr; A<sup>&bull;</sup> + B<sup>&bull;</sup></b>. Favored in non-polar bonds by heat (&Delta;), UV light (h&nu;), or free radical initiators (peroxides). Generates <b>Free Radicals</b>.</li>
      <li><b style="color: #FF007F;">Heterolytic Fission (Unsymmetrical Cleavage):</b> Covalent bond breaks unsymmetrically such that the more electronegative atom takes both shared electrons: <b>A &bull;&bull; B &rarr; A<sup>+</sup> + :B<sup>-</sup></b>. Favored by polar solvents and ionic conditions. Generates <b>Carbocations</b> and <b>Carbanions</b>.</li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Reactive Intermediates (Carbocations, Carbanions, Free Radicals)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">1. Carbocations (Carbonium Ions):</b> Planar trivalent carbon with 6 valence electrons (sp<sup>2</sup> hybridized, vacant 2p orbital).
        <br/>Stability Order: <b>(C<sub>6</sub>H<sub>5</sub>)<sub>3</sub>C<sup>+</sup> &gt; (C<sub>6</sub>H<sub>5</sub>)<sub>2</sub>CH<sup>+</sup> &gt; C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup> &approx; CH<sub>2</sub>=CH-CH<sub>2</sub><sup>+</sup> &gt; (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> (3&deg;) &gt; (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup> (2&deg;) &gt; CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> (1&deg;) &gt; CH<sub>3</sub><sup>+</sup></b>.
        <br/>Undergo rapid 1,2-hydride and 1,2-methyl shifts to yield more stable carbocations.
      </li>
      <li><b style="color: #FF007F;">2. Carbanions:</b> Pyramidal trivalent carbon bearing a lone pair and formal negative charge (sp<sup>3</sup> hybridized, 8 valence electrons).
        <br/>Stability Order: <b>CH<sub>3</sub><sup>-</sup> &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;</b> (Alkane series; +I alkyl groups destabilize negative charge). Stabilized by electron-withdrawing groups (-I, -R) and s-character: <b>HC&equiv;C<sup>-</sup> &gt; CH<sub>2</sub>=CH<sup>-</sup> &gt; CH<sub>3</sub>-CH<sub>2</sub><sup>-</sup></b>.
      </li>
      <li><b style="color: #FF007F;">3. Free Radicals:</b> Neutral planar/pyramidal trivalent carbon bearing an unpaired odd electron (7 valence electrons).
        <br/>Stability Order: <b>Benzyl &gt; Allyl &gt; 3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>&bull;</sup></b> (Stabilized by hyperconjugation and resonance).
      </li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(iii) Attacking Reagents: Electrophiles (E<sup>+</sup>) vs Nucleophiles (Nu<sup>-</sup>)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF007F;">Electrophiles (Electron-Loving):</b> Electron-deficient species that accept electron pairs:
      <br/>- Positive ions: <b>H<sup>+</sup>, Cl<sup>+</sup>, Br<sup>+</sup>, NO<sub>2</sub><sup>+</sup>, R<sub>3</sub>C<sup>+</sup></b>.
      <br/>- Neutral molecules with vacant valence orbitals: <b>BF<sub>3</sub>, AlCl<sub>3</sub>, FeCl<sub>3</sub>, SO<sub>3</sub>, :CCl<sub>2</sub> (Carbene)</b>.
    </li>
    <li><b style="color: #FF007F;">Nucleophiles (Nucleus-Loving):</b> Electron-rich species that donate electron pairs:
      <br/>- Negatively charged ions: <b>OH<sup>-</sup>, RO<sup>-</sup>, CN<sup>-</sup>, X<sup>-</sup>, RCOO<sup>-</sup>, NH<sub>2</sub><sup>-</sup></b>.
      <br/>- Neutral molecules with unshared lone pairs: <b>:NH<sub>3</sub>, R-NH<sub>2</sub>, H<sub>2</sub>O:, R-OH, R-SH</b>.
      <br/>- <i>Ambident Nucleophiles:</i> Possess two nucleophilic donor sites (e.g., CN<sup>-</sup> / NC<sup>-</sup>; NO<sub>2</sub><sup>-</sup> / ONO<sup>-</sup>).
    </li>
  </ul>

  <!-- SECTION 4 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Types of Organic Reactions
  </h2>

  <!-- NEW STANDALONE SVG CARD FOR ORGANIC REACTION MECHANISMS -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#FF007F" font-size="14" font-weight="bold" text-anchor="middle">
        Organic Reaction Mechanisms &mdash; S<sub>N</sub>1 vs S<sub>N</sub>2 Substitution &amp; Elimination
      </text>

      <!-- Left: SN1 Mechanism -->
      <g transform="translate(30, 45)">
        <rect width="210" height="110" rx="6" fill="rgba(171, 71, 188, 0.15)" stroke="#AB47BC" stroke-width="1.2"/>
        <text x="105" y="22" fill="#AB47BC" font-size="12" font-weight="bold" text-anchor="middle">S<sub>N</sub>1 (Unimolecular)</text>
        <text x="105" y="42" fill="#FFFFFF" font-size="10.5" text-anchor="middle">2 Steps &bull; Carbocation Intermediate</text>
        <text x="105" y="60" fill="#CBD5E1" font-size="10" text-anchor="middle">Rate = k [R-X] &bull; 1st Order</text>
        <text x="105" y="78" fill="#FDC830" font-size="10" font-weight="bold" text-anchor="middle">Reactivity: 3&deg; &gt; 2&deg; &gt; 1&deg;</text>
        <text x="105" y="96" fill="#81C784" font-size="10" text-anchor="middle">Racemization (Attack from both faces)</text>
      </g>

      <!-- Right: SN2 Mechanism -->
      <g transform="translate(260, 45)">
        <rect width="210" height="110" rx="6" fill="rgba(38, 198, 218, 0.15)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="105" y="22" fill="#26C6DA" font-size="12" font-weight="bold" text-anchor="middle">S<sub>N</sub>2 (Bimolecular)</text>
        <text x="105" y="42" fill="#FFFFFF" font-size="10.5" text-anchor="middle">1 Concerted Step &bull; Transition State</text>
        <text x="105" y="60" fill="#CBD5E1" font-size="10" text-anchor="middle">Rate = k [R-X][Nu<sup>-</sup>] &bull; 2nd Order</text>
        <text x="105" y="78" fill="#FDC830" font-size="10" font-weight="bold" text-anchor="middle">Reactivity: CH<sub>3</sub>X &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;</text>
        <text x="105" y="96" fill="#80DEEA" font-size="10" text-anchor="middle">Walden Inversion (100% Backside Attack)</text>
      </g>

      <!-- Bottom: Addition & Elimination -->
      <g transform="translate(30, 168)">
        <rect width="440" height="98" rx="6" fill="rgba(255, 0, 127, 0.12)" stroke="#FF007F" stroke-width="1.2"/>
        
        <text x="110" y="24" fill="#FF8A65" font-size="11.5" font-weight="bold" text-anchor="middle">Electrophilic Addition</text>
        <text x="110" y="44" fill="#FFFFFF" font-size="10.5" text-anchor="middle">C=C + H-X &rarr; H-C-C-X</text>
        <text x="110" y="62" fill="#CBD5E1" font-size="10" text-anchor="middle">Markownikoff's Rule (H &rarr; more H C)</text>
        <text x="110" y="80" fill="#FFE082" font-size="9.5" text-anchor="middle">Peroxide Anti-Markownikoff (HBr only)</text>

        <line x1="220" y1="10" x2="220" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>

        <text x="330" y="24" fill="#69F0AE" font-size="11.5" font-weight="bold" text-anchor="middle">&beta;-Elimination (E1 vs E2)</text>
        <text x="330" y="44" fill="#FFFFFF" font-size="10.5" text-anchor="middle">R-CH<sub>2</sub>-CH<sub>2</sub>X + Alc. KOH &rarr; Alkene</text>
        <text x="330" y="62" fill="#CBD5E1" font-size="10" text-anchor="middle">Saytzeff Rule: More substituted alkene</text>
        <text x="330" y="80" fill="#80DEEA" font-size="9.5" text-anchor="middle">E2: Anti-periplanar geometry requirement</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 8.5: Fundamental Organic Reaction Pathways: S<sub>N</sub>1 vs S<sub>N</sub>2 Nucleophilic Substitutions, Markownikoff Electrophilic Additions &amp; Saytzeff &beta;-Eliminations
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Substitution Reactions (S<sub>N</sub>1, S<sub>N</sub>2, S<sub>E</sub>)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      An atom or group of atoms directly replaces another atom or group in a substrate molecule:
      <br/>&bull; <b style="color: #FF007F;">S<sub>N</sub>1 (Substitution Nucleophilic Unimolecular):</b> 2-step process involving carbocation intermediate formation (Rate = k[R-X]). Favored by 3&deg; halides, polar protic solvents. Leads to <b>racemization</b>.
      <br/>&bull; <b style="color: #FF007F;">S<sub>N</sub>2 (Substitution Nucleophilic Bimolecular):</b> 1-step concerted backside attack via a pentacoordinate transition state (Rate = k[R-X][Nu<sup>-</sup>]). Favored by primary (1&deg;) methyl halides, polar aprotic solvents. Leads to <b>100% Walden Inversion</b>.
      <br/>&bull; <b style="color: #FF007F;">Electrophilic Aromatic Substitution (S<sub>E</sub>):</b> Typical reaction of benzene (Nitration, Halogenation, Friedel-Crafts alkylation/acylation) via arenium ion (&sigma;-complex) intermediate.
    </p>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Addition &amp; Elimination Reactions</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF007F;">Addition Reactions:</b> Multiple bonds (&pi;) broken to form single (&sigma;) bonds:
      <br/>- <i>Electrophilic Addition:</i> Alkenes/alkynes react with electrophiles (HBr, Br<sub>2</sub>). Follows <b>Markownikoff's Rule</b>: <i>"Negative part of addendum attaches to the double-bonded carbon having fewer hydrogen atoms"</i>.
      <br/>- <i>Peroxide Effect (Kharasch Effect):</i> Addition of HBr in presence of organic peroxides yields <b>Anti-Markownikoff</b> product via a free radical pathway (Only valid for HBr, not HCl or HI).
      <br/>- <i>Nucleophilic Addition:</i> Carbonyl compounds (&gt;C=O) add nucleophiles (HCN, NaHSO<sub>3</sub>).
    </li>
    <li><b style="color: #FF007F;">Elimination Reactions (&beta;-Elimination):</b> Loss of two atoms or groups from adjacent carbons to produce multiple bonds (Alkenes/Alkynes):
      <br/>- Follows <b>Saytzeff (Zaitsev) Rule</b>: <i>"The more substituted, more stable alkene possessing greater number of alkyl substituents is formed as the major product."</i>
    </li>
  </ul>

  <!-- SECTION 5 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Methods of Purification, Qualitative and Quantitative Analysis
  </h2>

  <!-- PRESERVED IMAGE 3 -->
  <div style="text-align: center; margin: 20px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTAwMWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMyYjAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWEwMDFhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkYwMDdGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PcmdhbmljIFB1cmlmaWNhdGlvbiAmYW1wOyBRdWFudGl0YXRpdmUgQW5hbHlzaXMgTWFzdGVyIEFyY2hpdGVjdHVyZTwvdGV4dD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIyMzAiIGhlaWdodD0iMzEwIiByeD0iMTIiIGZpbGw9InJnYmEoMjU1LDAsMTI3LDAuMDYpIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxMTUiIHk9IjI4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuKal++4jyBEaXN0aWxsYXRpb24gVGVjaG5pcXVlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgU2ltcGxlIERpc3RpbGxhdGlvbjo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5MaXF1aWRzIHdpdGggzpRiLnAuICZndDsgMzAgwrBDLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIEZyYWN0aW9uYWwgRGlzdGlsbGF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5GcmFjdGlvbmF0aW5nIGNvbHVtbiAozpRiLnAuICZsdDsgMzDCsEMpLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIFN0ZWFtIERpc3RpbGxhdGlvbjo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+U3RlYW0tdm9sYXRpbGUgJmFtcDsgd2F0ZXItaW5zb2x1YmxlPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjE3NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPihlLmcuIEFuaWxpbmUsIEVzc2VudGlhbCBvaWxzKS48L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMjA1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBWYWN1dW0gRGlzdGlsbGF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyMjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj5SZWR1Y2VkIHByZXNzdXJlIGZvciBsaXF1aWRzPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIzNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPmRlY29tcG9zaW5nIGF0IG5vcm1hbCBiLnAuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjI1MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPihlLmcuIEdseWNlcm9sIGF0IDI5MCDCsEMpLjwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg1LCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIzMCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+nqiBDaHJvbWF0b2dyYXBoeSAmYW1wOyBSZjwvdGV4dD4KICAgIDxyZWN0IHg9Ijc1IiB5PSI0OCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0ZGRiIgcng9IjQiIHN0cm9rZT0iIzg4OCIvPgogICAgPGxpbmUgeDE9Ijc1IiB5MT0iMTgwIiB4Mj0iMTU1IiB5Mj0iMTgwIiBzdHJva2U9IiNGRjAwN0YiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9Ijc1IiB5MT0iNjUiIHgyPSIxNTUiIHkyPSI2NSIgc3Ryb2tlPSIjMDBDODUzIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjE4MCIgcj0iNCIgZmlsbD0iIzg4OCIvPgogICAgPGNpcmNsZSBjeD0iMTE1IiBjeT0iMTEwIiByPSI1IiBmaWxsPSIjRkYwMDdGIi8+CiAgICA8bGluZSB4MT0iMTY1IiB5MT0iMTgwIiB4Mj0iMTY1IiB5Mj0iNjUiIHN0cm9rZT0iIzAwQzg1MyIgc3Ryb2tlLWRhc2hhcnJheT0iMiwyIi8+CiAgICA8dGV4dCB4PSIxNzIiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMwMEM4NTMiPlNvbHZlbnQ8L3RleHQ+CiAgICA8bGluZSB4MT0iNjUiIHkxPSIxODAiIHgyPSI2NSIgeTI9IjExMCIgc3Ryb2tlPSIjRkYwMDdGIiBzdHJva2UtZGFzaGFycmF5PSIyLDIiLz4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxNDgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkYwMDdGIj5Db21wb3VuZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJfZiBGb3JtdWxhOjwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIyMzUiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTUiIHJ4PSI2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+CiAgICA8dGV4dCB4PSIxMTUiIHk9IjI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRpc3RhbmNlIGJ5IENvbXBvdW5kPC90ZXh0PgogICAgPGxpbmUgeDE9IjM1IiB5MT0iMjYyIiB4Mj0iMTk1IiB5Mj0iMjYyIiBzdHJva2U9IiNGRkYiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGlzdGFuY2UgYnkgU29sdmVudCBGcm9udDwvdGV4dD4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjIzMCIgaGVpZ2h0PSIzMTAiIHJ4PSIxMiIgZmlsbD0icmdiYSgyNTUsMCwxMjcsMC4wNikiIHN0cm9rZT0iI0ZGMDA3RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNjZDNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+TiiBRdWFudGl0YXRpdmUgRXN0aW1hdGlvbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5MaWViaWcgTWV0aG9kIChDICZhbXA7IEgpOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSI3MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPuKAoiAlQyA9ICgxMi80NCkgw5cgKG1fQ0/igoIvbSkgw5cgMTAwPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+4oCiICVIID0gKDIvMTgpIMOXIChtX0jigoJPL20pIMOXIDEwMDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+S2plbGRhaGwgTWV0aG9kICglTik6PC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEzOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNGRjY2QzQiPuKAoiAlTiA9ICgxLjQgw5cgTiDDlyBWKSAvIG08L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMTY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPkR1bWFzIE1ldGhvZCAoJU4pOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjREREIj7igKIgJU4gPSAoMjgvMjI0MDApIMOXIChWX1NUUC9tKSDDlyAxMDA8L3RleHQ+CiAgICA8dGV4dCB4PSIxNSIgeT0iMjE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPkNhcml1cyBNZXRob2QgKCVYICZhbXA7ICVTKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0RERCI+4oCiICVYID0gKEF0LlcvQWdYKSDDlyAobV9BZ1gvbSkgw5cgMTAwPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjI1MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiNEREQiPuKAoiAlUyA9ICgzMi8yMzMpIMOXIChtX0JhU0/igoQvbSkgw5cgMTAwPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 580px; height: auto; border-radius: 12px; display: block; margin: 15px auto; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.35); border: 1.5px solid #FF007F;" alt="3D Distillation & Chromatography" /><p style="color: #FF007F; font-size: 13.5px; margin-top: 8px; font-weight: 500;">Figure 8.3: 3D Distillation Setup, TLC Chromatography R_f Mechanics &amp; Quantitative Estimation</p></div>

  

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Purification Techniques for Organic Compounds</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">1. Sublimation:</b> Used when organic solid changes directly from solid to vapor upon heating without melting (e.g., Camphor, Naphthalene, Benzoic acid, Anthracene).</li>
      <li><b style="color: #FF007F;">2. Crystallization:</b> Based on differential solubility of compound and impurities in a solvent at room temperature vs boiling temperature.</li>
      <li><b style="color: #FF007F;">3. Distillation:</b>
        <br/>- <i>Simple Distillation:</i> Separates liquids differing by &gt; 25&deg;C in boiling point (e.g., Chloroform b.p. 60&deg;C and Aniline b.p. 184&deg;C).
        <br/>- <i>Fractional Distillation:</i> Separates liquids with close boiling points (&lt; 25&deg;C) using a fractionating column (e.g., crude petroleum fractions).
        <br/>- <i>Vacuum Distillation (Distillation under Reduced Pressure):</i> For liquids that decompose at or below their normal boiling points (e.g., Glycerol decomposes at 290&deg;C; distills undecomposed at 180&deg;C under 10 mm Hg).
        <br/>- <i>Steam Distillation:</i> For steam-volatile liquids immiscible with water (e.g., Aniline, Nitrobenzene, essential oils). Total vapor pressure p = p<sub>water</sub> + p<sub>organic</sub> = 1 atm; boils below 100&deg;C.
      </li>
      <li><b style="color: #FF007F;">4. Chromatography (Tswett, 1906):</b> Separation based on differential partitioning between stationary phase and mobile phase. Includes Column Chromatography, Thin Layer Chromatography (TLC: Retardation factor <b>R<sub>f</sub> = Distance moved by substance / Distance moved by solvent front</b>), and Paper Chromatography.</li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Qualitative Analysis (Lassaigne's Test)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Organic compound is fused with metallic sodium to form ionic sodium extract (Lassaigne's Filtrate):
      <br/>&bull; <b style="color: #FF007F;">Detection of Nitrogen (Prussian Blue Test):</b>
      <br/>Na + C + N &rarr; NaCN.
      <br/>Filtrate boiled with FeSO<sub>4</sub> and acidified with conc. H<sub>2</sub>SO<sub>4</sub>:
      <br/>6NaCN + FeSO<sub>4</sub> &rarr; Na<sub>4</sub>[Fe(CN)<sub>6</sub>] + Na<sub>2</sub>SO<sub>4</sub>
      <br/>Na<sub>4</sub>[Fe(CN)<sub>6</sub>] + 4Fe<sup>3+</sup> &rarr; <b>Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> (Prussian Blue Precipitate)</b>.
      <br/>&bull; <b style="color: #FF007F;">Detection of Sulfur:</b>
      <br/>(a) Sodium Nitroprusside Test: Na<sub>2</sub>S + Na<sub>2</sub>[Fe(CN)<sub>5</sub>NO] &rarr; <b>Na<sub>4</sub>[Fe(CN)<sub>5</sub>NOS] (Deep Violet / Purple coloration)</b>.
      <br/>(b) Lead Acetate Test: Na<sub>2</sub>S + (CH<sub>3</sub>COO)<sub>2</sub>Pb &rarr; <b>PbS (Black Precipitate)</b> + 2CH<sub>3</sub>COONa.
      <br/>&bull; <b style="color: #FF007F;">Detection of Halogens (Silver Nitrate Test):</b>
      <br/>NaX + AgNO<sub>3</sub> &rarr; AgX&darr;.
      <br/>- White ppt soluble in NH<sub>4</sub>OH = <b>Chloride (AgCl)</b>.
      <br/>- Pale yellow ppt sparingly soluble in NH<sub>4</sub>OH = <b>Bromide (AgBr)</b>.
      <br/>- Bright yellow ppt completely insoluble in NH<sub>4</sub>OH = <b>Iodide (AgI)</b>.
      <br/>(Lassaigne's extract must be boiled with conc. HNO<sub>3</sub> prior to AgNO<sub>3</sub> addition to decompose NaCN and Na<sub>2</sub>S into HCN&uarr; and H<sub>2</sub>S&uarr; gases, preventing false white AgCN or black Ag<sub>2</sub>S precipitates).
    </p>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(iii) Quantitative Estimation Formulas</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">1. Carbon and Hydrogen (Liebig Combustion Method):</b>
        <br/>% C = (12 / 44) &times; (Mass of CO<sub>2</sub> / Mass of compound) &times; 100
        <br/>% H = (2 / 18) &times; (Mass of H<sub>2</sub>O / Mass of compound) &times; 100
      </li>
      <li><b style="color: #FF007F;">2. Nitrogen:</b>
        <br/>- <i>Dumas Method:</i> % N = (28 / 22400) &times; (Volume of N<sub>2</sub> at STP in mL / Mass of compound) &times; 100
        <br/>- <i>Kjeldahl's Method:</i> % N = [1.4 &times; Molarity of acid &times; Volume of acid consumed (mL)] / Mass of compound
        <br/>(Note: Kjeldahl's method fails for compounds containing nitrogen in nitro groups -NO<sub>2</sub>, azo groups -N=N-, or pyridine ring systems).
      </li>
      <li><b style="color: #FF007F;">3. Halogens (Carius Method):</b>
        <br/>% Cl = (35.5 / 143.5) &times; (Mass of AgCl / Mass of compound) &times; 100
        <br/>% Br = (80 / 188) &times; (Mass of AgBr / Mass of compound) &times; 100
        <br/>% I = (127 / 235) &times; (Mass of AgI / Mass of compound) &times; 100
      </li>
      <li><b style="color: #FF007F;">4. Sulfur (Carius Method):</b>
        <br/>% S = (32 / 233) &times; (Mass of BaSO<sub>4</sub> / Mass of compound) &times; 100
      </li>
      <li><b style="color: #FF007F;">5. Phosphorus:</b>
        <br/>% P = (62 / 222) &times; (Mass of Mg<sub>2</sub>P<sub>2</sub>O<sub>7</sub> / Mass of compound) &times; 100
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(74, 0, 80, 0.85)); border: 2px solid #FF007F; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #FF007F; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 8 Formula Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(255, 0, 127, 0.25); color: #FF007F; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Organic Concept / Technique</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Equation / Formula</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Applications &amp; Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Retardation Factor (R<sub>f</sub>):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">R<sub>f</sub> = d<sub>substance</sub> / d<sub>solvent</sub></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">TLC &amp; paper chromatography (0 &le; R<sub>f</sub> &le; 1)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Liebig % Carbon:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">% C = (12 / 44) &times; (m<sub>CO2</sub> / m) &times; 100</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Absorbed in KOH tubes</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Liebig % Hydrogen:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">% H = (2 / 18) &times; (m<sub>H2O</sub> / m) &times; 100</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Absorbed in anhydrous CaCl<sub>2</sub> tubes</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Dumas % Nitrogen:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">% N = (28 / 22400) &times; (V<sub>STP</sub> / m) &times; 100</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">All nitrogen compounds converted to N<sub>2</sub></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Kjeldahl % Nitrogen:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">% N = (1.4 &times; M &times; V) / m</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Fails for nitro, azo, and pyridine nitrogen</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Carius % Halogen:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">% X = (At. mass X / M<sub>AgX</sub>) &times; (m<sub>AgX</sub> / m) &times; 100</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Precipitated as AgCl, AgBr, or AgI</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Carius % Sulfur:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">% S = (32 / 233) &times; (m<sub>BaSO4</sub> / m) &times; 100</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Precipitated as BaSO<sub>4</sub></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Carbocation Stability:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>+</sup></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Hyperconjugation (9 &alpha;-H) + +I inductive</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Chem8HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(121, 40, 202, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Hybridization, IUPAC Rules, Electronic Effects &amp; Qualitative Lassaigne Basics</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: What is Catenation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The unique property of carbon atoms to link together through covalent bonds forming chains and rings.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: What is the hybridization and bond angle in Methane (CH4)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>3</sup> hybridized with bond angle 109&deg;28'.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is the hybridization of each carbon in Ethene (C2H4)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>2</sup> hybridized with bond angle 120&deg;.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: What is the hybridization of each carbon in Ethyne (C2H2)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp hybridized with bond angle 180&deg;.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Arrange sp, sp2, and sp3 carbon atoms in order of increasing electronegativity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>3</sup> (25% s) &lt; sp<sup>2</sup> (33.3% s) &lt; sp (50% s).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: Define Chain Isomerism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Isomerism arising from differences in the branching of the carbon chain skeleton.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Give an example of Position Isomers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      But-1-ene and But-2-ene (or Propan-1-ol and Propan-2-ol).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Give an example of Functional Group Isomers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ethanol (CH<sub>3</sub>CH<sub>2</sub>OH) and Dimethyl ether (CH<sub>3</sub>OCH<sub>3</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What is Metamerism?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Isomerism caused by different alkyl groups attached to the same bivalent functional group (e.g., Diethyl ether vs Methyl propyl ether).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What is Tautomerism?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A dynamic chemical equilibrium between two interconvertible constitutional isomers (e.g., keto-enol tautomerism).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Define the Inductive Effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Permanent polarization of a &sigma;-bond due to electronegativity difference between bonded atoms.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Which alkyl group shows the strongest +I effect: Methyl, Ethyl, or tert-Butyl?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      tert-Butyl group -(CH<sub>3</sub>)<sub>3</sub>C.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: Which group shows a stronger -I effect: -NO2 or -F?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -NO<sub>2</sub> group.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What is the Electromeric Effect?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The temporary complete transfer of a &pi;-electron pair to one of the bonded atoms in the presence of an attacking reagent.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Is the Inductive Effect permanent or temporary?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Permanent.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Is the Electromeric Effect permanent or temporary?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Temporary.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Define Resonance (Mesomeric) Effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Permanent electronic polarity produced in a conjugated system via interaction of &pi;-bonds or a &pi;-bond and a lone pair.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Give two examples of groups showing +R effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -OH and -NH<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Give two examples of groups showing -R effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -NO<sub>2</sub> and -CHO.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: Define Hyperconjugation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Delocalization of &sigma;-electrons of an &alpha;-C-H bond with an adjacent empty p-orbital or &pi;-orbital.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Why is hyperconjugation called 'No-Bond Resonance'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because in the contributing canonical structures, there is no formal bond between carbon and the &alpha;-hydrogen.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Define Homolytic Fission.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Symmetrical cleavage of a covalent bond where each bonded atom retains one electron, producing free radicals.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Define Heterolytic Fission.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Unsymmetrical cleavage of a covalent bond where one atom takes both bonding electrons, producing ions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What is a Carbocation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A chemical species containing a trivalent carbon with 6 valence electrons and a formal positive charge.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What is the hybridization and geometry of a Carbocation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>2</sup> hybridized and trigonal planar.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: What is a Carbanion?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A chemical species containing a trivalent carbon with 8 valence electrons (including a lone pair) and a formal negative charge.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: What is the hybridization and geometry of a Carbanion?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>3</sup> hybridized and trigonal pyramidal.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is a Free Radical?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A neutral atom or group possessing an unpaired odd electron (7 valence electrons).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Define an Electrophile.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An electron-deficient species capable of accepting an electron pair (Lewis acid).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Define a Nucleophile.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An electron-rich species capable of donating an electron pair (Lewis base).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Classify AlCl3 as an electrophile or nucleophile.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Electrophile (incomplete octet, vacant p-orbital).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: Classify :NH3 as an electrophile or nucleophile.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nucleophile (contains a lone pair of electrons).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: What is an Ambident Nucleophile?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A nucleophile possessing two different nucleophilic donor atoms (e.g., CN<sup>-</sup>, NO<sub>2</sub><sup>-</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What is the principle of Steam Distillation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Used to purify steam-volatile, water-immiscible liquids; boiling occurs when p<sub>total</sub> = p<sub>water</sub> + p<sub>organic</sub> = 1 atm at &lt; 100&deg;C.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: When is Vacuum Distillation used?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For purifying liquids that decompose at or below their normal boiling points (e.g., Glycerol).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What is Retardation Factor (R_f) in chromatography?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      R<sub>f</sub> = (Distance traveled by substance) / (Distance traveled by solvent front).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Why is sodium metal fused with an organic compound in Lassaigne's test?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      To convert covalently bound N, S, and halogens into ionic, water-soluble sodium salts (NaCN, Na<sub>2</sub>S, NaX).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is the composition of the Prussian Blue precipitate in Lassaigne's test?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ferri-ferrocyanide: Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Why does Lassaigne's test fail for Hydrazine (NH2-NH2)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hydrazine contains nitrogen but no carbon atom, so it cannot form sodium cyanide (NaCN).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Name two nitrogen-containing groups for which Kjeldahl's method is NOT applicable.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nitro groups (-NO<sub>2</sub>) and Azo groups (-N=N-).
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(121, 40, 202, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Intermediate Stabilities, SN1 vs SN2, Markownikoff Additions &amp; Quantitative Dumas/Kjeldahl Numericals</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain why the tertiary (3°) carbocation is more stable than the primary (1°) carbocation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Tertiary carbocations like (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> have: (1) <b style="color: #FF007F;">Hyperconjugation:</b> 9 &alpha;-hydrogens capable of hyperconjugative no-bond resonance delocalization compared to only 3 &alpha;-H in ethyl cation, (2) <b style="color: #FF007F;">+I Inductive Effect:</b> Three electron-releasing methyl groups disperse the positive charge onto the central carbon, decreasing potential energy and maximizing thermodynamic stability.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Write the IUPAC names for: (a) CH3-CH(OH)-CH2-COOH, (b) CH3-CH=CH-CHO, (c) (CH3)3C-CH2-CH(CH3)2.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FF007F;">3-Hydroxybutanoic acid</b> (-COOH gets priority locant 1).<br/>(b) <b style="color: #FF007F;">But-2-enal</b> (-CHO gets priority locant 1, principal chain contains double bond at position 2).<br/>(c) <b style="color: #FF007F;">2,2,4-Trimethylpentane</b> (Longest continuous carbon chain has 5 carbons; numbering from left gives lowest locant set 2,2,4 vs 2,4,4).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the difference between +I and -I effects with three chemical examples of each.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">+I Effect (Electron-Donating):</b> Groups that release electron density along a &sigma;-chain relative to hydrogen. Examples: -(CH<sub>3</sub>)<sub>3</sub>C, -CH(CH<sub>3</sub>)<sub>2</sub>, -CH<sub>2</sub>CH<sub>3</sub>. Decreases acidity of carboxylic acids.<br/><b style="color: #FF007F;">-I Effect (Electron-Withdrawing):</b> Groups that attract electron density toward themselves relative to hydrogen due to higher electronegativity. Examples: -NO<sub>2</sub>, -CN, -F. Increases acidity of carboxylic acids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain why Trichloroacetic acid (CCl3COOH) is a much stronger acid than Acetic acid (CH3COOH).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In CCl<sub>3</sub>COOH, the three strongly electronegative Chlorine atoms exert powerful cumulative <b>-I (electron-withdrawing) effects</b>. This disperses the negative charge of the carboxylate anion (CCl<sub>3</sub>COO<sup>-</sup>), strongly stabilizing the conjugate base. In CH<sub>3</sub>COOH, the methyl group exerts a <b>+I (electron-releasing) effect</b>, which intensifies the negative charge on the carboxylate ion, destabilizing it.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain the chemical principle and procedure of Lassaigne's Test for the detection of Nitrogen.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Fusion:</b> Organic compound is fused with molten Sodium: <b>Na + C + N &rarr; NaCN</b>.<br/>2. <b style="color: #FF007F;">Reaction:</b> The aqueous extract is boiled with freshly prepared FeSO<sub>4</sub> and NaOH to convert CN<sup>-</sup> to hexacyanoferrate(II): <b>6NaCN + FeSO<sub>4</sub> &rarr; Na<sub>4</sub>[Fe(CN)<sub>6</sub>] + Na<sub>2</sub>SO<sub>4</sub></b>.<br/>3. <b style="color: #FF007F;">Acidification:</b> Acidifying with conc. H<sub>2</sub>SO<sub>4</sub> oxidizes some Fe<sup>2+</sup> to Fe<sup>3+</sup>, which reacts to yield: <b>4Fe<sup>3+</sup> + 3[Fe(CN)<sub>6</sub>]<sup>4-</sup> &rarr; Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> (Prussian Blue precipitate)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Explain the tests used to detect Sulfur in an organic compound from Lassaigne's filtrate.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fusion converts Sulfur to Sodium sulfide: 2Na + S &rarr; Na<sub>2</sub>S.<br/>1. <b style="color: #FF007F;">Lead Acetate Test:</b> A portion of extract is acidified with acetic acid and lead acetate is added: <b>Na<sub>2</sub>S + (CH<sub>3</sub>COO)<sub>2</sub>Pb &rarr; PbS&darr; (Black precipitate) + 2CH<sub>3</sub>COONa</b>.<br/>2. <b style="color: #FF007F;">Sodium Nitroprusside Test:</b> Extract is treated with sodium nitroprusside: <b>Na<sub>2</sub>S + Na<sub>2</sub>[Fe(CN)<sub>5</sub>NO] &rarr; Na<sub>4</sub>[Fe(CN)<sub>5</sub>NOS] (Deep Violet/Purple coloration)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Why is Lassaigne's extract boiled with concentrated HNO3 before testing for halogens with AgNO3?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      If the organic compound contains Nitrogen or Sulfur, the extract contains NaCN and Na<sub>2</sub>S. Adding AgNO<sub>3</sub> directly would precipitate white silver cyanide (AgCN) or black silver sulfide (Ag<sub>2</sub>S), interfering with halogen detection. Boiling with conc. HNO<sub>3</sub> decomposes them into volatile gases: <b>NaCN + HNO<sub>3</sub> &rarr; NaNO<sub>3</sub> + HCN&uarr;</b> and <b>Na<sub>2</sub>S + 2HNO<sub>3</sub> &rarr; 2NaNO<sub>3</sub> + H<sub>2</sub>S&uarr;</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain the difference between S_N1 and S_N2 mechanisms in terms of kinetics, intermediates, and stereochemistry.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Kinetics:</b> S<sub>N</sub>1 is unimolecular 1st order (Rate = k[R-X]); S<sub>N</sub>2 is bimolecular 2nd order (Rate = k[R-X][Nu<sup>-</sup>]).<br/>2. <b style="color: #FF007F;">Mechanism:</b> S<sub>N</sub>1 is a 2-step process proceeding via a planar <b>carbocation intermediate</b>; S<sub>N</sub>2 is a 1-step concerted process via a <b>pentacoordinate transition state</b>.<br/>3. <b style="color: #FF007F;">Stereochemistry:</b> S<sub>N</sub>1 leads to <b>racemization</b> (attack on both planar faces); S<sub>N</sub>2 leads to complete <b>Walden Inversion</b> (100% backside attack).<br/>4. <b style="color: #FF007F;">Substrate Reactivity:</b> S<sub>N</sub>1: 3&deg; &gt; 2&deg; &gt; 1&deg;; S<sub>N</sub>2: CH<sub>3</sub>X &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain Markownikoff's Rule and the Peroxide Effect (Kharasch Effect) with propene and HBr.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Markownikoff's Rule:</b> In electrophilic addition of an unsymmetrical reagent (H-X) to an unsymmetrical alkene, the negative part adds to the carbon with fewer hydrogens: <b>CH<sub>3</sub>-CH=CH<sub>2</sub> + HBr &rarr; CH<sub>3</sub>-CH(Br)-CH<sub>3</sub> (2-Bromopropane)</b> via more stable 2&deg; carbocation.<br/><b style="color: #FF007F;">Peroxide Effect:</b> In the presence of organic peroxides (R-O-O-R), addition of HBr proceeds via a free radical mechanism to yield the <b>Anti-Markownikoff product: CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>Br (1-Bromopropane)</b>. The Br<sup>&bull;</sup> radical adds first to generate the more stable 2&deg; radical.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain why the Peroxide Effect is observed with HBr but NOT with HCl or HI.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the free radical chain propagation: (1) Radical addition of halogen: R-CH=CH<sub>2</sub> + X<sup>&bull;</sup> &rarr; R-CH<sup>&bull;</sup>-CH<sub>2</sub>X, (2) Radical abstraction: R-CH<sup>&bull;</sup>-CH<sub>2</sub>X + HX &rarr; R-CH<sub>2</sub>-CH<sub>2</sub>X + X<sup>&bull;</sup>.<br/>- For <b style="color: #FF007F;">HBr</b>, both propagation steps are exothermic (&Delta;H &lt; 0), allowing a self-sustaining chain.<br/>- For <b style="color: #FF007F;">HCl</b>, the H-Cl bond is too strong (431 kJ/mol), making Step 2 endothermic.<br/>- For <b style="color: #FF007F;">HI</b>, the H-I bond is weak, but I<sup>&bull;</sup> radicals combine rapidly into I<sub>2</sub> molecules (2I<sup>&bull;</sup> &rarr; I<sub>2</sub>) rather than adding to the alkene (Step 1 is endothermic).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain Saytzeff's (Zaitsev's) Rule in dehydrohalogenation reactions with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When an alkyl halide undergoes &beta;-elimination with alcoholic KOH, the hydrogen is preferentially removed from the &beta;-carbon atom bearing fewer hydrogen atoms, yielding the <b>more substituted and more stable alkene as the major product</b>.<br/>Example: Dehydrohalogenation of 2-Bromobutane:<br/><b>CH<sub>3</sub>-CH<sub>2</sub>-CH(Br)-CH<sub>3</sub> + alc. KOH &rarr; CH<sub>3</sub>-CH=CH-CH<sub>3</sub> (But-2-ene, 80% Major) + CH<sub>3</sub>-CH<sub>2</sub>-CH=CH<sub>2</sub> (But-1-ene, 20% Minor)</b>.<br/>But-2-ene is stabilized by 6 hyperconjugative &alpha;-hydrogens vs only 2 &alpha;-H in but-1-ene.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: In Liebig's method, 0.2475 g of an organic compound gave 0.4950 g of CO2 and 0.2025 g of H2O. Calculate the percentages of Carbon and Hydrogen.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">% Carbon:</b><br/>% C = (12 / 44) &times; (Mass of CO<sub>2</sub> / Mass of compound) &times; 100<br/>% C = (12 / 44) &times; (0.4950 / 0.2475) &times; 100 = (12 / 44) &times; 2 &times; 100 = <b>54.55%</b>.<br/>2. <b style="color: #FF007F;">% Hydrogen:</b><br/>% H = (2 / 18) &times; (Mass of H<sub>2</sub>O / Mass of compound) &times; 100<br/>% H = (2 / 18) &times; (0.2025 / 0.2475) &times; 100 = (1 / 9) &times; 0.8182 &times; 100 = <b>9.09%</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: In Kjeldahl's method, 0.50 g of an organic compound was digested. The evolved NH3 was absorbed in 50 mL of 0.1 M H2SO4. The excess acid required 60 mL of 0.1 M NaOH for neutralization. Calculate the percentage of Nitrogen.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Total moles of H<sub>2</sub>SO<sub>4</sub> taken = (50 &times; 0.1) / 1000 = 0.005 mol.<br/>Milliequivalents of H<sub>2</sub>SO<sub>4</sub> taken = 50 &times; 0.1 &times; 2 = 10 meq.<br/>2. Milliequivalents of NaOH required for unreacted acid = 60 &times; 0.1 &times; 1 = 6 meq.<br/>3. Milliequivalents of acid neutralized by NH<sub>3</sub> = 10 - 6 = 4 meq.<br/>Volume of 0.1 M equivalent acid consumed = 4 / (0.1 &times; 2) = 20 mL.<br/>% N = (1.4 &times; Milliequivalents of acid consumed) / Mass of compound<br/>% N = (1.4 &times; 4) / 0.50 = 5.6 / 0.50 = <b>11.2%</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: In a Carius determination, 0.1890 g of an organic compound yielded 0.2870 g of Silver chloride (AgCl). Calculate the percentage of Chlorine. (At. mass Ag = 108, Cl = 35.5).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Molar mass of AgCl = 108 + 35.5 = 143.5 g mol<sup>-1</sup>.<br/>% Cl = (35.5 / 143.5) &times; (Mass of AgCl / Mass of compound) &times; 100<br/>% Cl = (35.5 / 143.5) &times; (0.2870 / 0.1890) &times; 100<br/>% Cl = 0.24739 &times; 1.5185 &times; 100 = <b>37.57%</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: In a Carius determination, 0.1570 g of an organic substance gave 0.4813 g of Barium sulfate (BaSO4). Calculate the percentage of Sulfur. (At. mass Ba = 137, S = 32, O = 16).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Molar mass of BaSO<sub>4</sub> = 137 + 32 + 64 = 233 g mol<sup>-1</sup>.<br/>% S = (32 / 233) &times; (Mass of BaSO<sub>4</sub> / Mass of compound) &times; 100<br/>% S = (32 / 233) &times; (0.4813 / 0.1570) &times; 100<br/>% S = 0.13734 &times; 3.0656 &times; 100 = <b>42.10%</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Explain the principle of Steam Distillation and write two of its industrial applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Purifies organic substances that are steam-volatile and completely immiscible with water. According to Dalton's law of partial pressures, the mixture boils when total vapor pressure equals atmospheric pressure: <b>p = p<sub>water</sub> + p<sub>organic</sub> = 1 atm</b>.<br/>Since p<sub>water</sub> contributes significantly, the liquid mixture boils at a temperature <b>below 100&deg;C</b>, preventing thermal decomposition.<br/>Applications: (1) Extraction and isolation of essential oils (eucalyptus, clove oil), (2) Industrial purification of Aniline and Nitrobenzene.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Explain Thin Layer Chromatography (TLC): Preparation of plate, development, and R_f calculation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A stationary phase (thin layer of silica gel or alumina adsorbent, ~0.2 mm thick) is coated on a glass or aluminum plate. A small drop of solution is spotted near the base. The plate is placed vertically in a closed developing chamber containing an organic eluent (mobile phase). Capillary action draws the solvent up. Components separate based on differential adsorption.<br/>After development, spots are visualized (UV light or iodine chamber) and Retardation Factor calculated: <b>R<sub>f</sub> = (Distance of spot from baseline) / (Distance of solvent front from baseline)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain why the tropylium carbocation (C7H7<sup>+</sup>) is exceptionally stable.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The tropylium ion is a 7-membered planar ring containing 6 &pi;-electrons completely delocalized over all seven sp<sup>2</sup> carbon atoms. According to <b>Hückel's Rule (4n + 2 &pi;-electrons, where n = 1)</b>, it is completely aromatic. This extensive aromatic resonance energy makes the tropylium cation unusually stable—far more stable than typical aliphatic carbocations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Differentiate between Electrophiles and Nucleophiles with four comparative criteria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Definition:</b> Electrophiles are electron-deficient (Lewis acids); Nucleophiles are electron-rich (Lewis bases).<br/>2. <b style="color: #FF007F;">Nature of Charge:</b> Electrophiles are positively charged or neutral with vacant orbitals; Nucleophiles are negatively charged or neutral with unshared electron pairs.<br/>3. <b style="color: #FF007F;">Target Site:</b> Electrophiles attack electron-rich centers (multiple bonds, carbanions); Nucleophiles attack electron-deficient centers (carbocations, carbonyl carbons).<br/>4. <b style="color: #FF007F;">Examples:</b> Electrophiles: H<sup>+</sup>, NO<sub>2</sub><sup>+</sup>, AlCl<sub>3</sub>; Nucleophiles: OH<sup>-</sup>, CN<sup>-</sup>, :NH<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the concept of Tautomerism using Acetoacetic ester as an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Tautomerism is an intramolecular functional isomerism wherein a hydrogen atom oscillates between a carbon and an electronegative atom (oxygen):<br/><b>CH<sub>3</sub>-CO-CH<sub>2</sub>-COOC<sub>2</sub>H<sub>5</sub> (Keto form, 93%) &hArr; CH<sub>3</sub>-C(OH)=CH-COOC<sub>2</sub>H<sub>5</sub> (Enol form, 7%)</b>.<br/>The enol form is stabilized by: (1) Extended &pi;-conjugation with the ester carbonyl group, (2) Intramolecular hydrogen bonding between the enolic -OH and the ester carbonyl oxygen (6-membered pseudo-ring).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain why methyl carbanion (CH3<sup>-</sup>) is more stable than the tert-butyl carbanion ((CH3)3C<sup>-</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In carbanions, the central carbon already bears an unshared pair of electrons and a formal negative charge. Alkyl groups exert a <b>+I (electron-releasing) inductive effect</b>. In the tert-butyl carbanion, three methyl groups push electron density onto the negatively charged carbon, heavily increasing electron density and destabilizing it. Methyl carbanion has no alkyl groups, making it the most stable aliphatic carbanion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Arrange the following free radicals in order of increasing stability and give reason: (CH3)3C•, CH3•, (CH3)2CH•, CH3CH2•.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>CH<sub>3</sub><sup>&bull;</sup> &lt; CH<sub>3</sub>CH<sub>2</sub><sup>&bull;</sup> (1&deg;) &lt; (CH<sub>3</sub>)<sub>2</sub>CH<sup>&bull;</sup> (2&deg;) &lt; (CH<sub>3</sub>)<sub>3</sub>C<sup>&bull;</sup> (3&deg;)</b>.<br/>Reason: Carbon free radicals are electron-deficient (7 valence electrons). They are stabilized primarily by <b>hyperconjugation</b> with &alpha;-hydrogens: tert-Butyl radical has 9 &alpha;-H hyperconjugative structures, isopropyl has 6 &alpha;-H, ethyl has 3 &alpha;-H, and methyl has 0 &alpha;-H.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain why Phenol is more acidic than Ethanol using resonance structures of Phenoxide ion.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When Phenol loses H<sup>+</sup>, it forms the <b>Phenoxide ion (C<sub>6</sub>H<sub>5</sub>O<sup>-</sup>)</b>. The negative charge on oxygen is delocalized over the ortho and para positions of the benzene ring through five canonical resonance structures, significantly stabilizing the conjugate base.<br/>When Ethanol loses H<sup>+</sup>, it forms the <b>Ethoxide ion (CH<sub>3</sub>CH<sub>2</sub>O<sup>-</sup>)</b>, where the negative charge remains localized strictly on the oxygen atom and is further intensified by the +I effect of the ethyl group.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Give two examples of reactions that proceed via: (a) Free Radical Intermediate, (b) Carbocation Intermediate.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FF007F;">Free Radical Intermediate:</b> (1) Chlorination of Methane in presence of UV light: CH<sub>4</sub> + Cl<sub>2</sub> &rarr; CH<sub>3</sub>Cl + HCl, (2) Anti-Markownikoff addition of HBr to propene in presence of benzoyl peroxide.<br/>(b) <b style="color: #FF007F;">Carbocation Intermediate:</b> (1) Acid-catalyzed dehydration of ethanol to ethene, (2) S<sub>N</sub>1 hydrolysis of tert-butyl bromide: (CH<sub>3</sub>)<sub>3</sub>C-Br + OH<sup>-</sup> &rarr; (CH<sub>3</sub>)<sub>3</sub>C-OH + Br<sup>-</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain the difference between Inductive Effect and Electromeric Effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Permanency:</b> Inductive effect is a permanent property of the ground state molecule; Electromeric effect is a temporary polarizability operating only in the presence of an attacking reagent.<br/>2. <b style="color: #FF007F;">Electrons Involved:</b> Inductive involves displacement of &sigma;-bonding electrons; Electromeric involves complete transfer of &pi;-bonding electrons.<br/>3. <b style="color: #FF007F;">Charge:</b> Inductive produces partial charges (&delta;+, &delta;-); Electromeric produces complete formal charges (+, -).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain why Pyridine (C5H5N) does NOT yield accurate nitrogen percentage in Kjeldahl's method.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In Kjeldahl's method, organic nitrogen must be quantitatively converted into ammonium sulfate (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> by boiling with concentrated H<sub>2</sub>SO<sub>4</sub>. The pyridine ring is an extraordinarily stable, electron-deficient aromatic heterocycle; under standard digestion conditions, the nitrogen atom embedded inside the ring resists cleavage and fails to form ammonium sulfate, leading to severely deficient nitrogen values.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the term 'Retardation Factor (Rf)' in chromatography and state two factors that influence its value.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      R<sub>f</sub> is the ratio of the distance moved by the solute component to the distance moved by the solvent front from the starting baseline: <b>R<sub>f</sub> = d<sub>substance</sub> / d<sub>solvent</sub></b>.<br/>Factors influencing R<sub>f</sub>: (1) Nature and polarity of the stationary phase (adsorbent), (2) Nature and composition of the mobile phase (solvent system), (3) Temperature and chamber saturation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain why the bond length of all carbon-carbon bonds in Benzene is equal (139 pm).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the Kekulé structures of benzene, alternating single (154 pm) and double (134 pm) bonds exist. However, &pi;-electrons are completely delocalized across all six p-orbitals of the planar sp<sup>2</sup> carbon ring. The actual molecule is a resonance hybrid with an intermediate carbon-carbon bond order of 1.5, making all six C-C bond lengths identically <b>139 pm</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: What happens when sodium extract containing both Nitrogen and Sulfur is treated with FeCl3 without adding FeSO4?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When both N and S are present, sodium fusion forms Sodium thiocyanate: <b>Na + C + N + S &rarr; NaSCN</b>.<br/>When treated with neutral FeCl<sub>3</sub>, it forms a blood-red colored coordination complex of Ferric thiocyanate: <b>Fe<sup>3+</sup> + 3SCN<sup>-</sup> &rarr; [Fe(SCN)<sub>3</sub>] (Blood-Red Complex)</b>. (No Prussian blue is formed because free CN<sup>-</sup> ions are absent).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Draw all structural isomers of Pentane (C5H12) and give their IUPAC names.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      C<sub>5</sub>H<sub>12</sub> forms three chain isomers:<br/>1. <b>CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub>:</b> Pentane (n-Pentane).<br/>2. <b>CH<sub>3</sub>-CH(CH<sub>3</sub>)-CH<sub>2</sub>-CH<sub>3</sub>:</b> 2-Methylbutane (Isopentane).<br/>3. <b>(CH<sub>3</sub>)<sub>4</sub>C:</b> 2,2-Dimethylpropane (Neopentane).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain why boiling point of Neopentane (9.5°C) is much lower than n-Pentane (36°C).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Both are non-polar alkanes possessing identical molecular masses (72 g/mol), bound by weak London dispersion forces. Branching causes neopentane to assume a compact spherical shape with a much smaller surface area of contact compared to the extended zigzag chain of n-pentane. Smaller surface area weakens intermolecular dispersion forces, lowering the boiling point.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain why an organic compound must be dried before carrying out a melting point determination.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Moisture acts as an impurity. According to Raoult's law of colligative properties, the presence of an impurity lowers the freezing/melting point of a crystalline substance and broadens its melting point range. To obtain a sharp, accurate characteristic melting point, the substance must be thoroughly desiccated.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain why Aniline is purified by Steam Distillation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Aniline boils at 184&deg;C at atmospheric pressure, but undergoes dark oxidative and thermal decomposition near this temperature. It is steam-volatile and completely immiscible with water. During steam distillation, the mixture boils when p<sub>water</sub> + p<sub>aniline</sub> = 1 atm, which occurs at <b>98.5&deg;C</b>. Aniline distills smoothly with water vapor below 100&deg;C without undergoing decomposition.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain why tertiary alkyl halides do NOT undergo S_N2 substitution reactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In S<sub>N</sub>2 substitution, the incoming nucleophile must perform a backside attack on the electrophilic carbon at 180&deg; relative to the departing halide. In tertiary alkyl halides (e.g., tert-butyl bromide), three bulky methyl groups create massive <b>steric hindrance</b>, completely blocking the path of the incoming nucleophile and forcing the reaction to proceed via the S<sub>N</sub>1 pathway instead.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: What is the function of boiling chips (porcelain pieces) during laboratory distillation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Boiling chips provide jagged nucleation sites for smooth bubble formation, promoting even and continuous vaporization and preventing <b>bumping</b> (superheating of the liquid followed by violent expulsion of liquid into the condenser).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain why Acetic acid dimers exist in non-polar solvents like Benzene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In non-polar solvents like benzene, acetic acid molecules form cyclic dimers held together by two strong <b>intermolecular hydrogen bonds</b> between the carbonyl oxygen of one molecule and the hydroxyl hydrogen of another. This doubles its apparent molecular weight to 120 g/mol.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain the difference between Distillation and Sublimation as purification methods.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Distillation:</b> Separates liquids based on differences in boiling points through a phase transformation sequence: Liquid &rarr; Vapor &rarr; Liquid (Condensation).<br/><b style="color: #FF007F;">Sublimation:</b> Purifies solids that undergo direct phase change: Solid &rarr; Vapor &rarr; Solid (Deposition) on a cold finger without passing through an intermediate liquid state.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: What is the effect of hybridization on the C-H bond length and bond strength in Ethane, Ethene, and Ethyne?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      - <b style="color: #FF007F;">Ethane (sp<sup>3</sup>):</b> 25% s-character; C-H bond length = 110 pm; bond energy = 414 kJ/mol.<br/>- <b style="color: #FF007F;">Ethene (sp<sup>2</sup>):</b> 33.3% s-character; C-H bond length = 108 pm; bond energy = 444 kJ/mol.<br/>- <b style="color: #FF007F;">Ethyne (sp):</b> 50% s-character; C-H bond length = 106 pm; bond energy = 506 kJ/mol.<br/>Higher s-character holds bonding electrons tighter to the nucleus, making the bond shorter and stronger.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain why Allyl carbocation (CH2=CH-CH2<sup>+</sup>) is more stable than Propyl carbocation (CH3-CH2-CH2<sup>+</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The allyl carbocation is stabilized by <b>&pi;-electron resonance delocalization</b> between two equivalent canonical structures: [CH<sub>2</sub>=CH-CH<sub>2</sub><sup>+</sup> &hArr; <sup>+</sup>CH<sub>2</sub>-CH=CH<sub>2</sub>], dispersing the positive charge over two terminal carbon atoms. The propyl carbocation is a simple primary carbocation stabilized only by weak inductive and hyperconjugative effects without resonance.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: What is meant by 'Decarboxylation'? Give one reaction example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Decarboxylation is the chemical elimination of a carboxyl group from a carboxylic acid or its salt as carbon dioxide (CO<sub>2</sub>).<br/>Example: Heating anhydrous sodium acetate with soda-lime (NaOH + CaO in 3:1 ratio): <b>CH<sub>3</sub>COONa + NaOH &rarr; CH<sub>4(g)</sub> (Methane) + Na<sub>2</sub>CO<sub>3</sub></b>.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(121, 40, 202, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Comprehensive Mechanism Proofs, Aromaticity Hückel Formulations &amp; Master Organic Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss Electronic Displacements in Covalent Bonds: Inductive, Electromeric, Resonance, and Hyperconjugation in exhaustive comparative depth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Inductive Effect (&plusmn;I):</b> Permanent polarization along &sigma;-framework driven by electronegativity gradient. Diminishes across 3 carbons. Governs carboxylic acidity (-I enhances; +I diminishes) and base strength.<br/><br/><b style="color: #FF007F;">2. Electromeric Effect (&plusmn;E):</b> Temporary complete transfer of &pi;-electron pair to one atom induced by an attacking reagent. +E: electrons shift toward reagent (alkene + H<sup>+</sup>); -E: electrons shift away from reagent (carbonyl + CN<sup>-</sup>).<br/><br/><b style="color: #FF007F;">3. Resonance Effect (&plusmn;R):</b> Permanent polarity via overlap of &pi;-orbitals or &pi;-bonds with unshared pairs. Delocalizes electron density across conjugated networks. +R groups (-OH, -NH<sub>2</sub>) activate benzene ring at ortho/para positions; -R groups (-NO<sub>2</sub>, -CHO) deactivate benzene ring.<br/><br/><b style="color: #FF007F;">4. Hyperconjugation (No-Bond Resonance):</b> Overlap of &sigma; C-H orbital with adjacent vacant/partially filled p or &pi;* orbital. Governs stability of carbocations (3&deg; &gt; 2&deg; &gt; 1&deg;), free radicals, and alkene heats of hydrogenation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Explain the Classification and Stability of Reactive Intermediates: Carbocations, Carbanions, and Free Radicals with complete orbital diagrams and electronic factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Carbocations:</b> Planar sp<sup>2</sup>, 6 valence electrons, vacant 2p orbital. Stabilized by: (a) Resonance (tropylium &gt; triphenylmethyl &gt; benzyl &gt; allyl), (b) Hyperconjugation (3&deg; has 9 &alpha;-H &gt; 2&deg; has 6 &alpha;-H &gt; 1&deg; has 3 &alpha;-H), (c) +I effect.<br/><br/><b style="color: #FF007F;">2. Carbanions:</b> Pyramidal sp<sup>3</sup>, 8 valence electrons, unshared lone pair. Destabilized by +I alkyl groups; stabilized by electron-withdrawing groups (-I, -R) and higher s-character: sp (acetylide) &gt; sp<sup>2</sup> (vinyl) &gt; sp<sup>3</sup> (ethyl). Aliphatic stability: CH<sub>3</sub><sup>-</sup> &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;.<br/><br/><b style="color: #FF007F;">3. Free Radicals:</b> Planar/near-planar sp<sup>2</sup>, 7 valence electrons, unpaired electron. Stability mimics carbocations: Benzyl &gt; Allyl &gt; 3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>&bull;</sup> via hyperconjugation and allylic resonance.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Detail the Mechanisms of Nucleophilic Substitution Reactions (S_N1 and S_N2): Kinetics, Energy Profiles, Stereochemistry, Solvent Effects, and Substrate Dependence.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. S<sub>N</sub>1 Mechanism:</b><br/>&bull; Step 1 (Slow, Rate-determining): Ionization of R-X to form planar carbocation: R-X &rarr; R<sup>+</sup> + X<sup>-</sup>.<br/>&bull; Step 2 (Fast): Nucleophile attacks planar carbocation equally from front or back: R<sup>+</sup> + Nu<sup>-</sup> &rarr; R-Nu.<br/>&bull; Kinetics: Rate = k[R-X] (1st order). Favored by 3&deg; substrates, polar protic solvents (H<sub>2</sub>O, EtOH). Leads to <b>racemization</b>.<br/><br/><b>2. S<sub>N</sub>2 Mechanism:</b><br/>&bull; Single concerted step: Nucleophile performs backside attack as leaving group departs simultaneously via a pentacoordinate transition state [Nu&bull;&bull;&bull;C&bull;&bull;&bull;X]<sup>&Dagger;</sup>.<br/>&bull; Kinetics: Rate = k[R-X][Nu<sup>-</sup>] (2nd order). Favored by 1&deg; and methyl halides, polar aprotic solvents (DMF, DMSO, acetone). Produces <b>100% Walden Inversion</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Explain Electrophilic Addition to Alkenes: Markownikoff's Rule, Carbocation Rearrangements, and the Free-Radical Peroxide Effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Electrophilic Addition (Ionic Mechanism):</b><br/>&bull; Step 1: Electrophile H<sup>+</sup> attacks &pi;-bond, producing the more stable carbocation (Markownikoff rule: H adds to carbon with more H's).<br/>&bull; Step 2: Nucleophile (Br<sup>-</sup>) captures the carbocation.<br/>&bull; Carbocation Rearrangements: If a less stable carbocation can rearrange to a more stable tertiary carbocation via 1,2-hydride or 1,2-methyl shift, rearrangement product predominates (e.g., 3-methylbut-1-ene + HCl &rarr; 2-chloro-2-methylbutane).<br/><br/><b style="color: #FF007F;">2. Peroxide Mechanism (Kharasch Effect):</b> Organic peroxides generate alkoxy radicals R-O<sup>&bull;</sup> which abstract H from HBr to produce Br<sup>&bull;</sup>. Br<sup>&bull;</sup> adds first to terminal carbon to yield the more stable secondary free radical, yielding anti-Markownikoff 1-bromopropane.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Discuss the Qualitative Analysis of Organic Compounds: Complete Chemistry of Lassaigne's Test for Nitrogen, Sulfur, and Halogens with balanced equations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Sodium Fusion:</b> 2Na + C + N &rarr; NaCN; 2Na + S &rarr; Na<sub>2</sub>S; Na + X &rarr; NaX.<br/><br/><b style="color: #FF007F;">2. Nitrogen Chemistry:</b><br/>FeSO<sub>4</sub> + 2NaOH &rarr; Fe(OH)<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub><br/>6NaCN + Fe(OH)<sub>2</sub> &rarr; Na<sub>4</sub>[Fe(CN)<sub>6</sub>] + 2NaOH<br/>3Na<sub>4</sub>[Fe(CN)<sub>6</sub>] + 4FeCl<sub>3</sub> &rarr; <b>Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> (Prussian Blue)</b> + 12NaCl.<br/><br/><b style="color: #FF007F;">3. Sulfur Chemistry:</b><br/>Na<sub>2</sub>S + Na<sub>2</sub>[Fe(CN)<sub>5</sub>NO] &rarr; <b>Na<sub>4</sub>[Fe(CN)<sub>5</sub>NOS] (Purple)</b>.<br/>Na<sub>2</sub>S + (CH<sub>3</sub>COO)<sub>2</sub>Pb &rarr; <b>PbS (Black)</b> + 2CH<sub>3</sub>COONa.<br/><br/><b style="color: #FF007F;">4. Halogen Chemistry:</b> Extract boiled with conc. HNO<sub>3</sub>, then AgNO<sub>3</sub> added: NaX + AgNO<sub>3</sub> &rarr; AgX&darr;. AgCl (White, soluble in NH<sub>4</sub>OH); AgBr (Pale yellow, sparingly soluble); AgI (Yellow, insoluble).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss the Quantitative Estimation of Nitrogen in Organic Compounds: Comparative Analysis of Dumas and Kjeldahl Methods with Mathematical Derivations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Dumas Method:</b> Compound heated with dry CuO in CO<sub>2</sub> atmosphere. All nitrogen oxidizes to N<sub>2</sub> gas, collected over KOH in a nitrometer: C<sub>x</sub>H<sub>y</sub>N<sub>z</sub> + (2x + y/2)CuO &rarr; xCO<sub>2</sub> + (y/2)H<sub>2</sub>O + (z/2)N<sub>2</sub> + (2x + y/2)Cu.<br/>Volume of N<sub>2</sub> converted to STP (P<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = P<sub>0</sub>V<sub>0</sub>/T<sub>0</sub>):<br/><b>% N = (28 / 22400) &times; (V<sub>0</sub> / m) &times; 100</b>.<br/><br/><b style="color: #FF007F;">2. Kjeldahl's Method:</b> Compound digested with conc. H<sub>2</sub>SO<sub>4</sub> in presence of K<sub>2</sub>SO<sub>4</sub> and CuSO<sub>4</sub> catalyst. Nitrogen converts to (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>. Boiled with excess NaOH; evolved NH<sub>3</sub> is absorbed in standard acid. Unreacted acid titrated against standard NaOH:<br/><b>% N = [1.4 &times; M &times; V<sub>consumed</sub>] / m</b>.<br/>Fails for compounds containing -NO<sub>2</sub>, -N=N-, or ring nitrogen (pyridine).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain the Separation and Purification Techniques: Fractional Distillation, Vacuum Distillation, and Chromatography with underlying physical principles.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Fractional Distillation:</b> Employs fractionating column for liquids with &Delta;T<sub>b</sub> &lt; 25&deg;C. Repeated vaporization-condensation cycles enrich vapor in more volatile component.<br/><br/><b style="color: #FF007F;">2. Vacuum Distillation:</b> Liquid boils when vapor pressure equals external pressure. Lowering pressure allows high-boiling or heat-sensitive compounds to distill below decomposition temperature (Glycerol at 180&deg;C under 10 mmHg).<br/><br/><b style="color: #FF007F;">3. Chromatography:</b> Differential distribution between mobile and stationary phases based on adsorption or partition. Solutes migrate at characteristic velocities dictated by affinity and partition coefficient.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Discuss the IUPAC Nomenclature of Polyfunctional Organic Compounds: Seniority of Functional Groups, Numbering Schemes, and Four Detailed Examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Seniority Hierarchy:</b> -COOH &gt; -SO<sub>3</sub>H &gt; -COOR &gt; -COCl &gt; -CONH<sub>2</sub> &gt; -CN &gt; -CHO &gt; &gt;C=O &gt; -OH &gt; -SH &gt; -NH<sub>2</sub> &gt; C=C &gt; C&equiv;C.<br/><br/><b style="color: #FF007F;">2. Principles:</b> Highest seniority group becomes secondary suffix; all other functional groups are relegated to prefixes (e.g., -OH becomes hydroxy, -NH<sub>2</sub> becomes amino, =O becomes oxo/keto). Longest continuous carbon chain must contain principal functional group.<br/><br/><b style="color: #FF007F;">3. Examples:</b><br/>&bull; CH<sub>3</sub>-CO-CH<sub>2</sub>-CH<sub>2</sub>-COOH: <b>4-Oxopentanoic acid</b>.<br/>&bull; CH<sub>2</sub>(OH)-CH(NH<sub>2</sub>)-CH<sub>2</sub>-COOH: <b>3-Amino-4-hydroxybutanoic acid</b>.<br/>&bull; CH<sub>3</sub>-CH(Cl)-CH=CH-CHO: <b>4-Chloropent-2-enal</b>.<br/>&bull; HOOC-CH<sub>2</sub>-CH(OH)-COOH: <b>2-Hydroxybutanedioic acid (Malic acid)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain the Concept of Aromaticity: Hückel's Rule (4n + 2), Annulenes, Non-Benzenoid Aromatics, and Antiaromaticity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Hückel's Rule:</b> A monocyclic, planar, fully conjugated system possessing <b>(4n + 2) &pi;-electrons</b> (where n = 0, 1, 2, 3...) exhibits exceptional thermodynamic stability (aromatic resonance energy).<br/><br/><b style="color: #FF007F;">2. Criteria:</b> (1) Cyclic, (2) Complete planarity (sp<sup>2</sup> hybridization), (3) Unbroken conjugation, (4) (4n + 2) &pi;-electrons.<br/><br/><b style="color: #FF007F;">3. Systems:</b><br/>&bull; <i>Aromatic:</i> Benzene (n=1, 6&pi;), Cyclopentadienyl anion (n=1, 6&pi;), Tropylium cation (n=1, 6&pi;), Naphthalene (n=2, 10&pi;).<br/>&bull; <i>Antiaromatic:</i> Planar conjugated rings with <b>4n &pi;-electrons</b> (e.g., Cyclobutadiene, 4&pi;); extraordinarily unstable.<br/>&bull; <i>Non-Aromatic:</i> Non-planar systems (e.g., Cyclooctatetraene adopts tub shape to avoid antiaromaticity).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Explain the Quantitative Estimation of Halogens, Sulfur, and Phosphorus by the Carius Method with derivations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Halogens:</b> Compound heated with fuming HNO<sub>3</sub> and AgNO<sub>3</sub> in a sealed Carius tube. Carbon and hydrogen oxidize to CO<sub>2</sub> and H<sub>2</sub>O; halogen forms insoluble AgX precipitate. Filtered, washed, dried, and weighed:<br/><b>% X = (Atomic mass of X / Molecular mass of AgX) &times; (Mass of AgX / Mass of compound) &times; 100</b>.<br/><br/><b style="color: #FF007F;">2. Sulfur:</b> Heated with fuming HNO<sub>3</sub> to oxidize sulfur to H<sub>2</sub>SO<sub>4</sub>. Precipitated as BaSO<sub>4</sub> by adding BaCl<sub>2</sub>:<br/><b>% S = (32 / 233) &times; (Mass of BaSO<sub>4</sub> / Mass of compound) &times; 100</b>.<br/><br/><b style="color: #FF007F;">3. Phosphorus:</b> Heated with fuming HNO<sub>3</sub> to form H<sub>3</sub>PO<sub>4</sub>. Precipitated with magnesia mixture as MgNH<sub>4</sub>PO<sub>4</sub>, which on ignition yields magnesium pyrophosphate (Mg<sub>2</sub>P<sub>2</sub>O<sub>7</sub>):<br/><b>% P = (62 / 222) &times; (Mass of Mg<sub>2</sub>P<sub>2</sub>O<sub>7</sub> / Mass of compound) &times; 100</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain Elimination Reactions: Detailed Comparison of E1 and E2 Mechanisms, Regioselectivity (Saytzeff vs Hofmann), and Stereoelectronic Factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. E1 Mechanism (Elimination Unimolecular):</b> 2-step process. Step 1: Slow ionization of R-X to form carbocation. Step 2: Base abstracts &beta;-proton to form alkene. Rate = k[R-X]. Competes with S<sub>N</sub>1.<br/><br/><b style="color: #FF007F;">2. E2 Mechanism (Elimination Bimolecular):</b> 1-step concerted process. Base removes &beta;-proton as leaving group departs simultaneously. Rate = k[R-X][Base]. Requires <b>anti-periplanar geometry</b> (H and X in opposite planes at 180&deg;).<br/><br/><b style="color: #FF007F;">3. Regioselectivity:</b><br/>&bull; <i>Saytzeff Product:</i> More substituted, thermodynamically stable alkene (formed with small bases like alc. KOH or NaOEt).<br/>&bull; <i>Hofmann Product:</i> Less substituted alkene (formed when leaving group is bulky like -N<sup>+</sup>(CH<sub>3</sub>)<sub>3</sub>, or base is sterically hindered like potassium tert-butoxide).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Explain the Structural Theory of Isomerism in complete depth: Chain, Position, Functional, Metamerism, and Tautomerism with illustrative examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Chain:</b> Different carbon skeletons (n-Pentane, Isopentane, Neopentane).<br/><b style="color: #FF007F;">2. Position:</b> Same skeleton and functional group, differing in locant (But-1-ene vs But-2-ene; 1-Chloropropane vs 2-Chloropropane).<br/><b style="color: #FF007F;">3. Functional:</b> Same formula, different functional groups (Ethanol vs Dimethyl ether; Propanal vs Acetone; Propanenitrile vs Propyl isocyanide).<br/><b style="color: #FF007F;">4. Metamerism:</b> Different alkyl groups attached to a polyvalent heteroatom (Diethyl ether vs Methyl propyl ether; Diethylamine vs Methylpropylamine).<br/><b style="color: #FF007F;">5. Tautomerism:</b> Spontaneous chemical equilibrium between constitutional isomers differing in the position of a proton and &pi;-bond (Keto-enol tautomerism in acetone and ethyl acetoacetate).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Discuss the Chemistry of Free Radicals: Generation, Electronic Structure, Relative Stability, and Role in Atmospheric Ozone Depletion.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Generation:</b> Formed by homolytic cleavage of covalent bonds via UV photolysis or thermal initiation (e.g., Cl<sub>2</sub> &rarr; 2Cl<sup>&bull;</sup>).<br/><br/><b style="color: #FF007F;">2. Structure:</b> Planar or near-planar sp<sup>2</sup> hybridized with 7 valence electrons.<br/><br/><b style="color: #FF007F;">3. Stability:</b> Stabilized by hyperconjugation and resonance: Triphenylmethyl &gt; Benzyl &gt; Allyl &gt; 3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>&bull;</sup>.<br/><br/><b style="color: #FF007F;">4. Ozone Depletion:</b> Chlorofluorocarbons (CFCs) release chlorine radicals in stratosphere under UV light: CF<sub>2</sub>Cl<sub>2</sub> &rarr; CF<sub>2</sub>Cl<sup>&bull;</sup> + Cl<sup>&bull;</sup>. Catalytic cycle: Cl<sup>&bull;</sup> + O<sub>3</sub> &rarr; ClO<sup>&bull;</sup> + O<sub>2</sub>; ClO<sup>&bull;</sup> + O &rarr; Cl<sup>&bull;</sup> + O<sub>2</sub>. One Cl<sup>&bull;</sup> radical destroys ~100,000 ozone molecules.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the Acid-Base Properties of Organic Compounds based on Inductive, Resonance, and Steric Factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Carboxylic Acids:</b> Acidity governed by carboxylate anion stabilization. Electron-withdrawing groups (-I, -R) disperse negative charge, increasing acidity (Formic acid &gt; Acetic acid; Fluoroacetic &gt; Chloroacetic &gt; Bromoacetic; Benzoic acid &gt; p-methoxybenzoic acid).<br/><br/><b style="color: #FF007F;">2. Phenols:</b> Phenoxide ion stabilized by resonance over benzene ring. Nitro-phenols are highly acidic (Picric acid 2,4,6-trinitrophenol is stronger than mineral acids).<br/><br/><b style="color: #FF007F;">3. Amines (Basicity):</b> Basicity in aqueous solution is a composite of +I effect, hydration energy, and steric hindrance: <b>(CH<sub>3</sub>)<sub>2</sub>NH (2&deg;) &gt; CH<sub>3</sub>NH<sub>2</sub> (1&deg;) &gt; (CH<sub>3</sub>)<sub>3</sub>N (3&deg;) &gt; NH<sub>3</sub></b>. In gas phase: 3&deg; &gt; 2&deg; &gt; 1&deg; &gt; NH<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Discuss the Principles of Column Chromatography, Thin Layer Chromatography (TLC), and Paper Chromatography.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Column Chromatography:</b> Preparative technique. Glass column packed with stationary adsorbent (silica/alumina). Mixture added at top; solvent (eluent) percolates down. Components separate into distinct bands based on adsorption affinity and are eluted sequentially.<br/><br/><b style="color: #FF007F;">2. Thin Layer Chromatography (TLC):</b> Micro-analytical technique. Adsorbent coated on glass/foil plate. Fast separation (15-30 min), sharp spots, high resolution.<br/><br/><b style="color: #FF007F;">3. Paper Chromatography:</b> Partition chromatography. Cellulose paper fibers hold stationary water phase; mobile solvent ascends by capillary action. Solutes partition between stationary water and moving solvent according to partition coefficients.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Explain why Benzoic acid does NOT undergo Friedel-Crafts alkylation or acylation reactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Friedel-Crafts reactions require anhydrous AlCl<sub>3</sub> Lewis acid catalyst to generate carbocation/acylium electrophiles.<br/>1. The -COOH group in benzoic acid is a powerful <b>-R and -I electron-withdrawing group</b> that strongly deactivates the benzene ring, making it insufficiently nucleophilic to attack carbocations.<br/>2. The -COOH group has lone pairs on oxygen which react directly with the Lewis acid catalyst: <b>C<sub>6</sub>H<sub>5</sub>COOH + AlCl<sub>3</sub> &rarr; Complex</b>. This poisons and deactivates the catalyst, completely inhibiting the reaction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the mechanism of Acid-Catalyzed Dehydration of Ethanol to Ethene with potential energy profile.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Step 1: Protonation of Alcohol (Fast):</b> Ethanol acts as a Lewis base; lone pair on oxygen accepts H<sup>+</sup> to form ethyloxonium ion: CH<sub>3</sub>CH<sub>2</sub>OH + H<sup>+</sup> &hArr; CH<sub>3</sub>CH<sub>2</sub>-OH<sub>2</sub><sup>+</sup>.<br/><br/><b style="color: #FF007F;">2. Step 2: Carbocation Formation (Slow, Rate-Determining Step):</b> Water departs as leaving group, forming ethyl carbocation: CH<sub>3</sub>CH<sub>2</sub>-OH<sub>2</sub><sup>+</sup> &rarr; CH<sub>3</sub>-CH<sub>2</sub><sup>+</sup> + H<sub>2</sub>O.<br/><br/><b style="color: #FF007F;">3. Step 3: Deprotonation (Fast):</b> Water abstracts &beta;-proton to regenerate H<sub>3</sub>O<sup>+</sup> catalyst, forming ethene &pi;-bond: CH<sub>3</sub>-CH<sub>2</sub><sup>+</sup> + H<sub>2</sub>O &rarr; CH<sub>2</sub>=CH<sub>2</sub> + H<sub>3</sub>O<sup>+</sup>.<br/>Primary carbocation intermediate dictates an activation barrier of ~170&deg;C with conc. H<sub>2</sub>SO<sub>4</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain the Concept of Electrophilic Aromatic Substitution with the mechanism of Nitration of Benzene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Generation of Electrophile:</b> Nitronium ion (NO<sub>2</sub><sup>+</sup>) is generated by nitrating mixture (conc. HNO<sub>3</sub> + conc. H<sub>2</sub>SO<sub>4</sub>):<br/>HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> &hArr; <b>NO<sub>2</sub><sup>+</sup></b> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>-</sup>.<br/><br/><b style="color: #FF007F;">2. Formation of Arenium Ion (&sigma;-Complex, Slow Step):</b> Electrophilic NO<sub>2</sub><sup>+</sup> attacks benzene &pi;-cloud, forming a resonance-stabilized arenium ion (Wheland intermediate) where aromaticity is temporarily disrupted.<br/><br/><b style="color: #FF007F;">3. Loss of Proton (Fast Step):</b> Base (HSO<sub>4</sub><sup>-</sup>) abstracts the sp<sup>3</sup> ring proton, restoring aromatic resonance stability to yield <b>Nitrobenzene</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the Difference between Inductive, Electromeric, and Mesomeric Effects in Directing Ortho/Para vs Meta Substitution on Benzene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Ortho/Para-Directing Activators:</b> Groups with lone pairs on the atom directly attached to benzene (-OH, -NH<sub>2</sub>, -OCH<sub>3</sub>). Strong <b>+R effect</b> increases electron density selectively at ortho and para positions via resonance structures, directing incoming electrophiles to these sites.<br/>2. <b style="color: #FF007F;">Meta-Directing Deactivators:</b> Groups with positive formal charge or electronegative multiple bonds (-NO<sub>2</sub>, -CN, -COOH, -CHO). Strong <b>-R and -I effects</b> withdraw electron density from the ring, especially depleting ortho and para positions, leaving the meta position comparatively less electron-deficient.<br/>3. <b style="color: #FF007F;">Halogens (Exception):</b> Deactivating overall due to strong <b>-I effect</b>, but <b>ortho/para-directing</b> due to weak +R resonance delocalization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an exhaustive Master Synthesis Matrix correlating Electronic Displacements, Intermediates, Reaction Mechanisms, and Analytical Methods in Organic Chemistry.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Electronic Drivers:</b> Permanent &sigma; inductive (&plusmn;I), permanent &pi; resonance (&plusmn;R), temporary &pi; electromeric (&plusmn;E), and no-bond hyperconjugation govern charge distribution.<br/><br/><b style="color: #FF007F;">2. Reactive Intermediates:</b> Carbocations (sp<sup>2</sup>, 6e<sup>-</sup>, 3&deg;&gt;2&deg;&gt;1&deg;), Carbanions (sp<sup>3</sup>, 8e<sup>-</sup>, 1&deg;&gt;2&deg;&gt;3&deg;), and Free Radicals (sp<sup>2</sup>, 7e<sup>-</sup>, 3&deg;&gt;2&deg;&gt;1&deg;).<br/><br/><b style="color: #FF007F;">3. Reaction Mechanisms:</b> Nucleophilic substitution (S<sub>N</sub>1 unimolecular racemization vs S<sub>N</sub>2 bimolecular inversion), Electrophilic addition (Markownikoff rule), and &beta;-elimination (Saytzeff rule).<br/><br/><b style="color: #FF007F;">4. Purification Framework:</b> Distillation (simple, fractional, vacuum for heat-sensitive, steam for volatile immiscibles), crystallization, and TLC chromatography (R<sub>f</sub> values).<br/><br/><b style="color: #FF007F;">5. Analytical Chemistry:</b> Lassaigne's elemental detection (Prussian blue for N, nitroprusside for S, AgNO<sub>3</sub> for halogens) and quantitative estimation (Liebig C/H, Dumas/Kjeldahl N, Carius halogens/S).
    </div>
  </div>

</div>
`;

export const c11Chem8Mcqs = [
  {
    "id": "c11-chem-8-mcq-1",
    "question": "What is the hybridization of carbon in Ethyne (HC&equiv;CH)?",
    "options": [
      "A):   sp<sup>3</sup>",
      "B):   sp<sup>2</sup>",
      "C):   sp",
      "D):   dsp<sup>2</sup>"
    ],
    "correctAnswer": "c",
    "explanation": "In ethyne, each carbon forms 2 &sigma;-bonds and 2 &pi;-bonds, resulting in sp hybridization with a 180&deg; linear geometry."
  },
  {
    "id": "c11-chem-8-mcq-2",
    "question": "Which of the following carbon atoms has the highest electronegativity?",
    "options": [
      "A):   sp<sup>3</sup> hybridized carbon",
      "B):   sp<sup>2</sup> hybridized carbon",
      "C):   sp hybridized carbon",
      "D):   All have identical electronegativity"
    ],
    "correctAnswer": "c",
    "explanation": "Electronegativity increases with greater s-character: sp (50% s) &gt; sp<sup>2</sup> (33.3% s) &gt; sp<sup>3</sup> (25% s)."
  },
  {
    "id": "c11-chem-8-mcq-3",
    "question": "Ethanol (CH<sub>3</sub>CH<sub>2</sub>OH) and Dimethyl ether (CH<sub>3</sub>OCH<sub>3</sub>) are examples of:",
    "options": [
      "A):   Chain isomers",
      "B):   Position isomers",
      "C):   Functional group isomers",
      "D):   Metamers"
    ],
    "correctAnswer": "c",
    "explanation": "They possess the identical molecular formula (C<sub>2</sub>H<sub>6</sub>O) but belong to different functional group families (alcohol vs ether)."
  },
  {
    "id": "c11-chem-8-mcq-4",
    "question": "Which of the following groups exerts the strongest -I (electron-withdrawing) effect?",
    "options": [
      "A):   -CH<sub>3</sub>",
      "B):   -COOH",
      "C):   -NO<sub>2</sub>",
      "D):   -F"
    ],
    "correctAnswer": "c",
    "explanation": "The nitro group (-NO<sub>2</sub>) possesses a formal positive charge on nitrogen, making it the most powerful -I group listed."
  },
  {
    "id": "c11-chem-8-mcq-5",
    "question": "What is the order of relative stability of alkyl carbocations?",
    "options": [
      "A):   1&deg; &gt; 2&deg; &gt; 3&deg; &gt; CH<sub>3</sub><sup>+</sup>",
      "B):   3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>+</sup>",
      "C):   CH<sub>3</sub><sup>+</sup> &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;",
      "D):   2&deg; &gt; 3&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>+</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "Tertiary (3&deg;) carbocations are stabilized by 9 hyperconjugative &alpha;-hydrogens and cumulative +I effects, giving the stability order 3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>+</sup>."
  },
  {
    "id": "c11-chem-8-mcq-6",
    "question": "The geometry and hybridization of a carbocation are:",
    "options": [
      "A):   Tetrahedral and sp<sup>3</sup>",
      "B):   Trigonal planar and sp<sup>2</sup>",
      "C):   Pyramidal and sp<sup>3</sup>",
      "D):   Linear and sp"
    ],
    "correctAnswer": "b",
    "explanation": "A carbocation possesses 3 &sigma;-bonds and a vacant 2p orbital, adopting sp<sup>2</sup> trigonal planar geometry with 120&deg; bond angles."
  },
  {
    "id": "c11-chem-8-mcq-7",
    "question": "Which of the following is an Electrophile?",
    "options": [
      "A):   :NH<sub>3</sub>",
      "B):   H<sub>2</sub>O:",
      "C):   AlCl<sub>3</sub>",
      "D):   OH<sup>-</sup>"
    ],
    "correctAnswer": "c",
    "explanation": "AlCl<sub>3</sub> has an incomplete octet (6 valence electrons around Al) and acts as an electron-pair acceptor (Lewis acid / electrophile)."
  },
  {
    "id": "c11-chem-8-mcq-8",
    "question": "What is the geometry and hybridization of a typical Carbanion (e.g., CH<sub>3</sub><sup>-</sup>)?",
    "options": [
      "A):   Trigonal planar and sp<sup>2</sup>",
      "B):   Trigonal pyramidal and sp<sup>3</sup>",
      "C):   Linear and sp",
      "D):   T-shaped"
    ],
    "correctAnswer": "b",
    "explanation": "A carbanion has 3 &sigma;-bonds and one lone pair (8 electrons), adopting sp<sup>3</sup> pyramidal geometry like ammonia."
  },
  {
    "id": "c11-chem-8-mcq-9",
    "question": "The S<sub>N</sub>2 mechanism proceeds with:",
    "options": [
      "A):   100% Retention of configuration",
      "B):   100% Inversion of configuration (Walden Inversion)",
      "C):   Racemization",
      "D):   Carbocation intermediate formation"
    ],
    "correctAnswer": "b",
    "explanation": "S<sub>N</sub>2 involves concerted backside attack by the nucleophile, causing complete inversion of configuration (Walden Inversion)."
  },
  {
    "id": "c11-chem-8-mcq-10",
    "question": "According to Markownikoff's rule, the addition of HBr to Propene yields primarily:",
    "options": [
      "A):   1-Bromopropane",
      "B):   2-Bromopropane",
      "C):   1,2-Dibromopropane",
      "D):   Propane"
    ],
    "correctAnswer": "b",
    "explanation": "The electrophilic H<sup>+</sup> attaches to CH<sub>2</sub> to form the more stable 2&deg; carbocation, which then captures Br<sup>-</sup> to yield 2-Bromopropane."
  },
  {
    "id": "c11-chem-8-mcq-11",
    "question": "The Peroxide Effect (Anti-Markownikoff addition) is observed ONLY with:",
    "options": [
      "A):   HCl",
      "B):   HF",
      "C):   HBr",
      "D):   HI"
    ],
    "correctAnswer": "c",
    "explanation": "Only for HBr are both propagation steps in the free radical chain mechanism exothermic."
  },
  {
    "id": "c11-chem-8-mcq-12",
    "question": "In Lassaigne's test for nitrogen, the formation of Prussian Blue is due to:",
    "options": [
      "A):   Na<sub>4</sub>[Fe(CN)<sub>6</sub>]",
      "B):   Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>",
      "C):   Fe(OH)<sub>3</sub>",
      "D):   NaSCN"
    ],
    "correctAnswer": "b",
    "explanation": "The Prussian Blue color is caused by Ferri-ferrocyanide: Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> &bull; xH<sub>2</sub>O."
  },
  {
    "id": "c11-chem-8-mcq-13",
    "question": "Which of the following compounds will NOT give a positive Lassaigne's test for nitrogen?",
    "options": [
      "A):   Aniline (C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>)",
      "B):   Urea (NH<sub>2</sub>CONH<sub>2</sub>)",
      "C):   Hydrazine (NH<sub>2</sub>NH<sub>2</sub>)",
      "D):   Acetonitrile (CH<sub>3</sub>CN)"
    ],
    "correctAnswer": "c",
    "explanation": "Hydrazine contains nitrogen but no carbon, so it cannot form sodium cyanide (NaCN) on fusion."
  },
  {
    "id": "c11-chem-8-mcq-14",
    "question": "In Lassaigne's test, purple/violet color with sodium nitroprusside indicates the presence of:",
    "options": [
      "A):   Nitrogen",
      "B):   Sulfur",
      "C):   Chlorine",
      "D):   Phosphorus"
    ],
    "correctAnswer": "b",
    "explanation": "Sodium sulfide reacts with sodium nitroprusside to form violet Na<sub>4</sub>[Fe(CN)<sub>5</sub>NOS]."
  },
  {
    "id": "c11-chem-8-mcq-15",
    "question": "Glycerol is purified industrially by which distillation technique?",
    "options": [
      "A):   Simple distillation",
      "B):   Fractional distillation",
      "C):   Distillation under reduced pressure (Vacuum distillation)",
      "D):   Steam distillation"
    ],
    "correctAnswer": "c",
    "explanation": "Glycerol decomposes near its normal boiling point (290&deg;C), so it is distilled undecomposed at 180&deg;C under reduced pressure."
  },
  {
    "id": "c11-chem-8-mcq-16",
    "question": "Aniline is purified by:",
    "options": [
      "A):   Steam distillation",
      "B):   Sublimation",
      "C):   Crystallization",
      "D):   Chromatography only"
    ],
    "correctAnswer": "a",
    "explanation": "Aniline is steam-volatile and immiscible with water, boiling below 100&deg;C during steam distillation."
  },
  {
    "id": "c11-chem-8-mcq-17",
    "question": "The Retardation Factor (R<sub>f</sub>) value in Thin Layer Chromatography is:",
    "options": [
      "A):   Always &gt; 1",
      "B):   Always &lt; 0",
      "C):   Always between 0 and 1",
      "D):   Zero always"
    ],
    "correctAnswer": "c",
    "explanation": "R<sub>f</sub> is the ratio of solute distance to solvent front distance, so it always lies between 0.0 and 1.0."
  },
  {
    "id": "c11-chem-8-mcq-18",
    "question": "Kjeldahl's method fails for which of the following compounds?",
    "options": [
      "A):   Urea",
      "B):   Nitrobenzene",
      "C):   Acetamide",
      "D):   Glycine"
    ],
    "correctAnswer": "b",
    "explanation": "Nitrogen in nitro groups (-NO<sub>2</sub>), azo groups (-N=N-), and heterocyclic rings (pyridine) does not convert to ammonium sulfate under Kjeldahl digestion."
  },
  {
    "id": "c11-chem-8-mcq-19",
    "question": "In the Carius method, sulfur is precipitated and estimated quantitatively as:",
    "options": [
      "A):   PbS",
      "B):   BaSO<sub>4</sub>",
      "C):   H<sub>2</sub>S",
      "D):   SO<sub>2</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "Sulfur is oxidized to sulfate and precipitated with BaCl<sub>2</sub> as insoluble Barium sulfate (BaSO<sub>4</sub>)."
  },
  {
    "id": "c11-chem-8-mcq-20",
    "question": "According to Hückel's Rule, a planar cyclic conjugated system is aromatic if it contains:",
    "options": [
      "A):   4n &pi;-electrons",
      "B):   (4n + 2) &pi;-electrons",
      "C):   (2n + 1) &pi;-electrons",
      "D):   2n &pi;-electrons"
    ],
    "correctAnswer": "b",
    "explanation": "Hückel's rule requires (4n + 2) delocalized &pi;-electrons (where n = 0, 1, 2, 3...)."
  },
  {
    "id": "c11-chem-8-mcq-21",
    "question": "The IUPAC name of (CH<sub>3</sub>)<sub>3</sub>C-CH<sub>2</sub>-CH(CH<sub>3</sub>)<sub>2</sub> is:",
    "options": [
      "A):   2,4,4-Trimethylpentane",
      "B):   2,2,4-Trimethylpentane",
      "C):   Isooctane",
      "D):   Diisobutyl"
    ],
    "correctAnswer": "b",
    "explanation": "Numbering from the left gives the lowest locant set: 2,2,4-Trimethylpentane."
  },
  {
    "id": "c11-chem-8-mcq-22",
    "question": "Which of the following compounds undergoes sublimation?",
    "options": [
      "A):   Urea",
      "B):   Camphor",
      "C):   Glucose",
      "D):   Ethanol"
    ],
    "correctAnswer": "b",
    "explanation": "Camphor, naphthalene, and benzoic acid sublime directly from solid to vapor upon heating."
  },
  {
    "id": "c11-chem-8-mcq-23",
    "question": "The temporary electronic displacement that occurs only in the presence of an attacking reagent is:",
    "options": [
      "A):   Inductive effect",
      "B):   Resonance effect",
      "C):   Hyperconjugation",
      "D):   Electromeric effect"
    ],
    "correctAnswer": "d",
    "explanation": "The electromeric effect is a temporary polarizability involving complete shift of &pi;-electrons upon approach of a reagent."
  },
  {
    "id": "c11-chem-8-mcq-24",
    "question": "Saytzeff's rule predicts that dehydrohalogenation of an alkyl halide yields:",
    "options": [
      "A):   The least substituted alkene",
      "B):   The most substituted and stable alkene",
      "C):   An alkyne",
      "D):   An alkane"
    ],
    "correctAnswer": "b",
    "explanation": "Saytzeff rule dictates that the more alkyl-substituted alkene possessing greater hyperconjugative stabilization is the major product."
  },
  {
    "id": "c11-chem-8-mcq-25",
    "question": "In Dumas' method, the gas collected in the nitrometer is:",
    "options": [
      "A):   NO<sub>2</sub>",
      "B):   NH<sub>3</sub>",
      "C):   N<sub>2</sub>",
      "D):   N<sub>2</sub>O"
    ],
    "correctAnswer": "c",
    "explanation": "In Dumas' method, all organic nitrogen is converted to elemental nitrogen gas (N<sub>2</sub>) and measured over KOH solution."
  }
];
