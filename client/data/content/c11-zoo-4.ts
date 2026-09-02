// Class 11 Zoology Chapter 4: Human Physiology
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Zoology | Class: 11 | Code: c11-zoo-4

export const c11Zoo4HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.12), rgba(2, 119, 189, 0.12)); border: 1.5px solid rgba(0, 176, 255, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #00B0FF; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #00B0FF; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 4: Human Physiology</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Vital Capacity (VC):</b> The maximum volume of air a person can exhale after a forced maximum inhalation: VC = TV + IRV + ERV (~3,500 - 4,500 mL).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Cardiac Output (CO):</b> The total volume of blood pumped by each ventricle per minute: CO = Stroke Volume (70 mL) &times; Heart Rate (72 bpm) &approx; 5,000 mL/min (5 L/min).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Glomerular Filtration Rate (GFR):</b> The volume of ultrafiltrate formed by all nephrons of both kidneys per minute (~125 mL/min or 180 Liters/day in healthy adults).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Sarcomere:</b> The anatomical and functional contractile unit of a striated muscle fiber, bounded between two successive Z-lines.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Resting Membrane Potential:</b> The electrical potential difference (~ -70 mV) across the resting axonal membrane, maintained by the electrogenic Na<sup>+</sup>/K<sup>+</sup>-ATPase pump.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Second Messenger:</b> Intracellular signaling molecules (e.g., cyclic AMP, IP<sub>3</sub>, Ca<sup>2+</sup>) generated inside target cells following binding of non-lipid polypeptide hormones to surface receptors.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Breathing and Respiration
  </h2>

  <!-- FIGURE 4.1 -->
  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTAgNTUwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cmVjdCB3aWR0aD0iODUwIiBoZWlnaHQ9IjU1MCIgcng9IjE2IiBmaWxsPSIjMDkwNDE0IiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgPHRleHQgeD0iNDI1IiB5PSIzOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhVTUFOIFJFU1BJUkFUT1JZIFNZU1RFTSAmYW1wOyBBTFZFT0xBUiBHQVMgRVhDSEFOR0U8L3RleHQ+CgogIDwhLS0gTEVGVDogUmVzcGlyYXRvcnkgU3lzdGVtIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjM4MCIgaGVpZ2h0PSI0NjAiIHJ4PSIxMiIgZmlsbD0iIzBEMDcyMiIgc3Ryb2tlPSIjMDBCMEZGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBCMEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZXNwaXJhdG9yeSBUcmFjdCBBcmNoaXRlY3R1cmU8L3RleHQ+CiAgICAKICAgIDwhLS0gTmFzYWwgJiBQaGFyeW54IC0tPgogICAgPHBhdGggZD0iTSAxMjAgNzAgUSAxNDAgNzAgMTUwIDkwIEwgMTUwIDE0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTBFMEUwIiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxjaXJjbGUgY3g9IjEyMCIgY3k9IjcwIiByPSIxMCIgZmlsbD0iIzQyQTVGNSIvPgogICAgPHRleHQgeD0iNTAiIHk9Ijc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMEUwRTAiPk5hc2FsIENhdml0eTwvdGV4dD4KICAgIDxsaW5lIHgxPSIxMDAiIHkxPSI3MiIgeDI9IjExMCIgeTI9IjcyIiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogICAgPHRleHQgeD0iNTAiIHk9IjExNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTBFMEUwIj5QaGFyeW54ICZhbXA7IExhcnlueDwvdGV4dD4KICAgIDxsaW5lIHgxPSIxMzUiIHkxPSIxMTIiIHgyPSIxNTAiIHkyPSIxMTIiIHN0cm9rZT0iIzAwQjBGRiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KCiAgICA8IS0tIFRyYWNoZWEgLS0+CiAgICA8cGF0aCBkPSJNIDE1MCAxNDAgTCAxNTAgMjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPgogICAgPHRleHQgeD0iNDAiIHk9IjE4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj5UcmFjaGVhIChXaW5kcGlwZSk8L3RleHQ+CiAgICA8bGluZSB4MT0iMTMwIiB5MT0iMTc4IiB4Mj0iMTQ1IiB5Mj0iMTc4IiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogICAgPCEtLSBMdW5ncyAtLT4KICAgIDxwYXRoIGQ9Ik0gMTUwIDIyMCBRIDkwIDI0MCA4MCAzNDAgUSA4MCAzOTAgMTQwIDM4MCBMIDE1MCAyMjAgWiIgZmlsbD0icmdiYSgyNTUsIDY0LCAxMjksIDAuNCkiIHN0cm9rZT0iI0ZGNDA4MSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBkPSJNIDE1MCAyMjAgUSAyMTAgMjQwIDIyMCAzNDAgUSAyMjAgMzkwIDE2MCAzODAgTCAxNTAgMjIwIFoiIGZpbGw9InJnYmEoMjU1LCA2NCwgMTI5LCAwLjQpIiBzdHJva2U9IiNGRjQwODEiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzUiIHk9IjMyMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY0MDgxIj5SaWdodCBMdW5nPC90ZXh0PgogICAgPHRleHQgeD0iMjMwIiB5PSIzMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNDA4MSI+TGVmdCBMdW5nPC90ZXh0PgoKICAgIDwhLS0gQnJvbmNoaW9sZXMgLS0+CiAgICA8cGF0aCBkPSJNIDE1MCAyMjAgTCAxMTAgMjcwIE0gMTEwIDI3MCBMIDk1IDMxMCBNIDExMCAyNzAgTCAxMzAgMzEwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZD0iTSAxNTAgMjIwIEwgMTkwIDI3MCBNIDE5MCAyNzAgTCAxNzAgMzEwIE0gMTkwIDI3MCBMIDIwNSAzMTAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CgogICAgPCEtLSBEaWFwaHJhZ20gLS0+CiAgICA8cGF0aCBkPSJNIDYwIDQxMCBRIDE1MCAzNzAgMjQwIDQxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZENTRGIiBzdHJva2Utd2lkdGg9IjYiLz4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iNDM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQ1NEYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRpYXBocmFnbSBNdXNjbGU8L3RleHQ+CiAgPC9nPgoKICA8IS0tIFJJR0hUOiBBbHZlb2xpICYgR2FzIEV4Y2hhbmdlIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0MCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDYwIiByeD0iMTIiIGZpbGw9IiMwRDA3MjIiIHN0cm9rZT0iIzAwRTVGRiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTVGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWx2ZW9sYXIgQ2FwaWxsYXJ5IEdhcyBFeGNoYW5nZTwvdGV4dD4KCiAgICA8IS0tIEFsdmVvbHVzIENpcmNsZSAtLT4KICAgIDxjaXJjbGUgY3g9IjE5MCIgY3k9IjE4MCIgcj0iOTAiIGZpbGw9InJnYmEoMCwgMjI5LCAyNTUsIDAuMTUpIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTVGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWx2ZW9sdXMgQ2F2aXR5PC90ZXh0PgogICAgCiAgICA8IS0tIENhcGlsbGFyeSBWZXNzZWwgLS0+CiAgICA8cGF0aCBkPSJNIDYwIDE4MCBDIDEwMCAyODAgMjgwIDI4MCAzMjAgMTgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNGRjE3NDQiIHN0cm9rZS13aWR0aD0iMTIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjE3NDQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlB1bG1vbmFyeSBDYXBpbGxhcnkgQmxvb2Q8L3RleHQ+CgogICAgPCEtLSBHYXMgRXhjaGFuZ2UgQXJyb3dzIC0tPgogICAgPHBhdGggZD0iTSAxNjAgMTgwIEwgMTYwIDIyMCIgc3Ryb2tlPSIjNjZCQjZBIiBzdHJva2Utd2lkdGg9IjQiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgICA8dGV4dCB4PSIxNDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjZCQjZBIj5P4oKCPC90ZXh0PgoKICAgIDxwYXRoIGQ9Ik0gMjIwIDIyMCBMIDIyMCAxODAiIHN0cm9rZT0iI0ZGNTI1MiIgc3Ryb2tlLXdpZHRoPSI0IiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgogICAgPHRleHQgeD0iMjM1IiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGNTI1MiI+Q0/igoI8L3RleHQ+CgogICAgPCEtLSBCcmVhdGhpbmcgTWVjaGFuaXNtIEJveCAtLT4KICAgIDxyZWN0IHg9IjI1IiB5PSIzMTAiIHdpZHRoPSIzMzAiIGhlaWdodD0iMTMwIiByeD0iOCIgZmlsbD0iIzA2MDIwQyIgc3Ryb2tlPSIjRkZENTRGIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzMzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDU0RiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QnJlYXRoaW5nIE1lY2hhbmlzbSBGbG93Y2hhcnQ8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iMzcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMEUwRTAiPkluc3BpcmF0aW9uOiBEaWFwaHJhZ20gY29udHJhY3RzICZyYXJyOyBUaG9yYXggZXhwYW5kczwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSI0MDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwRTBFMCI+RXhwaXJhdGlvbjogRGlhcGhyYWdtIHJlbGF4ZXMgJnJhcnI7IFRob3JheCBjb250cmFjdHM8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iNDI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0IwQkVDNSI+SW50cmEtcHVsbW9uYXJ5IHByZXNzdXJlIGdyYWRpZW50IGNvbnRyb2xzIGFpciBmbG93PC90ZXh0PgogIDwvZz4KPC9zdmc+" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" />
  <p style="color: #00B0FF; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 4.1: Human Respiratory System Architecture, Alveolar Gas Exchange &amp; Mechanism of Breathing Flowchart</p>
</div>

  

  <!-- FIGURE 4.2 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 270" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="270" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#00B0FF" font-size="13.5" font-weight="bold" text-anchor="middle">
        Oxygen-Hemoglobin Dissociation Curve &amp; The Bohr Effect
      </text>
      <!-- Left: Sigmoid Curve Graph -->
      <g transform="translate(25, 42)">
        <rect width="215" height="210" rx="6" fill="rgba(0, 176, 255, 0.1)" stroke="#00B0FF" stroke-width="1.2"/>
        <text x="107" y="20" fill="#00B0FF" font-size="10.5" font-weight="bold" text-anchor="middle">Sigmoid Saturation Curve</text>
        <line x1="30" y1="180" x2="195" y2="180" stroke="#CBD5E1" stroke-width="1"/>
        <line x1="30" y1="180" x2="30" y2="35" stroke="#CBD5E1" stroke-width="1"/>
        <!-- Sigmoid S-Curve -->
        <path d="M 30,178 Q 75,175 100,110 T 190,50" fill="none" stroke="#FF007F" stroke-width="2.5"/>
        <!-- Shift Right (Bohr) -->
        <path d="M 30,178 Q 95,175 125,125 T 190,70" fill="none" stroke="#FF9100" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="107" y="75" fill="#FF007F" font-size="8" font-weight="bold" text-anchor="middle">Normal Curve</text>
        <text x="135" y="145" fill="#FF9100" font-size="8" font-weight="bold" text-anchor="middle">Shift Right (Bohr)</text>
        <text x="110" y="194" fill="#CBD5E1" font-size="7.5" text-anchor="middle">pO<sub>2</sub> (mm Hg) &rarr;</text>
        <text x="10" y="110" fill="#CBD5E1" font-size="7.5" transform="rotate(-90 10,110)" text-anchor="middle">% Hb Saturation</text>
      </g>
      <!-- Right: Shift Factors & CO2 Transport -->
      <g transform="translate(260, 42)">
        <rect width="215" height="210" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.2)"/>
        <text x="107" y="20" fill="#69F0AE" font-size="10.5" font-weight="bold" text-anchor="middle">Bohr Effect: Right Shift Factors</text>
        <text x="15" y="42" fill="#FFFFFF" font-size="8.5">&bull; <b>High pCO<sub>2</sub>:</b> In metabolizing tissues</text>
        <text x="15" y="60" fill="#FFFFFF" font-size="8.5">&bull; <b>High [H<sup>+</sup>] / Low pH:</b> Lactic acidosis</text>
        <text x="15" y="78" fill="#FFFFFF" font-size="8.5">&bull; <b style="color: #00B0FF;">High Temperature:</b> Muscle exercise</text>
        <text x="15" y="96" fill="#FFFFFF" font-size="8.5">&bull; <b style="color: #00B0FF;">High 2,3-BPG:</b> Facilitates O<sub>2</sub> unloading</text>
        <line x1="15" y1="106" x2="200" y2="106" stroke="rgba(255,255,255,0.15)"/>
        <text x="107" y="124" fill="#FFE082" font-size="10" font-weight="bold" text-anchor="middle">Modes of CO<sub>2</sub> Transport in Blood</text>
        <text x="15" y="144" fill="#FFFFFF" font-size="8.5">1. <b>Bicarbonate (HCO<sub>3</sub><sup>-</sup>): ~70%</b></text>
        <text x="25" y="158" fill="#CBD5E1" font-size="7.5">(Carbonic Anhydrase + Chloride Shift)</text>
        <text x="15" y="174" fill="#FFFFFF" font-size="8.5">2. <b>Carbamino-Hb: ~20-25%</b></text>
        <text x="15" y="192" fill="#FFFFFF" font-size="8.5">3. <b>Dissolved in Plasma: ~7%</b></text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 4.2: Oxygen-Hemoglobin Dissociation Sigmoid Curve, Factors Inducing Right Shift (Bohr Effect in Tissues) &amp; The 3 Modes of Blood CO<sub>2</sub> Transport
  </div>
</div>


  <h3 style="color: #00B0FF; margin-top: 18px; font-size: 16.5px;">(i) Human Respiratory System Architecture</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The human respiratory tract comprises conducting and respiratory zones:
      <br/>- External nostrils &rarr; Nasal cavity &rarr; Pharynx &rarr; <b>Larynx (Voice box)</b> with cartilaginous Epiglottis preventing food aspiration &rarr; <b>Trachea (Windpipe)</b> supported by C-shaped hyaline cartilaginous rings &rarr; Primary, secondary, tertiary bronchi &rarr; Terminal Bronchioles &rarr; Thin-walled, highly vascularized <b>Alveoli (~300 million in lungs)</b>.
      <br/>- <b style="color: #00B0FF;">Diffusion Membrane:</b> A microscopic barrier &lt;0.5 mm thick consisting of three layers: (1) Squamous epithelium of alveoli, (2) Endothelium of alveolar capillaries, and (3) Intervening thin basement membrane. High surface area (~100 m<sup>2</sup>) enables rapid diffusion of O<sub>2</sub> and CO<sub>2</sub> down partial pressure gradients.
    </p>
  </div>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(ii) Mechanism of Breathing &amp; Gas Transport</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">Inspiration:</b> Active process. Contraction of the <b>Diaphragm</b> (flattens downward) and <b>External Intercostal Muscles</b> (lifts ribs and sternum upward and outward) increases thoracic volume, dropping intra-pulmonary pressure below atmospheric pressure (-1 mm Hg), causing air influx.</li>
      <li><b style="color: #00B0FF;">Expiration:</b> Passive process at rest. Relaxation of diaphragm (arches dome-shaped) and external intercostals reduces thoracic volume, increasing intra-pulmonary pressure, expelling air. Forced expiration recruits abdominal muscles and internal intercostals.</li>
      <li><b style="color: #00B0FF;">Oxygen Transport:</b> 97% transported bound to Hemoglobin as <b>Oxyhemoglobin (Hb<sub>4</sub>O<sub>8</sub>)</b>; 3% dissolved in plasma. Each Hb molecule binds up to 4 molecules of O<sub>2</sub> cooperatively, producing a classic <b>Sigmoid Dissociation Curve</b>. High pO<sub>2</sub> in alveoli promotes HbO<sub>2</sub> formation; high pCO<sub>2</sub>, high [H<sup>+</sup>], and elevated temperature in tissues induce the <b>Bohr Effect</b> (right shift of curve), releasing O<sub>2</sub>.</li>
      <li><b style="color: #00B0FF;">Carbon Dioxide Transport:</b> ~70% as <b>Bicarbonate Ions (HCO<sub>3</sub><sup>-</sup>)</b> inside RBCs via the zinc enzyme <b>Carbonic Anhydrase</b> (accompanied by the <b>Chloride Shift / Hamburger Phenomenon</b>); ~20-25% as <b>Carbaminohemoglobin</b>; and ~7% dissolved in plasma.</li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Body Fluids and Circulation
  </h2>

  <!-- FIGURE 4.3 -->
  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTAgNTUwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cmVjdCB3aWR0aD0iODUwIiBoZWlnaHQ9IjU1MCIgcng9IjE2IiBmaWxsPSIjMDkwNDE0IiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgPHRleHQgeD0iNDI1IiB5PSIzOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNUUlVDVFVSRSBPRiBIVU1BTiBIRUFSVCAmYW1wOyBTVEFOREFSRCBFQ0cgVFJBQ0U8L3RleHQ+CgogIDwhLS0gTEVGVDogSGVhcnQgQW5hdG9teSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDYwIiByeD0iMTIiIGZpbGw9IiMwRDA3MjIiIHN0cm9rZT0iI0ZGMTc0NCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGMTc0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NC1DaGFtYmVyZWQgSGVhcnQgQW5hdG9teTwvdGV4dD4KCiAgICA8IS0tIEhlYXJ0IE91dGxpbmUgLS0+CiAgICA8cGF0aCBkPSJNIDEyMCAxMjAgQyA4MCAxODAgODAgMzIwIDE5MCA0MTAgQyAzMDAgMzIwIDMwMCAxODAgMjYwIDEyMCBaIiBmaWxsPSJyZ2JhKDI1NSwgMjMsIDY4LCAwLjI1KSIgc3Ryb2tlPSIjRkYxNzQ0IiBzdHJva2Utd2lkdGg9IjMiLz4KICAgIAogICAgPCEtLSBTZXB0dW0gLS0+CiAgICA8bGluZSB4MT0iMTkwIiB5MT0iMTIwIiB4Mj0iMTkwIiB5Mj0iNDAwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iNCIvPgogICAgPGxpbmUgeDE9IjkwIiB5MT0iMjMwIiB4Mj0iMjkwIiB5Mj0iMjMwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iNCIvPgoKICAgIDwhLS0gQ2hhbWJlcnMgTGFiZWxzIC0tPgogICAgPHJlY3QgeD0iMTA1IiB5PSIxNTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI1MCIgcng9IjYiIGZpbGw9IiMxNTY1QzAiLz4KICAgIDx0ZXh0IHg9IjE0MCIgeT0iMTgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJpZ2h0IEF0cml1bTwvdGV4dD4KCiAgICA8cmVjdCB4PSIyMDUiIHk9IjE1MCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjUwIiByeD0iNiIgZmlsbD0iI0M2MjgyOCIvPgogICAgPHRleHQgeD0iMjQwIiB5PSIxODAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TGVmdCBBdHJpdW08L3RleHQ+CgogICAgPHJlY3QgeD0iMTA1IiB5PSIyNzAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI2MCIgcng9IjYiIGZpbGw9IiMxNTY1QzAiLz4KICAgIDx0ZXh0IHg9IjE0MCIgeT0iMzA1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJpZ2h0IFZlbnRyaWNsZTwvdGV4dD4KCiAgICA8cmVjdCB4PSIyMDUiIHk9IjI3MCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjYwIiByeD0iNiIgZmlsbD0iI0M2MjgyOCIvPgogICAgPHRleHQgeD0iMjQwIiB5PSIzMDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TGVmdCBWZW50cmljbGU8L3RleHQ+CgogICAgPCEtLSBNYWpvciBWZXNzZWxzIC0tPgogICAgPHRleHQgeD0iMTkwIiB5PSI4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY1MjUyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Bb3J0YSAmYW1wOyBQdWxtb25hcnkgQXJ0ZXJ5PC90ZXh0PgogICAgPHRleHQgeD0iMTkwIiB5PSI0NDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDU0RiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0EgTm9kZSAoUGFjZW1ha2VyKSAmYW1wOyBBViBWYWx2ZXM8L3RleHQ+CiAgPC9nPgoKICA8IS0tIFJJR0hUOiBFQ0cgVHJhY2UgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjM4MCIgaGVpZ2h0PSI0NjAiIHJ4PSIxMiIgZmlsbD0iIzBEMDcyMiIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TdGFuZGFyZCBFQ0cgR3JhcGggVHJhY2U8L3RleHQ+CgogICAgPCEtLSBFQ0cgV2F2ZSBQYXRoIC0tPgogICAgPHBhdGggZD0iTSA0MCAyMjAgTCA5MCAyMjAgUSAxMTAgMTgwIDEyNSAyMjAgTCAxNDAgMjQwIEwgMTU1IDkwIEwgMTc1IDI3MCBMIDE5MCAyMjAgTCAyMzAgMjIwIFEgMjU1IDE2MCAyODAgMjIwIEwgMzQwIDIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjQiLz4KCiAgICA8IS0tIFdhdmUgTGFiZWxzIC0tPgogICAgPGNpcmNsZSBjeD0iMTEwIiBjeT0iMTk1IiByPSIxNCIgZmlsbD0iI0ZGRDU0RiIvPgogICAgPHRleHQgeD0iMTEwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UDwvdGV4dD4KICAgIDx0ZXh0IHg9IjExMCIgeT0iMTY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQ1NEYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkF0cmlhbCBEZXBvbC48L3RleHQ+CgogICAgPGNpcmNsZSBjeD0iMTU1IiBjeT0iODAiIHI9IjE2IiBmaWxsPSIjRkYxNzQ0Ii8+CiAgICA8dGV4dCB4PSIxNTUiIHk9Ijg1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlFSUzwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1NSIgeT0iNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGMTc0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmVudHJpY3VsYXIgRGVwb2wuPC90ZXh0PgoKICAgIDxjaXJjbGUgY3g9IjI2MCIgY3k9IjE4MCIgcj0iMTQiIGZpbGw9IiM2NkJCNkEiLz4KICAgIDx0ZXh0IHg9IjI2MCIgeT0iMTg1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyNjAiIHk9IjE1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjZCQjZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WZW50cmljdWxhciBSZXBvbC48L3RleHQ+CgogICAgPCEtLSBFQ0cgU3VtbWFyeSBCb3ggLS0+CiAgICA8cmVjdCB4PSIyNSIgeT0iMzEwIiB3aWR0aD0iMzMwIiBoZWlnaHQ9IjEzMCIgcng9IjgiIGZpbGw9IiMwNjAyMEMiIHN0cm9rZT0iIzAwQjBGRiIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVDRyBDbGluaWNhbCBQYXJhbWV0ZXJzPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjM2NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBQLVdhdmU6IEF0cmlhbCBjb250cmFjdGlvbiAvIGRlcG9sYXJpemF0aW9uPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjM5MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBRUlMgQ29tcGxleDogVmVudHJpY3VsYXIgY29udHJhY3Rpb248L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iNDE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0UwRTBFMCI+4oCiIFQtV2F2ZTogVmVudHJpY3VsYXIgcmVjb3ZlcnkgLyByZWxheGF0aW9uPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" />
  <p style="color: #00B0FF; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 4.3: Structure of Human Heart, 4 Chambers, Major Vessels &amp; Standard ECG Trace Graph</p>
</div>

  

  <h3 style="color: #00B0FF; margin-top: 18px; font-size: 16.5px;">(i) Human Heart Structure &amp; Cardiac Cycle</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The human heart is a 4-chambered myogenic muscular organ enclosed in double-walled pericardium:
      <br/>- <b style="color: #00B0FF;">Chambers &amp; Valves:</b> Right Atrium and Right Ventricle separated by the <b>Tricuspid Valve</b>; Left Atrium and Left Ventricle separated by the <b>Bicuspid (Mitral) Valve</b>. Semilunar valves guard the origins of the Pulmonary Artery and Aorta.
      <br/>- <b style="color: #00B0FF;">Nodal Tissue:</b> Self-excitable specialized cardiac muscle. <b>Sino-Atrial Node (SAN / Pacemaker)</b> located in the upper right wall of right atrium generates rhythmic action potentials at 70-75 beats/min. Spreads through Atrio-Ventricular Node (AVN) &rarr; Bundle of His &rarr; <b>Purkinje Fibers</b> in ventricular walls.
      <br/>- <b style="color: #00B0FF;">Cardiac Cycle (0.8 seconds duration):</b>
        <br/>1. <i>Joint Diastole (0.4 s):</i> All four chambers relaxed; ventricles fill passively (~70%).
        <br/>2. <i>Atrial Systole (0.1 s):</i> SAN fires; atria contract, pumping remaining 30% of blood into ventricles.
        <br/>3. <i>Ventricular Systole (0.3 s):</i> Ventricles contract; AV valves close snap-shut creating the first heart sound <b>'LUBB'</b>; semilunar valves open, ejecting ~70 mL blood (Stroke Volume).
        <br/>4. <i>Ventricular Diastole:</i> Semilunar valves snap shut creating the second heart sound <b>'DUPP'</b>.
    </p>
  </div>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(ii) Double Circulation &amp; Electrocardiogram (ECG)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">Complete Double Circulation:</b> Blood flows through the heart twice during a single complete systemic circuit, preventing oxygenated and deoxygenated blood from mixing:
        <br/>- <b style="color: #00B0FF;">Pulmonary Circulation:</b> Right Ventricle &rarr; Pulmonary Artery &rarr; Lungs &rarr; Pulmonary Veins &rarr; Left Atrium.
        <br/>- <b style="color: #00B0FF;">Systemic Circulation:</b> Left Ventricle &rarr; Aorta &rarr; Systemic Capillaries &rarr; Venae Cavae &rarr; Right Atrium.
      </li>
      <li><b style="color: #00B0FF;">Standard ECG Waves (Einthoven):</b>
        <br/>- <b style="color: #00B0FF;">P Wave:</b> Atrial depolarization (activation of SAN leading to atrial contraction).
        <br/>- <b style="color: #00B0FF;">QRS Complex:</b> Ventricular depolarization (triggers ventricular contraction). The number of QRS complexes in a minute indicates heart rate.
        <br/>- <b style="color: #00B0FF;">T Wave:</b> Ventricular repolarization (return of ventricles from excited to resting state).
      </li>
    </ul>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Excretory Products and Their Elimination
  </h2>

  <!-- FIGURE 4.4 -->
  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTAgNTUwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cmVjdCB3aWR0aD0iODUwIiBoZWlnaHQ9IjU1MCIgcng9IjE2IiBmaWxsPSIjMDkwNDE0IiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgPHRleHQgeD0iNDI1IiB5PSIzOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhVTUFOIEVYQ1JFVE9SWSBTWVNURU0gJmFtcDsgTkVQSFJPTiBGSU5FIFNUUlVDVFVSRTwvdGV4dD4KCiAgPCEtLSBMRUZUOiBFeGNyZXRvcnkgU3lzdGVtIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCA2MCkiPgogICAgPHJlY3Qgd2lkdGg9IjM4MCIgaGVpZ2h0PSI0NjAiIHJ4PSIxMiIgZmlsbD0iIzBEMDcyMiIgc3Ryb2tlPSIjRkY5ODAwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5ODAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IdW1hbiBFeGNyZXRvcnkgT3JnYW5zPC90ZXh0PgoKICAgIDwhLS0gS2lkbmV5cyAtLT4KICAgIDxwYXRoIGQ9Ik0gMTAwIDEyMCBDIDcwIDE2MCA3MCAyMjAgMTAwIDI1MCBDIDEzMCAyMjAgMTIwIDE2MCAxMDAgMTIwIFoiIGZpbGw9IiNDNjI4MjgiIHN0cm9rZT0iI0ZGNTI1MiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1MCIgeT0iMTgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjUyNTIiPlJpZ2h0IEtpZG5leTwvdGV4dD4KCiAgICA8cGF0aCBkPSJNIDI4MCAxMjAgQyAyNTAgMTYwIDI2MCAyMjAgMjgwIDI1MCBDIDMxMCAyMjAgMzEwIDE2MCAyODAgMTIwIFoiIGZpbGw9IiNDNjI4MjgiIHN0cm9rZT0iI0ZGNTI1MiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIzMDAiIHk9IjE4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY1MjUyIj5MZWZ0IEtpZG5leTwvdGV4dD4KCiAgICA8IS0tIFVyZXRlcnMgLS0+CiAgICA8cGF0aCBkPSJNIDExMCAyMjAgUSAxNDAgMzEwIDE2NSAzNTAiIHN0cm9rZT0iI0ZGRDU0RiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBkPSJNIDI3MCAyMjAgUSAyNDAgMzEwIDIxNSAzNTAiIHN0cm9rZT0iI0ZGRDU0RiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjI5MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZENTRGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcmV0ZXJzPC90ZXh0PgoKICAgIDwhLS0gQmxhZGRlciAmIFVyZXRocmEgLS0+CiAgICA8Y2lyY2xlIGN4PSIxOTAiIGN5PSIzODAiIHI9IjMwIiBmaWxsPSJyZ2JhKDI1NSwgMjEzLCA3OSwgMC4zKSIgc3Ryb2tlPSIjRkZENTRGIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzg1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJsYWRkZXI8L3RleHQ+CgogICAgPGxpbmUgeDE9IjE5MCIgeTE9IjQxMCIgeDI9IjE5MCIgeTI9IjQ0MCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjUiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iNDU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlVyZXRocmE8L3RleHQ+CiAgPC9nPgoKICA8IS0tIFJJR0hUOiBOZXBocm9uIFN0cnVjdHVyZSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NDAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQ2MCIgcng9IjEyIiBmaWxsPSIjMEQwNzIyIiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5lcGhyb24gRmluZSBBcmNoaXRlY3R1cmU8L3RleHQ+CgogICAgPCEtLSBHbG9tZXJ1bHVzICYgQm93bWFuJ3MgQ2Fwc3VsZSAtLT4KICAgIDxwYXRoIGQ9Ik0gNzAgMTAwIEMgNDAgMTAwIDQwIDE2MCAxMDAgMTYwIEMgMTMwIDE2MCAxMzAgMTAwIDcwIDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkYxNzQ0IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxjaXJjbGUgY3g9IjcwIiBjeT0iMTMwIiByPSIyMCIgZmlsbD0iI0ZGMTc0NCIvPgogICAgPHRleHQgeD0iNjAiIHk9IjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjE3NDQiPkdsb21lcnVsdXMgJmFtcDsgQm93bWFuJ3M8L3RleHQ+CgogICAgPCEtLSBQQ1QgJiBMb29wIG9mIEhlbmxlIC0tPgogICAgPHBhdGggZD0iTSAxMDAgMTQwIFEgMTQwIDEyMCAxNzAgMTYwIEwgMTcwIDMyMCBRIDE5MCAzODAgMjEwIDMyMCBMIDIxMCAxNjAgUSAyNTAgMTIwIDI4MCAxNjAgTCAyODAgNDEwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iNSIvPgoKICAgIDwhLS0gUmVnaW9uIExhYmVscyAtLT4KICAgIDx0ZXh0IHg9IjE0MCIgeT0iMTEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiPlBDVDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzk1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQ1NEYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxvb3Agb2YgSGVubGU8L3RleHQ+CiAgICA8dGV4dCB4PSIyNTAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIj5EQ1Q8L3RleHQ+CiAgICA8dGV4dCB4PSIzMTAiIHk9IjMwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjZCQjZBIj5Db2xsZWN0aW5nIER1Y3Q8L3RleHQ+CgogICAgPCEtLSBDb3VudGVyIEN1cnJlbnQgQm94IC0tPgogICAgPHJlY3QgeD0iMjUiIHk9IjQxNSIgd2lkdGg9IjMzMCIgaGVpZ2h0PSIzNSIgcng9IjYiIGZpbGw9IiMwNjAyMEMiIHN0cm9rZT0iIzAwQjBGRiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjQzNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBCMEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Pc21vbGFyIEdyYWRpZW50OiAzMDAgbU9zbW9sL0wgKENvcnRleCkgJnJhcnI7IDEyMDAgKE1lZHVsbGEpPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" />
  <p style="color: #00B0FF; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 4.4: Human Excretory System Organs &amp; Fine Structure of Nephron (Glomerulus, Henle's Loop, PCT/DCT)</p>
</div>

  

  <!-- FIGURE 4.5 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 270" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="270" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#00B0FF" font-size="13.5" font-weight="bold" text-anchor="middle">
        Renal Countercurrent System &amp; RAAS Feedback Loop
      </text>
      <!-- Left: Countercurrent Multiplier -->
      <g transform="translate(25, 42)">
        <rect width="215" height="210" rx="6" fill="rgba(0, 176, 255, 0.1)" stroke="#00B0FF" stroke-width="1.2"/>
        <text x="107" y="20" fill="#00B0FF" font-size="10.5" font-weight="bold" text-anchor="middle">Henle's Loop &amp; Vasa Recta</text>
        <text x="20" y="42" fill="#FFFFFF" font-size="8.5">&bull; <b style="color: #00B0FF;">Cortex:</b> 300 mOsm/L (Isotonic)</text>
        <text x="20" y="60" fill="#CBD5E1" font-size="8.5">&bull; <b style="color: #00B0FF;">Outer Medulla:</b> 600 - 900 mOsm/L</text>
        <text x="20" y="78" fill="#FFE082" font-size="8.5" font-weight="bold">&bull; <b style="color: #00B0FF;">Inner Medullary Tip:</b> 1200 mOsm/L</text>
        <line x1="20" y1="88" x2="195" y2="88" stroke="rgba(255,255,255,0.2)"/>
        <text x="20" y="108" fill="#26C6DA" font-size="8.5" font-weight="bold">Descending Limb:</text>
        <text x="30" y="122" fill="#CBD5E1" font-size="8">Permeable to H<sub>2</sub>O; impermeable to NaCl</text>
        <text x="20" y="142" fill="#FF8A65" font-size="8.5" font-weight="bold">Ascending Limb:</text>
        <text x="30" y="156" fill="#CBD5E1" font-size="8">Impermeable to H<sub>2</sub>O; actively pumps NaCl</text>
        <text x="107" y="185" fill="#69F0AE" font-size="8.5" font-weight="bold" text-anchor="middle">Yields 4&times; Hypertonic Urine (1200 mOsm)</text>
      </g>
      <!-- Right: RAAS Cascade -->
      <g transform="translate(260, 42)">
        <rect width="215" height="210" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.2)"/>
        <text x="107" y="20" fill="#FFE082" font-size="10.5" font-weight="bold" text-anchor="middle">RAAS Hormonal Cascade</text>
        <text x="107" y="42" fill="#FF8A65" font-size="8.5" text-anchor="middle">Low Blood Pressure / Low GFR</text>
        <text x="107" y="58" fill="#FFFFFF" font-size="9" text-anchor="middle">&darr; JG Cells secrete</text>
        <rect x="50" y="66" width="115" height="24" rx="4" fill="#00B0FF"/>
        <text x="107" y="82" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">RENIN</text>
        <text x="107" y="105" fill="#FFFFFF" font-size="8.5" text-anchor="middle">Angiotensinogen &rarr; Angiotensin I</text>
        <text x="107" y="122" fill="#69F0AE" font-size="8.5" text-anchor="middle">&darr; ACE (Lungs)</text>
        <text x="107" y="138" fill="#FFE082" font-size="9" font-weight="bold" text-anchor="middle">Angiotensin II (Vasoconstrictor)</text>
        <text x="107" y="156" fill="#FFFFFF" font-size="8.5" text-anchor="middle">&darr; Stimulates Adrenal Cortex</text>
        <text x="107" y="174" fill="#FF007F" font-size="9" font-weight="bold" text-anchor="middle">ALDOSTERONE</text>
        <text x="107" y="196" fill="#69F0AE" font-size="8" font-weight="bold" text-anchor="middle">Na<sup>+</sup> &amp; H<sub>2</sub>O Reabsorption &rarr; BP Normal!</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 4.5: Countercurrent Multiplier &amp; Exchanger System Generating Medullary Osmotic Gradient (300 to 1200 mOsm/L) &amp; RAAS Feedback Loop
  </div>
</div>


  <h3 style="color: #00B0FF; margin-top: 18px; font-size: 16.5px;">(i) Human Excretory System &amp; Nephron Architecture</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Comprises a pair of bean-shaped reddish-brown retroperitoneal <b>Kidneys</b>, paired Ureters, Urinary Bladder, and Urethra:
      <br/>- <b style="color: #00B0FF;">Nephron (1 million per kidney):</b> Structural and functional filtration unit consisting of:
        <br/>1. <i>Malpighian Body (Renal Corpuscle):</i> Capillary tuft called <b>Glomerulus</b> enclosed by double-walled <b>Bowman's Capsule</b>. Podocyte cells with filtration slits form the ultrafiltration sieve.
        <br/>2. <i>Proximal Convoluted Tubule (PCT):</i> Lined by simple cuboidal brush-border epithelium; reabsorbs ~70-80% of electrolytes and water, and 100% of glucose and amino acids.
        <br/>3. <i>Loop of Henle (Henle's Loop):</i> Hairpin loop with thin descending limb (water-permeable) and thick ascending limb (water-impermeable, actively pumps NaCl).
        <br/>4. <i>Distal Convoluted Tubule (DCT) &amp; Collecting Duct:</i> Conditional reabsorption of Na<sup>+</sup> and water under hormonal control.
    </p>
  </div>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(ii) Urine Formation, Osmoregulation &amp; RAAS Regulation</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">3 Steps of Urine Formation:</b>
        <br/>1. <b style="color: #00B0FF;">Glomerular Ultrafiltration:</b> Driven by net filtration pressure (NFP &approx; 10 mm Hg); produces 180 Liters of filtrate per day (GFR = 125 mL/min).
        <br/>2. <b style="color: #00B0FF;">Selective Tubular Reabsorption:</b> Over 99% of filtrate is reabsorbed; only ~1.5 Liters excreted as hypertonic urine.
        <br/>3. <b style="color: #00B0FF;">Tubular Secretion:</b> Active secretion of H<sup>+</sup>, K<sup>+</sup>, and NH<sub>3</sub> into filtrate to maintain blood pH and ionic equilibrium.
      </li>
      <li><b style="color: #00B0FF;">Countercurrent Mechanism:</b> Operating between parallel hairpins of Henle's loop and Vasa Recta in medullary nephrons, generating an increasing osmotic gradient from <b>300 mOsm/L in cortex to 1,200 mOsm/L in inner medulla</b>, enabling humans to excrete urine 4&times; more concentrated than blood plasma.</li>
      <li><b style="color: #00B0FF;">RAAS Pathway:</b> Drop in blood pressure/GFR triggers <b>Juxtaglomerular (JG) Cells</b> to secrete <b>Renin</b> &rarr; converts Angiotensinogen to Angiotensin I &rarr; ACE converts it to <b>Angiotensin II</b> (powerful vasoconstrictor) &rarr; stimulates Adrenal Cortex to release <b>Aldosterone</b> &rarr; increases Na<sup>+</sup> and water reabsorption in DCT, elevating BP back to normal.</li>
    </ul>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Locomotion and Movement
  </h2>

  <!-- FIGURE 4.6 -->
  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTAgNTUwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cmVjdCB3aWR0aD0iODUwIiBoZWlnaHQ9IjU1MCIgcng9IjE2IiBmaWxsPSIjMDkwNDE0IiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgPHRleHQgeD0iNDI1IiB5PSIzOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhVTUFOIFNLRUxFVE9OIE9WRVJWSUVXICZhbXA7IFNZTk9WSUFMIEpPSU5UUzwvdGV4dD4KCiAgPCEtLSBMRUZUOiBTa2VsZXRvbiAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDYwIiByeD0iMTIiIGZpbGw9IiMwRDA3MjIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SHVtYW4gU2tlbGV0b24gKDIwNiBCb25lcyk8L3RleHQ+CgogICAgPCEtLSBTa3VsbCAtLT4KICAgIDxjaXJjbGUgY3g9IjE5MCIgY3k9IjgwIiByPSIyNSIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjQjBCRUM1IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjIzMCIgeT0iODUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+U2t1bGwgKEF4aWFsKTwvdGV4dD4KCiAgICA8IS0tIFNwaW5lICYgUmliY2FnZSAtLT4KICAgIDxsaW5lIHgxPSIxOTAiIHkxPSIxMDUiIHgyPSIxOTAiIHkyPSIyODAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI2Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMTkwIiBjeT0iMTYwIiByeD0iNDUiIHJ5PSIzNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjI1MCIgeT0iMTY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPlJpYmNhZ2UgJmFtcDsgU3Rlcm51bTwvdGV4dD4KCiAgICA8IS0tIFBlbHZpcyAmIExpbWJzIC0tPgogICAgPHBhdGggZD0iTSAxNTAgMjgwIEwgMjMwIDI4MCBMIDE5MCAzMjAgWiIgZmlsbD0iI0ZGRiIvPgogICAgPGxpbmUgeDE9IjE2NSIgeTE9IjMyMCIgeDI9IjE1NSIgeTI9IjQ0MCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjUiLz4KICAgIDxsaW5lIHgxPSIyMTUiIHkxPSIzMjAiIHgyPSIyMjUiIHkyPSI0NDAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI1Ii8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjQ1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5MaW1icyAoQXBwZW5kaWN1bGFyKTwvdGV4dD4KICA8L2c+CgogIDwhLS0gUklHSFQ6IEpvaW50cyBDbGFzc2lmaWNhdGlvbiAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NDAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQ2MCIgcng9IjEyIiBmaWxsPSIjMEQwNzIyIiBzdHJva2U9IiNGRkQ1NEYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQ1NEYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlR5cGVzIG9mIFN5bm92aWFsIEpvaW50czwvdGV4dD4KCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNTApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI4NSIgcng9IjYiIGZpbGw9IiMxNTY1QzAiLz4KICAgICAgPHRleHQgeD0iODAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhbGwgJmFtcDsgU29ja2V0PC90ZXh0PgogICAgICA8dGV4dCB4PSI4MCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjRTBFMEUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TaG91bGRlciAmYW1wOyBIaXA8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxODAiIHk9IjAiIHdpZHRoPSIxNjAiIGhlaWdodD0iODUiIHJ4PSI2IiBmaWxsPSIjMkU3RDMyIi8+CiAgICAgIDx0ZXh0IHg9IjI2MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SGluZ2UgSm9pbnQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI2MCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjRTBFMEUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5LbmVlICZhbXA7IEVsYm93PC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMCIgeT0iMTA1IiB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijg1IiByeD0iNiIgZmlsbD0iI0M2MjgyOCIvPgogICAgICA8dGV4dCB4PSI4MCIgeT0iMTM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBpdm90IEpvaW50PC90ZXh0PgogICAgICA8dGV4dCB4PSI4MCIgeT0iMTY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0UwRTBFMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QXRsYXMgJmFtcDsgQXhpcyAoQzEtQzIpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTgwIiB5PSIxMDUiIHdpZHRoPSIxNjAiIGhlaWdodD0iODUiIHJ4PSI2IiBmaWxsPSIjNkExQjlBIi8+CiAgICAgIDx0ZXh0IHg9IjI2MCIgeT0iMTM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNhZGRsZSBKb2ludDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjYwIiB5PSIxNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmaWxsPSIjRTBFMEUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UaHVtYiBDYXJwYWxzPC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gTXVzY2xlIFR5cGVzIC0tPgogICAgPHJlY3QgeD0iMjUiIHk9IjI3MCIgd2lkdGg9IjMzMCIgaGVpZ2h0PSIxNjUiIHJ4PSI4IiBmaWxsPSIjMDYwMjBDIiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjI5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBCMEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NdXNjbGUgVGlzc3VlIFR5cGVzPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjMyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPjEuIFNrZWxldGFsIE11c2NsZTogU3RyaWF0ZWQsIFZvbHVudGFyeTwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIzNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRTBFMEUwIj4yLiBDYXJkaWFjIE11c2NsZTogU3RyaWF0ZWQsIEludm9sdW50YXJ5IChIZWFydCk8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iMzg1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0UwRTBFMCI+My4gU21vb3RoIE11c2NsZTogTm9uLXN0cmlhdGVkLCBJbnZvbHVudGFyeSAoVmlzY2VyYSk8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iNDE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGRDU0RiI+U2xpZGluZyBGaWxhbWVudDogQ2HCsuKBuiBiaW5kcyBUcm9wb25pbiBDICZyYXJyOyBBY3RpbiBzbGlkZXM8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" />
  <p style="color: #00B0FF; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 4.6: Human Skeleton Overview, Types of Synovial Joints &amp; Muscle Tissue Classification</p>
</div>

  

  <!-- FIGURE 4.7 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 270" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="270" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#00B0FF" font-size="13.5" font-weight="bold" text-anchor="middle">
        Sarcomere Molecular Architecture &amp; Sliding Filament Mechanism
      </text>
      <!-- Sarcomere Anatomy Diagram -->
      <g transform="translate(25, 42)">
        <rect width="450" height="110" rx="6" fill="rgba(0, 176, 255, 0.1)" stroke="#00B0FF" stroke-width="1.2"/>
        <!-- Z lines -->
        <line x1="50" y1="20" x2="50" y2="90" stroke="#FF007F" stroke-width="3"/>
        <line x1="400" y1="20" x2="400" y2="90" stroke="#FF007F" stroke-width="3"/>
        <text x="50" y="15" fill="#FF007F" font-size="8.5" font-weight="bold" text-anchor="middle">Z-Line</text>
        <text x="400" y="15" fill="#FF007F" font-size="8.5" font-weight="bold" text-anchor="middle">Z-Line</text>
        <!-- Thin actin filaments -->
        <line x1="50" y1="40" x2="190" y2="40" stroke="#26C6DA" stroke-width="2.5"/>
        <line x1="50" y1="70" x2="190" y2="70" stroke="#26C6DA" stroke-width="2.5"/>
        <line x1="400" y1="40" x2="260" y2="40" stroke="#26C6DA" stroke-width="2.5"/>
        <line x1="400" y1="70" x2="260" y2="70" stroke="#26C6DA" stroke-width="2.5"/>
        <!-- Thick myosin filaments -->
        <line x1="140" y1="55" x2="310" y2="55" stroke="#FF9100" stroke-width="5"/>
        <line x1="225" y1="25" x2="225" y2="85" stroke="#CBD5E1" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="225" y="20" fill="#CBD5E1" font-size="8" text-anchor="middle">M-Line</text>
        <!-- Bands -->
        <text x="225" y="102" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">
          &larr; A-Band (Dark Anisotropic: Length CONSTANT!) &rarr;
        </text>
      </g>
      <!-- Bottom Sliding Filament Cycle Steps -->
      <g transform="translate(25, 160)">
        <rect width="450" height="95" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.2)"/>
        <text x="225" y="18" fill="#69F0AE" font-size="10" font-weight="bold" text-anchor="middle">
          The 4-Step Cross-Bridge Contraction Cycle (Huxley &amp; Hanson, 1954)
        </text>
        <text x="25" y="38" fill="#FFFFFF" font-size="8.5">
          1. <b>Ca<sup>2+</sup> Influx:</b> Ca<sup>2+</sup> binds Troponin C, pulling Tropomyosin away to expose actin active sites.
        </text>
        <text x="25" y="54" fill="#FFFFFF" font-size="8.5">
          2. <b style="color: #00B0FF;">Cross-Bridge Formation:</b> Energized Myosin head (hydrolyzing ATP &rarr; ADP + Pi) binds to Actin.
        </text>
        <text x="25" y="70" fill="#FFFFFF" font-size="8.5">
          3. <b style="color: #00B0FF;">Power Stroke:</b> Myosin head pivots, pulling actin filaments toward M-line; <b>H-zone &amp; I-band SHORTEN!</b>
        </text>
        <text x="25" y="86" fill="#FFE082" font-size="8.5" font-weight="bold">
          4. <b style="color: #00B0FF;">Detachment:</b> Fresh ATP binds Myosin head, breaking cross-bridge. (Rigor Mortis occurs if ATP is lacking).
        </text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 4.7: Sarcomere Ultrastructure (Z-lines, I-band, A-band, H-zone, M-line) &amp; Molecular 4-Step Actin-Myosin Cross-Bridge Sliding Cycle
  </div>
</div>


  <h3 style="color: #00B0FF; margin-top: 18px; font-size: 16.5px;">(i) Skeletal System &amp; Synovial Joints</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The human skeleton consists of <b>206 bones</b> divided into:
      <br/>- <b style="color: #00B0FF;">Axial Skeleton (80 bones):</b> Skull (22 bones + 6 ear ossicles + 1 hyoid), Vertebral Column (26 vertebrae: 7C, 12T, 5L, 1 Sacral, 1 Coccygeal), Sternum (1), and Ribs (12 pairs: 7 true, 3 false, 2 floating).
      <br/>- <b style="color: #00B0FF;">Appendicular Skeleton (126 bones):</b> Pectoral Girdles (Clavicle, Scapula), Upper Limbs (Humerus, Radius, Ulna, Carpals, Metacarpals, Phalanges), Pelvic Girdle (Coxal bone), and Lower Limbs (Femur, Patella, Tibia, Fibula, Tarsals, Metatarsals, Phalanges).
      <br/>- <b style="color: #00B0FF;">Synovial Joints:</b> Fluid-filled synovial cavity allowing free mobility:
        <br/>1. <i>Ball and Socket Joint:</i> Humerus and pectoral glenoid cavity; Femur and pelvic acetabulum.
        <br/>2. <i>Hinge Joint:</i> Knee and Elbow joints.
        <br/>3. <i>Pivot Joint:</i> Between Atlas and Axis vertebrae (allows head rotation).
        <br/>4. <i>Gliding Joint:</i> Between adjacent wrist carpals.
        <br/>5. <i>Saddle Joint:</i> Between carpal and metacarpal of thumb.
    </p>
  </div>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(ii) Muscle Ultra-structure &amp; Sliding Filament Mechanism</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">Sarcomere Molecular Architecture:</b> Segment between two successive <b>Z-lines</b>:
        <br/>- <b style="color: #00B0FF;">Thin Filaments (Actin):</b> Two helical F-actin strands wrapped by two filamentous <b>Tropomyosin</b> strands and globular <b>Troponin</b> complexes (Tn-T, Tn-I, Tn-C).
        <br/>- <b style="color: #00B0FF;">Thick Filaments (Myosin):</b> Bundles of <b>Meromyosin</b> molecules. Each meromyosin has a globular head with ATPase activity and actin-binding site (Heavy Meromyosin / HMM) and a long fibrous tail (Light Meromyosin / LMM).
        <br/>- <b style="color: #00B0FF;">Bands:</b> Dark <b>A-band (Anisotropic)</b> containing overlapping actin and myosin filaments; light <b>I-band (Isotropic)</b> containing only actin; central <b>H-zone</b> containing only myosin bisected by the <b>M-line</b>.
      </li>
      <li><b style="color: #00B0FF;">Sliding Filament Theory (Huxley &amp; Hanson, 1954):</b> Motor neuron action potential releases Acetylcholine at the neuromuscular junction &rarr; depolarizes sarcolemma &rarr; triggers massive Ca<sup>2+</sup> release from Sarcoplasmic Reticulum &rarr; Ca<sup>2+</sup> binds Troponin C &rarr; unmasks myosin-binding sites on actin &rarr; Myosin heads bind actin forming cross-bridges &rarr; power stroke pulls actin filaments toward M-line: <b>I-band and H-zone shorten, while A-band length remains completely unchanged!</b></li>
    </ul>
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Neural Control and Coordination
  </h2>

  <!-- FIGURE 4.8 -->
  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTAgNTUwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cmVjdCB3aWR0aD0iODUwIiBoZWlnaHQ9IjU1MCIgcng9IjE2IiBmaWxsPSIjMDkwNDE0IiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgPHRleHQgeD0iNDI1IiB5PSIzOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNUUlVDVFVSRSBPRiBORVVST04sIFNZTkFQU0UgJmFtcDsgUkVGTEVYIEFSQzwvdGV4dD4KCiAgPCEtLSBMRUZUOiBUeXBpY2FsIE5ldXJvbiAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDYwIiByeD0iMTIiIGZpbGw9IiMwRDA3MjIiIHN0cm9rZT0iI0ZGRDU0RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDU0RiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VHlwaWNhbCBOZXVyb24gU3RydWN0dXJlPC90ZXh0PgoKICAgIDwhLS0gU29tYSAmIERlbmRyaXRlcyAtLT4KICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMTUwIiByPSIzNSIgZmlsbD0iI0ZGRDU0RiIvPgogICAgPHRleHQgeD0iOTAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Tb21hPC90ZXh0PgogICAgPHBhdGggZD0iTSA2MCAxMzAgTCAzMCAxMTAgTSA2MCAxNzAgTCAzMCAxOTAgTSA5MCAxMTUgTCA5MCA4NSBNIDEyMCAxMzAgTCAxNTAgMTEwIiBzdHJva2U9IiNGRkQ1NEYiIHN0cm9rZS13aWR0aD0iMyIvPgogICAgPHRleHQgeD0iNDAiIHk9Ijc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQ1NEYiPkRlbmRyaXRlczwvdGV4dD4KCiAgICA8IS0tIEF4b24gJiBNeWVsaW4gLS0+CiAgICA8bGluZSB4MT0iMTI1IiB5MT0iMTUwIiB4Mj0iMzQwIiB5Mj0iMTUwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iOCIvPgogICAgPHJlY3QgeD0iMTUwIiB5PSIxNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgcng9IjQiIGZpbGw9IiMwMEU1RkYiLz4KICAgIDxyZWN0IHg9IjIxMCIgeT0iMTQwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjMDBFNUZGIi8+CiAgICA8cmVjdCB4PSIyNzAiIHk9IjE0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzAwRTVGRiIvPgogICAgPHRleHQgeD0iMjMwIiB5PSIxMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTVGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TXllbGluIFNoZWF0aDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwMCIgeT0iMTgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZmlsbD0iI0ZGRiI+Tm9kZXMgb2YgUmFudmllcjwvdGV4dD4KCiAgICA8IS0tIFN5bmFwc2UgQm94IC0tPgogICAgPHJlY3QgeD0iMjUiIHk9IjIzMCIgd2lkdGg9IjMzMCIgaGVpZ2h0PSIyMDAiIHJ4PSI4IiBmaWxsPSIjMDYwMjBDIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNUZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DaGVtaWNhbCBTeW5hcHNlIEtpbmV0aWNzPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjI5MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBQcmUtc3luYXB0aWMgbWVtYnJhbmUgcmVsZWFzZXMgQWNldHlsY2hvbGluZTwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIzMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRTBFMEUwIj7igKIgTmV1cm90cmFuc21pdHRlciBjcm9zc2VzIFN5bmFwdGljIENsZWZ0PC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjM1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBCaW5kcyBQb3N0LXN5bmFwdGljIHJlY2VwdG9ycyAmcmFycjsgTmErIGluZmx1eDwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIzODAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRTBFMEUwIj7igKIgUmVzdGluZyBQb3RlbnRpYWw6IC03MCBtViB8IEFjdGlvbjogKzMwIG1WPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBSSUdIVDogUmVmbGV4IEFyYyAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NDAsIDYwKSI+CiAgICA8cmVjdCB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQ2MCIgcng9IjEyIiBmaWxsPSIjMEQwNzIyIiBzdHJva2U9IiM2NkJCNkEiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2NkJCNkEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJlZmxleCBBcmMgTmV1cmFsIFBhdGh3YXk8L3RleHQ+CgogICAgPCEtLSBTdGltdWx1cyB0byBFZmZlY3RvciAtLT4KICAgIDxyZWN0IHg9IjQwIiB5PSI4MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCIgcng9IjYiIGZpbGw9IiNGRjE3NDQiLz4KICAgIDx0ZXh0IHg9IjkwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3RpbXVsdXMgLyBSZWNlcHRvcjwvdGV4dD4KCiAgICA8cGF0aCBkPSJNIDE0MCAxMDUgTCAyNDAgMTA1IiBzdHJva2U9IiNGRkQ1NEYiIHN0cm9rZS13aWR0aD0iNCIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDU0RiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWZmZXJlbnQgTmV1cm9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjI0MCIgeT0iODAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIHJ4PSI2IiBmaWxsPSIjOUMyN0IwIi8+CiAgICA8dGV4dCB4PSIyOTAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TcGluYWwgQ29yZCBDTlM8L3RleHQ+CgogICAgPHBhdGggZD0iTSAyOTAgMTMwIEwgMjkwIDIyMCBMIDE0MCAyMjAiIHN0cm9rZT0iIzAwRTVGRiIgc3Ryb2tlLXdpZHRoPSI0IiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgogICAgPHRleHQgeD0iMjE1IiB5PSIyMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTVGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RWZmZXJlbnQgTW90b3IgTmV1cm9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjQwIiB5PSIxOTUiIHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIHJ4PSI2IiBmaWxsPSIjNjZCQjZBIi8+CiAgICA8dGV4dCB4PSI5MCIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVmZmVjdG9yIE11c2NsZTwvdGV4dD4KCiAgICA8IS0tIFN1bW1hcnkgQm94IC0tPgogICAgPHJlY3QgeD0iMjUiIHk9IjI5MCIgd2lkdGg9IjMzMCIgaGVpZ2h0PSIxNDAiIHJ4PSI4IiBmaWxsPSIjMDYwMjBDIiBzdHJva2U9IiM2NkJCNkEiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIxOTAiIHk9IjMxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjZCQjZBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BdXRvbm9taWMgJmFtcDsgU29tYXRpYyBQTlM8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iMzQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0UwRTBFMCI+4oCiIENOUzogQnJhaW4gJmFtcDsgU3BpbmFsIENvcmQgKEludGVncmF0aW9uKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIzNzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRTBFMEUwIj7igKIgU3ltcGF0aGV0aWM6IEZpZ2h0LW9yLUZsaWdodCAoRW1lcmdlbmN5KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSI0MDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRTBFMEUwIj7igKIgUGFyYXN5bXBhdGhldGljOiBSZXN0LWFuZC1EaWdlc3Q8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" />
  <p style="color: #00B0FF; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 4.8: Structure of Typical Neuron, Chemical Synapse Impulse Transmission &amp; Reflex Arc Pathway</p>
</div>

  

  <h3 style="color: #00B0FF; margin-top: 18px; font-size: 16.5px;">(i) Neuron Structure &amp; Synaptic Transmission</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The <b>Neuron</b> is the structural and functional unit of the nervous system, comprising:
      <br/>- <b style="color: #00B0FF;">Cell Body (Soma / Cyton):</b> Contains cytoplasm, nucleus, and granulations called <b>Nissl's Granules</b> (composed of RER and ribosomes for protein synthesis).
      <br/>- <b style="color: #00B0FF;">Dendrites:</b> Highly branched short fibers receiving afferent impulses toward the cyton.
      <br/>- <b style="color: #00B0FF;">Axon:</b> Long, solitary conducting fiber terminating in synaptic knobs containing neurotransmitter vesicles. Myelinated axons are ensheathed by <b>Schwann Cells</b> with periodic gaps called <b>Nodes of Ranvier</b> (enabling rapid <b>Saltatory Conduction</b>).
      <br/>- <b style="color: #00B0FF;">Synaptic Transmission:</b> Action potential reaching terminal knob opens voltage-gated Ca<sup>2+</sup> channels &rarr; Ca<sup>2+</sup> influx triggers exocytosis of <b>Acetylcholine</b> into the 20-nm <b>Synaptic Cleft</b> &rarr; binds post-synaptic receptors &rarr; generates new excitatory post-synaptic potential (EPSP).
    </p>
  </div>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(ii) Nerve Impulse Conduction &amp; Reflex Arc Pathway</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">Resting Potential:</b> Axonal membrane at rest is permeable to K<sup>+</sup> and impermeable to Na<sup>+</sup>. The electrogenic <b>Na<sup>+</sup>/K<sup>+</sup>-ATPase Pump</b> expels 3 Na<sup>+</sup> for every 2 K<sup>+</sup> imported, establishing an inside-negative <b>Resting Membrane Potential of -70 mV</b>.</li>
      <li><b style="color: #00B0FF;">Action Potential (Impulse):</b> Threshold stimulus opens voltage-gated Na<sup>+</sup> channels &rarr; rapid Na<sup>+</sup> influx causes <b>Depolarization (+30 mV)</b>. Next, Na<sup>+</sup> channels close and voltage-gated K<sup>+</sup> channels open &rarr; K<sup>+</sup> efflux restores negativity (<b>Repolarization</b>).</li>
      <li><b style="color: #00B0FF;">Reflex Arc:</b> Involuntary, instantaneous neuro-muscular circuit: Sensory Receptor &rarr; Afferent (Sensory) Neuron entering via dorsal root ganglion &rarr; Interneuron in spinal cord grey matter &rarr; Efferent (Motor) Neuron exiting via ventral root &rarr; Effector Muscle (e.g., Knee-jerk reflex).</li>
    </ul>
  </div>

  <!-- SECTION 6 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    6. Chemical Coordination and Integration
  </h2>

  <!-- FIGURE 4.9 -->
  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTAgNTUwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8cmVjdCB3aWR0aD0iODUwIiBoZWlnaHQ9IjU1MCIgcng9IjE2IiBmaWxsPSIjMDkwNDE0IiBzdHJva2U9IiMwMEIwRkYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgPHRleHQgeD0iNDI1IiB5PSIzOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhVTUFOIEVORE9DUklORSBHTEFORFMgJmFtcDsgSE9STU9ORSBBQ1RJT048L3RleHQ+CgogIDwhLS0gTEVGVDogRW5kb2NyaW5lIEdsYW5kcyAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDYwIiByeD0iMTIiIGZpbGw9IiMwRDA3MjIiIHN0cm9rZT0iI0FCNDdCQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0FCNDdCQyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWFqb3IgSHVtYW4gRW5kb2NyaW5lIEdsYW5kczwvdGV4dD4KCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgNTApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0NSIgcng9IjYiIGZpbGw9IiMxNTY1QzAiLz4KICAgICAgPHRleHQgeD0iMTUwIiB5PSIyNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IeXBvdGhhbGFtdXMgJmFtcDsgUGl0dWl0YXJ5IChNYXN0ZXIgR2xhbmQpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMCIgeT0iNTUiIHdpZHRoPSIzMDAiIGhlaWdodD0iNDUiIHJ4PSI2IiBmaWxsPSIjMkU3RDMyIi8+CiAgICAgIDx0ZXh0IHg9IjE1MCIgeT0iODIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VGh5cm9pZCAmYW1wOyBQYXJhdGh5cm9pZCAoVDMsIFQ0LCBQVEgpPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMCIgeT0iMTEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1IiByeD0iNiIgZmlsbD0iI0M2MjgyOCIvPgogICAgICA8dGV4dCB4PSIxNTAiIHk9IjEzNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BZHJlbmFsIEdsYW5kcyAoQ29ydGlzb2wgJmFtcDsgQWRyZW5hbGluZSk8L3RleHQ+CgogICAgICA8cmVjdCB4PSIwIiB5PSIxNjUiIHdpZHRoPSIzMDAiIGhlaWdodD0iNDUiIHJ4PSI2IiBmaWxsPSIjRkY4RjAwIi8+CiAgICAgIDx0ZXh0IHg9IjE1MCIgeT0iMTkyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBhbmNyZWFzIChJbnN1bGluICZhbXA7IEdsdWNhZ29uKTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjAiIHk9IjIyMCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0NSIgcng9IjYiIGZpbGw9IiM2QTFCOUEiLz4KICAgICAgPHRleHQgeD0iMTUwIiB5PSIyNDciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R29uYWRzOiBUZXN0aXMgJmFtcDsgT3ZhcnkgKFNleCBTdGVyb2lkcyk8L3RleHQ+CiAgICA8L2c+CgogICAgPCEtLSBOb24tRW5kb2NyaW5lIEhvcm1vbmVzIC0tPgogICAgPHJlY3QgeD0iMjUiIHk9IjMzNSIgd2lkdGg9IjMzMCIgaGVpZ2h0PSIxMDAiIHJ4PSI2IiBmaWxsPSIjMDYwMjBDIiBzdHJva2U9IiNBQjQ3QkMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0FCNDdCQyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Tm9uLUVuZG9jcmluZSBUaXNzdWUgSG9ybW9uZXM8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMzg1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0UwRTBFMCI+4oCiIEFORiAoSGVhcnQpIHwgRXJ5dGhyb3BvaWV0aW4gKEtpZG5leSk8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iNDEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0UwRTBFMCI+4oCiIEdhc3RyaW4sIFNlY3JldGluLCBDQ0ssIEdJUCAoRy5JLiBUcmFjdCk8L3RleHQ+CiAgPC9nPgoKICA8IS0tIFJJR0hUOiBNZWNoYW5pc20gb2YgQWN0aW9uIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0MCwgNjApIj4KICAgIDxyZWN0IHdpZHRoPSIzODAiIGhlaWdodD0iNDYwIiByeD0iMTIiIGZpbGw9IiMwRDA3MjIiIHN0cm9rZT0iIzAwQjBGRiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjE5MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwQjBGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWVjaGFuaXNtIG9mIEhvcm1vbmUgQWN0aW9uPC90ZXh0PgoKICAgIDwhLS0gUHJvdGVpbiBIb3Jtb25lIEJveCAtLT4KICAgIDxyZWN0IHg9IjI1IiB5PSI2MCIgd2lkdGg9IjMzMCIgaGVpZ2h0PSIxNzAiIHJ4PSI4IiBmaWxsPSIjMDYwMjBDIiBzdHJva2U9IiMwMEU1RkYiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIxOTAiIHk9Ijg1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU1RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEuIFByb3RlaW4gLyBQZXB0aWRlIEhvcm1vbmVzPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBXYXRlci1zb2x1YmxlIChlLmcuIEluc3VsaW4sIFBpdHVpdGFyeSBILik8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0UwRTBFMCI+4oCiIEJpbmRzIENlbGwtTWVtYnJhbmUgUmVjZXB0b3JzPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjE3NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBHZW5lcmF0ZXMgMm5kIE1lc3NlbmdlcnMgKGNBTVAsIElQ4oKDLCBDYcKy4oG6KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIyMDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRTBFMEUwIj7igKIgVHJpZ2dlcnMgcmFwaWQgaW50cmFjZWxsdWxhciBjYXNjYWRlPC90ZXh0PgoKICAgIDwhLS0gU3Rlcm9pZCBIb3Jtb25lIEJveCAtLT4KICAgIDxyZWN0IHg9IjI1IiB5PSIyNTAiIHdpZHRoPSIzMzAiIGhlaWdodD0iMTcwIiByeD0iOCIgZmlsbD0iIzA2MDIwQyIgc3Ryb2tlPSIjRkZENTRGIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIyNzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDU0RiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gU3Rlcm9pZCAvIExpcGlkIEhvcm1vbmVzPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjMwNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBMaXBpZC1zb2x1YmxlIChlLmcuIENvcnRpc29sLCBFc3Ryb2dlbik8L3RleHQ+CiAgICA8dGV4dCB4PSI0MCIgeT0iMzM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0UwRTBFMCI+4oCiIENyb3NzZXMgUGxhc21hIE1lbWJyYW5lIGRpcmVjdGx5PC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjM2NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBCaW5kcyBJbnRyYWNlbGx1bGFyIE51Y2xlYXIgUmVjZXB0b3JzPC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjM5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNFMEUwRTAiPuKAoiBEaXJlY3RseSByZWd1bGF0ZXMgRE5BIEdlbmUgRXhwcmVzc2lvbjwvdGV4dD4KICA8L2c+Cjwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" />
  <p style="color: #00B0FF; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 4.9: Human Endocrine Glands Overview &amp; Mechanism of Hormone Action (Protein vs Steroid Hormones)</p>
</div>

  

  <h3 style="color: #00B0FF; margin-top: 18px; font-size: 16.5px;">(i) Major Human Endocrine Glands</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Endocrine glands are ductless glands that secrete chemical messengers called <b>Hormones</b> directly into the bloodstream:
      <br/>- <b style="color: #00B0FF;">Hypothalamus:</b> Master regulatory center secreting Releasing Hormones (GnRH, TRH) and Inhibiting Hormones (Somatostatin).
      <br/>- <b style="color: #00B0FF;">Pituitary Gland (Hypophysis):</b>
        <br/>1. <i>Adenohypophysis (Anterior Pituitary):</i> GH, TSH, ACTH, PRL, LH, and FSH.
        <br/>2. <i>Neurohypophysis (Posterior Pituitary):</i> Stores and releases hypothalamic hormones <b>Oxytocin</b> (uterine contraction &amp; milk ejection) and <b>Vasopressin / ADH</b> (water reabsorption in DCT).
      <br/>- <b style="color: #00B0FF;">Thyroid Gland:</b> Follicular cells secrete <b>Thyroxine (T<sub>4</sub>) and Triiodothyronine (T<sub>3</sub>)</b> regulating basal metabolic rate (BMR); parafollicular C-cells secrete <b>Thyrocalcitonin (TCT)</b> (hypocalcemic, lowers blood Ca<sup>2+</sup>).
      <br/>- <b style="color: #00B0FF;">Parathyroid Glands:</b> Secrete <b>Parathyroid Hormone (PTH / Collip's hormone)</b> (hypercalcemic, raises blood Ca<sup>2+</sup> by bone demineralization and kidney reabsorption).
      <br/>- <b style="color: #00B0FF;">Adrenal Glands:</b>
        <br/>1. <i>Adrenal Cortex:</i> Mineralocorticoids (Aldosterone), Glucocorticoids (Cortisol - anti-inflammatory, immunosuppressive), and Sexcorticoids.
        <br/>2. <i>Adrenal Medulla:</i> Catecholamines <b>Adrenaline (Epinephrine) and Noradrenaline</b> ('Emergency / Fight-or-Flight Hormones').
      <br/>- <b style="color: #00B0FF;">Pancreas (Islets of Langerhans):</b> &alpha;-cells secrete <b>Glucagon</b> (hyperglycemic); &beta;-cells secrete <b>Insulin</b> (hypoglycemic, promotes glucose uptake into cells; deficiency causes Diabetes Mellitus).
    </p>
  </div>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(ii) Mechanism of Hormone Action &amp; Non-Endocrine Hormones</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">1. Water-Soluble Peptide / Protein Hormones (FSH, LH, Insulin, Adrenaline):</b> Cannot traverse the lipid bilayer membrane. Bind to extracellular cell-surface receptors forming a hormone-receptor complex, activating G-proteins that stimulate <b>Adenylate Cyclase</b> to synthesize intracellular <b>Second Messengers (cyclic AMP, IP<sub>3</sub>, Ca<sup>2+</sup>)</b>, triggering enzyme cascades.</li>
      <li><b style="color: #00B0FF;">2. Lipid-Soluble Steroid &amp; Thyroid Hormones (Estrogen, Progesterone, Cortisol, T3/T4):</b> Readily diffuse across the plasma membrane and nuclear envelope. Bind to <b>Intracellular / Nuclear Receptors</b>, and the hormone-receptor complex interacts directly with genomic DNA to modulate gene transcription and mRNA synthesis.</li>
      <li><b style="color: #00B0FF;">Non-Endocrine Tissue Hormones:</b> Heart atrial walls secrete <b>Atrial Natriuretic Factor (ANF)</b> (vasodilator that opposes RAAS, lowering BP); Kidney juxtaglomerular cells secrete <b>Erythropoietin</b> (stimulates RBC production in bone marrow); Gastrointestinal mucosa secretes Gastrin, Secretin, CCK, and GIP.</li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(1, 87, 155, 0.85)); border: 2px solid #00B0FF; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #00B0FF; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 4 Human Physiology Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(0, 176, 255, 0.25); color: #00B0FF; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Physiological System</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Core Mathematical Formula &amp; Constant</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Diagnostic Hallmarks &amp; Regulatory Hormones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Respiration:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">VC = TV (500 mL) + IRV (2500) + ERV (1100)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Bohr Effect (Hb-O<sub>2</sub> right shift in tissues) &bull; 70% CO<sub>2</sub> as HCO<sub>3</sub><sup>-</sup></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Circulation:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cardiac Output = SV (70 mL) &times; HR (72 bpm) = 5.0 L/min</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">SAN Pacemaker &bull; P wave (atria), QRS (ventricles), T (repolarize)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Excretion:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">GFR = 125 mL/min (180 L/day); Urine = 1.5 L/day</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Countercurrent multiplier (1200 mOsm/L) &bull; Renin-Angiotensin-Aldosterone</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Locomotion:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">206 Bones (80 Axial + 126 Appendicular)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Sliding filament theory (H-zone &amp; I-band shorten; A-band constant)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Nerve Impulse:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">RMP = -70 mV; Depolarization = +30 mV</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Na<sup>+</sup>/K<sup>+</sup>-ATPase (3 Na<sup>+</sup> out / 2 K<sup>+</sup> in) &bull; Saltatory conduction</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Calcium Balance:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">PTH (Hypercalcemic) vs TCT (Hypocalcemic)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Maintains critical serum Ca<sup>2+</sup> levels (9-11 mg/dL)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Blood Sugar:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Insulin (Hypoglycemic) vs Glucagon (Hyperglycemic)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&beta;-cells vs &alpha;-cells of Islets &bull; Fasting target: 70-100 mg/dL</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Hormone Action:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Second messengers (cAMP, IP<sub>3</sub>, Ca<sup>2+</sup>)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Peptides bind membrane receptors &bull; Steroids bind nuclear DNA</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Zoo4HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.15), rgba(2, 119, 189, 0.15)); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #00B0FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Lung Volumes, Cardiac Constants, Nephron Filtration, Bone Counts, Action Potentials &amp; Endocrine Targets</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: What is the normal Tidal Volume (TV) in a healthy human adult?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Approximately 500 mL per breath (or 6,000 to 8,000 mL per minute).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: What is Residual Volume (RV)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The volume of air remaining in the lungs even after a forceful maximum expiration (~1,100 to 1,200 mL).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What shape is the Oxygen-Hemoglobin Dissociation Curve?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sigmoid (S-shaped) curve.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Name the enzyme that accelerates the conversion of CO2 and H2O into Carbonic Acid inside RBCs.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Carbonic Anhydrase (a zinc-containing metalloenzyme).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What is the major chemical form in which carbon dioxide is transported in human blood?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      As Bicarbonate ions (HCO<sub>3</sub><sup>-</sup>) (~70% of total CO<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the normal resting Heart Rate and Stroke Volume in adult humans?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Heart rate &approx; 72 beats/min; Stroke volume &approx; 70 mL per beat.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Calculate the resting Cardiac Output of a normal adult.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cardiac Output = Stroke Volume &times; Heart Rate = 70 mL &times; 72 = 5,040 mL/min (&approx; 5 L/min).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Name the natural Pacemaker of the human heart.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sino-Atrial Node (SAN), located in the right atrium.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What causes the first heart sound 'LUBB'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Closure of the atrioventricular valves (Tricuspid and Bicuspid / Mitral valves) at the onset of ventricular systole.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What does the P-wave represent in a standard Electrocardiogram (ECG)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Depolarization of the atria (leads to atrial contraction).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What does the QRS complex represent in a standard ECG?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Depolarization of the ventricles (initiates ventricular contraction).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Name the blood vessel that carries oxygenated blood from the lungs to the left atrium.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pulmonary Vein.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What is the functional structural unit of the human kidney?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nephron (~1 million per kidney).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What is the normal Glomerular Filtration Rate (GFR) in a healthy adult?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      125 mL/min (or 180 Liters per day).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: What is the primary role of the Podocyte cells in Bowman's capsule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      They form intricate filtration slits (slit pores) that permit ultrafiltration while blocking blood cells and plasma proteins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: In which part of the nephron does the maximum reabsorption of water and electrolytes occur?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Proximal Convoluted Tubule (PCT) (~70-80% of water and electrolytes).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Which hormone regulates water reabsorption in the DCT and collecting duct?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Antidiuretic Hormone (ADH / Vasopressin).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: What cells secrete the enzyme Renin in response to a drop in blood pressure?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Juxtaglomerular (JG) cells of the afferent arteriole.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What is the total number of bones present in the adult human skeleton?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      206 bones.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: How many bones constitute the human Axial Skeleton?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      80 bones.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: How many pairs of 'True Ribs' are present in humans?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      7 pairs (1st to 7th pairs attached directly to sternum).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Name the joint present between the Atlas and Axis vertebrae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pivot joint.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What type of synovial joint is found at the shoulder and hip?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ball and Socket joint.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What is the anatomical contractile unit of a skeletal muscle fiber?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sarcomere (segment between two successive Z-lines).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Which band in the sarcomere maintains a constant length during muscle contraction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The A-band (Anisotropic band).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Which ion binds to Troponin C to trigger skeletal muscle contraction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Calcium ion (Ca<sup>2+</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: What is the value of the Resting Membrane Potential in an axon?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Approximately -70 mV.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Which ion rapidly moves inward into the axon to cause Depolarization during an action potential?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sodium ion (Na<sup>+</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: How many sodium and potassium ions are pumped by the Na+/K+-ATPase pump per ATP?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      3 Na<sup>+</sup> expelled outward and 2 K<sup>+</sup> pumped inward.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What is the term for impulse conduction leaping from node to node in myelinated axons?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Saltatory Conduction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Name the primary neurotransmitter released at the neuromuscular junction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Acetylcholine (ACh).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: Which master brain gland connects the nervous and endocrine systems?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hypothalamus.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Which hormone induces milk ejection ('let-down reflex') and uterine labor contractions?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Oxytocin (synthesized in hypothalamus, released from posterior pituitary).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Which trace mineral is indispensable for the synthesis of thyroid hormones (T3 and T4)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Iodine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Name the hormone secreted by the parathyroid glands that increases blood calcium levels.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Parathyroid Hormone (PTH / Collip's hormone).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Name the hormone that acts antagonistically to PTH by lowering blood calcium levels.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Thyrocalcitonin (TCT), secreted by thyroid parafollicular C-cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Which endocrine cells of the pancreas secrete Insulin?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Beta (&beta;) cells of the Islets of Langerhans.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: Which hormone is secreted by the heart atrial wall in response to high blood pressure?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Atrial Natriuretic Factor (ANF).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Name two common intracellular second messengers used by peptide hormones.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cyclic AMP (cAMP) and Calcium ions (Ca<sup>2+</sup>) / IP<sub>3</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Where are the receptors for lipid-soluble steroid hormones located?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Intracellularly (in the cytoplasm or nucleus).
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.15), rgba(2, 119, 189, 0.15)); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00B0FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Bohr Effect, ECG Wave Diagnostics, Countercurrent Multiplication, Sarcomere Bands &amp; Hormone Transduction</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Differentiate between Vital Capacity (VC) and Total Lung Capacity (TLC).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Vital Capacity (VC):</b> The maximum volume of air a person can exhale after a forced maximum inhalation: <b>VC = TV + IRV + ERV</b> (~3,500 - 4,500 mL).<br/>2. <b style="color: #00B0FF;">Total Lung Capacity (TLC):</b> The total volume of air present in the lungs after a maximum forced inspiration: <b>TLC = VC + RV</b> (~5,000 - 6,000 mL). Includes Residual Volume (RV) which cannot be voluntarily exhaled.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Describe the 3 layers forming the Respiratory Diffusion Membrane.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Gaseous exchange between alveolar air and capillary blood occurs across a microscopic diffusion membrane (&lt;0.5 mm thick) composed of:<br/>1. <b style="color: #00B0FF;">Alveolar Epithelium:</b> Single-layered thin squamous epithelial cells lining the alveoli.<br/>2. <b style="color: #00B0FF;">Capillary Endothelium:</b> Single-layered squamous endothelial wall of alveolar blood capillaries.<br/>3. <b style="color: #00B0FF;">Basement Membrane:</b> Thin acellular intervening extracellular matrix cementing the two cellular layers together.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the Bohr Effect and state the factors that shift the Oxygen-Hemoglobin curve to the right.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The <b>Bohr Effect</b> describes the physiological phenomenon where an increase in carbon dioxide concentration or decrease in pH decreases hemoglobin's affinity for oxygen, promoting O<sub>2</sub> delivery to active tissues.<br/>&bull; <b style="color: #00B0FF;">Factors Shifting Curve to the Right (Unloading O<sub>2</sub>):</b><br/>1. High partial pressure of carbon dioxide (high pCO<sub>2</sub>).<br/>2. High hydrogen ion concentration (low pH / acidosis).<br/>3. Elevated body temperature (as during vigorous muscle exercise).<br/>4. High levels of 2,3-bisphosphoglycerate (2,3-BPG).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain the Chloride Shift (Hamburger Phenomenon) during carbon dioxide transport.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. CO<sub>2</sub> produced by tissues diffuses into RBCs, reacting with water to form H<sub>2</sub>CO<sub>3</sub> (catalyzed by carbonic anhydrase), which dissociates into H<sup>+</sup> and HCO<sub>3</sub><sup>-</sup>.<br/>2. As HCO<sub>3</sub><sup>-</sup> accumulates, it diffuses out of the RBC into the blood plasma down its concentration gradient.<br/>3. To maintain electrical neutrality across the erythrocyte membrane, chloride ions (Cl<sup>-</sup>) rapidly move from plasma into the RBC. This exchange is called the <b>Chloride Shift (Hamburger Phenomenon)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Describe the sequence of electrical events during one complete Cardiac Cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A normal cardiac cycle lasts ~0.8 seconds and comprises:<br/>1. <b style="color: #00B0FF;">Joint Diastole (0.4 s):</b> All 4 chambers are relaxed; blood from venae cavae and pulmonary veins flows passively through open AV valves into ventricles (~70% filling).<br/>2. <b style="color: #00B0FF;">Atrial Systole (0.1 s):</b> SAN generates action potential; atria contract, pumping remaining 30% of blood into ventricles.<br/>3. <b style="color: #00B0FF;">Ventricular Systole (0.3 s):</b> AVN transmits impulse via Bundle of His and Purkinje fibers; ventricles contract; AV valves snap shut ('LUBB'); semilunar valves open, ejecting stroke volume (70 mL).<br/>4. <b style="color: #00B0FF;">Ventricular Diastole:</b> Ventricles relax; semilunar valves close ('DUPP').
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Explain why the Sino-Atrial Node (SAN) is called the Pacemaker of the human heart.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The SAN is composed of specialized auto-rhythmic, self-excitable cardiac muscle fibers located in the upper right wall of the right atrium. It possesses the highest intrinsic rate of spontaneous diastolic depolarization (generating 70-75 action potentials per minute without any external nervous stimulation), setting the basal rhythmic pace of contractions for the entire heart.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Differentiate between the First Heart Sound ('LUBB') and Second Heart Sound ('DUPP').</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">First Heart Sound ('LUBB'):</b> Caused by the simultaneous closure of the atrio-ventricular (Tricuspid and Bicuspid) valves at the onset of ventricular systole. It is low-pitched, dull, and of longer duration (~0.15 seconds).<br/>2. <b style="color: #00B0FF;">Second Heart Sound ('DUPP'):</b> Caused by the sharp closure of the Semilunar valves (aortic and pulmonary) at the beginning of ventricular diastole. It is high-pitched, sharp, and of shorter duration (~0.10 seconds).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain the clinical significance of the P, QRS, and T waves of an ECG.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">P-Wave:</b> Represents atrial depolarization; deviation indicates atrial enlargement.<br/>2. <b style="color: #00B0FF;">QRS-Complex:</b> Represents rapid ventricular depolarization; counting QRS complexes per unit time gives exact heart rate. Enlarged QRS indicates myocardial infarction or bundle branch block.<br/>3. <b style="color: #00B0FF;">T-Wave:</b> Represents ventricular repolarization; flattened or inverted T-waves indicate insufficient coronary blood supply (myocardial ischemia).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain the mechanism of Glomerular Ultrafiltration and Net Filtration Pressure (NFP).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ultrafiltration occurs across the glomerular-capsular membrane driven by pressure differentials:<br/>1. <b style="color: #00B0FF;">Glomerular Hydrostatic Pressure (GHP &approx; 60 mm Hg):</b> Blood pressure in glomerular capillaries driving fluid out.<br/>2. <b style="color: #00B0FF;">Colloid Osmotic Pressure of Blood (BCOP &approx; 32 mm Hg):</b> Opposes filtration due to plasma albumins.<br/>3. <b style="color: #00B0FF;">Capsular Hydrostatic Pressure (CHP &approx; 18 mm Hg):</b> Hydrostatic pressure in Bowman's space opposing filtration.<br/>&bull; <b>NFP = GHP - (BCOP + CHP) = 60 - (32 + 18) = +10 mm Hg</b>, producing a daily GFR of 180 Liters.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Describe the role of the Proximal Convoluted Tubule (PCT) in selective reabsorption.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The PCT is lined by simple cuboidal epithelium with dense microvilli (brush border) that dramatically expands surface area:<br/>1. Reabsorbs <b>100% of vital organic nutrients (Glucose and Amino Acids)</b> via secondary active transport coupled to Na<sup>+</sup>.<br/>2. Reabsorbs <b>70% to 80% of filtered electrolytes (Na<sup>+</sup>, K<sup>+</sup>, Cl<sup>-</sup>)</b> and water (obligatory water reabsorption).<br/>3. Reabsorbs ~90% of bicarbonate (HCO<sub>3</sub><sup>-</sup>) ions and selectively secretes H<sup>+</sup> and NH<sub>3</sub> to maintain blood pH.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain the Countercurrent Mechanism operating in the Medulla of the kidney.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The countercurrent system comprises the <b>Countercurrent Multiplier</b> (Loop of Henle) and <b>Countercurrent Exchanger</b> (Vasa Recta):<br/>1. Filtrate flows in opposite directions in the descending and ascending limbs of Henle's loop; blood flows in opposite directions in the two limbs of the vasa recta.<br/>2. The ascending limb actively pumps NaCl into the medullary interstitium, while the descending limb loses water by osmosis.<br/>3. This creates a hyperosmotic gradient from <b>300 mOsm/L in the cortex to 1,200 mOsm/L at the hairpin tip</b>, allowing collecting ducts to reabsorb water and produce concentrated urine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain the Renin-Angiotensin-Aldosterone System (RAAS) in regulating blood pressure.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. A decrease in renal blood flow, blood pressure, or GFR stimulates <b>Juxtaglomerular (JG) cells</b> to secrete the enzyme <b>Renin</b> into the bloodstream.<br/>2. Renin cleaves plasma <b>Angiotensinogen</b> (from liver) into <b>Angiotensin I</b>.<br/>3. <b>Angiotensin Converting Enzyme (ACE)</b> in lung capillaries converts Angiotensin I into <b>Angiotensin II</b>.<br/>4. Angiotensin II acts as a potent vasoconstrictor and stimulates the adrenal cortex to release <b>Aldosterone</b>, which promotes active Na<sup>+</sup> and water reabsorption in the DCT, elevating blood pressure and GFR back to normal.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Differentiate between True Ribs, False Ribs, and Floating Ribs in humans.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The 12 pairs of human ribs are classified into:<br/>1. <b style="color: #00B0FF;">True Ribs (Vertebrosternal Ribs):</b> 1st to 7th pairs; attached dorsally to thoracic vertebrae and ventrally connected directly to the sternum by hyaline costal cartilages.<br/>2. <b style="color: #00B0FF;">False Ribs (Vertebrochondral Ribs):</b> 8th, 9th, and 10th pairs; do not articulate directly with sternum, but attach to costal cartilage of the 7th rib.<br/>3. <b style="color: #00B0FF;">Floating Ribs (Vertebral Ribs):</b> 11th and 12th pairs; attached dorsally to vertebrae but remain completely free anteriorly (unattached).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Name four types of Synovial Joints with their locations in the human body.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Ball and Socket Joint:</b> Shoulder joint (between humerus head and scapular glenoid cavity) and Hip joint (between femur head and pelvic acetabulum).<br/>2. <b style="color: #00B0FF;">Hinge Joint:</b> Knee joint and Elbow joint (between humerus and ulna).<br/>3. <b style="color: #00B0FF;">Pivot Joint:</b> Atlanto-axial joint (between Atlas and Axis vertebrae).<br/>4. <b style="color: #00B0FF;">Gliding Joint:</b> Intercarpal joints (between adjacent wrist bones).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Describe the molecular components of Thin (Actin) and Thick (Myosin) myofilaments.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Thin Filaments:</b> Composed of two intertwined helical strands of <b>F-actin</b> (polymer of globular G-actin monomers). Running along actin grooves are two strands of <b>Tropomyosin</b>. Bound at intervals are <b>Troponin</b> complexes (Tn-T binds tropomyosin, Tn-I inhibits binding, Tn-C binds Ca<sup>2+</sup>).<br/>2. <b style="color: #00B0FF;">Thick Filaments:</b> Assembled from hundreds of <b>Meromyosin</b> molecules. Each consists of a globular head and short arm (Heavy Meromyosin / HMM) bearing ATPase and actin-binding sites, and a fibrous tail (Light Meromyosin / LMM).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Explain the Sliding Filament Theory of muscle contraction and changes in sarcomere bands.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Formulated by A.F. Huxley and H.E. Huxley (1954):<br/>1. During contraction, thin actin filaments slide inward over thick myosin filaments toward the center of the sarcomere (M-line), pulled by pivoting myosin cross-bridges.<br/>2. <b style="color: #00B0FF;">Structural Changes:</b><br/>&bull; The distance between two successive <b>Z-lines shortens</b> (sarcomere shortens).<br/>&bull; The light <b>I-band narrows and shortens</b>.<br/>&bull; The central <b>H-zone narrows or completely disappears</b>.<br/>&bull; The dark <b>A-band length remains completely unchanged</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Describe the generation and propagation of an Action Potential in an unmyelinated axon.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Resting State:</b> Axon is polarized at -70 mV due to Na<sup>+</sup>/K<sup>+</sup>-ATPase pump.<br/>2. <b style="color: #00B0FF;">Depolarization:</b> Threshold stimulus (-55 mV) opens voltage-gated Na<sup>+</sup> channels; rapid inward surge of Na<sup>+</sup> reverses polarity to <b>+30 mV (Action Potential)</b>.<br/>3. <b style="color: #00B0FF;">Repolarization:</b> Na<sup>+</sup> channels inactivate and voltage-gated K<sup>+</sup> channels open; K<sup>+</sup> rapidly diffuses out, restoring electronegativity.<br/>4. <b style="color: #00B0FF;">Propagation:</b> Localized circular currents stimulate adjacent inactive axonal membrane to threshold, propagating the impulse wave forward.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Differentiate between Electrical Synapses and Chemical Synapses.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Synaptic Cleft:</b> At electrical synapses, pre- and post-synaptic membranes are in physical contact via gap junctions (cleft &lt;0.2 nm); at chemical synapses, they are separated by a fluid-filled cleft (20 nm).<br/>2. <b style="color: #00B0FF;">Conduction Mechanism:</b> Electrical synapses allow direct, instantaneous ionic current flow without delay; chemical synapses require neurotransmitter exocytosis, diffusion, and receptor binding (causing a 0.5 ms synaptic delay).<br/>3. <b style="color: #00B0FF;">Directionality:</b> Electrical synapses can be bidirectional; chemical synapses are strictly unidirectional.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Describe the pathway of a simple Knee-Jerk Reflex Arc.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Stimulus &amp; Receptor:</b> Tapping the patellar tendon stretches the muscle spindle receptors in the quadriceps muscle.<br/>2. <b style="color: #00B0FF;">Afferent Pathway:</b> Sensory neurons transmit action potentials via the dorsal root ganglion into the spinal cord grey matter.<br/>3. <b style="color: #00B0FF;">Synapse:</b> Sensory neuron synapses directly with an alpha motor neuron in the ventral horn (monosynaptic pathway).<br/>4. <b style="color: #00B0FF;">Efferent Pathway &amp; Effector:</b> Motor axon conducts impulses to quadriceps muscle fibers, triggering rapid contraction that jerks the lower leg forward.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the antagonistic action of Insulin and Glucagon in maintaining blood glucose homeostasis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Insulin (Hypoglycemic Hormone):</b> Secreted by pancreatic &beta;-cells in response to elevated blood glucose. Stimulates cellular glucose uptake and utilization via GLUT-4 transporters, accelerates <b>Glycogenesis</b> (glucose &rarr; glycogen) in liver and skeletal muscles, and inhibits gluconeogenesis, lowering blood glucose.<br/>2. <b style="color: #00B0FF;">Glucagon (Hyperglycemic Hormone):</b> Secreted by pancreatic &alpha;-cells in response to hypoglycemia. Stimulates <b>Glycogenolysis</b> (glycogen breakdown) and <b>Gluconeogenesis</b> in the liver, releasing free glucose into the blood.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Differentiate between Parathyroid Hormone (PTH) and Thyrocalcitonin (TCT) in calcium metabolism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Parathyroid Hormone (PTH / Hypercalcemic Hormone):</b> Increases blood Ca<sup>2+</sup> levels by stimulating osteoclastic bone resorption (demineralization), promoting renal tubular reabsorption of Ca<sup>2+</sup>, and enhancing intestinal Ca<sup>2+</sup> absorption via Vitamin D activation.<br/>2. <b style="color: #00B0FF;">Thyrocalcitonin (TCT / Hypocalcemic Hormone):</b> Secreted by thyroid C-cells when blood Ca<sup>2+</sup> is high. Inhibits osteoclastic bone resorption and promotes Ca<sup>2+</sup> deposition in bones, lowering serum calcium levels.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Explain the Mechanism of Action of Peptide Hormones via Second Messengers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Peptide and protein hormones (e.g., FSH, LH, Glucagon, Adrenaline) are water-soluble and cannot diffuse across the hydrophobic lipid bilayer membrane:<br/>1. The hormone (First Messenger) binds to a high-affinity specific <b>Cell-Surface Receptor</b> on the target plasma membrane.<br/>2. This activates membrane-associated <b>G-proteins</b>, which in turn activate the effector enzyme <b>Adenylate Cyclase</b>.<br/>3. Adenylate cyclase converts cellular ATP into <b>Cyclic AMP (cAMP) (Second Messenger)</b>.<br/>4. cAMP activates Protein Kinase A, triggering a cascade of protein phosphorylations that execute physiological responses.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain the Mechanism of Action of Lipid-Soluble Steroid Hormones.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Steroid hormones (e.g., Estrogen, Progesterone, Testosterone, Cortisol) and thyroid hormones are hydrophobic and easily dissolve through the plasma membrane into target cells:<br/>1. They bind to specific <b>Intracellular Receptors</b> located in the cytoplasm or inside the nucleus, forming a Hormone-Receptor Complex.<br/>2. The complex translocates into the nucleus and binds to specific DNA sequences called <b>Hormone Response Elements (HRE)</b>.<br/>3. This directly modulates gene transcription, stimulating the synthesis of specific mRNAs and subsequent translation of new functional proteins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: What is Emphysema? State its primary cause and respiratory consequences.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Emphysema is a chronic, irreversible respiratory disorder characterized by the progressive destruction of alveolar walls and loss of pulmonary elasticity:<br/>&bull; <i>Primary Cause:</i> Chronic cigarette smoking and exposure to severe industrial toxic fumes.<br/>&bull; <i>Consequences:</i> Destruction of alveolar septa merges adjacent alveoli into large, inelastic air spaces, dramatically reducing the effective surface area available for gas exchange and causing severe shortness of breath (dyspnea).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: What is Atherosclerosis? How does it lead to Myocardial Infarction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Atherosclerosis (Coronary Artery Disease / CAD) is the narrowing of the lumen of coronary arteries caused by the progressive deposition of <b>Atheromatous Plaques</b> (composed of cholesterol, lipids, fibrous tissue, and calcium salts) in the arterial intima. As the lumen constricts, blood and oxygen delivery to cardiac muscles is drastically compromised (causing Angina Pectoris). If a plaque ruptures, a thrombus forms that completely occludes the vessel, causing ischemic tissue necrosis known as <b>Myocardial Infarction (Heart Attack)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the cause and clinical features of Uremia.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Uremia is a life-threatening clinical syndrome caused by acute or chronic renal failure, where kidneys fail to filter nitrogenous wastes, resulting in the massive accumulation of <b>Urea and other toxic metabolic wastes</b> in circulating blood (&gt;50 mg/dL). Symptoms include nausea, vomiting, lethargy, pulmonary edema, metabolic acidosis, pericarditis, and coma, necessitating emergency <b>Hemodialysis</b> or kidney transplantation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Describe the working principle of an Artificial Kidney (Hemodialysis).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In hemodialysis, arterial blood is pumped through a dialyzer after adding an anticoagulant (Heparin):<br/>1. Blood flows through cellophane semi-permeable coiled tubes immersed in a <b>Dialyzing Fluid</b> containing all plasma solutes except nitrogenous wastes, having the exact osmotic concentration of normal plasma.<br/>2. Excess urea, uric acid, and creatinine diffuse down concentration gradients across cellophane pores into the dialyzing fluid.<br/>3. Cleansed blood is warmed, treated with Anti-heparin, and returned to a vein.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Differentiate between Osteoporosis and Gouty Arthritis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Osteoporosis:</b> An age-related skeletal disorder characterized by progressive loss of bone mineral density and deterioration of micro-architecture, making bones fragile and prone to fractures; primarily caused by post-menopausal estrogen deficiency and calcium depletion.<br/>2. <b style="color: #00B0FF;">Gouty Arthritis (Gout):</b> A metabolic inflammatory disorder caused by the deposition of needle-like <b>Monosodium Urate Crystals</b> in joint synovial cavities due to hyperuricemia (excess uric acid), leading to severe joint redness, swelling, and acute pain.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain the physiological role of the Sarcoplasmic Reticulum in muscle contraction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Sarcoplasmic Reticulum (SR) is a specialized smooth endoplasmic reticulum in striated muscle fibers that acts as an intracellular <b>Calcium Storage Reservoir</b>. When a sarcolemmal action potential spreads down transverse T-tubules, it triggers voltage-gated ryanodine receptors to release high concentrations of stored Ca<sup>2+</sup> into the sarcoplasm, initiating cross-bridge cycling. Following contraction, Ca<sup>2+</sup>-ATPase pumps actively sequester Ca<sup>2+</sup> back into SR cisternae, causing relaxation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: What is Rigor Mortis? What causes it at the molecular level?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Rigor Mortis is the temporary stiffening of skeletal muscles that develops a few hours after clinical death:<br/>&bull; <i>Molecular Mechanism:</i> Following cessation of circulation and respiration, ATP synthesis completely halts. While Ca<sup>2+</sup> leaks from the sarcoplasmic reticulum allowing cross-bridges to form, <b>detachment of the myosin head from actin strictly requires fresh ATP binding</b>. In the complete absence of ATP, cross-bridges remain irreversibly locked in the rigid contracted state until autolytic lysosomal enzymes decompose the proteins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain Saltatory Conduction and why it is faster than continuous conduction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Saltatory conduction occurs in myelinated nerve fibers where the myelin sheath acts as an electrical insulator, interrupted only at unmyelinated <b>Nodes of Ranvier</b> (where voltage-gated Na<sup>+</sup> channels are densely clustered). Rather than propagating continuously along every micrometer of axonal membrane, the action potential <b>'jumps' electrotonically from one node of Ranvier to the next</b>, accelerating conduction velocity up to 120 m/s while consuming significantly less metabolic ATP.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Describe the functional divisions of the Human Autonomic Nervous System.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Sympathetic Nervous System ('Fight-or-Flight'):</b> Originates from thoracolumbar spinal cord; secretes Noradrenaline; accelerates heart rate, dilates bronchioles and pupils, inhibits digestion, and mobilizes glucose for emergency stress responses.<br/>2. <b style="color: #00B0FF;">Parasympathetic Nervous System ('Rest-and-Digest'):</b> Originates from craniosacral outflow (Vagus nerve); secretes Acetylcholine; slows heart rate, constricts pupils, promotes gastrointestinal peristalsis and secretion, conserving metabolic energy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: What is the Blind Spot in the human eye? Why does it lack vision?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Blind Spot (Optic Disc) is the circular region at the posterior pole of the retina where the sensory axons of ganglion cells converge to exit the eye as the <b>Optic Nerve</b>, and where retinal blood vessels enter and exit.<br/>&bull; <i>Why Lacks Vision:</i> This specific anatomical site is completely <b>devoid of photoreceptor cells (both Rods and Cones)</b>; hence, any image focused on the optic disc cannot be perceived.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Describe the structure and function of the Organ of Corti in hearing.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Organ of Corti is the sensory organ of hearing resting on the <b>Basilar Membrane</b> inside the cochlear duct (scala media) of the inner ear:<br/>&bull; <i>Structure:</i> Contains rows of sensory <b>Hair Cells</b> bearing apical stereocilia projecting toward the gelatinous overlying <b>Tectorial Membrane</b>.<br/>&bull; <i>Mechanism:</i> Sound pressure waves vibrate the basilar membrane, bending hair cell stereocilia against the tectorial membrane, generating action potentials transmitted via the auditory nerve to the brain.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Explain the difference between Diabetes Mellitus and Diabetes Insipidus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Diabetes Mellitus:</b> Caused by absolute deficiency or hyposecretion of <b>Insulin</b> by pancreatic &beta;-cells; characterized by hyperglycemia (elevated blood glucose), glycosuria (glucose in urine), and ketone body formation.<br/>2. <b style="color: #00B0FF;">Diabetes Insipidus:</b> Caused by hyposecretion of <b>Antidiuretic Hormone (ADH / Vasopressin)</b> by the neurohypophysis; characterized by extreme polyuria (excretion of 10-20 L of dilute urine daily) and polydipsia (excessive thirst) without any glucose in the urine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Describe the clinical features and causes of Grave's Disease (Exophthalmic Goiter).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Grave's Disease is an autoimmune endocrine disorder caused by thyroid-stimulating immunoglobulins (TSI antibodies) that bind and activate TSH receptors, producing extreme <b>Hyperthyroidism</b>:<br/>&bull; <i>Clinical Features:</i> Greatly enlarged thyroid gland (goiter), hypermetabolism (rapid weight loss despite voracious appetite), excessive heat intolerance, tachycardia, and characteristic <b>Exophthalmos (protrusion of eyeballs)</b> due to retro-orbital edema.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: What is Addison's Disease? Name the deficient hormones and symptoms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Addison's Disease is an endocrine disorder caused by the autoimmune destruction of the <b>Adrenal Cortex</b>, leading to severe deficiency of both <b>Glucocorticoids (Cortisol) and Mineralocorticoids (Aldosterone)</b>:<br/>&bull; <i>Symptoms:</i> Chronic fatigue, severe muscle weakness, hypotension, hypoglycemia, impaired stress response, and characteristic <b>bronze hyperpigmentation of the skin and mucous membranes</b> (due to compensatory ACTH elevation).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain the hormonal role of Atrial Natriuretic Factor (ANF) and its opposition to RAAS.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Atrial Natriuretic Factor (ANF) is a peptide hormone secreted by the atrial walls of the heart when atrial stretch receptors detect elevated blood volume or high arterial pressure:<br/>&bull; <i>Action:</i> Acts as a potent vasodilator and stimulates renal excretion of sodium and water (natriuresis and diuresis). By directly inhibiting the secretion of Renin, Angiotensin II, and Aldosterone, ANF acts as a physiological <b>antagonist to the RAAS pathway</b>, reducing blood pressure.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Describe the endocrine functions of the Kidney.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Besides excretion, the kidneys perform vital endocrine functions:<br/>1. <b style="color: #00B0FF;">Erythropoietin (EPO):</b> Secreted by peritubular interstitial cells in response to hypoxia; stimulates erythropoiesis (red blood cell production) in bone marrow.<br/>2. <b style="color: #00B0FF;">Calcitriol (1,25-dihydroxyvitamin D<sub>3</sub>):</b> Biologically active form of Vitamin D synthesized by proximal tubules; stimulates intestinal calcium absorption.<br/>3. <b style="color: #00B0FF;">Renin:</b> Secreted by JG cells to activate the RAAS blood pressure maintenance cascade.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain how the Respiratory Rhythm Center in the medulla regulates breathing.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The primary rhythmic generator of breathing is the <b>Inspiratory Center in the Medulla Oblongata</b>:<br/>1. Generates intrinsic rhythmic discharges to the diaphragm and intercostal muscles producing quiet resting breathing.<br/>2. Regulated by the <b>Pneumotaxic Center</b> in the pons, which emits inhibitory signals that shorten inspiration duration, increasing respiratory rate.<br/>3. Modulated by <b>Central Chemoreceptors</b> in the medulla and peripheral chemoreceptors in carotid/aortic bodies that are highly sensitive to increases in <b>pCO<sub>2</sub> and [H<sup>+</sup>]</b>, stimulating ventilation to eliminate excess acid.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.15), rgba(2, 119, 189, 0.15)); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00B0FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Complete Organ Monographs, Double Circulation Circuits, Sliding Filament Proofs &amp; Master Synthesis Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss the Mechanism of Breathing in Humans: Inspiratory and Expiratory Mechanics, Pulmonary Volumes, and Capacities.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Inspiratory Mechanics:</b> Active process initiated by contraction of the diaphragm (flattens, expanding antero-posterior axis) and external intercostals (elevates ribs/sternum, expanding dorso-ventral axis). Increased thoracic volume decreases intra-pulmonary pressure below atmospheric (-1 to -3 mm Hg), causing air influx.<br/><br/><b style="color: #00B0FF;">2. Expiratory Mechanics:</b> Passive process at rest driven by elastic recoil of lungs and relaxation of inspiratory muscles. Forced expiration recruits internal intercostals and abdominal muscles.<br/><br/><b style="color: #00B0FF;">3. Spirometric Lung Volumes:</b><br/>&bull; <i>Tidal Volume (TV):</i> 500 mL.<br/>&bull; <i>Inspiratory Reserve Volume (IRV):</i> 2,500 - 3,000 mL.<br/>&bull; <i>Expiratory Reserve Volume (ERV):</i> 1,000 - 1,100 mL.<br/>&bull; <i>Residual Volume (RV):</i> 1,100 - 1,200 mL (cannot be measured by spirometry).<br/><br/><b style="color: #00B0FF;">4. Pulmonary Capacities:</b><br/>&bull; <i>Inspiratory Capacity (IC) = TV + IRV</i> (~3,000 - 3,500 mL).<br/>&bull; <i>Functional Residual Capacity (FRC) = ERV + RV</i> (~2,100 - 2,300 mL).<br/>&bull; <i>Vital Capacity (VC) = TV + IRV + ERV</i> (~4,500 mL).<br/>&bull; <i>Total Lung Capacity (TLC) = VC + RV</i> (~5,800 - 6,000 mL).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Discuss Gas Transport in Blood: Oxygen Transport, Bohr Effect, Carbon Dioxide Modes, and the Chloride Shift.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Oxygen Transport:</b><br/>&bull; 3% dissolved in plasma; 97% bound to Hemoglobin as <b>Oxyhemoglobin (Hb<sub>4</sub>O<sub>8</sub>)</b>.<br/>&bull; Cooperativity generates a <b>Sigmoid Dissociation Curve</b>.<br/>&bull; <i>Bohr Effect:</i> In active tissues, high pCO<sub>2</sub>, high [H<sup>+</sup>], and elevated temperature shift curve to the right, promoting O<sub>2</sub> delivery.<br/><br/><b style="color: #00B0FF;">2. Carbon Dioxide Transport:</b><br/>&bull; <i>1. Bicarbonate Ions (70%):</i> CO<sub>2</sub> + H<sub>2</sub>O &hArr; H<sub>2</sub>CO<sub>3</sub> &hArr; H<sup>+</sup> + HCO<sub>3</sub><sup>-</sup> (catalyzed by RBC <b>Carbonic Anhydrase</b>). As HCO<sub>3</sub><sup>-</sup> diffuses out into plasma, Cl<sup>-</sup> diffuses in (<b>Chloride Shift / Hamburger Phenomenon</b>).<br/>&bull; <i>2. Carbaminohemoglobin (20-25%):</i> CO<sub>2</sub> binds amine groups of globin.<br/>&bull; <i>3. Dissolved in Plasma (7%):</i> Carried in physical solution.<br/><br/><b style="color: #00B0FF;">3. Haldane Effect:</b> Deoxygenation of blood increases its capacity to carry CO<sub>2</sub>, whereas oxygenation in alveolar capillaries promotes CO<sub>2</sub> unloading.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Discuss the Human Cardiac Cycle in exhaustive temporal detail: Valve Actions, Pressure Waves, Heart Sounds, and ECG Correlation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Phasic Breakdown of Cycle (0.8 s duration at 72 bpm):</b><br/>&bull; <i>Joint Diastole (0.4 s):</i> Atria and ventricles relaxed. AV valves open; blood fills ventricles passively (~70%). ECG: Flat baseline between T and P.<br/>&bull; <i>Atrial Systole (0.1 s):</i> SAN fires; atria contract, adding last 30% of blood. ECG: <b>P-Wave</b>.<br/>&bull; <i>Isovolumetric Contraction (0.05 s):</i> Ventricles begin contracting; AV valves snap shut (<b>First Heart Sound 'LUBB'</b>). All valves closed, pressure spikes. ECG: <b>QRS-Complex</b>.<br/>&bull; <i>Ventricular Ejection (0.25 s):</i> Intraventricular pressure exceeds aortic/pulmonary pressure; semilunar valves open; Stroke Volume (70 mL) ejected.<br/>&bull; <i>Isovolumetric Relaxation (0.08 s):</i> Ventricles relax; semilunar valves snap shut (<b>Second Heart Sound 'DUPP'</b>). ECG: <b>T-Wave</b>.<br/><br/><b style="color: #00B0FF;">2. Hemodynamic Formulas:</b> Cardiac Output = Stroke Volume (70 mL) &times; Heart Rate (72 bpm) &approx; 5,000 mL/min.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss Double Circulation in Humans: Systemic, Pulmonary, and Hepatic Portal Circuits, Blood Vessels, and Hypertension.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Architectural Principle:</b> Deoxygenated and oxygenated blood streams are completely separated by 4-chambered septa, flowing twice through the heart per complete circuit.<br/><br/><b style="color: #00B0FF;">2. Three Circulatory Circuits:</b><br/>&bull; <i>Pulmonary Circulation:</i> Right Ventricle &rarr; Pulmonary Artery &rarr; Lungs &rarr; 4 Pulmonary Veins &rarr; Left Atrium.<br/>&bull; <i>Systemic Circulation:</i> Left Ventricle &rarr; Ascending Aorta &rarr; Systemic Capillaries &rarr; Venae Cavae &rarr; Right Atrium.<br/>&bull; <i>Hepatic Portal System:</i> Collects absorbed nutrients from stomach and intestines via Hepatic Portal Vein into liver sinusoidal capillaries before draining into the inferior vena cava.<br/><br/><b style="color: #00B0FF;">3. Histological Vessel Structure:</b> Tunica intima (endothelium) + Tunica media (smooth muscle and elastic fibers; thick in arteries, thin in veins) + Tunica externa (collagen connective tissue).<br/><br/><b style="color: #00B0FF;">4. Hypertension:</b> Sustained systolic pressure &gt;140 mm Hg or diastolic &gt;90 mm Hg; damages vital organs (kidney failure, cerebral stroke, heart attack).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Discuss Urine Formation in exhaustive physiological depth: Ultrafiltration, Selective Reabsorption, Tubular Secretion, and GFR Mechanics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Glomerular Ultrafiltration:</b><br/>&bull; Blood arrives via wide afferent arteriole and exits narrow efferent arteriole, generating high <b>Glomerular Hydrostatic Pressure (60 mm Hg)</b>.<br/>&bull; Ultrafiltrate passes through 3 layers: fenestrated capillary endothelium, basement membrane, and podocyte filtration slits.<br/>&bull; Net Filtration Pressure (NFP) = 60 - (32 + 18) = <b>10 mm Hg</b>.<br/>&bull; Yields <b>GFR of 125 mL/min (180 L/day)</b>.<br/><br/><b style="color: #00B0FF;">2. Tubular Reabsorption (99% recovered):</b><br/>&bull; <i>PCT:</i> Obligatory reabsorption of 100% glucose and amino acids (active), and 70-80% water and Na<sup>+</sup>.<br/>&bull; <i>Loop of Henle:</i> Descending limb reabsorbs water; ascending limb reabsorbs NaCl, generating medullary hypertonicity.<br/>&bull; <i>DCT &amp; Collecting Duct:</i> Facultative reabsorption of water (regulated by ADH) and Na<sup>+</sup> (regulated by Aldosterone).<br/><br/><b style="color: #00B0FF;">3. Tubular Secretion:</b> Epithelial cells actively secrete H<sup>+</sup>, K<sup>+</sup>, and NH<sub>3</sub> into the tubular lumen to maintain acid-base and electrolyte balance.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss the Renal Countercurrent Multiplier and Exchanger System in Medullary Hyperosmolarity (300 to 1200 mOsm/L).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Structural Components:</b> The hairpin Loop of Henle of juxtamedullary nephrons acts as the <b>Countercurrent Multiplier</b>; the parallel hairpin Vasa Recta capillary bed acts as the <b>Countercurrent Exchanger</b>.<br/><br/><b style="color: #00B0FF;">2. Multiplier Mechanics in Henle's Loop:</b><br/>&bull; <i>Descending Limb:</i> Highly permeable to water, impermeable to electrolytes. Water diffuses out into hyperosmotic medullary interstitium, concentrating filtrate from 300 mOsm/L at cortex to 1,200 mOsm/L at the hairpin turn.<br/>&bull; <i>Ascending Limb:</i> Impermeable to water. Thin and thick segments actively pump NaCl out into interstitium, lowering filtrate osmolality back to 200 mOsm/L.<br/><br/><b style="color: #00B0FF;">3. Exchanger Mechanics in Vasa Recta:</b><br/>&bull; Blood enters descending vasa recta, taking up NaCl and losing water; ascending vasa recta reverses this, losing NaCl and taking up water.<br/>&bull; This preserves the interstitial hyperosmotic gradient without washing out medullary solutes.<br/><br/><b style="color: #00B0FF;">4. Collecting Duct Role:</b> Permeable to urea and water under ADH; produces concentrated hypertonic urine (1,200 mOsm/L), conserving body water.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Discuss the Regulation of Kidney Function: Hypothalamic ADH Feedback, Juxtaglomerular RAAS Cascade, and Atrial ANF Antagonism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Hypothalamic Osmoreceptor &amp; ADH Pathway:</b><br/>&bull; Excessive fluid loss or high blood osmolality stimulates hypothalamic osmoreceptors.<br/>&bull; Triggers neurohypophysis to release <b>Antidiuretic Hormone (ADH / Vasopressin)</b>.<br/>&bull; ADH inserts aquaporin-2 water channels in DCT and collecting duct, increasing water reabsorption and preventing dehydration.<br/><br/><b style="color: #00B0FF;">2. Juxtaglomerular RAAS Cascade:</b><br/>&bull; Drop in GFR/BP stimulates JG cells to secrete <b>Renin</b> &rarr; cleaves Angiotensinogen to Angiotensin I &rarr; ACE converts it to <b>Angiotensin II</b>.<br/>&bull; Angiotensin II constricts efferent arterioles and stimulates adrenal cortex to release <b>Aldosterone</b> &rarr; Na<sup>+</sup> and water reabsorption increases, restoring GFR.<br/><br/><b style="color: #00B0FF;">3. ANF Antagonistic Feedback:</b> High blood volume stretches heart atria, releasing <b>Atrial Natriuretic Factor (ANF)</b> &rarr; causes vasodilation and natriuresis, inhibiting renin and aldosterone, lowering BP back to baseline.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Provide an Exhaustive Anatomical Survey of the Human Skeletal System: Axial vs Appendicular Skeletons and Joints.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Total Bones:</b> 206 bones divided into Axial (80) and Appendicular (126).<br/><br/><b style="color: #00B0FF;">2. Axial Skeleton (80 bones):</b><br/>&bull; <i>Skull (22 + 7):</i> Cranial bones (8: frontal, 2 parietal, 2 temporal, occipital, sphenoid, ethmoid); Facial bones (14: 2 maxillae, 2 zygomatic, mandible, etc.); 6 auditory ossicles (malleus, incus, stapes); 1 hyoid.<br/>&bull; <i>Vertebral Column (26):</i> 7 Cervical, 12 Thoracic, 5 Lumbar, 1 Sacrum (5 fused), 1 Coccyx (4 fused).<br/>&bull; <i>Thoracic Cage:</i> Sternum (1) + 12 pairs of Ribs (7 true, 3 false, 2 floating).<br/><br/><b style="color: #00B0FF;">3. Appendicular Skeleton (126 bones):</b><br/>&bull; <i>Pectoral Girdles (4):</i> 2 Clavicles + 2 Scapulae.<br/>&bull; <i>Upper Limbs (60):</i> Humerus, radius, ulna, 8 carpals, 5 metacarpals, 14 phalanges each.<br/>&bull; <i>Pelvic Girdle (2):</i> 2 Coxal bones (fused ilium, ischium, pubis).<br/>&bull; <i>Lower Limbs (60):</i> Femur, patella, tibia, fibula, 7 tarsals, 5 metatarsals, 14 phalanges each.<br/><br/><b style="color: #00B0FF;">4. Joint Classification:</b> Fibrous (immovable sutures) &bull; Cartilaginous (slightly movable pubic symphysis) &bull; Synovial (freely movable with synovial fluid: ball-and-socket, hinge, pivot, gliding, saddle).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Discuss the Sliding Filament Theory of Muscle Contraction: Molecular Cross-Bridge Cycle, Calcium Cycling, and Energetics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Neuromuscular Excitation:</b> Action potential at axon terminal releases Acetylcholine &rarr; binds nicotinic receptors &rarr; generates motor end-plate potential &rarr; propagates along sarcolemma and deep into <b>T-Tubules</b>.<br/><br/><b style="color: #00B0FF;">2. Calcium Trigger:</b> Depolarization opens voltage-gated ryanodine channels in <b>Sarcoplasmic Reticulum</b> &rarr; massive Ca<sup>2+</sup> efflux into sarcoplasm &rarr; Ca<sup>2+</sup> binds <b>Troponin C</b> &rarr; conformational change pulls Tropomyosin out of the myosin-binding cleft on actin.<br/><br/><b style="color: #00B0FF;">3. The 4-Step Cross-Bridge Cycle:</b><br/>&bull; <i>1. Cross-Bridge Formation:</i> Myosin head containing ADP + Pi binds to actin active site.<br/>&bull; <i>2. Power Stroke:</i> Release of Pi and ADP triggers 45&deg; power stroke, pulling actin filament toward the M-line (sarcomere shortens; H-zone/I-band shorten).<br/>&bull; <i>3. Cross-Bridge Detachment:</i> Fresh ATP binds to myosin head, instantly severing the actin-myosin bond.<br/>&bull; <i>4. Cocking of Myosin:</i> Myosin ATPase hydrolyzes ATP &rarr; ADP + Pi, cocking the head back into high-energy position.<br/><br/><b style="color: #00B0FF;">4. Relaxation:</b> Ca<sup>2+</sup>-ATPase pumps pump Ca<sup>2+</sup> back into SR; troponin returns to inhibitory state.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Discuss the Biophysics of Nerve Impulse Conduction: Resting Membrane Potential, Action Potential, and Synaptic Transmission.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Resting Membrane Potential (-70 mV):</b> Maintained by high resting K<sup>+</sup> permeability and low Na<sup>+</sup> permeability, coupled to the electrogenic <b>Na<sup>+</sup>/K<sup>+</sup>-ATPase pump</b> which continuously expels 3 Na<sup>+</sup> for every 2 K<sup>+</sup> imported.<br/><br/><b style="color: #00B0FF;">2. Action Potential Phases:</b><br/>&bull; <i>Threshold Stimulus:</i> Depolarization to -55 mV triggers voltage-gated Na<sup>+</sup> activation gates to open.<br/>&bull; <i>Depolarization:</i> Explosive influx of Na<sup>+</sup> reverses potential from -70 mV to <b>+30 mV</b>.<br/>&bull; <i>Repolarization:</i> Na<sup>+</sup> channels inactivate; voltage-gated K<sup>+</sup> channels open, causing massive K<sup>+</sup> efflux restoring negativity.<br/>&bull; <i>Hyperpolarization &amp; Refractory Period:</i> Prolonged K<sup>+</sup> efflux drops potential to -80 mV before resting state is restored.<br/><br/><b style="color: #00B0FF;">3. Chemical Synaptic Transmission:</b> Action potential arrival depolarizes synaptic knob &rarr; voltage-gated Ca<sup>2+</sup> channels open &rarr; Ca<sup>2+</sup> influx triggers synaptotagmin-mediated vesicle fusion &rarr; exocytosis of Acetylcholine into 20-nm cleft &rarr; binds post-synaptic receptors &rarr; generates EPSP &rarr; degraded by Acetylcholinesterase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Discuss the Functional Anatomy of the Human Brain: Forebrain, Midbrain, Hindbrain, Reflex Arc, and Limbic System.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Forebrain (Prosencephalon):</b><br/>&bull; <i>Cerebrum:</i> Two cerebral hemispheres joined by <b>Corpus Callosum</b>. Cortex possesses sensory areas, motor areas, and association areas (memory, communication, learning).<br/>&bull; <i>Thalamus:</i> Major relay station for sensory and motor signaling.<br/>&bull; <i>Hypothalamus:</i> Regulates body temperature, hunger, thirst, circadian rhythms, and endocrine pituitary secretion.<br/>&bull; <i>Limbic System:</i> Amygdala, hippocampus, and hypothalamus; emotional brain governing pleasure, fear, rage, and sexual motivation.<br/><br/><b style="color: #00B0FF;">2. Midbrain (Mesencephalon):</b> Cerebral aqueduct traverses it; dorsal roof exhibits 4 optic/auditory lobes called <b>Corpora Quadrigemina</b>.<br/><br/><b style="color: #00B0FF;">3. Hindbrain (Rhombencephalon):</b><br/>&bull; <i>Pons:</i> Fiber tracts coordinating medulla and cerebellum; contains pneumotaxic center.<br/>&bull; <i>Cerebellum:</i> Highly convoluted cortex coordinating voluntary muscle equilibrium and posture.<br/>&bull; <i>Medulla Oblongata:</i> Vital cardiovascular, respiratory, vomiting, and swallowing reflex centers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Discuss the Human Eye: Optical Anatomy, Retinal Histology, Photochemistry of Vision, and Accommodation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Optical Anatomy:</b> Outer Fibrous Tunic (Sclera and transparent Cornea) &bull; Middle Vascular Uvea (Choroid, Ciliary Body, and Iris with central Pupil) &bull; Biconvex crystalline lens suspended by suspensory zonules.<br/><br/><b style="color: #00B0FF;">2. Retinal Histological Layers (Outward to Inward):</b><br/>&bull; <i>Pigment Epithelium:</i> Absorbs stray light.<br/>&bull; <i>Photoreceptor Layer:</i> <b>Rods</b> (~120 million, containing Rhodopsin for twilight/scotopic vision) and <b>Cones</b> (~6 million, containing photopsins for daylight/photopic color vision: red, green, blue).<br/>&bull; <i>Bipolar Cell Layer:</i> Intermediate neurons.<br/>&bull; <i>Ganglion Cell Layer:</i> Axons converge to form Optic Nerve.<br/><br/><b style="color: #00B0FF;">3. Photochemistry (Wald &amp; Brown):</b> Light strikes Rhodopsin &rarr; photo-isomerizes 11-cis-retinal into all-trans-retinal &rarr; retinal dissociates from Opsin &rarr; conformational opsin change activates Transducin G-protein &rarr; activates PDE &rarr; drops cGMP &rarr; closes Na<sup>+</sup> channels &rarr; <b>Hyperpolarization</b> generating action potentials transmitted to visual cortex.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Discuss the Human Ear: Outer, Middle, and Inner Ear Anatomy, Organ of Corti, Hearing Biophysics, and Balance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Outer &amp; Middle Ear:</b> Pinna and external auditory meatus direct sound waves to <b>Tympanic Membrane</b>. Middle ear cavity houses 3 ear ossicles acting as mechanical levers: <b>Malleus (Hammer), Incus (Anvil), Stapes (Stirrup)</b>, increasing pressure 20-fold onto the Oval Window of the cochlea. Eustachian tube equalizes atmospheric pressure.<br/><br/><b style="color: #00B0FF;">2. Inner Ear (Labyrinth):</b> Bony labyrinth enclosing membranous labyrinth filled with endolymph (perilymph outside):<br/>&bull; <i>Cochlea (Hearing):</i> Coiled organ divided into Scala Vestibuli, Scala Media, Scala Tympani. Resting on basilar membrane is the <b>Organ of Corti</b> bearing sensory hair cells with stereocilia.<br/>&bull; <i>Vestibular Apparatus (Balance &amp; Equilibrium):</i> 3 Semi-circular canals with swollen <b>Ampullae</b> containing sensory <b>Crista Ampullaris</b> (detects angular rotational acceleration) + <b>Utricle and Saccule</b> containing sensory <b>Maculae</b> with otoliths (detects linear acceleration and gravity).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Provide an Exhaustive Survey of the Hypothalamus and Pituitary Gland: Feedback Control and Target Organ Actions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Anatomical Relationship:</b> Hypothalamus connects to the pituitary via the hypophyseal stalk (infundibulum). Connects to anterior pituitary via <b>Hypophyseal Portal System</b>, and to posterior pituitary via direct hypothalamic axonal projections.<br/><br/><b style="color: #00B0FF;">2. Hypothalamic Hormones:</b> GnRH, TRH, CRH, GHRH, PRH, and Somatostatin (inhibiting GH).<br/><br/><b style="color: #00B0FF;">3. Anterior Pituitary (Adenohypophysis):</b><br/>&bull; <i>Growth Hormone (GH):</i> Protein anabolism, bone elongation; excess causes Gigantism/Acromegaly; deficiency causes Dwarfism.<br/>&bull; <i>TSH:</i> Stimulates thyroid T3/T4.<br/>&bull; <i>ACTH:</i> Stimulates adrenal cortex cortisol.<br/>&bull; <i>FSH &amp; LH (Gonadotropins):</i> Regulate spermatogenesis and oogenesis/ovulation.<br/>&bull; <i>Prolactin (PRL):</i> Mammary gland lactation.<br/><br/><b style="color: #00B0FF;">4. Posterior Pituitary (Neurohypophysis):</b> Stores and releases hypothalamic neurohormones: <b>Oxytocin</b> (milk ejection and labor contractions) and <b>Vasopressin / ADH</b> (water reabsorption in kidney DCT).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Discuss the Thyroid and Parathyroid Glands: Hormones, Calcium Homeostasis, and Pathological Disorders.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Thyroid Gland:</b> Two butterfly-shaped lobes connected by an isthmus:<br/>&bull; <i>Follicular Cells:</i> Synthesize <b>Thyroxine (T<sub>4</sub>) and Triiodothyronine (T<sub>3</sub>)</b> using iodine and tyrosine residues of thyroglobulin. Regulate Basal Metabolic Rate (BMR), thermogenesis, erythropoiesis, and mental development.<br/>&bull; <i>Parafollicular C-Cells:</i> Secrete <b>Thyrocalcitonin (TCT)</b> (hypocalcemic, deposits calcium in bones).<br/><br/><b style="color: #00B0FF;">2. Parathyroid Glands:</b> 4 tiny glands on posterior thyroid; secrete <b>Parathyroid Hormone (PTH)</b> (hypercalcemic: stimulates bone osteoclasts, renal Ca<sup>2+</sup> reabsorption, intestinal Ca<sup>2+</sup> uptake).<br/><br/><b style="color: #00B0FF;">3. Pathological Disorders:</b><br/>&bull; <i>Cretinism:</i> Congenital hypothyroidism causing stunted growth and severe mental retardation.<br/>&bull; <i>Grave's Disease:</i> Autoimmune hyperthyroidism with exophthalmos.<br/>&bull; <i>Tetany:</i> Hypoparathyroidism causing sharp drop in serum Ca<sup>2+</sup>, inducing severe muscle spasms.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Discuss the Adrenal Glands in exhaustive physiological depth: Adrenal Cortex, Adrenal Medulla, Catecholamines, and Stress Axis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Adrenal Cortex (Steroid Gland):</b> Derived from mesoderm; 3 concentric zones:<br/>&bull; <i>Zona Glomerulosa (Outer):</i> Mineralocorticoids (<b>Aldosterone</b>): acts on DCT to reabsorb Na<sup>+</sup> and excrete K<sup>+</sup>, maintaining blood pressure and volume.<br/>&bull; <i>Zona Fasciculata (Middle):</i> Glucocorticoids (<b>Cortisol</b>): stimulates gluconeogenesis, lipolysis, proteolysis; acts as a potent anti-inflammatory and immunosuppressive drug.<br/>&bull; <i>Zona Reticularis (Inner):</i> Sexcorticoids (Androgens/Estrogens) for axial and pubic hair development.<br/><br/><b style="color: #00B0FF;">2. Adrenal Medulla (Neuroendocrine):</b> Derived from ectodermal neural crest. Secretes catecholamines: <b>Adrenaline (Epinephrine) and Noradrenaline</b> ('Emergency / Fight-or-Flight' hormones):<br/>&bull; Dilates pupils, raises heart rate and cardiac output, causes bronchodilation, elevates glycogenolysis, raising blood glucose.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Discuss the Endocrine Pancreas (Islets of Langerhans): Insulin, Glucagon, and the Pathophysiology of Diabetes Mellitus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Histological Architecture:</b> 1-2 million Islets of Langerhans scattered throughout exocrine acinar tissue:<br/>&bull; <i>Alpha (&alpha;) Cells (~20%):</i> Secrete <b>Glucagon</b> (hyperglycemic hormone).<br/>&bull; <i>Beta (&beta;) Cells (~70%):</i> Secrete <b>Insulin</b> (hypoglycemic hormone).<br/>&bull; <i>Delta (&delta;) Cells:</i> Secrete Somatostatin (paracrine inhibitor of insulin and glucagon).<br/><br/><b style="color: #00B0FF;">2. Glucagon Action:</b> Activates glycogen phosphorylase in liver (glycogenolysis) and gluconeogenesis, releasing glucose into blood during fasting.<br/><br/><b style="color: #00B0FF;">3. Insulin Action:</b> Binds tyrosine kinase receptors, translocating GLUT-4 glucose transporters to sarcolemma and adipocyte membranes; accelerates glycogenesis and lipogenesis, lowering blood glucose.<br/><br/><b style="color: #00B0FF;">4. Diabetes Mellitus:</b> Type 1 (autoimmune destruction of &beta;-cells; absolute insulin lack) vs Type 2 (insulin resistance). Hallmarks: Hyperglycemia, Glycosuria, Polyuria, Polydipsia, Polyphagia, and Diabetic Ketoacidosis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the Mechanisms of Hormone Action: Membrane-Bound Receptors, Second Messengers, and Intracellular Genomic Mechanisms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Water-Soluble Hormones (Peptides, Glycoproteins, Catecholamines):</b><br/>&bull; <i>Primary Receptor:</i> G-Protein Coupled Receptors (GPCR) on outer plasma membrane surface.<br/>&bull; <i>cAMP Second Messenger System:</i> Hormone binding activates G&alpha;s &rarr; stimulates Adenylate Cyclase &rarr; converts ATP to <b>Cyclic AMP (cAMP)</b> &rarr; activates Protein Kinase A (PKA) &rarr; phosphorylates specific enzymes.<br/>&bull; <i>IP<sub>3</sub>/DAG &amp; Ca<sup>2+</sup> System:</i> G-protein activates Phospholipase C &rarr; cleaves PIP<sub>2</sub> into <b>Inositol Trisphosphate (IP<sub>3</sub>)</b> and <b>Diacylglycerol (DAG)</b> &rarr; IP<sub>3</sub> triggers Ca<sup>2+</sup> release from ER.<br/><br/><b style="color: #00B0FF;">2. Lipid-Soluble Hormones (Steroids &amp; Thyroid Hormones):</b><br/>&bull; Pass through lipid bilayer into cytoplasm/nucleus &rarr; bind specific nuclear receptors &rarr; form Hormone-Receptor Complex.<br/>&bull; Complex binds directly to <b>Hormone Response Elements (HRE)</b> on chromatin.<br/>&bull; Modulates gene transcription (mRNA synthesis) &rarr; translates specific structural and catalytic proteins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Discuss Non-Endocrine Tissues Secreting Hormones: Heart, Kidney, and Gastrointestinal Tract Mucosa.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Heart Atrial Wall:</b> Secretes <b>Atrial Natriuretic Factor (ANF)</b> in response to high blood volume/BP. Causes vascular dilation and renal natriuresis, counteracting RAAS to reduce blood pressure.<br/><br/><b style="color: #00B0FF;">2. Kidney:</b><br/>&bull; <i>Erythropoietin (EPO):</i> Secreted by peritubular cells in hypoxia; stimulates bone marrow erythropoiesis.<br/>&bull; <i>Renin:</i> Secreted by JG cells, initiating the RAAS blood pressure elevation pathway.<br/>&bull; <i>Calcitriol:</i> Active Vitamin D driving intestinal Ca<sup>2+</sup> absorption.<br/><br/><b style="color: #00B0FF;">3. Gastrointestinal Tract:</b><br/>&bull; <i>Gastrin:</i> Stimulates gastric glands to secrete HCl and pepsinogen.<br/>&bull; <i>Secretin:</i> Stimulates exocrine pancreas to secrete water and bicarbonate ions.<br/>&bull; <i>Cholecystokinin (CCK):</i> Stimulates gallbladder contraction (bile release) and pancreatic enzyme secretion.<br/>&bull; <i>Gastric Inhibitory Peptide (GIP):</i> Inhibits gastric motility and acid secretion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an Exhaustive Master Synthesis Matrix correlating Human Respiratory, Circulatory, Excretory, Locomotory, Neural, and Endocrine Systems.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Respiration:</b> Thoracic volume changes drive ventilation &bull; Alveolar diffusion membrane &bull; O<sub>2</sub> transport as HbO<sub>2</sub> (sigmoid curve, Bohr effect shift) &bull; 70% CO<sub>2</sub> as HCO<sub>3</sub><sup>-</sup> (chloride shift).<br/><br/><b style="color: #00B0FF;">2. Circulation:</b> 4-chambered heart &bull; Myogenic SAN pacemaker &bull; Complete double circulation &bull; Cardiac cycle (0.8 s, LUBB-DUPP) &bull; ECG waves (P, QRS, T) &bull; Cardiac Output = 5 L/min.<br/><br/><b style="color: #00B0FF;">3. Excretion:</b> 1 million nephrons per kidney &bull; GFR = 125 mL/min (180 L/day) &bull; PCT reabsorption &bull; Medullary countercurrent multiplier/exchanger (300 to 1200 mOsm/L) &bull; RAAS &amp; ADH regulation.<br/><br/><b style="color: #00B0FF;">4. Locomotion:</b> 206 bones (80 axial + 126 appendicular) &bull; Synovial joints &bull; Sarcomere (Z-lines, I-band, A-band, H-zone) &bull; Sliding filament cycle driven by Ca<sup>2+</sup>, Troponin C, and ATP hydrolysis.<br/><br/><b style="color: #00B0FF;">5. Neural Coordination:</b> Resting membrane potential (-70 mV via Na<sup>+</sup>/K<sup>+</sup> pump) &bull; Action potential (+30 mV via Na<sup>+</sup> influx) &bull; Synaptic transmission via Acetylcholine &bull; Reflex arc.<br/><br/><b style="color: #00B0FF;">6. Chemical Integration:</b> Hypothalamus-Pituitary axis &bull; Thyroid BMR &bull; PTH vs TCT calcium balance &bull; Insulin vs Glucagon blood glucose &bull; Adrenal stress catecholamines &bull; Peptide second messengers vs Steroid nuclear gene activation.
    </div>
  </div>

</div>
`;

export const c11Zoo4Mcqs = [
  {
    "id": "c11-zoo-4-mcq-1",
    "question": "The maximum volume of air a person can exhale after a forced maximum inspiration is known as:",
    "options": [
      "A):   Tidal Volume",
      "B):   Vital Capacity (VC = TV + IRV + ERV)",
      "C):   Total Lung Capacity",
      "D):   Inspiratory Capacity"
    ],
    "correctAnswer": "b",
    "explanation": "Vital Capacity is the greatest volume of air that can be exhaled following maximal forced inhalation (~3.5 to 4.5 L)."
  },
  {
    "id": "c11-zoo-4-mcq-2",
    "question": "What is the primary factor that shifts the Oxygen-Hemoglobin dissociation curve to the right (Bohr effect)?",
    "options": [
      "A):   Low temperature",
      "B):   High pCO<sub>2</sub>, low pH, and high temperature in active tissues",
      "C):   High pO<sub>2</sub> in alveoli",
      "D):   Low 2,3-BPG concentration"
    ],
    "correctAnswer": "b",
    "explanation": "High pCO<sub>2</sub> and high [H<sup>+</sup>] in metabolizing tissues decrease Hb-O<sub>2</sub> affinity, shifting the curve right to unload O<sub>2</sub>."
  },
  {
    "id": "c11-zoo-4-mcq-3",
    "question": "Approximately 70% of carbon dioxide is transported in human blood in the form of:",
    "options": [
      "A):   Dissolved gas in plasma",
      "B):   Bicarbonate ions (HCO<sub>3</sub><sup>-</sup>)",
      "C):   Carbaminohemoglobin",
      "D):   Carbon monoxide"
    ],
    "correctAnswer": "b",
    "explanation": "Around 70% of CO<sub>2</sub> is converted inside RBCs into bicarbonate ions by the zinc enzyme carbonic anhydrase."
  },
  {
    "id": "c11-zoo-4-mcq-4",
    "question": "The normal resting Cardiac Output of a healthy adult human is approximately:",
    "options": [
      "A):   70 mL/min",
      "B):   5,000 mL/min (5 Liters/min)",
      "C):   125 mL/min",
      "D):   180 Liters/min"
    ],
    "correctAnswer": "b",
    "explanation": "Cardiac Output = Stroke Volume (70 mL) &times; Heart Rate (72 bpm) &approx; 5,000 mL/min (5 L/min)."
  },
  {
    "id": "c11-zoo-4-mcq-5",
    "question": "The first heart sound 'LUBB' is produced by the simultaneous closure of which valves?",
    "options": [
      "A):   Semilunar valves",
      "B):   Atrioventricular (Tricuspid and Bicuspid / Mitral) valves",
      "C):   Aortic valve alone",
      "D):   Eustachian valve"
    ],
    "correctAnswer": "b",
    "explanation": "Closure of the AV valves at the start of ventricular systole produces the dull, prolonged 'LUBB' sound."
  },
  {
    "id": "c11-zoo-4-mcq-6",
    "question": "In a standard Electrocardiogram (ECG), the QRS complex represents:",
    "options": [
      "A):   Atrial depolarization",
      "B):   Ventricular depolarization (initiating ventricular contraction)",
      "C):   Ventricular repolarization",
      "D):   Joint diastole"
    ],
    "correctAnswer": "b",
    "explanation": "The QRS complex corresponds to rapid ventricular depolarization that triggers ventricular contraction."
  },
  {
    "id": "c11-zoo-4-mcq-7",
    "question": "Which blood vessel carries fully oxygenated blood from the lungs directly into the left atrium?",
    "options": [
      "A):   Pulmonary Artery",
      "B):   Pulmonary Vein",
      "C):   Coronary Artery",
      "D):   Superior Vena Cava"
    ],
    "correctAnswer": "b",
    "explanation": "Pulmonary veins are the only veins in the adult body that carry freshly oxygenated blood from lungs to left atrium."
  },
  {
    "id": "c11-zoo-4-mcq-8",
    "question": "The average Glomerular Filtration Rate (GFR) in a healthy human adult is:",
    "options": [
      "A):   1.5 L/day",
      "B):   125 mL/min (180 Liters/day)",
      "C):   5 L/min",
      "D):   50 mL/min"
    ],
    "correctAnswer": "b",
    "explanation": "GFR is ~125 mL/min, meaning the kidneys form ~180 Liters of ultrafiltrate each day (99% of which is reabsorbed)."
  },
  {
    "id": "c11-zoo-4-mcq-9",
    "question": "In the nephron, maximum reabsorption of water, glucose, and electrolytes (70-80%) occurs in the:",
    "options": [
      "A):   Proximal Convoluted Tubule (PCT)",
      "B):   Henle's Loop",
      "C):   Distal Convoluted Tubule (DCT)",
      "D):   Collecting Duct"
    ],
    "correctAnswer": "a",
    "explanation": "The brush-border simple cuboidal epithelium of the PCT reabsorbs 100% of glucose and 70-80% of electrolytes and water."
  },
  {
    "id": "c11-zoo-4-mcq-10",
    "question": "The medullary hyperosmotic gradient (300 to 1,200 mOsm/L) in human kidneys is established primarily by:",
    "options": [
      "A):   PCT microvilli",
      "B):   Countercurrent Mechanism between Henle's Loop and Vasa Recta",
      "C):   Podocytes",
      "D):   Macula densa"
    ],
    "correctAnswer": "b",
    "explanation": "The countercurrent multiplier (Henle's loop) and exchanger (vasa recta) create the 1,200 mOsm/L gradient."
  },
  {
    "id": "c11-zoo-4-mcq-11",
    "question": "Which enzyme is secreted by Juxtaglomerular (JG) cells to initiate the RAAS blood pressure cascade?",
    "options": [
      "A):   Erythropoietin",
      "B):   Renin",
      "C):   Pepsin",
      "D):   Angiotensinase"
    ],
    "correctAnswer": "b",
    "explanation": "Renin is secreted by renal JG cells when renal blood pressure or GFR drops, activating Angiotensin II."
  },
  {
    "id": "c11-zoo-4-mcq-12",
    "question": "How many total bones are present in the adult human Axial Skeleton?",
    "options": [
      "A):   126 bones",
      "B):   80 bones",
      "C):   206 bones",
      "D):   60 bones"
    ],
    "correctAnswer": "b",
    "explanation": "The human skeleton consists of 206 bones: 80 in the axial skeleton and 126 in the appendicular skeleton."
  },
  {
    "id": "c11-zoo-4-mcq-13",
    "question": "The joint present between the Atlas (1st vertebra) and Axis (2nd vertebra) is a:",
    "options": [
      "A):   Hinge joint",
      "B):   Pivot joint",
      "C):   Saddle joint",
      "D):   Gliding joint"
    ],
    "correctAnswer": "b",
    "explanation": "The atlanto-axial joint is a pivot joint that allows the head to rotate side-to-side (shaking 'no')."
  },
  {
    "id": "c11-zoo-4-mcq-14",
    "question": "The anatomical segment of a myofibril situated between two successive Z-lines is called a:",
    "options": [
      "A):   Sarcolemma",
      "B):   Sarcomere",
      "C):   Sarcoplasm",
      "D):   Myofilament"
    ],
    "correctAnswer": "b",
    "explanation": "A sarcomere is the basic structural and functional contractile unit of a striated muscle fiber."
  },
  {
    "id": "c11-zoo-4-mcq-15",
    "question": "During skeletal muscle contraction, which sarcomere band maintains a constant length?",
    "options": [
      "A):   I-band",
      "B):   H-zone",
      "C):   A-band (Anisotropic dark band)",
      "D):   Both I-band and H-zone"
    ],
    "correctAnswer": "c",
    "explanation": "During contraction, actin slides over myosin; the I-band and H-zone shorten, but the A-band length stays constant."
  },
  {
    "id": "c11-zoo-4-mcq-16",
    "question": "During muscle contraction, Calcium ions bind directly to which regulatory protein?",
    "options": [
      "A):   Actin",
      "B):   Troponin C",
      "C):   Tropomyosin",
      "D):   Myosin head"
    ],
    "correctAnswer": "b",
    "explanation": "Ca<sup>2+</sup> binds to Troponin C, pulling tropomyosin aside to uncover the myosin-binding sites on actin."
  },
  {
    "id": "c11-zoo-4-mcq-17",
    "question": "The electrogenic Na+/K+-ATPase pump expels and imports how many ions per ATP consumed?",
    "options": [
      "A):   2 Na<sup>+</sup> out, 3 K<sup>+</sup> in",
      "B):   3 Na<sup>+</sup> expelled out, 2 K<sup>+</sup> imported in",
      "C):   1 Na<sup>+</sup> out, 1 K<sup>+</sup> in",
      "D):   3 Na<sup>+</sup> in, 2 K<sup>+</sup> out"
    ],
    "correctAnswer": "b",
    "explanation": "The Na<sup>+</sup>/K<sup>+</sup>-ATPase pump moves 3 Na<sup>+</sup> out of the cell and 2 K<sup>+</sup> into the cell per ATP molecule."
  },
  {
    "id": "c11-zoo-4-mcq-18",
    "question": "Rapid depolarisation during an axonal action potential is caused by the sudden influx of:",
    "options": [
      "A):   Potassium ions (K<sup>+</sup>)",
      "B):   Sodium ions (Na<sup>+</sup>)",
      "C):   Chloride ions (Cl<sup>-</sup>)",
      "D):   Calcium ions"
    ],
    "correctAnswer": "b",
    "explanation": "Opening of voltage-gated Na<sup>+</sup> channels triggers a massive influx of Na<sup>+</sup>, depolarizing the axon to +30 mV."
  },
  {
    "id": "c11-zoo-4-mcq-19",
    "question": "Which hypothalamic hormone stored in the posterior pituitary stimulates uterine contractions during child birth?",
    "options": [
      "A):   Prolactin",
      "B):   Oxytocin",
      "C):   Vasopressin",
      "D):   Progesterone"
    ],
    "correctAnswer": "b",
    "explanation": "Oxytocin stimulates vigorous labor contractions of the myometrium and triggers milk ejection during nursing."
  },
  {
    "id": "c11-zoo-4-mcq-20",
    "question": "A deficiency of dietary Iodine impairs the synthesis of which hormones, causing simple goiter?",
    "options": [
      "A):   Insulin and Glucagon",
      "B):   Thyroxine (T4) and Triiodothyronine (T3)",
      "C):   PTH and Calcitonin",
      "D):   Adrenaline and Noradrenaline"
    ],
    "correctAnswer": "b",
    "explanation": "Iodine is essential for thyroid hormone production; its deficiency results in thyroid enlargement (goiter)."
  },
  {
    "id": "c11-zoo-4-mcq-21",
    "question": "Parathyroid Hormone (PTH) and Thyrocalcitonin (TCT) act antagonistically to regulate blood levels of:",
    "options": [
      "A):   Glucose",
      "B):   Calcium (Ca<sup>2+</sup>)",
      "C):   Sodium",
      "D):   Iron"
    ],
    "correctAnswer": "b",
    "explanation": "PTH raises blood calcium levels (hypercalcemic), while TCT lowers blood calcium levels (hypocalcemic)."
  },
  {
    "id": "c11-zoo-4-mcq-22",
    "question": "Beta (&beta;) cells of the Islets of Langerhans in the pancreas secrete which hypoglycemic hormone?",
    "options": [
      "A):   Glucagon",
      "B):   Insulin",
      "C):   Somatostatin",
      "D):   Cortisol"
    ],
    "correctAnswer": "b",
    "explanation": "Insulin is secreted by &beta;-cells to promote glucose uptake into cells, lowering blood glucose levels."
  },
  {
    "id": "c11-zoo-4-mcq-23",
    "question": "Water-soluble peptide hormones cannot cross the cell membrane and instead generate intracellular:",
    "options": [
      "A):   Steroids",
      "B):   Second Messengers (such as cyclic AMP, IP<sub>3</sub>, Ca<sup>2+</sup>)",
      "C):   Chromatin fibers",
      "D):   Ribosomes"
    ],
    "correctAnswer": "b",
    "explanation": "Peptide hormones bind cell-surface receptors and generate second messengers like cAMP to trigger intracellular responses."
  },
  {
    "id": "c11-zoo-4-mcq-24",
    "question": "Atrial Natriuretic Factor (ANF) is secreted by the heart atrial wall in response to:",
    "options": [
      "A):   Low blood sugar",
      "B):   High blood pressure / elevated blood volume (opposing RAAS)",
      "C):   Low body temperature",
      "D):   Extreme hypoxia"
    ],
    "correctAnswer": "b",
    "explanation": "ANF is released when atria are stretched by high blood pressure, causing vasodilation and natriuresis to lower BP."
  },
  {
    "id": "c11-zoo-4-mcq-25",
    "question": "Diabetes Insipidus is caused by the hyposecretion of which hormone from the neurohypophysis?",
    "options": [
      "A):   Insulin",
      "B):   Antidiuretic Hormone (ADH / Vasopressin)",
      "C):   Aldosterone",
      "D):   Glucagon"
    ],
    "correctAnswer": "b",
    "explanation": "Deficiency of ADH prevents water reabsorption in the collecting ducts, causing massive excretion of dilute urine (polyuria)."
  }
];
