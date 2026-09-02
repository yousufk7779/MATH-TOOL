// Class 11 Botany Chapter 2: Kingdom Plantae
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Botany | Class: 11 | Code: c11-bot-2

export const c11Bot2HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.12), rgba(255, 111, 0, 0.12)); border: 1.5px solid rgba(255, 145, 0, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #FF9100; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 2: Kingdom Plantae</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Thallophyta (Algae):</b> Simple, autotrophic, non-vascular plants lacking true roots, stems, and leaves; body is an undifferentiated thallus.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Amphibians of Plant Kingdom:</b> Bryophytes (Mosses &amp; Liverworts), which live on land but require a thin film of external water for flagellated antherozoids to swim to the archegonium for fertilization.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Pteridophytes:</b> The first terrestrial vascular plants (Cryptogams) possessing true xylem (tracheids) and phloem (sieve cells), reproducing via spores.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Gymnosperms:</b> Naked-seeded vascular plants where ovules are not enclosed by an ovary wall and remain freely exposed on megasporophyll surfaces before and after fertilization.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Aestivation:</b> The mode of arrangement of sepals or petals in the floral bud with respect to other members of the same whorl (Valvate, Twisted, Imbricate, Vexillary).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Placentation:</b> The architectural distribution and pattern of attachment of ovules upon the fertile placenta inside the ovary chamber.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    Classification of plants into major groups; General characters of Algae, Bryophyta, Pteridophyta and Gymnosperms and their classes
  </h2>

  <!-- PRESERVED IMAGE 1 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRkY5MTAwIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPlBsYW50IEtpbmdkb20gRXZvbHV0aW9uYXJ5IEFyY2hpdGVjdHVyZTwvdGV4dD4KICAKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gMS4gQWxnYWUgLS0+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjEyKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS4gQUxHQUUgKFRoYWxsb2lkIEF2YXNjdWxhcik8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiMwMEU2NzYiPkNobG9yb3BoeWNlYWU6PC90c3Bhbj4gR3JlZW4gKFZvbHZveCk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQ1NEYiPlBoYWVvcGh5Y2VhZTo8L3RzcGFuPiBCcm93biAoRnVjdXMpPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGNTI1MiI+UmhvZG9waHljZWFlOjwvdHNwYW4+IFJlZCAoUG9seXNpcGhvbmlhKTwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIxNDUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjIpIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjE3NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNwaXJvZ3lyYSwgVWxvdGhyaXgsIExhbWluYXJpYTwvdGV4dD4KCiAgICA8IS0tIDIuIEJyeW9waHl0YSAtLT4KICAgIDxyZWN0IHg9IjM3MCIgeT0iMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4xMikiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIEJSWU9QSFlUQSAoQW1waGliaWFucyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIE5vbi12YXNjdWxhciAoV2F0ZXIgZm9yIGZlcnRpbGl6YXRpb24pPC90ZXh0PgogICAgPHRleHQgeD0iMzkwIiB5PSI5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+SGVwYXRpY29wc2lkYTo8L3RzcGFuPiBMaXZlcndvcnRzIChHZW1tYSk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+QnJ5b3BzaWRhOjwvdHNwYW4+IE1vc3NlcyAoUHJvdG9uZW1hKTwvdGV4dD4KICAgIDxyZWN0IHg9IjM4NSIgeT0iMTQ1IiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4yKSIvPgogICAgPHRleHQgeD0iNTQ1IiB5PSIxNzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYXJjaGFudGlhLCBGdW5hcmlhLCBTcGhhZ251bTwvdGV4dD4KCiAgICA8IS0tIDMuIFB0ZXJpZG9waHl0YSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjIzMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDE3NiwyNTUsMC4xMikiIHN0cm9rZT0iIzAwQjBGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjI2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBCMEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zLiBQVEVSSURPUEhZVEEgKFZhc2N1bGFyKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIyOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgMXN0IExhbmQgVmFzY3VsYXIgUGxhbnRzIChYeWxlbS9QaGxvZW0pPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjMyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBEb21pbmFudCBwaGFzZTogRGlwbG9pZCBTcG9yb3BoeXRlICgybik8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMzU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5IZXRlcm9zcG9yeTo8L3RzcGFuPiBTZWVkIEhhYml0IFByZWN1cnNvcjwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIzNzUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMTc2LDI1NSwwLjIpIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjQwNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNlbGFnaW5lbGxhLCBFcXVpc2V0dW0sIERyeW9wdGVyaXM8L3RleHQ+CgogICAgPCEtLSA0LiBHeW1ub3NwZXJtcyAtLT4KICAgIDxyZWN0IHg9IjM3MCIgeT0iMjMwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyMCw2NCwyNTEsMC4xMikiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjI2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40LiBHWU1OT1NQRVJNUyAoTmFrZWQgU2VlZCk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjI5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBPdnVsZXMgTk9UIGVuY2xvc2VkIGluIG92YXJ5IHdhbGw8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+Q3ljYXM6PC90c3Bhbj4gQ29yYWxsb2lkIHJvb3RzIChDeWFub2JhY3RlcmlhKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMzU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5QaW51czo8L3RzcGFuPiBNeWNvcnJoaXphbCBmdW5nYWwgYXNzb2NpYXRpb248L3RleHQ+CiAgICA8cmVjdCB4PSIzODUiIHk9IjM3NSIgd2lkdGg9IjMyMCIgaGVpZ2h0PSI1MCIgcng9IjgiIGZpbGw9InJnYmEoMjIwLDY0LDI1MSwwLjIpIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjQwNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkN5Y2FzLCBQaW51cywgQ2VkcnVzLCBTZXF1b2lhPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4xNSkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Fdm9sdXRpb246IEF2YXNjdWxhciBBbGdhZSDinpQgQW1waGliaWFuIEJyeW9waHl0ZXMg4p6UIFZhc2N1bGFyIEZlcm5zIOKelCBTZWVkIEd5bW5vc3Blcm1zPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(255, 145, 0, 0.4); border: 2px solid #FF9100;" alt="3D Plant Kingdom Architecture" /><p style="color: #FF9100; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 2.1: 3D Plant Kingdom Evolutionary Architecture &amp; Major Groups (Algae, Bryophyta, Pteridophyta, Gymnosperms)</p></div>

  

  <p>
    Kingdom Plantae comprises eukaryotic, multicellular photoautotrophic organisms containing chlorophyll pigments, cellulosic cell walls, and exhibiting distinct alternation of generations between haploid gametophyte (n) and diploid sporophyte (2n) stages.
  </p>

  <h3 style="color: #FF9100; margin-top: 18px; font-size: 16.5px;">(i) Plant Kingdom Classification Overview &amp; Algae Classes (Chlorophyceae, Phaeophyceae, Rhodophyceae)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Algae are chlorophyll-bearing, simple thalloid, avascular aquatic organisms. Classified into three major classes:
      <br/>1. <b style="color: #FF9100;">Chlorophyceae (Green Algae):</b>
        <br/>- Photosynthetic pigments: <b>Chlorophyll a and b</b>; give bright grass-green color.
        <br/>- Stored food: <b>True Starch</b> stored in specialized protein-rich organelles called <b>Pyrenoids</b>.
        <br/>- Cell wall: Inner cellulose layer, outer pectose layer.
        <br/>- Motile spores: 2 to 8 equal, apical whiplash flagella.
        <br/>- Examples: <i>Chlamydomonas</i> (unicellular), <i>Volvox</i> (colonial), <i>Spirogyra</i> and <i>Ulothrix</i> (filamentous).
      <br/>2. <b style="color: #FF9100;">Phaeophyceae (Brown Algae):</b>
        <br/>- Marine kelps; pigments: <b>Chlorophyll a, c, carotenoids, and fucoxanthin</b> (imparts olive-green to deep brown color).
        <br/>- Stored food: Complex carbohydrates: <b>Laminarin and Mannitol</b>.
        <br/>- Cell wall: Cellulose coated externally by a gelatinous, hydrocolloid sheath of <b>Algin</b>.
        <br/>- Motile zoospores: Pear-shaped with <b>2 unequal, laterally inserted flagella</b>.
        <br/>- Body: Differentiated into Holdfast (attachment), Stipe (stalk), and Frond (leaf-like photosynthetic lamina). Examples: <i>Ectocarpus</i>, <i>Fucus</i>, <i>Dictyota</i>, <i>Laminaria</i>, <i>Sargassum</i>.
      <br/>3. <b style="color: #FF9100;">Rhodophyceae (Red Algae):</b>
        <br/>- Mostly marine deep-sea algae; pigments: <b>Chlorophyll a, d, and r-phycoerythrin</b> (absorbs blue-green penetrating light).
        <br/>- Stored food: <b>Floridean Starch</b> (structurally identical to amylopectin and glycogen).
        <br/>- Flagella: <b>Completely absent</b> in all life cycle stages (non-motile spores and non-motile gametes).
        <br/>- Source of Commercial Hydrocolloids: <b>Agar</b> extracted from <i>Gelidium</i> and <i>Gracilaria</i> (culture media, ice creams); <b>Carrageenan</b> from <i>Chondrus crispus</i>. Examples: <i>Polysiphonia</i>, <i>Porphyra</i>.
    </p>
  </div>

  <!-- NEW STANDALONE SVG CARD FOR ALGAE & LIFE CYCLES -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#FF9100" font-size="14" font-weight="bold" text-anchor="middle">
        Comparative Classes of Algae &amp; Plant Life Cycles
      </text>

      <!-- 3 Columns for Algal Classes -->
      <g transform="translate(25, 45)">
        <!-- Chlorophyceae -->
        <rect x="0" y="0" width="140" height="135" rx="6" fill="rgba(0, 230, 118, 0.15)" stroke="#00E676" stroke-width="1.2"/>
        <text x="70" y="20" fill="#00E676" font-size="11" font-weight="bold" text-anchor="middle">Chlorophyceae</text>
        <text x="70" y="36" fill="#FFFFFF" font-size="9" text-anchor="middle">(Green Algae)</text>
        <text x="70" y="56" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Pigments: Chl a, b</text>
        <text x="70" y="74" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Stored Food: Starch</text>
        <text x="70" y="92" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Cell Wall: Cellulose</text>
        <text x="70" y="110" fill="#69F0AE" font-size="8.5" text-anchor="middle">Flagella: 2-8 Equal</text>
        <text x="70" y="126" fill="#FFE082" font-size="8" font-weight="bold" text-anchor="middle">Volvox, Chlamydomonas</text>

        <!-- Phaeophyceae -->
        <rect x="155" y="0" width="140" height="135" rx="6" fill="rgba(255, 145, 0, 0.15)" stroke="#FF9100" stroke-width="1.2"/>
        <text x="225" y="20" fill="#FF9100" font-size="11" font-weight="bold" text-anchor="middle">Phaeophyceae</text>
        <text x="225" y="36" fill="#FFFFFF" font-size="9" text-anchor="middle">(Brown Algae)</text>
        <text x="225" y="56" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Pigments: Chl a, c, Fucoxanthin</text>
        <text x="225" y="74" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Stored Food: Laminarin/Mannitol</text>
        <text x="225" y="92" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Cell Wall: Algin + Cellulose</text>
        <text x="225" y="110" fill="#FFB74D" font-size="8.5" text-anchor="middle">Flagella: 2 Unequal Lateral</text>
        <text x="225" y="126" fill="#FFE082" font-size="8" font-weight="bold" text-anchor="middle">Ectocarpus, Fucus, Kelp</text>

        <!-- Rhodophyceae -->
        <rect x="310" y="0" width="140" height="135" rx="6" fill="rgba(244, 67, 54, 0.15)" stroke="#F44336" stroke-width="1.2"/>
        <text x="380" y="20" fill="#F44336" font-size="11" font-weight="bold" text-anchor="middle">Rhodophyceae</text>
        <text x="380" y="36" fill="#FFFFFF" font-size="9" text-anchor="middle">(Red Algae)</text>
        <text x="380" y="56" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Pigments: Chl a, d, r-Phycoerythrin</text>
        <text x="380" y="74" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Stored Food: Floridean Starch</text>
        <text x="380" y="92" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Cell Wall: Agar + Carrageen</text>
        <text x="380" y="110" fill="#EF9A9A" font-size="8.5" text-anchor="middle">Flagella: Completely Absent</text>
        <text x="380" y="126" fill="#FFE082" font-size="8" font-weight="bold" text-anchor="middle">Polysiphonia, Gracilaria</text>
      </g>

      <!-- Bottom: Alternation of Generations -->
      <g transform="translate(25, 192)">
        <rect width="450" height="75" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 145, 0, 0.3)"/>
        <text x="225" y="20" fill="#FF9100" font-size="11" font-weight="bold" text-anchor="middle">
          Patterns of Plant Life Cycles &amp; Alternation of Generations
        </text>
        <text x="75" y="44" fill="#00E676" font-size="9.5" font-weight="bold" text-anchor="middle">1. Haplontic (n Dominant)</text>
        <text x="75" y="60" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Zygotic meiosis; Volvox, Spirogyra</text>

        <text x="225" y="44" fill="#26C6DA" font-size="9.5" font-weight="bold" text-anchor="middle">2. Haplodiplontic (Both n &amp; 2n)</text>
        <text x="225" y="60" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Bryophytes &amp; Pteridophytes</text>

        <text x="375" y="44" fill="#E040FB" font-size="9.5" font-weight="bold" text-anchor="middle">3. Diplontic (2n Dominant)</text>
        <text x="375" y="60" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Gametic meiosis; Gymnosperms &amp; Angiosperms</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 2.4: Comparative Matrix of Algal Classes (Chlorophyceae, Phaeophyceae, Rhodophyceae) &amp; Alternation of Generations Patterns
  </div>
</div>


  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(ii) Bryophyta: General Characters &amp; Classes (Hepaticopsida &amp; Bryopsida)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Bryophytes are non-vascular embryophytes known as the <b>Amphibians of the Plant Kingdom</b> because while they grow on damp terrestrial soil, fertilization is strictly dependent on an external film of water through which biflagellated antherozoids swim to reach the non-motile egg inside the multicellular archegonium.
      <br/>&bull; Dominant generation: <b>Haploid Gametophyte (n)</b> (free-living, photosynthetic).
      <br/>&bull; Sporophyte (2n): Parasitic, structurally dependent on gametophyte for nutrition; consists of <b>Foot, Seta, and Capsule</b>.
      <br/>1. <b style="color: #FF9100;">Hepaticopsida (Liverworts):</b> Dorsiventral, prostrate thallus closely appressed to substrate (e.g., <i>Marchantia</i>). Asexual reproduction via multicellular green buds called <b>Gemmae</b> produced in gemma cups. Male sex organs on Antheridiophores; female on Archegoniophores.
      <br/>2. <b style="color: #FF9100;">Bryopsida (Mosses):</b> Gametophyte consists of two stages: creeping filamentous <b>Protonema stage</b> (from spore germination) followed by erect, leafy <b>Gametophore stage</b> with spirally arranged leaves and multicellular rhizoids (e.g., <i>Funaria</i>, <i>Polytrichum</i>, <i>Sphagnum</i> / Peat Moss used as packaging material and absorbent surgical dressing).
    </p>
  </div>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(iii) Pteridophyta: First Vascular Plants &amp; Classes (Psilopsida, Lycopsida, Sphenopsida, Pteropsida)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Pteridophytes are the first terrestrial plants possessing <b>vascular tissues (Xylem with tracheids and Phloem with sieve cells)</b>.
      <br/>&bull; Dominant plant body: <b>Diploid Sporophyte (2n)</b> differentiated into true roots, stem, and leaves.
      <br/>&bull; Leaves: Microphylls (small, in <i>Selaginella</i>) or Macrophylls (large fronds, in Ferns).
      <br/>&bull; Spores germinate to produce a small, inconspicuous, heart-shaped, multicellular, free-living, photosynthetic thalloid gametophyte called the <b>Prothallus</b>.
      <br/>&bull; <b style="color: #FF9100;">Heterospory &amp; Origin of Seed Habit:</b> Most pteridophytes are homosporous (identical spores). Genera like <i>Selaginella</i> and <i>Salvinia</i> are <b>heterosporous</b>, producing two kinds of spores: small <b>Microspores</b> (giving rise to male gametophyte) and large <b>Megaspores</b> (giving rise to female gametophyte retained inside the megasporangium on parent sporophyte). This retention and development of zygote within female gametophyte is the <b>vital evolutionary precursor to the seed habit</b>.
      <br/>&bull; Four Classes: <b>Psilopsida</b> (<i>Psilotum</i>), <b>Lycopsida</b> (<i>Selaginella</i>, <i>Lycopodium</i>), <b>Sphenopsida</b> (<i>Equisetum</i> / Horsetail with silica stems), <b>Pteropsida</b> (<i>Dryopteris</i>, <i>Pteris</i>, <i>Adiantum</i> / Walking fern).
    </p>
  </div>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(iv) Gymnosperms: Naked Seeded Vascular Plants (Cycas &amp; Pinus)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Gymnosperms (Gymnos = naked, sperma = seed) are vascular plants where the <b>ovules are not enclosed by an ovary</b>; thus, seeds remain naked and exposed on megasporophylls.
      <br/>&bull; Root Adaptations: Taproot system. <i>Pinus</i> roots form obligate symbiotic <b>Mycorrhiza</b> with fungi; <i>Cycas</i> develops specialized apogeotropic <b>Coralloid roots</b> containing symbiotic nitrogen-fixing cyanobacteria (<i>Nostoc</i>, <i>Anabaena</i>).
      <br/>&bull; Xerophytic Leaf Adaptations: Needle-like leaves (reducing surface area), thick cuticle, and deeply sunken stomata to minimize transpirational water loss.
      <br/>&bull; Heterospory: Microsporangiate (male) cones produce winged pollen grains; Megasporangiate (female) cones produce ovules containing 2 or more archegonia.
      <br/>&bull; Pollination is direct and anemophilous (wind-pollinated); fertilization occurs via a pollen tube (siphonogamy).
    </p>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    Morphology of Flowering plants and their function: Morphology of root, stem and leaf (without their modifications); Morphology of Inflorescence, flower, fruit and seed
  </h2>

  <!-- PRESERVED IMAGE 2 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFudCBNb3JwaG9sb2d5ICZhbXA7IEluZmxvcmVzY2VuY2UgQXJjaGl0ZWN0dXJlPC90ZXh0PgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gTGVmdCBCb3g6IFJvb3QgUmVnaW9ucyAmIExlYWYgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQ3NSIgcng9IjE0IiBmaWxsPSJyZ2JhKDI1NSwxNDUsMCwwLjA2KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Um9vdCBSZWdpb25zICZhbXA7IExlYWYgTW9ycGhvbG9neTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTkwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjQgUmVnaW9ucyBvZiBSb290IFRpcDo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+MS4gPHRzcGFuIGZpbGw9IiNGRkQxODAiPlJvb3QgQ2FwOjwvdHNwYW4+IFByb3RlY3RpdmUgY292ZXI8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTM4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+Mi4gPHRzcGFuIGZpbGw9IiNGRkQxODAiPk1lcmlzdGVtYXRpYzo8L3RzcGFuPiBTbWFsbCBkaXZpZGluZyBjZWxsczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+RWxvbmdhdGlvbjo8L3RzcGFuPiBMZW5ndGggZXhwYW5zaW9uPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE5NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjQuIDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5NYXR1cmF0aW9uOjwvdHNwYW4+IFVuaWNlbGx1bGFyIFJvb3QgSGFpcnM8L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjI2MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxOTUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzAiIHk9IjI4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkxlYWYgVmVuYXRpb24gJmFtcDsgUGh5bGxvdGF4eTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMzE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5SZXRpY3VsYXRlOjwvdHNwYW4+IE5ldC1saWtlIHZlaW5zIChEaWNvdHMpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM0MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+UGFyYWxsZWw6PC90c3Bhbj4gUGFyYWxsZWwgdmVpbnMgKE1vbm9jb3RzKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPkFsdGVybmF0ZTo8L3RzcGFuPiBTaW5nbGUgbGVhZi9ub2RlIChDaGluYSByb3NlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzOTkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPk9wcG9zaXRlOjwvdHNwYW4+IFBhaXIvbm9kZSAoQ2Fsb3Ryb3Bpcyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iNDI3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5XaG9ybGVkOjwvdHNwYW4+IENpcmNsZS9ub2RlIChBbHN0b25pYSk8L3RleHQ+CiAgPC9nPgoKICA8IS0tIFJpZ2h0IEJveDogSW5mbG9yZXNjZW5jZSAmIEZsb3JhbCBXaG9ybHMgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzkwLCA2NSkiPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0NzUiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4wNikiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkluZmxvcmVzY2VuY2UgJmFtcDsgRmxvcmFsIFdob3JsczwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTkwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkluZmxvcmVzY2VuY2UgVHlwZXM6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+UmFjZW1vc2U6PC90c3Bhbj4gSW5kZWZpbml0ZSBheGlzIGdyb3d0aDs8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNEREQiPiAgQWNyb3BldGFsIHN1Y2Nlc3Npb24gKG9sZGVyIGF0IGJhc2UpLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRjUyNTIiPkN5bW9zZTo8L3RzcGFuPiBBeGlzIHRlcm1pbmF0ZXMgaW4gZmxvd2VyOzwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0RERCI+ICBCYXNpcGV0YWwgc3VjY2Vzc2lvbiAob2xkZXIgYXQgdG9wKS48L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjI2MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxOTUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzAiIHk9IjI4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkZsb3JhbCBXaG9ybHMgJmFtcDsgT3ZhcnkgUG9zaXRpb246PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjMxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjEuIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5DYWx5eDo8L3RzcGFuPiBTZXBhbHMgKFBlcnNpc3RlbnQpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM0MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjIuIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5Db3JvbGxhOjwvdHNwYW4+IFBldGFscyAoVmFsdmF0ZS9Ud2lzdGVkKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+QW5kcm9lY2l1bTo8L3RzcGFuPiBFcGlwZXRhbG91cyBTdGFtZW5zPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM5OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjQuIDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5IeXBvZ3lub3VzOjwvdHNwYW4+IFN1cGVyaW9yIE92YXJ5PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjQyNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjUuIDx0c3BhbiBmaWxsPSIjRkY1MjUyIj5FcGlneW5vdXM6PC90c3Bhbj4gSW5mZXJpb3IgT3Zhcnk8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(255, 145, 0, 0.4); border: 2px solid #FF9100;" alt="3D Plant Morphology" /><p style="color: #FF9100; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 2.2: 3D Plant Morphology (Root Regions, Leaf Venation, Racemose vs Cymose Inflorescence &amp; Floral Whorls)</p></div>

  

  <h3 style="color: #FF9100; margin-top: 18px; font-size: 16.5px;">(i) Morphology &amp; Functions of Root, Stem and Leaf</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF9100;">Root Morphology:</b> Develops from radicle. Comprises four longitudinal zones:
        <br/>1. <i>Root Cap (Calyptra):</i> Thimble-like protective structure at apex secreting mucilage.
        <br/>2. <i>Region of Meristematic Activity:</i> Small, thin-walled actively dividing cells with dense cytoplasm.
        <br/>3. <i>Region of Elongation:</i> Cells undergo rapid elongation responsible for growth in root length.
        <br/>4. <i>Region of Maturation:</i> Differentiated zone producing fine, delicate unicellular epidermal outgrowths called <b>Root Hairs</b> responsible for absorbing water and dissolved minerals from soil.
      </li>
      <li><b style="color: #FF9100;">Stem Morphology:</b> Ascending axis developing from the plumule; characterized by presence of <b>nodes</b> (where leaves arise) and <b>internodes</b>, carrying terminal and axillary buds. Conducts water, minerals, and photosynthates.</li>
      <li><b style="color: #FF9100;">Leaf Morphology:</b> Lateral flattened photosynthetic organ consisting of:
        <br/>1. <i>Leaf Base (Hypopodium):</i> Attaches leaf to stem; may possess a swollen <b>Pulvinus</b> in legumes.
        <br/>2. <i>Petiole (Mesopodium):</i> Flexible stalk holding blade to light.
        <br/>3. <i>Lamina (Epipodium):</i> Green expanded blade with veins and veinlets providing structural support and vascular transport.
        <br/>- <b style="color: #FF9100;">Venation:</b> Reticulate (interconnected meshwork in Dicots) vs Parallel (parallel veins in Monocots).
      </li>
    </ul>
  </div>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(ii) Morphology of Inflorescence and Flower Structure</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The arrangement of flowers on the floral axis (peduncle) is termed an <b>Inflorescence</b>:
      <br/>&bull; <b style="color: #FF9100;">Racemose:</b> Main axis continues to grow indefinitely; flowers borne laterally in <b>acropetal succession</b> (oldest at base, youngest at apex).
      <br/>&bull; <b style="color: #FF9100;">Cymose:</b> Main axis terminates in a flower, limiting growth; flowers borne in <b>basipetal succession</b> (oldest at apex, youngest at base).
      <br/>&bull; <b style="color: #FF9100;">Flower Whorls:</b> Calyx (sepals), Corolla (petals), Androecium (stamens), Gynoecium (carpels).
      <br/>- Symmetry: <b>Actinomorphic</b> (radial symmetry, &oplus;) vs <b>Zygomorphic</b> (bilateral symmetry, %).
      <br/>- Ovary Position: <b>Hypogynous</b> (superior ovary, G), <b>Perigynous</b> (half-inferior ovary), <b>Epigynous</b> (inferior ovary, G).
    </p>
  </div>

  <!-- NEW STANDALONE SVG CARD FOR AESTIVATION & PLACENTATION -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 280" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="280" rx="8" fill="#0F172A"/>

      <!-- Title -->
      <text x="250" y="26" fill="#FF9100" font-size="14" font-weight="bold" text-anchor="middle">
        Types of Aestivation &amp; Placentation in Angiosperms
      </text>

      <!-- Row 1: Types of Aestivation -->
      <g transform="translate(20, 42)">
        <rect width="460" height="105" rx="6" fill="rgba(38, 198, 218, 0.12)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="230" y="18" fill="#26C6DA" font-size="11" font-weight="bold" text-anchor="middle">
          Types of Floral Aestivation (Arrangement of Sepals / Petals in Bud)
        </text>

        <!-- Valvate -->
        <g transform="translate(15, 26)">
          <rect width="95" height="68" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="47" y="18" fill="#FFFFFF" font-size="9.5" font-weight="bold" text-anchor="middle">Valvate</text>
          <text x="47" y="36" fill="#CBD5E1" font-size="8" text-anchor="middle">Margins touch</text>
          <text x="47" y="48" fill="#CBD5E1" font-size="8" text-anchor="middle">without overlap</text>
          <text x="47" y="62" fill="#80DEEA" font-size="8" font-weight="bold" text-anchor="middle">Calotropis</text>
        </g>

        <!-- Twisted -->
        <g transform="translate(125, 26)">
          <rect width="95" height="68" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="47" y="18" fill="#FFFFFF" font-size="9.5" font-weight="bold" text-anchor="middle">Twisted</text>
          <text x="47" y="36" fill="#CBD5E1" font-size="8" text-anchor="middle">One margin in,</text>
          <text x="47" y="48" fill="#CBD5E1" font-size="8" text-anchor="middle">one out regularly</text>
          <text x="47" y="62" fill="#80DEEA" font-size="8" font-weight="bold" text-anchor="middle">China Rose, Cotton</text>
        </g>

        <!-- Imbricate -->
        <g transform="translate(235, 26)">
          <rect width="95" height="68" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="47" y="18" fill="#FFFFFF" font-size="9.5" font-weight="bold" text-anchor="middle">Imbricate</text>
          <text x="47" y="36" fill="#CBD5E1" font-size="8" text-anchor="middle">Irregular overlap</text>
          <text x="47" y="48" fill="#CBD5E1" font-size="8" text-anchor="middle">(1 completely in)</text>
          <text x="47" y="62" fill="#80DEEA" font-size="8" font-weight="bold" text-anchor="middle">Cassia, Gulmohur</text>
        </g>

        <!-- Vexillary -->
        <g transform="translate(345, 26)">
          <rect width="95" height="68" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="47" y="18" fill="#FFFFFF" font-size="9.5" font-weight="bold" text-anchor="middle">Vexillary</text>
          <text x="47" y="36" fill="#CBD5E1" font-size="8" text-anchor="middle">1 Standard (Vexillum)</text>
          <text x="47" y="48" fill="#CBD5E1" font-size="8" text-anchor="middle">2 Wings + 2 Keels</text>
          <text x="47" y="62" fill="#80DEEA" font-size="8" font-weight="bold" text-anchor="middle">Pea, Bean (Fabaceae)</text>
        </g>
      </g>

      <!-- Row 2: Types of Placentation -->
      <g transform="translate(20, 155)">
        <rect width="460" height="110" rx="6" fill="rgba(255, 145, 0, 0.12)" stroke="#FF9100" stroke-width="1.2"/>
        <text x="230" y="18" fill="#FF9100" font-size="11" font-weight="bold" text-anchor="middle">
          Types of Placentation (Arrangement of Ovules inside Ovary)
        </text>

        <!-- 5 Types in Grid -->
        <g transform="translate(10, 26)">
          <!-- Marginal -->
          <rect x="0" y="0" width="82" height="72" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="41" y="16" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Marginal</text>
          <text x="41" y="32" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Along ventral suture</text>
          <text x="41" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Single ridge</text>
          <text x="41" y="64" fill="#FFB74D" font-size="8" font-weight="bold" text-anchor="middle">Pea</text>

          <!-- Axile -->
          <rect x="90" y="0" width="82" height="72" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="131" y="16" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Axile</text>
          <text x="131" y="32" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Multilocular ovary</text>
          <text x="131" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Central axis</text>
          <text x="131" y="64" fill="#FFB74D" font-size="8" font-weight="bold" text-anchor="middle">Tomato, Solanaceae</text>

          <!-- Parietal -->
          <rect x="180" y="0" width="82" height="72" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="221" y="16" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Parietal</text>
          <text x="221" y="32" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Inner wall / replum</text>
          <text x="221" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Unilocular</text>
          <text x="221" y="64" fill="#FFB74D" font-size="8" font-weight="bold" text-anchor="middle">Mustard, Argemone</text>

          <!-- Free Central -->
          <rect x="270" y="0" width="82" height="72" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="311" y="16" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Free Central</text>
          <text x="311" y="32" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Central axis</text>
          <text x="311" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Septa absent</text>
          <text x="311" y="64" fill="#FFB74D" font-size="8" font-weight="bold" text-anchor="middle">Dianthus, Primrose</text>

          <!-- Basal -->
          <rect x="360" y="0" width="82" height="72" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="401" y="16" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Basal</text>
          <text x="401" y="32" fill="#CBD5E1" font-size="7.5" text-anchor="middle">At ovary base</text>
          <text x="401" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Single ovule</text>
          <text x="401" y="64" fill="#FFB74D" font-size="8" font-weight="bold" text-anchor="middle">Sunflower, Marigold</text>
        </g>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 2.5: Architectural Types of Floral Aestivation (Valvate, Twisted, Imbricate, Vexillary) &amp; Ovary Placentation (Marginal, Axile, Parietal, Free Central, Basal)
  </div>
</div>


  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(iii) Morphology of Fruit and Seed</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF9100;">Fruit:</b> A mature, ripened ovary developed after fertilization. If developed without fertilization, it is <b>Parthenocarpic</b> (seedless, e.g., Banana).
        <br/>- <i>Drupe (Stone Fruit):</i> Monocarpellary superior ovary (e.g., Mango and Coconut). Pericarp is differentiated into thin Epicarp (skin), fleshy edible Mesocarp (in Mango) or fibrous Mesocarp (in Coconut), and stony hard Endocarp enclosing the single seed.
      </li>
      <li><b style="color: #FF9100;">Seed Structure:</b>
        <br/>- <i>Dicotyledonous Seed (e.g., Gram, Pea):</i> Seed coat (outer Testa + inner Tegmen), Hilum, Micropyle, Embryonal axis, and two food-storing fleshy cotyledons (non-endospermic).
        <br/>- <i>Monocotyledonous Seed (e.g., Maize):</i> Seed coat fused with fruit wall. Endosperm bulky and surrounded by a proteinaceous <b>Aleurone layer</b>. Embryo has a shield-shaped single cotyledon called <b>Scutellum</b>, Plumule enclosed in protective <b>Coleoptile</b>, and Radicle enclosed in <b>Coleorhiza</b>.
      </li>
    </ul>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    Description of family Solanaceae
  </h2>

  <!-- PRESERVED IMAGE 3 -->
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRkY5MTAwIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjYyMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkZhbWlseSBTb2xhbmFjZWFlIChQb3RhdG8gRmFtaWx5KSBUZWNobmljYWwgRGVzY3JpcHRpb248L3RleHQ+CgogIDwhLS0gVE9QIEZVTEwtV0lEVEggQk9YIChXaWR0aCA3MjBweCk6IEZsb3JhbCBGb3JtdWxhICYgU3ltYm9sIEJyZWFrZG93biAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iMjU1IiByeD0iMTQiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMDgpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBTb2xhbmFjZWFlIEZsb3JhbCBGb3JtdWxhICZhbXA7IFRlY2huaWNhbCBTeW1ib2xzPC90ZXh0PgoKICAgIDwhLS0gRm9ybXVsYSBEaXNwbGF5IFBpbGwgLS0+CiAgICA8cmVjdCB4PSIxMjAiIHk9IjQ1IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU1IiByeD0iMjgiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMjIpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSI4MSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4oKykgKEJpc2V4dWFsKSBLKDUpIEMoNSkgQTUgRygyKTwvdGV4dD4KCiAgICA8IS0tIFN5bWJvbHMgQnJlYWtkb3duIEdyaWQgKDIgQ29sdW1ucywgRnVsbCA3MjBweCBXaWR0aCkgLS0+CiAgICA8IS0tIENvbHVtbiAxIC0tPgogICAgPHRleHQgeD0iMzAiIHk9IjEzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRjkxMDAiPigrKSA6PC90c3Bhbj4gQWN0aW5vbW9ycGhpYyAoUmFkaWFsIFN5bW1ldHJ5KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkY5MTAwIj5LKDUpIDo8L3RzcGFuPiA1IEdhbW9zZXBhbG91cyBQZXJzaXN0ZW50IFNlcGFsczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkY5MTAwIj5BNSA6PC90c3Bhbj4gNSBFcGlwZXRhbG91cyBTdGFtZW5zIChmdXNlZCB0byBwZXRhbHMpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjIyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQxODAiPlBsYWNlbnRhdGlvbjo8L3RzcGFuPiBTd29sbGVuIEF4aWxlIFBsYWNlbnRhdGlvbiB3aXRoIG9ibGlxdWUgc2VwdGE8L3RleHQ+CgogICAgPCEtLSBDb2x1bW4gMiAtLT4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGOTEwMCI+KEJpc2V4dWFsKSA6PC90c3Bhbj4gQmlzZXh1YWwgRmxvd2VyIChIZXJtYXBocm9kaXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTYwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGOTEwMCI+Qyg1KSA6PC90c3Bhbj4gNSBHYW1vcGV0YWxvdXMgUGV0YWxzIChWYWx2YXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+RygyKSA6PC90c3Bhbj4gQmljYXJwZWxsYXJ5LCBTeW5jYXJwb3VzLCBTdXBlcmlvciBPdmFyeTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+RnJ1aXQgJmFtcDsgU2VlZDo8L3RzcGFuPiBCZXJyeS9DYXBzdWxlLCBFbmRvc3Blcm1pYyBzZWVkczwvdGV4dD4KICA8L2c+CgogIDwhLS0gQk9UVE9NIEZVTEwtV0lEVEggQk9YIChXaWR0aCA3MjBweCk6IEVjb25vbWljIEltcG9ydGFuY2UgJiBJbXBvcnRhbnQgUGxhbnRzIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCAzNDApIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iMjYwIiByeD0iMTQiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMDgpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLiBFY29ub21pYyBJbXBvcnRhbmNlICZhbXA7IEtleSBTb2xhbmFjZWFlIFBsYW50czwvdGV4dD4KCiAgICA8IS0tIENhdGVnb3J5IDE6IEZvb2QgQ3JvcHMgLS0+CiAgICA8cmVjdCB4PSIyMCIgeT0iNDUiIHdpZHRoPSI2ODAiIGhlaWdodD0iNjAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzUiIHk9IjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjEuIEZvb2QgU291cmNlIENyb3BzOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSI5MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5Qb3RhdG8gKDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5Tb2xhbnVtIHR1YmVyb3N1bTwvdHNwYW4+KSAgIOKAoiAgIFRvbWF0byAoPHRzcGFuIGZpbGw9IiNGRkQxODAiPlNvbGFudW0gbHljb3BlcnNpY3VtPC90c3Bhbj4pICAg4oCiICAgQnJpbmphbCAoPHRzcGFuIGZpbGw9IiNGRkQxODAiPlNvbGFudW0gbWVsb25nZW5hPC90c3Bhbj4pPC90ZXh0PgoKICAgIDwhLS0gQ2F0ZWdvcnkgMjogU3BpY2UgJiBGdW1pZ2F0b3J5IC0tPgogICAgPHJlY3QgeD0iMjAiIHk9IjExNSIgd2lkdGg9IjY4MCIgaGVpZ2h0PSI2MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjIuIFNwaWNlICZhbXA7IEZ1bWlnYXRvcnk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjE2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5DaGlsbGkgU3BpY2UgKDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5DYXBzaWN1bSBhbm51dW08L3RzcGFuPikgICDigKIgICBUb2JhY2NvICg8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+Tmljb3RpYW5hIHRhYmFjdW08L3RzcGFuPik8L3RleHQ+CgogICAgPCEtLSBDYXRlZ29yeSAzOiBNZWRpY2luYWwgJiBPcm5hbWVudGFsIC0tPgogICAgPHJlY3QgeD0iMjAiIHk9IjE4NSIgd2lkdGg9IjY4MCIgaGVpZ2h0PSI2MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjMuIE1lZGljaW5hbCAmYW1wOyBPcm5hbWVudGFsOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIyMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+QmVsbGFkb25uYSAoPHRzcGFuIGZpbGw9IiM2OUYwQUUiPkF0cm9wYSBiZWxsYWRvbm5hPC90c3Bhbj4pICAg4oCiICAgQXNod2FnYW5kaGEgKDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5XaXRoYW5pYSBzb21uaWZlcmE8L3RzcGFuPikgICDigKIgICBQZXR1bmlhICg8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+UGV0dW5pYSBoeWJyaWRhPC90c3Bhbj4pPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(255, 145, 0, 0.4); border: 2px solid #FF9100;" alt="3D Solanaceae Family Technical Description" /><p style="color: #FF9100; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 2.3: Family Solanaceae Technical Description (Floral Formula, Epipetalous Stamens &amp; Swollen Axile Placentation)</p></div>

  

  <h3 style="color: #FF9100; margin-top: 18px; font-size: 16.5px;">(i) Vegetative &amp; Reproductive Characters of Family Solanaceae</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Commonly known as the <b>Potato family</b> (Nightshade family), widely distributed in tropics, subtropics, and temperate zones:
      <br/>&bull; <b style="color: #FF9100;">Vegetative Characters:</b> Mostly herbs, shrubs, or rarely small trees; stem herbaceous, erect, branched, solid/fistular, hairy or glabrous, underground stem in potato (<i>Solanum tuberosum</i>). Leaves alternate, simple, exstipulate, reticulate venation.
      <br/>&bull; <b style="color: #FF9100;">Inflorescence:</b> Solitary, axillary or cymose (as in <i>Solanum</i>).
      <br/>&bull; <b style="color: #FF9100;">Flower:</b> Ebracteate, pedicellate, complete, bisexual, actinomorphic, pentamerous, hypogynous.
      <br/>&bull; <b style="color: #FF9100;">Calyx:</b> Sepals 5, gamosepalous (united), valvate aestivation, <b>persistent and accrescent</b> (enlarges with fruit development, as in Brinjal and <i>Physalis</i>).
      <br/>&bull; <b style="color: #FF9100;">Corolla:</b> Petals 5, gamopetalous, infundibuliform or rotate, valvate aestivation.
      <br/>&bull; <b style="color: #FF9100;">Androecium:</b> Stamens 5, polyandrous, <b>epipetalous</b> (filaments fused to corolla tube), alternating with petals; anthers dithecous, basifixed, dehiscence porous or longitudinal.
      <br/>&bull; <b style="color: #FF9100;">Gynoecium:</b> Bicarpellary, syncarpous, <b>superior ovary</b>, bilocular (sometimes tetralocular due to false septum), <b>carpels placed obliquely at 45&deg;</b>, <b>swollen placenta with many ovules</b>, <b>Axile placentation</b>, style simple, stigma bilobed.
    </p>
  </div>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(ii) Technical Description, Floral Formula &amp; Floral Diagram of Solanaceae</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #FF9100;">Floral Formula:</b>
      <br/><span style="font-size: 18px; font-weight: bold; color: #FFFFFF; display: block; margin: 8px 0;">
        &oplus; &compfn; K<sub>(5)</sub> C&#8255;<sub>(5)</sub> A<sub>5</sub> <span style="text-decoration: underline;">G</span><sub>(2)</sub>
      </span>
      <br/>&bull; <b style="color: #FF9100;">Fruit:</b> Berry (Tomato, Brinjal) or Capsule (<i>Datura</i>, <i>Nicotiana</i>).
      <br/>&bull; <b style="color: #FF9100;">Seeds:</b> Many, endospermic.
      <br/>&bull; <b style="color: #FF9100;">Economic Importance:</b>
      <br/>1. <i>Food:</i> Potato (<i>Solanum tuberosum</i>), Tomato (<i>Solanum lycopersicum</i>), Brinjal (<i>Solanum melongena</i>).
      <br/>2. <i>Spice:</i> Chilli (<i>Capsicum annuum</i>).
      <br/>3. <i>Medicine:</i> Belladonna (<i>Atropa belladonna</i>), Ashwagandha (<i>Withania somnifera</i>).
      <br/>4. <i>Fumigatory:</i> Tobacco (<i>Nicotiana tabacum</i>).
      <br/>5. <i>Ornamentals:</i> Petunia (<i>Petunia hybrida</i>).
    </p>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(230, 81, 0, 0.85)); border: 2px solid #FF9100; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #FF9100; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 2 Kingdom Plantae Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(255, 145, 0, 0.25); color: #FF9100; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Taxon / Organ</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Diagnostic Anatomical / Morphological Features</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Representative Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Chlorophyceae:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Chl a, b; Starch in pyrenoids; 2-8 equal apical flagella</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Chlamydomonas</i>, <i>Volvox</i>, <i>Spirogyra</i></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Phaeophyceae:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Chl a, c, fucoxanthin; Laminarin/mannitol; algin wall</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Ectocarpus</i>, <i>Laminaria</i>, <i>Fucus</i></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Rhodophyceae:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Chl a, d, r-phycoerythrin; Floridean starch; no flagella</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Polysiphonia</i>, <i>Gracilaria</i>, <i>Gelidium</i></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Bryophytes:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Non-vascular; dominant gametophyte (n); parasitic sporophyte</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Marchantia</i> (gemmae), <i>Funaria</i>, <i>Sphagnum</i></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Pteridophytes:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">First vascular plants; sporophyte (2n); prothallus (n); heterospory</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Selaginella</i> (seed habit precursor), <i>Equisetum</i></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Gymnosperms:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Naked seeds; no ovary; mycorrhiza (Pinus); coralloid roots (Cycas)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Pinus</i>, <i>Cycas</i>, <i>Ginkgo</i>, <i>Sequoia</i></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Aestivation:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Valvate (margins meet), Twisted, Imbricate, Vexillary (1+2+2)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Calotropis, China Rose, Cassia, Pea</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Placentation:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Marginal, Axile (Solanaceae), Parietal, Free central, Basal</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Pea, Tomato, Mustard, Dianthus, Sunflower</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Solanaceae:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&oplus; &compfn; K<sub>(5)</sub> C&#8255;<sub>(5)</sub> A<sub>5</sub> <span style="text-decoration: underline;">G</span><sub>(2)</sub>; persistent calyx, oblique ovary</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Potato, Tomato, Brinjal, Chilli, Ashwagandha</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Bot2HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.15), rgba(255, 111, 0, 0.15)); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Algal Pigments, Bryophyte Spores, Vascular Pteridophytes, Gymnosperm Cones &amp; Floral Terminology</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: What photosynthetic pigments are present in Chlorophyceae (Green Algae)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Chlorophyll a and Chlorophyll b.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: What is a Pyrenoid?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A proteinaceous sub-cellular body located in chloroplasts of green algae that synthesizes and stores starch.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: Name the pigment responsible for the brown color of Phaeophyceae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fucoxanthin (a xanthophyll carotenoid pigment).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: What are the stored food materials in Brown Algae?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Laminarin and Mannitol.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Name the gelatinous hydrocolloid substance found in the outer cell wall of brown algae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Algin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What red pigment gives Rhodophyceae their characteristic color?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      r-Phycoerythrin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: What is the reserve food material in Red Algae?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Floridean starch.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Which algal class completely lacks flagellated motile stages throughout its life cycle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Rhodophyceae (Red Algae).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Name two red algae from which commercial Agar is extracted.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Gelidium</i> and <i>Gracilaria</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Why are Bryophytes called the 'Amphibians of the Plant Kingdom'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because they live on land but require an external film of water for flagellated antherozoids to swim to the archegonium for fertilization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Name the dominant, independent generation in Bryophytes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Haploid Gametophyte (n).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: What are Gemmae? Give an example of a liverwort producing them.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Multicellular, green, asexual reproductive buds produced inside gemma cups in <i>Marchantia</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: Name the moss commonly known as 'Peat Moss'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Sphagnum</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What are the first terrestrial plants to possess vascular tissues (Xylem & Phloem)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pteridophytes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: What is a Prothallus?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A small, heart-shaped, multicellular, free-living photosynthetic haploid gametophyte in ferns.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Name two heterosporous Pteridophytes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Selaginella</i> and <i>Salvinia</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Why is heterospory in Selaginella considered a precursor to the seed habit?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because the megaspore is retained inside the megasporangium on the parent sporophyte, where the embryo develops.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Which gymnosperm is considered a 'living fossil'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Ginkgo biloba</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What are Coralloid Roots? In which gymnosperm are they found?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Specialized apogeotropic symbiotic roots containing nitrogen-fixing cyanobacteria (<i>Nostoc</i>), found in <i>Cycas</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What type of symbiotic association is found in the roots of Pinus?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mycorrhiza (symbiosis with fungal hyphae).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Why are the seeds of Gymnosperms described as 'Naked'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because ovules are not enclosed inside an ovary wall, remaining directly exposed on megasporophylls.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Name the tall giant redwood tree that is one of the tallest gymnosperms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Sequoia sempervirens</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What is the function of the Root Cap (Calyptra)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Protects the tender root apical meristem and secretes mucilage to lubricate root passage through soil.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: Which region of the root possesses Root Hairs?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Region of Maturation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What are Pneumatophores? Give an example of a mangrove plant possessing them.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Respiratory roots that grow vertically upward into the air to obtain oxygen in marshy soils, found in <i>Rhizophora</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: What is Pulvinus?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A swollen leaf base found in leguminous plants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Differentiate between Reticulate and Parallel venation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Reticulate venation forms an interconnected network (Dicots); Parallel venation runs parallel without forming meshes (Monocots).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Define Inflorescence.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The natural arrangement of flowers on the floral axis (peduncle).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: What is Acropetal succession in Racemose inflorescence?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A sequence where the oldest flowers are at the base and youngest flowers are toward the apex.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Define Aestivation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The mode of arrangement of sepals or petals in the floral bud with respect to other members of the same whorl.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Give an example of plant showing Vexillary aestivation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pea (<i>Pisum sativum</i>) and Bean.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is Placentation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The arrangement of ovules on the placenta inside the ovary chamber.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Name the placentation type where ovules develop on a central axis and septa are absent.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Free Central placentation (e.g., <i>Dianthus</i>, <i>Primula</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What type of placentation is characteristic of Family Solanaceae?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Axile placentation with a swollen placenta.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: What is a Drupe? Give two examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A fleshy single-seeded stone fruit developing from a monocarpellary superior ovary, as in Mango and Coconut.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What is the edible part of a Mango fruit?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fleshy Mesocarp.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: What is the edible part of a Coconut?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cellular and liquid Endosperm.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is the protective sheath covering the plumule in a monocot maize seed?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Coleoptile.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: What is the protective sheath covering the radicle in a monocot seed?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Coleorhiza.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Write the Floral Formula of Family Solanaceae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &oplus; &compfn; K<sub>(5)</sub> C&#8255;<sub>(5)</sub> A<sub>5</sub> <span style="text-decoration: underline;">G</span><sub>(2)</sub>.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.15), rgba(255, 111, 0, 0.15)); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Algae Class Comparisons, Heterospory in Selaginella, Aestivation &amp; Placentation Types, Solanaceae Oblique Ovary</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Compare Chlorophyceae, Phaeophyceae, and Rhodophyceae with respect to: (a) Major pigments, (b) Stored food, (c) Cell wall composition.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Chlorophyceae:</b> Chlorophyll a, b; Starch; Cellulose.<br/>2. <b style="color: #FF9100;">Phaeophyceae:</b> Chlorophyll a, c, Fucoxanthin; Laminarin and Mannitol; Cellulose coated with Algin.<br/>3. <b style="color: #FF9100;">Rhodophyceae:</b> Chlorophyll a, d, r-Phycoerythrin; Floridean starch; Cellulose, Pectin, and Agar/Carrageenan.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Explain why Rhodophyceae can thrive at great depths in oceans where other photosynthetic plants fail to grow.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Red algae possess the accessory pigment <b>r-phycoerythrin</b>, which absorbs short-wavelength, high-energy <b>blue-green light</b>. Blue-green light penetrates deepest into oceanic water columns (over 100 meters), allowing red algae to carry out efficient photosynthesis at abyssal depths where red and orange light are completely absorbed near the surface.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the ecological and economic importance of Bryophytes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Soil Formation &amp; Succession:</b> Mosses colonize bare rocks along with lichens, decomposing rock into organic soil for vascular plants.<br/>2. <b style="color: #FF9100;">Soil Erosion Prevention:</b> Mosses form dense carpet-like mats that absorb falling rain impact and bind soil particles.<br/>3. <b style="color: #FF9100;">Economic Uses of Peat (Sphagnum):</b> Forms peat used as domestic fuel; high water-retention capacity makes it ideal packaging material for trans-shipment of living cut plants and flowers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Differentiate between Liverworts (Hepaticopsida) and Mosses (Bryopsida) in three major features.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Gametophyte Body:</b> Liverworts possess a dorsiventral, prostrate, thalloid body (e.g., <i>Marchantia</i>); Mosses have an erect, leafy gametophore with spirally arranged leaves.<br/>2. <b style="color: #FF9100;">Protonema Stage:</b> Liverworts develop directly from spores without a protonema; Moss spores first germinate into a juvenile filamentous <b>Protonema stage</b>.<br/>3. <b style="color: #FF9100;">Rhizoids:</b> Liverworts have unicellular, unbranched rhizoids; Mosses have multicellular, branched rhizoids with oblique septa.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain the life cycle of a Fern (Pteridophyte) showing alternation of generations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ferns exhibit a <b>haplodiplontic life cycle</b>:<br/>1. <b style="color: #FF9100;">Sporophyte (2n):</b> Dominant, independent vascular plant bearing sporangia clustered in sori on sporophylls. Meiosis inside sporangia produces haploid spores (n).<br/>2. <b style="color: #FF9100;">Gametophyte (n):</b> Spores germinate into a free-living, heart-shaped, multicellular green <b>Prothallus</b> bearing antheridia and archegonia.<br/>3. Fertilization requires water for antherozoids to swim to archegonia, forming diploid zygote (2n) that develops into a young sporophyte.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Explain Heterospory and describe its evolutionary significance in plant development.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Heterospory is the production of two morphologically and functionally distinct types of spores: small <b>Microspores</b> and large <b>Megaspores</b> (e.g., in <i>Selaginella</i>, <i>Salvinia</i>, and all seed plants).<br/><b style="color: #FF9100;">Significance:</b><br/>1. Leads to extreme reduction of the gametophyte generation, protected inside the spore wall.<br/>2. Megaspore is retained inside the megasporangium on parent sporophyte, providing nutrition to developing embryo.<br/>3. Serves as the direct evolutionary milestone for the origin of the <b>Seed Habit</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: List four xerophytic adaptations seen in the leaves of Gymnosperms like Pinus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Needle-like Foliage:</b> Drastically reduces total surface area exposed to wind and sun.<br/>2. <b style="color: #FF9100;">Thick Cuticle:</b> Heavily waxy, impermeable cuticle prevents cuticular transpiration.<br/>3. <b style="color: #FF9100;">Sunken Stomata:</b> Stomata situated in deep epidermal grooves to trap humid air and minimize vapor loss.<br/>4. <b style="color: #FF9100;">Transfusion Tissue:</b> Specialized parenchyma and tracheids that facilitate radial water conduction without veins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Differentiate between Cycas and Pinus with respect to: (a) Stem branching, (b) Root type, (c) Female cones.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Stem:</b> <i>Cycas</i> has an unbranched columnar stem; <i>Pinus</i> has a profusely branched excurrent stem.<br/>2. <b style="color: #FF9100;">Roots:</b> <i>Cycas</i> forms coralloid roots with cyanobacteria; <i>Pinus</i> forms mycorrhizal roots with fungi.<br/>3. <b style="color: #FF9100;">Female Cones:</b> <i>Cycas</i> does not form a compact female cone (megasporophylls loosely arranged at apex); <i>Pinus</i> forms compact, woody female cones.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain the four anatomical zones of a typical dicot root from apex upward.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Root Cap (Calyptra):</b> Multicellular thimble covering root apex, protecting meristem and lubricating soil passage.<br/>2. <b style="color: #FF9100;">Meristematic Zone:</b> Apical meristem with tiny, thin-walled actively dividing isodiametric cells.<br/>3. <b style="color: #FF9100;">Elongation Zone:</b> Cells rapidly expand and elongate, driving vertical penetration of root into soil.<br/>4. <b style="color: #FF9100;">Maturation Zone:</b> Epidermal cells differentiate and produce unicellular <b>Root Hairs</b> for water and mineral absorption.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Differentiate between Racemose and Cymose inflorescence in three essential aspects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Peduncle Growth:</b> Racemose main axis shows continuous indefinite growth; Cymose terminates in a flower, limiting peduncle growth.<br/>2. <b style="color: #FF9100;">Opening of Flowers:</b> Racemose flowers open in <b>centripetal sequence</b> (outer/lower first); Cymose flowers open in <b>centrifugal sequence</b> (central/top first).<br/>3. <b style="color: #FF9100;">Succession:</b> Racemose is <b>acropetal</b> (youngest at apex); Cymose is <b>basipetal</b> (oldest at apex).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain the four major types of Aestivation with floral diagrams and examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Valvate:</b> Sepals/petals touch each other at margin without overlapping (e.g., <i>Calotropis</i>).<br/>2. <b style="color: #FF9100;">Twisted:</b> One margin of the petal overlaps the adjacent one regularly (e.g., China Rose, Cotton).<br/>3. <b style="color: #FF9100;">Imbricate:</b> Margins overlap irregularly, with one petal completely internal and one completely external (e.g., <i>Cassia</i>, Gulmohur).<br/>4. <b style="color: #FF9100;">Vexillary (Papilionaceous):</b> Largest posterior petal (Standard/Vexillum) overlaps two lateral petals (Wings), which overlap two smallest anterior petals (Keel) (e.g., Pea, Bean).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain the five major types of Placentation with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Marginal:</b> Placenta forms a ridge along ventral suture of unilocular ovary (e.g., Pea).<br/>2. <b style="color: #FF9100;">Axile:</b> Ovary multilocular, ovules attached to central axis formed by fused septa (e.g., Tomato, Solanaceae, Lemon).<br/>3. <b style="color: #FF9100;">Parietal:</b> Ovules develop on the inner ovary wall or peripheral part; ovary unilocular but becomes bilocular due to false septum (Replum) (e.g., Mustard, <i>Argemone</i>).<br/>4. <b style="color: #FF9100;">Free Central:</b> Ovules borne on central axis without dividing septa (e.g., <i>Dianthus</i>, <i>Primula</i>).<br/>5. <b style="color: #FF9100;">Basal:</b> Placenta develops at base of ovary with a single ovule (e.g., Sunflower, Marigold).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Differentiate between Hypogynous, Perigynous, and Epigynous flowers with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Hypogynous:</b> Gynoecium occupies highest position; calyx, corolla, stamens situated below it. Ovary is <b>Superior</b> (e.g., Mustard, China Rose, Brinjal).<br/>2. <b style="color: #FF9100;">Perigynous:</b> Gynoecium in centre; other floral parts located on rim of thalamus at almost same level. Ovary is <b>Half-Inferior</b> (e.g., Plum, Rose, Peach).<br/>3. <b style="color: #FF9100;">Epigynous:</b> Thalamus margin grows upward enclosing ovary completely and fusing with it; other parts arise above ovary. Ovary is <b>Inferior</b> (e.g., Guava, Cucumber, ray florets of Sunflower).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Describe the structure of a Drupe fruit with reference to Mango and Coconut.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A Drupe is a simple fleshy fruit developed from a monocarpellary superior ovary:<br/>1. <b style="color: #FF9100;">Mango (Mangifera indica):</b> Epicarp forms thin skin; <b>Mesocarp is fleshy, juicy, and edible</b>; Endocarp is stony hard, protecting the seed.<br/>2. <b style="color: #FF9100;">Coconut (Cocos nucifera):</b> Epicarp is thin; <b>Mesocarp is fibrous</b> (used for coir ropes); Endocarp is stony with three germ pores; seed contains edible cellular and liquid endosperm.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Describe the structure of a Dicot seed (Gram/Pea) with a labeled diagrammatic description.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Seed Coat:</b> Outer tough <b>Testa</b> and inner thin membranous <b>Tegmen</b>. Hilum is scar of funicle attachment; micropyle is tiny pore for water uptake.<br/>2. <b style="color: #FF9100;">Embryo:</b> Attached to embryonal axis. Consists of:<br/>- Two large, fleshy <b>Cotyledons</b> storing food (starch/proteins).<br/>- <b style="color: #FF9100;">Radicle:</b> Lower tip developing into primary root.<br/>- <b style="color: #FF9100;">Plumule:</b> Upper shoot apex.<br/>Endosperm is completely consumed during development (non-endospermic / exalbuminous seed).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Describe the structure of a Monocot seed (Maize grain).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Caryopsis:</b> Seed coat is completely fused with the pericarp (fruit wall).<br/>2. <b style="color: #FF9100;">Endosperm:</b> Occupies major portion, storing starch; separated from embryo by a protein-rich <b>Aleurone layer</b>.<br/>3. <b style="color: #FF9100;">Embryo:</b> Small, located in a groove at one end:<br/>- <b style="color: #FF9100;">Scutellum:</b> Single shield-shaped cotyledon that absorbs nutrients.<br/>- <b style="color: #FF9100;">Plumule:</b> Enclosed in protective cylindrical sheath called <b>Coleoptile</b>.<br/>- <b style="color: #FF9100;">Radicle:</b> Enclosed in protective sheath called <b>Coleorhiza</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Describe the technical floral characters of Family Solanaceae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Calyx:</b> Sepals 5, gamosepalous, valvate, persistent and accrescent.<br/>2. <b style="color: #FF9100;">Corolla:</b> Petals 5, gamopetalous, valvate, infundibuliform or rotate.<br/>3. <b style="color: #FF9100;">Androecium:</b> Stamens 5, polyandrous, <b>epipetalous</b>, alternating with petals.<br/>4. <b style="color: #FF9100;">Gynoecium:</b> Bicarpellary, syncarpous, superior ovary, <b>oblique septum</b>, <b>swollen axile placenta</b> with many ovules.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain why the ovary in Family Solanaceae is described as 'Oblique'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In Solanaceae, the two carpels are not aligned symmetrically along the median anterior-posterior plane. Instead, the posterior carpel is tilted to the right and the anterior carpel is tilted to the left at an angle of <b>45 degrees</b>. This oblique placement, combined with a swollen placenta bearing numerous ovules, is the unique diagnostic anatomical hallmark of Solanaceae.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: List six economically important plants of Family Solanaceae with their scientific names and uses.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <i>Solanum tuberosum</i> (Potato) - Staple carbohydrate food.<br/>2. <i>Solanum lycopersicum</i> (Tomato) - Edible vegetable rich in lycopene.<br/>3. <i>Solanum melongena</i> (Brinjal / Eggplant) - Edible fruit vegetable.<br/>4. <i>Capsicum annuum</i> (Chilli) - Pungent culinary spice.<br/>5. <i>Atropa belladonna</i> (Deadly Nightshade) - Source of alkaloid atropine (pupil dilator).<br/>6. <i>Withania somnifera</i> (Ashwagandha) - Ayurvedic nerve tonic and restorative medicine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain what Parthenocarpic fruits are and how they differ from False fruits.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Parthenocarpic Fruit:</b> Fruit that develops from the ovary <b>without fertilization</b>, resulting in seedless fruits (e.g., commercial Banana, seedless grapes); can be induced artificially by applying auxins and gibberellins.<br/>2. <b style="color: #FF9100;">False Fruit (Pseudocarp):</b> Fruit in which other floral parts (especially thalamus or pedicel) participate in fruit formation alongside the ovary (e.g., Apple, Pear, Strawberry, where fleshy edible part is the enlarged thalamus).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain the terms: (a) Epipetalous, (b) Persistent Calyx, (c) Syncarpous, with reference to Solanaceae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #FF9100;">Epipetalous:</b> Condition where stamen filaments are fused directly to the petals (corolla tube), characteristic of Solanaceae.<br/>(b) <b style="color: #FF9100;">Persistent Calyx:</b> Sepals do not wither or fall off after fertilization; they remain attached and enlarge with the developing fruit (e.g., green calyx on Brinjal, bladder around <i>Physalis</i>).<br/>(c) <b style="color: #FF9100;">Syncarpous:</b> Condition where two or more carpels of the gynoecium are fused together into a single composite pistil.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Describe the three patterns of Plant Life Cycles: Haplontic, Diplontic, and Haplodiplontic with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Haplontic:</b> Haploid gametophyte is dominant and free-living; diploid sporophyte is represented only by single-celled zygote undergoing zygotic meiosis (<i>Volvox</i>, <i>Spirogyra</i>).<br/>2. <b style="color: #FF9100;">Diplontic:</b> Diploid sporophyte is dominant, photosynthetic, and independent; gametophyte is reduced to single or few-celled gametes (all Gymnosperms, Angiosperms, <i>Fucus</i>).<br/>3. <b style="color: #FF9100;">Haplodiplontic:</b> Both multicellular haploid and diploid phases are present sequentially (Bryophytes, Pteridophytes, <i>Ectocarpus</i>, <i>Polysiphonia</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain why Cycas is called an Amphibian among Gymnosperms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Although <i>Cycas</i> is an advanced seed plant adapted to terrestrial conditions, its fertilization process preserves primitive aquatic ancestry: the microgametophyte produces <b>top-shaped multiciliated motile antherozoids</b> (swimming sperm) that must swim through archegonial chamber fluid to fertilize the egg cell.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Explain the morphology of a typical flower as a modified condensed shoot.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A flower is a determinate shoot with condensed internodes:<br/>1. Thalamus (receptacle) corresponds to the stem axis.<br/>2. Nodes are brought tightly together, lacking elongated internodes.<br/>3. Sepals, petals, stamens, and carpels represent modified floral leaves performing protective, attractant, microsporangiate, and megasporangiate reproductive functions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain the difference between Monocarpellary, Bicarpellary, and Multicarpellary gynoecium with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Monocarpellary:</b> Gynoecium with only one carpel (e.g., Pea, Fabaceae).<br/>2. <b style="color: #FF9100;">Bicarpellary:</b> Gynoecium with two carpels (e.g., Solanaceae, Brassicaceae).<br/>3. <b style="color: #FF9100;">Multicarpellary:</b> Gynoecium with three or more carpels (e.g., <i>Lilium</i>, China Rose).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the difference between Apocarpous and Syncarpous ovary with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Apocarpous:</b> Carpels are completely free and separate from one another (e.g., Lotus, Rose, <i>Michelia</i>).<br/>2. <b style="color: #FF9100;">Syncarpous:</b> Carpels are fused together into a single united compound ovary (e.g., Tomato, Mustard, China Rose).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the structure of an Antheridium and an Archegonium in Bryophytes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Antheridium:</b> Male sex organ; club-shaped or globose structure surrounded by a sterile jacket of cells, enclosing numerous androcytes that metamorphose into biflagellated antherozoids.<br/>2. <b style="color: #FF9100;">Archegonium:</b> Female sex organ; flask-shaped structure consisting of an elongated neck (with neck canal cells) and a swollen base called <b>Venter</b> (enclosing a ventral canal cell and a non-motile single egg cell).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: What is Circinate Vernation? In which plant group is it seen?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Circinate vernation is the coiled arrangement of young developing leaves (fronds) in which the leaf tip is curled inward like a watch spring to protect delicate apical meristems from mechanical damage. Characteristic of <b>Ferns (Pteridophytes)</b> and <i>Cycas</i> foliage.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain the terms: Actinomorphic, Zygomorphic, and Asymmetric flower with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Actinomorphic (&oplus;):</b> Radial symmetry; can be divided into two equal halves in any radial plane passing through center (e.g., Mustard, Datura, Chilli).<br/>2. <b style="color: #FF9100;">Zygomorphic (%):</b> Bilateral symmetry; can be divided into equal halves in only one vertical plane (e.g., Pea, Gulmohur, Bean).<br/>3. <b style="color: #FF9100;">Asymmetric:</b> Irregular; cannot be divided into two equal halves in any plane (e.g., <i>Canna</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain the economic importance of Brown Algae (Phaeophyceae).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Algin Hydrocolloid:</b> Extracted from giant kelps (<i>Macrocystis</i>, <i>Laminaria</i>); used as an emulsifier and thickener in ice creams, paints, dental impressions, and flame-resistant fabrics.<br/>2. <b style="color: #FF9100;">Food &amp; Iodine:</b> <i>Laminaria</i> (Kombu) and <i>Sargassum</i> are consumed as mineral-rich food in East Asia; rich commercial source of Iodine and Potassium.<br/>3. <b style="color: #FF9100;">Livestock Feed &amp; Fertilizer:</b> Used as agricultural manure rich in trace minerals.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain the morphological structure of a typical Foliage Leaf.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Leaf Base (Hypopodium):</b> Attachment point to the stem; may bear two lateral scale-like outgrowths called <b>Stipules</b>.<br/>2. <b style="color: #FF9100;">Petiole (Mesopodium):</b> Stalk that elevates lamina into optimal sunlight and allows flutter in breeze for cooling and fresh CO<sub>2</sub> exchange.<br/>3. <b style="color: #FF9100;">Lamina (Epipodium):</b> Broad photosynthetic blade traversed by midrib and veins providing structural turgor and xylem/phloem transport.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain the structure of Inflorescence in Asteraceae (Head / Capitulum).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The capitulum is the most advanced racemose inflorescence: the peduncle flattens into a broad receptacle bearing numerous small, sessile florets surrounded by an involucre of protective bracts. Contains central tubular <b>Disc Florets</b> (bisexual, actinomorphic) and peripheral ligulate <b>Ray Florets</b> (female or neuter, zygomorphic; e.g., Sunflower).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain the term 'Dioecious' and 'Monoecious' in Gymnosperms with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Monoecious:</b> Male and female strobili (cones) are borne on the same individual tree (e.g., <i>Pinus</i>).<br/>2. <b style="color: #FF9100;">Dioecious:</b> Male cones and female megasporophylls are borne on separate individual trees (e.g., <i>Cycas</i>, <i>Ginkgo</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain the significance of Double Fertilization in Angiosperms and contrast with Gymnosperms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In Angiosperms, one sperm nucleus fuses with the egg nucleus to form diploid zygote (2n, Syngamy), while the second sperm fuses with two polar nuclei to form triploid primary endosperm nucleus (3n, Triple Fusion). This ensures nutritive endosperm forms <b>only after successful fertilization</b>.<br/>In Gymnosperms, endosperm is haploid (n) and forms <b>before fertilization</b> directly from the female gametophyte, wasting maternal metabolic energy if fertilization fails.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Describe the characteristics of Class Sphenopsida (Horsetails).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Represented by <i>Equisetum</i> (Horsetail):<br/>1. Sporophyte differentiated into creeping rhizome and upright articulated aerial shoots with distinct nodes and internodes.<br/>2. Stems are ribbed and heavily impregnated with <b>Silica</b>, giving a rough texture (used historically as scouring rushes to polish metal pots).<br/>3. Leaves are microphyllous, scale-like, forming a whorl at each node.<br/>4. Sporangia are borne on peltate appendages called sporangiophores clustered into terminal cones (strobili).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain why Bryophytes cannot grow to great heights.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. They completely lack specialized lignified vascular tissues (xylem tracheids/vessels) for long-distance vertical transport of water and mechanical support against gravity.<br/>2. They lack true roots, absorbing water only via delicate unicellular or multicellular rhizoids.<br/>3. Their gametophytic thalli rely on simple cell-to-cell diffusion and osmosis, limiting structural height to a few centimeters.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain the function of Endosperm in Monocot vs Dicot seeds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Monocot Seeds (Endospermic / Albuminous):</b> Endosperm persists throughout seed maturation as a massive triploid tissue storing starch and proteins to nourish the seedling upon germination (e.g., Maize, Wheat, Rice).<br/>2. <b style="color: #FF9100;">Dicot Seeds (Non-Endospermic / Exalbuminous):</b> Endosperm is completely digested and absorbed by developing cotyledons before seed dormancy; food reserves are stored directly inside the two fleshy cotyledons (e.g., Pea, Gram, Bean).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain the structure of a flower bud in Vexillary Aestivation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In Papilionaceous corolla (Fabaceae):<br/>1. <b style="color: #FF9100;">Standard (Vexillum):</b> Single, largest posterior petal overlapping two lateral petals.<br/>2. <b style="color: #FF9100;">Wings (Alae):</b> Two lateral paired petals overlapping the two anterior petals.<br/>3. <b style="color: #FF9100;">Keel (Carina):</b> Two smallest anterior petals fused together boat-wise to enclose stamens and pistil, ensuring specialized insect pollination.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: What is an Accrescent Calyx? Give two examples from Solanaceae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An accrescent calyx is a persistent calyx that does not fall off after fertilization but continues to grow and enlarge alongside the developing fruit, forming an inflated protective envelope around it. Examples: <i>Physalis</i> (Cape Gooseberry) and <i>Withania somnifera</i> (Ashwagandha).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain the differences between Simple, Aggregate, and Multiple fruits with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Simple Fruit:</b> Develops from a single monocarpellary or syncarpous ovary of a single flower (e.g., Mango, Tomato).<br/>2. <b style="color: #FF9100;">Aggregate Fruit (Etaerio):</b> Develops from a multicarpellary apocarpous gynoecium of a single flower (e.g., Strawberry, Raspberry).<br/>3. <b style="color: #FF9100;">Multiple / Composite Fruit:</b> Develops from an entire inflorescence where all flowers fuse together into a single false fruit (e.g., Pineapple, Jackfruit, Fig).
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.15), rgba(255, 111, 0, 0.15)); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Comprehensive Plant Kingdom Evolution, Life Cycle Patterns, Complete Solanaceae Monograph &amp; Master Synthesis Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss the General Characters and Classification of Algae into Chlorophyceae, Phaeophyceae, and Rhodophyceae in complete comparative detail.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Foundations:</b> Thalloid, avascular, chlorophyllous autotrophs. Classified primarily by photosynthetic pigments, nature of reserve food, flagellar apparatus, and cell wall chemistry.<br/><br/><b style="color: #FF9100;">2. Class-wise Comparative Matrix:</b><br/>&bull; <i>Chlorophyceae (Green Algae):</i> Pigments Chl a, b; starch stored in pyrenoids; cellulose/pectose wall; 2-8 equal apical whiplash flagella. Unicellular (<i>Chlamydomonas</i>), colonial (<i>Volvox</i>), filamentous (<i>Spirogyra</i>).<br/>&bull; <i>Phaeophyceae (Brown Algae):</i> Pigments Chl a, c, fucoxanthin; stored laminarin/mannitol; cell wall with algin; 2 unequal lateral heterokont flagella. Morphologically differentiated into holdfast, stipe, lamina; kelps reach 100 meters (<i>Laminaria</i>, <i>Fucus</i>).<br/>&bull; <i>Rhodophyceae (Red Algae):</i> Pigments Chl a, d, r-phycoerythrin; stored floridean starch; agar/carrageen wall; completely lack flagellated stages. Marine deep sea; <i>Polysiphonia</i>, <i>Gracilaria</i>.<br/><br/><b style="color: #FF9100;">3. Economic Importance:</b> Source of primary oceanic productivity, Agar-agar, Alginates, food supplements (<i>Chlorella</i>, <i>Porphyra</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Discuss the Bryophytes in exhaustive detail: Amphibious Nature, Alternation of Generations, Comparison of Hepaticopsida and Bryopsida, and Ecological Role.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Amphibious Nature:</b> Land dwellers requiring external water for flagellated antherozoids to swim to archegonial neck for syngamy.<br/><br/><b style="color: #FF9100;">2. Alternation of Generations:</b><br/>&bull; <i>Gametophyte (n):</i> Dominant, independent, green photosynthetic generation.<br/>&bull; <i>Sporophyte (2n):</i> Morphologically differentiated into Foot, Seta, and Capsule; remains semi-parasitic on the gametophyte.<br/><br/><b style="color: #FF9100;">3. Class Comparison:</b><br/>&bull; <i>Hepaticopsida (Liverworts):</i> Dorsiventral thallus; asexual gemmae cups; direct spore germination (<i>Marchantia</i>).<br/>&bull; <i>Bryopsida (Mosses):</i> Filamentous protonema stage giving rise to leafy gametophore; multicellular rhizoids; peristome teeth in capsule for regulated spore dispersal (<i>Funaria</i>, <i>Sphagnum</i>).<br/><br/><b style="color: #FF9100;">4. Ecological Role:</b> Primary colonizers on bare rocks; soil builders; peat formation; prevent soil erosion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Explain the Pteridophytes: Evolutionary Advances, Sporophytic Architecture, Heterospory, and Seed Habit Precursor in Selaginella.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Evolutionary Advances:</b> First terrestrial tracheophytes possessing lignified xylem tracheids and phloem sieve cells; dominant generation shifted to diploid sporophyte (2n).<br/><br/><b style="color: #FF9100;">2. Sporophyte Architecture:</b> True roots, stems, and leaves (microphylls in <i>Selaginella</i>; macrophylls/fronds in ferns). Sporangia grouped into sori on sporophylls or compact strobili/cones.<br/><br/><b style="color: #FF9100;">3. Heterospory:</b> Production of two spore types: microspores &rarr; male gametophyte; megaspores &rarr; female gametophyte.<br/><br/><b style="color: #FF9100;">4. Seed Habit Evolution in Selaginella:</b><br/>(a) Extreme heterospory with reduction in megaspore number (often only 1 megaspore per sporangium).<br/>(b) Complete retention of megaspore inside megasporangium on parent plant.<br/>(c) Development of female gametophyte and early embryo within the parent sporophyte.<br/>(Missing step: Lack of protective integuments and seed dormancy mechanism).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss the Gymnosperms in complete depth: Naked Seeded Nature, Xerophytic Features, Reproduction, and Life Cycles of Cycas and Pinus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Naked Seed Architecture:</b> Ovules lack an enclosing ovary wall; seeds develop freely exposed on megasporophyll surfaces.<br/><br/><b style="color: #FF9100;">2. Xerophytic Specializations:</b> Needle-like leaves, thick cuticles, deeply sunken stomata, transfusion tissue.<br/><br/><b style="color: #FF9100;">3. Reproduction:</b> Heterosporous, forming male microsporangiate and female megasporangiate cones.<br/>&bull; Microspores develop into winged pollen grains.<br/>&bull; Megaspore mother cell undergoes meiosis inside nucellus; one functional megaspore forms multicellular female gametophyte (endosperm, n) bearing archegonia.<br/>&bull; Anemophilous pollination followed by siphonogamy (pollen tube fertilization).<br/><br/><b style="color: #FF9100;">4. Cycas vs Pinus:</b> <i>Cycas</i> (dioecious, coralloid roots, unbranched stem, motile sperm); <i>Pinus</i> (monoecious, mycorrhizal roots, branched stem, non-motile sperm).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Explain the Morphology of the Root System: Types of Roots, Longitudinal Zonation, and Root Functions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Root Types:</b> Taproot (from radicle, in Dicots), Fibrous Root (cluster of thin roots replacing radicle, in Monocots), Adventitious Roots (arising from non-radicle parts like stems/leaves, in Banyan, Grass).<br/><br/><b style="color: #FF9100;">2. Longitudinal Zonation:</b><br/>&bull; <i>Root Cap:</i> Multicellular protective calyptra secreting lubricating mucilage; senses gravity.<br/>&bull; <i>Meristematic Zone:</i> High mitotic activity; small isodiametric thin-walled cells with dense cytoplasm.<br/>&bull; <i>Elongation Zone:</i> Vacuolation and cell elongation driving root tip through soil.<br/>&bull; <i>Maturation Zone:</i> Cell differentiation into vascular tissues and epidermal outgrowths (root hairs) for absorption.<br/><br/><b style="color: #FF9100;">3. Functions:</b> Anchorage, water and mineral absorption, hormone synthesis (auxins/cytokinins).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss the Morphology and Classification of Inflorescence: Racemose vs Cymose Types with complete sub-classes and diagrams.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Definition:</b> Mode of development and arrangement of flowers on the floral peduncle.<br/><br/><b style="color: #FF9100;">2. Racemose Inflorescence (Indeterminate, Acropetal):</b><br/>&bull; <i>Raceme:</i> Pedicellate flowers on elongated axis (Mustard, Radish).<br/>&bull; <i>Spike:</i> Sessile flowers on elongated axis (<i>Achyranthes</i>).<br/>&bull; <i>Catkin:</i> Pendulous unisexual spike (Mulberry, Oak).<br/>&bull; <i>Spadix:</i> Fleshy spike enclosed by colorful bract called Spathe (Banana, Colocasia).<br/>&bull; <i>Corymb:</i> Pedicels unequal, bringing all flowers to same level (Candytuft).<br/>&bull; <i>Umbel:</i> All pedicellate flowers arise from a single point surrounded by involucre (Coriander, Onion).<br/>&bull; <i>Capitulum (Head):</i> Flattened receptacle bearing disc and ray florets (Sunflower).<br/><br/><b style="color: #FF9100;">3. Cymose Inflorescence (Determinate, Basipetal):</b> Monochasial (scorpioid/helicoid cyme), Dichasial cyme (<i>Dianthus</i>), Polychasial cyme (<i>Calotropis</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Detail the Structure of a Typical Flower: Whorls, Symmetry, Insertion of Floral Leaves (Hypogyny, Perigyny, Epigyny), and Sexuality.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Morphology:</b> Modified determinate shoot bearing four concentric whorls on swollen thalamus:<br/>&bull; <i>Calyx:</i> Outermost protective whorl of sepals (polysepalous or gamosepalous).<br/>&bull; <i>Corolla:</i> Attractant whorl of petals (polypetalous or gamopetalous).<br/>&bull; <i>Androecium:</i> Male whorl of stamens (anther + filament).<br/>&bull; <i>Gynoecium:</i> Central female whorl of carpels (stigma + style + ovary).<br/><br/><b style="color: #FF9100;">2. Symmetry:</b> Actinomorphic (radial), Zygomorphic (bilateral), Asymmetric (irregular).<br/><br/><b style="color: #FF9100;">3. Floral Insertion:</b><br/>&bull; <i>Hypogynous:</i> Ovary superior (Mustard, Brinjal).<br/>&bull; <i>Perigynous:</i> Ovary half-inferior (Rose, Peach).<br/>&bull; <i>Epigynous:</i> Ovary inferior (Guava, Cucumber).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Discuss the Architectural Types of Aestivation in Angiosperm Flowers with detailed descriptions and floral diagrams.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Valvate:</b> Adjacent sepals/petals meet margin-to-margin without overlapping (<i>Calotropis</i>, Brassica calyx).<br/><br/><b style="color: #FF9100;">2. Twisted (Contorted):</b> Regular clockwise or counter-clockwise overlap where one margin is internal and opposite margin external (China Rose, Lady's Finger, Cotton).<br/><br/><b style="color: #FF9100;">3. Imbricate:</b> Irregular overlapping where one member is completely external, one completely internal, and remaining three overlap on one margin (<i>Cassia</i>, Gulmohur).<br/><br/><b style="color: #FF9100;">4. Vexillary (Papilionaceous):</b> Characteristic of Fabaceae: large posterior Standard (Vexillum) overlaps two lateral Wings (Alae), which in turn overlap two fused anterior Keels (Carina).<br/><br/><b style="color: #FF9100;">5. Quincuncial:</b> Five petals with two completely external, two completely internal, and one overlapping at one margin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Discuss the Types of Placentation in the Angiosperm Ovary: Anatomical Basis, Locules, and Diagnostic Examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Definition:</b> Arrangement and distribution of ovule-bearing placentae on the inner ovary wall.<br/><br/><b style="color: #FF9100;">2. Placentation Classes:</b><br/>&bull; <i>Marginal:</i> Monocarpellary unilocular ovary; placenta along ventral suture (Pea, Gram).<br/>&bull; <i>Axile:</i> Multicarpellary syncarpous multilocular ovary; septa fuse at central axis (Solanaceae, Tomato, Lemon).<br/>&bull; <i>Parietal:</i> Syncarpous unilocular ovary; ovules on inner peripheral wall; false septum (replum) may form (Mustard, Argemone).<br/>&bull; <i>Free Central:</i> Ovules on central axis in unilocular ovary lacking septa (Dianthus, Primula).<br/>&bull; <i>Basal:</i> Single ovule attached at base of unilocular ovary (Sunflower, Marigold).<br/>&bull; <i>Superficial:</i> Multicarpellary multilocular ovary; ovules borne all over inner septal walls (Water Lily / <i>Nymphaea</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Discuss the Morphology and Classification of Fruits: True vs False, Simple Dry and Fleshy Fruits, Aggregate, and Composite Fruits.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Definitions:</b> True fruit (from ovary only); False fruit (thalamus involved, Apple); Parthenocarpic (seedless, unfertilized, Banana).<br/><br/><b style="color: #FF9100;">2. Simple Fleshy Fruits:</b><br/>&bull; <i>Drupe:</i> Stony endocarp (Mango, Coconut).<br/>&bull; <i>Berry:</i> Fleshy pericarp throughout (Tomato, Brinjal, Grape).<br/>&bull; <i>Pome:</i> Thalamus forms fleshy edible part (Apple, Pear).<br/>&bull; <i>Hesperidium:</i> Thick rind with glandular oil pockets; juicy endocarp hairs (Orange, Lemon).<br/>&bull; <i>Pepo:</i> Hard outer rind; parietal placentation (Cucumber, Melon).<br/><br/><b style="color: #FF9100;">3. Aggregate &amp; Multiple Fruits:</b> Etaerio of achenes (Strawberry), Etaerio of berries (Custard apple); Sorosis (Mulberry, Pineapple), Syconus (Fig / <i>Ficus</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Compare the Morphological and Anatomical Architecture of Dicotyledonous vs Monocotyledonous Seeds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Seed Coat &amp; Enclosure:</b> Dicot seed coat consists of distinct outer Testa and inner Tegmen with free pericarp; Monocot caryopsis has seed coat fused completely with fruit wall.<br/><br/><b style="color: #FF9100;">2. Cotyledon Number &amp; Structure:</b> Dicots have two large, fleshy food-storing cotyledons; Monocots have a single reduced, shield-shaped cotyledon called the <b>Scutellum</b>.<br/><br/><b style="color: #FF9100;">3. Endosperm Distribution:</b> Dicots are typically non-endospermic (food stored in cotyledons; Pea, Gram); Monocots are typically endospermic with large triploid starch reserves enclosed by an <b>Aleurone protein layer</b>.<br/><br/><b style="color: #FF9100;">4. Protective Sheaths:</b> Monocots possess specialized embryonic sheaths: <b>Coleoptile</b> covering plumule and <b>Coleorhiza</b> covering radicle (absent in Dicots).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Provide an Exhaustive Technical Monograph of Family Solanaceae: Vegetative, Floral, Fruit, Floral Formula, Diagram, and Economic Plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Classification:</b> Division Magnoliophyta, Class Magnoliopsida, Order Solanales, Family Solanaceae.<br/><br/><b style="color: #FF9100;">2. Diagnostic Vegetative Features:</b> Herbaceous stems (underground tubers in potato); alternate exstipulate simple leaves with reticulate venation.<br/><br/><b style="color: #FF9100;">3. Diagnostic Floral Characters:</b> Inflorescence solitary or cymose; flowers bisexual, actinomorphic, pentamerous, hypogynous.<br/>&bull; Calyx: 5, gamosepalous, valvate, persistent and accrescent.<br/>&bull; Corolla: 5, gamopetalous, rotate/infundibuliform, valvate.<br/>&bull; Androecium: 5, polyandrous, epipetalous, alternating with petals.<br/>&bull; Gynoecium: Bicarpellary syncarpous, superior ovary, <b>oblique carpels at 45&deg;</b>, <b>swollen placenta with axile placentation</b>.<br/><br/><b style="color: #FF9100;">4. Floral Formula:</b> &oplus; &compfn; K<sub>(5)</sub> C&#8255;<sub>(5)</sub> A<sub>5</sub> <span style="text-decoration: underline;">G</span><sub>(2)</sub>.<br/><br/><b style="color: #FF9100;">5. Economic Spectrum:</b> Food (Potato, Tomato, Brinjal); Spice (Chilli); Medicine (Belladonna, Ashwagandha); Fumigatory (Tobacco); Ornamental (Petunia).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain the Phenomenon of Alternation of Generations in Land Plants and Trace its Evolutionary Progression from Algae to Angiosperms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Concept:</b> Regular cyclic alternation between haploid sexual gametophyte (n) and diploid asexual sporophyte (2n).<br/><br/><b style="color: #FF9100;">2. Evolutionary Progression:</b><br/>&bull; <i>Algae:</i> Mostly haplontic; sporophyte restricted to single-celled zygote.<br/>&bull; <i>Bryophytes:</i> Haplodiplontic; gametophyte dominant, photosynthetic, free-living; sporophyte simple, parasitic on gametophyte.<br/>&bull; <i>Pteridophytes:</i> Haplodiplontic; sporophyte becomes dominant, vascular, independent; gametophyte reduced to small, vulnerable prothallus.<br/>&bull; <i>Gymnosperms &amp; Angiosperms:</i> Diplontic; sporophyte is massive, complex tree; gametophyte reduced to microscopic parasitic structures (pollen grain = 2-3 cells; embryo sac = 7 cells / 8 nuclei).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Discuss the Ecological Adaptations of Hydrophytes, Xerophytes, and Halophytes in Kingdom Plantae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Hydrophytes (Aquatic Plants):</b> Poorly developed roots, abundant aerenchyma for buoyancy and gas exchange, reduced vascular tissues, thin cuticle, dissected leaves (e.g., <i>Hydrilla</i>, <i>Eichhornia</i>).<br/><br/><b style="color: #FF9100;">2. Xerophytes (Desert Plants):</b> Extensive deep taproot systems, sunken stomata, thick waxy cuticle, succulent water-storing stems/leaves, conversion of leaves into protective spines (e.g., <i>Opuntia</i>, <i>Aloe</i>, <i>Pinus</i>).<br/><br/><b style="color: #FF9100;">3. Halophytes (Saline Mangrove Plants):</b> High internal osmotic pressure, succulent foliage, viviparous seed germination, and negatively geotropic respiratory roots called <b>Pneumatophores</b> with lenticels for oxygen uptake in waterlogged mud (e.g., <i>Rhizophora</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Discuss the Anatomy and Life History of Pinus: Stem, Needle, Male Cone, Female Cone, Pollination, and Seed Dispersal.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Vegetative Morphology:</b> Excurrent coniferous tree with long shoots (unlimited growth) and dwarf shoots (spurs bearing 1-5 needle-like foliage leaves). Roots form ectomycorrhiza.<br/><br/><b style="color: #FF9100;">2. Cones:</b> Monoecious.<br/>&bull; <i>Male Cones:</i> Clusters of microsporophylls bearing two microsporangia; pollen grains have two air bladders (wings).<br/>&bull; <i>Female Cones:</i> Large, woody strobili bearing bract scales and ovuliferous scales, each carrying two naked ovules.<br/><br/><b style="color: #FF9100;">3. Life Cycle:</b> Anemophilous pollination; 1-year dormancy before fertilization; siphonogamy; polyembryony common; winged seeds dispersed by wind.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Discuss the Anatomy and Life History of Cycas: Coralloid Roots, Foliage, Male Cone, Megasporophylls, and Primitive Flagellated Sperm.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Morphology:</b> Palm-like pachycaul gymnosperm with unbranched columnar stem and crown of pinnately compound foliage leaves with circinate vernation. Apogeotropic coralloid roots harbor nitrogen-fixing <i>Nostoc</i>.<br/><br/><b style="color: #FF9100;">2. Cones:</b> Strictly dioecious.<br/>&bull; <i>Male Cone:</i> Massive, erect apical cone composed of microsporophylls bearing sporangial sori.<br/>&bull; <i>Female Structure:</i> No compact cone; loose whorls of brown, tomentose megasporophylls bearing 2-12 large, naked, orange ovules.<br/><br/><b style="color: #FF9100;">3. Primitive Fertilization:</b> Produces world's largest plant ovules and massive top-shaped multi-ciliated motile spermatozoids that swim in archegonial fluid (zooidosiphonogamy).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the Origin of the Seed Habit in Vascular Cryptogams and its Full Realization in Spermatophytes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Pre-requisites of Seed Habit:</b><br/>(1) Production of two distinct spore sizes (Heterospory).<br/>(2) Drastic reduction of megaspore number to one per megasporangium.<br/>(3) Endosporic development and nutritional dependence of female gametophyte.<br/>(4) Permanent retention of megaspore inside megasporangium on parent sporophyte.<br/>(5) Evolution of protective integuments around megasporangium (ovule).<br/>(6) Evolution of pollen tube (siphonogamy) eliminating water requirement.<br/><br/><b style="color: #FF9100;">2. Transitional Cryptogams:</b> Realized partially in <i>Selaginella</i>; completed fully in Gymnosperms with ovule integumentation and seed dormancy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the Economic Importance of Gymnosperms in timber, paper, resins, essential oils, and food.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Timber &amp; Pulp:</b> Softwood from pines (<i>Pinus roxburghii</i>), deodar (<i>Cedrus deodara</i>), and firs used for construction, furniture, railway sleepers, and wood pulp for newsprint.<br/><b style="color: #FF9100;">2. Resins &amp; Turpentine:</b> Resin tapped from <i>Pinus</i> yields <b>Turpentine oil</b> and Rosin used in varnishes, paints, and sealing wax.<br/><b style="color: #FF9100;">3. Edible Seeds:</b> Seeds of <i>Pinus gerardiana</i> (Chilgoza) are rich in edible fats and proteins.<br/><b style="color: #FF9100;">4. Pharmaceuticals:</b> Ephedrine extracted from <i>Ephedra</i> treats asthma and respiratory congestion; Taxol from <i>Taxus brevifolia</i> is a major anti-cancer drug.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the Taxonomic and Practical Significance of the Herbarium Method in Modern Botanical Research.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Reference Library:</b> Provides immediate access to millions of verified plant specimens from worldwide locations, allowing taxonomic comparisons across centuries.<br/><b style="color: #FF9100;">2. Type Specimens:</b> Houses nomenclatural holotypes and isotypes required to validate botanical names according to ICBN priority rules.<br/><b style="color: #FF9100;">3. Floristic &amp; Ecological Mapping:</b> Historical labels record locality, elevation, blooming dates, and soil types, documenting shifts in plant distribution caused by climate change, habitat fragmentation, and pollution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an Exhaustive Master Synthesis Matrix correlating Plant Groups, Alternation of Generations, Floral Morphology, and Family Solanaceae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Plant Groups:</b> Thallophyta (Algae: Chlorophyceae, Phaeophyceae, Rhodophyceae) &rarr; Embryophyta (Bryophytes: non-vascular, dominant gametophyte) &rarr; Tracheophyta (Pteridophytes: vascular, dominant sporophyte, heterospory) &rarr; Spermatophyta (Gymnosperms: naked seeds, siphonogamy; Angiosperms: flowers, fruits, double fertilization).<br/><br/><b style="color: #FF9100;">2. Life Cycles:</b> Haplontic (zygotic meiosis) &rarr; Haplodiplontic (alternating multicellular phases) &rarr; Diplontic (gametic meiosis, extreme gametophyte reduction).<br/><br/><b style="color: #FF9100;">3. Floral Architecture:</b> Racemose/Cymose inflorescences; Aestivations (Valvate, Twisted, Imbricate, Vexillary); Placentations (Marginal, Axile, Parietal, Free central, Basal).<br/><br/><b style="color: #FF9100;">4. Solanaceae Synthesis:</b> &oplus; &compfn; K<sub>(5)</sub> C&#8255;<sub>(5)</sub> A<sub>5</sub> <span style="text-decoration: underline;">G</span><sub>(2)</sub>; persistent accrescent calyx, epipetalous stamens, oblique ovary, swollen placenta with axile placentation; vital food, spice, and medicinal crops.
    </div>
  </div>

</div>
`;

export const c11Bot2Mcqs = [
  {
    "id": "c11-bot-2-mcq-1",
    "question": "Pyrenoids in green algae (Chlorophyceae) are located in the chloroplasts and consist of:",
    "options": [
      "A):   Lipid core surrounded by proteins",
      "B):   Protein core surrounded by starch sheath",
      "C):   Pure nucleic acid",
      "D):   Cellulose core"
    ],
    "correctAnswer": "b",
    "explanation": "Pyrenoids contain a central proteinaceous core surrounded by a sheath of starch plates."
  },
  {
    "id": "c11-bot-2-mcq-2",
    "question": "The brown color of Phaeophyceae is due to the predominance of which xanthophyll pigment?",
    "options": [
      "A):   r-Phycoerythrin",
      "B):   Fucoxanthin",
      "C):   Lycopene",
      "D):   Anthocyanin"
    ],
    "correctAnswer": "b",
    "explanation": "Fucoxanthin gives Phaeophyceae their characteristic olive-green to dark brown coloration."
  },
  {
    "id": "c11-bot-2-mcq-3",
    "question": "The stored food materials in Brown Algae (Phaeophyceae) are:",
    "options": [
      "A):   Starch and sucrose",
      "B):   Laminarin and Mannitol",
      "C):   Floridean starch",
      "D):   Glycogen"
    ],
    "correctAnswer": "b",
    "explanation": "Brown algae store complex carbohydrates in the form of Laminarin and the sugar alcohol Mannitol."
  },
  {
    "id": "c11-bot-2-mcq-4",
    "question": "Which class of algae completely lacks any flagellated motile cells at all stages of life?",
    "options": [
      "A):   Chlorophyceae",
      "B):   Phaeophyceae",
      "C):   Rhodophyceae",
      "D):   Euglenophyceae"
    ],
    "correctAnswer": "c",
    "explanation": "Red algae (Rhodophyceae) have no flagellated reproductive cells; both spores and gametes are non-motile."
  },
  {
    "id": "c11-bot-2-mcq-5",
    "question": "Floridean starch has a chemical structure very similar to:",
    "options": [
      "A):   Cellulose and pectin",
      "B):   Amylopectin and Glycogen",
      "C):   Chitin and peptidoglycan",
      "D):   Laminarin"
    ],
    "correctAnswer": "b",
    "explanation": "Floridean starch in red algae is branched and structurally identical to amylopectin and glycogen."
  },
  {
    "id": "c11-bot-2-mcq-6",
    "question": "Bryophytes are called the 'Amphibians of the plant kingdom' because:",
    "options": [
      "A):   They live equally in soil and sea water",
      "B):   They require a film of water for flagellated antherozoids to reach the archegonium",
      "C):   They metamorphose like frogs",
      "D):   They possess both lungs and gills"
    ],
    "correctAnswer": "b",
    "explanation": "They inhabit damp land, but an external film of water is strictly required for the male gametes to swim to the archegonium."
  },
  {
    "id": "c11-bot-2-mcq-7",
    "question": "In Bryophytes, the sporophyte generation is:",
    "options": [
      "A):   Dominant and independent",
      "B):   Attached to and nutritionally dependent on the gametophyte",
      "C):   Free-swimming in water",
      "D):   Completely absent"
    ],
    "correctAnswer": "b",
    "explanation": "The bryophyte sporophyte (foot, seta, capsule) is semi-parasitic on the photosynthetic haploid gametophyte."
  },
  {
    "id": "c11-bot-2-mcq-8",
    "question": "Gemmae are asexual multicellular green reproductive buds produced in:",
    "options": [
      "A):   Funaria",
      "B):   Marchantia",
      "C):   Selaginella",
      "D):   Cycas"
    ],
    "correctAnswer": "b",
    "explanation": "In liverworts like Marchantia, gemmae develop inside specialized dorsal gemma cups."
  },
  {
    "id": "c11-bot-2-mcq-9",
    "question": "Peat moss used for fuel and packaging living plants is:",
    "options": [
      "A):   Polytrichum",
      "B):   Sphagnum",
      "C):   Marchantia",
      "D):   Riccia"
    ],
    "correctAnswer": "b",
    "explanation": "Sphagnum has high water-holding capacity and slowly fossilizes into peat, used as fuel and garden mulch."
  },
  {
    "id": "c11-bot-2-mcq-10",
    "question": "The first terrestrial plants to possess true vascular tissues (xylem and phloem) are:",
    "options": [
      "A):   Algae",
      "B):   Bryophytes",
      "C):   Pteridophytes",
      "D):   Fungi"
    ],
    "correctAnswer": "c",
    "explanation": "Pteridophytes are the evolutionary pioneers of vascular tissue (tracheids in xylem, sieve cells in phloem)."
  },
  {
    "id": "c11-bot-2-mcq-11",
    "question": "In Pteridophytes, the heart-shaped, multicellular, free-living thalloid gametophyte is called the:",
    "options": [
      "A):   Protonema",
      "B):   Prothallus",
      "C):   Carpel",
      "D):   Strobilus"
    ],
    "correctAnswer": "b",
    "explanation": "Fern spores germinate to form a small, photosynthetic, free-living gametophyte known as the Prothallus."
  },
  {
    "id": "c11-bot-2-mcq-12",
    "question": "Which of the following Pteridophytes exhibits Heterospory?",
    "options": [
      "A):   Dryopteris",
      "B):   Pteris",
      "C):   Selaginella",
      "D):   Equisetum"
    ],
    "correctAnswer": "c",
    "explanation": "Selaginella and Salvinia produce distinct microspores and megaspores (heterospory), leading toward the seed habit."
  },
  {
    "id": "c11-bot-2-mcq-13",
    "question": "Coralloid roots harboring nitrogen-fixing Cyanobacteria (Nostoc) are found in:",
    "options": [
      "A):   Pinus",
      "B):   Cycas",
      "C):   Ginkgo",
      "D):   Sequoia"
    ],
    "correctAnswer": "b",
    "explanation": "Cycas forms apogeotropic coralloid roots with an algal zone containing symbiotic Nostoc and Anabaena."
  },
  {
    "id": "c11-bot-2-mcq-14",
    "question": "In Gymnosperms, the ovules are described as 'Naked' because:",
    "options": [
      "A):   They have no integument",
      "B):   They are not enclosed inside an ovary wall",
      "C):   They have no micropyle",
      "D):   They develop in the soil"
    ],
    "correctAnswer": "b",
    "explanation": "Gymnosperm ovules sit directly exposed on megasporophyll surfaces, with no enclosing ovary wall."
  },
  {
    "id": "c11-bot-2-mcq-15",
    "question": "Root hairs that absorb water and minerals arise from which anatomical root zone?",
    "options": [
      "A):   Root cap",
      "B):   Region of meristematic activity",
      "C):   Region of elongation",
      "D):   Region of maturation"
    ],
    "correctAnswer": "d",
    "explanation": "Root hairs are fine, delicate unicellular epidermal outgrowths arising exclusively from the Region of Maturation."
  },
  {
    "id": "c11-bot-2-mcq-16",
    "question": "In a Racemose inflorescence, the flowers are arranged in:",
    "options": [
      "A):   Basipetal succession",
      "B):   Acropetal succession",
      "C):   Centrifugal succession",
      "D):   Whorled arrangement only"
    ],
    "correctAnswer": "b",
    "explanation": "In racemose inflorescences, younger flowers arise toward the apex and older flowers remain at the base (acropetal)."
  },
  {
    "id": "c11-bot-2-mcq-17",
    "question": "The type of aestivation where the largest posterior petal overlaps two lateral wings which overlap two anterior keels is:",
    "options": [
      "A):   Valvate",
      "B):   Twisted",
      "C):   Imbricate",
      "D):   Vexillary (Papilionaceous)"
    ],
    "correctAnswer": "d",
    "explanation": "Vexillary aestivation (1 standard + 2 wings + 2 keels) is characteristic of the Pea family (Fabaceae)."
  },
  {
    "id": "c11-bot-2-mcq-18",
    "question": "In Tomato and family Solanaceae, the type of placentation is:",
    "options": [
      "A):   Marginal",
      "B):   Parietal",
      "C):   Axile",
      "D):   Basal"
    ],
    "correctAnswer": "c",
    "explanation": "Solanaceae exhibits axile placentation with multilocular ovaries and ovules attached to a swollen central placenta."
  },
  {
    "id": "c11-bot-2-mcq-19",
    "question": "A flower with an Inferior Ovary where other floral whorls arise above the ovary is termed:",
    "options": [
      "A):   Hypogynous",
      "B):   Perigynous",
      "C):   Epigynous",
      "D):   Gynandrous"
    ],
    "correctAnswer": "c",
    "explanation": "In epigynous flowers (e.g., Guava, Cucumber, ray florets of Sunflower), the ovary is inferior."
  },
  {
    "id": "c11-bot-2-mcq-20",
    "question": "The edible fleshy part of a Mango fruit is the:",
    "options": [
      "A):   Epicarp",
      "B):   Mesocarp",
      "C):   Endocarp",
      "D):   Thalamus"
    ],
    "correctAnswer": "b",
    "explanation": "In Mango (drupe), the thin skin is epicarp, the stony seed coat is endocarp, and the edible juicy pulp is the mesocarp."
  },
  {
    "id": "c11-bot-2-mcq-21",
    "question": "In a monocot maize grain, the single shield-shaped cotyledon is called the:",
    "options": [
      "A):   Coleoptile",
      "B):   Coleorhiza",
      "C):   Scutellum",
      "D):   Aleurone layer"
    ],
    "correctAnswer": "c",
    "explanation": "The solitary, reduced, shield-like cotyledon of monocot grass seeds is known as the Scutellum."
  },
  {
    "id": "c11-bot-2-mcq-22",
    "question": "The protective sheath enclosing the plumule in a monocot seed is the:",
    "options": [
      "A):   Coleorhiza",
      "B):   Coleoptile",
      "C):   Testa",
      "D):   Tegmen"
    ],
    "correctAnswer": "b",
    "explanation": "Coleoptile encloses the young plumule/shoot tip; Coleorhiza encloses the radicle/root tip."
  },
  {
    "id": "c11-bot-2-mcq-23",
    "question": "In Family Solanaceae, the stamens are attached directly to the petals, a condition known as:",
    "options": [
      "A):   Episepalous",
      "B):   Epipetalous",
      "C):   Gynostegium",
      "D):   Monadelphous"
    ],
    "correctAnswer": "b",
    "explanation": "Epipetalous stamens have their filaments fused to the inner surface of the corolla tube."
  },
  {
    "id": "c11-bot-2-mcq-24",
    "question": "A unique diagnostic anatomical feature of the gynoecium in Family Solanaceae is:",
    "options": [
      "A):   Basal placentation with one ovule",
      "B):   Carpels placed obliquely at 45&deg; with swollen axile placenta",
      "C):   Parietal placentation with replum",
      "D):   Apocarpous ovaries"
    ],
    "correctAnswer": "b",
    "explanation": "Solanaceae ovaries have bicarpellary syncarpous pistils placed obliquely with a swollen placenta bearing numerous ovules."
  },
  {
    "id": "c11-bot-2-mcq-25",
    "question": "Which of the following medicinal plants belongs to Family Solanaceae?",
    "options": [
      "A):   Aloe vera",
      "B):   Withania somnifera (Ashwagandha)",
      "C):   Asparagus",
      "D):   Colchicum autumnale"
    ],
    "correctAnswer": "b",
    "explanation": "Withania somnifera (Ashwagandha) and Atropa belladonna are premier medicinal plants of Family Solanaceae."
  }
];
