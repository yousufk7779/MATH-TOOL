// Class 11 Botany Chapter 3 - Plant Anatomy (Tissue Systems, Dicot & Monocot Root, Stem, Leaf)
// High-Level Full Reference Book Content (PW / Vedantu / RD Sharma / Unacademy Standard)

export const c11Bot3HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(224, 64, 251, 0.05); border: 1.5px solid #E040FB; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #E040FB; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: #E040FB; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Chapter 3: Plant Anatomy</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">1. Plant Tissue System:</b> Structural &amp; functional organization of plant cells into Epidermal, Ground, and Vascular systems.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">2. Epidermis:</b> Outermost single layer of living cells covered by a waxy cuticle that minimizes transpiration.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">3. Stomata:</b> Minute epidermal pores flanked by two specialized Guard Cells regulating transpiration and gaseous exchange.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">4. Trichomes:</b> Multicellular epidermal hair extensions on stems that reduce transpiration and prevent herbivory.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">5. Parenchyma:</b> Living, thin-walled, unspecialized simple tissue responsible for photosynthesis, storage, and secretion.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">6. Collenchyma:</b> Living mechanical support tissue with cell wall corners thickened by pectin and cellulose.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">7. Sclerenchyma:</b> Dead mechanical tissue with thick, highly lignified secondary walls comprising Fibers and Sclereids.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">8. Endarch Xylem:</b> Development pattern where Protoxylem lies towards the center (pith) and Metaxylem towards periphery (Stems).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">9. Exarch Xylem:</b> Development pattern where Protoxylem lies towards periphery and Metaxylem towards center (Roots).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">10. Casparian Strips:</b> Suberin-coated band on radial &amp; transverse endodermal cell walls blocking apoplastic water flow.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">11. Radial Vascular Bundle:</b> Xylem and Phloem arranged on separate alternating radii (Roots).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">12. Conjoint Vascular Bundle:</b> Xylem and Phloem present on the same radius (Stems &amp; Leaves).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">13. Open Vascular Bundle:</b> Cambium strip present between xylem and phloem allowing secondary growth (Dicot Stems).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">14. Closed Vascular Bundle:</b> Cambium strip absent; no secondary growth (Monocot Stems &amp; Roots).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">15. Starch Sheath:</b> Endodermal layer in dicot stems containing abundant starch grains.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">16. Lysigenous Water Cavity:</b> Water-containing cavity formed by breakdown of protoxylem in monocot stem bundles.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">17. Mesophyll:</b> Chlorenchymatous ground tissue of leaves between upper &amp; lower epidermis divided into Palisade &amp; Spongy layers in dicots.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB;">18. Bulliform Cells:</b> Large, empty, colorless epidermal cells in grasses that lose turgor to roll leaves inward during drought.
      </div>
    </div>
  </div>


  <!-- EXACT SYLLABUS HEADING WORD-FOR-WORD -->
  <h2 style="color: #E040FB; margin-top: 10px; font-size: 20px; font-weight: bold;">Tissue systems in plants – Epidermal, ground and vascular tissue systems; Anatomy and functions of dicot and monocot root, stem and leaves</h2>
  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRTA0MEZCIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPlBsYW50IFRpc3N1ZSBTeXN0ZW1zIEFyY2hpdGVjdHVyZSAoM0QgU3RydWN0dXJlKTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIEVwaWRlcm1hbCBUaXNzdWUgU3lzdGVtIC0tPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDgpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTEzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBFUElERVJNQUwgU1lTVEVNPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSI1NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9Ijc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGOEJCRDAiPuKAoiBPdXRlciBQcm90ZWN0aXZlIExheWVyPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjEwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlNpbmdsZSBsYXllciBwYXJlbmNoeW1hdG91czwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5XYXh5IEN1dGljbGUgb24gb3V0ZXIgd2FsbDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5QcmV2ZW50cyB3YXRlciB0cmFuc3BpcmF0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIxNzAiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTEwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCI+4oCiIFN0b21hdGFsIEFwcGFyYXR1czwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5HdWFyZCBDZWxsczogS2lkbmV5IChEaWNvdCk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+R3VhcmQgQ2VsbHM6IER1bWJiZWxsIChNb25vY290KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5TdWJzaWRpYXJ5IGNlbGxzIGFyb3VuZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNjlGMEFFIj5SZWd1bGF0ZXMgdHJhbnNwaXJhdGlvbiAmYW1wOyBnYXM8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjI5NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjMxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIj7igKIgQXBwZW5kYWdlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UcmljaG9tZXM6IFN0ZW0gaGFpcnMgKG11bHRpKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Sb290IEhhaXJzOiBVbmljZWxsdWxhciBleHRlbmQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+U2VjcmV0b3J5IC8gU2VjcmV0aW9uIGZ1bmN0aW9uPC90ZXh0PgoKICAgIDwhLS0gMi4gR3JvdW5kIFRpc3N1ZSBTeXN0ZW0gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDcsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4wOCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGOTEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gR1JPVU5EIFNZU1RFTTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI1NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIFBhcmVuY2h5bWE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UaGluIGNlbGx1bG9zaWMgcHJpbWFyeSB3YWxsPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+SXNvZGlhbWV0cmljIGxpdmluZyBjZWxsczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlN0b3JhZ2UsIGFzc2ltaWxhdGlvbiwgcGhvdG9zeW50aGVzaXM8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMTcwIiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjExMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIENvbGxlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGVjdGluIHRoaWNrIGNvcm5lciB3YWxsczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPk1lY2hhbmljYWwgZmxleGliaWxpdHk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5IeXBvZGVybWlzIG9mIGRpY290IHN0ZW1zPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjcyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+TGl2aW5nIG1lY2hhbmljYWwgc3VwcG9ydDwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSIyOTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjIiIHk9IjMxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj7igKIgU2NsZXJlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+SGlnaGx5IGxpZ25pZmllZCBkZWFkIGNlbGxzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzYwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+RmliZXJzICZhbXA7IFNjbGVyZWlkcyAoZ3JpdHR5KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlJpZ2lkIHN0cnVjdHVyYWwgc3VwcG9ydDwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIDMuIFZhc2N1bGFyIFRpc3N1ZSBTeXN0ZW0gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTQsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4wOCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+My4gVkFTQ1VMQVIgU1lTVEVNPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjU1IiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgWHlsZW0gJmFtcDsgUGhsb2VtPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+WHlsZW06IFRyYWNoZWlkcyAmYW1wOyBWZXNzZWxzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGhsb2VtOiBTaWV2ZSBUdWJlICZhbXA7IENvbXBhbmlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPldhdGVyICZhbXA7IGZvb2QgdHJhbnNsb2NhdGlvbjwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSIxNzAiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTEwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE5MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgQnVuZGxlIFR5cGVzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UmFkaWFsOiBTZXBhcmF0ZSByYWRpaSAoUm9vdHMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+Q29uam9pbnQgT3BlbjogQ2FtYml1bSAoU3RlbSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Db25qb2ludCBDbG9zZWQ6IE5vIGNhbWJpdW08L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNjlGMEFFIj5Nb25vY290IHN0ZW0gPSBTY2F0dGVyZWQgY2xvc2VkPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjI5NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiBYeWxlbSBPcmllbnRhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkVuZGFyY2g6IFByb3RveHlsZW0gaW5zaWRlIChTdGVtKTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkV4YXJjaDogUHJvdG94eWxlbSBvdXRzaWRlIChSb290KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkRldmVsb3BtZW50YWwgZGlyZWN0aW9uPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMTUpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UGxhbnQgQW5hdG9teSDinpQgRXBpZGVybWFsICsgR3JvdW5kICsgVmFzY3VsYXIgVGlzc3VlIFN5c3RlbXMgRm9ybSBDb21wbGV0ZSBQbGFudCBBeGlzPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Plant Tissue Systems Architecture" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.1: 3D Plant Tissue Systems Architecture (Epidermal, Ground &amp; Vascular Tissue Systems)</p></div>

  <p>Anatomy of flowering plants involves the microscopic structural organization of plant tissues into three distinct functional tissue systems: the <b>Epidermal Tissue System</b>, the <b>Ground (Fundament) Tissue System</b>, and the <b>Vascular (Conducting) Tissue System</b>. These tissue systems cooperate to provide mechanical support, facilitate water and nutrient transport, and protect plant organs against environmental stress.</p>

  <h3 style="color: #E040FB; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Tissue Systems in Plants: Epidermal, Ground, and Vascular Tissue Systems</h3>
  <p>• <b style="color: #E040FB;">Epidermal Tissue System:</b> Outermost protective envelope of the plant body comprising epidermal cells, stomata, and epidermal appendages.<br>
  - <b style="color: #E040FB;">Cuticle:</b> Thick waxy layer of suberin/cutin coating the outer epidermal wall in stems and leaves to prevent transpiration water loss (absent in roots).<br>
  - <b style="color: #E040FB;">Stomata &amp; Guard Cells:</b> Specialized pores in leaf epidermis regulating gas exchange and transpiration.<br>
  &nbsp;&nbsp;a) <b style="color: #E040FB;">Dicot Guard Cells:</b> Kidney-shaped (reniform) with thick inner walls and thin outer walls.<br>
  &nbsp;&nbsp;b) <b style="color: #E040FB;">Monocot Guard Cells:</b> Dumbbell-shaped with bulbous ends.<br>
  &nbsp;&nbsp;c) <b style="color: #E040FB;">Subsidiary Cells:</b> Specialized epidermal cells surrounding guard cells.<br>
  - <b style="color: #E040FB;">Epidermal Appendages:</b> Extensions of epidermal cells.<br>
  &nbsp;&nbsp;a) <b style="color: #E040FB;">Trichomes:</b> Multicellular stem hairs that reduce water loss and prevent herbivory.<br>
  &nbsp;&nbsp;b) <b style="color: #E040FB;">Root Hairs:</b> Unicellular tubular extensions of epiblema cells that absorb water and minerals from soil.<br><br>
  • <b style="color: #E040FB;">Ground Tissue System:</b> Forms the main bulk of the plant body between epidermis and vascular bundles. Consists of simple tissues:<br>
  - <b style="color: #E040FB;">Parenchyma:</b> Living cells with thin cellulosic walls; active in photosynthesis (chlorenchyma), storage, and secretion.<br>
  - <b style="color: #E040FB;">Collenchyma:</b> Living cells with pectin-thickened corners; provides flexible mechanical strength to young stems.<br>
  - <b style="color: #E040FB;">Sclerenchyma:</b> Dead cells with highly lignified secondary walls (Fibers and Sclereids); provides rigid structural support.<br>
  - <b style="color: #E040FB;">Concentric Zones:</b> Hypodermis, Cortex, Endodermis, Pericycle, Pith, Medullary Rays, and Leaf Mesophyll.<br><br>
  • <b style="color: #E040FB;">Vascular Tissue System:</b> Conducting complex tissues comprising Xylem and Phloem.<br>
  - <b style="color: #E040FB;">Xylem Components:</b> Tracheids, Vessels, Xylem Parenchyma, Xylem Fibers.<br>
  - <b style="color: #E040FB;">Phloem Components:</b> Sieve Tubes, Companion Cells, Phloem Parenchyma, Phloem Fibers.<br>
  - <b style="color: #E040FB;">Primary Xylem Orientation:</b><br>
  &nbsp;&nbsp;a) <b style="color: #E040FB;">Endarch:</b> Protoxylem lies towards center (pith), Metaxylem towards periphery (Stems).<br>
  &nbsp;&nbsp;b) <b style="color: #E040FB;">Exarch:</b> Protoxylem lies towards periphery, Metaxylem towards center (Roots).<br>
  - <b style="color: #E040FB;">Vascular Bundle Arrangements:</b><br>
  &nbsp;&nbsp;a) <b style="color: #E040FB;">Radial Bundles:</b> Xylem and Phloem lie on separate alternating radii (Roots).<br>
  &nbsp;&nbsp;b) <b style="color: #E040FB;">Conjoint Collateral Open Bundles:</b> Xylem &amp; Phloem on same radius with cambium between them (Dicot Stem).<br>
  &nbsp;&nbsp;c) <b style="color: #E040FB;">Conjoint Collateral Closed Bundles:</b> Xylem &amp; Phloem on same radius without cambium (Monocot Stem).<br>
  &nbsp;&nbsp;d) <b style="color: #E040FB;">Bicollateral Bundles:</b> Outer and inner phloem flank central xylem (Solanaceae/Cucurbitaceae).</p>

  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCB2cyBNb25vY290IFJvb3QgJmFtcDsgU3RlbSBDcm9zcy1TZWN0aW9uYWwgQW5hdG9teTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIERpY290IHZzIE1vbm9jb3QgUm9vdCAtLT4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iNDIwIiByeD0iMTQiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjA2KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS4gUm9vdCBBbmF0b215IChEaWNvdCB2cyBNb25vY290KTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTc1IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjI1IiB5PSI3MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPkRpY290IFJvb3QgKGUuZy4gU3VuZmxvd2VyKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgRXBpYmxlbWEgd2l0aCB1bmljZWxsdWxhciByb290IGhhaXJzLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgRW5kb2Rlcm1pcyB3aXRoIHN1YmVyaW4gQ2FzcGFyaWFuIFN0cmlwcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIERpYXJjaCB0byBUZXRyYXJjaCAoMi00KSBSYWRpYWwgRXhhcmNoIGJ1bmRsZXMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjE1NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBJbmNvbnNwaWN1b3VzIHNtYWxsIGNlbnRyYWwgUGl0aC48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTc0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+4oCiIFBlcmljeWNsZSBnaXZlcyByaXNlIHRvIGxhdGVyYWwgcm9vdHMgJmFtcDsgY2FtYml1bS48L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjIzNSIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjUiIHk9IjI1NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPk1vbm9jb3QgUm9vdCAoZS5nLiBNYWl6ZSk6PC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjI3OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBQb2x5YXJjaCAoJmd0OzYpIFJhZGlhbCBFeGFyY2ggVmFzY3VsYXIgQnVuZGxlcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjk5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIExhcmdlLCB3ZWxsLWRldmVsb3BlZCBjZW50cmFsIFBpdGguPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjMxOSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBDYXNwYXJpYW4gc3RyaXBzIHByZXNlbnQgaW4gZW5kb2Rlcm1pcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMzM5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIE5PIGNhbWJpdW0gZm9ybWF0aW9uIOKelCBOTyBzZWNvbmRhcnkgZ3Jvd3RoLjwvdGV4dD4KCiAgICA8IS0tIDIuIERpY290IHZzIE1vbm9jb3QgU3RlbSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3MCwgMCkiPgogICAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQyMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4wNikiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gU3RlbSBBbmF0b215IChEaWNvdCB2cyBNb25vY290KTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzUiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyNSIgeT0iNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj5EaWNvdCBTdGVtIChlLmcuIFN1bmZsb3dlcik6PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgQ29sbGVuY2h5bWF0b3VzIEh5cG9kZXJtaXMuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTE0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIEVuZG9kZXJtaXMgZm9ybXMgU3RhcmNoIFNoZWF0aC48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxMzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgUmluZyBBcnJhbmdlbWVudCBvZiBDb25qb2ludCBDb2xsYXRlcmFsIE9wZW4gYnVuZGxlcy48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgTGFyZ2UgY2VudHJhbCBQaXRoICZhbXA7IE1lZHVsbGFyeSBSYXlzLjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjE3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM2OUYwQUUiPuKAoiBJbnRyYWZhc2NpY3VsYXIgQ2FtYml1bSBwcmVzZW50IChzZWNvbmRhcnkgZ3Jvd3RoKS48L3RleHQ+CgogICAgICA8cmVjdCB4PSIxNSIgeT0iMjM1IiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE3MCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyNTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj5Nb25vY290IFN0ZW0gKGUuZy4gTWFpemUpOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjI3OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBTY2xlcmVuY2h5bWF0b3VzIEh5cG9kZXJtaXMuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjk5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIFVuZGlmZmVyZW50aWF0ZWQgR3JvdW5kIFRpc3N1ZSAobm8gY29ydGV4L3BpdGggc3BsaXQpLjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjMxOSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBTY2F0dGVyZWQgQ29uam9pbnQgQ29sbGF0ZXJhbCBDbG9zZWQgYnVuZGxlcy48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIzMzkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgTHlzaWdlbm91cyBXYXRlciBDYXZpdGllcyBpbnNpZGUgYnVuZGxlcy48L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDQ5NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4xNSkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Sb290czogUmFkaWFsIEV4YXJjaCB8IERpY290IFN0ZW06IFJpbmcgT3BlbiBFbmRhcmNoIHwgTW9ub2NvdCBTdGVtOiBTY2F0dGVyZWQgQ2xvc2VkPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Dicot vs Monocot Root and Stem Anatomy" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.2: 3D Dicot vs Monocot Root &amp; Stem Cross-Sectional Anatomy</p></div>

  <h3 style="color: #E040FB; margin-top: 20px; font-size: 18px; font-weight: bold;">(ii) Anatomy and Functions of Dicot and Monocot Roots</h3>
  <p>• <b style="color: #E040FB;">Dicot Root Anatomy (e.g. Sunflower/Pea):</b><br>
  - <b style="color: #E040FB;">Epiblema:</b> Outermost single layer without cuticle, bearing unicellular root hairs.<br>
  - <b style="color: #E040FB;">Cortex:</b> Multi-layered thin-walled parenchymatous region with intercellular spaces.<br>
  - <b style="color: #E040FB;">Endodermis:</b> Innermost cortical layer featuring suberin-coated <b style="color: #E040FB;">Casparian Strips</b> on radial walls regulating water flow into vascular cylinder.<br>
  - <b style="color: #E040FB;">Pericycle:</b> Thick-walled parenchymatous layer giving rise to lateral roots and secondary vascular cambium.<br>
  - <b style="color: #E040FB;">Vascular Bundles:</b> 2 to 4 (<b style="color: #E040FB;">Diarch to Tetrarch</b>) Radial Exarch xylem and phloem patches separated by conjunctive parenchyma tissue.<br>
  - <b style="color: #E040FB;">Pith:</b> Small or inconspicuous central core.<br><br>
  • <b style="color: #E040FB;">Monocot Root Anatomy (e.g. Maize):</b><br>
  - Features Epiblema, Cortex, Endodermis with Casparian strips, and Pericycle similar to dicots.<br>
  - <b style="color: #E040FB;">Vascular Bundles:</b> More than 6 (<b style="color: #E040FB;">Polyarch</b>) Radial Exarch xylem and phloem bundles.<br>
  - <b style="color: #E040FB;">Pith:</b> Large and well-developed central parenchymatous pith.<br>
  - <b style="color: #E040FB;">Secondary Growth:</b> Complete absence of cambium ➔ No secondary growth.</p>

  <h3 style="color: #E040FB; margin-top: 20px; font-size: 18px; font-weight: bold;">(iii) Anatomy and Functions of Dicot and Monocot Stems</h3>
  <p>• <b style="color: #E040FB;">Dicot Stem Anatomy (e.g. Sunflower):</b><br>
  - <b style="color: #E040FB;">Epidermis:</b> Protective layer with cuticle, stomata, and multicellular trichomes.<br>
  - <b style="color: #E040FB;">Hypodermis:</b> 3-5 layers of <b style="color: #E040FB;">Collenchyma</b> providing mechanical strength and flexibility.<br>
  - <b style="color: #E040FB;">General Cortex:</b> Thin-walled parenchyma cells with intercellular spaces.<br>
  - <b style="color: #E040FB;">Endodermis:</b> Innermost cortical layer rich in starch grains, termed the <b style="color: #E040FB;">Starch Sheath</b>.<br>
  - <b style="color: #E040FB;">Pericycle:</b> Semilunar patches of sclerenchyma above phloem.<br>
  - <b style="color: #E040FB;">Vascular Bundles:</b> Arranged in a distinctive <b style="color: #E040FB;">Ring Arrangement</b>. Each bundle is Conjoint, Collateral, Open, with Endarch primary xylem.<br>
  - <b style="color: #E040FB;">Pith &amp; Medullary Rays:</b> Large central parenchymatous pith with radial medullary rays connecting pith to cortex.<br><br>
  • <b style="color: #E040FB;">Monocot Stem Anatomy (e.g. Maize):</b><br>
  - <b style="color: #E040FB;">Epidermis:</b> Covered with cuticle; lacks trichomes.<br>
  - <b style="color: #E040FB;">Hypodermis:</b> 2-3 layers of rigid <b style="color: #E040FB;">Sclerenchyma</b>.<br>
  - <b style="color: #E040FB;">Ground Tissue:</b> Undifferentiated mass of parenchyma extending from hypodermis to center (no distinct cortex/pith split).<br>
  - <b style="color: #E040FB;">Vascular Bundles:</b> Numerous <b style="color: #E040FB;">Scattered Vascular Bundles</b> throughout ground tissue (peripheral bundles smaller and closer, central bundles larger).<br>
  - <b style="color: #E040FB;">Bundle Structure:</b> Conjoint, Collateral, Closed (no cambium). Enclosed by sclerenchymatous bundle sheath.<br>
  - <b style="color: #E040FB;">Lysigenous Water Cavity:</b> Water-containing cavity inside protoxylem formed by cell breakdown.</p>

  <div style="text-align: center; margin: 24px 0;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCAoRG9yc2l2ZW50cmFsKSB2cyBNb25vY290IChJc29iaWxhdGVyYWwpIExlYWYgQW5hdG9teTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIERvcnNpdmVudHJhbCBEaWNvdCBMZWFmIC0tPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MjAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBEaWNvdCAoRG9yc2l2ZW50cmFsKSBMZWFmPC90ZXh0PgoKICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIzNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjUiIHk9Ijc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIEVwaWRlcm1pcyAmYW1wOyBTdG9tYXRhOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSI5NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgRGlzdGluY3QgVXBwZXIgKEFkYXhpYWwpICZhbXA7IExvd2VyIChBYmF4aWFsKSBlcGlkZXJtaXMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjExNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgSHlwb3N0b21hdG91czogU3RvbWF0YSBwcmVzZW50IG1vc3RseSBvbiBsb3dlciBzdXJmYWNlLjwvdGV4dD4KCiAgICA8dGV4dCB4PSIyNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIERpZmZlcmVudGlhdGVkIE1lc29waHlsbDo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTY3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICAxLiBQYWxpc2FkZSBQYXJlbmNoeW1hOiBFbG9uZ2F0ZWQgY29sdW1uYXIgY2VsbHMgb248L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTg3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICAgICBhZGF4aWFsIHNpZGUgd2l0aCBhYnVuZGFudCBjaGxvcm9wbGFzdHMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIwNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgMi4gU3Bvbmd5IFBhcmVuY2h5bWE6IExvb3NlIHNwaGVyaWNhbCBjZWxscyB3aXRoPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIyNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgICAgbGFyZ2UgYWlyIGNhdml0aWVzIGZvciBnYXMgZXhjaGFuZ2UuPC90ZXh0PgoKICAgIDx0ZXh0IHg9IjI1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj7igKIgVmFzY3VsYXIgU3lzdGVtICZhbXA7IFZlbmF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyNzciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFZhc2N1bGFyIGJ1bmRsZXMgZW5jbG9zZWQgYnkgcGFyZW5jaHltYXRvdXM8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjk3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBCdW5kbGUgU2hlYXRoLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIzMTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFJldGljdWxhdGUgVmVuYXRpb24g4p6UIFZhcmlhYmxlIGJ1bmRsZSBzaXplcy48L3RleHQ+CgogICAgPCEtLSAyLiBJc29iaWxhdGVyYWwgTW9ub2NvdCBMZWFmIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iNDIwIiByeD0iMTQiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjA2KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLiBNb25vY290IChJc29iaWxhdGVyYWwpIExlYWY8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxNSIgeT0iNTAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMzUwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjUiIHk9Ijc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIEVwaWRlcm1pcyAmYW1wOyBTdG9tYXRhOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9Ijk3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBTdG9tYXRhIGVxdWFsIG9uIGJvdGggYWRheGlhbCBhbmQgYWJheGlhbCBzdXJmYWNlczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjExNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgKEFtcGhpc3RvbWF0b3VzKS48L3RleHQ+CgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIFVuZGlmZmVyZW50aWF0ZWQgTWVzb3BoeWxsOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjE2NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgTWVzb3BoeWxsIG5vdCBkaWZmZXJlbnRpYXRlZCBpbnRvIHBhbGlzYWRlL3Nwb25neS48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFVuaWZvcm0gcm91bmRlZCBjaGxvcmVuY2h5bWF0b3VzIGNlbGxzLjwvdGV4dD4KCiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj7igKIgQnVsbGlmb3JtIE1vdG9yIENlbGxzIChHcmFzc2VzKTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMzciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIExhcmdlLCBlbXB0eSwgY29sb3JsZXNzIGVwaWRlcm1hbCBjZWxscyBvbiBhZGF4aWFsIHNpZGUuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjU3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBUdXJnb3IgbG9zcyBkdXJpbmcgZHJvdWdodCBjYXVzZXMgbGVhZiByb2xsaW5nIHRvPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjc3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+ICBtaW5pbWl6ZSB0cmFuc3BpcmF0aW9uIHdhdGVyIGxvc3MhPC90ZXh0PgoKICAgICAgPHRleHQgeD0iMjUiIHk9IjMwNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPuKAoiBQYXJhbGxlbCBWZW5hdGlvbjo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIzMjciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIE5lYXJseSBzaW1pbGFyLXNpemVkIHZhc2N1bGFyIGJ1bmRsZXMuPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMTUpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGljb3QgTGVhZjogUGFsaXNhZGUvU3Bvbmd5IE1lc29waHlsbCB8IE1vbm9jb3QgTGVhZjogQnVsbGlmb3JtIENlbGxzICZhbXA7IFBhcmFsbGVsIFZlaW5zPC90ZXh0PgogIDwvZz4KPC9zdmc+" style="width: 100%; max-width: 650px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 22px rgba(224, 64, 251, 0.4); border: 2px solid #E040FB;" alt="3D Dicot vs Monocot Leaf Anatomy" /><p style="color: #E040FB; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 3.3: 3D Dicot (Dorsiventral) vs Monocot (Isobilateral) Leaf Anatomy &amp; Bulliform Cells</p></div>

  <h3 style="color: #E040FB; margin-top: 20px; font-size: 18px; font-weight: bold;">(iv) Anatomy and Functions of Dicot (Dorsiventral) and Monocot (Isobilateral) Leaves</h3>
  <p>• <b style="color: #E040FB;">Dicot (Dorsiventral) Leaf Anatomy (e.g. Sunflower/Mango):</b><br>
  - <b style="color: #E040FB;">Epidermis:</b> Covers both Adaxial (upper) and Abaxial (lower) surfaces. <b style="color: #E040FB;">Hypostomatous:</b> Stomata restricted mostly to lower abaxial surface.<br>
  - <b style="color: #E040FB;">Mesophyll:</b> Chlorenchymatous photosynthetic tissue differentiated into:<br>
  &nbsp;&nbsp;a) <b style="color: #E040FB;">Palisade Parenchyma:</b> Adaxially placed elongated columnar cells packed vertically with abundant chloroplasts.<br>
  &nbsp;&nbsp;b) <b style="color: #E040FB;">Spongy Parenchyma:</b> Abaxially placed loose spherical cells with prominent air cavities facilitating gas exchange.<br>
  - <b style="color: #E040FB;">Vascular System:</b> Bundles surrounded by a layer of thick-walled parenchymatous <b style="color: #E040FB;">Bundle Sheath</b>. Reticulate venation results in variable bundle sizes.<br><br>
  • <b style="color: #E040FB;">Monocot (Isobilateral) Leaf Anatomy (e.g. Grass/Maize):</b><br>
  - <b style="color: #E040FB;">Epidermis:</b> Equal distribution of stomata on both adaxial and abaxial surfaces (<b style="color: #E040FB;">Amphistomatous</b>).<br>
  - <b style="color: #E040FB;">Mesophyll:</b> Undifferentiated uniform rounded chlorenchyma cells (no palisade/spongy split).<br>
  - <b style="color: #E040FB;">Bulliform Cells (Motor Cells):</b> Large, empty, colorless epidermal cells present along adaxial veins in grasses. During water stress/drought, bulliform cells lose turgor and cause leaves to roll inward, reducing exposed surface area and minimizing transpiration water loss.<br>
  - <b style="color: #E040FB;">Venation:</b> Parallel venation results in nearly uniform-sized vascular bundles.</p>


  <!-- BOTTOM CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.15), rgba(156, 39, 176, 0.15)); border: 1.5px solid #E040FB; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #E040FB; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Chapter 3 Plant Anatomy Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b style="color: #E040FB;">Tissue Systems:</b> Epidermal (Cuticle, Stomata, Trichomes) | Ground (Parenchyma, Collenchyma, Sclerenchyma) | Vascular (Xylem &amp; Phloem).</li>
      <li><b style="color: #E040FB;">Stomata Guard Cells:</b> Dicot = Kidney-shaped | Monocot = Dumbbell-shaped.</li>
      <li><b style="color: #E040FB;">Primary Xylem Orientation:</b> Stem = Endarch (Protoxylem inside) | Root = Exarch (Protoxylem outside).</li>
      <li><b style="color: #E040FB;">Root Anatomy:</b> Dicot = Diarch-Tetrarch, small pith | Monocot = Polyarch (&gt;6), large pith, Casparian strips in endodermis.</li>
      <li><b style="color: #E040FB;">Stem Anatomy:</b> Dicot = Collenchyma hypodermis, Ring Open bundles | Monocot = Sclerenchyma hypodermis, Scattered Closed bundles + Lysigenous cavity.</li>
      <li><b style="color: #E040FB;">Leaf Anatomy:</b> Dicot = Dorsiventral (Palisade/Spongy mesophyll) | Monocot = Isobilateral (Bulliform cells, uniform mesophyll).</li>
    </ul>
  </div>

</div>
`;

export const c11Bot3HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- SECTION A: OBJECTIVE & MCQS (25 Questions) -->
  <div style="background: rgba(224, 64, 251, 0.12); border: 1.5px solid #E040FB; border-radius: 10px; padding: 14px; margin-bottom: 20px;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION A: Objective & Multiple Choice Questions (Q1 to Q25)</h2>
    <p style="color: #E040FB; margin: 0; font-size: 14px;">25 Expected MCQs • 1 Mark Each (18 Conceptual Theory + 7 Anatomical Identification)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q1. Which tissue system includes epidermis, guard cells, trichomes, and root hairs?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Ground Tissue System &nbsp;&nbsp;&nbsp;&nbsp; (B) Epidermal Tissue System<br>
      (C) Vascular Tissue System &nbsp;&nbsp;&nbsp;&nbsp; (D) Meristematic System
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Epidermal Tissue System</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> The epidermal tissue system forms the outermost protective envelope of plant organs.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q2. Guard cells in monocot grasses (e.g. Maize, Wheat) are typically:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Kidney-shaped &nbsp;&nbsp;&nbsp;&nbsp; (B) Dumbbell-shaped<br>
      (C) Spherical &nbsp;&nbsp;&nbsp;&nbsp; (D) Triangular
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Dumbbell-shaped</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot guard cells are uniquely dumbbell-shaped with bulbous ends.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q3. Unicellular extensions of epiblema cells in roots that absorb water are:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Trichomes &nbsp;&nbsp;&nbsp;&nbsp; (B) Root Hairs<br>
      (C) Stomata &nbsp;&nbsp;&nbsp;&nbsp; (D) Bulliform cells
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Root Hairs</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Root hairs are unicellular tubular projections of epiblema.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q4. The primary xylem orientation in stems where protoxylem lies towards the center is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Exarch &nbsp;&nbsp;&nbsp;&nbsp; (B) Endarch<br>
      (C) Mesarch &nbsp;&nbsp;&nbsp;&nbsp; (D) Centripetal
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Endarch</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Stems exhibit endarch xylem development with protoxylem facing the central pith.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q5. The primary xylem orientation in roots where protoxylem lies towards the periphery is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Endarch &nbsp;&nbsp;&nbsp;&nbsp; (B) Exarch<br>
      (C) Mesarch &nbsp;&nbsp;&nbsp;&nbsp; (D) Centrifugal
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Exarch</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Roots exhibit exarch xylem arrangement with protoxylem at the outer boundary.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q6. Suberin-coated waxy bands present on radial walls of endodermal cells are called:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Starch Sheaths &nbsp;&nbsp;&nbsp;&nbsp; (B) Casparian Strips<br>
      (C) Bundle Sheaths &nbsp;&nbsp;&nbsp;&nbsp; (D) Trichomes
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Casparian Strips</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Casparian strips prevent apoplastic movement of water across the endodermis.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q7. Vascular bundles arranged on separate alternating radii are classified as:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Conjoint Bundles &nbsp;&nbsp;&nbsp;&nbsp; (B) Radial Bundles<br>
      (C) Bicollateral Bundles &nbsp;&nbsp;&nbsp;&nbsp; (D) Closed Bundles
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Radial Bundles</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Radial bundles have xylem and phloem on separate alternating radii, characteristic of roots.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q8. A vascular bundle containing intrafascicular cambium between xylem and phloem is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Conjoint Closed &nbsp;&nbsp;&nbsp;&nbsp; (B) Conjoint Open<br>
      (C) Radial &nbsp;&nbsp;&nbsp;&nbsp; (D) Concentric
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Conjoint Open</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Open vascular bundles possess cambium capable of producing secondary tissues in dicot stems.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q9. Monocot stems feature vascular bundles that are:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Arranged in a ring and open &nbsp;&nbsp;&nbsp;&nbsp; (B) Scattered and closed<br>
      (C) Radial and exarch &nbsp;&nbsp;&nbsp;&nbsp; (D) Bicollateral and open
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Scattered and closed</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot stems feature numerous scattered conjoint collateral closed bundles without cambium.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q10. The hypodermis of dicot stems is composed of which supportive living tissue?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Parenchyma &nbsp;&nbsp;&nbsp;&nbsp; (B) Collenchyma<br>
      (C) Sclerenchyma &nbsp;&nbsp;&nbsp;&nbsp; (D) Aerenchyma
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Collenchyma</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dicot stem hypodermis consists of collenchyma cells with pectin-thickened wall corners.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q11. The hypodermis of monocot stems is composed of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Collenchyma &nbsp;&nbsp;&nbsp;&nbsp; (B) Sclerenchyma<br>
      (C) Parenchyma &nbsp;&nbsp;&nbsp;&nbsp; (D) Chlorenchyma
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Sclerenchyma</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot stem hypodermis consists of 2-3 layers of rigid sclerenchyma.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q12. In dicot stems, the innermost layer of cortex rich in starch grains is called the:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Casparian Strip &nbsp;&nbsp;&nbsp;&nbsp; (B) Starch Sheath<br>
      (C) Pericycle &nbsp;&nbsp;&nbsp;&nbsp; (D) Epiblema
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Starch Sheath</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> The endodermis in dicot stems stores abundant starch, forming the starch sheath.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q13. Water-containing cavities inside protoxylem of monocot stem vascular bundles are:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Schizogenous Cavities &nbsp;&nbsp;&nbsp;&nbsp; (B) Lysigenous Water Cavities<br>
      (C) Resin Ducts &nbsp;&nbsp;&nbsp;&nbsp; (D) Laticifers
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Lysigenous Water Cavities</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Disintegration of protoxylem vessels forms lysigenous water cavities in monocot stem bundles.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q14. Dicot leaves with distinct palisade and spongy mesophyll are described as:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Isobilateral Leaves &nbsp;&nbsp;&nbsp;&nbsp; (B) Dorsiventral Leaves<br>
      (C) Xerophytic Leaves &nbsp;&nbsp;&nbsp;&nbsp; (D) Centric Leaves
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Dorsiventral Leaves</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dorsiventral leaves feature distinct upper adaxial and lower abaxial sides with differentiated mesophyll.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q15. Monocot leaves with equal stomatal distribution on both surfaces are:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Hypostomatous &nbsp;&nbsp;&nbsp;&nbsp; (B) Amphistomatous<br>
      (C) Epistomatous &nbsp;&nbsp;&nbsp;&nbsp; (D) Astomatous
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Amphistomatous</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Isobilateral monocot leaves bear stomata on both surfaces (amphistomatous).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q16. Large, empty, colorless epidermal cells in grass leaves responsible for leaf rolling during drought are:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Guard Cells &nbsp;&nbsp;&nbsp;&nbsp; (B) Subsidiary Cells<br>
      (C) Bulliform Cells &nbsp;&nbsp;&nbsp;&nbsp; (D) Trichomes
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Bulliform Cells</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Bulliform motor cells lose turgor in water stress, causing leaves to roll inward.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q17. Number of xylem patches in a typical Dicot Root is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Polyarch (>6) &nbsp;&nbsp;&nbsp;&nbsp; (B) Diarch to Tetrarch (2-4)<br>
      (C) Monarch (1) &nbsp;&nbsp;&nbsp;&nbsp; (D) Octarch (8)
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Diarch to Tetrarch (2-4)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Dicot roots typically possess 2 to 4 radial xylem and phloem patches.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q18. Number of xylem patches in a typical Monocot Root is:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Diarch (2) &nbsp;&nbsp;&nbsp;&nbsp; (B) Tetrarch (4)<br>
      (C) Polyarch (>6) &nbsp;&nbsp;&nbsp;&nbsp; (D) Triarch (3)
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Polyarch (>6)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Monocot roots possess numerous radial vascular bundles (polyarch condition).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q19. Conjunctive tissue present between xylem and phloem in roots is composed of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Sclerenchyma &nbsp;&nbsp;&nbsp;&nbsp; (B) Parenchyma<br>
      (C) Collenchyma &nbsp;&nbsp;&nbsp;&nbsp; (D) Xylem Vessels
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Parenchyma</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Parenchymatous conjunctive tissue lies between xylem and phloem in roots.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q20. Which plant organ lacks a waxy cuticle on its outermost epidermal layer?</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Dicot Stem &nbsp;&nbsp;&nbsp;&nbsp; (B) Monocot Leaf<br>
      (C) Root (Epiblema) &nbsp;&nbsp;&nbsp;&nbsp; (D) Dicot Leaf
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Root (Epiblema)</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Epiblema of roots lacks cuticle to allow uninterrupted water absorption.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q21. Sclerenchymatous fibers in plant tissues are characterized by:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Thin primary walls &nbsp;&nbsp;&nbsp;&nbsp; (B) Pectin corners<br>
      (C) Lignified dead secondary walls &nbsp;&nbsp;&nbsp;&nbsp; (D) Abundant cytoplasm
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (C) Lignified dead secondary walls</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Sclerenchyma fibers are dead cells with thick lignified walls.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q22. Chlorenchyma is a specialized form of parenchyma containing:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Lignin &nbsp;&nbsp;&nbsp;&nbsp; (B) Chloroplasts<br>
      (C) Pectin &nbsp;&nbsp;&nbsp;&nbsp; (D) Suberin
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Chloroplasts</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Parenchyma cells containing chloroplasts for photosynthesis are termed chlorenchyma.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q23. Reticulate venation in dicot leaves results in vascular bundles of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Uniform sizes &nbsp;&nbsp;&nbsp;&nbsp; (B) Variable sizes<br>
      (C) Microscopic size only &nbsp;&nbsp;&nbsp;&nbsp; (D) Concentric pattern
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Variable sizes</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Vein branching in reticulate venation produces vascular bundles of varying sizes.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q24. Parallel venation in monocot leaves results in vascular bundles of:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Variable sizes &nbsp;&nbsp;&nbsp;&nbsp; (B) Nearly uniform sizes<br>
      (C) Random sizes &nbsp;&nbsp;&nbsp;&nbsp; (D) Circular arrangement
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Nearly uniform sizes</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Parallel veins in monocot leaves contain vascular bundles of similar dimensions.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><b style="color: #E040FB;">Q25. In a dicot stem, medullary rays connect the central pith to the:</b></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Epidermis &nbsp;&nbsp;&nbsp;&nbsp; (B) Cortex<br>
      (C) Cuticle &nbsp;&nbsp;&nbsp;&nbsp; (D) Trichome
    </div>
    <div style="background: rgba(224, 64, 251, 0.15); border-left: 3.5px solid #E040FB; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <b style="color: #E040FB;">✓ Answer: (B) Cortex</b><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Radially placed parenchymatous medullary rays extend between vascular bundles connecting pith to cortex.</span>
    </div>
  </div>
  <!-- SECTION B: VERY SHORT ANSWER QUESTIONS (Q26 to Q55) -->
  <div style="background: rgba(224, 64, 251, 0.12); border: 1.5px solid #E040FB; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION B: Very Short Answer Questions (Q26 to Q55)</h2>
    <p style="color: #E040FB; margin: 0; font-size: 14px;">30 Expected VSA Questions • 2 Marks Each (22 Conceptual Theory + 8 Anatomical Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q26. Name the 3 tissue systems in flowering plants.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      1. Epidermal Tissue System, 2. Ground (Fundament) Tissue System, 3. Vascular (Conducting) Tissue System.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q27. State function of waxy Cuticle on epidermis.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Prevents water loss through transpiration and protects plant organs from physical injury and pathogens.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q28. Differentiate Guard Cells in dicots and monocots.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Dicot Guard Cells:</b> Kidney-shaped (reniform).<br><b style='color: #E040FB;'>Monocot Guard Cells:</b> Dumbbell-shaped.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q29. Define Stomatal Apparatus.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      The stomatal pore, two surrounding guard cells, and adjacent specialized subsidiary cells together form the stomatal apparatus.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q30. What are Trichomes? State their function.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Multicellular epidermal hairs on stems that prevent transpiration water loss and deter herbivores.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q31. Differentiate Root Hairs and Trichomes.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Root Hairs:</b> Unicellular epiblema extensions for water absorption.<br><b style='color: #E040FB;'>Trichomes:</b> Multicellular stem hairs.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q32. Name 3 simple permanent tissues composing Ground Tissue.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      1. Parenchyma, 2. Collenchyma, 3. Sclerenchyma.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q33. State key structural feature of Collenchyma cell walls.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Cell wall corners are heavily thickened with pectin, cellulose, and hemicellulose for flexible support.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q34. Differentiate Fibers and Sclereids in Sclerenchyma.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Fibers:</b> Elongated pointed dead cells.<br><b style='color: #E040FB;'>Sclereids:</b> Spherical/oval gritty thick-walled dead cells.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q35. Define Endarch Xylem and give an example.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Protoxylem lies towards center (pith) and metaxylem towards periphery.<br><b style='color: #E040FB;'>Example:</b> Stems.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q36. Define Exarch Xylem and give an example.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Protoxylem lies towards periphery and metaxylem towards center.<br><b style='color: #E040FB;'>Example:</b> Roots.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q37. Define Radial Vascular Bundle.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Xylem and Phloem arranged on separate alternating radii along the root axis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q38. Define Conjoint Open Vascular Bundle.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Xylem and Phloem present on the same radius with an active cambium strip between them (Dicot Stems).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q39. Define Conjoint Closed Vascular Bundle.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Xylem and Phloem present on the same radius without cambium (Monocot Stems).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q40. What are Casparian Strips? State their chemical composition.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Suberin-coated waxy bands on endodermal cell walls blocking apoplastic water flow in roots.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q41. Compare xylem condition in Dicot Root vs Monocot Root.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Dicot Root:</b> Diarch to Tetrarch (2-4 xylem patches).<br><b style='color: #E040FB;'>Monocot Root:</b> Polyarch (>6 xylem patches).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q42. Compare Pith in Dicot Root vs Monocot Root.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Dicot Root:</b> Small or inconspicuous.<br><b style='color: #E040FB;'>Monocot Root:</b> Large and well-developed.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q43. What is Starch Sheath in dicot stem?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Innermost cortical layer (endodermis) containing abundant starch grains.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q44. Describe vascular bundle arrangement in Dicot Stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Conjoint, collateral, open bundles arranged in a distinct concentric Ring.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q45. Describe hypodermis in Dicot Stem vs Monocot Stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Dicot Stem:</b> Collenchymatous.<br><b style='color: #E040FB;'>Monocot Stem:</b> Sclerenchymatous.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q46. Describe ground tissue in Monocot Stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Undifferentiated parenchymatous mass extending throughout stem with no cortex/pith division.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q47. What is Lysigenous Water Cavity?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Water-containing cavity formed by breakdown of inner protoxylem vessels in monocot stem bundles.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q48. Define Dorsiventral Leaf and give an example.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Leaf with distinct adaxial/abaxial surfaces and mesophyll split into palisade & spongy layers.<br><b style='color: #E040FB;'>Example:</b> Sunflower.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q49. Define Isobilateral Leaf and give an example.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Leaf with identical adaxial/abaxial surfaces and uniform mesophyll.<br><b style='color: #E040FB;'>Example:</b> Maize/Grass.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q50. Differentiate Hypostomatous and Amphistomatous leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      <b style='color: #E040FB;'>Hypostomatous:</b> Stomata mostly on lower surface (Dicot).<br><b style='color: #E040FB;'>Amphistomatous:</b> Stomata equal on both surfaces (Monocot).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q51. Describe Palisade Parenchyma in dicot leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Elongated columnar cells placed vertically below upper adaxial epidermis with dense chloroplasts.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q52. Describe Spongy Parenchyma in dicot leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Loosely arranged spherical cells above lower abaxial epidermis with large intercellular air spaces.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q53. What are Bulliform Cells? State their function.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Large, empty epidermal cells in grasses that lose turgor to roll leaves inward, minimizing transpiration during drought.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q54. Why are vascular bundles variable in size in dicot leaves?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Reticulate venation features main midrib vein and branching veinlets of varying diameters.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q55. Why are vascular bundles similar in size in monocot leaves?</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Answer:</b><br>
      Parallel venation features parallel veins of nearly identical thickness.
    </div>
  </div>
  <!-- SECTION C: SHORT ANSWER QUESTIONS (Q56 to Q85) -->
  <div style="background: rgba(224, 64, 251, 0.12); border: 1.5px solid #E040FB; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION C: Short Answer Questions (Q56 to Q85)</h2>
    <p style="color: #E040FB; margin: 0; font-size: 14px;">30 Expected SA Questions • 3 Marks Each (22 Conceptual Theory + 8 Anatomical Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q56. Detail Plant Tissue Systems architecture with 3D diagram.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Plant axis consists of Epidermal (protection), Ground (fundament), and Vascular (conduction) tissue systems.<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGZpbHRlciBpZD0iZ2xvdyI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSI0IiBzdGREZXZpYXRpb249IjYiIGZsb29kLWNvbG9yPSIjRTA0MEZCIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDEpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPlBsYW50IFRpc3N1ZSBTeXN0ZW1zIEFyY2hpdGVjdHVyZSAoM0QgU3RydWN0dXJlKTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIEVwaWRlcm1hbCBUaXNzdWUgU3lzdGVtIC0tPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDgpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTEzIiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBFUElERVJNQUwgU1lTVEVNPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSI1NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9Ijc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGOEJCRDAiPuKAoiBPdXRlciBQcm90ZWN0aXZlIExheWVyPC90ZXh0PgogICAgPHRleHQgeD0iMjIiIHk9IjEwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlNpbmdsZSBsYXllciBwYXJlbmNoeW1hdG91czwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5XYXh5IEN1dGljbGUgb24gb3V0ZXIgd2FsbDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5QcmV2ZW50cyB3YXRlciB0cmFuc3BpcmF0aW9uPC90ZXh0PgoKICAgIDxyZWN0IHg9IjEyIiB5PSIxNzAiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTEwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjIyIiB5PSIxOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCI+4oCiIFN0b21hdGFsIEFwcGFyYXR1czwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5HdWFyZCBDZWxsczogS2lkbmV5IChEaWNvdCk8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+R3VhcmQgQ2VsbHM6IER1bWJiZWxsIChNb25vY290KTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5TdWJzaWRpYXJ5IGNlbGxzIGFyb3VuZDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIyNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNjlGMEFFIj5SZWd1bGF0ZXMgdHJhbnNwaXJhdGlvbiAmYW1wOyBnYXM8L3RleHQ+CgogICAgPHJlY3QgeD0iMTIiIHk9IjI5NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjIiIHk9IjMxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIj7igKIgQXBwZW5kYWdlczwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UcmljaG9tZXM6IFN0ZW0gaGFpcnMgKG11bHRpKTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Sb290IEhhaXJzOiBVbmljZWxsdWxhciBleHRlbmQ8L3RleHQ+CiAgICA8dGV4dCB4PSIyMiIgeT0iMzgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+U2VjcmV0b3J5IC8gU2VjcmV0aW9uIGZ1bmN0aW9uPC90ZXh0PgoKICAgIDwhLS0gMi4gR3JvdW5kIFRpc3N1ZSBTeXN0ZW0gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDcsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyNTUsMTQ1LDAsMC4wOCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGOTEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gR1JPVU5EIFNZU1RFTTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSI1NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNGRjkxMDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iNzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIFBhcmVuY2h5bWE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5UaGluIGNlbGx1bG9zaWMgcHJpbWFyeSB3YWxsPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+SXNvZGlhbWV0cmljIGxpdmluZyBjZWxsczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlN0b3JhZ2UsIGFzc2ltaWxhdGlvbiwgcGhvdG9zeW50aGVzaXM8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxMiIgeT0iMTcwIiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjExMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0ZGOTEwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIxOTMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRDE4MCI+4oCiIENvbGxlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGVjdGluIHRoaWNrIGNvcm5lciB3YWxsczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPk1lY2hhbmljYWwgZmxleGliaWxpdHk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5IeXBvZGVybWlzIG9mIGRpY290IHN0ZW1zPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjcyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+TGl2aW5nIG1lY2hhbmljYWwgc3VwcG9ydDwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSIyOTUiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRkY5MTAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjIiIHk9IjMxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZEMTgwIj7igKIgU2NsZXJlbmNoeW1hPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+SGlnaGx5IGxpZ25pZmllZCBkZWFkIGNlbGxzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzYwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+RmliZXJzICZhbXA7IFNjbGVyZWlkcyAoZ3JpdHR5KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPlJpZ2lkIHN0cnVjdHVyYWwgc3VwcG9ydDwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIDMuIFZhc2N1bGFyIFRpc3N1ZSBTeXN0ZW0gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTQsIDApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIyNiIgaGVpZ2h0PSI0MTAiIHJ4PSIxNCIgZmlsbD0icmdiYSgwLDIzMCwxMTgsMC4wOCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjExMyIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwRTY3NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+My4gVkFTQ1VMQVIgU1lTVEVNPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjU1IiB3aWR0aD0iMjAyIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iIzAwRTY3NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSI3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgWHlsZW0gJmFtcDsgUGhsb2VtPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+WHlsZW06IFRyYWNoZWlkcyAmYW1wOyBWZXNzZWxzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMTIwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UGhsb2VtOiBTaWV2ZSBUdWJlICZhbXA7IENvbXBhbmlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPldhdGVyICZhbXA7IGZvb2QgdHJhbnNsb2NhdGlvbjwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjEyIiB5PSIxNzAiIHdpZHRoPSIyMDIiIGhlaWdodD0iMTEwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjMDBFNjc2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjIiIHk9IjE5MyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNjlGMEFFIj7igKIgQnVuZGxlIFR5cGVzPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjE1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+UmFkaWFsOiBTZXBhcmF0ZSByYWRpaSAoUm9vdHMpPC90ZXh0PgogICAgICA8dGV4dCB4PSIyMiIgeT0iMjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+Q29uam9pbnQgT3BlbjogQ2FtYml1bSAoU3RlbSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj5Db25qb2ludCBDbG9zZWQ6IE5vIGNhbWJpdW08L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyIiB5PSIyNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNjlGMEFFIj5Nb25vY290IHN0ZW0gPSBTY2F0dGVyZWQgY2xvc2VkPC90ZXh0PgoKICAgICAgPHJlY3QgeD0iMTIiIHk9IjI5NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiMwMEU2NzYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMiIgeT0iMzE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2OUYwQUUiPuKAoiBYeWxlbSBPcmllbnRhdGlvbjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkVuZGFyY2g6IFByb3RveHlsZW0gaW5zaWRlIChTdGVtKTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkV4YXJjaDogUHJvdG94eWxlbSBvdXRzaWRlIChSb290KTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjIiIHk9IjM4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPkRldmVsb3BtZW50YWwgZGlyZWN0aW9uPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMTUpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UGxhbnQgQW5hdG9teSDinpQgRXBpZGVybWFsICsgR3JvdW5kICsgVmFzY3VsYXIgVGlzc3VlIFN5c3RlbXMgRm9ybSBDb21wbGV0ZSBQbGFudCBBeGlzPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #E040FB;' alt='Tissue Systems' /><p style='color: #E040FB; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q56: 3D Plant Tissue Systems Architecture</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q57. Compare Dicot and Monocot Root & Stem cross-sections with 3D diagram.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Dicot root (diarch-tetrarch), monocot root (polyarch, large pith); Dicot stem (ring open bundles), monocot stem (scattered closed bundles).<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDIpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCB2cyBNb25vY290IFJvb3QgJmFtcDsgU3RlbSBDcm9zcy1TZWN0aW9uYWwgQW5hdG9teTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIERpY290IHZzIE1vbm9jb3QgUm9vdCAtLT4KICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iNDIwIiByeD0iMTQiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjA2KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS4gUm9vdCBBbmF0b215IChEaWNvdCB2cyBNb25vY290KTwvdGV4dD4KCiAgICA8cmVjdCB4PSIxNSIgeT0iNTAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTc1IiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjI1IiB5PSI3MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPkRpY290IFJvb3QgKGUuZy4gU3VuZmxvd2VyKTo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgRXBpYmxlbWEgd2l0aCB1bmljZWxsdWxhciByb290IGhhaXJzLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIxMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgRW5kb2Rlcm1pcyB3aXRoIHN1YmVyaW4gQ2FzcGFyaWFuIFN0cmlwcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTM0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIERpYXJjaCB0byBUZXRyYXJjaCAoMi00KSBSYWRpYWwgRXhhcmNoIGJ1bmRsZXMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjE1NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBJbmNvbnNwaWN1b3VzIHNtYWxsIGNlbnRyYWwgUGl0aC48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTc0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+4oCiIFBlcmljeWNsZSBnaXZlcyByaXNlIHRvIGxhdGVyYWwgcm9vdHMgJmFtcDsgY2FtYml1bS48L3RleHQ+CgogICAgPHJlY3QgeD0iMTUiIHk9IjIzNSIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjUiIHk9IjI1NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPk1vbm9jb3QgUm9vdCAoZS5nLiBNYWl6ZSk6PC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjI3OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBQb2x5YXJjaCAoJmd0OzYpIFJhZGlhbCBFeGFyY2ggVmFzY3VsYXIgQnVuZGxlcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjk5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIExhcmdlLCB3ZWxsLWRldmVsb3BlZCBjZW50cmFsIFBpdGguPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjMxOSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBDYXNwYXJpYW4gc3RyaXBzIHByZXNlbnQgaW4gZW5kb2Rlcm1pcy48L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMzM5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIE5PIGNhbWJpdW0gZm9ybWF0aW9uIOKelCBOTyBzZWNvbmRhcnkgZ3Jvd3RoLjwvdGV4dD4KCiAgICA8IS0tIDIuIERpY290IHZzIE1vbm9jb3QgU3RlbSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3MCwgMCkiPgogICAgICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQyMCIgcng9IjE0IiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4wNikiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDx0ZXh0IHg9IjE3NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gU3RlbSBBbmF0b215IChEaWNvdCB2cyBNb25vY290KTwvdGV4dD4KCiAgICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzUiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyNSIgeT0iNzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj5EaWNvdCBTdGVtIChlLmcuIFN1bmZsb3dlcik6PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iOTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgQ29sbGVuY2h5bWF0b3VzIEh5cG9kZXJtaXMuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTE0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIEVuZG9kZXJtaXMgZm9ybXMgU3RhcmNoIFNoZWF0aC48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxMzQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgUmluZyBBcnJhbmdlbWVudCBvZiBDb25qb2ludCBDb2xsYXRlcmFsIE9wZW4gYnVuZGxlcy48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxNTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgTGFyZ2UgY2VudHJhbCBQaXRoICZhbXA7IE1lZHVsbGFyeSBSYXlzLjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjE3NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM2OUYwQUUiPuKAoiBJbnRyYWZhc2NpY3VsYXIgQ2FtYml1bSBwcmVzZW50IChzZWNvbmRhcnkgZ3Jvd3RoKS48L3RleHQ+CgogICAgICA8cmVjdCB4PSIxNSIgeT0iMjM1IiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE3MCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyNTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj5Nb25vY290IFN0ZW0gKGUuZy4gTWFpemUpOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjI3OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBTY2xlcmVuY2h5bWF0b3VzIEh5cG9kZXJtaXMuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjk5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+4oCiIFVuZGlmZmVyZW50aWF0ZWQgR3JvdW5kIFRpc3N1ZSAobm8gY29ydGV4L3BpdGggc3BsaXQpLjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjMxOSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPuKAoiBTY2F0dGVyZWQgQ29uam9pbnQgQ29sbGF0ZXJhbCBDbG9zZWQgYnVuZGxlcy48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIzMzkiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj7igKIgTHlzaWdlbm91cyBXYXRlciBDYXZpdGllcyBpbnNpZGUgYnVuZGxlcy48L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEJvdHRvbSBCYXIgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDQ5NSkiPgogICAgPHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MCIgcng9IjEwIiBmaWxsPSJyZ2JhKDIyNCw2NCwyNTEsMC4xNSkiIHN0cm9rZT0iI0UwNDBGQiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgIDx0ZXh0IHg9IjM2MCIgeT0iMzEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Sb290czogUmFkaWFsIEV4YXJjaCB8IERpY290IFN0ZW06IFJpbmcgT3BlbiBFbmRhcmNoIHwgTW9ub2NvdCBTdGVtOiBTY2F0dGVyZWQgQ2xvc2VkPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #E040FB;' alt='Root & Stem Anatomy' /><p style='color: #E040FB; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q57: 3D Dicot vs Monocot Root & Stem Anatomy</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q58. Compare Dicot and Monocot Leaf cross-sections with 3D diagram.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Dicot leaf (dorsiventral, palisade & spongy mesophyll); Monocot leaf (isobilateral, bulliform motor cells, uniform mesophyll).<br><br><div style='text-align: center; margin: 10px 0;'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NjAgNTYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzAwMmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMzYjAwNTQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMWMwMDJiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNzYwIiBoZWlnaHQ9IjU2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnR3JhZDMpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjM4MCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaWNvdCAoRG9yc2l2ZW50cmFsKSB2cyBNb25vY290IChJc29iaWxhdGVyYWwpIExlYWYgQW5hdG9teTwvdGV4dD4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDY1KSI+CiAgICA8IS0tIDEuIERvcnNpdmVudHJhbCBEaWNvdCBMZWFmIC0tPgogICAgPHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MjAiIHJ4PSIxNCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMDYpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLiBEaWNvdCAoRG9yc2l2ZW50cmFsKSBMZWFmPC90ZXh0PgoKICAgIDxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIzNTAiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjUiIHk9Ijc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIEVwaWRlcm1pcyAmYW1wOyBTdG9tYXRhOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSI5NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgRGlzdGluY3QgVXBwZXIgKEFkYXhpYWwpICZhbXA7IExvd2VyIChBYmF4aWFsKSBlcGlkZXJtaXMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjExNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgSHlwb3N0b21hdG91czogU3RvbWF0YSBwcmVzZW50IG1vc3RseSBvbiBsb3dlciBzdXJmYWNlLjwvdGV4dD4KCiAgICA8dGV4dCB4PSIyNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIERpZmZlcmVudGlhdGVkIE1lc29waHlsbDo8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTY3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICAxLiBQYWxpc2FkZSBQYXJlbmNoeW1hOiBFbG9uZ2F0ZWQgY29sdW1uYXIgY2VsbHMgb248L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMTg3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICAgICBhZGF4aWFsIHNpZGUgd2l0aCBhYnVuZGFudCBjaGxvcm9wbGFzdHMuPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIwNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgMi4gU3Bvbmd5IFBhcmVuY2h5bWE6IExvb3NlIHNwaGVyaWNhbCBjZWxscyB3aXRoPC90ZXh0PgogICAgPHRleHQgeD0iMjUiIHk9IjIyNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgICAgbGFyZ2UgYWlyIGNhdml0aWVzIGZvciBnYXMgZXhjaGFuZ2UuPC90ZXh0PgoKICAgIDx0ZXh0IHg9IjI1IiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj7igKIgVmFzY3VsYXIgU3lzdGVtICZhbXA7IFZlbmF0aW9uOjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIyNzciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFZhc2N1bGFyIGJ1bmRsZXMgZW5jbG9zZWQgYnkgcGFyZW5jaHltYXRvdXM8L3RleHQ+CiAgICA8dGV4dCB4PSIyNSIgeT0iMjk3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBCdW5kbGUgU2hlYXRoLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjI1IiB5PSIzMTciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFJldGljdWxhdGUgVmVuYXRpb24g4p6UIFZhcmlhYmxlIGJ1bmRsZSBzaXplcy48L3RleHQ+CgogICAgPCEtLSAyLiBJc29iaWxhdGVyYWwgTW9ub2NvdCBMZWFmIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcwLCAwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iNDIwIiByeD0iMTQiIGZpbGw9InJnYmEoMjI0LDY0LDI1MSwwLjA2KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHRleHQgeD0iMTc1IiB5PSIzMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTciIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRjhCQkQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLiBNb25vY290IChJc29iaWxhdGVyYWwpIExlYWY8L3RleHQ+CgogICAgICA8cmVjdCB4PSIxNSIgeT0iNTAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMzUwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlPSIjRTA0MEZCIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMjUiIHk9Ijc1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIEVwaWRlcm1pcyAmYW1wOyBTdG9tYXRhOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9Ijk3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBTdG9tYXRhIGVxdWFsIG9uIGJvdGggYWRheGlhbCBhbmQgYWJheGlhbCBzdXJmYWNlczwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjExNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgKEFtcGhpc3RvbWF0b3VzKS48L3RleHQ+CgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTQ1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0UwNDBGQiI+4oCiIFVuZGlmZmVyZW50aWF0ZWQgTWVzb3BoeWxsOjwvdGV4dD4KICAgICAgPHRleHQgeD0iMjUiIHk9IjE2NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNGRkYiPiAgTWVzb3BoeWxsIG5vdCBkaWZmZXJlbnRpYXRlZCBpbnRvIHBhbGlzYWRlL3Nwb25neS48L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIFVuaWZvcm0gcm91bmRlZCBjaGxvcmVuY2h5bWF0b3VzIGNlbGxzLjwvdGV4dD4KCiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0LjUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRTA0MEZCIj7igKIgQnVsbGlmb3JtIE1vdG9yIENlbGxzIChHcmFzc2VzKTo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIyMzciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIExhcmdlLCBlbXB0eSwgY29sb3JsZXNzIGVwaWRlcm1hbCBjZWxscyBvbiBhZGF4aWFsIHNpZGUuPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjU3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI0ZGRiI+ICBUdXJnb3IgbG9zcyBkdXJpbmcgZHJvdWdodCBjYXVzZXMgbGVhZiByb2xsaW5nIHRvPC90ZXh0PgogICAgICA8dGV4dCB4PSIyNSIgeT0iMjc3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzY5RjBBRSI+ICBtaW5pbWl6ZSB0cmFuc3BpcmF0aW9uIHdhdGVyIGxvc3MhPC90ZXh0PgoKICAgICAgPHRleHQgeD0iMjUiIHk9IjMwNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQuNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFMDQwRkIiPuKAoiBQYXJhbGxlbCBWZW5hdGlvbjo8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI1IiB5PSIzMjciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjRkZGIj4gIE5lYXJseSBzaW1pbGFyLXNpemVkIHZhc2N1bGFyIGJ1bmRsZXMuPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBCb3R0b20gQmFyIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCA0OTUpIj4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyMjQsNjQsMjUxLDAuMTUpIiBzdHJva2U9IiNFMDQwRkIiIHN0cm9rZS13aWR0aD0iMS44Ii8+CiAgICA8dGV4dCB4PSIzNjAiIHk9IjMxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNC41IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y4QkJEMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGljb3QgTGVhZjogUGFsaXNhZGUvU3Bvbmd5IE1lc29waHlsbCB8IE1vbm9jb3QgTGVhZjogQnVsbGlmb3JtIENlbGxzICZhbXA7IFBhcmFsbGVsIFZlaW5zPC90ZXh0PgogIDwvZz4KPC9zdmc+' style='width: 100%; max-width: 580px; height: auto; border-radius: 10px; border: 1.5px solid #E040FB;' alt='Leaf Anatomy' /><p style='color: #E040FB; font-size: 13px; margin-top: 4px; font-weight: bold;'>Figure Q58: 3D Dicot vs Monocot Leaf Anatomy</p></div>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q59. Detail structure of Epidermal Tissue System in dicots vs monocots.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Includes epidermis, cuticle, stomata (kidney guard cells in dicots, dumbbell in monocots), trichomes, and root hairs.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q60. Explain 3 simple permanent tissues of Ground Tissue System.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Parenchyma (thin cellulosic wall, living, storage/photosynthesis), Collenchyma (pectin corners, flexible support), Sclerenchyma (lignified dead, fibers/sclereids).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q61. Detail Vascular Bundle classification based on cambium and arrangement.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Radial (alternating radii), Conjoint Collateral Open (with cambium), Conjoint Collateral Closed (without cambium), Bicollateral.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q62. Explain Endarch vs Exarch primary xylem development.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Endarch: Protoxylem inside towards pith (Stems); Exarch: Protoxylem outside towards periphery (Roots).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q63. Detail cross-sectional anatomy of Dicot Root (Sunflower).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epiblema with root hairs ➔ Parenchymatous Cortex ➔ Endodermis with Casparian strips ➔ Pericycle ➔ Diarch-Tetrarch Radial Exarch bundles ➔ Small Pith.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q64. Detail cross-sectional anatomy of Monocot Root (Maize).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epiblema ➔ Cortex ➔ Endodermis with Casparian strips ➔ Pericycle ➔ Polyarch (>6) Radial Exarch bundles ➔ Large central Pith.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q65. Compare Dicot Root and Monocot Root in tabular format.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Dicot Root (2-4 bundles, small pith, secondary growth present); Monocot Root (polyarch >6, large pith, no secondary growth).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q66. Detail cross-sectional anatomy of Dicot Stem (Sunflower).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epidermis with trichomes ➔ Collenchymatous Hypodermis ➔ Parenchyma Cortex ➔ Starch Sheath ➔ Sclerenchyma Pericycle ➔ Ring Open bundles ➔ Pith.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q67. Detail cross-sectional anatomy of Monocot Stem (Maize).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Epidermis ➔ Sclerenchymatous Hypodermis ➔ Undifferentiated Ground Tissue ➔ Scattered Conjoint Closed bundles with Lysigenous Water Cavities.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q68. Compare Dicot Stem and Monocot Stem in tabular format.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Dicot Stem (collenchyma hypodermis, ring open bundles, cortex/pith split); Monocot Stem (sclerenchyma hypodermis, scattered closed bundles, lysigenous cavity).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q69. Detail cross-sectional anatomy of Dicot (Dorsiventral) Leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Adaxial & Abaxial Epidermis (Hypostomatous) ➔ Mesophyll (Palisade + Spongy) ➔ Reticulate vascular bundles with Parenchymatous Bundle Sheath.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q70. Detail cross-sectional anatomy of Monocot (Isobilateral) Leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Adaxial & Abaxial Epidermis (Amphistomatous) ➔ Bulliform cells on adaxial ➔ Undifferentiated Mesophyll ➔ Parallel uniform vascular bundles.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q71. Compare Dicot Leaf and Monocot Leaf in tabular format.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Dicot Leaf (dorsiventral, palisade/spongy, hypostomatous, reticulate); Monocot Leaf (isobilateral, uniform mesophyll, bulliform cells, amphistomatous).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q72. Explain structure and function of Casparian Strips in endodermis.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Waxy suberin bands on radial endodermal walls that force soil water and minerals to enter symplast path for selective uptake.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q73. Explain role of Bulliform Cells in drought tolerance of grasses.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Loss of turgor pressure during drought causes bulliform cells to shrink, rolling grass leaves inward to reduce exposed surface area.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q74. Explain anatomical significance of Lysigenous Water Cavity in monocot stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Breakdown of inner protoxylem elements creates water-filled cavity aiding axial water conduction in rapidly elongating monocot stems.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q75. Detail role of Pericycle in roots.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Outer vascular boundary layer that initiates lateral root branches and forms part of secondary vascular cambium.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q76. Explain Starch Sheath layer in dicot stems.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Innermost cortical endodermal layer storing dense starch grains that acts as a nutrient reservoir and gravitational sensor.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q77. Compare Xylem Vessels and Tracheids.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Vessels (wide perforated continuous tubes in angiosperms); Tracheids (narrow tapered pitted cells in gymnosperms/pteridophytes).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q78. Compare Sieve Tubes and Companion Cells.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Sieve tubes (enucleated conducting cells with sieve plates); Companion cells (nucleated parenchyma cells regulating sieve tube metabolism).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q79. Explain why monocots lack secondary growth.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Vascular bundles are closed (lacking cambium strips), preventing formation of secondary xylem and phloem.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q80. Explain anatomical differences between Collenchyma and Sclerenchyma.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Collenchyma (living, pectin corners, flexible); Sclerenchyma (dead, lignified uniform walls, rigid).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q81. Explain anatomical significance of Palisade Parenchyma.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Columnar cells packed vertically on upper leaf surface maximize light capture for active photosynthesis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q82. Explain anatomical significance of Spongy Parenchyma.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Loose arrangement with air cavities facilitates CO2 & O2 diffusion between stomatal pore and palisade cells.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q83. Detail structure of Stomatal Apparatus in Dicots vs Monocots.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Pore + 2 Guard cells (kidney in dicot, dumbbell in monocot) + surrounding subsidiary cells regulating stomatal opening.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q84. Detail anatomy of Parenchymatous Bundle Sheath in leaves.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Single layer of barrel-shaped parenchyma cells enclosing vascular bundles to protect conducting elements.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #E040FB;">Q85. Synthesize organizational hierarchy of plant body: Cells ➔ Tissues ➔ Tissue Systems ➔ Organs.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); border-left: 3px solid #E040FB; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #E040FB;">Detailed Solution:</b><br>
      Cells form simple/complex tissues ➔ Tissues organize into Epidermal, Ground, and Vascular systems ➔ Systems build Root, Stem, and Leaf organs.
    </div>
  </div>
  <!-- SECTION D: LONG ANSWER QUESTIONS (Q86 to Q100) -->
  <div style="background: rgba(224, 64, 251, 0.12); border: 1.5px solid #E040FB; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION D: Long Answer Questions (Q86 to Q100)</h2>
    <p style="color: #E040FB; margin: 0; font-size: 14px;">15 Advanced Conceptual & Analytical Questions • 5 Marks Each (Roman Subparts: (i) Theory + (ii) Step Numerical/Anatomical Audits)</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q86: Comprehensive Audit of Dicot vs Monocot Root Anatomy</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail complete cross-sectional anatomical breakdown of Dicot Root vs Monocot Root from Epiblema to Pith.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Epiblema with root hairs ➔ Parenchyma cortex ➔ Endodermis with suberin Casparian strips ➔ Pericycle. Dicot has 2-4 radial exarch bundles & small pith; Monocot has polyarch >6 bundles & large central pith.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Construct comparative anatomical key highlighting 5 fundamental diagnostic differences.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      1. Xylem patches (2-4 vs >6 polyarch). 2. Pith development (inconspicuous vs large). 3. Cambium (present vs absent). 4. Secondary growth (present vs absent). 5. Pericycle activity (gives lateral roots/cambium vs lateral roots only).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q87: Comprehensive Audit of Dicot vs Monocot Stem Anatomy</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail complete cross-sectional anatomical breakdown of Dicot Stem vs Monocot Stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Dicot: Epidermis with trichomes ➔ Collenchyma hypodermis ➔ Cortex ➔ Starch sheath endodermis ➔ Ring Open bundles ➔ Central pith & medullary rays. Monocot: Sclerenchyma hypodermis ➔ Undifferentiated ground tissue ➔ Scattered Closed bundles with lysigenous cavities.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Construct comparative diagnostic key highlighting 5 core differences.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      1. Hypodermis (collenchyma vs sclerenchyma). 2. Bundle arrangement (ring vs scattered). 3. Cambium (open vs closed). 4. Ground tissue (differentiated vs undifferentiated). 5. Protoxylem water cavity (absent vs present).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q88: Comprehensive Audit of Dicot (Dorsiventral) vs Monocot (Isobilateral) Leaf Anatomy</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail complete anatomical structure of Dorsiventral Dicot Leaf vs Isobilateral Monocot Leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Dicot: Hypostomatous, Palisade columnar + Spongy loose mesophyll, Reticulate venation variable bundles. Monocot: Amphistomatous, Uniform mesophyll, Bulliform cells in adaxial epidermis, Parallel uniform bundles.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain physiological significance of Bulliform Cells and Palisade Mesophyll.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Bulliform cells roll leaf during drought to limit transpiration; Palisade columnar cells maximize light absorption.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q89: Tissue Systems Functional Integration & Translocation</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail structural organization and functional specialization of Epidermal, Ground, and Vascular systems.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Epidermal system protects & controls transpiration; Ground system synthesizes food & stores nutrients; Vascular system translocates water (xylem) & sugars (phloem).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain how Endarch (Stem) and Exarch (Root) primary xylem arrangements arise during development.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Endarch: Protoxylem develops centrifugally towards center; Exarch: Protoxylem develops centripetally towards periphery.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q90: Ground Tissue System Differentiation & Support</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail structural, chemical, and functional differences among Parenchyma, Collenchyma, and Sclerenchyma.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Parenchyma (thin cellulosic wall, living, storage/photosynthesis); Collenchyma (pectin corner thick, living, flexible support); Sclerenchyma (lignified secondary wall, dead, rigid support).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain anatomical adaptations of Sclereids in fruit pulp and seed coats.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Short thick lignified sclereids provide hardness & protection to pear pulp, nut shells, and legume seed coats.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q91: Complex Vascular Tissues Architecture (Xylem & Phloem)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail cellular elements of Xylem (Tracheids, Vessels, Xylem Parenchyma, Fibers) and Phloem (Sieve Tubes, Companion Cells, Phloem Parenchyma, Fibers).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Xylem vessels & tracheids form dead lignified water conduits; Phloem sieve tubes & companion cells form living food translocation conduits.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain structural interdependence between Sieve Tube Elements and Companion Cells.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Sieve tubes lack nuclei at maturity; companion cells retain prominent nuclei and manage metabolic transport into sieve tubes via plasmodesmata.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q92: Casparian Strips & Apoplast-Symplast Transport Architecture</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail chemical composition, distribution, and barrier mechanism of Casparian Strips in endodermis.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Suberin bands on radial/transverse endodermal walls block apoplastic water flow, forcing water into symplast path.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain how Casparian strips generate Root Pressure for xylem sap ascent.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Selective active ion transport into vascular cylinder across endodermis lowers solute potential, creating osmotic root pressure.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q93: Vascular Bundle Types & Secondary Growth Potential</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail Radial, Conjoint Collateral Open, Conjoint Collateral Closed, and Bicollateral Vascular Bundles with diagrams.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Radial (roots, alternating radii); Open (dicot stems, with cambium); Closed (monocot stems, no cambium); Bicollateral (Cucurbitaceae, outer/inner phloem).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain why dicot stems undergo secondary growth while monocot stems do not.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Dicot stems possess fascicular cambium between xylem & phloem which forms secondary xylem/phloem rings.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q94: Root-Stem Transition Zone & Vascular Realignment</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail anatomical changes occurring at the Root-Stem Transition Zone in seedlings.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Exarch radial xylem of root splits, rotates 180 degrees, and fuses with phloem to form endarch conjoint collateral stem bundles.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain survival advantages of having exarch xylem in roots vs endarch xylem in stems.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Exarch root xylem withstands soil compression; Endarch stem xylem resists bending & wind tension.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q95: Anatomical Adaptations of Leaf Epidermis & Transpiration Control</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail anatomical adaptations of leaf epidermis (Cuticle, Stomatal density, Trichomes, Bulliform cells).</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Thick cuticle, hypostomatous stomatal arrangement, trichome coverage, and bulliform leaf rolling minimize transpiration.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Compare Stomatal Apparatus of Dicot (Reniform) vs Monocot (Dumbbell) Guard Cells.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Dicot guard cells have kidney shape with thick inner walls; Monocot guard cells have dumbbell shape with bulbous ends.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q96: Anatomical Differentiation of Monocot vs Dicot Plant Organs</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail diagnostic identification matrix for unknown transverse sections of Root vs Stem vs Leaf.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Root = Radial exarch bundles; Stem = Conjoint bundles; Leaf = Mesophyll tissue with epidermis on both sides.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Detail diagnostic key for Dicot vs Monocot in unknown sections.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Dicot = Ring open bundles / 2-4 root xylem / dorsiventral leaf; Monocot = Scattered closed bundles / polyarch root / isobilateral leaf.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q97: Ground Tissue Sub-zones in Dicot Axis</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail histology and functions of Hypodermis, General Cortex, Endodermis, Pericycle, Pith, and Medullary Rays in Dicot Stem.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Hypodermis (collenchyma support), Cortex (parenchyma storage), Endodermis (starch sheath), Pericycle (sclerenchyma protection), Pith (central storage), Rays (radial transport).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain origin and function of Medullary Rays during primary and secondary growth.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Parenchymatous rays conduct water, food, and gases radially between pith and cortex.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q98: Hydathodes & Guttation Anatomy</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail anatomical structure of Hydathodes at leaf margins and mechanism of Guttation.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Specialized pores at vein endings surrounded by epithem parenchyma; high root pressure forces liquid water drops out through hydathodes.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Differentiate Guttation through Hydathodes and Transpiration through Stomata.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Guttation = liquid water release at night via hydathodes; Transpiration = water vapor release in day via stomata.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q99: Secretory Tissues & Epidermal Trichome Specializations</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Detail structure and classification of Glandular Trichomes, Laticifers, and Resin Ducts.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Glandular trichomes secrete essential oils/terpenes; laticifers produce latex; resin ducts transport defensive resins.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Explain ecological and defensive roles of glandular trichomes in Solanaceae and Asteraceae.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      Secrete sticky or toxic secondary metabolites that paralyze insect pests and reduce herbivory.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(224, 64, 251, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #E040FB;">Q100: Master Synthesis: Unified Structural Architecture of Angiosperm Body</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(i) Synthesize complete structural framework connecting primary tissue differentiation from apical meristems ➔ tissue systems ➔ root, stem, leaf organ anatomy.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 8px 12px; border-left: 3px solid #E040FB; margin-bottom: 10px;">
      Protoderm forms Epidermal system; Ground Meristem forms Ground system (cortex/pith); Procambium forms Vascular system (xylem/phloem).
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #E040FB;">(ii) Write diagnostic anatomical key for identifying any unknown angiosperm tissue section.</b></p>
    <div style="background: rgba(224, 64, 251, 0.05); padding: 10px 12px; border-left: 3px solid #E040FB;">
      1. Radial exarch = Root (Dicot 2-4 vs Monocot >6). 2. Conjoint = Stem/Leaf (Ring open dicot stem vs Scattered closed monocot stem vs Dorsiventral/Isobilateral leaf).
    </div>
  </div>
</div>
`;
