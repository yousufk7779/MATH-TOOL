// Class 11 Botany Chapter 2 - Kingdom Plantae
// High-Level Full Reference Book Content (PW / Vedantu / RD Sharma / Unacademy Standard)

export const c11Bot2HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(255, 145, 0, 0.05); border: 1.5px solid #FF9100; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF9100; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: #FF9100; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Chapter 2: Kingdom Plantae</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>1. Kingdom Plantae:</b> Eukaryotic multicellular autotrophic photosynthetic organisms possessing cellulosic cell walls and plastids.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>2. Algae:</b> Simple, thalloid, avascular, chlorophyll-bearing autotrophic aquatic organisms (Chlorophyceae, Phaeophyceae, Rhodophyceae).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>3. Bryophyta:</b> Non-vascular land plants termed 'Amphibians of Plant Kingdom' dependent on water for fertilization (Liverworts & Mosses).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>4. Pteridophyta:</b> First terrestrial vascular cryptogams possessing xylem and phloem without seed formation (Ferns & Horsetails).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>5. Gymnosperms:</b> Naked-seeded vascular plants in which ovules remain exposed on megasporophylls without ovary walls (Cycas & Pinus).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>6. Heterospory:</b> Production of two distinct types of spores (smaller microspores and larger megaspores), a vital precursor to seed habit.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>7. Tap Root System:</b> Root system originating directly from elongation of embryonic radicle, producing primary, secondary, and tertiary roots (Dicots).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>8. Fibrous Root System:</b> Cluster of thin roots originating from base of stem replacing short-lived radicle (Monocots).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>9. Inflorescence:</b> The arrangement of flowers on the specialized floral axis (Peduncle), classified into Racemose and Cymose.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>10. Racemose Inflorescence:</b> Main peduncle axis continues indefinite growth; flowers borne in acropetal succession (older at base).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>11. Cymose Inflorescence:</b> Main peduncle axis terminates in a flower exhibiting limited growth; flowers borne in basipetal succession.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>12. Actinomorphic Flower:</b> Flower exhibiting radial symmetry divisible into equal halves along any vertical radial plane (e.g. Mustard, Chilli).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>13. Zygomorphic Flower:</b> Flower exhibiting bilateral symmetry divisible into equal halves along only one vertical median plane (e.g. Pea, Gulmohar).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>14. Epipetalous Stamens:</b> Condition where androecium stamens are physically fused to corolla petals (characteristic of Solanaceae).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>15. Swollen Axile Placentation:</b> Placentation where ovules attach to a central swollen placenta in a multilocular ovary with oblique septa (Solanaceae).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>16. Persistent Calyx:</b> Sepals remaining attached and alive even after fruit formation (e.g. Brinjal, Tomato).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>17. Drupe Fruit:</b> Simple fleshy fruit developing from monocarpellary superior ovary with stony endocarp (e.g. Mango, Coconut).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF9100; border-radius: 6px;">
        <b style='color: #FF9100;'>18. Family Solanaceae:</b> Potato family characterized by herbaceous/woody habit, epipetalous stamens, swollen axile placentation, and persistent calyx.
      </div>
    </div>
  </div>


  <!-- EXACT SYLLABUS HEADING 1 WORD-FOR-WORD -->
  <h2 style="color: #FF9100; margin-top: 10px; font-size: 20px; font-weight: bold;">Classification of plants into major groups; General characters of Algae, Bryophyta, Pteridophyta and Gymnosperms and their classes</h2>
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRkY5MTAwIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPlBsYW50IEtpbmdkb20gRXZvbHV0aW9uYXJ5IEFyY2hpdGVjdHVyZTwvdGV4dD4KICAKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gMS4gQWxnYWUgLS0+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjEyKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS4gQUxHQUUgKFRoYWxsb2lkIEF2YXNjdWxhcik8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiMwMEU2NzYiPkNobG9yb3BoeWNlYWU6PC90c3Bhbj4gR3JlZW4gKFZvbHZveCk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQ1NEYiPlBoYWVvcGh5Y2VhZTo8L3RzcGFuPiBCcm93biAoRnVjdXMpPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGNTI1MiI+UmhvZG9waHljZWFlOjwvdHNwYW4+IFJlZCAoUG9seXNpcGhvbmlhKTwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIxNDUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjIpIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjE3NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNwaXJvZ3lyYSwgVWxvdGhyaXgsIExhbWluYXJpYTwvdGV4dD4KCiAgICA8IS0tIDIuIEJyeW9waHl0YSAtLT4KICAgIDxyZWN0IHg9IjM3MCIgeT0iMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4xMikiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIEJSWU9QSFlUQSAoQW1waGliaWFucyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIE5vbi12YXNjdWxhciAoV2F0ZXIgZm9yIGZlcnRpbGl6YXRpb24pPC90ZXh0PgogICAgPHRleHQgeD0iMzkwIiB5PSI5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+SGVwYXRpY29wc2lkYTo8L3RzcGFuPiBMaXZlcndvcnRzIChHZW1tYSk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+QnJ5b3BzaWRhOjwvdHNwYW4+IE1vc3NlcyAoUHJvdG9uZW1hKTwvdGV4dD4KICAgIDxyZWN0IHg9IjM4NSIgeT0iMTQ1IiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4yKSIvPgogICAgPHRleHQgeD0iNTQ1IiB5PSIxNzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYXJjaGFudGlhLCBGdW5hcmlhLCBTcGhhZ251bTwvdGV4dD4KCiAgICA8IS0tIDMuIFB0ZXJpZG9waHl0YSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjIzMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDE3NiwyNTUsMC4xMikiIHN0cm9rZT0iIzAwQjBGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjI2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBCMEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zLiBQVEVSSURPUEhZVEEgKFZhc2N1bGFyKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIyOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgMXN0IExhbmQgVmFzY3VsYXIgUGxhbnRzIChYeWxlbS9QaGxvZW0pPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjMyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBEb21pbmFudCBwaGFzZTogRGlwbG9pZCBTcG9yb3BoeXRlICgybik8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMzU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5IZXRlcm9zcG9yeTo8L3RzcGFuPiBTZWVkIEhhYml0IFByZWN1cnNvcjwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIzNzUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMTc2LDI1NSwwLjIpIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjQwNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNlbGFnaW5lbGxhLCBFcXVpc2V0dW0sIERyeW9wdGVyaXM8L3RleHQ+CgogICAgPCEtLSA0LiBHeW1ub3NwZXJtcyAtLT4KICAgIDxyZWN0IHg9IjM3MCIgeT0iMjMwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyMCw2NCwyNTEsMC4xMikiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjI2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40LiBHWU1OT1NQRVJNUyAoTmFrZWQgU2VlZCk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjI5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBPdnVsZXMgTk9UIGVuY2xvc2VkIGluIG92YXJ5IHdhbGw8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+Q3ljYXM6PC90c3Bhbj4gQ29yYWxsb2lkIHJvb3RzIChDeWFub2JhY3RlcmlhKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMzU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5QaW51czo8L3RzcGFuPiBNeWNvcnJoaXphbCBmdW5nYWwgYXNzb2NpYXRpb248L3RleHQ+CiAgICA8cmVjdCB4PSIzODUiIHk9IjM3NSIgd2lkdGg9IjMyMCIgaGVpZ2h0PSI1MCIgcng9IjgiIGZpbGw9InJnYmEoMjIwLDY0LDI1MSwwLjIpIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjQwNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkN5Y2FzLCBQaW51cywgQ2VkcnVzLCBTZXF1b2lhPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4xNSkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Fdm9sdXRpb246IEF2YXNjdWxhciBBbGdhZSDinpQgQW1waGliaWFuIEJyeW9waHl0ZXMg4p6UIFZhc2N1bGFyIEZlcm5zIOKelCBTZWVkIEd5bW5vc3Blcm1zPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(255, 145, 0, 0.4); border: 2px solid #FF9100;" alt="3D Plant Kingdom Architecture" /><p style="color: #FF9100; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 2.1: 3D Plant Kingdom Evolutionary Architecture &amp; Major Groups (Algae, Bryophyta, Pteridophyta, Gymnosperms)</p></div>

  <p>Kingdom Plantae encompasses all photosynthetic eukaryotic organisms inhabiting diverse aquatic and terrestrial biomes. Plant classification relies on body differentiation (thalloid vs differentiated root/stem/leaf), vascular tissue development (xylem and phloem), and reproductive strategy (spore-bearing cryptogams vs seed-bearing phanerogams).</p>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Plant Kingdom Classification Overview &amp; Algae Classes (Chlorophyceae, Phaeophyceae, Rhodophyceae)</h3>
  <p>• <b style='color: #FF9100;'>Major Plant Groups Overview:</b> Kingdom Plantae is divided into Algae, Bryophyta, Pteridophyta, Gymnosperms, and Angiosperms.<br>
  • <b style='color: #FF9100;'>General Characters of Algae:</b> Simple, thalloid, autotrophic chlorophyll-bearing aquatic organisms reproducing vegetatively (fragmentation), asexually (zoospores), and sexually (isogamous, anisogamous, oogamous).<br>
  • <b style='color: #FF9100;'>Chlorophyceae (Green Algae):</b> Dominant pigments <i>chlorophyll a</i> and <i>b</i>; cell wall of inner cellulose and outer pectose; storage bodies called <b>Pyrenoids</b> storing starch (e.g. <i>Volvox</i>, <i>Ulothrix</i>, <i>Spirogyra</i>, <i>Chlamydomonas</i>).<br>
  • <b style='color: #FF9100;'>Phaeophyceae (Brown Algae):</b> Dominant pigments <i>chlorophyll a</i>, <i>c</i>, and <b>Fucoxanthin</b> (olive green to brown color); cell wall coated with hydrocolloid <b>Algin</b>; stored food <i>laminarin</i> or <i>mannitol</i>; body divided into Holdfast, Stipe, and Frond (e.g. <i>Ectocarpus</i>, <i>Fucus</i>, <i>Sargassum</i>, <i>Laminaria</i>).<br>
  • <b style='color: #FF9100;'>Rhodophyceae (Red Algae):</b> Dominant pigments <i>chlorophyll a</i>, <i>d</i>, and <b>r-phycoerythrin</b>; stored food <b>Floridean Starch</b>; flagella completely ABSENT; commercial hydrocolloid <b>Agar-agar</b> obtained from <i>Gelidium</i> and <i>Gracilaria</i> (e.g. <i>Polysiphonia</i>, <i>Porphyra</i>).</p>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Bryophyta: General Characters &amp; Classes (Hepaticopsida &amp; Bryopsida)</h3>
  <p>• <b style='color: #FF9100;'>Amphibians of Plant Kingdom:</b> Bryophytes live in moist shaded terrestrial soil but depend strictly on water for swimming biflagellated antherozoids during fertilization.<br>
  • <b style='color: #FF9100;'>General Characteristics:</b> Avascular thalloid or leafy plant body; dominant independent phase is <b>Haploid Gametophyte</b> producing gametes in Antheridia (male) and Archegonia (female). The dependent <b>Diploid Sporophyte</b> consists of Foot, Seta, and Capsule.<br>
  • <b style='color: #FF9100;'>Hepaticopsida (Liverworts):</b> Dorsiventral prostrate thallus bearing specialized asexual multicellular green buds called <b>Gemmae</b> inside Gemma Cups (e.g. <i>Marchantia</i> with dioecious Antheridiophores and Archegoniophores).<br>
  • <b style='color: #FF9100;'>Bryopsida (Mosses):</b> Lifecycle features a juvenile filamentous <b>Protonema</b> stage and an erect leafy gametophore stage; capsule contains elaters/peristome teeth for spore dispersal (e.g. <i>Funaria</i>, <i>Polytrichum</i>, <i>Sphagnum</i> peat moss used as fuel and packing material).</p>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(iii) Pteridophyta: First Vascular Plants &amp; Classes (Psilopsida, Lycopsida, Sphenopsida, Pteropsida)</h3>
  <p>• <b style='color: #FF9100;'>Vascular Cryptogams Features:</b> First terrestrial plants possessing true vascular tissues (<b>Xylem</b> lacking vessels and <b>Phloem</b> lacking companion cells). Dominant independent body is diploid <b>Sporophyte</b> differentiated into true roots, stem, and leaves (microphylls or megaphylls).<br>
  • <b style='color: #FF9100;'>Heterospory &amp; Seed Habit Precursor:</b> Most pteridophytes are homosporous, but genera like <i>Selaginella</i> and <i>Salvinia</i> are <b>Heterosporous</b> (produce small microspores and large megaspores). Retention of female gametophyte on parent sporophyte is a crucial evolutionary precursor to seed habit.<br>
  • <b style='color: #FF9100;'>Four Pteridophyte Classes:</b><br>
  <b style='color: #FF9100;'>1. Psilopsida:</b> Primitive vascular plants (e.g. <i>Psilotum</i>).<br>
  <b style='color: #FF9100;'>2. Lycopsida:</b> Club mosses bearing microphylls and strobili (e.g. <i>Selaginella</i>, <i>Lycopodium</i>).<br>
  <b style='color: #FF9100;'>3. Sphenopsida:</b> Horsetails with jointed stems and whorled leaves (e.g. <i>Equisetum</i>).<br>
  <b style='color: #FF9100;'>4. Pteropsida:</b> True ferns with large megaphyllous fronds (e.g. <i>Dryopteris</i>, <i>Pteris</i>, <i>Adiantum</i> walking fern).</p>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(iv) Gymnosperms: Naked Seeded Vascular Plants (Cycas &amp; Pinus)</h3>
  <p>• <b style='color: #FF9100;'>General Features &amp; Naked Ovules:</b> Vascular plants in which ovules are not enclosed inside an ovary wall and remain exposed on megasporophylls before and after fertilization. Produce naked seeds.<br>
  • <b style='color: #FF9100;'>Morphology &amp; Symbiosis:</b> Tap root system; <i>Pinus</i> roots form symbiotic <b>Mycorrhiza</b> fungal association; <i>Cycas</i> forms specialized <b>Coralloid Roots</b> harboring N<sub>2</sub>-fixing Cyanobacteria (<i>Anabaena cycadae</i>). Stem branched (<i>Pinus</i>, <i>Cedrus</i>) or unbranched (<i>Cycas</i>). Needle-like leaves reduce transpiration with thick cuticle and sunken stomata.<br>
  • <b style='color: #FF9100;'>Reproduction &amp; Lifecycle:</b> Heterosporous, bearing male cones (microsporangiate strobili) and female cones (megasporangiate strobili). Pollen tube transports male gametes (siphonogamy).</p>


  <!-- EXACT SYLLABUS HEADING 2 WORD-FOR-WORD -->
  <h2 style="color: #FF9100; margin-top: 30px; font-size: 20px; font-weight: bold;">Morphology of Flowering plants and their function: Morphology of root, stem and leaf (without their modifications); Morphology of Inflorescence, flower, fruit and seed</h2>
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFudCBNb3JwaG9sb2d5ICZhbXA7IEluZmxvcmVzY2VuY2UgQXJjaGl0ZWN0dXJlPC90ZXh0PgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gTGVmdCBCb3g6IFJvb3QgUmVnaW9ucyAmIExlYWYgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQ3NSIgcng9IjE0IiBmaWxsPSJyZ2JhKDI1NSwxNDUsMCwwLjA2KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Um9vdCBSZWdpb25zICZhbXA7IExlYWYgTW9ycGhvbG9neTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTkwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjQgUmVnaW9ucyBvZiBSb290IFRpcDo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+MS4gPHRzcGFuIGZpbGw9IiNGRkQxODAiPlJvb3QgQ2FwOjwvdHNwYW4+IFByb3RlY3RpdmUgY292ZXI8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTM4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+Mi4gPHRzcGFuIGZpbGw9IiNGRkQxODAiPk1lcmlzdGVtYXRpYzo8L3RzcGFuPiBTbWFsbCBkaXZpZGluZyBjZWxsczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+RWxvbmdhdGlvbjo8L3RzcGFuPiBMZW5ndGggZXhwYW5zaW9uPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE5NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjQuIDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5NYXR1cmF0aW9uOjwvdHNwYW4+IFVuaWNlbGx1bGFyIFJvb3QgSGFpcnM8L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjI2MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxOTUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzAiIHk9IjI4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkxlYWYgVmVuYXRpb24gJmFtcDsgUGh5bGxvdGF4eTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMzE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5SZXRpY3VsYXRlOjwvdHNwYW4+IE5ldC1saWtlIHZlaW5zIChEaWNvdHMpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM0MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+UGFyYWxsZWw6PC90c3Bhbj4gUGFyYWxsZWwgdmVpbnMgKE1vbm9jb3RzKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPkFsdGVybmF0ZTo8L3RzcGFuPiBTaW5nbGUgbGVhZi9ub2RlIChDaGluYSByb3NlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzOTkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPk9wcG9zaXRlOjwvdHNwYW4+IFBhaXIvbm9kZSAoQ2Fsb3Ryb3Bpcyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iNDI3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5XaG9ybGVkOjwvdHNwYW4+IENpcmNsZS9ub2RlIChBbHN0b25pYSk8L3RleHQ+CiAgPC9nPgoKICA8IS0tIFJpZ2h0IEJveDogSW5mbG9yZXNjZW5jZSAmIEZsb3JhbCBXaG9ybHMgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzkwLCA2NSkiPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0NzUiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4wNikiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkluZmxvcmVzY2VuY2UgJmFtcDsgRmxvcmFsIFdob3JsczwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTkwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkluZmxvcmVzY2VuY2UgVHlwZXM6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+UmFjZW1vc2U6PC90c3Bhbj4gSW5kZWZpbml0ZSBheGlzIGdyb3d0aDs8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNEREQiPiAgQWNyb3BldGFsIHN1Y2Nlc3Npb24gKG9sZGVyIGF0IGJhc2UpLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRjUyNTIiPkN5bW9zZTo8L3RzcGFuPiBBeGlzIHRlcm1pbmF0ZXMgaW4gZmxvd2VyOzwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0RERCI+ICBCYXNpcGV0YWwgc3VjY2Vzc2lvbiAob2xkZXIgYXQgdG9wKS48L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjI2MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxOTUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzAiIHk9IjI4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkZsb3JhbCBXaG9ybHMgJmFtcDsgT3ZhcnkgUG9zaXRpb246PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjMxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjEuIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5DYWx5eDo8L3RzcGFuPiBTZXBhbHMgKFBlcnNpc3RlbnQpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM0MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjIuIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5Db3JvbGxhOjwvdHNwYW4+IFBldGFscyAoVmFsdmF0ZS9Ud2lzdGVkKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+QW5kcm9lY2l1bTo8L3RzcGFuPiBFcGlwZXRhbG91cyBTdGFtZW5zPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM5OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjQuIDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5IeXBvZ3lub3VzOjwvdHNwYW4+IFN1cGVyaW9yIE92YXJ5PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjQyNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjUuIDx0c3BhbiBmaWxsPSIjRkY1MjUyIj5FcGlneW5vdXM6PC90c3Bhbj4gSW5mZXJpb3IgT3Zhcnk8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(255, 145, 0, 0.4); border: 2px solid #FF9100;" alt="3D Plant Morphology" /><p style="color: #FF9100; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 2.2: 3D Plant Morphology (Root Regions, Leaf Venation, Racemose vs Cymose Inflorescence &amp; Floral Whorls)</p></div>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Morphology &amp; Functions of Root, Stem and Leaf</h3>
  <p>• <b style='color: #FF9100;'>Root System Morphology &amp; Regions:</b> Root originates from embryo radicle. Dicot tap root vs Monocot fibrous root. Root tip comprises 4 regions: Root Cap ➔ Meristematic Region ➔ Elongation Region ➔ Maturation Region bearing unicellular Root Hairs for absorption.<br>
  • <b style='color: #FF9100;'>Stem Morphology &amp; Functions:</b> Ascending axis developing from embryo plumule bearing Nodes, Internodes, Terminal &amp; Axillary buds. Functions in support, conduction of water/minerals, and photosynthesis.<br>
  • <b style='color: #FF9100;'>Leaf Structure, Venation &amp; Phyllotaxy:</b> Lateral flattened vegetative organ originating at nodes. Consists of Leaf Base, Petiole, and Lamina.<br>
  <b style='color: #FF9100;'>1. Venation:</b> Arrangement of veins; Reticulate (dicots) vs Parallel (monocots).<br>
  <b style='color: #FF9100;'>2. Phyllotaxy:</b> Pattern of leaf arrangement on stem; Alternate (China rose), Opposite (Calotropis), Whorled (Alstonia).</p>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Morphology of Inflorescence and Flower Structure</h3>
  <p>• <b style='color: #FF9100;'>Inflorescence Types:</b> Arrangement of flowers on floral peduncle.<br>
  <b style='color: #FF9100;'>1. Racemose:</b> Indefinite peduncle growth; flowers arranged in acropetal succession.<br>
  <b style='color: #FF9100;'>2. Cymose:</b> Definite peduncle growth terminating in flower; flowers arranged in basipetal succession.<br>
  • <b style='color: #FF9100;'>Flower Structure &amp; Symmetry:</b> Modified reproductive shoot bearing 4 whorls on Thalamus.<br>
  <b style='color: #FF9100;'>1. Symmetry:</b> Actinomorphic (radial) vs Zygomorphic (bilateral) vs Asymmetric.<br>
  <b style='color: #FF9100;'>2. Calyx (Sepals):</b> Outer whorl; Gamosepalous (fused) or Polysepalous (free).<br>
  <b style='color: #FF9100;'>3. Corolla (Petals):</b> Inner whorl; Valvate, Twisted, Imbricate, or Vexillary aestivation.<br>
  <b style='color: #FF9100;'>4. Ovary Position:</b> Hypogynous (Superior Ovary, <u>G</u>), Perigynous (Half-inferior), Epigynous (Inferior Ovary).</p>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(iii) Morphology of Fruit and Seed</h3>
  <p>• <b style='color: #FF9100;'>Fruit Structure &amp; Types:</b> Mature fertilized ovary. Consists of Pericarp (Epicarp + Mesocarp + Endocarp) and seeds. <b>Drupe Fruit:</b> Fleshy fruit with stony endocarp (Mango has fibrous mesocarp, Coconut has fibrous mesocarp and liquid endosperm).<br>
  • <b style='color: #FF9100;'>Seed Structure:</b> Fertilized mature ovule. Consists of Seed Coat (Testa &amp; Tegmen) and Embryo (Radicle, Plumule, Cotyledons). Dicot seeds (Gram, Pea) are non-endospermic; Monocot seeds (Maize, Wheat) are endospermic with proteinaceous <b>Aleurone Layer</b> and shield-shaped <b>Scutellum</b>.</p>


  <!-- EXACT SYLLABUS HEADING 3 WORD-FOR-WORD -->
  <h2 style="color: #FF9100; margin-top: 30px; font-size: 20px; font-weight: bold;">Description of family Solanaceae</h2>
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRkY5MTAwIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjYyMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkZhbWlseSBTb2xhbmFjZWFlIChQb3RhdG8gRmFtaWx5KSBUZWNobmljYWwgRGVzY3JpcHRpb248L3RleHQ+CgogIDwhLS0gVE9QIEZVTEwtV0lEVEggQk9YIChXaWR0aCA3MjBweCk6IEZsb3JhbCBGb3JtdWxhICYgU3ltYm9sIEJyZWFrZG93biAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iMjU1IiByeD0iMTQiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMDgpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBTb2xhbmFjZWFlIEZsb3JhbCBGb3JtdWxhICZhbXA7IFRlY2huaWNhbCBTeW1ib2xzPC90ZXh0PgoKICAgIDwhLS0gRm9ybXVsYSBEaXNwbGF5IFBpbGwgLS0+CiAgICA8cmVjdCB4PSIxMjAiIHk9IjQ1IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU1IiByeD0iMjgiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMjIpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSI4MSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4oKykgKEJpc2V4dWFsKSBLKDUpIEMoNSkgQTUgRygyKTwvdGV4dD4KCiAgICA8IS0tIFN5bWJvbHMgQnJlYWtkb3duIEdyaWQgKDIgQ29sdW1ucywgRnVsbCA3MjBweCBXaWR0aCkgLS0+CiAgICA8IS0tIENvbHVtbiAxIC0tPgogICAgPHRleHQgeD0iMzAiIHk9IjEzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRjkxMDAiPigrKSA6PC90c3Bhbj4gQWN0aW5vbW9ycGhpYyAoUmFkaWFsIFN5bW1ldHJ5KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkY5MTAwIj5LKDUpIDo8L3RzcGFuPiA1IEdhbW9zZXBhbG91cyBQZXJzaXN0ZW50IFNlcGFsczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkY5MTAwIj5BNSA6PC90c3Bhbj4gNSBFcGlwZXRhbG91cyBTdGFtZW5zIChmdXNlZCB0byBwZXRhbHMpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjIyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQxODAiPlBsYWNlbnRhdGlvbjo8L3RzcGFuPiBTd29sbGVuIEF4aWxlIFBsYWNlbnRhdGlvbiB3aXRoIG9ibGlxdWUgc2VwdGE8L3RleHQ+CgogICAgPCEtLSBDb2x1bW4gMiAtLT4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGOTEwMCI+KEJpc2V4dWFsKSA6PC90c3Bhbj4gQmlzZXh1YWwgRmxvd2VyIChIZXJtYXBocm9kaXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTYwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGOTEwMCI+Qyg1KSA6PC90c3Bhbj4gNSBHYW1vcGV0YWxvdXMgUGV0YWxzIChWYWx2YXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+RygyKSA6PC90c3Bhbj4gQmljYXJwZWxsYXJ5LCBTeW5jYXJwb3VzLCBTdXBlcmlvciBPdmFyeTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+RnJ1aXQgJmFtcDsgU2VlZDo8L3RzcGFuPiBCZXJyeS9DYXBzdWxlLCBFbmRvc3Blcm1pYyBzZWVkczwvdGV4dD4KICA8L2c+CgogIDwhLS0gQk9UVE9NIEZVTEwtV0lEVEggQk9YIChXaWR0aCA3MjBweCk6IEVjb25vbWljIEltcG9ydGFuY2UgJiBJbXBvcnRhbnQgUGxhbnRzIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCAzNDApIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iMjYwIiByeD0iMTQiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMDgpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLiBFY29ub21pYyBJbXBvcnRhbmNlICZhbXA7IEtleSBTb2xhbmFjZWFlIFBsYW50czwvdGV4dD4KCiAgICA8IS0tIENhdGVnb3J5IDE6IEZvb2QgQ3JvcHMgLS0+CiAgICA8cmVjdCB4PSIyMCIgeT0iNDUiIHdpZHRoPSI2ODAiIGhlaWdodD0iNjAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzUiIHk9IjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjEuIEZvb2QgU291cmNlIENyb3BzOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSI5MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5Qb3RhdG8gKDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5Tb2xhbnVtIHR1YmVyb3N1bTwvdHNwYW4+KSAgIOKAoiAgIFRvbWF0byAoPHRzcGFuIGZpbGw9IiNGRkQxODAiPlNvbGFudW0gbHljb3BlcnNpY3VtPC90c3Bhbj4pICAg4oCiICAgQnJpbmphbCAoPHRzcGFuIGZpbGw9IiNGRkQxODAiPlNvbGFudW0gbWVsb25nZW5hPC90c3Bhbj4pPC90ZXh0PgoKICAgIDwhLS0gQ2F0ZWdvcnkgMjogU3BpY2UgJiBGdW1pZ2F0b3J5IC0tPgogICAgPHJlY3QgeD0iMjAiIHk9IjExNSIgd2lkdGg9IjY4MCIgaGVpZ2h0PSI2MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjIuIFNwaWNlICZhbXA7IEZ1bWlnYXRvcnk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjE2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5DaGlsbGkgU3BpY2UgKDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5DYXBzaWN1bSBhbm51dW08L3RzcGFuPikgICDigKIgICBUb2JhY2NvICg8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+Tmljb3RpYW5hIHRhYmFjdW08L3RzcGFuPik8L3RleHQ+CgogICAgPCEtLSBDYXRlZ29yeSAzOiBNZWRpY2luYWwgJiBPcm5hbWVudGFsIC0tPgogICAgPHJlY3QgeD0iMjAiIHk9IjE4NSIgd2lkdGg9IjY4MCIgaGVpZ2h0PSI2MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjMuIE1lZGljaW5hbCAmYW1wOyBPcm5hbWVudGFsOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIyMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+QmVsbGFkb25uYSAoPHRzcGFuIGZpbGw9IiM2OUYwQUUiPkF0cm9wYSBiZWxsYWRvbm5hPC90c3Bhbj4pICAg4oCiICAgQXNod2FnYW5kaGEgKDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5XaXRoYW5pYSBzb21uaWZlcmE8L3RzcGFuPikgICDigKIgICBQZXR1bmlhICg8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+UGV0dW5pYSBoeWJyaWRhPC90c3Bhbj4pPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(255, 145, 0, 0.4); border: 2px solid #FF9100;" alt="3D Solanaceae Family Technical Description" /><p style="color: #FF9100; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 2.3: Family Solanaceae Technical Description (Floral Formula, Epipetalous Stamens &amp; Swollen Axile Placentation)</p></div>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Vegetative &amp; Reproductive Characters of Family Solanaceae</h3>
  <p>• <b style='color: #FF9100;'>Habit &amp; Stem Features:</b> Mostly herbs, shrubs, or small trees (Potato family). Stem herbaceous or woody, erect, cylindrical, branched, solid or hollow, underground stem tuber in Potato (<i>Solanum tuberosum</i>).<br>
  • <b style='color: #FF9100;'>Leaves:</b> Alternate, simple or pinnately compound, exstipulate, reticulate venation.<br>
  • <b style='color: #FF9100;'>Inflorescence:</b> Solitary, axillary, or cymose as in <i>Solanum</i>.<br>
  • <b style='color: #FF9100;'>Flower:</b> Bisexual, actinomorphic, hypogynous.<br>
  • <b style='color: #FF9100;'>Calyx:</b> Sepals 5, gamosepalous ($	ext{K}_{(5)}$), persistent, valvate aestivation.<br>
  • <b style='color: #FF9100;'>Corolla:</b> Petals 5, gamopetalous ($	ext{C}_{(5)}$), valvate aestivation.<br>
  • <b style='color: #FF9100;'>Androecium:</b> Stamens 5, epipetalous ($	ext{A}_{5}$ fused to corolla), alternipetalous, stamens free, anthers dithecous.<br>
  • <b style='color: #FF9100;'>Gynoecium:</b> Bicarpellary, syncarpous ($<u>G</u>{	ext{G}}_{(2)}$), superior ovary, carpels placed obliquely, locules 2, <b>Swollen Axile Placentation</b> with numerous ovules.<br>
  • <b style='color: #FF9100;'>Fruit &amp; Seed:</b> Fruit a Berry (Tomato, Brinjal) or Capsule (Datura). Seeds numerous, endospermic.</p>

  <h3 style="color: #FF9100; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Technical Description, Floral Formula &amp; Floral Diagram of Solanaceae</h3>
  <p>• <b style='color: #FF9100;'>Solanaceae Floral Formula:</b><br>
  <div style="text-align: center; margin: 12px 0; font-size: 22px; font-weight: bold; color: #FF9100; background: rgba(255,145,0,0.1); padding: 12px; border-radius: 8px; border: 1.5px solid #FF9100;">
    ⊕ ⚥ K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub> G<sub>(2)</sub>
  </div>
  • <b style='color: #FF9100;'>Economic Importance &amp; Important Plants:</b><br>
  <b style='color: #FF9100;'>1. Food Plants:</b> Potato (<i>Solanum tuberosum</i>), Tomato (<i>Solanum lycopersicum</i>), Brinjal (<i>Solanum melongena</i>).<br>
  <b style='color: #FF9100;'>2. Spice:</b> Chilli (<i>Capsicum annuum</i>).<br>
  <b style='color: #FF9100;'>3. Fumigatory:</b> Tobacco (<i>Nicotiana tabacum</i>).<br>
  <b style='color: #FF9100;'>4. Medicinal Plants:</b> Belladonna (<i>Atropa belladonna</i>), Ashwagandha (<i>Withania somnifera</i>).<br>
  <b style='color: #FF9100;'>5. Ornamentals:</b> Petunia (<i>Petunia hybrida</i>).</p>


  <!-- BOTTOM CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.15), rgba(255, 61, 0, 0.15)); border: 1.5px solid #FF9100; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #FF9100; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Chapter 2 Kingdom Plantae Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b style='color: #FF9100;'>Algae Pigments:</b> Chlorophyceae (Chlorophyll a,b), Phaeophyceae (Fucoxanthin), Rhodophyceae (r-Phycoerythrin).</li>
      <li><b style='color: #FF9100;'>Bryophytes:</b> Gametophyte (n) dominant. Water mandatory for antherozoids.</li>
      <li><b style='color: #FF9100;'>Pteridophytes:</b> Sporophyte (2n) dominant. First vascular plants. Heterospory in <i>Selaginella</i>.</li>
      <li><b style='color: #FF9100;'>Gymnosperms:</b> Naked ovules/seeds. <i>Pinus</i> (Mycorrhiza) &amp; <i>Cycas</i> (Coralloid roots).</li>
      <li><b style='color: #FF9100;'>Solanaceae Formula:</b> ⊕ ⚥ K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub> G<sub>(2)</sub> (Epipetalous stamens &amp; Swollen axile placenta).</li>
    </ul>
  </div>

</div>
`;

export const c11Bot2HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- SECTION A: OBJECTIVE & MCQS (25 Questions) -->
  <div style="background: rgba(255, 145, 0, 0.12); border: 1.5px solid #FF9100; border-radius: 10px; padding: 14px; margin-bottom: 20px;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION A: Objective & Multiple Choice Questions (Q1 to Q25)</h2>
    <p style="color: #FF9100; margin: 0; font-size: 14px;">25 Expected MCQs • 1 Mark Each (18 Conceptual Theory + 7 Floral Identification)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q1. Which pigment imparts brown color to Phaeophyceae (Brown Algae)?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) r-Phycoerythrin &nbsp;&nbsp;&nbsp;&nbsp; (B) Fucoxanthin<br>
      (C) Chlorophyll b &nbsp;&nbsp;&nbsp;&nbsp; (D) Carotene
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Fucoxanthin</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Fucoxanthin is a xanthophyll pigment responsible for the olive green to brown color in Phaeophyceae.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q2. Floridean starch is the reserve food material characteristic of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Chlorophyceae &nbsp;&nbsp;&nbsp;&nbsp; (B) Phaeophyceae<br>
      (C) Rhodophyceae (Red Algae) &nbsp;&nbsp;&nbsp;&nbsp; (D) Cyanobacteria
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (C) Rhodophyceae (Red Algae)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Rhodophyceae stores food as Floridean starch, which is structurally similar to amylopectin and glycogen.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q3. Which of the following are known as 'Amphibians of the Plant Kingdom'?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Algae &nbsp;&nbsp;&nbsp;&nbsp; (B) Bryophytes<br>
      (C) Pteridophytes &nbsp;&nbsp;&nbsp;&nbsp; (D) Gymnosperms
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Bryophytes</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Bryophytes grow in terrestrial soil but depend on water for swimming antherozoids during fertilization.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q4. Gemmae are green, multicellular asexual buds found in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Funaria &nbsp;&nbsp;&nbsp;&nbsp; (B) Marchantia (Liverwort)<br>
      (C) Ferns &nbsp;&nbsp;&nbsp;&nbsp; (D) Pinus
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Marchantia (Liverwort)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Gemmae develop inside specialized gemma cups on the thallus of liverworts like Marchantia.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q5. First terrestrial plants to possess vascular tissues (Xylem and Phloem) are:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Bryophytes &nbsp;&nbsp;&nbsp;&nbsp; (B) Pteridophytes<br>
      (C) Gymnosperms &nbsp;&nbsp;&nbsp;&nbsp; (D) Angiosperms
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Pteridophytes</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Pteridophytes (ferns and horsetails) were the first land plants to evolve xylem and phloem.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q6. Heterospory (production of microspores and megaspores) is shown by:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dryopteris &nbsp;&nbsp;&nbsp;&nbsp; (B) Selaginella and Salvinia<br>
      (C) Funaria &nbsp;&nbsp;&nbsp;&nbsp; (D) Spirogyra
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Selaginella and Salvinia</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Selaginella and Salvinia are heterosporous pteridophytes, presenting an evolutionary precursor to seed habit.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q7. Coralloid roots harboring Nitrogen-fixing Cyanobacteria are present in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Pinus &nbsp;&nbsp;&nbsp;&nbsp; (B) Cycas<br>
      (C) Cedrus &nbsp;&nbsp;&nbsp;&nbsp; (D) Sequoia
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Cycas</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Cycas roots develop specialized coralloid roots associated with Anabaena cycadae for N2 fixation.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q8. Mycorrhizal fungal association in roots is characteristic of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Cycas &nbsp;&nbsp;&nbsp;&nbsp; (B) Pinus<br>
      (C) Marchantia &nbsp;&nbsp;&nbsp;&nbsp; (D) Ferns
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Pinus</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Pinus roots exhibit a symbiotic mycorrhizal fungal association mandatory for seed germination.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q9. The thimble-like structure protecting the delicate apex of root is called:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Root hair &nbsp;&nbsp;&nbsp;&nbsp; (B) Root cap<br>
      (C) Meristematic zone &nbsp;&nbsp;&nbsp;&nbsp; (D) Elongation zone
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Root cap</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> The root cap protects the tender root apex as it makes its way through the soil.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q10. Root hairs responsible for absorption of water and minerals develop from which region?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Root cap &nbsp;&nbsp;&nbsp;&nbsp; (B) Zone of elongation<br>
      (C) Zone of maturation &nbsp;&nbsp;&nbsp;&nbsp; (D) Meristematic zone
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (C) Zone of maturation</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Unicellular root hairs originate as epidermal extensions from the maturation region.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q11. Parallel venation in leaves is characteristic of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicotyledons &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocotyledons<br>
      (C) Gymnosperms &nbsp;&nbsp;&nbsp;&nbsp; (D) Pteridophytes
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Monocotyledons</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot leaves possess veins running parallel to each other within the lamina.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q12. In a Racemose inflorescence, the flowers are arranged in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Basipetal succession &nbsp;&nbsp;&nbsp;&nbsp; (B) Acropetal succession<br>
      (C) Centripetal order &nbsp;&nbsp;&nbsp;&nbsp; (D) Random pattern
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Acropetal succession</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> In racemose inflorescence, the main axis continues growth and older flowers remain at base while younger flowers develop at top.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q13. A flower having both androecium and gynoecium is termed:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Unisexual &nbsp;&nbsp;&nbsp;&nbsp; (B) Bisexual (Hermaphrodite)<br>
      (C) Neuter &nbsp;&nbsp;&nbsp;&nbsp; (D) Staminode
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Bisexual (Hermaphrodite)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> A flower possessing both functional reproductive whorls is bisexual.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q14. A flower having superior ovary is called:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Hypogynous &nbsp;&nbsp;&nbsp;&nbsp; (B) Perigynous<br>
      (C) Epigynous &nbsp;&nbsp;&nbsp;&nbsp; (D) Inferior
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (A) Hypogynous</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> In hypogynous flowers (e.g. Solanaceae, Mustard), gynoecium occupies the highest position on thalamus.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q15. Epipetalous stamens (stamens fused to corolla petals) are characteristic of family:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Fabaceae &nbsp;&nbsp;&nbsp;&nbsp; (B) Solanaceae<br>
      (C) Liliaceae &nbsp;&nbsp;&nbsp;&nbsp; (D) Poaceae
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Solanaceae</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> In Solanaceae, all 5 stamens are epipetalous, attached to gamopetalous corolla petals.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q16. Placentation in family Solanaceae is described as:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Parietal &nbsp;&nbsp;&nbsp;&nbsp; (B) Free central<br>
      (C) Swollen Axile with oblique septa &nbsp;&nbsp;&nbsp;&nbsp; (D) Marginal
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (C) Swollen Axile with oblique septa</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Solanaceae features bicarpellary syncarpous ovary with swollen placenta bearing numerous ovules.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q17. Persistent calyx (sepals remaining attached after fruit formation) is found in:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Mango &nbsp;&nbsp;&nbsp;&nbsp; (B) Brinjal and Tomato<br>
      (C) Pea &nbsp;&nbsp;&nbsp;&nbsp; (D) Wheat
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Brinjal and Tomato</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Solanaceae members like Brinjal and Tomato retain green persistent calyx on fruits.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q18. Mango and Coconut fruits are classified morphologically as:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Berry &nbsp;&nbsp;&nbsp;&nbsp; (B) Drupe<br>
      (C) Capsule &nbsp;&nbsp;&nbsp;&nbsp; (D) Legume
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Drupe</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Mango and Coconut are fleshy drupe fruits developing from monocarpellary superior ovaries with stony endocarps.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q19. The floral formula of family Solanaceae is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) ⊕ ⚥ K(5) C(5) A5 G(2) &nbsp;&nbsp;&nbsp;&nbsp; (B) % ⚥ K(5) C1+2+(2) A(9)+1 G1<br>
      (C) ⊕ ⚥ P3+3 A3+3 G(3) &nbsp;&nbsp;&nbsp;&nbsp; (D) ⊕ ⚥ K2+2 C4 A2+4 G(2)
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (A) ⊕ ⚥ K(5) C(5) A5 G(2)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Solanaceae formula: Actinomorphic, Bisexual, 5 persistent sepals, 5 petals, 5 epipetalous stamens, 2 carpels superior ovary.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q20. Atropa belladonna and Withania somnifera are important plants of Solanaceae used for:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Edible tubers &nbsp;&nbsp;&nbsp;&nbsp; (B) Medicines<br>
      (C) Fumigatories &nbsp;&nbsp;&nbsp;&nbsp; (D) Dyes
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Medicines</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Belladonna and Ashwagandha are key medicinal plants belonging to family Solanaceae.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q21. Hydrocolloid Algin is obtained commercially from:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Red Algae &nbsp;&nbsp;&nbsp;&nbsp; (B) Brown Algae (Phaeophyceae)<br>
      (C) Green Algae &nbsp;&nbsp;&nbsp;&nbsp; (D) Mosses
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Brown Algae (Phaeophyceae)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Algin is a water-holding hydrocolloid extracted from brown algae like Laminaria and Fucus.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q22. Agar-agar, used in culture media and ice-creams, is extracted from:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Spirogyra &nbsp;&nbsp;&nbsp;&nbsp; (B) Gelidium and Gracilaria<br>
      (C) Fucus &nbsp;&nbsp;&nbsp;&nbsp; (D) Volvox
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Gelidium and Gracilaria</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Agar is a commercial hydrocolloid harvested from red algal genera Gelidium and Gracilaria.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q23. Peat moss used as fuel and packing material for trans-shipment is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Funaria &nbsp;&nbsp;&nbsp;&nbsp; (B) Sphagnum<br>
      (C) Marchantia &nbsp;&nbsp;&nbsp;&nbsp; (D) Polytrichum
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Sphagnum</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Sphagnum moss holds high water content and forms peat used as fuel and living material packing.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q24. Pyrenoids present in green algae chloroplasts store:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Proteins surrounded by starch &nbsp;&nbsp;&nbsp;&nbsp; (B) Fats and oils<br>
      (C) Glycogen &nbsp;&nbsp;&nbsp;&nbsp; (D) Mannitol
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (A) Proteins surrounded by starch</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Pyrenoids are proteinaceous storage bodies surrounded by starch sheaths in Chlorophyceae.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style='color: #FF9100;'>Q25. Which plant is known as the 'Walking Fern'?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Equisetum &nbsp;&nbsp;&nbsp;&nbsp; (B) Adiantum<br>
      (C) Selaginella &nbsp;&nbsp;&nbsp;&nbsp; (D) Psilotum
    </div>
    <div style="background: rgba(255, 145, 0, 0.15); border-left: 3.5px solid #FF9100; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style='color: #FF9100;'>✓ Answer: (B) Adiantum</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Adiantum is called walking fern because leaf tips form new plantlets when touching soil.</span>
    </div>
  </div>
  <!-- SECTION B: VERY SHORT ANSWER QUESTIONS (Q26 to Q55) -->
  <div style="background: rgba(255, 145, 0, 0.12); border: 1.5px solid #FF9100; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION B: Very Short Answer Questions (Q26 to Q55)</h2>
    <p style="color: #FF9100; margin: 0; font-size: 14px;">30 Expected VSA Questions • 2 Marks Each (22 Conceptual Theory + 8 Morphological Definitions)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q26. Define Pyrenoids and state their occurrence.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Storage bodies located in chloroplasts of green algae.<br>Consists of a central protein core surrounded by a starch sheath.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q27. Differentiate Chlorophyceae and Rhodophyceae based on major pigments and stored food.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Chlorophyceae:</b> Chlorophyll a, b; Starch food.<br><b style='color: #FF9100;'>Rhodophyceae:</b> Chlorophyll a, d, r-Phycoerythrin; Floridean starch food.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q28. Why are Bryophytes called Amphibians of Plant Kingdom?</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Inhabit moist land soil but depend strictly on water film for swimming male gamete (antherozoid) fertilization.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q29. Define Gemmae in Liverworts.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Green, multicellular, asexual reproductive buds developing inside gemma cups on thallus (e.g. <i>Marchantia</i>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q30. What is Protonema in Mosses?</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Juvenile, green, creeping filamentous stage produced directly from spore germination in mosses.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q31. Explain Heterospory and state 2 examples of heterosporous pteridophytes.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Production of 2 distinct spore sizes (microspores and megaspores).<br>Examples: <i>Selaginella</i> and <i>Salvinia</i>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q32. Why are Gymnosperms called 'Naked-seeded' plants?</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Ovules are not enclosed inside an ovary wall and remain exposed on megasporophylls before and after fertilization.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q33. Differentiate Coralloid roots and Mycorrhizal roots in Gymnosperms.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Coralloid Roots:</b> <i>Cycas</i> roots harboring N2-fixing Cyanobacteria.<br><b style='color: #FF9100;'>Mycorrhizal Roots:</b> <i>Pinus</i> roots symbiotically associated with fungi.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q34. List 4 regions of root tip from apex upwards.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      1. Root Cap, 2. Region of Meristematic Activity, 3. Region of Elongation, 4. Region of Maturation.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q35. Differentiate Tap root system and Fibrous root system.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Tap Root:</b> Direct primary radicle extension with lateral branches (Dicots).<br><b style='color: #FF9100;'>Fibrous Root:</b> Cluster of thin equal roots from stem base (Monocots).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q36. Differentiate Reticulate and Parallel Leaf Venation.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Reticulate:</b> Veinlets form an interconnected network (Dicots).<br><b style='color: #FF9100;'>Parallel:</b> Veins run parallel within lamina (Monocots).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q37. Define Phyllotaxy and list its 3 types.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Pattern of leaf arrangement on stem/branch.<br>Types: 1. Alternate, 2. Opposite, 3. Whorled.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q38. Differentiate Racemose and Cymose Inflorescence.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Racemose:</b> Indefinite growth, acropetal flower arrangement.<br><b style='color: #FF9100;'>Cymose:</b> Definite growth (terminates in flower), basipetal arrangement.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q39. Differentiate Actinomorphic and Zygomorphic Flowers.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Actinomorphic:</b> Radial symmetry (divisible in any vertical plane).<br><b style='color: #FF9100;'>Zygomorphic:</b> Bilateral symmetry (divisible in single median plane).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q40. Define Hypogynous Flower and Superior Ovary.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Flower where calyx, corolla, androecium arise below the ovary; ovary occupies highest position (<u>G</u>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q41. What are Epipetalous Stamens? Give an example family.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Stamens physically fused to corolla petals.<br>Example Family: <b>Solanaceae</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q42. Define Persistent Calyx and give 2 plant examples.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Sepals remaining attached and alive even after fruit development.<br>Examples: Brinjal (<i>Solanum melongena</i>) and Tomato.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q43. Describe Drupe fruit structure in Mango.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Fleshy fruit developing from monocarpellary superior ovary with thin epicarp, edible fleshy mesocarp, and hard stony endocarp.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q44. Differentiate Endospermic and Non-endospermic seeds with examples.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Endospermic:</b> Endosperm persists in mature seed (Maize, Wheat, Solanaceae).<br><b style='color: #FF9100;'>Non-endospermic:</b> Endosperm consumed during development (Gram, Pea).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q45. Write Floral Formula of Solanaceae.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b>⊕ ⚥ K(5) C(5) A5 G(2)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q46. What is Swollen Axile Placentation?</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Placentation where ovules attach to a central swollen placenta in a multilocular ovary with oblique septa (Solanaceae).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q47. Name 3 medicinal plants belonging to family Solanaceae.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      1. <i>Atropa belladonna</i> (Belladonna), 2. <i>Withania somnifera</i> (Ashwagandha), 3. <i>Datura stramonium</i>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q48. Name 3 food crops belonging to family Solanaceae.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      1. Potato (<i>Solanum tuberosum</i>), 2. Tomato (<i>Solanum lycopersicum</i>), 3. Brinjal (<i>Solanum melongena</i>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q49. Why are Pteridophytes called Vascular Cryptogams?</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Possess vascular tissues (Xylem and Phloem) but reproduce via hidden spores without flower/seed formation.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q50. What is Algin and Carrageen? Mention their sources.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Algin:</b> Hydrocolloid from Brown Algae (Phaeophyceae).<br><b style='color: #FF9100;'>Carrageen:</b> Hydrocolloid from Red Algae (Rhodophyceae).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q51. State function of Aleurone Layer in Maize seed.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Protein-rich outer layer of endosperm secreting hydrolytic enzymes during seed germination.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q52. What is Scutellum in Monocot Embryo?</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Single shield-shaped large cotyledon present in monocot grass seeds (e.g. Maize).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q53. Differentiate Gametophyte and Sporophyte phases.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      <b style='color: #FF9100;'>Gametophyte:</b> Haploid (n) phase producing gametes via mitosis.<br><b style='color: #FF9100;'>Sporophyte:</b> Diploid (2n) phase producing spores via meiosis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q54. Define Aestivation and name 4 types.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      Arrangement of sepals or petals in floral bud.<br>Types: 1. Valvate, 2. Twisted, 3. Imbricate, 4. Vexillary.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q55. Write scientific names for: (a) Potato, (b) Tobacco.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Answer:</b><br>
      (a) <i>Solanum tuberosum</i><br>(b) <i>Nicotiana tabacum</i>.
    </div>
  </div>
  <!-- SECTION C: SHORT ANSWER QUESTIONS (Q56 to Q85) -->
  <div style="background: rgba(255, 145, 0, 0.12); border: 1.5px solid #FF9100; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION C: Short Answer Questions (Q56 to Q85)</h2>
    <p style="color: #FF9100; margin: 0; font-size: 14px;">30 Expected SA Questions • 3 Marks Each (22 Conceptual Theory + 8 Morphological Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q56. Detail Plant Kingdom evolutionary architecture with 3D diagram. Compare Algae, Bryophytes, Pteridophytes, Gymnosperms.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Plant evolution progresses from avascular thalloid algae to vascular naked-seeded gymnosperms.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRkY5MTAwIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPlBsYW50IEtpbmdkb20gRXZvbHV0aW9uYXJ5IEFyY2hpdGVjdHVyZTwvdGV4dD4KICAKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gMS4gQWxnYWUgLS0+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjEyKSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS4gQUxHQUUgKFRoYWxsb2lkIEF2YXNjdWxhcik8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiMwMEU2NzYiPkNobG9yb3BoeWNlYWU6PC90c3Bhbj4gR3JlZW4gKFZvbHZveCk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQ1NEYiPlBoYWVvcGh5Y2VhZTo8L3RzcGFuPiBCcm93biAoRnVjdXMpPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGNTI1MiI+UmhvZG9waHljZWFlOjwvdHNwYW4+IFJlZCAoUG9seXNpcGhvbmlhKTwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIxNDUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMjMwLDExOCwwLjIpIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjE3NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNwaXJvZ3lyYSwgVWxvdGhyaXgsIExhbWluYXJpYTwvdGV4dD4KCiAgICA8IS0tIDIuIEJyeW9waHl0YSAtLT4KICAgIDxyZWN0IHg9IjM3MCIgeT0iMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4xMikiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIuIEJSWU9QSFlUQSAoQW1waGliaWFucyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIE5vbi12YXNjdWxhciAoV2F0ZXIgZm9yIGZlcnRpbGl6YXRpb24pPC90ZXh0PgogICAgPHRleHQgeD0iMzkwIiB5PSI5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+SGVwYXRpY29wc2lkYTo8L3RzcGFuPiBMaXZlcndvcnRzIChHZW1tYSk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjEyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+QnJ5b3BzaWRhOjwvdHNwYW4+IE1vc3NlcyAoUHJvdG9uZW1hKTwvdGV4dD4KICAgIDxyZWN0IHg9IjM4NSIgeT0iMTQ1IiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4yKSIvPgogICAgPHRleHQgeD0iNTQ1IiB5PSIxNzYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYXJjaGFudGlhLCBGdW5hcmlhLCBTcGhhZ251bTwvdGV4dD4KCiAgICA8IS0tIDMuIFB0ZXJpZG9waHl0YSAtLT4KICAgIDxyZWN0IHg9IjAiIHk9IjIzMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyMTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDE3NiwyNTUsMC4xMikiIHN0cm9rZT0iIzAwQjBGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjI2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDBCMEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zLiBQVEVSSURPUEhZVEEgKFZhc2N1bGFyKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIyOTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgMXN0IExhbmQgVmFzY3VsYXIgUGxhbnRzIChYeWxlbS9QaGxvZW0pPC90ZXh0PgogICAgPHRleHQgeD0iMjAiIHk9IjMyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBEb21pbmFudCBwaGFzZTogRGlwbG9pZCBTcG9yb3BoeXRlICgybik8L3RleHQ+CiAgICA8dGV4dCB4PSIyMCIgeT0iMzU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5IZXRlcm9zcG9yeTo8L3RzcGFuPiBTZWVkIEhhYml0IFByZWN1cnNvcjwvdGV4dD4KICAgIDxyZWN0IHg9IjE1IiB5PSIzNzUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDAsMTc2LDI1NSwwLjIpIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjQwNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNlbGFnaW5lbGxhLCBFcXVpc2V0dW0sIERyeW9wdGVyaXM8L3RleHQ+CgogICAgPCEtLSA0LiBHeW1ub3NwZXJtcyAtLT4KICAgIDxyZWN0IHg9IjM3MCIgeT0iMjMwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIxMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyMCw2NCwyNTEsMC4xMikiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjI2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40LiBHWU1OT1NQRVJNUyAoTmFrZWQgU2VlZCk8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjI5NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiBPdnVsZXMgTk9UIGVuY2xvc2VkIGluIG92YXJ5IHdhbGw8L3RleHQ+CiAgICA8dGV4dCB4PSIzOTAiIHk9IjMyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0VBODBGQyI+Q3ljYXM6PC90c3Bhbj4gQ29yYWxsb2lkIHJvb3RzIChDeWFub2JhY3RlcmlhKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMzU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRUE4MEZDIj5QaW51czo8L3RzcGFuPiBNeWNvcnJoaXphbCBmdW5nYWwgYXNzb2NpYXRpb248L3RleHQ+CiAgICA8cmVjdCB4PSIzODUiIHk9IjM3NSIgd2lkdGg9IjMyMCIgaGVpZ2h0PSI1MCIgcng9IjgiIGZpbGw9InJnYmEoMjIwLDY0LDI1MSwwLjIpIi8+CiAgICA8dGV4dCB4PSI1NDUiIHk9IjQwNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFQTgwRkMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkN5Y2FzLCBQaW51cywgQ2VkcnVzLCBTZXF1b2lhPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4xNSkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Fdm9sdXRpb246IEF2YXNjdWxhciBBbGdhZSDinpQgQW1waGliaWFuIEJyeW9waHl0ZXMg4p6UIFZhc2N1bGFyIEZlcm5zIOKelCBTZWVkIEd5bW5vc3Blcm1zPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #FF9100;' alt='Plant Kingdom Architecture' /><p style='color: #FF9100; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q56: 3D Plant Kingdom Evolutionary Architecture</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q57. Explain 3D Plant Morphology (Root regions, Inflorescence & Floral whorls) with diagram.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Root tip features 4 regions; Inflorescence is Racemose or Cymose; Floral whorls comprise Calyx, Corolla, Androecium, Gynoecium.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFudCBNb3JwaG9sb2d5ICZhbXA7IEluZmxvcmVzY2VuY2UgQXJjaGl0ZWN0dXJlPC90ZXh0PgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDwhLS0gTGVmdCBCb3g6IFJvb3QgUmVnaW9ucyAmIExlYWYgLS0+CiAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQ3NSIgcng9IjE0IiBmaWxsPSJyZ2JhKDI1NSwxNDUsMCwwLjA2KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Um9vdCBSZWdpb25zICZhbXA7IExlYWYgTW9ycGhvbG9neTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTkwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjQgUmVnaW9ucyBvZiBSb290IFRpcDo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+MS4gPHRzcGFuIGZpbGw9IiNGRkQxODAiPlJvb3QgQ2FwOjwvdHNwYW4+IFByb3RlY3RpdmUgY292ZXI8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTM4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+Mi4gPHRzcGFuIGZpbGw9IiNGRkQxODAiPk1lcmlzdGVtYXRpYzo8L3RzcGFuPiBTbWFsbCBkaXZpZGluZyBjZWxsczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+RWxvbmdhdGlvbjo8L3RzcGFuPiBMZW5ndGggZXhwYW5zaW9uPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE5NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjQuIDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5NYXR1cmF0aW9uOjwvdHNwYW4+IFVuaWNlbGx1bGFyIFJvb3QgSGFpcnM8L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjI2MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxOTUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzAiIHk9IjI4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkxlYWYgVmVuYXRpb24gJmFtcDsgUGh5bGxvdGF4eTo8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMzE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5SZXRpY3VsYXRlOjwvdHNwYW4+IE5ldC1saWtlIHZlaW5zIChEaWNvdHMpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM0MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+UGFyYWxsZWw6PC90c3Bhbj4gUGFyYWxsZWwgdmVpbnMgKE1vbm9jb3RzKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPkFsdGVybmF0ZTo8L3RzcGFuPiBTaW5nbGUgbGVhZi9ub2RlIChDaGluYSByb3NlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzOTkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiM4MEQ4RkYiPk9wcG9zaXRlOjwvdHNwYW4+IFBhaXIvbm9kZSAoQ2Fsb3Ryb3Bpcyk8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iNDI3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjODBEOEZGIj5XaG9ybGVkOjwvdHNwYW4+IENpcmNsZS9ub2RlIChBbHN0b25pYSk8L3RleHQ+CiAgPC9nPgoKICA8IS0tIFJpZ2h0IEJveDogSW5mbG9yZXNjZW5jZSAmIEZsb3JhbCBXaG9ybHMgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzkwLCA2NSkiPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0NzUiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4wNikiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkQxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkluZmxvcmVzY2VuY2UgJmFtcDsgRmxvcmFsIFdob3JsczwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTkwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSI4MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkluZmxvcmVzY2VuY2UgVHlwZXM6PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+UmFjZW1vc2U6PC90c3Bhbj4gSW5kZWZpbml0ZSBheGlzIGdyb3d0aDs8L3RleHQ+CiAgICA8dGV4dCB4PSIzMCIgeT0iMTMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNEREQiPiAgQWNyb3BldGFsIHN1Y2Nlc3Npb24gKG9sZGVyIGF0IGJhc2UpLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRjUyNTIiPkN5bW9zZTo8L3RzcGFuPiBBeGlzIHRlcm1pbmF0ZXMgaW4gZmxvd2VyOzwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0RERCI+ICBCYXNpcGV0YWwgc3VjY2Vzc2lvbiAob2xkZXIgYXQgdG9wKS48L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjI2MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxOTUiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzAiIHk9IjI4NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPkZsb3JhbCBXaG9ybHMgJmFtcDsgT3ZhcnkgUG9zaXRpb246PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjMxNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjEuIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5DYWx5eDo8L3RzcGFuPiBTZXBhbHMgKFBlcnNpc3RlbnQpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM0MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjIuIDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5Db3JvbGxhOjwvdHNwYW4+IFBldGFscyAoVmFsdmF0ZS9Ud2lzdGVkKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj4zLiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+QW5kcm9lY2l1bTo8L3RzcGFuPiBFcGlwZXRhbG91cyBTdGFtZW5zPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjM5OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjQuIDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5IeXBvZ3lub3VzOjwvdHNwYW4+IFN1cGVyaW9yIE92YXJ5PC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjQyNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPjUuIDx0c3BhbiBmaWxsPSIjRkY1MjUyIj5FcGlneW5vdXM6PC90c3Bhbj4gSW5mZXJpb3IgT3Zhcnk8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #FF9100;' alt='Plant Morphology' /><p style='color: #FF9100; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q57: 3D Plant Morphology Diagram</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q58. Detail technical description of Family Solanaceae with 3D diagram & Floral Formula.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Solanaceae features persistent calyx, epipetalous stamens, swollen axile placentation, and superior ovary.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNjIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxOTBiMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzODE5MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTkwYjAwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRkY5MTAwIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjYyMCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkY5MTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPkZhbWlseSBTb2xhbmFjZWFlIChQb3RhdG8gRmFtaWx5KSBUZWNobmljYWwgRGVzY3JpcHRpb248L3RleHQ+CgogIDwhLS0gVE9QIEZVTEwtV0lEVEggQk9YIChXaWR0aCA3MjBweCk6IEZsb3JhbCBGb3JtdWxhICYgU3ltYm9sIEJyZWFrZG93biAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNjUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iMjU1IiByeD0iMTQiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMDgpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBTb2xhbmFjZWFlIEZsb3JhbCBGb3JtdWxhICZhbXA7IFRlY2huaWNhbCBTeW1ib2xzPC90ZXh0PgoKICAgIDwhLS0gRm9ybXVsYSBEaXNwbGF5IFBpbGwgLS0+CiAgICA8cmVjdCB4PSIxMjAiIHk9IjQ1IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU1IiByeD0iMjgiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMjIpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSI4MSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4oKykgKEJpc2V4dWFsKSBLKDUpIEMoNSkgQTUgRygyKTwvdGV4dD4KCiAgICA8IS0tIFN5bWJvbHMgQnJlYWtkb3duIEdyaWQgKDIgQ29sdW1ucywgRnVsbCA3MjBweCBXaWR0aCkgLS0+CiAgICA8IS0tIENvbHVtbiAxIC0tPgogICAgPHRleHQgeD0iMzAiIHk9IjEzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj7igKIgPHRzcGFuIGZpbGw9IiNGRjkxMDAiPigrKSA6PC90c3Bhbj4gQWN0aW5vbW9ycGhpYyAoUmFkaWFsIFN5bW1ldHJ5KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkY5MTAwIj5LKDUpIDo8L3RzcGFuPiA1IEdhbW9zZXBhbG91cyBQZXJzaXN0ZW50IFNlcGFsczwvdGV4dD4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxOTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+4oCiIDx0c3BhbiBmaWxsPSIjRkY5MTAwIj5BNSA6PC90c3Bhbj4gNSBFcGlwZXRhbG91cyBTdGFtZW5zIChmdXNlZCB0byBwZXRhbHMpPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjIyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgPHRzcGFuIGZpbGw9IiNGRkQxODAiPlBsYWNlbnRhdGlvbjo8L3RzcGFuPiBTd29sbGVuIEF4aWxlIFBsYWNlbnRhdGlvbiB3aXRoIG9ibGlxdWUgc2VwdGE8L3RleHQ+CgogICAgPCEtLSBDb2x1bW4gMiAtLT4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGOTEwMCI+KEJpc2V4dWFsKSA6PC90c3Bhbj4gQmlzZXh1YWwgRmxvd2VyIChIZXJtYXBocm9kaXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTYwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGOTEwMCI+Qyg1KSA6PC90c3Bhbj4gNSBHYW1vcGV0YWxvdXMgUGV0YWxzIChWYWx2YXRlKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMTkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkYiPuKAoiA8dHNwYW4gZmlsbD0iIzY5RjBBRSI+RygyKSA6PC90c3Bhbj4gQmljYXJwZWxsYXJ5LCBTeW5jYXJwb3VzLCBTdXBlcmlvciBPdmFyeTwvdGV4dD4KICAgIDx0ZXh0IHg9IjM5MCIgeT0iMjI1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MEQ4RkYiPuKAoiA8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+RnJ1aXQgJmFtcDsgU2VlZDo8L3RzcGFuPiBCZXJyeS9DYXBzdWxlLCBFbmRvc3Blcm1pYyBzZWVkczwvdGV4dD4KICA8L2c+CgogIDwhLS0gQk9UVE9NIEZVTEwtV0lEVEggQk9YIChXaWR0aCA3MjBweCk6IEVjb25vbWljIEltcG9ydGFuY2UgJiBJbXBvcnRhbnQgUGxhbnRzIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCAzNDApIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iMjYwIiByeD0iMTQiIGZpbGw9InJnYmEoMjU1LDE0NSwwLDAuMDgpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzYwIiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLiBFY29ub21pYyBJbXBvcnRhbmNlICZhbXA7IEtleSBTb2xhbmFjZWFlIFBsYW50czwvdGV4dD4KCiAgICA8IS0tIENhdGVnb3J5IDE6IEZvb2QgQ3JvcHMgLS0+CiAgICA8cmVjdCB4PSIyMCIgeT0iNDUiIHdpZHRoPSI2ODAiIGhlaWdodD0iNjAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPHRleHQgeD0iMzUiIHk9IjcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjEuIEZvb2QgU291cmNlIENyb3BzOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSI5MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5Qb3RhdG8gKDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5Tb2xhbnVtIHR1YmVyb3N1bTwvdHNwYW4+KSAgIOKAoiAgIFRvbWF0byAoPHRzcGFuIGZpbGw9IiNGRkQxODAiPlNvbGFudW0gbHljb3BlcnNpY3VtPC90c3Bhbj4pICAg4oCiICAgQnJpbmphbCAoPHRzcGFuIGZpbGw9IiNGRkQxODAiPlNvbGFudW0gbWVsb25nZW5hPC90c3Bhbj4pPC90ZXh0PgoKICAgIDwhLS0gQ2F0ZWdvcnkgMjogU3BpY2UgJiBGdW1pZ2F0b3J5IC0tPgogICAgPHJlY3QgeD0iMjAiIHk9IjExNSIgd2lkdGg9IjY4MCIgaGVpZ2h0PSI2MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIzNSIgeT0iMTQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjIuIFNwaWNlICZhbXA7IEZ1bWlnYXRvcnk6PC90ZXh0PgogICAgPHRleHQgeD0iMzUiIHk9IjE2MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5DaGlsbGkgU3BpY2UgKDx0c3BhbiBmaWxsPSIjRkZEMTgwIj5DYXBzaWN1bSBhbm51dW08L3RzcGFuPikgICDigKIgICBUb2JhY2NvICg8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+Tmljb3RpYW5hIHRhYmFjdW08L3RzcGFuPik8L3RleHQ+CgogICAgPCEtLSBDYXRlZ29yeSAzOiBNZWRpY2luYWwgJiBPcm5hbWVudGFsIC0tPgogICAgPHJlY3QgeD0iMjAiIHk9IjE4NSIgd2lkdGg9IjY4MCIgaGVpZ2h0PSI2MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICA8dGV4dCB4PSIzNSIgeT0iMjEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRjkxMDAiPjMuIE1lZGljaW5hbCAmYW1wOyBPcm5hbWVudGFsOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjM1IiB5PSIyMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+QmVsbGFkb25uYSAoPHRzcGFuIGZpbGw9IiM2OUYwQUUiPkF0cm9wYSBiZWxsYWRvbm5hPC90c3Bhbj4pICAg4oCiICAgQXNod2FnYW5kaGEgKDx0c3BhbiBmaWxsPSIjNjlGMEFFIj5XaXRoYW5pYSBzb21uaWZlcmE8L3RzcGFuPikgICDigKIgICBQZXR1bmlhICg8dHNwYW4gZmlsbD0iI0ZGRDE4MCI+UGV0dW5pYSBoeWJyaWRhPC90c3Bhbj4pPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #FF9100;' alt='Solanaceae Description' /><p style='color: #FF9100; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q58: Family Solanaceae Technical Description</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q59. Compare Chlorophyceae, Phaeophyceae, and Rhodophyceae in tabular format.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      • <b style='color: #FF9100;'>Chlorophyceae:</b> Chlorophyll a,b; Starch; Cellulose wall.<br>• <b style='color: #FF9100;'>Phaeophyceae:</b> Fucoxanthin; Laminarin/Mannitol; Algin coat.<br>• <b style='color: #FF9100;'>Rhodophyceae:</b> r-Phycoerythrin; Floridean starch; Agar coat.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q60. Detail economic importance of Algae.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      1. Primary producers in aquatic food chains.<br>2. Source of hydrocolloids (Algin, Carrageen, Agar).<br>3. Food source (<i>Porphyra</i>, <i>Laminaria</i>) and single-cell protein (<i>Spirulina</i>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q61. Explain lifecycle of Bryophytes detailing Gametophyte and Sporophyte phases.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Dominant independent haploid gametophyte (n) produces gametes in Antheridia and Archegonia. Fertilization forms diploid sporophyte (2n) consisting of Foot, Seta, and Capsule.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q62. Compare Liverworts (Hepaticopsida) and Mosses (Bryopsida).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      • <b style='color: #FF9100;'>Liverworts:</b> Dorsiventral prostrate thallus, gemma cups, simple sporophyte (<i>Marchantia</i>).<br>• <b style='color: #FF9100;'>Mosses:</b> Filamentous protonema, erect leafy gametophore, complex capsule (<i>Funaria</i>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q63. Explain significance of Heterospory and Seed Habit in Pteridophytes.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Heterospory (<i>Selaginella</i>) produces microspores and megaspores. Megaspore retention inside megasporangium on parent sporophyte provides female gametophyte protection, serving as precursor to seed habit.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q64. Classify Pteridophytes into 4 classes with characteristic examples.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      1. Psilopsida (<i>Psilotum</i>).<br>2. Lycopsida (<i>Selaginella</i>, <i>Lycopodium</i>).<br>3. Sphenopsida (<i>Equisetum</i>).<br>4. Pteropsida (<i>Dryopteris</i>, <i>Pteris</i>, <i>Adiantum</i>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q65. Detail salient features of Gymnosperms.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      1. Ovules not enclosed in ovary wall (naked seeds).<br>2. Dominant sporophyte with tap roots, mycorrhiza/coralloid roots.<br>3. Heterosporous, bearing male and female strobili (cones).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q66. Detail structure and 4 regions of root tip.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Root Cap ➔ Meristematic Region (small dividing cells) ➔ Elongation Region (cell enlargement) ➔ Maturation Region (bears root hairs).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q67. Describe leaf venation (Reticulate vs Parallel) and Phyllotaxy types (Alternate, Opposite, Whorled).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Reticulate forms net (dicots); Parallel runs straight (monocots). Phyllotaxy is alternate (single/node), opposite (pair/node), whorled (circle/node).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q68. Compare Racemose and Cymose Inflorescence with diagrams.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Racemose has unlimited peduncle growth with acropetal succession; Cymose has limited growth terminating in flower with basipetal succession.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q69. Explain floral symmetry: Actinomorphic, Zygomorphic, and Asymmetric.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Actinomorphic (radial); Zygomorphic (bilateral); Asymmetric (cannot be divided into equal halves, e.g. <i>Canna</i>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q70. Explain Ovary Positions: Hypogynous, Perigynous, and Epigynous.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      • <b style='color: #FF9100;'>Hypogynous:</b> Superior ovary (<u>G</u>).<br>• <b style='color: #FF9100;'>Perigynous:</b> Half-inferior ovary.<br>• <b style='color: #FF9100;'>Epigynous:</b> Inferior ovary.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q71. Detail 4 types of Aestivation (Valvate, Twisted, Imbricate, Vexillary).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Valvate (touching edges); Twisted (overlapping margin); Imbricate (irregular overlap); Vexillary (standard, wings, keel).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q72. Describe structure of Dicot Seed (Bean/Pea).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Consists of Seed Coat (Testa & Tegmen), Hilum, Micropyle, Embryonal Axis (Plumule & Radicle), and 2 fleshy Cotyledons.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q73. Describe structure of Monocot Seed (Maize grain).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Fused pericarp/testa, endospermic with Aleurone layer, single shield-shaped Scutellum, Coleoptile (plumule cover), and Coleorhiza (radicle cover).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q74. Detail technical vegetative characters of Family Solanaceae.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Herbs/shrubs, stem herbaceous/woody with underground tuber in potato, leaves alternate, simple/pinnate, exstipulate, reticulate venation.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q75. Detail technical floral characters of Family Solanaceae.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Inflorescence cymose/solitary, flower bisexual, actinomorphic, calyx 5 persistent valvate, corolla 5 valvate, androecium 5 epipetalous, gynoecium 2 superior ovary swollen axile placenta.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q76. Explain economic importance of Solanaceae family with 6 plant examples.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Food (Potato, Tomato, Brinjal), Spice (Chilli), Fumigatory (Tobacco), Medicine (Belladonna, Ashwagandha), Ornamental (Petunia).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q77. Differentiate Liverworts and Ferns.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Liverworts are avascular non-seeded gametophyte-dominant bryophytes; Ferns are vascular spore-bearing sporophyte-dominant pteridophytes.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q78. Explain why Gymnosperms do NOT produce fruits.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Gymnosperms lack ovary walls around ovules; fertilization forms naked seeds without surrounding fruit pericarp.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q79. Describe structure and functions of Stomata in leaves.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Epidermal pores flanked by 2 guard cells regulating gas exchange ($	ext{CO}_2$, $	ext{O}_2$) and transpiration.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q80. Explain Placentation types: Marginal, Axile, Parietal, Free Central, Basal.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Marginal (Pea), Axile (Solanaceae, Citrus), Parietal (Mustard), Free Central (Dianthus), Basal (Sunflower).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q81. Describe Drupe fruit of Coconut.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Monocarpellary superior ovary drupe with fibrous mesocarp (coir) and liquid endosperm (coconut water).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q82. Detail features of Cycas leaves and coralloid roots.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Pinnately compound persistent crown leaves; coralloid roots harbor symbiotic cyanobacteria for nitrogen fixation.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q83. Detail features of Pinus stem, leaves, and mycorrhiza.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Branched stem, needle-like leaves adapted to xerophytic cold conditions, mycorrhizal roots for mineral absorption.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q84. Write scientific names for: Tomato, Brinjal, Chilli, Ashwagandha, Belladonna, Petunia.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      • Tomato: <i>Solanum lycopersicum</i><br>• Brinjal: <i>Solanum melongena</i><br>• Chilli: <i>Capsicum annuum</i><br>• Ashwagandha: <i>Withania somnifera</i><br>• Belladonna: <i>Atropa belladonna</i><br>• Petunia: <i>Petunia hybrida</i>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style='color: #FF9100;'>Q85. Explain significance of Seed Habit evolution in Plant Kingdom.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); border-left: 3px solid #FF9100; padding: 10px 12px; border-radius: 4px;">
      <b style='color: #FF9100;'>Detailed Solution:</b><br>
      Retention of female gametophyte inside megasporangium on parent sporophyte provided nourishment and protection, enabling land colonization.
    </div>
  </div>
  <!-- SECTION D: LONG ANSWER QUESTIONS (Q86 to Q100) -->
  <div style="background: rgba(255, 145, 0, 0.12); border: 1.5px solid #FF9100; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION D: Long Answer Questions (Q86 to Q100)</h2>
    <p style="color: #FF9100; margin: 0; font-size: 14px;">15 Advanced Conceptual & Analytical Questions • 5 Marks Each (Roman Subparts: (i) Theory + (ii) Step Numerical/Morphological Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q86: Plant Kingdom Classification & Algae Classes</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail classification of Algae into Chlorophyceae, Phaeophyceae, and Rhodophyceae with pigments, food, and cell walls.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Chlorophyceae (Chlorophyll a,b; Starch); Phaeophyceae (Fucoxanthin; Laminarin); Rhodophyceae (r-Phycoerythrin; Floridean starch).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Explain economic importance of Algae in food, hydrocolloids, and space research.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Source of Algin, Carrageen, Agar; primary aquatic producers; <i>Chlorella</i> used by space travelers.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q87: Bryophyta & Amphibians of Plant Kingdom</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail general features of Bryophytes. Compare Liverworts (Marchantia) and Mosses (Funaria).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Avascular thalloid land plants dependent on water for fertilization. Liverworts bear gemma cups; Mosses form protonema.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Explain lifecycle of Moss detailing gametophyte, sporophyte, and spore dispersal mechanism.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Haploid spore forms protonema and leafy gametophore; diploid capsule bears peristome teeth for spore dispersal.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q88: Pteridophyta & Vascular Cryptogams Evolution</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail general features of Pteridophytes as first vascular plants. Explain Heterospory and Seed Habit origin.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Vascular tissues present. Heterospory in <i>Selaginella</i> produces microspores and megaspores, originating seed habit.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Classify Pteridophytes into 4 classes giving salient features and examples for each class.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      1. Psilopsida (<i>Psilotum</i>); 2. Lycopsida (<i>Selaginella</i>); 3. Sphenopsida (<i>Equisetum</i>); 4. Pteropsida (<i>Dryopteris</i>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q89: Gymnosperms Architecture & Reproduction</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail features of Gymnosperms. Differentiate Cycas and Pinus morphology and root symbioses.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Naked ovules. <i>Cycas</i> has unbranched stem, coralloid roots with cyanobacteria; <i>Pinus</i> has branched stem, mycorrhiza.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Explain reproduction in Gymnosperms: Male cone, Female cone, Pollen tube, and Seed structure.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Microsporangiate and megasporangiate strobili produce pollen and naked seeds via siphonogamy.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q90: Root & Stem Morphology</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail 4 regions of root tip and compare Tap root, Fibrous root, and Adventitous root systems.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Root cap, Meristematic, Elongation, Maturation regions. Tap root (radicle), Fibrous (stem base), Adventitious (other parts).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Detail morphology of stem and compare Dicot and Monocot stem structures.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Stem bears nodes and internodes; dicot stems have ringed vascular bundles; monocot stems have scattered bundles.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q91: Leaf Morphology, Venation & Phyllotaxy</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail parts of a typical leaf (Leaf Base, Petiole, Lamina) and compare Reticulate and Parallel venation.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Lamina bears veins. Reticulate forms network in dicots; Parallel features straight veins in monocots.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Explain 3 types of Phyllotaxy (Alternate, Opposite, Whorled) with plant examples.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Alternate (China rose), Opposite (Calotropis), Whorled (Alstonia).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q92: Inflorescence Architecture & Types</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail Racemose inflorescence with 4 sub-types and acropetal succession.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Indefinite peduncle growth; older flowers at base, younger at apex.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Detail Cymose inflorescence with 3 sub-types and basipetal succession.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Definite peduncle growth terminating in flower; older flowers at top, younger at base.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q93: Flower Whorls & Symmetry</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail 4 floral whorls (Calyx, Corolla, Androecium, Gynoecium) and flower symmetry (Actinomorphic vs Zygomorphic).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Calyx (sepals), Corolla (petals), Androecium (stamens), Gynoecium (carpels). Radial vs Bilateral.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Detail 4 types of Aestivation (Valvate, Twisted, Imbricate, Vexillary) with diagrams and examples.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Valvate (Mustard), Twisted (China rose), Imbricate (Cassia), Vexillary (Pea).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q94: Ovary Positions & Placentation Types</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Compare Hypogynous (Superior Ovary), Perigynous, and Epigynous (Inferior Ovary) flowers.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Hypogynous (<u>G</u>, Mustard/Solanaceae); Perigynous (Rose); Epigynous (Inferior Ovary, Cucumber).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Detail 5 types of Placentation (Marginal, Axile, Parietal, Free Central, Basal) with examples.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Marginal (Pea), Axile (Solanaceae), Parietal (Mustard), Free Central (Dianthus), Basal (Sunflower).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q95: Fruit & Seed Morphology</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail structure of Drupe fruit in Mango and Coconut.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Mango has edible mesocarp and stony endocarp; Coconut has fibrous coir mesocarp and liquid endosperm.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Compare Dicot seed (Gram/Pea) and Monocot seed (Maize) structural organization.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Dicot seeds have 2 cotyledons and no aleurone layer; Monocot maize seeds have endosperm, Aleurone layer, and Scutellum.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q96: Family Solanaceae Technical Description</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail complete vegetative and floral description of Family Solanaceae.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Herbaceous habit, persistent calyx, epipetalous stamens, bicarpellary superior ovary with swollen axile placentation.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Provide Solanaceae Floral Formula, Floral Diagram explanation, and 6 economically important plants.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Formula: (+) (Bisexual) K(5) C(5) A5 G(2). Plants: Potato, Tomato, Brinjal, Chilli, Tobacco, Ashwagandha.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q97: Comparative Audit of Plant Groups</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Construct comprehensive master table comparing Algae, Bryophytes, Pteridophytes, Gymnosperms, and Angiosperms based on vascular tissue, dominant phase, fertilization, and seeds.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Algae/Bryophytes (avascular); Pteridophytes/Gymnosperms/Angiosperms (vascular). Gametophyte dominant in Bryophytes; Sporophyte dominant in others. Seeds in Gymnosperms/Angiosperms.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Explain evolutionary trends in plant lifecycles from Haplontic (Algae) to Diplontic (Gymnosperms/Angiosperms).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Transition from haploid-dominant haplontic cycle to diploid-dominant diplontic cycle with reduced gametophytes.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q98: Economic Botany: Solanaceae & Gymnosperms</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Detail commercial and agricultural importance of Solanaceae family members.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Staple food tubers (Potato), vegetables (Tomato, Brinjal), spices (Chilli), medicine (Ashwagandha, Belladonna).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Detail industrial importance of Gymnosperms (Timber, Resin, Turpentine, Sago).</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      <i>Pinus</i> yields resin and turpentine; <i>Cedrus</i> yields timber; <i>Cycas</i> yields sago starch.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q99: Morphology of Floral Modifications</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Explain Epipetalous, Epiphyllous, Polyadelphous, Diadelphous, and Syngenesious stamen conditions.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Epipetalous (fused to petals); Epiphyllous (fused to tepals); Diadelphous (9+1 in Pea); Syngenesious (anthers fused).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Explain Monocarpellary, Bicarpellary, Polycarpellary, Apocarpous, and Syncarpous ovary conditions.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      Apocarpous (free carpels in Lotus); Syncarpous (fused carpels in Solanaceae/Mustard).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style='color: #FF9100;'>Q100: Master Synthesis: Unified Kingdom Plantae Framework</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(i) Synthesize complete unified plant classification architecture connecting Plant Groups (Algae to Gymnosperms) ⟶ Plant Morphology (Root, Stem, Leaf, Flower, Fruit, Seed) ⟶ Technical Description of Family Solanaceae.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 8px 12px; border-left: 3px solid #FF9100; margin-bottom: 10px;">
      Kingdom Plantae evolves from aquatic algae to vascular gymnosperms. Morphology establishes organ structures leading to systematic family classification (Solanaceae: (+) (Bisexual) K(5) C(5) A5 G(2)).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style='color: #FF9100;'>(ii) Write complete technical description, floral formula, and economic utility for: (a) Potato Plant, (b) Tomato Plant.</b></p>
    <div style="background: rgba(255, 145, 0, 0.05); padding: 10px 12px; border-left: 3px solid #FF9100;">
      (a) Potato (<i>Solanum tuberosum</i>): Underground stem tuber, Solanaceae floral formula, rich starch food.<br>(b) Tomato (<i>Solanum lycopersicum</i>): Berry fruit, persistent calyx, epipetalous stamens, Solanaceae floral formula.
    </div>
  </div>
</div>
`;
