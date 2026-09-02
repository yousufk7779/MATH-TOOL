// Class 11 Botany Chapter 1: Diversity of Life
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Botany | Class: 11 | Code: c11-bot-1

export const c11Bot1HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.12), rgba(0, 191, 165, 0.12)); border: 1.5px solid rgba(0, 230, 118, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #00E676; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #00E676; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 1: Diversity of Life</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Biodiversity:</b> The enormous totality of living organisms inhabiting planet Earth, currently documented at approximately 1.7 to 1.8 million species.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Systematics:</b> The scientific study of biological diversity and the evolutionary relationships (phylogeny) connecting organisms through geological time.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Binomial Nomenclature:</b> The formalized universal system developed by Carolus Linnaeus wherein every organism is designated by a two-word scientific Latin name: Genus + specific epithet.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Taxon:</b> Any concrete taxonomic taxonomic unit or grouping of organisms at any level of the taxonomic hierarchy (e.g., Plantae, Angiospermae, Poaceae, Triticum).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Viroid:</b> An infectious acellular plant pathogen discovered by T.O. Diener (1971), consisting exclusively of a free low-molecular-weight circular RNA lacking a protein capsid.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Lichen:</b> A mutualistic, symbiotic association between an algal autotroph (Phycobiont) and a fungal heterotroph (Mycobiont).
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Diversity of Life: Scope of Biology
  </h2>

  <!-- PRESERVED IMAGE 1 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4MWIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTBkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjMDBFNjc2IiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPjNEIFRheG9ub21pYyBIaWVyYXJjaHkgQXJjaGl0ZWN0dXJlPC90ZXh0PgogIAogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA2NSkiPgogICAgPCEtLSA3IE9ibGlnYXRlIENhdGVnb3JpZXMgU3RhY2sgLS0+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzIwIiBoZWlnaHQ9IjQyMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjA2KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIAogICAgPCEtLSBLaW5nZG9tIC0tPgogICAgPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iNjgwIiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4yNSkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjQwIiB5PSI1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj5LSU5HRE9NPC90ZXh0PgogICAgPHRleHQgeD0iNzAwIiB5PSI1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0iZW5kIj5IaWdoZXN0IENhdGVnb3J5IChQbGFudGFlIC8gQW5pbWFsaWEpPC90ZXh0PgoKICAgIDwhLS0gUGh5bHVtIC8gRGl2aXNpb24gLS0+CiAgICA8cmVjdCB4PSI1MCIgeT0iNzYiIHdpZHRoPSI2MjAiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjIyKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iNzAiIHk9IjEwNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj5ESVZJU0lPTiAvIFBIWUxVTTwvdGV4dD4KICAgIDx0ZXh0IHg9IjY1MCIgeT0iMTA2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJlbmQiPkFuZ2lvc3Blcm1hZSAvIENob3JkYXRhPC90ZXh0PgoKICAgIDwhLS0gQ2xhc3MgLS0+CiAgICA8cmVjdCB4PSI4MCIgeT0iMTMyIiB3aWR0aD0iNTYwIiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4xOSkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDx0ZXh0IHg9IjEwMCIgeT0iMTYyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPkNMQVNTPC90ZXh0PgogICAgPHRleHQgeD0iNjIwIiB5PSIxNjIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9ImVuZCI+RGljb3R5bGVkb25hZSAvIE1hbW1hbGlhPC90ZXh0PgoKICAgIDwhLS0gT3JkZXIgLS0+CiAgICA8cmVjdCB4PSIxMTAiIHk9IjE4OCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI0OCIgcng9IjgiIGZpbGw9InJnYmEoMCwyMzAsMTE4LDAuMTYpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIxMzAiIHk9IjIxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj5PUkRFUjwvdGV4dD4KICAgIDx0ZXh0IHg9IjU5MCIgeT0iMjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJlbmQiPlNhcGluZGFsZXMgLyBQcmltYXRhPC90ZXh0PgoKICAgIDwhLS0gRmFtaWx5IC0tPgogICAgPHJlY3QgeD0iMTQwIiB5PSIyNDQiIHdpZHRoPSI0NDAiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjEzKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTYwIiB5PSIyNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+RkFNSUxZPC90ZXh0PgogICAgPHRleHQgeD0iNTYwIiB5PSIyNzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9ImVuZCI+QW5hY2FyZGlhY2VhZSAvIEhvbWluaWRhZTwvdGV4dD4KCiAgICA8IS0tIEdlbnVzIC0tPgogICAgPHJlY3QgeD0iMTcwIiB5PSIzMDAiIHdpZHRoPSIzODAiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjEwKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTkwIiB5PSIzMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSI+R0VOVVM8L3RleHQ+CiAgICA8dGV4dCB4PSI1MzAiIHk9IjMzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0iZW5kIj5NYW5naWZlcmEgLyBIb21vPC90ZXh0PgoKICAgIDwhLS0gU3BlY2llcyAtLT4KICAgIDxyZWN0IHg9IjIwMCIgeT0iMzU2IiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4zMCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIyMjAiIHk9IjM4NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2Ij5TUEVDSUVTPC90ZXh0PgogICAgPHRleHQgeD0iNTAwIiB5PSIzODYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9ImVuZCI+aW5kaWNhIC8gc2FwaWVucyAoQmFzaWMgVW5pdCk8L3RleHQ+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBBcnJvdyBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDQ5NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjE1KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEuOCIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIzMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Bc2NlbmRpbmcgSGllcmFyY2h5OiBTcGVjaWZpY2l0eSBkZWNyZWFzZXMsIE51bWJlciBvZiBvcmdhbmlzbXMgaW5jcmVhc2VzIOKshjwvdGV4dD4KICA8L2c+Cjwvc3ZnPg==" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 230, 118, 0.4); border: 2px solid #00E676;" alt="3D Taxonomic Hierarchy Architecture" /><p style="color: #00E676; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 1.1: 3D Taxonomic Hierarchy Architecture (Kingdom ➔ Species)</p></div>

  

  <p>
    Life is a unique, complex cellular organization of molecules expressing itself through biochemical reactions that lead to growth, development, responsiveness, adaptation, and reproduction. The scope of biology encompasses understanding this profound diversity through systematic nomenclature and hierarchical classification.
  </p>

  <h3 style="color: #00E676; margin-top: 18px; font-size: 16.5px;">(i) Need for Classification &amp; Systematics</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E676;">Necessity:</b> With over 1.7-1.8 million species described, studying each organism individually is humanly impossible. Classification categorizes organisms into orderly groups based on shared diagnostic features, allowing one to predict characteristics of an entire group from a few representative taxa.</li>
      <li><b style="color: #00E676;">Taxonomy vs Systematics:</b>
        <br/>- <i>Taxonomy (A.P. de Candolle, 1813):</i> Theoretical study of classification including principles, rules, and procedures (Identification &rarr; Nomenclature &rarr; Classification).
        <br/>- <i>Systematics (Linnaeus, 1735, Systema Naturae):</i> Broader discipline incorporating taxonomy alongside <b>evolutionary relationships (phylogeny)</b> and comparative biogeography.
      </li>
    </ul>
  </div>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(ii) Binomial Nomenclature Rules &amp; Codes (ICBN &amp; ICZN)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Introduced by <b>Carolus Linnaeus (Species Plantarum, 1753)</b> and standardized internationally by <b>ICBN (International Code of Botanical Nomenclature)</b> and <b>ICZN (International Code of Zoological Nomenclature)</b>:
      <br/>1. Biological names are Latinized and printed in <i>italics</i>. When handwritten, both words must be <u>separately underlined</u> to denote Latin origin.
      <br/>2. The first word represents the <b>Genus</b> and begins with a capital letter; the second word denotes the <b>Specific Epithet</b> and begins with a small letter (e.g., <i>Mangifera indica</i> Linn.).
      <br/>3. The author citation appears at the end in abbreviated roman font (e.g., <i>Linn.</i> signifies Linnaeus).
      <br/>4. <b style="color: #00E676;">Tautonyms:</b> Identical generic and specific names (e.g., <i>Naja naja</i>, <i>Rattus rattus</i>) are valid in zoology but strictly <b>forbidden in botanical nomenclature</b>.
    </p>
  </div>

  <!-- PRESERVED IMAGE 3 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4MWIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTBkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UYXhvbiBDbGFzc2lmaWNhdGlvbiAmYW1wOyBLZXkgSWRlbnRpZmljYXRpb24gVG9vbHM8L3RleHQ+CgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA2NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI0NzUiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4wNikiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQgS2V5IFRheGEgSWRlbnRpZmljYXRpb24gRXhhbXBsZXM8L3RleHQ+CgogICAgPCEtLSBUYWJsZSBIZWFkZXIgLS0+CiAgICA8cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSI2OTAiIGhlaWdodD0iNDUiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjI1KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMzUiIHk9IjgzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPkNvbW1vbiBOYW1lPC90ZXh0PgogICAgPHRleHQgeD0iMjEwIiB5PSI4MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2Ij5CaW9sb2dpY2FsIE5hbWU8L3RleHQ+CiAgICA8dGV4dCB4PSI0MTAiIHk9IjgzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPkZhbWlseTwvdGV4dD4KICAgIDx0ZXh0IHg9IjU3NSIgeT0iODMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiI+T3JkZXI8L3RleHQ+CgogICAgPCEtLSBSb3cgMTogTWFuIC0tPgogICAgPHJlY3QgeD0iMTUiIHk9IjExMCIgd2lkdGg9IjY5MCIgaGVpZ2h0PSI0MiIgcng9IjYiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTM3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPk1hbjwvdGV4dD4KICAgIDx0ZXh0IHg9IjIxMCIgeT0iMTM3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPkhvbW8gc2FwaWVuczwvdGV4dD4KICAgIDx0ZXh0IHg9IjQxMCIgeT0iMTM3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPkhvbWluaWRhZTwvdGV4dD4KICAgIDx0ZXh0IHg9IjU3NSIgeT0iMTM3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPlByaW1hdGE8L3RleHQ+CgogICAgPCEtLSBSb3cgMjogSG91c2VmbHkgLS0+CiAgICA8cmVjdCB4PSIxNSIgeT0iMTYwIiB3aWR0aD0iNjkwIiBoZWlnaHQ9IjQyIiByeD0iNiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjM1IiB5PSIxODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+SG91c2VmbHk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMTAiIHk9IjE4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj5NdXNjYSBkb21lc3RpY2E8L3RleHQ+CiAgICA8dGV4dCB4PSI0MTAiIHk9IjE4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5NdXNjaWRhZTwvdGV4dD4KICAgIDx0ZXh0IHg9IjU3NSIgeT0iMTg3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPkRpcHRlcmE8L3RleHQ+CgogICAgPCEtLSBSb3cgMzogTWFuZ28gLS0+CiAgICA8cmVjdCB4PSIxNSIgeT0iMjEwIiB3aWR0aD0iNjkwIiBoZWlnaHQ9IjQyIiByeD0iNiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjM1IiB5PSIyMzciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+TWFuZ288L3RleHQ+CiAgICA8dGV4dCB4PSIyMTAiIHk9IjIzNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj5NYW5naWZlcmEgaW5kaWNhPC90ZXh0PgogICAgPHRleHQgeD0iNDEwIiB5PSIyMzciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+QW5hY2FyZGlhY2VhZTwvdGV4dD4KICAgIDx0ZXh0IHg9IjU3NSIgeT0iMjM3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPlNhcGluZGFsZXM8L3RleHQ+CgogICAgPCEtLSBSb3cgNDogV2hlYXQgLS0+CiAgICA8cmVjdCB4PSIxNSIgeT0iMjYwIiB3aWR0aD0iNjkwIiBoZWlnaHQ9IjQyIiByeD0iNiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjM1IiB5PSIyODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+V2hlYXQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMTAiIHk9IjI4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj5Ucml0aWN1bSBhZXN0aXZ1bTwvdGV4dD4KICAgIDx0ZXh0IHg9IjQxMCIgeT0iMjg3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPlBvYWNlYWU8L3RleHQ+CiAgICA8dGV4dCB4PSI1NzUiIHk9IjI4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5Qb2FsZXM8L3RleHQ+CgogICAgPCEtLSBUYXhvbm9taWMgS2V5cyBTdW1tYXJ5IEJveCAtLT4KICAgIDxyZWN0IHg9IjE1IiB5PSIzMjAiIHdpZHRoPSI2OTAiIGhlaWdodD0iMTM1IiByeD0iMTAiIGZpbGw9InJnYmEoMCwyMzAsMTE4LDAuMTIpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8dGV4dCB4PSIzNSIgeT0iMzQ4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiPlRheG9ub21pYyBLZXkgQWlkczo8L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iMzc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5Db3VwbGV0OjwvdHNwYW4+IFBhaXIgb2YgY29udHJhc3RpbmcgY2hhcmFjdGVycyB1c2VkIGluIGlkZW50aWZpY2F0aW9uIGtleXMuPC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjQwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+TGVhZDo8L3RzcGFuPiBFYWNoIGluZGl2aWR1YWwgc3RhdGVtZW50IGluIGEgdGF4b25vbWljIGtleS48L3RleHQ+CiAgICA8dGV4dCB4PSIzNSIgeT0iNDI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5GbG9yYSAvIE1hbnVhbHMgLyBNb25vZ3JhcGhzOjwvdHNwYW4+IFByb3ZpZGUgYWN0dWFsIGFjY291bnQgb2YgaGFiaXRhdCwgZGlzdHJpYnV0aW9uLCBhbmQga2V5cy48L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 230, 118, 0.4); border: 2px solid #00E676;" alt="3D Taxon & Identification Keys" /><p style="color: #00E676; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 1.3: Taxonomic Categories &amp; Key Identification Tools</p></div>

  

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(iii) Taxonomic Hierarchy &amp; Obligate Categories</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The taxonomic hierarchy consists of 7 mandatory obligate categories arranged in descending sequence:
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        Kingdom &rarr; Division (Phylum) &rarr; Class &rarr; Order &rarr; Family &rarr; Genus &rarr; Species
      </span>
      <br/>&bull; <b style="color: #00E676;">Species (John Ray):</b> Fundamental natural biological unit consisting of individuals capable of freely interbreeding in nature to produce fertile offspring.
      <br/>&bull; <b style="color: #00E676;">Standard Botanical Suffixes:</b>
      <br/>- Division: <b>-phyta</b> (e.g., Magnoliophyta)
      <br/>- Class: <b>-opsida</b> or <b>-phyceae</b> (e.g., Magnoliopsida, Chlorophyceae)
      <br/>- Order: <b>-ales</b> (e.g., Rosales, Polymoniales)
      <br/>- Family: <b>-aceae</b> (e.g., Solanaceae, Fabaceae, Poaceae).
    </p>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Systems of Classification: Artificial, Natural and Phylogenetic
  </h2>

  <!-- NEW STANDALONE SVG CARD FOR CLASSIFICATION SYSTEMS -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title Banner -->
      <text x="250" y="26" fill="#00E676" font-size="14" font-weight="bold" text-anchor="middle">
        Comparative Systems of Plant Classification
      </text>

      <!-- System 1: Artificial -->
      <g transform="translate(25, 45)">
        <rect width="140" height="150" rx="6" fill="rgba(255, 138, 101, 0.15)" stroke="#FF8A65" stroke-width="1.2"/>
        <text x="70" y="22" fill="#FF8A65" font-size="11.5" font-weight="bold" text-anchor="middle">1. Artificial</text>
        <text x="70" y="44" fill="#FFFFFF" font-size="10" text-anchor="middle">Carolus Linnaeus</text>
        <text x="70" y="66" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Based on 1 or 2</text>
        <text x="70" y="80" fill="#CBD5E1" font-size="9.5" text-anchor="middle">superficial traits</text>
        <text x="70" y="100" fill="#FFE082" font-size="9" text-anchor="middle">Stamen number</text>
        <text x="70" y="116" fill="#FFE082" font-size="9" text-anchor="middle">&amp; habit (herb/tree)</text>
        <text x="70" y="136" fill="#FF8A65" font-size="9" font-weight="bold" text-anchor="middle">Separates relatives</text>
      </g>

      <!-- System 2: Natural -->
      <g transform="translate(180, 45)">
        <rect width="140" height="150" rx="6" fill="rgba(38, 198, 218, 0.15)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="70" y="22" fill="#26C6DA" font-size="11.5" font-weight="bold" text-anchor="middle">2. Natural</text>
        <text x="70" y="44" fill="#FFFFFF" font-size="10" text-anchor="middle">Bentham &amp; Hooker</text>
        <text x="70" y="66" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Based on overall</text>
        <text x="70" y="80" fill="#CBD5E1" font-size="9.5" text-anchor="middle">natural affinities</text>
        <text x="70" y="100" fill="#80DEEA" font-size="9" text-anchor="middle">Anatomy, cytology,</text>
        <text x="70" y="116" fill="#80DEEA" font-size="9" text-anchor="middle">embryo &amp; phytochem</text>
        <text x="70" y="136" fill="#26C6DA" font-size="9" font-weight="bold" text-anchor="middle">Standard in Herbaria</text>
      </g>

      <!-- System 3: Phylogenetic -->
      <g transform="translate(335, 45)">
        <rect width="140" height="150" rx="6" fill="rgba(0, 230, 118, 0.15)" stroke="#00E676" stroke-width="1.2"/>
        <text x="70" y="22" fill="#00E676" font-size="11.5" font-weight="bold" text-anchor="middle">3. Phylogenetic</text>
        <text x="70" y="44" fill="#FFFFFF" font-size="10" text-anchor="middle">Engler &amp; Hutchinson</text>
        <text x="70" y="66" fill="#CBD5E1" font-size="9.5" text-anchor="middle">Based on evolutionary</text>
        <text x="70" y="80" fill="#CBD5E1" font-size="9.5" text-anchor="middle">descent &amp; lineage</text>
        <text x="70" y="100" fill="#69F0AE" font-size="9" text-anchor="middle">Cladograms, fossil</text>
        <text x="70" y="116" fill="#69F0AE" font-size="9" text-anchor="middle">evidence &amp; DNA</text>
        <text x="70" y="136" fill="#00E676" font-size="9" font-weight="bold" text-anchor="middle">Modern Evolutionary</text>
      </g>

      <!-- Bottom: Modern Branches -->
      <g transform="translate(25, 205)">
        <rect width="450" height="60" rx="6" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255,255,255,0.15)"/>
        <text x="225" y="20" fill="#00E676" font-size="11" font-weight="bold" text-anchor="middle">
          Modern Branches of Taxonomy
        </text>
        <text x="75" y="42" fill="#FFFFFF" font-size="10" text-anchor="middle">Numerical (Phenetics)</text>
        <text x="225" y="42" fill="#FFFFFF" font-size="10" text-anchor="middle">Cytotaxonomy (Chromosomes)</text>
        <text x="375" y="42" fill="#FFFFFF" font-size="10" text-anchor="middle">Chemotaxonomy (DNA &amp; Proteins)</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 1.4: Comparative Matrix of Plant Classification Systems: Artificial (Linnaeus), Natural (Bentham &amp; Hooker), and Phylogenetic (Engler-Prantl / Cladistics)
  </div>
</div>


  <h3 style="color: #00E676; margin-top: 18px; font-size: 16.5px;">(i) Artificial Systems of Classification</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Utilizes one or very few arbitrary superficial morphological characters (e.g., growth habit, leaf shape, stamen numbers).
      <br/>&bull; <b style="color: #00E676;">Theophrastus (Father of Botany):</b> Classified 480 plants into Herbs, Under-shrubs, Shrubs, and Trees (<i>Historia Plantarum</i>).
      <br/>&bull; <b style="color: #00E676;">Linnaeus' Sexual System (1735):</b> Divided flowering plants into 24 classes based strictly on the number, length, and fusion of stamens (Monandria, Diandria... Polyandria).
      <br/><i>Limitation:</i> Gives equal weightage to vegetative and floral characters; vegetative traits are heavily influenced by environment. Separates closely related plants and groups completely unrelated species together.
    </p>
  </div>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(ii) Natural Systems of Classification</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Based on comprehensive natural affinities, utilizing all available morphological, anatomical, embryological, and phytochemotaxonomic characters.
      <br/>&bull; <b style="color: #00E676;">George Bentham and Sir Joseph Dalton Hooker (Genera Plantarum, 1862-1883):</b>
      <br/>Classified 97,205 seed plant species across 202 natural orders (families). Divided Phanerogams (seed plants) into:
      <br/>1. <b>Dicotyledones</b> (Polypetalae, Gamopetalae, Monochlamydeae)
      <br/>2. <b>Gymnospermae</b> (placed unnaturally between Dicots and Monocots)
      <br/>3. <b>Monocotyledones</b>.
      <br/><i>Advantage:</i> Highly practical, universally used to organize specimens in British, Indian, and Commonwealth herbaria (Kew Herbaria standard).
    </p>
  </div>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(iii) Phylogenetic Systems &amp; Modern Taxonomy</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Phylogenetic Classification:</b> Classifies organisms according to evolutionary ancestry and genetic descent (post-Darwinian):
      <br/>- <i>Adolf Engler &amp; Karl Prantl (Die Natürlichen Pflanzenfamilien, 1887-1915):</i> Evolutionary progression from simple unisexual flowers to complex bisexual forms.
      <br/>- <i>John Hutchinson (Families of Flowering Plants, 1926-1934):</i> Monophyletic origin; separated Dicots into Lignosae (woody) and Herbaceae (herbaceous).
    </li>
    <li><b style="color: #00E676;">Modern Taxonomic Tools:</b>
      <br/>1. <b style="color: #00E676;">Numerical Taxonomy (Phenetics):</b> Computer-assisted evaluation assigning equal numerical weightage to hundreds of observable characters; uses cluster analysis.
      <br/>2. <b style="color: #00E676;">Cytotaxonomy (Karyotaxonomy):</b> Uses chromosome numbers, sizes, and meiotic behavior (karyotype analysis).
      <br/>3. <b style="color: #00E676;">Chemotaxonomy:</b> Resolves taxonomic ambiguity using chemical constituents (alkaloids, carotenoids, DNA sequencing, cytochrome c).
    </li>
  </ul>

  <!-- SECTION 3 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Salient Features of Five Kingdom Classification
  </h2>

  <!-- PRESERVED IMAGE 2 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDFhMGQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDM4MWIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxYTBkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBFNjc2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SLkguIFdoaXR0YWtlciA1LUtpbmdkb20gQ2xhc3NpZmljYXRpb24gU3lzdGVtICgxOTY5KTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDUgS2luZ2RvbSBHcmlkIEJveGVzIChFeHRyYSBMYXJnZSBGb250IFNpemVzKSAtLT4KICAgIDwhLS0gMS4gTW9uZXJhIC0tPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4xMikiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEU2NzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEuIE1PTkVSQSAoUHJva2FyeW90ZXMpPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBDZWxsIFR5cGU6IFVuaWNlbGx1bGFyIFByb2thcnlvdGljPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9Ijk1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBDZWxsIFdhbGw6IE5vbi1jZWxsdWxvc2ljIChQZXB0aWRvZ2x5Y2FuKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIE51dHJpdGlvbjogQXV0b3Ryb3BoaWMgJmFtcDsgSGV0ZXJvdHJvcGhpYzwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIxNDUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjIpIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjE3NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FeGFtcGxlczogRS4gY29saSwgQW5hYmFlbmEsIE15Y29wbGFzbWE8L3RleHQ+CgogICAgPCEtLSAyLiBQcm90aXN0YSAtLT4KICAgIDxyZWN0IHg9IjM3MCIgeT0iMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDE3NiwyNTUsMC4xMikiIHN0cm9rZT0iIzAwQjBGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEIwRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIFBST1RJU1RBIChFdWthcnlvdGVzKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIENlbGwgVHlwZTogVW5pY2VsbHVsYXIgRXVrYXJ5b3RpYzwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIENlbGwgV2FsbDogUHJlc2VudCBpbiBzb21lIChQZWxsaWNsZS9TaWxpY2EpPC90ZXh0PgogICAgPHRleHQgeD0iMzkwIiB5PSIxMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIEdyb3VwczogQ2hyeXNvcGh5dGVzLCBEaW5vZmxhZ2VsbGF0ZXM8L3RleHQ+CiAgICA8cmVjdCB4PSIzODUiIHk9IjE0NSIgd2lkdGg9IjMyMCIgaGVpZ2h0PSI1MCIgcng9IjgiIGZpbGw9InJnYmEoMCwxNzYsMjU1LDAuMikiLz4KICAgIDx0ZXh0IHg9IjU0NSIgeT0iMTc2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkV4YW1wbGVzOiBBbW9lYmEsIEV1Z2xlbmEsIFBhcmFtZWNpdW08L3RleHQ+CgogICAgPCEtLSAzLiBGdW5naSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjIzMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4xMikiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjI2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zLiBGVU5HSSAoQ2hpdGlub3VzKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIyOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIENlbGwgVHlwZTogTXVsdGljZWxsdWxhciBFdWthcnlvdGljPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjMyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgQ2VsbCBXYWxsOiBDaGl0aW5vdXMgQ2VsbCBXYWxsPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjM1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgTnV0cml0aW9uOiBTYXByb3BoeXRpYyAvIFBhcmFzaXRpYzwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIzNzUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwxNDUsMCwwLjIpIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjQwNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FeGFtcGxlczogUmhpem9wdXMsIFllYXN0LCBBZ2FyaWN1czwvdGV4dD4KCiAgICA8IS0tIDQuIFBsYW50YWUgJiBBbmltYWxpYSAtLT4KICAgIDxyZWN0IHg9IjM3MCIgeT0iMjMwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyMCw2NCwyNTEsMC4xMikiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjI2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40ICZhbXA7IDUuIFBMQU5UQUUgJmFtcDsgQU5JTUFMSUE8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjI5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM2OUYwQUUiPlBsYW50YWU6PC90c3Bhbj4gQ2VsbHVsb3NpYyB3YWxsLCBBdXRvdHJvcGhpYzwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMzI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGNTI1MiI+QW5pbWFsaWE6PC90c3Bhbj4gQ2VsbCB3YWxsIGFic2VudCwgSG9sb3pvaWM8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjM1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgVGlzc3VlIC8gT3JnYW4gbGV2ZWwgb3JnYW5pemF0aW9uPC90ZXh0PgogICAgPHJlY3QgeD0iMzg1IiB5PSIzNzUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDIyMCw2NCwyNTEsMC4yKSIvPgogICAgPHRleHQgeD0iNTQ1IiB5PSI0MDYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBODBGQyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RXhhbXBsZXM6IFBsYW50cyAmYW1wOyBNZXRhem9hbiBBbmltYWxzPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4xNSkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzY5RjBBRSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2xhc3NpZmljYXRpb24gQ3JpdGVyaWE6IENlbGwgc3RydWN0dXJlLCBUaGFsbHVzLCBOdXRyaXRpb24sIFJlcHJvZHVjdGlvbiAmYW1wOyBQaHlsb2dlbnk8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(0, 230, 118, 0.4); border: 2px solid #00E676;" alt="3D Five Kingdom System" /><p style="color: #00E676; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 1.2: R.H. Whittaker 5-Kingdom Classification System (Monera, Protista, Fungi, Plantae, Animalia)</p></div>

  

  <h3 style="color: #00E676; margin-top: 18px; font-size: 16.5px;">(i) Whittaker 5 Kingdoms Detailed Overview</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Proposed by <b>Robert H. Whittaker (1969)</b> based on 5 fundamental criteria: (1) Complexity of cell structure, (2) Complexity of body organization, (3) Mode of nutrition, (4) Reproduction, (5) Phylogenetic relationships.
      <br/>1. <b style="color: #00E676;">Kingdom Monera:</b> Unicellular prokaryotes lacking a membrane-bound nucleus and organelles; peptidoglycan cell wall (Bacteria, Archaebacteria, Cyanobacteria / Blue-Green Algae, Mycoplasma).
      <br/>2. <b style="color: #00E676;">Kingdom Protista:</b> Unicellular eukaryotes; photosynthetic, saprophytic, or phagotrophic (Chrysophytes / Diatoms, Dinoflagellates, Euglenoids, Slime moulds, Protozoans).
      <br/>3. <b style="color: #00E676;">Kingdom Fungi (Mycota):</b> Multicellular/syncytial eukaryotic heterotrophs; absorptive nutrition (saprophytic/parasitic); cell wall composed of <b>chitin</b> and &beta;-glucans (Phycomycetes, Ascomycetes, Basidiomycetes, Deuteromycetes).
      <br/>4. <b style="color: #00E676;">Kingdom Plantae:</b> Multicellular eukaryotic photoautotrophs containing chlorophyll a and b; cellulosic cell wall; distinct alternation of generations (Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms).
      <br/>5. <b style="color: #00E676;">Kingdom Animalia:</b> Multicellular eukaryotic ingestive heterotrophs lacking cell walls and plastids.
    </p>
  </div>

  <!-- NEW STANDALONE SVG CARD FOR ACELLULAR ENTITIES & LICHENS -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#00E676" font-size="14" font-weight="bold" text-anchor="middle">
        Structure &amp; Biology of Acellular Entities &amp; Lichen Symbiosis
      </text>

      <!-- Entity 1: Virus (Bacteriophage) -->
      <g transform="translate(30, 45)">
        <rect width="100" height="145" rx="6" fill="rgba(38, 198, 218, 0.15)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="50" y="20" fill="#26C6DA" font-size="11" font-weight="bold" text-anchor="middle">Virus</text>
        <text x="50" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">(Bacteriophage)</text>
        <!-- Icon sketch -->
        <polygon points="50,45 68,58 68,78 50,90 32,78 32,58" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
        <line x1="50" y1="90" x2="50" y2="115" stroke="#26C6DA" stroke-width="2"/>
        <line x1="50" y1="115" x2="35" y2="130" stroke="#26C6DA" stroke-width="1.5"/>
        <line x1="50" y1="115" x2="65" y2="130" stroke="#26C6DA" stroke-width="1.5"/>
        <text x="50" y="138" fill="#80DEEA" font-size="8.5" text-anchor="middle">Protein + DNA/RNA</text>
      </g>

      <!-- Entity 2: Viroid -->
      <g transform="translate(145, 45)">
        <rect width="100" height="145" rx="6" fill="rgba(255, 138, 101, 0.15)" stroke="#FF8A65" stroke-width="1.2"/>
        <text x="50" y="20" fill="#FF8A65" font-size="11" font-weight="bold" text-anchor="middle">Viroid</text>
        <text x="50" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">(T.O. Diener, 1971)</text>
        <!-- Circular free RNA -->
        <ellipse cx="50" cy="78" rx="28" ry="18" fill="none" stroke="#FF8A65" stroke-width="2" stroke-dasharray="3,2"/>
        <text x="50" y="112" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Free Low-MW RNA</text>
        <text x="50" y="126" fill="#FF8A65" font-size="8.5" font-weight="bold" text-anchor="middle">NO Protein Coat</text>
        <text x="50" y="138" fill="#FFE082" font-size="8" text-anchor="middle">Potato Spindle Tuber</text>
      </g>

      <!-- Entity 3: Prion -->
      <g transform="translate(260, 45)">
        <rect width="100" height="145" rx="6" fill="rgba(224, 64, 251, 0.15)" stroke="#E040FB" stroke-width="1.2"/>
        <text x="50" y="20" fill="#E040FB" font-size="11" font-weight="bold" text-anchor="middle">Prion</text>
        <text x="50" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">(Prusiner, 1982)</text>
        <!-- Misfolded protein squiggle -->
        <path d="M 30,70 Q 40,55 50,70 T 70,70 T 60,95 T 35,90" fill="none" stroke="#E040FB" stroke-width="2.5"/>
        <text x="50" y="112" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Abnormally folded</text>
        <text x="50" y="126" fill="#E040FB" font-size="8.5" font-weight="bold" text-anchor="middle">Infectious Protein</text>
        <text x="50" y="138" fill="#EA80FC" font-size="8" text-anchor="middle">BSE &amp; Cr-Jacob Disease</text>
      </g>

      <!-- Entity 4: Lichen -->
      <g transform="translate(375, 45)">
        <rect width="100" height="145" rx="6" fill="rgba(0, 230, 118, 0.15)" stroke="#00E676" stroke-width="1.2"/>
        <text x="50" y="20" fill="#00E676" font-size="11" font-weight="bold" text-anchor="middle">Lichen</text>
        <text x="50" y="38" fill="#FFFFFF" font-size="9" text-anchor="middle">(Mutualistic)</text>
        <circle cx="50" cy="72" r="16" fill="rgba(0, 230, 118, 0.3)" stroke="#00E676" stroke-width="1.5"/>
        <text x="50" y="76" fill="#FFFFFF" font-size="8" font-weight="bold" text-anchor="middle">Alga + Fungus</text>
        <text x="50" y="105" fill="#CBD5E1" font-size="8" text-anchor="middle">Phycobiont: Food</text>
        <text x="50" y="118" fill="#CBD5E1" font-size="8" text-anchor="middle">Mycobiont: Shelter</text>
        <text x="50" y="136" fill="#69F0AE" font-size="8" font-weight="bold" text-anchor="middle">SO<sub>2</sub> Pollution Sensor</text>
      </g>

      <!-- Bottom Summary Box -->
      <g transform="translate(30, 202)">
        <rect width="445" height="65" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.15)"/>
        <text x="222" y="22" fill="#00E676" font-size="11" font-weight="bold" text-anchor="middle">
          Biological Significance &amp; Exclusion from Whittaker's 5 Kingdoms
        </text>
        <text x="222" y="42" fill="#CBD5E1" font-size="10" text-anchor="middle">
          Viruses, Viroids &amp; Prions lack cellular organization; inert crystals outside living host cells.
        </text>
        <text x="222" y="56" fill="#FFFFFF" font-size="10" text-anchor="middle">
          Lichens are composite dual-organisms; pioneer colonizers on bare rocks (Lithosere).
        </text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 1.5: Structure &amp; Biology of Acellular Pathogens (Bacteriophage, Viroids, Prions) &amp; Mutualistic Dual-Lichen Architecture
  </div>
</div>


  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(ii) Acellular Entities: Viruses, Viroids, Prions &amp; Lichens</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E676;">Viruses:</b> Non-cellular obligate intracellular parasites. An inert crystalline particle (virion) outside the host. Genetic material is either DNA or RNA (never both), protected by a protein coat (capsid) composed of capsomeres:
        <br/>- <i>D.J. Ivanowsky (1892):</i> Discovered Tobacco Mosaic Virus (TMV); smaller than bacteria.
        <br/>- <i>M.W. Beijerinck (1898):</i> Coined <i>Contagium vivum fluidum</i> (infectious living fluid).
        <br/>- <i>W.M. Stanley (1935):</i> First crystallized TMV (largely composed of proteins).
        <br/>- Plant viruses generally possess single-stranded RNA (ssRNA); Animal viruses possess ssRNA, dsRNA, or dsDNA; Bacteriophages possess double-stranded DNA (dsDNA).
      </li>
      <li><b style="color: #00E676;">Viroids (T.O. Diener, 1971):</b> Infectious agents smaller than viruses consisting solely of naked, free, circular single-stranded RNA of low molecular weight, <b>completely lacking a protein capsid</b>. Causes Potato Spindle Tuber Disease (PSTD).</li>
      <li><b style="color: #00E676;">Prions (Stanley Prusiner, 1982):</b> Abnormally folded infectious protein particles completely devoid of nucleic acids. Transmit neurodegenerative diseases: Bovine Spongiform Encephalopathy (BSE / Mad Cow Disease) in cattle and Creutzfeldt-Jakob Disease (CJD) in humans.</li>
      <li><b style="color: #00E676;">Lichens:</b> Symbiotic composite organisms comprising an algal partner (<b>Phycobiont</b>, mostly green algae or Cyanobacteria) and a fungal partner (<b>Mycobiont</b>, mostly Ascomycetes). Phycobiont synthesizes food; Mycobiont absorbs water/minerals and provides structural anchorage.
        <br/>- Extremely sensitive to air pollution; <b>never grow in areas polluted with Sulfur Dioxide (SO<sub>2</sub>)</b>, serving as pristine natural bioindicators of industrial pollution.
        <br/>- Pioneer colonizers in ecological succession on barren rocks (lithosere).
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(0, 105, 92, 0.85)); border: 2px solid #00E676; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #00E676; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 1 Formula &amp; Key Concept Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(0, 230, 118, 0.25); color: #00E676; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Taxonomic Concept / System</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Pioneers &amp; Basis</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Diagnostic Characteristics &amp; Rules</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E676;">Binomial Nomenclature:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Carolus Linnaeus (1753)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Genus (Capital) + species (small) in Latin italics</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E676;">Taxonomic Hierarchy:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">7 Obligate Ranks</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Kingdom &rarr; Division &rarr; Class &rarr; Order &rarr; Family &rarr; Genus &rarr; Species</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E676;">Artificial System:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Linnaeus (24 sexual classes)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Based on stamen numbers; separates related taxa</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E676;">Natural System:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Bentham &amp; Hooker (Genera Plantarum)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Total natural affinities; standard in Herbaria</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E676;">Phylogenetic System:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Engler &amp; Prantl, Hutchinson</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cladistics, evolutionary descent, fossil evidence</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E676;">5 Kingdoms:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">R.H. Whittaker (1969)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Monera, Protista, Fungi (chitin), Plantae, Animalia</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E676;">Viroid:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">T.O. Diener (1971)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Free infectious circular RNA lacking protein capsid</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E676;">Lichen:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Dual Organism</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Phycobiont (Alga) + Mycobiont (Fungus); SO<sub>2</sub> indicator</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Bot1HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.15), rgba(0, 191, 165, 0.15)); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #00E676; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Binomial Nomenclature Rules, Suffixes, Taxonomic Ranks &amp; Acellular Entity Definitions</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define Biodiversity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The vast totality of living organisms (plants, animals, microbes) inhabiting Earth, estimated at 1.7 to 1.8 million documented species.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Who proposed the Binomial System of Nomenclature?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Carolus Linnaeus in his book <i>Species Plantarum</i> (1753).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What does ICBN stand for?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      International Code of Botanical Nomenclature.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: What does ICZN stand for?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      International Code of Zoological Nomenclature.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Write the scientific name of Mango according to binomial rules.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Mangifera indica</i> Linn.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is a Tautonym? Are tautonyms accepted in botanical nomenclature?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A tautonym is a binomial name where genus and species names are identical (e.g., <i>Rattus rattus</i>). They are strictly rejected in botanical nomenclature.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Who is known as the 'Father of Botany'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Theophrastus.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Who is known as the 'Father of Taxonomy'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Carolus Linnaeus.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Define a Taxon.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A concrete unit or taxonomic group at any rank of the biological classification hierarchy (e.g., Kingdom, Family, Genus).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What is the fundamental unit of taxonomic classification?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Species.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Define Species according to John Ray and Ernst Mayr.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A group of naturally interbreeding individuals that are reproductively isolated from other such groups.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: What is the standard suffix for a Plant Family?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -aceae (e.g., Solanaceae, Poaceae).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What is the standard suffix for a Plant Order?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -ales (e.g., Polymoniales, Rosales).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What is the standard suffix for a Plant Division?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      -phyta (e.g., Bryophyta, Pteridophyta).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Name the three types of classification systems.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Artificial, Natural, and Phylogenetic classification systems.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: On what basis did Linnaeus classify flowering plants in his sexual system?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      On the number, arrangement, and fusion of stamens (androecium).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Name the botanists who proposed the most widely accepted Natural System of classification.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      George Bentham and Sir Joseph Dalton Hooker (in <i>Genera Plantarum</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: What is the main drawback of Bentham and Hooker's system?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Gymnosperms were placed unnaturally between Dicotyledones and Monocotyledones.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Define Phylogenetic Classification.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Classification based on evolutionary descent and ancestral relationships among organisms.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What is Numerical Taxonomy (Phenetics)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Classification based on statistical analysis of observable characteristics utilizing computers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What is Cytotaxonomy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Taxonomy based on cytological information such as chromosome number, structure, and meiotic behavior.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: What is Chemotaxonomy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Taxonomy based on chemical constituents of plants such as alkaloids, DNA sequences, and proteins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Who proposed the Five Kingdom Classification?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Robert H. Whittaker (1969).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: Name the Five Kingdoms proposed by Whittaker.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Monera, Protista, Fungi, Plantae, and Animalia.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Which kingdom in Whittaker's system includes all prokaryotic organisms?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kingdom Monera.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: What is the main chemical component of the fungal cell wall?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Chitin and &beta;-glucans.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Why are fungi not classified under Kingdom Plantae?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because fungi are heterotrophic (absorptive), lack chlorophyll, and possess chitinous cell walls rather than cellulose.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Name the photosynthetic kingdom of unicellular eukaryotes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kingdom Protista (e.g., Chrysophytes, Dinoflagellates, Euglenoids).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Who discovered Viruses?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dmitri Ivanowsky (1892) while studying Tobacco Mosaic Disease.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Who coined the phrase 'Contagium vivum fluidum'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      M.W. Beijerinck (1898).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Who first crystallized Tobacco Mosaic Virus (TMV)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      W.M. Stanley (1935).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is the genetic material in a Bacteriophage?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Double-stranded DNA (dsDNA).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: What is the genetic material in Tobacco Mosaic Virus (TMV)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Single-stranded RNA (ssRNA).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Define a Viroid.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An infectious agent consisting of free circular low-molecular-weight RNA without a protein coat, discovered by T.O. Diener (1971).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Name one plant disease caused by a Viroid.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Potato Spindle Tuber Disease (PSTD).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What is a Prion?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An abnormally folded infectious protein particle devoid of nucleic acids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Name one human disease caused by a Prion.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Creutzfeldt-Jakob Disease (CJD).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is a Lichen?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A mutualistic symbiotic partnership between an autotrophic alga (Phycobiont) and a heterotrophic fungus (Mycobiont).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Why do lichens not grow in polluted industrial cities?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lichens are extremely sensitive to Sulfur Dioxide (SO<sub>2</sub>) pollution, making them natural bioindicators of air quality.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Why are Viruses, Viroids, and Prions excluded from Whittaker's Five Kingdom classification?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because they are non-cellular (acellular) entities lacking a true protoplasmic cellular structure.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.15), rgba(0, 191, 165, 0.15)); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E676; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Bentham-Hooker Merits, 5 Kingdom Criteria, Virus Architecture &amp; Lichen Symbiosis</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Differentiate between Taxonomy and Systematics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Taxonomy:</b> Branch of biology concerned with the principles, rules, and procedures of identification, nomenclature, and classification of organisms.<br/>2. <b style="color: #00E676;">Systematics:</b> Broader science that includes taxonomy alongside the comprehensive study of <b>evolutionary relationships (phylogeny)</b> and historical diversifications of organisms through evolutionary time.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: State four essential universal rules of Binomial Nomenclature.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Latin Origin:</b> Biological names are in Latin and written in <i>italics</i> (or separately underlined when handwritten).<br/>2. <b style="color: #00E676;">Two Components:</b> First word is Genus (starts with capital letter); second word is specific epithet (starts with lowercase letter).<br/>3. <b style="color: #00E676;">Author Citation:</b> Name of the author who described the species is placed at the end in abbreviated roman script (e.g., <i>Mangifera indica</i> Linn.).<br/>4. <b style="color: #00E676;">Botanical Tautonym Ban:</b> Tautonyms (identical generic and specific names) are strictly invalid in plants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the seven obligate categories of taxonomic hierarchy with an example of Wheat (Triticum aestivum).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Kingdom:</b> Plantae<br/>2. <b style="color: #00E676;">Division:</b> Magnoliophyta (Angiospermae)<br/>3. <b style="color: #00E676;">Class:</b> Liliopsida (Monocotyledonae)<br/>4. <b style="color: #00E676;">Order:</b> Poales<br/>5. <b style="color: #00E676;">Family:</b> Poaceae (Gramineae)<br/>6. <b style="color: #00E676;">Genus:</b> <i>Triticum</i><br/>7. <b style="color: #00E676;">Species:</b> <i>Triticum aestivum</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Compare Artificial and Natural systems of plant classification in three major aspects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Criteria:</b> Artificial uses 1 or 2 superficial traits (e.g., stamen count in Linnaeus system); Natural uses all available natural affinities (morphology, anatomy, embryology, phytochemistry).<br/>2. <b style="color: #00E676;">Taxonomic Grouping:</b> Artificial places unrelated species together and separates closely related taxa; Natural keeps closely related taxa grouped together in natural families.<br/>3. <b style="color: #00E676;">Utility:</b> Artificial is an obsolete identification key; Natural (Bentham & Hooker) provides the worldwide standard arrangement in major herbaria.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain the major merits and demerits of Bentham and Hooker's system of classification.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Merits:</b><br/>1. Based strictly on direct, meticulous personal examination of actual herbarium specimens.<br/>2. Descriptions of genera and species are exceptionally accurate, clear, and comprehensive.<br/>3. Highly practical; forms the standard arrangement for herbaria across Kew, India, and the Commonwealth.<br/><b style="color: #00E676;">Demerits:</b><br/>1. Gymnosperms are placed unnaturally between Dicotyledones and Monocotyledones.<br/>2. Ignores phylogenetic evolutionary descent (pre-Darwinian natural system).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Explain the five basic criteria used by R.H. Whittaker in proposing the Five Kingdom Classification.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Complexity of Cell Structure:</b> Prokaryotic (Monera) vs Eukaryotic (Protista, Fungi, Plantae, Animalia).<br/>2. <b style="color: #00E676;">Complexity of Body Organization:</b> Unicellular (Monera, Protista) vs Multicellular/tissue level (Fungi, Plantae, Animalia).<br/>3. <b style="color: #00E676;">Mode of Nutrition:</b> Photoautotrophic (Plantae), Absorptive heterotrophic (Fungi), Ingestive heterotrophic (Animalia).<br/>4. <b style="color: #00E676;">Reproduction:</b> Asexual, vegetative, or sexual cycles.<br/>5. <b style="color: #00E676;">Phylogenetic Relationships:</b> Evolutionary advancement from prokaryote to complex multicellular eukaryotes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Describe the structure of a Bacteriophage with a labeled diagrammatic description.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A bacteriophage (e.g., T4 phage) is a tadpole-shaped virus consisting of:<br/>1. <b style="color: #00E676;">Head:</b> Bipyramidal hexagonal prism surrounded by a protein capsid enclosing a tightly packed double-stranded DNA (dsDNA) core.<br/>2. <b style="color: #00E676;">Collar:</b> Connects the head to the cylindrical tail sheath.<br/>3. <b style="color: #00E676;">Tail:</b> A central hollow tube surrounded by a contractile protein sheath.<br/>4. <b style="color: #00E676;">Base Plate &amp; Tail Fibres:</b> Six hexagonal tail pins and six tail fibres that attach specifically to the bacterial lipopolysaccharide cell wall.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain the structure of Tobacco Mosaic Virus (TMV).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      TMV is a rod-shaped helical virus measuring <b>300 nm in length and 18 nm in diameter</b> (molecular weight ~40 million Da).<br/>1. <b style="color: #00E676;">Capsid (Protein Coat):</b> Composed of <b>2130 identical protein capsomeres</b> arranged helically around a central hollow core of 4 nm diameter.<br/>2. <b style="color: #00E676;">Genetic Core:</b> A single-stranded RNA (ssRNA) molecule composed of ~6400 nucleotides embedded in the protein groove, making up 5% of virion weight.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Differentiate between a Virus and a Viroid in three major respects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Capsid:</b> Viruses possess a protective protein coat (capsid) around their genome; Viroids completely lack a protein coat.<br/>2. <b style="color: #00E676;">Nucleic Acid:</b> Viruses contain either DNA or RNA (single or double stranded); Viroids contain only low-molecular-weight circular ssRNA.<br/>3. <b style="color: #00E676;">Size &amp; Host Range:</b> Viroids are significantly smaller than viruses and infect exclusively higher plant species (e.g., potato, citrus).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain what Prions are and describe two neurodegenerative diseases caused by them.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Prions are infectious proteinaceous particles completely devoid of nucleic acids (DNA or RNA), discovered by Stanley B. Prusiner (Nobel Prize, 1997). They arise from misfolding of normal cellular prion protein (PrP<sup>C</sup>) into an insoluble, protease-resistant &beta;-sheet conformation (PrP<sup>Sc</sup>).<br/>Diseases:<br/>1. <b style="color: #00E676;">Bovine Spongiform Encephalopathy (BSE):</b> Known as 'Mad Cow Disease' in cattle, producing sponge-like holes in the brain.<br/>2. <b style="color: #00E676;">Creutzfeldt-Jakob Disease (CJD):</b> Fatal dementia and ataxia in adult humans.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain the dual nature of Lichens and describe the roles of Phycobiont and Mycobiont.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lichens are mutualistic symbiotic organisms comprising:<br/>1. <b style="color: #00E676;">Phycobiont (Algal Partner):</b> Usually a green alga (e.g., <i>Trebouxia</i>) or cyanobacterium (e.g., <i>Nostoc</i>). Synthesizes organic carbohydrates via photosynthesis and fixes nitrogen (if cyanobacterial).<br/>2. <b style="color: #00E676;">Mycobiont (Fungal Partner):</b> Mostly Ascomycete fungi (98%). Forms the thallus structure, provides physical anchorage, and absorbs water and essential minerals from the substrate.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain why Lichens are regarded as sensitive bioindicators of air pollution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lichens have no cuticle, stomata, or root systems; they absorb all moisture, nutrients, and dissolved atmospheric gases directly over their entire surface. Sulfur Dioxide (SO<sub>2</sub>) gas dissolves in moisture to form sulfurous acid, which permanently destroys the photosynthetic chlorophyll of the phycobiont. Consequently, lichens cannot survive in industrial areas with high SO<sub>2</sub>, creating 'lichen deserts' around polluted cities.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain the biological species concept and its limitations in botany.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The biological species concept defines a species as a reproductive community of naturally interbreeding individuals that are genetically isolated from other groups.<br/><b style="color: #00E676;">Limitations in Plants:</b><br/>1. Many plant species reproduce exclusively via obligate apomixis, vegetative propagation, or parthenogenesis without sexual reproduction.<br/>2. Extensive interspecific and intergeneric hybridization is widespread in nature (e.g., in grasses, orchids, oaks), blurring sharp biological boundaries.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: What is a Herbarium? State three vital functions of Herbaria in taxonomic studies.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A Herbarium is a repository of dried, pressed, and preserved plant specimens mounted on standard sheets (42 &times; 29 cm) arranged according to an accepted classification system.<br/>Functions:<br/>1. Provides primary reference material for botanical taxonomic identification.<br/>2. Serves as a repository of <b>Type Specimens</b> against which botanical names are validated.<br/>3. Preserves historical records of local floras, endangered plants, and geographical distributions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Explain the taxonomic significance of Botanical Gardens with two world-famous examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Botanical gardens are specialized institutions maintaining documented living collections of wild, rare, medicinal, and endangered plant species for scientific research and education.<br/>Significance: (1) Ex-situ conservation of endangered flora, (2) Living germplasm banks for hybridization, (3) Supply plant material for taxonomic study.<br/>Famous examples:<br/>1. <b style="color: #00E676;">Royal Botanic Gardens, Kew (England):</b> World's largest living plant collection.<br/>2. <b style="color: #00E676;">Acharya Jagadish Chandra Bose Indian Botanic Garden, Howrah (Kolkata):</b> Home to the Great Banyan Tree.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: What is a Taxonomic Key? Explain the terms 'Couplet' and 'Lead'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A taxonomic key is an artificial analytical diagnostic device used to identify unknown organisms based on contrasting observable characteristics.<br/>1. <b style="color: #00E676;">Couplet:</b> A pair of mutually exclusive, contrasting statements representing alternative character states.<br/>2. <b style="color: #00E676;">Lead:</b> Each individual statement of a couplet. Accepting one lead leads to rejection of the other, guiding the user step-by-step to the correct taxon.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Differentiate between Phenetics and Cladistics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Phenetics (Numerical Taxonomy):</b> Classifies organisms based strictly on overall phenotypic similarity across large numbers of observable characters without considering evolutionary origins.<br/>2. <b style="color: #00E676;">Cladistics (Phylogenetic Systematics):</b> Classifies organisms strictly according to branching evolutionary history and shared derived homologous characteristics (synapomorphies), depicted on phylogenetic trees called <b>Cladograms</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Describe the Kingdom Monera with three diagnostic features and two examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Cell Structure:</b> Unicellular prokaryotes lacking a membrane-enclosed nucleus, nucleolus, and membrane-bound organelles (mitochondria, chloroplasts).<br/>2. <b style="color: #00E676;">Genetic Material:</b> Naked, circular double-stranded DNA located in an irregular region called the <b>Nucleoid</b>, plus extrachromosomal plasmids.<br/>3. <b style="color: #00E676;">Cell Wall:</b> Composed of rigid peptidoglycan (murein), except in Archaebacteria and Mycoplasma.<br/>Examples: <i>Escherichia coli</i>, <i>Nostoc</i> (Cyanobacteria), <i>Mycoplasma</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain why Mycoplasma are unique among prokaryotes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mycoplasma (PPLO - Pleuropneumonia-like organisms) are the smallest known free-living cellular microorganisms (0.1-0.3 &mu;m).<br/>1. They <b>completely lack a cell wall</b>, surrounded only by a flexible triple-layered cell membrane containing sterols.<br/>2. Due to the absence of a rigid wall, they are highly pleomorphic (can change shape).<br/>3. They are insensitive to &beta;-lactam antibiotics like Penicillin that target peptidoglycan cell wall synthesis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Describe the general characteristics of Chrysophytes (Diatoms and Golden Algae).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Unicellular eukaryotic photosynthetic protists found in freshwater and marine ecosystems.<br/>2. In Diatoms, the cell wall forms two overlapping, transparent halves fitting together like a soapbox (epitheca and hypotheca), heavily impregnated with <b>indestructible Silica</b>.<br/>3. Over millions of years, accumulated diatom silica cell walls on the ocean floor form massive geological deposits called <b>Diatomaceous Earth</b> (Kieselguhr), utilized industrially for polishing and filtration.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: What is Diatomaceous Earth? State two of its industrial applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Diatomaceous earth (Kieselguhr) is a soft, siliceous sedimentary rock composed of accumulated microscopic fossilized silica frustules of dead diatoms.<br/>Industrial uses:<br/>1. <b style="color: #00E676;">Filtration Medium:</b> Used in industrial filtration of fruit juices, syrups, oils, and pharmaceuticals.<br/>2. <b style="color: #00E676;">Polishing and Insulation:</b> Used as a mild abrasive in metal polishes and toothpastes, and as a heat/sound insulating refractory brick.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Explain the phenomenon of 'Red Tides' caused by Dinoflagellates.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dinoflagellates are marine biflagellate photosynthetic protists possessing cellulosic wall plates. Under favorable conditions of nutrient enrichment (eutrophication) and warm temperature, species like <i>Gonyaulax</i> undergo explosive population blooms, turning coastal waters bright red.<br/>They secrete potent neurotoxins (<b>Saxitoxin</b>) into the seawater that kill thousands of marine fish and invertebrates, and cause paralytic shellfish poisoning (PSP) in humans who consume contaminated oysters.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Describe the Euglenoids and explain why they exhibit mixotrophic nutrition.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Euglenoids (e.g., <i>Euglena</i>) are unicellular flagellated freshwater protists possessing a flexible proteinaceous pellicle instead of a rigid cell wall.<br/><b style="color: #00E676;">Mixotrophic Nutrition:</b> In the presence of sunlight, they possess chlorophyll a and b and synthesize food via <b>oxygenic photosynthesis (Autotrophy)</b>. When deprived of sunlight in darkness, they act as predators, actively engulfing smaller microbes and absorbing dissolved organic compounds (<b>Heterotrophy</b>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Explain the life cycle and characteristics of Slime Moulds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Slime moulds are saprophytic protists that feed on decaying twigs and leaves.<br/>1. <b style="color: #00E676;">Vegetative Phase:</b> Under favorable conditions, they form an amorphous, multinucleate, free-flowing protoplasmic mass without cell walls called a <b>Plasmodium</b>, which creeps over surfaces.<br/>2. <b style="color: #00E676;">Fruiting Phase:</b> Under unfavorable dry conditions, the plasmodium differentiates into upright fruiting bodies bearing spores at their tips. Spores possess true cellulosic walls and survive extreme desiccation for years before germinating.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Differentiate between Gram-positive and Gram-negative bacteria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Cell Wall Thickness:</b> Gram-positive has a thick (20-80 nm) peptidoglycan layer containing teichoic acids; Gram-negative has a thin (8-10 nm) peptidoglycan layer surrounded by an outer lipopolysaccharide (LPS) membrane.<br/>2. <b style="color: #00E676;">Gram Stain Color:</b> Gram-positive retains the Crystal Violet-iodine complex and appears <b>Dark Purple/Blue</b>; Gram-negative loses crystal violet upon alcohol wash and counterstains with Safranin to appear <b>Pink/Red</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the role of Cyanobacteria in nitrogen fixation with reference to Heterocysts.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cyanobacteria (e.g., <i>Nostoc</i>, <i>Anabaena</i>) are oxygenic photosynthetic prokaryotes. Oxygen irreversibly inactivates the nitrogen-fixing enzyme <b>Nitrogenase</b>. To fix atmospheric N<sub>2</sub> safely, cyanobacteria develop specialized, thick-walled, pale yellow cells called <b>Heterocysts</b>. Heterocysts lack Photosystem II (preventing O<sub>2</sub> evolution) and create an anaerobic microenvironment where nitrogenase converts N<sub>2</sub> into ammonia, enriching soil fertility.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the three shapes of Bacterial cells with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Coccus (Spherical):</b> Bacteria shaped like spheres (e.g., <i>Streptococcus pneumoniae</i>).<br/>2. <b style="color: #00E676;">Bacillus (Rod-shaped):</b> Cylindrical or rod-like cells (e.g., <i>Lactobacillus</i>, <i>Escherichia coli</i>).<br/>3. <b style="color: #00E676;">Spirillum / Vibrio:</b> Comma-shaped (<i>Vibrio cholerae</i>) or rigid helical spirals (<i>Spirillum volutans</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain Archaebacteria and state why they can survive under extreme harsh environmental conditions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Archaebacteria are ancient prokaryotes inhabiting extreme ecological niches: Methanogens (marshy/rumen), Halophiles (hyper-saline lakes), and Thermoacidophiles (boiling acidic hot sulfur springs at 100&deg;C, pH 2).<br/>They survive because their cell membranes consist of <b>branched-chain phytanyl hydrocarbons linked by ether bonds</b> to glycerol (instead of unbranched ester-linked fatty acids). This branched ether architecture dramatically increases membrane rigidity and prevents thermal lysis in boiling acid.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain the ecological and economic importance of Methanogens.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Rumen Digestion:</b> Obligate anaerobic methanogenic archaebacteria (e.g., <i>Methanobacterium</i>) inhabit the rumen of herbivorous ruminant livestock (cows, buffaloes), fermenting complex cellulosic plant fiber.<br/>2. <b style="color: #00E676;">Biogas Production:</b> In anaerobic digesters (gobar gas plants), they convert livestock dung and agricultural waste into renewable <b>Biogas (Methane CH<sub>4</sub> ~65%)</b> used for clean domestic cooking and lighting.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain the economic importance of Fungi in industry and medicine.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Medicine:</b> <i>Penicillium chrysogenum</i> yields the miracle antibiotic <b>Penicillin</b> (Alexander Fleming, 1928); <i>Tolypocladium inflatum</i> yields immunosuppressive Cyclosporin A.<br/>2. <b style="color: #00E676;">Baking &amp; Brewing:</b> Brewer's yeast (<i>Saccharomyces cerevisiae</i>) ferments sugars into ethyl alcohol and CO<sub>2</sub>, leavening bread and brewing beer/wine.<br/>3. <b style="color: #00E676;">Food:</b> Edible mushrooms (<i>Agaricus bisporus</i>) are rich sources of dietary proteins and vitamins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain the different types of spores produced in Ascomycetes (Sac Fungi).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Asexual Spores (Conidia):</b> Non-motile spores produced exogenously in chains at the tip of specialized erect hyphae called conidiophores (e.g., in <i>Penicillium</i>, <i>Aspergillus</i>). Dispersed by wind.<br/>2. <b style="color: #00E676;">Sexual Spores (Ascospores):</b> Produced endogenously inside a sac-like microscopic structure called an <b>Ascus</b> (typically 8 ascospores per ascus formed via karyogamy followed by meiosis and one mitosis). Asci are enclosed in fruiting bodies called <b>Ascocarps</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain why Deuteromycetes are known as 'Fungi Imperfecti'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Deuteromycetes comprise a synthetic artificial class of fungi for which <b>only asexual or vegetative reproduction (conidia) is known</b>. The sexual (perfect) stage has either not been observed or does not exist. Whenever the teleomorph (sexual perfect stage) of a deuteromycete is discovered through research, it is promptly reclassified into its true class—mostly Ascomycetes or Basidiomycetes (e.g., <i>Alternaria</i>, <i>Colletotrichum</i>, <i>Trichoderma</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain the morphological forms of Lichens: Crustose, Foliose, and Fruticose.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Crustose Lichens:</b> Thin, crust-like thallus tightly attached and fused across its entire lower surface to rock or tree bark (e.g., <i>Graphis</i>, <i>Rhizocarpon</i>). Pioneer colonizers.<br/>2. <b style="color: #00E676;">Foliose Lichens:</b> Flat, leaf-like lobed thallus attached to the substrate at specific points via root-like fungal rhizines (e.g., <i>Parmelia</i>, <i>Physcia</i>).<br/>3. <b style="color: #00E676;">Fruticose Lichens:</b> Erect, branched, shrubby or pendulous thallus attached only by a narrow basal disc (e.g., <i>Usnea</i> / Old Man's Beard, <i>Cladonia rangiferina</i> / Reindeer Moss).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain the structure of a generic Virus: Capsid, Capsomeres, and Envelopes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Genetic Core:</b> Central genome consisting of either DNA or RNA, which can be single-stranded or double-stranded, linear or circular.<br/>2. <b style="color: #00E676;">Capsid:</b> Outer protective shell made of repeating protein subunits called <b>capsomeres</b> arranged in icosahedral (spherical), helical (rod-like), or complex geometries.<br/>3. <b style="color: #00E676;">Envelope:</b> In some animal viruses (e.g., Influenza, HIV, SARS-CoV-2), the capsid is surrounded by a host-derived lipid bilayer studded with viral glycoprotein spikes for cell attachment.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Explain the Lytic and Lysogenic cycles in Bacteriophages.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Lytic Cycle (Virulent Phage):</b> The phage injects its DNA into the host bacterium, hijacks cellular ribosomes and enzymes to replicate viral DNA and synthesize capsids, degrades the bacterial chromosome, assembles hundreds of virions, and lyses (bursts) the host cell wall to release progeny phages.<br/>2. <b style="color: #00E676;">Lysogenic Cycle (Temperate Phage):</b> Phage DNA integrates into the host bacterial chromosome as a dormant <b>prophage</b>. The viral DNA replicates passively alongside bacterial division without destroying the host until an environmental stress triggers induction into the lytic cycle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Describe the Kingdom Protista with three major characteristics and two examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E676;">Cellular Organization:</b> Primarily unicellular, eukaryotic organisms possessing a well-defined membrane-bound nucleus and specialized cellular organelles.<br/>2. <b style="color: #00E676;">Locomotion:</b> Move via pseudopodia (Amoeba), cilia (Paramecium), or flagella (Euglena).<br/>3. <b style="color: #00E676;">Nutritional Plasticity:</b> Encompasses photoautotrophic (Diatoms), phagotrophic/holozoic (Protozoa), and saprophytic (Slime moulds) nutrition.<br/>Examples: <i>Paramecium caudatum</i>, <i>Amoeba proteus</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: What are Flora, Manuals, Monographs, and Catalogues?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Taxonomic literature aids:<br/>1. <b style="color: #00E676;">Flora:</b> Contains the complete factual inventory, descriptions, and geographic distribution of all plant species occurring in a specific geographical area (e.g., <i>Flora of British India</i> by J.D. Hooker).<br/>2. <b style="color: #00E676;">Manuals:</b> Handbooks providing identification keys for species found in a particular locality.<br/>3. <b style="color: #00E676;">Monographs:</b> Comprehensive, exhaustive treatises detailing all available taxonomic information about a single taxon (e.g., genus or family).<br/>4. <b style="color: #00E676;">Catalogues:</b> Alphabetical lists of species in an herbarium or region.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain the biological importance of Blue-Green Algae (Cyanobacteria) in agriculture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cyanobacteria (e.g., <i>Nostoc</i>, <i>Anabaena</i>, <i>Aulosira</i>) are free-living or symbiotic photosynthetic organisms that fix atmospheric nitrogen into nitrates in waterlogged rice paddy fields.<br/>1. Adding biofertilizer cultures of cyanobacteria increases paddy grain yield by 15-20% and reduces chemical fertilizer requirements.<br/>2. They exude mucilaginous polysaccharides that bind soil particles, preventing erosion and improving soil moisture retention.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain the concept of 'Type Specimen' (Holotype, Isotype, Paratype, Lectotype).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In botanical nomenclature, the Type Specimen is the herbarium sheet to which the scientific name of a plant is permanently attached.<br/>- <b style="color: #00E676;">Holotype:</b> The single specimen designated by the original author as the nomenclatural type.<br/>- <b style="color: #00E676;">Isotype:</b> A duplicate specimen of the holotype collected at the same time and place from the same plant.<br/>- <b style="color: #00E676;">Lectotype:</b> A specimen chosen from original material to serve as type if the holotype was lost or never designated.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain why the kingdom Protista is often called a 'biological dustbin'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kingdom Protista contains an extraordinarily heterogeneous assemblage of unicellular eukaryotic organisms whose only common feature is that they do not fit into Plantae, Animalia, or Fungi. It includes plant-like photosynthetic autotrophs (diatoms, dinoflagellates), animal-like ingestive protozoans, and fungus-like saprophytic slime moulds. Because evolutionary boundaries between these groups are widely disparate, taxonomists describe it as an artificial paraphyletic grouping.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.15), rgba(0, 191, 165, 0.15)); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E676; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Comprehensive Classification Proofs, Evolutionary Phylogenies &amp; Master Biological Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss the Salient Features of R.H. Whittaker's Five Kingdom Classification in exhaustive detail: Criteria, Kingdom-wise Characteristics, and Limitations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Foundations:</b> Proposed in 1969 to overcome the deficiencies of Linnaeus' 2-kingdom system. Evaluates: (1) Cell complexity, (2) Thallus organization, (3) Mode of nutrition, (4) Reproduction, (5) Phylogenetic relationships.<br/><br/><b style="color: #00E676;">2. Kingdom-wise Comparative Analysis:</b><br/>&bull; <i>Monera:</i> Prokaryotes, peptidoglycan cell walls, autotrophic (chemosynthetic/photosynthetic) or heterotrophic. Bacteria, Cyanobacteria.<br/>&bull; <i>Protista:</i> Unicellular eukaryotes, diverse nutrition (photosynthetic, phagotrophic), motile via flagella/cilia. Diatoms, Dinoflagellates, Amoeba.<br/>&bull; <i>Fungi:</i> Multicellular eukaryotic heterotrophs, absorptive nutrition, chitinous cell walls, non-chlorophyllous thalli. Ascomycetes, Basidiomycetes.<br/>&bull; <i>Plantae:</i> Multicellular eukaryotic autotrophs with chlorophyll and cellulose cell walls, exhibiting alternation of generations.<br/>&bull; <i>Animalia:</i> Multicellular ingestive heterotrophs, no cell wall, sensory and neuromuscular tissue.<br/><br/><b style="color: #00E676;">3. Major Limitations:</b><br/>(1) Complete exclusion of acellular entities: Viruses, Viroids, and Prions.<br/>(2) Slime moulds and Euglena show mixed characteristics, making placement arbitrary.<br/>(3) Monera contains biochemically divergent Archaebacteria and Eubacteria (resolved later by Carl Woese's 3-Domain system).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Explain the Principles and Rules of Binomial Nomenclature as codified by the ICBN, and discuss the Importance of Standardized Scientific Naming.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Core Principles (Linnaeus, Species Plantarum, 1753):</b><br/>&bull; <i>Two-Name System:</i> Genus (capitalized noun) + Specific Epithet (lowercase adjective).<br/>&bull; <i>Language:</i> Strictly Latin or Latinized, reflecting dead language stability.<br/>&bull; <i>Typography:</i> Printed in <i>italics</i>; separately underlined when handwritten.<br/>&bull; <i>Author Citation:</i> Affixed at the end in abbreviated roman font (<i>Solanum tuberosum</i> Linn.).<br/>&bull; <i>Principle of Priority:</i> The oldest validly published name dating from Linnaeus (May 1, 1753) takes precedence.<br/>&bull; <i>Tautonym Ban:</i> Botanical nomenclature rejects tautonyms (e.g., <i>Malus malus</i> is invalid).<br/><br/><b style="color: #00E676;">2. Significance:</b> Overcomes language barriers and regional confusion where a single plant has dozens of contradictory vernacular names, providing unambiguous global communication among scientists.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Compare the Three Major Systems of Plant Classification: Artificial, Natural, and Phylogenetic with historical pioneers, principles, merits, and demerits.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Artificial System (Theophrastus, Linnaeus):</b><br/>Based on 1 or 2 arbitrary superficial characters (stamen count, habit). Merits: Quick, convenient field identification key. Demerits: Unrelated plants grouped together; vegetative characters fluctuate with climate.<br/><br/><b style="color: #00E676;">2. Natural System (Bentham &amp; Hooker, de Jussieu):</b><br/>Based on total natural morphological, anatomical, and embryological affinities. Merits: Highly practical; reflects true morphological relationships; universal standard in British and Commonwealth herbaria. Demerits: Pre-Darwinian; ignores evolutionary phylogeny; Gymnosperms placed between Dicots and Monocots.<br/><br/><b style="color: #00E676;">3. Phylogenetic System (Engler &amp; Prantl, Hutchinson, Takhtajan):</b><br/>Based on evolutionary descent and genetic lineage. Merits: Reflects true biological genealogy and fossil history. Demerits: Incomplete fossil record creates subjective phylogenies; inconvenient for rapid herbarium filing.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss Acellular Biological Entities: Viruses, Viroids, and Prions in complete depth: Discovery, Molecular Architecture, Pathogenicity, and Classification.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Viruses:</b> Obligate intracellular genetic parasites consisting of a nucleic acid genome (ssRNA, dsRNA, or dsDNA) encased in a protein capsid (2130 capsomeres in TMV; complex head-tail in bacteriophages). Discovered by Ivanowsky (1892), confirmed by Beijerinck (1898) and crystallized by Stanley (1935). Replicate via lytic or lysogenic cycles.<br/><br/><b style="color: #00E676;">2. Viroids:</b> Discovered by T.O. Diener (1971). Naked, free, circular single-stranded RNA of exceptionally low molecular weight (246-375 nucleotides). Completely lack a protein capsid. Cause devastating plant stunting diseases like Potato Spindle Tuber Disease.<br/><br/><b style="color: #00E676;">3. Prions:</b> Discovered by Stanley Prusiner (1982). Infectious, abnormally folded protein particles devoid of nucleic acids. Induce conformational cascade converting normal &alpha;-helical brain proteins into insoluble &beta;-sheet plaques, causing fatal spongiform encephalopathies (BSE / Mad Cow, CJD).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Discuss Lichens in exhaustive detail: Structural Anatomy, Mycobiont-Phycobiont Roles, Morphological Types, Ecological Succession, and Environmental Bioindicators.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Nature &amp; Components:</b> Mutualistic symbiosis of Phycobiont (green alga or cyanobacterium, photosynthesizes food) and Mycobiont (Ascomycete fungus, absorbs water/minerals and provides structural anchorage).<br/><br/><b style="color: #00E676;">2. Morphological Classes:</b><br/>&bull; <i>Crustose:</i> Hard crust adhering tightly to bare rocks (<i>Graphis</i>).<br/>&bull; <i>Foliose:</i> Flat, leaf-like lobed thalli attached via rhizines (<i>Parmelia</i>).<br/>&bull; <i>Fruticose:</i> Shrubby, branched, erect or pendulous thalli (<i>Usnea</i>).<br/><br/><b style="color: #00E676;">3. Ecological Succession:</b> Pioneer species in primary lithosere succession. Excrete lichenic acids (oxalic, carbonic acids) that etch and weather bare volcanic rock into fine soil, paving the way for mosses.<br/><br/><b style="color: #00E676;">4. Air Quality Bioindicators:</b> Lack stomata and cuticles; absorb gases across the entire thallus. Sulfur dioxide (SO<sub>2</sub>) destroys algal chlorophyll, making lichens sensitive pollution sensors.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss the Structure, Classification, and Biological Importance of Kingdom Monera (Eubacteria, Cyanobacteria, Archaebacteria, and Mycoplasma).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Eubacteria (True Bacteria):</b> Peptidoglycan cell walls, circular naked DNA in nucleoid, 70S ribosomes. Heterotrophic, saprophytic, or pathogenic.<br/><br/><b style="color: #00E676;">2. Cyanobacteria:</b> Gram-negative photosynthetic prokaryotes possessing chlorophyll a, carotenoids, and phycobilins. Fix nitrogen inside anaerobic specialized cells called <b>Heterocysts</b>. Crucial biofertilizers in agriculture.<br/><br/><b style="color: #00E676;">3. Archaebacteria:</b> Ancient extremophiles with ether-linked branched-chain membrane lipids. Methanogens (biogas/rumen), Halophiles (salt lakes), Thermoacidophiles (boiling hot sulfur springs).<br/><br/><b style="color: #00E676;">4. Mycoplasma (PPLO):</b> Smallest free-living cells (0.1-0.3 &mu;m) completely lacking cell walls; highly pleomorphic and resistant to penicillin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain the Classification and Life Cycles of Kingdom Fungi: Phycomycetes, Ascomycetes, Basidiomycetes, and Deuteromycetes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Phycomycetes:</b> Aseptate, coenocytic mycelium. Asexual zoospores; sexual oospores or zygospores (<i>Rhizopus</i>, <i>Mucor</i>, <i>Albugo</i>).<br/><br/><b style="color: #00E676;">2. Ascomycetes (Sac Fungi):</b> Septate mycelium. Asexual non-motile conidia; sexual ascospores formed endogenously in sac-like asci within ascocarps (<i>Yeast</i>, <i>Penicillium</i>, <i>Neurospora</i>).<br/><br/><b style="color: #00E676;">3. Basidiomycetes (Club Fungi):</b> Septate mycelium with clamp connections. No asexual spores; sexual basidiospores formed exogenously on club-shaped basidia within basidiocarps (<i>Agaricus</i>, <i>Ustilago</i>, <i>Puccinia</i>).<br/><br/><b style="color: #00E676;">4. Deuteromycetes (Fungi Imperfecti):</b> Artificial group reproducing only by asexual conidia; perfect sexual stage unknown (<i>Alternaria</i>, <i>Colletotrichum</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Discuss the Taxonomic Aids used in Botanical Studies: Herbaria, Botanical Gardens, Museums, Keys, and Taxonomic Literature.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Herbaria:</b> Repositories of pressed, dried plant specimens mounted on standard sheets (42 &times; 29 cm) with collection labels; preserves reference types.<br/><br/><b style="color: #00E676;">2. Botanical Gardens:</b> Living collections of documented plants for scientific study and ex-situ conservation (Kew Gardens, Indian Botanic Garden Howrah).<br/><br/><b style="color: #00E676;">3. Taxonomic Keys:</b> Diagnostic analytical devices based on couplets (contrasting leads) used to identify unknown plants step-by-step.<br/><br/><b style="color: #00E676;">4. Taxonomic Literature:</b><br/>&bull; <i>Flora:</i> Complete geographic account of plant species in an area.<br/>&bull; <i>Manuals:</i> Local identification guides.<br/>&bull; <i>Monographs:</i> Comprehensive treatise on a single genus or family.<br/>&bull; <i>Catalogues:</i> Alphabetical register of taxa.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain the Carl Woese Three-Domain System of Classification (1990) and how it revolutionized the Six-Kingdom Framework.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Basis:</b> Proposed by Carl Woese based on comparative nucleotide sequence analysis of <b>16S ribosomal RNA (16S rRNA)</b>, an evolutionary molecular clock present in all living cells.<br/><br/><b style="color: #00E676;">2. The Three Domains:</b><br/>&bull; <i>Domain Archaea:</i> Prokaryotes with branched ether membrane lipids and unique rRNA sequences (Kingdom Archaebacteria).<br/>&bull; <i>Domain Bacteria:</i> True prokaryotes with unbranched ester lipids and peptidoglycan cell walls (Kingdom Eubacteria).<br/>&bull; <i>Domain Eukarya:</i> All eukaryotic organisms possessing 80S ribosomes and membrane-bound nuclei (Four Kingdoms: Protista, Fungi, Plantae, Animalia).<br/><br/><b style="color: #00E676;">3. Significance:</b> Proved that Archaebacteria are genetically as divergent from true Bacteria as they are from Eukaryotes, splitting Monera into two fundamentally distinct domains.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Discuss the Kingdom Protista in complete depth: Chrysophytes, Dinoflagellates, Euglenoids, Slime Moulds, and Protozoans.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Chrysophytes:</b> Diatoms with indestructible silica frustules fitting together like soapboxes; form diatomaceous earth.<br/><br/><b style="color: #00E676;">2. Dinoflagellates:</b> Biflagellate marine protists with cellulosic armor plates; produce toxic red tides (<i>Gonyaulax</i>).<br/><br/><b style="color: #00E676;">3. Euglenoids:</b> Proteinaceous pellicle; mixotrophic nutrition (photosynthetic in light; predatory in darkness; <i>Euglena</i>).<br/><br/><b style="color: #00E676;">4. Slime Moulds:</b> Saprophytic protists; vegetative multinucleate amoeboid plasmodium; forms spore-bearing fruiting bodies under stress.<br/><br/><b style="color: #00E676;">5. Protozoans:</b> Microscopic heterotrophic unicells classified by locomotion: Amoeboids (pseudopodia), Flagellates (<i>Trypanosoma</i>), Ciliates (<i>Paramecium</i>), Sporozoans (parasitic non-motile <i>Plasmodium</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain the Economic and Ecological Importance of Kingdom Monera in agriculture, medicine, and biogeochemical cycles.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Agriculture &amp; Nitrogen Cycle:</b> Symbiotic (<i>Rhizobium</i> in legume root nodules) and free-living (<i>Azotobacter</i>, <i>Nostoc</i>) bacteria fix ~150 million tons of atmospheric N<sub>2</sub> annually into plant-available ammonia.<br/><br/><b style="color: #00E676;">2. Industrial &amp; Medical:</b> <i>Lactobacillus</i> ferments milk into curd/cheese; <i>Streptomyces</i> species produce crucial antibiotics (Streptomycin, Tetracycline); <i>Clostridium acetobutylicum</i> synthesizes acetone/butanol.<br/><br/><b style="color: #00E676;">3. Biogeochemical Cycling:</b> Saprophytic bacteria decompose dead organic matter, recycling carbon, nitrogen, sulfur, and phosphorus to maintain biosphere homeostasis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Discuss the Structure, Characteristics, and Life Cycle of Cyanobacteria (Blue-Green Algae).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Cellular Architecture:</b> Gram-negative prokaryotic cells containing thylakoids studded with phycobilisomes (phycocyanin, phycoerythrin, allophycocyanin). Gelatinous mucilage sheath surrounds filaments.<br/><br/><b style="color: #00E676;">2. Heterocyst Structure:</b> Thick-walled pale cell with polar nodules lacking Photosystem II, creating an anaerobic niche for oxygen-sensitive nitrogenase.<br/><br/><b style="color: #00E676;">3. Reproduction:</b> Asexual only (no flagella or sexual reproduction); fragments via hormogonia, akinetes (resting spores), or endospores.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Discuss the Plant Life Cycles and Alternation of Generations: Haplontic, Diplontic, and Haplodiplontic.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Haplontic:</b> Dominant free-living generation is the haploid gametophyte (n). The diploid phase is represented solely by the single-celled zygote (2n), which immediately undergoes zygotic meiosis (e.g., <i>Volvox</i>, <i>Spirogyra</i>, <i>Chlamydomonas</i>).<br/><br/><b style="color: #00E676;">2. Diplontic:</b> Dominant free-living generation is the diploid sporophyte (2n). Gametophyte is reduced to single or few-celled gametes (n) formed by gametic meiosis (e.g., <i>Fucus</i>, all Gymnosperms, and Angiosperms).<br/><br/><b style="color: #00E676;">3. Haplodiplontic:</b> Both multicellular haploid gametophyte and diploid sporophyte generations alternate sequentially (e.g., Bryophytes, Pteridophytes, <i>Ectocarpus</i>, <i>Polysiphonia</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the Structure, Replication, and Economic Importance of Viruses in Plants and Animals.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Architecture:</b> Nucleic acid genome surrounded by protein capsomeres; lacks ribosomes and ATP-generating machinery.<br/><br/><b style="color: #00E676;">2. Replication Steps:</b> Adsorption &rarr; Penetration &rarr; Uncoating &rarr; Biosynthesis (replication of viral genome and translation of viral structural proteins) &rarr; Assembly &rarr; Lysis and release.<br/><br/><b style="color: #00E676;">3. Plant Diseases:</b> Tobacco Mosaic Disease, Potato Leaf Roll, Papaya Ring Spot, Banana Bunchy Top.<br/><br/><b style="color: #00E676;">4. Animal Diseases:</b> Smallpox, Influenza, AIDS, Rabies, COVID-19, Foot and Mouth Disease in cattle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Discuss the Role of Modern Taxonomy: Numerical Taxonomy, Cytotaxonomy, and Chemotaxonomy in resolving phylogenetic controversies.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Numerical Taxonomy:</b> Assigns numbers and codes to every observable character, calculating similarity coefficients via computers to establish objective phenetic clusters.<br/><br/><b style="color: #00E676;">2. Cytotaxonomy:</b> Analyzes chromosome numbers, absolute lengths, centromeric positions, and meiotic pairing behavior (e.g., polyploidy and aneuploidy differentiation in wheat).<br/><br/><b style="color: #00E676;">3. Chemotaxonomy:</b> Uses DNA-DNA hybridization, 16S/18S rRNA sequencing, amino acid sequences of Cytochrome c, and secondary metabolites to settle taxonomic disputes where morphological evidence is convergent or ambiguous.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Explain the Herbarium Technique: Field Collection, Pressing, Drying, Poisoning, Mounting, and Labeling of Specimens.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Collection:</b> Healthy plant specimens with flowers/fruits gathered in field vasculum or polythene bags.<br/><b style="color: #00E676;">2. Pressing:</b> Specimens arranged carefully between blotting paper folds in a plant press.<br/><b style="color: #00E676;">3. Drying:</b> Blotting papers changed daily under heat to prevent fungal decay.<br/><b style="color: #00E676;">4. Poisoning:</b> Dipped in 0.1% Mercuric chloride (HgCl<sub>2</sub>) solution to preserve against insect attack.<br/><b style="color: #00E676;">5. Mounting:</b> Glued onto standard stiff herbarium sheets (42 &times; 29 cm).<br/><b style="color: #00E676;">6. Labeling:</b> Standard label (12 &times; 7 cm) pasted at bottom-right corner recording scientific name, family, locality, date, collector's name, and field observations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the Classification of Kingdom Fungi based on Mycelium and Spores with comparative diagrams and examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Phycomycetes:</b> Coenocytic, aseptate hyphae. Produces endogenous sporangiospores or motile zoospores. Sexual zygospores (<i>Mucor</i>, <i>Albugo</i>).<br/><br/><b style="color: #00E676;">2. Ascomycetes:</b> Branched, septate hyphae with simple pores. Asexual conidia; sexual ascospores formed endogenously inside asci within ascocarps (<i>Neurospora</i>, <i>Claviceps</i>).<br/><br/><b style="color: #00E676;">3. Basidiomycetes:</b> Septate hyphae with dolipore septa and clamp connections. Sexual basidiospores formed exogenously on basidia within basidiocarps (<i>Agaricus</i>, <i>Puccinia</i>).<br/><br/><b style="color: #00E676;">4. Deuteromycetes:</b> Septate hyphae; only asexual conidia known (<i>Alternaria</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the Discovery and Characteristics of Viroids and compare them with Satellites and Viruses.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Viroid Discovery:</b> Discovered in 1971 by Theodor O. Diener investigating spindle tuber disease of potatoes.<br/><br/><b style="color: #00E676;">2. Characteristics:</b> Single-stranded circular RNA molecules (246-375 nt) with high G+C content forming stable hairpin rod shapes. Replicate autonomously via host RNA polymerase II using a rolling-circle mechanism.<br/><br/><b style="color: #00E676;">3. Comparison:</b> Viruses have capsids and larger genomes; Satellite viruses require a helper virus to replicate and code for their own capsids; Satellite RNAs require both helper virus replication and encapsidation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the Role of Biological Diversity in Ecosystem Stability and Human Welfare.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Ecosystem Stability:</b> Tilman's long-term experiments proved that species-rich communities show greater stability, higher productivity, and stronger resistance to invasive biological disruptions.<br/><br/><b style="color: #00E676;">2. Ecosystem Services:</b> Photosynthetic oxygen release, carbon sequestration, pollination of crops by bees/insects, soil formation, and watershed protection.<br/><br/><b style="color: #00E676;">3. Human Welfare:</b> Direct supply of all food crops (cereals, legumes), life-saving pharmaceuticals (quinine, digitalis, vincristine, taxol), timber, fibers, and industrial resins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an exhaustive Master Synthesis Matrix correlating Taxonomy, Binomial Nomenclature, Classification Systems, 5 Kingdoms, and Acellular Pathogens.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Taxonomic Architecture:</b> Linnaean binomial rules (Genus + species, ICBN); 7 obligate hierarchy ranks (Kingdom to Species).<br/><br/><b style="color: #00E676;">2. Classification Evolution:</b> Artificial (Linnaeus stamen counts) &rarr; Natural (Bentham &amp; Hooker, herbarium standard) &rarr; Phylogenetic (Engler-Prantl, cladistics).<br/><br/><b style="color: #00E676;">3. Whittaker's 5 Kingdoms:</b> Monera (prokaryotic peptidoglycan), Protista (eukaryotic unicells), Fungi (absorptive chitinous), Plantae (autotrophic cellulosic), Animalia (ingestive heterotrophic).<br/><br/><b style="color: #00E676;">4. Acellular Entities:</b> Viruses (nucleoprotein virions, lytic/lysogenic cycles), Viroids (free low-MW RNA, no capsid), Prions (abnormally folded infectious proteins).<br/><br/><b style="color: #00E676;">5. Symbiosis:</b> Lichens (Phycobiont food + Mycobiont mineral shelter; primary rock colonizers and SO<sub>2</sub> pollution bioindicators).
    </div>
  </div>

</div>
`;

export const c11Bot1Mcqs = [
  {
    "id": "c11-bot-1-mcq-1",
    "question": "Who is considered the Father of Taxonomy and proposed Binomial Nomenclature?",
    "options": [
      "A):   Theophrastus",
      "B):   Carolus Linnaeus",
      "C):   Aristotle",
      "D):   John Ray"
    ],
    "correctAnswer": "b",
    "explanation": "Carolus Linnaeus formalized binomial nomenclature in his historic work 'Species Plantarum' (1753)."
  },
  {
    "id": "c11-bot-1-mcq-2",
    "question": "According to the rules of botanical nomenclature (ICBN), tautonyms are:",
    "options": [
      "A):   Commonly encouraged",
      "B):   Valid only for gymnosperms",
      "C):   Strictly rejected in plants",
      "D):   Used for medicinal plants"
    ],
    "correctAnswer": "c",
    "explanation": "Tautonyms (identical generic and specific names, like Malus malus) are strictly invalid in botanical nomenclature."
  },
  {
    "id": "c11-bot-1-mcq-3",
    "question": "What is the standard taxonomic suffix used for plant Families?",
    "options": [
      "A):   -ales",
      "B):   -phyta",
      "C):   -aceae",
      "D):   -opsida"
    ],
    "correctAnswer": "c",
    "explanation": "Plant family names always end with the suffix '-aceae' (e.g., Solanaceae, Poaceae, Fabaceae)."
  },
  {
    "id": "c11-bot-1-mcq-4",
    "question": "The correct descending sequence of obligate taxonomic categories is:",
    "options": [
      "A):   Kingdom &rarr; Division &rarr; Class &rarr; Order &rarr; Family &rarr; Genus &rarr; Species",
      "B):   Kingdom &rarr; Order &rarr; Class &rarr; Division &rarr; Family &rarr; Genus &rarr; Species",
      "C):   Kingdom &rarr; Class &rarr; Division &rarr; Family &rarr; Order &rarr; Genus &rarr; Species",
      "D):   Species &rarr; Genus &rarr; Family &rarr; Order &rarr; Class &rarr; Division &rarr; Kingdom"
    ],
    "correctAnswer": "a",
    "explanation": "The hierarchy proceeds from largest/broadest category to most specific: Kingdom &rarr; Division &rarr; Class &rarr; Order &rarr; Family &rarr; Genus &rarr; Species."
  },
  {
    "id": "c11-bot-1-mcq-5",
    "question": "Linnaeus' sexual system of classification is an example of an:",
    "options": [
      "A):   Phylogenetic system",
      "B):   Natural system",
      "C):   Artificial system",
      "D):   Cladistic system"
    ],
    "correctAnswer": "c",
    "explanation": "It is an artificial system based strictly on a single numerical character: the number and nature of stamens."
  },
  {
    "id": "c11-bot-1-mcq-6",
    "question": "Bentham and Hooker's system of plant classification is widely used because:",
    "options": [
      "A):   It is purely phylogenetic",
      "B):   It is based on direct specimen examination and is highly practical in herbaria",
      "C):   It was formulated by Linnaeus",
      "D):   It classifies bacteria"
    ],
    "correctAnswer": "b",
    "explanation": "Bentham and Hooker personally examined actual plant specimens; its high diagnostic accuracy makes it the standard in Commonwealth herbaria."
  },
  {
    "id": "c11-bot-1-mcq-7",
    "question": "What is a major demerit of Bentham and Hooker's system?",
    "options": [
      "A):   Algae are placed with fungi",
      "B):   Gymnosperms are placed between Dicotyledones and Monocotyledones",
      "C):   Monocots are placed before Dicots",
      "D):   It uses only stamen numbers"
    ],
    "correctAnswer": "b",
    "explanation": "Bentham and Hooker placed Gymnospermae unnaturally between Dicots and Monocots, which is phylogenetically incorrect."
  },
  {
    "id": "c11-bot-1-mcq-8",
    "question": "Phylogenetic systems of classification are based on:",
    "options": [
      "A):   Growth habit of plants",
      "B):   Floral morphology alone",
      "C):   Evolutionary relationships and genetic descent",
      "D):   Number of stamens"
    ],
    "correctAnswer": "c",
    "explanation": "Phylogenetic systems (e.g., Engler & Prantl, Hutchinson) group organisms according to common evolutionary descent."
  },
  {
    "id": "c11-bot-1-mcq-9",
    "question": "Classification based on chromosome number, structure, and meiotic behavior is called:",
    "options": [
      "A):   Chemotaxonomy",
      "B):   Numerical taxonomy",
      "C):   Cytotaxonomy",
      "D):   Cladistics"
    ],
    "correctAnswer": "c",
    "explanation": "Cytotaxonomy (karyotaxonomy) evaluates cytological characteristics like chromosome numbers and karyotypes."
  },
  {
    "id": "c11-bot-1-mcq-10",
    "question": "Which of the following is NOT one of R.H. Whittaker's 5 criteria for classification?",
    "options": [
      "A):   Complexity of cell structure",
      "B):   Mode of nutrition",
      "C):   Color of flowers",
      "D):   Phylogenetic relationships"
    ],
    "correctAnswer": "c",
    "explanation": "Whittaker used cell complexity, body complexity, nutrition, reproduction, and phylogeny; flower color was not a criterion."
  },
  {
    "id": "c11-bot-1-mcq-11",
    "question": "All prokaryotic organisms are classified in Whittaker's system under:",
    "options": [
      "A):   Kingdom Protista",
      "B):   Kingdom Monera",
      "C):   Kingdom Fungi",
      "D):   Domain Eukarya"
    ],
    "correctAnswer": "b",
    "explanation": "Kingdom Monera exclusively encompasses all unicellular prokaryotes lacking membrane-bound nuclei."
  },
  {
    "id": "c11-bot-1-mcq-12",
    "question": "The cell wall of true Fungi is primarily composed of:",
    "options": [
      "A):   Cellulose and pectin",
      "B):   Peptidoglycan (murein)",
      "C):   Chitin and &beta;-glucans",
      "D):   Silica"
    ],
    "correctAnswer": "c",
    "explanation": "Fungal cell walls are made of chitin (N-acetylglucosamine polymer) and &beta;-glucans, unlike plant cellulosic walls."
  },
  {
    "id": "c11-bot-1-mcq-13",
    "question": "Diatomaceous earth is formed by the accumulation of siliceous cell walls of:",
    "options": [
      "A):   Dinoflagellates",
      "B):   Chrysophytes (Diatoms)",
      "C):   Euglenoids",
      "D):   Brown algae"
    ],
    "correctAnswer": "b",
    "explanation": "Diatom silica walls (frustules) are indestructible and deposit over millions of years as diatomaceous earth on the ocean bed."
  },
  {
    "id": "c11-bot-1-mcq-14",
    "question": "The phenomenon of toxic 'Red Tides' in coastal oceans is caused by:",
    "options": [
      "A):   Diatoms",
      "B):   Dinoflagellates (e.g., Gonyaulax)",
      "C):   Slime moulds",
      "D):   Euglena"
    ],
    "correctAnswer": "b",
    "explanation": "Rapid population blooms of red dinoflagellates like Gonyaulax release saxitoxins that discolor water and poison marine life."
  },
  {
    "id": "c11-bot-1-mcq-15",
    "question": "Organisms that exhibit autotrophic nutrition in sunlight but turn heterotrophic in darkness are:",
    "options": [
      "A):   Slime moulds",
      "B):   Euglenoids (e.g., Euglena)",
      "C):   Cyanobacteria",
      "D):   Archaebacteria"
    ],
    "correctAnswer": "b",
    "explanation": "Euglenoids practice mixotrophy: photosynthetic in light, and predatory/absorptive in darkness."
  },
  {
    "id": "c11-bot-1-mcq-16",
    "question": "Mycoplasma are unique among prokaryotes because they:",
    "options": [
      "A):   Are photosynthetic",
      "B):   Possess a chitin cell wall",
      "C):   Completely lack a cell wall and are resistant to penicillin",
      "D):   Possess cilia"
    ],
    "correctAnswer": "c",
    "explanation": "Mycoplasma have no cell wall, are pleomorphic, and resist cell-wall-inhibiting &beta;-lactam antibiotics like penicillin."
  },
  {
    "id": "c11-bot-1-mcq-17",
    "question": "The specialized cells responsible for nitrogen fixation in Cyanobacteria are called:",
    "options": [
      "A):   Akinetes",
      "B):   Heterocysts",
      "C):   Hormogonia",
      "D):   Trichomes"
    ],
    "correctAnswer": "b",
    "explanation": "Heterocysts lack Photosystem II, providing an anaerobic microenvironment for oxygen-sensitive nitrogenase to fix N<sub>2</sub>."
  },
  {
    "id": "c11-bot-1-mcq-18",
    "question": "Archaebacteria survive extreme boiling acid springs and hypersaline waters due to:",
    "options": [
      "A):   Peptidoglycan walls",
      "B):   Branched-chain ether-linked membrane lipids",
      "C):   Ester-linked unbranched lipids",
      "D):   Cellulose walls"
    ],
    "correctAnswer": "b",
    "explanation": "Their membranes have branched phytanyl chains with ether linkages, conferring exceptional thermal and acid stability."
  },
  {
    "id": "c11-bot-1-mcq-19",
    "question": "Who discovered Viroids in 1971?",
    "options": [
      "A):   Dmitri Ivanowsky",
      "B):   M.W. Beijerinck",
      "C):   T.O. Diener",
      "D):   W.M. Stanley"
    ],
    "correctAnswer": "c",
    "explanation": "Theodor O. Diener discovered viroids as free infectious RNA particles causing Potato Spindle Tuber Disease."
  },
  {
    "id": "c11-bot-1-mcq-20",
    "question": "A Viroid differs from a Virus in having:",
    "options": [
      "A):   DNA without protein coat",
      "B):   Naked RNA without a protein coat",
      "C):   Protein coat without RNA",
      "D):   Both DNA and RNA"
    ],
    "correctAnswer": "b",
    "explanation": "Viroids consist strictly of low-molecular-weight circular RNA and completely lack a protein capsid."
  },
  {
    "id": "c11-bot-1-mcq-21",
    "question": "Prions are infectious agents composed purely of:",
    "options": [
      "A):   Single-stranded DNA",
      "B):   Double-stranded RNA",
      "C):   Abnormally folded proteins devoid of nucleic acids",
      "D):   Lipopolysaccharides"
    ],
    "correctAnswer": "c",
    "explanation": "Prions are infectious proteinaceous particles containing no genetic material (DNA/RNA)."
  },
  {
    "id": "c11-bot-1-mcq-22",
    "question": "In Lichens, the algal partner is called the ______ and the fungal partner is called the ______:",
    "options": [
      "A):   Mycobiont, Phycobiont",
      "B):   Phycobiont, Mycobiont",
      "C):   Symbiont, Parasite",
      "D):   Holotype, Isotype"
    ],
    "correctAnswer": "b",
    "explanation": "The autotrophic alga is the Phycobiont; the heterotrophic fungus is the Mycobiont."
  },
  {
    "id": "c11-bot-1-mcq-23",
    "question": "Why are Lichens regarded as bioindicators of industrial air pollution?",
    "options": [
      "A):   They grow vigorously near factories",
      "B):   They are extremely sensitive to Sulfur Dioxide (SO<sub>2</sub>) and cannot survive in polluted air",
      "C):   They produce poisonous spores",
      "D):   They consume heavy metals"
    ],
    "correctAnswer": "b",
    "explanation": "SO<sub>2</sub> permanently bleaches and degrades algal chlorophyll; lichens fail to grow in polluted urban areas."
  },
  {
    "id": "c11-bot-1-mcq-24",
    "question": "In a taxonomic key, each pair of contrasting statements is known as a:",
    "options": [
      "A):   Lead",
      "B):   Couplet",
      "C):   Monograph",
      "D):   Manual"
    ],
    "correctAnswer": "b",
    "explanation": "A couplet consists of two contrasting leads representing alternative diagnostic features."
  },
  {
    "id": "c11-bot-1-mcq-25",
    "question": "Deuteromycetes are commonly referred to as 'Fungi Imperfecti' because:",
    "options": [
      "A):   They lack a cell wall",
      "B):   Only their asexual (imperfect) stages are known; sexual stages are absent or undiscovered",
      "C):   They are prokaryotes",
      "D):   They have no mycelium"
    ],
    "correctAnswer": "b",
    "explanation": "Deuteromycetes lack an observed sexual teleomorph stage, reproducing exclusively through asexual conidia."
  }
];
